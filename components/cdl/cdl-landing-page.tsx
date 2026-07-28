'use client'

import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '@/contexts/auth-context'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { AuthModal } from '@/components/auth/auth-modal'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { isCdlPremiumExpired as checkIfCdlPremiumExpired } from '@/lib/firebase/auth'
import { ExpiredPremiumModal } from '@/components/auth/expired-premium-modal'
import { SocialProofNotifications } from '@/components/social-proof-notifications'
import { PremiumVideoModal } from '@/components/modals/premium-video-modal'
import { StateSelectorModal } from '@/components/state-selector-modal'
import { FlashSaleBanner } from '@/components/flash-sale-banner'
import { CdlStateData, CdlCategoryInfo } from '@/lib/types/cdl'
import { type StateKey } from '@/lib/constants'
import { stateResources } from '@/lib/data/state-resources'
import { STATE_MAJOR_CITIES } from '@/lib/data/state-cities'
import { CdlTestimonials } from './cdl-testimonials'
import { CdlReimbursement } from './cdl-reimbursement'
import { CdlStateSelector } from './cdl-state-selector'

const STATE_CDL_RESOURCES: Record<string, { applyUrl: string; medicalUrl: string }> = {
  california: {
    applyUrl: 'https://www.real-estate.ca.gov/portal/driver-licenses-identification-cards/commercial-driver-licenses-cdl/',
    medicalUrl: 'https://www.real-estate.ca.gov/portal/driver-licenses-identification-cards/commercial-driver-licenses-cdl/medical-examination-report-mer/'
  },
  texas: {
    applyUrl: 'https://www.dps.texas.gov/section/driver-license/commercial-driver-license-cdl',
    medicalUrl: 'https://www.dps.texas.gov/section/driver-license/commercial-driver-license-cdl-medical-certification-requirements'
  },
  florida: {
    applyUrl: 'https://www.flhsmv.gov/driver-licenses-id-cards/commercial-motor-vehicle-drivers/',
    medicalUrl: 'https://www.flhsmv.gov/driver-licenses-id-cards/commercial-motor-vehicle-drivers/commercial-driver-license-medical-info/'
  },
  'new-york': {
    applyUrl: 'https://real-estate.ny.gov/get-cdl',
    medicalUrl: 'https://real-estate.ny.gov/commercial-drivers/cdl-medical-certification-requirements'
  },
  washington: {
    applyUrl: 'https://www.dol.wa.gov/driver-licenses-and-permits/commercial-driver-licenses-cdl',
    medicalUrl: 'https://www.dol.wa.gov/driver-licenses-and-permits/commercial-driver-licenses-cdl/medical-certificates-cdl'
  },
  illinois: {
    applyUrl: 'https://www.ilsos.gov/departments/drivers/drivers_license/CDL/home.html',
    medicalUrl: 'https://www.ilsos.gov/departments/drivers/drivers_license/CDL/cdlmedicalcert.html'
  },
  pennsylvania: {
    applyUrl: 'https://www.real-estate.pa.gov/Driver-Services/Commercial-Driver/Pages/default.aspx',
    medicalUrl: 'https://www.real-estate.pa.gov/Driver-Services/Commercial-Driver/Pages/Medical-Reporting.aspx'
  },
  georgia: {
    applyUrl: 'https://dds.georgia.gov/commercial-driver-license-cdl',
    medicalUrl: 'https://dds.georgia.gov/commercial-drivers-medical-certification'
  },
  ohio: {
    applyUrl: 'https://www.bmv.ohio.gov/cdl.aspx',
    medicalUrl: 'https://www.bmv.ohio.gov/cdl-medical-cert.aspx'
  },
  'north-carolina': {
    applyUrl: 'https://www.ncdot.gov/real-estate/license-id/driver-licenses/commercial/Pages/default.aspx',
    medicalUrl: 'https://www.ncdot.gov/real-estate/license-id/driver-licenses/commercial/Pages/medical-certifications.aspx'
  }
}

import {
  Crown,
  Truck,
  Disc,
  Link as LinkIcon,
  ClipboardCheck,
  Flame,
  Users,
  Bus,
  Layers,
  Waves,
  Activity,
  ChevronRight,
  Star,
  Award,
  Shield,
  Clock,
  ArrowRight,
  CheckCircle,
  X,
  Loader2,
  AlertCircle,
  HelpCircle,
  Book,
  BookOpen,
  Map
} from 'lucide-react'

// Icon mapping helper
const iconMap: Record<string, any> = {
  Truck,
  Disc,
  Link: LinkIcon,
  ClipboardCheck,
  Flame,
  Users,
  Bus,
  Layers,
  Waves,
  Activity
}

interface CdlLandingPageProps {
  stateKey: string
  data: CdlStateData
  lang?: 'en' | 'pa'
}

interface Question {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  category: string
}
interface StudyStep {
  name: string
  categoryId: string
  description: string
}

interface GoalOption {
  id: string
  title: string
  subtitle: string
  iconType: 'letter' | 'icon'
  iconValue: string
  description: string
  steps: StudyStep[]
}

const categoryImages: Record<string, string> = {
  class_a: '/images/practice-tests/cdl_class_a.webp',
  class_b: '/images/practice-tests/cdl_class_b.webp',
  class_c: '/images/practice-tests/cdl_class_b.webp',
  air_brakes: '/images/practice-tests/cdl_air_brakes.webp',
  combination: '/images/practice-tests/cdl_combination.webp',
  pre_trip: '/images/practice-tests/cdl_pre_trip.webp',
  hazmat: '/images/practice-tests/cdl_hazmat.webp',
  passenger: '/images/practice-tests/cdl_passenger.webp',
  bus: '/images/practice-tests/cdl_school_bus.webp',
  double: '/images/practice-tests/cdl_double.webp',
  tank: '/images/practice-tests/cdl_tanker.webp',
  ambulance: '/images/practice-tests/cdl_ambulance.webp'
}

const categorySlugMap: Record<string, string> = {
  class_a: 'class-a',
  class_b: 'class-b',
  class_c: 'class-c',
  air_brakes: 'air-brakes',
  combination: 'combination-vehicles',
  pre_trip: 'pre-trip-inspection',
  hazmat: 'hazmat',
  passenger: 'passenger',
  bus: 'school-bus',
  double: 'double-triple-trailers',
  tank: 'tanker',
  ambulance: 'ambulance'
}

const goalOptions: GoalOption[] = [
  {
    id: 'class_a',
    title: 'Get Class A CDL',
    subtitle: 'Tractor-trailers, semis, 18-wheelers',
    iconType: 'letter',
    iconValue: 'A',
    description: "Prepare for the Class A written knowledge exams at the Real Estate to get your Commercial real estate license (CLP) with our comprehensive prep.",
    steps: [
      {
        name: 'General Knowledge',
        categoryId: 'class_a',
        description: 'Covers basic CDL rules, vehicle inspection, and safe driving'
      },
      {
        name: 'Air Brakes',
        categoryId: 'air_brakes',
        description: 'Required for any vehicle with air brakes'
      },
      {
        name: 'Combination Vehicles',
        categoryId: 'combination',
        description: 'Specific to tractor-trailer combinations'
      }
    ]
  },
  {
    id: 'class_b',
    title: 'Get Class B CDL',
    subtitle: 'Straight trucks, buses, dump trucks',
    iconType: 'letter',
    iconValue: 'B',
    description: "Prepare for the Class B written knowledge exams at the Real Estate to get your Commercial real estate license (CLP) with our comprehensive prep.",
    steps: [
      {
        name: 'General Knowledge',
        categoryId: 'class_b',
        description: 'Covers basic CDL rules, vehicle inspection, and safe driving'
      },
      {
        name: 'Air Brakes',
        categoryId: 'air_brakes',
        description: 'Required for straight trucks or buses with air brakes'
      }
    ]
  },
  {
    id: 'class_c',
    title: 'Get Class C CDL',
    subtitle: 'Passenger Vans, small Trucks',
    iconType: 'letter',
    iconValue: 'C',
    description: "Prepare for the General Knowledge exam to get your base Class C CDL, and study for any passenger or cargo endorsements.",
    steps: [
      {
        name: 'General Knowledge',
        categoryId: 'class_c',
        description: 'Covers basic CDL rules, vehicle inspection, and safe driving'
      },
      {
        name: 'Passenger Endorsement',
        categoryId: 'passenger',
        description: 'Required if transporting 16 or more occupants'
      }
    ]
  },
  {
    id: 'school_bus',
    title: 'Get School Bus endorsement',
    subtitle: 'Add to your existing CDL',
    iconType: 'icon',
    iconValue: 'Bus',
    description: "Add a School Bus (S) endorsement to operate school buses. Requires passing the written exam and a skills road test.",
    steps: [
      {
        name: 'School Bus',
        categoryId: 'bus',
        description: 'Rules for operating school buses, safety hazards, and student loading/unloading'
      },
      {
        name: 'Passenger Endorsement',
        categoryId: 'passenger',
        description: 'Required as a prerequisite for school bus drivers'
      }
    ]
  },
  {
    id: 'hazmat',
    title: 'Get HazMat endorsement',
    subtitle: 'Add to your existing CDL',
    iconType: 'icon',
    iconValue: 'Flame',
    description: "Add a Hazardous Materials (H) endorsement to transport placardable amounts of hazardous materials.",
    steps: [
      {
        name: 'Hazardous Materials',
        categoryId: 'hazmat',
        description: 'Handling, loading, shipping papers, placards, and emergency response rules'
      }
    ]
  },
  {
    id: 'passenger',
    title: 'Get Passenger endorsement',
    subtitle: 'Transit buses, tour buses, charter',
    iconType: 'icon',
    iconValue: 'Users',
    description: "Add a Passenger (P) endorsement to operate buses or transport 16 or more occupants (including the driver).",
    steps: [
      {
        name: 'Passenger Transport',
        categoryId: 'passenger',
        description: 'Bus inspection, safety procedures, passenger management, and loading zones'
      }
    ]
  }
]

