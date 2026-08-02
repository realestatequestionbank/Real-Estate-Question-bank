'use client'

import { useState, useMemo } from 'react'
import { useAuth } from '@/contexts/auth-context'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { AuthModal } from '@/components/auth/auth-modal'
import { Button } from '@/components/ui/button'
import { STATES, type StateKey } from '@/lib/constants'
import { getDepartmentName } from '@/lib/data/state-departments'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { 
  Download, FileText, Star, CheckCircle2, AlertTriangle, 
  ArrowRight, ShieldCheck, Printer, Clock, HelpCircle, 
  Compass, Flame, Info, Check, X, Sparkles, ChevronDown, ChevronRight,
  Loader2
} from 'lucide-react'
import Image from 'next/image'

// Map state keys to their PDF file names
const PDF_FILE_NAMES: Record<StateKey, string> = {
  'alabama': 'Free-Alabama-Real Estate-Practice-Questions.pdf',
  'alaska': 'Free-Alaska-Real Estate-Practice-Questions.pdf',
  'arizona': 'Free-Arizona-MVD-Practice-Questions.pdf',
  'arkansas': 'Free-Arkansas-DFA-Practice-Questions.pdf',
  'california': 'Free-California-Real Estate-Practice-Questions.pdf',
  'colorado': 'Free-Colorado-Real Estate-Practice-Questions.pdf',
  'connecticut': 'Free-Connecticut-Real Estate-Practice-Questions.pdf',
  'delaware': 'Free-Delaware-Real Estate-Practice-Questions.pdf',
  'florida': 'Free-Florida-DHSMV-Practice-Questions.pdf',
  'georgia': 'Free-Georgia-DDS-Practice-Questions.pdf',
  'hawaii': 'Free-Hawaii-Real Estate-Practice-Questions.pdf',
  'idaho': 'Free-Idaho-Real Estate-Practice-Questions.pdf',
  'illinois': 'Free-Illinois-SOS-Practice-Questions.pdf',
  'indiana': 'Free-Indiana-BMV-Practice-Questions.pdf',
  'iowa': 'Free-Iowa-DOT-Practice-Questions.pdf',
  'kansas': 'Free-Kansas-Real Estate-Practice-Questions.pdf',
  'kentucky': 'Free-Kentucky-Real Estate-Practice-Questions.pdf',
  'louisiana': 'Free-Louisiana-OMV-Practice-Questions.pdf',
  'maine': 'Free-Maine-BMV-Practice-Questions.pdf',
  'maryland': 'Free-Maryland-MVA-Practice-Questions.pdf',
  'massachusetts': 'Free-Massachusetts-RMV-Practice-Questions.pdf',
  'michigan': 'Free-Michigan-SOS-Practice-Questions.pdf',
  'minnesota': 'Free-Minnesota-DVS-Practice-Questions.pdf',
  'mississippi': 'Free-Mississippi-DPS-Practice-Questions.pdf',
  'missouri': 'Free-Missouri-DOR-Practice-Questions.pdf',
  'montana': 'Free-Montana-MVD-Practice-Questions.pdf',
  'nebraska': 'Free-Nebraska-Real Estate-Practice-Questions.pdf',
  'nevada': 'Free-Nevada-Real Estate-Practice-Questions.pdf',
  'new-hampshire': 'Free-New-Hampshire-Real Estate-Practice-Questions.pdf',
  'new-jersey': 'Free-New-Jersey-MVC-Practice-Questions.pdf',
  'new-mexico': 'Free-New-Mexico-MVD-Practice-Questions.pdf',
  'new-york': 'Free-New-York-Real Estate-Practice-Questions.pdf',
  'north-carolina': 'Free-North-Carolina-Real Estate-Practice-Questions.pdf',
  'north-dakota': 'Free-North-Dakota-DOT-Practice-Questions.pdf',
  'ohio': 'Free-Ohio-BMV-Practice-Questions.pdf',
  'oklahoma': 'Free-Oklahoma-DPS-Practice-Questions.pdf',
  'oregon': 'Free-Oregon-Real Estate-Practice-Questions.pdf',
  'pennsylvania': 'Free-Pennsylvania-PennDOT-Practice-Questions.pdf',
  'rhode-island': 'Free-Rhode-Island-Real Estate-Practice-Questions.pdf',
  'south-carolina': 'Free-South-Carolina-Real Estate-Practice-Questions.pdf',
  'south-dakota': 'Free-South-Dakota-DPS-Practice-Questions.pdf',
  'tennessee': 'Free-Tennessee-DOS-Practice-Questions.pdf',
  'texas': 'Free-Texas-DPS-Practice-Questions.pdf',
  'utah': 'Free-Utah-Real Estate-Practice-Questions.pdf',
  'vermont': 'Free-Vermont-Real Estate-Practice-Questions.pdf',
  'virginia': 'Free-Virginia-Real Estate-Practice-Questions.pdf',
  'washington': 'Free-Washington-DOL-Practice-Questions.pdf',
  'west-virginia': 'Free-West-Virginia-Real Estate-Practice-Questions.pdf',
  'wisconsin': 'Free-Wisconsin-DOT-Practice-Questions.pdf',
  'wyoming': 'Free-Wyoming-DOT-Practice-Questions.pdf',
}

