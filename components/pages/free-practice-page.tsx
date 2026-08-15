'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/auth-context'
import { Navigation } from '@/components/navigation'
import { AuthModal } from '@/components/auth/auth-modal'
import { Question } from '@/lib/types/question'
import { STATES, type StateKey } from '@/lib/constants'
import { getStateDedicatedPageUrl, getStateDedicatedPageUrlWithHash } from '@/lib/utils/state-routes'
import { loadFreeQuestions } from '@/lib/utils/csv-loader'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase/config'
import {
  Loader2,
  ArrowRight,
  CheckCircle,
  Crown,
  AlertCircle,
  RotateCcw,
  Home,
  Target,
  Download,
  Sparkles,
  Lock
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SocialProofNotifications } from '@/components/social-proof-notifications'
import { PremiumPromoCard } from '@/components/practice/premium-promo-card'
import { TestCompletePromoCard } from '@/components/practice/test-complete-promo-card'

interface FreePracticePageProps {
  state: StateKey
  initialQuestions?: Question[]
  initialError?: string | null
  testNumber?: number
  totalQuestionCount?: number
  headerSlot?: React.ReactNode
  footerSlot?: React.ReactNode
}

export function FreePracticePageContent({ state, initialQuestions = [], initialError = null, testNumber, totalQuestionCount = 2000, headerSlot, footerSlot }: FreePracticePageProps) {
  const isTestMode = testNumber !== undefined && testNumber >= 1 && testNumber <= 5
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login')
  const [isPremiumLogin, setIsPremiumLogin] = useState(false)

  // Initialize with server-loaded questions (no shuffle to avoid hydration mismatch)
  const [questions, setQuestions] = useState<Question[]>(initialQuestions)
  const [hasShuffled, setHasShuffled] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(initialError || '')

  // Quiz state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({})
  const [showResults, setShowResults] = useState(false)
  const [quizStarted, setQuizStarted] = useState(true) // Start automatically
  const [showExplanation, setShowExplanation] = useState(false)
  const [showPromo, setShowPromo] = useState(false)

  // Email capture state
  const [email, setEmail] = useState('')
  const [emailSubmitting, setEmailSubmitting] = useState(false)
  const [emailSubmitted, setEmailSubmitted] = useState(false)
  const [emailError, setEmailError] = useState('')

  const router = useRouter()

  // Shuffle questions on client-side only (after hydration) to avoid mismatch
  useEffect(() => {
    if (!hasShuffled && initialQuestions.length > 0 && !isTestMode) {
      setQuestions([...initialQuestions].sort(() => Math.random() - 0.5))
      setHasShuffled(true)
    }
  }, [initialQuestions, isTestMode, hasShuffled])

  // Reset quiz state when test number changes
  useEffect(() => {
    setCurrentQuestionIndex(0)
    setSelectedAnswers({})
    setShowResults(false)
    setShowExplanation(false)
    setShowPromo(false)
    setQuizStarted(true)
    setHasShuffled(false)
    // Update questions when initialQuestions change (new test)
    if (initialQuestions.length > 0) {
      if (isTestMode) {
        setQuestions([...initialQuestions])
      }
    }
  }, [testNumber, initialQuestions, isTestMode])
  const { user, userData, isPremium, premiumStatus, signOut } = useAuth()
  const stateInfo = STATES[state]

  // Fallback to client-side loading if no initial questions provided
  const loadQuestions = async () => {
    try {
      setLoading(true)
      setError('')
      const practiceQuestions = await loadFreeQuestions(state)

      // Shuffle questions and use all 20 free questions
      const shuffledQuestions = [...practiceQuestions]
        .sort(() => Math.random() - 0.5)
        .slice(0, 20)

      setQuestions(shuffledQuestions)
    } catch (error) {
      console.error('Failed to load questions:', error)
      setError('Failed to load practice questions. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleLogin = () => {
    setAuthMode('login')
    setIsPremiumLogin(true)
    setAuthModalOpen(true)
  }

  const handleSignup = () => {
    setAuthMode('signup')
    setIsPremiumLogin(false)
    setAuthModalOpen(true)
  }

  const handleLogout = async () => {
    await signOut()
  }

  const handleDashboard = () => {
    if (isPremium) {
      router.push('/dashboard')
    } else {
      setAuthMode('signup')
      setAuthModalOpen(true)
    }
  }

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestionIndex]: answerIndex
    }))
    setShowExplanation(true)
  }

  const handleNextQuestion = () => {
    // Check for premium promo trigger (only in Test Mode 1-5)
    if (isTestMode && !showPromo) {
      // After Q3 (index 2) -> showing Q4 next
      // After Q7 (index 6) -> showing Q8 next
      if (currentQuestionIndex === 2 || currentQuestionIndex === 6) {
        setShowPromo(true)
        return
      }
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1)
      setShowExplanation(false)
    } else {
      setShowResults(true)
    }
  }

  const handlePromoContinue = () => {
    setShowPromo(false)
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1)
      setShowExplanation(false)
    } else {
      setShowResults(true)
    }
  }

  const calculateScore = () => {
    let correct = 0
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correct++
      }
    })
    return { correct, total: questions.length, percentage: Math.round((correct / questions.length) * 100) }
  }

  const handleStartQuiz = () => {
    setQuizStarted(true)
    setCurrentQuestionIndex(0)
    setSelectedAnswers({})
    setShowResults(false)
    setShowPromo(false)
  }

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0)
    setSelectedAnswers({})
    setShowResults(false)
    setShowPromo(false)
    setQuizStarted(true)
  }

  const handleExit = () => {
    router.push(getStateDedicatedPageUrl(state))
  }

  const scrollToPremium = () => {
    router.push(getStateDedicatedPageUrlWithHash(state, 'premium-section'))
  }

  const handleEmailSubmit = async () => {
    if (!email.trim()) {
      setEmailError('Please enter your email')
      return
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address')
      return
    }

    setEmailSubmitting(true)
    setEmailError('')

    try {
      // Calculate score for context
      const score = calculateScore()

      // Store email in Firestore
      await addDoc(collection(db, 'email_subscribers'), {
        email: email.trim().toLowerCase(),
        source: 'free_practice_completion',
        state: state,
        stateName: stateInfo?.name,
        timestamp: new Date(),
        pdfRequested: 'top_50_questions',
        userId: user?.uid || null,
        practiceScore: {
          correct: score.correct,
          total: score.total,
          percentage: score.percentage
        },
        userAgent: navigator.userAgent,
        currentUrl: window.location.href
      })

      console.log('✅ Email subscriber added:', email)
      setEmailSubmitted(true)
      setEmail('')
    } catch (error) {
      console.error('❌ Failed to submit email:', error)
      setEmailError('Failed to submit email. Please try again.')
    } finally {
      setEmailSubmitting(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation
          user={user}
          userData={userData}
          isPremium={isPremium}
          premiumStatus={premiumStatus}
          onLogin={handleLogin}
          onSignup={handleSignup}
          onLogout={handleLogout}
          onDashboard={handleDashboard}
          premiumButtonText="Get Premium"
          premiumButtonAction={scrollToPremium}
        />

        <main className="container mx-auto px-4 py-8 lg:py-16">
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 text-center max-w-md mx-auto">
              <div className="w-16 h-16 bg-[#007aff]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Loader2 className="w-8 h-8 animate-spin text-[#007aff]" />
              </div>
              <h2 className="text-2xl font-bold text-black mb-4">
                Loading {stateInfo.name} {isTestMode ? `Practice Test ${testNumber}` : 'Practice Test'}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Preparing your free practice questions from our comprehensive question bank
              </p>
            </div>
          </div>
        </main>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation
          user={user}
          userData={userData}
          isPremium={isPremium}
          premiumStatus={premiumStatus}
          onLogin={handleLogin}
          onSignup={handleSignup}
          onLogout={handleLogout}
          onDashboard={handleDashboard}
          premiumButtonText="Get Premium"
          premiumButtonAction={scrollToPremium}
        />

        <main className="container mx-auto px-4 py-8 lg:py-16">
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-red-100 text-center max-w-md mx-auto">
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <AlertCircle className="w-8 h-8 text-red-500" />
              </div>
              <h2 className="text-2xl font-bold text-red-600 mb-4">
                Error Loading Practice Test
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">{error}</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  onClick={loadQuestions}
                  className="bg-[#007aff] hover:bg-[#0056cc] text-white font-semibold px-6 py-3 rounded-xl"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Try Again
                </Button>
                <Button
                  onClick={handleExit}
                  variant="outline"
                  className="font-semibold px-6 py-3 rounded-xl"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Back to {stateInfo.name}
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }


  return (
    <div className="min-h-screen bg-white">
      <Navigation
        user={user}
        userData={userData}
        isPremium={isPremium}
        premiumStatus={premiumStatus}
        onLogin={handleLogin}
        onSignup={handleSignup}
        onLogout={handleLogout}
        onDashboard={handleDashboard}
        premiumButtonText="Get Premium"
        premiumButtonAction={scrollToPremium}
        onBackToAllTests={handleExit}
        hidePremiumLoginInMenu={true}
        mobileLeftContent={
          !showResults && questions.length > 0 ? (
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">
                {currentQuestionIndex + 1}/{questions.length}
              </span>
              <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-[#007aff] h-3 rounded-l-full transition-all duration-500 ease-out"
                  style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>
          ) : undefined
        }
      />

      <main className="container mx-auto px-4 py-4 md:py-6 lg:py-8 pb-24 md:pb-6">
        {headerSlot}
        {showResults ? (
          // Results Screen
          <div className="max-w-2xl mx-auto">
            <div className="text-center">
              {(() => {
                const score = calculateScore()
                return (
                  <>
                    {/* Simplified layout: Test Results → Large Premium CTA → Navigation */}
                    {isTestMode ? (
                      <div className="-mx-4 -mt-4 md:-mt-6 lg:-mt-8" style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)', width: '100vw' }}>
                        <TestCompletePromoCard
                          testNumber={testNumber || 1}
                          score={score}
                          onContinue={() => {
                            if (testNumber && testNumber < 5) {
                              router.push(`/state/${state}/practice/free/${testNumber + 1}`)
                            } else {
                              router.push(getStateDedicatedPageUrlWithHash(state, 'free-practice-tests'))
                            }
                          }}
                          onUpgrade={() => {
                            router.push(getStateDedicatedPageUrlWithHash(state, 'premium-section'))
                          }}
                          stateName={stateInfo?.name || ''}
                          state={state}
                          nextTestNumber={testNumber && testNumber < 5 ? testNumber + 1 : undefined}
                          questionCount={totalQuestionCount}
                        />
                      </div>
                    ) : (
                      <>
                        {/* Original layout for non-California states */}
                        <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 ${score.percentage >= 80 ? 'bg-green-100' : score.percentage >= 60 ? 'bg-yellow-100' : 'bg-red-100'}`}>
                          {score.percentage >= 80 ? (
                            <CheckCircle className="w-10 h-10 text-green-600" />
                          ) : (
                            <Target className="w-10 h-10 text-gray-600" />
                          )}
                        </div>

                        {isTestMode && (
                          <p className="text-sm text-[#007aff] font-medium mb-2">Practice Test {testNumber} Complete</p>
                        )}
                        <h2 className="text-3xl font-bold text-black mb-4">
                          {score.percentage >= 80 ? 'Great Job!' : 'Keep Practicing!'}
                        </h2>

                        <div className="text-5xl font-bold text-[#007aff] mb-2">{score.percentage}%</div>
                        <p className="text-gray-600 mb-8">
                          You answered {score.correct} out of {score.total} questions correctly
                        </p>

                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 ${score.percentage >= 80 ? 'bg-green-100 text-green-700' :
                          score.percentage >= 60 ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'
                          }`}>
                          {score.percentage >= 80 ? '🎉 Excellent! You\'re ready for the real test' :
                            score.percentage >= 60 ? '📚 Good work! A bit more practice will help' : '💪 Keep studying to improve your score'}
                        </div>
                      </>
                    )}

                    {/* Rest of the layout for non-test mode */}
                    {!isTestMode && (
                      <>
                        {/* Non-test mode: original buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                          <Button
                            onClick={handleRestartQuiz}
                            variant="outline"
                            className="font-semibold px-6 py-3 rounded-xl"
                          >
                            <RotateCcw className="w-4 h-4 mr-2" />
                            Try Again
                          </Button>
                          <Button
                            onClick={() => router.push(getStateDedicatedPageUrlWithHash(state, 'premium-section'))}
                            className="bg-[#007aff] hover:bg-[#0056cc] text-white font-semibold px-6 py-3 rounded-xl"
                          >
                            <Crown className="w-4 h-4 mr-2" />
                            Get Premium Access
                          </Button>
                        </div>

                        {/* Email Capture for PDF */}
                        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <Download className="w-5 h-5 text-blue-600" />
                              </div>
                              <div className="text-left">
                                <h3 className="text-sm font-semibold text-black">
                                  Free PDF Study Guide
                                </h3>
                                <p className="text-xs text-gray-500">
                                  50 must-know questions for {stateInfo?.name}
                                </p>
                              </div>
                            </div>
                            {!emailSubmitted ? (
                              <div className="flex items-center gap-2">
                                <input
                                  type="email"
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                  placeholder="Email"
                                  className={`w-32 sm:w-40 px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${emailError ? 'border-red-300' : 'border-gray-300'}`}
                                  disabled={emailSubmitting}
                                  onKeyPress={(e) => e.key === 'Enter' && handleEmailSubmit()}
                                />
                                <Button
                                  onClick={handleEmailSubmit}
                                  disabled={emailSubmitting}
                                  size="sm"
                                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm font-medium disabled:opacity-50"
                                >
                                  {emailSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Get'}
                                </Button>
                              </div>
                            ) : (
                              <div className="flex items-center gap-2 text-green-600">
                                <CheckCircle className="w-5 h-5" />
                                <span className="text-sm font-medium">Sent!</span>
                              </div>
                            )}
                          </div>
                          {emailError && (
                            <p className="text-red-500 text-xs mt-2 text-right">{emailError}</p>
                          )}
                        </div>
                      </>
                    )}
                  </>
                )
              })()}
            </div>
          </div>
        ) : showPromo ? (
          <div className="-mx-4 -mt-4 md:-mt-6 lg:-mt-8" style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)', width: '100vw' }}>
            <PremiumPromoCard
              testNumber={testNumber || 1}
              triggerQuestionIndex={currentQuestionIndex}
              onContinue={handlePromoContinue}
              onUpgrade={() => {
                setShowPromo(false)
                scrollToPremium()
              }}
              stateName={stateInfo?.name}
              state={state}
              questionCount={totalQuestionCount}
            />
          </div>
        ) : (
          // Quiz Interface
          <div className="max-w-4xl mx-auto">
            {/* Progress Header - Desktop only */}
            <div className="hidden md:block mb-5">
              <div className="flex items-center justify-between mb-3">
                <div>
                  {isTestMode && (
                    <p className="text-xs text-[#007aff] font-medium mb-1">Practice Test {testNumber}</p>
                  )}
                  <h2 className="font-semibold text-black" style={{ fontSize: '18px' }}>
                    Question {currentQuestionIndex + 1} of {questions.length}
                  </h2>
                  <p className="text-sm text-gray-600">{questions[currentQuestionIndex]?.category}</p>
                </div>
                <Button
                  onClick={handleExit}
                  variant="outline"
                  className="font-semibold text-red-600 border-red-300 bg-red-50 hover:border-red-400 hover:text-red-700 hover:bg-red-100 rounded-lg"
                  style={{ fontSize: '14px', padding: '8px 16px' }}
                >
                  Exit Practice
                </Button>
              </div>

              {/* Progress Bar - Desktop */}
              <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                <div
                  className="bg-[#007aff] h-2.5 rounded-l-full transition-all duration-500 ease-out"
                  style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question Card */}
            <div className="md:bg-white md:rounded-2xl md:p-8 mb-4 md:mb-5 md:shadow-[0_8px_24px_rgba(0,0,0,0.05)]">
              <h3 className="text-black mb-5 md:mb-6 text-lg md:text-xl font-semibold leading-7 md:leading-8">
                {questions[currentQuestionIndex]?.question}
              </h3>

              {/* Answer Options - No radio circles on mobile */}
              <div className="space-y-3 md:space-y-3">
                {questions[currentQuestionIndex]?.options.map((option, index) => {
                  const isSelected = selectedAnswers[currentQuestionIndex] === index
                  const isCorrect = index === questions[currentQuestionIndex]?.correctAnswer
                  const showFeedback = showExplanation && selectedAnswers[currentQuestionIndex] !== undefined

                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      disabled={showExplanation}
                      className={`w-full text-left rounded-xl border-2 transition-all duration-300 ease-out cursor-pointer py-4 px-4 md:px-5 ${!showFeedback && !isSelected ? 'hover:shadow-md hover:-translate-y-0.5' : ''}`}
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
                          e.currentTarget.style.backgroundColor = '#F8FAFC'
                          e.currentTarget.style.borderColor = '#007aff'
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!showFeedback && !isSelected) {
                          e.currentTarget.style.backgroundColor = '#ffffff'
                          e.currentTarget.style.borderColor = '#E5E7EB'
                        }
                      }}
                    >
                      <div className="flex items-center md:items-start gap-2 md:gap-3">
                        {/* Radio circles - hidden on mobile */}
                        <div className={`hidden md:flex w-5 h-5 rounded-full border-2 items-center justify-center mt-0.5 flex-shrink-0 transition-all duration-300 ${showFeedback
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
                        <span className={`md:hidden w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-medium transition-all duration-300 ${showFeedback
                          ? isCorrect
                            ? 'bg-green-500 text-white'
                            : isSelected
                              ? 'bg-red-500 text-white'
                              : 'bg-gray-100 text-gray-600'
                          : isSelected
                            ? 'bg-[#007aff] text-white'
                            : 'bg-gray-100 text-gray-600'
                          }`}>{String.fromCharCode(65 + index)}</span>
                        <span className={`font-normal text-sm md:text-base leading-relaxed break-words ${showFeedback
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

            {/* Navigation - Sticky on mobile, inline on desktop */}
            {selectedAnswers[currentQuestionIndex] !== undefined && (
              <div className="hidden md:flex justify-end items-center mb-6 mt-5">
                <Button
                  onClick={handleNextQuestion}
                  className="text-white rounded-lg transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-0.5"
                  style={{
                    background: '#007aff',
                    fontWeight: '600',
                    fontSize: '15px',
                    padding: '14px 28px'
                  }}
                >
                  <span className="hidden lg:inline">{currentQuestionIndex === questions.length - 1 ? 'Finish Test' : 'Next Question'}</span>
                  <span className="lg:hidden">{currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            )}

            {/* Mobile Sticky Navigation */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-40">
              <Button
                onClick={handleNextQuestion}
                disabled={selectedAnswers[currentQuestionIndex] === undefined}
                className="w-full text-white rounded-lg disabled:opacity-50"
                style={{
                  background: '#007aff',
                  fontWeight: '600',
                  fontSize: '15px',
                  padding: '16px 24px'
                }}
              >
                {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next Question'}
              </Button>
            </div>

            {/* Explanation Section - Compact on mobile */}
            {showExplanation && questions[currentQuestionIndex] && selectedAnswers[currentQuestionIndex] !== undefined && questions[currentQuestionIndex].explanation && (
              <div className="mt-6 md:mt-5">
                <div className="flex items-start gap-2 md:gap-4">
                  {/* Icon - Hidden on mobile */}
                  <div className={`hidden md:flex w-8 h-8 rounded-full items-center justify-center ${selectedAnswers[currentQuestionIndex] === questions[currentQuestionIndex].correctAnswer
                    ? 'bg-green-100'
                    : 'bg-red-100'
                    }`}>
                    {selectedAnswers[currentQuestionIndex] === questions[currentQuestionIndex].correctAnswer ? (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-red-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-bold text-base md:text-lg mb-1 md:mb-2 ${selectedAnswers[currentQuestionIndex] === questions[currentQuestionIndex].correctAnswer
                      ? 'text-green-800'
                      : 'text-red-800'
                      }`}>
                      {selectedAnswers[currentQuestionIndex] === questions[currentQuestionIndex].correctAnswer
                        ? 'Correct'
                        : 'Incorrect'}
                    </h4>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      {questions[currentQuestionIndex].explanation}
                    </p>

                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      {footerSlot}

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        mode={authMode}
        onSwitchMode={(mode: 'login' | 'signup') => {
          setAuthMode(mode)
          if (mode === 'signup') setIsPremiumLogin(false)
        }}
        isPremiumOnly={isPremiumLogin}
        onGetPremium={() => router.push(getStateDedicatedPageUrl(state))}
      />

      {/* Social Proof Notifications */}
      <SocialProofNotifications enabled={true} isPremiumUser={isPremium} currentState={state} />
    </div>
  )
}