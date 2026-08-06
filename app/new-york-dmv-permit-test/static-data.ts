import { newYorkStateData } from '@/lib/states/new-york'
import { STATES, PRICING, FLASH_SALE } from '@/lib/constants'
import { getDepartmentName } from '@/lib/data/state-departments'
import { formatQuestionCount } from '@/lib/utils/formatQuestionCount'

// Pre-computed static data for New York Real Estate Exam practice page
export const newyorkStaticPageData = {
  state: 'new-york' as const,
  stateInfo: STATES['new-york'],
  departmentInfo: getDepartmentName('new-york'),
  stateData: {
    ...newYorkStateData,
    handbookUrl: '',
  },

  pricing: PRICING,

  // Pre-formatted strings to avoid client-side computation
  formattedQuestionCount: formatQuestionCount(newYorkStateData.pricing.premiumQuestions),

  // Static content that doesn't change
  heroContent: {
    badgeText: `Updated for 2026 Real Estate Exams`,
    headline: `Master the New York`,
    description: `Don't leave your real estate license to chance. Join 25K+ students using our state-specific question bank.`,
    primaryButtonText: `Get All ${formatQuestionCount(newYorkStateData.pricing.premiumQuestions)} Exam-like Questions`,
    secondaryButtonText: `Try ${newYorkStateData.pricing.freeQuestions} Free Questions`,
  },

  // Static stats
  stats: [
    { value: '2026', label: 'Updated Content' },
    { value: '25K+', label: 'Students Helped' },
    { value: formatQuestionCount(newYorkStateData.pricing.premiumQuestions), label: 'Practice Questions' },
    { value: '4.8/5', label: 'Student Rating' },
  ],

  // Test overview section
  testOverview: {
    title: 'How to Pass the New York NYDOS Real Estate Exam',
    description: `The New York NYDOS Real Estate Exam assesses your knowledge of national real estate principles, state-specific laws, contracts, agency relationships, and property math. Our comprehensive study system helps you prepare for the New York Real Estate Exam with realistic practice questions and detailed explanations.`,
    handbookButtonText: 'View Official Real Estate Handbook',
  },

  // Static pricing plans with computed values
  pricingPlans: (() => {
    // Calculate discount percentage helper
    const calcDiscount = (original: number, discounted: number) =>
      Math.round(((original - discounted) / original) * 100);

    return {
      sevenDay: {
        title: '7-Day Plan',
        badge: `${calcDiscount(PRICING.PLANS.SEVEN_DAY.originalPrice, PRICING.PLANS.SEVEN_DAY.discountedPrice)}% OFF`,
        originalPrice: `$${PRICING.PLANS.SEVEN_DAY.originalPrice}`,
        discountedPrice: `$${PRICING.PLANS.SEVEN_DAY.discountedPrice}`,
        stripePriceId: PRICING.PLANS.SEVEN_DAY.stripePriceId,
      },
      thirtyDay: {
        title: '30-Day Plan',
        badge: `${calcDiscount(PRICING.PLANS.THIRTY_DAY.originalPrice, PRICING.PLANS.THIRTY_DAY.discountedPrice)}% OFF`,
        originalPrice: `$${PRICING.PLANS.THIRTY_DAY.originalPrice}`,
        discountedPrice: `$${PRICING.PLANS.THIRTY_DAY.discountedPrice}`,
        stripePriceId: PRICING.PLANS.THIRTY_DAY.stripePriceId,
      },
      lifetime: {
        title: 'Lifetime Plan',
        badge: `${calcDiscount(PRICING.PLANS.LIFETIME.originalPrice, PRICING.PLANS.LIFETIME.discountedPrice)}% OFF`,
        originalPrice: `$${PRICING.PLANS.LIFETIME.originalPrice}`,
        discountedPrice: `$${PRICING.PLANS.LIFETIME.discountedPrice}`,
        stripePriceId: PRICING.PLANS.LIFETIME.stripePriceId,
      },
    };
  })(),

  // Static feature list
  features: [
    {
      title: 'Full Question Bank',
      description: `Access ${formatQuestionCount(newYorkStateData.pricing.premiumQuestions)} practice questions for your state, covering all official Real Estate handbooks updated for 2026.`,
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
      description: 'If you don\'t pass after completing our course, we\'ll refund your money',
      icon: 'Shield',
    },
  ],

  // Static breadcrumbs
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'States', href: '/#states' },
    { label: 'New York', href: null }, // Current page
  ],
}
