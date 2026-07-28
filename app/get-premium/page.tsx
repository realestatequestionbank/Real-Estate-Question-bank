import type { Metadata } from 'next'
import { AuthProvider } from '@/contexts/auth-context'
import { GetPremiumPageContent } from '@/components/pages/get-premium-page'

export const metadata: Metadata = {
  title: 'Get Premium Access | Real Estate Question Bank',
  description: 'Sign up for premium Real Estate Exam preparation with unlimited practice questions, mock exams, and a pass guarantee.',
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/get-premium',
  },
}

export default function GetPremiumPage() {
  return (
    <AuthProvider>
      <GetPremiumPageContent />
    </AuthProvider>
  )
}
