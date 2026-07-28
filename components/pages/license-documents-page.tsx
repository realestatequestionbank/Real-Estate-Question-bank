'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '@/contexts/auth-context'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { AuthModal } from '@/components/auth/auth-modal'
import { ExpiredPremiumModal } from '@/components/auth/expired-premium-modal'
import { PurchaseRenewalDialog } from '@/components/purchase-renewal-dialog'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import {
  FileText,
  Shield,
  Users,
  CheckCircle,
  AlertTriangle,
  Home,
  User,
  MapPin,
  Calendar,
  RefreshCw,
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  Search
} from 'lucide-react'
import { STATES, type StateKey } from '@/lib/constants'

const STATE_GUIDE_URLS: { [key: string]: string } = {
  california: '/state-guides/california',
  'north-carolina': '/state-guides/north-carolina',
  washington: '/state-guides/washington',
  texas: '/state-guides/texas',
  'new-york': '/state-guides/new-york',
  idaho: '/state-guides/idaho',
  iowa: '/state-guides/iowa',
  maryland: '/state-guides/maryland',
  massachusetts: '/state-guides/massachusetts',
  michigan: '/state-guides/michigan',
  nevada: '/state-guides/nevada',
  ohio: '/state-guides/ohio',
  pennsylvania: '/state-guides/pennsylvania'
}

interface FormData {
  state: string
  age: string
  citizenship: 'citizen' | 'non-citizen' | ''
}

interface DocumentRequirement {
  category: string
  documents: string[]
  note?: string
}

interface StateRequirements {
  citizen: DocumentRequirement[]
  nonCitizen: DocumentRequirement[]
  ageSpecific: { [key: string]: string[] }
}

