'use client'

import { AuthProvider } from '@/contexts/auth-context'
import { MockTestPageContent } from '@/components/pages/mock-test-page'

interface PageProps {
  params: { state: string }
}

export default function MockTestPage({ params }: PageProps) {
  return (
    <AuthProvider>
      <MockTestPageContent state={params.state} />
    </AuthProvider>
  )
}