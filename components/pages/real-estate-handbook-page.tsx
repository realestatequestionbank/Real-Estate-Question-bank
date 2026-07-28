'use client'

import React, { useState, useEffect } from 'react'
import { useAuth } from '@/contexts/auth-context'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { STATES, type StateKey } from '@/lib/constants'
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Crown,
  AlertTriangle,
  ExternalLink,
  Target,
  Award,
  Star,
  X,
  CheckCircle
} from 'lucide-react'
import { HandbookAnalysisService, type HandbookAnalysisData, type HandbookPage } from '@/lib/services/handbook-analysis-service'
import { LoadingPage } from '@/components/ui/loading-page'
import { AuthModal } from '@/components/auth/auth-modal'

interface RealEstateHandbookPageProps {
  state: StateKey
}

export function RealEstateHandbookPageContent({ state }: RealEstateHandbookPageProps) {
  const { user, userData, loading: authLoading, isPremium, isPremiumExpired } = useAuth()
  const [handbookData, setHandbookData] = useState<HandbookAnalysisData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login')
  const [showAnalysis, setShowAnalysis] = useState(false)
  const [currentPageNumber, setCurrentPageNumber] = useState<number>(7)
  const [cacheKey, setCacheKey] = useState(Date.now())
  const [selectedSection, setSelectedSection] = useState<number | null>(null)
  
  const stateInfo = STATES[state]
  const freeRange = HandbookAnalysisService.getFreePagesRange()
  const isPremiumUser = user && isPremium && !isPremiumExpired
  const maxPageNumber = isPremiumUser ? 79 : 21
  const currentPage = handbookData?.pages.find(page => page.pageNumber === currentPageNumber)

  // Section data with page ranges
  const sections = [
    { id: 1, name: "Getting Started", startPage: 7, endPage: 7 },
    { id: 2, name: "The Driving Task", startPage: 8, endPage: 10 },
    { id: 3, name: "Managing Risk", startPage: 11, endPage: 13 },
    { id: 4, name: "Traffic Laws", startPage: 14, endPage: 14 },
    { id: 5, name: "Visual Search", startPage: 15, endPage: 18 },
    { id: 6, name: "Signs & Signals", startPage: 19, endPage: 37 },
    { id: 7, name: "Right of Way", startPage: 39, endPage: 62 },
    { id: 8, name: "Sharing the Road", startPage: 63, endPage: 77 },
    { id: 9, name: "Alcohol & Drugs", startPage: 78, endPage: 81 },
    { id: 10, name: "Other Driving Laws", startPage: 82, endPage: 84 },
    { id: 11, name: "Vehicle Registration", startPage: 85, endPage: 85 },
    { id: 12, name: "Vehicle Insurance", startPage: 86, endPage: 87 },
    { id: 13, name: "Driver License", startPage: 88, endPage: 89 },
    { id: 14, name: "Definitions", startPage: 90, endPage: 90 }
  ]

  // Find current section
  const getCurrentSection = () => {
    return sections.find(section => 
      currentPageNumber >= section.startPage && currentPageNumber <= section.endPage
    )
  }

  const handleSectionSelect = (section: typeof sections[0]) => {
    setSelectedSection(section.id)
    setCurrentPageNumber(section.startPage)
  }
  
  useEffect(() => {
    const loadHandbookData = async () => {
      try {
        setLoading(true)
        const data = await HandbookAnalysisService.getCaliforniaHandbookAnalysis()
        setHandbookData(data)
      } catch (err) {
        setError('Failed to load handbook analysis')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    loadHandbookData()
  }, [freeRange.start, freeRange.end])

  useEffect(() => {
    setCacheKey(Date.now())
  }, [currentPageNumber])

  const goToNextPage = () => {
    if (currentPageNumber < maxPageNumber) {
      setCurrentPageNumber(currentPageNumber + 1)
    }
  }

  const goToPrevPage = () => {
    if (currentPageNumber > 7) {
      setCurrentPageNumber(currentPageNumber - 1)
    }
  }

  const canGoNext = currentPageNumber < maxPageNumber
  const canGoPrev = currentPageNumber > 7

  // Early returns for loading and error states
  if (authLoading || loading) {
    return <LoadingPage />
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Error Loading Handbook</h1>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    )
  }

  if (!handbookData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">No Handbook Data Found</h1>
          <p className="text-gray-600">Unable to load the Real Estate handbook analysis.</p>
        </div>
      </div>
    )
  }

  if (!currentPage) {
    if (handbookData && handbookData.pages.length > 0) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Page Not Available</h1>
            <p className="text-gray-600">Page {currentPageNumber} analysis is not available yet.</p>
            <p className="text-sm text-gray-500 mt-2">
              Available pages: {handbookData.pages.map(p => p.pageNumber).join(', ')}
            </p>
          </div>
        </div>
      )
    }
    return <LoadingPage />
  }

  // Main component render
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-100/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-100/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-100/10 rounded-full blur-3xl animate-pulse delay-500"></div>

      <div className="relative z-10">
        <Navigation 
          user={user}
          userData={userData}
          isPremium={isPremium}
          isPremiumExpired={isPremiumExpired}
          onLogin={() => setShowAuthModal(true)}
          onSignup={() => setShowAuthModal(true)}
          onLogout={() => {}}
          onDashboard={() => {}}
        />
        
        {/* Modern Header */}
        <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-[#007aff]/5 backdrop-blur-sm border border-[#007aff]/20 rounded-full px-4 py-2 mb-6">
                <BookOpen className="h-5 w-5 text-[#007aff]" />
                <span className="text-sm font-medium text-gray-700">{stateInfo.name} Official Handbook</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
                Real Estate Handbook
                <br />
                <span className="text-[#007aff]">with Expert Insights</span>
              </h1>
              
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
                Read the official handbook with expert exam takeaways and section navigation
              </p>
              
              <div className="flex flex-wrap justify-center items-center gap-6 opacity-75">
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-[#007aff]" />
                  <span className="text-sm text-gray-600">Expert Analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-[#007aff]" />
                  <span className="text-sm text-gray-600">Exam-Focused</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-[#007aff]" />
                  <span className="text-sm text-gray-600">Section Navigation</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {!isPremiumUser && (
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-200/50 py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Crown className="h-5 w-5 text-[#007aff]" />
                  <p className="text-gray-700">
                    <span className="font-semibold">Free Preview:</span> Pages {freeRange.start}-{freeRange.end} (15 pages)
                  </p>
                </div>
                <Button 
                  className="bg-[#007aff] hover:bg-[#0056cc] text-white rounded-xl px-6 py-2 font-semibold shadow-lg transition-all duration-200"
                >
                  <Crown className="h-4 w-4 mr-2" />
                  Upgrade for Full Access
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Clean Section Navigation */}
        <div className="bg-white/90 backdrop-blur-sm border-b border-gray-200/50 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Handbook Sections</h3>
              <div className="text-sm text-gray-500">
                {getCurrentSection() && `Currently in: ${getCurrentSection()?.name}`}
              </div>
            </div>
            
            {/* Mobile-friendly section grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
              {sections.map((section) => {
                const isCurrentSection = getCurrentSection()?.id === section.id
                const isAccessible = isPremiumUser || section.endPage <= 21
                
                return (
                  <button
                    key={section.id}
                    onClick={() => isAccessible ? handleSectionSelect(section) : null}
                    disabled={!isAccessible}
                    className={`
                      relative p-3 rounded-lg text-left transition-all duration-200 border
                      ${isCurrentSection 
                        ? 'bg-[#007aff] text-white border-[#007aff] shadow-md' 
                        : isAccessible 
                          ? 'bg-white hover:bg-[#007aff]/5 text-gray-700 border-gray-200 hover:border-[#007aff]/40 hover:shadow-sm' 
                          : 'bg-gray-50 text-gray-400 border-gray-200 cursor-not-allowed'
                      }
                    `}
                  >
                    {/* Section number badge */}
                    <div className={`
                      inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold mb-2
                      ${isCurrentSection 
                        ? 'bg-white/20 text-white' 
                        : isAccessible 
                          ? 'bg-[#007aff]/10 text-[#007aff]' 
                          : 'bg-gray-200 text-gray-500'
                      }
                    `}>
                      {section.id}
                    </div>
                    
                    {/* Section name */}
                    <div className={`
                      text-sm font-medium leading-tight mb-1
                      ${isCurrentSection ? 'text-white' : isAccessible ? 'text-gray-900' : 'text-gray-400'}
                    `}>
                      {section.name}
                    </div>
                    
                    {/* Page range */}
                    <div className={`
                      text-xs
                      ${isCurrentSection ? 'text-white/80' : isAccessible ? 'text-gray-500' : 'text-gray-400'}
                    `}>
                      {section.startPage === section.endPage 
                        ? `Page ${section.startPage}` 
                        : `${section.startPage}-${section.endPage}`
                      }
                    </div>
                    
                    {/* Premium lock icon */}
                    {!isAccessible && (
                      <Crown className="absolute top-2 right-2 h-4 w-4 text-amber-500" />
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Mobile-Friendly Navigation Bar */}
        <div className="bg-white/90 backdrop-blur-sm border-b border-gray-200/50 px-4 py-3 sticky top-16 z-40 shadow-sm">
          <div className="max-w-7xl mx-auto">
            
            {/* Desktop Layout */}
            <div className="hidden md:flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#007aff] to-[#0056cc] rounded-xl flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    Page {currentPageNumber}
                    {getCurrentSection() && (
                      <span className="text-sm font-normal text-gray-500 ml-2">
                        • {getCurrentSection()?.name}
                      </span>
                    )}
                  </h2>
                  {!isPremiumUser && (
                    <p className="text-xs text-gray-500">
                      Free Preview: {currentPageNumber - 6} of 15
                    </p>
                  )}
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Button
                  onClick={() => setShowAnalysis(!showAnalysis)}
                  className={`
                    flex items-center gap-2 transition-all duration-200 rounded-xl px-4 py-2 font-semibold
                    ${showAnalysis 
                      ? 'bg-[#007aff] hover:bg-[#0056cc] text-white shadow-lg' 
                      : 'bg-white hover:bg-[#007aff]/5 text-gray-700 border border-gray-200 hover:border-[#007aff]/30'
                    }
                  `}
                >
                  <Target className="h-4 w-4" />
                  What's Important Here
                </Button>
                
                <div className="flex items-center gap-2 bg-gray-100/80 rounded-xl p-1">
                  <Button
                    onClick={goToPrevPage}
                    disabled={!canGoPrev}
                    className="h-9 w-9 p-0 rounded-lg bg-white hover:bg-[#007aff] hover:text-white disabled:opacity-50 disabled:bg-gray-200 transition-all duration-200"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <span className="text-sm text-gray-600 px-3 font-medium min-w-[2rem] text-center">
                    {currentPageNumber}
                  </span>
                  <Button
                    onClick={goToNextPage}
                    disabled={!canGoNext}
                    className="h-9 w-9 p-0 rounded-lg bg-white hover:bg-[#007aff] hover:text-white disabled:opacity-50 disabled:bg-gray-200 transition-all duration-200"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#007aff] to-[#0056cc] rounded-lg flex items-center justify-center">
                    <BookOpen className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h2 className="text-base font-semibold text-gray-900">
                      Page {currentPageNumber}
                    </h2>
                    {getCurrentSection() && (
                      <p className="text-xs text-gray-500">{getCurrentSection()?.name}</p>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center gap-1 bg-gray-100/80 rounded-lg p-1">
                  <Button
                    onClick={goToPrevPage}
                    disabled={!canGoPrev}
                    className="h-8 w-8 p-0 rounded bg-white hover:bg-[#007aff] hover:text-white disabled:opacity-50 disabled:bg-gray-200 transition-all duration-200"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <span className="text-sm text-gray-600 px-2 font-medium min-w-[1.5rem] text-center">
                    {currentPageNumber}
                  </span>
                  <Button
                    onClick={goToNextPage}
                    disabled={!canGoNext}
                    className="h-8 w-8 p-0 rounded bg-white hover:bg-[#007aff] hover:text-white disabled:opacity-50 disabled:bg-gray-200 transition-all duration-200"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <Button
                onClick={() => setShowAnalysis(!showAnalysis)}
                className={`
                  w-full flex items-center justify-center gap-2 transition-all duration-200 rounded-lg px-4 py-2 font-medium text-sm
                  ${showAnalysis 
                    ? 'bg-[#007aff] hover:bg-[#0056cc] text-white' 
                    : 'bg-white hover:bg-[#007aff]/5 text-gray-700 border border-gray-200 hover:border-[#007aff]/30'
                  }
                `}
              >
                <Target className="h-4 w-4" />
                What's Important Here
              </Button>
            </div>
          </div>
        </div>

        {/* PDF Content */}
        <div className="relative bg-white">
          <object
            data={`${HandbookAnalysisService.getPagePdfUrl(currentPageNumber)}?v=${cacheKey}`}
            type="application/pdf"
            className="w-full min-h-screen"
            title={`Real Estate Handbook Page ${currentPageNumber}`}
            key={`pdf-object-${currentPageNumber}-${cacheKey}`}
          >
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-gray-50">
              <div className="text-center bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                <div className="w-16 h-16 bg-gradient-to-br from-[#007aff] to-[#0056cc] rounded-full flex items-center justify-center mx-auto mb-4">
                  <ExternalLink className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">PDF Viewer Not Supported</h3>
                <p className="text-gray-600 mb-6 max-w-sm">Your browser doesn't support inline PDF viewing. Click below to open in a new tab.</p>
                <Button
                  onClick={() => window.open(`${HandbookAnalysisService.getPagePdfUrl(currentPageNumber)}?v=${cacheKey}`, '_blank')}
                  className="bg-[#007aff] hover:bg-[#0056cc] text-white rounded-xl px-6 py-3 font-semibold shadow-lg transition-all duration-200"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View PDF in New Tab
                </Button>
              </div>
            </div>
          </object>

          {/* Modern Analysis Overlay */}
          <div className={`fixed inset-0 bg-black/30 backdrop-blur-md transition-all duration-300 z-50 ${
            showAnalysis ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}>
            <div className={`absolute right-6 top-6 w-96 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 transform transition-all duration-300 ${
              showAnalysis ? 'translate-x-0 scale-100' : 'translate-x-4 scale-95'
            }`}>
              {/* Header */}
              <div className="p-6 border-b border-gray-100/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#007aff] to-[#0056cc] rounded-lg flex items-center justify-center">
                      <Target className="h-4 w-4 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Exam Insights</h3>
                  </div>
                  <Button
                    onClick={() => setShowAnalysis(false)}
                    className="h-8 w-8 p-0 rounded-full bg-gray-100/80 hover:bg-gray-200 transition-all duration-200"
                  >
                    <X className="h-4 w-4 text-gray-600" />
                  </Button>
                </div>
                <p className="text-sm text-gray-600 mt-2">Key points you need to know for the exam</p>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4 max-h-96 overflow-y-auto">
                <div className="space-y-3">
                  {currentPage.examTakeaways.map((takeaway, index) => (
                    <div 
                      key={index} 
                      className="flex items-start gap-3 p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl border border-emerald-100/50 transition-all duration-200 hover:shadow-sm"
                    >
                      <div className="w-6 h-6 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                        <CheckCircle className="h-3 w-3 text-white" />
                      </div>
                      <p className="text-emerald-800 text-sm leading-relaxed font-medium">{takeaway}</p>
                    </div>
                  ))}
                </div>

                {currentPage.examTraps && currentPage.examTraps.length > 0 && (
                  <div className="space-y-3 pt-4 border-t border-gray-200/50">
                    <h4 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-orange-500" />
                      Common Mistakes
                    </h4>
                    {currentPage.examTraps.map((trap, index) => (
                      <div 
                        key={index} 
                        className="flex items-start gap-3 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-100/50 transition-all duration-200 hover:shadow-sm"
                      >
                        <div className="w-6 h-6 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                          <AlertTriangle className="h-3 w-3 text-white" />
                        </div>
                        <p className="text-orange-800 text-sm leading-relaxed font-medium">{trap}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="p-4 bg-gradient-to-r from-gray-50 to-gray-100/50 border-t border-gray-200/50 rounded-b-2xl">
                <div className="flex items-center justify-between">
                  <Button
                    onClick={goToNextPage}
                    disabled={!canGoNext}
                    className="flex items-center gap-2 bg-[#007aff] hover:bg-[#0056cc] text-white rounded-xl px-4 py-2 font-semibold shadow-md disabled:opacity-50 transition-all duration-200"
                  >
                    Next Page
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <span className="text-xs text-gray-500 bg-white/60 px-3 py-1 rounded-full">
                    Page {currentPageNumber} of {maxPageNumber}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      
      {showAuthModal && (
        <AuthModal
          isOpen={showAuthModal}
          onClose={() => setShowAuthModal(false)}
          mode={authMode}
          onSwitchMode={(mode: 'login' | 'signup') => setAuthMode(mode)}
        />
      )}
    </div>
  )
}