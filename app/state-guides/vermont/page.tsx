import { Metadata } from 'next'
import { AuthProvider } from '@/contexts/auth-context'
import { VermontGuide } from '@/components/state-guides/vermont-guide'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Vermont Real Estate real estate exam 2026 Guide — Eligibility, Fees, Written Test & More | Real Estate Question Bank',
  description:
    'Complete guide to the Vermont Real Estate Exam. Learn about eligibility (age 15+), the 20-question knowledge test, $40 permit fee, 80% passing score, mandatory in-person real estate exam prep, 40 hours of supervised driving, and Vermont\'s two-level GDL program.',
  keywords: [
    'Vermont Real Estate Exam',
    'Vermont real estate license',
    'Vermont instruction permit',
    'Vermont Real Estate written test',
    'Vermont real estate exam questions',
    'Vermont real estate exam passing score',
    'Vermont driver manual',
    'Vermont Level 2 license',
    'Vermont GDL restrictions',
    'Vermont supervised driving hours',
  ],
  openGraph: {
    title: 'Vermont Real Estate real estate exam Guide — Everything You Need to Know',
    description:
      'Complete guide to the Vermont learner\'s permit: eligibility, 20-question knowledge test, $40 fee, 80% passing score, required real estate exam prep, 40 hours supervised driving, Level 2 GDL restrictions, and how to prepare.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/vermont',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'Vermont Real Estate real estate exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vermont Real Estate real estate exam Guide',
    description:
      'Everything you need to know about getting your Vermont learner\'s permit — 20-question test, $40 fee, required driver ed, 12-month hold, Level 2 GDL restrictions, and more.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/vermont',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Vermont Real Estate real estate exam Guide',
  description:
    'A complete walkthrough of everything involved in getting your Vermont learner\'s permit — eligibility, the 20-question knowledge test, $40 fee, 80% passing score, 12-month holding period, mandatory in-person real estate exam prep, 40 hours supervised driving, Level 2 GDL restrictions, and how to prepare.',
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
  datePublished: '2026-02-24',
  dateModified: '2026-02-24',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.realestatequestionbank.com/state-guides/vermont',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How old do you have to be to get a permit in Vermont?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must be at least 15 years old to apply for a Vermont learner\'s permit (Level 1).',
      },
    },
    {
      '@type': 'Question',
      name: 'How many questions are on the Vermont Real Estate Exam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Vermont Real Estate knowledge test has 20 multiple-choice questions — fewer than most states. You need at least 16 correct answers (80%) to pass.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a Vermont learner\'s permit cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Vermont learner\'s permit (Level 1) costs $40.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is real estate exam prep required in Vermont?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Vermont requires all applicants under 18 to complete an approved in-person real estate exam prep program — 30 hours of classroom instruction and 8 hours of behind-the-wheel training — before advancing to a Level 2 license. Online real estate exam prep is not accepted.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do you have to hold a learner\'s permit in Vermont?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vermont requires teens to hold their learner\'s permit for at least 12 months and until they are at least 16 years old before applying for a Level 2 license.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the restrictions on a Vermont Level 2 license?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vermont Level 2 license holders cannot drive between midnight and 5 AM (with exceptions). No more than 1 non-family passenger under 25 is allowed. All cell phone use while driving is prohibited for drivers under 18.',
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
      name: 'Vermont',
      item: 'https://www.realestatequestionbank.com/state-guides/vermont',
    },
  ],
}

export default function VermontGuidePage() {
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
        <VermontGuide />
      </AuthProvider>
    </>
  )
}
