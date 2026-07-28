import { type StateKey } from '@/lib/constants'

export interface StatePageData {
  state: StateKey
  stateInfo: {
    name: string
    code: string
    emoji: string
    description: string
  }
  departmentInfo: {
    name: string
    fullName: string
  }
  stateData: {
    stateName: string
    pricing: {
      freeQuestions: number
      premiumQuestions: number
      plans: {
        sevenDay: {
          duration: number
          originalPrice: number
          discountedPrice: number
        }
        thirtyDay: {
          duration: number
          originalPrice: number
          discountedPrice: number
        }
        lifetime: {
          duration: number
          originalPrice: number
          discountedPrice: number
        }
      }
    }
    seo: {
      title: string
      description: string
      keywords: string[]
    }
    testOverview: {
      totalQuestions: number
      passingScore: number
      timeLimit: string
      ageRequirements: {
        under18: string
        over18: string
      }
      topicsCovered: string[]
    }
    testFormat: {
      questionTypes: string
      correctAnswersNeeded: number
      incorrectAnswersAllowed: number
      retakePolicy: string
    }
    commonMistakes: Array<{
      topic: string
      description: string
    }>
    studyTips: Array<{
      title: string
      description: string
    }>
    faq: Array<{
      question: string
      answer: string
    }>
    hasBlogs: boolean
    relatedBlogs: Array<{
      slug: string
      title: string
      excerpt: string
    }>
    lastUpdated: string
    handbookUrl: string
    officialResources?: {
      title: string
      description: string
      links: Array<{
        title: string
        url: string
        description: string
        icon?: string
      }>
    }
  }
  pricing: any
  formattedQuestionCount: string
  heroContent: {
    badgeText: string
    headline: string
    description: string
    primaryButtonText: string
    secondaryButtonText: string
  }
  stats: Array<{
    value: string
    label: string
  }>
  testOverview: {
    title: string
    description: string
    handbookButtonText: string
  }
  pricingPlans: {
    sevenDay: {
      duration: number
      originalPrice: string
      discountedPrice: string
      title: string
      badge: string
      stripePriceId: string
    }
    thirtyDay: {
      duration: number
      originalPrice: string
      discountedPrice: string
      title: string
      badge: string
      stripePriceId: string
      isPopular?: boolean
    }
    lifetime: {
      duration: number
      originalPrice: string
      discountedPrice: string
      title: string
      badge: string
      stripePriceId: string
    }
  }
  features: Array<{
    title: string
    description: string
    icon: string
  }>
  breadcrumbs: Array<{
    label: string
    href: string | null
  }>
}
