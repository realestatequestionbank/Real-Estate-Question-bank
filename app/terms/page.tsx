'use client'

import { AuthProvider } from '@/contexts/auth-context'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { useAuth } from '@/contexts/auth-context'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { 
    Scale, 
    FileText, 
    Shield, 
    AlertTriangle, 
    AlertCircle, 
    DollarSign, 
    Mail, 
    Check, 
    Copy, 
    Building, 
    Globe, 
    HelpCircle,
    ChevronRight
} from 'lucide-react'

const sections = [
    { id: 'use-of-content', label: '1. Use of Content', icon: FileText },
    { id: 'purchases-and-refunds', label: '2. Purchases & Refunds', icon: DollarSign },
    { id: 'intellectual-property', label: '3. Intellectual Property', icon: LockIcon },
    { id: 'prohibited-activities', label: '4. Prohibited Activities', icon: AlertTriangle },
    { id: 'disclaimer-warranties', label: '5. Disclaimer of Warranties', icon: AlertCircle },
    { id: 'limitation-liability', label: '6. Limitation of Liability', icon: Scale },
    { id: 'novatech-liability', label: '7. Novatech Ventures LLC', icon: Building },
    { id: 'indemnification', label: '8. Indemnification', icon: Shield },
    { id: 'changes-to-terms', label: '9. Changes to Terms', icon: HelpCircle },
    { id: 'governing-law', label: '10. Governing Law', icon: Globe },
    { id: 'dispute-resolution', label: '11. Dispute Resolution', icon: Scale },
    { id: 'contact-info', label: '12. Contact Information', icon: Mail },
]

// Simple custom component wrapper to avoid any LockIcon missing export issue, using Shield as fallback or standard Lucide Lock icon.
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

