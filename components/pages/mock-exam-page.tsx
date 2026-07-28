'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/auth-context'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { MockExamInterface } from '@/components/practice/mock-exam-interface'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Question, MockExam } from '@/lib/types/question'
import { getMockExamQuestions } from '@/lib/services/question-service'
import { saveMockExam } from '@/lib/services/progress-service'
import { STATES, type StateKey } from '@/lib/constants'
import { getStateData } from '@/lib/utils/getStateData'
import { Loader2, Lock, Clock, Target, AlertTriangle, Play } from 'lucide-react'

interface MockExamPageProps {
  state: StateKey
}

export function MockExamPageContent({ state }: MockExamPageProps) {
  const [questions, setQuestions] = useState<Question[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [examStarted, setExamStarted] = useState(false)
  
  const router = useRouter()
  const { user, userData, isPremium, signOut, loading: authLoading } = useAuth()
  const stateInfo = STATES[state]
  const stateData = getStateData(state)

  // Mock exam configuration from state data
  const requiredQuestions = stateData.testOverview.totalQuestions

  // Redirect non-premium users - but wait for auth loading to complete
  useEffect(() => {
    if (!authLoading) {
      if (user && !isPremium) {
        router.push(`/state/${state}/premium`)
      } else if (!user) {
        router.push(`/state/${state}/free`)
      }
    }
  }, [user, isPremium, state, router, authLoading])

  useEffect(() => {
    if (user && isPremium && !examStarted) {
      loadExamQuestions()
    }
  }, [state, user, isPremium, examStarted])

  const loadExamQuestions = async () => {
    try {
      setLoading(true)
      const examQuestions = await getMockExamQuestions(state)
      setQuestions(examQuestions) // getMockExamQuestions now returns correct count
    } catch (error) {
      console.error('Failed to load exam questions:', error)
      setError('Failed to load mock exam questions')
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
    router.push('/dashboard')
  }

  const handleStartExam = () => {
    setExamStarted(true)
  }

  const handleExamComplete = async (exam: Partial<MockExam>) => {
    try {
      if (user) {
        // Save mock exam to database
        const fullExam: MockExam = {
          id: `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          userId: user.uid,
          state,
          questions: exam.questions || [],
          answers: exam.answers || [],
          startTime: exam.startTime || new Date(),
          endTime: exam.endTime,
          score: exam.score,
          passed: exam.passed,
          timeLimit: 0, // No time limit
          completed: true
        }
        
        await saveMockExam(fullExam, isPremium)
        console.log('Mock exam saved:', fullExam)
      }
    } catch (error) {
      console.error('Failed to save mock exam:', error)
    }
  }

  const handleExit = () => {
    router.push('/dashboard')
  }

  // Show loading while auth is loading
  if (authLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle>Loading...</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-600 mb-4">
              Verifying premium access...
            </p>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Show access denied for non-premium users (only after loading is complete)
  if (!user || !isPremium) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <Lock className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <CardTitle>Premium Access Required</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-600 mb-4">
              Mock exams require premium access. Redirecting...
            </p>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation 
          user={user}
          isPremium={isPremium}
          onLogin={handleLogin}
          onSignup={handleSignup}
          onLogout={handleLogout}
          onDashboard={handleDashboard}
        />
        
        <main className="container mx-auto px-4 py-8 flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <Loader2 className="w-12 h-12 animate-spin mx-auto mb-4 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Loading {stateInfo.name} Mock Exam...
            </h2>
            <p className="text-gray-600">
              Preparing your {requiredQuestions}-question practice test
            </p>
          </div>
        </main>
        
        <Footer />
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation 
          user={user}
          isPremium={isPremium}
          onLogin={handleLogin}
          onSignup={handleSignup}
          onLogout={handleLogout}
          onDashboard={handleDashboard}
        />
        
        <main className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-red-600 mb-2">
              Error Loading Mock Exam
            </h2>
            <p className="text-gray-600 mb-4">{error}</p>
            <Button onClick={loadExamQuestions}>
              Try Again
            </Button>
          </div>
        </main>
        
        <Footer />
      </div>
    )
  }

  if (examStarted) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation 
          user={user}
          isPremium={isPremium}
          onLogin={handleLogin}
          onSignup={handleSignup}
          onLogout={handleLogout}
          onDashboard={handleDashboard}
        />
        
        <main className="container mx-auto px-4 py-8">
          <MockExamInterface
            questions={questions}
            state={state}
            onComplete={handleExamComplete}
            onExit={handleExit}
          />
        </main>
        
        <Footer />
      </div>
    )
  }

  // Pre-exam instructions
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation 
        user={user}
        isPremium={isPremium}
        onLogin={handleLogin}
        onSignup={handleSignup}
        onLogout={handleLogout}
        onDashboard={handleDashboard}
      />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {stateInfo.emoji} {stateInfo.name} Mock Real Estate Exam
            </h1>
            <p className="text-xl text-gray-600">
              Practice under real test conditions
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-6 h-6 text-blue-600" />
                Exam Instructions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-bold text-blue-900">Untimed</div>
                  <div className="text-blue-700 text-sm">Test Type</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Target className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="font-bold text-green-900">{requiredQuestions} Questions</div>
                  <div className="text-green-700 text-sm">Total Questions</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <Target className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <div className="font-bold text-purple-900">80%</div>
                  <div className="text-purple-700 text-sm">Passing Score</div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900">Important Guidelines:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>This is an untimed exam - take as long as you need</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>You must answer at least 80% of questions correctly to pass</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>You can navigate between questions and change answers until time runs out</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Submit when you're ready - no time pressure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Questions are randomly selected from the {stateInfo.name} question pool</span>
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-yellow-900 mb-1">Before You Begin</h4>
                    <ul className="text-yellow-800 text-sm space-y-1">
                      <li>• Find a quiet environment without distractions</li>
                      <li>• Ensure stable internet connection</li>
                      <li>• Keep a notepad nearby if needed</li>
                      <li>• Take your time - there's no time limit</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex justify-center pt-4">
                <div className="space-y-3 text-center">
                  <Button 
                    onClick={handleStartExam}
                    size="lg"
                    className="px-8 py-3 text-lg"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Start Mock Exam
                  </Button>
                  <p className="text-sm text-gray-500">
                    You'll receive immediate feedback on each answer
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button 
              onClick={handleExit}
              variant="outline"
            >
              Back to Dashboard
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}