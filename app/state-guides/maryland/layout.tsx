import { Metadata } from 'next'

const currentYear = new Date().getFullYear()

export const metadata: Metadata = {
  title: 'Maryland Real Estate Exam Guide 2026 — Eligibility, Fees & Rules | Real Estate Question Bank',
  description:
    'Complete guide to passing the Maryland Real Estate salesperson licensing exam. Learn about eligibility requirements (age 18+), fees, required forms, and the step-by-step MREC application process.',
  keywords: [
    'Maryland real estate exam',
    'Maryland real estate license',
    'Maryland real estate exam prep',
    'Maryland real estate exam questions',
    'Maryland real estate licensing requirements',
    'Maryland real estate salesperson exam',
    'How to get a real estate license in Maryland',
    'MREC real estate licensing guide',
  ],
  openGraph: {
    title: 'Maryland Real Estate Exam Guide — Everything You Need to Know',
    description:
      'Complete guide to Maryland Real Estate licensing requirements: eligibility, fees, required documents, and what to expect on the exam.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/maryland',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'Maryland Real Estate Exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maryland Real Estate Exam Guide',
    description:
      'Everything you need to know about preparing for and passing your Maryland Real Estate salesperson licensing exam.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/maryland',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
