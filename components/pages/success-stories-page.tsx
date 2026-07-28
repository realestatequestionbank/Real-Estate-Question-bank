'use client'

import { useState, useEffect } from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { useAuth } from '@/contexts/auth-context'
import { TESTIMONIALS, Testimonial } from '@/lib/constants/testimonials'
import { STATES, type StateKey } from '@/lib/constants'
import { Star, MessageCircle, MapPin, Calendar, Heart, Share2, Quote, Send, PartyPopper, Trophy, Rocket, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { getStateDedicatedPageUrl } from '@/lib/utils/state-routes'

export function SuccessStoriesPageContent() {
    const { user, userData, isPremium, isPremiumExpired, premiumStatus, signOut } = useAuth()
    const [isVisible, setIsVisible] = useState(false)
    const router = useRouter()

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const handleLogin = () => { }
    const handleSignup = () => { }
    const handleLogout = async () => {
        await signOut()
    }
    const handleDashboard = () => {
        if (isPremium && premiumStatus === 'active') {
            router.push('/dashboard')
        }
    }
    const handlePurchaseRenewal = () => {
        // For success stories page, just redirect to home page where they can purchase
        window.location.href = '/'
    }

    // Helper to get card styles based on testimonial metadata
    const getCardStyle = (t: Testimonial) => {
        switch (t.style) {
            case 'premium':
                return 'bg-gradient-to-br from-blue-600 to-blue-700 text-white border-blue-400'
            case 'fun':
                return 'bg-gradient-to-br from-emerald-400 to-emerald-500 text-white border-emerald-300'
            case 'highlight':
                return 'bg-white border-blue-100 shadow-xl border-t-8 border-t-orange-400'
            default:
                return 'bg-white border-gray-100 shadow-lg'
        }
    }

    const getTextColor = (t: Testimonial) => {
        return (t.style === 'premium' || t.style === 'fun') ? 'text-white' : 'text-gray-900'
    }

    const getSubTextColor = (t: Testimonial) => {
        return (t.style === 'premium' || t.style === 'fun') ? 'text-blue-50' : 'text-gray-500'
    }

    return (
        <div className="min-h-screen bg-white text-gray-900 selection:bg-blue-100 overflow-x-hidden">
            <Navigation
                user={user}
                userData={userData}
                isPremium={isPremium}
                isPremiumExpired={isPremiumExpired}
                premiumStatus={premiumStatus}
                onLogin={handleLogin}
                onSignup={handleSignup}
                onLogout={handleLogout}
                onDashboard={handleDashboard}
                onPurchaseRenewal={handlePurchaseRenewal}
                showGetPremiumLink
            />

            <main className="relative pt-24">
                {/* Floating background fun elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-40 left-[10%] animate-bounce opacity-20">
                        <PartyPopper className="w-12 h-12 text-blue-500" />
                    </div>
                    <div className="absolute top-60 right-[15%] animate-pulse opacity-20">
                        <Trophy className="w-16 h-16 text-yellow-500" />
                    </div>
                    <div className="absolute bottom-[20%] left-[5%] animate-bounce opacity-20 delay-700">
                        <Rocket className="w-10 h-10 text-emerald-500" />
                    </div>
                    <div className="absolute bottom-[40%] right-[10%] animate-pulse opacity-20 delay-1000">
                        <Sparkles className="w-14 h-14 text-purple-500" />
                    </div>
                </div>

                {/* Hero Section */}
                <section className="relative px-4 py-24 text-center">
                    <div className="max-w-6xl mx-auto relative z-10">
                        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <div className="inline-flex items-center gap-2 bg-yellow-100 border border-yellow-200 text-yellow-700 px-6 py-2.5 rounded-full text-sm font-black mb-8 animate-bounce">
                                <Star className="w-4 h-4 fill-yellow-700" />
                                <span>100% REAL EXPERIENCES</span>
                            </div>
                            <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-none">
                                Wall of <span className="text-[#007aff] inline-block hover:rotate-2 transition-transform cursor-default underline decoration-8 decoration-emerald-200 underline-offset-8">Fame</span>
                            </h1>
                            <p className="text-2xl md:text-3xl text-gray-700 max-w-3xl mx-auto leading-tight font-medium mb-12">
                                The journey to your license starts here. See how these students <span className="bg-[#007aff] text-white px-3 py-1 rounded-lg">crushed</span> their exams!
                            </p>

                            <div className="flex flex-wrap justify-center gap-6">
                                <a
                                    href="mailto:hello@realestatequestionbank.com?subject=My Real Estate Success Story"
                                    className="group bg-black hover:bg-[#007aff] text-white px-10 py-5 rounded-[2rem] font-black text-xl inline-flex items-center gap-4 transition-all duration-500 shadow-2xl hover:scale-110 active:scale-95"
                                >
                                    <PartyPopper className="w-6 h-6 transition-transform group-hover:rotate-45" />
                                    Share Your Story
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Dynamic Grid */}
                <section className="py-20 px-4 bg-white relative z-10 brick-wall-bg">
                    <div className="max-w-7xl mx-auto">
                        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                            {TESTIMONIALS.map((t: Testimonial, idx: number) => (
                                <div
                                    key={t.id}
                                    className={`break-inside-avoid transition-all duration-[1200ms] transform ${isVisible ? 'translate-y-0 opacity-100 rotate-0' : 'translate-y-40 opacity-0 rotate-6'}`}
                                    style={{ transitionDelay: `${idx * 100}ms` }}
                                >
                                    <div className={`group relative rounded-[2.5rem] p-8 border-4 transition-all duration-500 hover:scale-[1.03] hover:-rotate-1 ${getCardStyle(t)}`}>

                                        {/* Badge for those who passed */}
                                        <div className="absolute -top-4 -right-4 bg-yellow-400 text-black px-4 py-1.5 rounded-full font-black text-xs uppercase tracking-tighter shadow-lg rotate-12 group-hover:rotate-0 transition-transform">
                                            PASSED! 🏁
                                        </div>

                                        <div className="relative z-10">
                                            {t.type === 'photo' ? (
                                                <div className="flex items-center gap-5 mb-8">
                                                    <div className="relative flex-shrink-0">
                                                        <div className="w-20 h-20 rounded-[2rem] overflow-hidden border-4 border-white shadow-card transform -rotate-6 group-hover:rotate-0 transition-transform duration-500">
                                                            <img
                                                                src={t.image}
                                                                alt={t.name}
                                                                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-500"
                                                            />
                                                        </div>
                                                        <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1.5 shadow-md">
                                                            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h3 className={`text-2xl font-black leading-tight ${getTextColor(t)}`}>{t.name}</h3>
                                                        <div className={`flex items-center gap-2 font-bold uppercase tracking-widest text-[10px] ${getSubTextColor(t)}`}>
                                                            <MapPin className="w-3.5 h-3.5" />
                                                            {t.city}, {t.state}
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="mb-8">
                                                    <div className="flex items-center justify-between mb-4">
                                                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-black ${t.style === 'fun' ? 'bg-white/20' : 'bg-blue-50 text-blue-600'}`}>
                                                            {t.name.charAt(0)}
                                                        </div>
                                                        <div className={`flex items-center gap-1.5 font-bold text-[10px] uppercase tracking-widest ${getSubTextColor(t)}`}>
                                                            <MapPin className="w-3.5 h-3.5" />
                                                            {t.city}, {t.state}
                                                        </div>
                                                    </div>
                                                    <h3 className={`text-2xl font-black leading-tight ${getTextColor(t)}`}>{t.name}</h3>
                                                </div>
                                            )}

                                            <div className="flex gap-1 mb-6">
                                                {[...Array(t.rating)].map((_, i) => (
                                                    <Star key={i} className={`w-5 h-5 fill-current ${t.style === 'premium' || t.style === 'fun' ? 'text-white' : 'text-yellow-400'}`} />
                                                ))}
                                            </div>

                                            <div className="relative mb-8 min-h-[100px]">
                                                <Quote className={`w-12 h-12 absolute -top-4 -left-6 transform -rotate-12 transition-transform group-hover:scale-150 opacity-10 ${t.style === 'premium' || t.style === 'fun' ? 'text-white' : 'text-blue-600'}`} />
                                                <blockquote className={`text-xl md:text-2xl font-bold leading-snug italic relative z-10 ${getTextColor(t)}`}>
                                                    "{t.comment}"
                                                </blockquote>
                                            </div>

                                            <div className={`mt-auto pt-6 border-t flex items-center justify-between text-[10px] font-black uppercase tracking-[0.2em] ${t.style === 'premium' || t.style === 'fun' ? 'border-white/10 text-white/60' : 'border-gray-50 text-gray-400'}`}>
                                                <div className="flex items-center gap-2">
                                                    <Calendar className="w-3.5 h-3.5" />
                                                    {t.testDate}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Big CTA */}
                <section className="py-32 px-4 relative overflow-hidden bg-white">
                    <div className="max-w-4xl mx-auto">
                        <div className={`bg-gradient-to-br from-blue-700 to-indigo-800 rounded-[3.5rem] p-16 text-white relative text-center shadow-[0_40px_100px_-20px_rgba(59,130,246,0.5)] transition-all duration-[1500ms] transform ${isVisible ? 'scale-100 rotate-0 translate-y-0 opacity-100' : 'scale-90 rotate-2 translate-y-20 opacity-0'}`}>

                            <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>

                            <div className="relative z-10">
                                <div className="w-24 h-24 bg-white/10 rounded-[2rem] flex items-center justify-center mx-auto mb-10 rotate-12 animate-float">
                                    <Sparkles className="w-12 h-12 text-yellow-300 fill-yellow-300" />
                                </div>
                                <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tight">
                                    You could be <br /> <span className="text-yellow-300">NEXT!</span>
                                </h2>
                                <p className="text-2xl text-blue-50/80 mb-14 max-w-2xl mx-auto font-medium leading-relaxed">
                                    Start practicing today and join our wall of winners. Your success story is just a few practice tests away.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                    <Link
                                        href="/#states"
                                        className="w-full sm:w-auto bg-white text-blue-700 hover:bg-black hover:text-white px-12 py-6 rounded-[2rem] font-black text-2xl transition-all duration-300 shadow-2xl active:scale-95"
                                    >
                                        Start Practice 🚀
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* State Real Estate Practice-Test Hubs */}
                <section className="border-t border-gray-100 pb-24 pt-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-gray-900 text-center">State Real Estate Practice-Test Hubs</h2>

                            <div className="grid grid-cols-3 md:grid-cols-5 gap-y-3 gap-x-8 text-left">
                                {Object.entries(STATES)
                                    .sort((a, b) => a[1].name.localeCompare(b[1].name))
                                    .map(([key, state]) => (
                                        <Link
                                            key={key}
                                            href={getStateDedicatedPageUrl(key as StateKey)}
                                            className="text-[#007aff] text-base font-medium relative block w-fit after:block after:content-[''] after:absolute after:h-[2px] after:bg-[#007aff] after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-left"
                                        >
                                            {state.name}
                                        </Link>
                                    ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />

            <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(12deg); }
          50% { transform: translateY(-20px) rotate(8deg); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .brick-wall-bg {
          position: relative;
          background-image: url('/images/brick_wall.jpeg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-attachment: fixed;
        }
        
        .brick-wall-bg::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255, 255, 255, 0.40);
          pointer-events: none;
          z-index: 1;
        }
        
        .brick-wall-bg > div {
          position: relative;
          z-index: 2;
        }
      `}</style>
        </div>
    )
}
