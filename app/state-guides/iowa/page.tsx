import { Metadata } from 'next'
import { AuthProvider } from '@/contexts/auth-context'
import { IowaGuide } from '@/components/state-guides/iowa-guide'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Iowa DOT real estate exam 2026 Guide — Eligibility, Fees, Written Test & More | Real Estate Question Bank',
  description:
    'Complete guide to the Iowa DOT real estate exam. Learn about eligibility (age 14+), the $6 fee, 35-question written test, 80% passing score, and Iowa\'s Graduated Driver Licensing program.',
  keywords: [
    'Iowa DOT real estate exam',
    'Iowa real estate license',
    'Iowa instruction permit',
    'IA DOT written test',
    'Iowa real estate exam questions',
    'Iowa real estate exam passing score',
    'Iowa DOT documents needed',
    'Iowa driver manual',
    'Iowa intermediate license',
    'Iowa GDL restrictions',
  ],
  openGraph: {
    title: 'Iowa DOT real estate exam Guide — Everything You Need to Know',
    description:
      'Complete guide to the Iowa DOT real estate exam: eligibility, fees, documents, the written test, intermediate license requirements, and how to prepare.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/iowa',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'Iowa DOT real estate exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Iowa DOT real estate exam Guide',
    description:
      'Everything you need to know about getting your Iowa instruction permit — eligibility, fees, the written test, and more.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/iowa',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Iowa DOT real estate exam Guide',
  description:
    'A complete walkthrough of everything involved in getting your Iowa instruction permit — eligibility, documents, fees, the written test, and how to prepare.',
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
    '@id': 'https://www.realestatequestionbank.com/state-guides/iowa',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How old do you have to be to get an instruction permit in Iowa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must be at least 14 years old to apply for an instruction permit in Iowa.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many questions are on the Iowa DOT written test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Iowa knowledge test has 35 multiple-choice questions. You need at least 28 correct answers (80%) to pass.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does an Iowa instruction permit cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Iowa instruction permit costs just $6 — one of the lowest fees in the nation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I take the Iowa real estate exam online or at home?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Iowa offers a "Skip the Trip" online option, and parents/guardians can also proctor the test at home using a special form.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do I have to hold my Iowa instruction permit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must hold your instruction permit for at least 12 months before you can apply for an intermediate license.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I fail the Iowa written test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can retake the test as soon as the next business day. There is no limit to the number of attempts.',
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
      name: 'Iowa',
      item: 'https://www.realestatequestionbank.com/state-guides/iowa',
    },
  ],
}

export default function IowaGuidePage() {
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
        <IowaGuide />
      </AuthProvider>
    </>
  )
}
