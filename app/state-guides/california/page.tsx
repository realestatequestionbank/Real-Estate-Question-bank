import { Metadata } from 'next'
import { AuthProvider } from '@/contexts/auth-context'
import { CaliforniaGuide } from '@/components/state-guides/california-guide'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'How to Get a California real estate license 2026 — Eligibility, Fees & Rules | Real Estate Question Bank',
  description:
    'Complete guide to getting your California real estate license. Learn about age requirements (15.5+), the $38 fee, required REAL ID documents, and the step-by-step Real Estate application process.',
  keywords: [
    'How to get a California real estate license',
    'California Real Estate requirements',
    'California real estate license age',
    'California Real Estate rules 2026',
    'California Real Estate documents needed',
    'California Real Estate appointment',
    'California driver handbook',
    'California real estate exam passing score',
    'California GDL restrictions',
    'California Real Estate application fee',
  ],
  openGraph: {
    title: 'How to Get a California real estate license — Everything You Need to Know',
    description:
      'Complete guide to California Real Estate requirements: eligibility, fees, required documents, the application process, and what to expect on the written test.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/california',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'California Real Estate real estate exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Get a California real estate license — Real Estate Guide',
    description:
      'Everything you need to know about getting your California learner\'s permit — eligibility, fees, required documents, and the application process.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/california',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Get a California real estate license — Complete Real Estate Guide',
  description:
    'A complete walkthrough of everything involved in getting your California learner\'s permit — eligibility, documents, fees, and the Real Estate application process.',
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
  datePublished: '2026-01-30',
  dateModified: '2026-01-30',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.realestatequestionbank.com/state-guides/california',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How old do you have to be to get a learner\'s permit in California?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must be at least 15 years and 6 months old to apply for a learner\'s permit in California.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many questions are on the California Real Estate written test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Applicants under 18 get 46 questions and must answer 38 correctly (83%). Adults 18 and over get 36 questions and must answer 30 correctly (83%).',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a California Real Estate cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The application fee is $38, which covers the permit application, up to three written test attempts, and the behind-the-wheel driving test.',
      },
    },
    {
      '@type': 'Question',
      name: 'What documents do I need for my California Real Estate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For a Real ID permit, you need proof of identity (birth certificate, passport, etc.), proof of Social Security number, and two proofs of California residency.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I take the California Real Estate written test online?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The California Real Estate offers a remote online knowledge test Monday through Friday, 8 AM to 4 PM. You need a webcam and a quiet, private environment.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I fail the California Real Estate written test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must wait 7 days before retaking the test. Your $38 fee covers up to 3 attempts. After 3 failures, you must submit a new application and pay again.',
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
      name: 'California',
      item: 'https://www.realestatequestionbank.com/state-guides/california',
    },
  ],
}

export default function CaliforniaGuidePage() {
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
        <CaliforniaGuide />
      </AuthProvider>
    </>
  )
}
