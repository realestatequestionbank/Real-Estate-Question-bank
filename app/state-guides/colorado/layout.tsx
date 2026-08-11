import { Metadata } from 'next'

const currentYear = new Date().getFullYear()

export const metadata: Metadata = {
  title: 'Colorado Real Estate Exam Guide 2026 — Eligibility, Fees & Rules | Real Estate Question Bank',
  description:
    'Complete guide to passing the Colorado Real Estate salesperson licensing exam. Learn about eligibility requirements (age 18+), fees, required forms, and the step-by-step CREC application process.',
  keywords: [
    'Colorado real estate exam',
    'Colorado real estate license',
    'Colorado real estate exam prep',
    'Colorado real estate exam questions',
    'Colorado real estate licensing requirements',
    'Colorado real estate salesperson exam',
    'How to get a real estate license in Colorado',
    'CREC real estate licensing guide',
  ],
  openGraph: {
    title: 'Colorado Real Estate Exam Guide — Everything You Need to Know',
    description:
      'Complete guide to Colorado Real Estate licensing requirements: eligibility, fees, required documents, and what to expect on the exam.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/colorado',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'Colorado Real Estate Exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Colorado Real Estate Exam Guide',
    description:
      'Everything you need to know about preparing for and passing your Colorado Real Estate salesperson licensing exam.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/colorado',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
