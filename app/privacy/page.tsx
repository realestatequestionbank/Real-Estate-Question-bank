'use client'

import { AuthProvider } from '@/contexts/auth-context'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { useAuth } from '@/contexts/auth-context'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { 
    Shield, 
    FileText, 
    Globe, 
    Mail, 
    Check, 
    Copy, 
    HelpCircle, 
    Share2, 
    Eye, 
    User, 
    Scale, 
    AlertCircle,
    ChevronRight
} from 'lucide-react'

const sections = [
    { id: 'info-collect', label: '1. Information We Collect', icon: FileText },
    { id: 'types-collected', label: '2. Types of Info', icon: LockIcon },
    { id: 'how-use', label: '3. How We Use Info', icon: HelpCircle },
    { id: 'sharing', label: '4. Information Sharing', icon: Share2 },
    { id: 'security', label: '5. Data Security', icon: Shield },
    { id: 'cookies', label: '6. Cookies & Tracking', icon: Eye },
    { id: 'children', label: '8. Children\'s Privacy', icon: User },
    { id: 'rights', label: '9. Your Rights & Choices', icon: Scale },
    { id: 'california', label: '13. California Rights', icon: Globe },
    { id: 'contact', label: 'Contact Us', icon: Mail },
]

// Simple custom component wrapper to avoid any LockIcon missing export issue, using standard Lucide Lock icon.
function LockIcon(props: any) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
    )
}

