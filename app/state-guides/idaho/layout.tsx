import { Metadata } from 'next'

const currentYear = new Date().getFullYear()

export const metadata: Metadata = {
  title: 'Idaho Real Estate Exam Guide 2026 â€” Eligibility, Fees & Rules | Real Estate Question Bank',
  description:
    'Complete guide to passing the Idaho Real Estate salesperson licensing exam. Learn about eligibility requirements (age 18+), fees, required forms, and the step-by-step IREC application process.',
  keywords: [
    'Idaho real estate exam',
    'Idaho real estate license',
    'Idaho real estate exam prep',
    'Idaho real estate exam questions',
    'Idaho real estate licensing requirements',
    'Idaho real estate salesperson exam',
    'How to get a real estate license in Idaho',
    'IREC real estate licensing guide',
  ],
  openGraph: {
    title: 'Idaho Real Estate Exam Guide â€” Everything You Need to Know',
    description:
      'Complete guide to Idaho Real Estate licensing requirements: eligibility, fees, required documents, and what to expect on the exam.',
    type: 'article',
    url: 'https://www.realestatequestionbank.com/state-guides/idaho',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'Idaho Real Estate Exam Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Idaho Real Estate Exam Guide',
    description:
      'Everything you need to know about preparing for and passing your Idaho Real Estate salesperson licensing exam.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/state-guides/idaho',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
