import { Metadata } from 'next'
import { AuthProvider } from '@/contexts/auth-context'
import { NebraskaGuide } from '@/components/state-guides/nebraska-guide'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Nebraska Real Estate real estate exam 2026 Guide — Eligibility, Fees, Written Test & More | Real Estate Question Bank',
  description:
    'Complete guide to the Nebraska Real Estate Exam. Learn about eligibility (age 15+), the $13 application fee, 25-question written test, passing score of 80%, required documents, and step-by-step Real Estate visit walkthrough.',
  keywords: [
    'Nebraska Real Estate Exam',
    'Nebraska real estate license',
    'NE Real Estate written test',
    'Nebraska Real Estate Exam questions',
    'Nebraska real estate exam passing score',
    'Nebraska Real Estate documents needed',
    'Nebraska Real Estate appointment',
    'Nebraska driver handbook',
    'Nebraska GDL restrictions',
    'Nebraska provisional license',
  ],
  openGraph: {
    title: 'Nebraska Real Estate real estate exam Guide — Everything You Need to Know',
    description:
      'Complete guide to the Nebraska Real Estate Exam: eligibility, fees, documents, the written test, what happens if you fail, and how to prepare.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/nebraska',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'Nebraska Real Estate real estate exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nebraska Real Estate real estate exam Guide',
    description:
      'Everything you need to know about getting your Nebraska learner\'s permit — eligibility, fees, the written test, and more.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/nebraska',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Nebraska Real Estate real estate exam Guide',
  description:
    'A complete walkthrough of everything involved in getting your Nebraska learner\'s permit — eligibility, documents, fees, the written test, and how to prepare.',
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
  datePublished: '2026-02-06',
  dateModified: '2026-02-06',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.realestatequestionbank.com/state-guides/nebraska',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How old do you have to be to get a learner\'s permit in Nebraska?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must be at least 15 years old to apply for a Learner\'s Permit (LPD) in Nebraska. You can submit your application up to 60 days before your 15th birthday, but the permit cannot be issued until your birthday.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many questions are on the Nebraska Real Estate written test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Nebraska Real Estate written test has 25 multiple-choice questions. You must answer at least 20 correctly (80%) to pass.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a Nebraska Real Estate cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Nebraska learner\'s permit costs $13 total, which includes an $8 application fee and a $5 security fee.',
      },
    },
    {
      '@type': 'Question',
      name: 'What documents do I need for my Nebraska Real Estate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You need proof of identity (birth certificate, passport, etc.), proof of Social Security number, and at least two documents proving your Nebraska address.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I fail the Nebraska Real Estate written test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you fail, you must wait until the next business day to retake the test. After 3 failures, you must wait 7 days. After 6 failures, you must complete an approved driver\'s education course or wait 90 days.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do I need to hold my Nebraska learner\'s permit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must hold your learner\'s permit for at least 6 months before you can apply for a Provisional Operator\'s Permit (POP) at age 16.',
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
      name: 'Nebraska',
      item: 'https://www.realestatequestionbank.com/state-guides/nebraska',
    },
  ],
}

export default function NebraskaGuidePage() {
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
        <NebraskaGuide />
      </AuthProvider>
    </>
  )
}
