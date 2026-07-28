import { Metadata } from 'next'
import Script from 'next/script'
import { AuthProvider } from '@/contexts/auth-context'
import { OhioTeensPermitTestContent } from '@/components/teens/ohio-teens-permit-test-content'

const currentYear = new Date().getFullYear()

export const metadata: Metadata = {
    title: `Ohio GDL & Teen Permit Practice Test ${currentYear} | Real Estate Question Bank`,
    description: `Ultimate step-by-step guide for Ohio teen drivers. Learn Ohio GDL curfew rules, passenger limits, real estate exam prep, and temporary permit requirements. Free practice test.`,
    keywords: [
      'Ohio teen permit requirements',
      'Ohio GDL curfew laws',
      'Ohio temps curfew under 18',
      'Ohio supervised driving log hours',
      'Ohio real estate exam prep requirements',
      'Ohio passenger restrictions probationary license',
      'free bmv practice test for teens ohio',
    ],
    openGraph: {
        title: `Ohio Teen Permit Practice Test & GDL Guide ${currentYear}`,
        description: 'Complete GDL roadmap and temps test prep for Ohio teens and parents. Free GDL practice test.',
        type: 'website',
        url: 'https://www.realestatequestionbank.com/ohio-teens-permit-test',
        siteName: 'Real Estate Question Bank',
    },
    alternates: {
        canonical: 'https://www.realestatequestionbank.com/ohio-teens-permit-test'
    }
}

const FAQ_DATA = [
    {
        question: "How old do you have to be to get a temporary permit (temps) in Ohio?",
        answer: "In Ohio, you must be at least 15 and a half (15 years and 6 months) years old to apply for your Temporary Instruction Permit Identification Card (TIPIC)."
    },
    {
        question: "What are the curfew hours for a 16-year-old probationary driver in Ohio?",
        answer: "For the first 12 months after getting a probationary license, a 16-year-old driver cannot drive between midnight and 6 a.m. unless accompanied by a parent/guardian or traveling to/from school or work."
    },
    {
        question: "How many hours of practice driving are required for Ohio teens?",
        answer: "Ohio GDL laws require teens under 18 to complete at least 50 hours of supervised driving practice, with at least 10 of those hours completed at night, certified by a parent or guardian."
    },
    {
        question: "What passenger restrictions apply to Ohio probationary drivers?",
        answer: "During the first 12 months of holding a probationary license, a driver under 18 is restricted to carrying no more than one passenger who is not an immediate family member, unless accompanied by a parent/guardian."
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
    "headline": `Ohio GDL & Teen Permit Guide: Checklist & Practice Test ${currentYear}`,
    "description": "Learn essential Ohio GDL rules, age requirements, curfews, log hours, and seatbelt laws for the BMV written exam.",
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
            "name": "Teens GDL Practice Test",
            "item": "https://www.realestatequestionbank.com/ohio-teens-permit-test"
        }
    ]
}

export default function OhioTeensPage() {
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
                <OhioTeensPermitTestContent faqData={FAQ_DATA} />
            </AuthProvider>
        </>
    )
}
