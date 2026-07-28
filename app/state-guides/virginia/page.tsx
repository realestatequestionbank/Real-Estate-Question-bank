import { Metadata } from 'next'
import { AuthProvider } from '@/contexts/auth-context'
import { VirginiaGuide } from '@/components/state-guides/virginia-guide'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Virginia Real Estate real estate exam 2026 Guide — Eligibility, Fees, Written Test & More | Real Estate Question Bank',
  description:
    'Complete guide to the Virginia Real Estate Exam. Learn about eligibility (age 15.5+), the $3 permit fee, 35-question knowledge exam, two-part test format, required documents, and step-by-step Real Estate visit walkthrough.',
  keywords: [
    'Virginia Real Estate Exam',
    'Virginia real estate license',
    'VA Real Estate written test',
    'Virginia Real Estate Exam questions',
    'Virginia real estate exam passing score',
    'Virginia Real Estate documents needed',
    'Virginia Real Estate appointment',
    'Virginia driver manual',
    'Virginia real estate exam road signs',
    'Virginia GDL restrictions',
  ],
  openGraph: {
    title: 'Virginia Real Estate real estate exam Guide — Everything You Need to Know',
    description:
      'Complete guide to the Virginia Real Estate Exam: eligibility, fees, documents, the two-part written test, what happens if you fail, and how to prepare.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/virginia',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'Virginia Real Estate real estate exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Virginia Real Estate real estate exam Guide',
    description:
      'Everything you need to know about getting your Virginia learner\'s permit — eligibility, fees, the written test, and more.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/virginia',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Virginia Real Estate real estate exam Guide',
  description:
    'A complete walkthrough of everything involved in getting your Virginia learner\'s permit — eligibility, documents, fees, the two-part knowledge exam, and how to prepare.',
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
  datePublished: '2026-02-10',
  dateModified: '2026-02-10',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.realestatequestionbank.com/state-guides/virginia',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How old do you have to be to get a learner\'s permit in Virginia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must be at least 15 years and 6 months old to apply for a learner\'s permit in Virginia.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many questions are on the Virginia Real Estate knowledge exam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Virginia knowledge exam has two parts: Part 1 has 10 road sign questions (must get all 10 correct), and Part 2 has 25 general knowledge questions (must get at least 20 correct). That\'s 35 questions total.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a Virginia Real Estate learner\'s permit cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The learner\'s permit fee is $3, plus the yearly cost of a driver\'s license (approximately $4/year).',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you need a perfect score on the Virginia road signs test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Part 1 of the Virginia knowledge exam tests 10 road signs, and you must identify all 10 correctly (100%) before you can move on to Part 2.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I fail the Virginia Real Estate knowledge exam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you\'re under 18, you must wait 15 days before retaking the test. Adults (18+) can retake it the next day. After 3 failures, you must complete the classroom portion of a Virginia-approved driver training program before retesting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I take the Virginia Real Estate knowledge exam online?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The Virginia Real Estate knowledge exam must be taken in person at a Real Estate customer service center. However, free practice exams are available online on the Virginia Real Estate website.',
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
      name: 'Virginia',
      item: 'https://www.realestatequestionbank.com/state-guides/virginia',
    },
  ],
}

export default function VirginiaGuidePage() {
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
        <VirginiaGuide />
      </AuthProvider>
    </>
  )
}
