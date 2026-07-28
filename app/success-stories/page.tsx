import { SuccessStoriesPageContent } from '@/components/pages/success-stories-page'
import { AuthProvider } from '@/contexts/auth-context'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Success Stories | Real Estate Question Bank',
    description: 'Real testimonials from students who passed their Real Estate Exam using our practice questions and study guides.',
    alternates: { canonical: 'https://www.realestatequestionbank.com/success-stories' },
}

export default function SuccessStoriesPage() {
    return (
        <AuthProvider>
            <SuccessStoriesPageContent />
        </AuthProvider>
    )
}
