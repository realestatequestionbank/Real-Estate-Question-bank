import { Metadata } from 'next'
import Script from 'next/script'
import { AuthProvider } from '@/contexts/auth-context'
import { WashingtonRightOfWayContent } from '@/components/right-of-way/washington-right-of-way-content'

const currentYear = new Date().getFullYear()

// SEO Metadata
export const metadata: Metadata = {
    title: `Washington DOL Right-of-Way Rules real estate exam ${currentYear} | Real Estate Question Bank`,
    description: `Master Washington right-of-way rules for intersections, roundabouts, pedestrians, and emergency vehicles. Free 25-question practice test for the ${currentYear} Washington DOL knowledge exam.`,
    keywords: [
      'Washington right of way rules',
      'Washington 4-way stop',
      'Washington pedestrian laws',
      'Washington roundabout rules',
      'Washington emergency vehicle laws',
      'Washington school bus laws',
      'RCW 46.61',
      'how many questions are on the washington state written test',
      'wa dol practice tests',
],
    openGraph: {
        title: `Washington DOL Right-of-Way Rules Practice Test ${currentYear}`,
        description: 'Master Washington right-of-way rules for your DOL knowledge test. Free 25-question interactive quiz with instant feedback.',
        type: 'website',
        url: 'https://www.realestatequestionbank.com/washington-right-of-way-rules-permit-test-practice',
        siteName: 'Real Estate Question Bank',
        images: [
            {
                url: '/images/concepts/right-of-way.webp',
                width: 1200,
                height: 630,
                alt: 'Washington Right-of-Way Rules'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: `Washington Right-of-Way Rules Practice Test ${currentYear}`,
        description: 'Master Washington right-of-way rules. Take our free 25-question quiz.',
        images: ['/images/concepts/right-of-way.webp']
    },
    alternates: {
        canonical: 'https://www.realestatequestionbank.com/washington-right-of-way-rules-permit-test-practice'
    }
}

// Washington-specific FAQ Data
const FAQ_DATA = [
    {
        question: "Who has the right-of-way at a 4-way stop in Washington?",
        answer: "Under RCW 46.61.180, the first vehicle to arrive and stop has the right-of-way. If two vehicles arrive at the same time, the vehicle on the right goes first. If vehicles arrive simultaneously from opposite directions, the vehicle going straight or turning right has priority over one turning left."
    },
    {
        question: "Do pedestrians always have the right-of-way in Washington?",
        answer: "RCW 46.61.235 requires drivers to yield to pedestrians at all marked and unmarked crosswalks. Washington law also requires you to stop when a pedestrian steps off a curb and into a crosswalk — not just when they are in your lane. Blind pedestrians using white canes or guide dogs must always be given the right-of-way (RCW 46.61.240)."
    },
    {
        question: "Who yields at a Washington roundabout?",
        answer: "Vehicles entering a Washington roundabout must yield to traffic already circulating inside. Never stop inside a roundabout to let someone enter. Travel counter-clockwise and use your right turn signal when exiting. Washington has one of the highest concentrations of roundabouts in the western U.S., so this is a frequently tested topic on the DOL exam."
    },
    {
        question: "When must I stop for a school bus in Washington?",
        answer: "Under RCW 46.61.370, Washington law requires you to stop at least 20 feet from a school bus when it displays flashing red lights and extends its stop sign arm. You must stop in both directions unless you are on the opposite side of a divided highway with a physical median barrier. Washington allows camera enforcement on school buses, and fines can reach $394."
    },
    {
        question: "What is Washington's Move Over law?",
        answer: "RCW 46.61.212 requires drivers to move over one lane (away from the shoulder) when approaching a stopped emergency vehicle, tow truck, or WSDOT maintenance vehicle with flashing lights. If you cannot safely move over, you must reduce speed to a safe level. Fines in Washington start at $200 and increase for repeat violations."
    },
    {
        question: "Who goes first at an uncontrolled intersection in Washington?",
        answer: "At Washington intersections without signs or signals, yield to any vehicle already in the intersection (RCW 46.61.180). If you arrive at the same time as another vehicle, yield to the vehicle on your right. This is the same basic right-of-way rule used throughout the U.S."
    },
    {
        question: "What should I do when an emergency vehicle approaches in Washington?",
        answer: "Under RCW 46.61.210, pull to the right side of the road and stop until the emergency vehicle has passed. If you're in an intersection, clear it first, then pull over. Never stop in an intersection or block the emergency vehicle's path. Failure to yield to an emergency vehicle in Washington is a moving violation."
    },
    {
        question: "Can I turn left on a green light with oncoming traffic in Washington?",
        answer: "Yes, but you must yield to oncoming traffic (RCW 46.61.185). Washington law allows you to enter the intersection on a green light to prepare for a left turn, but you must wait until oncoming traffic clears before completing the turn. Only proceed immediately if you have a protected green arrow signal."
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
    "headline": `Washington DOL Right-of-Way Rules: Complete Guide & Practice Test ${currentYear}`,
    "description": "Learn essential Washington rules about right-of-way at intersections, roundabouts, pedestrian crossings, and emergency vehicles for the DOL knowledge test.",
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
    "datePublished": "2026-02-20",
    "dateModified": "2026-02-20"
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
            "name": "Washington",
            "item": "https://www.realestatequestionbank.com/washington-real-estate-practice-test"
        },
        {
            "@type": "ListItem",
            "position": 4,
            "name": "Right-of-Way Rules real estate exam Practice",
            "item": "https://www.realestatequestionbank.com/washington-right-of-way-rules-permit-test-practice"
        }
    ]
}

export default function WashingtonRightOfWayPage() {
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
                <WashingtonRightOfWayContent faqData={FAQ_DATA} />
            </AuthProvider>
        </>
    )
}
