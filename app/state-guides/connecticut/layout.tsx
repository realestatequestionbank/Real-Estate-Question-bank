import { Metadata } from 'next'

const currentYear = new Date().getFullYear()

export const metadata: Metadata = {
  title: 'Connecticut Real Estate Exam Guide 2026 — Eligibility, Fees & Rules | Real Estate Question Bank',
  description:
    'Complete guide to passing the Connecticut Real Estate salesperson licensing exam. Learn about eligibility requirements (age 18+), fees, required forms, and the step-by-step DCP application process.',
  keywords: [
    'Connecticut real estate exam',
    'Connecticut real estate license',
    'Connecticut real estate exam prep',
    'Connecticut real estate exam questions',
    'Connecticut real estate licensing requirements',
    'Connecticut real estate salesperson exam',
    'How to get a real estate license in Connecticut',
    'DCP real estate licensing guide',
  ],
  openGraph: {
    title: 'Connecticut Real Estate Exam Guide — Everything You Need to Know',
    description:
      'Complete guide to Connecticut Real Estate licensing requirements: eligibility, fees, required documents, and what to expect on the exam.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/connecticut',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'Connecticut Real Estate Exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Connecticut Real Estate Exam Guide',
    description:
      'Everything you need to know about preparing for and passing your Connecticut Real Estate salesperson licensing exam.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/connecticut',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
