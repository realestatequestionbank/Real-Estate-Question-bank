import { Question } from '@/lib/types/question'

interface CSVRow {
  'section-num': string
  'section-name': string
  'question': string
  'options': string
  'correct-answer': string
  'note': string
  'difficulty': string
  'handbook-page'?: string
  'handbook-section'?: string
}

export class CSVParser {
  private static parseCSVLine(line: string): string[] {
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

  private static parseOptions(optionsString: string): string[] {
    // Parse format: "a:Option 1,b:Option 2,c:Option 3,d:Option 4"
    // Handle commas within option text properly
    const options: string[] = []
    
    // Split options properly by looking for pattern ",<letter>:" or " <letter>:" but preserve commas within option text
    const optionPairs: string[] = []
    let currentOption = ''
    let i = 0
    
    while (i < optionsString.length) {
      const char = optionsString[i]
      
      // Check if we're at a split point: ",<letter>:" or " <letter>:"
      if ((char === ',' || char === ' ') && i + 2 < optionsString.length) {
        const nextChar = optionsString[i + 1]
        const charAfterNext = optionsString[i + 2]
        
        // If the pattern is ",<letter>:" or " <letter>:" where letter is a-z
        // But make sure it's not the very beginning of the string (first option)
        if (/[a-z]/i.test(nextChar) && charAfterNext === ':' && currentOption.trim()) {
          // We found a new option, save the current one
          optionPairs.push(currentOption.trim())
          currentOption = ''
          // Skip the separator, start with the letter
          i++
          continue
        }
      }
      
      currentOption += char
      i++
    }
    
    // Add the last option
    if (currentOption.trim()) {
      optionPairs.push(currentOption.trim())
    }

    // Extract text after the colon from each option
    for (const part of optionPairs) {
      const trimmed = part.trim()
      const colonIndex = trimmed.indexOf(':')
      if (colonIndex > 0) {
        const option = trimmed.substring(colonIndex + 1).trim()
        options.push(option)
      }
    }

    return options
  }

  private static parseCorrectAnswer(correctAnswerLetter: string, optionsString: string): number {
    // Convert letter (a, b, c, d) to index (0, 1, 2, 3)
    const letter = correctAnswerLetter.toLowerCase().trim()
    const letterIndex = letter.charCodeAt(0) - 'a'.charCodeAt(0)

    // Validate the index is within range of available options
    // Count options properly by parsing them instead of naive comma splitting
    const optionCount = this.parseOptions(optionsString).length
    return letterIndex >= 0 && letterIndex < optionCount ? letterIndex : 0
  }

  public static parseCSV(csvText: string, state: string): Question[] {
    const lines = csvText.split('\n')
    const headers = this.parseCSVLine(lines[0])
    const questions: Question[] = []

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim()
      if (!line) continue // Skip empty lines

      try {
        const values = this.parseCSVLine(line)
        if (values.length < headers.length) continue // Skip incomplete lines

        const row: CSVRow = {} as CSVRow
        headers.forEach((header, index) => {
          row[header as keyof CSVRow] = values[index] || ''
        })

        // Clean up the options field by removing extra quotes
        let cleanOptionsString = row.options
        if (cleanOptionsString.startsWith('"""') && cleanOptionsString.endsWith('"""')) {
          cleanOptionsString = cleanOptionsString.slice(3, -3)
        } else if (cleanOptionsString.startsWith('"') && cleanOptionsString.endsWith('"')) {
          cleanOptionsString = cleanOptionsString.slice(1, -1)
        }

        const options = this.parseOptions(cleanOptionsString)
        if (options.length < 2) continue // Skip questions with insufficient options

        // Clean up the correct answer field by removing extra quotes
        let cleanCorrectAnswerString = row['correct-answer']
        if (cleanCorrectAnswerString.startsWith('"""') && cleanCorrectAnswerString.endsWith('"""')) {
          cleanCorrectAnswerString = cleanCorrectAnswerString.slice(3, -3)
        } else if (cleanCorrectAnswerString.startsWith('"') && cleanCorrectAnswerString.endsWith('"')) {
          cleanCorrectAnswerString = cleanCorrectAnswerString.slice(1, -1)
        }

        const correctAnswer = this.parseCorrectAnswer(cleanCorrectAnswerString, cleanOptionsString)
        const sectionNum = parseInt(row['section-num']) || 1
        const chapterName = `${sectionNum}. ${row['section-name']}`

        // Determine if this is an uncommon sense question based on difficulty
        const isUncommonSense = row.difficulty === 'difficult'

        // Determine if this is a road sign question based on chapter content
        const isRoadSign = row['section-name'].toLowerCase().includes('signs') ||
          row['section-name'].toLowerCase().includes('signals') ||
          row['section-name'].toLowerCase().includes('markings')

        // Map difficulty values
        let difficulty: 'easy' | 'medium' | 'hard' = 'medium'
        if (row.difficulty === 'easy') difficulty = 'easy'
        else if (row.difficulty === 'difficult') difficulty = 'hard'
        else if (row.difficulty === 'medium') difficulty = 'medium'

        // Clean up the explanation field by removing extra quotes
        let cleanExplanation = row.note
        if (cleanExplanation.startsWith('"""') && cleanExplanation.endsWith('"""')) {
          cleanExplanation = cleanExplanation.slice(3, -3)
        } else if (cleanExplanation.startsWith('"') && cleanExplanation.endsWith('"')) {
          cleanExplanation = cleanExplanation.slice(1, -1)
        }

        const handbookPage = row['handbook-page'] ? parseInt(row['handbook-page']) : undefined
        const handbookSection = row['handbook-section'] || undefined

        const question: Question = {
          id: `${state}_${i}_${Date.now()}`,
          state,
          question: row.question,
          options,
          correctAnswer,
          explanation: cleanExplanation,
          category: row['section-name'],
          chapter: chapterName,
          difficulty,
          isPremium: false, // Will be set when loading
          isUncommonSense,
          isRoadSign,
          handbookPage,
          handbookSection
        }

        questions.push(question)
      } catch (error) {
        console.warn(`Failed to parse CSV line ${i}:`, error)
        continue // Skip malformed lines
      }
    }

    return questions
  }
}

