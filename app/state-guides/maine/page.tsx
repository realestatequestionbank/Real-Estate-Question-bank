import { Metadata } from 'next'
import { AuthProvider } from '@/contexts/auth-context'
import { MaineGuide } from '@/components/state-guides/maine-guide'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'How to Get a Maine real estate license 2026 — Eligibility, Fees & Rules | Real Estate Question Bank',
  description:
    'Complete guide to getting your Maine real estate license. Learn about age requirements (15+), mandatory real estate exam prep, the $35 fee, the 9-month holding period, 70 supervised hours, and the BMV application process.',
  keywords: [
    'How to get a Maine real estate license',
    'Maine BMV permit requirements',
    'Maine real estate license age',
    'Maine BMV rules 2026',
    'Maine real estate exam prep requirement',
    'Maine BMV documents needed',
    'Maine driver manual',
    'Maine real estate exam passing score',
    'Maine GDL restrictions',
    'Maine BMV application fee',
  ],
  openGraph: {
    title: 'How to Get a Maine real estate license — Everything You Need to Know',
    description:
      'Complete guide to Maine BMV permit requirements: eligibility, mandatory driver ed, fees, required documents, the 9-month holding period, 70 supervised hours, and what to expect on the written test.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/maine',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'Maine BMV real estate exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Get a Maine real estate license — BMV Guide',
    description:
      "Everything you need to know about getting your Maine real estate license — driver ed, 9-month hold, 70 supervised hours, fees, and the application process.",
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/maine',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Get a Maine real estate license — Complete BMV Guide',
  description:
    "A complete walkthrough of everything involved in getting your Maine real estate license — real estate exam prep, eligibility, documents, fees, supervised hours, and the BMV application process.",
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
    '@id': 'https://www.realestatequestionbank.com/state-guides/maine',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "How old do you have to be to get a real estate license in Maine?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "You must be at least 15 years old to apply for a real estate license in Maine.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is real estate exam prep required to get a Maine learner\'s permit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Applicants under 18 must complete an approved real estate exam prep program (30 hours classroom + 10 hours professional behind-the-wheel instruction) before applying for a permit.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many questions are on the Maine BMV written test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Maine knowledge test has 30 questions. You must answer at least 24 correctly (80%) to pass.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a Maine BMV permit cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The real estate license fee in Maine is $35.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long do teens have to hold a permit before the road test in Maine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Teens must hold their learner\'s permit for at least 9 months before they are eligible to take the behind-the-wheel road test. Maine also requires 70 hours of supervised driving practice, including 10 hours at night.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I take the Maine BMV written test online?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Maine does not offer an online or remote knowledge test. You must take the test in person at a Maine BMV office.',
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
      name: 'Maine',
      item: 'https://www.realestatequestionbank.com/state-guides/maine',
    },
  ],
}

export default function MaineGuidePage() {
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
        <MaineGuide />
      </AuthProvider>
    </>
  )
}
