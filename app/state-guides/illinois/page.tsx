import { Metadata } from 'next'
import { AuthProvider } from '@/contexts/auth-context'
import { IllinoisGuide } from '@/components/state-guides/illinois-guide'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Illinois real estate exam 2026 Guide — Eligibility, Fees, Written Test & More | Real Estate Question Bank',
  description:
    'Complete guide to the Illinois real estate exam. Learn about eligibility (age 15+), the $20 application fee, 35-question written test, passing score of 80%, required documents, and step-by-step visit walkthrough.',
  keywords: [
    'Illinois real estate exam',
    'Illinois real estate license',
    'IL Secretary of State written test',
    'Illinois real estate exam questions',
    'Illinois real estate exam passing score',
    'Illinois permit documents needed',
    'Illinois SOS appointment',
    'Illinois Rules of the Road',
    'Illinois GDL restrictions',
    'Illinois provisional license',
  ],
  openGraph: {
    title: 'Illinois real estate exam Guide — Everything You Need to Know',
    description:
      'Complete guide to the Illinois real estate exam: eligibility, fees, documents, the written test, what happens if you fail, and how to prepare.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/illinois',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'Illinois real estate exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Illinois real estate exam Guide',
    description:
      'Everything you need to know about getting your Illinois learner\'s permit — eligibility, fees, the written test, and more.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/illinois',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Illinois real estate exam Guide',
  description:
    'A complete walkthrough of everything involved in getting your Illinois learner\'s permit — eligibility, documents, fees, the written test, and how to prepare.',
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
  datePublished: '2026-02-07',
  dateModified: '2026-02-07',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.realestatequestionbank.com/state-guides/illinois',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How old do you have to be to get a learner\'s permit in Illinois?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must be at least 15 years old to apply for an instruction permit in Illinois. If you are under 17 years and 3 months old, you must also be enrolled in an approved real estate exam prep course.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many questions are on the Illinois real estate exam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Illinois written real estate exam has 35 questions, including 15 sign identification questions and 20 multiple-choice or true/false questions. You must answer at least 28 correctly (80%) to pass.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does an Illinois permit cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Illinois instruction permit costs $20. This fee covers the application processing, the written test, and issuing your permit.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do I need to hold my Illinois permit before getting a license?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must hold your instruction permit for at least 9 months before you can apply for a driver\'s license in Illinois.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the GDL restrictions for aspiring agents in Illinois?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Illinois GDL restrictions include a nighttime curfew (10pm-6am Sun-Thu, 11pm-6am Fri-Sat), a passenger limit of one person under 20 for the first 12 months, and a complete ban on cell phone use for drivers under 19.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is driver\'s education required in Illinois?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, driver\'s education is required if you are under 17 years and 3 months old. The course includes 30 hours of classroom instruction and 6 hours of behind-the-wheel training.',
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
      name: 'Illinois',
      item: 'https://www.realestatequestionbank.com/state-guides/illinois',
    },
  ],
}

export default function IllinoisGuidePage() {
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
        <IllinoisGuide />
      </AuthProvider>
    </>
  )
}
