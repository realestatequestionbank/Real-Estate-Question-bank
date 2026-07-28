import { Metadata } from 'next'
import { AuthProvider } from '@/contexts/auth-context'
import { MichiganGuide } from '@/components/state-guides/michigan-guide'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Michigan SOS real estate exam 2026 Guide — Eligibility, Fees, Written Test & More | Real Estate Question Bank',
  description:
    'Complete guide to the Michigan Secretary of State real estate exam. Learn about eligibility (age 14.75+), the $25 fee, 50-question written test, 80% passing score, and Michigan\'s Graduated Driver Licensing program.',
  keywords: [
    'Michigan SOS real estate exam',
    'Michigan real estate license',
    'MI Secretary of State written test',
    'Michigan real estate exam questions',
    'Michigan real estate exam passing score',
    'Michigan SOS documents needed',
    'Michigan SOS appointment',
    'Michigan driver manual',
    'Michigan Level 1 license',
    'Michigan GDL restrictions',
  ],
  openGraph: {
    title: 'Michigan SOS real estate exam Guide — Everything You Need to Know',
    description:
      'Complete guide to the Michigan Secretary of State real estate exam: eligibility, fees, documents, the written test, what happens if you fail, and how to prepare.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/michigan',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'Michigan SOS real estate exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Michigan SOS real estate exam Guide',
    description:
      'Everything you need to know about getting your Michigan learner\'s permit — eligibility, fees, the written test, and more.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/michigan',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Michigan SOS real estate exam Guide',
  description:
    'A complete walkthrough of everything involved in getting your Michigan learner\'s permit — eligibility, documents, fees, the written test, and how to prepare.',
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
  datePublished: '2026-02-02',
  dateModified: '2026-02-02',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.realestatequestionbank.com/state-guides/michigan',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How old do you have to be to get a learner\'s permit in Michigan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must be at least 14 years and 9 months old to apply for a Level 1 learner\'s permit in Michigan.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many questions are on the Michigan written test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Michigan knowledge test has 50 multiple-choice questions covering road signs, safe driving laws, and driving restrictions. You need at least 40 correct answers (80%) to pass.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a Michigan Level 1 permit cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Michigan Level 1 learner\'s permit costs $25, which includes the knowledge test fee.',
      },
    },
    {
      '@type': 'Question',
      name: 'What documents do I need for my Michigan learner\'s permit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You need proof of identity and legal U.S. presence, your Social Security number, two proofs of Michigan residency, your Segment 1 Driver\'s Education completion certificate, and a parent/guardian must accompany you.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where do I take the Michigan real estate exam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For teens under 18, the written knowledge test is taken as part of real estate exam prep (Segment 1), not at the Secretary of State office. Adults 18+ take the test at a Secretary of State office.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I fail the Michigan real estate exam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can retake the test the next business day after failing. After three failures, you must wait 30 days before retesting.',
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
      name: 'Michigan',
      item: 'https://www.realestatequestionbank.com/state-guides/michigan',
    },
  ],
}

export default function MichiganGuidePage() {
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
        <MichiganGuide />
      </AuthProvider>
    </>
  )
}
