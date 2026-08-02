'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { useAuth } from '@/contexts/auth-context'
import { PracticeTest } from '@/components/fines-and-limits/practice-test'
import { FINES_AND_LIMITS_QUESTIONS } from '@/components/fines-and-limits/questions'
import { Button } from '@/components/ui/button'
import { ArrowRight, AlertTriangle, Crown, ChevronRight, DollarSign, HelpCircle, BookOpen, CheckCircle2, AlertCircle, ScrollText } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState, useRef } from 'react'
import { StateHubsSection } from '@/components/state-hubs-section'

const currentYear = new Date().getFullYear()

const NAV_ITEMS = [
    { id: 'speed-limits', label: 'Speed Limits' },
    { id: 'fines', label: 'Fines' },
    { id: 'points', label: 'Points' },
    { id: 'dui', label: 'DUI' },
    { id: 'permits', label: 'Permits' },
    { id: 'special-zones', label: 'Special Zones' },
    { id: 'after-ticket', label: 'After a Ticket' },
    { id: 'practice-test', label: 'Practice Test' },
]

interface WashingtonFinesLimitsContentProps {
    faqData: { question: string; answer: string }[]
}

export function WashingtonFinesLimitsContent({ faqData }: WashingtonFinesLimitsContentProps) {
    const { user, userData, isPremium, signOut } = useAuth()
    const router = useRouter()
    const [activeSection, setActiveSection] = useState('')
    const navRef = useRef<HTMLElement>(null)

    const handleLogin = () => router.push('/#login')
    const handleSignup = () => router.push('/#signup')
    const handleLogout = async () => await signOut()
    const handleDashboard = () => router.push('/dashboard')

    const scrollToTest = () => {
        document.getElementById('practice-test')?.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            { rootMargin: '-100px 0px -60% 0px' }
        )

        NAV_ITEMS.forEach(({ id }) => {
            const el = document.getElementById(id)
            if (el) observer.observe(el)
        })

        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        if (activeSection && navRef.current) {
            const activeLink = navRef.current.querySelector(`a[href="#${activeSection}"]`) as HTMLElement
            if (activeLink) {
                const nav = navRef.current
                const scrollLeft = activeLink.offsetLeft - (nav.offsetWidth / 2) + (activeLink.offsetWidth / 2)
                nav.scrollTo({ left: scrollLeft, behavior: 'smooth' })
            }
        }
    }, [activeSection])

    return (
        <div className="min-h-screen bg-white font-sans">
            <Navigation
                user={user}
                userData={userData}
                isPremium={isPremium}
                onLogin={handleLogin}
                onSignup={handleSignup}
                onLogout={handleLogout}
                onDashboard={handleDashboard}
                showGetPremiumLink
            />

            <main>
                {/* Breadcrumbs */}
                <div className="bg-gray-50 border-b border-gray-100">
                    <div className="container mx-auto px-4 py-3">
                        <nav className="flex items-center gap-2 text-sm text-gray-500">
                            <Link href="/" className="hover:text-[#007aff] transition-colors">Home</Link>
                            <ChevronRight className="w-4 h-4" />
                            <Link href="/#states" className="hover:text-[#007aff] transition-colors">States</Link>
                            <ChevronRight className="w-4 h-4" />
                            <Link href="/washington-real-estate-practice-test" className="hover:text-[#007aff] transition-colors">Washington</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span className="text-gray-900 font-medium">Fines &amp; Limits</span>
                        </nav>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="relative overflow-hidden bg-white">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"></div>

                    {/* Mobile-only: full-width image above text */}
                    <div className="relative lg:hidden w-full h-56 overflow-hidden">
                        <Image
                            src="/images/fines-and-limits/speed-limit-65.webp"
                            alt="Highway Speed Limit Sign"
                            fill
                            sizes="100vw"
                            quality={65}
                            className="object-cover object-center"
                            priority
                        />
                    </div>

                    <div className="container mx-auto px-4 relative z-10 pt-8 pb-20 md:pt-20 md:pb-24">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                                {/* Left Column - Text Content */}
                                <div className="text-left">
                                    <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 mb-4">
                                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                                        <span className="text-sm font-medium text-green-800">Based on WA DOL Handbook {currentYear}</span>
                                    </div>

                                    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-black mb-4 md:mb-6" style={{ lineHeight: '1.2' }}>
                                        Washington DOL <span className="text-[#007aff]">Fines and Limits</span> Permit Practice Test {currentYear}
                                    </h1>

                                    {/* Target Audience & Difficulty */}
                                    <div className="flex flex-wrap items-center gap-4 mb-6 text-sm">
                                        <div className="flex items-center gap-2">
                                            <AlertCircle className="w-4 h-4 text-orange-500" />
                                            <span className="text-gray-700 font-medium">Hard</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-gray-700">⏱️ 6 min</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-gray-700">📊 Avg. first-try score: 66%</span>
                                        </div>
                                    </div>

                                    <p className="text-base text-gray-600 mb-3 max-w-2xl leading-relaxed">
                                        <strong className="text-gray-900">Perfect for:</strong> Learner&apos;s permit applicants • First-time adult applicants
                                    </p>

                                    <p className="text-base text-gray-600 mb-8 md:mb-10 max-w-2xl leading-relaxed">
                                        Master Washington&apos;s traffic fines, speed limits, and point system with 25 challenging practice questions. These questions focus specifically on penalties and consequences under Washington state law — the topics that trip up most test-takers.
                                    </p>

                                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-start">
                                        <Button
                                            onClick={scrollToTest}
                                            size="lg"
                                            className="bg-[#007aff] hover:bg-[#0056cc] text-white text-base font-bold px-6 md:px-8 py-5 md:py-6 rounded-lg shadow-lg hover:shadow-xl transition-all border-0"
                                        >
                                            Start Practice Test
                                            <ArrowRight className="w-5 h-5 ml-2" />
                                        </Button>
                                    </div>
                                </div>

                                {/* Right Column - Image (desktop only) */}
                                <div className="relative hidden lg:block">
                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-md mx-auto">
                                        <Image
                                            src="/images/fines-and-limits/speed-limit-65.webp"
                                            alt="Highway Speed Limit Sign"
                                            width={448}
                                            height={448}
                                            sizes="448px"
                                            quality={70}
                                            className="w-full h-auto"
                                            priority
                                        />
                                    </div>
                                    <div className="max-w-md mx-auto mt-4">
                                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Exam topics covered here:</p>
                                        <div className="flex flex-wrap gap-2">
                                            {[
                                                'Speed Limits',
                                                'DUI Penalties',
                                                'Point System',
                                                'Traffic Fines',
                                                'School Zones',
                                                'Construction Zones',
                                                'License Suspension',
                                                'Graduated Licensing',
                                            ].map((tag) => (
                                                <span key={tag} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Updated Notice & Intro */}
                <section className="py-12 bg-white border-b border-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                            {/* Left column: notice + prose */}
                            <div>
                                {/* Updated Notice */}
                                <div className="bg-green-50 border-l-4 border-green-500 p-5 mb-8 rounded-r-lg">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h3 className="text-lg font-bold text-green-900 mb-1">Updated for July 2026</h3>
                                            <p className="text-green-800 text-sm leading-relaxed">
                                                This practice test is up to date as of July 2026. All 25 questions are based on Washington&apos;s official <Link href="/handbooks/washington" className="underline hover:text-green-900 font-medium">2026 Washington Driver Guide</Link> and the Revised Code of Washington (RCW Title 46).
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Detailed Introduction */}
                                <div className="prose prose-gray max-w-none">
                                    <p className="text-base text-gray-700 leading-relaxed mb-4">
                                        Understanding Washington&apos;s traffic fines and penalties is crucial for passing the DOL knowledge test — and for keeping your license once you have it. While most practice tests focus on road signs and right-of-way rules, this specialized test zeroes in on the consequences of traffic violations in Washington State.
                                    </p>
                                    <p className="text-base text-gray-700 leading-relaxed mb-4">
                                        This free practice test covers the penalties you&apos;ll face for violating Washington traffic laws. The questions are intentionally challenging because these topics are frequently tested on the actual DOL exam. You&apos;ll learn about Washington&apos;s speed limit system, its unique &quot;negligent driving&quot; offense, the point system, license suspension thresholds, and the serious consequences of DUI and reckless driving under RCW 46.61.
                                    </p>
                                    <p className="text-base text-gray-700 leading-relaxed">
                                        Expect questions about: how unpaid tickets affect your license, the number of points that trigger suspension, how long violations stay on your record, first-offense DUI penalties in Washington, the implied consent law, and the consequences for fleeing police. These are real Washington laws you need to know.
                                    </p>
                                </div>
                            </div>

                            {/* Right column: Why this matters */}
                            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 md:p-8 flex flex-col gap-6 items-start">
                                <div className="bg-blue-100 p-3 rounded-xl shrink-0">
                                    <ScrollText className="w-8 h-8 text-[#007aff]" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Why is this on the Washington DOL Test?</h3>
                                    <p className="text-base text-gray-700 leading-relaxed">
                                        The Washington DOL wants to ensure you understand the consequences of unsafe driving before you get behind the wheel. On your knowledge exam, you will likely encounter 3–5 questions specifically asking about:
                                    </p>
                                    <ul className="grid sm:grid-cols-2 gap-3 mt-4">
                                        <li className="flex items-center gap-2 text-sm font-medium text-gray-800">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                            Speed limits in specific zones
                                        </li>
                                        <li className="flex items-center gap-2 text-sm font-medium text-gray-800">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                            Washington&apos;s Basic Rule of Speed
                                        </li>
                                        <li className="flex items-center gap-2 text-sm font-medium text-gray-800">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                            Penalties for DUI in Washington
                                        </li>
                                        <li className="flex items-center gap-2 text-sm font-medium text-gray-800">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                            WA point system thresholds
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section Navigation Bar */}
                <div className="sticky top-14 md:top-16 z-40 bg-white border-b border-gray-200 shadow-sm">
                    <div className="container mx-auto px-4">
                        <nav ref={navRef} className="flex gap-1 overflow-x-auto scrollbar-hide py-2 -mx-4 px-4 md:mx-0 md:px-0 md:justify-center">
                            {NAV_ITEMS.map(({ id, label }) => (
                                <a
                                    key={id}
                                    href={`#${id}`}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
                                    }}
                                    className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeSection === id
                                        ? 'bg-[#007aff] text-white'
                                        : 'text-gray-600 hover:bg-blue-50 hover:text-[#007aff]'
                                        }`}
                                >
                                    {label}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>

                {/* ========== SECTION 1: Speed Limits ========== */}
                <section id="speed-limits" className="py-16 md:py-20 bg-gray-50 scroll-mt-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-7xl mx-auto">
                            <div className="relative group mb-6 md:mb-0 md:float-right md:ml-8 md:w-[45%] lg:w-[40%]">
                                <Image
                                    src="/images/fines-and-limits/speed-limit-65.webp"
                                    alt="Highway speed limit sign"
                                    width={600}
                                    height={400}
                                    className="rounded-2xl shadow-lg w-full"
                                />
                            </div>

                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Washington Speed Limits</h2>
                            <p className="text-gray-700 mb-6">
                                Washington uses statutory (default) speed limits under RCW 46.61.400 that apply even when no posted sign is visible. Exceeding these defaults is a traffic infraction and may be considered reckless under adverse conditions.
                            </p>

                            <div className="overflow-hidden rounded-lg border border-gray-200 mb-8">
                                <table className="w-full text-sm">
                                    <thead className="bg-gray-100 text-gray-500 uppercase text-xs tracking-wider">
                                        <tr>
                                            <th className="text-left px-5 py-3">Zone</th>
                                            <th className="text-right px-5 py-3">Washington Limit</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 bg-white">
                                        {[
                                            ['Residential/urban district', '25 mph'],
                                            ['School zone (children present)', '20 mph'],
                                            ['Business district', '25 mph'],
                                            ['Alley', '15 mph'],
                                            ['Two-lane undivided highway', '50 mph'],
                                            ['State highway / arterial', '60 mph'],
                                            ['Interstate/freeway', '60–70 mph'],
                                            ['Rural interstate (designated segments)', '70 mph'],
                                        ].map(([zone, limit]) => (
                                            <tr key={zone}>
                                                <td className="px-5 py-2.5 text-gray-800">{zone}</td>
                                                <td className="px-5 py-2.5 text-right font-semibold text-gray-900">{limit}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Washington&apos;s Basic Rule of Speed</h3>
                            <p className="text-gray-700 mb-4">
                                Washington&apos;s maximum interstate speed is 70 mph on certain designated rural segments. Most urban freeways are posted at 60–65 mph. Always obey posted signs, which take precedence over default limits.
                            </p>

                            <div className="bg-amber-50 border-l-4 border-amber-400 p-5 mb-8">
                                <h3 className="font-semibold text-gray-900 mb-1">DOL Test Tip: Washington&apos;s Basic Rule (RCW 46.61.400)</h3>
                                <p className="text-gray-700">
                                    Washington&apos;s &quot;Basic Rule&quot; states you must drive at a speed that is reasonable and prudent given current conditions — weather, visibility, road surface, and traffic. Even if you are below the posted limit, you can be cited if your speed is unsafe for conditions (e.g., driving 60 mph in heavy fog or black ice).
                                </p>
                            </div>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">When No Limit Is Posted in Washington</h3>
                            <p className="text-gray-700 mb-6">
                                If there is no speed limit sign in Washington, the statutory defaults under RCW 46.61.400 apply. You must recognize the type of area you are in (residential, business, highway) and apply the corresponding limit.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Minimum Speed &amp; Impeding Traffic</h3>
                            <p className="text-gray-700">
                                Driving too slowly can be just as dangerous as speeding. On Washington highways, you must not drive so slowly that you impede the normal flow of traffic (RCW 46.61.425). If you must drive slowly due to vehicle trouble, activate your hazard lights and move to the right shoulder.
                            </p>

                            <div className="clear-both"></div>
                        </div>
                    </div>
                </section>

                {/* ========== SECTION 2: Fines & Penalties ========== */}
                <section id="fines" className="py-16 md:py-20 bg-white scroll-mt-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-7xl mx-auto">
                            <div className="relative group mb-6 md:mb-0 md:float-right md:ml-8 md:w-[45%] lg:w-[40%]">
                                <Image
                                    src="/images/fines-and-limits/police-lights.webp"
                                    alt="Review mirror view of police traffic stop"
                                    width={600}
                                    height={400}
                                    className="rounded-2xl shadow-lg w-full"
                                />
                            </div>

                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Washington Fines &amp; Penalties</h2>
                            <p className="text-gray-700 mb-6">
                                Washington traffic fines include both a base fine and a mandatory victim assessment surcharge. Unlike some states, Washington calculates fines differently — the total you pay depends on the specific infraction code and county.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Washington Speeding Fine Tiers</h3>
                            <div className="overflow-hidden rounded-lg border border-gray-200 mb-8">
                                <table className="w-full text-sm">
                                    <thead className="bg-gray-100 text-gray-500 uppercase text-xs tracking-wider">
                                        <tr>
                                            <th className="text-left px-5 py-3">Over Limit</th>
                                            <th className="text-right px-5 py-3">WA Base Fine</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 bg-white">
                                        {[
                                            ['1–10 mph over', '$103'],
                                            ['11–15 mph over', '$116'],
                                            ['16–20 mph over', '$137'],
                                            ['21–25 mph over', '$189'],
                                            ['26+ mph over', '$250+'],
                                        ].map(([tier, fine]) => (
                                            <tr key={tier}>
                                                <td className="px-5 py-2.5 text-gray-800">{tier}</td>
                                                <td className="px-5 py-2.5 text-right font-semibold text-gray-900">{fine}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-sm text-gray-500 mb-8">Washington fines include a $5 victim assessment and a $43 criminal assessment for criminal traffic offenses. Infractions do not carry criminal penalties unless excessive (e.g., 26+ mph may be reckless driving).</p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Construction Zone Fines in Washington</h3>
                            <p className="text-gray-700 mb-6">
                                In Washington, fines are <strong>doubled</strong> in active construction zones when workers are present (RCW 46.61.527). A speeding ticket in a work zone could cost $200–$500+ before surcharges.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">School Zone &amp; School Bus Violations</h3>
                            <p className="text-gray-700 mb-2">
                                Speeding in a Washington school zone carries enhanced fines. Passing a stopped school bus with flashing red lights can result in a fine of <strong>up to $394</strong> and 6 points on your record. Camera-enforced school bus violations now apply in many Washington school districts.
                            </p>
                            <p className="text-gray-700 mb-8">
                                <strong>Exception:</strong> You are not required to stop for a school bus on the opposite side of a road divided by a raised physical median. A painted center line alone is not a divider.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Other Common Washington Violation Fines</h3>
                            <div className="overflow-hidden rounded-lg border border-gray-200 mb-6">
                                <table className="w-full text-sm">
                                    <tbody className="divide-y divide-gray-100 bg-white">
                                        {[
                                            ['Running a red light / stop sign', '$136+'],
                                            ['Reckless driving', 'Criminal – up to $5,000 + jail'],
                                            ['Seatbelt violation (driver)', '$124'],
                                            ['Handheld cell phone (1st offense)', '$136'],
                                            ['Handheld cell phone (2nd offense)', '$234'],
                                            ['Pedestrian right-of-way violation', '$189+'],
                                            ['Hit-and-run (property damage)', '$5,000+'],
                                            ['Hit-and-run (injury/death)', 'Felony — prison + fines'],
                                        ].map(([violation, fine]) => (
                                            <tr key={violation}>
                                                <td className="px-5 py-2.5 text-gray-800">{violation}</td>
                                                <td className="px-5 py-2.5 text-right font-semibold text-gray-900 whitespace-nowrap">{fine}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-sm text-gray-500">Fine amounts are based on Washington RCW. Actual costs include surcharges and court fees which vary by county.</p>

                            <div className="clear-both"></div>
                        </div>
                    </div>
                </section>

                {/* ========== SECTION 3: The Point System ========== */}
                <section id="points" className="py-16 md:py-20 bg-gray-50 scroll-mt-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-7xl mx-auto">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Washington Point System</h2>
                            <p className="text-gray-700 mb-8">
                                Washington&apos;s DOL tracks driving behavior using a points system under RCW 46.65. Each traffic conviction adds points to your record. Accumulating too many points within specific time windows triggers escalating consequences — from warning letters to license suspension.
                            </p>

                            <div className="overflow-hidden rounded-lg border border-gray-200 mb-8">
                                <table className="w-full text-sm">
                                    <thead className="bg-gray-100 text-gray-500 uppercase text-xs tracking-wider">
                                        <tr>
                                            <th className="text-left px-5 py-3">Violation</th>
                                            <th className="text-right px-5 py-3">WA Points</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 bg-white">
                                        {[
                                            ['Speeding (1–10 mph over)', '2'],
                                            ['Speeding (11–25 mph over)', '3'],
                                            ['Speeding (26+ mph over / reckless)', '6'],
                                            ['Running red light / stop sign', '3'],
                                            ['Improper lane change / unsafe turn', '2'],
                                            ['At-fault accident', '3'],
                                            ['Passing school bus with red lights', '6'],
                                            ['Reckless driving', '6'],
                                            ['DUI / DWI', '6'],
                                            ['Hit-and-run', '6'],
                                        ].map(([violation, pts]) => (
                                            <tr key={violation}>
                                                <td className="px-5 py-2.5 text-gray-800">{violation}</td>
                                                <td className="px-5 py-2.5 text-right font-semibold text-gray-900">{pts}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Washington Suspension Thresholds</h3>
                            <p className="text-gray-700 mb-2">
                                The Washington DOL may suspend your license if you accumulate:
                            </p>
                            <ul className="text-gray-700 space-y-1 list-disc pl-5 mb-8">
                                <li><strong>6 or more points in 12 months</strong> — Warning letter issued</li>
                                <li><strong>10 or more points in 12 months</strong> — License suspension</li>
                                <li><strong>14 or more points in 24 months</strong> — Extended suspension</li>
                            </ul>
                            <p className="text-gray-700 mb-8">
                                Points on your Washington driving record directly increase insurance premiums. A single reckless driving conviction can double or triple your premiums. Points stay on your Washington record for 3 years from the conviction date.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">How to Reduce Points in Washington</h3>
                            <ul className="text-gray-700 space-y-2 mb-8 list-disc pl-5">
                                <li><strong>Defensive driving course:</strong> Washington allows an approved course to reduce your points by 3 (once every 5 years).</li>
                                <li><strong>Points expire:</strong> Points remain on your Washington record for 36 months from the conviction date.</li>
                                <li><strong>Probation:</strong> If you accumulate warning-level points, the DOL may place you on probation, requiring violation-free driving for a set period.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* ========== SECTION 4: DUI / DWI Laws ========== */}
                <section id="dui" className="py-16 md:py-20 bg-white scroll-mt-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-7xl mx-auto">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Washington DUI / DWI Laws</h2>
                            <p className="text-gray-700 mb-8">
                                Driving Under the Influence is one of the most heavily tested topics on the Washington DOL knowledge exam. Washington has strict DUI laws under RCW 46.61.502. Expect at least 1–2 questions on BAC limits, implied consent, and penalties.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Washington BAC Limits</h3>
                            <div className="overflow-hidden rounded-lg border border-gray-200 mb-4">
                                <table className="w-full text-sm">
                                    <thead className="bg-gray-100 text-gray-500 uppercase text-xs tracking-wider">
                                        <tr>
                                            <th className="text-left px-5 py-3">Driver Type</th>
                                            <th className="text-right px-5 py-3">WA BAC Limit</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 bg-white">
                                        {[
                                            ['Standard (21+ non-commercial)', '0.08%'],
                                            ['Commercial vehicle operators', '0.04%'],
                                            ['Under 21 (Zero Tolerance)', '0.02%'],
                                        ].map(([driver, bac]) => (
                                            <tr key={driver}>
                                                <td className="px-5 py-2.5 text-gray-800">{driver}</td>
                                                <td className="px-5 py-2.5 text-right font-semibold text-gray-900">{bac}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-sm text-gray-500 mb-8">Washington enforces strict Zero Tolerance for drivers under 21 — a BAC of 0.02% or higher is illegal. Note: Washington&apos;s under-21 threshold is 0.02%, slightly different from some other states&apos; 0.01% threshold.</p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Washington Implied Consent Law (RCW 46.20.308)</h3>
                            <p className="text-gray-700 mb-8">
                                By driving on Washington roads, you have already &quot;consented&quot; to a breath or blood test if an officer has reasonable cause to suspect DUI. <strong>Refusing the test</strong> results in an automatic 1-year license revocation for a first refusal — even if you are later found not guilty. A second refusal within 7 years results in a 2-year revocation.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">First DUI Offense in Washington — Typical Consequences</h3>
                            <ul className="text-gray-700 space-y-1 list-disc pl-5 mb-8">
                                <li>License suspension: 90 days (minimum)</li>
                                <li>Fines: $350–$5,000+ (plus mandatory assessments)</li>
                                <li>Possible jail time: 24 hours – 364 days</li>
                                <li>Mandatory alcohol/drug evaluation and treatment</li>
                                <li>Ignition interlock device (IID) required for all driving during suspension</li>
                                <li>SR-22 insurance filing required for 3 years</li>
                            </ul>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Repeat Offense Escalation in Washington</h3>
                            <p className="text-gray-700 mb-2">Penalties escalate sharply with each subsequent conviction within 7 years:</p>
                            <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-8">
                                <li><strong>2nd offense:</strong> 2-year revocation, $500–$5,000+ fine, 30 days–364 days jail, mandatory treatment, IID required</li>
                                <li><strong>3rd offense:</strong> 3-year revocation, $1,000–$10,000+ fine, 90 days–364 days jail, treatment, IID. Third conviction within 7 years is a felony &quot;Vehicular Assault&quot; if injury resulted.</li>
                                <li><strong>DUI with injury or death:</strong> Felony vehicular assault or vehicular homicide — potential state prison sentence</li>
                            </ul>

                            <div className="bg-amber-50 border-l-4 border-amber-400 p-5">
                                <h3 className="font-semibold text-gray-900 mb-1">DOL Test Tip: Cannabis &amp; Drug-Impaired Driving in Washington</h3>
                                <p className="text-gray-700">
                                    Washington was the first state to legalize recreational cannabis, but Washington DUI laws apply to <strong>all impairing substances</strong>. A THC blood concentration of 5 ng/mL or above creates a legal presumption of DUI (RCW 46.61.502). However, even below that threshold, if you are impaired by cannabis, a DUI charge is possible. Prescription medications that cause impairment also apply.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========== SECTION 5: real estate license & GDL ========== */}
                <section id="permits" className="py-16 md:py-20 bg-gray-50 scroll-mt-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-7xl mx-auto">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Washington Learner&apos;s Permit &amp; Graduated Driver Licensing</h2>
                            <p className="text-gray-700 mb-8">
                                Washington uses a Graduated Driver Licensing (GDL) system under RCW 46.20.075, which phases aspiring agents into full privileges over time. This is a frequently tested topic on the DOL knowledge exam.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Washington&apos;s Three GDL Phases</h3>
                            <div className="overflow-hidden rounded-lg border border-gray-200 mb-8">
                                <table className="w-full text-sm">
                                    <thead className="bg-gray-100 text-gray-500 uppercase text-xs tracking-wider">
                                        <tr>
                                            <th className="text-left px-5 py-3">Phase</th>
                                            <th className="text-left px-5 py-3">Washington Rules</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 bg-white">
                                        <tr>
                                            <td className="px-5 py-3 font-semibold text-gray-900 align-top whitespace-nowrap">1. Instruction Permit</td>
                                            <td className="px-5 py-3 text-gray-700">Must be at least 15 years old. Must drive with a licensed adult (25+) or licensed parent/guardian at all times. Hold for at least 6 months. Complete 50 hours of supervised driving (10 at night).</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 font-semibold text-gray-900 align-top whitespace-nowrap">2. Intermediate License</td>
                                            <td className="px-5 py-3 text-gray-700">May drive unsupervised with restrictions: no passengers under 20 (except family) for first 6 months, no driving between midnight – 5 AM unless accompanied by a licensed adult 25+. Must be violation-free for 6 months before restrictions lift.</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 font-semibold text-gray-900 align-top whitespace-nowrap">3. Full License</td>
                                            <td className="px-5 py-3 text-gray-700">All GDL restrictions lifted at age 18 or after 12 consecutive months on an intermediate license without violations.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Cell Phone Prohibition in Washington</h3>
                            <p className="text-gray-700 mb-8">
                                Under Washington&apos;s Distracted Driving Law (RCW 46.61.672), all drivers — including those on a learner&apos;s permit or intermediate license — are prohibited from using a handheld device while driving. This includes texting, calling, and using apps. Even hands-free use is restricted for GDL holders.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Violation Penalties for Washington New Drivers</h3>
                            <p className="text-gray-700">
                                Violating Washington&apos;s GDL restrictions can result in an <strong>extended permit or intermediate period</strong>, delayed progression to the next phase, fines, or suspension. Any violation during the GDL period resets the violation-free clock, delaying full licensing.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ========== SECTION 6: Special Zones & Situations ========== */}
                <section id="special-zones" className="py-16 md:py-20 bg-white scroll-mt-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-7xl mx-auto">
                            <div className="relative group mb-6 md:mb-0 md:float-right md:ml-8 md:w-[45%] lg:w-[40%]">
                                <Image
                                    src="/images/fines-and-limits/school-zone-25.webp"
                                    alt="School zone speed limit sign 20 MPH"
                                    width={600}
                                    height={400}
                                    className="rounded-2xl shadow-lg w-full"
                                />
                            </div>

                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Special Zones &amp; Situations in Washington</h2>
                            <p className="text-gray-700 mb-8">
                                Certain areas and situations in Washington carry enhanced rules and penalties. The DOL knowledge test frequently asks about school buses, emergency vehicles, railroad crossings, and Washington&apos;s unique rules.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Construction Zones in Washington</h3>
                            <p className="text-gray-700 mb-6">
                                Fines are <strong>doubled</strong> in active Washington construction zones when workers are present (RCW 46.61.527). WSDOT designates active work zones with orange signs, reduced speed limits, and sometimes automated enforcement cameras.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Washington School Zones</h3>
                            <p className="text-gray-700 mb-6">
                                Washington school zone speed limits are typically <strong>20 mph</strong> when children are present or during posted hours — lower than many other states. Speed is enforced through both patrol and automated cameras near school crossings. Fines are substantially higher than standard speeding tickets.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">School Bus Stopping Rules in Washington (RCW 46.61.370)</h3>
                            <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-6">
                                <li><strong>Flashing red lights + stop arm:</strong> ALL traffic in BOTH directions must stop at least 20 feet from the bus.</li>
                                <li><strong>Divided highway exception:</strong> If the road has a raised physical median, oncoming traffic does not need to stop.</li>
                                <li><strong>Multi-lane road (no barrier):</strong> All lanes in both directions must stop.</li>
                                <li><strong>Washington penalty:</strong> Fine up to $394 + 6 points on record. Camera enforcement applies in many districts.</li>
                            </ul>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Emergency Vehicles &amp; Washington Move-Over Law (RCW 46.61.212)</h3>
                            <p className="text-gray-700 mb-6">
                                When an emergency vehicle approaches with lights/sirens, pull to the <strong>right edge of the road and stop</strong>. Washington&apos;s Move-Over law requires: when passing a stopped emergency vehicle, tow truck, or WSDOT vehicle on the roadside, move over one full lane or slow to a speed safe for conditions. Violations start at a $200 fine.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Railroad Crossings in Washington</h3>
                            <p className="text-gray-700 mb-6">
                                When warning signals activate in Washington, you must stop at least <strong>15 feet</strong> from the nearest rail. Never drive around lowered gates. Buses, school buses, and vehicles carrying hazardous materials must always stop at railroad crossings regardless of signals — this is a common test question.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Pedestrian &amp; Crosswalk Rules in Washington</h3>
                            <p className="text-gray-700 mb-2">
                                In Washington, pedestrians have the right-of-way in marked and <strong>unmarked</strong> crosswalks (any intersection). You must yield to blind pedestrians carrying a <strong>white cane</strong> or using a guide dog at all times (RCW 46.61.240) — this is a common test question.
                            </p>
                            <p className="text-gray-700 mb-6">
                                Never pass another vehicle that has stopped for a pedestrian at a crosswalk in Washington. Washington also has a &quot;vulnerable users&quot; law that increases penalties for collisions injuring pedestrians or cyclists.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Funeral Processions in Washington</h3>
                            <p className="text-gray-700">
                                In Washington, funeral processions have the right-of-way when operating with an escort. Do not cut into or interrupt a procession. Vehicles participating in a funeral procession may proceed through red lights after stopping, provided they yield to all cross traffic and pedestrians.
                            </p>

                            <div className="clear-both"></div>
                        </div>
                    </div>
                </section>

                {/* ========== SECTION 7: What Happens After a Ticket ========== */}
                <section id="after-ticket" className="py-16 md:py-20 bg-gray-50 scroll-mt-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-7xl mx-auto">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">What Happens After a Ticket in Washington</h2>
                            <p className="text-gray-700 mb-8">
                                Getting a Washington traffic ticket doesn&apos;t mean you have no options. You generally have three choices: pay the fine, request a mitigation hearing, or contest the ticket at a hearing.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Option 1: Pay the Fine</h3>
                            <p className="text-gray-700 mb-6">
                                Paying is an admission of the infraction. The violation goes on your Washington driving record, points are added, and your insurance may increase for 3 years.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Option 2: Mitigation Hearing in Washington</h3>
                            <p className="text-gray-700 mb-2">
                                You can appear before a district court judge to explain mitigating circumstances. The judge may reduce the fine, but the infraction still goes on your record and points are added.
                            </p>
                            <p className="text-gray-700 mb-6">
                                Washington also allows a defensive driving course (once every 5 years) to reduce your point total by 3, which may help avoid suspension thresholds.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Option 3: Contest the Ticket in Washington</h3>
                            <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-8">
                                <li><strong>Contested hearing (in person):</strong> You and the citing officer both appear before a judge. If the officer does not appear, the case is often dismissed.</li>
                                <li><strong>Deferred finding:</strong> Washington courts may allow a &quot;deferred finding&quot; for eligible infractions — you pay a fee, don&apos;t get points, and if you have no violations for 1 year, the infraction is dismissed.</li>
                                <li>Gather evidence: photos, dashcam footage, and witness statements can support your case.</li>
                            </ul>

                            <div className="bg-amber-50 border-l-4 border-amber-400 p-5 mb-8">
                                <h3 className="font-semibold text-gray-900 mb-1">Warning: Failure to Pay in Washington</h3>
                                <p className="text-gray-700">
                                    Ignoring a Washington traffic ticket leads to a failure-to-respond penalty, additional fines, license suspension, a collections referral, and a vehicle registration hold. The Washington DOL will not renew your license or vehicle tabs while you have outstanding infractions.
                                </p>
                            </div>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Out-of-State Tickets</h3>
                            <p className="text-gray-700">
                                Washington participates in the <strong>Driver License Compact (DLC)</strong>, an agreement to share traffic violation information. An out-of-state ticket will likely be reported to Washington and treated as if you received it locally — including points and insurance impact. Ignoring an out-of-state ticket can lead to license suspension in Washington.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Practice Test Section */}
                <section id="practice-test" className="py-16 md:py-24 bg-white relative scroll-mt-20">
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
                            <span className="text-[#007aff] font-bold tracking-wider uppercase text-sm mb-3 block">Interactive Exam Simulator</span>
                            <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-4 md:mb-6">
                                Test Your Knowledge
                            </h2>
                            <p className="text-lg md:text-xl text-gray-600">
                                These 25 questions are designed to mimic the style and difficulty of the actual Washington DOL knowledge test. Can you score the passing 80%?
                            </p>
                        </div>

                        <PracticeTest questions={FINES_AND_LIMITS_QUESTIONS} />

                        {/* Credibility Statement */}
                        <div className="mt-12 max-w-3xl mx-auto text-center">
                            <p className="text-sm text-gray-500 leading-relaxed">
                                Questions are created and maintained by the Real Estate Question Bank content team following a rigorous{' '}
                                <Link
                                    href="/editorial-standards-and-accuracy"
                                    className="relative text-[#007aff] font-medium after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#007aff] after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                                >
                                    editorial process
                                </Link>
                                . Content is updated regularly to reflect the latest{' '}
                                <Link
                                    href="/handbooks/washington"
                                    className="relative text-[#007aff] font-medium after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#007aff] after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                                >
                                    Washington Driver Guide
                                </Link>
                                {' '}and traffic laws. Official sources include the Washington Driver Guide, WSDOT publications, and the Revised Code of Washington (RCW Title 46).
                            </p>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-16 md:py-20 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-10 md:mb-12">
                                <div className="inline-flex items-center gap-2 text-[#007aff] font-bold mb-3">
                                    <HelpCircle className="w-5 h-5" />
                                    <span className="uppercase tracking-wider text-sm">Common Questions</span>
                                </div>
                                <h2 className="text-2xl md:text-4xl font-black text-gray-900">
                                    Frequently Asked Questions
                                </h2>
                            </div>

                            <div className="space-y-4">
                                {faqData.map((faq, index) => (
                                    <details
                                        key={index}
                                        className="group bg-white rounded-xl border border-gray-200 overflow-hidden"
                                    >
                                        <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer font-bold text-gray-900 hover:bg-gray-50 transition-colors">
                                            <span className="pr-4 text-left">{faq.question}</span>
                                            <ChevronRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform flex-shrink-0" />
                                        </summary>
                                        <div className="px-5 md:px-6 pb-5 md:pb-6 pt-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                                            {faq.answer}
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 md:py-24 bg-gray-900 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#007aff]/10"></div>
                    <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Ready for the Actual Exam?</h2>
                        <p className="text-base text-gray-400 mb-8 md:mb-10">
                            Fines &amp; limits is just one section. Get your Washington-specific premium study pack with a pass guarantee.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                            <Link
                                href="/washington-real-estate-practice-test"
                                className="inline-flex items-center justify-center px-6 md:px-8 py-4 bg-[#007aff] hover:bg-[#0056cc] text-white text-base font-bold rounded-xl transition-all shadow-lg hover:shadow-blue-500/25"
                            >
                                Try FREE Practice Test
                            </Link>
                            <Link
                                href="/real-estate-premium"
                                className="inline-flex items-center justify-center px-6 md:px-8 py-4 bg-transparent border border-gray-700 hover:border-white text-white text-base font-semibold rounded-xl transition-all"
                            >
                                <Crown className="w-5 h-5 mr-2 text-yellow-400" />
                                Get Premium
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <StateHubsSection />

            <Footer />
        </div>
    )
}
