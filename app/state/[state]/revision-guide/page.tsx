'use client'

import { AuthProvider } from '@/contexts/auth-context'
import { RevisionGuidePageContent } from '@/components/pages/revision-guide-page'

interface PageProps {
  params: { state: string }
}

export default function RevisionGuidePage({ params }: PageProps) {
  return (
    <AuthProvider>
      <RevisionGuidePageContent state={params.state} />
    </AuthProvider>
  )
}