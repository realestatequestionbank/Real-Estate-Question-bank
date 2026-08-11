import { Metadata } from 'next'

const currentYear = new Date().getFullYear()

export const metadata: Metadata = {
  title: 'South Dakota Real Estate Exam Guide 2026 — Eligibility, Fees & Rules | Real Estate Question Bank',
  description:
    'Complete guide to passing the South Dakota Real Estate salesperson licensing exam. Learn about eligibility requirements (age 18+), fees, required forms, and the step-by-step SDREC application process.',
  keywords: [
    'South Dakota real estate exam',
    'South Dakota real estate license',
    'South Dakota real estate exam prep',
    'South Dakota real estate exam questions',
    'South Dakota real estate licensing requirements',
    'South Dakota real estate salesperson exam',
    'How to get a real estate license in South Dakota',
    'SDREC real estate licensing guide',
  ],
  openGraph: {
    title: 'South Dakota Real Estate Exam Guide — Everything You Need to Know',
    description:
      'Complete guide to South Dakota Real Estate licensing requirements: eligibility, fees, required documents, and what to expect on the exam.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/south-dakota',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'South Dakota Real Estate Exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'South Dakota Real Estate Exam Guide',
    description:
      'Everything you need to know about preparing for and passing your South Dakota Real Estate salesperson licensing exam.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/south-dakota',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
