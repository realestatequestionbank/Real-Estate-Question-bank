'use client'

import { AuthProvider } from '@/contexts/auth-context'
import { ProfilePageContent } from '@/components/pages/profile-page'

export default function ProfilePage() {
  return (
    <AuthProvider>
      <ProfilePageContent />
    </AuthProvider>
  )
}