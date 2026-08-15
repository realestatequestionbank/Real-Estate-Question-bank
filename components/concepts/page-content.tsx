'use client'

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { useAuth } from '@/contexts/auth-context'
import { Button } from '@/components/ui/button'
import {
    ArrowRight,
    ChevronRight,
    CheckCircle2,
    HelpCircle,
    GraduationCap,
    Target,
    Sparkles
} from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { CoverageChart } from './coverage-chart'
import { STATES, type StateKey } from '@/lib/constants'
import { getStateDedicatedPageUrl } from '@/lib/utils/state-routes'

// Concept card data
import { CONCEPTS } from './data'

// FAQ Data for display
const FAQ_DATA = [
    {
        question: "What topics are covered on the Real Estate Exam?",
        answer: "The Real Estate Exam covers road signs, traffic laws, right-of-way rules, speed limits and fines, safe driving practices, and state-specific regulations. Most questions focus on road signs (about 30%), traffic rules (25%), and right-of-way situations (20%)."
    },
    {
        question: "How many questions are typically on a Real Estate Exam?",
        answer: "Most states have between 25-50 questions on the real estate exam. You typically need to score 80-85% to pass, depending on your state's requirements."
    },
    {
        question: "What is the most missed topic on the Real Estate Exam?",
        answer: "Right-of-way rules and road signs are the most commonly missed topics. Many test-takers struggle with 4-way stop procedures, yield situations, and less common warning signs."
    },
    {
        question: "How should I study for the Real Estate Exam?",
        answer: "Focus on your state's licensing guidelines, practice with topic-specific quizzes, and pay special attention to contracts, agency relationships, and property math. Our free practice tests cover all essential concepts."
    }
]

