'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { useAuth } from '@/contexts/auth-context'
import { PracticeTest } from '@/components/fines-and-limits/practice-test'
import { FINES_AND_LIMITS_QUESTIONS } from '@/components/fines-and-limits/questions'
import { Button } from '@/components/ui/button'
import { ArrowRight, AlertTriangle, Crown, ChevronRight, HelpCircle, CheckCircle2, AlertCircle, ScrollText } from 'lucide-react'
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

interface TexasFinesLimitsContentProps {
    faqData: { question: string; answer: string }[]
}

export function TexasFinesLimitsContent({ faqData }: TexasFinesLimitsContentProps) {
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
                            <Link href="/texas-real-estate-practice-test" className="hover:text-[#007aff] transition-colors">Texas</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span className="text-gray-900 font-medium">Fines &amp; Limits</span>
                        </nav>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="relative overflow-hidden bg-white">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"></div>

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
                                <div className="text-left">
                                    <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 mb-4">
                                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                                        <span className="text-sm font-medium text-green-800">Based on TX DPS Handbook {currentYear}</span>
                                    </div>

                                    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-black mb-4 md:mb-6" style={{ lineHeight: '1.2' }}>
                                        Texas DPS <span className="text-[#007aff]">Fines and Limits</span> Permit Practice Test {currentYear}
                                    </h1>

                                    <div className="flex flex-wrap items-center gap-4 mb-6 text-sm">
                                        <div className="flex items-center gap-2">
                                            <AlertCircle className="w-4 h-4 text-orange-500" />
                                            <span className="text-gray-700 font-medium">Hard</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-gray-700">⏱️ 6 min</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-gray-700">📊 Avg. first-try score: 63%</span>
                                        </div>
                                    </div>

                                    <p className="text-base text-gray-600 mb-3 max-w-2xl leading-relaxed">
                                        <strong className="text-gray-900">Perfect for:</strong> Learner&apos;s permit applicants • First-time adult applicants
                                    </p>

                                    <p className="text-base text-gray-600 mb-8 md:mb-10 max-w-2xl leading-relaxed">
                                        Master Texas&apos;s traffic fines, speed limits, and surcharge system with 25 challenging practice questions. Texas uses a unique surcharge-based penalty system that goes beyond just fines — violations can cost you thousands over 3 years.
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
                                                'Surcharge System',
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
                            <div>
                                <div className="bg-green-50 border-l-4 border-green-500 p-5 mb-8 rounded-r-lg">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h3 className="text-lg font-bold text-green-900 mb-1">Updated for July 2026</h3>
                                            <p className="text-green-800 text-sm leading-relaxed">
                                                This practice test is up to date as of July 2026. All 25 questions are based on Texas&apos;s official <Link href="/handbooks/texas" className="underline hover:text-green-900 font-medium">2026 Texas Driver Handbook</Link> and the Texas Transportation Code (TTC Title 7).
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="prose prose-gray max-w-none">
                                    <p className="text-base text-gray-700 leading-relaxed mb-4">
                                        Understanding Texas&apos;s traffic fines and the Driver Responsibility Program is crucial for passing the DPS knowledge test — and for keeping your license. Texas is unique: it layers a surcharge system on top of standard fines, meaning one DUI can cost you thousands of dollars annually for years.
                                    </p>
                                    <p className="text-base text-gray-700 leading-relaxed mb-4">
                                        This free practice test covers the penalties you&apos;ll face for violating Texas traffic laws. Questions are intentionally challenging — these topics trip up many test-takers. You&apos;ll learn about Texas&apos;s speed limit system (which reaches 85 mph on one toll road), the fine structure, the surcharge program, license suspension thresholds, and the serious consequences of DWI under Texas Penal Code §49.04.
                                    </p>
                                    <p className="text-base text-gray-700 leading-relaxed">
                                        Expect questions about: how unpaid tickets affect your license, how the surcharge system works, first-offense DWI penalties in Texas, the implied consent law, age-specific BAC limits, and the consequences for leaving the scene of an accident. These are real Texas laws you need to know.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 md:p-8 flex flex-col gap-6 items-start">
                                <div className="bg-blue-100 p-3 rounded-xl shrink-0">
                                    <ScrollText className="w-8 h-8 text-[#007aff]" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Why is this on the Texas DPS Test?</h3>
                                    <p className="text-base text-gray-700 leading-relaxed">
                                        The Texas DPS wants drivers to understand the serious consequences of traffic violations before they get a license. On your knowledge exam, expect 3–5 questions about:
                                    </p>
                                    <ul className="grid sm:grid-cols-2 gap-3 mt-4">
                                        <li className="flex items-center gap-2 text-sm font-medium text-gray-800">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                            Speed limits by zone type
                                        </li>
                                        <li className="flex items-center gap-2 text-sm font-medium text-gray-800">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                            Texas&apos;s surcharge system
                                        </li>
                                        <li className="flex items-center gap-2 text-sm font-medium text-gray-800">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                            DWI penalties and BAC limits
                                        </li>
                                        <li className="flex items-center gap-2 text-sm font-medium text-gray-800">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                            License suspension triggers
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

                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Texas Speed Limits</h2>
                            <p className="text-gray-700 mb-6">
                                Texas uses statutory (default) speed limits under Texas Transportation Code §545.352 that apply even when no posted sign is visible. Texas is notable for having the highest speed limit in the U.S. — 85 mph on a designated section of SH 130.
                            </p>

                            <div className="overflow-hidden rounded-lg border border-gray-200 mb-8">
                                <table className="w-full text-sm">
                                    <thead className="bg-gray-100 text-gray-500 uppercase text-xs tracking-wider">
                                        <tr>
                                            <th className="text-left px-5 py-3">Zone</th>
                                            <th className="text-right px-5 py-3">Texas Limit</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 bg-white">
                                        {[
                                            ['Urban district / city street', '30 mph'],
                                            ['School zone (children present)', '20 mph'],
                                            ['Alley', '15 mph'],
                                            ['Two-lane rural highway (day)', '70 mph'],
                                            ['Two-lane rural highway (night)', '65 mph'],
                                            ['Interstate / divided highway (day)', '70 mph'],
                                            ['Interstate / divided highway (night)', '65 mph'],
                                            ['SH 130 designated section (toll)', '85 mph'],
                                        ].map(([zone, limit]) => (
                                            <tr key={zone}>
                                                <td className="px-5 py-2.5 text-gray-800">{zone}</td>
                                                <td className="px-5 py-2.5 text-right font-semibold text-gray-900">{limit}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Texas Day vs. Night Speed Limits</h3>
                            <p className="text-gray-700 mb-4">
                                Texas is one of the few states with separate day and night speed limits on rural highways and interstates. The nighttime limit is typically 5 mph lower than the daytime limit. This is a common DPS test question — always note whether a scenario specifies day or night.
                            </p>

                            <div className="bg-amber-50 border-l-4 border-amber-400 p-5 mb-8">
                                <h3 className="font-semibold text-gray-900 mb-1">DPS Test Tip: Texas Absolute Speed Law (§545.351)</h3>
                                <p className="text-gray-700">
                                    Texas uses an &quot;absolute&quot; speed limit law — exceeding the posted limit by any amount is a violation. However, Texas also has a reasonably safe and prudent standard: even below the posted limit, if your speed is unsafe for conditions (rain, fog, ice), you can be cited. Going above 85 mph (or a posted limit) on any Texas public road is a criminal offense.
                                </p>
                            </div>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Texas Urban District Speed Limit</h3>
                            <p className="text-gray-700 mb-6">
                                Note that Texas sets the urban default at <strong>30 mph</strong> — higher than many other states&apos; 25 mph residential limit. School zones reduce this to 20 mph. When the area transitions from urban to rural, the applicable limit changes even without a posted sign.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Minimum Speed on Texas Highways</h3>
                            <p className="text-gray-700">
                                Texas law (§545.363) prohibits driving so slowly as to obstruct the normal flow of traffic. If you must drive slowly due to a mechanical issue, activate hazard lights and move to the right shoulder. On multi-lane freeways, slower traffic must keep right.
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

                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Texas Fines &amp; Penalties</h2>
                            <p className="text-gray-700 mb-6">
                                Texas traffic fines are set locally, so the exact amount you pay depends on the county. However, the Texas Transportation Code sets maximums. Texas is also unique in operating a Driver Responsibility Program (DRP) that imposes annual surcharges on top of fines for certain violations.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Texas Speeding Fine Ranges</h3>
                            <div className="overflow-hidden rounded-lg border border-gray-200 mb-8">
                                <table className="w-full text-sm">
                                    <thead className="bg-gray-100 text-gray-500 uppercase text-xs tracking-wider">
                                        <tr>
                                            <th className="text-left px-5 py-3">Offense</th>
                                            <th className="text-right px-5 py-3">TX Fine Range</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 bg-white">
                                        {[
                                            ['Speeding (any amount)', '$1–$200 (Class C misdemeanor)'],
                                            ['Speeding in school zone', '$25–$200 (doubled: up to $400)'],
                                            ['Speeding in construction zone', 'Double standard fines'],
                                            ['Reckless driving', 'Up to $200 fine + possible jail'],
                                            ['Racing on public road', 'Up to $500 fine + criminal charges'],
                                        ].map(([offense, fine]) => (
                                            <tr key={offense}>
                                                <td className="px-5 py-2.5 text-gray-800">{offense}</td>
                                                <td className="px-5 py-2.5 text-right font-semibold text-gray-900 whitespace-nowrap">{fine}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Texas Driver Responsibility Surcharges</h3>
                            <p className="text-gray-700 mb-2">
                                Texas operates the Driver Responsibility Program (DRP) under Texas Transportation Code §708. These are <strong>annual surcharges</strong> assessed in addition to your fine and billed directly by the Texas DPS for 3 years:
                            </p>
                            <div className="overflow-hidden rounded-lg border border-gray-200 mb-6">
                                <table className="w-full text-sm">
                                    <tbody className="divide-y divide-gray-100 bg-white">
                                        {[
                                            ['DWI conviction (1st)', '$1,000/year × 3 years = $3,000'],
                                            ['DWI with BAC ≥ 0.16%', '$2,000/year × 3 years = $6,000'],
                                            ['License suspension violation', '$250/year × 3 years'],
                                            ['No insurance (1st offense)', '$250/year × 3 years'],
                                            ['6+ points on record in 36 months', '$100 base + $25 per additional point/year'],
                                        ].map(([violation, surcharge]) => (
                                            <tr key={violation}>
                                                <td className="px-5 py-2.5 text-gray-800">{violation}</td>
                                                <td className="px-5 py-2.5 text-right font-semibold text-gray-900">{surcharge}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-sm text-gray-500 mb-8">Note: Texas has been working to reform the DRP. Check the TxDPS website for the latest surcharge schedule, as amounts may change.</p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Other Common Texas Violation Fines</h3>
                            <div className="overflow-hidden rounded-lg border border-gray-200 mb-6">
                                <table className="w-full text-sm">
                                    <tbody className="divide-y divide-gray-100 bg-white">
                                        {[
                                            ['Running a red light / stop sign', 'Up to $200'],
                                            ['Seatbelt violation (driver/front passenger)', 'Up to $200'],
                                            ['Child passenger safety violation', 'Up to $250 (1st), $1,000+ (2nd)'],
                                            ['Handheld texting while driving', '$25–$99 (1st), up to $200 (repeat)'],
                                            ['Passing stopped school bus', '$500–$1,250 (1st), $1,000–$2,000 (repeat)'],
                                            ['Hit-and-run (property damage only)', 'Up to $5,000 + criminal charges'],
                                            ['No liability insurance', 'Up to $350 (1st), up to $1,000 (subsequent)'],
                                        ].map(([violation, fine]) => (
                                            <tr key={violation}>
                                                <td className="px-5 py-2.5 text-gray-800">{violation}</td>
                                                <td className="px-5 py-2.5 text-right font-semibold text-gray-900 whitespace-nowrap">{fine}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="clear-both"></div>
                        </div>
                    </div>
                </section>

                {/* ========== SECTION 3: Points System ========== */}
                <section id="points" className="py-16 md:py-20 bg-gray-50 scroll-mt-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-7xl mx-auto">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Texas Point System</h2>
                            <p className="text-gray-700 mb-8">
                                Texas tracks driving behavior using a point system under Transportation Code §708.052. Points are assessed for moving violations and at-fault accidents. Accumulating too many points triggers surcharges — unlike some states, Texas does not automatically suspend your license based on points alone, but the financial penalties are severe.
                            </p>

                            <div className="overflow-hidden rounded-lg border border-gray-200 mb-8">
                                <table className="w-full text-sm">
                                    <thead className="bg-gray-100 text-gray-500 uppercase text-xs tracking-wider">
                                        <tr>
                                            <th className="text-left px-5 py-3">Violation</th>
                                            <th className="text-right px-5 py-3">TX Points</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 bg-white">
                                        {[
                                            ['Moving violation in TX or out-of-state', '2'],
                                            ['Moving violation involving accident', '3'],
                                            ['DWI / intoxicated driver conviction', 'Automatic surcharge (no points)'],
                                            ['No insurance conviction', 'Automatic surcharge (no points)'],
                                        ].map(([violation, pts]) => (
                                            <tr key={violation}>
                                                <td className="px-5 py-2.5 text-gray-800">{violation}</td>
                                                <td className="px-5 py-2.5 text-right font-semibold text-gray-900">{pts}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Texas Point Surcharge Thresholds</h3>
                            <p className="text-gray-700 mb-2">
                                Points trigger annual Driver Responsibility Program surcharges:
                            </p>
                            <ul className="text-gray-700 space-y-1 list-disc pl-5 mb-8">
                                <li><strong>6 or more points in 36 months:</strong> $100/year surcharge + $25 for each point over 6</li>
                                <li><strong>Accumulation with prior surcharges:</strong> Amounts compound each year the violation stays on your record (3 years)</li>
                            </ul>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Texas License Suspension — Mandatory Situations</h3>
                            <p className="text-gray-700 mb-2">
                                Texas suspends licenses for these specific acts (not point thresholds):
                            </p>
                            <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-8">
                                <li>DWI conviction — automatic suspension (90 days minimum for first offense)</li>
                                <li>Driving without insurance — 90-day suspension + reinstatement fee</li>
                                <li>Failure to pay surcharges — license suspended until all surcharges are paid</li>
                                <li>Serious traffic offense (racing, leaving the scene, etc.)</li>
                                <li>Failure to maintain financial responsibility</li>
                            </ul>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Reducing Points in Texas</h3>
                            <ul className="text-gray-700 space-y-2 mb-8 list-disc pl-5">
                                <li><strong>Defensive driving course:</strong> Completing an approved Texas defensive driving course can dismiss a ticket (once per 12-month period) and prevent points from being added for that violation.</li>
                                <li><strong>Points expire:</strong> Points remain on your Texas driving record for 36 months from the conviction date.</li>
                                <li><strong>Deferred adjudication:</strong> Some Texas courts allow first-time offenders to complete conditions and have the charge dismissed, avoiding points entirely.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* ========== SECTION 4: DWI Laws ========== */}
                <section id="dui" className="py-16 md:py-20 bg-white scroll-mt-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-7xl mx-auto">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Texas DWI Laws</h2>
                            <p className="text-gray-700 mb-8">
                                Texas calls impaired driving <strong>DWI</strong> (Driving While Intoxicated) — not DUI. Texas Penal Code §49.04 defines intoxication as having a BAC of 0.08% or above, OR lacking normal use of mental or physical faculties due to alcohol or any substance. The DPS knowledge test regularly includes questions on BAC limits, implied consent, and first-offense consequences.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Texas BAC Limits</h3>
                            <div className="overflow-hidden rounded-lg border border-gray-200 mb-4">
                                <table className="w-full text-sm">
                                    <thead className="bg-gray-100 text-gray-500 uppercase text-xs tracking-wider">
                                        <tr>
                                            <th className="text-left px-5 py-3">Driver Type</th>
                                            <th className="text-right px-5 py-3">TX BAC Limit</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 bg-white">
                                        {[
                                            ['Standard (21+ non-commercial)', '0.08%'],
                                            ['Commercial vehicle operators', '0.04%'],
                                            ['Under 21 (Zero Tolerance)', '0.00% — any detectable amount'],
                                        ].map(([driver, bac]) => (
                                            <tr key={driver}>
                                                <td className="px-5 py-2.5 text-gray-800">{driver}</td>
                                                <td className="px-5 py-2.5 text-right font-semibold text-gray-900">{bac}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-sm text-gray-500 mb-8">Texas enforces strict Zero Tolerance for drivers under 21 — <strong>any detectable amount</strong> of alcohol is illegal (Texas Alcoholic Beverage Code §106.041). This is stricter than many other states.</p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Texas Implied Consent Law (§724.011)</h3>
                            <p className="text-gray-700 mb-8">
                                By driving on Texas roads, you have already given implied consent to a breath or blood test if an officer has reasonable suspicion of DWI. <strong>Refusing the test</strong> results in an automatic 180-day license suspension for a first refusal (2 years for a second refusal within 10 years). The refusal can also be used against you in court as evidence of consciousness of guilt.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">First DWI Offense in Texas — Consequences</h3>
                            <ul className="text-gray-700 space-y-1 list-disc pl-5 mb-8">
                                <li>Class B misdemeanor (up to 180 days in jail, minimum 72 hours)</li>
                                <li>Fine: up to $2,000 (plus mandatory state surcharges and fees)</li>
                                <li>License suspension: 90 days to 1 year</li>
                                <li>Driver Responsibility Surcharge: $1,000/year × 3 years = $3,000 total</li>
                                <li>Ignition interlock device (IID) may be required as condition of bond</li>
                                <li>Texas DWI Education Program or treatment program required</li>
                            </ul>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Repeat Offense Escalation in Texas</h3>
                            <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-8">
                                <li><strong>2nd DWI:</strong> Class A misdemeanor — up to $4,000 fine + up to 1 year jail + 180-day to 2-year license suspension + $1,500/year surcharge for 3 years</li>
                                <li><strong>3rd DWI:</strong> 3rd Degree Felony — up to $10,000 fine + 2–10 years state prison + 2-year license suspension + $2,000/year surcharge for 3 years</li>
                                <li><strong>DWI with child passenger:</strong> State Jail Felony — even first offense, if a passenger under 15 was in the vehicle</li>
                                <li><strong>Intoxication assault or manslaughter:</strong> 3rd Degree Felony or 2nd Degree Felony — years of prison</li>
                            </ul>

                            <div className="bg-amber-50 border-l-4 border-amber-400 p-5">
                                <h3 className="font-semibold text-gray-900 mb-1">DPS Test Tip: Texas DWI vs. DUI</h3>
                                <p className="text-gray-700">
                                    Texas uses the term <strong>DWI</strong> (Driving While Intoxicated) for the adult offense and <strong>DUI</strong> (Driving Under the Influence) specifically for minors under 21 with any detectable alcohol. On the DPS knowledge test, if the question involves someone under 21 with alcohol, the answer is DUI. If it involves an adult, it&apos;s DWI. This terminology distinction is frequently tested.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========== SECTION 5: real estate license & GDL ========== */}
                <section id="permits" className="py-16 md:py-20 bg-gray-50 scroll-mt-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-7xl mx-auto">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Texas Learner&apos;s Permit &amp; Graduated Driver Licensing</h2>
                            <p className="text-gray-700 mb-8">
                                Texas uses a Graduated Driver Licensing (GDL) system under the &quot;Driving on the Right Side&quot; program, phasing aspiring agents into full privileges. This is a frequently tested topic on the DPS knowledge exam.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Texas GDL Phases</h3>
                            <div className="overflow-hidden rounded-lg border border-gray-200 mb-8">
                                <table className="w-full text-sm">
                                    <thead className="bg-gray-100 text-gray-500 uppercase text-xs tracking-wider">
                                        <tr>
                                            <th className="text-left px-5 py-3">Phase</th>
                                            <th className="text-left px-5 py-3">Texas Rules</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 bg-white">
                                        <tr>
                                            <td className="px-5 py-3 font-semibold text-gray-900 align-top whitespace-nowrap">1. Learner License</td>
                                            <td className="px-5 py-3 text-gray-700">Must be at least 15 years old. Must drive accompanied by a licensed adult (18+) in the front seat at all times. Hold for at least 6 months. Complete 30 hours of supervised driving (10 at night). No driving midnight – 5 AM.</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 font-semibold text-gray-900 align-top whitespace-nowrap">2. Provisional License</td>
                                            <td className="px-5 py-3 text-gray-700">Ages 16–17. No passengers in the vehicle under 21 (except immediate family) for the first 12 months. No driving midnight – 5 AM unless accompanied by a licensed adult or for employment or emergency. Must be violation-free for 6 months before restrictions ease.</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 font-semibold text-gray-900 align-top whitespace-nowrap">3. Full License</td>
                                            <td className="px-5 py-3 text-gray-700">All restrictions lifted at age 18, or after completing all GDL requirements without violations.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Texas Texting &amp; Cell Phone Rules</h3>
                            <p className="text-gray-700 mb-8">
                                Texas law (Transportation Code §545.4251) bans texting while driving for <strong>all drivers</strong>. Additionally, drivers in GDL phases may not use any handheld device (including handheld calls). Drivers 18+ may use handheld calls if not in a school zone. School zones have separate restrictions.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Violations During the Texas GDL Period</h3>
                            <p className="text-gray-700">
                                Violating Texas GDL restrictions delays progression to the next license phase. A moving violation during the provisional period resets the 12-month passenger restriction clock, meaning you must complete another violation-free period before the restriction lifts.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ========== SECTION 6: Special Zones ========== */}
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

                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Special Zones &amp; Situations in Texas</h2>
                            <p className="text-gray-700 mb-8">
                                Certain areas and situations in Texas carry enhanced rules and penalties. The DPS knowledge test frequently asks about school buses, emergency vehicles, railroad crossings, and Texas&apos;s unique open container rules.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Texas Construction Zones</h3>
                            <p className="text-gray-700 mb-6">
                                Fines are <strong>doubled</strong> in active Texas construction zones (Transportation Code §542.404). TxDOT uses orange signs and flashing arrow boards to mark work zones. Speeding in a construction/maintenance zone is a Class B misdemeanor if the zone is properly marked with signs indicating doubled fines.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Texas School Zones</h3>
                            <p className="text-gray-700 mb-6">
                                Texas school zones have a speed limit of <strong>20 mph</strong> when children are present (or as posted). Fines for speeding in a school zone are doubled. Texas also prohibits using a handheld device (including cell phone calls) while driving in a school zone.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Texas School Bus Rules (§545.066)</h3>
                            <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-6">
                                <li><strong>Flashing red lights + stop arm:</strong> ALL traffic in BOTH directions must stop at least 20 feet from the bus.</li>
                                <li><strong>Divided highway exception:</strong> If the road has a raised physical median, only traffic following the bus must stop.</li>
                                <li><strong>Texas penalty (1st offense):</strong> $500–$1,250 fine; 2nd offense: $1,000–$2,000; possible license suspension.</li>
                            </ul>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Texas Railroad Crossing Rules</h3>
                            <p className="text-gray-700 mb-6">
                                When railroad signals activate in Texas, you must stop at least <strong>15 feet</strong> from the nearest rail. School buses, passenger buses, and vehicles carrying hazardous materials must always stop at crossings, even if lights are not flashing. Never drive around or under lowered gates.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Texas Open Container Law</h3>
                            <p className="text-gray-700 mb-6">
                                Texas Penal Code §49.031 prohibits possessing an open container of alcohol in the passenger area of a vehicle on a public highway. This applies even if you are parked. Violation is a Class C misdemeanor (up to $500 fine). Passengers may have open containers in Texas on some charter bus or limo-type vehicles.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Texas Seat Belt Laws</h3>
                            <p className="text-gray-700">
                                Texas requires all front-seat occupants and all passengers under 17 (regardless of seat position) to be buckled. The driver is responsible for all passengers under 17. Fines for seat belt violations are up to $200 for the occupant and up to $250 for child safety seat violations.
                            </p>

                            <div className="clear-both"></div>
                        </div>
                    </div>
                </section>

                {/* ========== SECTION 7: After a Ticket ========== */}
                <section id="after-ticket" className="py-16 md:py-20 bg-gray-50 scroll-mt-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-7xl mx-auto">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">What Happens After a Ticket in Texas</h2>
                            <p className="text-gray-700 mb-8">
                                Getting a Texas traffic ticket gives you several options. You generally must respond within 15–30 days of receipt (check your citation). Ignoring a ticket leads to a warrant and additional consequences.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Option 1: Pay the Fine</h3>
                            <p className="text-gray-700 mb-6">
                                Paying is a plea of &quot;no contest&quot; or &quot;guilty.&quot; The violation goes on your Texas driving record, points are added, your insurance may increase, and you may incur DRP surcharges for 3 years.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Option 2: Texas Defensive Driving Course</h3>
                            <p className="text-gray-700 mb-2">
                                Texas allows eligible drivers to take an approved defensive driving course (DDC) to dismiss a traffic ticket and prevent points from being added — available once every 12 months for Class C traffic violations. Requirements:
                            </p>
                            <ul className="text-gray-700 space-y-1 list-disc pl-5 mb-8">
                                <li>Request within specified time after citation</li>
                                <li>Carry valid insurance at the time of the violation</li>
                                <li>Pay the court fee (typically $10)</li>
                                <li>Not have completed DDC dismissal within 12 months</li>
                                <li>Complete a 6-hour approved course</li>
                            </ul>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Option 3: Contest the Ticket</h3>
                            <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-8">
                                <li><strong>Trial by declaration:</strong> Submit a written statement — available in some Texas counties without appearing in court.</li>
                                <li><strong>In-person trial:</strong> Appear before a judge or magistrate. Request the citing officer appear; if they do not, the case may be dismissed.</li>
                                <li><strong>Deferred adjudication:</strong> First-time offenders may pay a fee and stay violation-free for a period (typically 90–180 days) to have the ticket dismissed without points.</li>
                            </ul>

                            <div className="bg-amber-50 border-l-4 border-amber-400 p-5 mb-8">
                                <h3 className="font-semibold text-gray-900 mb-1">Warning: Failure to Appear in Texas</h3>
                                <p className="text-gray-700">
                                    If you ignore a Texas traffic citation, the court issues a Failure to Appear (FTA) warrant. Your license may be suspended, additional fines are added, and you risk arrest if stopped. The Texas DPS will not renew your license or vehicle registration while you have outstanding warrants or unpaid surcharges.
                                </p>
                            </div>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Texas Out-of-State Tickets</h3>
                            <p className="text-gray-700">
                                Texas participates in the <strong>Nonresident Violator Compact (NRVC)</strong> and <strong>Driver License Compact (DLC)</strong>. Out-of-state violations are reported to Texas and treated like Texas violations — including points and insurance impact. Ignoring an out-of-state ticket can result in Texas license suspension.
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
                                These 25 questions are designed to mimic the style and difficulty of the actual Texas DPS knowledge test. Can you score the passing 70%?
                            </p>
                        </div>

                        <PracticeTest questions={FINES_AND_LIMITS_QUESTIONS} />

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
                                    href="/handbooks/texas"
                                    className="relative text-[#007aff] font-medium after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#007aff] after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                                >
                                    Texas Driver Handbook
                                </Link>
                                {' '}and traffic laws. Official sources include the Texas Transportation Code, Texas Penal Code §49, and TxDPS publications.
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
                            Fines &amp; limits is just one section. Get your Texas-specific premium study pack with a pass guarantee.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                            <Link
                                href="/texas-real-estate-practice-test"
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
