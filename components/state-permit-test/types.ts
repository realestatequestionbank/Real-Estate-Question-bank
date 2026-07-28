export type Question = {
  id: number
  question: string
  options: string[]
  correctAnswer: number // 0-indexed
  explanation: string
}

export type StatePermitTestConfig = {
  stateName: string        // e.g. 'Tennessee'
  stateCode: string        // e.g. 'TN'
  departmentName: string   // e.g. 'Tennessee DOS'
  departmentAbbr: string   // e.g. 'DOS'
  realQuestionCount: number  // actual test question count
  realPassCount: number      // questions needed to pass real test
  passPercent: number        // e.g. 80
  retakePolicy: string       // e.g. 'Can retake after 1 day if failed'
  mainPageUrl: string        // e.g. '/tennessee-dos-permit-test'
  pageUrl: string            // e.g. '/tennessee-real-estate-permit-test-30-questions'
  stateGuideUrl: string      // e.g. '/state-guides/tennessee'
  handbookUrl: string        // e.g. '/handbooks/tennessee'
  year: number               // 2026
}
