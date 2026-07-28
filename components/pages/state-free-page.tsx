'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '@/contexts/auth-context'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { AuthModal } from '@/components/auth/auth-modal'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { STATES, PRICING, FLASH_SALE, formatOfferExpiryDate, getEffectivePricing, type StateKey } from '@/lib/constants'
import { FlashSaleBanner } from '@/components/flash-sale-banner'
import { getStateData } from '@/lib/utils/getStateData'
import { formatQuestionCount } from '@/lib/utils/formatQuestionCount'
import { getDepartmentName } from '@/lib/data/state-departments'
import {
  Crown,
  Book,
  BookOpen,
  ExternalLink,
  Clock,
  Target,
  ArrowRight,
  CheckCircle,
  ChevronRight,
  Star,
  Award,
  Users,
  TrendingUp,
  Shield,
  X,
  Loader2,
  ChevronLeft,
  Download,
  Sparkles,
  Play
} from 'lucide-react'
import { ExpiredPremiumModal } from '@/components/auth/expired-premium-modal'
import { isPremiumExpired as checkIfPremiumExpired } from '@/lib/firebase/auth'
import { LoadingPage } from '@/components/ui/loading-page'
import { StateFreeSkeleton } from '@/components/skeletons/state-free-skeleton'
import { PurchaseRenewalDialog } from '@/components/purchase-renewal-dialog'
import { SocialProofNotifications } from '@/components/social-proof-notifications'
import { PremiumVideoModal } from '@/components/modals/premium-video-modal'
import { StateSelectorModal } from '@/components/state-selector-modal'

// PDF department names matching actual file names
const PDF_DEPARTMENT_NAMES: Record<string, string> = {
  'arizona': 'MVD',
  'arkansas': 'DFA',
  'georgia': 'DDS',
  'illinois': 'SOS',
  'indiana': 'BMV',
  'iowa': 'DOT',
  'louisiana': 'OMV',
  'maine': 'BMV',
  'maryland': 'MVA',
  'massachusetts': 'RMV',
  'michigan': 'SOS',
  'minnesota': 'DVS',
  'mississippi': 'DPS',
  'missouri': 'DOR',
  'montana': 'MVD',
  'new-jersey': 'MVC',
  'new-mexico': 'MVD',
  'north-dakota': 'DOT',
  'ohio': 'BMV',
  'oklahoma': 'DPS',
  'pennsylvania': 'PennDOT',
  'south-dakota': 'DPS',
  'tennessee': 'DOS',
  'texas': 'DPS',
  'washington': 'DOL',
  'wisconsin': 'DOT',
  'wyoming': 'DOT',
}

const getPdfDepartmentName = (state: string): string => {
  return PDF_DEPARTMENT_NAMES[state] || 'Real Estate'
}

interface StateFreePageProps {
  state: StateKey
}

