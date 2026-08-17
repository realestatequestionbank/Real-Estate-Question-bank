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
import { texasStaticPageData } from './static-data'
import { isPremiumExpired as checkIfPremiumExpired } from '@/lib/firebase/auth'
import { ExpiredPremiumModal } from '@/components/auth/expired-premium-modal'
import { PurchaseRenewalDialog } from '@/components/purchase-renewal-dialog'
import { SocialProofNotifications } from '@/components/social-proof-notifications'
import { PremiumVideoModal } from '@/components/modals/premium-video-modal'
import { StateSelectorModal } from '@/components/state-selector-modal'
import { StatePremiumPricing } from '@/components/premium/state-premium-pricing'
import { type StateKey } from '@/lib/constants'
import { STATE_MAJOR_CITIES } from '@/lib/data/state-cities'
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
  TrendingUp,
  Shield,
  ChevronDown,
  ChevronUp,
  X,
  Loader2,
  ChevronLeft,
  Download,
  Sparkles,
  Play,
  Lock,
  Mail,
  MessageSquare,
  FileText,
  AlertTriangle,
  User,
  Headphones
} from 'lucide-react'
import { FlashSaleBanner } from '@/components/flash-sale-banner'
import { FLASH_SALE, formatOfferExpiryDate, getEffectivePricing } from '@/lib/constants'
import { ProductMockupDesktop } from '@/components/ProductMockupDesktop'
import { ProductMockupMobile } from '@/components/ProductMockupMobile'

// Static data - pre-computed for SEO
const {
  state,
  stateInfo,
  departmentInfo,
  stateData,
  pricing: staticPricing,
  formattedQuestionCount,
  heroContent,
  stats,
  testOverview,
  pricingPlans: staticPricingPlans,
  features,
  breadcrumbs,
} = texasStaticPageData

