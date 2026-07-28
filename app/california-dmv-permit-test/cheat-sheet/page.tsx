import { Metadata } from 'next'
import { AuthProvider } from '@/contexts/auth-context'
import { StateCheatSheetPageContent } from '@/components/pages/state-cheat-sheet-page'

export const metadata: Metadata = {
  title: 'California Real Estate real estate exam Cheat Sheet (2026) | Real Estate Question Bank',
  description: 'Pass your California Real Estate Exam on the first try. 100 most-missed concepts ranked by 70,000,000+ real practice test answers. Study on your phone or print.',
  keywords: [
    'California Real Estate cheat sheet',
    'California real estate exam cheat sheet',
    'free California driving cheat sheet PDF',
    'California driver license test answers',
    'print California real estate exam study guide'
  ],
  openGraph: {
    title: 'California Real Estate real estate exam Cheat Sheet (2026) | Real Estate Question Bank',
    description: 'Pass your California Real Estate Exam on the first try. 100 most-missed concepts ranked by 70,000,000+ real practice test answers.',
    type: 'website',
    url: 'https://www.realestatequestionbank.com/california-real-estate-permit-test/cheat-sheet',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'California Real Estate real estate exam Cheat Sheet Study Guide'
      }
    ]
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/california-real-estate-permit-test/cheat-sheet'
  }
}

export default function CaliforniaCheatSheetPage() {
  return (
    <AuthProvider>
      <StateCheatSheetPageContent state="california" />
    </AuthProvider>
  )
}
