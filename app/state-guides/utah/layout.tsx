import { Metadata } from 'next'

const currentYear = new Date().getFullYear()

export const metadata: Metadata = {
  title: 'Utah Real Estate Exam Guide 2026 — Eligibility, Fees & Rules | Real Estate Question Bank',
  description:
    'Complete guide to passing the Utah Real Estate salesperson licensing exam. Learn about eligibility requirements (age 18+), fees, required forms, and the step-by-step UDRE application process.',
  keywords: [
    'Utah real estate exam',
    'Utah real estate license',
    'Utah real estate exam prep',
    'Utah real estate exam questions',
    'Utah real estate licensing requirements',
    'Utah real estate salesperson exam',
    'How to get a real estate license in Utah',
    'UDRE real estate licensing guide',
  ],
  openGraph: {
    title: 'Utah Real Estate Exam Guide — Everything You Need to Know',
    description:
      'Complete guide to Utah Real Estate licensing requirements: eligibility, fees, required documents, and what to expect on the exam.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/utah',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'Utah Real Estate Exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Utah Real Estate Exam Guide',
    description:
      'Everything you need to know about preparing for and passing your Utah Real Estate salesperson licensing exam.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/utah',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
