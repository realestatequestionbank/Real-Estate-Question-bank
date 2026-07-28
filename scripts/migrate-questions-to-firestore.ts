/**
 * Migration script to upload CSV questions to Firestore
 *
 * Run with: npx ts-node --project tsconfig.scripts.json scripts/migrate-questions-to-firestore.ts
 * Or: npx tsx scripts/migrate-questions-to-firestore.ts
 */

import { initializeApp, cert } from 'firebase-admin/app'
import { getFirestore, WriteBatch } from 'firebase-admin/firestore'
import { promises as fs } from 'fs'
import path from 'path'
import * as dotenv from 'dotenv'

// Load environment variables
dotenv.config({ path: '.env.local' })

const STATES = [
  'alabama', 'alaska', 'arizona', 'arkansas', 'california', 'colorado',
  'connecticut', 'delaware', 'florida', 'georgia', 'hawaii', 'idaho', 'illinois',
  'indiana', 'iowa', 'kansas', 'kentucky', 'louisiana', 'maine', 'maryland',
  'massachusetts', 'michigan', 'minnesota', 'mississippi', 'missouri',
  'montana', 'nebraska', 'nevada', 'new-hampshire', 'new-jersey', 'new-mexico',
  'new-york', 'north-carolina', 'north-dakota', 'ohio', 'oklahoma', 'oregon',
  'pennsylvania', 'rhode-island', 'south-carolina', 'south-dakota', 'tennessee',
  'texas', 'utah', 'vermont', 'virginia', 'washington', 'west-virginia',
  'wisconsin', 'wyoming'
]

interface Question {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  category: string
  difficulty: string
  state: string
  isPremium: boolean
}

function parseCSVLine(line: string): string[] {
  const result: string[] = []
  let current = ''
  let inQuotes = false

  for (let i = 0; i < line.length; i++) {
    const char = line[i]

    if (char === '"') {
      inQuotes = !inQuotes
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim())
      current = ''
    } else {
      current += char
    }
  }

  result.push(current.trim())
  return result
}

function parseCSVToQuestions(csvContent: string, state: string): Question[] {
  const lines = csvContent.trim().split('\n')
  const header = parseCSVLine(lines[0])

  return lines.slice(1).map((line, index) => {
    const values = parseCSVLine(line)
    const csvQuestion: Record<string, string> = {}

    header.forEach((key, i) => {
      csvQuestion[key] = values[i] || ''
    })

    // Parse options
    const optionsArray: string[] = []
    if (csvQuestion.options) {
      let cleanOptions = csvQuestion.options
      if (cleanOptions.startsWith('"""') && cleanOptions.endsWith('"""')) {
        cleanOptions = cleanOptions.slice(3, -3)
      } else if (cleanOptions.startsWith('"') && cleanOptions.endsWith('"')) {
        cleanOptions = cleanOptions.slice(1, -1)
      }

      const optionPairs: string[] = []
      let currentOption = ''
      let i = 0

      while (i < cleanOptions.length) {
        const char = cleanOptions[i]

        if ((char === ',' || char === ' ') && i + 2 < cleanOptions.length) {
          const nextChar = cleanOptions[i + 1]
          const charAfterNext = cleanOptions[i + 2]

          if (/[a-z]/i.test(nextChar) && charAfterNext === ':' && currentOption.trim()) {
            optionPairs.push(currentOption.trim())
            currentOption = ''
            i++
            continue
          }
        }

        currentOption += char
        i++
      }

      if (currentOption.trim()) {
        optionPairs.push(currentOption.trim())
      }

      optionPairs.forEach(pair => {
        const colonIndex = pair.indexOf(':')
        if (colonIndex > 0) {
          optionsArray.push(pair.substring(colonIndex + 1).trim())
        }
      })
    }

    // Clean correct answer
    let cleanCorrectAnswer = csvQuestion['correct-answer'] || ''
    if (cleanCorrectAnswer.startsWith('"""') && cleanCorrectAnswer.endsWith('"""')) {
      cleanCorrectAnswer = cleanCorrectAnswer.slice(3, -3)
    } else if (cleanCorrectAnswer.startsWith('"') && cleanCorrectAnswer.endsWith('"')) {
      cleanCorrectAnswer = cleanCorrectAnswer.slice(1, -1)
    }

    // Clean explanation
    let cleanExplanation = csvQuestion.note || ''
    if (cleanExplanation.startsWith('"""') && cleanExplanation.endsWith('"""')) {
      cleanExplanation = cleanExplanation.slice(3, -3)
    } else if (cleanExplanation.startsWith('"') && cleanExplanation.endsWith('"')) {
      cleanExplanation = cleanExplanation.slice(1, -1)
    }

    return {
      id: `${state}-free-${index + 1}`,
      question: csvQuestion.question || '',
      options: optionsArray,
      correctAnswer: cleanCorrectAnswer === 'a' ? 0 :
        cleanCorrectAnswer === 'b' ? 1 :
        cleanCorrectAnswer === 'c' ? 2 : 3,
      explanation: cleanExplanation,
      category: csvQuestion['section-name'] || '',
      difficulty: csvQuestion.difficulty === 'difficult' ? 'hard' : (csvQuestion.difficulty || 'medium'),
      state: state,
      isPremium: false
    }
  })
}

async function migrateState(db: FirebaseFirestore.Firestore, state: string): Promise<number> {
  const filePath = path.join(process.cwd(), 'public', 'data', `questions_${state}_free.csv`)

  try {
    const csvContent = await fs.readFile(filePath, 'utf-8')
    const questions = parseCSVToQuestions(csvContent, state)

    if (questions.length === 0) {
      console.log(`  No questions found for ${state}`)
      return 0
    }

    // Use batched writes (max 500 per batch)
    const batchSize = 500
    let totalWritten = 0

    for (let i = 0; i < questions.length; i += batchSize) {
      const batch: WriteBatch = db.batch()
      const chunk = questions.slice(i, i + batchSize)

      for (const question of chunk) {
        const docRef = db.collection('free_questions').doc(question.id)
        batch.set(docRef, question)
      }

      await batch.commit()
      totalWritten += chunk.length
    }

    console.log(`  Migrated ${totalWritten} questions for ${state}`)
    return totalWritten
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      console.log(`  No CSV file found for ${state}, skipping`)
      return 0
    }
    throw error
  }
}

async function main() {
  console.log('Starting migration to Firestore...\n')

  // Initialize Firebase Admin
  const projectId = process.env.FIREBASE_PROJECT_ID
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL
  const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n')

  if (!projectId || !clientEmail || !privateKey) {
    console.error('Missing Firebase Admin credentials. Please check your .env.local file.')
    console.error('Required: FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY')
    process.exit(1)
  }

  const app = initializeApp({
    credential: cert({ projectId, clientEmail, privateKey })
  })

  const db = getFirestore(app)

  let totalQuestions = 0

  for (const state of STATES) {
    console.log(`Processing ${state}...`)
    const count = await migrateState(db, state)
    totalQuestions += count
  }

  console.log(`\nMigration complete! Total questions migrated: ${totalQuestions}`)
  process.exit(0)
}

main().catch((error) => {
  console.error('Migration failed:', error)
  process.exit(1)
})
