import { Metadata } from 'next'

const currentYear = new Date().getFullYear()

export const metadata: Metadata = {
  title: 'West Virginia Real Estate Exam Guide 2026 — Eligibility, Fees & Rules | Real Estate Question Bank',
  description:
    'Complete guide to passing the West Virginia Real Estate salesperson licensing exam. Learn about eligibility requirements (age 18+), fees, required forms, and the step-by-step WVREC application process.',
  keywords: [
    'West Virginia real estate exam',
    'West Virginia real estate license',
    'West Virginia real estate exam prep',
    'West Virginia real estate exam questions',
    'West Virginia real estate licensing requirements',
    'West Virginia real estate salesperson exam',
    'How to get a real estate license in West Virginia',
    'WVREC real estate licensing guide',
  ],
  openGraph: {
    title: 'West Virginia Real Estate Exam Guide — Everything You Need to Know',
    description:
      'Complete guide to West Virginia Real Estate licensing requirements: eligibility, fees, required documents, and what to expect on the exam.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/west-virginia',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'West Virginia Real Estate Exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'West Virginia Real Estate Exam Guide',
    description:
      'Everything you need to know about preparing for and passing your West Virginia Real Estate salesperson licensing exam.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/west-virginia',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
