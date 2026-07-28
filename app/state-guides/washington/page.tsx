import { Metadata } from 'next'
import { AuthProvider } from '@/contexts/auth-context'
import { WashingtonGuide } from '@/components/state-guides/washington-guide'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Washington DOL real estate exam 2026 Guide — Eligibility, Fees, Knowledge Test & More | Real Estate Question Bank',
  description:
    'Complete guide to the Washington DOL real estate exam. Learn about eligibility (age 15+), the $25–$35 application fee, 40-question knowledge test, passing score of 80%, required documents, and step-by-step DOL visit walkthrough.',
  keywords: [
    'Washington DOL real estate exam',
    'Washington real estate license',
    'WA DOL knowledge test',
    'Washington DOL test questions',
    'Washington real estate exam passing score',
    'Washington DOL documents needed',
    'Washington DOL appointment',
    'Washington driver guide',
    'Washington real estate exam online',
    'Washington GDL restrictions',
  ],
  openGraph: {
    title: 'Washington DOL real estate exam Guide — Everything You Need to Know',
    description:
      'Complete guide to the Washington DOL real estate exam: eligibility, fees, documents, the knowledge test, what happens if you fail, and how to prepare.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/washington',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'Washington DOL real estate exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Washington DOL real estate exam Guide',
    description:
      'Everything you need to know about getting your Washington learner\'s permit — eligibility, fees, the knowledge test, and more.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/washington',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Washington DOL real estate exam Guide',
  description:
    'A complete walkthrough of everything involved in getting your Washington learner\'s permit — eligibility, documents, fees, the knowledge test, and how to prepare.',
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
  datePublished: '2026-01-31',
  dateModified: '2026-01-31',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.realestatequestionbank.com/state-guides/washington',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How old do you have to be to get a learner\'s permit in Washington?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can get a learner\'s permit at age 15 if enrolled in a state-approved driver training course, or at age 15 and a half without driver training.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many questions are on the Washington DOL knowledge test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Washington knowledge test has 40 multiple-choice and true/false questions. You must answer at least 32 correctly (80%) to pass.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a Washington DOL permit cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The application fee is $25 if you have completed a driver training course, or $35 without driver training.',
      },
    },
    {
      '@type': 'Question',
      name: 'What documents do I need for my Washington DOL permit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You need proof of identity (birth certificate, passport, etc.), your Social Security number, and proof of Washington residency. Applicants under 18 also need parental consent.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I take the Washington DOL knowledge test online?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The Washington knowledge test must be taken in person at a DOL office or at an approved driver training school.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I fail the Washington DOL knowledge test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can retake the test after approximately one day. After three failures, you must complete a driver training course before retaking the test.',
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
      name: 'Washington',
      item: 'https://www.realestatequestionbank.com/state-guides/washington',
    },
  ],
}

export default function WashingtonGuidePage() {
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
        <WashingtonGuide />
      </AuthProvider>
    </>
  )
}
