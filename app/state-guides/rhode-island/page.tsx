'use client'

import { AuthProvider } from '@/contexts/auth-context'
import { RhodeIslandGuide } from '@/components/state-guides/rhode-island-guide'
import Script from 'next/script'

const currentYear = new Date().getFullYear()

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rhode Island Real Estate Exam Guide â€” Complete DBR Guide',
  description:
    'A complete walkthrough of preparing for and passing the Rhode Island Real Estate salesperson licensing exam, including requirements, fees, and regulatory steps.',
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
  datePublished: '2026-01-30',
  dateModified: '2026-01-30',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.realestatequestionbank.com/state-guides/rhode-island',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How old do you have to be to get a real estate license in Rhode Island?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must be at least 18 years old to apply for a real estate salesperson license in Rhode Island.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many questions are on the Rhode Island real estate licensing exam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Rhode Island real estate licensing exam typically consists of a national section and a state-specific section, totaling between 100 to 150 multiple-choice questions depending on state regulatory formats.',
      },
    },
    {
      '@type': 'Question',
      name: 'What regulatory body issues real estate licenses in Rhode Island?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Real estate licenses in Rhode Island are issued by the Rhode Island Department of Business Regulation (DBR). You can visit their official portal for registration and forms.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I fail the Rhode Island real estate exam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you fail the exam, you can reschedule to retake it. Retake policies vary by state, but you can typically schedule a new test date within 24 to 48 hours. A re-examination fee applies for each attempt.',
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
      name: 'Rhode Island',
      item: 'https://www.realestatequestionbank.com/state-guides/rhode-island',
    },
  ],
}

export default function RhodeIslandGuidePage() {
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
        <RhodeIslandGuide />
      </AuthProvider>
    </>
  )
}