function PrivacyContent() {
    const { user, userData, isPremium, signOut } = useAuth()
    const router = useRouter()
    const [activeId, setActiveId] = useState('info-collect')
    const [copied, setCopied] = useState(false)

    const handleLogin = () => router.push('/#login')
    const handleSignup = () => router.push('/#signup')
    const handleLogout = async () => await signOut()
    const handleDashboard = () => router.push('/dashboard')

    const copyToClipboard = () => {
        navigator.clipboard.writeText('contact@realestatequestionbank.com')
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    // Scrollspy behavior
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id)
                    }
                })
            },
            { 
                rootMargin: '-15% 0px -70% 0px', 
                threshold: 0 
            }
        )

        const targets = sections.map(s => document.getElementById(s.id)).filter(Boolean)
        targets.forEach((el) => observer.observe(el!))

        return () => {
            targets.forEach((el) => observer.unobserve(el!))
        }
    }, [])

    return (
        <div className="min-h-screen bg-slate-50/50">
            <Navigation
                user={user}
                userData={userData}
                isPremium={isPremium}
                onLogin={handleLogin}
                onSignup={handleSignup}
                onLogout={handleLogout}
                onDashboard={handleDashboard}
            />

            {/* Header / Hero Section */}
            <header className="relative overflow-hidden bg-gradient-to-b from-[#007aff]/10 via-slate-50/30 to-white pt-20 pb-16 border-b border-slate-100">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
                <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#007aff]/10 border border-[#007aff]/20 text-[#007aff] text-xs font-semibold mb-4 animate-fade-in shadow-sm">
                        <Shield className="w-3.5 h-3.5" />
                        <span>Security & Privacy</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-4 animate-fade-in-up">
                        Privacy Policy
                    </h1>
                    <p className="text-slate-500 font-medium max-w-xl mx-auto flex items-center justify-center gap-2 text-sm md:text-base animate-fade-in delay-200">
                        <span>Last Updated: August 01, 2025</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                        <span>Novatech Ventures LLC</span>
                    </p>
                </div>
            </header>

            {/* Main Content Grid */}
            <main className="container mx-auto px-4 py-12 lg:py-16 max-w-6xl relative z-10">
                
                {/* Mobile scroll-spy navigation header */}
                <div className="lg:hidden sticky top-[72px] z-20 bg-white/95 backdrop-blur-md border border-slate-100 rounded-2xl py-3 px-4 shadow-sm mb-8 overflow-x-auto scrollbar-hide flex gap-2 w-full">
                    {sections.map(section => {
                        const IconComponent = section.icon
                        const isActive = activeId === section.id
                        return (
                            <a
                                key={section.id}
                                href={`#${section.id}`}
                                className={`flex-shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                                    isActive 
                                        ? 'bg-[#007aff] text-white shadow-md shadow-[#007aff]/20' 
                                        : 'bg-slate-50 text-slate-600 border border-slate-100 hover:bg-slate-100'
                                }`}
                            >
                                <IconComponent className="w-3.5 h-3.5" />
                                <span>{section.label.split('. ')[1] || section.label}</span>
                            </a>
                        )
                    })}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    
                    {/* Sticky Sidebar Table of Contents (Desktop) */}
                    <aside className="hidden lg:block lg:col-span-4 lg:sticky lg:top-24 h-fit max-h-[calc(100vh-8rem)] overflow-y-auto pr-2 scrollbar-hide">
                        <div className="bg-white rounded-3xl border border-slate-100 p-6 shadow-sm">
                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 px-2">Table of Contents</h3>
                            <nav className="space-y-1 relative">
                                {/* Visual vertical line */}
                                <div className="absolute left-6 top-2 bottom-2 w-0.5 bg-slate-100" />
                                
                                {sections.map((section) => {
                                    const IconComponent = section.icon
                                    const isActive = activeId === section.id
                                    return (
                                        <a
                                            key={section.id}
                                            href={`#${section.id}`}
                                            className={`relative flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 group ${
                                                isActive
                                                    ? 'text-[#007aff] bg-[#007aff]/5'
                                                    : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50/40'
                                            }`}
                                        >
                                            {/* Active visual bullet wrapper */}
                                            <div className={`w-4 h-4 rounded-full flex items-center justify-center z-10 bg-white border-2 transition-all duration-200 ${
                                                isActive 
                                                    ? 'border-[#007aff] scale-110' 
                                                    : 'border-slate-300 group-hover:border-slate-400'
                                            }`}>
                                                <div className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                                                    isActive ? 'bg-[#007aff]' : 'bg-transparent'
                                                }`} />
                                            </div>
                                            <IconComponent className={`w-4 h-4 transition-colors duration-200 ${isActive ? 'text-[#007aff]' : 'text-slate-400 group-hover:text-slate-600'}`} />
                                            <span className="truncate">{section.label.split('. ')[1] || section.label}</span>
                                            {isActive && <ChevronRight className="w-3.5 h-3.5 ml-auto text-[#007aff] animate-pulse" />}
                                        </a>
                                    )
                                })}
                            </nav>
                        </div>
                    </aside>

                    {/* Main Legal Content */}
                    <div className="lg:col-span-8 space-y-8">
                        
                        {/* Section 1 */}
                        <section 
                            id="info-collect" 
                            className="scroll-mt-32 p-6 md:p-8 rounded-3xl border border-slate-100 bg-white hover:border-slate-200/80 hover:shadow-md transition-all duration-300 group"
                        >
                            <div className="flex items-center gap-3 mb-5 border-b border-slate-50 pb-4">
                                <div className="w-10 h-10 rounded-xl bg-[#007aff]/10 text-[#007aff] flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                                    <FileText className="w-5 h-5" />
                                </div>
                                <h2 className="text-xl md:text-2xl font-bold text-slate-800">1. Information We Collect</h2>
                            </div>
                            <p className="text-slate-650 leading-relaxed mb-5 pl-2">We collect information you provide directly to us, such as when you:</p>
                            
                            <div className="grid md:grid-cols-2 gap-4">
                                {[
                                    'Create an account or make a purchase',
                                    'Contact us for support',
                                    'Sign up for our newsletter',
                                    'Participate in surveys or promotions'
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 bg-slate-50/50 p-4 rounded-2xl border border-slate-100/85 hover:border-slate-200 transition-all duration-200">
                                        <div className="w-6 h-6 rounded-full bg-[#007aff]/10 border border-[#007aff]/20 text-[#007aff] flex items-center justify-center flex-shrink-0 text-xs font-bold">
                                            ?
                                        </div>
                                        <span className="text-slate-755 font-semibold text-slate-700 text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 2 */}
                        <section 
                            id="types-collected" 
                            className="scroll-mt-32 p-6 md:p-8 rounded-3xl border border-slate-100 bg-white hover:border-slate-200/80 hover:shadow-md transition-all duration-300 group"
                        >
                            <div className="flex items-center gap-3 mb-5 border-b border-slate-50 pb-4">
                                <div className="w-10 h-10 rounded-xl bg-[#007aff]/10 text-[#007aff] flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                                    <LockIcon className="w-5 h-5 text-[#007aff]" />
                                </div>
                                <h2 className="text-xl md:text-2xl font-bold text-slate-800">2. Types of Information Collected</h2>
                            </div>
                            
                            <div className="grid md:grid-cols-2 gap-5">
                                {[
                                    { title: 'Personal Information', content: 'Name, email address, phone number, and payment information', icon: User },
                                    { title: 'Usage Data', content: 'How you interact with our website, including pages visited and time spent', icon: HelpCircle },
                                    { title: 'Device Information', content: 'IP address, browser type, operating system, and device identifiers', icon: Globe },
                                    { title: 'Cookies and Tracking', content: 'Information stored on your device to enhance your experience', icon: Eye }
                                ].map((item, idx) => {
                                    const CardIcon = item.icon
                                    return (
                                        <div key={idx} className="bg-slate-50/40 p-5 rounded-2xl border border-slate-100/80 shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-350 group/card">
                                            <div className="flex items-center gap-3 mb-2.5">
                                                <div className="w-8.5 h-8.5 rounded-lg bg-white border border-slate-200/60 text-slate-650 flex items-center justify-center group-hover/card:bg-[#007aff] group-hover/card:text-white transition-colors duration-300">
                                                    <CardIcon className="w-4 h-4" />
                                                </div>
                                                <h3 className="font-bold text-slate-850 text-sm md:text-base">{item.title}</h3>
                                            </div>
                                            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">{item.content}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </section>

                        {/* Section 3 */}
                        <section 
                            id="how-use" 
                            className="scroll-mt-32 p-6 md:p-8 rounded-3xl border border-slate-100 bg-white hover:border-slate-200/80 hover:shadow-md transition-all duration-300 group"
                        >
                            <div className="flex items-center gap-3 mb-5 border-b border-slate-50 pb-4">
                                <div className="w-10 h-10 rounded-xl bg-[#007aff]/10 text-[#007aff] flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                                    <HelpCircle className="w-5 h-5" />
                                </div>
                                <h2 className="text-xl md:text-2xl font-bold text-slate-800">3. How We Use Your Information</h2>
                            </div>
                            <p className="text-slate-600 leading-relaxed mb-5 pl-2">We use the information we collect to:</p>
                            
                            <div className="grid gap-3.5 pl-2">
                                {[
                                    'Provide, maintain, and improve our services',
                                    'Process transactions and send related information',
                                    'Send technical notices, updates, and support messages',
                                    'Respond to your comments and questions',
                                    'Develop new products and services',
                                    'Protect against fraudulent or illegal activity'
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-4 py-2.5 px-4 rounded-2xl bg-slate-50/50 border border-slate-100/70 hover:bg-slate-50 transition-colors">
                                        <div className="w-7 h-7 bg-[#007aff] text-white rounded-lg flex items-center justify-center font-bold text-xs shadow-sm flex-shrink-0">
                                            {idx + 1}
                                        </div>
                                        <span className="text-slate-755 text-sm md:text-base font-semibold">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 4 */}
                        <section 
                            id="sharing" 
                            className="scroll-mt-32 p-6 md:p-8 rounded-3xl border border-[#007aff]/20 bg-gradient-to-br from-[#007aff] to-[#0051a8] text-white shadow-xl relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl pointer-events-none" />
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl pointer-events-none" />
                            
                            <div className="flex items-center gap-3 mb-5 border-b border-white/10 pb-4 relative z-10">
                                <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-sm text-white flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                                    <Share2 className="w-5 h-5" />
                                </div>
                                <h2 className="text-xl md:text-2xl font-bold">4. Information Sharing</h2>
                            </div>
                            
                            <p className="text-base md:text-lg text-blue-50 mb-6 leading-relaxed font-medium relative z-10">
                                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                            </p>
                            
                            <ul className="grid sm:grid-cols-2 gap-4 relative z-10">
                                {[
                                    'With your explicit consent',
                                    'To comply with legal obligations',
                                    'To protect our rights and safety',
                                    'With trusted service providers'
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 hover:bg-white/15 transition-colors">
                                        <div className="w-2.5 h-2.5 rounded-full bg-white/40 shadow-sm flex-shrink-0" />
                                        <span className="font-semibold text-sm md:text-base text-white">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Section 5 */}
                        <section 
                            id="security" 
                            className="scroll-mt-32 p-6 md:p-8 rounded-3xl border border-slate-100 bg-white hover:border-slate-200/80 hover:shadow-md transition-all duration-300 group"
                        >
                            <div className="flex items-center gap-3 mb-5 border-b border-slate-50 pb-4">
                                <div className="w-10 h-10 rounded-xl bg-[#007aff]/10 text-[#007aff] flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                                    <Shield className="w-5 h-5" />
                                </div>
                                <h2 className="text-xl md:text-2xl font-bold text-slate-800">5. Data Security</h2>
                            </div>
                            <p className="text-slate-650 pl-2 leading-relaxed text-sm md:text-base">
                                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                            </p>
                        </section>

                        {/* Section 6 */}
                        <section 
                            id="cookies" 
                            className="scroll-mt-32 p-6 md:p-8 rounded-3xl border border-slate-100 bg-white hover:border-slate-200/80 hover:shadow-md transition-all duration-300 group"
                        >
                            <div className="flex items-center gap-3 mb-5 border-b border-slate-50 pb-4">
                                <div className="w-10 h-10 rounded-xl bg-[#007aff]/10 text-[#007aff] flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                                    <Eye className="w-5 h-5" />
                                </div>
                                <h2 className="text-xl md:text-2xl font-bold text-slate-800">6. Cookies and Tracking</h2>
                            </div>
                            <p className="text-slate-600 leading-relaxed mb-4 pl-2">We use cookies and similar tracking technologies to:</p>
                            <ul className="space-y-3 text-slate-650 pl-2 mb-4">
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#007aff] mt-2 flex-shrink-0" />
                                    <span>Remember your preferences and settings</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#007aff] mt-2 flex-shrink-0" />
                                    <span>Analyze website traffic and usage patterns</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#007aff] mt-2 flex-shrink-0" />
                                    <span>Provide personalized content and advertisements</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#007aff] mt-2 flex-shrink-0" />
                                    <span>Improve website functionality and user experience</span>
                                </li>
                            </ul>
                            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100/80 text-slate-600 text-xs md:text-sm font-semibold italic">
                                You can control cookie settings through your browser preferences.
                            </div>
                        </section>

                        {/* Section 8 */}
                        <section 
                            id="children" 
                            className="scroll-mt-32 p-6 md:p-8 rounded-3xl border border-slate-100 bg-white hover:border-slate-200/80 hover:shadow-md transition-all duration-300 group"
                        >
                            <div className="flex items-center gap-3 mb-5 border-b border-slate-50 pb-4">
                                <div className="w-10 h-10 rounded-xl bg-[#007aff]/10 text-[#007aff] flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                                    <User className="w-5 h-5" />
                                </div>
                                <h2 className="text-xl md:text-2xl font-bold text-slate-800">8. Children's Privacy</h2>
                            </div>
                            <p className="text-slate-650 pl-2 leading-relaxed text-sm md:text-base">
                                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately.
                            </p>
                        </section>

                        {/* Section 9 */}
                        <section 
                            id="rights" 
                            className="scroll-mt-32 p-6 md:p-8 rounded-3xl border border-slate-100 bg-white hover:border-slate-200/80 hover:shadow-md transition-all duration-300 group"
                        >
                            <div className="flex items-center gap-3 mb-5 border-b border-slate-50 pb-4">
                                <div className="w-10 h-10 rounded-xl bg-[#007aff]/10 text-[#007aff] flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                                    <Scale className="w-5 h-5" />
                                </div>
                                <h2 className="text-xl md:text-2xl font-bold text-slate-800">9. Your Rights and Choices</h2>
                            </div>
                            
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    'Access and update personal information',
                                    'Request deletion of data',
                                    'Opt-out of marketing communications',
                                    'Control cookie settings',
                                    'Request processing details'
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 bg-slate-50/60 p-4.5 rounded-2xl border border-slate-100/80 shadow-sm hover:border-slate-200 transition-all duration-300">
                                        <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 font-bold text-xs border border-emerald-100">
                                            ?
                                        </div>
                                        <span className="text-slate-750 text-xs md:text-sm font-semibold">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 13 */}
                        <section 
                            id="california" 
                            className="scroll-mt-32 p-6 md:p-8 rounded-3xl border border-slate-100 bg-white hover:border-slate-200/80 hover:shadow-md transition-all duration-300 group"
                        >
                            <div className="flex items-center gap-3 mb-5 border-b border-slate-50 pb-4">
                                <div className="w-10 h-10 rounded-xl bg-[#007aff]/10 text-[#007aff] flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                                    <Globe className="w-5 h-5" />
                                </div>
                                <h2 className="text-xl md:text-2xl font-bold text-slate-800">13. California Privacy Rights</h2>
                            </div>
                            <p className="text-slate-655 pl-2 leading-relaxed text-sm md:text-base italic bg-slate-50/30 p-4 rounded-2xl border border-slate-100/60">
                                California residents have additional rights under the CCPA, including the right to know what personal information is collected and how it's used, the right to delete personal information, and the right to opt-out of the sale of personal information.
                            </p>
                        </section>

                        {/* Contact Us */}
                        <section 
                            id="contact" 
                            className="scroll-mt-32 p-8 rounded-3xl border border-[#007aff]/20 bg-gradient-to-br from-[#007aff]/5 via-white to-white text-center shadow-md relative overflow-hidden group hover:border-[#007aff]/40 transition-all duration-300"
                        >
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#007aff]/10 rounded-full blur-3xl pointer-events-none" />
                            
                            <div className="w-14 h-14 rounded-2xl bg-[#007aff] text-white flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#007aff]/20 group-hover:scale-110 transition-transform duration-300 relative z-10">
                                <Mail className="w-6 h-6" />
                            </div>
                            
                            <h2 className="text-2xl font-bold text-slate-855 mb-3 relative z-10">Contact Us</h2>
                            <p className="text-slate-600 max-w-md mx-auto mb-6 text-sm md:text-base relative z-10 leading-relaxed">
                                If you have any questions about this privacy policy or our data practices, please contact us at:
                            </p>
                            
                            <div className="relative z-10 inline-flex flex-col items-center gap-3">
                                <button
                                    onClick={copyToClipboard}
                                    className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-base md:text-lg transition-all duration-200 hover:shadow-lg active:scale-95 group/btn"
                                >
                                    <span>contact@realestatequestionbank.com</span>
                                    {copied ? (
                                        <Check className="w-5 h-5 text-emerald-400 animate-scale-in" />
                                    ) : (
                                        <Copy className="w-4 h-4 text-slate-400 group-hover/btn:text-white transition-colors" />
                                    )}
                                </button>
                                <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                                    {copied ? 'Copied to clipboard!' : 'Click to copy email address'}
                                </span>
                                <p className="text-slate-400 font-bold mt-2 uppercase tracking-widest text-xxs">Novatech Ventures LLC</p>
                            </div>
                        </section>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default function PrivacyPage() {
    return (
        <AuthProvider>
            <PrivacyContent />
        </AuthProvider>
    )
}
