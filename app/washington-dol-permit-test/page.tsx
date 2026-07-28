import { Metadata } from 'next'
import { washingtonStateData } from '@/lib/states/washington'
import { STATES, PRICING } from '@/lib/constants'
import { getStateData } from '@/lib/utils/getStateData'
import { AuthProvider } from '@/contexts/auth-context'
import WashingtonDOLTestPractice from './washington-dol-permit-test-static'
import { generateProductSchema } from '@/components/state-landing-page/generate-metadata'
import Script from 'next/script'

// Generate metadata for SEO
export const metadata: Metadata = {
  title: washingtonStateData.seo.title,
  description: washingtonStateData.seo.description,
  keywords: washingtonStateData.seo.keywords,
  openGraph: {
    title: washingtonStateData.seo.title,
    description: washingtonStateData.seo.description,
    type: 'website',
    url: 'https://www.realestatequestionbank.com/washington-dol-permit-test',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'Washington DOL Practice Test - Pass Your real estate exam First Try'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: washingtonStateData.seo.title,
    description: washingtonStateData.seo.description,
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/washington-dol-permit-test',
  },
}

// Structured Data Schemas for SEO
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": washingtonStateData.faq.map(item => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer
    }
  }))
}



const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Real Estate Question Bank",
  "url": "https://www.realestatequestionbank.com",
  "logo": "https://www.realestatequestionbank.com/images/logo.png",
  "description": "Real Estate Question Bank helps students pass their Real Estate Exams on the first try with state-specific practice questions and comprehensive study guides.",
  "sameAs": [
    "https://twitter.com/real-estatequestionbank"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "email": "support@realestatequestionbank.com"
  }
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.realestatequestionbank.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "States",
      "item": "https://www.realestatequestionbank.com/#states"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Washington DOL real estate exam",
      "item": "https://www.realestatequestionbank.com/washington-dol-permit-test"
    }
  ]
}

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": washingtonStateData.seo.title,
  "description": washingtonStateData.seo.description,
  "url": "https://www.realestatequestionbank.com/washington-dol-permit-test",
  "publisher": {
    "@type": "Organization",
    "name": "Real Estate Question Bank",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.realestatequestionbank.com/images/logo.png"
    }
  },
  "mainEntity": {
    "@type": "Course",
    "name": "Washington DOL real estate exam Preparation Course",
    "description": "Complete preparation course for the Washington DOL real estate exam with 379 practice questions, mock exams, and study guides.",
    "provider": {
      "@type": "Organization",
      "name": "Real Estate Question Bank"
    },
    "courseCode": "WA-DOL-2026",
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "online",
      "courseWorkload": "PT2W"
    }
  },
  "dateModified": washingtonStateData.lastUpdated,
  "inLanguage": "en-US"
}

export default function WashingtonDOLTestPracticePage() {
  const stateData = getStateData('washington')

  const productSchema = generateProductSchema({
    stateKey: 'washington',
    stateName: 'Washington',
    stateCode: 'WA',
    seo: stateData.seo,
    pricing: stateData.pricing,
    faq: stateData.faq,
    lastUpdated: stateData.lastUpdated,
  })

  return (
    <>
      {/* Structured Data for SEO */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <AuthProvider>
        <WashingtonDOLTestPractice />
      </AuthProvider>
    </>
  )
}
