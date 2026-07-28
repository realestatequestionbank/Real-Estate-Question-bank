import { Metadata } from 'next'
import { AuthProvider } from '@/contexts/auth-context'
import { STATES, type StateKey } from '@/lib/constants'
import { RealEstateHandbookPageContent } from '@/components/pages/real-estate-handbook-page'

interface PageProps {
  params: { state: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const state = params.state as StateKey
  const stateInfo = STATES[state]
  
  if (!stateInfo || state !== 'california') {
    return {
      title: 'Real Estate Handbook Analysis | Real Estate Question Bank',
      description: 'Read the Real Estate handbook with expert exam takeaways.'
    }
  }

  return {
    title: `${stateInfo.name} Real Estate Handbook Analysis | Expert Exam Tips`,
    description: `Read the ${stateInfo.name} Real Estate handbook page by page with expert exam takeaways and tips. Free preview with 15 pages.`,
    keywords: [
      `${stateInfo.name} real-estate handbook`,
      'real-estate handbook analysis',
      'real-estate exam tips',
      'real-estate study guide',
      'real estate exam preparation',
      `${stateInfo.name} driving test`,
      'real-estate handbook breakdown'
    ],
    authors: [{ name: 'Real Estate Question Bank Team' }],
    creator: 'Real Estate Question Bank',
    publisher: 'Real Estate Question Bank',
    openGraph: {
      title: `${stateInfo.name} Real Estate Handbook Analysis | Expert Exam Tips`,
      description: `Read the ${stateInfo.name} Real Estate handbook page by page with expert exam takeaways and tips. Free preview with 15 pages.`,
      type: 'website',
      url: `https://www.realestatequestionbank.com/state/${state}/read-real-estate-handbook`,
      siteName: 'Real Estate Question Bank',
      locale: 'en_US',
      images: [
        {
          url: '/images/cover-image.png',
          width: 1200,
          height: 630,
          alt: `${stateInfo.name} Real Estate Handbook Analysis - Expert Exam Tips`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: `${stateInfo.name} Real Estate Handbook Analysis | Expert Exam Tips`,
      description: `Read the ${stateInfo.name} Real Estate handbook page by page with expert exam takeaways and tips.`,
      images: ['/images/cover-image.png'],
      creator: '@real-estatequestionbank',
      site: '@real-estatequestionbank',
    },
    alternates: {
      canonical: `https://www.realestatequestionbank.com/state/${state}/read-real-estate-handbook`
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

export default function RealEstateHandbookPage({ params }: PageProps) {
  const state = params.state as StateKey

  // Currently only support California
  if (state !== 'california') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-600">Real Estate Handbook Analysis is currently only available for California.</p>
        </div>
      </div>
    )
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

  return (
    <AuthProvider>
      <RealEstateHandbookPageContent state={state} />
    </AuthProvider>
  )
}