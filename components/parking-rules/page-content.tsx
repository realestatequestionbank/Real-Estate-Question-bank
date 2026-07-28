'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { useAuth } from '@/contexts/auth-context'
import { PracticeTest } from '@/components/right-of-way/practice-test'
import { PARKING_RULES_QUESTIONS } from '@/components/parking-rules/questions'
import { Button } from '@/components/ui/button'
import { ArrowRight, BookOpen, AlertTriangle, Crown, ChevronRight, HelpCircle, CheckCircle2, AlertCircle, MapPin } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState, useRef } from 'react'
import { StateHubsSection } from '@/components/state-hubs-section'
import { RelatedConcepts } from '@/components/concepts/related-concepts'


// FAQ Data
const FAQ_DATA = [
    {
        question: "What do curb colors mean?",
        answer: "Red = No parking/stopping, Blue = Disabled parking only, White = Passenger loading/unloading only, Yellow = Commercial loading/unloading only, Green = Short-term parking (usually 15-30 minutes)."
    },
    {
        question: "How far should I park from a fire hydrant?",
        answer: "You must park at least 15 feet away from a fire hydrant in most states. This ensures emergency vehicles can access water quickly."
    },
    {
        question: "Which way do I turn my wheels when parking on a hill?",
        answer: "Uphill with curb: turn wheels AWAY from curb. Downhill with curb: turn wheels TOWARD the curb. Uphill without curb: turn wheels TOWARD the road edge."
    },
    {
        question: "Can I park in a disabled space if I'm just running in quickly?",
        answer: "No. Parking in a disabled space without proper authorization (placard or license plate) is illegal regardless of how long you'll be there, and carries fines of $250-$500+."
    }
]

const NAV_ITEMS = [
    { id: 'curb-colors', label: 'Curb Colors' },
    { id: 'distance-rules', label: 'Distance Rules' },
    { id: 'hill-parking', label: 'Hill Parking' },
    { id: 'practice-test', label: 'Practice Test' },
]

