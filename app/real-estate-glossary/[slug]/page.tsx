'use client'

import { useParams, useRouter } from 'next/navigation'
import { AuthProvider, useAuth } from '@/contexts/auth-context'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { GLOSSARY_TERMS, GlossaryTerm } from '@/lib/glossary/terms'
import { ArrowLeft, BookOpen, ChevronRight, HelpCircle, ShieldAlert, Award, Lock } from 'lucide-react'
import Link from 'next/link'

function GlossaryDetailContent() {
    const params = useParams()
    const router = useRouter()
    const { user, userData, isPremium, premiumStatus, signOut } = useAuth()

    const slug = params.slug as string
    const termObj = GLOSSARY_TERMS.find((t) => t.slug === slug)

    if (!termObj) {
        return (
            <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
                <h1 className="text-4xl font-bold mb-4 text-gray-900 font-sans">Term Not Found</h1>
                <Link href="/real-estate-glossary" className="text-[#007aff] font-bold hover:underline flex items-center gap-2 font-sans">
                    <ArrowLeft className="w-5 h-5" /> Back to Glossary
                </Link>
            </div>
        )
    }

    const firstLetter = termObj.term.charAt(0).toUpperCase()
    const sortedTermsForLetter = GLOSSARY_TERMS
        .filter(t => t.term.charAt(0).toUpperCase() === firstLetter)
        .sort((a, b) => a.term.localeCompare(b.term))
    const termIndex = sortedTermsForLetter.findIndex(t => t.slug === termObj.slug)
    const isLocked = !isPremium && (firstLetter !== 'A' || termIndex === -1 || termIndex >= 3)


    const handleLogin = () => router.push('/#login')
    const handleSignup = () => router.push('/#signup')
    const handleLogout = async () => await signOut()
    const handleDashboard = () => router.push('/dashboard')

    // Find related terms objects
    const relatedObjects = GLOSSARY_TERMS.filter(t => termObj.relatedTerms.includes(t.slug))

    return (
        <div className="min-h-screen bg-white font-sans text-gray-800">
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

            <main className="container mx-auto px-4 py-12 lg:py-20 max-w-7xl">
                <div className="max-w-4xl mx-auto">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 text-sm font-semibold text-gray-400 mb-10 overflow-x-auto whitespace-nowrap scrollbar-hide">
                        <Link href="/" className="hover:text-[#007aff] transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href="/real-estate-glossary" className="hover:text-[#007aff] transition-colors">Glossary</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-gray-900 truncate">{termObj.term}</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-12">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-4 py-1.5 bg-[#007aff]/10 text-[#007aff] rounded-full text-xs font-bold uppercase tracking-wider border border-[#007aff]/15">
                                {termObj.category}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                            {termObj.term}
                        </h1>
                    </header>

                    {isLocked ? (
                        <>
                            {/* Blurred teaser definition */}
                            <div className="relative select-none pointer-events-none mb-12">
                                <div className="bg-gradient-to-br from-[#007aff] to-indigo-700 text-white rounded-[2.5rem] p-8 md:p-12 blur-[6px] opacity-45">
                                    <div className="space-y-4">
                                        <h2 className="text-xs font-bold uppercase tracking-widest text-blue-200">Standard Definition</h2>
                                        <p className="text-2xl md:text-3xl font-medium leading-relaxed">
                                            {termObj.definition}
                                        </p>
                                    </div>
                                </div>

                                {/* Premium Gating Paywall Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center p-4 z-20">
                                    <div className="bg-white/95 backdrop-blur-md border border-gray-250 rounded-[2.5rem] p-8 md:p-12 text-center max-w-2xl shadow-2xl space-y-6 pointer-events-auto">
                                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-50 text-amber-500 border border-amber-200 shadow-inner">
                                            <Lock className="w-8 h-8" />
                                        </div>
                                        <div className="space-y-3">
                                            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">
                                                Premium Glossary Access Required
                                            </h2>
                                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                                Detailed examination analyses, real-world scenario calculations, and complete glossary files for <strong>"{termObj.term}"</strong> are exclusive to Real Estate Premium members.
                                            </p>
                                        </div>
                                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                                            <Link
                                                href="/real-estate-premium"
                                                className="w-full sm:w-auto px-8 py-4 bg-[#007aff] hover:bg-[#0056cc] text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/25 active:scale-95 text-center"
                                            >
                                                Upgrade to Premium
                                            </Link>
                                            <Link
                                                href="/real-estate-glossary"
                                                className="w-full sm:w-auto px-8 py-4 bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200 font-bold rounded-xl transition-all active:scale-95 text-center"
                                            >
                                                Back to Glossary List
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            {/* Definition Block */}
                            <section className="bg-gradient-to-br from-[#007aff] to-indigo-700 text-white rounded-[2.5rem] p-8 md:p-12 mb-12 shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-white/20 transition-all duration-700" />
                                <div className="relative z-10 space-y-4">
                                    <h2 className="text-xs font-bold uppercase tracking-widest text-blue-200">Standard Definition</h2>
                                    <p className="text-2xl md:text-3xl font-medium leading-relaxed">
                                        {termObj.definition}
                                    </p>
                                </div>
                            </section>

                            {/* Detailed Breakdown */}
                            <section className="space-y-6 mb-12">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-b pb-3">Detailed Examination Analysis</h2>
                                <p className="text-base md:text-lg leading-relaxed text-gray-700">
                                    {termObj.detailedDescription}
                                </p>
                            </section>

                            {/* Real World Example */}
                            {termObj.example && (
                                <section className="bg-amber-50/50 border border-amber-200/60 rounded-[2rem] p-8 md:p-10 mb-12 space-y-4">
                                    <div className="flex items-center gap-3 text-amber-800">
                                        <HelpCircle className="w-6 h-6" />
                                        <h3 className="text-lg font-bold">Real-World Examination Scenario</h3>
                                    </div>
                                    <p className="text-gray-700 text-base md:text-lg leading-relaxed italic">
                                        "{termObj.example}"
                                    </p>
                                </section>
                            )}

                            {/* Premium Upsell Card */}
                            <section className="bg-gray-900 rounded-[3rem] p-10 md:p-14 text-white relative overflow-hidden mb-16 shadow-2xl">
                                <div className="absolute inset-0 bg-[#007aff]/15" />
                                <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
                                
                                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                                    <div className="space-y-4 text-center md:text-left max-w-xl">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-400 text-gray-950 rounded-full text-xs font-black uppercase tracking-wider">
                                            <Award className="w-3.5 h-3.5" /> premium exam tool
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-extrabold leading-tight">
                                            Master {termObj.term} on Your Practice Exams
                                        </h3>
                                        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                                            Unlock detailed flashcards, simulator questions, and pass-guaranteed study aids tailored to your state's licensing guidelines.
                                        </p>
                                    </div>
                                    <Link
                                        href="/real-estate-premium"
                                        className="px-8 py-4 bg-[#007aff] hover:bg-[#0056cc] text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/25 whitespace-nowrap active:scale-95 flex-shrink-0"
                                    >
                                        Upgrade to Premium
                                    </Link>
                                </div>
                            </section>
                        </>
                    )}

                    {/* Related Terms */}
                    {relatedObjects.length > 0 && (
                        <section className="border-t border-gray-100 pt-10">
                            <h4 className="text-xl font-bold text-gray-900 mb-6">Related Glossary Terms</h4>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {relatedObjects.map(rel => (
                                    <Link
                                        key={rel.slug}
                                        href={`/real-estate-glossary/${rel.slug}`}
                                        className="p-5 border border-gray-150 rounded-2xl hover:border-[#007aff] hover:bg-blue-50/20 transition-all flex items-center justify-between group"
                                    >
                                        <span className="font-bold text-gray-800 group-hover:text-[#007aff] transition-colors">{rel.term}</span>
                                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#007aff] group-hover:translate-x-0.5 transition-all" />
                                    </Link>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default function GlossaryDetailPage() {
    return (
        <AuthProvider>
            <GlossaryDetailContent />
        </AuthProvider>
    )
}
