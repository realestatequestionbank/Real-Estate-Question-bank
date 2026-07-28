import { type StateKey, STATES, getEffectivePricing } from '@/lib/constants'
import { getDepartmentName } from '@/lib/data/state-departments'
import { alabamaStateData } from '@/lib/states/alabama'
import { alaskaStateData } from '@/lib/states/alaska'
import { arizonaStateData } from '@/lib/states/arizona'
import { arkansasStateData } from '@/lib/states/arkansas'
import { californiaStateData } from '@/lib/states/california'
import { coloradoStateData } from '@/lib/states/colorado'
import { connecticutStateData } from '@/lib/states/connecticut'
import { delawareStateData } from '@/lib/states/delaware'
import { floridaStateData } from '@/lib/states/florida'
import { georgiaStateData } from '@/lib/states/georgia'
import { hawaiiStateData } from '@/lib/states/hawaii'
import { idahoStateData } from '@/lib/states/idaho'
import { illinoisStateData } from '@/lib/states/illinois'
import { indianaStateData } from '@/lib/states/indiana'
import { iowaStateData } from '@/lib/states/iowa'
import { kansasStateData } from '@/lib/states/kansas'
import { kentuckyStateData } from '@/lib/states/kentucky'
import { louisianaStateData } from '@/lib/states/louisiana'
import { maineStateData } from '@/lib/states/maine'
import { marylandStateData } from '@/lib/states/maryland'
import { massachusettsStateData } from '@/lib/states/massachusetts'
import { michiganStateData } from '@/lib/states/michigan'
import { minnesotaStateData } from '@/lib/states/minnesota'
import { mississippiStateData } from '@/lib/states/mississippi'
import { missouriStateData } from '@/lib/states/missouri'
import { montanaStateData } from '@/lib/states/montana'
import { nebraskaStateData } from '@/lib/states/nebraska'
import { nevadaStateData } from '@/lib/states/nevada'
import { newhampshireStateData } from '@/lib/states/new-hampshire'
import { newjerseyStateData } from '@/lib/states/new-jersey'
import { newmexicoStateData } from '@/lib/states/new-mexico'
import { newYorkStateData } from '@/lib/states/new-york'
import { northcarolinaStateData } from '@/lib/states/north-carolina'
import { northdakotaStateData } from '@/lib/states/north-dakota'
import { ohioStateData } from '@/lib/states/ohio'
import { oklahomaStateData } from '@/lib/states/oklahoma'
import { oregonStateData } from '@/lib/states/oregon'
import { pennsylvaniaStateData } from '@/lib/states/pennsylvania'
import { rhodeislandStateData } from '@/lib/states/rhode-island'
import { southcarolinaStateData } from '@/lib/states/south-carolina'
import { southdakotaStateData } from '@/lib/states/south-dakota'
import { tennesseeStateData } from '@/lib/states/tennessee'
import { texasStateData } from '@/lib/states/texas'
import { utahStateData } from '@/lib/states/utah'
import { vermontStateData } from '@/lib/states/vermont'
import { virginiaStateData } from '@/lib/states/virginia'
import { washingtonStateData } from '@/lib/states/washington'
import { westvirginiaStateData } from '@/lib/states/west-virginia'
import { wisconsinStateData } from '@/lib/states/wisconsin'
import { wyomingStateData } from '@/lib/states/wyoming'

// Map of state keys to their corresponding data
const stateDataMap = {
  alabama: alabamaStateData,
  alaska: alaskaStateData,
  arizona: arizonaStateData,
  arkansas: arkansasStateData,
  california: californiaStateData,
  colorado: coloradoStateData,
  connecticut: connecticutStateData,
  delaware: delawareStateData,
  florida: floridaStateData,
  georgia: georgiaStateData,
  hawaii: hawaiiStateData,
  idaho: idahoStateData,
  illinois: illinoisStateData,
  indiana: indianaStateData,
  iowa: iowaStateData,
  kansas: kansasStateData,
  kentucky: kentuckyStateData,
  louisiana: louisianaStateData,
  maine: maineStateData,
  maryland: marylandStateData,
  massachusetts: massachusettsStateData,
  michigan: michiganStateData,
  minnesota: minnesotaStateData,
  mississippi: mississippiStateData,
  missouri: missouriStateData,
  montana: montanaStateData,
  nebraska: nebraskaStateData,
  nevada: nevadaStateData,
  'new-hampshire': newhampshireStateData,
  'new-jersey': newjerseyStateData,
  'new-mexico': newmexicoStateData,
  'new-york': newYorkStateData,
  'north-carolina': northcarolinaStateData,
  'north-dakota': northdakotaStateData,
  ohio: ohioStateData,
  oklahoma: oklahomaStateData,
  oregon: oregonStateData,
  pennsylvania: pennsylvaniaStateData,
  'rhode-island': rhodeislandStateData,
  'south-carolina': southcarolinaStateData,
  'south-dakota': southdakotaStateData,
  tennessee: tennesseeStateData,
  texas: texasStateData,
  utah: utahStateData,
  vermont: vermontStateData,
  virginia: virginiaStateData,
  washington: washingtonStateData,
  'west-virginia': westvirginiaStateData,
  wisconsin: wisconsinStateData,
  wyoming: wyomingStateData,
} as const

