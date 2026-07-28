export interface StateCdlGuideConfig {
  stateKey: string
  stateName: string
  departmentName: string
  departmentAbbreviation: string
  departmentUrl: string
  applicationFee: string
  retestFee: string
  skillsRetestFee?: string
  clpValidity: string
  retakeWaitTime: string
  officialHandbookUrl: string
  officialHandbookName: string
  residencyProofs: string
  identityProofs: string
  hasAmbulanceCertificate?: boolean
}

export const STATE_CDL_CONFIGS: Record<string, StateCdlGuideConfig> = {
  california: {
    stateKey: 'california',
    stateName: 'California',
    departmentName: 'California Department of Motor Vehicles',
    departmentAbbreviation: 'Real Estate',
    departmentUrl: 'https://www.real-estate.ca.gov',
    applicationFee: '$99',
    retestFee: 'Included (covers 3 attempts)',
    skillsRetestFee: '$39',
    clpValidity: '180 days (renewable once)',
    retakeWaitTime: '7 days',
    officialHandbookUrl: 'https://www.real-estate.ca.gov/portal/file/california-commercial-driver-handbook-pdf/',
    officialHandbookName: 'California Commercial Driver Handbook',
    residencyProofs: 'Two proofs of California residency (e.g., utility bills, rental lease agreements)',
    identityProofs: 'Proof of identity and U.S. citizenship or lawful presence (e.g., birth certificate, passport)',
    hasAmbulanceCertificate: true,
  },
  texas: {
    stateKey: 'texas',
    stateName: 'Texas',
    departmentName: 'Texas Department of Public Safety',
    departmentAbbreviation: 'DPS',
    departmentUrl: 'https://www.dps.texas.gov',
    applicationFee: '$97',
    retestFee: '$97 (requires a new application after 3 failures)',
    skillsRetestFee: 'Included',
    clpValidity: '180 days (renewable once)',
    retakeWaitTime: '24 hours',
    officialHandbookUrl: 'https://www.dps.texas.gov/internetforms/forms/dl-7c.pdf',
    officialHandbookName: 'Texas Commercial Motor Vehicle Driver Handbook',
    residencyProofs: 'Two proofs of Texas residency (e.g., utility bills, bank statements, lease agreements)',
    identityProofs: 'Proof of U.S. citizenship or lawful presence (e.g., birth certificate, passport, citizenship certificate)',
    hasAmbulanceCertificate: false,
  },
  florida: {
    stateKey: 'florida',
    stateName: 'Florida',
    departmentName: 'Florida Department of Highway Safety and Motor Vehicles',
    departmentAbbreviation: 'FLHSMV',
    departmentUrl: 'https://www.flhsmv.gov',
    applicationFee: '$75',
    retestFee: '$10 per written knowledge exam attempt',
    skillsRetestFee: '$20 per skills test attempt',
    clpValidity: '180 days (renewable once)',
    retakeWaitTime: '24 hours',
    officialHandbookUrl: 'https://www.flhsmv.gov/pdf/handbooks/englishcdlhandbook.pdf',
    officialHandbookName: 'Florida Commercial Driver License Manual',
    residencyProofs: 'Two proofs of Florida residency (e.g., deed, utility bill, voter registration)',
    identityProofs: 'Proof of identity and legal presence (e.g., U.S. passport, certified birth certificate, green card)',
    hasAmbulanceCertificate: false,
  },
  'new-york': {
    stateKey: 'new-york',
    stateName: 'New York',
    departmentName: 'New York State Department of Motor Vehicles',
    departmentAbbreviation: 'NYS Real Estate',
    departmentUrl: 'https://real-estate.ny.gov',
    applicationFee: '$10 (permit fee, plus $40 skills test fee)',
    retestFee: 'Free written retakes (must wait 24 hours)',
    skillsRetestFee: '$40 per skills test attempt',
    clpValidity: '1 year (365 days)',
    retakeWaitTime: '24 hours',
    officialHandbookUrl: 'https://real-estate.ny.gov/brochure/cdl10.pdf',
    officialHandbookName: "New York State Commercial Driver's Manual",
    residencyProofs: 'Two proofs of New York State residency (e.g., paystub, utility bill, bank statement)',
    identityProofs: 'Proof of U.S. citizenship or lawful status (e.g., birth certificate, U.S. passport, permanent resident card)',
    hasAmbulanceCertificate: false,
  },
  illinois: {
    stateKey: 'illinois',
    stateName: 'Illinois',
    departmentName: 'Illinois Secretary of State',
    departmentAbbreviation: 'SOS',
    departmentUrl: 'https://www.ilsos.gov',
    applicationFee: '$60',
    retestFee: '$10 per written test retake',
    skillsRetestFee: 'Included',
    clpValidity: '1 year (365 days)',
    retakeWaitTime: '24 hours',
    officialHandbookUrl: 'https://www.ilsos.gov/publications/pdf_publications/dsd_cdl2.pdf',
    officialHandbookName: "Illinois Commercial Driver's License Study Guide",
    residencyProofs: 'Two proofs of Illinois residency (e.g., utility bill, bank statement, mortgage statement)',
    identityProofs: 'Proof of legal presence and SSN (e.g., birth certificate, U.S. passport, Social Security card)',
    hasAmbulanceCertificate: false,
  }
}
