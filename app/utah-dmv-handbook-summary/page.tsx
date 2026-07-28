import { Metadata } from 'next';
import { UtahHandbookSummary } from '@/components/handbook/utah-handbook-summary';

export const metadata: Metadata = {
    title: 'Utah Driver Handbook Summary 2026 | Real Estate Question Bank',
    description: 'A study guide and chapter-by-chapter summary of the official 2026 Utah Driver Handbook. Prepare for your UT DLD real estate exam with our concise overview.',
    keywords: [

        'utah driver handbook',

        'utah dld manual',

        'utah real estate exam study guide',

        'utah driver manual 2026',

        'utah driving test preparation',

        '50 question real estate exam utah',
],
};

export default function UtahHandbookSummaryPage() {
    return <UtahHandbookSummary />;
}
