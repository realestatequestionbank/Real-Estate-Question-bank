'use client'

import { useState, useMemo } from 'react'
import { AuthProvider, useAuth } from '@/contexts/auth-context'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { useRouter } from 'next/navigation'
import { Search, ArrowRight, HelpCircle, Lock } from 'lucide-react'
import { GLOSSARY_TERMS, GlossaryTerm } from '@/lib/glossary/terms'
import Link from 'next/link'

function GlossaryContent() {
    const { user, userData, isPremium, premiumStatus, signOut } = useAuth()
    const router = useRouter()
    const [searchQuery, setSearchQuery] = useState('')
    const [activeCategory, setActiveCategory] = useState<string>('All')

    const handleLogin = () => router.push('/#login')
    const handleSignup = () => router.push('/#signup')
    const handleLogout = async () => await signOut()
    const handleDashboard = () => router.push('/dashboard')

    const categories = ['All', 'Property Law', 'Agency & Ethics', 'Contracts', 'Finance', 'Valuation', 'State Rules']

    const filteredTerms = useMemo(() => {
        return GLOSSARY_TERMS.filter(term => {
            const matchesSearch = term.term.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                 term.definition.toLowerCase().includes(searchQuery.toLowerCase())
            const matchesCategory = activeCategory === 'All' || term.category === activeCategory

            return matchesSearch && matchesCategory
        }).sort((a, b) => a.term.localeCompare(b.term))
    }, [searchQuery, activeCategory])

    const groupedTerms = useMemo(() => {
        const groups: { [letter: string]: GlossaryTerm[] } = {}
        filteredTerms.forEach(term => {
            const firstLetter = term.term.charAt(0).toUpperCase()
            if (!groups[firstLetter]) {
                groups[firstLetter] = []
            }
            groups[firstLetter].push(term)
        })
        
        // Sort keys alphabetically
        return Object.keys(groups).sort().reduce((acc: { [letter: string]: GlossaryTerm[] }, key) => {
            acc[key] = groups[key]
            return acc
        }, {})
    }, [filteredTerms])

    return (
        <div className="min-h-screen bg-white font-sans">
            <Navigation
                user={user}
                userData={userData}
                isPremium={isPremium}
                premiumStatus={premiumStatus}
                onLogin={handleLogin}
                onSignup={handleSignup}
                onLogout={handleLogout}
                onDashboard={handleDashboard}
                showGetPremiumLink
            />

            <main className="container mx-auto px-4 py-16 lg:py-24 max-w-7xl">
                {/* Hero Section */}
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 leading-[0.9]">
                        Real Estate <span className="text-[#007aff]">Glossary</span>
                    </h1>
                    <p className="text-xl text-gray-600 font-medium">
                        Master the essential legal, financial, and regulatory terms required to pass your U.S. Real Estate Licensing Exam.
                    </p>
                    {!isPremium && (
                        <div className="mt-8 inline-flex items-center gap-3 bg-amber-50 border border-amber-200 rounded-2xl px-6 py-4 text-left max-w-2xl">
                            <Lock className="w-5 h-5 text-amber-500 flex-shrink-0" />
                            <p className="text-sm text-amber-900 font-medium leading-relaxed">
                                <strong>Guest Preview Mode</strong>: Unlock full glossary definitions, state licensing requirements, scenario audits, and offline cheat sheets by upgrading to <Link href="/real-estate-premium" className="text-[#007aff] font-bold underline hover:text-[#0056cc]">Real Estate Premium</Link>.
                            </p>
                        </div>
                    )}
                </div>

                {/* Filter and Search Bar */}
                <div className="bg-gray-50 rounded-[2.5rem] p-8 md:p-10 shadow-xl border border-gray-100 mb-12">
                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* Search Bar */}
                        <div className="relative flex-1">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search definitions or keywords..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-gray-900 font-medium"
                            />
                        </div>

                        {/* Category Buttons */}
                        <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${
                                        activeCategory === cat
                                            ? 'bg-[#007aff] text-white shadow-lg shadow-blue-200'
                                            : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Alphabetically Grouped Results */}
                {Object.keys(groupedTerms).length > 0 ? (
                    <div className="space-y-16">
                        {Object.entries(groupedTerms).map(([letter, terms]) => (
                            <div key={letter} className="space-y-6">
                                {/* Letter Header Section */}
                                <div className="flex items-center gap-4">
                                    <span className="w-12 h-12 bg-white text-[#007aff] border border-gray-150 font-black text-2xl flex items-center justify-center rounded-2xl shadow-sm">
                                        {letter}
                                    </span>
                                    <div className="h-[1px] bg-gray-200/80 flex-1" />
                                </div>

                                {/* Terms Grid */}
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {terms.map((t, termIdx) => {
                                        const isLocked = !isPremium && (letter !== 'A' || termIdx >= 3);
                                        const CardWrapper = (isLocked ? 'div' : Link) as any;
                                        return (
                                            <CardWrapper
                                                {...(!isLocked ? { href: `/real-estate-glossary/${t.slug}` } : {})}
                                                key={t.slug}
                                                onClick={() => {
                                                    if (isLocked) {
                                                        router.push('/real-estate-premium');
                                                    }
                                                }}
                                                className={`bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${
                                                    isLocked
                                                        ? 'cursor-pointer hover:border-amber-300 hover:shadow-md'
                                                        : 'hover:shadow-xl hover:border-[#007aff]/35'
                                                }`}
                                            >
                                                <div className="space-y-4">
                                                    <div className="flex items-start justify-between gap-4">
                                                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#007aff] transition-colors leading-tight">
                                                            {t.term}
                                                        </h3>
                                                        <span className="p-2 bg-gray-50 text-gray-400 group-hover:text-[#007aff] group-hover:bg-blue-50 rounded-xl transition-all flex-shrink-0">
                                                            {isLocked ? (
                                                                <Lock className="w-4 h-4 text-amber-500" />
                                                            ) : (
                                                                <ArrowRight className="w-4 h-4" />
                                                            )}
                                                        </span>
                                                    </div>
                                                    <p className={`text-gray-600 text-sm leading-relaxed line-clamp-3 ${isLocked ? 'blur-[3px] select-none' : ''}`}>
                                                        {t.definition}
                                                    </p>
                                                </div>
                                                {isLocked && (
                                                    <div className="absolute inset-0 bg-gray-50/10 backdrop-blur-[1px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                        <span className="bg-gray-950/90 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                                                            <Lock className="w-3.5 h-3.5 text-amber-400" /> Unlock with Premium
                                                        </span>
                                                    </div>
                                                )}
                                            </CardWrapper>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-200">
                        <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">No matching glossary terms found</h3>
                        <p className="text-gray-500 max-w-md mx-auto">Try typing a different keyword or resetting filters.</p>
                        <button
                            onClick={() => {
                                setSearchQuery('')
                                setActiveCategory('All')
                            }}
                            className="mt-6 px-6 py-3 bg-[#007aff] hover:bg-[#0056cc] text-white font-semibold rounded-xl shadow-md transition-all active:scale-95"
                        >
                            Reset All Filters
                        </button>
                    </div>
                )}

                {/* Final CTA */}
                <div className="bg-gray-900 rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden mt-24 shadow-2xl">
                    <div className="absolute inset-0 bg-[#007aff]/10" />
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to test your vocab retention?</h2>
                        <p className="text-gray-400 text-base md:text-lg mb-8">
                            Practice with thousands of audited questions covering real estate laws, calculations, and agency ethics.
                        </p>
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center px-8 py-4 bg-[#007aff] hover:bg-[#0056cc] text-white text-base font-bold rounded-xl transition-all shadow-lg active:scale-95"
                        >
                            Start Practice Exam <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default function GlossaryPage() {
    return (
        <AuthProvider>
            <GlossaryContent />
        </AuthProvider>
    )
}
