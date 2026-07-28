import { Metadata } from 'next';
import { VirginiaHandbookSummary } from '@/components/handbook/virginia-handbook-summary';

export const metadata: Metadata = {
    title: 'Virginia Driver Handbook Summary 2026 | Real Estate Question Bank',
    description: 'A study guide and chapter-by-chapter summary of the official 2026 Virginia Driver\'s Manual. Prepare for your VA Real Estate Exam with our concise overview.',
    keywords: [
        'virginia driver handbook',
        'virginia real-estate manual',
        'virginia real estate exam study guide',
        'virginia driver manual 2026',
        'virginia driving test preparation'
    ],
};

export default function VirginiaHandbookSummaryPage() {
    return <VirginiaHandbookSummary />;
}
