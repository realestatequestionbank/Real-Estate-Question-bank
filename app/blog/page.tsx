'use client'

import { AuthProvider } from '@/contexts/auth-context'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { useAuth } from '@/contexts/auth-context'
import { useRouter } from 'next/navigation'
import { BlogListing } from '@/components/blog/blog-listing'

function BlogCenterContent() {
    const { user, userData, isPremium, premiumStatus, signOut } = useAuth()
    const router = useRouter()

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

            <main className="container mx-auto px-4 py-16 lg:py-24">
                {/* Hero Section */}
                <div className="text-center mb-20 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 leading-[0.9]">
                        The <span className="text-[#007aff]">Blog</span> Center
                    </h1>
                    <p className="text-xl text-gray-600 font-medium">
                        Expert study guides, state-specific tips, and everything you need to know to pass your Real Estate Exam on the first try.
                    </p>
                </div>

                <BlogListing />
            </main>

            <Footer />
        </div>
    )
}

export default function BlogCenterPage() {
    return (
        <AuthProvider>
            <BlogCenterContent />
        </AuthProvider>
    )
}
