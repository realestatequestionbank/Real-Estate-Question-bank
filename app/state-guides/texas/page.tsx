import { Metadata } from 'next'
import { AuthProvider } from '@/contexts/auth-context'
import { TexasGuide } from '@/components/state-guides/texas-guide'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Texas DPS real estate exam 2026 Guide — Eligibility, Fees, Written Test & More | Real Estate Question Bank',
  description:
    'Complete guide to the Texas DPS real estate exam. Learn about eligibility (age 15+), the $16 learner license fee, 30-question written test, passing score of 70%, required documents, real estate exam prep, and step-by-step DPS visit walkthrough.',
  keywords: [
    'Texas DPS real estate exam',
    'Texas learner license',
    'TX DPS written test',
    'Texas DPS test questions',
    'Texas real estate exam passing score',
    'Texas DPS documents needed',
    'Texas DPS appointment',
    'Texas driver handbook',
    'Texas real estate exam online',
    'Texas GDL restrictions',
  ],
  openGraph: {
    title: 'Texas DPS real estate exam Guide — Everything You Need to Know',
    description:
      'Complete guide to the Texas DPS real estate exam: eligibility, fees, documents, real estate exam prep, the written test, what happens if you fail, and how to prepare.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/texas',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'Texas DPS real estate exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Texas DPS real estate exam Guide',
    description:
      'Everything you need to know about getting your Texas learner license — eligibility, fees, real estate exam prep, the written test, and more.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/texas',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Texas DPS real estate exam Guide',
  description:
    'A complete walkthrough of everything involved in getting your Texas learner license — eligibility, documents, fees, real estate exam prep, the written test, and how to prepare.',
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
  datePublished: '2026-01-31',
  dateModified: '2026-01-31',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.realestatequestionbank.com/state-guides/texas',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How old do you have to be to get a learner license in Texas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must be at least 15 years old to apply for a learner license in Texas. You must also be enrolled in or have completed a real estate exam prep course.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many questions are on the Texas DPS written test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Texas written knowledge test has 30 multiple-choice questions. You must answer at least 21 correctly (70%) to pass.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a Texas learner license cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The learner license fee is $16. This covers the permit application, testing, and card. The permit is valid until your 18th birthday.',
      },
    },
    {
      '@type': 'Question',
      name: 'What documents do I need for my Texas learner license?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You need proof of identity (birth certificate or passport), Social Security number, two proofs of Texas residency, a Verification of Enrollment and Attendance (VOE) form, and your real estate exam prep certificate.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need an appointment at the Texas DPS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. All Texas DPS driver license offices operate by appointment only. You can schedule appointments online up to 6 months in advance.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I fail the Texas DPS written test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must wait at least 24 hours before retaking the test. You get up to 3 attempts. After 3 failures, you must repurchase the exam.',
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
      name: 'Texas',
      item: 'https://www.realestatequestionbank.com/state-guides/texas',
    },
  ],
}

export default function TexasGuidePage() {
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
        <TexasGuide />
      </AuthProvider>
    </>
  )
}
