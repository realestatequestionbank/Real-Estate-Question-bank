import {
    Octagon,
    ArrowRightLeft,
    ShieldCheck,
    ShieldAlert,
    DollarSign,
    MapPin,
    LucideIcon
} from 'lucide-react'

export interface ConceptData {
    id: string
    title: string
    description: string
    href: string
    icon: LucideIcon
    gradient: string
    bgGradient: string
    borderColor: string
    iconBg: string
    iconColor: string
    accentColor: string
    shadowColor: string
    hoverShadowColor: string
    stats: { label: string; value: string }[]
    topics: string[]
    image: string
}

export const CONCEPTS: ConceptData[] = [
    {
        id: 'signs-and-signals',
        title: 'Signs & Signals',
        description: 'Master road signs, traffic lights, and pavement markings. The complete visual guide to understanding the road.',
        href: '/driving-test-concepts/signs-and-signals',
        icon: Octagon,
        gradient: 'from-amber-500 to-yellow-600',
        bgGradient: 'from-amber-50 to-yellow-50',
        borderColor: 'border-amber-200',
        iconBg: 'bg-amber-100',
        iconColor: 'text-amber-600',
        accentColor: 'text-amber-600',
        shadowColor: 'shadow-amber-500/20',
        hoverShadowColor: 'hover:shadow-amber-500/40',
        stats: [
            { label: 'Questions', value: '20+' },
            { label: 'Test Coverage', value: '~30%' }
        ],
        topics: ['Regulatory Signs', 'Traffic Lights', 'Road Markings', 'Warning Signs'],
        image: '/images/concepts/road-signs.webp'
    },
    {
        id: 'right-of-way',
        title: 'Right-of-Way Rules',
        description: 'Understand who goes first at intersections, roundabouts, and special situations. The most commonly missed topic on the test.',
        href: '/driving-test-concepts/right-of-way-rules',
        icon: ArrowRightLeft,
        gradient: 'from-blue-500 to-cyan-600',
        bgGradient: 'from-blue-50 to-cyan-50',
        borderColor: 'border-blue-200',
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-600',
        accentColor: 'text-blue-600',
        shadowColor: 'shadow-blue-500/20',
        hoverShadowColor: 'hover:shadow-blue-500/40',
        stats: [
            { label: 'Scenarios', value: '25+' },
            { label: 'Test Coverage', value: '~25%' }
        ],
        topics: ['4-Way Stops', 'Yield Situations', 'Emergency Vehicles', 'Pedestrians'],
        image: '/images/concepts/right-of-way.webp'
    },
    {
        id: 'safe-driving',
        title: 'Safe Driving',
        description: 'Defensive driving, weather conditions, and emergency maneuvers. Learn how to survive on the road and handle hazards.',
        href: '/driving-test-concepts/safe-driving',
        icon: ShieldCheck,
        gradient: 'from-teal-500 to-emerald-600',
        bgGradient: 'from-teal-50 to-emerald-50',
        borderColor: 'border-teal-200',
        iconBg: 'bg-teal-100',
        iconColor: 'text-teal-600',
        accentColor: 'text-teal-600',
        shadowColor: 'shadow-teal-500/20',
        hoverShadowColor: 'hover:shadow-teal-500/40',
        stats: [
            { label: 'Skills', value: '10+' },
            { label: 'Test Coverage', value: '~15%' }
        ],
        topics: ['Defensive Driving', 'Bad Weather', 'Emergencies', 'Hydroplaning'],
        image: '/images/concepts/safe-driving.png'
    },
    {
        id: 'alcohol-drugs',
        title: 'Alcohol & Drugs',
        description: 'Understand BAC limits, zero-tolerance laws, and the severe consequences of impaired driving. Critical for safety and the test.',
        href: '/driving-test-concepts/alcohol-drugs',
        icon: ShieldAlert,
        gradient: 'from-orange-500 to-red-500',
        bgGradient: 'from-orange-50 to-red-50',
        borderColor: 'border-orange-200',
        iconBg: 'bg-orange-100',
        iconColor: 'text-orange-600',
        accentColor: 'text-orange-600',
        shadowColor: 'shadow-orange-500/20',
        hoverShadowColor: 'hover:shadow-orange-500/40',
        stats: [
            { label: 'Laws', value: '10+' },
            { label: 'Test Coverage', value: '~10%' }
        ],
        topics: ['BAC Limits', 'Implied Consent', 'Zero Tolerance', 'DUI Penalties'],
        image: '/images/concepts/alcohol-drugs.webp'
    },
    {
        id: 'fines-and-limits',
        title: 'Fines & Limits',
        description: 'Master speed limits, traffic fines, DUI penalties, and the point system. Essential knowledge for staying safe and legal on the road.',
        href: '/driving-test-concepts/fines-and-limits',
        icon: DollarSign,
        gradient: 'from-red-500 to-rose-600',
        bgGradient: 'from-red-50 to-rose-50',
        borderColor: 'border-red-200',
        iconBg: 'bg-red-100',
        iconColor: 'text-red-600',
        accentColor: 'text-red-600',
        shadowColor: 'shadow-red-500/20',
        hoverShadowColor: 'hover:shadow-red-500/40',
        stats: [
            { label: 'Questions', value: '25+' },
            { label: 'Test Coverage', value: '~10%' }
        ],
        topics: ['Speed Limits', 'DUI Laws', 'Point System', 'Traffic Fines'],
        image: '/images/concepts/fines-and-limits.webp'
    },
    {
        id: 'parking-rules',
        title: 'Parking Rules',
        description: 'Master curb colors, hill parking, and distance requirements. Learn where you can and cannot park to avoid tickets.',
        href: '/driving-test-concepts/parking-rules',
        icon: MapPin,
        gradient: 'from-purple-500 to-indigo-600',
        bgGradient: 'from-purple-50 to-indigo-50',
        borderColor: 'border-purple-200',
        iconBg: 'bg-purple-100',
        iconColor: 'text-purple-600',
        accentColor: 'text-purple-600',
        shadowColor: 'shadow-purple-500/20',
        hoverShadowColor: 'hover:shadow-purple-500/40',
        stats: [
            { label: 'Rules', value: '10+' },
            { label: 'Test Coverage', value: '~5%' }
        ],
        topics: ['Curb Colors', 'Hill Parking', 'Hydrants', 'No Parking Zones'],
        image: '/images/concepts/parking-rules.webp'
    }
]
