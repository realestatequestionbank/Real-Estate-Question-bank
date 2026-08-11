'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/auth-context'
import { CdlDashboardPageContent } from './cdl-dashboard-page'
import { ExpiredPremiumModal } from '@/components/auth/expired-premium-modal'
import { Navigation } from '@/components/navigation'
import { DashboardSkeleton } from '@/components/skeletons/dashboard-skeleton'
import { SlimFooter } from '@/components/slim-footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import {
  Crown,
  Book,
  Target,
  Award,
  Play,
  FileText,
  Lock,
  Loader2,
  BookOpen,
  ClipboardList,
  GraduationCap,
  Calculator,
  CheckCircle,
  Library,
  Database,
  MapPin,
  Zap,
  Brain,
  AlertTriangle,
  Clock,
  TrendingUp,
  Check,
  Shield,
  MessageSquare
} from 'lucide-react'
import { STATES, type StateKey } from '@/lib/constants'
import { getAllUserProgress, updateLastActiveState } from '@/lib/services/progress-service'
import { UserProgress } from '@/lib/types/question'
import { getStateData } from '@/lib/utils/getStateData'
import { formatQuestionCount } from '@/lib/utils/formatQuestionCount'

export function DashboardPageContent() {
  const [loading, setLoading] = useState(true)
  const [progressSummary, setProgressSummary] = useState<any>(null)
  const [stateProgresses, setStateProgresses] = useState<{ [state: string]: UserProgress }>({})
  const [selectedState, setSelectedState] = useState<string>('california')
  const [authCheckComplete, setAuthCheckComplete] = useState(false)
  const [showExpiredModal, setShowExpiredModal] = useState(false)
  const [hasShownExpiredModal, setHasShownExpiredModal] = useState(false)
  const [isRedirecting, setIsRedirecting] = useState(false)
  const [viewMode, setViewMode] = useState<'cdl' | 'regular' | 'loading'>('loading')

  const router = useRouter()
  const { user, userData, isPremium, isPremiumExpired, premiumStatus, daysUntilExpiration, signOut, refreshUserData, loading: authLoading, isCdlPremium, isCdlPremiumExpired } = useAuth()

  useEffect(() => {
    if (isCdlPremium && isPremium) {
      const savedMode = localStorage.getItem('dashboard_view_mode')
      setViewMode(savedMode === 'regular' ? 'regular' : 'cdl')
    } else if (isCdlPremium) {
      setViewMode('cdl')
    } else {
      setViewMode('regular')
    }
  }, [isCdlPremium, isPremium])
  // Default to california if premiumState is 'general' or undefined
  const userPremiumState = (userData?.premiumState && userData?.premiumState !== 'general' && userData?.premiumState !== 'all')
    ? userData?.premiumState
    : 'california'

  // Get the current state's formatted question count
  const currentStateData = getStateData(selectedState as StateKey)
  const questionCount = formatQuestionCount(currentStateData.pricing.premiumQuestions)

  // Initialize selectedState from query param or userData.lastActiveState
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const stateParam = params.get('state')

    if (stateParam && stateParam in STATES) {
      setSelectedState(stateParam as StateKey)
    } else if (userData?.lastActiveState) {
      setSelectedState(userData.lastActiveState)
    } else {
      setSelectedState(userPremiumState)
    }
  }, [userData?.lastActiveState, userPremiumState])


  const handleUpgrade = async () => {
    if (!user) return
    setIsRedirecting(true)
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.uid }),
      })
      const data = await response.json()

      if (data.error) {
        console.error('Checkout error:', data.error)
        alert('Failed to create checkout session')
        setIsRedirecting(false)
        return
      }

      if (data.url) {
        window.location.href = data.url
      }
    } catch (error) {
      console.error('Error creating checkout session:', error)
      alert('An error occurred. Please try again.')
      setIsRedirecting(false)
    }
  }

  // Wait for auth to complete before deciding what to show
  useEffect(() => {
    if (!authLoading) {
      if (!user) {
        router.push('/')
      } else {
        setAuthCheckComplete(true)
      }
    }
  }, [user, authLoading, router])

  useEffect(() => {
    if (user && isPremium) {
      loadDashboardData()
    }
  }, [user, isPremium])



  // Set up interval to refresh user data and check expiration
  useEffect(() => {
    if (user && userData && isPremium) {
      const interval = setInterval(async () => {
        await refreshUserData()
      }, 30000) // Check every 30 seconds

      return () => clearInterval(interval)
    }
  }, [user, userData, isPremium, refreshUserData])

  const loadDashboardData = async () => {
    if (!user) return

    try {
      setLoading(true)

      // Fetch all state progress in a single query
      const stateProgressMap = await getAllUserProgress(user.uid)
      setStateProgresses(stateProgressMap)

      // Calculate progress summary client-side
      let totalStates = 0
      let totalQuestionsAnswered = 0
      let totalCorrectAnswers = 0
      let maxStudyStreak = 0
      let totalMockTestsTaken = 0
      let totalMockTestsPassed = 0
      let avgReadinessScore = 0

      Object.values(stateProgressMap).forEach((progress) => {
        totalStates++
        totalQuestionsAnswered += progress.totalQuestionsAnswered
        totalCorrectAnswers += progress.correctAnswers
        maxStudyStreak = Math.max(maxStudyStreak, progress.studyStreak)
        totalMockTestsTaken += progress.mockTestsTaken || 0
        totalMockTestsPassed += progress.mockTestsPassed || 0
        avgReadinessScore += progress.readinessScore || 0
      })

      const averageAccuracy = totalQuestionsAnswered > 0
        ? (totalCorrectAnswers / totalQuestionsAnswered) * 100
        : 0

      const readinessScore = totalStates > 0 ? Math.round(avgReadinessScore / totalStates) : 0

      const summary = {
        totalStates,
        totalQuestionsAnswered,
        correctAnswers: totalCorrectAnswers,
        averageAccuracy: Math.round(averageAccuracy * 100) / 100,
        studyStreak: maxStudyStreak,
        readinessScore,
        mockTestsTaken: totalMockTestsTaken,
        mockTestsPassed: totalMockTestsPassed,
        recentSessions: []
      }

      setProgressSummary(summary)

      // Cache the data using localStorage
      try {
        localStorage.setItem(`dashboard_progress_${user.uid}`, JSON.stringify(stateProgressMap))
        localStorage.setItem(`dashboard_summary_${user.uid}`, JSON.stringify(summary))
        localStorage.setItem(`dashboard_cache_time_${user.uid}`, Date.now().toString())
      } catch (e) {
        console.warn('Failed to cache dashboard data', e)
      }

    } catch (error) {
      console.error('Error loading dashboard data:', error)
    } finally {
      setLoading(false)
    }
  }

  // Load cached data on mount
  useEffect(() => {
    if (user && isPremium) {
      try {
        const cachedProgress = localStorage.getItem(`dashboard_progress_${user.uid}`)
        const cachedSummary = localStorage.getItem(`dashboard_summary_${user.uid}`)

        if (cachedProgress && cachedSummary) {
          setStateProgresses(JSON.parse(cachedProgress))
          setProgressSummary(JSON.parse(cachedSummary))
          // If we have cache, we don't need to show the loading skeleton
          setLoading(false)
        }
      } catch (e) {
        console.warn('Failed to load cached dashboard data', e)
      }
    }
  }, [user, isPremium])

  const handleLogin = () => {
    router.push('/')
  }

  const handleSignup = () => {
    router.push('/')
  }

  const handleLogout = async () => {
    await signOut()
    router.push('/')
  }

  const handleDashboard = () => {
    // Already on dashboard
  }

  const handleMockTest = () => {
    router.push(`/state/${selectedState}/mock-test`)
  }


  const handleStateChange = (newState: string) => {
    setSelectedState(newState)
    if (user) {
      updateLastActiveState(user.uid, newState)
    }
  }

  const handleSwitchToCdl = () => {
    localStorage.setItem('dashboard_view_mode', 'cdl')
    setViewMode('cdl')
  }

  const handleRevisionGuide = () => {
    router.push(`/state/${selectedState}/revision-guide`)
  }

  const handleFullQuestionBank = () => {
    router.push(`/state/${selectedState}/question-bank`)
  }

  const handleUncommonSenseQuestions = () => {
    router.push(`/state/${selectedState}/uncommon-sense`)
  }

  const handleRoadSignsGuide = () => {
    router.push(`/state/${selectedState}/road-signs`)
  }

  const handleDmvHandbook = () => {
    router.push(`/handbooks/${selectedState}`)
  }

  const handleProgressAnalytics = () => {
    router.push(`/state/${selectedState}/progress`)
  }

  const handleRenewal = async () => {
    if (!user) return
    setIsRedirecting(true)
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: user.uid,
        }),
      })

      const data = await response.json()

      if (data.error) {
        console.error('Checkout error:', data.error)
        alert('Failed to create checkout session')
        setIsRedirecting(false)
        return
      }

      if (data.url) {
        // Maintain redirecting state
        window.location.href = data.url
      }
    } catch (error) {
      console.error('Error creating checkout session:', error)
      alert('An error occurred. Please try again.')
      setIsRedirecting(false)
    }
  }

  const getUserDisplayName = () => {
    if (userData?.firstName && userData?.lastName) {
      return `${userData.firstName} ${userData.lastName}`
    }
    return user?.displayName || user?.email?.split('@')[0] || 'User'
  }

  // Show loading if auth is still processing



  // Show loading if view mode is not determined yet
  if (user && userData && isCdlPremium && isPremium && viewMode === 'loading' && !authLoading) {
    return <DashboardSkeleton />
  }

  // Render CDL premium dashboard if user has CDL Premium status and CDL mode is active
  if (user && userData && isCdlPremium && !authLoading && (viewMode === 'cdl' || (!isPremium && viewMode === 'loading'))) {
    return (
      <CdlDashboardPageContent
        showSwitchView={isPremium}
        onSwitchView={() => {
          localStorage.setItem('dashboard_view_mode', 'regular')
          setViewMode('regular')
        }}
        selectedState={selectedState}
        setSelectedState={setSelectedState}
      />
    )
  }

  // Show access denied only if we're certain user is not premium
  // Show access denied only if we're certain user is not premium and auth is done
  if (!authLoading && (!user || (!isPremium && userData))) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navigation
          user={user}
          userData={userData}
          isPremium={isPremium}
          onLogin={handleLogin}
          onSignup={handleSignup}
          onLogout={handleLogout}
          onDashboard={handleDashboard}
          currentPage="dashboard"
          isLoading={authLoading}
          currentState={selectedState as StateKey}
          currentLicenseType="car"
          showSwitchToCdl={isCdlPremium}
          onStateChange={handleStateChange}
          onSwitchToCdl={handleSwitchToCdl}
        />

        <main className="flex-1 flex items-center justify-center p-4 py-12 lg:py-20">
          <div className="max-w-2xl w-full">
            <div className="bg-white rounded-[32px] p-8 lg:p-12 shadow-2xl border border-gray-100 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#007aff] to-blue-400" />

              <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Crown className="w-10 h-10 text-[#007aff]" />
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-black mb-4">
                Unlock Your Premium Dashboard
              </h1>

              <p className="text-lg text-gray-600 mb-10 max-w-md mx-auto leading-relaxed">
                You're just one step away from accessing your personalized study statistics, mock exams, and the full question bank.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-10 text-left max-w-md mx-auto">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Full Access to All States</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Detailed Explanations</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Unlimited Mock Tests</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Pass Guarantee</span>
                </div>
              </div>

              <div className="space-y-4">
                <Button
                  onClick={handleUpgrade}
                  disabled={isRedirecting}
                  className="w-full bg-[#007aff] hover:bg-[#0056cc] text-white font-bold py-4 rounded-2xl text-lg shadow-lg hover:shadow-xl transition-all h-auto"
                >
                  {isRedirecting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Connecting to Stripe...
                    </>
                  ) : (
                    'Upgrade to Premium Now'
                  )}
                </Button>

                <div className="flex items-center justify-center gap-2 text-gray-400">
                  <Shield className="w-4 h-4" />
                  <span className="text-xs font-medium uppercase tracking-wider">Secure Checkout Powered by Stripe</span>
                </div>
              </div>
            </div>
          </div>
        </main>

        <SlimFooter />

        {/* Use AuthModal for the redirecting overlay consistency if needed, or just handle manually above */}
      </div>
    )
  }

  // Render main layout immediately
  return (
    <div className="min-h-screen bg-white">
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
        currentPage="dashboard"
        isLoading={authLoading}
        currentState={selectedState as StateKey}
        currentLicenseType="car"
        showSwitchToCdl={isCdlPremium}
        onStateChange={handleStateChange}
        onSwitchToCdl={handleSwitchToCdl}
      />

      {loading || authLoading ? <DashboardSkeleton /> : null}
      {!(loading || authLoading) && (
        <>
          {/* Welcome Header Blue Banner (Full Width, placed right below the header navigation) */}
          <div className="w-full bg-[#007aff] text-white">
            <div className="container mx-auto px-4 py-2.5 md:py-3.5 flex flex-row items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Crown className="w-4 h-4 md:w-5 md:h-5 text-yellow-300 shrink-0" />
                <h1 className="text-sm md:text-base font-bold whitespace-nowrap">
                  {STATES[selectedState as StateKey]?.name} Dashboard
                </h1>
              </div>

              {/* Quick Action */}
              <div className="flex items-center gap-1.5">
                <Button
                  onClick={handleFullQuestionBank}
                  size="sm"
                  className="bg-white text-[#007aff] hover:bg-gray-50 font-bold px-2.5 py-1.5 h-auto text-xs md:text-sm rounded-lg shadow-sm"
                >
                  <Play className="w-3 h-3 md:w-3.5 md:h-3.5 mr-1" />
                  Continue Studying
                </Button>
                <Button
                  onClick={handleProgressAnalytics}
                  size="sm"
                  className="bg-transparent border border-white/30 text-white hover:bg-white/10 font-bold px-2.5 py-1.5 h-auto text-xs md:text-sm rounded-lg transition-all"
                >
                  <TrendingUp className="w-3 h-3 md:w-3.5 md:h-3.5 mr-1" />
                  See Progress
                </Button>
              </div>
            </div>
          </div>

          <main className="container mx-auto px-4 py-6 md:py-10 lg:py-16">

          {/* Premium Expiration Warning */}
          {daysUntilExpiration !== null && daysUntilExpiration > 0 && (
            (() => {
              const reminderThreshold = userData?.planDuration === 14 ? 3 : 7;
              if (daysUntilExpiration <= reminderThreshold) {
                return (
                  <div className="mb-10 md:mb-12 lg:mb-16">
                    <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-2xl p-6 lg:p-8">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                          <AlertTriangle className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-lg font-bold text-orange-900">Premium Expiring Soon</h3>
                            <Clock className="w-5 h-5 text-orange-600" />
                          </div>
                          <p className="text-orange-800 mb-4 leading-relaxed">
                            Your premium access expires in <span className="font-semibold">{daysUntilExpiration} day{daysUntilExpiration !== 1 ? 's' : ''}</span>.
                            Renew now to continue enjoying unlimited access to all premium features.
                          </p>
                          <Button
                            size="lg"
                            onClick={async () => {
                              setIsRedirecting(true)
                              try {
                                const response = await fetch('/api/create-checkout-session', {
                                  method: 'POST',
                                  headers: { 'Content-Type': 'application/json' },
                                  body: JSON.stringify({ userId: userData?.uid }),
                                })
                                const data = await response.json()
                                if (data.url) {
                                  window.location.href = data.url
                                } else {
                                  setIsRedirecting(false)
                                }
                              } catch (error) {
                                console.error('Error creating renewal session:', error)
                                setIsRedirecting(false)
                              }
                            }}
                            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-xl shadow-lg"
                          >
                            <Crown className="w-5 h-5 mr-2" />
                            Renew Premium Access
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }
              return null;
            })()
          )}



          {/* Practice Section */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4 select-none">
              <h2 className="text-base md:text-lg font-semibold text-gray-800 shrink-0">Practice</h2>
              <div className="h-[1px] bg-gray-200 flex-grow" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {/* Full Question Bank */}
              <div
                className="bg-white p-4 md:p-5 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group flex flex-col justify-between h-full"
                style={{ borderRadius: '8px', border: '1px solid rgba(0,0,0,0.12)' }}
                onClick={handleFullQuestionBank}
              >
                <div className="text-center flex-1 flex flex-col justify-between h-full">
                  <div>
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#007aff] to-blue-600 rounded-lg md:rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow group-hover:scale-105 transition-transform duration-300">
                      <Database className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-black mb-1.5 md:mb-2">Complete Question Bank</h3>
                    <p className="text-gray-600 mb-3 md:mb-4 leading-relaxed text-xs md:text-sm">
                      Access our full collection of {questionCount} practice questions organized by topic.
                    </p>
                  </div>
                  <Button
                    className="w-full bg-[#007aff] hover:bg-[#0056cc] text-white font-semibold py-1.5 md:py-2 rounded-lg shadow text-xs md:text-sm mt-auto"
                  >
                    <Library className="w-3.5 h-3.5 mr-1.5" />
                    Start Practice
                  </Button>
                </div>
              </div>

              {/* Mock Test */}
              <div
                className="bg-white p-4 md:p-5 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group flex flex-col justify-between h-full"
                style={{ borderRadius: '8px', border: '1px solid rgba(0,0,0,0.12)' }}
                onClick={handleMockTest}
              >
                <div className="text-center flex-1 flex flex-col justify-between h-full">
                  <div>
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg md:rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow group-hover:scale-105 transition-transform duration-300">
                      <ClipboardList className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-black mb-1.5 md:mb-2">Mock Test Simulation</h3>
                    <p className="text-gray-600 mb-3 md:mb-4 leading-relaxed text-xs md:text-sm">
                      Take realistic practice tests that simulate the actual Real Estate exam experience.
                    </p>
                  </div>
                  <Button
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-1.5 md:py-2 rounded-lg shadow text-xs md:text-sm mt-auto"
                  >
                    <Target className="w-3.5 h-3.5 mr-1.5" />
                    Take Mock Test
                  </Button>
                </div>
              </div>

              {/* Uncommon Sense Questions */}
              <div
                className="bg-white p-4 md:p-5 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group flex flex-col justify-between h-full"
                style={{ borderRadius: '8px', border: '1px solid rgba(0,0,0,0.12)' }}
                onClick={handleUncommonSenseQuestions}
              >
                <div className="text-center flex-1 flex flex-col justify-between h-full">
                  <div>
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg md:rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow group-hover:scale-105 transition-transform duration-300">
                      <Brain className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-black mb-1.5 md:mb-2">Challenge Questions</h3>
                    <p className="text-gray-600 mb-3 md:mb-4 leading-relaxed text-xs md:text-sm">
                      Master the trickiest questions that most people get wrong on their first attempt.
                    </p>
                  </div>
                  <Button
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-1.5 md:py-2 rounded-lg shadow text-xs md:text-sm mt-auto"
                  >
                    <Zap className="w-3.5 h-3.5 mr-1.5" />
                    Challenge Mode
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Study Material Section */}
          <div className="mb-12 md:mb-16 lg:mb-20">
            <div className="flex items-center gap-3 mb-4 select-none">
              <h2 className="text-base md:text-lg font-semibold text-gray-800 shrink-0">Study Material</h2>
              <div className="h-[1px] bg-gray-200 flex-grow" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">

              {/* Real Estate Glossary Guide */}
              <div
                className="bg-white p-4 md:p-5 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group flex flex-col justify-between h-full"
                style={{ borderRadius: '8px', border: '1px solid rgba(0,0,0,0.12)' }}
                onClick={() => router.push('/real-estate-glossary')}
              >
                <div className="text-center flex-1 flex flex-col justify-between h-full">
                  <div>
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg md:rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow group-hover:scale-105 transition-transform duration-300">
                      <MapPin className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-black mb-1.5 md:mb-2">Real Estate Glossary Guide</h3>
                    <p className="text-gray-600 mb-3 md:mb-4 leading-relaxed text-xs md:text-sm">
                      Learn the 50 most essential real estate terminology vocabulary terms for your exam.
                    </p>
                  </div>
                  <Button
                    className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-1.5 md:py-2 rounded-lg shadow text-xs md:text-sm mt-auto"
                  >
                    <BookOpen className="w-3.5 h-3.5 mr-1.5" />
                    Study Glossary
                  </Button>
                </div>
              </div>

              {/* Revision Guide */}
              <div
                className="bg-white p-4 md:p-5 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group flex flex-col justify-between h-full"
                style={{ borderRadius: '8px', border: '1px solid rgba(0,0,0,0.12)' }}
                onClick={handleRevisionGuide}
              >
                <div className="text-center flex-1 flex flex-col justify-between h-full">
                  <div>
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg md:rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow group-hover:scale-105 transition-transform duration-300">
                      <FileText className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-black mb-1.5 md:mb-2">Revision Guide</h3>
                    <p className="text-gray-600 mb-3 md:mb-4 leading-relaxed text-xs md:text-sm">
                      Revision guide for quick last-minute review before your Real Estate exam.
                    </p>
                  </div>
                  <Button
                    className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-1.5 md:py-2 rounded-lg shadow text-xs md:text-sm mt-auto"
                  >
                    <BookOpen className="w-3.5 h-3.5 mr-1.5" />
                    Open Guide
                  </Button>
                </div>
              </div>

              {/* Real Estate Math & Calculations */}
              <div
                className="bg-white p-4 md:p-5 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group flex flex-col justify-between h-full"
                style={{ borderRadius: '8px', border: '1px solid rgba(0,0,0,0.12)' }}
                onClick={() => router.push('/real-estate-math-prep')}
              >
                <div className="text-center flex-1 flex flex-col justify-between h-full">
                  <div>
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg md:rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow group-hover:scale-105 transition-transform duration-300">
                      <Calculator className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-black mb-1.5 md:mb-2">Real Estate Math Prep</h3>
                    <p className="text-gray-600 mb-3 md:mb-4 leading-relaxed text-xs md:text-sm">
                      Master formulas, LTV, commission calculations, and property tax math.
                    </p>
                  </div>
                  <Button
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1.5 md:py-2 rounded-lg shadow text-xs md:text-sm mt-auto"
                  >
                    <BookOpen className="w-3.5 h-3.5 mr-1.5" />
                    Open Math Prep
                  </Button>
                </div>
              </div>

              {/* State Licensing Requirements */}
              <div
                className="bg-white p-4 md:p-5 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group flex flex-col justify-between h-full"
                style={{ borderRadius: '8px', border: '1px solid rgba(0,0,0,0.12)' }}
                onClick={() => router.push(`/state-guides/${selectedState}`)}
              >
                <div className="text-center flex-1 flex flex-col justify-between h-full">
                  <div>
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg md:rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow group-hover:scale-105 transition-transform duration-300">
                      <GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-black mb-1.5 md:mb-2">Licensing Guidelines</h3>
                    <p className="text-gray-600 mb-3 md:mb-4 leading-relaxed text-xs md:text-sm">
                      Review requirements, fees, hours, and steps to get licensed in your state.
                    </p>
                  </div>
                  <Button
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-1.5 md:py-2 rounded-lg shadow text-xs md:text-sm mt-auto"
                  >
                    <BookOpen className="w-3.5 h-3.5 mr-1.5" />
                    View State Guide
                  </Button>
                </div>
              </div>

              {/* Official Handbook Summary */}
              <div
                className="bg-white p-4 md:p-5 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group flex flex-col justify-between h-full"
                style={{ borderRadius: '8px', border: '1px solid rgba(0,0,0,0.12)' }}
                onClick={() => router.push(`/${selectedState}-real-estate-handbook-summary`)}
              >
                <div className="text-center flex-1 flex flex-col justify-between h-full">
                  <div>
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg md:rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow group-hover:scale-105 transition-transform duration-300">
                      <Library className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-black mb-1.5 md:mb-2">Handbook Summary</h3>
                    <p className="text-gray-600 mb-3 md:mb-4 leading-relaxed text-xs md:text-sm">
                      Key takeaways and cheat sheets condensed from the official state manuals.
                    </p>
                  </div>
                  <Button
                    className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-1.5 md:py-2 rounded-lg shadow text-xs md:text-sm mt-auto"
                  >
                    <BookOpen className="w-3.5 h-3.5 mr-1.5" />
                    Read Summary
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </main>
      </>
      )}

      <SlimFooter />

      <ExpiredPremiumModal
        isOpen={showExpiredModal}
        onClose={() => {
          setShowExpiredModal(false)
          setIsRedirecting(false)
        }}
        onRenew={handleRenewal}
        isRedirecting={isRedirecting}
        expirationDate={userData?.premiumExpiresAt}
        userName={getUserDisplayName()}
      />
    </div>
  )
}