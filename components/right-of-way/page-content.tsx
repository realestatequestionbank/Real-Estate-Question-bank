'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { useAuth } from '@/contexts/auth-context'
import { PracticeTest } from '@/components/right-of-way/practice-test'
import { RIGHT_OF_WAY_QUESTIONS } from '@/components/right-of-way/questions'
import { Button } from '@/components/ui/button'
import { ArrowRight, BookOpen, AlertTriangle, ShieldCheck, Crown, ChevronRight, Siren, Bus, HelpCircle, CheckCircle2, AlertCircle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState, useRef } from 'react'
import { StateHubsSection } from '@/components/state-hubs-section'
import { RelatedConcepts } from '@/components/concepts/related-concepts'

// FAQ Data for display
const FAQ_DATA = [
    {
        question: "Who has the right-of-way at a 4-way stop?",
        answer: "The first vehicle to arrive and stop has the right-of-way. If two vehicles arrive at the same time, the vehicle on the right goes first."
    },
    {
        question: "Do pedestrians always have the right-of-way?",
        answer: "Pedestrians have the right-of-way at all marked and unmarked crosswalks. However, pedestrians must also follow traffic signals and not suddenly enter a roadway."
    },
    {
        question: "Who yields at a roundabout?",
        answer: "Vehicles entering the roundabout must yield to traffic already circulating inside. Never stop inside a roundabout to let someone in."
    },
    {
        question: "When must I stop for a school bus?",
        answer: "You must stop when a school bus displays flashing red lights, unless you are on the opposite side of a divided highway with a physical barrier."
    },
    {
        question: "What should I do when an emergency vehicle approaches?",
        answer: "Pull to the right side of the road and stop until the emergency vehicle has passed. If you're in an intersection, clear it first, then pull over."
    },
    {
        question: "Who goes first at an uncontrolled intersection?",
        answer: "At intersections without signs or signals, yield to any vehicle already in the intersection. If you arrive at the same time, yield to the vehicle on your right."
    }
]

const NAV_ITEMS = [
    { id: 'intersections', label: 'Intersections' },
    { id: 'roundabouts', label: 'Roundabouts' },
    { id: 'pedestrians', label: 'Pedestrians' },
    { id: 'emergency-vehicles', label: 'Emergency Vehicles' },
    { id: 'practice-test', label: 'Practice Test' },
]

