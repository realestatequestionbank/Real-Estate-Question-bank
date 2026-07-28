
import { WhyUsPage } from "@/components/pages/why-us-page"
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Why Choose Us | Real Estate Question Bank',
    description: 'Stop guessing and start studying. See why Real Estate Question Bank is the fastest, most effective way to prepare for your Real Estate licensing exam.',
    alternates: { canonical: 'https://www.realestatequestionbank.com/why-us' },
}

export default function Page() {
    return <WhyUsPage />
}
