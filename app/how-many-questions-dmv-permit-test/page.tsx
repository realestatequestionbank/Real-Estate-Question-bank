import { Metadata } from 'next'
import Script from 'next/script'
import { AuthProvider } from '@/contexts/auth-context'
import { HowManyQuestionsPageContent } from '@/components/pages/how-many-questions-page'

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

export const metadata: Metadata = {
  title: 'How Many Questions Are on the Real Estate real estate exam? (All 50 States, 2026)',
  description: 'Find out exactly how many questions are on the Real Estate Exam in your state. Complete 2026 table for all 50 states — total questions, passing score, and pass percentage.',
  keywords: [
        'how real-estate practice test 25 questions',
        'how real estate exam',
        'how real estate exam practice',
        'how real estate license test',
        'how to pass real estate exam in How'
    ],
  alternates: { canonical: 'https://www.realestatequestionbank.com/how-many-questions-real-estate-permit-test' },
  openGraph: {
    title: 'How Many Questions Are on the Real Estate real estate exam? (All 50 States, 2026)',
    description: 'Complete table of Real Estate Exam question counts, passing scores, and pass percentages for all 50 states.',
    type: 'website',
    url: 'https://www.realestatequestionbank.com/how-many-questions-real-estate-permit-test',
    siteName: 'Real Estate Question Bank',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_DATA.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer },
  })),
}

export default function HowManyQuestionsDmvPermitTestPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <AuthProvider>
        <HowManyQuestionsPageContent />
      </AuthProvider>
    </>
  )
}
