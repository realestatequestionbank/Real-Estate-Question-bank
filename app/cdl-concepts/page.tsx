import { Metadata } from 'next'
import Script from 'next/script'
import { AuthProvider } from '@/contexts/auth-context'
import { CdlConceptsPage } from '@/components/cdl/cdl-concepts-page'

export const metadata: Metadata = {
  title: 'Top 100 CDL Exam Concepts & Definitions (2026) | Class A & B Study Guide',
  description:
    'Master the most critical commercial driving laws, air brake diagrams, vehicle classifications (GVWR/GCWR), Hours of Service logs, and hazardous material rules for the Real Estate CDL written tests.',
  keywords: [
    'CDL exam concepts list',
    'Commercial driving license glossary',
    'GVWR vs GCWR definition',
    'Air brake lag time CDL',
    'CDL spring brakes mechanical',
    'Tractor trailer fifth wheel kingpin',
    'Glad hands color coding blue red',
    'Hours of service 14 hour rule',
    'Hazmat placard diamond dimensions',
    'CDL pre-trip inspection points'
  ],
  openGraph: {
    title: 'Top 100 CDL Written Test Concepts & Explanations (2026)',
    description:
      'Study Guide covering all high-yield concepts tested on CDL Class A, B, and endorsement exams. Master air brakes, combination couplings, log rules, and vehicle weight ratings.',
    type: 'website',
    url: 'https://www.realestatequestionbank.com/cdl-concepts',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'CDL Written Exam Key Study Concepts'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CDL Written Exam Concepts & Study Guide 2026',
    description:
      'Master the top high-yield CDL written real estate exam concepts, including weight limits, air brake valves, logbook rules, and pre-trip inspect checklists.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/cdl-concepts',
  },
}

const cdlConceptsWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Top 100 CDL Exam Concepts & Definitions (2026)",
  "description": "Complete glossary and study resource for critical commercial driving topics including axle weights, tractor-trailer couplings, air brake lag, log limits, and safety inspections.",
  "url": "https://www.realestatequestionbank.com/cdl-concepts",
  "publisher": {
    "@type": "Organization",
    "name": "Real Estate Question Bank",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.realestatequestionbank.com/images/logo.png"
    }
  },
  "inLanguage": "en-US"
}

export default function CdlConceptsRoutePage() {
  return (
    <>
      {/* Structured SEO Schema */}
      <Script
        id="cdl-concepts-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cdlConceptsWebPageSchema) }}
      />

      {/* Main Page Content */}
      <AuthProvider>
        <CdlConceptsPage />
      </AuthProvider>
    </>
  )
}
