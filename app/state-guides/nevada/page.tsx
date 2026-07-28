import { Metadata } from 'next'
import { AuthProvider } from '@/contexts/auth-context'
import { NevadaGuide } from '@/components/state-guides/nevada-guide'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Nevada Real Estate real estate exam 2026 Guide — Eligibility, Fees, Written Test & More | Real Estate Question Bank',
  description:
    'Complete guide to the Nevada Real Estate Exam. Learn about eligibility (age 15.5+), the $48.25 total fee, 25-question written test, 80% passing score, and Nevada\'s Graduated Driver Licensing program.',
  keywords: [
    'Nevada real estate exam',
    'Nevada Real Estate real estate license',
    'Nevada instruction permit',
    'NV Real Estate written test',
    'Nevada real estate exam questions',
    'Nevada real estate exam passing score',
    'Nevada Real Estate documents needed',
    'Nevada driver handbook',
    'Nevada intermediate license',
    'Nevada GDL restrictions',
  ],
  openGraph: {
    title: 'Nevada Real Estate real estate exam Guide — Everything You Need to Know',
    description:
      'Complete guide to the Nevada Real Estate Exam: eligibility, fees, documents, the written test, intermediate license requirements, and how to prepare.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/nevada',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'Nevada Real Estate real estate exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nevada Real Estate real estate exam Guide',
    description:
      'Everything you need to know about getting your Nevada instruction permit — eligibility, fees, the written test, and more.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/nevada',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Nevada Real Estate real estate exam Guide',
  description:
    'A complete walkthrough of everything involved in getting your Nevada instruction permit — eligibility, documents, fees, the written test, and how to prepare.',
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
    '@id': 'https://www.realestatequestionbank.com/state-guides/nevada',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How old do you have to be to get an instruction permit in Nevada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must be at least 15 years and 6 months old to apply for an instruction permit in Nevada.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many questions are on the Nevada Real Estate Exam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Nevada knowledge test has 25 multiple-choice questions. You need at least 20 correct answers (80%) to pass.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a Nevada instruction permit cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The total cost is $48.25 ($25 testing fee + $23.25 permit fee).',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I take the Nevada real estate exam online?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Nevada offers the knowledge test online through KnowToDrive Nevada. You can also take it at Real Estate offices on touch-screen computers.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the Nevada teen driving restrictions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Teen drivers under 18 cannot drive between 10pm and 5am, and cannot have any passengers under 18 (except family) for the first 6 months.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I fail the Nevada real estate exam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can retake the test after 1 day. There is a $10 retest fee for each additional attempt.',
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
      name: 'Nevada',
      item: 'https://www.realestatequestionbank.com/state-guides/nevada',
    },
  ],
}

export default function NevadaGuidePage() {
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
        <NevadaGuide />
      </AuthProvider>
    </>
  )
}
