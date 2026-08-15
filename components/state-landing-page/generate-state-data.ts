import { STATES, PRICING, FLASH_SALE, getEffectivePricing, type StateKey } from '@/lib/constants'
import { getDepartmentName } from '@/lib/data/state-departments'
import { formatQuestionCount } from '@/lib/utils/formatQuestionCount'
import { type StatePageData } from './types'

// Dynamic imports for state data
export const stateDataImports: Record<string, () => Promise<any>> = {
  'alabama': () => import('@/lib/states/alabama').then(m => m.alabamaStateData),
  'alaska': () => import('@/lib/states/alaska').then(m => m.alaskaStateData),
  'arizona': () => import('@/lib/states/arizona').then(m => m.arizonaStateData),
  'arkansas': () => import('@/lib/states/arkansas').then(m => m.arkansasStateData),
  'california': () => import('@/lib/states/california').then(m => m.californiaStateData),
  'colorado': () => import('@/lib/states/colorado').then(m => m.coloradoStateData),
  'connecticut': () => import('@/lib/states/connecticut').then(m => m.connecticutStateData),
  'delaware': () => import('@/lib/states/delaware').then(m => m.delawareStateData),
  'florida': () => import('@/lib/states/florida').then(m => m.floridaStateData),
  'georgia': () => import('@/lib/states/georgia').then(m => m.georgiaStateData),
  'hawaii': () => import('@/lib/states/hawaii').then(m => m.hawaiiStateData),
  'idaho': () => import('@/lib/states/idaho').then(m => m.idahoStateData),
  'illinois': () => import('@/lib/states/illinois').then(m => m.illinoisStateData),
  'indiana': () => import('@/lib/states/indiana').then(m => m.indianaStateData),
  'iowa': () => import('@/lib/states/iowa').then(m => m.iowaStateData),
  'kansas': () => import('@/lib/states/kansas').then(m => m.kansasStateData),
  'kentucky': () => import('@/lib/states/kentucky').then(m => m.kentuckyStateData),
  'louisiana': () => import('@/lib/states/louisiana').then(m => m.louisianaStateData),
  'maine': () => import('@/lib/states/maine').then(m => m.maineStateData),
  'maryland': () => import('@/lib/states/maryland').then(m => m.marylandStateData),
  'massachusetts': () => import('@/lib/states/massachusetts').then(m => m.massachusettsStateData),
  'michigan': () => import('@/lib/states/michigan').then(m => m.michiganStateData),
  'minnesota': () => import('@/lib/states/minnesota').then(m => m.minnesotaStateData),
  'mississippi': () => import('@/lib/states/mississippi').then(m => m.mississippiStateData),
  'missouri': () => import('@/lib/states/missouri').then(m => m.missouriStateData),
  'montana': () => import('@/lib/states/montana').then(m => m.montanaStateData),
  'nebraska': () => import('@/lib/states/nebraska').then(m => m.nebraskaStateData),
  'nevada': () => import('@/lib/states/nevada').then(m => m.nevadaStateData),
  'new-hampshire': () => import('@/lib/states/new-hampshire').then(m => m.newhampshireStateData),
  'new-jersey': () => import('@/lib/states/new-jersey').then(m => m.newjerseyStateData),
  'new-mexico': () => import('@/lib/states/new-mexico').then(m => m.newmexicoStateData),
  'new-york': () => import('@/lib/states/new-york').then(m => m.newYorkStateData),
  'north-carolina': () => import('@/lib/states/north-carolina').then(m => m.northcarolinaStateData),
  'north-dakota': () => import('@/lib/states/north-dakota').then(m => m.northdakotaStateData),
  'ohio': () => import('@/lib/states/ohio').then(m => m.ohioStateData),
  'oklahoma': () => import('@/lib/states/oklahoma').then(m => m.oklahomaStateData),
  'oregon': () => import('@/lib/states/oregon').then(m => m.oregonStateData),
  'pennsylvania': () => import('@/lib/states/pennsylvania').then(m => m.pennsylvaniaStateData),
  'rhode-island': () => import('@/lib/states/rhode-island').then(m => m.rhodeislandStateData),
  'south-carolina': () => import('@/lib/states/south-carolina').then(m => m.southcarolinaStateData),
  'south-dakota': () => import('@/lib/states/south-dakota').then(m => m.southdakotaStateData),
  'tennessee': () => import('@/lib/states/tennessee').then(m => m.tennesseeStateData),
  'texas': () => import('@/lib/states/texas').then(m => m.texasStateData),
  'utah': () => import('@/lib/states/utah').then(m => m.utahStateData),
  'vermont': () => import('@/lib/states/vermont').then(m => m.vermontStateData),
  'virginia': () => import('@/lib/states/virginia').then(m => m.virginiaStateData),
  'washington': () => import('@/lib/states/washington').then(m => m.washingtonStateData),
  'west-virginia': () => import('@/lib/states/west-virginia').then(m => m.westvirginiaStateData),
  'wisconsin': () => import('@/lib/states/wisconsin').then(m => m.wisconsinStateData),
  'wyoming': () => import('@/lib/states/wyoming').then(m => m.wyomingStateData),
}

