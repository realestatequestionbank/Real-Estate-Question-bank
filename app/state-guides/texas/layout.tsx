import { Metadata } from 'next'

const currentYear = new Date().getFullYear()

export const metadata: Metadata = {
  title: 'Texas Real Estate Exam Guide 2026 — Eligibility, Fees & Rules | Real Estate Question Bank',
  description:
    'Complete guide to passing the Texas Real Estate salesperson licensing exam. Learn about eligibility requirements (age 18+), fees, required forms, and the step-by-step TREC application process.',
  keywords: [
    'Texas real estate exam',
    'Texas real estate license',
    'Texas real estate exam prep',
    'Texas real estate exam questions',
    'Texas real estate licensing requirements',
    'Texas real estate salesperson exam',
    'How to get a real estate license in Texas',
    'TREC real estate licensing guide',
  ],
  openGraph: {
    title: 'Texas Real Estate Exam Guide — Everything You Need to Know',
    description:
      'Complete guide to Texas Real Estate licensing requirements: eligibility, fees, required documents, and what to expect on the exam.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/texas',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'Texas Real Estate Exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Texas Real Estate Exam Guide',
    description:
      'Everything you need to know about preparing for and passing your Texas Real Estate salesperson licensing exam.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/texas',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
