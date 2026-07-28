'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { useAuth } from '@/contexts/auth-context'

const STATE_DATA = [
  { name: 'Alabama', code: 'AL', questions: 30, toPass: 24, pct: 80, url: '/alabama-real-estate-permit-test' },
  { name: 'Alaska', code: 'AK', questions: 20, toPass: 16, pct: 80, url: '/alaska-real-estate-permit-test' },
  { name: 'Arizona', code: 'AZ', questions: 30, toPass: 24, pct: 80, url: '/arizona-mvd-permit-test' },
  { name: 'Arkansas', code: 'AR', questions: 25, toPass: 20, pct: 80, url: '/arkansas-dfa-permit-test' },
  { name: 'California', code: 'CA', questions: 46, toPass: 38, pct: 83, url: '/california-real-estate-permit-test' },
  { name: 'Colorado', code: 'CO', questions: 25, toPass: 20, pct: 80, url: '/colorado-real-estate-permit-test' },
  { name: 'Connecticut', code: 'CT', questions: 25, toPass: 20, pct: 80, url: '/connecticut-real-estate-permit-test' },
  { name: 'Delaware', code: 'DE', questions: 30, toPass: 24, pct: 80, url: '/delaware-real-estate-permit-test' },
  { name: 'Florida', code: 'FL', questions: 50, toPass: 40, pct: 80, url: '/florida-real-estate-permit-test' },
  { name: 'Georgia', code: 'GA', questions: 40, toPass: 30, pct: 75, url: '/georgia-dds-permit-test' },
  { name: 'Hawaii', code: 'HI', questions: 30, toPass: 24, pct: 80, url: '/hawaii-real-estate-permit-test' },
  { name: 'Idaho', code: 'ID', questions: 40, toPass: 34, pct: 85, url: '/idaho-real-estate-permit-test' },
  { name: 'Illinois', code: 'IL', questions: 35, toPass: 28, pct: 80, url: '/illinois-sos-permit-test' },
  { name: 'Indiana', code: 'IN', questions: 34, toPass: 27, pct: 79, url: '/indiana-bmv-permit-test' },
  { name: 'Iowa', code: 'IA', questions: 35, toPass: 28, pct: 80, url: '/iowa-dot-permit-test' },
  { name: 'Kansas', code: 'KS', questions: 25, toPass: 20, pct: 80, url: '/kansas-real-estate-permit-test' },
  { name: 'Kentucky', code: 'KY', questions: 40, toPass: 32, pct: 80, url: '/kentucky-real-estate-permit-test' },
  { name: 'Louisiana', code: 'LA', questions: 40, toPass: 32, pct: 80, url: '/louisiana-omv-permit-test' },
  { name: 'Maine', code: 'ME', questions: 30, toPass: 24, pct: 80, url: '/maine-bmv-permit-test' },
  { name: 'Maryland', code: 'MD', questions: 25, toPass: 22, pct: 88, url: '/maryland-mva-permit-test' },
  { name: 'Massachusetts', code: 'MA', questions: 25, toPass: 18, pct: 72, url: '/massachusetts-rmv-permit-test' },
  { name: 'Michigan', code: 'MI', questions: 40, toPass: 32, pct: 80, url: '/michigan-sos-permit-test' },
  { name: 'Minnesota', code: 'MN', questions: 40, toPass: 32, pct: 80, url: '/minnesota-dvs-permit-test' },
  { name: 'Mississippi', code: 'MS', questions: 30, toPass: 24, pct: 80, url: '/mississippi-dps-permit-test' },
  { name: 'Missouri', code: 'MO', questions: 25, toPass: 20, pct: 80, url: '/missouri-dor-permit-test' },
  { name: 'Montana', code: 'MT', questions: 33, toPass: 27, pct: 82, url: '/montana-mvd-permit-test' },
  { name: 'Nebraska', code: 'NE', questions: 25, toPass: 20, pct: 80, url: '/nebraska-real-estate-permit-test' },
  { name: 'Nevada', code: 'NV', questions: 25, toPass: 20, pct: 80, url: '/nevada-real-estate-permit-test' },
  { name: 'New Hampshire', code: 'NH', questions: 40, toPass: 32, pct: 80, url: '/new-hampshire-real-estate-permit-test' },
  { name: 'New Jersey', code: 'NJ', questions: 50, toPass: 40, pct: 80, url: '/new-jersey-mvc-permit-test' },
  { name: 'New Mexico', code: 'NM', questions: 25, toPass: 18, pct: 72, url: '/new-mexico-mvd-permit-test' },
  { name: 'New York', code: 'NY', questions: 20, toPass: 14, pct: 70, url: '/new-york-real-estate-permit-test' },
  { name: 'North Carolina', code: 'NC', questions: 25, toPass: 20, pct: 80, url: '/north-carolina-real-estate-permit-test' },
  { name: 'North Dakota', code: 'ND', questions: 25, toPass: 20, pct: 80, url: '/north-dakota-dot-permit-test' },
  { name: 'Ohio', code: 'OH', questions: 40, toPass: 30, pct: 75, url: '/ohio-bmv-permit-test' },
  { name: 'Oklahoma', code: 'OK', questions: 50, toPass: 40, pct: 80, url: '/oklahoma-dps-permit-test' },
  { name: 'Oregon', code: 'OR', questions: 35, toPass: 28, pct: 80, url: '/oregon-real-estate-permit-test' },
  { name: 'Pennsylvania', code: 'PA', questions: 18, toPass: 15, pct: 83, url: '/pennsylvania-penndot-permit-test' },
  { name: 'Rhode Island', code: 'RI', questions: 25, toPass: 20, pct: 80, url: '/rhode-island-real-estate-permit-test' },
  { name: 'South Carolina', code: 'SC', questions: 30, toPass: 24, pct: 80, url: '/south-carolina-real-estate-permit-test' },
  { name: 'South Dakota', code: 'SD', questions: 25, toPass: 20, pct: 80, url: '/south-dakota-dps-permit-test' },
  { name: 'Tennessee', code: 'TN', questions: 30, toPass: 24, pct: 80, url: '/tennessee-dos-permit-test' },
  { name: 'Texas', code: 'TX', questions: 30, toPass: 21, pct: 70, url: '/texas-dps-permit-test' },
  { name: 'Utah', code: 'UT', questions: 25, toPass: 20, pct: 80, url: '/utah-real-estate-permit-test' },
  { name: 'Vermont', code: 'VT', questions: 20, toPass: 16, pct: 80, url: '/vermont-real-estate-permit-test' },
  { name: 'Virginia', code: 'VA', questions: 36, toPass: 30, pct: 83, url: '/virginia-real-estate-permit-test' },
  { name: 'Washington', code: 'WA', questions: 40, toPass: 32, pct: 80, url: '/washington-dol-permit-test' },
  { name: 'West Virginia', code: 'WV', questions: 25, toPass: 19, pct: 76, url: '/west-virginia-real-estate-permit-test' },
  { name: 'Wisconsin', code: 'WI', questions: 50, toPass: 40, pct: 80, url: '/wisconsin-dot-permit-test' },
  { name: 'Wyoming', code: 'WY', questions: 25, toPass: 20, pct: 80, url: '/wyoming-dot-permit-test' },
]

