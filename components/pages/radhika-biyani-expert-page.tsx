'use client'

import { useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { AuthModal } from '@/components/auth/auth-modal'
import { StateSelectorModal } from '@/components/state-selector-modal'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/auth-context'
import { ShieldCheck, Award, Check, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { type StateKey } from '@/lib/constants'

export function RadhikaBiyaniExpertPage() {
    const [stateModalOpen, setStateModalOpen] = useState(false)
    const [authModalOpen, setAuthModalOpen] = useState(false)
    const [authMode, setAuthMode] = useState<'login' | 'signup'>('login')
    const router = useRouter()
    const { user, userData, isPremium, signOut } = useAuth()

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
                
                {/* Editorial Header Section */}
                <div className="bg-gradient-to-b from-[#f2f7ff]/70 via-white to-white pt-20 md:pt-28 pb-12 border-b border-gray-100">
                    <div className="container mx-auto px-4 max-w-3xl">
                        


                        {/* Profile Info Row */}
                        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 mt-6">
                            <div className="relative flex-shrink-0">
                                <div className="w-32 h-32 md:w-48 md:h-48 rounded-2xl md:rounded-3xl overflow-hidden bg-slate-50 border border-gray-200/50 shadow-xs">
                                    <img
                                        src="/images/Radhika_Biyani_Profile_Picture.webp"
                                        alt="Radhika Biyani"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-1 -right-1 md:-bottom-2 md:-right-2 bg-[#00b074] text-white p-1 md:p-2 rounded-full border-2 border-white shadow-sm flex items-center justify-center">
                                    <ShieldCheck className="w-4 h-4 md:w-6 md:h-6" />
                                </div>
                            </div>
                            
                            <div className="text-center md:text-left mt-2">
                                <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 text-[10px] md:text-xs font-bold rounded-full px-3 py-1 mb-3.5 tracking-wider uppercase">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                    Verified Editorial Lead
                                </div>
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-2">
                                    Radhika Biyani
                                </h1>
                                <p className="text-base md:text-lg text-gray-500 font-medium">
                                    CEO & Founder, Real Estate Question Bank
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Profile Core Content */}
                <div className="container mx-auto px-4 max-w-3xl py-12 md:py-16">
                    <div className="space-y-12 md:space-y-16">
                        
                        {/* Biography */}
                        <section className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
                                About
                            </h2>
                            <div className="space-y-5 text-gray-700 text-base md:text-lg leading-relaxed font-normal">
                                <p>
                                    Radhika Biyani is the founder and executive editor behind Real Estate Question Bank. She spent years working at the intersection of online learning platforms and instructional design, identifying a major gap in the market: the lack of accurate, localized prep tools for real estate license tests.
                                </p>
                                <p>
                                    Recognizing that state Real Estate handbooks change frequently and that driving rules vary widely across different jurisdictions, she designed Real Estate Question Bank to serve state-specific handbooks mapped directly to practice materials. This process guarantees that every practice resource mirrors the official Real Estate guidelines as closely as possible.
                                </p>
                                <p>
                                    Under her leadership, the platform has grown to help thousands of student drivers build the confidence they need to pass their licensing exams on the first try.
                                </p>
                            </div>
                        </section>

                        {/* Premium Blockquote Divider */}
                        <section className="py-10 md:py-12 border-y border-gray-200/80 my-8">
                            <div className="relative px-2">
                                <p className="text-[#007aff] text-lg md:text-xl lg:text-2xl font-medium leading-loose tracking-wide text-center font-serif">
                                    "Preparing for a driver's real estate exam shouldn't feel like a guessing game. By aligning every practice question directly to the latest state handbooks, we help drivers build true confidence, pass on their first try, and become safe drivers from day one."
                                </p>
                            </div>
                        </section>

                        {/* Areas of Expertise */}
                        <section className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
                                <Award className="w-5 h-5 text-blue-600" />
                                Areas of Expertise
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700 text-sm md:text-base">
                                {[
                                    "Driver Test Prep Methodologies",
                                    "Real Estate Handbook Syllabus Mapping",
                                    "Educational Product Design",
                                    "Regulatory Safety Standards",
                                    "State Driver Licensing Oversight"
                                ].map((area, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                                        <span>{area}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Editorial Standards */}
                        <section className="space-y-6">
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
                                <Link 
                                    href="/editorial-standards-and-accuracy" 
                                    className="group inline-flex items-center gap-2 hover:text-[#007aff] transition-colors"
                                >
                                    Editorial Standards & Content Verification
                                    <ExternalLink className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-[#007aff] transition-colors" />
                                </Link>
                            </h2>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                Radhika establishes the platform's content design specifications. The team follows a strict editorial lifecycle to ensure that all practice materials are highly accurate, localized, and up-to-date. You can read our full <Link href="/editorial-standards-and-accuracy" className="text-[#007aff] font-semibold underline decoration-[#007aff]/30 hover:decoration-[#007aff] underline-offset-4 transition-all">Editorial Standards & Accuracy guidelines</Link> to learn more.
                            </p>

                            <div className="space-y-8 mt-6">
                                {[
                                    {
                                        num: "01",
                                        title: "Real Estate Handbook Mapping",
                                        desc: "Every practice question is checked against the official state Real Estate handbook and mapped to the corresponding rules, limits, or signage regulations."
                                    },
                                    {
                                        num: "02",
                                        title: "Rigorous Review Cycle",
                                        desc: "Our review team conducts regular audits (such as the verification update on June 30, 2026) to check questions, weed out expired rules, and add newly introduced state laws."
                                    },
                                    {
                                        num: "03",
                                        title: "Correctness Safeguards",
                                        desc: "Multiple stage verify checkpoints check answers and explain tricky roadside rules clearly so learners understand why a choice is correct."
                                    },
                                    {
                                        num: "04",
                                        title: "Active Feedback Loops",
                                        desc: "User feedback on test formats or updated handbook details is checked daily by our support desk and edited directly within hours."
                                    }
                                ].map((step, idx) => (
                                    <div key={idx} className="flex gap-4 md:gap-6 items-start">
                                        <span className="text-2xl md:text-3xl font-extrabold text-blue-200/90 leading-none select-none">
                                            {step.num}
                                        </span>
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-base md:text-lg mb-1 leading-snug">
                                                {step.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                                {step.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                    </div>
                </div>
            </main>

            <Footer />

            <AuthModal
                isOpen={authModalOpen}
                onClose={() => setAuthModalOpen(false)}
                mode={authMode}
                onSwitchMode={setAuthMode}
            />

            <StateSelectorModal
                isOpen={stateModalOpen}
                onClose={() => setStateModalOpen(false)}
                onStateSelect={handleStateSelect}
            />
        </div>
    )

    function handleStateSelect(state: StateKey) {
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
}
