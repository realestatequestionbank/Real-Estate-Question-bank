'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Lock, Crown, AlertCircle, ArrowLeft } from 'lucide-react'

interface PremiumAccessGuardProps {
  user: any
  premiumStatus: 'never_purchased' | 'active' | 'expired'
  onPurchase?: () => void
  onRenewal?: () => void
  onLogin?: () => void
  state?: string
  feature?: string
}

export function PremiumAccessGuard({
  user,
  premiumStatus,
  onPurchase,
  onRenewal,
  onLogin,
  state,
  feature = 'this feature'
}: PremiumAccessGuardProps) {
  const router = useRouter()

  const handleBackToFree = () => {
    if (state) {
      router.push(`/state/${state}/free`)
    } else {
      router.push('/')
    }
  }

  if (!user) {
    // Free user (not logged in) trying to access premium page
    // Redirect to get-premium page for signup + purchase flow
    const handleGetPremium = () => {
      router.push('/get-premium?plan=36500')
    }

    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <Crown className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <CardTitle className="text-xl">Premium Access Required</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-gray-600">
              Get premium access to unlock {feature} and all practice questions.
            </p>
            <div className="flex flex-col gap-3">
              <Button
                onClick={handleGetPremium}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              >
                <Crown className="w-4 h-4 mr-2" />
                Get Premium Access
              </Button>
              <Button
                onClick={onLogin}
                variant="outline"
                className="w-full"
              >
                <Lock className="w-4 h-4 mr-2" />
                Already have an account? Login
              </Button>
              <Button
                variant="ghost"
                onClick={handleBackToFree}
                className="w-full text-gray-500"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Free Questions
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (premiumStatus === 'never_purchased') {
    // Case 1: User signed up but never purchased
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <Crown className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <CardTitle className="text-xl">Complete Your Purchase</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-gray-600">
              Complete your purchase to access {feature} and all premium features.
            </p>
            <div className="flex flex-col gap-3">
              <Button 
                onClick={onPurchase}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              >
                <Crown className="w-4 h-4 mr-2" />
                Complete Purchase
              </Button>
              <Button 
                variant="outline"
                onClick={handleBackToFree}
                className="w-full"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Free Questions
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (premiumStatus === 'expired') {
    // Case 2: User had premium but it expired
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <AlertCircle className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <CardTitle className="text-xl">Membership Expired</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-gray-600">
              Your premium membership has expired. Upgrade your membership to continue accessing {feature}.
            </p>
            <div className="bg-blue-50 p-3 rounded-lg">
              <p className="text-sm text-blue-700">
                Don't worry! Your progress has been saved and will be restored when you upgrade.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Button 
                onClick={onRenewal}
                className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white"
              >
                <Crown className="w-4 h-4 mr-2" />
                Upgrade Membership
              </Button>
              <Button 
                variant="outline"
                onClick={handleBackToFree}
                className="w-full"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Free Questions
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Active premium user - this component shouldn't render
  return null
}