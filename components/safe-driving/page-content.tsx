'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { useAuth } from '@/contexts/auth-context'
import { PracticeTest } from '@/components/fines-and-limits/practice-test'
import { SAFE_DRIVING_QUESTIONS } from './questions'
import { Button } from '@/components/ui/button'
import { ArrowRight, BookOpen, Crown, ChevronRight, HelpCircle, Shield, CloudRain, AlertTriangle, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState, useRef } from 'react'
import { StateHubsSection } from '@/components/state-hubs-section'
import { RelatedConcepts } from '@/components/concepts/related-concepts'

const FAQ_DATA = [
    {
        question: "What is defensive driving?",
        answer: "Defensive driving means constantly scanning for hazards, maintaining space, and predicting other drivers' mistakes to avoid accidents before they happen."
    },
    {
        question: "How much following distance do I need?",
        answer: "The '3-Second Rule' is standard. Pick a fixed object; when the car ahead passes it, count 3 seconds. If you pass it before you finish counting, you're too close."
    },
    {
        question: "What should I do if I skid?",
        answer: "Do NOT brake hard. Ease off the gas, and steer in the direction you want to go. If you have ABS, apply steady pressure to the brakes only after regaining traction."
    },
    {
        question: "When are roads most slippery during rain?",
        answer: "During the first 10-15 minutes of rainfall. Oil and dust on the road mix with water to create a very slick surface."
    }
]

const NAV_ITEMS = [
    { id: 'defensive-driving', label: 'Defensive Driving' },
    { id: 'weather-conditions', label: 'Weather' },
    { id: 'emergencies', label: 'Emergencies' },
    { id: 'practice-test', label: 'Practice Test' },
]

