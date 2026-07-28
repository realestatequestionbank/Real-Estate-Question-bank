'use client'

import { useState, useMemo } from 'react'
import { AuthProvider, useAuth } from '@/contexts/auth-context'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { useRouter } from 'next/navigation'
import { ChevronRight, HelpCircle, Calculator, Percent, DollarSign, Award, BookOpen } from 'lucide-react'
import Link from 'next/link'

interface MathProblem {
    id: number;
    question: string;
    steps: string[];
    answer: string;
}

const MATH_PRACTICE_PROBLEMS: MathProblem[] = [
    {
        id: 1,
        question: "A commercial property sold for $450,000. It produces an annual gross income of $62,000, and annual vacancy losses are 5%. The operating expenses total $18,900 per year. What is the capitalization rate (Cap Rate)?",
        steps: [
            "Step 1 (Find Effective Gross Income): $62,000 − 5% vacancy ($3,100) = $58,900.",
            "Step 2 (Find Net Operating Income): $58,900 − $18,900 operating expenses = $40,000 NOI.",
            "Step 3 (Calculate Cap Rate): NOI / Purchase Price = $40,000 / $450,000 = 0.0888, or 8.89%."
        ],
        answer: "8.89%"
    },
    {
        id: 2,
        question: "An agent closed a home transaction representing the buyer. The home sold for $320,000 with a 6% total commission split 50/50 between the listing and buying brokerages. If the agent's contract with their managing broker is a 70/30 split, what is the agent's net commission payout?",
        steps: [
            "Step 1 (Calculate Total Commission): $320,000 × 6% = $19,200.",
            "Step 2 (Calculate Buying Brokerage Share): $19,200 / 2 = $9,600.",
            "Step 3 (Calculate Agent Net Share): $9,600 × 70% = $6,720."
        ],
        answer: "$6,720"
    },
    {
        id: 3,
        question: "An investor is purchasing a rectangular parcel of land that measures 250 feet wide by 522.7 feet deep. If land in this area sells for $12,000 per acre, what is the total cost of the parcel?",
        steps: [
            "Step 1 (Find Total Square Footage): 250 ft × 522.7 ft = 130,675 sq ft.",
            "Step 2 (Convert to Acreage): 130,675 / 43,560 (1 acre constant) = 3.0 acres.",
            "Step 3 (Calculate Total Cost): 3.0 acres × $12,000/acre = $36,000."
        ],
        answer: "$36,000"
    },
    {
        id: 4,
        question: "A property tax assessor values a home at $280,000. The county uses an assessment ratio of 50% of market value. If the county tax rate is 35 mills, what is the annual property tax bill?",
        steps: [
            "Step 1 (Calculate Assessed Value): $280,000 × 50% = $140,000.",
            "Step 2 (Convert Mills to Decimal): 35 mills / 1,000 = 0.035.",
            "Step 3 (Calculate Tax): $140,000 assessed value × 0.035 tax rate = $4,900."
        ],
        answer: "$4,900"
    }
];

