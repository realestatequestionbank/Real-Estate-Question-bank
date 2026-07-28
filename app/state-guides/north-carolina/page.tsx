import { Metadata } from 'next'
import { AuthProvider } from '@/contexts/auth-context'
import { NorthCarolinaGuide } from '@/components/state-guides/north-carolina-guide'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'North Carolina Real Estate real estate exam 2026 Guide — Eligibility, Fees, Written Test & More | Real Estate Question Bank',
  description:
    'Complete guide to the North Carolina Real Estate Exam. Learn about eligibility (age 15+), the $21.50 fee, 25-question written test plus 8 road sign questions, passing score of 80%, required documents, and step-by-step Real Estate visit walkthrough.',
  keywords: [
    'North Carolina Real Estate Exam',
    'North Carolina real estate license',
    'NC Real Estate written test',
    'North Carolina Real Estate Exam questions',
    'North Carolina real estate exam passing score',
    'North Carolina Real Estate documents needed',
    'North Carolina Real Estate appointment',
    'North Carolina driver handbook',
    'NC GDL requirements',
    'North Carolina road signs test',
  ],
  openGraph: {
    title: 'North Carolina Real Estate real estate exam Guide — Everything You Need to Know',
    description:
      'Complete guide to the North Carolina Real Estate Exam: eligibility, fees, documents, the written test, what happens if you fail, and how to prepare.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/north-carolina',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'North Carolina Real Estate real estate exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'North Carolina Real Estate real estate exam Guide',
    description:
      'Everything you need to know about getting your North Carolina learner\'s permit — eligibility, fees, the written test, and more.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/north-carolina',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'North Carolina Real Estate real estate exam Guide',
  description:
    'A complete walkthrough of everything involved in getting your North Carolina learner\'s permit — eligibility, documents, fees, the written test, and how to prepare.',
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
    '@id': 'https://www.realestatequestionbank.com/state-guides/north-carolina',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How old do you have to be to get a learner\'s permit in North Carolina?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must be at least 15 years old to apply for a limited real estate license in North Carolina through the Graduated Driver Licensing program. Adults 18 and over can apply for a standard real estate license.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many questions are on the North Carolina Real Estate written test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The NC Real Estate Exam has two parts: a 25-question knowledge test on road rules (must get 20 correct, 80%) and a separate 8-question road signs test (must get 6 correct). You must pass both to get your permit.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a North Carolina Real Estate cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The fee for a North Carolina real estate license is $21.50, collected after you pass the required tests.',
      },
    },
    {
      '@type': 'Question',
      name: 'What documents do I need for my North Carolina Real Estate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You need one document proving age and identity (birth certificate, passport, etc.), proof of Social Security number, and proof of North Carolina residency. Teens under 18 also need a Driving Eligibility Certificate from their school.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I take the North Carolina Real Estate written test online?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The North Carolina Real Estate written test must be taken in person at an NCRealEstate driver license office. You cannot take it online or remotely.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I fail the North Carolina Real Estate written test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must wait at least 7 days before retaking the test. You are allowed up to 3 attempts within 90 days. If you fail 3 times or wait longer than 90 days, your application is closed and you must start over.',
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
      name: 'North Carolina',
      item: 'https://www.realestatequestionbank.com/state-guides/north-carolina',
    },
  ],
}

export default function NorthCarolinaGuidePage() {
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
        <NorthCarolinaGuide />
      </AuthProvider>
    </>
  )
}
