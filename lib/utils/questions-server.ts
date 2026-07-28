import 'server-only'

import { Question } from '@/lib/types/question'
import { getAdminDb } from '@/lib/firebase/admin'
import { parseCSVToQuestions } from '@/lib/utils/csv-loader'
import fs from 'fs'
import path from 'path'

// Server-side function to load questions from Firestore (for SSR)
export async function loadFreeQuestionsServer(state: string): Promise<Question[]> {
  try {
    const db = getAdminDb()
    const snapshot = await db
      .collection('free_questions')
      .where('state', '==', state)
      .get()

    if (snapshot.empty) {
      // Fall back to CSV file if Firestore has no questions for this state
      return loadFreeQuestionsFromCSV(state)
    }

    const questions: Question[] = snapshot.docs.map(doc => {
      const data = doc.data()
      return {
        id: data.id || doc.id,
        question: data.question,
        options: data.options,
        correctAnswer: data.correctAnswer,
        explanation: data.explanation,
        category: data.category,
        difficulty: data.difficulty,
        state: data.state,
        isPremium: data.isPremium || false,
      }
    })

    return questions
  } catch (error) {
    console.error(`Error loading free questions from Firestore for ${state}, falling back to CSV:`, error)
    return loadFreeQuestionsFromCSV(state)
  }
}

// Fallback: load free questions from local CSV file
function loadFreeQuestionsFromCSV(state: string): Question[] {
  const STATES_WITH_QUESTIONS = [
    'california', 'florida', 'georgia', 'illinois', 'michigan',
    'north-carolina', 'new-york', 'ohio', 'pennsylvania', 'texas'
  ];
  const activeState = STATES_WITH_QUESTIONS.includes(state) ? state : 'california';
  const csvPath = path.join(process.cwd(), 'public', 'data', `questions_${activeState}_free.csv`)

  if (!fs.existsSync(csvPath)) {
    throw new Error(`Practice questions for ${state} are coming soon! Please check back later.`)
  }

  const csvContent = fs.readFileSync(csvPath, 'utf-8')
  const questions = parseCSVToQuestions(csvContent)
  return questions.map(q => ({ ...q, state }))
}
