import { Metadata } from 'next'
import { AuthProvider } from '@/contexts/auth-context'
import { ArkansasGuide } from '@/components/state-guides/arkansas-guide'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Arkansas DFA real estate exam 2026 Guide — Eligibility, Fees, Written Test & More | Real Estate Question Bank',
  description:
    'Complete guide to the Arkansas DFA real estate exam. Learn about eligibility (age 14+), the $40 permit fee, 25-question written test, passing score of 80%, required documents, and step-by-step DFA visit walkthrough.',
  keywords: [
    'Arkansas DFA real estate exam',
    'Arkansas real estate license',
    'AR DFA written test',
    'Arkansas DFA test questions',
    'Arkansas real estate exam passing score',
    'Arkansas DFA documents needed',
    'Arkansas driver study guide',
    'Arkansas real estate exam online',
    'Arkansas GDL restrictions',
    'Arkansas instruction permit',
  ],
  openGraph: {
    title: 'Arkansas DFA real estate exam Guide — Everything You Need to Know',
    description:
      'Complete guide to the Arkansas DFA real estate exam: eligibility, fees, documents, the written test, what happens if you fail, and how to prepare.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/arkansas',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'Arkansas DFA real estate exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arkansas DFA real estate exam Guide',
    description:
      'Everything you need to know about getting your Arkansas learner\'s permit — eligibility, fees, the written test, and more.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/arkansas',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Arkansas DFA real estate exam Guide',
  description:
    'A complete walkthrough of everything involved in getting your Arkansas learner\'s permit — eligibility, documents, fees, the written test, and how to prepare.',
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
  datePublished: '2026-02-14',
  dateModified: '2026-02-14',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.realestatequestionbank.com/state-guides/arkansas',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How old do you have to be to get a learner\'s permit in Arkansas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must be at least 14 years old to apply for an instruction permit in Arkansas.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many questions are on the Arkansas DFA written test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Arkansas written test has 25 multiple-choice questions. You must answer at least 20 correctly (80%) to pass.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does an Arkansas instruction permit cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Arkansas instruction permit costs $40. If you pay by credit card, there is an additional $2 surcharge. Cash and checks are also accepted.',
      },
    },
    {
      '@type': 'Question',
      name: 'What documents do I need for an Arkansas permit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You need proof of identity (birth certificate or passport), proof of Social Security number, and two proofs of Arkansas residency. If under 18, a parent or guardian must sign the application.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I take the Arkansas DFA written test online?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The Arkansas written real estate exam must be taken in person at a DFA Revenue Office. Online testing is not available.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I fail the Arkansas DFA written test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you fail, you must wait 5 calendar days before retaking the test. There is a $5 retest fee per attempt. You get up to 3 attempts within 90 days of your application date.',
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
      name: 'Arkansas',
      item: 'https://www.realestatequestionbank.com/state-guides/arkansas',
    },
  ],
}

export default function ArkansasGuidePage() {
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
        <ArkansasGuide />
      </AuthProvider>
    </>
  )
}
