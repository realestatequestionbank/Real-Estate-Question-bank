'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { useAuth } from '@/contexts/auth-context'
import { PracticeTest } from '@/components/right-of-way/practice-test'
import { TRAFFIC_SIGNALS_QUESTIONS } from '@/components/traffic-signals/questions'
import { Button } from '@/components/ui/button'
import { ArrowRight, BookOpen, AlertTriangle, Crown, ChevronRight, HelpCircle, CheckCircle2, AlertCircle, TrafficCone } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { StateHubsSection } from '@/components/state-hubs-section'
import { RelatedConcepts } from '@/components/concepts/related-concepts'


// FAQ Data
const FAQ_DATA = [
    {
        question: "What's the difference between a flashing red and flashing yellow light?",
        answer: "Flashing red = STOP (treat like a stop sign). Flashing yellow = CAUTION (slow down and proceed carefully). This is commonly tested."
    },
    {
        question: "Can I change lanes across a solid white line?",
        answer: "Technically yes, but it's discouraged. A solid white line indicates lane changes should be avoided. A double white line prohibits lane changes."
    },
    {
        question: "What does a green arrow mean when the main light is red?",
        answer: "You may proceed ONLY in the direction of the arrow. The green arrow overrides the red light for that specific movement."
    },
    {
        question: "What's a two-way left-turn lane?",
        answer: "A center lane marked with solid yellow on the outside and broken yellow on the inside. Vehicles from both directions can use it to prepare for left turns."
    }
]

