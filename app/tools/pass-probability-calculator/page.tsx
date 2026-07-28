'use client'

import { useState, useMemo } from 'react'
import { AuthProvider, useAuth } from '@/contexts/auth-context'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { useRouter } from 'next/navigation'
import { ChevronRight, Award, Brain, CheckCircle, Clock, FileText, ArrowRight } from 'lucide-react'
import Link from 'next/link'

function PassProbabilityContent() {
    const { user, userData, isPremium, premiumStatus, signOut } = useAuth()
    const router = useRouter()

    const handleLogin = () => router.push('/#login')
    const handleSignup = () => router.push('/#signup')
    const handleLogout = async () => await signOut()
    const handleDashboard = () => router.push('/dashboard')

    // Input States
    const [avgScore, setAvgScore] = useState<number>(75)
    const [hoursStudied, setHoursStudied] = useState<number>(40)
    const [questionsSolved, setQuestionsSolved] = useState<number>(350)
    const [studyingVocab, setStudyingVocab] = useState<boolean>(true)
    const [stateDifficulty, setStateDifficulty] = useState<'hard' | 'medium' | 'easy'>('hard')

    // Calculator Logic
    const calculationResult = useMemo(() => {
        // Base pass probability (average national first-time pass rate is ~50%)
        let probability = 50

        // 1. Practice test score effect (very strong indicator)
        // A score of 75% keeps baseline. Below 75% reduces, above increases.
        probability += (avgScore - 75) * 1.5

        // 2. Study hours effect (recommends 60+ hours)
        if (hoursStudied >= 60) {
            probability += Math.min(15, (hoursStudied - 60) * 0.3)
        } else {
            probability -= (60 - hoursStudied) * 0.4
        }

        // 3. Practice questions solved effect (recommends 1000+)
        if (questionsSolved >= 1000) {
            probability += Math.min(15, (questionsSolved - 1000) * 0.015)
        } else if (questionsSolved < 500) {
            probability -= 15
        } else {
            probability -= 5
        }

        // 4. Vocabulary review effect
        if (studyingVocab) {
            probability += 8
        } else {
            probability -= 10
        }

        // 5. State difficulty coefficient
        if (stateDifficulty === 'hard') {
            probability *= 0.9 // Hard states (CA, TX, CO)
        } else if (stateDifficulty === 'medium') {
            probability *= 0.95
        }

        // Clamp between 10% and 99%
        const finalProb = Math.min(99, Math.max(10, Math.round(probability)))

        // Determine Status Tier & Advice
        let tier: 'high' | 'medium' | 'low' = 'low'
        let colorClass = 'text-red-500'
        let bgClass = 'bg-red-50'
        let borderClass = 'border-red-100'
        let adviceList: string[] = []

        if (finalProb >= 85) {
            tier = 'high'
            colorClass = 'text-emerald-500'
            bgClass = 'bg-emerald-50/50'
            borderClass = 'border-emerald-100'
            adviceList = [
                "You have excellent metrics! Your practice test scores and study habits indicate you are fully prepared for the exam.",
                "Keep doing light reviews to maintain vocabulary retention leading up to exam day.",
                "Focus on getting a good night's sleep before the test; anxiety is your only major hurdle now."
            ]
        } else if (finalProb >= 65) {
            tier = 'medium'
            colorClass = 'text-amber-500'
            bgClass = 'bg-amber-50/50'
            borderClass = 'border-amber-100'
            adviceList = [
                "You are in the 'passing window' but have a moderate margin of error. A few tricky state-specific laws could slip you up.",
                "We recommend increasing your mock exam score averages to 80% to build a safer cushion.",
                "Dedicate additional time to reviewing explanation panels for every incorrect answer."
            ]
        } else {
            tier = 'low'
            colorClass = 'text-red-600'
            bgClass = 'bg-red-50/50'
            borderClass = 'border-red-100'
            adviceList = [
                "Your probability of passing on the first attempt is low. We recommend delaying your official test date if possible.",
                "Aim to complete at least 60 hours of total structured study and solve 1,000+ practice questions.",
                "Focus heavily on mastering the real estate vocabulary (OLD CAR, PETE, co-ownership models) which represents 30% of the exam."
            ]
        }

        return {
            probability: finalProb,
            tier,
            colorClass,
            bgClass,
            borderClass,
            adviceList
        }
    }, [avgScore, hoursStudied, questionsSolved, studyingVocab, stateDifficulty])

    return (
        <div className="min-h-screen bg-white font-sans text-gray-800">
            <Navigation
                user={user}
                userData={userData}
                isPremium={isPremium}
                premiumStatus={premiumStatus}
                onLogin={handleLogin}
                onSignup={handleSignup}
                onLogout={handleLogout}
                onDashboard={handleDashboard}
                showGetPremiumLink
            />

            <main className="container mx-auto px-4 py-16 lg:py-24 max-w-7xl">
                {/* Hero Header */}
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 leading-[0.9]">
                        Pass Probability <span className="text-[#007aff]">Calculator</span>
                    </h1>
                    <p className="text-xl text-gray-600 font-medium">
                        Input your current study performance metrics to calculate your probability of passing the real estate exam on your first attempt.
                    </p>
                </div>

                {/* Calculator Panel */}
                <div className="grid lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
                    {/* Left Column: Input Form (7 cols) */}
                    <div className="lg:col-span-7 bg-gray-50 rounded-[2.5rem] p-8 md:p-10 border border-gray-150 shadow-lg space-y-8">
                        <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
                            <Brain className="w-7 h-7 text-[#007aff]" />
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900">Your Study Metrics</h2>
                        </div>

                        {/* Slider: Avg Score */}
                        <div className="space-y-2">
                            <div className="flex justify-between items-center text-sm font-bold text-gray-700">
                                <span>AVERAGE PRACTICE EXAM SCORE</span>
                                <span className="text-[#007aff] text-lg font-black">{avgScore}%</span>
                            </div>
                            <input
                                type="range"
                                min="40"
                                max="100"
                                value={avgScore}
                                onChange={(e) => setAvgScore(parseInt(e.target.value))}
                                className="w-full h-2 bg-gray-250 rounded-lg appearance-none cursor-pointer accent-[#007aff]"
                            />
                            <div className="flex justify-between text-xs text-gray-400 font-medium">
                                <span>40% (Fail Limit)</span>
                                <span>75% (Safe Pass)</span>
                                <span>100% (Perfect)</span>
                            </div>
                        </div>

                        {/* Slider: Hours Studied */}
                        <div className="space-y-2">
                            <div className="flex justify-between items-center text-sm font-bold text-gray-700">
                                <span>TOTAL STRUCTURED STUDY HOURS</span>
                                <span className="text-[#007aff] text-lg font-black">{hoursStudied} Hours</span>
                            </div>
                            <input
                                type="range"
                                min="5"
                                max="150"
                                value={hoursStudied}
                                onChange={(e) => setHoursStudied(parseInt(e.target.value))}
                                className="w-full h-2 bg-gray-250 rounded-lg appearance-none cursor-pointer accent-[#007aff]"
                            />
                            <div className="flex justify-between text-xs text-gray-400 font-medium">
                                <span>5 Hours</span>
                                <span>60 Hours (Recommended)</span>
                                <span>150+ Hours</span>
                            </div>
                        </div>

                        {/* Input: Questions Solved */}
                        <div className="space-y-2">
                            <label className="block text-sm font-bold text-gray-700">PRACTICE QUESTIONS SOLVED</label>
                            <input
                                type="number"
                                min="0"
                                max="5000"
                                value={questionsSolved}
                                onChange={(e) => setQuestionsSolved(parseInt(e.target.value) || 0)}
                                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-lg font-bold text-gray-900 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm"
                            />
                            <p className="text-xs text-gray-400 font-medium">Solving at least 1,000 questions minimizes exam-day surprises.</p>
                        </div>

                        {/* Dropdown: State Difficulty */}
                        <div className="space-y-2">
                            <label className="block text-sm font-bold text-gray-700">EXAM STATE & DIFFICULTY TIER</label>
                            <select
                                value={stateDifficulty}
                                onChange={(e) => setStateDifficulty(e.target.value as any)}
                                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-base font-bold text-gray-900 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm"
                            >
                                <option value="hard">Hard States (California, Texas, Colorado, Oregon)</option>
                                <option value="medium">Medium States (Florida, New York, Georgia, Illinois)</option>
                                <option value="easy">Standard States (Other States)</option>
                            </select>
                        </div>

                        {/* Toggle: Studying Vocab */}
                        <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-150 shadow-sm">
                            <div className="space-y-1">
                                <span className="block text-sm font-bold text-gray-900">Are you reviewing vocabulary card terms?</span>
                                <span className="block text-xs text-gray-400 font-medium">Terminology checks account for 30% of the exam scoring.</span>
                            </div>
                            <button
                                type="button"
                                onClick={() => setStudyingVocab(prev => !prev)}
                                className={`w-14 h-8 rounded-full transition-all relative ${
                                    studyingVocab ? 'bg-[#007aff]' : 'bg-gray-200'
                                }`}
                            >
                                <span className={`absolute top-1 w-6 h-6 rounded-full bg-white transition-all shadow-md ${
                                    studyingVocab ? 'left-7' : 'left-1'
                                }`} />
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Output Results (5 cols) */}
                    <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
                        {/* Dial Gauge */}
                        <div className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-xl text-center space-y-6 flex flex-col items-center justify-center flex-1">
                            <span className="text-xs font-black uppercase tracking-widest text-gray-400">Calculated Probability</span>
                            
                            {/* Radial dial representation */}
                            <div className="relative w-44 h-44 flex items-center justify-center">
                                <svg className="w-full h-full transform -rotate-90">
                                    <circle
                                        cx="88"
                                        cy="88"
                                        r="76"
                                        className="stroke-gray-100 fill-transparent"
                                        strokeWidth="12"
                                    />
                                    <circle
                                        cx="88"
                                        cy="88"
                                        r="76"
                                        className="stroke-[#007aff] fill-transparent transition-all duration-500 ease-out"
                                        strokeWidth="12"
                                        strokeDasharray={477.5}
                                        strokeDashoffset={477.5 - (477.5 * calculationResult.probability) / 100}
                                        strokeLinecap="round"
                                    />
                                </svg>
                                <div className="absolute flex flex-col items-center justify-center">
                                    <span className="text-5xl font-black text-gray-900">{calculationResult.probability}%</span>
                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Pass Chance</span>
                                </div>
                            </div>

                            <span className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider ${calculationResult.bgClass} ${calculationResult.colorClass} border ${calculationResult.borderClass}`}>
                                {calculationResult.tier === 'high' ? 'High Probability' : calculationResult.tier === 'medium' ? 'Moderate Probability' : 'Low Probability'}
                            </span>
                        </div>

                        {/* Tailored Advice list */}
                        <div className="bg-gray-50 rounded-[2.5rem] p-8 border border-gray-150 shadow-sm space-y-4">
                            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                                <Award className="w-5 h-5 text-[#007aff]" />
                                Study Diagnostics
                            </h3>
                            <ul className="space-y-3 text-sm text-gray-600 font-medium">
                                {calculationResult.adviceList.map((advice, idx) => (
                                    <li key={idx} className="flex items-start gap-2.5">
                                        <CheckCircle className="w-4 h-4 text-[#007aff] mt-0.5 flex-shrink-0" />
                                        <span>{advice}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Premium Upsell Card */}
                <div className="bg-gray-900 rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden mt-16 shadow-2xl">
                    <div className="absolute inset-0 bg-[#007aff]/15" />
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Want to guarantee a 99% pass probability?</h2>
                        <p className="text-gray-400 text-base md:text-lg mb-8">
                            Our Premium Question Bank includes custom study alerts, detailed answer explanation panels, and state law diagnostic simulations.
                        </p>
                        <Link
                            href="/real-estate-premium"
                            className="inline-flex items-center justify-center px-8 py-4 bg-[#007aff] hover:bg-[#0056cc] text-white text-base font-bold rounded-xl transition-all shadow-lg active:scale-95"
                        >
                            Guarantee Your Pass <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default function PassProbabilityPage() {
    return (
        <AuthProvider>
            <PassProbabilityContent />
        </AuthProvider>
    )
}
