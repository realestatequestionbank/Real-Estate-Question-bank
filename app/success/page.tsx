'use client'

import { useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { AuthProvider } from '@/contexts/auth-context'
import { SuccessPageContent } from '@/components/pages/success-page'

export default function SuccessPage() {
  return (
    <AuthProvider>
      <SuccessPageContent />
    </AuthProvider>
  )
}