import { Metadata } from 'next'

const currentYear = new Date().getFullYear()

export const metadata: Metadata = {
  title: 'Georgia Real Estate Exam Guide 2026 â€” Eligibility, Fees & Rules | Real Estate Question Bank',
  description:
    'Complete guide to passing the Georgia Real Estate salesperson licensing exam. Learn about eligibility requirements (age 18+), fees, required forms, and the step-by-step GREC application process.',
  keywords: [
    'Georgia real estate exam',
    'Georgia real estate license',
    'Georgia real estate exam prep',
    'Georgia real estate exam questions',
    'Georgia real estate licensing requirements',
    'Georgia real estate salesperson exam',
    'How to get a real estate license in Georgia',
    'GREC real estate licensing guide',
  ],
  openGraph: {
    title: 'Georgia Real Estate Exam Guide â€” Everything You Need to Know',
    description:
      'Complete guide to Georgia Real Estate licensing requirements: eligibility, fees, required documents, and what to expect on the exam.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/georgia',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'Georgia Real Estate Exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Georgia Real Estate Exam Guide',
    description:
      'Everything you need to know about preparing for and passing your Georgia Real Estate salesperson licensing exam.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/georgia',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
