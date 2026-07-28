import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CheckCircle, Crown, Lock } from 'lucide-react'
import { formatOfferExpiryDate, PRICING, getEffectivePricing, isFlashSaleActive } from '@/lib/constants'
import { formatQuestionCount } from '@/lib/utils/formatQuestionCount'

interface TestCompletePromoCardProps {
    testNumber: number
    score: {
        correct: number
        total: number
        percentage: number
    }
    onContinue: () => void
    onUpgrade: () => void
    stateName: string
    state: string
    nextTestNumber?: number
    questionCount?: number
}

export function TestCompletePromoCard({
    testNumber,
    score,
    onContinue,
    onUpgrade,
    stateName,
    state,
    nextTestNumber,
    questionCount = 500
}: TestCompletePromoCardProps) {
    const router = useRouter()
    const [timeLeft, setTimeLeft] = useState(10)
    const [canContinue, setCanContinue] = useState(false)
    const [touchEnd, setTouchEnd] = useState<number | null>(null)
    const effectivePricing = getEffectivePricing()

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 0.1) {
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
        <div className="w-full min-h-screen md:min-h-0 md:h-auto bg-white overflow-hidden flex flex-col animate-in fade-in duration-300 relative" style={{ margin: 0 }}>
            {/* Blue background for headline area - extends full width */}
            <div className="absolute top-0 left-0 right-0 h-72 md:h-64 bg-[#007aff] pointer-events-none" />

            {/* Main Content Area */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden relative z-10">
                <div className="px-4 md:px-8 pt-6 md:pt-8 pb-24 md:pb-8 max-w-3xl mx-auto flex flex-col h-full justify-center">

                    {/* Header Content - Test Complete + Score */}
                    <div className="text-center mb-8">
                        {/* Subheadline first */}
                        <p className="text-base md:text-lg text-white/80 font-normal mb-4 animate-in fade-in slide-in-from-bottom-3 duration-700 fill-mode-both">
                            Practice Test {testNumber} Complete
                        </p>

                        {/* Large score headline */}
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 ease-out fill-mode-both">
                            You scored {score.correct} out of {score.total}
                        </h2>

                        {/* Percentage badge */}
                        <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 text-white font-bold text-lg backdrop-blur-sm animate-in zoom-in duration-500 delay-200">
                            {score.percentage}%
                        </div>
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
                                    <span className="font-medium text-gray-700 text-sm md:text-base">Based on {stateName} 2026 Manual</span>
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
                                    href={state === 'california' ? '/california-real-estate-permit-test#premium-section' :
                                        state === 'north-carolina' ? '/north-carolina-real-estate-permit-test#premium-section' :
                                            state === 'texas' ? '/texas-dps-permit-test#premium-section' :
                                                state === 'washington' ? '/washington-dol-permit-test#premium-section' :
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
                                    {nextTestNumber ? (
                                        <>Jump to Practice Test {nextTestNumber}</>
                                    ) : (
                                        <>Back to All Tests</>
                                    )}
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
