'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import {
    ChevronRight,
    Download,
    Crown,
    ZoomIn,
    ZoomOut,
    Loader2,
    Link2,
    ClipboardList,
    FileText,
    Map,
    TriangleAlert,
    Scale,
    BookOpenCheck,
    Lightbulb,
    Smartphone,
    GraduationCap,
    Headphones
} from 'lucide-react'
import { useAuth } from '@/contexts/auth-context'
import { AuthModal } from '@/components/auth/auth-modal'
import { StateSelectorModal } from '@/components/state-selector-modal'
import { FlashSaleBanner } from '@/components/flash-sale-banner'
import { StateKey, STATES } from '@/lib/constants'
import { getStateData } from '@/lib/utils/getStateData'
import dynamic from 'next/dynamic'

// Dynamically import PDF Renderer to avoid SSR issues
const PdfRenderer = dynamic(() => import('./pdf-renderer'), {
    ssr: false,
    loading: () => (
        <div className="flex items-center justify-center h-[800px] bg-gray-100">
            <Loader2 className="w-10 h-10 animate-spin text-gray-400" />
        </div>
    ),
})

import { HandbookLanguage } from '@/lib/data/handbooks'

interface HandbookViewerProps {
    state: StateKey
    stateName: string
    departmentName: string
    pdfUrl: string
    languages?: HandbookLanguage[]
    summaryUrl?: string | null
    isCdl?: boolean
}

