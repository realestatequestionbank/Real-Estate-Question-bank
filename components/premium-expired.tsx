'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { AlertTriangle, Clock, Crown, CreditCard } from 'lucide-react'
import { useAuth } from '@/contexts/auth-context'
import { useRouter } from 'next/navigation'

export function PremiumExpired() {
  const [loading, setLoading] = useState(false)
  const { userData } = useAuth()
  const router = useRouter()

  const handleRenew = async () => {
    if (!userData) return
    
    setLoading(true)
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: userData.uid,
        }),
      })

      const data = await response.json()

      if (data.error) {
        console.error('Checkout error:', data.error)
        alert('Failed to create checkout session')
        return
      }

      if (data.url) {
        window.location.href = data.url
      }
    } catch (error) {
      console.error('Error creating checkout session:', error)
      alert('An error occurred. Please try again.')
    } finally {
      setLoading(false)
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg border-orange-200 shadow-lg">
        <CardHeader className="text-center pb-6">
          <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
            <AlertTriangle className="w-8 h-8 text-orange-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">
            Premium Access Expired
          </CardTitle>
          <p className="text-gray-600 mt-2">
            Your premium subscription has ended and you no longer have access to premium features.
          </p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-2">
              <Clock className="w-5 h-5 text-orange-600" />
              <span className="font-semibold text-gray-900">Expiration Date</span>
            </div>
            <p className="text-gray-700">
              {formatExpirationDate(userData?.premiumExpiresAt)}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 flex items-center gap-2">
              <Crown className="w-5 h-5 text-yellow-600" />
              Premium Benefits You're Missing
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Access to your state's complete question bank
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Unlimited practice tests and mock exams
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Progress tracking and performance analytics
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Detailed explanations for all questions
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <Button 
              onClick={handleRenew}
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3"
              size="lg"
            >
              <CreditCard className="w-5 h-5 mr-2" />
              {loading ? 'Processing...' : 'Renew Premium Access'}
            </Button>
            
            <Button 
              variant="outline" 
              onClick={() => router.push('/')}
              className="w-full"
            >
              Return to Home
            </Button>
          </div>

          <div className="text-center text-sm text-gray-500">
            <p>Premium access is valid for 90 days from purchase date</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}