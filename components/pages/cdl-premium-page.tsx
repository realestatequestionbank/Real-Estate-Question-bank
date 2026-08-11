'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '@/contexts/auth-context'
import { Navigation } from '@/components/navigation'
import { StateSelectorModal } from '@/components/state-selector-modal'
import { type StateKey } from '@/lib/constants'
import { Footer } from '@/components/footer'
import { AuthModal } from '@/components/auth/auth-modal'
import { Button } from '@/components/ui/button'
import { isCdlPremiumExpired as checkIfPremiumExpired } from '@/lib/firebase/auth'
import { ExpiredPremiumModal } from '@/components/auth/expired-premium-modal'
import { PurchaseRenewalDialog } from '@/components/purchase-renewal-dialog'
import { SocialProofNotifications } from '@/components/social-proof-notifications'
import {
  Crown,

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
  Loader2,
  Car,
  Bus
} from 'lucide-react'

export function CdlPremiumPage() {
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login')
  const [isPremiumLogin, setIsPremiumLogin] = useState(false)
  const [isRedirecting, setIsRedirecting] = useState(false)
  const [showExpiredModal, setShowExpiredModal] = useState(false)
  const [showBanner, setShowBanner] = useState(true)
  const [showPurchaseModal, setShowPurchaseModal] = useState(false)
  const [purchaseLoading, setPurchaseLoading] = useState(false)
  const [stateModalOpen, setStateModalOpen] = useState(false)

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const router = useRouter()

  const {
    user,
    userData,
    isCdlPremium: isPremium,
    isCdlPremiumExpired: isPremiumExpired,
    cdlPremiumStatus: premiumStatus,
    signOut,
    loading: authLoading
  } = useAuth()



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

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('premium-section')
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const createCheckoutSession = async (userId: string, duration: number = 90) => {
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
          product: 'cdl_premium'
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

  const handleUpgradePremium = async (duration: number = 90) => {
    if (!user) {
      router.push(`/get-premium?plan=${duration}&cdl=true`)
      return
    }

    setPurchaseLoading(true)
    try {
      await createCheckoutSession(user.uid, duration)
    } finally {
      setPurchaseLoading(false)
    }
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
      router.push('/get-premium?plan=90&cdl=true')
      return
    }

    setShowPurchaseModal(true)
  }

  const handleAuthSuccess = async (mode: 'login' | 'signup', result?: any) => {
    if (mode === 'signup' && result?.user) {
      setIsRedirecting(true)
      await createCheckoutSession(result.user.uid, 90)
    } else {
      setAuthModalOpen(false)

      if (mode === 'login' && result?.userData) {
        if (result.userData.isCdlPremium && checkIfPremiumExpired(result.userData)) {
          setShowExpiredModal(true)
        } else if (result.userData.isCdlPremium) {
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
    router.push('/get-premium?plan=90&cdl=true')
  }

  const handleLogout = async () => {
    await signOut()
  }

  const handleDashboard = () => {
    if (isPremium) {
      router.push('/dashboard')
    } else if (user && userData && userData.isCdlPremium && isPremiumExpired) {
      setShowExpiredModal(true)
    } else {
      router.push('/get-premium?plan=90&cdl=true')
    }
  }

  const handleRenewal = async () => {
    if (user) await createCheckoutSession(user.uid, 90)
  }

  const handleStateSelect = (selectedState: StateKey) => {
    router.push(`/${selectedState}-cdl-permit-test`)
  }

  const getUserDisplayName = () => {
    if (userData?.firstName && userData?.lastName) {
      return `${userData.firstName} ${userData.lastName}`
    }
    return user?.displayName || user?.email?.split('@')[0] || 'User'
  }

  const comparisonFeatures = [
    { feature: 'CDL Practice Questions', free: '10 questions per category', premium: '2,2000 Questions' },
    { feature: 'All Endorsements (Hazmat, Passenger, etc.)', free: 'Limited Preview', premium: 'Full Access' },
    { feature: 'Realistic Mock Exams', free: false, premium: 'Unlimited' },
    { feature: 'Progress Tracking', free: false, premium: true },
    { feature: 'Pass Probability Score', free: false, premium: true },
    { feature: 'Pre-Trip Inspection study guide', free: 'Limited', premium: 'Full Access' },
    { feature: 'Pass Guarantee', free: false, premium: '100% Money Back' },
    { feature: 'Priority Support', free: false, premium: true },
  ]

  const premiumFeatures = [
    {
      icon: BookOpen,
      title: '2,2000 state-specific questions',
      description: 'Access the complete question bank that mirrors the actual CDL exam format.'
    },
    {
      icon: Target,
      title: 'Unlimited Mock Exams',
      description: 'Simulate real Real Estate exam conditions until you are guaranteed to pass.'
    },
    {
      icon: Zap,
      title: 'All Endorsement Modules',
      description: 'Covers General Knowledge, Air Brakes, Combination, Hazmat, Passenger, Doubles/Triples, Tanker, and School Bus.'
    },
    {
      icon: Award,
      title: 'Pre-Trip Inspection Guide',
      description: 'Master the verbal walkthrough portion of your skills test with our visual checklist guide.'
    },
    {
      icon: Clock,
      title: 'Instant Explanations',
      description: 'Detailed breakdowns for every answer to help you learn the rules of the road instantly.'
    },
    {
      icon: TrendingUp,
      title: 'Smart Progress Analytics',
      description: 'Track your preparation and see your pass probability in real-time.'
    },
    {
      icon: Shield,
      title: '100% Pass Guarantee',
      description: 'Full refund if you do not pass your official CDL test after completing our course.'
    },
    {
      icon: HelpCircle,
      title: 'Priority Student Support',
      description: 'Get support from curriculum specialists to answer any tough CDL permit question.'
    }
  ]

  const faqItems = [
    {
      question: 'What is included in the CDL Premium All-Access Pass?',
      answer: 'The pass includes complete access to all state-specific CDL practice test questions (General Knowledge, Class A/B core), mock exams, and all endorsement modules (Hazmat, Air Brakes, Combination, Passenger, School Bus, Doubles/Triples, and Tanker), along with our Pre-Trip inspection study checklist.'
    },
    {
      question: 'Does this prepare me for Class A, Class B, and Class C CDL tests?',
      answer: 'Yes! Our course covers the General Knowledge requirements for all three classes, the specific Combination and Air Brakes tests needed for Class A and B, and every available state endorsement.'
    },
    {
      question: 'How long does my premium access last?',
      answer: 'CDL Premium is a one-time purchase that grants you full all-access premium features for 90 days. It is not a recurring subscription, and you will not be charged again.'
    },
    {
      question: 'Can I study on my phone, tablet, and computer?',
      answer: 'Absolutely. The platform is fully responsive and optimized for mobile devices, tablets, and desktop computers. Your progress is synced automatically to your account so you can study anywhere.'
    },
    {
      question: 'How does the 100% money-back Pass Guarantee work?',
      answer: 'We are so confident in our study prep that if you complete our practice tests and mock exams but still fail your official CDL written real estate exam at the Real Estate, simply send us an email with your test results. We will issue a 100% refund immediately.'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
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
          premiumButtonText="Unlock CDL Premium"
          premiumButtonAction={scrollToPricing}
          isLoading={authLoading}
          hideGetPremiumButton={true}
          showSwitchToCar={true}
          onSelectState={() => setStateModalOpen(true)}
          currentLicenseType="cdl"
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
            <span className="text-gray-900 font-medium">CDL Premium</span>
          </div>
        </div>
      </div>

      <main>
        {/* 1. Hero Section */}
        <section className="relative pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
            <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-float will-change-transform"></div>
            <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl animate-float-delayed will-change-transform"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
              {/* Text Content */}
              <div className="text-left">
                <div className="inline-flex items-center gap-2 bg-[#007aff]/5 backdrop-blur-sm border border-[#007aff]/20 rounded-full px-4 py-2 mb-6">
                  <Crown className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm font-medium text-gray-700">99.2% of our CDL students passed</span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-black mb-6 leading-tight">
                  Pass your CDL test. <span className="text-[#007aff]">First try.</span>
                </h1>

                <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-8 max-w-3xl leading-relaxed">
                  Start your commercial driving career without wasting time or money. CDL Premium provides comprehensive, state-specific written test prep mapped directly to the 2026 commercial handbooks. Get access to 2,2000 practice questions, realistic mock real estate exams, pre-trip inspection guides, and every single endorsement module. All backed by our 100% money-back pass guarantee.
                </p>

                {/* Social Proof Rating */}
                <div className="flex items-center gap-2.5 mb-8">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <span className="text-base font-semibold text-gray-900">4.9 / 5</span>
                </div>

                <div className="flex flex-col items-start gap-3">
                  <Button
                    onClick={scrollToPricing}
                    size="lg"
                    className="bg-[#007aff] hover:bg-[#0056cc] text-white font-semibold px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Crown className="w-5 h-5 mr-2" />
                    Access Full CDL Question Bank
                  </Button>
                  <p className="text-sm text-gray-500 font-medium">
                    All endorsements • $99 one-time • Money-back guarantee
                  </p>
                </div>
              </div>

              {/* Product Image */}
              <div className="flex justify-center">
                <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-2xl max-w-md w-full aspect-square bg-slate-50">
                  <img
                    src="/images/cdl-happy-driver.webp"
                    alt="Confident Commercial Truck Driver with CDL license"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-5 text-left">
                    <p className="text-white font-bold text-base leading-tight">
                      CDL Premium All-Access Pass
                    </p>
                    <p className="text-gray-200 text-xs mt-1 font-medium">
                      One payment. 90 days of complete core and endorsement access.
                    </p>
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
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Side - Features */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="inline-block bg-emerald-100 border border-emerald-200 rounded-full px-4 md:px-6 py-2 mb-6">
                    <span className="text-xs md:text-sm font-medium text-emerald-700">All Endorsements Included</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Everything You Need to Get Your CDL
                  </h2>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    Study at your own pace with tools designed specifically for the Federal CDL exam structure and state Real Estate requirements.
                  </p>

                  <div className="space-y-4 text-left">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Class A & Class B Core Exams</h4>
                        <p className="text-sm text-gray-600">Complete prep for General Knowledge, Air Brakes, and Combination tests.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Every Endorsement Covered</h4>
                        <p className="text-sm text-gray-600">Practice tests for HazMat, Passenger, School Bus, Doubles/Triples, and Tanker.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Pre-Trip Inspection Checklist</h4>
                        <p className="text-sm text-gray-600">Learn what components to verbalize during the strict final skills exam.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">100% Pass Guarantee</h4>
                        <p className="text-sm text-gray-600">A full refund if you fail your exam after completing our prep.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Graphics */}
                <div className="flex-1 relative bg-slate-50 p-4 rounded-3xl border border-gray-100 shadow-xl">
                  <img
                    src="/images/product-image-desktop.webp"
                    alt="CDL Premium Practice Interface"
                    className="w-full rounded-2xl"
                  />
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
                  <span className="text-xs md:text-sm font-medium text-[#007aff]">Compare CDL Plans</span>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Free vs Premium CDL Pass
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Why commercial drivers choose the All-Access Premium Pass
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
                  Upgrade to CDL Premium
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
                  <span className="text-xs md:text-sm font-medium text-purple-700">Core & Endorsements</span>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  CDL Premium Features
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Unlock absolute confidence for your written exams.
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

        {/* 6. Pricing Section */}
        <section id="premium-section" className="py-12 md:py-20 lg:py-24 bg-gradient-to-br from-blue-100 via-purple-50 via-50% to-emerald-100">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Text */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#111827] leading-tight">
                  Imagine this: You sit down for the CDL test. <span className="text-[#007aff]">Nothing surprises you.</span>
                </h2>
                <p className="text-base lg:text-lg text-[#374151] leading-relaxed">
                  Access the full CDL Question Bank — so the real test feels like a repeat. With our 99.2% proven pass rate and 100% money-back guarantee, you can walk in with total confidence.
                </p>
                <div className="inline-flex items-start gap-3 bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                  <Shield className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-emerald-800 font-medium leading-relaxed">
                    Not sure? Try it for 60 minutes. Full refund within the first hour — just <a href="mailto:support@realestatequestionbank.com" className="text-[#007aff] no-underline hover:underline">email us</a>.
                  </p>
                </div>
              </div>

              {/* Right Column: Pricing Card */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="bg-white rounded-3xl p-6 md:p-8 border-[3px] border-[#007aff] shadow-xl w-full max-w-md flex flex-col text-left relative">
                  <div className="absolute -top-3.5 left-6 whitespace-nowrap">
                    <div className="bg-[#ffce31] text-gray-900 px-4 py-1.5 rounded-[6px] text-xs font-bold shadow-sm uppercase tracking-wider">
                      All-Access Pass
                    </div>
                  </div>
                  
                  <div className="mb-6 mt-2">
                    <div className="text-xs font-bold text-gray-700 tracking-[0.15em] uppercase mb-1">CDL All-Access</div>
                    <h3 className="text-2xl font-bold text-[#111827] leading-tight mb-2">Pass on the First Try</h3>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-sm text-gray-800 font-semibold">90-day access</span>
                      <span className="text-gray-300 select-none">•</span>
                      <span className="text-sm text-gray-800 font-semibold">One-time payment</span>
                      <span className="text-gray-300 select-none">•</span>
                      <span className="text-xs bg-emerald-50 text-emerald-800 font-bold border border-emerald-200 px-2 py-0.5 rounded flex items-center gap-1">
                        🛡️ Pass Guarantee
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">Our most thorough path to walk in with zero doubt on test day. Includes Class A/B core and all endorsements.</p>
                  </div>

                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-gray-400 line-through text-2xl font-medium">$149</span>
                    <span className="text-4xl font-extrabold text-gray-900">$99</span>
                    <span className="bg-yellow-100 text-yellow-700 text-xs px-2.5 py-1 rounded font-semibold ml-auto">33% OFF</span>
                  </div>

                  <p className="text-xs text-gray-500 mb-6">Not a subscription, one-time payment only</p>

                  <ul className="text-sm text-[#111827] space-y-3 mb-6 flex-grow">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#007aff] flex-shrink-0 mt-0.5" />
                      <span>2,500+ state-specific CDL questions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#007aff] flex-shrink-0 mt-0.5" />
                      <span>Realistic CDL-style Mock Exams</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#007aff] flex-shrink-0 mt-0.5" />
                      <span>Class A & Class B core practice tests</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#007aff] flex-shrink-0 mt-0.5" />
                      <span>All endorsements (Hazmat, Passenger, School Bus, Doubles, Tanker)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#007aff] flex-shrink-0 mt-0.5" />
                      <span>Pre-Trip inspection study checklist guide</span>
                    </li>
                    <li className="flex items-start gap-3 font-semibold text-emerald-800">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>100% Pass Guarantee & Money-Back Policy</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#007aff] flex-shrink-0 mt-0.5" />
                      <span>Progress tracking and pass probability scoring</span>
                    </li>
                  </ul>

                  <Button
                    onClick={() => handleUpgradePremium(90)}
                    disabled={purchaseLoading}
                    className="w-full flex items-center justify-center gap-2 text-base py-6 px-6 mt-auto bg-[#007aff] hover:bg-[#0056cc] text-white font-medium rounded-xl shadow-lg transition-all"
                  >
                    {purchaseLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Start CDL Study Now'}
                  </Button>
                  <p className="text-xs text-gray-500 text-center mt-3">Instant Access. Works on phone, tablet, or laptop.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Pass Guarantee Section */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-emerald-50 via-white to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-16 md:w-20 h-16 md:h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Shield className="w-8 md:w-10 h-8 md:h-10 text-white" />
              </div>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-emerald-700 via-green-600 to-emerald-600 bg-clip-text text-transparent">
                  100% Pass Guarantee
                </span>
              </h2>

              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                If you don't pass your official CDL written exam after completing our Premium package,
                <span className="font-semibold text-emerald-600"> we'll instantly refund the full amount</span>.
                No questions asked.
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
        </section>

        {/* 9. FAQ Section */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block bg-[#007aff]/10 border border-[#007aff]/20 rounded-full px-4 md:px-6 py-2 mb-6">
                  <span className="text-xs md:text-sm font-medium text-[#007aff]">
                    Frequently Asked Questions
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
                  Questions About CDL Premium?
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Quick answers to help you get started
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
        </section>

        {/* 10. Final CTA Section */}
        <section className="py-12 md:py-20 bg-[#007aff]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Pass Your CDL Exam?
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of drivers who passed their written tests with confidence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  onClick={scrollToPricing}
                  size="lg"
                  className="bg-white text-[#007aff] hover:bg-gray-100 font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Crown className="w-5 h-5 mr-2" />
                  Get CDL Premium Access
                </Button>
              </div>

              <p className="text-white/80 text-sm">
                $99 One-Time Payment • 100% Pass Guarantee
              </p>
            </div>
          </div>
        </section>
      </main>

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
        expirationDate={userData?.cdlPremiumExpiresAt}
        userName={getUserDisplayName()}
      />

      <PurchaseRenewalDialog
        isOpen={showPurchaseModal}
        onClose={() => setShowPurchaseModal(false)}
        premiumStatus={premiumStatus}
        onPurchase={handlePurchaseFromModal}
        isLoading={purchaseLoading}
      />

      <StateSelectorModal
        isOpen={stateModalOpen}
        onClose={() => setStateModalOpen(false)}
        onStateSelect={handleStateSelect}
      />

      <SocialProofNotifications enabled={true} isPremiumUser={isPremium} isCdl={true} />
    </div>
  )
}
