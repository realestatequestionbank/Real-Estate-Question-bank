export interface CdlCategoryInfo {
  id: string
  name: string
  code: string
  questionsCount: number
  description: string
  icon: string
  isEndorsement: boolean
}

export interface CdlStateData {
  stateName: string
  departmentName: string
  handbookUrl: string
  lastUpdated: string
  pricing: {
    price: number
    duration: number
  }
  seo: {
    title: string
    description: string
    keywords: string[]
  }
  testOverview: {
    totalQuestions: number
    passingScore: number
    timeLimit: string
    ageRequirements: {
      under18: string
      over18: string
    }
  }
  faq: Array<{
    question: string
    answer: string
  }>
  categories: CdlCategoryInfo[]
}
