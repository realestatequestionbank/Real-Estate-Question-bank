import { Metadata } from 'next'

const currentYear = new Date().getFullYear()

export const metadata: Metadata = {
  title: 'Wyoming Real Estate Exam Guide 2026 — Eligibility, Fees & Rules | Real Estate Question Bank',
  description:
    'Complete guide to passing the Wyoming Real Estate salesperson licensing exam. Learn about eligibility requirements (age 18+), fees, required forms, and the step-by-step WREC application process.',
  keywords: [
    'Wyoming real estate exam',
    'Wyoming real estate license',
    'Wyoming real estate exam prep',
    'Wyoming real estate exam questions',
    'Wyoming real estate licensing requirements',
    'Wyoming real estate salesperson exam',
    'How to get a real estate license in Wyoming',
    'WREC real estate licensing guide',
  ],
  openGraph: {
    title: 'Wyoming Real Estate Exam Guide — Everything You Need to Know',
    description:
      'Complete guide to Wyoming Real Estate licensing requirements: eligibility, fees, required documents, and what to expect on the exam.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/wyoming',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'Wyoming Real Estate Exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wyoming Real Estate Exam Guide',
    description:
      'Everything you need to know about preparing for and passing your Wyoming Real Estate salesperson licensing exam.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/wyoming',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
