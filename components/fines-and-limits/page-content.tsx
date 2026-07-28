'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { useAuth } from '@/contexts/auth-context'
import { PracticeTest } from '@/components/fines-and-limits/practice-test'
import { FINES_AND_LIMITS_QUESTIONS } from '@/components/fines-and-limits/questions'
import { Button } from '@/components/ui/button'
import { ArrowRight, AlertTriangle, Crown, ChevronRight, DollarSign, HelpCircle, BookOpen, CheckCircle2, AlertCircle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState, useRef } from 'react'
import { StateHubsSection } from '@/components/state-hubs-section'
import { RelatedConcepts } from '@/components/concepts/related-concepts'

// FAQ Data for display
const FAQ_DATA = [
    {
        question: "How much is a speeding ticket on average?",
        answer: "Fines vary by state and court, but typical tickets for speeding range from $150 to $500 depending on how fast you were going and the location (e.g., school zone)."
    },
    {
        question: "Do traffic fines double in construction zones?",
        answer: "Yes, in almost all US states, fines are doubled in construction or maintenance zones when workers are present to ensure their safety."
    },
    {
        question: "What is the blood alcohol limit for drivers under 21?",
        answer: "Most states have a Zero Tolerance policy for drivers under 21. Any measurable amount of alcohol (usually 0.01% or 0.02% BAC) is illegal."
    },
    {
        question: "Is it illegal to drive 5 mph over the speed limit?",
        answer: "Technically yes. Speed limits are maximums. While officers may use discretion, you can be ticketed for any speed over the limit."
    },
    {
        question: "What happens if I don't pay a traffic ticket?",
        answer: "Failure to pay can result in additional fines, license suspension, and even an arrest warrant in some jurisdictions."
    },
    {
        question: "Can I go to traffic school for a ticket?",
        answer: "Many states allow you to attend traffic school or a defensive driving course to keep points off your record, typically once every 12 to 18 months."
    },
    {
        question: "How does the point system work?",
        answer: "Most states assign points to your driving record for each traffic violation. Accumulating too many points within a set period leads to consequences like mandatory courses, license suspension, or revocation."
    },
    {
        question: "What are the GDL phases for aspiring agents?",
        answer: "The Graduated Driver Licensing (GDL) system has three phases: real estate license (supervised driving), provisional license (limited unsupervised driving with restrictions), and full license (unrestricted driving privileges)."
    },
    {
        question: "What is implied consent?",
        answer: "Implied consent means that by driving on public roads, you have already agreed to submit to a chemical test (breath, blood, or urine) if an officer suspects you of DUI. Refusing the test typically results in automatic license suspension."
    },
    {
        question: "What should I do if I get a ticket in another state?",
        answer: "Through the Driver License Compact, most states share violation information. An out-of-state ticket will likely appear on your home-state record and may add points just as if you received it locally."
    }
]

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

