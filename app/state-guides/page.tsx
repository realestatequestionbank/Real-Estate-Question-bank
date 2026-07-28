import { Metadata } from 'next'
import { AuthProvider } from '@/contexts/auth-context'
import { StateGuidesIndex } from '@/components/state-guides/state-guides-index'

export const metadata: Metadata = {
  title: 'Real Estate real estate exam Guides by State (2026) | Real Estate Question Bank',
  description:
    'Find your state\'s Real Estate Exam guide. Detailed information on eligibility, fees, written test requirements, documents needed, and study resources for all 50 states.',
  keywords: [
    'Real Estate Exam by state',
    'state Real Estate requirements',
    'real estate license guide',
    'Real Estate written test',
    'real estate exam requirements',
  ],
  openGraph: {
    title: 'State Real Estate real estate exam Guides',
    description:
      'Find your state\'s Real Estate Exam guide with detailed requirements, fees, and study resources.',
    type: 'website',
    url: 'https://www.realestatequestionbank.com/state-guides',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [{ url: '/images/cover-image.png', width: 1200, height: 630, alt: 'Real Estate State Guides' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'State Real Estate real estate exam Guides',
    description: 'Find your state\'s Real Estate Exam guide with detailed requirements, fees, and study resources.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.realestatequestionbank.com/state-guides' },
}

export default function StateGuidesPage() {
  return (
    <AuthProvider>
      <StateGuidesIndex />
    </AuthProvider>
  )
}
