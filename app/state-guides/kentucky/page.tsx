import { Metadata } from 'next'
import { AuthProvider } from '@/contexts/auth-context'
import { KentuckyGuide } from '@/components/state-guides/kentucky-guide'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Kentucky real estate exam 2026 Guide — Eligibility, Fees, Written Test & More | Real Estate Question Bank',
  description:
    'Complete guide to the Kentucky real estate exam. Learn about eligibility (age 15+), the $15-18 permit fee, 40-question written test, passing score of 80%, required documents, and Kentucky\'s Graduated Driver Licensing program.',
  keywords: [
    'Kentucky real estate exam',
    'Kentucky real estate license',
    'KY real estate exam',
    'Kentucky written test',
    'Kentucky real estate exam passing score',
    'KYTC real estate exam',
    'Kentucky State Police driver test',
    'Kentucky driver manual',
    'Kentucky GDL program',
    'Kentucky instruction permit',
  ],
  openGraph: {
    title: 'Kentucky real estate exam Guide — Everything You Need to Know',
    description:
      'Complete guide to the Kentucky real estate exam: eligibility, fees, documents, the written test, what happens if you fail, and the GDL program.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/kentucky',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'Kentucky real estate exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kentucky real estate exam Guide',
    description:
      'Everything you need to know about getting your Kentucky learner\'s permit — eligibility, fees, the written test, and more.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/kentucky',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Kentucky real estate exam Guide',
  description:
    'A complete walkthrough of everything involved in getting your Kentucky learner\'s permit — eligibility, documents, fees, the written test, and how to prepare.',
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
  datePublished: '2026-02-06',
  dateModified: '2026-02-06',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.realestatequestionbank.com/state-guides/kentucky',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How old do you have to be to get a learner\'s permit in Kentucky?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must be at least 15 years old to apply for an instruction permit in Kentucky. The minimum age was lowered from 16 in March 2025.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many questions are on the Kentucky real estate exam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Kentucky written test has 40 questions: 30 on rules of the road and 10 on road signs. You must score at least 80% (32 correct) to pass, with minimum scores of 24/30 on rules and 8/10 on signs.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a Kentucky permit cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Kentucky instruction permit costs $15 for a standard permit or $18 for a REAL ID compliant permit. There may also be a $12 testing fee.',
      },
    },
    {
      '@type': 'Question',
      name: 'What documents do I need for a Kentucky permit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You need proof of identity (birth certificate or passport), proof of Social Security number, and proof of Kentucky residency. If under 18, you also need parental consent and a School Compliance Verification form.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I take the Kentucky real estate exam online?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The Kentucky written real estate exam must be taken in person at a Kentucky State Police testing location. Online testing is not available.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I fail the Kentucky real estate exam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you fail, you can retake the test the next business day. There is no limit on attempts, but you may need to pay a retest fee.',
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
      name: 'Kentucky',
      item: 'https://www.realestatequestionbank.com/state-guides/kentucky',
    },
  ],
}

export default function KentuckyGuidePage() {
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
        <KentuckyGuide />
      </AuthProvider>
    </>
  )
}
