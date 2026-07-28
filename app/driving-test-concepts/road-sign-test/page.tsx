import { Metadata } from 'next'
import Script from 'next/script'
import { AuthProvider } from '@/contexts/auth-context'
import { RoadSignPageContent } from '@/components/road-signs/page-content'

// SEO Metadata
export const metadata: Metadata = {
    title: 'Road Sign Practice Test - FREE Real Estate real estate exam 2026',
    description: 'Master road signs and their meanings for your Real Estate Exam. Learn about regulatory signs, warning signs, and sign shapes. Take our free interactive practice test.',
    keywords: ['road sign test', 'real-estate road signs', 'traffic sign meanings', 'permit practice test', 'regulatory signs', 'warning signs', 'road sign shapes'],
    openGraph: {
        title: 'Road Sign Practice Test - Free Real Estate Exam Prep',
        description: 'Master road signs (regulatory, warning, guide) for your real estate exam. Free interactive quiz with instant feedback.',
        type: 'website',
        url: 'https://www.realestatequestionbank.com/road-sign-test',
        siteName: 'Real Estate Question Bank',
        // Using a generic road sign image if available or one of the specifics
        images: [
            {
                url: '/road-sign-images/w3-3.png',
                width: 1024,
                height: 1024,
                alt: 'Road Sign Practice Test'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Road Sign Practice Test - Free Exam Prep',
        description: 'Test your knowledge of road signs. Free 10-question interactive quiz.',
        images: ['/road-sign-images/w3-3.png']
    },
    alternates: {
        canonical: 'https://www.realestatequestionbank.com/road-sign-test'
    }
}

// Structured Data
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "How many road sign questions are on the real estate exam?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Most states dedicate about 15-20% of the exam to road signs. You can expect to see at least 8-10 specific sign identification questions."
            }
        },
        {
            "@type": "Question",
            "name": "What is the difference between yellow and orange signs?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yellow signs are general warnings (curves, pedestrians, merger). Orange signs are strictly for construction and maintenance zones."
            }
        },
        {
            "@type": "Question",
            "name": "Are sign shapes important to memorize?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes! A sign's shape often tells you its meaning before you can read the text. For example, an octagon is ALWAYS a stop sign."
            }
        }
    ]
}

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Road Sign Practice Test & Study Guide",
    "description": "Comprehensive guide to US road signs, shapes, and colors with a free interactive practice test.",
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

export default function RoadSignTestPage() {
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
                <RoadSignPageContent />
            </AuthProvider>
        </>
    )
}
