'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/auth-context'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle, Crown, ArrowRight, Loader2 } from 'lucide-react'
import { updateLastActiveState } from '@/lib/services/progress-service'

function SuccessPageInner() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const searchParams = useSearchParams()
  const router = useRouter()
  const { user, userData, isPremium, signOut, refreshUserData } = useAuth()

  const sessionId = searchParams.get('session_id')
  const state = searchParams.get('state')

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      ;(window as any).gtag('event', 'conversion', {
        send_to: 'AW-17004995156/GTOtCL7Mq_4bENTEzqw_',
        transaction_id: sessionId || '',
      })
    }
  }, [])

  useEffect(() => {
    const verifyPayment = async () => {
      if (!sessionId) {
        setError('No session ID found')
        setLoading(false)
        return
      }

      if (!user) {
        setLoading(false)
        return
      }

      try {
        // Wait for webhook to process and retry multiple times
        let attempts = 0
        let maxAttempts = 10 // Try for up to 30 seconds

        while (attempts < maxAttempts) {
          await new Promise(resolve => setTimeout(resolve, 3000)) // Wait 3 seconds
          await refreshUserData()

          // Check if user is now premium
          if (isPremium) {
            console.log('Premium status confirmed after payment')
            // Update last active state once payment is successful
            if (state) {
              updateLastActiveState(user.uid, state)
            }
            break
          }

          attempts++
          console.log(`Waiting for premium status update, attempt ${attempts}/${maxAttempts}`)
        }

        if (!isPremium) {
          console.warn('Premium status not updated after payment - this may be a webhook delay')
        }

        setLoading(false)
      } catch (error) {
        console.error('Error verifying payment:', error)
        setError('Failed to verify payment')
        setLoading(false)
      }
    }

    verifyPayment()
  }, [sessionId, user, refreshUserData, isPremium])

  const handleLogin = () => {
    if (isPremium) {
      router.push(state ? `/dashboard?state=${state}` : '/dashboard')
    } else {
      router.push('/')
    }
  }

  const handleSignup = () => {
    router.push('/')
  }

  const handleLogout = async () => {
    await signOut()
    router.push('/')
  }

  const handleDashboard = () => {
    router.push(state ? `/dashboard?state=${state}` : '/dashboard')
  }

  const handleContinueToPremium = () => {
    if (state && isPremium) {
      router.push(`/state/${state}/premium`)
    } else if (isPremium) {
      router.push(state ? `/dashboard?state=${state}` : '/dashboard')
    } else {
      router.push('/')
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation
          user={user}
          isPremium={isPremium}
          onLogin={handleLogin}
          onSignup={handleSignup}
          onLogout={handleLogout}
          onDashboard={handleDashboard}
        />

        <main className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto text-center">
            <Loader2 className="w-12 h-12 animate-spin mx-auto mb-4 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Processing your payment...
            </h1>
            <p className="text-gray-600">
              Please wait while we verify your purchase.
            </p>
          </div>
        </main>

        <Footer />
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation
          user={user}
          isPremium={isPremium}
          onLogin={handleLogin}
          onSignup={handleSignup}
          onLogout={handleLogout}
          onDashboard={handleDashboard}
        />

        <main className="container mx-auto px-4 py-16">
          <Card className="max-w-md mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-red-600">Payment Error</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-4">{error}</p>
              <Button onClick={() => router.push('/')}>
                Return Home
              </Button>
            </CardContent>
          </Card>
        </main>

        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation
        user={user}
        isPremium={isPremium}
        onLogin={handleLogin}
        onSignup={handleSignup}
        onLogout={handleLogout}
        onDashboard={handleDashboard}
      />

      <main className="container mx-auto px-4 py-16">
        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <CardTitle className="text-3xl text-green-600">
              Payment Successful!
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Welcome to Premium Real Estate Question Bank!
              </h2>
              <p className="text-gray-600">
                Your payment has been processed and you now have <strong>{userData?.planDuration || 90}-day access</strong> to all premium features across all states.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Crown className="w-6 h-6 text-blue-600" />
                <h3 className="text-lg font-semibold text-blue-900">
                  What's included:
                </h3>
              </div>
              <ul className="text-left space-y-2 text-blue-800">
                <li>• Complete practice question bank</li>
                <li>• Detailed explanations for every answer</li>
                <li>• Mock exam simulations</li>
                <li>• Progress tracking and analytics</li>
                <li>• Weak areas identification</li>
                <li>• {userData?.planDuration || 90}-day premium access</li>
              </ul>
            </div>

            <div className="space-y-3">
              <Button
                onClick={handleContinueToPremium}
                variant="premium"
                size="lg"
                className="w-full"
              >
                <Crown className="w-5 h-5 mr-2" />
                {state ? `Start ${state.charAt(0).toUpperCase() + state.slice(1)} Premium Practice` : 'Go to Premium Dashboard'}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

            </div>

            <div className="text-sm text-gray-500">
              <p>Session ID: {sessionId}</p>
              <p>
                Need help? <a href="mailto:contact@realestatequestionbank.com?subject=Real Estate Question Bank: Feedback" className="text-blue-600 hover:underline">Contact support</a>
              </p>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  )
}

export function SuccessPageContent() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader2 className="w-12 h-12 animate-spin text-blue-600" />
      </div>
    }>
      <SuccessPageInner />
    </Suspense>
  )
}