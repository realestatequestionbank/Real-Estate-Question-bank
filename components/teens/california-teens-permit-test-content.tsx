'use client'

import React, { useState, useRef } from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { useAuth } from '@/contexts/auth-context'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle2, ChevronRight, Shield, Crown, CheckCircle, Map, BookOpen, FileText, TrafficCone, AlertTriangle, GraduationCap, Car, Lock, Mail, MessageSquare } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { StateHubsSection } from '@/components/state-hubs-section'
import { formatOfferExpiryDate, getEffectivePricing } from '@/lib/constants'
import { AuthModal } from '@/components/auth/auth-modal'
import { PurchaseRenewalDialog } from '@/components/purchase-renewal-dialog'

const currentYear = new Date().getFullYear()

const FREE_GLOW = '0,122,255'
const PREM_GLOW = '124,58,237'

const PREP_STEPS: { title: string; desc: string; icon: React.ElementType; color: string; bg: string; glowRgb: string; badge?: string; link?: string; links?: { label: string; href: string }[]; buttonLabel?: string }[] = [
    { title: 'CA Study Guide', desc: 'Get a broad overview of the requirements and state laws.', icon: Map, color: 'text-[#007aff]', bg: 'bg-[#007aff]/10', glowRgb: FREE_GLOW, link: '/state-guides/california', buttonLabel: 'View Guide' },
    { title: 'The Quick Read', desc: 'Read the official Real Estate handbook or our condensed cheat sheets.', icon: BookOpen, color: 'text-amber-500', bg: 'bg-amber-50', glowRgb: '245,158,11', links: [{ label: 'Read Handbook', href: '/handbooks/california' }, { label: 'View Summary', href: '/california-real-estate-handbook-summary' }] },
    { title: 'Free Practice Questions', desc: 'Take a mixed practice test covering 50 free questions.', icon: CheckCircle, color: 'text-indigo-500', bg: 'bg-indigo-50', glowRgb: '99,102,241', link: '/california-real-estate-practice-test', buttonLabel: 'Practice' },
    { title: 'Full Question Bank', badge: 'PREMIUM', desc: '500+ CA Real Estate questions organized by chapters.', icon: Crown, color: 'text-violet-600', bg: 'bg-violet-50', glowRgb: PREM_GLOW, link: '#premium-section', buttonLabel: 'Unlock Premium' },
    { title: 'Road Signs Guide', badge: 'PREMIUM', desc: 'Download our comprehensive visual signs guide pdf.', icon: FileText, color: 'text-pink-500', bg: 'bg-pink-50', glowRgb: '236,72,153', link: '#premium-section', buttonLabel: 'Unlock Premium' },
    { title: 'Real CA Mock Test', badge: 'PREMIUM', desc: 'Simulate the exact conditions of the actual Real Estate exam.', icon: Crown, color: 'text-fuchsia-500', bg: 'bg-fuchsia-50', glowRgb: '217,70,239', link: '#premium-section', buttonLabel: 'Unlock Premium' },
    { title: 'Pass the Test!', desc: 'Walk into the Real Estate with confidence and pass on your very first try.', icon: GraduationCap, color: 'text-green-600', bg: 'bg-green-100', glowRgb: '22,163,74' },
]

