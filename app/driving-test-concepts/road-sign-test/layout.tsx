import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Road Sign Practice Test | Real Estate Question Bank',
    description: 'Test your knowledge of road signs with our free 10-question practice test. Learn to identify warning signs, regulatory signs, and understand sign shapes and colors.',
    alternates: {
        canonical: 'https://www.realestatequestionbank.com/road-sign-test',
    },
    openGraph: {
        title: 'Road Sign Practice Test | Real Estate Question Bank',
        description: 'Test your knowledge of road signs with our free 10-question practice test.',
        type: 'website',
        url: 'https://www.realestatequestionbank.com/road-sign-test',
    }
}

export default function RoadSignTestLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
