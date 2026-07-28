import { Metadata } from 'next'
import { AuthProvider } from '@/contexts/auth-context'
import { LouisianaGuide } from '@/components/state-guides/louisiana-guide'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Louisiana OMV real estate exam 2026 Guide — Eligibility, Fees, Written Test & More | Real Estate Question Bank',
  description:
    'Complete guide to the Louisiana OMV real estate exam. Learn about eligibility (age 15+), the $18 fee, 40-question written test, 80% passing score, required real estate exam prep, and Louisiana\'s Graduated Driver Licensing program.',
  keywords: [
    'Louisiana real estate exam',
    'Louisiana real estate license',
    'Louisiana OMV written test',
    'Louisiana real estate exam questions',
    'Louisiana real estate exam passing score',
    'Louisiana OMV documents needed',
    'Louisiana driver guide',
    'Louisiana instruction permit',
    'Louisiana GDL restrictions',
    'Louisiana real estate exam prep',
  ],
  openGraph: {
    title: 'Louisiana OMV real estate exam Guide — Everything You Need to Know',
    description:
      'Complete guide to the Louisiana OMV real estate exam: eligibility, fees, documents, the written test, GDL requirements, and how to prepare.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/louisiana',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'Louisiana OMV real estate exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Louisiana OMV real estate exam Guide',
    description:
      'Everything you need to know about getting your Louisiana instruction permit — eligibility, fees, the written test, and more.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/louisiana',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Louisiana OMV real estate exam Guide',
  description:
    'A complete walkthrough of everything involved in getting your Louisiana instruction permit — eligibility, documents, fees, the written test, and how to prepare.',
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
  datePublished: '2026-02-21',
  dateModified: '2026-02-21',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.realestatequestionbank.com/state-guides/louisiana',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How old do you have to be to get a permit in Louisiana?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must be at least 15 years old to apply for an instruction permit in Louisiana.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many questions are on the Louisiana OMV written test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Louisiana knowledge test has 40 multiple-choice questions. You need at least 32 correct answers (80%) to pass.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a Louisiana instruction permit cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Louisiana instruction permit costs $18. There is a $3 retest fee for each failed attempt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is real estate exam prep required in Louisiana?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, real estate exam prep is required for all applicants under 17 in Louisiana. It includes 38 hours of classroom instruction and 8 hours of behind-the-wheel training.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I fail the Louisiana real estate exam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you fail, you must wait 7 days and pay a $3 retest fee before you can try again. There is no limit on the total number of attempts.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the GDL restrictions for Louisiana teen drivers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Louisiana intermediate license holders under 17 cannot drive between 11 PM and 5 AM, and are limited to 1 non-family passenger under 21 for the first 6 months. All cell phone use is prohibited for drivers under 18.',
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
      name: 'Louisiana',
      item: 'https://www.realestatequestionbank.com/state-guides/louisiana',
    },
  ],
}

export default function LouisianaGuidePage() {
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
        <LouisianaGuide />
      </AuthProvider>
    </>
  )
}
