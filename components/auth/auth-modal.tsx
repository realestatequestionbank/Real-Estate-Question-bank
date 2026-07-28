'use client'

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAuth } from "@/contexts/auth-context"
import { Mail, Lock, User, Loader2, Crown, Shield, Check, X } from "lucide-react"
import { GoogleIcon } from "./google-icon"

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  mode: 'login' | 'signup'
  onSwitchMode: (mode: 'login' | 'signup') => void
  onGetPremium?: () => void
  onSuccess?: (mode: 'login' | 'signup', result?: any) => void
  isPremiumOnly?: boolean
  isCheckoutFlow?: boolean
  isRedirecting?: boolean
  closeOnSuccess?: boolean
  state?: string
}

export function AuthModal({
  isOpen,
  onClose,
  mode,
  onSwitchMode,
  onSuccess,
  onGetPremium,
  isPremiumOnly = false,
  isCheckoutFlow = false,
  isRedirecting = false,
  closeOnSuccess = true,
  state
}: AuthModalProps) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [resetMode, setResetMode] = useState(false)
  const [resetEmailSent, setResetEmailSent] = useState(false)

  const { signInWithEmail, signUpWithEmail, signInWithGoogle, resetPassword } = useAuth()

  const passwordRules = {
    length: password.length >= 8,
    hasLetter: /[a-zA-Z]/.test(password),
    hasNumber: /[0-9]/.test(password),
  }

  const isPasswordValid = passwordRules.length && passwordRules.hasLetter && passwordRules.hasNumber

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
          lastActiveState: state
        })
        if (result.error) {
          setError(result.error)
        } else {
          if (closeOnSuccess) onClose()
          onSuccess?.(mode, result)
        }
      } else {
        const result = await signInWithEmail(email, password)
        if (result.error) {
          setError(result.error)
        } else {
          if (closeOnSuccess) onClose()
          onSuccess?.(mode, result)
        }
      }
    } catch (error: any) {
      setError(error.message || 'An error occurred')
    }

    setLoading(false)
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
    } catch (error: any) {
      setError(error.message || 'An error occurred')
    }

    setLoading(false)
  }

  const handleGoogleSignIn = async () => {
    setError('')
    setLoading(true)

    try {
      const result = await signInWithGoogle(state)
      if (result.error) {
        setError(result.error)
      } else {
        if (closeOnSuccess) onClose()
        onSuccess?.(mode, result)
      }
    } catch (error: any) {
      setError(error.message || 'An error occurred')
    }

    setLoading(false)
  }

  const resetForm = () => {
    setFirstName('')
    setLastName('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
    setError('')
    setResetMode(false)
    setResetEmailSent(false)
  }

  const switchToLogin = () => {
    resetForm()
    onSwitchMode('login')
  }

  const switchToSignup = () => {
    resetForm()
    onSwitchMode('signup')
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {resetMode
              ? 'Reset Password'
              : (mode === 'login'
                ? (isPremiumOnly ? 'Premium Sign In' : 'Sign In')
                : (isCheckoutFlow ? 'Create your account' : 'Create Account'))}
          </DialogTitle>
          {isPremiumOnly && mode === 'login' && !resetMode && (
            <div className="flex flex-col gap-2 mt-2">
              <div className="flex items-center gap-2 text-[#007aff] bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100 w-fit">
                <Crown className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-wider">Premium Members Only</span>
              </div>
              <p className="text-sm text-gray-500">
                Access your premium practice questions and dashboard.
              </p>
            </div>
          )}
        </DialogHeader>

        <div className="space-y-4 pt-4">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
              {error}
            </div>
          )}

          {resetEmailSent && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md text-sm">
              Password reset email sent! Check your inbox for instructions to reset your password.
            </div>
          )}

          {resetMode ? (
            // Password Reset Form
            <form onSubmit={handlePasswordReset} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="reset-email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="reset-email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                    disabled={loading || resetEmailSent}
                  />
                </div>
              </div>

              {!resetEmailSent && (
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Send Reset Email
                </Button>
              )}

              <div className="text-center">
                <button
                  type="button"
                  onClick={() => setResetMode(false)}
                  className="text-blue-600 hover:underline text-sm"
                >
                  Back to Sign In
                </button>
              </div>
            </form>
          ) : (
            // Normal Login/Signup Form
            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === 'signup' && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="firstName"
                          type="text"
                          placeholder="First name"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          className="pl-10"
                          required
                          disabled={loading}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="lastName"
                          type="text"
                          placeholder="Last name"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          className="pl-10"
                          required
                          disabled={loading}
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                    disabled={loading}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="password"
                    type="password"
                    placeholder={mode === 'signup' ? "Min. 8 characters with letter & number" : "Enter your password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10"
                    required
                    disabled={loading}
                    minLength={mode === 'signup' ? 8 : 6}
                  />
                </div>
                {mode === 'signup' && (
                  <div className="pt-1 px-1 space-y-1">
                    <div className="flex items-center gap-2 text-[11px]">
                      {passwordRules.length ? (
                        <Check className="w-3 h-3 text-emerald-500" />
                      ) : (
                        <div className="w-3 h-3 rounded-full bg-gray-200" />
                      )}
                      <span className={passwordRules.length ? "text-emerald-700 font-medium" : "text-gray-500"}>
                        At least 8 characters
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px]">
                      {passwordRules.hasLetter && passwordRules.hasNumber ? (
                        <Check className="w-3 h-3 text-emerald-500" />
                      ) : (
                        <div className="w-3 h-3 rounded-full bg-gray-200" />
                      )}
                      <span className={passwordRules.hasLetter && passwordRules.hasNumber ? "text-emerald-700 font-medium" : "text-gray-500"}>
                        At least 1 letter and 1 number
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {mode === 'signup' && (
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm your password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="pl-10"
                      required
                      disabled={loading}
                      minLength={8}
                    />
                  </div>
                </div>
              )}

              <Button type="submit" className="w-full" disabled={loading}>
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {mode === 'login' ? 'Sign In' : 'Create Account'}
              </Button>

              {mode === 'login' && (
                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => setResetMode(true)}
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Forgot your password?
                  </button>
                </div>
              )}
            </form>
          )}

          {!resetMode && (
            <>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full"
                onClick={handleGoogleSignIn}
                disabled={loading}
              >
                {loading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <GoogleIcon className="mr-2 h-4 w-4" />
                )}
                Google
              </Button>

              <div className="text-center text-sm">
                {mode === 'login' ? (
                  <span>
                    {isPremiumOnly ? (
                      <>
                        Don't have premium?{' '}
                        <button
                          type="button"
                          onClick={() => {
                            onClose()
                            onGetPremium?.()
                          }}
                          className="text-[#007aff] hover:underline font-bold"
                        >
                          Get Premium
                        </button>
                      </>
                    ) : (
                      <>
                        Don't have an account?{' '}
                        <button
                          type="button"
                          onClick={switchToSignup}
                          className="text-blue-600 hover:underline font-medium"
                        >
                          Sign up
                        </button>
                      </>
                    )}
                  </span>
                ) : (
                  <span>
                    Already have an account?{' '}
                    <button
                      type="button"
                      onClick={switchToLogin}
                      className="text-blue-600 hover:underline font-medium"
                    >
                      Sign in
                    </button>
                  </span>
                )}
              </div>
            </>
          )}
        </div>

        {/* Redirecting Overlay */}
        {isRedirecting && (
          <div className="absolute inset-0 bg-white/90 backdrop-blur-sm z-[100] flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-300">
            <Loader2 className="w-10 h-10 text-[#007aff] animate-spin mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Redirecting to secure Stripe checkout...</h3>
            <p className="text-gray-600 mb-6">Setting up your secure environment</p>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg border border-gray-100">
              <Shield className="w-4 h-4 text-emerald-500" />
              <span className="text-xs font-medium text-gray-700 uppercase tracking-wider">🔒 Secure checkout powered by Stripe</span>
            </div>
          </div>
        )}

        {isCheckoutFlow && !isRedirecting && (
          <div className="p-4 bg-gray-50 border-t border-gray-100 flex items-center justify-center">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-gray-400" />
              <span className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">🔒 Secure checkout powered by Stripe</span>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}