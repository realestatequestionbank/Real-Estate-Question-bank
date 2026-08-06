import { Metadata } from 'next'

const currentYear = new Date().getFullYear()

export const metadata: Metadata = {
  title: 'Indiana Real Estate Exam Guide 2026 â€” Eligibility, Fees & Rules | Real Estate Question Bank',
  description:
    'Complete guide to passing the Indiana Real Estate salesperson licensing exam. Learn about eligibility requirements (age 18+), fees, required forms, and the step-by-step IREC application process.',
  keywords: [
    'Indiana real estate exam',
    'Indiana real estate license',
    'Indiana real estate exam prep',
    'Indiana real estate exam questions',
    'Indiana real estate licensing requirements',
    'Indiana real estate salesperson exam',
    'How to get a real estate license in Indiana',
    'IREC real estate licensing guide',
  ],
  openGraph: {
    title: 'Indiana Real Estate Exam Guide â€” Everything You Need to Know',
    description:
      'Complete guide to Indiana Real Estate licensing requirements: eligibility, fees, required documents, and what to expect on the exam.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/indiana',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'Indiana Real Estate Exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Indiana Real Estate Exam Guide',
    description:
      'Everything you need to know about preparing for and passing your Indiana Real Estate salesperson licensing exam.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/indiana',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
