import { Question, QuestionSet } from '@/lib/types/question'
import { PRICING } from '@/lib/constants'
import { loadQuestionsFromCSV } from './csv-parser'
import { getStateData } from '@/lib/utils/getStateData'
import type { StateKey } from '@/lib/constants'

// Cache for loaded questions to avoid repeated CSV parsing
const questionsCache: { [key: string]: Question[] } = {}

async function loadQuestionsFromCache(state: string, isPremium: boolean): Promise<Question[]> {
  const cacheKey = `${state}_${isPremium ? 'premium' : 'free'}`

  if (!questionsCache[cacheKey]) {
    try {
      if (state.endsWith('-cdl')) {
        const baseState = state.replace('-cdl', '')
        if (typeof window !== 'undefined') {
          const response = await fetch(`/api/cdl/questions?state=${baseState}&category=all&premium=${isPremium}`)
          if (!response.ok) {
            throw new Error('Failed to fetch CDL questions from API')
          }
          const data = await response.json()
          questionsCache[cacheKey] = data.questions || []
        } else {
          // Server-side: load directly by aggregating CSVs
          const cdlCategories = [
            'class_a', 'class_b', 'air_brakes', 'combination', 'pre_trip',
            'hazmat', 'passenger', 'bus', 'double', 'tank', 'ambulance'
          ]
          const categoryNameMap: Record<string, string> = {
            class_a: 'General Knowledge',
            class_b: 'Class B Core / General Knowledge',
            air_brakes: 'Air Brakes',
            combination: 'Combination Vehicles',
            pre_trip: 'Pre-Trip Inspection',
            hazmat: 'Hazardous Materials (HazMat)',
            passenger: 'Passenger Transport',
            bus: 'School Bus',
            double: 'Double / Triple Trailers',
            tank: 'Tanker Vehicles',
            ambulance: 'California CDL Ambulance'
          }
          const fs = require('fs')
          const path = require('path')
          const { CdlCSVParser } = require('./cdl-csv-parser')
          
          let allCdlQuestions: Question[] = []
          for (const cat of cdlCategories) {
            try {
              const filename = `${baseState}_cdl_${cat}_questions.csv`
              const csvPath = path.join(process.cwd(), 'public', 'data', filename)
              if (fs.existsSync(csvPath)) {
                const csvText = fs.readFileSync(csvPath, "utf-8")
                const categoryName = categoryNameMap[cat] || cat
                const parsed = CdlCSVParser.parseCSV(csvText, baseState, categoryName)
                parsed.forEach((q: Question) => {
                  q.isPremium = isPremium
                })
                allCdlQuestions.push(...parsed)
              }
            } catch (e) {
              // ignore silently
            }
          }
          questionsCache[cacheKey] = allCdlQuestions
        }
      } else {
        // Check if running on client-side
        if (typeof window !== 'undefined') {
          // Client-side: fetch from API route
          const response = await fetch(`/api/questions?state=${state}&premium=${isPremium}`)
          if (!response.ok) {
            throw new Error('Failed to fetch questions from API')
          }
          const data = await response.json()
          questionsCache[cacheKey] = data.questions || []
        } else {
          // Server-side: load directly from CSV
          questionsCache[cacheKey] = await loadQuestionsFromCSV(state, isPremium)
        }
      }
    } catch (error) {
      console.error('Failed to load questions:', error)
      questionsCache[cacheKey] = generateMockQuestions(state, isPremium) // Fallback to mock data
    }
  }

  return questionsCache[cacheKey]
}

export async function getStateQuestions(state: string, isPremium: boolean = false): Promise<QuestionSet> {
  // Load questions from CSV files
  const questions = await loadQuestionsFromCache(state, isPremium)

  // If premium is requested but we don't have premium data, load free data as fallback
  if (isPremium && questions.length === 0) {
    const freeQuestions = await loadQuestionsFromCache(state, false)
    return {
      state,
      questions: freeQuestions,
      totalQuestions: freeQuestions.length,
      freeQuestionsCount: Math.min(PRICING.FREE_QUESTIONS_LIMIT, freeQuestions.length),
      premiumQuestionsCount: freeQuestions.length
    }
  }

  return {
    state,
    questions,
    totalQuestions: questions.length,
    freeQuestionsCount: isPremium ? questions.length : Math.min(PRICING.FREE_QUESTIONS_LIMIT, questions.length),
    premiumQuestionsCount: questions.length
  }
}

