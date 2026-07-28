import { Metadata } from 'next'
import { AuthProvider } from '@/contexts/auth-context'
import { MissouriGuide } from '@/components/state-guides/missouri-guide'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Missouri DOR real estate exam 2026 Guide — Eligibility, Fees, Written Test & More | Real Estate Question Bank',
  description:
    'Complete guide to the Missouri DOR real estate exam. Learn about eligibility (age 15+), the 25-question knowledge test plus separate road signs test, $3.50 fee, 80% passing score, 40 hours of supervised driving (10 at night), and Missouri\'s Graduated Driver Licensing program.',
  keywords: [
    'Missouri DOR real estate exam',
    'Missouri real estate license',
    'Missouri instruction permit',
    'Missouri DOR written test',
    'Missouri real estate exam questions',
    'Missouri real estate exam passing score',
    'Missouri driver guide',
    'Missouri GDL restrictions',
    'Missouri supervised driving hours',
    'Missouri intermediate license',
  ],
  openGraph: {
    title: 'Missouri DOR real estate exam Guide — Everything You Need to Know',
    description:
      'Complete guide to the Missouri instruction permit: eligibility, knowledge test, road signs test, fees, 40 hours supervised driving, GDL requirements, and how to prepare.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/missouri',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'Missouri DOR real estate exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Missouri DOR real estate exam Guide',
    description:
      'Everything you need to know about getting your Missouri instruction permit — knowledge test, road signs test, 40 hours supervised driving, fees, and more.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/missouri',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Missouri DOR real estate exam Guide',
  description:
    'A complete walkthrough of everything involved in getting your Missouri instruction permit — eligibility, the knowledge test, road signs test, 40 hours of supervised driving, fees, documents, GDL restrictions, and how to prepare.',
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
  datePublished: '2026-02-23',
  dateModified: '2026-02-23',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.realestatequestionbank.com/state-guides/missouri',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How old do you have to be to get a permit in Missouri?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must be at least 15 years old to apply for a Missouri instruction permit.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many questions are on the Missouri DOR real estate exam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Missouri DOR knowledge test has 25 multiple-choice questions. You need at least 20 correct answers (80%) to pass. There is also a separate road signs test with 10 signs, requiring 8 correct (80%).',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a Missouri instruction permit cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Missouri instruction permit costs $3.50. If you fail and need to retest, there is a $3.50 retest fee per attempt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Missouri have a separate road signs test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Missouri requires a separate road signs identification test in addition to the 25-question knowledge exam. You must correctly identify at least 8 of 10 signs (80%) to pass this portion.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many hours of supervised driving are required in Missouri?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Missouri requires 40 hours of supervised driving, of which at least 10 hours must be at night, before a teen can apply for an intermediate license.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the GDL restrictions for Missouri teen drivers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Missouri intermediate license holders cannot drive between midnight and 5 AM (with exceptions for work, school, or emergencies). For the first 6 months, no more than 1 non-family passenger under 19 is allowed. No handheld wireless device use is permitted for drivers under 21.',
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
      name: 'Missouri',
      item: 'https://www.realestatequestionbank.com/state-guides/missouri',
    },
  ],
}

export default function MissouriGuidePage() {
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
        <MissouriGuide />
      </AuthProvider>
    </>
  )
}
