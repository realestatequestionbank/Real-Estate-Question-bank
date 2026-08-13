'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { useAuth } from '@/contexts/auth-context'
import { PracticeTest } from '@/components/practice/practice-test'
import { NC_25_QUESTIONS } from './questions'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle2, ChevronRight, HelpCircle, HelpCircle as HelpIcon, HelpCircle as HelpIcon2 } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState, useRef } from 'react'
import { StateHubsSection } from '@/components/state-hubs-section'
import { loadFreeQuestions } from '@/lib/utils/csv-loader'
import type { Question } from '@/components/state-permit-test/types'
import { getStateData } from '@/lib/utils/getStateData'

const NAV_ITEMS = [
    { id: 'test-format', label: 'Test Format' },
    { id: 'topics', label: 'Topics' },
    { id: 'practice-test', label: 'Practice Test' },
    { id: 'faq', label: 'FAQ' },
]

interface Nc25QuestionsContentProps {
    faqData: { question: string; answer: string }[]
}

export function Nc25QuestionsContent({ faqData }: Nc25QuestionsContentProps) {
    const { user, userData, isPremium, signOut } = useAuth()
    const router = useRouter()
    const [activeSection, setActiveSection] = useState('')
    const navRef = useRef<HTMLElement>(null)
    const [activeQuestions, setActiveQuestions] = useState<Question[]>(NC_25_QUESTIONS)

    const stateData = getStateData('north-carolina')
    const activeFaq = stateData?.faq || faqData

    useEffect(() => {
        let isMounted = true
        async function fetchRealEstateQuestions() {
            try {
                const realQuestions = await loadFreeQuestions('north-carolina')
                if (isMounted && realQuestions && realQuestions.length > 0) {
                    const slicedQuestions = realQuestions.slice(0, NC_25_QUESTIONS.length).map((q, idx) => ({
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
    }, [])

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
                            <Link href="/north-carolina-real-estate-practice-test" className="hover:text-[#007aff] transition-colors">North Carolina</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span className="text-gray-900 font-medium">25-Question Practice Test</span>
                        </nav>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="relative overflow-hidden bg-white">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"></div>

                    <div className="container mx-auto px-4 relative z-10 pt-8 pb-20 md:pt-20 md:pb-24">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                                <div className="text-left">
                                    <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 mb-4">
                                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                                        <span className="text-sm font-medium text-green-800">Based on NCREC Syllabus 2026</span>
                                    </div>

                                    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-black mb-4 md:mb-6" style={{ lineHeight: '1.2' }}>
                                        North Carolina Real Estate License Practice Test <span className="text-[#007aff]">25 Questions</span> 2026
                                    </h1>

                                    <div className="flex flex-wrap items-center gap-4 mb-6 text-sm">
                                        <div className="flex items-center gap-2">
                                            <span className="text-gray-700 font-medium">Medium difficulty</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-gray-700">&#x23F1; ~15 min</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-gray-700">&#x1F4CA; Avg. first-try score: 71%</span>
                                        </div>
                                    </div>

                                    <p className="text-base text-gray-600 mb-3 max-w-2xl leading-relaxed">
                                        <strong className="text-gray-900">Perfect for:</strong> Aspiring real estate agents &bull; First-time license applicants in North Carolina
                                    </p>

                                    <p className="text-base text-gray-600 mb-8 md:mb-10 max-w-2xl leading-relaxed">
                                        This practice test mirrors the exact format of the real NC Real Estate Exam: 25 multiple-choice questions, need 20/25 to pass (80%). Topics covered match the official 2026 NCREC guidelines — from principles and practices to real estate contracts and financing.
                                    </p>

                                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-start">
                                        <Button
                                            onClick={scrollToTest}
                                            size="lg"
                                            className="bg-[#007aff] hover:bg-[#0056cc] text-white text-base font-bold px-6 md:px-8 py-5 md:py-6 rounded-lg shadow-lg hover:shadow-xl transition-all border-0"
                                        >
                                            Start Practice Test
                                            <ArrowRight className="w-5 h-5 ml-2" />
                                        </Button>
                                    </div>
                                </div>

                                <div className="relative hidden lg:block">
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
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">How the NC Real Estate Exam Works</h2>
                            <p className="text-gray-700 mb-8">
                                The North Carolina Real Estate licensing exam is administered in person at an official testing center. Understanding the format helps you prepare effectively and avoid surprises on exam day.
                            </p>

                            <div className="overflow-hidden rounded-lg border border-gray-200 mb-8">
                                <table className="w-full text-sm">
                                    <thead className="bg-gray-100 text-gray-500 uppercase text-xs tracking-wider">
                                        <tr>
                                            <th className="text-left px-5 py-3">Detail</th>
                                            <th className="text-right px-5 py-3">NC Real Estate Requirement</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 bg-white">
                                        {[
                                            ['Number of questions', '140 multiple-choice (80 National, 40 State, 20 Pretest)'],
                                            ['Passing score', '75% equivalent scaled score'],
                                            ['Time limit', '4 Hours total'],
                                            ['Test format', 'Computer-based, in-person'],
                                            ['Retake wait period', 'Can schedule a retake of the failed portion immediately'],
                                        ].map(([detail, requirement]) => (
                                            <tr key={detail}>
                                                <td className="px-5 py-2.5 text-gray-800">{detail}</td>
                                                <td className="px-5 py-2.5 text-right font-semibold text-gray-900">{requirement}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-5 rounded-r-lg">
                                <h3 className="font-semibold text-gray-900 mb-1">Study Tip</h3>
                                <p className="text-gray-700">
                                    Focus on North Carolina state-specific rules — licensing rules under NCREC, trust account requirements, timeshare regulation, and listing agreement disclosures are frequently tested and easy to confuse.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========== SECTION 2: Topics Covered ========== */}
                <section id="topics" className="py-16 md:py-20 bg-white scroll-mt-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-7xl mx-auto">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">What the 25 Questions Cover</h2>
                            <p className="text-gray-700 mb-8">
                                The NC real estate practice test draws questions covering both National and State-specific concepts. Here is a breakdown of the topic areas and approximate number of questions in each category.
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
                                        {[
                                            ['Real Estate Principles and Practices', '~5 questions'],
                                            ['Real Estate Law and Contracts', '~4 questions'],
                                            ['Agency Relationships and Disclosures', '~4 questions'],
                                            ['Property Valuation and Financial Math', '~3 questions'],
                                            ['Financing, Mortgages, and Escrow', '~3 questions'],
                                            ['State-Specific Licensing Laws and Rules', '~3 questions'],
                                            ['Land Use Controls and Property Ownership', '~3 questions'],
                                        ].map(([topic, count]) => (
                                            <tr key={topic}>
                                                <td className="px-5 py-2.5 text-gray-800">{topic}</td>
                                                <td className="px-5 py-2.5 text-right font-semibold text-gray-900">{count}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
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
                                NC Real Estate License Practice Test &mdash; 25 Questions
                            </h2>
                            <p className="text-lg md:text-xl text-gray-600">
                                Answer all 25 questions. You need 20/25 (80%) to pass the real test.
                            </p>
                        </div>

                        <PracticeTest questions={activeQuestions} />

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
                                    href="/state-guides/north-carolina"
                                    className="relative text-[#007aff] font-medium after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#007aff] after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                                >
                                    NC Real Estate Exam Guide
                                </Link>
                                {' '}and North Carolina licensing laws. Official sources include the NC General Statutes (Chapter 93A) and NCREC publications.
                            </p>
                        </div>
                    </div>
                </section>

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

                {/* Related NC Resources */}
                <section className="py-12 md:py-16 bg-gray-50 border-t border-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Related NC Resources</h2>
                            <div className="grid sm:grid-cols-3 gap-4">
                                {[
                                    {
                                        href: '/north-carolina-real-estate-practice-test',
                                        title: 'Full NC Real Estate Practice Test Bank',
                                        description: 'Hundreds of NC-specific practice questions'
                                    },
                                    {
                                        href: '/state-guides/north-carolina',
                                        title: 'NC Real Estate Exam Guide',
                                        description: 'Eligibility, fees, and pre-licensing details'
                                    },
                                    {
                                        href: '/state-guides/north-carolina',
                                        title: 'Official NC Real Estate Exam Guide',
                                        description: 'Read or download the 2026 NCREC candidate booklet'
                                    }
                                ].map((resource) => (
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
