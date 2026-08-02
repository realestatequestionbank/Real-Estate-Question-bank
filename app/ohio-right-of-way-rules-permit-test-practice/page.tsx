import { Metadata } from 'next'
import Script from 'next/script'
import { AuthProvider } from '@/contexts/auth-context'
import { OhioRightOfWayContent } from '@/components/right-of-way/ohio-right-of-way-content'

const currentYear = new Date().getFullYear()

export const metadata: Metadata = {
    title: `Ohio BMV Right-of-Way Rules Temps Test ${currentYear} | Real Estate Question Bank`,
    description: `Master Ohio right-of-way laws: intersections yielding, roundabout navigation, Move Over Law, and school bus stopping rules. Free 25-question practice test.`,
    keywords: [
      'Ohio right-of-way rules',
      'Ohio roundabouts yielding',
      'Ohio Move Over law',
      'Ohio school bus stopping law',
      'Ohio intersection yielding',
      'free right-of-way practice test ohio',
      'ohio temps test questions',
    ],
    openGraph: {
        title: `Ohio BMV Right-of-Way Practice Test ${currentYear}`,
        description: 'Master Ohio right-of-way rules, intersections, roundabouts, and school bus stopping laws. Free 25-question interactive quiz.',
        type: 'website',
        url: 'https://www.realestatequestionbank.com/ohio-right-of-way-rules-permit-test-practice',
        siteName: 'Real Estate Question Bank',
    },
    alternates: {
        canonical: 'https://www.realestatequestionbank.com/ohio-right-of-way-rules-permit-test-practice'
    }
}

const FAQ_DATA = [
    {
        question: "Who has the right-of-way at roundabouts in Ohio?",
        answer: "Vehicles already inside the roundabout circular lane have the right-of-way. Entering vehicles must yield and wait for a safe gap before merging."
    },
    {
        question: "What is Ohio's school bus stopping law?",
        answer: "On roads with fewer than 4 lanes, all traffic approaching from either direction must stop at least 10 feet away when a school bus stops with its red lights flashing. On roads with 4 or more lanes, only traffic going in the same direction as the bus must stop."
    },
    {
        question: "What does the Move Over law require in Ohio?",
        answer: "When passing stationary emergency or utility vehicles with flashing lights on the roadside, you must shift over one lane if safe. If changing lanes is unsafe, you must slow down to a safe speed."
    },
    {
        question: "Who goes first at an uncontrolled intersection in Ohio?",
        answer: "If two vehicles arrive at the intersection at the same time, the driver on the left must yield the right-of-way to the vehicle on the right."
    }
]

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
    "headline": `Ohio BMV Right-of-Way Rules: Complete Guide & Practice Test ${currentYear}`,
    "description": "Learn essential Ohio right-of-way laws for roundabouts, school buses, intersections, and the Move Over law for the BMV written exam.",
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
    "datePublished": "2026-06-26",
    "dateModified": "2026-06-26"
}

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.realestatequestionbank.com"
        },
        {
            "@type": "ListItem",
            "position": 2,
            "name": "States",
            "item": "https://www.realestatequestionbank.com/#states"
        },
        {
            "@type": "ListItem",
            "position": 3,
            "name": "Ohio",
            "item": "https://www.realestatequestionbank.com/ohio-real-estate-practice-test"
        },
        {
            "@type": "ListItem",
            "position": 4,
            "name": "Right-of-Way Practice Test",
            "item": "https://www.realestatequestionbank.com/ohio-right-of-way-rules-permit-test-practice"
        }
    ]
}

export default function OhioRightOfWayPage() {
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
            <Script
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            <AuthProvider>
                <OhioRightOfWayContent faqData={FAQ_DATA} />
            </AuthProvider>
        </>
    )
}
