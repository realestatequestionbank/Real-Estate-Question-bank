import { StateKey } from '@/lib/constants'

interface StateDetails {
  cities: string[]
  highways: string[]
  geography: string
  companies: string[]
  industries: string[]
}

const customStateDetails: Partial<Record<StateKey, StateDetails>> = {
  california: {
    cities: ['Los Angeles', 'San Francisco', 'Salinas', 'San Bernardino'],
    highways: ['I-5', 'I-80', 'Highway 1', 'I-15'],
    geography: 'the steep mountain passes of the Sierra Nevada, narrow winding coastal cliffs along Highway 1, and the heavy commercial traffic of the I-5 corridor',
    companies: ['Swift Transportation', 'XPO Logistics', 'Greyhound Lines', 'Coach USA'],
    industries: ['Silicon Valley technology', 'Central Valley agriculture', 'Hollywood film production logistics', 'shipping ports of LA and Long Beach'],
  },
  'new-york': {
    cities: ['New York City', 'Buffalo', 'Albany', 'Syracuse'],
    highways: ['I-90 (NYS Thruway)', 'I-87', 'I-95', 'I-81'],
    geography: 'the busy urban streets of New York City, the snowy passes of the Adirondacks, and the long stretches of the New York State Thruway (I-90)',
    companies: ['MTA Bus Company', 'J.B. Hunt', 'Estes Express Lines', 'Greyhound'],
    industries: ['metropolitan transit networks', 'manufacturing logistics', 'statewide agricultural distribution', 'interstate commerce'],
  },
  texas: {
    cities: ['Houston', 'Dallas', 'San Antonio', 'El Paso'],
    highways: ['I-10', 'I-35', 'I-45', 'I-20'],
    geography: 'the sprawling plains of West Texas, the heavily congested I-35 corridor, and the vast interstate routes connecting the state\'s major industrial hubs',
    companies: ['Swift Transportation', 'Schneider National', 'Old Dominion Freight Line', 'YRC Freight'],
    industries: ['oil and gas logistics', 'construction supply chains', 'cross-border trade operations', 'massive agricultural distribution'],
  },
  florida: {
    cities: ['Miami', 'Orlando', 'Jacksonville', 'Tampa'],
    highways: ['I-95', 'I-4', 'I-75', 'Florida\'s Turnpike'],
    geography: 'congested metropolitan expressways, flat coastal corridors, and the long interstate spans connecting northern and southern ports',
    companies: ['Ryder System', 'Werner Enterprises', 'Greyhound', 'Southeastern Freight Lines'],
    industries: ['tourism and theme park support services', 'active shipping port logistics', 'citrus and produce agriculture', 'regional retail distribution'],
  },
  illinois: {
    cities: ['Chicago', 'Springfield', 'Peoria', 'Rockford'],
    highways: ['I-90', 'I-55', 'I-80', 'I-57'],
    geography: 'the busy freight lanes around the Chicago metro area, flat agricultural plains, and critical highway junctions connecting the Midwest',
    companies: ['US Xpress', 'Hub Group', 'CTA Bus Lines', 'Pace Suburban Bus'],
    industries: ['rail-to-truck intermodal freight', 'heavy machinery manufacturing', 'corn and agricultural shipping', 'national logistics networks'],
  },
  pennsylvania: {
    cities: ['Philadelphia', 'Pittsburgh', 'Harrisburg', 'Allentown'],
    highways: ['I-76 (PA Turnpike)', 'I-80', 'I-81', 'I-95'],
    geography: 'the steep hills of the Appalachian Mountains, key interstate arteries like the Pennsylvania Turnpike (I-76), and tight urban grid zones',
    companies: ['Penske Logistics', 'Ward Transport', 'SEPTA', 'A. Duie Pyle'],
    industries: ['industrial manufacturing logistics', 'steel and coal transport', 'northeastern distribution hubs', 'interstate freight lanes'],
  },
}

function getStateDetails(stateKey: string, stateName: string, stateCode: string): StateDetails {
  const custom = customStateDetails[stateKey as StateKey]
  if (custom) return custom

  // Procedural fallback for states without hand-written variables
  return {
    cities: [`${stateName} City`, 'the state capital', 'regional freight centers'],
    highways: ['I-80', 'I-95', 'local freight routes'],
    geography: `the diverse highway networks, rural corridors, and demanding urban routes of ${stateName}`,
    companies: ['national logistics fleets', 'regional freight operators', 'local municipal transit agencies'],
    industries: ['regional commerce', 'agricultural transport', 'manufacturing distribution', 'local supply chains'],
  }
}

export interface CdlCopyParagraphs {
  intro: string
  careers: string
  examBreakdown: string
}