export function CaliforniaTeensPermitTestContent() {
    const { user, userData, isPremium, signOut, premiumStatus } = useAuth()
    const router = useRouter()

    const effectivePricing = getEffectivePricing()
    const calcDiscount = (original: number, discounted: number) =>
        Math.round(((original - discounted) / original) * 100);

    const pricingPlans = {
        sevenDay: {
            duration: 7,
            name: '7-Day Plan',
            originalPrice: `$${effectivePricing.PLANS.SEVEN_DAY.originalPrice}`,
            discountedPrice: `$${effectivePricing.PLANS.SEVEN_DAY.discountedPrice}`,
            badge: effectivePricing.PLANS.SEVEN_DAY.originalPrice > effectivePricing.PLANS.SEVEN_DAY.discountedPrice
                ? `${calcDiscount(effectivePricing.PLANS.SEVEN_DAY.originalPrice, effectivePricing.PLANS.SEVEN_DAY.discountedPrice)}% OFF`
                : undefined
        },
        thirtyDay: {
            duration: 30,
            name: '30-Day Plan',
            originalPrice: `$${effectivePricing.PLANS.THIRTY_DAY.originalPrice}`,
            discountedPrice: `$${effectivePricing.PLANS.THIRTY_DAY.discountedPrice}`,
            badge: effectivePricing.PLANS.THIRTY_DAY.originalPrice > effectivePricing.PLANS.THIRTY_DAY.discountedPrice
                ? `${calcDiscount(effectivePricing.PLANS.THIRTY_DAY.originalPrice, effectivePricing.PLANS.THIRTY_DAY.discountedPrice)}% OFF`
                : undefined
        },
        lifetime: {
            duration: 36500,
            name: 'Lifetime Plan',
            originalPrice: `$${effectivePricing.PLANS.LIFETIME.originalPrice}`,
            discountedPrice: `$${effectivePricing.PLANS.LIFETIME.discountedPrice}`,
            badge: effectivePricing.PLANS.LIFETIME.originalPrice > effectivePricing.PLANS.LIFETIME.discountedPrice
                ? `${calcDiscount(effectivePricing.PLANS.LIFETIME.originalPrice, effectivePricing.PLANS.LIFETIME.discountedPrice)}% OFF`
                : undefined
        }
    }

    const [selectedDuration, setSelectedDuration] = useState<7 | 30 | 36500>(7)
    const [authModalOpen, setAuthModalOpen] = useState(false)
    const [authMode, setAuthMode] = useState<'login' | 'signup'>('signup')
    const [isPremiumLogin, setIsPremiumLogin] = useState(false)
    const [isRedirecting, setIsRedirecting] = useState(false)
    const [showPurchaseModal, setShowPurchaseModal] = useState(false)
    const [purchaseLoading, setPurchaseLoading] = useState(false)
    const planScrollRef = useRef<HTMLDivElement>(null)

    const handleLogin = () => {
        setAuthMode('login')
        setAuthModalOpen(true)
    }

    const handleSignup = () => {
        setAuthMode('signup')
        setAuthModalOpen(true)
    }

    const handleLogout = async () => await signOut()
    const handleDashboard = () => router.push('/dashboard')

    const createCheckoutSession = async (userId: string, duration: number = 36500) => {
        try {
            const response = await fetch('/api/create-checkout-session', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId, state: 'california', duration }),
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

    const handleUpgradePremium = (duration: 7 | 30 | 36500) => {
        setSelectedDuration(duration)
        if (!user) {
            setIsPremiumLogin(true)
            setAuthMode('signup')
            setAuthModalOpen(true)
        } else if (!isPremium) {
            setShowPurchaseModal(true)
        } else if (premiumStatus === 'expired') {
            setShowPurchaseModal(true)
        } else {
            router.push('/dashboard')
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

    const handleAuthSuccess = async (mode: 'login' | 'signup', result?: any) => {
        if (isPremiumLogin && mode === 'signup' && result?.user) {
            setIsRedirecting(true)
            await createCheckoutSession(result.user.uid, selectedDuration)
        } else {
            setAuthModalOpen(false)
            if (isPremiumLogin && mode === 'login') {
                // show purchase modal if they logged in
                if (!isPremium || premiumStatus === 'expired') {
                    setShowPurchaseModal(true)
                } else {
                    router.push('/dashboard')
                }
            }
        }
    }

    const handlePlanScroll = () => {
        if (!planScrollRef.current) return
        const scrollPosition = planScrollRef.current.scrollLeft
        const width = planScrollRef.current.clientWidth
        const index = Math.round(scrollPosition / width)
        if (index === 0) setSelectedDuration(7)
        else if (index === 1) setSelectedDuration(30)
        else if (index === 2) setSelectedDuration(36500)
    }

    return (
        <div className="min-h-screen bg-white font-sans">
            <Navigation
                user={user}
                userData={userData}
                isPremium={isPremium}
                onLogin={handleLogin}
                onSignup={handleSignup}
                onLogout={handleLogout}
                onDashboard={handleDashboard}
                showGetPremiumLink
            />

            <main>
                {/* Breadcrumbs */}
                <div className="bg-gray-50 border-b border-gray-100">
                    <div className="container mx-auto px-4 py-3">
                        <nav className="flex items-center gap-2 text-sm text-gray-500 overflow-x-auto whitespace-nowrap scrollbar-hide">
                            <Link href="/" className="hover:text-[#007aff] transition-colors">Home</Link>
                            <ChevronRight className="w-4 h-4" />
                            <Link href="/california-real-estate-practice-test" className="hover:text-[#007aff] transition-colors">California</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span className="text-gray-900 font-medium">Teen Permit Guide</span>
                        </nav>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="relative overflow-hidden bg-white">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"></div>

                    {/* Mobile-only image */}
                    <div className="relative lg:hidden w-full h-56 overflow-hidden">
                        <Image
                            src="/images/california-teen-driver.webp"
                            alt="California Teen Driver holding a handbook"
                            fill
                            sizes="100vw"
                            quality={65}
                            className="object-cover object-[center_40%]"
                            priority
                        />
                    </div>

                    <div className="container mx-auto px-4 relative z-10 pt-8 pb-16 md:pt-20 md:pb-24">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                                <div className="text-left">
                                    <div className="hidden md:flex flex-wrap items-center gap-3 mb-4">
                                        <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5">
                                            <CheckCircle2 className="w-4 h-4 text-green-600" />
                                            <span className="text-sm font-medium text-green-800">Updated for {currentYear}</span>
                                        </div>
                                        <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5">
                                            <span className="text-sm font-medium text-green-800">✨ Perfect for Teens</span>
                                        </div>
                                    </div>
                                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 md:mb-6" style={{ lineHeight: '1.2' }}>
                                        Pass Your real estate exam. <span className="text-[#007aff]">Get Your Freedom.</span>
                                    </h1>
                                    <p className="text-base md:text-lg text-gray-600 mb-6 max-w-2xl leading-relaxed">
                                        No more bumming rides. This is the step-by-step guide California teens use to pass their real estate exam on the first try — and get behind the wheel faster.
                                    </p>
                                    <div className="flex flex-wrap items-center gap-x-3 md:gap-x-5 gap-y-2 mb-8">
                                        <div className="hidden md:flex items-center gap-1.5">
                                            <span className="text-[#007aff] font-bold text-sm">25K+</span>
                                            <span className="text-gray-500 text-sm">students</span>
                                        </div>
                                        <div className="hidden md:block w-px h-4 bg-gray-200"></div>
                                        <div className="flex items-center gap-1.5">
                                            <span className="text-amber-400 text-sm">★★★★★</span>
                                            <span className="text-gray-700 font-semibold text-sm">4.8</span>
                                            <span className="hidden md:inline text-gray-400 text-sm">rating</span>
                                        </div>
                                        <div className="w-px h-4 bg-gray-200"></div>
                                        <div className="flex items-center gap-1.5">
                                            <span className="text-[#007aff] font-bold text-sm">500+</span>
                                            <span className="text-gray-500 text-sm">CA-specific questions</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-start">
                                        <Button
                                            onClick={() => document.getElementById('step-by-step')?.scrollIntoView({ behavior: 'smooth' })}
                                            size="lg"
                                            className="bg-[#007aff] hover:bg-[#0056cc] text-white text-base font-bold px-6 py-5 rounded-lg shadow-lg"
                                        >
                                            Show Me How to Pass
                                            <ArrowRight className="w-5 h-5 ml-2" />
                                        </Button>
                                    </div>
                                </div>
                                {/* Desktop image */}
                                <div className="relative hidden lg:block">
                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl mx-auto border-4 border-white max-w-md w-full">
                                        <Image
                                            src="/images/california-teen-driver.webp"
                                            alt="California Teen Driver holding a handbook"
                                            width={448}
                                            height={448}
                                            sizes="448px"
                                            quality={70}
                                            className="w-full h-auto object-cover"
                                            priority
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Step by Step Flow Diagram */}
                <section id="step-by-step" className="py-16 md:py-24 bg-gray-50 border-t border-gray-100 relative overflow-hidden">
                    {/* Decorative blobs — give the frosted glass cards something to blur against */}
                    <div className="absolute top-16 left-8 w-80 h-80 bg-blue-200/25 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="absolute top-48 right-12 w-64 h-64 bg-violet-200/20 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="absolute bottom-24 left-1/3 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="absolute bottom-8 right-1/4 w-72 h-72 bg-violet-200/15 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="container mx-auto px-4">
                        <div className="max-w-7xl mx-auto">
                            <div className="text-center mb-16">
                                <div className="inline-block bg-[#007aff]/10 border border-[#007aff]/20 rounded-full px-4 md:px-6 py-2 mb-4">
                                    <span className="text-xs md:text-sm font-medium text-[#007aff]">
                                        Visual Guide
                                    </span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Everything You Need. In the Right Order.</h2>
                                <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">Every step below has one job: make sure you walk into the Real Estate already knowing every answer. Do them in order. Walk in. Pass. Done.</p>
                            </div>

                            {/* Desktop/Tablet Snake Grid Flow */}
                            <div className="hidden md:block relative w-full mb-16 pt-4">
                                <div className="grid grid-cols-4 gap-x-6 gap-y-16 relative z-10 w-full">
                                    {PREP_STEPS.map((step, index) => {
                                        const IconComponent = step.icon;

                                        // Layout variables for the 4-column grid
                                        const isLastInRow = index % 4 === 3;
                                        const isLastOverall = index === PREP_STEPS.length - 1;

                                        return (
                                            <div
                                                key={index}
                                                className="relative flex flex-col pt-8"
                                            >
                                                {/* --- DESKTOP CONNECTING LINES (flow from vertical center of each card) --- */}

                                                {/* 1) Normal right-pointing line for items 1-3 in any row */}
                                                {!isLastInRow && !isLastOverall && (
                                                    <div className="absolute top-[50%] left-[50%] w-[calc(100%+1.5rem)] h-[2px] border-t-[3px] border-dashed border-[#007aff] -z-10"></div>
                                                )}

                                                {/* 2) Snake wrap-around line for the 4th item in a row (end of row) */}
                                                {isLastInRow && !isLastOverall && (
                                                    <>
                                                        {/* Right U-Turn (Down) into the gap — starts at card mid, ends at gap midpoint */}
                                                        <div
                                                            className="absolute top-[50%] left-[50%] w-[calc(50%+1.5rem)] h-[calc(50%+2rem)] border-t-[3px] border-r-[3px] border-b-[3px] border-dashed border-[#007aff] rounded-tr-[2rem] rounded-br-[2rem] -z-10"
                                                        ></div>

                                                        {/* Leftward horizontal straight return line at gap midpoint */}
                                                        <div
                                                            className="absolute top-[calc(100%+2rem-3px)] right-[50%] w-[calc(300%+3rem)] h-[2px] border-t-[3px] border-dashed border-[#007aff] -z-10"
                                                        ></div>

                                                        {/* Left U-Turn — from gap midpoint down into the first card of the next row */}
                                                        <div
                                                            className="absolute top-[calc(100%+2rem-3px)] right-[calc(50%+300%+3rem)] w-[1.5rem] h-[calc(50%+2rem)] border-t-[3px] border-l-[3px] border-dashed border-[#007aff] rounded-tl-[1.5rem] -z-10"
                                                        ></div>
                                                    </>
                                                )}
                                                {/* --- END DESKTOP LINES --- */}

                                                <div
                                                    className={`bg-white/90 backdrop-blur-sm bg-gradient-to-br from-white ${step.badge === 'PREMIUM' ? 'to-purple-50/80' : index === PREP_STEPS.length - 1 ? 'to-green-50/80' : 'to-blue-50/80'
                                                        } p-6 rounded-2xl border-2 transition-all duration-300 h-full flex flex-col group relative z-10 mx-auto w-full max-w-[280px] hover:-translate-y-1 ${step.badge === 'PREMIUM' ? 'border-purple-500' : index === PREP_STEPS.length - 1 ? 'border-green-500' : 'border-[#007aff]'
                                                        }`}
                                                    style={{ boxShadow: `0 4px 20px rgba(${step.glowRgb},0.10), 0 1px 4px rgba(0,0,0,0.04)` }}
                                                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 36px rgba(${step.glowRgb},0.22), 0 2px 8px rgba(0,0,0,0.06)` }}
                                                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 20px rgba(${step.glowRgb},0.10), 0 1px 4px rgba(0,0,0,0.04)` }}
                                                >
                                                    {/* Free / Premium badge — top left corner */}
                                                    {index < PREP_STEPS.length - 1 && (
                                                        <div className={`absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-bold tracking-wide uppercase text-white ${step.badge === 'PREMIUM'
                                                            ? 'bg-purple-600'
                                                            : 'bg-[#007aff]'
                                                            }`}>
                                                            {step.badge === 'PREMIUM' ? '★ PREMIUM' : 'FREE'}
                                                        </div>
                                                    )}

                                                    <div className="flex flex-col mb-4 relative">
                                                        {/* Icon with colored ring halo */}
                                                        <div
                                                            className={`w-14 h-14 rounded-2xl ${step.bg} flex items-center justify-center flex-shrink-0 mx-auto mt-5 mb-4 transition-transform duration-300 group-hover:-translate-y-0.5`}
                                                            style={{ boxShadow: `0 0 0 4px rgba(${step.glowRgb},0.15), 0 0 0 8px rgba(${step.glowRgb},0.06)` }}
                                                        >
                                                            <IconComponent className={`w-7 h-7 ${step.color}`} />
                                                        </div>
                                                        <div className="text-center">
                                                            <h3 className="text-base font-bold text-gray-900 leading-tight">
                                                                {step.title}
                                                            </h3>
                                                        </div>
                                                    </div>
                                                    <p className="text-sm text-gray-500 mb-6 flex-grow text-center leading-relaxed">{step.desc}</p>

                                                    <div className="mt-auto flex flex-col items-center">
                                                        {step.link && (
                                                            <Link
                                                                href={step.link}
                                                                target={step.link.startsWith('#') ? undefined : "_blank"}
                                                                rel={step.link.startsWith('#') ? undefined : "noopener noreferrer"}
                                                                className={`inline-flex items-center text-sm font-semibold px-4 py-2.5 rounded-full transition-colors w-full justify-center ${step.badge === 'PREMIUM'
                                                                    ? 'bg-purple-50 text-purple-700 border border-purple-200 hover:bg-purple-100'
                                                                    : 'bg-blue-50 text-[#007aff] border border-blue-200 hover:bg-blue-100'
                                                                    }`}
                                                            >
                                                                {step.buttonLabel || 'View'} <ArrowRight className="w-4 h-4 ml-1.5" />
                                                            </Link>
                                                        )}

                                                        {step.links && (
                                                            <div className="flex flex-col gap-2 w-full">
                                                                {step.links.map((sublink, idx) => (
                                                                    <Link key={idx} href={sublink.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs font-semibold text-[#007aff] hover:text-blue-700 bg-blue-50 border border-[#007aff]/20 hover:border-[#007aff]/50 px-3 py-2 rounded-lg transition-colors w-full justify-center text-center">
                                                                        {idx === 0 ? <BookOpen className="w-3.5 h-3.5 mr-1.5" /> : <FileText className="w-3.5 h-3.5 mr-1.5" />}
                                                                        {sublink.label}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                            {/* Mobile Vertical Flow (Unchanged from original structure but restyled to match) */}
                            <div className="md:hidden relative">
                                <div className="absolute left-6 top-8 bottom-8 w-1 bg-gradient-to-b from-[#007aff] via-purple-500 to-green-500 rounded-full opacity-20"></div>

                                <div className="space-y-6">
                                    {PREP_STEPS.map((step, index) => {
                                        const IconComponent = step.icon;
                                        return (
                                            <div key={index} className="relative flex items-start">
                                                {/* Left Icon */}
                                                <div className="absolute left-6 transform -translate-x-1/2 w-10 h-10 rounded-full bg-white border-[3px] border-[#007aff] shadow-md flex items-center justify-center z-10 mt-4">
                                                    <span className="text-sm font-bold text-[#007aff]">{index + 1}</span>
                                                </div>

                                                {/* Content Card */}
                                                <div className="ml-16 w-full">
                                                    <div
                                                        className={`bg-white/90 backdrop-blur-sm bg-gradient-to-br from-white ${step.badge === 'PREMIUM' ? 'to-purple-50/80' : index === PREP_STEPS.length - 1 ? 'to-green-50/80' : 'to-blue-50/80'
                                                            } p-5 rounded-2xl border-2 transition-colors relative ${step.badge === 'PREMIUM' ? 'border-purple-500' : index === PREP_STEPS.length - 1 ? 'border-green-500' : 'border-[#007aff]'
                                                            }`}
                                                        style={{ boxShadow: `0 4px 16px rgba(${step.glowRgb},0.10), 0 1px 3px rgba(0,0,0,0.04)` }}
                                                    >
                                                        {/* Free / Premium badge */}
                                                        {index < PREP_STEPS.length - 1 && (
                                                            <div className={`absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] font-bold tracking-wide uppercase text-white ${step.badge === 'PREMIUM'
                                                                ? 'bg-purple-600'
                                                                : 'bg-[#007aff]'
                                                                }`}>
                                                                {step.badge === 'PREMIUM' ? '★ PREMIUM' : 'FREE'}
                                                            </div>
                                                        )}
                                                        <div className="flex items-center gap-3 mb-3">
                                                            <div
                                                                className={`w-11 h-11 rounded-xl ${step.bg} flex items-center justify-center flex-shrink-0`}
                                                                style={{ boxShadow: `0 0 0 3px rgba(${step.glowRgb},0.15), 0 0 0 6px rgba(${step.glowRgb},0.06)` }}
                                                            >
                                                                <IconComponent className={`w-5 h-5 ${step.color}`} />
                                                            </div>
                                                            <div>
                                                                <h3 className="text-base font-bold text-gray-900 leading-tight pr-16">{step.title}</h3>
                                                            </div>
                                                        </div>
                                                        <p className="text-sm text-gray-500 mb-4 leading-relaxed">{step.desc}</p>

                                                        {step.link && (
                                                            <Link
                                                                href={step.link}
                                                                target={step.link.startsWith('#') ? undefined : "_blank"}
                                                                rel={step.link.startsWith('#') ? undefined : "noopener noreferrer"}
                                                                className={`inline-flex items-center justify-center w-full text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors ${step.badge === 'PREMIUM'
                                                                    ? 'bg-purple-50 text-purple-700 border border-purple-200 hover:bg-purple-100'
                                                                    : 'bg-blue-50 text-[#007aff] border border-blue-200 hover:bg-blue-100'
                                                                    }`}
                                                            >
                                                                {step.buttonLabel || 'View'} <ArrowRight className="w-4 h-4 ml-1.5" />
                                                            </Link>
                                                        )}

                                                        {step.links && (
                                                            <div className="flex flex-col gap-2">
                                                                {step.links.map((sublink, idx) => (
                                                                    <Link key={idx} href={sublink.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-semibold text-[#007aff] bg-blue-50 border border-[#007aff]/20 px-3 py-2.5 rounded-lg active:bg-blue-100 transition-colors">
                                                                        {idx === 0 ? <BookOpen className="w-4 h-4 mr-2" /> : <FileText className="w-4 h-4 mr-2" />}
                                                                        {sublink.label}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Pass Guarantee Section */}
                <section className="py-16 md:py-24 bg-gradient-to-br from-emerald-50 via-white to-blue-50 relative overflow-hidden">
                    {/* Background Elements */}
                    <div className="absolute inset-0">
                        <div className="absolute top-20 left-10 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-10 right-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-block bg-gradient-to-r from-emerald-600/10 to-emerald-500/10 backdrop-blur-sm border border-emerald-200/50 rounded-full px-4 md:px-6 py-2 mb-6 md:mb-8">
                                <span className="text-xs md:text-sm font-medium bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
                                    100% Money-Back Promise
                                </span>
                            </div>

                            <div className="w-16 md:w-20 h-16 md:h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl md:rounded-3xl flex items-center justify-center mx-auto mb-6 md:mb-8 shadow-2xl">
                                <Shield className="w-8 md:w-10 h-8 md:h-10 text-white" />
                            </div>

                            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 md:mb-8">
                                <span className="bg-gradient-to-r from-emerald-700 via-green-600 to-emerald-600 bg-clip-text text-transparent">
                                    Pass Guarantee
                                </span>
                            </h2>

                            <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
                                If you don't pass your official California Real Estate Exam after completing our Premium package,
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

                {/* Pricing Cards Section */}
                <section id="premium-section" className="py-12 md:py-20 lg:py-24 bg-gradient-to-br from-blue-100 via-purple-50 via-50% to-emerald-100">
                    <div className="container mx-auto px-4 lg:px-2">
                        <div className="mx-auto text-center">
                            <div>
                                <h2 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-[#111827] mb-6 md:mb-10 max-w-3xl mx-auto leading-tight md:leading-relaxed xl:leading-tight">
                                    Imagine this: You sit down at the Real Estate. <span className="text-[#077aff]">Nothing surprises you.</span>
                                </h2>
                                <p className="text-sm md:text-base lg:text-lg text-[#374151] mb-4 md:mb-6 max-w-2xl mx-auto leading-relaxed md:leading-[2]">
                                    Access the full California Real Estate Question Bank — so the real test feels like a repeat. You've already seen it all. No surprises, no failing.
                                </p>
                                <p className="text-sm md:text-base lg:text-lg text-[#374151] mb-4 md:mb-6 max-w-2xl mx-auto leading-relaxed">
                                    Gift yourself the confidence you deserve.
                                </p>
                                <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-xl px-4 md:px-6 py-3 mb-4">
                                    <Shield className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                                    <p className="text-sm md:text-base text-emerald-800 font-medium">
                                        Not sure? Try it for 60 minutes. Full refund within the first hour — just <a href="mailto:real-estatequestionbank@gmail.com" className="text-[#007aff] no-underline hover:underline">email us</a>.
                                    </p>
                                </div>
                                <p className="text-sm md:text-base text-gray-500 mb-8 md:mb-16">Most teens pass in their first week of using this.</p>
                            </div>

                            {/* Mobile Duration Tabs */}
                            <div className="flex gap-3 mb-6 md:hidden justify-center px-4">
                                {[7, 30, 36500].map((dur) => (
                                    <button
                                        key={dur}
                                        onClick={() => {
                                            setSelectedDuration(dur as 7 | 30 | 36500)
                                            document.getElementById(`plan-${dur}`)?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
                                        }}
                                        className={`flex-1 max-w-[100px] px-4 py-1.5 rounded-lg font-semibold text-sm transition-all duration-300 ${selectedDuration === dur
                                            ? 'bg-[#007aff] text-white shadow-md'
                                            : 'bg-white text-[#007aff] border border-[#007aff]'
                                            }`}
                                    >
                                        {dur} Days
                                    </button>
                                ))}
                            </div>

                            {/* Pricing Cards Layout */}
                            <div className="mb-10 md:mb-20 mx-auto animate-fade-in-up delay-200">
                                {/* Mobile: Horizontal scroll */}
                                <div
                                    ref={planScrollRef}
                                    onScroll={handlePlanScroll}
                                    className="md:hidden overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4"
                                >
                                    <div className="flex gap-4 pb-4 pt-4">
                                        {/* 7-Day Plan */}
                                        <div
                                            id="plan-7"
                                            className="snap-center flex-shrink-0 w-[85vw] max-w-[340px]"
                                        >
                                            <div
                                                className={`bg-white rounded-2xl p-5 border-2 transition-all duration-300 cursor-pointer relative flex flex-col h-full ${selectedDuration === 7 ? 'border-[#007aff] shadow-lg' : 'border-gray-200 shadow-md'}`}
                                                onClick={() => setSelectedDuration(7)}
                                            >

                                                <div className="mb-4 mt-3 text-left">
                                                    <div className="text-xs font-bold text-gray-700 tracking-[0.15em] uppercase mb-1">CALIFORNIA</div>
                                                    <h3 className="text-2xl font-bold text-[#111827]">Pass This Week</h3>
                                                    <p className="text-base text-gray-800 font-semibold mb-2 mt-2">7-day access - One-time payment</p>
                                                    <p className="text-sm text-gray-500 mt-1 leading-relaxed">Test this week? Focused, fast prep to cover everything you need to know — and pass.</p>
                                                </div>
                                                <div className="flex items-center gap-2 mb-4">
                                                    {pricingPlans.sevenDay.badge && (
                                                        <span className="text-gray-400 line-through text-2xl font-medium">{pricingPlans.sevenDay.originalPrice}</span>
                                                    )}
                                                    <span className="text-3xl font-bold text-gray-900">{pricingPlans.sevenDay.discountedPrice}</span>
                                                    {pricingPlans.sevenDay.badge && (
                                                        <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-0.5 rounded font-semibold ml-auto">{pricingPlans.sevenDay.badge}</span>
                                                    )}
                                                </div>

                                                {pricingPlans.sevenDay.badge && (
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
                                                        <span>500+ California Real Estate-style questions</span>
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
                                                        <span>Road signs explained clearly</span>
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
                                                        router.push(`/get-premium?state=california&plan=7`)
                                                    }}
                                                    className="w-full flex items-center justify-center gap-2 text-base py-6 px-4 mt-auto bg-[#007aff] hover:bg-[#0056cc] text-white font-medium"
                                                >
                                                    Get Instant Access
                                                </Button>
                                                <p className="text-xs text-gray-500 text-center mt-3">Instant Access. Works on phone, tablet, or laptop.</p>
                                            </div>
                                        </div>

                                        {/* 30-Day Plan */}
                                        <div
                                            id="plan-30"
                                            className="snap-center flex-shrink-0 w-[85vw] max-w-[340px]"
                                        >
                                            <div
                                                className={`bg-white rounded-2xl p-5 border-2 transition-all duration-300 cursor-pointer relative flex flex-col h-full ${selectedDuration === 30 ? 'border-[#007aff] shadow-lg' : 'border-gray-200 shadow-md'}`}
                                                onClick={() => setSelectedDuration(30)}
                                            >
                                                <div className="mb-4 mt-3 text-left">
                                                    <div className="text-xs font-bold text-gray-700 tracking-[0.15em] uppercase mb-1">CALIFORNIA</div>
                                                    <h3 className="text-2xl font-bold text-[#111827] leading-tight mb-2">Pass with Confidence</h3>
                                                    <p className="text-base text-gray-800 font-semibold mb-2">30-day access - One-time payment</p>
                                                    <p className="text-sm text-gray-500 mt-1 leading-relaxed">57% of our users prefer this option to ensure they pass on the first try.</p>
                                                </div>
                                                <div className="flex items-center gap-2 mb-4">
                                                    {pricingPlans.thirtyDay.badge && (
                                                        <span className="text-gray-400 line-through text-2xl font-medium">{pricingPlans.thirtyDay.originalPrice}</span>
                                                    )}
                                                    <span className="text-3xl font-bold text-gray-900">{pricingPlans.thirtyDay.discountedPrice}</span>
                                                    {pricingPlans.thirtyDay.badge && (
                                                        <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-0.5 rounded font-semibold ml-auto">{pricingPlans.thirtyDay.badge}</span>
                                                    )}
                                                </div>

                                                {pricingPlans.thirtyDay.badge && (
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
                                                        <span>500+ California Real Estate-style questions</span>
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
                                                        <span>Road signs explained clearly</span>
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
                                                        router.push(`/get-premium?state=california&plan=30`)
                                                    }}
                                                    className="w-full flex items-center justify-center gap-2 text-base py-6 px-4 mt-auto bg-[#007aff] hover:bg-[#0056cc] text-white font-medium"
                                                >
                                                    Get Instant Access
                                                </Button>
                                                <p className="text-xs text-gray-500 text-center mt-3">Instant Access. Works on phone, tablet, or laptop.</p>
                                            </div>
                                        </div>

                                        {/* Lifetime Plan */}
                                        <div
                                            id="plan-36500"
                                            className="snap-center flex-shrink-0 w-[85vw] max-w-[340px]"
                                        >
                                            <div
                                                className={`bg-white rounded-2xl p-5 border-2 transition-all duration-300 cursor-pointer relative flex flex-col h-full ${selectedDuration === 36500 ? 'border-[#007aff] shadow-lg' : 'border-gray-200 shadow-md'}`}
                                                onClick={() => setSelectedDuration(36500)}
                                            >
                                                <div className="mb-4 mt-3 text-left">
                                                    <div className="text-xs font-bold text-gray-700 tracking-[0.15em] uppercase mb-1">ALL STATES</div>
                                                    <h3 className="text-2xl font-bold text-[#111827]">Lifetime Access</h3>
                                                    <p className="text-base text-gray-800 font-semibold mb-2 mt-2">Lifetime access - One-time payment</p>
                                                    <p className="text-sm text-gray-500 mt-1 leading-relaxed">Permanent companion for all Real Estate Exams. Across all states. As many attempts as you need.</p>
                                                </div>
                                                <div className="flex items-center gap-2 mb-4">
                                                    {pricingPlans.lifetime.badge && (
                                                        <span className="text-gray-400 line-through text-2xl font-medium">{pricingPlans.lifetime.originalPrice}</span>
                                                    )}
                                                    <span className="text-3xl font-bold text-gray-900">{pricingPlans.lifetime.discountedPrice}</span>
                                                    {pricingPlans.lifetime.badge && (
                                                        <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-0.5 rounded font-semibold ml-auto">{pricingPlans.lifetime.badge}</span>
                                                    )}
                                                </div>

                                                {pricingPlans.lifetime.badge && (
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
                                                        <span>Full state-specific Real Estate question bank</span>
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
                                                        <span>Road signs explained clearly</span>
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
                                                        router.push(`/get-premium?state=california&plan=36500`)
                                                    }}
                                                    className="w-full flex items-center justify-center gap-2 text-base py-6 px-4 mt-auto bg-[#007aff] hover:bg-[#0056cc] text-white font-medium"
                                                >
                                                    Get Instant Access
                                                </Button>
                                                <p className="text-xs text-gray-500 text-center mt-3">Instant Access. Works on phone, tablet, or laptop.</p>
                                            </div>
                                        </div>
                                        {/* Spacer for right edge margin */}
                                        <div className="flex-shrink-0 w-4" aria-hidden="true"></div>
                                    </div>
                                </div>

                                {/* Desktop: Grid Layout */}
                                <div className="hidden md:grid md:grid-cols-3 gap-8 pt-6 md:max-w-6xl lg:max-w-7xl md:mx-auto">
                                    {/* Short Term Plan - 7 Days */}
                                    <div
                                        className={`bg-white rounded-2xl px-5 py-8 transition-all duration-300 cursor-pointer relative flex flex-col ${selectedDuration === 7 ? 'border-[3px] border-[#007aff] shadow-lg' : 'border border-gray-200 shadow-xl hover:shadow-2xl'}`}
                                        onClick={() => setSelectedDuration(7)}
                                    >

                                        <div className="mb-6 mt-2 text-left">
                                            <div className="text-sm font-bold text-gray-700 tracking-[0.15em] uppercase mb-1.5">CALIFORNIA</div>
                                            <h3 className="text-[1.7rem] font-bold text-[#111827]">Pass This Week</h3>
                                            <p className="text-base text-gray-800 font-semibold mb-2 mt-2">7-day access - One-time payment</p>
                                            <p className="text-sm text-gray-500 mt-2 leading-relaxed">Test this week? Focused, fast prep to cover everything you need to know — and pass.</p>
                                        </div>
                                        <div className="flex items-center gap-3 mb-6">
                                            {pricingPlans.sevenDay.badge && (
                                                <span className="text-gray-400 line-through text-3xl font-medium">{pricingPlans.sevenDay.originalPrice}</span>
                                            )}
                                            <span className="text-4xl font-bold text-gray-900">{pricingPlans.sevenDay.discountedPrice}</span>
                                            {pricingPlans.sevenDay.badge && (
                                                <span className="bg-yellow-100 text-yellow-700 text-xs px-2.5 py-1 rounded font-semibold ml-auto">{pricingPlans.sevenDay.badge}</span>
                                            )}
                                        </div>

                                        {pricingPlans.sevenDay.badge && (
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
                                                <span>500+ California Real Estate-style questions</span>
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
                                            onClick={() => router.push(`/get-premium?state=california&plan=7`)}
                                            className="w-full flex items-center justify-center gap-2 text-base py-6 px-6 mt-auto bg-[#007aff] hover:bg-[#0056cc] text-white font-medium"
                                        >
                                            Get Instant Access
                                        </Button>
                                        <p className="text-sm text-gray-500 text-center mt-4">Instant Access. Works on phone, tablet, or laptop.</p>
                                    </div>

                                    {/* Standard Plan - 30 Days */}
                                    <div
                                        className={`bg-white rounded-2xl px-5 py-8 transition-all duration-300 cursor-pointer relative flex flex-col ${selectedDuration === 30 ? 'border-[3px] border-[#007aff] shadow-lg' : 'border border-gray-200 shadow-xl hover:shadow-2xl'}`}
                                        onClick={() => setSelectedDuration(30)}
                                    >
                                        <div className="absolute -top-3.5 left-6 whitespace-nowrap">
                                            <div className="bg-[#ffce31] text-gray-900 px-4 py-1.5 rounded-[6px] text-sm font-bold shadow-sm">
                                                Most popular
                                            </div>
                                        </div>
                                        <div className="mb-6 mt-2 text-left">
                                            <div className="text-sm font-bold text-gray-700 tracking-[0.15em] uppercase mb-1.5">CALIFORNIA</div>
                                            <h3 className="text-[1.7rem] font-bold text-[#111827] leading-tight mb-3">Pass with Confidence</h3>
                                            <p className="text-base text-gray-800 font-semibold mb-2">30-day access - One-time payment</p>
                                            <p className="text-sm text-gray-500 mt-2 leading-relaxed">57% of our users prefer this option to ensure they pass on the first try.</p>
                                        </div>
                                        <div className="flex items-center gap-3 mb-6">
                                            {pricingPlans.thirtyDay.badge && (
                                                <span className="text-gray-400 line-through text-3xl font-medium">{pricingPlans.thirtyDay.originalPrice}</span>
                                            )}
                                            <span className="text-4xl font-bold text-gray-900">{pricingPlans.thirtyDay.discountedPrice}</span>
                                            {pricingPlans.thirtyDay.badge && (
                                                <span className="bg-yellow-100 text-yellow-700 text-xs px-2.5 py-1 rounded font-semibold ml-auto">{pricingPlans.thirtyDay.badge}</span>
                                            )}
                                        </div>

                                        {pricingPlans.thirtyDay.badge && (
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
                                                <span>500+ California Real Estate-style questions</span>
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
                                            onClick={() => router.push(`/get-premium?state=california&plan=30`)}
                                            className="w-full flex items-center justify-center gap-2 text-base py-6 px-6 mt-auto bg-[#007aff] hover:bg-[#0056cc] text-white font-medium"
                                        >
                                            Get Instant Access
                                        </Button>
                                        <p className="text-sm text-gray-500 text-center mt-4">Instant Access. Works on phone, tablet, or laptop.</p>
                                    </div>

                                    {/* Lifetime Plan */}
                                    <div
                                        className={`bg-white rounded-2xl px-5 py-8 transition-all duration-300 cursor-pointer relative flex flex-col ${selectedDuration === 36500 ? 'border-[3px] border-[#007aff] shadow-lg' : 'border border-gray-200 shadow-xl hover:shadow-2xl'}`}
                                        onClick={() => setSelectedDuration(36500)}
                                    >
                                        <div className="mb-6 mt-2 text-left">
                                            <div className="text-sm font-bold text-gray-700 tracking-[0.15em] uppercase mb-1.5">ALL STATES</div>
                                            <h3 className="text-[1.7rem] font-bold text-[#111827]">Lifetime Access</h3>
                                            <p className="text-base text-gray-800 font-semibold mb-2 mt-2">Lifetime access - One-time payment</p>
                                            <p className="text-sm text-gray-500 mt-2 leading-relaxed">Permanent companion for all Real Estate Exams. Across all states. As many attempts as you need.</p>
                                        </div>
                                        <div className="flex items-center gap-3 mb-6">
                                            {pricingPlans.lifetime.badge && (
                                                <span className="text-gray-400 line-through text-3xl font-medium">{pricingPlans.lifetime.originalPrice}</span>
                                            )}
                                            <span className="text-4xl font-bold text-gray-900">{pricingPlans.lifetime.discountedPrice}</span>
                                            {pricingPlans.lifetime.badge && (
                                                <span className="bg-yellow-100 text-yellow-700 text-xs px-2.5 py-1 rounded font-semibold ml-auto">{pricingPlans.lifetime.badge}</span>
                                            )}
                                        </div>

                                        {pricingPlans.lifetime.badge && (
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
                                                <span>Full state-specific Real Estate question bank</span>
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
                                            onClick={() => router.push(`/get-premium?state=california&plan=36500`)}
                                            className="w-full flex items-center justify-center gap-2 text-base py-6 px-6 mt-auto bg-[#007aff] hover:bg-[#0056cc] text-white font-medium"
                                        >
                                            Get Instant Access
                                        </Button>
                                        <p className="text-sm text-gray-500 text-center mt-4">Instant Access. Works on phone, tablet, or laptop.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Secure Checkout & Support Info */}
                            <div className="mt-12 md:mt-16 text-center max-w-3xl mx-auto px-4">
                                <div className="flex items-center justify-center gap-2 mb-8 text-emerald-600 font-semibold">
                                    <Lock className="w-5 h-5" />
                                    <span>Secure checkout powered by Stripe</span>
                                </div>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                    <a
                                        href="mailto:real-estatequestionbank@gmail.com"
                                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-xl text-[#007aff] font-semibold hover:bg-gray-50 transition-colors shadow-sm w-auto"
                                    >
                                        <Mail className="w-5 h-5" />
                                        Email
                                    </a>
                                    <a
                                        href="sms:+14085494524"
                                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-xl text-[#007aff] font-semibold hover:bg-gray-50 transition-colors shadow-sm w-auto"
                                    >
                                        <MessageSquare className="w-5 h-5" />
                                        Message +1 (408) 549-4524
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </main>

            {/* Teen FAQ Section */}
            <section className="py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12 md:mb-20">
                            <div className="inline-block bg-[#007aff]/10 border border-[#007aff]/20 rounded-full px-4 md:px-6 py-2 mb-4 md:mb-6">
                                <span className="text-xs md:text-sm font-medium text-[#007aff]">Frequently Asked Questions</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Quick Answers</h2>
                            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">The stuff everyone actually Googles before their real estate exam.</p>
                        </div>

                        <div className="space-y-4 md:space-y-6">
                            <div className="group">
                                <details className="bg-gray-50 rounded-xl md:rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                                    <summary className="font-bold text-gray-900 cursor-pointer text-base md:text-lg flex items-center justify-between group-hover:text-[#007aff] transition-colors duration-200">
                                        What if I fail?
                                        <svg className="w-4 md:w-5 h-4 md:h-5 transform transition-transform duration-200 group-open:rotate-180 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <p className="mt-4 md:mt-6 text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed">You can retake it, but you'll pay a new fee and wait for another appointment. Most teens who fail say they just didn't practice enough — that's the easy fix.</p>
                                </details>
                            </div>

                            <div className="group">
                                <details className="bg-gray-50 rounded-xl md:rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                                    <summary className="font-bold text-gray-900 cursor-pointer text-base md:text-lg flex items-center justify-between group-hover:text-[#007aff] transition-colors duration-200">
                                        Can I use my phone during the test?
                                        <svg className="w-4 md:w-5 h-4 md:h-5 transform transition-transform duration-200 group-open:rotate-180 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <p className="mt-4 md:mt-6 text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed">Nope. It's done on a computer at the Real Estate — no phone, no notes, no help. Just what you know going in.</p>
                                </details>
                            </div>

                            <div className="group">
                                <details className="bg-gray-50 rounded-xl md:rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                                    <summary className="font-bold text-gray-900 cursor-pointer text-base md:text-lg flex items-center justify-between group-hover:text-[#007aff] transition-colors duration-200">
                                        How many questions can I miss?
                                        <svg className="w-4 md:w-5 h-4 md:h-5 transform transition-transform duration-200 group-open:rotate-180 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <p className="mt-4 md:mt-6 text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed">8. The test has 46 questions and you need to get at least 38 right. Miss more than 8 and you don't pass.</p>
                                </details>
                            </div>

                            <div className="group">
                                <details className="bg-gray-50 rounded-xl md:rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                                    <summary className="font-bold text-gray-900 cursor-pointer text-base md:text-lg flex items-center justify-between group-hover:text-[#007aff] transition-colors duration-200">
                                        How long until I can drive by myself?
                                        <svg className="w-4 md:w-5 h-4 md:h-5 transform transition-transform duration-200 group-open:rotate-180 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <p className="mt-4 md:mt-6 text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed">After you pass the real estate exam, you'll need to hold your permit for at least 6 months and log 50 hours of practice (10 at night). Then you take your behind-the-wheel test and get your license.</p>
                                </details>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <StateHubsSection />
            <Footer />

            <AuthModal
                isOpen={authModalOpen}
                onClose={() => { setAuthModalOpen(false); setIsRedirecting(false); }}
                mode={authMode}
                onSwitchMode={(mode) => setAuthMode(mode)}
                onSuccess={handleAuthSuccess}
                isPremiumOnly={isPremiumLogin}
                isCheckoutFlow={isPremiumLogin}
                isRedirecting={isRedirecting}
                closeOnSuccess={!isPremiumLogin}
                onGetPremium={() => { }}
            />

            <PurchaseRenewalDialog
                isOpen={showPurchaseModal}
                onClose={() => setShowPurchaseModal(false)}
                premiumStatus={premiumStatus}
                onPurchase={handlePurchaseFromModal}
                isLoading={purchaseLoading}
            />
        </div>
    )
}
