'use client'

import { useState } from 'react'
import { RoadSignQuestion } from '@/lib/road-sign-questions'
import { Button } from '@/components/ui/button'
import {
    ChevronRight,
    RotateCcw,
    CheckCircle,
    Target,
    ArrowRight,
    AlertCircle,
    X
} from 'lucide-react'
import Image from 'next/image'

interface RoadSignPracticeInterfaceProps {
    questions: RoadSignQuestion[]
    onComplete: () => void
    onExit: () => void
}

export function RoadSignPracticeInterface({
    questions,
    onComplete,
    onExit
}: RoadSignPracticeInterfaceProps) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [answers, setAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null))
    const [showExplanation, setShowExplanation] = useState(false)
    const [isCompleted, setIsCompleted] = useState(false)

    const currentQuestion = questions[currentQuestionIndex]
    const currentAnswer = answers[currentQuestionIndex]
    const answeredCount = answers.filter(a => a !== null).length

    const handleAnswerSelect = (answerIndex: number) => {
        if (currentAnswer !== null) return // Already answered

        const newAnswers = [...answers]
        newAnswers[currentQuestionIndex] = answerIndex
        setAnswers(newAnswers)
        setShowExplanation(true)
    }

    const goToNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1)
            setShowExplanation(answers[currentQuestionIndex + 1] !== null)
        }
    }

    const goToPreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1)
            setShowExplanation(answers[currentQuestionIndex - 1] !== null)
        }
    }

    const handleFinishTest = () => {
        setIsCompleted(true)
    }

    const handleRestart = () => {
        setCurrentQuestionIndex(0)
        setAnswers(new Array(questions.length).fill(null))
        setShowExplanation(false)
        setIsCompleted(false)
    }

    // Calculate score
    const correctCount = answers.reduce((count: number, answer, index) => {
        if (answer === questions[index].correctAnswer) return count + 1
        return count
    }, 0)
    const percentage = Math.round((correctCount / questions.length) * 100)

    if (isCompleted) {
        return (
            <div className="max-w-3xl mx-auto">
                <div className="bg-white rounded-xl p-8 lg:p-10 border border-gray-300 text-center" style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.04)' }}>
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 ${percentage >= 80 ? 'bg-green-100' : percentage >= 60 ? 'bg-yellow-100' : 'bg-red-100'
                        }`}>
                        {percentage >= 80 ? (
                            <CheckCircle className="w-10 h-10 text-green-600" />
                        ) : (
                            <Target className="w-10 h-10 text-gray-600" />
                        )}
                    </div>

                    <h2 className="text-3xl font-bold text-black mb-4">
                        {percentage >= 80 ? 'Excellent Work!' : 'Keep Practicing!'}
                    </h2>

                    <p className="text-lg text-gray-600 mb-6">
                        You scored <span className="font-bold text-[#007aff]">{correctCount}</span> out of <span className="font-bold">{questions.length}</span> ({percentage}%)
                    </p>

                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium mb-8 ${percentage >= 80 ? 'bg-green-100 text-green-700' :
                        percentage >= 60 ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'
                        }`}>
                        {percentage >= 80 ? '🎉 Great job! You know your road signs well' :
                            percentage >= 60 ? '📚 Good effort! Review the signs you missed' : '💪 Keep studying to improve'}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            onClick={handleRestart}
                            variant="outline"
                            className="font-semibold px-8 py-3 rounded-lg border-2 border-gray-300 hover:border-gray-400 transition-all duration-300"
                        >
                            <RotateCcw className="w-4 h-4 mr-2" />
                            Try Again
                        </Button>
                        <Button
                            onClick={onComplete}
                            className="bg-[#007aff] hover:bg-[#0056cc] text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                            <ArrowRight className="w-4 h-4 mr-2" />
                            Continue
                        </Button>
                    </div>
                </div>
            </div>
        )
    }

    const isLastQuestion = currentQuestionIndex === questions.length - 1

    return (
        <div className="max-w-3xl mx-auto pb-24 md:pb-6">
            {/* Progress Header */}
            <div className="bg-white rounded-xl p-4 md:p-5 border border-gray-300 mb-4 md:mb-5" style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.04)' }}>
                <div className="flex items-center justify-between mb-3">
                    <div>
                        <h2 className="font-semibold text-black text-base md:text-lg">
                            Question {currentQuestionIndex + 1} of {questions.length}
                        </h2>
                        <p className="text-sm text-gray-600">{currentQuestion.category}</p>
                    </div>
                    <Button
                        onClick={onExit}
                        variant="outline"
                        className="font-semibold text-red-600 border-red-300 bg-red-50 hover:border-red-400 hover:text-red-700 hover:bg-red-100 rounded-lg"
                        style={{ fontSize: '14px', padding: '8px 16px' }}
                    >
                        <X className="w-4 h-4 mr-1" />
                        Exit
                    </Button>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                        className="bg-[#007aff] h-2 rounded-full transition-all duration-300"
                        style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                    />
                </div>
            </div>

            {/* Question Card */}
            <div className="bg-white rounded-xl p-5 md:p-7 border border-gray-300 mb-4 md:mb-5" style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.04)' }}>
                {/* Image Display */}
                {currentQuestion.imageUrl && (
                    <div className="flex justify-center mb-5">
                        <div className="relative w-32 h-32 md:w-40 md:h-40">
                            <Image
                                src={currentQuestion.imageUrl}
                                alt="Road sign"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                )}

                {/* Question Text */}
                <h3 className="text-black mb-5 text-lg md:text-xl font-medium leading-relaxed text-center">
                    {currentQuestion.question}
                </h3>

                {/* Answer Options */}
                <div className="space-y-3">
                    {currentQuestion.options.map((option, index) => {
                        const isSelected = currentAnswer === index
                        const isCorrect = index === currentQuestion.correctAnswer
                        const showFeedback = showExplanation && currentAnswer !== null

                        return (
                            <button
                                key={index}
                                onClick={() => handleAnswerSelect(index)}
                                disabled={currentAnswer !== null}
                                className="w-full text-left rounded-lg border transition-all duration-200 py-4 px-4 min-h-[3.5rem] disabled:cursor-default"
                                style={{
                                    borderColor: showFeedback
                                        ? (isCorrect ? '#10b981' : isSelected ? '#ef4444' : '#E5E7EB')
                                        : (isSelected ? '#0A66FF' : '#E5E7EB'),
                                    backgroundColor: showFeedback
                                        ? (isCorrect ? '#f0fdf4' : isSelected ? '#fef2f2' : '#f9fafb')
                                        : (isSelected ? '#EFF6FF' : '#ffffff'),
                                    cursor: currentAnswer !== null ? 'default' : 'pointer'
                                }}
                            >
                                <div className="flex items-start gap-3">
                                    <span className="font-semibold text-gray-500 flex-shrink-0">{String.fromCharCode(65 + index)}.</span>
                                    <span className={`font-normal text-sm md:text-base leading-relaxed ${showFeedback
                                        ? isCorrect
                                            ? 'text-green-800'
                                            : isSelected
                                                ? 'text-red-800'
                                                : 'text-gray-600'
                                        : 'text-gray-900'
                                        }`}>
                                        {option}
                                    </span>
                                </div>
                            </button>
                        )
                    })}
                </div>
            </div>

            {/* Explanation */}
            {showExplanation && currentAnswer !== null && (
                <div className="bg-white rounded-xl p-5 border border-gray-300 mb-4 md:mb-5" style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.04)' }}>
                    <div className="flex items-start gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${currentAnswer === currentQuestion.correctAnswer ? 'bg-green-100' : 'bg-red-100'
                            }`}>
                            {currentAnswer === currentQuestion.correctAnswer ? (
                                <CheckCircle className="w-5 h-5 text-green-600" />
                            ) : (
                                <AlertCircle className="w-5 h-5 text-red-600" />
                            )}
                        </div>
                        <div>
                            <h4 className={`font-bold text-base mb-1 ${currentAnswer === currentQuestion.correctAnswer ? 'text-green-800' : 'text-red-800'
                                }`}>
                                {currentAnswer === currentQuestion.correctAnswer ? 'Correct!' : 'Incorrect'}
                            </h4>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                {currentQuestion.explanation}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* Navigation - Desktop */}
            <div className="hidden md:flex justify-between items-center mt-5">
                <Button
                    onClick={goToPreviousQuestion}
                    disabled={currentQuestionIndex === 0}
                    variant="outline"
                    className="text-gray-600 border-gray-300 hover:border-gray-400 hover:text-gray-700 bg-transparent rounded-lg disabled:opacity-50"
                    style={{ padding: '12px 20px', fontSize: '15px' }}
                >
                    Previous
                </Button>

                <Button
                    onClick={isLastQuestion ? handleFinishTest : goToNextQuestion}
                    disabled={currentAnswer === null}
                    className="text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                        background: currentAnswer !== null ? '#0A66FF' : '#9CA3AF',
                        fontWeight: '600',
                        fontSize: '15px',
                        padding: '12px 24px'
                    }}
                >
                    {isLastQuestion ? 'Finish Test' : 'Next Question'}
                    <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
            </div>

            {/* Navigation - Mobile Sticky */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-40">
                <div className="flex gap-3">
                    <Button
                        onClick={goToPreviousQuestion}
                        disabled={currentQuestionIndex === 0}
                        variant="outline"
                        className="flex-1 text-gray-600 border-gray-300 hover:border-gray-400 hover:text-gray-700 bg-transparent rounded-lg disabled:opacity-50"
                        style={{ padding: '12px 20px', fontSize: '15px' }}
                    >
                        Previous
                    </Button>
                    <Button
                        onClick={isLastQuestion ? handleFinishTest : goToNextQuestion}
                        disabled={currentAnswer === null}
                        className="flex-1 text-white rounded-lg disabled:opacity-50"
                        style={{
                            background: currentAnswer !== null ? '#0A66FF' : '#9CA3AF',
                            fontWeight: '600',
                            fontSize: '15px',
                            padding: '12px 24px'
                        }}
                    >
                        {isLastQuestion ? 'Finish' : 'Next'}
                    </Button>
                </div>
            </div>
        </div>
    )
}
