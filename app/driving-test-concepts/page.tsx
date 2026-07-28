import { Metadata } from 'next'
import Script from 'next/script'
import { AuthProvider } from '@/contexts/auth-context'
import { ConceptsPageContent } from '@/components/concepts/page-content'

// SEO Metadata
// SEO Metadata
export const metadata: Metadata = {
    title: 'Real Estate real estate exam Study Guide | Essential Topics & Concepts | Real Estate Question Bank',
    description: 'The ultimate Real Estate Exam study guide. Master essential topics including Fines & Limits, Road Signs (Signs & Signals), Right-of-Way Rules, and Safe Driving practices. Free, topic-specific practice tests included.',
    keywords: ['Real Estate Exam study guide', 'Real Estate study guide', 'driving test topics', 'real estate exam cheat sheet', 'road signs test', 'right of way rules', 'traffic fines', 'safe driving concepts'],
    openGraph: {
        title: 'Real Estate real estate exam Study Guide - Master Essential Topics',
        description: 'The ultimate study guide for your Real Estate Exam. Master essential concepts like Fines, Road Signs, and Right-of-Way rules with free practice tests.',
        type: 'website',
        url: 'https://www.realestatequestionbank.com/driving-test-concepts',
        siteName: 'Real Estate Question Bank',
        images: [
            {
                url: '/images/og-concepts.webp',
                width: 1200,
                height: 630,
                alt: 'Real Estate real estate exam Study Guide'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Real Estate real estate exam Study Guide',
        description: 'Master essential Real Estate Exam topics with our comprehensive study guide and free practice tests.',
        images: ['/images/og-concepts.webp']
    },
    alternates: {
        canonical: 'https://www.realestatequestionbank.com/driving-test-concepts'
    }
}

// FAQ Data for structured data
const FAQ_DATA = [
    {
        question: "What topics are covered on the Real Estate Exam?",
        answer: "The Real Estate Exam covers road signs, traffic laws, right-of-way rules, speed limits and fines, safe driving practices, and state-specific regulations. Most questions focus on road signs (about 30%), traffic rules (25%), and right-of-way situations (20%)."
    },
    {
        question: "How many questions are typically on a Real Estate Exam?",
        answer: "Most states have between 25-50 questions on the real estate exam. You typically need to score 80-85% to pass, depending on your state's requirements."
    },
    {
        question: "What is the most missed topic on the Real Estate Exam?",
        answer: "Right-of-way rules and road signs are the most commonly missed topics. Many test-takers struggle with 4-way stop procedures, yield situations, and less common warning signs."
    },
    {
        question: "How should I study for the Real Estate Exam?",
        answer: "Focus on your state's driver handbook, practice with topic-specific quizzes, and pay special attention to road signs, fines & limits, and right-of-way rules. Our free practice tests cover all essential concepts."
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

const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Real Estate real estate exam Study Guide",
    "description": "Essential topics and concepts for the Real Estate Exam including road signs, fines & limits, and right-of-way rules.",
    "url": "https://www.realestatequestionbank.com/driving-test-concepts",
    "publisher": {
        "@type": "Organization",
        "name": "Real Estate Question Bank",
        "logo": {
            "@type": "ImageObject",
            "url": "https://www.realestatequestionbank.com/images/logo.png"
        }
    },
    "hasPart": [
        {
            "@type": "Article",
            "name": "Fines & Limits Guide",
            "url": "https://www.realestatequestionbank.com/driving-test-concepts/fines-and-limits"
        },
        {
            "@type": "Article",
            "name": "Road Signs Test",
            "url": "https://www.realestatequestionbank.com/driving-test-concepts/road-sign-test"
        },
        {
            "@type": "Article",
            "name": "Right-of-Way Rules",
            "url": "https://www.realestatequestionbank.com/driving-test-concepts/right-of-way-rules"
        },
        {
            "@type": "Article",
            "name": "Parking Rules",
            "url": "https://www.realestatequestionbank.com/driving-test-concepts/parking-rules"
        },
        {
            "@type": "Article",
            "name": "Alcohol & Drugs",
            "url": "https://www.realestatequestionbank.com/driving-test-concepts/alcohol-drugs"
        },
        {
            "@type": "Article",
            "name": "Traffic Signals",
            "url": "https://www.realestatequestionbank.com/driving-test-concepts/traffic-signals"
        }
    ]
}

export default function ConceptsPage() {
    return (
        <>
            {/* Structured Data */}
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Script
                id="collection-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
            />

            <AuthProvider>
                <ConceptsPageContent />
            </AuthProvider>
        </>
    )
}
