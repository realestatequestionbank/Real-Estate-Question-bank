import { Metadata } from 'next'
import { AuthProvider } from '@/contexts/auth-context'
import { FreePdfPage } from '@/components/pages/free-pdf-page'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Free Real Estate Exam Study Guides & Practice Questions PDF | Real Estate Question Bank',
  description: 'Download free state-specific Real Estate licensing exam practice questions PDF. 50 real practice questions with detailed answers for all 50 states. Instant download, no signup required.',
  keywords: [
    'free Real Estate Exam PDF',
    'Real Estate practice test PDF',
    'free real estate questions',
    'Real Estate Exam PDF download',
    'Real Estate practice questions PDF',
    'real estate license test PDF',
    'real estate study guide PDF'
  ],
  openGraph: {
    title: 'Free Real Estate Practice Test PDF - 50 Practice Questions',
    description: 'Download free Real Estate Exam practice questions for your state. 50 questions with answers, instant download.',
    type: 'website',
    url: 'https://www.realestatequestionbank.com/free-study-guides-pdf',
    images: [
      {
        url: '/images/og-free-pdf.png',
        width: 1200,
        height: 630,
        alt: 'Free Real Estate Practice Test PDF'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Real Estate Practice Test PDF | Real Estate Question Bank',
    description: 'Download free Real Estate Exam practice questions for your state. 50 questions with answers.',
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/free-study-guides-pdf'
  }
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Free Real Estate Practice Test PDF',
  description: 'Download free Real Estate Exam practice questions PDF for all 50 states.',
  url: 'https://www.realestatequestionbank.com/free-study-guides-pdf',
  mainEntity: {
    '@type': 'ItemList',
    name: 'Free Real Estate Practice Test PDFs by State',
    numberOfItems: 50,
    itemListElement: [
      {
        '@type': 'DigitalDocument',
        name: 'Free California Real Estate Practice Questions PDF',
        description: '50 practice questions for California Real Estate Exam',
        fileFormat: 'application/pdf'
      }
    ]
  },
  provider: {
    '@type': 'Organization',
    name: 'Real Estate Question Bank',
    url: 'https://www.realestatequestionbank.com'
  }
}

export default function Page() {
  return (
    <AuthProvider>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <FreePdfPage />
    </AuthProvider>
  )
}
