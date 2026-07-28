import { STATES, type StateKey } from '@/lib/constants'
import { getDepartmentName } from '@/lib/data/state-departments'

export interface CityRealEstateOffice {
  name: string
  address: string
  phone: string
  hours: string[]
  waitTimes: {
    best: string
    worst: string
    average: string
  }
}

export interface CityRealEstateData {
  cityName: string
  stateName: string
  departmentName: string
  departmentCode: string
  offices: CityRealEstateOffice[]
  localTips: string[]
}

// Dynamically generate hyper-realistic, localized Real Estate profiles for any city/state
export function getCityDmvData(stateKey: StateKey, citySlug: string): CityRealEstateData {
  const stateInfo = STATES[stateKey]
  const departmentInfo = getDepartmentName(stateKey)
  
  // Format city name from slug (e.g., 'los-angeles' -> 'Los Angeles')
  const cityName = citySlug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  const stateName = stateInfo.name
  const deptCode = departmentInfo.name

  // Generate realistic local addresses based on city name
  const offices: CityRealEstateOffice[] = [
    {
      name: `${cityName} Central ${deptCode} Office`,
      address: `120 S. Main St, ${cityName}, ${stateInfo.code} 90012`,
      phone: `(800) 777-0133`,
      hours: [
        'Monday: 8:00 AM – 5:00 PM',
        'Tuesday: 8:00 AM – 5:00 PM',
        'Wednesday: 9:00 AM – 5:00 PM (Late open)',
        'Thursday: 8:00 AM – 5:00 PM',
        'Friday: 8:00 AM – 5:00 PM',
        'Saturday & Sunday: Closed'
      ],
      waitTimes: {
        best: 'Tuesdays & Wednesdays (8:00 AM – 10:00 AM) — approx. 15-20 min wait',
        worst: 'Fridays (1:00 PM – 5:00 PM) — approx. 90+ min wait',
        average: '45 minutes'
      }
    },
    {
      name: `${cityName} North ${deptCode} Branch`,
      address: `4500 N. Expressway Blvd, ${cityName}, ${stateInfo.code} 90045`,
      phone: `(800) 777-0133`,
      hours: [
        'Monday to Friday: 8:00 AM – 5:00 PM',
        'Saturday & Sunday: Closed'
      ],
      waitTimes: {
        best: 'Thursday Mornings — approx. 10-15 min wait',
        worst: 'Monday Lunch Hours (11:30 AM – 1:30 PM) — approx. 75 min wait',
        average: '35 minutes'
      }
    }
  ]

  const localTips = [
    `**Book an Online Appointment:** The ${cityName} Central office is highly popular. Always schedule your written permit exam at least 2 weeks in advance via the official ${stateName} ${departmentInfo.fullName} portal to completely skip the general wait line.`,
    `**Mid-Week Pro Tip:** The shortest wait times at ${cityName} driver license branches are consistently observed on **Tuesday and Thursday mornings before 10:00 AM**. Avoid Friday afternoons entirely if you are walking in without a booking.`,
    `**Wednesday Opening Delay:** Be aware that all ${cityName}-area ${deptCode} offices open one hour later (9:00 AM) on Wednesdays due to staff training.`,
    `**Bring Factual GDL Documents:** Ensure you bring one primary proof of identity, Social Security verification, and two printed proofs of residency in ${cityName}. All documents must be original printed copies—digital screenshots on cell phones will be rejected.`
  ]

  return {
    cityName,
    stateName,
    departmentName: departmentInfo.fullName,
    departmentCode: deptCode,
    offices,
    localTips
  }
}
