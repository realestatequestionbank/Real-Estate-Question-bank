/**
 * Rounds a question count to the nearest 50 and adds a "+" suffix
 * Examples:
 * - 464 questions -> "450+ questions"
 * - 420 questions -> "400+ questions"
 * - 510 questions -> "500+ questions"
 */
export function formatQuestionCount(count: number): string {
  if (count === 2000) return "2000";
  // Round down to the nearest 50
  const roundedDown = Math.floor(count / 50) * 50
  return `${roundedDown}+`
}

/**
 * Gets a formatted display string for premium questions
 */
export function getPremiumQuestionsDisplay(premiumQuestions: number): string {
  const roundedCount = formatQuestionCount(premiumQuestions)
  return `${roundedCount} questions`
}