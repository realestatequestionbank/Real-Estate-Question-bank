'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { useAuth } from '@/contexts/auth-context'
import { PracticeTest } from '@/components/fines-and-limits/practice-test'
import { OHIO_TEENS_QUESTIONS } from '@/components/teens/ohio-questions'
import { Button } from '@/components/ui/button'
import { ArrowRight, AlertTriangle, Crown, ChevronRight, HelpCircle, CheckCircle2, AlertCircle, Calendar, GraduationCap, Clock, Shield } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState, useRef } from 'react'
import { StateHubsSection } from '@/components/state-hubs-section'

const currentYear = new Date().getFullYear()

const GDL_STEPS = [
    {
        title: 'Step 1: Get Your Temporary Permit (TIPIC)',
        age: 'Age 15.5',
        desc: 'Visit a BMV examiner station to take your 40-question written temps test and vision screen. Bring your birth certificate, Social Security card, and parent/guardian.'
    },
    {
        title: 'Step 2: Complete Driver Education',
        age: 'During Permit Phase',
        desc: 'Complete an approved course: 24 classroom hours and 8 hours of behind-the-wheel instruction with a certified school.'
    },
    {
        title: 'Step 3: Log Supervised Driving Hours',
        age: 'Min. 6 Months',
        desc: 'Log at least 50 hours of driving practice, including 10 hours at night, certified by a parent or guardian.'
    },
    {
        title: 'Step 4: Take the Road & Maneuverability Test',
        age: 'Age 16+',
        desc: 'Schedule your skills test at a BMV location. You will be tested on basic driving controls and the famous Ohio parallel maneuverability test.'
    }
]

interface OhioTeensPermitTestContentProps {
    faqData: { question: string; answer: string }[]
}

