import { Metadata } from 'next'
import { AuthProvider } from '@/contexts/auth-context'
import { StateCheatSheetPageContent } from '@/components/pages/state-cheat-sheet-page'

export const metadata: Metadata = {
  title: 'Texas DPS real estate exam Cheat Sheet (2026) | Real Estate Question Bank',
  description: 'Pass your Texas DPS real estate exam on the first try. 100 most-missed concepts ranked by 70,000,000+ real practice test answers. Study on your phone or print.',
  keywords: [
    'Texas DPS cheat sheet',
    'Texas real estate exam cheat sheet',
    'free Texas driving cheat sheet PDF',
    'Texas driver license test answers',
    'print Texas real estate exam study guide'
  ],
  openGraph: {
    title: 'Texas DPS real estate exam Cheat Sheet (2026) | Real Estate Question Bank',
    description: 'Pass your Texas DPS real estate exam on the first try. 100 most-missed concepts ranked by 70,000,000+ real practice test answers.',
    type: 'website',
    url: 'https://www.realestatequestionbank.com/texas-real-estate-practice-test/cheat-sheet',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'Texas DPS real estate exam Cheat Sheet Study Guide'
      }
    ]
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/texas-real-estate-practice-test/cheat-sheet'
  }
}

export default function TexasCheatSheetPage() {
  return (
    <AuthProvider>
      <StateCheatSheetPageContent state="texas" />
    </AuthProvider>
  )
}
