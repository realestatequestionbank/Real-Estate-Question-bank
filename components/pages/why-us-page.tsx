'use client'


import { useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle, Clock, BookOpen, DollarSign, Zap, Star, Layout, XCircle, CheckCircle2 } from 'lucide-react'
import { StateSelectorModal } from '@/components/state-selector-modal'
import { AuthModal } from '@/components/auth/auth-modal'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/auth-context'
import { STATES, type StateKey } from '@/lib/constants'
import Link from 'next/link'
import { getStateDedicatedPageUrl } from '@/lib/utils/state-routes'

export function WhyUsPage() {
    const [stateModalOpen, setStateModalOpen] = useState(false)
    const [authModalOpen, setAuthModalOpen] = useState(false)
    const [authMode, setAuthMode] = useState<'login' | 'signup'>('login')
    const router = useRouter()
    const { user, userData, isPremium, signOut } = useAuth()

    const handleStartPractice = () => {
        setStateModalOpen(true)
    }

    const handleLogin = () => {
        setAuthMode('login')
        setAuthModalOpen(true)
    }

    const handleSignup = () => {
        setAuthMode('signup')
        setAuthModalOpen(true)
    }

    const handleLogout = async () => {
        await signOut()
    }

    const handleDashboard = () => {
        router.push('/dashboard')
    }

    const handleStateSelect = (state: StateKey) => {
        if (state === 'california') {
            router.push('/california-real-estate-practice-test')
        } else if (state === 'north-carolina') {
            router.push('/north-carolina-real-estate-practice-test')
        } else if (state === 'washington') {
            router.push('/washington-real-estate-practice-test')
        } else {
            router.push(`/state/${state}/free`)
        }
    }

    return (
        <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900 font-sans">
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
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-emerald-50 pointer-events-none" />
                    <div className="absolute top-20 left-20 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl animate-float pointer-events-none" />
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl animate-float-delayed pointer-events-none" />

                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-1.5 mb-8 shadow-sm animate-fade-in">
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                                ))}
                            </div>
                            <span className="text-sm font-medium text-gray-700">Trusted by students across all states</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 mb-8 tracking-tight leading-[1.1]">
                            The Smarter Way to <br className="hidden md:block" />
                            <span className="text-[#007aff]">Pass Your Real Estate Test.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                            State-specific practice questions designed to mirror your real exam — so you walk in prepared, confident, and ready to pass on the first try.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button
                                onClick={handleStartPractice}
                                size="lg"
                                className="bg-[#007aff] hover:bg-[#0069d9] text-white px-8 py-7 text-lg rounded-2xl shadow-xl shadow-blue-500/20 transition-all hover:scale-105 active:scale-95 min-w-[200px]"
                            >
                                Start Practicing Free
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </div>
                        <p className="text-sm text-gray-400 mt-4">No account required to get started.</p>
                    </div>
                </section>

                {/* Stats Strip */}
                <section className="border-y border-gray-100 bg-gray-50/60 py-10">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 max-w-4xl mx-auto text-center">
                            <div className="py-6 md:py-0 md:px-8">
                                <div className="text-3xl font-bold text-gray-900 mb-1">All States</div>
                                <div className="text-gray-500 text-sm">Comprehensive, state-specific content</div>
                            </div>
                            <div className="py-6 md:py-0 md:px-8">
                                <div className="text-3xl font-bold text-gray-900 mb-1">First-Try Ready</div>
                                <div className="text-gray-500 text-sm">Prep built to get you there on one visit</div>
                            </div>
                            <div className="py-6 md:py-0 md:px-8">
                                <div className="text-3xl font-bold text-gray-900 mb-1">$0 to Start</div>
                                <div className="text-gray-500 text-sm">Begin practicing immediately, for free</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Feature Sections */}
                <div className="container mx-auto px-4 space-y-24 md:space-y-32 py-24">

                    {/* Section 1 */}
                    <section className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 text-orange-600">
                                <Zap className="w-6 h-6" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Preparation Is What Separates Those Who Pass From Those Who Retake
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Most students assume the licensing exam will be easy — and end up failing. The difference between passing on your first visit and coming back a second time comes down to one thing: targeted preparation.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">Structured practice that builds your knowledge systematically, question by question.</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">Know exactly what to expect on test day — no surprises, no guessing.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="order-1 md:order-2 grid sm:grid-cols-2 gap-6">
                            {/* Card 1: Common Sense Route */}
                            <div className="bg-red-50/40 border border-red-100 rounded-3xl p-8 md:p-10 flex flex-col justify-between space-y-8">
                                <div className="space-y-4">
                                    <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center text-red-600">
                                        <XCircle className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold text-red-900 text-xl md:text-2xl">The "Common Sense" Route</h3>
                                    <p className="text-sm md:text-base text-red-700 leading-relaxed font-medium">
                                        Relying on raw memory and assuming general common sense will carry you through.
                                    </p>
                                </div>
                                <ul className="space-y-3 text-sm md:text-base text-red-800 font-medium">
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-500">✕</span>
                                        <span>Reading hundreds of pages of dry manuals.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-500">✕</span>
                                        <span>Confused by complex licensing regulations.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-500">✕</span>
                                        <span>High risk of failing on your first attempt.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Card 2: The Prepared Path */}
                            <div className="bg-[#007aff]/5 border border-[#007aff]/10 rounded-3xl p-8 md:p-10 flex flex-col justify-between space-y-8">
                                <div className="space-y-4">
                                    <div className="w-12 h-12 bg-[#007aff]/10 rounded-2xl flex items-center justify-center text-[#007aff]">
                                        <CheckCircle2 className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-xl md:text-2xl">The Prepared Path</h3>
                                    <p className="text-sm md:text-base text-gray-600 leading-relaxed font-medium">
                                        Systematic practice with real exam questions and instant feedback.
                                    </p>
                                </div>
                                <ul className="space-y-3 text-sm md:text-base text-gray-700 font-medium">
                                    <li className="flex items-start gap-2">
                                        <span className="text-emerald-500 font-bold">✓</span>
                                        <span>Bite-sized state-specific questions.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-emerald-500 font-bold">✓</span>
                                        <span>Interactive math calculation blueprints.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-emerald-500 font-bold">✓</span>
                                        <span>Exact-format simulated mock exams.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="bg-gradient-to-br from-blue-50/50 to-white p-10 md:p-12 rounded-3xl border border-blue-100 shadow-sm space-y-8">
                            {/* Without Prep */}
                            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-150 flex items-start gap-5 opacity-70">
                                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-500 flex-shrink-0">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div className="space-y-1.5">
                                    <h4 className="font-bold text-gray-800 text-base md:text-lg">Failed Attempt & Delays</h4>
                                    <p className="text-sm md:text-base text-gray-500 leading-relaxed font-medium">
                                        Wait hours at the test center only to fail by a few points, then pay re-testing fees and wait weeks for a re-take.
                                    </p>
                                </div>
                            </div>
                            
                            {/* With Prep */}
                            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[#007aff]/15 flex items-start gap-5 ring-2 ring-[#007aff]/5">
                                <div className="w-12 h-12 bg-[#007aff]/10 rounded-xl flex items-center justify-center text-[#007aff] flex-shrink-0">
                                    <Zap className="w-6 h-6 fill-[#007aff]/10" />
                                </div>
                                <div className="space-y-1.5">
                                    <h4 className="font-bold text-gray-900 text-base md:text-lg">Pass on the First Attempt</h4>
                                    <p className="text-sm md:text-base text-gray-600 leading-relaxed font-medium">
                                        Walk in with complete confidence, breeze through the exam questions, and walk out with your license.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                                <Clock className="w-6 h-6" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Save Time and Skip the Hassle
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Showing up to the Real Estate unprepared means long waits, failed tests, and rescheduled appointments. We help you get ready from home — so your visit is quick, smooth, and stress-free.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">Walk in confident. Walk out licensed.</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">Prepare at your own pace — from any device, any time.</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 text-purple-600">
                                <BookOpen className="w-6 h-6" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Practice, Not Boring Manuals
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Reading hundreds of pages of a state manual is slow and rarely effective. We distill what actually matters into focused, exam-ready practice — so you retain more and study less.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">Learn by doing with guided, interactive practice that mirrors the real exam.</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">No filler. No outdated content. 100% state-specific and exam-ready.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="order-1 md:order-2 bg-gradient-to-br from-purple-50 to-white p-8 rounded-3xl border border-purple-100 shadow-sm">
                            <div className="bg-white rounded-2xl p-6 shadow-sm border border-purple-50/50 flex flex-col items-center justify-center min-h-[200px] text-center">
                                <div className="bg-red-50 text-red-400 p-4 rounded-full mb-4 line-through">
                                    State Manual PDF
                                </div>
                                <ArrowRight className="w-6 h-6 text-gray-300 mb-4 rotate-90" />
                                <div className="bg-emerald-50 text-emerald-600 px-6 py-3 rounded-xl font-bold border border-emerald-100">
                                    Interactive Practice
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 4 */}
                    <section className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-3xl border border-emerald-100 shadow-sm">
                            <div className="bg-white rounded-2xl p-8 shadow-sm border border-emerald-50/50 text-center">
                                <div className="text-5xl font-bold text-gray-900 mb-2">$0</div>
                                <div className="text-gray-500 mb-6">to start practicing</div>
                                <div className="h-px bg-gray-100 w-full mb-6"></div>
                                <div className="text-lg font-medium text-emerald-600">Fair, Transparent Pricing</div>
                            </div>
                        </div>
                        <div>
                            <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 text-emerald-600">
                                <DollarSign className="w-6 h-6" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Affordable and Fair Pricing
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Quality preparation shouldn't cost a fortune. Real Estate Question Bank offers a robust free tier with optional premium upgrades — transparent pricing with no surprises.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">Start practicing immediately — no credit card, no account required.</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">No hidden fees or auto-renewals. You're always in control.</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">Premium access for those who want every advantage before test day.</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 5 */}
                    <section className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 text-gray-600">
                                <Layout className="w-6 h-6" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Built to Be Simple and Effective
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                 A clean, distraction-free experience designed around one goal: helping you pass your Real Estate licensing exam as efficiently as possible.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">Clear practice paths tailored to your state's specific requirements.</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">Realistic test simulations that closely mirror the real exam format.</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">Track your progress and focus on the areas that need the most attention.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="order-1 md:order-2 w-full max-w-[680px] select-none">
                            {/* Screen/Lid */}
                            <div className="relative bg-[#0d0d0d] rounded-t-[20px] p-[10px] shadow-2xl border-t border-x border-[#333]">
                                {/* Camera notch */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-[10px] bg-[#0d0d0d] rounded-b-md z-30 flex items-center justify-center">
                                    <div className="w-[4px] h-[4px] bg-[#1a1a1a] rounded-full mr-1.5"></div>
                                    <div className="w-[2px] h-[2px] bg-[#0433ff] rounded-full opacity-60"></div>
                                </div>

                                {/* Screen Content Bezel Area */}
                                <div className="bg-[#f8fafc] rounded-lg overflow-hidden border border-[#222] relative flex flex-col p-6 md:p-8">
                                    <div className="absolute top-0 right-0 w-48 h-48 bg-[#007aff]/5 rounded-full blur-3xl pointer-events-none" />
                                    {/* Mock Interface Header */}
                                    <div className="flex items-center justify-between border-b border-gray-150 pb-4 mb-6">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3.5 h-3.5 rounded-full bg-red-500" />
                                            <div className="w-3.5 h-3.5 rounded-full bg-yellow-500" />
                                            <div className="w-3.5 h-3.5 rounded-full bg-green-500" />
                                        </div>
                                        <span className="text-xs text-gray-400 font-mono tracking-widest uppercase">Question 42 of 150</span>
                                        <div className="w-8 h-8 bg-blue-50 text-[#007aff] rounded-lg flex items-center justify-center text-xs font-bold">
                                            92%
                                        </div>
                                    </div>
                                    
                                    {/* Mock Question */}
                                    <div className="space-y-4">
                                        <h4 className="font-bold text-base md:text-lg text-gray-900 leading-snug">
                                            A broker represents both the buyer and the seller in a transaction with written consent. This relationship is best described as:
                                        </h4>
                                        
                                        <div className="space-y-3">
                                            <div className="border border-gray-200 bg-white hover:bg-gray-50/80 rounded-xl p-4 text-sm text-gray-600 flex items-center gap-3 font-medium transition-colors">
                                                <span className="w-6 h-6 rounded-md bg-gray-100 flex items-center justify-center font-bold text-xs text-gray-400">A</span>
                                                <span>Single Agency</span>
                                            </div>
                                            <div className="border-2 border-[#007aff] bg-blue-50/20 rounded-xl p-4 text-sm text-gray-900 flex items-center justify-between gap-3 font-semibold shadow-sm shadow-blue-500/5">
                                                <div className="flex items-center gap-3">
                                                    <span className="w-6 h-6 rounded-md bg-[#007aff] text-white flex items-center justify-center font-bold text-xs">B</span>
                                                    <span>Intermediary / Dual Agency</span>
                                                </div>
                                                <span className="text-[#007aff] text-sm font-bold">✓ Correct</span>
                                            </div>
                                            <div className="border border-gray-200 bg-white hover:bg-gray-50/80 rounded-xl p-4 text-sm text-gray-600 flex items-center gap-3 font-medium transition-colors">
                                                <span className="w-6 h-6 rounded-md bg-gray-100 flex items-center justify-center font-bold text-xs text-gray-400">C</span>
                                                <span>Designated Agency</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* MacBook Base/Chassis */}
                            <div className="relative w-[108%] -left-[4%] h-[12px] bg-[#e2e8f0] rounded-b-xl border-t border-white/60 shadow-lg flex items-center justify-center z-20">
                                {/* Display notch opening */}
                                <div className="absolute top-0 w-20 h-[5px] bg-[#94a3b8] rounded-b-[4px]"></div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Testimonials Section */}
                <section className="bg-gray-50 border-y border-gray-100 py-24">
                    <div className="container mx-auto px-4">
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Students Are Saying</h2>
                            <p className="text-gray-600 text-lg">Real feedback from people who prepared with Real Estate Question Bank.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {[
                                {
                                    quote: "I failed my licensing exam the first time using a free study guide. Found Real Estate Question Bank, practiced for a week, and passed easily. The legal and finance questions were almost identical to the real thing.",
                                    name: "Michael T.",
                                    location: "California"
                                },
                                {
                                    quote: "I was nervous about the real estate exam. After a week of practicing here, I passed on the first try. The answer explanations really helped me understand the reasoning behind each law.",
                                    name: "Sarah K.",
                                    location: "Texas"
                                },
                                {
                                    quote: "Clean, simple, and the questions matched what was actually on my exam. No distracting ads, no paywalls blocking the basics. Exactly what I needed.",
                                    name: "James R.",
                                    location: "New York"
                                }
                            ].map((t, i) => (
                                <div key={i} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col">
                                    <div className="flex gap-0.5 mb-5">
                                        {[...Array(5)].map((_, j) => (
                                            <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                                        ))}
                                    </div>
                                    <p className="text-gray-700 leading-relaxed flex-1 mb-6">"{t.quote}"</p>
                                    <div>
                                        <div className="font-semibold text-gray-900">{t.name}</div>
                                        <div className="text-sm text-gray-500">{t.location}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Comparison Section */}
                <section className="bg-white py-24 border-b border-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Smarter Way to Prepare</h2>
                            <p className="text-gray-600 text-lg">See how Real Estate Question Bank compares to the alternatives.</p>
                        </div>

                        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="grid grid-cols-4 bg-gray-900 text-white p-6 font-semibold text-sm md:text-base">
                                <div className="col-span-1">Feature</div>
                                <div className="col-span-1 text-center text-blue-400">Real Estate Question Bank</div>
                                <div className="col-span-1 text-center text-gray-400">State Manual</div>
                                <div className="col-span-1 text-center text-gray-400">Other Apps</div>
                            </div>
                            <div className="divide-y divide-gray-100">
                                {[
                                    { label: 'State-specific questions', us: true, manual: false, others: false },
                                    { label: 'Free to get started', us: true, manual: true, others: false },
                                    { label: 'Exam-style format', us: true, manual: false, others: false },
                                    { label: 'Instant feedback & explanations', us: true, manual: false, others: false },
                                    { label: 'Progress tracking', us: true, manual: false, others: false },
                                    { label: 'Clean, ad-free experience', us: true, manual: false, others: false },
                                ].map((row, i) => (
                                    <div key={i} className="grid grid-cols-4 p-6 hover:bg-gray-50 transition-colors items-center">
                                        <div className="col-span-1 font-medium text-gray-700 text-sm md:text-base">{row.label}</div>
                                        <div className="col-span-1 flex justify-center">
                                            {row.us ? <CheckCircle className="w-6 h-6 text-emerald-500" /> : <span className="text-gray-300 font-mono text-xl">✕</span>}
                                        </div>
                                        <div className="col-span-1 flex justify-center">
                                            {row.manual ? <CheckCircle className="w-6 h-6 text-gray-400" /> : <span className="text-gray-300 font-mono text-xl">✕</span>}
                                        </div>
                                        <div className="col-span-1 flex justify-center">
                                            {row.others ? <CheckCircle className="w-6 h-6 text-gray-400" /> : <span className="text-gray-300 font-mono text-xl">✕</span>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-gray-900 text-center text-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-2xl mx-auto">
                            <div className="flex justify-center gap-0.5 mb-8">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                                ))}
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                Ready to pass on your first attempt?
                            </h2>
                            <p className="text-gray-400 text-lg mb-10">
                                Join thousands of students who prepared smarter with Real Estate Question Bank.
                            </p>
                            <Button
                                onClick={handleStartPractice}
                                size="lg"
                                className="bg-[#007aff] hover:bg-[#0069d9] text-white px-10 py-8 text-xl rounded-2xl shadow-xl shadow-blue-500/30 transition-all hover:scale-105 active:scale-95"
                            >
                                Start Practicing Free
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                            <p className="text-gray-500 text-sm mt-5">No account required. Start immediately.</p>
                        </div>
                    </div>
                </section>

                {/* State Real Estate Practice-Test Hubs */}
                <section className="border-t border-gray-100 pb-24 pt-16">
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
            <StateSelectorModal isOpen={stateModalOpen} onClose={() => setStateModalOpen(false)} onStateSelect={handleStateSelect} />
            <AuthModal
                isOpen={authModalOpen}
                onClose={() => setAuthModalOpen(false)}
                mode={authMode}
                onSwitchMode={setAuthMode}
            />
        </div>
    )
}
