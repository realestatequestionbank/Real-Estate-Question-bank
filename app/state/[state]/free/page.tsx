import { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { AuthProvider } from '@/contexts/auth-context'
import { StateFreePageContent } from '@/components/pages/state-free-page'
import { StructuredData } from '@/components/structured-data'
import { STATES, type StateKey } from '@/lib/constants'
import { getStateData } from '@/lib/utils/getStateData'

interface PageProps {
  params: { state: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const state = params.state as StateKey

  // Redirect states with dedicated pages
  if (state === 'california') {
    redirect('/california-real-estate-practice-test')
  }
  if (state === 'north-carolina') {
    redirect('/north-carolina-real-estate-practice-test')
  }
  if (state === 'washington') {
    redirect('/washington-real-estate-practice-test')
  }
  if (state === 'texas') {
    redirect('/texas-real-estate-practice-test')
  }

  const stateInfo = STATES[state]
  const stateData = getStateData(state)

  if (!stateInfo) {
    return {
      title: 'State Not Found | Real Estate Question Bank',
      description: 'The requested state page could not be found.'
    }
  }

  return {
    title: stateData.seo.title,
    description: stateData.seo.description,
    keywords: stateData.seo.keywords.join(', '),
    authors: [{ name: 'Real Estate Question Bank Team' }],
    creator: 'Real Estate Question Bank',
    publisher: 'Real Estate Question Bank',
    openGraph: {
      title: stateData.seo.title,
      description: stateData.seo.description,
      type: 'website',
      url: `https://www.realestatequestionbank.com/state/${state}/free`,
      siteName: 'Real Estate Question Bank',
      locale: 'en_US',
      images: [
        {
          url: '/images/cover-image.png',
          width: 1200,
          height: 630,
          alt: `${stateInfo.name} Real Estate Practice Test - Pass Your real estate exam First Try`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: stateData.seo.title,
      description: stateData.seo.description,
      images: ['/images/cover-image.png'],
      creator: '@real-estatequestionbank',
      site: '@real-estatequestionbank',
    },
    alternates: {
      canonical: `https://www.realestatequestionbank.com/state/${state}/free`
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      }
    }
  }
}

export default function StateFreePage({ params }: PageProps) {
  const state = params.state as StateKey

  // Redirect states with dedicated pages
  if (state === 'california') {
    redirect('/california-real-estate-practice-test')
  }
  if (state === 'north-carolina') {
    redirect('/north-carolina-real-estate-practice-test')
  }
  if (state === 'washington') {
    redirect('/washington-real-estate-practice-test')
  }
  if (state === 'texas') {
    redirect('/texas-real-estate-practice-test')
  }

  // Validate state parameter
  if (!state || !(state in STATES)) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">State Not Found</h1>
          <p className="text-gray-600">The requested state page could not be found.</p>
        </div>
      </div>
    )
  }

  const stateData = getStateData(state)

  return (
    <AuthProvider>
      <StructuredData type="state-page" state={state} data={stateData} />
      <StateFreePageContent state={state} />
    </AuthProvider>
  )
}