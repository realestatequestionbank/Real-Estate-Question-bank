import { Metadata } from 'next'
import { OregonHandbookSummary } from '@/components/handbook/oregon-handbook-summary';

const currentYear = new Date().getFullYear()

export const metadata: Metadata = {
    title: `Oregon Real Estate Handbook Summary ${currentYear} | Key Takeaways`,
    description: `Read the official ${currentYear} Oregon Real Estate OREA Manual summary. Essential study guide for your Oregon real estate exam — covers all key chapters in a concise, exam-focused format.`,
    keywords: [
      'Oregon Real Estate handbook summary',
      'Oregon OREA manual summary',
      'Oregon real estate exam study guide',
      'Oregon property rules summary',
      'Oregon Real Estate licensing manual',
      'oregon real estate practice tests',
    ],
    openGraph: {
        title: `Oregon Real Estate Handbook Summary ${currentYear} | Key Takeaways`,
        description: `Read the official ${currentYear} Oregon Real Estate OREA Manual summary. The most reliable source for passing your Oregon real estate exam on the first try.`,
    }
}

export default function OregonRealEstateHandbookSummaryPage() {
    return (
        <OregonHandbookSummary />
    )
}
