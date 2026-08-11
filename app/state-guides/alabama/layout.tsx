import { Metadata } from 'next'

const currentYear = new Date().getFullYear()

export const metadata: Metadata = {
  title: 'Alabama Real Estate Exam Guide 2026 — Eligibility, Fees & Rules | Real Estate Question Bank',
  description:
    'Complete guide to passing the Alabama Real Estate salesperson licensing exam. Learn about eligibility requirements (age 18+), fees, required forms, and the step-by-step AREC application process.',
  keywords: [
    'Alabama real estate exam',
    'Alabama real estate license',
    'Alabama real estate exam prep',
    'Alabama real estate exam questions',
    'Alabama real estate licensing requirements',
    'Alabama real estate salesperson exam',
    'How to get a real estate license in Alabama',
    'AREC real estate licensing guide',
  ],
  openGraph: {
    title: 'Alabama Real Estate Exam Guide — Everything You Need to Know',
    description:
      'Complete guide to Alabama Real Estate licensing requirements: eligibility, fees, required documents, and what to expect on the exam.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/alabama',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'Alabama Real Estate Exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alabama Real Estate Exam Guide',
    description:
      'Everything you need to know about preparing for and passing your Alabama Real Estate salesperson licensing exam.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/alabama',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