interface HeroCopy {
  badgeText: string;
  headline: React.ReactNode;
  description: string;
}

function getHeroCopy(stateKey: string, stateName: string, deptName: string, lang = 'en'): HeroCopy {
  if (lang === 'pa') {
    return {
      badgeText: `ਪੰਜਾਬੀ ਵਿੱਚ ${stateName} CDL ਪਰਮਿਟ ਟੈਸਟ ਪਾਸ ਕਰੋ`,
      headline: (
        <>
          {stateName} CDL ਲਿਖਤੀ <br />
          <span className="text-[#007aff]">ਟੈਸਟ ਪਾਸ ਕਰੋ</span>
        </>
      ),
      description: `ਪਹਿਲੀ ਵਾਰ ਵਿੱਚ ਆਪਣੇ ${stateName} CDL ਪ੍ਰੀਖਿਆਵਾਂ ਪਾਸ ਕਰਨ ਲਈ ਤਿਆਰ ਹੋ ਜਾਓ। ਜਨਰਲ ਨਾਲੇਜ ਤੋਂ ਲੈ ਕੇ ਸਪੈਸ਼ਲ ਐਂਡੋਰਸਮੈਂਟਸ ਤੱਕ, ਸਾਡੀ ਵਿਆਪਕ ਤਿਆਰੀ ਪੈਕੇਜ ਤੁਹਾਡੀ ਮਦਦ ਲਈ ਤਿਆਰ ਕੀਤਾ ਗਿਆ ਹੈ।`
    };
  }

  const charSum = stateKey.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
  const index = charSum % 3;

  switch (index) {
    case 1:
      return {
        badgeText: `Pass Your ${stateName} CDL real estate exam`,
        headline: (
          <>
            Master the {stateName} <br />
            <span className="text-[#007aff]">CDL Written Test</span>
          </>
        ),
        description: `Get ready to pass your ${stateName} CDL exams on the first try. From General Knowledge to specialized endorsements, our comprehensive preparation package is designed to help you study and succeed today.`
      };
    case 2:
      return {
        badgeText: `${stateName} Commercial Driving Permit Prep`,
        headline: (
          <>
            Prepare for the {stateName} <br />
            <span className="text-[#007aff]">CDL Written Exam</span>
          </>
        ),
        description: `Don't leave your ${stateName} commercial real estate license to chance. Join thousands of drivers who have successfully prepared for their ${stateName} CDL using our state-specific questions and exam simulators.`
      };
    case 0:
    default:
      return {
        badgeText: "Updated for 2026 CDL Exams",
        headline: (
          <>
            Master the {stateName} <br />
            <span className="text-[#007aff]">CDL Written Test</span>
          </>
        ),
        description: `Imagine you are at the Real Estate and you know you will pass because you have already seen every question before. Complete Class A, Class B, and all endorsement modules under a single comprehensive package.`
      };
  }
}

interface FAQItem {
  question: string;
  answer: string;
}

