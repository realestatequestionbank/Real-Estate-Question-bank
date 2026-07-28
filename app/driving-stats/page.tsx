import { Metadata } from 'next'
import Script from 'next/script'
import { AuthProvider } from '@/contexts/auth-context'
import { DrivingStatsPageContent } from '@/components/driving-stats/page-content'

export const metadata: Metadata = {
    title: 'US Driving Statistics 2025 | Real Estate Question Bank',
    description: 'Latest 2025 driving statistics from NHTSA & IIHS. Interactive charts showing traffic fatalities, accident rates, DUI data, and state-by-state comparisons.',
    keywords: ['driving statistics 2025', 'US traffic data', 'NHTSA statistics', 'traffic fatalities 2024', 'accident statistics', 'DUI statistics'],
    openGraph: {
        title: 'US Driving Statistics 2025 - Interactive Dashboard',
        description: 'Real data from NHTSA & IIHS. Interactive charts showing traffic fatalities, accident rates, and driving trends.',
        type: 'website',
        url: 'https://www.realestatequestionbank.com/driving-stats',
        siteName: 'Real Estate Question Bank',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'US Driving Statistics 2025',
        description: 'Interactive dashboard with real NHTSA data on traffic fatalities, DUI arrests, and state comparisons.',
    },
    alternates: {
        canonical: 'https://www.realestatequestionbank.com/driving-stats'
    }
}

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "US Driving Statistics 2025",
    "description": "Comprehensive statistics about driving in America including traffic fatality data from NHTSA, IIHS crash rates, and state-by-state comparisons.",
    "author": {
        "@type": "Organization",
        "name": "Real Estate Question Bank"
    },
    "publisher": {
        "@type": "Organization",
        "name": "Real Estate Question Bank",
        "logo": {
            "@type": "ImageObject",
            "url": "https://www.realestatequestionbank.com/images/logo.png"
        }
    },
    "datePublished": "2025-01-01",
    "dateModified": "2025-01-21"
}

export default function DrivingStatsPage() {
    return (
        <>
            <Script
                id="article-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />

            <AuthProvider>
                <DrivingStatsPageContent />
            </AuthProvider>
        </>
    )
}
