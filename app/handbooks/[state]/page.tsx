import { notFound } from 'next/navigation'
import { Metadata } from 'next'

interface PageProps {
    params: {
        state: string
    }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    return {}
}

export function generateStaticParams() {
    return []
}

export default function HandbookPage({ params }: PageProps) {
    notFound()
}
