import { Metadata } from 'next'

const currentYear = new Date().getFullYear()

export const metadata: Metadata = {
  title: 'Ohio Real Estate Exam Guide 2026 â€” Eligibility, Fees & Rules | Real Estate Question Bank',
  description:
    'Complete guide to passing the Ohio Real Estate salesperson licensing exam. Learn about eligibility requirements (age 18+), fees, required forms, and the step-by-step ODRE application process.',
  keywords: [
    'Ohio real estate exam',
    'Ohio real estate license',
    'Ohio real estate exam prep',
    'Ohio real estate exam questions',
    'Ohio real estate licensing requirements',
    'Ohio real estate salesperson exam',
    'How to get a real estate license in Ohio',
    'ODRE real estate licensing guide',
  ],
  openGraph: {
    title: 'Ohio Real Estate Exam Guide â€” Everything You Need to Know',
    description:
      'Complete guide to Ohio Real Estate licensing requirements: eligibility, fees, required documents, and what to expect on the exam.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/ohio',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'Ohio Real Estate Exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ohio Real Estate Exam Guide',
    description:
      'Everything you need to know about preparing for and passing your Ohio Real Estate salesperson licensing exam.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/ohio',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
