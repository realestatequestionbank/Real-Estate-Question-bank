'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/auth-context'
import { Navigation } from '@/components/navigation'
import { SlimFooter } from '@/components/slim-footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import {
  Database,
  Book,
  CheckCircle,
  XCircle,
  RotateCcw,
  Play,
  Trophy,
  Lock,
  Loader2,
  ArrowLeft,
  Target,
  BookOpen,
  Star,
  Award,
  TrendingUp,
  Users,
  ChevronRight,
  Crown
} from 'lucide-react'
import { STATES, type StateKey } from '@/lib/constants'
import { Question, ChapterProgress } from '@/lib/types/question'
import { getUserProgress, resetChapterProgress, updateLastActiveState } from '@/lib/services/progress-service'
import { getStateQuestions } from '@/lib/services/question-service'
import { FeaturePageSkeleton } from '@/components/skeletons/feature-page-skeleton'

interface QuestionBankPageProps {
  state: string
}

export function QuestionBankPageContent({ state }: QuestionBankPageProps) {
  const [loading, setLoading] = useState(true)
  const [questions, setQuestions] = useState<Question[]>([])
  const [chapters, setChapters] = useState<{ [key: string]: Question[] }>({})
  const [chapterProgress, setChapterProgress] = useState<{ [key: string]: ChapterProgress }>({})
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null)

  const router = useRouter()
  const { user, userData, isPremium, signOut, loading: authLoading } = useAuth()
  const stateInfo = STATES[state as StateKey]

  // Redirect non-premium users and set last active state
  useEffect(() => {
    if (!authLoading) {
      if (!user || !isPremium) {
        router.push(`/state/${state}/free`)
      } else {
        // Update last active state when a premium user lands here
        updateLastActiveState(user.uid, state)
      }
    }
  }, [user, isPremium, state, router, authLoading])

  // Refresh when user returns to this page
  useEffect(() => {
    const handleFocus = () => {
      if (user && isPremium) {
        console.log('📱 Window focused, refreshing progress...')
        loadQuestionBank()
      }
    }
    
    const handleVisibilityChange = () => {
      if (!document.hidden && user && isPremium) {
        console.log('📱 Page became visible, refreshing progress...')
        loadQuestionBank()
      }
    }
    
    window.addEventListener('focus', handleFocus)
    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => {
      window.removeEventListener('focus', handleFocus)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [user, isPremium])

  useEffect(() => {
    if (user && isPremium) {
      loadQuestionBank()
    }
  }, [user, isPremium, state])

  // Also refresh data when component becomes visible again (e.g., after navigation back)
  useEffect(() => {
    if (user && isPremium) {
      // Small delay to ensure any pending saves have completed
      const timeoutId = setTimeout(() => {
        console.log('🔄 Component mounted/visible, loading question bank...')
        loadQuestionBank()
      }, 100)
      
      return () => clearTimeout(timeoutId)
    }
  }, [user, isPremium, state])

  const loadQuestionBank = async () => {
    if (!user) return

    try {
      setLoading(true)

      // Load all questions for the state
      const questionSet = await getStateQuestions(state, true)
      setQuestions(questionSet.questions)

      // Organize questions by chapter/category
      const chapterGroups: { [key: string]: Question[] } = {}
      questionSet.questions.forEach(question => {
        const chapter = question.chapter || question.category || 'General Knowledge'
        if (!chapterGroups[chapter]) {
          chapterGroups[chapter] = []
        }
        chapterGroups[chapter].push(question)
      })
      setChapters(chapterGroups)

      // Load user progress
      const userProgress = await getUserProgress(user.uid, state)
      console.log('🔍 Loaded user progress for question bank:', {
        hasProgress: !!userProgress,
        chapterProgressKeys: userProgress?.chapterProgress ? Object.keys(userProgress.chapterProgress) : [],
        chapterProgressSample: userProgress?.chapterProgress ? Object.values(userProgress.chapterProgress)[0] : null
      })
      if (userProgress?.chapterProgress) {
        setChapterProgress(userProgress.chapterProgress)
        
        // Log each chapter's progress for debugging
        Object.entries(userProgress.chapterProgress).forEach(([chapter, progress]) => {
          console.log(`📊 Chapter "${chapter}" progress:`, {
            questionsAttempted: progress.questionsAttempted,
            correctAnswers: progress.correctAnswers,
            accuracy: Math.round(progress.accuracy || 0),
            completed: progress.completed,
            correctItems: progress.correctQuestionNumbers?.length || 0,
            incorrectItems: progress.incorrectQuestionNumbers?.length || 0
          })
        })
      }
    } catch (error) {
      console.error('Error loading question bank:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleLogin = () => {
    router.push(`/state/${state}/free`)
  }

  const handleSignup = () => {
    router.push(`/state/${state}/free`)
  }

  const handleLogout = async () => {
    await signOut()
    router.push('/')
  }

  const handleDashboard = () => {
    router.push(`/dashboard?state=${state}`)
  }

  const handleBackToDashboard = () => {
    router.push(`/dashboard?state=${state}`)
  }

  const handleChapterPractice = (chapter: string) => {
    router.push(`/state/${state}/practice/premium?chapter=${encodeURIComponent(chapter)}`)
  }

  const handleResetChapter = async (chapter: string) => {
    if (!user) return

    try {
      // Reset the chapter progress in Firestore
      await resetChapterProgress(user.uid, state, chapter)
      // Reload the question bank to reflect the changes
      console.log('🔄 Refreshing chapter progress after reset...')
      await loadQuestionBank()
    } catch (error) {
      console.error('Failed to reset chapter progress:', error)
    }
  }


  // Show access denied for non-premium users
  if (!authLoading && (!user || !isPremium)) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation
          user={user}
          isPremium={isPremium}
          onLogin={handleLogin}
          onSignup={handleSignup}
          onLogout={handleLogout}
          onDashboard={handleDashboard}
        />

        <main className="container mx-auto px-4 py-16">
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-red-100 text-center max-w-md mx-auto">
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Lock className="w-8 h-8 text-red-500" />
              </div>
              <h2 className="text-2xl font-bold text-red-600 mb-4">
                Premium Access Required
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Question Bank access requires premium membership. Redirecting to upgrade page...
              </p>
              <Button
                onClick={() => router.push(`/state/${state}/free`)}
                className="bg-[#007aff] hover:bg-[#0056cc] text-white font-semibold px-6 py-3 rounded-xl"
              >
                <Crown className="w-4 h-4 mr-2" />
                Get Premium Access
              </Button>
            </div>
          </div>
        </main>

        <SlimFooter />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation
        user={user}
        isPremium={isPremium}
        onLogin={handleLogin}
        onSignup={handleSignup}
        onLogout={handleLogout}
        onDashboard={handleDashboard}
        isLoading={loading || authLoading}
      />

      {loading || authLoading ? <FeaturePageSkeleton /> : null}

      {!loading && !authLoading && (
        <>
          {/* Welcome Header Blue Banner (Full Width, placed right below the header navigation) */}
          <div className="w-full bg-[#007aff] text-white">
            <div className="container mx-auto px-4 py-2.5 md:py-3.5 flex flex-row items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Crown className="w-4 h-4 md:w-5 md:h-5 text-yellow-300 shrink-0" />
                <h1 className="text-sm md:text-base font-bold whitespace-nowrap">
                  {STATES[state as StateKey]?.name} - Study by Chapters
                </h1>
              </div>

              {/* Quick Action */}
              <div className="flex items-center gap-1.5">
                <Button
                  onClick={handleBackToDashboard}
                  size="sm"
                  className="bg-white text-[#007aff] hover:bg-gray-50 font-bold px-3 py-1.5 h-auto text-xs md:text-sm rounded-lg shadow-sm"
                >
                  <ArrowLeft className="w-3.5 h-3.5 mr-1.5" />
                  Back to Dashboard
                </Button>
              </div>
            </div>
          </div>

          <main className="container mx-auto px-4 py-8 lg:py-12">
            {/* Chapters Section */}
            <section className="mb-16">

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {Object.keys(chapters)
                .sort((a, b) => {
                  // Extract chapter numbers for sorting
                  const getChapterNumber = (chapter: string) => {
                    const match = chapter.match(/^(\d+)\./);
                    return match ? parseInt(match[1], 10) : 999;
                  };
                  return getChapterNumber(a) - getChapterNumber(b);
                })
                .map((chapter) => {
                  const chapterQuestions = chapters[chapter]
                  const progress = chapterProgress[chapter]
                  const totalQuestions = chapterQuestions.length
                  const questionsAttempted = progress?.questionsAttempted || 0
                  const correctAnswers = progress?.correctAnswers || 0
                  const accuracy = progress?.accuracy || 0
                  const isCompleted = progress?.completed || false
                  const progressPercentage = totalQuestions > 0 ? (questionsAttempted / totalQuestions) * 100 : 0

                  return (
                    <div
                      key={chapter}
                      className="bg-white rounded-lg p-4 md:p-5 shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer flex flex-col justify-between h-full"
                      style={{ border: '1px solid rgba(0,0,0,0.12)' }}
                      onClick={() => handleChapterPractice(chapter)}
                    >
                      {/* Chapter Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          {isCompleted && (
                            <div className="inline-block bg-green-100 text-green-750 text-[10px] font-bold px-2 py-0.5 rounded mb-2 uppercase tracking-wide">
                              Completed
                            </div>
                          )}
                          <h3 className="text-base md:text-lg font-bold text-black mb-1">
                            {chapter}
                          </h3>
                          <p className="text-xs text-gray-600">
                            {totalQuestions} question{totalQuestions !== 1 ? 's' : ''} available
                          </p>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="mb-4">
                        <div className="flex justify-between text-xs mb-1.5">
                          <span className="font-semibold text-gray-700">Progress</span>
                          <span className="text-gray-600">{questionsAttempted}/{totalQuestions}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden relative">
                          {/* Green bar for correct answers */}
                          <div
                            className="h-full bg-green-500 transition-all duration-300 absolute top-0 left-0"
                            style={{ 
                              width: `${totalQuestions > 0 ? (correctAnswers / totalQuestions) * 100 : 0}%`,
                              borderRadius: `${correctAnswers > 0 ? '12px 0 0 12px' : '0'}`
                            }}
                          />
                          {/* Red bar for incorrect answers, positioned after green */}
                          <div
                            className="h-full bg-red-500 transition-all duration-300 absolute top-0"
                            style={{ 
                              width: `${totalQuestions > 0 ? ((questionsAttempted - correctAnswers) / totalQuestions) * 100 : 0}%`,
                              left: `${totalQuestions > 0 ? (correctAnswers / totalQuestions) * 100 : 0}%`,
                              borderRadius: `${(questionsAttempted - correctAnswers) > 0 && questionsAttempted < totalQuestions ? '0 12px 12px 0' : (questionsAttempted - correctAnswers) > 0 ? '0 12px 12px 0' : '0'}`
                            }}
                          />
                        </div>
                        <div className="flex justify-between text-[11px] text-gray-500 mt-1">
                          <span>{correctAnswers} correct, {questionsAttempted - correctAnswers} incorrect</span>
                          <span>{Math.round(progressPercentage)}% attempted</span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="space-y-2 mb-4 mt-auto">
                        <Button
                          className="w-full bg-[#007aff] hover:bg-[#0056cc] text-white font-semibold py-2 rounded-lg transition-all duration-300 shadow text-xs md:text-sm"
                          onClick={(e) => {
                            e.stopPropagation()
                            handleChapterPractice(chapter)
                          }}
                        >
                          <Play className="w-3.5 h-3.5 mr-1.5" />
                          {questionsAttempted > 0 ? 'Continue Practice' : 'Start Chapter'}
                        </Button>

                        {questionsAttempted > 0 && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full font-medium py-1.5 rounded-lg border-gray-300 hover:border-gray-400 transition-all duration-300 text-xs"
                            onClick={(e) => {
                              e.stopPropagation()
                              handleResetChapter(chapter)
                            }}
                          >
                            <RotateCcw className="w-3 h-3 mr-1.5" />
                            Reset Progress
                          </Button>
                        )}
                      </div>


                      {/* Status Badge */}
                      <div className="flex items-center justify-center gap-1.5 text-xs pt-3 border-t border-gray-100 mt-4">
                        {isCompleted ? (
                          <>
                            <CheckCircle className="w-3.5 h-3.5 text-green-600" />
                            <span className="text-green-600 font-medium">Chapter Mastered</span>
                          </>
                        ) : questionsAttempted > 0 ? (
                          <>
                            <Target className="w-3.5 h-3.5 text-[#007aff]" />
                            <span className="text-[#007aff] font-medium">In Progress</span>
                          </>
                        ) : (
                          <>
                            <BookOpen className="w-3.5 h-3.5 text-gray-400" />
                            <span className="text-gray-600">Ready to Start</span>
                          </>
                        )}
                      </div>
                    </div>
                  )
                })}
            </div>
          </section>
        </main>
      </>
      )}

      <SlimFooter />
    </div>
  )
}