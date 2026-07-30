// State configuration - Only states with available CSV question files
export const STATES = {
  'alabama': { name: 'Alabama', code: 'AL', emoji: '🏛️', description: 'Available' },
  'alaska': { name: 'Alaska', code: 'AK', emoji: '🐻', description: 'Available' },
  'arizona': { name: 'Arizona', code: 'AZ', emoji: '🌵', description: 'Available' },
  'arkansas': { name: 'Arkansas', code: 'AR', emoji: '💎', description: 'Available' },
  'california': { name: 'California', code: 'CA', emoji: '🌴', description: 'Most Popular' },
  'colorado': { name: 'Colorado', code: 'CO', emoji: '🏔️', description: 'Available' },
  'connecticut': { name: 'Connecticut', code: 'CT', emoji: '🍂', description: 'Available' },
  'delaware': { name: 'Delaware', code: 'DE', emoji: '🏖️', description: 'Available' },
  'florida': { name: 'Florida', code: 'FL', emoji: '🌴', description: 'Available' },
  'georgia': { name: 'Georgia', code: 'GA', emoji: '🍑', description: 'Available' },
  'hawaii': { name: 'Hawaii', code: 'HI', emoji: '🌺', description: 'Available' },
  'idaho': { name: 'Idaho', code: 'ID', emoji: '🥔', description: 'Available' },
  'illinois': { name: 'Illinois', code: 'IL', emoji: '🌆', description: 'Available' },
  'indiana': { name: 'Indiana', code: 'IN', emoji: '🏁', description: 'Available' },
  'iowa': { name: 'Iowa', code: 'IA', emoji: '🌽', description: 'Available' },
  'kansas': { name: 'Kansas', code: 'KS', emoji: '🌾', description: 'Available' },
  'kentucky': { name: 'Kentucky', code: 'KY', emoji: '🐎', description: 'Available' },
  'louisiana': { name: 'Louisiana', code: 'LA', emoji: '🎺', description: 'Available' },
  'maine': { name: 'Maine', code: 'ME', emoji: '🦞', description: 'Available' },
  'maryland': { name: 'Maryland', code: 'MD', emoji: '🦀', description: 'Available' },
  'massachusetts': { name: 'Massachusetts', code: 'MA', emoji: '🍎', description: 'Available' },
  'michigan': { name: 'Michigan', code: 'MI', emoji: '🚗', description: 'Available' },
  'minnesota': { name: 'Minnesota', code: 'MN', emoji: '❄️', description: 'Available' },
  'mississippi': { name: 'Mississippi', code: 'MS', emoji: '🐊', description: 'Available' },
  'missouri': { name: 'Missouri', code: 'MO', emoji: '⛰️', description: 'Available' },
  'montana': { name: 'Montana', code: 'MT', emoji: '🗻', description: 'Available' },
  'nebraska': { name: 'Nebraska', code: 'NE', emoji: '🌾', description: 'Available' },
  'nevada': { name: 'Nevada', code: 'NV', emoji: '🎰', description: 'Available' },
  'new-hampshire': { name: 'New Hampshire', code: 'NH', emoji: '🏔️', description: 'Available' },
  'new-jersey': { name: 'New Jersey', code: 'NJ', emoji: '🏖️', description: 'Available' },
  'new-mexico': { name: 'New Mexico', code: 'NM', emoji: '🌶️', description: 'Available' },
  'new-york': { name: 'New York', code: 'NY', emoji: '🗽', description: 'Available' },
  'north-carolina': { name: 'North Carolina', code: 'NC', emoji: '🏔️', description: 'Available' },
  'north-dakota': { name: 'North Dakota', code: 'ND', emoji: '🌾', description: 'Available' },
  'ohio': { name: 'Ohio', code: 'OH', emoji: '🌰', description: 'Available' },
  'oklahoma': { name: 'Oklahoma', code: 'OK', emoji: '🛢️', description: 'Available' },
  'oregon': { name: 'Oregon', code: 'OR', emoji: '🌲', description: 'Available' },
  'pennsylvania': { name: 'Pennsylvania', code: 'PA', emoji: '🔔', description: 'Available' },
  'rhode-island': { name: 'Rhode Island', code: 'RI', emoji: '⚓', description: 'Available' },
  'south-carolina': { name: 'South Carolina', code: 'SC', emoji: '🌴', description: 'Available' },
  'south-dakota': { name: 'South Dakota', code: 'SD', emoji: '🗿', description: 'Available' },
  'tennessee': { name: 'Tennessee', code: 'TN', emoji: '🎸', description: 'Available' },
  'texas': { name: 'Texas', code: 'TX', emoji: '🤠', description: 'Comprehensive' },
  'utah': { name: 'Utah', code: 'UT', emoji: '🏔️', description: 'Available' },
  'vermont': { name: 'Vermont', code: 'VT', emoji: '🍁', description: 'Available' },
  'virginia': { name: 'Virginia', code: 'VA', emoji: '🏛️', description: 'Available' },
  'washington': { name: 'Washington', code: 'WA', emoji: '🌲', description: 'Available' },
  'west-virginia': { name: 'West Virginia', code: 'WV', emoji: '⛰️', description: 'Available' },
  'wisconsin': { name: 'Wisconsin', code: 'WI', emoji: '🧀', description: 'Available' },
  'wyoming': { name: 'Wyoming', code: 'WY', emoji: '🦌', description: 'Available' },
} as const;

