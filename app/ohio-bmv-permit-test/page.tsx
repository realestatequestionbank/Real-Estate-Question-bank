import { Metadata } from 'next'
import { AuthProvider } from '@/contexts/auth-context'
import Script from 'next/script'
import { StateLandingPage } from '@/components/state-landing-page'
import { generateStatePageDataSync } from '@/components/state-landing-page/generate-state-data'
import {
  generateStateMetadata,
  generateFaqSchema,
  generateProductSchema,
  generateOrganizationSchema,
  generateBreadcrumbSchema,
  generateWebPageSchema,
} from '@/components/state-landing-page/generate-metadata'
import { ohioStateData } from '@/lib/states/ohio'
import { getEffectivePricing } from '@/lib/constants'

// State configuration
const STATE_KEY = 'ohio' as const
const STATE_NAME = 'Ohio'
const STATE_CODE = 'OH'

// Generate page data using the helper
const pageData = generateStatePageDataSync(STATE_KEY, ohioStateData)

// Generate metadata
export const metadata: Metadata = generateStateMetadata({
  stateKey: STATE_KEY,
  stateName: STATE_NAME,
  stateCode: STATE_CODE,
  seo: ohioStateData.seo,
  pricing: ohioStateData.pricing,
  faq: ohioStateData.faq,
  lastUpdated: ohioStateData.lastUpdated,
})

const effectivePricing = getEffectivePricing()

// Generate structured data schemas
const faqSchema = generateFaqSchema(ohioStateData.faq)

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Ohio BMV real estate exam Practice - Premium Question Bank",
  "description": "Comprehensive Ohio BMV real estate exam preparation with practice questions, mock tests, and detailed explanations. Pass your OH BMV test on the first try.",
  "brand": {
    "@type": "Organization",
    "name": "Real Estate Question Bank"
  },
  "offers": [
    {
      "@type": "Offer",
      "name": "30-Day Premium Access",
      "price": effectivePricing.PLANS.SEVEN_DAY.discountedPrice,
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": "https://www.realestatequestionbank.com/ohio-bmv-permit-test",
      "priceValidUntil": "2026-12-31",
      "validFrom": "2026-01-01"
    },
    {
      "@type": "Offer",
      "name": "Lifetime Premium Access",
      "price": effectivePricing.PLANS.LIFETIME.discountedPrice,
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": "https://www.realestatequestionbank.com/ohio-bmv-permit-test",
      "priceValidUntil": "2026-12-31",
      "validFrom": "2026-01-01"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "500",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Sarah M."
      },
      "datePublished": "2026-04-15",
      "reviewBody": "Passed my Ohio temps test first try! The practice questions were almost identical to the real BMV exam. Loved the GDL rules section too.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      }
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Austin B."
      },
      "datePublished": "2026-04-20",
      "reviewBody": "Highly recommend! The right-of-way and school bus stopping rules were crucial. Only got 1 wrong on the BMV computer.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      }
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Chloe D."
      },
      "datePublished": "2026-05-02",
      "reviewBody": "Excellent resource. Better than just reading the BMV handbook. Unlimited mock tests prepared me perfectly.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      }
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "David K."
      },
      "datePublished": "2026-05-18",
      "reviewBody": "The distracted driving and speed limit tables were great. Fines and points system was on my test and I knew all of them.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      }
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Priya G."
      },
      "datePublished": "2026-06-10",
      "reviewBody": "Passed easily. Worth the premium unlock. Real test felt like a repeat.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4.8",
        "bestRating": "5"
      }
    }
  ],
  "category": "Educational Course"
}

const organizationSchema = generateOrganizationSchema()
const breadcrumbSchema = generateBreadcrumbSchema({
  stateKey: STATE_KEY,
  stateName: STATE_NAME,
  stateCode: STATE_CODE,
  seo: ohioStateData.seo,
  pricing: ohioStateData.pricing,
  faq: ohioStateData.faq,
  lastUpdated: ohioStateData.lastUpdated,
})
const webPageSchema = generateWebPageSchema({
  stateKey: STATE_KEY,
  stateName: STATE_NAME,
  stateCode: STATE_CODE,
  seo: ohioStateData.seo,
  pricing: ohioStateData.pricing,
  faq: ohioStateData.faq,
  lastUpdated: ohioStateData.lastUpdated,
})

export default function OhioPermitTestPage() {
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
        <StateLandingPage pageData={pageData} />
      </AuthProvider>
    </>
  )
}
