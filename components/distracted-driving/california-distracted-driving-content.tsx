'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { useAuth } from '@/contexts/auth-context'
import { PracticeTest } from '@/components/right-of-way/practice-test'
import { CALIFORNIA_DISTRACTED_DRIVING_QUESTIONS } from '@/components/distracted-driving/questions'
import { Button } from '@/components/ui/button'
import { ArrowRight, AlertTriangle, Crown, ChevronRight, HelpCircle, CheckCircle2, AlertCircle, Smartphone, Headphones, BookOpen, ScrollText } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
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

interface CaliforniaDistractedDrivingContentProps {
    faqData: { question: string; answer: string }[]
}

export function CaliforniaDistractedDrivingContent({ faqData }: CaliforniaDistractedDrivingContentProps) {
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
                            <Link href="/california-real-estate-practice-test" className="hover:text-[#007aff] transition-colors">California</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span className="text-gray-900 font-medium">Distracted Driving</span>
                        </nav>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="relative overflow-hidden bg-white">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"></div>

                    {/* Mobile-only: full-width image above text */}
                    <div className="relative lg:hidden w-full h-56 overflow-hidden">
                        <Image
                            src="/images/distracted-driving-hero.webp"
                            alt="California Distracted Driving Laws Illustration"
                            fill
                            sizes="100vw"
                            quality={65}
                            className="object-cover object-center"
                            priority
                        />
                    </div>

                    <div className="container mx-auto px-4 relative z-10 pt-8 pb-20 md:pt-20 md:pb-24">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                                {/* Left Column - Text Content */}
                                <div className="text-left">
                                    <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 mb-4">
                                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                                        <span className="text-sm font-medium text-green-800">Based on CA Real Estate Handbook {currentYear}</span>
                                    </div>
                                    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-black mb-4 md:mb-6" style={{ lineHeight: '1.2' }}>
                                        California Real Estate <span className="text-[#007aff]">Distracted Driving</span> Laws Permit Practice Test {currentYear}
                                    </h1>
                                    <p className="text-base text-gray-600 mb-8 md:mb-10 max-w-2xl leading-relaxed">
                                        Master California's hands-free law, texting ban, teen driver restrictions, and fine structure with 20 challenging practice questions. Distracted driving questions appear on every California Real Estate Exam.
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

                                {/* Right Column - Image (desktop only) */}
                                <div className="relative hidden lg:block">
                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-md mx-auto">
                                        <Image
                                            src="/images/distracted-driving-hero.webp"
                                            alt="California Distracted Driving Laws Illustration"
                                            width={448}
                                            height={299}
                                            sizes="448px"
                                            quality={70}
                                            className="w-full h-auto"
                                            priority
                                        />
                                    </div>
                                    <div className="max-w-md mx-auto mt-4">
                                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Exam topics covered here:</p>
                                        <div className="flex flex-wrap gap-2">
                                            {[
                                                'VC 23123 Hands-Free Law',
                                                'VC 23123.5 Texting Ban',
                                                'VC 23124 Teen Rules',
                                                'VC 27400 Headphone Law',
                                                'AB-1785 Mounted Phone',
                                                'Real Estate Point System',
                                                'Fine Schedule',
                                                '3 Types of Distraction',
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

                {/* Updated Notice & Intro */}
                <section className="py-12 bg-white border-b border-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                            {/* Left column: notice + prose */}
                            <div>
                                {/* Updated Notice */}
                                <div className="bg-green-50 border-l-4 border-green-500 p-5 mb-8 rounded-r-lg">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h3 className="text-lg font-bold text-green-900 mb-1">Updated for {currentYear}</h3>
                                            <p className="text-green-800 text-sm leading-relaxed">
                                                This practice test reflects California's current distracted driving laws, including AB-1785 (hands-free requirements) and the 2021 point-system update. Content is based on the official <Link href="/handbooks/california" className="underline hover:text-green-900 font-medium">{currentYear} California Real Estate Driver's Handbook</Link> and the California Vehicle Code.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Detailed Introduction */}
                                <div className="prose prose-gray max-w-none">
                                    <p className="text-base text-gray-700 leading-relaxed mb-4">
                                        Distracted driving is one of the most dangerous and preventable causes of crashes in California. The Real Estate Exam reflects this priority—cell phone and distraction questions appear regularly and cite specific California Vehicle Code sections.
                                    </p>
                                    <p className="text-base text-gray-700 leading-relaxed mb-4">
                                        This free practice test covers all of California's major distracted driving statutes. You'll learn the difference between VC 23123 (hands-free law for all adults), VC 23123.5 (texting ban), and VC 23124 (complete prohibition for drivers under 18). You'll also learn the fine structure, the 2021 point-system update, and California's headphone law (VC 27400).
                                    </p>
                                    <p className="text-base text-gray-700 leading-relaxed">
                                        Expect questions about: what adult drivers may and may not do with a mounted phone, why teen drivers face stricter rules than adults, the base fine for a first versus second offense, when a distracted driving violation adds a Real Estate point, and which distractions are classified as visual, manual, or cognitive.
                                    </p>
                                </div>
                            </div>

                            {/* Right column: Why this matters */}
                            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 md:p-8 flex flex-col gap-6 items-start">
                                <div className="bg-blue-100 p-3 rounded-xl shrink-0">
                                    <ScrollText className="w-8 h-8 text-[#007aff]" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Why is this on the California real estate exam?</h3>
                                    <p className="text-base text-gray-700 leading-relaxed">
                                        California has enacted some of the nation's strictest distracted driving laws because aspiring agents are statistically most at risk. You must master:
                                    </p>
                                    <ul className="grid sm:grid-cols-2 gap-3 mt-4">
                                        <li className="flex items-center gap-2 text-sm font-medium text-gray-800">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                            VC 23123 hands-free law
                                        </li>
                                        <li className="flex items-center gap-2 text-sm font-medium text-gray-800">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                            VC 23123.5 texting ban
                                        </li>
                                        <li className="flex items-center gap-2 text-sm font-medium text-gray-800">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                            VC 23124 teen driver rules
                                        </li>
                                        <li className="flex items-center gap-2 text-sm font-medium text-gray-800">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                            VC 27400 headphone law
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

                {/* ========== SECTION 1: Phone & Texting Laws ========== */}
                <section id="phone-texting-laws" className="py-16 md:py-20 bg-gray-50 scroll-mt-32">
                    <div className="container mx-auto px-4">
                        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                            <div className="space-y-6 md:space-y-8">
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">California Phone &amp; Texting Laws</h2>
                                    <p className="text-base text-gray-700 leading-relaxed mb-4">
                                        California has two core statutes restricting cell phone use while driving. The key rule for adult drivers: <strong>Never hold the phone.</strong> If you want to use it, it must be mounted and operated with a <strong>single touch or swipe</strong>.
                                    </p>

                                    <div className="bg-yellow-50 p-5 md:p-6 rounded-2xl border border-yellow-100">
                                        <h3 className="text-lg font-bold text-yellow-900 mb-2 flex items-center gap-2">
                                            <AlertTriangle className="w-5 h-5 text-yellow-600" />
                                            Real Estate Test Tip: Red Lights
                                        </h3>
                                        <p className="text-sm text-yellow-900/80 leading-relaxed">
                                            A very common test question asks: &quot;You are stopped at a red light and your phone rings. May you pick it up to answer?&quot;
                                        </p>
                                        <p className="text-sm text-yellow-900/80 mt-2 font-medium">
                                            Answer: No. California's hands-free law applies any time you are behind the wheel with the engine running—including at red lights. You must let it go to voicemail.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-gray-100">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                                        <Smartphone className="w-5 h-5 text-gray-500" />
                                        Key Statutes at a Glance
                                    </h3>
                                    <ul className="space-y-3 text-sm text-gray-600">
                                        <li><strong>VC 23123 — Hands-Free Law:</strong> No holding a phone while driving. Adults may use a mounted phone with a single touch/swipe only.</li>
                                        <li><strong>VC 23123.5 — Texting Ban:</strong> No reading, writing, or sending any text-based communication while driving—applies even at red lights.</li>
                                        <li><strong>AB-1785 (2017):</strong> Phone must be mounted in the lower windshield corner or on the dashboard and operated with a single swipe or voice commands.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="relative group lg:sticky lg:top-24">
                                <div className="absolute inset-0 bg-blue-600 rounded-2xl md:rounded-3xl rotate-2 opacity-10 group-hover:rotate-3 transition-transform duration-300"></div>
                                <Image
                                    src="/images/california-hands-free-driving.webp"
                                    alt="Adult driver with smartphone securely mounted on the dashboard using a navigation app, obeying California hands-free laws"
                                    width={600}
                                    height={400}
                                    className="rounded-2xl md:rounded-3xl shadow-xl relative z-10 w-full"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========== SECTION 2: Teen Drivers ========== */}
                <section id="minors" className="py-16 md:py-20 bg-white scroll-mt-32">
                    <div className="container mx-auto px-4">
                        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                            <div className="relative group order-2 lg:order-1 lg:sticky lg:top-24">
                                <div className="absolute inset-0 bg-red-600 rounded-2xl md:rounded-3xl -rotate-2 opacity-10 group-hover:-rotate-3 transition-transform duration-300"></div>
                                <Image
                                    src="/images/teenager-driving-a-car-1.jpg"
                                    alt="Teen driver restricted from using any wireless device in California"
                                    width={600}
                                    height={400}
                                    className="rounded-2xl md:rounded-3xl shadow-xl relative z-10 w-full"
                                />
                            </div>

                            <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">Teen Drivers: Stricter Rules (VC 23124)</h2>
                                    <p className="text-base text-gray-700 leading-relaxed">
                                        Drivers under 18 face a <strong>complete prohibition</strong> on wireless device use—far stricter than the adult hands-free rule. While adults may use a mounted phone with a single touch, teens may not use any wireless device in any way.
                                    </p>
                                </div>

                                <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-gray-100">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                                        <AlertCircle className="w-5 h-5 text-red-500" />
                                        What Is Banned for Drivers Under 18
                                    </h3>
                                    <ul className="space-y-2 text-sm text-gray-600">
                                        <li>• <strong>Handheld calls and texting</strong> — same as adults, but also:</li>
                                        <li>• <strong>Hands-free Bluetooth</strong> — banned even with a single-ear device</li>
                                        <li>• <strong>Voice commands</strong> — Siri, Google Assistant all prohibited</li>
                                        <li>• <strong>Navigation apps</strong> — even on a properly mounted phone</li>
                                    </ul>
                                </div>

                                <div className="flex gap-4 p-4 bg-red-50 rounded-xl border border-red-100">
                                    <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-base font-bold text-red-900">The Only Exception</h4>
                                        <p className="text-sm text-red-800/80 mt-1">
                                            A driver under 18 may use a wireless device <strong>only to call 911 in a genuine emergency</strong> where there is no safe alternative. This is the sole exception under VC 23124.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========== SECTION 3: Fines & Consequences ========== */}
                <section id="fines-consequences" className="py-16 md:py-20 bg-gray-50 scroll-mt-32">
                    <div className="container mx-auto px-4">
                        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                            <div className="space-y-6 md:space-y-8">
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">Fines &amp; Consequences</h2>
                                    <p className="text-base text-gray-700 leading-relaxed mb-4">
                                        California's base fines appear low, but <strong>penalty assessments</strong> added by the court multiply the actual cost significantly. Starting in 2021, repeat offenders also receive Real Estate points.
                                    </p>

                                    <div className="bg-yellow-50 p-5 md:p-6 rounded-2xl border border-yellow-100">
                                        <h3 className="text-lg font-bold text-yellow-900 mb-2 flex items-center gap-2">
                                            <AlertTriangle className="w-5 h-5 text-yellow-600" />
                                            Real Estate Test Tip: Know the Base Fines
                                        </h3>
                                        <p className="text-sm text-yellow-900/80 leading-relaxed">
                                            The real estate exam asks about the <strong>base fine</strong>, not the total with assessments. Know: 1st offense = <strong>$20</strong>, 2nd+ offense = <strong>$50</strong>. A third violation within 36 months also adds <strong>one Real Estate point</strong>.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-gray-100">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Beyond the Fine: Reckless Driving</h3>
                                    <ul className="space-y-2 text-sm text-gray-600">
                                        <li>• <strong>Collision while on phone:</strong> Can escalate to reckless driving (VC 23103), a misdemeanor</li>
                                        <li>• <strong>Reckless driving penalties:</strong> Fines up to $1,000, up to 90 days in jail, Real Estate points</li>
                                        <li>• <strong>Civil liability:</strong> You are personally liable for all property damage and injuries caused</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="relative group lg:sticky lg:top-24">
                                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                                    <div className="bg-gray-900 px-6 py-4">
                                        <h3 className="text-white font-bold text-base">Fine Schedule: VC 23123 &amp; VC 23123.5</h3>
                                    </div>
                                    <div className="divide-y divide-gray-100">
                                        <div className="grid grid-cols-3 px-6 py-4 bg-gray-50 text-xs font-bold text-gray-500 uppercase tracking-wider">
                                            <span>Offense</span>
                                            <span>Base Fine</span>
                                            <span>~Total Cost</span>
                                        </div>
                                        <div className="grid grid-cols-3 px-6 py-4 text-sm text-gray-800">
                                            <span className="font-medium">1st offense</span>
                                            <span>$20</span>
                                            <span className="text-[#007aff] font-medium">~$150–$162</span>
                                        </div>
                                        <div className="grid grid-cols-3 px-6 py-4 text-sm text-gray-800 bg-gray-50">
                                            <span className="font-medium">2nd+ offense</span>
                                            <span>$50</span>
                                            <span className="text-[#007aff] font-medium">~$250–$285</span>
                                        </div>
                                        <div className="grid grid-cols-3 px-6 py-4 text-sm text-gray-800">
                                            <span className="font-medium">3rd+ within 36 mo.</span>
                                            <span>$50 + point</span>
                                            <span className="text-red-600 font-medium">~$285 + insurance</span>
                                        </div>
                                    </div>
                                    <div className="px-6 py-4 bg-blue-50 border-t border-blue-100">
                                        <p className="text-xs text-blue-800 leading-relaxed">
                                            <strong>Note:</strong> Penalty assessments are added by the court and are not reflected in the base fine. Total costs shown are estimates and may vary by county.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========== SECTION 4: Other Distractions ========== */}
                <section id="other-distractions" className="py-16 md:py-20 bg-white scroll-mt-32">
                    <div className="container mx-auto px-4">
                        <div className="max-w-7xl mx-auto">
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl md:rounded-3xl p-6 md:p-10 border border-blue-100">
                                <div className="flex items-center gap-3 mb-4 md:mb-6">
                                    <div className="w-12 h-12 md:w-14 md:h-14 bg-[#007aff] rounded-xl flex items-center justify-center">
                                        <BookOpen className="w-6 h-6 md:w-7 md:h-7 text-white" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Other Distractions &amp; Headphone Law</h2>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">Three Types of Distraction</h3>
                                        <p className="text-sm text-gray-700 mb-3">
                                            The California Real Estate handbook identifies three categories. Texting is uniquely dangerous because it causes <strong>all three at once</strong>.
                                        </p>
                                        <ul className="space-y-3 text-sm text-gray-700 bg-white/50 p-4 rounded-xl">
                                            <li><strong>Visual:</strong> Eyes leave the road (reading a text, looking at a passenger)</li>
                                            <li><strong>Manual:</strong> Hands leave the wheel (texting, eating, grooming)</li>
                                            <li><strong>Cognitive:</strong> Mind leaves driving (phone conversation, daydreaming)</li>
                                        </ul>
                                        <div className="mt-3 bg-white/50 p-4 rounded-xl text-sm text-gray-700">
                                            <strong>The 2-Second Rule:</strong> At 55 mph, a 2-second glance at your phone means traveling ~160 feet—half a football field—completely blind.
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                                            <Headphones className="w-5 h-5 text-[#007aff]" />
                                            Headphone &amp; Earbud Law (VC 27400)
                                        </h3>
                                        <p className="text-sm text-gray-700 mb-3">
                                            Wearing headphones in <strong>both ears</strong> while driving is illegal in California.
                                        </p>
                                        <div className="bg-white/50 p-4 rounded-xl space-y-3">
                                            <div>
                                                <span className="text-sm font-bold block mb-1">Legal:</span>
                                                <span className="text-sm text-gray-700">Single-ear Bluetooth earpiece or hearing aid</span>
                                            </div>
                                            <div>
                                                <span className="text-sm font-bold block mb-1">Illegal:</span>
                                                <span className="text-sm text-gray-700">Earbuds in both ears—even at low volume or for navigation audio</span>
                                            </div>
                                        </div>
                                        <div className="mt-3 bg-white/50 p-4 rounded-xl text-sm text-gray-700">
                                            <strong>Why it matters:</strong> You must be able to hear emergency sirens and traffic sounds. The law exists for safety, not volume control.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Practice Test Section */}
                <section id="practice-test" className="py-16 md:py-24 bg-gray-50 relative scroll-mt-32">
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
                            <span className="text-[#007aff] font-bold tracking-wider uppercase text-sm mb-3 block">Interactive Exam Simulator</span>
                            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 md:mb-6">
                                Test Your Knowledge
                            </h2>
                            <p className="text-base text-gray-600">
                                These 20 questions mimic the real exam&apos;s distracted driving section. Can you score the passing 83%?
                            </p>
                        </div>

                        <PracticeTest questions={CALIFORNIA_DISTRACTED_DRIVING_QUESTIONS} />

                        {/* Credibility Statement */}
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
                                    href="/handbooks/california"
                                    className="relative text-[#007aff] font-medium after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#007aff] after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                                >
                                    California Real Estate Driver&apos;s Handbook
                                </Link>
                                {' '}and California Vehicle Code. Official sources include VC 23123, VC 23123.5, VC 23124, and VC 27400.
                            </p>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-16 md:py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-10 md:mb-12">
                                <div className="inline-flex items-center gap-2 text-[#007aff] font-bold mb-3">
                                    <HelpCircle className="w-5 h-5" />
                                    <span className="uppercase tracking-wider text-sm">Common Questions</span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                                    Frequently Asked Questions
                                </h2>
                            </div>

                            <div className="space-y-4">
                                {faqData.map((faq, index) => (
                                    <details
                                        key={index}
                                        className="group bg-gray-50 rounded-xl border border-gray-200 overflow-hidden"
                                    >
                                        <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer font-bold text-gray-900 hover:bg-gray-100 transition-colors">
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

                {/* CTA Section */}
                <section className="py-16 md:py-24 bg-gray-900 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#007aff]/10"></div>
                    <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Ready for the actual Exam?</h2>
                        <p className="text-base text-gray-400 mb-8 md:mb-10">
                            Distracted driving is just one section. Get your California-specific premium study pack with pass guarantee.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                            <Link
                                href="/california-real-estate-practice-test"
                                className="inline-flex items-center justify-center px-6 md:px-8 py-4 bg-[#007aff] hover:bg-[#0056cc] text-white text-base font-bold rounded-xl transition-all shadow-lg hover:shadow-blue-500/25"
                            >
                                Try FREE Practice Test
                            </Link>
                            <Link
                                href="/real-estate-premium"
                                className="inline-flex items-center justify-center px-6 md:px-8 py-4 bg-transparent border border-gray-700 hover:border-white text-white text-base font-semibold rounded-xl transition-all"
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
