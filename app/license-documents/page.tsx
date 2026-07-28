import { Metadata } from 'next'
import { AuthProvider } from '@/contexts/auth-context'
import { LicenseDocumentsPageContent } from '@/components/pages/license-documents-page'

export const metadata: Metadata = {
  title: "What to Bring to the Real Estate real estate exam 2026 | Documents Checklist",
  description: "Find out exactly what to bring to the Real Estate Exam in your state. Personalized documents checklist for under 18, over 18, US citizens, and non-citizens.",
  keywords: [
    'what to bring to real-estate for real estate exam',
    'what to bring to the real-estate real estate exam',
    'what to bring to real-estate for real estate exam over 18',
    'what to bring to real-estate for real estate exam under 18',
    'what to take to real-estate real estate exam',
    'what documents do i need for real-estate real estate exam',
    'real-estate real estate exam documents checklist',
  ],
  alternates: { canonical: 'https://www.realestatequestionbank.com/license-documents' },
}

export default function LicenseDocumentsPage() {
  return (
    <AuthProvider>
      <LicenseDocumentsPageContent />
    </AuthProvider>
  )
}