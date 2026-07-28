import { doc, setDoc, getDoc, collection, query, where, getDocs, limit, updateDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase/config'
import { PracticeSession, MockExam, UserProgress } from '@/lib/types/question'
import { COLLECTIONS } from '@/lib/constants'
import { getStateQuestions } from './question-service'

export async function savePracticeSession(session: PracticeSession, isPremium: boolean = false): Promise<void> {
  // Only track progress for premium users
  if (!isPremium) {
    return
  }

  try {
    const sessionRef = doc(db, COLLECTIONS.PROGRESS, session.id)
    await setDoc(sessionRef, {
      ...session,
      type: 'practice',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    })

    // Update user progress
    await updateUserProgress(session.userId, session.state, session)
  } catch (error) {
    console.error('Error saving practice session:', error)
    throw error
  }
}

export async function saveMockExam(exam: MockExam, isPremium: boolean = false): Promise<void> {
  // Only track progress for premium users
  if (!isPremium) {
    return
  }

  try {
    const examRef = doc(db, COLLECTIONS.PROGRESS, exam.id)
    await setDoc(examRef, {
      ...exam,
      type: 'mock_exam',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    })

    // Update user progress
    await updateUserProgress(exam.userId, exam.state, exam)
  } catch (error) {
    console.error('Error saving mock exam:', error)
    throw error
  }
}

export async function getAllUserProgress(userId: string): Promise<{ [state: string]: UserProgress }> {
  try {
    const progressQuery = query(collection(db, COLLECTIONS.USERS, userId, 'stateProgress'))
    const progressSnapshot = await getDocs(progressQuery)
    const progressMap: { [state: string]: UserProgress } = {}

    progressSnapshot.forEach(doc => {
      progressMap[doc.id] = doc.data() as UserProgress
    })

    return progressMap
  } catch (error) {
    console.error('Error getting all user progress:', error)
    return {}
  }
}

export async function getUserProgress(userId: string, state: string): Promise<UserProgress | null> {
  try {
    const progressRef = doc(db, COLLECTIONS.USERS, userId, 'stateProgress', state)
    const progressDoc = await getDoc(progressRef)

    if (progressDoc.exists()) {
      return progressDoc.data() as UserProgress
    }

    return null
  } catch (error) {
    console.error('Error getting user progress:', error)
    return null
  }
}

export async function getUserSessions(userId: string, state?: string, limit_count: number = 10): Promise<(PracticeSession | MockExam)[]> {
  try {
    // Simplified query to avoid composite index requirement
    let q = query(
      collection(db, COLLECTIONS.PROGRESS),
      where('userId', '==', userId),
      limit(limit_count)
    )

    if (state) {
      q = query(
        collection(db, COLLECTIONS.PROGRESS),
        where('userId', '==', userId),
        where('state', '==', state),
        limit(limit_count)
      )
    }

    const snapshot = await getDocs(q)
    const sessions: (PracticeSession | MockExam)[] = []

    snapshot.forEach(doc => {
      sessions.push({ id: doc.id, ...doc.data() } as PracticeSession | MockExam)
    })

    sessions.sort((a, b) => {
      const aTime = (a as { createdAt?: string | number | Date }).createdAt || 0
      const bTime = (b as { createdAt?: string | number | Date }).createdAt || 0
      return new Date(bTime).getTime() - new Date(aTime).getTime()
    })

    return sessions.slice(0, limit_count)
  } catch (error) {
    console.error('Error getting user sessions:', error)
    return []
  }
}

async function updateUserProgress(userId: string, state: string, session: PracticeSession | MockExam): Promise<void> {
  try {
    // Map individual questions to the session's specific chapter/section if provided
    const sessionChapter = (session as { chapter?: string }).chapter
    if (sessionChapter) {
      session.questions.forEach(q => {
        q.chapter = sessionChapter
      })
    }

    // Persist last active state immediately when any progress is made
    try {
      const userRef = doc(db, COLLECTIONS.USERS, userId)
      await updateDoc(userRef, { lastActiveState: state })
      console.log('📍 Updated user lastActiveState to:', state)
    } catch (err) {
      console.error('Error updating lastActiveState:', err)
    }

    const progressRef = doc(db, COLLECTIONS.USERS, userId, 'stateProgress', state)
    const existingProgress = await getDoc(progressRef)

    let progress: UserProgress

    if (existingProgress.exists()) {
      progress = existingProgress.data() as UserProgress
    } else {
      progress = {
        userId,
        state,
        totalQuestionsAnswered: 0,
        correctAnswers: 0,
        accuracy: 0,
        averageScore: 0,
        weakCategories: [],
        strongCategories: [],
        lastStudied: new Date(),
        studyStreak: 0,
        readinessScore: 0,
        mockTestsTaken: 0,
        mockTestsPassed: 0,
        chapterProgress: {},
        incorrectQuestions: []
      }
    }

    // Update statistics
    const answeredQuestions = session.answers.filter(answer => answer !== null).length
    const correctCount = session.questions.reduce((count, question, index) => {
      return count + (session.answers[index] === question.correctAnswer ? 1 : 0)
    }, 0)

    // progress.totalQuestionsAnswered += answeredQuestions
    // progress.correctAnswers += correctCount
    // progress.accuracy = (progress.correctAnswers / progress.totalQuestionsAnswered) * 100

    // Update average score
    const sessionScore = session.score || 0
    if (progress.averageScore === 0) {
      progress.averageScore = sessionScore
    } else {
      progress.averageScore = (progress.averageScore + sessionScore) / 2
    }

    // Update study streak
    const today = new Date()
    const lastStudied = new Date(progress.lastStudied)
    const daysSinceLastStudy = Math.floor((today.getTime() - lastStudied.getTime()) / (1000 * 60 * 60 * 24))

    if (daysSinceLastStudy === 1) {
      progress.studyStreak += 1
    } else if (daysSinceLastStudy > 1) {
      progress.studyStreak = 1
    }

    progress.lastStudied = today

    // Update mock test statistics if this is a mock exam
    if ('passed' in session || 'timeLimit' in session) { // This is a mock exam
      const mockExam = session as MockExam
      if (!progress.mockTestsTaken) progress.mockTestsTaken = 0
      if (!progress.mockTestsPassed) progress.mockTestsPassed = 0

      progress.mockTestsTaken += 1
      if (mockExam.passed) {
        progress.mockTestsPassed += 1
      }
    }

    // Track incorrect questions for review
    if (!progress.incorrectQuestions) {
      progress.incorrectQuestions = []
    }
    session.questions.forEach((question, index) => {
      if (session.answers[index] !== null && session.answers[index] !== question.correctAnswer) {
        if (!progress.incorrectQuestions.includes(question.id)) {
          progress.incorrectQuestions.push(question.id)
        }
      }
    })

    // Update chapter progress if questions have chapter information
    console.log('📊 Updating chapter progress for session:', {
      questionsCount: session.questions.length,
      answersCount: session.answers.length,
      sessionChapter: (session as { chapter?: string }).chapter,
      questionChapters: session.questions.map(q => q.chapter || q.category).filter((v, i, a) => a.indexOf(v) === i)
    })
    await updateChapterProgress(progress, session.questions, session.answers, session.state)

    // Recalculate aggregated stats from chapter progress to ensure uniqueness
    // This happens AFTER updateChapterProgress so we include the latest session data
    if (progress.chapterProgress) {
      let totalQuestionsAttempted = 0
      let totalCorrectAnswers = 0

      Object.values(progress.chapterProgress).forEach(chapter => {
        totalQuestionsAttempted += chapter.questionsAttempted || 0
        totalCorrectAnswers += chapter.correctAnswers || 0
      })

      // Only update if we have valid calculations (safety check)
      if (totalQuestionsAttempted > 0) {
        progress.totalQuestionsAnswered = totalQuestionsAttempted
        progress.correctAnswers = totalCorrectAnswers
        progress.accuracy = (progress.correctAnswers / progress.totalQuestionsAnswered) * 100
      } else if (answeredQuestions > 0 && progress.totalQuestionsAnswered === 0) {
        // Fallback for edge case where chapter progress might fail but we have session data
        progress.totalQuestionsAnswered += answeredQuestions
        progress.correctAnswers += correctCount
        progress.accuracy = (progress.correctAnswers / progress.totalQuestionsAnswered) * 100
      }
    }

    // Calculate readiness score (now async with state parameter)
    progress.readinessScore = await calculateReadinessScore(progress, session.state)

    // Analyze category performance
    const categoryPerformance = analyzeCategoryPerformance(session.questions, session.answers)
    updateCategoryStrengths(progress, categoryPerformance)

    await setDoc(progressRef, progress)
  } catch (error) {
    console.error('Error updating user progress:', error)
    throw error
  }
}

function analyzeCategoryPerformance(questions: { category: string; correctAnswer: number }[], answers: (number | null)[]): { [category: string]: { correct: number; total: number; percentage: number } } {
  const categoryStats: { [key: string]: { correct: number; total: number } } = {}

  questions.forEach((question, index) => {
    if (!categoryStats[question.category]) {
      categoryStats[question.category] = { correct: 0, total: 0 }
    }

    categoryStats[question.category].total++
    if (answers[index] === question.correctAnswer) {
      categoryStats[question.category].correct++
    }
  })

  const result: { [category: string]: { correct: number; total: number; percentage: number } } = {}

  Object.keys(categoryStats).forEach(category => {
    const stats = categoryStats[category]
    result[category] = {
      ...stats,
      percentage: Math.round((stats.correct / stats.total) * 100)
    }
  })

  return result
}

function updateCategoryStrengths(progress: UserProgress, categoryPerformance: { [category: string]: { percentage: number } }): void {
  const weakThreshold = 70
  const strongThreshold = 85

  const weak: string[] = []
  const strong: string[] = []

  Object.entries(categoryPerformance).forEach(([category, performance]) => {
    if (performance.percentage < weakThreshold) {
      weak.push(category)
    } else if (performance.percentage >= strongThreshold) {
      strong.push(category)
    }
  })

  progress.weakCategories = weak
  progress.strongCategories = strong
}

async function updateChapterProgress(progress: UserProgress, questions: { id: string; chapter?: string; category?: string; correctAnswer: number }[], answers: (number | null)[], state: string): Promise<void> {
  if (!progress.chapterProgress) progress.chapterProgress = {}

  // Get all questions for the state to determine correct chapter totals
  const allQuestions = await getStateQuestions(state, true)
  const chapterTotals: { [chapter: string]: number } = {}

  // Calculate actual total questions per chapter
  allQuestions.questions.forEach(question => {
    const chapter = question.chapter || question.category || 'General'
    chapterTotals[chapter] = (chapterTotals[chapter] || 0) + 1
  })

  // Group questions by chapter
  const chapterQuestions: { [chapter: string]: { questions: { id: string; chapter?: string; category?: string; correctAnswer: number }[], answers: (number | null)[] } } = {}

  questions.forEach((question, index) => {
    const chapter = question.chapter || question.category || 'General'
    if (!chapterQuestions[chapter]) {
      chapterQuestions[chapter] = { questions: [], answers: [] }
    }
    chapterQuestions[chapter].questions.push(question)
    chapterQuestions[chapter].answers.push(answers[index])
  })

  // Update progress for each chapter
  Object.keys(chapterQuestions).forEach(chapter => {
    const chapterData = chapterQuestions[chapter]

    if (!progress.chapterProgress[chapter]) {
      progress.chapterProgress[chapter] = {
        chapter,
        totalQuestions: chapterTotals[chapter] || chapterData.questions.length,
        questionsAttempted: 0,
        correctAnswers: 0,
        accuracy: 0,
        completed: false,
        attemptedQuestions: {},
        correctQuestionNumbers: [],
        incorrectQuestionNumbers: []
      }
    }

    const chapterProgress = progress.chapterProgress[chapter]

    // Ensure we have the correct totalQuestions even for existing chapters
    chapterProgress.totalQuestions = chapterTotals[chapter] || chapterProgress.totalQuestions

    // Initialize question number arrays if they don't exist (for backwards compatibility)
    if (!chapterProgress.correctQuestionNumbers) {
      chapterProgress.correctQuestionNumbers = []
    }
    if (!chapterProgress.incorrectQuestionNumbers) {
      chapterProgress.incorrectQuestionNumbers = []
    }

    // Track individual question attempts and question numbers
    chapterData.questions.forEach((question, index) => {
      if (chapterData.answers[index] !== null) { // Only count answered questions
        const questionId = question.id
        const isCorrect = chapterData.answers[index] === question.correctAnswer

        // Question number is simply the index + 1 in the current session questions
        // This ensures consistency with how questions are displayed in the UI
        const questionNumber = index + 1

        if (!chapterProgress.attemptedQuestions[questionId]) {
          chapterProgress.attemptedQuestions[questionId] = {
            questionId,
            attempts: 0,
            correctAttempts: 0,
            lastAnswer: null,
            lastAttemptTime: new Date(),
            isCorrect: false
          }
        }

        const questionAttempt = chapterProgress.attemptedQuestions[questionId]
        questionAttempt.attempts += 1
        if (isCorrect) {
          questionAttempt.correctAttempts += 1
        }
        questionAttempt.lastAnswer = chapterData.answers[index]
        questionAttempt.lastAttemptTime = new Date()
        // Mark as correct if EVER answered correctly (cumulative)
        questionAttempt.isCorrect = questionAttempt.correctAttempts > 0

        // Track question numbers with chosen options in the new lists
        if (questionNumber > 0) { // Valid question number found
          const chosenOption = chapterData.answers[index]

          // Remove from both lists first to avoid duplicates
          chapterProgress.correctQuestionNumbers = chapterProgress.correctQuestionNumbers.filter(item => item.questionNumber !== questionNumber)
          chapterProgress.incorrectQuestionNumbers = chapterProgress.incorrectQuestionNumbers.filter(item => item.questionNumber !== questionNumber)

          // Simple logic: Store their latest choice in the appropriate list
          // Based on whether they got it right THIS TIME (not cumulative)
          if (isCorrect) {
            // Current answer is correct
            chapterProgress.correctQuestionNumbers.push({ questionNumber, chosenOption })
          } else {
            // Current answer is incorrect
            chapterProgress.incorrectQuestionNumbers.push({ questionNumber, chosenOption })
          }

          console.log(`📝 Question ${questionNumber}: ${isCorrect ? 'CORRECT' : 'INCORRECT'} with option ${chosenOption}`)
        }
      }
    })

    // Update chapter stats based on the new tuple arrays
    const totalAttempted = chapterProgress.correctQuestionNumbers.length + chapterProgress.incorrectQuestionNumbers.length
    const totalCorrect = chapterProgress.correctQuestionNumbers.length

    chapterProgress.questionsAttempted = totalAttempted
    chapterProgress.correctAnswers = totalCorrect
    chapterProgress.accuracy = chapterProgress.questionsAttempted > 0
      ? (chapterProgress.correctAnswers / chapterProgress.questionsAttempted) * 100
      : 0
    chapterProgress.lastStudied = new Date()

    // Consider chapter completed if:
    // 1. User has attempted at least 80% of questions OR at least 10 questions
    // 2. Current accuracy (latest answers) is >= 80%
    const minQuestionsForCompletion = Math.min(10, Math.ceil(chapterProgress.totalQuestions * 0.8))
    chapterProgress.completed = chapterProgress.accuracy >= 80 && chapterProgress.questionsAttempted >= minQuestionsForCompletion

    console.log(`📚 Updated progress for chapter "${chapter}":`, {
      questionsAttempted: chapterProgress.questionsAttempted,
      correctAnswers: chapterProgress.correctAnswers,
      accuracy: Math.round(chapterProgress.accuracy),
      completed: chapterProgress.completed,
      correctItems: chapterProgress.correctQuestionNumbers.length,
      incorrectItems: chapterProgress.incorrectQuestionNumbers.length
    })
  })
}


async function calculateReadinessScore(progress: UserProgress, state: string): Promise<number> {
  let score = 0

  // 1. Question Practice Score (0-60 points)
  let practiceScore = 0

  // Get total questions for the state to calculate coverage
  const allQuestions = await getStateQuestions(state, true)
  const totalQuestions = allQuestions.totalQuestions

  if (totalQuestions > 0 && progress.totalQuestionsAnswered > 0) {
    // Coverage (0-20 points): min(questions_attempted / total_questions, 1) × 20
    const coverageRatio = Math.min(progress.totalQuestionsAnswered / totalQuestions, 1)
    const coverageScore = coverageRatio * 20

    // Accuracy (0-40 points): (correct_answers / questions_attempted) × 40
    const accuracyScore = (progress.correctAnswers / progress.totalQuestionsAnswered) * 40

    practiceScore = coverageScore + accuracyScore
  }

  // 2. Mock Test Score (0-40 points)
  let mockTestScore = 0

  if (progress.mockTestsTaken > 0) {
    // Participation (0-20 points): min(mock_tests_taken / 5, 1) × 20
    const participationRatio = Math.min(progress.mockTestsTaken / 5, 1)
    const participationScore = participationRatio * 20

    // Pass Rate (0-20 points): (mock_tests_passed / mock_tests_taken) × 20
    const passRateScore = (progress.mockTestsPassed / progress.mockTestsTaken) * 20

    mockTestScore = participationScore + passRateScore
  }

  // Final Score: clamped to 0-100
  score = Math.min(Math.max(practiceScore + mockTestScore, 0), 100)

  return Math.round(score)
}


// Update a user's last active state specifically
export async function updateLastActiveState(userId: string, state: string): Promise<void> {
  try {
    const userRef = doc(db, COLLECTIONS.USERS, userId)
    await updateDoc(userRef, { lastActiveState: state })
    console.log('📍 Specifically updated user lastActiveState to:', state)
  } catch (error) {
    console.error('Error updating lastActiveState:', error)
  }
}

export async function resetChapterProgress(userId: string, state: string, chapter: string): Promise<void> {
  try {
    const progressRef = doc(db, COLLECTIONS.USERS, userId, 'stateProgress', state)
    const progressDoc = await getDoc(progressRef)

    if (progressDoc.exists()) {
      const progress = progressDoc.data() as UserProgress

      // Reset the specific chapter progress
      if (progress.chapterProgress && progress.chapterProgress[chapter]) {
        progress.chapterProgress[chapter] = {
          chapter,
          totalQuestions: progress.chapterProgress[chapter].totalQuestions,
          questionsAttempted: 0,
          correctAnswers: 0,
          accuracy: 0,
          completed: false,
          attemptedQuestions: {},
          correctQuestionNumbers: [],
          incorrectQuestionNumbers: []
        }

        // Update the document
        await setDoc(progressRef, progress)
        console.log(`Chapter progress reset for ${chapter}`)
      }
    }
  } catch (error) {
    console.error('Error resetting chapter progress:', error)
    throw error
  }
}

export async function getChapterProgressWithQuestions(
  userId: string,
  state: string,
  chapter: string,
  questions: { id: string }[]
): Promise<{ [questionId: string]: { attempted: boolean; correct: boolean; lastAnswer: number | null; attempts: number } }> {
  try {
    const progress = await getUserProgress(userId, state)
    const chapterProgress = progress?.chapterProgress?.[chapter]

    if (!chapterProgress) {
      return {}
    }

    const result: { [questionId: string]: { attempted: boolean; correct: boolean; lastAnswer: number | null; attempts: number } } = {}

    questions.forEach(question => {
      const attempt = chapterProgress.attemptedQuestions[question.id]
      result[question.id] = {
        attempted: !!attempt,
        correct: attempt?.isCorrect || false,
        lastAnswer: attempt?.lastAnswer || null,
        attempts: attempt?.attempts || 0
      }
    })

    return result
  } catch (error) {
    console.error('Error getting chapter progress with questions:', error)
    return {}
  }
}

export async function getFirstUnattemptedQuestion(
  userId: string,
  state: string,
  chapter: string,
  totalQuestions: number
): Promise<number> {
  try {
    const progress = await getUserProgress(userId, state)
    const chapterProgress = progress?.chapterProgress?.[chapter]

    if (!chapterProgress) {
      return 1 // Start with first question if no progress
    }

    const attemptedNumbers = new Set([
      ...chapterProgress.correctQuestionNumbers.map(item => item.questionNumber),
      ...chapterProgress.incorrectQuestionNumbers.map(item => item.questionNumber)
    ])

    // Find the first question number that hasn't been attempted
    for (let i = 1; i <= totalQuestions; i++) {
      if (!attemptedNumbers.has(i)) {
        return i
      }
    }

    // If all questions attempted, start from beginning
    return 1
  } catch (error) {
    console.error('Error getting first unattempted question:', error)
    return 1
  }
}

export async function getQuestionNumberStatus(
  userId: string,
  state: string,
  chapter: string
): Promise<{ correct: Array<{ questionNumber: number; chosenOption: number }>; incorrect: Array<{ questionNumber: number; chosenOption: number }>; unattempted: number[] }> {
  try {
    const progress = await getUserProgress(userId, state)
    const chapterProgress = progress?.chapterProgress?.[chapter]

    if (!chapterProgress) {
      return { correct: [], incorrect: [], unattempted: [] }
    }

    const correct = [...chapterProgress.correctQuestionNumbers]
    const incorrect = [...chapterProgress.incorrectQuestionNumbers]

    // Calculate unattempted by finding numbers not in either list
    const attempted = new Set([...correct.map(item => item.questionNumber), ...incorrect.map(item => item.questionNumber)])
    const totalQuestions = chapterProgress.totalQuestions
    const unattempted: number[] = []

    for (let i = 1; i <= totalQuestions; i++) {
      if (!attempted.has(i)) {
        unattempted.push(i)
      }
    }

    return { correct, incorrect, unattempted }
  } catch (error) {
    console.error('Error getting question number status:', error)
    return { correct: [], incorrect: [], unattempted: [] }
  }
}

export async function getProgressSummary(userId: string): Promise<{
  totalStates: number
  totalQuestionsAnswered: number
  correctAnswers: number
  averageAccuracy: number
  studyStreak: number
  readinessScore: number
  mockTestsTaken: number
  mockTestsPassed: number
  recentSessions: (PracticeSession | MockExam)[]
}> {
  try {
    // Get all user progress across states from the subcollection
    const progressQuery = query(
      collection(db, COLLECTIONS.USERS, userId, 'stateProgress')
    )

    const progressSnapshot = await getDocs(progressQuery)
    let totalStates = 0
    let totalQuestionsAnswered = 0
    let totalCorrectAnswers = 0
    let maxStudyStreak = 0
    let totalMockTestsTaken = 0
    let totalMockTestsPassed = 0
    let avgReadinessScore = 0

    progressSnapshot.forEach(doc => {
      const progress = doc.data() as UserProgress
      totalStates++
      totalQuestionsAnswered += progress.totalQuestionsAnswered
      totalCorrectAnswers += progress.correctAnswers
      maxStudyStreak = Math.max(maxStudyStreak, progress.studyStreak)
      totalMockTestsTaken += progress.mockTestsTaken || 0
      totalMockTestsPassed += progress.mockTestsPassed || 0
      avgReadinessScore += progress.readinessScore || 0
    })

    const averageAccuracy = totalQuestionsAnswered > 0
      ? (totalCorrectAnswers / totalQuestionsAnswered) * 100
      : 0

    // Calculate average readiness score across all states
    const readinessScore = totalStates > 0 ? Math.round(avgReadinessScore / totalStates) : 0

    // Get recent sessions (gracefully handle errors)
    let recentSessions: (PracticeSession | MockExam)[] = []
    try {
      recentSessions = await getUserSessions(userId, undefined, 5)
    } catch (error) {
      console.warn('Could not load recent sessions:', error)
      // Continue without recent sessions
    }

    return {
      totalStates,
      totalQuestionsAnswered,
      correctAnswers: totalCorrectAnswers,
      averageAccuracy: Math.round(averageAccuracy * 100) / 100,
      studyStreak: maxStudyStreak,
      readinessScore,
      mockTestsTaken: totalMockTestsTaken,
      mockTestsPassed: totalMockTestsPassed,
      recentSessions
    }
  } catch (error) {
    console.error('Error getting progress summary:', error)
    return {
      totalStates: 0,
      totalQuestionsAnswered: 0,
      correctAnswers: 0,
      averageAccuracy: 0,
      studyStreak: 0,
      readinessScore: 0,
      mockTestsTaken: 0,
      mockTestsPassed: 0,
      recentSessions: []
    }
  }
}

// NEW: Real-time individual question progress saving
interface QuestionProgress {
  userId: string
  state: string
  questionId: string
  answer: number
  correct: boolean
  timestamp: number
  chapter?: string
}

export async function saveQuestionProgress(progress: QuestionProgress): Promise<void> {
  try {
    // Create a unique document ID for this question progress
    const progressDoc = doc(db, COLLECTIONS.USERS, progress.userId, 'questionProgress', `${progress.state}_${progress.questionId}`)

    await setDoc(progressDoc, {
      ...progress,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }, { merge: true })

    console.log('✅ Question progress saved:', {
      questionId: progress.questionId,
      correct: progress.correct,
      state: progress.state
    })
  } catch (error) {
    console.error('❌ Failed to save question progress:', error)
    throw error
  }
}

export async function loadQuestionProgress(
  userId: string,
  state: string,
  questionIds: string[]
): Promise<{ [questionId: string]: { answer: number; correct: boolean; timestamp: number } }> {
  try {
    const progressData: { [questionId: string]: { answer: number; correct: boolean; timestamp: number } } = {}

    // Load progress for each question ID
    const progressPromises = questionIds.map(async (questionId) => {
      const progressDoc = doc(db, COLLECTIONS.USERS, userId, 'questionProgress', `${state}_${questionId}`)
      const progressSnap = await getDoc(progressDoc)

      if (progressSnap.exists()) {
        const data = progressSnap.data() as QuestionProgress
        progressData[questionId] = {
          answer: data.answer,
          correct: data.correct,
          timestamp: data.timestamp
        }
      }
    })

    await Promise.all(progressPromises)

    console.log('📥 Loaded question progress:', {
      questionsRequested: questionIds.length,
      questionsFound: Object.keys(progressData).length,
      state: state
    })

    return progressData
  } catch (error) {
    console.error('❌ Failed to load question progress:', error)
    return {}
  }
}