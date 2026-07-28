import { Metadata } from 'next'
import { AuthProvider } from '@/contexts/auth-context'
import { MinnesotaGuide } from '@/components/state-guides/minnesota-guide'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Minnesota DVS real estate exam 2026 Guide — Eligibility, Fees, Written Test & More | Real Estate Question Bank',
  description:
    'Complete guide to the Minnesota DVS real estate exam. Learn about eligibility (age 15+), the 40-question knowledge test, $14.25 fee, 80% passing score, 50 hours of supervised driving (15 at night), and Minnesota\'s Graduated Driver Licensing program.',
  keywords: [
    'Minnesota DVS real estate exam',
    'Minnesota real estate license',
    'Minnesota DVS written test',
    'Minnesota real estate exam questions',
    'Minnesota real estate exam passing score',
    'Minnesota instruction permit',
    'Minnesota driver manual',
    'Minnesota GDL restrictions',
    'Minnesota supervised driving hours',
    'Minnesota provisional license',
  ],
  openGraph: {
    title: 'Minnesota DVS real estate exam Guide — Everything You Need to Know',
    description:
      'Complete guide to the Minnesota instruction permit: eligibility, knowledge test, fees, 50 hours supervised driving (15 at night), GDL requirements, and how to prepare.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/minnesota',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'Minnesota DVS real estate exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Minnesota DVS real estate exam Guide',
    description:
      'Everything you need to know about getting your Minnesota instruction permit — knowledge test, 50 hours supervised driving, fees, and more.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/minnesota',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Minnesota DVS real estate exam Guide',
  description:
    'A complete walkthrough of everything involved in getting your Minnesota instruction permit — eligibility, the knowledge test, 50 hours of supervised driving, fees, documents, GDL restrictions, and how to prepare.',
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
    '@id': 'https://www.realestatequestionbank.com/state-guides/minnesota',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How old do you have to be to get a permit in Minnesota?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must be at least 15 years old to apply for a Minnesota instruction permit.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many questions are on the Minnesota DVS real estate exam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Minnesota DVS knowledge test has 40 multiple-choice questions. You need at least 32 correct answers (80%) to pass.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a Minnesota instruction permit cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Minnesota instruction permit costs $14.25. If you fail and need to retest, there is a $4.25 retest fee.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many hours of supervised driving are required in Minnesota?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Minnesota requires 50 hours of supervised driving, of which at least 15 hours must be at night. This is one of the highest nighttime driving requirements in the country.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Minnesota accept online real estate exam prep?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Minnesota requires in-person real estate exam prep from a state-licensed provider. Online-only real estate exam prep programs are not accepted for meeting the Minnesota driver ed requirement.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the GDL restrictions for Minnesota teen drivers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Minnesota provisional license holders cannot drive between midnight and 5 AM during the first year. Passenger restrictions apply — no more than one non-family passenger under 20 during the first 6 months. All handheld electronic device use while driving is prohibited.',
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
      name: 'Minnesota',
      item: 'https://www.realestatequestionbank.com/state-guides/minnesota',
    },
  ],
}

export default function MinnesotaGuidePage() {
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
        <MinnesotaGuide />
      </AuthProvider>
    </>
  )
}
