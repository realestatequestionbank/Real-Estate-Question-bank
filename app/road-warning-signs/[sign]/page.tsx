import { Metadata } from 'next'
import { AuthProvider } from '@/contexts/auth-context'
import { RoadSignDetailContent } from '@/components/road-warning-signs/sign-detail-content'
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
        title: `${sign.title} Sign — What It Means | Real Estate Question Bank`,
        description: `The ${sign.title} sign is a standard US road warning sign. Learn what it means, what shape it is, and what to do when you see it on your Real Estate Exam.`,
        keywords: [
            `${sign.title.toLowerCase()} sign`,
            `${sign.title.toLowerCase()} sign meaning`,
            'road warning sign',
            'yellow diamond sign',
            'Real Estate Exam signs',
            'driving test road signs'
        ],
        alternates: {
            canonical: `https://www.realestatequestionbank.com/road-warning-signs/${slug}`
        }
    }
}

export async function generateStaticParams() {
    return CALIFORNIA_WARNING_SIGNS.map((sign) => ({
        sign: sign.slug,
    }))
}

export default function RoadSignDetailPage({ params }: PageProps) {
    return (
        <AuthProvider>
            <RoadSignDetailContent slug={params.sign} />
        </AuthProvider>
    )
}
