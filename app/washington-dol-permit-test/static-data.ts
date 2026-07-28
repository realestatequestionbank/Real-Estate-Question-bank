import { washingtonStateData } from '@/lib/states/washington'
import { STATES, PRICING, FLASH_SALE } from '@/lib/constants'
import { getDepartmentName } from '@/lib/data/state-departments'
import { formatQuestionCount } from '@/lib/utils/formatQuestionCount'

// Pre-computed static data for Washington DOL test practice page
export const washingtonStaticPageData = {
  state: 'washington' as const,
  stateInfo: STATES['washington'],
  departmentInfo: getDepartmentName('washington'),
  stateData: {
    ...washingtonStateData,
    handbookUrl: '',
  },

  pricing: PRICING,

  // Pre-formatted strings to avoid client-side computation
  formattedQuestionCount: formatQuestionCount(washingtonStateData.pricing.premiumQuestions),

  // Static content that doesn't change
  heroContent: {
    badgeText: `Updated for 2026 DOL Exams`,
    headline: `Master the Washington`,
    description: `Don't leave your real estate license to chance. Join 100K+ students using our state-specific question bank.`,
    primaryButtonText: `Get All ${formatQuestionCount(washingtonStateData.pricing.premiumQuestions)} Exam-like Questions`,
    secondaryButtonText: `Try ${washingtonStateData.pricing.freeQuestions} Free Questions`,
  },

  // Static stats
  stats: [
    { value: '2026', label: 'Updated Content' },
    { value: '100K+', label: 'Students Helped' },
    { value: formatQuestionCount(washingtonStateData.pricing.premiumQuestions), label: 'Practice Questions' },
    { value: '4.8/5', label: 'Student Rating' },
  ],

  // Test overview section
  testOverview: {
    title: 'What is the Washington DOL real estate exam?',
    description: `The Washington DOL real estate exam is a written examination that assesses your knowledge of traffic laws, road signs, and safe driving practices. This test is required for all aspiring agents seeking their first real estate license in Washington.`,
    handbookButtonText: 'View Official DOL Handbook',
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
      description: `Access ${formatQuestionCount(washingtonStateData.pricing.premiumQuestions)} practice questions for your state, covering all official DOL handbooks updated for 2026.`,
      icon: 'Book',
    },
    {
      title: 'Full-Length Mock Tests',
      description: 'Practice with realistic mock exams that simulate the actual DOL test experience',
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
    { label: 'Washington', href: null }, // Current page
  ],
}
