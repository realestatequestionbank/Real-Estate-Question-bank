'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/auth-context'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  MapPin,
  ArrowLeft,
  Search,
  Filter,
  Lock,
  Loader2,
  AlertTriangle,
  StopCircle,
  Triangle,
  Octagon,
  Circle,
  Square
} from 'lucide-react'
import { STATES, type StateKey } from '@/lib/constants'
import { updateLastActiveState } from '@/lib/services/progress-service'
import { FeaturePageSkeleton } from '@/components/skeletons/feature-page-skeleton'

interface RoadSignsPageProps {
  state: string
}

// Map sign names to their corresponding image files
const signImageMap: { [key: string]: string } = {
  'Solid Red Light': 'solid-red-light.png',
  'Red Arrow': 'red-arrow.png',
  'Flashing Red Light': 'flashing-red-light.png',
  'Solid Yellow Light': 'solid-yellow-light.png',
  'Yellow Arrow': 'yellow-arrow.png',
  'Flashing Yellow Light': 'flashing-yellow-light.png',
  'Flashing Yellow Arrow': 'flashing-yellow-arrow.png',
  'Don\'t Walk Signal': 'dont-walk-signal.png',
  'Diagonal Crossing': 'diagonal-crossing.png',
  'Stop Sign': 'stop-sign.png',
  'Yield Sign': 'yield-sign.png',
  'Do Not Enter': 'do-not-enter.png',
  'Wrong Way': 'wrong-way.png'
}

