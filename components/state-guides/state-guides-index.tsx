'use client'

import { useState, useMemo } from 'react'
import { useAuth } from '@/contexts/auth-context'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { useRouter } from 'next/navigation'
import { Search, ChevronRight, MapPin, AlertCircle } from 'lucide-react'
import Link from 'next/link'

const US_STATES: { name: string; slug: string }[] = [
  { name: "Alabama", slug: "alabama" },
  { name: "Alaska", slug: "alaska" },
  { name: "Arizona", slug: "arizona" },
  { name: "Arkansas", slug: "arkansas" },
  { name: "California", slug: "california" },
  { name: "Colorado", slug: "colorado" },
  { name: "Connecticut", slug: "connecticut" },
  { name: "Delaware", slug: "delaware" },
  { name: "Florida", slug: "florida" },
  { name: "Georgia", slug: "georgia" },
  { name: "Hawaii", slug: "hawaii" },
  { name: "Idaho", slug: "idaho" },
  { name: "Illinois", slug: "illinois" },
  { name: "Indiana", slug: "indiana" },
  { name: "Iowa", slug: "iowa" },
  { name: "Kansas", slug: "kansas" },
  { name: "Kentucky", slug: "kentucky" },
  { name: "Louisiana", slug: "louisiana" },
  { name: "Maine", slug: "maine" },
  { name: "Maryland", slug: "maryland" },
  { name: "Massachusetts", slug: "massachusetts" },
  { name: "Michigan", slug: "michigan" },
  { name: "Minnesota", slug: "minnesota" },
  { name: "Mississippi", slug: "mississippi" },
  { name: "Missouri", slug: "missouri" },
  { name: "Montana", slug: "montana" },
  { name: "Nebraska", slug: "nebraska" },
  { name: "Nevada", slug: "nevada" },
  { name: "New Hampshire", slug: "new-hampshire" },
  { name: "New Jersey", slug: "new-jersey" },
  { name: "New Mexico", slug: "new-mexico" },
  { name: "New York", slug: "new-york" },
  { name: "North Carolina", slug: "north-carolina" },
  { name: "North Dakota", slug: "north-dakota" },
  { name: "Ohio", slug: "ohio" },
  { name: "Oklahoma", slug: "oklahoma" },
  { name: "Oregon", slug: "oregon" },
  { name: "Pennsylvania", slug: "pennsylvania" },
  { name: "Rhode Island", slug: "rhode-island" },
  { name: "South Carolina", slug: "south-carolina" },
  { name: "South Dakota", slug: "south-dakota" },
  { name: "Tennessee", slug: "tennessee" },
  { name: "Texas", slug: "texas" },
  { name: "Utah", slug: "utah" },
  { name: "Vermont", slug: "vermont" },
  { name: "Virginia", slug: "virginia" },
  { name: "Washington", slug: "washington" },
  { name: "West Virginia", slug: "west-virginia" },
  { name: "Wisconsin", slug: "wisconsin" },
  { name: "Wyoming", slug: "wyoming" },
]

// States that have dedicated guide pages
const STATES_WITH_GUIDES = new Set([
  'alabama',
  'alaska',
  'arizona',
  'arkansas',
  'california',
  'colorado',
  'connecticut',
  'delaware',
  'florida',
  'georgia',
  'hawaii',
  'idaho',
  'illinois',
  'indiana',
  'iowa',
  'kentucky',
  'louisiana',
  'maine',
  'minnesota',
  'missouri',
  'maryland',
  'massachusetts',
  'michigan',
  'nebraska',
  'nevada',
  'new-hampshire',
  'new-jersey',
  'new-mexico',
  'new-york',
  'north-carolina',
  'north-dakota',
  'kansas',
  'ohio',
  'oregon',
  'pennsylvania',
  'rhode-island',
  'south-carolina',
  'south-dakota',
  'tennessee',
  'texas',
  'utah',
  'vermont',
  'virginia',
  'washington',
  'west-virginia',
  'wyoming',
])

