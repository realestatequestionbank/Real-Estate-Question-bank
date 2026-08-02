import { Metadata } from 'next'
import Script from 'next/script'
import { AuthProvider } from '@/contexts/auth-context'
import { OhioDistractedDrivingContent } from '@/components/distracted-driving/ohio-distracted-driving-content'

const currentYear = new Date().getFullYear()

export const metadata: Metadata = {
    title: `Ohio Distracted Driving Laws Temps Test ${currentYear} | Real Estate Question Bank`,
    description: `Master Ohio distracted driving laws: cell phone bans, hands-free laws, under 18 restrictions, headphone bans, and fines. Free 20-question practice test.`,
    keywords: [
      'Ohio distracted driving laws',
      'Ohio cell phone ban driving',
      'Ohio hands free law',
      'Ohio headphone law driving',
      'Ohio teen driver cell phone rules',
      'free distracted driving practice test ohio',
      'ohio bmv real estate exam study guide',
    ],
    openGraph: {
        title: `Ohio Distracted Driving Practice Test ${currentYear}`,
        description: 'Master Ohio cell phone laws, bans, and penalties. Free 20-question interactive quiz with instant feedback.',
        type: 'website',
        url: 'https://www.realestatequestionbank.com/ohio-distracted-driving-permit-test-practice',
        siteName: 'Real Estate Question Bank',
    },
    alternates: {
        canonical: 'https://www.realestatequestionbank.com/ohio-distracted-driving-permit-test-practice'
    }
}

const FAQ_DATA = [
    {
        question: "Is holding a phone while driving illegal in Ohio?",
        answer: "Yes, under Ohio law HB 49, it is illegal for drivers of any age to hold or support a cell phone or electronic wireless device while driving. It is a primary offense, meaning police can pull you over solely for holding a phone."
    },
    {
        question: "Can drivers under 18 use hands-free devices in Ohio?",
        answer: "No, drivers under 18 are completely prohibited from using any wireless electronic device while driving, even in hands-free or Bluetooth mode. This is a primary offense and carries a $150 fine and a 60-day license suspension for a first violation."
    },
    {
        question: "What is the fine for an adult caught using a phone while driving in Ohio?",
        answer: "For adult drivers (21+), a first offense for distracted driving carries a fine of up to $150 and 2 points on their driving record. Fines double if the violation occurs in an active construction zone."
    },
    {
        question: "Is it legal to wear headphones in both ears while driving in Ohio?",
        answer: "No, under Ohio Revised Code 4511.84, it is illegal to wear earplugs or headphones in both ears while driving. At least one ear must be left open to hear sirens, horns, and ambient traffic noise."
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
    "headline": `Ohio Distracted Driving Laws: Complete Guide & Practice Test ${currentYear}`,
    "description": "Learn essential Ohio cell phone bans, GDL restrictions, fines, and headphone laws for the BMV written exam.",
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
            "item": "https://www.realestatequestionbank.com/ohio-real-estate-practice-test"
        },
        {
            "@type": "ListItem",
            "position": 4,
            "name": "Distracted Driving Practice Test",
            "item": "https://www.realestatequestionbank.com/ohio-distracted-driving-permit-test-practice"
        }
    ]
}

export default function OhioDistractedDrivingPage() {
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
                <OhioDistractedDrivingContent faqData={FAQ_DATA} />
            </AuthProvider>
        </>
    )
}