export function ParkingRulesPageContent() {
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
                            <span className="text-gray-900 font-medium">Parking Rules</span>
                        </nav>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="relative pt-16 pb-20 md:pt-20 md:pb-24 overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white">
                    <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -mr-32 -mt-32"></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6 md:mb-8">
                                <MapPin className="w-4 h-4 text-purple-400" />
                                <span className="text-sm font-medium text-purple-100">Test Essential</span>
                            </div>

                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 tracking-tight leading-tight">
                                Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-pink-200">Parking Rules</span> &amp; Regulations
                            </h1>

                            <p className="text-lg md:text-xl text-purple-100/90 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
                                Curb colors, distance requirements, and hill parking are test staples. Know the rules that make up about 5% of your real estate exam.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
                                <Button
                                    onClick={scrollToTest}
                                    size="lg"
                                    className="bg-white text-purple-900 hover:bg-purple-50 text-base md:text-lg font-bold px-6 md:px-8 py-5 md:py-6 rounded-xl md:rounded-2xl shadow-xl shadow-purple-900/20 border-0"
                                >
                                    Start Practice Test
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why this matters */}
                <section className="py-12 bg-white border-b border-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="bg-purple-50 border border-purple-100 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
                                <div className="bg-purple-100 p-3 rounded-xl shrink-0">
                                    <BookOpen className="w-8 h-8 text-[#007aff]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Why Parking Rules Matter on the Test</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Parking questions appear on every Real Estate Exam because improper parking causes accidents, blocks emergency access, and creates traffic hazards. Expect questions on:
                                    </p>
                                    <ul className="grid sm:grid-cols-2 gap-3 mt-4">
                                        <li className="flex items-center gap-2 text-sm font-medium text-gray-800">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                            Curb color meanings
                                        </li>
                                        <li className="flex items-center gap-2 text-sm font-medium text-gray-800">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                            Distance requirements
                                        </li>
                                        <li className="flex items-center gap-2 text-sm font-medium text-gray-800">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                            Hill parking techniques
                                        </li>
                                        <li className="flex items-center gap-2 text-sm font-medium text-gray-800">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                            Illegal parking zones
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
                                        ? 'bg-purple-900 text-white'
                                        : 'text-gray-600 hover:bg-gray-100'
                                        }`}
                                >
                                    {label}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>

                {/* ========== SECTION 1: Curb Colors ========== */}
                <section id="curb-colors" className="py-16 md:py-20 bg-gray-50 scroll-mt-32">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">The Language of Curb Colors</h2>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                                Curb colors are a universal language telling you where you can—and cannot—park. Most parking tickets come from misreading these simple color codes.
                            </p>

                            <div className="prose prose-lg text-gray-700 max-w-none">
                                <h3 className="font-bold text-gray-900 text-xl flex items-center gap-2 border-l-4 border-red-500 pl-4 mt-8 mb-4">
                                    Red Curb: No Parking
                                </h3>
                                <p>
                                    <strong>Red means stop ONLY if legally required</strong> (e.g., a stop sign), but otherwise: <strong>No stopping, standing, or parking.</strong> Red curbs are often used for fire lanes and emergency vehicle access. Do not park here, even for a "quick" errand.
                                </p>

                                <h3 className="font-bold text-gray-900 text-xl flex items-center gap-2 border-l-4 border-blue-500 pl-4 mt-8 mb-4">
                                    Blue Curb: Disabled Parking
                                </h3>
                                <p>
                                    This space is reserved <strong>exclusively</strong> for vehicles displaying a valid disabled person&apos;s placard or license plate. The fine for parking here without authorization can range from $250 to over $1,000. It is illegal to borrow someone else&apos;s placard.
                                </p>

                                <h3 className="font-bold text-gray-900 text-xl flex items-center gap-2 border-l-4 border-gray-400 pl-4 mt-8 mb-4">
                                    White Curb: Passenger Loading
                                </h3>
                                <p>
                                    You may stop only long enough to <strong>pick up or drop off passengers</strong> or mail. You usually cannot leave the vehicle, and the time limit is often very short (5 minutes).
                                </p>

                                <h3 className="font-bold text-gray-900 text-xl flex items-center gap-2 border-l-4 border-yellow-400 pl-4 mt-8 mb-4">
                                    Yellow Curb: Commercial Loading
                                </h3>
                                <p>
                                    Stop no longer than the time posted to load or unload passengers or freight. Drivers of non-commercial vehicles are usually required to stay with the vehicle.
                                </p>

                                <h3 className="font-bold text-gray-900 text-xl flex items-center gap-2 border-l-4 border-green-500 pl-4 mt-8 mb-4">
                                    Green Curb: Limited Time
                                </h3>
                                <p>
                                    Park for a <strong>limited time</strong>. Look for a painted time limit on the curb or a nearby sign (e.g., 15, 30, or 60 minutes).
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========== SECTION 2: Distance Rules ========== */}
                <section id="distance-rules" className="py-16 md:py-20 bg-white scroll-mt-32">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Critical Distance Requirements</h2>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                                Parking too close to intersections, hydrants, or driveways isn&apos;t just illegal—it&apos;s dangerous. It blocks visibility for other drivers and access for emergency responders.
                            </p>

                            <div className="prose prose-lg text-gray-700 max-w-none">
                                <h3 className="font-bold text-gray-900 text-xl border-l-4 border-gray-600 pl-4 mt-8 mb-4">Minimum Distances</h3>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li><strong>Fire Hydrant:</strong> Keep at least <strong>15 feet</strong> away. This gives firefighters room to connect hoses.</li>
                                    <li><strong>Intersection/Crosswalk:</strong> Keep at least <strong>20 feet</strong> away from a crosswalk at an intersection to allow visibility.</li>
                                    <li><strong>Railroad Crossing:</strong> Never park within <strong>50 feet</strong> of the nearest rail.</li>
                                </ul>

                                <h3 className="font-bold text-gray-900 text-xl border-l-4 border-red-600 pl-4 mt-8 mb-4">Where You May Never Park</h3>
                                <p>It is illegal to park your car in any of the following places:</p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>In front of a private or public driveway (even your own).</li>
                                    <li>On a sidewalk or in a crosswalk.</li>
                                    <li>Within 3 feet of a sidewalk ramp for disabled persons.</li>
                                    <li>In a tunnel or on a bridge (unless signs explicitly permit it).</li>
                                    <li><strong>Double Parking:</strong> Parking on the street side of another parked vehicle.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========== SECTION 3: Hill Parking ========== */}
                <section id="hill-parking" className="py-16 md:py-20 bg-gray-50 scroll-mt-32">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Hill Parking: Which Way to Turn</h2>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                                This is one of the most commonly missed test questions. The logic is simple: your car should roll into something that stops it (the curb), not into traffic.
                            </p>

                            <div className="prose prose-lg text-gray-700 max-w-none">
                                <h3 className="font-bold text-gray-900 text-xl border-l-4 border-purple-600 pl-4 mt-8 mb-4">Parking Downhill</h3>
                                <p>
                                    Turn your front wheels <strong>INTO the curb</strong> (right). If your brakes fail, the car will roll off the curb and stop, rather than rolling into the street.
                                </p>

                                <h3 className="font-bold text-gray-900 text-xl border-l-4 border-indigo-600 pl-4 mt-8 mb-4">Parking Uphill</h3>
                                <p>
                                    Turn your front wheels <strong>AWAY from the curb</strong> (left) and let your vehicle roll back a few inches. The back of the front wheel should gently touch the curb. If the brakes fail, the car will catch on the curb.
                                </p>

                                <h3 className="font-bold text-gray-900 text-xl border-l-4 border-pink-600 pl-4 mt-8 mb-4">No Curb?</h3>
                                <p>
                                    If there is no curb (uphill or downhill), turn your wheels <strong>TOWARD the shoulder</strong> of the road. This ensures that if the car moves, it rolls away from the center of the road.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========== Practice Test Section ========== */}
                <section id="practice-test" className="py-16 md:py-24 bg-white relative scroll-mt-32">
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
                            <span className="text-[#007aff] font-bold tracking-wider uppercase text-sm mb-3 block">Interactive Quiz</span>
                            <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-4 md:mb-6">
                                Test Your Knowledge
                            </h2>
                            <p className="text-lg md:text-xl text-gray-600">
                                10 questions covering curb colors, distances, and hill parking. Accounts for ~5% of the test.
                            </p>
                        </div>

                        <PracticeTest questions={PARKING_RULES_QUESTIONS} />

                        {/* Credibility Statement */}
                        <div className="mt-12 max-w-3xl mx-auto text-center">
                            <p className="text-sm text-gray-500 leading-relaxed">
                                Questions are created and maintained by the Real Estate Question Bank content team following a rigorous editorial process.
                                Content is updated regularly to reflect the latest state Real Estate handbooks and traffic laws.
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
                <RelatedConcepts currentConceptId="parking-rules" />

                {/* CTA Section */}
                <section className="py-16 md:py-24 bg-gray-900 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#007aff]/10"></div>
                    <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
                        <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">Ready for Your Full State Test?</h2>
                        <p className="text-gray-400 text-base md:text-lg mb-8 md:mb-10">
                            Parking is just one section. Get state-specific questions and premium study guides to pass on your first try.
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
