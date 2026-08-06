import { Metadata } from 'next'

const currentYear = new Date().getFullYear()

export const metadata: Metadata = {
  title: 'Kentucky Real Estate Exam Guide 2026 â€” Eligibility, Fees & Rules | Real Estate Question Bank',
  description:
    'Complete guide to passing the Kentucky Real Estate salesperson licensing exam. Learn about eligibility requirements (age 18+), fees, required forms, and the step-by-step KREC application process.',
  keywords: [
    'Kentucky real estate exam',
    'Kentucky real estate license',
    'Kentucky real estate exam prep',
    'Kentucky real estate exam questions',
    'Kentucky real estate licensing requirements',
    'Kentucky real estate salesperson exam',
    'How to get a real estate license in Kentucky',
    'KREC real estate licensing guide',
  ],
  openGraph: {
    title: 'Kentucky Real Estate Exam Guide â€” Everything You Need to Know',
    description:
      'Complete guide to Kentucky Real Estate licensing requirements: eligibility, fees, required documents, and what to expect on the exam.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/kentucky',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'Kentucky Real Estate Exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kentucky Real Estate Exam Guide',
    description:
      'Everything you need to know about preparing for and passing your Kentucky Real Estate salesperson licensing exam.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/kentucky',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