const FAQ_DATA = [
  {
    question: 'How many questions are on the Real Estate Exam?',
    answer: 'The number of questions varies by state — from 18 questions (Pennsylvania) to 50 questions (Florida, New Jersey, Oklahoma, Wisconsin). Most states have between 25 and 40 questions.',
  },
  {
    question: 'How many questions do you need to get right to pass the real estate exam?',
    answer: 'Most states require 80% correct to pass. For example, 25 questions means you need at least 20 right. Exceptions: New York (70%), Massachusetts (72%), Texas (70%), and Maryland (88%).',
  },
  {
    question: 'What state has the fewest questions on the real estate exam?',
    answer: 'Pennsylvania has the fewest with only 18 questions. New York and Vermont also have short tests with just 20 questions each.',
  },
  {
    question: 'What state has the most questions on the real estate exam?',
    answer: 'Florida, New Jersey, Oklahoma, and Wisconsin all have 50 questions — the most of any state.',
  },
  {
    question: 'Can you retake the Real Estate Exam if you fail?',
    answer: "Yes, all states allow retakes. Most allow an immediate retake or require a short waiting period (1–7 days). Check your state's Real Estate website for specific retake policies.",
  },
]

export function HowManyQuestionsPageContent() {
  const { user, userData, isPremium, signOut } = useAuth()
  const router = useRouter()

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation
        user={user}
        userData={userData}
        isPremium={isPremium}
        onLogin={() => router.push('/#login')}
        onSignup={() => router.push('/#signup')}
        onLogout={() => signOut()}
        onDashboard={() => router.push('/dashboard')}
      />
      <main className="flex-1 max-w-4xl mx-auto px-4 py-12 w-full">

        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          How Many Questions Are on the Real Estate real estate exam?
        </h1>
        <p className="text-gray-600 mb-2">
          The number of questions varies by state — from <strong>18 questions</strong> (Pennsylvania) to <strong>50 questions</strong> (Florida, New Jersey, Oklahoma, Wisconsin). Most states have 25–40 questions and require <strong>80% to pass</strong>.
        </p>
        <p className="text-gray-600 mb-10">
          Find your state in the table below, then click to start a free practice test.
        </p>

        <div className="overflow-x-auto rounded-lg border border-gray-200 mb-14">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left px-4 py-3 font-semibold text-gray-700">State</th>
                <th className="text-center px-4 py-3 font-semibold text-gray-700"># Questions</th>
                <th className="text-center px-4 py-3 font-semibold text-gray-700">Need to Pass</th>
                <th className="text-center px-4 py-3 font-semibold text-gray-700">Pass %</th>
                <th className="text-center px-4 py-3 font-semibold text-gray-700">Practice Test</th>
              </tr>
            </thead>
            <tbody>
              {STATE_DATA.map((state, i) => (
                <tr key={state.code} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 font-medium text-gray-900">
                    {state.name} <span className="text-gray-400 font-normal">({state.code})</span>
                  </td>
                  <td className="px-4 py-3 text-center text-gray-700">{state.questions}</td>
                  <td className="px-4 py-3 text-center text-gray-700">{state.toPass}</td>
                  <td className="px-4 py-3 text-center">
                    <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${
                      state.pct >= 85 ? 'bg-red-100 text-red-700' :
                      state.pct >= 80 ? 'bg-yellow-100 text-yellow-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {state.pct}%
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <Link
                      href={state.url}
                      className="text-blue-600 hover:text-blue-800 font-medium hover:underline"
                    >
                      Practice Free →
                    </Link>
                    {state.code === 'NC' && (
                      <div className="mt-1">
                        <Link
                          href="/north-carolina-real-estate-permit-test-25-questions"
                          className="text-xs text-gray-500 hover:text-blue-600 hover:underline"
                        >
                          25-question format →
                        </Link>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6 mb-14">
          {FAQ_DATA.map(({ question, answer }) => (
            <div key={question}>
              <h3 className="text-base font-semibold text-gray-900 mb-2">{question}</h3>
              <p className="text-gray-600">{answer}</p>
            </div>
          ))}
        </div>

        <div className="rounded-xl bg-blue-50 border border-blue-100 p-8 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Ready to Practice?</h2>
          <p className="text-gray-600 mb-6">
            Use our free state-specific practice tests to prepare for the real exam.
          </p>
          <Link
            href="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Find My State's Practice Test
          </Link>
        </div>

      </main>
      <Footer />
    </div>
  )
}

