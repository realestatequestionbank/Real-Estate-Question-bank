'use client'

import { AuthProvider } from '@/contexts/auth-context'
import { QuestionBankPageContent } from '@/components/pages/question-bank-page'

interface PageProps {
  params: { state: string }
}

export default function QuestionBankPage({ params }: PageProps) {
  return (
    <AuthProvider>
      <QuestionBankPageContent state={params.state} />
    </AuthProvider>
  )
}