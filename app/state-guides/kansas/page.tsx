import { Metadata } from 'next'
import { AuthProvider } from '@/contexts/auth-context'
import { KansasGuide } from '@/components/state-guides/kansas-guide'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Kansas Real Estate real estate exam 2026 Guide — Eligibility, Fees, Written Test & More | Real Estate Question Bank',
  description:
    'Complete guide to the Kansas Division of Vehicles real estate exam. Learn about eligibility (age 14+), the $22 application fee, 25-question written test, passing score of 80%, required documents, and step-by-step office visit walkthrough.',
  keywords: [
    'Kansas Real Estate Exam',
    'Kansas real estate license',
    'Kansas Division of Vehicles written test',
    'Kansas Real Estate Exam questions',
    'Kansas real estate exam passing score',
    'Kansas Real Estate documents needed',
    'Kansas Real Estate appointment',
    'Kansas driver handbook',
    'Kansas GDL restrictions',
    'Kansas instruction permit',
  ],
  openGraph: {
    title: 'Kansas Real Estate real estate exam Guide — Everything You Need to Know',
    description:
      'Complete guide to the Kansas Division of Vehicles real estate exam: eligibility, fees, documents, the written test, what happens if you fail, and how to prepare.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/kansas',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'Kansas Real Estate real estate exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kansas Real Estate real estate exam Guide',
    description:
      "Everything you need to know about getting your Kansas real estate license — eligibility, fees, the written test, and more.",
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/kansas',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Kansas Real Estate real estate exam Guide',
  description:
    "A complete walkthrough of everything involved in getting your Kansas instruction permit — eligibility, documents, fees, the written test, and how to prepare.",
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
    '@id': 'https://www.realestatequestionbank.com/state-guides/kansas',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "How old do you have to be to get a real estate license in Kansas?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must be at least 14 years old to apply for an instruction permit in Kansas.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many questions are on the Kansas Real Estate written test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Kansas written knowledge test has 25 multiple-choice questions. You must answer at least 20 correctly (80%) to pass.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a Kansas instruction permit cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The Kansas real estate license application fee is $22, which covers the instruction permit and the eventual license.",
      },
    },
    {
      '@type': 'Question',
      name: 'What documents do I need for my Kansas instruction permit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You need proof of identity (birth certificate or passport), proof of Social Security number, and two proofs of Kansas residency.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I fail the Kansas written test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must wait one day before retaking the test. After three failures, you must reapply and pay the fee again.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do I need to hold my Kansas instruction permit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "You must hold your instruction permit for at least 1 year and be at least 16 years old before you can apply for a restricted license.",
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
      name: 'Kansas',
      item: 'https://www.realestatequestionbank.com/state-guides/kansas',
    },
  ],
}

export default function KansasGuidePage() {
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
        <KansasGuide />
      </AuthProvider>
    </>
  )
}