export function FinesAndLimitsPageContent() {
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
                            <Link href="/driving-test-concepts" className="hover:text-[#007aff] transition-colors">Driving Test Concepts</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span className="text-gray-900 font-medium">Fines & Limits</span>
                        </nav>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="relative pt-16 pb-20 md:pt-20 md:pb-24 overflow-hidden bg-gradient-to-br from-red-900 via-red-800 to-rose-900 text-white">
                    <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/20 rounded-full blur-3xl -mr-32 -mt-32"></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6 md:mb-8">
                                <DollarSign className="w-4 h-4 text-green-400" />
                                <span className="text-sm font-medium text-red-100">Essential Real Estate Exam Topic</span>
                            </div>

                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 tracking-tight leading-tight">
                                Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-200 to-orange-200">Fines & Limits</span>
                            </h1>

                            <p className="text-lg md:text-xl text-red-100/90 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
                                Questions about speed limits, fines, and point systems make up about <strong>10% of the written real estate exam</strong>. Learn the rules that will keep you safe and help you pass.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
                                <Button
                                    onClick={scrollToTest}
                                    size="lg"
                                    className="bg-white text-red-900 hover:bg-red-50 text-base md:text-lg font-bold px-6 md:px-8 py-5 md:py-6 rounded-xl md:rounded-2xl shadow-xl shadow-red-900/20 border-0"
                                >
                                    Start Practice Test
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why this matters on the test */}
                <section className="py-12 bg-white border-b border-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
                                <div className="bg-blue-100 p-3 rounded-xl shrink-0">
                                    <BookOpen className="w-8 h-8 text-[#007aff]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Why is this on the real estate exam?</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        The Real Estate wants to ensure you understand the consequences of unsafe driving *before* you get behind the wheel. On your written exam, you will likely encounter 3-5 questions specifically asking about:
                                    </p>
                                    <ul className="grid sm:grid-cols-2 gap-3 mt-4">
                                        <li className="flex items-center gap-2 text-sm font-medium text-gray-800">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                            Speed limits in specific zones
                                        </li>
                                        <li className="flex items-center gap-2 text-sm font-medium text-gray-800">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                            The &ldquo;Basic Speed Law&rdquo; definition
                                        </li>
                                        <li className="flex items-center gap-2 text-sm font-medium text-gray-800">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                            Penalties for DUI/DWI
                                        </li>
                                        <li className="flex items-center gap-2 text-sm font-medium text-gray-800">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                            School zone & blind intersection rules
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
                                        ? 'bg-red-900 text-white'
                                        : 'text-gray-600 hover:bg-gray-100'
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
                        <div className="max-w-5xl mx-auto">
                            <div className="relative group mb-6 md:mb-0 md:float-right md:ml-8 md:w-[45%] lg:w-[40%]">
                                <Image
                                    src="/images/fines-and-limits/speed-limit-65.webp"
                                    alt="Highway speed limit sign 65 MPH"
                                    width={600}
                                    height={400}
                                    className="rounded-2xl shadow-lg w-full"
                                />
                            </div>

                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Speed Limits Across the US</h2>
                            <p className="text-gray-700 mb-6">
                                Speed limits vary by zone type and state. Unless otherwise posted, most states set &ldquo;prima facie&rdquo; (default) limits that apply even when no sign is visible. Driving above these defaults is automatically presumed unsafe.
                            </p>

                            <div className="overflow-hidden rounded-lg border border-gray-200 mb-8">
                                <table className="w-full text-sm">
                                    <thead className="bg-gray-100 text-gray-500 uppercase text-xs tracking-wider">
                                        <tr>
                                            <th className="text-left px-5 py-3">Zone</th>
                                            <th className="text-right px-5 py-3">Limit</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 bg-white">
                                        {[
                                            ['Residential district', '25 mph'],
                                            ['School zone (children present)', '25 mph'],
                                            ['Business district', '25–30 mph'],
                                            ['Alley', '15 mph'],
                                            ['Blind intersection (no view 100 ft)', '15 mph'],
                                            ['Rural / undivided highway', '55 mph'],
                                            ['Highway / freeway', '55–85 mph'],
                                        ].map(([zone, limit]) => (
                                            <tr key={zone}>
                                                <td className="px-5 py-2.5 text-gray-800">{zone}</td>
                                                <td className="px-5 py-2.5 text-right font-semibold text-gray-900">{limit}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Maximum Highway Limits by State</h3>
                            <p className="text-gray-700 mb-4">
                                Highway maximums range from 60 mph in Hawaii to 85 mph on a Texas toll road. Most western states allow 70–80 mph; most eastern states cap at 65 mph.
                            </p>

                            <div className="bg-amber-50 border-l-4 border-amber-400 p-5 mb-8">
                                <h3 className="font-semibold text-gray-900 mb-1">Real Estate Test Tip: The Basic Speed Law</h3>
                                <p className="text-gray-700">
                                    You may never drive faster than is safe for current conditions, regardless of the posted limit. If it&rsquo;s foggy, raining, or traffic is heavy, driving at the posted 65 mph may be illegal because it is unsafe.
                                </p>
                            </div>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">When No Limit Is Posted</h3>
                            <p className="text-gray-700 mb-6">
                                If there is no speed limit sign, you must follow the default (prima facie) limits for that type of area. The burden is on you to recognize which zone you are in.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Minimum Speed & Impeding Traffic</h3>
                            <p className="text-gray-700">
                                Driving too slowly can be just as dangerous as speeding. On freeways, you must not drive so slowly that you impede the normal flow of traffic. Some freeways post minimum speed limits (often 40–45 mph). If you must drive slowly due to vehicle trouble, use hazard lights and stay in the far-right lane.
                            </p>

                            <div className="clear-both"></div>
                        </div>
                    </div>
                </section>

                {/* ========== SECTION 2: Fines & Penalties ========== */}
                <section id="fines" className="py-16 md:py-20 bg-white scroll-mt-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <div className="relative group mb-6 md:mb-0 md:float-right md:ml-8 md:w-[45%] lg:w-[40%]">
                                <Image
                                    src="/images/fines-and-limits/police-lights.webp"
                                    alt="Review mirror view of police traffic stop"
                                    width={600}
                                    height={400}
                                    className="rounded-2xl shadow-lg w-full"
                                />
                            </div>

                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Fines & Penalties</h2>
                            <p className="text-gray-700 mb-6">
                                A traffic ticket is more expensive than the number printed on the citation. Your total cost is: <strong>base fine + court fees + penalty assessments</strong>. State &ldquo;penalty assessment&rdquo; multipliers can make a $100 base fine cost $400+ out of pocket.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Speeding Fine Tiers (Base Fine)</h3>
                            <div className="overflow-hidden rounded-lg border border-gray-200 mb-8">
                                <table className="w-full text-sm">
                                    <thead className="bg-gray-100 text-gray-500 uppercase text-xs tracking-wider">
                                        <tr>
                                            <th className="text-left px-5 py-3">Over Limit</th>
                                            <th className="text-right px-5 py-3">Base Fine</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 bg-white">
                                        {[
                                            ['1–10 mph over', '$35–$100'],
                                            ['11–20 mph over', '$70–$200'],
                                            ['21–30 mph over', '$100–$400'],
                                            ['30+ mph over', '$200–$500+'],
                                        ].map(([tier, fine]) => (
                                            <tr key={tier}>
                                                <td className="px-5 py-2.5 text-gray-800">{tier}</td>
                                                <td className="px-5 py-2.5 text-right font-semibold text-gray-900">{fine}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-sm text-gray-500 mb-8">Total out-of-pocket cost is typically 3–5x the base fine after penalty assessments. Ranges vary by state.</p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Construction Zone Double Fines</h3>
                            <p className="text-gray-700 mb-6">
                                Fines are <strong>doubled</strong> in construction / work zones when workers are present. Some states double fines for signage-only zones as well. A $100 ticket becomes $200+ before fees.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">School Zone & School Bus Violations</h3>
                            <p className="text-gray-700 mb-2">
                                Speeding in a school zone carries enhanced fines (often $250+). Passing a stopped school bus with flashing red lights can result in a fine of <strong>$150–$1,000+</strong> and possible license suspension.
                            </p>
                            <p className="text-gray-700 mb-8">
                                <strong>Exception:</strong> You are not required to stop for a school bus on the opposite side of a road divided by a physical barrier (e.g., concrete median). A painted center line alone is not a divider.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Other Common Violation Fines</h3>
                            <div className="overflow-hidden rounded-lg border border-gray-200 mb-6">
                                <table className="w-full text-sm">
                                    <tbody className="divide-y divide-gray-100 bg-white">
                                        {[
                                            ['Running a red light / stop sign', '$100–$500'],
                                            ['Reckless driving', '$145–$1,000+'],
                                            ['Seatbelt violation', '$20–$200'],
                                            ['Handheld cell phone / texting', '$75–$500'],
                                            ['Pedestrian right-of-way violation', '$100–$500'],
                                            ['Hit-and-run (property damage)', '$200–$1,000'],
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
                            <p className="text-sm text-gray-500">Fine amounts are general ranges. Always check your state&rsquo;s driver handbook for exact figures.</p>

                            <div className="clear-both"></div>
                        </div>
                    </div>
                </section>

                {/* ========== SECTION 3: The Point System ========== */}
                <section id="points" className="py-16 md:py-20 bg-gray-50 scroll-mt-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">The Point System</h2>
                            <p className="text-gray-700 mb-8">
                                Most states track your driving behavior with a point system. Each traffic conviction adds points to your record. Too many points trigger escalating consequences.
                            </p>

                            <div className="overflow-hidden rounded-lg border border-gray-200 mb-8">
                                <table className="w-full text-sm">
                                    <thead className="bg-gray-100 text-gray-500 uppercase text-xs tracking-wider">
                                        <tr>
                                            <th className="text-left px-5 py-3">Violation</th>
                                            <th className="text-right px-5 py-3">Points</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 bg-white">
                                        {[
                                            ['Speeding (1–15 mph over)', '1–2'],
                                            ['Speeding (16–25 mph over)', '3–4'],
                                            ['Speeding (26+ mph over)', '4–6'],
                                            ['Running red light / stop sign', '2–3'],
                                            ['Improper lane change / unsafe turn', '1–2'],
                                            ['At-fault accident', '1–3'],
                                            ['Reckless driving', '4–6'],
                                            ['DUI / DWI', '6–8+'],
                                            ['Hit-and-run', '6–8+'],
                                        ].map(([violation, pts]) => (
                                            <tr key={violation}>
                                                <td className="px-5 py-2.5 text-gray-800">{violation}</td>
                                                <td className="px-5 py-2.5 text-right font-semibold text-gray-900">{pts}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Thresholds & Consequences</h3>
                            <p className="text-gray-700 mb-2">
                                As points accumulate, penalties escalate: a <strong>warning letter</strong> at 2–3 points, <strong>mandatory traffic school</strong> at 4–5, <strong>license suspension</strong> at 6–7, and <strong>revocation or probation</strong> at 8+ points. Exact thresholds and timeframes vary by state.
                            </p>
                            <p className="text-gray-700 mb-8">
                                Points on your record also directly increase insurance premiums. A single speeding ticket can raise rates by 20–30%. A DUI can double or triple your premiums for 3–5 years.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">How to Reduce Points</h3>
                            <ul className="text-gray-700 space-y-2 mb-8 list-disc pl-5">
                                <li><strong>Traffic school / defensive driving course:</strong> Most states let you mask 1 point by completing an approved course (typically once every 12–18 months).</li>
                                <li><strong>Clean record over time:</strong> Points expire after 1–3 years depending on your state.</li>
                                <li><strong>Good driver credit:</strong> Some states proactively remove a point after 12 consecutive clean months.</li>
                            </ul>

                            <p className="text-sm text-gray-500">
                                <strong>Note:</strong> Kansas, Louisiana, Minnesota, Mississippi, Oregon, Rhode Island, Washington, and Wyoming do not use a point system. Instead, they track violations directly and suspend licenses based on the number and severity of offenses.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ========== SECTION 4: DUI / DWI Laws ========== */}
                <section id="dui" className="py-16 md:py-20 bg-white scroll-mt-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">DUI / DWI Laws</h2>
                            <p className="text-gray-700 mb-8">
                                Driving Under the Influence is one of the most heavily tested topics on the permit exam. Expect at least 1–2 questions on BAC limits, implied consent, and penalties.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">BAC Limits</h3>
                            <div className="overflow-hidden rounded-lg border border-gray-200 mb-4">
                                <table className="w-full text-sm">
                                    <thead className="bg-gray-100 text-gray-500 uppercase text-xs tracking-wider">
                                        <tr>
                                            <th className="text-left px-5 py-3">Driver Type</th>
                                            <th className="text-right px-5 py-3">BAC Limit</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 bg-white">
                                        {[
                                            ['Standard (21+ non-commercial)', '0.08%'],
                                            ['Commercial vehicle operators', '0.04%'],
                                            ['Under 21 (Zero Tolerance)', '0.00–0.02%'],
                                        ].map(([driver, bac]) => (
                                            <tr key={driver}>
                                                <td className="px-5 py-2.5 text-gray-800">{driver}</td>
                                                <td className="px-5 py-2.5 text-right font-semibold text-gray-900">{bac}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-sm text-gray-500 mb-8">Utah has the lowest standard limit in the country at <strong>0.05%</strong> (effective since 2018).</p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Implied Consent</h3>
                            <p className="text-gray-700 mb-8">
                                By driving on public roads, you have already &ldquo;consented&rdquo; to submit to a chemical test (breath, blood, or urine) if an officer has reasonable cause to suspect DUI. <strong>Refusing the test</strong> results in an automatic license suspension (typically 1 year for a first refusal) — even if you are later found not guilty.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">First DUI Offense — Typical Consequences</h3>
                            <ul className="text-gray-700 space-y-1 list-disc pl-5 mb-8">
                                <li>License suspension: 4–6 months</li>
                                <li>Fines: $1,000–$2,500+ (including fees)</li>
                                <li>Possible jail time: 48 hours – 6 months</li>
                                <li>Mandatory DUI education program</li>
                                <li>Possible ignition interlock device (IID)</li>
                                <li>Significant insurance rate increase (SR-22 required in many states)</li>
                            </ul>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Repeat Offense Escalation</h3>
                            <p className="text-gray-700 mb-2">Penalties escalate sharply with each subsequent conviction:</p>
                            <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-8">
                                <li><strong>2nd offense:</strong> Longer suspension (1–2 years), higher fines, mandatory jail time, IID required</li>
                                <li><strong>3rd offense:</strong> Often charged as a felony, multi-year or permanent revocation, extended jail/prison sentence</li>
                                <li><strong>DUI with injury:</strong> Felony charges regardless of prior record, potential state prison time</li>
                            </ul>

                            <div className="bg-amber-50 border-l-4 border-amber-400 p-5">
                                <h3 className="font-semibold text-gray-900 mb-1">Real Estate Test Tip: Drug-Impaired Driving</h3>
                                <p className="text-gray-700">
                                    DUI laws apply to <strong>all impairing substances</strong> — not just alcohol. This includes marijuana (even in legal states), prescription medications that cause drowsiness, and illegal drugs. Any detectable impairment can result in a DUI charge.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========== SECTION 5: real estate license & GDL ========== */}
                <section id="permits" className="py-16 md:py-20 bg-gray-50 scroll-mt-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Learner&rsquo;s Permit & Graduated Driver Licensing</h2>
                            <p className="text-gray-700 mb-8">
                                New drivers go through the Graduated Driver Licensing (GDL) system, which eases you into full driving privileges in three stages.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">The Three GDL Phases</h3>
                            <div className="overflow-hidden rounded-lg border border-gray-200 mb-8">
                                <table className="w-full text-sm">
                                    <thead className="bg-gray-100 text-gray-500 uppercase text-xs tracking-wider">
                                        <tr>
                                            <th className="text-left px-5 py-3">Phase</th>
                                            <th className="text-left px-5 py-3">Key Rules</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 bg-white">
                                        <tr>
                                            <td className="px-5 py-3 font-semibold text-gray-900 align-top whitespace-nowrap">1. Learner&rsquo;s Permit</td>
                                            <td className="px-5 py-3 text-gray-700">Must drive with a licensed adult (21+) at all times. Hold for 6–12 months. Log 40–50 supervised hours.</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 font-semibold text-gray-900 align-top whitespace-nowrap">2. Provisional License</td>
                                            <td className="px-5 py-3 text-gray-700">May drive unsupervised with restrictions: passenger limits (often 1 non-family teen), nighttime curfew (typically 11 PM – 5 AM), zero tolerance for violations.</td>
                                        </tr>
                                        <tr>
                                            <td className="px-5 py-3 font-semibold text-gray-900 align-top whitespace-nowrap">3. Full License</td>
                                            <td className="px-5 py-3 text-gray-700">All restrictions lifted after maintaining a clean record through the provisional period (usually age 18 or 12+ clean months).</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Cell Phone Prohibition</h3>
                            <p className="text-gray-700 mb-8">
                                Learner&rsquo;s permit and provisional license holders are prohibited from <strong>all</strong> cell phone use while driving in most states — including hands-free. This is stricter than the rules for fully licensed adults.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Violation Penalties for New Drivers</h3>
                            <p className="text-gray-700">
                                Violating GDL restrictions can result in an <strong>extended permit period</strong>, delayed progression to the next phase, fines, or suspension. Some states reset the clock entirely — the 6- or 12-month clean-driving requirement starts over from the date of the violation.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ========== SECTION 6: Special Zones & Situations ========== */}
                <section id="special-zones" className="py-16 md:py-20 bg-white scroll-mt-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <div className="relative group mb-6 md:mb-0 md:float-right md:ml-8 md:w-[45%] lg:w-[40%]">
                                <Image
                                    src="/images/fines-and-limits/school-zone-25.webp"
                                    alt="School zone speed limit sign 25 MPH"
                                    width={600}
                                    height={400}
                                    className="rounded-2xl shadow-lg w-full"
                                />
                            </div>

                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Special Zones & Situations</h2>
                            <p className="text-gray-700 mb-8">
                                Certain areas and situations carry enhanced rules and penalties. The Real Estate Exam frequently asks about school buses, emergency vehicles, and railroad crossings.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Construction Zones</h3>
                            <p className="text-gray-700 mb-6">
                                Fines are <strong>doubled (or more)</strong> in active construction zones. Some states impose triple fines if workers are present. Speeding through a work zone can also carry additional points and possible jail time.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">School Zones</h3>
                            <p className="text-gray-700 mb-6">
                                School zone speed limits are typically active during posted hours (usually 30 minutes before and after school) or when children are present. Many jurisdictions use speed cameras for enforcement. Fines are significantly higher than standard speeding tickets.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">School Bus Stopping Rules</h3>
                            <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-6">
                                <li><strong>Flashing red lights + stop arm:</strong> ALL traffic in BOTH directions must stop.</li>
                                <li><strong>Divided highway exception:</strong> If the road has a physical barrier (raised median, unpaved strip), oncoming traffic does not need to stop.</li>
                                <li><strong>Multi-lane road (no barrier):</strong> All lanes in both directions must stop.</li>
                                <li><strong>Penalty:</strong> $150–$1,000+ fine, possible license suspension, points on record.</li>
                            </ul>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Emergency Vehicles & Move-Over Laws</h3>
                            <p className="text-gray-700 mb-6">
                                When an emergency vehicle approaches with lights/sirens, pull to the <strong>right edge of the road and stop</strong>. All 50 states have &ldquo;Move Over&rdquo; laws: when passing a stopped emergency vehicle, tow truck, or utility vehicle on the roadside, you must move over one lane or slow down significantly. Fines range from $50 to $2,500.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Railroad Crossings</h3>
                            <p className="text-gray-700 mb-6">
                                When warning signals activate, you must stop at least <strong>15 feet</strong> from the nearest rail. Never drive around lowered gates. Buses and vehicles carrying hazardous materials must always stop at railroad crossings regardless of signals.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Pedestrian & Crosswalk Rules</h3>
                            <p className="text-gray-700 mb-2">
                                Pedestrians have the right-of-way in marked and <strong>unmarked</strong> crosswalks (any intersection). You must yield to blind pedestrians carrying a <strong>white cane</strong> or using a guide dog at all times — this is a common test question.
                            </p>
                            <p className="text-gray-700 mb-6">
                                Never pass another vehicle that has stopped for a pedestrian at a crosswalk.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Funeral Processions</h3>
                            <p className="text-gray-700">
                                In most states, funeral processions have the right-of-way and may proceed through red lights after the lead vehicle legally enters the intersection. Do not cut into or interrupt a procession.
                            </p>

                            <div className="clear-both"></div>
                        </div>
                    </div>
                </section>

                {/* ========== SECTION 7: What Happens After a Ticket ========== */}
                <section id="after-ticket" className="py-16 md:py-20 bg-gray-50 scroll-mt-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">What Happens After a Ticket</h2>
                            <p className="text-gray-700 mb-8">
                                Getting a ticket doesn&rsquo;t mean you have no options. You generally have three choices: pay the fine, attend traffic school, or contest the ticket.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Option 1: Pay the Fine</h3>
                            <p className="text-gray-700 mb-6">
                                Paying is an admission of guilt. The violation goes on your record, points are added, and your insurance may increase.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Option 2: Traffic School</h3>
                            <p className="text-gray-700 mb-2">
                                Attend an approved course to mask the point from your record. The fine is usually still owed, but your insurance stays unaffected.
                            </p>
                            <p className="text-gray-700 mb-6">
                                Traffic school is generally available for minor moving violations and can typically be used once every <strong>12–18 months</strong>. It is usually <strong>not</strong> available for DUI, reckless driving, or violations that caused injury.
                            </p>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Option 3: Contest the Ticket</h3>
                            <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-8">
                                <li><strong>Trial by written declaration (mail):</strong> Submit your defense in writing. If denied, you can still request an in-person hearing.</li>
                                <li><strong>Court appearance:</strong> Appear before a judge. The citing officer must also appear; if they don&rsquo;t, the case is often dismissed.</li>
                                <li>Take photos of the scene, note conditions, and gather evidence that supports your case.</li>
                            </ul>

                            <div className="bg-amber-50 border-l-4 border-amber-400 p-5 mb-8">
                                <h3 className="font-semibold text-gray-900 mb-1">Warning: Failure to Pay</h3>
                                <p className="text-gray-700">
                                    Ignoring a ticket leads to late fees, license suspension, a bench warrant for your arrest, collections on your credit report, and a vehicle registration hold.
                                </p>
                            </div>

                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Out-of-State Tickets</h3>
                            <p className="text-gray-700">
                                Most states participate in the <strong>Driver License Compact (DLC)</strong>, an agreement to share traffic violation information. An out-of-state ticket will likely be reported to your home state and treated as if you received it locally — including points and insurance impact. Ignoring an out-of-state ticket can lead to license suspension in your home state.
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
                                Questions are created and maintained by the Real Estate Question Bank content team following a rigorous editorial process.
                                Content is updated regularly to reflect the latest state Driver Handbooks and traffic laws.
                                Official sources include state Driver Handbooks, Real Estate websites, and the Uniform Vehicle Code.
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
                                {FAQ_DATA.map((faq, index) => (
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

                {/* Related Articles */}
                <RelatedConcepts currentConceptId="fines-and-limits" />

                {/* CTA Section */}
                <section className="py-16 md:py-24 bg-gray-900 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#007aff]/10"></div>
                    <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
                        <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">Ready for the actual Exam?</h2>
                        <p className="text-gray-400 text-base md:text-lg mb-8 md:mb-10">
                            Fines and limits are just one section. Get your state-specific premium study pack with pass guarantee.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                            <Link
                                href="/#states"
                                className="inline-flex items-center justify-center px-6 md:px-8 py-4 bg-[#007aff] hover:bg-[#0056cc] text-white text-base md:text-lg font-bold rounded-xl transition-all shadow-lg hover:shadow-blue-500/25"
                            >
                                Find Your State
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
