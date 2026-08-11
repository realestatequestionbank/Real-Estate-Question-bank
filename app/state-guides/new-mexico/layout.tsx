import { Metadata } from 'next'

const currentYear = new Date().getFullYear()

export const metadata: Metadata = {
  title: 'New Mexico Real Estate Exam Guide 2026 — Eligibility, Fees & Rules | Real Estate Question Bank',
  description:
    'Complete guide to passing the New Mexico Real Estate salesperson licensing exam. Learn about eligibility requirements (age 18+), fees, required forms, and the step-by-step NMREC application process.',
  keywords: [
    'New Mexico real estate exam',
    'New Mexico real estate license',
    'New Mexico real estate exam prep',
    'New Mexico real estate exam questions',
    'New Mexico real estate licensing requirements',
    'New Mexico real estate salesperson exam',
    'How to get a real estate license in New Mexico',
    'NMREC real estate licensing guide',
  ],
  openGraph: {
    title: 'New Mexico Real Estate Exam Guide — Everything You Need to Know',
    description:
      'Complete guide to New Mexico Real Estate licensing requirements: eligibility, fees, required documents, and what to expect on the exam.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/new-mexico',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'New Mexico Real Estate Exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'New Mexico Real Estate Exam Guide',
    description:
      'Everything you need to know about preparing for and passing your New Mexico Real Estate salesperson licensing exam.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/new-mexico',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
