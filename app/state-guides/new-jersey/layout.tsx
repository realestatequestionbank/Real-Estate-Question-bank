import { Metadata } from 'next'

const currentYear = new Date().getFullYear()

export const metadata: Metadata = {
  title: 'New Jersey Real Estate Exam Guide 2026 — Eligibility, Fees & Rules | Real Estate Question Bank',
  description:
    'Complete guide to passing the New Jersey Real Estate salesperson licensing exam. Learn about eligibility requirements (age 18+), fees, required forms, and the step-by-step NJREC application process.',
  keywords: [
    'New Jersey real estate exam',
    'New Jersey real estate license',
    'New Jersey real estate exam prep',
    'New Jersey real estate exam questions',
    'New Jersey real estate licensing requirements',
    'New Jersey real estate salesperson exam',
    'How to get a real estate license in New Jersey',
    'NJREC real estate licensing guide',
  ],
  openGraph: {
    title: 'New Jersey Real Estate Exam Guide — Everything You Need to Know',
    description:
      'Complete guide to New Jersey Real Estate licensing requirements: eligibility, fees, required documents, and what to expect on the exam.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/new-jersey',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'New Jersey Real Estate Exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'New Jersey Real Estate Exam Guide',
    description:
      'Everything you need to know about preparing for and passing your New Jersey Real Estate salesperson licensing exam.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/new-jersey',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
