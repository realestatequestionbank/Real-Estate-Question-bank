import { Metadata } from 'next'
import { OregonHandbookSummary } from '@/components/handbook/oregon-handbook-summary';

const currentYear = new Date().getFullYear()

export const metadata: Metadata = {
    title: `Oregon Real Estate Handbook Summary ${currentYear} | Key Takeaways`,
    description: `Read the official ${currentYear} Oregon Real Estate Driver Manual summary. Essential study guide for your Oregon real estate exam — covers all key chapters in a concise, exam-focused format.`,
    keywords: ["Oregon drivers manual', 'Oregon driver handbook', 'Oregon Real Estate handbook summary', 'Oregon driver manual summary', `${currentYear} Oregon real estate exam study guide`, 'Oregon road rules summary', 'Oregon Real Estate driving manual"],
    openGraph: {
        title: `Oregon Real Estate Handbook Summary ${currentYear} | Key Takeaways`,
        description: `Read the official ${currentYear} Oregon Real Estate Driver Manual summary. The most reliable source for passing your Oregon real estate exam on the first try.`,
    }
}

export default function OregonRealEstateHandbookSummaryPage() {
    return (
        <OregonHandbookSummary />
    )
}
