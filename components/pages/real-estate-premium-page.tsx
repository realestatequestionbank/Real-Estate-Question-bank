'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Download } from 'lucide-react'
import { useAuth } from '@/contexts/auth-context'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { AuthModal } from '@/components/auth/auth-modal'
import { Button } from '@/components/ui/button'
import { isPremiumExpired as checkIfPremiumExpired } from '@/lib/firebase/auth'
import { ExpiredPremiumModal } from '@/components/auth/expired-premium-modal'
import { PurchaseRenewalDialog } from '@/components/purchase-renewal-dialog'
import { SocialProofNotifications } from '@/components/social-proof-notifications'
import { PremiumVideoModal } from '@/components/modals/premium-video-modal'
import { StateSelectorModal } from '@/components/state-selector-modal'
import { FlashSaleBanner } from '@/components/flash-sale-banner'
import { TESTIMONIALS, type Testimonial } from '@/lib/constants/testimonials'
import { PRICING, formatOfferExpiryDate, STATES, type StateKey, getEffectivePricing, isFlashSaleActive } from '@/lib/constants'
import { getStateDedicatedPageUrl } from '@/lib/utils/state-routes'
import { StatePremiumPricing } from '@/components/premium/state-premium-pricing'
import {
  Crown,
  Play,
  CheckCircle,
  X,
  Shield,
  ArrowRight,
  Star,
  Users,
  Award,
  BookOpen,
  Target,
  TrendingUp,
  Clock,
  Zap,
  HelpCircle,
  ChevronRight,
  Lock,
  Mail,
  MessageSquare
} from 'lucide-react'

