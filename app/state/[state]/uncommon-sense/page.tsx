'use client'

import { AuthProvider } from '@/contexts/auth-context'
import { UncommonSensePageContent } from '@/components/pages/uncommon-sense-page'

interface PageProps {
  params: { state: string }
}

export default function UncommonSensePage({ params }: PageProps) {
  return (
    <AuthProvider>
      <UncommonSensePageContent state={params.state} />
    </AuthProvider>
  )
}