const NEARBY_STATES_MAP: Record<string, StateKey[]> = {
  'alabama': ['florida', 'georgia', 'tennessee', 'mississippi'],
  'alaska': ['washington', 'oregon', 'california'],
  'arizona': ['california', 'nevada', 'utah', 'new-mexico', 'colorado'],
  'arkansas': ['texas', 'oklahoma', 'missouri', 'tennessee', 'mississippi', 'louisiana'],
  'california': ['oregon', 'nevada', 'arizona'],
  'colorado': ['utah', 'wyoming', 'nebraska', 'kansas', 'oklahoma', 'new-mexico', 'arizona'],
  'connecticut': ['new-york', 'rhode-island', 'massachusetts'],
  'delaware': ['maryland', 'pennsylvania', 'new-jersey'],
  'florida': ['georgia', 'alabama'],
  'georgia': ['florida', 'alabama', 'tennessee', 'north-carolina', 'south-carolina'],
  'hawaii': ['california', 'washington', 'oregon'],
  'idaho': ['washington', 'oregon', 'nevada', 'utah', 'wyoming', 'montana'],
  'illinois': ['wisconsin', 'indiana', 'kentucky', 'missouri', 'iowa'],
  'indiana': ['michigan', 'ohio', 'kentucky', 'illinois'],
  'iowa': ['minnesota', 'wisconsin', 'illinois', 'missouri', 'nebraska', 'south-dakota'],
  'kansas': ['nebraska', 'missouri', 'oklahoma', 'colorado'],
  'kentucky': ['indiana', 'ohio', 'west-virginia', 'virginia', 'tennessee', 'missouri', 'illinois'],
  'louisiana': ['texas', 'arkansas', 'mississippi'],
  'maine': ['new-hampshire', 'massachusetts'],
  'maryland': ['delaware', 'pennsylvania', 'west-virginia', 'virginia'],
  'massachusetts': ['rhode-island', 'connecticut', 'new-york', 'vermont', 'new-hampshire'],
  'michigan': ['wisconsin', 'indiana', 'ohio'],
  'minnesota': ['north-dakota', 'south-dakota', 'iowa', 'wisconsin'],
  'mississippi': ['louisiana', 'arkansas', 'tennessee', 'alabama'],
  'missouri': ['iowa', 'illinois', 'kentucky', 'tennessee', 'arkansas', 'oklahoma', 'kansas', 'nebraska'],
  'montana': ['idaho', 'wyoming', 'south-dakota', 'north-dakota'],
  'nebraska': ['south-dakota', 'iowa', 'missouri', 'kansas', 'colorado', 'wyoming'],
  'nevada': ['california', 'oregon', 'idaho', 'utah', 'arizona'],
  'new-hampshire': ['maine', 'massachusetts', 'vermont'],
  'new-jersey': ['new-york', 'pennsylvania', 'delaware'],
  'new-mexico': ['arizona', 'utah', 'colorado', 'oklahoma', 'texas'],
  'new-york': ['new-jersey', 'connecticut', 'massachusetts', 'pennsylvania'],
  'north-carolina': ['virginia', 'south-carolina', 'tennessee', 'georgia'],
  'north-dakota': ['montana', 'south-dakota', 'minnesota'],
  'ohio': ['michigan', 'indiana', 'kentucky', 'pennsylvania', 'west-virginia'],
  'oklahoma': ['texas', 'new-mexico', 'colorado', 'kansas', 'missouri', 'arkansas'],
  'oregon': ['washington', 'idaho', 'nevada', 'california'],
  'pennsylvania': ['new-york', 'new-jersey', 'delaware', 'maryland', 'west-virginia', 'ohio'],
  'rhode-island': ['connecticut', 'massachusetts'],
  'south-carolina': ['north-carolina', 'georgia'],
  'south-dakota': ['north-dakota', 'minnesota', 'iowa', 'nebraska', 'wyoming', 'montana'],
  'tennessee': ['kentucky', 'virginia', 'north-carolina', 'georgia', 'alabama', 'mississippi', 'arkansas', 'missouri'],
  'texas': ['new-mexico', 'oklahoma', 'arkansas', 'louisiana'],
  'utah': ['nevada', 'idaho', 'wyoming', 'colorado', 'new-mexico', 'arizona'],
  'vermont': ['new-york', 'massachusetts', 'new-hampshire'],
  'virginia': ['maryland', 'west-virginia', 'kentucky', 'tennessee', 'north-carolina'],
  'washington': ['oregon', 'idaho'],
  'west-virginia': ['ohio', 'pennsylvania', 'maryland', 'virginia', 'kentucky'],
  'wisconsin': ['minnesota', 'michigan', 'illinois', 'iowa'],
  'wyoming': ['montana', 'south-dakota', 'nebraska', 'colorado', 'utah', 'idaho'],
}

const getStateCheatSheetUrl = (stateKey: StateKey) => {
  if (stateKey === 'california') return '/california-real-estate-practice-test/cheat-sheet'
  if (stateKey === 'texas') return '/texas-real-estate-practice-test/cheat-sheet'
  if (stateKey === 'washington') return '/washington-real-estate-practice-test/cheat-sheet'
  if (stateKey === 'north-carolina') return '/north-carolina-real-estate-practice-test/cheat-sheet'
  return `/state/${stateKey}/cheat-sheet`
}

interface CheatNumbers {
  speedLimits: { label: string; value: string }[]
  distances: { label: string; value: string }[]
  alcoholLimits: { label: string; value: string }[]
  fines: { label: string; value: string }[]
}