const signCategories = {
  'Traffic Signals': {
    icon: Circle,
    color: 'bg-blue-600',
    description: 'Traffic lights and signals that control vehicle and pedestrian movement',
    signs: [
      { name: 'Solid Red Light', shape: 'Circle', color: 'Red', meaning: 'STOP - Do not proceed until green light appears' },
      { name: 'Red Arrow', shape: 'Arrow', color: 'Red', meaning: 'STOP - Do not turn at red arrow, remain stopped until green signal appears' },
      { name: 'Flashing Red Light', shape: 'Circle', color: 'Flashing Red', meaning: 'STOP - After stopping, proceed when safe' },
      { name: 'Solid Yellow Light', shape: 'Circle', color: 'Yellow', meaning: 'CAUTION - Light is about to turn red' },
      { name: 'Yellow Arrow', shape: 'Arrow', color: 'Yellow', meaning: 'Protected turning time is ending, signal will change soon' },
      { name: 'Flashing Yellow Light', shape: 'Circle', color: 'Flashing Yellow', meaning: 'WARNING - Proceed with caution, slow down and be alert' },
      { name: 'Flashing Yellow Arrow', shape: 'Arrow', color: 'Flashing Yellow', meaning: 'Turn permitted but not protected, yield to oncoming traffic' },
      { name: 'Don\'t Walk Signal', shape: 'Rectangle', color: 'Red/White', meaning: 'Pedestrians may not cross the street' },
      { name: 'Diagonal Crossing', shape: 'Square', color: 'White/Black', meaning: 'Crisscross crosswalks allowing pedestrians to cross in any direction' }
    ]
  },
  'Regulatory Signs': {
    icon: StopCircle,
    color: 'bg-red-500',
    description: 'Signs that give commands, show rules, and indicate what drivers must or must not do',
    signs: [
      { name: 'Stop Sign', shape: 'Octagon', color: 'Red/White', meaning: 'Come to a complete stop, yield to traffic and pedestrians before proceeding' },
      { name: 'Yield Sign', shape: 'Triangle', color: 'Red/White', meaning: 'Slow down and be ready to stop, let vehicles, bicyclists, or pedestrians pass' },
      { name: 'Do Not Enter', shape: 'Rectangle', color: 'Red/White', meaning: 'Do not enter the road or ramp where sign is posted' },
      { name: 'Wrong Way', shape: 'Rectangle', color: 'Red/White', meaning: 'You are going against traffic, back out or turn around when safe' },
      { name: 'No U-Turn', shape: 'Circle', color: 'White/Red', meaning: 'Prohibits drivers from making a U-shaped turn to reverse direction' },
      { name: 'No Left Turn', shape: 'Circle', color: 'White/Red', meaning: 'Prohibits drivers from making a left turn at the intersection' },
      { name: 'No Right Turn', shape: 'Circle', color: 'White/Red', meaning: 'Prohibits drivers from making a right turn at the intersection' },
      { name: 'No Turns', shape: 'Rectangle', color: 'White/Black', meaning: 'Prohibits all turns (left and right) at intersection or roadway' },
      { name: 'No Parking Any Time', shape: 'Rectangle', color: 'White/Red', meaning: 'Prohibits parking at any time in the posted area' },
      { name: 'Do Not Pass', shape: 'Rectangle', color: 'White/Black', meaning: 'Prohibits overtaking or passing other vehicles on the road' },
      { name: 'One Way', shape: 'Rectangle', color: 'Black/White', meaning: 'Traffic flows in only one direction on this road' },
      { name: 'Left Turn Only', shape: 'Rectangle', color: 'White/Black', meaning: 'Vehicles must turn left, no other movements allowed' },
      { name: 'Left and U-Turn', shape: 'Rectangle', color: 'White/Black', meaning: 'Vehicle can turn either left or take a U-turn from this lane' },
      { name: 'Do Not Block Intersection', shape: 'Rectangle', color: 'White/Black', meaning: 'Prohibits stopping or standing in intersection, keep it clear' },
      { name: 'Left Turn Yield on Green', shape: 'Rectangle', color: 'White/Green', meaning: 'Drivers making left turn on green light must yield to oncoming traffic' }
    ]
  },
  'Warning Signs': {
    icon: Triangle,
    color: 'bg-yellow-500',
    description: 'Yellow diamond-shaped signs that warn of road conditions and hazards ahead',
    signs: [
      { name: 'Railroad Crossing', shape: 'Circle/X-Shape', color: 'Yellow/Black', meaning: 'Approaching railroad crossing - look, listen, slow down, prepare to stop' },
      { name: 'School Zone', shape: 'Pentagon', color: 'Yellow/Black', meaning: 'Near a school - drive slowly and stop for children in crosswalk' },
      { name: 'Deer Crossing', shape: 'Diamond', color: 'Yellow/Black', meaning: 'Warns drivers that deer may be crossing on the street' },
      { name: 'Slow Moving Vehicle', shape: 'Triangle', color: 'Orange/Red', meaning: 'Vehicle traveling slower than typical traffic' },
      { name: 'Slippery When Wet', shape: 'Diamond', color: 'Yellow/Black', meaning: 'Road becomes slippery in wet conditions, increasing skid risk' },
      { name: 'Merging Traffic', shape: 'Diamond', color: 'Yellow/Black', meaning: 'Alerts drivers to vehicles entering main road from side road or ramp' },
      { name: 'Divided Highway', shape: 'Diamond', color: 'Yellow/Black', meaning: 'Indicates start of road separated by median or barrier' },
      { name: 'Two Way Traffic', shape: 'Diamond', color: 'Yellow/Black', meaning: 'Warns of traffic flowing in both directions on undivided road' },
      { name: 'Lane Ends', shape: 'Diamond', color: 'Yellow/Black', meaning: 'Indicates lane is ending, requiring drivers to merge' },
      { name: 'End Divided Highway', shape: 'Diamond', color: 'Yellow/Black', meaning: 'End of median-separated road, transitioning to undivided traffic' },
      { name: 'Traffic Signal Ahead', shape: 'Diamond', color: 'Yellow/Black', meaning: 'Warns of an upcoming traffic light' },
      { name: 'Pedestrian Crossing', shape: 'Diamond', color: 'Yellow/Black', meaning: 'Alerts drivers to designated area where pedestrians may cross' },
      { name: 'Added Lane', shape: 'Diamond', color: 'Yellow/Black', meaning: 'New lane joining road without merging required from main traffic' },
      { name: 'Crossroad', shape: 'Diamond', color: 'Yellow/Black', meaning: 'Warns of intersecting road where other vehicles may cross' },
      { name: 'Stop Ahead', shape: 'Diamond', color: 'Yellow/Black', meaning: 'Alerts drivers to an upcoming stop sign' },
      { name: 'Yield Ahead', shape: 'Diamond', color: 'Yellow/Black', meaning: 'Warns drivers of upcoming yield sign requiring them to slow down' },
      { name: 'Hill Ahead', shape: 'Diamond', color: 'Yellow/Black', meaning: 'Sign shows there is a hill ahead' },
      { name: 'No Passing Zone', shape: 'Triangle', color: 'Yellow/Black', meaning: 'Sign shows that passing is not allowed here' },
      { name: 'Winding Road', shape: 'Diamond', color: 'Yellow/Black', meaning: 'Indicates a series of curves or turns ahead' }
    ]
  },
  'Traffic Control Signs': {
    icon: Square,
    color: 'bg-green-600',
    description: 'Signs that direct traffic flow and lane usage',
    signs: [
      { name: 'Slower Traffic Keep Right', shape: 'Rectangle', color: 'White/Black', meaning: 'Directs slower-moving vehicles to stay in the right lane' },
      { name: 'Keep Right', shape: 'Rectangle', color: 'White/Black', meaning: 'Instructs drivers to stay to the right of median, obstacle, or island' },
      { name: 'Through Traffic Should Merge Left', shape: 'Diamond', color: 'Orange/Black', meaning: 'Directs through traffic to merge into the left lane' }
    ]
  },
  'Construction Signs': {
    icon: AlertTriangle,
    color: 'bg-orange-500',
    description: 'Orange signs indicating work zones and temporary road conditions',
    signs: [
      { name: 'Construction Zone', shape: 'Diamond', color: 'Orange/Black', meaning: 'Highway construction and maintenance area ahead' },
      { name: 'Shoulder Work Ahead', shape: 'Diamond', color: 'Orange/Black', meaning: 'Warns of construction or maintenance work on road shoulder' },
      { name: 'Work Zone', shape: 'Diamond', color: 'Orange/Black', meaning: 'Construction or maintenance ahead, reduce speed' },
      { name: 'Lane Closed', shape: 'Rectangle', color: 'Orange/Black', meaning: 'Traffic lane not available, merge when safe' },
      { name: 'Detour', shape: 'Rectangle', color: 'Orange/Black', meaning: 'Alternate route required due to road closure' },
      { name: 'Flagman Ahead', shape: 'Diamond', color: 'Orange/Black', meaning: 'Human traffic control ahead, follow flagman directions' }
    ]
  },
  'Special Information': {
    icon: Square,
    color: 'bg-blue-500',
    description: 'Special signs providing important safety and emergency information',
    signs: [
      { name: 'Railroad Emergency Sign', shape: 'Rectangle', color: 'Blue/White', meaning: 'Information for emergencies on or near tracks, or if vehicle stalls on tracks' }
    ]
  }
}

