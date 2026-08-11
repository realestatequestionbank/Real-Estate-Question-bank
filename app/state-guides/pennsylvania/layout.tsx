import { Metadata } from 'next'

const currentYear = new Date().getFullYear()

export const metadata: Metadata = {
  title: 'Pennsylvania Real Estate Exam Guide 2026 — Eligibility, Fees & Rules | Real Estate Question Bank',
  description:
    'Complete guide to passing the Pennsylvania Real Estate salesperson licensing exam. Learn about eligibility requirements (age 18+), fees, required forms, and the step-by-step SREC application process.',
  keywords: [
    'Pennsylvania real estate exam',
    'Pennsylvania real estate license',
    'Pennsylvania real estate exam prep',
    'Pennsylvania real estate exam questions',
    'Pennsylvania real estate licensing requirements',
    'Pennsylvania real estate salesperson exam',
    'How to get a real estate license in Pennsylvania',
    'SREC real estate licensing guide',
  ],
  openGraph: {
    title: 'Pennsylvania Real Estate Exam Guide — Everything You Need to Know',
    description:
      'Complete guide to Pennsylvania Real Estate licensing requirements: eligibility, fees, required documents, and what to expect on the exam.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/pennsylvania',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'Pennsylvania Real Estate Exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pennsylvania Real Estate Exam Guide',
    description:
      'Everything you need to know about preparing for and passing your Pennsylvania Real Estate salesperson licensing exam.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/pennsylvania',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
