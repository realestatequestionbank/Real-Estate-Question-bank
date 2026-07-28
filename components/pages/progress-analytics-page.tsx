'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/auth-context'
import { Navigation } from '@/components/navigation'
import { SlimFooter } from '@/components/slim-footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  ArrowLeft, 
  TrendingUp, 
  Target, 
  Trophy, 
  BookOpen, 
  CheckCircle, 
  XCircle, 
  Clock, 
  Award,
  BarChart3,
  PieChart,
  Calendar,
  Users,
  Zap
} from 'lucide-react'
import { STATES, type StateKey } from '@/lib/constants'
import { getUserProgress } from '@/lib/services/progress-service'
import { UserProgress, ChapterProgress } from '@/lib/types/question'
import { FeaturePageSkeleton } from '@/components/skeletons/feature-page-skeleton'
import { getStateData } from '@/lib/utils/getStateData'
import { formatQuestionCount } from '@/lib/utils/formatQuestionCount'

interface ProgressAnalyticsPageProps {
  state: string
}

interface AnalyticsData {
  totalQuestions: number
  questionsAttempted: number
  correctAnswers: number
  incorrectAnswers: number
  accuracy: number
  passRate: number
  mockTestsTaken: number
  mockTestsPassed: number
  weakAreas: string[]
  strongAreas: string[]
  timeSpent: number
  recentActivity: Array<{
    date: string
    type: 'practice' | 'mock_test'
    score: number
    questions: number
  }>
  chapterPerformance: Array<{
    label: string
    total: number
    correct: number
    incorrect: number
  }>
}

// Simple SVG Chart Components
const CircularProgress = ({ percentage, color = '#007aff', size = 120, strokeWidth = 8 }: {
  percentage: number
  color?: string
  size?: number
  strokeWidth?: number
}) => {
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#e5e7eb"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl font-bold text-gray-900">{percentage}%</span>
      </div>
    </div>
  )
}

const BarChart = ({ data, color = '#007aff', height = 200 }: {
  data: Array<{ label: string; value: number }>
  color?: string
  height?: number
}) => {
  const maxValue = Math.max(...data.map(d => d.value))
  
  return (
    <div className="space-y-2">
      {data.map((item, index) => (
        <div key={index} className="flex items-center space-x-3">
          <div className="w-20 text-sm font-medium text-gray-700 truncate">
            {item.label}
          </div>
          <div className="flex-1 bg-gray-200 rounded-full h-3 relative overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-1000 ease-out"
              style={{
                width: `${(item.value / maxValue) * 100}%`,
                backgroundColor: color,
                animationDelay: `${index * 100}ms`
              }}
            />
          </div>
          <div className="w-12 text-sm font-bold text-gray-900 text-right">
            {item.value}
          </div>
        </div>
      ))}
    </div>
  )
}


