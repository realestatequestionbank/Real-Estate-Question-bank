import { Metadata } from 'next'
import { SignDetailContent } from '@/components/california-road-warning-signs/sign-detail-content'
import { CALIFORNIA_WARNING_SIGNS } from '@/components/california-road-warning-signs/data'

interface PageProps {
    params: {
        sign: string
    }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const slug = params.sign
    const sign = CALIFORNIA_WARNING_SIGNS.find((s) => s.slug === slug)

    if (!sign) {
        return {
            title: 'Sign Not Found',
            description: 'The requested warning sign could not be found.'
        }
    }

    return {
        title: `${sign.title} Meaning | California Real Estate Warning Sign`,
        description: `Learn the official meaning of the ${sign.title} warning sign for the 2026 California Real Estate real estate exam. See images and detailed explanations.`,
        keywords: [sign.title, 'California warning sign', 'Real Estate Exam', 'road sign meaning', 'yellow diamond sign']
    }
}

// Generate static params for all signs to improve performance/SEO
export async function generateStaticParams() {
    return CALIFORNIA_WARNING_SIGNS.map((sign) => ({
        sign: sign.slug,
    }))
}

export default function SignDetailPage({ params }: PageProps) {
    return <SignDetailContent slug={params.sign} />
}
