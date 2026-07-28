import { Metadata } from 'next'
import { AuthProvider } from '@/contexts/auth-context'
import { MarylandGuide } from '@/components/state-guides/maryland-guide'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Maryland MVA real estate exam 2026 Guide — Eligibility, Fees, Written Test & More | Real Estate Question Bank',
  description:
    'Complete guide to the Maryland MVA real estate exam. Learn about eligibility (age 15.75+), the knowledge test with 25 questions and 88% passing score, required documents, and step-by-step MVA visit walkthrough.',
  keywords: [
    'Maryland MVA real estate exam',
    'Maryland real estate license',
    'MD MVA written test',
    'Maryland MVA test questions',
    'Maryland real estate exam passing score',
    'Maryland MVA documents needed',
    'Maryland MVA appointment',
    'Maryland driver manual',
    'Maryland real estate exam online',
    'Maryland GDL restrictions',
  ],
  openGraph: {
    title: 'Maryland MVA real estate exam Guide — Everything You Need to Know',
    description:
      'Complete guide to the Maryland MVA real estate exam: eligibility, fees, documents, the written test, what happens if you fail, and how to prepare.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/maryland',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'Maryland MVA real estate exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maryland MVA real estate exam Guide',
    description:
      'Everything you need to know about getting your Maryland learner\'s permit — eligibility, fees, the written test, and more.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/maryland',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Maryland MVA real estate exam Guide',
  description:
    'A complete walkthrough of everything involved in getting your Maryland learner\'s permit — eligibility, documents, fees, the written test, and how to prepare.',
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
  datePublished: '2026-02-02',
  dateModified: '2026-02-02',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.realestatequestionbank.com/state-guides/maryland',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How old do you have to be to get a learner\'s permit in Maryland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must be at least 15 years and 9 months old to apply for a learner\'s permit in Maryland.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many questions are on the Maryland MVA written test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Maryland knowledge test has 25 multiple-choice questions on laws and regulations (need 22 correct, 88%) plus a separate 10-question road signs test (must get all 10 correct).',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a Maryland MVA permit cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There is no fee for the knowledge test itself. The Maryland driver license costs $9 per year, and you pay for the years until your license expires.',
      },
    },
    {
      '@type': 'Question',
      name: 'What documents do I need for my Maryland MVA permit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You need proof of identity and age (birth certificate, passport), proof of Maryland residency, proof of Social Security number, and parental consent if under 18.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I fail the Maryland MVA written test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can retake the test the next business day after your first failure. After two or more failures, you must wait 7 days before retaking the test.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do I have to hold my Maryland learner\'s permit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must hold your learner\'s permit for at least 9 months without any moving violations or alcohol/drug-related offenses before you can take the driving test.',
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
      name: 'Maryland',
      item: 'https://www.realestatequestionbank.com/state-guides/maryland',
    },
  ],
}

export default function MarylandGuidePage() {
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
        <MarylandGuide />
      </AuthProvider>
    </>
  )
}
