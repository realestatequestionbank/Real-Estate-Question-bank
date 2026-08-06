'use client'

import { useState, useEffect, useCallback } from 'react'
import { Question } from './questions'
import { CheckCircle, XCircle, AlertCircle, RefreshCw, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

import { Crown } from 'lucide-react'

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
            window.location.href = '/get-premium'
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
                        ? "You have a solid understanding of fines & limits. Keep practicing to maintain your knowledge."
                        : "Review the rules and try again. Knowing fines and limits is key to avoiding penalties."
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

                {showPremiumUpsell && (
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-8 border border-blue-100 text-left relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Crown className="w-24 h-24 text-blue-500" />
                        </div>
                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                                <Crown className="w-3.5 h-3.5" />
                                Premium
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Want to guarantee a pass?</h3>
                            <p className="text-gray-600 mb-4 text-sm max-w-md">
                                Unlock 2000 state-specific questions, detailed explanations, and our Pass Guarantee.
                            </p>
                            <Button 
                                className="bg-[#007aff] hover:bg-[#0056cc] text-white w-full sm:w-auto font-medium"
                                onClick={handleUnlockPremium}
                            >
                                Unlock Premium Now
                            </Button>
                        </div>
                    </div>
                )}

                <div className="text-sm text-gray-500 mb-6">
                    Press <kbd className="px-2 py-1 bg-gray-100 rounded text-xs font-mono">Enter</kbd> to retake
                </div>

                <Button
                    onClick={handleRetry}
                    size="lg"
                    className="w-full sm:w-auto min-w-[200px] bg-[#007aff] hover:bg-[#0056cc]"
                >
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Retake Test
                </Button>
            </div>
        )
    }

    return (
        <div className="max-w-3xl mx-auto">


            {/* Progress Bar */}
            <div className="mb-8">
                <div className="flex justify-between text-sm font-medium text-gray-500 mb-2">
                    <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
                    <span>{Math.round(((currentQuestionIndex) / questions.length) * 100)}% Complete</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-[#007aff] transition-all duration-300"
                        style={{ width: `${((currentQuestionIndex) / questions.length) * 100}%` }}
                    />
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                {/* Question Header */}
                <div className="p-6 md:p-8 bg-gray-50 border-b border-gray-100">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-normal">
                        {currentQuestion.question}
                    </h3>
                </div>

                {/* Options */}
                <div className="p-6 md:p-8 space-y-3">
                    {currentQuestion.options.map((option, index) => {
                        const isSelected = selectedAnswer === index
                        const isCorrect = index === currentQuestion.correctAnswer
                        const showCorrect = isAnswered && isCorrect
                        const showWrong = isAnswered && isSelected && !isCorrect

                        return (
                            <button
                                key={index}
                                onClick={() => handleSelectAnswer(index)}
                                disabled={isAnswered}
                                className={cn(
                                    "w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-between group",
                                    !isAnswered && !isSelected && "border-gray-200 hover:border-blue-300 hover:bg-blue-50",
                                    !isAnswered && isSelected && "border-[#007aff] bg-blue-50 ring-1 ring-[#007aff]",
                                    showCorrect && "border-green-500 bg-green-50",
                                    showWrong && "border-red-500 bg-red-50",
                                    isAnswered && !showCorrect && !showWrong && "border-gray-100 bg-gray-50 opacity-60"
                                )}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={cn(
                                        "w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold text-sm transition-colors flex-shrink-0",
                                        !isAnswered && !isSelected && "border-gray-300 text-gray-500 group-hover:border-blue-400 group-hover:text-blue-600",
                                        !isAnswered && isSelected && "border-[#007aff] bg-[#007aff] text-white",
                                        showCorrect && "border-green-500 bg-green-500 text-white",
                                        showWrong && "border-red-500 bg-red-500 text-white",
                                        isAnswered && !showCorrect && !showWrong && "border-gray-300 text-gray-400"
                                    )}>
                                        {String.fromCharCode(65 + index)}
                                    </div>
                                    <span className={cn(
                                        "font-medium",
                                        !isAnswered && "text-gray-700",
                                        showCorrect && "text-green-800",
                                        showWrong && "text-red-800",
                                        isAnswered && !showCorrect && !showWrong && "text-gray-400"
                                    )}>
                                        {option}
                                    </span>
                                </div>

                                {showCorrect && <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />}
                                {showWrong && <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />}
                            </button>
                        )
                    })}
                </div>

                {/* Premium Inline Ad */}
                {showPremiumUpsell && (
                    <div className="mx-6 md:mx-8 mb-6 p-4 md:p-5 bg-gradient-to-r from-[#f0f7ff] to-blue-50 border border-blue-100 rounded-xl flex flex-col sm:flex-row items-center gap-4 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                            <Crown className="w-24 h-24 text-blue-900 transform rotate-12" />
                        </div>
                        
                        <div className="bg-white p-3 rounded-full shadow-sm flex-shrink-0 relative z-10 hidden sm:flex">
                            <Crown className="w-6 h-6 text-yellow-500" />
                        </div>
                        
                        <div className="flex-1 text-center sm:text-left relative z-10">
                            <h4 className="text-gray-900 font-bold text-base md:text-lg mb-1">
                                Pass your real estate exam on the first try
                            </h4>
                            <p className="text-gray-600 text-sm">
                                Unlock all 2000 state-specific questions, detailed explanations, and our Pass Guarantee.
                            </p>
                        </div>
                        
                        <Button 
                            className="w-full sm:w-auto bg-[#007aff] hover:bg-[#0056cc] text-white font-medium flex-shrink-0 relative z-10 shadow-sm"
                            onClick={handleUnlockPremium}
                        >
                            Unlock Premium
                        </Button>
                    </div>
                )}

                {/* Explanation & Action Area */}
                {isAnswered && (
                    <div className="bg-blue-50/50 p-6 md:p-8 border-t border-blue-100 animate-in fade-in slide-in-from-bottom-4 duration-300">
                        <div className="flex items-start gap-3 mb-6">
                            <div className="bg-blue-100 text-blue-600 p-2 rounded-lg mt-0.5">
                                <AlertCircle className="w-5 h-5" />
                            </div>
                            <div className="flex-1">
                                <h4 className="font-bold text-blue-900 mb-1">Explanation</h4>
                                <p className="text-blue-800 leading-relaxed">
                                    {currentQuestion.explanation}
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <Button
                                onClick={handleNext}
                                size="lg"
                                className="bg-[#007aff] hover:bg-[#0056cc] shadow-md hover:shadow-lg transition-all"
                            >
                                {currentQuestionIndex < questions.length - 1 ? "Next Question" : "See Results"}
                                <ChevronRight className="w-4 h-4 ml-2" />
                            </Button>
                        </div>
                    </div>
                )}


            </div>
        </div>
    )
}