export async function loadQuestionsFromCSV(state: string, isPremium: boolean): Promise<Question[]> {
  const STATES_WITH_QUESTIONS = [
    'california', 'florida', 'georgia', 'illinois', 'michigan',
    'north-carolina', 'new-york', 'ohio', 'pennsylvania', 'texas'
  ];
  const activeState = STATES_WITH_QUESTIONS.includes(state) ? state : 'california';
  const filename = isPremium
    ? `questions_${activeState}_premium.csv`
    : `questions_${activeState}_free.csv`
    
  try {
    // Only execute on server-side
    if (typeof window !== 'undefined') {
      console.error('CSV loading attempted on client-side')
      return []
    }

    // Use static imports - webpack will tree-shake this for client bundles
    const fs = require('fs/promises')
    const path = require('path')

    // Try multiple paths - lib first (for dev), then public (for production)
    const possiblePaths = [
      path.join(process.cwd(), 'lib', 'data', 'csv', filename),
      path.join(process.cwd(), 'public', 'data', filename)
    ]

    let csvText = ''
    let loadedFrom = ''

    for (const filePath of possiblePaths) {
      try {
        csvText = await fs.readFile(filePath, 'utf-8')
        loadedFrom = filePath
        break
      } catch (pathError) {
        continue // Try next path
      }
    }

    if (!csvText) {
      throw new Error(`Could not find ${filename} in any of the expected locations`)
    }

    console.log(`Successfully loaded ${filename} from: ${loadedFrom}`)
    const questions = CSVParser.parseCSV(csvText, state)

    // Mark questions as premium/free
    questions.forEach(question => {
      question.isPremium = isPremium
    })

    return questions
  } catch (error) {
    console.error(`Error loading questions from CSV for ${state}:`, error)
    return []
  }
}