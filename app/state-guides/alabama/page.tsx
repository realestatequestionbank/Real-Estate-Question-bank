import { Metadata } from 'next'
import { AuthProvider } from '@/contexts/auth-context'
import { AlabamaGuide } from '@/components/state-guides/alabama-guide'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'How to Get an Alabama Instruction Permit 2026 — Eligibility, Fees & Rules | Real Estate Question Bank',
  description:
    'Complete guide to getting your Alabama instruction permit. Learn about age requirements (15+), the $36.25 fee, required documents, the 3-stage GDL program, and the step-by-step ALEA application process.',
  keywords: [
    'How to get an Alabama instruction permit',
    'Alabama ALEA permit requirements',
    'Alabama real estate license age',
    'Alabama Real Estate rules 2026',
    'Alabama GDL program',
    'Alabama driver license documents',
    'Alabama driver license study guide',
    'Alabama real estate exam passing score',
    'Alabama GDL restrictions',
    'Alabama ALEA application fee',
  ],
  openGraph: {
    title: 'How to Get an Alabama Instruction Permit — Everything You Need to Know',
    description:
      'Complete guide to Alabama ALEA permit requirements: eligibility, the 3-stage GDL program, fees, required documents, and what to expect on the written test.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/alabama',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'Alabama Real Estate real estate exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Get an Alabama Instruction Permit — Real Estate Guide',
    description:
      "Everything you need to know about getting your Alabama instruction permit — eligibility, GDL stages, fees, required documents, and the application process.",
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/alabama',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Get an Alabama Instruction Permit — Complete ALEA Guide',
  description:
    "A complete walkthrough of everything involved in getting your Alabama instruction permit — the 3-stage GDL program, eligibility, documents, fees, and the ALEA application process.",
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
    '@id': 'https://www.realestatequestionbank.com/state-guides/alabama',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "How old do you have to be to get an instruction permit in Alabama?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "You must be at least 15 years old to apply for an instruction permit in Alabama.",
      },
    },
    {
      '@type': 'Question',
      name: 'How many questions are on the Alabama written knowledge test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Alabama knowledge test has 30 questions. You must answer at least 24 correctly (80%) to pass.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does an Alabama instruction permit cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The instruction permit fee in Alabama is $36.25.',
      },
    },
    {
      '@type': 'Question',
      name: "How does Alabama's GDL program work?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Alabama has a 3-stage GDL: Stage 1 is the instruction permit (age 15+, hold 6 months, supervised driving only). Stage 2 is a restricted license (age 16+, GDL curfew and passenger limits for 6 months). Stage 3 is a full unrestricted license (age 17+, after 6 months with no violations).",
      },
    },
    {
      '@type': 'Question',
      name: 'How many supervised driving hours are required in Alabama?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Alabama requires at least 30 hours of supervised driving practice, including 10 hours at night, before teens can take the road test.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I take the Alabama written test online?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Alabama does not offer an online or remote knowledge test. You must take the test in person at an ALEA driver license office.',
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
      name: 'Alabama',
      item: 'https://www.realestatequestionbank.com/state-guides/alabama',
    },
  ],
}

export default function AlabamaGuidePage() {
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
        <AlabamaGuide />
      </AuthProvider>
    </>
  )
}
