'use client'

import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, X, Star } from "lucide-react"
import { PRICING, getEffectivePricing } from "@/lib/constants"
import { formatCurrency } from "@/lib/utils"

interface PricingProps {
  onStartFreeTrial: () => void
  onUpgradePremium?: () => void
}

export function Pricing({ onStartFreeTrial, onUpgradePremium }: PricingProps) {
  const router = useRouter()
  const effectivePricing = getEffectivePricing()

  const handleUpgradePremium = () => {
    if (onUpgradePremium) {
      onUpgradePremium()
    } else {
      router.push('/get-premium?plan=36500')
    }
  }
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get unlimited access to all practice tests and premium features
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Plan */}
          <Card className="relative">
            <CardHeader>
              <CardTitle className="text-2xl">Free Preview</CardTitle>
              <div className="text-4xl font-bold text-gray-900">$0</div>
              <p className="text-gray-600">Limited access</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>{effectivePricing.FREE_QUESTIONS_LIMIT} practice questions per state</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Basic explanations</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>No registration required</span>
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <X className="w-5 h-5 text-red-500" />
                  <span>No progress tracking</span>
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <X className="w-5 h-5 text-red-500" />
                  <span>No mock exams</span>
                </li>
              </ul>
              <Button
                onClick={onStartFreeTrial}
                variant="outline"
                className="w-full"
              >
                Start Free Preview
              </Button>
            </CardContent>
          </Card>

          {/* Premium Plan */}
          <Card className="relative border-2 border-blue-500 shadow-lg">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                <Star className="w-4 h-4" />
                Most Popular
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-2xl text-blue-600">Premium Access</CardTitle>
              <div className="text-4xl font-bold text-gray-900">
                {formatCurrency(effectivePricing.PLANS.THIRTY_DAY.discountedPrice)}
              </div>
              <p className="text-gray-600">One-time payment • Lifetime access</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>2,000+ questions per state</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Detailed explanations</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Mock exam simulations</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Progress tracking & analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Weak areas identification</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>All 50 states included</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Mobile-friendly</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Pass guarantee</span>
                </li>
              </ul>
              <Button
                onClick={handleUpgradePremium}
                variant="premium"
                className="w-full"
                size="lg"
              >
                Get Premium Access
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}