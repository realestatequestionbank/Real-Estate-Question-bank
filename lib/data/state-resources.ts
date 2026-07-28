export interface StateResources {
  // Department Info
  departmentName: string;
  departmentCode: string;
  officialWebsite: string;

  // Study Materials
  handbookUrl: string;
  handbookLanguages: string[];
  officialPracticeTestAvailable: boolean;

  // Eligibility
  minimumPermitAge: string;
  parentConsentRequired: boolean;
  parentConsentMaxAge: number;

  // Written Test Details
  testQuestionsTeen: number;
  testQuestionsAdult: number;
  passingScoreTeen: number;
  passingScoreAdult: number;
  passingPercentage: number;
  separateRoadSignsTest: boolean;
  roadSignsPassingRequirement?: string;
  testLanguages: string[];
  testLanguageCount: number;
  onlineTestAvailable: boolean;
  onlineTestNotes?: string;

  // Fees & Attempts
  applicationFee: string;
  retestFee?: string;
  maxAttempts: number | string;
  waitAfterFail: string;

  // Learner's Permit
  permitValidityPeriod: string;
  minHoldingPeriod: string;

  // Supervised Driving Requirements
  supervisedHoursTotal: number;
  supervisedHoursNight: number;
  supervisorMinAge: number;
  drivingLogRequired: boolean;

  // Driver Education
  driverEdRequired: boolean;
  driverEdRequiredForAges?: string;
  driverEdClassroomHours?: number;
  driverEdBehindWheelHours?: number;
  onlineDriverEdAccepted: boolean;

  // GDL Restrictions (teens)
  gdlNighttimeCurfew?: string;
  gdlPassengerRestriction?: string;
  gdlCellPhoneRestriction?: string;

  // Appointment & Logistics
  appointmentUrl?: string;
  appointmentRequired: boolean;

  // URLs
  permitApplicationUrl: string;

  // Metadata
  lastVerified: string;
  sources: string[];
}

