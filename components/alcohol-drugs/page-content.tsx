'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { useAuth } from '@/contexts/auth-context'
import { PracticeTest } from '@/components/right-of-way/practice-test'
import { ALCOHOL_DRUGS_QUESTIONS } from '@/components/alcohol-drugs/questions'
import { Button } from '@/components/ui/button'
import { ArrowRight, BookOpen, AlertTriangle, Crown, ChevronRight, HelpCircle, CheckCircle2, AlertCircle, ShieldAlert, Activity } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState, useRef } from 'react'
import { StateHubsSection } from '@/components/state-hubs-section'
import { RelatedConcepts } from '@/components/concepts/related-concepts'


// FAQ Data
const FAQ_DATA = [
    {
        question: "What is the legal BAC limit?",
        answer: "For drivers 21 and over, the legal limit is 0.08%. For drivers under 21, most states enforce zero-tolerance laws with limits of 0.01-0.02%."
    },
    {
        question: "What is implied consent?",
        answer: "By obtaining a real estate license, you automatically consent to chemical testing (breath, blood, or urine) if suspected of DUI. Refusal results in automatic license suspension."
    },
    {
        question: "Can I drive after taking prescription medication?",
        answer: "Only if the medication does not impair your ability to drive. Many prescription drugs cause drowsiness or slow reaction time. Read labels and consult your doctor."
    },
    {
        question: "Is marijuana legal to drive under?",
        answer: "No. Even in states where marijuana is legal, driving while impaired by THC is illegal and subject to DUI laws. There is no \"safe\" amount."
    }
]

const NAV_ITEMS = [
    { id: 'bac-limits', label: 'BAC Limits' },
    { id: 'implied-consent', label: 'Implied Consent' },
    { id: 'drug-impairment', label: 'Drugs' },
    { id: 'practice-test', label: 'Practice Test' },
]