export default function TexasRealEstateTestPractice() {
  // Dynamic pricing override
  const effectivePricing = getEffectivePricing()

  // Create pricing object format expected by the component
  const pricing = {
    ...staticPricing,
    plans: effectivePricing.PLANS
  }

  // Calculate discount percentage helper for local use
  const calcDiscount = (original: number, discounted: number) =>
    Math.round(((original - discounted) / original) * 100);

  const pricingPlans = {
    sevenDay: {
      duration: 7,
      title: '7-Day Plan',
      originalPrice: `$${effectivePricing.PLANS.SEVEN_DAY.originalPrice}`,
      discountedPrice: `$${effectivePricing.PLANS.SEVEN_DAY.discountedPrice}`,
      stripePriceId: effectivePricing.PLANS.SEVEN_DAY.stripePriceId,
      badge: effectivePricing.PLANS.SEVEN_DAY.originalPrice > effectivePricing.PLANS.SEVEN_DAY.discountedPrice
        ? `${calcDiscount(effectivePricing.PLANS.SEVEN_DAY.originalPrice, effectivePricing.PLANS.SEVEN_DAY.discountedPrice)}% OFF`
        : null
    },
    thirtyDay: {
      duration: 30,
      title: '30-Day Plan',
      originalPrice: `$${effectivePricing.PLANS.THIRTY_DAY.originalPrice}`,
      discountedPrice: `$${effectivePricing.PLANS.THIRTY_DAY.discountedPrice}`,
      stripePriceId: effectivePricing.PLANS.THIRTY_DAY.stripePriceId,
      badge: effectivePricing.PLANS.THIRTY_DAY.originalPrice > effectivePricing.PLANS.THIRTY_DAY.discountedPrice
        ? `${calcDiscount(effectivePricing.PLANS.THIRTY_DAY.originalPrice, effectivePricing.PLANS.THIRTY_DAY.discountedPrice)}% OFF`
        : null
    },
    lifetime: {
      duration: 36500,
      title: 'Lifetime Plan',
      originalPrice: `$${effectivePricing.PLANS.LIFETIME.originalPrice}`,
      discountedPrice: `$${effectivePricing.PLANS.LIFETIME.discountedPrice}`,
      stripePriceId: effectivePricing.PLANS.LIFETIME.stripePriceId,
      badge: effectivePricing.PLANS.LIFETIME.originalPrice > effectivePricing.PLANS.LIFETIME.discountedPrice
        ? `${calcDiscount(effectivePricing.PLANS.LIFETIME.originalPrice, effectivePricing.PLANS.LIFETIME.discountedPrice)}% OFF`
        : null
    }
  }
  // Client-side state - same as original component
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login')
  const [isPremiumLogin, setIsPremiumLogin] = useState(false)
  const [isRedirecting, setIsRedirecting] = useState(false)
  const [showExpiredModal, setShowExpiredModal] = useState(false)
  const [showBanner, setShowBanner] = useState(true)
  const [selectedDuration, setSelectedDuration] = useState<7 | 30 | 36500>(30)

  const [showPurchaseModal, setShowPurchaseModal] = useState(false)
  const [purchaseLoading, setPurchaseLoading] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [showVideoModal, setShowVideoModal] = useState(false)
  const [stateModalOpen, setStateModalOpen] = useState(false)
  const router = useRouter()

  const { user, userData, isPremium, isPremiumExpired, premiumStatus, signOut, loading: authLoading } = useAuth()

  // Ref for plan scroll container
  const planScrollRef = useRef<HTMLDivElement>(null)
  const isScrollingProgrammatically = useRef(false)

  // Handle scroll to sync button state with visible plan
  const handlePlanScroll = useCallback(() => {
    if (isScrollingProgrammatically.current) return
    const container = planScrollRef.current
    if (!container) return

    const scrollLeft = container.scrollLeft
    const containerWidth = container.clientWidth

    // Detect which card is most visible based on scroll position
    if (scrollLeft > containerWidth * 1.1) {
      setSelectedDuration(36500)
    } else if (scrollLeft > containerWidth * 0.5) {
      setSelectedDuration(30)
    } else {
      setSelectedDuration(7)
    }
  }, [])

  // On mount: position mobile carousel at 30-day card before user sees the section
  useEffect(() => {
    if (window.innerWidth < 768) {
      isScrollingProgrammatically.current = true
      const plan30 = document.getElementById('plan-30')
      const container = planScrollRef.current
      if (plan30 && container) {
        const cardLeft = plan30.offsetLeft
        const cardWidth = plan30.offsetWidth
        const containerWidth = container.clientWidth
        container.scrollLeft = cardLeft - (containerWidth - cardWidth) / 2
      }
      setTimeout(() => {
        isScrollingProgrammatically.current = false
      }, 100)
    }
  }, [])

  // Analytics tracking for premium section views
  useEffect(() => {
    const premiumSection = document.getElementById('premium-section')
    if (!premiumSection) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(`Analytics: User viewed premium section on ${state} page`)

            if (typeof window !== 'undefined' && (window as any).gtag) {
              (window as any).gtag('event', 'view_premium_section', {
                event_category: 'conversion',
                event_label: state,
                value: 1
              })
            }

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
      { threshold: 0.3 }
    )

    observer.observe(premiumSection)
    return () => observer.disconnect()
  }, [state])

  // Utility functions
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
    setTouchEnd(null)
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
      setCurrentImageIndex(1)
    }
    if (isRightSwipe && currentImageIndex > 0) {
      setCurrentImageIndex(0)
    }
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
        window.location.href = data.url
      }
    } catch (error) {
      console.error('Error creating checkout session:', error)
      alert('An error occurred. Please try again.')
      setIsRedirecting(false)
      setAuthModalOpen(false)
    }
  }

  const handleUpgradePremium = async (duration: 7 | 30 | 36500) => {
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
    console.log(`Analytics: User clicked pricing button on ${state} page`)

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

    setShowPurchaseModal(true)
  }

  const handleUpgrade = async () => {
    if (!user) return
    setIsRedirecting(true)
    await createCheckoutSession(user.uid, 90)
  }

  const handleAuthSuccess = async (mode: 'login' | 'signup', result?: any) => {
    if (mode === 'signup' && result?.user) {
      setIsRedirecting(true)
      await createCheckoutSession(result.user.uid, 30)
    } else {
      setAuthModalOpen(false)

      if (mode === 'login' && result?.userData) {
        if (result.userData.isPremium && checkIfPremiumExpired(result.userData)) {
          setShowExpiredModal(true)
        } else if (result.userData.isPremium) {
          router.push('/dashboard')
        }
      }
    }
  }

  const handleLogin = () => {
    const currentPath = typeof window !== 'undefined' ? window.location.pathname : ''
    router.push(`/login${currentPath ? `?redirect=${encodeURIComponent(currentPath)}` : ''}`)
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
    <div className="min-h-screen bg-white overflow-x-hidden">
      <style jsx>{`
        @keyframes shimmer {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.15);
          }
        }
      `}</style>
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
          premiumButtonText="Unlock 2000 Questions"
          premiumButtonAction={scrollToPremium}
          isLoading={authLoading}
          onSelectState={() => setStateModalOpen(true)}
          currentState="texas"
          currentLicenseType="car"
          hidePremiumButton={true}
        />
      </div>

      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            {breadcrumbs.map((crumb, index) => (
              <div key={index} className="flex items-center">
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-[#007aff] cursor-pointer transition-colors duration-200">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-gray-900 font-medium">{crumb.label}</span>
                )}
                {index < breadcrumbs.length - 1 && (
                  <ChevronRight className="w-4 h-4 mx-2" />
                )}
              </div>
            ))}
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto w-full">
              {/* Text Content */}
              <div className="text-left lg:-mt-12">
                <div className="inline-flex items-center gap-2 bg-[#007aff]/5 backdrop-blur-sm border border-[#007aff]/20 rounded-full px-4 py-2 mb-8 mt-16 md:mt-0 animate-fade-in">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-medium text-gray-700">{heroContent.badgeText}</span>
                </div>

                <h1 className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-4 md:mb-6 animate-fade-in-up delay-100 leading-tight md:leading-tight lg:leading-tight">
                  {heroContent.headline} <br />
                  <span className="text-[#007aff]">{departmentInfo.name} real estate exam</span>
                </h1>
                <p className="text-base text-gray-600 mb-3 md:mb-4 lg:mb-5 max-w-2xl lg:max-w-none animate-fade-in-up delay-200">
                  Imagine you are at the Real Estate and you know you will pass because you have already seen every question before. Join 25K+ students using our state-specific Texas Real Estate question bank and pass on your first attempt.
                </p>


                <div className="flex flex-col gap-4 items-start animate-fade-in-up delay-300 max-w-md">
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
                    {heroContent.primaryButtonText}
                  </Button>
                </div>
              </div>

              {/* Product Images Gallery */}
              <div className="relative lg:order-2 animate-fade-in-up delay-400 w-full">
                <div className="relative ml-0 lg:ml-8 max-w-[600px] lg:max-w-[700px] mx-auto lg:mx-0 w-full">
                  {/* Image Container */}
                  <div className="relative overflow-hidden w-full">
                    <div
                      className="flex w-full transition-transform duration-500 ease-in-out touch-pan-y"
                      style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                      onTouchStart={onTouchStart}
                      onTouchMove={onTouchMove}
                      onTouchEnd={onTouchEnd}
                    >
                      {/* Desktop Image */}
                      <div className="w-full flex-shrink-0 flex items-center">
                        <ProductMockupDesktop />
                      </div>

                      {/* Mobile Image */}
                      <div className="w-full flex-shrink-0 flex justify-center items-end">
                        <ProductMockupMobile />
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
        <section className="bg-white relative z-20 py-8 md:py-12">
          <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
              <div className="bg-[#f0f4f8] hover:bg-[#e7eef5] rounded-2xl p-6 md:p-8 text-center transition-all duration-200 hover:shadow-md">
                <div className="text-xs md:text-sm lg:text-base font-semibold text-gray-500 tracking-wide uppercase leading-tight">Updated Content</div>
                <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-gray-900 mt-2 md:mt-3 leading-none">2026</div>
              </div>
              <div className="bg-[#f0f4f8] hover:bg-[#e7eef5] rounded-2xl p-6 md:p-8 text-center transition-all duration-200 hover:shadow-md">
                <div className="text-xs md:text-sm lg:text-base font-semibold text-gray-500 tracking-wide uppercase leading-tight">Students Helped</div>
                <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-gray-900 mt-2 md:mt-3 leading-none">25K+</div>
              </div>
              <div className="bg-[#f0f4f8] hover:bg-[#e7eef5] rounded-2xl p-6 md:p-8 text-center transition-all duration-200 hover:shadow-md">
                <div className="text-xs md:text-sm lg:text-base font-semibold text-gray-500 tracking-wide uppercase leading-tight">Practice Questions</div>
                <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-gray-900 mt-2 md:mt-3 leading-none">{stats[2]?.value ?? '2000'}</div>
              </div>
              <div className="bg-[#f0f4f8] hover:bg-[#e7eef5] rounded-2xl p-6 md:p-8 text-center transition-all duration-200 hover:shadow-md">
                <div className="text-xs md:text-sm lg:text-base font-semibold text-gray-500 tracking-wide uppercase leading-tight">Student Rating</div>
                <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-gray-900 mt-2 md:mt-3 leading-none">4.8/5</div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. State Real Estate Test Overview */}
        <section className="py-12 md:py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              {/* Section Header Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start mb-8 md:mb-12 lg:mb-16 animate-fade-in-up">
                {/* Left Side (Text content) */}
                <div className="md:col-span-2 text-left">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4 md:mb-6 leading-tight">
                    {testOverview.title}
                  </h2>
                  <p className="text-base text-gray-600 leading-relaxed">
                    Learning how to pass the Texas Real Estate Exam requires understanding national real estate principles, state-specific laws, contracts, agency relationships, and property math. Our comprehensive study system helps you prepare for the Texas Real Estate Exam with realistic practice questions and detailed explanations.{' '}
                    <span>
                      To prepare for your real estate exam, check out our official{' '}
                      <a
                        href="/state-guides/texas"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#007aff] font-bold underline decoration-transparent hover:decoration-[#007aff] underline-offset-4 transition-all duration-300"
                      >
                        Texas TREC Exam State Guide
                      </a>
                      {stateData.handbookUrl && (
                        <>
                          {' '}or read the{' '}
                          <a
                            href={stateData.handbookUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#007aff] font-bold underline decoration-transparent hover:decoration-[#007aff] underline-offset-4 transition-all duration-300"
                          >
                            official Texas TREC Handbook
                          </a>
                        </>
                      )}
                      .
                    </span>
                  </p>
                </div>

                {/* Right Side (Blue Links Box) */}
                <div className="bg-[#007aff]/5 rounded-lg p-5 border border-[#007aff]/10 flex flex-col justify-center w-full">
                  <h4 className="font-bold text-sm text-[#007aff] uppercase tracking-wider mb-4">Quick Links</h4>
                  <div className="space-y-4">
                    {stateData.handbookUrl && (
                      <a
                        href={stateData.handbookUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm font-semibold text-gray-900 hover:text-[#007aff] transition-all duration-200 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#007aff]/10 flex items-center justify-center mr-3 text-[#007aff] group-hover:scale-105 transition-transform flex-shrink-0">
                          <Book className="w-4 h-4" />
                        </div>
                        <div className="flex-1 text-left">
                          <div className="leading-tight group-hover:underline">Official Handbook (PDF)</div>
                          <span className="text-[10px] text-gray-500 font-normal">Read the official manual</span>
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#007aff] ml-2 flex-shrink-0" />
                      </a>
                    )}
                    <a
                      href="/state-guides/texas"
                      target="_blank"
                      className="flex items-center text-sm font-semibold text-gray-900 hover:text-[#007aff] transition-all duration-200 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#007aff]/10 flex items-center justify-center mr-3 text-[#007aff] group-hover:scale-105 transition-transform flex-shrink-0">
                        <Award className="w-4 h-4" />
                      </div>
                      <div className="flex-1 text-left">
                        <div className="leading-tight group-hover:underline">Real Estate Exam State Guide</div>
                        <span className="text-[10px] text-gray-500 font-normal">Step-by-step prep guide</span>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#007aff] ml-2 flex-shrink-0" />
                    </a>
                    <Link
                      href="/texas-real-estate-practice-test-125-questions"
                      className="flex items-center text-sm font-semibold text-gray-900 hover:text-[#007aff] transition-all duration-200 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#007aff]/10 flex items-center justify-center mr-3 text-[#007aff] group-hover:scale-105 transition-transform flex-shrink-0">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <div className="flex-1 text-left">
                        <div className="leading-tight group-hover:underline">Free TX practice test</div>
                        <span className="text-[10px] text-gray-500 font-normal">125 questions (Exact format)</span>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#007aff] ml-2 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Test Statistics Grid */}
              <div className="flex md:grid md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mb-8 md:mb-12 lg:mb-16 animate-fade-in-up delay-100 overflow-x-auto pb-4 md:pb-0 scrollbar-none snap-x snap-mandatory px-4 -mx-4 md:px-0 md:mx-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {/* Card 1: Total Questions */}
                <div className="flex-shrink-0 w-[140px] xs:w-[155px] md:w-auto snap-start bg-[#f0f4f8] rounded-xl p-4 text-left transition-all duration-200 hover:bg-[#e7eef5] hover:shadow-sm">
                  <div className="text-[11px] md:text-xs font-medium text-gray-500 leading-tight">Total questions</div>
                  <div className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mt-2 leading-none">
                    {stateData.testOverview.totalQuestions}
                  </div>
                </div>

                {/* Card 2: Passing Score */}
                <div className="flex-shrink-0 w-[140px] xs:w-[155px] md:w-auto snap-start bg-[#f0f4f8] rounded-xl p-4 text-left transition-all duration-200 hover:bg-[#e7eef5] hover:shadow-sm">
                  <div className="text-[11px] md:text-xs font-medium text-gray-500 leading-tight">Passing score</div>
                  <div className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mt-2 leading-none">
                    {stateData.testOverview.passingScore}
                  </div>
                </div>

                {/* Card 3: Passing Percentage */}
                <div className="flex-shrink-0 w-[140px] xs:w-[155px] md:w-auto snap-start bg-[#f0f4f8] rounded-xl p-4 text-left transition-all duration-200 hover:bg-[#e7eef5] hover:shadow-sm">
                  <div className="text-[11px] md:text-xs font-medium text-gray-500 leading-tight">Passing grade</div>
                  <div className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mt-2 leading-none">
                    {Math.round((stateData.testOverview.passingScore / stateData.testOverview.totalQuestions) * 100)}%
                  </div>
                </div>

                {/* Card 4: Mistakes Allowed */}
                <div className="flex-shrink-0 w-[140px] xs:w-[155px] md:w-auto snap-start bg-[#f0f4f8] rounded-xl p-4 text-left transition-all duration-200 hover:bg-[#e7eef5] hover:shadow-sm">
                  <div className="text-[11px] md:text-xs font-medium text-gray-500 leading-tight">Max mistakes</div>
                  <div className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mt-2 leading-none">
                    {stateData.testOverview.totalQuestions - stateData.testOverview.passingScore}
                  </div>
                </div>

                {/* Card 5: Time Limit */}
                <div className="flex-shrink-0 w-[140px] xs:w-[155px] md:w-auto snap-start bg-[#f0f4f8] rounded-xl p-4 text-left transition-all duration-200 hover:bg-[#e7eef5] hover:shadow-sm">
                  <div className="text-[11px] md:text-xs font-medium text-gray-500 leading-tight">Time limit</div>
                  <div className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mt-2 leading-none whitespace-nowrap overflow-hidden text-ellipsis">
                    {stateData.testOverview.timeLimit === 'No time limit' ? 'No limit' : stateData.testOverview.timeLimit}
                  </div>
                </div>

                {/* Card 6: Age Requirement */}
                <div className="flex-shrink-0 w-[140px] xs:w-[155px] md:w-auto snap-start bg-[#f0f4f8] rounded-xl p-4 text-left transition-all duration-200 hover:bg-[#e7eef5] hover:shadow-sm">
                  <div className="text-[11px] md:text-xs font-medium text-gray-500 leading-tight">Age requirement</div>
                  <div className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mt-2 leading-none">
                    18+
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* 4. State-Specific Study Tips & Common Mistakes */}
        <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-8 md:mb-12 lg:mb-16 animate-fade-in-up">
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-4 md:mb-6">
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
                      {stateData.commonMistakes.map((mistake: any, index) => (
                        <div key={index} className="group relative">
                          <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-xl md:rounded-2xl p-4 md:p-6 border border-red-100 hover:shadow-md transition-all duration-300">
                            <div className="flex items-start">
                              <div className="w-7 h-7 md:w-8 md:h-8 bg-red-500 rounded-full flex items-center justify-center mr-3 md:mr-4 mt-0.5 md:mt-1 flex-shrink-0">
                                <span className="text-white font-bold text-xs md:text-sm">⚠</span>
                              </div>
                              <div className="flex-1">
                                <h4 className="font-bold text-base md:text-lg text-gray-900 mb-1 md:mb-2">{mistake.topic}</h4>
                                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                  {mistake.link ? (
                                    <>
                                      {mistake.description.split(mistake.link.text).map((part: string, i: number, arr: string[]) => (
                                        <span key={i}>
                                          {part}
                                          {i < arr.length - 1 && (
                                            <Link
                                              href={mistake.link.url}
                                              className="text-[#007aff] hover:underline font-medium"
                                            >
                                              {mistake.link.text}
                                            </Link>
                                          )}
                                        </span>
                                      ))}
                                    </>
                                  ) : (
                                    mistake.description
                                  )}
                                </p>
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

        {/* 5. Free PDF Download Section */}
        <section className="py-12 md:py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Free PDF Download Section */}
              <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 rounded-3xl p-6 md:p-8 lg:p-12 shadow-lg border border-green-100 mb-8 md:mb-12 lg:mb-16 animate-fade-in-up delay-150">
                <div className="text-center max-w-3xl mx-auto">
                  <div className="inline-flex items-center gap-2 bg-green-600 text-white rounded-full px-4 py-2 mb-6 animate-bounce">
                    <Download className="w-4 h-4" />
                    <span className="text-sm font-semibold">FREE DOWNLOAD</span>
                  </div>

                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Free Texas Real Estate Practice Test PDF
                  </h2>

                  <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 leading-relaxed">
                    Download our comprehensive practice test with <strong>50 Texas-specific questions</strong> with answers. Perfect for offline study and test preparation!
                  </p>

                  {/* PDF Benefits */}
                  <div className="grid md:grid-cols-2 gap-4 mb-8 text-left">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">50 Texas Real Estate questions</span>
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
                    onClick={() => window.open('/free-real-estate-practice-questions-PDF/Free-Texas-Real-Estate-Practice-Questions.pdf', '_blank')}
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

        {/* 6. FAQ Section */}
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
                      <div
                        className="mt-4 md:mt-6 text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: item.answer }}
                      />
                    </details>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 7. Free Practice Tests Section */}
        <section id="free-practice-tests" className="py-12 md:py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-8 md:mb-12 animate-fade-in-up">
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 rounded-full px-4 py-2 mb-6">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-semibold">100% FREE</span>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4 md:mb-6">
                  Your First Step to Getting Licensed
                </h2>
                <p className="text-xs md:text-sm lg:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  5 practice tests packed with real Texas Real Estate Commission (TREC) questions — completely free, no signup required.
                </p>
              </div>

              {/* Free Practice Tests Grid */}
              <div className="flex flex-col gap-3 md:grid md:grid-cols-3 lg:grid-cols-5 md:gap-6 mb-3 md:mb-12 animate-fade-in-up delay-100">
                {[1, 2, 3, 4, 5].map((testNum) => (
                  <Link
                    key={testNum}
                    href={`/state/${state}/practice/free/${testNum}`}
                    className="bg-white rounded-xl md:rounded-2xl border-2 border-gray-200 hover:border-[#007aff] overflow-hidden transition-all duration-300 hover:shadow-lg group flex flex-row items-center md:flex-col md:items-stretch"
                  >
                    <div className="w-28 h-24 md:w-full md:h-48 lg:h-56 overflow-hidden flex-shrink-0">
                      <img
                        src={`/images/practice-tests/${testNum}.jpg`}
                        alt={`Practice Test ${testNum}`}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-3 md:p-4 flex flex-col justify-center text-left md:text-center flex-1">
                      <h3 className="font-semibold text-gray-900 text-sm md:text-base mb-0.5 md:mb-1">Practice Test {testNum}</h3>
                      <p className="text-xs text-gray-500">10 questions</p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Exact-format practice test banner */}
              <Link
                href="/texas-real-estate-practice-test-125-questions"
                className="flex items-center justify-between gap-4 bg-white border-2 border-blue-100 hover:border-[#007aff] rounded-xl px-5 py-4 mb-3 md:mb-6 transition-all duration-200 group"
              >
                <div>
                  <p className="font-semibold text-gray-900 text-sm md:text-base group-hover:text-[#007aff] transition-colors">Try the Exact 125-Question Format</p>
                  <p className="text-xs text-gray-500 mt-0.5">Matches the real TX Real Estate Exam — 125 questions, need 88 to pass (70%)</p>
                </div>
                <span className="text-[#007aff] font-semibold text-sm whitespace-nowrap">Start →</span>
              </Link>

              {/* Premium Locked Cards Grid */}
              <div className="flex flex-col gap-3 md:grid md:grid-cols-3 lg:grid-cols-5 md:gap-6 animate-fade-in-up delay-200">
                {/* Full Question Bank */}
                <div
                  onClick={() => {
                    if (isPremium) {
                      router.push('/dashboard');
                    } else {
                      scrollToPremium();
                    }
                  }}
                  className="relative bg-white rounded-xl md:rounded-2xl border-2 border-gray-200 overflow-hidden cursor-pointer group hover:border-yellow-400 hover:shadow-lg transition-all duration-300 flex flex-row md:flex-col"
                >
                  <div className="w-28 h-24 md:w-full md:h-48 lg:h-56 overflow-hidden flex-shrink-0 relative">
                    <img
                      src="/images/practice-tests/6.jpg"
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
                    <p className="text-xs text-gray-500 mb-2 md:mb-3">{formattedQuestionCount} exam-like questions</p>
                    <div className="inline-flex items-center gap-1.5 text-yellow-600 text-xs md:text-sm font-medium">
                      <Crown className="w-3.5 h-3.5" />
                      Unlock with Premium
                    </div>
                  </div>
                </div>

                {/* Hard Questions */}
                <div
                  onClick={() => {
                    if (isPremium) {
                      router.push('/dashboard');
                    } else {
                      scrollToPremium();
                    }
                  }}
                  className="relative bg-white rounded-xl md:rounded-2xl border-2 border-gray-200 overflow-hidden cursor-pointer group hover:border-yellow-400 hover:shadow-lg transition-all duration-300 flex flex-row md:flex-col"
                >
                  <div className="w-28 h-24 md:w-full md:h-48 lg:h-56 overflow-hidden flex-shrink-0 relative">
                    <img
                      src="/images/practice-tests/7.jpg"
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
                  onClick={() => {
                    if (isPremium) {
                      router.push('/real-estate-glossary');
                    } else {
                      scrollToPremium();
                    }
                  }}
                  className="relative bg-white rounded-xl md:rounded-2xl border-2 border-gray-200 overflow-hidden cursor-pointer group hover:border-yellow-400 hover:shadow-lg transition-all duration-300 flex flex-row md:flex-col"
                >
                  <div className="w-28 h-24 md:w-full md:h-48 lg:h-56 overflow-hidden flex-shrink-0 relative">
                    <img
                      src="/images/practice-tests/8.jpg"
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

              {/* CEO & Founder Trust Card */}
              <div className="mt-8 md:mt-12 bg-[#edfff7] rounded-xl md:rounded-2xl py-4 md:py-6 px-4 md:px-8 flex flex-row items-center gap-4 md:gap-8 w-full border border-emerald-200/20 shadow-sm animate-fade-in-up delay-300">
                
                {/* Left: Avatar + Name + Role */}
                <div className="flex flex-col items-center flex-shrink-0 gap-2.5 min-w-[100px] md:min-w-[140px]">
                  <div className="relative">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden bg-gray-50 shadow-sm">
                      <img
                        src="/images/Radhika_Biyani_Profile_Picture.webp"
                        alt="Radhika Biyani"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute bottom-0 right-0 w-6 h-6 md:w-7 md:h-7 bg-[#00b074] rounded-full flex items-center justify-center border-2 border-white text-white shadow-sm">
                      <svg className="w-3.5 h-3.5 md:w-4 md:h-4 fill-current" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-center">
                    <Link
                      href="/experts/radhika-biyani"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#007aff] font-semibold text-xs sm:text-sm md:text-base leading-tight underline decoration-[#007aff]/30 hover:decoration-[#007aff] underline-offset-4 transition-all duration-300"
                    >
                      Radhika Biyani
                    </Link>
                    <div className="text-gray-500 text-[10px] sm:text-xs md:text-sm leading-tight mt-0.5">CEO & Founder</div>
                  </div>
                </div>

                {/* Vertical Divider */}
                <div className="self-stretch w-px bg-blue-200/70 flex-shrink-0" />

                {/* Right: Quote */}
                <div className="flex flex-col justify-center text-left min-w-0 gap-2 flex-1">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-[#007aff] opacity-40 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-gray-700 text-xs md:text-sm lg:text-base leading-relaxed italic">
                    Our content team follows a rigorous process to review the Real Estate handbook regularly — updating our question bank, checking for correctness, and removing outdated questions so you're always practicing with what matters.
                  </p>
                  <div className="flex items-center gap-1.5 mt-3 md:mt-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00b074] flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-500 font-medium">Question Bank last verified on <span className="text-gray-700 font-semibold">June 30, 2026</span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        
        {/* 8. Premium Features & Pricing + Social Proof */}
        <div id="pricing">
          <StatePremiumPricing
            stateName={stateInfo.name}
            formattedQuestionCount={formattedQuestionCount}
            pricingPlans={pricingPlans}
            handleUpgradePremium={handleUpgradePremium}
            setShowVideoModal={setShowVideoModal}
          />
        </div>


        {/* 9. Related Blog Posts */}
        {stateData.hasBlogs && stateData.relatedBlogs && (
          <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-8 md:mb-12 animate-fade-in-up">
                  <div className="inline-block bg-[#007aff]/10 border border-[#007aff]/20 rounded-full px-4 md:px-6 py-2 mb-4 md:mb-6">
                    <span className="text-xs md:text-sm font-medium text-[#007aff]">
                      The Blog Center
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4 md:mb-6">
                    Essential {stateInfo.name} Real Estate Guides & Tips
                  </h2>
                  <p className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Master every aspect of the {stateInfo.name} Real Estate Exam with our expert guides and insider knowledge.
                  </p>
                </div>

                <div className="flex overflow-x-auto snap-x snap-mandatory pb-6 -mx-4 px-4 gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0 md:mx-0 md:px-0 animate-fade-in-up delay-200 scrollbar-hide">
                  {stateData.relatedBlogs.map((blog: any, index) => (
                    <Link
                      key={blog.slug}
                      href={`/blog/${blog.slug}`}
                      className="snap-center flex-shrink-0 w-[70vw] md:w-auto group bg-white border border-gray-100 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-[#007aff]/10 rounded-xl flex items-center justify-center">
                          <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-[#007aff]" />
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#007aff] group-hover:translate-x-1 transition-all duration-300" />
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
        )}


      </main>

      

      {/* City Specific Pages Links */}
      {STATE_MAJOR_CITIES[state as StateKey] && (
        <section className="py-12 md:py-16 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Local {stateInfo.name} Real Estate Practice Exams by City
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-4 gap-x-6 text-center md:text-left">
              {STATE_MAJOR_CITIES[state as StateKey].map((cityName) => (
                <div key={cityName} className="flex justify-center md:justify-start">
                  <Link
                    href={`/state/${state}/city/${cityName.toLowerCase().replace(/ /g, '-')}`}
                    className="relative inline-block text-base font-semibold text-[#007aff] group py-1"
                  >
                    {cityName}
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#007aff] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final Conversion CTA */}
      <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 md:mb-6 text-balance">
              Ready to pass your {stateInfo.name} {departmentInfo.name} real estate exam?
            </h2>
            <p className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 mb-6 md:mb-8 text-balance">
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
                <span className="hidden sm:inline">Get All {formattedQuestionCount} Exam-like Questions</span>
                <span className="sm:hidden">Get Premium</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-8 mt-10 text-center text-sm text-gray-500 font-medium flex items-center justify-center gap-2">
        <Clock className="w-4 h-4" />
        <span>Last updated by a human: July 2026</span>
      </div>

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
    </div >
  )
}
