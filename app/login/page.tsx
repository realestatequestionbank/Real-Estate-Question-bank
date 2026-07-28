import type { Metadata } from 'next'
import { AuthProvider } from '@/contexts/auth-context'
import { LoginPageContent } from '@/components/pages/login-page'

export const metadata: Metadata = {
  title: 'Premium Sign In | Real Estate Question Bank',
  description: 'Sign in to your premium Real Estate Question Bank account to access your state-specific Real Estate practice tests, exam simulator, and analytics.',
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/login',
  },
}

export default function LoginPage() {
  return (
    <AuthProvider>
      <LoginPageContent />
    </AuthProvider>
  )
}
