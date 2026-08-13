'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/auth-context'
import { Navigation } from '@/components/navigation'
import { SlimFooter } from '@/components/slim-footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  FileText,
  ArrowLeft,
  BookOpen,
  Lock,
  Target,
  CheckCircle,
  Info,
  Zap
} from 'lucide-react'
import { STATES, type StateKey } from '@/lib/constants'
import { updateLastActiveState } from '@/lib/services/progress-service'
import { FeaturePageSkeleton } from '@/components/skeletons/feature-page-skeleton'

// Import state-specific revision guides
const loadStateRevisionContent = async (state: string) => {
  try {
    const stateModule = await import(`@/lib/data/revision-guides/${state}.ts`)
    return stateModule[`${state}RevisionContent`]
  } catch {
    console.log(`No state-specific revision guide found for ${state}, using default content`)
    return null
  }
}

interface RevisionGuidePageProps {
  state: string
}

const revisionContent = {
  'Property Ownership & Land Use': {
    icon: Target,
    sections: [
      {
        title: 'Real vs. Personal Property',
        content: `
          <h3>Core Property Classifications</h3>
          <p>Understanding the distinction between real and personal property is a foundational concept on the licensing exam.</p>
          <ul>
            <li><strong>Real Property:</strong> Land, everything attached to it permanently (buildings, trees), and the bundle of legal rights that run with the land. Real property transfers via a Deed.</li>
            <li><strong>Personal Property (Chattel):</strong> Items that are movable and not permanently attached to the real estate. Personal property transfers via a Bill of Sale.</li>
          </ul>
          
          <h3>Testing for Fixtures (M.A.R.I.A.)</h3>
          <p>A fixture is personal property that has been attached to land or a building in such a way that it becomes legally classified as real property. Court tests use the M.A.R.I.A. acronym:</p>
          <ul>
            <li><strong>M - Method of Annexation:</strong> How permanently is the item attached? (e.g., nailed, bolted vs. plugged in).</li>
            <li><strong>A - Adaptability:</strong> Is the item custom-fit or integral to the property? (e.g., custom window screens or house keys).</li>
            <li><strong>R - Relationship of the Parties:</strong> Courts generally favor tenants over landlords, and buyers over sellers.</li>
            <li><strong>I - Intent:</strong> What was the original intention of the person installing the item? (Often considered the most important test).</li>
            <li><strong>A - Agreement:</strong> Is there a written agreement between the parties specifying who owns the item?</li>
          </ul>

          <h3>Trade Fixtures</h3>
          <p>Items installed by a commercial tenant for business purposes (e.g., hair salon chairs, restaurant stoves). Trade fixtures remain personal property and must be removed before the lease expires.</p>
        `
      },
      {
        title: 'Government Rights in Land (P.E.T.E.)',
        content: `
          <h3>The Four Powers of Government</h3>
          <p>Individual property rights are subject to four primary government powers, remembered by the acronym <strong>P.E.T.E.</strong>:</p>
          <ul>
            <li><strong>P - Police Power:</strong> The state's authority to pass laws to protect public health, safety, and welfare. Examples include local zoning ordinances, building codes, and environmental protections.</li>
            <li><strong>E - Eminent Domain:</strong> The government's right to acquire private property for public use. The process of taking the property is called <strong>Condemnation</strong>, and the owner must be paid "just compensation."</li>
            <li><strong>T - Taxation:</strong> The right to levy property taxes to fund public services. Unpaid property taxes create a primary lien against the real estate.</li>
            <li><strong>E - Escheat:</strong> Property reverts to state ownership when an owner dies without a will (intestate) and has no identifiable legal heirs.</li>
          </ul>
        `
      }
    ]
  },
  'Agency & Fiduciary Duties': {
    icon: CheckCircle,
    sections: [
      {
        title: 'Fiduciary Obligations (O.L.D. C.A.R.)',
        content: `
          <h3>Core Fiduciary Duties of a Licensee</h3>
          <p>An agent owes their client absolute fiduciary duties throughout a transaction, encapsulated by the acronym <strong>O.L.D. C.A.R.</strong>:</p>
          <ul>
            <li><strong>O - Obedience:</strong> Follow all lawful instructions of the client. An agent must refuse to obey illegal instructions (e.g., committing fair housing violations).</li>
            <li><strong>L - Loyalty:</strong> Always place the client's interests above all others, including the broker's own financial interest.</li>
            <li><strong>D - Disclosure:</strong> Disclose all material facts that could affect the client's decisions, valuation of the property, or transaction details.</li>
            <li><strong>C - Confidentiality:</strong> Keep the client's personal and financial information secure. Fiduciary confidentiality lasts forever, extending beyond the termination of the agency agreement.</li>
            <li><strong>A - Accounting:</strong> Correctly account for all funds, escrow deposits, and documents entrusted to the agent.</li>
            <li><strong>R - Reasonable Care:</strong> Perform professional duties with the skill, care, and diligence expected of a licensed real estate professional.</li>
          </ul>
        `
      },
      {
        title: 'Types of Agency Relationships',
        content: `
          <h3>Agency Classifications</h3>
          <ul>
            <li><strong>Single Agency:</strong> The broker represents only one client (either the buyer or the seller) in a transaction.</li>
            <li><strong>Dual Agency:</strong> The broker represents both the buyer and the seller in the same transaction. This relationship requires written disclosure and active, informed consent from both parties.</li>
            <li><strong>Transaction Brokerage / Non-Agency:</strong> A facilitator relationship where the licensee assists both parties with paperwork and administrative tasks but does not represent either party or owe fiduciary duties.</li>
          </ul>
        `
      }
    ]
  },
  'Contracts & Transactions': {
    icon: BookOpen,
    sections: [
      {
        title: 'Essential Elements of a Valid Contract (C.O.A.L.)',
        content: `
          <h3>Contract Validity Requirements</h3>
          <p>For a real estate contract to be legally binding and enforceable, it must contain these core elements (<strong>C.O.A.L.</strong>):</p>
          <ul>
            <li><strong>C - Competent Parties:</strong> Parties must be of legal age (usually 18), mentally competent, and sober at the time of signing.</li>
            <li><strong>O - Offer and Acceptance:</strong> A meeting of the minds where an offer is made and accepted without modifications. Any change to an offer creates a counteroffer, which completely voids the original offer.</li>
            <li><strong>A - Consideration:</strong> Something of value exchanged to bind the contract. This can be money, goods, promises, or services. (Note: Earnest money deposit is not legal consideration, it is a show of good faith).</li>
            <li><strong>L - Lawful Object:</strong> The purpose of the contract must be legal. Contracts to perform illegal acts are void from inception.</li>
          </ul>

          <h3>Statute of Frauds</h3>
          <p>A state law requiring all contracts for the transfer or sale of real estate, and leases lasting longer than one year, to be in writing and signed to be legally enforceable in court.</p>
        `
      },
      {
        title: 'Listing and Purchase Agreements',
        content: `
          <h3>Common Listing Agreements</h3>
          <ul>
            <li><strong>Exclusive Right-to-Sell:</strong> The broker gets paid a commission regardless of who finds the buyer, even if the seller finds the buyer themselves. (Provides maximum protection for the broker).</li>
            <li><strong>Exclusive Agency:</strong> The broker is the only agency authorized to market the home, but if the seller finds the buyer independently, no commission is owed.</li>
            <li><strong>Open Listing:</strong> The seller can hire multiple brokers. Only the broker who is the procuring cause of the sale gets paid. If the seller finds a buyer, no one gets paid.</li>
          </ul>
        `
      }
    ]
  },
  'Financing & Valuation': {
    icon: Info,
    sections: [
      {
        title: 'Mortgages & Debt Instruments',
        content: `
          <h3>Promissory Note vs. Security Instrument</h3>
          <ul>
            <li><strong>Promissory Note:</strong> The borrower's personal, written promise to pay back the loan amount. It acts as the evidence of the debt and details interest rates, payments, and loan terms.</li>
            <li><strong>Mortgage / Deed of Trust:</strong> The security instrument that hypothecates the property as collateral for the loan. If the borrower defaults, the lender forecloses on this security instrument.</li>
          </ul>

          <h3>Government-Backed Loan Programs</h3>
          <ul>
            <li><strong>FHA Loans:</strong> Insured by the Federal Housing Administration. FHA doesn't lend money directly; it protects lenders against default, allowing lower down payments (typically 3.5%) and flexible credit guidelines.</li>
            <li><strong>VA Loans:</strong> Guaranteed by the Department of Veterans Affairs for eligible veterans. Allows up to 100% financing (no down payment required) and does not require private mortgage insurance (PMI).</li>
          </ul>
        `
      },
      {
        title: 'Appraisal & Approaches to Value',
        content: `
          <h3>The Three Approaches to Value</h3>
          <p>Appraisers use three primary methods to estimate a property's market value:</p>
          <ul>
            <li><strong>Sales Comparison (Market Data) Approach:</strong> Compares the subject property with recently sold comparable properties in the immediate area. Primarily used for residential homes and vacant land.</li>
            <li><strong>Cost Approach:</strong> Estimates the cost to replace or reproduce the building improvements, subtracts accrued depreciation, and adds the value of the land. Used for unique properties (churches, schools, libraries).</li>
            <li><strong>Income Capitalization Approach:</strong> Estimates value based on the property's ability to generate rent. Capitalizes Net Operating Income (NOI) using a capitalization rate: Value = NOI / Cap Rate. Used for commercial properties and apartment buildings.</li>
          </ul>
        `
      }
    ]
  },
  'Real Estate Math Prep': {
    icon: Zap,
    sections: [
      {
        title: 'Essential Formulas and Calculations',
        content: `
          <h3>Key Mathematical Calculations</h3>
          
          <h4>1. Capitalization Rate Formula (I = R x V)</h4>
          <p>Used to calculate value, rate of return, or Net Operating Income (NOI):</p>
          <ul>
            <li><strong>Income (NOI)</strong> = Cap Rate (R) &times; Value (V)</li>
            <li><strong>Value (V)</strong> = NOI (I) / Cap Rate (R)</li>
            <li><strong>Cap Rate (R)</strong> = NOI (I) / Value (V)</li>
          </ul>

          <h4>2. Property Tax Math (Millage)</h4>
          <p>Real estate taxes are calculated based on assessed value and millage rates (1 mill = 0.001 or $1 per $1,000 of value):</p>
          <div style="background-color: #f3f4f6; padding: 1rem; border-radius: 0.5rem; margin: 1rem 0;">
            <p><strong>Formula:</strong> Tax = Assessed Value &times; (Mills / 1,000)</p>
            <p><em>Example:</em> A property assessed at $200,000 with a tax rate of 35 mills pays:<br/>
            $200,000 &times; 0.035 = $7,000 tax.</p>
          </div>

          <h4>3. Commission Splits</h4>
          <p>Total commissions are split between listing and selling brokerages, and then split again between the brokerage and the individual salesperson:</p>
          <div style="background-color: #f3f4f6; padding: 1rem; border-radius: 0.5rem; margin: 1rem 0;">
            <p><strong>Example:</strong> $300,000 sale at 6% commission = $18,000 total commission.<br/>
            If split 50/50 between brokerages, each brokerage gets $9,000.<br/>
            If an agent has a 70/30 split with their broker, the agent receives:<br/>
            $9,000 &times; 0.70 = $6,300.</p>
          </div>
        `
      }
    ]
  }
};

