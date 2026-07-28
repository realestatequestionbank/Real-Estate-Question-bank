import { Metadata } from 'next'
import { AuthProvider } from '@/contexts/auth-context'
import { FloridaGuide } from '@/components/state-guides/florida-guide'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Florida DHSMV real estate exam 2026 Guide — Eligibility, Fees, Written Test & More | Real Estate Question Bank',
  description:
    'Complete guide to the Florida DHSMV learner\'s license. Learn about eligibility (age 15+), the $48 fee, 50-question written test, 80% passing score, TLSAE course, and Florida\'s Graduated Driver Licensing program.',
  keywords: [
    'Florida DHSMV real estate exam',
    "Florida learner\'s license",
    'Florida instruction permit',
    'FLHSMV knowledge test',
    'Florida real estate exam questions',
    'Florida real estate exam passing score',
    'Florida DHSMV documents needed',
    'Florida driver handbook',
    'Florida intermediate license',
    'Florida GDL restrictions',
    'TLSAE course Florida',
    'Florida drug and alcohol course',
  ],
  openGraph: {
    title: 'Florida DHSMV real estate exam Guide — Everything You Need to Know',
    description:
      'Complete guide to the Florida learner\'s license: eligibility, fees, documents, the written test, GDL requirements, and how to prepare.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/florida',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'Florida DHSMV real estate exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Florida DHSMV real estate exam Guide',
    description:
      'Everything you need to know about getting your Florida learner\'s license — eligibility, fees, the written test, and more.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/florida',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Florida DHSMV real estate exam Guide',
  description:
    'A complete walkthrough of everything involved in getting your Florida learner\'s license — eligibility, documents, fees, the written test, TLSAE course, and the Graduated Driver Licensing program.',
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
  datePublished: '2026-04-07',
  dateModified: '2026-04-07',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.realestatequestionbank.com/state-guides/florida',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How old do you have to be to get a learner\'s license in Florida?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must be at least 15 years old to apply for a Florida learner\'s license. A parent or legal guardian must co-sign your application if you are under 18.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many questions are on the Florida written real estate exam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Florida knowledge test has 50 multiple-choice questions. You need at least 40 correct answers (80%) to pass.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a Florida learner\'s license cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Florida learner\'s license (Class E Knowledge Test) costs $48. If you fail and need to retest, there is a $10 retest fee.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the TLSAE course and is it required in Florida?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Traffic Law and Substance Abuse Education (TLSAE) course — also called the "Drug and Alcohol" course — is a 4-hour program required for all first-time Florida driver license applicants. It can be completed online and must be finished before you get your learner\'s license.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do I have to hold my Florida learner\'s license?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must hold your Florida learner\'s license for at least 12 months before you can apply for a restricted (intermediate) license.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I fail the Florida real estate exam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must wait at least 1 day before retaking the test. After 3 failed attempts, you must submit a new application. There is a $10 retest fee for each attempt.',
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
      name: 'Florida',
      item: 'https://www.realestatequestionbank.com/state-guides/florida',
    },
  ],
}

export default function FloridaGuidePage() {
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
        <FloridaGuide />
      </AuthProvider>
    </>
  )
}
