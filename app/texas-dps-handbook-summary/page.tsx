import { Metadata } from 'next'
import { TexasHandbookSummary } from '@/components/handbook/texas-handbook-summary';

const currentYear = new Date().getFullYear()

export const metadata: Metadata = {
    title: `Summary of Texas DPS Handbook ${currentYear} | Key Takeaways`,
    description: `Read the official ${currentYear} Texas DPS Handbook summary. Essential study guide for your Texas real estate exam — covers all 10 chapters in a concise, exam-focused format.`,
    keywords: [
      'Texas drivers handbook',
      'Texas driver handbook',
      'Texas DPS handbook summary',
      'Texas DPS driver handbook summary',
      '${currentYear} Texas real estate exam study guide',
      'Texas road rules summary',
      'Texas DPS driving manual',
      'dps driving test practice tests',
      'texas dps practice driving test',
      'texas driver license test questions',
      'tx dps practice driving test',
],
    openGraph: {
        title: `Summary of Texas DPS Handbook ${currentYear} | Key Takeaways`,
        description: `Read the official ${currentYear} Texas DPS Handbook summary. The most reliable source for passing your Texas real estate exam on the first try.`,
    }
}

export default function TexasDPSHandbookSummaryPage() {
    return (
        <TexasHandbookSummary />
    )
}