// Comprehensive state requirements data
const stateRequirements: { [key: string]: StateRequirements } = {
  california: {
    citizen: [
      {
        category: 'Identity',
        documents: [
          'Certified U.S. birth certificate',
          'Valid U.S. passport or passport card',
          'Certificate of Naturalization',
          'Certificate of Citizenship',
          'Consular Report of Birth Abroad'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'W-2 form',
          'SSA-1099 form',
          'Non-SSA-1099 form',
          'Paystub with full SSN'
        ]
      },
      {
        category: 'California Residency (2 documents)',
        documents: [
          'Utility bill (gas, electric, cable, landline phone)',
          'Bank statement',
          'Rental or lease agreement',
          'Mortgage bill',
          'Medical document',
          'School enrollment or transcript',
          'Employment document',
          'Insurance document',
          'Vehicle or vessel title/registration',
          'Tax return (IRS or FTB)'
        ]
      }
    ],
    nonCitizen: [
      {
        category: 'Identity & Legal Presence (Real ID)',
        documents: [
          'Valid foreign passport with valid U.S. Visa and approved I-94 form',
          'Permanent Resident Card (Green Card)',
          'Employment Authorization Card (I-766)',
          'Valid foreign passport stamped "Processed for I-551"'
        ]
      },
      {
        category: 'Social Security (if eligible)',
        documents: [
          'Social Security card',
          'SSA ineligibility letter',
          'W-2 form with SSN',
          'Paystub with full SSN'
        ]
      },
      {
        category: 'California Residency (2 documents)',
        documents: [
          'Utility bill (gas, electric, cable, landline phone)',
          'Bank statement',
          'Rental or lease agreement',
          'Mortgage bill',
          'Medical document',
          'School enrollment or transcript',
          'Employment document',
          'Insurance document',
          'Vehicle or vessel title/registration',
          'Tax return (IRS or FTB)'
        ]
      }
    ],
    ageSpecific: {
      'under18': [
        'Parent/guardian signature on application',
        'Completion certificate from real estate exam prep/training',
        'Instruction permit held for 6 months',
        '50 hours of supervised driving (10 at night)'
      ],
      '15.5-17.5': ['Eligible for Instruction Permit'],
      'under15.5': ['Minimum age for Instruction Permit is generally 15½ (unless enrolled in specific student programs).']
    }
  },
  texas: {
    citizen: [
      {
        category: 'Identity',
        documents: [
          'Certified U.S. birth certificate',
          'Valid U.S. passport',
          'Certificate of Naturalization',
          'Certificate of Citizenship',
          'Consular Report of Birth Abroad'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'W-2 form',
          '1099 form',
          'Paystub showing full SSN',
          'Social Security Administration benefit statement'
        ]
      },
      {
        category: 'Texas Residency (2 documents)',
        documents: [
          'Current utility bill',
          'Bank statement',
          'Current lease agreement',
          'Mortgage documents',
          'Texas voter registration card',
          'Texas vehicle registration or title',
          'Insurance documents',
          'Employment records'
        ]
      }
    ],
    nonCitizen: [
      {
        category: 'Identity & Legal Status',
        documents: [
          'Valid foreign passport with I-94',
          'Permanent Resident Card',
          'Employment Authorization Document',
          'I-20 with valid entry stamp',
          'Valid foreign passport with valid U.S. visa'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'SSA ineligibility letter',
          'Individual Taxpayer Identification Number (ITIN) letter',
          'W-2 form if available'
        ]
      },
      {
        category: 'Texas Residency (2 documents)',
        documents: [
          'Current utility bill',
          'Bank statement',
          'Current lease agreement',
          'Mortgage documents',
          'School enrollment records',
          'Medical records'
        ]
      }
    ],
    ageSpecific: {
      'under18': ['Parent/guardian consent form', 'Verification of enrollment form (VOE) or high school diploma'],
      '18-24': ['Impact Texas Driver (ITD) certificate if under 25']
    }
  },
  florida: {
    citizen: [
      {
        category: 'Identity',
        documents: [
          'Certified U.S. birth certificate',
          'Valid U.S. passport',
          'Certificate of Naturalization',
          'Certificate of Citizenship'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'W-2 form',
          '1099 form',
          'Social Security Administration document',
          'Paystub with full SSN'
        ]
      },
      {
        category: 'Florida Residency (2 documents)',
        documents: [
          'Florida voter registration card',
          'Florida vehicle registration',
          'Utility hookup work order',
          'Utility bill',
          'Bank statement',
          'Mortgage documents'
        ]
      }
    ],
    nonCitizen: [
      {
        category: 'Identity & Immigration Status',
        documents: [
          'Valid foreign passport with I-94',
          'Permanent Resident Card',
          'Employment Authorization Card',
          'I-20 with valid visa',
          'Valid foreign passport with valid U.S. visa'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'SSA ineligibility letter',
          'Individual Taxpayer Identification Number authorization',
          'W-2 form if available'
        ]
      },
      {
        category: 'Florida Residency (2 documents)',
        documents: [
          'Utility bill',
          'Bank statement',
          'Rental agreement',
          'Mortgage statement',
          'School enrollment records',
          'Employment records'
        ]
      }
    ],
    ageSpecific: {
      'under18': ['Parental consent form', 'School enrollment verification'],
      'under21': ['Traffic Law and Substance Abuse Education course completion']
    }
  },
  // New York
  'new-york': {
    citizen: [
      {
        category: 'Identity',
        documents: [
          'Certified U.S. birth certificate',
          'Valid U.S. passport',
          'Certificate of Naturalization',
          'Certificate of Citizenship'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'W-2 form',
          '1099 form',
          'Social Security Administration document'
        ]
      },
      {
        category: 'New York Residency',
        documents: [
          'Utility bill (electric, gas, water, cable, satellite, telephone)',
          'Bank statement',
          'Payroll check stub',
          'Mortgage statement',
          'Rental/lease agreement'
        ]
      }
    ],
    nonCitizen: [
      {
        category: 'Identity & Immigration Status',
        documents: [
          'Valid foreign passport with I-94',
          'Permanent Resident Card',
          'Employment Authorization Document',
          'I-20 with valid visa'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'SSA ineligibility letter',
          'Individual Taxpayer Identification Number letter'
        ]
      },
      {
        category: 'New York Residency',
        documents: [
          'Utility bill',
          'Bank statement',
          'Rental agreement',
          'School enrollment records'
        ]
      }
    ],
    ageSpecific: {
      'under18': ['Parent/guardian consent', 'Driver education course completion certificate'],
      '16-17': ['Junior license restrictions apply']
    }
  },
  // Washington State
  washington: {
    citizen: [
      {
        category: 'Identity',
        documents: [
          'Certified U.S. birth certificate',
          'Valid U.S. passport',
          'Certificate of Naturalization',
          'Consular Report of Birth Abroad'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'W-2 form',
          '1099 form',
          'Social Security Administration document'
        ]
      },
      {
        category: 'Washington Residency',
        documents: [
          'Washington State voter registration card',
          'Current utility bill',
          'Bank statement',
          'Rental agreement',
          'Mortgage statement',
          'Washington State vehicle registration'
        ]
      }
    ],
    nonCitizen: [
      {
        category: 'Identity & Immigration Status',
        documents: [
          'Valid foreign passport with I-94',
          'Permanent Resident Card',
          'Employment Authorization Card',
          'I-20 with valid visa'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'SSA ineligibility letter',
          'Individual Taxpayer Identification Number authorization'
        ]
      },
      {
        category: 'Washington Residency',
        documents: [
          'Current utility bill',
          'Bank statement',
          'Rental agreement',
          'Mortgage statement',
          'School enrollment records',
          'Medical records'
        ]
      }
    ],
    ageSpecific: {
      'under18': ['Parental consent form', 'Certificate of enrollment in public or private school or homeschool declaration'],
      '16-17': ['Intermediate license restrictions apply']
    }
  },
  // Illinois
  illinois: {
    citizen: [
      {
        category: 'Identity',
        documents: [
          'Certified U.S. birth certificate',
          'Valid U.S. passport',
          'Certificate of Naturalization',
          'Certificate of Citizenship'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'W-2 form',
          '1099 form',
          'Social Security Administration document'
        ]
      },
      {
        category: 'Illinois Residency (2 documents)',
        documents: [
          'Utility bill',
          'Bank statement',
          'Lease agreement',
          'Mortgage documents',
          'Illinois voter registration card',
          'Vehicle registration or title'
        ]
      }
    ],
    nonCitizen: [
      {
        category: 'Identity & Immigration Status',
        documents: [
          'Valid foreign passport with I-94',
          'Permanent Resident Card',
          'Employment Authorization Document',
          'Valid visa documentation'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'SSA ineligibility letter',
          'Individual Taxpayer Identification Number'
        ]
      },
      {
        category: 'Illinois Residency (2 documents)',
        documents: [
          'Utility bill',
          'Bank statement',
          'Rental agreement',
          'School enrollment records'
        ]
      }
    ],
    ageSpecific: {
      'under18': ['Parent/guardian consent form', 'Driver education course completion'],
      'under21': ['Graduated driver licensing restrictions apply']
    }
  },
  // Ohio
  ohio: {
    citizen: [
      {
        category: 'Identity',
        documents: [
          'Certified U.S. birth certificate',
          'Valid U.S. passport',
          'Certificate of Naturalization',
          'Certificate of Citizenship'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'W-2 form',
          '1099 form',
          'Social Security Administration document'
        ]
      },
      {
        category: 'Ohio Residency (2 documents)',
        documents: [
          'Utility bill (electric, gas, water, trash, cable, internet)',
          'Bank or credit union statement',
          'Mortgage statement or rental agreement',
          'Ohio voter registration confirmation',
          'Ohio vehicle registration or title'
        ]
      }
    ],
    nonCitizen: [
      {
        category: 'Identity & Immigration Status',
        documents: [
          'Valid foreign passport with I-94',
          'Permanent Resident Card',
          'Employment Authorization Document',
          'Valid visa with I-20 or DS-2019'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'SSA ineligibility letter',
          'Individual Taxpayer Identification Number letter'
        ]
      },
      {
        category: 'Ohio Residency (2 documents)',
        documents: [
          'Utility bill',
          'Bank statement',
          'Rental agreement',
          'School enrollment verification'
        ]
      }
    ],
    ageSpecific: {
      'under18': ['Parent/guardian consent form', 'School enrollment verification'],
      '15-18': ['Temporary instruction permit restrictions apply']
    }
  },
  // Georgia
  georgia: {
    citizen: [
      {
        category: 'Identity',
        documents: [
          'Certified U.S. birth certificate',
          'Valid U.S. passport',
          'Certificate of Naturalization',
          'Certificate of Citizenship'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'W-2 form',
          '1099 form',
          'Social Security Administration document'
        ]
      },
      {
        category: 'Georgia Residency (2 documents)',
        documents: [
          'Utility bill',
          'Bank statement',
          'Mortgage statement or rental agreement',
          'Georgia voter registration card',
          'Georgia vehicle registration or title'
        ]
      }
    ],
    nonCitizen: [
      {
        category: 'Identity & Immigration Status',
        documents: [
          'Valid foreign passport with I-94',
          'Permanent Resident Card',
          'Employment Authorization Document',
          'Valid visa documentation'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'SSA ineligibility letter',
          'Individual Taxpayer Identification Number'
        ]
      },
      {
        category: 'Georgia Residency (2 documents)',
        documents: [
          'Utility bill',
          'Bank statement',
          'Rental agreement',
          'School enrollment records'
        ]
      }
    ],
    ageSpecific: {
      'under18': ['Parent/guardian consent form', 'Certificate of school enrollment'],
      '16-17': ['Graduated driver licensing program requirements']
    }
  },
  // Michigan
  michigan: {
    citizen: [
      {
        category: 'Identity',
        documents: [
          'Certified U.S. birth certificate',
          'Valid U.S. passport',
          'Certificate of Naturalization',
          'Certificate of Citizenship'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'W-2 form',
          '1099 form',
          'Social Security Administration document'
        ]
      },
      {
        category: 'Michigan Residency (2 documents)',
        documents: [
          'Utility bill',
          'Bank statement',
          'Mortgage statement or rental agreement',
          'Michigan voter registration card',
          'Michigan vehicle registration or title'
        ]
      }
    ],
    nonCitizen: [
      {
        category: 'Identity & Immigration Status',
        documents: [
          'Valid foreign passport with I-94',
          'Permanent Resident Card',
          'Employment Authorization Document',
          'Valid visa documentation'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'SSA ineligibility letter',
          'Individual Taxpayer Identification Number'
        ]
      },
      {
        category: 'Michigan Residency (2 documents)',
        documents: [
          'Utility bill',
          'Bank statement',
          'Rental agreement',
          'School enrollment records'
        ]
      }
    ],
    ageSpecific: {
      'under18': ['Parent/guardian consent form', 'Segment 1 real estate exam prep completion'],
      '14.5-16': ['Temporary instruction permit available']
    }
  },
  // Pennsylvania
  pennsylvania: {
    citizen: [
      {
        category: 'Identity',
        documents: [
          'Certified U.S. birth certificate',
          'Valid U.S. passport',
          'Certificate of Naturalization',
          'Certificate of Citizenship'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'W-2 form',
          '1099 form',
          'Social Security Administration document'
        ]
      },
      {
        category: 'Pennsylvania Residency (2 documents)',
        documents: [
          'Utility bill',
          'Bank statement',
          'Mortgage statement or rental agreement',
          'Pennsylvania voter registration card',
          'Pennsylvania vehicle registration or title'
        ]
      }
    ],
    nonCitizen: [
      {
        category: 'Identity & Immigration Status',
        documents: [
          'Valid foreign passport with I-94',
          'Permanent Resident Card',
          'Employment Authorization Document',
          'Valid visa documentation'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'SSA ineligibility letter',
          'Individual Taxpayer Identification Number'
        ]
      },
      {
        category: 'Pennsylvania Residency (2 documents)',
        documents: [
          'Utility bill',
          'Bank statement',
          'Rental agreement',
          'School enrollment records'
        ]
      }
    ],
    ageSpecific: {
      'under18': ['Parent/guardian consent form', 'School enrollment verification'],
      '16-18': ['Junior learner\'s permit restrictions apply']
    }
  },
  // Arizona
  arizona: {
    citizen: [
      {
        category: 'Identity',
        documents: [
          'Certified U.S. birth certificate',
          'Valid U.S. passport',
          'Certificate of Naturalization',
          'Certificate of Citizenship',
          'Consular Report of Birth Abroad'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'W-2 form',
          '1099 form',
          'Paystub with full SSN'
        ]
      },
      {
        category: 'Arizona Residency (2 documents)',
        documents: [
          'Utility bill (water, gas, electric, cable, etc.)',
          'Bank or credit card statement',
          'Arizona voter registration card',
          'Arizona vehicle registration',
          'Insurance policy',
          'Real estate tax statement'
        ]
      }
    ],
    nonCitizen: [
      {
        category: 'Identity & Legal Presence',
        documents: [
          'Valid foreign passport with I-94',
          'Permanent Resident Card',
          'Employment Authorization Document',
          'I-20 with valid visa'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'SSA ineligibility letter',
          'W-2 form'
        ]
      },
      {
        category: 'Arizona Residency (2 documents)',
        documents: [
          'Utility bill',
          'Bank statement',
          'Rental agreement',
          'School enrollment records'
        ]
      }
    ],
    ageSpecific: {
      'under18': ['Parent/guardian approval', 'Driver education completion if applying for graduated license'],
      '15.5-18': ['Instruction permit required for 6 months']
    }
  },
  // Massachusetts
  massachusetts: {
    citizen: [
      {
        category: 'Identity & Date of Birth',
        documents: [
          'Certified U.S. birth certificate',
          'Valid U.S. passport',
          'Certificate of Naturalization',
          'Certificate of Citizenship'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'W-2 form',
          'SSA-1099 form',
          'Non-SSA-1099 form',
          'Paystub with full SSN'
        ]
      },
      {
        category: 'Massachusetts Residency',
        documents: [
          'Utility bill (gas, electric, telephone, cable, heating oil)',
          'Bank statement',
          'Credit card statement',
          'Pension or retirement statement',
          'Loan contract',
          'Insurance policy (home/auto)'
        ]
      }
    ],
    nonCitizen: [
      {
        category: 'Identity & Lawful Presence',
        documents: [
          'Valid foreign passport with I-94',
          'Permanent Resident Card',
          'Employment Authorization Document',
          'Valid visa with I-20 or DS-2019'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'SSA denial letter',
          'W-2 form'
        ]
      },
      {
        category: 'Massachusetts Residency',
        documents: [
          'Utility bill',
          'Bank statement',
          'Lease agreement',
          'School transcript'
        ]
      }
    ],
    ageSpecific: {
      'under18': ['Parent/guardian consent', 'Driver\'s education certificate'],
      '16.5-18': ['Junior Operator restrictions apply']
    }
  },
  // New Jersey
  'new-jersey': {
    citizen: [
      {
        category: '6 Points of ID (Primary - 4 points)',
        documents: [
          'Certified U.S. birth certificate (4 points)',
          'Valid U.S. passport (4 points)',
          'Certificate of Naturalization (4 points)',
          'Certificate of Citizenship (4 points)'
        ]
      },
      {
        category: '6 Points of ID (Secondary - 2+ points)',
        documents: [
          'Valid U.S. school photo ID with transcript (2 points)',
          'US college photo ID with transcript (2 points)',
          'Social Security card (1 point)',
          'Bank statement/record (1 point)',
          'Health insurance card (1 point)',
          'High school diploma or GED (1 point)'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'W-2 form',
          'Paystub with full SSN',
          'SSA-1099'
        ]
      },
      {
        category: 'New Jersey Residency',
        documents: [
          'Utility bill',
          'New Jersey driver license/ID card',
          'Lease or rental agreement',
          'Property tax bill',
          'First class mail from government agency',
          'Bank statement'
        ]
      }
    ],
    nonCitizen: [
      {
        category: 'Identity & Legal Status',
        documents: [
          'Foreign passport with I-94 (4 points)',
          'Permanent Resident Card (4 points)',
          'Employment Authorization Card (3 points)',
          'Refugee Travel Document (4 points)'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'SSA ineligibility letter + affidavit identifying you',
          'ITIN letter'
        ]
      },
      {
        category: 'New Jersey Residency',
        documents: [
          'Utility bill',
          'Bank statement',
          'Lease agreement',
          'School records'
        ]
      }
    ],
    ageSpecific: {
      'under18': ['Parent/guardian consent', 'Behind-the-wheel training completion (16-year-olds)'],
      '16-20': ['Probationary license restrictions apply']
    }
  },
  // North Carolina
  'north-carolina': {
    citizen: [
      {
        category: 'Identity & Date of Birth',
        documents: [
          'Certified U.S. birth certificate',
          'Valid U.S. passport',
          'Certificate of Naturalization',
          'Certificate of Citizenship'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'W-2 form',
          '1099 form',
          'Paystub with full SSN',
          'Social Security Administration document'
        ]
      },
      {
        category: 'North Carolina Residency',
        documents: [
          'Utility bill',
          'Housing lease or contract',
          'Mortgage statement',
          'NC Voter registration card',
          'NC Vehicle registration',
          'School records'
        ]
      }
    ],
    nonCitizen: [
      {
        category: 'Identity & Legal Presence',
        documents: [
          'Valid foreign passport with I-94',
          'Permanent Resident Card',
          'Employment Authorization Document',
          'Valid visa documentation'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'SSA ineligibility letter',
          'W-2 form'
        ]
      },
      {
        category: 'North Carolina Residency',
        documents: [
          'Utility bill',
          'Bank statement',
          'Apartment lease',
          'School records'
        ]
      }
    ],
    ageSpecific: {
      'under18': ['Driving Eligibility Certificate (school attendance)', 'Driver\'s Education Certificate'],
      '15-17': ['Graduated licensing system applies']
    }
  },
  // Virginia
  virginia: {
    citizen: [
      {
        category: 'Identity',
        documents: [
          'Certified U.S. birth certificate',
          'Valid U.S. passport',
          'Certificate of Naturalization',
          'Certificate of Citizenship'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'W-2 form',
          '1099 form',
          'Paystub with full SSN',
          'SSA document'
        ]
      },
      {
        category: 'Virginia Residency',
        documents: [
          'Utility bill',
          'Mortgage statement or lease agreement',
          'Virginia voter registration card',
          'U.S. IRS tax return',
          'Bank statement',
          'Postmarked mail (official government)'
        ]
      }
    ],
    nonCitizen: [
      {
        category: 'Identity & Legal Presence',
        documents: [
          'Valid foreign passport with I-94',
          'Permanent Resident Card',
          'Employment Authorization Document',
          'Valid visa documentation'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'SSA ineligibility letter',
          'W-2 form'
        ]
      },
      {
        category: 'Virginia Residency',
        documents: [
          'Utility bill',
          'Bank statement',
          'Lease agreement',
          'School enrollment records'
        ]
      }
    ],
    ageSpecific: {
      'under18': ['Parent/guardian consent', 'Proof of Driver Education completion'],
      '15-17': ['Learner\'s permit holding period requirements']
    }
  },
  // Indiana
  indiana: {
    citizen: [
      {
        category: 'Proof of Identity',
        documents: [
          'Certified U.S. birth certificate',
          'Valid U.S. passport',
          'Certificate of Naturalization',
          'Certificate of Citizenship',
          'Military ID card'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'W-2 form',
          '1099 form',
          'Paystub with full SSN',
          'SSA benefit statement'
        ]
      },
      {
        category: 'Indiana Residency (2 documents)',
        documents: [
          'Utility bill (electric, gas, water, phone)',
          'Bank or credit union statement',
          'Mortgage documents or lease agreement',
          'Indiana voter registration',
          'Indiana vehicle registration or title',
          'Insurance documents'
        ]
      }
    ],
    nonCitizen: [
      {
        category: 'Identity & Legal Presence',
        documents: [
          'Valid foreign passport with I-94',
          'Permanent Resident Card',
          'Employment Authorization Document',
          'Valid visa with I-20 or DS-2019'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'SSA denial letter',
          'ITIN authorization letter'
        ]
      },
      {
        category: 'Indiana Residency (2 documents)',
        documents: [
          'Utility bill',
          'Bank statement',
          'Lease or rental agreement',
          'School enrollment records',
          'Medical records with IN address'
        ]
      }
    ],
    ageSpecific: {
      'under18': ['Parental consent form', 'Completion of real estate exam prep course'],
      '15-17': ['Learner\'s permit restrictions apply', 'Must hold permit for 180 days']
    }
  },
  // Tennessee
  tennessee: {
    citizen: [
      {
        category: 'Proof of U.S. Citizenship',
        documents: [
          'Certified U.S. birth certificate',
          'Valid U.S. passport',
          'Certificate of Naturalization',
          'Certificate of Citizenship',
          'Consular Report of Birth Abroad'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'W-2 form',
          '1099 form',
          'Paystub showing full SSN',
          'SSA-1099 statement'
        ]
      },
      {
        category: 'Tennessee Residency (2 documents)',
        documents: [
          'Utility bill (electric, gas, water, cable)',
          'Bank statement',
          'Mortgage statement or rental agreement',
          'Tennessee voter registration card',
          'Tennessee vehicle registration',
          'Property tax receipt'
        ]
      }
    ],
    nonCitizen: [
      {
        category: 'Identity & Immigration Status',
        documents: [
          'Valid foreign passport with I-94',
          'Permanent Resident Card (Green Card)',
          'Employment Authorization Document',
          'Valid visa with I-20 or DS-2019'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'SSA denial letter',
          'ITIN letter'
        ]
      },
      {
        category: 'Tennessee Residency (2 documents)',
        documents: [
          'Utility bill',
          'Bank statement',
          'Rental agreement',
          'School enrollment verification',
          'Employment records'
        ]
      }
    ],
    ageSpecific: {
      'under18': ['Parental consent form', 'School attendance verification', 'Driver education certificate'],
      '15-17': ['Graduated driver license program applies', 'real estate license required for 180 days']
    }
  },
  // Colorado
  colorado: {
    citizen: [
      {
        category: 'Proof of Identity',
        documents: [
          'Certified U.S. birth certificate',
          'Valid U.S. passport or passport card',
          'Certificate of Naturalization',
          'Certificate of Citizenship',
          'Consular Report of Birth Abroad'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'W-2 form',
          '1099 form',
          'Paystub with full SSN',
          'SSA benefits letter'
        ]
      },
      {
        category: 'Colorado Residency (2 documents)',
        documents: [
          'Utility bill (electric, gas, water, phone)',
          'Bank or credit card statement',
          'Mortgage statement or lease agreement',
          'Colorado voter registration card',
          'Colorado vehicle registration',
          'Property tax statement'
        ]
      }
    ],
    nonCitizen: [
      {
        category: 'Identity & Legal Presence',
        documents: [
          'Valid foreign passport with I-94',
          'Permanent Resident Card',
          'Employment Authorization Document',
          'I-20 with valid visa',
          'Valid visa with DS-2019'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'SSA ineligibility letter',
          'ITIN authorization'
        ]
      },
      {
        category: 'Colorado Residency (2 documents)',
        documents: [
          'Utility bill',
          'Bank statement',
          'Rental or lease agreement',
          'School enrollment records',
          'Medical documents with CO address'
        ]
      }
    ],
    ageSpecific: {
      'under18': ['Parent/guardian consent form', 'Driver awareness program completion if under 16'],
      '15-16': ['Instruction permit restrictions apply', 'Drive time log required (50 hours)']
    }
  },
  // Maryland
  maryland: {
    citizen: [
      {
        category: 'Identity & Age',
        documents: [
          'Certified U.S. birth certificate',
          'Valid U.S. passport',
          'Certificate of Naturalization',
          'Certificate of Citizenship',
          'Consular Report of Birth Abroad'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'W-2 form',
          'SSA-1099 form',
          'Non-SSA-1099 form',
          'Paystub with full SSN'
        ]
      },
      {
        category: 'Maryland Residency (2 documents)',
        documents: [
          'Utility bill',
          'Bank statement',
          'Lease or rental agreement',
          'Mortgage statement',
          'Credit card bill',
          'Property tax bill',
          'Vehicle registration card',
          'Voter registration card'
        ]
      }
    ],
    nonCitizen: [
      {
        category: 'Identity & Legal Presence',
        documents: [
          'Valid foreign passport with I-94',
          'Permanent Resident Card',
          'Employment Authorization Document',
          'I-20 with valid visa'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'SSA ineligibility letter',
          'W-2 form',
          'Paystub with full SSN'
        ]
      },
      {
        category: 'Maryland Residency (2 documents)',
        documents: [
          'Utility bill',
          'Bank statement',
          'Lease agreement',
          'School transcript (if student)'
        ]
      }
    ],
    ageSpecific: {
      'under18': ['Parent/guardian signature', 'Proof of school attendance (DL-300)'],
      '15-9mo': ['Learner\'s permit required for at least 9 months']
    }
  },
  // Missouri
  missouri: {
    citizen: [
      {
        category: 'Identity',
        documents: [
          'Certified U.S. birth certificate',
          'Valid U.S. passport',
          'Certificate of Naturalization',
          'Certificate of Citizenship'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'W-2 form',
          'SSA-1099 form',
          'Non-SSA-1099 form',
          'Paystub with full SSN'
        ]
      },
      {
        category: 'Missouri Residency (2 documents)',
        documents: [
          'Utility bill (gas, electric, water, sewer, trash, phone)',
          'Bank statement',
          'Mortgage or lease agreement',
          'Property tax receipt',
          'Voter registration card',
          'Insurance policy (auto/home)'
        ]
      }
    ],
    nonCitizen: [
      {
        category: 'Identity & Immigration Status',
        documents: [
          'Valid foreign passport with I-94',
          'Permanent Resident Card',
          'Employment Authorization Document',
          'Valid visa documentation'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'SSA ineligibility letter',
          'W-2 form'
        ]
      },
      {
        category: 'Missouri Residency (2 documents)',
        documents: [
          'Utility bill',
          'Bank statement',
          'Lease agreement',
          'University/College transcript'
        ]
      }
    ],
    ageSpecific: {
      'under18': ['Parent/guardian written consent', 'School enrollment verification'],
      '15-18': ['Graduated driver license laws apply']
    }
  },
  // Wisconsin
  wisconsin: {
    citizen: [
      {
        category: 'Name & Date of Birth',
        documents: [
          'Certified U.S. birth certificate',
          'Valid U.S. passport',
          'Consular Report of Birth Abroad',
          'Certificate of Naturalization',
          'Certificate of Citizenship'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'W-2 form',
          'SSA-1099 form',
          'Non-SSA-1099 form',
          'Paystub with full SSN'
        ]
      },
      {
        category: 'Wisconsin Residency (2 documents)',
        documents: [
          'Utility bill',
          'Bank statement',
          'Paycheck or paystub',
          'Mortgage or rental agreement',
          'Insurance policy (home/renter/auto)',
          'Government correspondence'
        ]
      }
    ],
    nonCitizen: [
      {
        category: 'Legal Presence',
        documents: [
          'Valid foreign passport with I-94',
          'Permanent Resident Card',
          'Employment Authorization Document',
          'I-20 with valid visa'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'SSA ineligibility letter',
          'W-2 form'
        ]
      },
      {
        category: 'Wisconsin Residency (2 documents)',
        documents: [
          'Utility bill',
          'Bank statement',
          'Rental agreement',
          'College enrollment documentation'
        ]
      }
    ],
    ageSpecific: {
      'under18': ['Parent/guardian sponsorship (signature)', 'Driver ed course completion', 'School enrollment proof'],
      '15.5-18': ['Instruction permit required for 6 months']
    }
  },
  // Minnesota
  minnesota: {
    citizen: [
      {
        category: 'Identity',
        documents: [
          'Valid U.S. passport',
          'Certified U.S. birth certificate',
          'Certificate of Naturalization',
          'Certificate of Citizenship'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'W-2 form',
          'Paystub with full SSN'
        ]
      },
      {
        category: 'Minnesota Residency (2 documents)',
        documents: [
          'Utility bill',
          'Bank or credit card statement',
          'MN driver\'s license (current)',
          'Tax return (previous year)',
          'Mortgage or lease documents'
        ]
      }
    ],
    nonCitizen: [
      {
        category: 'Identity & Legal Status',
        documents: [
          'Permanent Resident Card',
          'Valid foreign passport with I-94',
          'Employment Authorization Card'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'W-2 form',
          'Paystub with full SSN'
        ]
      },
      {
        category: 'Minnesota Residency (2 documents)',
        documents: [
          'Utility bill',
          'Bank statement',
          'Lease agreement',
          'School transcript'
        ]
      }
    ],
    ageSpecific: {
      'under18': ['Parent/guardian approval', 'Blue Card (classroom completion)'],
      '15-18': ['Instruction permit held for 6 months']
    }
  },
  // South Carolina
  'south-carolina': {
    citizen: [
      {
        category: 'Identity',
        documents: [
          'Certified U.S. birth certificate',
          'Valid U.S. passport',
          'Certificate of Naturalization',
          'Certificate of Citizenship',
          'Consular Report of Birth Abroad'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'W-2 form',
          '1099 form',
          'Paystub with full SSN',
          'SSA-1099'
        ]
      },
      {
        category: 'SC Residency (2 documents)',
        documents: [
          'Utility bill',
          'Bank or credit card statement',
          'Mortgage or lease agreement',
          'SC vehicle registration',
          'Property tax bill',
          'Paystub with address'
        ]
      }
    ],
    nonCitizen: [
      {
        category: 'Identity & Legal Presence',
        documents: [
          'Valid foreign passport with I-94',
          'Permanent Resident Card',
          'Employment Authorization Document'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'SSA letter of ineligibility',
          'W-2 form'
        ]
      },
      {
        category: 'SC Residency (2 documents)',
        documents: [
          'Utility bill',
          'Bank statement',
          'Lease agreement',
          'School records'
        ]
      }
    ],
    ageSpecific: {
      'under18': ['Parent/guardian consent', 'School attendance verification'],
      '15-17': ['Beginner\'s permit required for 180 days']
    }
  },
  // Alabama
  alabama: {
    citizen: [
      {
        category: 'Identity & Date of Birth',
        documents: [
          'Valid U.S. passport',
          'Certified U.S. birth certificate',
          'Consular Report of Birth Abroad',
          'Certificate of Naturalization',
          'Certificate of Citizenship'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'W-2 form',
          'SSA-1099 form',
          'Non-SSA-1099 form',
          'Paystub with full SSN'
        ]
      },
      {
        category: 'Alabama Residency (2 documents)',
        documents: [
          'Voter registration card',
          'Residential mortgage contract',
          'Current lease or rental agreement',
          'Property tax payment proof',
          'Vehicle registration',
          'Utility bill (< 90 days old)'
        ]
      }
    ],
    nonCitizen: [
      {
        category: 'Legal Presence',
        documents: [
          'Permanent Resident Card',
          'Employment Authorization Document',
          'Valid foreign passport with I-94'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'SSA ineligibility letter'
        ]
      },
      {
        category: 'Alabama Residency (2 documents)',
        documents: [
          'Utility bill',
          'Bank statement',
          'Lease agreement',
          'School enrollment confirmation'
        ]
      }
    ],
    ageSpecific: {
      'under18': ['Parent/guardian affidavit (signature)', 'Proof of school enrollment'],
      '15-16': ['Learner\'s license restrictions apply']
    }
  },
  // Louisiana
  louisiana: {
    citizen: [
      {
        category: 'Identity & Lawful Status',
        documents: [
          'Valid U.S. passport',
          'Certified U.S. birth certificate',
          'Certificate of Naturalization',
          'Certificate of Citizenship',
          'Consular Report of Birth Abroad'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'W-2 form',
          'Paystub with full SSN'
        ]
      },
      {
        category: 'Louisiana Residency (2 documents)',
        documents: [
          'Utility bill',
          'Deed or mortgage statement',
          'Lease agreement',
          'Bank statement',
          'Valid Louisiana driver\'s license (for ID)'
        ]
      }
    ],
    nonCitizen: [
      {
        category: 'Identity & Legal Status',
        documents: [
          'Valid foreign passport with I-94',
          'Permanent Resident Card',
          'Refugee Travel Document'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'SSA ineligibility letter'
        ]
      },
      {
        category: 'Louisiana Residency (2 documents)',
        documents: [
          'Utility bill',
          'Bank statement',
          'Lease agreement',
          'School enrollment'
        ]
      }
    ],
    ageSpecific: {
      'under18': ['Custodial parent/guardian signature', 'Certificate of Required Attendance (school)'],
      '15-17': ['Learner\'s permit required']
    }
  },
  // Kentucky
  kentucky: {
    citizen: [
      {
        category: 'Proof of Identity',
        documents: [
          'Certified U.S. birth certificate',
          'Valid U.S. passport',
          'Certificate of Naturalization',
          'Certificate of Citizenship'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'W-2 form',
          '1099 form',
          'Paystub with full SSN'
        ]
      },
      {
        category: 'Kentucky Residency (2 documents)',
        documents: [
          'Current KY driver\'s license',
          'Utility bill',
          'Bank statement',
          'Mortgage or lease agreement',
          'Vehicle registration',
          'Official government mail'
        ]
      }
    ],
    nonCitizen: [
      {
        category: 'Identity & Legal Presence',
        documents: [
          'Permanent Resident Card',
          'Employment Authorization Document',
          'Valid foreign passport with I-94'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'SSA ineligibility letter'
        ]
      },
      {
        category: 'Kentucky Residency (2 documents)',
        documents: [
          'Utility bill',
          'Bank statement',
          'Lease agreement',
          'School transcript'
        ]
      }
    ],
    ageSpecific: {
      'under18': ['Parent/guardian signature (application)', 'School Compliance Verification form'],
      '16-17': ['Graduated license program (GLP) requirements']
    }
  },
  // Oregon
  oregon: {
    citizen: [
      {
        category: 'Identity & Legal Presence',
        documents: [
          'Valid U.S. passport',
          'Certified U.S. birth certificate',
          'Certificate of Naturalization',
          'Certificate of Citizenship',
          'Consular Report of Birth Abroad'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'W-2 form',
          '1099 form',
          'Paystub with full SSN'
        ]
      },
      {
        category: 'Oregon Residency (2 documents)',
        documents: [
          'Utility bill',
          'Bank or credit card statement',
          'Rental or lease agreement',
          'Vehicle title or registration',
          'Mail from government agency',
          'Insurance document'
        ]
      }
    ],
    nonCitizen: [
      {
        category: 'Identity & Legal Presence',
        documents: [
          'Permanent Resident Card',
          'Employment Authorization Document',
          'Valid foreign passport with I-94'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'W-2 form',
          '1099 form',
          'Paystub with full SSN'
        ]
      },
      {
        category: 'Oregon Residency (2 documents)',
        documents: [
          'Utility bill',
          'Bank statement',
          'Lease agreement'
        ]
      }
    ],
    ageSpecific: {
      'under18': ['Parent/guardian consent', 'Proof of school enrollment'],
      '15-17': ['Instruction permit required for 6 months']
    }
  },
  // Oklahoma
  oklahoma: {
    citizen: [
      {
        category: 'Identity',
        documents: [
          'Valid U.S. passport',
          'Certified U.S. birth certificate',
          'Consular Report of Birth Abroad',
          'Certificate of Naturalization',
          'Certificate of Citizenship'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security number (card recommended)',
          'W-2 form',
          '1099 form'
        ]
      },
      {
        category: 'Oklahoma Residency (2 documents)',
        documents: [
          'Utility bill',
          'Mortgage, deed, or residential lease',
          'Bank statement',
          'Vehicle registration or title',
          'Tax return (previous year)',
          'Insurance policy'
        ]
      }
    ],
    nonCitizen: [
      {
        category: 'Identity & Legal Presence',
        documents: [
          'Permanent Resident Card',
          'Employment Authorization Document',
          'Valid foreign passport with I-94'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security number',
          'SSA ineligibility letter'
        ]
      },
      {
        category: 'Oklahoma Residency (2 documents)',
        documents: [
          'Utility bill',
          'Bank statement',
          'Lease agreement',
          'School enrollment record'
        ]
      }
    ],
    ageSpecific: {
      'under18': ['Parent/guardian consent', 'Proof of school enrollment (8th grade reading level)'],
      '15.5-18': ['Graduated Driver License (GDL) program']
    }
  },
  // Connecticut
  connecticut: {
    citizen: [
      {
        category: 'Identity (2 documents)',
        documents: [
          'Certified U.S. birth certificate',
          'Valid U.S. passport',
          'Certificate of Naturalization',
          'Certificate of Citizenship',
          'Consular Report of Birth Abroad',
          'Permanent Resident Card',
          'Valid Employment Authorization Document (I-766)'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'W-2 form',
          '1099 form',
          'Paystub with full SSN'
        ]
      },
      {
        category: 'CT Residency (2 documents)',
        documents: [
          'Utility bill',
          'Bank statement',
          'Mortgage or rental agreement',
          'Property tax bill',
          'CT vehicle registration/insurance',
          'Official mail from government agency',
          'School transcript'
        ]
      }
    ],
    nonCitizen: [
      {
        category: 'Legal Presence',
        documents: [
          'Valid foreign passport with I-94',
          'Permanent Resident Card',
          'Employment Authorization Document',
          'Valid U.S. Visa with I-94'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'SSA ineligibility letter',
          'W-2 form'
        ]
      },
      {
        category: 'CT Residency (2 documents)',
        documents: [
          'Utility bill',
          'Bank statement',
          'Lease agreement',
          'Official government mail'
        ]
      }
    ],
    ageSpecific: {
      'under18': ['Parent/guardian consent', 'Parent/guardian residency documents accepted'],
      '16-17': ['Learner\'s permit required for 120-180 days']
    }
  },
  // Utah
  utah: {
    citizen: [
      {
        category: 'Identity',
        documents: [
          'Valid U.S. passport',
          'Certified U.S. birth certificate',
          'Consular Report of Birth Abroad',
          'Certificate of Naturalization',
          'Certificate of Citizenship'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'W-2 form',
          'SSA-1099 form',
          'Non-SSA-1099 form',
          'Paystub with full SSN'
        ]
      },
      {
        category: 'Utah Residency (2 documents)',
        documents: [
          'Utility bill',
          'Bank statement',
          'Lease or rental agreement',
          'Mortgage statement',
          'Property tax notice',
          'Court documents',
          'Vehicle title'
        ]
      }
    ],
    nonCitizen: [
      {
        category: 'Legal Presence',
        documents: [
          'Valid foreign passport with I-94',
          'Permanent Resident Card',
          'Employment Authorization Document'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'SSA ineligibility letter'
        ]
      },
      {
        category: 'Utah Residency (2 documents)',
        documents: [
          'Utility bill',
          'Bank statement',
          'Lease agreement',
          'School transcript'
        ]
      }
    ],
    ageSpecific: {
      'under18': ['Parent/guardian signature (financial responsibility)', 'Proof of driving experience (40 hours)'],
      '15-18': ['real estate license held for 6 months']
    }
  },
  // Nevada
  nevada: {
    citizen: [
      {
        category: 'Identity',
        documents: [
          'Valid U.S. passport',
          'Certified U.S. birth certificate',
          'Consular Report of Birth Abroad',
          'Certificate of Naturalization',
          'Certificate of Citizenship'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'W-2 form',
          'Paystub with full SSN'
        ]
      },
      {
        category: 'Nevada Residency (2 documents)',
        documents: [
          'Utility bill',
          'Lease or rental agreement',
          'Mortgage statement',
          'Bank or credit card statement',
          'Employment check stub',
          'NV vehicle registration',
          'Voter registration card'
        ]
      }
    ],
    nonCitizen: [
      {
        category: 'Identity & Legal Presence',
        documents: [
          'Valid foreign passport with I-94',
          'Permanent Resident Card',
          'Employment Authorization Document'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'SSA ineligibility letter'
        ]
      },
      {
        category: 'Nevada Residency (2 documents)',
        documents: [
          'Utility bill',
          'Bank statement',
          'Lease agreement',
          'School enrollment record'
        ]
      }
    ],
    ageSpecific: {
      'under18': ['Parent/guardian affidavit of residency', 'School attendance proof (form Real Estate 301)'],
      '15.5-18': ['Instruction permit held for 6 months', '50 hours driving log']
    }
  },
  // Arkansas
  arkansas: {
    citizen: [
      {
        category: 'Legal Presence',
        documents: [
          'Certified U.S. birth certificate',
          'Valid U.S. passport',
          'Certificate of Naturalization',
          'Certificate of Citizenship',
          'Consular Report of Birth Abroad'
        ]
      },
      {
        category: 'Identity',
        documents: [
          'Current Driver License or ID',
          'School ID card',
          'Vehicle registration or title',
          'Marriage certificate',
          'Military ID',
          'Tax return (< 1 year old)'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'W-2 form',
          '1099 form',
          'Paystub with full SSN'
        ]
      },
      {
        category: 'Arkansas Residency (2 documents)',
        documents: [
          'Utility bill',
          'Bank statement',
          'Lease or rental agreement',
          'Mortgage statement',
          'Insurance policy (home/renter/auto)',
          'Paycheck stub'
        ]
      }
    ],
    nonCitizen: [
      {
        category: 'Legal Presence',
        documents: [
          'Valid foreign passport with I-94',
          'Permanent Resident Card',
          'Employment Authorization Document'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'SSA ineligibility letter'
        ]
      },
      {
        category: 'Arkansas Residency (2 documents)',
        documents: [
          'Utility bill',
          'Bank statement',
          'Lease agreement'
        ]
      }
    ],
    ageSpecific: {
      'under18': ['Parent/guardian signature', 'School attendance form'],
      '14-16': ['Learner\'s license restrictions apply']
    }
  },
  // Mississippi
  mississippi: {
    citizen: [
      {
        category: 'Identity & Lawful Presence',
        documents: [
          'Certified U.S. birth certificate',
          'Valid U.S. passport',
          'Certificate of Naturalization',
          'Certificate of Citizenship',
          'Consular Report of Birth Abroad'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'W-2 form',
          '1099 form',
          'Paystub with full SSN'
        ]
      },
      {
        category: 'Mississippi Residency (2 documents)',
        documents: [
          'Utility bill',
          'Bank statement',
          'Lease or rental agreement',
          'Mortgage statement',
          'MS motor vehicle registration',
          'Government correspondence',
          'Tax return'
        ]
      }
    ],
    nonCitizen: [
      {
        category: 'Identity & Legal Presence',
        documents: [
          'Valid foreign passport with I-94',
          'Permanent Resident Card',
          'Employment Authorization Document',
          'Refugee Travel Document'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'SSA ineligibility letter'
        ]
      },
      {
        category: 'Mississippi Residency (2 documents)',
        documents: [
          'Utility bill',
          'Bank statement',
          'Lease agreement',
          'School transcript'
        ]
      }
    ],
    ageSpecific: {
      'under18': ['Parent/guardian signature', 'School attendance form (VOE)'],
      '15-16': ['Learner\'s permit held for 12 months']
    }
  },
  // Kansas
  kansas: {
    citizen: [
      {
        category: 'Identity & Lawful Presence',
        documents: [
          'Certified U.S. birth certificate',
          'Valid U.S. passport',
          'Certificate of Naturalization',
          'Certificate of Citizenship',
          'Consular Report of Birth Abroad'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'W-2 form',
          '1099 form',
          'Paystub with full SSN'
        ]
      },
      {
        category: 'Kansas Residency (2 documents)',
        documents: [
          'Utility bill',
          'Bank statement',
          'Lease or rental agreement',
          'Mortgage statement',
          'KS vehicle registration or title',
          'Vehicle insurance policy',
          'Voter registration card'
        ]
      }
    ],
    nonCitizen: [
      {
        category: 'Identity & Legal Presence',
        documents: [
          'Valid foreign passport with I-94',
          'Permanent Resident Card',
          'Employment Authorization Document',
          'I-20 with valid visa'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'SSA ineligibility letter'
        ]
      },
      {
        category: 'Kansas Residency (2 documents)',
        documents: [
          'Utility bill',
          'Bank statement',
          'Lease agreement',
          'School transcript'
        ]
      }
    ],
    ageSpecific: {
      'under18': ['Parent/guardian consent', 'Driver education completion (optional but recommended)'],
      '14-17': ['Graduated driver\'s license requirements apply']
    }
  },
  // New Mexico
  'new-mexico': {
    citizen: [
      {
        category: 'Identity & Age',
        documents: [
          'Certified U.S. birth certificate',
          'Valid U.S. passport',
          'Certificate of Naturalization',
          'Certificate of Citizenship',
          'Consular Report of Birth Abroad'
        ]
      },
      {
        category: 'Identification Number',
        documents: [
          'Social Security card',
          'W-2 form',
          'SSA-1099 form',
          'Non-SSA-1099 form',
          'Paystub with full SSN'
        ]
      },
      {
        category: 'NM Residency (2 documents)',
        documents: [
          'Utility bill',
          'Bank statement',
          'Rental or lease agreement',
          'Mortgage statement',
          'Property tax statement',
          'Insurance bill or card',
          'Public assistance card',
          'Local government document'
        ]
      }
    ],
    nonCitizen: [
      {
        category: 'Identity & Legal Presence',
        documents: [
          'Valid foreign passport with I-94',
          'Permanent Resident Card',
          'Employment Authorization Document'
        ]
      },
      {
        category: 'Identification Number',
        documents: [
          'Social Security card',
          'SSA ineligibility letter',
          'W-2 form'
        ]
      },
      {
        category: 'NM Residency (2 documents)',
        documents: [
          'Utility bill',
          'Bank statement',
          'Lease agreement',
          'School enrollment record'
        ]
      }
    ],
    ageSpecific: {
      'under18': ['Parent/guardian signature', 'Proof of school enrollment'],
      '15-18': ['Provisional license requirements apply']
    }
  },
  // Nebraska
  nebraska: {
    citizen: [
      {
        category: 'Identity & Lawful Status',
        documents: [
          'Certified U.S. birth certificate',
          'Valid U.S. passport',
          'Certificate of Naturalization',
          'Certificate of Citizenship',
          'Consular Report of Birth Abroad'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'W-2 form',
          '1099 form',
          'Paystub with full SSN'
        ]
      },
      {
        category: 'Nebraska Residency (2 documents)',
        documents: [
          'Utility bill',
          'Bank statement',
          'Mortgage or rental agreement',
          'NE vehicle registration',
          'Property tax statement',
          'Voter registration card'
        ]
      }
    ],
    nonCitizen: [
      {
        category: 'Identity & Legal Presence',
        documents: [
          'Valid foreign passport with I-94',
          'Permanent Resident Card',
          'Employment Authorization Document'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'SSA ineligibility letter'
        ]
      },
      {
        category: 'Nebraska Residency (2 documents)',
        documents: [
          'Utility bill',
          'Bank statement',
          'Lease agreement',
          'School transcript'
        ]
      }
    ],
    ageSpecific: {
      'under18': ['Parent/guardian address verification', 'Driver safety course completion'],
      '15-17': ['School Learner\'s Permit (LPE) or Learner\'s Permit (LPD)']
    }
  },
  // West Virginia
  'west-virginia': {
    citizen: [
      {
        category: 'Identity & Legal Presence',
        documents: [
          'Certified U.S. birth certificate',
          'Valid U.S. passport',
          'Certificate of Naturalization',
          'Certificate of Citizenship',
          'Consular Report of Birth Abroad'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'W-2 form',
          '1099 form',
          'Paystub with full SSN'
        ]
      },
      {
        category: 'WV Residency (2 documents)',
        documents: [
          'Utility bill',
          'Bank statement',
          'Lease or rental agreement',
          'Mortgage statement',
          'WV vehicle registration',
          'Voter registration card',
          'Insurance documents'
        ]
      }
    ],
    nonCitizen: [
      {
        category: 'Identity & Legal Presence',
        documents: [
          'Valid foreign passport with I-94',
          'Permanent Resident Card',
          'Employment Authorization Document'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'W-2 form',
          'Paystub with full SSN'
        ]
      },
      {
        category: 'WV Residency (2 documents)',
        documents: [
          'Utility bill',
          'Bank statement',
          'Lease agreement',
          'School records'
        ]
      }
    ],
    ageSpecific: {
      'under18': ['Parent/guardian signature', 'School Driver Eligibility Certificate'],
      '15-17': ['Graduated Driver Licensing (GDL) program']
    }
  },
  // Idaho
  idaho: {
    citizen: [
      {
        category: 'Identity & Lawful Presence',
        documents: [
          'Certified U.S. birth certificate',
          'Valid U.S. passport',
          'Certificate of Naturalization',
          'Certificate of Citizenship',
          'Consular Report of Birth Abroad'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'W-2 form',
          '1099 form',
          'Paystub with full SSN'
        ]
      },
      {
        category: 'Idaho Residency (2 documents)',
        documents: [
          'Utility bill',
          'Bank statement',
          'Lease or rental agreement',
          'Mortgage statement',
          'ID vehicle registration',
          'School enrollment records',
          'Employment records'
        ]
      }
    ],
    nonCitizen: [
      {
        category: 'Identity & Legal Presence',
        documents: [
          'Valid foreign passport with I-94',
          'Permanent Resident Card',
          'Employment Authorization Document'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'W-2 form',
          'Paystub with full SSN'
        ]
      },
      {
        category: 'Idaho Residency (2 documents)',
        documents: [
          'Utility bill',
          'Bank statement',
          'Lease agreement',
          'School transcript'
        ]
      }
    ],
    ageSpecific: {
      'under18': ['Parent/guardian liability signer', 'Driver training completion'],
      '14.5-17': ['Supervised Instruction Permit (SIP)']
    }
  },
  // Alaska
  alaska: {
    citizen: [
      {
        category: 'Identity & Lawful Status',
        documents: [
          'Certified U.S. birth certificate',
          'Valid U.S. passport',
          'Certificate of Naturalization',
          'Certificate of Citizenship',
          'Consular Report of Birth Abroad'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'W-2 form',
          '1099 form',
          'Paystub with full SSN'
        ]
      },
      {
        category: 'Alaska Residency (2 documents)',
        documents: [
          'Utility bill (< 90 days old)',
          'Bank statement',
          'Rental or lease agreement',
          'Mortgage bill',
          'Vehicle registration'
        ]
      }
    ],
    nonCitizen: [
      {
        category: 'Identity & Legal Presence',
        documents: [
          'Valid foreign passport with I-94',
          'Permanent Resident Card',
          'Employment Authorization Document'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'SSA ineligibility letter'
        ]
      },
      {
        category: 'Alaska Residency (2 documents)',
        documents: [
          'Utility bill',
          'Bank statement',
          'Lease agreement',
          'Employment records'
        ]
      }
    ],
    ageSpecific: {
      'under18': ['Parent/guardian approval', 'Proof of school enrollment'],
      '14-16': ['Instruction permit requirements']
    }
  },
  // Delaware
  delaware: {
    citizen: [
      {
        category: 'Identity & Legal Presence',
        documents: [
          'Certified U.S. birth certificate',
          'Valid U.S. passport',
          'Certificate of Naturalization',
          'Certificate of Citizenship'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'W-2 form',
          'SSA-1099 form',
          'Paystub with full SSN'
        ]
      },
      {
        category: 'Delaware Residency (2 documents)',
        documents: [
          'Utility bill',
          'Bank or credit card statement',
          'Mortgage or rental agreement',
          'DE motor vehicle registration',
          'Official government mail'
        ]
      }
    ],
    nonCitizen: [
      {
        category: 'Legal Presence',
        documents: [
          'Valid foreign passport with I-94',
          'Permanent Resident Card',
          'Employment Authorization Document'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'SSA ineligibility letter'
        ]
      },
      {
        category: 'Delaware Residency (2 documents)',
        documents: [
          'Utility bill',
          'Bank statement',
          'Lease agreement',
          'Employment records'
        ]
      }
    ],
    ageSpecific: {
      'under18': ['Sponsor signature (parent/guardian)', 'Driver education certificate (Blue Certificate)'],
      '16-17': ['Graduated Driver License (GDL) Level 1 Permit']
    }
  },
  // Hawaii
  hawaii: {
    citizen: [
      {
        category: 'Legal Name & Date of Birth',
        documents: [
          'Certified U.S. birth certificate',
          'Valid U.S. passport',
          'Certificate of Naturalization',
          'Certificate of Citizenship',
          'Consular Report of Birth Abroad'
        ]
      },
      {
        category: 'Social Security (Optional but recommended)',
        documents: [
          'Social Security card',
          'W-2 form',
          'Paystub with full SSN'
        ]
      },
      {
        category: 'Hawaii Residency (2 documents)',
        documents: [
          'Utility bill (< 2 months old)',
          'Financial statement (< 2 months old)',
          'Vehicle registration or title',
          'Insurance card',
          'Government mail'
        ]
      }
    ],
    nonCitizen: [
      {
        category: 'Legal Presence',
        documents: [
          'Valid foreign passport with I-94',
          'Permanent Resident Card',
          'Employment Authorization Document'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card'
        ]
      },
      {
        category: 'Hawaii Residency (2 documents)',
        documents: [
          'Utility bill',
          'Bank statement',
          'Lease agreement'
        ]
      }
    ],
    ageSpecific: {
      'under18': ['Parent/guardian affidavit', 'Instruction permit held for 180 days'],
      '15.5-17': ['Provisional license requirements']
    }
  },
  // Iowa
  iowa: {
    citizen: [
      {
        category: 'Identity & Lawful Status',
        documents: [
          'Certified U.S. birth certificate',
          'Valid U.S. passport',
          'Certificate of Naturalization',
          'Certificate of Citizenship',
          'Consular Report of Birth Abroad'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'W-2 form',
          '1099 form',
          'Paystub with full SSN'
        ]
      },
      {
        category: 'Iowa Residency (2 documents)',
        documents: [
          'Utility bill',
          'Bank statement',
          'Mortgage or rental agreement',
          'Iowa vehicle registration',
          'Property tax statement',
          'Official government mail'
        ]
      }
    ],
    nonCitizen: [
      {
        category: 'Identity & Lawful Status',
        documents: [
          'Valid foreign passport with I-94',
          'Permanent Resident Card',
          'Employment Authorization Document'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'SSA ineligibility letter'
        ]
      },
      {
        category: 'Iowa Residency (2 documents)',
        documents: [
          'Utility bill',
          'Bank statement',
          'Lease agreement',
          'School transcript'
        ]
      }
    ],
    ageSpecific: {
      'under18': ['Parent/guardian consent', 'Driver education certificate'],
      '14-17': ['Instruction permit and intermediate license stages']
    }
  },
  // Maine
  maine: {
    citizen: [
      {
        category: 'Identity & Lawful Status',
        documents: [
          'Certified U.S. birth certificate',
          'Valid U.S. passport',
          'Certificate of Naturalization',
          'Certificate of Citizenship',
          'Consular Report of Birth Abroad'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'W-2 form',
          'Paystub with full SSN',
          '1099 form'
        ]
      },
      {
        category: 'Maine Residency (2 documents)',
        documents: [
          'Utility bill',
          'Paycheck stub',
          'Mortgage or property tax bill',
          'Maine driver\'s license (if upgrading)',
          'Car registration'
        ]
      }
    ],
    nonCitizen: [
      {
        category: 'Identity & Lawful Status',
        documents: [
          'Valid foreign passport with I-94',
          'Permanent Resident Card',
          'Employment Authorization Document'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'SSA ineligibility letter'
        ]
      },
      {
        category: 'Maine Residency (2 documents)',
        documents: [
          'Utility bill',
          'Bank statement',
          'Lease agreement'
        ]
      }
    ],
    ageSpecific: {
      'under18': ['Parent/guardian signature', 'Birth certificate required'],
      '15-21': ['Graduated driver licensing system applies']
    }
  },
  // Montana
  montana: {
    citizen: [
      {
        category: 'Identity & Authorized Presence',
        documents: [
          'Certified U.S. birth certificate',
          'Valid U.S. passport',
          'Certificate of Naturalization',
          'Certificate of Citizenship'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'W-2 form',
          'Paystub with full SSN'
        ]
      },
      {
        category: 'Montana Residency (2 documents)',
        documents: [
          'Utility bill',
          'Bank statement',
          'Rental or lease agreement',
          'Vehicle registration',
          'Phone bill',
          'School transcript'
        ]
      }
    ],
    nonCitizen: [
      {
        category: 'Authorized Presence',
        documents: [
          'Valid foreign passport with I-94',
          'Permanent Resident Card',
          'Employment Authorization Document'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'SSA ineligibility letter'
        ]
      },
      {
        category: 'Montana Residency (2 documents)',
        documents: [
          'Utility bill',
          'Bank statement',
          'Lease agreement'
        ]
      }
    ],
    ageSpecific: {
      'under18': ['Parent/guardian consent', 'Driver education completion'],
      '14.5-18': ['Graduated Driver Licensing (GDL)']
    }
  },
  // New Hampshire
  'new-hampshire': {
    citizen: [
      {
        category: 'Identity',
        documents: [
          'Certified U.S. birth certificate',
          'Valid U.S. passport',
          'Certificate of Naturalization',
          'Certificate of Citizenship'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'W-2 form',
          'Paystub with full SSN',
          '1099 form'
        ]
      },
      {
        category: 'NH Residency (2 documents)',
        documents: [
          'Utility bill',
          'Lease or rental agreement',
          'NH vehicle registration',
          'Property tax bill',
          'Payroll check',
          'Government check'
        ]
      }
    ],
    nonCitizen: [
      {
        category: 'Identity & Lawful Status',
        documents: [
          'Valid foreign passport with I-94',
          'Permanent Resident Card',
          'Refugee travel document',
          'Employment Authorization Document'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'Paystub',
          'W-2'
        ]
      },
      {
        category: 'NH Residency (2 documents)',
        documents: [
          'Utility bill',
          'Bank statement',
          'Lease agreement'
        ]
      }
    ],
    ageSpecific: {
      'under18': ['Parental Authorization Certificate', 'Driver Education Certificate'],
      '16-21': ['Youth Operator License']
    }
  },
  // North Dakota
  'north-dakota': {
    citizen: [
      {
        category: 'Identity & Legal Presence',
        documents: [
          'Certified U.S. birth certificate',
          'Valid U.S. passport',
          'Certificate of Naturalization',
          'Certificate of Citizenship',
          'Consular Report of Birth Abroad'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'W-2 form',
          'SSA-1099 form',
          'Pay stub with full SSN'
        ]
      },
      {
        category: 'ND Residency (2 documents)',
        documents: [
          'Utility bill',
          'Bank statement',
          'Mortgage or lease document',
          'Property tax statement',
          'School transcript',
          'Vehicle insurance policy'
        ]
      }
    ],
    nonCitizen: [
      {
        category: 'Legal Presence',
        documents: [
          'Valid foreign passport with I-94',
          'Permanent Resident Card',
          'Employment Authorization Card'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'W-2 form',
          'Pay stub'
        ]
      },
      {
        category: 'ND Residency (2 documents)',
        documents: [
          'Utility bill',
          'Bank statement',
          'Lease agreement',
          'School transcript'
        ]
      }
    ],
    ageSpecific: {
      'under18': ['Parent/guardian approval', 'Parent\'s proof of address accepted'],
      '14-16': ['Instruction permit held for 6-12 months']
    }
  },
  // Rhode Island
  'rhode-island': {
    citizen: [
      {
        category: 'Identity',
        documents: [
          'Certified U.S. birth certificate',
          'Valid U.S. passport',
          'Certificate of Naturalization',
          'Certificate of Citizenship'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card'
        ]
      },
      {
        category: 'RI Residency (2 documents)',
        documents: [
          'Utility bill',
          'Bank statement',
          'Payroll check or stub',
          'Insurance policy (home/car)',
          'Property tax bill',
          'Lease or rental agreement'
        ]
      }
    ],
    nonCitizen: [
      {
        category: 'Identity & Legal Presence',
        documents: [
          'Valid foreign passport with I-94',
          'Permanent Resident Card',
          'Employment Authorization Document'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'SSA ineligibility letter'
        ]
      },
      {
        category: 'RI Residency (2 documents)',
        documents: [
          'Utility bill',
          'Bank statement',
          'Lease agreement'
        ]
      }
    ],
    ageSpecific: {
      'under18': ['Parent/guardian signature', 'Driver education certificate (33 hours)'],
      '16-18': ['Limited Provisional License']
    }
  },
  // South Dakota
  'south-dakota': {
    citizen: [
      {
        category: 'Identity & Lawful Status',
        documents: [
          'Certified U.S. birth certificate',
          'Valid U.S. passport',
          'Certificate of Naturalization',
          'Certificate of Citizenship'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'W-2 form',
          'SSA-1099 form',
          'Pay stub with full SSN'
        ]
      },
      {
        category: 'SD Residency (2 documents)',
        documents: [
          'Utility bill (< 1 year old)',
          'Bank statement',
          'Lease or mortgage document',
          'Renter/Homeowner insurance policy',
          'Pay stub',
          'SD vehicle registration'
        ]
      }
    ],
    nonCitizen: [
      {
        category: 'Lawful Status',
        documents: [
          'Valid foreign passport with I-94',
          'Permanent Resident Card',
          'Employment Authorization Document'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'W-2 form',
          'Pay stub'
        ]
      },
      {
        category: 'SD Residency (2 documents)',
        documents: [
          'Utility bill',
          'Bank statement',
          'Lease agreement',
          'School transcript'
        ]
      }
    ],
    ageSpecific: {
      'under18': ['Parent/guardian approval', 'Parent\'s residency documents accepted'],
      '14-18': ['Instruction permit requirements apply']
    }
  },
  // Vermont
  vermont: {
    citizen: [
      {
        category: 'Identity & Lawful Presence',
        documents: [
          'Certified U.S. birth certificate',
          'Valid U.S. passport',
          'Certificate of Naturalization',
          'Certificate of Citizenship',
          'Consular Report of Birth Abroad'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'W-2 form',
          '1099 form',
          'Pay stub with full SSN'
        ]
      },
      {
        category: 'Vermont Residency (2 documents)',
        documents: [
          'Utility bill',
          'Property tax bill',
          'Lease or landlord statement',
          'Vermont EBT card',
          'Insurance documents',
          'Bank statement'
        ]
      }
    ],
    nonCitizen: [
      {
        category: 'Identity & Lawful Presence',
        documents: [
          'Valid foreign passport with I-94',
          'Permanent Resident Card',
          'Employment Authorization Document'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'W-2 form',
          'Pay stub'
        ]
      },
      {
        category: 'Vermont Residency (2 documents)',
        documents: [
          'Utility bill',
          'Bank statement',
          'Lease agreement'
        ]
      }
    ],
    ageSpecific: {
      'under18': ['Parent/guardian signature', 'Proof of residency (parent\'s accepted)'],
      '15-18': ['Junior Driver\'s License (GDL)']
    }
  },
  // Wyoming
  wyoming: {
    citizen: [
      {
        category: 'Identity & Lawful Presence',
        documents: [
          'Certified U.S. birth certificate',
          'Valid U.S. passport',
          'Certificate of Naturalization',
          'Certificate of Citizenship',
          'Consular Report of Birth Abroad'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'W-2 form',
          '1099 form',
          'Payroll check stub'
        ]
      },
      {
        category: 'Wyoming Residency (2 documents)',
        documents: [
          'Utility bill',
          'Rent receipt',
          'Bank statement',
          'Vehicle registration',
          'Insurance policy',
          'Voter registration'
        ]
      }
    ],
    nonCitizen: [
      {
        category: 'Identity & Lawful Presence',
        documents: [
          'Valid foreign passport with I-94',
          'Permanent Resident Card',
          'Employment Authorization Document'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'W-2 form',
          'Payroll stub'
        ]
      },
      {
        category: 'Wyoming Residency (2 documents)',
        documents: [
          'Utility bill',
          'Bank statement',
          'Lease agreement'
        ]
      }
    ],
    ageSpecific: {
      'under18': ['Parent/guardian signature', 'Minor\'s driver license application'],
      '15-17': ['Intermediate license restrictions']
    }
  },
  // Washington DC
  'washington-dc': {
    citizen: [
      {
        category: 'Identity & Date of Birth',
        documents: [
          'Valid U.S. passport',
          'Certified U.S. birth certificate',
          'Consular Report of Birth Abroad',
          'Certificate of Naturalization',
          'Certificate of Citizenship'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'W-2 form',
          '1099 form',
          'Paystub with full SSN'
        ]
      },
      {
        category: 'DC Residency (2 documents)',
        documents: [
          'Utility bill',
          'Telephone bill',
          'Lease or rental agreement',
          'DC property tax bill',
          'Homeowner/Renter insurance policy',
          'DC vehicle registration'
        ]
      }
    ],
    nonCitizen: [
      {
        category: 'Identity & Lawful Presence',
        documents: [
          'Valid foreign passport with I-94',
          'Permanent Resident Card',
          'Employment Authorization Card'
        ]
      },
      {
        category: 'Social Security',
        documents: [
          'Social Security card',
          'W-2 form',
          '1099 form'
        ]
      },
      {
        category: 'DC Residency (2 documents)',
        documents: [
          'Utility bill',
          'Bank statement',
          'Lease agreement'
        ]
      }
    ],
    ageSpecific: {
      'under18': ['Parent/guardian signature', 'Graduated License Program (GRAD)'],
      '16-21': ['real estate license restrictions']
    }
  }
}