export const stateResources: Record<string, StateResources> = {
  california: {
    departmentName: "Department of Motor Vehicles",
    departmentCode: "Real Estate",
    officialWebsite: "https://www.real-estate.ca.gov",

    handbookUrl: "https://www.real-estate.ca.gov/portal/handbook/california-driver-handbook/",
    handbookLanguages: [
      "English", "Spanish", "Russian", "Chinese", "Punjabi",
      "Farsi", "Armenian", "Tagalog", "Vietnamese", "Korean",
    ],
    officialPracticeTestAvailable: true,

    minimumPermitAge: "15.5",
    parentConsentRequired: true,
    parentConsentMaxAge: 18,

    testQuestionsTeen: 46,
    testQuestionsAdult: 36,
    passingScoreTeen: 38,
    passingScoreAdult: 30,
    passingPercentage: 83,
    separateRoadSignsTest: false,
    testLanguages: ["English", "Spanish", "and 33 additional languages"],
    testLanguageCount: 35,
    onlineTestAvailable: true,
    onlineTestNotes: "Mon-Fri 8am-4pm, webcam required",

    applicationFee: "$38",
    maxAttempts: 3,
    waitAfterFail: "7 days",

    permitValidityPeriod: "12 months",
    minHoldingPeriod: "6 months",

    supervisedHoursTotal: 50,
    supervisedHoursNight: 10,
    supervisorMinAge: 25,
    drivingLogRequired: true,

    driverEdRequired: true,
    driverEdRequiredForAges: "Under 17.5",
    onlineDriverEdAccepted: true,

    gdlNighttimeCurfew: "11pm-5am (first 12 months)",
    gdlPassengerRestriction: "No passengers under 20 (first 12 months)",
    gdlCellPhoneRestriction: "No handheld phone use",

    appointmentUrl: "https://www.real-estate.ca.gov/portal/appointments/",
    appointmentRequired: false,

    permitApplicationUrl: "https://www.real-estate.ca.gov/portal/driver-licenses-identification-cards/dl-id-online-app-edl-44/",

    lastVerified: "July 2026",
    sources: [
      "https://www.real-estate.ca.gov/portal/handbook/california-driver-handbook/",
      "https://www.real-estate.ca.gov/portal/driver-licenses-identification-cards/driver-licenses-dl/",
    ],
  },

  arizona: {
    departmentName: "Motor Vehicle Division",
    departmentCode: "ADOT MVD",
    officialWebsite: "https://azdot.gov/motor-vehicles",

    handbookUrl: "https://azdot.gov/motor-vehicles/driver-services/tests-manuals-and-driving-schools/manuals",
    handbookLanguages: ["English", "Spanish"],
    officialPracticeTestAvailable: true,

    minimumPermitAge: "15.5",
    parentConsentRequired: true,
    parentConsentMaxAge: 18,

    testQuestionsTeen: 30,
    testQuestionsAdult: 30,
    passingScoreTeen: 24,
    passingScoreAdult: 24,
    passingPercentage: 80,
    separateRoadSignsTest: false,
    testLanguages: ["English", "Spanish"],
    testLanguageCount: 2,
    onlineTestAvailable: true,
    onlineTestNotes: "Permit Test @ Home available for teens with parent proctor",

    applicationFee: "$7",
    maxAttempts: 3,
    waitAfterFail: "1 day",

    permitValidityPeriod: "12 months",
    minHoldingPeriod: "6 months",

    supervisedHoursTotal: 30,
    supervisedHoursNight: 10,
    supervisorMinAge: 21,
    drivingLogRequired: false,

    driverEdRequired: false,
    driverEdRequiredForAges: "None (optional alternative to 30 hrs driving)",
    onlineDriverEdAccepted: true,

    gdlNighttimeCurfew: "Midnight-5am (first 6 months)",
    gdlPassengerRestriction: "No more than 1 passenger under 18 (first 6 months, except family)",
    gdlCellPhoneRestriction: "All cell phone use prohibited (teens)",

    appointmentUrl: "https://azmvdnow.gov/appointments",
    appointmentRequired: true,

    permitApplicationUrl: "https://azmvdnow.gov/",

    lastVerified: "July 2026",
    sources: [
      "https://azdot.gov/motor-vehicles/driver-services/teen-drivers/permit-and-license-requirements",
      "https://azdot.gov/motor-vehicles/driver-services/tests-manuals-and-driving-schools/manuals"
    ],
  },

  texas: {
    departmentName: "Department of Public Safety",
    departmentCode: "DPS",
    officialWebsite: "https://www.dps.texas.gov/section/driver-license",

    handbookUrl: "https://www.dps.texas.gov/internetforms/forms/dl-7.pdf",
    handbookLanguages: ["English", "Spanish"],
    officialPracticeTestAvailable: false,

    minimumPermitAge: "15",
    parentConsentRequired: true,
    parentConsentMaxAge: 18,

    testQuestionsTeen: 30,
    testQuestionsAdult: 30,
    passingScoreTeen: 21,
    passingScoreAdult: 21,
    passingPercentage: 70,
    separateRoadSignsTest: false,
    testLanguages: ["English", "Spanish"],
    testLanguageCount: 2,
    onlineTestAvailable: true,
    onlineTestNotes: "Via approved driving schools only",

    applicationFee: "$16",
    maxAttempts: 3,
    waitAfterFail: "24 hours",

    permitValidityPeriod: "Until 18th birthday",
    minHoldingPeriod: "6 months",

    supervisedHoursTotal: 30,
    supervisedHoursNight: 10,
    supervisorMinAge: 21,
    drivingLogRequired: true,

    driverEdRequired: true,
    driverEdRequiredForAges: "Under 25",
    driverEdClassroomHours: 24,
    driverEdBehindWheelHours: 7,
    onlineDriverEdAccepted: true,

    gdlNighttimeCurfew: "Midnight-5am",
    gdlPassengerRestriction: "No more than 1 passenger under 21 (non-family)",
    gdlCellPhoneRestriction: "All cell phone use prohibited",

    appointmentUrl: "https://www.dps.texas.gov/section/driver-license/driver-license-services-appointments",
    appointmentRequired: true,

    permitApplicationUrl: "https://www.dps.texas.gov/section/driver-license/texas-learners-license-teen",

    lastVerified: "July 2026",
    sources: [
      "https://www.dps.texas.gov/section/driver-license/texas-learners-license-teen",
      "https://www.dps.texas.gov/internetforms/forms/dl-7.pdf",
      "https://www.dps.texas.gov/section/driver-license/graduated-driver-license-gdl-and-hardship-license",
    ],
  },

  washington: {
    departmentName: "Department of Licensing",
    departmentCode: "DOL",
    officialWebsite: "https://dol.wa.gov",

    handbookUrl: "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides",
    handbookLanguages: [
      "English", "Spanish", "Chinese (Simplified)", "Chinese (Traditional)", "Russian",
      "Vietnamese", "Amharic", "Arabic", "Hindi", "Japanese",
      "Korean", "Punjabi", "Tagalog", "Ukrainian",
    ],
    officialPracticeTestAvailable: false,

    minimumPermitAge: "15",
    parentConsentRequired: true,
    parentConsentMaxAge: 18,

    testQuestionsTeen: 40,
    testQuestionsAdult: 40,
    passingScoreTeen: 32,
    passingScoreAdult: 32,
    passingPercentage: 80,
    separateRoadSignsTest: false,
    testLanguages: ["English", "Spanish", "and 12 additional languages"],
    testLanguageCount: 14,
    onlineTestAvailable: false,
    onlineTestNotes: "Must be taken in person at DOL office or approved driver training school",

    applicationFee: "$25–$35",
    maxAttempts: 3,
    waitAfterFail: "1 day",

    permitValidityPeriod: "1 year",
    minHoldingPeriod: "6 months",

    supervisedHoursTotal: 50,
    supervisedHoursNight: 10,
    supervisorMinAge: 21,
    drivingLogRequired: true,

    driverEdRequired: true,
    driverEdRequiredForAges: "Under 18",
    driverEdClassroomHours: 30,
    driverEdBehindWheelHours: 6,
    onlineDriverEdAccepted: false,

    gdlNighttimeCurfew: "1am-5am (intermediate license)",
    gdlPassengerRestriction: "No passengers under 20 for first 6 months (except family)",
    gdlCellPhoneRestriction: "Complete ban on all wireless device use",

    appointmentUrl: "https://dol.wa.gov",
    appointmentRequired: false,

    permitApplicationUrl: "https://dol.wa.gov/driver-licenses-and-permits/learner-permit-application",

    lastVerified: "July 2026",
    sources: [
      "https://dol.wa.gov/driver-licenses-and-permits/learner-permit-application",
      "https://dol.wa.gov/driver-licenses-and-permits/driver-training-and-testing/driver-guides",
    ],
  },

  "north-carolina": {
    departmentName: "Division of Motor Vehicles",
    departmentCode: "Real Estate",
    officialWebsite: "https://www.ncdot.gov/real-estate/",

    handbookUrl: "https://www.ncdot.gov/real-estate/license-id/driver-licenses/new-drivers/Documents/driver-handbook.pdf",
    handbookLanguages: ["English", "Spanish"],
    officialPracticeTestAvailable: true,

    minimumPermitAge: "15",
    parentConsentRequired: true,
    parentConsentMaxAge: 18,

    testQuestionsTeen: 25,
    testQuestionsAdult: 25,
    passingScoreTeen: 20,
    passingScoreAdult: 20,
    passingPercentage: 80,
    separateRoadSignsTest: true,
    roadSignsPassingRequirement: "Must get 6 of 8 road sign questions correct",
    testLanguages: ["English", "Spanish", "and additional languages"],
    testLanguageCount: 8,
    onlineTestAvailable: false,
    onlineTestNotes: "Must be taken in person at an NCRealEstate driver license office",

    applicationFee: "$21.50",
    maxAttempts: 3,
    waitAfterFail: "7 days",

    permitValidityPeriod: "18 months",
    minHoldingPeriod: "12 months",

    supervisedHoursTotal: 60,
    supervisedHoursNight: 10,
    supervisorMinAge: 21,
    drivingLogRequired: true,

    driverEdRequired: true,
    driverEdRequiredForAges: "Under 18",
    driverEdClassroomHours: 30,
    driverEdBehindWheelHours: 6,
    onlineDriverEdAccepted: false,

    gdlNighttimeCurfew: "9pm-5am",
    gdlPassengerRestriction: "No more than 1 passenger under 21 (first 6 months)",
    gdlCellPhoneRestriction: "All cell phone use prohibited",

    appointmentUrl: "https://skiptheline.ncdot.gov/",
    appointmentRequired: false,

    permitApplicationUrl: "https://www.ncdot.gov/real-estate/license-id/driver-licenses/new-drivers/Pages/license-learner-permit.aspx",

    lastVerified: "July 2026",
    sources: [
      "https://www.ncdot.gov/real-estate/license-id/driver-licenses/new-drivers/Pages/license-learner-permit.aspx",
      "https://www.ncdot.gov/real-estate/license-id/driver-licenses/new-drivers/Pages/driver-license-tests.aspx",
      "https://www.ncdot.gov/real-estate/license-id/driver-licenses/new-drivers/Documents/driver-handbook.pdf",
    ],
  },

  "new-york": {
    departmentName: "Department of Motor Vehicles",
    departmentCode: "Real Estate",
    officialWebsite: "https://real-estate.ny.gov",

    handbookUrl: "https://real-estate.ny.gov/brochure/mv21.pdf",
    handbookLanguages: ["English", "Spanish"],
    officialPracticeTestAvailable: true,

    minimumPermitAge: "16",
    parentConsentRequired: true,
    parentConsentMaxAge: 21,

    testQuestionsTeen: 20,
    testQuestionsAdult: 20,
    passingScoreTeen: 14,
    passingScoreAdult: 14,
    passingPercentage: 70,
    separateRoadSignsTest: false,
    roadSignsPassingRequirement: "Must get 2 of 4 road sign questions correct",
    testLanguages: [
      "English", "Spanish", "Chinese", "Korean", "Russian",
      "Arabic", "Bengali", "French", "Greek", "Hebrew",
      "Italian", "Japanese", "Polish", "Turkish", "Albanian",
      "Bosnian", "Haitian Creole", "Nepali", "Urdu", "Yiddish",
    ],
    testLanguageCount: 20,
    onlineTestAvailable: true,
    onlineTestNotes: "At Real Estate, online from home, or through schools (OKTA program)",

    applicationFee: "$80–$92.50 (age-dependent, covers permit through license)",
    maxAttempts: "Unlimited",
    waitAfterFail: "7 days",

    permitValidityPeriod: "5 years",
    minHoldingPeriod: "6 months",

    supervisedHoursTotal: 50,
    supervisedHoursNight: 15,
    supervisorMinAge: 21,
    drivingLogRequired: true,

    driverEdRequired: true,
    driverEdRequiredForAges: "All ages (5-hour pre-licensing course OR 48-hour school program)",
    onlineDriverEdAccepted: false,

    gdlNighttimeCurfew: "9pm-5am (varies by region)",
    gdlPassengerRestriction: "Max 1 passenger under 21 (except family)",
    gdlCellPhoneRestriction: "All cell phone use prohibited",

    appointmentUrl: "https://real-estate.ny.gov/offices",
    appointmentRequired: false,

    permitApplicationUrl: "https://real-estate.ny.gov/driver-license/get-learner-permit",

    lastVerified: "July 2026",
    sources: [
      "https://real-estate.ny.gov/driver-license/get-learner-permit",
      "https://real-estate.ny.gov/brochure/mv21.pdf",
      "https://real-estate.ny.gov/driver-license/younger-driver/the-graduated-license-law",
    ],
  },

  maryland: {
    departmentName: "Motor Vehicle Administration",
    departmentCode: "MVA",
    officialWebsite: "https://mva.maryland.gov",

    handbookUrl: "https://mva.maryland.gov/Documents/DL-002.pdf",
    handbookLanguages: ["English", "Spanish"],
    officialPracticeTestAvailable: true,

    minimumPermitAge: "15.75",
    parentConsentRequired: true,
    parentConsentMaxAge: 18,

    testQuestionsTeen: 25,
    testQuestionsAdult: 25,
    passingScoreTeen: 22,
    passingScoreAdult: 22,
    passingPercentage: 88,
    separateRoadSignsTest: true,
    roadSignsPassingRequirement: "Must get all 10 road sign questions correct",
    testLanguages: ["English", "Spanish"],
    testLanguageCount: 2,
    onlineTestAvailable: false,
    onlineTestNotes: "Must be taken in person at an MVA office",

    applicationFee: "$9/year (license fee only)",
    retestFee: "No fee for retakes",
    maxAttempts: "Unlimited",
    waitAfterFail: "1 day (7 days after 2+ failures)",

    permitValidityPeriod: "2 years",
    minHoldingPeriod: "9 months",

    supervisedHoursTotal: 60,
    supervisedHoursNight: 10,
    supervisorMinAge: 21,
    drivingLogRequired: true,

    driverEdRequired: true,
    driverEdRequiredForAges: "Under 25",
    driverEdClassroomHours: 30,
    driverEdBehindWheelHours: 6,
    onlineDriverEdAccepted: false,

    gdlNighttimeCurfew: "Midnight-5am",
    gdlPassengerRestriction: "No passengers under 18 for first 151 days (except family)",
    gdlCellPhoneRestriction: "All wireless device use prohibited",

    appointmentUrl: "https://mva.maryland.gov/Pages/default.aspx",
    appointmentRequired: false,

    permitApplicationUrl: "https://mva.maryland.gov/drivers/Pages/rookie-driver-general-learners.aspx",

    lastVerified: "July 2026",
    sources: [
      "https://mva.maryland.gov/drivers/Pages/rookie-driver-general-learners.aspx",
      "https://mva.maryland.gov/Documents/DL-002.pdf",
      "https://mva.maryland.gov/drivers/Pages/rookie-driver-general-provisional.aspx",
    ],
  },

  michigan: {
    departmentName: "Secretary of State",
    departmentCode: "SOS",
    officialWebsite: "https://www.michigan.gov/sos",

    handbookUrl: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/01702-0800/SOS_WEDMK_Content.pdf",
    handbookLanguages: ["English", "Spanish", "Arabic"],
    officialPracticeTestAvailable: false,

    minimumPermitAge: "14.75",
    parentConsentRequired: true,
    parentConsentMaxAge: 18,

    testQuestionsTeen: 50,
    testQuestionsAdult: 50,
    passingScoreTeen: 40,
    passingScoreAdult: 40,
    passingPercentage: 80,
    separateRoadSignsTest: false,
    testLanguages: ["English", "Spanish", "Arabic"],
    testLanguageCount: 3,
    onlineTestAvailable: false,
    onlineTestNotes: "Written test is part of real estate exam prep (Segment 1) for teens",

    applicationFee: "$25",
    maxAttempts: 3,
    waitAfterFail: "1 day (30 days after 3 failures)",

    permitValidityPeriod: "Until 18th birthday",
    minHoldingPeriod: "6 months",

    supervisedHoursTotal: 50,
    supervisedHoursNight: 10,
    supervisorMinAge: 21,
    drivingLogRequired: true,

    driverEdRequired: true,
    driverEdRequiredForAges: "Under 18",
    driverEdClassroomHours: 24,
    driverEdBehindWheelHours: 6,
    onlineDriverEdAccepted: false,

    gdlNighttimeCurfew: "10pm-5am (Level 2)",
    gdlPassengerRestriction: "Max 1 passenger under 21 (except family)",
    gdlCellPhoneRestriction: "No cell phone use (Level 1 and 2)",

    appointmentUrl: "https://www.michigan.gov/sos/resources/find-an-office",
    appointmentRequired: false,

    permitApplicationUrl: "https://www.michigan.gov/sos/faqs/license-and-id/drivers-under-18",

    lastVerified: "July 2026",
    sources: [
      "https://www.michigan.gov/sos/faqs/license-and-id/drivers-under-18",
      "https://www.michigan.gov/sos/-/media/Project/Websites/sos/sos/SOS-383-Michigan-Graduated-Drivers-License-A-Guide-for-Parents.pdf",
      "https://www.michigan.gov/sos/-/media/Project/Websites/sos/01702-0800/SOS_WEDMK_Content.pdf",
    ],
  },

  massachusetts: {
    departmentName: "Registry of Motor Vehicles",
    departmentCode: "RMV",
    officialWebsite: "https://www.mass.gov/orgs/massachusetts-registry-of-motor-vehicles",

    handbookUrl: "https://www.mass.gov/doc/chapter-4-rules-of-the-road-0/download",
    handbookLanguages: ["English", "Spanish", "Portuguese", "Chinese", "Vietnamese", "Haitian Creole"],
    officialPracticeTestAvailable: true,

    minimumPermitAge: "16",
    parentConsentRequired: true,
    parentConsentMaxAge: 18,

    testQuestionsTeen: 25,
    testQuestionsAdult: 25,
    passingScoreTeen: 18,
    passingScoreAdult: 18,
    passingPercentage: 72,
    separateRoadSignsTest: false,
    testLanguages: ["English", "Spanish", "Portuguese", "Chinese", "Vietnamese", "Haitian Creole", "and others"],
    testLanguageCount: 25,
    onlineTestAvailable: true,
    onlineTestNotes: "Can take online or at RMV Service Center",

    applicationFee: "$30",
    maxAttempts: "Unlimited",
    waitAfterFail: "1 day",

    permitValidityPeriod: "2 years",
    minHoldingPeriod: "6 months",

    supervisedHoursTotal: 40,
    supervisedHoursNight: 0,
    supervisorMinAge: 21,
    drivingLogRequired: true,

    driverEdRequired: true,
    driverEdRequiredForAges: "Under 18",
    driverEdClassroomHours: 30,
    driverEdBehindWheelHours: 12,
    onlineDriverEdAccepted: false,

    gdlNighttimeCurfew: "12:30am-5am",
    gdlPassengerRestriction: "No passengers under 18 for first 6 months (except family)",
    gdlCellPhoneRestriction: "All cell phone use prohibited",

    appointmentUrl: "https://atlas-myrmv.massdot.state.ma.us/myrmv/_/",
    appointmentRequired: true,

    permitApplicationUrl: "https://www.mass.gov/how-to/apply-for-a-passenger-class-d-learners-permit",

    lastVerified: "July 2026",
    sources: [
      "https://www.mass.gov/how-to/apply-for-a-passenger-class-d-learners-permit",
      "https://www.mass.gov/info-details/junior-operator-license-jol-requirements",
      "https://www.mass.gov/info-details/drivers-education-programs",
    ],
  },

  iowa: {
    departmentName: "Department of Transportation",
    departmentCode: "DOT",
    officialWebsite: "https://iowadot.gov",

    handbookUrl: "https://iowadot.gov/mvd/driverslicense/dlmanual/dlmanual.pdf",
    handbookLanguages: ["English", "Spanish"],
    officialPracticeTestAvailable: true,

    minimumPermitAge: "14",
    parentConsentRequired: true,
    parentConsentMaxAge: 18,

    testQuestionsTeen: 35,
    testQuestionsAdult: 35,
    passingScoreTeen: 28,
    passingScoreAdult: 28,
    passingPercentage: 80,
    separateRoadSignsTest: false,
    testLanguages: ["English", "Spanish"],
    testLanguageCount: 2,
    onlineTestAvailable: true,
    onlineTestNotes: "Skip the Trip online option or parent-proctored at home",

    applicationFee: "$6",
    maxAttempts: "Unlimited",
    waitAfterFail: "1 day",

    permitValidityPeriod: "4 years",
    minHoldingPeriod: "12 months",

    supervisedHoursTotal: 20,
    supervisedHoursNight: 2,
    supervisorMinAge: 21,
    drivingLogRequired: true,

    driverEdRequired: true,
    driverEdRequiredForAges: "Under 18",
    driverEdClassroomHours: 30,
    driverEdBehindWheelHours: 3,
    onlineDriverEdAccepted: true,

    gdlNighttimeCurfew: "12:30am-5am",
    gdlPassengerRestriction: "Max 1 non-family minor for first 6 months (waivable)",
    gdlCellPhoneRestriction: "All electronic device use prohibited",

    appointmentUrl: "https://iowadot.gov/mvd/realid/appointment",
    appointmentRequired: false,

    permitApplicationUrl: "https://iowadot.gov/mvd/driverslicense/newdriver.htm",

    lastVerified: "July 2026",
    sources: [
      "https://iowadot.gov/mvd/driverslicense/newdriver.htm",
      "https://iowadot.gov/drivers-licenses-ids/get-or-renew-drivers-licenses-ids-permits/under-18-permit-license-or-id/intermediate-license",
      "https://iowadot.gov/mvd/driverslicense/dlmanual/dlmanual.pdf",
    ],
  },

  pennsylvania: {
    departmentName: "Department of Transportation",
    departmentCode: "PennDOT",
    officialWebsite: "https://www.real-estate.pa.gov",

    handbookUrl: "https://www.dot.state.pa.us/public/dvspubsforms/bdl/bdl%20manuals/manuals/pa%20drivers%20manual%20by%20chapter/english/pub%2095.pdf",
    handbookLanguages: ["English", "Spanish", "Chinese", "Korean", "Vietnamese"],
    officialPracticeTestAvailable: true,

    minimumPermitAge: "16",
    parentConsentRequired: true,
    parentConsentMaxAge: 18,

    testQuestionsTeen: 18,
    testQuestionsAdult: 18,
    passingScoreTeen: 15,
    passingScoreAdult: 15,
    passingPercentage: 83,
    separateRoadSignsTest: false,
    testLanguages: ["English", "Spanish", "Chinese", "Korean", "Vietnamese", "and others"],
    testLanguageCount: 20,
    onlineTestAvailable: false,
    onlineTestNotes: "Must be taken in person at a Driver License Center",

    applicationFee: "$35.50",
    retestFee: "$10",
    maxAttempts: "Unlimited",
    waitAfterFail: "1 day",

    permitValidityPeriod: "1 year",
    minHoldingPeriod: "6 months",

    supervisedHoursTotal: 65,
    supervisedHoursNight: 10,
    supervisorMinAge: 21,
    drivingLogRequired: true,

    driverEdRequired: false,
    driverEdRequiredForAges: "Optional but recommended",
    onlineDriverEdAccepted: true,

    gdlNighttimeCurfew: "11pm-5am",
    gdlPassengerRestriction: "1 non-family under 18 (3 after 6 months)",
    gdlCellPhoneRestriction: "All cell phone use prohibited",

    appointmentUrl: "https://www.real-estate.pa.gov/Pages/DLSC.aspx",
    appointmentRequired: false,

    permitApplicationUrl: "https://www.pa.gov/services/real-estate/get-a-learners-permit",

    lastVerified: "July 2026",
    sources: [
      "https://www.pa.gov/services/real-estate/get-a-learners-permit",
      "https://www.pa.gov/agencies/penndot/traveling-in-pa/safety/traffic-safety-driver-topics/young-driver",
      "https://www.dot.state.pa.us/public/dvspubsforms/bdl/bdl%20manuals/manuals/pa%20drivers%20manual%20by%20chapter/english/pub%2095.pdf",
    ],
  },

  idaho: {
    departmentName: "Transportation Department",
    departmentCode: "ITD",
    officialWebsite: "https://itd.idaho.gov",

    handbookUrl: "https://itd.idaho.gov/wp-content/uploads/2025/03/driver_manual.pdf",
    handbookLanguages: ["English", "Spanish"],
    officialPracticeTestAvailable: true,

    minimumPermitAge: "14.5",
    parentConsentRequired: true,
    parentConsentMaxAge: 18,

    testQuestionsTeen: 40,
    testQuestionsAdult: 40,
    passingScoreTeen: 34,
    passingScoreAdult: 34,
    passingPercentage: 85,
    separateRoadSignsTest: false,
    testLanguages: ["English", "Spanish"],
    testLanguageCount: 2,
    onlineTestAvailable: false,
    onlineTestNotes: "Must be taken in person at an ITD office",

    applicationFee: "$21.50",
    retestFee: "$6.50",
    maxAttempts: "Unlimited",
    waitAfterFail: "3 days",

    permitValidityPeriod: "Until 18th birthday (or 180 days if 17.5+)",
    minHoldingPeriod: "6 months",

    supervisedHoursTotal: 50,
    supervisedHoursNight: 10,
    supervisorMinAge: 21,
    drivingLogRequired: true,

    driverEdRequired: true,
    driverEdRequiredForAges: "Under 17",
    driverEdClassroomHours: 30,
    driverEdBehindWheelHours: 6,
    onlineDriverEdAccepted: false,

    gdlNighttimeCurfew: "Daylight only (under 16)",
    gdlPassengerRestriction: "Max 1 under 17 for first 6 months (except family)",
    gdlCellPhoneRestriction: "No cell phone use while driving",

    appointmentUrl: "https://itd.idaho.gov/itdreal-estate/",
    appointmentRequired: false,

    permitApplicationUrl: "https://itd.idaho.gov/itdreal-estate/",

    lastVerified: "July 2026",
    sources: [
      "https://itd.idaho.gov/itdreal-estate/",
      "https://itd.idaho.gov/wp-content/uploads/2017/06/3506_gdlfactsheet.pdf",
      "https://itd.idaho.gov/wp-content/uploads/2025/03/driver_manual.pdf",
    ],
  },

  ohio: {
    departmentName: "Bureau of Motor Vehicles",
    departmentCode: "BMV",
    officialWebsite: "https://www.bmv.ohio.gov",

    handbookUrl: "https://www.bmv.ohio.gov/dl-digest-of-laws.aspx",
    handbookLanguages: ["English", "Spanish", "Somali", "Arabic", "Chinese", "Japanese", "Korean", "Russian"],
    officialPracticeTestAvailable: true,

    minimumPermitAge: "15.5",
    parentConsentRequired: true,
    parentConsentMaxAge: 18,

    testQuestionsTeen: 40,
    testQuestionsAdult: 40,
    passingScoreTeen: 30,
    passingScoreAdult: 30,
    passingPercentage: 75,
    separateRoadSignsTest: false,
    testLanguages: ["English", "Spanish", "Somali", "Arabic", "Chinese", "Japanese", "Korean", "Russian"],
    testLanguageCount: 8,
    onlineTestAvailable: true,
    onlineTestNotes: "Available online at Ohio BMV Online Services or at deputy registrar locations",

    applicationFee: "$23.50",
    maxAttempts: "Unlimited",
    waitAfterFail: "1 day",

    permitValidityPeriod: "1 year",
    minHoldingPeriod: "6 months",

    supervisedHoursTotal: 50,
    supervisedHoursNight: 10,
    supervisorMinAge: 21,
    drivingLogRequired: true,

    driverEdRequired: true,
    driverEdRequiredForAges: "Under 18",
    driverEdClassroomHours: 24,
    driverEdBehindWheelHours: 8,
    onlineDriverEdAccepted: true,

    gdlNighttimeCurfew: "Midnight-6am (under 17), 1am-5am (age 17)",
    gdlPassengerRestriction: "Max 1 non-family member",
    gdlCellPhoneRestriction: "All mobile device use prohibited",

    appointmentUrl: "https://www.bmv.ohio.gov/locations.aspx",
    appointmentRequired: false,

    permitApplicationUrl: "https://www.bmv.ohio.gov/dl-gdl.aspx",

    lastVerified: "July 2026",
    sources: [
      "https://www.bmv.ohio.gov/dl-gdl.aspx",
      "https://www.bmv.ohio.gov/dl-digest-of-laws.aspx",
      "https://driversed.com/trending/teen-driving-laws-ohio",
    ],
  },

  nevada: {
    departmentName: "Department of Motor Vehicles",
    departmentCode: "Real Estate",
    officialWebsite: "https://real-estate.nv.gov",

    handbookUrl: "https://real-estate.nv.gov/pdfforms/english.pdf",
    handbookLanguages: ["English", "Spanish"],
    officialPracticeTestAvailable: true,

    minimumPermitAge: "15.5",
    parentConsentRequired: true,
    parentConsentMaxAge: 18,

    testQuestionsTeen: 25,
    testQuestionsAdult: 25,
    passingScoreTeen: 20,
    passingScoreAdult: 20,
    passingPercentage: 80,
    separateRoadSignsTest: false,
    testLanguages: ["English", "Spanish"],
    testLanguageCount: 2,
    onlineTestAvailable: true,
    onlineTestNotes: "Available online at KnowToDrive Nevada or at Real Estate offices",

    applicationFee: "$48.25",
    retestFee: "$10",
    maxAttempts: "Unlimited",
    waitAfterFail: "1 day",

    permitValidityPeriod: "1 year",
    minHoldingPeriod: "6 months",

    supervisedHoursTotal: 50,
    supervisedHoursNight: 10,
    supervisorMinAge: 21,
    drivingLogRequired: true,

    driverEdRequired: true,
    driverEdRequiredForAges: "Under 18",
    onlineDriverEdAccepted: true,

    gdlNighttimeCurfew: "10pm-5am",
    gdlPassengerRestriction: "No passengers under 18 for first 6 months (except family)",
    gdlCellPhoneRestriction: "All cell phone use prohibited",

    appointmentUrl: "https://real-estate.nv.gov/dashpass.htm",
    appointmentRequired: false,

    permitApplicationUrl: "https://real-estate.nv.gov/nvdlteens.htm",

    lastVerified: "July 2026",
    sources: [
      "https://real-estate.nv.gov/nvdlteens.htm",
      "https://real-estate.nv.gov/dltesting.htm",
      "https://real-estate.nv.gov/pdfforms/qtteen.pdf",
    ],
  },

  kentucky: {
    departmentName: "Transportation Cabinet",
    departmentCode: "KYTC",
    officialWebsite: "https://drive.ky.gov",

    handbookUrl: "https://www.kentuckystatepolice.ky.gov/driver-testing",
    handbookLanguages: ["English", "Spanish"],
    officialPracticeTestAvailable: false,

    minimumPermitAge: "15",
    parentConsentRequired: true,
    parentConsentMaxAge: 18,

    testQuestionsTeen: 40,
    testQuestionsAdult: 40,
    passingScoreTeen: 32,
    passingScoreAdult: 32,
    passingPercentage: 80,
    separateRoadSignsTest: true,
    roadSignsPassingRequirement: "Must get 8 of 10 road sign questions correct",
    testLanguages: ["English", "Spanish"],
    testLanguageCount: 2,
    onlineTestAvailable: false,
    onlineTestNotes: "Must be taken in person at a Kentucky State Police testing location",

    applicationFee: "$15–$18",
    retestFee: "$12",
    maxAttempts: "Unlimited",
    waitAfterFail: "Next business day",

    permitValidityPeriod: "3 years",
    minHoldingPeriod: "6 months",

    supervisedHoursTotal: 60,
    supervisedHoursNight: 10,
    supervisorMinAge: 21,
    drivingLogRequired: true,

    driverEdRequired: true,
    driverEdRequiredForAges: "Under 18 (4-hour GDL course required)",
    driverEdClassroomHours: 4,
    onlineDriverEdAccepted: true,

    gdlNighttimeCurfew: "Midnight-6am",
    gdlPassengerRestriction: "Max 1 unrelated passenger under 20",
    gdlCellPhoneRestriction: "All cell phone use prohibited",

    appointmentUrl: "https://www.kentuckystatepolice.ky.gov/driver-testing",
    appointmentRequired: false,

    permitApplicationUrl: "https://drive.ky.gov/Drivers/Pages/GDLP.aspx",

    lastVerified: "July 2026",
    sources: [
      "https://drive.ky.gov/Drivers/Pages/GDLP.aspx",
      "https://www.kentuckystatepolice.ky.gov/driver-testing",
      "https://www.drivinglaws.org/teen/kyteen.php",
    ],
  },

  illinois: {
    departmentName: "Secretary of State",
    departmentCode: "SOS",
    officialWebsite: "https://www.ilsos.gov",

    handbookUrl: "https://www.ilsos.gov/content/dam/publications/pdf_publications/dsd_a112.pdf",
    handbookLanguages: ["English", "Spanish", "Polish", "Chinese", "Korean"],
    officialPracticeTestAvailable: true,

    minimumPermitAge: "15",
    parentConsentRequired: true,
    parentConsentMaxAge: 18,

    testQuestionsTeen: 35,
    testQuestionsAdult: 35,
    passingScoreTeen: 28,
    passingScoreAdult: 28,
    passingPercentage: 80,
    separateRoadSignsTest: false,
    roadSignsPassingRequirement: "15 sign identification questions included in main test",
    testLanguages: ["English", "Spanish", "Polish", "Chinese", "Korean", "and others"],
    testLanguageCount: 12,
    onlineTestAvailable: false,
    onlineTestNotes: "Must be taken in person at a Secretary of State facility",

    applicationFee: "$20",
    maxAttempts: "Unlimited",
    waitAfterFail: "1 day",

    permitValidityPeriod: "2 years",
    minHoldingPeriod: "9 months",

    supervisedHoursTotal: 50,
    supervisedHoursNight: 10,
    supervisorMinAge: 21,
    drivingLogRequired: true,

    driverEdRequired: true,
    driverEdRequiredForAges: "Under 17 years 3 months",
    driverEdClassroomHours: 30,
    driverEdBehindWheelHours: 6,
    onlineDriverEdAccepted: false,

    gdlNighttimeCurfew: "Sun-Thu 10pm-6am, Fri-Sat 11pm-6am",
    gdlPassengerRestriction: "Max 1 passenger under 20 (first 12 months, except family)",
    gdlCellPhoneRestriction: "All cell phone use prohibited (under 19)",

    appointmentUrl: "https://www.ilsos.gov/facilities/facilitylist.html",
    appointmentRequired: false,

    permitApplicationUrl: "https://www.ilsos.gov/departments/drivers/driver-education/instructpermit.html",

    lastVerified: "July 2026",
    sources: [
      "https://www.ilsos.gov/departments/drivers/driver-education/instructpermit.html",
      "https://www.ilsos.gov/departments/drivers/teen-driver-safety/gdl.html",
      "https://www.ilsos.gov/content/dam/publications/pdf_publications/dsd_a112.pdf",
    ],
  },

  virginia: {
    departmentName: "Department of Motor Vehicles",
    departmentCode: "Real Estate",
    officialWebsite: "https://www.real-estate.virginia.gov",

    handbookUrl: "https://www.real-estate.virginia.gov/sites/default/files/forms/real-estate39.pdf",
    handbookLanguages: ["English", "Spanish"],
    officialPracticeTestAvailable: true,

    minimumPermitAge: "15.5",
    parentConsentRequired: true,
    parentConsentMaxAge: 18,

    testQuestionsTeen: 35,
    testQuestionsAdult: 35,
    passingScoreTeen: 30,
    passingScoreAdult: 30,
    passingPercentage: 80,
    separateRoadSignsTest: true,
    roadSignsPassingRequirement: "Must get all 10 road sign questions correct (100%)",
    testLanguages: ["English", "Spanish", "and 22 additional languages"],
    testLanguageCount: 24,
    onlineTestAvailable: false,
    onlineTestNotes: "Must be taken in person at a Real Estate customer service center",

    applicationFee: "$3",
    maxAttempts: 3,
    waitAfterFail: "15 days (under 18) / 1 day (18+)",

    permitValidityPeriod: "Until 20th birthday (teens)",
    minHoldingPeriod: "9 months (under 18) / 60 days (18+)",

    supervisedHoursTotal: 45,
    supervisedHoursNight: 15,
    supervisorMinAge: 21,
    drivingLogRequired: true,

    driverEdRequired: true,
    driverEdRequiredForAges: "Under 18",
    driverEdClassroomHours: 30,
    driverEdBehindWheelHours: 7,
    onlineDriverEdAccepted: true,

    gdlNighttimeCurfew: "Midnight-4am",
    gdlPassengerRestriction: "Max 1 passenger under 21 (first year, except family)",
    gdlCellPhoneRestriction: "All handheld phone use prohibited",

    appointmentUrl: "https://www.real-estate.virginia.gov/appointments",
    appointmentRequired: false,

    permitApplicationUrl: "https://www.real-estate.virginia.gov/licenses-ids/learners/apply",

    lastVerified: "July 2026",
    sources: [
      "https://www.real-estate.virginia.gov/licenses-ids/learners/apply",
      "https://www.real-estate.virginia.gov/licenses-ids/exams/know-exam",
      "https://www.real-estate.virginia.gov/sites/default/files/forms/real-estate39.pdf",
    ],
  },

  nebraska: {
    departmentName: "Department of Motor Vehicles",
    departmentCode: "Real Estate",
    officialWebsite: "https://real-estate.nebraska.gov",

    handbookUrl: "https://real-estate.nebraska.gov/manuals",
    handbookLanguages: ["English", "Spanish"],
    officialPracticeTestAvailable: true,

    minimumPermitAge: "15",
    parentConsentRequired: true,
    parentConsentMaxAge: 18,

    testQuestionsTeen: 25,
    testQuestionsAdult: 25,
    passingScoreTeen: 20,
    passingScoreAdult: 20,
    passingPercentage: 80,
    separateRoadSignsTest: false,
    testLanguages: ["English", "Spanish"],
    testLanguageCount: 2,
    onlineTestAvailable: false,
    onlineTestNotes: "Must be taken in person at a Driver Licensing Office",

    applicationFee: "$13",
    retestFee: "Varies",
    maxAttempts: "Unlimited (special rules after 3 and 6 failures)",
    waitAfterFail: "Next business day (7 days after 3 failures, 90 days or driver's ed after 6)",

    permitValidityPeriod: "1 year",
    minHoldingPeriod: "6 months",

    supervisedHoursTotal: 50,
    supervisedHoursNight: 10,
    supervisorMinAge: 21,
    drivingLogRequired: true,

    driverEdRequired: false,
    driverEdRequiredForAges: "Optional (waives 50-hour requirement and written/road tests)",
    driverEdClassroomHours: 20,
    driverEdBehindWheelHours: 6,
    onlineDriverEdAccepted: false,

    gdlNighttimeCurfew: "Midnight-6am",
    gdlPassengerRestriction: "Max 1 non-family passenger under 19 (first 6 months)",
    gdlCellPhoneRestriction: "All cell phone use prohibited",

    appointmentUrl: "https://real-estate.nebraska.gov/locations",
    appointmentRequired: false,

    permitApplicationUrl: "https://real-estate.nebraska.gov/dl/learners-permit",

    lastVerified: "July 2026",
    sources: [
      "https://real-estate.nebraska.gov/dl/learners-permit",
      "https://real-estate.nebraska.gov/dl/overview-graduated-drivers-licensing",
      "https://real-estate.nebraska.gov/manuals",
    ],
  },

  arkansas: {
    departmentName: "Department of Finance and Administration",
    departmentCode: "DFA",
    officialWebsite: "https://www.dfa.arkansas.gov",

    handbookUrl: "https://dps.arkansas.gov/wp-content/uploads/Arkansas-DL-Manual-English.pdf",
    handbookLanguages: ["English", "Spanish"],
    officialPracticeTestAvailable: true,

    minimumPermitAge: "14",
    parentConsentRequired: true,
    parentConsentMaxAge: 18,

    testQuestionsTeen: 25,
    testQuestionsAdult: 25,
    passingScoreTeen: 20,
    passingScoreAdult: 20,
    passingPercentage: 80,
    separateRoadSignsTest: false,
    testLanguages: ["English", "Spanish"],
    testLanguageCount: 2,
    onlineTestAvailable: false,
    onlineTestNotes: "Must be taken in person at a DFA Revenue Office",

    applicationFee: "$40",
    retestFee: "$5",
    maxAttempts: "3 within 90 days",
    waitAfterFail: "5 calendar days",

    permitValidityPeriod: "1 year",
    minHoldingPeriod: "6 months",

    supervisedHoursTotal: 0,
    supervisedHoursNight: 0,
    supervisorMinAge: 21,
    drivingLogRequired: false,

    driverEdRequired: false,
    driverEdRequiredForAges: "Not required but recommended",
    onlineDriverEdAccepted: true,

    gdlNighttimeCurfew: "11pm–4am",
    gdlPassengerRestriction: "No more than 1 unrelated passenger under 21",
    gdlCellPhoneRestriction: "All cell phone use prohibited for under 18",

    appointmentUrl: "https://www.dfa.arkansas.gov/online-service/schedule-or-find-an-appointment/",
    appointmentRequired: false,

    permitApplicationUrl: "https://www.dfa.arkansas.gov/office/driver-services/licenses-ids-permits/graduated-licenses/learners-and-intermediate-license/",

    lastVerified: "July 2026",
    sources: [
      "https://www.dfa.arkansas.gov/driver-services/drivers-license-faqs",
      "https://dps.arkansas.gov/law-enforcement/arkansas-state-police/services-programs/driver-examination/",
      "https://dps.arkansas.gov/wp-content/uploads/Arkansas-DL-Manual-English.pdf",
    ],
  },

  tennessee: {
    departmentName: "Department of Safety and Homeland Security",
    departmentCode: "DOS",
    officialWebsite: "https://www.tn.gov/safety",

    handbookUrl: "https://www.tn.gov/safety/driver-services/classd/teengdl.html",
    handbookLanguages: ["English", "Spanish"],
    officialPracticeTestAvailable: false,

    minimumPermitAge: "15",
    parentConsentRequired: true,
    parentConsentMaxAge: 18,

    testQuestionsTeen: 30,
    testQuestionsAdult: 30,
    passingScoreTeen: 24,
    passingScoreAdult: 24,
    passingPercentage: 80,
    separateRoadSignsTest: false,
    testLanguages: ["English", "Spanish"],
    testLanguageCount: 2,
    onlineTestAvailable: true,
    onlineTestNotes: "Ages 15-17 only, parent/guardian must proctor via Tennessee Proctor ID app",

    applicationFee: "$10.50",
    retestFee: "No additional fee",
    maxAttempts: "2 online, then must test in person",
    waitAfterFail: "24 hours (online) / 7 days (in person)",

    permitValidityPeriod: "Until 18th birthday",
    minHoldingPeriod: "180 days",

    supervisedHoursTotal: 50,
    supervisedHoursNight: 10,
    supervisorMinAge: 21,
    drivingLogRequired: true,

    driverEdRequired: false,
    driverEdRequiredForAges: "Not required (recommended)",
    onlineDriverEdAccepted: false,

    gdlNighttimeCurfew: "10pm-6am (Level 1), 11pm-6am (Level 2)",
    gdlPassengerRestriction: "No more than 1 passenger (Level 2, except siblings with written permission)",
    gdlCellPhoneRestriction: "All cell phone use prohibited (Class C misdemeanor)",

    appointmentUrl: "https://www.tn.gov/safety/driver-services/locations.html",
    appointmentRequired: false,

    permitApplicationUrl: "https://www.tn.gov/safety/driver-services/classd/teengdl.html",

    lastVerified: "July 2026",
    sources: [
      "https://www.tn.gov/safety/driver-services/classd/teengdl.html",
      "https://www.tn.gov/safety/driver-services/classd/new-drivers.html",
      "https://www.tn.gov/safety/driver-services/helpful-information/fees.html",
    ],
  },

  oregon: {
    departmentName: "Driver and Motor Vehicle Services",
    departmentCode: "ODOT Real Estate",
    officialWebsite: "https://www.oregon.gov/odot/real-estate",

    handbookUrl: "https://www.oregon.gov/odot/forms/real-estate/37.pdf",
    handbookLanguages: ["English", "Spanish", "Arabic", "Chinese", "Japanese", "Korean", "Russian", "Vietnamese"],
    officialPracticeTestAvailable: false,

    minimumPermitAge: "15",
    parentConsentRequired: true,
    parentConsentMaxAge: 18,

    testQuestionsTeen: 35,
    testQuestionsAdult: 35,
    passingScoreTeen: 28,
    passingScoreAdult: 28,
    passingPercentage: 80,
    separateRoadSignsTest: false,
    testLanguages: ["English", "Spanish", "Arabic", "Chinese", "Japanese", "Korean", "Russian", "Vietnamese"],
    testLanguageCount: 8,
    onlineTestAvailable: true,
    onlineTestNotes: "Desktop/laptop with webcam required, proctor needed for under 18, max 4 online attempts",

    applicationFee: "$34.50",
    retestFee: "$7",
    maxAttempts: "3 per application",
    waitAfterFail: "Same day (subject to availability)",

    permitValidityPeriod: "2 years",
    minHoldingPeriod: "6 months",

    supervisedHoursTotal: 50,
    supervisedHoursNight: 0,
    supervisorMinAge: 21,
    drivingLogRequired: false,

    driverEdRequired: false,
    driverEdRequiredForAges: "Optional (reduces supervised hours from 100 to 50)",
    onlineDriverEdAccepted: true,

    gdlNighttimeCurfew: "Midnight-5am (first 12 months or until 18)",
    gdlPassengerRestriction: "No passengers under 20 first 6 months, max 3 under 20 next 6 months (except family)",
    gdlCellPhoneRestriction: "Complete ban on all mobile devices including hands-free",

    appointmentUrl: "https://real-estate2u.oregon.gov",
    appointmentRequired: true,

    permitApplicationUrl: "https://www.oregon.gov/odot/real-estate/teen/pages/permit.aspx",

    lastVerified: "July 2026",
    sources: [
      "https://www.oregon.gov/odot/real-estate/teen/pages/permit.aspx",
      "https://www.oregon.gov/odot/real-estate/pages/online_manual/testing.aspx",
      "https://www.oregon.gov/odot/real-estate/pages/online_services/online_knowledge_testing.aspx",
    ],
  },

  "new-jersey": {
    departmentName: "Motor Vehicle Commission",
    departmentCode: "MVC",
    officialWebsite: "https://www.nj.gov/mvc",

    handbookUrl: "https://www.nj.gov/mvc/license/knowledge.htm",
    handbookLanguages: ["English", "Spanish", "and additional languages"],
    officialPracticeTestAvailable: true,

    minimumPermitAge: "16",
    parentConsentRequired: true,
    parentConsentMaxAge: 18,

    testQuestionsTeen: 50,
    testQuestionsAdult: 50,
    passingScoreTeen: 40,
    passingScoreAdult: 40,
    passingPercentage: 80,
    separateRoadSignsTest: false,
    testLanguages: ["English", "Spanish", "and additional languages"],
    testLanguageCount: 10,
    onlineTestAvailable: false,
    onlineTestNotes: "Must be taken in person at an MVC agency",

    applicationFee: "$24",
    maxAttempts: "Unlimited",
    waitAfterFail: "2 weeks",

    permitValidityPeriod: "Until advanced to probationary license",
    minHoldingPeriod: "12 months (6 months with driver ed at age 17+)",

    supervisedHoursTotal: 6,
    supervisedHoursNight: 0,
    supervisorMinAge: 21,
    drivingLogRequired: false,

    driverEdRequired: false,
    driverEdRequiredForAges: "Not required; enables 6-month permit track at age 17+",
    driverEdBehindWheelHours: 6,
    onlineDriverEdAccepted: false,

    gdlNighttimeCurfew: "11pm–5am (starts during permit phase)",
    gdlPassengerRestriction: "No more than 1 passenger under 21 (except immediate family) during permit and probationary phases",
    gdlCellPhoneRestriction: "No handheld or hands-free device use for under 18",

    appointmentUrl: "https://telegov.njportal.com/njmvc",
    appointmentRequired: false,

    permitApplicationUrl: "https://www.nj.gov/mvc/license/teens.htm",

    lastVerified: "July 2026",
    sources: [
      "https://www.nj.gov/mvc/license/teens.htm",
      "https://www.nj.gov/mvc/license/knowledge.htm",
      "https://www.nj.gov/mvc/about/gdl.htm",
    ],
  },

  colorado: {
    departmentName: "Division of Motor Vehicles",
    departmentCode: "CO Real Estate",
    officialWebsite: "https://real-estate.colorado.gov",

    handbookUrl: "https://real-estate.colorado.gov/colorado-driver-handbook",
    handbookLanguages: ["English", "Spanish"],
    officialPracticeTestAvailable: true,

    minimumPermitAge: "15",
    parentConsentRequired: true,
    parentConsentMaxAge: 18,

    testQuestionsTeen: 25,
    testQuestionsAdult: 25,
    passingScoreTeen: 20,
    passingScoreAdult: 20,
    passingPercentage: 80,
    separateRoadSignsTest: false,
    testLanguages: ["English", "Spanish"],
    testLanguageCount: 2,
    onlineTestAvailable: false,
    onlineTestNotes: "Must be taken in person at a Real Estate driver license office; myRealEstate portal available for pre-application only",

    applicationFee: "$17",
    retestFee: "$7",
    maxAttempts: "Unlimited",
    waitAfterFail: "1 day",

    permitValidityPeriod: "3 years",
    minHoldingPeriod: "12 months",

    supervisedHoursTotal: 50,
    supervisedHoursNight: 10,
    supervisorMinAge: 21,
    drivingLogRequired: true,

    driverEdRequired: false,
    driverEdRequiredForAges: "Recommended but not required",
    onlineDriverEdAccepted: true,

    gdlNighttimeCurfew: "Midnight-5am (first 12 months of restricted license)",
    gdlPassengerRestriction: "No non-family passengers under 21 (first 6 months); up to 3 after 6 months",
    gdlCellPhoneRestriction: "No handheld phone use; complete ban for under 18",

    appointmentUrl: "https://real-estate.colorado.gov/scheduling-appointment",
    appointmentRequired: false,

    permitApplicationUrl: "https://real-estate.colorado.gov/driver-licenses-identification-cards/teen-driving",

    lastVerified: "July 2026",
    sources: [
      "https://real-estate.colorado.gov/driver-licenses-identification-cards/teen-driving",
      "https://real-estate.colorado.gov/colorado-driver-handbook",
      "https://real-estate.colorado.gov/driver-licenses-identification-cards/graduated-driver-licensing",
    ],
  },

  "new-mexico": {
    departmentName: "Motor Vehicle Division",
    departmentCode: "NM MVD",
    officialWebsite: "https://www.mvd.newmexico.gov",

    handbookUrl: "https://www.mvd.newmexico.gov/drivers-license/",
    handbookLanguages: ["English", "Spanish"],
    officialPracticeTestAvailable: true,

    minimumPermitAge: "15",
    parentConsentRequired: true,
    parentConsentMaxAge: 18,

    testQuestionsTeen: 25,
    testQuestionsAdult: 25,
    passingScoreTeen: 18,
    passingScoreAdult: 18,
    passingPercentage: 72,
    separateRoadSignsTest: false,
    testLanguages: ["English", "Spanish"],
    testLanguageCount: 2,
    onlineTestAvailable: false,
    onlineTestNotes: "Must be taken in person at an MVD office; myMVD portal available for pre-application only",

    applicationFee: "$18",
    maxAttempts: "Unlimited",
    waitAfterFail: "1 day",

    permitValidityPeriod: "1 year",
    minHoldingPeriod: "6 months",

    supervisedHoursTotal: 50,
    supervisedHoursNight: 10,
    supervisorMinAge: 21,
    drivingLogRequired: true,

    driverEdRequired: false,
    driverEdRequiredForAges: "Recommended; required for early provisional license (under 16.5)",
    driverEdClassroomHours: 30,
    driverEdBehindWheelHours: 6,
    onlineDriverEdAccepted: true,

    gdlNighttimeCurfew: "Midnight-5am (first year of provisional license)",
    gdlPassengerRestriction: "No more than 1 passenger under 21 (first year, except family)",
    gdlCellPhoneRestriction: "No handheld phone use; complete ban for under 18",

    appointmentUrl: "https://www.mvd.newmexico.gov/myMVD/",
    appointmentRequired: false,

    permitApplicationUrl: "https://www.mvd.newmexico.gov/drivers-license/get-an-instruction-permit/",

    lastVerified: "July 2026",
    sources: [
      "https://www.mvd.newmexico.gov/drivers-license/get-an-instruction-permit/",
      "https://www.mvd.newmexico.gov/drivers-license/teen-driving/",
      "https://www.mvd.newmexico.gov/drivers-license/",
    ],
  },

  utah: {
    departmentName: "Driver License Division",
    departmentCode: "DLD",
    officialWebsite: "https://dld.utah.gov",

    handbookUrl: "https://dld.utah.gov/manuals/",
    handbookLanguages: ["English", "Spanish"],
    officialPracticeTestAvailable: true,

    minimumPermitAge: "15",
    parentConsentRequired: true,
    parentConsentMaxAge: 18,

    testQuestionsTeen: 50,
    testQuestionsAdult: 50,
    passingScoreTeen: 40,
    passingScoreAdult: 40,
    passingPercentage: 80,
    separateRoadSignsTest: false,
    testLanguages: ["English", "Spanish"],
    testLanguageCount: 2,
    onlineTestAvailable: false,
    onlineTestNotes: "Must be taken in person at a DLD office",

    applicationFee: "$44",
    maxAttempts: 3,
    waitAfterFail: "6 days",

    permitValidityPeriod: "1 year",
    minHoldingPeriod: "6 months",

    supervisedHoursTotal: 40,
    supervisedHoursNight: 10,
    supervisorMinAge: 21,
    drivingLogRequired: true,

    driverEdRequired: true,
    driverEdRequiredForAges: "Under 19 (before licensing)",
    driverEdClassroomHours: 30,
    driverEdBehindWheelHours: 6,
    onlineDriverEdAccepted: true,

    gdlNighttimeCurfew: "Midnight-6am (first 6 months of provisional license)",
    gdlPassengerRestriction: "No more than 1 passenger under 21 (first 6 months, except family)",
    gdlCellPhoneRestriction: "No handheld phone use while driving",

    appointmentUrl: "https://dld.utah.gov/services/",
    appointmentRequired: true,

    permitApplicationUrl: "https://dld.utah.gov/drivers-license/getting-a-drivers-license/new-driver/",

    lastVerified: "July 2026",
    sources: [
      "https://dld.utah.gov/drivers-license/getting-a-drivers-license/new-driver/",
      "https://dld.utah.gov/drivers-license/teen-drivers/",
      "https://dld.utah.gov/manuals/",
    ],
  },

  indiana: {
    departmentName: "Bureau of Motor Vehicles",
    departmentCode: "BMV",
    officialWebsite: "https://www.in.gov/bmv/",

    handbookUrl: "https://www.in.gov/bmv/driver-services/driver-manuals/",
    handbookLanguages: ["English", "Spanish"],
    officialPracticeTestAvailable: false,

    minimumPermitAge: "15",
    parentConsentRequired: true,
    parentConsentMaxAge: 18,

    testQuestionsTeen: 34,
    testQuestionsAdult: 34,
    passingScoreTeen: 27,
    passingScoreAdult: 27,
    passingPercentage: 79,
    separateRoadSignsTest: true,
    roadSignsPassingRequirement: "Must identify at least 14 of 16 road signs correctly",
    testLanguages: ["English", "Spanish", "and additional languages"],
    testLanguageCount: 6,
    onlineTestAvailable: false,
    onlineTestNotes: "Must be taken in person at a BMV branch",

    applicationFee: "$14",
    maxAttempts: "Unlimited",
    waitAfterFail: "1 day",

    permitValidityPeriod: "Until 18th birthday (teens) / 2 years (adults)",
    minHoldingPeriod: "180 days",

    supervisedHoursTotal: 50,
    supervisedHoursNight: 10,
    supervisorMinAge: 25,
    drivingLogRequired: true,

    driverEdRequired: true,
    driverEdRequiredForAges: "Under 18",
    driverEdClassroomHours: 30,
    driverEdBehindWheelHours: 6,
    onlineDriverEdAccepted: true,

    gdlNighttimeCurfew: "10pm-5am (first year of probationary), midnight-5am (second year)",
    gdlPassengerRestriction: "No more than 1 non-family passenger under 25 (first year of probationary)",
    gdlCellPhoneRestriction: "All cell phone use prohibited for under 18",

    appointmentUrl: "https://www.in.gov/bmv/locations/",
    appointmentRequired: false,

    permitApplicationUrl: "https://www.in.gov/bmv/driver-services/learners-permits/",

    lastVerified: "July 2026",
    sources: [
      "https://www.in.gov/bmv/driver-services/learners-permits/",
      "https://www.in.gov/bmv/driver-services/driver-manuals/",
      "https://www.in.gov/bmv/driver-services/probationary-license/",
    ],
  },

  minnesota: {
    departmentName: "Driver and Vehicle Services",
    departmentCode: "DVS",
    officialWebsite: "https://dps.mn.gov/divisions/dvs",

    handbookUrl: "https://dps.mn.gov/divisions/dvs/forms-documents/Documents/Minnesota_Drivers_Manual.pdf",
    handbookLanguages: ["English", "Spanish", "Somali", "Hmong"],
    officialPracticeTestAvailable: true,

    minimumPermitAge: "15",
    parentConsentRequired: true,
    parentConsentMaxAge: 18,

    testQuestionsTeen: 40,
    testQuestionsAdult: 40,
    passingScoreTeen: 32,
    passingScoreAdult: 32,
    passingPercentage: 80,
    separateRoadSignsTest: false,
    testLanguages: ["English", "Spanish", "Somali", "Hmong", "and additional languages"],
    testLanguageCount: 8,
    onlineTestAvailable: false,
    onlineTestNotes: "Must be taken in person at a DVS exam station",

    applicationFee: "$14.25",
    retestFee: "$4.25",
    maxAttempts: "Unlimited",
    waitAfterFail: "1 day",

    permitValidityPeriod: "2 years",
    minHoldingPeriod: "6 months",

    supervisedHoursTotal: 50,
    supervisedHoursNight: 15,
    supervisorMinAge: 21,
    drivingLogRequired: true,

    driverEdRequired: true,
    driverEdRequiredForAges: "Under 18",
    driverEdClassroomHours: 30,
    driverEdBehindWheelHours: 6,
    onlineDriverEdAccepted: false,

    gdlNighttimeCurfew: "Midnight-5am (provisional license, under 18)",
    gdlPassengerRestriction: "No more than 1 non-family passenger under 20 (first 6 months of provisional)",
    gdlCellPhoneRestriction: "All cell phone use prohibited for under 18",

    appointmentUrl: "https://dps.mn.gov/divisions/dvs/Pages/dvs-content-detail.aspx?PageID=608",
    appointmentRequired: false,

    permitApplicationUrl: "https://dps.mn.gov/divisions/dvs/Pages/dvs-content-detail.aspx?PageID=613",

    lastVerified: "July 2026",
    sources: [
      "https://dps.mn.gov/divisions/dvs/Pages/dvs-content-detail.aspx?PageID=613",
      "https://dps.mn.gov/divisions/dvs/Pages/dvs-content-detail.aspx?PageID=608",
      "https://dps.mn.gov/divisions/dvs/forms-documents/Documents/Minnesota_Drivers_Manual.pdf",
    ],
  },

  georgia: {
    departmentName: "Department of Driver Services",
    departmentCode: "DDS",
    officialWebsite: "https://dds.georgia.gov",

    handbookUrl: "https://dds.georgia.gov/georgia-drivers-manual",
    handbookLanguages: ["English", "Spanish"],
    officialPracticeTestAvailable: false,

    minimumPermitAge: "15",
    parentConsentRequired: true,
    parentConsentMaxAge: 18,

    testQuestionsTeen: 40,
    testQuestionsAdult: 40,
    passingScoreTeen: 30,
    passingScoreAdult: 30,
    passingPercentage: 75,
    separateRoadSignsTest: false,
    testLanguages: ["English", "Spanish", "and additional languages"],
    testLanguageCount: 8,
    onlineTestAvailable: false,
    onlineTestNotes: "Must be taken in person at a DDS Customer Service Center",

    applicationFee: "$10",
    maxAttempts: "Unlimited",
    waitAfterFail: "Next business day",

    permitValidityPeriod: "2 years",
    minHoldingPeriod: "12 months (or 6 months with driver ed completion at 16+)",

    supervisedHoursTotal: 40,
    supervisedHoursNight: 6,
    supervisorMinAge: 21,
    drivingLogRequired: true,

    driverEdRequired: true,
    driverEdRequiredForAges: "Under 18 (Joshua's Law)",
    driverEdClassroomHours: 30,
    driverEdBehindWheelHours: 6,
    onlineDriverEdAccepted: true,

    gdlNighttimeCurfew: "Midnight-5am (Class D provisional license)",
    gdlPassengerRestriction: "No more than 1 non-family passenger under 21 (first 6 months of Class D)",
    gdlCellPhoneRestriction: "All cell phone use prohibited for Class D holders",

    appointmentUrl: "https://online.dds.georgia.gov/Appointer/Appointment",
    appointmentRequired: true,

    permitApplicationUrl: "https://dds.georgia.gov/getting-started-teens",

    lastVerified: "July 2026",
    sources: [
      "https://dds.georgia.gov/getting-started-teens",
      "https://dds.georgia.gov/joshuas-law",
      "https://dds.georgia.gov/georgia-drivers-manual",
    ],
  },

  louisiana: {
    departmentName: "Office of Motor Vehicles",
    departmentCode: "OMV",
    officialWebsite: "https://omv.louisiana.gov",

    handbookUrl: "https://omv.louisiana.gov/page/louisiana-drivers-guide",
    handbookLanguages: ["English", "Spanish"],
    officialPracticeTestAvailable: false,

    minimumPermitAge: "15",
    parentConsentRequired: true,
    parentConsentMaxAge: 18,

    testQuestionsTeen: 40,
    testQuestionsAdult: 40,
    passingScoreTeen: 32,
    passingScoreAdult: 32,
    passingPercentage: 80,
    separateRoadSignsTest: false,
    testLanguages: ["English", "Spanish"],
    testLanguageCount: 2,
    onlineTestAvailable: false,
    onlineTestNotes: "Must be taken in person at a Louisiana OMV office",

    applicationFee: "$18",
    retestFee: "$3",
    maxAttempts: "Unlimited",
    waitAfterFail: "7 days",

    permitValidityPeriod: "180 days",
    minHoldingPeriod: "180 days",

    supervisedHoursTotal: 50,
    supervisedHoursNight: 15,
    supervisorMinAge: 21,
    drivingLogRequired: true,

    driverEdRequired: true,
    driverEdRequiredForAges: "Under 17",
    driverEdClassroomHours: 38,
    driverEdBehindWheelHours: 8,
    onlineDriverEdAccepted: false,

    gdlNighttimeCurfew: "11pm-5am (provisional license holders under 17)",
    gdlPassengerRestriction: "No more than 1 non-family passenger under 21 (first 6 months of provisional)",
    gdlCellPhoneRestriction: "All cell phone use prohibited for under 18",

    appointmentUrl: "https://omv.louisiana.gov/page/office-locations",
    appointmentRequired: false,

    permitApplicationUrl: "https://omv.louisiana.gov/page/learners-permit",

    lastVerified: "July 2026",
    sources: [
      "https://omv.louisiana.gov/page/learners-permit",
      "https://omv.louisiana.gov/page/louisiana-drivers-guide",
      "https://omv.louisiana.gov/page/graduated-licensing",
    ],
  },

  hawaii: {
    departmentName: "County Driver Licensing",
    departmentCode: "County Real Estate",
    officialWebsite: "https://hidot.hawaii.gov",

    handbookUrl: "https://hidot.hawaii.gov/highways/roadway-engineering/traffic-engineering/publications/",
    handbookLanguages: ["English"],
    officialPracticeTestAvailable: false,

    minimumPermitAge: "15.5",
    parentConsentRequired: true,
    parentConsentMaxAge: 18,

    testQuestionsTeen: 30,
    testQuestionsAdult: 30,
    passingScoreTeen: 24,
    passingScoreAdult: 24,
    passingPercentage: 80,
    separateRoadSignsTest: false,
    testLanguages: ["English"],
    testLanguageCount: 1,
    onlineTestAvailable: false,
    onlineTestNotes: "Must be taken in person at your county's driver licensing office",

    applicationFee: "$9",
    retestFee: "$2",
    maxAttempts: "Unlimited",
    waitAfterFail: "30 days",

    permitValidityPeriod: "2 years",
    minHoldingPeriod: "6 months",

    supervisedHoursTotal: 50,
    supervisedHoursNight: 10,
    supervisorMinAge: 21,
    drivingLogRequired: false,

    driverEdRequired: false,
    driverEdRequiredForAges: "Not required but strongly recommended",
    driverEdClassroomHours: 30,
    driverEdBehindWheelHours: 6,
    onlineDriverEdAccepted: false,

    gdlNighttimeCurfew: "11pm-5am (provisional license, under 18)",
    gdlPassengerRestriction: "No passengers under 18 for first 6 months (except immediate family)",
    gdlCellPhoneRestriction: "All electronic device use prohibited while driving",

    appointmentUrl: "https://www.honolulu.gov/csd/drivinglicense",
    appointmentRequired: false,

    permitApplicationUrl: "https://www.honolulu.gov/csd/drivinglicense",

    lastVerified: "July 2026",
    sources: [
      "https://www.honolulu.gov/csd/drivinglicense",
      "https://hidot.hawaii.gov/highways/roadway-engineering/traffic-engineering/publications/",
      "https://www.ehawaii.gov/real-estate/",
    ],
  },

  delaware: {
    departmentName: "Division of Motor Vehicles",
    departmentCode: "Real Estate",
    officialWebsite: "https://www.real-estate.de.gov",

    handbookUrl: "https://www.real-estate.de.gov/services/driver_services/driver_manual.shtml",
    handbookLanguages: ["English", "Spanish"],
    officialPracticeTestAvailable: false,

    minimumPermitAge: "16",
    parentConsentRequired: true,
    parentConsentMaxAge: 18,

    testQuestionsTeen: 30,
    testQuestionsAdult: 30,
    passingScoreTeen: 24,
    passingScoreAdult: 24,
    passingPercentage: 80,
    separateRoadSignsTest: false,
    testLanguages: ["English", "Spanish"],
    testLanguageCount: 2,
    onlineTestAvailable: false,

    applicationFee: "$40",
    maxAttempts: 3,
    waitAfterFail: "1 day",

    permitValidityPeriod: "1 year",
    minHoldingPeriod: "6 months",

    supervisedHoursTotal: 50,
    supervisedHoursNight: 10,
    supervisorMinAge: 25,
    drivingLogRequired: true,

    driverEdRequired: false,
    onlineDriverEdAccepted: true,

    gdlNighttimeCurfew: "10pm–6am (under 18, first year)",
    gdlPassengerRestriction: "No more than 1 non-family passenger under 18 (first year)",
    gdlCellPhoneRestriction: "No handheld phone use",

    appointmentUrl: "https://www.real-estate.de.gov/services/driver_services/testing_centers.shtml",
    appointmentRequired: false,

    permitApplicationUrl: "https://www.real-estate.de.gov/services/driver_services/first_license.shtml",

    lastVerified: "July 2026",
    sources: [
      "https://www.real-estate.de.gov/services/driver_services/first_license.shtml",
      "https://www.real-estate.de.gov/services/driver_services/driver_manual.shtml",
      "https://deldot.gov/Programs/traffic/downloads/manuals_guides/Delaware_Driver_Manual.pdf",
    ],
  },

  alaska: {
    departmentName: "Division of Motor Vehicles",
    departmentCode: "Real Estate",
    officialWebsite: "https://doa.alaska.gov/real-estate/",

    handbookUrl: "https://doa.alaska.gov/real-estate/akuse/drivermanual.htm",
    handbookLanguages: ["English"],
    officialPracticeTestAvailable: false,

    minimumPermitAge: "14",
    parentConsentRequired: true,
    parentConsentMaxAge: 18,

    testQuestionsTeen: 20,
    testQuestionsAdult: 20,
    passingScoreTeen: 16,
    passingScoreAdult: 16,
    passingPercentage: 80,
    separateRoadSignsTest: false,
    testLanguages: ["English"],
    testLanguageCount: 1,
    onlineTestAvailable: false,

    applicationFee: "$15",
    maxAttempts: 3,
    waitAfterFail: "1 day",

    permitValidityPeriod: "2 years",
    minHoldingPeriod: "6 months",

    supervisedHoursTotal: 40,
    supervisedHoursNight: 10,
    supervisorMinAge: 21,
    drivingLogRequired: true,

    driverEdRequired: false,
    onlineDriverEdAccepted: true,

    gdlNighttimeCurfew: "1am–5am (under 18)",
    gdlPassengerRestriction: "No more than 1 non-family minor passenger (first 6 months)",
    gdlCellPhoneRestriction: "No handheld phone use",

    appointmentUrl: "https://doa.alaska.gov/real-estate/offices/",
    appointmentRequired: false,

    permitApplicationUrl: "https://doa.alaska.gov/real-estate/akuse/teenperm.htm",

    lastVerified: "July 2026",
    sources: [
      "https://doa.alaska.gov/real-estate/akuse/teenperm.htm",
      "https://doa.alaska.gov/real-estate/akuse/drivermanual.htm",
    ],
  },

  connecticut: {
    departmentName: "Department of Motor Vehicles",
    departmentCode: "Real Estate",
    officialWebsite: "https://portal.ct.gov/Real Estate",

    handbookUrl: "https://portal.ct.gov/Real Estate/Driver-Education/Driver-Education/Connecticut-Driver-Manual",
    handbookLanguages: ["English", "Spanish"],
    officialPracticeTestAvailable: false,

    minimumPermitAge: "16",
    parentConsentRequired: true,
    parentConsentMaxAge: 18,

    testQuestionsTeen: 25,
    testQuestionsAdult: 25,
    passingScoreTeen: 20,
    passingScoreAdult: 20,
    passingPercentage: 80,
    separateRoadSignsTest: false,
    testLanguages: ["English", "Spanish"],
    testLanguageCount: 2,
    onlineTestAvailable: false,

    applicationFee: "$40",
    maxAttempts: 3,
    waitAfterFail: "1 day",

    permitValidityPeriod: "2 years",
    minHoldingPeriod: "6 months",

    supervisedHoursTotal: 40,
    supervisedHoursNight: 10,
    supervisorMinAge: 20,
    drivingLogRequired: true,

    driverEdRequired: true,
    driverEdRequiredForAges: "Under 18",
    driverEdClassroomHours: 35,
    driverEdBehindWheelHours: 8,
    onlineDriverEdAccepted: true,

    gdlNighttimeCurfew: "11pm–5am (under 18, first year with license)",
    gdlPassengerRestriction: "No more than 1 non-family passenger under 18 (first year)",
    gdlCellPhoneRestriction: "No handheld phone use",

    appointmentUrl: "https://portal.ct.gov/Real Estate/Offices/Offices/Find-a-Real Estate-Office",
    appointmentRequired: false,

    permitApplicationUrl: "https://portal.ct.gov/Real Estate/Driver-License/Driver-License/Getting-Your-First-License-in-Connecticut",

    lastVerified: "July 2026",
    sources: [
      "https://portal.ct.gov/Real Estate/Driver-License/Driver-License/Getting-Your-First-License-in-Connecticut",
      "https://portal.ct.gov/Real Estate/Driver-Education/Driver-Education/Connecticut-Driver-Manual",
    ],
  },

  maine: {
    departmentName: "Bureau of Motor Vehicles",
    departmentCode: "BMV",
    officialWebsite: "https://www.maine.gov/sos/bmv/",

    handbookUrl: "https://www.maine.gov/sos/bmv/licenses/manuals.html",
    handbookLanguages: ["English"],
    officialPracticeTestAvailable: false,

    minimumPermitAge: "15",
    parentConsentRequired: true,
    parentConsentMaxAge: 18,

    testQuestionsTeen: 30,
    testQuestionsAdult: 30,
    passingScoreTeen: 24,
    passingScoreAdult: 24,
    passingPercentage: 80,
    separateRoadSignsTest: false,
    testLanguages: ["English"],
    testLanguageCount: 1,
    onlineTestAvailable: false,

    applicationFee: "$35",
    maxAttempts: 3,
    waitAfterFail: "1 day",

    permitValidityPeriod: "2 years",
    minHoldingPeriod: "9 months",

    supervisedHoursTotal: 70,
    supervisedHoursNight: 10,
    supervisorMinAge: 20,
    drivingLogRequired: true,

    driverEdRequired: true,
    driverEdRequiredForAges: "Under 18",
    driverEdClassroomHours: 30,
    driverEdBehindWheelHours: 10,
    onlineDriverEdAccepted: true,

    gdlNighttimeCurfew: "12am–5am (under 21, first 180 days with license)",
    gdlPassengerRestriction: "No passengers under 20 except immediate family (first 180 days)",
    gdlCellPhoneRestriction: "No handheld phone use",

    appointmentUrl: "https://www.maine.gov/sos/bmv/offices/index.html",
    appointmentRequired: false,

    permitApplicationUrl: "https://www.maine.gov/sos/bmv/licenses/first.html",

    lastVerified: "July 2026",
    sources: [
      "https://www.maine.gov/sos/bmv/licenses/first.html",
      "https://www.maine.gov/sos/bmv/licenses/manuals.html",
    ],
  },

  "rhode-island": {
    departmentName: "Division of Motor Vehicles",
    departmentCode: "RI Real Estate",
    officialWebsite: "https://real-estate.ri.gov",

    handbookUrl: "https://real-estate.ri.gov/licenses-permits-ids/drivers-licenses/driver-s-manual",
    handbookLanguages: ["English", "Spanish"],
    officialPracticeTestAvailable: false,

    minimumPermitAge: "16",
    parentConsentRequired: true,
    parentConsentMaxAge: 18,

    testQuestionsTeen: 25,
    testQuestionsAdult: 25,
    passingScoreTeen: 20,
    passingScoreAdult: 20,
    passingPercentage: 80,
    separateRoadSignsTest: false,
    testLanguages: ["English", "Spanish"],
    testLanguageCount: 2,
    onlineTestAvailable: false,
    onlineTestNotes: "Must be taken in person at a RI Real Estate office",

    applicationFee: "$26.50",
    maxAttempts: "Unlimited",
    waitAfterFail: "1 day",

    permitValidityPeriod: "2 years",
    minHoldingPeriod: "12 months",

    supervisedHoursTotal: 50,
    supervisedHoursNight: 10,
    supervisorMinAge: 21,
    drivingLogRequired: true,

    driverEdRequired: true,
    driverEdRequiredForAges: "Under 18",
    driverEdClassroomHours: 30,
    driverEdBehindWheelHours: 6,
    onlineDriverEdAccepted: false,

    gdlNighttimeCurfew: "1am–5am (Junior Operator's License, under 18)",
    gdlPassengerRestriction: "No passengers under 21 for first 6 months (except family)",
    gdlCellPhoneRestriction: "All cell phone use prohibited for under 18",

    appointmentUrl: "https://real-estate.ri.gov/about-real-estate/locations",
    appointmentRequired: true,

    permitApplicationUrl: "https://real-estate.ri.gov/licenses-permits-ids/drivers-licenses/first-license",

    lastVerified: "July 2026",
    sources: [
      "https://real-estate.ri.gov/licenses-permits-ids/drivers-licenses/first-license",
      "https://real-estate.ri.gov/licenses-permits-ids/drivers-licenses/driver-s-manual",
      "https://real-estate.ri.gov/licenses-permits-ids/drivers-licenses/junior-operators-license",
    ],
  },

  "west-virginia": {
    departmentName: "Division of Motor Vehicles",
    departmentCode: "WV Real Estate",
    officialWebsite: "https://transportation.wv.gov/Real Estate",

    handbookUrl: "https://transportation.wv.gov/Real Estate/Drivers/Pages/WVDriverHandbook.aspx",
    handbookLanguages: ["English"],
    officialPracticeTestAvailable: false,

    minimumPermitAge: "15",
    parentConsentRequired: true,
    parentConsentMaxAge: 18,

    testQuestionsTeen: 25,
    testQuestionsAdult: 25,
    passingScoreTeen: 19,
    passingScoreAdult: 19,
    passingPercentage: 76,
    separateRoadSignsTest: false,
    testLanguages: ["English"],
    testLanguageCount: 1,
    onlineTestAvailable: false,
    onlineTestNotes: "Must be taken in person at a WV Real Estate office",

    applicationFee: "$5",
    maxAttempts: "Unlimited",
    waitAfterFail: "1 day",

    permitValidityPeriod: "1 year",
    minHoldingPeriod: "6 months",

    supervisedHoursTotal: 30,
    supervisedHoursNight: 10,
    supervisorMinAge: 21,
    drivingLogRequired: true,

    driverEdRequired: false,
    driverEdRequiredForAges: "Not required but recommended",
    onlineDriverEdAccepted: true,

    gdlNighttimeCurfew: "10pm–5am (Class D restricted license, under 18)",
    gdlPassengerRestriction: "No more than 1 non-family passenger under 18 (first year of Class D)",
    gdlCellPhoneRestriction: "All cell phone use prohibited for under 18",

    appointmentUrl: "https://transportation.wv.gov/Real Estate/Offices/Pages/default.aspx",
    appointmentRequired: false,

    permitApplicationUrl: "https://transportation.wv.gov/Real Estate/Drivers/Pages/LearnerPermit.aspx",

    lastVerified: "July 2026",
    sources: [
      "https://transportation.wv.gov/Real Estate/Drivers/Pages/LearnerPermit.aspx",
      "https://transportation.wv.gov/Real Estate/Drivers/Pages/WVDriverHandbook.aspx",
      "https://transportation.wv.gov/Real Estate/Drivers/Pages/GraduatedDriverLicensing.aspx",
    ],
  },

  "new-hampshire": {
    departmentName: "Division of Motor Vehicles",
    departmentCode: "NH Real Estate",
    officialWebsite: "https://www.nh.gov/real-estate",

    handbookUrl: "https://www.nh.gov/real-estate/licenses/first-license/index.htm",
    handbookLanguages: ["English"],
    officialPracticeTestAvailable: false,

    minimumPermitAge: "15.5",
    parentConsentRequired: true,
    parentConsentMaxAge: 18,

    testQuestionsTeen: 40,
    testQuestionsAdult: 40,
    passingScoreTeen: 32,
    passingScoreAdult: 32,
    passingPercentage: 80,
    separateRoadSignsTest: false,
    testLanguages: ["English"],
    testLanguageCount: 1,
    onlineTestAvailable: false,
    onlineTestNotes: "Must be taken in person at a NH Real Estate office",

    applicationFee: "$50",
    maxAttempts: "Unlimited",
    waitAfterFail: "1 day",

    permitValidityPeriod: "2 years",
    minHoldingPeriod: "6 months",

    supervisedHoursTotal: 40,
    supervisedHoursNight: 10,
    supervisorMinAge: 25,
    drivingLogRequired: true,

    driverEdRequired: false,
    driverEdRequiredForAges: "Not required but strongly recommended",
    driverEdClassroomHours: 30,
    driverEdBehindWheelHours: 6,
    onlineDriverEdAccepted: true,

    gdlNighttimeCurfew: "1am–4am (restricted license, under 18)",
    gdlPassengerRestriction: "No more than 1 non-family passenger under 25 (first year of restricted license)",
    gdlCellPhoneRestriction: "No handheld wireless device use for under 18",

    appointmentUrl: "https://www.nh.gov/real-estate/licenses/first-license/index.htm",
    appointmentRequired: false,

    permitApplicationUrl: "https://www.nh.gov/real-estate/licenses/first-license/index.htm",

    lastVerified: "July 2026",
    sources: [
      "https://www.nh.gov/real-estate/licenses/first-license/index.htm",
      "https://www.nh.gov/real-estate/",
    ],
  },

  missouri: {
    departmentName: "Department of Revenue — Motor Vehicle and Driver Licensing",
    departmentCode: "DOR",
    officialWebsite: "https://dor.mo.gov",

    handbookUrl: "https://dor.mo.gov/driver-license/",
    handbookLanguages: ["English", "Spanish"],
    officialPracticeTestAvailable: true,

    minimumPermitAge: "15",
    parentConsentRequired: true,
    parentConsentMaxAge: 18,

    testQuestionsTeen: 25,
    testQuestionsAdult: 25,
    passingScoreTeen: 20,
    passingScoreAdult: 20,
    passingPercentage: 80,
    separateRoadSignsTest: true,
    roadSignsPassingRequirement: "Must identify at least 8 of 10 road signs correctly (80%)",
    testLanguages: ["English", "Spanish"],
    testLanguageCount: 2,
    onlineTestAvailable: true,
    onlineTestNotes: "Available online through the Missouri DOR portal; separate appointment not required",

    applicationFee: "$3.50",
    retestFee: "$3.50",
    maxAttempts: "Unlimited",
    waitAfterFail: "1 day",

    permitValidityPeriod: "1 year",
    minHoldingPeriod: "182 days",

    supervisedHoursTotal: 40,
    supervisedHoursNight: 10,
    supervisorMinAge: 21,
    drivingLogRequired: true,

    driverEdRequired: true,
    driverEdRequiredForAges: "Required for under 16 to advance to intermediate license",
    driverEdClassroomHours: 24,
    driverEdBehindWheelHours: 4,
    onlineDriverEdAccepted: true,

    gdlNighttimeCurfew: "Midnight-5am (intermediate license, exceptions for work/school/emergency)",
    gdlPassengerRestriction: "No more than 1 non-family passenger under 19 (first 6 months of intermediate)",
    gdlCellPhoneRestriction: "No handheld wireless device use for drivers under 21",

    appointmentUrl: "https://dor.mo.gov/driver-license/",
    appointmentRequired: false,

    permitApplicationUrl: "https://dor.mo.gov/driver-license/new-driver/",

    lastVerified: "July 2026",
    sources: [
      "https://dor.mo.gov/driver-license/new-driver/",
      "https://dor.mo.gov/driver-license/",
      "https://dor.mo.gov/driver-license/teen-driver/",
    ],
  },

  montana: {
    departmentName: "Motor Vehicle Division",
    departmentCode: "MVD",
    officialWebsite: "https://dojmt.gov/driving/",

    handbookUrl: "https://dojmt.gov/driving/driver-education/",
    handbookLanguages: ["English"],
    officialPracticeTestAvailable: false,

    minimumPermitAge: "14.5",
    parentConsentRequired: true,
    parentConsentMaxAge: 18,

    testQuestionsTeen: 33,
    testQuestionsAdult: 33,
    passingScoreTeen: 27,
    passingScoreAdult: 27,
    passingPercentage: 82,
    separateRoadSignsTest: false,
    testLanguages: ["English", "Spanish"],
    testLanguageCount: 2,
    onlineTestAvailable: false,

    applicationFee: "$25",
    retestFee: "$12",
    maxAttempts: "Unlimited",
    waitAfterFail: "1 day",

    permitValidityPeriod: "1 year",
    minHoldingPeriod: "6 months",

    supervisedHoursTotal: 50,
    supervisedHoursNight: 10,
    supervisorMinAge: 18,
    drivingLogRequired: true,

    driverEdRequired: false,
    onlineDriverEdAccepted: true,

    gdlNighttimeCurfew: "11pm–5am (first 6 months of restricted license)",
    gdlPassengerRestriction: "No more than 1 non-family passenger under 18 (first 6 months)",
    gdlCellPhoneRestriction: "No cell phone use while driving (under 18)",

    appointmentRequired: false,

    permitApplicationUrl: "https://dojmt.gov/driving/driver-license-information/",

    lastVerified: "July 2026",
    sources: [
      "https://dojmt.gov/driving/driver-license-information/",
      "https://dojmt.gov/driving/driver-education/",
      "https://dojmt.gov/driving/",
    ],
  },

  alabama: {
    departmentName: "Law Enforcement Agency — Driver License Division",
    departmentCode: "ALEA",
    officialWebsite: "https://www.alea.gov/dps/driver-license-division",

    handbookUrl: "https://www.alea.gov/dps/driver-license-division/driver-license-study-guide",
    handbookLanguages: ["English"],
    officialPracticeTestAvailable: false,

    minimumPermitAge: "15",
    parentConsentRequired: true,
    parentConsentMaxAge: 18,

    testQuestionsTeen: 30,
    testQuestionsAdult: 30,
    passingScoreTeen: 24,
    passingScoreAdult: 24,
    passingPercentage: 80,
    separateRoadSignsTest: false,
    testLanguages: ["English"],
    testLanguageCount: 1,
    onlineTestAvailable: false,

    applicationFee: "$36.25",
    maxAttempts: 3,
    waitAfterFail: "1 day",

    permitValidityPeriod: "1 year",
    minHoldingPeriod: "6 months",

    supervisedHoursTotal: 30,
    supervisedHoursNight: 10,
    supervisorMinAge: 21,
    drivingLogRequired: true,

    driverEdRequired: false,
    onlineDriverEdAccepted: true,

    gdlNighttimeCurfew: "12am–6am (under 18, first 6 months with restricted license)",
    gdlPassengerRestriction: "No more than 1 non-family passenger under 21 (first 6 months)",
    gdlCellPhoneRestriction: "No handheld phone use",

    appointmentUrl: "https://www.alea.gov/dps/driver-license-division/driver-license-offices",
    appointmentRequired: false,

    permitApplicationUrl: "https://www.alea.gov/dps/driver-license-division/driver-license-types/graduated-driver-license",

    lastVerified: "July 2026",
    sources: [
      "https://www.alea.gov/dps/driver-license-division/driver-license-types/graduated-driver-license",
      "https://www.alea.gov/dps/driver-license-division/driver-license-study-guide",
    ],
  },

  kansas: {
    departmentName: "Division of Vehicles",
    departmentCode: "KS DOV",
    officialWebsite: "https://www.ksrevenue.gov/dovindex.html",

    handbookUrl: "https://www.ksrevenue.gov/pdf/DE-36.pdf",
    handbookLanguages: ["English", "Spanish"],
    officialPracticeTestAvailable: false,

    minimumPermitAge: "14",
    parentConsentRequired: true,
    parentConsentMaxAge: 16,

    testQuestionsTeen: 25,
    testQuestionsAdult: 25,
    passingScoreTeen: 20,
    passingScoreAdult: 20,
    passingPercentage: 80,
    separateRoadSignsTest: false,
    testLanguages: ["English", "Spanish"],
    testLanguageCount: 2,
    onlineTestAvailable: false,

    applicationFee: "$22",
    maxAttempts: 3,
    waitAfterFail: "1 day",

    permitValidityPeriod: "1 year",
    minHoldingPeriod: "1 year (must also be at least 16)",

    supervisedHoursTotal: 50,
    supervisedHoursNight: 10,
    supervisorMinAge: 21,
    drivingLogRequired: true,

    driverEdRequired: true,
    driverEdRequiredForAges: "Required before restricted license (under 16)",
    onlineDriverEdAccepted: true,

    gdlNighttimeCurfew: "9pm–5am (first 6 months); midnight–5am (until age 17)",
    gdlPassengerRestriction: "No passengers under 18 (non-family, first 6 months)",
    gdlCellPhoneRestriction: "No handheld phone use for drivers under 17",

    appointmentUrl: "https://www.ksrevenue.gov/dovoffices.html",
    appointmentRequired: false,

    permitApplicationUrl: "https://www.ksrevenue.gov/dovgdl.html",

    lastVerified: "July 2026",
    sources: [
      "https://www.ksrevenue.gov/dovgdl.html",
      "https://www.ksrevenue.gov/pdf/DE-36.pdf",
      "https://www.ksrevenue.gov/dovfees.html",
    ],
  },

  "south-carolina": {
    departmentName: "Department of Motor Vehicles",
    departmentCode: "SCRealEstate",
    officialWebsite: "https://www.screal-estateonline.com",

    handbookUrl: "https://www.screal-estateonline.com/sites/default/files/documents/SC_Driver_Manual.pdf",
    handbookLanguages: ["English", "Spanish"],
    officialPracticeTestAvailable: false,

    minimumPermitAge: "15",
    parentConsentRequired: true,
    parentConsentMaxAge: 18,

    testQuestionsTeen: 30,
    testQuestionsAdult: 30,
    passingScoreTeen: 24,
    passingScoreAdult: 24,
    passingPercentage: 80,
    separateRoadSignsTest: false,
    testLanguages: ["English", "Spanish"],
    testLanguageCount: 2,
    onlineTestAvailable: false,

    applicationFee: "$2.50",
    retestFee: "$2.50",
    maxAttempts: "Unlimited",
    waitAfterFail: "Next business day",

    permitValidityPeriod: "2 years",
    minHoldingPeriod: "180 days",

    supervisedHoursTotal: 40,
    supervisedHoursNight: 10,
    supervisorMinAge: 21,
    drivingLogRequired: false,

    driverEdRequired: false,
    onlineDriverEdAccepted: true,

    gdlNighttimeCurfew: "Seasonal: 6pm–6am (Oct–Mar) or 8pm–6am (Apr–Sep) — Conditional License",
    gdlPassengerRestriction: "No passengers under 8 years old without a licensed adult (Conditional License)",
    gdlCellPhoneRestriction: "All cell phone use prohibited for drivers under 18",

    appointmentUrl: "https://www.screal-estateonline.com/Home/Locations",
    appointmentRequired: false,

    permitApplicationUrl: "https://www.screal-estateonline.com/Driver-Services/Driver-Licenses/Beginners-Permit",

    lastVerified: "July 2026",
    sources: [
      "https://www.screal-estateonline.com/Driver-Services/Driver-Licenses/Beginners-Permit",
      "https://www.screal-estateonline.com/Driver-Services/Driver-Licenses/Conditional-Drivers-License",
      "https://www.screal-estateonline.com/sites/default/files/documents/SC_Driver_Manual.pdf",
    ],
  },

  "south-dakota": {
    departmentName: "Department of Public Safety — Division of Motor Vehicles",
    departmentCode: "SD DPS",
    officialWebsite: "https://dps.sd.gov",

    handbookUrl: "https://dps.sd.gov/sites/default/files/docs/sddriver.pdf",
    handbookLanguages: ["English"],
    officialPracticeTestAvailable: false,

    minimumPermitAge: "14",
    parentConsentRequired: true,
    parentConsentMaxAge: 18,

    testQuestionsTeen: 25,
    testQuestionsAdult: 25,
    passingScoreTeen: 20,
    passingScoreAdult: 20,
    passingPercentage: 80,
    separateRoadSignsTest: false,
    testLanguages: ["English"],
    testLanguageCount: 1,
    onlineTestAvailable: false,

    applicationFee: "$5",
    retestFee: "$5",
    maxAttempts: "Unlimited",
    waitAfterFail: "Next business day",

    permitValidityPeriod: "1 year",
    minHoldingPeriod: "6 months",

    supervisedHoursTotal: 50,
    supervisedHoursNight: 10,
    supervisorMinAge: 18,
    drivingLogRequired: true,

    driverEdRequired: false,
    driverEdRequiredForAges: "Driver ed allows early advancement to restricted license at 14.5 instead of 15",
    driverEdClassroomHours: 30,
    driverEdBehindWheelHours: 6,
    onlineDriverEdAccepted: false,

    gdlNighttimeCurfew: "10pm–6am (Minor's Restricted License, under 16)",
    gdlPassengerRestriction: "No non-family passengers under 18 first 6 months; then max 1 non-family under 18",
    gdlCellPhoneRestriction: "No handheld phone use for drivers under 18",

    appointmentUrl: "https://dps.sd.gov/driver-licensing/driver-licensing-offices",
    appointmentRequired: false,

    permitApplicationUrl: "https://dps.sd.gov/driver-licensing/license-id-types/instruction-permit",

    lastVerified: "July 2026",
    sources: [
      "https://dps.sd.gov/driver-licensing/license-id-types/instruction-permit",
      "https://dps.sd.gov/driver-licensing/license-id-types/minors-permit-restricted-license",
      "https://dps.sd.gov/driver-licensing/driver-licensing-manuals",
    ],
  },

  "vermont": {
    departmentName: "Department of Motor Vehicles",
    departmentCode: "Vermont Real Estate",
    officialWebsite: "https://real-estate.vermont.gov",

    handbookUrl: "https://real-estate.vermont.gov/sites/real-estate/files/documents/Real Estate-driver-manual.pdf",
    handbookLanguages: ["English"],
    officialPracticeTestAvailable: false,

    minimumPermitAge: "15",
    parentConsentRequired: true,
    parentConsentMaxAge: 18,

    testQuestionsTeen: 20,
    testQuestionsAdult: 20,
    passingScoreTeen: 16,
    passingScoreAdult: 16,
    passingPercentage: 80,
    separateRoadSignsTest: false,
    testLanguages: ["English"],
    testLanguageCount: 1,
    onlineTestAvailable: false,

    applicationFee: "$40",
    retestFee: "$40",
    maxAttempts: "Unlimited",
    waitAfterFail: "Next business day",

    permitValidityPeriod: "2 years",
    minHoldingPeriod: "12 months (must also be at least 16)",

    supervisedHoursTotal: 40,
    supervisedHoursNight: 10,
    supervisorMinAge: 18,
    drivingLogRequired: true,

    driverEdRequired: true,
    driverEdRequiredForAges: "Required for under 18",
    driverEdClassroomHours: 30,
    driverEdBehindWheelHours: 8,
    onlineDriverEdAccepted: false,

    gdlNighttimeCurfew: "Midnight–5am (Level 2 provisional license, under 18)",
    gdlPassengerRestriction: "No more than 1 passenger under 25 (except immediate family) during Level 2",
    gdlCellPhoneRestriction: "All cell phone use prohibited for drivers under 18",

    appointmentUrl: "https://real-estate.vermont.gov/licenses/new-licenses/learners-permit",
    appointmentRequired: false,

    permitApplicationUrl: "https://real-estate.vermont.gov/licenses/new-licenses/learners-permit",

    lastVerified: "July 2026",
    sources: [
      "https://real-estate.vermont.gov/licenses/new-licenses/learners-permit",
      "https://real-estate.vermont.gov/licenses/new-licenses/license-under-18",
      "https://real-estate.vermont.gov/sites/real-estate/files/documents/Real Estate-driver-manual.pdf",
    ],
  },

  "wyoming": {
    departmentName: "Department of Transportation — Driver Services",
    departmentCode: "WYDOT",
    officialWebsite: "https://dot.wyo.gov/driver-license",

    handbookUrl: "https://dot.wyo.gov/driver-license/driver-license-testing/wyoming-driving-manual",
    handbookLanguages: ["English"],
    officialPracticeTestAvailable: false,

    minimumPermitAge: "15",
    parentConsentRequired: true,
    parentConsentMaxAge: 18,

    testQuestionsTeen: 25,
    testQuestionsAdult: 25,
    passingScoreTeen: 20,
    passingScoreAdult: 20,
    passingPercentage: 80,
    separateRoadSignsTest: false,
    testLanguages: ["English"],
    testLanguageCount: 1,
    onlineTestAvailable: false,

    applicationFee: "$15",
    retestFee: "$15",
    maxAttempts: "Unlimited",
    waitAfterFail: "Next business day",

    permitValidityPeriod: "1 year",
    minHoldingPeriod: "6 months",

    supervisedHoursTotal: 50,
    supervisedHoursNight: 10,
    supervisorMinAge: 21,
    drivingLogRequired: true,

    driverEdRequired: false,
    onlineDriverEdAccepted: true,

    gdlNighttimeCurfew: "9pm–5am (restricted license, age 16–17)",
    gdlPassengerRestriction: "No more than 1 non-family passenger under 18 (first 6 months of restricted license)",
    gdlCellPhoneRestriction: "No handheld phone use for drivers under 18",

    appointmentUrl: "https://dot.wyo.gov/driver-license/driver-license-offices",
    appointmentRequired: false,

    permitApplicationUrl: "https://dot.wyo.gov/driver-license/driver-license-testing/instruction-permit",

    lastVerified: "July 2026",
    sources: [
      "https://dot.wyo.gov/driver-license/driver-license-testing/instruction-permit",
      "https://dot.wyo.gov/driver-license/driver-license-types/restricted-license",
      "https://dot.wyo.gov/driver-license/driver-license-testing/wyoming-driving-manual",
    ],
  },

  "north-dakota": {
    departmentName: "Department of Transportation",
    departmentCode: "NDDOT",
    officialWebsite: "https://www.dot.nd.gov",

    handbookUrl: "https://www.dot.nd.gov/divisions/driverslicense/docs/drivermanual.pdf",
    handbookLanguages: ["English"],
    officialPracticeTestAvailable: false,

    minimumPermitAge: "14",
    parentConsentRequired: true,
    parentConsentMaxAge: 18,

    testQuestionsTeen: 25,
    testQuestionsAdult: 25,
    passingScoreTeen: 20,
    passingScoreAdult: 20,
    passingPercentage: 80,
    separateRoadSignsTest: false,
    testLanguages: ["English"],
    testLanguageCount: 1,
    onlineTestAvailable: false,

    applicationFee: "$15",
    maxAttempts: 3,
    waitAfterFail: "1 day (7 days after 3 failures)",

    permitValidityPeriod: "1 year",
    minHoldingPeriod: "12 months (must also be at least 16)",

    supervisedHoursTotal: 50,
    supervisedHoursNight: 10,
    supervisorMinAge: 18,
    drivingLogRequired: true,

    driverEdRequired: false,
    driverEdRequiredForAges: "Not required but may shorten holding period",
    onlineDriverEdAccepted: true,

    gdlNighttimeCurfew: "Midnight–5am (restricted license, under 18)",
    gdlPassengerRestriction: "Family only first 6 months; then max 1 non-family passenger under 18",
    gdlCellPhoneRestriction: "No handheld phone use for drivers under 18",

    appointmentUrl: "https://www.dot.nd.gov/divisions/driverslicense/driverslicenseoffices.htm",
    appointmentRequired: false,

    permitApplicationUrl: "https://www.dot.nd.gov/divisions/driverslicense/gdl.htm",

    lastVerified: "July 2026",
    sources: [
      "https://www.dot.nd.gov/divisions/driverslicense/gdl.htm",
      "https://www.dot.nd.gov/divisions/driverslicense/docs/drivermanual.pdf",
      "https://www.dot.nd.gov/divisions/driverslicense/fees.htm",
    ],
  },

  florida: {
    departmentName: "Department of Highway Safety and Motor Vehicles",
    departmentCode: "FLHSMV",
    officialWebsite: "https://www.flhsmv.gov",

    handbookUrl: "https://www.flhsmv.gov/driver-licenses-id-cards/motorist-handbooks-study-guides/",
    handbookLanguages: ["English", "Spanish", "Haitian Creole"],
    officialPracticeTestAvailable: false,

    minimumPermitAge: "15",
    parentConsentRequired: true,
    parentConsentMaxAge: 18,

    testQuestionsTeen: 50,
    testQuestionsAdult: 50,
    passingScoreTeen: 40,
    passingScoreAdult: 40,
    passingPercentage: 80,
    separateRoadSignsTest: false,
    testLanguages: ["English", "Spanish", "Haitian Creole"],
    testLanguageCount: 3,
    onlineTestAvailable: false,
    onlineTestNotes: "Test must be taken in person at an FLHSMV office or tax collector's office",

    applicationFee: "$48",
    retestFee: "$10",
    maxAttempts: "3 attempts per application",
    waitAfterFail: "1 day",

    permitValidityPeriod: "1 year",
    minHoldingPeriod: "12 months",

    supervisedHoursTotal: 50,
    supervisedHoursNight: 10,
    supervisorMinAge: 21,
    drivingLogRequired: true,

    driverEdRequired: true,
    driverEdRequiredForAges: "Under 18 (TLSAE/Drug & Alcohol course required for all first-time applicants)",
    driverEdClassroomHours: 4,
    driverEdBehindWheelHours: 0,
    onlineDriverEdAccepted: true,

    gdlNighttimeCurfew: "11pm–6am (first 12 months with learner's license)",
    gdlPassengerRestriction: "No more than 1 non-family passenger under 18 for first 12 months",
    gdlCellPhoneRestriction: "No cellphone use permitted while driving with a learner's license",

    appointmentUrl: "https://www.flhsmv.gov/offices/",
    appointmentRequired: false,

    permitApplicationUrl: "https://www.flhsmv.gov/driver-licenses-id-cards/licenses/how-to-apply/",

    lastVerified: "July 2026",
    sources: [
      "https://www.flhsmv.gov/driver-licenses-id-cards/licenses/how-to-apply/",
      "https://www.flhsmv.gov/driver-licenses-id-cards/motorist-handbooks-study-guides/",
      "https://www.flhsmv.gov/driver-licenses-id-cards/licenses/teen-drivers/",
    ],
  },
};
