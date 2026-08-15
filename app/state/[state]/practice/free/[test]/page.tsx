import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { AuthProvider } from '@/contexts/auth-context'
import { FreePracticePageContent } from '@/components/pages/free-practice-page'
import { STATES, type StateKey } from '@/lib/constants'
import { loadFreeQuestionsServer } from '@/lib/utils/questions-server'
import { getStateDedicatedPageUrl } from '@/lib/utils/state-routes'
import { STATE_MAJOR_CITIES } from '@/lib/data/state-cities'
import { Question } from '@/lib/types/question'

interface PageProps {
  params: Promise<{ state: string; test: string }>
}

// Seeded random number generator for consistent test questions
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

function seededShuffle<T>(array: T[], seed: number): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(seededRandom(seed + i) * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { state, test } = await params

  if (!state || !(state in STATES)) {
    return { title: 'Free Practice Test | Real Estate Question Bank' }
  }

  const testNumber = parseInt(test)
  if (isNaN(testNumber) || testNumber < 1 || testNumber > 5) {
    return { title: 'Free Practice Test | Real Estate Question Bank' }
  }

  const stateInfo = STATES[state as StateKey]
  const stateName = stateInfo.name

  const title = `Free ${stateName} Real Estate Practice Test ${testNumber} (2026) | Real Estate Question Bank`
  const description = `Take Practice Test ${testNumber} for your ${stateName} Real Estate exam. 10 real exam questions with instant feedback and detailed explanations. Updated for 2026.`

  return {
    title,
    description,
    keywords: [
      `${stateName} Real Estate practice test ${testNumber}`,
      `${stateName} Real Estate practice test free`,
      `free ${stateName} Real Estate Exam questions`,
      `${stateName} real estate exam free online`,
      `${stateName} real estate licensing exam questions`,
      `${stateName} real estate license practice`,
      `${stateInfo.code} Real Estate Exam 2026`,
    ],
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: `Free ${stateName} Real Estate Practice Test ${testNumber} (2026)`,
      description: `10 free practice questions for your ${stateName} Real Estate Exam. Instant scoring and detailed explanations.`,
      url: `https://www.realestatequestionbank.com/state/${state}/practice/free/${testNumber}`,
      type: 'website',
      images: [
        {
          url: '/images/cover-image.png',
          width: 1200,
          height: 630,
          alt: `${stateName} Real Estate Practice Test ${testNumber} - Real Estate Question Bank`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Free ${stateName} Real Estate Practice Test ${testNumber} (2026)`,
      description: `10 free practice questions for your ${stateName} Real Estate Exam.`,
      images: ['/images/cover-image.png'],
    },
    alternates: {
      canonical: `https://www.realestatequestionbank.com/state/${state}/practice/free/${testNumber}`,
    },
  }
}

export async function generateStaticParams() {
  const params = []
  for (const state of Object.keys(STATES)) {
    for (let test = 1; test <= 5; test++) {
      params.push({ state, test: String(test) })
    }
  }
  return params
}

export default async function FreePracticeTestPage({ params }: PageProps) {
  const { state: stateParam, test } = await params

  if (!stateParam || !(stateParam in STATES)) {
    notFound()
  }

  const testNumber = parseInt(test)
  if (isNaN(testNumber) || testNumber < 1 || testNumber > 5) {
    notFound()
  }

  const state = stateParam as StateKey
  const stateInfo = STATES[state]
  const stateName = stateInfo.name

  let questions: Question[] = []
  let loadError: string | null = null
  let totalQuestionCount = 2000

  try {
    const allQuestions = await loadFreeQuestionsServer(state)

    const { stateDataImports } = await import('@/components/state-landing-page/generate-state-data')
    const stateDataLoader = stateDataImports[state]
    if (stateDataLoader) {
      const stateData = await stateDataLoader()
      if (stateData?.pricing?.premiumQuestions) {
        totalQuestionCount = stateData.pricing.premiumQuestions
      }
    }

    const seed = testNumber * 1000 + state.charCodeAt(0)
    const shuffled = seededShuffle(allQuestions, seed)
    const startIndex = (testNumber - 1) * 10
    questions = shuffled.slice(startIndex, startIndex + 10)

    if (questions.length < 10 && shuffled.length > 0) {
      const remaining = 10 - questions.length
      questions = [...questions, ...shuffled.slice(0, remaining)]
    }
  } catch (error) {
    loadError = error instanceof Error ? error.message : 'Failed to load practice questions'
  }

  // Quiz schema (all states)
  let quizSchema = null
  if (questions.length > 0) {
    quizSchema = {
      "@context": "https://schema.org/",
      "@type": "Quiz",
      "name": `${stateName} Real Estate Practice Test ${testNumber}`,
      "description": `Free ${stateName} Real Estate practice test ${testNumber} with ${questions.length} questions. Pass your ${stateInfo.code} real estate exam on the first try.`,
      "hasPart": questions.map((q) => ({
        "@type": "Question",
        "name": q.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": q.options[q.correctAnswer]
        },
        "suggestedAnswer": q.options.map((opt, idx) =>
          idx !== q.correctAnswer ? { "@type": "Answer", "text": opt } : null
        ).filter(Boolean)
      }))
    }
  }

  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.realestatequestionbank.com" },
      { "@type": "ListItem", "position": 2, "name": `${stateName} Practice Tests`, "item": `https://www.realestatequestionbank.com/state/${state}/practice/free` },
      { "@type": "ListItem", "position": 3, "name": `Practice Test ${testNumber}`, "item": `https://www.realestatequestionbank.com/state/${state}/practice/free/${testNumber}` },
    ]
  }

  // FAQ items (used in both schema and visible section)
  const cities = STATE_MAJOR_CITIES[state] ?? []
  const cityList = cities.slice(0, -1).join(', ') + ', and ' + cities[cities.length - 1]
  const code = stateInfo.code
  const stateGuideHref = `/state-guides/${state}`
  const linkCls = 'text-[#007aff] underline decoration-transparent hover:decoration-[#007aff] underline-offset-4 transition-all duration-300'

  const faqPool = {
    topics: {
      q: `What topics does ${stateName} Real Estate Practice Test ${testNumber} cover?`,
      a: `This test draws 10 questions from the official ${stateName} Real Estate syllabus covering property ownership, agency principles, contracts, financing, and valuation. Questions are selected using a fixed seed so Practice Test ${testNumber} always presents the same set — making it easy to track your improvement over multiple attempts.`,
      aJsx: <>This test draws 10 questions from the official{' '}<Link href={stateGuideHref} className={linkCls}>{code} Real Estate State Guide</Link>{' '}covering property ownership, agency principles, contracts, financing, and valuation. Questions are selected using a fixed seed so Practice Test {testNumber} always presents the same set — making it easy to track your improvement over multiple attempts.</>,
    },
    city: {
      q: `Does this practice test work for ${cities[0]} and other ${stateName} cities?`,
      a: `Yes — the ${code} Real Estate written licensing exam is the same statewide. Whether you're getting your license in ${cityList}, or anywhere else in ${stateName}, this practice test covers exactly what the exam administrator will ask. Real estate licensing rules are set at the state level, so there's no city-specific version of the exam.`,
    },
    free: {
      q: `Is this ${stateName} Real Estate practice test completely free?`,
      a: `Yes — all 5 practice tests (50 questions total) are completely free with no account or credit card required. For access to the full bank of ${totalQuestionCount}+ questions, timed mock exams, and a detailed revision guide, you can upgrade to premium.`,
    },
    howToPass: {
      q: `How do I pass the ${stateName} Real Estate written exam?`,
      a: `Work through all 5 free practice tests and read every explanation carefully — understanding the legal rules behind a correct answer is far more effective than memorising answers. Focus extra time on questions you miss. Consistently scoring above 85% across multiple tests is a strong indicator you're ready. Our premium question bank offers ${totalQuestionCount}+ questions modelled directly on the ${code} Real Estate licensing exam.`,
      aJsx: <>Work through all 5 free practice tests and read every explanation carefully — understanding the legal rules behind a correct answer is far more effective than memorising answers. Focus extra time on questions you miss. Consistently scoring above 85% is a strong indicator you&apos;re ready. For even deeper prep, the{' '}<Link href={stateGuideHref} className={linkCls}>{code} Real Estate State Guide</Link>{' '}and our premium question bank of {totalQuestionCount}+ questions are the fastest way to the highest pass rate.</>,
    },
    account: {
      q: `Do I need to create an account to take these practice tests?`,
      a: `No account is needed — just open the test and start answering. Without an account your scores aren't saved between sessions, but all 50 questions across the 5 tests are fully accessible. Creating a free account lets you track your progress over time and pick up where you left off.`,
    },
    realExam: {
      q: `How similar are these questions to the real ${stateName} Real Estate Exam?`,
      a: `Very similar. Every question is sourced from the official ${stateName} Real Estate outline and written in the same multiple-choice format as the real test. The question bank is reviewed regularly to reflect current licensing laws. While the exact questions on your actual exam will vary, the topics, difficulty, and wording style closely mirror what you'll face on exam day.`,
      aJsx: <>Very similar. Every question is sourced from the official{' '}<Link href={stateGuideHref} className={linkCls}>{stateName} Real Estate State Guide</Link>{' '}and written in the same multiple-choice format as the real test. The question bank is reviewed regularly to reflect current licensing laws. While the exact questions on your actual exam will vary, the topics, difficulty, and wording style closely mirror what you&apos;ll face on exam day.</>,
    },
    passingScore: {
      q: `What score do I need to pass the ${stateName} Real Estate written exam?`,
      a: `Most states require around 70–75% to pass the real estate licensing exam. Use these practice tests to benchmark yourself — aim to consistently score 85% or higher before booking your exam date so you have a comfortable buffer. The results screen shows your exact percentage after each attempt.`,
    },
    retake: {
      q: `How many times can I retake the ${stateName} Real Estate written exam if I fail?`,
      a: `Most states allow multiple retakes, though there's typically a waiting period between attempts and a new registration fee for each try. Check the ${code} licensing board website for the exact policy. These practice tests are a good way to pinpoint which topics cost you points before booking your next attempt.`,
    },
    differences: {
      q: `What's the difference between Practice Tests 1, 2, 3, 4, and 5?`,
      a: `Each test pulls a different fixed set of 10 questions from the question bank using a unique seed, so Test 1 always shows the same 10 questions, Test 2 always shows a different 10, and so on. Taking all 5 gives you exposure to 50 unique questions. For broader coverage, our premium question bank includes ${totalQuestionCount}+ questions across every topic in the ${stateName} outline.`,
      aJsx: <>Each test pulls a different fixed set of 10 questions using a unique seed, so Test 1 always shows the same 10, Test 2 always shows a different 10, and so on. Taking all 5 gives you exposure to 50 unique questions. For broader coverage, our premium question bank includes {totalQuestionCount}+ questions across every topic in the{' '}<Link href={stateGuideHref} className={linkCls}>{code} Real Estate State Guide</Link>.</>,
    },
    timeLimit: {
      q: `Is there a time limit on the real ${stateName} Real Estate written exam?`,
      a: `Yes, the official real estate exam is timed, usually allowing 3 to 4 hours to complete both the national and state portions. Our practice tests are completely untimed so you can think through each question at your own pace. On the actual exam, most people finish well within the allotted time if they are prepared.`,
    },
    studyTime: {
      q: `How long should I study for the ${stateName} Real Estate written exam?`,
      a: `Most people require 2 to 4 weeks of focused study to feel fully prepared. A practical approach is to study the key chapters on contracts, agency, and finance, then take all 5 free practice tests to identify weak areas. Re-read the explanation for every question you miss, then retake the tests. Short daily sessions of 30–45 minutes tend to work best.`,
      aJsx: <>Most people require 2 to 4 weeks of focused study to feel fully prepared. A practical approach is to study the key chapters on contracts, agency, and finance, then take all 5 free practice tests to identify weak areas. Re-read the explanation for every question you miss, then retake the tests. Short daily sessions of 30–45 minutes tend to work best.</>,
    },
    readyScore: {
      q: `What practice test score means I'm ready for the real ${stateName} Real Estate exam?`,
      a: `Aim for 85% or higher — not just once, but consistently across multiple tests. Scoring 85%+ on Test 1 alone isn't enough; hitting that mark across Tests 1 through 5 means you've covered a broad range of material and aren't relying on lucky guesses. At that point, you're in good shape to book your exam appointment.`,
    },
    failedTest: {
      q: `What should I do if I fail the ${stateName} Real Estate written exam?`,
      a: `Most testing centers will provide a diagnostic report showing your score breakdown by topic. Return to these practice tests and focus on questions in those categories. Read every explanation carefully, not just for questions you got completely wrong. Most people who fail once pass on their second attempt after a few days of targeted review.`,
    },
    language: {
      q: `Can I take the ${stateName} Real Estate written exam in a language other than English?`,
      a: `Language policies vary by state; some states offer the exam in Spanish or other languages, while others require it to be taken in English. Check with your state's real estate commission or testing provider (like Pearson VUE or PSI) for local options.`,
    },
    handbook: {
      q: `Do I need to read the entire ${stateName} Real Estate state guide or study guide to pass?`,
      a: `You don't need to memorise it cover to cover, but reading it once — especially the sections on contracts, agency relationships, and finance — is strongly recommended. These practice tests are built directly from current exam outlines, so working through all 5 tests and reviewing each explanation effectively teaches you the highest-priority material.`,
      aJsx: <>You don&apos;t need to memorise it cover to cover, but reading the{' '}<Link href={stateGuideHref} className={linkCls}>{stateName} Real Estate State Guide</Link>{' '}once — especially the sections on contracts, agency relationships, and finance — is strongly recommended. These practice tests are built directly from it, so working through all 5 tests and reviewing each explanation effectively teaches you the highest-priority material.</>,
    },
  }

  type FAQKey = keyof typeof faqPool

  const testFAQKeys: Record<number, FAQKey[]> = {
    1: ['topics', 'city', 'account', 'realExam', 'howToPass'],
    2: ['topics', 'passingScore', 'retake', 'differences', 'free'],
    3: ['topics', 'city', 'timeLimit', 'studyTime', 'readyScore'],
    4: ['topics', 'failedTest', 'language', 'handbook', 'howToPass'],
    5: ['topics', 'city', 'free', 'readyScore', 'account'],
  }

  const faqItems = (testFAQKeys[testNumber] ?? testFAQKeys[1]).map(key => faqPool[key])

  // FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(({ q, a }) => ({
      "@type": "Question",
      "name": q,
      "acceptedAnswer": { "@type": "Answer", "text": a }
    }))
  }

  // Desktop-only footer: FAQ section
  const desktopFooter = (
    <div className="hidden md:block bg-gray-50 mt-8 border-t border-gray-100">
      <div className="container mx-auto px-4 py-14 max-w-4xl">

        {/* Section header */}
        <p className="text-xs font-semibold text-[#007aff] uppercase tracking-widest mb-2">Study Guide</p>
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          About This {stateName} Practice Test
        </h2>

        {/* FAQ cards */}
        <div className="space-y-3">
          {faqItems.map(({ q, a, ...rest }) => { const aJsx = 'aJsx' in rest ? rest.aJsx : undefined; return (
            <div
              key={q}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 p-6"
            >
              <h3 className="text-base font-semibold text-gray-900 mb-2">{q}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{aJsx ?? a}</p>
            </div>
          ); })}
        </div>

        {/* Footer link */}
        <div className="mt-10">
          <Link
            href={getStateDedicatedPageUrl(state)}
            className="text-[#007aff] text-sm font-medium underline decoration-transparent hover:decoration-[#007aff] underline-offset-4 transition-all duration-300"
          >
            ← Back to {stateName} Real Estate Test Overview
          </Link>
        </div>

      </div>
    </div>
  )

  return (
    <AuthProvider>
      {quizSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(quizSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FreePracticePageContent
        state={state}
        initialQuestions={questions}
        initialError={loadError}
        testNumber={testNumber}
        totalQuestionCount={totalQuestionCount}
        headerSlot={<h1 className="sr-only">Free {stateName} Real Estate Practice Test {testNumber} (2026)</h1>}
        footerSlot={desktopFooter}
      />
    </AuthProvider>
  )
}
