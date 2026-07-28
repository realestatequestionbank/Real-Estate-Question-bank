import { Metadata } from 'next';
import { WashingtonHandbookSummary } from '@/components/handbook/washington-handbook-summary';

export const metadata: Metadata = {
    title: 'Washington DOL Handbook Summary 2026 | Real Estate Question Bank',
    description: 'A comprehensive, easy-to-read summary of the 2026 Washington Driver Guide. Learn WA traffic laws, speed limits, right-of-way rules, and road signs.',
    keywords: [

        'washington dol handbook summary',

        'wa driver guide summary',

        'washington driving laws',

        'washington speed limits',

        'wa dol real estate exam study guide',

        'wa state driving rules',

        'how many questions are on the washington state written test',

        'wa dol practice tests',
],
    openGraph: {
        title: 'Washington DOL Handbook Summary 2026',
        description: 'A comprehensive, easy-to-read summary of the 2026 Washington Driver Guide. Perfect for your WA real estate exam study.',
        url: 'https://realestatequestionbank.com/washington-dol-handbook-summary',
        siteName: 'Real Estate Question Bank',
        locale: 'en_US',
        type: 'article',
    },
    alternates: {
        canonical: 'https://realestatequestionbank.com/washington-dol-handbook-summary',
    }
};

export default function WashingtonDOLHandbookSummaryPage() {
    return <WashingtonHandbookSummary />;
}
