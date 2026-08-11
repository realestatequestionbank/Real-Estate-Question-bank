import { Metadata } from 'next'

const currentYear = new Date().getFullYear()

export const metadata: Metadata = {
  title: 'Arizona Real Estate Exam Guide 2026 — Eligibility, Fees & Rules | Real Estate Question Bank',
  description:
    'Complete guide to passing the Arizona Real Estate salesperson licensing exam. Learn about eligibility requirements (age 18+), fees, required forms, and the step-by-step ADRE application process.',
  keywords: [
    'Arizona real estate exam',
    'Arizona real estate license',
    'Arizona real estate exam prep',
    'Arizona real estate exam questions',
    'Arizona real estate licensing requirements',
    'Arizona real estate salesperson exam',
    'How to get a real estate license in Arizona',
    'ADRE real estate licensing guide',
  ],
  openGraph: {
    title: 'Arizona Real Estate Exam Guide — Everything You Need to Know',
    description:
      'Complete guide to Arizona Real Estate licensing requirements: eligibility, fees, required documents, and what to expect on the exam.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/arizona',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'Arizona Real Estate Exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arizona Real Estate Exam Guide',
    description:
      'Everything you need to know about preparing for and passing your Arizona Real Estate salesperson licensing exam.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/arizona',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
