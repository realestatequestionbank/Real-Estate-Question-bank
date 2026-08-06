import { Metadata } from 'next'

const currentYear = new Date().getFullYear()

export const metadata: Metadata = {
  title: 'Nevada Real Estate Exam Guide 2026 â€” Eligibility, Fees & Rules | Real Estate Question Bank',
  description:
    'Complete guide to passing the Nevada Real Estate salesperson licensing exam. Learn about eligibility requirements (age 18+), fees, required forms, and the step-by-step NRED application process.',
  keywords: [
    'Nevada real estate exam',
    'Nevada real estate license',
    'Nevada real estate exam prep',
    'Nevada real estate exam questions',
    'Nevada real estate licensing requirements',
    'Nevada real estate salesperson exam',
    'How to get a real estate license in Nevada',
    'NRED real estate licensing guide',
  ],
  openGraph: {
    title: 'Nevada Real Estate Exam Guide â€” Everything You Need to Know',
    description:
      'Complete guide to Nevada Real Estate licensing requirements: eligibility, fees, required documents, and what to expect on the exam.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/nevada',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'Nevada Real Estate Exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nevada Real Estate Exam Guide',
    description:
      'Everything you need to know about preparing for and passing your Nevada Real Estate salesperson licensing exam.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/nevada',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
