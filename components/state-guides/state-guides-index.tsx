'use client'

import { useState, useMemo } from 'react'
import { useAuth } from '@/contexts/auth-context'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { useRouter } from 'next/navigation'
import { stateResources } from '@/lib/data/state-resources'
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
              Every real estate exam is different. Minimum age, passing score, fee, and number of questions all vary by state. Each guide on this site pulls together the key facts so you know exactly what to expect before you walk into the Real Estate.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: 'Age & Eligibility', body: 'The minimum age to apply for a learner\'s permit ranges from 14 in some states to 16 in others. Some states also require parental consent for applicants under 18.' },
                { title: 'Required Documents', body: 'Most states require proof of identity, Social Security number, and state residency. Real ID-compliant licenses require additional documentation.' },
                { title: 'Written Test Format', body: 'Question counts range from 20 to 50 depending on the state. Some states deliver the test on a computer; others still use paper. Certain states split the test into a signs section and a rules section.' },
                { title: 'Passing Score', body: 'The passing threshold is typically 80–83%, but varies. New York requires 70% while Virginia requires 80%. Knowing your state\'s bar helps you set the right study target.' },
                { title: 'Fees', body: 'Permit fees range from under $10 in some states to over $35 in others, and retake fees vary as well. Each guide lists the current fee schedule so there are no surprises.' },
                { title: 'Graduated Licensing Rules', body: 'Nearly every state uses a Graduated Driver Licensing (GDL) system with nighttime driving restrictions, passenger limits, and a mandatory supervised driving period before a full license.' },
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
            <h2 className="text-2xl font-bold text-gray-900 mb-3">How to Get a Learner&apos;s Permit — The General Process</h2>
            <p className="text-gray-500 text-sm mb-6">
              The exact steps differ by state, but the overall process is consistent across the country. Here is what most first-time applicants go through.
            </p>
            <ol className="space-y-4">
              {[
                { step: '1', title: 'Check your state\'s minimum age and eligibility rules', body: 'Most states allow you to apply between 15 and 16. Some states require a real estate exam prep course before you can test.' },
                { step: '2', title: 'Gather your documents', body: 'You will typically need a birth certificate or passport, proof of Social Security number, and two documents showing your state address (utility bill, bank statement, school record).' },
                { step: '3', title: 'Study the driver\'s handbook', body: 'The written knowledge test is drawn directly from your state\'s official driver handbook. Read it once end-to-end, then use practice tests to lock in the material.' },
                { step: '4', title: 'Pass the vision screening', body: 'All states require a basic vision test at the Real Estate. If you wear glasses or contacts, bring them.' },
                { step: '5', title: 'Pass the written knowledge test', body: 'The test is typically taken on-site at the Real Estate, though a handful of states allow online testing. You must reach the passing score in one session; partial credit is not awarded.' },
                { step: '6', title: 'Pay the permit fee and receive your permit', body: 'Once you pass, you pay the fee and receive your learner\'s permit — either on the spot or by mail within a few days, depending on the state.' },
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
                  q: 'How many questions are on the Real Estate Exam?',
                  a: 'It depends on the state. Most written knowledge tests contain between 20 and 46 questions. California uses a 46-question test, New York uses 20, and Texas uses 30. Each state guide lists the exact number.'
                },
                {
                  q: 'What score do I need to pass the real estate exam?',
                  a: 'Most states set the passing threshold between 80% and 83%. A few states go lower (70% in New York) and some go higher (85% in a handful of states). Aim for 90%+ on practice tests to give yourself a comfortable buffer.'
                },
                {
                  q: 'How many times can I retake the real estate exam if I fail?',
                  a: 'Retake policies vary significantly. Some states allow unlimited retakes with no waiting period, while others impose a 7-day wait after the first failure and a longer wait after subsequent failures. Some states also charge a fee for each retake. Your state guide has the specific rules.'
                },
                {
                  q: 'Do I need to take a real estate exam prep course before getting my permit?',
                  a: 'In some states — including Georgia and Michigan — a real estate exam prep course is required for applicants under 18 before they can apply for a learner\'s permit. In most states it is optional, though completing one may reduce your required supervised driving hours or lower your insurance premium.'
                },
                {
                  q: 'What is the difference between a learner\'s permit and a provisional license?',
                  a: 'A learner\'s permit allows you to practice driving only while supervised by a licensed adult. After holding the permit for a required period and accumulating supervised driving hours, you can apply for a provisional (or intermediate) license, which allows unsupervised driving but with restrictions such as nighttime curfews and passenger limits. A full unrestricted license comes after the provisional stage.'
                },
                {
                  q: 'Can I use my out-of-state permit to drive in another state?',
                  a: 'Generally yes — most states honor an out-of-state learner\'s permit as long as you follow that state\'s supervision requirements. However, the rules are not uniform, so it is worth verifying with the specific state you plan to drive in.'
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