function generateMockQuestions(state: string, isPremium: boolean): Question[] {
  const chapters = [
    '1. Traffic Laws and Regulations',
    '2. Road Signs and Signals',
    '3. Safe Driving Practices',
    '4. Vehicle Operation',
    '5. Parking and Stopping',
    '6. Sharing the Road'
  ]
  const difficulties: ('easy' | 'medium' | 'hard')[] = ['easy', 'medium', 'hard']

  // Reduced fallback questions since we have real CSV data
  const totalQuestions = isPremium ? 100 : Math.min(PRICING.FREE_QUESTIONS_LIMIT, 20)
  const questions: Question[] = []

  for (let i = 1; i <= totalQuestions; i++) {
    const chapter = chapters[Math.floor(Math.random() * chapters.length)]
    const difficulty = difficulties[Math.floor(Math.random() * difficulties.length)]
    const isFreeQuestion = i <= PRICING.FREE_QUESTIONS_LIMIT
    const isUncommonSense = Math.random() < 0.15 // 15% are uncommon sense questions
    const isRoadSign = chapter === '2. Road Signs and Signals'

    questions.push({
      id: `${state}_fallback_${i}`,
      state,
      question: `Sample ${state} Real Estate question: What is the speed limit in a residential area?`,
      options: [
        '25 mph',
        '35 mph',
        '45 mph',
        '55 mph'
      ],
      correctAnswer: 0,
      explanation: `The speed limit in residential areas is typically 25 mph unless otherwise posted. This helps ensure the safety of pedestrians, children, and other drivers in neighborhoods.`,
      category: chapter.split('. ')[1], // Use chapter as category
      chapter,
      difficulty,
      isPremium: !isFreeQuestion,
      isUncommonSense,
      isRoadSign
    })
  }

  return questions
}

export async function getPracticeQuestions(state: string, count: number = 20, isPremium: boolean = false): Promise<Question[]> {
  const questionSet = await getStateQuestions(state, isPremium)
  const availableQuestions = isPremium
    ? questionSet.questions
    : questionSet.questions.filter(q => !q.isPremium)

  // Shuffle and return requested count
  const shuffled = [...availableQuestions].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}

function cleanQuestionText(questionText: string): string {
  // Remove prefixes like "Sample texas Real Estate question #304:" or "Sample California Real Estate Question 123:"
  return questionText.replace(/^Sample\s+\w+\s+Real Estate\s+[Qq]uestion\s*#?\d*:\s*/i, '').trim()
}

export async function getMockExamQuestions(state: string): Promise<Question[]> {
  const questionSet = await getStateQuestions(state, true) // Mock exams are premium only

  // Get state-specific question count from testOverview
  const stateData = getStateData(state as StateKey)
  const examQuestionCount = stateData.testOverview.totalQuestions
  const shuffled = [...questionSet.questions].sort(() => Math.random() - 0.5)

  // Clean question text to remove prefixes
  const cleanedQuestions = shuffled.map(question => ({
    ...question,
    question: cleanQuestionText(question.question)
  }))

  return cleanedQuestions.slice(0, examQuestionCount)
}

export function calculateScore(questions: Question[], answers: (number | null)[], state?: string): {
  score: number
  correctCount: number
  totalCount: number
  percentage: number
  passed: boolean
  passingScore?: number
} {
  const correctCount = questions.reduce((count, question, index) => {
    return count + (answers[index] === question.correctAnswer ? 1 : 0)
  }, 0)

  const totalCount = questions.length
  const percentage = (correctCount / totalCount) * 100

  // Get state-specific passing score if state is provided
  let passingScore = 80 // Default 80% passing grade
  if (state) {
    try {
      const stateData = getStateData(state as StateKey)
      const passingPercentage = (stateData.testOverview.passingScore / stateData.testOverview.totalQuestions) * 100
      passingScore = Math.round(passingPercentage)
    } catch {
      console.warn('Could not get state-specific passing score, using default 80%')
    }
  }

  const passed = percentage >= passingScore

  return {
    score: correctCount,
    correctCount,
    totalCount,
    percentage: Math.round(percentage * 100) / 100,
    passed,
    passingScore
  }
}

export function analyzeCategoryPerformance(questions: Question[], answers: (number | null)[]): {
  [category: string]: {
    correct: number
    total: number
    percentage: number
  }
} {
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

export async function getUncommonSenseQuestions(state: string): Promise<Question[]> {
  const questionSet = await getStateQuestions(state, true)
  return questionSet.questions.filter(q => q.isUncommonSense)
}

export async function getRoadSignQuestions(state: string): Promise<Question[]> {
  const questionSet = await getStateQuestions(state, true)
  return questionSet.questions.filter(q => q.isRoadSign)
}

export async function getQuestionsByChapter(state: string, chapter: string): Promise<Question[]> {
  const questionSet = await getStateQuestions(state, true)
  return questionSet.questions.filter(q => q.chapter === chapter)
}

export async function getIncorrectQuestions(state: string, incorrectQuestionIds: string[]): Promise<Question[]> {
  const questionSet = await getStateQuestions(state, true)
  return questionSet.questions.filter(q => incorrectQuestionIds.includes(q.id))
}