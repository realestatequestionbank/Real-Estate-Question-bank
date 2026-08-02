'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { AuthProvider, useAuth } from '@/contexts/auth-context'
import { Send, Mail, MessageSquare, CheckCircle, Loader2 } from 'lucide-react'
import Link from 'next/link'

const SUBJECT_OPTIONS = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'technical', label: 'Technical Support' },
    { value: 'billing', label: 'Billing Question' },
    { value: 'premium', label: 'Premium Access Help' },
    { value: 'feedback', label: 'Feedback / Suggestions' },
    { value: 'partnership', label: 'Partnership Opportunity' },
]

const REFERRAL_OPTIONS = [
    { value: '', label: 'Select an option' },
    { value: 'google', label: 'Google Search' },
    { value: 'friend', label: 'Friend or Family' },
    { value: 'social', label: 'Social Media' },
    { value: 'blog', label: 'Blog / Article' },
    { value: 'youtube', label: 'YouTube' },
    { value: 'other', label: 'Other' },
]

function ContactUsContent() {
    const router = useRouter()
    const { user, userData, isPremium, premiumStatus, signOut } = useAuth()

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: 'general',
        referral: '',
        message: '',
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [error, setError] = useState('')

    const handleLogin = () => router.push('/#login')
    const handleSignup = () => router.push('/#signup')
    const handleLogout = async () => await signOut()
    const handleDashboard = () => router.push('/dashboard')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setError('')

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error || 'Failed to send message')
            }

            setIsSuccess(true)
            setFormData({ name: '', email: '', subject: 'general', referral: '', message: '' })
        } catch (err: any) {
            setError(err.message || 'Something went wrong. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

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

            <main>
                {/* Hero Section */}
                <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50"></div>
                    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-20 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl"></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
                            <div className="inline-block bg-[#007aff]/10 backdrop-blur-sm border border-[#007aff]/20 rounded-full px-6 py-2 mb-6">
                                <span className="text-sm font-medium text-[#007aff]">
                                    We're Here to Help
                                </span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6">
                                Get in Touch
                            </h1>
                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                                Have a question about your Real Estate Exam preparation? Need help with your account? We'd love to hear from you.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Contact Form Section */}
                <section className="py-12 md:py-20 lg:py-24 bg-white relative">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto">
                            {/* Centered Contact Form */}
                            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 relative overflow-hidden mb-12">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full -mr-32 -mt-32 blur-2xl"></div>

                                {isSuccess ? (
                                    <div className="relative z-10 text-center py-12">
                                        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <CheckCircle className="w-10 h-10 text-emerald-600" />
                                        </div>
                                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                            Message Sent!
                                        </h2>
                                        <p className="text-gray-600 mb-8 max-w-md mx-auto">
                                            Thank you for reaching out. We'll get back to you within 24 hours.
                                        </p>
                                        <button
                                            onClick={() => setIsSuccess(false)}
                                            className="bg-[#007aff] hover:bg-[#0056cc] text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300"
                                        >
                                            Send Another Message
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                                        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                                            Send us a message
                                        </h2>

                                        {error && (
                                            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
                                                {error}
                                            </div>
                                        )}

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                                    Full Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#007aff] focus:ring-2 focus:ring-[#007aff]/20 outline-none transition-all duration-200 text-gray-900"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                                    Email Address *
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#007aff] focus:ring-2 focus:ring-[#007aff]/20 outline-none transition-all duration-200 text-gray-900"
                                                    placeholder="john@example.com"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                                                    Subject *
                                                </label>
                                                <select
                                                    id="subject"
                                                    name="subject"
                                                    required
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#007aff] focus:ring-2 focus:ring-[#007aff]/20 outline-none transition-all duration-200 text-gray-900 bg-white"
                                                >
                                                    {SUBJECT_OPTIONS.map(opt => (
                                                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div>
                                                <label htmlFor="referral" className="block text-sm font-semibold text-gray-700 mb-2">
                                                    How did you hear about us?
                                                </label>
                                                <select
                                                    id="referral"
                                                    name="referral"
                                                    value={formData.referral}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#007aff] focus:ring-2 focus:ring-[#007aff]/20 outline-none transition-all duration-200 text-gray-900 bg-white"
                                                >
                                                    {REFERRAL_OPTIONS.map(opt => (
                                                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                                Message *
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                required
                                                rows={5}
                                                value={formData.message}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#007aff] focus:ring-2 focus:ring-[#007aff]/20 outline-none transition-all duration-200 text-gray-900 resize-none"
                                                placeholder="How can we help you?"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-[#007aff] hover:bg-[#0056cc] disabled:bg-gray-400 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 animate-spin" />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="w-5 h-5" />
                                                    Send Message
                                                </>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>

                        {/* Info Cards Row */}
                        <div className="max-w-3xl mx-auto">
                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Email Us Card */}
                                <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
                                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                                        <Mail className="w-6 h-6 text-[#007aff]" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">Email Us</h3>
                                    <p className="text-gray-600 text-sm mb-3">For questions and support</p>
                                    <a
                                        href="mailto:contact@realestatequestionbank.com"
                                        className="text-[#007aff] font-semibold hover:underline text-sm break-all"
                                    >
                                        contact@realestatequestionbank.com
                                    </a>
                                </div>

                                {/* FAQ Card */}
                                <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
                                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                                        <MessageSquare className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">Quick Answers</h3>
                                    <p className="text-gray-600 text-sm mb-3">
                                        Check our FAQ for instant answers
                                    </p>
                                    <Link
                                        href="/#faq"
                                        className="text-[#007aff] font-semibold hover:underline inline-flex items-center gap-1 text-sm"
                                    >
                                        View FAQ →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default function ContactUsPage() {
    return (
        <AuthProvider>
            <ContactUsContent />
        </AuthProvider>
    )
}
