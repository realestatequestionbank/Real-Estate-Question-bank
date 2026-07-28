import { type StateKey } from '@/lib/constants'

// Map of state keys to their dedicated page URLs
// States with custom (non-shared-component) pages are listed first
export const STATE_DEDICATED_PAGES: Record<StateKey, string> = {
  // Original 5 states with custom pages
  'california': '/california-real-estate-permit-test',
  'north-carolina': '/north-carolina-real-estate-permit-test',
  'washington': '/washington-dol-permit-test',
  'texas': '/texas-dps-permit-test',
  'new-york': '/new-york-real-estate-permit-test',

  // States using shared component
  'florida': '/florida-real-estate-permit-test',
  'georgia': '/georgia-dds-permit-test',
  'alabama': '/alabama-real-estate-permit-test',
  'alaska': '/alaska-real-estate-permit-test',
  'arizona': '/arizona-mvd-permit-test',
  'arkansas': '/arkansas-dfa-permit-test',
  'colorado': '/colorado-real-estate-permit-test',
  'connecticut': '/connecticut-real-estate-permit-test',
  'delaware': '/delaware-real-estate-permit-test',
  'hawaii': '/hawaii-real-estate-permit-test',
  'idaho': '/idaho-real-estate-permit-test',
  'illinois': '/illinois-sos-permit-test',
  'indiana': '/indiana-bmv-permit-test',
  'iowa': '/iowa-dot-permit-test',
  'kansas': '/kansas-real-estate-permit-test',
  'kentucky': '/kentucky-real-estate-permit-test',
  'louisiana': '/louisiana-omv-permit-test',
  'maine': '/maine-bmv-permit-test',
  'maryland': '/maryland-mva-permit-test',
  'massachusetts': '/massachusetts-rmv-permit-test',
  'michigan': '/michigan-sos-permit-test',
  'minnesota': '/minnesota-dvs-permit-test',
  'mississippi': '/mississippi-dps-permit-test',
  'missouri': '/missouri-dor-permit-test',
  'montana': '/montana-mvd-permit-test',
  'nebraska': '/nebraska-real-estate-permit-test',
  'nevada': '/nevada-real-estate-permit-test',
  'new-hampshire': '/new-hampshire-real-estate-permit-test',
  'new-jersey': '/new-jersey-mvc-permit-test',
  'new-mexico': '/new-mexico-mvd-permit-test',
  'north-dakota': '/north-dakota-dot-permit-test',
  'ohio': '/ohio-bmv-permit-test',
  'oklahoma': '/oklahoma-dps-permit-test',
  'oregon': '/oregon-real-estate-permit-test',
  'pennsylvania': '/pennsylvania-penndot-permit-test',
  'rhode-island': '/rhode-island-real-estate-permit-test',
  'south-carolina': '/south-carolina-real-estate-permit-test',
  'south-dakota': '/south-dakota-dps-permit-test',
  'tennessee': '/tennessee-dos-permit-test',
  'utah': '/utah-real-estate-permit-test',
  'vermont': '/vermont-real-estate-permit-test',
  'virginia': '/virginia-real-estate-permit-test',
  'west-virginia': '/west-virginia-real-estate-permit-test',
  'wisconsin': '/wisconsin-dot-permit-test',
  'wyoming': '/wyoming-dot-permit-test',
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
