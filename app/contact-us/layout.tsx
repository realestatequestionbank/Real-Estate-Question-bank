import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contact Us | Real Estate Question Bank',
    description: 'Have questions about Real Estate Exam preparation? Need help with your account? Contact the Real Estate Question Bank team for support, feedback, or partnership inquiries.',
    alternates: {
        canonical: 'https://www.realestatequestionbank.com/contact-us',
    },
}

export default function ContactUsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
