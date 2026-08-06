import { Metadata } from 'next';
import { VirginiaHandbookSummary } from '@/components/handbook/virginia-handbook-summary';

export const metadata: Metadata = {
    title: 'Virginia Real Estate Handbook Summary 2026 | Real Estate Question Bank',
    description: 'A study guide and chapter-by-chapter summary of the official 2026 Virginia Real Estate licensing manual. Prepare for your VA Real Estate Exam with our concise overview.',
    keywords: [
        'virginia real estate handbook',
        'virginia vreb manual',
        'virginia real estate exam study guide',
        'virginia real estate manual 2026',
        'virginia real estate test preparation'
    ],
};

export default function VirginiaHandbookSummaryPage() {
    return <VirginiaHandbookSummary />;
}
