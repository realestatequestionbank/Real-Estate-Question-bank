import { Metadata } from 'next'
import { AuthProvider } from '@/contexts/auth-context'
import { IndianaGuide } from '@/components/state-guides/indiana-guide'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Indiana BMV real estate exam 2026 Guide — Eligibility, Fees, Written Test & More | Real Estate Question Bank',
  description:
    'Complete guide to the Indiana BMV real estate exam. Learn about eligibility (age 15+), the two-part knowledge test (34 questions + road signs), the $14 fee, 79% passing score, and Indiana\'s Graduated Driver Licensing program.',
  keywords: [
    'Indiana BMV real estate exam',
    'Indiana real estate license',
    'Indiana BMV written test',
    'Indiana real estate exam questions',
    'Indiana real estate exam passing score',
    'Indiana road signs test',
    'Indiana instruction permit',
    'Indiana driver manual',
    'Indiana GDL restrictions',
    'Indiana probationary license',
  ],
  openGraph: {
    title: 'Indiana BMV real estate exam Guide — Everything You Need to Know',
    description:
      'Complete guide to the Indiana instruction permit: eligibility, the two-part knowledge test, road signs test, fees, documents, GDL requirements, and how to prepare.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/indiana',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'Indiana BMV real estate exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Indiana BMV real estate exam Guide',
    description:
      'Everything you need to know about getting your Indiana instruction permit — the two-part knowledge test, road signs test, fees, and more.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/indiana',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Indiana BMV real estate exam Guide',
  description:
    'A complete walkthrough of everything involved in getting your Indiana instruction permit — eligibility, the two-part knowledge and road signs tests, fees, documents, GDL restrictions, and how to prepare.',
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
    '@id': 'https://www.realestatequestionbank.com/state-guides/indiana',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How old do you have to be to get a permit in Indiana?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must be at least 15 years old to apply for an Indiana Learner\'s Permit.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many questions are on the Indiana BMV real estate exam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Indiana BMV knowledge test has 34 multiple-choice questions. You need at least 27 correct answers (approximately 79%) to pass. There is also a separate road signs test where you must correctly identify at least 14 of 16 signs.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does an Indiana instruction permit cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Indiana learner\'s permit costs $14.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a separate road signs test in Indiana?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Indiana has a separate road signs identification test in addition to the standard knowledge test. You must correctly identify at least 14 out of 16 road signs shown to you. This is separate from the 34-question written test.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do I need to hold an Indiana learner\'s permit before getting my license?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Indiana requires you to hold your learner\'s permit for at least 180 days (6 months) before you can apply for a probationary driver\'s license. During this time, you must complete at least 50 hours of supervised driving, including 10 hours at night.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the GDL restrictions for Indiana teen drivers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Indiana probationary license holders face tiered nighttime restrictions: no driving after 10 PM during the first year, then midnight during year two. Passenger restrictions apply — no more than one non-family passenger under 25 during the first year. All handheld electronic device use is prohibited.',
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
      name: 'Indiana',
      item: 'https://www.realestatequestionbank.com/state-guides/indiana',
    },
  ],
}

export default function IndianaGuidePage() {
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
        <IndianaGuide />
      </AuthProvider>
    </>
  )
}