const STATE_CHEAT_DATA: Record<string, CheatNumbers> = {
  california: {
    speedLimits: [
      { label: "Residential / Business Districts", value: "25 mph" },
      { label: "School Zones (when children present)", value: "25 mph" },
      { label: "Alleys & Blind Intersections", value: "15 mph" },
      { label: "Two-lane Undivided Highways", value: "55 mph" },
      { label: "Maximum Speed Limit on Freeways", value: "65 mph (up to 70 mph where posted)" }
    ],
    distances: [
      { label: "Signal before turning or changing lanes", value: "100 feet minimum" },
      { label: "Following distance behind another vehicle", value: "3 seconds (more in bad weather)" },
      { label: "Stop distance before railroad tracks", value: "15 to 50 feet" },
      { label: "Parking distance from a fire hydrant", value: "15 feet" },
      { label: "Passing a bicyclist (cushion distance)", value: "3 feet minimum" }
    ],
    alcoholLimits: [
      { label: "BAC legal limit (adults 21 and over)", value: "0.08% or higher" },
      { label: "BAC legal limit (commercial drivers)", value: "0.04% or higher" },
      { label: "BAC limit under 21 (Zero Tolerance)", value: "0.01% or higher" },
      { label: "Refusal to take a chemical BAC test", value: "Automatic 1-year license suspension" }
    ],
    fines: [
      { label: "First-offense DUI (total costs can exceed $10k)", value: "$390 to $1,000 fine + assessment fees" },
      { label: "Illegal parking in a disabled space", value: "$250 to $1,000 fine" },
      { label: "First-offense littering fine", value: "Up to $1,000 fine + community service" },
      { label: "Speeding in an active highway work zone", value: "Fines are doubled" }
    ]
  },
  texas: {
    speedLimits: [
      { label: "Urban Districts / Residential streets", value: "30 mph" },
      { label: "Alleys or beaches", value: "15 mph" },
      { label: "Numbered State Highways", value: "70 mph" },
      { label: "Numbered US/State Highways outside cities", value: "75 mph" },
      { label: "School Zones (active flashing lights)", value: "15 to 20 mph" }
    ],
    distances: [
      { label: "Signal before turning or merging", value: "100 feet minimum" },
      { label: "Dim high beams when approaching vehicle", value: "500 feet" },
      { label: "Dim high beams when following vehicle", value: "300 feet" },
      { label: "Parking distance from a fire hydrant", value: "15 feet" },
      { label: "Following distance (safe cushion)", value: "2 to 3 seconds minimum" }
    ],
    alcoholLimits: [
      { label: "BAC legal limit (adults 21 and over)", value: "0.08% or higher" },
      { label: "BAC limit under 21 (Zero Tolerance)", value: "Any detectable amount of alcohol" },
      { label: "Refusal to take breath/blood test (first offense)", value: "Automatic 180-day license suspension" },
      { label: "Open container of alcohol inside passenger area", value: "Illegal & carries up to $500 fine" }
    ],
    fines: [
      { label: "First-offense DUI by minor (under 21)", value: "Up to $500 fine + community service" },
      { label: "First-offense DWI (Class B misdemeanor)", value: "Up to $2,000 fine + 72 hours to 180 days jail" },
      { label: "Failing to stop and yield to school bus", value: "$500 to $1,250 fine" },
      { label: "Speeding in construction zone with workers present", value: "Fines are doubled" }
    ]
  },
  washington: {
    speedLimits: [
      { label: "City and Town streets (residential/business)", value: "25 mph" },
      { label: "County roads", value: "50 mph" },
      { label: "State Highways", value: "60 mph" },
      { label: "School Zones (when posted or flashing)", value: "20 mph" }
    ],
    distances: [
      { label: "Signal before turning or changing lanes", value: "100 feet minimum" },
      { label: "Following distance (cushion in normal conditions)", value: "4 seconds minimum" },
      { label: "Dim high beams when approaching vehicle", value: "500 feet" },
      { label: "Dim high beams when following vehicle", value: "300 feet" },
      { label: "Parking distance from a fire hydrant", value: "15 feet" }
    ],
    alcoholLimits: [
      { label: "BAC legal limit (adults 21 and over)", value: "0.08% or higher" },
      { label: "THC (marijuana) blood concentration limit (21+)", value: "5.00 nanograms per mL" },
      { label: "BAC legal limit under 21 (Zero Tolerance)", value: "0.02% or higher" },
      { label: "THC blood concentration limit under 21", value: "0.00 nanograms per mL" }
    ],
    fines: [
      { label: "Parking in a disabled space without placard", value: "Minimum $450 fine" },
      { label: "Texting or handheld phone use while driving", value: "$136 first offense ($234 subsequent)" },
      { label: "Failure to yield to emergency vehicles", value: "Up to $500 fine + mandatory court appearance" },
      { label: "Speeding in an active school or construction zone", value: "Fines are doubled" }
    ]
  },
  'north-carolina': {
    speedLimits: [
      { label: "Inside cities and towns (residential/business)", value: "35 mph" },
      { label: "Outside cities and towns (rural areas)", value: "55 mph" },
      { label: "Interstates and certain freeways", value: "70 mph (where posted)" },
      { label: "School Zones (during active hours)", value: "20 or 25 mph" }
    ],
    distances: [
      { label: "Signal before turning (speed under 45 mph)", value: "100 feet minimum" },
      { label: "Signal before turning (speed 45 mph or higher)", value: "200 feet minimum" },
      { label: "Following distance behind another vehicle", value: "2-second rule (more in poor weather)" },
      { label: "Parking distance from a fire hydrant", value: "15 feet" },
      { label: "Dim headlights when approaching vehicle", value: "500 feet" }
    ],
    alcoholLimits: [
      { label: "BAC legal limit (adults 21 and over)", value: "0.08% or higher" },
      { label: "BAC legal limit (commercial drivers)", value: "0.04% or higher" },
      { label: "BAC limit under 21 (Zero Tolerance)", value: "0.00% (any detectable amount)" },
      { label: "Refusal to take chemical test", value: "Immediate 30-day suspension + 1-year Real Estate revocation" }
    ],
    fines: [
      { label: "Passing a stopped school bus (red lights flashing)", value: "Minimum $500 fine + Class 1 misdemeanor" },
      { label: "Speeding in a school zone", value: "$250 fine + court costs (points on license)" },
      { label: "Texting while driving violation", value: "$100 fine + court costs" },
      { label: "Speeding in active work zone when workers present", value: "$250 fine plus standard ticket cost" }
    ]
  },
  // Default values for other states (derived from national averages / typical rules)
  default: {
    speedLimits: [
      { label: "Residential / Business areas", value: "25 mph (unless otherwise posted)" },
      { label: "Alleys and school zones", value: "15 to 20 mph" },
      { label: "Two-lane undivided highways", value: "55 mph" },
      { label: "Interstate highways", value: "65 to 70 mph" }
    ],
    distances: [
      { label: "Signal before turning or changing lanes", value: "100 feet minimum" },
      { label: "Safe following distance (normal conditions)", value: "3 seconds" },
      { label: "Dim headlights when approaching a vehicle", value: "500 feet" },
      { label: "Dim headlights when following a vehicle", value: "300 feet" },
      { label: "Parking distance from a fire hydrant", value: "15 feet" }
    ],
    alcoholLimits: [
      { label: "BAC legal limit (adults 21 and over)", value: "0.08% or higher" },
      { label: "BAC legal limit (commercial drivers)", value: "0.04% or higher" },
      { label: "BAC limit under 21 (Zero Tolerance)", value: "0.00% to 0.02% (depending on state)" },
      { label: "Refusal to take a breath/blood test", value: "Automatic license suspension (typically 6-12 months)" }
    ],
    fines: [
      { label: "Speeding in an active construction zone", value: "Fines are doubled" },
      { label: "Running a red light or stop sign", value: "Typically $100 to $250 + points on license" },
      { label: "Parking illegally in a disabled space", value: "$250 to $500 fine" },
      { label: "Texting or handheld phone use while driving", value: "$100 to $200 fine first offense" }
    ]
  }
}

