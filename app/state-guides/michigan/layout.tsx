import { Metadata } from 'next'

const currentYear = new Date().getFullYear()

export const metadata: Metadata = {
  title: 'Michigan Real Estate Exam Guide 2026 â€” Eligibility, Fees & Rules | Real Estate Question Bank',
  description:
    'Complete guide to passing the Michigan Real Estate salesperson licensing exam. Learn about eligibility requirements (age 18+), fees, required forms, and the step-by-step LARA application process.',
  keywords: [
    'Michigan real estate exam',
    'Michigan real estate license',
    'Michigan real estate exam prep',
    'Michigan real estate exam questions',
    'Michigan real estate licensing requirements',
    'Michigan real estate salesperson exam',
    'How to get a real estate license in Michigan',
    'LARA real estate licensing guide',
  ],
  openGraph: {
    title: 'Michigan Real Estate Exam Guide â€” Everything You Need to Know',
    description:
      'Complete guide to Michigan Real Estate licensing requirements: eligibility, fees, required documents, and what to expect on the exam.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/michigan',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'Michigan Real Estate Exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Michigan Real Estate Exam Guide',
    description:
      'Everything you need to know about preparing for and passing your Michigan Real Estate salesperson licensing exam.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/michigan',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
