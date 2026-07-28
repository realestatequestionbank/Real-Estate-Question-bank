import { Metadata } from 'next'
import Script from 'next/script'
import { AuthProvider } from '@/contexts/auth-context'
import { TexasFinesLimitsContent } from '@/components/fines-and-limits/texas-fines-limits-content'

const currentYear = new Date().getFullYear()

// SEO Metadata
export const metadata: Metadata = {
    title: `Texas DPS Fines and Limits real estate exam ${currentYear} | Real Estate Question Bank`,
    description: `Master Texas speed limits, traffic fines, DWI laws, and the surcharge system. Free 25-question practice test for the ${currentYear} Texas DPS written knowledge exam.`,
    keywords: [
      'Texas speeding fines',
      'Texas speed limits',
      'Texas DPS point system',
      'Texas DWI penalties',
      'Texas DUI law',
      'Texas driver surcharge',
      'Texas school zone speed limit',
      'Texas Transportation Code 545',
      'dps driving test practice tests',
      'texas dps practice driving test',
      'texas driver license test questions',
      'tx dps practice driving test',
],
    openGraph: {
        title: `Texas DPS Fines & Limits Practice Test ${currentYear}`,
        description: 'Master Texas traffic fines and speed limits for your DPS knowledge test. Free 25-question interactive quiz with instant feedback.',
        type: 'website',
        url: 'https://www.realestatequestionbank.com/texas-fines-limits-permit-test-practice',
        siteName: 'Real Estate Question Bank',
        images: [
            {
                url: '/images/fines-and-limits/speed-limit-65.webp',
                width: 1024,
                height: 1024,
                alt: 'Highway Speed Limit Sign'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: `Texas Fines & Limits Practice Test ${currentYear}`,
        description: 'Master Texas traffic fines and speed limits. Take our free 25-question quiz.',
        images: ['/images/fines-and-limits/speed-limit-65.webp']
    },
    alternates: {
        canonical: 'https://www.realestatequestionbank.com/texas-fines-limits-permit-test-practice'
    }
}

// Texas-specific FAQ Data
const FAQ_DATA = [
    {
        question: "What is the speed limit in Texas school zones?",
        answer: "Texas school zones have a 20 mph speed limit when children are present or are about to be present (during posted school hours). Fines for speeding in a school zone are doubled compared to the standard fine. Texas also prohibits using any handheld device in a school zone, regardless of the driver's age."
    },
    {
        question: "What is Texas's highest speed limit?",
        answer: "Texas has the highest posted speed limit in the United States — 85 mph on a designated section of State Highway 130 (SH 130) near Austin. The general interstate maximum is 70–75 mph for most Texas freeways. Rural two-lane highways use separate day (70 mph) and night (65 mph) speed limits, which is a commonly tested DPS exam topic."
    },
    {
        question: "How much is a speeding ticket in Texas?",
        answer: "Texas speeding ticket base fines range from $1–$200 as a Class C misdemeanor. The exact amount varies by county. Fines are doubled in construction and school zones. However, the real cost in Texas comes from the Driver Responsibility Program (DRP) surcharges — a DWI conviction triggers $1,000/year for 3 years on top of standard fines."
    },
    {
        question: "What are the penalties for a first DWI in Texas?",
        answer: "A first DWI in Texas (Penal Code §49.04) results in: Class B misdemeanor with minimum 72 hours in county jail (up to 180 days), fine up to $2,000, license suspension 90 days to 1 year, and a Driver Responsibility Surcharge of $1,000/year for 3 years ($3,000 total). If BAC was 0.15% or above, it becomes a Class A misdemeanor with up to $4,000 fine and up to 1 year in jail."
    },
    {
        question: "What is the difference between DWI and DUI in Texas?",
        answer: "In Texas, DWI (Driving While Intoxicated) under Texas Penal Code §49.04 applies to adults caught driving with a BAC of 0.08% or above (or impaired by any substance). DUI (Driving Under the Influence) under Texas Alcoholic Beverage Code §106.041 applies specifically to minors under 21 who have any detectable amount of alcohol — the under-21 limit is effectively 0.00%. This terminology distinction is tested on the DPS knowledge exam."
    },
    {
        question: "How does the Texas point and surcharge system work?",
        answer: "Texas assigns 2 points for moving violations and 3 points for violations involving an accident. At 6 or more points in 36 months, the DRP charges a $100/year surcharge plus $25 for each additional point annually. Separate surcharges apply for DWI ($1,000–$2,000/year × 3 years) and driving without insurance ($250/year × 3 years). Points stay on your Texas record for 36 months."
    },
    {
        question: "Can I take a defensive driving course to dismiss a Texas ticket?",
        answer: "Yes. Texas allows eligible drivers to take an approved Defensive Driving Course (DDC) to dismiss a Class C traffic violation and prevent points from being assessed — available once every 12 months. You must request this option within the response period on your citation, pay a court fee (typically $10), carry valid insurance at the time of the violation, and complete a 6-hour approved course."
    },
    {
        question: "What is the Texas implied consent law for DWI?",
        answer: "Under Texas Transportation Code §724.011, driving on Texas roads means you have automatically consented to a breath or blood test if an officer has reasonable suspicion of DWI. Refusing the test results in an automatic 180-day license suspension for a first refusal (2 years for a second refusal within 10 years). The refusal may also be used as evidence of guilt in court."
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
    "headline": `Texas DPS Fines & Limits: Complete Guide & Practice Test ${currentYear}`,
    "description": "Learn essential Texas rules about speed limits, fines, DWI, and the surcharge system for the DPS knowledge test.",
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
            "name": "Fines & Limits real estate exam Practice",
            "item": "https://www.realestatequestionbank.com/texas-fines-limits-permit-test-practice"
        }
    ]
}

export default function TexasFinesLimitsPage() {
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
                <TexasFinesLimitsContent faqData={FAQ_DATA} />
            </AuthProvider>
        </>
    )
}
