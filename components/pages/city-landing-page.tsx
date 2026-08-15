'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '@/contexts/auth-context'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { AuthModal } from '@/components/auth/auth-modal'
import { ExpiredPremiumModal } from '@/components/auth/expired-premium-modal'
import { PurchaseRenewalDialog } from '@/components/purchase-renewal-dialog'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { isPremiumExpired as checkIfPremiumExpired } from '@/lib/firebase/auth'
import { getCityRealEstateData } from '@/lib/data/city-real-estate-data'
import { getDepartmentName } from '@/lib/data/state-departments'
import { type StateKey, PRICING, BASE_PRICING } from '@/lib/constants'
import { StatePremiumPricing } from '@/components/premium/state-premium-pricing'
import { type Question } from '@/lib/types/question'
import { formatQuestionCount } from '@/lib/utils/formatQuestionCount'

const STATE_PREMIUM_QUESTIONS: Record<StateKey, number> = {
  alabama: 420,
  alaska: 332,
  arizona: 417,
  arkansas: 419,
  california: 503,
  colorado: 451,
  connecticut: 404,
  delaware: 408,
  florida: 507,
  georgia: 561,
  hawaii: 469,
  idaho: 476,
  illinois: 641,
  indiana: 464,
  iowa: 616,
  kansas: 406,
  kentucky: 319,
  louisiana: 531,
  maine: 906,
  maryland: 391,
  massachusetts: 344,
  michigan: 485,
  minnesota: 485,
  mississippi: 415,
  missouri: 451,
  montana: 408,
  nebraska: 398,
  nevada: 553,
  'new-hampshire': 377,
  'new-jersey': 485,
  'new-mexico': 447,
  'new-york': 311,
  'north-carolina': 482,
  'north-dakota': 446,
  ohio: 593,
  oklahoma: 371,
  oregon: 420,
  pennsylvania: 625,
  'rhode-island': 546,
  'south-carolina': 506,
  'south-dakota': 395,
  tennessee: 403,
  texas: 495,
  utah: 402,
  vermont: 341,
  virginia: 481,
  washington: 379,
  'west-virginia': 390,
  wisconsin: 853,
  wyoming: 419,
}
import {
  MapPin,
  Clock,
  Phone,
  ExternalLink,
  Navigation2,
  CheckCircle,
  AlertCircle,
  BookOpen,
  Crown,
  ChevronRight,
  Star,
  Users,
  Target,
  ArrowRight,
  Shield,
  Download,
  Loader2
} from 'lucide-react'

interface CityLandingPageContentProps {
  stateKey: StateKey
  citySlug: string
  questions: Question[]
}

