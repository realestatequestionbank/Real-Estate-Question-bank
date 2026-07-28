import { Metadata } from 'next'
import { NewMexicoHandbookSummary } from '@/components/handbook/new-mexico-handbook-summary';

const currentYear = new Date().getFullYear()

export const metadata: Metadata = {
    title: `New Mexico MVD Handbook Summary ${currentYear} | Key Takeaways`,
    description: `Read the official ${currentYear} New Mexico MVD Driver Manual summary. Essential study guide for your New Mexico real estate exam — covers all key chapters in a concise, exam-focused format.`,
    keywords: [
      'New Mexico MVD handbook summary',
      'New Mexico driver manual summary',
      '${currentYear} New Mexico real estate exam study guide',
      'New Mexico road rules summary',
      'NM MVD driving manual',
      'arizona mvd practice real estate exam',
      'nm mvd practice tests',
],
    openGraph: {
        title: `New Mexico MVD Handbook Summary ${currentYear} | Key Takeaways`,
        description: `Read the official ${currentYear} New Mexico MVD Driver Manual summary. The most reliable source for passing your New Mexico real estate exam on the first try.`,
    }
}

export default function NewMexicoRealEstateHandbookSummaryPage() {
    return (
        <NewMexicoHandbookSummary />
    )
}
