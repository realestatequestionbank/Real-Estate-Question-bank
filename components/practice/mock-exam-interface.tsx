'use client'

import { useState } from 'react'
import { MockExam, Question } from '@/lib/types/question'
import { QuestionCard } from './question-card'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { 
  ChevronLeft, 
  ChevronRight, 
  RotateCcw, 
  CheckCircle, 
  Target,
  ArrowRight,
  Trophy
} from 'lucide-react'
import { calculateScore, analyzeCategoryPerformance } from '@/lib/services/question-service'
import { cn } from '@/lib/utils'

interface MockExamInterfaceProps {
  questions: Question[]
  state: string
  categoryName?: string
  onComplete: (exam: Partial<MockExam>) => void
  onExit: () => void
  lang?: 'en' | 'pa'
}

export function MockExamInterface({
  questions,
  state,
  categoryName,
  onComplete,
  onExit,
  lang = 'en'
}: MockExamInterfaceProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null))

  const t = (enText: string) => {
    if (lang === 'pa') {
      const paStrings: Record<string, string> = {
        "Mock Exam": "ਮੌਕ ਪ੍ਰੀਖਿਆ",
        "of": "ਵਿੱਚੋਂ",
        "Mock Exam Completed": "ਮੌਕ ਪ੍ਰੀਖਿਆ ਪੂਰੀ ਹੋਈ",
        "Completed": "ਪੂਰਾ ਹੋਇਆ",
        "Correct": "ਸਹੀ",
        "Incorrect": "ਗਲਤ",
        "Accuracy": "ਸ਼ੁੱਧਤਾ",
        "Time Spent": "ਲੱਗਿਆ ਸਮਾਂ",
        "Back to Dashboard": "ਡੈਸ਼ਬੋਰਡ 'ਤੇ ਵਾਪਸ ਜਾਓ",
        "Restart Exam": "ਪ੍ਰੀਖਿਆ ਦੁਬਾਰਾ ਸ਼ੁਰੂ ਕਰੋ",
        "Exit Exam": "ਪ੍ਰੀਖਿਆ ਤੋਂ ਬਾਹਰ ਜਾਓ",
        "Correct!": "ਸਹੀ!",
        "Incorrect!": "ਗਲਤ!",
        "Finish Exam": "ਪ੍ਰੀਖਿਆ ਪੂਰੀ ਕਰੋ",
        "Next Question": "ਅਗਲਾ ਪ੍ਰਸ਼ਨ",
        "Previous": "ਪਿੱਛੇ",
        "Next": "ਅਗਲਾ",
        "Finish": "ਪੂਰਾ ਕਰੋ"
      }
      return paStrings[enText] || enText
    }
    return enText
  }
  const [isCompleted, setIsCompleted] = useState(false)
  const [startTime] = useState(new Date())
  const [showFeedback, setShowFeedback] = useState<boolean[]>(new Array(questions.length).fill(false))

  const currentQuestion = questions[currentQuestionIndex]
  const currentAnswer = answers[currentQuestionIndex]
  const answeredCount = answers.filter(answer => answer !== null).length
  const progress = (answeredCount / questions.length) * 100



  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestionIndex] = answerIndex
    setAnswers(newAnswers)
    
    // Show immediate feedback
    const newShowFeedback = [...showFeedback]
    newShowFeedback[currentQuestionIndex] = true
    setShowFeedback(newShowFeedback)
  }

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
  }

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }

  const goToQuestion = (index: number) => {
    setCurrentQuestionIndex(index)
  }

  const handleFinishExam = () => {
    const endTime = new Date()
    const scoreData = calculateScore(questions, answers, state)
    
    const exam: Partial<MockExam> = {
      state,
      questions,
      answers,
      startTime,
      endTime,
      score: scoreData.percentage,
      passed: scoreData.passed,
      timeLimit: 0, // No time limit
      completed: true
    }

    setIsCompleted(true)
    onComplete(exam)
  }

  const handleRestart = () => {
    setCurrentQuestionIndex(0)
    setAnswers(new Array(questions.length).fill(null))
    setIsCompleted(false)
    setShowFeedback(new Array(questions.length).fill(false))
  }

  if (isCompleted) {
    const scoreData = calculateScore(questions, answers, state)
    const categoryPerformance = analyzeCategoryPerformance(questions, answers)
    const timeTaken = Math.floor((new Date().getTime() - startTime.getTime()) / 1000)

    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <Card>
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              {scoreData.passed ? (
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                  <Trophy className="w-10 h-10 text-green-600" />
                </div>
              ) : (
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
                  <Target className="w-10 h-10 text-red-600" />
                </div>
              )}
            </div>
            <CardTitle className="text-3xl">
              {scoreData.passed ? 'Congratulations!' : 'Keep Practicing'}
            </CardTitle>
            <p className="text-lg text-gray-600 mt-2">
              {scoreData.passed 
                ? 'You passed the mock exam!' 
                : `You need ${scoreData.passingScore}% or higher to pass`
              }
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600">
                  {scoreData.correctCount}/{scoreData.totalCount}
                </div>
                <div className="text-sm text-blue-800">Correct Answers</div>
              </div>
              <div className={cn(
                "text-center p-4 rounded-lg",
                scoreData.passed ? "bg-green-50" : "bg-red-50"
              )}>
                <div className={cn(
                  "text-3xl font-bold",
                  scoreData.passed ? "text-green-600" : "text-red-600"
                )}>
                  {scoreData.percentage}%
                </div>
                <div className={cn(
                  "text-sm",
                  scoreData.passed ? "text-green-800" : "text-red-800"
                )}>
                  Final Score
                </div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-3xl font-bold text-purple-600">
                  {Math.round((new Date().getTime() - startTime.getTime()) / 60000)}m
                </div>
                <div className="text-sm text-purple-800">Time Taken</div>
              </div>
              <div className={cn(
                "text-center p-4 rounded-lg",
                scoreData.passed ? "bg-green-50" : "bg-red-50"
              )}>
                <div className={cn(
                  "text-3xl font-bold",
                  scoreData.passed ? "text-green-600" : "text-red-600"
                )}>
                  {scoreData.passed ? 'PASS' : 'FAIL'}
                </div>
                <div className={cn(
                  "text-sm",
                  scoreData.passed ? "text-green-800" : "text-red-800"
                )}>
                  Result
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Category Breakdown</h3>
              <div className="space-y-2">
                {Object.entries(categoryPerformance).map(([category, stats]) => (
                  <div key={category} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="font-medium">{category}</span>
                    <div className="flex items-center gap-3">
                      <Progress value={stats.percentage} className="w-20 h-2" />
                      <span className={cn(
                        "font-semibold min-w-[80px] text-right",
                        stats.percentage >= 80 ? "text-green-600" : 
                        stats.percentage >= 60 ? "text-yellow-600" : "text-red-600"
                      )}>
                        {stats.percentage}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <Button onClick={handleRestart} variant="outline" className="flex-1">
                <RotateCcw className="w-4 h-4 mr-2" />
                Retake Exam
              </Button>
              <Button onClick={onExit} className="flex-1">
                <ArrowRight className="w-4 h-4 mr-2" />
                Continue
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-28">
      {/* Exam Header */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-xl font-semibold">
                {categoryName ? `${t(categoryName)} ${t("Mock Exam")}` : t("Mock Real Estate Exam")}
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                {answeredCount} {t("of")} {questions.length} {lang === 'pa' ? 'ਪ੍ਰਸ਼ਨਾਂ ਦੇ ਉੱਤਰ ਦਿੱਤੇ' : 'questions answered'} • {lang === 'pa' ? 'ਪਾਸਿੰਗ ਸਕੋਰ: 80% • ਬਿਨਾਂ ਸਮੇਂ ਦੇ' : 'Passing Score: 80% • Untimed'}
              </p>
            </div>
            <Button 
              variant="outline" 
              onClick={onExit}
              className="flex items-center gap-2"
            >
              <ArrowRight className="w-4 h-4" />
              {t("Exit Exam")}
            </Button>
          </div>
          <Progress value={progress} className="h-2" />
        </CardContent>
      </Card>

      {/* Question Card */}
      <div className="w-full">
        <QuestionCard
          question={currentQuestion}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={questions.length}
          selectedAnswer={currentAnswer}
          onAnswerSelect={handleAnswerSelect}
          showExplanation={showFeedback[currentQuestionIndex]}
        />
      </div>

      {/* Sticky Bottom Actions Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-50 shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
        <div className="max-w-3xl mx-auto flex gap-3">
          {currentQuestionIndex < questions.length - 1 ? (
            <Button
              onClick={goToNextQuestion}
              disabled={currentAnswer === null}
              className="flex-grow bg-[#007aff] hover:bg-[#0066d6] text-white font-bold py-3 h-auto text-sm flex items-center justify-center gap-1.5 shadow-sm transition-all"
            >
              {t("Next Question")}
              <ChevronRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button
              onClick={handleFinishExam}
              className="flex-grow bg-green-500 hover:bg-green-600 text-white font-bold py-3 h-auto text-sm flex items-center justify-center gap-1.5 shadow-sm transition-all"
              disabled={answeredCount === 0 || currentAnswer === null}
            >
              <CheckCircle className="w-4 h-4" />
              {lang === 'pa' ? 'ਪ੍ਰੀਖਿਆ ਸਬਮਿਟ ਕਰੋ' : 'Submit Exam'}
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}