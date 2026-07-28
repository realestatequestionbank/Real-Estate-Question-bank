import { Metadata } from 'next'
import { AuthProvider } from '@/contexts/auth-context'
import { CaliforniaTeensPermitTestContent } from '@/components/teens/california-teens-permit-test-content'
import Script from 'next/script'

const currentYear = new Date().getFullYear()

// SEO Metadata
// NOTE: This page targets teen-specific, parent-facing, and "how to get" intent.
// It deliberately avoids overlapping with /california-real-estate-permit-test which owns
// "practice test", "Real Estate questions", and generic real estate exam queries.
export const metadata: Metadata = {
    title: `California Teen Driver's Permit Requirements & Guide ${currentYear}`,
    description: `Everything teens under 18 need to get a California driver's permit — drivers ed requirements, GDL rules, step-by-step roadmap, and parent guidance. Updated ${currentYear}.`,
    keywords: [

        'california teen drivers permit requirements',

        'how to get a california learners permit under 18',

        'california junior permit',

        'california GDL graduated driver license teen',

        'california drivers ed requirements for teens',

        'california provisional license teen driver',

        'under 18 real estate license california steps',

        'california teen driver roadmap',

        'california learners permit age requirement',

        'parent teen driving guide california',

        'california real estate exam requirements',

        'what to bring for real estate exam ca',

        'what to bring to california real estate exam',
],
    openGraph: {
        title: `California Teen Driver's Permit Requirements & Guide ${currentYear}`,
        description: `Everything teens under 18 need to get a California driver's permit — drivers ed, GDL rules, and a step-by-step roadmap for ${currentYear}.`,
        type: 'article',
        url: 'https://www.realestatequestionbank.com/california-teens-permit-test',
        siteName: 'Real Estate Question Bank',
        images: [
            {
                url: '/images/california-teen-driver.webp',
                width: 1200,
                height: 630,
                alt: 'California Teen Driver Permit Requirements Guide'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: `California Teen Driver's Permit Requirements & Guide ${currentYear}`,
        description: `Step-by-step roadmap for California teens under 18: drivers ed, GDL rules, permit requirements, and everything to pass the first time.`,
        images: ['/images/california-teen-driver.webp']
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: 'https://www.realestatequestionbank.com/california-teens-permit-test'
    }
}

// HowTo schema — differentiates this page as a guide, not a practice test
const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to Get a California Teen Driver's Permit (Under 18) in ${currentYear}`,
    description: 'Step-by-step guide for California teenagers to obtain their driver\'s permit, including drivers ed requirements, study resources, and the Real Estate knowledge test.',
    totalTime: 'P6M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '0' },
    step: [
        { '@type': 'HowToStep', name: 'Read the CA Study Guide', text: 'Get a broad overview of California traffic laws and Real Estate requirements.' },
        { '@type': 'HowToStep', name: 'Study the Handbook & Summaries', text: 'Read the official California Real Estate handbook or use condensed cheat sheets.' },
        { '@type': 'HowToStep', name: 'Master Fines & Speed Limits', text: 'Study California-specific fines, speed limits, and point system rules.' },
        { '@type': 'HowToStep', name: 'Learn Right of Way Rules', text: 'Understand complex intersection rules and right-of-way laws.' },
        { '@type': 'HowToStep', name: 'Review Distracted Driving Laws', text: 'Know California\'s strict mobile phone and distracted driving laws for teens.' },
        { '@type': 'HowToStep', name: 'Take Free Practice Tests', text: 'Test your knowledge with free mixed 40-question practice tests.' },
        { '@type': 'HowToStep', name: 'Pass the Real Estate Knowledge Test', text: 'Walk into the Real Estate with confidence and pass your real estate exam on the first try.' },
    ]
}

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.realestatequestionbank.com' },
        { '@type': 'ListItem', position: 2, name: 'California', item: 'https://www.realestatequestionbank.com/california-real-estate-permit-test' },
        { '@type': 'ListItem', position: 3, name: 'Teen Driver Permit Guide', item: 'https://www.realestatequestionbank.com/california-teens-permit-test' },
    ]
}

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'What age can a teen get a driver\'s permit in California?',
            acceptedAnswer: { '@type': 'Answer', text: 'In California, teens can apply for a provisional instruction permit at age 15½. They must complete a real estate exam prep course before applying.' }
        },
        {
            '@type': 'Question',
            name: 'What are the drivers education requirements for California teens?',
            acceptedAnswer: { '@type': 'Answer', text: 'California teens under 18 must complete a 30-hour Real Estate-approved real estate exam prep course before taking the real estate exam.' }
        },
        {
            '@type': 'Question',
            name: 'How long must a California teen hold a learner\'s permit before getting a license?',
            acceptedAnswer: { '@type': 'Answer', text: 'Under California\'s GDL (Graduated Driver License) program, teens must hold their provisional permit for at least 6 months and log 50 hours of supervised driving (10 at night) before taking the behind-the-wheel test.' }
        },
        {
            '@type': 'Question',
            name: 'What restrictions apply to California provisional license holders?',
            acceptedAnswer: { '@type': 'Answer', text: 'For the first 12 months, California teen drivers may not drive between 11pm–5am, and may not transport passengers under 20 years old without a licensed adult 25+ in the vehicle.' }
        },
    ]
}

export default function CaliforniaTeensPermitTestPage() {
    return (
        <>
            <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <AuthProvider>
                <CaliforniaTeensPermitTestContent />
            </AuthProvider>
        </>
    )
}
