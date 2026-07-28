'use client'

import { AuthProvider } from '@/contexts/auth-context'
import { RoadSignsPageContent } from '@/components/pages/road-signs-page'

interface PageProps {
  params: { state: string }
}

export default function RoadSignsPage({ params }: PageProps) {
  return (
    <AuthProvider>
      <RoadSignsPageContent state={params.state} />
    </AuthProvider>
  )
}