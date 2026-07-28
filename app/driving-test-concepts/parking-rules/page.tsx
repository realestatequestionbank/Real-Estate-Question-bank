import { Metadata } from 'next'
import Script from 'next/script'
import { AuthProvider } from '@/contexts/auth-context'
import { ParkingRulesPageContent } from '@/components/parking-rules/page-content'

// SEO Metadata
export const metadata: Metadata = {
    title: 'Parking Rules & Regulations - FREE Practice Test 2026',
    description: 'Master parking rules for your Real Estate Exam. Learn curb color meanings, distance requirements, and hill parking techniques. Free interactive practice quiz.',
    keywords: ['parking rules', 'curb colors', 'uphill parking', 'downhill parking', 'fire hydrant parking distance', 'no parking zones', 'parallel parking steps'],
    openGraph: {
        title: 'Parking Rules & Regulations - Free Real Estate Exam Prep',
        description: 'Learn parking rules: curb colors, distances, hill parking. Free 10-question interactive quiz.',
        type: 'website',
        url: 'https://www.realestatequestionbank.com/parking-rules',
        siteName: 'Real Estate Question Bank',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Parking Rules Practice Test - Free Exam Prep',
        description: 'Master parking regulations. Free 10-question quiz with instant feedback.',
    },
    alternates: {
        canonical: 'https://www.realestatequestionbank.com/parking-rules'
    }
}

// Structured Data
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What do curb colors mean?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Red = No parking/stopping, Blue = Disabled parking only, White = Passenger loading/unloading only, Yellow = Commercial loading/unloading only, Green = Short-term parking (usually 15-30 minutes)."
            }
        },
        {
            "@type": "Question",
            "name": "How far should I park from a fire hydrant?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "You must park at least 15 feet away from a fire hydrant in most states. This ensures emergency vehicles can access water quickly."
            }
        },
        {
            "@type": "Question",
            "name": "Which way do I turn my wheels when parking on a hill?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Uphill with curb: turn wheels AWAY from curb. Downhill with curb: turn wheels TOWARD the curb. Uphill without curb: turn wheels TOWARD the road edge."
            }
        }
    ]
}

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Parking Rules & Regulations Practice Test & Study Guide",
    "description": "Comprehensive guide to parking rules including curb colors, distance requirements, and hill parking with free interactive practice test.",
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
    "datePublished": "2026-01-21",
    "dateModified": "2026-01-21"
}

export default function ParkingRulesPage() {
    return (
        <>
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Script
                id="article-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />

            <AuthProvider>
                <ParkingRulesPageContent />
            </AuthProvider>
        </>
    )
}
