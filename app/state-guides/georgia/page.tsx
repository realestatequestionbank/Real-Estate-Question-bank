import { Metadata } from 'next'
import { AuthProvider } from '@/contexts/auth-context'
import { GeorgiaGuide } from '@/components/state-guides/georgia-guide'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Georgia DDS real estate exam 2026 Guide — Eligibility, Fees, Written Test & More | Real Estate Question Bank',
  description:
    "Complete guide to the Georgia DDS real estate exam. Learn about eligibility (age 15+), Joshua's Law real estate exam prep, the $10 fee, 40-question written test, 75% passing score, and Georgia's Graduated Driver Licensing program.",
  keywords: [
    'Georgia DDS real estate exam',
    'Georgia real estate license',
    'Georgia DDS written test',
    "Joshua's Law Georgia",
    'Georgia real estate exam questions',
    'Georgia real estate exam passing score',
    'Georgia DDS documents needed',
    'Georgia driver manual',
    'Georgia instruction permit',
    'Georgia GDL restrictions',
  ],
  openGraph: {
    title: 'Georgia DDS real estate exam Guide — Everything You Need to Know',
    description:
      "Complete guide to the Georgia DDS real estate exam: eligibility, Joshua's Law, fees, documents, the written test, GDL requirements, and how to prepare.",
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/georgia',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'Georgia DDS real estate exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Georgia DDS real estate exam Guide',
    description:
      "Everything you need to know about getting your Georgia instruction permit — eligibility, Joshua's Law, fees, the written test, and more.",
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/georgia',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Georgia DDS real estate exam Guide',
  description:
    "A complete walkthrough of everything involved in getting your Georgia instruction permit — eligibility, Joshua's Law, fees, the written test, GDL restrictions, and how to prepare.",
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
    '@id': 'https://www.realestatequestionbank.com/state-guides/georgia',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How old do you have to be to get a permit in Georgia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must be at least 15 years old to apply for a Class CP Instruction Permit in Georgia.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many questions are on the Georgia DDS written test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Georgia DDS knowledge test has 40 multiple-choice questions. You need at least 30 correct answers (75%) to pass.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a Georgia instruction permit cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The Georgia instruction permit costs $10. There is no additional fee for retaking the knowledge test if you fail.",
      },
    },
    {
      '@type': 'Question',
      name: "What is Joshua's Law in Georgia?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Joshua's Law requires all Georgia teen drivers under 18 to complete a state-approved real estate exam prep program before receiving a Class D license. It includes 30 hours of classroom instruction and 6 hours of behind-the-wheel training with a certified instructor.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need an appointment at the Georgia DDS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Georgia DDS requires an appointment for instruction permit applications. You can book online through the DDS appointment portal at online.dds.georgia.gov.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the GDL restrictions for Georgia teen drivers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Georgia Class D (provisional) license holders cannot drive between midnight and 5 AM, may carry no more than 1 non-family passenger under 21 for the first 6 months, and face a complete ban on cell phone use while driving.',
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
      name: 'Georgia',
      item: 'https://www.realestatequestionbank.com/state-guides/georgia',
    },
  ],
}

export default function GeorgiaGuidePage() {
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
        <GeorgiaGuide />
      </AuthProvider>
    </>
  )
}
