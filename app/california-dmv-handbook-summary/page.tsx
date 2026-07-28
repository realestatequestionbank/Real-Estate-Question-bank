import { Metadata } from 'next'
import { HandbookSummary } from '@/components/handbook/handbook-summary';

const currentYear = new Date().getFullYear()

export const metadata: Metadata = {
    title: `California Real Estate Cheat Sheet ${currentYear} | Quick Handbook Summary`,
    description: `Short on time? Read our condensed ${currentYear} California Real Estate Driver Handbook summary. The best CA Real Estate cheat sheet for a quick real estate exam review.`,
    keywords: [
      'California driving test handbook',
      'California drivers handbook',
      'California Real Estate cheat sheet',
      'California driving rules summarized',
      'CA Real Estate handbook summary ${currentYear}',
      'Short California real estate exam review',
      'CA Real Estate quick study',
      'california real estate exam requirements',
      'what to bring for real estate exam ca',
      'what to bring to california real estate exam',
],
    openGraph: {
        title: `California Real Estate Cheat Sheet \u0026 Handbook Summary ${currentYear}`,
        description: `Read the condensed ${currentYear} California Driver Handbook summary. Perfect cheat sheet for a quick review before your real estate exam.`,
    }
}

export default function CaliforniaRealEstateHandbookSummaryPage() {
    return (
        <HandbookSummary stateKey="california" stateName="California" />
    )
}