// Default requirements for states not specifically defined
const defaultRequirements: StateRequirements = {
  citizen: [
    {
      category: 'Identity',
      documents: [
        'Certified U.S. birth certificate',
        'Valid U.S. passport',
        'Certificate of Naturalization',
        'Certificate of Citizenship'
      ]
    },
    {
      category: 'Social Security',
      documents: [
        'Social Security card',
        'W-2 form',
        '1099 form',
        'Social Security Administration document'
      ]
    },
    {
      category: 'State Residency (2 documents)',
      documents: [
        'Utility bill',
        'Bank statement',
        'Rental or lease agreement',
        'Mortgage documents',
        'Voter registration card',
        'Vehicle registration'
      ]
    }
  ],
  nonCitizen: [
    {
      category: 'Identity & Immigration Status',
      documents: [
        'Valid foreign passport with I-94',
        'Permanent Resident Card',
        'Employment Authorization Document',
        'Valid visa documentation'
      ]
    },
    {
      category: 'Social Security',
      documents: [
        'Social Security card',
        'SSA ineligibility letter',
        'Individual Taxpayer Identification Number'
      ]
    },
    {
      category: 'State Residency (2 documents)',
      documents: [
        'Utility bill',
        'Bank statement',
        'Rental agreement',
        'School enrollment records'
      ]
    }
  ],
  ageSpecific: {
    'under18': ['Parent/guardian consent form', 'School enrollment verification']
  }
}

