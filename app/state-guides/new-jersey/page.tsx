import { Metadata } from 'next'
import { AuthProvider } from '@/contexts/auth-context'
import { NewJerseyGuide } from '@/components/state-guides/new-jersey-guide'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'New Jersey MVC real estate exam 2026 Guide — Eligibility, Fees, Written Test & More | Real Estate Question Bank',
  description:
    'Complete guide to the New Jersey MVC learner\'s real estate exam. Learn about eligibility (age 16+), the $24 permit fee, 50-question knowledge test, passing score of 80%, 6-point ID requirements, and New Jersey\'s three-phase GDL system.',
  keywords: [
    'New Jersey MVC real estate exam',
    'New Jersey real estate license',
    'NJ MVC knowledge test',
    'New Jersey real estate exam questions',
    'New Jersey real estate exam passing score',
    'New Jersey MVC documents needed',
    'New Jersey 6 point ID',
    'New Jersey driver manual',
    'New Jersey GDL restrictions',
    'NJ probationary license',
  ],
  openGraph: {
    title: 'New Jersey MVC real estate exam Guide — Everything You Need to Know',
    description:
      'Complete guide to the New Jersey MVC learner\'s permit: eligibility, fees, 6-point ID, the knowledge test, GDL phases, and how to prepare.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/new-jersey',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'New Jersey MVC real estate exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'New Jersey MVC real estate exam Guide',
    description:
      'Everything you need to know about getting your New Jersey learner\'s permit — eligibility, fees, the knowledge test, and more.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/new-jersey',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'New Jersey MVC real estate exam Guide',
  description:
    'A complete walkthrough of everything involved in getting your New Jersey learner\'s permit — eligibility, 6-point ID, fees, the knowledge test, GDL phases, and how to prepare.',
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
    '@id': 'https://www.realestatequestionbank.com/state-guides/new-jersey',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How old do you have to be to get a learner\'s permit in New Jersey?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must be at least 16 years old to apply for a learner\'s permit in New Jersey.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many questions are on the New Jersey MVC knowledge test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The New Jersey knowledge test has 50 questions. You must answer at least 40 correctly (80%) to pass. The same test applies to both teens and adults.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a New Jersey learner\'s permit cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The learner\'s permit fee is $24.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the 6-point ID system for New Jersey?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'New Jersey requires applicants to present documents totaling at least 6 points of identification. A U.S. passport is worth 4 points and a birth certificate is worth 4 points. Supporting documents like bank cards and utility bills contribute 1–2 points each. You also need separate proof of your Social Security number and New Jersey address.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I drive at night with a New Jersey learner\'s permit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. New Jersey\'s 11pm–5am nighttime curfew applies starting from the permit phase — even when a supervising adult is in the car. This is different from most states where the curfew only begins after getting a provisional or probationary license.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do I have to hold my New Jersey learner\'s permit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must hold the permit for at least 12 months before applying for a probationary license. If you complete an approved real estate exam prep program and are at least 17 years old, the holding period is reduced to 6 months.',
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
      name: 'New Jersey',
      item: 'https://www.realestatequestionbank.com/state-guides/new-jersey',
    },
  ],
}

export default function NewJerseyGuidePage() {
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
        <NewJerseyGuide />
      </AuthProvider>
    </>
  )
}
