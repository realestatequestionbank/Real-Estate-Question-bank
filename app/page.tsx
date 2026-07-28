import { AuthProvider } from '@/contexts/auth-context'
import { HomePage } from '@/components/home-page'
import { StructuredData } from '@/components/structured-data'

export const metadata = {
  title: 'Real Estate Question Bank | Pass Your Licensing Exam Guaranteed',
  description: 'Master the 2026 Real Estate Salesperson & Broker licensing exam with our 20,000 audited state-specific practice questions for CA, FL, TX, GA, NC, NY, IL, PA, OH, and MI.',
  alternates: {
    canonical: 'https://www.realestatequestionbank.com',
  },
}

export default function Home() {
  return (
    <AuthProvider>
      <StructuredData type="homepage" />
      <HomePage />
    </AuthProvider>
  )
}