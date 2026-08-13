import { californiaStateData } from '@/lib/states/california'
import { STATES, PRICING, FLASH_SALE } from '@/lib/constants'
import { getDepartmentName } from '@/lib/data/state-departments'
import { formatQuestionCount } from '@/lib/utils/formatQuestionCount'

// Pre-computed static data for California Real Estate Exam practice page
export const californiaStaticPageData = {
  state: 'california' as const,
  stateInfo: STATES.california,
  departmentInfo: getDepartmentName('california'),
  stateData: {
    ...californiaStateData,
    handbookUrl: '',
  },

  pricing: PRICING,

  // Pre-formatted strings to avoid client-side computation
  formattedQuestionCount: formatQuestionCount(californiaStateData.pricing.premiumQuestions),

  // Static content that doesn't change
  heroContent: {
    badgeText: `Updated for 2026 Real Estate Exams`,
    headline: `Master the California`,
    description: `Don't leave your real estate license to chance. Join 25K+ students using our state-specific question bank.`,
    primaryButtonText: `Get All ${formatQuestionCount(californiaStateData.pricing.premiumQuestions)} Exam-like Questions`,
    secondaryButtonText: `Try ${californiaStateData.pricing.freeQuestions} Free Questions`,
  },

  // Static stats
  stats: [
    { value: '2026', label: 'Updated Content' },
    { value: '25K+', label: 'Students Helped' },
    { value: formatQuestionCount(californiaStateData.pricing.premiumQuestions), label: 'Practice Questions' },
    { value: '4.8/5', label: 'Student Rating' },
  ],

  // Test overview section
  testOverview: {
    title: 'How to Pass the California DRE Real Estate Exam',
    description: `Learning how to pass the California Real Estate Exam requires understanding real estate principles, property disclosures, and state-specific licensing regulations. Our comprehensive study system helps you prepare for the California Real Estate Exam with realistic practice questions and detailed explanations.`,
    handbookButtonText: 'View Official Real Estate Handbook',
  },

  // Static pricing plans with computed values
  pricingPlans: (() => {
    // Calculate discount percentage helper
    const calcDiscount = (original: number, discounted: number) => {
        const discount = Math.round(((original - discounted) / original) * 100);
        return discount > 0 ? `${discount}% OFF` : null;
    };

    return {
      sevenDay: {
        duration: 7,
        title: '7-Day Plan',
        badge: calcDiscount(PRICING.PLANS.SEVEN_DAY.originalPrice, PRICING.PLANS.SEVEN_DAY.discountedPrice),
        originalPrice: `$${PRICING.PLANS.SEVEN_DAY.originalPrice}`,
        discountedPrice: `$${PRICING.PLANS.SEVEN_DAY.discountedPrice}`,
        stripePriceId: PRICING.PLANS.SEVEN_DAY.stripePriceId,
      },
      thirtyDay: {
        duration: 30,
        title: '30-Day Plan',
        badge: calcDiscount(PRICING.PLANS.THIRTY_DAY.originalPrice, PRICING.PLANS.THIRTY_DAY.discountedPrice),
        originalPrice: `$${PRICING.PLANS.THIRTY_DAY.originalPrice}`,
        discountedPrice: `$${PRICING.PLANS.THIRTY_DAY.discountedPrice}`,
        stripePriceId: PRICING.PLANS.THIRTY_DAY.stripePriceId,
        isPopular: true,
      },
      lifetime: {
        duration: 36500,
        title: 'Lifetime Plan',
        badge: calcDiscount(PRICING.PLANS.LIFETIME.originalPrice, PRICING.PLANS.LIFETIME.discountedPrice),
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
      description: `Access 2000 practice questions for your state, covering all official Real Estate handbooks updated for 2026.`,
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
      description: 'Learn how to prepare for the California Real Estate Exam with comprehensive explanations for every question',
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
    { label: 'California', href: null }, // Current page
  ],
}