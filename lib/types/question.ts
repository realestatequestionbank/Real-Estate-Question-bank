export interface Question {
  id: string
  state: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  category: string
  chapter?: string // for organizing questions by sections/chapters
  difficulty: 'easy' | 'medium' | 'hard'
  isPremium: boolean
  isUncommonSense?: boolean // for questions most people get wrong
  isRoadSign?: boolean // for road sign questions
  handbookPage?: number
  handbookSection?: string
}

export interface QuestionSet {
  state: string
  questions: Question[]
  totalQuestions: number
  freeQuestionsCount: number
  premiumQuestionsCount: number
}

export interface PracticeSession {
  id: string
  userId: string
  state: string
  questions: Question[]
  answers: (number | null)[]
  startTime: Date
  endTime?: Date
  score?: number
  isPremium: boolean
  completed: boolean
  chapter?: string // optional chapter identifier for chapter-specific practice
}

export interface MockExam {
  id: string
  userId: string
  state: string
  questions: Question[]
  answers: (number | null)[]
  startTime: Date
  endTime?: Date
  score?: number
  passed?: boolean
  timeLimit: number // in minutes
  completed: boolean
}

export interface UserProgress {
  userId: string
  state: string
  totalQuestionsAnswered: number
  correctAnswers: number
  accuracy: number
  averageScore: number
  weakCategories: string[]
  strongCategories: string[]
  lastStudied: Date
  studyStreak: number
  readinessScore: number
  mockTestsTaken: number
  mockTestsPassed: number
  chapterProgress: { [chapter: string]: ChapterProgress }
  incorrectQuestions: string[] // question IDs
}

export interface ChapterProgress {
  chapter: string
  totalQuestions: number
  questionsAttempted: number
  correctAnswers: number
  accuracy: number
  completed: boolean
  lastStudied?: Date
  attemptedQuestions: { [questionId: string]: QuestionAttempt }
  correctQuestionNumbers: Array<{ questionNumber: number; chosenOption: number }> // List of correct answers with chosen options
  incorrectQuestionNumbers: Array<{ questionNumber: number; chosenOption: number }> // List of incorrect answers with chosen options
}

export interface QuestionAttempt {
  questionId: string
  attempts: number
  correctAttempts: number
  lastAnswer: number | null
  lastAttemptTime: Date
  isCorrect: boolean
}