function MathPrepContent() {
    const { user, userData, isPremium, premiumStatus, signOut } = useAuth()
    const router = useRouter()

    const handleLogin = () => router.push('/#login')
    const handleSignup = () => router.push('/#signup')
    const handleLogout = async () => await signOut()
    const handleDashboard = () => router.push('/dashboard')

    // State for Calculators
    const [calcTab, setCalcTab] = useState<'cap' | 'comm' | 'acre' | 'ltv'>('cap')

    // Cap Rate inputs
    const [noi, setNoi] = useState('24000')
    const [value, setValue] = useState('300000')
    const calculatedCapRate = useMemo(() => {
        const n = parseFloat(noi)
        const v = parseFloat(value)
        if (!n || !v) return '0.00'
        return ((n / v) * 100).toFixed(2)
    }, [noi, value])

    // Commission inputs
    const [price, setPrice] = useState('250000')
    const [rate, setRate] = useState('6')
    const [split, setSplit] = useState('75')
    const calculatedCommissions = useMemo(() => {
        const p = parseFloat(price)
        const r = parseFloat(rate)
        const s = parseFloat(split)
        if (!p || !r || !s) return { total: '0.00', coBroker: '0.00', agentNet: '0.00' }
        const totalComm = p * (r / 100)
        const coShare = totalComm / 2
        const agentShare = coShare * (s / 100)
        return {
            total: totalComm.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
            coBroker: coShare.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
            agentNet: agentShare.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        }
    }, [price, rate, split])

    // Acreage inputs
    const [width, setWidth] = useState('150')
    const [length, setLength] = useState('400')
    const calculatedAcreage = useMemo(() => {
        const w = parseFloat(width)
        const l = parseFloat(length)
        if (!w || !l) return { sqft: '0', acres: '0.00' }
        const totalSqft = w * l
        const acres = totalSqft / 43560
        return {
            sqft: totalSqft.toLocaleString(),
            acres: acres.toFixed(2)
        }
    }, [width, length])

    // LTV inputs
    const [loan, setLoan] = useState('240000')
    const [appraised, setAppraised] = useState('300000')
    const calculatedLTV = useMemo(() => {
        const l = parseFloat(loan)
        const a = parseFloat(appraised)
        if (!l || !a) return '0.00'
        return ((l / a) * 100).toFixed(2)
    }, [loan, appraised])

    // Toggle for answers
    const [expandedProblems, setExpandedProblems] = useState<{ [key: number]: boolean }>({})
    const toggleProblem = (id: number) => {
        setExpandedProblems(prev => ({ ...prev, [id]: !prev[id] }))
    }

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
                        Math & Calculations <span className="text-[#007aff]">Prep</span>
                    </h1>
                    <p className="text-xl text-gray-600 font-medium">
                        Master the core real estate equations, test your knowledge with interactive simulators, and practice sample problems step-by-step.
                    </p>
                </div>

                {/* 1. Interactive Calculator Widgets */}
                <section className="bg-gray-50 rounded-[3rem] p-8 md:p-12 border border-gray-150 shadow-xl mb-16 max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 mb-8">
                        <Calculator className="w-8 h-8 text-[#007aff]" />
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Interactive Math Simulator</h2>
                    </div>

                    {/* Tabs */}
                    <div className="flex border-b border-gray-200 mb-8 overflow-x-auto scrollbar-hide">
                        <button
                            onClick={() => setCalcTab('cap')}
                            className={`pb-4 px-4 text-sm font-bold border-b-2 transition-all whitespace-nowrap ${
                                calcTab === 'cap' ? 'border-[#007aff] text-[#007aff]' : 'border-transparent text-gray-500 hover:text-gray-900'
                            }`}
                        >
                            Cap Rate
                        </button>
                        <button
                            onClick={() => setCalcTab('comm')}
                            className={`pb-4 px-4 text-sm font-bold border-b-2 transition-all whitespace-nowrap ${
                                calcTab === 'comm' ? 'border-[#007aff] text-[#007aff]' : 'border-transparent text-gray-500 hover:text-gray-900'
                            }`}
                        >
                            Commission Split
                        </button>
                        <button
                            onClick={() => setCalcTab('acre')}
                            className={`pb-4 px-4 text-sm font-bold border-b-2 transition-all whitespace-nowrap ${
                                calcTab === 'acre' ? 'border-[#007aff] text-[#007aff]' : 'border-transparent text-gray-500 hover:text-gray-900'
                            }`}
                        >
                            Acreage Finder
                        </button>
                        <button
                            onClick={() => setCalcTab('ltv')}
                            className={`pb-4 px-4 text-sm font-bold border-b-2 transition-all whitespace-nowrap ${
                                calcTab === 'ltv' ? 'border-[#007aff] text-[#007aff]' : 'border-transparent text-gray-500 hover:text-gray-900'
                            }`}
                        >
                            LTV Ratio
                        </button>
                    </div>

                    {/* Tab Panels */}
                    {calcTab === 'cap' && (
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Net Operating Income (NOI)</label>
                                    <input
                                        type="number"
                                        value={noi}
                                        onChange={(e) => setNoi(e.target.value)}
                                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-lg font-bold text-gray-900 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Property Value ($)</label>
                                    <input
                                        type="number"
                                        value={value}
                                        onChange={(e) => setValue(e.target.value)}
                                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-lg font-bold text-gray-900 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    />
                                </div>
                            </div>
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 flex flex-col justify-center text-center space-y-2">
                                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Calculated Cap Rate</span>
                                <span className="text-5xl font-black text-[#007aff]">{calculatedCapRate}%</span>
                                <span className="text-xs text-gray-400 font-medium">Formula: NOI / Value</span>
                            </div>
                        </div>
                    )}

                    {calcTab === 'comm' && (
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Home Sale Price ($)</label>
                                    <input
                                        type="number"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-lg font-bold text-gray-900 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Total Comm %</label>
                                        <input
                                            type="number"
                                            value={rate}
                                            onChange={(e) => setRate(e.target.value)}
                                            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-lg font-bold text-gray-900 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Agent split %</label>
                                        <input
                                            type="number"
                                            value={split}
                                            onChange={(e) => setSplit(e.target.value)}
                                            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-lg font-bold text-gray-900 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 flex flex-col justify-center space-y-4">
                                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                                    <span className="text-sm font-bold text-gray-400 uppercase">Total Escrow Commission</span>
                                    <span className="text-lg font-black text-gray-900">${calculatedCommissions.total}</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                                    <span className="text-sm font-bold text-gray-400 uppercase">Buyer Brokerage share (50%)</span>
                                    <span className="text-lg font-black text-gray-900">${calculatedCommissions.coBroker}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-bold text-[#007aff] uppercase">Agent Net Payout ({split}%)</span>
                                    <span className="text-2xl font-black text-[#007aff]">${calculatedCommissions.agentNet}</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {calcTab === 'acre' && (
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Lot Width (Feet)</label>
                                    <input
                                        type="number"
                                        value={width}
                                        onChange={(e) => setWidth(e.target.value)}
                                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-lg font-bold text-gray-900 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Lot Length (Feet)</label>
                                    <input
                                        type="number"
                                        value={length}
                                        onChange={(e) => setLength(e.target.value)}
                                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-lg font-bold text-gray-900 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    />
                                </div>
                            </div>
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 flex flex-col justify-center text-center space-y-3">
                                <div>
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Total Square Footage</span>
                                    <p className="text-2xl font-extrabold text-gray-900">{calculatedAcreage.sqft} sq ft</p>
                                </div>
                                <div className="pt-2 border-t border-gray-100">
                                    <span className="text-xs font-bold text-[#007aff] uppercase tracking-widest">Calculated Acreage</span>
                                    <p className="text-4xl font-black text-[#007aff]">{calculatedAcreage.acres} Acres</p>
                                    <span className="text-[10px] text-gray-400 block mt-1">1 Acre = 43,560 sq ft</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {calcTab === 'ltv' && (
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Mortgage Loan Amount ($)</label>
                                    <input
                                        type="number"
                                        value={loan}
                                        onChange={(e) => setLoan(e.target.value)}
                                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-lg font-bold text-gray-900 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Appraised Valuation ($)</label>
                                    <input
                                        type="number"
                                        value={appraised}
                                        onChange={(e) => setAppraised(e.target.value)}
                                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-lg font-bold text-gray-900 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    />
                                </div>
                            </div>
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 flex flex-col justify-center text-center space-y-2">
                                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Loan-to-Value (LTV) Ratio</span>
                                <span className="text-5xl font-black text-[#007aff]">{calculatedLTV}%</span>
                                <span className="text-xs text-gray-400 font-medium">Formula: Loan Amount / Appraised Value</span>
                            </div>
                        </div>
                    )}
                </section>

                {/* 2. Formula Cards */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Essential Formula Cheat Sheet</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        <div className="bg-white rounded-3xl p-8 border border-gray-150 shadow-md space-y-4">
                            <span className="w-10 h-10 bg-blue-50 text-[#007aff] rounded-xl flex items-center justify-center font-bold">1</span>
                            <h3 className="text-xl font-bold text-gray-900">Capitalization Rate</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Measures rate of return on rental investments. Note that NOI does not subtract debt service.
                            </p>
                            <div className="bg-gray-50 p-4 rounded-xl font-mono text-xs text-gray-800 font-bold border border-gray-100">
                                Cap Rate = NOI / Property Value
                            </div>
                        </div>
                        <div className="bg-white rounded-3xl p-8 border border-gray-150 shadow-md space-y-4">
                            <span className="w-10 h-10 bg-blue-50 text-[#007aff] rounded-xl flex items-center justify-center font-bold">2</span>
                            <h3 className="text-xl font-bold text-gray-900">Property Tax (Mills)</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Local property tax assessed. Mill rate represents units of $1 tax per $1,000 value.
                            </p>
                            <div className="bg-gray-50 p-4 rounded-xl font-mono text-xs text-gray-800 font-bold border border-gray-100">
                                Tax = Assessed Value × (Mills / 1,000)
                            </div>
                        </div>
                        <div className="bg-white rounded-3xl p-8 border border-gray-150 shadow-md space-y-4">
                            <span className="w-10 h-10 bg-blue-50 text-[#007aff] rounded-xl flex items-center justify-center font-bold">3</span>
                            <h3 className="text-xl font-bold text-gray-900">Acreage Conversion</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Converts square footage of rectangular or triangular parcels to acreage.
                            </p>
                            <div className="bg-gray-50 p-4 rounded-xl font-mono text-xs text-gray-800 font-bold border border-gray-100">
                                Acres = Total Square Feet / 43,560
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Interactive Practice Problems */}
                <section className="max-w-4xl mx-auto space-y-8 mb-20">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Step-by-Step Practice Problems</h2>
                    <div className="space-y-6">
                        {MATH_PRACTICE_PROBLEMS.map((prob) => (
                            <div key={prob.id} className="p-6 bg-white rounded-3xl border border-gray-150 shadow-sm space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 bg-blue-50 text-[#007aff] font-bold rounded-lg flex items-center justify-center flex-shrink-0">
                                        Q
                                    </div>
                                    <p className="font-bold text-gray-800 text-base leading-relaxed">{prob.question}</p>
                                </div>

                                <div className="pl-12 flex flex-col sm:flex-row items-center justify-between gap-4">
                                    <button
                                        onClick={() => toggleProblem(prob.id)}
                                        className="text-[#007aff] font-bold text-sm hover:underline flex items-center gap-1.5 active:scale-95 transition-all"
                                    >
                                        <BookOpen className="w-4 h-4" />
                                        {expandedProblems[prob.id] ? "Hide Solution" : "Show Step-by-Step Solution"}
                                    </button>
                                    <span className="px-4 py-1.5 bg-gray-100 text-gray-700 font-black rounded-lg text-sm uppercase tracking-wide">
                                        Correct Answer: {prob.answer}
                                    </span>
                                </div>

                                {expandedProblems[prob.id] && (
                                    <div className="mt-4 pl-12 pr-4 py-4 bg-blue-50/30 rounded-2xl border border-blue-50 space-y-3 transition-all duration-300">
                                        <h4 className="text-xs font-black text-[#007aff] uppercase tracking-widest">Calculation Steps:</h4>
                                        <ol className="space-y-2 text-sm text-gray-600 font-medium">
                                            {prob.steps.map((step, idx) => (
                                                <li key={idx} className="flex items-start gap-2">
                                                    <span className="text-[#007aff] font-bold">✓</span>
                                                    <span>{step}</span>
                                                </li>
                                            ))}
                                        </ol>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Final CTA */}
                <div className="bg-gray-900 rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-[#007aff]/10" />
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Want more practice with real estate math?</h2>
                        <p className="text-gray-400 text-base md:text-lg mb-8">
                            Upgrade to Premium to get access to over 200 state-specific math questions with detailed blueprints and explanation panels.
                        </p>
                        <Link
                            href="/real-estate-premium"
                            className="inline-flex items-center justify-center px-8 py-4 bg-[#007aff] hover:bg-[#0056cc] text-white text-base font-bold rounded-xl transition-all shadow-lg active:scale-95"
                        >
                            Get Premium Prep
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default function MathPrepPage() {
    return (
        <AuthProvider>
            <MathPrepContent />
        </AuthProvider>
    )
}
