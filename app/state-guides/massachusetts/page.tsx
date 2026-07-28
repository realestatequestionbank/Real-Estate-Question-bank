import { Metadata } from 'next'
import { AuthProvider } from '@/contexts/auth-context'
import { MassachusettsGuide } from '@/components/state-guides/massachusetts-guide'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Massachusetts RMV real estate exam 2026 Guide — Eligibility, Fees, Written Test & More | Real Estate Question Bank',
  description:
    'Complete guide to the Massachusetts RMV real estate exam. Learn about eligibility (age 16+), the $30 fee, 25-question written test, 72% passing score, Junior Operator License requirements, and step-by-step RMV visit walkthrough.',
  keywords: [
    'Massachusetts RMV real estate exam',
    'Massachusetts real estate license',
    'MA RMV written test',
    'Massachusetts real estate exam questions',
    'Massachusetts real estate exam passing score',
    'Massachusetts RMV documents needed',
    'Massachusetts RMV appointment',
    'Massachusetts driver manual',
    'Massachusetts Junior Operator License',
    'Massachusetts JOL restrictions',
  ],
  openGraph: {
    title: 'Massachusetts RMV real estate exam Guide — Everything You Need to Know',
    description:
      'Complete guide to the Massachusetts RMV real estate exam: eligibility, fees, documents, the written test, Junior Operator License requirements, and how to prepare.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/massachusetts',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'Massachusetts RMV real estate exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Massachusetts RMV real estate exam Guide',
    description:
      'Everything you need to know about getting your Massachusetts learner\'s permit — eligibility, fees, the written test, and more.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/massachusetts',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Massachusetts RMV real estate exam Guide',
  description:
    'A complete walkthrough of everything involved in getting your Massachusetts learner\'s permit — eligibility, documents, fees, the written test, and how to prepare.',
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
    '@id': 'https://www.realestatequestionbank.com/state-guides/massachusetts',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How old do you have to be to get a learner\'s permit in Massachusetts?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must be at least 16 years old to apply for a learner\'s permit in Massachusetts.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many questions are on the Massachusetts RMV written test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Massachusetts knowledge test has 25 multiple-choice questions. You need at least 18 correct answers (72%) to pass.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a Massachusetts learner\'s permit cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Massachusetts learner\'s permit costs $30.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I take the Massachusetts real estate exam online?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Massachusetts offers the option to take the real estate exam online or at an RMV Service Center during your appointment.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a Junior Operator License in Massachusetts?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Junior Operator License (JOL) is issued to drivers between 16½ and 18 years old. It comes with restrictions including a 12:30am-5am curfew and passenger limitations for the first 6 months.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I fail the Massachusetts RMV written test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you fail, you can retake the test after at least one day. There is no limit to the number of attempts.',
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
      name: 'Massachusetts',
      item: 'https://www.realestatequestionbank.com/state-guides/massachusetts',
    },
  ],
}

export default function MassachusettsGuidePage() {
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
        <MassachusettsGuide />
      </AuthProvider>
    </>
  )
}
