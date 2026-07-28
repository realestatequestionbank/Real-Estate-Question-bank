'use client'

import { cn } from '@/lib/utils'

interface QuestionNavigatorProps {
    totalQuestions: number
    currentIndex: number
    answers: (number | null)[]
    questions: { id: string; correctAnswer: number }[]
    previousAttempts?: { [questionId: string]: { attempted: boolean; correct: boolean } }
    questionNumberStatus?: { correct: Array<{ questionNumber: number; chosenOption: number }>; incorrect: Array<{ questionNumber: number; chosenOption: number }>; unattempted: number[] }
    newAnswersInSession?: Set<number>
    onQuestionSelect: (index: number) => void
}

export function QuestionNavigator({
    totalQuestions,
    currentIndex,
    answers,
    questions,
    previousAttempts = {},
    questionNumberStatus,
    newAnswersInSession,
    onQuestionSelect
}: QuestionNavigatorProps) {
    const getQuestionStatus = (index: number): 'current' | 'correct' | 'incorrect' | 'unattempted' => {
        const question = questions[index]
        const answer = answers[index]
        const questionNumber = index + 1

        if (index === currentIndex) return 'current'

        const answeredInCurrentSession = newAnswersInSession?.has(index) || false

        if (answeredInCurrentSession && answer !== null) {
            return answer === question?.correctAnswer ? 'correct' : 'incorrect'
        }

        if (questionNumberStatus && !answeredInCurrentSession) {
            if (questionNumberStatus.correct.some(item => item.questionNumber === questionNumber)) return 'correct'
            if (questionNumberStatus.incorrect.some(item => item.questionNumber === questionNumber)) return 'incorrect'
        }

        if (answer !== null && !questionNumberStatus) {
            return answer === question?.correctAnswer ? 'correct' : 'incorrect'
        }

        return 'unattempted'
    }

    const correctCount = Array.from({ length: totalQuestions }, (_, i) => getQuestionStatus(i)).filter(s => s === 'correct').length
    const incorrectCount = Array.from({ length: totalQuestions }, (_, i) => getQuestionStatus(i)).filter(s => s === 'incorrect').length
    const answeredCount = correctCount + incorrectCount
    const pct = totalQuestions > 0 ? Math.round((answeredCount / totalQuestions) * 100) : 0

    const getButtonStyle = (status: string): React.CSSProperties => {
        if (status === 'current')    return { backgroundColor: '#007aff', color: '#fff', border: '1.5px solid #007aff', boxShadow: '0 0 0 2px rgba(0,122,255,0.2)' }
        if (status === 'correct')   return { backgroundColor: '#d1fae5', color: '#065f46', border: '1.5px solid #6ee7b7' }
        if (status === 'incorrect') return { backgroundColor: '#fee2e2', color: '#991b1b', border: '1.5px solid #fca5a5' }
        return { backgroundColor: '#f3f4f6', color: '#9ca3af', border: '1.5px solid #e5e7eb' }
    }

    return (
        <div className="select-none">
            {/* Compact progress bar header */}
            <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-gray-700">{answeredCount}/{totalQuestions} answered</span>
                <div className="flex items-center gap-2 text-xs">
                    <span className="font-medium" style={{ color: '#059669' }}>✓ {correctCount}</span>
                    <span className="font-medium" style={{ color: '#dc2626' }}>✗ {incorrectCount}</span>
                </div>
            </div>

            {/* Slim progress bar */}
            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mb-4">
                <div className="h-full rounded-full transition-all duration-500"
                    style={{ width: `${pct}%`, backgroundColor: pct === 100 ? '#10b981' : '#007aff' }} />
            </div>

            {/* Question Grid — 8 columns for compactness */}
            <div className="grid grid-cols-8 gap-1">
                {Array.from({ length: totalQuestions }, (_, index) => {
                    const status = getQuestionStatus(index)
                    return (
                        <button
                            key={index}
                            onClick={() => onQuestionSelect(index)}
                            title={`Q${index + 1} — ${status}`}
                            className="w-full aspect-square rounded font-semibold transition-all duration-100 hover:scale-110 active:scale-95 focus:outline-none"
                            style={{ fontSize: '10px', ...getButtonStyle(status) }}
                        >
                            {index + 1}
                        </button>
                    )
                })}
            </div>

            {/* Inline legend */}
            <div className="flex items-center gap-3 mt-3 pt-3 border-t border-gray-100 flex-wrap">
                {[
                    { color: '#007aff', bg: 'rgba(0,122,255,0.12)', label: 'Current' },
                    { color: '#9ca3af', bg: '#f3f4f6',              label: 'Not done' },
                    { color: '#059669', bg: '#d1fae5',              label: 'Correct' },
                    { color: '#dc2626', bg: '#fee2e2',              label: 'Wrong' },
                ].map(({ color, bg, label }) => (
                    <div key={label} className="flex items-center gap-1">
                        <div className="w-3 h-3 rounded shrink-0" style={{ backgroundColor: bg, border: `1px solid ${color}33` }} />
                        <span className="text-xs text-gray-400">{label}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
