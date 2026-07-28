'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { useAuth } from '@/contexts/auth-context'
// import { ConceptPracticeInterface } from '@/components/practice/concept-practice-interface'
import { PracticeTest } from './practice-test'
import { SIGNS_AND_SIGNALS_QUESTIONS } from './questions'
import { Button } from '@/components/ui/button'
import { ArrowRight, BookOpen, Crown, ChevronRight, HelpCircle, AlertOctagon, CheckCircle2, AlertTriangle, Construction } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useRef, useState, useEffect } from 'react'
import { StateHubsSection } from '@/components/state-hubs-section'
import { RelatedConcepts } from '@/components/concepts/related-concepts'


const FAQ_DATA = [
    {
        question: "How many sign & signal questions are on the real estate exam?",
        answer: "Expect about 30% of your test to cover these topics. You'll likely see 8-10 road sign identification questions and 3-5 traffic signal/marking questions."
    },
    {
        question: "What's the difference between flashing red and flashing yellow lights?",
        answer: "Flashing red = STOP (treat like a stop sign). Flashing yellow = CAUTION (slow down and proceed carefully). This is one of the most commonly tested distinctions."
    },
    {
        question: "Are sign shapes really tested?",
        answer: "Yes! A sign's shape tells you its meaning even at night or in poor visibility. An octagon is ALWAYS a stop sign, a pennant is ALWAYS 'No Passing Zone.'"
    },
    {
        question: "What does a solid yellow line on my side mean?",
        answer: "A solid yellow line on your side of the center line means NO PASSING. If the line is broken on your side, you may pass when safe."
    },
    {
        question: "What's the difference between warning and regulatory signs?",
        answer: "Regulatory signs (white background) are the LAW—you must obey them. Warning signs (yellow diamond) alert you to hazards but don't mandate specific actions."
    },
    {
        question: "Are fines really doubled in work zones?",
        answer: "In most states, yes. Some states even triple fines. Work zone violations are taken very seriously due to worker safety concerns."
    }
]

const NAV_ITEMS = [
    { id: 'sign-shapes', label: 'Shapes' },
    { id: 'sign-colors', label: 'Colors' },
    { id: 'regulatory-signs', label: 'Regulatory' },
    { id: 'warning-signs', label: 'Warning' },
    { id: 'traffic-signals', label: 'Signals' },
    { id: 'road-markings', label: 'Markings' },
    { id: 'work-zones', label: 'Work Zones' },
    { id: 'practice-test', label: 'Practice Test' },
]

