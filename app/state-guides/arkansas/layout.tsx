import { Metadata } from 'next'

const currentYear = new Date().getFullYear()

export const metadata: Metadata = {
  title: 'Arkansas Real Estate Exam Guide 2026 — Eligibility, Fees & Rules | Real Estate Question Bank',
  description:
    'Complete guide to passing the Arkansas Real Estate salesperson licensing exam. Learn about eligibility requirements (age 18+), fees, required forms, and the step-by-step AREC application process.',
  keywords: [
    'Arkansas real estate exam',
    'Arkansas real estate license',
    'Arkansas real estate exam prep',
    'Arkansas real estate exam questions',
    'Arkansas real estate licensing requirements',
    'Arkansas real estate salesperson exam',
    'How to get a real estate license in Arkansas',
    'AREC real estate licensing guide',
  ],
  openGraph: {
    title: 'Arkansas Real Estate Exam Guide — Everything You Need to Know',
    description:
      'Complete guide to Arkansas Real Estate licensing requirements: eligibility, fees, required documents, and what to expect on the exam.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/arkansas',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'Arkansas Real Estate Exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arkansas Real Estate Exam Guide',
    description:
      'Everything you need to know about preparing for and passing your Arkansas Real Estate salesperson licensing exam.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/arkansas',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
