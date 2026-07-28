'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { useAuth } from '@/contexts/auth-context'
import { RoadSignPracticeInterface } from '@/components/practice/road-sign-practice-interface'
import { ROAD_SIGN_QUESTIONS } from '@/lib/road-sign-questions'
import { Button } from '@/components/ui/button'
import { ArrowRight, BookOpen, AlertTriangle, ShieldCheck, Crown, ChevronRight, HelpCircle, AlertOctagon, AlertCircle, Info } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { StateHubsSection } from '@/components/state-hubs-section'
import { RelatedConcepts } from '@/components/concepts/related-concepts'


// FAQ Data
const FAQ_DATA = [
    {
        question: "How many road sign questions are on the real estate exam?",
        answer: "Most states dedicate about 15-20% of the exam to road signs. You can expect to see at least 8-10 specific sign identification questions."
    },
    {
        question: "What is the difference between yellow and orange signs?",
        answer: "Yellow signs are general warnings (curves, pedestrians, merger). Orange signs are strictly for construction and maintenance zones."
    },
    {
        question: "Are sign shapes important to memorize?",
        answer: "Yes! A sign's shape often tells you its meaning before you can read the text. For example, an octagon is ALWAYS a stop sign, and a pennant (sideways triangle) is ALWAYS a 'No Passing Zone'."
    },
    {
        question: "What does a white rectangular sign mean?",
        answer: "White rectangular signs are 'Regulatory' signs. They state the law (Speed Limit, No Turn on Red, Keep Right) and must be obeyed."
    }
]

