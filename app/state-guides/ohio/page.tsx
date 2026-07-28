import { Metadata } from 'next'
import { AuthProvider } from '@/contexts/auth-context'
import { OhioGuide } from '@/components/state-guides/ohio-guide'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Ohio BMV real estate exam 2026 Guide — Eligibility, Fees, Written Test & More | Real Estate Question Bank',
  description:
    'Complete guide to the Ohio BMV real estate exam (TIPIC). Learn about eligibility (age 15.5+), the $23.50 fee, 40-question written test, 75% passing score, and Ohio\'s Graduated Driver Licensing program.',
  keywords: [
    'Ohio real estate exam',
    'Ohio BMV real estate license',
    'Ohio TIPIC',
    'OH BMV written test',
    'Ohio real estate exam questions',
    'Ohio real estate exam passing score',
    'Ohio BMV documents needed',
    'Ohio driver manual',
    'Ohio probationary license',
    'Ohio GDL restrictions',
  ],
  openGraph: {
    title: 'Ohio BMV real estate exam Guide — Everything You Need to Know',
    description:
      'Complete guide to the Ohio BMV real estate exam (TIPIC): eligibility, fees, documents, the written test, probationary license requirements, and how to prepare.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/ohio',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'Ohio BMV real estate exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ohio BMV real estate exam Guide',
    description:
      'Everything you need to know about getting your Ohio TIPIC (learner\'s permit) — eligibility, fees, the written test, and more.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/ohio',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Ohio BMV real estate exam Guide',
  description:
    'A complete walkthrough of everything involved in getting your Ohio TIPIC (learner\'s permit) — eligibility, documents, fees, the written test, and how to prepare.',
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
    '@id': 'https://www.realestatequestionbank.com/state-guides/ohio',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How old do you have to be to get a learner\'s permit in Ohio?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must be at least 15 years and 6 months old to apply for a TIPIC (Temporary Instruction Permit Identification Card) in Ohio.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many questions are on the Ohio BMV real estate exam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Ohio knowledge test has 40 multiple-choice questions. You need at least 30 correct answers (75%) to pass.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does an Ohio learner\'s permit cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Ohio TIPIC costs $23.50.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I take the Ohio real estate exam online?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Ohio offers the knowledge test online through Ohio BMV Online Services. You can also take it at deputy registrar locations or driver exam stations.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the Ohio probationary license restrictions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Drivers under 17 cannot drive between midnight and 6am, and can only have one non-family passenger. At 17, the curfew changes to 1am-5am.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I fail the Ohio real estate exam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can retake the test the next business day. There is no limit to the number of attempts.',
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
      name: 'Ohio',
      item: 'https://www.realestatequestionbank.com/state-guides/ohio',
    },
  ],
}

export default function OhioGuidePage() {
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
        <OhioGuide />
      </AuthProvider>
    </>
  )
}
