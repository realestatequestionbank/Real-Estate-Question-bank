import { Metadata } from 'next'
import { AuthProvider } from '@/contexts/auth-context'
import { AlaskaGuide } from '@/components/state-guides/alaska-guide'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'How to Get an Alaska real estate license 2026 — Eligibility, Fees & Rules | Real Estate Question Bank',
  description:
    'Complete guide to getting your Alaska instruction permit. Learn about age requirements (14+), the $15 fee, required documents, and the step-by-step Real Estate application process.',
  keywords: [
    'How to get an Alaska real estate license',
    'Alaska Real Estate requirements',
    'Alaska instruction permit age',
    'Alaska Real Estate rules 2026',
    'Alaska Real Estate documents needed',
    'Alaska driver manual',
    'Alaska real estate exam passing score',
    'Alaska GDL restrictions',
    'Alaska Real Estate application fee',
    'Alaska Division of Motor Vehicles',
  ],
  openGraph: {
    title: 'How to Get an Alaska Instruction Permit — Everything You Need to Know',
    description:
      'Complete guide to Alaska Real Estate requirements: eligibility, fees, required documents, the application process, and what to expect on the written test.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/alaska',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'Alaska Real Estate real estate exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Get an Alaska Instruction Permit — Real Estate Guide',
    description:
      "Everything you need to know about getting your Alaska instruction permit — eligibility, fees, required documents, and the application process.",
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/alaska',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Get an Alaska Instruction Permit — Complete Real Estate Guide',
  description:
    "A complete walkthrough of everything involved in getting your Alaska instruction permit — eligibility, documents, fees, and the Real Estate application process.",
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
  datePublished: '2026-02-22',
  dateModified: '2026-02-22',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.realestatequestionbank.com/state-guides/alaska',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "How old do you have to be to get a real estate license in Alaska?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "You must be at least 14 years old to apply for an instruction permit in Alaska — one of the youngest minimum ages in the country.",
      },
    },
    {
      '@type': 'Question',
      name: 'How many questions are on the Alaska Real Estate written test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Alaska knowledge test has 20 questions. You must answer at least 16 correctly (80%) to pass.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does an Alaska Real Estate cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The instruction permit fee in Alaska is $15.',
      },
    },
    {
      '@type': 'Question',
      name: 'What documents do I need for my Alaska Real Estate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You need proof of identity and date of birth (e.g., birth certificate or passport), your Social Security number, and proof of Alaska residency. Minors also need parental consent.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I take the Alaska Real Estate written test online?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Alaska does not offer an online or remote knowledge test. You must take the test in person at an Alaska Real Estate office.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I fail the Alaska Real Estate written test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must wait at least 1 day before retaking the test. You have up to 3 attempts per application. After 3 failures, you must reapply and pay the $15 fee again.',
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
      name: 'Alaska',
      item: 'https://www.realestatequestionbank.com/state-guides/alaska',
    },
  ],
}

export default function AlaskaGuidePage() {
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
        <AlaskaGuide />
      </AuthProvider>
    </>
  )
}
