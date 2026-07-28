'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { useAuth } from '@/contexts/auth-context'
import { PracticeTest } from '@/components/fines-and-limits/practice-test'
import { OHIO_DISTRACTED_DRIVING_QUESTIONS } from '@/components/distracted-driving/questions'
import { Button } from '@/components/ui/button'
import { ArrowRight, AlertTriangle, Crown, ChevronRight, HelpCircle, CheckCircle2, AlertCircle, Smartphone, Headphones, ScrollText } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState, useRef } from 'react'
import { StateHubsSection } from '@/components/state-hubs-section'

const currentYear = new Date().getFullYear()

const NAV_ITEMS = [
    { id: 'phone-texting-laws', label: 'Phone & Texting Laws' },
    { id: 'minors', label: 'Teen Drivers' },
    { id: 'fines-consequences', label: 'Fines & Consequences' },
    { id: 'other-distractions', label: 'Other Distractions' },
    { id: 'practice-test', label: 'Practice Test' },
]

interface OhioDistractedDrivingContentProps {
    faqData: { question: string; answer: string }[]
}

export function OhioDistractedDrivingContent({ faqData }: OhioDistractedDrivingContentProps) {
    const { user, userData, isPremium, signOut } = useAuth()
    const router = useRouter()
    const [activeSection, setActiveSection] = useState('')
    const navRef = useRef<HTMLElement>(null)

    const handleLogin = () => router.push('/#login')
    const handleSignup = () => router.push('/#signup')
    const handleLogout = async () => await signOut()
    const handleDashboard = () => router.push('/dashboard')

    const scrollToTest = () => {
        document.getElementById('practice-test')?.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            { rootMargin: '-100px 0px -60% 0px' }
        )

        NAV_ITEMS.forEach(({ id }) => {
            const el = document.getElementById(id)
            if (el) observer.observe(el)
        })

        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        if (activeSection && navRef.current) {
            const activeLink = navRef.current.querySelector(`a[href="#${activeSection}"]`) as HTMLElement
            if (activeLink) {
                const nav = navRef.current
                const scrollLeft = activeLink.offsetLeft - (nav.offsetWidth / 2) + (activeLink.offsetWidth / 2)
                nav.scrollTo({ left: scrollLeft, behavior: 'smooth' })
            }
        }
    }, [activeSection])

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
                            <Link href="/#states" className="hover:text-[#007aff] transition-colors">States</Link>
                            <ChevronRight className="w-4 h-4" />
                            <Link href="/ohio-bmv-permit-test" className="hover:text-[#007aff] transition-colors">Ohio</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span className="text-gray-900 font-medium">Distracted Driving</span>
                        </nav>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 text-white py-12 md:py-20 overflow-hidden relative">
                    <div className="absolute inset-0 bg-[#007aff]/5 pointer-events-none" />
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-1.5 bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                                <ScrollText className="w-3.5 h-3.5" />
                                Study Guide & Practice Test
                            </div>
                            <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
                                Ohio Distracted Driving Laws Practice Test ({currentYear})
                            </h1>
                            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                                Master Ohio's primary distracted driving laws, cell phone regulations, and teen restrictions to prepare for the BMV Temps exam.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Button onClick={scrollToTest} size="lg" className="bg-[#007aff] hover:bg-[#0056cc] text-white font-medium">
                                    Start Practice Test
                                </Button>
                                <Button onClick={() => document.getElementById('phone-texting-laws')?.scrollIntoView({ behavior: 'smooth' })} size="lg" className="border border-gray-700 bg-transparent text-white hover:bg-white/10 font-medium">
                                    Read Laws Guide
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sticky Sub-Navigation */}
                <nav ref={navRef} className="sticky top-0 bg-white border-b border-gray-200 z-30 overflow-x-auto scrollbar-hide py-3">
                    <div className="container mx-auto px-4 flex gap-6 md:gap-8 whitespace-nowrap min-w-max">
                        {NAV_ITEMS.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className={`text-sm font-bold pb-1 border-b-2 transition-all ${
                                    activeSection === item.id
                                        ? 'text-[#007aff] border-[#007aff]'
                                        : 'text-gray-500 border-transparent hover:text-gray-900'
                                }`}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </nav>

                {/* Content Section */}
                <div className="container mx-auto px-4 py-12 md:py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
                        {/* Main Study Guide */}
                        <div className="lg:col-span-2 space-y-16">
                            
                            {/* Phone & Texting Laws */}
                            <section id="phone-texting-laws" className="scroll-mt-20">
                                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-950 mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-blue-100 text-[#007aff] flex items-center justify-center text-base font-bold">1</span>
                                    Phone & Texting Regulations
                                </h2>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Ohio law (HB 49) makes it illegal to hold or support a wireless electronic device in any manner while driving. The law is a primary offense, meaning police can pull you over solely for holding a phone.
                                </p>
                                <div className="p-5 border border-indigo-100 bg-indigo-50/50 rounded-2xl">
                                    <h4 className="font-bold text-indigo-950 mb-2">Hands-Free Requirements for Adults (21+)</h4>
                                    <p className="text-sm text-indigo-900">
                                        Adults may only use hands-free technology, such as Bluetooth or earpieces, and interact with a mounted phone using a single touch or swipe (e.g., to answer a call). Holding the phone is completely prohibited.
                                    </p>
                                </div>
                            </section>

                            {/* Teen Drivers */}
                            <section id="minors" className="scroll-mt-20">
                                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-950 mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-blue-100 text-[#007aff] flex items-center justify-center text-base font-bold">2</span>
                                    Teen Driver Cell Phone Ban
                                </h2>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Drivers under 18 face much stricter rules in Ohio:
                                </p>
                                <div className="p-5 border border-red-100 bg-red-50/50 rounded-2xl">
                                    <h4 className="font-bold text-red-950 mb-2">Zero Tolerance for Teen Device Use</h4>
                                    <p className="text-sm text-red-900 leading-relaxed">
                                        It is **100% illegal** for drivers under 18 to use any wireless electronic device while driving. This includes hands-free devices, Bluetooth headsets, text messaging, and maps. Even using a phone while stopped at a red light is prohibited.
                                    </p>
                                </div>
                            </section>

                            {/* Fines & Consequences */}
                            <section id="fines-consequences" className="scroll-mt-20">
                                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-950 mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-blue-100 text-[#007aff] flex items-center justify-center text-base font-bold">3</span>
                                    Fines & Points
                                </h2>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Distracted driving penalties in Ohio:
                                </p>
                                <ul className="space-y-3 text-sm text-gray-600">
                                    <li>• <strong>Adult 1st Offense:</strong> Up to a $150 fine and 2 points on your driving record.</li>
                                    <li>• <strong>Adult 2nd Offense (within 2 years):</strong> Up to a $250 fine and 3 points.</li>
                                    <li>• <strong>Adult 3rd Offense:</strong> Up to a $500 fine, 4 points, and a potential license suspension.</li>
                                    <li>• <strong>Teens (under 18) 1st Offense:</strong> $150 fine and a <strong>60-day license suspension</strong>.</li>
                                </ul>
                            </section>

                            {/* Other Distractions */}
                            <section id="other-distractions" className="scroll-mt-20">
                                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-950 mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-blue-100 text-[#007aff] flex items-center justify-center text-base font-bold">4</span>
                                    Headphones & Other Distractions
                                </h2>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Other regulations governed by Ohio distracted driving laws:
                                </p>
                                <ul className="space-y-3 text-sm text-gray-600">
                                    <li>• <strong>Dual Headphones Ban:</strong> Wearing headphones or earbuds in both ears while driving is illegal. One ear must remain free to hear sirens and horns.</li>
                                    <li>• <strong>Reckless Operation:</strong> Eating, grooming, or reading while driving can lead to a "Reckless Operation" citation if it causes unsafe vehicle operation.</li>
                                </ul>
                            </section>

                            {/* Practice Test Section */}
                            <section id="practice-test" className="scroll-mt-20 pt-8 border-t border-gray-100">
                                <div className="mb-8">
                                    <h2 className="text-2xl md:text-3xl font-extrabold text-gray-950 mb-3">
                                        Distracted Driving Practice Test
                                    </h2>
                                    <p className="text-gray-600 text-sm">
                                        Test your knowledge of Ohio's cell phone bans, curfews, and headphone regulations.
                                    </p>
                                </div>
                                <PracticeTest questions={OHIO_DISTRACTED_DRIVING_QUESTIONS} showPremiumUpsell={!isPremium} />
                            </section>

                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border border-blue-100 rounded-3xl p-6 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-5">
                                    <Crown className="w-24 h-24 text-blue-900" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Ohio Premium Access</h3>
                                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                    Unlock all 593 exam-like practice questions, unlimited mock tests, and our 100% money-back pass guarantee.
                                </p>
                                <Button onClick={() => router.push('/get-premium?state=ohio')} className="w-full bg-[#007aff] hover:bg-[#0056cc] text-white">
                                    Upgrade to Premium
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                <StateHubsSection />
            </main>

            <Footer />
        </div>
    )
}
