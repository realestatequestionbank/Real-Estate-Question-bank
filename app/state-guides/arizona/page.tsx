import { Metadata } from 'next'
import { AuthProvider } from '@/contexts/auth-context'
import { ArizonaGuide } from '@/components/state-guides/arizona-guide'
import Script from 'next/script'

export const metadata: Metadata = {
    title: 'Arizona MVD real estate exam 2026 Guide — Eligibility, Fees, Written Test & More | Real Estate Question Bank',
    description:
        'Complete guide to the Arizona MVD real estate license test. Learn about eligibility (age 15.5+), the $7 application fee, 30-question written test, passing score of 80%, required documents, and the real estate exam @ Home for teens.',
    keywords: [
        'Arizona MVD real estate exam',
        'Arizona real estate license',
        'AZ MVD written test',
        'Arizona MVD test questions',
        'Arizona real estate exam passing score',
        'Arizona MVD documents needed',
        'Arizona Travel ID',
        'Arizona driver handbook',
        'Arizona real estate exam online',
        'Arizona GDL restrictions',
    ],
    openGraph: {
        title: 'Arizona MVD real estate exam Guide — Everything You Need to Know',
        description:
            'Complete guide to the Arizona MVD real estate exam: eligibility, fees, documents, the written test, what happens if you fail, and how to prepare.',
        type: 'article',
        url: 'https://www.realestatequestionbank.com/state-guides/arizona',
        siteName: 'Real Estate Question Bank',
        locale: 'en_US',
        images: [
            {
                url: '/images/cover-image.png',
                width: 1200,
                height: 630,
                alt: 'Arizona MVD real estate exam Guide',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Arizona MVD real estate exam Guide',
        description:
            'Everything you need to know about getting your Arizona learner\'s permit — eligibility, fees, the written test, and more.',
        images: ['/images/cover-image.png'],
        creator: '@real-estatequestionbank',
        site: '@real-estatequestionbank',
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: 'https://www.realestatequestionbank.com/state-guides/arizona',
    },
}

const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Arizona MVD real estate exam Guide',
    description:
        'A complete walkthrough of everything involved in getting your Arizona learner\'s permit — eligibility, documents, fees, the written test, and how to prepare.',
    author: {
        '@type': 'Organization',
        name: 'Real Estate Question Bank',
        url: 'https://www.realestatequestionbank.com',
    },
    publisher: {
        '@type': 'Organization',
        name: 'Real Estate Question Bank',
        url: 'https://www.realestatequestionbank.com',
        logo: {
            '@type': 'ImageObject',
            url: 'https://www.realestatequestionbank.com/images/logo.png',
        },
    },
    datePublished: '2026-02-03',
    dateModified: '2026-02-03',
    mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.realestatequestionbank.com/state-guides/arizona',
    },
}

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'How old do you have to be to get a learner\'s permit in Arizona?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'You must be at least 15 years and 6 months old to apply for a learner\'s permit (Graduated Instruction Permit) in Arizona.',
            },
        },
        {
            '@type': 'Question',
            name: 'How many questions are on the Arizona MVD written test?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The test consists of 30 multiple-choice questions. You need to answer at least 24 correctly (80%) to pass.',
            },
        },
        {
            '@type': 'Question',
            name: 'How much does an Arizona real estate license cost?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The instruction permit fee is $7.00.',
            },
        },
        {
            '@type': 'Question',
            name: 'What documents do I need for my Arizona MVD permit?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'You need proof of identity (birth certificate, passport), proof of Social Security number, and two documents proving Arizona residency. If applying for a Travel ID (Real ID), the requirements are strict.',
            },
        },
        {
            '@type': 'Question',
            name: 'Can I take the Arizona real estate exam online?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Arizona offers the "real estate exam @ Home" for eligible teenagers, which can be taken online with parent or guardian supervision via an AZ MVD Now account.',
            },
        },
        {
            '@type': 'Question',
            name: 'What happens if I fail the Arizona MVD written test?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'If you fail, you must wait until the next business day to retake the test. You have 3 attempts within a 12-month period before you need to re-apply and pay the fee again.',
            },
        },
    ],
}

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.realestatequestionbank.com',
        },
        {
            '@type': 'ListItem',
            position: 2,
            name: 'State Guides',
            item: 'https://www.realestatequestionbank.com/state-guides',
        },
        {
            '@type': 'ListItem',
            position: 3,
            name: 'Arizona',
            item: 'https://www.realestatequestionbank.com/state-guides/arizona',
        },
    ],
}

export default function ArizonaGuidePage() {
    return (
        <>
            <Script
                id="article-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Script
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <AuthProvider>
                <ArizonaGuide />
            </AuthProvider>
        </>
    )
}
