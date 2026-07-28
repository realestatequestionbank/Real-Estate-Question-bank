import { Metadata } from 'next'
import { AuthProvider } from '@/contexts/auth-context'
import { RealEstateNearMePageContent } from '@/components/pages/real-estate-near-me-page'

export const metadata: Metadata = {
  title: 'Find Real Estate Near Me | Real Estate Office Locator | Real Estate Question Bank',
  description: 'Find Real Estate offices near you. Search by zip code or use your current location to find nearby Real Estate locations with hours, phone numbers, ratings, and directions.',
  keywords: 'Real Estate near me, Real Estate office locator, find Real Estate, Real Estate locations, Department of Motor Vehicles, driver license office',
  openGraph: {
    title: 'Find Real Estate Near Me | Real Estate Office Locator',
    description: 'Find Real Estate offices near you. Search by zip code or use your current location to find nearby Real Estate locations with hours, phone numbers, and directions.',
    type: 'website',
  },
  alternates: { canonical: 'https://www.realestatequestionbank.com/real-estate-near-me' },
}

export default function RealEstateNearMePage() {
  return (
    <AuthProvider>
      <RealEstateNearMePageContent />
    </AuthProvider>
  )
}
