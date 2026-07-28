import { Metadata } from 'next'
import { AuthProvider } from '@/contexts/auth-context'
import { NewMexicoGuide } from '@/components/state-guides/new-mexico-guide'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'New Mexico MVD real estate exam 2026 Guide — Eligibility, Fees, Written Test & More | Real Estate Question Bank',
  description:
    'Complete guide to the New Mexico MVD instruction real estate exam. Learn about eligibility (age 15+), the $18 application fee, 25-question written test, passing score of 72%, required documents, and step-by-step MVD visit walkthrough.',
  keywords: [
    'New Mexico MVD real estate exam',
    'New Mexico instruction permit',
    'New Mexico real estate license',
    'NM MVD written test',
    'New Mexico real estate exam questions',
    'New Mexico real estate exam passing score',
    'New Mexico MVD documents needed',
    'New Mexico MVD appointment',
    'New Mexico driver manual',
    'New Mexico GDL restrictions',
  ],
  openGraph: {
    title: 'New Mexico MVD real estate exam Guide — Everything You Need to Know',
    description:
      'Complete guide to the New Mexico MVD instruction permit: eligibility, fees, documents, the written test, what happens if you fail, and how to prepare.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/new-mexico',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'New Mexico MVD real estate exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'New Mexico MVD real estate exam Guide',
    description:
      'Everything you need to know about getting your New Mexico instruction permit — eligibility, fees, the written test, and more.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/new-mexico',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'New Mexico MVD real estate exam Guide',
  description:
    'A complete walkthrough of everything involved in getting your New Mexico instruction permit — eligibility, documents, fees, the written test, and how to prepare.',
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
    '@id': 'https://www.realestatequestionbank.com/state-guides/new-mexico',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How old do you have to be to get a learner\'s permit in New Mexico?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must be at least 15 years old to apply for an instruction permit in New Mexico.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many questions are on the New Mexico MVD written test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The New Mexico knowledge test has 25 questions. You must answer at least 18 correctly (72%) to pass. The same test applies to both teens and adults.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a New Mexico instruction permit cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The instruction permit application fee is $18, which is one of the lower permit fees in the country.',
      },
    },
    {
      '@type': 'Question',
      name: 'What documents do I need for my New Mexico instruction permit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You need proof of identity (birth certificate, passport, etc.), proof of Social Security number or ITIN, and two proofs of New Mexico residency.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I take the New Mexico MVD written test online?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. New Mexico requires all knowledge tests to be taken in person at an MVD office. The myMVD portal allows you to pre-apply online, but the test itself must be done in person.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I fail the New Mexico MVD written test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must wait one day before retaking the test. There is no additional fee for retakes under the same application.',
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
      name: 'New Mexico',
      item: 'https://www.realestatequestionbank.com/state-guides/new-mexico',
    },
  ],
}

export default function NewMexicoGuidePage() {
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
        <NewMexicoGuide />
      </AuthProvider>
    </>
  )
}
