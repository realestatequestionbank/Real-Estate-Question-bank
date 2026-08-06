import { Metadata } from 'next'
import { TexasHandbookSummary } from '@/components/handbook/texas-handbook-summary';

const currentYear = new Date().getFullYear()

export const metadata: Metadata = {
    title: `Summary of Texas TREC Real Estate Handbook ${currentYear} | Key Takeaways`,
    description: `Read the official ${currentYear} Texas TREC Real Estate Handbook summary. Essential study guide for your Texas real estate exam — covers all key chapters in a concise, exam-focused format.`,
    keywords: [
      'Texas Real Estate handbook',
      'Texas TREC handbook',
      'Texas Real Estate handbook summary',
      'Texas TREC handbook summary',
      'Texas real estate exam study guide',
      'Texas property rules summary',
      'Texas Real Estate licensing manual',
      'texas real estate practice tests',
    ],
    openGraph: {
        title: `Summary of Texas TREC Real Estate Handbook ${currentYear} | Key Takeaways`,
        description: `Read the official ${currentYear} Texas TREC Real Estate Handbook summary. The most reliable source for passing your Texas real estate exam on the first try.`,
    }
}

export default function TexasDPSHandbookSummaryPage() {
    return (
        <TexasHandbookSummary />
    )
}