export function RealEstatePremiumPage() {
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login')
  const [isPremiumLogin, setIsPremiumLogin] = useState(false)
  const [isRedirecting, setIsRedirecting] = useState(false)
  const [showExpiredModal, setShowExpiredModal] = useState(false)
  const [showBanner, setShowBanner] = useState(true)
  const [selectedDuration, setSelectedDuration] = useState<7 | 30 | 36500>(30)
  const [showPurchaseModal, setShowPurchaseModal] = useState(false)
  const [purchaseLoading, setPurchaseLoading] = useState(false)
  const [showVideoModal, setShowVideoModal] = useState(false)
  const [stateModalOpen, setStateModalOpen] = useState(false)
  const [selectorPurpose, setSelectorPurpose] = useState<'study' | 'download_glossary' | 'download_questions'>('study')
  const [isPlayingVideo, setIsPlayingVideo] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const router = useRouter()

  const { user, userData, isPremium, isPremiumExpired, premiumStatus, signOut, loading: authLoading } = useAuth()

  const videoRef = useRef<HTMLVideoElement>(null)
  const planScrollRef = useRef<HTMLDivElement>(null)
  const isScrollingProgrammatically = useRef(false)

  const handlePlayClick = () => {
    setIsPlayingVideo(true)
    if (videoRef.current) {
      videoRef.current.play().catch(err => console.error('Error playing video:', err))
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen().catch(err => console.error('Error entering fullscreen:', err))
      }
    }
  }

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

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

  const handlePlanScroll = useCallback(() => {
    // Skip if we're programmatically scrolling
    if (isScrollingProgrammatically.current) return

    const container = planScrollRef.current
    if (!container) return

    const scrollLeft = container.scrollLeft
    const maxScroll = container.scrollWidth - container.clientWidth

    // Calculate scroll percentage (0 to 1)
    const scrollPercent = maxScroll > 0 ? scrollLeft / maxScroll : 0

    // 3 cards: 0-33% = card 1, 33-66% = card 2, 66-100% = card 3
    if (scrollPercent > 0.6) {
      setSelectedDuration(36500)
    } else if (scrollPercent > 0.25) {
      setSelectedDuration(30)
    } else {
      setSelectedDuration(7)
    }
  }, [])

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('premium-section') || document.getElementById('pricing-section')
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToCheatSheets = () => {
    const section = document.getElementById('cheat-sheets-section')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
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
          state: 'general',
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
    if (!user) {
      router.push('/get-premium?plan=36500')
      return
    }

    setShowPurchaseModal(true)
  }

  const handleUpgrade = async () => {
    if (!user) return
    setIsRedirecting(true)
    await createCheckoutSession(user.uid, 36500)
  }

  const handleAuthSuccess = async (mode: 'login' | 'signup', result?: any) => {
    if (mode === 'signup' && result?.user) {
      setIsRedirecting(true)
      await createCheckoutSession(result.user.uid, selectedDuration)
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
    router.push('/get-premium?plan=36500')
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
      router.push('/get-premium?plan=36500')
    }
  }

  const triggerPdfDownload = (stateKey: string) => {
    const capitalizedState = stateKey
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('-');
    const filename = `Free-${capitalizedState}-Real-Estate-Practice-Questions.pdf`;
    const link = document.createElement('a');
    link.href = `/free-real-estate-practice-questions-PDF/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const handleDownloadCheatSheet = (type: 'glossary' | 'questions') => {
    if (!isPremium) {
      const previewUrl = type === 'glossary'
        ? '/images/top-us-real-estate-glossary-look-inside.png'
        : '/images/top-us-real-estate-questions-look-inside.png';
      window.open(previewUrl, '_blank');
      return;
    }

    const activeState = (userData?.premiumState || userData?.lastActiveState || (typeof window !== 'undefined' ? localStorage.getItem('selected_state') : null)) as StateKey | null;

    if (activeState) {
      triggerPdfDownload(activeState);
    } else {
      setSelectorPurpose(type === 'glossary' ? 'download_glossary' : 'download_questions');
      setStateModalOpen(true);
    }
  }

  const handleStateSelect = (selectedState: StateKey) => {
    if (selectorPurpose === 'download_glossary' || selectorPurpose === 'download_questions') {
      triggerPdfDownload(selectedState);
      setStateModalOpen(false);
    } else {
      router.push(`/state/${selectedState}/free`);
    }
  }

  const handleRenewal = async () => {
    if (user) await createCheckoutSession(user.uid, 36500)
  }

  const getUserDisplayName = () => {
    if (userData?.firstName && userData?.lastName) {
      return `${userData.firstName} ${userData.lastName}`
    }
    return user?.displayName || user?.email?.split('@')[0] || 'User'
  }

  // Calculate discount percentage helper
  const calcDiscount = (original: number, discounted: number) =>
    Math.round(((original - discounted) / original) * 100);

  const effectivePricing = getEffectivePricing()

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

  const comparisonFeatures = [
    { feature: 'Practice Questions', free: '50 questions', premium: 'Full Question Bank' },
    { feature: 'Mock Tests', free: false, premium: 'Unlimited' },
    { feature: 'Progress Tracking', free: false, premium: true },
    { feature: 'Pass Probability Score', free: false, premium: true },
    { feature: 'Real Estate Glossary', free: 'Limited', premium: 'Full Access' },
    { feature: 'Last-Minute Revision', free: false, premium: true },
    { feature: 'Pass Guarantee', free: false, premium: '100% Money Back' },
    { feature: 'Priority Support', free: false, premium: true },
  ]

  const premiumFeatures = [
    {
      icon: BookOpen,
      title: 'Full Question Bank',
      description: 'Access all state-specific questions that mirror the actual Real Estate Exam format'
    },
    {
      icon: Target,
      title: 'Unlimited Mock Tests',
      description: 'Take as many practice tests as you need to build confidence'
    },
    {
      icon: Zap,
      title: 'Uncommon Sense Questions',
      description: 'Master the tricky questions that most people get wrong'
    },
    {
      icon: Award,
      title: 'Real Estate Glossary',
      description: 'Comprehensive glossary of essential real estate terminology'
    },
    {
      icon: Clock,
      title: 'Last-Minute Revision',
      description: 'Quick review guide for the day before your test'
    },
    {
      icon: TrendingUp,
      title: 'Progress Tracking',
      description: 'Track your performance and see your pass probability score'
    },
    {
      icon: Shield,
      title: '100% Pass Guarantee',
      description: 'Full refund if you don\'t pass after completing our program'
    },
    {
      icon: HelpCircle,
      title: 'Priority Support',
      description: 'Get fast answers to any questions about the Real Estate Exam'
    }
  ]

  const faqItems = [
    {
      question: 'What happens after I purchase?',
      answer: 'After purchase, you\'ll receive immediate access to all premium features. You can start practicing right away on any device. Your account will be automatically upgraded and you\'ll be redirected to your dashboard.'
    },
    {
      question: 'How long is my access valid?',
      answer: 'Your access is valid for the duration of your chosen plan (7 days, 30 days, or Lifetime). The countdown starts from your purchase date. Most students pass the exam within the first few weeks of studying.'
    },
    {
      question: 'Can I use it on multiple devices?',
      answer: 'Yes! You can access your premium account from any device - phone, tablet, or computer. Your progress syncs automatically across all devices so you can study anywhere.'
    },
    {
      question: 'What\'s the pass guarantee?',
      answer: 'If you complete our premium program and still don\'t pass your official Real Estate licensing exam, we\'ll refund 100% of your purchase. Simply send us your exam failure notification and we\'ll process your refund within 5-7 days. No questions asked.'
    },
    {
      question: 'How is this different from Candidate Bulletins or textbooks?',
      answer: 'While Candidate Bulletins outline the exam topics and textbooks provide raw legal definitions, they do not test your practical application of knowledge. Our question bank provides active learning through exam-like practice questions and detailed explanations that prepare you for the actual test format.'
    },
    {
      question: 'Do I need to create an account?',
      answer: 'Yes, you\'ll create a quick account during checkout. This allows us to save your progress, provide the pass guarantee, and let you access your premium features from any device.'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Banner */}
      {showBanner && (
        <FlashSaleBanner
          onClose={() => setShowBanner(false)}
          onClick={scrollToPricing}
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
          premiumButtonAction={scrollToPricing}
          isLoading={authLoading}
          onSelectState={() => setStateModalOpen(true)}
          hideGetPremiumButton={true}
          showSwitchToCdl={true}
          currentLicenseType="car"
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
            <span className="text-gray-900 font-medium">Real Estate Premium</span>
          </div>
        </div>
      </div>

      <main>
        {/* 1. Hero Section */}
        <section className="relative pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
            <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-float will-change-transform"></div>
            <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl animate-float-delayed will-change-transform"></div>
            <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-200/25 to-pink-200/25 rounded-full blur-3xl animate-float will-change-transform"></div>
            <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-gradient-to-br from-cyan-200/25 to-blue-200/25 rounded-full blur-3xl animate-float-delayed will-change-transform"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
              {/* Text Content */}
              <div className="text-left">
                <div className="inline-flex items-center gap-2 bg-[#007aff]/5 backdrop-blur-sm border border-[#007aff]/20 rounded-full px-4 py-2 mb-6">
                  <Crown className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm font-medium text-gray-700">98% of our students passed</span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-black mb-6 leading-tight">
                  Pass your Real Estate Exam. <span className="text-[#007aff]">First try.</span>
                </h1>

                <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-8 max-w-3xl leading-relaxed">
                  Did you know over 70% of people fail their Real Estate Exam on the first attempt? Real Estate Premium is designed to get you licensed faster. Get instant access to our comprehensive state-specific question bank, unlimited mock tests that mirror the actual exam, and <span onClick={scrollToCheatSheets} className="text-[#007aff] cursor-pointer font-medium relative inline-block after:block after:content-[''] after:absolute after:bottom-0 after:h-[2px] after:bg-[#007aff] after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-left">2 printable Cheat Sheet PDFs</span>. Track your progress with smart analytics and pass with confidence under our 100% money-back guarantee.
                </p>

                {/* Social Proof Rating */}
                <div className="flex items-center gap-2.5 mb-8">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <span className="text-base font-semibold text-gray-900">4.8 / 5</span>
                </div>

                <div className="flex flex-col items-start gap-3">
                  <Button
                    onClick={scrollToPricing}
                    size="lg"
                    className="bg-[#007aff] hover:bg-[#0056cc] text-white font-semibold px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Crown className="w-5 h-5 mr-2" />
                    Access Full Question Bank
                  </Button>
                  <p className="text-sm text-gray-500 font-medium">
                    State specific • Starts at $39 • Full refund if you fail
                  </p>
                </div>
              </div>

              {/* Product Images Gallery */}
              <div className="relative animate-fade-in-up delay-400">
                <div className="relative ml-0 lg:ml-8 max-w-[600px] lg:max-w-[700px] mx-auto lg:mx-0">
                  {/* Image Container */}
                  <div className="relative overflow-hidden rounded-2xl border border-gray-100 shadow-xl bg-white p-2">
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
                          className="w-full h-auto rounded-xl transition-all duration-300 hover:scale-102 cursor-pointer"
                        />
                      </div>

                      {/* Mobile Image */}
                      <div className="w-full flex-shrink-0 flex justify-center items-end bg-gray-50 p-6 rounded-xl">
                        <img
                          src="/images/product-image-mobile.webp"
                          alt="Real Estate Question Bank mobile app showing practice question interface"
                          className="h-auto transition-all duration-300 hover:scale-105 cursor-pointer rounded-lg shadow-lg"
                          style={{ maxHeight: '420px', width: 'auto' }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Dots Indicator */}
                  <div className="flex justify-center gap-2 mt-4">
                    <button
                      onClick={() => setCurrentImageIndex(0)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${currentImageIndex === 0
                        ? 'bg-[#007aff] scale-110'
                        : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                      aria-label="View desktop screenshot"
                    />
                    <button
                      onClick={() => setCurrentImageIndex(1)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${currentImageIndex === 1
                        ? 'bg-[#007aff] scale-110'
                        : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                      aria-label="View mobile screenshot"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* 3. Premium Learning Experience Section */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Main Content Grid */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Side - Features */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="inline-block bg-emerald-100 border border-emerald-200 rounded-full px-4 md:px-6 py-2 mb-6">
                    <span className="text-xs md:text-sm font-medium text-emerald-700">Premium Learning Experience</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Everything You Need to Pass Your Real Estate Test
                  </h2>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    Our premium platform gives you the tools, practice, and confidence to ace your Real Estate Exam on the first try.
                  </p>

                  {/* Feature List */}
                  <div className="space-y-4 text-left">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Skip the 200-Page Manual</h4>
                        <p className="text-sm text-gray-600">Learn only what you need to pass – no fluff, no wasted time</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">See Real Exam Questions</h4>
                        <p className="text-sm text-gray-600">Practice with questions that mirror the actual Real Estate Exam format</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Know Why You Got It Wrong</h4>
                        <p className="text-sm text-gray-600">Detailed explanations help you actually understand, not just memorize</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Walk In Confident</h4>
                        <p className="text-sm text-gray-600">Take unlimited mock tests until you're ready – no surprises on test day</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Screenshots */}
                <div className="flex-1 relative">
                  {/* Desktop Screenshot */}
                  <img
                    src="/images/product-image-desktop.webp"
                    alt="Real Estate Question Bank on Desktop"
                    className="w-full"
                  />

                  {/* Mobile Screenshot - Overlapping */}
                  <div className="absolute -bottom-8 -left-4 md:-left-8 w-32 md:w-40">
                    <img
                      src="/images/product-image-mobile-cropped.webp"
                      alt="Real Estate Question Bank on Mobile"
                      className="w-full"
                    />
                  </div>
                </div>
              </div>

              {/* Testimonial Below */}
              <div className="mt-20 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      S
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex justify-center md:justify-start gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 italic mb-2">
                      "I was so nervous about failing again, but after using Real Estate Premium for just one week, I passed with flying colors! The explanations really helped me understand the material."
                    </p>
                    <p className="font-semibold text-gray-900">Sarah J.</p>
                    <p className="text-sm text-gray-500">Passed on first try in California</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Free vs Premium Comparison Table */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block bg-[#007aff]/10 border border-[#007aff]/20 rounded-full px-4 md:px-6 py-2 mb-6">
                  <span className="text-xs md:text-sm font-medium text-[#007aff]">Compare Plans</span>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Free vs Premium
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  See what you get with premium access
                </p>
              </div>

              {/* Comparison Table */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="grid grid-cols-3">
                  <div className="p-4 md:p-6 bg-gray-50 font-semibold text-gray-700">Feature</div>
                  <div className="p-4 md:p-6 bg-gray-50 text-center font-semibold text-gray-700">Free</div>
                  <div className="p-4 md:p-6 bg-[#007aff]/10 text-center font-semibold text-[#007aff]">
                    <Crown className="w-4 h-4 inline mr-1" /> Premium
                  </div>
                </div>

                {comparisonFeatures.map((item, index) => (
                  <div key={index} className="grid grid-cols-3 border-t border-gray-100">
                    <div className="p-4 md:p-6 text-gray-700 text-sm md:text-base">{item.feature}</div>
                    <div className="p-4 md:p-6 text-center flex items-center justify-center">
                      {item.free === false ? (
                        <X className="w-5 h-5 text-red-400" />
                      ) : item.free === true ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : (
                        <span className="text-sm text-gray-600">{item.free}</span>
                      )}
                    </div>
                    <div className="p-4 md:p-6 bg-[#007aff]/5 text-center flex items-center justify-center">
                      {item.premium === true ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : (
                        <span className="text-sm font-medium text-[#007aff]">{item.premium}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <Button
                  onClick={scrollToPricing}
                  size="lg"
                  className="bg-[#007aff] hover:bg-[#0056cc] text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Upgrade to Premium
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Premium Features Deep Dive */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block bg-purple-100 border border-purple-200 rounded-full px-4 md:px-6 py-2 mb-6">
                  <span className="text-xs md:text-sm font-medium text-purple-700">Everything You Need</span>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Premium Features
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Get complete access to our comprehensive Real Estate Exam preparation platform
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
                {premiumFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-3 md:p-6 shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-[#007aff]/10 rounded-xl flex items-center justify-center mb-2 md:mb-4">
                      <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-[#007aff]" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">{feature.title}</h3>
                    <p className="text-xs md:text-sm text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5.5. Printable Cheat Sheets Section */}
        <section id="cheat-sheets-section" className="py-12 md:py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                {/* Left Side - Content */}
                <div className="lg:w-5/12 text-center lg:text-left order-1 lg:order-1">
                  <div className="inline-block bg-indigo-100 border border-indigo-200 rounded-full px-4 md:px-6 py-2 mb-6">
                    <span className="text-xs md:text-sm font-medium text-indigo-700">Bonus Material</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Printable Cheat Sheets Included
                  </h2>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    Get instant access to our high-quality, printable cheat sheets. Perfect for studying on the go or quick revision before the test. Includes our complete <strong>Top US Real Estate Glossary</strong> guide and <strong>Top 100 Most Common US Real Estate Exam Questions</strong> to help you master essential terminology and ace the most frequently tested topics.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 justify-center lg:justify-start">
                      <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                      <span className="text-gray-700">Downloadable PDF format</span>
                    </div>
                    <div className="flex items-center gap-3 justify-center lg:justify-start">
                      <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                      <span className="text-gray-700">High-resolution visuals</span>
                    </div>
                    <div className="flex items-center gap-3 justify-center lg:justify-start">
                      <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                      <span className="text-gray-700">Perfect for last-minute review</span>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button
                      onClick={scrollToPricing}
                      size="lg"
                      className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Get It With Premium
                    </Button>
                  </div>
                </div>

                {/* Right Side - Image */}
                <div className="lg:w-7/12 order-2 lg:order-2">
                  <div className="grid grid-cols-2 gap-4 md:gap-8">
                    {/* Cheat Sheet 1 */}
                    <div
                      className="relative group cursor-pointer hover:z-10 transition-all duration-300 transform hover:scale-105"
                      onClick={() => handleDownloadCheatSheet('glossary')}
                    >
                      <div className="absolute inset-0 bg-indigo-200 rounded-2xl rotate-2 group-hover:rotate-6 transition-transform duration-300"></div>
                      <img
                        src="/images/Top-US-Real-Estate-Glossary-PDF.png"
                        alt="Top US Real Estate Glossary Cheat Sheet Preview"
                        className="relative rounded-2xl shadow-xl border-4 border-white w-full object-cover aspect-[3/4]"
                      />

                      {/* Look Inside / Download Badge */}
                      <div className="absolute bottom-3 right-3 z-10">
                        <div className="bg-white/95 backdrop-blur-sm border border-indigo-100 text-indigo-900 text-[10px] md:text-xs font-bold px-2.5 py-1.5 rounded-full shadow-md flex items-center gap-1.5 hover:bg-white hover:scale-105 transition-all">
                          {isPremium ? (
                            <>
                              <Download className="w-3 h-3 md:w-3.5 md:h-3.5" />
                              <span>Download PDF</span>
                            </>
                          ) : (
                            <>
                              <BookOpen className="w-3 h-3 md:w-3.5 md:h-3.5" />
                              <span>Look Inside</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Cheat Sheet 2 */}
                    <div
                      className="relative group cursor-pointer hover:z-10 transition-all duration-300 transform hover:scale-105"
                      onClick={() => handleDownloadCheatSheet('questions')}
                    >
                      <div className="absolute inset-0 bg-indigo-200 rounded-2xl -rotate-2 group-hover:-rotate-6 transition-transform duration-300"></div>
                      <img
                        src="/images/Top-US-Real-Estate-Questions-PDF.png"
                        alt="Top US Real Estate Questions Cheat Sheet Preview"
                        className="relative rounded-2xl shadow-xl border-4 border-white w-full object-cover aspect-[3/4]"
                      />

                      {/* Look Inside / Download Badge */}
                      <div className="absolute bottom-3 right-3 z-10">
                        <div className="bg-white/95 backdrop-blur-sm border border-indigo-100 text-indigo-900 text-[10px] md:text-xs font-bold px-2.5 py-1.5 rounded-full shadow-md flex items-center gap-1.5 hover:bg-white hover:scale-105 transition-all">
                          {isPremium ? (
                            <>
                              <Download className="w-3 h-3 md:w-3.5 md:h-3.5" />
                              <span>Download PDF</span>
                            </>
                          ) : (
                            <>
                              <BookOpen className="w-3 h-3 md:w-3.5 md:h-3.5" />
                              <span>Look Inside</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Testimonials Section */}
        <section className="py-12 md:py-20 bg-gray-50 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-block bg-yellow-100 border border-yellow-200 rounded-full px-4 md:px-6 py-2 mb-6">
                <span className="text-xs md:text-sm font-medium text-yellow-700">Student Success Stories</span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Real Students, Real Results
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                Join thousands of students who passed their Real Estate Exam with confidence
              </p>

              {/* Rating Display */}
              <div className="inline-flex items-center bg-white border border-yellow-200 rounded-xl px-6 py-3 shadow-md">
                <div className="flex text-yellow-500 text-lg mr-3">
                  <span>★★★★★</span>
                </div>
                <div className="text-left">
                  <div className="font-bold text-gray-900">4.8/5</div>
                  <div className="text-xs text-gray-600">Average rating</div>
                </div>
              </div>
            </div>

            {/* Testimonials Carousel */}
            <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
              {TESTIMONIALS.slice(0, 6).map((t: Testimonial) => (
                <div key={t.id} className="flex-shrink-0 w-[85vw] md:w-[400px] snap-center">
                  <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <div className="w-14 h-14 rounded-xl mr-4 overflow-hidden shadow bg-gray-100">
                        {t.image ? (
                          <img
                            src={t.image}
                            alt={t.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-lg">
                            {t.name.charAt(0)}
                          </div>
                        )}
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">{t.name}</div>
                        <div className="text-[#007aff] text-sm">{t.city}, {t.state}</div>
                      </div>
                    </div>

                    <div className="text-yellow-500 mb-3">{'★'.repeat(t.rating)}</div>

                    <blockquote className="text-gray-700 text-sm md:text-base leading-relaxed flex-grow">
                      "{t.comment}"
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                href="/success-stories"
                className="group border-2 border-[#007aff] text-[#007aff] hover:bg-[#007aff] hover:text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 inline-flex items-center gap-2"
              >
                View All Success Stories
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 7. Pricing Section */}
        <StatePremiumPricing
          stateName="All States"
          formattedQuestionCount="2000"
          customQuestionBankText="State-specific Real Estate Question Bank"
          pricingPlans={pricingPlans}
          handleUpgradePremium={handleUpgradePremium}
          setShowVideoModal={setShowVideoModal}
        />

        {/* 8. Pass Guarantee Section */}
        < section className="py-12 md:py-20 bg-gradient-to-br from-emerald-50 via-white to-blue-50" >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-16 md:w-20 h-16 md:h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Shield className="w-8 md:w-10 h-8 md:h-10 text-white" />
              </div>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-emerald-700 via-green-600 to-blue-600 bg-clip-text text-transparent">
                  100% Pass Guarantee
                </span>
              </h2>

              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                If you don't pass your official Real Estate Exam after completing our Premium package,
                <span className="font-semibold text-emerald-600"> we'll instantly refund the full amount</span>.
                No questions asked. No fine print.
              </p>

              <div className="bg-white border border-emerald-100 rounded-2xl p-6 max-w-2xl mx-auto shadow-lg">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">Simple process: Send us your test failure email</span>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">Get your money back within 5-7 working days</span>
                </div>
              </div>
            </div>
          </div>
        </section >

        {/* 9. FAQ Section */}
        < section className="py-12 md:py-20 bg-white" >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block bg-[#007aff]/10 border border-[#007aff]/20 rounded-full px-4 md:px-6 py-2 mb-6">
                  <span className="text-xs md:text-sm font-medium text-[#007aff]">
                    Frequently Asked Questions
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
                  Questions About Premium?
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Quick answers to help you decide
                </p>
              </div>

              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <div key={index} className="group">
                    <details className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                      <summary className="font-bold text-gray-900 cursor-pointer text-base md:text-lg flex items-center justify-between group-hover:text-[#007aff] transition-colors duration-200">
                        {item.question}
                        <svg className="w-5 h-5 transform transition-transform duration-200 group-open:rotate-180 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <p className="mt-4 text-gray-700 text-sm md:text-base leading-relaxed">
                        {item.answer}
                      </p>
                    </details>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <p className="text-gray-600 mb-4">Still have questions?</p>
                <Link
                  href="/contact-us"
                  className="inline-block bg-white border-2 border-[#007aff] text-[#007aff] hover:bg-[#007aff]/5 font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </section >

        {/* State Real Estate Practice-Test Hubs */}
        < section className="border-t border-gray-100 pb-24 pt-16 bg-white" >
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-10 text-gray-900 text-center">State Real Estate Practice-Test Hubs</h2>

              <div className="grid grid-cols-3 md:grid-cols-5 gap-y-3 gap-x-8 text-left">
                {Object.entries(STATES)
                  .sort((a, b) => a[1].name.localeCompare(b[1].name))
                  .map(([key, state]) => (
                    <Link
                      key={key}
                      href={getStateDedicatedPageUrl(key as StateKey)}
                      className="text-[#007aff] text-base font-medium relative block w-fit after:block after:content-[''] after:absolute after:h-[2px] after:bg-[#007aff] after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-left"
                    >
                      {state.name}
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </section >

        {/* 10. Final CTA Section */}
        < section className="py-12 md:py-20 bg-[#007aff]" >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Pass Your Real Estate Test?
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join 25,000+ students who passed their Real Estate Exam with confidence. Start practicing today.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  onClick={scrollToPricing}
                  size="lg"
                  className="bg-white text-[#007aff] hover:bg-gray-100 font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Crown className="w-5 h-5 mr-2" />
                  Get Premium Access
                </Button>
              </div>

              <p className="text-white/80 text-sm">
                Starting at just ${PRICING.PLANS.SEVEN_DAY.discountedPrice} • 100% Pass Guarantee • One-time payment
              </p>
            </div>
          </div>
        </section >
      </main >

      <Footer />

      {/* Modals */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => {
          setAuthModalOpen(false)
          setIsRedirecting(false)
        }}
        mode={authMode}
        onSwitchMode={(mode: 'login' | 'signup') => {
          setAuthMode(mode)
          if (mode === 'signup') setIsPremiumLogin(false)
        }}
        onSuccess={handleAuthSuccess}
        isPremiumOnly={isPremiumLogin}
        isCheckoutFlow={authMode === 'signup' && (isPremiumLogin || !user)}
        isRedirecting={isRedirecting}
        closeOnSuccess={authMode !== 'signup' || !!user}
        onGetPremium={scrollToPricing}
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
        onClose={() => setShowPurchaseModal(false)}
        premiumStatus={premiumStatus}
        onPurchase={handlePurchaseFromModal}
        isLoading={purchaseLoading}
      />

      <PremiumVideoModal
        isOpen={showVideoModal}
        onClose={() => setShowVideoModal(false)}
        onUpgrade={() => {
          setShowVideoModal(false)
          scrollToPricing()
        }}
        forceDesktopVideo
      />

      <StateSelectorModal
        isOpen={stateModalOpen}
        onClose={() => setStateModalOpen(false)}
        onStateSelect={handleStateSelect}
      />

      <SocialProofNotifications enabled={true} isPremiumUser={isPremium} />
    </div >
  )
}