export function CityLandingPageContent({ stateKey, citySlug, questions }: CityLandingPageContentProps) {
  const router = useRouter()
  const { user, userData, isPremium, isPremiumExpired, premiumStatus, signOut, loading: authLoading } = useAuth()
  
  // Localized Real Estate details
  const cityData = getCityRealEstateData(stateKey, citySlug)
  const departmentInfo = getDepartmentName(stateKey)

  const premiumQuestions = 2000
  const formattedCount = formatQuestionCount(premiumQuestions)
  const premiumText = `Unlock ${formattedCount} ${cityData.stateName} ${cityData.departmentCode} Questions`

  // Interactive Quiz State
  const [quizStarted, setQuizStarted] = useState(false)
  const [currentIdx, setCurrentIdx] = useState(0)
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null)
  const [quizScore, setQuizScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)

  // Auth/Checkout Modals
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login')
  const [showExpiredModal, setShowExpiredModal] = useState(false)
  const [showPurchaseModal, setShowPurchaseModal] = useState(false)
  const [purchaseLoading, setPurchaseLoading] = useState(false)
  const [isRedirecting, setIsRedirecting] = useState(false)

  const handleLogin = () => {
    setAuthMode('login')
    setAuthModalOpen(true)
  }

  const handleSignup = () => {
    setAuthMode('signup')
    setAuthModalOpen(true)
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

  const createCheckoutSession = async (userId: string, duration: number = 90) => {
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId,
          state: stateKey,
          duration,
        }),
      })

      const data = await response.json()
      if (data.url) {
        window.location.href = data.url
      }
    } catch (error) {
      console.error('Checkout error:', error)
      alert('An error occurred. Please try again.')
      setIsRedirecting(false)
      setAuthModalOpen(false)
    }
  }

  const handleUpgradePremium = () => {
    if (!user) {
      router.push(`/get-premium?plan=36500`)
      return
    }
    setShowPurchaseModal(true)
  }

  const handleAuthSuccess = async (mode: 'login' | 'signup', result?: any) => {
    if (mode === 'signup' && result?.user) {
      setIsRedirecting(true)
      await createCheckoutSession(result.user.uid)
    } else {
      setAuthModalOpen(false)
      if (mode === 'login' && result?.userData?.isPremium && !isPremiumExpired) {
        router.push('/dashboard')
      }
    }
  }

  // Quiz click handlers
  const handleAnswerSubmit = (optionIndex: number) => {
    if (selectedOpt !== null) return
    setSelectedOpt(optionIndex)
    if (optionIndex === questions[currentIdx].correctAnswer) {
      setQuizScore(prev => prev + 1)
    }
  }

  const handleNextQuestion = () => {
    setSelectedOpt(null)
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(prev => prev + 1)
    } else {
      setQuizCompleted(true)
    }
  }

  const handleResetQuiz = () => {
    setCurrentIdx(0)
    setSelectedOpt(null)
    setQuizScore(0)
    setQuizCompleted(false)
    setQuizStarted(true)
  }

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      {/* Navigation */}
      <Navigation
        user={user}
        userData={userData}
        isPremium={isPremium}
        isPremiumExpired={isPremiumExpired}
        premiumStatus={premiumStatus}
        onLogin={handleLogin}
        onSignup={handleSignup}
        onLogout={async () => { await signOut(); router.push('/') }}
        onDashboard={handleDashboard}
        onPurchaseRenewal={handleUpgradePremium}
        isLoading={authLoading}
        premiumButtonText={premiumText}
        premiumButtonAction={() => scrollToSection('premium-section')}
      />

      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-[#007aff] cursor-pointer transition-colors duration-200">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link href="/#states" className="hover:text-[#007aff] cursor-pointer transition-colors duration-200">States</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link href={`/${stateKey}-real-estate-practice-test`} className="hover:text-[#007aff] cursor-pointer transition-colors duration-200">{cityData.stateName}</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-900 font-medium">{cityData.cityName}</span>
          </div>
        </div>
      </div>

      <main>
        {/* Hero Section */}
        <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-100/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-[#007aff]/10 border border-[#007aff]/20 rounded-full px-4 md:px-5 py-2 mb-6">
                <MapPin className="w-4 h-4 text-[#007aff]" />
                <span className="text-xs md:text-sm font-medium text-gray-700">
                  Factual Local Study Guide: {cityData.cityName}, {stateKey.toUpperCase()}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-black mb-6 tracking-tight leading-tight">
                Pass Your <span className="text-[#007aff]">{cityData.cityName} {cityData.departmentCode}</span> real estate exam on the First Try
              </h1>
              
              <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
                Master the {cityData.stateName} written real estate exam with realistic practice questions and localized office guides. Prepared in partnership with former examiners to guarantee you pass. For complete state-wide coverage, explore our official <Link href={`/state-guides/${stateKey}`} className="text-[#007aff] hover:text-[#0056cc] transition-colors">{cityData.stateName} State Guide</Link> or take our full <Link href={`/${stateKey}-real-estate-practice-test`} className="text-[#007aff] hover:text-[#0056cc] transition-colors">{cityData.stateName} {cityData.departmentCode} Real Estate Practice Test</Link>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Button
                  onClick={() => scrollToSection('local-quiz')}
                  size="lg"
                  className="bg-[#007aff] hover:bg-[#0056cc] text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-300 w-full hover:-translate-y-0.5"
                >
                  Start Practice Test
                </Button>
                <Button
                  onClick={() => scrollToSection('premium-section')}
                  variant="outline"
                  size="lg"
                  className="border-2 border-[#007aff] text-[#007aff] hover:text-[#007aff] hover:bg-blue-50/50 font-semibold px-8 py-4 text-lg rounded-xl transition-all duration-300 w-full"
                >
                  <Crown className="w-5 h-5 mr-2 text-[#007aff] fill-[#007aff]/20" />
                  {premiumText}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Local Real Estate Office Locator */}
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Official {cityData.cityName} {cityData.departmentCode} Office Directory
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Find addresses, operating hours, and live average wait times for motor vehicle branches near {cityData.cityName}.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {cityData.offices.map((office, idx) => (
                <Card key={idx} className="border border-gray-100 rounded-3xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 bg-gradient-to-br from-gray-50/50 to-white">
                  <CardHeader className="bg-gray-50/50 border-b border-gray-100 p-6">
                    <CardTitle className="text-lg font-bold text-gray-900 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-red-500" />
                      {office.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 space-y-4">
                    <div className="text-sm text-gray-600 flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                      <span>{office.address}</span>
                    </div>

                    <div className="text-sm text-gray-600 flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      <a href={`tel:${office.phone}`} className="hover:text-[#007aff] transition-colors">{office.phone}</a>
                    </div>

                    <div className="text-sm text-gray-600 space-y-1">
                      <div className="flex items-start gap-2.5">
                        <Clock className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        <span className="font-semibold text-gray-800">Operating Hours:</span>
                      </div>
                      <ul className="pl-6 space-y-0.5 text-xs">
                        {office.hours.map((hour, i) => (
                          <li key={i}>{hour}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-emerald-50/50 border border-emerald-100 rounded-2xl p-4 space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-emerald-800 font-bold">
                        <Clock className="w-4 h-4 text-emerald-600" />
                        Booking & Availability Analysis
                      </div>
                      <div className="text-emerald-700 text-xs space-y-1">
                        <p><strong>Booking Lead Time:</strong> {office.waitTimes.average}</p>
                        <p><strong>Easiest Slots to Book:</strong> {office.waitTimes.best}</p>
                        <p><strong>Peak Booking Slots:</strong> {office.waitTimes.worst}</p>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <a
                        href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(office.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-[#007aff] text-white hover:bg-[#0056cc] font-medium text-xs rounded-xl py-2.5 px-4 w-full shadow transition-all duration-200"
                      >
                        <Navigation2 className="w-3.5 h-3.5" />
                        Directions
                      </a>
                      {departmentInfo.url && (
                        <a
                          href={departmentInfo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 border border-gray-200 text-gray-700 hover:bg-gray-50 font-medium text-xs rounded-xl py-2.5 px-4 w-full transition-all duration-200"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          Official Website
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Local Expert Tips & State Requirements */}
        <section className="py-16 bg-gray-50 border-y border-gray-100">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Pro Tips */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  Bypassing Procrastination & Lines in {cityData.cityName}
                </h3>
                <div className="space-y-4">
                  {cityData.localTips.map((tip, idx) => (
                    <div key={idx} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex gap-3">
                      <div className="w-6 h-6 bg-blue-100 text-[#007aff] font-bold rounded-full flex items-center justify-center flex-shrink-0 text-xs">
                        {idx + 1}
                      </div>
                      <p
                        className="text-sm text-gray-600 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: tip.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
                      />
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Sample Interactive Quiz Section */}
        <section id="local-quiz" className="py-16 bg-white scroll-mt-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Free {cityData.cityName} {cityData.departmentCode} Practice Test Preview
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
                Try 5 real exam questions. Instant scoring and detailed rationales provided.
              </p>
            </div>

            <Card className="border-2 border-gray-100 rounded-3xl overflow-hidden shadow-lg">
              <CardContent className="p-6 md:p-8">
                {!quizStarted ? (
                  <div className="text-center py-8 space-y-5">
                    <div className="w-16 h-16 bg-blue-100 text-[#007aff] rounded-full flex items-center justify-center mx-auto shadow-inner">
                      <Target className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Are you ready to test your knowledge?</h3>
                    <p className="text-gray-500 text-sm max-w-sm mx-auto">
                      Contains 5 random practice questions updated for 2026. Takes less than 3 minutes.
                    </p>
                    <Button
                      onClick={() => setQuizStarted(true)}
                      size="lg"
                      className="bg-[#007aff] hover:bg-[#0056cc] text-white font-semibold px-8 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-xl"
                    >
                      Start Free Preview Test
                    </Button>
                  </div>
                ) : quizCompleted ? (
                  <div className="text-center py-8 space-y-6 animate-fade-in">
                    <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Preview Completed!</h3>
                      <p className="text-gray-600 text-base mt-2">
                        You scored <strong className="text-emerald-600 font-bold">{quizScore} out of 5</strong> correct ({Math.round((quizScore / 5) * 100)}%).
                      </p>
                    </div>

                    <div className="bg-amber-50/50 border border-amber-100 rounded-2xl p-6 text-center max-w-md mx-auto space-y-4">
                      <h4 className="font-bold text-amber-800 text-lg flex items-center justify-center gap-1.5">
                        <Crown className="w-5 h-5 text-amber-500 fill-amber-500" />
                        Pass Your Test Guaranteed
                      </h4>
                      <p className="text-xs text-amber-700 leading-relaxed">
                        Don't leave your license to chance. The official exam contains up to 150 questions. Upgrade to Premium to unlock over <strong>{formattedCount} state-specific questions</strong>, full mock simulators, and a 100% money-back pass guarantee.
                      </p>
                      <Button
                        onClick={() => scrollToSection('premium-section')}
                        className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-2.5 rounded-xl w-full transition-all shadow"
                      >
                        Unlock Premium Access
                      </Button>
                    </div>

                    <div className="flex gap-3 justify-center max-w-xs mx-auto">
                      <Button
                        onClick={handleResetQuiz}
                        variant="outline"
                        className="w-full py-2.5 rounded-xl text-sm"
                      >
                        Retake Preview
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Progress indicator */}
                    <div className="flex justify-between items-center text-xs text-gray-500 font-medium">
                      <span>QUESTION {currentIdx + 1} OF 5</span>
                      <span>SCORE: {quizScore} / {selectedOpt !== null ? currentIdx + 1 : currentIdx}</span>
                    </div>

                    <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-[#007aff] h-full transition-all duration-300"
                        style={{ width: `${((currentIdx + 1) / 5) * 100}%` }}
                      ></div>
                    </div>

                    {/* Question text */}
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-snug">
                      {questions[currentIdx]?.question}
                    </h3>

                    {/* Options list */}
                    <div className="space-y-3 pt-2">
                      {questions[currentIdx]?.options.map((opt, i) => {
                        const isCorrect = i === questions[currentIdx].correctAnswer
                        const isSelected = selectedOpt === i
                        const hasSelected = selectedOpt !== null

                        let btnStyle = 'border-gray-200 hover:border-blue-500 hover:bg-blue-50/10'
                        if (hasSelected) {
                          if (isCorrect) {
                            btnStyle = 'border-green-500 bg-green-50/30 text-green-800'
                          } else if (isSelected) {
                            btnStyle = 'border-red-500 bg-red-50/30 text-red-800'
                          } else {
                            btnStyle = 'border-gray-100 opacity-60'
                          }
                        }

                        return (
                          <button
                            key={i}
                            onClick={() => handleAnswerSubmit(i)}
                            disabled={hasSelected}
                            className={`w-full text-left p-4 rounded-xl border-2 text-sm md:text-base font-medium transition-all flex justify-between items-center ${btnStyle}`}
                          >
                            <span>{opt}</span>
                            {hasSelected && isCorrect && (
                              <span className="w-5 h-5 bg-green-500 text-white rounded-full flex items-center justify-center text-[10px] font-bold">✓</span>
                            )}
                            {hasSelected && isSelected && !isCorrect && (
                              <span className="w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center text-[10px] font-bold">✗</span>
                            )}
                          </button>
                        )
                      })}
                    </div>

                    {/* Explanation */}
                    {selectedOpt !== null && (
                      <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-5 space-y-2 animate-fade-in">
                        <h4 className="text-sm font-bold text-blue-900 flex items-center gap-1.5">
                          <AlertCircle className="w-4 h-4 text-blue-600" />
                          Explanation
                        </h4>
                        <p className="text-xs md:text-sm text-blue-800 leading-relaxed">
                          {questions[currentIdx]?.explanation}
                        </p>
                      </div>
                    )}

                    {/* Next Button */}
                    {selectedOpt !== null && (
                      <Button
                        onClick={handleNextQuestion}
                        className="bg-[#007aff] hover:bg-[#0056cc] text-white font-semibold py-3 px-6 rounded-xl w-full transition-all flex items-center justify-center gap-2"
                      >
                        {currentIdx < questions.length - 1 ? 'Next Question' : 'Finish Preview'}
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Premium Pricing Section */}
        <div id="premium-section" className="scroll-mt-20">
          <StatePremiumPricing
            stateName={cityData.stateName}
            formattedQuestionCount={formattedCount}
            pricingPlans={{
              sevenDay: {
                duration: 7,
                title: '7-Day Plan',
                badge: null,
                originalPrice: `$${BASE_PRICING.PLANS.SEVEN_DAY.originalPrice}`,
                discountedPrice: `$${BASE_PRICING.PLANS.SEVEN_DAY.discountedPrice}`,
                stripePriceId: BASE_PRICING.PLANS.SEVEN_DAY.stripePriceId,
              },
              thirtyDay: {
                duration: 30,
                title: '30-Day Plan',
                badge: null,
                originalPrice: `$${BASE_PRICING.PLANS.THIRTY_DAY.originalPrice}`,
                discountedPrice: `$${BASE_PRICING.PLANS.THIRTY_DAY.discountedPrice}`,
                stripePriceId: BASE_PRICING.PLANS.THIRTY_DAY.stripePriceId,
                isPopular: true,
              },
              lifetime: {
                duration: 36500,
                title: 'Lifetime Plan',
                badge: null,
                originalPrice: `$${BASE_PRICING.PLANS.LIFETIME.originalPrice}`,
                discountedPrice: `$${BASE_PRICING.PLANS.LIFETIME.discountedPrice}`,
                stripePriceId: BASE_PRICING.PLANS.LIFETIME.stripePriceId,
              }
            }}
            handleUpgradePremium={async (duration) => {
              if (!user) {
                router.push(`/get-premium?plan=${duration}`)
                return
              }
              await createCheckoutSession(user.uid, duration)
            }}
          />
        </div>

        {/* FAQs */}
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
              Frequently Asked Questions for {cityData.cityName}
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: `What is the best time of day to visit the ${cityData.cityName} ${cityData.departmentCode} office?`,
                  a: `The shortest queue wait times are consistently found on **Tuesday and Thursday mornings between 8:00 AM and 10:00 AM**. You should avoid visiting during lunch hours (11:30 AM – 1:30 PM) or on Friday afternoons, as crowds and wait times peak significantly during these times.`
                },
                {
                  q: `Do I need to schedule an appointment for my written test in ${cityData.cityName}?`,
                  a: `While some branches accept walk-in applicants, we **strongly recommend booking an online appointment** through the official portal. This guarantees you a spot and allows you to bypass the general queue, saving you up to 2 hours of waiting.`
                },
                {
                  q: `What happens if I fail my written real estate exam in ${cityData.stateName}?`,
                  a: `If you fail, you are required by state regulations to wait a mandatory period (typically 24 to 48 hours) before you are eligible to schedule and attempt the exam again. Additionally, a re-testing fee applies for each attempt. To avoid this delay and expense, we recommend scoring at least 90% consistently on our mock practice exams.`
                }
              ].map((faq, idx) => (
                <div key={idx} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 space-y-2">
                  <h4 className="font-bold text-gray-900 text-base md:text-lg flex gap-2">
                    <span className="text-[#007aff]">Q:</span>
                    {faq.q}
                  </h4>
                  <p
                    className="text-sm text-gray-600 pl-6 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: faq.a.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => {
          setAuthModalOpen(false)
          setIsRedirecting(false)
        }}
        mode={authMode}
        onSwitchMode={setAuthMode}
        onSuccess={handleAuthSuccess}
        isRedirecting={isRedirecting}
        closeOnSuccess={authMode !== 'signup' || !!user}
      />

      {/* Expired Premium Modal */}
      <ExpiredPremiumModal
        isOpen={showExpiredModal}
        onClose={() => setShowExpiredModal(false)}
        onRenew={async () => {
          if (!user) return
          await createCheckoutSession(user.uid)
        }}
      />

      {/* Purchase/Renewal Dialog */}
      <PurchaseRenewalDialog
        isOpen={showPurchaseModal}
        onClose={() => setShowPurchaseModal(false)}
        premiumStatus={premiumStatus}
        onPurchase={handlePurchase}
        isLoading={purchaseLoading}
      />
    </div>
  )

  async function handlePurchase(duration: number) {
    if (!user) return
    setPurchaseLoading(true)
    try {
      await createCheckoutSession(user.uid, duration)
    } finally {
      setPurchaseLoading(false)
      setShowPurchaseModal(false)
    }
  }
}