export function SignsAndSignalsPageContent() {
    const { user, userData, isPremium, signOut } = useAuth()
    const router = useRouter()
    const [activeSection, setActiveSection] = useState('')
    const navRef = useRef<HTMLElement>(null)
    const isClickScrolling = useRef(false)

    const handleLogin = () => router.push('/#login')
    const handleSignup = () => router.push('/#signup')
    const handleLogout = async () => await signOut()
    const handleDashboard = () => router.push('/dashboard')

    const scrollToTest = () => {
        document.getElementById('practice-test')?.scrollIntoView({ behavior: 'smooth' })
    }

    const handleTestComplete = () => { }
    const handleTestExit = () => {
        document.getElementById('practice-test')?.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                // Skip observer updates during click-initiated scrolls
                if (isClickScrolling.current) return
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
            <Navigation user={user} userData={userData} isPremium={isPremium} onLogin={handleLogin} onSignup={handleSignup} onLogout={handleLogout} onDashboard={handleDashboard} showGetPremiumLink />

            <main>
                {/* Breadcrumbs */}
                <div className="bg-gray-50 border-b border-gray-100">
                    <div className="container mx-auto px-4 py-3">
                        <nav className="flex items-center gap-2 text-sm text-gray-500">
                            <Link href="/" className="hover:text-[#007aff] transition-colors">Home</Link>
                            <ChevronRight className="w-4 h-4" />
                            <Link href="/driving-test-concepts" className="hover:text-[#007aff] transition-colors">Driving Test Concepts</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span className="text-gray-900 font-medium">Signs &amp; Signals</span>
                        </nav>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="relative pt-16 pb-20 md:pt-20 md:pb-24 overflow-hidden bg-gradient-to-br from-amber-900 via-amber-800 to-yellow-900 text-white">
                    <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6 md:mb-8">
                                <AlertOctagon className="w-4 h-4 text-yellow-400" />
                                <span className="text-sm font-medium text-amber-100">Complete Guide</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 tracking-tight leading-tight">
                                Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-200">Signs &amp; Signals</span>
                            </h1>
                            <p className="text-lg md:text-xl text-amber-100/90 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
                                The complete guide to road signs, traffic signals, and pavement markings. About 30% of your Real Estate Exam covers this topic.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
                                <Button onClick={scrollToTest} size="lg" className="bg-white text-amber-900 hover:bg-amber-50 text-base md:text-lg font-bold px-6 md:px-8 py-5 md:py-6 rounded-xl md:rounded-2xl shadow-xl shadow-amber-900/20 border-0">
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
                            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
                                <div className="bg-amber-100 p-3 rounded-xl shrink-0">
                                    <BookOpen className="w-8 h-8 text-[#007aff]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Why Signs &amp; Signals Dominate the Test</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Signs and signals are the universal language of the road. Expect 8-12 questions on sign identification and 3-5 on signals/markings.
                                    </p>
                                    <ul className="grid sm:grid-cols-2 gap-3 mt-4">
                                        <li className="flex items-center gap-2 text-sm font-medium text-gray-800">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                            Sign shapes &amp; colors
                                        </li>
                                        <li className="flex items-center gap-2 text-sm font-medium text-gray-800">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                            Flashing light meanings
                                        </li>
                                        <li className="flex items-center gap-2 text-sm font-medium text-gray-800">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                            Lane marking rules
                                        </li>
                                        <li className="flex items-center gap-2 text-sm font-medium text-gray-800">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                            Work zone regulations
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
                                <a key={id} href={`#${id}`} onClick={(e) => {
                                    e.preventDefault()
                                    // Set the active section immediately to prevent flicker
                                    setActiveSection(id)
                                    // Block observer updates during scroll
                                    isClickScrolling.current = true
                                    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
                                    // Re-enable observer after scroll finishes
                                    setTimeout(() => { isClickScrolling.current = false }, 800)
                                }}
                                    className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeSection === id ? 'bg-amber-900 text-white' : 'text-gray-600 hover:bg-gray-100'}`}>
                                    {label}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>

                {/* SECTION 1: Sign Shapes */}
                <section id="sign-shapes" className="py-16 md:py-20 bg-gray-50 scroll-mt-32">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Sign Shapes: The Universal Language</h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-10">
                                You can identify a sign&apos;s meaning by its shape alone—even at night or in poor visibility. The Real Estate Exams this because shape recognition is critical when you can&apos;t read the text.
                            </p>

                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-red-600 pl-4">Unique Shapes for Critical Actions</h3>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        Some meanings are so important they have their own exclusive shape. The <strong>Octagon (8 sides)</strong> is used exclusively for STOP signs. If you see an octagon, you must stop, even if the text is obscured by snow or graffiti. The <strong>Inverted Triangle</strong> (pointing down) is used only for YIELD signs.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed">
                                        <strong>Pennant-shaped signs</strong> (sideways triangles pointing right) mark &quot;No Passing Zones&quot; and are always placed on the <em>left</em> side of the road to be visible to drivers attempting to pass.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-yellow-400 pl-4">Warning and School Signs</h3>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        <strong>Diamond-shaped signs</strong> are the standard for warnings (hazards, road conditions). If you see a diamond, slow down.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed">
                                        A <strong>Pentagon (5 sides)</strong> shaped like a schoolhouse is used uniquely for School Zones and School Crossings. Whether yellow or fluorescent yellow-green, strictly obey posted speed limits and watch for children.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-black pl-4">Railroad and Regulatory</h3>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        Railroad crossings use two specific shapes: a <strong>Round Yellow Sign</strong> (advance warning) and a <strong>Crossbuck (X-shape)</strong> (at the tracks).
                                    </p>
                                    <p className="text-gray-600 leading-relaxed">
                                        Most other rules are conveyed on <strong>Rectangles</strong>. Vertical rectangles are for regulatory rules (Speed Limit, No Parking), while horizontal rectangles are generally for guide information (Exit signs, Mile markers).
                                    </p>
                                </div>
                            </div>

                            <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100 mt-10">
                                <h4 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                                    <AlertTriangle className="w-5 h-5 text-amber-600" />
                                    Real Estate Test Tip
                                </h4>
                                <p className="text-amber-900/80 text-sm leading-relaxed">Expect 2-3 questions asking &quot;What shape is a _____ sign?&quot; The round sign (railroad) and pennant (no passing) are most commonly missed.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 2: Sign Colors */}
                <section id="sign-colors" className="py-16 md:py-20 bg-white scroll-mt-32">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Sign Colors: Instant Category Recognition</h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-10">
                                Colors group signs by purpose. Learn these and you&apos;ll know what category any sign belongs to instantly.
                            </p>

                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-red-600 pl-4">Traffic Control Colors</h3>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        <strong>Red</strong> is the color of authority. It is reserved for the most critical signs: Stop, Yield, Do Not Enter, and Wrong Way. If you see red, it always means a prohibition or a mandatory stop.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed">
                                        <strong>White</strong> and <strong>Black</strong> are used for regulatory signs. These tell you the rules of the road, such as Speed Limits, Lane Use controls, and Parking restrictions. They are enforceable by law.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-yellow-400 pl-4">Warning Colors</h3>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        <strong>Yellow</strong> is the standard color for general warnings. It warns of hazards like curves, intersections, or slippery roads.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed">
                                        <strong>Fluorescent Yellow-Green</strong> is a unique high-visibility color used specifically for School Zones, Pedestrian crossings, and Bicycle crossings. <strong>Orange</strong> is used exclusively for Work Zones and construction areas; remember that fines are usually doubled in orange zones.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-green-600 pl-4">Guide and Information Colors</h3>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        <strong>Green</strong> signs offer directional guidance—distances to cities, exit numbers, and mile markers.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        <strong>Blue</strong> signs indicate motorist services. Look for blue signs to find rest areas, hospitals, gas stations, or lodging.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed">
                                        <strong>Brown</strong> signs point to public recreation and cultural interest areas, such as state parks, historic sites, or campgrounds.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mt-10">
                                <h4 className="font-bold text-blue-900 mb-2">🏛️ State Variation</h4>
                                <p className="text-blue-900/80 text-sm leading-relaxed">Some states use fluorescent yellow-green for ALL school zone signs; others use standard yellow. Both are correct on the Real Estate Exam.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Printable Cheat Sheets Section */}
                <section className="py-12 md:py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                                {/* Left Side - Content */}
                                <div className="lg:w-1/2 text-center lg:text-left">
                                    <div className="inline-block bg-indigo-100 border border-indigo-200 rounded-full px-4 md:px-6 py-2 mb-6">
                                        <span className="text-xs md:text-sm font-medium text-indigo-700">Bonus Material</span>
                                    </div>
                                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                                        Printable Cheat Sheet Included
                                    </h2>
                                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                        Get instant access to our high-quality, printable road signs cheat sheet. Perfect for studying on the go or quick revision before the test. Includes our complete <strong>Top US Road Signs</strong> guide to help you master essential signs.
                                    </p>

                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 justify-center lg:justify-start">
                                            <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                                            <span className="text-gray-700">Downloadable PDF format</span>
                                        </div>
                                        <div className="flex items-center gap-3 justify-center lg:justify-start">
                                            <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                                            <span className="text-gray-700">High-resolution visuals</span>
                                        </div>
                                        <div className="flex items-center gap-3 justify-center lg:justify-start">
                                            <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                                            <span className="text-gray-700">Perfect for last-minute review</span>
                                        </div>
                                    </div>

                                    <div className="mt-8">
                                        <Link
                                            href="/real-estate-premium"
                                            className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                                        >
                                            Get It With Premium
                                        </Link>
                                    </div>
                                </div>

                                {/* Right Side - Single Image */}
                                <div className="lg:w-1/2">
                                    <div className="max-w-xs mx-auto">
                                        <div
                                            className="relative group cursor-pointer transition-all duration-300 transform hover:scale-105"
                                            onClick={() => window.open('/images/top-us-road-signs-look-inside.png', '_blank')}
                                        >
                                            <div className="absolute inset-0 bg-indigo-200 rounded-2xl rotate-2 group-hover:rotate-6 transition-transform duration-300"></div>
                                            <img
                                                src="/images/Top-US-Road-Signs-PDF.png"
                                                alt="Top US Road Signs Cheat Sheet Preview"
                                                className="relative rounded-2xl shadow-xl border-4 border-white w-full object-cover aspect-[3/4]"
                                            />

                                            {/* Look Inside Badge */}
                                            <div className="absolute bottom-4 right-4 z-10">
                                                <div className="bg-white/95 backdrop-blur-sm border border-indigo-100 text-indigo-900 text-xs font-bold px-3 py-2 rounded-full shadow-md flex items-center gap-2 hover:bg-white hover:scale-105 transition-all">
                                                    <BookOpen className="w-4 h-4" />
                                                    <span>Look Inside</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 3: Regulatory Signs */}
                <section id="regulatory-signs" className="py-16 md:py-20 bg-gray-50 scroll-mt-32">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Regulatory Signs: These Are the Law</h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-10">
                                Regulatory signs tell you what you MUST or MUST NOT do. Violating them = traffic ticket.
                            </p>

                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-red-600 pl-4">Stop, Yield, and Right of Way</h3>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        These are the most critical signs on the road because they control the flow of traffic. The <strong>STOP sign</strong> is the only octagonal sign; it requires a complete cessation of movement. A &quot;rolling stop&quot; is a common failure point on driving tests. The <strong>YIELD sign</strong> is a red inverted triangle that instructs you to slow down and give the right-of-way to other traffic or pedestrians, stopping only if necessary.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed">
                                        Red signs with white lettering like <strong>DO NOT ENTER</strong> or <strong>WRONG WAY</strong> indicate you are driving against traffic—a severe safety violation. If you see these, you must pull over and turn around immediately when safe.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-gray-900 pl-4">Speed Limits</h3>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        Speed limit signs are always rectangular black-and-white signs. They indicate the <strong>maximum legal speed</strong> under ideal conditions. However, you must always adjust for weather and traffic.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed">
                                        You might also see yellow advisory speed signs near curves or ramps; these are suggested safe speeds, not legal limits, but ignoring them can cause accidents. Some highways also post minimum speed limits to prevent dangerously slow driving.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-gray-900 pl-4">Lane Use and Turns</h3>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        White signs often control lane usage. A <strong>Turn Only</strong> sign means you must turn in the direction of the arrow. A <strong>No U-Turn</strong> sign (a U-shaped arrow with a red slash) prohibits turning around at that intersection.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed">
                                        If you see a black diamond symbol on a white sign, that marks a <strong>High Occupancy Vehicle (HOV)</strong> lane. You can only use this lane if you have multiple passengers or a qualifying low-emission vehicle.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-red-600 pl-4">Parking Rules</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Parking signs can be confusing, but the differences are specific. <strong>No Parking</strong> means you can stop briefly to load or unload passengers or merchandise. <strong>No Standing</strong> is stricter; you can stop to drop off passengers but cannot wait there. <strong>No Stopping</strong> is the strictest rule; you cannot stop your car for any reason unless avoiding a collision or obeying a traffic officer.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 4: Warning Signs */}
                <section id="warning-signs" className="py-16 md:py-20 bg-white scroll-mt-32">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Warning Signs: Hazards Ahead</h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-10">
                                Yellow diamond = danger ahead. These don&apos;t mandate action, but they warn you to prepare.
                            </p>

                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-yellow-500 pl-4">Road Conditions</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Warning signs are almost always <strong>yellow diamonds with black markings</strong>. They alert you to changes in the road layout, such as curves or winding roads. When you see these, you should slow down. Some signs warn of physical hazards like steep hills (trucks must use lower gears) or &quot;Slippery When Wet&quot; conditions.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-yellow-500 pl-4">Intersections and Merges</h3>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        Intersections are high-risk areas, so look for yellow signs indicating specific layouts like a T-intersection, Y-intersection, or a &quot;Plus&quot; sign for a standard crossover.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed">
                                        <strong>Merge signs</strong> are particularly important; they show you which lane is ending or where traffic will be entering your flow. Always adjust your speed to let merging traffic in safely.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-yellow-500 pl-4">Pedestrians and Hazards</h3>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        Special warning signs indicate where you are likely to encounter non-vehicles. A yellow or fluorescent yellow-green pentagon marks a <strong>School Zone</strong>. You must slow down and watch for children. A diamond sign with a walking person indicates a pedestrian crossing.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed">
                                        In rural areas, animal crossing signs (like deer or cattle) warn you to be vigilant, especially at dawn and dusk when these animals are most active.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-yellow-500 pl-4">Railroad Crossings</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Railroad crossings are unique. You will see a <strong>round yellow sign</strong> with an &quot;RX&quot; symbol as an advance warning before you reach the tracks. At the tracks themselves, look for the &quot;Crossbuck&quot; (an X-shaped white sign), which acts exactly like a Yield sign. If lights are flashing, you must stop.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100 mt-10">
                                <h4 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                                    <AlertTriangle className="w-5 h-5 text-amber-600" />
                                    Exam Alert
                                </h4>
                                <p className="text-amber-900/80 text-sm leading-relaxed">The round yellow railroad advance warning sign is the ONLY round warning sign. This is a favorite test question.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 5: Traffic Signals */}
                <section id="traffic-signals" className="py-16 md:py-20 bg-gray-50 scroll-mt-32">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Traffic Signals: Lights &amp; Arrows</h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-10">
                                The lights you encounter daily—but the test asks tricky questions about flashing lights and arrows.
                            </p>

                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-gray-900 pl-4">Standard Traffic Lights</h3>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        <strong className="text-red-600">Red Light:</strong> You must come to a complete stop. You can make a right turn on red after stopping, unless a sign says otherwise. In rare cases (like turning from a one-way street onto another one-way street), a left on red may be legal.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        <strong className="text-yellow-600">Yellow Light:</strong> CAUTION. The light is about to turn red. You should stop if you can do so safely. Never speed up to &quot;beat&quot; a yellow light.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed">
                                        <strong className="text-green-600">Green Light:</strong> GO. However, green does not guarantee a safe path; you must still yield to any vehicles or pedestrians already in the intersection.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-gray-900 pl-4">Flashing Lights and Arrows</h3>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        A <strong>Flashing Red Light</strong> is legally equivalent to a STOP sign. You must stop completely, check for safety, and then proceed. A <strong>Flashing Yellow Light</strong> means &quot;Proceed with Caution&quot;—you do not need to stop, but you should slow down and be alert.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed">
                                        <strong>Arrows</strong> control turns. A <span className="text-green-600 font-bold">Green Arrow</span> is a &quot;protected turn,&quot; meaning oncoming traffic is stopped for you. A <span className="text-red-600 font-bold">Red Arrow</span> prohibits turning in that direction entirely. A <span className="text-yellow-600 font-bold">Flashing Yellow Arrow</span> means you can turn, but it is unprotected—you must yield to oncoming traffic first.
                                    </p>
                                </div>

                                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mt-6">
                                    <strong className="text-blue-900 block mb-1">State Law Note:</strong>
                                    <span className="text-blue-800 text-sm leading-relaxed">&quot;Right on Red&quot; is the general rule across the US, but New York City prohibits it unless a sign explicitly allows it. Always check for signs like &quot;NO TURN ON RED&quot;.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 6: Road Markings */}
                <section id="road-markings" className="py-16 md:py-20 bg-white scroll-mt-32">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Road Markings: Lines &amp; Symbols</h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-10">
                                The painted lines on the road surface. Master one simple rule: <strong>Yellow = opposite direction traffic. White = same direction traffic.</strong>
                            </p>

                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-yellow-400 pl-4">Yellow vs. White Lines</h3>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        The color of the line tells you the direction of traffic. <strong>Yellow lines</strong> separate traffic moving in <em>opposite</em> directions (like a two-way street). If the yellow line is on your left, you are on the correct side of the road. <strong>White lines</strong> separate lanes of traffic moving in the <em>same</em> direction (like on a highway) or mark the right edge of the road.
                                    </p>
                                    <div className="text-gray-600 leading-relaxed space-y-2">
                                        <p>As for the style of the line:</p>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li><strong>Broken Lines:</strong> You may cross this line to pass or change lanes if it is safe.</li>
                                            <li><strong>Solid Lines:</strong> You should stay in your lane. Passing or changing lanes is discouraged or hazardous.</li>
                                            <li><strong>Double Solid Lines:</strong> Strictly prohibited. You cannot cross these lines to pass.</li>
                                        </ul>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-gray-900 pl-4">Special Symbols</h3>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        <strong>Stop Lines</strong> are thick white bars painted across the road at intersections; you must stop <em>behind</em> this line, not on top of it. <strong>Yield Triangles</strong> (&quot;shark teeth&quot;) indicate you must yield to other traffic.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed">
                                        If you see a <strong>Diamond Symbol</strong> in a lane, that is restricted for High Occupancy Vehicles (HOV), buses, or bikes. Do not drive there unless you qualify. A <strong>Bike Lane</strong> marked with a bicycle symbol is exclusively for cyclists; do not drive or park in it unless turning.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 7: Work Zones */}
                <section id="work-zones" className="py-16 md:py-20 bg-gray-50 scroll-mt-32">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="flex items-center gap-3 mb-6">
                                <Construction className="w-8 h-8 text-orange-600" />
                                <h2 className="text-3xl font-bold text-gray-900">Work Zones: Orange = Caution</h2>
                            </div>
                            <p className="text-lg text-gray-600 leading-relaxed mb-10">
                                Orange signs mark construction and work zones. Fines are doubled (sometimes tripled) and workers are at risk. Take these seriously.
                            </p>

                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-orange-500 pl-4">Construction Zone Safety</h3>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        Work zones are dangerous areas marked by <strong>orange signs</strong>. The most common signs are &quot;Road Work Ahead,&quot; &quot;Lane Closed,&quot; or &quot;Flagger Ahead.&quot; In these zones, you must slow down and be prepared to stop. Fines for moving violations (like speeding) are often <strong>doubled</strong> or even tripled in work zones.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed">
                                        If you see a worker holding a flag or a paddle, their instructions overrule any other traffic signs or signals. If they tell you to stop, you must stop.
                                    </p>
                                </div>

                                <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg mt-6">
                                    <strong className="text-orange-900 block mb-1">Test Tip:</strong>
                                    <span className="text-orange-800 text-sm leading-relaxed">If a question asks about a work zone, the correct answer almost always involves &quot;slowing down&quot; or &quot;double fines.&quot;</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 8: Practice Test */}
                <section id="practice-test" className="py-16 md:py-24 bg-white relative scroll-mt-32">
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
                            <span className="text-[#007aff] font-bold tracking-wider uppercase text-sm mb-3 block">Interactive Quiz</span>
                            <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-4 md:mb-6">Test Your Knowledge</h2>
                            <p className="text-lg md:text-xl text-gray-600">20 mixed questions covering shapes, colors, signals, and markings.</p>
                        </div>
                        <div className="max-w-3xl mx-auto">
                            <PracticeTest questions={SIGNS_AND_SIGNALS_QUESTIONS} />
                        </div>
                        <div className="mt-12 max-w-3xl mx-auto text-center">
                            <p className="text-sm text-gray-500 leading-relaxed">Questions compiled from official Real Estate handbooks and MUTCD standards.</p>
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
                                <h2 className="text-2xl md:text-4xl font-black text-gray-900">Frequently Asked Questions</h2>
                            </div>
                            <div className="space-y-4">
                                {FAQ_DATA.map((faq, index) => (
                                    <details key={index} className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
                                        <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer font-bold text-gray-900 hover:bg-gray-50 transition-colors">
                                            <span className="pr-4 text-left">{faq.question}</span>
                                            <ChevronRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform flex-shrink-0" />
                                        </summary>
                                        <div className="px-5 md:px-6 pb-5 md:pb-6 pt-4 text-gray-600 leading-relaxed border-t border-gray-100">{faq.answer}</div>
                                    </details>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Related Articles */}
                <RelatedConcepts currentConceptId="signs-and-signals" />

                {/* CTA Section */}
                <section className="py-16 md:py-24 bg-gray-900 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#007aff]/10"></div>
                    <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
                        <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">Ready for the Real Test?</h2>
                        <p className="text-gray-400 text-base md:text-lg mb-8 md:mb-10">Don&apos;t lose easy points on road signs. Get our premium state-specific study packs to guarantee you pass.</p>
                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                            <Link href="/#states" className="inline-flex items-center justify-center px-6 md:px-8 py-4 bg-[#007aff] hover:bg-[#0056cc] text-white text-base md:text-lg font-bold rounded-xl transition-all shadow-lg hover:shadow-blue-500/25">
                                Find Your State
                            </Link>
                            <Link href="/real-estate-premium" className="inline-flex items-center justify-center px-6 md:px-8 py-4 bg-transparent border border-gray-700 hover:border-white text-white text-base md:text-lg font-semibold rounded-xl transition-all">
                                <Crown className="w-5 h-5 mr-2 text-yellow-400" />
                                Get Premium
                            </Link>
                        </div>
                    </div>
                </section>
                <StateHubsSection />
            </main>
            <Footer />
        </div >
    )
}
