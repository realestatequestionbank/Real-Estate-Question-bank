'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/auth-context'
import { Navigation } from '@/components/navigation'
import { FeaturePageSkeleton } from '@/components/skeletons/feature-page-skeleton'
import { SlimFooter } from '@/components/slim-footer'
import { PremiumAccessGuard } from '@/components/premium-access-guard'
import { PurchaseRenewalDialog } from '@/components/purchase-renewal-dialog'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import {
  ClipboardList,
  Clock,
  Target,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  XCircle,
  Trophy,
  RefreshCw,
  Lock,
  Loader2,
  AlertCircle,
  Play,
  ChevronRight
} from 'lucide-react'
import { STATES, type StateKey } from '@/lib/constants'
import { Question, MockExam } from '@/lib/types/question'
import { getMockExamQuestions, calculateScore } from '@/lib/services/question-service'
import { saveMockExam, updateLastActiveState } from '@/lib/services/progress-service'
import { getStateData } from '@/lib/utils/getStateData'

interface MockTestPageProps {
  state: string
}

export function MockTestPageContent({ state }: MockTestPageProps) {
  const [loading, setLoading] = useState(true)
  const [testStarted, setTestStarted] = useState(false)
  const [testCompleted, setTestCompleted] = useState(false)
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<(number | null)[]>([])
  const [showFeedback, setShowFeedback] = useState<boolean[]>(new Array(0).fill(false))
  const [testResults, setTestResults] = useState<any>(null)
  const [showPurchaseDialog, setShowPurchaseDialog] = useState(false)
  const [purchaseLoading, setPurchaseLoading] = useState(false)

  const router = useRouter()
  const { user, userData, isPremium, premiumStatus, signOut, loading: authLoading } = useAuth()
  const stateInfo = STATES[state as StateKey]
  const stateData = getStateData(state as StateKey)

  // Initialize feedback array when questions are loaded
  useEffect(() => {
    if (questions.length > 0) {
      setShowFeedback(new Array(questions.length).fill(false))
    }
  }, [questions])

  // Set last active state for premium users
  useEffect(() => {
    if (!authLoading && user && isPremium) {
      updateLastActiveState(user.uid, state)
    }
  }, [user, isPremium, state, authLoading])

  useEffect(() => {
    if (user && isPremium) {
      loadMockTest()
    }
  }, [user, isPremium, state])

  const loadMockTest = async () => {
    try {
      setLoading(true)
      const mockQuestions = await getMockExamQuestions(state)
      setQuestions(mockQuestions)
      setAnswers(new Array(mockQuestions.length).fill(null))
    } catch (error) {
      console.error('Error loading mock test:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleStartTest = () => {
    setTestStarted(true)
  }

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestionIndex] = answerIndex
    setAnswers(newAnswers)

    // Show immediate feedback
    const newShowFeedback = [...showFeedback]
    newShowFeedback[currentQuestionIndex] = true
    setShowFeedback(newShowFeedback)
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
  }


  const handleSubmitTest = async () => {
    if (!user) return

    const results = calculateScore(questions, answers, state)
    setTestResults(results)
    setTestCompleted(true)

    // Save mock exam results
    try {
      const mockExam: MockExam = {
        id: `mock_${Date.now()}`,
        userId: user.uid,
        state,
        questions,
        answers,
        startTime: new Date(Date.now() - (36 * 60 * 1000)),
        endTime: new Date(),
        score: results.percentage,
        passed: results.passed,
        timeLimit: 36,
        completed: true
      }

      await saveMockExam(mockExam, true)
    } catch (error) {
      console.error('Error saving mock exam:', error)
    }
  }

  const handleRetakeTest = () => {
    setTestStarted(false)
    setTestCompleted(false)
    setCurrentQuestionIndex(0)
    setAnswers(new Array(questions.length).fill(null))
    setShowFeedback(new Array(questions.length).fill(false))
    setTestResults(null)
    loadMockTest()
  }

  const handleBackToDashboard = () => {
    router.push(`/dashboard?state=${state}`)
  }

  const handleExitTest = () => {
    router.push(`/dashboard?state=${state}`)
  }

  const handlePurchaseRenewal = () => {
    setShowPurchaseDialog(true)
  }

  const handlePurchase = async (duration: number) => {
    if (!user) return
    
    setPurchaseLoading(true)
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: user.uid,
          state: state,
          duration: duration,
        }),
      })

      const data = await response.json()

      if (data.error) {
        console.error('Checkout error:', data.error)
        alert('Failed to create checkout session')
        return
      }

      if (data.url) {
        window.location.href = data.url
      }
    } catch (error) {
      console.error('Error creating checkout session:', error)
      alert('An error occurred. Please try again.')
    } finally {
      setPurchaseLoading(false)
      setShowPurchaseDialog(false)
    }
  }

  const handleLogin = () => {
    const currentPath = typeof window !== 'undefined' ? window.location.pathname : ''
    router.push(`/login${currentPath ? `?redirect=${encodeURIComponent(currentPath)}` : ''}`)
  }




  // Show access control for non-premium users
  if (!authLoading && (!user || premiumStatus !== 'active')) {
    return (
      <>
        <PremiumAccessGuard
          user={user}
          premiumStatus={premiumStatus}
          onPurchase={handlePurchaseRenewal}
          onRenewal={handlePurchaseRenewal}
          onLogin={handleLogin}
          state={state}
          feature="Mock Tests"
        />
        <PurchaseRenewalDialog
          isOpen={showPurchaseDialog}
          onClose={() => setShowPurchaseDialog(false)}
          premiumStatus={premiumStatus}
          onPurchase={handlePurchase}
          isLoading={purchaseLoading}
        />
      </>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation
        user={user}
        userData={userData}
        isPremium={isPremium}
        premiumStatus={premiumStatus}
        onLogin={() => { }}
        onSignup={() => { }}
        onLogout={async () => { await signOut(); router.push('/') }}
        onDashboard={() => router.push(`/dashboard?state=${state}`)}
        onPurchaseRenewal={handlePurchaseRenewal}
        isLoading={loading || authLoading}
      />

      {loading || authLoading ? <FeaturePageSkeleton /> : null}

      {!loading && !authLoading && (
        <>
          {/* Welcome Header Green Banner (Full Width, placed right below the header navigation) */}
          {!(testStarted && !testCompleted) && (
            <div className="w-full text-white" style={{ backgroundColor: '#00AC52' }}>
              <div className="container mx-auto px-4 py-2.5 md:py-3.5 flex flex-row items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <ClipboardList className="w-4 h-4 md:w-5 md:h-5 shrink-0" style={{ color: 'rgba(255,255,255,0.75)' }} />
                  <h1 className="text-sm md:text-base font-bold whitespace-nowrap">
                    {STATES[state as StateKey]?.name} - Mock Real Estate Test
                  </h1>
                </div>

                {/* Quick Action */}
                <div className="flex items-center gap-1.5">
                  <Button
                    onClick={handleBackToDashboard}
                    size="sm"
                    className="bg-white hover:bg-gray-50 font-bold px-3 py-1.5 h-auto text-xs md:text-sm rounded-lg shadow-sm" style={{ color: '#00AC52' }}
                  >
                    <ArrowLeft className="w-3.5 h-3.5 mr-1.5" />
                    Back to Dashboard
                  </Button>
                </div>
              </div>
            </div>
          )}

          <main className="container mx-auto px-4 py-8">
            {!testStarted && !testCompleted && (
              <>
                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="bg-white rounded-lg p-4 md:p-5 text-center" style={{ border: '1px solid rgba(0,0,0,0.12)' }}>
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: 'rgba(0,172,82,0.1)' }}>
                      <ClipboardList className="w-5 h-5" style={{ color: '#00AC52' }} />
                    </div>
                    <div className="text-2xl font-bold text-black mb-0.5">{stateData.testOverview.totalQuestions}</div>
                    <div className="text-xs text-gray-500 font-medium">Questions</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 md:p-5 text-center" style={{ border: '1px solid rgba(0,0,0,0.12)' }}>
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: 'rgba(0,172,82,0.1)' }}>
                      <Target className="w-5 h-5" style={{ color: '#00AC52' }} />
                    </div>
                    <div className="text-2xl font-bold text-black mb-0.5">{stateData.testOverview.passingScore}</div>
                    <div className="text-xs text-gray-500 font-medium">To Pass</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 md:p-5 text-center" style={{ border: '1px solid rgba(0,0,0,0.12)' }}>
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: 'rgba(0,172,82,0.1)' }}>
                      <Clock className="w-5 h-5" style={{ color: '#00AC52' }} />
                    </div>
                    <div className="text-2xl font-bold text-black mb-0.5">∞</div>
                    <div className="text-xs text-gray-500 font-medium">No Time Limit</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 md:p-5 text-center" style={{ border: '1px solid rgba(0,0,0,0.12)' }}>
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: 'rgba(0,172,82,0.1)' }}>
                      <Trophy className="w-5 h-5" style={{ color: '#00AC52' }} />
                    </div>
                    <div className="text-2xl font-bold text-black mb-0.5">{Math.round((stateData.testOverview.passingScore / stateData.testOverview.totalQuestions) * 100)}%</div>
                    <div className="text-xs text-gray-500 font-medium">Pass Rate</div>
                  </div>
                </div>

                {/* Instructions + Tips */}
                <div className="grid md:grid-cols-2 gap-5 mb-8">
                  {/* How it works */}
                  <div className="bg-white rounded-lg p-5 md:p-6" style={{ border: '1px solid rgba(0,0,0,0.12)' }}>
                    <h2 className="text-base font-semibold text-black mb-4 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" style={{ color: '#00AC52' }} />
                      How it Works
                    </h2>
                    <div className="space-y-3">
                      {[
                        'Answer all questions to the best of your ability',
                        stateData.testOverview.timeLimit === 'No time limit' ? 'No time limit — take as long as you need' : `Time limit: ${stateData.testOverview.timeLimit}`,
                        `You need ${stateData.testOverview.passingScore} out of ${stateData.testOverview.totalQuestions} correct answers to pass`,
                        'Instant feedback shown after each answer',
                        'Take your time and read each question carefully',
                      ].map((tip, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: 'rgba(0,172,82,0.15)' }}>
                            <span className="text-[10px] font-bold" style={{ color: '#00AC52' }}>{i + 1}</span>
                          </div>
                          <span className="text-sm text-gray-700">{tip}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tips for success */}
                  <div className="bg-white rounded-lg p-5 md:p-6" style={{ border: '1px solid rgba(0,0,0,0.12)' }}>
                    <h2 className="text-base font-semibold text-black mb-4 flex items-center gap-2">
                      <Trophy className="w-4 h-4" style={{ color: '#00AC52' }} />
                      Tips for Success
                    </h2>
                    <div className="space-y-3">
                      {[
                        'Read each question fully before selecting an answer',
                        'Eliminate obviously wrong answers first',
                        'Don\'t second-guess yourself on clear answers',
                        'Pay attention to words like "always", "never", "must"',
                        'Trust the preparation you\'ve done in the question bank',
                      ].map((tip, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#00AC52' }} />
                          <span className="text-sm text-gray-700">{tip}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                  <Button
                    size="lg"
                    onClick={handleStartTest}
                    className="text-white font-bold px-10 py-3 rounded-lg shadow-md text-base" style={{ backgroundColor: '#00AC52' }}
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Start Mock Test
                  </Button>
                  <p className="text-xs text-gray-400 mt-3">You can exit the test at any time</p>
                </div>
              </>
            )}

          {testStarted && !testCompleted && (
            <>
              <div className="max-w-4xl mx-auto space-y-6 pb-24 md:pb-6">

              {/* Progress Header - Compact */}
              <div className="bg-white rounded-xl p-4 md:p-5 border border-gray-300 mb-4 md:mb-5" style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.04)' }}>
                <div className="flex items-center justify-between mb-2 md:mb-3">
                  <div>
                    <h2 className="font-semibold text-black" style={{ fontSize: '18px' }}>
                      Question {currentQuestionIndex + 1} of {questions.length}
                    </h2>
                    {/* Hide category on mobile */}
                    {questions[currentQuestionIndex] && (
                      <p className="hidden md:block text-sm text-gray-600">Mock Test</p>
                    )}
                  </div>
                  <Button
                    onClick={handleExitTest}
                    variant="outline"
                    className="font-semibold text-red-600 border-red-300 bg-red-50 hover:border-red-400 hover:text-red-700 hover:bg-red-100 rounded-lg"
                    style={{ fontSize: '14px', padding: '8px 16px' }}
                  >
                    <span className="hidden lg:inline">Exit Test</span>
                    <span className="lg:hidden">Exit</span>
                  </Button>
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
              <div className="bg-white rounded-xl p-6 md:p-6 lg:p-7 border border-gray-300 mb-4 md:mb-5" style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.04)' }}>
                <h3 className="text-black mb-4 md:mb-5" style={{ fontSize: '20px', fontWeight: '500', lineHeight: '1.55' }}>
                  {questions[currentQuestionIndex]?.question}
                </h3>

                {/* Answer Options - No radio circles on mobile */}
                <div className="space-y-3 md:space-y-3">
                  {questions[currentQuestionIndex]?.options.map((option, index) => {
                    const isSelected = answers[currentQuestionIndex] === index
                    const isCorrect = index === questions[currentQuestionIndex]?.correctAnswer
                    const showFeedbackForQuestion = showFeedback[currentQuestionIndex]

                    return (
                      <button
                        key={index}
                        onClick={() => {
                          // Only allow selection if no answer has been given yet
                          if (answers[currentQuestionIndex] === null) {
                            handleAnswerSelect(index)
                          }
                        }}
                        disabled={answers[currentQuestionIndex] !== null}
                        className="w-full text-left rounded-lg border transition-all duration-200 cursor-pointer"
                        style={{ 
                          padding: '16px 18px',
                          borderColor: showFeedbackForQuestion 
                            ? (isCorrect ? '#10b981' : isSelected ? '#ef4444' : '#E5E7EB')
                            : (isSelected ? '#0A66FF' : '#E5E7EB'),
                          backgroundColor: showFeedbackForQuestion
                            ? (isCorrect ? '#f0fdf4' : isSelected ? '#fef2f2' : '#f9fafb')
                            : (isSelected ? '#EFF6FF' : '#ffffff'),
                          cursor: answers[currentQuestionIndex] !== null ? 'not-allowed' : 'pointer'
                        }}
                      >
                        <div className="flex items-center">
                          {/* Radio circles - hidden on mobile */}
                          <div className={`hidden md:flex w-5 h-5 rounded-full border-2 mr-3 items-center justify-center ${showFeedbackForQuestion
                            ? isCorrect
                              ? 'border-green-500 bg-green-500'
                              : isSelected
                                ? 'border-red-500 bg-red-500'
                                : 'border-gray-300'
                            : isSelected
                              ? 'border-[#007aff] bg-[#007aff]'
                              : 'border-gray-300'
                            }`}>
                            {showFeedbackForQuestion ? (
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
                          <span className="md:hidden font-semibold mr-2 text-gray-500">{String.fromCharCode(65 + index)}.</span>
                          <span className={`font-normal ${showFeedbackForQuestion
                            ? isCorrect
                              ? 'text-green-800'
                              : isSelected
                                ? 'text-red-800'
                                : 'text-gray-600'
                            : 'text-gray-900'
                            }`}
                            style={{ fontSize: '16px' }}>
                            {option}
                          </span>
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>


              {/* Navigation Controls */}
              <div className="space-y-4">
                {/* Mobile Sticky Bottom Navigation - No Previous Button */}
                <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
                  <div className="flex justify-center">
                    <Button
                      onClick={currentQuestionIndex === questions.length - 1 ? handleSubmitTest : handleNextQuestion}
                      disabled={answers[currentQuestionIndex] === null}
                      className="w-full text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{ 
                        background: '#0A66FF',
                        fontWeight: '600',
                        fontSize: '15px',
                        padding: '12px 24px'
                      }}
                    >
                      {currentQuestionIndex === questions.length - 1 ? (
                        <>
                          <CheckCircle className="w-4 h-4 mr-2" />
                          <span className="hidden lg:inline">Submit Test</span>
                          <span className="lg:hidden">Submit</span>
                        </>
                      ) : (
                        <>
                          <span className="hidden lg:inline">Next Question</span>
                          <span className="lg:hidden">Next</span>
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </div>
                </div>

                {/* Desktop Inline Navigation - No Previous Button */}
                <div className="hidden md:flex justify-center items-center mt-6">
                  <Button
                    onClick={currentQuestionIndex === questions.length - 1 ? handleSubmitTest : handleNextQuestion}
                    disabled={answers[currentQuestionIndex] === null}
                    className="text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ 
                      background: '#0A66FF',
                      fontWeight: '600',
                      fontSize: '15px',
                      padding: '12px 24px'
                    }}
                  >
                    {currentQuestionIndex === questions.length - 1 ? (
                      <>
                        <CheckCircle className="w-4 h-4 mr-2" />
                        <span className="hidden lg:inline">Submit Test</span>
                        <span className="lg:hidden">Submit</span>
                      </>
                    ) : (
                      <>
                        <span className="hidden lg:inline">Next Question</span>
                        <span className="lg:hidden">Next</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              </div>

              </div>
            </>
          )}

          {testCompleted && testResults && (
            <>
              {/* Results Screen */}
              <div className="mb-8">

                <div
                  className="text-white rounded-lg p-6"
                  style={{ backgroundColor: testResults.passed ? '#00AC52' : '#ef4444' }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    {testResults.passed ? (
                      <Trophy className="w-8 h-8" />
                    ) : (
                      <XCircle className="w-8 h-8" />
                    )}
                    <h1 className="text-3xl font-bold">
                      {testResults.passed ? 'Congratulations!' : 'Test Complete'}
                    </h1>
                  </div>
                  <p className="text-white/80">
                    {testResults.passed
                      ? 'You passed the mock Real Estate Exam!'
                      : 'Keep practicing and try again!'
                    }
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                      <Target className="w-8 h-8 text-blue-600" />
                    </div>
                    <p className="text-3xl font-bold text-blue-600">{testResults.percentage}%</p>
                    <p className="text-gray-600">Final Score</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <p className="text-3xl font-bold text-green-600">{testResults.correctCount}</p>
                    <p className="text-gray-600">Correct Answers</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
                      <XCircle className="w-8 h-8 text-red-600" />
                    </div>
                    <p className="text-3xl font-bold text-red-600">
                      {testResults.totalCount - testResults.correctCount}
                    </p>
                    <p className="text-gray-600">Incorrect Answers</p>
                  </CardContent>
                </Card>
              </div>

              <div className="flex gap-4 justify-center">
                <Button
                  variant="outline"
                  onClick={handleRetakeTest}
                  className="flex items-center gap-2"
                >
                  <RefreshCw className="w-4 h-4" />
                  Retake Test
                </Button>
                <Button
                  onClick={handleBackToDashboard}
                  className="flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Return to Dashboard
                </Button>
              </div>
            </>
          )}
        </main>
      </>
      )}

      {/* Footer - Hidden on mock test page */}
      <div className="hidden">
        <SlimFooter />
      </div>
    </div>
  )
}