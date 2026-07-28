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
                        <div className="max-w-5xl mx-auto">
                            <div className="grid md:grid-cols-3 gap-6">
                                {/* Email Us Card */}
                                <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
                                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                                        <Mail className="w-6 h-6 text-[#007aff]" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">Email Us</h3>
                                    <p className="text-gray-600 text-sm mb-3">For questions and support</p>
                                    <a
                                        href="mailto:hello@realestatequestionbank.com"
                                        className="text-[#007aff] font-semibold hover:underline text-sm break-all"
                                    >
                                        hello@realestatequestionbank.com
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

                                {/* Follow Us Card */}
                                <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
                                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                                        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">Follow Us</h3>
                                    <p className="text-gray-600 text-sm mb-3">Stay updated on social media</p>
                                    <div className="flex gap-3">
                                        <a
                                            href="https://www.instagram.com/real-estatequestionbank/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200 transition-all duration-300"
                                            aria-label="Instagram"
                                        >
                                            <svg className="w-4 h-4 text-[#E4405F]" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                            </svg>
                                        </a>
                                        <a
                                            href="https://www.facebook.com/people/Real Estate-Question-Bank/61574891375744/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200 transition-all duration-300"
                                            aria-label="Facebook"
                                        >
                                            <svg className="w-4 h-4 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                            </svg>
                                        </a>
                                        <a
                                            href="https://x.com/real-estatequestionbank"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200 transition-all duration-300"
                                            aria-label="Twitter/X"
                                        >
                                            <svg className="w-4 h-4 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                            </svg>
                                        </a>
                                    </div>
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