function TermsContent() {
    const { user, userData, isPremium, signOut } = useAuth()
    const router = useRouter()
    const [activeId, setActiveId] = useState('use-of-content')
    const [copied, setCopied] = useState(false)

    const handleLogin = () => router.push('/#login')
    const handleSignup = () => router.push('/#signup')
    const handleLogout = async () => await signOut()
    const handleDashboard = () => router.push('/dashboard')

    const copyToClipboard = () => {
        navigator.clipboard.writeText('hello@realestatequestionbank.com')
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
                        <Scale className="w-3.5 h-3.5" />
                        <span>Real Estate Legal Hub</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-4 animate-fade-in-up">
                        Terms and Conditions
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
                                <span>{section.label.split('. ')[1]}</span>
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
                                            <span className="truncate">{section.label.split('. ')[1]}</span>
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
                            id="use-of-content" 
                            className="scroll-mt-32 p-6 md:p-8 rounded-3xl border border-slate-100 bg-white hover:border-slate-200/80 hover:shadow-md transition-all duration-300 group"
                        >
                            <div className="flex items-center gap-3 mb-5 border-b border-slate-50 pb-4">
                                <div className="w-10 h-10 rounded-xl bg-[#007aff]/10 text-[#007aff] flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                                    <FileText className="w-5 h-5" />
                                </div>
                                <h2 className="text-xl md:text-2xl font-bold text-slate-800">1. Use of Content</h2>
                            </div>
                            <ul className="space-y-4 text-slate-600 pl-2">
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#007aff] mt-2.5 flex-shrink-0" />
                                    <span className="leading-relaxed">The Content is provided for personal, non-commercial use only.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#007aff] mt-2.5 flex-shrink-0" />
                                    <span className="leading-relaxed">You may not reproduce, distribute, modify, sell, or use the Content for any commercial purposes, including but not limited to integrating it into an application, website, or any other digital or physical product.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#007aff] mt-2.5 flex-shrink-0" />
                                    <span className="leading-relaxed">Any unauthorized use of the Content may result in legal action.</span>
                                </li>
                            </ul>
                        </section>

                        {/* Section 2 */}
                        <section 
                            id="purchases-and-refunds" 
                            className="scroll-mt-32 p-6 md:p-8 rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50/50 via-white to-white hover:border-amber-300 hover:shadow-md transition-all duration-300 group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-100/30 rounded-full -mr-6 -mt-6 blur-xl" />
                            
                            <div className="flex items-center gap-3 mb-5 border-b border-amber-100/50 pb-4 relative z-10">
                                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                                    <DollarSign className="w-5 h-5" />
                                </div>
                                <h2 className="text-xl md:text-2xl font-bold text-slate-800">2. Purchases and Refunds</h2>
                            </div>
                            
                            <div className="mb-4 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-amber-100/80 text-amber-900 text-xs font-bold uppercase tracking-wider relative z-10">
                                Important Refund Policy
                            </div>
                            
                            <ul className="space-y-4 text-slate-700 font-medium pl-2 relative z-10">
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 flex-shrink-0" />
                                    <span className="leading-relaxed">All purchases made on the Website are final. <span className="font-semibold text-slate-900 underline decoration-slate-400">No refunds</span> will be issued for standard packages.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 flex-shrink-0" />
                                    <span className="leading-relaxed">Refunds are <span className="font-semibold text-amber-950 underline decoration-amber-400 decoration-2 underline-offset-2">only available</span> for premium packages that include our pass guarantee.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 flex-shrink-0" />
                                    <span className="leading-relaxed">
                                        If you experience technical issues accessing your purchase, please contact us at{' '}
                                        <a href="mailto:hello@realestatequestionbank.com" className="text-amber-700 hover:text-amber-900 underline decoration-amber-500 underline-offset-4 font-semibold transition-colors">
                                            hello@realestatequestionbank.com
                                        </a>.
                                    </span>
                                </li>
                            </ul>
                        </section>

                        {/* Section 3 */}
                        <section 
                            id="intellectual-property" 
                            className="scroll-mt-32 p-6 md:p-8 rounded-3xl border border-slate-100 bg-white hover:border-slate-200/80 hover:shadow-md transition-all duration-300 group"
                        >
                            <div className="flex items-center gap-3 mb-5 border-b border-slate-50 pb-4">
                                <div className="w-10 h-10 rounded-xl bg-[#007aff]/10 text-[#007aff] flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                                    <LockIcon className="w-5 h-5 text-[#007aff]" />
                                </div>
                                <h2 className="text-xl md:text-2xl font-bold text-slate-800">3. Intellectual Property Rights</h2>
                            </div>
                            <ul className="space-y-4 text-slate-600 pl-2">
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#007aff] mt-2.5 flex-shrink-0" />
                                    <span className="leading-relaxed">All Content on the Website, including but not limited to questions, answers, explanations, and design, is protected under copyright and intellectual property laws.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#007aff] mt-2.5 flex-shrink-0" />
                                    <span className="leading-relaxed">You do not acquire any ownership rights by purchasing or accessing the Content.</span>
                                </li>
                            </ul>
                        </section>

                        {/* Section 4 */}
                        <section 
                            id="prohibited-activities" 
                            className="scroll-mt-32 p-6 md:p-8 rounded-3xl border border-slate-100 bg-white hover:border-slate-200/80 hover:shadow-md transition-all duration-300 group"
                        >
                            <div className="flex items-center gap-3 mb-5 border-b border-slate-50 pb-4">
                                <div className="w-10 h-10 rounded-xl bg-[#007aff]/10 text-[#007aff] flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                                    <AlertTriangle className="w-5 h-5 text-red-500" />
                                </div>
                                <h2 className="text-xl md:text-2xl font-bold text-slate-800">4. Prohibited Activities</h2>
                            </div>
                            <p className="text-slate-750 font-semibold text-slate-800 mb-3 pl-2">You explicitly agree not to:</p>
                            <ul className="space-y-4 text-slate-600 pl-2">
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5 flex-shrink-0" />
                                    <span className="leading-relaxed">Share, resell, or publicly distribute any Content from the Website.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5 flex-shrink-0" />
                                    <span className="leading-relaxed">Use the Content in any app, website, or other service without explicit written permission from us.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5 flex-shrink-0" />
                                    <span className="leading-relaxed">Reverse-engineer, copy, or replicate the Content in any form.</span>
                                </li>
                            </ul>
                        </section>

                        {/* Section 5 */}
                        <section 
                            id="disclaimer-warranties" 
                            className="scroll-mt-32 p-6 md:p-8 rounded-3xl border border-slate-100 bg-white hover:border-slate-200/80 hover:shadow-md transition-all duration-300 group"
                        >
                            <div className="flex items-center gap-3 mb-5 border-b border-slate-50 pb-4">
                                <div className="w-10 h-10 rounded-xl bg-[#007aff]/10 text-[#007aff] flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                                    <AlertCircle className="w-5 h-5" />
                                </div>
                                <h2 className="text-xl md:text-2xl font-bold text-slate-800">5. Disclaimer of Warranties</h2>
                            </div>
                            <div className="space-y-4 text-slate-600 pl-2 leading-relaxed">
                                <p>The Content is provided <span className="font-semibold text-slate-900">"as is"</span> without warranties of any kind, either express or implied.</p>
                                <p>We do not guarantee that using the Content will result in passing any Real Estate exam.</p>
                            </div>
                        </section>

                        {/* Section 6 */}
                        <section 
                            id="limitation-liability" 
                            className="scroll-mt-32 p-6 md:p-8 rounded-3xl border border-slate-100 bg-white hover:border-slate-200/80 hover:shadow-md transition-all duration-300 group"
                        >
                            <div className="flex items-center gap-3 mb-5 border-b border-slate-50 pb-4">
                                <div className="w-10 h-10 rounded-xl bg-[#007aff]/10 text-[#007aff] flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                                    <Scale className="w-5 h-5" />
                                </div>
                                <h2 className="text-xl md:text-2xl font-bold text-slate-800">6. Limitation of Liability</h2>
                            </div>
                            <div className="space-y-4 text-slate-600 pl-2 leading-relaxed">
                                <p>We are not responsible for any errors, inaccuracies, or omissions in the Content.</p>
                                <p>Under no circumstances shall we be liable for any direct, indirect, incidental, or consequential damages arising from your use of the Content.</p>
                                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 font-semibold text-slate-800 text-sm">
                                    In the event of any dispute, our total liability shall not exceed the amount paid by you for the Content.
                                </div>
                            </div>
                        </section>

                        {/* Section 7 */}
                        <section 
                            id="novatech-liability" 
                            className="scroll-mt-32 p-6 md:p-8 rounded-3xl border border-[#007aff]/20 bg-gradient-to-br from-[#007aff]/5 via-white to-white hover:border-[#007aff]/40 hover:shadow-md transition-all duration-300 group"
                        >
                            <div className="flex items-center gap-3 mb-5 border-b border-[#007aff]/20 pb-4">
                                <div className="w-10 h-10 rounded-xl bg-[#007aff]/15 text-[#007aff] flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                                    <Building className="w-5 h-5" />
                                </div>
                                <h2 className="text-xl md:text-2xl font-bold text-slate-800">7. Liability of Novatech Ventures LLC</h2>
                            </div>
                            <div className="space-y-4 text-slate-650 pl-2 leading-relaxed">
                                <p>This website, Real Estate Question Bank, is operated by <span className="font-semibold text-slate-900">Novatech Ventures LLC</span>, a registered limited liability company. By using this website, you acknowledge and agree that any legal claims must be directed solely against Novatech Ventures LLC.</p>
                                <p>You agree that the liability of Novatech Ventures LLC is limited as set forth in these Terms, and you waive any right to pursue claims against the individual members or managers of Novatech Ventures LLC for any losses, damages, or claims arising from your use of this website or its Content.</p>
                            </div>
                        </section>

                        {/* Section 8 */}
                        <section 
                            id="indemnification" 
                            className="scroll-mt-32 p-6 md:p-8 rounded-3xl border border-slate-100 bg-white hover:border-slate-200/80 hover:shadow-md transition-all duration-300 group"
                        >
                            <div className="flex items-center gap-3 mb-5 border-b border-slate-50 pb-4">
                                <div className="w-10 h-10 rounded-xl bg-[#007aff]/10 text-[#007aff] flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                                    <Shield className="w-5 h-5" />
                                </div>
                                <h2 className="text-xl md:text-2xl font-bold text-slate-800">8. Indemnification</h2>
                            </div>
                            <p className="text-slate-600 pl-2 leading-relaxed">You agree to indemnify and hold us harmless from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use or misuse of the Content or violation of these Terms.</p>
                        </section>

                        {/* Section 9 */}
                        <section 
                            id="changes-to-terms" 
                            className="scroll-mt-32 p-6 md:p-8 rounded-3xl border border-slate-100 bg-white hover:border-slate-200/80 hover:shadow-md transition-all duration-300 group"
                        >
                            <div className="flex items-center gap-3 mb-5 border-b border-slate-50 pb-4">
                                <div className="w-10 h-10 rounded-xl bg-[#007aff]/10 text-[#007aff] flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                                    <HelpCircle className="w-5 h-5" />
                                </div>
                                <h2 className="text-xl md:text-2xl font-bold text-slate-800">9. Changes to Terms</h2>
                            </div>
                            <p className="text-slate-600 pl-2 leading-relaxed">We reserve the right to update these Terms at any time without prior notice. It is your responsibility to review them periodically.</p>
                        </section>

                        {/* Section 10 */}
                        <section 
                            id="governing-law" 
                            className="scroll-mt-32 p-6 md:p-8 rounded-3xl border border-slate-100 bg-white hover:border-slate-200/80 hover:shadow-md transition-all duration-300 group"
                        >
                            <div className="flex items-center gap-3 mb-5 border-b border-slate-50 pb-4">
                                <div className="w-10 h-10 rounded-xl bg-[#007aff]/10 text-[#007aff] flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                                    <Globe className="w-5 h-5" />
                                </div>
                                <h2 className="text-xl md:text-2xl font-bold text-slate-800">10. Governing Law</h2>
                            </div>
                            <p className="text-slate-600 pl-2 leading-relaxed">These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to conflict of law principles.</p>
                        </section>

                        {/* Section 11 */}
                        <section 
                            id="dispute-resolution" 
                            className="scroll-mt-32 p-6 md:p-8 rounded-3xl border border-slate-100 bg-white hover:border-slate-200/80 hover:shadow-md transition-all duration-300 group"
                        >
                            <div className="flex items-center gap-3 mb-5 border-b border-slate-50 pb-4">
                                <div className="w-10 h-10 rounded-xl bg-[#007aff]/10 text-[#007aff] flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                                    <Scale className="w-5 h-5" />
                                </div>
                                <h2 className="text-xl md:text-2xl font-bold text-slate-800">11. Dispute Resolution</h2>
                            </div>
                            <p className="text-slate-600 pl-2 leading-relaxed">Any disputes arising from these Terms shall be resolved through binding arbitration in California, in accordance with the rules of the American Arbitration Association. You waive your right to participate in class-action lawsuits or class-wide arbitration.</p>
                        </section>

                        {/* Section 12 - Contact Details */}
                        <section 
                            id="contact-info" 
                            className="scroll-mt-32 p-8 rounded-3xl border border-[#007aff]/20 bg-gradient-to-br from-[#007aff]/5 via-white to-white text-center shadow-md relative overflow-hidden group hover:border-[#007aff]/40 transition-all duration-300"
                        >
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#007aff]/10 rounded-full blur-3xl pointer-events-none" />
                            
                            <div className="w-14 h-14 rounded-2xl bg-[#007aff] text-white flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#007aff]/20 group-hover:scale-110 transition-transform duration-300 relative z-10">
                                <Mail className="w-6 h-6" />
                            </div>
                            
                            <h2 className="text-2xl font-bold text-slate-850 mb-3 relative z-10">12. Contact Information</h2>
                            <p className="text-slate-600 max-w-md mx-auto mb-6 text-sm md:text-base relative z-10 leading-relaxed">
                                Have questions or concerns about these Terms? We are here to help. Reach out to our legal support team:
                            </p>
                            
                            <div className="relative z-10 inline-flex flex-col items-center gap-3">
                                <button
                                    onClick={copyToClipboard}
                                    className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-base md:text-lg transition-all duration-200 hover:shadow-lg active:scale-95 group/btn"
                                >
                                    <span>hello@realestatequestionbank.com</span>
                                    {copied ? (
                                        <Check className="w-5 h-5 text-emerald-400 animate-scale-in" />
                                    ) : (
                                        <Copy className="w-4 h-4 text-slate-400 group-hover/btn:text-white transition-colors" />
                                    )}
                                </button>
                                <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                                    {copied ? 'Copied to clipboard!' : 'Click to copy email address'}
                                </span>
                            </div>
                        </section>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default function TermsPage() {
    return (
        <AuthProvider>
            <TermsContent />
        </AuthProvider>
    )
}