export function OhioTeensPermitTestContent({ faqData }: OhioTeensPermitTestContentProps) {
    const { user, userData, isPremium, signOut } = useAuth()
    const router = useRouter()
    const [activeSection, setActiveSection] = useState('gdl-steps')
    const navRef = useRef<HTMLElement>(null)

    const handleLogin = () => router.push('/#login')
    const handleSignup = () => router.push('/#signup')
    const handleLogout = async () => await signOut()
    const handleDashboard = () => router.push('/dashboard')

    const scrollToTest = () => {
        document.getElementById('practice-test')?.scrollIntoView({ behavior: 'smooth' })
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
                            <Link href="/#states" className="hover:text-[#007aff] transition-colors">States</Link>
                            <ChevronRight className="w-4 h-4" />
                            <Link href="/ohio-real-estate-practice-test" className="hover:text-[#007aff] transition-colors">Ohio</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span className="text-gray-900 font-medium">Teens Guide</span>
                        </nav>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 text-white py-12 md:py-20 overflow-hidden relative">
                    <div className="absolute inset-0 bg-[#007aff]/5 pointer-events-none" />
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-1.5 bg-blue-500/20 text-blue-400 border border-blue-500/30 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                                <GraduationCap className="w-3.5 h-3.5" />
                                Teen & Parent Study Guide
                            </div>
                            <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
                                Ohio GDL & Teen Permit Practice Test ({currentYear})
                            </h1>
                            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                                Get your Ohio temporary permit (temps) faster. Learn GDL restrictions, curfew regulations, supervised driving logs, and take our practice test.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Button onClick={scrollToTest} size="lg" className="bg-[#007aff] hover:bg-[#0056cc] text-white font-medium">
                                    Start Practice Test
                                </Button>
                                <Button onClick={() => document.getElementById('gdl-steps')?.scrollIntoView({ behavior: 'smooth' })} size="lg" className="border border-gray-700 bg-transparent text-white hover:bg-white/10 font-medium">
                                    View GDL Checklist
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content Section */}
                <div className="container mx-auto px-4 py-12 md:py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
                        {/* Main Study Guide */}
                        <div className="lg:col-span-2 space-y-16">
                            
                            {/* GDL Steps */}
                            <section id="gdl-steps" className="scroll-mt-20">
                                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-950 mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-blue-100 text-[#007aff] flex items-center justify-center text-base font-bold">1</span>
                                    Ohio Graduated Driver Licensing (GDL) Checklist
                                </h2>
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    Ohio uses a step-by-step GDL program to help teens build experience and stay safe on the road. Here is the process:
                                </p>
                                <div className="space-y-6">
                                    {GDL_STEPS.map((step, index) => (
                                        <div key={index} className="p-6 border border-gray-100 rounded-2xl bg-gray-50/50 flex gap-4">
                                            <div className="w-10 h-10 rounded-full bg-blue-100 text-[#007aff] flex items-center justify-center font-bold flex-shrink-0">
                                                {index + 1}
                                            </div>
                                            <div>
                                                <div className="flex flex-wrap items-center gap-2 mb-2">
                                                    <h4 className="font-bold text-gray-900 text-lg">{step.title}</h4>
                                                    <span className="bg-[#007aff]/10 text-[#007aff] px-2 py-0.5 rounded-full text-xs font-bold">{step.age}</span>
                                                </div>
                                                <p className="text-gray-600 text-sm">{step.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* GDL Restrictions */}
                            <section id="gdl-restrictions" className="scroll-mt-20">
                                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-950 mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-blue-100 text-[#007aff] flex items-center justify-center text-base font-bold">2</span>
                                    Probationary License Restrictions
                                </h2>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    If you are under 18 and hold a probationary license, you must follow these laws:
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="p-5 border border-gray-100 rounded-2xl bg-white shadow-sm">
                                        <Clock className="w-6 h-6 text-amber-500 mb-3" />
                                        <h4 className="font-bold text-gray-900 mb-2">Curfew Restrictions</h4>
                                        <ul className="space-y-2 text-sm text-gray-600 list-disc pl-4">
                                            <li><strong>Age 16:</strong> Cannot drive between <strong>midnight and 6 a.m.</strong></li>
                                            <li><strong>Age 17:</strong> Cannot drive between <strong>1 a.m. and 5 a.m.</strong></li>
                                            <li>Exceptions apply for work, school, emergencies, or if accompanied by a parent.</li>
                                        </ul>
                                    </div>
                                    <div className="p-5 border border-gray-100 rounded-2xl bg-white shadow-sm">
                                        <Shield className="w-6 h-6 text-green-600 mb-3" />
                                        <h4 className="font-bold text-gray-900 mb-2">Passenger & Seatbelts</h4>
                                        <ul className="space-y-2 text-sm text-gray-600 list-disc pl-4">
                                            <li>May only carry <strong>one passenger</strong> who is not an immediate family member.</li>
                                            <li><strong>Every occupant</strong> in the car must wear a seatbelt when a teen is driving.</li>
                                            <li>No using cell phones or electronic devices (including hands-free).</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* 50-Hour Driving Affidavit */}
                            <section id="affidavit" className="scroll-mt-20">
                                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-950 mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-blue-100 text-[#007aff] flex items-center justify-center text-base font-bold">3</span>
                                    Ohio 50-Hour Driving Affidavit (Form BMV 5791)
                                </h2>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Before taking your road skills test, your parent, guardian, or certified driving instructor must sign the <strong>Fifty Hour Affidavit (Form BMV 5791)</strong> in the presence of a notary public. This form verifies that you have completed at least 50 hours of supervised driving, including 10 hours at night.
                                </p>
                                <div className="p-6 bg-gray-50 border border-gray-100 rounded-3xl space-y-4">
                                    <h4 className="font-bold text-gray-900">Affidavit & Log Sheet Downloads</h4>
                                    <p className="text-sm text-gray-600">
                                        Download the official BMV forms below to track your hours and submit proof:
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 pt-2">
                                        <a
                                            href="https://dam.assets.ohio.gov/image/upload/publicsafety.ohio.gov/bmv5791.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center px-5 py-3 bg-[#007aff] hover:bg-[#0056cc] text-white text-sm font-bold rounded-xl transition-colors shadow-sm"
                                        >
                                            Download Form BMV 5791 (PDF)
                                        </a>
                                        <a
                                            href="https://otso.ohio.gov/programs/ohio-driver-training/for-schools/news-events/news/updated-50-hour-affidavit"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center px-5 py-3 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-sm font-bold rounded-xl transition-colors shadow-sm"
                                        >
                                            View BMV Log Sheet Guidelines
                                        </a>
                                    </div>
                                </div>
                            </section>

                            {/* Practice Test Section */}
                            <section id="practice-test" className="scroll-mt-20 pt-8 border-t border-gray-100">
                                <div className="mb-8">
                                    <h2 className="text-2xl md:text-3xl font-extrabold text-gray-950 mb-3">
                                        Ohio GDL & Teen Practice Test
                                    </h2>
                                    <p className="text-gray-600 text-sm">
                                        Verify your knowledge of Ohio GDL curfew times, passenger restrictions, and permit rules.
                                    </p>
                                </div>
                                <PracticeTest questions={OHIO_TEENS_QUESTIONS} showPremiumUpsell={!isPremium} />
                            </section>

                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-3xl p-6 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-5">
                                    <Crown className="w-24 h-24 text-blue-900" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Ohio Premium Access</h3>
                                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                    Pass your temps test on the very first try. Access 593 realistic BMV questions, unlimited mock tests, and get our Pass Guarantee.
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