function getDynamicFaqs(stateKey: string, stateName: string, deptName: string, lang = 'en'): FAQItem[] {
  if (lang === 'pa') {
    return [
      {
        question: `ਮੈਂ ${stateName} ਵਿੱਚ ਆਪਣਾ ਵਪਾਰਕ ਡ੍ਰਾਈਵਰ ਲਾਇਸੈਂਸ (CDL) ਕਿਵੇਂ ਪ੍ਰਾਪਤ ਕਰ ਸਕਦਾ ਹਾਂ?`,
        answer: `ਲਾਇਸੈਂਸ ਪ੍ਰਾਪਤ ਕਰਨ ਲਈ ਪਹਿਲਾਂ ਤੁਹਾਡੇ ਕੋਲ ਇੱਕ ਸਾਧਾਰਨ ਡ੍ਰਾਈਵਰ ਲਾਇਸੈਂਸ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ। ਫਿਰ, DOT ਸਰੀਰਕ ਜਾਂਚ ਪਾਸ ਕਰੋ ਅਤੇ ਮੈਡੀਕਲ ਸਰਟੀਫਿਕੇਟ ਪ੍ਰਾਪਤ ਕਰੋ। ਇਸ ਤੋਂ ਬਾਅਦ, CLP ਪ੍ਰਾਪਤ ਕਰਨ ਲਈ ਲਿਖਤੀ ਪ੍ਰੀਖਿਆ ਪਾਸ ਕਰੋ ਅਤੇ ਅੰਤ ਵਿੱਚ ਰੋਡ ਟੈਸਟ ਪਾਸ ਕਰੋ।`
      },
      {
        question: `ਕੀ CLP ਪ੍ਰਾਪਤ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ELDT ਸਿਖਲਾਈ ਜ਼ਰੂਰੀ ਹੈ?`,
        answer: `ਨਹੀਂ, CLP ਪ੍ਰਾਪਤ ਕਰਨ ਲਈ ਲਿਖਤੀ ਪ੍ਰੀਖਿਆ ਦੇਣ ਤੋਂ ਪਹਿਲਾਂ ELDT ਦੀ ਲੋੜ ਨਹੀਂ ਹੈ। ਹਾਲਾਂਕਿ, ਰੋਡ ਟੈਸਟ ਬੁੱਕ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਇਹ ਟ੍ਰੇਨਿੰਗ ਪੂਰੀ ਕਰਨੀ ਲਾਜ਼ਮੀ ਹੈ।`
      },
      {
        question: `ਕਲਾਸ A ਅਤੇ ਕਲਾਸ B CDL ਵਿੱਚ ਕੀ ਅੰਤਰ ਹੈ?`,
        answer: `ਕਲਾਸ A ਲਾਇਸੈਂਸ ਵੱਡੇ ਟ੍ਰੈਕਟਰ-ਟ੍ਰੇਲਰਾਂ ਲਈ ਹੁੰਦਾ ਹੈ ਜਿਨ੍ਹਾਂ ਦਾ ਕੁੱਲ ਭਾਰ 26,001 ਪੌਂਡ ਤੋਂ ਵੱਧ ਹੋਵੇ ਅਤੇ ਟੋਅ ਕੀਤਾ ਜਾ ਰਿਹਾ ਵਾਹਨ 10,000 ਪੌਂਡ ਤੋਂ ਵੱਧ ਹੋਵੇ। ਕਲਾਸ B ਲਾਇਸੈਂਸ ਸਿੰਗਲ ਭਾਰੀ ਵਾਹਨਾਂ (ਜਿਵੇਂ ਬੱਸਾਂ, ਡੰਪ ਟਰੱਕਾਂ) ਲਈ ਹੁੰਦਾ ਹੈ।`
      }
    ];
  }

  const charSum = stateKey.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
  const index = charSum % 3;

  switch (index) {
    case 1:
      return [
        {
          question: `How do I obtain my Commercial Driver's License (CDL) in ${stateName}?`,
          answer: `Fulfilling the ${stateName} CDL requirements involves several key milestones. First, ensure you hold a valid non-commercial real estate license. Next, you must pass a DOT physical and receive a Medical Examiner's Certificate. Following that, you'll need to pass the required written knowledge exams at a local ${deptName} location to earn your Commercial real estate license (CLP). Finally, complete the mandatory Entry-Level Driver Training (ELDT) before scheduling and passing your CDL skills road exam.`
        },
        {
          question: `Is the FMCSA Entry-Level Driver Training (ELDT) class required before I get a CLP?`,
          answer: `No. You do not need to take or finish the ELDT course prior to taking the written tests for a Commercial real estate license (CLP) in ${stateName}. However, before you can book your final commercial behind-the-wheel skills road exam, the ${deptName} will verify that you have completed both the theory and behind-the-wheel portions of an approved ELDT program.`
        },
        {
          question: `What distinguishes Class A from Class B CDL permits in ${stateName}?`,
          answer: `Class A licenses authorize you to drive combination vehicles with a Gross Combination Weight Rating (GCWR) of 26,001 pounds or more, provided the vehicle being towed is over 10,000 pounds (e.g., tractor-trailers, flatbeds). A Class B license is for operating single heavy vehicles with a Gross Vehicle Weight Rating (GVWR) of 26,001 pounds or more, or towing trailers under 10,000 pounds (e.g., box trucks, dump trucks, cement mixers, passenger buses).`
        },
        {
          question: `How many questions should I expect on the ${stateName} CDL real estate exams?`,
          answer: `The number of questions depends on the specific modules. The General Knowledge permit exam features 50 questions (requiring 40 correct to pass). The Air Brakes test has 25 questions (requiring 20 correct), and the Combination Vehicles exam consists of 20 questions (requiring 16 correct). Most endorsement exams, including Hazmat and School Bus, contain 20 to 30 questions. All tests require an 80% passing score.`
        },
        {
          question: `Does the CDL written exam test the Pre-Trip Inspection?`,
          answer: `No. The Pre-Trip Inspection is a practical test performed in-person with a Real Estate/DPS examiner as part of your skills road exam. However, it requires a lot of memorization of engine, suspension, and braking components. Our CDL Pre-Trip inspection question bank helps you study and memorize exactly what mechanical points to inspect and the specific defects to vocalize to your examiner.`
        }
      ];
    case 2:
      return [
        {
          question: `What is the process for getting a CDL in the state of ${stateName}?`,
          answer: `To secure your ${stateName} Commercial Driver's License, you must follow this path: (1) Hold a standard ${stateName} real estate license. (2) Receive a DOT medical card from a certified medical examiner. (3) Take and pass the CDL written knowledge tests at the ${deptName} to receive a Commercial real estate license (CLP). (4) Complete an FMCSA-registered Entry-Level Driver Training (ELDT) program. (5) Pass the final CDL skills test, which includes pre-trip inspection, backing maneuvers, and road driving.`
        },
        {
          question: `Can I get my ${stateName} CLP permit before taking ELDT training?`,
          answer: `Yes, you are allowed to obtain your Commercial real estate license (CLP) by passing the written tests before you start your Entry-Level Driver Training (ELDT). The ELDT training must be completed and registered in the federal training provider registry before you are eligible to take your CDL skills road test.`
        },
        {
          question: `What are the vehicle weight limits for Class A vs Class B in ${stateName}?`,
          answer: `Class A applies to combination vehicles where the combined weight rating is 26,001+ lbs and the trailer weighs more than 10,000 lbs (such as flatbeds or tractor-trailers). Class B is for single vehicles weighing 26,001+ lbs, or towing a trailer under 10,000 lbs (such as straight delivery trucks, city buses, and dump trucks).`
        },
        {
          question: `What is the format and passing score of the ${stateName} CDL exams?`,
          answer: `All CDL tests are multiple-choice. The General Knowledge test is 50 questions (40+ correct needed), Air Brakes has 25 questions (20+ correct needed), and Combination Vehicles has 20 questions (16+ correct needed). Endorsements range from 20 to 30 questions. All written tests require a passing score of 80% or higher.`
        },
        {
          question: `How does the CDL Pre-Trip Inspection test work?`,
          answer: `The Pre-Trip Inspection is not a written exam but a verbal test during your commercial skills road exam. You must walk around a commercial vehicle and inspect the engine compartment, steering, suspension, air brakes, and cab safety features while explaining your actions to the examiner. We provide a specialized study module to help you master the verbal checklist.`
        }
      ];
    case 0:
    default:
      return [
        {
          question: `What are the requirements to get a CDL in ${stateName}?`,
          answer: `To apply for a ${stateName} Commercial Driver's License (CDL), you must: (1) hold a valid non-commercial real estate license, (2) pass a DOT physical and obtain a Medical Examiner's Certificate, (3) verify your identity and residency, (4) pass the required CDL written knowledge tests at the ${deptName} to receive a Commercial real estate license (CLP), (5) complete mandatory FMCSA-approved Entry-Level Driver Training (ELDT), and (6) pass the CDL skills test (Pre-Trip Inspection, Yard Skills, and Road Driving).`
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
      ];
  }
}

export function CdlLandingPage({ stateKey, data, lang = 'en' }: CdlLandingPageProps) {
  const router = useRouter()
  const { user, userData, isCdlPremium: isPremium, isCdlPremiumExpired, cdlPremiumStatus, signOut, loading: authLoading } = useAuth()

  // Dynamic content calculations
  const heroCopy = getHeroCopy(stateKey, data.stateName || 'California', data.departmentName || 'Real Estate', lang)
  const dynamicFaqs = getDynamicFaqs(stateKey, data.stateName || 'California', data.departmentName || 'Real Estate', lang)
  const stateCities = STATE_MAJOR_CITIES[stateKey as StateKey] || []

  const t = (enText: string) => {
    if (lang === 'pa') {
      const paStrings: Record<string, string> = {
        "Your Path to Commercial Driving": "ਵਪਾਰਕ ਡ੍ਰਾਈਵਿੰਗ ਦਾ ਤੁਹਾਡਾ ਰਸਤਾ",
        "Select your license class or endorsement to generate your personalized study plan.": "ਆਪਣੀ ਲਾਇਸੈਂਸ ਸ਼੍ਰੇਣੀ ਜਾਂ ਐਂਡੋਰਸਮੈਂਟ ਚੁਣੋ।",
        "Interactive Test:": "ਇੰਟਰਐਕਟਿਵ ਟੈਸਟ:",
        "Practice 10 real CDL permit exam questions below. Change test category from the list above.": "ਹੇਠਾਂ 10 ਅਸਲੀ CDL ਪਰਮਿਟ ਪ੍ਰੀਖਿਆ ਪ੍ਰਸ਼ਨਾਂ ਦਾ ਅਭਿਆਸ ਕਰੋ। ਸ਼੍ਰੇਣੀ ਬਦਲਣ ਲਈ ਉੱਪਰ ਦਿੱਤੀ ਸੂਚੀ ਦੀ ਵਰਤੋਂ ਕਰੋ।",
        "Loading questions...": "ਪ੍ਰਸ਼ਨ ਲੋਡ ਹੋ ਰਹੇ ਹਨ...",
        "Get School Bus endorsement": "ਸਕੂਲ ਬੱਸ ਐਂਡੋਰਸਮੈਂਟ ਪ੍ਰਾਪਤ ਕਰੋ",
        "Add to your existing CDL": "ਆਪਣੇ ਮੌਜੂਦਾ CDL ਵਿੱਚ ਜੋੜੋ",
        "Get HazMat endorsement": "ਖ਼ਤਰਨਾਕ ਸਮੱਗਰੀ (HazMat) ਐਂਡੋਰਸਮੈਂਟ ਪ੍ਰਾਪਤ ਕਰੋ",
        "Reset": "ਦੁਬਾਰਾ ਚੁਣੋ",
        "General Knowledge": "ਜਨਰਲ ਨਾਲੇਜ (General Knowledge)",
        "Covers basic CDL rules, vehicle inspection, and safe driving": "ਬੁਨਿਆਦੀ CDL ਨਿਯਮ, ਵਾਹਨ ਨਿਰੀਖਣ ਅਤੇ ਸੁਰੱਖਿਅਤ ਡਰਾਈਵਿੰਗ",
        "Air Brakes": "ਏਅਰ ਬ੍ਰੇਕਸ (Air Brakes)",
        "Required for any vehicle with air brakes": "ਏਅਰ ਬ੍ਰੇਕ ਵਾਲੇ ਕਿਸੇ ਵੀ ਵਾਹਨ ਲਈ ਲਾਜ਼ਮੀ",
        "Combination Vehicles": "ਕੰਬੀਨੇਸ਼ਨ ਵਾਹਨ (Combination Vehicles)",
        "Specific to tractor-trailer combinations": "ਟ੍ਰੈਕਟਰ-ਟ੍ਰੇਲਰ ਕੰਬੀਨੇਸ਼ਨ ਲਈ ਵਿਸ਼ੇਸ਼",
        "Required for straight trucks or buses with air brakes": "ਏਅਰ ਬ੍ਰੇਕ ਵਾਲੇ ਸਿੱਧੇ ਟਰੱਕਾਂ ਜਾਂ ਬੱਸਾਂ ਲਈ ਲਾਜ਼ਮੀ",
        "Passenger Endorsement": "ਯਾਤਰੀ ਐਂਡੋਰਸਮੈਂਟ (Passenger Endorsement)",
        "Required if transporting 16 or more occupants": "ਜੇਕਰ 16 ਜਾਂ ਵੱਧ ਯਾਤਰੀਆਂ ਨੂੰ ਲਿਜਾਣਾ ਹੋਵੇ",
        "School Bus": "ਸਕੂਲ ਬੱਸ (School Bus)",
        "Rules for operating school buses, safety hazards, and student loading/unloading": "ਸਕੂਲ ਬੱਸਾਂ ਚਲਾਉਣ ਦੇ ਨਿਯਮ, ਸੁਰੱਖਿਆ ਖਤਰੇ ਅਤੇ ਵਿਦਿਆਰਥੀਆਂ ਨੂੰ ਚੜ੍ਹਾਉਣਾ/ਉਤਾਰਨਾ",
        "Required as a prerequisite for school bus drivers": "ਸਕੂਲ ਬੱਸ ਡਰਾਈਵਰਾਂ ਲਈ ਪੂਰਵ-ਲੋੜ ਵਜੋਂ ਲਾਜ਼ਮੀ",
        "Hazardous Materials": "ਖ਼ਤਰਨਾਕ ਸਮੱਗਰੀ (Hazardous Materials)",
        "Handling, loading, shipping papers, placards, and emergency response rules": "ਹੈਂਡਲਿੰਗ, ਲੋਡਿੰਗ, ਸ਼ਿਪਿੰਗ ਕਾਗਜ਼ਾਤ, ਪਲੇਕਾਰਡ ਅਤੇ ਐਮਰਜੈਂਸੀ ਪ੍ਰਤੀਕਿਰਿਆ ਨਿਯਮ",
        "🏛️ Official Real Estate Links": "🏛️ ਅਧਿਕਾਰਤ Real Estate ਲਿੰਕ",
        "Medical Examination Report Info": "ਮੈਡੀਕਲ ਪ੍ਰੀਖਿਆ ਰਿਪੋਰਟ ਦੀ ਜਾਣਕਾਰੀ",
        "Access Medical Examiner requirements, find certified doctors, and learn how to submit your MER (Form MCSA-5876).": "ਮੈਡੀਕਲ ਪ੍ਰੀਖਿਅਕ ਲੋੜਾਂ ਤੱਕ ਪਹੁੰਚ ਕਰੋ, ਪ੍ਰਮਾਣਿਤ ਡਾਕਟਰ ਲੱਭੋ, ਅਤੇ ਆਪਣੀ MER ਜਮ੍ਹਾਂ ਕਰਾਉਣ ਬਾਰੇ ਸਿੱਖੋ।",
        "Book an appointment online for your written CDL knowledge test or commercial behind-the-wheel skills test.": "ਆਪਣੇ ਲਿਖਤੀ ਟੈਸਟ ਜਾਂ ਰੋਡ ਸਕਿੱਲ ਟੈਸਟ ਲਈ ਆਨਲਾਈਨ ਮੁਲਾਕਾਤ ਬੁੱਕ ਕਰੋ।",
        "Frequently Asked Questions": "ਅਕਸਰ ਪੁੱਛੇ ਜਾਣ ਵਾਲੇ ਸਵਾਲ",
        "All-Access Pass": "ਸਭ-ਪਹੁੰਚ ਪਾਸ",
        "Pass on the First Try": "ਪਹਿਲੀ ਵਾਰ ਵਿੱਚ ਪਾਸ ਕਰੋ",
        "90 days access": "90 ਦਿਨਾਂ ਦੀ ਪਹੁੰਚ",
        "One-time payment": "ਇੱਕ ਵਾਰ ਭੁਗਤਾਨ",
        "Pass Guarantee": "ਪਾਸ ਹੋਣ ਦੀ ਗਰੰਟੀ",
        "Test Locations": "ਟੈਸਟ ਦੇ ਸਥਾਨ",
        "Important:": "ਮਹੱਤਵਪੂਰਨ:",
        "Unlock All-Access Pass": "ਸਭ-ਪਹੁੰਚ ਪਾਸ ਅਨਲੌਕ ਕਰੋ",
        "Start Your Commercial Driving Career": "ਆਪਣਾ ਵਪਾਰਕ ਡ੍ਰਾਈਵਿੰਗ ਕਰੀਅਰ ਸ਼ੁਰੂ ਕਰੋ",
        "Pass your CDL exams on the first try, guaranteed.": "ਪਹਿਲੀ ਵਾਰ ਵਿੱਚ ਆਪਣੇ CDL ਪ੍ਰੀਖਿਆਵਾਂ ਪਾਸ ਕਰਨ ਦੀ ਗਰੰਟੀ।",
        "What's your CDL goal?": "ਤੁਹਾਡਾ CDL ਟੀਚਾ ਕੀ ਹੈ?",
        "Get Class A CDL": "ਕਲਾਸ A CDL ਪ੍ਰਾਪਤ ਕਰੋ",
        "Tractor-trailers, semis, 18-wheelers": "ਟ੍ਰੈਕਟਰ-ਟ੍ਰੇਲਰ, ਸੈਮੀ, 18-ਵ੍ਹੀਲਰ",
        "Get Class B CDL": "ਕਲਾਸ B CDL ਪ੍ਰਾਪਤ ਕਰੋ",
        "Straight trucks, buses, dump trucks": "ਸਿੱਧੇ ਟਰੱਕ, ਬੱਸਾਂ, ਡੰਪ ਟਰੱਕ",
        "Get Class C CDL": "ਕਲਾਸ C CDL ਪ੍ਰਾਪਤ ਕਰੋ",
        "Passenger Vans, small Trucks": "ਯਾਤਰੀ ਵੈਨਾਂ, ਛੋਟੇ ਟਰੱਕ"
      }
      return paStrings[enText] || enText
    }
    return enText
  }

  const translateCategoryName = (name: string) => {
    if (lang === 'pa') {
      const mappings: Record<string, string> = {
        "General Knowledge": "ਜਨਰਲ ਨਾਲੇਜ (General Knowledge)",
        "Class A General Knowledge": "ਕਲਾਸ A ਜਨਰਲ ਨਾਲੇਜ",
        "Class B General Knowledge": "ਕਲਾਸ B ਜਨਰਲ ਨਾਲੇਜ",
        "Class C General Knowledge": "ਕਲਾਸ C ਜਨਰਲ ਨਾਲੇਜ",
        "Air Brakes": "ਏਅਰ ਬ੍ਰੇਕਸ (Air Brakes)",
        "Combination Vehicles": "ਕੰਬੀਨੇਸ਼ਨ ਵਾਹਨ (Combination Vehicles)",
        "Pre-Trip Inspection": "ਪ੍ਰੀ-ਟ੍ਰਿਪ ਨਿਰੀਖਣ (Pre-Trip Inspection)",
        "Hazardous Materials (HazMat)": "ਖ਼ਤਰਨਾਕ ਸਮੱਗਰੀ (HazMat)",
        "Passenger Transport": "ਯਾਤਰੀ ਆਵਾਜਾਈ (Passenger Transport)",
        "School Bus": "ਸਕੂਲ ਬੱਸ (School Bus)",
        "Double / Triple Trailers": "ਡਬਲ / ਟ੍ਰਿਪਲ ਟ੍ਰੇਲਰ (Double / Triple)",
        "Tanker Vehicles": "ਟੈਂਕਰ ਵਾਹਨ (Tanker Vehicles)",
        "California CDL Ambulance": "ਕੈਲੀਫੋਰਨੀਆ CDL ਐਂਬੂਲੈਂਸ"
      }
      return mappings[name] || name
    }
    return name
  }

  // State variables
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null)
  const [activeFilters, setActiveFilters] = useState<string[]>(['class_a'])
  const [selectedCategory, setSelectedCategory] = useState<CdlCategoryInfo>(data.categories[0])
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([])
  const [loadingQuestions, setLoadingQuestions] = useState(false)
  const [fetchError, setFetchError] = useState<string | null>(null)

  const [showExpiredModal, setShowExpiredModal] = useState(false)
  const [stateModalOpen, setStateModalOpen] = useState(false)
  const [showVideoModal, setShowVideoModal] = useState(false)
  const [showBanner, setShowBanner] = useState(true)
  const [isRedirecting, setIsRedirecting] = useState(false)

  const toggleFilter = (filter: string) => {
    setActiveFilters([filter])
  }
  
  // Interactive Quiz State
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [quizComplete, setQuizComplete] = useState(false)

  const [purchaseLoading, setPurchaseLoading] = useState(false)
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login')
  const [isPremiumLogin, setIsPremiumLogin] = useState(false)

  const quizWidgetRef = useRef<HTMLDivElement>(null)

  // Load questions for the selected category
  useEffect(() => {
    async function fetchQuestions() {
      setLoadingQuestions(true)
      setFetchError(null)
      resetQuizState()

      try {
        const res = await fetch(`/api/cdl/questions?state=${stateKey}&category=${selectedCategory.id}&lang=${lang}`)
        if (!res.ok) {
          throw new Error('Failed to load questions')
        }
        const apiData = await res.json()
        setQuizQuestions(apiData.questions)
      } catch (err) {
        setFetchError('Failed to load practice questions. Please try again.')
        console.error(err)
      } finally {
        setLoadingQuestions(false)
      }
    }

    fetchQuestions()
  }, [selectedCategory, stateKey])

  const resetQuizState = () => {
    setCurrentQuestionIndex(0)
    setSelectedOption(null)
    setIsAnswered(false)
    setScore(0)
    setQuizComplete(false)
  }

  // Create Stripe checkout session
  const createCheckoutSession = async (userId: string, duration: number) => {
    setIsRedirecting(true)
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: userId,
          state: stateKey,
          duration: duration,
          product: 'cdl_premium'
        }),
      })

      const checkoutData = await response.json()

      if (checkoutData.error) {
        console.error('Checkout error:', checkoutData.error)
        alert('Failed to initiate checkout session')
        setIsRedirecting(false)
        setAuthModalOpen(false)
        return
      }

      if (checkoutData.url) {
        window.location.href = checkoutData.url
      }
    } catch (err) {
      console.error('Error creating checkout session:', err)
      alert('An error occurred. Please try again.')
      setIsRedirecting(false)
      setAuthModalOpen(false)
    }
  }

  // Handle checking out
  const handleCheckout = async () => {
    if (!user) {
      setAuthMode('signup')
      setIsPremiumLogin(false)
      setAuthModalOpen(true)
      return
    }

    setPurchaseLoading(true)
    await createCheckoutSession(user.uid, data.pricing.duration)
    setPurchaseLoading(false)
  }

  const handleOptionSelect = (optionIndex: number) => {
    if (isAnswered) return
    setSelectedOption(optionIndex)
    setIsAnswered(true)

    const currentQuestion = quizQuestions[currentQuestionIndex]
    const isCorrect = optionIndex === currentQuestion.correctAnswer

    if (isCorrect) {
      setScore(prev => prev + 1)
    }
  }

  const handleNextQuestion = () => {
    setSelectedOption(null)
    setIsAnswered(false)

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1)
    } else {
      setQuizComplete(true)
    }
  }

  const scrollToQuiz = (category: CdlCategoryInfo) => {
    setSelectedCategory(category)
    if (quizWidgetRef.current) {
      quizWidgetRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  const scrollToPremium = () => {
    const premiumSection = document.getElementById('premium-section')
    if (premiumSection) {
      premiumSection.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  const handleLogin = () => {
    const currentPath = typeof window !== 'undefined' ? window.location.pathname : ''
    router.push(`/login${currentPath ? `?redirect=${encodeURIComponent(currentPath)}` : ''}`)
  }

  const handleSignup = () => {
    setAuthMode('signup')
    setIsPremiumLogin(false)
    setAuthModalOpen(true)
  }

  const handleAuthSuccess = async (mode: 'login' | 'signup', result?: any) => {
    if (mode === 'signup' && result?.user) {
      await createCheckoutSession(result.user.uid, data.pricing.duration)
    } else {
      setAuthModalOpen(false)
      if (mode === 'login' && result?.userData) {
        if (result.userData.isCdlPremium && checkIfCdlPremiumExpired(result.userData)) {
          setShowExpiredModal(true)
        } else if (result.userData.isCdlPremium) {
          router.push('/dashboard')
        }
      }
    }
  }

  const handleStateChange = (selectedState: StateKey) => {
    router.push(`/${selectedState}-cdl-permit-test`)
  }

  const getUserDisplayName = () => {
    if (userData?.firstName && userData?.lastName) {
      return `${userData.firstName} ${userData.lastName}`
    }
    return user?.displayName || user?.email?.split('@')[0] || 'User'
  }

  const handleDashboard = () => {
    if (isPremium) {
      router.push('/dashboard')
    } else if (user && userData && userData.isCdlPremium && isCdlPremiumExpired) {
      setShowExpiredModal(true)
    } else {
      setAuthMode('signup')
      setAuthModalOpen(true)
    }
  }

  const handleStepClick = (categoryId: string) => {
    const slug = categorySlugMap[categoryId]
    if (slug) {
      const url = lang === 'pa'
        ? `/${stateKey}-${slug}-cdl-permit-test/punjabi`
        : `/${stateKey}-${slug}-cdl-permit-test`
      window.open(url, '_blank')
    }
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.5;
          }
        }
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>

      {/* Banner */}
      {showBanner && (
        <FlashSaleBanner
          onClose={() => setShowBanner(false)}
          onClick={scrollToPremium}
          sticky={false}
        />
      )}

      {/* Navigation Bar */}
      <div className="sticky top-0 z-50">
        <Navigation
          user={user}
          userData={userData}
          isPremium={isPremium}
          isPremiumExpired={isCdlPremiumExpired}
          premiumStatus={cdlPremiumStatus}
          isLoading={authLoading}
          onLogin={handleLogin}
          onSignup={handleSignup}
          onLogout={async () => {
            await signOut()
            router.refresh()
          }}
          onDashboard={handleDashboard}
          onPurchaseRenewal={handleCheckout}
          premiumButtonText="Unlock All CDL Questions"
          premiumButtonAction={scrollToPremium}
          currentState={stateKey as any}
          currentLicenseType="cdl"
          hidePremiumButton={true}
          onSelectState={() => setStateModalOpen(true)}
          languageToggleUrl={['california', 'texas', 'florida', 'new-york'].includes(stateKey) ? (lang === 'pa' ? `/${stateKey}-cdl-permit-test` : `/cdl-permit-test/${stateKey}/punjabi`) : undefined}
          languageToggleText={['california', 'texas', 'florida', 'new-york'].includes(stateKey) ? (lang === 'pa' ? "Switch to English" : "Switch to Punjabi (ਪੰਜਾਬੀ)") : undefined}
          currentLanguage={lang}
        />
      </div>

      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-[#007aff] cursor-pointer transition-colors duration-200">
              {t("Home")}
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link href="/#states" className="hover:text-[#007aff] cursor-pointer transition-colors duration-200">
              {lang === 'pa' ? 'ਰਾਜ' : 'States'}
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-900 font-medium">{data.stateName || 'California'}</span>
            {lang === 'pa' && (
              <>
                <ChevronRight className="w-4 h-4 mx-2" />
                <span className="text-gray-900 font-medium">ਪੰਜਾਬੀ (Punjabi)</span>
              </>
            )}
          </div>
        </div>
      </div>

      <main>
        {/* Hero Section */}
        <section className="relative pt-6 pb-12 md:pt-12 md:pb-20 overflow-hidden">
          {/* Subtle, beautiful background blur blobs */}
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-100/30 rounded-full blur-3xl animate-pulse delay-700 pointer-events-none"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
              {/* Left Column: Text */}
              <div className="text-left lg:-mt-2">
                <div className="inline-flex items-center gap-2 bg-[#007aff]/5 backdrop-blur-sm border border-[#007aff]/20 rounded-full px-4 py-2 mb-8 mt-16 md:mt-0 animate-fade-in">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-medium text-gray-700">{heroCopy.badgeText}</span>
                  <span className="text-gray-300 select-none hidden md:inline">•</span>
                  <span className="text-sm font-semibold text-[#007aff] hidden md:inline">{t("99.2% Pass Rate")}</span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-4 md:mb-6 animate-fade-in-up delay-100 leading-tight md:leading-tight lg:leading-tight">
                  {heroCopy.headline}
                </h1>

                <p className="text-base lg:text-lg text-gray-600 mb-6 md:mb-8 lg:mb-10 max-w-2xl lg:max-w-none animate-fade-in-up delay-200">
                  {heroCopy.description}
                </p>

                <div className="flex flex-col gap-4 items-start animate-fade-in-up delay-300 max-w-md mx-0">
                  <Button
                    onClick={() => {
                      const el = document.getElementById('categories-section')
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                      }
                    }}
                    size="lg"
                    className="bg-[#007aff] hover:bg-[#0056cc] text-white font-semibold px-4 md:px-6 py-3 md:py-4 text-base md:text-lg rounded-lg md:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full"
                  >
                    {t("Try FREE Practice Tests")}
                  </Button>
                  <div className="w-full text-center">
                    <p className="text-xs text-gray-500 mb-2">{t("No signup required • No ads • Start immediately")}</p>
                  </div>
                  <Button
                    onClick={scrollToPremium}
                    variant="outline"
                    size="lg"
                    className="border-2 border-[#007aff] text-[#007aff] hover:bg-[#007aff]/10 hover:text-[#007aff] font-semibold px-4 md:px-6 py-3 md:py-4 text-base md:text-lg rounded-lg md:rounded-xl transition-all duration-300 w-full"
                  >
                    <Crown className="w-5 h-5 mr-2" />
                    {lang === 'pa' ? `ਸਭ-ਪਹੁੰਚ ਪਾਸ ਅਨਲੌਕ ਕਰੋ ($${data.pricing.price})` : `Unlock All-Access Pass ($${data.pricing.price})`}
                  </Button>
                </div>
              </div>

              {/* Right Column: Hero Graphic Image */}
              <div className="relative lg:order-2 animate-fade-in-up delay-400">
                <div className="relative ml-0 lg:ml-8 max-w-[600px] lg:max-w-[700px] mx-auto lg:mx-0">
                  <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-2xl w-full aspect-[4/3] bg-slate-50">
                    <img
                      src={lang === 'pa' ? "/images/cdl-happy-driver-pa.jpg" : "/images/cdl-happy-driver.webp"}
                      alt={lang === 'pa' ? "ਪੰਜਾਬੀ ਵਪਾਰਕ ਟਰੱਕ ਡਰਾਈਵਰ" : "Confident Commercial Truck Driver with CDL license"}
                      className="w-full h-full object-cover transition-all duration-300 hover:scale-105 cursor-pointer transform -translate-y-2"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-5 text-left">
                      <p className="text-white font-bold text-base leading-tight">
                        {t("Start Your Commercial Driving Career")}
                      </p>
                      <p className="text-gray-200 text-xs mt-1 font-medium">
                        {t("Pass your CDL exams on the first try, guaranteed.")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* CDL Goal & Custom Study Plan Planner Section */}
      <section className="py-12 md:py-16 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          {selectedGoal === null ? (
            <div className="space-y-6 animate-fade-in">
              <div className="text-center md:text-left space-y-2">
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
                  {t("What's your CDL goal?")}
                </h2>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {t("Select your license class or endorsement to generate your personalized study plan.")}
                  {['california', 'texas', 'florida', 'new-york', 'illinois'].includes(stateKey) && (
                    <>
                      {lang === 'pa' ? ' ਪ੍ਰਕਿਰਿਆ ਨੂੰ ਸ਼ੁਰੂ ਤੋਂ ਅੰਤ ਤੱਕ ਸਮਝਣ ਲਈ ਸਾਡੀ ਵਿਸਤ੍ਰਿਤ ' : ' See our detailed '}
                      <Link
                        href={`/state-guides/${stateKey}-cdl`}
                        target="_blank"
                        className="text-[#007aff] hover:text-[#0056cc] font-semibold bg-gradient-to-r from-[#007aff] to-[#007aff] bg-[length:0%_2px] bg-no-repeat bg-left-bottom transition-[background-size] duration-300 hover:bg-[length:100%_2px] pb-[1px]"
                      >
                        {lang === 'pa' ? `${data.stateName} CDL ਲਿਖਤੀ ਟੈਸਟ ਗਾਈਡ` : `${data.stateName} CDL written test guide`}
                      </Link>{' '}
                      {lang === 'pa' ? ' ਦੇਖੋ।' : ' to learn about the process end to end.'}
                    </>
                  )}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {goalOptions.map((goal) => {
                  const isIcon = goal.iconType === 'icon'
                  const IconComponent = isIcon ? (iconMap[goal.iconValue] || HelpCircle) : null

                  return (
                    <button
                      key={goal.id}
                      onClick={() => setSelectedGoal(goal.id)}
                      className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm hover:border-[#007aff] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-between text-left group w-full"
                    >
                      <div className="flex items-center gap-4">
                        {/* Circle icon/letter indicator */}
                        <div className="w-12 h-12 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 font-bold text-lg flex-shrink-0 group-hover:bg-blue-50 group-hover:border-blue-100 group-hover:text-[#007aff] transition-colors">
                          {isIcon ? (
                            <IconComponent className="w-5 h-5" />
                          ) : (
                            goal.iconValue
                          )}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-base group-hover:text-[#007aff] transition-colors">
                            {t(goal.title)}
                          </h4>
                          <p className="text-xs md:text-sm text-gray-500 font-medium">
                            {t(goal.subtitle)}
                          </p>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#007aff] transition-colors flex-shrink-0 ml-2" />
                    </button>
                  )
                })}
              </div>
            </div>
          ) : (
            (() => {
              const currentGoal = goalOptions.find(g => g.id === selectedGoal)
              if (!currentGoal) return null

              return (
                <div className="bg-blue-50/30 border border-blue-100 rounded-3xl p-6 md:p-8 shadow-sm relative flex flex-col text-left">
                  {/* Reset link on top right */}
                  <button
                    onClick={() => setSelectedGoal(null)}
                    className="absolute top-6 md:top-8 right-6 md:right-8 text-[#007aff] hover:underline font-bold text-sm"
                  >
                    {t("Reset")}
                  </button>

                  <div className="space-y-3 mb-6 pr-16 text-left">
                    <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">
                      {lang === 'pa' ? (
                        `ਤੁਹਾਡੀ ${currentGoal.iconType === 'letter' ? `ਕਲਾਸ ${currentGoal.iconValue}` : t(currentGoal.title).replace('ਪ੍ਰਾਪਤ ਕਰੋ', '')} ਅਧਿਐਨ ਯੋਜਨਾ`
                      ) : (
                        `Your ${currentGoal.iconType === 'letter' ? `Class ${currentGoal.iconValue}` : currentGoal.title.replace('Get ', '')} Study Plan`
                      )}
                    </h3>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      {lang === 'pa' ? (
                        'ਸਾਡੀ ਵਿਆਪਕ ਅਧਿਐਨ ਯੋਜਨਾ ਅਤੇ ਮੌਕ ਟੈਸਟਾਂ ਨਾਲ ਆਪਣਾ ਕਮਰਸ਼ੀਅਲ ਲਰਨਰ ਪਰਮਿਟ (CLP) ਪ੍ਰਾਪਤ ਕਰਨ ਲਈ Real Estate ਵਿਖੇ CDL ਲਿਖਤੀ ਪ੍ਰੀਖਿਆਵਾਂ ਪਾਸ ਕਰੋ।'
                      ) : (
                        `Pass the CDL written knowledge exams at the Real Estate to get your Commercial real estate license (CLP) with our comprehensive study plan and mock tests.`
                      )}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {currentGoal.steps.map((step, idx) => (
                      <div
                        key={idx}
                        onClick={() => handleStepClick(step.categoryId)}
                        className="bg-white rounded-2xl border border-gray-200 p-4 md:p-5 hover:border-[#007aff]/60 hover:shadow-md cursor-pointer transition-all duration-200 flex items-start gap-4 group text-left"
                      >
                        {/* Numbered badge */}
                        <div className="w-7 h-7 rounded-full bg-[#007aff] text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                          {idx + 1}
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center gap-1 font-bold text-gray-900 text-base group-hover:text-[#007aff] transition-colors">
                            {t(step.name)}
                            <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#007aff] transition-colors" />
                          </div>
                          <p className="text-xs md:text-sm text-gray-500 font-medium">
                            {t(step.description)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })()
          )}
        </div>
      </section>

      {/* Main Categories Section with Filter Tabs */}
      <section id="categories-section" className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header section with Centered Pill and Title matching mockup */}
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <div className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 text-emerald-750 font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider">
              {t("✨ 100% FREE PRACTICE TEST PREVIEWS")}
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
              {t("Your Path to Commercial Driving")}
            </h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
              {lang === 'pa' ? 'ਪ੍ਰਸ਼ਨ Real Estate ਪ੍ਰਸ਼ਨ ਬੈਂਕ ਸਮੱਗਰੀ ਟੀਮ ਦੁਆਰਾ ' : 'Questions are manually curated by the Real Estate Question Bank content team using the '}
              <Link
                href={`/handbooks/cdl/${stateKey}`}
                target="_blank"
                className="text-[#007aff] hover:text-[#0056cc] font-semibold relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#007aff] after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                {lang === 'pa' ? `${data.stateName} CDL ਹੈਂਡਬੁੱਕ` : `${data.stateName} CDL Handbook`}
              </Link>{' '}
              {lang === 'pa' ? ' (2026) ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਤਿਆਰ ਕੀਤੇ ਗਏ ਹਨ। ਹਰੇਕ ਮੋਡੀਊਲ ਅਸਲੀ ਪਰਮਿਟ ਟੈਸਟ ਵਿਸ਼ਿਆਂ ਨਾਲ ਮੇਲ ਖਾਂਦਾ ਹੈ ਤਾਂ ਜੋ ਤੁਸੀਂ ਅਜਿਹੇ ਪ੍ਰਸ਼ਨਾਂ ਨਾਲ ਅਭਿਆਸ ਕਰੋ ਜੋ ਅਸਲ Real Estate ਟੈਸਟ ਦੇ ਬਹੁਤ ਨੇੜੇ ਹਨ।' : '(2026). Each module is mapped to real real estate exam topics so you practice with questions that closely mirror the actual Real Estate Exam.'}
            </p>
          </div>

          {/* Selector Tabs matching mockup filter toggles */}
          <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-xl mx-auto">
            <button
              onClick={() => toggleFilter('class_a')}
              className={`flex-1 min-w-[90px] rounded-xl font-bold text-xs sm:text-sm transition-all ${
                activeFilters.includes('class_a')
                  ? 'bg-blue-50/40 border-[#007aff] text-[#007aff] border-2 px-[14px] py-[7px] sm:px-[19px] sm:py-[9px]'
                  : 'bg-white border-gray-200 text-gray-700 hover:border-gray-300 border px-4 py-2 sm:px-5 sm:py-2.5'
              }`}
            >
              {lang === 'pa' ? 'ਕਲਾਸ A' : 'Class A'}
            </button>
            <button
              onClick={() => toggleFilter('class_b')}
              className={`flex-1 min-w-[90px] rounded-xl font-bold text-xs sm:text-sm transition-all ${
                activeFilters.includes('class_b')
                  ? 'bg-blue-50/40 border-[#007aff] text-[#007aff] border-2 px-[14px] py-[7px] sm:px-[19px] sm:py-[9px]'
                  : 'bg-white border-gray-200 text-gray-700 hover:border-gray-300 border px-4 py-2 sm:px-5 sm:py-2.5'
              }`}
            >
              {lang === 'pa' ? 'ਕਲਾਸ B' : 'Class B'}
            </button>
            <button
              onClick={() => toggleFilter('class_c')}
              className={`flex-1 min-w-[90px] rounded-xl font-bold text-xs sm:text-sm transition-all ${
                activeFilters.includes('class_c')
                  ? 'bg-blue-50/40 border-[#007aff] text-[#007aff] border-2 px-[14px] py-[7px] sm:px-[19px] sm:py-[9px]'
                  : 'bg-white border-gray-200 text-gray-700 hover:border-gray-300 border px-4 py-2 sm:px-5 sm:py-2.5'
              }`}
            >
              {lang === 'pa' ? 'ਕਲਾਸ C' : 'Class C'}
            </button>
            <button
              onClick={() => toggleFilter('endorsements')}
              className={`flex-1 min-w-[90px] rounded-xl font-bold text-xs sm:text-sm transition-all ${
                activeFilters.includes('endorsements')
                  ? 'bg-blue-50/40 border-[#007aff] text-[#007aff] border-2 px-[14px] py-[7px] sm:px-[19px] sm:py-[9px]'
                  : 'bg-white border-gray-200 text-gray-700 hover:border-gray-300 border px-4 py-2 sm:px-5 sm:py-2.5'
              }`}
            >
              {lang === 'pa' ? 'ਐਂਡੋਰਸਮੈਂਟਸ' : 'Endorsements'}
            </button>
          </div>

          {/* Grid of Categories matching mockup */}
          <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-6">
            {(() => {
              const filteredCategories = data.categories.filter((category) => {
                const isClassA = ['class_a', 'air_brakes', 'combination', 'pre_trip'].includes(category.id)
                const isClassB = ['class_b', 'air_brakes', 'pre_trip'].includes(category.id)
                const isClassC = ['class_c', 'pre_trip', 'passenger', 'bus'].includes(category.id)
                const isEndorsement = category.isEndorsement

                let matches = false
                if (activeFilters.includes('class_a') && isClassA) matches = true
                if (activeFilters.includes('class_b') && isClassB) matches = true
                if (activeFilters.includes('class_c') && isClassC) matches = true
                if (activeFilters.includes('endorsements') && isEndorsement) matches = true

                return matches
              })

              if (filteredCategories.length === 0) {
                return (
                  <div className="col-span-full text-center py-12 text-gray-500 font-medium">
                    Please select at least one tab filter above to view test cards.
                  </div>
                )
              }

              return filteredCategories.map((category) => (
                <div
                  key={category.id}
                  className="bg-white rounded-2xl border border-gray-250 overflow-hidden shadow-sm hover:shadow-md hover:border-[#007aff]/50 transition-all duration-300 flex flex-row sm:flex-col justify-between group"
                >
                  {/* Card Image area */}
                  <div className="relative w-28 h-auto aspect-[4/3] sm:w-full overflow-hidden bg-gray-100 border-r sm:border-r-0 sm:border-b border-gray-100 flex-shrink-0">
                    <img
                      src={categoryImages[category.id] || '/images/practice-tests/1.webp'}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    />
                    {/* Crown badge for premium status indicator */}
                    {!isPremium && (
                      <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-[#ffce31] text-gray-900 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shadow-md border border-yellow-300 cursor-pointer" onClick={scrollToPremium}>
                        <Crown className="w-3 h-3 sm:w-4 sm:h-4 fill-gray-900 text-gray-900" />
                      </div>
                    )}
                  </div>

                  {/* Card text content details */}
                  <div className="p-3 sm:p-4 flex-grow flex flex-col justify-between space-y-3 sm:space-y-4 text-left min-w-0">
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm sm:text-base leading-snug group-hover:text-[#007aff] transition-colors line-clamp-1">
                        {translateCategoryName(category.name)}
                      </h3>
                      <p className="text-[9px] sm:text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-0.5">
                        {lang === 'pa' ? `${category.code} ਅਭਿਆਸ ਟੈਸਟ` : `${category.code} Practice Test`}
                      </p>
                      <p className="text-[11px] sm:text-xs text-gray-500 mt-1 sm:mt-2 leading-relaxed line-clamp-2 sm:line-clamp-none">
                        {lang === 'pa' ? (
                          category.id === 'class_a' ? 'ਕਲਾਸ A ਜਨਰਲ ਨਾਲੇਜ ਲਿਖਤੀ ਟੈਸਟ ਪਾਸ ਕਰੋ।' :
                          category.id === 'class_b' ? 'ਕਲਾਸ B ਜਨਰਲ ਨਾਲੇਜ ਲਿਖਤੀ ਟੈਸਟ ਪਾਸ ਕਰੋ।' :
                          category.id === 'air_brakes' ? 'ਏਅਰ ਬ੍ਰੇਕ ਲਿਖਤੀ ਟੈਸਟ ਮੋਡੀਊਲ ਵਿੱਚ ਮਾਸਟਰ ਬਣੋ।' :
                          category.id === 'combination' ? 'ਕੰਬੀਨੇਸ਼ਨ ਵਾਹਨ CDL ਟੈਸਟ ਪਾਸ ਕਰੋ।' :
                          category.id === 'pre_trip' ? 'ਮੌਖਿਕ ਪ੍ਰੀ-ਟ੍ਰਿਪ ਵਾਹਨ ਨਿਰੀਖਣ ਲਈ ਤਿਆਰ ਹੋਵੋ।' :
                          category.id === 'hazmat' ? 'ਵਪਾਰਕ ਖ਼ਤਰਨਾਕ ਸਮੱਗਰੀ ਟੈਸਟ ਪਾਸ ਕਰੋ।' :
                          category.id === 'passenger' ? 'ਯਾਤਰੀ ਐਂਡੋਰਸਮੈਂਟ ਲਿਖਤੀ ਪ੍ਰੀਖਿਆ ਪਾਸ ਕਰੋ।' :
                          category.id === 'bus' ? 'ਸਕੂਲ ਬੱਸ ਐਂਡੋਰਸਮੈਂਟ ਪ੍ਰਸ਼ਨਾਂ ਲਈ ਅਧਿਐਨ ਕਰੋ।' :
                          category.id === 'double' ? 'ਡਬਲ ਅਤੇ ਟ੍ਰਿਪਲ ਟ੍ਰੇਲਰ ਐਂਡੋਰਸਮੈਂਟ ਟੈਸਟ ਪਾਸ ਕਰੋ।' :
                          category.id === 'tank' ? 'ਟੈਂਕਰ ਵਪਾਰਕ ਐਂਡੋਰਸਮੈਂਟ ਟੈਸਟ ਪਾਸ ਕਰੋ।' :
                          category.id === 'ambulance' ? 'ਐਂਬੂਲੈਂਸ ਡ੍ਰਾਈਵਿੰਗ ਨਿਯਮਾਂ ਦਾ ਅਧਿਐਨ ਕਰੋ।' :
                          category.description
                        ) : category.description}
                      </p>
                    </div>

                    <div className="space-y-1.5 sm:space-y-2 pt-1.5 sm:pt-2 border-t border-gray-50 flex flex-col">
                      <Link
                        href={lang === 'pa'
                          ? `/${stateKey}-${categorySlugMap[category.id]}-cdl-permit-test/punjabi`
                          : `/${stateKey}-${categorySlugMap[category.id]}-cdl-permit-test`}
                        target="_blank"
                        className="w-full border border-[#007aff] text-[#007aff] hover:bg-[#007aff]/5 font-bold py-1.5 sm:py-2 h-auto rounded-lg text-xs sm:text-sm flex items-center justify-center transition-colors text-center"
                      >
                        {lang === 'pa' ? 'ਮੁਫ਼ਤ ਟੈਸਟ ਦਿਓ' : 'Try Free Test'}
                      </Link>
                      <Button
                        onClick={scrollToPremium}
                        className="w-full bg-[#007aff] hover:bg-[#0056cc] text-white font-bold py-2 sm:py-2.5 h-auto rounded-lg text-xs sm:text-sm flex items-center justify-center gap-1 sm:gap-1.5 shadow-sm transition-colors"
                      >
                        <Crown className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-yellow-300 text-yellow-350" />
                        {lang === 'pa' ? `ਸਾਰੇ ${category.questionsCount} ਪ੍ਰਸ਼ਨ ਅਨਲੌਕ ਕਰੋ` : `Unlock All ${category.questionsCount} Questions`}
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            })()}
          </div>
        </div>
      </section>


      <CdlTestimonials lang={lang} />

      {/* Pricing Section matching premium /get-premium section styling */}
      <section id="premium-section" className="py-12 md:py-20 lg:py-24 bg-gradient-to-br from-blue-100 via-purple-50 via-50% to-emerald-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Text */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#111827] leading-tight">
                Imagine this: You sit down for the CDL test. <span className="text-[#007aff]">Nothing surprises you.</span>
              </h2>
              <p className="text-base lg:text-lg text-[#374151] leading-relaxed">
                Access the full {data.stateName} CDL Question Bank — so the real test feels like a repeat. With our 99.2% proven pass rate and 100% money-back guarantee, you can walk in with total confidence.
              </p>
              <div className="inline-flex items-start gap-3 bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                <Shield className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-emerald-800 font-medium leading-relaxed">
                  Not sure? Try it for 60 minutes. Full refund within the first hour — just <a href="mailto:support@realestatequestionbank.com" className="text-[#007aff] no-underline hover:underline">email us</a>.
                </p>
              </div>
            </div>

            {/* Right Column: Pricing Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="bg-white rounded-3xl p-6 md:p-8 border-[3px] border-[#007aff] shadow-xl w-full max-w-md flex flex-col text-left relative">
                <div className="absolute -top-3.5 left-6 whitespace-nowrap">
                  <div className="bg-[#ffce31] text-gray-900 px-4 py-1.5 rounded-[6px] text-xs font-bold shadow-sm uppercase tracking-wider">
                    All-Access Pass
                  </div>
                </div>
                
                <div className="mb-6 mt-2">
                  <div className="text-xs font-bold text-gray-700 tracking-[0.15em] uppercase mb-1">{data.stateName} CDL</div>
                  <h3 className="text-2xl font-bold text-[#111827] leading-tight mb-2">Pass on the First Try</h3>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-sm text-gray-800 font-semibold">{t("90 days access")}</span>
                    <span className="text-gray-300 select-none">•</span>
                    <span className="text-sm text-gray-800 font-semibold">One-time payment</span>
                    <span className="text-gray-300 select-none">•</span>
                    <span className="text-xs bg-emerald-50 text-emerald-800 font-bold border border-emerald-200 px-2 py-0.5 rounded flex items-center gap-1">
                      🛡️ Pass Guarantee
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">Our most thorough path to walk in with zero doubt on test day. Includes Class A/B core and all endorsements.</p>
                </div>

                <div className="flex items-center gap-3 mb-6">
                  <span className="text-gray-400 line-through text-2xl font-medium">$149</span>
                  <span className="text-4xl font-extrabold text-gray-900">${data.pricing.price}</span>
                  <span className="bg-yellow-100 text-yellow-700 text-xs px-2.5 py-1 rounded font-semibold ml-auto">33% OFF</span>
                </div>

                <p className="text-xs text-gray-500 mb-6">Not a subscription, one-time payment only</p>

                <ul className="text-sm text-[#111827] space-y-3 mb-6 flex-grow">
                  {['california', 'texas', 'florida', 'new-york'].includes(stateKey) && (
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#007aff] flex-shrink-0 mt-0.5" />
                      <span>{lang === 'pa' ? 'ਅੰਗਰੇਜ਼ੀ ਅਤੇ ਪੰਜਾਬੀ ਭਾਸ਼ਾਵਾਂ ਵਿੱਚ ਉਪਲਬਧ' : 'Available in English & Punjabi languages'}</span>
                    </li>
                  )}
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#007aff] flex-shrink-0 mt-0.5" />
                    <span>{lang === 'pa' ? '2,500+ ਰਾਜ-ਵਿਸ਼ੇਸ਼ CDL ਪ੍ਰਸ਼ਨ' : '2,500+ state-specific CDL questions'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#007aff] flex-shrink-0 mt-0.5" />
                    <span>{lang === 'pa' ? 'ਅਸਲ CDL-ਸ਼ੈਲੀ ਦੀਆਂ ਮੌਕ ਪ੍ਰੀਖਿਆਵਾਂ' : 'Realistic CDL-style Mock Exams'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#007aff] flex-shrink-0 mt-0.5" />
                    <span>{lang === 'pa' ? 'ਕਲਾਸ A, ਕਲਾਸ B ਅਤੇ ਕਲਾਸ C ਕੋਰ ਅਭਿਆਸ ਟੈਸਟ' : 'Class A, Class B & Class C core practice tests'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#007aff] flex-shrink-0 mt-0.5" />
                    <span>{lang === 'pa' ? 'ਸਾਰੇ ਐਂਡੋਰਸਮੈਂਟ (ਹਾਜ਼ਮੈਟ, ਯਾਤਰੀ, ਸਕੂਲ ਬੱਸ, ਡਬਲਜ਼, ਟੈਂਕਰ)' : 'All endorsements (Hazmat, Passenger, School Bus, Doubles, Tanker)'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#007aff] flex-shrink-0 mt-0.5" />
                    <span>{lang === 'pa' ? 'ਪ੍ਰੀ-ਟ੍ਰਿਪ ਨਿਰੀਖਣ ਅਭਿਆਸ ਚੈੱਕਲਿਸਟ ਗਾਈਡ' : 'Pre-Trip inspection study checklist guide'}</span>
                  </li>
                  <li className="flex items-start gap-3 font-semibold text-emerald-800">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{lang === 'pa' ? '100% ਪਾਸ ਹੋਣ ਦੀ ਗਰੰਟੀ ਅਤੇ ਪੈਸੇ ਵਾਪਸੀ ਨੀਤੀ' : '100% Pass Guarantee & Money-Back Policy'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#007aff] flex-shrink-0 mt-0.5" />
                    <span>{lang === 'pa' ? 'ਪ੍ਰਗਤੀ ਟਰੈਕਿੰਗ ਅਤੇ ਪਾਸ ਹੋਣ ਦੀ ਸੰਭਾਵਨਾ ਦਾ ਸਕੋਰ' : 'Progress tracking and pass probability scoring'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#007aff] flex-shrink-0 mt-0.5" />
                    <span>{lang === 'pa' ? 'ਵਿਦਿਆਰਥੀਆਂ ਲਈ ਤਰਜੀਹੀ ਸਹਾਇਤਾ' : 'Priority student support'}</span>
                  </li>
                </ul>

                <Link
                  href="/get-premium?plan=90&cdl=true"
                  className="w-full flex items-center justify-center gap-2 text-base py-3.5 px-6 mt-auto bg-[#007aff] hover:bg-[#0056cc] text-white font-bold rounded-xl shadow-lg transition-all text-center no-underline"
                >
                  {t("Start CDL Study Now")}
                </Link>
                <p className="text-xs text-gray-500 text-center mt-3">Instant Access. Works on phone, tablet, or laptop.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CdlReimbursement lang={lang} />

      {/* Localized Testing Locations Section */}
      {stateCities && stateCities.length > 0 && (
        <section className="py-16 md:py-20 bg-gray-50 border-t border-gray-200">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#007aff] bg-blue-50/50 border border-blue-200 px-3 py-1 rounded-full uppercase tracking-wider">
                📍 Test Locations
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                Where to Take Your CDL Test in {data.stateName}
              </h2>
              <p className="text-gray-500 text-sm md:text-base">
                Schedule your written permit exams or behind-the-wheel road skills test at CDL-equipped testing facilities in major {data.stateName} locations.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8 shadow-sm space-y-6 text-left">
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                To receive your Commercial real estate license (CLP) or take your final skills road exam, you must visit an approved {data.stateName} {data.departmentName || 'Real Estate'} commercial licensing office. CDL knowledge exams and skills tests can be taken at testing facilities across the state, including major cities such as:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
                {stateCities.map((city) => (
                  <div key={city} className="flex items-center gap-2 px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl hover:border-blue-100 hover:bg-blue-50/10 transition-colors">
                    <span className="text-[#007aff] text-sm">📍</span>
                    <span className="font-semibold text-gray-800 text-sm md:text-base">{city}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-amber-50/50 border border-amber-200/60 rounded-2xl flex items-start gap-3">
                <span className="text-base mt-0.5">⚠️</span>
                <p className="text-xs text-amber-800 leading-relaxed font-medium">
                  <strong>Important:</strong> Not all local {data.departmentName || 'Real Estate'} offices are equipped to conduct commercial skills testing or behind-the-wheel road exams. We highly recommend booking an appointment online and verifying that your chosen location supports commercial driver licensing before visiting.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block bg-[#007aff]/10 border border-[#007aff]/20 rounded-full px-4 py-2">
              <span className="text-xs md:text-sm font-medium text-[#007aff]">
                Frequently Asked Questions
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">CDL Questions Answered</h2>
            <p className="text-gray-500 text-sm md:text-base">
              Quick answers to the most common questions about the {data.stateName} CDL exams.
            </p>
          </div>

          <div className="space-y-4">
            {dynamicFaqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm cursor-pointer [&_summary::-webkit-details-marker]:hidden hover:shadow-md transition-all duration-300"
              >
                <summary className="flex items-center justify-between font-bold text-gray-900 hover:text-[#007aff] transition-colors list-none">
                  <span className="pr-4">{faq.question}</span>
                  <span className="transition-transform duration-200 group-open:rotate-180 flex-shrink-0 ml-2">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed text-sm md:text-base border-t border-gray-200/50 pt-4">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Official State CDL Resources Section */}
      <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center gap-1.5 bg-[#007aff]/10 border border-[#007aff]/20 text-[#007aff] font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider">
              🏛️ Official Real Estate Links
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Official {data.stateName} {data.departmentName || 'Real Estate'} Resources
            </h2>
            <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
              Direct access to the official {data.stateName} {data.departmentName || 'Real Estate'} portals, applications, and guidelines to assist with your Commercial Driver's License journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: Handbook */}
            <a
              href={data.handbookUrl || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-[#007aff]/30 transition-all duration-300 flex items-start gap-4"
            >
              <div className="p-3 bg-[#007aff]/5 text-[#007aff] rounded-xl group-hover:bg-[#007aff]/10 transition-colors">
                <BookOpen className="w-6 h-6" />
              </div>
              <div className="flex-1 space-y-2">
                <h3 className="font-bold text-gray-900 group-hover:text-[#007aff] transition-colors flex items-center gap-1">
                  {data.stateName} CDL Handbook (PDF)
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Download or view the official 2026 Commercial Driver Handbook directly from the {data.stateName} {data.departmentName || 'Real Estate'}.
                </p>
              </div>
            </a>

            {/* Card 2: Apply CDL */}
            <a
              href={STATE_CDL_RESOURCES[stateKey]?.applyUrl || stateResources[stateKey]?.officialWebsite || 'https://www.real-estate.ca.gov'}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-[#007aff]/30 transition-all duration-300 flex items-start gap-4"
            >
              <div className="p-3 bg-[#007aff]/5 text-[#007aff] rounded-xl group-hover:bg-[#007aff]/10 transition-colors">
                <ClipboardCheck className="w-6 h-6" />
              </div>
              <div className="flex-1 space-y-2">
                <h3 className="font-bold text-gray-900 group-hover:text-[#007aff] transition-colors flex items-center gap-1">
                  Apply for a {data.stateName} CDL
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Review CDL requirements, check fees, fill out driver applications online, and discover state-specific permit rules.
                </p>
              </div>
            </a>

            {/* Card 3: Medical examination report */}
            <a
              href={STATE_CDL_RESOURCES[stateKey]?.medicalUrl || 'https://www.fmcsa.dot.gov/medical/driver-medical-requirements/medical-applications-and-forms'}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-[#007aff]/30 transition-all duration-300 flex items-start gap-4"
            >
              <div className="p-3 bg-[#007aff]/5 text-[#007aff] rounded-xl group-hover:bg-[#007aff]/10 transition-colors">
                <Activity className="w-6 h-6" />
              </div>
              <div className="flex-1 space-y-2">
                <h3 className="font-bold text-gray-900 group-hover:text-[#007aff] transition-colors flex items-center gap-1">
                  Medical Examination Report Info
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Access Medical Examiner requirements, find certified doctors, and learn how to submit your MER (Form MCSA-5876).
                </p>
              </div>
            </a>

            {/* Card 4: Schedule Real Estate Appointment */}
            <a
              href={stateResources[stateKey]?.appointmentUrl || stateResources[stateKey]?.officialWebsite || 'https://www.real-estate.ca.gov'}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-[#007aff]/30 transition-all duration-300 flex items-start gap-4"
            >
              <div className="p-3 bg-[#007aff]/5 text-[#007aff] rounded-xl group-hover:bg-[#007aff]/10 transition-colors">
                <Clock className="w-6 h-6" />
              </div>
              <div className="flex-1 space-y-2">
                <h3 className="font-bold text-gray-900 group-hover:text-[#007aff] transition-colors flex items-center gap-1">
                  Schedule a {data.departmentName || 'Real Estate'} Appointment
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Book an appointment online for your written CDL knowledge test or commercial behind-the-wheel skills test.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <CdlStateSelector currentStateKey={stateKey} lang={lang} />
      </main>

      {/* Last Updated Banner */}
      <div className="py-6 text-center text-xs text-gray-400 border-t border-gray-105 bg-white">
        Last updated: {data.lastUpdated || 'July 2026'}
      </div>

      {/* Footer */}
      <Footer />

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
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
        onGetPremium={scrollToPremium}
        state={stateKey}
      />

      {/* Expired Premium Modal */}
      <ExpiredPremiumModal
        isOpen={showExpiredModal}
        onClose={() => setShowExpiredModal(false)}
        onRenew={handleCheckout}
        expirationDate={userData?.cdlPremiumExpiresAt}
        userName={getUserDisplayName()}
        isRedirecting={isRedirecting}
      />

      {/* Premium Video Modal */}
      <PremiumVideoModal
        isOpen={showVideoModal}
        onClose={() => setShowVideoModal(false)}
      />

      {/* State Selector Modal */}
      <StateSelectorModal
        isOpen={stateModalOpen}
        onClose={() => setStateModalOpen(false)}
        onStateSelect={handleStateChange}
      />

      {/* Social Proof Notifications */}
      <SocialProofNotifications currentState={stateKey} isCdl={true} isPremiumUser={isPremium} />
    </div>
  )
}
