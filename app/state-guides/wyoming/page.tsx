import { Metadata } from 'next'
import { AuthProvider } from '@/contexts/auth-context'
import { WyomingGuide } from '@/components/state-guides/wyoming-guide'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Wyoming Real Estate real estate exam 2026 Guide — Eligibility, Fees, Written Test & More | Real Estate Question Bank',
  description:
    'Complete guide to the Wyoming Real Estate Exam. Learn about eligibility (age 15+), the 25-question knowledge test, $15 permit fee, 80% passing score, 50 hours of supervised driving (10 at night), and Wyoming\'s Graduated Driver Licensing program.',
  keywords: [
    'Wyoming Real Estate Exam',
    'Wyoming real estate license',
    'Wyoming instruction permit',
    'Wyoming Real Estate written test',
    'Wyoming real estate exam questions',
    'Wyoming real estate exam passing score',
    'Wyoming driver manual',
    'Wyoming restricted license',
    'Wyoming GDL restrictions',
    'Wyoming WYDOT driver license',
  ],
  openGraph: {
    title: 'Wyoming Real Estate real estate exam Guide — Everything You Need to Know',
    description:
      'Complete guide to the Wyoming instruction permit: eligibility, 25-question knowledge test, $15 fee, 80% passing score, 50 hours supervised driving, restricted license restrictions, and how to prepare.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/wyoming',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'Wyoming Real Estate real estate exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wyoming Real Estate real estate exam Guide',
    description:
      'Everything you need to know about getting your Wyoming instruction permit — $15 fee, 25-question test, 50 hours supervised driving, 9pm curfew, and more.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/wyoming',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Wyoming Real Estate real estate exam Guide',
  description:
    'A complete walkthrough of everything involved in getting your Wyoming instruction permit — eligibility, the knowledge test, $15 fee, 80% passing score, 50 hours of supervised driving, restricted license GDL restrictions, and how to prepare.',
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
  datePublished: '2026-02-24',
  dateModified: '2026-02-24',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.realestatequestionbank.com/state-guides/wyoming',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How old do you have to be to get a permit in Wyoming?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must be at least 15 years old to apply for a Wyoming instruction permit.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many questions are on the Wyoming Real Estate Exam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Wyoming Real Estate knowledge test has 25 multiple-choice questions. You need at least 20 correct answers (80%) to pass.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a Wyoming instruction permit cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Wyoming instruction permit costs $15.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is real estate exam prep required in Wyoming?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Wyoming does not require real estate exam prep to get an instruction permit or advance to a restricted license. Driver education is optional.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many hours of supervised driving are required in Wyoming?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wyoming requires 50 hours of supervised driving, including at least 10 hours at night, before advancing to a restricted license.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the restrictions on a Wyoming restricted license?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wyoming restricted license holders cannot drive between 9 PM and 5 AM (with exceptions for work, school, or emergencies). For the first 6 months, no more than 1 non-family passenger under 18 is allowed. No handheld phone use for drivers under 18.',
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
      name: 'Wyoming',
      item: 'https://www.realestatequestionbank.com/state-guides/wyoming',
    },
  ],
}

export default function WyomingGuidePage() {
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
        <WyomingGuide />
      </AuthProvider>
    </>
  )
}
