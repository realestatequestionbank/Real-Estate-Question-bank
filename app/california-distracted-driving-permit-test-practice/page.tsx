import { Metadata } from 'next'
import Script from 'next/script'
import { AuthProvider } from '@/contexts/auth-context'
import { CaliforniaDistractedDrivingContent } from '@/components/distracted-driving/california-distracted-driving-content'

const currentYear = new Date().getFullYear()

export const metadata: Metadata = {
    title: `California Distracted Driving Laws Practice Test ${currentYear} | Real Estate Question Bank`,
    description: `Master California's distracted driving laws: hands-free rules (VC 23123), texting ban (VC 23123.5), teen driver restrictions (VC 23124), and fines. Free 20-question practice test for the ${currentYear} California Real Estate exam.`,
    keywords: [

        'California distracted driving',

        'California cell phone law',

        'California hands-free law',

        'California texting while driving',

        'VC 23123',

        'VC 23123.5',

        'California teen driver cell phone',

        'California Real Estate Exam distracted driving',

        'california real estate exam requirements',

        'what to bring for real estate exam ca',

        'what to bring to california real estate exam',
],
    openGraph: {
        title: `California Distracted Driving Laws Practice Test ${currentYear}`,
        description: `Learn California's hands-free law, texting ban, teen restrictions, and fines. Free 20-question quiz with instant feedback.`,
        type: 'website',
        url: 'https://www.realestatequestionbank.com/california-distracted-driving-permit-test-practice',
        siteName: 'Real Estate Question Bank',
    },
    twitter: {
        card: 'summary_large_image',
        title: `California Distracted Driving Practice Test ${currentYear}`,
        description: 'Master California cell phone laws and distracted driving rules. Free 20-question quiz.',
    },
    alternates: {
        canonical: 'https://www.realestatequestionbank.com/california-distracted-driving-permit-test-practice'
    }
}

const FAQ_DATA = [
    {
        question: "Is it legal to use a cell phone at a red light in California?",
        answer: "No. California's hands-free law (VC 23123) prohibits holding or using a handheld phone any time you are behind the wheel with the engine running—including at red lights. The law does not make exceptions for stopped traffic. You must be safely parked with the engine off to legally use a handheld phone."
    },
    {
        question: "What is the fine for texting while driving in California?",
        answer: "The base fine under VC 23123.5 is $20 for a first offense and $50 for subsequent offenses. However, California courts add penalty assessments that multiply the base fine significantly. A first offense typically costs around $150–$162 total, and a second or subsequent offense can exceed $280. A third violation within 36 months also adds one point to your Real Estate record."
    },
    {
        question: "Can a 17-year-old use a hands-free Bluetooth device while driving in California?",
        answer: "No. California Vehicle Code 23124 prohibits drivers under 18 from using any wireless communication device while driving—including hands-free Bluetooth devices, voice commands, and navigation apps on a mounted phone. The only exception is calling 911 in a genuine emergency. This is stricter than the rules for adult drivers."
    },
    {
        question: "Can I wear earbuds while driving in California?",
        answer: "You can legally wear a headphone or earbud in ONE ear while driving, but not both. California Vehicle Code 27400 prohibits wearing a headset or earplugs in both ears while driving. The purpose of this law is to ensure drivers can hear emergency vehicle sirens and other traffic sounds. Hearing aids are exempt."
    },
    {
        question: "What is California's hands-free law and how does it work?",
        answer: "California's hands-free law (VC 23123, strengthened by AB-1785 in 2017) requires that adult drivers who want to use a phone while driving must have it mounted on the windshield or dashboard in an approved mount, and may only interact with it using a single touch or swipe—for example, to answer a call. Scrolling, typing, or holding the phone in any way is illegal. Voice commands that require no touching are also allowed."
    },
    {
        question: "What are the three types of driver distraction?",
        answer: "The California Real Estate handbook identifies three types of driver distraction: (1) Visual distraction — taking your eyes off the road; (2) Manual distraction — taking your hands off the steering wheel; (3) Cognitive distraction — taking your mind off driving. Texting while driving is uniquely dangerous because it causes all three types simultaneously."
    },
    {
        question: "Can I use a GPS app on my phone while driving in California?",
        answer: "Yes, as an adult driver, you may use a navigation app while driving if your phone is mounted in an approved location and you interact with it using only a single touch or swipe. You should set up your route before you start driving. Teen drivers under 18 may not use navigation apps on their phones while driving, even if the phone is mounted."
    },
    {
        question: "What happens if distracted driving causes a crash in California?",
        answer: "If you cause a collision while illegally using a handheld phone, the charge can escalate from a simple infraction to reckless driving (VC 23103), which is a misdemeanor. This carries penalties including fines up to $1,000, up to 90 days in jail, mandatory Real Estate points, and civil liability for property damage and personal injury. Your insurance rates can also increase significantly."
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
    "headline": `California Distracted Driving Laws: Complete Guide & Practice Test ${currentYear}`,
    "description": "Learn California's hands-free law (VC 23123), texting ban (VC 23123.5), teen driver restrictions (VC 23124), fine structure, and other distractions tested on the California Real Estate exam.",
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
    "datePublished": "2026-02-22",
    "dateModified": "2026-02-22"
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
            "name": "Distracted Driving Practice Test",
            "item": "https://www.realestatequestionbank.com/california-distracted-driving-permit-test-practice"
        }
    ]
}

export default function CaliforniaDistractedDrivingPage() {
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
                <CaliforniaDistractedDrivingContent faqData={FAQ_DATA} />
            </AuthProvider>
        </>
    )
}
