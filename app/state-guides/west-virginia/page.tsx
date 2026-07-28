import { Metadata } from 'next'
import { AuthProvider } from '@/contexts/auth-context'
import { WestVirginiaGuide } from '@/components/state-guides/west-virginia-guide'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'West Virginia Real Estate real estate exam 2026 Guide — Eligibility, Fees, Written Test & More | Real Estate Question Bank',
  description:
    'Complete guide to the West Virginia Real Estate Exam. Learn about eligibility (age 15+), the 25-question knowledge test, $5 permit fee, 76% passing score, 30 hours of supervised driving (10 at night), and West Virginia\'s Class D Graduated Driver Licensing program.',
  keywords: [
    'West Virginia Real Estate Exam',
    'West Virginia real estate license',
    'West Virginia instruction permit',
    'West Virginia Real Estate written test',
    'West Virginia real estate exam questions',
    'West Virginia real estate exam passing score',
    'West Virginia driver handbook',
    'West Virginia Class D license',
    'West Virginia GDL restrictions',
    'West Virginia supervised driving hours',
  ],
  openGraph: {
    title: 'West Virginia Real Estate real estate exam Guide — Everything You Need to Know',
    description:
      'Complete guide to the West Virginia instruction permit: eligibility, 25-question knowledge test, $5 fee, 76% passing score, 30 hours supervised driving, Class D GDL restrictions, and how to prepare.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/west-virginia',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'West Virginia Real Estate real estate exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'West Virginia Real Estate real estate exam Guide',
    description:
      'Everything you need to know about getting your West Virginia instruction permit — knowledge test, $5 fee, 30 hours supervised driving, Class D restrictions, and more.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/west-virginia',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'West Virginia Real Estate real estate exam Guide',
  description:
    'A complete walkthrough of everything involved in getting your West Virginia instruction permit — eligibility, the knowledge test, 30 hours of supervised driving, fees, Class D GDL restrictions, and how to prepare.',
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
    '@id': 'https://www.realestatequestionbank.com/state-guides/west-virginia',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How old do you have to be to get a permit in West Virginia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must be at least 15 years old to apply for a West Virginia Class G instruction permit.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many questions are on the West Virginia Real Estate Exam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The West Virginia Real Estate knowledge test has 25 multiple-choice questions. You need at least 19 correct answers (76%) to pass.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a West Virginia instruction permit cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The West Virginia Class G instruction permit costs just $5 — one of the lowest permit fees in the country.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is real estate exam prep required in West Virginia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. West Virginia does not require real estate exam prep to get a permit or advance to a Class D license. You can complete the full process through supervised driving and testing alone.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many hours of supervised driving are required in West Virginia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'West Virginia requires 30 hours of supervised driving, including at least 10 hours at night — fewer hours than most states.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the restrictions on a West Virginia Class D license?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'West Virginia Class D license holders cannot drive between 10 PM and 5 AM (with exceptions for work, school, or emergencies). For the first year, no more than 1 non-family passenger under 18 is allowed. All cell phone use while driving is prohibited for drivers under 18.',
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
      name: 'West Virginia',
      item: 'https://www.realestatequestionbank.com/state-guides/west-virginia',
    },
  ],
}

export default function WestVirginiaGuidePage() {
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
        <WestVirginiaGuide />
      </AuthProvider>
    </>
  )
}
