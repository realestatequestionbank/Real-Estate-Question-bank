import { type StateKey } from '@/lib/constants'

// Map of state keys to their dedicated page URLs
// States with custom (non-shared-component) pages are listed first
export const STATE_DEDICATED_PAGES: Record<StateKey, string> = {
  // Custom pages
  'california': '/california-real-estate-practice-test',
  'north-carolina': '/north-carolina-real-estate-practice-test',
  'washington': '/washington-real-estate-practice-test',
  'texas': '/texas-real-estate-practice-test',
  'new-york': '/new-york-real-estate-practice-test',

  // States using shared component
  'florida': '/florida-real-estate-practice-test',
  'georgia': '/georgia-real-estate-practice-test',
  'alabama': '/alabama-real-estate-practice-test',
  'alaska': '/alaska-real-estate-practice-test',
  'arizona': '/arizona-real-estate-practice-test',
  'arkansas': '/arkansas-real-estate-practice-test',
  'colorado': '/colorado-real-estate-practice-test',
  'connecticut': '/connecticut-real-estate-practice-test',
  'delaware': '/delaware-real-estate-practice-test',
  'hawaii': '/hawaii-real-estate-practice-test',
  'idaho': '/idaho-real-estate-practice-test',
  'illinois': '/illinois-real-estate-practice-test',
  'indiana': '/indiana-real-estate-practice-test',
  'iowa': '/iowa-real-estate-practice-test',
  'kansas': '/kansas-real-estate-practice-test',
  'kentucky': '/kentucky-real-estate-practice-test',
  'louisiana': '/louisiana-real-estate-practice-test',
  'maine': '/maine-real-estate-practice-test',
  'maryland': '/maryland-real-estate-practice-test',
  'massachusetts': '/massachusetts-real-estate-practice-test',
  'michigan': '/michigan-real-estate-practice-test',
  'minnesota': '/minnesota-real-estate-practice-test',
  'mississippi': '/mississippi-real-estate-practice-test',
  'missouri': '/missouri-real-estate-practice-test',
  'montana': '/montana-real-estate-practice-test',
  'nebraska': '/nebraska-real-estate-practice-test',
  'nevada': '/nevada-real-estate-practice-test',
  'new-hampshire': '/new-hampshire-real-estate-practice-test',
  'new-jersey': '/new-jersey-real-estate-practice-test',
  'new-mexico': '/new-mexico-real-estate-practice-test',
  'north-dakota': '/north-dakota-real-estate-practice-test',
  'ohio': '/ohio-real-estate-practice-test',
  'oklahoma': '/oklahoma-real-estate-practice-test',
  'oregon': '/oregon-real-estate-practice-test',
  'pennsylvania': '/pennsylvania-real-estate-practice-test',
  'rhode-island': '/rhode-island-real-estate-practice-test',
  'south-carolina': '/south-carolina-real-estate-practice-test',
  'south-dakota': '/south-dakota-real-estate-practice-test',
  'tennessee': '/tennessee-real-estate-practice-test',
  'utah': '/utah-real-estate-practice-test',
  'vermont': '/vermont-real-estate-practice-test',
  'virginia': '/virginia-real-estate-practice-test',
  'west-virginia': '/west-virginia-real-estate-practice-test',
  'wisconsin': '/wisconsin-real-estate-practice-test',
  'wyoming': '/wyoming-real-estate-practice-test',
}

// Helper to get the dedicated page URL for a state
export function getStateDedicatedPageUrl(state: StateKey): string {
  return STATE_DEDICATED_PAGES[state] || `/state/${state}/free`
}

// Helper to get the dedicated page URL with a hash fragment
export function getStateDedicatedPageUrlWithHash(state: StateKey, hash: string): string {
  const baseUrl = getStateDedicatedPageUrl(state)
  return `${baseUrl}#${hash}`
}

// List of all states with dedicated pages (for sitemap, etc.)
export const STATES_WITH_DEDICATED_PAGES = Object.keys(STATE_DEDICATED_PAGES) as StateKey[]
