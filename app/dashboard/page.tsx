'use client'

import { AuthProvider } from '@/contexts/auth-context'
import { DashboardPageContent } from '@/components/pages/dashboard-page'

export default function DashboardPage() {
  return (
    <AuthProvider>
      <DashboardPageContent />
    </AuthProvider>
  )
}