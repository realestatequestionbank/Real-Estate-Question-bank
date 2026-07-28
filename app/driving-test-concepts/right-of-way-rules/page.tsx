import { Metadata } from 'next'
import Script from 'next/script'
import { AuthProvider } from '@/contexts/auth-context'
import { RightOfWayPageContent } from '@/components/right-of-way/page-content'

// SEO Metadata
export const metadata: Metadata = {
    title: 'Right-of-Way Rules - FREE Practice Test | Real Estate Question Bank',
    description: 'Master right-of-way rules for your Real Estate Exam. Learn who goes first at 4-way stops, roundabouts, and crosswalks. Take our free 25-question practice test.',
    keywords: ['right of way rules', '4-way stop rules', 'roundabout rules', 'pedestrian right of way', 'uncontrolled intersection', 'who goes first driving', 'yielding rules'],
    openGraph: {
        title: 'Right-of-Way Rules | Free Practice Test & Complete Guide',
        description: 'Master right-of-way rules for your Real Estate Exam. Free 25-question interactive quiz with instant feedback.',
        type: 'website',
        url: 'https://www.realestatequestionbank.com/right-of-way-rules',
        siteName: 'Real Estate Question Bank',
        images: [
            {
                url: '/images/right-of-way/4-way-stop.webp',
                width: 1024,
                height: 1024,
                alt: 'Right of Way Rules - 4-Way Stop Intersection'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Right-of-Way Rules | Free Practice Test',
        description: 'Master right-of-way rules for your Real Estate Exam. Take our free 25-question quiz.',
        images: ['/images/right-of-way/4-way-stop.webp']
    },
    alternates: {
        canonical: 'https://www.realestatequestionbank.com/right-of-way-rules'
    }
}

// FAQ Data for structured data
const FAQ_DATA = [
    {
        question: "Who has the right-of-way at a 4-way stop?",
        answer: "The first vehicle to arrive and stop has the right-of-way. If two vehicles arrive at the same time, the vehicle on the right goes first."
    },
    {
        question: "Do pedestrians always have the right-of-way?",
        answer: "Pedestrians have the right-of-way at all marked and unmarked crosswalks. However, pedestrians must also follow traffic signals and not suddenly enter a roadway."
    },
    {
        question: "Who yields at a roundabout?",
        answer: "Vehicles entering the roundabout must yield to traffic already circulating inside. Never stop inside a roundabout to let someone in."
    },
    {
        question: "When must I stop for a school bus?",
        answer: "You must stop when a school bus displays flashing red lights, unless you are on the opposite side of a divided highway with a physical barrier."
    },
    {
        question: "What should I do when an emergency vehicle approaches?",
        answer: "Pull to the right side of the road and stop until the emergency vehicle has passed. If you're in an intersection, clear it first, then pull over."
    },
    {
        question: "Who goes first at an uncontrolled intersection?",
        answer: "At intersections without signs or signals, yield to any vehicle already in the intersection. If you arrive at the same time, yield to the vehicle on your right."
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
    "headline": "Right-of-Way Rules: Complete Guide & Practice Test",
    "description": "Learn essential right-of-way rules for intersections, roundabouts, pedestrians, and emergency vehicles.",
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

export default function RightOfWayPage() {
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
                <RightOfWayPageContent />
            </AuthProvider>
        </>
    )
}
