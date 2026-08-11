import { Metadata } from 'next'

const currentYear = new Date().getFullYear()

export const metadata: Metadata = {
  title: 'Nebraska Real Estate Exam Guide 2026 — Eligibility, Fees & Rules | Real Estate Question Bank',
  description:
    'Complete guide to passing the Nebraska Real Estate salesperson licensing exam. Learn about eligibility requirements (age 18+), fees, required forms, and the step-by-step NREC application process.',
  keywords: [
    'Nebraska real estate exam',
    'Nebraska real estate license',
    'Nebraska real estate exam prep',
    'Nebraska real estate exam questions',
    'Nebraska real estate licensing requirements',
    'Nebraska real estate salesperson exam',
    'How to get a real estate license in Nebraska',
    'NREC real estate licensing guide',
  ],
  openGraph: {
    title: 'Nebraska Real Estate Exam Guide — Everything You Need to Know',
    description:
      'Complete guide to Nebraska Real Estate licensing requirements: eligibility, fees, required documents, and what to expect on the exam.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/nebraska',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'Nebraska Real Estate Exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nebraska Real Estate Exam Guide',
    description:
      'Everything you need to know about preparing for and passing your Nebraska Real Estate salesperson licensing exam.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/nebraska',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
