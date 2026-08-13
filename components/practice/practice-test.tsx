'use client'

import { useState, useEffect, useCallback } from 'react'
import { CheckCircle, XCircle, AlertCircle, RefreshCw, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Crown } from 'lucide-react'

export type Question = {
    id: number
    question: string
    options: string[]
    correctAnswer: number // 0-3 index
    explanation: string
}

interface PracticeTestProps {
    questions: Question[]
    showPremiumUpsell?: boolean
}

export function PracticeTest({ questions, showPremiumUpsell }: PracticeTestProps) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
    const [isAnswered, setIsAnswered] = useState(false)
    const [score, setScore] = useState(0)
    const [showResults, setShowResults] = useState(false)
    const [history, setHistory] = useState<{ questionId: number, isCorrect: boolean }[]>([])

    const currentQuestion = questions[currentQuestionIndex]

    const handleSelectAnswer = useCallback((index: number) => {
        if (isAnswered) return
        setSelectedAnswer(index)
        
        const isCorrect = index === currentQuestion.correctAnswer
        setIsAnswered(true)

        if (isCorrect) {
            setScore(prev => prev + 1)
        }

    }, [isAnswered, currentQuestion])

    const handleUnlockPremium = useCallback(() => {
        const el = document.getElementById('premium-section')
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' })
        } else {
            window.location.href = '/real-estate-premium'
        }
    }, [])

    const handleSubmit = useCallback(() => {
        if (selectedAnswer === null) return

        const isCorrect = selectedAnswer === currentQuestion.correctAnswer
        setIsAnswered(true)

        if (isCorrect) {
            setScore(prev => prev + 1)
        }

        setHistory(prev => [...prev, { questionId: currentQuestion.id, isCorrect }])
    }, [selectedAnswer, currentQuestion])

    const handleNext = useCallback(() => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1)
            setSelectedAnswer(null)
            setIsAnswered(false)
        } else {
            setShowResults(true)
        }
    }, [currentQuestionIndex, questions.length])

    const handleRetry = useCallback(() => {
        setCurrentQuestionIndex(0)
        setSelectedAnswer(null)
        setIsAnswered(false)
        setScore(0)
        setShowResults(false)
        setHistory([])
    }, [])

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (showResults) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    handleRetry()
                }
                return
            }

            // Number keys 1-4 to select answer
            if (!isAnswered && ['1', '2', '3', '4'].includes(e.key)) {
                const index = parseInt(e.key) - 1
                if (index < currentQuestion.options.length) {
                    handleSelectAnswer(index)
                }
            }

            // Enter to submit or proceed
            if (e.key === 'Enter') {
                e.preventDefault()
                if (isAnswered) {
                    handleNext()
                } else if (selectedAnswer !== null) {
                    handleSubmit()
                }
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [showResults, isAnswered, selectedAnswer, currentQuestion, handleSelectAnswer, handleSubmit, handleNext, handleRetry])

    if (showResults) {
        const percentage = Math.round((score / questions.length) * 100)
        const passed = percentage >= 80

        return (
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12 text-center max-w-2xl mx-auto">
                <div className={cn(
                    "w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6",
                    passed ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                )}>
                    {passed ? <CheckCircle className="w-12 h-12" /> : <XCircle className="w-12 h-12" />}
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    {passed ? "Great Job! Test Passed" : "Needs Improvement"}
                </h2>

                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    {passed
                        ? "You have a solid understanding of the material. Keep practicing to maintain your knowledge."
                        : "Review the questions and try again. Practice is key to passing your exam."
                    }
                </p>

                <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="bg-gray-50 rounded-xl p-4">
                        <div className="text-2xl font-bold text-gray-900">{score}</div>
                        <div className="text-xs text-gray-500 uppercase tracking-wide">Correct</div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                        <div className="text-2xl font-bold text-gray-900">{questions.length}</div>
                        <div className="text-xs text-gray-500 uppercase tracking-wide">Total</div>
                    </div>
                    <div className={cn("rounded-xl p-4", passed ? "bg-green-50" : "bg-red-50")}>
                        <div className={cn("text-2xl font-bold", passed ? "text-green-700" : "text-red-700")}>{percentage}%</div>
                        <div className={cn("text-xs uppercase tracking-wide", passed ? "text-green-600" : "text-red-600")}>Score</div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button onClick={handleRetry} className="w-full sm:w-auto bg-[#007aff] hover:bg-[#0056cc] text-white px-8 py-3 rounded-xl font-bold transition-all shadow-md flex items-center justify-center gap-2">
                        <RefreshCw className="w-4 h-4" />
                        Retry Test
                    </Button>
                    {showPremiumUpsell && (
                        <Button onClick={handleUnlockPremium} className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-md flex items-center justify-center gap-2 border border-amber-600">
                            <Crown className="w-4 h-4 fill-white" />
                            Unlock All Questions
                        </Button>
                    )}
                </div>
            </div>
        )
    }

    const progressPercentage = Math.round((currentQuestionIndex / questions.length) * 100)

    return (
        <div className="max-w-3xl mx-auto">
            {/* Progress bar */}
            <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-gray-700">Question {currentQuestionIndex + 1} of {questions.length}</span>
                    <span className="text-sm font-semibold text-gray-700">{progressPercentage}% Complete</span>
                </div>
                <div className="w-full bg-gray-150 h-2 rounded-full overflow-hidden">
                    <div
                        className="bg-[#007aff] h-full transition-all duration-300"
                        style={{ width: `${progressPercentage}%` }}
                    />
                </div>
            </div>

            {/* Question card */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 leading-snug">
                    {currentQuestion.question}
                </h3>

                <div className="space-y-4">
                    {currentQuestion.options.map((option, index) => {
                        const isSelected = selectedAnswer === index
                        const isCorrectOption = index === currentQuestion.correctAnswer

                        let optionStyle = "border-gray-200 hover:border-gray-300 hover:bg-gray-50/50"
                        if (isAnswered) {
                            if (isCorrectOption) {
                                optionStyle = "border-green-500 bg-green-50 text-green-900"
                            } else if (isSelected) {
                                optionStyle = "border-red-500 bg-red-50 text-red-900"
                            } else {
                                optionStyle = "border-gray-200 opacity-60"
                            }
                        } else if (isSelected) {
                            optionStyle = "border-blue-500 bg-blue-50/50 text-[#007aff]"
                        }

                        return (
                            <button
                                key={index}
                                onClick={() => handleSelectAnswer(index)}
                                disabled={isAnswered}
                                className={cn(
                                    "w-full text-left p-4 md:p-5 rounded-xl border-2 transition-all duration-150 flex items-center justify-between text-base font-semibold group",
                                    optionStyle
                                )}
                            >
                                <span className="flex-1 pr-4">{option}</span>
                                {isAnswered && isCorrectOption && <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />}
                                {isAnswered && isSelected && !isCorrectOption && <XCircle className="w-5 h-5 text-red-500 shrink-0" />}
                            </button>
                        )
                    })}
                </div>

                {isAnswered && (
                    <div className="mt-8 p-5 bg-[#007aff]/5 rounded-xl border border-[#007aff]/10 animate-in slide-in-from-bottom-2 duration-300">
                        <div className="flex gap-2.5">
                            <AlertCircle className="w-5 h-5 text-[#007aff] shrink-0 mt-0.5" />
                            <div>
                                <h4 className="font-bold text-gray-900 text-sm mb-1">Explanation</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {currentQuestion.explanation}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-end">
                {isAnswered && (
                    <Button onClick={handleNext} className="bg-[#007aff] hover:bg-[#0056cc] text-white px-8 py-3 rounded-xl font-bold transition-all shadow-md flex items-center gap-1.5 h-12">
                        {currentQuestionIndex === questions.length - 1 ? 'Show Results' : 'Next Question'}
                        <ChevronRight className="w-4 h-4" />
                    </Button>
                )}
            </div>
        </div>
    )
}
