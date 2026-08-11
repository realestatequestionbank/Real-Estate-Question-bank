'use client'

import { useState } from 'react'
import { useAuth } from '@/contexts/auth-context'
import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { StateSelectorModal } from '@/components/state-selector-modal'
import { Footer } from '@/components/footer'
import { AuthModal } from '@/components/auth/auth-modal'
import { ExpiredPremiumModal } from '@/components/auth/expired-premium-modal'
import { PurchaseRenewalDialog } from '@/components/purchase-renewal-dialog'
import { Button } from '@/components/ui/button'
import { STATES, type StateKey, FLASH_SALE } from '@/lib/constants'
import { getStateDedicatedPageUrl } from '@/lib/utils/state-routes'
import { FlashSaleBanner } from '@/components/flash-sale-banner'
import { useRouter } from 'next/navigation'
import { X, ArrowRight, Crown, Loader2 } from 'lucide-react'
import { isPremiumExpired as checkIfPremiumExpired, isCdlPremiumExpired as checkIfCdlPremiumExpired } from '@/lib/firebase/auth'
import Link from 'next/link'
import { TESTIMONIALS, type Testimonial } from '@/lib/constants/testimonials'
import { SocialProofNotifications } from '@/components/social-proof-notifications'
import { USMap, popularStates } from '@/components/us-map'
import { FloatingCta } from '@/components/floating-cta'

interface HomePageProps {
  isCdl?: boolean
}