export function StateFreePageContent({ state }: StateFreePageProps) {
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login')
  const [isPremiumLogin, setIsPremiumLogin] = useState(false)
  const [isRedirecting, setIsRedirecting] = useState(false)
  const [showExpiredModal, setShowExpiredModal] = useState(false)
  const [showBanner, setShowBanner] = useState(true)
  const [selectedDuration, setSelectedDuration] = useState<30 | 36500>(30)
  const [showPurchaseModal, setShowPurchaseModal] = useState(false)
  const [purchaseLoading, setPurchaseLoading] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [showVideoModal, setShowVideoModal] = useState(false)
  const [stateModalOpen, setStateModalOpen] = useState(false)
  const router = useRouter()

  // Ref for plan scroll container
  const planScrollRef = useRef<HTMLDivElement>(null)

  // Handle scroll to sync button state with visible plan
  const handlePlanScroll = useCallback(() => {
    const container = planScrollRef.current
    if (!container) return

    const scrollLeft = container.scrollLeft
    const containerWidth = container.clientWidth

    // Detect which card is most visible based on scroll position
    if (scrollLeft > containerWidth * 0.5) {
      setSelectedDuration(36500)
    } else {
      setSelectedDuration(30)
    }
  }, [])

  // Get state-specific data dynamically based on the current state (this is instant)
  const stateData = getStateData(state)
  const effectivePricing = getEffectivePricing()
  const departmentInfo = getDepartmentName(state)

  const { user, userData, isPremium, isPremiumExpired, premiumStatus, signOut, loading: authLoading } = useAuth()

  // Analytics tracking for premium section views
  useEffect(() => {
    const premiumSection = document.getElementById('premium-section')
    if (!premiumSection) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Track when user reaches premium section
            console.log(`Analytics: User viewed premium section on ${state} page`)

            // Send to analytics service (replace with your analytics provider)
            if (typeof window !== 'undefined' && (window as any).gtag) {
              (window as any).gtag('event', 'view_premium_section', {
                event_category: 'conversion',
                event_label: state,
                value: 1
              })
            }

            // You could also track this in your database
            fetch('/api/analytics/premium-section-view', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                state,
                timestamp: new Date().toISOString(),
                userAgent: navigator.userAgent,
                referrer: document.referrer
              })
            }).catch(err => console.log('Analytics tracking failed:', err))
          }
        })
      },
      { threshold: 0.3 } // Trigger when 30% of section is visible
    )

    observer.observe(premiumSection)
    return () => observer.disconnect()
  }, [state])

  const stateInfo = STATES[state]

  const scrollToPremium = () => {
    const premiumSection = document.getElementById('premium-section')
    if (premiumSection) {
      premiumSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToFreePracticeTests = () => {
    const freeTestsSection = document.getElementById('free-practice-tests')
    if (freeTestsSection) {
      freeTestsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Swipe handling functions
  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe && currentImageIndex < 1) {
      setCurrentImageIndex(1) // Swipe left to show mobile image
    }
    if (isRightSwipe && currentImageIndex > 0) {
      setCurrentImageIndex(0) // Swipe right to show desktop image
    }
  }

  const handleUpgradePremium = async (duration: number) => {
    if (!user) {
      // Redirect to dedicated get-premium page
      router.push(`/get-premium?plan=${duration}`)
      return
    }

    await createCheckoutSession(user.uid, duration)
  }

  const handlePurchaseFromModal = async (duration: number) => {
    if (!user) return

    setPurchaseLoading(true)
    try {
      await createCheckoutSession(user.uid, duration)
    } finally {
      setPurchaseLoading(false)
      setShowPurchaseModal(false)
    }
  }

  const handleCompletePurchaseClick = () => {
    // Track pricing button click
    console.log(`Analytics: User clicked pricing button on ${state} page`)

    // Send to analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click_pricing_button', {
        event_category: 'conversion',
        event_label: state,
        value: 1
      })
    }

    fetch('/api/analytics/pricing-button-click', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        state,
        timestamp: new Date().toISOString(),
        userId: user?.uid || 'anonymous',
        userAgent: navigator.userAgent
      })
    }).catch(err => console.log('Analytics tracking failed:', err))

    if (!user) {
      // Redirect to dedicated get-premium page
      router.push('/get-premium?plan=36500')
      return
    }

    // For never_purchased users, show the modal for plan selection
    setShowPurchaseModal(true)
  }

  const handleUpgrade = async () => {
    if (!user) return
    setIsRedirecting(true)
    await createCheckoutSession(user.uid, 90)
  }

  const createCheckoutSession = async (userId: string, duration: number) => {
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: userId,
          state: state,
          duration: duration,
        }),
      })

      const data = await response.json()

      if (data.error) {
        console.error('Checkout error:', data.error)
        alert('Failed to create checkout session')
        setIsRedirecting(false)
        setAuthModalOpen(false)
        return
      }

      if (data.url) {
        // Stay in redirecting state until the actual page change happens
        window.location.href = data.url
      }
    } catch (error) {
      console.error('Error creating checkout session:', error)
      alert('An error occurred. Please try again.')
      setIsRedirecting(false)
      setAuthModalOpen(false)
    }
  }

  const handleAuthSuccess = async (mode: 'login' | 'signup', result?: any) => {
    if (mode === 'signup' && result?.user) {
      // Transition to redirecting state inside the modal
      setIsRedirecting(true)
      // Redirect to Stripe payment immediately after signup
      await createCheckoutSession(result.user.uid, selectedDuration)
    } else {
      // Normal login success, close modal
      setAuthModalOpen(false)

      if (mode === 'login' && result?.userData) {
        // Check if user has expired premium
        if (result.userData.isPremium && checkIfPremiumExpired(result.userData)) {
          // Show expired premium modal for renewal
          setShowExpiredModal(true)
        } else if (result.userData.isPremium) {
          // Redirect active premium users to dashboard
          router.push('/dashboard')
        }
      }
    }
  }

  // No auto-redirect - let users browse and choose to upgrade

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
    } else if (user && userData && userData.isPremium && isPremiumExpired) {
      // User has expired premium - show renewal modal
      setShowExpiredModal(true)
    } else {
      setAuthMode('signup')
      setAuthModalOpen(true)
    }
  }

  const handleStateSelect = (selectedState: StateKey) => {
    router.push(`/state/${selectedState}/free`)
  }

  const handleStartPractice = () => {
    // Redirect to practice interface (to be implemented)
    router.push(`/state/${state}/practice/free`)
  }

  const handleRenewal = async () => {
    if (user) await createCheckoutSession(user.uid, 90)
  }

  const getUserDisplayName = () => {
    if (userData?.firstName && userData?.lastName) {
      return `${userData.firstName} ${userData.lastName}`
    }
    return user?.displayName || user?.email?.split('@')[0] || 'User'
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Banner */}
      {showBanner && (
        <FlashSaleBanner
          onClose={() => setShowBanner(false)}
          onClick={scrollToPremium}
          sticky={false}
        />
      )}
      <div className="sticky top-0 z-50">
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
          onPurchaseRenewal={handleCompletePurchaseClick}
          premiumButtonText="Get Premium"
          premiumButtonAction={scrollToPremium}
          isLoading={authLoading}
          onSelectState={() => setStateModalOpen(true)}
        />
      </div>

      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-[#007aff] cursor-pointer transition-colors duration-200">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link href="/#states" className="hover:text-[#007aff] cursor-pointer transition-colors duration-200">
              States
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-900 font-medium">{stateInfo.name}</span>
          </div>
        </div>
      </div>

      <main>
        {/* 1. Hero Section */}
        <section className="relative pt-6 pb-12 md:pt-12 md:pb-20 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-100/30 rounded-full blur-3xl animate-pulse delay-700"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
              {/* Text Content */}
              <div className="text-center lg:text-left lg:-mt-12">
                <div className="inline-flex items-center gap-2 bg-[#007aff]/5 backdrop-blur-sm border border-[#007aff]/20 rounded-full px-4 py-2 mb-8 mt-16 md:mt-0 animate-fade-in">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-medium text-gray-700">Updated for 2026 {departmentInfo.name} Exams</span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-4 md:mb-6 animate-fade-in-up delay-100 leading-tight md:leading-tight lg:leading-tight">
                  Master the {stateInfo.name} <br />
                  <span className="text-[#007aff]">{departmentInfo.name} real estate exam</span>
                </h1>
                <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-6 md:mb-8 lg:mb-10 max-w-2xl lg:max-w-none animate-fade-in-up delay-200">
                  Don't leave your real estate license to chance. Join 100K+ students using our state-specific question bank.
                </p>

                <div className="flex flex-col gap-4 items-center lg:items-start animate-fade-in-up delay-300 max-w-md mx-auto lg:mx-0">
                  <Button
                    onClick={scrollToFreePracticeTests}
                    size="lg"
                    className="bg-[#007aff] hover:bg-[#0056cc] text-white font-semibold px-4 md:px-6 py-3 md:py-4 text-base md:text-lg rounded-lg md:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full"
                  >
                    Try FREE Practice Tests
                  </Button>
                  <div className="w-full text-center">
                    <p className="text-xs text-gray-500 mb-2">No signup required • No ads • Start immediately</p>
                  </div>
                  <Button
                    onClick={scrollToPremium}
                    variant="outline"
                    size="lg"
                    className="border-2 border-[#007aff] text-[#007aff] hover:bg-[#007aff]/10 hover:text-[#007aff] font-semibold px-4 md:px-6 py-3 md:py-4 text-base md:text-lg rounded-lg md:rounded-xl transition-all duration-300 w-full"
                  >
                    <Crown className="w-5 h-5 mr-2" />
                    Get All {formatQuestionCount(stateData.pricing.premiumQuestions)} Exam-like Questions
                  </Button>
                </div>
              </div>

              {/* Product Images Gallery */}
              <div className="relative lg:order-2 animate-fade-in-up delay-400">
                <div className="relative ml-0 lg:ml-8 max-w-[600px] lg:max-w-[700px] mx-auto lg:mx-0">
                  {/* Image Container */}
                  <div className="relative overflow-hidden">
                    <div
                      className="flex transition-transform duration-500 ease-in-out touch-pan-y"
                      style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                      onTouchStart={onTouchStart}
                      onTouchMove={onTouchMove}
                      onTouchEnd={onTouchEnd}
                    >
                      {/* Desktop Image */}
                      <div className="w-full flex-shrink-0 flex items-center">
                        <img
                          src="/images/product-image-desktop.webp"
                          alt="Real Estate Question Bank on laptop showing study by chapter interface"
                          className="w-full h-auto transition-all duration-300 hover:scale-105 cursor-pointer transform -translate-y-2"
                        />
                      </div>

                      {/* Mobile Image */}
                      <div className="w-full flex-shrink-0 flex justify-center items-end">
                        <img
                          src="/images/product-image-mobile.webp"
                          alt="Real Estate Question Bank mobile app showing practice question interface"
                          className="h-auto transition-all duration-300 hover:scale-105 cursor-pointer"
                          style={{ maxHeight: '500px', width: 'auto' }}
                        />
                      </div>
                    </div>

                  </div>

                  {/* Dots Indicator */}
                  <div className="flex justify-center gap-2 mt-3">
                    <button
                      onClick={() => setCurrentImageIndex(0)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${currentImageIndex === 0
                        ? 'bg-[#007aff] scale-110'
                        : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                    />
                    <button
                      onClick={() => setCurrentImageIndex(1)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${currentImageIndex === 1
                        ? 'bg-[#007aff] scale-110'
                        : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Stats Section */}
        <section className="py-12 bg-white relative z-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto animate-fade-in-up delay-400">
              <div className="text-center">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#007aff] mb-1 md:mb-2">2000</div>
                <p className="text-xs md:text-sm lg:text-base text-gray-600">Paid Users</p>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-600 mb-1 md:mb-2">100K+</div>
                <p className="text-xs md:text-sm lg:text-base text-gray-600">Students Helped</p>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-purple-600 mb-1 md:mb-2">{formatQuestionCount(stateData.pricing.premiumQuestions)}</div>
                <p className="text-xs md:text-sm lg:text-base text-gray-600">Practice Questions</p>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-orange-600 mb-1 md:mb-2">4.8/5</div>
                <p className="text-xs md:text-sm lg:text-base text-gray-600">Student Rating</p>
              </div>
            </div>
          </div>
        </section>


        {/* 3. State Real Estate Test Overview */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-8 md:mb-12 lg:mb-16 animate-fade-in-up">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#111827] mb-4 md:mb-6">
                  What is the {stateInfo.name} {departmentInfo.name} Real Estate Exam?
                </h2>
                <p className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  The {stateInfo.name} {departmentInfo.name} real estate exam is a written licensing examination that assesses your knowledge of national real estate principles, state-specific laws, contracts, agency relationships, and property math. This test is required for all aspiring agents seeking their first real estate license in {stateInfo.name}.
                </p>
                {stateData.handbookUrl && (
                  <div className="mt-4 md:mt-6 lg:mt-8">
                    <Button
                      onClick={() => window.open(stateData.handbookUrl, '_blank')}
                      variant="outline"
                      size="lg"
                      className="border-2 border-[#007aff] text-[#007aff] hover:bg-[#007aff]/10 hover:text-[#007aff] font-semibold px-4 md:px-6 py-2 md:py-3 text-sm md:text-base rounded-lg md:rounded-xl transition-all duration-300"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      View Official {departmentInfo.name} Handbook
                    </Button>
                  </div>
                )}
              </div>

              {/* Test Statistics Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6 mb-8 md:mb-12 lg:mb-16 animate-fade-in-up delay-100">
                <div className="bg-white rounded-xl md:rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 p-4 md:p-6 lg:p-8 text-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-[#007aff]/10 rounded-lg md:rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-4">
                    <span className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-[#007aff]">{stateData.testOverview.totalQuestions}</span>
                  </div>
                  <div className="text-xs md:text-sm lg:text-base font-medium text-gray-900 mb-0.5 md:mb-1">Total Questions</div>
                  <div className="text-[10px] md:text-xs lg:text-sm text-gray-500">On the test</div>
                </div>

                <div className="bg-white rounded-xl md:rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 p-4 md:p-6 lg:p-8 text-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-green-100 rounded-lg md:rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-4">
                    <span className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-green-600">{stateData.testOverview.passingScore}</span>
                  </div>
                  <div className="text-xs md:text-sm lg:text-base font-medium text-gray-900 mb-0.5 md:mb-1">Passing Score</div>
                  <div className="text-[10px] md:text-xs lg:text-sm text-gray-500">Minimum correct</div>
                </div>

                <div className="bg-white rounded-xl md:rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 p-4 md:p-6 lg:p-8 text-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-purple-100 rounded-lg md:rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-4">
                    <span className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-purple-600">∞</span>
                  </div>
                  <div className="text-xs md:text-sm lg:text-base font-medium text-gray-900 mb-0.5 md:mb-1">Time Limit</div>
                  <div className="text-[10px] md:text-xs lg:text-sm text-gray-500">Unlimited</div>
                </div>

                <div className="bg-white rounded-xl md:rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 p-4 md:p-6 lg:p-8 text-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-orange-100 rounded-lg md:rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-4">
                    <span className="text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-orange-600">16+</span>
                  </div>
                  <div className="text-xs md:text-sm lg:text-base font-medium text-gray-900 mb-0.5 md:mb-1">Age Requirement</div>
                  <div className="text-[10px] md:text-xs lg:text-sm text-gray-500">Years old</div>
                </div>
              </div>

              {/* Content Grid */}
              <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 animate-fade-in-up delay-200">
                {/* Topics Covered */}
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 border border-gray-100 shadow-sm">
                  <div className="flex items-center mb-4 md:mb-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-[#007aff] rounded-lg md:rounded-xl flex items-center justify-center mr-3 md:mr-4">
                      <Book className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-black">Topics Covered</h3>
                  </div>
                  <div className="grid gap-2 md:gap-3">
                    {stateData.testOverview.topicsCovered.map((topic, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-[#007aff] rounded-full mr-3 md:mr-4 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm md:text-base lg:text-lg">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Eligibility Requirements */}
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 border border-blue-100 shadow-sm">
                  <div className="flex items-center mb-4 md:mb-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-lg md:rounded-xl flex items-center justify-center mr-3 md:mr-4">
                      <Users className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-black">Who Takes This Test?</h3>
                  </div>
                  <div className="space-y-4 md:space-y-6">
                    <div>
                      <h4 className="font-semibold text-base md:text-lg text-gray-900 mb-1 md:mb-2">All First-Time Drivers</h4>
                      <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed">
                        Everyone applying for their first real estate license in {stateInfo.name} must pass this written exam.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-base md:text-lg text-gray-900 mb-1 md:mb-2">Additional Requirements (Under 18)</h4>
                      <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed">
                        Drivers under 18 must also complete a state-approved real estate exam prep program before taking the test.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. State-Specific Study Tips & Common Mistakes */}
        <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-8 md:mb-12 lg:mb-16 animate-fade-in-up">
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#111827] mb-4 md:mb-6">
                  Master Your {stateInfo.name} {departmentInfo.name} Test
                </h2>
                <p className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Learn from expert insights and avoid the most common pitfalls that trip up test-takers in {stateInfo.name}.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 animate-fade-in-up delay-100">
                {/* Study Tips */}
                <div className="relative">
                  <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 shadow-lg border border-gray-100 h-full">
                    <div className="flex items-center mb-6 md:mb-8">
                      <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl md:rounded-2xl flex items-center justify-center mr-4 md:mr-6 shadow-lg">
                        <TrendingUp className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-black mb-1">Study Tips</h3>
                        <p className="text-xs md:text-sm lg:text-base text-gray-500">Expert strategies for success</p>
                      </div>
                    </div>

                    <div className="space-y-4 md:space-y-6">
                      {stateData.studyTips.map((tip, index) => (
                        <div key={index} className="group relative">
                          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl md:rounded-2xl p-4 md:p-6 border border-green-100 hover:shadow-md transition-all duration-300">
                            <div className="flex items-start">
                              <div className="w-7 h-7 md:w-8 md:h-8 bg-green-500 rounded-full flex items-center justify-center mr-3 md:mr-4 mt-0.5 md:mt-1 flex-shrink-0">
                                <span className="text-white font-bold text-xs md:text-sm">{index + 1}</span>
                              </div>
                              <div className="flex-1">
                                <h4 className="font-bold text-base md:text-lg text-gray-900 mb-1 md:mb-2">{tip.title}</h4>
                                <p className="text-gray-700 text-sm md:text-base leading-relaxed">{tip.description}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>


                {/* Common Mistakes */}
                <div className="relative">
                  <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 shadow-lg border border-gray-100 h-full">
                    <div className="flex items-center mb-6 md:mb-8">
                      <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-red-500 to-rose-600 rounded-xl md:rounded-2xl flex items-center justify-center mr-4 md:mr-6 shadow-lg">
                        <Shield className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-black mb-1">Common Mistakes</h3>
                        <p className="text-xs md:text-sm lg:text-base text-gray-500">Pitfalls to avoid on test day</p>
                      </div>
                    </div>

                    <div className="space-y-4 md:space-y-6">
                      {stateData.commonMistakes.map((mistake, index) => (
                        <div key={index} className="group relative">
                          <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-xl md:rounded-2xl p-4 md:p-6 border border-red-100 hover:shadow-md transition-all duration-300">
                            <div className="flex items-start">
                              <div className="w-7 h-7 md:w-8 md:h-8 bg-red-500 rounded-full flex items-center justify-center mr-3 md:mr-4 mt-0.5 md:mt-1 flex-shrink-0">
                                <span className="text-white font-bold text-xs md:text-sm">⚠</span>
                              </div>
                              <div className="flex-1">
                                <h4 className="font-bold text-base md:text-lg text-gray-900 mb-1 md:mb-2">{mistake.topic}</h4>
                                <p className="text-gray-700 text-sm md:text-base leading-relaxed">{mistake.description}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="mt-8 md:mt-12 lg:mt-16 text-center animate-fade-in-up delay-200">
                <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 shadow-lg border border-gray-100 max-w-4xl mx-auto">
                  <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-black mb-3 md:mb-4">
                    Ready to put these tips into practice?
                  </h3>
                  <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base lg:text-lg">
                    Start with our free practice questions and see how you perform, then upgrade to access our complete study system.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center animate-fade-in-up delay-300">
                    <Button
                      onClick={scrollToFreePracticeTests}
                      size="lg"
                      className="bg-[#007aff] hover:bg-[#0056cc] text-white font-semibold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-lg md:rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      Try FREE Practice Tests
                    </Button>
                    <Button
                      onClick={scrollToPremium}
                      variant="outline"
                      size="lg"
                      className="border-2 border-[#007aff] text-[#007aff] hover:bg-[#007aff]/10 hover:text-[#007aff] font-semibold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-lg md:rounded-xl transition-all duration-300"
                    >
                      <Crown className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                      View Premium Plans
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Free Practice Tests Section */}
        <section id="free-practice-tests" className="py-12 md:py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-8 md:mb-12 animate-fade-in-up">
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 rounded-full px-4 py-2 mb-6">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-semibold">100% FREE</span>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#111827] mb-4 md:mb-6">
                  Your First Step to Getting Licensed
                </h2>
                <p className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  5 practice tests packed with real {departmentInfo.name} questions — completely free, no signup required.
                </p>
              </div>

              {/* Free Practice Tests Grid */}
              <div className="flex flex-col gap-3 md:grid md:grid-cols-3 lg:grid-cols-5 md:gap-6 mb-3 md:mb-12 animate-fade-in-up delay-100">
                {[1, 2, 3, 4, 5].map((testNum) => (
                  <button
                    key={testNum}
                    onClick={() => router.push(`/state/${state}/practice/free/${testNum}`)}
                    className="bg-white rounded-xl md:rounded-2xl border-2 border-gray-200 hover:border-[#007aff] overflow-hidden transition-all duration-300 hover:shadow-lg group flex flex-row items-center md:flex-col md:items-stretch"
                  >
                    <div className="w-28 h-24 md:w-full md:h-48 lg:h-56 overflow-hidden flex-shrink-0">
                      <img
                        src={`/images/practice-tests/${testNum}.webp`}
                        alt={`Practice Test ${testNum}`}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-3 md:p-4 flex flex-col justify-center text-left md:text-center flex-1">
                      <h3 className="font-semibold text-gray-900 text-sm md:text-base mb-0.5 md:mb-1">Practice Test {testNum}</h3>
                      <p className="text-xs text-gray-500">10 questions</p>
                    </div>
                  </button>
                ))}
              </div>

              {/* Premium Locked Cards Grid */}
              <div className="flex flex-col gap-3 md:grid md:grid-cols-3 lg:grid-cols-5 md:gap-6 animate-fade-in-up delay-200">
                {/* Full Question Bank */}
                <div
                  onClick={scrollToPremium}
                  className="relative bg-white rounded-xl md:rounded-2xl border-2 border-gray-200 overflow-hidden cursor-pointer group hover:border-yellow-400 hover:shadow-lg transition-all duration-300 flex flex-row md:flex-col"
                >
                  <div className="w-28 h-24 md:w-full md:h-48 lg:h-56 overflow-hidden flex-shrink-0 relative">
                    <img
                      src="/images/practice-tests/6.webp"
                      alt="Full Question Bank"
                      className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-2 right-2 md:top-3 md:right-3 w-7 h-7 md:w-10 md:h-10 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                      <Crown className="w-3.5 h-3.5 md:w-5 md:h-5 text-white" />
                    </div>
                  </div>
                  <div className="p-3 md:p-4 flex flex-col justify-center md:text-center flex-1">
                    <h3 className="font-bold text-gray-900 text-sm md:text-base mb-0.5 md:mb-1">Full Question Bank</h3>
                    <p className="text-xs text-gray-500 mb-2 md:mb-3">{formatQuestionCount(stateData.pricing.premiumQuestions)} exam-like questions</p>
                    <div className="inline-flex items-center gap-1.5 text-yellow-600 text-xs md:text-sm font-medium">
                      <Crown className="w-3.5 h-3.5" />
                      Unlock with Premium
                    </div>
                  </div>
                </div>

                {/* Hard Questions */}
                <div
                  onClick={scrollToPremium}
                  className="relative bg-white rounded-xl md:rounded-2xl border-2 border-gray-200 overflow-hidden cursor-pointer group hover:border-yellow-400 hover:shadow-lg transition-all duration-300 flex flex-row md:flex-col"
                >
                  <div className="w-28 h-24 md:w-full md:h-48 lg:h-56 overflow-hidden flex-shrink-0 relative">
                    <img
                      src="/images/practice-tests/7.webp"
                      alt="Hard Questions"
                      className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-2 right-2 md:top-3 md:right-3 w-7 h-7 md:w-10 md:h-10 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                      <Crown className="w-3.5 h-3.5 md:w-5 md:h-5 text-white" />
                    </div>
                  </div>
                  <div className="p-3 md:p-4 flex flex-col justify-center md:text-center flex-1">
                    <h3 className="font-bold text-gray-900 text-sm md:text-base mb-0.5 md:mb-1">Hard Questions</h3>
                    <p className="text-xs text-gray-500 mb-2 md:mb-3">Tricky questions people miss</p>
                    <div className="inline-flex items-center gap-1.5 text-yellow-600 text-xs md:text-sm font-medium">
                      <Crown className="w-3.5 h-3.5" />
                      Unlock with Premium
                    </div>
                  </div>
                </div>

                {/* Real Estate Glossary */}
                <div
                  onClick={scrollToPremium}
                  className="relative bg-white rounded-xl md:rounded-2xl border-2 border-gray-200 overflow-hidden cursor-pointer group hover:border-yellow-400 hover:shadow-lg transition-all duration-300 flex flex-row md:flex-col"
                >
                  <div className="w-28 h-24 md:w-full md:h-48 lg:h-56 overflow-hidden flex-shrink-0 relative">
                    <img
                      src="/images/practice-tests/8.webp"
                      alt="Real Estate Glossary Guide"
                      className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-2 right-2 md:top-3 md:right-3 w-7 h-7 md:w-10 md:h-10 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                      <Crown className="w-3.5 h-3.5 md:w-5 md:h-5 text-white" />
                    </div>
                  </div>
                  <div className="p-3 md:p-4 flex flex-col justify-center md:text-center flex-1">
                    <h3 className="font-bold text-gray-900 text-sm md:text-base mb-0.5 md:mb-1">Glossary Explained</h3>
                    <p className="text-xs text-gray-500 mb-2 md:mb-3">Master essential vocabulary</p>
                    <div className="inline-flex items-center gap-1.5 text-yellow-600 text-xs md:text-sm font-medium">
                      <Crown className="w-3.5 h-3.5" />
                      Unlock with Premium
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Free PDF Download Section */}
        <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 rounded-3xl p-6 md:p-8 lg:p-12 shadow-lg border border-green-100 animate-fade-in-up delay-150">
                <div className="text-center max-w-3xl mx-auto">
                  <div className="inline-flex items-center gap-2 bg-green-600 text-white rounded-full px-4 py-2 mb-6 animate-bounce">
                    <Download className="w-4 h-4" />
                    <span className="text-sm font-semibold">FREE DOWNLOAD</span>
                  </div>

                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Free {stateInfo.name} {departmentInfo.name} Practice Test PDF
                  </h2>

                  <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 leading-relaxed">
                    Download our comprehensive practice test with <strong>50 {stateInfo.name}-specific questions</strong> with answers. Perfect for offline study and test preparation!
                  </p>

                  {/* PDF Benefits */}
                  <div className="grid md:grid-cols-2 gap-4 mb-8 text-left">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">50 {stateInfo.name} {departmentInfo.name} questions</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">Correct answers included</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">Printable format for offline study</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">No signup required</span>
                    </div>
                  </div>

                  {/* Download Button */}
                  <Button
                    onClick={() => window.open(`/free-permit-test-questions-PDF/Free-${stateInfo.name.replace(/\s+/g, '-')}-${getPdfDepartmentName(state)}-Practice-Questions.pdf`, '_blank')}
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-lg md:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Free PDF (50 Questions)
                  </Button>

                  <p className="text-xs md:text-sm text-gray-600 mt-4">
                    Instant download • No email required • Updated for 2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Premium Features & Pricing */}
        <section id="premium-section" className="py-12 md:py-20 lg:py-24 bg-gradient-to-br from-blue-100 via-purple-50 via-50% to-emerald-100">
          <div className="container mx-auto px-4 lg:px-2">
            <div className="mx-auto text-center">
              <div className="animate-fade-in-up">
                <h2 className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#111827] mb-6 md:mb-10">
                  The Real Estate <span className="text-[#007aff]">Premium</span>
                </h2>
                <p className="text-sm md:text-lg lg:text-xl text-[#374151] mb-4 md:mb-6 max-w-2xl mx-auto leading-relaxed md:leading-[2.5]">
                  Every failed {departmentInfo.name} real estate exam means extra fees, more waiting, and lost time. Don't risk it — practice the exact questions you'll see on the test.
                </p>
                <p className="text-sm md:text-lg lg:text-xl text-[#374151] mb-4 md:mb-6 max-w-2xl mx-auto leading-relaxed">
                  Gift yourself the confidence you deserve.
                </p>
                <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-xl px-4 md:px-6 py-3 mb-8 md:mb-16">
                  <Shield className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <p className="text-sm md:text-base text-emerald-800 font-medium">
                    Not sure? Try it for 60 minutes. Full refund within the first hour — just <a href="mailto:hello@realestatequestionbank.com" className="text-[#007aff] no-underline hover:underline">email us</a>.
                  </p>
                </div>
              </div>

              {/* Duration Selector Tabs - Mobile Only */}
              <div className="flex gap-3 mb-6 md:hidden justify-center px-4">
                <button
                  onClick={() => {
                    setSelectedDuration(30)
                    document.getElementById('plan-30')?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
                  }}
                  className={`flex-1 max-w-[160px] px-6 py-1.5 rounded-lg font-semibold text-sm transition-all duration-300 ${selectedDuration === 30
                    ? 'bg-[#007aff] text-white shadow-md'
                    : 'bg-white text-[#007aff] border border-[#007aff]'
                    }`}
                >
                  30 Days
                </button>
                <button
                  onClick={() => {
                    setSelectedDuration(36500)
                    document.getElementById('plan-90')?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
                  }}
                  className={`flex-1 max-w-[160px] px-6 py-1.5 rounded-lg font-semibold text-sm transition-all duration-300 ${selectedDuration === 36500
                    ? 'bg-[#007aff] text-white shadow-md'
                    : 'bg-white text-[#007aff] border border-[#007aff]'
                    }`}
                >
                  Lifetime
                </button>
              </div>

              {/* Pricing Options */}
              <div className="mb-10 md:mb-20 mx-auto animate-fade-in-up delay-200">
                {/* Mobile: Horizontal Scroll */}
                <div
                  ref={planScrollRef}
                  onScroll={handlePlanScroll}
                  className="md:hidden overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4"
                >
                  <div className="flex gap-4 pb-4 pt-4">
                    {/* Short Term Plan */}
                    <div
                      id="plan-30"
                      className="snap-center flex-shrink-0 w-[75vw] max-w-[340px]"
                    >
                      <div
                        className="bg-white rounded-lg p-5 border-2 border-[#007aff] shadow-lg transition-all duration-300 cursor-pointer relative flex flex-col h-full"
                        onClick={() => setSelectedDuration(30)}
                      >
                        <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2">
                          <div className="bg-[#007aff] text-white px-4 py-1.5 rounded-lg text-xs font-semibold shadow-md">
                            MOST POPULAR
                          </div>
                        </div>
                        <div className="mb-4 mt-3 text-left">
                          <h3 className="text-2xl font-bold text-[#111827]">30 Days Pass Plan</h3>
                          <p className="text-xs text-gray-600 mt-1">Prep that is Fast, Focused & Proven</p>
                        </div>
                        <div className="flex items-center gap-2 mb-4">
                          {effectivePricing.PLANS.THIRTY_DAY.originalPrice > effectivePricing.PLANS.THIRTY_DAY.discountedPrice && (
                            <span className="text-gray-400 line-through text-2xl font-medium">${effectivePricing.PLANS.THIRTY_DAY.originalPrice}</span>
                          )}
                          <span className="text-2xl font-bold text-[#374151]">${effectivePricing.PLANS.THIRTY_DAY.discountedPrice}</span>
                          {effectivePricing.PLANS.THIRTY_DAY.originalPrice > effectivePricing.PLANS.THIRTY_DAY.discountedPrice && (
                            <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-0.5 rounded font-semibold ml-auto">
                              {Math.round(((effectivePricing.PLANS.THIRTY_DAY.originalPrice - effectivePricing.PLANS.THIRTY_DAY.discountedPrice) / effectivePricing.PLANS.THIRTY_DAY.originalPrice) * 100)}% OFF
                            </span>
                          )}
                        </div>

                        {effectivePricing.PLANS.THIRTY_DAY.originalPrice > effectivePricing.PLANS.THIRTY_DAY.discountedPrice && (
                          <p className="text-xs text-gray-500 mb-1 text-left">This offer expires on {formatOfferExpiryDate()}.</p>
                        )}
                        <p className="text-xs text-gray-500 mb-4 text-left">Not a subscription, one time payment only</p>

                        <ul className="text-sm text-[#111827] space-y-2 mb-4 text-left flex-grow">
                          <li className="flex items-start gap-2">
                            <Shield className="w-4 h-4 text-[#007aff] flex-shrink-0 mt-0.5" />
                            <span className="font-semibold">Pass Guarantee — 100% money back</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-[#007aff] flex-shrink-0 mt-0.5" />
                            <span>{formatQuestionCount(stateData.pricing.premiumQuestions)} {stateInfo.name} {departmentInfo.name}-style questions</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-[#007aff] flex-shrink-0 mt-0.5" />
                            <span>Unlimited mock tests</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-[#007aff] flex-shrink-0 mt-0.5" />
                            <span>Uncommon sense question bank (most failed questions)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-[#007aff] flex-shrink-0 mt-0.5" />
                        <span>Real Estate Glossary explained clearly</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-[#007aff] flex-shrink-0 mt-0.5" />
                            <span>Last-minute revision guide</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-[#007aff] flex-shrink-0 mt-0.5" />
                            <span>Progress tracking + pass probability score</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-[#007aff] flex-shrink-0 mt-0.5" />
                            <span>Priority support</span>
                          </li>
                        </ul>
                        <Button
                          onClick={(e) => {
                            e.stopPropagation()
                            handleUpgradePremium(30)
                          }}
                          className="w-full flex items-center justify-center gap-2 text-base py-6 px-4 mt-auto bg-[#007aff] hover:bg-[#0056cc] text-white font-medium"
                        >
                          Sign up & Buy Premium
                        </Button>
                        <p className="text-xs text-gray-500 text-center mt-3">Instant Access. Works on phone, tablet, or laptop.</p>
                      </div>
                    </div>

                    {/* Standard Plan */}
                    <div
                      id="plan-90"
                      className="snap-center flex-shrink-0 w-[75vw] max-w-[340px]"
                    >
                      <div
                        className="bg-white rounded-lg p-5 border-2 border-[#007aff] shadow-lg transition-all duration-300 cursor-pointer relative flex flex-col h-full"
                        onClick={() => setSelectedDuration(36500)}
                      >
                        <div className="mb-4 mt-3 text-left">
                          <h3 className="text-2xl font-bold text-[#111827]">Lifetime Pass Plan</h3>
                          <p className="text-xs text-gray-600 mt-1">Prep That Fits Your Schedule</p>
                        </div>
                        <div className="flex items-center gap-2 mb-4">
                          {effectivePricing.PLANS.LIFETIME.originalPrice > effectivePricing.PLANS.LIFETIME.discountedPrice && (
                            <span className="text-gray-400 line-through text-2xl font-medium">${effectivePricing.PLANS.LIFETIME.originalPrice}</span>
                          )}
                          <span className="text-2xl font-bold text-[#374151]">${effectivePricing.PLANS.LIFETIME.discountedPrice}</span>
                          {effectivePricing.PLANS.LIFETIME.originalPrice > effectivePricing.PLANS.LIFETIME.discountedPrice && (
                            <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-0.5 rounded font-semibold ml-auto">
                              {Math.round(((effectivePricing.PLANS.LIFETIME.originalPrice - effectivePricing.PLANS.LIFETIME.discountedPrice) / effectivePricing.PLANS.LIFETIME.originalPrice) * 100)}% OFF
                            </span>
                          )}
                        </div>

                        {effectivePricing.PLANS.LIFETIME.originalPrice > effectivePricing.PLANS.LIFETIME.discountedPrice && (
                          <p className="text-xs text-gray-500 mb-1 text-left">This offer expires on {formatOfferExpiryDate()}.</p>
                        )}
                        <p className="text-xs text-gray-500 mb-4 text-left">Not a subscription, one time payment only</p>

                        <ul className="text-sm text-[#111827] space-y-2 mb-4 text-left flex-grow">
                          <li className="flex items-start gap-2">
                            <Shield className="w-4 h-4 text-[#007aff] flex-shrink-0 mt-0.5" />
                            <span className="font-semibold">Pass Guarantee — 100% money back</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-[#007aff] flex-shrink-0 mt-0.5" />
                            <span>{formatQuestionCount(stateData.pricing.premiumQuestions)} {stateInfo.name} {departmentInfo.name}-style questions</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-[#007aff] flex-shrink-0 mt-0.5" />
                            <span>Unlimited mock tests</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-[#007aff] flex-shrink-0 mt-0.5" />
                            <span>Uncommon sense question bank (most failed questions)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-[#007aff] flex-shrink-0 mt-0.5" />
                        <span>Real Estate Glossary explained clearly</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-[#007aff] flex-shrink-0 mt-0.5" />
                            <span>Last-minute revision guide</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-[#007aff] flex-shrink-0 mt-0.5" />
                            <span>Progress tracking + pass probability score</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-[#007aff] flex-shrink-0 mt-0.5" />
                            <span>Priority support</span>
                          </li>
                        </ul>
                        <Button
                          onClick={(e) => {
                            e.stopPropagation()
                            handleUpgradePremium(36500)
                          }}
                          className="w-full flex items-center justify-center gap-2 text-base py-6 px-4 mt-auto bg-[#007aff] hover:bg-[#0056cc] text-white font-medium"
                        >
                          Sign up & Buy Premium
                        </Button>
                        <p className="text-xs text-gray-500 text-center mt-3">Instant Access. Works on phone, tablet, or laptop.</p>
                      </div>
                    </div>
                    {/* Spacer for right edge margin */}
                    <div className="flex-shrink-0 w-4" aria-hidden="true"></div>
                  </div>
                </div>

                {/* Desktop: Grid Layout */}
                <div className="hidden md:grid md:grid-cols-2 gap-8 pt-6 md:max-w-4xl lg:max-w-5xl md:mx-auto">
                  {/* Short Term Plan */}
                  <div
                    className={`bg-white rounded-2xl px-5 py-8 transition-all duration-300 cursor-pointer relative flex flex-col ${selectedDuration === 30 ? 'border-[3px] border-[#007aff] shadow-lg' : 'border border-gray-200 shadow-xl hover:shadow-2xl'}`}
                    onClick={() => setSelectedDuration(30)}
                  >
                    <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                      <div className="bg-[#007aff] text-white px-6 py-2 rounded-lg text-sm font-semibold shadow-lg">
                        MOST POPULAR
                      </div>
                    </div>
                    <div className="mb-6 mt-2 text-left">
                      <h3 className="text-3xl font-bold text-[#111827]">30 Days Pass Plan</h3>
                      <p className="text-sm text-gray-600 mt-1">Prep that is Fast, Focused & Proven</p>
                    </div>
                    <div className="flex items-center gap-3 mb-6">
                      {effectivePricing.PLANS.THIRTY_DAY.originalPrice > effectivePricing.PLANS.THIRTY_DAY.discountedPrice && (
                        <span className="text-gray-400 line-through text-3xl font-medium">${effectivePricing.PLANS.THIRTY_DAY.originalPrice}</span>
                      )}
                      <span className="text-3xl font-bold text-[#374151]">${effectivePricing.PLANS.THIRTY_DAY.discountedPrice}</span>
                      {effectivePricing.PLANS.THIRTY_DAY.originalPrice > effectivePricing.PLANS.THIRTY_DAY.discountedPrice && (
                        <span className="bg-yellow-100 text-yellow-700 text-xs px-2.5 py-1 rounded font-semibold ml-auto">
                          {Math.round(((effectivePricing.PLANS.THIRTY_DAY.originalPrice - effectivePricing.PLANS.THIRTY_DAY.discountedPrice) / effectivePricing.PLANS.THIRTY_DAY.originalPrice) * 100)}% OFF
                        </span>
                      )}
                    </div>

                    {effectivePricing.PLANS.THIRTY_DAY.originalPrice > effectivePricing.PLANS.THIRTY_DAY.discountedPrice && (
                      <p className="text-sm text-gray-500 mb-1 text-left">This offer expires on {formatOfferExpiryDate()}.</p>
                    )}
                    <p className="text-sm text-gray-500 mb-6 text-left">Not a subscription, one time payment only</p>

                    <ul className="text-sm text-[#111827] space-y-3 mb-6 text-left flex-grow">
                      <li className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-[#007aff] flex-shrink-0 mt-0.5" />
                        <span className="font-semibold">Pass Guarantee — 100% money back</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#007aff] flex-shrink-0 mt-0.5" />
                        <span>{formatQuestionCount(stateData.pricing.premiumQuestions)} {stateInfo.name} {departmentInfo.name}-style questions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#007aff] flex-shrink-0 mt-0.5" />
                        <span>Unlimited mock tests</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#007aff] flex-shrink-0 mt-0.5" />
                        <span>Uncommon sense question bank (most failed questions)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#007aff] flex-shrink-0 mt-0.5" />
                        <span>Road signs explained clearly</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#007aff] flex-shrink-0 mt-0.5" />
                        <span>Last-minute revision guide</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#007aff] flex-shrink-0 mt-0.5" />
                        <span>Progress tracking + pass probability score</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#007aff] flex-shrink-0 mt-0.5" />
                        <span>Priority support</span>
                      </li>
                    </ul>
                    <Button
                      onClick={() => handleUpgradePremium(30)}
                      className="w-full flex items-center justify-center gap-2 text-base py-6 px-6 mt-auto bg-[#007aff] hover:bg-[#0056cc] text-white font-medium"
                    >
                      Sign up & Buy Premium
                    </Button>
                    <p className="text-sm text-gray-500 text-center mt-4">Instant Access. Works on phone, tablet, or laptop.</p>
                  </div>

                  {/* Standard Plan */}
                  <div
                    className={`bg-white rounded-2xl px-5 py-8 transition-all duration-300 cursor-pointer relative flex flex-col ${selectedDuration === 36500 ? 'border-[3px] border-[#007aff] shadow-lg' : 'border border-gray-200 shadow-xl hover:shadow-2xl'}`}
                    onClick={() => setSelectedDuration(36500)}
                  >
                    <div className="mb-6 mt-2 text-left">
                      <h3 className="text-3xl font-bold text-[#111827]">Lifetime Pass Plan</h3>
                      <p className="text-sm text-gray-600 mt-1">Prep That Fits Your Schedule</p>
                    </div>
                    <div className="flex items-center gap-3 mb-6">
                      {effectivePricing.PLANS.LIFETIME.originalPrice > effectivePricing.PLANS.LIFETIME.discountedPrice && (
                        <span className="text-gray-400 line-through text-3xl font-medium">${effectivePricing.PLANS.LIFETIME.originalPrice}</span>
                      )}
                      <span className="text-3xl font-bold text-[#374151]">${effectivePricing.PLANS.LIFETIME.discountedPrice}</span>
                      {effectivePricing.PLANS.LIFETIME.originalPrice > effectivePricing.PLANS.LIFETIME.discountedPrice && (
                        <span className="bg-yellow-100 text-yellow-700 text-xs px-2.5 py-1 rounded font-semibold ml-auto">
                          {Math.round(((effectivePricing.PLANS.LIFETIME.originalPrice - effectivePricing.PLANS.LIFETIME.discountedPrice) / effectivePricing.PLANS.LIFETIME.originalPrice) * 100)}% OFF
                        </span>
                      )}
                    </div>

                    {effectivePricing.PLANS.LIFETIME.originalPrice > effectivePricing.PLANS.LIFETIME.discountedPrice && (
                      <p className="text-sm text-gray-500 mb-1 text-left">This offer expires on {formatOfferExpiryDate()}.</p>
                    )}
                    <p className="text-sm text-gray-500 mb-6 text-left">Not a subscription, one time payment only</p>

                    <ul className="text-sm text-[#111827] space-y-3 mb-6 text-left flex-grow">
                      <li className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-[#007aff] flex-shrink-0 mt-0.5" />
                        <span className="font-semibold">Pass Guarantee — 100% money back</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#007aff] flex-shrink-0 mt-0.5" />
                        <span>{formatQuestionCount(stateData.pricing.premiumQuestions)} {stateInfo.name} {departmentInfo.name}-style questions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#007aff] flex-shrink-0 mt-0.5" />
                        <span>Unlimited mock tests</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#007aff] flex-shrink-0 mt-0.5" />
                        <span>Uncommon sense question bank (most failed questions)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#007aff] flex-shrink-0 mt-0.5" />
                        <span>Road signs explained clearly</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#007aff] flex-shrink-0 mt-0.5" />
                        <span>Last-minute revision guide</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#007aff] flex-shrink-0 mt-0.5" />
                        <span>Progress tracking + pass probability score</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#007aff] flex-shrink-0 mt-0.5" />
                        <span>Priority support</span>
                      </li>
                    </ul>
                    <Button
                      onClick={() => handleUpgradePremium(36500)}
                      className="w-full flex items-center justify-center gap-2 text-base py-6 px-6 mt-auto bg-[#007aff] hover:bg-[#0056cc] text-white font-medium"
                    >
                      Sign up & Buy Premium
                    </Button>
                    <p className="text-sm text-gray-500 text-center mt-4">Instant Access. Works on phone, tablet, or laptop.</p>
                  </div>
                </div>
              </div>



            </div>
          </div>
        </section>


        {/* 3. Social Proof Section */}
        <section className="py-12 md:py-16 bg-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12 animate-fade-in-up">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4 md:mb-6">Built for One Goal: Pass the Real Estate Test on Your First Try</h2>
              <p className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4">Practice what the Real Estate actually tests — not the whole manual.</p>
              <div className="flex justify-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 md:w-6 md:h-6 fill-[#007aff] text-[#007aff]" />
                ))}
              </div>
            </div>
            <div className="flex overflow-x-auto snap-x snap-mandatory pb-6 -mx-4 px-4 gap-4 md:grid md:grid-cols-3 md:gap-6 lg:gap-8 md:overflow-visible md:pb-0 md:mx-0 md:px-0 animate-fade-in-up delay-200 scrollbar-hide">
              <Card className="snap-center flex-shrink-0 w-[70vw] md:w-auto text-center p-6 shadow-lg border-gray-100 group hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                <Award className="w-10 h-10 md:w-12 md:h-12 text-[#007aff] mx-auto mb-3 md:mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />
                <CardTitle className="text-lg md:text-xl font-semibold mb-1.5 md:mb-2 text-black">Exam-Focused, Not Random</CardTitle>
                <CardContent className="text-gray-600 p-0 text-sm md:text-base">
                  Questions are based on real Real Estate patterns — not textbook filler you’ll never be asked.
                </CardContent>
              </Card>
              <Card className="snap-center flex-shrink-0 w-[70vw] md:w-auto text-center p-6 shadow-lg border-gray-100 group hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                <Clock className="w-10 h-10 md:w-12 md:h-12 text-green-600 mx-auto mb-3 md:mb-4 group-hover:rotate-12 transition-transform duration-300" />
                <CardTitle className="text-lg md:text-xl font-semibold mb-1.5 md:mb-2 text-black">No Reading. Only Practice.</CardTitle>
                <CardContent className="text-gray-600 p-0 text-sm md:text-base">
                  Skip boring manuals. Learn by answering real questions with instant explanations.
                </CardContent>
              </Card>
              <Card className="snap-center flex-shrink-0 w-[70vw] md:w-auto text-center p-6 shadow-lg border-gray-100 group hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                <Shield className="w-10 h-10 md:w-12 md:h-12 text-purple-600 mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-lg md:text-xl font-semibold mb-1.5 md:mb-2 text-black">Pass or Pay Nothing</CardTitle>
                <CardContent className="text-gray-600 p-0 text-sm md:text-base">
                  If you don’t pass, we refund you. No fine print. No excuses.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>


        {/* 7. State-Specific FAQ */}
        <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-emerald-50 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 md:mb-20">
                <div className="inline-block bg-[#007aff]/10 border border-[#007aff]/20 rounded-full px-4 md:px-6 py-2 mb-4 md:mb-6">
                  <span className="text-xs md:text-sm font-medium text-[#007aff]">
                    Frequently Asked Questions
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 text-gray-900">
                  Your Questions Answered
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
                  Quick answers to the most common questions about the {stateInfo.name} Real Estate Exam
                </p>
              </div>

              <div className="space-y-4 md:space-y-6">
                {stateData.faq.map((item, index) => (
                  <div key={index} className="group">
                    <details className="bg-gray-50 rounded-xl md:rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                      <summary className="font-bold text-gray-900 cursor-pointer text-base md:text-lg flex items-center justify-between group-hover:text-[#007aff] transition-colors duration-200">
                        {item.question}
                        <svg className="w-4 md:w-5 h-4 md:h-5 transform transition-transform duration-200 group-open:rotate-180 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <p className="mt-4 md:mt-6 text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed">
                        {item.answer}
                      </p>
                    </details>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* Related Blog Posts */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8 md:mb-12 animate-fade-in-up">
                <div className="inline-block bg-[#007aff]/10 border border-[#007aff]/20 rounded-full px-4 md:px-6 py-2 mb-4 md:mb-6">
                  <span className="text-xs md:text-sm font-medium text-[#007aff]">
                    The Blog Center
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#111827] mb-4 md:mb-6">
                  {stateData.hasBlogs ? `Essential ${stateInfo.name} Real Estate Guides & Tips` : 'Real Estate Test Preparation Guides'}
                </h2>
                <p className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  {stateData.hasBlogs
                    ? `Master every aspect of the ${stateInfo.name} Real Estate Exam with our expert guides and insider knowledge.`
                    : 'Expert tips and strategies to help you pass your Real Estate Exam on the first try.'}
                </p>
              </div>

              <div className="flex overflow-x-auto snap-x snap-mandatory pb-6 -mx-4 px-4 gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0 md:mx-0 md:px-0 animate-fade-in-up delay-200 scrollbar-hide">
                {(stateData.hasBlogs && stateData.relatedBlogs ? stateData.relatedBlogs : [
                  {
                    slug: 'pass-real-estate-licensing-exam-first-try',
                    title: 'How to Pass Your Real Estate Licensing Exam on the First Try',
                    excerpt: 'Success starts with a plan. Discover the proven 5-step strategy used by thousands of successful candidates to ace their test.'
                  },
                  {
                    slug: 'common-real-estate-test-mistakes',
                    title: '7 Common Real Estate Test Mistakes and How to Avoid Them',
                    excerpt: 'Every year, thousands of test-takers fail due to preventable mistakes. Learn the most frequent pitfalls and how to steer clear of them.'
                  },
                  {
                    slug: 'real-estate-glossary-guide',
                    title: 'Complete Real Estate Glossary Guide for Exam Prep',
                    excerpt: 'Terminology and vocabulary are key. Master all critical real estate terms with our comprehensive vocabulary study guide.'
                  }
                ]).map((blog) => (
                  <Link
                    key={blog.slug}
                    href={`/blog/${blog.slug}`}
                    className="snap-center flex-shrink-0 w-[70vw] md:w-auto group bg-white border border-gray-100 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                    </div>

                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 group-hover:text-[#007aff] transition-colors duration-300">
                      {blog.title}
                    </h3>

                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {blog.excerpt}
                    </p>

                    <div className="mt-4 md:mt-6 flex items-center text-[#007aff] font-semibold text-sm">
                      Read Article
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 8. Final Conversion CTA */}
        <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
              <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mb-4 md:mb-6">
                Ready to pass your {stateInfo.name} {departmentInfo.name} real estate exam?
              </h2>
              <p className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 mb-6 md:mb-8">
                Join hundreds of students who have successfully passed their test on the first try
              </p>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center animate-fade-in-up delay-200">
                <Button
                  onClick={scrollToFreePracticeTests}
                  size="lg"
                  className="bg-[#007aff] hover:bg-[#0056cc] text-white font-semibold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-lg md:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span className="hidden sm:inline">Try FREE Practice Tests</span>
                  <span className="sm:hidden">Try FREE Practice Tests</span>
                </Button>
                <Button
                  onClick={scrollToPremium}
                  variant="outline"
                  size="lg"
                  className="border-2 border-[#007aff] text-[#007aff] hover:bg-[#007aff]/10 hover:text-[#007aff] font-semibold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-lg md:rounded-xl transition-all duration-300"
                >
                  <Crown className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  <span className="hidden sm:inline">Get All {formatQuestionCount(stateData.pricing.premiumQuestions)} Exam-like Questions</span>
                  <span className="sm:hidden">Get Premium</span>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        mode={authMode}
        onSwitchMode={(mode: 'login' | 'signup') => {
          setAuthMode(mode)
          if (mode === 'signup') setIsPremiumLogin(false)
        }}
        onSuccess={handleAuthSuccess}
        isPremiumOnly={isPremiumLogin}
        onGetPremium={scrollToPremium}
        isCheckoutFlow={authMode === 'signup' && (isPremiumLogin || !user)}
        isRedirecting={isRedirecting}
        closeOnSuccess={authMode !== 'signup' || !!user}
        state={state}
      />

      <ExpiredPremiumModal
        isOpen={showExpiredModal}
        onClose={() => setShowExpiredModal(false)}
        onRenew={handleRenewal}
        expirationDate={userData?.premiumExpiresAt}
        userName={getUserDisplayName()}
      />

      <PurchaseRenewalDialog
        isOpen={showPurchaseModal}
        onClose={() => {
          // Track modal abandonment
          console.log(`Analytics: User closed pricing modal on ${state} page without purchasing`)

          if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'abandon_pricing_modal', {
              event_category: 'conversion',
              event_label: state,
              value: 1
            })
          }

          fetch('/api/analytics/pricing-modal-abandon', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              state,
              timestamp: new Date().toISOString(),
              userId: user?.uid || 'anonymous'
            })
          }).catch(err => console.log('Analytics tracking failed:', err))

          setShowPurchaseModal(false)
        }}
        premiumStatus={premiumStatus}
        onPurchase={handlePurchaseFromModal}
        isLoading={purchaseLoading}
      />

      {/* Social Proof Notifications */}
      <SocialProofNotifications enabled={true} isPremiumUser={isPremium} currentState={state} />

      {/* Premium Video Modal */}
      <PremiumVideoModal
        isOpen={showVideoModal}
        onClose={() => setShowVideoModal(false)}
        onUpgrade={() => {
          setShowVideoModal(false)
          scrollToPremium()
        }}
      />

      {/* State Selector Modal */}
      <StateSelectorModal
        isOpen={stateModalOpen}
        onClose={() => setStateModalOpen(false)}
        onStateSelect={handleStateSelect}
      />
    </div>
  )
}