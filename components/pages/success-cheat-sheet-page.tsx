'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { useAuth, AuthProvider } from '@/contexts/auth-context'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle, Download, Loader2, ArrowRight, BookOpen, AlertTriangle } from 'lucide-react'
import { STATES, type StateKey } from '@/lib/constants'
import { getDepartmentName } from '@/lib/data/state-departments'

const PDF_FILE_NAMES: Record<StateKey, string> = {
  'alabama': 'Free-Alabama-Real-Estate-Practice-Questions.pdf',
  'alaska': 'Free-Alaska-Real-Estate-Practice-Questions.pdf',
  'arizona': 'Free-Arizona-Real-Estate-Practice-Questions.pdf',
  'arkansas': 'Free-Arkansas-Real-Estate-Practice-Questions.pdf',
  'california': 'Free-California-Real-Estate-Practice-Questions.pdf',
  'colorado': 'Free-Colorado-Real-Estate-Practice-Questions.pdf',
  'connecticut': 'Free-Connecticut-Real-Estate-Practice-Questions.pdf',
  'delaware': 'Free-Delaware-Real-Estate-Practice-Questions.pdf',
  'florida': 'Free-Florida-Real-Estate-Practice-Questions.pdf',
  'georgia': 'Free-Georgia-Real-Estate-Practice-Questions.pdf',
  'hawaii': 'Free-Hawaii-Real-Estate-Practice-Questions.pdf',
  'idaho': 'Free-Idaho-Real-Estate-Practice-Questions.pdf',
  'illinois': 'Free-Illinois-Real-Estate-Practice-Questions.pdf',
  'indiana': 'Free-Indiana-Real-Estate-Practice-Questions.pdf',
  'iowa': 'Free-Iowa-Real-Estate-Practice-Questions.pdf',
  'kansas': 'Free-Kansas-Real-Estate-Practice-Questions.pdf',
  'kentucky': 'Free-Kentucky-Real-Estate-Practice-Questions.pdf',
  'louisiana': 'Free-Louisiana-Real-Estate-Practice-Questions.pdf',
  'maine': 'Free-Maine-Real-Estate-Practice-Questions.pdf',
  'maryland': 'Free-Maryland-Real-Estate-Practice-Questions.pdf',
  'massachusetts': 'Free-Massachusetts-Real-Estate-Practice-Questions.pdf',
  'michigan': 'Free-Michigan-Real-Estate-Practice-Questions.pdf',
  'minnesota': 'Free-Minnesota-Real-Estate-Practice-Questions.pdf',
  'mississippi': 'Free-Mississippi-Real-Estate-Practice-Questions.pdf',
  'missouri': 'Free-Missouri-Real-Estate-Practice-Questions.pdf',
  'montana': 'Free-Montana-Real-Estate-Practice-Questions.pdf',
  'nebraska': 'Free-Nebraska-Real-Estate-Practice-Questions.pdf',
  'nevada': 'Free-Nevada-Real-Estate-Practice-Questions.pdf',
  'new-hampshire': 'Free-New-Hampshire-Real-Estate-Practice-Questions.pdf',
  'new-jersey': 'Free-New-Jersey-Real-Estate-Practice-Questions.pdf',
  'new-mexico': 'Free-New-Mexico-Real-Estate-Practice-Questions.pdf',
  'new-york': 'Free-New-York-Real-Estate-Practice-Questions.pdf',
  'north-carolina': 'Free-North-Carolina-Real-Estate-Practice-Questions.pdf',
  'north-dakota': 'Free-North-Dakota-Real-Estate-Practice-Questions.pdf',
  'ohio': 'Free-Ohio-Real-Estate-Practice-Questions.pdf',
  'oklahoma': 'Free-Oklahoma-Real-Estate-Practice-Questions.pdf',
  'oregon': 'Free-Oregon-Real-Estate-Practice-Questions.pdf',
  'pennsylvania': 'Free-Pennsylvania-Real-Estate-Practice-Questions.pdf',
  'rhode-island': 'Free-Rhode-Island-Real-Estate-Practice-Questions.pdf',
  'south-carolina': 'Free-South-Carolina-Real-Estate-Practice-Questions.pdf',
  'south-dakota': 'Free-South-Dakota-Real-Estate-Practice-Questions.pdf',
  'tennessee': 'Free-Tennessee-Real-Estate-Practice-Questions.pdf',
  'texas': 'Free-Texas-Real-Estate-Practice-Questions.pdf',
  'utah': 'Free-Utah-Real-Estate-Practice-Questions.pdf',
  'vermont': 'Free-Vermont-Real-Estate-Practice-Questions.pdf',
  'virginia': 'Free-Virginia-Real-Estate-Practice-Questions.pdf',
  'washington': 'Free-Washington-Real-Estate-Practice-Questions.pdf',
  'west-virginia': 'Free-West-Virginia-Real-Estate-Practice-Questions.pdf',
  'wisconsin': 'Free-Wisconsin-Real-Estate-Practice-Questions.pdf',
  'wyoming': 'Free-Wyoming-Real-Estate-Practice-Questions.pdf',
}

