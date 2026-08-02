'use client'

import { useState, useMemo, useEffect } from 'react'
import { useAuth } from '@/contexts/auth-context'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { AuthModal } from '@/components/auth/auth-modal'
import { StateSelectorModal } from '@/components/state-selector-modal'
import { Button } from '@/components/ui/button'
import { STATES, type StateKey } from '@/lib/constants'
import { useRouter } from 'next/navigation'
import { Search, Download, FileText, Star, CheckCircle, ArrowRight, X, Mail, Loader2 } from 'lucide-react'
import Link from 'next/link'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase/config'

// Map state keys to their PDF file names (department abbreviations vary by state)
const PDF_FILE_NAMES: Record<StateKey, string> = {
  'alabama': 'Free-Alabama-Real-Estate-Practice-Questions.pdf',
  'alaska': 'Free-Alaska-Real-Estate-Practice-Questions.pdf',
  'arizona': 'Free-Arizona-Real-Estate-Practice-Questions.pdf',
  'arkansas': 'Free-Arkansas-Real-Estate-Practice-Questions.pdf',
  'california': 'Free-California-Real-Estate-Practice-Questions.pdf',
  'colorado': 'Free-Colorado-Real-Estate-Practice-Questions.pdf',
  'connecticut': 'Free-Connecticut-Real-Estate-Practice-Questions.pdf',
  'delaware': 'Free-Delaware-Real-Estate-Practice-Questions.pdf',
  'florida': 'Free-Florida-Real-Estate-Practice-Questions.pdf',
  'georgia': 'Free-Georgia-Real-Estate-Practice-Questions.pdf',
  'hawaii': 'Free-Hawaii-Real-Estate-Practice-Questions.pdf',
  'idaho': 'Free-Idaho-Real-Estate-Practice-Questions.pdf',
  'illinois': 'Free-Illinois-Real-Estate-Practice-Questions.pdf',
  'indiana': 'Free-Indiana-Real-Estate-Practice-Questions.pdf',
  'iowa': 'Free-Iowa-Real-Estate-Practice-Questions.pdf',
  'kansas': 'Free-Kansas-Real-Estate-Practice-Questions.pdf',
  'kentucky': 'Free-Kentucky-Real-Estate-Practice-Questions.pdf',
  'louisiana': 'Free-Louisiana-Real-Estate-Practice-Questions.pdf',
  'maine': 'Free-Maine-Real-Estate-Practice-Questions.pdf',
  'maryland': 'Free-Maryland-Real-Estate-Practice-Questions.pdf',
  'massachusetts': 'Free-Massachusetts-Real-Estate-Practice-Questions.pdf',
  'michigan': 'Free-Michigan-Real-Estate-Practice-Questions.pdf',
  'minnesota': 'Free-Minnesota-Real-Estate-Practice-Questions.pdf',
  'mississippi': 'Free-Mississippi-Real-Estate-Practice-Questions.pdf',
  'missouri': 'Free-Missouri-Real-Estate-Practice-Questions.pdf',
  'montana': 'Free-Montana-Real-Estate-Practice-Questions.pdf',
  'nebraska': 'Free-Nebraska-Real-Estate-Practice-Questions.pdf',
  'nevada': 'Free-Nevada-Real-Estate-Practice-Questions.pdf',
  'new-hampshire': 'Free-New-Hampshire-Real-Estate-Practice-Questions.pdf',
  'new-jersey': 'Free-New-Jersey-Real-Estate-Practice-Questions.pdf',
  'new-mexico': 'Free-New-Mexico-Real-Estate-Practice-Questions.pdf',
  'new-york': 'Free-New-York-Real-Estate-Practice-Questions.pdf',
  'north-carolina': 'Free-North-Carolina-Real-Estate-Practice-Questions.pdf',
  'north-dakota': 'Free-North-Dakota-Real-Estate-Practice-Questions.pdf',
  'ohio': 'Free-Ohio-Real-Estate-Practice-Questions.pdf',
  'oklahoma': 'Free-Oklahoma-Real-Estate-Practice-Questions.pdf',
  'oregon': 'Free-Oregon-Real-Estate-Practice-Questions.pdf',
  'pennsylvania': 'Free-Pennsylvania-Real-Estate-Practice-Questions.pdf',
  'rhode-island': 'Free-Rhode-Island-Real-Estate-Practice-Questions.pdf',
  'south-carolina': 'Free-South-Carolina-Real-Estate-Practice-Questions.pdf',
  'south-dakota': 'Free-South-Dakota-Real-Estate-Practice-Questions.pdf',
  'tennessee': 'Free-Tennessee-Real-Estate-Practice-Questions.pdf',
  'texas': 'Free-Texas-Real-Estate-Practice-Questions.pdf',
  'utah': 'Free-Utah-Real-Estate-Practice-Questions.pdf',
  'vermont': 'Free-Vermont-Real-Estate-Practice-Questions.pdf',
  'virginia': 'Free-Virginia-Real-Estate-Practice-Questions.pdf',
  'washington': 'Free-Washington-Real-Estate-Practice-Questions.pdf',
  'west-virginia': 'Free-West-Virginia-Real-Estate-Practice-Questions.pdf',
  'wisconsin': 'Free-Wisconsin-Real-Estate-Practice-Questions.pdf',
  'wyoming': 'Free-Wyoming-Real-Estate-Practice-Questions.pdf',
}

