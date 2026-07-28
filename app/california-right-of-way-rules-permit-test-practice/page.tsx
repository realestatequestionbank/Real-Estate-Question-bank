import { Metadata } from 'next'
import Script from 'next/script'
import { AuthProvider } from '@/contexts/auth-context'
import { CaliforniaRightOfWayContent } from '@/components/right-of-way/california-right-of-way-content'

const currentYear = new Date().getFullYear()

// SEO Metadata
export const metadata: Metadata = {
    title: `California Real Estate Right-of-Way Rules real estate exam ${currentYear} | Real Estate Question Bank`,
    description: `Master California right-of-way rules for intersections, roundabouts, pedestrians, and emergency vehicles. Free 25-question practice test for the ${currentYear} California Real Estate exam.`,
    keywords: [
      'California right of way rules',
      'California 4-way stop',
      'California pedestrian laws',
      'California roundabout rules',
      'California emergency vehicle laws',
      'California school bus laws',
      'california real estate exam requirements',
      'what to bring for real estate exam ca',
      'what to bring to california real estate exam',
],
    openGraph: {
        title: `California Real Estate Right-of-Way Rules Practice Test ${currentYear}`,
        description: 'Master California right-of-way rules for your Real Estate Exam. Free 25-question interactive quiz with instant feedback.',
        type: 'website',
        url: 'https://www.realestatequestionbank.com/california-right-of-way-rules-permit-test-practice',
        siteName: 'Real Estate Question Bank',
        images: [
            {
                url: '/images/concepts/right-of-way.webp',
                width: 1200,
                height: 630,
                alt: 'California Right-of-Way Rules'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: `California Right-of-Way Rules Practice Test ${currentYear}`,
        description: 'Master California right-of-way rules. Take our free 25-question quiz.',
        images: ['/images/concepts/right-of-way.webp']
    },
    alternates: {
        canonical: 'https://www.realestatequestionbank.com/california-right-of-way-rules-permit-test-practice'
    }
}

// California-specific FAQ Data
const FAQ_DATA = [
    {
        question: "Who has the right-of-way at a 4-way stop in California?",
        answer: "Under California Vehicle Code 21800, the first vehicle to arrive and stop has the right-of-way. If two vehicles arrive at the same time, the vehicle on the right goes first. This is a common test question."
    },
    {
        question: "Do pedestrians always have the right-of-way in California?",
        answer: "California Vehicle Code 21950 requires drivers to yield to pedestrians at all marked and unmarked crosswalks. Even if a pedestrian is jaywalking, you must stop to prevent injury. Pedestrians with white canes or guide dogs must always be given the right-of-way."
    },
    {
        question: "Who yields at a California roundabout?",
        answer: "Vehicles entering a California roundabout must yield to traffic already circulating inside. Never stop inside a roundabout to let someone in. Travel counter-clockwise and use your right turn signal when exiting."
    },
    {
        question: "When must I stop for a school bus in California?",
        answer: "California law requires you to stop when a school bus displays flashing red lights and extends its stop sign arm. You must stop in both directions unless you are on the opposite side of a divided highway with a physical barrier (raised median)."
    },
    {
        question: "What is California's Move-Over law?",
        answer: "California Vehicle Code 21809 requires drivers to move over one lane when passing a stopped emergency vehicle, tow truck, or Caltrans vehicle with flashing lights. If you cannot safely move over, you must slow down. Fines range from $50 to $400."
    },
    {
        question: "Who goes first at an uncontrolled intersection in California?",
        answer: "At California intersections without signs or signals, yield to any vehicle already in the intersection. If you arrive at the same time as another vehicle, yield to the vehicle on your right. This follows the basic right-of-way rule."
    },
    {
        question: "What should I do when an emergency vehicle approaches in California?",
        answer: "Pull to the right side of the road and stop until the emergency vehicle has passed. If you're in an intersection, clear it first, then pull over. Never stop in an intersection or block the emergency vehicle's path."
    },
    {
        question: "Can I turn left on a green light with oncoming traffic in California?",
        answer: "Yes, but you must yield to oncoming traffic. California law allows you to enter the intersection on a green light to prepare for a left turn, but you must wait until oncoming traffic clears before completing the turn. Only proceed immediately if you have a protected green arrow."
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
    "headline": `California Real Estate Right-of-Way Rules: Complete Guide & Practice Test ${currentYear}`,
    "description": "Learn essential California rules about right-of-way at intersections, roundabouts, pedestrian crossings, and emergency vehicles for the Real Estate Exam.",
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
    "datePublished": "2026-02-16",
    "dateModified": "2026-02-16"
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
            "name": "California",
            "item": "https://www.realestatequestionbank.com/california-real-estate-permit-test"
        },
        {
            "@type": "ListItem",
            "position": 4,
            "name": "Right-of-Way Rules real estate exam Practice",
            "item": "https://www.realestatequestionbank.com/california-right-of-way-rules-permit-test-practice"
        }
    ]
}

export default function CaliforniaRightOfWayPage() {
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
                <CaliforniaRightOfWayContent faqData={FAQ_DATA} />
            </AuthProvider>
        </>
    )
}
