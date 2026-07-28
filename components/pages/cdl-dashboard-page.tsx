'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/auth-context'
import { Navigation } from '@/components/navigation'
import { PracticeInterface } from '@/components/practice/practice-interface'
import { MockExamInterface } from '@/components/practice/mock-exam-interface'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import {
  Crown, Book, Target, Award, Play, FileText, Lock, Loader2, BookOpen,
  ClipboardList, CheckCircle, Database, MapPin, Zap, Brain, AlertTriangle,
  Clock, TrendingUp, Check, Shield, MessageSquare, ArrowLeft, RotateCcw,
  Sparkles, CheckCircle2, ChevronRight, Flame
} from 'lucide-react'
import { STATES, type StateKey } from '@/lib/constants'
import { getUserProgress, resetChapterProgress, updateLastActiveState, savePracticeSession, saveMockExam } from '@/lib/services/progress-service'
import { Question, PracticeSession, MockExam, UserProgress } from '@/lib/types/question'
import { LoadingPage } from '@/components/ui/loading-page'

// CDL Categories metadata
interface CdlCategoryMeta {
  id: string
  name: string
  code: string
  totalQuestions: number
  mockCount: number
  description: string
  icon: any
}

const cdlCategories: CdlCategoryMeta[] = [
  {
    id: 'class_a',
    name: 'Class A General Knowledge',
    code: 'GK-A',
    totalQuestions: 397,
    mockCount: 50,
    description: 'Core test required for all Class A commercial drivers.',
    icon: Database
  },
  {
    id: 'class_b',
    name: 'Class B General Knowledge',
    code: 'GK-B',
    totalQuestions: 246,
    mockCount: 50,
    description: 'Core test required for all Class B commercial drivers.',
    icon: Database
  },
  {
    id: 'class_c',
    name: 'Class C General Knowledge',
    code: 'GK-C',
    totalQuestions: 246,
    mockCount: 50,
    description: 'Core test required for all Class C commercial drivers.',
    icon: Database
  },
  {
    id: 'air_brakes',
    name: 'Air Brakes',
    code: 'AB',
    totalQuestions: 175,
    mockCount: 25,
    description: 'Required for operating air brake-equipped vehicles.',
    icon: Zap
  },
  {
    id: 'combination',
    name: 'Combination Vehicles',
    code: 'CV',
    totalQuestions: 169,
    mockCount: 20,
    description: 'Required for pulling multiple trailers (Class A).',
    icon: Sparkles
  },
  {
    id: 'pre_trip',
    name: 'Pre-Trip Inspection',
    code: 'PT',
    totalQuestions: 115,
    mockCount: 50,
    description: 'Walkthrough inspection prep for the skills test.',
    icon: ClipboardList
  },
  {
    id: 'hazmat',
    name: 'Hazardous Materials (HazMat)',
    code: 'H',
    totalQuestions: 243,
    mockCount: 30,
    description: 'Endorsement for hauling hazardous materials.',
    icon: Brain
  },
  {
    id: 'passenger',
    name: 'Passenger Transport',
    code: 'P',
    totalQuestions: 328,
    mockCount: 20,
    description: 'Endorsement to drive passenger vehicles.',
    icon: BookOpen
  },
  {
    id: 'bus',
    name: 'School Bus',
    code: 'S',
    totalQuestions: 206,
    mockCount: 20,
    description: 'Endorsement to operate school buses.',
    icon: Award
  },
  {
    id: 'double',
    name: 'Double / Triple Trailers',
    code: 'T',
    totalQuestions: 356,
    mockCount: 20,
    description: 'Endorsement to pull multiple trailer setups.',
    icon: TrendingUp
  },
  {
    id: 'tank',
    name: 'Tanker Vehicles',
    code: 'N',
    totalQuestions: 345,
    mockCount: 20,
    description: 'Endorsement to drive bulk liquid cargo vehicles.',
    icon: Database
  },
  {
    id: 'ambulance',
    name: 'California CDL Ambulance',
    code: 'Amb',
    totalQuestions: 50,
    mockCount: 30,
    description: 'Ambulance operator certificate in California.',
    icon: Target
  }
]

const categoryImages: Record<string, string> = {
  class_a: '/images/practice-tests/cdl_class_a.webp',
  class_b: '/images/practice-tests/cdl_class_b.webp',
  class_c: '/images/practice-tests/cdl_class_b.webp',
  air_brakes: '/images/practice-tests/cdl_air_brakes.webp',
  combination: '/images/practice-tests/cdl_combination.webp',
  pre_trip: '/images/practice-tests/cdl_pre_trip.webp',
  hazmat: '/images/practice-tests/cdl_hazmat.webp',
  passenger: '/images/practice-tests/cdl_passenger.webp',
  bus: '/images/practice-tests/cdl_school_bus.webp',
  double: '/images/practice-tests/cdl_double.webp',
  tank: '/images/practice-tests/cdl_tanker.webp',
  ambulance: '/images/practice-tests/cdl_ambulance.webp'
}

const sectionTopicMap: Record<string, string[]> = {
  class_a: [
    'vehicle_inspection',
    'basic_control',
    'speed_space',
    'night_driving',
    'emergencies_skids',
    'inclement_weather',
    'driver_safety',
    'railway_crossings',
    'vehicle_inspection',
    'speed_space',
    'night_driving',
    'emergencies_skids',
    'inclement_weather'
  ],
  class_b: [
    'vehicle_inspection',
    'basic_control',
    'speed_space',
    'night_driving',
    'emergencies_skids',
    'vehicle_inspection',
    'speed_space',
    'night_driving',
    'emergencies_skids',
    'driver_safety'
  ],
  class_c: [
    'vehicle_inspection',
    'basic_control',
    'speed_space',
    'night_driving',
    'emergencies_skids',
    'vehicle_inspection',
    'speed_space',
    'night_driving',
    'emergencies_skids',
    'driver_safety'
  ],
  air_brakes: [
    'air_brakes_parts',
    'air_brakes_inspection',
    'air_brakes_dual',
    'emergencies_skids'
  ],
  combination: [
    'cdl_combination',
    'coupling_fifth_wheel',
    'vehicle_inspection',
    'basic_control'
  ],
  pre_trip: [
    'pre_trip_engine',
    'pre_trip_cab',
    'vehicle_inspection'
  ],
  hazmat: [
    'hazmat_placards',
    'hazmat_cargo',
    'driver_safety',
    'vehicle_inspection',
    'emergencies_skids'
  ],
  passenger: [
    'passenger_bus',
    'passenger_loading',
    'vehicle_inspection',
    'driver_safety',
    'basic_control',
    'emergencies_skids',
    'railway_crossings'
  ],
  bus: [
    'school_bus_danger_zones',
    'school_bus_loading',
    'school_bus_evacuation',
    'school_bus_railroad_crossing',
    'school_bus_safety'
  ],
  double: [
    'double_triple_trailers',
    'double_coupling',
    'coupling_fifth_wheel',
    'double_driving',
    'vehicle_inspection',
    'air_brakes_parts',
    'speed_space',
    'emergencies_skids'
  ],
  tank: [
    'cdl_tanker',
    'tanker_liquid_surge',
    'speed_space',
    'vehicle_inspection',
    'emergencies_skids',
    'driver_safety',
    'basic_control'
  ],
  ambulance: [
    'cdl_ambulance'
  ]
}

const pngTopics = [
  'school_bus_danger_zones',
  'school_bus_loading',
  'school_bus_evacuation',
  'tanker_liquid_surge',
  'double_coupling',
  'double_driving',
  'pre_trip_engine',
  'pre_trip_cab',
  'air_brakes_dual',
  'passenger_loading'
]

const getSectionImage = (categoryId: string, sectionIndex: number): string => {
  const topics = sectionTopicMap[categoryId]
  const topic = topics && topics[sectionIndex] ? topics[sectionIndex] : 'basic_control'
  if (topic.startsWith('cdl_')) {
    return `/images/practice-tests/${topic}.webp`
  }
  const ext = pngTopics.includes(topic) ? 'png' : 'webp'
  return `/images/practice-tests/sections/${topic}.${ext}`
}


const getStateAbbreviation = (stateName: string) => {
  const states: Record<string, string> = {
    california: 'CA',
    texas: 'TX',
    florida: 'FL',
    new_york: 'NY',
    ohio: 'OH',
    pennsylvania: 'PA',
    illinois: 'IL',
    georgia: 'GA',
    north_carolina: 'NC',
    michigan: 'MI'
  }
  return states[stateName.toLowerCase()] || stateName.slice(0, 2).toUpperCase()
}

