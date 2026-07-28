'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { useAuth } from '@/contexts/auth-context'
import { PracticeTest } from '@/components/fines-and-limits/practice-test'
import { RIGHT_OF_WAY_QUESTIONS } from '@/components/right-of-way/questions'
import { Button } from '@/components/ui/button'
import { ArrowRight, AlertTriangle, Crown, ChevronRight, HelpCircle, CheckCircle2, AlertCircle, Shield } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState, useRef } from 'react'
import { StateHubsSection } from '@/components/state-hubs-section'

const currentYear = new Date().getFullYear()

const NAV_ITEMS = [
    { id: 'intersections', label: 'Intersections' },
    { id: 'left-turns', label: 'Left Turns' },
    { id: 'roundabouts', label: 'Roundabouts' },
    { id: 'emergency-vehicles', label: 'Emergency Vehicles' },
    { id: 'school-buses', label: 'School Buses' },
    { id: 'practice-test', label: 'Practice Test' },
]

interface OhioRightOfWayContentProps {
    faqData: { question: string; answer: string }[]
}

export function OhioRightOfWayContent({ faqData }: OhioRightOfWayContentProps) {
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
                            <Link href="/ohio-bmv-permit-test" className="hover:text-[#007aff] transition-colors">Ohio</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span className="text-gray-900 font-medium">Right-of-Way</span>
                        </nav>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="bg-gradient-to-br from-indigo-950 via-blue-950 to-emerald-950 text-white py-12 md:py-20 overflow-hidden relative">
                    <div className="absolute inset-0 bg-[#007aff]/5 pointer-events-none" />
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                                <Shield className="w-3.5 h-3.5" />
                                Study Guide & Practice Test
                            </div>
                            <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
                                Ohio BMV Right-of-Way Rules Practice Test ({currentYear})
                            </h1>
                            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                                Master who goes first at intersections, roundabouts, school buses, and emergency vehicle zones to pass your temps test.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Button onClick={scrollToTest} size="lg" className="bg-[#007aff] hover:bg-[#0056cc] text-white font-medium">
                                    Start Practice Test
                                </Button>
                                <Button onClick={() => document.getElementById('intersections')?.scrollIntoView({ behavior: 'smooth' })} size="lg" className="border border-gray-700 bg-transparent text-white hover:bg-white/10 font-medium">
                                    Read Rules Guide
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
                            
                            {/* Intersections */}
                            <section id="intersections" className="scroll-mt-20">
                                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-950 mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-blue-100 text-[#007aff] flex items-center justify-center text-base font-bold">1</span>
                                    Intersections yielding rules
                                </h2>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    At intersections in Ohio:
                                </p>
                                <ul className="space-y-4 text-sm text-gray-600">
                                    <li>• <strong>Uncontrolled Intersections:</strong> If two vehicles reach an intersection at approximately the same time, the driver on the left must yield the right-of-way to the vehicle on the right.</li>
                                    <li>• <strong>Four-Way Stops:</strong> The vehicle that arrives first goes first. If arriving at the same time, yield to the vehicle on your right.</li>
                                </ul>
                            </section>

                            {/* Left Turns */}
                            <section id="left-turns" className="scroll-mt-20">
                                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-950 mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-blue-100 text-[#007aff] flex items-center justify-center text-base font-bold">2</span>
                                    Yielding on Left Turns
                                </h2>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    When making a left turn in Ohio, you must yield the right-of-way to any oncoming vehicles. Do not start your turn until you have a gap large enough to complete the turn safely.
                                </p>
                            </section>

                            {/* Roundabouts */}
                            <section id="roundabouts" className="scroll-mt-20">
                                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-950 mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-blue-100 text-[#007aff] flex items-center justify-center text-base font-bold">3</span>
                                    Roundabout rules
                                </h2>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Roundabouts improve traffic flow and safety. Follow these rules:
                                </p>
                                <ul className="space-y-3 text-sm text-gray-600">
                                    <li>• Always yield to traffic already in the roundabout before entering.</li>
                                    <li>• Travel in a counter-clockwise direction.</li>
                                    <li>• Do not change lanes or stop while in the roundabout.</li>
                                    <li>• Yield to pedestrians in crosswalks when entering and exiting.</li>
                                </ul>
                            </section>

                            {/* Emergency Vehicles */}
                            <section id="emergency-vehicles" className="scroll-mt-20">
                                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-950 mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-blue-100 text-[#007aff] flex items-center justify-center text-base font-bold">4</span>
                                    Emergency Vehicles & Move Over
                                </h2>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    You must yield to sirens and flashing lights:
                                </p>
                                <ul className="space-y-3 text-sm text-gray-600">
                                    <li>• <strong>Approaching Emergency Vehicles:</strong> Pull over as close to the right edge of the road as possible and stop until the vehicle has passed.</li>
                                    <li>• <strong>Ohio Move Over Law:</strong> When passing stationary emergency vehicles or road service crews with flashing lights, you must shift over one lane if safe. If changing lanes is impossible, you must slow down to a safe speed (generally 20 mph below limit).</li>
                                </ul>
                            </section>

                            {/* School Buses */}
                            <section id="school-buses" className="scroll-mt-20">
                                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-950 mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-blue-100 text-[#007aff] flex items-center justify-center text-base font-bold">5</span>
                                    School Bus Stopping Laws (Highly Tested!)
                                </h2>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Ohio has a unique school bus law depending on the number of lanes:
                                </p>
                                <div className="p-5 border border-red-100 bg-red-50/50 rounded-2xl mb-6">
                                    <h4 className="font-bold text-red-950 mb-3 flex items-center gap-2">
                                        <AlertTriangle className="w-5 h-5 text-red-600" />
                                        Ohio School Bus Stop Rules
                                    </h4>
                                    <ul className="space-y-3 text-sm text-red-900 list-disc pl-4">
                                        <li><strong>On roads with FEWER than 4 lanes:</strong> All traffic from BOTH directions must stop at least 10 feet from the stopped school bus when its red lights are flashing.</li>
                                        <li><strong>On roads with 4 OR MORE lanes:</strong> Only traffic traveling in the same direction as the school bus must stop. Opposite traffic may proceed.</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Practice Test Section */}
                            <section id="practice-test" className="scroll-mt-20 pt-8 border-t border-gray-100">
                                <div className="mb-8">
                                    <h2 className="text-2xl md:text-3xl font-extrabold text-gray-950 mb-3">
                                        Right-of-Way Practice Test
                                    </h2>
                                    <p className="text-gray-600 text-sm">
                                        Test your knowledge of Ohio's intersections, Move Over law, and school bus rules.
                                    </p>
                                </div>
                                <PracticeTest questions={RIGHT_OF_WAY_QUESTIONS} showPremiumUpsell={!isPremium} />
                            </section>

                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 border border-emerald-100 rounded-3xl p-6 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-5">
                                    <Crown className="w-24 h-24 text-blue-900" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Ohio Premium Access</h3>
                                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                    Unlock 593 realistic BMV questions, unlimited mock tests, and get our Pass Guarantee.
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
