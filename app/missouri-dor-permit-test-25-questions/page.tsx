import { Metadata } from 'next'
import Script from 'next/script'
import { AuthProvider } from '@/contexts/auth-context'
import { StatePermitTestContent } from '@/components/state-permit-test/StatePermitTestContent'
import {
    missouriPermitTestConfig as config,
    missouriPermitTestQuestions as questions,
    missouriPermitTestFaq as faqData,
} from '@/lib/data/state-permit-tests/missouri'

// SEO Metadata
export const metadata: Metadata = {
    title: `FREE Missouri DOR Real Estate Practice Test 2026 — 25 Questions | Real Estate Question Bank`,
    description: 'Take a free 25-question Missouri Real Estate practice test matching the real format. Covers real estate principles, licensing laws, contracts, agency disclosures, and property math. Updated for 2026.',
    keywords: [
        'missouri real-estate practice test 25 questions',
        'missouri real estate exam',
        'missouri real estate exam practice',
        'missouri real estate license test',
        'how to pass real estate exam in Missouri'
    ],
    openGraph: {
        title: `FREE Missouri DOR Real Estate Practice Test 2026 — 25 Questions`,
        description: 'Take a free 25-question Missouri Real Estate practice test matching the real format. Covers real estate principles, licensing laws, contracts, agency disclosures, and property math. Updated for 2026.',
        type: 'website',
        url: `https://www.realestatequestionbank.com${config.pageUrl}`,
        siteName: 'Real Estate Question Bank',
        images: [
            {
                url: '/images/cover-image.png',
                width: 1200,
                height: 630,
                alt: 'Missouri DOR Real Estate Practice Test 25 Questions'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: `Missouri DOR Real Estate Practice Test 2026 — 25 Questions`,
        description: 'Free 25-question Missouri DOR real estate practice test. Need 20/25 to pass (80%). Updated for 2026.',
        images: ['/images/cover-image.png']
    },
    alternates: {
        canonical: `https://www.realestatequestionbank.com${config.pageUrl}`
    }
}

// Structured Data Schemas
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
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
    "headline": "Missouri DOR Real Estate Practice Test 2026 — 25 Questions, Answers & Explanations",
    "description": "Take a free 25-question Missouri Real Estate practice test matching the real format. Covers real estate principles, licensing laws, contracts, agency disclosures, and property math.",
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
            "name": "Missouri",
            "item": `https://www.realestatequestionbank.com${config.mainPageUrl}`
        },
        {
            "@type": "ListItem",
            "position": 4,
            "name": "25-Question Real Estate Practice Test",
            "item": `https://www.realestatequestionbank.com${config.pageUrl}`
        }
    ]
}

export default function MissouriPermitTest25QuestionsPage() {
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
            <Script
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            <AuthProvider>
                <StatePermitTestContent config={config} questions={questions} faqData={faqData} />
            </AuthProvider>
        </>
    )
}
