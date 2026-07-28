'use client'

import { useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { AuthProvider } from '@/contexts/auth-context'
import { useAuth } from '@/contexts/auth-context'

function RedirectToDashboard() {
  const router = useRouter()
  const { user, isPremium, loading } = useAuth()
  
  useEffect(() => {
    if (!loading) {
      if (user && isPremium) {
        // Redirect premium users directly to dashboard
        router.replace('/dashboard')
      } else {
        // Redirect non-premium users to free version
        router.replace('/')
      }
    }
  }, [router, user, isPremium, loading])

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting to Premium Dashboard...</p>
      </div>
    </div>
  )
}

export default function StatePremiumPage() {
  return (
    <AuthProvider>
      <RedirectToDashboard />
    </AuthProvider>
  )
}