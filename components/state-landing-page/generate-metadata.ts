import { Metadata } from 'next'
import { PRICING, type StateKey } from '@/lib/constants'
import { getDepartmentName } from '@/lib/data/state-departments'
import { getStateDedicatedPageUrl } from '@/lib/utils/state-routes'

interface StateMetadataConfig {
  stateKey: string
  stateName: string
  stateCode: string
  seo: {
    title: string
    description: string
    keywords: string[]
  }
  pricing: {
    premiumQuestions: number
  }
  faq: Array<{
    question: string
    answer: string
  }>
  lastUpdated: string
}

export function generateStateMetadata(config: StateMetadataConfig): Metadata {
  const { stateKey, stateName, seo } = config
  const path = getStateDedicatedPageUrl(stateKey as StateKey)
  const fullUrl = `https://www.realestatequestionbank.com${path}`

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    openGraph: {
      title: seo.title,
      description: seo.description,
      type: 'website',
      url: fullUrl,
      siteName: 'Real Estate Question Bank',
      locale: 'en_US',
      images: [
        {
          url: '/images/cover-image.png',
          width: 1200,
          height: 630,
          alt: `${stateName} Real Estate Practice Test - Pass Your real estate exam First Try`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: ['/images/cover-image.png'],
      creator: '@real-estatequestionbank',
      site: '@real-estatequestionbank',
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: fullUrl,
    },
  }
}

export function generateFaqSchema(faq: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faq.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  }
}

export function generateProductSchema(config: StateMetadataConfig) {
  const { stateKey, stateName, stateCode, pricing } = config
  const path = getStateDedicatedPageUrl(stateKey as StateKey)
  const fullUrl = `https://www.realestatequestionbank.com${path}`
  const departmentInfo = getDepartmentName(stateKey)

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `${stateName} ${departmentInfo.name} real estate exam Practice - Premium Question Bank`,
    "image": [
      "https://www.realestatequestionbank.com/images/logo.png"
    ],
    "description": `Comprehensive ${stateName} ${departmentInfo.name} real estate exam preparation with ${pricing.premiumQuestions} practice questions, mock tests, and detailed explanations. Pass your ${stateCode} ${departmentInfo.name} test on the first try.`,
    "brand": {
      "@type": "Brand",
      "name": "Real Estate Question Bank"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "30-Day Premium Access",
        "price": PRICING.PLANS.SEVEN_DAY.discountedPrice,
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": fullUrl,
        "priceValidUntil": "2026-12-31",
        "validFrom": "2026-01-01",
        "seller": {
          "@type": "Organization",
          "name": "Real Estate Question Bank"
        }
      },
      {
        "@type": "Offer",
        "name": "Lifetime Premium Access",
        "price": PRICING.PLANS.LIFETIME.discountedPrice,
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": fullUrl,
        "priceValidUntil": "2026-12-31",
        "validFrom": "2026-01-01",
        "seller": {
          "@type": "Organization",
          "name": "Real Estate Question Bank"
        }
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "500",
      "bestRating": "5",
      "worstRating": "1"
    },
    "category": "Educational Course"
  }
}

export function generateOrganizationSchema() {
  return {
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
}

export function generateBreadcrumbSchema(config: StateMetadataConfig) {
  const { stateKey, stateName } = config
  const path = getStateDedicatedPageUrl(stateKey as StateKey)
  const fullUrl = `https://www.realestatequestionbank.com${path}`
  const departmentInfo = getDepartmentName(stateKey)

  return {
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
        "name": `${stateName} ${departmentInfo.name} real estate exam`,
        "item": fullUrl
      }
    ]
  }
}

export function generateWebPageSchema(config: StateMetadataConfig) {
  const { stateKey, stateName, seo, pricing, lastUpdated } = config
  const path = getStateDedicatedPageUrl(stateKey as StateKey)
  const fullUrl = `https://www.realestatequestionbank.com${path}`
  const departmentInfo = getDepartmentName(stateKey)

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": seo.title,
    "description": seo.description,
    "url": fullUrl,
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
      "name": `${stateName} ${departmentInfo.name} real estate exam Preparation Course`,
      "description": `Complete preparation course for the ${stateName} ${departmentInfo.name} real estate exam with ${pricing.premiumQuestions} practice questions, mock exams, and study guides.`,
      "provider": {
        "@type": "Organization",
        "name": "Real Estate Question Bank"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Real Estate Question Bank",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.realestatequestionbank.com/images/logo.png"
        }
      },
      "author": {
        "@type": "Person",
        "name": "Robert Miller",
        "jobTitle": "Lead Curriculum Specialist & Former Real Estate Examiner",
        "sameAs": "https://www.realestatequestionbank.com/editorial-standards-and-accuracy"
      },
      "courseCode": `${config.stateCode}-Real Estate-2026`,
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "online",
        "courseWorkload": "PT2W"
      }
    },
    "dateModified": lastUpdated,
    "inLanguage": "en-US"
  }
}
