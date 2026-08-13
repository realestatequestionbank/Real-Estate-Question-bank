import { Metadata } from 'next';
import { WashingtonHandbookSummary } from '@/components/handbook/washington-handbook-summary';

export const metadata: Metadata = {
    title: 'Washington Real Estate Handbook Summary 2026 | Real Estate Question Bank',
    description: 'A comprehensive, easy-to-read summary of the 2026 Washington Real Estate licensing guide. Learn WA property laws, agency rules, and contracts.',
    keywords: [
        'washington real estate handbook summary',
        'wa real estate guide summary',
        'washington property laws',
        'washington agency relationships',
        'wa real estate exam study guide',
        'wa licensing exam rules',
        'how many questions are on the washington real estate test',
        'wa real estate practice tests',
    ],
    openGraph: {
        title: 'Washington Real Estate Handbook Summary 2026',
        description: 'A comprehensive, easy-to-read summary of the 2026 Washington Real Estate licensing guide. Perfect for your WA real estate exam study.',
        url: 'https://realestatequestionbank.com/washington-real-estate-handbook-summary',
        siteName: 'Real Estate Question Bank',
        locale: 'en_US',
        type: 'article',
    },
    alternates: {
        canonical: 'https://realestatequestionbank.com/washington-real-estate-handbook-summary',
    }
};

export default function WashingtonDOLHandbookSummaryPage() {
    return <WashingtonHandbookSummary />;
}
