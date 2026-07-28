import { Metadata } from 'next'
import { AuthProvider } from '@/contexts/auth-context'
import { NorthDakotaGuide } from '@/components/state-guides/north-dakota-guide'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'North Dakota DOT real estate exam 2026 Guide — Eligibility, Fees, Written Test & More | Real Estate Question Bank',
  description:
    'Complete guide to the North Dakota DOT real estate exam. Learn about eligibility (age 14+), the $15 permit fee, 25-question written test, passing score of 80%, required documents, and step-by-step office visit walkthrough.',
  keywords: [
    'North Dakota DOT real estate exam',
    'North Dakota real estate license',
    'North Dakota written test',
    'North Dakota DOT test questions',
    'North Dakota real estate exam passing score',
    'North Dakota Real Estate documents needed',
    'North Dakota driver license',
    'North Dakota driver handbook',
    'North Dakota GDL restrictions',
    'North Dakota instruction permit',
  ],
  openGraph: {
    title: 'North Dakota DOT real estate exam Guide — Everything You Need to Know',
    description:
      'Complete guide to the North Dakota DOT real estate exam: eligibility, fees, documents, the written test, what happens if you fail, and how to prepare.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/north-dakota',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'North Dakota DOT real estate exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'North Dakota DOT real estate exam Guide',
    description:
      "Everything you need to know about getting your North Dakota real estate license — eligibility, fees, the written test, and more.",
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/north-dakota',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'North Dakota DOT real estate exam Guide',
  description:
    "A complete walkthrough of everything involved in getting your North Dakota instruction permit — eligibility, documents, fees, the written test, and how to prepare.",
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
    '@id': 'https://www.realestatequestionbank.com/state-guides/north-dakota',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "How old do you have to be to get a real estate license in North Dakota?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must be at least 14 years old to apply for an instruction permit in North Dakota.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many questions are on the North Dakota DOT written test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The North Dakota knowledge test has 25 multiple-choice questions. You must answer at least 20 correctly (80%) to pass.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a North Dakota instruction permit cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The North Dakota instruction permit fee is $15.',
      },
    },
    {
      '@type': 'Question',
      name: 'What documents do I need for my North Dakota instruction permit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You need proof of identity (birth certificate or passport), proof of Social Security number, and two proofs of North Dakota residency.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I fail the North Dakota DOT written test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must wait one day before retaking the test. After three failures, you must wait 7 days before testing again.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do I need to hold my North Dakota instruction permit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must hold your instruction permit for at least 12 months before applying for a restricted license, and you must be at least 16 years old.',
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
      name: 'North Dakota',
      item: 'https://www.realestatequestionbank.com/state-guides/north-dakota',
    },
  ],
}

export default function NorthDakotaGuidePage() {
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
        <NorthDakotaGuide />
      </AuthProvider>
    </>
  )
}
