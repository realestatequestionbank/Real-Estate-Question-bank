import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { STATES, type StateKey } from '@/lib/constants'
import { HandbookViewer } from '@/components/handbook/handbook-viewer'
import { CDL_HANDBOOK_LANGUAGES } from '@/lib/data/handbooks'

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
    const stateName = stateInfo.name
    const stateCode = stateInfo.code

    return {
        title: `${stateName} CDL Handbook 2026 | Official Real Estate PDF | Real Estate Question Bank`,
        description: `Read, view, and download the official 2026 ${stateName} Commercial Driver's License (CDL) Handbook PDF. Your complete Real Estate CDL study guide for Class A, B, and C commercial real estate exams.`,
        keywords: [
            `${stateName} CDL handbook`,
            `${stateName} commercial driver handbook`,
            `${stateCode} Real Estate CDL handbook 2026`,
            `${stateName} CDL manual PDF`,
            `${stateName} Class A CDL manual`,
            `${stateName} CDL study guide`
        ],
        openGraph: {
            title: `${stateName} CDL Handbook 2026 | Official Real Estate PDF`,
            description: `Read the complete, official 2026 ${stateName} CDL handbook online. Download the PDF directly.`,
        }
    }
}

export function generateStaticParams() {
    return Object.keys(STATES).map((state) => ({
        state: state,
    }))
}

function formatStateName(name: string): string {
    return name
        .split(/\s+|-/)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join('_');
}

export default function CdlHandbookPage({ params }: PageProps) {
    if (!isValidState(params.state)) {
        notFound()
    }

    const stateKey = params.state
    const stateInfo = STATES[stateKey]
    const stateName = stateInfo.name

    // Check for available CDL languages
    const languages = CDL_HANDBOOK_LANGUAGES[stateKey]

    // Construct PDF URL
    // If languages exist, use the first one (usually English) as default
    // Otherwise fallback to convention
    let pdfUrl: string
    if (languages && languages.length > 0) {
        pdfUrl = languages[0].pdf
    } else {
        const stateNameFormatted = formatStateName(stateName)
        pdfUrl = `/pdf/${stateNameFormatted}_CDL_Handbook_2026.pdf`
    }

    // Link to the CDL real estate exam page for this state
    const summaryUrl = `/${stateKey}-cdl-permit-test`

    return (
        <HandbookViewer
            state={stateKey}
            stateName={stateName}
            departmentName="CDL"
            pdfUrl={pdfUrl}
            languages={languages}
            summaryUrl={summaryUrl}
            isCdl={true}
        />
    )
}