export function FreePdfPage() {
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login')
  const [searchQuery, setSearchQuery] = useState('')
  const [stateModalOpen, setStateModalOpen] = useState(false)
  const router = useRouter()

  const { user, userData, isPremium, isPremiumExpired, premiumStatus, signOut } = useAuth()

  const [savedEmail, setSavedEmail] = useState<string | null>(null)
  const [isDownloadingState, setIsDownloadingState] = useState<StateKey | null>(null)
  const [emailInput, setEmailInput] = useState('')
  const [marketingOptIn, setMarketingOptIn] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const email = localStorage.getItem('pdf_download_email')
      if (email) {
        setSavedEmail(email)
      } else if (user?.email) {
        setSavedEmail(user.email)
      }
    }
  }, [user?.email])

  const handleLogin = () => {
    setAuthMode('login')
    setAuthModalOpen(true)
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
    } else {
      router.push('/get-premium?plan=36500')
    }
  }

  const handleAuthSuccess = async (mode: 'login' | 'signup') => {
    setAuthModalOpen(false)
    if (mode === 'login' && isPremium) {
      router.push('/dashboard')
    }
  }

  const handleStateSelect = (state: StateKey) => {
    if (isPremium) {
      router.push(`/dashboard?state=${state}`)
    } else {
      if (state === 'california') {
        router.push('/california-real-estate-practice-test')
      } else if (state === 'north-carolina') {
        router.push('/north-carolina-real-estate-practice-test')
      } else if (state === 'washington') {
        router.push('/washington-real-estate-practice-test')
      } else if (state === 'texas') {
        router.push('/texas-real-estate-practice-test')
      } else {
        router.push(`/state/${state}/free`)
      }
    }
  }

  // Filter states based on search query
  const filteredStates = useMemo(() => {
    const query = searchQuery.toLowerCase().trim()
    if (!query) {
      return Object.entries(STATES) as [StateKey, typeof STATES[StateKey]][]
    }
    return (Object.entries(STATES) as [StateKey, typeof STATES[StateKey]][]).filter(
      ([key, state]) =>
        state.name.toLowerCase().includes(query) ||
        state.code.toLowerCase().includes(query) ||
        key.toLowerCase().includes(query)
    )
  }, [searchQuery])

  const getPdfUrl = (stateKey: StateKey) => {
    return `/free-real-estate-practice-questions-PDF/${PDF_FILE_NAMES[stateKey]}`
  }

  const triggerDownload = (stateKey: StateKey) => {
    const fileName = PDF_FILE_NAMES[stateKey]
    const link = document.createElement('a')
    link.href = getPdfUrl(stateKey)
    link.setAttribute('download', fileName)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleDownloadAttempt = (stateKey: StateKey) => {
    triggerDownload(stateKey)
  }

  const logDownloadToFirestore = async (email: string, stateKey: StateKey, marketing: boolean) => {
    try {
      const timestamp = new Date().toISOString()
      const docId = `download_${email.replace(/[^a-zA-Z0-9]/g, '_')}_${stateKey}_${Date.now()}`
      const downloadRef = doc(db, 'free_downloads', docId)
      await setDoc(downloadRef, {
        email,
        state: stateKey,
        marketingOptIn: marketing,
        downloadedAt: timestamp,
        source: 'free_pdf_page'
      })
    } catch (e) {
      console.error("Error logging download:", e)
    }
  }

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!emailInput || !emailInput.includes('@')) {
      setErrorMessage('Please enter a valid email address.')
      return
    }

    setIsSubmitting(true)
    setErrorMessage('')

    try {
      const stateKey = isDownloadingState
      if (stateKey) {
        await logDownloadToFirestore(emailInput, stateKey, marketingOptIn)
        localStorage.setItem('pdf_download_email', emailInput)
        setSavedEmail(emailInput)
        triggerDownload(stateKey)
      }
      setIsDownloadingState(null)
    } catch (error) {
      console.error(error)
      setErrorMessage('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
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
        onPurchaseRenewal={handleSignup}
        onSelectState={() => router.push('/')}
        showGetPremiumLink
      />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden pt-4 md:pt-8">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl animate-float will-change-transform"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl animate-float-delayed will-change-transform"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-100/20 rounded-full blur-3xl animate-float will-change-transform"></div>
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#007aff]/5 backdrop-blur-sm border border-[#007aff]/20 rounded-full px-3 md:px-4 py-2 mb-6 md:mb-8 animate-fade-in">
                <FileText className="w-4 h-4 text-[#007aff]" />
                <span className="text-xs md:text-sm font-medium text-gray-700">100% Free, No Signup Required</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                Free Real Estate Exam
                <br />
                <span className="text-[#007aff]">Practice Questions PDF</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
                Download <span className="font-semibold text-gray-700">50 free practice questions</span> for your state's Real Estate Exam.
                Updated for 2026, instant download, no signup required.
              </p>

              {/* Search Bar */}
              <div className="max-w-xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search your state (e.g., California, TX, New York)"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 md:py-5 text-base md:text-lg rounded-xl md:rounded-2xl border-2 border-gray-200 focus:border-[#007aff] focus:ring-4 focus:ring-[#007aff]/10 outline-none transition-all duration-200 shadow-lg"
                  />
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 opacity-70">
                <div className="flex items-center gap-1.5 md:gap-2">
                  <CheckCircle className="w-4 md:w-5 h-4 md:h-5 text-[#007aff] flex-shrink-0" />
                  <span className="text-xs md:text-sm text-gray-600">50 Questions Per PDF</span>
                </div>
                <div className="flex items-center gap-1.5 md:gap-2">
                  <CheckCircle className="w-4 md:w-5 h-4 md:h-5 text-[#007aff] flex-shrink-0" />
                  <span className="text-xs md:text-sm text-gray-600">Answer Key Included</span>
                </div>
                <div className="flex items-center gap-1.5 md:gap-2">
                  <CheckCircle className="w-4 md:w-5 h-4 md:h-5 text-[#007aff] flex-shrink-0" />
                  <span className="text-xs md:text-sm text-gray-600">No Signup Required</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* States Grid Section */}
        <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50/50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-10 md:mb-12">
                <div className="inline-flex items-center gap-1.5 bg-[#007aff]/10 border border-[#007aff]/20 rounded-full px-4 py-1.5 mb-4 animate-fade-in">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#007aff] animate-pulse"></span>
                  <span className="text-[10px] md:text-xs font-semibold text-[#007aff] tracking-wider uppercase">
                    Updated for 2026
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {searchQuery ? `Results for "${searchQuery}"` : 'Download Free Practice Questions'}
                </h2>
                <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
                  {filteredStates.length === 0
                    ? 'No states found. Try a different search.'
                    : 'Print-ready, state-specific practice tests with complete answer keys. Ready for instant offline study.'}
                </p>
              </div>

              {/* States Grid */}
              {filteredStates.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  {filteredStates
                    .sort(([, a], [, b]) => a.name.localeCompare(b.name))
                    .map(([stateKey, stateData]) => (
                      <button
                        key={stateKey}
                        type="button"
                        onClick={() => handleDownloadAttempt(stateKey)}
                        className="bg-white rounded-[2rem] p-6 border border-gray-150 shadow-sm hover:shadow-xl transition-all duration-300 flex items-center justify-between text-left w-full group hover:border-[#007aff]/35 animate-fade-in"
                      >
                        <div className="space-y-1">
                          <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#007aff] transition-colors leading-tight">
                            {stateData.name}
                          </h3>
                          <div className="flex items-center gap-1.5 text-xs text-gray-500 font-bold">
                            <Download className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#007aff] transition-colors" />
                            <span>50 Questions</span>
                          </div>
                        </div>
                        <div className="w-12 h-12 bg-blue-50/50 border border-blue-100/60 rounded-2xl flex items-center justify-center text-[#007aff] group-hover:bg-[#007aff] group-hover:text-white transition-all flex-shrink-0">
                          <FileText className="w-6 h-6" />
                        </div>
                      </button>
                    ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🔍</div>
                  <p className="text-gray-600 text-lg">No states match your search.</p>
                  <Button
                    onClick={() => setSearchQuery('')}
                    variant="outline"
                    className="mt-4"
                  >
                    Clear Search
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Why Download Section */}
        <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-blue-50/30 to-emerald-50/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12 md:mb-16">
                <div className="inline-block bg-[#007aff]/10 border border-[#007aff]/20 rounded-full px-4 md:px-6 py-2 mb-4 md:mb-6">
                  <span className="text-xs md:text-sm font-medium text-[#007aff]">
                    What's Included
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
                  Why Download Our Free PDF?
                </h2>
                <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                  Get a head start on your Real Estate Exam with our carefully curated practice questions.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 text-center">
                  <div className="w-14 h-14 bg-[#007aff] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <FileText className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">50 Real Questions</h3>
                  <p className="text-gray-600 text-sm">Practice with actual Real Estate-style questions covering agency, contracts, finance, and property ownership.</p>
                </div>

                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 text-center">
                  <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <CheckCircle className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Complete Answer Key</h3>
                  <p className="text-gray-600 text-sm">Check your answers and learn from mistakes with the included answer key.</p>
                </div>

                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 text-center">
                  <div className="w-14 h-14 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Star className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">State-Specific</h3>
                  <p className="text-gray-600 text-sm">Questions tailored to your state's specific Real Estate licensing laws and requirements.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 lg:py-24 bg-[#007aff] relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/15 rounded-full blur-2xl"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
                Ready to Practice?
              </h2>
              <p className="text-white/80 text-base md:text-lg mb-8 max-w-2xl mx-auto">
                Start practicing with interactive questions, get instant feedback, and track your progress towards passing your Real Estate Exam.
              </p>
              <Button
                onClick={() => setStateModalOpen(true)}
                size="lg"
                className="group bg-white text-[#007aff] hover:bg-gray-100 font-semibold px-8 md:px-12 py-4 md:py-6 text-base md:text-lg rounded-xl md:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Start Practice Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-white/60 text-sm mt-4">Free practice available for all states</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10 md:mb-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-4">
                <details className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100 group">
                  <summary className="font-bold text-gray-900 cursor-pointer text-base md:text-lg flex items-center justify-between group-hover:text-[#007aff] transition-colors">
                    Are these PDFs really free?
                    <svg className="w-5 h-5 transform transition-transform group-open:rotate-180 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="mt-4 text-gray-700 text-sm md:text-base leading-relaxed">
                    Yes, all our state-specific PDF practice tests are completely free to download. No signup, no credit card, no catch. We want to help everyone prepare for their Real Estate Exam.
                  </p>
                </details>

                <details className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100 group">
                  <summary className="font-bold text-gray-900 cursor-pointer text-base md:text-lg flex items-center justify-between group-hover:text-[#007aff] transition-colors">
                    How many questions are in each PDF?
                    <svg className="w-5 h-5 transform transition-transform group-open:rotate-180 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="mt-4 text-gray-700 text-sm md:text-base leading-relaxed">
                    Each state PDF contains 50 practice questions covering state-specific real estate laws, rules, and national math principles specific to your state. An answer key is included at the end.
                  </p>
                </details>

                <details className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100 group">
                  <summary className="font-bold text-gray-900 cursor-pointer text-base md:text-lg flex items-center justify-between group-hover:text-[#007aff] transition-colors">
                    Are the questions updated for 2026?
                    <svg className="w-5 h-5 transform transition-transform group-open:rotate-180 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="mt-4 text-gray-700 text-sm md:text-base leading-relaxed">
                    Yes! Our practice questions are regularly updated to reflect the latest Real Estate handbook changes and licensing laws for 2026. We review and update content whenever state regulations change.
                  </p>
                </details>

                <details className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100 group">
                  <summary className="font-bold text-gray-900 cursor-pointer text-base md:text-lg flex items-center justify-between group-hover:text-[#007aff] transition-colors">
                    What's the difference between free PDF and Premium?
                    <svg className="w-5 h-5 transform transition-transform group-open:rotate-180 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="mt-4 text-gray-700 text-sm md:text-base leading-relaxed">
                    The free PDF gives you 50 practice questions with answers. Premium gives you access to hundreds of questions with detailed explanations, interactive practice mode, full mock tests, progress tracking, and a pass guarantee.
                  </p>
                </details>
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
        onSwitchMode={(mode: 'login' | 'signup') => setAuthMode(mode)}
        onSuccess={handleAuthSuccess}
        closeOnSuccess={true}
        onGetPremium={() => router.push('/get-premium?plan=36500')}
      />

      <StateSelectorModal
        isOpen={stateModalOpen}
        onClose={() => setStateModalOpen(false)}
        onStateSelect={handleStateSelect}
      />

      {isDownloadingState && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300">
          <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden transform transition-all duration-300 scale-100">
            
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsDownloadingState(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-50 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Body */}
            <div className="p-6 md:p-8">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                <FileText className="w-6 h-6 text-[#007aff]" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Download Free PDF Practice Test
              </h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                Enter your email to receive your print-ready copy of the{' '}
                <span className="font-semibold text-slate-800">
                  {STATES[isDownloadingState].name} {isDownloadingState === 'north-dakota' || isDownloadingState === 'wisconsin' || isDownloadingState === 'wyoming' || isDownloadingState === 'iowa' ? 'DOT' : 'Real Estate'} Practice Test
                </span>{' '}
                and access offline.
              </p>

              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#007aff]/20 focus:border-[#007aff] transition-all text-slate-900"
                    autoFocus
                  />
                </div>

                {errorMessage && (
                  <p className="text-red-500 text-xs font-semibold">{errorMessage}</p>
                )}



                <div className="flex gap-3 pt-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsDownloadingState(null)}
                    className="flex-1 py-3.5 rounded-2xl font-medium text-slate-600 border-slate-200 hover:bg-slate-50"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-3.5 rounded-2xl bg-[#007aff] text-white hover:bg-[#0056cc] font-semibold flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4" />
                        <span>Download PDF</span>
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

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
    </div>
  )
}
