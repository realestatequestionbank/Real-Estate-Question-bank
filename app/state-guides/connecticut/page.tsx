import { Metadata } from 'next'
import { AuthProvider } from '@/contexts/auth-context'
import { ConnecticutGuide } from '@/components/state-guides/connecticut-guide'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'How to Get a Connecticut real estate license 2026 — Eligibility, Fees & Rules | Real Estate Question Bank',
  description:
    'Complete guide to getting your Connecticut real estate license. Learn about age requirements (16+), mandatory real estate exam prep, the $40 fee, required documents, and the step-by-step Real Estate process.',
  keywords: [
    'How to get a Connecticut real estate license',
    'Connecticut Real Estate requirements',
    'Connecticut real estate license age',
    'Connecticut Real Estate rules 2026',
    'Connecticut real estate exam prep requirement',
    'Connecticut Real Estate documents needed',
    'Connecticut driver manual',
    'Connecticut real estate exam passing score',
    'Connecticut GDL restrictions',
    'Connecticut Real Estate application fee',
  ],
  openGraph: {
    title: 'How to Get a Connecticut real estate license — Everything You Need to Know',
    description:
      'Complete guide to Connecticut Real Estate requirements: eligibility, mandatory driver ed, fees, required documents, the application process, and what to expect on the written test.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/connecticut',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'Connecticut Real Estate real estate exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Get a Connecticut real estate license — Real Estate Guide',
    description:
      "Everything you need to know about getting your Connecticut real estate license — driver ed requirement, fees, required documents, and the application process.",
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/connecticut',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Get a Connecticut real estate license — Complete Real Estate Guide',
  description:
    "A complete walkthrough of everything involved in getting your Connecticut real estate license — real estate exam prep, eligibility, documents, fees, and the Real Estate application process.",
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
    '@id': 'https://www.realestatequestionbank.com/state-guides/connecticut',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "How old do you have to be to get a real estate license in Connecticut?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "You must be at least 16 years old to apply for a real estate license in Connecticut.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is real estate exam prep required to get a Connecticut learner\'s permit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Applicants under 18 must complete an approved real estate exam prep program (35 hours classroom + 8 hours professional behind-the-wheel instruction) before applying for a permit.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many questions are on the Connecticut Real Estate written test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Connecticut knowledge test has 25 questions. You must answer at least 20 correctly (80%) to pass.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a Connecticut Real Estate cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The real estate license fee in Connecticut is $40.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can I take the Connecticut Real Estate written test online?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Connecticut does not offer an online or remote knowledge test. You must take the test in person at a Connecticut Real Estate office.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I fail the Connecticut Real Estate written test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must wait at least 1 day before retaking the test. You have up to 3 attempts per application. After 3 failures, you must reapply and pay the $40 fee again.',
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
      name: 'Connecticut',
      item: 'https://www.realestatequestionbank.com/state-guides/connecticut',
    },
  ],
}

export default function ConnecticutGuidePage() {
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
        <ConnecticutGuide />
      </AuthProvider>
    </>
  )
}
