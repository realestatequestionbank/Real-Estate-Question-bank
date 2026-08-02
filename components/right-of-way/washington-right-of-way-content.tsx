'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { useAuth } from '@/contexts/auth-context'
import { PracticeTest } from '@/components/right-of-way/practice-test'
import { RIGHT_OF_WAY_QUESTIONS } from '@/components/right-of-way/questions'
import { Button } from '@/components/ui/button'
import { ArrowRight, AlertTriangle, ShieldCheck, ChevronRight, Siren, Bus, HelpCircle, BookOpen, CheckCircle2, AlertCircle, Crown, ScrollText } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState, useRef } from 'react'
import { StateHubsSection } from '@/components/state-hubs-section'

const currentYear = new Date().getFullYear()

const NAV_ITEMS = [
    { id: 'intersections', label: 'Intersections' },
    { id: 'roundabouts', label: 'Roundabouts' },
    { id: 'pedestrians', label: 'Pedestrians' },
    { id: 'emergency-vehicles', label: 'Emergency Vehicles' },
    { id: 'practice-test', label: 'Practice Test' },
]

interface WashingtonRightOfWayContentProps {
    faqData: { question: string; answer: string }[]
}

export function WashingtonRightOfWayContent({ faqData }: WashingtonRightOfWayContentProps) {
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
                            <span className="text-gray-900 font-medium">Right-of-Way Rules</span>
                        </nav>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="relative overflow-hidden bg-white">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"></div>

                    {/* Mobile-only: full-width image above text */}
                    <div className="relative lg:hidden w-full h-56 overflow-hidden">
                        <Image
                            src="/images/right-of-way/roundabout-yield.webp"
                            alt="Washington Right-of-Way Rules Illustration"
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
                                        Washington DOL <span className="text-[#007aff]">Right-of-Way</span> Rules Permit Practice Test {currentYear}
                                    </h1>
                                    <p className="text-base text-gray-600 mb-8 md:mb-10 max-w-2xl leading-relaxed">
                                        Master Washington&apos;s right-of-way rules for intersections, roundabouts, and pedestrians with 25 challenging practice questions. Right-of-way errors are among the leading causes of collisions in Washington State and make up about 25% of the DOL knowledge test.
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
                                            src="/images/right-of-way/roundabout-yield.webp"
                                            alt="Washington Right-of-Way Rules Illustration"
                                            width={448}
                                            height={299}
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
                                                '4-Way Stop Order',
                                                'Simultaneous Arrivals',
                                                'Roundabout Entry',
                                                'Left Turn Yield',
                                                'Unmarked Crosswalks',
                                                'Move-Over Law',
                                                'School Bus Rules',
                                                'T-Intersection Yield',
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
                                        Understanding Washington&apos;s right-of-way rules is essential for passing the DOL knowledge test — and for staying safe on Washington roads. Right-of-way questions appear frequently on the exam, making this one of the most heavily tested topics.
                                    </p>
                                    <p className="text-base text-gray-700 leading-relaxed mb-4">
                                        This free practice test covers every right-of-way scenario you&apos;ll face on the actual DOL exam. The questions are intentionally challenging because these topics are frequently tested. You&apos;ll learn about 4-way stops, uncontrolled intersections, roundabout entry rules, pedestrian crosswalk laws, emergency vehicle procedures, and school bus regulations as defined by RCW 46.61.
                                    </p>
                                    <p className="text-base text-gray-700 leading-relaxed">
                                        Expect questions about: who goes first at a 4-way stop when vehicles arrive simultaneously, what to do at uncontrolled intersections, how to navigate roundabouts safely, when you must yield to pedestrians, Washington&apos;s Move Over law for emergency vehicles, and school bus stopping requirements. These are real Washington laws you need to know.
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
                                        The Washington DOL considers &quot;Failure to Yield&quot; one of the most dangerous driving behaviors. Because of this, you will see multiple questions testing your judgment in complex scenarios. You must master:
                                    </p>
                                    <ul className="grid sm:grid-cols-2 gap-3 mt-4">
                                        <li className="flex items-center gap-2 text-sm font-medium text-gray-800">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                            4-way stop precedence
                                        </li>
                                        <li className="flex items-center gap-2 text-sm font-medium text-gray-800">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                            Uncontrolled intersections
                                        </li>
                                        <li className="flex items-center gap-2 text-sm font-medium text-gray-800">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                            Roundabout entry rules
                                        </li>
                                        <li className="flex items-center gap-2 text-sm font-medium text-gray-800">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                            Pedestrian crosswalk laws
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

                {/* ========== SECTION 1: Intersections ========== */}
                <section id="intersections" className="py-16 md:py-20 bg-gray-50 scroll-mt-32">
                    <div className="container mx-auto px-4">
                        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                            <div className="space-y-6 md:space-y-8">
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">Intersections &amp; 4-Way Stops</h2>
                                    <p className="text-base text-gray-700 leading-relaxed mb-4">
                                        Under RCW 46.61.180, the golden rule at a 4-way stop is clear: <strong>First to stop, first to go.</strong> If two vehicles arrive at the same time, the vehicle on the <strong>right</strong> has the right-of-way. Washington law requires all drivers to come to a complete stop before proceeding.
                                    </p>

                                    <div className="bg-yellow-50 p-5 md:p-6 rounded-2xl border border-yellow-100">
                                        <h3 className="text-lg font-bold text-yellow-900 mb-2 flex items-center gap-2">
                                            <AlertTriangle className="w-5 h-5 text-yellow-600" />
                                            DOL Test Tip: Left Turns
                                        </h3>
                                        <p className="text-sm text-yellow-900/80 leading-relaxed">
                                            A very common test question asks: &quot;You want to turn left at an intersection. The light is green but there is oncoming traffic.&quot;
                                        </p>
                                        <p className="text-sm text-yellow-900/80 mt-2 font-medium">
                                            Answer: Under RCW 46.61.185, you must wait in the intersection until oncoming traffic clears. Left turners must ALWAYS yield to oncoming straight traffic (unless you have a protected green arrow).
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-gray-100">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                                        <AlertTriangle className="w-5 h-5 text-gray-500" />
                                        Other Key Washington Rules
                                    </h3>
                                    <ul className="space-y-2 text-sm text-gray-600">
                                        <li>• <strong>T-Intersections:</strong> Traffic on the through road has the right-of-way. Vehicles on the road ending must yield (RCW 46.61.190).</li>
                                        <li>• <strong>Uncontrolled Intersections:</strong> Yield to vehicle on your right (RCW 46.61.180).</li>
                                        <li>• <strong>Private Roads/Driveways:</strong> Yield to all traffic on the public road before entering (RCW 46.61.340).</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="relative group lg:sticky lg:top-24">
                                <div className="absolute inset-0 bg-blue-600 rounded-2xl md:rounded-3xl rotate-2 opacity-10 group-hover:rotate-3 transition-transform duration-300"></div>
                                <Image
                                    src="/images/right-of-way/4-way-stop.webp"
                                    alt="4-way stop intersection showing right of way rules"
                                    width={600}
                                    height={400}
                                    className="rounded-2xl md:rounded-3xl shadow-xl relative z-10 w-full"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========== SECTION 2: Roundabouts ========== */}
                <section id="roundabouts" className="py-16 md:py-20 bg-white scroll-mt-32">
                    <div className="container mx-auto px-4">
                        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                            <div className="relative group order-2 lg:order-1 lg:sticky lg:top-24">
                                <div className="absolute inset-0 bg-emerald-600 rounded-2xl md:rounded-3xl -rotate-2 opacity-10 group-hover:-rotate-3 transition-transform duration-300"></div>
                                <Image
                                    src="/images/right-of-way/roundabout-yield.webp"
                                    alt="Roundabout showing yield on entry rules"
                                    width={600}
                                    height={400}
                                    className="rounded-2xl md:rounded-3xl shadow-xl relative z-10 w-full"
                                />
                            </div>

                            <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">Roundabouts &amp; Merging</h2>
                                    <p className="text-base text-gray-700 leading-relaxed">
                                        Washington has invested significantly in roundabouts as a safer alternative to traditional intersections. The rule is strictly <strong>Yield on Entry</strong>. Traffic already inside the circle always has the right-of-way over vehicles entering. Travel in a <strong>counter-clockwise</strong> direction and signal when exiting.
                                    </p>
                                </div>

                                <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-gray-100">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                                        <ShieldCheck className="w-5 h-5 text-emerald-500" />
                                        Safety Critical
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        Never stop <em>inside</em> a roundabout to let someone in. This causes accidents and defeats the purpose of the roundabout. WSDOT data shows roundabouts reduce injury crashes by up to 75% compared to signalized intersections.
                                    </p>
                                </div>

                                <div className="flex gap-4 p-4 bg-red-50 rounded-xl border border-red-100">
                                    <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-base font-bold text-red-900">Exam Alert: Freeway Merging</h4>
                                        <p className="text-sm text-red-800/80 mt-1">
                                            When merging onto a Washington freeway or highway, you must enter at or near the speed of traffic. It is YOUR responsibility to find a gap. <strong>Do not stop in the acceleration lane</strong> unless absolutely necessary.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========== SECTION 3: Pedestrians ========== */}
                <section id="pedestrians" className="py-16 md:py-20 bg-gray-50 scroll-mt-32">
                    <div className="container mx-auto px-4">
                        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                            <div className="space-y-6 md:space-y-8">
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">Pedestrians are Priority</h2>
                                    <p className="text-base text-gray-700 leading-relaxed mb-4">
                                        Washington law (RCW 46.61.235) gives pedestrians strong protections. You must yield to pedestrians in <strong>marked and unmarked</strong> crosswalks at every intersection. Pedestrians stepping off the curb have priority — do not wait until they are in your lane.
                                    </p>

                                    <div className="bg-blue-50 p-5 md:p-6 rounded-2xl border border-blue-100">
                                        <p className="text-sm text-blue-900 font-medium italic">
                                            &quot;When in doubt, yield. Even if a pedestrian appears to be crossing illegally, Washington law still requires you to stop to prevent injury. Failure to yield to a pedestrian in a crosswalk is a primary offense in Washington.&quot;
                                        </p>
                                    </div>

                                    <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-gray-100 mt-4">
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">Blind Pedestrians (RCW 46.61.240)</h3>
                                        <p className="text-sm text-gray-600">
                                            Pedestrians using guide dogs or white canes (with or without a red tip) must be given the right-of-way at all times. Stop well back from the crosswalk so the vehicle noise does not distract the service animal. Violations carry a fine of up to $500 in Washington.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative group lg:sticky lg:top-24">
                                <div className="absolute inset-0 bg-yellow-400 rounded-2xl md:rounded-3xl rotate-2 opacity-20 group-hover:rotate-3 transition-transform duration-300"></div>
                                <Image
                                    src="/images/right-of-way/pedestrian-crossing.webp"
                                    alt="Car stopping for pedestrian at marked crosswalk"
                                    width={600}
                                    height={400}
                                    className="rounded-2xl md:rounded-3xl shadow-xl relative z-10 w-full"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========== SECTION 4: Emergency Vehicles ========== */}
                <section id="emergency-vehicles" className="py-16 md:py-20 bg-white scroll-mt-32">
                    <div className="container mx-auto px-4">
                        <div className="max-w-7xl mx-auto">
                            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl md:rounded-3xl p-6 md:p-10 border border-red-100">
                                <div className="flex items-center gap-3 mb-4 md:mb-6">
                                    <div className="w-12 h-12 md:w-14 md:h-14 bg-red-500 rounded-xl flex items-center justify-center">
                                        <Siren className="w-6 h-6 md:w-7 md:h-7 text-white" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Emergency Vehicles &amp; School Buses</h2>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">Emergency Vehicles (RCW 46.61.210)</h3>
                                        <p className="text-sm text-gray-700 mb-3">
                                            When you see lights or hear sirens, you must <strong>pull to the right and stop</strong>. This is a law in Washington, not a suggestion.
                                        </p>
                                        <ul className="space-y-2 text-sm text-gray-700 bg-white/50 p-4 rounded-xl">
                                            <li>• <strong>Intersection:</strong> If inside, clear it first, then pull over. Never stop <em>in</em> the intersection.</li>
                                            <li>• <strong>Washington Move Over Law (RCW 46.61.212):</strong> When passing a stopped emergency vehicle, tow truck, or WSDOT vehicle with flashing lights, move over one full lane or slow to a safe speed. Fines start at $200.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                                            <Bus className="w-5 h-5 text-yellow-600" />
                                            School Buses (RCW 46.61.370)
                                        </h3>
                                        <p className="text-sm text-gray-700 mb-3">
                                            Flashing red lights mean <strong>STOP</strong>.
                                        </p>
                                        <div className="bg-white/50 p-4 rounded-xl space-y-3">
                                            <div>
                                                <span className="text-sm font-bold block mb-1">Undivided Road:</span>
                                                <span className="text-sm text-gray-700">Both directions must stop at least 20 feet from the bus.</span>
                                            </div>
                                            <div>
                                                <span className="text-sm font-bold block mb-1">Divided Highway:</span>
                                                <span className="text-sm text-gray-700">Only traffic following the bus must stop. Opposite side proceeds with caution.</span>
                                            </div>
                                            <div>
                                                <span className="text-sm font-bold block mb-1">Washington Penalty:</span>
                                                <span className="text-sm text-gray-700">Fines up to $394 + points on record. Camera enforcement is active in many Washington school districts.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Practice Test Section */}
                <section id="practice-test" className="py-16 md:py-24 bg-gray-50 relative scroll-mt-32">
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
                            <span className="text-[#007aff] font-bold tracking-wider uppercase text-sm mb-3 block">Interactive Exam Simulator</span>
                            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 md:mb-6">
                                Test Your Knowledge
                            </h2>
                            <p className="text-base text-gray-600">
                                These 25 questions mimic the real Washington DOL exam&apos;s &quot;Right of Way&quot; section. Can you score the passing 80%?
                            </p>
                        </div>

                        <PracticeTest questions={RIGHT_OF_WAY_QUESTIONS} />

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
                                {' '}and the Revised Code of Washington (RCW Title 46).
                            </p>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-16 md:py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-10 md:mb-12">
                                <div className="inline-flex items-center gap-2 text-[#007aff] font-bold mb-3">
                                    <HelpCircle className="w-5 h-5" />
                                    <span className="uppercase tracking-wider text-sm">Common Questions</span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                                    Frequently Asked Questions
                                </h2>
                            </div>

                            <div className="space-y-4">
                                {faqData.map((faq, index) => (
                                    <details
                                        key={index}
                                        className="group bg-gray-50 rounded-xl border border-gray-200 overflow-hidden"
                                    >
                                        <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer font-bold text-gray-900 hover:bg-gray-100 transition-colors">
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
                            Right-of-way is just one section. Get your Washington-specific premium study pack with a pass guarantee.
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