export function SafeDrivingPageContent() {
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

    const handleTestComplete = () => {
        // Optional completion logic
    }

    const handleTestExit = () => {
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
                            <span className="text-gray-900 font-medium">Safe Driving</span>
                        </nav>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="relative pt-16 pb-20 md:pt-20 md:pb-24 overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white">
                    <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -mr-32 -mt-32"></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6 md:mb-8">
                                <Shield className="w-4 h-4 text-blue-400" />
                                <span className="text-sm font-medium text-blue-100">Survival Skills</span>
                            </div>

                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 tracking-tight leading-tight">
                                Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-200">Safe Driving</span> &amp; Emergencies
                            </h1>

                            <p className="text-lg md:text-xl text-blue-100/90 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
                                It&apos;s not just about obeying laws. It&apos;s about surviving hazards, bad weather, and human error. Accounts for ~15% of exam questions.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
                                <Button
                                    onClick={scrollToTest}
                                    size="lg"
                                    className="bg-white text-blue-900 hover:bg-blue-50 text-base md:text-lg font-bold px-6 md:px-8 py-5 md:py-6 rounded-xl md:rounded-2xl shadow-xl shadow-blue-900/20 border-0"
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
                            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
                                <div className="bg-blue-100 p-3 rounded-xl shrink-0">
                                    <BookOpen className="w-8 h-8 text-[#007aff]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Why Safe Driving Skills Are Tested</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        The Real Estate wants to know you can handle real-world situations, not just traffic rules. Expect scenario-based questions on:
                                    </p>
                                    <ul className="grid sm:grid-cols-2 gap-3 mt-4">
                                        <li className="flex items-center gap-2 text-sm font-medium text-gray-800">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                            Following distance rules
                                        </li>
                                        <li className="flex items-center gap-2 text-sm font-medium text-gray-800">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                            Bad weather driving
                                        </li>
                                        <li className="flex items-center gap-2 text-sm font-medium text-gray-800">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                            Emergency maneuvers
                                        </li>
                                        <li className="flex items-center gap-2 text-sm font-medium text-gray-800">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                            Skid and blowout recovery
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
                                        ? 'bg-blue-900 text-white'
                                        : 'text-gray-600 hover:bg-gray-100'
                                        }`}
                                >
                                    {label}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>

                {/* ========== SECTION 1: Defensive Driving ========== */}
                <section id="defensive-driving" className="py-16 md:py-20 bg-gray-50 scroll-mt-32">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Core Skill: Defensive Driving</h2>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                                Defensive driving is the art of predicting trouble before it happens. It&apos;s about assuming other drivers will make mistakes and being ready to react.
                            </p>

                            <div className="prose prose-lg text-gray-700 max-w-none">
                                <h3 className="font-bold text-gray-900 text-xl border-l-4 border-blue-600 pl-4 mt-8 mb-4">The 3-Second Rule</h3>
                                <p>
                                    Rear-end collisions are the most common type of accident, and they are almost always caused by following too closely. To prevent this, use the <strong>3-Second Rule</strong>: pick a fixed object on the road (like a sign). When the car ahead passes it, count to three. If you pass the object before you finish counting, you are following too closely.
                                </p>
                                <p>
                                    <em>Note:</em> In bad weather or at night, increase this to 4 or 5 seconds.
                                </p>

                                <h3 className="font-bold text-gray-900 text-xl border-l-4 border-indigo-600 pl-4 mt-8 mb-4">Scanning Ahead</h3>
                                <p>
                                    New drivers often stare at the bumper of the car in front of them. Experienced drivers scan <strong>10 to 15 seconds</strong> down the road (about one city block). This gives you time to spot hazards like braking traffic, pedestrians, or debris before they become an emergency.
                                </p>

                                <h3 className="font-bold text-gray-900 text-xl border-l-4 border-purple-600 pl-4 mt-8 mb-4">Checking Blind Spots</h3>
                                <p>
                                    Mirrors have blind spots—areas next to your car that you cannot see. Before every lane change, you MUST turn your head and look over your shoulder. If you rely only on your mirrors, you will eventually hit a car hiding in your blind spot.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========== SECTION 2: Weather Conditions ========== */}
                <section id="weather-conditions" className="py-16 md:py-20 bg-white scroll-mt-32">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <CloudRain className="w-8 h-8 text-slate-700" />
                                Weather Conditions
                            </h2>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                                Bad weather requires you to adjust your driving. Speed limits are for ideal conditions only; when the weather turns, you must slow down.
                            </p>

                            <div className="prose prose-lg text-gray-700 max-w-none">
                                <h3 className="font-bold text-gray-900 text-xl border-l-4 border-slate-600 pl-4 mt-8 mb-4">Hydroplaning</h3>
                                <p>
                                    Hydroplaning occurs when your tires lose contact with the road and ride on a film of water. This is most dangerous during the <strong>first 10-15 minutes of rainfall</strong>, as oil and dust on the road mix with water to create a slick surface.
                                </p>
                                <p>
                                    <strong>What to do:</strong> Ease off the gas immediately. Do NOT brake hard or turn the wheel sharply, as this will cause you to spin. Steer straight and wait for traction to return.
                                </p>

                                <h3 className="font-bold text-gray-900 text-xl border-l-4 border-slate-400 pl-4 mt-8 mb-4">Fog and Low Visibility</h3>
                                <p>
                                    Fog creates a dangerous optical illusion where speed is hard to judge. The most common mistake drivers make is using high beams.
                                </p>
                                <p>
                                    <strong>Rule:</strong> Always use <strong>LOW BEAM headlights</strong> in fog, rain, or snow. High beams reflect off the moisture and blind you.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========== SECTION 3: Emergencies ========== */}
                <section id="emergencies" className="py-16 md:py-20 bg-gray-50 scroll-mt-32">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <AlertTriangle className="w-8 h-8 text-orange-600" />
                                Vehicle Emergencies
                            </h2>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                                Panic is your worst enemy in an emergency. Knowing exactly what to do beforehand can save your life.
                            </p>

                            <div className="prose prose-lg text-gray-700 max-w-none">
                                <h3 className="font-bold text-gray-900 text-xl border-l-4 border-orange-500 pl-4 mt-8 mb-4">Tire Blowout</h3>
                                <p>
                                    A loud bang followed by the car pulling sharply to one side. <strong>Do NOT slam on the brakes.</strong> This is the most natural instinct, but it will cause you to lose control. Instead, grip the steering wheel firmly to keep the car straight, ease off the gas, and let the car slow down gradually.
                                </p>

                                <h3 className="font-bold text-gray-900 text-xl border-l-4 border-red-500 pl-4 mt-8 mb-4">Brake Failure</h3>
                                <p>
                                    If your brake pedal goes to the floor:
                                </p>
                                <ol className="list-decimal pl-5 space-y-2">
                                    <li><strong>Pump the brakes</strong> repeatedly to try to build up pressure.</li>
                                    <li>Shift to a <strong>lower gear</strong> to use engine braking.</li>
                                    <li>Use the <strong>emergency/parking brake</strong> gently.</li>
                                    <li>Look for a safe place to coast to a stop or rub against a curb to slow down.</li>
                                </ol>

                                <h3 className="font-bold text-gray-900 text-xl border-l-4 border-blue-500 pl-4 mt-8 mb-4">Skidding</h3>
                                <p>
                                    Skids usually happen on wet or icy roads. To recover: ease off the gas and brake. <strong>Steer in the direction you want the front of the car to go.</strong> As the car straightens out, counter-steer gently to prevent spinning the other way.
                                </p>

                                <h3 className="font-bold text-gray-900 text-xl border-l-4 border-yellow-500 pl-4 mt-8 mb-4">Headlight Failure</h3>
                                <p>
                                    If your lights go out at night, try the high beams, parking lights, or turn signals—often one circuit will still work. Slow down smoothly and pull off the road as soon as safe.
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
                                Test Your Instincts
                            </h2>
                            <p className="text-lg md:text-xl text-gray-600">
                                10 scenarios to test your judgment on safety and emergencies.
                            </p>
                        </div>

                        <div className="max-w-3xl mx-auto">
                            <PracticeTest questions={SAFE_DRIVING_QUESTIONS} />
                        </div>

                        <div className="mt-12 max-w-3xl mx-auto text-center">
                            <p className="text-sm text-gray-500 leading-relaxed">
                                Based on standard defensive driving guidelines from the National Safety Council and Real Estate manuals.
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
                <RelatedConcepts currentConceptId="safe-driving" />

                {/* CTA Section */}
                <section className="py-16 md:py-24 bg-gray-900 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#007aff]/10"></div>
                    <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
                        <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">Don&apos;t Leave Safety to Chance</h2>
                        <p className="text-gray-400 text-base md:text-lg mb-8 md:mb-10">
                            Safe driving rules vary slightly by state. Ensure you know your local laws with our premium state-specific study packs.
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