export function StateGuidesIndex() {
  const { user, userData, isPremium, signOut } = useAuth()
  const router = useRouter()
  const [query, setQuery] = useState('')

  const handleLogin = () => router.push('/#login')
  const handleSignup = () => router.push('/#signup')
  const handleLogout = async () => await signOut()
  const handleDashboard = () => router.push('/dashboard')

  const filteredStates = useMemo(() => {
    if (!query.trim()) return US_STATES
    const q = query.toLowerCase()
    return US_STATES.filter(s => s.name.toLowerCase().includes(q))
  }, [query])

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
        showGetPremiumLink={true}
      />

      <main className="container mx-auto px-4 py-12 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              State Real Estate real estate exam Guides
            </h1>
            <p className="text-gray-400 max-w-lg mx-auto">
              Select your state for a detailed breakdown of real estate exam requirements, fees, and study resources.
            </p>
          </div>

          <div className="max-w-sm mx-auto mb-10 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for a state..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {filteredStates.map((s) => {
              const hasGuide = STATES_WITH_GUIDES.has(s.slug)

              if (hasGuide) {
                return (
                  <Link
                    key={s.slug}
                    href={`/state-guides/${s.slug}`}
                    className="flex items-center justify-between px-4 py-3 bg-white border border-gray-100 rounded-lg text-left hover:border-gray-300 transition-all group"
                  >
                    <div className="flex items-center gap-2.5">
                      <MapPin className="w-3.5 h-3.5 text-gray-300 group-hover:text-gray-500 transition-colors" />
                      <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{s.name}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-gray-500 transition-colors" />
                  </Link>
                )
              }

              return (
                <div
                  key={s.slug}
                  className="flex items-center justify-between px-4 py-3 bg-white border border-gray-100 rounded-lg"
                >
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-3.5 h-3.5 text-gray-200" />
                    <span className="text-sm font-medium text-gray-400">{s.name}</span>
                  </div>
                  <span className="text-[11px] text-gray-300">Soon</span>
                </div>
              )
            })}
            {filteredStates.length === 0 && (
              <div className="col-span-full text-center py-16 text-gray-300 text-sm">
                No states match &quot;{query}&quot;
              </div>
            )}
          </div>
        </div>

        {/* Content sections */}
        <div className="max-w-3xl mx-auto mt-20 space-y-16">

          {/* What each guide covers */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">What Each State Real Estate Guide Covers</h2>
            <p className="text-gray-500 text-sm mb-8">
              Every real estate licensing exam is different. Minimum age, education requirements, exam format, fees, and passing scores all vary by state. Each guide on this site pulls together the key official facts so you know exactly what to expect before your testing day.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: 'Age & Eligibility', body: 'The minimum age to apply for a real estate salesperson license is 18 years old in nearly all states. Applicants must also hold a high school diploma or equivalent.' },
                { title: 'Pre-Licensing Education', body: 'Most states require approved pre-licensing education courses before testing. Required hours range from 75 hours in New York to 135 hours in California and 180 hours in Texas.' },
                { title: 'Written Exam Format', body: 'Tests are computer-based multiple-choice exams divided into a National portion (general laws) and a State-specific portion (state license law).' },
                { title: 'Passing Scores', body: 'Most states set the passing threshold at 70% or 75%. Knowing your state\'s passing score helps you set the correct benchmark on practice tests.' },
                { title: 'Licensing Fees', body: 'Getting licensed involves application fees, exam booking fees, and fingerprint background check fees. Fees generally range from $150 to $300 in total.' },
                { title: 'Broker Sponsorship', body: 'Passing the exam activates an "inactive" license. To represent clients, you must align with an active sponsoring broker who registers your license as active.' },
              ].map(({ title, body }) => (
                <div key={title} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1.5">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* How to get your permit */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">How to Get a Real Estate License — The General Process</h2>
            <p className="text-gray-500 text-sm mb-6">
              While exact steps differ by state, the overall framework to get licensed as a real estate salesperson is consistent across the country:
            </p>
            <ol className="space-y-4">
              {[
                { step: '1', title: 'Verify basic eligibility requirements', body: 'Ensure you are at least 18 years old, possess a high school diploma or GED, and are legally authorized to work in the United States.' },
                { step: '2', title: 'Complete required pre-licensing education', body: 'Enroll in and complete your state\'s approved pre-licensing program from an accredited school, and pass the final course exam.' },
                { step: '3', title: 'Submit your license application & fingerprints', body: 'File your official application with the state real estate commission or department and undergo a background check.' },
                { step: '4', title: 'Schedule your licensing exam date', body: 'Register with your state\'s testing administrator (e.g., Pearson VUE, PSI, or Prometric) and pay the examination fee.' },
                { step: '5', title: 'Pass the state licensing exam', body: 'Take and pass both the National and State portions of the written multiple-choice licensing exam at an official test center.' },
                { step: '6', title: 'Activate your license with a sponsoring broker', body: 'Select an active sponsoring broker to register your employment. Once approved, the state commission will issue your active real estate license.' },
              ].map(({ step, title, body }) => (
                <li key={step} className="flex gap-4">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#007aff]/10 text-[#007aff] text-xs font-bold flex items-center justify-center mt-0.5">{step}</span>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 mb-0.5">{title}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-5">
              {[
                {
                  q: 'How many questions are on the Real Estate Licensing Exam?',
                  a: 'It varies by state, but generally ranges from 100 to 150 multiple-choice questions. For example, the Texas exam has 125 questions, while California has 150. Each state guide lists the exact count.'
                },
                {
                  q: 'What score do I need to pass the real estate exam?',
                  a: 'Most states require a score of 70% or 75% on both the National and State portions. We recommend aiming for 85%+ consistently on our practice exams to ensure a comfortable margin of safety.'
                },
                {
                  q: 'How many times can I retake the real estate exam if I fail?',
                  a: 'Most states allow unlimited retakes within one year of completing your pre-licensing education. You must pay a registration fee for each attempt. In most states, you only need to retake the specific portion (National or State) that you failed.'
                },
                {
                  q: 'Do I need a sponsoring broker before taking the exam?',
                  a: 'No. You can complete your coursework, apply, and sit for the exam independently. However, you cannot practice real estate or represent clients until you activate your license under a sponsoring broker.'
                },
                {
                  q: 'What is the difference between a real estate agent and a broker?',
                  a: 'A real estate salesperson (or agent) must work under the supervision of a licensed managing broker. A broker has completed additional training and experience, allowing them to operate an independent firm and sponsor other agents.'
                },
                {
                  q: 'Are real estate licenses transferable between states?',
                  a: 'Some states share reciprocity agreements, allowing you to get licensed with reduced education requirements or by only taking the State-specific exam. In states without reciprocity, you must complete the full pre-licensing education.'
                },
              ].map(({ q, a }) => (
                <div key={q} className="border-b border-gray-100 pb-5">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1.5">{q}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  )
}
