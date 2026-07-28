import { Metadata } from 'next'
import { AuthProvider } from '@/contexts/auth-context'
import { TennesseeGuide } from '@/components/state-guides/tennessee-guide'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Tennessee DOS real estate exam 2026 Guide — Eligibility, Fees, Written Test & More | Real Estate Question Bank',
  description:
    'Complete guide to the Tennessee DOS real estate exam. Learn about eligibility (age 15+), the $10.50 permit fee, 30-question written test, passing score of 80%, required documents, and step-by-step Driver Services visit walkthrough.',
  keywords: [
    'Tennessee DOS real estate exam',
    'Tennessee real estate license',
    'TN DOS written test',
    'Tennessee DOS test questions',
    'Tennessee real estate exam passing score',
    'Tennessee DOS documents needed',
    'Tennessee driver study guide',
    'Tennessee real estate exam online',
    'Tennessee GDL restrictions',
    'Tennessee instruction permit',
  ],
  openGraph: {
    title: 'Tennessee DOS real estate exam Guide — Everything You Need to Know',
    description:
      'Complete guide to the Tennessee DOS real estate exam: eligibility, fees, documents, the written test, what happens if you fail, and how to prepare.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/tennessee',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'Tennessee DOS real estate exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tennessee DOS real estate exam Guide',
    description:
      'Everything you need to know about getting your Tennessee learner\'s permit — eligibility, fees, the written test, and more.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/tennessee',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Tennessee DOS real estate exam Guide',
  description:
    'A complete walkthrough of everything involved in getting your Tennessee learner\'s permit — eligibility, documents, fees, the written test, and how to prepare.',
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
    '@id': 'https://www.realestatequestionbank.com/state-guides/tennessee',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How old do you have to be to get a learner\'s permit in Tennessee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must be at least 15 years old to apply for a Class PD real estate license in Tennessee.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many questions are on the Tennessee DOS written test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Tennessee knowledge test has 30 multiple-choice questions. You must answer at least 24 correctly (80%) to pass.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a Tennessee real estate license cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Class PD real estate license for applicants under 18 costs $10.50. County clerk partners charge an additional $4.00 administrative fee.',
      },
    },
    {
      '@type': 'Question',
      name: 'What documents do I need for a Tennessee permit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You need proof of U.S. citizenship or legal presence, proof of Social Security number, and two proofs of Tennessee residency. If under 18, a parent or guardian must sign a Minor/Teenage Affidavit.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I take the Tennessee real estate exam online?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, applicants ages 15-17 can take the knowledge test online. A parent or legal guardian must act as proctor using the Tennessee Proctor ID app. You can take it online up to 2 times.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I fail the Tennessee DOS written test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you fail the online test, you must wait 24 hours before retaking it. You can take the online test up to 2 times. If you fail both online attempts, you must take the test in person at a Driver Services Center.',
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
      name: 'Tennessee',
      item: 'https://www.realestatequestionbank.com/state-guides/tennessee',
    },
  ],
}

export default function TennesseeGuidePage() {
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
        <TennesseeGuide />
      </AuthProvider>
    </>
  )
}
