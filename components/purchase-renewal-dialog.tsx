'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog } from '@/components/ui/dialog'
import { Crown, X } from 'lucide-react'
import { getEffectivePricing } from '@/lib/constants'

// Register fetch interceptor to dynamically inject the selected product type
// into checkout sessions, without needing to modify all other page templates.
if (typeof window !== 'undefined' && !(window as any).__checkoutInterceptorRegistered) {
  (window as any).__checkoutInterceptorRegistered = true;
  const originalFetch = window.fetch;
  window.fetch = async function (input, init) {
    if (
      typeof input === 'string' &&
      input.includes('/api/create-checkout-session') &&
      init &&
      init.body
    ) {
      try {
        const bodyObj = JSON.parse(init.body as string);
        if (!bodyObj.product) {
          bodyObj.product = (window as any).__checkoutProduct || 'real-estate_premium';
          init.body = JSON.stringify(bodyObj);
        }
      } catch (e) {
        console.error('Error in checkout session fetch interceptor:', e);
      }
    }
    return originalFetch(input, init);
  };
}

interface PurchaseRenewalDialogProps {
  isOpen: boolean
  onClose: () => void
  premiumStatus: 'never_purchased' | 'active' | 'expired'
  onPurchase: (duration: number, product?: 'real-estate_premium') => void
  isLoading?: boolean
}

type PlanType = 'seven_day' | 'thirty_day' | 'lifetime';

export function PurchaseRenewalDialog({
  isOpen,
  onClose,
  premiumStatus,
  onPurchase,
  isLoading = false
}: PurchaseRenewalDialogProps) {
  const [selectedPlan, setSelectedPlan] = useState<PlanType | null>(null)
  const effectivePricing = getEffectivePricing()

  const getTitle = () => {
    if (premiumStatus === 'never_purchased') {
      return 'Complete Your Purchase'
    }
    return 'Upgrade Your Membership'
  }

  const getDescription = () => {
    if (premiumStatus === 'never_purchased') {
      return 'Choose a premium plan to access all features.'
    }
    return 'Your premium membership has expired. Choose a plan to upgrade and regain access to all premium features.'
  }

  const getButtonText = () => {
    if (premiumStatus === 'never_purchased') {
      return 'Complete Purchase'
    }
    return 'Upgrade Membership'
  }

  const handlePurchase = () => {
    if (selectedPlan) {
      let duration = 30;
      let product: 'real-estate_premium' = 'real-estate_premium';

      if (selectedPlan === 'seven_day') {
        duration = 7;
        product = 'real-estate_premium';
      } else if (selectedPlan === 'thirty_day') {
        duration = 30;
        product = 'real-estate_premium';
      } else if (selectedPlan === 'lifetime') {
        duration = 36500;
        product = 'real-estate_premium';
      }

      if (typeof window !== 'undefined') {
        (window as any).__checkoutProduct = product;
      }

      onPurchase(duration, product)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-md max-h-[90vh] flex flex-col shadow-2xl">
        <CardHeader className="relative flex-shrink-0 border-b border-gray-50 pb-4">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-1 rounded-md hover:bg-gray-100 transition-colors"
            disabled={isLoading}
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
          <CardTitle className="flex items-center gap-2 pr-8 text-xl font-extrabold text-gray-900">
            <Crown className="w-6 h-6 text-yellow-500 fill-yellow-500/10" />
            {getTitle()}
          </CardTitle>
          <p className="text-sm text-gray-600 mt-2 font-normal">
            {getDescription()}
          </p>
        </CardHeader>
        <CardContent className="overflow-y-auto pr-2 pb-6 pt-4 flex-1">
          <div className="space-y-4">
            <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider pl-1 mb-1">
              Select a Premium Plan
            </div>

            {/* 7-day plan */}
            <div
              className={`border rounded-xl p-4 cursor-pointer transition-all min-h-[80px] relative ${selectedPlan === 'seven_day'
                ? 'border-blue-500 bg-blue-50/40 shadow-sm'
                : 'border-gray-200 hover:border-gray-300'
                }`}
              onClick={() => setSelectedPlan('seven_day')}
            >
              <div className="flex items-center justify-between h-full">
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900">{effectivePricing.PLANS.SEVEN_DAY.name}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">Perfect for quick exam prep</p>
                </div>
                <div className="text-right flex-shrink-0 ml-4">
                  <div className="font-extrabold text-gray-900 text-lg">${effectivePricing.PLANS.SEVEN_DAY.discountedPrice}</div>
                  <div className="text-[11px] text-gray-400 mt-0.5">${(effectivePricing.PLANS.SEVEN_DAY.discountedPrice / effectivePricing.PLANS.SEVEN_DAY.duration).toFixed(2)}/day</div>
                </div>
              </div>
            </div>

            {/* 30-day plan */}
            <div
              className={`border rounded-xl p-4 cursor-pointer transition-all relative min-h-[80px] ${selectedPlan === 'thirty_day'
                ? 'border-amber-500 bg-amber-50/20 shadow-sm'
                : 'border-gray-200 hover:border-gray-300'
                }`}
              onClick={() => setSelectedPlan('thirty_day')}
            >
              <div className="absolute -top-2 right-4">
                <span className="bg-amber-500 text-white text-[9px] font-extrabold px-2 py-0.5 rounded-full tracking-wide">
                  MOST POPULAR
                </span>
              </div>
              <div className="flex items-center justify-between h-full">
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900">{effectivePricing.PLANS.THIRTY_DAY.name}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">Best value for thorough preparation</p>
                </div>
                <div className="text-right flex-shrink-0 ml-4">
                  <div className="font-extrabold text-gray-900 text-lg">${effectivePricing.PLANS.THIRTY_DAY.discountedPrice}</div>
                  <div className="text-[11px] text-gray-400 mt-0.5">${(effectivePricing.PLANS.THIRTY_DAY.discountedPrice / effectivePricing.PLANS.THIRTY_DAY.duration).toFixed(2)}/day</div>
                </div>
              </div>
            </div>

            {/* Lifetime plan */}
            <div
              className={`border rounded-xl p-4 cursor-pointer transition-all relative min-h-[80px] ${selectedPlan === 'lifetime'
                ? 'border-purple-500 bg-purple-50/40 shadow-sm'
                : 'border-gray-200 hover:border-gray-300'
                }`}
              onClick={() => setSelectedPlan('lifetime')}
            >
              <div className="absolute -top-2 right-4">
                <span className="bg-purple-500 text-white text-[9px] font-extrabold px-2 py-0.5 rounded-full tracking-wide">
                  BEST VALUE
                </span>
              </div>
              <div className="flex items-center justify-between h-full">
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900">{effectivePricing.PLANS.LIFETIME.name}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">Lifetime access to all 50 states</p>
                </div>
                <div className="text-right flex-shrink-0 ml-4">
                  <div className="font-extrabold text-gray-900 text-lg">${effectivePricing.PLANS.LIFETIME.discountedPrice}</div>
                  <div className="text-[11px] text-gray-400 mt-0.5">One-time</div>
                </div>
              </div>
            </div>



            <div className="mt-6">
              <Button
                onClick={handlePurchase}
                disabled={!selectedPlan || isLoading}
                className="w-full bg-[#007aff] hover:bg-[#0056cc] text-white py-3.5 rounded-xl font-bold h-12 transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              >
                <Crown className="w-4 h-4" />
                {isLoading ? 'Processing...' : getButtonText()}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}