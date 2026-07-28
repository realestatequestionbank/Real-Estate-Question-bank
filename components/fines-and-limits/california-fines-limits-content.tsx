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

interface CaliforniaFinesLimitsContentProps {
    faqData: { question: string; answer: string }[]
}

export function CaliforniaFinesLimitsContent({ faqData }: CaliforniaFinesLimitsContentProps) {
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
                            <Link href="/california-real-estate-permit-test" className="hover:text-[#007aff] transition-colors">California</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span className="text-gray-900 font-medium">Fines & Limits</span>
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
                            alt="Highway Speed Limit 65 MPH Sign"
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
                                        <span className="text-sm font-medium text-green-800">Based on CA Real Estate Handbook 2026</span>
                                    </div>

                                    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-black mb-4 md:mb-6" style={{ lineHeight: '1.2' }}>
                                        California Real Estate <span className="text-[#007aff]">Fines and Limits</span> Permit Practice Test {currentYear}
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
                                            <span className="text-gray-700">📊 Avg. first-try score: 68%</span>
                                        </div>
                                    </div>

                                    <p className="text-base text-gray-600 mb-3 max-w-2xl leading-relaxed">
                                        <strong className="text-gray-900">Perfect for:</strong> real estate license applicants • First-time adult applicants
                                    </p>

                                    <p className="text-base text-gray-600 mb-8 md:mb-10 max-w-2xl leading-relaxed">
                                        Master California's traffic fines, speed limits, and point system with 25 challenging practice questions. These questions focus specifically on penalties and consequences—the topics that trip up most test-takers.
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
                                            alt="Highway Speed Limit 65 MPH Sign"
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
                                                This practice test is up to date as of July 2026. The 25 questions on this practice test are based on California's official <Link href="/handbooks/california" className="underline hover:text-green-900 font-medium">2026 California Real Estate Driver's Handbook</Link> and the California Vehicle Code.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Detailed Introduction */}
                                <div className="prose prose-gray max-w-none">
                                    <p className="text-base text-gray-700 leading-relaxed mb-4">
                                        Understanding California's traffic fines and penalties is crucial for passing your real estate exam—and for staying safe on the road. While most practice tests focus on road signs and right-of-way rules, this specialized test zeroes in on the consequences of traffic violations.
                                    </p>
                                    <p className="text-base text-gray-700 leading-relaxed mb-4">
                                        This free practice test covers the penalties you'll face for violating California traffic laws. The questions are intentionally challenging because these topics are frequently tested on the actual Real Estate exam. You'll learn about fine amounts, the point system, license suspension thresholds, and the serious consequences of DUI and hit-and-run offenses.
                                    </p>
                                    <p className="text-base text-gray-700 leading-relaxed">
                                        Expect questions about: how unpaid tickets affect your license, the number of points that trigger suspension, how long violations stay on your record, first-offense DUI penalties in California, hit-and-run consequences based on injury severity, and jail time for fleeing police. These aren't just hypothetical scenarios—they're real California laws you need to know.
                                    </p>
                                </div>
                            </div>

                            {/* Right column: Why this matters */}
                            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 md:p-8 flex flex-col gap-6 items-start">
                                <div className="bg-blue-100 p-3 rounded-xl shrink-0">
                                    <ScrollText className="w-8 h-8 text-[#007aff]" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Why is this on the real estate exam?</h3>
                                    <p className="text-base text-gray-700 leading-relaxed">
                                        The California Real Estate wants to ensure you understand the consequences of unsafe driving before you get behind the wheel. On your written exam, you will likely encounter 3-5 questions specifically asking about:
                                    </p>
                                    <ul className="grid sm:grid-cols-2 gap-3 mt-4">
                                        <li className="flex items-center gap-2 text-sm font-medium text-gray-800">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                            Speed limits in specific zones
                                        </li>
                                        <li className="flex items-center gap-2 text-sm font-medium text-gray-800">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                            California's Basic Speed Law
                                        </li>
                                        <li className="flex items-center gap-2 text-sm font-medium text-gray-800">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                            Penalties for DUI/DWI in California
                                        </li>
                                        <li className="flex items-center gap-2 text-sm font-medium text-gray-800">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                            California point system thresholds
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
                        <nav ref={navRef} className="flex gap-1 overflow-x-auto scrollbar-hide py-2 -mx-4 px-4 md:mx-0 md:px-0 md:justify-center relatives">
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
                                    alt="Highway speed limit sign 65 MPH"
                                    width={600}
                                    height={400}
                                    className="rounded-2xl shadow-lg w-full"
                                />
                            </div>

                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">California Speed Limits</h2>
                            <p className="text-gray-700 mb-6">
                                California sets "prima facie" (default) speed limits that apply even when no sign is visible. Driving above these defaults is automatically presumed unsafe under California law.
                            </p>

                            <div className="overflow-hidden rounded-lg border border-gray-200 mb-8">
                                <table className="w-full text-sm">
                                    <thead className="bg-gray-100 text-gray-500 uppercase text-xs tracking-wider">
                                        <tr>
                                            <th className="text-left px-5 py-3">Zone</th>
                                            <th className="text-right px-5 py-3">California Limit</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 bg-white">
                                        {[
                                            ['Residential district', '25 mph'],
                                            ['School zone (children present)', '25 mph'],
                                            ['Business district', '25 mph'],
                                            ['Alley', '15 mph'],
                                            ['Blind intersection (no view 100 ft)', '15 mph'],
                                            ['Two-lane undivided highway', '55 mph'],
                                            ['Highway / freeway', '65 mph'],
                                            ['Certain rural interstates', '70 mph'],
                                        ].map(([zone, limit]) => (
                                            <tr key={zone}>
                                                <td className="px-5 py-2.5 text-gray-800">{zone}</td>
                                                <td className="px-5 py-2.5 text-right font-semibold text-gray-900">{limit}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">California Highway Speed Limits</h3>
                            <p className="text-gray-700 mb-4">
                                California's maximum speed limit is 65 mph on most freeways and 70 mph on certain rural interstate highways. Two-lane undivided highways have a 55 mph limit unless otherwise posted.
                            </p>

                            <div className="bg-amber-50 border-l-4 border-amber-400 p-5 mb-8">
                                <h3 className="font-semibold text-gray-900 mb-1">Real Estate Test Tip: California's Basic Speed Law</h3>
                                <p className="text-gray-700">
                                    Under California Vehicle Code 22350, you may never drive faster than is safe for current conditions, regardless of the posted limit. If it's foggy, raining, or traffic is heavy, driving at the posted 65 mph may be illegal because it is unsafe.
                                </p>
                            </div>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">When No Limit Is Posted in California</h3>
                            <p className="text-gray-700 mb-6">
                                If there is no speed limit sign in California, you must follow the default (prima facie) limits for that type of area. The burden is on you to recognize which zone you are in.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Minimum Speed & Impeding Traffic</h3>
                            <p className="text-gray-700">
                                Driving too slowly can be just as dangerous as speeding. On California freeways, you must not drive so slowly that you impede the normal flow of traffic. If you must drive slowly due to vehicle trouble, use hazard lights and stay in the far-right lane.
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

                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">California Fines & Penalties</h2>
                            <p className="text-gray-700 mb-6">
                                A California traffic ticket is more expensive than the number printed on the citation. Your total cost is: <strong>base fine + court fees + penalty assessments</strong>. California's penalty assessment multipliers can make a $35 base fine cost $150-$200 out of pocket.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">California Speeding Fine Tiers (Base Fine)</h3>
                            <div className="overflow-hidden rounded-lg border border-gray-200 mb-8">
                                <table className="w-full text-sm">
                                    <thead className="bg-gray-100 text-gray-500 uppercase text-xs tracking-wider">
                                        <tr>
                                            <th className="text-left px-5 py-3">Over Limit</th>
                                            <th className="text-right px-5 py-3">CA Base Fine</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 bg-white">
                                        {[
                                            ['1–15 mph over', '$35'],
                                            ['16–25 mph over', '$70'],
                                            ['26+ mph over', '$100+'],
                                        ].map(([tier, fine]) => (
                                            <tr key={tier}>
                                                <td className="px-5 py-2.5 text-gray-800">{tier}</td>
                                                <td className="px-5 py-2.5 text-right font-semibold text-gray-900">{fine}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-sm text-gray-500 mb-8">Total out-of-pocket cost in California is typically 4-5x the base fine after penalty assessments and court fees.</p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Construction Zone Double Fines</h3>
                            <p className="text-gray-700 mb-6">
                                In California, fines are <strong>doubled</strong> in construction/work zones when workers are present. A $35 base fine becomes $70 before additional fees.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">School Zone & School Bus Violations</h3>
                            <p className="text-gray-700 mb-2">
                                Speeding in a California school zone carries enhanced fines (often $250+). Passing a stopped school bus with flashing red lights can result in a fine of <strong>$150–$1,000+</strong> and possible license suspension.
                            </p>
                            <p className="text-gray-700 mb-8">
                                <strong>Exception:</strong> You are not required to stop for a school bus on the opposite side of a road divided by a physical barrier (e.g., concrete median). A painted center line alone is not a divider.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Other Common California Violation Fines</h3>
                            <div className="overflow-hidden rounded-lg border border-gray-200 mb-6">
                                <table className="w-full text-sm">
                                    <tbody className="divide-y divide-gray-100 bg-white">
                                        {[
                                            ['Running a red light / stop sign', '$100+'],
                                            ['Reckless driving', '$145–$1,000+'],
                                            ['Seatbelt violation', '$20–$162'],
                                            ['Handheld cell phone / texting', '$20–$50 (1st), $50+ (repeat)'],
                                            ['Pedestrian right-of-way violation', '$100+'],
                                            ['Hit-and-run (property damage)', '$1,000–$10,000'],
                                            ['Hit-and-run (injury/death)', 'Felony — jail + fines'],
                                        ].map(([violation, fine]) => (
                                            <tr key={violation}>
                                                <td className="px-5 py-2.5 text-gray-800">{violation}</td>
                                                <td className="px-5 py-2.5 text-right font-semibold text-gray-900 whitespace-nowrap">{fine}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-sm text-gray-500">Fine amounts are based on California Vehicle Code. Actual costs include penalty assessments and court fees.</p>

                            <div className="clear-both"></div>
                        </div>
                    </div>
                </section>

                {/* ========== SECTION 3: The Point System ========== */}
                <section id="points" className="py-16 md:py-20 bg-gray-50 scroll-mt-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-7xl mx-auto">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">California Point System</h2>
                            <p className="text-gray-700 mb-8">
                                California tracks your driving behavior with a point system. Each traffic conviction adds points to your record. Accumulating too many points triggers escalating consequences.
                            </p>

                            <div className="overflow-hidden rounded-lg border border-gray-200 mb-8">
                                <table className="w-full text-sm">
                                    <thead className="bg-gray-100 text-gray-500 uppercase text-xs tracking-wider">
                                        <tr>
                                            <th className="text-left px-5 py-3">Violation</th>
                                            <th className="text-right px-5 py-3">CA Points</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 bg-white">
                                        {[
                                            ['Speeding', '1'],
                                            ['Running red light / stop sign', '1'],
                                            ['Improper lane change / unsafe turn', '1'],
                                            ['At-fault accident', '1'],
                                            ['Reckless driving', '2'],
                                            ['DUI / DWI', '2'],
                                            ['Hit-and-run', '2'],
                                        ].map(([violation, pts]) => (
                                            <tr key={violation}>
                                                <td className="px-5 py-2.5 text-gray-800">{violation}</td>
                                                <td className="px-5 py-2.5 text-right font-semibold text-gray-900">{pts}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">California Suspension Thresholds</h3>
                            <p className="text-gray-700 mb-2">
                                California will suspend your license if you accumulate:
                            </p>
                            <ul className="text-gray-700 space-y-1 list-disc pl-5 mb-8">
                                <li><strong>4 points in 12 months</strong></li>
                                <li><strong>6 points in 24 months</strong></li>
                                <li><strong>8 points in 36 months</strong></li>
                            </ul>
                            <p className="text-gray-700 mb-8">
                                Points on your California driving record also directly increase insurance premiums. A single speeding ticket can raise rates by 20–30%. A DUI can double or triple your premiums for 3–5 years.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">How to Reduce Points in California</h3>
                            <ul className="text-gray-700 space-y-2 mb-8 list-disc pl-5">
                                <li><strong>Traffic school:</strong> California lets you mask 1 point by completing an approved course (once every 18 months).</li>
                                <li><strong>Points expire:</strong> Points remain on your California record for 36 months from the violation date.</li>
                                <li><strong>Negligent operator treatment:</strong> If you accumulate too many points, you may receive a warning letter or be placed on probation.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* ========== SECTION 4: DUI / DWI Laws ========== */}
                <section id="dui" className="py-16 md:py-20 bg-white scroll-mt-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-7xl mx-auto">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">California DUI / DWI Laws</h2>
                            <p className="text-gray-700 mb-8">
                                Driving Under the Influence is one of the most heavily tested topics on the California permit exam. Expect at least 1–2 questions on BAC limits, implied consent, and penalties.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">California BAC Limits</h3>
                            <div className="overflow-hidden rounded-lg border border-gray-200 mb-4">
                                <table className="w-full text-sm">
                                    <thead className="bg-gray-100 text-gray-500 uppercase text-xs tracking-wider">
                                        <tr>
                                            <th className="text-left px-5 py-3">Driver Type</th>
                                            <th className="text-right px-5 py-3">CA BAC Limit</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 bg-white">
                                        {[
                                            ['Standard (21+ non-commercial)', '0.08%'],
                                            ['Commercial vehicle operators', '0.04%'],
                                            ['Under 21 (Zero Tolerance)', '0.01%'],
                                        ].map(([driver, bac]) => (
                                            <tr key={driver}>
                                                <td className="px-5 py-2.5 text-gray-800">{driver}</td>
                                                <td className="px-5 py-2.5 text-right font-semibold text-gray-900">{bac}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-sm text-gray-500 mb-8">California enforces strict Zero Tolerance for drivers under 21—any measurable BAC of 0.01% or higher is illegal.</p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">California Implied Consent Law</h3>
                            <p className="text-gray-700 mb-8">
                                By driving on California roads, you have already "consented" to submit to a chemical test (breath, blood, or urine) if an officer has reasonable cause to suspect DUI. <strong>Refusing the test</strong> results in an automatic license suspension (1 year for a first refusal) — even if you are later found not guilty.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">First DUI Offense in California — Typical Consequences</h3>
                            <ul className="text-gray-700 space-y-1 list-disc pl-5 mb-8">
                                <li>License suspension: 6 months</li>
                                <li>Fines: $390–$1,000 (plus penalty assessments totaling $1,800–$2,800)</li>
                                <li>Possible jail time: 48 hours – 6 months</li>
                                <li>Mandatory 3-month DUI education program</li>
                                <li>Possible ignition interlock device (IID)</li>
                                <li>SR-22 insurance filing required</li>
                            </ul>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Repeat Offense Escalation in California</h3>
                            <p className="text-gray-700 mb-2">Penalties escalate sharply with each subsequent conviction in California:</p>
                            <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-8">
                                <li><strong>2nd offense:</strong> 2-year suspension, $390–$1,000 fine (plus assessments), 96 hours–1 year jail, 18–30 month DUI program, IID required</li>
                                <li><strong>3rd offense:</strong> 3-year suspension, $390–$1,000 fine (plus assessments), 120 days–1 year jail, 30-month DUI program, designated as habitual traffic offender</li>
                                <li><strong>DUI with injury:</strong> Felony charges, potential state prison time, license revocation</li>
                            </ul>

                            <div className="bg-amber-50 border-l-4 border-amber-400 p-5">
                                <h3 className="font-semibold text-gray-900 mb-1">Real Estate Test Tip: Drug-Impaired Driving in California</h3>
                                <p className="text-gray-700">
                                    California DUI laws apply to <strong>all impairing substances</strong> — not just alcohol. This includes marijuana (even though it's legal in California), prescription medications that cause drowsiness, and illegal drugs. Any detectable impairment can result in a DUI charge.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========== SECTION 5: real estate license & GDL ========== */}
                <section id="permits" className="py-16 md:py-20 bg-gray-50 scroll-mt-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-7xl mx-auto">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">California real estate license & Graduated Driver Licensing</h2>
                            <p className="text-gray-700 mb-8">
                                California aspiring agents go through the Graduated Driver Licensing (GDL) system, which eases you into full driving privileges in three stages.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">California's Three GDL Phases</h3>
                            <div className="overflow-hidden rounded-lg border border-gray-200 mb-8">
                                <table className="w-full text-sm">
                                    <thead className="bg-gray-100 text-gray-500 uppercase text-xs tracking-wider">
                                        <tr>
                                            <th className="text-left px-5 py-3">Phase</th>
                                            <th className="text-left px-5 py-3">California Rules</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 bg-white">
                                        <tr>
                                            <td className="px-5 py-3 font-semibold text-gray-900 align-top whitespace-nowrap">1. real estate license</td>
                                            <td className="px-5 py-3 text-gray-700">Must drive with a licensed adult (25+) at all times. Hold for at least 6 months. Complete 50 hours of supervised driving (10 at night).</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 font-semibold text-gray-900 align-top whitespace-nowrap">2. Provisional License</td>
                                            <td className="px-5 py-3 text-gray-700">May drive unsupervised with restrictions: no passengers under 20 (except family) for first 12 months, no driving between 11 PM – 5 AM unless with licensed adult 25+.</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 font-semibold text-gray-900 align-top whitespace-nowrap">3. Full License</td>
                                            <td className="px-5 py-3 text-gray-700">All restrictions lifted at age 18 or after maintaining a clean provisional record.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Cell Phone Prohibition in California</h3>
                            <p className="text-gray-700 mb-8">
                                California real estate license and provisional license holders are prohibited from <strong>all</strong> cell phone use while driving — including hands-free. This is stricter than the rules for fully licensed adults.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Violation Penalties for California New Drivers</h3>
                            <p className="text-gray-700">
                                Violating California GDL restrictions can result in an <strong>extended permit period</strong>, delayed progression to the next phase, fines, or suspension. The violation stays on your record and may affect insurance rates.
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
                                    alt="School zone speed limit sign 25 MPH"
                                    width={600}
                                    height={400}
                                    className="rounded-2xl shadow-lg w-full"
                                />
                            </div>

                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Special Zones & Situations in California</h2>
                            <p className="text-gray-700 mb-8">
                                Certain areas and situations in California carry enhanced rules and penalties. The California Real Estate Exam frequently asks about school buses, emergency vehicles, and railroad crossings.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Construction Zones in California</h3>
                            <p className="text-gray-700 mb-6">
                                Fines are <strong>doubled</strong> in active California construction zones when workers are present. Speeding through a work zone can also carry additional points and possible jail time.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">California School Zones</h3>
                            <p className="text-gray-700 mb-6">
                                California school zone speed limits (25 mph) are typically active when children are present or during posted hours. Many California jurisdictions use speed cameras for enforcement. Fines are significantly higher than standard speeding tickets.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">School Bus Stopping Rules in California</h3>
                            <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-6">
                                <li><strong>Flashing red lights + stop arm:</strong> ALL traffic in BOTH directions must stop.</li>
                                <li><strong>Divided highway exception:</strong> If the road has a physical barrier (raised median), oncoming traffic does not need to stop.</li>
                                <li><strong>Multi-lane road (no barrier):</strong> All lanes in both directions must stop.</li>
                                <li><strong>Penalty in California:</strong> $150–$1,000+ fine, possible license suspension, 1 point on record.</li>
                            </ul>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Emergency Vehicles & California Move-Over Law</h3>
                            <p className="text-gray-700 mb-6">
                                When an emergency vehicle approaches with lights/sirens, pull to the <strong>right edge of the road and stop</strong>. California's Move-Over law requires: when passing a stopped emergency vehicle, tow truck, or Caltrans vehicle on the roadside, you must move over one lane or slow down. Fines range from $50 to $400.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Railroad Crossings in California</h3>
                            <p className="text-gray-700 mb-6">
                                When warning signals activate in California, you must stop at least <strong>15 feet</strong> from the nearest rail. Never drive around lowered gates. Buses and vehicles carrying hazardous materials must always stop at railroad crossings regardless of signals.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Pedestrian & Crosswalk Rules in California</h3>
                            <p className="text-gray-700 mb-2">
                                In California, pedestrians have the right-of-way in marked and <strong>unmarked</strong> crosswalks (any intersection). You must yield to blind pedestrians carrying a <strong>white cane</strong> or using a guide dog at all times — this is a common test question.
                            </p>
                            <p className="text-gray-700 mb-6">
                                Never pass another vehicle that has stopped for a pedestrian at a crosswalk in California.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Funeral Processions in California</h3>
                            <p className="text-gray-700">
                                In California, funeral processions have the right-of-way. Do not cut into or interrupt a procession.
                            </p>

                            <div className="clear-both"></div>
                        </div>
                    </div>
                </section>

                {/* ========== SECTION 7: What Happens After a Ticket ========== */}
                <section id="after-ticket" className="py-16 md:py-20 bg-gray-50 scroll-mt-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-7xl mx-auto">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">What Happens After a Ticket in California</h2>
                            <p className="text-gray-700 mb-8">
                                Getting a California traffic ticket doesn't mean you have no options. You generally have three choices: pay the fine, attend traffic school, or contest the ticket.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Option 1: Pay the Fine</h3>
                            <p className="text-gray-700 mb-6">
                                Paying is an admission of guilt. The violation goes on your California driving record, points are added, and your insurance may increase.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Option 2: Traffic School in California</h3>
                            <p className="text-gray-700 mb-2">
                                Attend a California-approved course to mask the point from your record. The fine is usually still owed, but your insurance stays unaffected.
                            </p>
                            <p className="text-gray-700 mb-6">
                                California traffic school is available for minor moving violations and can be used once every <strong>18 months</strong>. It is <strong>not</strong> available for DUI, reckless driving, or violations that caused injury.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Option 3: Contest the Ticket in California</h3>
                            <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-8">
                                <li><strong>Trial by written declaration (mail):</strong> Submit your defense in writing. If denied, you can still request an in-person hearing.</li>
                                <li><strong>Court appearance:</strong> Appear before a judge. The citing officer must also appear; if they don't, the case is often dismissed.</li>
                                <li>Take photos of the scene, note conditions, and gather evidence that supports your case.</li>
                            </ul>

                            <div className="bg-amber-50 border-l-4 border-amber-400 p-5 mb-8">
                                <h3 className="font-semibold text-gray-900 mb-1">Warning: Failure to Pay in California</h3>
                                <p className="text-gray-700">
                                    Ignoring a California ticket leads to late fees, license suspension, a civil assessment penalty, collections on your credit report, and a vehicle registration hold.
                                </p>
                            </div>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Out-of-State Tickets</h3>
                            <p className="text-gray-700">
                                California participates in the <strong>Driver License Compact (DLC)</strong>, an agreement to share traffic violation information. An out-of-state ticket will likely be reported to California and treated as if you received it locally — including points and insurance impact. Ignoring an out-of-state ticket can lead to license suspension in California.
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
                                These 25 questions are designed to mimic the style and difficulty of the actual Real Estate Exam. Can you score the passing 83%?
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
                                    href="/handbooks/california"
                                    className="relative text-[#007aff] font-medium after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#007aff] after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                                >
                                    state Driver Handbooks
                                </Link>
                                {' '}and traffic laws. Official sources include state Driver Handbooks, Real Estate websites, and the Uniform Vehicle Code.
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
                                        <div className="px-5 md:px-6 pb-5 md:pb-6 pt-4 text-gray-600 leading-relaxed border-t border-gray-100">
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
                        <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">Ready for the actual Exam?</h2>
                        <p className="text-gray-400 text-base md:text-lg mb-8 md:mb-10">
                            Fines and limits are just one section. Get your California-specific premium study pack with pass guarantee.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                            <Link
                                href="/california-real-estate-permit-test"
                                className="inline-flex items-center justify-center px-6 md:px-8 py-4 bg-[#007aff] hover:bg-[#0056cc] text-white text-base md:text-lg font-bold rounded-xl transition-all shadow-lg hover:shadow-blue-500/25"
                            >
                                Try FREE Practice Test
                            </Link>
                            <Link
                                href="/real-estate-premium"
                                className="inline-flex items-center justify-center px-6 md:px-8 py-4 bg-transparent border border-gray-700 hover:border-white text-white text-base md:text-lg font-semibold rounded-xl transition-all"
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