export function RevisionGuidePageContent({ state }: RevisionGuidePageProps) {
  const [loading, setLoading] = useState(true)
  const [selectedSection, setSelectedSection] = useState<string>('')
  const [currentRevisionContent, setCurrentRevisionContent] = useState<Record<string, any>>(revisionContent)

  const router = useRouter()
  const { user, isPremium, signOut, loading: authLoading } = useAuth()
  const stateInfo = STATES[state as StateKey]

  // Load state-specific revision content
  useEffect(() => {
    const loadContent = async () => {
      const stateContent = await loadStateRevisionContent(state)
      const merged: Record<string, any> = { ...revisionContent }
      if (stateContent) {
        Object.keys(stateContent).forEach(key => {
          if (merged[key]) {
            merged[key] = {
              ...merged[key],
              sections: [...stateContent[key].sections, ...merged[key].sections]
            }
          } else {
            merged[key] = stateContent[key]
          }
        })
      }
      setCurrentRevisionContent(merged)
      setSelectedSection(Object.keys(merged)[0])
    }
    loadContent()
  }, [state])

  // Redirect non-premium users and set last active state
  useEffect(() => {
    if (!authLoading) {
      if (!user || !isPremium) {
        router.push(`/state/${state}/free`)
      } else {
        // Update last active state when a premium user lands here
        updateLastActiveState(user.uid, state)
      }
    }
  }, [user, isPremium, state, router, authLoading])
  
  useEffect(() => {
    if (user && isPremium) {
      setLoading(false)
    }
  }, [user, isPremium])

  const handleLogin = () => {
    router.push(`/state/${state}/free`)
  }

  const handleSignup = () => {
    router.push(`/state/${state}/free`)
  }

  const handleLogout = async () => {
    await signOut()
    router.push('/')
  }

  const handleDashboard = () => {
    router.push(`/dashboard?state=${state}`)
  }

  const handleBackToDashboard = () => {
    router.push(`/dashboard?state=${state}`)
  }

  // Show access denied for non-premium users
  if (!authLoading && (!user || !isPremium)) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <Lock className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <CardTitle>Premium Access Required</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-600 mb-4">
              Revision Guide access requires premium membership. Redirecting...
            </p>
          </CardContent>
        </Card>
      </div>
    )
  }

  const currentSection = currentRevisionContent[selectedSection as keyof typeof currentRevisionContent]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation
        user={user}
        isPremium={isPremium}
        onLogin={handleLogin}
        onSignup={handleSignup}
        onLogout={handleLogout}
        onDashboard={handleDashboard}
        isLoading={authLoading}
      />

      {/* Banner */}
      <div className="w-full text-white" style={{ backgroundColor: '#7c3aed' }}>
        <div className="container mx-auto px-4 py-2.5 md:py-3.5 flex flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 md:w-5 md:h-5 shrink-0" style={{ color: 'rgba(255,255,255,0.75)' }} />
            <h1 className="text-sm md:text-base font-bold whitespace-nowrap">
              {STATES[state as StateKey]?.name} - Revision Guide
            </h1>
          </div>
          <div className="flex items-center gap-1.5">
            <Button
              onClick={handleBackToDashboard}
              size="sm"
              className="bg-white hover:bg-gray-50 font-bold px-3 py-1.5 h-auto text-xs md:text-sm rounded-lg shadow-sm"
              style={{ color: '#7c3aed' }}
            >
              <ArrowLeft className="w-3.5 h-3.5 mr-1.5" />
              Back to Dashboard
            </Button>
          </div>
        </div>
      </div>

      {authLoading || loading ? (
        <div className="pt-20">
          <FeaturePageSkeleton />
        </div>
      ) : (
        <main className="container mx-auto px-4 py-8">

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    Study Topics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {Object.keys(currentRevisionContent).map((topic) => {
                      const IconComponent = currentRevisionContent[topic as keyof typeof currentRevisionContent].icon
                      return (
                        <button
                          key={topic}
                          onClick={() => setSelectedSection(topic)}
                          className={`w-full text-left p-3 rounded-lg transition-colors ${selectedSection === topic
                            ? 'border'
                            : 'hover:bg-gray-100 text-gray-700'
                            }`}
                          style={selectedSection === topic ? { backgroundColor: 'rgba(124,58,237,0.08)', color: '#7c3aed', borderColor: 'rgba(124,58,237,0.3)' } : {}}
                        >
                          <div className="flex items-center gap-2">
                            <IconComponent className="w-4 h-4" />
                            <span className="text-sm font-medium">{topic}</span>
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {currentSection && <currentSection.icon className="w-6 h-6" />}
                    {selectedSection}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    {currentSection?.sections.map((section: any, index: number) => (
                      <div key={index} className="border-b border-gray-200 last:border-b-0 pb-6 last:pb-0">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                          <Zap className="w-5 h-5" style={{ color: '#7c3aed' }} />
                          {section.title}
                        </h2>

                        <div
                          className="prose prose-blue max-w-none"
                          dangerouslySetInnerHTML={{ __html: section.content }}
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Tips Card */}
              <div className="mt-5 grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-5" style={{ border: '1px solid rgba(0,0,0,0.12)' }}>
                  <h3 className="text-base font-semibold text-black mb-4 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" style={{ color: '#7c3aed' }} />
                    Effective Study
                  </h3>
                  <div className="space-y-3">
                    {['Review material multiple times', 'Take practice tests regularly', 'Study in short, focused sessions', 'Ask questions when unclear'].map((tip, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: 'rgba(124,58,237,0.12)' }}>
                          <span className="text-[10px] font-bold" style={{ color: '#7c3aed' }}>{i + 1}</span>
                        </div>
                        <span className="text-sm text-gray-700">{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-lg p-5" style={{ border: '1px solid rgba(0,0,0,0.12)' }}>
                  <h3 className="text-base font-semibold text-black mb-4 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" style={{ color: '#7c3aed' }} />
                    Test Day
                  </h3>
                  <div className="space-y-3">
                    {["Get a good night's sleep", 'Arrive early to the test center', 'Read questions carefully', 'Stay calm and confident'].map((tip, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#7c3aed' }} />
                        <span className="text-sm text-gray-700">{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
      <SlimFooter />
    </div>
  )
}