import { Metadata } from 'next'
import { AuthProvider } from '@/contexts/auth-context'
import { PennsylvaniaGuide } from '@/components/state-guides/pennsylvania-guide'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Pennsylvania PennDOT real estate exam 2026 Guide — Eligibility, Fees, Written Test & More | Real Estate Question Bank',
  description:
    'Complete guide to the Pennsylvania PennDOT real estate exam. Learn about eligibility (age 16+), the $35.50 fee, 18-question written test, 83% passing score, 65 hours supervised driving, and Junior License requirements.',
  keywords: [
    'Pennsylvania real estate exam',
    'Pennsylvania real estate license',
    'PA PennDOT written test',
    'Pennsylvania real estate exam questions',
    'Pennsylvania real estate exam passing score',
    'Pennsylvania Real Estate documents needed',
    'PennDOT appointment',
    'Pennsylvania driver manual',
    'Pennsylvania junior license',
    'Pennsylvania GDL restrictions',
  ],
  openGraph: {
    title: 'Pennsylvania PennDOT real estate exam Guide — Everything You Need to Know',
    description:
      'Complete guide to the Pennsylvania PennDOT real estate exam: eligibility, fees, documents, the written test, Junior License requirements, and how to prepare.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/pennsylvania',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'Pennsylvania PennDOT real estate exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pennsylvania PennDOT real estate exam Guide',
    description:
      'Everything you need to know about getting your Pennsylvania learner\'s permit — eligibility, fees, the written test, and more.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/pennsylvania',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Pennsylvania PennDOT real estate exam Guide',
  description:
    'A complete walkthrough of everything involved in getting your Pennsylvania learner\'s permit — eligibility, documents, fees, the written test, and how to prepare.',
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
    '@id': 'https://www.realestatequestionbank.com/state-guides/pennsylvania',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How old do you have to be to get a learner\'s permit in Pennsylvania?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must be at least 16 years old to apply for a learner\'s permit in Pennsylvania.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many questions are on the Pennsylvania real estate exam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Pennsylvania knowledge test has 18 multiple-choice questions. You need at least 15 correct answers (83%) to pass.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a Pennsylvania learner\'s permit cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Pennsylvania learner\'s permit costs $35.50. The knowledge test fee is an additional $10 if you need to retake it.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many hours of supervised driving do I need in Pennsylvania?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pennsylvania requires 65 hours of supervised driving, including 10 hours at night and 5 hours in bad weather, before you can take the road test.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the Junior License restrictions in Pennsylvania?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Junior License holders cannot drive between 11pm and 5am, and can only have one non-family passenger under 18 (three after 6 months on the license).',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I fail the Pennsylvania real estate exam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you fail, you must wait until the next business day to retake the test. There is a $10 retest fee.',
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
      name: 'Pennsylvania',
      item: 'https://www.realestatequestionbank.com/state-guides/pennsylvania',
    },
  ],
}

export default function PennsylvaniaGuidePage() {
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
        <PennsylvaniaGuide />
      </AuthProvider>
    </>
  )
}
