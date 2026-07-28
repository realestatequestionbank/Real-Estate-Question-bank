import { Metadata } from 'next'
import { AuthProvider } from '@/contexts/auth-context'
import { MontanaGuide } from '@/components/state-guides/montana-guide'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'How to Get a Montana Instruction Permit 2026 — Eligibility, Fees & Rules | Real Estate Question Bank',
  description:
    'Complete guide to getting your Montana instruction permit. Learn about the minimum age (14.5), the $25 fee, required MVD documents, and the step-by-step application process.',
  keywords: [
    'How to get a Montana instruction permit',
    'Montana MVD permit requirements',
    'Montana real estate license age',
    'Montana Real Estate rules 2026',
    'Montana MVD documents needed',
    'Montana driver license',
    'Montana driver manual',
    'Montana real estate exam passing score',
    'Montana GDL restrictions',
    'Montana MVD application fee',
  ],
  openGraph: {
    title: 'How to Get a Montana Instruction Permit — Everything You Need to Know',
    description:
      'Complete guide to Montana MVD permit requirements: eligibility, fees, required documents, the application process, and what to expect on the written test.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/montana',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'Montana MVD real estate exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Get a Montana Instruction Permit — MVD Guide',
    description:
      'Everything you need to know about getting your Montana instruction permit — eligibility, fees, required documents, and the application process.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/montana',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Get a Montana Instruction Permit — Complete MVD Guide',
  description:
    'A complete walkthrough of everything involved in getting your Montana instruction permit — eligibility, documents, fees, and the MVD application process.',
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
  datePublished: '2026-02-24',
  dateModified: '2026-02-24',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.realestatequestionbank.com/state-guides/montana',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How old do you have to be to get an instruction permit in Montana?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must be at least 14 years and 6 months old to apply for an instruction permit in Montana — one of the lowest minimum ages in the United States.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many questions are on the Montana MVD written test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Montana knowledge test has 33 questions. You must answer at least 27 correctly (82%) to pass.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a Montana MVD instruction permit cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The instruction permit application fee is $25, which includes your first knowledge test attempt. Each retest costs $12.',
      },
    },
    {
      '@type': 'Question',
      name: 'What documents do I need for a Montana instruction permit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For a Real ID permit, you need proof of identity (birth certificate, passport, etc.), proof of Social Security number, and two proofs of Montana residency.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I take the Montana MVD written test online?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Montana does not offer a remote online knowledge test. The test must be taken in person at an MVD office.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many times can I take the Montana knowledge test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Montana allows unlimited retests. You must wait at least 1 day between attempts and pay a $12 retest fee each time.',
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
      name: 'Montana',
      item: 'https://www.realestatequestionbank.com/state-guides/montana',
    },
  ],
}

export default function MontanaGuidePage() {
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
        <MontanaGuide />
      </AuthProvider>
    </>
  )
}
