'use client'

import { useState, useEffect, useRef } from 'react'
import { Question, PracticeSession } from '@/lib/types/question'
import { QuestionCard } from './question-card'
import { QuestionNavigator } from './question-navigator'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import {
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  CheckCircle,
  Clock,
  Target,
  ArrowRight,
  ArrowLeft,
  Grid3X3,
  X,
  AlertCircle,
  Lock
} from 'lucide-react'
import { calculateScore, analyzeCategoryPerformance } from '@/lib/services/question-service'
import { saveQuestionProgress, loadQuestionProgress } from '@/lib/services/progress-service'
import { cn } from '@/lib/utils'

interface PracticeInterfaceProps {
  questions: Question[]
  state: string
  isPremium: boolean
  startingQuestionNumber?: number
  onComplete: (session: Partial<PracticeSession>) => void
  onExit: () => void
  chapter?: string | null
  mode?: string | null
  user?: any
  userData?: any
  premiumStatus?: 'never_purchased' | 'active' | 'expired'
  onDashboard?: () => void
  onLogout?: () => void
  lang?: 'en' | 'pa'
  // DEPRECATED: These props are no longer used - progress is loaded automatically
  previousAttempts?: { [questionId: string]: { attempted: boolean; correct: boolean; lastAnswer: number | null; attempts: number } }
  questionNumberStatus?: { correct: Array<{ questionNumber: number; chosenOption: number }>; incorrect: Array<{ questionNumber: number; chosenOption: number }>; unattempted: number[] }
}

