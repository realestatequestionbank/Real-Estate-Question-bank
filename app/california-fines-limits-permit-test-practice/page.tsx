import { Metadata } from 'next'
import Script from 'next/script'
import { AuthProvider } from '@/contexts/auth-context'
import { CaliforniaFinesLimitsContent } from '@/components/fines-and-limits/california-fines-limits-content'

const currentYear = new Date().getFullYear()

// SEO Metadata
export const metadata: Metadata = {
    title: `California Real Estate Fines and Limits real estate exam ${currentYear} | Real Estate Question Bank`,
    description: `Master California speed limits, traffic fines, DUI laws, and the point system. Free 25-question practice test for the ${currentYear} California Real Estate exam.`,
    keywords: [
      'California speeding fines',
      'California speed limits',
      'California Real Estate point system',
      'California DUI penalties',
      'California traffic ticket cost',
      'California school zone speed limit',
      'california real estate exam requirements',
      'what to bring for real estate exam ca',
      'what to bring to california real estate exam',
],
    openGraph: {
        title: `California Real Estate Fines \u0026 Limits Practice Test ${currentYear}`,
        description: 'Master California traffic fines and speed limits for your Real Estate Exam. Free 25-question interactive quiz with instant feedback.',
        type: 'website',
        url: 'https://www.realestatequestionbank.com/california-fines-limits-permit-test-practice',
        siteName: 'Real Estate Question Bank',
        images: [
            {
                url: '/images/fines-and-limits/speed-limit-65.webp',
                width: 1024,
                height: 1024,
                alt: 'Highway Speed Limit Sign 65 MPH'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: `California Fines \u0026 Limits Practice Test ${currentYear}`,
        description: 'Master California traffic fines and speed limits. Take our free 25-question quiz.',
        images: ['/images/fines-and-limits/speed-limit-65.webp']
    },
    alternates: {
        canonical: 'https://www.realestatequestionbank.com/california-fines-limits-permit-test-practice'
    }
}

// California-specific FAQ Data
const FAQ_DATA = [
    {
        question: "What is the speed limit in California school zones?",
        answer: "California school zones have a 25 mph speed limit when children are present or during posted hours (typically 30 minutes before and after school). Some school zones use flashing beacons to indicate when the reduced speed limit is in effect."
    },
    {
        question: "How much is a speeding ticket in California?",
        answer: "California speeding ticket base fines range from $35 for 1-15 mph over to $100+ for 26+ mph over. However, with penalty assessments, court fees, and surcharges, the total cost is typically 4-5x the base fine. A $35 base fine often becomes $150-$200 total."
    },
    {
        question: "What is California's Basic Speed Law?",
        answer: "California's Basic Speed Law (Vehicle Code 22350) states you must never drive faster than is safe for current conditions, regardless of the posted limit. Even if the speed limit is 65 mph, driving that fast in fog, rain, or heavy traffic can be illegal if it's unsafe."
    },
    {
        question: "What are the penalties for a first DUI in California?",
        answer: "A first DUI in California results in: 6-month license suspension, $390-$1,000 in fines (plus penalty assessments totaling $1,800-$2,800), 48 hours to 6 months in jail, 3-month DUI program, and possible ignition interlock device (IID) installation."
    },
    {
        question: "How does California's point system work?",
        answer: "California assigns 1 point for most traffic violations, 2 points for serious violations like reckless driving or DUI. If you get 4 points in 12 months, 6 points in 24 months, or 8 points in 36 months, your license will be suspended. Points stay on your record for 36 months."
    },
    {
        question: "What happens if I get 4 points in 12 months in California?",
        answer: "Accumulating 4 points in 12 months triggers a license suspension in California. You'll receive a notice of suspension and may be required to attend a hearing. You can potentially avoid suspension by completing traffic school, but this depends on your driving record and violation types."
    },
    {
        question: "Can I attend traffic school for a speeding ticket in California?",
        answer: "Yes, California allows traffic school once every 18 months to mask a point from your record. You must have a valid license, the violation must be non-commercial, and you cannot have attended traffic school in the past 18 months. The fine is still owed, but your insurance won't increase."
    },
    {
        question: "What is the speed limit on California highways?",
        answer: "California's maximum highway speed limit is 65 mph on most freeways and 70 mph on some rural interstate highways. Two-lane undivided highways have a 55 mph limit unless otherwise posted. Always follow posted signs as limits vary by location."
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
    "headline": `California Real Estate Fines \u0026 Limits: Complete Guide \u0026 Practice Test ${currentYear}`,
    "description": "Learn essential California rules about speed limits, fines, DUIs, and penalty assessments for the Real Estate Exam.",
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
            "item": "https://www.realestatequestionbank.com/california-real-estate-practice-test"
        },
        {
            "@type": "ListItem",
            "position": 4,
            "name": "Fines & Limits real estate exam Practice",
            "item": "https://www.realestatequestionbank.com/california-fines-limits-permit-test-practice"
        }
    ]
}

export default function CaliforniaFinesLimitsPage() {
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
                <CaliforniaFinesLimitsContent faqData={FAQ_DATA} />
            </AuthProvider>
        </>
    )
}
