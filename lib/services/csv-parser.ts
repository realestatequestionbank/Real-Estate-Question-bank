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

    const isRealEstateFormat = headers.includes('Topic') && headers.includes('Option A')

    // Pre-scan to identify unique topics in order of appearance
    const uniqueTopics: string[] = []
    if (isRealEstateFormat) {
      const topicIndex = headers.indexOf('Topic')
      if (topicIndex >= 0) {
        for (let i = 1; i < lines.length; i++) {
          const line = lines[i].trim()
          if (!line) continue
          const values = this.parseCSVLine(line)
          if (values.length > topicIndex) {
            let topic = values[topicIndex].trim()
            if (topic.startsWith('"') && topic.endsWith('"')) {
              topic = topic.slice(1, -1)
            }
            if (topic && !uniqueTopics.includes(topic)) {
              uniqueTopics.push(topic)
            }
          }
        }
      }
    }

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim()
      if (!line) continue

      try {
        const values = this.parseCSVLine(line)
        if (values.length < headers.length) continue

        const row: Record<string, string> = {}
        headers.forEach((header, index) => {
          row[header] = values[index] || ''
        })

        let questionText = ''
        let options: string[] = []
        let correctAnswer = 0
        let explanation = ''
        let category = 'General Knowledge'
        let chapter = '1. General Knowledge'
        let difficulty: 'easy' | 'medium' | 'hard' = 'medium'

        if (isRealEstateFormat) {
          questionText = row['Question'] || ''
          
          const optionA = row['Option A'] || ''
          const optionB = row['Option B'] || ''
          const optionC = row['Option C'] || ''
          const optionD = row['Option D'] || ''
          options = [optionA, optionB, optionC, optionD].map(opt => {
            let clean = opt.trim()
            if (clean.startsWith('"') && clean.endsWith('"')) {
              clean = clean.slice(1, -1)
            }
            return clean
          }).filter(Boolean)

          const ansLetter = (row['Correct Answer'] || '').trim().toUpperCase()
          if (ansLetter === 'A') correctAnswer = 0
          else if (ansLetter === 'B') correctAnswer = 1
          else if (ansLetter === 'C') correctAnswer = 2
          else if (ansLetter === 'D') correctAnswer = 3
          else correctAnswer = 0

          explanation = row['Explanation'] || ''
          const topicName = row['Topic'] || 'General Knowledge'
          category = topicName

          // Dynamically map topicName to a sequentially numbered chapter
          const topicOrderIndex = uniqueTopics.indexOf(topicName)
          const chapterNum = topicOrderIndex >= 0 ? topicOrderIndex + 1 : 1
          chapter = `${chapterNum}. ${topicName}`

          if (explanation.startsWith('"') && explanation.endsWith('"')) {
            explanation = explanation.slice(1, -1)
          }
          if (questionText.startsWith('"') && questionText.endsWith('"')) {
            questionText = questionText.slice(1, -1)
          }
        } else {
          let cleanOptionsString = row.options || ''
          if (cleanOptionsString.startsWith('"""') && cleanOptionsString.endsWith('"""')) {
            cleanOptionsString = cleanOptionsString.slice(3, -3)
          } else if (cleanOptionsString.startsWith('"') && cleanOptionsString.endsWith('"')) {
            cleanOptionsString = cleanOptionsString.slice(1, -1)
          }

          options = this.parseOptions(cleanOptionsString)
          if (options.length < 2) continue

          let cleanCorrectAnswerString = row['correct-answer'] || ''
          if (cleanCorrectAnswerString.startsWith('"""') && cleanCorrectAnswerString.endsWith('"""')) {
            cleanCorrectAnswerString = cleanCorrectAnswerString.slice(3, -3)
          } else if (cleanCorrectAnswerString.startsWith('"') && cleanCorrectAnswerString.endsWith('"')) {
            cleanCorrectAnswerString = cleanCorrectAnswerString.slice(1, -1)
          }

          correctAnswer = this.parseCorrectAnswer(cleanCorrectAnswerString, cleanOptionsString)
          const sectionNum = parseInt(row['section-num']) || 1
          category = row['section-name'] || 'General Knowledge'
          chapter = `${sectionNum}. ${category}`

          if (row.difficulty === 'easy') difficulty = 'easy'
          else if (row.difficulty === 'difficult') difficulty = 'hard'
          else if (row.difficulty === 'medium') difficulty = 'medium'

          explanation = row.note || ''
          if (explanation.startsWith('"""') && explanation.endsWith('"""')) {
            explanation = explanation.slice(3, -3)
          } else if (explanation.startsWith('"') && explanation.endsWith('"')) {
            explanation = explanation.slice(1, -1)
          }
          questionText = row.question || ''
        }

        let isUncommonSense = row.difficulty === 'difficult'
        const isRoadSign = (row['section-name'] || '').toLowerCase().includes('signs')

        const question: Question = {
          id: `${state}_${i}_${Date.now()}`,
          state,
          question: questionText,
          options,
          correctAnswer,
          explanation,
          category,
          chapter,
          difficulty,
          isPremium: false,
          isUncommonSense,
          isRoadSign
        }

        questions.push(question)
      } catch (error) {
        console.warn(`Failed to parse CSV line ${i}:`, error)
        continue
      }
    }

    if (isRealEstateFormat && questions.length > 0) {
      // Score all questions
      const scoredQuestions = questions.map((q, index) => {
        const score = CSVParser.scoreQuestion(q.question, q.explanation)
        return { index, score }
      })

      // Sort by score descending
      scoredQuestions.sort((a, b) => b.score - a.score)

      // Capped at exactly 15% max, and must have a score > 0 to be marked as hard
      const maxHardCount = Math.floor(questions.length * 0.15)
      let markedCount = 0;

      scoredQuestions.forEach(item => {
        if (item.score > 0 && markedCount < maxHardCount) {
          questions[item.index].isUncommonSense = true
          questions[item.index].difficulty = 'hard'
          markedCount++
        } else {
          questions[item.index].isUncommonSense = false
          // Preserve easy if already set, otherwise default to medium
          if (questions[item.index].difficulty !== 'easy') {
            questions[item.index].difficulty = 'medium'
          }
        }
      })
    }

    return questions
  }

  private static scoreQuestion(questionText: string, explanation: string): number {
    const text = (questionText + ' ' + explanation).toLowerCase()
    let score = 0

    // Heuristics 1: Real Estate Math (commission, calculations, splits, interest, tax)
    const mathKeywords = [
      'calculate', 'commission', 'interest', 'proration', 'prorated', 'cap rate', 
      'capitalization', 'loan-to-value', 'ltv', 'grm', 'gross rent multiplier', 
      'amortization', 'mortgage payment', 'percentage', 'split', 'prorate'
    ]
    for (const kw of mathKeywords) {
      if (text.includes(kw)) {
        score += 3
        break
      }
    }

    // Heuristics 2: Strict Deadlines, Timeframes & Fines
    const deadlineKeywords = [
      'days', 'months', 'years', 'fine', 'penalty', 'violation', 'disciplinary', 'license suspension', 'revocation'
    ]
    for (const kw of deadlineKeywords) {
      if (text.includes(kw)) {
        score += 2
        break
      }
    }

    // Heuristics 3: Subtle Legal/Concept Distinctions
    const legalKeywords = [
      'void', 'voidable', 'joint tenancy', 'tenancy in common', 'puffing', 'misrepresentation',
      'special agent', 'general agent', 'universal agent', 'respa', 'antitrust', 'sherman act',
      'fiduciary', 'redlining', 'blockbusting', 'steering', 'easement', 'eminent domain'
    ]
    for (const kw of legalKeywords) {
      if (text.includes(kw)) {
        score += 2
        break
      }
    }

    // Heuristics 4: Negative/Exceptional Logic
    const exceptionKeywords = [
      'except', 'unless', 'exempt', 'prohibited', 'unlawful', 'not'
    ]
    for (const kw of exceptionKeywords) {
      if (text.includes(kw)) {
        score += 1
        break
      }
    }

    return score;
  }
}

export async function loadQuestionsFromCSV(state: string, isPremium: boolean): Promise<Question[]> {
  const activeState = state;
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