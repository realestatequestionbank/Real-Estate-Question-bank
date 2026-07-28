'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/auth-context'
import { Navigation } from '@/components/navigation'
import { SlimFooter } from '@/components/slim-footer'
import { PracticeInterface } from '@/components/practice/practice-interface'
import { Question, PracticeSession } from '@/lib/types/question'
import { getPracticeQuestions, getQuestionsByChapter, getUncommonSenseQuestions } from '@/lib/services/question-service'
import { savePracticeSession, getChapterProgressWithQuestions, updateLastActiveState, getQuestionNumberStatus, getFirstUnattemptedQuestion } from '@/lib/services/progress-service'
import { STATES, type StateKey } from '@/lib/constants'
import { Loader2, Lock, Crown, ChevronRight, AlertCircle, RotateCcw } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { LoadingPage } from '@/components/ui/loading-page'

interface PremiumPracticePageProps {
  state: StateKey
}

export function PremiumPracticePageContent({ state }: PremiumPracticePageProps) {
  const [questions, setQuestions] = useState<Question[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [chapter, setChapter] = useState<string | null>(null)
  const [mode, setMode] = useState<string | null>(null)
  const [previousAttempts, setPreviousAttempts] = useState<{ [questionId: string]: { attempted: boolean; correct: boolean; lastAnswer: number | null; attempts: number } }>({})
  const [questionNumberStatus, setQuestionNumberStatus] = useState<{ correct: Array<{ questionNumber: number; chosenOption: number }>; incorrect: Array<{ questionNumber: number; chosenOption: number }>; unattempted: number[] } | undefined>(undefined)
  const [startingQuestionNumber, setStartingQuestionNumber] = useState<number>(1)

  const router = useRouter()
  const { user, userData, isPremium, isPremiumExpired, premiumStatus, signOut, loading: authLoading } = useAuth()
  const stateInfo = STATES[state]

  // Redirect non-premium users and set last active state
  useEffect(() => {
    if (!authLoading) {
      if (user && !isPremium) {
        router.push(`/state/${state}/practice/free`)
      } else if (!user) {
        router.push(`/state/${state}/free`)
      } else if (user && isPremium) {
        // Update last active state when a premium user lands here
        updateLastActiveState(user.uid, state)
      }
    }
  }, [user, isPremium, state, router, authLoading])

  useEffect(() => {
    if (user && isPremium) {
      // Get chapter from URL params
      const urlParams = new URLSearchParams(window.location.search)
      const chapterParam = urlParams.get('chapter')
      const modeParam = urlParams.get('mode')

      if (chapterParam) {
        setChapter(decodeURIComponent(chapterParam))
      }
      if (modeParam) {
        setMode(modeParam)
      }
      loadQuestions()
    }
  }, [state, user, isPremium, chapter, mode])

  const loadQuestions = async () => {
    if (!user) return

    try {
      setLoading(true)
      let practiceQuestions: Question[]

      if (chapter) {
        // Load questions for specific chapter
        practiceQuestions = await getQuestionsByChapter(state, chapter)

        // Load previous attempts for this chapter
        const chapterProgress = await getChapterProgressWithQuestions(user.uid, state, chapter, practiceQuestions)
        setPreviousAttempts(chapterProgress)

        // Load question number status for this chapter
        const questionStatus = await getQuestionNumberStatus(user.uid, state, chapter)
        setQuestionNumberStatus(questionStatus)

        // Get the first unattempted question to start from
        const startingQuestion = await getFirstUnattemptedQuestion(user.uid, state, chapter, practiceQuestions.length)
        setStartingQuestionNumber(startingQuestion)

        console.log('📖 Loaded chapter practice:', {
          chapter,
          totalQuestions: practiceQuestions.length,
          previouslyAttempted: Object.keys(chapterProgress).filter(id => chapterProgress[id].attempted).length,
          previouslyCorrect: Object.keys(chapterProgress).filter(id => chapterProgress[id].attempted && chapterProgress[id].correct).length,
          previouslyIncorrect: Object.keys(chapterProgress).filter(id => chapterProgress[id].attempted && !chapterProgress[id].correct).length,
          startingQuestion,
          questionStatus
        })
      } else if (mode === 'uncommon-sense') {
        // Load only uncommon sense (hard) questions
        practiceQuestions = await getUncommonSenseQuestions(state)
        setPreviousAttempts({})
        console.log('🧠 Loaded uncommon sense practice:', {
          totalQuestions: practiceQuestions.length
        })
      } else {
        // Load general practice questions (no previous attempts for mixed practice)
        practiceQuestions = await getPracticeQuestions(state, 20, true) // Premium practice
        setPreviousAttempts({})
      }

      setQuestions(practiceQuestions)
    } catch (error) {
      console.error('Failed to load questions:', error)
      setError('Failed to load practice questions')
    } finally {
      setLoading(false)
    }
  }

  const handleLogin = () => {
    router.push(`/state/${state}/free`)
  }

  const handleSignup = () => {
    router.push(`/state/${state}/free`)
  }

  const handleLogout = async () => {
    await signOut()
    router.push('/')
  }

  const handleDashboard = () => {
    router.push(`/dashboard?state=${state}`)
  }

  const handlePracticeComplete = async (session: Partial<PracticeSession>) => {
    try {
      if (user) {
        // Save practice session to database for premium users
        const fullSession: PracticeSession = {
          id: `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          userId: user.uid,
          state,
          questions: session.questions || [],
          answers: session.answers || [],
          startTime: session.startTime || new Date(),
          endTime: session.endTime,
          score: session.score,
          isPremium: true,
          completed: true,
          chapter: chapter || undefined // Include chapter if practicing specific chapter
        }

        await savePracticeSession(fullSession, isPremium)
        console.log('Premium practice session saved:', fullSession)
      }

      // Note: Removed automatic redirect - user can manually choose to continue
    } catch (error) {
      console.error('Failed to save practice session:', error)
    }
  }

  const handleExit = () => {
    if (chapter) {
      router.push(`/state/${state}/question-bank`)
    } else if (mode === 'uncommon-sense') {
      router.push(`/state/${state}/uncommon-sense`)
    } else {
      router.push('/dashboard')
    }
  }

  // Show loading while auth is loading
  if (authLoading) {
    return <LoadingPage message="Verifying premium access..." />
  }

  // Show access denied for non-premium users (only after loading is complete)
  if (!user || !isPremium) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation
          user={user}
          isPremium={isPremium}
          onLogin={handleLogin}
          onSignup={handleSignup}
          onLogout={handleLogout}
          onDashboard={handleDashboard}
        />

        <main className="container mx-auto px-4 py-16">
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-red-100 text-center max-w-md mx-auto">
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Lock className="w-8 h-8 text-red-500" />
              </div>
              <h2 className="text-2xl font-bold text-red-600 mb-4">
                Premium Access Required
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                This practice test requires premium access. Upgrade now to access all premium features.
              </p>
              <Button
                onClick={() => router.push(`/state/${state}/free`)}
                className="bg-[#007aff] hover:bg-[#0056cc] text-white font-semibold px-6 py-3 rounded-xl"
              >
                <Crown className="w-4 h-4 mr-2" />
                Get Premium Access
              </Button>
            </div>
          </div>
        </main>

        <SlimFooter />
      </div>
    )
  }

  if (loading) {
    return (
      <LoadingPage
        message={`Loading ${stateInfo.name} ${mode === 'uncommon-sense' ? 'Uncommon Sense' : 'Premium'} Practice${chapter ? ` - ${chapter}` : ''}...`}
      />
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation
          user={user}
          isPremium={isPremium}
          onLogin={handleLogin}
          onSignup={handleSignup}
          onLogout={handleLogout}
          onDashboard={handleDashboard}
        />

        <main className="container mx-auto px-4 py-16">
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
                  Go Back
                </Button>
              </div>
            </div>
          </div>
        </main>

        <SlimFooter />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Always shown to match free practice */}
      <Navigation
        user={user}
        userData={userData}
        isPremium={isPremium}
        isPremiumExpired={isPremiumExpired}
        premiumStatus={premiumStatus}
        onLogin={handleLogin}
        onSignup={handleSignup}
        onLogout={handleLogout}
        onDashboard={handleDashboard}
      />

      <main className="container mx-auto px-4 py-4 lg:py-6">
        <PracticeInterface
          questions={questions}
          state={state}
          isPremium={true}
          startingQuestionNumber={startingQuestionNumber}
          onComplete={handlePracticeComplete}
          onExit={handleExit}
          chapter={chapter}
          mode={mode}
          user={user}
          userData={userData}
          premiumStatus={premiumStatus}
          onDashboard={handleDashboard}
          onLogout={handleLogout}
          // DEPRECATED: These props are no longer needed - progress loads automatically
          previousAttempts={previousAttempts}
          questionNumberStatus={questionNumberStatus}
        />
      </main>

      {/* Footer - Hidden during quiz */}
      <div className="hidden">
        <SlimFooter />
      </div>
    </div>
  )
}