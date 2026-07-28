'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '@/contexts/auth-context'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { AuthModal } from '@/components/auth/auth-modal'
import { ExpiredPremiumModal } from '@/components/auth/expired-premium-modal'
import { FlashSaleBanner } from '@/components/flash-sale-banner'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { isCdlPremiumExpired as checkIfCdlPremiumExpired } from '@/lib/firebase/auth'
import { CdlStateData, CdlCategoryInfo } from '@/lib/types/cdl'
import { Question } from '@/lib/types/question'
import { STATES, StateKey } from '@/lib/constants'
import { CheckCircle, AlertCircle, ChevronRight, Crown, ArrowRight, Shield, Compass, Briefcase, FileText, ShieldCheck } from 'lucide-react'
import { generateCdlTestDetails } from '@/lib/data/state-cdl-details'
import { CdlTestimonials } from './cdl-testimonials'
import { CdlReimbursement } from './cdl-reimbursement'
import { CdlStateSelector } from './cdl-state-selector'

const CATEGORY_TO_SLUG: Record<string, string> = {
  class_a: 'class-a',
  class_b: 'class-b',
  class_c: 'class-c',
  hazmat: 'hazmat',
  tank: 'tanker',
  air_brakes: 'air-brakes',
  combination: 'combination-vehicles',
  pre_trip: 'pre-trip-inspection',
  passenger: 'passenger',
  bus: 'school-bus',
  double: 'double-triple-trailers',
  ambulance: 'ambulance'
}

interface CdlTestSpecificPageProps {
  stateKey: string
  data: CdlStateData
  category: CdlCategoryInfo
  initialQuestions: Question[]
  lang?: 'en' | 'pa'
}

