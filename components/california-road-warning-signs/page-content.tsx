'use client'

import { useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { useAuth } from '@/contexts/auth-context'
import { Button } from '@/components/ui/button'
import { ChevronRight, Lock, Crown, AlertTriangle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { CALIFORNIA_WARNING_SIGNS } from './data'
import { cn } from '@/lib/utils'

const SIGNS_PER_PAGE = 6
const TOTAL_PAGES = 10
const FREE_PAGES = 3

export function CaliforniaWarningSignsPageContent() {
    const { user, userData, isPremium, signOut } = useAuth()
    const router = useRouter()
    const [currentPage, setCurrentPage] = useState(1)

    const handleLogin = () => router.push('/#login')
    const handleSignup = () => router.push('/#signup')
    const handleLogout = async () => await signOut()
    const handleDashboard = () => router.push('/dashboard')

    const isPageLocked = currentPage > FREE_PAGES && !isPremium

    const currentSigns = CALIFORNIA_WARNING_SIGNS.slice(
        (currentPage - 1) * SIGNS_PER_PAGE,
        currentPage * SIGNS_PER_PAGE
    )

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
                            <Link href="/california-real-estate-permit-test" className="hover:text-[#007aff] transition-colors">California</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span className="text-gray-900 font-medium">Warning Signs</span>
                        </nav>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="relative pt-16 pb-12 md:pt-20 md:pb-16 overflow-hidden bg-[#007aff] text-white">
                    <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-1.5 mb-6">
                            <AlertTriangle className="w-4 h-4 text-white" />
                            <span className="text-sm font-medium text-white">Official Real Estate Warning Signs</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight">
                            California Road Warning Signs
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                            Master every <strong>California road warning sign</strong> for the <strong>road sign portion</strong> of the <strong>2026 Real Estate Exam</strong>. Learn the meanings of essential <strong>yellow diamond signs</strong>.
                        </p>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-16 md:py-20 bg-gray-50">
                    <div className="container mx-auto px-4">


                        {/* Educational Text Section */}
                        {/* Educational Text Section - Only visible on unlocked pages */}
                        {!isPageLocked && (
                            <div className="text-sm md:text-base text-gray-700 max-w-4xl mx-auto leading-relaxed space-y-4 text-left mb-10">
                                <p>
                                    California warning signs are crucial navigational aids designed to alert drivers of potential hazards, changing road conditions, or upcoming traffic features that may not be immediately apparent. Most of these signs, along with other <Link href="/driving-test-concepts/signs-and-signals" className="font-medium text-[#007aff] relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#007aff] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">essential signs and signals</Link>, are distinctively diamond-shaped and colored yellow with black symbols or lettering, making them instantly recognizable even from a distance or in poor weather conditions.
                                </p>
                                <p>
                                    For the <Link href="/california-real-estate-permit-test" className="font-medium text-[#007aff] relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#007aff] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">California Real Estate Exam</Link>, mastering these signs is non-negotiable. A significant portion of the written exam focuses on road sign identification and understanding the appropriate driver response. Ignoring or misinterpreting a warning sign during your behind-the-wheel test is an automatic critical error, leading to immediate failure.
                                </p>
                                <p>
                                    Violating the guidance of warning signs carries serious real-world consequences beyond testing. While warning signs themselves are advisory, they often precede regulatory controls or dangerous conditions. Disregarding a &quot;Slippery When Wet&quot; sign could lead to loss of vehicle control, while ignoring a &quot;Pedestrian Crossing&quot; warning could result in a tragic accident and severe legal penalties. In California, failure to exercise due care in response to hazardous conditions indicated by these signs can lead to citations for driving at an unsafe speed for conditions (Basic Speed Law), reckless driving charges, or increased liability in the event of a collision. Consult our <Link href="/state-guides/california" className="font-medium text-[#007aff] relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#007aff] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">California Driver&apos;s Guide</Link> for specific Real Estate Exam information, not for general driving instruction.
                                </p>
                            </div>
                        )}

                        {isPageLocked ? (
                            /* Premium Upsell View */
                            <div className="max-w-6xl mx-auto bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 p-8 md:p-12">
                                <div className="grid md:grid-cols-2 gap-8 items-center">
                                    <div className="text-center md:text-left order-2 md:order-1">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                                            Unlock the Full Warning Signs Library
                                        </h2>
                                        <p className="text-lg text-gray-600 mb-8">
                                            Pages 4-{TOTAL_PAGES} contain over 40 additional critical warning signs found on California roads. Upgrade to Premium to access the complete study guide and cheat sheets.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                            <Link href="/california-real-estate-permit-test#premium-section" className="inline-flex items-center justify-center px-8 py-4 bg-[#007aff] hover:bg-[#0056cc] text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-200 w-full sm:w-auto">
                                                <Crown className="w-5 h-5 mr-2" />
                                                Get Premium Access
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="order-1 md:order-2">
                                        <Image
                                            src="/images/Top-US-Road-Signs-PDF.png"
                                            alt="Top US Road Signs Cheat Sheet"
                                            width={600}
                                            height={400}
                                            className="mx-auto object-contain rounded-lg shadow-lg"
                                        />
                                    </div>
                                </div>
                            </div>
                        ) : (
                            /* Grid View */
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
                                {currentSigns.map((sign) => (
                                    <Link
                                        href={`/california-road-warning-signs/${sign.slug}`}
                                        key={sign.id}
                                        className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                    >
                                        <div className="aspect-square p-8 flex items-center justify-center bg-gray-50 group-hover:bg-yellow-50/50 transition-colors">
                                            <Image
                                                src={sign.image}
                                                alt={`California ${sign.title} Warning Sign`}
                                                width={200}
                                                height={200}
                                                className="object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                        <div className="p-6 border-t border-gray-100">
                                            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#007aff] transition-colors text-center">
                                                {sign.title}
                                            </h3>
                                            <div className="flex items-center justify-center text-sm font-medium text-[#007aff]">
                                                View Details <ChevronRight className="w-4 h-4 ml-1" />
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}

                        {/* Pagination - Bottom */}
                        <div className="flex justify-center mt-10 overflow-x-auto pt-4">
                            <div className="flex gap-2 p-1 bg-white rounded-xl shadow-sm border border-gray-100">
                                {Array.from({ length: TOTAL_PAGES }).map((_, i) => {
                                    const pageNum = i + 1

                                    return (
                                        <button
                                            key={pageNum}
                                            onClick={() => {
                                                setCurrentPage(pageNum)
                                                window.scrollTo({ top: 0, behavior: 'smooth' })
                                            }}
                                            className={cn(
                                                "w-10 h-10 flex items-center justify-center rounded-lg text-sm font-bold transition-all",
                                                currentPage === pageNum
                                                    ? "bg-[#007aff] text-white shadow-md shadow-blue-200"
                                                    : "text-gray-600 hover:bg-gray-100"
                                            )}
                                        >
                                            {pageNum}
                                        </button>
                                    )
                                })}
                            </div>
                        </div>

                    </div>
                </section>

                <Footer />
            </main>
        </div>
    )
}
