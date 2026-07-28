import { Metadata } from 'next'
import { AuthProvider } from '@/contexts/auth-context'
import { SouthCarolinaGuide } from '@/components/state-guides/south-carolina-guide'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'South Carolina Real Estate real estate exam 2026 Guide — Eligibility, Fees, Written Test & More | Real Estate Question Bank',
  description:
    'Complete guide to the South Carolina Real Estate Exam. Learn about eligibility (age 15+), the 30-question knowledge test, $2.50 permit fee, 80% passing score, South Carolina\'s unique seasonal nighttime curfew, and the SCRealEstate\'s Graduated Driver Licensing program.',
  keywords: [
    'South Carolina Real Estate Exam',
    'South Carolina real estate license',
    'South Carolina beginner permit',
    'South Carolina Real Estate written test',
    'South Carolina real estate exam questions',
    'South Carolina real estate exam passing score',
    'South Carolina driver manual',
    'South Carolina conditional license',
    'South Carolina GDL restrictions',
    'South Carolina SCRealEstate',
  ],
  openGraph: {
    title: 'South Carolina Real Estate real estate exam Guide — Everything You Need to Know',
    description:
      'Complete guide to the South Carolina beginner\'s permit: eligibility, 30-question knowledge test, $2.50 fee, 80% passing score, 180-day holding period, seasonal curfew, and how to prepare.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/south-carolina',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'South Carolina Real Estate real estate exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'South Carolina Real Estate real estate exam Guide',
    description:
      'Everything you need to know about getting your South Carolina beginner\'s permit — $2.50 fee, 30-question test, seasonal curfew, 180-day hold, and more.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/south-carolina',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'South Carolina Real Estate real estate exam Guide',
  description:
    'A complete walkthrough of everything involved in getting your South Carolina beginner\'s permit — eligibility, the knowledge test, $2.50 fee, 80% passing score, 180-day holding period, seasonal nighttime curfew, SCRealEstate GDL program, and how to prepare.',
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
    '@id': 'https://www.realestatequestionbank.com/state-guides/south-carolina',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How old do you have to be to get a permit in South Carolina?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must be at least 15 years old to apply for a South Carolina beginner\'s permit.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many questions are on the South Carolina Real Estate Exam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The South Carolina Real Estate knowledge test has 30 multiple-choice questions. You need at least 24 correct answers (80%) to pass.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a South Carolina beginner\'s permit cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The South Carolina beginner\'s permit costs just $2.50 — one of the lowest permit fees in the country.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is real estate exam prep required in South Carolina?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. South Carolina does not require real estate exam prep to get a beginner\'s permit or advance through the GDL program. Driver education is optional.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do you have to hold a beginner\'s permit in South Carolina?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'South Carolina requires teens to hold their beginner\'s permit for at least 180 days (6 months) before applying for a conditional license.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the curfew on a South Carolina conditional license?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'South Carolina\'s curfew changes by season: no driving from 6 PM to 6 AM from October through March, and no driving from 8 PM to 6 AM from April through September.',
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
      name: 'South Carolina',
      item: 'https://www.realestatequestionbank.com/state-guides/south-carolina',
    },
  ],
}

export default function SouthCarolinaGuidePage() {
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
        <SouthCarolinaGuide />
      </AuthProvider>
    </>
  )
}
