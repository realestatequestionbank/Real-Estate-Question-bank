import { Metadata } from 'next'
import { NevadaHandbookSummary } from '@/components/handbook/nevada-handbook-summary';

const currentYear = new Date().getFullYear()

export const metadata: Metadata = {
    title: `Nevada Real Estate Handbook Summary ${currentYear} | Key Takeaways`,
    description: `Read the official ${currentYear} Nevada Real Estate Driver Handbook summary. Essential study guide for your Nevada real estate exam — covers all key chapters in a concise, exam-focused format.`,
    keywords: [
      'Nevada Real Estate handbook summary',
      'Nevada driver handbook summary',
      '${currentYear} Nevada real estate exam study guide',
      'Nevada road rules summary',
      'Nevada Real Estate driving manual',
      'real-estate practice test las vegas',
],
    openGraph: {
        title: `Nevada Real Estate Handbook Summary ${currentYear} | Key Takeaways`,
        description: `Read the official ${currentYear} Nevada Real Estate Driver Handbook summary. The most reliable source for passing your Nevada real estate exam on the first try.`,
    }
}

export default function NevadaRealEstateHandbookSummaryPage() {
    return (
        <NevadaHandbookSummary />
    )
}
