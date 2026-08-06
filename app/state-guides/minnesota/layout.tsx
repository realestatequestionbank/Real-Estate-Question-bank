import { Metadata } from 'next'

const currentYear = new Date().getFullYear()

export const metadata: Metadata = {
  title: 'Minnesota Real Estate Exam Guide 2026 â€” Eligibility, Fees & Rules | Real Estate Question Bank',
  description:
    'Complete guide to passing the Minnesota Real Estate salesperson licensing exam. Learn about eligibility requirements (age 18+), fees, required forms, and the step-by-step MNDOC application process.',
  keywords: [
    'Minnesota real estate exam',
    'Minnesota real estate license',
    'Minnesota real estate exam prep',
    'Minnesota real estate exam questions',
    'Minnesota real estate licensing requirements',
    'Minnesota real estate salesperson exam',
    'How to get a real estate license in Minnesota',
    'MNDOC real estate licensing guide',
  ],
  openGraph: {
    title: 'Minnesota Real Estate Exam Guide â€” Everything You Need to Know',
    description:
      'Complete guide to Minnesota Real Estate licensing requirements: eligibility, fees, required documents, and what to expect on the exam.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/minnesota',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'Minnesota Real Estate Exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Minnesota Real Estate Exam Guide',
    description:
      'Everything you need to know about preparing for and passing your Minnesota Real Estate salesperson licensing exam.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/minnesota',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
