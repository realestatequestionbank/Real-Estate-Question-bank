import { Metadata } from 'next'
import { AuthProvider } from '@/contexts/auth-context'
import { RhodeIslandGuide } from '@/components/state-guides/rhode-island-guide'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Rhode Island Real Estate real estate exam 2026 Guide — Eligibility, Fees, Written Test & More | Real Estate Question Bank',
  description:
    'Complete guide to the Rhode Island Real Estate Exam. Learn about eligibility (age 16+), the 25-question knowledge test, $26.50 fee, 80% passing score, mandatory in-person real estate exam prep, 50 hours of supervised driving (10 at night), and Rhode Island\'s Junior Operator\'s License program.',
  keywords: [
    'Rhode Island Real Estate Exam',
    'Rhode Island real estate license',
    'Rhode Island instruction permit',
    'Rhode Island Real Estate written test',
    'Rhode Island real estate exam questions',
    'Rhode Island real estate exam passing score',
    'Rhode Island driver manual',
    'Rhode Island junior operator license',
    'Rhode Island GDL restrictions',
    'Rhode Island supervised driving hours',
  ],
  openGraph: {
    title: 'Rhode Island Real Estate real estate exam Guide — Everything You Need to Know',
    description:
      'Complete guide to the Rhode Island learner\'s permit: eligibility, 25-question knowledge test, mandatory in-person driver ed, 50 hours supervised driving, Junior Operator\'s License, and how to prepare.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/rhode-island',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'Rhode Island Real Estate real estate exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rhode Island Real Estate real estate exam Guide',
    description:
      'Everything you need to know about getting your Rhode Island learner\'s permit — knowledge test, 12-month holding period, 50 hours supervised driving, and more.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/rhode-island',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rhode Island Real Estate real estate exam Guide',
  description:
    'A complete walkthrough of everything involved in getting your Rhode Island learner\'s permit — eligibility, knowledge test, mandatory real estate exam prep, 50 hours supervised driving, fees, Junior Operator\'s License restrictions, and how to prepare.',
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
  datePublished: '2026-02-23',
  dateModified: '2026-02-23',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.realestatequestionbank.com/state-guides/rhode-island',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How old do you have to be to get a permit in Rhode Island?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must be at least 16 years old to apply for a Rhode Island learner\'s permit.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many questions are on the Rhode Island Real Estate Exam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Rhode Island Real Estate knowledge test has 25 multiple-choice questions. You need at least 20 correct answers (80%) to pass.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a Rhode Island learner\'s permit cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Rhode Island learner\'s permit application fee is $26.50.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is real estate exam prep required in Rhode Island?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Rhode Island requires all applicants under 18 to complete an approved in-person real estate exam prep program — 30 hours of classroom instruction and 6 hours of behind-the-wheel training. Online real estate exam prep is not accepted.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do you have to hold a learner\'s permit in Rhode Island?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Rhode Island requires teens to hold their learner\'s permit for at least 12 months before applying for a Junior Operator\'s License — one of the longest holding periods in the country.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the restrictions on a Rhode Island Junior Operator\'s License?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Junior Operator\'s License holders cannot drive between 1 AM and 5 AM (with exceptions). For the first 6 months, no passengers under 21 are allowed unless a supervising adult is present. All cell phone use while driving is prohibited for drivers under 18.',
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
      name: 'Rhode Island',
      item: 'https://www.realestatequestionbank.com/state-guides/rhode-island',
    },
  ],
}

export default function RhodeIslandGuidePage() {
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
        <RhodeIslandGuide />
      </AuthProvider>
    </>
  )
}