const HorizontalBarChart = ({ data, height = 200 }: {
  data: Array<{ label: string; total: number; correct: number; incorrect: number }>
  height?: number
}) => {
  const maxValue = Math.max(...data.map(d => d.total))
  
  return (
    <div className="space-y-4">
      {data.map((item, index) => {
        const correctPercentage = (item.correct / maxValue) * 100
        const incorrectPercentage = (item.incorrect / maxValue) * 100
        const isLowScore = item.total > 0 && (item.correct / item.total) < 0.7
        
        return (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <div className={`text-sm font-medium ${isLowScore ? 'text-red-700' : 'text-gray-700'}`}>
                {item.label}
              </div>
              <div className="text-xs text-gray-500">
                {item.correct}/{item.total} correct
              </div>
            </div>
            <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
              {/* Correct answers */}
              <div
                className="absolute top-0 left-0 h-full bg-green-500 transition-all duration-1000 ease-out"
                style={{
                  width: `${correctPercentage}%`,
                  animationDelay: `${index * 100}ms`
                }}
              />
              {/* Incorrect answers */}
              <div
                className="absolute top-0 h-full bg-red-500 transition-all duration-1000 ease-out"
                style={{
                  left: `${correctPercentage}%`,
                  width: `${incorrectPercentage}%`,
                  animationDelay: `${index * 150}ms`
                }}
              />
            </div>
            <div className="flex justify-between text-xs">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">Correct: {item.correct}</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-600">Incorrect: {item.incorrect}</span>
                </div>
              </div>
              {isLowScore && (
                <span className="text-red-600 font-medium">Needs improvement</span>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

const DonutChart = ({ data, size = 160 }: {
  data: Array<{ label: string; value: number; color: string }>
  size?: number
}) => {
  const total = data.reduce((sum, item) => sum + item.value, 0)
  const strokeWidth = 20
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  
  let cumulativePercentage = 0
  
  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#f3f4f6"
          strokeWidth={strokeWidth}
          fill="none"
        />
        {data.map((item, index) => {
          if (item.value === 0) return null
          
          const itemPercentage = item.value / total
          const dashLength = itemPercentage * circumference
          const dashOffset = circumference - (cumulativePercentage * circumference)
          
          cumulativePercentage += itemPercentage
          
          return (
            <circle
              key={index}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke={item.color}
              strokeWidth={strokeWidth}
              fill="none"
              strokeDasharray={`${dashLength} ${circumference}`}
              strokeDashoffset={dashOffset}
              className="transition-all duration-1000 ease-out"
              style={{ animationDelay: `${index * 200}ms` }}
            />
          )
        })}
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900">{total}</div>
          <div className="text-xs text-gray-500">Total</div>
        </div>
      </div>
    </div>
  )
}

export function ProgressAnalyticsPageContent({ state }: ProgressAnalyticsPageProps) {
  const [loading, setLoading] = useState(true)
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null)
  const [userProgress, setUserProgress] = useState<UserProgress | null>(null)
  
  const router = useRouter()
  const { user, userData, isPremium, premiumStatus, signOut, loading: authLoading } = useAuth()
  const stateInfo = STATES[state as StateKey]

  useEffect(() => {
    if (user && isPremium) {
      loadAnalytics()
    }
  }, [user, isPremium, state])

  const loadAnalytics = async () => {
    if (!user) return
    
    try {
      setLoading(true)
      const progress = await getUserProgress(user.uid, state)
      setUserProgress(progress)
      
      // Get the actual question count for this state
      const stateData = getStateData(state as StateKey)
      const totalQuestions = stateData.pricing.premiumQuestions
      
      // Calculate analytics from user progress
      const analytics: AnalyticsData = {
        totalQuestions: totalQuestions,
        questionsAttempted: progress?.totalQuestionsAnswered || 0,
        correctAnswers: progress?.correctAnswers || 0,
        incorrectAnswers: (progress?.totalQuestionsAnswered || 0) - (progress?.correctAnswers || 0),
        accuracy: progress?.accuracy || 0,
        passRate: calculatePassProbability(progress),
        mockTestsTaken: progress?.mockTestsTaken || 0,
        mockTestsPassed: progress?.mockTestsPassed || 0,
        weakAreas: ['Parking Rules', 'Traffic Signs'],
        strongAreas: ['Right of Way', 'Speed Limits'],
        timeSpent: 240, // minutes, placeholder
        recentActivity: [
          { date: '2024-01-15', type: 'practice', score: 85, questions: 20 },
          { date: '2024-01-14', type: 'mock_test', score: 78, questions: 36 },
          { date: '2024-01-13', type: 'practice', score: 92, questions: 15 },
        ],
        chapterPerformance: Object.entries(progress?.chapterProgress || {}).map(([chapterName, chapterData]) => ({
          label: chapterName,
          total: chapterData.totalQuestions,
          correct: chapterData.correctAnswers,
          incorrect: chapterData.questionsAttempted - chapterData.correctAnswers
        }))
      }
      
      setAnalytics(analytics)
    } catch (error) {
      console.error('Error loading analytics:', error)
    } finally {
      setLoading(false)
    }
  }

  const calculatePassProbability = (progress: UserProgress | null): number => {
    if (!progress) return 0
    
    const accuracy = progress.accuracy || 0
    const questionsAttempted = progress.totalQuestionsAnswered || 0
    const mockTestsPassed = progress.mockTestsPassed || 0
    const mockTestsTaken = progress.mockTestsTaken || 0
    
    // Simple algorithm to calculate pass probability
    let probability = accuracy
    
    // Boost for sufficient practice
    if (questionsAttempted >= 100) probability += 10
    if (questionsAttempted >= 200) probability += 5
    
    // Boost for mock test performance
    if (mockTestsTaken > 0) {
      const mockTestSuccessRate = (mockTestsPassed / mockTestsTaken) * 100
      probability = (probability + mockTestSuccessRate) / 2
    }
    
    return Math.min(Math.round(probability), 100)
  }

  const handleBackToDashboard = () => {
    router.push(`/dashboard?state=${state}`)
  }

  const handleLogin = () => {
    router.push('/')
  }

  const handleSignup = () => {
    router.push('/')
  }

  const handleDashboard = () => {
    router.push('/dashboard')
  }

  // Show access control for non-premium users
  if (!authLoading && (!user || premiumStatus !== 'active')) {
    return (
      <>
        <Navigation
          user={user}
          userData={userData}
          isPremium={isPremium}
          premiumStatus={premiumStatus}
          onLogin={handleLogin}
          onSignup={handleSignup}
          onLogout={async () => { await signOut() }}
          onDashboard={handleDashboard}
          onPurchaseRenewal={() => {}}
          isLoading={authLoading}
        />
        <main className="container mx-auto px-4 py-8 text-center">
          <div className="max-w-md mx-auto bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-8 h-8 text-orange-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Premium Feature</h2>
            <p className="text-gray-600 mb-6">
              Progress Analytics is available for premium users. Upgrade to access detailed insights about your study progress.
            </p>
            <Button onClick={() => router.push('/')} className="w-full bg-[#007aff] hover:bg-[#0056cc] text-white">
              Upgrade to Premium
            </Button>
          </div>
        </main>
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
        onLogin={handleLogin}
        onSignup={handleSignup}
        onLogout={async () => { await signOut() }}
        onDashboard={handleDashboard}
        onPurchaseRenewal={() => {}}
        isLoading={authLoading}
      />

      {/* Banner */}
      <div className="w-full text-white" style={{ backgroundColor: '#007aff' }}>
        <div className="container mx-auto px-4 py-2.5 md:py-3.5 flex flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 md:w-5 md:h-5 shrink-0" style={{ color: 'rgba(255,255,255,0.75)' }} />
            <h1 className="text-sm md:text-base font-bold whitespace-nowrap">
              {STATES[state as StateKey]?.name} - Progress Analytics
            </h1>
          </div>
          <div className="flex items-center gap-1.5">
            <Button
              onClick={handleBackToDashboard}
              size="sm"
              className="bg-white hover:bg-gray-50 font-bold px-3 py-1.5 h-auto text-xs md:text-sm rounded-lg shadow-sm"
              style={{ color: '#007aff' }}
            >
              <ArrowLeft className="w-3.5 h-3.5 mr-1.5" />
              Back to Dashboard
            </Button>
          </div>
        </div>
      </div>

      {loading || authLoading ? <FeaturePageSkeleton /> : null}

      {!loading && !authLoading && analytics && (
        <main className="container mx-auto px-4 py-8 lg:py-10">

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white rounded-lg p-4 md:p-5 text-center" style={{ border: '1px solid rgba(0,0,0,0.12)' }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: 'rgba(16,185,129,0.1)' }}>
                <Trophy className="w-5 h-5 text-emerald-500" />
              </div>
              <div className="text-2xl font-bold text-black mb-0.5">{analytics.passRate}%</div>
              <div className="text-xs text-gray-500 font-medium">Pass Probability</div>
              <div className="text-xs mt-1" style={{ color: analytics.passRate >= 80 ? '#10b981' : '#f97316' }}>
                {analytics.passRate >= 80 ? 'Ready to pass!' : 'Keep practicing'}
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 md:p-5 text-center" style={{ border: '1px solid rgba(0,0,0,0.12)' }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: 'rgba(0,122,255,0.1)' }}>
                <Target className="w-5 h-5" style={{ color: '#007aff' }} />
              </div>
              <div className="text-2xl font-bold text-black mb-0.5">{Math.round(analytics.accuracy)}%</div>
              <div className="text-xs text-gray-500 font-medium">Overall Accuracy</div>
              <div className="text-xs text-gray-400 mt-1">{analytics.correctAnswers} / {analytics.questionsAttempted}</div>
            </div>

            <div className="bg-white rounded-lg p-4 md:p-5 text-center" style={{ border: '1px solid rgba(0,0,0,0.12)' }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: 'rgba(124,58,237,0.1)' }}>
                <BookOpen className="w-5 h-5 text-purple-500" />
              </div>
              <div className="text-2xl font-bold text-black mb-0.5">{analytics.questionsAttempted}</div>
              <div className="text-xs text-gray-500 font-medium">Questions Practiced</div>
              <div className="text-xs text-gray-400 mt-1">{Math.round((analytics.questionsAttempted / analytics.totalQuestions) * 100)}% of total</div>
            </div>

            <div className="bg-white rounded-lg p-4 md:p-5 text-center" style={{ border: '1px solid rgba(0,0,0,0.12)' }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: 'rgba(249,115,22,0.1)' }}>
                <Target className="w-5 h-5 text-orange-500" />
              </div>
              <div className="text-2xl font-bold text-black mb-0.5">{analytics.mockTestsTaken}</div>
              <div className="text-xs text-gray-500 font-medium">Mock Tests Taken</div>
              <div className="text-xs text-gray-400 mt-1">{analytics.mockTestsPassed} passed</div>
            </div>
          </div>

          {/* ── Test Readiness Hero ── */}
          {(() => {
            const rate = analytics.passRate
            const color = rate >= 80 ? '#10b981' : rate >= 60 ? '#f97316' : '#ef4444'
            const label = rate >= 80 ? 'Ready to pass! 🎉' : rate >= 60 ? 'Getting there 💪' : 'Keep studying 📚'
            const sublabel = rate >= 80
              ? 'Your accuracy and practice count suggest you\'re prepared for the real test.'
              : rate >= 60
              ? 'You\'re making solid progress — more practice will push you over the line.'
              : 'Focus on your weak chapters and take more mock tests to build confidence.'
            const size = 160
            const strokeWidth = 14
            const radius = (size - strokeWidth) / 2
            const circumference = radius * 2 * Math.PI
            const offset = circumference - (rate / 100) * circumference
            return (
              <div className="bg-white rounded-xl p-6 mb-6" style={{ border: '1px solid rgba(0,0,0,0.12)' }}>
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* Gauge */}
                  <div className="relative shrink-0" style={{ width: size, height: size }}>
                    <svg width={size} height={size} className="transform -rotate-90">
                      <circle cx={size/2} cy={size/2} r={radius} stroke="#e5e7eb" strokeWidth={strokeWidth} fill="none" />
                      <circle cx={size/2} cy={size/2} r={radius} stroke={color} strokeWidth={strokeWidth} fill="none"
                        strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round"
                        className="transition-all duration-1000 ease-out" />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-3xl font-bold text-gray-900">{rate}%</span>
                      <span className="text-xs text-gray-500 mt-0.5">readiness</span>
                    </div>
                  </div>
                  {/* Text */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">Test Readiness Score</div>
                    <div className="text-2xl font-bold mb-2" style={{ color }}>{label}</div>
                    <p className="text-sm text-gray-500 max-w-md">{sublabel}</p>
                    {/* Mini progress pills */}
                    <div className="flex flex-wrap gap-3 mt-4 justify-center md:justify-start">
                      {[
                        { label: 'Accuracy', val: `${Math.round(analytics.accuracy)}%`, ok: analytics.accuracy >= 80 },
                        { label: 'Questions', val: `${analytics.questionsAttempted}+`, ok: analytics.questionsAttempted >= 100 },
                        { label: 'Mock tests', val: `${analytics.mockTestsTaken}`, ok: analytics.mockTestsTaken >= 3 },
                      ].map(({ label, val, ok }) => (
                        <div key={label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                          style={{ backgroundColor: ok ? 'rgba(16,185,129,0.1)' : 'rgba(0,0,0,0.05)', color: ok ? '#059669' : '#6b7280' }}>
                          <span>{ok ? '✓' : '○'}</span>
                          <span>{label}: {val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })()}

          {/* ── Completion Progress Bar ── */}
          {(() => {
            const pct = Math.min(Math.round((analytics.questionsAttempted / analytics.totalQuestions) * 100), 100)
            const milestones = [25, 50, 75, 100]
            return (
              <div className="bg-white rounded-xl p-6 mb-6" style={{ border: '1px solid rgba(0,0,0,0.12)' }}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" style={{ color: '#007aff' }} />
                    <span className="font-semibold text-gray-900 text-sm">Question Bank Completion</span>
                  </div>
                  <span className="text-sm font-bold" style={{ color: '#007aff' }}>
                    {analytics.questionsAttempted} / {analytics.totalQuestions} questions
                  </span>
                </div>
                {/* Bar */}
                <div className="relative h-4 bg-gray-100 rounded-full overflow-visible mb-5">
                  <div className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${pct}%`, backgroundColor: '#007aff' }} />
                  {/* Milestone markers */}
                  {milestones.map(m => (
                    <div key={m} className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center"
                      style={{ left: `${m}%`, transform: 'translate(-50%, -50%)' }}>
                      <div className="w-3 h-3 rounded-full border-2 border-white z-10"
                        style={{ backgroundColor: pct >= m ? '#007aff' : '#d1d5db' }} />
                    </div>
                  ))}
                </div>
                {/* Milestone labels */}
                <div className="flex justify-between text-xs text-gray-400 px-0">
                  {milestones.map(m => (
                    <div key={m} className="flex flex-col items-center gap-0.5" style={{ width: '25%', alignItems: m === 25 ? 'flex-start' : m === 100 ? 'flex-end' : 'center' }}>
                      <span className={pct >= m ? 'font-semibold text-gray-700' : ''}>{m}%</span>
                      <span className="text-gray-300">{Math.round(analytics.totalQuestions * m / 100)} Qs</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })()}

          {/* ── Accuracy Breakdown + Mock Tests ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Stacked accuracy bar */}
            <div className="bg-white rounded-xl p-6" style={{ border: '1px solid rgba(0,0,0,0.12)' }}>
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-4 h-4 text-emerald-500" />
                <span className="font-semibold text-gray-900 text-sm">Question Bank Breakdown</span>
              </div>
              {/* Stacked bar */}
              <div className="h-5 rounded-full overflow-hidden flex mb-4">
                {analytics.questionsAttempted > 0 && (
                  <div className="h-full bg-emerald-500 transition-all duration-1000"
                    style={{ width: `${(analytics.correctAnswers / analytics.totalQuestions) * 100}%` }} />
                )}
                {analytics.incorrectAnswers > 0 && (
                  <div className="h-full bg-red-400 transition-all duration-1000"
                    style={{ width: `${(analytics.incorrectAnswers / analytics.totalQuestions) * 100}%` }} />
                )}
                <div className="h-full bg-gray-100 flex-1" />
              </div>
              <div className="space-y-2.5">
                {[
                  { label: 'Correct', val: analytics.correctAnswers, pct: Math.round((analytics.correctAnswers / analytics.totalQuestions) * 100), color: '#10b981', bg: 'rgba(16,185,129,0.1)' },
                  { label: 'Incorrect', val: analytics.incorrectAnswers, pct: Math.round((analytics.incorrectAnswers / analytics.totalQuestions) * 100), color: '#ef4444', bg: 'rgba(239,68,68,0.1)' },
                  { label: 'Unattempted', val: analytics.totalQuestions - analytics.questionsAttempted, pct: Math.round(((analytics.totalQuestions - analytics.questionsAttempted) / analytics.totalQuestions) * 100), color: '#9ca3af', bg: 'rgba(0,0,0,0.05)' },
                ].map(({ label, val, pct, color, bg }) => (
                  <div key={label} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: color }} />
                      <span className="text-sm text-gray-600">{label}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-gray-800">{val}</span>
                      <span className="text-xs px-1.5 py-0.5 rounded-full font-medium" style={{ color, backgroundColor: bg }}>{pct}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mock test summary */}
            <div className="bg-white rounded-xl p-6" style={{ border: '1px solid rgba(0,0,0,0.12)' }}>
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-4 h-4 text-orange-500" />
                <span className="font-semibold text-gray-900 text-sm">Mock Test Results</span>
              </div>
              {analytics.mockTestsTaken === 0 ? (
                <div className="flex flex-col items-center justify-center h-32 text-center">
                  <div className="text-3xl mb-2">🎯</div>
                  <p className="text-sm text-gray-500">No mock tests taken yet.</p>
                  <p className="text-xs text-gray-400 mt-1">Take a mock test to see your results here.</p>
                </div>
              ) : (
                <>
                  {/* Pass rate ring */}
                  <div className="flex items-center gap-5 mb-5">
                    {(() => {
                      const passRate = Math.round((analytics.mockTestsPassed / analytics.mockTestsTaken) * 100)
                      const sz = 80, sw = 10, r = (sz - sw) / 2
                      const circ = r * 2 * Math.PI
                      const off = circ - (passRate / 100) * circ
                      const col = passRate >= 70 ? '#10b981' : '#f97316'
                      return (
                        <div className="relative shrink-0" style={{ width: sz, height: sz }}>
                          <svg width={sz} height={sz} className="transform -rotate-90">
                            <circle cx={sz/2} cy={sz/2} r={r} stroke="#e5e7eb" strokeWidth={sw} fill="none" />
                            <circle cx={sz/2} cy={sz/2} r={r} stroke={col} strokeWidth={sw} fill="none"
                              strokeDasharray={circ} strokeDashoffset={off} strokeLinecap="round" />
                          </svg>
                          <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-lg font-bold text-gray-900">{passRate}%</span>
                          </div>
                        </div>
                      )
                    })()}
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Pass rate</div>
                      <div className="text-lg font-bold text-gray-900">{analytics.mockTestsPassed} / {analytics.mockTestsTaken} passed</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {[
                      { label: 'Tests taken', val: analytics.mockTestsTaken, color: '#007aff' },
                      { label: 'Passed', val: analytics.mockTestsPassed, color: '#10b981' },
                      { label: 'Failed', val: analytics.mockTestsTaken - analytics.mockTestsPassed, color: '#ef4444' },
                    ].map(({ label, val, color }) => (
                      <div key={label} className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">{label}</span>
                        <span className="text-sm font-semibold" style={{ color }}>{val}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* ── Chapter Mastery Grid ── */}
          <div className="bg-white rounded-xl p-6 mb-6" style={{ border: '1px solid rgba(0,0,0,0.12)' }}>
            <div className="flex items-center gap-2 mb-2">
              <BarChart3 className="w-4 h-4" style={{ color: '#007aff' }} />
              <span className="font-semibold text-gray-900 text-sm">Chapter Mastery</span>
            </div>
            <div className="flex items-center gap-4 mb-5 text-xs text-gray-500">
              <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded bg-gray-200" />Not started</div>
              <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded" style={{ backgroundColor: '#fca5a5' }} />Needs work &lt;50%</div>
              <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded" style={{ backgroundColor: '#fcd34d' }} />Improving 50–69%</div>
              <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded" style={{ backgroundColor: '#6ee7b7' }} />Strong 70%+</div>
            </div>
            {analytics.chapterPerformance.length === 0 ? (
              <div className="text-center py-8 text-gray-400 text-sm">
                Start practicing questions to see your chapter mastery map!
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {analytics.chapterPerformance.map((ch, i) => {
                  const pct = ch.total > 0 ? Math.round((ch.correct / ch.total) * 100) : null
                  const { bg, text, border } = pct === null
                    ? { bg: '#f3f4f6', text: '#9ca3af', border: '#e5e7eb' }
                    : pct >= 70
                    ? { bg: 'rgba(16,185,129,0.08)', text: '#059669', border: 'rgba(16,185,129,0.3)' }
                    : pct >= 50
                    ? { bg: 'rgba(245,158,11,0.08)', text: '#d97706', border: 'rgba(245,158,11,0.3)' }
                    : { bg: 'rgba(239,68,68,0.08)', text: '#dc2626', border: 'rgba(239,68,68,0.3)' }
                  return (
                    <div key={i} className="rounded-lg p-3" style={{ backgroundColor: bg, border: `1px solid ${border}` }}>
                      <div className="text-xs font-medium leading-tight mb-1.5" style={{ color: pct === null ? '#9ca3af' : '#374151' }}>
                        {ch.label}
                      </div>
                      <div className="flex items-end justify-between">
                        <span className="text-lg font-bold" style={{ color: text }}>
                          {pct !== null ? `${pct}%` : '—'}
                        </span>
                        <span className="text-xs" style={{ color: text }}>
                          {ch.correct}/{ch.total}
                        </span>
                      </div>
                      {ch.total > 0 && (
                        <div className="mt-2 h-1.5 rounded-full bg-white/60 overflow-hidden">
                          <div className="h-full rounded-full transition-all duration-700"
                            style={{ width: `${pct}%`, backgroundColor: pct! >= 70 ? '#10b981' : pct! >= 50 ? '#f59e0b' : '#ef4444' }} />
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            )}
          </div>

          {/* ── Achievement Badges ── */}
          {(() => {
            const badges = [
              { id: 'first_q', icon: '🚀', label: 'First Steps', desc: 'Answer your first question', unlocked: analytics.questionsAttempted >= 1 },
              { id: 'fifty_q', icon: '📚', label: '50 Questions', desc: 'Practice 50 questions', unlocked: analytics.questionsAttempted >= 50 },
              { id: 'hundred_q', icon: '💯', label: '100 Questions', desc: 'Practice 100 questions', unlocked: analytics.questionsAttempted >= 100 },
              { id: 'half_bank', icon: '🏗️', label: 'Half Way', desc: '50% of question bank done', unlocked: analytics.questionsAttempted >= analytics.totalQuestions * 0.5 },
              { id: 'full_bank', icon: '🏆', label: 'Full Bank', desc: 'Complete the question bank', unlocked: analytics.questionsAttempted >= analytics.totalQuestions },
              { id: 'accuracy_70', icon: '🎯', label: '70% Accuracy', desc: 'Reach 70% overall accuracy', unlocked: analytics.accuracy >= 70 },
              { id: 'accuracy_80', icon: '⚡', label: '80% Accuracy', desc: 'Reach 80% overall accuracy', unlocked: analytics.accuracy >= 80 },
              { id: 'first_mock', icon: '🧪', label: 'First Mock', desc: 'Take your first mock test', unlocked: analytics.mockTestsTaken >= 1 },
              { id: 'mock_pass', icon: '✅', label: 'Mock Passed', desc: 'Pass a mock test', unlocked: analytics.mockTestsPassed >= 1 },
              { id: 'three_mocks', icon: '🔥', label: 'Mock Master', desc: 'Pass 3 mock tests', unlocked: analytics.mockTestsPassed >= 3 },
            ]
            const unlockedCount = badges.filter(b => b.unlocked).length
            return (
              <div className="bg-white rounded-xl p-6 mb-8" style={{ border: '1px solid rgba(0,0,0,0.12)' }}>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-yellow-500" />
                    <span className="font-semibold text-gray-900 text-sm">Achievements</span>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full text-yellow-700" style={{ backgroundColor: 'rgba(245,158,11,0.1)' }}>
                    {unlockedCount} / {badges.length} unlocked
                  </span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {badges.map(({ id, icon, label, desc, unlocked }) => (
                    <div key={id} className={`flex flex-col items-center text-center p-3 rounded-xl transition-all`}
                      style={unlocked
                        ? { backgroundColor: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.3)' }
                        : { backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', opacity: 0.5 }}>
                      <div className="text-2xl mb-1.5" style={{ filter: unlocked ? 'none' : 'grayscale(100%)' }}>{icon}</div>
                      <div className="text-xs font-semibold text-gray-800 mb-0.5">{label}</div>
                      <div className="text-xs text-gray-400 leading-tight">{desc}</div>
                      {unlocked && <div className="text-xs font-bold mt-1.5" style={{ color: '#d97706' }}>Unlocked ✓</div>}
                    </div>
                  ))}
                </div>
              </div>
            )
          })()}
        </main>
      )}


      <SlimFooter />
    </div>
  )
}