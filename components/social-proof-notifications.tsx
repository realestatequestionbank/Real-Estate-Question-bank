'use client'

import { useState, useEffect } from 'react'
import { CheckCircle, X } from 'lucide-react'

interface Purchase {
  name: string
  state: string
  plan: string
  timeAgo: string
}

// Pool of diverse names to use for any state
const NAME_POOL = [
  "Sarah M.", "Michael R.", "Jessica L.", "David C.", "Amanda K.", "Priya S.", 
  "James P.", "Emily W.", "Robert T.", "Lisa H.", "Kevin J.", "Arjun P.",
  "Michelle D.", "Brandon S.", "Ashley G.", "Tyler B.", "Nicole F.", "Ravi K.",
  "Joshua M.", "Stephanie R.", "Andrew L.", "Megan K.", "Christopher P.", "Neha M.",
  "Rachel W.", "Daniel T.", "Lauren H.", "Matthew C.", "Samantha D.", "Ryan J.",
  "Kimberly S.", "Justin B.", "Hannah F.", "Vikram R.", "Noah G."
]

// CDL candidates specific names (more truck-driver aligned names)
const CDL_NAME_POOL = [
  "Gary T.", "Marcus D.", "Bill K.", "Dave L.", "Roy S.", "Frank B.", "Jose R.", 
  "Robert M.", "Dan W.", "Wayne H.", "Linda S.", "Steve P.", "John C.", "Kelly R.", 
  "Rick G.", "Travis B.", "Mitch F.", "Tina K.", "Ronnie J.", "Clint M.", "Cody L.", 
  "Brad S.", "Derrick H.", "Troy P.", "Jesse W.", "Hector A.", "Darrell V.", "Al K.", 
  "Gene R.", "Wade S.", "Jimmy P.", "Kurt F.", "Ray M.", "Floyd J.", "Leon B."
]

const TIME_OPTIONS = [
  "2 minutes ago", "5 minutes ago", "8 minutes ago", "12 minutes ago", "15 minutes ago",
  "18 minutes ago", "22 minutes ago", "25 minutes ago", "28 minutes ago", "32 minutes ago",
  "35 minutes ago", "38 minutes ago", "42 minutes ago", "45 minutes ago", "48 minutes ago",
  "52 minutes ago", "55 minutes ago", "58 minutes ago", "1 hour ago"
]

const PLAN_OPTIONS = ["30-Day Premium", "7-Day Premium"]

// Generate state-specific purchases with consistent randomization
function generateStatePurchases(stateName: string, isCdl: boolean): Purchase[] {
  const namePool = isCdl ? CDL_NAME_POOL : NAME_POOL
  return namePool.map((name, index) => {
    // Use index as seed for consistent randomization
    const planSeed = (index * 7) % 100 // Simple pseudo-random based on index
    const timeSeed = (index * 11) % TIME_OPTIONS.length
    
    return {
      name,
      state: stateName,
      plan: isCdl ? "CDL Premium" : (planSeed > 25 ? "30-Day Premium" : "7-Day Premium"), // 75% choose 30-day
      timeAgo: TIME_OPTIONS[timeSeed]
    }
  })
}

interface SocialProofNotificationsProps {
  enabled?: boolean
  isPremiumUser?: boolean
  currentState?: string
  isCdl?: boolean
}