export async function generateStatePageData(stateKey: StateKey): Promise<StatePageData> {
  const stateDataLoader = stateDataImports[stateKey]
  if (!stateDataLoader) {
    throw new Error(`No state data found for ${stateKey}`)
  }

  const stateData = await stateDataLoader()
  const stateInfo = STATES[stateKey]
  const departmentInfo = getDepartmentName(stateKey)

  const effectivePricing = getEffectivePricing()

  // Generate handbook URL
  // Points to internal viewer page: /handbooks/[state]
  const handbookUrl = ""


  const calculateDiscountBadge = (original: number, discounted: number) => {
    if (original <= discounted) return null
    return `${Math.round(((original - discounted) / original) * 100)}% OFF`
  }

  return {
    state: stateKey,
    stateInfo,
    departmentInfo,
    stateData: {
      ...stateData,
      handbookUrl,
    },
    pricing: effectivePricing,
    formattedQuestionCount: formatQuestionCount(stateData.pricing.premiumQuestions),

    heroContent: {
      badgeText: 'Updated for 2026 Real Estate Exams',
      headline: `Master the ${stateInfo.name}`,
      description: "Don't leave your real estate license to chance. Join 25K+ students using our state-specific question bank.",
      primaryButtonText: `Get All ${formatQuestionCount(stateData.pricing.premiumQuestions)} Exam-like Questions`,
      secondaryButtonText: `Try ${stateData.pricing.freeQuestions} Free Questions`,
    },
    stats: [
      { value: '2026', label: 'Updated Content' },
      { value: '25K+', label: 'Students Helped' },
      { value: formatQuestionCount(stateData.pricing.premiumQuestions), label: 'Practice Questions' },
      { value: '4.8/5', label: 'Student Rating' },
    ],
    testOverview: {
      title: `How to Pass the ${stateInfo.name} ${departmentInfo.name} Real Estate Exam`,
      description: `The ${stateInfo.name} ${departmentInfo.name} real estate exam assesses your knowledge of national real estate principles, state-specific laws, contracts, agency relationships, and property math. Our comprehensive study system helps you prepare with realistic practice questions and detailed explanations.`,
      handbookButtonText: 'View Official Real Estate Handbook',
    },
    pricingPlans: {
      sevenDay: {
        ...stateData.pricing.plans.sevenDay,
        title: '7-Day Plan',
        badge: calculateDiscountBadge(effectivePricing.PLANS.SEVEN_DAY.originalPrice, effectivePricing.PLANS.SEVEN_DAY.discountedPrice),
        originalPrice: `$${effectivePricing.PLANS.SEVEN_DAY.originalPrice}`,
        discountedPrice: `$${effectivePricing.PLANS.SEVEN_DAY.discountedPrice}`,
        stripePriceId: effectivePricing.PLANS.SEVEN_DAY.stripePriceId,
      },
      thirtyDay: {
        ...stateData.pricing.plans.thirtyDay,
        title: '30-Day Plan',
        badge: calculateDiscountBadge(effectivePricing.PLANS.THIRTY_DAY.originalPrice, effectivePricing.PLANS.THIRTY_DAY.discountedPrice),
        originalPrice: `$${effectivePricing.PLANS.THIRTY_DAY.originalPrice}`,
        discountedPrice: `$${effectivePricing.PLANS.THIRTY_DAY.discountedPrice}`,
        stripePriceId: effectivePricing.PLANS.THIRTY_DAY.stripePriceId,
        isPopular: true,
      },
      lifetime: {
        ...stateData.pricing.plans.lifetime,
        title: 'Lifetime Plan',
        badge: calculateDiscountBadge(effectivePricing.PLANS.LIFETIME.originalPrice, effectivePricing.PLANS.LIFETIME.discountedPrice),
        originalPrice: `$${effectivePricing.PLANS.LIFETIME.originalPrice}`,
        discountedPrice: `$${effectivePricing.PLANS.LIFETIME.discountedPrice}`,
        stripePriceId: effectivePricing.PLANS.LIFETIME.stripePriceId,
      },
    },
    features: [
      {
        title: 'Full Question Bank',
        description: `Access ${formatQuestionCount(stateData.pricing.premiumQuestions)} practice questions for your state, covering all official Real Estate exam outlines updated for 2026.`,
        icon: 'Book',
      },
      {
        title: 'Full-Length Mock Tests',
        description: 'Practice with realistic mock exams that simulate the actual Real Estate Exam experience',
        icon: 'Target',
      },
      {
        title: 'Progress Tracking',
        description: 'Track your improvement and identify weak areas that need more practice',
        icon: 'TrendingUp',
      },
      {
        title: 'Detailed Explanations',
        description: 'Learn from comprehensive explanations for every question and answer choice',
        icon: 'CheckCircle',
      },
      {
        title: 'Revision Guide',
        description: 'Read our last minute revision guide to revise important concepts and numbers right before your exam.',
        icon: 'Users',
      },
      {
        title: 'Pass Guarantee',
        description: "If you don't pass after completing our course, we'll refund your money",
        icon: 'Shield',
      },
    ],
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'States', href: '/#states' },
      { label: stateInfo.name, href: null },
    ],
  }
}

