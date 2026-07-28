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
  Loader2,
  Target,
  AlertTriangle,
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
    const module = await import(`@/lib/data/revision-guides/${state}.ts`)
    return module[`${state}RevisionContent`]
  } catch (error) {
    console.log(`No state-specific revision guide found for ${state}, using default content`)
    return null
  }
}

interface RevisionGuidePageProps {
  state: string
}

const revisionContent = {
  'Traffic Laws and Regulations': {
    icon: Target,
    sections: [
      {
        title: 'Speed Limits',
        content: `
          <h3>Standard Speed Limits</h3>
          <ul>
            <li><strong>Residential areas:</strong> 25 mph (unless posted otherwise)</li>
            <li><strong>Business districts:</strong> 25 mph</li>
            <li><strong>School zones:</strong> 15-25 mph when children present</li>
            <li><strong>Highways:</strong> 55-80 mph (varies by state and road type)</li>
          </ul>
          
          <h3>Key Points</h3>
          <ul>
            <li>Always drive according to conditions, not just posted limits</li>
            <li>Reduce speed in poor weather, heavy traffic, or low visibility</li>
            <li>School zone limits are strictly enforced during school hours</li>
          </ul>
        `
      },
      {
        title: 'Right-of-Way Rules',
        content: `
          <h3>Basic Right-of-Way</h3>
          <ul>
            <li><strong>At intersections:</strong> Vehicle on the right has right-of-way</li>
            <li><strong>Turning left:</strong> Must yield to oncoming traffic</li>
            <li><strong>Emergency vehicles:</strong> Always yield and pull over</li>
            <li><strong>Pedestrians:</strong> Always have right-of-way in crosswalks</li>
          </ul>
          
          <h3>Special Situations</h3>
          <ul>
            <li>Yield signs: Stop only if traffic is coming</li>
            <li>Roundabouts: Traffic in the circle has right-of-way</li>
            <li>Four-way stops: First to stop, first to go</li>
          </ul>
        `
      }
    ]
  },
  'Road Signs and Signals': {
    icon: AlertTriangle,
    sections: [
      {
        title: 'Warning Signs (Yellow)',
        content: `
          <h3>Common Warning Signs</h3>
          <ul>
            <li><strong>Curve ahead:</strong> Reduce speed before the curve</li>
            <li><strong>Pedestrian crossing:</strong> Watch for people crossing</li>
            <li><strong>School zone:</strong> Reduce speed when children present</li>
            <li><strong>Animal crossing:</strong> Watch for wildlife</li>
          </ul>
          
          <h3>Construction Signs</h3>
          <ul>
            <li>Orange signs indicate work zones</li>
            <li>Reduce speed and merge carefully</li>
            <li>Workers present - double fines may apply</li>
          </ul>
        `
      },
      {
        title: 'Regulatory Signs (White/Red)',
        content: `
          <h3>Stop and Yield</h3>
          <ul>
            <li><strong>STOP:</strong> Come to complete stop at the line</li>
            <li><strong>YIELD:</strong> Slow down, stop if necessary</li>
            <li><strong>DO NOT ENTER:</strong> Wrong way - turn around</li>
            <li><strong>NO TURN ON RED:</strong> Wait for green light</li>
          </ul>
          
          <h3>Speed and Parking</h3>
          <ul>
            <li>Speed limit signs show maximum safe speed</li>
            <li>No parking zones are strictly enforced</li>
            <li>One-way streets require careful attention</li>
          </ul>
        `
      }
    ]
  },
  'Safe Driving Practices': {
    icon: CheckCircle,
    sections: [
      {
        title: 'Following Distance',
        content: `
          <h3>3-Second Rule</h3>
          <ul>
            <li>Pick a fixed object ahead of the car in front</li>
            <li>Count "one-thousand-one, one-thousand-two, one-thousand-three"</li>
            <li>If you reach the object before finishing, you're too close</li>
            <li>Increase distance in poor conditions (rain, fog, etc.)</li>
          </ul>
          
          <h3>Adverse Conditions</h3>
          <ul>
            <li><strong>Rain:</strong> 4-6 second following distance</li>
            <li><strong>Snow/Ice:</strong> 8-10 second following distance</li>
            <li><strong>Fog:</strong> Use low beams, reduce speed significantly</li>
          </ul>
        `
      },
      {
        title: 'Defensive Driving',
        content: `
          <h3>Stay Alert</h3>
          <ul>
            <li>Scan the road constantly - look ahead, behind, and to sides</li>
            <li>Check mirrors every 5-8 seconds</li>
            <li>Watch for potential hazards (pedestrians, cyclists, other vehicles)</li>
            <li>Never assume other drivers will follow traffic laws</li>
          </ul>
          
          <h3>Communication</h3>
          <ul>
            <li>Use turn signals early and consistently</li>
            <li>Make eye contact with pedestrians when possible</li>
            <li>Use horn sparingly and only when necessary for safety</li>
          </ul>
        `
      }
    ]
  },
  'Parking and Stopping': {
    icon: Info,
    sections: [
      {
        title: 'Parallel Parking',
        content: `
          <h3>Step-by-Step Process</h3>
          <ul>
            <li><strong>Step 1:</strong> Find a space 6 feet longer than your car</li>
            <li><strong>Step 2:</strong> Pull alongside the front car, mirrors aligned</li>
            <li><strong>Step 3:</strong> Reverse with wheel turned right until 45° angle</li>
            <li><strong>Step 4:</strong> Straighten wheel and continue backing</li>
            <li><strong>Step 5:</strong> Turn wheel left to straighten the car</li>
          </ul>
          
          <h3>Tips for Success</h3>
          <ul>
            <li>Practice makes perfect - use cones or markers</li>
            <li>Take your time - rushing leads to mistakes</li>
            <li>Use reference points consistently</li>
          </ul>
        `
      },
      {
        title: 'Parking Restrictions',
        content: `
          <h3>Where NOT to Park</h3>
          <ul>
            <li>Within 15 feet of a fire hydrant</li>
            <li>Within 20 feet of a crosswalk</li>
            <li>Within 30 feet of a stop sign or traffic light</li>
            <li>In front of a driveway or blocking traffic</li>
            <li>On a sidewalk or in a bike lane</li>
          </ul>
          
          <h3>Hill Parking</h3>
          <ul>
            <li><strong>Uphill with curb:</strong> Turn wheels away from curb</li>
            <li><strong>Downhill with curb:</strong> Turn wheels toward curb</li>
            <li><strong>No curb:</strong> Turn wheels toward shoulder</li>
            <li>Always set parking brake on hills</li>
          </ul>
        `
      }
    ]
  }
}

export function RevisionGuidePageContent({ state }: RevisionGuidePageProps) {
  const [loading, setLoading] = useState(true)
  const [selectedSection, setSelectedSection] = useState<string>('')
  const [currentRevisionContent, setCurrentRevisionContent] = useState(revisionContent)

  const router = useRouter()
  const { user, userData, isPremium, signOut, loading: authLoading } = useAuth()
  const stateInfo = STATES[state as StateKey]

  // Load state-specific revision content
  useEffect(() => {
    const loadContent = async () => {
      const stateContent = await loadStateRevisionContent(state)
      if (stateContent) {
        setCurrentRevisionContent(stateContent)
        setSelectedSection(Object.keys(stateContent)[0])
      } else {
        setCurrentRevisionContent(revisionContent)
        setSelectedSection('Traffic Laws and Regulations')
      }
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
                    {currentSection?.sections.map((section, index) => (
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