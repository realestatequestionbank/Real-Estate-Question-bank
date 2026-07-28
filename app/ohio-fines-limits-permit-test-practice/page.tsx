import { Metadata } from 'next'
import Script from 'next/script'
import { AuthProvider } from '@/contexts/auth-context'
import { OhioFinesLimitsContent } from '@/components/fines-and-limits/ohio-fines-limits-content'

const currentYear = new Date().getFullYear()

export const metadata: Metadata = {
    title: `Ohio BMV Fines and Limits Temps Test ${currentYear} | Real Estate Question Bank`,
    description: `Master Ohio speed limits, BMV fines, GDL rules, OVI laws, and the point system. Free 25-question practice test for the ${currentYear} Ohio BMV written exam.`,
    keywords: [
      'Ohio speed limits',
      'Ohio BMV points system',
      'Ohio OVI penalties',
      'Ohio seatbelt fines',
      'Ohio temp test questions',
      'Ohio GDL restrictions',
      'Ohio double fines construction zones',
      'free bmv practice real estate exam ohio',
    ],
    openGraph: {
        title: `Ohio BMV Fines & Limits Practice Test ${currentYear}`,
        description: 'Master Ohio traffic fines, speed limits, and points. Free 25-question interactive quiz with instant feedback.',
        type: 'website',
        url: 'https://www.realestatequestionbank.com/ohio-fines-limits-permit-test-practice',
        siteName: 'Real Estate Question Bank',
    },
    alternates: {
        canonical: 'https://www.realestatequestionbank.com/ohio-fines-limits-permit-test-practice'
    }
}

const FAQ_DATA = [
    {
        question: "What is the speed limit in Ohio school zones?",
        answer: "Ohio school zones have a 20 mph speed limit during school hours when children are present, recess is in progress, or during arrival/dismissal times. Fines for speeding in school zones are doubled."
    },
    {
        question: "What is the legal BAC limit for drivers under 21 in Ohio?",
        answer: "Ohio has a Zero Tolerance Policy for drivers under 21. The legal limit is 0.02% blood alcohol concentration (BAC). Operating a vehicle with a BAC at or above this limit will result in an underage OVI charge."
    },
    {
        question: "How does the Ohio BMV point system work?",
        answer: "Ohio BMV assigns points for traffic violations (ranging from 2 to 6 points). If you accumulate 12 or more points within a 2-year period, your license will be automatically suspended for 6 months."
    },
    {
        question: "What happens if I fail the Ohio temps test?",
        answer: "If you fail the Ohio written permit exam (temps test), you must wait at least 24 hours before you are allowed to retake it. There is no limit to the number of attempts, but you must pay the test fee for each retake."
    },
    {
        question: "What is the curfew for a 16-year-old driver in Ohio?",
        answer: "A 16-year-old licensed driver in Ohio cannot operate a vehicle between midnight and 6 a.m. unless accompanied by a parent/guardian, or driving to/from work or a school activity."
    },
    {
        question: "What is the curfew for a 17-year-old driver in Ohio?",
        answer: "A 17-year-old licensed driver in Ohio cannot operate a vehicle between 1 a.m. and 5 a.m., with the same exceptions as 16-year-olds (work, school, or accompanied by a parent)."
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
    "headline": `Ohio BMV Fines & Limits: Complete Guide & Practice Test ${currentYear}`,
    "description": "Learn essential Ohio rules about speed limits, fines, OVI penalties, and GDL restrictions for the BMV knowledge test.",
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
            "item": "https://www.realestatequestionbank.com/ohio-bmv-permit-test"
        },
        {
            "@type": "ListItem",
            "position": 4,
            "name": "Fines & Limits Practice Test",
            "item": "https://www.realestatequestionbank.com/ohio-fines-limits-permit-test-practice"
        }
    ]
}

export default function OhioFinesLimitsPage() {
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
                <OhioFinesLimitsContent faqData={FAQ_DATA} />
            </AuthProvider>
        </>
    )
}
