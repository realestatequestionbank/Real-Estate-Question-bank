import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { STATES, type StateKey } from '@/lib/constants'
import { getDepartmentName } from '@/lib/data/state-departments'
import { AudioViewer } from '@/components/handbook/audio-viewer'
import { STATE_AUDIO_TRACKS, getFallbackAudioTracks } from '@/lib/data/audio-tracks'

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

    return {
        title: `${stateInfo.name} Real Estate Audio Handbook 2026 | Listen Online | Real Estate Question Bank`,
        description: `Listen to the official 2026 ${stateInfo.name} real estate license handbook audio. Learn rules of the road, traffic laws, and road safety on the go.`,
        keywords: [
            `${stateInfo.name} audio handbook`,
            `${stateInfo.name} driver's manual audio`,
            `${stateInfo.name} real-estate handbook voiceover`,
            `listen ${stateInfo.name} drivers handbook`,
        ],
        openGraph: {
            title: `${stateInfo.name} Real Estate Audio Handbook 2026 | Listen Online`,
            description: `Listen to the official 2026 ${stateInfo.name} real estate license handbook audio read by high-quality voiceover.`,
        }
    }
}

export function generateStaticParams() {
    return Object.keys(STATES).map((state) => ({
        state: state,
    }))
}

export default function AudioPage({ params }: PageProps) {
    if (!isValidState(params.state)) {
        notFound()
    }

    const stateKey = params.state
    const stateInfo = STATES[stateKey]
    const departmentInfo = getDepartmentName(stateKey)

    // Check if custom audio tracks exist for this state
    const customTracks = STATE_AUDIO_TRACKS[stateKey]
    const isFallback = !customTracks
    const tracks = customTracks || getFallbackAudioTracks(stateKey, stateInfo.name, departmentInfo.name)

    return (
        <AudioViewer
            state={stateKey}
            stateName={stateInfo.name}
            departmentName={departmentInfo.name}
            tracks={tracks}
            isFallback={isFallback}
        />
    )
}
