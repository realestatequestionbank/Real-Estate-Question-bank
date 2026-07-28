'use client'

import { useState, useMemo } from 'react'
import { useAuth } from '@/contexts/auth-context'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { 
  Search, BookOpen, CheckCircle, X, ChevronRight, Info, HelpCircle, 
  Lightbulb, Compass, ShieldAlert, Award, FileText, ArrowLeft 
} from 'lucide-react'
import { cdlConcepts, CdlConcept } from '@/lib/data/cdl-concepts'

export function CdlConceptsPage() {
  const { user, userData, isPremium, signOut } = useAuth()
  const router = useRouter()

  const handleLogin = () => router.push('/auth/login')
  const handleSignup = () => router.push('/auth/signup')
  const handleLogout = async () => await signOut()
  const handleDashboard = () => router.push('/dashboard')

  // Search & Filters State
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [selectedConcept, setSelectedConcept] = useState<CdlConcept | null>(null)

  // Interactive Question State
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)

  const handleConceptClick = (concept: CdlConcept) => {
    setSelectedConcept(concept)
    setSelectedOption(null)
    setIsAnswered(false)
  }

  const handleOptionSelect = (optionIdx: number) => {
    if (isAnswered) return
    setSelectedOption(optionIdx)
    setIsAnswered(true)
  }

  const renderConceptDetails = (concept: CdlConcept) => {
    const isCorrect = selectedOption === concept.sampleQuestion.correctAnswer

    return (
      <div className="space-y-6 text-left">
        <div>
          <span className="bg-[#007aff]/10 text-[#007aff] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
            {concept.category.replace('_', ' ')}
          </span>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mt-2 leading-tight">
            {concept.title}
          </h2>
        </div>

        {concept.imagePath && (
          <div className="relative rounded-2xl overflow-hidden border border-slate-105 aspect-video bg-slate-50">
            <img
              src={concept.imagePath}
              alt={concept.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="bg-slate-50 border-l-4 border-slate-300 p-4 rounded-r-xl">
          <p className="text-slate-600 text-sm font-medium italic">
            &ldquo;{concept.summary}&rdquo;
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="font-extrabold text-slate-900 text-sm">Detailed Explanation</h4>
          <p className="text-slate-600 text-sm leading-relaxed">
            {concept.description}
          </p>
        </div>

        <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-4 flex gap-3">
          <Lightbulb className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h5 className="font-bold text-amber-900 text-xs uppercase tracking-wide">Real Estate Exam Tip</h5>
            <p className="text-amber-800 text-xs leading-relaxed">
              {concept.realEstateTip}
            </p>
          </div>
        </div>

        {/* Interactive Practice Question */}
        <div className="border-t border-slate-100 pt-6 space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-[#007aff]" />
            <h4 className="font-bold text-slate-900 text-sm">Test Your Knowledge</h4>
          </div>
          <p className="text-slate-800 text-sm font-semibold leading-relaxed">
            {concept.sampleQuestion.question}
          </p>
          
          <div className="space-y-2">
            {concept.sampleQuestion.options.map((option, idx) => {
              const isSelected = selectedOption === idx
              const isOptionCorrect = idx === concept.sampleQuestion.correctAnswer
              
              let optionStyle = "border-slate-200 hover:border-[#007aff]/60 hover:bg-slate-50/50"
              if (isAnswered) {
                if (isOptionCorrect) {
                  optionStyle = "border-emerald-500 bg-emerald-50 text-emerald-950 font-medium"
                } else if (isSelected) {
                  optionStyle = "border-red-500 bg-red-50 text-red-950"
                } else {
                  optionStyle = "border-slate-100 opacity-60"
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleOptionSelect(idx)}
                  disabled={isAnswered}
                  className={`w-full border rounded-xl p-3.5 text-left text-xs transition-all duration-200 flex items-start gap-3 ${optionStyle}`}
                >
                  <span className={`w-5 h-5 rounded-full shrink-0 flex items-center justify-center font-bold text-[10px] ${
                    isAnswered && isOptionCorrect
                      ? 'bg-emerald-500 text-white'
                      : isAnswered && isSelected
                        ? 'bg-red-500 text-white'
                        : isSelected
                          ? 'bg-[#007aff] text-white'
                          : 'bg-slate-100 text-slate-500'
                  }`}>
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="flex-1">{option}</span>
                </button>
              )
            })}
          </div>

          {isAnswered && (
            <div className={`rounded-xl p-4 animate-fade-in border ${
              isCorrect ? 'bg-emerald-50/50 border-emerald-100 text-emerald-800' : 'bg-red-50/50 border-red-100 text-red-800'
            }`}>
              <div className="flex gap-2">
                {isCorrect ? (
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                ) : (
                  <ShieldAlert className="w-5 h-5 text-red-600 shrink-0" />
                )}
                <div className="space-y-1">
                  <h5 className="font-bold text-xs uppercase tracking-wide">
                    {isCorrect ? 'Correct Answer!' : 'Incorrect Answer'}
                  </h5>
                  <p className="text-xs leading-relaxed text-slate-600 mt-1">
                    {concept.sampleQuestion.explanation}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

  // Filter Categories Config
  const categories = [
    { id: 'all', label: 'All Concepts', icon: BookOpen },
    { id: 'general', label: 'Driving Safety', icon: Compass },
    { id: 'air_brakes', label: 'Air Brakes', icon: Info },
    { id: 'combination', label: 'Combinations', icon: Compass },
    { id: 'cargo', label: 'Cargo & Tankers', icon: FileText },
    { id: 'rules', label: 'Logs & Rules', icon: FileText },
    { id: 'endorsements', label: 'Endorsements', icon: Award },
  ]

  // Filtered Concepts Memo
  const filteredConcepts = useMemo(() => {
    return cdlConcepts.filter((concept) => {
      const matchesCategory = activeCategory === 'all' || concept.category === activeCategory
      const matchesSearch = 
        concept.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        concept.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        concept.description.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [searchQuery, activeCategory])

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      {/* Header Navigation */}
      <Navigation
        user={user}
        userData={userData}
        isPremium={isPremium}
        onLogin={handleLogin}
        onSignup={handleSignup}
        onLogout={handleLogout}
        onDashboard={handleDashboard}
        showGetPremiumLink
        premiumGetPremiumText="Pass with Premium"
        premiumGetPremiumLink="/california-cdl-permit-test"
      />

      {/* Breadcrumbs */}
      <div className="bg-white py-3 border-b border-slate-200/60">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-wrap items-center text-sm text-slate-500 gap-y-1">
            <Link href="/" className="hover:text-[#007aff] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 mx-1.5 text-slate-400" />
            <Link href="/#states" className="hover:text-[#007aff] transition-colors">
              States
            </Link>
            <ChevronRight className="w-4 h-4 mx-1.5 text-slate-400" />
            <span className="text-slate-900 font-semibold">Concepts</span>
          </div>
        </div>
      </div>

      {/* Hero Header Section */}
      <section className="py-12 bg-white border-b border-slate-200/60 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-48 h-48 bg-blue-50 rounded-full blur-3xl pointer-events-none"></div>
        <div className="container mx-auto px-4 max-w-5xl text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-[#007aff]/10 border border-[#007aff]/20 text-[#007aff] font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider">
            ?? CDL Study Buddy
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Top High-Yield CDL Written Exam Concepts
          </h1>
          <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Master the most critical regulations, technical mechanics, and road rules tested on the Class A, Class B, and endorsement permit exams.
          </p>
        </div>
      </section>

      {/* Main Content Dashboard */}
      <main className="flex-grow container mx-auto px-4 py-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Left Column: Filter Sidebar & Concepts Grid */}
          <div className="flex-1 space-y-6 w-full">
            
            {/* Search and Filters panel */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm space-y-5">
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search concepts (e.g. GVWR, spring brakes, baffles)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-[#007aff] focus:bg-white transition-all"
                />
              </div>

              {/* Horizontal Scrollable Categories Filters */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                {categories.map((cat) => {
                  const Icon = cat.icon
                  const isActive = activeCategory === cat.id
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                        isActive
                          ? 'bg-blue-50/50 border-[#007aff] text-[#007aff]'
                          : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      {cat.label}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Concepts List Grid */}
            {filteredConcepts.length === 0 ? (
              <div className="bg-white border border-slate-200/80 rounded-2xl p-12 text-center text-slate-500 font-medium">
                No concepts found matching your search. Try adjusting filters or query.
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 gap-4">
                {filteredConcepts.map((concept) => (
                  <div
                    key={concept.id}
                    onClick={() => handleConceptClick(concept)}
                    className={`bg-white border rounded-2xl p-5 text-left flex flex-col justify-between hover:shadow-md cursor-pointer transition-all duration-200 group ${
                      selectedConcept?.id === concept.id
                        ? 'border-2 border-[#007aff]'
                        : 'border-slate-200 hover:border-[#007aff]/60'
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="bg-[#007aff]/10 text-[#007aff] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                          {concept.category.replace('_', ' ')}
                        </span>
                        <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#007aff] transition-colors" />
                      </div>
                      <h3 className="font-extrabold text-slate-900 text-base group-hover:text-[#007aff] transition-colors">
                        {concept.title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                        {concept.summary}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Detailed Reader View (Desktop) */}
          <div className="hidden lg:block w-96 shrink-0 sticky top-24">
            {selectedConcept ? (
              <div className="bg-white border border-slate-200/85 rounded-3xl p-6 shadow-md">
                {renderConceptDetails(selectedConcept)}
              </div>
            ) : (
              <div className="flex bg-white border border-slate-200/80 rounded-3xl p-8 shadow-sm flex-col items-center justify-center text-center space-y-4 min-h-[350px]">
                <BookOpen className="w-12 h-12 text-slate-350" />
                <h3 className="font-bold text-slate-800 text-sm">Select a Concept to Read</h3>
                <p className="text-xs text-slate-400 max-w-[200px] leading-relaxed">
                  Click on any concept card on the left to read its full explanation, visual guides, and test sample questions.
                </p>
              </div>
            )}
          </div>

        </div>
      </main>

      {/* Mobile Drawer (Tablet & Mobile Overlay) */}
      {selectedConcept && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 lg:hidden flex flex-col justify-end">
          <div className="fixed inset-0" onClick={() => setSelectedConcept(null)}></div>
          <div className="bg-white rounded-t-3xl max-h-[85vh] overflow-y-auto p-6 space-y-6 shadow-2xl relative z-10 animate-in slide-in-from-bottom duration-300">
            {/* Grab Bar */}
            <div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mb-2"></div>
            {renderConceptDetails(selectedConcept)}
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  )
}
