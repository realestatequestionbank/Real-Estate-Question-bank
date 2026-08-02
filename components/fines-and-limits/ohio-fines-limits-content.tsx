'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { useAuth } from '@/contexts/auth-context'
import { PracticeTest } from '@/components/fines-and-limits/practice-test'
import { FINES_AND_LIMITS_QUESTIONS } from '@/components/fines-and-limits/questions'
import { Button } from '@/components/ui/button'
import { ArrowRight, AlertTriangle, Crown, ChevronRight, HelpCircle, CheckCircle2, AlertCircle, ScrollText } from 'lucide-react'
import Link from 'next/link'
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

interface OhioFinesLimitsContentProps {
    faqData: { question: string; answer: string }[]
}

export function OhioFinesLimitsContent({ faqData }: OhioFinesLimitsContentProps) {
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
                            <Link href="/ohio-real-estate-practice-test" className="hover:text-[#007aff] transition-colors">Ohio</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span className="text-gray-900 font-medium">Fines & Limits</span>
                        </nav>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="bg-gradient-to-br from-blue-900 via-indigo-950 to-purple-950 text-white py-12 md:py-20 overflow-hidden relative">
                    <div className="absolute inset-0 bg-[#007aff]/5 pointer-events-none" />
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-1.5 bg-[#007aff]/20 text-[#3ba1ff] border border-[#007aff]/30 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                                <ScrollText className="w-3.5 h-3.5" />
                                Study Guide & Practice Test
                            </div>
                            <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
                                Ohio BMV Fines & Limits Practice Test ({currentYear})
                            </h1>
                            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                                Master Ohio speed limits, traffic violations, points, and OVI penalties for your BMV Temporary Instruction Permit Identification Card (TIPIC) knowledge exam.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Button onClick={scrollToTest} size="lg" className="bg-[#007aff] hover:bg-[#0056cc] text-white font-medium">
                                    Start Practice Test
                                </Button>
                                <Button onClick={() => document.getElementById('speed-limits')?.scrollIntoView({ behavior: 'smooth' })} size="lg" className="border border-gray-700 bg-transparent text-white hover:bg-white/10 font-medium">
                                    Read Study Guide
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sticky Sub-Navigation */}
                <nav ref={navRef} className="sticky top-0 bg-white border-b border-gray-200 z-30 overflow-x-auto scrollbar-hide py-3">
                    <div className="container mx-auto px-4 flex gap-6 md:gap-8 whitespace-nowrap min-w-max">
                        {NAV_ITEMS.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className={`text-sm font-bold pb-1 border-b-2 transition-all ${
                                    activeSection === item.id
                                        ? 'text-[#007aff] border-[#007aff]'
                                        : 'text-gray-500 border-transparent hover:text-gray-900'
                                }`}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </nav>

                {/* Content Section */}
                <div className="container mx-auto px-4 py-12 md:py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
                        {/* Main Study Guide */}
                        <div className="lg:col-span-2 space-y-16">
                            
                            {/* Speed Limits */}
                            <section id="speed-limits" className="scroll-mt-20">
                                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-950 mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-blue-100 text-[#007aff] flex items-center justify-center text-base font-bold">1</span>
                                    Ohio Speed Limits
                                </h2>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Unless otherwise posted, Ohio establishes default speed limits for various driving environments. You must memorize these exact numbers:
                                </p>
                                <div className="overflow-x-auto border border-gray-100 rounded-2xl shadow-sm">
                                    <table className="w-full text-left border-collapse text-sm">
                                        <thead>
                                            <tr className="bg-gray-50 border-b border-gray-100 text-gray-700 font-bold">
                                                <th className="p-4">Speed Limit</th>
                                                <th className="p-4">Location / Zone</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100 text-gray-600">
                                            <tr>
                                                <td className="p-4 font-bold text-[#007aff] bg-blue-50/20">15 mph</td>
                                                <td className="p-4">Alleys within a municipal corporation</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-bold text-[#007aff] bg-blue-50/20">20 mph</td>
                                                <td className="p-4">School zones during arrival, dismissal, and recess times</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-bold text-[#007aff] bg-blue-50/20">25 mph</td>
                                                <td className="p-4">Municipal streets (residential and business districts)</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-bold text-[#007aff] bg-blue-50/20">35 mph</td>
                                                <td className="p-4">State routes in municipal corporations outside business districts</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-bold text-[#007aff] bg-blue-50/20">50 mph</td>
                                                <td className="p-4">State routes outside urban districts</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-bold text-[#007aff] bg-blue-50/20">55 mph</td>
                                                <td className="p-4">Freeways and state highways within municipal corporations</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 font-bold text-[#007aff] bg-blue-50/20">70 mph</td>
                                                <td className="p-4">Rural freeways and the Ohio Turnpike</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            {/* Fines */}
                            <section id="fines" className="scroll-mt-20">
                                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-950 mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-blue-100 text-[#007aff] flex items-center justify-center text-base font-bold">2</span>
                                    Violations and Fines
                                </h2>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Fines in Ohio are assessed based on the type of offense and whether the violation occurred in a safety corridor, construction zone, or school zone:
                                </p>
                                <ul className="space-y-4 text-gray-600 text-sm">
                                    <li className="flex items-start gap-3">
                                        <AlertTriangle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                                        <span><strong>Safety & Construction Zones:</strong> Moving violation fines are <strong>doubled</strong> in active construction zones when workers are present.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <AlertTriangle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                                        <span><strong>Seatbelt Fines:</strong> If stopped, the driver faces a $30 fine, and front-seat passengers face a $20 fine for not wearing a seatbelt.</span>
                                    </li>
                                </ul>
                            </section>

                            {/* Points */}
                            <section id="points" className="scroll-mt-20">
                                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-950 mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-blue-100 text-[#007aff] flex items-center justify-center text-base font-bold">3</span>
                                    The Ohio Point System
                                </h2>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Ohio assigns points to your driving record for moving violations. Accumulating <strong>12 points in 2 years</strong> triggers an automatic <strong>6-month license suspension</strong>, a remedial driving course requirement, and a retest.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="p-5 border border-gray-100 rounded-2xl bg-gray-50/50">
                                        <h4 className="font-bold text-gray-900 mb-3">6-Point Violations</h4>
                                        <ul className="space-y-2 text-sm text-gray-600 list-disc pl-4">
                                            <li>Homicide by vehicle</li>
                                            <li>Operating under influence (OVI)</li>
                                            <li>Street racing</li>
                                            <li>Driving under suspension</li>
                                            <li>Fleeing a police officer</li>
                                        </ul>
                                    </div>
                                    <div className="p-5 border border-gray-100 rounded-2xl bg-gray-50/50">
                                        <h4 className="font-bold text-gray-900 mb-3">2-Point Violations</h4>
                                        <ul className="space-y-2 text-sm text-gray-600 list-disc pl-4">
                                            <li>Most moving violations</li>
                                            <li>Running red lights or stop signs</li>
                                            <li>Failure to yield right-of-way</li>
                                            <li>Speeding (less severe infractions)</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* DUI / OVI */}
                            <section id="dui" className="scroll-mt-20">
                                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-950 mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-blue-100 text-[#007aff] flex items-center justify-center text-base font-bold">4</span>
                                    OVI and Implied Consent
                                </h2>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Operating a Vehicle Impaired (OVI) is a severe offense in Ohio:
                                </p>
                                <ul className="space-y-3 text-sm text-gray-600">
                                    <li>• <strong>Legal BAC limit (21+):</strong> 0.08%</li>
                                    <li>• <strong>Underage limit (under 21):</strong> 0.02% (Zero Tolerance)</li>
                                    <li>• <strong>Implied Consent:</strong> By driving, you agree to breath, blood, or urine tests. Refusal results in an automatic <strong>1-year administrative license suspension</strong>.</li>
                                    <li>• <strong>First OVI Penalties:</strong> Mandatory 3 days in jail or a 72-hour driver intervention program, fines from $375 to $1,075, and license suspension from 1 to 3 years.</li>
                                </ul>
                            </section>

                            {/* Permits */}
                            <section id="permits" className="scroll-mt-20">
                                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-950 mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-blue-100 text-[#007aff] flex items-center justify-center text-base font-bold">5</span>
                                    TIPIC & GDL Restrictions
                                </h2>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Temporary permit holders under 18 must follow strict rules:
                                </p>
                                <ul className="space-y-3 text-sm text-gray-600">
                                    <li>• <strong>Under 16:</strong> Must drive with a parent or guardian in the front passenger seat.</li>
                                    <li>• <strong>Age 16:</strong> Curfew from <strong>midnight to 6 a.m.</strong> (unless driving for work/school or with a parent).</li>
                                    <li>• <strong>Age 17:</strong> Curfew from <strong>1 a.m. to 5 a.m.</strong></li>
                                    <li>• <strong>Seatbelts:</strong> Every single occupant in a teen driver's vehicle must wear a seatbelt.</li>
                                </ul>
                            </section>

                            {/* Practice Test Section */}
                            <section id="practice-test" className="scroll-mt-20 pt-8 border-t border-gray-100">
                                <div className="mb-8">
                                    <h2 className="text-2xl md:text-3xl font-extrabold text-gray-950 mb-3">
                                        Fines & Limits Practice Test
                                    </h2>
                                    <p className="text-gray-600 text-sm">
                                        Test your knowledge of Ohio's speed limits, points, and OVI regulations.
                                    </p>
                                </div>
                                <PracticeTest questions={FINES_AND_LIMITS_QUESTIONS} showPremiumUpsell={!isPremium} />
                            </section>

                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border border-blue-100 rounded-3xl p-6 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-5">
                                    <Crown className="w-24 h-24 text-blue-900" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Ohio Premium Access</h3>
                                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                    Get full access to all 593 exam-like practice questions, unlimited mock tests, and our 100% money-back pass guarantee.
                                </p>
                                <Button onClick={() => router.push('/get-premium?state=ohio')} className="w-full bg-[#007aff] hover:bg-[#0056cc] text-white">
                                    Upgrade to Premium
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                <StateHubsSection />
            </main>

            <Footer />
        </div>
    )
}