function SuccessCheatSheetPageInner() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [email, setEmail] = useState('')
  const searchParams = useSearchParams()
  const router = useRouter()

  const { user, userData, isPremium, signOut } = useAuth()

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
    router.push('/dashboard')
  }

  const sessionId = searchParams.get('session_id')
  const state = searchParams.get('state') as StateKey

  const stateInfo = state ? STATES[state] : null
  const departmentInfo = state ? getDepartmentName(state) : null
  const stateName = stateInfo?.name || 'State'

  const getPdfUrl = () => {
    if (!state) return ''
    const filename = PDF_FILE_NAMES[state] || `${state}-Real Estate-Practice-Questions.pdf`
    return `/free-permit-test-questions-PDF/${filename}`
  }

  useEffect(() => {
    const verifyPayment = async () => {
      if (!sessionId) {
        setError('No session ID found in URL parameters. Please check your purchase confirmation link.')
        setLoading(false)
        return
      }

      try {
        const response = await fetch(`/api/verify-session?session_id=${sessionId}`)
        const data = await response.json()

        if (response.ok && data.paid && data.product === 'cheat_sheet') {
          setEmail(data.email || '')
          setLoading(false)
          
          // Auto-trigger download
          const link = document.createElement('a')
          link.href = getPdfUrl()
          link.download = PDF_FILE_NAMES[state] || 'Real Estate_Cheat_Sheet.pdf'
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
        } else {
          setError(data.error || 'Unable to confirm cheat sheet payment. If you were already charged, please contact support.')
          setLoading(false)
        }
      } catch (err) {
        console.error('Error verifying cheat sheet purchase:', err)
        setError('A network error occurred. Please refresh the page to retry verification.')
        setLoading(false)
      }
    }

    verifyPayment()
  }, [sessionId, state])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
        <Navigation
          user={user}
          userData={userData}
          isPremium={isPremium}
          onLogin={handleLogin}
          onSignup={handleSignup}
          onLogout={handleLogout}
          onDashboard={handleDashboard}
          onSelectState={() => router.push('/')}
        />
        <main className="container mx-auto px-4 py-24 flex-1 flex items-center justify-center">
          <div className="max-w-md mx-auto text-center">
            <Loader2 className="w-12 h-12 animate-spin mx-auto mb-6 text-[#007aff]" />
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Verifying your payment...</h1>
            <p className="text-gray-600">Please wait while we confirm your purchase from Stripe.</p>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
        <Navigation
          user={user}
          userData={userData}
          isPremium={isPremium}
          onLogin={handleLogin}
          onSignup={handleSignup}
          onLogout={handleLogout}
          onDashboard={handleDashboard}
          onSelectState={() => router.push('/')}
        />
        <main className="container mx-auto px-4 py-16 flex-1 flex items-center justify-center">
          <Card className="max-w-md w-full border-red-100 shadow-xl rounded-2xl">
            <CardHeader className="text-center pb-2">
              <div className="bg-red-50 text-red-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <CardTitle className="text-xl font-bold text-red-650">Purchase Verification Issue</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6 pt-4">
              <p className="text-sm text-gray-600 leading-relaxed">{error}</p>
              <div className="pt-2">
                <Button onClick={() => router.push('/')} className="bg-gray-900 hover:bg-gray-800 text-white w-full py-5 rounded-xl font-bold transition-all">
                  Return to Homepage
                </Button>
              </div>
              <p className="text-xs text-gray-400">
                Need immediate help? Reach out at <a href="mailto:contact@realestatequestionbank.com" className="underline hover:text-gray-600">contact@realestatequestionbank.com</a>
              </p>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      <Navigation
        user={user}
        userData={userData}
        isPremium={isPremium}
        onLogin={handleLogin}
        onSignup={handleSignup}
        onLogout={handleLogout}
        onDashboard={handleDashboard}
        onSelectState={() => router.push('/')}
      />
      
      <main className="container mx-auto px-4 py-16 flex-1 flex items-center justify-center">
        <Card className="max-w-2xl w-full border border-gray-150 shadow-2xl rounded-3xl overflow-hidden bg-white">
          <div className="bg-gradient-to-r from-blue-500/10 via-emerald-500/10 to-transparent p-1 h-2"></div>
          
          <CardHeader className="text-center pt-8 pb-4">
            <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-inner">
              <CheckCircle className="w-9 h-9 text-emerald-600" />
            </div>
            <CardTitle className="text-3xl font-extrabold text-gray-950 tracking-tight">
              Payment Confirmed!
            </CardTitle>
            <p className="text-gray-500 text-sm mt-1">Thank you for supporting Real Estate Question Bank.</p>
          </CardHeader>
          
          <CardContent className="text-center space-y-8 px-6 md:px-10 pb-8">
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center">
              <h2 className="text-lg font-bold text-gray-950 mb-2">
                Your {stateName} Cheat Sheet is Ready
              </h2>
              <p className="text-sm text-gray-655 leading-relaxed max-w-md mx-auto">
                The download was triggered automatically. If it did not start, click the button below to secure your PDF study guide.
              </p>
              {email && (
                <p className="text-xs text-gray-500 mt-3">
                  A receipt and copy has also been sent to: <span className="font-semibold text-gray-700">{email}</span>
                </p>
              )}
              
              <div className="mt-6 flex justify-center">
                <a
                  href={getPdfUrl()}
                  download={PDF_FILE_NAMES[state] || 'Real Estate_Cheat_Sheet.pdf'}
                  className="inline-flex items-center justify-center gap-2.5 bg-[#007aff] hover:bg-[#0056cc] text-white font-bold px-8 py-4.5 rounded-xl shadow-lg shadow-blue-500/10 hover:shadow-xl transition-all duration-200 text-center w-full sm:w-auto"
                >
                  <Download className="w-5 h-5 flex-shrink-0" />
                  Download Cheat Sheet PDF
                </a>
              </div>
            </div>

            <div className="space-y-4 text-left border-t border-gray-100 pt-6">
              <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#007aff]" />
                How to Study for Your Real Estate Exam:
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex gap-2">
                  <span className="text-[#007aff] font-bold">1.</span>
                  <span><strong>Focus on the Limits:</strong> Keep a close eye on the speed limits, safe distances, and DUI penalty tables. These constitute 85% of exam failures.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#007aff] font-bold">2.</span>
                  <span><strong>Study on Your Mobile:</strong> Keep the PDF open on your phone. If you arrive early at the Real Estate, run through the tables right before walking in.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#007aff] font-bold">3.</span>
                  <span><strong>Highlight Crucial Concepts:</strong> Mark the exact fiduciary duties, agency disclosures, and real estate math formulas so they stay visual in your memory.</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="text-xs text-gray-450 text-center sm:text-left">
                Need support? email: <a href="mailto:contact@realestatequestionbank.com" className="underline hover:text-gray-600">contact@realestatequestionbank.com</a>
              </div>
              <Button
                onClick={() => router.push(state ? `/${state}-real-estate-practice-test/cheat-sheet` : '/')}
                variant="ghost"
                className="text-[#007aff] hover:text-[#0056cc] hover:bg-blue-50 font-bold rounded-xl"
              >
                Go back to study guide
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  )
}

export default function SuccessCheatSheetPage() {
  return (
    <AuthProvider>
      <Suspense fallback={
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <Loader2 className="w-12 h-12 animate-spin text-[#007aff]" />
        </div>
      }>
        <SuccessCheatSheetPageInner />
      </Suspense>
    </AuthProvider>
  )
}
