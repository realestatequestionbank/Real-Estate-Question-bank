import { Metadata } from 'next'
import Script from 'next/script'
import { AuthProvider } from '@/contexts/auth-context'
import { SafeDrivingPageContent } from '@/components/safe-driving/page-content'

// SEO Metadata
export const metadata: Metadata = {
    title: 'Safe Driving Practices & Emergencies | Real Estate Question Bank',
    description: 'Learn essential defensive driving techniques, how to handle emergencies, and driving in bad weather. Free practice test included.',
    keywords: ['safe driving', 'defensive driving', 'real-estate practice test', 'driving emergencies', 'hydroplaning', 'fog driving', 'skid recovery', 'safe driving tips'],
    openGraph: {
        title: 'Safe Driving & Emergencies - Real Estate Question Bank',
        description: 'Master defensive driving and emergency maneuvers. Free interactive quiz included.',
        type: 'website',
        url: 'https://www.realestatequestionbank.com/safe-driving',
        siteName: 'Real Estate Question Bank',
        images: [
            {
                url: '/images/concepts/safe-driving.png',
                width: 1200,
                height: 630,
                alt: 'Safe Driving Practices Guide'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Safe Driving & Emergencies Practice Test',
        description: 'Master defensive driving and emergency maneuvers. Free interactive quiz with instant feedback.',
        images: ['/images/concepts/safe-driving.png']
    },
    alternates: {
        canonical: 'https://www.realestatequestionbank.com/safe-driving'
    }
}

// Structured Data
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What is defensive driving?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Defensive driving means constantly scanning for hazards, maintaining space, and predicting other drivers' mistakes to avoid accidents before they happen."
            }
        },
        {
            "@type": "Question",
            "name": "How much following distance do I need?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "The '3-Second Rule' is standard. Pick a fixed object; when the car ahead passes it, count 3 seconds. If you pass it before you finish counting, you're too close."
            }
        },
        {
            "@type": "Question",
            "name": "What should I do if I skid?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Do NOT brake hard. Ease off the gas, and steer in the direction you want to go. If you have ABS, apply steady pressure to the brakes only after regaining traction."
            }
        },
        {
            "@type": "Question",
            "name": "When are roads most slippery during rain?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "During the first 10-15 minutes of rainfall. Oil and dust on the road mix with water to create a very slick surface."
            }
        }
    ]
}

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Safe Driving Practices: Complete Guide & Practice Test",
    "description": "Learn essential defensive driving, emergency maneuvers, and bad weather driving techniques for the Real Estate Exam.",
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
    "dateModified": "2026-02-01"
}

export default function SafeDrivingPage() {
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
                <SafeDrivingPageContent />
            </AuthProvider>
        </>
    )
}
