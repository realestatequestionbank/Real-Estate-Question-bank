import { Metadata } from 'next'
import { AuthProvider } from '@/contexts/auth-context'
import { OregonGuide } from '@/components/state-guides/oregon-guide'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Oregon Real Estate real estate exam 2026 Guide — Eligibility, Fees, Written Test & More | Real Estate Question Bank',
  description:
    'Complete guide to the Oregon Real Estate Exam. Learn about eligibility (age 15+), the $34.50 application fee, 35-question written test, passing score of 80%, required documents, and step-by-step Real Estate visit walkthrough.',
  keywords: [
    'Oregon Real Estate Exam',
    'Oregon real estate license',
    'OR Real Estate written test',
    'Oregon Real Estate Exam questions',
    'Oregon real estate exam passing score',
    'Oregon Real Estate documents needed',
    'Oregon Real Estate appointment',
    'Oregon driver manual',
    'Oregon real estate exam online',
    'Oregon GDL restrictions',
  ],
  openGraph: {
    title: 'Oregon Real Estate real estate exam Guide — Everything You Need to Know',
    description:
      'Complete guide to the Oregon Real Estate Exam: eligibility, fees, documents, the written test, what happens if you fail, and how to prepare.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/oregon',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'Oregon Real Estate real estate exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oregon Real Estate real estate exam Guide',
    description:
      'Everything you need to know about getting your Oregon learner\'s permit — eligibility, fees, the written test, and more.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/oregon',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Oregon Real Estate real estate exam Guide',
  description:
    'A complete walkthrough of everything involved in getting your Oregon learner\'s permit — eligibility, documents, fees, the written test, and how to prepare.',
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
  datePublished: '2026-02-15',
  dateModified: '2026-02-15',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.realestatequestionbank.com/state-guides/oregon',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How old do you have to be to get a learner\'s permit in Oregon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must be at least 15 years old to apply for a Provisional Instruction Permit in Oregon.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many questions are on the Oregon Real Estate written test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Oregon Real Estate knowledge test has 35 questions. You must answer at least 28 correctly (80%) to pass.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does an Oregon Real Estate cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The permit application fee is $34.50. Each knowledge test attempt costs an additional $7.',
      },
    },
    {
      '@type': 'Question',
      name: 'What documents do I need for my Oregon Real Estate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You need proof of identity (birth certificate, passport, etc.), proof of Social Security number, proof of Oregon residency, and proof of legal presence. If under 18, a parent or guardian must sign the application.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I take the Oregon Real Estate written test online?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Oregon Real Estate offers online knowledge testing. You need a desktop or laptop with a webcam. If you are under 18, you also need a proctor who is at least 21 years old.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I fail the Oregon Real Estate written test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can retake the test the same day at the Real Estate if resources allow (max 2 tests per 24-hour period). Each retest costs $7. You have 90 days from your application date to pass.',
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
      name: 'Oregon',
      item: 'https://www.realestatequestionbank.com/state-guides/oregon',
    },
  ],
}

export default function OregonGuidePage() {
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
        <OregonGuide />
      </AuthProvider>
    </>
  )
}
