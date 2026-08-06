
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { STATES, type StateKey } from '@/lib/constants'
import { getDepartmentName } from '@/lib/data/state-departments'
import { HandbookSummary } from '@/components/handbook/handbook-summary';

interface PageProps {
    params: {
        state: string
    }
}

// Helper to validate state param
function isValidState(state: string): state is StateKey {
    return state in STATES
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    if (!isValidState(params.state)) return {}

    const stateInfo = STATES[params.state]
    const departmentInfo = getDepartmentName(params.state)
    const currentYear = new Date().getFullYear()

    return {
        title: `${stateInfo.name} Real Estate Handbook Summary ${currentYear} | Key takeaways`,
        description: `Read the official ${currentYear} ${stateInfo.name} ${departmentInfo.name} Real Estate Handbook summary. Essential study guide for your ${stateInfo.name} real estate exam.`,
        keywords: [`${stateInfo.name} Real Estate handbook summary`, `${stateInfo.name} Real Estate manual summary`, `${currentYear} real estate exam study guide`, `${stateInfo.name} real estate regulations summary`],
        openGraph: {
            title: `${stateInfo.name} Real Estate Handbook Summary ${currentYear} | Key takeaways`,
            description: `Read the official ${currentYear} ${stateInfo.name} Real Estate Handbook summary. The most reliable source for passing your real estate exam.`,
        }
    }
}

export function generateStaticParams() {
    return Object.keys(STATES).map((state) => ({
        state: state,
    }))
}

export default function HandbookSummaryPage({ params }: PageProps) {
    if (!isValidState(params.state)) {
        notFound()
    }

    const stateKey = params.state
    const stateInfo = STATES[stateKey]

    return (
        <HandbookSummary stateKey={stateKey} stateName={stateInfo.name} />
    )
}
