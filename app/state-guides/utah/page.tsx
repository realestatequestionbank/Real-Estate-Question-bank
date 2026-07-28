import { Metadata } from 'next'
import { AuthProvider } from '@/contexts/auth-context'
import { UtahGuide } from '@/components/state-guides/utah-guide'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Utah DLD real estate exam 2026 Guide — Eligibility, Fees, Written Test & More | Real Estate Question Bank',
  description:
    'Complete guide to the Utah DLD instruction real estate exam. Learn about eligibility (age 15+), the $44 application fee, 50-question written test, passing score of 80%, required documents, and step-by-step DLD visit walkthrough.',
  keywords: [
    'Utah DLD real estate exam',
    'Utah real estate license',
    'Utah instruction permit',
    'Utah DLD written test',
    'Utah real estate exam questions',
    'Utah real estate exam passing score',
    'Utah DLD documents needed',
    'Utah DLD appointment',
    'Utah driver handbook',
    'Utah GDL restrictions',
  ],
  openGraph: {
    title: 'Utah DLD real estate exam Guide — Everything You Need to Know',
    description:
      'Complete guide to the Utah DLD instruction permit: eligibility, fees, documents, the written test, what happens if you fail, and how to prepare.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/utah',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'Utah DLD real estate exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Utah DLD real estate exam Guide',
    description:
      'Everything you need to know about getting your Utah instruction permit — eligibility, fees, the written test, and more.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/utah',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Utah DLD real estate exam Guide',
  description:
    'A complete walkthrough of everything involved in getting your Utah instruction permit — eligibility, documents, fees, the written test, and how to prepare.',
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
    '@id': 'https://www.realestatequestionbank.com/state-guides/utah',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How old do you have to be to get a learner\'s permit in Utah?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must be at least 15 years old to apply for an instruction permit in Utah.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many questions are on the Utah DLD written test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Utah knowledge test has 50 questions. You must answer at least 40 correctly (80%) to pass. The same test applies to both teens and adults.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a Utah instruction permit cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The driver license application fee is $44, which covers your instruction permit, up to three written test attempts, and your behind-the-wheel driving test.',
      },
    },
    {
      '@type': 'Question',
      name: 'What documents do I need for my Utah instruction permit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You need proof of identity (birth certificate, passport, etc.), proof of Social Security number, and two proofs of Utah residency.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I take the Utah DLD written test online?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The Utah DLD requires all knowledge tests to be taken in person at a DLD office. There is no remote online testing option.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I fail the Utah DLD written test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must wait 6 days before retaking the test. Your $44 fee covers up to 3 attempts. After 3 failures, you must submit a new application and pay again.',
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
      name: 'Utah',
      item: 'https://www.realestatequestionbank.com/state-guides/utah',
    },
  ],
}

export default function UtahGuidePage() {
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
        <UtahGuide />
      </AuthProvider>
    </>
  )
}
