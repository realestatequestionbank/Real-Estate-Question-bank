import { Metadata } from 'next'
import { AuthProvider } from '@/contexts/auth-context'
import { NewHampshireGuide } from '@/components/state-guides/new-hampshire-guide'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'New Hampshire Real Estate real estate exam 2026 Guide — Eligibility, Fees, Written Test & More | Real Estate Question Bank',
  description:
    'Complete guide to the New Hampshire Real Estate Exam. Learn about eligibility (age 15.5+), the 40-question knowledge test, $50 application fee, 80% passing score, 40 hours of supervised driving (10 at night), and New Hampshire\'s Graduated Driver Licensing program.',
  keywords: [
    'New Hampshire Real Estate Exam',
    'New Hampshire real estate license',
    'New Hampshire instruction permit',
    'New Hampshire Real Estate written test',
    'New Hampshire real estate exam questions',
    'New Hampshire real estate exam passing score',
    'New Hampshire driver manual',
    'New Hampshire GDL restrictions',
    'New Hampshire supervised driving hours',
    'New Hampshire restricted license',
  ],
  openGraph: {
    title: 'New Hampshire Real Estate real estate exam Guide — Everything You Need to Know',
    description:
      'Complete guide to the New Hampshire learner\'s permit: eligibility, 40-question knowledge test, fees, 40 hours supervised driving, GDL requirements, and how to prepare.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/new-hampshire',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'New Hampshire Real Estate real estate exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'New Hampshire Real Estate real estate exam Guide',
    description:
      'Everything you need to know about getting your New Hampshire learner\'s permit — knowledge test, 40 hours supervised driving, fees, and more.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/new-hampshire',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'New Hampshire Real Estate real estate exam Guide',
  description:
    'A complete walkthrough of everything involved in getting your New Hampshire learner\'s permit — eligibility, the 40-question knowledge test, 40 hours of supervised driving, fees, documents, GDL restrictions, and how to prepare.',
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
  datePublished: '2026-02-23',
  dateModified: '2026-02-23',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.realestatequestionbank.com/state-guides/new-hampshire',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How old do you have to be to get a permit in New Hampshire?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must be at least 15 years and 6 months old (15½) to apply for a New Hampshire learner\'s permit.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many questions are on the New Hampshire Real Estate Exam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The New Hampshire Real Estate knowledge test has 40 multiple-choice questions. You need at least 32 correct answers (80%) to pass.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a New Hampshire learner\'s permit cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The New Hampshire initial license application fee is approximately $50, which covers the learner\'s permit through to your full driver\'s license.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is real estate exam prep required in New Hampshire?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. New Hampshire does not require real estate exam prep to get a learner\'s permit or advance to a restricted license. However, it is strongly recommended for better preparation.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many hours of supervised driving are required in New Hampshire?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'New Hampshire requires 40 hours of supervised driving, of which at least 10 hours must be at night, before a teen can apply for a restricted license.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the GDL restrictions for New Hampshire teen drivers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'New Hampshire restricted license holders cannot drive between 1 AM and 4 AM (with exceptions for work, school, or emergencies). During the first year, no more than 1 non-family passenger under 25 is allowed. No handheld wireless device use is permitted for drivers under 18.',
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
      name: 'New Hampshire',
      item: 'https://www.realestatequestionbank.com/state-guides/new-hampshire',
    },
  ],
}

export default function NewHampshireGuidePage() {
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
        <NewHampshireGuide />
      </AuthProvider>
    </>
  )
}
