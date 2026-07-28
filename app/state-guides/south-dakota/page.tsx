import { Metadata } from 'next'
import { AuthProvider } from '@/contexts/auth-context'
import { SouthDakotaGuide } from '@/components/state-guides/south-dakota-guide'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'South Dakota Real Estate real estate exam 2026 Guide — Eligibility, Fees, Written Test & More | Real Estate Question Bank',
  description:
    'Complete guide to the South Dakota Real Estate Exam. Learn about eligibility (age 14+, one of the youngest in the US), the 25-question knowledge test, $5 permit fee, 80% passing score, 50 hours of supervised driving (10 at night), and South Dakota\'s Minor\'s Restricted License program.',
  keywords: [
    'South Dakota Real Estate Exam',
    'South Dakota real estate license',
    'South Dakota instruction permit',
    'South Dakota Real Estate written test',
    'South Dakota real estate exam questions',
    'South Dakota real estate exam passing score',
    'South Dakota driver manual',
    'South Dakota minor restricted license',
    'South Dakota GDL restrictions',
    'South Dakota supervised driving hours',
  ],
  openGraph: {
    title: 'South Dakota Real Estate real estate exam Guide — Everything You Need to Know',
    description:
      'Complete guide to the South Dakota instruction permit: eligibility at 14 (one of youngest in US), 25-question knowledge test, $5 fee, 80% passing score, 50 hours supervised driving, Minor\'s Restricted License, and how to prepare.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/south-dakota',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'South Dakota Real Estate real estate exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'South Dakota Real Estate real estate exam Guide',
    description:
      'Everything you need to know about getting your South Dakota instruction permit — age 14+, $5 fee, 50 hours supervised driving, Minor\'s Restricted License, and more.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/south-dakota',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'South Dakota Real Estate real estate exam Guide',
  description:
    'A complete walkthrough of everything involved in getting your South Dakota instruction permit — eligibility at 14 years old, the knowledge test, $5 fee, 80% passing score, 50 hours of supervised driving, the Minor\'s Restricted License program, and how to prepare.',
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
    '@id': 'https://www.realestatequestionbank.com/state-guides/south-dakota',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How old do you have to be to get a permit in South Dakota?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must be at least 14 years old to apply for a South Dakota instruction permit — one of the youngest minimum ages in the United States.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many questions are on the South Dakota Real Estate Exam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The South Dakota Real Estate knowledge test has 25 multiple-choice questions. You need at least 20 correct answers (80%) to pass.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a South Dakota instruction permit cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The South Dakota instruction permit costs $5.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is real estate exam prep required in South Dakota?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. South Dakota does not require real estate exam prep to get an instruction permit. However, completing an approved in-person real estate exam prep program allows teens to advance to the Minor\'s Restricted License at age 14.5 instead of waiting until 15.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many hours of supervised driving are required in South Dakota?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'South Dakota requires 50 hours of supervised driving, including at least 10 hours at night, before advancing to a Minor\'s Restricted License.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the restrictions on a South Dakota Minor\'s Restricted License?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'South Dakota Minor\'s Restricted License holders cannot drive between 10 PM and 6 AM (with exceptions). For the first 6 months, no non-family passengers under 18 are allowed. After 6 months, a maximum of 1 non-family passenger under 18. No handheld phone use for drivers under 18.',
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
      name: 'South Dakota',
      item: 'https://www.realestatequestionbank.com/state-guides/south-dakota',
    },
  ],
}

export default function SouthDakotaGuidePage() {
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
        <SouthDakotaGuide />
      </AuthProvider>
    </>
  )
}
