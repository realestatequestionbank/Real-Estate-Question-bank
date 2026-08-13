import { Metadata } from 'next';
import { UtahHandbookSummary } from '@/components/handbook/utah-handbook-summary';

export const metadata: Metadata = {
    title: 'Utah Real Estate Handbook Summary 2026 | Real Estate Question Bank',
    description: 'A study guide and chapter-by-chapter summary of the official 2026 Utah Real Estate licensing guide. Prepare for your UT UDRE real estate exam with our concise overview.',
    keywords: [
        'utah real estate handbook',
        'utah udre manual',
        'utah real estate exam study guide',
        'utah real estate manual 2026',
        'utah real estate test preparation',
        'real estate exam utah',
    ],
};

export default function UtahHandbookSummaryPage() {
    return <UtahHandbookSummary />;
}
