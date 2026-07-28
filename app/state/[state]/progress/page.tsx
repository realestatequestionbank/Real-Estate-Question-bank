'use client'

import { AuthProvider } from '@/contexts/auth-context'
import { ProgressAnalyticsPageContent } from '@/components/pages/progress-analytics-page'

interface ProgressAnalyticsPageProps {
  params: {
    state: string
  }
}

export default function ProgressAnalyticsPage({ params }: ProgressAnalyticsPageProps) {
  return (
    <AuthProvider>
      <ProgressAnalyticsPageContent state={params.state} />
    </AuthProvider>
  )
}