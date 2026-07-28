'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { AuthProvider } from '@/contexts/auth-context'
import { PremiumPracticePageContent } from '@/components/pages/premium-practice-page'
import { STATES, type StateKey } from '@/lib/constants'

export default function PremiumPracticePage() {
  const params = useParams()
  const router = useRouter()
  const stateParam = params?.state as string

  // Validate state parameter
  if (!stateParam || !(stateParam in STATES)) {
    router.push('/')
    return null
  }

  const state = stateParam as StateKey

  return (
    <AuthProvider>
      <PremiumPracticePageContent state={state} />
    </AuthProvider>
  )
}