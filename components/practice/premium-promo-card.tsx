import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CheckCircle, Crown, Clock, Shield, Sparkles, Brain, Trophy, Lock } from 'lucide-react'
import { StateKey, formatOfferExpiryDate, PRICING, getEffectivePricing, isFlashSaleActive } from '@/lib/constants'
import { formatQuestionCount } from '@/lib/utils/formatQuestionCount'

// Card variations content
const PROMO_CARDS = [
    // 1️⃣ Freedom-first
    {
        headline: "Start your Real Estate career here.",
        subheadline: "Pre-licensing books are boring. Practice actually works.",
        icon: Sparkles
    },
    // 2️⃣ Time-respect
    {
        headline: "Your time is precious. We treat it that way.",
        subheadline: "No fluff. Just the questions that get you licensed faster.",
        icon: Clock
    },
    // 3️⃣ Anti-"common sense"
    {
        headline: "The Real Estate exam doesn't test common sense.",
        subheadline: "It tests details — and practice beats guessing.",
        icon: Brain
    },
    // 4️⃣ Fear → control
    {
        headline: "Nervous is normal. Unprepared is optional.",
        subheadline: "Practice until the test feels familiar.",
        icon: Shield
    },
    // 5️⃣ Social proof without numbers
    {
        headline: "Most people fail because they don't practice.",
        subheadline: "Don't be most people.",
        icon: Trophy
    },
    // 6️⃣ Memory vs reading
    {
        headline: "Reading ≠ remembering.",
        subheadline: "Practicing works. Every time.",
        icon: Brain
    },
    // 7️⃣ Confidence at the Real Estate
    {
        headline: "Walk into the exam center knowing you'll pass.",
        subheadline: "See the questions before they see you.",
        icon: CheckCircle
    },
    // 8️⃣ Smart people reassurance
    {
        headline: "Smart people fail the Real Estate exam all the time.",
        subheadline: "The test checks memory, not intelligence.",
        icon: Brain
    },
    // 9️⃣ Simplicity promise
    {
        headline: "The manual is long. The test is tricky.",
        subheadline: "We make it simple — by making you practice.",
        icon: Sparkles
    },
    // 🔟 One-time, lifetime value
    {
        headline: "Pay once. Pass and launch your career.",
        subheadline: "This is a one-time thing — just like your real estate exam.",
        icon: Crown
    }
]

interface PremiumPromoCardProps {
    testNumber: number
    triggerQuestionIndex: number // 2 for Q3, 6 for Q7
    onContinue: () => void
    onUpgrade: () => void
    stateName: string
    state: string
    questionCount?: number
}

