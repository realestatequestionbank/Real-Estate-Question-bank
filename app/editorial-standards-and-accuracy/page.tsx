import { Metadata } from 'next'
import MethodologyPageContent from './page-content'

export const metadata: Metadata = {
    title: 'Editorial Standards | Real Estate Question Bank',
    description: 'Learn about our rigorous 6-step process for ensuring accuracy and quality in our Real Estate practice tests and real estate exam prep resources.',
    alternates: { canonical: 'https://www.realestatequestionbank.com/editorial-standards-and-accuracy' },
}

export default function Page() {
    return <MethodologyPageContent />
}
