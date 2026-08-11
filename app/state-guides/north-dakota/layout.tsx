import { Metadata } from 'next'

const currentYear = new Date().getFullYear()

export const metadata: Metadata = {
  title: 'North Dakota Real Estate Exam Guide 2026 — Eligibility, Fees & Rules | Real Estate Question Bank',
  description:
    'Complete guide to passing the North Dakota Real Estate salesperson licensing exam. Learn about eligibility requirements (age 18+), fees, required forms, and the step-by-step NDREC application process.',
  keywords: [
    'North Dakota real estate exam',
    'North Dakota real estate license',
    'North Dakota real estate exam prep',
    'North Dakota real estate exam questions',
    'North Dakota real estate licensing requirements',
    'North Dakota real estate salesperson exam',
    'How to get a real estate license in North Dakota',
    'NDREC real estate licensing guide',
  ],
  openGraph: {
    title: 'North Dakota Real Estate Exam Guide — Everything You Need to Know',
    description:
      'Complete guide to North Dakota Real Estate licensing requirements: eligibility, fees, required documents, and what to expect on the exam.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/north-dakota',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'North Dakota Real Estate Exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'North Dakota Real Estate Exam Guide',
    description:
      'Everything you need to know about preparing for and passing your North Dakota Real Estate salesperson licensing exam.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/north-dakota',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