export function HomePage({ isCdl = false }: HomePageProps) {
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login')
  const [isPremiumLogin, setIsPremiumLogin] = useState(false)
  const [isRedirecting, setIsRedirecting] = useState(false)
  const [showExpiredModal, setShowExpiredModal] = useState(false)
  const [stateModalOpen, setStateModalOpen] = useState(false)
  const [showBanner, setShowBanner] = useState(true)
  const [showPurchaseModal, setShowPurchaseModal] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileMenuTab, setMobileMenuTab] = useState<'main' | 'states' | 'premium' | 'license'>('main')
  const [purchaseLoading, setPurchaseLoading] = useState(false)
  const router = useRouter()

  const { user, userData, isPremium, isPremiumExpired, premiumStatus, signOut, isCdlPremium, isCdlPremiumExpired, cdlPremiumStatus } = useAuth()


  const handleLogin = () => {
    router.push('/login')
  }

  const handleSignup = () => {
    // Redirect to dedicated get-premium page
    router.push('/get-premium?plan=36500')
  }

  const handleLogout = async () => {
    await signOut()
  }

  const handleDashboard = () => {
    if (isPremium || isCdlPremium) {
      router.push('/dashboard')
    } else if (user && userData && ((userData.isPremium && isPremiumExpired) || (userData.isCdlPremium && isCdlPremiumExpired))) {
      // User has expired premium - show renewal modal
      setShowExpiredModal(true)
    } else {
      // Non-premium user - redirect to get-premium page
      router.push('/get-premium?plan=36500')
    }
  }

  const handleStateSelect = (state: StateKey) => {
    if (isPremium || isCdlPremium) {
      // Premium user - go to dashboard with selected state
      router.push(`/dashboard?state=${state}${isCdl || isCdlPremium ? '&cdl=true' : ''}`)
    } else {
      // Non-premium user - go to dedicated state page
      router.push(isCdl ? `/${state}-cdl-permit-test` : getStateDedicatedPageUrl(state))
    }
  }

  const handleStartFreeTrial = () => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setMobileMenuTab('states')
      setMobileMenuOpen(true)
    } else {
      setStateModalOpen(true)
    }
  }

  const handleAuthSuccess = async (mode: 'login' | 'signup', result?: any) => {
    if (mode === 'signup' && result?.user) {
      // Transition to redirecting state inside the modal
      setIsRedirecting(true)
      // Redirect to Stripe payment immediately after signup
      await createCheckoutSession(result.user.uid)
    } else {
      // Normal success, close modal
      setAuthModalOpen(false)

      if (mode === 'login' && result?.userData) {
        const hasActiveCar = result.userData.isPremium && !checkIfPremiumExpired(result.userData);
        const hasActiveCdl = result.userData.isCdlPremium && !checkIfCdlPremiumExpired(result.userData);
        const hasExpiredCar = result.userData.isPremium && checkIfPremiumExpired(result.userData);
        const hasExpiredCdl = result.userData.isCdlPremium && checkIfCdlPremiumExpired(result.userData);

        if (hasActiveCar || hasActiveCdl) {
          // Redirect active premium users to dashboard
          router.push('/dashboard')
        } else if (hasExpiredCar || hasExpiredCdl) {
          // Show expired premium modal for renewal if they have expired premium and no active premium
          setShowExpiredModal(true)
        }
      }
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

  const handleUpgrade = async () => {
    if (!user) return
    setIsRedirecting(true)
    await createCheckoutSession(user.uid)
  }

  const handleRenewal = async () => {
    if (!user) return
    await createCheckoutSession(user.uid)
  }

  const handleCompletePurchaseClick = () => {
    if (!user) {
      // Redirect to dedicated get-premium page
      router.push('/get-premium?plan=36500')
      return
    }

    // For never_purchased users, show the modal for plan selection
    setShowPurchaseModal(true)
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

  const getUserDisplayName = () => {
    if (userData?.firstName && userData?.lastName) {
      return `${userData.firstName} ${userData.lastName}`
    }
    return user?.displayName || user?.email?.split('@')[0] || 'User'
  }


  return (
    <div className="min-h-screen">
      {/* Banner - Removed */}
      {/* {showBanner && (
        <FlashSaleBanner
          onClose={() => setShowBanner(false)}
          onClick={() => setStateModalOpen(true)}
          sticky={false}
        />
      )} */}

      <Navigation
        user={user}
        userData={userData}
        isPremium={isPremium || isCdlPremium}
        isPremiumExpired={isPremiumExpired && isCdlPremiumExpired}
        premiumStatus={(isCdlPremium && cdlPremiumStatus === 'active') || (isPremium && premiumStatus === 'active')
          ? 'active'
          : (isCdlPremium && cdlPremiumStatus === 'expired') || (isPremium && premiumStatus === 'expired')
            ? 'expired'
            : 'never_purchased'}
        onLogin={handleLogin}
        onSignup={handleSignup}
        onLogout={handleLogout}
        onDashboard={handleDashboard}
        onPurchaseRenewal={handleCompletePurchaseClick}
        onSelectState={handleStartFreeTrial}
        showGetPremiumLink
        premiumGetPremiumText="Pass Guaranteed"
        mobileMenuOpen={mobileMenuOpen}
        onMobileMenuOpenChange={setMobileMenuOpen}
        mobileMenuTab={mobileMenuTab}
        onMobileMenuTabChange={setMobileMenuTab}
      />

      <main>
        <Hero
          onStartFreeTrial={handleStartFreeTrial}
          isCdl={isCdl}
        />

        {/* Trust & Credibility Section */}
        <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[#007aff]"></div>

          {/* Animated Background Elements */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/15 rounded-full blur-2xl animate-float-delayed"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                Trusted by Thousands of Successful Students
              </h2>
              <p className="text-white/80 text-base md:text-lg">Real results from real students. You are next.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
              <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-4 md:p-6 lg:p-8 shadow-xl border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">2026</div>
                <div className="text-xs md:text-sm text-white/80">Updated Content</div>
              </div>
              <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-4 md:p-6 lg:p-8 shadow-xl border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">25K+</div>
                <div className="text-xs md:text-sm text-white/80">Students Helped</div>
              </div>
              <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-4 md:p-6 lg:p-8 shadow-xl border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">4.8</div>
                <div className="text-xs md:text-sm text-white/80">Average Rating</div>
              </div>
              <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-4 md:p-6 lg:p-8 shadow-xl border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">2K+</div>
                <div className="text-xs md:text-sm text-white/80">State wise Questions</div>
              </div>
            </div>
          </div>

          <style jsx>{`
            @keyframes float {
              0%, 100% { transform: translateY(0px) rotate(0deg); }
              50% { transform: translateY(-20px) rotate(5deg); }
            }
            @keyframes float-delayed {
              0%, 100% { transform: translateY(0px) rotate(0deg); }
              50% { transform: translateY(-30px) rotate(-5deg); }
            }
            .animate-float { animation: float 6s ease-in-out infinite; }
            .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite 2s; }
          `}</style>
        </section>

        {/* How It Works Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white via-blue-50/30 to-emerald-50/30 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-emerald-100/20 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12 md:mb-20">
              <div className="inline-block bg-[#007aff]/10 backdrop-blur-sm border border-[#007aff]/20 rounded-full px-4 md:px-6 py-2 mb-4 md:mb-6">
                <span className="text-xs md:text-sm font-medium text-[#007aff]">
                  Simple 3-Step Process
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 text-black">
                How It Works
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
                Your path to Real Estate success in three simple steps
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
              <div className="text-center group flex flex-col items-center">
                <div className="relative mb-6 md:mb-8">
                  <div className="w-20 md:w-24 h-20 md:h-24 bg-[#007aff] rounded-2xl md:rounded-3xl flex items-center justify-center shadow-2xl group-hover:shadow-3xl group-hover:scale-110 transition-all duration-500">
                    <svg className="w-8 md:w-10 h-8 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div className="absolute top-1/2 -right-3 md:-right-4 transform translate-x-full -translate-y-1/2 w-6 md:w-8 h-6 md:h-8 bg-black rounded-full flex items-center justify-center text-white font-bold text-xs md:text-sm shadow-lg z-20">1</div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Practice Real Questions</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Master the exact questions you'll see on test day with our comprehensive practice bank
                </p>
              </div>

              <div className="text-center group flex flex-col items-center">
                <div className="relative mb-6 md:mb-8">
                  <div className="w-20 md:w-24 h-20 md:h-24 bg-[#007aff] rounded-2xl md:rounded-3xl flex items-center justify-center shadow-2xl group-hover:shadow-3xl group-hover:scale-110 transition-all duration-500">
                    <svg className="w-8 md:w-10 h-8 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="absolute top-1/2 -right-3 md:-right-4 transform translate-x-full -translate-y-1/2 w-6 md:w-8 h-6 md:h-8 bg-black rounded-full flex items-center justify-center text-white font-bold text-xs md:text-sm shadow-lg z-20">2</div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Take Real Estate Practice Tests</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Experience the real test environment with our full-length Real Estate practice test
                </p>
              </div>

              <div className="text-center group flex flex-col items-center">
                <div className="relative mb-6 md:mb-8">
                  <div className="w-20 md:w-24 h-20 md:h-24 bg-[#007aff] rounded-2xl md:rounded-3xl flex items-center justify-center shadow-2xl group-hover:shadow-3xl group-hover:scale-110 transition-all duration-500">
                    <svg className="w-8 md:w-10 h-8 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div className="absolute top-1/2 -right-3 md:-right-4 transform translate-x-full -translate-y-1/2 w-6 md:w-8 h-6 md:h-8 bg-black rounded-full flex items-center justify-center text-white font-bold text-xs md:text-sm shadow-lg z-20">3</div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Pass Your Test</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Walk into your exam with confidence and pass on the first try
                </p>
              </div>
            </div>

            {/* Connection lines for desktop */}
            <div className="hidden md:block absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl opacity-20 pointer-events-none">
              <svg className="w-full h-32" viewBox="0 0 800 100" preserveAspectRatio="none">
                <path
                  d="M 100 80 Q 400 0 700 80"
                  stroke="#007aff"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="10 6"
                />
              </svg>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-32 left-10 w-72 h-72 bg-gradient-to-r from-blue-100/30 to-emerald-100/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-emerald-100/20 to-blue-100/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-20">
              <div className="inline-block bg-[#007aff]/10 backdrop-blur-sm border border-[#007aff]/20 rounded-full px-6 py-2 mb-6">
                <span className="text-sm font-medium text-[#007aff]">
                  Student Success Stories
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 text-black">
                Real Students, Real Success
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto">
                Join thousands of students who passed their Real Estate Exam with confidence
              </p>

              {/* Rating Display */}
              <div className="inline-flex items-center bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200/50 rounded-xl md:rounded-2xl px-4 md:px-8 py-3 md:py-4 shadow-lg">
                <div className="flex text-yellow-500 text-lg md:text-xl mr-3 md:mr-4">
                  <span>★★★★★</span>
                </div>
                <div className="text-left">
                  <div className="font-bold text-gray-900 text-sm md:text-base">4.8/5</div>
                  <div className="text-xs md:text-sm text-gray-600">Average rating</div>
                </div>
              </div>
            </div>

            <div className="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:-mx-0 md:px-0">
              {TESTIMONIALS.slice(0, 6).map((t: Testimonial) => (
                <div key={t.id} className="flex-shrink-0 w-[85vw] md:w-[400px] snap-center group">
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden h-full flex flex-col">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#007aff]/5 rounded-full blur-2xl"></div>

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 rounded-2xl mr-4 overflow-hidden shadow-lg bg-gray-100">
                          {t.image ? (
                            <img
                              src={t.image}
                              alt={t.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-xl">
                              {t.name.charAt(0)}
                            </div>
                          )}
                        </div>
                        <div>
                          <div className="font-bold text-gray-900 text-base md:text-lg">{t.name}</div>
                          <div className="text-[#007aff] text-sm font-medium">{t.city}, {t.state}</div>
                        </div>
                      </div>

                      <div className="text-yellow-500 mb-4 text-base md:text-lg">{'★'.repeat(t.rating)}</div>

                      <blockquote className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed flex-grow">
                        "{t.comment}"
                      </blockquote>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-12 md:mt-16 flex flex-col items-center justify-center gap-6">
              <Link
                href="/success-stories"
                className="group border-2 border-[#007aff] text-[#007aff] hover:bg-[#007aff] hover:text-white font-bold px-6 md:px-8 py-3 md:py-4 text-sm md:text-base rounded-xl md:rounded-2xl transition-all duration-300 inline-flex items-center gap-2"
              >
                View All Success Stories
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Pass Guarantee Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-emerald-50 via-white to-blue-50 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-emerald-50 backdrop-blur-sm border border-emerald-200/50 rounded-full px-4 md:px-6 py-2 mb-6 md:mb-8">
                <span className="text-xs md:text-sm font-medium text-emerald-600">
                  100% Money-Back Promise
                </span>
              </div>

              <div className="w-16 md:w-20 h-16 md:h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl md:rounded-3xl flex items-center justify-center mx-auto mb-6 md:mb-8 shadow-2xl">
                <svg className="w-8 md:w-10 h-8 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>

              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 md:mb-8">
                <span className="text-emerald-700">
                  Pass Guarantee
                </span>
              </h2>

              <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
                If you don't pass your official Real Estate Exam after completing our Premium package,
                <span className="font-semibold text-emerald-600"> we'll instantly refund the full amount</span>.
                No questions asked. No fine print.
              </p>

              <div className="bg-white border border-emerald-100 rounded-xl md:rounded-2xl p-4 md:p-6 max-w-2xl mx-auto shadow-lg">
                <div className="flex items-center justify-center mb-3 md:mb-4">
                  <div className="w-6 md:w-8 h-6 md:h-8 bg-emerald-500 rounded-full flex items-center justify-center mr-2 md:mr-3 flex-shrink-0">
                    <span className="text-white font-bold text-xs md:text-sm">✓</span>
                  </div>
                  <span className="text-gray-700 font-medium text-sm md:text-base">Simple process: Send us your test failure email</span>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-6 md:w-8 h-6 md:h-8 bg-emerald-500 rounded-full flex items-center justify-center mr-2 md:mr-3 flex-shrink-0">
                    <span className="text-white font-bold text-xs md:text-sm">✓</span>
                  </div>
                  <span className="text-gray-700 font-medium text-sm md:text-base">Get your money back within 5-7 working days</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Value Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-gray-50 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10 md:mb-16">
                <div className="inline-block bg-blue-600/10 border border-blue-200 rounded-full px-4 md:px-6 py-2 mb-4 md:mb-6">
                  <span className="text-xs md:text-sm font-medium text-blue-600">
                    Complete Learning Package
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 text-gray-900">
                  Everything You Need to Pass
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
                  Get complete access to our comprehensive Real Estate Exam preparation platform
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
                <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start">
                    <div className="w-10 md:w-12 h-10 md:h-12 bg-[#007aff] rounded-xl md:rounded-2xl flex items-center justify-center mr-3 md:mr-4 flex-shrink-0 shadow-lg">
                      <span className="text-white font-bold text-sm md:text-base">✓</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-base md:text-lg mb-2">Unlimited Practice</h3>
                      <p className="text-gray-600 text-sm md:text-base">Access hundreds of real Real Estate-style questions with instant feedback</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start">
                    <div className="w-10 md:w-12 h-10 md:h-12 bg-[#007aff] rounded-xl md:rounded-2xl flex items-center justify-center mr-3 md:mr-4 flex-shrink-0 shadow-lg">
                      <span className="text-white font-bold text-sm md:text-base">✓</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-base md:text-lg mb-2">Full-Length Practice Tests</h3>
                      <p className="text-gray-600 text-sm md:text-base">Simulate the real test experience with practice exams</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start">
                    <div className="w-10 md:w-12 h-10 md:h-12 bg-[#007aff] rounded-xl md:rounded-2xl flex items-center justify-center mr-3 md:mr-4 flex-shrink-0 shadow-lg">
                      <span className="text-white font-bold text-sm md:text-base">✓</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-base md:text-lg mb-2">Detailed Explanations</h3>
                      <p className="text-gray-600 text-sm md:text-base">Understand the why behind every answer with comprehensive explanations</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start">
                    <div className="w-10 md:w-12 h-10 md:h-12 bg-[#007aff] rounded-xl md:rounded-2xl flex items-center justify-center mr-3 md:mr-4 flex-shrink-0 shadow-lg">
                      <span className="text-white font-bold text-sm md:text-base">✓</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-base md:text-lg mb-2">Pass Guarantee</h3>
                      <p className="text-gray-600 text-sm md:text-base">100% money-back guarantee if you don't pass your test</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center max-w-md mx-auto md:max-w-none">
                <Button
                  onClick={handleStartFreeTrial}
                  size="lg"
                  className="group bg-[#007aff] hover:bg-[#0056cc] text-white font-semibold px-4 md:px-12 lg:px-16 py-5 md:py-6 lg:py-8 text-base md:text-xl rounded-lg md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 w-full md:w-auto"
                >
                  Start Free Practice
                  <ArrowRight className="w-5 h-5 ml-2 md:ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* State Selection Section */}
        <section id="states" className="py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-12 md:mb-20">
                <div className="inline-block bg-[#007aff]/10 border border-[#007aff]/20 rounded-full px-4 md:px-6 py-2 mb-4 md:mb-6">
                  <span className="text-xs md:text-sm font-medium text-[#007aff]">
                    Choose Your State
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 text-gray-900">
                  Select Your State
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                  Start practicing with questions specific to your state's Real Estate Exam. Each state has unique laws and requirements.
                </p>
              </div>

              {/* Interactive Map */}
              <div>
                <div
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.innerWidth < 768) {
                      handleStartFreeTrial()
                    }
                  }}
                  className="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-3xl p-6 md:p-8 lg:p-12 shadow-lg border border-gray-100 cursor-pointer md:cursor-default"
                >
                  <USMap
                    onStateClick={handleStateSelect}
                    className="w-full"
                  />
                  <div className="md:hidden flex flex-col items-center mt-6">
                    <Button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleStartFreeTrial()
                      }}
                      size="lg"
                      className="bg-[#007aff] hover:bg-[#0056cc] text-white font-semibold rounded-xl px-6 py-6 text-lg w-full flex items-center justify-center gap-3 shadow-lg"
                    >
                      Select Your State
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden">
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
                  Quick answers to the most common questions about our Real Estate licensing exam prep
                </p>
              </div>

              <div className="space-y-4 md:space-y-6">
                <div className="group">
                  <details className="bg-gray-50 rounded-xl md:rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                    <summary className="font-bold text-gray-900 cursor-pointer text-base md:text-lg flex items-center justify-between group-hover:text-[#007aff] transition-colors duration-200">
                      What is a Real Estate Question Bank?
                      <svg className="w-4 md:w-5 h-4 md:h-5 transform transition-transform duration-200 group-open:rotate-180 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <p className="mt-4 md:mt-6 text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed">
                      A Real Estate Question Bank is a comprehensive collection of practice questions designed to help aspiring agents and brokers prepare for their state licensing exams. These questions are modeled directly on the official exam outlines, covering subjects like property ownership, contracts, agency, finance, valuation, and state-specific real estate regulations.
                    </p>
                  </details>
                </div>

                <div className="group">
                  <details className="bg-gray-50 rounded-xl md:rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                    <summary className="font-bold text-gray-900 cursor-pointer text-base md:text-lg flex items-center justify-between group-hover:text-[#007aff] transition-colors duration-200">
                      How does Real Estate Question Bank help with exam preparation?
                      <svg className="w-4 md:w-5 h-4 md:h-5 transform transition-transform duration-200 group-open:rotate-180 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <p className="mt-4 md:mt-6 text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed">
                      Real Estate Question Bank helps you study efficiently by providing structured practice questions, detailed legal and math explanations, and realistic exam simulators. Practicing with state-specific questions improves retention, builds confidence, and reduces exam-day anxiety.
                    </p>
                  </details>
                </div>

                <div className="group">
                  <details className="bg-gray-50 rounded-xl md:rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                    <summary className="font-bold text-gray-900 cursor-pointer text-base md:text-lg flex items-center justify-between group-hover:text-[#007aff] transition-colors duration-200">
                      Are online practice questions accurate?
                      <svg className="w-4 md:w-5 h-4 md:h-5 transform transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <p className="mt-4 md:mt-6 text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed">
                      Yes, our questions are audited and updated regularly to match current licensing laws, state regulations (such as TREC, DRE, DBPR, etc.), and the current year's exam outlines, ensuring they accurately reflect the actual test you will take.
                    </p>
                  </details>
                </div>

                <div className="group">
                  <details className="bg-gray-50 rounded-xl md:rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                    <summary className="font-bold text-gray-900 cursor-pointer text-base md:text-lg flex items-center justify-between group-hover:text-[#007aff] transition-colors duration-200">
                      Is using a question bank better than only reading handbooks or course materials?
                      <svg className="w-4 md:w-5 h-4 md:h-5 transform transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <p className="mt-4 md:mt-6 text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed">
                      Reading standard textbook material provides raw facts, but active testing is proven to be twice as effective for memory retention. Answering practice questions reinforces key concepts, trains you on math calculation formulas, highlights common mistakes, and mimics the actual multiple-choice format of the licensing exam.
                    </p>
                  </details>
                </div>

                <div className="group">
                  <details className="bg-gray-50 rounded-xl md:rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                    <summary className="font-bold text-gray-900 cursor-pointer text-base md:text-lg flex items-center justify-between group-hover:text-[#007aff] transition-colors duration-200">
                      Can I use Real Estate Question Bank on my phone or tablet?
                      <svg className="w-4 md:w-5 h-4 md:h-5 transform transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <p className="mt-4 md:mt-6 text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed">
                      Yes, the platform is fully responsive and optimized for mobile devices, tablets, and desktop computers. You can practice questions and take mock exams on the go, making it easy to study in short, frequent sessions that fit your schedule.
                    </p>
                  </details>
                </div>

                <div className="group">
                  <details className="bg-gray-50 rounded-xl md:rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                    <summary className="font-bold text-gray-900 cursor-pointer text-base md:text-lg flex items-center justify-between group-hover:text-[#007aff] transition-colors duration-200">
                      How long does premium access last?
                      <svg className="w-4 md:w-5 h-4 md:h-5 transform transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <p className="mt-4 md:mt-6 text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed">
                      We offer flexible plans including 7-day last-minute study, 30-day focused preparation, and a Lifetime Access Plan. Each plan is a one-time purchase with no recurring subscription fees, giving you full access to all supported state question banks and mock exam simulators.
                    </p>
                  </details>
                </div>

                <div className="group">
                  <details className="bg-gray-50 rounded-xl md:rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                    <summary className="font-bold text-gray-900 cursor-pointer text-base md:text-lg flex items-center justify-between group-hover:text-[#007aff] transition-colors duration-200">
                      How often should I practice before the exam?
                      <svg className="w-4 md:w-5 h-4 md:h-5 transform transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <p className="mt-4 md:mt-6 text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed">
                      We recommend studying daily for 2 to 4 weeks before your exam date. Focus on taking our full-length mock exams under timed conditions, and review the detailed explanation for every question you miss to target your weak areas.
                    </p>
                  </details>
                </div>
              </div>

              <div className="text-center mt-12 md:mt-16">
                <p className="text-gray-600 mb-4 md:mb-6 text-base md:text-lg">Still have questions?</p>
                <Link
                  href="/contact-us"
                  className="inline-block bg-white border-2 border-[#007aff] text-[#007aff] hover:bg-[#007aff]/5 font-semibold px-6 md:px-8 py-3 md:py-4 text-sm md:text-base rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* State Real Estate Practice-Test Hubs */}
        <section className="border-t border-gray-100 pb-24 pt-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-10 text-gray-900 text-center">{isCdl ? 'State CDL Practice-Test Hubs' : 'State Real Estate Practice-Test Hubs'}</h2>

              <div className="grid grid-cols-3 md:grid-cols-5 gap-y-3 gap-x-8 text-left">
                {Object.entries(STATES)
                  .sort((a, b) => a[1].name.localeCompare(b[1].name))
                  .map(([key, state]) => (
                    <Link
                      key={key}
                      href={isCdl ? `/${key}-cdl-permit-test` : getStateDedicatedPageUrl(key as StateKey)}
                      className="text-[#007aff] text-base font-medium relative block w-fit after:block after:content-[''] after:absolute after:h-[2px] after:bg-[#007aff] after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-left"
                    >
                      {state.name}
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sticky Mobile CTA */}
        <FloatingCta onStartFreeTrial={handleStartFreeTrial} />
      </main>

      <Footer />

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
        onGetPremium={() => setStateModalOpen(true)}
      />

      <ExpiredPremiumModal
        isOpen={showExpiredModal}
        onClose={() => setShowExpiredModal(false)}
        onRenew={handleRenewal}
        expirationDate={userData?.isCdlPremium && checkIfCdlPremiumExpired(userData) ? userData?.cdlPremiumExpiresAt : userData?.premiumExpiresAt}
        userName={getUserDisplayName()}
      />

      <StateSelectorModal
        isOpen={stateModalOpen}
        onClose={() => setStateModalOpen(false)}
        onStateSelect={handleStateSelect}
      />

      <PurchaseRenewalDialog
        isOpen={showPurchaseModal}
        onClose={() => setShowPurchaseModal(false)}
        premiumStatus={(isCdlPremium && cdlPremiumStatus === 'active') || (isPremium && premiumStatus === 'active')
          ? 'active'
          : (isCdlPremium && cdlPremiumStatus === 'expired') || (isPremium && premiumStatus === 'expired')
            ? 'expired'
            : 'never_purchased'}
        onPurchase={handlePurchaseFromModal}
        isLoading={purchaseLoading}
      />

      {/* Social Proof Notifications */}
      <SocialProofNotifications enabled={true} isPremiumUser={isPremium || isCdlPremium} />
    </div>
  )
}