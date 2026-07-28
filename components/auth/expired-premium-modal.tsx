'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { AlertTriangle, Crown, CreditCard, Clock, X, Loader2, Shield } from 'lucide-react'

interface ExpiredPremiumModalProps {
  isOpen: boolean
  onClose: () => void
  onRenew: () => Promise<void>
  isRedirecting?: boolean
  expirationDate?: string | null
  userName?: string
}

export function ExpiredPremiumModal({
  isOpen,
  onClose,
  onRenew,
  isRedirecting = false,
  expirationDate,
  userName
}: ExpiredPremiumModalProps) {
  const [loading, setLoading] = useState(false)

  const handleRenew = async () => {
    setLoading(true)
    try {
      await onRenew()
    } catch (error) {
      console.error('Error renewing premium:', error)
    } finally {
      // Don't set loading to false if we are redirecting, let the redirect happen
      if (!isRedirecting) setLoading(false)
    }
  }

  const formatExpirationDate = (dateString: string | null | undefined) => {
    if (!dateString) return 'Unknown'
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] p-0">
        <div className="relative">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-10 p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-t-lg">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <DialogTitle className="text-2xl font-bold">
                  Premium Access Expired
                </DialogTitle>
                <p className="text-orange-100">
                  Welcome back, {userName}!
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            <div className="text-center">
              <p className="text-gray-700 text-lg mb-4">
                Your premium subscription ended on{' '}
                <span className="font-semibold text-gray-900">
                  {formatExpirationDate(expirationDate)}
                </span>
              </p>
              <p className="text-gray-600">
                Don't worry! You can renew your access instantly and continue where you left off.
              </p>
            </div>

            {/* Benefits reminder */}
            <Card className="border-blue-200 bg-blue-50">
              <CardContent className="pt-4">
                <h3 className="font-semibold text-blue-900 flex items-center gap-2 mb-3">
                  <Crown className="w-5 h-5 text-yellow-600" />
                  What You're Missing
                </h3>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Complete question bank for your state
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Unlimited practice tests and mock exams
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Progress tracking and detailed explanations
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Road signs guide and uncommon sense questions
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Redirecting Overlay */}
            {isRedirecting && (
              <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-[100] flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-300 rounded-lg">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                  <Loader2 className="w-10 h-10 text-[#007aff] animate-spin" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Redirecting to secure Stripe checkout...</h3>
                <p className="text-gray-600 mb-8">Preparing your renewal session safely</p>
                <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-lg border border-emerald-100">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">🔒 Secure checkout powered by Stripe</span>
                </div>
              </div>
            )}

            {/* Action buttons */}
            <div className="space-y-3">
              <Button
                onClick={handleRenew}
                disabled={loading}
                size="lg"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3"
              >
                <CreditCard className="w-5 h-5 mr-2" />
                {loading ? 'Processing...' : 'Renew Premium Access - 90 Days'}
              </Button>

              <Button
                variant="outline"
                onClick={onClose}
                className="w-full"
                disabled={loading}
              >
                Maybe Later
              </Button>
            </div>

            <div className="text-center text-sm text-gray-500">
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Premium access valid for 90 days from renewal</span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}