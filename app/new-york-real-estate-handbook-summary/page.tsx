import { Metadata } from 'next'
import { NewYorkHandbookSummary } from '@/components/handbook/new-york-handbook-summary';

const currentYear = new Date().getFullYear()

export const metadata: Metadata = {
    title: `New York Real Estate Handbook Summary ${currentYear} | Key Takeaways`,
    description: `Read the official ${currentYear} New York Real Estate NYDOS Handbook summary. Essential study guide for your New York real estate exam.`,
    keywords: [
      'New York Real Estate handbook summary',
      "New York NYDOS manual summary",
      'New York real estate exam study guide',
      'New York property laws summary',
      'free new york real-estate practice test',
      'ny state real-estate practice test',
      'nyc real-estate exam',
    ],
    openGraph: {
        title: `New York Real Estate Handbook Summary ${currentYear} | Key Takeaways`,
        description: `Read the official ${currentYear} New York NYDOS Real Estate Handbook summary. The most reliable source for passing your real estate exam.`,
    }
}

export default function NewYorkRealEstateHandbookSummaryPage() {
    return (
        <NewYorkHandbookSummary />
    )
}
