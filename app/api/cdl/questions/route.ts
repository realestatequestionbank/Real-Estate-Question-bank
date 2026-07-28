import { NextRequest, NextResponse } from 'next/server'
import { CdlCSVParser } from '@/lib/services/cdl-csv-parser'
import { Question } from '@/lib/types/question'
import fs from 'fs'
import path from 'path'

export const runtime = "nodejs";

const categoryFileMap: Record<string, string> = {
  class_a: 'class_a',
  class_b: 'class_b',
  class_c: 'class_b',
  air_brakes: 'air_brakes',
  combination: 'combination',
  pre_trip: 'pre_trip',
  hazmat: 'hazmat',
  passenger: 'passenger',
  bus: 'bus',
  double: 'double',
  tank: 'tank',
  ambulance: 'ambulance'
}

const categoryNameMap: Record<string, string> = {
  class_a: 'General Knowledge',
  class_b: 'Class B Core / General Knowledge',
  class_c: 'Class C Core / General Knowledge',
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

function loadCSVFromPublic(filename: string) {
  const csvPath = path.join(process.cwd(), 'public', 'data', filename);
  return fs.readFileSync(csvPath, "utf-8");
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const state = searchParams.get('state')
    const category = searchParams.get('category')
    const isPremium = searchParams.get('premium') === 'true'
    const lang = searchParams.get('lang')

    if (!state) {
      return NextResponse.json(
        { error: 'State parameter is required' },
        { status: 400 }
      )
    }

    let questions: Question[] = []

    if (category === 'all') {
      const categories = Object.keys(categoryFileMap)
      for (const cat of categories) {
        try {
          const suffix = lang === 'pa' ? '_pa' : ''
          let filename = `${state}_cdl_${categoryFileMap[cat]}_questions${suffix}.csv`
          const csvPath = path.join(process.cwd(), 'public', 'data', filename)
          if (!fs.existsSync(csvPath)) {
            filename = `california_cdl_${categoryFileMap[cat]}_questions${suffix}.csv`
          }
          const csvText = loadCSVFromPublic(filename)
          const categoryName = categoryNameMap[cat] || cat
          const parsed = CdlCSVParser.parseCSV(csvText, state, categoryName)
          parsed.forEach(q => {
            q.isPremium = isPremium
          })
          questions.push(...parsed)
        } catch (error) {
          // Skip missing category files silently
        }
      }
      console.log(`Successfully loaded all CDL categories for ${state}: ${questions.length} questions total`)
    } else {
      if (!category || !categoryFileMap[category]) {
        return NextResponse.json(
          { error: 'Invalid or missing CDL category parameter' },
          { status: 400 }
        )
      }

      try {
        const suffix = lang === 'pa' ? '_pa' : ''
        let filename = `${state}_cdl_${categoryFileMap[category]}_questions${suffix}.csv`
        const csvPath = path.join(process.cwd(), 'public', 'data', filename)
        if (!fs.existsSync(csvPath)) {
          filename = `california_cdl_${categoryFileMap[category]}_questions${suffix}.csv`
        }
        const csvText = loadCSVFromPublic(filename)
        const categoryName = categoryNameMap[category] || category
        questions = CdlCSVParser.parseCSV(csvText, state, categoryName)

        // Set premium flag on questions if loading full set
        questions.forEach(question => {
          question.isPremium = isPremium
        })

        // If NOT premium, return a limited subset (e.g. first 10 questions for free practice)
        if (!isPremium) {
          questions = questions.slice(0, 10)
        }

        console.log(`Successfully loaded ${isPremium ? 'premium' : 'free'} CDL ${category} CSV for ${state}: ${questions.length} questions`)
      } catch (error) {
        console.error(`CDL CSV not found for ${state} category ${category}:`, error)
        questions = []
      }
    }

    return NextResponse.json({
      questions,
      totalQuestions: questions.length
    })
  } catch (error) {
    console.error('Error loading CDL questions:', error)
    return NextResponse.json(
      { error: 'Failed to load CDL questions' },
      { status: 500 }
    )
  }
}
