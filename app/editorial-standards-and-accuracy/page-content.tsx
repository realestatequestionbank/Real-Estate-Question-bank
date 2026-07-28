'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { AuthProvider, useAuth } from '@/contexts/auth-context'
import { CheckCircle, BookOpen, Users, Flag, Shield, Mail, ArrowRight, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


function PremiumLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="relative text-[#007aff] font-medium no-underline group"
        >
            {children}
            <span className="absolute left-0 -bottom-0.5 w-0 h-[1.5px] bg-gradient-to-r from-[#007aff] to-[#5ac8fa] transition-all duration-300 group-hover:w-full" />
        </Link>
    )
}

function MethodologyContent() {
    const router = useRouter()
    const { user, userData, isPremium, premiumStatus, signOut } = useAuth()

    const handleLogin = () => router.push('/#login')
    const handleSignup = () => router.push('/#signup')
    const handleLogout = async () => await signOut()
    const handleDashboard = () => router.push('/dashboard')

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

            {/* Breadcrumbs */}
            <div className="bg-gray-50 py-3">
                <div className="container mx-auto px-4">
                    <div className="flex items-center text-sm text-gray-600">
                        <Link href="/" className="hover:text-[#007aff] cursor-pointer transition-colors duration-200">
                            Home
                        </Link>
                        <ChevronRight className="w-4 h-4 mx-2" />
                        <span className="text-gray-900 font-medium">Editorial Standards & Accuracy</span>
                    </div>
                </div>
            </div>

            <main>
                {/* Hero Section */}
                <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
                    <div className="absolute inset-0">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-block bg-[#007aff]/10 backdrop-blur-sm border border-[#007aff]/20 rounded-full px-4 md:px-6 py-2 mb-6">
                                <span className="text-xs md:text-sm font-medium text-[#007aff]">
                                    Built on Trust & Precision
                                </span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 tracking-tight">
                                Editorial Standards & Accuracy
                            </h1>
                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                                Preparing drivers is a responsibility we don't take lightly. Every question, explanation, and resource is crafted with one goal: helping you become a safer, more confident driver.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-12 md:py-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto">
                            {/* Introduction */}
                            <div className="prose prose-lg text-gray-600 mb-16">
                                <p>
                                    This page describes how we develop, verify, and maintain the practice tests and study materials on our platform. We believe that quality real estate exam prep directly contributes to safer roads—which is why accuracy and clarity are at the core of everything we create. For state-specific resources and detailed preparation guides, explore our comprehensive <PremiumLink href="/state-guides">State Real Estate Guides</PremiumLink>.
                                </p>
                            </div>
                        </div>

                        {/* Process Flowchart - Full Width */}
                    </div>
                </section>

                {/* Process Flowchart - Full Width */}
                <section className="w-full bg-[#007aff] py-20 relative overflow-hidden">
                    {/* Background decorations */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[100px] -translate-y-1/2"></div>
                        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[100px] translate-y-1/2"></div>
                    </div>

                    <div className="container mx-auto px-4 max-w-6xl relative z-10">
                        <div className="text-center mb-16">
                            <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
                                <span className="text-sm font-medium text-white/90">Our Process</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">From Handbook to Practice Test</h2>
                            <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                                Our rigorous 6-step process ensuring every question is accurate, clear, and effective.
                            </p>
                        </div>

                        {/* Desktop Steps Grid */}
                        <div className="hidden lg:grid grid-cols-6 gap-6 relative">
                            {/* Connecting Line */}
                            <div className="absolute top-[60px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-blue-300/30 via-white/50 to-emerald-300/30 border-t border-white/20 dashed"></div>

                            {[
                                {
                                    step: 1,
                                    title: "Official Source",
                                    desc: "State Real Estate handbook acquired & reviewed",
                                    img: "/images/methodology/step-1-handbook.webp"
                                },
                                {
                                    step: 2,
                                    title: "Extract Concepts",
                                    desc: "Key rules & concepts identified manually",
                                    img: "/images/methodology/step-2-extract.webp"
                                },
                                {
                                    step: 3,
                                    title: "Write Questions",
                                    desc: "Clear, plain-English questions authored",
                                    img: "/images/methodology/step-3-write.webp"
                                },
                                {
                                    step: 4,
                                    title: "AI Verification",
                                    desc: "Cross-checked against source material",
                                    img: "/images/methodology/step-4-ai-verification.webp"
                                },
                                {
                                    step: 5,
                                    title: "Expert Review",
                                    desc: "Final check for clarity & accessibility",
                                    img: "/images/methodology/step-5-expert-review.webp"
                                },
                                {
                                    step: 6,
                                    title: "Live on Platform",
                                    desc: "Published to state question bank",
                                    img: "/images/methodology/step-6-live.webp"
                                }
                            ].map((item, i) => (
                                <div key={i} className="group relative flex flex-col items-center text-center">
                                    {/* Image Container with Glass Effect */}
                                    <div className="w-32 h-32 mb-6 relative transition-transform duration-300 transform group-hover:scale-105">
                                        <div className="absolute inset-0 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 shadow-lg group-hover:shadow-blue-500/20 transition-all duration-300"></div>
                                        <div className="relative h-full w-full p-4 flex items-center justify-center">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                src={item.img}
                                                alt={item.title}
                                                className="w-full h-full object-contain drop-shadow-xl rounded-2xl"
                                            />
                                        </div>
                                        <div className="absolute -top-3 -right-3 w-8 h-8 bg-white text-[#007aff] font-bold rounded-full flex items-center justify-center shadow-lg text-sm border-2 border-blue-100 items-center overflow-hidden">
                                            {item.step}
                                        </div>
                                    </div>

                                    <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                                    <p className="text-blue-100/80 text-xs leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* Mobile/Tablet Vertical Flow */}
                        <div className="lg:hidden max-w-lg mx-auto space-y-6">
                            {[
                                {
                                    step: 1,
                                    title: "Official Source",
                                    desc: "State Real Estate handbook acquired & reviewed",
                                    img: "/images/methodology/step-1-handbook.webp"
                                },
                                {
                                    step: 2,
                                    title: "Extract Concepts",
                                    desc: "Key rules & concepts identified manually",
                                    img: "/images/methodology/step-2-extract.webp"
                                },
                                {
                                    step: 3,
                                    title: "Write Questions",
                                    desc: "Clear, plain-English questions authored",
                                    img: "/images/methodology/step-3-write.webp"
                                },
                                {
                                    step: 4,
                                    title: "AI Verification",
                                    desc: "Cross-checked against source material",
                                    img: "/images/methodology/step-4-ai-verification.webp"
                                },
                                {
                                    step: 5,
                                    title: "Expert Review",
                                    desc: "Final check for clarity & accessibility",
                                    img: "/images/methodology/step-5-expert-review.webp"
                                },
                                {
                                    step: 6,
                                    title: "Live on Platform",
                                    desc: "Published to state question bank",
                                    img: "/images/methodology/step-6-live.webp"
                                }
                            ].map((item, i) => (
                                <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex items-center gap-5 relative overflow-hidden group">
                                    {/* Number Watermark */}
                                    <div className="absolute -right-4 -bottom-4 text-[100px] font-bold text-white/5 leading-none pointer-events-none select-none">
                                        {item.step}
                                    </div>

                                    <div className="w-20 h-20 flex-shrink-0 bg-white/10 rounded-xl p-2 border border-white/10 shadow-inner">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="w-full h-full object-contain drop-shadow-md rounded-xl"
                                        />
                                    </div>
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="bg-white/20 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded-full">Step {item.step}</span>
                                        </div>
                                        <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                                        <p className="text-blue-100/80 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Content Section Continued */}
                <section className="py-12 md:py-16 pt-0">
                    <div className="container mx-auto px-4">

                        <div className="max-w-3xl mx-auto space-y-16 mt-16">
                            {/* Fact Checking Process */}
                            <div>
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
                                        <CheckCircle className="w-6 h-6 text-[#007aff]" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">How We Verify Accuracy</h2>
                                </div>

                                <div className="grid gap-6">
                                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Primary Source Validation</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Each question, hint, and explanation is cross-referenced with the current edition of the official driver's manual published by each state's motor vehicle agency. When federal regulations apply, we consult those directly as well. We deliberately avoid secondary sources or unofficial interpretations.
                                        </p>
                                    </div>

                                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Thoughtful Content Development</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Our educational team transforms dense regulatory language into accessible, straightforward questions. The goal is genuine comprehension—not just memorization. We write with clarity so that concepts stick and translate to real-world driving situations.
                                        </p>
                                    </div>

                                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Assurance Review</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Before anything goes live, it passes through multiple review stages checking for factual correctness, readability, and pedagogical effectiveness. This process ensures our materials serve learners of all backgrounds, including those studying in a second language.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Content Freshness */}
                            <div>
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
                                        <BookOpen className="w-6 h-6 text-emerald-600" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Keeping Content Current</h2>
                                </div>

                                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-50 to-blue-50 rounded-full -mr-32 -mt-32 blur-2xl"></div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-4 relative z-10">Annual Reviews, Continuous Monitoring</h3>
                                    <p className="text-gray-600 mb-6 relative z-10 leading-relaxed">
                                        Every year, we conduct a comprehensive review of our entire question bank across all states, updating content to reflect the latest driver's manuals and regulatory changes. The edition year displayed on each test page corresponds directly to this update cycle.
                                    </p>

                                    <div className="grid sm:grid-cols-2 gap-4 relative z-10">
                                        {[
                                            'Official State Driver Manuals',
                                            'Motor Vehicle Agency Websites',
                                            'Legislative & Regulatory Updates',
                                            'Community-Reported Feedback'
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-3 bg-gradient-to-r from-gray-50 to-white rounded-xl p-3 border border-gray-100/50">
                                                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400"></div>
                                                <span className="text-sm font-medium text-gray-700">{item}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-8 pt-8 border-t border-gray-100 relative z-10">
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            In addition to our annual review, we actively track Real Estate announcements, traffic law amendments, and policy changes on a weekly basis. When mid-year updates occur—new signage, penalty adjustments, or procedural shifts—we revise affected content promptly. This ensures you're always studying material that matches what you'll encounter on your actual exam.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Team of Experts */}
                            <div>
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
                                        <Users className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">The People Behind the Content</h2>
                                </div>

                                <div className="prose prose-lg text-gray-600 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                                    <p className="mb-4 leading-relaxed">
                                        Our content is shaped by a diverse group of professionals spanning real estate exam prep, instructional design, and language accessibility. A dedicated educational lead oversees our standards and ensures consistency across all materials.
                                    </p>
                                    <p className="leading-relaxed">
                                        This collaborative approach blends rigorous fact-checking with learner-friendly design. The result is content that's both accurate and genuinely helpful—whether you're a first-time driver or brushing up after years on the road. For detailed, state-by-state preparation resources, visit our <PremiumLink href="/state-guides">State Real Estate Guides</PremiumLink>.
                                    </p>
                                </div>
                            </div>

                            {/* Corrections & Independence Grid */}
                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Corrections Policy */}
                                <div>
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-10 h-10 bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                                            <Flag className="w-5 h-5 text-orange-600" />
                                        </div>
                                        <h2 className="text-xl font-bold text-gray-900">Corrections & Feedback</h2>
                                    </div>
                                    <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                                        <ul className="space-y-4">
                                            <li>
                                                <strong className="block text-gray-900 text-sm mb-1">Report an Issue</strong>
                                                <span className="text-gray-600 text-sm leading-relaxed">Spotted something that doesn't look right? Let us know through our contact form with as much detail as possible—it helps us respond faster.</span>
                                            </li>
                                            <li>
                                                <strong className="block text-gray-900 text-sm mb-1">Verification & Resolution</strong>
                                                <span className="text-gray-600 text-sm leading-relaxed">Every report is checked against official sources. Confirmed errors are corrected right away—no exceptions.</span>
                                            </li>
                                            <li>
                                                <strong className="block text-gray-900 text-sm mb-1">Commitment to Accuracy</strong>
                                                <span className="text-gray-600 text-sm leading-relaxed">We treat every correction as an opportunity to improve. Verified fixes are deployed quickly and benefit all future learners.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Editorial Independence */}
                                <div>
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-10 h-10 bg-gradient-to-br from-indigo-100 to-indigo-50 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                                            <Shield className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <h2 className="text-xl font-bold text-gray-900">Editorial Independence</h2>
                                    </div>
                                    <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                            We have no affiliation with any state Real Estate, driving school, or automotive organization. Our only priority is providing accurate, unbiased educational resources.
                                        </p>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            Advertisers and sponsors have zero influence over our content, review processes, or publication decisions. This independence is fundamental to the trust our users place in us.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Footer */}
                            <div className="pt-8">
                                <div className="bg-gradient-to-br from-[#007aff]/5 to-blue-50/50 rounded-3xl p-8 md:p-10 text-center border border-[#007aff]/10 shadow-sm">
                                    <div className="w-14 h-14 bg-gradient-to-br from-[#007aff]/20 to-[#007aff]/10 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-sm">
                                        <Mail className="w-7 h-7 text-[#007aff]" />
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Questions or Feedback?</h3>
                                    <p className="text-gray-600 mb-8 max-w-lg mx-auto leading-relaxed">
                                        Have a question about how we develop our content? Want to report an issue or share feedback? We'd love to hear from you.
                                    </p>
                                    <Link
                                        href="/contact-us"
                                        className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#007aff] hover:bg-[#0056cc] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5"
                                    >
                                        Get in Touch
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div >
    )
}

export default function MethodologyPageContent() {
    return (
        <AuthProvider>
            <MethodologyContent />
        </AuthProvider>
    )
}
