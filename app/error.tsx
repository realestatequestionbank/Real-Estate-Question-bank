'use client'

import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Home, RefreshCw, AlertTriangle } from 'lucide-react'
import { useAuth } from '@/contexts/auth-context'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    const { user, userData, isPremium, isPremiumExpired, signOut, loading } = useAuth()
    const router = useRouter()

    useEffect(() => {
        console.error('Application error:', error)
    }, [error])

    const handleLogin = () => {
        router.push('/login')
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
                        <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center shadow-inner relative overflow-hidden">
                            <div className="absolute inset-0 bg-red-500/10 rounded-full animate-ping opacity-20"></div>
                            <AlertTriangle className="w-12 h-12 text-red-600 relative z-10" />
                        </div>
                    </div>

                    <h1 className="text-6xl font-black text-gray-900 mb-2 tracking-tighter">Oops!</h1>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Something Went Wrong</h2>

                    <p className="text-gray-600 mb-8 text-lg">
                        We hit an unexpected bump in the road. Don't worry, it's not your fault.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button
                            size="lg"
                            onClick={reset}
                            className="w-full sm:w-auto gap-2 bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/20"
                        >
                            <RefreshCw className="w-4 h-4" />
                            Try Again
                        </Button>
                        <Link href="/">
                            <Button
                                variant="outline"
                                size="lg"
                                className="w-full sm:w-auto gap-2"
                            >
                                <Home className="w-4 h-4" />
                                Return Home
                            </Button>
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