// Type for state data structure
export type StateData = Omit<typeof californiaStateData, 'handbookUrl'> & {
  handbookUrl?: string
}

export function getStateData(stateKey: StateKey): StateData {
  // Return the specific state data if it exists
  const stateData = stateDataMap[stateKey as keyof typeof stateDataMap]

  // Base data to use (either specific state data or California fallback)
  const baseData = stateData || californiaStateData

  if (!stateData) {
    // Fallback: Create a generic template based on California but with the correct state name and department
    console.warn(`State data not found for ${stateKey}, using California template with ${stateKey} state name`)
  }

  // Get the proper state name and department info
  const stateName = STATES[stateKey]?.name || stateKey
  const departmentInfo = getDepartmentName(stateKey)

  // Get effective pricing to override static state data
  const effectivePricing = getEffectivePricing()

  const getBadge = (original: number, discounted: number) => {
    if (original <= discounted) return ''
    const off = Math.round(((original - discounted) / original) * 100)
    return `${off}% OFF`
  }

  const dynamicPricing = {
    ...baseData.pricing,
    plans: {
      sevenDay: {
        duration: effectivePricing.PLANS.SEVEN_DAY.duration,
        originalPrice: effectivePricing.PLANS.SEVEN_DAY.originalPrice,
        discountedPrice: effectivePricing.PLANS.SEVEN_DAY.discountedPrice,
        badge: getBadge(effectivePricing.PLANS.SEVEN_DAY.originalPrice, effectivePricing.PLANS.SEVEN_DAY.discountedPrice)
      },
      thirtyDay: {
        duration: effectivePricing.PLANS.THIRTY_DAY.duration,
        originalPrice: effectivePricing.PLANS.THIRTY_DAY.originalPrice,
        discountedPrice: effectivePricing.PLANS.THIRTY_DAY.discountedPrice,
        badge: getBadge(effectivePricing.PLANS.THIRTY_DAY.originalPrice, effectivePricing.PLANS.THIRTY_DAY.discountedPrice)
      },
      lifetime: {
        duration: effectivePricing.PLANS.LIFETIME.duration,
        originalPrice: effectivePricing.PLANS.LIFETIME.originalPrice,
        discountedPrice: effectivePricing.PLANS.LIFETIME.discountedPrice,
        badge: getBadge(effectivePricing.PLANS.LIFETIME.originalPrice, effectivePricing.PLANS.LIFETIME.discountedPrice)
      }
    }
  }

  // Create a customized version of California data with the correct state name and department
  // Generate handbook URL
  const handbookUrl = ""

  return {
    ...baseData,
    stateName: stateName,
    handbookUrl,
    pricing: dynamicPricing,

    seo: {
      ...baseData.seo,
      title: `${stateName} ${departmentInfo.name} Real Estate Exam Prep & Study Guide (2026)`,
      description: `Pass your ${stateName} ${departmentInfo.name} real estate licensing exam first try with our comprehensive practice questions. Updated for 2026 with real ${stateName} ${departmentInfo.name} questions and detailed explanations.`,
      keywords: [
        `${stateName} ${departmentInfo.name} exam`,
        `${stateName} real estate practice test`,
        `${stateName} real estate licensing exam`,
        `${departmentInfo.name} questions ${stateName}`,
        `How to pass ${stateName} real estate exam`,
        `${stateName} real estate license test prep`,
        `${departmentInfo.fullName} ${stateName}`
      ]
    },
    studyTips: baseData.studyTips.map((tip: any) => ({
      ...tip,
      description: tip.description.replace(/California/g, stateName)
    })),
    commonMistakes: baseData.commonMistakes.map((mistake: any) => ({
      ...mistake,
      description: mistake.description.replace(/California/g, stateName)
    })),
    faq: baseData.faq.map((faqItem: any) => ({
      ...faqItem,
      question: faqItem.question.replace(/California/g, stateName),
      answer: faqItem.answer.replace(/California/g, stateName).replace(/CA/g, stateName)
    }))
  } as unknown as StateData
}