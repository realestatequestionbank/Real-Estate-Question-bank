import { Metadata } from 'next'
import { NewMexicoHandbookSummary } from '@/components/handbook/new-mexico-handbook-summary';

const currentYear = new Date().getFullYear()

export const metadata: Metadata = {
    title: `New Mexico Real Estate Handbook Summary ${currentYear} | Key Takeaways`,
    description: `Read the official ${currentYear} New Mexico NMREC Real Estate Manual summary. Essential study guide for your New Mexico real estate exam — covers all key chapters in a concise, exam-focused format.`,
    keywords: [
      'New Mexico Real Estate handbook summary',
      'New Mexico NMREC handbook summary',
      'New Mexico real estate exam study guide',
      'New Mexico property rules summary',
      'NM Real Estate licensing manual',
      'new mexico real estate practice tests',
    ],
    openGraph: {
        title: `New Mexico Real Estate Handbook Summary ${currentYear} | Key Takeaways`,
        description: `Read the official ${currentYear} New Mexico NMREC Real Estate Manual summary. The most reliable source for passing your New Mexico real estate exam on the first try.`,
    }
}

export default function NewMexicoRealEstateHandbookSummaryPage() {
    return (
        <NewMexicoHandbookSummary />
    )
}
