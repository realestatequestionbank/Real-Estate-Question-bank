'use client'

import { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { useAuth } from '@/contexts/auth-context'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Mail, Lock, Loader2, Shield, Check, ArrowLeft, Crown } from 'lucide-react'
import { GoogleIcon } from '@/components/auth/google-icon'

import { isPremiumExpired as checkIfPremiumExpired, isCdlPremiumExpired as checkIfCdlPremiumExpired } from '@/lib/firebase/auth'

function LoginPageInner() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const rawRedirectPath = searchParams.get('redirect') || '/dashboard'

  const { user, userData, signInWithEmail, signInWithGoogle, resetPassword, loading: authLoading } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [resetMode, setResetMode] = useState(false)
  const [resetEmailSent, setResetEmailSent] = useState(false)

  const getRedirectPath = (uData: any) => {
    if (rawRedirectPath === '/dashboard') {
      const hasActivePremium = uData
        ? (uData.isPremium && !checkIfPremiumExpired(uData)) ||
          (uData.isCdlPremium && !checkIfCdlPremiumExpired(uData))
        : false;
      return hasActivePremium ? '/dashboard' : '/profile';
    }
    return rawRedirectPath;
  }

  // Redirect automatically if user is already logged in
  useEffect(() => {
    if (!authLoading && user && userData) {
      router.push(getRedirectPath(userData))
    }
  }, [user, userData, authLoading, router, rawRedirectPath])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const result = await signInWithEmail(email, password)
      if (result.error) {
        setError(result.error)
        setLoading(false)
      } else if (result.user) {
        router.push(getRedirectPath(result.userData))
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred during sign in.')
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
        router.push(getRedirectPath(result.userData))
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred during Google sign in.')
      setLoading(false)
    }
  }

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const result = await resetPassword(email)
      if (result.error) {
        setError(result.error)
      } else {
        setResetEmailSent(true)
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred while sending reset email.')
    }
    setLoading(false)
  }

  // If loading user state initially, show a loading spinner
  if (authLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-[#007aff] animate-spin" />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white">
      {/* Left Panel - Blue (Mobile: Header, Desktop: Left Column) */}
      <div className="bg-[#007aff] lg:w-[40%] lg:min-h-screen lg:sticky lg:top-0 flex flex-col">
        {/* Mobile Header */}
        <div className="lg:hidden relative p-4 flex flex-col items-center border-b border-white/10">
          <div className="w-full flex items-center justify-between">
            <button onClick={() => router.back()} className="flex items-center gap-1 text-white hover:text-white/80">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="Real Estate Question Bank"
                width={32}
                height={32}
                className="rounded-lg bg-white/10"
              />
              <span className="text-white font-semibold text-lg logo-font">Real Estate Question Bank</span>
            </Link>
            <div className="w-5 h-5" /> {/* Empty spacing for header alignment */}
          </div>
          <div className="mt-6 text-center text-white pb-2">
            <Crown className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
            <h1 className="text-2xl font-bold tracking-tight">Welcome Back</h1>
            <p className="text-white/85 text-xs mt-1">Premium Member Login</p>
          </div>
        </div>

        {/* Desktop Left Panel Content */}
        <div className="hidden lg:flex lg:flex-col lg:justify-between lg:h-screen lg:p-8 xl:p-12">
          {/* Logo and Return Link */}
          <div>
            <Link href="/" className="flex items-center gap-2 group">
              <Image
                src="/images/logo.png"
                alt="Real Estate Question Bank"
                width={40}
                height={40}
                className="rounded-lg bg-white/10"
              />
              <span className="text-white font-semibold text-xl logo-font">Real Estate Question Bank</span>
            </Link>
            <button onClick={() => router.back()} className="text-white/80 hover:text-white text-sm flex items-center gap-1 mt-3 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Return to website
            </button>
          </div>

          {/* Welcome back message & premium features */}
          <div className="flex-1 flex flex-col justify-center my-8">
            <div className="inline-flex items-center gap-2 bg-white/10 text-yellow-300 px-3.5 py-1.5 rounded-full border border-white/20 w-fit mb-6">
              <Crown className="w-4 h-4 text-yellow-300 fill-yellow-300" />
              <span className="text-xs font-bold uppercase tracking-wider">Premium Access</span>
            </div>
            <h2 className="text-4xl font-extrabold text-white leading-tight mb-4">
              Welcome Back
            </h2>
            <p className="text-white/90 text-base mb-8">
              Sign in to resume your state-specific Real Estate practice tests, exam simulator, and analytics.
            </p>
          </div>

          {/* Left Panel Footer */}
          <div className="text-white/50 text-xs">
            &copy; 2026 Real Estate Question Bank. All rights reserved.
          </div>
        </div>
      </div>

      {/* Right Panel - White (Auth Form) */}
      <div className="flex-1 flex flex-col justify-center bg-white lg:w-[60%] py-12 px-6 sm:px-12 lg:pl-16 lg:pr-24 xl:pl-20 xl:pr-32">
        <div className="w-full max-w-md mx-auto lg:mx-0">
          {/* Header Title */}
          {resetMode && (
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Reset Password
              </h3>
              <p className="text-gray-500 text-sm">
                Enter your email address to receive a password reset link.
              </p>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm mb-6 animate-in fade-in-50 duration-300">
              {error}
            </div>
          )}

          {/* Success Message for Reset */}
          {resetEmailSent && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm mb-6 animate-in fade-in-50 duration-300">
              Password reset email sent! Check your inbox for instructions to reset your password.
            </div>
          )}

          {resetMode ? (
            // Password Reset Form
            <form onSubmit={handlePasswordReset} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="reset-email" className="text-sm font-semibold text-gray-700">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                  <Input
                    id="reset-email"
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-12 border-gray-300 placeholder:text-gray-400 rounded-md py-6 text-base focus:border-blue-400 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all"
                    required
                    disabled={loading || resetEmailSent}
                  />
                </div>
              </div>

              {!resetEmailSent && (
                <Button
                  type="submit"
                  className="w-full bg-[#007aff] hover:bg-[#0056cc] py-6 text-base font-semibold transition-colors mt-2"
                  disabled={loading}
                >
                  {loading && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
                  Send Reset Email
                </Button>
              )}

              <div className="text-center mt-4">
                <button
                  type="button"
                  onClick={() => {
                    setResetMode(false)
                    setResetEmailSent(false)
                    setError('')
                  }}
                  className="text-[#007aff] hover:underline text-sm font-semibold transition-colors"
                >
                  Back to Sign In
                </button>
              </div>
            </form>
          ) : (
            // Normal Login Form
            <div className="space-y-6">
              {/* Google Sign In Button */}
              <Button
                variant="outline"
                className="w-full py-6 border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold text-base flex items-center justify-center gap-3 transition-colors"
                onClick={handleGoogleSignIn}
                disabled={loading}
              >
                {loading ? (
                  <Loader2 className="w-5 h-5 animate-spin text-[#007aff]" />
                ) : (
                  <GoogleIcon className="w-5 h-5" />
                )}
                Continue with Google
              </Button>

              {/* Divider */}
              <div className="relative flex py-2 items-center">
                <div className="flex-grow border-t border-gray-200"></div>
                <span className="flex-shrink mx-4 text-gray-400 text-xs font-semibold uppercase tracking-wider">or sign in with email</span>
                <div className="flex-grow border-t border-gray-200"></div>
              </div>

              {/* Email Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-12 border-gray-300 placeholder:text-gray-400 rounded-md py-6 text-base focus:border-blue-400 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all"
                      required
                      disabled={loading}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <Label htmlFor="password" className="text-sm font-semibold text-gray-700">Password</Label>
                    <button
                      type="button"
                      onClick={() => setResetMode(true)}
                      className="text-[#007aff] hover:underline text-xs font-semibold"
                    >
                      Forgot password?
                    </button>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-12 border-gray-300 placeholder:text-gray-400 rounded-md py-6 text-base focus:border-blue-400 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all"
                      required
                      disabled={loading}
                      minLength={6}
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#007aff] hover:bg-[#0056cc] py-6 text-base font-semibold mt-2 transition-colors"
                  disabled={loading}
                >
                  {loading && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
                  Sign In to Premium
                </Button>
              </form>

              {/* Link to Signup */}
              <div className="text-center text-sm text-gray-600 pt-2">
                Don't have premium?{' '}
                <Link
                  href="/real-estate-premium"
                  className="relative text-[#007aff] hover:text-[#0056cc] font-bold transition-colors inline-block pb-0.5 group"
                >
                  Get Premium
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              </div>
            </div>
          )}

          {/* Secure lock footer */}
          <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-center gap-2 text-gray-400 text-xs font-medium">
            <Shield className="w-4 h-4 text-emerald-500 fill-emerald-500/10" />
            <span>Secure encryption powered by SSL & Firebase</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function LoginPageContent() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-[#007aff] animate-spin" />
      </div>
    }>
      <LoginPageInner />
    </Suspense>
  )
}