// Synchronous version using pre-imported state data (for use in static data files)
export function generateStatePageDataSync(stateKey: StateKey, stateData: any): StatePageData {
  const stateInfo = STATES[stateKey]
  const departmentInfo = getDepartmentName(stateKey)
  const effectivePricing = getEffectivePricing()

  // Generate handbook URL
  // Points to internal viewer page: /handbooks/[state]
  const handbookUrl = ""


  const calculateDiscountBadge = (original: number, discounted: number) => {
    if (original <= discounted) return null
    return `${Math.round(((original - discounted) / original) * 100)}% OFF`
  }

  return {
    state: stateKey,
    stateInfo,
    departmentInfo,
    stateData: {
      ...stateData,
      handbookUrl,
    },
    pricing: effectivePricing,
    formattedQuestionCount: formatQuestionCount(stateData.pricing.premiumQuestions),

    heroContent: {
      badgeText: 'Updated for 2026 Real Estate Exams',
      headline: `Master the ${stateInfo.name}`,
      description: "Don't leave your real estate license to chance. Join 25K+ students using our state-specific question bank.",
      primaryButtonText: `Get All ${formatQuestionCount(stateData.pricing.premiumQuestions)} Exam-like Questions`,
      secondaryButtonText: `Try ${stateData.pricing.freeQuestions} Free Questions`,
    },
    stats: [
      { value: '2026', label: 'Updated Content' },
      { value: '25K+', label: 'Students Helped' },
      { value: formatQuestionCount(stateData.pricing.premiumQuestions), label: 'Practice Questions' },
      { value: '4.8/5', label: 'Student Rating' },
    ],
    testOverview: {
      title: `How to Pass the ${stateInfo.name} ${departmentInfo.name} Real Estate Exam`,
      description: `The ${stateInfo.name} ${departmentInfo.name} real estate exam assesses your knowledge of national real estate principles, state-specific laws, contracts, agency relationships, and property math. Our comprehensive study system helps you prepare with realistic practice questions and detailed explanations.`,
      handbookButtonText: 'View Official Real Estate Handbook',
    },
    pricingPlans: {
      sevenDay: {
        ...stateData.pricing.plans.sevenDay,
        title: '7-Day Plan',
        badge: calculateDiscountBadge(effectivePricing.PLANS.SEVEN_DAY.originalPrice, effectivePricing.PLANS.SEVEN_DAY.discountedPrice),
        originalPrice: `$${effectivePricing.PLANS.SEVEN_DAY.originalPrice}`,
        discountedPrice: `$${effectivePricing.PLANS.SEVEN_DAY.discountedPrice}`,
        stripePriceId: effectivePricing.PLANS.SEVEN_DAY.stripePriceId,
      },
      thirtyDay: {
        ...stateData.pricing.plans.thirtyDay,
        title: '30-Day Plan',
        badge: calculateDiscountBadge(effectivePricing.PLANS.THIRTY_DAY.originalPrice, effectivePricing.PLANS.THIRTY_DAY.discountedPrice),
        originalPrice: `$${effectivePricing.PLANS.THIRTY_DAY.originalPrice}`,
        discountedPrice: `$${effectivePricing.PLANS.THIRTY_DAY.discountedPrice}`,
        stripePriceId: effectivePricing.PLANS.THIRTY_DAY.stripePriceId,
        isPopular: true,
      },
      lifetime: {
        ...stateData.pricing.plans.lifetime,
        title: 'Lifetime Plan',
        badge: calculateDiscountBadge(effectivePricing.PLANS.LIFETIME.originalPrice, effectivePricing.PLANS.LIFETIME.discountedPrice),
        originalPrice: `$${effectivePricing.PLANS.LIFETIME.originalPrice}`,
        discountedPrice: `$${effectivePricing.PLANS.LIFETIME.discountedPrice}`,
        stripePriceId: effectivePricing.PLANS.LIFETIME.stripePriceId,
      },
    },
    features: [
      {
        title: 'Full Question Bank',
        description: `Access ${formatQuestionCount(stateData.pricing.premiumQuestions)} practice questions for your state, covering all official Real Estate exam outlines updated for 2026.`,
        icon: 'Book',
      },
      {
        title: 'Full-Length Mock Tests',
        description: 'Practice with realistic mock exams that simulate the actual Real Estate Exam experience',
        icon: 'Target',
      },
      {
        title: 'Progress Tracking',
        description: 'Track your improvement and identify weak areas that need more practice',
        icon: 'TrendingUp',
      },
      {
        title: 'Detailed Explanations',
        description: 'Learn from comprehensive explanations for every question and answer choice',
        icon: 'CheckCircle',
      },
      {
        title: 'Revision Guide',
        description: 'Read our last minute revision guide to revise important concepts and numbers right before your exam.',
        icon: 'Users',
      },
      {
        title: 'Pass Guarantee',
        description: "If you don't pass after completing our course, we'll refund your money",
        icon: 'Shield',
      },
    ],
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'States', href: '/#states' },
      { label: stateInfo.name, href: null },
    ],
  }
}
