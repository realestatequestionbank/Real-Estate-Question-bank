'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/auth-context'
import { Navigation } from '@/components/navigation'
import { ProfileSkeleton } from '@/components/skeletons/profile-skeleton'
import { SlimFooter } from '@/components/slim-footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  User,
  Crown,
  Calendar,
  Mail,
  Shield,
  CreditCard,
  Settings,
  Lock,
  Trash2,
  AlertTriangle,
  Check
} from 'lucide-react'
import { formatDate } from '@/lib/utils'
import { STATES, type StateKey } from '@/lib/constants'
import { ExpiredPremiumModal } from '@/components/auth/expired-premium-modal'
import { isPremiumExpired as checkIfPremiumExpired } from '@/lib/firebase/auth'
import { PurchaseRenewalDialog } from '@/components/purchase-renewal-dialog'

export function ProfilePageContent() {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const [showExpiredModal, setShowExpiredModal] = useState(false)
  const [showPurchaseModal, setShowPurchaseModal] = useState(false)
  const [purchaseLoading, setPurchaseLoading] = useState(false)

  const router = useRouter()
  const { user, userData, isPremium, isPremiumExpired, premiumStatus, signOut, loading: authLoading, isCdlPremium, isCdlPremiumExpired, cdlPremiumStatus } = useAuth()

  // Redirect non-authenticated users
  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/')
    }
  }, [user, router, authLoading])

  const handleLogin = () => {
    router.push('/')
  }

  const handleSignup = () => {
    router.push('/')
  }

  const handleLogout = async () => {
    await signOut()
    router.push('/')
  }

  const handleDashboard = () => {
    if (isPremium || isCdlPremium) {
      router.push('/dashboard')
    } else if (user && userData && ((userData.isPremium && isPremiumExpired) || (userData.isCdlPremium && isCdlPremiumExpired))) {
      // User has expired premium - show renewal modal
      setShowExpiredModal(true)
    } else {
      router.push('/')
    }
  }

  const handleCompletePurchaseClick = () => {
    setShowPurchaseModal(true)
  }

  const handlePurchaseFromModal = async (duration: number) => {
    if (!user) return

    setPurchaseLoading(true)
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: user.uid,
          state: 'general',
          duration: duration,
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
      setPurchaseLoading(false)
      setShowPurchaseModal(false)
    }
  }


  const handleDeleteAccount = async () => {
    if (!user) return

    try {
      setIsDeleting(true)

      // Delete user data from Firestore
      const { deleteDoc, doc, collection, query, where, getDocs } = await import('firebase/firestore')
      const { db } = await import('@/lib/firebase/config')

      // Delete user document
      await deleteDoc(doc(db, 'users', user.uid))

      // Delete user progress across all states
      const progressQuery = query(
        collection(db, 'userProgress'),
        where('userId', '==', user.uid)
      )
      const progressSnapshot = await getDocs(progressQuery)
      const deleteProgressPromises = progressSnapshot.docs.map(doc => deleteDoc(doc.ref))
      await Promise.all(deleteProgressPromises)

      // Delete user practice sessions
      const sessionsQuery = query(
        collection(db, 'progress'),
        where('userId', '==', user.uid)
      )
      const sessionsSnapshot = await getDocs(sessionsQuery)
      const deleteSessionsPromises = sessionsSnapshot.docs.map(doc => deleteDoc(doc.ref))
      await Promise.all(deleteSessionsPromises)

      // Delete user purchases
      const purchasesQuery = query(
        collection(db, 'purchases'),
        where('userId', '==', user.uid)
      )
      const purchasesSnapshot = await getDocs(purchasesQuery)
      const deletePurchasesPromises = purchasesSnapshot.docs.map(doc => deleteDoc(doc.ref))
      await Promise.all(deletePurchasesPromises)

      // Delete Firebase Auth user
      await user.delete()

      // Redirect to home
      router.push('/')
    } catch (error) {
      console.error('Error deleting account:', error)
      alert('Failed to delete account. Please try again or contact support at hello@realestatequestionbank.com.')
    } finally {
      setIsDeleting(false)
      setShowDeleteConfirm(false)
    }
  }

  const handleRenewal = async () => {
    if (!user) return
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: user.uid,
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
    }
  }

  const getUserDisplayName = () => {
    if (userData?.firstName && userData?.lastName) {
      return `${userData.firstName} ${userData.lastName}`
    }
    return user?.displayName || user?.email?.split('@')[0] || 'User'
  }


  return (
    <div className="min-h-screen bg-white">
      <Navigation
        user={user}
        userData={userData}
        isPremium={isPremium || isCdlPremium}
        isPremiumExpired={isCdlPremium ? isCdlPremiumExpired : isPremiumExpired}
        premiumStatus={(isCdlPremium && cdlPremiumStatus === 'active') || (isPremium && premiumStatus === 'active')
          ? 'active'
          : (isCdlPremium && cdlPremiumStatus === 'expired') || (isPremium && premiumStatus === 'expired')
            ? 'expired'
            : 'never_purchased'}
        onLogin={handleLogin}
        onSignup={handleSignup}
        onLogout={handleLogout}
        onDashboard={handleDashboard}
        onPurchaseRenewal={handleCompletePurchaseClick}
        currentPage="profile"
        isLoading={authLoading}
      />

      {/* Show Auth/Loading only if NO user is present yet */}
      {authLoading || !user ? (
        <ProfileSkeleton />
      ) : (
        <main className="container mx-auto px-4 py-8 lg:py-12 max-w-6xl animate-in fade-in duration-300">
          {/* Profile Header */}
          <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-slate-50 p-6 md:p-8 mb-8 shadow-sm">
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex flex-col md:flex-row items-center gap-5 text-center md:text-left">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-sm ${
                  isPremium || isCdlPremium
                    ? 'bg-[#007aff] ring-4 ring-blue-100'
                    : 'bg-slate-600 ring-4 ring-slate-100'
                }`}>
                  {(getUserDisplayName() || 'U').charAt(0).toUpperCase()}
                </div>
                <div>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
                    <h1 className="text-xl md:text-2xl font-bold text-gray-950 tracking-tight">{getUserDisplayName()}</h1>
                    {isPremium || isCdlPremium ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-blue-50 text-[#007aff] border border-blue-200 uppercase tracking-wide">
                        <Crown className="w-3 h-3 fill-[#007aff]/10" />
                        {isCdlPremium && isPremium ? 'Premium Pass' : isCdlPremium ? 'CDL Premium' : 'Car Premium'}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-slate-100 text-slate-700 border border-slate-200 uppercase tracking-wide">
                        Free Member
                      </span>
                    )}
                  </div>
                  <p className="text-gray-500 font-medium mt-1 flex items-center justify-center md:justify-start gap-1.5 text-xs md:text-sm">
                    <Mail className="w-3.5 h-3.5 text-gray-400" />
                    {user.email}
                  </p>
                </div>
              </div>
              
              {(isPremium || isCdlPremium) && (
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <Button
                    onClick={handleDashboard}
                    className="bg-[#007aff] hover:bg-[#0056cc] text-white font-bold px-5 py-2 h-auto rounded-lg shadow-sm transition-all text-xs md:text-sm w-full md:w-auto"
                  >
                    Go to Dashboard
                  </Button>
                </div>
              )}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left & Center Column (Col span 2) */}
            <div className="lg:col-span-2 space-y-8">
              {/* Account Information Card */}
              <Card className="rounded-xl border border-gray-200 shadow-sm overflow-hidden bg-white">
                <CardHeader className="border-b border-gray-100 px-6 py-4">
                  <CardTitle className="text-base font-bold text-gray-900 flex items-center gap-2">
                    <Settings className="w-4.5 h-4.5 text-[#007aff]" />
                    Account Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y divide-gray-100">
                    <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-blue-50 rounded-lg text-[#007aff] shrink-0">
                          <Mail className="w-4.5 h-4.5" />
                        </div>
                        <div>
                          <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Email Address</h3>
                          <p className="text-sm text-gray-900 font-bold mt-0.5">{user.email}</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-blue-50 rounded-lg text-[#007aff] shrink-0">
                          <Shield className="w-4.5 h-4.5" />
                        </div>
                        <div>
                          <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Authentication Method</h3>
                          <p className="text-sm text-gray-900 font-bold mt-0.5">
                            {user.providerData[0]?.providerId === 'google.com' ? 'Google Authentication' : 'Email & Password'}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-blue-50 rounded-lg text-[#007aff] shrink-0">
                          <Calendar className="w-4.5 h-4.5" />
                        </div>
                        <div>
                          <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Member Since</h3>
                          <p className="text-sm text-gray-900 font-bold mt-0.5">
                            {userData?.createdAt ? formatDate(userData.createdAt.toDate()) : 'Recently Added'}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-blue-50 rounded-lg text-[#007aff] shrink-0">
                          <Crown className="w-4.5 h-4.5" />
                        </div>
                        <div>
                          <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Plan Tier</h3>
                          <p className="text-sm text-gray-905 font-bold mt-0.5">
                            {isPremium || isCdlPremium ? 'Premium Plan' : 'Free Practice Pass'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Membership Card */}
              {isPremium || isCdlPremium ? (
                <Card className="rounded-xl border border-gray-200 shadow-sm overflow-hidden bg-white">
                  <CardHeader className="border-b border-gray-100 px-6 py-4">
                    <CardTitle className="text-base font-bold text-gray-900 flex items-center gap-2">
                      <Crown className="w-4.5 h-4.5 text-[#007aff]" />
                      Active Plans
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 space-y-6">
                    <div className="grid md:grid-cols-2 gap-5">
                      {isPremium && (
                        <div className="p-4 bg-slate-50 border border-gray-200 rounded-lg flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-[9px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-md">Car / Real Estate Plan</span>
                              <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md">Active</span>
                            </div>
                            <h4 className="text-base font-bold text-gray-900">Car Premium Access</h4>
                            <p className="text-xs text-gray-500 font-medium mt-1">
                              {userData?.planDuration ? `${userData.planDuration}-Day Access` : 'Lifetime Access Plan'}
                            </p>
                          </div>
                          <div className="border-t border-gray-100 pt-3 mt-5">
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Expires On</p>
                            <p className="text-xs font-bold text-gray-800 mt-0.5">
                              {userData?.premiumExpiresAt ? formatDate(
                                typeof userData.premiumExpiresAt === 'object' && 'toDate' in userData.premiumExpiresAt ?
                                  userData.premiumExpiresAt.toDate() :
                                  new Date(userData.premiumExpiresAt)
                              ) : 'N/A'}
                            </p>
                          </div>
                        </div>
                      )}

                      {isCdlPremium && (
                        <div className="p-4 bg-slate-50 border border-gray-200 rounded-lg flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-[9px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-md">CDL Commercial Plan</span>
                              <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md">Active</span>
                            </div>
                            <h4 className="text-base font-bold text-gray-900">CDL Premium Access</h4>
                            <p className="text-xs text-gray-500 font-medium mt-1">
                              {userData?.cdlPlanDuration ? `${userData.cdlPlanDuration}-Day Access` : '90-Day Access Plan'}
                            </p>
                          </div>
                          <div className="border-t border-gray-100 pt-3 mt-5">
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Expires On</p>
                            <p className="text-xs font-bold text-gray-800 mt-0.5">
                              {userData?.cdlPremiumExpiresAt ? formatDate(
                                typeof userData.cdlPremiumExpiresAt === 'object' && 'toDate' in userData.cdlPremiumExpiresAt ?
                                  userData.cdlPremiumExpiresAt.toDate() :
                                  new Date(userData.cdlPremiumExpiresAt)
                              ) : 'N/A'}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="grid md:grid-cols-2 gap-5 pt-2 border-t border-gray-100">
                      {isPremium && (
                        <div>
                          <h5 className="text-xs font-bold text-gray-900 mb-2.5 uppercase tracking-wider">Car Premium Inclusions</h5>
                          <div className="flex flex-col gap-2 text-xs text-gray-600">
                            <div className="flex items-center gap-2">
                              <Check className="w-3.5 h-3.5 text-[#007aff] shrink-0" />
                              <span>Access to practice tests for all 50 states</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Check className="w-3.5 h-3.5 text-[#007aff] shrink-0" />
                              <span>Real-world exam simulator mock tests</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Check className="w-3.5 h-3.5 text-[#007aff] shrink-0" />
                              <span>Handbook cheat sheets & study summaries</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {isCdlPremium && (
                        <div>
                          <h5 className="text-xs font-bold text-gray-900 mb-2.5 uppercase tracking-wider">CDL Premium Inclusions</h5>
                          <div className="flex flex-col gap-2 text-xs text-gray-600">
                            <div className="flex items-center gap-2">
                              <Check className="w-3.5 h-3.5 text-[#007aff] shrink-0" />
                              <span>Access to CDL tests for all 50 states</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Check className="w-3.5 h-3.5 text-[#007aff] shrink-0" />
                              <span>General knowledge + all endorsements</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Check className="w-3.5 h-3.5 text-[#007aff] shrink-0" />
                              <span>Pre-trip inspections step-by-step prep</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ) : (
                /* Free User Upgrade promo card */
                <Card className="rounded-xl border border-blue-200 bg-slate-50/50 shadow-sm overflow-hidden animate-in fade-in duration-300">
                  <div className="p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div className="space-y-1.5 text-left">
                      <div className="inline-flex items-center gap-1 bg-blue-50 text-[#007aff] border border-blue-200 text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-md tracking-wider">
                        <Crown className="w-3 h-3 fill-[#007aff]/10" /> Upgrade Available
                      </div>
                      <h3 className="text-base font-bold text-gray-955">Unlock All Questions & Simulators</h3>
                      <p className="text-xs md:text-sm text-gray-600 max-w-xl leading-relaxed">
                        Study with 1,000+ state-specific Car and CDL exam questions, unlimited realistic exam simulators, step-by-step explanations, and a 100% pass guarantee.
                      </p>
                    </div>
                    <Button
                      onClick={handleCompletePurchaseClick}
                      className="bg-[#007aff] hover:bg-[#0056cc] text-white font-bold px-5 py-2.5 h-auto rounded-lg shadow-sm transition-all shrink-0 w-full md:w-auto text-center text-xs md:text-sm"
                    >
                      Upgrade to Premium
                    </Button>
                  </div>
                </Card>
              )}
            </div>

            {/* Right Column (Col span 1) */}
            <div className="lg:col-span-1 space-y-8">
              {/* Help / Support Box */}
              <Card className="rounded-xl border border-gray-200 shadow-sm overflow-hidden bg-white p-5 text-left">
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center text-[#007aff]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-905">Need Help or Support?</h4>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                      Have questions about billing, your state handbook, CDL endorsements, or your premium plan status? Contact our support team directly.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-gray-100">
                    <a
                      href="mailto:hello@realestatequestionbank.com?subject=Real Estate Question Bank: Account Support"
                      className="inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold text-[#007aff] hover:text-[#0056cc] hover:underline"
                    >
                      hello@realestatequestionbank.com
                    </a>
                  </div>
                </div>
              </Card>

              {/* Danger Zone: Delete Account */}
              <Card className="rounded-xl border border-red-100 shadow-sm overflow-hidden bg-white p-5 text-left">
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-lg bg-red-50 flex items-center justify-center text-red-500">
                    <AlertTriangle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-905">Danger Zone</h4>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                      Permanently delete your profile, stats, progress reports, and premium plan. This action is absolute and cannot be undone.
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => setShowDeleteConfirm(true)}
                    className="w-full border-red-200 text-red-650 hover:bg-red-50 hover:text-red-700 hover:border-red-300 font-bold py-2 h-auto rounded-lg text-xs transition-all"
                  >
                    <Trash2 className="w-3.5 h-3.5 mr-1" />
                    Delete Profile
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </main>
      )}

      <SlimFooter />

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-md rounded-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-600 text-base">
                <AlertTriangle className="w-4.5 h-4.5" />
                Confirm Account Deletion
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700 text-sm">
                  Are you sure you want to permanently delete your account? This action will:
                </p>
                <ul className="list-disc list-inside text-xs text-gray-650 space-y-1">
                  <li>Delete all your progress and statistics</li>
                  <li>Remove all practice session data</li>
                  <li>Cancel your premium plan</li>
                  <li>Delete your account permanently</li>
                </ul>
                <p className="text-red-600 font-bold text-xs">
                  This action cannot be undone.
                </p>

                <div className="flex gap-3 pt-3">
                  <Button
                    variant="outline"
                    onClick={() => setShowDeleteConfirm(false)}
                    className="flex-1 rounded-lg text-xs"
                    disabled={isDeleting}
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleDeleteAccount}
                    disabled={isDeleting}
                    className="flex-1 bg-red-650 hover:bg-red-750 text-white rounded-lg text-xs font-bold"
                  >
                    {isDeleting ? (
                      <>
                        <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin mr-1.5" />
                        Deleting...
                      </>
                    ) : (
                      <>
                        <Trash2 className="w-3.5 h-3.5 mr-1.5" />
                        Delete Account
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <ExpiredPremiumModal
        isOpen={showExpiredModal}
        onClose={() => setShowExpiredModal(false)}
        onRenew={handleRenewal}
        expirationDate={userData?.premiumExpiresAt}
        userName={getUserDisplayName()}
      />

      <PurchaseRenewalDialog
        isOpen={showPurchaseModal}
        onClose={() => setShowPurchaseModal(false)}
        premiumStatus={premiumStatus}
        onPurchase={handlePurchaseFromModal}
        isLoading={purchaseLoading}
      />
    </div>
  )
}