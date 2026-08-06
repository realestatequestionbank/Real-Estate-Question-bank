import { Metadata } from 'next'
import { HandbookSummary } from '@/components/handbook/handbook-summary';

const currentYear = new Date().getFullYear()

export const metadata: Metadata = {
    title: `California Real Estate Cheat Sheet ${currentYear} | Quick Handbook Summary`,
    description: `Short on time? Read our condensed ${currentYear} California Real Estate DRE Handbook summary. The best CA Real Estate cheat sheet for a quick licensing exam review.`,
    keywords: [
      'California Real Estate handbook',
      'California DRE handbook',
      'California Real Estate cheat sheet',
      'California property laws summarized',
      'CA Real Estate handbook summary',
      'Short California real estate exam review',
      'CA Real Estate quick study',
      'california real estate exam requirements',
      'what to study for real estate exam ca',
      'california real estate exam study guide',
    ],
    openGraph: {
        title: `California Real Estate Cheat Sheet & Handbook Summary ${currentYear}`,
        description: `Read the condensed ${currentYear} California DRE Handbook summary. Perfect cheat sheet for a quick review before your real estate licensing exam.`,
    }
}

export default function CaliforniaRealEstateHandbookSummaryPage() {
    return (
        <HandbookSummary stateKey="california" stateName="California" />
    )
}
