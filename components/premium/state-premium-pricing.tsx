'use client'

import { useState, useRef } from 'react'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Shield, CheckCircle, Clock, Award, Star, Lock, Mail, MessageSquare } from 'lucide-react'
import { formatOfferExpiryDate } from '@/lib/constants'

interface PricingPlanInfo {
    duration: number
    title: string
    badge: string | null
    originalPrice: string
    discountedPrice: string
    stripePriceId: string
    isPopular?: boolean
}

interface StatePremiumPricingProps {
    stateName: string
    formattedQuestionCount: string
    pricingPlans: {
        sevenDay: PricingPlanInfo
        thirtyDay: PricingPlanInfo
        lifetime: PricingPlanInfo
    }
    handleUpgradePremium: (duration: 7 | 30 | 36500) => void
    customQuestionBankText?: string
    setShowVideoModal?: (show: boolean) => void
}

export function StatePremiumPricing({
    stateName,
    formattedQuestionCount,
    pricingPlans,
    handleUpgradePremium,
    setShowVideoModal,
    customQuestionBankText
}: StatePremiumPricingProps) {
    const [selectedDuration, setSelectedDuration] = useState<7 | 30 | 36500>(30)
    const isScrollingProgrammatically = useRef(false)
    const planScrollRef = useRef<HTMLDivElement>(null)

    const handlePlanScroll = () => {
        if (isScrollingProgrammatically.current) return
        if (!planScrollRef.current) return

        const scrollLeft = planScrollRef.current.scrollLeft
        const width = planScrollRef.current.offsetWidth
        const itemWidth = width * 0.85 + 16 // matches w-[85vw] + gap
        const index = Math.round(scrollLeft / itemWidth)

        const plans: (7 | 30 | 36500)[] = [7, 30, 36500]
        if (plans[index] && plans[index] !== selectedDuration) {
            setSelectedDuration(plans[index])
        }
    }

    return (
        <>
            <section id="premium-section" className="py-12 md:py-20 lg:py-24 bg-gradient-to-br from-blue-100 via-purple-50 via-50% to-emerald-100">
                <div className="container mx-auto px-4 lg:px-2">
                    <div className="mx-auto text-center">
                        <div className="animate-fade-in-up">
                            <h2 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-[#111827] mb-6 md:mb-10 max-w-4xl mx-auto leading-tight md:leading-relaxed xl:leading-tight">
                                Imagine this: You sit down for the Real Estate exam. <span className="text-[#077aff]">Nothing surprises you.</span>
                            </h2>
                            <p className="text-sm md:text-base lg:text-lg text-[#374151] mb-4 md:mb-6 max-w-2xl mx-auto leading-relaxed md:leading-[2]">
                                Access the full {stateName} Real Estate Question Bank � so the real test feels like a repeat. You've already seen it all. No surprises, no failing.
                            </p>
                            <p className="text-sm md:text-base lg:text-lg text-[#374151] mb-4 md:mb-6 max-w-2xl mx-auto leading-relaxed">
                                Gift yourself the confidence you deserve.
                            </p>
                            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-xl px-4 md:px-6 py-3 mb-8 md:mb-16">
                                <Shield className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                                <p className="text-sm md:text-base text-emerald-800 font-medium">
                                    Not sure? Try it for 60 minutes. Full refund within the first hour � just <a href="mailto:real-estatequestionbank@gmail.com" className="text-[#007aff] no-underline hover:underline">email us</a>.
                                </p>
                            </div>
                        </div>

                        {/* Duration Selector Tabs - Mobile Only */}
                        <div className="flex gap-2 mb-6 md:hidden px-2">
                            <button
                                onClick={() => {
                                    isScrollingProgrammatically.current = true
                                    setSelectedDuration(7)
                                    document.getElementById('plan-7')?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
                                    setTimeout(() => { isScrollingProgrammatically.current = false }, 500)
                                }}
                                className={`flex-1 px-2 py-1.5 rounded-lg font-bold text-sm sm:text-base transition-all duration-300 ${selectedDuration === 7
                                    ? 'bg-[#007aff] text-white shadow-md'
                                    : 'bg-white text-[#007aff] border border-[#007aff]'
                                    }`}
                            >
                                7 Days
                            </button>
                            <button
                                onClick={() => {
                                    isScrollingProgrammatically.current = true
                                    setSelectedDuration(30)
                                    document.getElementById('plan-30')?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
                                    setTimeout(() => { isScrollingProgrammatically.current = false }, 500)
                                }}
                                className={`flex-1 px-2 py-1.5 rounded-lg font-bold text-sm sm:text-base transition-all duration-300 ${selectedDuration === 30
                                    ? 'bg-[#007aff] text-white shadow-md'
                                    : 'bg-white text-[#007aff] border border-[#007aff]'
                                    }`}
                            >
                                30 Days
                            </button>
                            <button
                                onClick={() => {
                                    isScrollingProgrammatically.current = true
                                    setSelectedDuration(36500)
                                    document.getElementById('plan-lifetime')?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
                                    setTimeout(() => { isScrollingProgrammatically.current = false }, 500)
                                }}
                                className={`flex-1 px-2 py-1.5 rounded-lg font-bold text-sm sm:text-base transition-all duration-300 ${selectedDuration === 36500
                                    ? 'bg-[#007aff] text-white shadow-md'
                                    : 'bg-white text-[#007aff] border border-[#007aff]'
                                    }`}
                            >
                                Lifetime
                            </button>
                        </div>

                        {/* Pricing Options */}
                        <div className="mb-10 md:mb-20 mx-auto animate-fade-in-up delay-200">
                            {/* Mobile: Horizontal Scroll */}
                            <div
                                ref={planScrollRef}
                                onScroll={handlePlanScroll}
                                className="md:hidden overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4"
                            >
                                <div className="flex gap-4 pb-4 pt-4">
                                    {/* 7-Day Plan */}
                                    <div id="plan-7" className="snap-center flex-shrink-0 w-[85vw] max-w-[340px]">
                                        <div
                                            className={`bg-white rounded-2xl p-5 border-2 transition-all duration-300 cursor-pointer relative flex flex-col h-full ${selectedDuration === 7 ? 'border-[#007aff] shadow-lg' : 'border-gray-200 shadow-md'}`}
                                            onClick={() => setSelectedDuration(7)}
                                        >
                                            <div className="mb-4 mt-3 text-left">
                                                <div className="text-xs font-bold text-gray-700 tracking-[0.15em] uppercase mb-1">{stateName}</div>
                                                <h3 className="text-2xl font-bold text-[#111827]">Pass This Week</h3>
                                                <p className="text-base text-gray-800 font-semibold mb-2 mt-2">7-day access - One-time payment</p>
                                                <p className="text-sm text-gray-500 mt-1 leading-relaxed">Test this week? Focused, fast prep to cover everything you need to know � and pass.</p>
                                            </div>
                                            <div className="flex items-center gap-2 mb-4">
                                                {pricingPlans.sevenDay.badge && (
                                                    <span className="text-gray-400 line-through text-2xl font-medium">{pricingPlans.sevenDay.originalPrice}</span>
                                                )}
                                                <span className="text-3xl font-bold text-gray-900">{pricingPlans.sevenDay.discountedPrice}</span>
                                                {pricingPlans.sevenDay.badge && (
                                                    <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-0.5 rounded font-semibold ml-auto">{pricingPlans.sevenDay.badge}</span>
                                                )}
                                            </div>

                                            {pricingPlans.sevenDay.badge && (
                                                <p className="text-xs text-gray-500 mb-1 text-left">This offer expires on {formatOfferExpiryDate()}.</p>
                                            )}
                                            <p className="text-xs text-gray-500 mb-4 text-left">Not a subscription, one time payment only</p>

                                            <ul className="text-sm text-[#111827] space-y-2 mb-4 text-left flex-grow">
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-[#007aff] flex-shrink-0 mt-0.5" />
                                                    <span>{customQuestionBankText || `${formattedQuestionCount} ${stateName} Real Estate-style questions`}</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-[#007aff] flex-shrink-0 mt-0.5" />
                                                    <span>Unlimited mock tests</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-[#007aff] flex-shrink-0 mt-0.5" />
                                                    <span>Uncommon sense question bank (most failed questions)</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-[#007aff] flex-shrink-0 mt-0.5" />
                                                    <span>Real Estate Glossary explained clearly</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-[#007aff] flex-shrink-0 mt-0.5" />
                                                    <span>Last-minute revision guide</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-[#007aff] flex-shrink-0 mt-0.5" />
                                                    <span>Progress tracking + pass probability score</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-[#007aff] flex-shrink-0 mt-0.5" />
                                                    <span>Priority support</span>
                                                </li>
                                            </ul>
                                            <Button
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    handleUpgradePremium(7)
                                                }}
                                                className="w-full flex items-center justify-center gap-2 text-base py-6 px-4 mt-auto bg-[#007aff] hover:bg-[#0056cc] text-white font-medium"
                                            >
                                                Start Practicing Now
                                            </Button>
                                            <p className="text-xs text-gray-500 text-center mt-3">Instant Access. Works on phone, tablet, or laptop.</p>
                                        </div>
                                    </div>

                                    {/* 30-Day Plan */}
                                    <div id="plan-30" className="snap-center flex-shrink-0 w-[85vw] max-w-[340px]">
                                        <div
                                            className={`bg-white rounded-2xl p-5 border-2 transition-all duration-300 cursor-pointer relative flex flex-col h-full ${selectedDuration === 30 ? 'border-[#007aff] shadow-lg' : 'border-gray-200 shadow-md'}`}
                                            onClick={() => setSelectedDuration(30)}
                                        >
                                            <div className="absolute -top-3 left-4 whitespace-nowrap">
                                                <div className="bg-[#ffce31] text-gray-900 px-3 py-1.5 rounded-[6px] text-xs font-bold shadow-sm">
                                                    Most popular
                                                </div>
                                            </div>
                                            <div className="mb-4 mt-3 text-left">
                                                <div className="text-xs font-bold text-gray-700 tracking-[0.15em] uppercase mb-1">{stateName}</div>
                                                <h3 className="text-2xl font-bold text-[#111827] leading-tight mb-2">Pass with Confidence</h3>
                                                <p className="text-base text-gray-800 font-semibold mb-2">30-day access - One-time payment</p>
                                                <p className="text-sm text-gray-500 mt-1 leading-relaxed">57% of our users prefer this option to ensure they pass on the first try.</p>
                                            </div>
                                            <div className="flex items-center gap-2 mb-4">
                                                {pricingPlans.thirtyDay.badge && (
                                                    <span className="text-gray-400 line-through text-2xl font-medium">{pricingPlans.thirtyDay.originalPrice}</span>
                                                )}
                                                <span className="text-3xl font-bold text-gray-900">{pricingPlans.thirtyDay.discountedPrice}</span>
                                                {pricingPlans.thirtyDay.badge && (
                                                    <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-0.5 rounded font-semibold ml-auto">{pricingPlans.thirtyDay.badge}</span>
                                                )}
                                            </div>

                                            {pricingPlans.thirtyDay.badge && (
                                                <p className="text-xs text-gray-500 mb-1 text-left">This offer expires on {formatOfferExpiryDate()}.</p>
                                            )}
                                            <p className="text-xs text-gray-500 mb-4 text-left">Not a subscription, one time payment only</p>

                                            <ul className="text-sm text-[#111827] space-y-2 mb-4 text-left flex-grow">
                                                <li className="flex items-start gap-2">
                                                    <Shield className="w-4 h-4 text-[#007aff] flex-shrink-0 mt-0.5" />
                                                    <span className="font-semibold">Pass Guarantee - 100% money back</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-[#007aff] flex-shrink-0 mt-0.5" />
                                                    <span>{customQuestionBankText || `${formattedQuestionCount} ${stateName} Real Estate-style questions`}</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-[#007aff] flex-shrink-0 mt-0.5" />
                                                    <span>Unlimited mock tests</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-[#007aff] flex-shrink-0 mt-0.5" />
                                                    <span>Uncommon sense question bank (most failed questions)</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-[#007aff] flex-shrink-0 mt-0.5" />
                                                    <span>Real Estate Glossary explained clearly</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-[#007aff] flex-shrink-0 mt-0.5" />
                                                    <span>Last-minute revision guide</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-[#007aff] flex-shrink-0 mt-0.5" />
                                                    <span>Progress tracking + pass probability score</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-[#007aff] flex-shrink-0 mt-0.5" />
                                                    <span>Priority support</span>
                                                </li>
                                            </ul>
                                            <Button
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    handleUpgradePremium(30)
                                                }}
                                                className="w-full flex items-center justify-center gap-2 text-base py-6 px-4 mt-auto bg-[#007aff] hover:bg-[#0056cc] text-white font-medium"
                                            >
                                                Start Practicing Now
                                            </Button>
                                            <p className="text-xs text-gray-500 text-center mt-3">Instant Access. Works on phone, tablet, or laptop.</p>
                                        </div>
                                    </div>

                                    {/* Lifetime Plan */}
                                    <div id="plan-lifetime" className="snap-center flex-shrink-0 w-[85vw] max-w-[340px]">
                                        <div
                                            className={`bg-white rounded-2xl p-5 border-2 transition-all duration-300 cursor-pointer relative flex flex-col h-full ${selectedDuration === 36500 ? 'border-[#007aff] shadow-lg' : 'border-gray-200 shadow-md'}`}
                                            onClick={() => setSelectedDuration(36500)}
                                        >
                                            <div className="mb-4 mt-3 text-left">
                                                <div className="text-xs font-bold text-gray-700 tracking-[0.15em] uppercase mb-1">ALL STATES</div>
                                                <h3 className="text-2xl font-bold text-[#111827]">Lifetime Access</h3>
                                                <p className="text-base text-gray-800 font-semibold mb-2 mt-2">Lifetime access - One-time payment</p>
                                                <p className="text-sm text-gray-500 mt-1 leading-relaxed">Permanent companion for all Real Estate Exams. Across all states. As many attempts as you need.</p>
                                            </div>
                                            <div className="flex items-center gap-2 mb-4">
                                                {pricingPlans.lifetime.badge && (
                                                    <span className="text-gray-400 line-through text-2xl font-medium">{pricingPlans.lifetime.originalPrice}</span>
                                                )}
                                                <span className="text-3xl font-bold text-gray-900">{pricingPlans.lifetime.discountedPrice}</span>
                                                {pricingPlans.lifetime.badge && (
                                                    <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-0.5 rounded font-semibold ml-auto">{pricingPlans.lifetime.badge}</span>
                                                )}
                                            </div>

                                            {pricingPlans.lifetime.badge && (
                                                <p className="text-xs text-gray-500 mb-1 text-left">This offer expires on {formatOfferExpiryDate()}.</p>
                                            )}
                                            <p className="text-xs text-gray-500 mb-4 text-left">Not a subscription, one time payment only</p>

                                            <ul className="text-sm text-[#111827] space-y-2 mb-4 text-left flex-grow">
                                                <li className="flex items-start gap-2">
                                                    <Shield className="w-4 h-4 text-[#007aff] flex-shrink-0 mt-0.5" />
                                                    <span className="font-semibold">Pass Guarantee - 100% money back</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-[#007aff] flex-shrink-0 mt-0.5" />
                                                    <span>Full state-specific Real Estate question bank</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-[#007aff] flex-shrink-0 mt-0.5" />
                                                    <span>Unlimited mock tests</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-[#007aff] flex-shrink-0 mt-0.5" />
                                                    <span>Uncommon sense question bank (most failed questions)</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-[#007aff] flex-shrink-0 mt-0.5" />
                                                    <span>Real Estate Glossary explained clearly</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-[#007aff] flex-shrink-0 mt-0.5" />
                                                    <span>Last-minute revision guide</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-[#007aff] flex-shrink-0 mt-0.5" />
                                                    <span>Progress tracking + pass probability score</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-[#007aff] flex-shrink-0 mt-0.5" />
                                                    <span>Priority support</span>
                                                </li>
                                            </ul>
                                            <Button
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    handleUpgradePremium(36500)
                                                }}
                                                className="w-full flex items-center justify-center gap-2 text-base py-6 px-4 mt-auto bg-[#007aff] hover:bg-[#0056cc] text-white font-medium"
                                            >
                                                Start Practicing Now
                                            </Button>
                                            <p className="text-xs text-gray-500 text-center mt-3">Instant Access. Works on phone, tablet, or laptop.</p>
                                        </div>
                                    </div>
                                    <div className="flex-shrink-0 w-4" aria-hidden="true"></div>
                                </div>
                            </div>

                            {/* Desktop: Grid Layout */}
                            <div className="hidden md:grid md:grid-cols-3 gap-8 pt-6 md:max-w-6xl lg:max-w-7xl md:mx-auto">
                                {/* Short Term Plan - 7 Days */}
                                <div
                                    className={`bg-white rounded-2xl px-5 py-8 transition-all duration-300 cursor-pointer relative flex flex-col ${selectedDuration === 7 ? 'border-[3px] border-[#007aff] shadow-lg' : 'border border-gray-200 shadow-xl hover:shadow-2xl'}`}
                                    onClick={() => setSelectedDuration(7)}
                                >
                                    <div className="mb-6 mt-2 text-left">
                                        <div className="text-sm font-bold text-gray-700 tracking-[0.15em] uppercase mb-1.5">{stateName}</div>
                                        <h3 className="text-[1.7rem] font-bold text-[#111827]">Pass This Week</h3>
                                        <p className="text-base text-gray-800 font-semibold mb-2 mt-2">7-day access - One-time payment</p>
                                        <p className="text-sm text-gray-500 mt-2 leading-relaxed">Test this week? Focused, fast prep to cover everything you need to know � and pass.</p>
                                    </div>
                                    <div className="flex items-center gap-3 mb-6">
                                        {pricingPlans.sevenDay.badge && (
                                            <span className="text-gray-400 line-through text-3xl font-medium">{pricingPlans.sevenDay.originalPrice}</span>
                                        )}
                                        <span className="text-4xl font-bold text-gray-900">{pricingPlans.sevenDay.discountedPrice}</span>
                                        {pricingPlans.sevenDay.badge && (
                                            <span className="bg-yellow-100 text-yellow-700 text-xs px-2.5 py-1 rounded font-semibold ml-auto">{pricingPlans.sevenDay.badge}</span>
                                        )}
                                    </div>

                                    {pricingPlans.sevenDay.badge && (
                                        <p className="text-sm text-gray-500 mb-1 text-left">This offer expires on {formatOfferExpiryDate()}.</p>
                                    )}
                                    <p className="text-sm text-gray-500 mb-6 text-left">Not a subscription, one time payment only</p>

                                    <ul className="text-sm text-[#111827] space-y-3 mb-6 text-left flex-grow">
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-[#007aff] flex-shrink-0 mt-0.5" />
                                            <span>{customQuestionBankText || `${formattedQuestionCount} ${stateName} Real Estate-style questions`}</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-[#007aff] flex-shrink-0 mt-0.5" />
                                            <span>Unlimited mock tests</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-[#007aff] flex-shrink-0 mt-0.5" />
                                            <span>Uncommon sense question bank (most failed questions)</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-[#007aff] flex-shrink-0 mt-0.5" />
                                            <span>Real Estate Glossary explained clearly</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-[#007aff] flex-shrink-0 mt-0.5" />
                                            <span>Last-minute revision guide</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-[#007aff] flex-shrink-0 mt-0.5" />
                                            <span>Progress tracking + pass probability score</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-[#007aff] flex-shrink-0 mt-0.5" />
                                            <span>Priority support</span>
                                        </li>
                                    </ul>
                                    <Button
                                        onClick={() => handleUpgradePremium(7)}
                                        className="w-full flex items-center justify-center gap-2 text-base py-6 px-6 mt-auto bg-[#007aff] hover:bg-[#0056cc] text-white font-medium"
                                    >
                                        Start Practicing Now
                                    </Button>
                                    <p className="text-sm text-gray-500 text-center mt-4">Instant Access. Works on phone, tablet, or laptop.</p>
                                </div>

                                {/* Standard Plan - 30 Days */}
                                <div
                                    className={`bg-white rounded-2xl px-5 py-8 transition-all duration-300 cursor-pointer relative flex flex-col ${selectedDuration === 30 ? 'border-[3px] border-[#007aff] shadow-lg' : 'border border-gray-200 shadow-xl hover:shadow-2xl'}`}
                                    onClick={() => setSelectedDuration(30)}
                                >
                                    <div className="absolute -top-3.5 left-6 whitespace-nowrap">
                                        <div className="bg-[#ffce31] text-gray-900 px-4 py-1.5 rounded-[6px] text-sm font-bold shadow-sm">
                                            Most popular
                                        </div>
                                    </div>
                                    <div className="mb-6 mt-2 text-left">
                                        <div className="text-sm font-bold text-gray-700 tracking-[0.15em] uppercase mb-1.5">{stateName}</div>
                                        <h3 className="text-[1.7rem] font-bold text-[#111827] leading-tight mb-3">Pass with Confidence</h3>
                                        <p className="text-base text-gray-800 font-semibold mb-2">30-day access - One-time payment</p>
                                        <p className="text-sm text-gray-500 mt-2 leading-relaxed">57% of our users prefer this option to ensure they pass on the first try.</p>
                                    </div>
                                    <div className="flex items-center gap-3 mb-6">
                                        {pricingPlans.thirtyDay.badge && (
                                            <span className="text-gray-400 line-through text-3xl font-medium">{pricingPlans.thirtyDay.originalPrice}</span>
                                        )}
                                        <span className="text-4xl font-bold text-gray-900">{pricingPlans.thirtyDay.discountedPrice}</span>
                                        {pricingPlans.thirtyDay.badge && (
                                            <span className="bg-yellow-100 text-yellow-700 text-xs px-2.5 py-1 rounded font-semibold ml-auto">{pricingPlans.thirtyDay.badge}</span>
                                        )}
                                    </div>

                                    {pricingPlans.thirtyDay.badge && (
                                        <p className="text-sm text-gray-500 mb-1 text-left">This offer expires on {formatOfferExpiryDate()}.</p>
                                    )}
                                    <p className="text-sm text-gray-500 mb-6 text-left">Not a subscription, one time payment only</p>

                                    <ul className="text-sm text-[#111827] space-y-3 mb-6 text-left flex-grow">
                                        <li className="flex items-start gap-3">
                                            <Shield className="w-5 h-5 text-[#007aff] flex-shrink-0 mt-0.5" />
                                            <span className="font-semibold">Pass Guarantee - 100% money back</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-[#007aff] flex-shrink-0 mt-0.5" />
                                            <span>{customQuestionBankText || `${formattedQuestionCount} ${stateName} Real Estate-style questions`}</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-[#007aff] flex-shrink-0 mt-0.5" />
                                            <span>Unlimited mock tests</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-[#007aff] flex-shrink-0 mt-0.5" />
                                            <span>Uncommon sense question bank (most failed questions)</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-[#007aff] flex-shrink-0 mt-0.5" />
                                            <span>Real Estate Glossary explained clearly</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-[#007aff] flex-shrink-0 mt-0.5" />
                                            <span>Last-minute revision guide</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-[#007aff] flex-shrink-0 mt-0.5" />
                                            <span>Progress tracking + pass probability score</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-[#007aff] flex-shrink-0 mt-0.5" />
                                            <span>Priority support</span>
                                        </li>
                                    </ul>
                                    <Button
                                        onClick={() => handleUpgradePremium(30)}
                                        className="w-full flex items-center justify-center gap-2 text-base py-6 px-6 mt-auto bg-[#007aff] hover:bg-[#0056cc] text-white font-medium"
                                    >
                                        Start Practicing Now
                                    </Button>
                                    <p className="text-sm text-gray-500 text-center mt-4">Instant Access. Works on phone, tablet, or laptop.</p>
                                </div>

                                {/* Lifetime Plan */}
                                <div
                                    className={`bg-white rounded-2xl px-5 py-8 transition-all duration-300 cursor-pointer relative flex flex-col ${selectedDuration === 36500 ? 'border-[3px] border-[#007aff] shadow-lg' : 'border border-gray-200 shadow-xl hover:shadow-2xl'}`}
                                    onClick={() => setSelectedDuration(36500)}
                                >
                                    <div className="mb-6 mt-2 text-left">
                                        <div className="text-sm font-bold text-gray-700 tracking-[0.15em] uppercase mb-1.5">ALL STATES</div>
                                        <h3 className="text-[1.7rem] font-bold text-[#111827]">Lifetime Access</h3>
                                        <p className="text-base text-gray-800 font-semibold mb-2 mt-2">Lifetime access - One-time payment</p>
                                        <p className="text-sm text-gray-500 mt-2 leading-relaxed">Permanent companion for all Real Estate Exams. Across all states. As many attempts as you need.</p>
                                    </div>
                                    <div className="flex items-center gap-3 mb-6">
                                        {pricingPlans.lifetime.badge && (
                                            <span className="text-gray-400 line-through text-3xl font-medium">{pricingPlans.lifetime.originalPrice}</span>
                                        )}
                                        <span className="text-4xl font-bold text-gray-900">{pricingPlans.lifetime.discountedPrice}</span>
                                        {pricingPlans.lifetime.badge && (
                                            <span className="bg-yellow-100 text-yellow-700 text-xs px-2.5 py-1 rounded font-semibold ml-auto">{pricingPlans.lifetime.badge}</span>
                                        )}
                                    </div>

                                    {pricingPlans.lifetime.badge && (
                                        <p className="text-sm text-gray-500 mb-1 text-left">This offer expires on {formatOfferExpiryDate()}.</p>
                                    )}
                                    <p className="text-sm text-gray-500 mb-6 text-left">Not a subscription, one time payment only</p>

                                    <ul className="text-sm text-[#111827] space-y-3 mb-6 text-left flex-grow">
                                        <li className="flex items-start gap-3">
                                            <Shield className="w-5 h-5 text-[#007aff] flex-shrink-0 mt-0.5" />
                                            <span className="font-semibold">Pass Guarantee - 100% money back</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-[#007aff] flex-shrink-0 mt-0.5" />
                                            <span>Full state-specific Real Estate question bank</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-[#007aff] flex-shrink-0 mt-0.5" />
                                            <span>Unlimited mock tests</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-[#007aff] flex-shrink-0 mt-0.5" />
                                            <span>Uncommon sense question bank (most failed questions)</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-[#007aff] flex-shrink-0 mt-0.5" />
                                            <span>Real Estate Glossary explained clearly</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-[#007aff] flex-shrink-0 mt-0.5" />
                                            <span>Last-minute revision guide</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-[#007aff] flex-shrink-0 mt-0.5" />
                                            <span>Progress tracking + pass probability score</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-[#007aff] flex-shrink-0 mt-0.5" />
                                            <span>Priority support</span>
                                        </li>
                                    </ul>
                                    <Button
                                        onClick={() => handleUpgradePremium(36500)}
                                        className="w-full flex items-center justify-center gap-2 text-base py-6 px-6 mt-auto bg-[#007aff] hover:bg-[#0056cc] text-white font-medium"
                                    >
                                        Start Practicing Now
                                    </Button>
                                    <p className="text-sm text-gray-500 text-center mt-4">Instant Access. Works on phone, tablet, or laptop.</p>
                                </div>
                            </div>
                        </div>

                        {/* Secure Checkout & Support Info */}
                        <div className="mt-12 md:mt-16 text-center max-w-3xl mx-auto px-4">
                            <div className="flex items-center justify-center gap-2 mb-8 text-emerald-600 font-semibold">
                                <Lock className="w-5 h-5" />
                                <span>Secure checkout powered by Stripe</span>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <a
                                    href="mailto:real-estatequestionbank@gmail.com"
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-xl text-[#007aff] font-semibold hover:bg-gray-50 transition-colors shadow-sm w-auto"
                                >
                                    <Mail className="w-5 h-5" />
                                    Email
                                </a>
                                <a
                                    href="sms:+14085494524"
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-xl text-[#007aff] font-semibold hover:bg-gray-50 transition-colors shadow-sm w-auto"
                                >
                                    <MessageSquare className="w-5 h-5" />
                                    Message +1 (408) 549-4524
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Proof Section */}
            <section className="py-12 md:py-20 lg:py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-8 md:mb-12 animate-fade-in-up">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4 md:mb-6">Built for One Goal: Pass the Real Estate Test on Your First Try</h2>
                        <p className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4">Practice what the Real Estate actually tests � not the whole manual.</p>
                        <div className="flex justify-center gap-1 mb-4">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="w-5 h-5 md:w-6 md:h-6 fill-[#007aff] text-[#007aff]" />
                            ))}
                        </div>
                    </div>
                    <div className="flex overflow-x-auto snap-x snap-mandatory pb-6 -mx-4 px-4 gap-4 md:grid md:grid-cols-3 md:gap-6 lg:gap-8 md:overflow-visible md:pb-0 md:mx-0 md:px-0 animate-fade-in-up delay-200 scrollbar-hide">
                        <Card className="snap-center flex-shrink-0 w-[70vw] md:w-auto text-center p-6 shadow-lg border-gray-100 group hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                            <Award className="w-10 h-10 md:w-12 md:h-12 text-[#007aff] mx-auto mb-3 md:mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />
                            <CardTitle className="text-lg md:text-xl font-semibold mb-1.5 md:mb-2 text-black">Exam-Focused, Not Random</CardTitle>
                            <CardContent className="text-gray-600 p-0 text-sm md:text-base">
                                Questions are based on real Real Estate patterns � not textbook filler you�ll never be asked.
                            </CardContent>
                        </Card>
                        <Card className="snap-center flex-shrink-0 w-[70vw] md:w-auto text-center p-6 shadow-lg border-gray-100 group hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                            <Clock className="w-10 h-10 md:w-12 md:h-12 text-green-600 mx-auto mb-3 md:mb-4 group-hover:rotate-12 transition-transform duration-300" />
                            <CardTitle className="text-lg md:text-xl font-semibold mb-1.5 md:mb-2 text-black">No Reading. Only Practice.</CardTitle>
                            <CardContent className="text-gray-600 p-0 text-sm md:text-base">
                                Skip boring manuals. Learn by answering real questions with instant explanations.
                            </CardContent>
                        </Card>
                        <Card className="snap-center flex-shrink-0 w-[70vw] md:w-auto text-center p-6 shadow-lg border-gray-100 group hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                            <Shield className="w-10 h-10 md:w-12 md:h-12 text-purple-600 mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300" />
                            <CardTitle className="text-lg md:text-xl font-semibold mb-1.5 md:mb-2 text-black">Pass or Pay Nothing</CardTitle>
                            <CardContent className="text-gray-600 p-0 text-sm md:text-base">
                                If you don�t pass, we refund you. No fine print. No excuses.
                            </CardContent>
                        </Card>
                    </div>
                    

                </div>
            </section>
        </>
    )
}
