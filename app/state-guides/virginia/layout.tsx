import { Metadata } from 'next'

const currentYear = new Date().getFullYear()

export const metadata: Metadata = {
  title: 'Virginia Real Estate Exam Guide 2026 â€” Eligibility, Fees & Rules | Real Estate Question Bank',
  description:
    'Complete guide to passing the Virginia Real Estate salesperson licensing exam. Learn about eligibility requirements (age 18+), fees, required forms, and the step-by-step VREB application process.',
  keywords: [
    'Virginia real estate exam',
    'Virginia real estate license',
    'Virginia real estate exam prep',
    'Virginia real estate exam questions',
    'Virginia real estate licensing requirements',
    'Virginia real estate salesperson exam',
    'How to get a real estate license in Virginia',
    'VREB real estate licensing guide',
  ],
  openGraph: {
    title: 'Virginia Real Estate Exam Guide â€” Everything You Need to Know',
    description:
      'Complete guide to Virginia Real Estate licensing requirements: eligibility, fees, required documents, and what to expect on the exam.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/virginia',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'Virginia Real Estate Exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Virginia Real Estate Exam Guide',
    description:
      'Everything you need to know about preparing for and passing your Virginia Real Estate salesperson licensing exam.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/virginia',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
