'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/auth-context'
import { Navigation } from '@/components/navigation'
import { SlimFooter } from '@/components/slim-footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Star,
  Heart,
  Send,
  MessageSquare,
  ThumbsUp,
  Calendar,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  ArrowLeft
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { saveFeedback, type FeedbackData } from '@/lib/services/feedback-service'

interface FeedbackFormData {
  rating: number
  whatLiked: string[]
  improvements: string
  testStatus: 'upcoming' | 'passed' | 'failed' | 'not_scheduled'
  testDate?: string
  additionalComments: string
  wouldRecommend: boolean
}

export function FeedbackPageContent() {

  const { user, userData, isPremium, isPremiumExpired, premiumStatus, loading, signOut } = useAuth()
  const router = useRouter()
  
  const [feedback, setFeedback] = useState<FeedbackFormData>({
    rating: 0,
    whatLiked: [],
    improvements: '',
    testStatus: 'not_scheduled',
    testDate: '',
    additionalComments: '',
    wouldRecommend: true
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [authCheckComplete, setAuthCheckComplete] = useState(false)
  const [hoverRating, setHoverRating] = useState(0)

  const handleLogin = () => {}
  const handleSignup = () => {}
  const handleLogout = async () => {
    await signOut()
  }
  const handleDashboard = () => {
    router.push('/dashboard')
  }
  const handlePurchaseRenewal = () => {
    window.location.href = '/'
  }

  // Auth check (same pattern as dashboard)
  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push('/')
      } else if (premiumStatus !== 'active') {
        router.push('/dashboard')
      } else {
        setAuthCheckComplete(true)
      }
    }
  }, [user, loading, premiumStatus, router])

  // Show loading state while auth is loading
  if (loading || !authCheckComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  // If we reach here, user is authenticated and has premium access

  const handleStarClick = (rating: number) => {
    setFeedback(prev => ({ ...prev, rating }))
  }

  const handleLikedFeatureToggle = (feature: string) => {
    setFeedback(prev => ({
      ...prev,
      whatLiked: prev.whatLiked.includes(feature)
        ? prev.whatLiked.filter(f => f !== feature)
        : [...prev.whatLiked, feature]
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (feedback.rating === 0 || !user?.uid) return

    setIsSubmitting(true)
    try {
      await saveFeedback({
        userId: user.uid,
        userEmail: user.email || undefined,
        rating: feedback.rating,
        whatLiked: feedback.whatLiked,
        improvements: feedback.improvements,
        testStatus: feedback.testStatus,
        testDate: feedback.testDate,
        additionalComments: feedback.additionalComments,
        wouldRecommend: feedback.wouldRecommend
      })
      
      console.log('✅ Feedback submitted successfully')
      setIsSubmitted(true)
    } catch (error) {
      console.error('❌ Failed to submit feedback:', error)
      alert('Failed to submit feedback. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const likedFeatures = [
    'Practice questions quality',
    'Mock exams',
    'Progress tracking',
    'Detailed explanations',
    'Mobile experience',
    'Question bank variety',
    'State-specific content',
    'User interface design'
  ]

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation
          user={user}
          userData={userData}
          isPremium={isPremium}
          isPremiumExpired={isPremiumExpired}
          premiumStatus={premiumStatus}
          onLogin={handleLogin}
          onSignup={handleSignup}
          onLogout={handleLogout}
          onDashboard={handleDashboard}
          onPurchaseRenewal={handlePurchaseRenewal}
        />

        <main className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-3xl p-12 shadow-xl">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Thank you for your feedback! 🎉
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Your input helps us improve the platform for everyone. We truly appreciate you taking the time to share your experience.
              </p>
              <div className="flex gap-4 justify-center">
                <Button 
                  onClick={() => router.push('/dashboard')}
                  className="bg-[#007aff] hover:bg-[#0056cc]"
                >
                  Back to Dashboard
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => setIsSubmitted(false)}
                >
                  Submit Another Review
                </Button>
              </div>
            </div>
          </div>
        </main>

        <SlimFooter />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation
        user={user}
        userData={userData}
        isPremium={isPremium}
        isPremiumExpired={isPremiumExpired}
        premiumStatus={premiumStatus}
        onLogin={handleLogin}
        onSignup={handleSignup}
        onLogout={handleLogout}
        onDashboard={handleDashboard}
        onPurchaseRenewal={handlePurchaseRenewal}
      />

      {/* Banner */}
      <div className="w-full text-white" style={{ backgroundColor: '#007aff' }}>
        <div className="container mx-auto px-4 py-2.5 md:py-3.5 flex flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4 md:w-5 md:h-5 shrink-0" style={{ color: 'rgba(255,255,255,0.75)' }} />
            <span className="text-sm md:text-base font-bold whitespace-nowrap">Share Feedback</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Button
              onClick={() => router.push('/dashboard')}
              size="sm"
              className="bg-white hover:bg-gray-50 font-bold px-3 py-1.5 h-auto text-xs md:text-sm rounded-lg shadow-sm"
              style={{ color: '#007aff' }}
            >
              <ArrowLeft className="w-3.5 h-3.5 mr-1.5" />
              Back to Dashboard
            </Button>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        {/* Page heading */}
        <div className="max-w-2xl mx-auto mb-8 text-center">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(0,122,255,0.1)' }}>
            <Heart className="w-6 h-6" style={{ color: '#007aff' }} />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            We'd love your <span style={{ color: '#007aff' }}>feedback!</span>
          </h1>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            Your input helps us build a better platform. Takes less than 2 minutes.
          </p>
        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto space-y-4">

          {/* Star Rating */}
          <div className="bg-white rounded-xl p-6" style={{ border: '1px solid rgba(0,0,0,0.12)' }}>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-6 h-6 rounded-full text-white flex items-center justify-center text-xs font-bold" style={{ backgroundColor: '#007aff' }}>1</div>
              <span className="font-semibold text-gray-900">Overall rating</span>
            </div>
            <div className="flex justify-center gap-3 mb-3">
              {[1, 2, 3, 4, 5].map((star) => {
                const active = (hoverRating || feedback.rating) >= star
                return (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleStarClick(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="w-12 h-12 transition-all duration-150 hover:scale-110"
                    style={{ color: active ? '#facc15' : '#e5e7eb' }}
                  >
                    <Star className="w-12 h-12 fill-current" />
                  </button>
                )
              })}
            </div>
            <p className="text-center text-sm font-medium" style={{ color: (hoverRating || feedback.rating) === 0 ? '#9ca3af' : '#007aff' }}>
              {['Click to rate', 'Poor', 'Fair', 'Good', 'Very Good', 'Excellent ✨'][hoverRating || feedback.rating]}
            </p>
          </div>

          {/* What did you like */}
          <div className="bg-white rounded-xl p-6" style={{ border: '1px solid rgba(0,0,0,0.12)' }}>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-6 h-6 rounded-full text-white flex items-center justify-center text-xs font-bold" style={{ backgroundColor: '#007aff' }}>2</div>
              <span className="font-semibold text-gray-900">What did you like most?</span>
              <span className="text-xs text-gray-400 ml-1">Select all that apply</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {likedFeatures.map((feature) => (
                <button
                  key={feature}
                  type="button"
                  onClick={() => handleLikedFeatureToggle(feature)}
                  className="px-3 py-1.5 rounded-full text-sm font-medium border transition-all"
                  style={feedback.whatLiked.includes(feature)
                    ? { backgroundColor: '#007aff', color: '#fff', borderColor: '#007aff' }
                    : { backgroundColor: '#fff', color: '#374151', borderColor: 'rgba(0,0,0,0.15)' }}
                >
                  {feedback.whatLiked.includes(feature) && <span className="mr-1">✓</span>}
                  {feature}
                </button>
              ))}
            </div>
          </div>

          {/* Test Status */}
          <div className="bg-white rounded-xl p-6" style={{ border: '1px solid rgba(0,0,0,0.12)' }}>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-6 h-6 rounded-full text-white flex items-center justify-center text-xs font-bold" style={{ backgroundColor: '#007aff' }}>3</div>
              <span className="font-semibold text-gray-900">Your Real Estate Exam status</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: 'upcoming', label: 'Upcoming test', icon: '📅' },
                { value: 'passed', label: 'I passed! 🎉', icon: '✅' },
                { value: 'failed', label: "Didn't pass yet", icon: '📖' },
                { value: 'not_scheduled', label: 'Not scheduled', icon: '🕐' },
              ].map(({ value, label, icon }) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setFeedback(prev => ({ ...prev, testStatus: value as FeedbackFormData['testStatus'] }))}
                  className="flex items-center gap-2.5 p-3 rounded-lg border text-left transition-all text-sm font-medium"
                  style={feedback.testStatus === value
                    ? { backgroundColor: 'rgba(0,122,255,0.06)', borderColor: '#007aff', color: '#007aff' }
                    : { backgroundColor: '#fff', borderColor: 'rgba(0,0,0,0.12)', color: '#374151' }}
                >
                  <span className="text-base">{icon}</span>
                  {label}
                </button>
              ))}
            </div>
            {(feedback.testStatus === 'upcoming' || feedback.testStatus === 'passed') && (
              <div className="mt-4">
                <Label htmlFor="testDate" className="text-sm font-medium mb-2 block text-gray-600">
                  {feedback.testStatus === 'upcoming' ? 'Test Date' : 'When did you pass?'}
                </Label>
                <input
                  type="date"
                  id="testDate"
                  value={feedback.testDate}
                  onChange={(e) => setFeedback(prev => ({ ...prev, testDate: e.target.value }))}
                  className="px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:outline-none text-sm"
                  style={{ focusRingColor: '#007aff' } as React.CSSProperties}
                />
              </div>
            )}
          </div>

          {/* Improvements */}
          <div className="bg-white rounded-xl p-6" style={{ border: '1px solid rgba(0,0,0,0.12)' }}>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-6 h-6 rounded-full text-white flex items-center justify-center text-xs font-bold" style={{ backgroundColor: '#007aff' }}>4</div>
              <span className="font-semibold text-gray-900">What could we improve?</span>
              <span className="text-xs text-gray-400 ml-1">Optional</span>
            </div>
            <Textarea
              id="improvements"
              placeholder="Share your suggestions for making the platform even better..."
              value={feedback.improvements}
              onChange={(e) => setFeedback(prev => ({ ...prev, improvements: e.target.value }))}
              className="min-h-[100px] text-sm resize-none"
            />
          </div>

          {/* Additional comments */}
          <div className="bg-white rounded-xl p-6" style={{ border: '1px solid rgba(0,0,0,0.12)' }}>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-6 h-6 rounded-full text-white flex items-center justify-center text-xs font-bold" style={{ backgroundColor: '#007aff' }}>5</div>
              <span className="font-semibold text-gray-900">Any additional comments?</span>
              <span className="text-xs text-gray-400 ml-1">Optional</span>
            </div>
            <Textarea
              id="comments"
              placeholder="Anything else you'd like to share with us..."
              value={feedback.additionalComments}
              onChange={(e) => setFeedback(prev => ({ ...prev, additionalComments: e.target.value }))}
              className="min-h-[90px] text-sm resize-none"
            />
          </div>

          {/* Would Recommend */}
          <div className="bg-white rounded-xl p-6" style={{ border: '1px solid rgba(0,0,0,0.12)' }}>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-6 h-6 rounded-full text-white flex items-center justify-center text-xs font-bold" style={{ backgroundColor: '#007aff' }}>6</div>
              <span className="font-semibold text-gray-900">Would you recommend us?</span>
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setFeedback(prev => ({ ...prev, wouldRecommend: true }))}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border font-medium text-sm transition-all"
                style={feedback.wouldRecommend
                  ? { backgroundColor: 'rgba(0,122,255,0.06)', borderColor: '#007aff', color: '#007aff' }
                  : { backgroundColor: '#fff', borderColor: 'rgba(0,0,0,0.12)', color: '#374151' }}
              >
                <ThumbsUp className="w-4 h-4" />
                Yes, absolutely!
              </button>
              <button
                type="button"
                onClick={() => setFeedback(prev => ({ ...prev, wouldRecommend: false }))}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border font-medium text-sm transition-all"
                style={!feedback.wouldRecommend
                  ? { backgroundColor: 'rgba(239,68,68,0.06)', borderColor: '#ef4444', color: '#ef4444' }
                  : { backgroundColor: '#fff', borderColor: 'rgba(0,0,0,0.12)', color: '#374151' }}
              >
                Not really
              </button>
            </div>
          </div>

          {/* Submit */}
          <div className="pb-8">
            <Button
              onClick={handleSubmit}
              disabled={feedback.rating === 0 || isSubmitting}
              className="w-full text-white font-bold py-6 rounded-xl text-base disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
              style={{ backgroundColor: '#007aff' }}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Submit Feedback
                </>
              )}
            </Button>
            {feedback.rating === 0 && (
              <p className="text-xs text-red-400 mt-2 text-center">Please give a star rating before submitting</p>
            )}
          </div>
        </div>
      </main>

      <SlimFooter />
    </div>
  )
}