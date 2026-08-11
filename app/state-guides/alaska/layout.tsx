import { Metadata } from 'next'

const currentYear = new Date().getFullYear()

export const metadata: Metadata = {
  title: 'Alaska Real Estate Exam Guide 2026 — Eligibility, Fees & Rules | Real Estate Question Bank',
  description:
    'Complete guide to passing the Alaska Real Estate salesperson licensing exam. Learn about eligibility requirements (age 18+), fees, required forms, and the step-by-step AREC application process.',
  keywords: [
    'Alaska real estate exam',
    'Alaska real estate license',
    'Alaska real estate exam prep',
    'Alaska real estate exam questions',
    'Alaska real estate licensing requirements',
    'Alaska real estate salesperson exam',
    'How to get a real estate license in Alaska',
    'AREC real estate licensing guide',
  ],
  openGraph: {
    title: 'Alaska Real Estate Exam Guide — Everything You Need to Know',
    description:
      'Complete guide to Alaska Real Estate licensing requirements: eligibility, fees, required documents, and what to expect on the exam.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/alaska',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'Alaska Real Estate Exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alaska Real Estate Exam Guide',
    description:
      'Everything you need to know about preparing for and passing your Alaska Real Estate salesperson licensing exam.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/alaska',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