export function RightOfWayPageContent() {
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
                            <span className="text-gray-900 font-medium">Right-of-Way Rules</span>
                        </nav>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="relative pt-16 pb-20 md:pt-20 md:pb-24 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
                    <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -mr-32 -mt-32"></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6 md:mb-8">
                                <ShieldCheck className="w-4 h-4 text-green-400" />
                                <span className="text-sm font-medium text-blue-100">Critical Exam Topic</span>
                            </div>

                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 tracking-tight leading-tight">
                                Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">Right-of-Way</span> Rules
                            </h1>

                            <p className="text-lg md:text-xl text-blue-100/90 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
                                Right-of-way errors cause thousands of accidents yearly. These questions make up about <strong>25% of your real estate exam</strong>. Learn the rules for intersections, roundabouts, and pedestrians to pass.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
                                <Button
                                    onClick={scrollToTest}
                                    size="lg"
                                    className="bg-white text-blue-900 hover:bg-blue-50 text-base md:text-lg font-bold px-6 md:px-8 py-5 md:py-6 rounded-xl md:rounded-2xl shadow-xl shadow-blue-900/20 border-0"
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
                                        The Real Estate considers &quot;Failure to Yield&quot; one of the most dangerous driving behaviors. Because of this, you will see multiple questions testing your judgment in complex scenarios. You must master:
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
                                        ? 'bg-blue-900 text-white'
                                        : 'text-gray-600 hover:bg-gray-100'
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
                        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                            <div className="space-y-6 md:space-y-8">
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">Intersections &amp; 4-Way Stops</h2>
                                    <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                                        Confusion at intersections is dangerous. The golden rule at a 4-way stop is simple: <strong>First to stop, first to go.</strong> If two vehicles arrive at the same time, the vehicle on the <strong>right</strong> has the right-of-way.
                                    </p>

                                    <div className="bg-yellow-50 p-5 md:p-6 rounded-2xl border border-yellow-100">
                                        <h3 className="font-bold text-yellow-900 mb-2 flex items-center gap-2">
                                            <AlertTriangle className="w-5 h-5 text-yellow-600" />
                                            Real Estate Test Tip: Left Turns
                                        </h3>
                                        <p className="text-yellow-900/80 text-sm md:text-base leading-relaxed">
                                            A very common test question asks: &quot;You want to turn left at an intersection. The light is green but there is oncoming traffic.&quot;
                                        </p>
                                        <p className="text-yellow-900/80 text-sm md:text-base mt-2 font-medium">
                                            Answer: You must wait in the intersection until oncoming traffic clears. Left turners must ALWAYS yield to oncoming straight traffic (unless you have a protected green arrow).
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-gray-100">
                                    <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                                        <AlertTriangle className="w-5 h-5 text-gray-500" />
                                        Other Key Rules
                                    </h3>
                                    <ul className="space-y-2 text-gray-600 text-sm md:text-base">
                                        <li>• <strong>T-Intersections:</strong> Traffic on the through road has the right-of-way. Vehicles on the road ending must yield.</li>
                                        <li>• <strong>Uncontrolled Intersections:</strong> Yield to vehicle on your right.</li>
                                        <li>• <strong>Private Roads/Driveways:</strong> Yield to all traffic on the main road.</li>
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
                        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
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
                                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                        Roundabouts are designed to keep traffic flowing. The rule is strictly <strong>Yield on Entry</strong>. Traffic already inside the circle always has the right-of-way over vehicles entering. You must travel in a <strong>counter-clockwise</strong> direction.
                                    </p>
                                </div>

                                <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-gray-100">
                                    <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                                        <ShieldCheck className="w-5 h-5 text-emerald-500" />
                                        Safety Critical
                                    </h3>
                                    <p className="text-gray-600 text-sm md:text-base">
                                        Never stop <em>inside</em> a roundabout to let someone in. This causes accidents and defeats the purpose of the roundabout.
                                    </p>
                                </div>

                                <div className="flex gap-4 p-4 bg-red-50 rounded-xl border border-red-100">
                                    <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-red-900 text-sm">Exam Alert: Merging</h4>
                                        <p className="text-red-800/80 text-sm mt-1">
                                            When merging onto a highway or freeway, you must enter at or near the speed of traffic. It is YOUR responsibility to find a gap. <strong>Do not stop in the acceleration lane</strong> unless absolutely necessary.
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
                        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                            <div className="space-y-6 md:space-y-8">
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">Pedestrians are Priority</h2>
                                    <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                                        Pedestrians are the most vulnerable road users. You must yield to pedestrians in <strong>marked and unmarked</strong> crosswalks at every intersection.
                                    </p>

                                    <div className="bg-blue-50 p-5 md:p-6 rounded-2xl border border-blue-100">
                                        <p className="text-blue-900 font-medium italic text-sm md:text-base">
                                            &quot;When in doubt, yield. Even if a pedestrian is jaywalking (crossing illegally), you must stop to prevent an injury. Taking the right-of-way from a pedestrian is illegal.&quot;
                                        </p>
                                    </div>

                                    <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-gray-100 mt-4">
                                        <h3 className="font-bold text-gray-900 mb-2">Blind Pedestrians</h3>
                                        <p className="text-gray-600 text-sm md:text-base">
                                            Pedestrians using guide dogs or white canes (with or without a red tip) must be given the right-of-way at all times. Stop well back from the crosswalk so the vehicle noise does not distract the service animal.
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
                        <div className="max-w-6xl mx-auto">
                            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl md:rounded-3xl p-6 md:p-10 border border-red-100">
                                <div className="flex items-center gap-3 mb-4 md:mb-6">
                                    <div className="w-12 h-12 md:w-14 md:h-14 bg-red-500 rounded-xl flex items-center justify-center">
                                        <Siren className="w-6 h-6 md:w-7 md:h-7 text-white" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Emergency Vehicles &amp; School Buses</h2>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-2 text-lg">Emergency Vehicles</h3>
                                        <p className="text-gray-700 text-sm md:text-base mb-3">
                                            When you see lights or hear sirens, you must <strong>pull to the right and stop</strong>. This is a law, not a suggestion.
                                        </p>
                                        <ul className="space-y-2 text-gray-700 text-sm md:text-base bg-white/50 p-4 rounded-xl">
                                            <li>• <strong>Intersection:</strong> If inside, clear it first, then pull over. Never stop <em>in</em> the intersection.</li>
                                            <li>• <strong>Move Over Law:</strong> When passing a stopped emergency vehicle, move over one lane or slow down significantly.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2 text-lg">
                                            <Bus className="w-5 h-5 text-yellow-600" />
                                            School Buses
                                        </h3>
                                        <p className="text-gray-700 text-sm md:text-base mb-3">
                                            Flashing red lights mean <strong>STOP</strong>.
                                        </p>
                                        <div className="bg-white/50 p-4 rounded-xl space-y-3">
                                            <div>
                                                <span className="font-bold text-sm block mb-1">Undivided Road:</span>
                                                <span className="text-sm text-gray-700">Both directions must stop.</span>
                                            </div>
                                            <div>
                                                <span className="font-bold text-sm block mb-1">Divided Highway:</span>
                                                <span className="text-sm text-gray-700">Only traffic following the bus must stop. Opposite side proceeds with caution.</span>
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
                            <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-4 md:mb-6">
                                Test Your Knowledge
                            </h2>
                            <p className="text-lg md:text-xl text-gray-600">
                                These 25 questions mimic the real exam&apos;s &quot;Right of Way&quot; section. Can you score the passing 83%?
                            </p>
                        </div>

                        <PracticeTest questions={RIGHT_OF_WAY_QUESTIONS} />

                        {/* Credibility Statement */}
                        <div className="mt-12 max-w-3xl mx-auto text-center">
                            <p className="text-sm text-gray-500 leading-relaxed">
                                Questions are created and maintained by the Real Estate Question Bank content team following a rigorous editorial process.
                                Content is updated regularly to reflect the latest state Real Estate handbooks and traffic laws.
                                Official sources include state Driver Handbooks, Real Estate websites, and the Uniform Vehicle Code.
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
                                <h2 className="text-2xl md:text-4xl font-black text-gray-900">
                                    Frequently Asked Questions
                                </h2>
                            </div>

                            <div className="space-y-4">
                                {FAQ_DATA.map((faq, index) => (
                                    <details
                                        key={index}
                                        className="group bg-gray-50 rounded-xl border border-gray-200 overflow-hidden"
                                    >
                                        <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer font-bold text-gray-900 hover:bg-gray-100 transition-colors">
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
                <RelatedConcepts currentConceptId="right-of-way" />

                {/* CTA Section */}
                <section className="py-16 md:py-24 bg-gray-900 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#007aff]/10"></div>
                    <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
                        <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">Ready for the full State Test?</h2>
                        <p className="text-gray-400 text-base md:text-lg mb-8 md:mb-10">
                            Right-of-way is just one part of the exam. Get access to state-specific questions, premium study guides, and pass guarantee.
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