export function generateCdlTestDetails(stateKey: string, stateName: string, stateCode: string, testId: string, testName: string, deptName: string, lang: string = 'en'): CdlCopyParagraphs {
  const s = getStateDetails(stateKey, stateName, stateCode)
  const dName = deptName || 'Real Estate'

  if (lang === 'pa') {
    // Map internal test ID to Punjabi copy content
    switch (testId) {
      case 'class_a':
        return {
          intro: `ਜੇਕਰ ${s.highways[0]} 'ਤੇ ਵੱਡੇ ਵਪਾਰਕ ਟਰੱਕ ਚਲਾਉਣਾ ਜਾਂ ${s.cities[0]} ਰਾਹੀਂ ਮਾਲ ਲਿਜਾਣਾ ਤੁਹਾਡਾ ਪੇਸ਼ੇਵਰ ਟੀਚਾ ਹੈ, ਤਾਂ ਕਲਾਸ A ਕਮਰਸ਼ੀਅਲ ਡ੍ਰਾਈਵਰ ਲਾਇਸੈਂਸ (CDL) ਪ੍ਰਾਪਤ ਕਰਨਾ ਪਹਿਲਾ ਜ਼ਰੂਰੀ ਕਦਮ ਹੈ। 26,001 ਪੌਂਡ ਜਾਂ ਇਸ ਤੋਂ ਵੱਧ ਦੇ ਕੁੱਲ ਸੁਮੇਲ ਭਾਰ ਰੇਟਿੰਗ (GCWR) ਵਾਲੇ ਵਾਹਨਾਂ ਨੂੰ ਚਲਾਉਣ ਲਈ ਵਿਸ਼ੇਸ਼ ਗਿਆਨ ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ, ਖਾਸ ਕਰਕੇ ਜਦੋਂ 10,000 ਪੌਂਡ ਤੋਂ ਵੱਧ ਦੇ ਟ੍ਰੇਲਰਾਂ ਨੂੰ ਖਿੱਚਣਾ ਹੋਵੇ। ${stateName} ਵਿੱਚ, ਵਪਾਰਕ ਡਰਾਈਵਰਾਂ ਨੂੰ ${s.highways[1]} ਵਰਗੇ ਰੂਟਾਂ 'ਤੇ ਚੱਲਣ ਵਾਲੀਆਂ ਤੇਜ਼ ਹਵਾਵਾਂ ਨੂੰ ਸੰਭਾਲਣਾ, ${s.geography} ਵਿੱਚੋਂ ਭਾਰੀ ਟ੍ਰੈਕਟਰ-ਟ੍ਰੇਲਰਾਂ ਨੂੰ ਨਿਯੰਤਰਿਤ ਕਰਨਾ, ਅਤੇ ਰਾਜ ਦੇ ਕਾਨੂੰਨਾਂ ਅਨੁਸਾਰ ਮਾਲ ਨੂੰ ਸੁਰੱਖਿਅਤ ਢੰਗ ਨਾਲ ਬੰਨ੍ਹਣਾ ਸਿੱਖਣਾ ਚਾਹੀਦਾ ਹੈ।`,
          careers: `ਸਾਰੇ ਰਾਜ ਵਿੱਚ ਉਦਯੋਗ, ${s.industries[0]} ਤੋਂ ਲੈ ਕੇ ${s.industries[1]} ਤੱਕ, ਕਲਾਸ A ਡਰਾਈਵਰਾਂ 'ਤੇ ਬਹੁਤ ਨਿਰਭਰ ਕਰਦੇ ਹਨ। ${s.companies[0]} ਅਤੇ ${s.companies[1]} ਵਰਗੀਆਂ ਪ੍ਰਮੁੱਖ ਲੌਜਿਸਟਿਕਸ ਕੰਪਨੀਆਂ ਹਮੇਸ਼ਾ ਲੰਬੀ ਦੂਰੀ ਦੇ ਰੂਟਾਂ ਲਈ ਪ੍ਰਮਾਣਿਤ ਡਰਾਈਵਰਾਂ ਦੀ ਭਾਲ ਵਿੱਚ ਰਹਿੰਦੀਆਂ ਹਨ। ਆਪਣੀ ਕਲਾਸ A ਲਿਖਤੀ ਅਤੇ ਪ੍ਰੈਕਟੀਕਲ ਪ੍ਰੀਖਿਆਵਾਂ ਪੂਰੀਆਂ ਕਰਕੇ ਤੁਸੀਂ ਆਪਣੇ ਟਰੱਕਿੰਗ ਕਰੀਅਰ ਦੀ ਸ਼ੁਰੂਆਤ ਕਰ ਸਕਦੇ ਹੋ, ਜਿਸ ਨਾਲ ਤੁਸੀਂ ਸ਼ੁਰੂਆਤੀ ਸਾਲਾਨਾ ਤਨਖਾਹ $60,000+ ਕਮਾ ਸਕਦੇ ਹੋ, ਅਤੇ ਤਜਰਬੇਕਾਰ ਡਰਾਈਵਰ $90,000+ ਤੋਂ ਵੱਧ ਕਮਾਉਂਦੇ ਹਨ।`,
          examBreakdown: `${stateName} ${testName} ਲਿਖਤੀ ਪ੍ਰੀਖਿਆ ਇੱਕ ਬਹੁ-ਚੋਣ ਪ੍ਰਸ਼ਨ ਪ੍ਰੀਖਿਆ ਹੈ ਜਿਸ ਵਿੱਚ ਅਧਿਕਾਰਤ CDL ਮੈਨੂਅਲ 'ਤੇ ਅਧਾਰਤ 50 ਪ੍ਰਸ਼ਨ ਹੁੰਦੇ ਹਨ। ਪਾਸ ਹੋਣ ਲਈ, ਤੁਹਾਨੂੰ ਘੱਟੋ-ਘੱਟ 80% (50 ਵਿੱਚੋਂ 40 sਨੂੰ ਸਹੀ) ਸਕੋਰ ਕਰਨ ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ। ਇਸ ਪ੍ਰੀਖਿਆ ਵਿੱਚ ਵਾਹਨ ਦੀ ਜਾਂਚ, ਬੁਨਿਆਦੀ ਨਿਯੰਤਰਣ ਪ੍ਰਣਾਲੀਆਂ, ਗੇਅਰ ਬਦਲਣਾ, ਬਚਾਅ ਪੱਖੀ ਡਰਾਈਵਿੰਗ, ਐਮਰਜੈਂਸੀ ਪ੍ਰਕਿਰਿਆਵਾਂ ਅਤੇ ਮਾਲ ਦੀ ਸੁਰੱਖਿਆ ਸ਼ਾਮਲ ਹੈ।`
        }

      case 'class_b':
        return {
          intro: `ਵੱਡੇ ਸਿੰਗਲ-ਯੂਨਿਟ ਵਪਾਰਕ ਵਾਹਨਾਂ ਜਿਵੇਂ ਕਿ dump ਟਰੱਕ, ਸੀਮਿੰਟ ਮਿਕਸਰ, ਡਿਲੀਵਰੀ ਟਰੱਕ, ਅਤੇ ਭਾਰੀ ਬੱਸਾਂ ਨੂੰ ਚਲਾਉਣ ਲਈ ਕਲਾਸ B ਕਮਰਸ਼ੀਅਲ ਡ੍ਰਾਈਵਰ ਲਾਇਸੈਂਸ ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ। ਕਲਾਸ B ਲਾਇਸੈਂਸ ਤੁਹਾਨੂੰ 26,001 ਪੌਂਡ ਜਾਂ ਇਸ ਤੋਂ ਵੱਧ ਭਾਰ ਵਾਲੇ ਵਾਹਨ ਚਲਾਉਣ ਦੀ ਇਜਾਜ਼ਤ ਦਿੰਦਾ ਹੈ, ਪਰ ਟ੍ਰੇਲਰ ਦਾ ਭਾਰ 10,000 ਪੌਂਡ ਤੋਂ ਘੱਟ होना ਚਾਹੀਦਾ ਹੈ। ${stateName} ਵਿੱਚ, ਇਨ੍ਹਾਂ ਵਾਹਨਾਂ ਨੂੰ ਚਲਾਉਣ ਲਈ ${s.cities[1]} ਵਰਗੇ ਸ਼ਹਿਰਾਂ ਵਿੱਚ ਤੰਗ ਮੋੜਾਂ ਨੂੰ ਸੰਭਾਲਣਾ, ${s.highways[0]} 'ਤੇ ਬ੍ਰੇਕਿੰਗ ਦਾ ਪ੍ਰਬੰਧਨ ਕਰਨਾ ਅਤੇ ${s.geography} ਵਰਗੇ ਖੇਤਰਾਂ ਵਿੱਚ ਸੁਰੱਖਿਅਤ ਢੰਗ ਨਾਲ ਗੱਡੀ ਚਲਾਉਣਾ ਸ਼ਾਮਲ ਹੈ।`,
          careers: `ਕਲਾਸ B CDL ${s.industries[2] || s.industries[0]} ਅਤੇ ਸਥਾਨਕ ਆਵਾਜਾਈ ਵਰਗੇ ਖੇਤਰਾਂ ਵਿੱਚ ਸਥਾਨਕ ਨੌਕਰੀਆਂ ਦੇ ਰਾਹ ਖੋਲ੍ਹਦਾ ਹੈ। ${s.companies[2] || s.companies[0]} ਵਰਗੀਆਂ ਕੰਪਨੀਆਂ ਅਤੇ ਸਥਾਨਕ ਡਿਲਿਵਰੀ ਫਲੀਟਸ ਸਥਾਨਕ ਰੂਟਾਂ ਦਾ ਪ੍ਰਬੰਧਨ ਕਰਨ ਲਈ ਕਲਾਸ B ਆਪਰੇਟਰਾਂ ਨੂੰ ਨਿਯੁਕਤ ਕਰਦੇ ਹਨ। ਸ਼ੁਰੂਆਤੀ ਤਨਖਾਹਾਂ $50,000 ਤੋਂ $70,000 ਦੇ ਵਿਚਕਾਰ ਹੁੰਦੀਆਂ ਹਨ, ਜੋ ਕਿ ਸਥਿਰਤਾ ਪ੍ਰਦਾਨ ਕਰਦੀਆਂ ਹਨ।`,
          examBreakdown: `ਕਲਾਸ B ਲਈ ਲਿਖਤੀ ਜਨਰਲ ਨਾਲੇਜ ਪ੍ਰੀਖਿਆ ਵਿੱਚ ${stateName} CDL ਹੈਂਡਬੁੱਕ ਵਿੱਚੋਂ 50 ਬਹੁ-ਚੋਣ ਪ੍ਰਸ਼ਨ ਹੁੰਦੇ ਹਨ। ਪਾਸ ਹੋਣ ਲਈ ਤੁਹਾਨੂੰ ਘੱਟੋ-ਘੱਟ 80% (50 ਵਿੱਚੋਂ 40 ਸਹੀ) ਸਕੋਰ ਪ੍ਰਾਪਤ ਕਰਨੇ ਹੋਣਗੇ। ਟੈਸਟ ਵਿੱਚ ਵਾਹਨ ਨੂੰ ਪਿੱਛੇ ਮੋੜਨਾ, ਸੁਰੱਖਿਆ ਨਿਯਮ, ਅਤੇ ਸ਼ਹਿਰ ਵਿੱਚ ਡਰਾਈਵਿੰਗ ਸ਼ਾਮਲ ਹੈ।`
        }

      case 'class_c':
        return {
          intro: `ਕਲਾਸ C CDL ਦੀ ਲੋੜ 16 ਜਾਂ ਵੱਧ ਯਾਤਰੀਆਂ ਨੂੰ ਲਿਜਾਣ ਵਾਲੇ ਵਾਹਨ ਚਲਾਉਣ ਲਈ ਜਾਂ ਖ਼ਤਰਨਾਕ ਸਮੱਗਰੀ ਵਾਲੇ ਛੋਟੇ ਵਾਹਨਾਂ ਲਈ ਹੁੰਦੀ ਹੈ ਜੋ ਕਲਾਸ A ਜਾਂ B ਵਿੱਚ ਨਹੀਂ ਆਉਂਦੇ। ਇਨ੍ਹਾਂ ਵਾਹਨਾਂ ਨੂੰ ${s.cities[0]} ਅਤੇ ${s.highways[0]} 'ਤੇ ਚਲਾਉਣ ਲਈ ਪੂਰੀ ਸਾਵਧਾਨੀ ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ।`,
          careers: `ਕਲਾਸ C ਡਰਾਈਵਰ ਸਥਾਨਕ ਸ਼ਟਲ ਸੇਵਾਵਾਂ, ਸੈਲਾਨੀ ਟ੍ਰਾਂਸਪੋਰਟ ਅਤੇ ਛੋਟੇ ਹਾਜ਼ਮੈਟ ਡਿਲਿਵਰੀ ਨੈੱਟਵਰਕਾਂ ਲਈ ਬਹੁਤ ਮਹੱਤਵਪੂਰਨ ਹੁੰਦੇ ਹਨ। ਇਹ ਕਰੀਅਰ ਸਥਿਰ ਸਮਾਂ-ਸਾਰਣੀ ਅਤੇ ਵਧੀਆ ਘੰਟਾਵਾਰ ਭੁਗਤਾਨ ਦੀ ਪੇਸ਼ਕਸ਼ ਕਰਦਾ ਹੈ।`,
          examBreakdown: `ਕਲਾਸ C ਲਿਖਤੀ ਪ੍ਰੀਖਿਆ ਯਾਤਰੀ ਸੁਰੱਖਿਆ, ਖ਼ਤਰਨਾਕ ਸਮੱਗਰੀ ਨਿਯਮਾਂ ਅਤੇ ਆਮ ਵਪਾਰਕ ਡ੍ਰਾਈਵਿੰਗ ਸਿਧਾਂਤਾਂ ਨੂੰ ਕਵਰ ਕਰਦੀ ਹੈ। ਪਾਸ ਹੋਣ ਲਈ 80% ਸਕੋਰ ਲੋੜੀਂਦਾ ਹੈ, ਜੋ ਕਿ ${stateName} CDL ਗਾਈਡ ਦੇ ਮੁਤਾਬਕ ਹੈ।`
        }

      case 'air_brakes':
        return {
          intro: `ਕੀ ਤੁਸੀਂ ਏਅਰ ਬ੍ਰੇਕਾਂ ਵਾਲੇ ਵਪਾਰਕ ਵਾਹਨ ਚਲਾਉਣ ਦੀ ਯੋਜਨਾ ਬਣਾ ਰਹੇ ਹੋ? ਲਗਭਗ ਸਾਰੇ ਆਧੁਨਿਕ semi-ਟਰੱਕਾਂ ਅਤੇ ਵੱਡੀਆਂ ਬੱਸਾਂ ਨੂੰ ਚਲਾਉਣ ਲਈ ਏਅਰ ਬ੍ਰੇਕ ਪ੍ਰੀਖਿਆ ਪਾਸ ਕਰਨਾ ਲਾਜ਼ਮੀ ਹੈ। ਇਸ ਤੋਂ ਬਿਨਾਂ, ਤੁਹਾਡੇ CDL 'ਤੇ 'L' ਰਿਪ੍ਰੈਕਸ਼ਨ (ਪਾਬੰਦੀ) ਲੱਗ ਜਾਵੇਗੀ, ਜਿਸ ਨਾਲ ਤੁਸੀਂ ਏਅਰ ਬ੍ਰੇਕ ਵਾਲਾ ਕੋਈ ਵਾਹਨ ਨਹੀਂ ਚਲਾ ਸਕੋਗੇ। ${stateName} ਵਿੱਚ, ਜਿੱਥੇ sੜਕਾਂ ${s.geography} ਤੋਂ ਲੈ ਕੇ ${s.highways[0]} ਵਰਗੇ ਹਾਈਵੇਅ ਤੱਕ ਫੈਲੀਆਂ ਹੋਈਆਂ ਹਨ, ਉੱਥੇ ਸੁਰੱਖਿਅਤ ਰੁਕਣ ਲਈ ਏਅਰ ਬ੍ਰੇਕ ਬਹੁਤ ਜ਼ਰੂਰੀ ਹਨ।`,
          careers: `${s.companies[0]} ਅਤੇ ${s.companies[1]} ਵਰਗੀਆਂ ਸਾਰੀਆਂ ਵੱਡੀਆਂ ਕੰਪਨੀਆਂ ਕੇਵਲ ਏਅਰ ਬ੍ਰੇਕ ਯੋਗਤਾ ਵਾਲੇ ਡਰਾਈਵਰਾਂ ਨੂੰ ਹੀ ਰੱਖਦੀਆਂ ਹਨ। 'L' ਪਾਬੰਦੀ ਤੁਹਾਡੇ ਰੁਜ਼ਗਾਰ ਦੇ ਮੌਕਿਆਂ ਨੂੰ ਬਹੁਤ ਸੀਮਤ ਕਰ ਦਿੰਦੀ ਹੈ ਅਤੇ ਤੁਹਾਨੂੰ ਵੱਧ ਤਨਖਾਹ ਵਾਲੀਆਂ ਨੌਕਰੀਆਂ ਤੋਂ ਵਾਂਝਾ ਕਰ ਸਕਦੀ ਹੈ।`,
          examBreakdown: `${stateName} ਦੀ ਲਿਖਤੀ ਏਅਰ ਬ੍ਰੇਕ ਪ੍ਰੀਖਿਆ ਵਿੱਚ 25 ਬਹੁ-ਚੋਣ ਪ੍ਰਸ਼ਨ ਹੁੰਦੇ ਹਨ। ਪਾਸ ਹੋਣ ਲਈ ਤੁਹਾਨੂੰ ਘੱਟੋ-ਘੱਟ 80% (25 ਵਿੱਚੋਂ 20 ਸਹੀ) ਸਕੋਰ ਕਰਨੇ ਪੈਣਗੇ। ਇਸ ਵਿੱਚ ਕੰਪ੍ਰੈਸਰ, ਲੀਕ ਟੈਸਟ ਅਤੇ ਐਮਰਜੈਂਸੀ ਬ੍ਰੇਕਿੰਗ ਸ਼ਾਮਲ ਹਨ।`
        }

      case 'combination':
        return {
          intro: `ਡਬਲ ਟ੍ਰੇਲਰ ਜਾਂ ਸਟੈਂਡਰਡ ਟ੍ਰੈਕਟਰ-ਟ੍ਰੇਲਰ ਖਿੱਚਣ ਲਈ, ਤੁਹਾਨੂੰ ਕੰਬੀਨੇਸ਼ਨ ਵਾਹਨ ਪ੍ਰੀਖਿਆ ਪਾਸ ਕਰਨੀ ਪਵੇਗੀ। ਇਹ ਵਾਹਨ ਚਲਾਉਣੇ ਆਮ ਟਰੱਕਾਂ ਨਾਲੋਂ ਬਹੁਤ ਵੱਖਰੇ ਹੁੰਦੇ ਹਨ, ਅਤੇ ${s.highways[0]} 'ਤੇ ਸੁਰੱਖਿਅਤ ਡਰਾਈਵਿੰਗ ਲਈ ਕਪਲਿੰਗ (ਜੋੜਨ) ਅਤੇ ਹਵਾ ਦੀਆਂ ਪਾਈਪਾਂ ਦੇ ਕਨੈਕਸ਼ਨਾਂ ਦਾ ਪੂਰਾ ਗਿਆਨ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ ਜੋ ${s.geography} ਰਾਹੀਂ ਲੰਘਦੇ ਹਨ।`,
          careers: `ਕਲਾਸ A ਡਰਾਈਵਰਾਂ ਲਈ ਕੰਬੀਨੇਸ਼ਨ ਪ੍ਰੀਖਿਆ ਪਾਸ ਕਰਨਾ ਇੱਕ ਬੁਨਿਆਦੀ ਲੋੜ ਹੈ। ਵੱਡੀਆਂ ਲੌਜਿਸਟਿਕ ਕੰਪਨੀਆਂ ਅਤੇ ਉਦਯੋਗਿਕ ਵਾਹਕ ਕੰਬੀਨੇਸ਼ਨ ਡਰਾਈਵਰਾਂ ਨੂੰ ਨਿਯੁਕਤ ਕਰਦੇ ਹਨ, ਜਿਸ ਨਾਲ ਤੁਹਾਡੀ ਕਮਾਈ ਦੀ ਸੰਭਾਵਨਾ ਵਧਦੀ ਹੈ।`,
          examBreakdown: `ਪ੍ਰੀਖਿਆ ਵਿੱਚ ਹੈਂਡਬੁੱਕ ਦੇ ਕੰਬੀਨੇਸ਼ਨ ਵਾਹਨ ਸੈਕਸ਼ਨ ਵਿੱਚੋਂ 20 ਬਹੁ-ਚੋਣ ਪ੍ਰਸ਼ਨ ਸ਼ਾਮਲ ਹੁੰਦੇ ਹਨ। ਪਾਸ ਹੋਣ ਲਈ 80% (20 ਵਿੱਚੋਂ 16 sਹੀ) ਸਕੋਰ ਲੋੜੀਂਦਾ ਹੈ।`
        }

      case 'pre_trip':
        return {
          intro: `ਪ੍ਰੀ-ਟ੍ਰਿਪ ਨਿਰੀਖਣ ਨੂੰ ਅਕਸਰ CDL ਪ੍ਰੀਖਿਆ ਦਾ ਸਭ ਤੋਂ ਔਖਾ ਹਿੱਸਾ ਮੰਨਿਆ ਜਾਂਦਾ ਹੈ। ਰੋਡ ਟੈਸਟ ਸ਼ੁਰੂ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ, ਤੁਹਾਨੂੰ ਪ੍ਰੀਖਿਅਕ ਨੂੰ ਵਾਹਨ ਦੇ ਸਾਰੇ ਹਿੱਸਿਆਂ ਦੀ ਸੁਰੱਖਿਆ ਜਾਂਚ ਜ਼ੁਬਾਨੀ ਸਮਝਾਉਣੀ ਪਵੇਗੀ। ${stateName} ਵਿੱਚ, ਚਾਹੇ ਤੁਸੀਂ ${s.cities[0]} ਵਿੱਚ ਬੱਸ ਚਲਾਉਣੀ ਹੋਵੇ ਜਾਂ ${s.highways[0]} 'ਤੇ ਟਰੱਕ, ਤੁਹਾਨੂੰ ਸਾਬਤ ਕਰਨਾ ਪਵੇਗਾ ਕਿ ਵਾਹਨ ਸੜਕ 'ਤੇ ਚੱਲਣ ਲਈ 100% ਸੁਰੱਖਿਅਤ ਹੈ।`,
          careers: `${s.companies[0]} ਅਤੇ ਸਰਕਾਰੀ ਟ੍ਰਾਂਸਪੋਰਟ ਏਜੰਸੀਆਂ ਲਈ ਸੁਰੱਖਿਆ ਸਭ ਤੋਂ ਪਹਿਲਾਂ ਹੈ। ਪ੍ਰੀ-ਟ੍ਰਿਪ ਜਾਂਚ ਵਿੱਚ ਫੇਲ ਹੋਣਾ ਰੋਡ ਟੈਸਟ ਵਿੱਚ ਫੇਲ ਹੋਣ ਦਾ ਸਭ ਤੋਂ ਵੱਡਾ ਕਾਰਨ ਬਣਦਾ ਹੈ। ਇਸ ਚੈੱਕਲਿਸਟ ਨੂੰ ਯਾਦ ਕਰਨਾ ਤੁਹਾਨੂੰ ਇੱਕ ਸੁਰੱਖਿਅਤ ਡਰਾਈਵਰ ਬਣਾਉਂਦਾ ਹੈ।`,
          examBreakdown: `ਇਸ ਪ੍ਰੈਕਟੀਕਲ ਪ੍ਰੀਖਿਆ ਵਿੱਚ ਤੁਹਾਨੂੰ ਇੰਜਣ, ਬ੍ਰੇਕ, ਲੀਕ ਅਤੇ ਟਾਇਰਾਂ ਸਮੇਤ 100 ਤੋਂ ਵੱਧ ਹਿੱਸਿਆਂ ਦੀ ਸਥਿਤੀ ਬਾਰੇ ਦੱਸਣਾ ਪੈਂਦਾ ਹੈ। ਸਾਡਾ ਅਭਿਆਸ ਮਟੀਰੀਅਲ ਇਸ ਚੈੱਕਲਿਸਟ ਨੂੰ ਯਾਦ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।`
        }

      case 'hazmat':
        return {
          intro: `ਖ਼ਤਰਨਾਕ ਸਮੱਗਰੀ (HazMat) ਜਿਵੇਂ ਕਿ ਤੇਲ, ਵਿਸਫੋਟਕ, ਜਾਂ ਰਸਾਇਣਾਂ ਦੀ ਢੋਆ-ਢੁਆਈ ਲਈ ਤੁਹਾਡੇ CDL 'ਤੇ ਹਾਜ਼ਮੈਟ (H) ਐਂਡੋਰਸਮੈਂਟ ਹੋਣੀ ਜ਼ਰੂਰੀ ਹੈ। ${s.cities[0]} ਵਰਗੇ ਸੰਘਣੀ ਆਬਾਦੀ ਵਾਲੇ ਖੇਤਰਾਂ ਜਾਂ ${s.highways[0]} ਵਰਗੇ ਮੁੱਖ ਰੂਟਾਂ ਰਾਹੀਂ ਖ਼ਤਰਨਾਕ ਸਮੱਗਰੀ ਲਿਜਾਣ ਲਈ ਬਹੁਤ ਸਾਵਧਾਨੀ ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ।`,
          careers: `ਖਤਰਿਆਂ ਦੇ ਕਾਰਨ, ਹਾਜ਼ਮੈਟ ਡਰਾਈਵਰਾਂ ਨੂੰ ਟਰੱਕਿੰਗ ਉਦਯੋਗ ਵਿੱਚ ਸਭ ਤੋਂ ਵੱਧ ਤਨਖਾਹ ਦਿੱਤੀ ਜਾਂਦੀ ਹੈ। ਰਸਾਇਣਕ ਅਤੇ ਬਾਲਣ ਉਦਯੋਗ ਯੋਗ ਡਰਾਈਵਰਾਂ ਨੂੰ ਉੱਚੀਆਂ ਤਨਖਾਹਾਂ ਦੀ ਪੇਸ਼ਕਸ਼ ਕਰਦੇ ਹਨ, ਅਤੇ ${s.companies[1]} ਵਰਗੀਆਂ ਕੰਪਨੀਆਂ ਉਨ੍ਹਾਂ ਨੂੰ ਤਰਜੀਹ ਦਿੰਦੀਆਂ ਹਨ।`,
          examBreakdown: `${stateName} ਹਾਜ਼ਮੈਟ ਪ੍ਰੀਖਿਆ ਵਿੱਚ 30 ਬਹੁ-ਚੋਣ ਪ੍ਰਸ਼ਨ ਹੁੰਦੇ ਹਨ। ਪਾਸ ਹੋਣ ਲਈ ਘੱਟੋ-ਘੱਟ 24 ਸਹੀ (80%) ਹੋਣੇ ਚਾਹੀਦੇ ਹਨ। ਇਸ ਵਿੱਚ ਪਲੇਕਾਰਡ, ਲੋਡਿੰਗ ਨਿਯਮ ਅਤੇ ਐਮਰਜੈਂਸੀ ਕਦਮ ਸ਼ਾਮਲ ਹਨ।`
        }

      case 'passenger':
        return {
          intro: `16 ਜਾਂ ਵੱਧ ਯਾਤਰੀਆਂ ਨੂੰ ਲਿਜਾਣ ਵਾਲੀਆਂ ਬੱਸਾਂ ਜਾਂ ਸ਼ਟਲ ਚਲਾਉਣ ਲਈ ਯਾਤਰੀ (P) ਐਂਡੋਰਸਮੈਂਟ ਹੋਣੀ ਲਾਜ਼ਮੀ ਹੈ। ਯਾਤਰੀਆਂ ਨੂੰ ਸੁਰੱਖਿਅਤ ਢੰਗ ਨਾਲ ਲਿਜਾਣ ਲਈ ਵਿਸ਼ੇਸ਼ ਜ਼ਿੰਮੇਵਾਰੀ, ਰੇਲਵੇ ਕਰਾਸਿੰਗ ਨਿਯਮਾਂ ਅਤੇ ਨਿਰਵਿਘਨ ਡਰਾਈਵਿੰਗ ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ। ${s.cities[0]} ਅਤੇ ${s.highways[0]} ਦੇ ਆਲੇ-ਦੁਆਲੇ ਗੱਡੀ ਚਲਾਉਣਾ ਸਿਖਾਇਆ ਜਾਂਦਾ ਹੈ।`,
          careers: `ਮੈਟਰੋਪੋਲੀਟਨ ਟ੍ਰਾਂਸਪੋਰਟ ਨੈੱਟਵਰਕ ਅਤੇ ਪ੍ਰਾਈਵੇਟ ਚਾਰਟਰ ਕੰਪਨੀਆਂ ਵਿੱਚ ਯਾਤਰੀ ਡਰਾਈਵਰਾਂ ਦੀ ਬਹੁਤ ਮੰਗ ਹੈ। ਇਹ ਨੌਕਰੀਆਂ ਵਧੀਆ ਸਹੂਲਤਾਂ ਅਤੇ ਸਥਿਰ ਸਥਾਨਕ ਰੂਟ ਪ੍ਰਦਾਨ ਕਰਦੀਆਂ ਹਨ।`,
          examBreakdown: `ਪ੍ਰੀਖਿਆ ਵਿੱਚ 20 ਬਹੁ-ਚੋਣ ਪ੍ਰਸ਼ਨ ਸ਼ਾਮਲ ਹੁੰਦੇ ਹਨ। ਪਾਸ ਹੋਣ ਲਈ 80% (20 ਵਿੱਚੋਂ 16 ਸਹੀ) ਸਕੋਰ ਲੋੜੀਂਦਾ ਹੈ ਜੋ ${stateName} CDL ਮੈਨੂਅਲ ਤੋਂ ਹੈ।`
        }

      case 'bus':
        return {
          intro: `ਸਕੂਲ ਬੱਸ ਚਲਾਉਣ ਲਈ ਸਕੂਲ ਬੱਸ (S) ਐਂਡੋਰਸਮੈਂਟ ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ, ਜੋ ਕਿ ਬਹੁਤ ਸਖਤੀ ਨਾਲ ਨਿਯੰਤਰਿਤ ਕੀਤੀ ਜਾਂਦੀ ਹੈ। ${s.cities[1]} ਵਰਗੇ ਖੇਤਰਾਂ ਵਿੱਚ ਬੱਚਿਆਂ ਨੂੰ ਸੁਰੱਖਿਅਤ ਢੰਗ ਨਾਲ ਚੜ੍ਹਾਉਣ ਅਤੇ ਉਤਾਰਨ ਲਈ ਵਿਸ਼ੇਸ਼ ਨਿਯਮਾਂ ਦੀ ਪਾਲਣਾ ਕਰਨੀ ਪੈਂਦੀ ਹੈ।`,
          careers: `ਸਥਾਨਕ ਸਕੂਲ ਜ਼ਿਲ੍ਹਿਆਂ ਅਤੇ ਪ੍ਰਾਈਵੇਟ ਟਰਾਂਸਪੋਰਟ ਪ੍ਰਦਾਤਾਵਾਂ ਕੋਲ ਸਕੂਲ ਬੱਸ ਡਰਾਈਵਰਾਂ ਦੀ ਭਾਰੀ ਕਮੀ ਹੈ। ਇਹ ਨੌਕਰੀਆਂ ਸਥਿਰ ਘੰਟਾਵਾਰ ਤਨਖਾਹ ਅਤੇ ਲਚਕਦਾਰ ਸਮਾਂ ਪ੍ਰਦਾਨ ਕਰਦੀਆਂ ਹਨ।`,
          examBreakdown: `ਪ੍ਰੀਖਿਆ ਵਿੱਚ 20 ਬਹੁ-ਚੋਣ ਪ੍ਰਸ਼ਨ ਹੁੰਦੇ ਹਨ, ਅਤੇ ਪਾਸ ਹੋਣ ਲਈ 16 ਸਹੀ (80%) ਹੋਣੇ ਚਾਹੀਦੇ ਹਨ। ਇਸ ਵਿੱਚ ਖਤਰਨਾਕ ਖੇਤਰ ਅਤੇ ਐਮਰਜੈਂਸੀ ਨਿਕਾਸੀ ਸ਼ਾਮਲ ਹਨ।`
        }

      case 'double':
        return {
          intro: `ਡਬਲ ਜਾਂ ਟ੍ਰਿਪਲ ਟ੍ਰੇਲਰ ਖਿੱਚਣ ਲਈ CDL 'ਤੇ 'T' ਐਂਡੋਰਸਮੈਂਟ ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ। ਇਹ ਸੁਮੇਲ ਚਲਾਉਣਾ ਬਹੁਤ ਚੁਣੌਤੀਪੂਰਨ ਹੁੰਦਾ ਹੈ, ਖਾਸ ਕਰਕੇ ਤੇਜ਼ ਹਵਾਵਾਂ ਵਿੱਚ ਅਤੇ ${s.highways[0]} ਵਰਗੇ ਖੁੱਲ੍ਹੇ ਹਾਈਵੇਅ 'ਤੇ।`,
          careers: `ਮਾਲ ਢੋਣ ਵਾਲੀਆਂ ਵੱਡੀਆਂ ਕੰਪਨੀਆਂ ਜਿਵੇਂ ਕਿ ${s.companies[3] || s.companies[1]} ਡਬਲ ਟ੍ਰੇਲਰਾਂ ਦੀ ਵਰਤੋਂ ਕਰਦੀਆਂ ਹਨ। ਇਹ ਯੋਗਤਾ ਰੱਖਣ ਵਾਲੇ ਡਰਾਈਵਰਾਂ ਨੂੰ ਉੱਚੀ ਤਨਖਾਹ ਦਿੱਤੀ ਜਾਂਦੀ ਹੈ।`,
          examBreakdown: `ਲਿਖਤੀ ਟੈਸਟ ਵਿੱਚ 20 ਪ੍ਰਸ਼ਨ ਹੁੰਦੇ ਹਨ। ਪਾਸ ਹੋਣ ਲਈ 80% (16 ਸਹੀ) ਲੋੜੀਂਦੇ ਹਨ।`
        }

      case 'tank':
        return {
          intro: `ਟੈਂਕਰਾਂ ਰਾਹੀਂ ਤਰਲ ਜਾਂ ਗੈਸ ਦੀ ਢੋਆ-ਢੁਆਈ ਲਈ ਟੈਂਕਰ (N) ਐਂਡੋਰਸਮੈਂਟ ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ। ਟੈਂਕਰ ਚਲਾਉਣੇ ਖ਼ਤਰਨਾਕ ਹੁੰਦੇ ਹਨ ਕਿਉਂਕਿ ਤਰਲ ਦੇ ਹਿਲਣ ਨਾਲ ਟਰੱਕ ਦੇ ਪਲਟਣ ਦਾ ਖਤਰਾ ਰਹਿੰਦਾ ਹੈ। ${s.highways[0]} 'ਤੇ ਸੁਰੱਖਿਅਤ ਡਰਾਈਵਿੰਗ ਲਈ ਤਰਲ ਦੇ ਸਰਜ (ਹਿਲਜੁਲ) ਨਿਯੰਤਰਣ ਨੂੰ ਸਮਝਣਾ ਜ਼ਰੂਰੀ ਹੈ।`,
          careers: `ਟੈਂਕਰ ਟ੍ਰਾਂਸਪੋਰਟ ਸਭ ਤੋਂ ਵੱਧ ਤਨਖਾਹ ਦੇਣ ਵਾਲੇ ਸੈਕਟਰਾਂ ਵਿੱਚੋਂ ਇੱਕ ਹੈ। ਤੇਲ ਕੰਪਨੀਆਂ ਅਤੇ ਕੈਮੀਕਲ ਫਲੀਟਸ ਹਮੇਸ਼ਾ ਟੈਂਕਰ ਡਰਾਈਵਰਾਂ ਦੀ ਭਾਲ ਵਿੱਚ ਰਹਿੰਦੇ ਹਨ।`,
          examBreakdown: `ਪ੍ਰੀਖਿਆ ਵਿੱਚ 20 ਪ੍ਰਸ਼ਨ ਹੁੰਦੇ ਹਨ, ਜਿਨ੍ਹਾਂ ਵਿੱਚੋਂ ਪਾਸ ਹੋਣ ਲਈ 16 ਸਹੀ (80%) ਲੋੜੀਂਦੇ ਹਨ।`
        }

      case 'ambulance':
        return {
          intro: `ਕੈਲੀਫੋਰਨੀਆ ਵਿੱਚ ਐਂਬੂਲੈਂਸ ਚਲਾਉਣ ਲਈ ਵਿਸ਼ੇਸ਼ ਐਂਬੂਲੈਂਸ ਡ੍ਰਾਈਵਰ ਸਰਟੀਫਿਕੇਟ ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ। ਡਰਾਈਵਰਾਂ ਨੂੰ ਐਮਰਜੈਂਸੀ ਕਾਨੂੰਨਾਂ, ਸਾਈਰਨ ਦੀ ਵਰਤੋਂ ਅਤੇ ਸੁਰੱਖਿਅਤ ਡ੍ਰਾਈਵਿੰਗ ਨਿਯਮਾਂ ਦਾ ਪਤਾ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ।`,
          careers: `ਪ੍ਰਾਈਵੇਟ ਐਂਬੂਲੈਂਸ ਪ੍ਰਦਾਤਾ, ਹਸਪਤਾਲ ਅਤੇ ਫਾਇਰ ਵਿਭਾਗ ਐਂਬੂਲੈਂਸ ਡਰਾਈਵਰਾਂ ਦੀ ਨਿਯੁਕਤੀ ਕਰਦੇ ਹਨ, ਜੋ ਕਿ EMS ਖੇਤਰ ਵਿੱਚ ਕਰੀਅਰ ਸ਼ੁਰੂ ਕਰਨ ਦਾ ਵਧੀਆ ਤਰੀਕਾ ਹੈ।`,
          examBreakdown: `ਕੈਲੀਫੋਰਨੀਆ ਐਂਬੂਲੈਂਸ ਟੈਸਟ Real Estate ਦੁਆਰਾ ਲਿਆ ਜਾਂਦਾ ਹੈ ਅਤੇ ਇਸ ਵਿੱਚ ਐਮਰਜੈਂਸੀ ਵਾਹਨਾਂ ਦੇ ਸੰਚਾਲਨ ਸੰਬੰਧੀ 50 ਪ੍ਰਸ਼ਨ ਹੁੰਦੇ ਹਨ।`
        }

      default:
        return {
          intro: `ਆਪਣੀ ${testName} ਪ੍ਰੀਖਿਆ ਦੀ ਤਿਆਰੀ ਕਰ ਰਹੇ ਹੋ? ਇਹ ਵਪਾਰਕ ਡਰਾਈਵਰ ਯੋਗਤਾ ਪ੍ਰਾਪਤ ਕਰਨਾ ਇੱਕ ਵੱਡਾ ਮੀਲ ਪੱਥਰ ਹੈ। ${stateName} ਵਿੱਚ ਗੱਡੀ ਚਲਾਉਣ ਲਈ ਸੁਰੱਖਿਆ ਨਿਯਮਾਂ ਦੀ ਪੂਰੀ ਸਮਝ ਹੋਣੀ ਚਾਹੀਦੀ ਹੈ।`,
          careers: `ਯੋਗ ਡਰਾਈਵਰਾਂ ਦੀ ਪੂਰੇ ${stateName} ਵਿੱਚ ਬਹੁਤ ਮੰਗ ਹੈ। ਇਹ ਅਭਿਆਸ ਟੈਸਟ ਤੁਹਾਨੂੰ ਟਰੱਕਿੰਗ ਫਲੀਟਸ ਵਿੱਚ ਸ਼ਾਮਲ ਹੋਣ ਲਈ ਤਿਆਰ ਕਰਦਾ ਹੈ।`,
          examBreakdown: `ਇਹ ਪ੍ਰੀਖਿਆ ਅਧਿਕਾਰਤ ${stateName} CDL ਹੈਂਡਬੁੱਕ 'ਤੇ ਅਧਾਰਤ ਹੈ। ਪਾਸ ਹੋਣ ਲਈ ਘੱਟੋ-ਘੱਟ 80% ਸਕੋਰ ਚਾਹੀਦਾ ਹੈ।`
        }
    }
  }

  // Map internal test ID to copy content
  switch (testId) {
    case 'class_a':
      return {
        intro: `If hauling massive commercial rigs over ${s.highways[0]} or navigating freight through ${s.cities[0]} is your professional goal, obtaining a Class A Commercial Driver's License (CDL) is the essential first step. Operating vehicles with a Gross Combination Weight Rating (GCWR) of 26,001 pounds or more requires specialized knowledge, especially when towing trailers in excess of 10,000 pounds. In ${stateName}, commercial drivers must master handling crosswinds on routes like ${s.highways[1]}, steering heavy tractor-trailers through ${s.geography}, and securing cargo safely according to state laws.`,
        careers: `Industries across the state rely heavily on Class A drivers, from ${s.industries[0]} to ${s.industries[1]}. Prominent logistics companies like ${s.companies[0]} and ${s.companies[1]} are constantly seeking certified drivers to operate regional and long-haul lanes. Completing your Class A written exams and physical skills tests can launch your trucking career, allowing you to earn a starting salary of $60,000+ within weeks of certification, with top-tier interstate drivers earning over $90,000 annually.`,
        examBreakdown: `The ${stateName} ${testName} written exam is a multiple-choice knowledge test containing 50 questions based on the official ${stateName} CDL manual. To pass, you must score at least 80% (40 out of 50 correct). This exam covers critical commercial driving areas including vehicle inspections, basic control systems, shifting gears, defensive driving, emergency procedures, and shipping hazardous cargo safely.`
      }

    case 'class_b':
      return {
        intro: `Operating large single-unit commercial vehicles like dump trucks, cement mixers, delivery trucks, and heavy transit buses requires a Class B Commercial Driver's License. Unlike Class A, a Class B CDL permits you to drive vehicles with a GVWR of 26,001 pounds or more, but limits towing to trailers under 10,000 pounds. In ${stateName}, driving these vehicles involves mastering tight turns in cities like ${s.cities[1]}, managing braking on ${s.highways[0]}, and safely operating in areas such as ${s.geography}.`,
        careers: `A Class B CDL opens doors to local "home-every-night" careers in sectors like ${s.industries[2] || s.industries[0]} and municipal transit. Companies such as ${s.companies[2] || s.companies[0]} and local delivery fleets hire Class B operators to manage local delivery routes and transit lines. Starting salaries for Class B drivers range between $50,000 to $70,000, offering a stable career path with excellent job security close to home.`,
        examBreakdown: `The written General Knowledge exam for Class B contains 50 multiple-choice questions directly from the ${stateName} CDL Handbook. You must score at least 80% (40 out of 50 correct) to pass. The test checks your understanding of commercial driving safety rules, vehicle backing maneuvers, air brake operations (if equipped), and city driving safety protocols.`
      }

    case 'class_c':
      return {
        intro: `A Class C Commercial Driver's License is required to operate vehicles designed to transport 16 or more passengers (including the driver) or to haul hazardous materials that require placard signage, provided the vehicle does not meet the weight requirements for Class A or B. Navigating these smaller commercial vehicles through ${s.cities[0]} and across ${s.highways[0]} requires precise control and a thorough understanding of safety regulations.`,
        careers: `Drivers holding a Class C CDL are vital to municipal shuttle operations, tourist transit, and light hazmat delivery services. Regional transit and private courier networks hire Class C drivers to transport passengers and cargo safely. Careers in passenger transport offer competitive hourly pay and steady local schedules, making it a great entry point into the commercial transportation sector.`,
        examBreakdown: `The Class C written exam covers passenger safety, hazardous materials regulations (if applicable), and general commercial driving principles. The test consists of multiple-choice questions requiring an 80% score to pass, aligning with material from the official ${stateName} CDL study guide.`
      }

    case 'air_brakes':
      return {
        intro: `Planning to drive commercial motor vehicles (CMVs) equipped with air brakes? Passing the air brakes knowledge test is essential to operate almost all modern semi-trucks, tractor-trailers, and large transit buses. Without passing this exam, your ${stateName} CDL will carry an "L" restriction, banning you from driving any vehicle equipped with air brakes. In ${stateName}, where roads span from the ${s.geography} to urban expressways like ${s.highways[0]}, air brakes are a practical necessity for safe stopping and steep descent control.`,
        careers: `Virtually all major trucking firms, including ${s.companies[0]} and ${s.companies[1]}, require drivers to have the air brake qualification. Local school districts, charter carriers like ${s.companies[2] || 'Greyhound'}, and commercial heavy-haul outfits rely exclusively on certified operators. The "L" restriction severely limits your employability, effectively locking you out of the highest-paying cargo transport jobs in the state.`,
        examBreakdown: `The ${stateName} written Air Brakes exam is a multiple-choice test consisting of 25 questions. You must score at least 80% (20 out of 25) to pass. The exam covers air brake system parts (compressors, tanks, gauges), operation procedures, leak test checklists, and emergency braking protocols outlined in the official ${stateName} CDL manual.`
      }

    case 'combination':
      return {
        intro: `To pull double trailers, multi-car haulers, or standard tractor-trailers, you must pass the CDL Combination Vehicles written test. Combination vehicles handle very differently from single-unit trucks, presenting risks like jackknifing, trailer skids, and rollover hazards. Safe operation along ${s.highways[0]} and through the windy passes of ${s.geography} requires a deep understanding of trailer coupling, air line connections, and stable braking techniques.`,
        careers: `Passing the Combination exam is a standard requirement for Class A drivers. Major logistics fleets, agricultural shippers in ${s.cities[2] || 'rural regions'}, and industrial carriers hire combination drivers for bulk haulage. Certification increases your earning potential and makes you eligible for high-paying regional line-haul routes.`,
        examBreakdown: `The written exam consists of 20 multiple-choice questions based on the Combination Vehicles section of the ${stateName} CDL Handbook. A passing score of 80% (16 out of 20 correct) is required. The test focuses on coupling/uncoupling procedures, combination brake systems, sway prevention, and trailer inspection.`
      }

    case 'pre_trip':
      return {
        intro: `The Pre-Trip Inspection is often considered the most challenging part of the CDL exam. Before you take your behind-the-wheel road test, you must verbally walk a state examiner through a comprehensive safety check of your vehicle. In ${stateName}, whether you plan to drive school buses through ${s.cities[0]} or freight rigs along ${s.highways[0]}, you must prove that your commercial vehicle is 100% roadworthy and free of safety defects before starting any trip.`,
        careers: `Safety is the top priority for major carriers like ${s.companies[0]} and municipal transport agencies. Failing to perform a proper pre-trip inspection is one of the most common reasons drivers receive out-of-service orders from state highway patrols. Mastering this checklist makes you a safer driver, protects valuable cargo, and ensures compliance with state safety laws.`,
        examBreakdown: `The Pre-Trip exam is a verbal skills test where you must point to and explain the condition of over 100 components, including engine hoses, belts, steering systems, air brake checks, and coupling links. Our practice materials help you memorize these checklists, defect descriptions, and cabin checks, ensuring you can explain them clearly to the examiner on test day.`
      }

    case 'hazmat':
      return {
        intro: `Transporting hazardous materials (HazMat) like fuel, explosives, or chemicals is highly regulated and requires a specialized HazMat endorsement (H) on your CDL. Hauling dangerous materials through densely populated areas like ${s.cities[0]} or along major trade routes like ${s.highways[0]} demands extreme caution. Drivers must understand placard regulations, emergency response steps, containment rules, and routing restrictions.`,
        careers: `Because of the risks involved, HazMat drivers are among the highest-paid operators in the trucking industry. Key sectors like ${s.industries[0]} and chemical manufacturing pay premium wages to qualified drivers. Companies like ${s.companies[1]} and specialized tankers actively recruit drivers who have completed their TSA background check and passed the HazMat written exam.`,
        examBreakdown: `The ${stateName} HazMat endorsement exam consists of 30 multiple-choice questions. You must get at least 24 correct (80%) to pass. The test covers loading/unloading rules, placards, hazardous materials tables, emergency action plans, and security regulations from the state CDL handbook.`
      }

    case 'passenger':
      return {
        intro: `To drive transit buses, airport shuttles, or tour buses carrying 16 or more passengers, you must obtain a Passenger Transport endorsement (P). Carrying passengers is a heavy responsibility that requires passenger management skills, safety checking procedures, railroad crossing protocols, and smooth vehicle control. Navigating these buses through busy centers like ${s.cities[0]} and transit lanes on ${s.highways[1] || s.highways[0]} requires certified competence.`,
        careers: `Passenger drivers are in high demand by metropolitan transit networks, school districts, and private charter bus lines like ${s.companies[2] || 'regional charter fleets'}. Passenger transport careers offer clean working conditions, local routes, and excellent benefits packages.`,
        examBreakdown: `The Passenger endorsement written exam has 20 multiple-choice questions. You must score 80% (16 out of 20) to pass. The test covers passenger loading, emergency exits, railroad crossings, drawbridges, and prohibited driver practices.`
      }

    case 'bus':
      return {
        intro: `Operating a school bus requires the School Bus endorsement (S), one of the most strictly regulated credentials in the commercial driving field. Ensuring the safety of students during loading, unloading, and transit through neighborhoods in ${s.cities[1]} is a vital community service. Drivers must learn student management, emergency evacuation steps, and school bus laws.`,
        careers: `Local school districts and private transport providers are facing a historic shortage of certified school bus drivers. These positions offer stable local schedules, competitive hourly wages, and split-shift options that fit well for part-time workers or retirees looking for steady income close to home.`,
        examBreakdown: `The written exam consists of 20 multiple-choice questions. You must get at least 16 correct (80%) to pass. Topics include danger zones, mirror adjustments, loading and unloading children, emergency evacuations, and railroad crossing safety.`
      }

    case 'double':
      return {
        intro: `Pulling double or triple trailers requires a specialized "T" endorsement on your CDL. Double and triple trailers present unique challenges, such as the "crack-the-whip" effect, where the rear trailer can sway or roll over during sudden turns. Drivers on open corridors like ${s.highways[0]} must master coupling converter dollies and managing air brake system pressures across multiple units.`,
        careers: `LTL (Less-Than-Truckload) freight companies like ${s.companies[3] || s.companies[1]} rely heavily on double trailer setups to maximize cargo capacity. Drivers holding a double/triple endorsement earn top wages and typically enjoy scheduled hub-to-hub regional runs that offer consistent schedules and regular home time.`,
        examBreakdown: `The written exam has 20 multiple-choice questions. You must get 16 correct (80%) to pass. It covers coupling procedures, inspection checklists, air brake line connections, and safety precautions for preventing rear trailer rollover.`
      }

    case 'tank':
      return {
        intro: `Hauling liquids or gases in bulk requires a Tanker endorsement (N). Operating tankers is uniquely hazardous due to liquid surge—the movement of liquid inside the tank that can push the truck forward during stops or tip the rig over on sharp curves. Whether hauling milk from farms in ${s.cities[2] || 'rural areas'} or fuel along ${s.highways[0]}, tanker drivers must master surge control and manage a high center of gravity.`,
        careers: `Tanker transport pays some of the highest wages in the commercial trucking sector. Fuel distributors, agricultural companies, and chemical transport fleets actively seek certified tanker drivers. Jobs range from local fuel deliveries to specialized industrial hauling.`,
        examBreakdown: `The written Tanker exam consists of 20 multiple-choice questions. A passing score of 80% (16 out of 20 correct) is required. The test checks your knowledge of surge prevention, baffles, bulkheads, safe speed management, and pre-trip inspections of tank vehicles.`
      }

    case 'ambulance':
      return {
        intro: `Operating an ambulance in California requires a specialized Ambulance Driver Certificate. EMS drivers must understand emergency vehicle laws, siren usage protocols, equipment checks, and safe driving behaviors under stressful conditions. Navigating busy emergency lanes in cities like Los Angeles and San Francisco requires rigorous certification.`,
        careers: `Ambulance certified drivers are hired by private ambulance providers, hospitals, fire departments, and emergency medical services (EMS). These positions are essential for launching a career as an EMT, paramedic, or fire services professional.`,
        examBreakdown: `The California Ambulance written test is a multiple-choice exam administered by the Real Estate. It consists of 50 questions covering emergency vehicle operations, dispatch rules, and emergency medical vehicle safety guidelines. A score of 80% is required to pass.`
      }

    default:
      return {
        intro: `Preparing for your ${testName} exam? Obtaining this commercial driver credential is a major milestone. Navigating roads in ${stateName} requires a deep understanding of commercial vehicle safety, traffic rules, and cargo handling procedures.`,
        careers: `Qualified commercial drivers are in high demand across ${stateName}'s distribution networks, transit agencies, and logistics companies. Completing this practice exam helps prepare you to join professional driving fleets, offering excellent wages and long-term career growth.`,
        examBreakdown: `This multiple-choice written exam is based directly on the official ${stateName} CDL Handbook. You must score at least 80% to pass the official test at your local ${dName} office.`
      }
  }
}
