import { Metadata } from 'next'
import { AuthProvider } from '@/contexts/auth-context'
import { StateCheatSheetPageContent } from '@/components/pages/state-cheat-sheet-page'

export const metadata: Metadata = {
  title: 'North Carolina Real Estate real estate exam Cheat Sheet (2026) | Real Estate Question Bank',
  description: 'Pass your North Carolina Real Estate Exam on the first try. 100 most-missed concepts ranked by 70,000,000+ real practice test answers. Study on your phone or print.',
  keywords: [
    'North Carolina Real Estate cheat sheet',
    'North Carolina real estate exam cheat sheet',
    'free North Carolina driving cheat sheet PDF',
    'North Carolina driver license test answers',
    'print North Carolina real estate exam study guide'
  ],
  openGraph: {
    title: 'North Carolina Real Estate real estate exam Cheat Sheet (2026) | Real Estate Question Bank',
    description: 'Pass your North Carolina Real Estate Exam on the first try. 100 most-missed concepts ranked by 70,000,000+ real practice test answers.',
    type: 'website',
    url: 'https://www.realestatequestionbank.com/north-carolina-real-estate-practice-test/cheat-sheet',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'North Carolina Real Estate real estate exam Cheat Sheet Study Guide'
      }
    ]
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/north-carolina-real-estate-practice-test/cheat-sheet'
  }
}

export default function NorthCarolinaCheatSheetPage() {
  return (
    <AuthProvider>
      <StateCheatSheetPageContent state="north-carolina" />
    </AuthProvider>
  )
}
