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
import { rhodeislandStateData } from '@/lib/states/rhode-island'

// State configuration
const STATE_KEY = 'rhode-island' as const
const STATE_NAME = 'Rhode Island'
const STATE_CODE = 'RI'

// Generate page data using the helper
const pageData = generateStatePageDataSync(STATE_KEY, rhodeislandStateData)

// Generate metadata
export const metadata: Metadata = generateStateMetadata({
  stateKey: STATE_KEY,
  stateName: STATE_NAME,
  stateCode: STATE_CODE,
  seo: rhodeislandStateData.seo,
  pricing: rhodeislandStateData.pricing,
  faq: rhodeislandStateData.faq,
  lastUpdated: rhodeislandStateData.lastUpdated,
})

// Generate structured data schemas
const faqSchema = generateFaqSchema(rhodeislandStateData.faq)
const productSchema = generateProductSchema({
  stateKey: STATE_KEY,
  stateName: STATE_NAME,
  stateCode: STATE_CODE,
  seo: rhodeislandStateData.seo,
  pricing: rhodeislandStateData.pricing,
  faq: rhodeislandStateData.faq,
  lastUpdated: rhodeislandStateData.lastUpdated,
})
const organizationSchema = generateOrganizationSchema()
const breadcrumbSchema = generateBreadcrumbSchema({
  stateKey: STATE_KEY,
  stateName: STATE_NAME,
  stateCode: STATE_CODE,
  seo: rhodeislandStateData.seo,
  pricing: rhodeislandStateData.pricing,
  faq: rhodeislandStateData.faq,
  lastUpdated: rhodeislandStateData.lastUpdated,
})
const webPageSchema = generateWebPageSchema({
  stateKey: STATE_KEY,
  stateName: STATE_NAME,
  stateCode: STATE_CODE,
  seo: rhodeislandStateData.seo,
  pricing: rhodeislandStateData.pricing,
  faq: rhodeislandStateData.faq,
  lastUpdated: rhodeislandStateData.lastUpdated,
})

export default function RhodeIslandPermitTestPage() {
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
