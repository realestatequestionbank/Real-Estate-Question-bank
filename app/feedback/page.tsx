import { AuthProvider } from '@/contexts/auth-context'
import { FeedbackPageContent } from '@/components/pages/feedback-page'

export default function FeedbackPage() {
  return (
    <AuthProvider>
      <FeedbackPageContent />
    </AuthProvider>
  )
}

export const metadata = {
  title: 'Feedback | Real Estate Question Bank',
  description: 'Share your experience and help us improve our Real Estate Exam preparation platform. Your feedback shapes our future updates.',
  keywords: 'Real Estate feedback, test preparation review, premium feedback, user experience',
}