export function PremiumPromoCard({
    testNumber,
    triggerQuestionIndex,
    onContinue,
    onUpgrade,
    stateName,
    state,
    questionCount = 500
}: PremiumPromoCardProps) {
    const router = useRouter()
    const [timeLeft, setTimeLeft] = useState(10)
    const [canContinue, setCanContinue] = useState(false)

    // Calculate which card to show
    // offset 0 for Q3 (index 2), offset 1 for Q7 (index 6)
    const offset = triggerQuestionIndex === 6 ? 1 : 0
    const cardIndex = Math.min(((testNumber - 1) * 2) + offset, PROMO_CARDS.length - 1)
    const content = PROMO_CARDS[cardIndex]

    const effectivePricing = getEffectivePricing()

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 0.1) { // Floating point safety
                    clearInterval(timer)
                    setCanContinue(true)
                    return 0
                }
                return prev - 0.1
            })
        }, 100)

        return () => clearInterval(timer)
    }, [])

    const progressPercentage = Math.min(100, ((10 - timeLeft) / 10) * 100)

    return (
        // Full-width container with blue header extending edge-to-edge
        <div className="w-full min-h-screen md:min-h-0 md:h-auto bg-white overflow-hidden flex flex-col animate-in fade-in duration-300 relative" style={{ margin: 0 }}>
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes gradient-shift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .animate-gradient-slow {
                    background-size: 200% 200%;
                    animation: gradient-shift 8s ease infinite;
                }
                @keyframes check-pop {
                    0% { transform: scale(0); opacity: 0; }
                    80% { transform: scale(1.2); opacity: 1; }
                    100% { transform: scale(1); opacity: 1; }
                }
                .animate-check-pop {
                    animation: check-pop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
                }
                @keyframes shine {
                    0% { transform: translateX(-150%) skewX(-12deg); }
                    20% { transform: translateX(150%) skewX(-12deg); }
                    100% { transform: translateX(150%) skewX(-12deg); }
                }
                .animate-shine {
                    animation: shine 4s ease-in-out infinite;
                }
            `}} />

            {/* Blue background for headline area - extends full width */}
            <div className="absolute top-0 left-0 right-0 h-72 md:h-64 bg-[#007aff] pointer-events-none" />

            {/* Main Content Area */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden relative z-10">
                <div className="px-4 md:px-8 pt-6 md:pt-8 pb-24 md:pb-8 max-w-3xl mx-auto flex flex-col h-full justify-center">

                    {/* Header Content - White text on blue background */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/20 text-white mb-4 md:mb-6 backdrop-blur-sm animate-in zoom-in duration-500">
                            <content.icon className="w-7 h-7 md:w-8 md:h-8" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out fill-mode-both">
                            {content.headline}
                        </h2>
                        <p className="text-base md:text-lg text-white/80 font-normal animate-in fade-in slide-in-from-bottom-3 duration-700 delay-150 fill-mode-both">
                            {content.subheadline}
                        </p>
                    </div>

                    {/* Plan Details Card */}
                    <div className="bg-white rounded-xl border-2 border-blue-100 p-5 md:p-6 mb-8 relative overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 fill-mode-both">
                        <div className="flex flex-col md:flex-row gap-6 items-center">

                            {/* Left Side: Features */}
                            <div className="flex-1 w-full space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                                        <CheckCircle className="w-3.5 h-3.5" />
                                    </div>
                                    <span className="font-medium text-gray-700 text-sm md:text-base">Access to {formatQuestionCount(questionCount)} {stateName} questions</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                                        <CheckCircle className="w-3.5 h-3.5" />
                                    </div>
                                    <span className="font-medium text-gray-700 text-sm md:text-base">Unlimited simulation tests</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                                        <CheckCircle className="w-3.5 h-3.5" />
                                    </div>
                                    <span className="font-medium text-gray-700 text-sm md:text-base">Pass Guarantee (100% Refund)</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                                        <CheckCircle className="w-3.5 h-3.5" />
                                    </div>
                                    <span className="font-medium text-gray-700 text-sm md:text-base">2 Cheat Sheets Included</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                                        <CheckCircle className="w-3.5 h-3.5" />
                                    </div>
                                    <span className="font-medium text-gray-700 text-sm md:text-base">Based on {stateName} 2026 Real Estate Syllabi</span>
                                </div>
                            </div>

                            {/* Right Side: Pricing */}
                            <div className="w-full md:w-auto md:border-l md:border-gray-100 md:pl-6 text-center md:text-right">
                                {isFlashSaleActive() ? (
                                    <>
                                        <div className="mb-1 flex items-center justify-center md:justify-end gap-2">
                                            <span className="text-gray-400 line-through text-base">${effectivePricing.PLANS.THIRTY_DAY.originalPrice}</span>
                                            {effectivePricing.PLANS.THIRTY_DAY.originalPrice > effectivePricing.PLANS.THIRTY_DAY.discountedPrice && (
                                                <span className="text-green-700 font-bold text-xs bg-green-100 px-2 py-0.5 rounded-full">{Math.round(((effectivePricing.PLANS.THIRTY_DAY.originalPrice - effectivePricing.PLANS.THIRTY_DAY.discountedPrice) / effectivePricing.PLANS.THIRTY_DAY.originalPrice) * 100)}% OFF</span>
                                            )}
                                        </div>
                                        <div className="text-4xl font-bold text-[#007aff] mb-1">${effectivePricing.PLANS.THIRTY_DAY.discountedPrice}</div>
                                        <div className="text-xs text-gray-400 mt-2">
                                            Offer valid until {formatOfferExpiryDate()}
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="text-4xl font-bold text-[#007aff] mb-1">${effectivePricing.PLANS.THIRTY_DAY.discountedPrice}</div>
                                        <div className="text-sm text-gray-500 font-medium">30-days Access</div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="space-y-4 w-full max-w-sm mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500 fill-mode-both">
                        <Button
                            onClick={() => router.push('/get-premium?plan=30')}
                            className="w-full h-12 md:h-14 text-lg font-bold bg-[#007aff] hover:bg-[#0060cc] text-white rounded-xl shadow-lg shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                        >
                            <div className="flex items-center justify-center gap-2">
                                <Lock className="w-5 h-5" />
                                <span>Unlock All Questions</span>
                            </div>
                        </Button>

                        <div className="text-center">
                            <p className="text-xs text-gray-400 font-medium">
                                One time payment • 30-days access • <Link
                                    href={state === 'california' ? '/california-real-estate-practice-test#premium-section' :
                                        state === 'north-carolina' ? '/north-carolina-real-estate-practice-test#premium-section' :
                                            state === 'texas' ? '/texas-real-estate-practice-test#premium-section' :
                                                state === 'washington' ? '/washington-real-estate-practice-test#premium-section' :
                                                    `/state/${state}/free#premium-section`}
                                    className="text-[#007aff] hover:text-[#0056cc]"
                                >See All Plans</Link>
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Sticky Footer for Continue Button */}
            <div className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-white border-t border-gray-100 md:z-10 md:bg-transparent md:border-0 md:absolute md:bottom-0 md:right-12 md:left-auto md:w-auto md:p-0 w-full">
                <div className="max-w-2xl mx-auto md:mx-0 w-full">
                    <button
                        onClick={onContinue}
                        disabled={!canContinue}
                        className="relative w-full md:w-auto md:min-w-[200px] bg-white border-2 border-gray-100 text-gray-400 font-bold py-3.5 px-6 rounded-xl overflow-hidden transition-all duration-300 disabled:cursor-not-allowed hover:bg-gray-50 active:scale-95 flex items-center justify-center group"
                        style={{
                            borderColor: canContinue ? '#E5E7EB' : '#E5E7EB',
                            color: canContinue ? '#374151' : '#9CA3AF',
                            cursor: canContinue ? 'pointer' : 'default'
                        }}
                    >
                        {/* Progress Bar Background */}
                        <div
                            className="absolute inset-0 bg-[#007aff] transition-all duration-100 ease-linear origin-left"
                            style={{
                                width: canContinue ? '100%' : `${progressPercentage}%`,
                                opacity: canContinue ? 0 : 0.3
                            }}
                        />

                        <span className="relative z-10 flex items-center gap-2 text-sm md:text-base">
                            {canContinue ? (
                                <>
                                    Continue Free Practice
                                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                                </>
                            ) : (
                                <>
                                    Continue in {Math.ceil(timeLeft)}s...
                                </>
                            )}
                        </span>
                    </button>
                </div>
            </div>

        </div>
    )
}

function ArrowRight(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    )
}
