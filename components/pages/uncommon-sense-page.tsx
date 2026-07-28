'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/auth-context'
import { Navigation } from '@/components/navigation'
import { SlimFooter } from '@/components/slim-footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import {
  Brain,
  ArrowLeft,
  Zap,
  TrendingUp,
  Lock,
  Loader2,
  Target,
  Trophy,
  RotateCcw
} from 'lucide-react'
import { STATES, type StateKey } from '@/lib/constants'
import { Question } from '@/lib/types/question'
import { getUncommonSenseQuestions } from '@/lib/services/question-service'
import { updateLastActiveState } from '@/lib/services/progress-service'
import { FeaturePageSkeleton } from '@/components/skeletons/feature-page-skeleton'

interface UncommonSensePageProps {
  state: string
}

export function UncommonSensePageContent({ state }: UncommonSensePageProps) {
  const [loading, setLoading] = useState(true)
  const [questions, setQuestions] = useState<Question[]>([])

  const router = useRouter()
  const { user, userData, isPremium, signOut, loading: authLoading } = useAuth()
  const stateInfo = STATES[state as StateKey]

  // Redirect non-premium users and set last active state
  useEffect(() => {
    if (!authLoading) {
      if (!user || !isPremium) {
        router.push(`/state/${state}/free`)
      } else {
        // Update last active state when a premium user lands here
        updateLastActiveState(user.uid, state)
      }
    }
  }, [user, isPremium, state, router, authLoading])

  useEffect(() => {
    if (user && isPremium) {
      loadUncommonSenseQuestions()
    }
  }, [user, isPremium, state])

  const loadUncommonSenseQuestions = async () => {
    if (!user) return

    try {
      setLoading(true)

      // Load uncommon sense questions
      const uncommonQuestions = await getUncommonSenseQuestions(state)
      setQuestions(uncommonQuestions)

    } catch (error) {
      console.error('Error loading uncommon sense questions:', error)
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

  const handleBackToDashboard = () => {
    router.push(`/dashboard?state=${state}`)
  }

  const handleStartPractice = (category?: string) => {
    const params = new URLSearchParams({
      mode: 'uncommon-sense',
      ...(category && { category })
    })
    router.push(`/state/${state}/practice/premium?${params.toString()}`)
  }

  // Show access denied for non-premium users
  if (!authLoading && (!user || !isPremium)) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <Lock className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <CardTitle>Premium Access Required</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-600 mb-4">
              Uncommon Sense questions require premium membership. Redirecting...
            </p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation
        user={user}
        isPremium={isPremium}
        onLogin={handleLogin}
        onSignup={handleSignup}
        onLogout={handleLogout}
        onDashboard={handleDashboard}
        isLoading={authLoading}
      />

      {/* Banner */}
      <div className="w-full text-white" style={{ backgroundColor: '#f97316' }}>
        <div className="container mx-auto px-4 py-2.5 md:py-3.5 flex flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Brain className="w-4 h-4 md:w-5 md:h-5 shrink-0" style={{ color: 'rgba(255,255,255,0.75)' }} />
            <h1 className="text-sm md:text-base font-bold whitespace-nowrap">
              {STATES[state as StateKey]?.name} - Challenge Questions
            </h1>
          </div>
          <div className="flex items-center gap-1.5">
            <Button
              onClick={handleBackToDashboard}
              size="sm"
              className="bg-white hover:bg-gray-50 font-bold px-3 py-1.5 h-auto text-xs md:text-sm rounded-lg shadow-sm"
              style={{ color: '#f97316' }}
            >
              <ArrowLeft className="w-3.5 h-3.5 mr-1.5" />
              Back to Dashboard
            </Button>
          </div>
        </div>
      </div>

      {authLoading || loading ? (
        <div className="pt-20">
          <FeaturePageSkeleton />
        </div>
      ) : (
        <main className="container mx-auto px-4 py-8">

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { icon: <Brain className="w-5 h-5" style={{ color: '#f97316' }} />, value: questions.length, label: 'Challenge Questions' },
              { icon: <TrendingUp className="w-5 h-5" style={{ color: '#f97316' }} />, value: 'Hard', label: 'Difficulty' },
              { icon: <Zap className="w-5 h-5" style={{ color: '#f97316' }} />, value: 'Tricky', label: 'Phrasing' },
              { icon: <Trophy className="w-5 h-5" style={{ color: '#f97316' }} />, value: 'Premium', label: 'Exclusive' },
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-lg p-4 md:p-5 text-center" style={{ border: '1px solid rgba(0,0,0,0.12)' }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: 'rgba(249,115,22,0.1)' }}>
                  {stat.icon}
                </div>
                <div className="text-xl font-bold text-black mb-0.5">{stat.value}</div>
                <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Why these are hard */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {[
              {
                icon: <TrendingUp className="w-5 h-5 text-red-500" />,
                bg: 'rgba(239,68,68,0.08)',
                title: 'High Failure Rate',
                desc: 'These questions have the highest incorrect answer rate among real Real Estate Exam-takers nationwide.',
              },
              {
                icon: <Zap className="w-5 h-5" style={{ color: '#f97316' }} />,
                bg: 'rgba(249,115,22,0.08)',
                title: 'Tricky Wording',
                desc: 'Misleading or complex phrasing designed to trip up even well-prepared applicants.',
              },
              {
                icon: <Brain className="w-5 h-5 text-purple-500" />,
                bg: 'rgba(168,85,247,0.08)',
                title: 'Counter-Intuitive',
                desc: 'Answers that go against common assumptions and require deeper rule knowledge.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-lg p-5" style={{ border: '1px solid rgba(0,0,0,0.12)' }}>
                <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: item.bg }}>
                  {item.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-1.5 text-sm">{item.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Tips */}
          <div className="grid md:grid-cols-2 gap-5 mb-8">
            <div className="bg-white rounded-lg p-5 md:p-6" style={{ border: '1px solid rgba(0,0,0,0.12)' }}>
              <h2 className="text-base font-semibold text-black mb-4 flex items-center gap-2">
                <Brain className="w-4 h-4" style={{ color: '#f97316' }} />
                Reading Strategy
              </h2>
              <div className="space-y-3">
                {[
                  'Read each question twice before looking at answers',
                  'Pay attention to words like "NOT", "EXCEPT", "ALWAYS"',
                  'Look for absolute terms vs. conditional statements',
                  'Consider all answer options before choosing',
                ].map((tip, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: 'rgba(249,115,22,0.12)' }}>
                      <span className="text-[10px] font-bold" style={{ color: '#f97316' }}>{i + 1}</span>
                    </div>
                    <span className="text-sm text-gray-700">{tip}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg p-5 md:p-6" style={{ border: '1px solid rgba(0,0,0,0.12)' }}>
              <h2 className="text-base font-semibold text-black mb-4 flex items-center gap-2">
                <Target className="w-4 h-4" style={{ color: '#f97316' }} />
                Test-Taking Tips
              </h2>
              <div className="space-y-3">
                {[
                  "Don't rush — these questions need extra time",
                  'Eliminate obviously wrong answers first',
                  'Trust your knowledge, not your gut feeling',
                  'Review explanations carefully after each question',
                ].map((tip, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <RotateCcw className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#f97316' }} />
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
              onClick={() => handleStartPractice()}
              className="text-white font-bold px-10 py-3 rounded-lg shadow-md text-base"
              style={{ backgroundColor: '#f97316' }}
            >
              <Zap className="w-5 h-5 mr-2" />
              Start Challenge — {questions.length} Questions
            </Button>
            <p className="text-xs text-gray-400 mt-3">Premium feature · Only the toughest questions</p>
          </div>
        </main>

      )}
      <SlimFooter />
    </div>
  )
}