export type StateKey = keyof typeof STATES;

// Flash Sale Configuration
// Set endTime to the desired end time (UTC)
export const FLASH_SALE = {
  enabled: false,
  endTime: '2026-06-14T02:28:13-07:00', // Active until Jun 14 2:28 AM PDT (12h)
  PLANS: {
    SEVEN_DAY: {
      id: 'seven_day',
      name: '7-Day Plan',
      duration: 7,
      originalPrice: 39,
      discountedPrice: 24,
      stripePriceId: 'price_1TyjCWLU7dSYKo6xpGKhe3YB'
    },
    THIRTY_DAY: {
      id: 'thirty_day',
      name: '30-Day Plan',
      duration: 30,
      originalPrice: 59,
      discountedPrice: 39,
      stripePriceId: 'price_1TyjDULU7dSYKo6xMoixiyPY'
    },
    LIFETIME: {
      id: 'lifetime',
      name: 'Lifetime Plan',
      duration: 36500,
      originalPrice: 149,
      discountedPrice: 149,
      stripePriceId: 'price_1TyjHtLU7dSYKo6x96XA66zF'
    }
  }
} as const;

// Offer Expiry Date - Centralized date for all offer expiry displays
export const OFFER_EXPIRY_DATE = new Date(FLASH_SALE.endTime);

// Helper to format the offer expiry date
export const formatOfferExpiryDate = (format: 'short' | 'long' = 'short'): string => {
  if (format === 'long') {
    return OFFER_EXPIRY_DATE.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  }
  return OFFER_EXPIRY_DATE.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};

// Base Pricing (Regular Price)
export const BASE_PRICING = {
  FREE_QUESTIONS_LIMIT: 20,
  STRIPE_PRICE_ID: 'price_1TyjDULU7dSYKo6xMoixiyPY',
  PLANS: {
    SEVEN_DAY: {
      id: 'seven_day',
      name: '7-Day Plan',
      duration: 7,
      originalPrice: 39,
      discountedPrice: 39,
      stripePriceId: 'price_1TyjCWLU7dSYKo6xpGKhe3YB'
    },
    THIRTY_DAY: {
      id: 'thirty_day',
      name: '30-Day Plan',
      duration: 30,
      originalPrice: 59,
      discountedPrice: 59,
      stripePriceId: 'price_1TyjDULU7dSYKo6xMoixiyPY'
    },
    LIFETIME: {
      id: 'lifetime',
      name: 'Lifetime Plan',
      duration: 36500,
      originalPrice: 149,
      discountedPrice: 149,
      stripePriceId: 'price_1TyjHtLU7dSYKo6x96XA66zF'
    }
  }
};

// Pricing Helper Functions
export const isFlashSaleActive = (): boolean => {
  if (!FLASH_SALE.enabled) return false;
  const now = new Date();
  const endTime = new Date(FLASH_SALE.endTime);
  return now < endTime;
};

export const getEffectivePricing = () => {
  if (isFlashSaleActive()) {
    return {
      FREE_QUESTIONS_LIMIT: BASE_PRICING.FREE_QUESTIONS_LIMIT,
      STRIPE_PRICE_ID: FLASH_SALE.PLANS.THIRTY_DAY.stripePriceId,
      PLANS: {
        SEVEN_DAY: FLASH_SALE.PLANS.SEVEN_DAY,
        THIRTY_DAY: FLASH_SALE.PLANS.THIRTY_DAY,
        LIFETIME: FLASH_SALE.PLANS.LIFETIME
      }
    };
  }
  return BASE_PRICING;
};

export const PRICING = {
  get FREE_QUESTIONS_LIMIT() { return getEffectivePricing().FREE_QUESTIONS_LIMIT },
  get STRIPE_PRICE_ID() { return getEffectivePricing().STRIPE_PRICE_ID },
  get PLANS() { return getEffectivePricing().PLANS }
};

// Routes
export const ROUTES = {
  HOME: '/',
  DASHBOARD: '/dashboard',
  PRICING: '/pricing',
  LOGIN: '/auth/login',
  SIGNUP: '/auth/signup',
  PROFILE: '/profile',
  STATE_FREE: (state: string) => `/state/${state}/free`,
  STATE_PREMIUM: (state: string) => `/state/${state}/premium`,
} as const;

// Firebase collections
export const COLLECTIONS = {
  USERS: 'users',
  PURCHASES: 'purchases',
  PROGRESS: 'progress',
  QUESTIONS: 'questions',
  FEEDBACK: 'feedback',
} as const;