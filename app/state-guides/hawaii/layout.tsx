import { Metadata } from 'next'

const currentYear = new Date().getFullYear()

export const metadata: Metadata = {
  title: 'Hawaii Real Estate Exam Guide 2026 — Eligibility, Fees & Rules | Real Estate Question Bank',
  description:
    'Complete guide to passing the Hawaii Real Estate salesperson licensing exam. Learn about eligibility requirements (age 18+), fees, required forms, and the step-by-step HREC application process.',
  keywords: [
    'Hawaii real estate exam',
    'Hawaii real estate license',
    'Hawaii real estate exam prep',
    'Hawaii real estate exam questions',
    'Hawaii real estate licensing requirements',
    'Hawaii real estate salesperson exam',
    'How to get a real estate license in Hawaii',
    'HREC real estate licensing guide',
  ],
  openGraph: {
    title: 'Hawaii Real Estate Exam Guide — Everything You Need to Know',
    description:
      'Complete guide to Hawaii Real Estate licensing requirements: eligibility, fees, required documents, and what to expect on the exam.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/hawaii',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'Hawaii Real Estate Exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hawaii Real Estate Exam Guide',
    description:
      'Everything you need to know about preparing for and passing your Hawaii Real Estate salesperson licensing exam.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/hawaii',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
