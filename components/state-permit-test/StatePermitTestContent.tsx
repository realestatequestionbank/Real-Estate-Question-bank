'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { useAuth } from '@/contexts/auth-context'
import { PracticeTest } from '@/components/practice/practice-test'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle2, ChevronRight, HelpCircle, Crown, Star, Shield } from 'lucide-react'
import { StatePremiumPricing } from '@/components/premium/state-premium-pricing'
import { PRICING } from '@/lib/constants'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState, useRef } from 'react'
import { StateHubsSection } from '@/components/state-hubs-section'
import type { Question, StatePermitTestConfig } from './types'
import { loadFreeQuestions } from '@/lib/utils/csv-loader'
import { getStateData } from '@/lib/utils/getStateData'
import { ProductMockupDesktop } from '@/components/ProductMockupDesktop'

const NAV_ITEMS = [
    { id: 'test-format', label: 'Test Format' },
    { id: 'topics', label: 'Topics' },
    { id: 'practice-test', label: 'Practice Test' },
    { id: 'faq', label: 'FAQ' },
]

interface StatePermitTestContentProps {
    config: StatePermitTestConfig
    questions: Question[]
    faqData: { question: string; answer: string }[]
}

export function StatePermitTestContent({ config, questions, faqData }: StatePermitTestContentProps) {
    const { user, userData, isPremium, signOut } = useAuth()
    const router = useRouter()
    const [activeSection, setActiveSection] = useState('')
    const navRef = useRef<HTMLElement>(null)
    const [activeQuestions, setActiveQuestions] = useState<Question[]>(questions)

    const stateKey = config.stateName.toLowerCase().replace(/\s+/g, '-')
    const stateData = getStateData(stateKey as any)
    const activeFaq = stateData?.faq || faqData

    useEffect(() => {
        let isMounted = true
        async function fetchRealEstateQuestions() {
            try {
                const stateKey = config.stateName.toLowerCase().replace(/\s+/g, '-')
                const realQuestions = await loadFreeQuestions(stateKey)
                if (isMounted && realQuestions && realQuestions.length > 0) {
                    const pathname = typeof window !== 'undefined' ? window.location.pathname : ''
                    const match = pathname.match(/-(\d+)-questions/)
                    const targetCount = match ? parseInt(match[1], 10) : questions.length
                    
                    const slicedQuestions = realQuestions.slice(0, targetCount).map((q, idx) => ({
                        ...q,
                        id: idx + 1
                    })) as unknown as Question[]
                    setActiveQuestions(slicedQuestions)
                }
            } catch (error) {
                console.error("Failed to load real estate questions on client fallback:", error)
            }
        }
        fetchRealEstateQuestions()
        return () => {
            isMounted = false
        }
    }, [config.stateName, questions.length])

    const handleLogin = () => router.push('/#login')
    const handleSignup = () => router.push('/#signup')
    const handleLogout = async () => await signOut()
    const handleDashboard = () => router.push('/dashboard')

    
    const handleUpgradePremium = (duration: number) => {
        router.push('/get-premium?plan=' + duration)
    }

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

    
    const calcDiscount = (original: number, discounted: number) => {
        const discount = Math.round(((original - discounted) / original) * 100);
        return discount > 0 ? `${discount}% OFF` : null;
    };
    const pricingPlans = {
      sevenDay: {
        duration: 7,
        title: '7-Day Plan',
        badge: calcDiscount(PRICING.PLANS.SEVEN_DAY.originalPrice, PRICING.PLANS.SEVEN_DAY.discountedPrice),
        originalPrice: `$${PRICING.PLANS.SEVEN_DAY.originalPrice}`,
        discountedPrice: `$${PRICING.PLANS.SEVEN_DAY.discountedPrice}`,
        stripePriceId: PRICING.PLANS.SEVEN_DAY.stripePriceId,
      },
      thirtyDay: {
        duration: 30,
        title: '30-Day Plan',
        badge: calcDiscount(PRICING.PLANS.THIRTY_DAY.originalPrice, PRICING.PLANS.THIRTY_DAY.discountedPrice),
        originalPrice: `$${PRICING.PLANS.THIRTY_DAY.originalPrice}`,
        discountedPrice: `$${PRICING.PLANS.THIRTY_DAY.discountedPrice}`,
        stripePriceId: PRICING.PLANS.THIRTY_DAY.stripePriceId,
        isPopular: true,
      },
      lifetime: {
        duration: 36500,
        title: 'Lifetime Plan',
        badge: calcDiscount(PRICING.PLANS.LIFETIME.originalPrice, PRICING.PLANS.LIFETIME.discountedPrice),
        originalPrice: `$${PRICING.PLANS.LIFETIME.originalPrice}`,
        discountedPrice: `$${PRICING.PLANS.LIFETIME.discountedPrice}`,
        stripePriceId: PRICING.PLANS.LIFETIME.stripePriceId,
      },
    };

    const questionCountNote =
        activeQuestions.length !== config.realQuestionCount
            ? `This practice set has ${activeQuestions.length} questions — the real ${config.departmentAbbr} test has ${config.realQuestionCount}.`
            : null

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
                            <Link href={config.mainPageUrl} className="hover:text-[#007aff] transition-colors">{config.stateName}</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span className="text-gray-900 font-medium">{activeQuestions.length}-Question Practice Test</span>
                        </nav>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="relative overflow-hidden bg-white">
                    <div className="container mx-auto px-4 relative z-10 pt-8 pb-20 md:pt-20 md:pb-24">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                                <div className="text-left">
                                    <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 mb-4">
                                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                                        <span className="text-sm font-medium text-green-800">Based on {config.departmentName} Exam Outlines {config.year}</span>
                                    </div>

                                    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-black mb-4 md:mb-6" style={{ lineHeight: '1.2' }}>
                                        {config.stateName} Real Estate License Practice Test <span className="text-[#007aff]">{activeQuestions.length} Questions</span> {config.year}
                                    </h1>

                                    <div className="flex flex-wrap items-center gap-4 mb-6 text-sm">
                                        <div className="flex items-center gap-2">
                                            <span className="text-gray-700 font-medium">Medium difficulty</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-gray-700">&#x23F1; ~{Math.round(activeQuestions.length * 0.6)} min</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-gray-700">&#x1F4CA; Avg. first-try score: 71%</span>
                                        </div>
                                    </div>

                                    <p className="text-base text-gray-600 mb-3 max-w-2xl leading-relaxed">
                                        <strong className="text-gray-900">Perfect for:</strong> Aspiring real estate agents &bull; First-time license applicants in {config.stateName}
                                    </p>

                                    <p className="text-base text-gray-600 mb-8 md:mb-10 max-w-2xl leading-relaxed">
                                        {activeQuestions.length === config.realQuestionCount
                                            ? <>This practice test mirrors the exact format of the real {config.stateCode} Real Estate Exam: {activeQuestions.length} multiple-choice questions, need {config.realPassCount}/{config.realQuestionCount} to pass ({config.passPercent}%). Topics covered match the official {config.year} {config.departmentName} Real Estate Exam guidelines.</>
                                            : <>This {activeQuestions.length}-question practice set prepares you for the real {config.stateCode} Real Estate Exam, which has {config.realQuestionCount} questions and requires {config.realPassCount} correct ({config.passPercent}%) to pass. Topics match the official {config.year} {config.departmentName} Real Estate Exam guidelines.</>
                                        }
                                    </p>

                                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-start">
                                        <Button
                                            onClick={scrollToTest}
                                            size="lg"
                                            className="bg-[#007aff] hover:bg-[#0056cc] text-white text-base font-bold px-6 md:px-8 py-5 md:py-6 rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-transparent"
                                        >
                                            Start Practice Test
                                            <ArrowRight className="w-5 h-5 ml-2" />
                                        </Button>
                                        
                                        {!isPremium && (
                                            <Button
                                                onClick={(e) => {
                                                    e.preventDefault()
                                                    document.getElementById('premium-section')?.scrollIntoView({ behavior: 'smooth' })
                                                }}
                                                size="lg"
                                                variant="outline"
                                                className="bg-white hover:bg-[#f0f7ff] border-[#007aff] border-2 text-[#007aff] hover:text-[#007aff] text-base font-bold px-6 md:px-8 py-5 md:py-6 rounded-lg shadow-sm hover:shadow-md transition-all group"
                                            >
                                                <Crown className="w-5 h-5 mr-2 text-[#007aff] group-hover:scale-110 transition-transform" />
                                                Unlock all 2000 Questions
                                            </Button>
                                        )}
                                    </div>
                                </div>

                                <div className="relative hidden lg:block">
                                    <div className="max-w-lg mx-auto flex items-center mb-6 mt-12">
                                        <ProductMockupDesktop />
                                    </div>
                                    <div className="max-w-md mx-auto mt-4">
                                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Exam topics covered here:</p>
                                        <div className="flex flex-wrap gap-2">
                                            {[
                                                'Principles & Practices',
                                                'Real Estate Law',
                                                'Contracts',
                                                'Agency Relationships',
                                                'Property Valuation',
                                                'Real Estate Math',
                                                'Financing & Mortgages',
                                                'Licensing Regulations',
                                            ].map((tag) => (
                                                <span key={tag} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
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
                                        ? 'bg-[#007aff] text-white'
                                        : 'text-gray-600 hover:bg-blue-50 hover:text-[#007aff]'
                                        }`}
                                >
                                    {label}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>

                {/* ========== SECTION 1: Test Format ========== */}
                <section id="test-format" className="py-16 md:py-20 bg-gray-50 scroll-mt-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-7xl mx-auto">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">How the {config.stateCode} Real Estate Exam Works</h2>
                            <p className="text-gray-700 mb-8">
                                The {config.stateName} real estate exam is administered in person at an official testing center. Understanding the format helps you prepare effectively and avoid surprises on exam day.
                            </p>

                            <div className="overflow-hidden rounded-lg border border-gray-200 mb-8">
                                <table className="w-full text-sm">
                                    <thead className="bg-gray-100 text-gray-500 uppercase text-xs tracking-wider">
                                        <tr>
                                            <th className="text-left px-5 py-3">Detail</th>
                                            <th className="text-right px-5 py-3">{config.departmentAbbr} Requirement</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 bg-white">
                                        {[
                                            ['Number of questions', `${config.realQuestionCount} multiple-choice`],
                                            ['Passing score', `${config.realPassCount}/${config.realQuestionCount} (${config.passPercent}%)`],
                                            ['Questions you can miss', `Up to ${config.realQuestionCount - config.realPassCount}`],
                                            ['Time limit', config.timeLimit || '3 Hours'],
                                            ['Test format', 'In-person only (no online option)'],
                                            ['Retake wait period', config.retakePolicy],
                                        ].map(([detail, requirement]) => (
                                            <tr key={detail}>
                                                <td className="px-5 py-2.5 text-gray-800">{detail}</td>
                                                <td className="px-5 py-2.5 text-right font-semibold text-gray-900">{requirement}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {questionCountNote && (
                                <div className="bg-blue-50 border-l-4 border-blue-400 p-5 rounded-r-lg">
                                    <p className="text-gray-700">{questionCountNote}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* ========== SECTION 2: Topics Covered ========== */}
                <section id="topics" className="py-16 md:py-20 bg-white scroll-mt-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-7xl mx-auto">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">What the {activeQuestions.length} Questions Cover</h2>
                            <p className="text-gray-700 mb-8">
                                The {config.departmentAbbr} real estate licensing exam draws questions covering both National and State-specific real estate concepts. Here is a breakdown of the topic areas and approximate number of questions in each category.
                            </p>

                            <div className="overflow-hidden rounded-lg border border-gray-200 mb-8">
                                <table className="w-full text-sm">
                                    <thead className="bg-gray-100 text-gray-500 uppercase text-xs tracking-wider">
                                        <tr>
                                            <th className="text-left px-5 py-3">Topic Area</th>
                                            <th className="text-right px-5 py-3">Approx. Questions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 bg-white">
                                        {(() => {
                                            const total = activeQuestions.length;
                                            const proportions = [0.17, 0.13, 0.13, 0.13, 0.13, 0.15, 0.16];
                                            let counts = proportions.map(p => Math.round(total * p));
                                            
                                            // Adjust counts so they sum to total exactly
                                            const sum = counts.reduce((a, b) => a + b, 0);
                                            const diff = total - sum;
                                            if (diff !== 0 && counts.length > 0) {
                                                counts[0] += diff;
                                            }
                                            
                                            // Ensure no zero values if total > 0
                                            counts = counts.map(c => (total > 0 && c <= 0 ? 1 : c));
                                            
                                            const topics = [
                                                'Real Estate Principles and Practices',
                                                'Real Estate Law and Contracts',
                                                'Agency Relationships and Disclosures',
                                                'Property Valuation and Financial Math',
                                                'Financing, Mortgages, and Escrow',
                                                'State-Specific Licensing Laws and Rules',
                                                'Land Use Controls and Property Ownership'
                                            ];
                                            
                                            return topics.map((topic, idx) => (
                                                <tr key={topic}>
                                                    <td className="px-5 py-2.5 text-gray-800">{topic}</td>
                                                    <td className="px-5 py-2.5 text-right font-semibold text-gray-900">
                                                        ~{counts[idx]} questions
                                                    </td>
                                                </tr>
                                            ));
                                        })()}
                                    </tbody>
                                </table>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-5 rounded-r-lg">
                                <h3 className="font-semibold text-gray-900 mb-1">Study Tip</h3>
                                <p className="text-gray-700">
                                    Focus on state-specific rules that differ from national principles — licensing requirements, escrow rules, post-license education, and commission regulations are frequently tested and easy to confuse.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Practice Test Section */}
                <section id="practice-test" className="py-16 md:py-24 bg-gray-50 relative scroll-mt-20">
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
                            <span className="text-[#007aff] font-bold tracking-wider uppercase text-sm mb-3 block">Interactive Exam Simulator</span>
                            <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-4 md:mb-6">
                                {config.stateCode} Real Estate License Practice Test &mdash; {activeQuestions.length} Questions
                            </h2>

                        </div>

                        <PracticeTest questions={activeQuestions} showPremiumUpsell={!isPremium} />

                        <div className="mt-12 max-w-3xl mx-auto text-center">
                            <p className="text-sm text-gray-500 leading-relaxed">
                                Questions are created and maintained by the Real Estate Question Bank content team following a rigorous{' '}
                                <Link
                                    href="/editorial-standards-and-accuracy"
                                    className="relative text-[#007aff] font-medium after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#007aff] after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                                >
                                    editorial process
                                </Link>
                                . Content is updated regularly to reflect the latest{' '}
                                <Link
                                    href={config.stateGuideUrl || `/state-guides/${config.stateCode.toLowerCase()}`}
                                    className="relative text-[#007aff] font-medium after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#007aff] after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                                >
                                    {config.stateName} Real Estate Exam Guide
                                </Link>
                                {' '}and {config.stateName} licensing laws.
                            </p>
                        </div>
                    </div>
                </section>

                
                {/* Premium Banner Upsell */}
                {!isPremium && (
                    <StatePremiumPricing
                        stateName={config.stateName}
                        formattedQuestionCount="2000"
                        pricingPlans={pricingPlans}
                        handleUpgradePremium={handleUpgradePremium}
                        // Omit video modal as per standard page
                    />
                )}


                {/* FAQ Section */}
                <section id="faq" className="py-16 md:py-20 bg-white">
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
                                {activeFaq.map((faq, index) => (
                                    <details
                                        key={index}
                                        className="group bg-white rounded-xl border border-gray-200 overflow-hidden"
                                    >
                                        <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer font-bold text-gray-900 hover:bg-gray-50 transition-colors">
                                            <span className="pr-4 text-left">{faq.question}</span>
                                            <ChevronRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform flex-shrink-0" />
                                        </summary>
                                        <div className="px-5 md:px-6 pb-5 md:pb-6 pt-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                                            {faq.answer}
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Related Resources */}
                <section className="py-12 md:py-16 bg-gray-50 border-t border-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Related {config.stateName} Resources</h2>
                            <div className={`grid gap-4 ${config.stateGuideUrl ? 'sm:grid-cols-3' : 'sm:grid-cols-2'}`}>
                                {[
                                    {
                                        href: config.mainPageUrl,
                                        title: `Full ${config.stateCode} Real Estate Practice Test Bank`,
                                        description: `Hundreds of ${config.stateName}-specific practice questions`
                                    },
                                    config.stateGuideUrl ? {
                                        href: config.stateGuideUrl,
                                        title: `${config.stateCode} Real Estate real estate exam Guide`,
                                        description: 'Eligibility, fees, documents, and office locations'
                                    } : null,
                                    {
                                        href: config.stateGuideUrl || `/state-guides/${config.stateCode.toLowerCase()}`,
                                        title: `Official ${config.stateName} Real Estate Exam Guide`,
                                        description: `Step-by-step pre-licensing guide for ${config.stateName}`
                                    }
                                ].filter((r): r is Exclude<typeof r, null> => r !== null).map((resource) => (
                                    <Link
                                        key={resource.href}
                                        href={resource.href}
                                        className="block bg-white border border-gray-200 rounded-xl p-5 hover:border-[#007aff] hover:shadow-sm transition-all group"
                                    >
                                        <h3 className="font-semibold text-gray-900 group-hover:text-[#007aff] transition-colors mb-1">
                                            {resource.title}
                                        </h3>
                                        <p className="text-sm text-gray-500">{resource.description}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <StateHubsSection />
            <Footer />
        </div>
    )
}
