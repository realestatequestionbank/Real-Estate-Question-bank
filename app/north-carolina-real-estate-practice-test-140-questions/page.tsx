import { Metadata } from 'next'
import Script from 'next/script'
import { AuthProvider } from '@/contexts/auth-context'
import { Nc25QuestionsContent } from '@/components/nc-permit-test-25/nc-25-questions-content'

// SEO Metadata
export const metadata: Metadata = {
    title: `FREE NC Real Estate Real Estate Practice Test 2026 — 140 Questions | Real Estate Question Bank`,
    description: 'Free 140-question North Carolina Real Estate practice test. Matches the official exam format. Need 100/140 correct to pass (71%). Updated for 2026.',
    keywords: [
        'north real-estate practice test 140 questions',
        'north real estate exam',
        'north real estate exam practice',
        'north real estate license test',
        'how to pass real estate exam in North'
    ],
    openGraph: {
        title: `FREE NC Real Estate Real Estate Practice Test 2026 — 140 Questions`,
        description: 'Free 140-question North Carolina Real Estate practice test. Matches the official exam format. Need 100/140 correct to pass (71%). Updated for 2026.',
        type: 'website',
        url: 'https://www.realestatequestionbank.com/north-carolina-real-estate-practice-test-140-questions',
        siteName: 'Real Estate Question Bank',
        images: [
            {
                url: '/images/cover-image.png',
                width: 1200,
                height: 630,
                alt: 'NC Real Estate Real Estate Practice Test 140 Questions'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: `NC Real Estate Real Estate Practice Test 2026 — 140 Questions`,
        description: 'Free 140-question North Carolina Real Estate practice test. Matches the official exam format. Need 100/140 correct to pass (71%). Updated for 2026.',
        images: ['/images/cover-image.png']
    },
    alternates: {
        canonical: 'https://www.realestatequestionbank.com/north-carolina-real-estate-practice-test-140-questions'
    }
}

// FAQ Data
const FAQ_DATA = [
    {
        question: "How many questions are on the NC Real Estate Exam?",
        answer: "The NC Real Estate Exam has 25 multiple-choice questions on traffic laws and safe driving, plus a separate 8-question road signs identification test. You must pass both tests at the same NCRealEstate visit."
    },
    {
        question: "What score do you need to pass the NC real estate exam?",
        answer: "You need 20/25 (80%) on the knowledge test and 6/8 (75%) on the road signs test. Both tests must be passed at the same NCRealEstate visit."
    },
    {
        question: "How many questions can you miss on the NC real estate exam?",
        answer: "You can miss up to 5 questions on the 140-question knowledge test. Missing 6 or more means you fail and must wait 7 days before retaking."
    },
    {
        question: "Is there a time limit on the NC real estate exam?",
        answer: "No. The NCRealEstate does not impose a time limit on the permit knowledge test. Take your time on each question — but don't overthink it."
    },
    {
        question: "Can I take the NC real estate exam online?",
        answer: "No. As of 2026, all NC Real Estate knowledge tests must be taken in person at an NCRealEstate real estate license office. Schedule an appointment on the NCRealEstate website."
    },
    {
        question: "What is the NC Move Over law?",
        answer: "NC's Move Over law (G.S. 20-157) requires drivers to move one lane away from any stopped emergency, law enforcement, towing, or utility vehicle with flashing lights. If a lane change isn't safely possible, slow to a safe speed. Violating this law is a moving violation and is frequently tested."
    },
    {
        question: "What happens if I fail the NC real estate exam?",
        answer: "If you fail, you must wait 7 calendar days before retaking. Use that time to study the sections where you struggled. Consistently scoring 90%+ on practice tests before your appointment is the best way to pass on the first try."
    },
    {
        question: "What is NC's zero tolerance law for teen drivers?",
        answer: "Any driver under 21 caught with any measurable amount of alcohol faces a 30-day civil license revocation, regardless of whether they appear impaired. This is stricter than the 0.08% BAC standard that applies to adult drivers."
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
    "headline": "NC Real Estate Real Estate Practice Test 2026 — 140 Questions, Answers & Explanations",
    "description": "Take a free 140-question North Real Estate practice test matching the real format. Covers real estate principles, licensing laws, contracts, agency disclosures, and property math.",
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
    "datePublished": "2026-05-02",
    "dateModified": "2026-05-02"
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
            "name": "North Carolina",
            "item": "https://www.realestatequestionbank.com/north-carolina-real-estate-practice-test"
        },
        {
            "@type": "ListItem",
            "position": 4,
            "name": "25-Question Real Estate Practice Test",
            "item": "https://www.realestatequestionbank.com/north-carolina-real-estate-practice-test-140-questions"
        }
    ]
}

export default function NcPermitTest25QuestionsPage() {
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
                <Nc25QuestionsContent faqData={FAQ_DATA} />
            </AuthProvider>
        </>
    )
}
