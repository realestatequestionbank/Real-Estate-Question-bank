import { Metadata } from 'next'
import { OhioHandbookSummary } from '@/components/handbook/ohio-handbook-summary';

const currentYear = new Date().getFullYear()

export const metadata: Metadata = {
    title: `Ohio BMV Handbook Summary ${currentYear} | Key Takeaways`,
    description: `Read the official ${currentYear} Ohio BMV Driver Handbook summary. Essential study guide for your Ohio real estate exam.`,
    keywords: [
      'Ohio BMV handbook summary',
      "Ohio driver's manual summary",
      `${currentYear} real estate exam study guide`,
      'Ohio road rules summary',
      'free real-estate practice real estate exam ohio',
      'free real estate exam ohio',
],
    openGraph: {
        title: `Ohio BMV Handbook Summary ${currentYear} | Key Takeaways`,
        description: `Read the official ${currentYear} Ohio Driver Handbook summary. The most reliable source for passing your real estate exam.`,
    }
}

export default function OhioBMVHandbookSummaryPage() {
    return (
        <OhioHandbookSummary />
    )
}