export function RoadSignPageContent() {
    const { user, userData, isPremium, signOut } = useAuth()
    const router = useRouter()

    const handleLogin = () => router.push('/#login')
    const handleSignup = () => router.push('/#signup')
    const handleLogout = async () => await signOut()
    const handleDashboard = () => router.push('/dashboard')

    const scrollToTest = () => {
        document.getElementById('practice-test')?.scrollIntoView({ behavior: 'smooth' })
    }

    // Dummy handlers for the practice interface since we are embedding it
    const handleTestComplete = () => {
        // Optional: Scroll to top or show a specialized completion modal if not handled by the component
    }

    // For specific questions about the interface props, checking source logic:
    // onExit typically resets or hides the test in the old page. Here we might just define it as a reset or scroll up.
    // However, the component expects onExit. Let's just scroll to top of section.
    const handleTestExit = () => {
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
                            <span className="text-gray-900 font-medium">Road Signs Test</span>
                        </nav>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="relative pt-16 pb-20 md:pt-20 md:pb-24 overflow-hidden bg-gradient-to-br from-amber-900 via-amber-800 to-yellow-900 text-white">
                    <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl -mr-32 -mt-32"></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6 md:mb-8">
                                <AlertOctagon className="w-4 h-4 text-yellow-400" />
                                <span className="text-sm font-medium text-amber-100">The "Language of the Road"</span>
                            </div>

                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 tracking-tight leading-tight">
                                Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-200">Road Signs</span> & Meanings
                            </h1>

                            <p className="text-lg md:text-xl text-amber-100/90 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
                                Can you identify a "School Zone" vs "School Crossing"? Shape and color tell a story. Master the signs to pass your real estate exam.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
                                <Button
                                    onClick={scrollToTest}
                                    size="lg"
                                    className="bg-white text-amber-900 hover:bg-amber-50 text-base md:text-lg font-bold px-6 md:px-8 py-5 md:py-6 rounded-xl md:rounded-2xl shadow-xl shadow-amber-900/20 border-0"
                                >
                                    Start Practice Test
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Educational Content */}
                <section className="py-16 md:py-20 bg-gray-50">
                    <div className="container mx-auto px-4">

                        {/* Shapes & Colors - The Basics */}
                        <div className="max-w-6xl mx-auto mb-16 md:mb-24">
                            <div className="text-center mb-10">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">The Language of Shapes</h2>
                                <p className="text-gray-600 max-w-2xl mx-auto">
                                    Even if you can't read the text (like in fog or snow), the shape of a sign tells you what to do. Memorize these critical shapes.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {/* Octagon */}
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-red-200 transition-colors">
                                    <div className="w-16 h-16 mx-auto mb-4 relative">
                                        <div className="absolute inset-0 bg-red-600 flex items-center justify-center text-white font-bold text-xs" style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}>STOP</div>
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-center mb-2">Octagon</h3>
                                    <p className="text-sm text-gray-600 text-center"><strong>STOP.</strong> Come to a complete stop at the limit line. This is the only 8-sided sign.</p>
                                </div>

                                {/* Diamond */}
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-yellow-200 transition-colors">
                                    <div className="w-16 h-16 mx-auto mb-4 bg-yellow-400 rotate-45 flex items-center justify-center">
                                        <div className="-rotate-45 text-amber-900 font-bold text-2xl">!</div>
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-center mb-2">Diamond</h3>
                                    <p className="text-sm text-gray-600 text-center"><strong>WARNING.</strong> Alerts you to special road hazards like curves, merging traffic, or deer.</p>
                                </div>

                                {/* Triangle */}
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-red-200 transition-colors">
                                    <div className="w-16 h-16 mx-auto mb-4 relative flex justify-center items-end">
                                        {/* Inverted Triangle CSS trick */}
                                        <div className="w-0 h-0 border-l-[32px] border-l-transparent border-r-[32px] border-r-transparent border-t-[55px] border-t-red-600"></div>
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-center mb-2">Inverted Triangle</h3>
                                    <p className="text-sm text-gray-600 text-center"><strong>YIELD.</strong> Slow down and give the right-of-way to other traffic/pedestrians.</p>
                                </div>

                                {/* Pennant */}
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-yellow-200 transition-colors">
                                    <div className="w-20 h-14 mx-auto mb-4 relative flex items-center">
                                        {/* Pennant CSS trick */}
                                        <div className="w-0 h-0 border-t-[28px] border-t-transparent border-b-[28px] border-b-transparent border-r-[60px] border-r-yellow-400"></div>
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-center mb-2">Pennant</h3>
                                    <p className="text-sm text-gray-600 text-center"><strong>NO PASSING.</strong> Always found on the left side of the road.</p>
                                </div>
                            </div>
                        </div>

                        {/* Regulatory vs Warning - Detailed Section */}
                        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                            <div className="space-y-6 md:space-y-8">
                                <div>
                                    <div className="inline-flex items-center gap-2 text-red-600 font-bold uppercase tracking-wider text-sm mb-2">
                                        <ShieldCheck className="w-4 h-4" />
                                        Regulatory Signs
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">White Squares = The Law</h2>
                                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                        White signs with black or red letters are <strong>Rules</strong>. They tell you about speed limits, turning restrictions, and lane use. You <strong>MUST</strong> obey them or risk a ticket.
                                    </p>
                                </div>

                                <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-gray-100">
                                    <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                                        <AlertTriangle className="w-5 h-5 text-gray-500" />
                                        Common Examples
                                    </h3>
                                    <ul className="space-y-2 text-gray-600 text-sm md:text-base">
                                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-black rounded-full"></div> Speed Limit 65</li>
                                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-black rounded-full"></div> No U-Turn</li>
                                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-black rounded-full"></div> Keep Right</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="relative group flex justify-center bg-gray-100 rounded-3xl p-8">
                                <Image
                                    src="/road-sign-images/r4-8.png"
                                    alt="Keep Left Regulatory Sign"
                                    width={300}
                                    height={300}
                                    className="object-contain drop-shadow-xl"
                                />
                                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg border border-gray-100 max-w-xs">
                                    <p className="text-sm font-bold text-gray-800">Keep Left</p>
                                    <p className="text-xs text-gray-500">Pass the obstacle on the left side.</p>
                                </div>
                            </div>
                        </div>

                        {/* Warning Signs Section */}
                        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-16 md:mt-24">
                            <div className="relative group order-2 lg:order-1 flex justify-center bg-yellow-50 rounded-3xl p-8 border border-yellow-100">
                                <Image
                                    src="/road-sign-images/w3-3.png"
                                    alt="Traffic Signal Ahead Warning Sign"
                                    width={300}
                                    height={300}
                                    className="object-contain drop-shadow-xl"
                                />
                                <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg border border-gray-100 max-w-xs">
                                    <p className="text-sm font-bold text-gray-800">Signal Ahead</p>
                                    <p className="text-xs text-gray-500">Be prepared to stop if light is red.</p>
                                </div>
                            </div>

                            <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
                                <div>
                                    <div className="inline-flex items-center gap-2 text-amber-600 font-bold uppercase tracking-wider text-sm mb-2">
                                        <AlertCircle className="w-4 h-4" />
                                        Warning Signs
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">Yellow Diamonds = Hazards</h2>
                                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                        Yellow signs warn of conditions ahead that may require you to slow down or be extra alert. They are not direct laws, but ignoring them is dangerous/negligent.
                                    </p>
                                </div>

                                <div className="bg-amber-50 p-5 md:p-6 rounded-2xl border border-amber-100">
                                    <div className="flex items-center gap-2 mb-2 font-bold text-amber-900">
                                        <AlertTriangle className="w-5 h-5" />
                                        Exam Trap: Merge vs Lane Ends
                                    </div>
                                    <p className="text-amber-900/80 text-sm md:text-base">
                                        Many students confuse "Merge" and "Lane Ends".
                                        <br />
                                        <strong>Merge:</strong> Traffic enters from the side.
                                        <br />
                                        <strong>Lane Ends:</strong> Your lane is disappearing; you MUST merge over.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Practice Test Section */}
                <section id="practice-test" className="py-16 md:py-24 bg-white relative scroll-mt-20">
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
                            <span className="text-[#007aff] font-bold tracking-wider uppercase text-sm mb-3 block">Interactive Quiz</span>
                            <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-4 md:mb-6">
                                Test Your Knowledge
                            </h2>
                            <p className="text-lg md:text-xl text-gray-600">
                                Can you score 100% on these 10 commonly missed sign questions?
                            </p>
                        </div>

                        <div className="max-w-3xl mx-auto">
                            <RoadSignPracticeInterface
                                questions={ROAD_SIGN_QUESTIONS}
                                onComplete={handleTestComplete}
                                onExit={handleTestExit}
                            />
                        </div>

                        {/* Credibility Statement */}
                        <div className="mt-12 max-w-3xl mx-auto text-center">
                            <p className="text-sm text-gray-500 leading-relaxed">
                                Questions are created and maintained by the Real Estate Question Bank content team.
                                All sign images are compliant with the Manual on Uniform Traffic Control Devices (MUTCD).
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
                <RelatedConcepts currentConceptId="road-signs" />

                {/* CTA Section */}
                <section className="py-16 md:py-24 bg-gray-900 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#007aff]/10"></div>
                    <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
                        <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">Ready for the Real Test?</h2>
                        <p className="text-gray-400 text-base md:text-lg mb-8 md:mb-10">
                            Road signs are easy points. Don't lose them. Get our premium state-specific study packs to guarantee you pass.
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
