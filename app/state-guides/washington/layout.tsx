import { Metadata } from 'next'

const currentYear = new Date().getFullYear()

export const metadata: Metadata = {
  title: 'Washington Real Estate Exam Guide 2026 — Eligibility, Fees & Rules | Real Estate Question Bank',
  description:
    'Complete guide to passing the Washington Real Estate salesperson licensing exam. Learn about eligibility requirements (age 18+), fees, required forms, and the step-by-step DOL application process.',
  keywords: [
    'Washington real estate exam',
    'Washington real estate license',
    'Washington real estate exam prep',
    'Washington real estate exam questions',
    'Washington real estate licensing requirements',
    'Washington real estate salesperson exam',
    'How to get a real estate license in Washington',
    'DOL real estate licensing guide',
  ],
  openGraph: {
    title: 'Washington Real Estate Exam Guide — Everything You Need to Know',
    description:
      'Complete guide to Washington Real Estate licensing requirements: eligibility, fees, required documents, and what to expect on the exam.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/washington',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'Washington Real Estate Exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Washington Real Estate Exam Guide',
    description:
      'Everything you need to know about preparing for and passing your Washington Real Estate salesperson licensing exam.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/washington',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
