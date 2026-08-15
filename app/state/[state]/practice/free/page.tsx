import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { AuthProvider } from '@/contexts/auth-context'
import { FreePracticePageContent } from '@/components/pages/free-practice-page'
import { STATES, type StateKey } from '@/lib/constants'
import { loadFreeQuestionsServer } from '@/lib/utils/questions-server'
import { Question } from '@/lib/types/question'

interface PageProps {
  params: Promise<{ state: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { state } = await params

  if (!state || !(state in STATES)) {
    return { title: 'Free Practice Test | Real Estate Question Bank' }
  }

  const stateInfo = STATES[state as StateKey]
  const stateName = stateInfo.name

  return {
    title: `FREE ${stateName} Real Estate Practice Test - 20 Questions | Real Estate Question Bank`,
    description: `Take our free ${stateName} Real Estate practice test with 20 real exam questions. Get instant feedback, detailed explanations, and prepare for your ${stateName} licensing exam. Updated for 2026.`,
    keywords: [
      `${stateName} Real Estate practice test free`,
      `${stateName} real estate exam`,
      `${stateName} real estate licensing exam questions`,
      `free ${stateName} Real Estate Exam`,
      `${stateName} real estate license practice`,
      `${stateInfo.code} Real Estate Exam 2026`,
    ],
    openGraph: {
      title: `Free ${stateName} Real Estate Practice Test - 20 Questions`,
      description: `Practice for your ${stateName} Real Estate Exam with 20 free questions. Instant scoring and detailed explanations.`,
      url: `https://www.realestatequestionbank.com/state/${state}/practice/free`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Free ${stateName} Real Estate Practice Test`,
      description: `20 free practice questions for your ${stateName} Real Estate Exam.`,
    },
    alternates: {
      canonical: `https://www.realestatequestionbank.com/state/${state}/practice/free`,
    },
  }
}

export async function generateStaticParams() {
  return Object.keys(STATES).map((state) => ({ state }))
}

export default async function FreePracticePage({ params }: PageProps) {
  const { state: stateParam } = await params

  if (!stateParam || !(stateParam in STATES)) {
    notFound()
  }

  const state = stateParam as StateKey

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

    questions = allQuestions.slice(0, 20)
  } catch (error) {
    loadError = error instanceof Error ? error.message : 'Failed to load practice questions'
  }

  // Quiz schema for the base 20-question page (all states)
  let quizSchema = null
  if (questions.length > 0) {
    const stateInfo = STATES[state]
    quizSchema = {
      "@context": "https://schema.org/",
      "@type": "Quiz",
      "name": `${stateInfo.name} Real Estate Practice Test - Free 20 Questions`,
      "description": `Free ${stateInfo.name} Real Estate practice test with ${questions.length} questions. Pass your ${stateInfo.code} real estate exam on the first try.`,
      "hasPart": questions.map((q) => ({
        "@type": "Question",
        "name": q.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": q.options[q.correctAnswer]
        },
        "suggestedAnswer": q.options.map((opt, idx) =>
          idx !== q.correctAnswer ? {
            "@type": "Answer",
            "text": opt
          } : null
        ).filter(Boolean)
      }))
    }
  }

  return (
    <AuthProvider>
      {quizSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(quizSchema) }}
        />
      )}
      <FreePracticePageContent
        state={state}
        initialQuestions={questions}
        initialError={loadError}
        totalQuestionCount={totalQuestionCount}
      />
    </AuthProvider>
  )
}
