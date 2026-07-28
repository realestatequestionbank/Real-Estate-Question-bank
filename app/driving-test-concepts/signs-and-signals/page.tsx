import { Metadata } from 'next'
import Script from 'next/script'
import { AuthProvider } from '@/contexts/auth-context'
import { SignsAndSignalsPageContent } from '@/components/signs-and-signals/page-content'

// SEO Metadata
export const metadata: Metadata = {
    title: 'Road Signs & Traffic Signals Practice Test | Real Estate Question Bank',
    description: 'Master road signs, traffic lights, and pavement markings. Learn the rules of the road with our free interactive practice test. Covers regulatory, warning, and guide signs.',
    keywords: ['road signs', 'traffic signals', 'real-estate practice test', 'road markings', 'traffic lights', 'regulatory signs', 'warning signs', 'road sign meanings', 'traffic sign test'],
    openGraph: {
        title: 'Road Signs & Signals Practice Test - Real Estate Question Bank',
        description: 'Comprehensive guide to road signs, traffic signals, and markings. Free interactive quiz included.',
        type: 'website',
        url: 'https://www.realestatequestionbank.com/signs-and-signals',
        siteName: 'Real Estate Question Bank',
        images: [
            {
                url: '/images/concepts/road-signs.webp',
                width: 1200,
                height: 630,
                alt: 'Road Signs and Signals Guide'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Road Signs & Signals Practice Test',
        description: 'Master road signs and traffic lights. Free interactive quiz with instant feedback.',
        images: ['/images/concepts/road-signs.webp']
    },
    alternates: {
        canonical: 'https://www.realestatequestionbank.com/signs-and-signals'
    }
}

// Structured Data
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What do the different shapes of road signs mean?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Octagon = Stop. Triangle = Yield. Diamond = Warning. Rectangle = Regulatory or Guide. Pentagon = School Zone. Circle = Railroad Crossing."
            }
        },
        {
            "@type": "Question",
            "name": "What does a flashing yellow light mean?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "A flashing yellow light means 'PROCEED WITH CAUTION'. You do not need to stop, but you should slow down and be alert for hazards."
            }
        },
        {
            "@type": "Question",
            "name": "What is the difference between white and yellow lane lines?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "White lines separate traffic moving in the SAME direction. Yellow lines separate traffic moving in OPPOSITE directions."
            }
        },
        {
            "@type": "Question",
            "name": "What does a solid yellow line mean?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "A solid yellow line on your side of the road means DO NOT PASS. If the line is broken (dashed), you may pass when safe."
            }
        },
        {
            "@type": "Question",
            "name": "What should I do at a red arrow light?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "A red arrow means you must STOP and cannot turn in the direction of the arrow until the light turns green. In some states, right-on-red-arrow is permitted after stopping, but generally, it is prohibited."
            }
        }
    ]
}

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Road Signs & Traffic Signals: Complete Guide & Practice Test",
    "description": "Learn essential road signs, traffic lights, and pavement markings for the Real Estate Exam.",
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

export default function SignsAndSignalsPage() {
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
                <SignsAndSignalsPageContent />
            </AuthProvider>
        </>
    )
}
