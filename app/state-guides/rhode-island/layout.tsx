import { Metadata } from 'next'

const currentYear = new Date().getFullYear()

export const metadata: Metadata = {
  title: 'Rhode Island Real Estate Exam Guide 2026 â€” Eligibility, Fees & Rules | Real Estate Question Bank',
  description:
    'Complete guide to passing the Rhode Island Real Estate salesperson licensing exam. Learn about eligibility requirements (age 18+), fees, required forms, and the step-by-step DBR application process.',
  keywords: [
    'Rhode Island real estate exam',
    'Rhode Island real estate license',
    'Rhode Island real estate exam prep',
    'Rhode Island real estate exam questions',
    'Rhode Island real estate licensing requirements',
    'Rhode Island real estate salesperson exam',
    'How to get a real estate license in Rhode Island',
    'DBR real estate licensing guide',
  ],
  openGraph: {
    title: 'Rhode Island Real Estate Exam Guide â€” Everything You Need to Know',
    description:
      'Complete guide to Rhode Island Real Estate licensing requirements: eligibility, fees, required documents, and what to expect on the exam.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/rhode-island',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'Rhode Island Real Estate Exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rhode Island Real Estate Exam Guide',
    description:
      'Everything you need to know about preparing for and passing your Rhode Island Real Estate salesperson licensing exam.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/rhode-island',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
