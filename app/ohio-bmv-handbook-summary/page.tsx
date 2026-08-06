import { Metadata } from 'next'
import { OhioHandbookSummary } from '@/components/handbook/ohio-handbook-summary';

const currentYear = new Date().getFullYear()

export const metadata: Metadata = {
    title: `Ohio Real Estate Handbook Summary ${currentYear} | Key Takeaways`,
    description: `Read the official ${currentYear} Ohio ODRE Real Estate Handbook summary. Essential study guide for your Ohio real estate exam.`,
    keywords: [
      'Ohio Real Estate handbook summary',
      "Ohio ODRE manual summary",
      'Ohio real estate exam study guide',
      'Ohio property laws summary',
      'free real-estate practice exam ohio',
      'free real estate exam ohio',
    ],
    openGraph: {
        title: `Ohio Real Estate Handbook Summary ${currentYear} | Key Takeaways`,
        description: `Read the official ${currentYear} Ohio ODRE Real Estate Handbook summary. The most reliable source for passing your real estate exam.`,
    }
}

export default function OhioBMVHandbookSummaryPage() {
    return (
        <OhioHandbookSummary />
    )
}