export function SocialProofNotifications({ 
  enabled = true, 
  isPremiumUser = false, 
  currentState,
  isCdl
}: SocialProofNotificationsProps) {
  
  const [currentPurchase, setCurrentPurchase] = useState<Purchase | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [purchaseIndex, setPurchaseIndex] = useState(() => Math.floor(Math.random() * 35))
  const [userActive, setUserActive] = useState(false)
  const [purchases, setPurchases] = useState<Purchase[]>([])


  // Generate purchases based on current state
  useEffect(() => {
    let stateDisplayName = "California" // fallback
    
    if (currentState) {
      // Map state keys to proper display names
      const stateNameMap: { [key: string]: string } = {
        'california': 'California',
        'texas': 'Texas',
        'florida': 'Florida',
        'new-york': 'New York',
        'illinois': 'Illinois',
        'pennsylvania': 'Pennsylvania',
        'ohio': 'Ohio',
        'georgia': 'Georgia',
        'north-carolina': 'North Carolina',
        'michigan': 'Michigan',
        'new-jersey': 'New Jersey',
        'virginia': 'Virginia',
        'washington': 'Washington',
        'arizona': 'Arizona',
        'massachusetts': 'Massachusetts',
        'tennessee': 'Tennessee',
        'indiana': 'Indiana',
        'maryland': 'Maryland',
        'missouri': 'Missouri',
        'wisconsin': 'Wisconsin',
        'colorado': 'Colorado',
        'minnesota': 'Minnesota',
        'south-carolina': 'South Carolina',
        'alabama': 'Alabama',
        'louisiana': 'Louisiana',
        'kentucky': 'Kentucky',
        'oregon': 'Oregon',
        'oklahoma': 'Oklahoma',
        'connecticut': 'Connecticut',
        'utah': 'Utah',
        'iowa': 'Iowa',
        'nevada': 'Nevada',
        'arkansas': 'Arkansas',
        'mississippi': 'Mississippi',
        'kansas': 'Kansas',
        'new-mexico': 'New Mexico',
        'nebraska': 'Nebraska',
        'west-virginia': 'West Virginia',
        'idaho': 'Idaho',
        'hawaii': 'Hawaii',
        'new-hampshire': 'New Hampshire',
        'maine': 'Maine',
        'montana': 'Montana',
        'rhode-island': 'Rhode Island',
        'delaware': 'Delaware',
        'south-dakota': 'South Dakota',
        'north-dakota': 'North Dakota',
        'alaska': 'Alaska',
        'vermont': 'Vermont',
        'wyoming': 'Wyoming'
      }
      
      stateDisplayName = stateNameMap[currentState] || "California"
    }
    
    const checkIsCdl = typeof window !== 'undefined' ? (window.location.pathname.includes('cdl') || !!isCdl) : !!isCdl
    const statePurchases = generateStatePurchases(stateDisplayName, checkIsCdl)
    setPurchases(statePurchases)
  }, [currentState, isCdl])

  useEffect(() => {
    if (!enabled) return
    
    if (purchases.length === 0) return

    // Randomize initial delay (3-8 seconds)
    const initialDelay = Math.random() * 5000 + 3000
    
    const initialTimeout = setTimeout(() => {
      showNextNotification()
    }, initialDelay)

    return () => clearTimeout(initialTimeout)
  }, [enabled, purchases])

  // Track user activity to pause notifications during engagement
  useEffect(() => {
    if (!enabled) return

    let activityTimer: NodeJS.Timeout

    const handleUserActivity = () => {
      setUserActive(true)
      clearTimeout(activityTimer)
      activityTimer = setTimeout(() => {
        setUserActive(false)
      }, 3000) // User is considered inactive after 3 seconds
    }

    // Listen for user interactions
    window.addEventListener('scroll', handleUserActivity)
    window.addEventListener('click', handleUserActivity)
    window.addEventListener('mousemove', handleUserActivity)

    return () => {
      window.removeEventListener('scroll', handleUserActivity)
      window.removeEventListener('click', handleUserActivity)
      window.removeEventListener('mousemove', handleUserActivity)
      clearTimeout(activityTimer)
    }
  }, [enabled])

  useEffect(() => {
    if (!enabled || !currentPurchase) return

    // Show notification for 4-6 seconds (randomized)
    const displayDuration = Math.random() * 2000 + 4000
    const hideTimeout = setTimeout(() => {
      setIsVisible(false)
    }, displayDuration)

    // Smart frequency based on time of day and randomness
    const getNextInterval = () => {
      const hour = new Date().getHours()
      let baseInterval: number

      // Peak hours (9 AM - 6 PM): More frequent activity
      if (hour >= 9 && hour <= 18) {
        baseInterval = Math.random() * 8000 + 7000 // 7-15 seconds
      }
      // Evening hours (6 PM - 11 PM): Medium activity  
      else if (hour >= 18 && hour <= 23) {
        baseInterval = Math.random() * 12000 + 10000 // 10-22 seconds
      }
      // Late night/early morning: Less frequent
      else {
        baseInterval = Math.random() * 20000 + 15000 // 15-35 seconds
      }

      return baseInterval
    }

    // Schedule next notification with smart timing, but pause if user is active
    const scheduleNext = () => {
      if (userActive) {
        // If user is active, check again in 2 seconds
        setTimeout(scheduleNext, 2000)
        return
      }
      showNextNotification()
    }

    const nextTimeout = setTimeout(scheduleNext, getNextInterval())

    return () => {
      clearTimeout(hideTimeout)
      clearTimeout(nextTimeout)
    }
  }, [currentPurchase, enabled, userActive])

  const showNextNotification = () => {
    if (purchases.length === 0) return
    
    const nextIndex = (purchaseIndex + 1) % purchases.length
    setPurchaseIndex(nextIndex)
    setCurrentPurchase(purchases[nextIndex])
    setIsVisible(true)
  }

  const handleDismiss = () => {
    setIsVisible(false)
  }

  if (!enabled || !currentPurchase || isPremiumUser) return null

  return (
    <>
      {/* Desktop Notification - Bottom Left */}
      <div className={`hidden md:block fixed bottom-6 left-6 z-50 transform transition-all duration-500 ease-in-out ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        }`}>
        <div className="bg-white border border-gray-200 rounded-2xl shadow-2xl p-4 min-w-[320px] max-w-[380px]">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-gray-900 truncate">
                  {currentPurchase.name}
                </p>
                <button
                  onClick={handleDismiss}
                  className="flex-shrink-0 ml-2 text-gray-400 hover:text-gray-600 p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-gray-600 mt-0.5">
                from {currentPurchase.state} just purchased
              </p>
              <p className="text-xs font-medium text-blue-600 mt-1">
                {currentPurchase.plan}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {currentPurchase.timeAgo}
              </p>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}