interface CdlDashboardPageContentProps {
  showSwitchView?: boolean
  onSwitchView?: () => void
  selectedState?: string
  setSelectedState?: (state: string) => void
}

export function CdlDashboardPageContent({
  showSwitchView = false,
  onSwitchView,
  selectedState: propSelectedState,
  setSelectedState: propSetSelectedState
}: CdlDashboardPageContentProps = {}) {
  const [activeTab, setActiveTab] = useState<'question_bank' | 'mock_exams' | 'analytics'>('question_bank')
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState<UserProgress | null>(null)
  
  const [lang, setLang] = useState<'en' | 'pa'>('en')

  useEffect(() => {
    const savedLang = localStorage.getItem('cdl_dashboard_lang') as 'en' | 'pa'
    if (savedLang === 'pa' || savedLang === 'en') {
      setLang(savedLang)
    }
  }, [])

  const handleLangToggle = (newLang: 'en' | 'pa') => {
    setLang(newLang)
    localStorage.setItem('cdl_dashboard_lang', newLang)
  }

  const t = (enText: string) => {
    if (lang === 'pa') {
      const paStrings: Record<string, string> = {
        "CDL Exam Preparation": "CDL ਪ੍ਰੀਖਿਆ ਦੀ ਤਿਆਰੀ",
        "2,2000 practice questions • All endorsements • Exam simulator": "2,500+ ਅਭਿਆਸ ਪ੍ਰਸ਼ਨ • ਸਾਰੇ ਐਂਡੋਰਸਮੈਂਟ • ਪ੍ਰੀਖਿਆ ਸਿਮੂਲੇਟਰ",
        "Question Bank": "ਪ੍ਰਸ਼ਨ ਬੈਂਕ",
        "Mock Exams": "ਮੌਕ ਪ੍ਰੀਖਿਆਵਾਂ",
        "Cheat Sheet": "ਚੀਟ ਸ਼ੀਟ",
        "Progress": "ਪ੍ਰਗਤੀ",
        "Class A General Knowledge": "ਕਲਾਸ A ਜਨਰਲ ਨਾਲੇਜ",
        "Class B General Knowledge": "ਕਲਾਸ B ਜਨਰਲ ਨਾਲੇਜ",
        "Air Brakes": "ਏਅਰ ਬ੍ਰੇਕਸ (Air Brakes)",
        "Combination Vehicles": "ਕੰਬੀਨੇਸ਼ਨ ਵਾਹਨ (Combination Vehicles)",
        "Pre-Trip Inspection": "ਪ੍ਰੀ-ਟ੍ਰਿਪ ਨਿਰੀਖਣ (Pre-Trip Inspection)",
        "Hazardous Materials (HazMat)": "ਖ਼ਤਰਨਾਕ ਸਮੱਗਰੀ (HazMat)",
        "Passenger Transport": "ਯਾਤਰੀ ਆਵਾਜਾਈ (Passenger)",
        "School Bus": "ਸਕੂਲ ਬੱਸ (School Bus)",
        "Double / Triple Trailers": "ਡਬਲ / ਟ੍ਰਿਪਲ ਟ੍ਰੇਲਰ",
        "Tanker Vehicles": "ਟੈਂਕਰ ਵਾਹਨ (Tanker Vehicles)",
        "California CDL Ambulance": "ਕੈਲੀਫੋਰਨੀਆ CDL ਐਂਬੂਲੈਂਸ",
        "Core test required for all Class A commercial drivers.": "ਸਾਰੇ ਕਲਾਸ A ਵਪਾਰਕ ਡਰਾਈਵਰਾਂ ਲਈ ਲੋੜੀਂਦਾ ਕੋਰ ਟੈਸਟ।",
        "Core test required for all Class B commercial drivers.": "ਸਾਰੇ ਕਲਾਸ B ਵਪਾਰਕ ਡਰਾਈਵਰਾਂ ਲਈ ਲੋੜੀਂਦਾ ਕੋਰ ਟੈਸਟ।",
        "Required for operating air brake-equipped vehicles.": "ਏਅਰ ਬ੍ਰੇਕ ਵਾਲੇ ਵਾਹਨਾਂ ਨੂੰ ਚਲਾਉਣ ਲਈ ਲੋੜੀਂਦਾ ਹੈ।",
        "Required for pulling multiple trailers (Class A).": "ਕਈ ਟ੍ਰੇਲਰਾਂ (ਕਲਾਸ A) ਨੂੰ ਖਿੱਚਣ ਲਈ ਲੋੜੀਂਦਾ ਹੈ।",
        "Walkthrough inspection prep for the skills test.": "ਪ੍ਰੈਕਟੀਕਲ ਟੈਸਟ ਲਈ ਵਾਹਨ ਦੀ ਜਾਂਚ ਦੀ ਤਿਆਰੀ।",
        "Endorsement for hauling hazardous materials.": "ਖ਼ਤਰਨਾਕ ਸਮੱਗਰੀ ਦੀ ਢੋਆ-ਢੁਆਈ ਲਈ ਐਂਡੋਰਸਮੈਂਟ।",
        "Endorsement to drive passenger vehicles.": "ਯਾਤਰੀ ਵਾਹਨਾਂ ਨੂੰ ਚਲਾਉਣ ਲਈ ਐਂਡੋਰਸਮੈਂਟ।",
        "Endorsement to drive school buses safely.": "ਸਕੂਲ ਬੱਸਾਂ ਨੂੰ ਸੁਰੱਖਿਅਤ ਢੰਗ ਨਾਲ ਚਲਾਉਣ ਲਈ ਐਂਡੋਰਸਮੈਂਟ।",
        "Endorsement for pulling double/triple trailers.": "ਡਬਲ/ਟ੍ਰਿਪਲ ਟ੍ਰੇਲਰ ਖਿੱਚਣ ਲਈ ਐਂਡੋਰਸਮੈਂਟ।",
        "Endorsement for hauling bulk liquids/gases.": "ਤਰਲ/ਗੈਸਾਂ ਨੂੰ ਬਲਕ ਵਿੱਚ ਲਿਜਾਣ ਲਈ ਐਂਡੋਰਸਮੈਂਟ।",
        "Required for ambulance drivers in California.": "ਕੈਲੀਫੋਰਨੀਆ ਵਿੱਚ ਐਂਬੂਲੈਂਸ ਡਰਾਈਵਰਾਂ ਲਈ ਲੋੜੀਂਦਾ ਹੈ।",
        "Open Question Bank": "ਪ੍ਰਸ਼ਨ ਬੈਂਕ ਖੋਲ੍ਹੋ",
        "Weakest Chapters First": "ਕਮਜ਼ੋਰ ਚੈਪਟਰ ਪਹਿਲਾਂ",
        "Alphabetical": "ਵਰਣਮਾਲਾ ਅਨੁਸਾਰ",
        "No categories found for the selected filter.": "ਚੁਣੇ ਹੋਏ ਫਿਲਟਰ ਲਈ ਕੋਈ ਸ਼੍ਰੇਣੀ ਨਹੀਂ ਮਿਲੀ।",
        "Back to CDL Dashboard": "CDL ਡੈਸ਼ਬੋਰਡ 'ਤੇ ਵਾਪਸ ਜਾਓ",
        "Restart Section": "ਸੈਕਸ਼ਨ ਦੁਬਾਰਾ ਸ਼ੁਰੂ ਕਰੋ",
        "Practice Section": "ਅਭਿਆਸ ਸੈਕਸ਼ਨ",
        "GK-A": "ਕਲਾਸ A ਕੋਰ",
        "GK-B": "ਕਲਾਸ B ਕੋਰ",
        "AB": "ਏਅਰ ਬ੍ਰੇਕਸ",
        "CV": "ਕੰਬੀਨੇਸ਼ਨ",
        "PT": "ਪ੍ਰੀ-ਟ੍ਰਿਪ",
        "H": "ਹਾਜ਼ਮੈਟ",
        "P": "ਯਾਤਰੀ",
        "S": "ਸਕੂਲ ਬੱਸ",
        "T": "ਡਬਲਜ਼/ਟ੍ਰਿਪਲਜ਼",
        "N": "ਟੈਂਕਰ",
        "AMB": "ਐਂਬੂਲੈਂਸ",
        "Next Question": "ਅਗਲਾ ਪ੍ਰਸ਼ਨ",
        "Finish Test": "ਪ੍ਰੀਖਿਆ ਪੂਰੀ ਕਰੋ",
        "Previous": "ਪਿੱਛੇ",
        "Next": "ਅਗਲਾ",
        "Finish": "ਪੂਰਾ ਕਰੋ"
      }
      return paStrings[enText] || enText
    }
    return enText
  }
  
  const [internalState, setInternalState] = useState<string>('california')
  const selectedState = propSelectedState || internalState
  const setSelectedState = propSetSelectedState || setInternalState
  
  // Active practice session states
  const [activeSessionQuestions, setActiveSessionQuestions] = useState<Question[] | null>(null)
  const [activeSessionChapter, setActiveSessionChapter] = useState<string | null>(null)
  const [isMockSession, setIsMockSession] = useState(false)
  const [mockSelectedCategory, setMockSelectedCategory] = useState<CdlCategoryMeta | null>(null)

  // Sub-views states
  const [selectedCategory, setSelectedCategory] = useState<CdlCategoryMeta | null>(null)

  // Filters state
  const [activeFilters, setActiveFilters] = useState<string[]>(['class_a'])
  const toggleFilter = (filter: string) => {
    setActiveFilters([filter])
  }

  const [sortBy, setSortBy] = useState<'weakest' | 'name'>('weakest')

  const activeCategories = cdlCategories.filter(cat => cat.id !== 'ambulance' || selectedState === 'california')

  const router = useRouter()
  const { user, userData, isCdlPremium, isCdlPremiumExpired, cdlPremiumStatus, signOut, refreshUserData, loading: authLoading, isPremium } = useAuth()
  
  const state = selectedState
  const stateCdlKey = `${state}-cdl`

  useEffect(() => {
    if (user && isCdlPremium) {
      loadCdlProgress()
    }
  }, [user, isCdlPremium, selectedState])

  const loadCdlProgress = async () => {
    if (!user) return
    try {
      setLoading(true)
      const userProgress = await getUserProgress(user.uid, stateCdlKey)
      setProgress(userProgress)
    } catch (error) {
      console.error('Error loading CDL progress:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleStateChange = (newState: string) => {
    if (setSelectedState) {
      setSelectedState(newState)
    }
    if (user) {
      updateLastActiveState(user.uid, newState)
    }
  }

  const handleLogout = async () => {
    await signOut()
    router.push('/')
  }

  // Generate sections of 50 or less questions
  const getCategorySections = (totalCount: number) => {
    const sections = []
    let remaining = totalCount
    let count = 0
    while (remaining > 0) {
      const sectionSize = Math.min(50, remaining)
      sections.push({
        index: count,
        size: sectionSize,
        startIndex: count * 50,
        endIndex: (count * 50) + sectionSize
      })
      remaining -= sectionSize
      count++
    }
    return sections
  }

  // Start practicing a section of 50 questions
  const handleStartSectionPractice = async (category: CdlCategoryMeta, sectionIndex: number, size: number) => {
    if (!user) return
    try {
      setLoading(true)
      const res = await fetch(`/api/cdl/questions?state=${state}&category=${category.id}&premium=true${lang === 'pa' ? '&lang=pa' : ''}`)
      if (!res.ok) throw new Error('Failed to load CDL questions')
      const data = await res.json()
      
      const allQuestions = data.questions || []
      const slicedQuestions = allQuestions.slice(sectionIndex * 50, (sectionIndex * 50) + size)
      
      setActiveSessionQuestions(slicedQuestions)
      setActiveSessionChapter(`${category.name} - Section ${sectionIndex + 1}`)
      setIsMockSession(false)
    } catch (error) {
      console.error('Error starting section practice:', error)
      alert('Error loading test questions. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  // Start mock exam for a category
  const handleStartMockExam = async (category: CdlCategoryMeta) => {
    if (!user) return
    try {
      setLoading(true)
      const res = await fetch(`/api/cdl/questions?state=${state}&category=${category.id}&premium=true${lang === 'pa' ? '&lang=pa' : ''}`)
      if (!res.ok) throw new Error('Failed to load CDL questions')
      const data = await res.json()
      
      const allQuestions = data.questions || []
      // Shuffle questions
      const shuffled = [...allQuestions].sort(() => Math.random() - 0.5)
      // Clean prefix if any
      const cleaned = shuffled.map(q => ({
        ...q,
        question: q.question.replace(/^Sample\s+\w+\s+Real Estate\s+[Qq]uestion\s*#?\d*:\s*/i, '').trim()
      }))
      
      // Slice count matching real Real Estate count
      const slicedQuestions = cleaned.slice(0, category.mockCount)
      
      setActiveSessionQuestions(slicedQuestions)
      setMockSelectedCategory(category)
      setIsMockSession(true)
    } catch (error) {
      console.error('Error starting mock exam:', error)
      alert('Error loading exam questions. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handlePracticeComplete = async (session: Partial<PracticeSession>) => {
    try {
      if (user && activeSessionQuestions) {
        const fullSession: PracticeSession = {
          id: `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          userId: user.uid,
          state: stateCdlKey,
          questions: session.questions || [],
          answers: session.answers || [],
          startTime: session.startTime || new Date(),
          endTime: session.endTime,
          score: session.score,
          isPremium: true,
          completed: true,
          chapter: activeSessionChapter || undefined
        }
        await savePracticeSession(fullSession, true)
        await loadCdlProgress()
      }
    } catch (error) {
      console.error('Error saving CDL practice session:', error)
    }
  }

  const handleMockComplete = async (exam: Partial<MockExam>) => {
    try {
      if (user && activeSessionQuestions && mockSelectedCategory) {
        const fullExam: MockExam = {
          id: `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          userId: user.uid,
          state: stateCdlKey,
          questions: exam.questions || [],
          answers: exam.answers || [],
          startTime: exam.startTime || new Date(),
          endTime: exam.endTime,
          score: exam.score,
          passed: exam.passed,
          timeLimit: 0,
          completed: true
        }
        await saveMockExam(fullExam, true)
        await loadCdlProgress()
      }
    } catch (error) {
      console.error('Error saving CDL mock exam:', error)
    }
  }

  const handleExitSession = () => {
    setActiveSessionQuestions(null)
    setActiveSessionChapter(null)
    setMockSelectedCategory(null)
    setIsMockSession(false)
  }

  const handleResetCdlChapter = async (categoryName: string, sectionIndex: number) => {
    if (!user) return
    const chapterName = `${categoryName} - Section ${sectionIndex + 1}`
    try {
      setLoading(true)
      await resetChapterProgress(user.uid, stateCdlKey, chapterName)
      await loadCdlProgress()
    } catch (error) {
      console.error('Failed to reset section progress:', error)
    } finally {
      setLoading(false)
    }
  }

  // Expiration screen
  if (user && userData && isCdlPremiumExpired && !authLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navigation
          user={user}
          userData={userData}
          isPremium={isPremium}
          premiumStatus="expired"
          onLogin={() => router.push('/')}
          onSignup={() => router.push('/')}
          onLogout={handleLogout}
          onDashboard={() => { setSelectedCategory(null); setActiveTab('question_bank') }}
          currentState={selectedState as StateKey}
          currentLicenseType="cdl"
          showSwitchToCar={isPremium}
          onStateChange={handleStateChange}
          onSwitchToCar={onSwitchView}
        />
        <main className="flex-1 flex items-center justify-center p-4 py-16">
          <div className="max-w-md w-full bg-white rounded-xl p-8 shadow-xl border border-red-100 text-center">
            <div className="w-16 h-16 bg-red-50 rounded-lg flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-red-500" />
            </div>
            <h2 className="text-2xl font-bold text-red-600 mb-4">CDL Plan Expired</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Your CDL premium access has expired. Please renew your plan to continue studying all categories and mock exams.
            </p>
            <Button
              onClick={() => router.push('/get-premium?plan=36500&cdl=true')}
              className="w-full bg-[#007aff] hover:bg-[#0056cc] text-white font-semibold py-3.5 rounded-lg shadow-lg"
            >
              <Crown className="w-4 h-4 mr-2" />
              Renew CDL Premium Access
            </Button>
          </div>
        </main>
      </div>
    )
  }

  // Active Test/Exam views
  if (activeSessionQuestions) {
    if (isMockSession) {
      return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Navigation
            user={user}
            userData={userData}
            isPremium={isPremium}
            premiumStatus="active"
            onLogin={() => router.push('/')}
            onSignup={() => router.push('/')}
            onLogout={handleLogout}
            onDashboard={handleExitSession}
          />
          <main className="container mx-auto px-4 py-8 flex-1">
            <MockExamInterface
              questions={activeSessionQuestions}
              state={stateCdlKey}
              categoryName={mockSelectedCategory?.name}
              onComplete={handleMockComplete}
              onExit={handleExitSession}
              lang={lang}
            />
          </main>
        </div>
      )
    } else {
      return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Navigation
            user={user}
            userData={userData}
            isPremium={isPremium}
            premiumStatus="active"
            onLogin={() => router.push('/')}
            onSignup={() => router.push('/')}
            onLogout={handleLogout}
            onDashboard={handleExitSession}
            currentState={selectedState as StateKey}
            currentLicenseType="cdl"
            showSwitchToCar={isPremium}
            onStateChange={handleStateChange}
            onSwitchToCar={onSwitchView}
          />
          <main className="container mx-auto px-4 py-8 flex-1">
            <PracticeInterface
              questions={activeSessionQuestions}
              state={stateCdlKey}
              isPremium={true}
              onComplete={handlePracticeComplete}
              onExit={handleExitSession}
              chapter={activeSessionChapter}
              user={user}
              userData={userData}
              premiumStatus="active"
              onDashboard={handleExitSession}
              lang={lang}
            />
          </main>
        </div>
      )
    }
  }

  // Aggregate stats helper
  const getOverallStats = () => {
    if (!progress || !progress.chapterProgress) {
      return { accuracy: 0, attempted: 0, completedChapters: 0, readiness: 0 }
    }
    
    let totalQuestionsAttempted = 0
    let totalCorrectAnswers = 0
    let completedCount = 0

    Object.values(progress.chapterProgress).forEach((ch) => {
      totalQuestionsAttempted += ch.questionsAttempted || 0
      totalCorrectAnswers += ch.correctAnswers || 0
      if (ch.completed) completedCount++
    })

    const accuracy = totalQuestionsAttempted > 0 
      ? Math.round((totalCorrectAnswers / totalQuestionsAttempted) * 100)
      : 0

    return {
      accuracy,
      attempted: totalQuestionsAttempted,
      completedChapters: completedCount,
      readiness: progress.readinessScore || 0
    }
  }

  const getCategoryAnalysis = () => {
    if (!progress || !progress.chapterProgress) {
      return activeCategories.map((category) => ({
        category,
        totalAttempted: 0,
        totalCorrect: 0,
        completedSectionsCount: 0,
        totalSectionsCount: getCategorySections(category.totalQuestions).length,
        accuracy: 0,
        completionPercent: 0,
        masteryStatus: 'unstarted' as const,
        firstUncompletedSection: { index: 0, size: Math.min(50, category.totalQuestions) }
      }))
    }

    return activeCategories.map((category) => {
      const sections = getCategorySections(category.totalQuestions)
      let totalAttempted = 0
      let totalCorrect = 0
      let completedSectionsCount = 0

      // Find the first uncompleted section
      let firstUncompletedSection: { index: number; size: number } | null = null

      sections.forEach((s) => {
        const chName = `${category.name} - Section ${s.index + 1}`
        const chProgress = progress.chapterProgress[chName]
        const attempted = chProgress?.questionsAttempted || 0
        const correct = chProgress?.correctAnswers || 0
        
        totalAttempted += attempted
        totalCorrect += correct

        if (chProgress?.completed === true) {
          completedSectionsCount++
        } else if (!firstUncompletedSection) {
          firstUncompletedSection = { index: s.index, size: s.size }
        }
      })

      const accuracy = totalAttempted > 0
        ? Math.round((totalCorrect / totalAttempted) * 100)
        : 0

      const completionPercent = sections.length > 0
        ? Math.round((completedSectionsCount / sections.length) * 100)
        : 0

      // Mastery status
      let masteryStatus: 'mastered' | 'review' | 'unstarted' = 'unstarted'
      if (completedSectionsCount > 0 || totalAttempted > 0) {
        if (accuracy >= 80) {
          masteryStatus = 'mastered'
        } else {
          masteryStatus = 'review'
        }
      }

      return {
        category,
        totalAttempted,
        totalCorrect,
        completedSectionsCount,
        totalSectionsCount: sections.length,
        accuracy,
        completionPercent,
        masteryStatus,
        firstUncompletedSection
      }
    })
  }

  const getRecommendations = (analysisList: ReturnType<typeof getCategoryAnalysis>) => {
    const recs: Array<{
      type: 'practice' | 'mock' | 'unstarted'
      title: string
      description: string
      category: CdlCategoryMeta
      sectionIndex?: number
      sectionSize?: number
      actionLabel: string
      badgeText?: string
    }> = []

    // 1. Prioritize categories that "Need Review" (accuracy < 80% and started)
    const reviewCategories = analysisList.filter(item => item.masteryStatus === 'review')
    reviewCategories.forEach(item => {
      if (item.firstUncompletedSection) {
        recs.push({
          type: 'practice',
          title: `Improve ${item.category.name}`,
          description: `You've completed ${item.completedSectionsCount}/${item.totalSectionsCount} sections with ${item.accuracy}% accuracy. Practice Section ${item.firstUncompletedSection.index + 1} to improve.`,
          category: item.category,
          sectionIndex: item.firstUncompletedSection.index,
          sectionSize: item.firstUncompletedSection.size,
          actionLabel: 'Resume Practice',
          badgeText: 'Needs Review'
        })
      } else {
        // All sections completed but accuracy is low, suggest mock test
        recs.push({
          type: 'mock',
          title: `Test ${item.category.name}`,
          description: `All sections completed, but overall accuracy is ${item.accuracy}%. Run a Mock Exam simulator to test your knowledge.`,
          category: item.category,
          actionLabel: 'Take Mock Test',
          badgeText: 'Needs Practice'
        })
      }
    })

    // 2. Add categories in progress but masteryStatus is mastered/unstarted (started but incomplete)
    const inProgressCategories = analysisList.filter(item => 
      item.masteryStatus !== 'review' && 
      item.completedSectionsCount > 0 && 
      item.completedSectionsCount < item.totalSectionsCount
    )
    inProgressCategories.forEach(item => {
      if (item.firstUncompletedSection && recs.length < 3) {
        recs.push({
          type: 'practice',
          title: `Continue ${item.category.name}`,
          description: `You're doing great! Accuracy is ${item.accuracy}%. Complete Section ${item.firstUncompletedSection.index + 1} to keep mastering this topic.`,
          category: item.category,
          sectionIndex: item.firstUncompletedSection.index,
          sectionSize: item.firstUncompletedSection.size,
          actionLabel: 'Continue Study',
          badgeText: 'In Progress'
        })
      }
    })

    // 3. Add unstarted categories
    const unstartedCategories = analysisList.filter(item => item.masteryStatus === 'unstarted')
    unstartedCategories.forEach(item => {
      if (item.firstUncompletedSection && recs.length < 3) {
        recs.push({
          type: 'unstarted',
          title: `Start ${item.category.name}`,
          description: `You haven't started this category yet. Begin with Section 1 (${item.firstUncompletedSection.size} questions).`,
          category: item.category,
          sectionIndex: item.firstUncompletedSection.index,
          sectionSize: item.firstUncompletedSection.size,
          actionLabel: 'Start Practice',
          badgeText: 'New Module'
        })
      }
    })

    // 4. Fallback/Mock recommendations if list is short
    if (recs.length < 3) {
      const gkCat = activeCategories.find(c => c.id === 'class_a' || c.id === 'class_b')
      if (gkCat && !recs.some(r => r.category.id === gkCat.id && r.type === 'mock')) {
        recs.push({
          type: 'mock',
          title: `Mock Exam: ${gkCat.name}`,
          description: `Simulate a real Real Estate Examing experience for ${gkCat.name}. 50 questions, 80% passing score.`,
          category: gkCat,
          actionLabel: 'Start Simulator',
          badgeText: 'Recommended'
        })
      }
    }

    return recs.slice(0, 3)
  }

  const formatLastStudied = (lastStudied: any) => {
    if (!lastStudied) return 'Not studied yet'
    try {
      const date = typeof lastStudied.toDate === 'function' 
        ? lastStudied.toDate() 
        : new Date(lastStudied)
      
      if (isNaN(date.getTime())) return 'Not studied yet'
      
      const now = new Date()
      const diffMs = now.getTime() - date.getTime()
      const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
      
      if (diffDays === 0) {
        const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
        if (diffHours < 1) return 'Just now'
        return 'Today'
      }
      if (diffDays === 1) return 'Yesterday'
      if (diffDays < 7) return `${diffDays} days ago`
      return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })
    } catch (e) {
      return 'Recently'
    }
  }

  const stats = getOverallStats()

  const handleContinueStudying = () => {
    const analysisList = getCategoryAnalysis()
    const recs = getRecommendations(analysisList)
    if (recs.length > 0) {
      const firstRec = recs[0]
      if (firstRec.type === 'practice' || firstRec.type === 'unstarted') {
        handleStartSectionPractice(firstRec.category, firstRec.sectionIndex || 0, firstRec.sectionSize || 50)
        return
      } else if (firstRec.type === 'mock') {
        handleStartMockExam(firstRec.category)
        return
      }
    }
    // Fallback
    handleStartSectionPractice(cdlCategories[0], 0, 50)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation
        user={user}
        userData={userData}
        isPremium={isPremium}
        premiumStatus="active"
        onLogin={() => router.push('/')}
        onSignup={() => router.push('/')}
        onLogout={handleLogout}
        onDashboard={() => { setSelectedCategory(null); setActiveTab('question_bank') }}
        currentPage="dashboard"
        currentState={selectedState as StateKey}
        currentLicenseType="cdl"
        showSwitchToCar={isPremium}
        onStateChange={handleStateChange}
        onSwitchToCar={onSwitchView}
        currentLanguage={lang}
        onLanguageChange={handleLangToggle}
      />

      <main className="container mx-auto px-4 py-8 pb-24 md:pb-8 max-w-6xl">
        
        {/* Premium Welcome Header & Tabs (No Box, Flex Row Layout) */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10 mt-4">
          {/* Left Side: Title & Subtitle */}
          <div>
            <h1 className="text-[25px] md:text-[28px] font-extrabold tracking-tight text-slate-900 leading-tight">
              <span className="text-[#007aff]">{STATES[selectedState as StateKey]?.name || 'California'}</span> {t("CDL Exam Preparation")}
            </h1>
            <p className="text-slate-700 text-sm md:text-base font-medium max-w-xl leading-relaxed mt-2">
              {t("2,2000 practice questions • All endorsements • Exam simulator")}
            </p>
          </div>

          {/* Right Side: Tab Headers (Desktop view only, hidden on mobile) */}
          <div className="hidden md:flex bg-gray-100/80 backdrop-blur-sm p-1.5 rounded-2xl gap-1.5 border border-gray-200/50 self-end">
            <button
              onClick={() => {
                setSelectedCategory(null)
                setActiveTab('question_bank')
              }}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
                activeTab === 'question_bank'
                  ? 'bg-white text-[#007aff] shadow-md border border-gray-200/20'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
              }`}
            >
              <Database className="w-4 h-4" />
              {t("Question Bank")}
            </button>
            <button
              onClick={() => {
                setSelectedCategory(null)
                setActiveTab('mock_exams')
              }}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
                activeTab === 'mock_exams'
                  ? 'bg-white text-[#007aff] shadow-md border border-gray-200/20'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
              }`}
            >
              <ClipboardList className="w-4 h-4" />
              {t("Mock Exams")}
            </button>
            <button
              onClick={() => {
                setSelectedCategory(null)
                setActiveTab('analytics')
              }}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
                activeTab === 'analytics'
                  ? 'bg-white text-[#007aff] shadow-md border border-gray-200/20'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              {t("Progress")}
            </button>
          </div>
        </div>
        <hr className="border-gray-200 mb-8" />

        {loading ? (
          <div className="py-20 text-center">
            <Loader2 className="w-10 h-10 animate-spin text-[#007aff] mx-auto mb-4" />
            <p className="text-gray-500 font-semibold">Loading your CDL study data...</p>
          </div>
        ) : (
          <>
            {/* Tab 1: Complete Question Bank */}
            {activeTab === 'question_bank' && !selectedCategory && (
              <div className="space-y-6">


                {/* Selector Tabs matching mockup filter toggles */}
                <p className="text-base text-gray-800 font-bold -mb-1">
                  Select your CDL goal to see the question bank for what's on the test:
                </p>
                <div className="flex items-center gap-2 mb-6 pb-1 overflow-x-auto">
                  <button
                    onClick={() => toggleFilter('class_a')}
                    className={`px-6 py-2.5 min-w-[120px] md:min-w-[140px] text-center rounded-lg font-semibold text-xs md:text-sm whitespace-nowrap transition-all border-2 ${
                      activeFilters.includes('class_a')
                        ? 'bg-[#007aff]/5 border-[#007aff] text-[#007aff] shadow-sm'
                        : 'bg-white border-gray-200 text-gray-600 hover:bg-slate-50 hover:text-gray-900 hover:border-gray-300'
                    }`}
                  >
                    Class A
                  </button>
                  <button
                    onClick={() => toggleFilter('class_b')}
                    className={`px-6 py-2.5 min-w-[120px] md:min-w-[140px] text-center rounded-lg font-semibold text-xs md:text-sm whitespace-nowrap transition-all border-2 ${
                      activeFilters.includes('class_b')
                        ? 'bg-[#007aff]/5 border-[#007aff] text-[#007aff] shadow-sm'
                        : 'bg-white border-gray-200 text-gray-600 hover:bg-slate-50 hover:text-gray-900 hover:border-gray-300'
                    }`}
                  >
                    Class B
                  </button>
                  <button
                    onClick={() => toggleFilter('endorsements')}
                    className={`px-6 py-2.5 min-w-[120px] md:min-w-[140px] text-center rounded-lg font-semibold text-xs md:text-sm whitespace-nowrap transition-all border-2 ${
                      activeFilters.includes('endorsements')
                        ? 'bg-[#007aff]/5 border-[#007aff] text-[#007aff] shadow-sm'
                        : 'bg-white border-gray-200 text-gray-600 hover:bg-slate-50 hover:text-gray-900 hover:border-gray-300'
                    }`}
                  >
                    Endorsements
                  </button>
                </div>

                {/* Mobile List View (Option 2) */}
                <div className="sm:hidden space-y-3">
                  {(() => {
                    const filteredCategories = activeCategories.filter((category) => {
                      const isClassA = ['class_a', 'air_brakes', 'combination', 'pre_trip'].includes(category.id)
                      const isClassB = ['class_b', 'air_brakes', 'pre_trip'].includes(category.id)
                      const isEndorsement = ['hazmat', 'passenger', 'bus', 'double', 'tank', 'ambulance'].includes(category.id)

                      let matches = false
                      if (activeFilters.includes('class_a') && isClassA) matches = true
                      if (activeFilters.includes('class_b') && isClassB) matches = true
                      if (activeFilters.includes('endorsements') && isEndorsement) matches = true

                      return matches
                    })

                    if (filteredCategories.length === 0) {
                      return (
                        <div className="text-center py-12 text-gray-500 font-medium">
                          No categories found for the selected filter.
                        </div>
                      )
                    }

                    return filteredCategories.map((category) => {
                      const sections = getCategorySections(category.totalQuestions)
                      const completedSections = sections.filter((s) => {
                        const chProgress = progress?.chapterProgress?.[`${category.name} - Section ${s.index + 1}`]
                        return chProgress?.completed === true
                      }).length

                      const totalAttempted = sections.reduce((sum, s) => {
                        const chProgress = progress?.chapterProgress?.[`${category.name} - Section ${s.index + 1}`]
                        return sum + (chProgress?.questionsAttempted || 0)
                      }, 0)

                      const percent = Math.round(category.totalQuestions > 0 ? (totalAttempted / category.totalQuestions) * 100 : 0)
                      const IconComponent = category.icon || Database

                      return (
                        <div
                          key={category.id}
                          onClick={() => setSelectedCategory(category)}
                          className="bg-white rounded-2xl border border-gray-300 flex items-center justify-between hover:border-[#007aff]/50 active:bg-gray-50/70 transition-all cursor-pointer shadow-sm relative overflow-hidden"
                        >
                          <div className="flex items-center min-w-0 flex-1 self-stretch">
                            {/* Category Thumbnail Image (No left, top, bottom padding) */}
                            <div className="relative w-16 self-stretch flex-shrink-0 overflow-hidden bg-gray-50 border-r border-gray-100">
                              <img
                                src={categoryImages[category.id] || '/images/practice-tests/1.webp'}
                                alt={category.name}
                                className="w-full h-full object-cover"
                              />
                            </div>

                            {/* Text Info */}
                            <div className="flex-1 min-w-0 ml-3.5 py-3 text-left">
                              <h4 className="font-bold text-gray-900 text-sm leading-snug truncate">
                                {t(category.name)}
                              </h4>
                              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-0.5">
                                {t(category.code)} • {category.totalQuestions} {lang === 'pa' ? 'ਪ੍ਰਸ਼ਨ' : 'Questions'}
                              </p>
                              <div className="flex items-center gap-1.5 mt-1">
                                <div className="w-16 bg-gray-100 h-1 rounded-full overflow-hidden">
                                  <div className="bg-[#007aff] h-full" style={{ width: `${percent}%` }} />
                                </div>
                                <span className="text-[10px] text-gray-500 font-semibold">
                                  {completedSections}/{sections.length} {lang === 'pa' ? 'ਸੈਕਸ਼ਨ' : 'Sec'} ({percent}%)
                                </span>
                              </div>
                            </div>
                          </div>

                          <ChevronRight className="w-4 h-4 text-gray-300 mr-3.5 flex-shrink-0" />
                        </div>
                      )
                    })
                  })()}
                </div>

                {/* Desktop Grid View */}
                <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {(() => {
                    const filteredCategories = activeCategories.filter((category) => {
                      const isClassA = ['class_a', 'air_brakes', 'combination', 'pre_trip'].includes(category.id)
                      const isClassB = ['class_b', 'air_brakes', 'pre_trip'].includes(category.id)
                      const isEndorsement = ['hazmat', 'passenger', 'bus', 'double', 'tank', 'ambulance'].includes(category.id)

                      let matches = false
                      if (activeFilters.includes('class_a') && isClassA) matches = true
                      if (activeFilters.includes('class_b') && isClassB) matches = true
                      if (activeFilters.includes('endorsements') && isEndorsement) matches = true

                      return matches
                    })

                    if (filteredCategories.length === 0) {
                      return (
                        <div className="col-span-full text-center py-12 text-gray-500 font-medium">
                          No categories found for the selected filter.
                        </div>
                      )
                    }

                    return filteredCategories.map((category) => {
                      // Count completed sections for this category
                      const sections = getCategorySections(category.totalQuestions)
                      const completedSections = sections.filter((s) => {
                        const chProgress = progress?.chapterProgress?.[`${category.name} - Section ${s.index + 1}`]
                        return chProgress?.completed === true
                      }).length

                      const totalAttempted = sections.reduce((sum, s) => {
                        const chProgress = progress?.chapterProgress?.[`${category.name} - Section ${s.index + 1}`]
                        return sum + (chProgress?.questionsAttempted || 0)
                      }, 0)

                      const percent = Math.round(category.totalQuestions > 0 ? (totalAttempted / category.totalQuestions) * 100 : 0)

                      return (
                        <div
                          key={category.id}
                          onClick={() => setSelectedCategory(category)}
                          className="bg-white rounded-xl border border-gray-300 overflow-hidden hover:border-[#007aff]/50 hover:shadow-md cursor-pointer transition-all duration-300 flex flex-col justify-between group"
                        >
                          {/* Card Image Area */}
                          <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100 border-b border-gray-100">
                            <img
                              src={categoryImages[category.id] || '/images/practice-tests/1.webp'}
                              alt={category.name}
                              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-350"
                            />
                          </div>

                          {/* Card Content Area */}
                          <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                            <div>
                              <h3 className="font-bold text-gray-900 text-base leading-snug transition-colors line-clamp-1">
                                {t(category.name)}
                              </h3>
                              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-0.5">
                                {t(category.code)} • {category.totalQuestions} {lang === 'pa' ? 'ਪ੍ਰਸ਼ਨ' : 'Questions'}
                              </p>
                              <p className="text-xs text-gray-500 mt-2 leading-relaxed line-clamp-2">
                                {t(category.description)}
                              </p>
                            </div>

                            {/* Progress section */}
                            <div className="space-y-2 pt-3 border-t border-gray-50">
                              <div className="flex justify-between text-[11px] font-semibold text-gray-600">
                                <span>{t("Progress")}</span>
                                <span>{completedSections} / {sections.length} {lang === 'pa' ? 'ਸੈਕਸ਼ਨ' : 'sections'}</span>
                              </div>
                              <Progress value={percent} className="h-1.5" />
                            </div>

                            <div
                              className="w-full text-center border border-[#007aff] bg-[#007aff] text-white font-bold py-2.5 rounded-lg text-xs flex items-center justify-center gap-1.5 transition-all duration-300 hover:bg-[#0066d6] hover:border-[#0066d6] group-hover:bg-[#0066d6] group-hover:border-[#0066d6]"
                            >
                              {t("Open Question Bank")}
                              <ChevronRight className="w-3.5 h-3.5" />
                            </div>
                          </div>
                        </div>
                      )
                    })
                  })()}
                </div>
              </div>
            )}

            {/* Tab 1 (Subview): Section list for selected category */}
            {activeTab === 'question_bank' && selectedCategory && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <Button
                    variant="ghost"
                    onClick={() => setSelectedCategory(null)}
                    className="text-gray-500 hover:text-gray-900 hover:bg-gray-100/50 rounded-lg px-3 py-1 font-semibold text-sm flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    {lang === 'pa' ? 'ਸ਼੍ਰੇਣੀਆਂ ਵੱਲ ਵਾਪਸ' : 'Back to Categories'}
                  </Button>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-2 sm:gap-6 mb-6 border-b border-gray-100 pb-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight leading-tight">{t(selectedCategory.name)}</h2>
                  <span className="text-xs sm:text-sm font-semibold text-gray-400">
                    {selectedCategory.totalQuestions} {lang === 'pa' ? 'ਪ੍ਰਸ਼ਨ' : 'questions'}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-x-8 md:gap-y-12 relative">
                  {(() => {
                    const sections = getCategorySections(selectedCategory.totalQuestions)
                    const nextSectionIndex = sections.find(s => {
                      const chName = `${selectedCategory.name} - Section ${s.index + 1}`
                      const chProgress = progress?.chapterProgress?.[chName]
                      return !(chProgress?.completed === true)
                    })?.index ?? 0

                    return sections.map((section) => {
                      const chName = `${selectedCategory.name} - Section ${section.index + 1}`
                      const chProgress = progress?.chapterProgress?.[chName]
                      
                      const attempted = chProgress?.questionsAttempted || 0
                      const correct = chProgress?.correctAnswers || 0
                      const accuracy = chProgress?.accuracy || 0
                      const isCompleted = chProgress?.completed === true
                      const percent = Math.round(section.size > 0 ? (attempted / section.size) * 100 : 0)
                      const isLocked = !isCdlPremium && section.index > 0

                      const handleCardClick = () => {
                        if (isLocked) {
                          router.push('/get-premium?plan=36500&cdl=true')
                        } else {
                          handleStartSectionPractice(selectedCategory, section.index, section.size)
                        }
                      }

                      return (
                        <div key={section.index} className="relative flex flex-col group">
                          {/* Connecting dashed line behind/between cards */}
                          {section.index < sections.length - 1 && (
                            <div className="absolute top-[28%] left-[75%] w-[50%] h-[2px] border-t-2 border-dashed border-violet-200/60 hidden sm:block z-0 pointer-events-none" />
                          )}

                          {/* Image Card Container */}
                          <div
                            onClick={handleCardClick}
                            className={`relative w-full aspect-[1.6] rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-gray-300 transition-all duration-300 z-10 cursor-pointer ${
                              isLocked ? 'hover:border-violet-300' : 'hover:border-[#007aff]'
                            }`}
                          >
                            <img
                              src={getSectionImage(selectedCategory.id, section.index)}
                              alt={`Section ${section.index + 1}`}
                              className="w-full h-full object-cover select-none"
                            />
                            {/* Center overlay badge based on state */}
                            {isLocked ? (
                              <div className="absolute inset-0 flex items-center justify-center bg-black/45 backdrop-blur-[0.5px]">
                                <div className="bg-[#8b5cf6] text-white p-2.5 rounded-full shadow-lg transform transition-transform group-hover:scale-110">
                                  <Lock className="w-4 h-4 fill-white text-transparent" />
                                </div>
                              </div>
                            ) : (
                              <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/15 transition-all duration-300">
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-[#007aff] p-2 rounded-full shadow-md transform scale-90 group-hover:scale-100 duration-300">
                                  <Play className="w-4 h-4 fill-[#007aff] text-[#007aff]" />
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Progress bar directly below image */}
                          <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden mt-3 z-10">
                            {attempted > 0 && (
                              <div
                                className={`h-full rounded-full transition-all duration-500 ${
                                  accuracy >= 80 ? 'bg-emerald-500' : 'bg-red-500'
                                }`}
                                style={{ width: `${percent}%` }}
                              />
                            )}
                          </div>

                          {/* Section details */}
                          <div className="mt-3 text-left">
                            <div className="flex items-start justify-between gap-1.5">
                              <h4
                                onClick={handleCardClick}
                                className="font-bold text-gray-900 text-[13px] sm:text-[14px] leading-snug cursor-pointer transition-colors"
                              >
                                {lang === 'pa'
                                  ? `${getStateAbbreviation(selectedState)} ${t(selectedCategory.name).replace(' General Knowledge', '')} ਸੈਕਸ਼ਨ ${section.index + 1}`
                                  : `${getStateAbbreviation(selectedState)} ${selectedCategory.name.replace(' General Knowledge', '')} Section ${section.index + 1}`}
                              </h4>
                              
                              {/* Subtle reset button if progress exists */}
                              {attempted > 0 && (
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    handleResetCdlChapter(selectedCategory.name, section.index)
                                  }}
                                  className="text-gray-400 hover:text-gray-700 p-0.5 rounded hover:bg-gray-100 transition-colors flex-shrink-0"
                                  title={lang === 'pa' ? 'ਸੈਕਸ਼ਨ ਪ੍ਰਗਤੀ ਰੀਸੈਟ ਕਰੋ' : 'Reset Section Progress'}
                                >
                                  <RotateCcw className="w-3.5 h-3.5" />
                                </button>
                              )}
                            </div>
                            
                            <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-1 font-semibold">
                              <span>{section.size} {lang === 'pa' ? 'ਪ੍ਰਸ਼ਨ' : 'questions'}</span>
                              {attempted > 0 && (
                                <>
                                  <span className="text-gray-300">•</span>
                                  <span className={isCompleted ? "text-emerald-600 font-bold" : "text-[#007aff] font-bold"}>
                                    {percent}% {lang === 'pa' ? 'ਪੂਰਾ' : 'done'}
                                  </span>
                                  {accuracy > 0 && (
                                    <>
                                      <span className="text-gray-300">•</span>
                                      <span className={accuracy >= 80 ? "text-emerald-600 font-bold" : "text-red-500 font-bold"}>
                                        {Math.round(accuracy)}% {lang === 'pa' ? 'ਸ਼ੁੱਧਤਾ' : 'Acc'}
                                      </span>
                                    </>
                                  )}
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      )
                    })
                  })()}
                </div>
              </div>
            )}

            {/* Tab 2: Mock Exam Simulator */}
            {activeTab === 'mock_exams' && (
              <div className="space-y-6">
                <div className="w-full mb-4">
                  <p className="text-base text-gray-800 font-bold">
                    Select a CDL category to take a simulated Real Estate written exam. The exam generates random questions matching the official Real Estate count and criteria.
                  </p>
                </div>

                <div className="flex items-center gap-2 mb-6 pb-1 overflow-x-auto">
                  <button
                    onClick={() => toggleFilter('class_a')}
                    className={`px-6 py-2.5 min-w-[120px] md:min-w-[140px] text-center rounded-lg font-semibold text-xs md:text-sm whitespace-nowrap transition-all border-2 ${
                      activeFilters.includes('class_a')
                        ? 'bg-[#007aff]/5 border-[#007aff] text-[#007aff] shadow-sm'
                        : 'bg-white border-gray-200 text-gray-600 hover:bg-slate-50 hover:text-gray-900 hover:border-gray-300'
                    }`}
                  >
                    Class A
                  </button>
                  <button
                    onClick={() => toggleFilter('class_b')}
                    className={`px-6 py-2.5 min-w-[120px] md:min-w-[140px] text-center rounded-lg font-semibold text-xs md:text-sm whitespace-nowrap transition-all border-2 ${
                      activeFilters.includes('class_b')
                        ? 'bg-[#007aff]/5 border-[#007aff] text-[#007aff] shadow-sm'
                        : 'bg-white border-gray-200 text-gray-600 hover:bg-slate-50 hover:text-gray-900 hover:border-gray-300'
                    }`}
                  >
                    Class B
                  </button>
                  <button
                    onClick={() => toggleFilter('endorsements')}
                    className={`px-6 py-2.5 min-w-[120px] md:min-w-[140px] text-center rounded-lg font-semibold text-xs md:text-sm whitespace-nowrap transition-all border-2 ${
                      activeFilters.includes('endorsements')
                        ? 'bg-[#007aff]/5 border-[#007aff] text-[#007aff] shadow-sm'
                        : 'bg-white border-gray-200 text-gray-600 hover:bg-slate-50 hover:text-gray-900 hover:border-gray-300'
                    }`}
                  >
                    Endorsements
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                  {(() => {
                    const filteredCategories = activeCategories.filter((category) => {
                      const isClassA = ['class_a', 'air_brakes', 'combination', 'pre_trip'].includes(category.id)
                      const isClassB = ['class_b', 'air_brakes', 'pre_trip'].includes(category.id)
                      const isEndorsement = ['hazmat', 'passenger', 'bus', 'double', 'tank', 'ambulance'].includes(category.id)

                      let matches = false
                      if (activeFilters.includes('class_a') && isClassA) matches = true
                      if (activeFilters.includes('class_b') && isClassB) matches = true
                      if (activeFilters.includes('endorsements') && isEndorsement) matches = true

                      return matches
                    })

                    if (filteredCategories.length === 0) {
                      return (
                        <div className="col-span-full text-center py-12 text-gray-500 font-medium">
                          No categories found for the selected filter.
                        </div>
                      )
                    }

                    return filteredCategories.map((category) => {
                      return (
                        <div
                          key={category.id}
                          className="bg-white rounded-xl border border-gray-300 overflow-hidden hover:border-[#007aff]/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                        >
                          {/* Card Image Area */}
                          <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100 border-b border-gray-100">
                            <img
                              src={categoryImages[category.id] || '/images/practice-tests/1.webp'}
                              alt={category.name}
                              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-350"
                            />
                          </div>

                          {/* Card Content Area */}
                          <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                            <div>
                              <h3 className="font-bold text-gray-900 text-base leading-snug transition-colors line-clamp-1">
                                {category.name}
                              </h3>
                              <p className="text-[10px] text-gray-405 font-bold uppercase tracking-wider mt-0.5">
                                Real Estate Exam • {category.mockCount} Questions
                              </p>
                              <p className="text-xs text-gray-500 mt-2 leading-relaxed line-clamp-2">
                                80% passing score. Simulates real test criteria.
                              </p>
                            </div>

                            <Button
                              onClick={() => handleStartMockExam(category)}
                              className="w-full bg-[#007aff] hover:bg-[#0056cc] text-white font-bold py-2 rounded-lg text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all"
                            >
                              <Play className="w-3.5 h-3.5 fill-white" />
                              Start Mock Test
                            </Button>
                          </div>
                        </div>
                      )
                    })
                  })()}
                </div>
              </div>
            )}
            {/* Tab 3: Performance & Analytics */}
            {activeTab === 'analytics' && (() => {
              const analysisList = getCategoryAnalysis()
              const sortedAnalysis = [...analysisList].sort((a, b) => {
                if (sortBy === 'weakest') {
                  const aScore = a.totalAttempted > 0 ? a.accuracy : 999
                  const bScore = b.totalAttempted > 0 ? b.accuracy : 999
                  if (aScore !== bScore) {
                    return aScore - bScore
                  }
                  return a.completionPercent - b.completionPercent
                } else {
                  return a.category.name.localeCompare(b.category.name)
                }
              })
              const score = stats.readiness
              let scoreGradient = 'url(#grad-red)'
              let readinessStatus = 'Keep Practicing'
              let badgeStyle = 'bg-rose-50 text-rose-700 border border-rose-100'
              let readinessDescription = 'Start your journey by completing the General Knowledge questions. Aim for 80% accuracy in each section.'

              if (score >= 80) {
                scoreGradient = 'url(#grad-green)'
                readinessStatus = 'Exam Ready'
                badgeStyle = 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                readinessDescription = 'Excellent! Your scores indicate a very high probability of passing the official Real Estate exam. Keep practicing to stay sharp.'
              } else if (score >= 50) {
                scoreGradient = 'url(#grad-amber)'
                readinessStatus = 'Getting There'
                badgeStyle = 'bg-amber-50 text-amber-700 border border-amber-100'
                readinessDescription = "You're making steady progress. Focus on weak categories and complete remaining sections to push your score past 80%."
              }

              return (
                <div className="space-y-10">
                  <div className="w-full">
                    <p className="text-base text-gray-800 font-bold">
                      Monitor your overall study status, correct answers, and mock exam performance across all CDL modules.
                    </p>
                  </div>

                  {/* Top Analytics Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {/* Streak Card */}
                    <Card className="rounded-xl border border-gray-300 p-5 bg-white shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="flex justify-between items-start">
                        <div className="p-2.5 bg-orange-50 rounded-xl text-orange-600">
                          <Flame className="w-5 h-5 fill-orange-500" />
                        </div>
                        {progress?.studyStreak && progress.studyStreak > 0 ? (
                          <span className="text-[9px] font-bold text-orange-600 bg-orange-50 border border-orange-100 px-1.5 py-0.5 rounded uppercase">Active</span>
                        ) : null}
                      </div>
                      <div className="mt-4">
                        <div className="text-2xl font-black text-gray-900 tracking-tight">
                          {progress?.studyStreak || 0} {progress?.studyStreak === 1 ? 'Day' : 'Days'}
                        </div>
                        <div className="text-gray-450 text-[10px] font-bold uppercase tracking-wider mt-1">Study Streak</div>
                        <div className="text-[9px] text-gray-400 font-medium mt-1">
                          Last Active: {formatLastStudied(progress?.lastStudied)}
                        </div>
                      </div>
                    </Card>

                    {/* Mock Exam Pass Rate Card */}
                    <Card className="rounded-xl border border-gray-300 p-5 bg-white shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="flex justify-between items-start">
                        <div className="p-2.5 bg-indigo-50 rounded-xl text-indigo-650">
                          <Award className="w-5 h-5" />
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="text-2xl font-black text-gray-900 tracking-tight">
                          {progress?.mockTestsTaken && progress.mockTestsTaken > 0
                            ? `${Math.round((progress.mockTestsPassed / progress.mockTestsTaken) * 100)}%`
                            : '0%'}
                        </div>
                        <div className="text-gray-450 text-[10px] font-bold uppercase tracking-wider mt-1">Mock Pass Rate</div>
                        <div className="text-[9px] text-gray-400 font-medium mt-1">
                          {progress?.mockTestsPassed || 0} of {progress?.mockTestsTaken || 0} passed
                        </div>
                      </div>
                    </Card>

                    {/* Total Attempted Card */}
                    <Card className="rounded-xl border border-gray-300 p-5 bg-white shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="flex justify-between items-start">
                        <div className="p-2.5 bg-purple-50 rounded-xl text-purple-600">
                          <CheckCircle className="w-5 h-5" />
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="text-2xl font-black text-gray-900 tracking-tight">
                          {stats.attempted}
                        </div>
                        <div className="text-gray-450 text-[10px] font-bold uppercase tracking-wider mt-1">Answered</div>
                        <div className="text-[9px] text-gray-400 font-medium mt-1">
                          Across all sections
                        </div>
                      </div>
                    </Card>

                    {/* Accuracy Card */}
                    <Card className="rounded-xl border border-gray-300 p-5 bg-white shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="flex justify-between items-start">
                        <div className="p-2.5 bg-emerald-50 rounded-xl text-emerald-600">
                          <Target className="w-5 h-5" />
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="text-2xl font-black text-gray-900 tracking-tight">
                          {stats.accuracy}%
                        </div>
                        <div className="text-gray-450 text-[10px] font-bold uppercase tracking-wider mt-1">Avg Accuracy</div>
                        <div className="text-[9px] text-gray-400 font-medium mt-1">
                          Target is 80%+
                        </div>
                      </div>
                    </Card>
                  </div>

                  {/* Module Breakdown Section */}
                  <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-150 pb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Module Performance Breakdown</h3>
                        <p className="text-gray-500 text-xs mt-1">
                          Track your completion rates and accuracy stats for each individual module. Click any card to study it.
                        </p>
                      </div>
                      <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 p-1 rounded-lg self-start sm:self-auto">
                        <button
                          onClick={() => setSortBy('weakest')}
                          className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all ${
                            sortBy === 'weakest'
                              ? 'bg-white text-gray-900 shadow-sm'
                              : 'text-gray-500 hover:text-gray-900'
                          }`}
                        >
                          Weakest First
                        </button>
                        <button
                          onClick={() => setSortBy('name')}
                          className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all ${
                            sortBy === 'name'
                              ? 'bg-white text-gray-900 shadow-sm'
                              : 'text-gray-500 hover:text-gray-900'
                          }`}
                        >
                          Name (A-Z)
                        </button>
                      </div>
                    </div>

                    <div className="grid gap-4">
                      {sortedAnalysis.map(({ category, totalAttempted, completedSectionsCount, totalSectionsCount, accuracy, completionPercent, masteryStatus }) => {
                        return (
                          <div
                            key={category.id}
                            onClick={() => {
                              setSelectedCategory(category)
                              setActiveTab('question_bank')
                            }}
                            className="bg-white rounded-xl border border-gray-300 p-5 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-[#007aff]/60 hover:shadow-sm cursor-pointer transition-all duration-250 group"
                          >
                            <div className="flex-grow space-y-3">
                              <div className="flex items-center gap-2.5 flex-wrap">
                                <h4 className="font-extrabold text-gray-900 group-hover:text-[#007aff] transition-colors leading-tight text-base">
                                  {category.name}
                                </h4>
                                <span className="text-[10px] font-bold text-gray-400 border border-gray-200 bg-gray-50/50 px-1.5 py-0.5 rounded uppercase">
                                  {category.code}
                                </span>
                                {/* Status Badge */}
                                {masteryStatus === 'mastered' && (
                                  <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 border border-emerald-100 text-[10px] font-bold px-2 py-0.5 rounded-full">
                                    <Check className="w-2.5 h-2.5" /> Mastered
                                  </span>
                                )}
                                {masteryStatus === 'review' && (
                                  <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-700 border border-amber-100 text-[10px] font-bold px-2 py-0.5 rounded-full">
                                    <AlertTriangle className="w-2.5 h-2.5" /> Needs Review
                                  </span>
                                )}
                                {masteryStatus === 'unstarted' && (
                                  <span className="inline-flex items-center gap-1 bg-gray-50 text-gray-550 border border-gray-150 text-[10px] font-bold px-2 py-0.5 rounded-full">
                                    Not Started
                                  </span>
                                )}
                              </div>
                              
                              {/* Progress bar and details */}
                              <div className="flex items-center gap-4 max-w-lg">
                                <div className="flex-grow">
                                  <div className="flex justify-between text-[10px] font-bold text-gray-450 uppercase mb-1">
                                    <span>Progress</span>
                                    <span>{completedSectionsCount} / {totalSectionsCount} sections</span>
                                  </div>
                                  <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                                    <div
                                      className={`h-full rounded-full transition-all duration-500 ${
                                        masteryStatus === 'mastered' ? 'bg-emerald-500' : masteryStatus === 'review' ? 'bg-amber-500' : 'bg-gray-300'
                                      }`}
                                      style={{ width: `${completionPercent}%` }}
                                    />
                                  </div>
                                </div>
                                <span className="text-sm font-extrabold text-gray-700 w-10 text-right">{completionPercent}%</span>
                              </div>
                            </div>

                            {/* Accuracy & Arrow */}
                            <div className="flex items-center justify-between md:justify-end gap-6 border-t md:border-t-0 border-gray-100 pt-3 md:pt-0">
                              <div className="text-left md:text-right">
                                <div className="text-lg font-black text-gray-900">
                                  {totalAttempted > 0 ? `${accuracy}%` : '—'}
                                </div>
                                <div className="text-gray-450 text-[10px] font-bold uppercase tracking-wider">Average Accuracy</div>
                              </div>
                              <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#007aff]/5 group-hover:text-[#007aff] transition-all duration-200">
                                <ChevronRight className="w-4 h-4" />
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )
            })()}


          </>
        )}
      </main>

      {/* Mobile Sticky Bottom Tab Bar (Option 1) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#007aff] px-4 py-2 pb-3.5 flex justify-around items-center shadow-[0_-4px_16px_rgba(0,122,255,0.15)]">
        <button
          onClick={() => {
            setSelectedCategory(null)
            setActiveTab('question_bank')
          }}
          className={`flex flex-col items-center gap-1.5 py-1 px-4 rounded-xl transition-all duration-200 ${
            activeTab === 'question_bank'
              ? 'text-[#007aff] bg-white font-bold shadow-sm'
              : 'text-white/70 hover:text-white'
          }`}
        >
          <Database className="w-5 h-5" />
          <span className="text-[10px] font-bold tracking-tight">Practice</span>
        </button>
        
        <button
          onClick={() => {
            setSelectedCategory(null)
            setActiveTab('mock_exams')
          }}
          className={`flex flex-col items-center gap-1.5 py-1 px-4 rounded-xl transition-all duration-200 ${
            activeTab === 'mock_exams'
              ? 'text-[#007aff] bg-white font-bold shadow-sm'
              : 'text-white/70 hover:text-white'
          }`}
        >
          <ClipboardList className="w-5 h-5" />
          <span className="text-[10px] font-bold tracking-tight">Mock Exams</span>
        </button>
        
        <button
          onClick={() => {
            setSelectedCategory(null)
            setActiveTab('analytics')
          }}
          className={`flex flex-col items-center gap-1.5 py-1 px-4 rounded-xl transition-all duration-200 ${
            activeTab === 'analytics'
              ? 'text-[#007aff] bg-white font-bold shadow-sm'
              : 'text-white/70 hover:text-white'
          }`}
        >
          <TrendingUp className="w-5 h-5" />
          <span className="text-[10px] font-bold tracking-tight">Analytics</span>
        </button>
      </div>
    </div>
  )
}
