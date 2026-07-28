import { Metadata } from 'next'
import { NewYorkHandbookSummary } from '@/components/handbook/new-york-handbook-summary';

const currentYear = new Date().getFullYear()

export const metadata: Metadata = {
    title: `New York Real Estate Handbook Summary ${currentYear} | Key Takeaways`,
    description: `Read the official ${currentYear} New York Real Estate Driver Handbook summary. Essential study guide for your New York real estate exam.`,
    keywords: [
      'New York Real Estate handbook summary',
      "New York driver's manual summary",
      '${currentYear} real estate exam study guide',
      'New York road rules summary',
      'free new york real-estate permit practice test 2024',
      'free new york real-estate permit practice test 2025',
      'ny state real-estate permit practice test',
      'nyc real-estate exam',
],
    openGraph: {
        title: `New York Real Estate Handbook Summary ${currentYear} | Key Takeaways`,
        description: `Read the official ${currentYear} New York Driver Handbook summary. The most reliable source for passing your real estate exam.`,
    }
}

export default function NewYorkRealEstateHandbookSummaryPage() {
    return (
        <NewYorkHandbookSummary />
    )
}
