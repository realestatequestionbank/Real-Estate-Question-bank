import { Metadata } from 'next'
import Script from 'next/script'
import { AuthProvider } from '@/contexts/auth-context'
import { AlcoholDrugsPageContent } from '@/components/alcohol-drugs/page-content'

// SEO Metadata
export const metadata: Metadata = {
    title: 'Alcohol & Drugs Driving Laws - FREE Practice Test 2026',
    description: 'Master DUI/DWI laws for your Real Estate Exam. Learn BAC limits, zero-tolerance laws, implied consent, and drug impairment. Free interactive quiz.',
    keywords: ['DUI laws', 'BAC limit', 'zero tolerance law', 'implied consent', 'drug impairment', 'real-estate drinking rules', 'open container laws', 'designated driver'],
    openGraph: {
        title: 'Alcohol & Drugs Driving Laws - Free Real Estate Exam Prep',
        description: 'Learn BAC limits, implied consent, and drug impairment laws. Free 10-question interactive quiz.',
        type: 'website',
        url: 'https://www.realestatequestionbank.com/alcohol-drugs',
        siteName: 'Real Estate Question Bank',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'DUI/DWI Laws Practice Test - Free Exam Prep',
        description: 'Master impaired driving laws. Free 10-question quiz with instant feedback.',
    },
    alternates: {
        canonical: 'https://www.realestatequestionbank.com/alcohol-drugs'
    }
}

// Structured Data
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What is the legal BAC limit?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "For drivers 21 and over, the legal limit is 0.08%. For drivers under 21, most states enforce zero-tolerance laws with limits of 0.01-0.02%."
            }
        },
        {
            "@type": "Question",
            "name": "What is implied consent?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "By obtaining a real estate license, you automatically consent to chemical testing (breath, blood, or urine) if suspected of DUI. Refusal results in automatic license suspension."
            }
        },
        {
            "@type": "Question",
            "name": "Can I drive after taking prescription medication?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Only if the medication does not impair your ability to drive. Many prescription drugs cause drowsiness or slow reaction time. Read labels and consult your doctor."
            }
        }
    ]
}

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Alcohol & Drugs Driving Laws Practice Test & Study Guide",
    "description": "Comprehensive guide to DUI/DWI laws including BAC limits, zero-tolerance, implied consent, and drug impairment with free interactive practice test.",
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

export default function AlcoholDrugsPage() {
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
                <AlcoholDrugsPageContent />
            </AuthProvider>
        </>
    )
}
