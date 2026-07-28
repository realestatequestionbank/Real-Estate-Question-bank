import { Metadata } from 'next'
import Script from 'next/script'
import { AuthProvider } from '@/contexts/auth-context'
import { FinesAndLimitsPageContent } from '@/components/fines-and-limits/page-content'

// SEO Metadata
export const metadata: Metadata = {
    title: 'Fines & Speed Limits - FREE Practice Test | Real Estate Question Bank',
    description: 'Complete guide to US speed limits, traffic fines, the point system, DUI/DWI laws, real estate licenses, special zones, and what to do after a ticket. Free 25-question Real Estate practice test included.',
    keywords: ['speeding fines', 'speed limits', 'traffic points system', 'traffic ticket cost', 'license suspension', 'school zone speed limit', 'construction zone fines'],
    openGraph: {
        title: 'Fines & Limits - Free Practice Test & Guide',
        description: 'Master traffic fines and speed limits for your Real Estate Exam. Free 25-question interactive quiz with instant feedback.',
        type: 'website',
        url: 'https://www.realestatequestionbank.com/fines-and-limits',
        siteName: 'Real Estate Question Bank',
        images: [
            {
                url: '/images/fines-and-limits/speed-limit-65.webp',
                width: 1024,
                height: 1024,
                alt: 'Highway Speed Limit Sign 65 MPH'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Fines & Limits - Free Practice Test',
        description: 'Master traffic fines and speed limits. Take our free 25-question quiz.',
        images: ['/images/fines-and-limits/speed-limit-65.webp']
    },
    alternates: {
        canonical: 'https://www.realestatequestionbank.com/fines-and-limits'
    }
}

// FAQ Data for structured data
const FAQ_DATA = [
    {
        question: "How much is a speeding ticket on average?",
        answer: "Fines vary by state and court, but typical tickets for speeding range from $150 to $500 depending on how fast you were going and the location (e.g., school zone)."
    },
    {
        question: "Do traffic fines double in construction zones?",
        answer: "Yes, in almost all US states, fines are doubled in construction or maintenance zones when workers are present to ensure their safety."
    },
    {
        question: "What is the blood alcohol limit for drivers under 21?",
        answer: "Most states have a Zero Tolerance policy for drivers under 21. Any measurable amount of alcohol (usually 0.01% or 0.02% BAC) is illegal."
    },
    {
        question: "Is it illegal to drive 5 mph over the speed limit?",
        answer: "Technically yes. Speed limits are maximums. While officers may use discretion, you can be ticketed for any speed over the limit."
    },
    {
        question: "What happens if I don't pay a traffic ticket?",
        answer: "Failure to pay can result in additional fines, license suspension, and even an arrest warrant in some jurisdictions."
    },
    {
        question: "Can I go to traffic school for a ticket?",
        answer: "Many states allow you to attend traffic school or a defensive driving course to keep points off your record, typically once every 12 to 18 months."
    },
    {
        question: "How does the point system work?",
        answer: "Most states assign points to your driving record for each traffic violation. Accumulating too many points within a set period leads to consequences like mandatory courses, license suspension, or revocation."
    },
    {
        question: "What are the GDL phases for aspiring agents?",
        answer: "The Graduated Driver Licensing (GDL) system has three phases: real estate license (supervised driving), provisional license (limited unsupervised driving with restrictions), and full license (unrestricted driving privileges)."
    },
    {
        question: "What is implied consent?",
        answer: "Implied consent means that by driving on public roads, you have already agreed to submit to a chemical test (breath, blood, or urine) if an officer suspects you of DUI. Refusing the test typically results in automatic license suspension."
    },
    {
        question: "What should I do if I get a ticket in another state?",
        answer: "Through the Driver License Compact, most states share violation information. An out-of-state ticket will likely appear on your home-state record and may add points just as if you received it locally."
    }
]

// Structured Data Schemas
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_DATA.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
        }
    }))
}

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Fines & Limits: Complete Guide & Practice Test",
    "description": "Learn essential rules about speed limits, fines, DUIs, and penalty assessments for the Real Estate Exam.",
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

export default function FinesAndLimitsPage() {
    return (
        <>
            {/* Structured Data */}
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
                <FinesAndLimitsPageContent />
            </AuthProvider>
        </>
    )
}