export function RoadSignsPageContent({ state }: RoadSignsPageProps) {
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<string>('Traffic Signals')
  const [searchTerm, setSearchTerm] = useState('')

  const router = useRouter()
  const { user, userData, isPremium, signOut, loading: authLoading } = useAuth()
  const stateInfo = STATES[state as StateKey]

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
  }, [user, isPremium, state])

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
              Road Signs Guide requires premium membership. Redirecting...
            </p>
          </CardContent>
        </Card>
      </div>
    )
  }

  const currentCategory = signCategories[selectedCategory as keyof typeof signCategories]
  const filteredSigns = currentCategory.signs.filter(sign =>
    sign.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sign.meaning.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation
        user={user}
        isPremium={isPremium}
        onLogin={handleLogin}
        onSignup={handleSignup}
        onLogout={handleLogout}
        onDashboard={() => router.push(`/dashboard?state=${state}`)}
        isLoading={authLoading}
      />

      {authLoading || loading ? (
        <div className="pt-20">
          <FeaturePageSkeleton />
        </div>
      ) : (
        <main className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <Button variant="outline" onClick={handleBackToDashboard}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
            </div>

            <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg p-6">
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="w-8 h-8" />
                <h1 className="text-3xl font-bold">Road Signs Guide</h1>
              </div>
              <p className="text-red-100">
                {stateInfo?.emoji} {stateInfo?.name} | Comprehensive Visual Reference
              </p>
            </div>
          </div>


          <div className="grid lg:grid-cols-4 gap-8">
            {/* Category Navigation */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Filter className="w-5 h-5" />
                    Sign Categories
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {Object.keys(signCategories).map((category) => {
                      const categoryInfo = signCategories[category as keyof typeof signCategories]
                      const IconComponent = categoryInfo.icon
                      return (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className={`w-full text-left p-3 rounded-lg transition-colors ${selectedCategory === category
                            ? 'bg-blue-100 text-blue-800 border border-blue-300'
                            : 'hover:bg-gray-100 text-gray-700'
                            }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded ${categoryInfo.color} flex items-center justify-center`}>
                              <IconComponent className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-sm font-medium">{category}</span>
                          </div>
                        </button>
                      )
                    })}
                  </div>

                  {/* Search */}
                  <div className="mt-6">
                    <div className="relative">
                      <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search signs..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Signs Content */}
            <div className="lg:col-span-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {currentCategory && <currentCategory.icon className="w-6 h-6" />}
                    {selectedCategory}
                  </CardTitle>
                  <p className="text-gray-600 mt-2">{currentCategory?.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {filteredSigns.map((sign, index) => (
                      <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-4">
                          {/* Sign Visual Representation */}
                          <div className="w-16 h-16 flex items-center justify-center flex-shrink-0">
                            {signImageMap[sign.name] ? (
                              <img
                                src={`/images/road-signs/${signImageMap[sign.name]}`}
                                alt={sign.name}
                                className="w-14 h-14 object-contain"
                                onError={(e) => {
                                  // Fallback to placeholder if image fails to load
                                  e.currentTarget.style.display = 'none';
                                  const nextSibling = e.currentTarget.nextElementSibling as HTMLElement;
                                  if (nextSibling) {
                                    nextSibling.style.display = 'flex';
                                  }
                                }}
                              />
                            ) : null}
                            <div className={`w-14 h-14 bg-gray-200 rounded-lg flex items-center justify-center ${signImageMap[sign.name] ? 'hidden' : ''}`}>
                              <span className="text-xs text-gray-600 text-center leading-tight">
                                {sign.shape}
                              </span>
                            </div>
                          </div>

                          {/* Sign Information */}
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 mb-1">{sign.name}</h3>
                            <p className="text-sm text-gray-600 mb-2">{sign.meaning}</p>

                            <div className="flex gap-2 text-xs">
                              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                                {sign.shape}
                              </span>
                              <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded">
                                {sign.color}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {filteredSigns.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                      <MapPin className="w-12 h-12 mx-auto mb-2 opacity-50" />
                      <p>No signs found matching your search</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Sign Shapes and Colors Guide */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Understanding Sign Shapes and Colors</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Sign Shapes</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-3">
                          <Octagon className="w-5 h-5 text-red-600" />
                          <span><strong>Octagon:</strong> Stop signs only</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Triangle className="w-5 h-5 text-red-600" />
                          <span><strong>Triangle:</strong> Yield signs</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Square className="w-5 h-5 text-yellow-600" />
                          <span><strong>Diamond:</strong> Warning signs</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Circle className="w-5 h-5 text-gray-600" />
                          <span><strong>Circle:</strong> Railroad crossing</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Sign Colors</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-3">
                          <div className="w-4 h-4 bg-red-500 rounded"></div>
                          <span><strong>Red:</strong> Stop, prohibition, danger</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                          <span><strong>Yellow:</strong> Warning, caution</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-4 h-4 bg-green-500 rounded"></div>
                          <span><strong>Green:</strong> Direction, guidance</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-4 h-4 bg-blue-500 rounded"></div>
                          <span><strong>Blue:</strong> Motorist services</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-4 h-4 bg-orange-500 rounded"></div>
                          <span><strong>Orange:</strong> Construction zones</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      )}
      <Footer />
    </div>
  )
}