export function TrafficSignalsPageContent() {
    const { user, userData, isPremium, signOut } = useAuth()
    const router = useRouter()

    const handleLogin = () => router.push('/#login')
    const handleSignup = () => router.push('/#signup')
    const handleLogout = async () => await signOut()
    const handleDashboard = () => router.push('/dashboard')

    const scrollToTest = () => {
        document.getElementById('practice-test')?.scrollIntoView({ behavior: 'smooth' })
    }

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
                            <span className="text-gray-900 font-medium">Traffic Signals & Road Markings</span>
                        </nav>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="relative pt-16 pb-20 md:pt-20 md:pb-24 overflow-hidden bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 text-white">
                    <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/20 rounded-full blur-3xl -mr-32 -mt-32"></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6 md:mb-8">
                                <TrafficCone className="w-4 h-4 text-green-400" />
                                <span className="text-sm font-medium text-green-100">Test Essential</span>
                            </div>

                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 tracking-tight leading-tight">
                                Traffic Signals & <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-200 to-teal-200">Road Markings</span>
                            </h1>

                            <p className="text-lg md:text-xl text-green-100/90 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
                                Flashing lights, lane markings, and arrow signals control traffic flow. Know what they mean to pass your test and stay safe.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
                                <Button
                                    onClick={scrollToTest}
                                    size="lg"
                                    className="bg-white text-green-900 hover:bg-green-50 text-base md:text-lg font-bold px-6 md:px-8 py-5 md:py-6 rounded-xl md:rounded-2xl shadow-xl shadow-green-900/20 border-0"
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
                            <div className="bg-green-50 border border-green-100 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
                                <div className="bg-green-100 p-3 rounded-xl shrink-0">
                                    <BookOpen className="w-8 h-8 text-[#007aff]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Why Traffic Control Matters on the Test</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Understanding traffic signals and road markings is fundamental to safe driving. Expect multiple questions on what different lights and lines mean.
                                    </p>
                                    <ul className="grid sm:grid-cols-2 gap-3 mt-4">
                                        <li className="flex items-center gap-2 text-sm font-medium text-gray-800">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                            Flashing signals (red vs yellow)
                                        </li>
                                        <li className="flex items-center gap-2 text-sm font-medium text-gray-800">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                            Lane line meanings
                                        </li>
                                        <li className="flex items-center gap-2 text-sm font-medium text-gray-800">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                            Arrow signals
                                        </li>
                                        <li className="flex items-center gap-2 text-sm font-medium text-gray-800">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                            Center turn lanes
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Educational Content */}
                <section className="py-16 md:py-20 bg-gray-50">
                    <div className="container mx-auto px-4">

                        {/* Traffic Lights */}
                        <div className="max-w-6xl mx-auto mb-16 md:mb-24">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Understanding Traffic Signal Colors</h2>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                                Traffic lights communicate instructions to drivers. Misunderstanding them causes accidents—and test failures.
                            </p>

                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-l-red-500">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-12 h-12 bg-red-500 rounded-full"></div>
                                        <h3 className="font-bold text-gray-900">Red Light</h3>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-2"><strong>STOP.</strong> Do not enter the intersection.</p>
                                    <p className="text-xs text-gray-500">Right turn on red is allowed in most states UNLESS posted.</p>
                                </div>

                                <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-l-yellow-500">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-12 h-12 bg-yellow-400 rounded-full"></div>
                                        <h3 className="font-bold text-gray-900">Yellow Light</h3>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-2"><strong>CAUTION.</strong> Light is about to turn red.</p>
                                    <p className="text-xs text-gray-500">Prepare to stop if safe. Do NOT speed up to "beat the light."</p>
                                </div>

                                <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-l-green-500">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-12 h-12 bg-green-500 rounded-full"></div>
                                        <h3 className="font-bold text-gray-900">Green Light</h3>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-2"><strong>GO.</strong> But yield to vehicles/pedestrians already in the intersection.</p>
                                    <p className="text-xs text-gray-500">Green doesn't mean go blindly—always check before proceeding.</p>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-4">Flashing Signals (Heavily Tested)</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-2xl border border-red-100">
                                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                                        <div className="w-6 h-6 bg-red-500 rounded-full animate-pulse"></div>
                                        Flashing Red
                                    </h4>
                                    <p className="text-gray-700 text-sm"><strong>Treat as a STOP sign.</strong> Come to a complete stop, then proceed when safe.</p>
                                </div>

                                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-2xl border border-yellow-100">
                                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                                        <div className="w-6 h-6 bg-yellow-400 rounded-full animate-pulse"></div>
                                        Flashing Yellow
                                    </h4>
                                    <p className="text-gray-700 text-sm"><strong>Proceed with CAUTION.</strong> Slow down and be alert, but no stop required.</p>
                                </div>
                            </div>

                            <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-100 mt-8">
                                <h3 className="font-bold text-yellow-900 mb-2 flex items-center gap-2">
                                    <AlertTriangle className="w-5 h-5 text-yellow-600" />
                                    Real Estate Test Tip
                                </h3>
                                <p className="text-yellow-900/80 text-sm md:text-base">
                                    The difference between flashing red (STOP) and flashing yellow (CAUTION) is one of the most commonly missed test questions. Memorize this!
                                </p>
                            </div>
                        </div>

                        {/* Arrow Signals */}
                        <div className="max-w-6xl mx-auto mb-16 md:mb-24">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Arrow Signals: What They Mean</h2>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                                Arrow signals control specific turning movements. They override the main signal for that direction.
                            </p>

                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                <div className="space-y-6">
                                    <div className="flex gap-6 items-start">
                                        <div className="bg-green-100 p-3 rounded-xl shrink-0">
                                            <div className="text-3xl">🟢→</div>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-1">Green Arrow</h4>
                                            <p className="text-gray-600 text-sm">Protected turn. You have the right-of-way in that direction. Proceed safely, even if the main light is red.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 items-start">
                                        <div className="bg-yellow-100 p-3 rounded-xl shrink-0">
                                            <div className="text-3xl">🟡→</div>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-1">Yellow Arrow</h4>
                                            <p className="text-gray-600 text-sm">Protected turn is ending. Finish your turn if you're in the intersection; otherwise prepare to stop.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 items-start">
                                        <div className="bg-red-100 p-3 rounded-xl shrink-0">
                                            <div className="text-3xl">🔴→</div>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-1">Red Arrow</h4>
                                            <p className="text-gray-600 text-sm">STOP. You may NOT turn in that direction. Wait for a green arrow before proceeding.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Road Markings */}
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Road Markings: Lines That Talk</h2>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                                Pavement markings communicate just as much as signals. Yellow = opposite directions, White = same direction.
                            </p>

                            <div className="space-y-6">
                                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                    <h3 className="font-bold text-gray-900 mb-3">Yellow Lines (Opposite Traffic)</h3>
                                    <div className="space-y-3">
                                        <div className="flex items-start gap-4">
                                            <div className="w-20 h-8 border-4 border-yellow-400 rounded shrink-0"></div>
                                            <div>
                                                <h4 className="font-bold text-sm text-gray-900">Broken Yellow</h4>
                                                <p className="text-xs text-gray-600">Passing allowed when safe (from either direction).</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="w-20 h-8 bg-yellow-400 rounded shrink-0"></div>
                                            <div>
                                                <h4 className="font-bold text-sm text-gray-900">Solid Yellow</h4>
                                                <p className="text-xs text-gray-600">No passing on your side. (If on other side, they can pass.)</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="w-20 h-8 bg-yellow-400 border-y-2 border-yellow-600 rounded shrink-0"></div>
                                            <div>
                                                <h4 className="font-bold text-sm text-gray-900">Double Solid Yellow</h4>
                                                <p className="text-xs text-gray-600"><strong>No passing either direction.</strong> Crossing prohibited except for left turns into driveways.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                    <h3 className="font-bold text-gray-900 mb-3">White Lines (Same Direction)</h3>
                                    <div className="space-y-3">
                                        <div className="flex items-start gap-4">
                                            <div className="w-20 h-8 border-4 border-gray-300 rounded shrink-0"></div>
                                            <div>
                                                <h4 className="font-bold text-sm text-gray-900">Broken White</h4>
                                                <p className="text-xs text-gray-600">Lanes going same direction. Lane changes permitted.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="w-20 h-8 bg-gray-200 rounded shrink-0"></div>
                                            <div>
                                                <h4 className="font-bold text-sm text-gray-900">Solid White</h4>
                                                <p className="text-xs text-gray-600">Lane changes discouraged but allowed. Marks areas where changing is risky.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-4 p-6 bg-amber-50 rounded-xl border border-amber-100">
                                    <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-amber-900 text-sm">Exam Alert: Two-Way Left-Turn Lane</h4>
                                        <p className="text-amber-900/80 text-sm mt-1">
                                            Center lane marked with <strong>solid yellow outside, broken yellow inside</strong>. Used by traffic from both directions to prepare for left turns. Cannot be used for passing or through driving.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Practice Test */}
                <section id="practice-test" className="py-16 md:py-24 bg-white relative scroll-mt-20">
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
                            <span className="text-[#007aff] font-bold tracking-wider uppercase text-sm mb-3 block">Interactive Quiz</span>
                            <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-4 md:mb-6">
                                Test Your Knowledge
                            </h2>
                            <p className="text-lg md:text-xl text-gray-600">
                                10 questions on signals, arrows, and road markings. Master the test essentials.
                            </p>
                        </div>

                        <PracticeTest questions={TRAFFIC_SIGNALS_QUESTIONS} />

                        {/* Credibility Statement */}
                        <div className="mt-12 max-w-3xl mx-auto text-center">
                            <p className="text-sm text-gray-500 leading-relaxed">
                                Questions align with the Manual on Uniform Traffic Control Devices (MUTCD) and state Real Estate handbooks.
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
                <RelatedConcepts currentConceptId="traffic-signals" />

                {/* CTA Section */}
                <section className="py-16 md:py-24 bg-gray-900 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#007aff]/10"></div>
                    <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
                        <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">Pass Your Test with Confidence</h2>
                        <p className="text-gray-400 text-base md:text-lg mb-8 md:mb-10">
                            Traffic signals are just one topic. Get comprehensive, state-specific preparation to guarantee your passing score.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                            <Link
                                href="/#states"
                                className=" inline-flex items-center justify-center px-6 md:px-8 py-4 bg-[#007aff] hover:bg-[#0056cc] text-white text-base md:text-lg font-bold rounded-xl transition-all shadow-lg hover:shadow-blue-500/25"
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