export function ConceptsPageContent() {
    const { user, userData, isPremium, premiumStatus, signOut } = useAuth()
    const router = useRouter()

    const handleLogin = () => router.push('/#login')
    const handleSignup = () => router.push('/#signup')
    const handleLogout = async () => await signOut()
    const handleDashboard = () => router.push('/dashboard')

    return (
        <div className="min-h-screen bg-white font-sans">
            <Navigation
                user={user}
                userData={userData}
                isPremium={isPremium}
                premiumStatus={premiumStatus}
                onLogin={handleLogin}
                onSignup={handleSignup}
                onLogout={handleLogout}
                onDashboard={handleDashboard}
                showGetPremiumLink={true}
            />

            <main>
                {/* Breadcrumbs */}
                <div className="bg-gray-50 border-b border-gray-100">
                    <div className="container mx-auto px-4 py-3">
                        <nav className="flex items-center gap-2 text-sm text-gray-500">
                            <Link href="/" className="hover:text-[#007aff] transition-colors">Home</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span className="text-gray-900 font-medium">Driving Test Concepts</span>
                        </nav>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="relative pt-16 pb-12 md:pt-20 md:pb-16 overflow-hidden bg-[#007aff] text-white">
                    <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -ml-20 -mb-20"></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6 md:mb-8">
                                <GraduationCap className="w-4 h-4 text-cyan-400" />
                                <span className="text-sm font-medium text-blue-100">Study Smarter, Pass Faster</span>
                            </div>

                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 tracking-tight leading-tight text-white">
                                Driving Test Concepts
                            </h1>

                            <p className="text-lg md:text-xl text-white/90 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
                                Master the <strong>six essential topics</strong> that make up over 95% of your Real Estate Exam. Each guide includes a free practice quiz.
                            </p>

                            {/* Quick Stats */}
                            <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-8 md:mb-0">
                                <div className="text-center">
                                    <div className="text-2xl md:text-3xl font-bold text-white">6</div>
                                    <div className="text-sm text-white/80">Core Topics</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl md:text-3xl font-bold text-white">100+</div>
                                    <div className="text-sm text-white/80">Practice Questions</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl md:text-3xl font-bold text-white">95%</div>
                                    <div className="text-sm text-white/80">Test Coverage</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Why These Concepts Matter */}
                <section className="py-12 bg-white border-b border-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 md:p-8">
                                <div className="grid md:grid-cols-5 gap-8 items-center">
                                    <div className="md:col-span-3">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="bg-blue-100 p-2 rounded-lg">
                                                <Target className="w-6 h-6 text-[#007aff]" />
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900">Why Focus on These Six Topics?</h3>
                                        </div>
                                        <p className="text-gray-700 leading-relaxed mb-6">
                                            Data from thousands of live practice tests confirms: these <strong>six core concepts</strong> make up the vast majority of your exam. Mastering them gives you a <strong>95% advantage</strong> before you even walk into the Real Estate.
                                        </p>
                                        <ul className="grid sm:grid-cols-2 gap-3">
                                            {[
                                                'Free practice tests included',
                                                'Instant feedback on answers',
                                                'Visual guides and examples',
                                                'Real Estate Exam tips highlighted'
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-center gap-2 text-sm font-medium text-gray-800">
                                                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="md:col-span-2 flex flex-col items-center justify-center bg-white rounded-xl p-4 shadow-sm border border-blue-100 h-full min-h-[250px]">
                                        <div className="w-full h-[200px] relative">
                                            <CoverageChart />
                                        </div>
                                        <div className="flex items-center justify-center gap-4 mt-2 text-xs font-medium text-gray-500">
                                            <div className="flex items-center gap-1.5">
                                                <span className="w-3 h-3 rounded-full bg-[#007aff]"></span>
                                                Core Topics
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <span className="w-3 h-3 rounded-full bg-slate-200"></span>
                                                Misc
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Concept Cards */}
                <section className="py-16 md:py-24 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
                            <span className="text-[#007aff] font-bold tracking-wider uppercase text-sm mb-3 block">Essential Study Topics</span>
                            <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-4">
                                Choose a Concept to Study
                            </h2>
                            <p className="text-lg text-gray-600">
                                Each topic includes comprehensive guides, visual aids, and a free practice test.
                            </p>
                        </div>

                        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {CONCEPTS.map((concept, index) => {
                                const Icon = concept.icon
                                return (
                                    <Link
                                        key={concept.id}
                                        href={concept.href}
                                        target="_blank"
                                        className="group block h-full"
                                    >
                                        <div className={`
                                            relative h-full bg-white rounded-xl border border-gray-100 overflow-hidden
                                            transition-all duration-300 ease-out
                                            hover:-translate-y-1 hover:border-gray-200
                                            shadow-lg ${concept.shadowColor} ${concept.hoverShadowColor} hover:shadow-2xl
                                        `}>
                                            {/* Top Decoration */}
                                            <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${concept.gradient}`} />

                                            <div className="p-6 pt-8 flex flex-col h-full">
                                                <div className="flex gap-4">
                                                    {/* Concept Image (Left) */}
                                                    <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-2xl bg-gray-50 border border-gray-100 overflow-hidden group-hover:shadow-sm transition-all">
                                                        <img
                                                            src={concept.image}
                                                            alt={concept.title}
                                                            className="w-full h-full object-contain p-1 group-hover:scale-110 transition-transform duration-500"
                                                        />
                                                    </div>

                                                    {/* Title & Description (Right) */}
                                                    <div className="flex-1 min-w-0">
                                                        <div className="flex flex-col mb-5">
                                                            <div className="flex justify-between items-start gap-2">
                                                                <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-tight transition-colors mb-3 flex items-center gap-2">
                                                                    <span className={`flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-r ${concept.gradient} text-white text-xs font-bold shadow-sm`}>
                                                                        {index + 1}
                                                                    </span>
                                                                    {concept.title}
                                                                </h3>
                                                            </div>

                                                            <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                                                                {concept.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Topics Tags + CTA (Values aligned to bottom) */}
                                                <div className="mt-auto pt-4 relative">
                                                    <div className="flex flex-wrap gap-2 mb-4">
                                                        {concept.topics.slice(0, 3).map((topic, idx) => (
                                                            <span
                                                                key={idx}
                                                                className="text-xs font-medium text-gray-500 bg-gray-50 px-2 py-1 rounded-md border border-gray-100/50"
                                                            >
                                                                {topic}
                                                            </span>
                                                        ))}
                                                    </div>

                                                    <div className="flex items-center text-sm font-bold text-gray-900 border-t border-gray-50 pt-4">
                                                        <span className="group-hover:mr-2 transition-all">Start Practice</span>
                                                        <ArrowRight className={`w-4 h-4 ml-2 text-gray-400 group-hover:text-[#007aff] transition-colors`} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* Study Tips Section */}
                <section className="py-16 md:py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-10 md:mb-12">
                                <div className="inline-flex items-center gap-2 text-[#007aff] font-bold mb-3">
                                    <Sparkles className="w-5 h-5" />
                                    <span className="uppercase tracking-wider text-sm">Pro Tips</span>
                                </div>
                                <h2 className="text-2xl md:text-4xl font-black text-gray-900">
                                    How to Study These Concepts
                                </h2>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                                    <div className="bg-[#007aff] text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg mb-4">1</div>
                                    <h4 className="font-bold text-gray-900 mb-2">Read the Guide</h4>
                                    <p className="text-gray-600 text-sm">Start by reading through each concept guide to understand the rules and regulations.</p>
                                </div>
                                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                                    <div className="bg-[#007aff] text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg mb-4">2</div>
                                    <h4 className="font-bold text-gray-900 mb-2">Take the Quiz</h4>
                                    <p className="text-gray-600 text-sm">Test your knowledge with the free practice quiz at the end of each guide.</p>
                                </div>
                                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                                    <div className="bg-[#007aff] text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg mb-4">3</div>
                                    <h4 className="font-bold text-gray-900 mb-2">Review Mistakes</h4>
                                    <p className="text-gray-600 text-sm">Focus on questions you got wrong and re-read the relevant sections.</p>
                                </div>
                            </div>
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

                {/* CTA Section */}
                {/* State Real Estate Practice-Test Hubs */}
                <section className="border-t border-gray-100 pb-24 pt-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-gray-900 text-center">State Real Estate Practice-Test Hubs</h2>

                            <div className="grid grid-cols-3 md:grid-cols-5 gap-y-3 gap-x-8 text-left">
                                {Object.entries(STATES)
                                    .sort((a, b) => a[1].name.localeCompare(b[1].name))
                                    .map(([key, state]) => (
                                        <Link
                                            key={key}
                                            href={getStateDedicatedPageUrl(key as StateKey)}
                                            className="text-[#007aff] text-base font-medium relative block w-fit after:block after:content-[''] after:absolute after:h-[2px] after:bg-[#007aff] after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-left"
                                        >
                                            {state.name}
                                        </Link>
                                    ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
