'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '@/contexts/auth-context'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { useRouter } from 'next/navigation'
import { ChevronRight, ArrowUpRight, Shield, Award, BookOpen, Clock, CheckCircle } from 'lucide-react'
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

const TOC_GROUPS = [
  {
    group: "License Requirements",
    items: [
      { id: "eligibility", label: "Who Can Apply" },
      { id: "education", label: "Pre-Licensing Hours" },
      { id: "fees", label: "Application Fees" },
    ],
  },
  {
    group: "The Licensing Exam",
    items: [
      { id: "written-test", label: "What the Exam Covers" },
      { id: "passing", label: "Passing Score & Retakes" },
    ],
  },
  {
    group: "Post-Exam Steps",
    items: [
      { id: "after-passing", label: "Brokerage Sponsorship" },
      { id: "reference", label: "Official Links" },
    ],
  },
]

const ALL_SECTION_IDS = TOC_GROUPS.flatMap((g) => g.items)

export function SouthDakotaGuide() {
  const { user, userData, isPremium, signOut } = useAuth()
  const router = useRouter()
  const [activeId, setActiveId] = useState('')

  const handleLogin = () => router.push('/#login')
  const handleSignup = () => router.push('/#signup')
  const handleLogout = async () => await signOut()
  const handleDashboard = () => router.push('/dashboard')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length > 0) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    )

    ALL_SECTION_IDS.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

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
      />

      <div className="bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-[#007aff] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/#states" className="hover:text-[#007aff] transition-colors">States</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">South Dakota Guide</span>
          </nav>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12 lg:py-20">
        <div className="max-w-6xl lg:ml-8 xl:ml-16 lg:flex lg:gap-10">
          {/* Sidebar TOC */}
          <nav className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2 pb-8">
              <p className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-6">In this guide</p>
              <div className="flex flex-col gap-5">
                {TOC_GROUPS.map((group) => (
                  <div key={group.group}>
                    <p className="text-[13px] font-semibold text-gray-900 uppercase tracking-wider mb-2">{group.group}</p>
                    <div className="flex flex-col gap-0.5">
                      {group.items.map((s) => (
                        <a
                          key={s.id}
                          href={`#${s.id}`}
                          className={`text-[15px] py-1 border-l-2 pl-3 transition-colors ${
                            activeId === s.id
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

          <article className="max-w-3xl flex-1 min-w-0">
            <header className="mb-12">
              <p className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-3">State Licensing Guide</p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                South Dakota Real Estate License Exam 2026
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed">
                A complete walkthrough of everything required to get your South Dakota Real Estate License and pass the state licensing exam.
                This guide covers pre-licensing education requirements, registration processes, exam structures, and tips to pass. Ready to start practicing? Take a{' '}
                <Link href="/south-dakota-real-estate-practice-test" className="underline decoration-[#007aff] underline-offset-2 hover:text-[#007aff]">
                  free South Dakota Real Estate practice test
                </Link>.
              </p>
              <div className="flex items-center gap-4 mt-6 pt-6 border-t border-gray-200">
                <span className="text-xs text-gray-400">Last verified 2026</span>
                <span className="text-xs text-gray-300">|</span>
                <OutLink href="https://dlr.sd.gov/realestate">
                  <span className="text-xs text-gray-400">Official Commission Website</span>
                </OutLink>
              </div>
            </header>

            {/* At a Glance */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-200 border border-gray-200 rounded-xl overflow-hidden mb-14">
              {[
                { label: "Minimum Age", value: "18", sub: "years old" },
                { label: "Course Required", value: "116 hrs", sub: "pre-licensing classes" },
                { label: "Commission", value: "Commission", sub: "South" },
                { label: "Exam Format", value: "Multiple Choice", sub: "State & National sections" },
              ].map((item) => (
                <div key={item.label} className="bg-white p-5 text-center">
                  <div className="text-xl font-bold text-gray-900">{item.value}</div>
                  <div className="text-xs text-gray-400 mt-1">{item.sub}</div>
                  <div className="text-[11px] font-medium text-gray-500 uppercase tracking-wide mt-2">{item.label}</div>
                </div>
              ))}
            </div>

            {/* Eligibility */}
            <section id="eligibility" className="mb-14 scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Who Can Apply for a License</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  To earn a real estate salesperson or broker license in South Dakota, you must meet the following eligibility requirements:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Age:</strong> Must be at least 18 years old.</li>
                  <li><strong>Education:</strong> High school diploma or equivalent (GED).</li>
                  <li><strong>Legal Status:</strong> Must be legally authorized to work in the United States.</li>
                  <li><strong>Background Check:</strong> Must pass background check and submit fingerprints.</li>
                </ul>
              </div>
            </section>

            {/* Education */}
            <section id="education" className="mb-14 scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pre-Licensing Coursework</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  South Dakota requires all candidates to complete an approved <strong>116-hour pre-licensing education program</strong> before taking the exam.
                </p>
                <p>
                  The curriculum covers essential real estate subjects such as property law, agency relationships, contracts, financing, escrow, and state-specific license regulations. You must pass your course final exam with a score of 70% or higher to receive your certificate of completion.
                </p>
              </div>
            </section>

            {/* Fees */}
            <section id="fees" className="mb-14 scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Licensing Fees</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Getting licensed in South Dakota involves a few standard costs:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Exam Fee:</strong> Paid when scheduling the state exam (typically around $60 - $100).</li>
                  <li><strong>License Application Fee:</strong> Paid to the South Dakota Real Estate Commission to issue the license (approximately $225).</li>
                  <li><strong>Fingerprinting & Background Check:</strong> Paid to the authorized scanning vendor.</li>
                </ul>
              </div>
            </section>

            {/* The Written Test */}
            <section id="written-test" className="mb-14 scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What the Written Exam Covers</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  The South Dakota Real Estate Licensing Exam is a computer-based multiple-choice test consisting of two distinct portions:
                </p>
                <ol className="list-decimal pl-5 space-y-3">
                  <li>
                    <strong>National Real Estate Principles (approx. 80-100 questions):</strong> Covers general real estate concepts, principles of agency, contracts, land descriptions, property ownership, valuation, finance, and mathematical calculations.
                  </li>
                  <li>
                    <strong>State-Specific Real Estate Laws (approx. 40-60 questions):</strong> Focuses on South Dakota license law, commission rules, advertising rules, escrow accounts, agency disclosure requirements, and state penalties.
                  </li>
                </ol>
              </div>
            </section>

            {/* Passing Score */}
            <section id="passing" className="mb-14 scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Passing Score and Retake Policy</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  To pass the exam, you must score at least <strong>70% or 75%</strong> on both sections. Your results are printed immediately at the testing center when you submit your test.
                </p>
                <p>
                  <strong>Retake Policy:</strong> If you fail one or both portions of the licensing exam, you can schedule a retake. In most states, you only need to retake the portion that you failed, provided you attempt it within a year of the initial test date.
                </p>
              </div>
            </section>

            {/* After Passing */}
            <section id="after-passing" className="mb-14 scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Broker Sponsorship (Activation)</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Passing the exam is not enough to begin working. In South Dakota, your real estate license will be issued in an "inactive" status.
                </p>
                <p>
                  To activate your license and start representing buyers and sellers, you must align with an active, licensed <strong>sponsoring broker</strong>. Once a sponsoring broker submits the sponsorship confirmation, the South Dakota Real Estate Commission will activate your license.
                </p>
              </div>
            </section>

            {/* Reference */}
            <section id="reference" className="mb-14 scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Official Commission Resources</h2>
              <p className="text-gray-600 leading-relaxed">
                For forms, scheduling links, and exam updates, visit the official site of the{' '}
                <OutLink href="https://dlr.sd.gov/realestate">South Dakota Real Estate Commission</OutLink>.
              </p>
            </section>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  )
}
