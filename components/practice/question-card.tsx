'use client'

import { useState } from 'react'
import { Question } from '@/lib/types/question'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle, XCircle, Clock, AlertCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

interface QuestionCardProps {
  question: Question
  questionNumber: number
  totalQuestions: number
  selectedAnswer: number | null
  onAnswerSelect: (answerIndex: number) => void
  showExplanation?: boolean
  isReviewMode?: boolean
  chapter?: string | null
  mode?: string | null
}

export function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  onAnswerSelect,
  showExplanation = false,
  isReviewMode = false,
  chapter = null,
  mode = null
}: QuestionCardProps) {
  const isAnswered = selectedAnswer !== null
  const isCorrect = isAnswered && selectedAnswer === question.correctAnswer

  return (
    <Card className="w-full">
      <CardHeader className="p-4 md:p-6">
        <div className={cn(
          "mb-2",
          mode === 'uncommon-sense' ? "flex justify-center" : "flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2"
        )}>
          {/* Question Bank Mode: Chapter name on left */}
          {chapter && mode !== 'uncommon-sense' && (
            <div className="text-sm text-gray-600 font-medium truncate">
              {chapter.replace(/^\d+\.\s*/, '')}
            </div>
          )}
          
          {/* Uncommon Sense Mode: Centered question number */}
          {mode === 'uncommon-sense' ? (
            <div className="text-sm text-gray-600 font-medium">
              Question {questionNumber} of {totalQuestions}
            </div>
          ) : (
            /* Question Bank Mode: Right side with difficulty and question number */
            <div className="flex items-center gap-2 justify-between sm:justify-start">
              {chapter && (
                <span className={cn(
                  "px-2 py-1 rounded text-xs font-medium",
                  question.difficulty === 'easy' && "bg-green-100 text-green-800",
                  question.difficulty === 'medium' && "bg-yellow-100 text-yellow-800",
                  question.difficulty === 'hard' && "bg-red-100 text-red-800"
                )}>
                  {question.difficulty}
                </span>
              )}
              <div className="text-sm text-gray-600 font-medium">
                {questionNumber}/{totalQuestions}
              </div>
            </div>
          )}
        </div>
        <CardTitle className="text-lg md:text-xl leading-relaxed">
          {question.question}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 md:p-6 pt-0 space-y-4">
        <div className="space-y-3">
          {question.options.map((option, index) => {
            const isSelected = selectedAnswer === index
            const isCorrectOption = index === question.correctAnswer

            let buttonVariant: "outline" | "default" | "destructive" | "success" = "outline"
            let icon = null

            if (isReviewMode || showExplanation) {
              if (isCorrectOption) {
                buttonVariant = "success"
                icon = <CheckCircle className="w-4 h-4" />
              } else if (isSelected && !isCorrectOption) {
                buttonVariant = "destructive"
                icon = <XCircle className="w-4 h-4" />
              }
            } else if (isSelected) {
              buttonVariant = "default"
            }

            return (
              <Button
                key={index}
                variant={buttonVariant}
                className={cn(
                  "w-full justify-start text-left h-auto py-4 px-3 md:px-4 min-h-[3.5rem] md:min-h-[3rem]",
                  isSelected && !isReviewMode && !showExplanation && "ring-2 ring-blue-500"
                )}
                onClick={() => {
                  console.log('🔘 Button clicked:', index, 'ReviewMode:', isReviewMode)
                  if (!isReviewMode) {
                    onAnswerSelect(index)
                  }
                }}
                disabled={isReviewMode}
              >
                <div className="flex items-start gap-2 md:gap-3 w-full">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center text-sm font-medium mt-0.5">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="flex-1 text-left text-sm md:text-base leading-relaxed break-words whitespace-normal">{option}</span>
                  {icon && <span className="flex-shrink-0 mt-0.5">{icon}</span>}
                </div>
              </Button>
            )
          })}
        </div>


        {isAnswered && !showExplanation && !isReviewMode && (
          <div className={cn(
            "p-3 md:p-4 rounded-lg flex items-center gap-2",
            isCorrect ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
          )}>
            {isCorrect ? (
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
            ) : (
              <XCircle className="w-5 h-5 flex-shrink-0" />
            )}
            <span className="font-medium text-sm md:text-base">
              {isCorrect ? "Correct!" : "Incorrect"}
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  )
}