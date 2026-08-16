import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CityLandingPageContent } from '@/components/pages/city-landing-page'
import { STATES, type StateKey } from '@/lib/constants'
import { STATE_MAJOR_CITIES } from '@/lib/data/state-cities'
import { getCityRealEstateData } from '@/lib/data/city-real-estate-data'
import { getDepartmentName } from '@/lib/data/state-departments'
import { loadFreeQuestionsServer } from '@/lib/utils/questions-server'
import { Question } from '@/lib/types/question'
import Script from 'next/script'

interface PageProps {
  params: Promise<{
    state: string
    city: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { state: stateParam, city } = await params

  const state = stateParam.toLowerCase()
  if (!state || !(state in STATES) || !city) {
    return { title: 'City Real Estate Practice Test | Real Estate Question Bank' }
  }

  const stateInfo = STATES[state as StateKey]
  const departmentInfo = getDepartmentName(state)
  
  const cityName = city
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  const seoTitle = `FREE ${cityName}, ${stateInfo.name} Real Estate Practice Exam (2026) | Real Estate Question Bank`
  const seoDesc = `Prepare for your ${stateInfo.name} licensing exam with our free ${cityName} real estate practice tests. Study official questions, review terms, and locate local ${cityName} licensing board info.`

  return {
    title: seoTitle,
    description: seoDesc,
    keywords: [
      `${cityName} real estate exam`,
      `${cityName} Real Estate licensing`,
      `free ${cityName} real estate practice test`,
      `${stateInfo.name} real estate salesperson exam 2026`
    ],
    openGraph: {
      title: seoTitle,
      description: seoDesc,
      url: `https://www.realestatequestionbank.com/state/${state}/city/${city}`,
      type: 'website'
    },
    alternates: {
      canonical: `https://www.realestatequestionbank.com/state/${state}/city/${city}`
    }
  }
}

export async function generateStaticParams() {
  const paths: Array<{ state: string; city: string }> = []

  Object.entries(STATE_MAJOR_CITIES).forEach(([state, cities]) => {
    cities.forEach(city => {
      paths.push({
        state,
        city: city.toLowerCase().replace(/ /g, '-')
      })
    })
  })

  return paths
}

export default async function CityLandingPage({ params }: PageProps) {
  const { state: stateParam, city: cityParam } = await params

  const state = stateParam.toLowerCase()
  const city = cityParam.toLowerCase()

  if (!state || !(state in STATES) || !city) {
    notFound()
  }

  // Validate that the city is actually defined for this state
  const stateCities = STATE_MAJOR_CITIES[state as StateKey] || []
  const cityExists = stateCities.some(c => c.toLowerCase().replace(/ /g, '-') === city)

  if (!cityExists) {
    notFound()
  }

  const stateKey = state as StateKey
  const stateInfo = STATES[stateKey]
  const cityData = getCityRealEstateData(stateKey, city)

  let questions: Question[] = []
  try {
    const allQuestions = await loadFreeQuestionsServer(stateKey)
    // Slice 5 random or top questions to present as preview questions
    questions = allQuestions.slice(0, 5)
  } catch (error) {
    console.error(`Failed to load free questions for state ${stateKey} on city page:`, error)
  }

  return (
    <>
      <CityLandingPageContent
        stateKey={stateKey}
        citySlug={city}
        questions={questions}
      />
    </>
  )
}