export function PracticeInterface({
  questions,
  state,
  isPremium,
  startingQuestionNumber = 1,
  onComplete,
  onExit,
  chapter,
  mode,
  user,
  userData,
  premiumStatus = 'active',
  onDashboard,
  onLogout,
  lang = 'en'
}: PracticeInterfaceProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<(number | null)[]>([])

  const t = (enText: string) => {
    if (lang === 'pa') {
      const paStrings: Record<string, string> = {
        "Question": "ਪ੍ਰਸ਼ਨ",
        "of": "ਵਿੱਚੋਂ",
        "Practice Completed": "ਅਭਿਆਸ ਪੂਰਾ ਹੋਇਆ",
        "Congratulations! You've finished this practice session.": "ਵਧਾਈਆਂ! ਤੁਸੀਂ ਇਹ ਅਭਿਆਸ ਸੈਸ਼ਨ ਪੂਰਾ ਕਰ ਲਿਆ ਹੈ।",
        "Completed": "ਪੂਰਾ ਹੋਇਆ",
        "Correct": "ਸਹੀ",
        "Incorrect": "ਗਲਤ",
        "Accuracy": "ਸ਼ੁੱਧਤਾ",
        "Time Spent": "ਲੱਗਿਆ ਸਮਾਂ",
        "Back to Dashboard": "ਡੈਸ਼ਬੋਰਡ 'ਤੇ ਵਾਪਸ ਜਾਓ",
        "Restart Practice": "ਅਭਿਆਸ ਦੁਬਾਰਾ ਸ਼ੁਰੂ ਕਰੋ",
        "Explanation": "ਵਿਆਖਿਆ",
        "Exit Practice": "ਅਭਿਆਸ ਤੋਂ ਬਾਹਰ ਜਾਓ",
        "Correct!": "ਸਹੀ!",
        "Incorrect!": "ਗਲਤ!",
        "Finish Test": "ਪ੍ਰੀਖਿਆ ਪੂਰੀ ਕਰੋ",
        "Next Question": "ਅਗਲਾ ਪ੍ਰਸ਼ਨ",
        "Previous": "ਪਿੱਛੇ",
        "Next": "ਅਗਲਾ",
        "Finish": "ਪੂਰਾ ਕਰੋ"
      }
      return paStrings[enText] || enText
    }
    return enText
  }
  const [showExplanations, setShowExplanations] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)
  const [startTime] = useState(new Date())
  const [isNavigatorOpen, setIsNavigatorOpen] = useState(false)

  // Track which questions were answered in THIS session (not pre-filled)
  const newAnswersInSession = useRef<Set<number>>(new Set())

  // SIMPLIFIED: Initialize answers array by loading saved progress
  useEffect(() => {
    if (questions.length > 0 && user?.uid) {
      // Load saved progress for these specific questions
      const loadProgress = async () => {
        try {
          const savedProgress = await loadQuestionProgress(
            user.uid, 
            state, 
            questions.map(q => q.id)
          )
          
          // Map saved answers to question array
          const initialAnswers = questions.map(question => {
            const saved = savedProgress[question.id]
            return saved?.answer ?? null
          })
          
          setAnswers(initialAnswers)
          
          // Find first unanswered question or start from specified position
          let startIndex = 0
          if (startingQuestionNumber > 0) {
            startIndex = startingQuestionNumber - 1
          } else {
            // Find first null (unanswered) question
            const firstUnanswered = initialAnswers.findIndex(answer => answer === null)
            if (firstUnanswered !== -1) {
              startIndex = firstUnanswered
            }
          }
          
          const clampedStartIndex = Math.max(0, Math.min(startIndex, questions.length - 1))
          setCurrentQuestionIndex(clampedStartIndex)
          
          setShowExplanations(false)
          setIsCompleted(false)
          newAnswersInSession.current = new Set()
          
          console.log('🔄 Loaded practice session:', {
            totalQuestions: questions.length,
            answeredQuestions: initialAnswers.filter(a => a !== null).length,
            startingFromQuestion: clampedStartIndex + 1
          })
        } catch (error) {
          console.error('Failed to load progress:', error)
          // Fallback to empty answers if loading fails
          setAnswers(new Array(questions.length).fill(null))
          setCurrentQuestionIndex(0)
        }
      }
      
      loadProgress()
    }
  }, [questions.length, user?.uid, state])

  const currentQuestion = questions[currentQuestionIndex]
  const currentAnswer = answers[currentQuestionIndex]
  const answeredCount = answers.filter(answer => answer !== null).length
  const progress = questions.length > 0 ? (answeredCount / questions.length) * 100 : 0

  const handleAnswerSelect = async (answerIndex: number) => {
    const questionNumber = currentQuestionIndex + 1
    const isCorrect = answerIndex === questions[currentQuestionIndex]?.correctAnswer
    const questionId = questions[currentQuestionIndex]?.id
    
    console.log('🎯 Answer selected:', {
      questionNumber,
      answerIndex,
      isCorrect: isCorrect ? 'CORRECT' : 'INCORRECT',
      questionId
    })
    
    // Update local state immediately
    const newAnswers = [...answers]
    newAnswers[currentQuestionIndex] = answerIndex
    setAnswers(newAnswers)

    // Track that this question was answered in THIS session
    newAnswersInSession.current.add(currentQuestionIndex)

    setShowExplanations(true)

    // SAVE IMMEDIATELY to prevent data loss
    if (user?.uid && questionId) {
      try {
        await saveQuestionProgress({
          userId: user.uid,
          state: state,
          questionId: questionId,
          answer: answerIndex,
          correct: isCorrect,
          timestamp: Date.now(),
          chapter: chapter || undefined
        })
        console.log(`✅ Question ${questionNumber} progress saved instantly`)
      } catch (error) {
        console.error('❌ Failed to save question progress:', error)
        // Could add toast notification here to inform user
      }
    }
    
    console.log(`✓ Question ${questionNumber} navigator should show: ${isCorrect ? 'GREEN' : 'RED'}`)
  }

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      // Reset explanation state when navigating to next question
      const nextAnswer = answers[currentQuestionIndex + 1]
      setShowExplanations(nextAnswer !== null)
    }
  }

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
      // Reset explanation state when navigating to previous question
      const prevAnswer = answers[currentQuestionIndex - 1]
      setShowExplanations(prevAnswer !== null)
    }
  }

  const goToQuestion = (index: number) => {
    setCurrentQuestionIndex(index)
    // Reset explanation state when jumping to a question
    const targetAnswer = answers[index]
    setShowExplanations(targetAnswer !== null)
  }

  const toggleExplanations = () => {
    setShowExplanations(!showExplanations)
  }

  const handleFinishPractice = () => {
    const endTime = new Date()

    // Only include questions that were answered in THIS session
    const newAnswerIndices = Array.from(newAnswersInSession.current)
    const sessionQuestions = newAnswerIndices.map(i => questions[i])
    const sessionAnswers = newAnswerIndices.map(i => answers[i])

    // Calculate score based on all answers for display, but only save new ones
    const scoreData = calculateScore(questions, answers)

    const session: Partial<PracticeSession> = {
      state,
      questions: sessionQuestions,  // Only questions answered this session
      answers: sessionAnswers,       // Only answers from this session
      startTime,
      endTime,
      score: scoreData.percentage,
      isPremium,
      completed: true
    }

    console.log('🎉 Finishing practice:', {
      totalAnswered: answers.filter(a => a !== null).length,
      newThisSession: newAnswerIndices.length,
      questionsToSave: sessionQuestions.map(q => q.id)
    })

    setIsCompleted(true)
    onComplete(session)
  }

  const handleRestart = () => {
    setCurrentQuestionIndex(0)
    setAnswers(new Array(questions.length).fill(null))
    setShowExplanations(false)
    setIsCompleted(false)
  }

  const handleSaveAndExit = async (navigationAction?: any) => {
    // Only save if there are NEW answers from this session
    const newAnswerIndices = Array.from(newAnswersInSession.current)

    if (newAnswerIndices.length > 0 && !isCompleted) {
      const endTime = new Date()

      // Only include questions that were answered in THIS session
      const sessionQuestions = newAnswerIndices.map(i => questions[i])
      const sessionAnswers = newAnswerIndices.map(i => answers[i])

      const scoreData = calculateScore(sessionQuestions, sessionAnswers)

      const session: Partial<PracticeSession> = {
        state,
        questions: sessionQuestions,  // Only questions answered this session
        answers: sessionAnswers,       // Only answers from this session
        startTime,
        endTime,
        score: scoreData.percentage,
        isPremium,
        completed: false // Mark as partial
      }

      console.log('💾 Saving partial progress before exit...')
      console.log('Session data:', {
        totalAnswered: answers.filter(a => a !== null).length,
        newThisSession: newAnswerIndices.length,
        questionsToSave: sessionQuestions.map(q => q.id)
      })

      try {
        await onComplete(session)
        console.log('✅ Progress saved successfully')
      } catch (err) {
        console.error('❌ Save failed:', err)
        // Still navigate even if save fails
      }
    } else {
      console.log('ℹ️ No new progress to save or already completed')
    }

    // Navigate after save attempt (successful or failed)
    if (typeof navigationAction === 'function') {
      console.log('🔄 Executing custom navigation action')
      navigationAction()
    } else {
      console.log('🚪 Executing default exit handler')
      onExit()
    }
  }

  if (isCompleted) {
    const scoreData = calculateScore(questions, answers)

    return (
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl p-8 lg:p-10 border border-gray-300 text-center" style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.04)' }}>
          <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 ${scoreData.percentage >= 80 ? 'bg-green-100' : scoreData.percentage >= 60 ? 'bg-yellow-100' : 'bg-red-100'
            }`}>
            {scoreData.percentage >= 80 ? (
              <CheckCircle className="w-10 h-10 text-green-600" />
            ) : (
              <Target className="w-10 h-10 text-gray-600" />
            )}
          </div>

          <h2 className="text-3xl font-bold text-black mb-6">
            {scoreData.percentage >= 80 ? 'Excellent Work!' : 'Keep Practicing!'}
          </h2>

          <p className="text-lg text-gray-600 mb-8">
            You attempted {answeredCount} questions out of {questions.length} and answered {scoreData.correctCount} of them correctly.
          </p>

          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium mb-8 ${scoreData.percentage >= 80 ? 'bg-green-100 text-green-700' :
            scoreData.percentage >= 60 ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'
            }`}>
            {scoreData.percentage >= 80 ? '🎉 Excellent! You\'re ready for the real test' :
              scoreData.percentage >= 60 ? '📚 Good work! A bit more practice will help' : '💪 Keep studying to improve your score'}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleRestart}
              variant="outline"
              className="font-semibold px-8 py-3 rounded-lg border-2 border-gray-300 hover:border-gray-400 transition-all duration-300"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Practice Again
            </Button>
            <Button
              onClick={onExit}
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

  // Determine page context for back arrow text
  const getBackText = () => {
    if (mode === 'uncommon-sense') return 'Uncommon Sense'
    if (chapter) return 'Question Bank'
    return 'Dashboard'
  }


  return (
    <div className="max-w-4xl mx-auto pb-28">
      {/* Main Layout - Centered Content */}
      <div className="w-full">
        {/* Progress + Content */}
        <div className="w-full">
          {/* Progress Header - Compact */}
          <div className="mb-4 md:mb-5 px-1 py-1">
            <div className="flex items-center justify-between mb-2 md:mb-3">
              <div>
                <h2 className="font-semibold text-black text-base md:text-lg">
                  {t("Question")} {currentQuestionIndex + 1} {t("of")} {questions.length}
                </h2>
                {/* Hide category on mobile */}
                {currentQuestion && (
                  <p className="hidden md:block text-sm text-gray-600">{currentQuestion?.category || chapter}</p>
                )}
              </div>
              <div className="flex gap-2">
                {/* Grid button - Desktop only, hide for uncommon-sense mode */}
                {mode !== 'uncommon-sense' && (
                  <Button
                    onClick={() => setIsNavigatorOpen(true)}
                    variant="outline"
                    className="hidden lg:flex font-semibold text-gray-600 border-gray-300 hover:border-gray-400 hover:text-gray-700 bg-transparent rounded-lg"
                    style={{ fontSize: '14px', padding: '8px 12px' }}
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </Button>
                )}
                <Button
                  onClick={() => handleSaveAndExit()}
                  variant="outline"
                  className="font-semibold text-red-600 border-red-300 bg-red-50 hover:border-red-400 hover:text-red-700 hover:bg-red-100 rounded-lg"
                  style={{ fontSize: '14px', padding: '8px 16px' }}
                >
                  <span className="hidden lg:inline">{t("Exit Practice")}</span>
                  <span className="lg:hidden">Exit</span>
                </Button>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-1.5 md:h-2">
              <div
                className="bg-[#007aff] h-1.5 md:h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>
          {/* Question Card - Compact */}
          <div className="bg-white rounded-xl p-4 md:p-6 lg:p-7 mb-4 md:mb-5" style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.04)' }}>
            <h3 className="text-black mb-4 md:mb-5 text-lg md:text-xl font-medium leading-relaxed">
              {currentQuestion?.question}
            </h3>

            {/* Answer Options - No radio circles on mobile */}
            <div className="space-y-3 md:space-y-3">
              {currentQuestion?.options.map((option, index) => {
                const isSelected = currentAnswer === index
                const isCorrect = index === currentQuestion?.correctAnswer
                const showFeedback = showExplanations && currentAnswer !== null

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    className="w-full text-left rounded-lg border transition-all duration-200 cursor-pointer py-4 px-3 md:px-4 min-h-[3.5rem] md:min-h-[3rem]"
                    style={{ 
                      borderColor: showFeedback 
                        ? (isCorrect ? '#10b981' : isSelected ? '#ef4444' : '#E5E7EB')
                        : (isSelected ? '#0A66FF' : '#E5E7EB'),
                      backgroundColor: showFeedback
                        ? (isCorrect ? '#f0fdf4' : isSelected ? '#fef2f2' : '#f9fafb')
                        : (isSelected ? '#EFF6FF' : '#ffffff')
                    }}
                    onMouseEnter={(e) => {
                      if (!showFeedback && !isSelected) {
                        e.currentTarget.style.backgroundColor = '#F9FAFB'
                        e.currentTarget.style.borderColor = '#CBD5E1'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!showFeedback && !isSelected) {
                        e.currentTarget.style.backgroundColor = '#ffffff'
                        e.currentTarget.style.borderColor = '#E5E7EB'
                      }
                    }}
                  >
                    <div className="flex items-start gap-2 md:gap-3">
                      {/* Radio circles - hidden on mobile */}
                      <div className={`hidden md:flex w-5 h-5 rounded-full border-2 items-center justify-center mt-0.5 flex-shrink-0 ${showFeedback
                        ? isCorrect
                          ? 'border-green-500 bg-green-500'
                          : isSelected
                            ? 'border-red-500 bg-red-500'
                            : 'border-gray-300'
                        : isSelected
                          ? 'border-[#007aff] bg-[#007aff]'
                          : 'border-gray-300'
                        }`}>
                        {showFeedback ? (
                          isCorrect ? (
                            <CheckCircle className="w-3 h-3 text-white" />
                          ) : isSelected ? (
                            <div className="w-2 h-2 bg-white rounded-full" />
                          ) : null
                        ) : isSelected ? (
                          <div className="w-2 h-2 bg-white rounded-full" />
                        ) : null}
                      </div>
                      {/* Letter prefix on mobile */}
                      <span className="md:hidden font-semibold text-gray-500 flex-shrink-0 text-sm leading-relaxed">{String.fromCharCode(65 + index)}.</span>
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
          {/* Bottom Sticky Navigation for All Screens */}
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-3.5 px-4 z-40 shadow-[0_-4px_16px_rgba(0,0,0,0.06)]">
            <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
              <Button
                onClick={goToPreviousQuestion}
                disabled={currentQuestionIndex === 0}
                variant="outline"
                className="text-gray-600 border-gray-300 hover:border-gray-400 hover:text-gray-700 bg-transparent rounded-lg disabled:opacity-50 h-11 px-5 flex items-center gap-1.5 font-medium"
                style={{ fontSize: '15px' }}
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">{t("Previous Question")}</span>
                <span className="sm:hidden">{t("Previous")}</span>
              </Button>

              <Button
                onClick={isLastQuestion ? handleFinishPractice : goToNextQuestion}
                disabled={currentAnswer === undefined}
                className="text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed h-11 px-6 flex items-center gap-1.5 font-semibold"
                style={{ 
                  background: '#0A66FF',
                  fontSize: '15px'
                }}
              >
                <span className="hidden sm:inline">{isLastQuestion ? t("Finish Test") : t("Next Question")}</span>
                <span className="sm:hidden">{isLastQuestion ? t("Finish") : t("Next")}</span>
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          {/* Explanation Section - Compact on mobile */}
          {showExplanations && currentAnswer !== null && currentQuestion?.explanation && (
             <div className="p-1 mt-6">
              <div className="flex items-start gap-2 md:gap-4">
                {/* Icon - Hidden on mobile */}
                <div className={`hidden md:flex w-8 h-8 rounded-full items-center justify-center ${currentAnswer === currentQuestion.correctAnswer
                  ? 'bg-green-100'
                  : 'bg-red-100'
                  }`}>
                  {currentAnswer === currentQuestion.correctAnswer ? (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-600" />
                  )}
                </div>
                <div className="flex-1">
                  <h4 className={`font-bold text-base md:text-lg mb-1 md:mb-2 ${currentAnswer === currentQuestion.correctAnswer
                    ? 'text-green-800'
                    : 'text-red-800'
                    }`}>
                    {currentAnswer === currentQuestion.correctAnswer
                      ? 'Correct'
                      : 'Incorrect'}
                  </h4>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    {currentQuestion.explanation}
                  </p>

                </div>
              </div>
            </div>
          )}
        </div>
      </div>


      {/* Mobile Navigator Floating Button - hide for uncommon-sense mode */}
      {mode !== 'uncommon-sense' && (
        <button
          onClick={() => setIsNavigatorOpen(true)}
          className="lg:hidden fixed bottom-24 right-4 z-40 bg-[#007aff] text-white rounded-full w-14 h-14 shadow-lg flex items-center justify-center hover:bg-[#0056cc] transition-all duration-200 active:scale-95"
        >
          <div className="flex flex-col items-center">
            <Grid3X3 className="w-5 h-5" />
            <span className="text-[10px] font-medium mt-0.5">{currentQuestionIndex + 1}/{questions.length}</span>
          </div>
        </button>
      )}

      {/* Navigator Modal/Sheet - hide for uncommon-sense mode */}
      {isNavigatorOpen && mode !== 'uncommon-sense' && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-50 transition-opacity duration-300"
            onClick={() => setIsNavigatorOpen(false)}
          />

          {/* Desktop Modal */}
          <div className="hidden lg:block fixed inset-0 z-50">
            <div className="flex items-center justify-center min-h-screen p-4">
              <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden animate-in fade-in-0 zoom-in-95 duration-200">
                {/* Header with close button only */}
                <div className="flex justify-end p-4 pb-2">
                  <button
                    onClick={() => setIsNavigatorOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                </div>

                {/* Navigator Content */}
                <div className="px-6 pb-6 overflow-y-auto max-h-[calc(80vh-60px)]">
                  <QuestionNavigator
                    totalQuestions={questions.length}
                    currentIndex={currentQuestionIndex}
                    answers={answers}
                    questions={questions.map(q => ({ id: q.id, correctAnswer: q.correctAnswer }))}
                    previousAttempts={{}}
                    questionNumberStatus={undefined}
                    newAnswersInSession={newAnswersInSession.current}
                    onQuestionSelect={(index) => {
                      goToQuestion(index)
                      setIsNavigatorOpen(false)
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Bottom Sheet */}
          <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl shadow-2xl animate-in slide-in-from-bottom duration-300 max-h-[70vh] overflow-hidden">
            {/* Handle */}
            <div className="flex justify-center pt-3 pb-2">
              <div className="w-10 h-1 bg-gray-300 rounded-full" />
            </div>

            {/* Header with close button only */}
            <div className="flex justify-end px-4 pt-2">
              <button
                onClick={() => setIsNavigatorOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Navigator Content */}
            <div className="px-4 pb-4 overflow-y-auto max-h-[calc(70vh-50px)]">
              <QuestionNavigator
                totalQuestions={questions.length}
                currentIndex={currentQuestionIndex}
                answers={answers}
                questions={questions.map(q => ({ id: q.id, correctAnswer: q.correctAnswer }))}
                previousAttempts={{}}
                questionNumberStatus={undefined}
                newAnswersInSession={newAnswersInSession.current}
                onQuestionSelect={(index) => {
                  goToQuestion(index)
                  setIsNavigatorOpen(false)
                }}
              />
            </div>
          </div>
        </>
      )}
    </div>
  )
}