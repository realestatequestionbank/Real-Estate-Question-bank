import { Metadata } from 'next'
import Script from 'next/script'
import { AuthProvider } from '@/contexts/auth-context'
import { TexasRightOfWayContent } from '@/components/right-of-way/texas-right-of-way-content'

const currentYear = new Date().getFullYear()

// SEO Metadata
export const metadata: Metadata = {
    title: `Texas DPS Right-of-Way Rules real estate exam ${currentYear} | Real Estate Question Bank`,
    description: `Master Texas right-of-way rules for intersections, roundabouts, pedestrians, and emergency vehicles. Free 25-question practice test for the ${currentYear} Texas DPS written knowledge exam.`,
    keywords: [
      'Texas right of way rules',
      'Texas 4-way stop',
      'Texas pedestrian laws',
      'Texas roundabout rules',
      'Texas emergency vehicle laws',
      'Texas school bus laws',
      'Texas Transportation Code 545',
      'dps driving test practice tests',
      'texas dps practice driving test',
      'texas driver license test questions',
      'tx dps practice driving test',
],
    openGraph: {
        title: `Texas DPS Right-of-Way Rules Practice Test ${currentYear}`,
        description: 'Master Texas right-of-way rules for your DPS knowledge test. Free 25-question interactive quiz with instant feedback.',
        type: 'website',
        url: 'https://www.realestatequestionbank.com/texas-right-of-way-rules-permit-test-practice',
        siteName: 'Real Estate Question Bank',
        images: [
            {
                url: '/images/concepts/right-of-way.webp',
                width: 1200,
                height: 630,
                alt: 'Texas Right-of-Way Rules'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: `Texas Right-of-Way Rules Practice Test ${currentYear}`,
        description: 'Master Texas right-of-way rules. Take our free 25-question quiz.',
        images: ['/images/concepts/right-of-way.webp']
    },
    alternates: {
        canonical: 'https://www.realestatequestionbank.com/texas-right-of-way-rules-permit-test-practice'
    }
}

// Texas-specific FAQ Data
const FAQ_DATA = [
    {
        question: "Who has the right-of-way at a 4-way stop in Texas?",
        answer: "Under Texas Transportation Code §545.153, the first vehicle to arrive and stop has the right-of-way. If two vehicles arrive at the same time, the vehicle on the right goes first. If vehicles arrive simultaneously from opposite directions, the vehicle going straight or turning right has priority over one turning left."
    },
    {
        question: "Do pedestrians always have the right-of-way in Texas?",
        answer: "Texas Transportation Code §552.003 requires drivers to yield to pedestrians at marked crosswalks. At any intersection — even without painted lines — an implied crosswalk exists and drivers must exercise due care. Texas also requires drivers to stop when a pedestrian using a white cane or guide dog is present at any intersection (§552.009)."
    },
    {
        question: "Who yields at a Texas roundabout?",
        answer: "Vehicles entering a Texas roundabout must yield to traffic already circulating inside. Never stop inside a roundabout to let another vehicle enter. Always travel counter-clockwise and use your right turn signal when exiting. TxDOT reports roundabouts reduce fatal and injury crashes by up to 82% compared to traditional intersections."
    },
    {
        question: "When must I stop for a school bus in Texas?",
        answer: "Texas Transportation Code §545.066 requires you to stop at least 20 feet from a school bus when it displays flashing red lights and extends its stop arm. You must stop in both directions unless you are on the opposite side of a divided highway with a physical median. First-offense fines range from $500–$1,250, with higher penalties for repeat violations."
    },
    {
        question: "What is Texas's Move Over law?",
        answer: "Texas Transportation Code §545.157 requires drivers to move over one lane when passing a stopped emergency vehicle, tow truck, or TxDOT vehicle with lights activated on the roadside. If you cannot safely change lanes, you must slow to 20 mph below the posted speed limit (minimum 5 mph). A first violation carries a fine up to $200, and if property damage or injury occurs, penalties are significantly higher."
    },
    {
        question: "Who goes first at an uncontrolled intersection in Texas?",
        answer: "At Texas intersections without signs or signals, you must yield to any vehicle already in the intersection (§545.151). If you arrive at the same time as another vehicle, yield to the vehicle on your right (§545.153). This right-of-way rule is consistent nationwide and appears frequently on the DPS knowledge test."
    },
    {
        question: "What should I do when an emergency vehicle approaches in Texas?",
        answer: "Under Texas Transportation Code §545.156, you must immediately drive to the right side of the road and stop until the emergency vehicle has passed. If you're in an intersection, clear it first, then pull over. Never stop in an intersection or block the emergency vehicle's path. Failure to yield is a moving violation in Texas."
    },
    {
        question: "Can I turn left on a green light with oncoming traffic in Texas?",
        answer: "Yes, but under Texas Transportation Code §545.152, you must yield to oncoming vehicles and pedestrians before completing the turn. You may enter the intersection on a green light to position for a left turn, but you must wait until oncoming traffic clears. Only proceed immediately if you have a protected green arrow (turn signal)."
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
    "headline": `Texas DPS Right-of-Way Rules: Complete Guide & Practice Test ${currentYear}`,
    "description": "Learn essential Texas rules about right-of-way at intersections, roundabouts, pedestrian crossings, and emergency vehicles for the DPS knowledge test.",
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
            "name": "Texas",
            "item": "https://www.realestatequestionbank.com/texas-dps-permit-test"
        },
        {
            "@type": "ListItem",
            "position": 4,
            "name": "Right-of-Way Rules real estate exam Practice",
            "item": "https://www.realestatequestionbank.com/texas-right-of-way-rules-permit-test-practice"
        }
    ]
}

export default function TexasRightOfWayPage() {
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
                <TexasRightOfWayContent faqData={FAQ_DATA} />
            </AuthProvider>
        </>
    )
}
