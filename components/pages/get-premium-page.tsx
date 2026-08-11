'use client'

import { useState, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { useAuth } from '@/contexts/auth-context'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { PRICING, getEffectivePricing } from '@/lib/constants'
import { Mail, Lock, User, Loader2, Shield, Check, ArrowLeft, Crown } from 'lucide-react'
import { GoogleIcon } from '@/components/auth/google-icon'

function GetPremiumPageInner() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const planParam = searchParams.get('plan')
  const isCdlParam = searchParams.get('cdl') === 'true'
  const duration = planParam === '7' ? 7 : planParam === '90' ? 90 : planParam === '36500' ? 36500 : planParam === '30' ? 30 : 30

  // Use logic to get the correct pricing
  const effectivePricing = getEffectivePricing()
  const plan = isCdlParam ? {
    id: 'cdl_premium',
    name: 'CDL Premium Plan',
    duration: 90,
    originalPrice: 149,
    discountedPrice: 99,
    stripePriceId: process.env.NEXT_PUBLIC_STRIPE_CDL_PRICE_ID || 'price_1TiPirAB2lLx6zTOAf2ljhdp'
  } : (duration === 7 ? effectivePricing.PLANS.SEVEN_DAY : (duration === 36500 || duration === 90) ? effectivePricing.PLANS.LIFETIME : effectivePricing.PLANS.THIRTY_DAY)

  const { user, userData, isPremium, isCdlPremium, signInWithEmail, signUpWithEmail, signInWithGoogle } = useAuth()

  const [mode, setMode] = useState<'signup' | 'login'>('signup')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [isRedirecting, setIsRedirecting] = useState(false)

  const passwordRules = {
    length: password.length >= 8,
    hasLetter: /[a-zA-Z]/.test(password),
    hasNumber: /[0-9]/.test(password),
  }

  const isPasswordValid = passwordRules.length && passwordRules.hasLetter && passwordRules.hasNumber

  const createCheckoutSession = async (userId: string) => {
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: userId,
          state: 'general',
          duration: plan.duration,
          product: isCdlParam ? 'cdl_premium' : 'real-estate_premium',
        }),
      })

      const data = await response.json()

      if (data.error) {
        console.error('Checkout error:', data.error)
        setError('Failed to create checkout session: ' + (data.details || data.error || 'Please try again.'))
        setIsRedirecting(false)
        return
      }

      if (data.url) {
        window.location.href = data.url
      }
    } catch (error) {
      console.error('Error creating checkout session:', error)
      setError('An error occurred. Please try again.')
      setIsRedirecting(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      if (mode === 'signup') {
        if (!firstName.trim()) {
          setError('First name is required')
          setLoading(false)
          return
        }
        if (!lastName.trim()) {
          setError('Last name is required')
          setLoading(false)
          return
        }
        if (!isPasswordValid) {
          setError('Password must be at least 8 characters and include at least one letter and one number')
          setLoading(false)
          return
        }
        if (password !== confirmPassword) {
          setError('Passwords do not match')
          setLoading(false)
          return
        }

        const result = await signUpWithEmail(email, password, {
          displayName: `${firstName.trim()} ${lastName.trim()}`,
          firstName: firstName.trim(),
          lastName: lastName.trim(),
        })

        if (result.error) {
          setError(result.error)
          setLoading(false)
        } else if (result.user) {
          setIsRedirecting(true)
          await createCheckoutSession(result.user.uid)
        }
      } else {
        const result = await signInWithEmail(email, password)

        if (result.error) {
          setError(result.error)
          setLoading(false)
        } else if (result.user) {
          // Check if user already has premium
          if (isCdlParam) {
            if (result.userData?.isCdlPremium && !result.userData?.cdlPremiumExpiresAt) {
              router.push('/dashboard')
              return
            }
            if (result.userData?.isCdlPremium) {
              const expiresAt = new Date(result.userData.cdlPremiumExpiresAt)
              if (expiresAt > new Date()) {
                router.push('/dashboard')
                return
              }
            }
          } else {
            if (result.userData?.isPremium && !result.userData?.premiumExpiresAt) {
              // Lifetime premium, redirect to dashboard
              router.push('/dashboard')
              return
            }
            if (result.userData?.isPremium) {
              const expiresAt = new Date(result.userData.premiumExpiresAt)
              if (expiresAt > new Date()) {
                // Active premium, redirect to dashboard
                router.push('/dashboard')
                return
              }
            }
          }
          // Not premium or expired, proceed to checkout
          setIsRedirecting(true)
          await createCheckoutSession(result.user.uid)
        }
      }
    } catch (error: any) {
      setError(error.message || 'An error occurred')
      setLoading(false)
    }
  }

  const handleGoogleSignIn = async () => {
    setError('')
    setLoading(true)

    try {
      const result = await signInWithGoogle()

      if (result.error) {
        setError(result.error)
        setLoading(false)
      } else if (result.user) {
        // Check if user already has active premium
        if (result.userData) {
          const hasPremium = isCdlParam ? result.userData.isCdlPremium : result.userData.isPremium
          if (hasPremium) {
            const expiresAt = isCdlParam
              ? (result.userData.cdlPremiumExpiresAt ? new Date(result.userData.cdlPremiumExpiresAt) : null)
              : (result.userData.premiumExpiresAt ? new Date(result.userData.premiumExpiresAt) : null)
            if (!expiresAt || expiresAt > new Date()) {
              // Active premium, redirect to dashboard
              router.push('/dashboard')
              return
            }
          }
        }
        // Not premium or expired, proceed to checkout
        setIsRedirecting(true)
        await createCheckoutSession(result.user.uid)
      }
    } catch (error: any) {
      setError(error.message || 'An error occurred')
      setLoading(false)
    }
  }

  const resetForm = () => {
    setFirstName('')
    setLastName('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
    setError('')
  }

  const switchMode = (newMode: 'signup' | 'login') => {
    resetForm()
    setMode(newMode)
  }

  // If user is already logged in and has active premium, show message
  const hasActivePremium = isCdlParam ? isCdlPremium : isPremium
  if (user && hasActivePremium) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Header */}
        <header className="bg-[#007aff]">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="Real Estate Question Bank"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-white font-semibold hidden sm:inline text-lg logo-font">Real Estate Question Bank</span>
            </Link>
            <button onClick={() => router.back()} className="text-white/80 hover:text-white text-sm flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" />
              Return to website
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Crown className="w-8 h-8 text-emerald-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">You're Already Premium!</h1>
            <p className="text-gray-600 mb-6">
              You already have an active premium subscription. Enjoy unlimited access to all practice questions and mock exams.
            </p>
            <Button
              onClick={() => router.push('/dashboard')}
              className="w-full bg-[#007aff] hover:bg-[#0056cc]"
            >
              Go to Dashboard
            </Button>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Panel - Blue (Mobile: Header, Desktop: Left Column) */}
      <div className="bg-[#007aff] lg:w-[40%] lg:min-h-screen lg:sticky lg:top-0">
        {/* Mobile Header */}
        <div className="lg:hidden relative min-h-[200px]">
          {/* Logo - positioned top left */}
          <div className="absolute top-4 left-4">
            <button onClick={() => router.back()} className="flex items-center gap-2">
              <ArrowLeft className="w-5 h-5 text-white" />
              <Image
                src="/images/logo.png"
                alt="Real Estate Question Bank"
                width={32}
                height={32}
                className="rounded-lg"
              />
            </button>
          </div>
          {/* Mobile Price Display - centered in full area */}
          <div className="flex flex-col items-center justify-center min-h-[200px] px-4 text-center">
            <p className="text-white/80 text-sm font-medium mb-1">{isCdlParam ? '90-Day CDL Premium Access' : (duration === 36500 ? 'Lifetime Access' : `${duration}-Day Full Access`)}</p>
            <div className="flex items-baseline justify-center gap-2 my-2">
              <span className="text-4xl font-bold text-white">${plan.discountedPrice}</span>
            </div>
            <p className="text-white/70 text-sm mt-1">One-time payment. No auto-renewal.</p>
          </div>
        </div>

        {/* Desktop Left Panel Content */}
        <div className="hidden lg:flex lg:flex-col lg:h-full lg:p-8 xl:p-12">
          {/* Logo and Return Link */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="Real Estate Question Bank"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="text-white font-semibold text-xl logo-font">Real Estate Question Bank</span>
            </Link>
            <button onClick={() => router.back()} className="text-white/80 hover:text-white text-sm flex items-center gap-1 mt-2">
              <ArrowLeft className="w-4 h-4" />
              Return to website
            </button>
          </div>

          {/* Price Display - Centered */}
          <div className="flex-1 flex flex-col justify-center">
            <p className="text-white/80 text-sm font-medium mb-2">{isCdlParam ? '90-Day CDL Premium Access' : (duration === 36500 ? 'Lifetime Access' : `${duration}-Day Full Access`)}</p>
            <div className="flex items-baseline gap-3 my-3">
              <span className="text-4xl xl:text-5xl font-bold text-white">${plan.discountedPrice}</span>
            </div>
            <p className="text-white/70 text-sm">One-time payment. No auto-renewal.</p>
          </div>
        </div>
      </div>

      {/* Right Panel - White (Form) */}
      <div className="flex-1 bg-white lg:w-[60%]">
        <div className="min-h-full flex items-center justify-center lg:justify-start px-4 py-6 lg:py-8 lg:pl-20 lg:pr-8 xl:pl-24 xl:pr-12">
          <div className="w-full max-w-none sm:max-w-md">
            {/* Google Sign In - First */}
            <Button
              variant="outline"
              className="w-full py-5 mb-4 border-gray-300"
              onClick={handleGoogleSignIn}
              disabled={loading}
            >
              {loading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <GoogleIcon className="mr-2 h-4 w-4" />
              )}
              Continue with Google
            </Button>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">or enter your details</span>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm mb-4">
                {error}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === 'signup' && (
                <div className="grid grid-cols-2 gap-4 overflow-hidden p-[3px] -m-[3px]">
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    disabled={loading}
                    className="border-gray-300 placeholder:text-gray-700 rounded-md py-5 px-5 text-base focus:border-gray-300 focus:ring-2 focus:ring-gray-200 focus:outline-none"
                  />
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="Last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    disabled={loading}
                    className="border-gray-300 placeholder:text-gray-700 rounded-md py-5 px-5 text-base focus:border-gray-300 focus:ring-2 focus:ring-gray-200 focus:outline-none"
                  />
                </div>
              )}

              <div className="overflow-hidden p-[3px] -m-[3px]">
                <Input
                  id="email"
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading}
                  className="border-gray-300 placeholder:text-gray-700 rounded-md py-5 px-5 text-base focus:border-gray-300 focus:ring-2 focus:ring-gray-200 focus:outline-none"
                />
              </div>

              <div className="overflow-hidden p-[3px] -m-[3px]">
                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={loading}
                  minLength={mode === 'signup' ? 8 : 6}
                  className="border-gray-300 placeholder:text-gray-700 rounded-md py-5 px-5 text-base focus:border-gray-300 focus:ring-2 focus:ring-gray-200 focus:outline-none"
                />
                {mode === 'signup' && (
                  <div className="pt-2 px-1 space-y-1">
                    <div className="flex items-center gap-2 text-[11px]">
                      {passwordRules.length ? (
                        <Check className="w-3 h-3 text-emerald-500" />
                      ) : (
                        <div className="w-3 h-3 rounded-full bg-gray-200" />
                      )}
                      <span className={passwordRules.length ? 'text-emerald-700 font-medium' : 'text-gray-500'}>
                        At least 8 characters
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px]">
                      {passwordRules.hasLetter && passwordRules.hasNumber ? (
                        <Check className="w-3 h-3 text-emerald-500" />
                      ) : (
                        <div className="w-3 h-3 rounded-full bg-gray-200" />
                      )}
                      <span className={passwordRules.hasLetter && passwordRules.hasNumber ? 'text-emerald-700 font-medium' : 'text-gray-500'}>
                        At least 1 letter and 1 number
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {mode === 'signup' && (
                <div className="overflow-hidden p-[3px] -m-[3px]">
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    disabled={loading}
                    minLength={8}
                    className="border-gray-300 placeholder:text-gray-700 rounded-md py-5 px-5 text-base focus:border-gray-300 focus:ring-2 focus:ring-gray-200 focus:outline-none"
                  />
                </div>
              )}

              {/* Terms */}
              <p className="text-xs text-gray-500">
                By continuing, you agree to our{' '}
                <Link href="/terms" className="text-[#007aff] hover:underline">
                  Terms of Service
                </Link>
              </p>

              <Button
                type="submit"
                className="w-full bg-[#007aff] hover:bg-[#0056cc] py-6 text-base font-semibold"
                disabled={loading}
              >
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Continue to Payment - ${plan.discountedPrice}
              </Button>
            </form>

            {/* Footer */}
            <div className="text-center mt-6">
              <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
                <Shield className="w-4 h-4 text-emerald-500" />
                <span>Secure checkout powered by Stripe</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Redirecting Overlay */}
      {isRedirecting && (
        <div className="fixed inset-0 bg-white/95 backdrop-blur-sm z-50 flex flex-col items-center justify-center p-6 text-center">
          <Loader2 className="w-12 h-12 text-[#007aff] animate-spin mb-6" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Redirecting to secure Stripe checkout...</h2>
          <p className="text-gray-600 mb-8">Setting up your secure payment environment</p>
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg border border-gray-100">
            <Shield className="w-4 h-4 text-emerald-500" />
            <span className="text-xs font-medium text-gray-700 uppercase tracking-wider">Secure checkout powered by Stripe</span>
          </div>
        </div>
      )}
    </div>
  )
}

export function GetPremiumPageContent() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-[#007aff] animate-spin" />
      </div>
    }>
      <GetPremiumPageInner />
    </Suspense>
  )
}
