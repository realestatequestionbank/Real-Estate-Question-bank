import { Question } from '@/lib/types/question'

interface CdlCSVRow {
  id: string
  question: string
  image: string
  option_a: string
  option_b: string
  option_c: string
  option_d: string
  correct_answer: string
  explanation: string
}

export class CdlCSVParser {
  private static parseCSVLine(line: string): string[] {
    const result: string[] = []
    let current = ''
    let inQuotes = false

    for (let i = 0; i < line.length; i++) {
      const char = line[i]

      if (char === '"') {
        // Handle double quotes inside quoted fields
        if (inQuotes && line[i + 1] === '"') {
          current += '"'
          i++ // skip next quote
        } else {
          inQuotes = !inQuotes
        }
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

  public static parseCSV(csvText: string, state: string, categoryName: string): Question[] {
    const lines = csvText.split('\n')
    if (lines.length < 2) return []

    // Read headers
    const headers = this.parseCSVLine(lines[0])
    const questions: Question[] = []

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim()
      if (!line) continue // Skip empty lines

      try {
        const values = this.parseCSVLine(line)
        if (values.length < headers.length) continue // Skip incomplete lines

        const row: CdlCSVRow = {} as CdlCSVRow
        headers.forEach((header, index) => {
          const headerName = header.toLowerCase().trim()
          // Map header names properly
          if (headerName === 'id') row.id = values[index]
          else if (headerName === 'question') row.question = values[index]
          else if (headerName === 'image') row.image = values[index]
          else if (headerName === 'option_a') row.option_a = values[index]
          else if (headerName === 'option_b') row.option_b = values[index]
          else if (headerName === 'option_c') row.option_c = values[index]
          else if (headerName === 'option_d') row.option_d = values[index]
          else if (headerName === 'correct_answer') row.correct_answer = values[index]
          else if (headerName === 'explanation') row.explanation = values[index]
        })

        // Skip if required fields are missing
        if (!row.question || !row.option_a || !row.option_b || !row.correct_answer) {
          continue
        }

        // Clean quotes from text fields if they exist
        const cleanText = (str: string) => {
          if (!str) return ''
          if (str.startsWith('"') && str.endsWith('"')) {
            return str.slice(1, -1).replace(/""/g, '"').trim()
          }
          return str.replace(/""/g, '"').trim()
        }

        const questionText = cleanText(row.question)
        const optA = cleanText(row.option_a)
        const optB = cleanText(row.option_b)
        const optC = cleanText(row.option_c)
        const optD = cleanText(row.option_d)
        const explanationText = cleanText(row.explanation)
        const correctAnsLetter = cleanText(row.correct_answer).toUpperCase()

        // Construct options array and filter out empty options
        const optionsList = [optA, optB, optC, optD].filter(Boolean)

        // Parse correct answer
        let correctAnswerIndex = 0
        if (correctAnsLetter === 'A') correctAnswerIndex = 0
        else if (correctAnsLetter === 'B') correctAnswerIndex = 1
        else if (correctAnsLetter === 'C') correctAnswerIndex = 2
        else if (correctAnsLetter === 'D') correctAnswerIndex = 3

        const questionId = row.id ? `${state}_cdl_${categoryName.toLowerCase().replace(/[^a-z0-9]/g, '_')}_${row.id}` : `${state}_cdl_${categoryName.toLowerCase().replace(/[^a-z0-9]/g, '_')}_${i}_${Date.now()}`

        const question: Question = {
          id: questionId,
          state,
          question: questionText,
          options: optionsList,
          correctAnswer: correctAnswerIndex,
          explanation: explanationText,
          category: categoryName,
          chapter: `CDL: ${categoryName}`,
          difficulty: 'medium',
          isPremium: false,
          isUncommonSense: false,
          isRoadSign: false
        }

        questions.push(question)
      } catch (error) {
        console.warn(`Failed to parse CDL CSV line ${i}:`, error)
        continue
      }
    }

    return questions
  }
}