export function AlcoholDrugsPageContent() {
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
                            <Link href="/driving-test-concepts" className="hover:text-[#007aff] transition-colors">Driving Test Concepts</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span className="text-gray-900 font-medium">Alcohol &amp; Drugs</span>
                        </nav>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="relative pt-16 pb-20 md:pt-20 md:pb-24 overflow-hidden bg-gradient-to-br from-red-900 via-red-800 to-orange-900 text-white">
                    <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl -mr-32 -mt-32"></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6 md:mb-8">
                                <ShieldAlert className="w-4 h-4 text-red-400" />
                                <span className="text-sm font-medium text-red-100">Safety Critical</span>
                            </div>

                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 tracking-tight leading-tight">
                                Alcohol, Drugs &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-200 to-orange-200">Driving Laws</span>
                            </h1>

                            <p className="text-lg md:text-xl text-red-100/90 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
                                BAC limits, zero-tolerance laws, and DUI consequences. These rules save lives and appear on every Real Estate Exam (~10% coverage).
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
                                <Button
                                    onClick={scrollToTest}
                                    size="lg"
                                    className="bg-white text-red-900 hover:bg-red-50 text-base md:text-lg font-bold px-6 md:px-8 py-5 md:py-6 rounded-xl md:rounded-2xl shadow-xl shadow-red-900/20 border-0"
                                >
                                    Start Practice Test
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why this matters */}
                <section className="py-12 bg-white border-b border-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="bg-red-50 border border-red-100 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
                                <div className="bg-red-100 p-3 rounded-xl shrink-0">
                                    <BookOpen className="w-8 h-8 text-[#007aff]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Why Impaired Driving Laws Are Heavily Tested</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        DUI/DWI crashes kill over 12,000 people annually in the US. Real Estate exams emphasize these laws because impaired driving is both deadly and 100% preventable.
                                    </p>
                                    <ul className="grid sm:grid-cols-2 gap-3 mt-4">
                                        <li className="flex items-center gap-2 text-sm font-medium text-gray-800">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                            BAC limits (0.08%, zero-tolerance)
                                        </li>
                                        <li className="flex items-center gap-2 text-sm font-medium text-gray-800">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                            Implied consent laws
                                        </li>
                                        <li className="flex items-center gap-2 text-sm font-medium text-gray-800">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                            Prescription drug effects
                                        </li>
                                        <li className="flex items-center gap-2 text-sm font-medium text-gray-800">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                            DUI penalties &amp; consequences
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section Navigation Bar */}
                <div className="sticky top-14 md:top-16 z-40 bg-white border-b border-gray-200 shadow-sm">
                    <div className="container mx-auto px-4">
                        <nav ref={navRef} className="flex gap-1 overflow-x-auto scrollbar-hide py-2 -mx-4 px-4 md:mx-0 md:px-0 md:justify-center">
                            {NAV_ITEMS.map(({ id, label }) => (
                                <a
                                    key={id}
                                    href={`#${id}`}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
                                    }}
                                    className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeSection === id
                                        ? 'bg-red-900 text-white'
                                        : 'text-gray-600 hover:bg-gray-100'
                                        }`}
                                >
                                    {label}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>

                {/* ========== SECTION 1: BAC Limits ========== */}
                <section id="bac-limits" className="py-16 md:py-20 bg-gray-50 scroll-mt-32">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Blood Alcohol Concentration (BAC) Limits</h2>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                                Alcohol acts as a depressant, slowing down your brain&apos;s ability to make decisions and react to danger. The law uses <strong>BAC (Blood Alcohol Concentration)</strong> to determine legal intoxication.
                            </p>

                            <div className="prose prose-lg text-gray-700 max-w-none">
                                <h3 className="font-bold text-gray-900 text-xl border-l-4 border-red-600 pl-4 mt-8 mb-4">The 0.08% Limit</h3>
                                <p>
                                    For drivers <strong>21 years or older</strong>, it is illegal to drive with a BAC of <strong>0.08%</strong> or higher. This is the standard in all 50 states. However, you can still be arrested for DUI with a lower BAC (e.g., 0.05%) if an officer determines your driving is impaired.
                                </p>

                                <h3 className="font-bold text-gray-900 text-xl border-l-4 border-yellow-400 pl-4 mt-8 mb-4">Zero Tolerance (Under 21)</h3>
                                <p>
                                    If you are <strong>under 21</strong>, it is illegal to have <em>any</em> measurable alcohol in your system. Most states set this limit at <strong>0.01%</strong> or <strong>0.02%</strong>. The penalties are severe and often include a mandatory one-year license suspension for a first offense.
                                </p>

                                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mt-6 rounded-r-lg">
                                    <strong>Test Tip:</strong> "One drink" is generally defined as 1.5 oz of liquor (40%), 12 oz of beer (5%), or 5 oz of wine (12%). They all contain roughly the same amount of pure alcohol.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========== SECTION 2: Implied Consent ========== */}
                <section id="implied-consent" className="py-16 md:py-20 bg-white scroll-mt-32">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Implied Consent: What It Means</h2>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                                Many drivers don&apos;t realize they have already agreed to a chemical test just by getting their license.
                            </p>

                            <div className="prose prose-lg text-gray-700 max-w-none">
                                <h3 className="font-bold text-gray-900 text-xl border-l-4 border-blue-600 pl-4 mt-8 mb-4">The Agreement</h3>
                                <p>
                                    <strong>&quot;Implied Consent&quot;</strong> means that by the act of driving on public roads, you legally consent to chemical testing (breath, blood, or urine) if an officer suspects you of DUI. You cannot say "I didn't agree to this"—your real estate license signature was the agreement.
                                </p>

                                <h3 className="font-bold text-gray-900 text-xl border-l-4 border-red-600 pl-4 mt-8 mb-4">Consequences of Refusal</h3>
                                <p>
                                    Refusing a chemical test is often punished more severely than the DUI itself to prevent people from hiding their intoxication. If you refuse:
                                </p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Your license will be <strong>automatically suspended</strong> (typically for 1 year), regardless of whether you are found guilty of DUI later.</li>
                                    <li>The refusal can be used against you in court as evidence of "consciousness of guilt."</li>
                                    <li>You may face enhanced fines and mandatory jail time.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========== SECTION 3: Drug Impairment ========== */}
                <section id="drug-impairment" className="py-16 md:py-20 bg-gray-50 scroll-mt-32">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Drugs &amp; Driving: Not Just Alcohol</h2>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                                DUI laws apply to <strong>any</strong> substance that impairs driving—including marijuana, prescription medications, and over-the-counter drugs.
                            </p>

                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                    <h3 className="font-bold text-gray-900 mb-3">Marijuana</h3>
                                    <p className="text-sm text-gray-600">Legal or not, driving while high is <strong>always illegal</strong>. THC impairs reaction time, judgment, and lane control.</p>
                                </div>

                                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                    <h3 className="font-bold text-gray-900 mb-3">Prescription Drugs</h3>
                                    <p className="text-sm text-gray-600">Painkillers, anti-anxiety meds, and sleep aids can cause drowsiness and slow reactions. Read warning labels.</p>
                                </div>

                                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                    <h3 className="font-bold text-gray-900 mb-3">Over-the-Counter</h3>
                                    <p className="text-sm text-gray-600">Cold/allergy medicines like Benadryl can impair driving as much as alcohol. Check labels for drowsiness warnings.</p>
                                </div>
                            </div>

                            <div className="mt-8 bg-blue-600 text-white p-8 rounded-3xl shadow-lg">
                                <h3 className="text-xl font-bold mb-3">The Bottom Line</h3>
                                <p className="text-blue-100 text-base">
                                    If a substance affects your ability to drive safely—whether it&apos;s legal, prescribed, or over-the-counter—driving under its influence is a DUI. No exceptions.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========== Practice Test Section ========== */}
                <section id="practice-test" className="py-16 md:py-24 bg-white relative scroll-mt-32">
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
                            <span className="text-[#007aff] font-bold tracking-wider uppercase text-sm mb-3 block">Interactive Quiz</span>
                            <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-4 md:mb-6">
                                Test Your Knowledge
                            </h2>
                            <p className="text-lg md:text-xl text-gray-600">
                                10 essential questions on BAC limits, implied consent, and drug impairment laws.
                            </p>
                        </div>

                        <PracticeTest questions={ALCOHOL_DRUGS_QUESTIONS} />

                        {/* Credibility Statement */}
                        <div className="mt-12 max-w-3xl mx-auto text-center">
                            <p className="text-sm text-gray-500 leading-relaxed">
                                Questions align with NHTSA guidelines and state Real Estate handbooks. Content reviewed by traffic safety experts.
                            </p>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-16 md:py-20 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-10 md:mb-12">
                                <div className="inline-flex items-center gap-2 text-[#007aff] font-bold mb-3">
                                    <HelpCircle className="w-5 h-5" />
                                    <span className="uppercase tracking-wider text-sm">Common Questions</span>
                                </div>
                                <h2 className="text-2xl md:text-4xl font-black text-gray-900">
                                    Frequently Asked Questions
                                </h2>
                            </div>

                            <div className="space-y-4">
                                {FAQ_DATA.map((faq, index) => (
                                    <details
                                        key={index}
                                        className="group bg-white rounded-xl border border-gray-200 overflow-hidden"
                                    >
                                        <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer font-bold text-gray-900 hover:bg-gray-50 transition-colors">
                                            <span className="pr-4 text-left">{faq.question}</span>
                                            <ChevronRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform flex-shrink-0" />
                                        </summary>
                                        <div className="px-5 md:px-6 pb-5 md:pb-6 pt-4 text-gray-600 leading-relaxed border-t border-gray-100">
                                            {faq.answer}
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Related Articles */}
                <RelatedConcepts currentConceptId="alcohol-drugs" />

                {/* CTA Section */}
                <section className="py-16 md:py-24 bg-gray-900 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#007aff]/10"></div>
                    <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
                        <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">Master All Test Topics</h2>
                        <p className="text-gray-400 text-base md:text-lg mb-8 md:mb-10">
                            Alcohol &amp; drug laws are critical, but they&apos;re just one section. Get comprehensive state-specific prep to pass your test.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                            <Link
                                href="/#states"
                                className="inline-flex items-center justify-center px-6 md:px-8 py-4 bg-[#007aff] hover:bg-[#0056cc] text-white text-base md:text-lg font-bold rounded-xl transition-all shadow-lg hover:shadow-blue-500/25"
                            >
                                Find Your State
                            </Link>
                            <Link
                                href="/real-estate-premium"
                                className="inline-flex items-center justify-center px-6 md:px-8 py-4 bg-transparent border border-gray-700 hover:border-white text-white text-base md:text-lg font-semibold rounded-xl transition-all"
                            >
                                <Crown className="w-5 h-5 mr-2 text-yellow-400" />
                                Get Premium
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <StateHubsSection />

            <Footer />
        </div>
    )
}