export function LicenseDocumentsPageContent() {
  const [formData, setFormData] = useState<FormData>({ state: '', age: '', citizenship: '' })
  const [showResults, setShowResults] = useState(false)
  const [requirements, setRequirements] = useState<DocumentRequirement[]>([])
  const [ageNotes, setAgeNotes] = useState<string[]>([])
  const [isStateDropdownOpen, setIsStateDropdownOpen] = useState(false)
  const [stateSearchQuery, setStateSearchQuery] = useState('')
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login')
  const [isPremiumLogin, setIsPremiumLogin] = useState(false)
  const [isRedirecting, setIsRedirecting] = useState(false)
  const [showExpiredModal, setShowExpiredModal] = useState(false)
  const [showPurchaseModal, setShowPurchaseModal] = useState(false)
  const [purchaseLoading, setPurchaseLoading] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const router = useRouter()
  const { user, userData, isPremium, isPremiumExpired, premiumStatus, signOut, loading } = useAuth()

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsStateDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const isFormValid = formData.state && formData.age && formData.citizenship

  const handleLogin = () => {
    setAuthMode('login')
    setIsPremiumLogin(true)
    setAuthModalOpen(true)
  }

  const handleSignup = () => {
    setAuthMode('signup')
    setIsPremiumLogin(false)
    setAuthModalOpen(true)
  }

  const handleDashboard = () => {
    if (isPremium) {
      router.push('/dashboard')
    } else if (user && userData && userData.isPremium && isPremiumExpired) {
      setShowExpiredModal(true)
    } else {
      setAuthMode('signup')
      setAuthModalOpen(true)
    }
  }

  const handleStateSelect = (stateKey: string) => {
    setFormData({ ...formData, state: stateKey })
    setIsStateDropdownOpen(false)
    setStateSearchQuery('')
  }

  // Filter states based on search query
  const filteredStates = Object.entries(STATES).filter(([key, state]) =>
    state.name.toLowerCase().includes(stateSearchQuery.toLowerCase()) ||
    state.code.toLowerCase().includes(stateSearchQuery.toLowerCase())
  )

  const handleCitizenshipSelect = (citizenship: 'citizen' | 'non-citizen') => {
    setFormData({ ...formData, citizenship })
  }

  const handleAgeChange = (age: string) => {
    setFormData({ ...formData, age })
  }

  const handleAuthSuccess = async (mode: 'login' | 'signup', result?: any) => {
    if (mode === 'signup' && result?.user) {
      setIsRedirecting(true)
      await createCheckoutSession(result.user.uid)
    } else {
      setAuthModalOpen(false)
      if (mode === 'login' && result?.userData) {
        if (result.userData.isPremium && isPremiumExpired) {
          setShowExpiredModal(true)
        } else if (result.userData.isPremium) {
          router.push('/dashboard')
        }
      }
    }
  }

  const createCheckoutSession = async (userId: string, duration: number = 90) => {
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: userId,
          state: 'california', // Default state
          duration: duration,
        }),
      })

      const data = await response.json()

      if (data.error) {
        console.error('Checkout error:', data.error)
        alert('Failed to create checkout session')
        setIsRedirecting(false)
        setAuthModalOpen(false)
        return
      }

      if (data.url) {
        window.location.href = data.url
      }
    } catch (error) {
      console.error('Error creating checkout session:', error)
      alert('An error occurred. Please try again.')
      setIsRedirecting(false)
      setAuthModalOpen(false)
    }
  }

  const handlePurchaseRenewal = () => {
    if (!user) {
      setAuthMode('signup')
      setAuthModalOpen(true)
      return
    }
    setShowPurchaseModal(true)
  }

  const handlePurchase = async (duration: number) => {
    if (!user) return

    setPurchaseLoading(true)
    try {
      await createCheckoutSession(user.uid, duration)
    } finally {
      setPurchaseLoading(false)
      setShowPurchaseModal(false)
    }
  }

  const generateRequirements = () => {
    if (!isFormValid) return

    const age = Number(formData.age)

    if (age < 14) {
      setAgeNotes(['You must be at least 14 years old to apply for a learner\'s permit in most states. Please check with your local Real Estate for specific hardship exceptions.'])
      setRequirements([])
      setShowResults(true)
      return
    }

    const stateData = stateRequirements[formData.state] || defaultRequirements
    const reqs = formData.citizenship === 'citizen' ? stateData.citizen : stateData.nonCitizen
    setRequirements(reqs)

    // Handle age-specific requirements
    const notes: string[] = []

    if (age < 18) {
      notes.push(...(stateData.ageSpecific['under18'] || []))
    }
    if (age < 21) {
      notes.push(...(stateData.ageSpecific['under21'] || []))
    }
    if (age >= 18 && age <= 24) {
      notes.push(...(stateData.ageSpecific['18-24'] || []))
    }
    if (age >= 16 && age <= 17) {
      notes.push(...(stateData.ageSpecific['16-17'] || []))
    }
    if (age >= 15 && age <= 15.5) {
      // specific logic if needed, but handled by state data map usually
      const specific = stateData.ageSpecific['15-15.5']
      if (specific) notes.push(...specific)
    }
    // Check for exact range matches in keys like "15.5-17.5"
    Object.keys(stateData.ageSpecific).forEach(key => {
      if (key.includes('-')) {
        const [min, max] = key.split('-').map(Number)
        if (!isNaN(min) && !isNaN(max) && age >= min && age <= max) {
          // Avoid adding if already added by hardcoded checks above if they overlap? 
          // The hardcoded ones above use specific keys. 
          // Let's just allow the map loop to handle dynamic keys if not handled above.
          // Actually, the keys '18-24' and '16-17' are standard.
          // '15.5-17.5' is in California.
          if (key !== '18-24' && key !== '16-17' && key !== 'under18' && key !== 'under21') {
            notes.push(...stateData.ageSpecific[key])
          }
        }
      }
    })

    setAgeNotes(notes)
    setShowResults(true)
  }

  const resetForm = () => {
    setFormData({ state: '', age: '', citizenship: '' })
    setShowResults(false)
    setRequirements([])
    setAgeNotes([])
  }

  const getQuantityInfo = (category: string) => {
    const quantityMatch = category.match(/\((\d+)\s*documents?\)/i)
    if (quantityMatch) {
      return {
        quantity: quantityMatch[1],
        cleanedCategory: category.replace(quantityMatch[0], '').trim()
      }
    }
    return {
      quantity: '1',
      cleanedCategory: category
    }
  }

  const selectedState = formData.state ? STATES[formData.state as StateKey] : null
  const stateGuideUrl = formData.state ? STATE_GUIDE_URLS[formData.state] : null

  return (
    <div className="min-h-screen bg-white">
      <Navigation
        user={user}
        userData={userData}
        isPremium={isPremium}
        isPremiumExpired={isPremiumExpired}
        premiumStatus={premiumStatus}
        onLogin={handleLogin}
        onSignup={handleSignup}
        onLogout={async () => { await signOut(); router.push('/') }}
        onDashboard={handleDashboard}
        onPurchaseRenewal={handlePurchaseRenewal}
        isLoading={loading}
        showGetPremiumLink
      />

      <main>
        {/* Animated Hero Section */}
        <div className="relative pt-20 pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl animate-pulse delay-700"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#007aff]/5 backdrop-blur-sm border border-[#007aff]/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
                <FileText className="w-4 h-4 text-[#007aff]" />
                <span className="text-sm font-medium text-gray-700">Official Requirements 2026</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                Get Your real estate exam
                <br />
                <span className="text-[#007aff]">Documents Ready</span>.
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                Everything you need for your real estate exam / Learner's License.
                Don't get turned away at the Real Estate - get your personalized checklist now.
                {selectedState && stateGuideUrl && (
                  <>
                    {' '}You may also want to check out our complete{' '}
                    <Link
                      href={stateGuideUrl}
                      className="text-[#007aff] font-bold relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-[#007aff] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                    >
                      {selectedState.name} State Guide
                    </Link>.
                  </>
                )}
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {!showResults ? (
                /* Premium Form Card */
                <Card className="bg-white/80 backdrop-blur-xl shadow-2xl border border-white/20 rounded-3xl overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent pointer-events-none"></div>
                  <CardContent className="p-8 md:p-12 relative z-10">
                    <div className="grid md:grid-cols-2 gap-8 mb-10">
                      {/* State Selection */}
                      <div className="col-span-2">
                        <label className="block text-sm font-bold text-gray-700 mb-3 ml-1">
                          SELECT YOUR STATE
                        </label>
                        <div className="relative" ref={dropdownRef}>
                          <button
                            type="button"
                            onClick={() => setIsStateDropdownOpen(!isStateDropdownOpen)}
                            className={`w-full p-4 border-2 rounded-2xl text-left flex items-center justify-between transition-all duration-300 group hover:border-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-100 ${formData.state ? 'bg-blue-50/50 border-blue-500' : 'bg-white border-gray-100'
                              }`}
                          >
                            <div className="flex items-center gap-4">
                              <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${formData.state ? 'bg-blue-100 text-2xl' : 'bg-gray-50 text-gray-400'
                                }`}>
                                {formData.state ? STATES[formData.state as StateKey]?.emoji : <MapPin className="w-6 h-6" />}
                              </div>
                              <div>
                                {formData.state ? (
                                  <>
                                    <div className="font-bold text-gray-900 text-lg">{STATES[formData.state as StateKey]?.name}</div>
                                    <div className="text-xs text-blue-600 font-medium tracking-wide">SELECTED</div>
                                  </>
                                ) : (
                                  <>
                                    <div className="font-bold text-gray-400 text-lg">Choose State</div>
                                    <div className="text-xs text-gray-400 font-medium tracking-wide">REQUIRED</div>
                                  </>
                                )}
                              </div>
                            </div>
                            <ChevronDown className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${isStateDropdownOpen ? 'rotate-180' : ''}`} />
                          </button>

                          {isStateDropdownOpen && (
                            <div className="absolute top-full left-0 right-0 mt-3 bg-white border border-gray-100 rounded-2xl shadow-2xl z-50 overflow-hidden ring-4 ring-black/5">
                              <div className="p-4 border-b border-gray-50 sticky top-0 bg-white/95 backdrop-blur z-10">
                                <div className="relative">
                                  <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                                  <input
                                    type="text"
                                    placeholder="Search states..."
                                    value={stateSearchQuery}
                                    onChange={(e) => setStateSearchQuery(e.target.value)}
                                    autoFocus
                                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-blue-500/20 text-gray-900 font-medium placeholder-gray-400"
                                  />
                                </div>
                              </div>
                              <div className="max-h-[300px] overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-gray-200">
                                <div className="grid grid-cols-1 gap-1">
                                  {filteredStates.map(([key, state]) => (
                                    <button
                                      key={key}
                                      type="button"
                                      onClick={() => handleStateSelect(key)}
                                      className="p-3 rounded-xl text-left hover:bg-blue-50 transition-colors duration-200 flex items-center justify-between group"
                                    >
                                      <div className="flex items-center gap-3">
                                        <span className="text-2xl w-8 text-center">{state.emoji}</span>
                                        <span className="font-bold text-gray-700 group-hover:text-blue-700">{state.name}</span>
                                      </div>
                                      {formData.state === key && <CheckCircle className="w-5 h-5 text-blue-600" />}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Age Input */}
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-3 ml-1">
                          YOUR AGE
                        </label>
                        <div className={`p-4 border-2 rounded-2xl transition-all duration-300 flex items-center gap-4 bg-white hover:border-blue-300 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100 ${formData.age ? 'border-blue-500 bg-blue-50/50' : 'border-gray-100'
                          }`}>
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${formData.age ? 'bg-blue-100 text-blue-600' : 'bg-gray-50 text-gray-400'
                            }`}>
                            <Calendar className="w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <input
                              type="number"
                              min="14"
                              max="99"
                              value={formData.age}
                              onChange={(e) => handleAgeChange(e.target.value)}
                              placeholder="Enter Age"
                              className="w-full bg-transparent border-none p-0 text-lg font-bold text-gray-900 placeholder-gray-400 focus:ring-0"
                            />
                            {formData.age ? (
                              <div className="text-xs text-blue-600 font-medium tracking-wide mt-1">YEARS OLD</div>
                            ) : (
                              <div className="text-xs text-gray-400 font-medium tracking-wide mt-1">REQUIRED</div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Citizenship */}
                      <div className="col-span-2 md:col-span-1">
                        <label className="block text-sm font-bold text-gray-700 mb-3 ml-1">
                          CITIZENSHIP
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          <button
                            type="button"
                            onClick={() => handleCitizenshipSelect('citizen')}
                            className={`p-4 rounded-2xl border-2 transition-all duration-300 text-center relative overflow-hidden ${formData.citizenship === 'citizen'
                              ? 'border-blue-500 bg-blue-50/50 text-blue-700 shadow-lg shadow-blue-500/10'
                              : 'border-gray-100 bg-white hover:border-blue-200 hover:bg-gray-50 text-gray-600'
                              }`}
                          >
                            <Shield className={`w-6 h-6 mx-auto mb-2 ${formData.citizenship === 'citizen' ? 'text-blue-600' : 'text-gray-400'}`} />
                            <div className="font-bold text-sm">US Citizen</div>
                          </button>
                          <button
                            type="button"
                            onClick={() => handleCitizenshipSelect('non-citizen')}
                            className={`p-4 rounded-2xl border-2 transition-all duration-300 text-center relative overflow-hidden ${formData.citizenship === 'non-citizen'
                              ? 'border-blue-500 bg-blue-50/50 text-blue-700 shadow-lg shadow-blue-500/10'
                              : 'border-gray-100 bg-white hover:border-blue-200 hover:bg-gray-50 text-gray-600'
                              }`}
                          >
                            <User className={`w-6 h-6 mx-auto mb-2 ${formData.citizenship === 'non-citizen' ? 'text-blue-600' : 'text-gray-400'}`} />
                            <div className="font-bold text-sm">Non-Citizen</div>
                          </button>
                        </div>
                      </div>
                    </div>

                    <Button
                      onClick={generateRequirements}
                      disabled={!isFormValid}
                      className="w-full py-8 text-xl font-bold bg-[#007aff] hover:bg-[#0056cc] text-white rounded-2xl shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40 hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:shadow-none"
                    >
                      Show My Requirements
                      <ArrowRight className="w-6 h-6 ml-3" />
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                /* Results Section */
                <div className="space-y-8 animate-slide-up">
                  <div className="flex items-center justify-between mb-8">
                    <button
                      onClick={resetForm}
                      className="flex items-center gap-2 text-gray-500 hover:text-blue-600 font-medium transition-colors pl-2"
                    >
                      <ArrowLeft className="w-5 h-5" />
                      Back to Selection
                    </button>
                    <div className="text-gray-500 font-medium">
                      {formData.age} years old <span className="mx-2 text-gray-300">|</span> {formData.citizenship === 'citizen' ? 'US Citizen' : 'Non-Citizen'}
                    </div>
                  </div>


                  {ageNotes.length > 0 && (
                    <div className="bg-orange-50/80 backdrop-blur-sm border border-orange-100 rounded-3xl p-6 md:p-8 relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-6 opacity-10">
                        <AlertTriangle className="w-32 h-32 text-orange-600" />
                      </div>
                      <div className="relative z-10">
                        <h3 className="text-xl font-bold text-orange-900 mb-4 flex items-center gap-3">
                          <AlertTriangle className="w-6 h-6 text-orange-600" />
                          Age-Specific Requirements
                        </h3>
                        <ul className="space-y-3">
                          {ageNotes.map((note, index) => (
                            <li key={index} className="flex items-start gap-3 text-orange-900/80 font-medium">
                              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2.5 flex-shrink-0" />
                              <span className="leading-relaxed">{note}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  <div className="grid gap-6">
                    {requirements.map((requirement, index) => {
                      const { quantity, cleanedCategory } = getQuantityInfo(requirement.category);
                      return (
                        <div
                          key={index}
                          className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-gray-200/50 border border-gray-100 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300"
                        >
                          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-start md:items-center gap-4">
                            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 font-bold text-xl border border-blue-100 flex-shrink-0">
                              {index + 1}
                            </div>
                            <div className="flex flex-col">
                              <span>{cleanedCategory}</span>
                              <span className="text-sm font-normal text-gray-500 mt-1">
                                Provide {quantity} document{quantity !== '1' ? 's' : ''} from the list below
                              </span>
                            </div>
                          </h3>

                          <div className="space-y-3 pl-0 md:pl-16">
                            {requirement.documents.map((doc, docIndex) => (
                              <div key={docIndex} className="flex items-start gap-3 group">
                                <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-emerald-100 transition-colors">
                                  <CheckCircle className="w-4 h-4" />
                                </div>
                                <span className="text-gray-600 font-medium group-hover:text-gray-900 transition-colors">
                                  {doc}
                                </span>
                              </div>
                            ))}

                            {requirement.note && (
                              <div className="mt-4 p-4 bg-blue-50/50 rounded-2xl text-blue-700 text-sm font-medium border border-blue-100 flex items-start gap-3">
                                <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <span className="text-xs font-bold">i</span>
                                </div>
                                {requirement.note}
                              </div>
                            )}
                          </div>
                        </div>
                      )
                    })}

                    <div className="bg-green-50/80 backdrop-blur-sm border border-green-100 rounded-3xl p-6 md:p-8 relative overflow-hidden">
                      <div className="relative z-10">
                        <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-3">
                          <CheckCircle className="w-6 h-6 text-green-600" />
                          Important Reminders
                        </h3>
                        <ul className="space-y-3">
                          {[
                            'All documents must be original or certified copies',
                            'Photocopies will not be accepted',
                            'Documents must be current and not expired',
                            'Bring extra copies in case of processing issues',
                            'Check with your local Real Estate for any recent requirement updates',
                            'Verify specific county requirements as they may vary'
                          ].map((reminder, index) => (
                            <li key={index} className="flex items-start gap-3 text-green-900/80 font-medium">
                              <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2.5 flex-shrink-0" />
                              <span className="leading-relaxed">{reminder}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-500 rounded-full blur-3xl opacity-20"></div>

                    <div className="relative z-10 max-w-2xl mx-auto">
                      <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready for your real estate exam?</h3>
                      <p className="text-gray-300 mb-8 text-lg">
                        You have the checklist. Now get the knowledge.
                        Practice with real 2026 Real Estate questions for {selectedState?.name}.
                      </p>
                      <Button
                        onClick={() => router.push(isPremium ? '/dashboard' : selectedState ? `/state/${formData.state}/free` : '/')}
                        className="bg-white text-gray-900 hover:bg-gray-50 font-bold px-10 py-6 text-lg rounded-2xl shadow-lg hover:scale-105 transition-all duration-300"
                      >
                        Start {selectedState?.name || 'Real Estate'} Practice Test
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-16 mb-16 text-center px-4">
          <div className="max-w-4xl mx-auto p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200">
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong className="text-gray-900">Legal Disclaimer:</strong> This tool provides general guidance based on standard state requirements.
              Requirements may vary by county, change over time, or have additional local specifications. Always verify current requirements
              with your local Real Estate office before visiting. This service is not affiliated with any government agency.
            </p>
            <p className="text-gray-600">
              Need to find a Real Estate near you? <Link href="/real-estate-near-me" className="text-[#007aff] font-bold relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-[#007aff] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Use our Real Estate Finder tool →</Link>
            </p>
          </div>
        </div>
      </main >

      <Footer />

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => {
          setAuthModalOpen(false)
          setIsRedirecting(false)
        }}
        mode={authMode}
        onSwitchMode={(mode: 'login' | 'signup') => {
          setAuthMode(mode)
          if (mode === 'signup') setIsPremiumLogin(false)
        }}
        onSuccess={handleAuthSuccess}
        isPremiumOnly={isPremiumLogin}
        isCheckoutFlow={authMode === 'signup' && (isPremiumLogin || !user)}
        isRedirecting={isRedirecting}
        closeOnSuccess={authMode !== 'signup' || !!user}
      />

      {/* Expired Premium Modal */}
      <ExpiredPremiumModal
        isOpen={showExpiredModal}
        onClose={() => setShowExpiredModal(false)}
        onRenew={async () => {
          if (!user) return
          await createCheckoutSession(user.uid)
        }}
      />

      {/* Purchase/Renewal Dialog */}
      <PurchaseRenewalDialog
        isOpen={showPurchaseModal}
        onClose={() => setShowPurchaseModal(false)}
        premiumStatus={premiumStatus}
        onPurchase={handlePurchase}
        isLoading={purchaseLoading}
      />
    </div >
  )
}