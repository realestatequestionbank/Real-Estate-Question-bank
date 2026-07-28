import { CdlStateData } from '@/lib/types/cdl'

export const californiaCdlData: CdlStateData = {
  stateName: 'California',
  departmentName: 'Real Estate',
  handbookUrl: '/pdf/California_CDL_Handbook_2026.pdf',
  lastUpdated: 'July 2026',
  pricing: {
    price: 99,
    duration: 90
  },
  seo: {
    title: 'FREE California CDL Practice Test (2026) | Class A, B & Endorsements',
    description: 'Pass your California CDL written exams on the first try. Detailed practice tests with real questions for General Knowledge, Air Brakes, Combination, Hazmat, Pre-Trip, and all endorsements.',
    keywords: [
      'California CDL practice test 2026',
      'California Class A permit test',
      'CA CDL general knowledge exam',
      'California CDL air brakes test',
      'California Hazmat endorsement practice',
      'CA CDL pre-trip inspection checklist',
      'California school bus permit test',
      'California passenger cdl practice',
      'CA Real Estate CDL handbook study guide',
      'california cdl handbook',
      'cdl california',
      'california real-estate practise written test',
      'california cdl practice test',
      'california practice cdl test 2026',
      'california practice cdl test 2025',
      'california state practice cdl test',
      'cdl practice test california',
      'california practice cdl test',
      'california cdl practice test general knowledge',
      'california cdl hazmat practice test',
      'cdl california practice test',
      'california cdl practice tests',
      'california real-estate cdl practice test',
      'california hazmat practice test',
      'california real-estate hazmat practice test',
      'hazmat practice test california'
    ]
  },
  testOverview: {
    totalQuestions: 50,
    passingScore: 40,
    timeLimit: 'No time limit',
    ageRequirements: {
      under18: 'Not eligible for a Commercial Driver\'s License in California.',
      over18: 'Must be at least 18 years old to drive commercial vehicles within California (intrastate). Must be at least 21 years old to drive across state lines (interstate) or transport hazardous materials.'
    }
  },
  faq: [
    {
      question: 'What are the requirements to get a CDL in California?',
      answer: 'To apply for a California Commercial Driver\'s License (CDL), you must: (1) hold a valid California Class C non-commercial driver\'s license, (2) pass a DOT physical and obtain a Medical Examiner\'s Certificate, (3) verify your identity and residency, (4) pass the required CDL written knowledge tests at the Real Estate to receive a Commercial Learner\'s Permit (CLP), (5) complete mandatory FMCSA-approved Entry-Level Driver Training (ELDT), and (6) pass the CDL skills test (Pre-Trip Inspection, Yard Skills, and Road Driving).'
    },
    {
      question: 'Do I need to take the ELDT course before getting my CLP permit?',
      answer: 'No, you do not need to complete the Entry-Level Driver Training (ELDT) course before taking your written exams to get your Commercial Learner\'s Permit (CLP). However, you must complete both the theory and behind-the-wheel portions of the ELDT course before you are allowed to schedule your final Real Estate CDL skills road test.'
    },
    {
      question: 'What is the difference between a Class A and Class B CDL in California?',
      answer: 'A Class A CDL allows you to operate any combination of vehicles with a Gross Combination Weight Rating (GCWR) of 26,001 pounds or more, provided the towed vehicle weighs over 10,000 pounds (e.g., tractor-trailers, flatbeds, double trailers). A Class B CDL allows you to operate any single vehicle with a Gross Vehicle Weight Rating (GVWR) of 26,001 pounds or more, or any such vehicle towing a vehicle not in excess of 10,000 pounds (e.g., dump trucks, cement mixers, delivery trucks, city buses).'
    },
    {
      question: 'How many questions are on the California CDL written exams?',
      answer: 'The number of questions varies by test: General Knowledge has 50 questions (must pass with 40+ correct), Air Brakes has 25 questions (must pass with 20+ correct), Combination Vehicles has 20 questions (must pass with 16+ correct), and most endorsement tests (like Hazmat or Passenger) have 20 to 30 questions. All tests are multiple-choice and require an 80% passing score.'
    },
    {
      question: 'Is the CDL Pre-Trip Inspection part of the written tests?',
      answer: 'No, the Pre-Trip Inspection is the first part of your CDL skills test (road test) taken in person with an examiner. However, it is highly verbal and requires memorizing a 100+ point checklist of engine parts, hoses, brakes, and cabin functions. Our Pre-Trip question bank helps you study and memorize exactly what parts to inspect and what defects to describe to the examiner.'
    }
  ],
  categories: [
    {
      id: 'class_a',
      name: 'Class A General Knowledge',
      code: 'GK-A',
      questionsCount: 397,
      description: 'Core written test for all Class A drivers — safety, cargo, and emergency procedures.',
      icon: 'Truck',
      isEndorsement: false
    },
    {
      id: 'class_b',
      name: 'Class B General Knowledge',
      code: 'GK-B',
      questionsCount: 246,
      description: 'Required for Class B drivers — cargo safety, road rules, and heavy single-unit vehicles.',
      icon: 'Truck',
      isEndorsement: false
    },
    {
      id: 'class_c',
      name: 'Class C General Knowledge',
      code: 'GK-C',
      questionsCount: 246,
      description: 'Required for Class C drivers — passenger vans, hazmat delivery, and small commercial vehicles.',
      icon: 'Truck',
      isEndorsement: false
    },
    {
      id: 'air_brakes',
      name: 'Air Brakes',
      code: 'AB',
      questionsCount: 175,
      description: 'Required for any vehicle with air brakes. Avoid the air brakes restriction on your license.',
      icon: 'Disc',
      isEndorsement: false
    },
    {
      id: 'combination',
      name: 'Combination Vehicles',
      code: 'CV',
      questionsCount: 169,
      description: 'Required for Class A drivers — trailer coupling, safety, and skid control.',
      icon: 'Link',
      isEndorsement: false
    },
    {
      id: 'pre_trip',
      name: 'Pre-Trip Inspection',
      code: 'PT',
      questionsCount: 115,
      description: 'Memorize the verbal walkthrough checklist of parts, belts, leaks, and gauges.',
      icon: 'ClipboardCheck',
      isEndorsement: false
    },
    {
      id: 'hazmat',
      name: 'Hazardous Materials (HazMat)',
      code: 'H',
      questionsCount: 243,
      description: 'Endorsement to haul hazardous materials — placards, packaging, and emergency response.',
      icon: 'Flame',
      isEndorsement: true
    },
    {
      id: 'passenger',
      name: 'Passenger Transport',
      code: 'P',
      questionsCount: 328,
      description: 'Endorsement to drive buses with 16+ passengers — safety rules and loading procedures.',
      icon: 'Users',
      isEndorsement: true
    },
    {
      id: 'bus',
      name: 'School Bus',
      code: 'S',
      questionsCount: 206,
      description: 'Endorsement for school bus drivers — student safety, loading zones, and special laws.',
      icon: 'Bus',
      isEndorsement: true
    },
    {
      id: 'double',
      name: 'Double / Triple Trailers',
      code: 'T',
      questionsCount: 356,
      description: 'Class A endorsement for multiple trailers — sway control and air line connections.',
      icon: 'Layers',
      isEndorsement: true
    },
    {
      id: 'tank',
      name: 'Tanker Vehicles',
      code: 'N',
      questionsCount: 345,
      description: 'Endorsement for bulk liquid or gas vehicles — surge control and high center of gravity.',
      icon: 'Waves',
      isEndorsement: true
    },
    {
      id: 'ambulance',
      name: 'California CDL Ambulance',
      code: 'Amb',
      questionsCount: 50,
      description: 'California certificate for ambulance operators — transport laws, sirens, and equipment.',
      icon: 'Activity',
      isEndorsement: true
    }
  ]
}
