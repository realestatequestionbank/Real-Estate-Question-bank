import { Metadata } from 'next'
import { AuthProvider } from '@/contexts/auth-context'
import { StateCheatSheetPageContent } from '@/components/pages/state-cheat-sheet-page'

export const metadata: Metadata = {
  title: 'Washington DOL real estate exam Cheat Sheet (2026) | Real Estate Question Bank',
  description: 'Pass your Washington DOL real estate exam on the first try. 100 most-missed concepts ranked by 70,000,000+ real practice test answers. Study on your phone or print.',
  keywords: [
    'Washington DOL cheat sheet',
    'Washington real estate exam cheat sheet',
    'free Washington driving cheat sheet PDF',
    'Washington driver license test answers',
    'print Washington real estate exam study guide'
  ],
  openGraph: {
    title: 'Washington DOL real estate exam Cheat Sheet (2026) | Real Estate Question Bank',
    description: 'Pass your Washington DOL real estate exam on the first try. 100 most-missed concepts ranked by 70,000,000+ real practice test answers.',
    type: 'website',
    url: 'https://www.realestatequestionbank.com/washington-real-estate-practice-test/cheat-sheet',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'Washington DOL real estate exam Cheat Sheet Study Guide'
      }
    ]
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/washington-real-estate-practice-test/cheat-sheet'
  }
}

export default function WashingtonCheatSheetPage() {
  return (
    <AuthProvider>
      <StateCheatSheetPageContent state="washington" />
    </AuthProvider>
  )
}
