import { Metadata } from 'next'
import { AuthProvider } from '@/contexts/auth-context'
import { RoadWarningSignsPageContent } from '@/components/road-warning-signs/page-content'

export const metadata: Metadata = {
    title: 'Road Warning Signs — Meanings & Real Estate Test Guide 2026 | Real Estate Question Bank',
    description: 'Learn every road warning sign used in all US states. Yellow diamond signs explained with images and meanings — essential for passing your Real Estate Exam.',
    keywords: [
        'road warning signs',
        'road signs meanings',
        'yellow diamond signs',
        'Real Estate Exam road signs',
        'warning sign meanings',
        'driving test road signs',
        'pennant shaped signs',
        'divided highway ends sign',
        'divided highway ahead sign',
        'diamond shaped sign',
    ],
    openGraph: {
        title: 'Road Warning Signs — Meanings & Real Estate Test Guide 2026',
        description: 'Learn every road warning sign used in all US states. Essential for your Real Estate Exam.',
        images: ['/images/og-warning-signs.jpg']
    },
    alternates: {
        canonical: 'https://www.realestatequestionbank.com/road-warning-signs'
    }
}

export default function RoadWarningSignsPage() {
    return (
        <AuthProvider>
            <RoadWarningSignsPageContent />
        </AuthProvider>
    )
}
