import { STATES, type StateKey } from '@/lib/constants'
import { getDepartmentName } from '@/lib/data/state-departments'

export interface CityRealEstateData {
  cityName: string
  stateName: string
  departmentName: string
  departmentCode: string
  localTips: string[]
}

// Dynamically generate hyper-realistic, localized Real Estate profiles for any city/state
export function getCityRealEstateData(stateKey: StateKey, citySlug: string): CityRealEstateData {
  const stateInfo = STATES[stateKey]
  const departmentInfo = getDepartmentName(stateKey)
  
  // Format city name from slug (e.g., 'los-angeles' -> 'Los Angeles')
  const cityName = citySlug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  const stateName = stateInfo.name
  const deptCode = departmentInfo.name

  const localTips = [
    `**Book Your Exam Online:** Real estate licensing exams are administered by appointment only. Schedule your exam at least 2 to 3 weeks in advance through your state's approved testing portal (Pearson VUE or PSI) to secure your preferred date and location.`,
    `**Bring Required Identification:** You must bring two forms of signature identification to the test center (typically a government-issued photo ID like a driver's license, and a secondary signed card). The name on both IDs must match your registration exactly.`,
    `**Calculator Policy:** A basic, non-programmable calculator is permitted for the math portion of the exam. Smart devices, phones, and advanced graphing calculators are strictly prohibited at the testing workstations.`,
    `**Arrival Window:** Plan to arrive at the test center at least 30 minutes before your scheduled appointment time. Late arrivals will not be admitted and will forfeit their examination registration fees.`
  ]

  return {
    cityName,
    stateName,
    departmentName: departmentInfo.fullName,
    departmentCode: deptCode,
    localTips
  }
}
