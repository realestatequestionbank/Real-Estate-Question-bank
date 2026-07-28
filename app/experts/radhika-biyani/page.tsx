import { RadhikaBiyaniExpertPage } from "@/components/pages/radhika-biyani-expert-page"
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Radhika Biyani - CEO & Founder | Real Estate Question Bank',
    description: 'Learn about Radhika Biyani, CEO & Founder of Real Estate Question Bank. Discover her commitment to content accuracy, editorial standards, and test prep excellence.',
    alternates: { canonical: 'https://www.realestatequestionbank.com/experts/radhika-biyani' },
}

export default function Page() {
    return <RadhikaBiyaniExpertPage />
}
