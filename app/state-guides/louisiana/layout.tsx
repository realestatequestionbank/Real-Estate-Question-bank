import { Metadata } from 'next'

const currentYear = new Date().getFullYear()

export const metadata: Metadata = {
  title: 'Louisiana Real Estate Exam Guide 2026 â€” Eligibility, Fees & Rules | Real Estate Question Bank',
  description:
    'Complete guide to passing the Louisiana Real Estate salesperson licensing exam. Learn about eligibility requirements (age 18+), fees, required forms, and the step-by-step LREC application process.',
  keywords: [
    'Louisiana real estate exam',
    'Louisiana real estate license',
    'Louisiana real estate exam prep',
    'Louisiana real estate exam questions',
    'Louisiana real estate licensing requirements',
    'Louisiana real estate salesperson exam',
    'How to get a real estate license in Louisiana',
    'LREC real estate licensing guide',
  ],
  openGraph: {
    title: 'Louisiana Real Estate Exam Guide â€” Everything You Need to Know',
    description:
      'Complete guide to Louisiana Real Estate licensing requirements: eligibility, fees, required documents, and what to expect on the exam.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/louisiana',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'Louisiana Real Estate Exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Louisiana Real Estate Exam Guide',
    description:
      'Everything you need to know about preparing for and passing your Louisiana Real Estate salesperson licensing exam.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/louisiana',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
