import { Metadata } from 'next'
import { AuthProvider } from '@/contexts/auth-context'
import { HawaiiGuide } from '@/components/state-guides/hawaii-guide'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Hawaii real estate exam 2026 Guide — Eligibility, Fees, Written Test & More | Real Estate Question Bank',
  description:
    'Complete guide to the Hawaii real estate exam. Learn about eligibility (age 15.5+), county-based licensing, the ~$9 fee, 30-question written test, 80% passing score, and Hawaii\'s Graduated Driver Licensing program.',
  keywords: [
    'Hawaii real estate exam',
    'Hawaii real estate license',
    'Hawaii Real Estate written test',
    'Hawaii real estate exam questions',
    'Hawaii real estate exam passing score',
    'Hawaii instruction permit',
    'Hawaii driver manual',
    'Hawaii GDL restrictions',
    'Honolulu driver license',
    'Hawaii county licensing',
  ],
  openGraph: {
    title: 'Hawaii real estate exam Guide — Everything You Need to Know',
    description:
      'Complete guide to the Hawaii instruction permit: eligibility, county offices, fees, the written test, GDL requirements, and how to prepare.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/hawaii',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'Hawaii real estate exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hawaii real estate exam Guide',
    description:
      'Everything you need to know about getting your Hawaii instruction permit — county offices, fees, the written test, and more.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/hawaii',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Hawaii real estate exam Guide',
  description:
    'A complete walkthrough of everything involved in getting your Hawaii instruction permit — eligibility, county offices, fees, the written test, and how to prepare.',
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
  datePublished: '2026-02-21',
  dateModified: '2026-02-21',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.realestatequestionbank.com/state-guides/hawaii',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How old do you have to be to get a permit in Hawaii?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must be at least 15 years and 6 months old (15.5) to apply for an instruction permit in Hawaii.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many questions are on the Hawaii real estate exam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Hawaii knowledge test has 30 multiple-choice questions. You need at least 24 correct answers (80%) to pass.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a Hawaii instruction permit cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Hawaii instruction permit costs approximately $9, though fees vary by county. Contact your specific county licensing office for exact amounts.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where do I get a driver\'s license in Hawaii?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hawaii driver licensing is handled at the county level, not by a single state Real Estate. You apply at your county\'s licensing office — Honolulu (Oahu), Maui County, Hawaii County (Big Island), or Kauai County.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I fail the Hawaii real estate exam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you fail, you must wait 30 days before retaking the test. There is a small retest fee (approximately $2). There is no limit on the number of total attempts.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the GDL restrictions for Hawaii teen drivers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hawaii provisional license holders cannot drive between 11 PM and 5 AM, and cannot carry passengers under 18 for the first 6 months (except immediate family). All electronic device use while driving is prohibited.',
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
      name: 'Hawaii',
      item: 'https://www.realestatequestionbank.com/state-guides/hawaii',
    },
  ],
}

export default function HawaiiGuidePage() {
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
        <HawaiiGuide />
      </AuthProvider>
    </>
  )
}
