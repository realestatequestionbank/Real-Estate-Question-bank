'use client'

import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { MapPin, Home, ArrowLeft, AlertCircle } from 'lucide-react'
import { useAuth } from '@/contexts/auth-context'
import { useRouter } from 'next/navigation'

export default function NotFound() {
    const { user, userData, isPremium, isPremiumExpired, signOut, loading } = useAuth()
    const router = useRouter()

    const handleLogin = () => {
        router.push('/login') // Or trigger auth modal if possible, but redirect is safer for 404
    }

    const handleSignup = () => {
        router.push('/get-premium')
    }

    const handleLogout = async () => {
        await signOut()
        router.push('/')
    }

    const handleDashboard = () => {
        router.push('/dashboard')
    }

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Navigation
                user={user}
                userData={userData}
                isPremium={isPremium}
                isPremiumExpired={isPremiumExpired}
                onLogin={handleLogin}
                onSignup={handleSignup}
                onLogout={handleLogout}
                onDashboard={handleDashboard}
                isLoading={loading}
            />

            <main className="flex-1 flex flex-col items-center justify-center p-4 text-center">
                <div className="max-w-md w-full animate-fade-in-up">
                    <div className="flex justify-center mb-6">
                        <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center shadow-inner relative overflow-hidden">
                            <div className="absolute inset-0 bg-blue-500/10 rounded-full animate-ping opacity-20"></div>
                            <MapPin className="w-12 h-12 text-blue-600 relative z-10" />
                        </div>
                    </div>

                    <h1 className="text-6xl font-black text-gray-900 mb-2 tracking-tighter">404</h1>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Wrong Turn?</h2>

                    <p className="text-gray-600 mb-8 text-lg">
                        It looks like you've ventured off the map. We can't seem to find the page you're looking for.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link href="/">
                            <Button size="lg" className="w-full sm:w-auto gap-2 bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/20">
                                <Home className="w-4 h-4" />
                                Return Home
                            </Button>
                        </Link>
                        {user && (
                            <Button
                                variant="outline"
                                size="lg"
                                onClick={handleDashboard}
                                className="w-full sm:w-auto gap-2"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Go to Dashboard
                            </Button>
                        )}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
