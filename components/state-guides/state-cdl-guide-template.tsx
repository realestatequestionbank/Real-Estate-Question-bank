'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '@/contexts/auth-context'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { useRouter } from 'next/navigation'
import { ArrowUpRight, ChevronRight, CheckCircle, ShieldCheck, BookOpen, ClipboardCheck, Activity, Clock, Shield } from 'lucide-react'
import Link from 'next/link'

function OutLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900 transition-colors"
    >
      {children}
      <ArrowUpRight className="w-3 h-3 text-gray-400" />
    </a>
  )
}

import { StateCdlGuideConfig, STATE_CDL_CONFIGS } from './cdl-configs'

type TocItem = { id: string; label: string }
type TocGroup = { group: string; items: TocItem[] }

function useActiveSection(tocGroups: TocGroup[]) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const allSectionIds = tocGroups.flatMap((g) => g.items)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length > 0) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    )

    allSectionIds.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [tocGroups])

  return activeId
}

function SidebarTOC({ activeId, tocGroups }: { activeId: string; tocGroups: TocGroup[] }) {
  return (
    <nav className="hidden lg:block w-64 shrink-0">
      <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2 pb-8">
        <p className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-6">In this guide</p>
        <div className="flex flex-col gap-5">
          {tocGroups.map((group) => (
            <div key={group.group}>
              <p className="text-[13px] font-semibold text-gray-900 uppercase tracking-wider mb-2">{group.group}</p>
              <div className="flex flex-col gap-0.5">
                {group.items.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className={`text-[15px] py-1 border-l-2 pl-3 transition-colors ${activeId === s.id
                      ? 'border-gray-900 text-gray-900 font-medium'
                      : 'border-transparent text-gray-400 hover:text-gray-700 hover:border-gray-300'
                      }`}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </nav>
  )
}

function MobileTOC({ tocGroups }: { tocGroups: TocGroup[] }) {
  return (
    <nav className="lg:hidden bg-gray-50 border border-gray-200 rounded-xl p-6 mb-14">
      <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">In this guide</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
        {tocGroups.map((group) => (
          <div key={group.group}>
            <p className="text-[11px] font-semibold text-gray-900 uppercase tracking-wider mb-1.5">{group.group}</p>
            <div className="flex flex-col gap-1">
              {group.items.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="block text-sm text-gray-500 hover:text-gray-900 py-0.5 transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </nav>
  )
}

export function StateCdlGuide({ config }: { config: StateCdlGuideConfig }) {
  const { user, userData, isPremium, signOut } = useAuth()
  const router = useRouter()

  const handleLogin = () => router.push('/auth/login')
  const handleSignup = () => router.push('/auth/signup')
  const handleLogout = async () => await signOut()
  const handleDashboard = () => router.push('/dashboard')

  // Curate TOC items conditionally based on ambulance certificate
  const tocGroups: TocGroup[] = [
    {
      group: "Getting Started",
      items: [
        { id: "eligibility", label: "Who Can Apply" },
        { id: "clp-process", label: "CLP Permit Process" },
        { id: "fees", label: "Fees & Retake Costs" },
        { id: "documents", label: "Required Documents" },
      ],
    },
    {
      group: "At the Real Estate",
      items: [
        { id: "real-estate-visit", label: "Step-by-Step Real Estate Visit" },
        { id: "medical-cert", label: "Medical Certification (DOT)" },
      ],
    },
    {
      group: "The Written Exams",
      items: [
        { id: "written-exams", label: "Written Test Structure" },
        { id: "gk-exam", label: "General Knowledge Test" },
        { id: "air-brakes", label: "Air Brakes Exam" },
        { id: "combinations", label: "Combination Vehicles" },
        { id: "endorsements", label: "Endorsements Exams" },
      ],
    },
    {
      group: "After the Test",
      items: [
        { id: "after-passing", label: "CLP Rules & Restrictions" },
        { id: "if-you-fail", label: "Retake & Failure Rules" },
      ],
    },
    {
      group: "Next Steps to CDL",
      items: [
        { id: "eldt", label: "Mandatory ELDT Training" },
        { id: "skills-test", label: "Road & Skills Testing" },
      ],
    },
    {
      group: "Preparation",
      items: [
        { id: "handbook", label: `${config.stateName} CDL Handbook` },
        { id: "practice-tests", label: "Practice & Mock Exams" },
      ],
    },
  ]

  const activeId = useActiveSection(tocGroups)

  return (
    <div className="min-h-screen bg-white">
      <Navigation
        user={user}
        userData={userData}
        isPremium={isPremium}
        onLogin={handleLogin}
        onSignup={handleSignup}
        onLogout={handleLogout}
        onDashboard={handleDashboard}
        showGetPremiumLink
        premiumGetPremiumText="Pass with Premium"
        premiumGetPremiumLink={`/${config.stateKey}-cdl-permit-test`}
      />

      <div className="bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-[#007aff] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/#states" className="hover:text-[#007aff] transition-colors">
              States
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href={`/${config.stateKey}-cdl-permit-test`} className="hover:text-[#007aff] transition-colors">
              {config.stateName} CDL
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">CDL Written Guide</span>
          </nav>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12 lg:py-20">
        <div className="max-w-6xl lg:ml-8 xl:ml-16 lg:flex lg:gap-10">
          <SidebarTOC activeId={activeId} tocGroups={tocGroups} />
          <article className="max-w-3xl flex-1 min-w-0">
            {/* Header */}
            <header className="mb-12">
              <p className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-3">CDL WRITTEN GUIDE</p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                {config.stateName} CDL Written Test Guide 2026
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed">
                A complete, end-to-end walkthrough of everything you need to know to pass your {config.stateName} CDL written exams
                and obtain your Commercial Learner&apos;s Permit (CLP). This guide covers DOT physicals, required identification and residency documents,
                written test structures, endorsement rules, what happens if you fail, and the mandatory next steps like Entry-Level Driver Training (ELDT).
              </p>
              <div className="flex items-center gap-4 mt-6 pt-6 border-t border-gray-200">
                <span className="text-xs text-gray-400">Last verified July 2026</span>
                <span className="text-xs text-gray-300">|</span>
                <OutLink href={config.departmentUrl}>
                  <span className="text-xs text-gray-400">{config.departmentUrl.replace('https://', '')}</span>
                </OutLink>
              </div>
            </header>

            {/* At a Glance */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-200 border border-gray-200 rounded-xl overflow-hidden mb-14">
              {[
                { label: "Minimum Age", value: "18 / 21", sub: "Intrastate / Interstate" },
                { label: "Passing Score", value: "80%", sub: "on all CDL exams" },
                { label: "Application Fee", value: config.applicationFee, sub: "covers initial tests" },
                { label: "CLP Validity", value: config.clpValidity, sub: "before skills test" },
              ].map((item) => (
                <div key={item.label} className="bg-white p-5 text-center">
                  <div className="text-2xl font-bold text-gray-900">{item.value}</div>
                  <div className="text-xs text-gray-400 mt-1">{item.sub}</div>
                  <div className="text-[11px] font-medium text-gray-500 uppercase tracking-wide mt-2">{item.label}</div>
                </div>
              ))}
            </div>

            <MobileTOC tocGroups={tocGroups} />

            {/* Eligibility */}
            <section id="eligibility" className="mb-14 scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Who Can Get a {config.stateName} CDL</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                To apply for a Commercial Learner&apos;s Permit (CLP) and ultimately a Commercial Driver&apos;s License (CDL)
                in {config.stateName}, you must meet the following basic requirements:
              </p>
              <div className="border-l-2 border-gray-200 pl-5 space-y-3 mb-4">
                <p className="text-sm text-gray-600">
                  <strong>Age 18+:</strong> You must be at least 18 years old to drive commercial vehicles within {config.stateName} (intrastate commerce) and haul non-hazardous materials.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Age 21+:</strong> You must be at least 21 years old to drive commercial vehicles across state lines (interstate commerce) or transport hazardous materials that require placarding.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Valid Driver License:</strong> You must already hold a valid, non-commercial {config.stateName} driver&apos;s license in good standing.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>DOT Medical Certificate:</strong> You must pass a physical examination by a registered medical examiner and obtain a valid Medical Examiner&apos;s Certificate (Form MCSA-5876) before you can apply.
                </p>
              </div>
            </section>

            {/* CLP Process */}
            <section id="clp-process" className="mb-14 scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The Commercial Learner&apos;s Permit (CLP) Process</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Before you can train behind the wheel or take a CDL skills road test, you must get your <strong>Commercial Learner&apos;s Permit (CLP)</strong>. Think of this as the written phase of your commercial license. You get it by visiting a local {config.departmentAbbreviation} office, verifying your medical certificate, and passing the required CDL written tests.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Your CLP is valid for <strong>{config.clpValidity}</strong>. This gives you ample time to complete behind-the-wheel instruction and practice driving under supervision.
              </p>
              <p className="text-gray-600 leading-relaxed">
                While holding a CLP, you are authorized to drive a commercial vehicle of the designated class, but <strong>only</strong> under the supervision of a licensed commercial driver holding a valid CDL of the same class (or higher) with the appropriate endorsements. The supervisor must sit in the front passenger seat.
              </p>
            </section>

            {/* Fees */}
            <section id="fees" className="mb-14 scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">CDL Application Fees & Retake Costs</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Under {config.stateName} {config.departmentAbbreviation} rules, the commercial driver&apos;s license permit application fee is <strong>{config.applicationFee}</strong>.
              </p>
              <div className="border-l-2 border-gray-200 pl-5 space-y-2 mb-4">
                <p className="text-sm text-gray-600">Your initial permit application processing.</p>
                <p className="text-sm text-gray-600">Attempts at the required written CDL knowledge tests (subject to local retake fees: <strong>{config.retestFee}</strong>).</p>
                <p className="text-sm text-gray-600">Skills behind-the-wheel testing (re-tests are subject to skills fees: <strong>{config.skillsRetestFee || 'Included'}</strong>).</p>
              </div>
              <p className="text-gray-600 leading-relaxed">
                If you fail your attempts, your application may expire, requiring you to submit a new application and pay the fee again. Plan to be thoroughly prepared before scheduling your tests.
              </p>
            </section>

            {/* Documents */}
            <section id="documents" className="mb-14 scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Required Documents at the {config.departmentAbbreviation}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You must present original or certified copies of specific documents to the clerk when applying for your CLP. {config.stateName} requires the following:
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-4 mb-6">
                <div>
                  <p className="font-medium text-gray-900 mb-1">1. Proof of identity and U.S. citizenship/lawful presence</p>
                  <p className="text-sm text-gray-500">
                    {config.identityProofs} (e.g. valid U.S. Passport, certified birth certificate, green card).
                  </p>
                </div>
                <div>
                  <p className="font-medium text-gray-900 mb-1">2. Social Security Number verification</p>
                  <p className="text-sm text-gray-500">
                    Your physical Social Security Card, a W-2 form, or a paystub displaying your full SSN.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-gray-900 mb-1">3. Proofs of {config.stateName} residency</p>
                  <p className="text-sm text-gray-500">
                    {config.residencyProofs}.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-gray-900 mb-1">4. Medical Examiner&apos;s Certificate (MCSA-5876)</p>
                  <p className="text-sm text-gray-500">
                    Proof of passing the Department of Transportation (DOT) medical exam. You must bring the physical card/certificate issued by the medical examiner.
                  </p>
                </div>
              </div>
            </section>

            {/* Step-by-Step Real Estate Visit */}
            <section id="real-estate-visit" className="mb-14 scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Expect During Your {config.departmentAbbreviation} Visit</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Taking your CDL written tests requires visiting an authorized {config.stateName} {config.departmentAbbreviation} office. Here is what happens step-by-step:
              </p>
              <div className="border-l-2 border-gray-200 pl-5 space-y-4 mb-4">
                <div>
                  <p className="font-medium text-gray-900">1. Document verification & Fee payment</p>
                  <p className="text-sm text-gray-500">
                    The clerk checks your license, citizenship status, residency documents, and your DOT medical card, then collects your fee.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">2. Fingerprints & Mugshot</p>
                  <p className="text-sm text-gray-500">
                    You will provide digital scans of your thumbprints and have your photograph taken for your commercial permit card.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">3. Vision screening</p>
                  <p className="text-sm text-gray-500">
                    You must read a line of letters to verify you meet the visual acuity standard (20/40 in both eyes, with or without corrective lenses).
                  </p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">4. Written testing</p>
                  <p className="text-sm text-gray-500">
                    You are directed to a computer testing kiosk where you select your exams (General Knowledge, Air Brakes, etc.) and complete them at your own pace.
                  </p>
                </div>
              </div>
            </section>

            {/* Medical Certification */}
            <section id="medical-cert" className="mb-14 scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Medical Certification (DOT Physical)</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Commercial drivers must be in good physical health to operate heavy vehicles safely. You must pass a <strong>Department of Transportation (DOT) physical exam</strong> before applying for a CLP.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                The exam must be conducted by a licensed medical practitioner listed on the <strong>National Registry of Certified Medical Examiners</strong>. During the physical, the examiner will check your blood pressure, vision, hearing, cardiovascular health, and perform a urinalysis.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Once you pass, you will receive a Medical Examiner&apos;s Certificate (Form MCSA-5876) which is valid for up to <strong>2 years</strong>. You must keep this certification active and self-certify your driving category (interstate vs. intrastate) with the {config.stateName} Real Estate to maintain your CDL privileges.
              </p>
            </section>

            {/* Written Test Structure */}
            <section id="written-exams" className="mb-14 scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Written Test Structure & Rules</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Getting a CDL involves passing multiple independent written tests depending on the vehicle class (Class A vs. Class B) and any specific endorsements you want.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                All {config.stateName} CDL exams are multiple-choice, taken on a computer kiosk, and require an <strong>80% passing score</strong>. There is no time limit.
              </p>
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex gap-3 mb-6">
                <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-emerald-800 leading-relaxed">
                  <strong>Important:</strong> If you fail a test, {config.stateName} requires a <strong>{config.retakeWaitTime} waiting period</strong> before you can attempt it again.
                </p>
              </div>
            </section>

            {/* General Knowledge Test */}
            <section id="gk-exam" className="mb-14 scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">General Knowledge Test</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The <strong>General Knowledge exam</strong> is the foundation of all CDL applications. Every single commercial driver, regardless of class or vehicle type, must pass this test.
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400 block uppercase tracking-wider text-[10px] font-bold">Total Questions</span>
                    <span className="text-gray-950 font-bold text-lg">50 Questions</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block uppercase tracking-wider text-[10px] font-bold">Passing Requirement</span>
                    <span className="text-gray-950 font-bold text-lg">40 Correct (80%)</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                This test covers general commercial vehicle safety rules, vehicle controls, cargo security, shifting gears, driving in adverse weather conditions, hazard perceptions, and emergency procedures.
              </p>
            </section>

            {/* Air Brakes Exam */}
            <section id="air-brakes" className="mb-14 scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Air Brakes Test</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you plan to drive a commercial vehicle equipped with air brakes (such as most tractor-trailers, dump trucks, or city buses), you must pass the <strong>Air Brakes knowledge exam</strong>. Failing to take/pass this test results in an &ldquo;L&rdquo; restriction on your permit and license, prohibiting you from driving air brake vehicles.
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400 block uppercase tracking-wider text-[10px] font-bold">Total Questions</span>
                    <span className="text-gray-950 font-bold text-lg">25 Questions</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block uppercase tracking-wider text-[10px] font-bold">Passing Requirement</span>
                    <span className="text-gray-950 font-bold text-lg">20 Correct (80%)</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                The exam covers parts of an air brake system (compressor, tanks, valves, chambers, gauges), how to check for air leakage, dual air brake systems, and emergency braking rules.
              </p>
            </section>

            {/* Combination Vehicles */}
            <section id="combinations" className="mb-14 scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Combination Vehicles Test</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you are applying for a **Class A CDL** to drive tractor-trailers, semis, or double-trailers, you must pass the <strong>Combination Vehicles exam</strong>.
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400 block uppercase tracking-wider text-[10px] font-bold">Total Questions</span>
                    <span className="text-gray-950 font-bold text-lg">20 Questions</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block uppercase tracking-wider text-[10px] font-bold">Passing Requirement</span>
                    <span className="text-gray-950 font-bold text-lg">16 Correct (80%)</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                This test covers trailer rollover risk, combination braking systems, coupling and uncoupling procedures (fifth wheel, kingpin, electrical/air connections), and double clutching combination controls.
              </p>
            </section>

            {/* Endorsement Exams */}
            <section id="endorsements" className="mb-14 scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Endorsement Exams</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Endorsements are specialized credentials added to your CDL that authorize you to operate specific vehicle types or carry specialized cargoes. Each requires passing a dedicated written test:
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-4 mb-4">
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Hazardous Materials (HazMat - H)</p>
                  <p className="text-xs text-gray-500 mt-1">
                    <strong>30 Questions (24 to pass).</strong> Covers hazmat rules, shipping papers, placards, packaging, cargo loading, emergency procedures, and federal transport security.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Passenger Transport (P)</p>
                  <p className="text-xs text-gray-500 mt-1">
                    <strong>20 Questions (16 to pass).</strong> Required to drive vehicles carrying 16+ passengers. Covers loading/unloading zones, passenger safety, and bus mechanics.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">School Bus (S)</p>
                  <p className="text-xs text-gray-500 mt-1">
                    <strong>20 Questions (16 to pass).</strong> Required for operating yellow school buses. Covers student loading/unloading zones, evacuation drills, railway crossings, and pupil passenger relations.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Tanker Vehicles (N)</p>
                  <p className="text-xs text-gray-500 mt-1">
                    <strong>20 Questions (16 to pass).</strong> Required to haul bulk liquids or gases (119+ gallons individual or 1,000+ gallons aggregate). Covers liquid surge control, baffle rules, and vehicle stability.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Double/Triple Trailers (T)</p>
                  <p className="text-xs text-gray-500 mt-1">
                    <strong>20 Questions (16 to pass).</strong> Required for pulling double or triple trailers (Class A only). Covers trailer assembly, air line checks, sway control, and tracking.
                  </p>
                </div>
                {config.hasAmbulanceCertificate && (
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">California Ambulance Certification (Amb)</p>
                    <p className="text-xs text-gray-500 mt-1">
                      <strong>40 Questions (32 to pass).</strong> California-specific certificate for ambulance operators, covering speed exemptions, emergency warning lights, medical transportation laws, and equipment checks.
                    </p>
                  </div>
                )}
              </div>
            </section>

            {/* After You Pass */}
            <section id="after-passing" className="mb-14 scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What Happens After You Pass the Written Exams</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Once the touchscreen kiosk flashes &ldquo;Passed&rdquo; for your last required exam, go back to the service window. The clerk will verify your results and print out your <strong>interim paper CLP</strong>.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                With your CLP in hand, you enter the behind-the-wheel training phase. However, you must observe strict permit rules:
              </p>
              <div className="border-l-2 border-gray-200 pl-5 space-y-3 mb-4">
                <p className="text-sm text-gray-600">You must carry your physical permit card (once mailed) or paper interim permit at all times when operating a commercial vehicle.</p>
                <p className="text-sm text-gray-600">You cannot drive a commercial vehicle alone. A licensed CDL holder (appropriate class and endorsements) must occupy the front passenger seat.</p>
                <p className="text-sm text-gray-600">No passengers can be transported if you hold a Passenger (P) or School Bus (S) permit (except examiners, inspectors, or other trainees).</p>
                <p className="text-sm text-gray-600">You cannot transport placarded hazardous materials or haul empty tanker vehicles that contain residue.</p>
              </div>
            </section>

            {/* Retake & Failure Rules */}
            <section id="if-you-fail" className="mb-14 scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Written Test Retake & Failure Rules</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you fail a CDL written test, {config.stateName} requires a mandatory <strong>{config.retakeWaitTime} waiting period</strong> before you are allowed to attempt that specific exam again.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Your application fee covers a set number of attempts at each test. If you fail any written exam repeatedly, your application may expire. You will then have to submit a brand-new application, pay the fee again, and start the process from the beginning.
              </p>
            </section>

            {/* Mandatory ELDT Training */}
            <section id="eldt" className="mb-14 scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Mandatory Entry-Level Driver Training (ELDT)</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Federal Motor Carrier Safety Administration (FMCSA) mandates that all first-time CDL applicants complete an approved **Entry-Level Driver Training (ELDT)** program before scheduling their skills test. This applies to:
              </p>
              <div className="border-l-2 border-gray-200 pl-5 space-y-2 mb-4 text-sm text-gray-600">
                <p>Applying for a Class A or Class B CDL for the first time.</p>
                <p>Upgrading an existing Class B CDL to Class A.</p>
                <p>Applying for a Passenger (P), School Bus (S), or Hazardous Materials (H) endorsement for the first time.</p>
              </div>
              <p className="text-gray-600 leading-relaxed">
                The program must be completed at a training provider listed on the FMCSA&apos;s Training Provider Registry (TPR). The training includes both **Theory Instruction** (classroom/online with an 80% passing score) and **Behind-the-Wheel Training** (yard maneuvers and public roads). Your school will report your completion records directly to the FMCSA databases, allowing the Real Estate to verify your eligibility automatically.
              </p>
            </section>

            {/* Road & Skills Testing */}
            <section id="skills-test" className="mb-14 scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The CDL Skills Test</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Once you complete ELDT behind-the-wheel training, you can schedule your in-person CDL skills road test at an authorized {config.stateName} CDL Testing Center. The skills test consists of three distinct phases:
              </p>
              <div className="border-l-2 border-gray-200 pl-5 space-y-4 mb-4">
                <div>
                  <p className="font-semibold text-gray-900 text-sm">1. Pre-Trip Inspection</p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    A highly verbal walk-around inspection where you point out engine parts, belts, hoses, tires, brakes, and emergency gear to the examiner, explaining exactly what you are checking and why. Failing to correctly inspect and explain critical safety parts will result in an immediate test failure.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">2. Basic Control Skills (Yard Test)</p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Testing your ability to control the vehicle in tight spaces. You must perform maneuvers like straight-line backing, offset backing, and parallel parking inside a cone-marked area.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">3. Road Driving Test</p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Driving on public streets under the direction of the examiner. You will be evaluated on gear shifting, turns, intersections, freeway entry/exit, railway crossings, and general lane control.
                  </p>
                </div>
              </div>
            </section>

            {/* State CDL Handbook */}
            <section id="handbook" className="mb-14 scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The Official {config.stateName} CDL Handbook</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Every written test question is derived directly from the official **{config.officialHandbookName}**. It is the absolute bible for your written exam studies.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                You can view the official{' '}
                <Link
                  href={`/handbooks/cdl/${config.stateKey}`}
                  target="_blank"
                  className="text-[#007aff] hover:text-[#0056cc] font-semibold relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#007aff] after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                >
                  {config.stateName} CDL Handbook (2026)
                </Link>{' '}
                online directly in our interactive reader, download a digital PDF from the{' '}
                <OutLink href={config.officialHandbookUrl}>
                  {config.departmentAbbreviation} portal
                </OutLink>
                .
              </p>
              <p className="text-gray-600 leading-relaxed">
                Focus your studying on sections relevant to your desired class: Class A applicants must study General Knowledge, Air Brakes, and Combination.
              </p>
            </section>

            {/* Practice & Mock Exams */}
            <section id="practice-tests" className="mb-14 scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Practice & CDL-style Mock Exams</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Studying raw handbook text can be overwhelming. The most effective way to lock in your knowledge and build confidence is by taking simulated written practice tests.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our {config.stateName} CDL practice modules closely mirror the actual {config.departmentAbbreviation} testing layout, using real questions curated from the CDL handbook.
              </p>
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mb-4 flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-emerald-900 text-sm">Real Estate Question Bank study tools:</h4>
                  <ul className="text-xs text-emerald-800 space-y-2 mt-2">
                    <li>✓ 2,500+ state-specific CDL practice questions.</li>
                    <li>✓ Realistic CDL-style Mock Exams simulating {config.departmentAbbreviation} kiosks.</li>
                    <li>✓ Detailed explanations for every question.</li>
                    <li>✓ 100% money-back Pass Guarantee.</li>
                  </ul>
                  <Link href={`/${config.stateKey}-cdl-permit-test`} className="inline-block mt-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2 rounded-lg text-xs transition-colors shadow-sm">
                    Start Practice Test Preview
                  </Link>
                </div>
              </div>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  )
}
