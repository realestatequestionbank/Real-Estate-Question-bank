import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { STATES, type StateKey } from '@/lib/constants'
import { getCdlStateData } from '@/lib/states/cdl'
import { CdlCSVParser } from '@/lib/services/cdl-csv-parser'
import { Question } from '@/lib/types/question'
import { CdlTestSpecificPage } from '@/components/cdl/cdl-test-specific-page'
import fs from 'fs'
import path from 'path'

// Map the URL slug to the internal category ID
const TEST_SLUG_MAP: Record<string, string> = {
  'class-a': 'class_a',
  'class-b': 'class_b',
  'class-c': 'class_c',
  'hazmat': 'hazmat',
  'tanker': 'tank',
  'air-brakes': 'air_brakes',
  'combination-vehicles': 'combination',
  'pre-trip-inspection': 'pre_trip',
  'passenger': 'passenger',
  'school-bus': 'bus',
  'double-triple-trailers': 'double',
  'ambulance': 'ambulance'
}

// Map the internal category ID to the CSV file prefix
const CATEGORY_FILE_MAP: Record<string, string> = {
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

interface PageProps {
  params: {
    state: string
    test: string
  }
}

function isValidState(state: string): state is StateKey {
  return state in STATES
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  if (!isValidState(params.state) || !TEST_SLUG_MAP[params.test]) return {}

  const stateKey = params.state
  const data = getCdlStateData(stateKey)
  const categoryId = TEST_SLUG_MAP[params.test]
  const category = data.categories.find(c => c.id === categoryId)
  
  if (!category) return {}

  const title = `FREE ${data.stateName} CDL ${category.name} Practice Test (2026) in Punjabi (ਪੰਜਾਬੀ)`
  const description = `Pass your ${data.stateName} CDL ${category.name} written exam. Free practice questions and detailed explanations in Punjabi based on the official CDL manual.`
  const url = `https://www.realestatequestionbank.com/${stateKey}-${params.test}-cdl-permit-test/punjabi`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url,
      siteName: 'Real Estate Question Bank',
      locale: 'pa_IN',
      images: [
        {
          url: '/images/cover-image.png',
          width: 1200,
          height: 630,
          alt: `${data.stateName} CDL ${category.name} Practice Test in Punjabi`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/cover-image.png'],
      creator: '@real-estatequestionbank',
      site: '@real-estatequestionbank',
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: url,
    },
  }
}

export function generateStaticParams() {
  const params: { state: string, test: string }[] = []
  
  Object.keys(STATES).forEach(state => {
    try {
      const data = getCdlStateData(state as StateKey)
      Object.keys(TEST_SLUG_MAP).forEach(testSlug => {
        const categoryId = TEST_SLUG_MAP[testSlug]
        const hasCategory = data.categories.some(c => c.id === categoryId)
        if (hasCategory) {
          params.push({ state, test: testSlug })
        }
      })
    } catch (e) {
      // Skip state if config is missing
    }
  })
  
  return params
}

function loadQuestions(state: string, categoryId: string, categoryName: string): Question[] {
  try {
    const filePrefix = CATEGORY_FILE_MAP[categoryId]
    if (!filePrefix) return []

    // Load Punjabi file with '_pa' suffix
    let filename = `${state}_cdl_${filePrefix}_questions_pa.csv`
    const csvPath = path.join(process.cwd(), 'public', 'data', filename)
    
    // Fallback to California Punjabi if specific state file doesn't exist
    let finalCsvText = ''
    if (fs.existsSync(csvPath)) {
      finalCsvText = fs.readFileSync(csvPath, 'utf-8')
    } else {
      const fallbackFilename = `california_cdl_${filePrefix}_questions_pa.csv`
      const fallbackPath = path.join(process.cwd(), 'public', 'data', fallbackFilename)
      if (fs.existsSync(fallbackPath)) {
        finalCsvText = fs.readFileSync(fallbackPath, 'utf-8')
      } else {
        // If no Punjabi translation exists, fall back to English
        const englishFilename = `${state}_cdl_${filePrefix}_questions.csv`
        const englishPath = path.join(process.cwd(), 'public', 'data', englishFilename)
        if (fs.existsSync(englishPath)) {
          finalCsvText = fs.readFileSync(englishPath, 'utf-8')
        } else {
          const fallbackEnglishFilename = `california_cdl_${filePrefix}_questions.csv`
          const fallbackEnglishPath = path.join(process.cwd(), 'public', 'data', fallbackEnglishFilename)
          if (fs.existsSync(fallbackEnglishPath)) {
            finalCsvText = fs.readFileSync(fallbackEnglishPath, 'utf-8')
          } else {
            return [] // No file found
          }
        }
      }
    }

    const questions = CdlCSVParser.parseCSV(finalCsvText, state, categoryName)
    // Return 25 questions for free SEO page
    return questions.slice(0, 25).map(q => ({ ...q, isPremium: false }))
  } catch (error) {
    console.error(`Failed to load CDL questions in Punjabi for ${state} - ${categoryId}:`, error)
    return []
  }
}

export default function CdlTestSpecificPunjabiPage({ params }: PageProps) {
  if (!isValidState(params.state) || !TEST_SLUG_MAP[params.test]) {
    notFound()
  }

  const stateKey = params.state
  const data = getCdlStateData(stateKey)
  const categoryId = TEST_SLUG_MAP[params.test]
  const category = data.categories.find(c => c.id === categoryId)

  if (!category) {
    notFound()
  }

  // Load 25 questions in Punjabi server-side for SEO
  const initialQuestions = loadQuestions(stateKey, categoryId, category.name)

  return (
    <CdlTestSpecificPage 
      stateKey={stateKey} 
      data={data} 
      category={category} 
      initialQuestions={initialQuestions} 
      lang="pa"
    />
  )
}
