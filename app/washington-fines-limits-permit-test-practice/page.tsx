import { Metadata } from 'next'
import Script from 'next/script'
import { AuthProvider } from '@/contexts/auth-context'
import { WashingtonFinesLimitsContent } from '@/components/fines-and-limits/washington-fines-limits-content'

const currentYear = new Date().getFullYear()

// SEO Metadata
export const metadata: Metadata = {
    title: `Washington DOL Fines and Limits real estate exam ${currentYear} | Real Estate Question Bank`,
    description: `Master Washington speed limits, traffic fines, DUI laws, and the point system. Free 25-question practice test for the ${currentYear} Washington DOL knowledge exam.`,
    keywords: [
      'Washington speeding fines',
      'Washington speed limits',
      'Washington DOL point system',
      'Washington DUI penalties',
      'Washington traffic ticket cost',
      'Washington school zone speed limit',
      'RCW 46.61',
      'how many questions are on the washington state written test',
      'wa dol practice tests',
],
    openGraph: {
        title: `Washington DOL Fines & Limits Practice Test ${currentYear}`,
        description: 'Master Washington traffic fines and speed limits for your DOL knowledge test. Free 25-question interactive quiz with instant feedback.',
        type: 'website',
        url: 'https://www.realestatequestionbank.com/washington-fines-limits-permit-test-practice',
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
        title: `Washington Fines & Limits Practice Test ${currentYear}`,
        description: 'Master Washington traffic fines and speed limits. Take our free 25-question quiz.',
        images: ['/images/fines-and-limits/speed-limit-65.webp']
    },
    alternates: {
        canonical: 'https://www.realestatequestionbank.com/washington-fines-limits-permit-test-practice'
    }
}

// Washington-specific FAQ Data
const FAQ_DATA = [
    {
        question: "What is the speed limit in Washington school zones?",
        answer: "Washington school zones have a 20 mph speed limit when children are present or during posted hours — lower than many other states. Speed is enforced through both patrol officers and automated speed cameras near school crossings. Some school zones use flashing beacons to indicate when the reduced speed limit is in effect."
    },
    {
        question: "How much is a speeding ticket in Washington?",
        answer: "Washington speeding ticket base fines range from $103 for 1–10 mph over to $250+ for 26+ mph over. Unlike California, Washington's fines are set by the court and include mandatory surcharges. A $103 base fine may cost $125–$150 total. Construction zone fines are doubled when workers are present."
    },
    {
        question: "What is Washington's Basic Rule of Speed?",
        answer: "Washington's Basic Rule (RCW 46.61.400) states you must drive at a speed that is reasonable and prudent given current conditions — road surface, weather, traffic, and visibility. Even if you are below the posted limit, you can be cited if your speed is unsafe for conditions, such as driving 60 mph in fog or on icy roads."
    },
    {
        question: "What are the penalties for a first DUI in Washington?",
        answer: "A first DUI in Washington (RCW 46.61.502) results in: minimum 90-day license suspension, $350–$5,000+ in fines (plus mandatory surcharges), 24 hours to 364 days in jail, mandatory alcohol/drug evaluation and treatment program, ignition interlock device (IID) required for all driving during suspension, and SR-22 insurance for 3 years."
    },
    {
        question: "How does Washington's point system work?",
        answer: "Washington assigns 2–6 points per violation depending on severity. A warning letter is issued at 6 points in 12 months, suspension occurs at 10 points in 12 months, and extended suspension at 14 points in 24 months. Points stay on your Washington record for 36 months. A defensive driving course can reduce your total by 3 points (once every 5 years)."
    },
    {
        question: "What happens if I get 10 points in 12 months in Washington?",
        answer: "Accumulating 10 or more points in 12 months triggers a license suspension by the Washington DOL. You'll receive a notice of suspension and may be required to attend a hearing. A deferred finding arrangement through the court — where the infraction is dismissed after 1 year of violation-free driving — can help avoid accumulating points in the first place."
    },
    {
        question: "What is Washington's DUI threshold for drivers under 21?",
        answer: "Washington enforces a Zero Tolerance law for drivers under 21. A BAC of 0.02% or higher (not 0.01% like some states) is illegal and results in a license suspension. Washington also applies its cannabis DUI law to minors — any detectable THC impairment can result in a DUI charge for a driver under 21."
    },
    {
        question: "What is the speed limit on Washington interstates?",
        answer: "Washington's maximum interstate speed limit is 70 mph on certain designated rural segments. Most urban freeways are posted at 60–65 mph. Two-lane undivided highways typically have a 50 mph statutory default. Always obey posted signs, which take precedence over default limits under RCW 46.61.400."
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
    "headline": `Washington DOL Fines & Limits: Complete Guide & Practice Test ${currentYear}`,
    "description": "Learn essential Washington rules about speed limits, fines, DUIs, and the point system for the DOL knowledge test.",
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
            "name": "Fines & Limits real estate exam Practice",
            "item": "https://www.realestatequestionbank.com/washington-fines-limits-permit-test-practice"
        }
    ]
}

export default function WashingtonFinesLimitsPage() {
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
                <WashingtonFinesLimitsContent faqData={FAQ_DATA} />
            </AuthProvider>
        </>
    )
}
