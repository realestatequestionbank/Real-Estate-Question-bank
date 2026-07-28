import { Question } from '@/lib/types/question'

export interface CSVQuestion {
  'section-num': string
  'section-name': string
  'question': string
  'options': string
  'correct-answer': string
  'note': string
  'difficulty': string
}

export function parseCSVToQuestions(csvContent: string): Question[] {
  const lines = csvContent.trim().split('\n')
  const header = parseCSVLine(lines[0])
  
  const isRealEstate = header.includes('Topic') || header.includes('Option A') || header.includes('Question')

  if (isRealEstate) {
    const topicIdx = header.findIndex(h => h.toLowerCase() === 'topic')
    const questionIdx = header.findIndex(h => h.toLowerCase() === 'question')
    const optAIdx = header.findIndex(h => h.toLowerCase() === 'option a')
    const optBIdx = header.findIndex(h => h.toLowerCase() === 'option b')
    const optCIdx = header.findIndex(h => h.toLowerCase() === 'option c')
    const optDIdx = header.findIndex(h => h.toLowerCase() === 'option d')
    const correctIdx = header.findIndex(h => h.toLowerCase() === 'correct answer')
    const explanationIdx = header.findIndex(h => h.toLowerCase() === 'explanation')

    return lines.slice(1).map((line, index) => {
      const values = parseCSVLine(line)
      const optionsArray: string[] = [
        (values[optAIdx] || '').replace(/^"|"$/g, '').trim(),
        (values[optBIdx] || '').replace(/^"|"$/g, '').trim(),
        (values[optCIdx] || '').replace(/^"|"$/g, '').trim(),
        (values[optDIdx] || '').replace(/^"|"$/g, '').trim()
      ]

      const rawCorrect = (values[correctIdx] || '').replace(/^"|"$/g, '').trim().toUpperCase()
      const correctAnswer = rawCorrect === 'A' ? 0 :
                            rawCorrect === 'B' ? 1 :
                            rawCorrect === 'C' ? 2 : 3

      return {
        id: `free-${index + 1}`,
        question: (values[questionIdx] || '').replace(/^"|"$/g, '').trim(),
        options: optionsArray,
        correctAnswer: correctAnswer,
        explanation: (values[explanationIdx] || '').replace(/^"|"$/g, '').trim(),
        category: (values[topicIdx] || '').replace(/^"|"$/g, '').trim(),
        difficulty: 'medium',
        state: '',
        isPremium: false
      }
    })
  }

  return lines.slice(1).map((line, index) => {
    const values = parseCSVLine(line)
    const csvQuestion: CSVQuestion = {
      'section-num': '',
      'section-name': '',
      'question': '',
      'options': '',
      'correct-answer': '',
      'note': '',
      'difficulty': ''
    }
    
    header.forEach((key, i) => {
      csvQuestion[key as keyof CSVQuestion] = values[i] || ''
    })
    
    // Parse options from the CSV format "a:Option A,b:Option B,c:Option C,d:Option D"
    const optionsArray: string[] = []
    if (csvQuestion.options) {
      // Clean up the options field by removing extra quotes
      let cleanOptions = csvQuestion.options
      if (cleanOptions.startsWith('"""') && cleanOptions.endsWith('"""')) {
        cleanOptions = cleanOptions.slice(3, -3)
      } else if (cleanOptions.startsWith('"') && cleanOptions.endsWith('"')) {
        cleanOptions = cleanOptions.slice(1, -1)
      }
      
      // Split options properly by looking for pattern ",<letter>:" or " <letter>:" but preserve commas within option text
      const optionPairs: string[] = []
      let currentOption = ''
      let i = 0
      
      while (i < cleanOptions.length) {
        const char = cleanOptions[i]
        
        // Check if we're at a split point: ",<letter>:" or " <letter>:"
        if ((char === ',' || char === ' ') && i + 2 < cleanOptions.length) {
          const nextChar = cleanOptions[i + 1]
          const charAfterNext = cleanOptions[i + 2]
          
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
      optionPairs.forEach(pair => {
        const colonIndex = pair.indexOf(':')
        if (colonIndex > 0) {
          optionsArray.push(pair.substring(colonIndex + 1).trim())
        }
      })
    }
    
    // Clean up the correct answer field by removing extra quotes
    let cleanCorrectAnswer = csvQuestion['correct-answer']
    if (cleanCorrectAnswer.startsWith('"""') && cleanCorrectAnswer.endsWith('"""')) {
      cleanCorrectAnswer = cleanCorrectAnswer.slice(3, -3)
    } else if (cleanCorrectAnswer.startsWith('"') && cleanCorrectAnswer.endsWith('"')) {
      cleanCorrectAnswer = cleanCorrectAnswer.slice(1, -1)
    }

    // Clean up the explanation field by removing extra quotes
    let cleanExplanation = csvQuestion.note
    if (cleanExplanation.startsWith('"""') && cleanExplanation.endsWith('"""')) {
      cleanExplanation = cleanExplanation.slice(3, -3)
    } else if (cleanExplanation.startsWith('"') && cleanExplanation.endsWith('"')) {
      cleanExplanation = cleanExplanation.slice(1, -1)
    }
    
    return {
      id: `free-${index + 1}`,
      question: csvQuestion.question,
      options: optionsArray,
      correctAnswer: cleanCorrectAnswer === 'a' ? 0 : 
                    cleanCorrectAnswer === 'b' ? 1 :
                    cleanCorrectAnswer === 'c' ? 2 : 3,
      explanation: cleanExplanation,
      category: csvQuestion['section-name'],
      difficulty: csvQuestion.difficulty === 'difficult' ? 'hard' : 
                  csvQuestion.difficulty as 'easy' | 'medium' | 'hard',
      state: '', // Will be set by the caller
      isPremium: false
    }
  })
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

export async function loadFreeQuestions(state: string): Promise<Question[]> {
  try {
    const STATES_WITH_QUESTIONS = [
      'california', 'florida', 'georgia', 'illinois', 'michigan',
      'north-carolina', 'new-york', 'ohio', 'pennsylvania', 'texas'
    ];
    const activeState = STATES_WITH_QUESTIONS.includes(state) ? state : 'california';
    const response = await fetch(`/data/questions_${activeState}_free.csv`)
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error(`Practice questions for ${state} are coming soon! Please check back later.`)
      }
      throw new Error(`Failed to load CSV file for ${state}`)
    }

    const csvContent = await response.text()
    const questions = parseCSVToQuestions(csvContent)

    // Set the state for each question
    return questions.map(q => ({ ...q, state }))
  } catch (error) {
    console.error(`Error loading free questions for ${state}:`, error)
    throw error
  }
}