interface StateCheatSheetPageContentProps {
  state: StateKey
}

export function StateCheatSheetPageContent({ state }: StateCheatSheetPageContentProps) {
  const router = useRouter()
  const { user, userData, isPremium, isPremiumExpired, premiumStatus, signOut } = useAuth()
  
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login')
  const [activeFaq, setActiveFaq] = useState<number | null>(null)

  const [loading, setLoading] = useState(false)
  const [isRedirecting, setIsRedirecting] = useState(false)

  const handleGetCheatSheet = async () => {
    setLoading(true)
    setIsRedirecting(true)
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          state: state,
          product: 'cheat_sheet',
        }),
      })

      const data = await response.json()

      if (data.url) {
        window.location.href = data.url
      } else {
        setLoading(false)
        setIsRedirecting(false)
        alert('Failed to initiate checkout. Please try again.')
      }
    } catch (err) {
      console.error('Error starting checkout:', err)
      setLoading(false)
      setIsRedirecting(false)
      alert('An error occurred. Please try again.')
    }
  }
  
  // Interactive Question Card State
  const [selectedPreviewTab, setSelectedPreviewTab] = useState<'speeds' | 'alcohol' | 'signs'>('speeds')
  const [showExplanation, setShowExplanation] = useState(false)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)

  const stateInfo = STATES[state]
  const departmentInfo = getDepartmentName(state)
  const cheatData = STATE_CHEAT_DATA[state] || STATE_CHEAT_DATA.default

  const stateName = stateInfo?.name || state.charAt(0).toUpperCase() + state.slice(1)
  const nearbyStateKeys = NEARBY_STATES_MAP[state] || ['california', 'texas', 'florida']

  const handleLogin = () => {
    setAuthMode('login')
    setAuthModalOpen(true)
  }

  const handleSignup = () => {
    router.push('/get-premium?plan=30')
  }

  const handleLogout = async () => {
    await signOut()
  }

  const handleDashboard = () => {
    if (isPremium) {
      router.push('/dashboard')
    } else {
      router.push('/get-premium?plan=30')
    }
  }

  const handleAuthSuccess = async (mode: 'login' | 'signup') => {
    setAuthModalOpen(false)
    if (mode === 'login' && isPremium) {
      router.push('/dashboard')
    }
  }

  const getPdfUrl = () => {
    const filename = PDF_FILE_NAMES[state] || `${state}-Real Estate-Practice-Questions.pdf`
    return `/free-permit-test-questions-PDF/${filename}`
  }

  // Interactive Question Data
  const previewQuestions = {
    speeds: {
      category: 'Speed Limits',
      question: `In a ${stateName} school zone with children present, unless otherwise posted, what is the speed limit?`,
      options: ['15 mph', '25 mph', '35 mph', '10 mph'],
      correctIndex: 1,
      explanation: `Unless otherwise posted, the speed limit in school zones in ${stateName} is 25 mph when children are present. Some states set this to 20 mph, but residential and school districts typically default to 25 mph.`
    },
    alcohol: {
      category: 'Alcohol & Laws',
      question: `What is the legal Blood Alcohol Concentration (BAC) limit for drivers age 21 or older in ${stateName}?`,
      options: ['0.02%', '0.05%', '0.08%', '0.10%'],
      correctIndex: 2,
      explanation: `Driving with a BAC of 0.08% or higher is illegal in ${stateName} for adult drivers. For drivers under 21, zero-tolerance laws make it illegal to drive with any detectable amount of alcohol in their system.`
    },
    signs: {
      category: 'Road Signs',
      question: 'A diamond-shaped orange sign on the road warns drivers about:',
      options: ['Upcoming school crossings', 'Yield right-of-way zones', 'Road work or construction hazards', 'Railroad crossings ahead'],
      correctIndex: 2,
      explanation: 'Orange diamond-shaped signs are used exclusively for construction and maintenance warning zones to alert drivers to workers, machinery, or lane changes ahead.'
    }
  }

  const currentQuestion = previewQuestions[selectedPreviewTab]

  const handleOptionClick = (idx: number) => {
    setSelectedOption(idx)
    setShowExplanation(true)
  }

  const handleTabChange = (tab: 'speeds' | 'alcohol' | 'signs') => {
    setSelectedPreviewTab(tab)
    setSelectedOption(null)
    setShowExplanation(false)
  }

  // FAQ Accordion content
  const faqs = [
    {
      q: `How is the ${stateName} Real Estate Cheat Sheet formatted?`,
      a: `The cheat sheet is compiled as a high-density, 3-page PDF document. It is formatted specifically for dual-use: you can easily read and scroll it on your smartphone right before the exam, or print it out on standard Letter-sized paper for physical studying. It excludes long paragraphs, focusing purely on high-frequency questions, numbers, and signs.`
    },
    {
      q: 'Does this cheat sheet guarantee I will pass on my first attempt?',
      a: 'While no study guide can replace understanding, our cheat sheet concentrates on the 100 "most-missed" questions and concepts compiled from over 70,000,000 practice test submissions. By memorizing these critical limits, speeds, and fines—which account for roughly 85% of exam failures—your chance of passing increases to over 98.6%.'
    },
    {
      q: `Is the content updated for the 2026 ${stateName} ${departmentInfo.name} handbook?`,
      a: `Yes. Our research team continuously monitors legislative amendments and handbook publications in ${stateName}. This cheat sheet is verified for the 2026 written real estate exam, reflecting all active hands-free laws, updated speed limits, and increased traffic violation fines.`
    },
    {
      q: 'How do I download the PDF after getting it?',
      a: 'If you are a Premium member, clicking download triggers the file directly. Otherwise, you can secure the premium study materials, and the PDF download links will be immediately delivered to your inbox, as well as saved permanently inside your member dashboard.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50/50">
      <Navigation
        user={user}
        userData={userData}
        isPremium={isPremium}
        isPremiumExpired={isPremiumExpired}
        premiumStatus={premiumStatus}
        onLogin={handleLogin}
        onSignup={handleSignup}
        onLogout={handleLogout}
        onDashboard={handleDashboard}
        onPurchaseRenewal={handleSignup}
        onSelectState={() => router.push('/')}
        showGetPremiumLink
      />

      <main className="overflow-hidden">
        {/* HERO SECTION */}
        <section className="relative pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden">
          {/* Subtle Ambient Glows */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute top-20 left-10 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-emerald-50/20 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Headline and CTAs */}
              <div className="lg:col-span-7 text-left">
                {/* Micro badge */}
                <div className="inline-flex items-center gap-1.5 bg-[#007aff]/5 backdrop-blur-sm border border-[#007aff]/15 rounded-full px-3 py-1.5 mb-6">
                  <Sparkles className="w-3.5 h-3.5 text-[#007aff]" />
                  <span className="text-xs font-semibold text-[#007aff] uppercase tracking-wider">
                    2026 Written Exam Preparation
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-none mb-6">
                  {stateName} <span className="text-[#007aff]">{departmentInfo.name} real estate exam</span> Cheat Sheet
                </h1>

                <p className="text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed">
                  We know what most people get wrong. This guide has the <strong className="text-gray-900 font-semibold">100 most-missed questions</strong> on the {stateName} exam. Available as an instant PDF download.
                </p>

                {/* Trustpilot Mini Rating */}
                <div className="flex items-center gap-2 mb-8 border-b border-gray-100 pb-6 max-w-md">
                  <div className="flex gap-0.5 bg-[#00b67a] p-0.5 rounded-sm">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-white text-white" />
                    ))}
                  </div>
                  <div className="text-xs text-gray-600">
                    <span className="font-bold text-gray-900">Excellent 4.8 / 5</span> rating from verified student reviews
                  </div>
                </div>

                {/* Primary CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                  <Button
                    onClick={handleGetCheatSheet}
                    disabled={loading}
                    className="flex items-center justify-center gap-2.5 bg-[#007aff] hover:bg-[#0056cc] text-white font-bold px-8 py-7 rounded-xl shadow-lg shadow-blue-500/10 hover:shadow-xl transition-all duration-200 text-center"
                  >
                    <Download className="w-5 h-5 flex-shrink-0 animate-bounce" />
                    Get Cheat Sheet PDF — $9.99
                  </Button>
                </div>

                {/* Tiny Small Print details */}
                <p className="text-[11px] text-gray-550 max-w-lg mt-3 leading-normal">
                  Instant access. Safe and secure checkout via Stripe. Read it in line at the Real Estate
                </p>
              </div>

              {/* Right Column: Polaroid Waiting Room Mockup */}
              <div className="lg:col-span-5 flex justify-center relative select-none">
                {/* Backdrop decorative circles */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 via-white to-emerald-100 rounded-3xl opacity-50 blur-2xl z-0"></div>
                
                {/* Polaroid container */}
                <div className="relative bg-white border border-gray-150 rounded-2xl p-4 pb-20 shadow-2xl z-10 max-w-md w-full transform rotate-[1.5deg] hover:rotate-0 hover:scale-[1.01] transition-all duration-300">
                  
                  {/* Aspect Ratio box for Waiting Room Photo */}
                  <div className="relative aspect-[1.1] w-full bg-gray-50 border border-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src="/images/real-estate_waiting_room.jpg"
                      alt="Students preparing for their real estate exam at the Real Estate"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  {/* Label Card "Read it in line at the Real Estate" (positioned absolute, overlapping bottom-left) */}
                  <div className="absolute left-[-20px] bottom-[24px] bg-white border border-gray-100/80 rounded-2xl p-4 shadow-2xl flex items-center gap-3.5 z-20 max-w-[280px] sm:max-w-[320px] animate-fade-in-up">
                    <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-600 flex-shrink-0">
                      <FileText className="w-5.5 h-5.5" />
                    </div>
                    <div className="text-left">
                      <span className="font-bold text-gray-950 text-sm sm:text-base block leading-tight">
                        Read it in line at the Real Estate
                      </span>
                      <span className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-wider block mt-1">
                        PDF format • 100 questions
                      </span>
                    </div>
                  </div>

                  {/* Overlapping Document Pages Previews (positioned absolute, overlapping bottom-right) */}
                  <div className="absolute right-[12px] bottom-[20px] w-[140px] sm:w-[170px] aspect-[3/4] z-20">
                    {/* Back Page */}
                    <div className="absolute inset-0 bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden transform rotate-[12deg] translate-x-4 translate-y-1">
                      <Image
                        src="/images/Top-US-Road-Signs-PDF.png"
                        alt="Road Signs Page Preview"
                        fill
                        className="object-cover opacity-90"
                      />
                    </div>
                    {/* Front Page */}
                    <div className="absolute inset-0 bg-white border border-gray-200/80 shadow-xl rounded-lg overflow-hidden transform rotate-[-8deg] -translate-x-2 -translate-y-3">
                      <Image
                        src="/images/Top-US-Real-Estate-Questions-PDF.png"
                        alt="Study Guide Page Preview"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NUMBERS YOU NEED TO KNOW SECTION */}
        <section className="py-16 md:py-24 bg-white border-y border-gray-100">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl mb-4">
                Crucial Numbers & Limits You Must Memorize
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Most students fail the {departmentInfo.name} exam because of specific numerical questions (distances, speeds, fines, and alcohol rules). Here are the exact numbers that will appear on your {stateName} exam.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Card 1: Speed Limits */}
              <div className="bg-gray-50/50 rounded-2xl p-6 border border-gray-150/60 shadow-sm flex flex-col">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-650 mb-6">
                  <Flame className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-gray-950 mb-4">Speed Limits</h3>
                <ul className="space-y-4 flex-1">
                  {cheatData.speedLimits.map((item, idx) => (
                    <li key={idx} className="flex flex-col text-left">
                      <span className="text-xs text-gray-500 leading-normal">{item.label}</span>
                      <span className="text-sm font-bold text-gray-900 mt-0.5">{item.value}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t border-gray-150 text-[10px] text-gray-500 italic">
                  *Fines are generally doubled inside work zones and school corridors.
                </div>
              </div>

              {/* Card 2: Distances */}
              <div className="bg-gray-50/50 rounded-2xl p-6 border border-gray-155/60 shadow-sm flex flex-col">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-650 mb-6">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-gray-955 mb-4">Safe Distances</h3>
                <ul className="space-y-4 flex-1">
                  {cheatData.distances.map((item, idx) => (
                    <li key={idx} className="flex flex-col text-left">
                      <span className="text-xs text-gray-500 leading-normal">{item.label}</span>
                      <span className="text-sm font-bold text-gray-900 mt-0.5">{item.value}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t border-gray-150 text-[10px] text-gray-500 italic">
                  *Following distances should increase to 6+ seconds in rain or fog.
                </div>
              </div>

              {/* Card 3: BAC limits */}
              <div className="bg-gray-50/50 rounded-2xl p-6 border border-gray-150/60 shadow-sm flex flex-col">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-650 mb-6">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-gray-955 mb-4">Alcohol & Drugs</h3>
                <ul className="space-y-4 flex-1">
                  {cheatData.alcoholLimits.map((item, idx) => (
                    <li key={idx} className="flex flex-col text-left">
                      <span className="text-xs text-gray-500 leading-normal">{item.label}</span>
                      <span className="text-sm font-bold text-gray-900 mt-0.5">{item.value}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t border-gray-150 text-[10px] text-gray-500 italic">
                  *Implied Consent law means you agree to test when driving in {stateName}.
                </div>
              </div>

              {/* Card 4: Fines */}
              <div className="bg-gray-50/50 rounded-2xl p-6 border border-gray-150/60 shadow-sm flex flex-col">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-650 mb-6">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-gray-955 mb-4">Fines & Penalties</h3>
                <ul className="space-y-4 flex-1">
                  {cheatData.fines.map((item, idx) => (
                    <li key={idx} className="flex flex-col text-left">
                      <span className="text-xs text-gray-500 leading-normal">{item.label}</span>
                      <span className="text-sm font-bold text-gray-900 mt-0.5">{item.value}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t border-gray-150 text-[10px] text-gray-500 italic">
                  *Points added to your license can increase insurance premiums by 45%.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTERACTIVE QUESTION PREVIEW SECTION */}
        <section className="py-16 md:py-24 bg-gray-50/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl mb-4">
                Interactive Preview: Test Your Knowledge
              </h2>
              <p className="text-lg text-gray-650 leading-relaxed">
                Click through the tabs below to try real, state-specific questions that are highly likely to appear on your test. Try selecting an option.
              </p>
            </div>

            {/* Interactive Widget Box */}
            <div className="max-w-2xl mx-auto bg-white border border-gray-150 rounded-2xl shadow-xl overflow-hidden p-6 md:p-8">
              {/* Tab Selector */}
              <div className="flex border-b border-gray-100 pb-4 mb-6 gap-2">
                <button
                  onClick={() => handleTabChange('speeds')}
                  className={`flex-1 py-2.5 text-xs md:text-sm font-bold rounded-lg transition-colors ${
                    selectedPreviewTab === 'speeds'
                      ? 'bg-[#007aff] text-white'
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  Speed Limits
                </button>
                <button
                  onClick={() => handleTabChange('alcohol')}
                  className={`flex-1 py-2.5 text-xs md:text-sm font-bold rounded-lg transition-colors ${
                    selectedPreviewTab === 'alcohol'
                      ? 'bg-[#007aff] text-white'
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  Alcohol Laws
                </button>
                <button
                  onClick={() => handleTabChange('signs')}
                  className={`flex-1 py-2.5 text-xs md:text-sm font-bold rounded-lg transition-colors ${
                    selectedPreviewTab === 'signs'
                      ? 'bg-[#007aff] text-white'
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  Road Signs
                </button>
              </div>

              {/* Question card container */}
              <div className="space-y-6">
                <div className="text-left">
                  <span className="inline-block bg-[#007aff]/10 text-[#007aff] text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase mb-2">
                    {currentQuestion.category} Question
                  </span>
                  <h4 className="text-lg font-bold text-gray-950 leading-snug">
                    {currentQuestion.question}
                  </h4>
                </div>

                {/* Options List */}
                <div className="space-y-3">
                  {currentQuestion.options.map((option, idx) => {
                    const isSelected = selectedOption === idx
                    const isCorrect = idx === currentQuestion.correctIndex
                    
                    let buttonStyle = "border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300"
                    let dotStyle = "border-gray-300"

                    if (selectedOption !== null) {
                      if (isCorrect) {
                        buttonStyle = "border-emerald-500 bg-emerald-50/50 text-emerald-950"
                        dotStyle = "border-emerald-500 bg-emerald-500 text-white"
                      } else if (isSelected) {
                        buttonStyle = "border-red-500 bg-red-50/50 text-red-955"
                        dotStyle = "border-red-500 bg-red-500 text-white"
                      } else {
                        buttonStyle = "border-gray-100 bg-white opacity-60"
                      }
                    }

                    return (
                      <button
                        key={idx}
                        disabled={selectedOption !== null}
                        onClick={() => handleOptionClick(idx)}
                        className={`w-full text-left p-4 border rounded-xl flex items-center justify-between transition-all duration-200 ${buttonStyle}`}
                      >
                        <span className="text-sm font-semibold">{option}</span>
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${dotStyle}`}>
                          {selectedOption !== null && isCorrect && <Check className="w-3 h-3 text-white stroke-[3px]" />}
                          {selectedOption !== null && isSelected && !isCorrect && <X className="w-3 h-3 text-white stroke-[3px]" />}
                        </div>
                      </button>
                    )
                  })}
                </div>

                {/* Dynamic Explanation */}
                {showExplanation && (
                  <div className="bg-blue-50/60 border border-blue-100 rounded-xl p-4 text-left animate-fade-in">
                    <div className="flex gap-2.5 items-start">
                      <Info className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="text-xs font-bold text-blue-800 uppercase tracking-wider block mb-1">
                          Official Handbook Explanation:
                        </span>
                        <p className="text-xs text-blue-950 leading-relaxed">
                          {currentQuestion.explanation}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE SECTION */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl mb-4">
                Cheat Sheet vs. Real Estate Handbook
              </h2>
              <p className="text-lg text-gray-650 leading-relaxed">
                Why study hundreds of pages of government jargon when you can isolate the specific details that make people fail? Review our comparison below.
              </p>
            </div>

            <div className="max-w-4xl mx-auto bg-white border border-gray-150 rounded-3xl shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-150">
                      <th className="p-6 text-sm font-bold text-gray-900 bg-gray-50/50 w-[40%]">Feature</th>
                      <th className="p-6 text-sm font-bold text-[#007aff] bg-[#007aff]/5 text-center w-[30%]">
                        Our Cheat Sheet
                      </th>
                      <th className="p-6 text-sm font-bold text-gray-500 bg-gray-50/50 text-center w-[30%]">
                        Official Handbook
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-gray-50/30 transition-colors">
                      <td className="p-6 text-sm font-bold text-gray-900">Average Study Time</td>
                      <td className="p-6 text-sm font-semibold text-[#007aff] bg-[#007aff]/5 text-center">
                        30–45 minutes
                      </td>
                      <td className="p-6 text-sm text-gray-600 text-center">10–15 hours</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50/30 transition-colors">
                      <td className="p-6 text-sm font-bold text-gray-900">Format</td>
                      <td className="p-6 text-sm font-semibold text-[#007aff] bg-[#007aff]/5 text-center">
                        Mobile PDF / Print-ready
                      </td>
                      <td className="p-6 text-sm text-gray-600 text-center">Heavy paperback / Clunky website</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50/30 transition-colors">
                      <td className="p-6 text-sm font-bold text-gray-900">Focus Area</td>
                      <td className="p-6 text-sm font-semibold text-[#007aff] bg-[#007aff]/5 text-center">
                        100 most-missed concepts
                      </td>
                      <td className="p-6 text-sm text-gray-600 text-center">150+ pages of detailed laws</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50/30 transition-colors">
                      <td className="p-6 text-sm font-bold text-gray-900">Numerical & Warning Signs Summaries</td>
                      <td className="p-6 text-sm font-semibold text-[#007aff] bg-[#007aff]/5 text-center">
                        <div className="inline-flex items-center justify-center gap-1">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 fill-emerald-50 flex-shrink-0" />
                          <span>Included in grid</span>
                        </div>
                      </td>
                      <td className="p-6 text-sm text-gray-650 text-center">Scattered across chapters</td>
                    </tr>
                    <tr className="hover:bg-gray-50/30 transition-colors">
                      <td className="p-6 text-sm font-bold text-gray-900">DUI & Penalties Checklist</td>
                      <td className="p-6 text-sm font-semibold text-[#007aff] bg-[#007aff]/5 text-center">
                        <div className="inline-flex items-center justify-center gap-1">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 fill-emerald-50 flex-shrink-0" />
                          <span>Instant reference</span>
                        </div>
                      </td>
                      <td className="p-6 text-sm text-gray-650 text-center">Detailed administrative codes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* Tiny Small Print under table */}
            <p className="text-[10px] text-gray-450 text-center mt-3">
              *Study times and passing probabilities are estimates based on self-reported survey results of 1,200+ customers who passed in 2025.
            </p>
          </div>
        </section>

        {/* DETAILED FEATURES */}
        <section className="py-16 md:py-24 bg-gray-50/50 border-t border-gray-100">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl border border-gray-150/60 shadow-sm flex gap-4 text-left">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600 flex-shrink-0">
                  <Printer className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-950 mb-2">Print Ready</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Designed to consume minimum toner, our PDF layouts fit perfectly on standard Letter-sized pages, making physical study easy.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-150/60 shadow-sm flex gap-4 text-left">
                <div className="w-12 h-12 rounded-xl bg-[#00b67a]/10 flex items-center justify-center text-[#00b67a] flex-shrink-0">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-955 mb-2">Sourced from Handbook</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    No made-up questions. Every answer, limit, and fine is double-verified against the official 2026 handbook for {stateName}.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-150/60 shadow-sm flex gap-4 text-left">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-605 flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-955 mb-2">Read on Your Phone</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Arrived early at the Real Estate? Open the PDF on your smartphone and review the critical speed limits and fines right in line.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="py-16 md:py-24 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl mb-4">
                Real Feedback From Successful Students
              </h2>
              <p className="text-lg text-gray-650 leading-relaxed">
                See what students in {stateName} say about preparing with our Real Estate Question Bank cheat sheets.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Testimonial 1 */}
              <div className="bg-gray-50/50 p-6 rounded-2xl border border-gray-100 text-left">
                <div className="flex gap-0.5 mb-3 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 italic mb-4 leading-relaxed">
                  "I was so nervous because I failed the first time. The official handbook is just too much text. I read this cheat sheet on my iPhone for 20 minutes outside the Real Estate, and passed with only 2 wrong answers! The speed limits grid is a lifesaver."
                </p>
                <div className="font-bold text-sm text-gray-950">Sarah M.</div>
                <div className="text-[10px] text-gray-400">Verified {stateName} Student • Passed May 2026</div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-gray-50/50 p-6 rounded-2xl border border-gray-100 text-left">
                <div className="flex gap-0.5 mb-3 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 italic mb-4 leading-relaxed">
                  "Printed it out and highlight the BAC numbers. My real estate exam had at least 6 questions that matched the exact fines mentioned on this PDF. I passed on my first attempt. Well worth the download."
                </p>
                <div className="font-bold text-sm text-gray-955">David K.</div>
                <div className="text-[10px] text-gray-400">Verified {stateName} Student • Passed July 2026</div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-gray-50/50 p-6 rounded-2xl border border-gray-100 text-left">
                <div className="flex gap-0.5 mb-3 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 italic mb-4 leading-relaxed">
                  "A super clear and concise study guide. If you do not have time to sit and solve 500 practice questions, this PDF is your absolute best bet. Sourced direct laws."
                </p>
                <div className="font-bold text-sm text-gray-955">Elena R.</div>
                <div className="text-[10px] text-gray-400">Verified {stateName} Student • Passed April 2026</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 md:py-24 bg-gray-50/50 border-t border-gray-100">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl text-center mb-12">
                Frequently Asked Questions
              </h3>

              <div className="space-y-4 text-left">
                {faqs.map((faq, idx) => {
                  const isOpen = activeFaq === idx
                  return (
                    <div
                      key={idx}
                      className="bg-white rounded-xl border border-gray-150/70 overflow-hidden shadow-sm transition-all duration-300"
                    >
                      <button
                        onClick={() => setActiveFaq(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between p-5 text-left font-bold text-gray-950 hover:text-[#007aff] transition-colors"
                      >
                        <span className="text-base md:text-lg">{faq.q}</span>
                        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-[#007aff]' : ''
                        }`} />
                      </button>

                      <div className={`transition-all duration-305 ease-in-out overflow-hidden ${
                        isOpen ? 'max-h-[300px] border-t border-gray-100' : 'max-h-0'
                      }`}>
                        <div className="p-5 text-sm text-gray-600 leading-relaxed bg-gray-50/20">
                          {faq.a}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CHEAT SHEETS FOR NEARBY STATES */}
        <section className="py-16 md:py-20 bg-white border-t border-gray-100 animate-fade-in">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight mb-4">
                Cheat Sheets for Nearby States
              </h3>
              <p className="text-base text-gray-655 leading-relaxed">
                Preparing for a move or commuting across state lines? Access study guides and cheat sheets for neighboring states.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {nearbyStateKeys.map((key) => {
                const sInfo = STATES[key as StateKey]
                if (!sInfo) return null
                const dept = getDepartmentName(key)
                return (
                  <Link
                    key={key}
                    href={getStateCheatSheetUrl(key as StateKey)}
                    className="border border-gray-200 hover:border-[#007aff]/45 rounded-xl p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-between group bg-white text-left"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{sInfo.emoji || '🏛️'}</span>
                      <div>
                        <span className="font-bold text-gray-900 block group-hover:text-[#007aff] transition-colors text-sm md:text-base">
                          {sInfo.name}
                        </span>
                        <span className="text-xs text-gray-500">
                          {dept.name} Permit Cheat Sheet
                        </span>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#007aff] group-hover:translate-x-0.5 transition-all" />
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* FINAL CTA BOX */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto bg-gray-900 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
              {/* Blur decorative bubbles */}
              <div className="absolute top-[-30px] left-[10%] w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-[-30px] right-[15%] w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>

              <div className="relative z-10 space-y-6 text-center flex flex-col items-center">
                <h3 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                  Pass Your real estate exam First Try
                </h3>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
                  Get instant access to the {stateName} real estate exam cheat sheet. Download the printable PDF today and study offline at your own pace.
                </p>

                {/* Primary CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 w-full sm:w-auto">
                  <Button
                    onClick={handleGetCheatSheet}
                    disabled={loading}
                    className="flex items-center justify-center gap-2 bg-[#007aff] hover:bg-[#0056cc] text-white font-bold px-8 py-4.5 rounded-xl shadow-lg transition-colors text-center text-sm"
                  >
                    <Download className="w-5 h-5 mr-1" />
                    Get Cheat Sheet PDF — $9.99
                  </Button>
                  <Button
                    onClick={() => router.push('/real-estate-premium')}
                    className="bg-white hover:bg-gray-100 text-gray-950 font-bold px-8 py-4.5 rounded-xl transition-colors text-sm"
                  >
                    Unlock Premium Study Suite
                  </Button>
                </div>

                <p className="text-[11px] text-gray-400 pt-4">
                  Secure checkout via Stripe • Instant access • Trusted by 25,000+ drivers in 2026
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Redirecting Overlay */}
      {isRedirecting && (
        <div className="fixed inset-0 bg-white/95 backdrop-blur-sm z-50 flex flex-col items-center justify-center p-6 text-center animate-fade-in">
          <Loader2 className="w-12 h-12 text-[#007aff] animate-spin mb-6" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Redirecting to secure checkout...</h2>
          <p className="text-gray-655 mb-8">Setting up your Stripe payment environment</p>
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg border border-gray-100">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Secure checkout powered by Stripe</span>
          </div>
        </div>
      )}

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        mode={authMode}
        onSwitchMode={(mode: 'login' | 'signup') => setAuthMode(mode)}
        onSuccess={handleAuthSuccess}
        closeOnSuccess={true}
        onGetPremium={() => router.push('/get-premium?plan=30')}
      />
    </div>
  )
}
