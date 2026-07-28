import { Metadata } from 'next'
import Script from 'next/script'
import { AuthProvider } from '@/contexts/auth-context'
import { TrafficSignalsPageContent } from '@/components/traffic-signals/page-content'

// SEO Metadata
export const metadata: Metadata = {
    title: 'Traffic Signals & Road Markings - FREE Practice Test 2026',
    description: 'Master traffic signals and road markings for your Real Estate Exam. Learn flashing lights, arrow signals, and lane markings. Free interactive quiz.',
    keywords: ['traffic lights', 'green arrow turn', 'flashing red light', 'solid white line', 'yellow lane markings', 'painted islands', 'traffic signal meanings'],
    openGraph: {
        title: 'Traffic Signals & Road Markings - Free Real Estate Exam Prep',
        description: 'Learn traffic lights, arrows, and road markings. Free 10-question interactive quiz.',
        type: 'website',
        url: 'https://www.realestatequestionbank.com/traffic-signals',
        siteName: 'Real Estate Question Bank',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Traffic Signals Practice Test - Free Exam Prep',
        description: 'Master traffic control devices. Free 10-question quiz with instant feedback.',
    },
    alternates: {
        canonical: 'https://www.realestatequestionbank.com/traffic-signals'
    }
}

// Structured Data
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What's the difference between a flashing red and flashing yellow light?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Flashing red = STOP (treat like a stop sign). Flashing yellow = CAUTION (slow down and proceed carefully). This is commonly tested."
            }
        },
        {
            "@type": "Question",
            "name": "Can I change lanes across a solid white line?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Technically yes, but it's discouraged. A solid white line indicates lane changes should be avoided. A double white line prohibits lane changes."
            }
        },
        {
            "@type": "Question",
            "name": "What does a green arrow mean when the main light is red?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "You may proceed ONLY in the direction of the arrow. The green arrow overrides the red light for that specific movement."
            }
        }
    ]
}

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Traffic Signals & Road Markings Practice Test & Study Guide",
    "description": "Comprehensive guide to traffic signals and road markings with free interactive practice test covering lights, arrows, and lane lines.",
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

export default function TrafficSignalsPage() {
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
                <TrafficSignalsPageContent />
            </AuthProvider>
        </>
    )
}
