import { Metadata } from 'next'
import { AuthProvider } from '@/contexts/auth-context'
import { NewYorkGuide } from '@/components/state-guides/new-york-guide'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'New York Real Estate real estate exam 2026 Guide — Eligibility, Fees, Written Test & More | Real Estate Question Bank',
  description:
    'Complete guide to the New York Real Estate Exam. Learn about eligibility (age 16+), the $80–$92.50 application fee, 20-question written test, passing score of 70%, required documents (6-point ID system), and step-by-step Real Estate visit walkthrough.',
  keywords: [
    'New York Real Estate Exam',
    'New York real estate license',
    'NY Real Estate written test',
    'New York Real Estate Exam questions',
    'New York real estate exam passing score',
    'New York Real Estate documents needed',
    'New York Real Estate appointment',
    'New York driver manual',
    'New York real estate exam online',
    'New York GDL restrictions',
  ],
  openGraph: {
    title: 'New York Real Estate real estate exam Guide — Everything You Need to Know',
    description:
      'Complete guide to the New York Real Estate Exam: eligibility, fees, documents, the written test, junior vs senior license, NYC restrictions, and how to prepare.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/new-york',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'New York Real Estate real estate exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'New York Real Estate real estate exam Guide',
    description:
      'Everything you need to know about getting your New York real estate license — eligibility, fees, the written test, NYC restrictions, and more.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/new-york',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'New York Real Estate real estate exam Guide',
  description:
    'A complete walkthrough of everything involved in getting your New York real estate license — eligibility, documents, fees, the written test, junior vs senior license, and how to prepare.',
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
    '@id': 'https://www.realestatequestionbank.com/state-guides/new-york',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How old do you have to be to get a real estate license in New York?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must be at least 16 years old to apply for a real estate license in New York State.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many questions are on the New York Real Estate written test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The New York written test has 20 multiple-choice questions. You must answer at least 14 correctly (70%) and get at least 2 of the 4 road sign questions correct.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a New York Real Estate cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The application fee ranges from $80 to $92.50 depending on your age. This single fee covers your real estate license through your eventual driver license for approximately 5 years.',
      },
    },
    {
      '@type': 'Question',
      name: 'What documents do I need for my New York Real Estate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'New York uses a 6-point ID system. You must present documents totaling 6 or more points proving your name, plus proof of date of birth, Social Security number, and residency.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I take the New York Real Estate Exam online?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. New York offers an online real estate exam from home with a webcam. Students can also take the test at participating high schools through the OKTA program. You must still visit a Real Estate office afterward to complete your application.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can junior license holders drive in New York City?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Junior license (Class DJ) holders cannot drive in NYC under any circumstances. To drive in NYC as a teen, you must obtain a senior license (Class D) at age 17 by completing a state-approved real estate exam prep course, or wait until age 18.',
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
      name: 'New York',
      item: 'https://www.realestatequestionbank.com/state-guides/new-york',
    },
  ],
}

export default function NewYorkGuidePage() {
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
        <NewYorkGuide />
      </AuthProvider>
    </>
  )
}
