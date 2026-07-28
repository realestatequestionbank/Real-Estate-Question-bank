import { NextRequest, NextResponse } from 'next/server'
import { CSVParser } from '@/lib/services/csv-parser'
import { Question } from '@/lib/types/question'
import fs from 'fs'
import path from 'path'

export const runtime = "nodejs";

function loadCSVFromPublic(filename: string) {
  const csvPath = path.join(process.cwd(), 'public', 'data', filename);
  console.log("CSV Path:", csvPath);
  return fs.readFileSync(csvPath, "utf-8");
}

export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams
        const state = searchParams.get('state')
        const isPremium = searchParams.get('premium') === 'true'

        if (!state) {
            return NextResponse.json(
                { error: 'State parameter is required' },
                { status: 400 }
            )
        }

        let questions: Question[] = []

        try {
            const questionType = isPremium ? 'premium' : 'free'
            const filename = `questions_${state}_${questionType}.csv`
            const csvText = loadCSVFromPublic(filename)
            questions = CSVParser.parseCSV(csvText, state)
            
            if (isPremium) {
                questions.forEach(question => {
                    question.isPremium = true
                })
            }
            
            console.log(`Successfully loaded ${questionType} CSV for ${state}: ${questions.length} questions`)
        } catch (error) {
            console.error(`CSV not found for ${state} (${isPremium ? 'premium' : 'free'}):`, error)
            questions = []
        }

        return NextResponse.json({
            questions,
            totalQuestions: questions.length
        })
    } catch (error) {
        console.error('Error loading questions:', error)
        return NextResponse.json(
            { error: 'Failed to load questions' },
            { status: 500 }
        )
    }
}
