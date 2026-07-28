import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { AuthProvider } from '@/contexts/auth-context'
import { StateCdlGuide } from '@/components/state-guides/state-cdl-guide-template'
import { STATE_CDL_CONFIGS, type StateCdlGuideConfig } from '@/components/state-guides/cdl-configs'
import { STATES, type StateKey } from '@/lib/constants'
import { getDepartmentName } from '@/lib/data/state-departments'
import Script from 'next/script'

interface PageProps {
  params: {
    state: string
  }
}

// Helper to validate state param
function isValidState(state: string): state is StateKey {
  return state in STATES
}

function formatStateName(name: string): string {
  return name
    .split(/\s+|-/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('_');
}

// Build CDL configuration dynamically with fallback for other states
function getCdlConfig(stateKey: StateKey): StateCdlGuideConfig {
  // If a custom config exists, use it
  if (STATE_CDL_CONFIGS[stateKey]) {
    return STATE_CDL_CONFIGS[stateKey]
  }

  // Otherwise, construct a high-quality fallback
  const stateInfo = STATES[stateKey]
  const deptInfo = getDepartmentName(stateKey)
  const stateName = stateInfo.name
  const stateNameFormatted = formatStateName(stateName)

  return {
    stateKey,
    stateName,
    departmentName: `${stateName} ${deptInfo.fullName}`,
    departmentAbbreviation: deptInfo.name,
    departmentUrl: `https://www.${stateKey.replace(/-+/g, '')}${deptInfo.name.toLowerCase()}.gov`,
    applicationFee: 'Varies by state (typically $50 - $100)',
    retestFee: 'Varies by location (typically $10 - $20)',
    skillsRetestFee: 'Varies by location',
    clpValidity: '180 days (renewable once)',
    retakeWaitTime: '24 hours',
    officialHandbookUrl: `/pdf/${stateNameFormatted}_CDL_Handbook_2026.pdf`,
    officialHandbookName: `${stateName} Commercial Driver License Manual`,
    residencyProofs: `Two proofs of ${stateName} residency (e.g., utility bills, bank statements, lease agreements)`,
    identityProofs: `Proof of identity and U.S. citizenship or lawful presence (e.g., birth certificate, passport)`,
    hasAmbulanceCertificate: false,
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  if (!isValidState(params.state)) return {}

  const config = getCdlConfig(params.state)

  return {
    title: `How to Get a ${config.stateName} Commercial Driver License (CDL) Permit 2026 — Eligibility, Fees & Rules | Real Estate Question Bank`,
    description: `Complete guide to getting your ${config.stateName} commercial real estate license (CLP). Learn about Class A/B age requirements (18/21), permit fees, required residency/medical documents, and the step-by-step application process.`,
    keywords: [
      `How to get a ${config.stateName} CDL permit`,
      `${config.stateName} commercial real estate license`,
      `${config.stateName} CDL age requirements`,
      `${config.stateName} CDL fee`,
      `${config.stateName} DOT physical medical card`,
      `${config.stateName} Class A CDL written test`,
      `${config.stateName} Class B CDL written test`,
      `${config.stateName} ${config.departmentAbbreviation} CDL rules`
    ],
    openGraph: {
      title: `How to Get a ${config.stateName} CDL Permit — Everything You Need to Know`,
      description: `Complete guide to ${config.stateName} CDL permit requirements: eligibility, fees, required documents, DOT physical, the application process, and what to expect on the written test.`,
      type: 'article',
      url: `https://www.realestatequestionbank.com/state-guides/${params.state}-cdl`,
      siteName: 'Real Estate Question Bank',
      locale: 'en_US',
      images: [
        {
          url: '/images/cover-image.png',
          width: 1200,
          height: 630,
          alt: `${config.stateName} CDL Written Test Guide`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `How to Get a ${config.stateName} CDL Permit — Study Guide`,
      description: `Everything you need to know about getting your ${config.stateName} commercial real estate license (CLP) — eligibility, fees, required documents, and the application process.`,
      images: ['/images/cover-image.png'],
      creator: '@real-estatequestionbank',
      site: '@real-estatequestionbank',
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `https://www.realestatequestionbank.com/state-guides/${params.state}-cdl`,
    },
  }
}

export function generateStaticParams() {
  return Object.keys(STATES).map((state) => ({
    state: state,
  }))
}

export default function StateCdlGuidePage({ params }: PageProps) {
  if (!isValidState(params.state)) {
    notFound()
  }

  const config = getCdlConfig(params.state)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `How to Get a ${config.stateName} Commercial real estate license (CLP) — Complete Real Estate Guide`,
    description: `A complete walkthrough of everything involved in getting your ${config.stateName} commercial real estate license — eligibility, medical exam, documents, fees, and the Real Estate application process.`,
    author: {
      '@type': 'Organization',
      name: 'Real Estate Question Bank',
      url: 'https://www.realestatequestionbank.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Real Estate Question Bank',
      url: 'https://www.realestatequestionbank.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.realestatequestionbank.com/images/logo.png',
      },
    },
    datePublished: '2026-06-15',
    dateModified: '2026-06-15',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.realestatequestionbank.com/state-guides/${params.state}-cdl`,
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `How old do you have to be to get a CDL in ${config.stateName}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `You must be at least 18 years old to apply for intrastate CDL driving within ${config.stateName}. You must be at least 21 years old to drive commercial vehicles across state lines (interstate) or transport placarded hazardous materials.`,
        },
      },
      {
        '@type': 'Question',
        name: `How much does a ${config.stateName} CDL written real estate exam cost?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `The standard ${config.stateName} CDL permit application fee is ${config.applicationFee}. Retake fees and skills tests are subject to additional local charges.`,
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need a medical card before taking the CDL written tests?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes. In ${config.stateName}, you must pass a DOT physical from a registered medical examiner and obtain a valid Medical Examiner's Certificate (Form MCSA-5876) before you can apply for a CLP permit.`,
        },
      },
      {
        '@type': 'Question',
        name: `What happens if I fail a ${config.stateName} CDL written test?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `You must observe the local wait period of ${config.retakeWaitTime} before retaking the test. If you fail repeatedly, your application may expire.`,
        },
      },
    ],
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.realestatequestionbank.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'State Guides',
        item: 'https://www.realestatequestionbank.com/state-guides',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: `${config.stateName} CDL Guide`,
        item: `https://www.realestatequestionbank.com/state-guides/${params.state}-cdl`,
      },
    ],
  }

  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AuthProvider>
        <StateCdlGuide config={config} />
      </AuthProvider>
    </>
  )
}
