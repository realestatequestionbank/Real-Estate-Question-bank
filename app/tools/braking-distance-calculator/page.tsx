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
import { BrakingDistanceCalculator } from '@/components/tools/braking-distance-calculator'
import { isPremiumExpired as checkIfPremiumExpired } from '@/lib/firebase/auth'
import { ArrowRight } from 'lucide-react'

export default function BrakingDistanceCalculatorPage() {
    const router = useRouter()
    const { user, userData, isPremium, isPremiumExpired, premiumStatus, signOut } = useAuth()

    const [authModalOpen, setAuthModalOpen] = useState(false)
    const [authMode, setAuthMode] = useState<'login' | 'signup'>('login')
    const [isRedirecting, setIsRedirecting] = useState(false)
    const [showExpiredModal, setShowExpiredModal] = useState(false)
    const [showPurchaseModal, setShowPurchaseModal] = useState(false)
    const [purchaseLoading, setPurchaseLoading] = useState(false)

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

    const getUserDisplayName = () => {
        if (userData?.firstName && userData?.lastName) {
            return `${userData.firstName} ${userData.lastName}`
        }
        return user?.displayName || user?.email?.split('@')[0] || 'User'
    }

    const createCheckoutSession = async (userId: string, duration: number = 90) => {
        try {
            const response = await fetch('/api/create-checkout-session', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId, state: 'general', duration }),
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

    const handleAuthSuccess = async (mode: 'login' | 'signup', result?: any) => {
        if (mode === 'signup' && result?.user) {
            setIsRedirecting(true)
            await createCheckoutSession(result.user.uid)
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

    const handleRenewal = async () => {
        if (!user) return
        await createCheckoutSession(user.uid)
    }

    const handleCompletePurchaseClick = () => {
        if (!user) {
            router.push('/get-premium?plan=36500')
            return
        }
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

    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white">
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
            />

            <main className="pb-20">
                {/* Hero Section */}
                <section className="py-12 md:py-16 lg:py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
                            <div className="inline-block bg-[#007aff]/10 backdrop-blur-sm border border-[#007aff]/20 rounded-full px-4 md:px-6 py-2 mb-4 md:mb-6">
                                <span className="text-xs md:text-sm font-medium text-[#007aff]">
                                    Free Educational Tool
                                </span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
                                Braking Distance <span className="text-[#007aff]">Calculator</span>
                            </h1>
                            <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                                How far will your car travel before it stops? Use this tool to understand how speed
                                and road conditions dramatically affect your stopping distance.
                            </p>
                        </div>

                        <BrakingDistanceCalculator />

                        {/* Educational Content */}
                        <div className="max-w-4xl mx-auto mt-16 md:mt-20">
                            <div className="bg-white p-6 md:p-10 rounded-2xl md:rounded-3xl border border-gray-100 shadow-lg">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Understanding Stopping Distance</h2>

                                <div className="prose prose-gray prose-lg max-w-none">
                                    <p className="text-gray-600 leading-relaxed">
                                        Stopping distance is made up of two components: <strong className="text-gray-900">reaction distance</strong> (how far you travel while perceiving and reacting to a hazard) and <strong className="text-gray-900">braking distance</strong> (how far your car travels after you apply the brakes).
                                    </p>

                                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Why Speed Matters So Much</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Stopping distance doesn't increase linearly with speed—it increases with the <strong className="text-gray-900">square of speed</strong>. This means if you double your speed, your braking distance quadruples.
                                    </p>

                                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">The 3-Second Rule</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        On dry roads, maintain at least a <strong className="text-gray-900">3-second following distance</strong>. In wet conditions, increase this to <strong className="text-gray-900">6 seconds</strong>. On ice or snow, <strong className="text-gray-900">10+ seconds</strong> may be necessary.
                                    </p>

                                    <div className="bg-[#007aff]/5 border border-[#007aff]/20 rounded-2xl p-6 mt-8">
                                        <p className="font-bold text-gray-900 text-lg">
                                            "At 60 mph, you travel 88 feet per second. In the time it takes you to react (1.5 seconds), you've already traveled 132 feet—before you even touch the brake pedal."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA Section */}
                        <div className="max-w-4xl mx-auto mt-12 md:mt-16">
                            <div className="bg-gradient-to-r from-[#007aff] to-blue-600 rounded-2xl md:rounded-3xl p-8 md:p-12 text-center text-white">
                                <h2 className="text-2xl md:text-3xl font-bold mb-4">Master Safe Driving Habits</h2>
                                <p className="text-white/90 text-base md:text-lg mb-6 max-w-xl mx-auto">
                                    Practice with real Real Estate questions covering stopping distance, following distance, and more.
                                </p>
                                <Link
                                    href="/"
                                    className="inline-flex items-center gap-2 bg-white text-[#007aff] font-bold px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-gray-100 transition-all shadow-lg"
                                >
                                    Start Free Practice
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />

            <AuthModal
                isOpen={authModalOpen}
                onClose={() => {
                    setAuthModalOpen(false)
                    setIsRedirecting(false)
                }}
                mode={authMode}
                onSwitchMode={(mode: 'login' | 'signup') => setAuthMode(mode)}
                onSuccess={handleAuthSuccess}
                isPremiumOnly={authMode === 'login'}
                isCheckoutFlow={authMode === 'signup' && !user}
                isRedirecting={isRedirecting}
                closeOnSuccess={authMode !== 'signup' || !!user}
                onGetPremium={() => router.push('/get-premium?plan=36500')}
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
        </div>
    )
}
