'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { useAuth } from '@/contexts/auth-context'
import { Button } from '@/components/ui/button'
import { ChevronRight, ArrowLeft, Crown } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter, notFound } from 'next/navigation'
import { CALIFORNIA_WARNING_SIGNS } from '@/components/california-road-warning-signs/data'

interface SignDetailContentProps {
    slug: string
}

export function RoadSignDetailContent({ slug }: SignDetailContentProps) {
    const { user, userData, isPremium, signOut } = useAuth()
    const router = useRouter()

    const handleLogin = () => router.push('/#login')
    const handleSignup = () => router.push('/#signup')
    const handleLogout = async () => await signOut()
    const handleDashboard = () => router.push('/dashboard')

    const sign = CALIFORNIA_WARNING_SIGNS.find((s) => s.slug === slug)

    if (!sign) {
        notFound()
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
                        <nav className="flex items-center gap-2 text-sm text-gray-500">
                            <Link href="/" className="hover:text-[#007aff] transition-colors">Home</Link>
                            <ChevronRight className="w-4 h-4" />
                            <Link href="/road-warning-signs" className="hover:text-[#007aff] transition-colors">Road Warning Signs</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span className="text-gray-900 font-medium truncate max-w-[200px]">{sign.title}</span>
                        </nav>
                    </div>
                </div>

                <div className="container mx-auto px-4 py-8 md:py-12">
                    <Link
                        href="/road-warning-signs"
                        className="inline-flex items-center text-gray-500 hover:text-[#007aff] transition-colors mb-8 group"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Road Warning Signs
                    </Link>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start max-w-6xl mx-auto">
                        {/* Sign Image */}
                        <div className="bg-gray-50 rounded-3xl p-10 md:p-16 flex items-center justify-center border border-gray-100">
                            <Image
                                src={sign.image}
                                alt={`${sign.title} Warning Sign Meaning`}
                                width={400}
                                height={400}
                                className="object-contain drop-shadow-2xl"
                                priority
                            />
                        </div>

                        {/* Sign Details */}
                        <div className="space-y-8">
                            <div>
                                <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">
                                    {sign.title} Sign
                                </h1>
                                <div className="prose prose-lg text-gray-600 leading-relaxed">
                                    <p>{sign.description}</p>
                                    <p className="mt-4">
                                        The <strong>{sign.title}</strong> sign is a standard US road warning sign used in all states. It appears as a yellow diamond shape with a black symbol, indicating a potential hazard or change in road conditions ahead. Knowing this sign is essential for passing the <strong>road sign portion</strong> of your <strong>Real Estate Exam</strong>.
                                    </p>
                                </div>
                            </div>

                            {/* Premium Upsell Box */}
                            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>

                                <div className="relative z-10">
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="bg-yellow-500/20 p-3 rounded-xl border border-yellow-500/30">
                                            <Crown className="w-8 h-8 text-yellow-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2">Pass Probability: +40%</h3>
                                            <p className="text-gray-300 text-sm">Premium members who study all warning signs are 40% more likely to pass on their first try.</p>
                                        </div>
                                    </div>

                                    <Button className="w-full bg-[#007aff] hover:bg-[#0056cc] text-white font-bold h-14 text-lg rounded-xl shadow-lg shadow-blue-500/20">
                                        <Link href="/real-estate-premium" className="w-full h-full flex items-center justify-center">
                                            Get Full Access
                                        </Link>
                                    </Button>
                                    <p className="text-center mt-3 text-xs text-gray-400">
                                        Includes 60+ Warning Signs & 500+ Practice Questions
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </main>
        </div>
    )
}
