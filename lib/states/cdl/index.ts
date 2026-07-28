import { STATES, type StateKey } from '@/lib/constants'
import { CdlStateData } from '@/lib/types/cdl'
import { californiaCdlData } from './california'
import { getDepartmentName } from '@/lib/data/state-departments'

export function getCdlStateData(stateKey: StateKey): CdlStateData {
  if (stateKey === 'california') {
    return californiaCdlData
  }

  const stateInfo = STATES[stateKey]
  const stateName = stateInfo.name
  const stateCode = stateInfo.code

  // Get department name from helper
  const deptInfo = getDepartmentName(stateKey)
  const departmentName = deptInfo.name

  // Format state name for handbook PDF URL (e.g. New York -> New_York)
  const formattedStateName = stateName
    .split(/\s+|-/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('_')
  
  const handbookUrl = `/pdf/${formattedStateName}_CDL_Handbook_2026.pdf`

  // Filter out the California-specific ambulance category for other states
  const categories = californiaCdlData.categories.filter(cat => cat.id !== 'ambulance')

  return {
    stateName,
    departmentName,
    handbookUrl,
    lastUpdated: californiaCdlData.lastUpdated || 'July 2026',
    pricing: {
      price: 99,
      duration: 90
    },
    seo: {
      title: `FREE ${stateName} CDL Practice Test (2026) | Class A, B & Endorsements`,
      description: `Pass your ${stateName} CDL written exams on the first try. Detailed practice tests with real questions for General Knowledge, Air Brakes, Combination, Hazmat, Pre-Trip, and all endorsements.`,
      keywords: [
        `${stateName} CDL practice test 2026`,
        `${stateName} Class A permit test`,
        `${stateCode} CDL general knowledge exam`,
        `${stateName} CDL air brakes test`,
        `${stateName} Hazmat endorsement practice`,
        `${stateCode} CDL pre-trip inspection checklist`,
        `${stateName} school bus permit test`,
        `${stateName} passenger cdl practice`,
        `${stateName} ${departmentName} CDL handbook study guide`,
        `${stateName} class a real estate license practice test`,
        `${stateName} cdl permit test`,
        `${stateName} hazmat practice test`,
        `${stateName} cdl sample test`,
        `${stateName} cdl study`,
        `${stateName} commercial driver license permit test`,
        `${stateName} sample cdl exam`,
        `${stateName} cdl exam`,
        `${stateName} cdl permit practice test`,
        `${stateName} cdl exam test`,
        `${stateName} cdl prep test`,
        `${stateName} cdl test practice test`,
        `${stateName} commercial real estate license practice test`,
        `${stateName} cdl class a practice test`,
        `${stateName} cdl general knowledge test`,
        `${stateName} cdl hazmat practice test`,
        `${stateName} cdl license test`,
        `${stateName} class a cdl practice test`,
        `${stateName} cdl class b practice test`,
        `${stateName} cdl real estate license study guide`,
        `${stateName} cdl handbook`,
        `${stateName} cdl practice exam`,
        `${stateName} cdl practice test general knowledge`,
        `${stateName} cdl practice tests`,
        `${stateName} cdl test questions`,
        `${stateName} commercial driver license general knowledge test`,
        `free ${stateName} cdl practice test`,
        `${stateName} hazmat endorsement test`,
        `${stateName} hazmat test`,
        `${stateName} tank endorsement study guide`,
        `${stateName} cdl air brake test`,
        `${stateName} cdl b practice test`,
        `${stateName} cdl hazmat test`,
        `${stateName} cdl practice exams free`,
        `${stateName} class b cdl pretest`,
        `${stateName} real-estate cdl practice test`,
        `free ${stateName} cdl exam questions`,
        `free ${stateName} cdl practise test`,
        `${stateName} general knowledge test for cdl`,
        `${stateName} tanker endorsement test`,
        `${stateName} cdl combination test`,
        `${stateName} cdl permit test questions`,
        `${stateName} cdl sample tests`,
        `${stateName} cdl test prep`,
        `${stateName} cdl training test`,
        `${stateName} cdl written test`,
        `${stateName} class b cdl practice test`,
        `${stateName} commercial license handbook`,
        `free ${stateName} cdl training test`,
        `${stateName} hazardous materials practice test`,
        `${stateName} hazmat practise test`,
        `${stateName} online cdl practice test`,
        `${stateName} questions for commercial real estate license test`,
        `${stateName} cdl a practice test`,
        `${stateName} cdl general knowledge practice test`,
        `${stateName} cdl knowledge test`,
        `${stateName} cdl permit practice tests`,
        `${stateName} cdl practice test air brakes`,
        `${stateName} cdl practice test questions`,
        `${stateName} cdl pretest`,
        `${stateName} class b cdl license practice test`,
        `${stateName} class b cdl practice tests`,
        `${stateName} commercial driver license written test`,
        `${stateName} commercial real estate license book`,
        `free ${stateName} cdl pretest`,
        `${stateName} hazmat cdl practice test`,
        `${stateName} hazmat endorsement practice test`,
        `how many questions are on the ${stateName} cdl permit test`,
        `how many questions does online cdl test have in ${stateName}`,
        `${stateCode} cdl a license requirements`,
        `${stateName} cdl manual`,
        `commercial driver license manual ${stateName}`,
        `${stateName} cdl a manual`,
        `${stateName} cdl study guide`,
        `study for cdl in ${stateName}`,
        `${stateName} cdl test study`,
        `${stateName} cdl practice questions`,
        `${stateName} cdl written practice test`
      ]
    },
    testOverview: {
      totalQuestions: 50,
      passingScore: 40,
      timeLimit: 'No time limit',
      ageRequirements: {
        under18: `Not eligible for a Commercial Driver's License in ${stateName}.`,
        over18: `Must be at least 18 years old to drive commercial vehicles within ${stateName} (intrastate). Must be at least 21 years old to drive across state lines (interstate) or transport hazardous materials.`
      }
    },
    faq: [
      {
        question: `What are the requirements to get a CDL in ${stateName}?`,
        answer: `To apply for a ${stateName} Commercial Driver's License (CDL), you must: (1) hold a valid ${stateName} non-commercial real estate license, (2) pass a DOT physical and obtain a Medical Examiner's Certificate, (3) verify your identity and residency, (4) pass the required CDL written knowledge tests at the ${departmentName} to receive a Commercial Learner's Permit (CLP), (5) complete mandatory FMCSA-approved Entry-Level Driver Training (ELDT), and (6) pass the CDL skills test (Pre-Trip Inspection, Yard Skills, and Road Driving).`
      },
      {
        question: 'Do I need to take the ELDT course before getting my CLP permit?',
        answer: 'No, you do not need to complete the Entry-Level Driver Training (ELDT) course before taking your written exams to get your Commercial Learner\'s Permit (CLP). However, you must complete both the theory and behind-the-wheel portions of the ELDT course before you are allowed to schedule your final Real Estate CDL skills road test.'
      },
      {
        question: `What is the difference between a Class A and Class B CDL in ${stateName}?`,
        answer: `A Class A CDL allows you to operate any combination of vehicles with a Gross Combination Weight Rating (GCWR) of 26,001 pounds or more, provided the towed vehicle weighs over 10,000 pounds (e.g., tractor-trailers, flatbeds, double trailers). A Class B CDL allows you to operate any single vehicle with a Gross Vehicle Weight Rating (GVWR) of 26,001 pounds or more, or any such vehicle towing a vehicle not in excess of 10,000 pounds (e.g., dump trucks, cement mixers, delivery trucks, city buses).`
      },
      {
        question: `How many questions are on the ${stateName} CDL written exams?`,
        answer: `The number of questions varies by test: General Knowledge has 50 questions (must pass with 40+ correct), Air Brakes has 25 questions (must pass with 20+ correct), Combination Vehicles has 20 questions (must pass with 16+ correct), and most endorsement tests (like Hazmat or Passenger) have 20 to 30 questions. All tests are multiple-choice and require an 80% passing score.`
      },
      {
        question: 'Is the CDL Pre-Trip Inspection part of the written tests?',
        answer: 'No, the Pre-Trip Inspection is the first part of your CDL skills test (road test) taken in person with an examiner. However, it is highly verbal and requires memorizing a 100+ point checklist of engine parts, hoses, brakes, and cabin functions. Our Pre-Trip question bank helps you study and memorize exactly what parts to inspect and what defects to describe to the examiner.'
      }
    ],
    categories
  }
}
