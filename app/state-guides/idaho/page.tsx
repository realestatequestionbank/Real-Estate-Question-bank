import { Metadata } from 'next'
import { AuthProvider } from '@/contexts/auth-context'
import { IdahoGuide } from '@/components/state-guides/idaho-guide'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Idaho ITD real estate exam 2026 Guide — Eligibility, Fees, Written Test & More | Real Estate Question Bank',
  description:
    'Complete guide to the Idaho ITD real estate exam. Learn about eligibility (age 14.5+), the $21.50 fee, 40-question written test, 85% passing score, and Idaho\'s Graduated Driver Licensing program.',
  keywords: [
    'Idaho real estate exam',
    'Idaho real estate license',
    'Idaho ITD written test',
    'Idaho real estate exam questions',
    'Idaho real estate exam passing score',
    'Idaho ITD documents needed',
    'Idaho driver manual',
    'Idaho supervised instruction permit',
    'Idaho GDL restrictions',
    'Idaho real estate exam prep',
  ],
  openGraph: {
    title: 'Idaho ITD real estate exam Guide — Everything You Need to Know',
    description:
      'Complete guide to the Idaho ITD real estate exam: eligibility, fees, documents, the written test, GDL requirements, and how to prepare.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/idaho',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'Idaho ITD real estate exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Idaho ITD real estate exam Guide',
    description:
      'Everything you need to know about getting your Idaho instruction permit — eligibility, fees, the written test, and more.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/idaho',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Idaho ITD real estate exam Guide',
  description:
    'A complete walkthrough of everything involved in getting your Idaho supervised instruction permit — eligibility, documents, fees, the written test, and how to prepare.',
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
  datePublished: '2026-02-03',
  dateModified: '2026-02-03',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.realestatequestionbank.com/state-guides/idaho',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How old do you have to be to get a permit in Idaho?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must be at least 14 years and 6 months old to apply for a Supervised Instruction Permit (SIP) in Idaho.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many questions are on the Idaho real estate exam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Idaho knowledge test has 40 multiple-choice questions. You need at least 34 correct answers (85%) to pass — one of the higher thresholds in the country.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does an Idaho instruction permit cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Idaho Supervised Instruction Permit costs $21.50 total ($15 permit fee + $6.50 administrative fee).',
      },
    },
    {
      '@type': 'Question',
      name: 'Is real estate exam prep required in Idaho?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, real estate exam prep is required for all applicants under 17 in Idaho. It includes 30 hours of classroom instruction, 6 hours of observation, and 6 hours of behind-the-wheel training.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I fail the Idaho real estate exam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you fail, you must wait 3 days and pay a $6.50 retest fee to try again.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the GDL restrictions in Idaho?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Drivers under 16 can only drive during daylight hours. All drivers under 17 are limited to one non-family passenger under 17 for the first 6 months.',
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
      name: 'Idaho',
      item: 'https://www.realestatequestionbank.com/state-guides/idaho',
    },
  ],
}

export default function IdahoGuidePage() {
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
        <IdahoGuide />
      </AuthProvider>
    </>
  )
}
