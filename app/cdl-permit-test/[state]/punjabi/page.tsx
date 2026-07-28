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
  const title = `${data.seo.title} (Punjabi Version)`
  const description = `${data.seo.description} Available in Punjabi.`

  return {
    title,
    description,
    keywords: data.seo.keywords,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://www.realestatequestionbank.com/${stateKey}-cdl-permit-test/punjabi`,
      siteName: 'Real Estate Question Bank',
      locale: 'pa_IN',
      images: [
        {
          url: '/images/cover-image.png',
          width: 1200,
          height: 630,
          alt: `${data.stateName} CDL Practice Test in Punjabi`
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
      canonical: `https://www.realestatequestionbank.com/${stateKey}-cdl-permit-test/punjabi`,
    },
  }
}

export function generateStaticParams() {
  return Object.keys(STATES).map((state) => ({
    state: state,
  }))
}

export default function CdlPermitTestPunjabiPage({ params }: PageProps) {
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
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Punjabi",
        "item": `https://www.realestatequestionbank.com/${stateKey}-cdl-permit-test/punjabi`
      }
    ]
  }

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `${data.seo.title} (Punjabi Version)`,
    "description": `${data.seo.description} Available in Punjabi.`,
    "url": `https://www.realestatequestionbank.com/${stateKey}-cdl-permit-test/punjabi`,
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
      "name": `${data.stateName} CDL written exam preparation course (Punjabi)`,
      "description": `Complete online test preparation for ${data.stateName} CDL written tests with practice questions, answers, and explanations in Punjabi.`,
      "provider": {
        "@type": "Organization",
        "name": "Real Estate Question Bank"
      },
      "courseCode": `${STATES[stateKey].code}-CDL-2026-PA`,
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "online",
        "courseWorkload": "PT3W"
      }
    },
    "inLanguage": "pa-IN"
  }

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `${data.stateName} CDL written exam preparation course - All-Access Premium Pass (Punjabi)`,
    "description": `Premium ${data.stateName} CDL preparation package including practice questions and answers for General Knowledge, Air Brakes, Combination, Hazmat, Pre-Trip, and all endorsements in Punjabi. Valid for 90 days of unlimited access.`,
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
      "url": `https://www.realestatequestionbank.com/${stateKey}-cdl-permit-test/punjabi`,
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
        id={`cdl-faq-schema-pa-${stateKey}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id={`cdl-product-schema-pa-${stateKey}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <Script
        id={`cdl-breadcrumb-schema-pa-${stateKey}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id={`cdl-webpage-schema-pa-${stateKey}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <AuthProvider>
        <CdlLandingPage stateKey={stateKey} data={data} lang="pa" />
      </AuthProvider>
    </>
  )
}