export function CdlTestSpecificPage({ stateKey, data, category, initialQuestions, lang = 'en' }: CdlTestSpecificPageProps) {
  const router = useRouter()
  const { user, userData, isCdlPremium: isPremium, isCdlPremiumExpired, cdlPremiumStatus, signOut, loading: authLoading } = useAuth()

  const stateCode = STATES[stateKey as StateKey]?.code || 'US'
  const paragraphs = generateCdlTestDetails(stateKey, data.stateName, stateCode, category.id, category.name, data.departmentName, lang)

  const t = (enText: string) => {
    if (lang === 'pa') {
      const paStrings: Record<string, string> = {
        "Home": "ਮੁੱਖ ਪੰਨਾ",
        "States": "ਰਾਜ",
        "Practice Test": "ਅਭਿਆਸ ਟੈਸਟ",
        "Practice": "ਅਭਿਆਸ",
        "Real Exam Style Questions": "ਅਸਲੀ ਪ੍ਰੀਖਿਆ ਵਰਗੇ ਪ੍ਰਸ਼ਨ",
        "Same format. Same difficulty. If you can pass our tests, you'll pass theirs.": "ਉਹੀ ਫਾਰਮੈਟ। ਉਹੀ ਮੁਸ਼ਕਲ ਪੱਧਰ। ਜੇਕਰ ਤੁਸੀਂ ਸਾਡੇ ਟੈਸਟ ਪਾਸ ਕਰ ਸਕਦੇ ਹੋ, ਤਾਂ ਤੁਸੀਂ ਉਹਨਾਂ ਦੇ ਵੀ ਪਾਸ ਕਰ ਲਵੋਗੇ।",
        "Question": "ਪ੍ਰਸ਼ਨ",
        "of": "ਵਿੱਚੋਂ",
        "Get Full CDL Question Bank for": "ਲਈ ਪੂਰਾ CDL ਪ੍ਰਸ਼ਨ ਬੈਂਕ ਪ੍ਰਾਪਤ ਕਰੋ",
        "Want more": "ਹੋਰ ਅਭਿਆਸ ਕਰਨਾ ਚਾਹੁੰਦੇ ਹੋ",
        "practice?": "?",
        "Get Instant Access": "ਤੁਰੰਤ ਪਹੁੰਚ ਪ੍ਰਾਪਤ ਕਰੋ",
        "Next Question": "ਅਗਲਾ ਪ੍ਰਸ਼ਨ",
        "Unlock All Questions": "ਸਾਰੇ ਪ੍ਰਸ਼ਨ ਅਨਲੌਕ ਕਰੋ",
        "Correct!": "ਸਹੀ!",
        "Incorrect": "ਗਲਤ",
        "Explanation:": "ਵਿਆਖਿਆ:",
        "Master the": "ਪਾਸ ਕਰੋ",
        "Exam": "ਪ੍ਰੀਖਿਆ",
        "The Local Route:": "ਸਥਾਨਕ ਰਸਤਾ:",
        "in": "ਵਿੱਚ",
        "Exam Quick Facts": "ਪ੍ਰੀਖਿਆ ਦੇ ਮੁੱਖ ਤੱਥ",
        "State Authority": "ਰਾਜ ਅਥਾਰਟੀ",
        "Passing Score": "ਪਾਸਿੰਗ ਸਕੋਰ",
        "Subject Area": "ਵਿਸ਼ਾ ਖੇਤਰ",
        "Source Manual": "ਸਰੋਤ ਦਸਤਾਵੇਜ਼",
        "Official Handbook": "ਅਧਿਕਾਰਤ ਹੈਂਡਬੁੱਕ",
        "Careers & Local Job Market": "ਕਰੀਅਰ ਅਤੇ ਸਥਾਨਕ ਨੌਕਰੀਆਂ",
        "Exam Format & Requirements": "ਪ੍ਰੀਖਿਆ ਦਾ ਫਾਰਮੈਟ ਅਤੇ ਲੋੜਾਂ",
        "Editorial Integrity & Accuracy": "ਸੰਪਾਦਕੀ ਨਿਰਪੱਖਤਾ ਅਤੇ ਸ਼ੁੱਧਤਾ",
        "Editorial Process & Accuracy:": "ਸੰਪਾਦਕੀ ਪ੍ਰਕਿਰਿਆ ਅਤੇ ਸ਼ੁੱਧਤਾ:",
        "Unlock CDL Pass —": "CDL ਪਾਸ ਅਨਲੌਕ ਕਰੋ —",
        "Start CDL Study Now": "CDL ਅਭਿਆਸ ਸ਼ੁਰੂ ਕਰੋ",
        "Instant Access. Works on phone, tablet, or laptop.": "ਤੁਰੰਤ ਪਹੁੰਚ। ਫ਼ੋਨ, ਟੈਬਲੇਟ ਜਾਂ ਲੈਪਟਾਪ 'ਤੇ ਕੰਮ ਕਰਦਾ ਹੈ।",
        "All-Access Pass": "ਸਭ-ਪਹੁੰਚ ਪਾਸ",
        "Pass on the First Try": "ਪਹਿਲੀ ਵਾਰ ਵਿੱਚ ਪਾਸ ਕਰੋ",
        "90 days access": "90 ਦਿਨਾਂ ਦੀ ਪਹੁੰਚ",
        "One-time payment": "ਇੱਕ-ਵਾਰ ਭੁਗਤਾਨ",
        "Pass Guarantee": "ਪਾਸ ਹੋਣ ਦੀ ਗਰੰਟੀ",
        "Not a subscription, one-time payment only": "ਕੋਈ ਮਹੀਨਾਵਾਰ ਫੀਸ ਨਹੀਂ, ਸਿਰਫ਼ ਇੱਕ ਵਾਰ ਭੁਗਤਾਨ",
        "Imagine this: You sit down for the CDL test.": "ਕਲਪਨਾ ਕਰੋ: ਤੁਸੀਂ CDL ਟੈਸਟ ਲਈ ਬੈਠਦੇ ਹੋ।",
        "Nothing surprises you.": "ਕੋਈ ਵੀ ਚੀਜ਼ ਤੁਹਾਨੂੰ ਹੈਰਾਨ ਨਹੀਂ ਕਰਦੀ।",
        "Ready to pass your": "ਕੀ ਤੁਸੀਂ ਆਪਣੀ ਪ੍ਰੀਖਿਆ ਪਾਸ ਕਰਨ ਲਈ ਤਿਆਰ ਹੋ",
        "Get our All-Access Premium Pass. Includes all": "ਸਾਡਾ ਆਲ-ਐਕਸੈਸ ਪ੍ਰੀਮੀਅਮ ਪਾਸ ਪ੍ਰਾਪਤ ਕਰੋ। ਇਸ ਵਿੱਚ ਸ਼ਾਮਲ ਹਨ",
        "questions for": "ਲਈ ਪ੍ਰਸ਼ਨ",
        "plus every other endorsement for the": "ਅਤੇ ਹੋਰ ਸਾਰੇ ਐਂਡੋਰਸਮੈਂਟ",
        "CDL.": "ਲਈ।",
        "Not sure? Try it for 60 minutes. Full refund within the first hour — just": "ਯਕੀਨ ਨਹੀਂ ਹੈ? 60 ਮਿੰਟਾਂ ਲਈ ਅਜ਼ਮਾਓ। ਪਹਿਲੇ ਘੰਟੇ ਦੇ ਅੰਦਰ ਪੂਰਾ ਰਿਫੰਡ — ਬੱਸ",
        "email us": "ਸਾਨੂੰ ਈਮੇਲ ਕਰੋ",
        "More": "ਹੋਰ",
        "CDL Resources": "CDL ਸਰੋਤ",
        "Main CDL Practice Test": "ਮੁੱਖ CDL ਅਭਿਆਸ ਟੈਸਟ",
        "Official CDL Guide": "ਅਧਿਕਾਰਤ CDL ਗਾਈਡ",
        "Endorsement Practice": "ਐਂਡੋਰਸਮੈਂਟ ਅਭਿਆਸ",
        "Air Brakes Practice": "ਏਅਰ ਬ੍ਰੇਕਸ ਅਭਿਆਸ",
        "Combination Vehicles Practice": "ਕੰਬੀਨੇਸ਼ਨ ਵਾਹਨ ਅਭਿਆਸ",
        "Passenger Transport Practice": "ਯਾਤਰੀ ਆਵਾਜਾਈ ਅਭਿਆਸ",
        "School Bus Practice": "ਸਕੂਲ ਬੱਸ ਅਭਿਆਸ",
        "Double/Triple Trailers Practice": "ਡਬਲ/ਟ੍ਰਿਪਲ ਟ੍ਰੇਲਰ ਅਭਿਆਸ",
        "Pre-Trip Inspection Practice": "ਪ੍ਰੀ-ਟ੍ਰਿਪ ਨਿਰੀਖਣ ਅਭਿਆਸ",
        "Tanker Endorsement Practice": "ਟੈਂਕਰ ਐਂਡੋਰਸਮੈਂਟ ਅਭਿਆਸ",
        "Start Free Practice Test": "ਮੁਫ਼ਤ ਅਭਿਆਸ ਟੈਸਟ ਸ਼ੁਰੂ ਕਰੋ",
        "Class A General Knowledge": "ਕਲਾਸ A ਜਨਰਲ ਨਾਲੇਜ",
        "Class B General Knowledge": "ਕਲਾਸ B ਜਨਰਲ ਨਾਲੇਜ",
        "Class C General Knowledge": "ਕਲਾਸ C ਜਨਰਲ ਨਾਲੇਜ",
        "Hazardous Materials (HazMat)": "ਖ਼ਤਰਨਾਕ ਸਮੱਗਰੀ (HazMat)",
        "Passenger Transport": "ਯਾਤਰੀ ਆਵਾਜਾਈ (Passenger Transport)",
        "Double / Triple Trailers": "ਡਬਲ / ਟ੍ਰਿਪਲ ਟ੍ਰੇਲਰ",
        "California CDL Ambulance": "ਕੈਲੀਫੋਰਨੀਆ CDL ਐਂਬੂਲੈਂਸ"
      }
      return paStrings[enText] || enText
    }
    return enText
  }

  const currentMonthYear = (() => {
    const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const dateObj = new Date()
    return `${MONTHS[dateObj.getMonth()]} ${dateObj.getFullYear()}`
  })()

  const [showExpiredModal, setShowExpiredModal] = useState(false)
  const [showBanner, setShowBanner] = useState(true)
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('signup')
  const [purchaseLoading, setPurchaseLoading] = useState(false)
  
  // Interactive Quiz State
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)

  const scrollToPremium = () => {
    const premiumSection = document.getElementById('premium-section')
    if (premiumSection) {
      premiumSection.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  const createCheckoutSession = async (userId: string, duration: number) => {
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: userId,
          state: stateKey,
          duration: duration,
          product: 'cdl_premium'
        }),
      })

      const checkoutData = await response.json()
      if (checkoutData.error) {
        alert('Failed to initiate checkout session')
        return
      }
      if (checkoutData.url) {
        window.location.href = checkoutData.url
      }
    } catch (err) {
      alert('An error occurred. Please try again.')
    }
  }

  const handleCheckout = async () => {
    if (!user) {
      setAuthMode('signup')
      setAuthModalOpen(true)
      return
    }
    setPurchaseLoading(true)
    await createCheckoutSession(user.uid, data.pricing.duration)
    setPurchaseLoading(false)
  }

  const handleLogin = () => {
    const currentPath = typeof window !== 'undefined' ? window.location.pathname : ''
    router.push(`/login${currentPath ? `?redirect=${encodeURIComponent(currentPath)}` : ''}`)
  }

  const handleDashboard = () => {
    if (isPremium) {
      router.push('/dashboard')
    } else if (user && userData && userData.isCdlPremium && isCdlPremiumExpired) {
      setShowExpiredModal(true)
    } else {
      setAuthMode('signup')
      setAuthModalOpen(true)
    }
  }
  
  const handleOptionSelect = (optionIndex: number) => {
    if (isAnswered) return
    setSelectedOption(optionIndex)
    setIsAnswered(true)
  }
  
  const currentQuestion = initialQuestions[currentQuestionIndex]

  const linkStyle = "text-[#007aff] font-medium bg-gradient-to-r from-[#007aff] to-[#007aff] bg-[length:0%_2px] bg-no-repeat bg-left-bottom transition-[background-size] duration-300 hover:bg-[length:100%_2px] pb-[1px] inline-block"

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {showBanner && (
        <FlashSaleBanner onClose={() => setShowBanner(false)} onClick={scrollToPremium} sticky={false} />
      )}

      <div className="sticky top-0 z-50">
        <Navigation
          user={user}
          userData={userData}
          isPremium={isPremium}
          isPremiumExpired={isCdlPremiumExpired}
          premiumStatus={cdlPremiumStatus}
          isLoading={authLoading}
          onLogin={handleLogin}
          onSignup={() => { setAuthMode('signup'); setAuthModalOpen(true) }}
          onLogout={async () => { await signOut(); router.refresh() }}
          onDashboard={handleDashboard}
          onPurchaseRenewal={handleCheckout}
          premiumButtonText="Unlock All Questions"
          premiumButtonAction={scrollToPremium}
          currentState={stateKey as StateKey}
          currentLicenseType="cdl"
          hidePremiumButton={true}
          languageToggleUrl={['california', 'texas', 'florida', 'new-york'].includes(stateKey) ? (lang === 'pa' ? `/${stateKey}-${CATEGORY_TO_SLUG[category.id]}-cdl-permit-test` : `/${stateKey}-${CATEGORY_TO_SLUG[category.id]}-cdl-permit-test/punjabi`) : undefined}
          languageToggleText={['california', 'texas', 'florida', 'new-york'].includes(stateKey) ? (lang === 'pa' ? "Switch to English" : "Switch to Punjabi (ਪੰਜਾਬੀ)") : undefined}
          currentLanguage={lang}
        />
      </div>

      <div className="bg-gray-50 py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center text-sm text-gray-600 gap-2">
            <Link href="/" className="hover:text-[#007aff] transition-colors">{t("Home")}</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/#states" className="hover:text-[#007aff] transition-colors">{t("States")}</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href={lang === 'pa' ? `/cdl-permit-test/${stateKey}/punjabi` : `/${stateKey}-cdl-permit-test`} className="hover:text-[#007aff] transition-colors">
              {lang === 'pa' ? `${data.stateName} CDL (ਪੰਜਾਬੀ)` : `${data.stateName} CDL`}
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gray-900 font-medium">
              {lang === 'pa' ? `${t(category.name)} ਅਭਿਆਸ ਟੈਸਟ` : `${category.name} Practice Test`}
            </span>
          </div>
        </div>
      </div>

      <main>
        {/* Hero Section */}
        <section className="relative pt-12 pb-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            {/* Ratings and Star Section */}
            <div className="flex flex-col items-center justify-center mb-6 space-y-3">
              <div className="flex items-center gap-1.5">
                <span className="text-amber-500 font-extrabold text-sm">4.8</span>
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              <div className="inline-flex flex-wrap items-center justify-center gap-1.5 bg-blue-50/50 border border-blue-100 text-blue-800 font-bold px-4 py-2 rounded-full text-xs sm:text-sm">
                <span>
                  📍 {lang === 'pa' ? `${data.stateName}-ਵਿਸ਼ੇਸ਼ ਪ੍ਰੀਖਿਆ ਵਰਗੇ ਪ੍ਰਸ਼ਨ` : `${data.stateName}-specific exam-like questions`}
                </span>
                <span className="text-blue-200 hidden sm:inline">|</span>
                <span>
                  🔄 {lang === 'pa' ? `ਅੱਪਡੇਟ ਕੀਤਾ: ${currentMonthYear}` : `Updated ${currentMonthYear}`}
                </span>
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              {data.stateName} CDL <span className="text-[#007aff]">{lang === 'pa' ? t(category.name) : category.name}</span> {t("Practice Test")}
            </h1>
            <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
              {lang === 'pa' ? (
                `ਆਪਣੀ ${data.stateName} ${data.departmentName} ${t(category.name)} ਲਿਖਤੀ ਪ੍ਰੀਖਿਆ ਦੀ ਤਿਆਰੀ ਕਰੋ। ਹੇਠਾਂ ਦਿੱਤੇ ਮੁਫ਼ਤ ਅਭਿਆਸ ਪ੍ਰਸ਼ਨਾਂ ਦੀ ਸਮੀਖਿਆ ਕਰੋ, ਜਾਂ ਸਾਰੇ ${category.questionsCount} ਪ੍ਰਸ਼ਨਾਂ ਤੱਕ ਪੂਰੀ ਪਹੁੰਚ ਪ੍ਰਾਪਤ ਕਰਨ ਲਈ ਪ੍ਰੀਮੀਅਮ ਵਿੱਚ ਅੱਪਗ੍ਰੇਡ ਕਰੋ।`
              ) : (
                `Prepare for the ${data.stateName} ${data.departmentName} ${category.name} written exam. ${category.description} Review the free practice questions below, or upgrade to Premium for complete access to all ${category.questionsCount} questions.`
              )}
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button size="lg" onClick={() => document.getElementById('practice-section')?.scrollIntoView({ behavior: 'smooth' })} className="bg-[#007aff] hover:bg-[#0056cc] text-white px-8 py-5 h-auto text-base font-bold rounded-xl shadow-lg w-full sm:w-auto">
                {t("Start Free Practice Test")}
              </Button>
              <Button
                size="lg"
                onClick={() => document.getElementById('premium-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white hover:bg-blue-50/50 text-[#007aff] border-2 border-[#007aff] px-8 py-5 h-auto text-base font-bold rounded-xl shadow-md transition-all w-full sm:w-auto"
              >
                {lang === 'pa' ? `ਪੂਰੀ ${data.stateName} ਪ੍ਰੀਖਿਆ ਦੀ ਤਿਆਰੀ ਪ੍ਰਾਪਤ ਕਰੋ` : `Get Full ${data.stateName} Exam Prep`}
              </Button>
            </div>
          </div>
        </section>

        {/* Practice Questions Section */}
        <section id="practice-section" className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 max-w-2xl lg:max-w-4xl">
            <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                {t("Real Exam Style Questions")}
              </h2>
              <p className="text-sm md:text-base text-gray-600">
                {t("Same format. Same difficulty. If you can pass our tests, you'll pass theirs.")}
              </p>
            </div>
            
            {/* Compact Interactive Widget */}
            {initialQuestions.length > 0 && currentQuestion && (
               <div className="bg-white border border-gray-200 shadow-lg rounded-2xl overflow-hidden mb-6">
                 <div className="bg-gray-50 border-b border-gray-100 px-6 py-4 flex justify-between items-center">
                   <span className="text-sm font-bold text-gray-500 uppercase tracking-wide">
                     {lang === 'pa' ? `${t("Question")} ${currentQuestionIndex + 1} ${t("of")} ${initialQuestions.length}` : `Question ${currentQuestionIndex + 1} of ${initialQuestions.length}`}
                   </span>
                 </div>
                 
                 <div className="p-6 md:p-8">
                   <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-6 leading-snug">{currentQuestion.question}</h3>
                   <div className="space-y-3">
                     {currentQuestion.options.map((option, index) => {
                       const isSelected = selectedOption === index
                       const isCorrect = currentQuestion.correctAnswer === index
                       
                       let btnClass = "w-full text-left p-4 rounded-xl border transition-all duration-200 "
                       
                       if (!isAnswered) {
                         btnClass += "border-gray-200 hover:border-[#007aff] hover:bg-blue-50/50"
                       } else if (isCorrect) {
                         btnClass += "border-green-500 bg-green-50"
                       } else if (isSelected && !isCorrect) {
                         btnClass += "border-red-500 bg-red-50"
                       } else {
                         btnClass += "border-gray-100 opacity-50"
                       }
                       
                       return (
                         <button key={index} disabled={isAnswered} onClick={() => handleOptionSelect(index)} className={btnClass}>
                           <div className="flex items-start">
                             <div className={`flex-shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center mr-3 text-sm ${
                               !isAnswered ? 'border-gray-300 text-gray-500' :
                               isCorrect ? 'border-green-500 bg-green-500 text-white' :
                               isSelected ? 'border-red-500 bg-red-500 text-white' : 'border-gray-300 text-gray-400'
                             }`}>
                               {String.fromCharCode(65 + index)}
                             </div>
                             <span className={`text-base mt-0.5 ${isAnswered && isCorrect ? 'font-semibold text-green-900' : isAnswered && isSelected ? 'font-semibold text-red-900' : 'text-gray-700'}`}>
                               {option}
                             </span>
                           </div>
                         </button>
                       )
                     })}
                   </div>
                   
                   {isAnswered && (
                     <div className="mt-6">
                       <div className={`p-5 rounded-xl border ${selectedOption === currentQuestion.correctAnswer ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                         <h4 className={`font-bold flex items-center mb-2 ${selectedOption === currentQuestion.correctAnswer ? 'text-green-800' : 'text-red-800'}`}>
                           {selectedOption === currentQuestion.correctAnswer ? <CheckCircle className="w-4 h-4 mr-2" /> : <AlertCircle className="w-4 h-4 mr-2" />}
                           {selectedOption === currentQuestion.correctAnswer ? t('Correct!') : t('Incorrect')}
                         </h4>
                         <p className="text-sm text-gray-700 leading-relaxed mb-4">{currentQuestion.explanation}</p>
                         <div className="flex justify-end">
                           <Button onClick={() => {
                             if (currentQuestionIndex < initialQuestions.length - 1) {
                               setSelectedOption(null)
                               setIsAnswered(false)
                               setCurrentQuestionIndex(prev => prev + 1)
                             } else {
                               scrollToPremium()
                             }
                           }} className="bg-gray-900 hover:bg-gray-800 text-white">
                             {currentQuestionIndex < initialQuestions.length - 1 ? t('Next Question') : t('Unlock All Questions')}
                             <ArrowRight className="w-4 h-4 ml-2" />
                           </Button>
                         </div>
                       </div>
                     </div>
                   )}
                 </div>
                 
                 {/* Invisible SEO Render - To ensure all questions are present in DOM for search engines */}
                 <div className="hidden" aria-hidden="true">
                   {initialQuestions.map(q => (
                     <div key={q.id}>
                       <p>{q.question}</p>
                       <ul>{q.options.map((o, i) => <li key={i}>{o}</li>)}</ul>
                       <p>{q.explanation}</p>
                     </div>
                   ))}
                 </div>
               </div>
            )}
            
            <div className="text-center mt-6">
               <p className="text-gray-600 mb-3">
                 {lang === 'pa' ? `ਹੋਰ ${t(category.name)} ਅਭਿਆਸ ਕਰਨਾ ਚਾਹੁੰਦੇ ਹੋ?` : `Want more ${category.name} practice?`}
               </p>
               <button onClick={scrollToPremium} className={linkStyle}>
                 {lang === 'pa' ? `${data.stateName} ਲਈ ਪੂਰਾ CDL ਪ੍ਰਸ਼ਨ ਬੈਂਕ ਪ੍ਰਾਪਤ ਕਰੋ →` : `Get Full CDL Question Bank for ${data.stateName} →`}
               </button>
            </div>
          </div>
        </section>

        {/* Details Section */}
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#007aff] bg-blue-50/50 border border-blue-200 px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                {lang === 'pa' ? "ਪ੍ਰੀਖਿਆ ਦੀ ਸੰਖੇਪ ਜਾਣਕਾਰੀ ਅਤੇ ਨੌਕਰੀਆਂ" : "Exam Overview & Jobs"}
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                {lang === 'pa' ? `${data.stateName} CDL ${t(category.name)} ਪ੍ਰੀਖਿਆ ਪਾਸ ਕਰੋ` : `Master the ${data.stateName} CDL ${category.name} Exam`}
              </h2>
            </div>

            {/* Asymmetrical Top Panel: Intro & Quick Stats */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
              {/* Intro Narrative */}
              <div className="lg:col-span-8 space-y-4">
                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <span className="p-2 bg-[#007aff]/5 text-[#007aff] rounded-lg">
                    <Compass className="w-5.5 h-5.5" />
                  </span>
                  {lang === 'pa' ? `ਸਥਾਨਕ ਰਸਤਾ: ${data.stateName} ਵਿੱਚ ${t(category.name)}` : `The Local Route: ${category.name} in ${data.stateName}`}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed font-normal">
                  {paragraphs.intro}
                </p>
              </div>

              {/* Quick Stats Card */}
              <div className="lg:col-span-4 bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm w-full">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">{t("Exam Quick Facts")}</h4>
                <div className="space-y-3.5">
                  <div className="flex justify-between items-center border-b border-gray-250/30 pb-2">
                    <span className="text-sm text-gray-500">{t("State Authority")}</span>
                    <span className="text-sm font-semibold text-gray-950">{data.stateName} {data.departmentName || 'Real Estate'}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-250/30 pb-2">
                    <span className="text-sm text-gray-500">{t("Passing Score")}</span>
                    <span className="text-sm font-semibold text-gray-950">80%</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-250/30 pb-2">
                    <span className="text-sm text-gray-500">{t("Subject Area")}</span>
                    <span className="text-sm font-semibold text-gray-950">
                      {lang === 'pa' ? `${category.code} ਅਭਿਆਸ` : `${category.code} Practice`}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{t("Source Manual")}</span>
                    <span className="text-sm font-semibold text-[#007aff] hover:underline">
                      <a href={data.handbookUrl} target="_blank" rel="noopener noreferrer">{t("Official Handbook")}</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Grid: Careers & Exam Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pt-8 border-t border-gray-150/50">
              {/* Careers */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <span className="p-2 bg-[#007aff]/5 text-[#007aff] rounded-lg">
                    <Briefcase className="w-5.5 h-5.5" />
                  </span>
                  {t("Careers & Local Job Market")}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed font-normal">
                  {paragraphs.careers}
                </p>
              </div>

              {/* Exam Details */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <span className="p-2 bg-[#007aff]/5 text-[#007aff] rounded-lg">
                    <FileText className="w-5.5 h-5.5" />
                  </span>
                  {t("Exam Format & Requirements")}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed font-normal">
                  {paragraphs.examBreakdown}
                </p>
              </div>
            </div>

            {/* Editorial Process Banner */}
            <div className="mt-12 pt-6 border-t border-gray-150/50 flex flex-col md:flex-row items-start gap-4 bg-gray-50/50 p-5 rounded-2xl border border-gray-150/30">
              <span className="p-2.5 bg-[#007aff]/5 text-[#007aff] rounded-xl shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </span>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-gray-900">{t("Editorial Integrity & Accuracy")}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {lang === 'pa' ? (
                    `ਪ੍ਰਸ਼ਨ Real Estate Question Bank ਦੀ ਕੰਟੈਂਟ ਟੀਮ ਦੁਆਰਾ ਸਾਡੀ ਬਹੁ-ਪੱਧਰੀ ਸੰਪਾਦਕੀ ਪ੍ਰਕਿਰਿਆ ਅਨੁਸਾਰ ਤਿਆਰ ਕੀਤੇ ਅਤੇ ਅੱਪਡੇਟ ਰੱਖੇ ਜਾਂਦੇ ਹਨ। ਜਦੋਂ ਵੀ ${data.stateName} ${data.departmentName || 'Real Estate'} ਆਪਣੇ ਹੈਂਡਬੁੱਕ ਜਾਂ ਵੈੱਬਸਾਈਟ ਦੀ ਜਾਣਕਾਰੀ ਬਦਲਦਾ ਹੈ, ਅਸੀਂ ਵੀ ਤੁਰੰਤ ਅੱਪਡੇਟ ਕਰਦੇ ਹਾਂ। ਅਧਿਕਾਰਤ ਸਰੋਤ: ${data.stateName} CDL ਹੈਂਡਬੁੱਕ (2026 ਐਡੀਸ਼ਨ) ਅਤੇ ਅਧਿਕਾਰਤ ਸਰਕਾਰੀ ਪੋਰਟਲ।`
                  ) : (
                    `Questions are created and maintained by the Real Estate Question Bank content team following our multi-layer editorial process, updated whenever the ${data.stateName} ${data.departmentName || 'Real Estate'} changes its handbook or website information. Official sources checked: ${data.stateName} CDL Handbook (2026 edition) and official ${data.stateName} regulatory portals.`
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-16 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 text-center tracking-tight leading-tight">
              {lang === 'pa' ? `ਹੋਰ ${data.stateName} CDL ਸਰੋਤ` : `More ${data.stateName} CDL Resources`}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <div>
                <Link href={lang === 'pa' ? `/cdl-permit-test/${stateKey}/punjabi` : `/${stateKey}-cdl-permit-test`} className={linkStyle}>
                  {lang === 'pa' ? `${data.stateName} ਮੁੱਖ CDL ਅਭਿਆਸ ਟੈਸਟ` : `${data.stateName} Main CDL Practice Test`}
                </Link>
              </div>
              <div>
                <Link href={`/state-guides/${stateKey}-cdl`} className={linkStyle}>
                  {lang === 'pa' ? `${data.stateName} ਅਧਿਕਾਰਤ CDL ਗਾਈਡ` : `${data.stateName} Official CDL Guide`}
                </Link>
              </div>
              <div>
                <Link href={lang === 'pa' ? `/${stateKey}-class-a-cdl-permit-test/punjabi` : `/${stateKey}-class-a-cdl-permit-test`} className={linkStyle}>
                  {lang === 'pa' ? 'ਕਲਾਸ A ਅਭਿਆਸ ਟੈਸਟ' : 'Class A Practice Test'}
                </Link>
              </div>
              <div>
                <Link href={lang === 'pa' ? `/${stateKey}-class-b-cdl-permit-test/punjabi` : `/${stateKey}-class-b-cdl-permit-test`} className={linkStyle}>
                  {lang === 'pa' ? 'ਕਲਾਸ B ਅਭਿਆਸ ਟੈਸਟ' : 'Class B Practice Test'}
                </Link>
              </div>
              <div>
                <Link href={lang === 'pa' ? `/${stateKey}-class-c-cdl-permit-test/punjabi` : `/${stateKey}-class-c-cdl-permit-test`} className={linkStyle}>
                  {lang === 'pa' ? 'ਕਲਾਸ C ਅਭਿਆਸ ਟੈਸਟ' : 'Class C Practice Test'}
                </Link>
              </div>
              <div>
                <Link href={lang === 'pa' ? `/${stateKey}-hazmat-cdl-permit-test/punjabi` : `/${stateKey}-hazmat-cdl-permit-test`} className={linkStyle}>
                  {lang === 'pa' ? 'ਖ਼ਤਰਨਾਕ ਸਮੱਗਰੀ (HazMat) ਅਭਿਆਸ' : 'Hazmat Endorsement Practice'}
                </Link>
              </div>
              <div>
                <Link href={lang === 'pa' ? `/${stateKey}-tanker-cdl-permit-test/punjabi` : `/${stateKey}-tanker-cdl-permit-test`} className={linkStyle}>
                  {lang === 'pa' ? 'ਟੈਂਕਰ ਵਾਹਨ ਅਭਿਆਸ' : 'Tanker Endorsement Practice'}
                </Link>
              </div>
              <div>
                <Link href={lang === 'pa' ? `/${stateKey}-air-brakes-cdl-permit-test/punjabi` : `/${stateKey}-air-brakes-cdl-permit-test`} className={linkStyle}>
                  {lang === 'pa' ? 'ਏਅਰ ਬ੍ਰੇਕਸ ਅਭਿਆਸ' : 'Air Brakes Practice'}
                </Link>
              </div>
              <div>
                <Link href={lang === 'pa' ? `/${stateKey}-combination-vehicles-cdl-permit-test/punjabi` : `/${stateKey}-combination-vehicles-cdl-permit-test`} className={linkStyle}>
                  {lang === 'pa' ? 'ਕੰਬੀਨੇਸ਼ਨ ਵਾਹਨ ਅਭਿਆਸ' : 'Combination Vehicles Practice'}
                </Link>
              </div>
              <div>
                <Link href={lang === 'pa' ? `/${stateKey}-passenger-cdl-permit-test/punjabi` : `/${stateKey}-passenger-cdl-permit-test`} className={linkStyle}>
                  {lang === 'pa' ? 'ਯਾਤਰੀ ਆਵਾਜਾਈ ਅਭਿਆਸ' : 'Passenger Transport Practice'}
                </Link>
              </div>
              <div>
                <Link href={lang === 'pa' ? `/${stateKey}-school-bus-cdl-permit-test/punjabi` : `/${stateKey}-school-bus-cdl-permit-test`} className={linkStyle}>
                  {lang === 'pa' ? 'ਸਕੂਲ ਬੱਸ ਅਭਿਆਸ' : 'School Bus Practice'}
                </Link>
              </div>
              <div>
                <Link href={lang === 'pa' ? `/${stateKey}-double-triple-trailers-cdl-permit-test/punjabi` : `/${stateKey}-double-triple-trailers-cdl-permit-test`} className={linkStyle}>
                  {lang === 'pa' ? 'ਡਬਲ/ਟ੍ਰਿਪਲ ਟ੍ਰੇਲਰ ਅਭਿਆਸ' : 'Double/Triple Trailers Practice'}
                </Link>
              </div>
              <div>
                <Link href={lang === 'pa' ? `/${stateKey}-pre-trip-inspection-cdl-permit-test/punjabi` : `/${stateKey}-pre-trip-inspection-cdl-permit-test`} className={linkStyle}>
                  {lang === 'pa' ? 'ਪ੍ਰੀ-ਟ੍ਰਿਪ ਨਿਰੀਖਣ ਅਭਿਆਸ' : 'Pre-Trip Inspection Practice'}
                </Link>
              </div>
            </div>
          </div>
        </section>

        <CdlTestimonials lang={lang} />

        {/* Pricing Section matching premium /get-premium section styling */}
        <section id="premium-section" className="py-16 md:py-24 bg-gradient-to-br from-blue-100 via-purple-50 via-50% to-emerald-100">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Text */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#111827] leading-tight">
                  {t("Imagine this: You sit down for the CDL test.")} <span className="text-[#007aff]">{t("Nothing surprises you.")}</span>
                </h2>
                <p className="text-base lg:text-lg text-[#374151] leading-relaxed">
                  {lang === 'pa' ? (
                    `ਸਾਰੀ ${data.stateName} CDL ਪ੍ਰਸ਼ਨ ਬੈਂਕ ਤੱਕ ਪਹੁੰਚ ਪ੍ਰਾਪਤ ਕਰੋ — ਤਾਂ ਜੋ ਅਸਲ ਪ੍ਰੀਖਿਆ ਇੱਕ ਦੁਹਰਾਅ ਵਰਗੀ ਮਹਿਸੂਸ ਹੋਵੇ। ਸਾਡੀ 99.2% ਪ੍ਰਮਾਣਿਤ ਪਾਸ ਦਰ ਅਤੇ 100% ਪੈਸੇ ਵਾਪਸੀ ਦੀ ਗਰੰਟੀ ਦੇ ਨਾਲ, ਤੁਸੀਂ ਪੂਰੇ ਭਰੋਸੇ ਨਾਲ ਪ੍ਰੀਖਿਆ ਦੇ ਸਕਦੇ ਹੋ।`
                  ) : (
                    `Access the full ${data.stateName} CDL Question Bank — so the real test feels like a repeat. With our 99.2% proven pass rate and 100% money-back guarantee, you can walk in with total confidence.`
                  )}
                </p>
                <div className="inline-flex items-start gap-3 bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                  <Shield className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-emerald-800 font-medium leading-relaxed">
                    {lang === 'pa' ? (
                      `ਯਕੀਨ ਨਹੀਂ ਹੈ? 60 ਮਿੰਟਾਂ ਲਈ ਅਜ਼ਮਾਓ। ਪਹਿਲੇ ਘੰਟੇ ਦੇ ਅੰਦਰ ਪੂਰਾ ਰਿਫੰਡ — ਬੱਸ `
                    ) : (
                      `Not sure? Try it for 60 minutes. Full refund within the first hour — just `
                    )}
                    <a href="mailto:support@realestatequestionbank.com" className="text-[#007aff] no-underline hover:underline">{t("email us")}</a>.
                  </p>
                </div>
              </div>

              {/* Right Column: Pricing Card */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="bg-white rounded-3xl p-6 md:p-8 border-[3px] border-[#007aff] shadow-xl w-full max-w-md flex flex-col text-left relative">
                  <div className="absolute -top-3.5 left-6 whitespace-nowrap">
                    <div className="bg-[#ffce31] text-gray-900 px-4 py-1.5 rounded-[6px] text-xs font-bold shadow-sm uppercase tracking-wider">
                      {t("All-Access Pass")}
                    </div>
                  </div>
                  
                  <div className="mb-6 mt-2">
                    <div className="text-xs font-bold text-gray-700 tracking-[0.15em] uppercase mb-1">{data.stateName} CDL</div>
                    <h3 className="text-2xl font-bold text-[#111827] leading-tight mb-2">{t("Pass on the First Try")}</h3>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-sm text-gray-800 font-semibold">{t("90 days access")}</span>
                      <span className="text-gray-300 select-none">•</span>
                      <span className="text-sm text-gray-800 font-semibold">{t("One-time payment")}</span>
                      <span className="text-gray-300 select-none">•</span>
                      <span className="text-xs bg-emerald-50 text-emerald-800 font-bold border border-emerald-200 px-2 py-0.5 rounded flex items-center gap-1">
                        🛡️ {t("Pass Guarantee")}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {lang === 'pa' ? (
                        `ਸਾਡਾ ਸਭ ਤੋਂ ਸਹੀ ਰਸਤਾ ਤਾਂ ਜੋ ਤੁਸੀਂ ਪ੍ਰੀਖਿਆ ਵਾਲੇ ਦਿਨ ਬਿਨਾਂ ਕਿਸੇ ਸ਼ੱਕ ਦੇ ਜਾ ਸਕੋ। ਇਸ ਵਿੱਚ ਕਲਾਸ A/B ਕੋਰ ਅਤੇ ਸਾਰੇ ਐਂਡੋਰਸਮੈਂਟ ਸ਼ਾਮਲ ਹਨ।`
                      ) : (
                        `Our most thorough path to walk in with zero doubt on test day. Includes Class A/B core and all endorsements.`
                      )}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-gray-400 line-through text-2xl font-medium">$149</span>
                    <span className="text-4xl font-extrabold text-gray-900">${data.pricing.price}</span>
                    <span className="bg-yellow-100 text-yellow-700 text-xs px-2.5 py-1 rounded font-semibold ml-auto">{lang === 'pa' ? '33% ਦੀ ਛੋਟ' : '33% OFF'}</span>
                  </div>

                  <p className="text-xs text-gray-500 mb-6">{t("Not a subscription, one-time payment only")}</p>

                  <ul className="text-sm text-[#111827] space-y-3 mb-6 flex-grow">
                    {['california', 'texas', 'florida', 'new-york'].includes(stateKey) && (
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#007aff] flex-shrink-0 mt-0.5" />
                        <span>{lang === 'pa' ? 'ਅੰਗਰੇਜ਼ੀ ਅਤੇ ਪੰਜਾਬੀ ਭਾਸ਼ਾਵਾਂ ਵਿੱਚ ਉਪਲਬਧ' : 'Available in English & Punjabi languages'}</span>
                      </li>
                    )}
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#007aff] flex-shrink-0 mt-0.5" />
                      <span>{lang === 'pa' ? '2,500+ ਰਾਜ-ਵਿਸ਼ੇਸ਼ CDL ਪ੍ਰਸ਼ਨ' : '2,500+ state-specific CDL questions'}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#007aff] flex-shrink-0 mt-0.5" />
                      <span>{lang === 'pa' ? 'ਅਸਲ CDL-ਸ਼ੈਲੀ ਦੀਆਂ ਮੌਕ ਪ੍ਰੀਖਿਆਵਾਂ' : 'Realistic CDL-style Mock Exams'}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#007aff] flex-shrink-0 mt-0.5" />
                      <span>{lang === 'pa' ? 'ਕਲਾਸ A, ਕਲਾਸ B ਅਤੇ ਕਲਾਸ C ਕੋਰ ਅਭਿਆਸ ਟੈਸਟ' : 'Class A, Class B & Class C core practice tests'}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#007aff] flex-shrink-0 mt-0.5" />
                      <span>{lang === 'pa' ? 'ਸਾਰੇ ਐਂਡੋਰਸਮੈਂਟ (ਹਾਜ਼ਮੈਟ, ਯਾਤਰੀ, ਸਕੂਲ ਬੱਸ, ਡਬਲਜ਼, ਟੈਂਕਰ)' : 'All endorsements (Hazmat, Passenger, School Bus, Doubles, Tanker)'}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#007aff] flex-shrink-0 mt-0.5" />
                      <span>{lang === 'pa' ? 'ਪ੍ਰੀ-ਟ੍ਰਿਪ ਨਿਰੀਖਣ ਅਭਿਆਸ ਚੈੱਕਲਿਸਟ ਗਾਈਡ' : 'Pre-Trip inspection study checklist guide'}</span>
                    </li>
                    <li className="flex items-start gap-3 font-semibold text-emerald-800">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{lang === 'pa' ? '100% ਪਾਸ ਹੋਣ ਦੀ ਗਰੰਟੀ ਅਤੇ ਪੈਸੇ ਵਾਪਸੀ ਨੀਤੀ' : '100% Pass Guarantee & Money-Back Policy'}</span>
                    </li>
                  </ul>

                  <Link
                    href="/get-premium?plan=90&cdl=true"
                    className="w-full flex items-center justify-center gap-2 text-base py-3.5 px-6 mt-auto bg-[#007aff] hover:bg-[#0056cc] text-white font-bold rounded-xl shadow-lg transition-all text-center no-underline font-semibold"
                  >
                    {t("Start CDL Study Now")}
                  </Link>
                  <p className="text-xs text-gray-500 text-center mt-3">{t("Instant Access. Works on phone, tablet, or laptop.")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CdlReimbursement lang={lang} />

        <CdlStateSelector currentStateKey={stateKey} lang={lang} />
      </main>
      
      <Footer />

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        mode={authMode}
        onSwitchMode={setAuthMode}
        onSuccess={(mode, result) => {
          setAuthModalOpen(false)
          if (mode === 'signup' && result?.user) {
             createCheckoutSession(result.user.uid, data.pricing.duration)
          }
        }}
        isCheckoutFlow={true}
        state={stateKey}
      />
      {showExpiredModal && (
        <ExpiredPremiumModal 
          isOpen={true} 
          onClose={() => setShowExpiredModal(false)} 
          onRenew={handleCheckout} 
        />
      )}
    </div>
  )
}
