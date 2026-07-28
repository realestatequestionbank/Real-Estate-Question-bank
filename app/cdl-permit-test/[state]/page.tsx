import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Script from 'next/script'
import { AuthProvider } from '@/contexts/auth-context'
import { CdlLandingPage } from '@/components/cdl/cdl-landing-page'
import { STATES, type StateKey } from '@/lib/constants'
import { getCdlStateData } from '@/lib/states/cdl'

interface PageProps {
  params: {
    state: string
  }
}

function isValidState(state: string): state is StateKey {
  return state in STATES
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  if (!isValidState(params.state)) return {}

  const stateKey = params.state
  const data = getCdlStateData(stateKey)

  return {
    title: data.seo.title,
    description: data.seo.description,
    keywords: data.seo.keywords,
    openGraph: {
      title: data.seo.title,
      description: data.seo.description,
      type: 'website',
      url: `https://www.realestatequestionbank.com/${stateKey}-cdl-permit-test`,
      siteName: 'Real Estate Question Bank',
      locale: 'en_US',
      images: [
        {
          url: '/images/cover-image.png',
          width: 1200,
          height: 630,
          alt: `${data.stateName} CDL Practice Test - Pass Class A, B & All Endorsement Written Tests`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: data.seo.title,
      description: data.seo.description,
      images: ['/images/cover-image.png'],
      creator: '@real-estatequestionbank',
      site: '@real-estatequestionbank',
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `https://www.realestatequestionbank.com/${stateKey}-cdl-permit-test`,
    },
  }
}

export function generateStaticParams() {
  return Object.keys(STATES).map((state) => ({
    state: state,
  }))
}

export default function CdlPermitTestPage({ params }: PageProps) {
  if (!isValidState(params.state)) {
    notFound()
  }

  const stateKey = params.state
  const data = getCdlStateData(stateKey)

  // Structured Data Schemas for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faq.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
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
        "name": `${data.stateName} CDL Practice Test`,
        "item": `https://www.realestatequestionbank.com/${stateKey}-cdl-permit-test`
      }
    ]
  }

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": data.seo.title,
    "description": data.seo.description,
    "url": `https://www.realestatequestionbank.com/${stateKey}-cdl-permit-test`,
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
      "name": `${data.stateName} CDL written exam preparation course`,
      "description": `Complete online test preparation for ${data.stateName} CDL written tests with practice questions, answers, and explanations. Covers Class A, Class B, Air Brakes, Combination Vehicles, Hazmat, and all endorsements.`,
      "provider": {
        "@type": "Organization",
        "name": "Real Estate Question Bank"
      },
      "courseCode": `${STATES[stateKey].code}-CDL-2026`,
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "online",
        "courseWorkload": "PT3W"
      }
    },
    "inLanguage": "en-US"
  }

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `${data.stateName} CDL written exam preparation course - All-Access Premium Pass`,
    "description": `Premium ${data.stateName} CDL preparation package including practice questions and answers for General Knowledge, Air Brakes, Combination, Hazmat, Pre-Trip, and all endorsements. Valid for 90 days of unlimited access.`,
    "brand": {
      "@type": "Organization",
      "name": "Real Estate Question Bank"
    },
    "offers": {
      "@type": "Offer",
      "name": "90-Day All-Access Premium CDL Pass",
      "price": data.pricing.price.toString(),
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": `https://www.realestatequestionbank.com/${stateKey}-cdl-permit-test`,
      "priceValidUntil": "2026-12-31"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "120",
      "bestRating": "5",
      "worstRating": "1"
    },
    "category": "Educational Course"
  }

  return (
    <>
      {/* Structured Data for SEO */}
      <Script
        id={`cdl-faq-schema-${stateKey}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id={`cdl-product-schema-${stateKey}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <Script
        id={`cdl-breadcrumb-schema-${stateKey}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id={`cdl-webpage-schema-${stateKey}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <AuthProvider>
        <CdlLandingPage stateKey={stateKey} data={data} />
      </AuthProvider>
    </>
  )
}