export function HandbookViewer({ state, stateName, departmentName, pdfUrl, languages, summaryUrl, isCdl = false }: HandbookViewerProps) {
    const [authModalOpen, setAuthModalOpen] = useState(false)
    const [authMode, setAuthMode] = useState<'login' | 'signup'>('login')
    const [showBanner, setShowBanner] = useState(true)
    const [stateModalOpen, setStateModalOpen] = useState(false)
    const [showAllLinks, setShowAllLinks] = useState(false)

    // Language State
    const [currentPdf, setCurrentPdf] = useState(pdfUrl)
    const [currentLanguage, setCurrentLanguage] = useState(languages?.[0]?.code || 'en')

    // Update current PDF if prop changes (e.g. from page navigation)
    useEffect(() => {
        setCurrentPdf(pdfUrl)
        if (languages?.length) {
            // Find language matching the PDF if possible, or default to first
            const matchingLang = languages.find(l => l.pdf === pdfUrl)
            if (matchingLang) {
                setCurrentLanguage(matchingLang.code)
            }
        }
    }, [pdfUrl, languages])

    // PDF State
    const [numPages, setNumPages] = useState<number | null>(null)
    const [scale, setScale] = useState(1.0)
    const [pageWidth, setPageWidth] = useState(800) // Default width
    const scrollContainerRef = useRef<HTMLDivElement>(null)
    const [isLoading, setIsLoading] = useState(true)

    const router = useRouter()
    const {
        user,
        userData,
        isPremium,
        isPremiumExpired,
        premiumStatus,
        signOut,
        loading: authLoading,
        isCdlPremium,
        isCdlPremiumExpired,
        cdlPremiumStatus
    } = useAuth()

    const activePremium = isCdl ? isCdlPremium : isPremium
    const activePremiumExpired = isCdl ? isCdlPremiumExpired : isPremiumExpired
    const activePremiumStatus = isCdl ? cdlPremiumStatus : premiumStatus

    const stateData = getStateData(state)
    const questionCount = Math.floor(stateData.pricing.premiumQuestions / 50) * 50
    const stateCode = STATES[state].code

    // Responsive PDF sizing
    useEffect(() => {
        function onResize() {
            if (scrollContainerRef.current) {
                setPageWidth(scrollContainerRef.current.clientWidth - 40); // 40px padding
            }
        }

        window.addEventListener('resize', onResize);
        // Small timeout to ensure container is rendered
        setTimeout(onResize, 100);

        return () => window.removeEventListener('resize', onResize);
    }, []);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages);
        setIsLoading(false);
    }

    const handleLogin = () => {
        setAuthMode('login')
        setAuthModalOpen(true)
    }

    const handleSignup = () => {
        setAuthMode('signup')
        setAuthModalOpen(true)
    }

    const handleLogout = async () => {
        await signOut()
    }

    const handleDashboard = () => {
        if (activePremium) {
            router.push('/dashboard')
        } else {
            router.push(isCdl ? '/get-premium?plan=90&cdl=true' : '/get-premium?plan=36500')
        }
    }

    const handlePurchaseRenewal = () => {
        router.push(isCdl ? '/get-premium?plan=90&cdl=true' : '/get-premium?plan=36500')
    }

    const scrollToPremium = () => {
        router.push(isCdl ? '/get-premium?plan=90&cdl=true' : '/get-premium?plan=36500')
    }

    const handleHeaderPremiumClick = () => {
        router.push(isCdl ? '/cdl-premium' : '/real-estate-premium')
    }

    const handleAuthSuccess = async (mode: 'login' | 'signup') => {
        setAuthModalOpen(false)
        if (mode === 'login' && activePremium) {
            router.push('/dashboard')
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
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
                    isPremium={activePremium}
                    isPremiumExpired={activePremiumExpired}
                    premiumStatus={activePremiumStatus}
                    onLogin={handleLogin}
                    onSignup={handleSignup}
                    onLogout={handleLogout}
                    onDashboard={handleDashboard}
                    onPurchaseRenewal={handlePurchaseRenewal}
                    premiumButtonText="Get Premium"
                    premiumButtonAction={handleHeaderPremiumClick}
                    isLoading={authLoading}
                    onSelectState={() => setStateModalOpen(true)}
                    hideGetPremiumButton={isCdl}
                    currentLicenseType={isCdl ? 'cdl' : 'car'}
                    hideLicenseSwitcher={true}
                />
            </div>

            {/* Breadcrumbs */}
            <div className="bg-white border-b border-gray-100 py-3">
                <div className="container mx-auto px-4">
                    <div className="flex items-center text-sm text-gray-600">
                        <Link href="/" className="hover:text-[#007aff] transition-colors">
                            Home
                        </Link>
                        {isCdl ? (
                            <>
                                <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
                                <Link href="/#states" className="hover:text-[#007aff] transition-colors">
                                    States
                                </Link>
                                <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
                                <Link href={`/${state}-cdl-permit-test`} className="hover:text-[#007aff] transition-colors">
                                    {stateName}
                                </Link>
                            </>
                        ) : (
                            <>
                                <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
                                <Link href="/#states" className="hover:text-[#007aff] transition-colors">
                                    States
                                </Link>
                                <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
                                <Link href={`/state/${state}/free`} className="hover:text-[#007aff] transition-colors">
                                    {stateName}
                                </Link>
                            </>
                        )}
                        <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
                        <span className="text-gray-900 font-medium">
                            {isCdl ? 'Handbook' : `${departmentName} Handbook`}
                        </span>
                    </div>
                </div>
            </div>

            <main className="flex-grow container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full">

                    {/* Main Content (PDF Viewer) */}
                    <div className="lg:col-span-9 flex flex-col h-full">
                        <div className="mb-6">
                            <Link
                                href={isCdl ? `/${state}-cdl-permit-test` : `/${state}-${departmentName.toLowerCase()}-permit-test`}
                                className="inline-flex items-center gap-1 text-sm text-[#007aff] hover:text-[#0056cc] transition-colors mb-3"
                            >
                                <ChevronRight className="w-3.5 h-3.5 rotate-180" />
                                Back to Practice Tests
                            </Link>
                            <h1 className="text-[22px] md:text-[26px] font-extrabold text-gray-900 mb-3">
                                {isCdl
                                    ? `${stateName} ${departmentName} Handbook 2026`
                                    : `${stateName} ${departmentName} Handbook (${stateCode} Driver's Manual) 2026`
                                }
                            </h1>
                            <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed max-w-none mb-3">
                                Prepare for the {stateName} real estate exam with the official driver&apos;s manual. Master {departmentName} traffic laws, road signs, and safe driving rules directly from the source. This is your essential study guide for passing the written exam on your first try.
                            </p>
                            {!isCdl && summaryUrl && (
                                <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed max-w-none">
                                    Don&apos;t like reading this long and boring manual?{' '}
                                    <Link
                                        href={summaryUrl}
                                        className="text-[#007aff] font-medium relative inline-block group"
                                    >
                                        Read a summary of the {departmentName} handbook
                                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#007aff] transition-all duration-300 group-hover:w-full"></span>
                                    </Link>
                                </p>
                            )}

                        </div>

                        {/* PDF Viewer */}
                        <div className="flex flex-col bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex-grow min-h-[500px] lg:min-h-[800px]">
                            {/* Controls Bar */}
                            <div className="bg-gray-50 border-b border-gray-200 px-4 py-2.5 flex items-center justify-between sticky top-0 z-10">
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-1">
                                        <Button
                                            variant="ghost" size="icon"
                                            onClick={() => setScale(s => Math.max(0.5, s - 0.1))}
                                            className="h-8 w-8"
                                        >
                                            <ZoomOut className="w-4 h-4" />
                                        </Button>
                                        <span className="text-sm w-12 text-center font-medium text-gray-600">{Math.round(scale * 100)}%</span>
                                        <Button
                                            variant="ghost" size="icon"
                                            onClick={() => setScale(s => Math.min(2.0, s + 0.1))}
                                            className="h-8 w-8"
                                        >
                                            <ZoomIn className="w-4 h-4" />
                                        </Button>
                                    </div>

                                    {languages && languages.length > 0 && (
                                        <div className="flex items-center gap-2 border-l border-gray-200 pl-4">
                                            <span className="text-sm font-medium text-gray-500">Language:</span>
                                            <select
                                                className="h-8 text-sm border-gray-200 rounded-md bg-white focus:ring-[#007aff] focus:border-[#007aff]"
                                                value={currentLanguage}
                                                onChange={(e) => {
                                                    const lang = languages.find(l => l.code === e.target.value)
                                                    if (lang) {
                                                        setCurrentLanguage(lang.code)
                                                        setCurrentPdf(lang.pdf)
                                                    }
                                                }}
                                            >
                                                {languages.map((lang) => (
                                                    <option key={lang.code} value={lang.code}>
                                                        {lang.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    )}
                                </div>

                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="h-8 gap-1.5 font-medium border-[#007aff] text-[#007aff] hover:bg-blue-50 hover:text-[#007aff]"
                                    onClick={() => {
                                        const link = document.createElement('a')
                                        link.href = currentPdf
                                        link.download = currentPdf.split('/').pop() || 'handbook.pdf'
                                        document.body.appendChild(link)
                                        link.click()
                                        document.body.removeChild(link)
                                    }}
                                >
                                    <Download className="w-3.5 h-3.5" />
                                    <span className="hidden sm:inline">Download PDF</span>
                                    <span className="sm:hidden">Download</span>
                                </Button>
                            </div>

                            {/* PDF Canvas */}
                            <div className="flex-grow bg-gray-100 overflow-auto flex justify-center p-4 relative" ref={scrollContainerRef}>
                                <PdfRenderer
                                    key={currentPdf} // Force re-render on PDF change
                                    url={currentPdf}
                                    numPages={numPages}
                                    scale={scale}
                                    width={pageWidth}
                                    onLoadSuccess={onDocumentLoadSuccess}
                                />
                            </div>
                        </div>

                    </div>

                    {/* Sidebar (Ads/Upsell) */}
                    <div className="hidden lg:block lg:col-span-3 space-y-3">

                        {/* 1. Ready to test? CTA Card */}
                        <Link
                            href={isCdl ? `/${state}-cdl-permit-test` : `/${state}-${departmentName.toLowerCase()}-permit-test`}
                            className="bg-gradient-to-br from-blue-600 to-[#007aff] hover:from-blue-700 hover:to-[#0056cc] transition-all duration-300 shadow-sm hover:shadow-md text-white rounded-xl p-4 block group"
                        >
                            <div className="text-[11px] font-semibold text-blue-100 uppercase tracking-wider mb-0.5">
                                Ready to test what you just learned?
                            </div>
                            <div className="font-bold text-[15px] md:text-[16px] flex items-center gap-1.5 group-hover:translate-x-1 transition-transform duration-300">
                                Take the {stateCode} permit practice test
                                <ChevronRight className="w-4 h-4 shrink-0" />
                            </div>
                        </Link>

                        {/* 1.5 Listen to Audio Handbook CTA Card */}
                        {!isCdl && (
                            <Link
                                href={`/handbooks/${state}/audio`}
                                className="bg-gradient-to-br from-[#1c1c1e] to-[#2c2c2e] hover:from-[#2c2c2e] hover:to-[#3a3a3c] transition-all duration-300 shadow-sm hover:shadow-md text-white rounded-xl p-4 block group border border-gray-800"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-[#007aff]/15 flex items-center justify-center text-[#007aff]">
                                        <Headphones className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                    </div>
                                    <div>
                                        <div className="text-[11px] font-semibold text-blue-400 uppercase tracking-wider mb-0.5">
                                            Prefer Listening?
                                        </div>
                                        <div className="font-bold text-[14px] flex items-center gap-1">
                                            Listen to Audio version
                                            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )}

                        {/* Non-CDL Practice & Links */}
                        {!isCdl && (() => {
                            const STATE_GUIDE_STATES = new Set<StateKey>([
                                'north-carolina', 'illinois', 'virginia', 'washington', 'ohio',
                                'arkansas', 'iowa', 'new-york', 'michigan', 'arizona',
                                'massachusetts', 'kentucky', 'maryland', 'texas', 'pennsylvania',
                                'nebraska', 'tennessee', 'idaho', 'nevada', 'california', 'oregon',
                            ])

                            const stateExtraLinks: Partial<Record<StateKey, Array<{ href: string; label: string }>>> = {
                                california: [
                                    { href: '/california-right-of-way-rules-permit-test-practice', label: 'Right of Way Rules' },
                                    { href: '/california-fines-limits-permit-test-practice', label: 'Fines & Limits' },
                                ],
                                ohio: [
                                    { href: '/ohio-right-of-way-rules-permit-test-practice', label: 'Right of Way Rules' },
                                    { href: '/ohio-fines-limits-permit-test-practice', label: 'Fines & Limits' },
                                    { href: '/ohio-distracted-driving-permit-test-practice', label: 'Distracted Driving' },
                                    { href: '/ohio-teens-permit-test', label: 'Teens GDL Guide' },
                                ],
                            }

                            const hasStateGuide = STATE_GUIDE_STATES.has(state)
                            const extraLinks = stateExtraLinks[state] ?? []

                            const links: Array<{ href: string; label: string }> = []

                            if (summaryUrl) {
                                links.push({ href: summaryUrl, label: `${stateCode} ${departmentName} Handbook Summary` })
                            }
                            if (hasStateGuide) {
                                links.push({ href: `/state-guides/${state}`, label: `${stateCode} State Guide` })
                            }
                            
                            links.push({ href: '/driving-test-concepts', label: 'Driving Test Concepts' })
                            links.push({ href: '/driving-test-concepts/signs-and-signals', label: 'Signs & Signals' })
                            
                            links.push(...extraLinks)

                            const visibleLinks = showAllLinks ? links : links.slice(0, 4)

                            return (
                                <>
                                    {/* 2. More CA permit practice */}
                                    <div className="bg-gray-100 rounded-xl p-4">
                                        <h3 className="font-bold text-gray-900 text-[14px] mb-2">
                                            More {stateCode} permit practice
                                        </h3>
                                        <div className="flex flex-col gap-1.5">
                                            <Link href={`/state/${state}/practice/free/1`} className="text-sm font-medium text-[#007aff] hover:text-[#0056cc] hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-[#007aff] transition-colors">
                                                {stateCode} Practice Test 1
                                            </Link>
                                            <Link href={`/state/${state}/practice/free/2`} className="text-sm font-medium text-[#007aff] hover:text-[#0056cc] hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-[#007aff] transition-colors">
                                                {stateCode} Practice Test 2
                                            </Link>
                                            <Link href={`/state/${state}/practice/free/3`} className="text-sm font-medium text-[#007aff] hover:text-[#0056cc] hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-[#007aff] transition-colors">
                                                {stateCode} Practice Test 3
                                            </Link>
                                        </div>
                                    </div>

                                    {/* 3. Helpful links */}
                                    <div className="bg-gray-100 rounded-xl p-4">
                                        <h3 className="font-bold text-gray-900 text-[14px] mb-2">
                                            Helpful links
                                        </h3>
                                        <div className="flex flex-col gap-1.5">
                                            {visibleLinks.map(({ href, label }) => (
                                                <Link
                                                    key={href}
                                                    href={href}
                                                    className="text-sm font-medium text-[#007aff] hover:text-[#0056cc] hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-[#007aff] transition-colors"
                                                >
                                                    {label}
                                                </Link>
                                            ))}
                                            {links.length > 4 && (
                                                <button
                                                    onClick={() => setShowAllLinks(!showAllLinks)}
                                                    className="text-gray-500 hover:text-gray-800 text-sm font-semibold flex items-center gap-1 mt-0.5 transition-colors self-start"
                                                >
                                                    {showAllLinks ? 'Show less' : 'Show more'}
                                                    <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-200 ${showAllLinks ? '-rotate-90' : 'rotate-90'}`} />
                                                </button>
                                            )}
                                        </div>
                                    </div>

                                    {/* 4. More from California */}
                                    <div className="bg-gray-100 rounded-xl p-4">
                                        <h3 className="font-bold text-gray-900 text-[14px] mb-2">
                                            More from {stateName}
                                        </h3>
                                        <div className="flex flex-col gap-1.5">
                                            <Link href={`/${state}-cdl-permit-test`} className="text-sm font-medium text-[#007aff] hover:text-[#0056cc] hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-[#007aff] transition-colors flex items-center justify-between group">
                                                <span>Looking for CDL?</span>
                                                <span className="font-semibold text-xs shrink-0 bg-blue-50 text-[#007aff] px-2 py-0.5 rounded transition-colors">
                                                    CDL Practice Test &rarr;
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </>
                            )
                        })()}

                        {/* 6. Premium Prep Card (Sticky at bottom) */}
                        <div className="bg-gray-100 rounded-xl p-4 sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto scrollbar-none">
                            <div className="flex items-center gap-1.5 mb-3 text-[#007aff]">
                                <Crown className="w-4 h-4" />
                                <span className="font-bold uppercase text-xs tracking-wider">Premium Prep</span>
                            </div>

                            <h3 className="text-lg font-bold text-gray-900 mb-1.5">
                                Pass Your Test First Try
                            </h3>
                            <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                                {isCdl
                                    ? "Don't rely on the handbook alone. Get 2,500+ exam-like questions, detailed explanations, and our pass guarantee."
                                    : `Don't rely on the handbook alone. Get ${questionCount}+ exam-like questions, detailed explanations, and our pass guarantee.`
                                }
                            </p>

                            <ul className="space-y-2 mb-3">
                                {isCdl ? (
                                    <>
                                        <li className="flex items-start gap-2 text-xs text-gray-700 leading-relaxed">
                                            <div className="w-4 h-4 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                                            <span>2,500+ state-specific CDL questions</span>
                                        </li>
                                        <li className="flex items-start gap-2 text-xs text-gray-700 leading-relaxed">
                                            <div className="w-4 h-4 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                                            <span>Realistic CDL-style Mock Exams</span>
                                        </li>
                                        <li className="flex items-start gap-2 text-xs text-gray-700 leading-relaxed">
                                            <div className="w-4 h-4 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                                            <span>Class A/B core & all endorsements</span>
                                        </li>
                                        <li className="flex items-start gap-2 text-xs text-gray-700 leading-relaxed">
                                            <div className="w-4 h-4 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                                            <span>Pre-Trip inspection checklist guide</span>
                                        </li>
                                        <li className="flex items-start gap-2 text-xs text-emerald-850 font-semibold leading-relaxed">
                                            <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                                            <span>100% Pass Guarantee & Refund Policy</span>
                                        </li>
                                        <li className="flex items-start gap-2 text-xs text-gray-700 leading-relaxed">
                                            <div className="w-4 h-4 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                                            <span>Progress tracking & passing probability</span>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li className="flex items-start gap-2 text-xs text-gray-700 leading-relaxed">
                                            <div className="w-4 h-4 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                                            <span>{questionCount}+ Practice Questions</span>
                                        </li>
                                        <li className="flex items-start gap-2 text-xs text-gray-700 leading-relaxed">
                                            <div className="w-4 h-4 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                                            <span>Full refund if you don't pass</span>
                                        </li>
                                        <li className="flex items-start gap-2 text-xs text-gray-700 leading-relaxed">
                                            <div className="w-4 h-4 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                                            <span>Exam Mode Simulator</span>
                                        </li>
                                        <li className="flex items-start gap-2 text-xs text-gray-700 leading-relaxed">
                                            <div className="w-4 h-4 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                                            <span>2 Cheat Sheet PDFs Included</span>
                                        </li>
                                        <li className="flex items-start gap-2 text-xs text-gray-700 leading-relaxed">
                                            <div className="w-4 h-4 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                                            <span>98% Pass Rate</span>
                                        </li>
                                    </>
                                )}
                            </ul>

                            <Button
                                onClick={() => router.push(isCdl ? '/get-premium?plan=90&cdl=true' : '/get-premium')}
                                size="lg"
                                className="w-full bg-[#007aff] hover:bg-[#0056cc] h-9 text-xs font-semibold rounded-xl transition-all duration-300 border-0"
                            >
                                {isCdl ? 'All access pass - 90 days' : 'Get Premium Access'}
                            </Button>

                            <div className="mt-3 pt-3 border-t border-gray-100 text-center">
                                <Link href={isCdl ? `/${state}-cdl-permit-test` : `/state/${state}/free`} className="text-xs text-gray-500 hover:text-[#007aff] hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-[#007aff] transition-colors">
                                    Try Free Practice Test
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            <Footer />

            <AuthModal
                isOpen={authModalOpen}
                onClose={() => setAuthModalOpen(false)}
                mode={authMode}
                onSwitchMode={(mode: 'login' | 'signup') => setAuthMode(mode)}
                onSuccess={handleAuthSuccess}
                closeOnSuccess={true}
                onGetPremium={() => router.push(isCdl ? '/get-premium?plan=90&cdl=true' : '/get-premium?plan=36500')}
            />

            <StateSelectorModal
                isOpen={stateModalOpen}
                onClose={() => setStateModalOpen(false)}
                onStateSelect={(state) => router.push(`/state/${state}/free`)}
            />
        </div>
    )
}
