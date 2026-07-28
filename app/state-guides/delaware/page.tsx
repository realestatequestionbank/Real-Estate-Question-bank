import { Metadata } from 'next'
import { AuthProvider } from '@/contexts/auth-context'
import { DelawareGuide } from '@/components/state-guides/delaware-guide'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'How to Get a Delaware real estate license 2026 — Eligibility, Fees & Rules | Real Estate Question Bank',
  description:
    'Complete guide to getting your Delaware real estate license. Learn about age requirements (16+), the $40 fee, required documents, and the step-by-step Real Estate application process.',
  keywords: [
    'How to get a Delaware real estate license',
    'Delaware Real Estate requirements',
    'Delaware real estate license age',
    'Delaware Real Estate rules 2026',
    'Delaware Real Estate documents needed',
    'Delaware driver manual',
    'Delaware real estate exam passing score',
    'Delaware GDL restrictions',
    'Delaware Real Estate application fee',
    'Delaware Division of Motor Vehicles',
  ],
  openGraph: {
    title: 'How to Get a Delaware real estate license — Everything You Need to Know',
    description:
      'Complete guide to Delaware Real Estate requirements: eligibility, fees, required documents, the application process, and what to expect on the written test.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/delaware',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'Delaware Real Estate real estate exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Get a Delaware real estate license — Real Estate Guide',
    description:
      "Everything you need to know about getting your Delaware real estate license — eligibility, fees, required documents, and the application process.",
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/delaware',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Get a Delaware real estate license — Complete Real Estate Guide',
  description:
    "A complete walkthrough of everything involved in getting your Delaware real estate license — eligibility, documents, fees, and the Real Estate application process.",
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
  datePublished: '2026-02-22',
  dateModified: '2026-02-22',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.realestatequestionbank.com/state-guides/delaware',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "How old do you have to be to get a real estate license in Delaware?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "You must be at least 16 years old to apply for a real estate license in Delaware.",
      },
    },
    {
      '@type': 'Question',
      name: 'How many questions are on the Delaware Real Estate written test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Delaware knowledge test has 30 questions. You must answer at least 24 correctly (80%) to pass.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a Delaware Real Estate cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The learner\'s permit fee in Delaware is $40.',
      },
    },
    {
      '@type': 'Question',
      name: 'What documents do I need for my Delaware Real Estate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Delaware uses a point-based system requiring at least 6 points of ID. A common combination is a U.S. birth certificate (4 points) + Social Security card (2 points) + proof of Delaware residency.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I take the Delaware Real Estate written test online?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Delaware does not offer an online or remote knowledge test. You must take the test in person at a Delaware Real Estate Driver Services office.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I fail the Delaware Real Estate written test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must wait at least 1 day before retaking the test. You have up to 3 attempts per application. After 3 failures, you must reapply and pay the $40 fee again.',
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
      name: 'Delaware',
      item: 'https://www.realestatequestionbank.com/state-guides/delaware',
    },
  ],
}

export default function DelawareGuidePage() {
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
        <DelawareGuide />
      </AuthProvider>
    </>
  )
}
