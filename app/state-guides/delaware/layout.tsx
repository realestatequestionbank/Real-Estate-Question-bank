import { Metadata } from 'next'

const currentYear = new Date().getFullYear()

export const metadata: Metadata = {
  title: 'Delaware Real Estate Exam Guide 2026 — Eligibility, Fees & Rules | Real Estate Question Bank',
  description:
    'Complete guide to passing the Delaware Real Estate salesperson licensing exam. Learn about eligibility requirements (age 18+), fees, required forms, and the step-by-step DREC application process.',
  keywords: [
    'Delaware real estate exam',
    'Delaware real estate license',
    'Delaware real estate exam prep',
    'Delaware real estate exam questions',
    'Delaware real estate licensing requirements',
    'Delaware real estate salesperson exam',
    'How to get a real estate license in Delaware',
    'DREC real estate licensing guide',
  ],
  openGraph: {
    title: 'Delaware Real Estate Exam Guide — Everything You Need to Know',
    description:
      'Complete guide to Delaware Real Estate licensing requirements: eligibility, fees, required documents, and what to expect on the exam.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/delaware',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'Delaware Real Estate Exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Delaware Real Estate Exam Guide',
    description:
      'Everything you need to know about preparing for and passing your Delaware Real Estate salesperson licensing exam.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/delaware',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
