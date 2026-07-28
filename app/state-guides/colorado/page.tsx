import { Metadata } from 'next'
import { AuthProvider } from '@/contexts/auth-context'
import { ColoradoGuide } from '@/components/state-guides/colorado-guide'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Colorado Real Estate real estate exam 2026 Guide — Eligibility, Fees, Written Test & More | Real Estate Question Bank',
  description:
    'Complete guide to the Colorado Real Estate instruction real estate exam. Learn about eligibility (age 15+), the $17 application fee, 25-question written test, passing score of 80%, required documents, and step-by-step Real Estate visit walkthrough.',
  keywords: [
    'Colorado Real Estate Exam',
    'Colorado instruction permit',
    'Colorado real estate license',
    'Colorado Real Estate written test',
    'Colorado real estate exam questions',
    'Colorado real estate exam passing score',
    'Colorado Real Estate documents needed',
    'Colorado Real Estate appointment',
    'Colorado driver handbook',
    'Colorado GDL restrictions',
  ],
  openGraph: {
    title: 'Colorado Real Estate real estate exam Guide — Everything You Need to Know',
    description:
      'Complete guide to the Colorado Real Estate instruction permit: eligibility, fees, documents, the written test, what happens if you fail, and how to prepare.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/colorado',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'Colorado Real Estate real estate exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Colorado Real Estate real estate exam Guide',
    description:
      'Everything you need to know about getting your Colorado instruction permit — eligibility, fees, the written test, and more.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/colorado',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Colorado Real Estate real estate exam Guide',
  description:
    'A complete walkthrough of everything involved in getting your Colorado instruction permit — eligibility, documents, fees, the written test, and how to prepare.',
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
  datePublished: '2026-02-20',
  dateModified: '2026-02-20',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.realestatequestionbank.com/state-guides/colorado',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How old do you have to be to get a learner\'s permit in Colorado?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must be at least 15 years old to apply for an instruction permit in Colorado.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many questions are on the Colorado Real Estate written test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Colorado knowledge test has 25 questions. You must answer at least 20 correctly (80%) to pass. The same test applies to both teens and adults.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a Colorado instruction permit cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The instruction permit application fee is $17. If you need to retake the written test, a $7 retest fee applies each time.',
      },
    },
    {
      '@type': 'Question',
      name: 'What documents do I need for my Colorado instruction permit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You need proof of identity (birth certificate, passport, etc.), proof of Social Security number, two proofs of Colorado residency, and — if under 18 — a completed DR 2460 parent consent form.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I take the Colorado Real Estate written test online?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Colorado requires all knowledge tests to be taken in person at a Real Estate driver license office. The myRealEstate portal is available for pre-application and scheduling only.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do I have to hold my Colorado instruction permit before taking the driving test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Teen drivers must hold their instruction permit for at least 12 months and be at least 16 years old before they can apply for a restricted license. This is one of the longest holding periods in the country.',
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
      name: 'Colorado',
      item: 'https://www.realestatequestionbank.com/state-guides/colorado',
    },
  ],
}

export default function ColoradoGuidePage() {
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
        <ColoradoGuide />
      </AuthProvider>
    </>
  )
}
