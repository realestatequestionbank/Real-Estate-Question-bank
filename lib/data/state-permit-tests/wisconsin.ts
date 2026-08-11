import type { Question, StatePermitTestConfig } from '@/components/state-permit-test/types'

export const wisconsinPermitTestConfig: StatePermitTestConfig = {
    stateName: 'Wisconsin',
    stateCode: 'WI',
    departmentName: 'Wisconsin Department of Safety and Professional Services',
    departmentAbbr: 'DSPS',
    realQuestionCount: 140,
    realPassCount: 100,
    passPercent: 70,
    timeLimit: '4 Hours',
    retakePolicy: 'May retake after scheduled waiting period',
    mainPageUrl: '/wisconsin-real-estate-practice-test',
    pageUrl: '/wisconsin-real-estate-practice-test-140-questions',
    stateGuideUrl: '/state-guides/wisconsin',
    handbookUrl: '',
    year: 2026,
}

export const wisconsinPermitTestQuestions: Question[] = [
    {
        id: 1,
        question: "Under fiduciary duty, a real estate agent must disclose which of the following to the principal?",
        options: [
            "All offers to purchase the property, regardless of price or terms",
            "Only offers that meet the seller's asking price",
            "Only written offers accompanied by an earnest money deposit",
            "Only offers from buyers represented by other brokerages"
        ],
        correctAnswer: 0,
        explanation: "Fiduciary duties require a real estate agent to disclose all material facts to their principal, including all offers to purchase, regardless of price or terms."
    },
    {
        id: 2,
        question: "What is the primary difference between a joint tenancy and a tenancy in common?",
        options: [
            "Joint tenancy includes the right of survivorship; tenancy in common does not",
            "Tenancy in common must be created by spouses; joint tenancy is for business entities",
            "Joint tenancy requires unequal ownership interests; tenancy in common requires equal shares",
            "Tenancy in common allows the right of survivorship; joint tenancy does not"
        ],
        correctAnswer: 0,
        explanation: "The primary distinguishing characteristic of a joint tenancy is the right of survivorship, meaning that upon the death of one joint tenant, their interest automatically passes to the surviving joint tenants."
    },
    {
        id: 3,
        question: "A standard title insurance policy typically protects the policyholder against loss from which of the following?",
        options: [
            "Forged documents in the chain of title",
            "Zoning changes enacted after the policy date",
            "Easements not shown by public records but discoverable by a survey",
            "Eminent domain actions"
        ],
        correctAnswer: 0,
        explanation: "A standard title insurance policy covers defects in the public records, such as forged documents, improper deeds, and liens, but excludes zoning changes, eminent domain, and unrecorded easements."
    },
    {
        id: 4,
        question: "Which of the following is considered an example of open, notorious, and hostile possession of property over a statutory period?",
        options: [
            "Adverse possession",
            "Eminent domain",
            "Accretion",
            "Escheat"
        ],
        correctAnswer: 0,
        explanation: "Adverse possession is a method of acquiring title to real property by occupying it in an open, notorious, hostile, and continuous manner for a statutory period."
    },
    {
        id: 5,
        question: "An agreement in which a seller agrees to pay a commission to a broker only if that broker is the procuring cause of the sale is called an:",
        options: [
            "Open listing",
            "Exclusive agency listing",
            "Exclusive right-to-sell listing",
            "Net listing"
        ],
        correctAnswer: 0,
        explanation: "Under an open listing, the seller retains the right to employ any number of brokers. The seller is only obligated to pay a commission to the broker who successfully procures the buyer."
    }
]

export const wisconsinPermitTestFaq: { question: string; answer: string }[] = [
    {
        question: "How many questions are on the real Wisconsin Real Estate Exam?",
        answer: "The real Wisconsin Real Estate licensing exam typically has around 100 to 150 questions (divided between national and state portions). You must score 70% or 75% depending on state regulations to pass."
    },
    {
        question: "What is the passing score for the Wisconsin real estate license exam?",
        answer: "A passing score is generally 70% to 75% correct. Consult the Wisconsin Department of Safety and Professional Services guidelines for your specific examination details."
    },
    {
        question: "Can I use a calculator on the Wisconsin Real Estate Exam?",
        answer: "Yes, you can use a basic, non-programmable silent calculator for real estate math calculation questions. Check the exam center guidelines for approved models."
    }
]
