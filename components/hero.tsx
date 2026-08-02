'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight, Star, CheckCircle, CheckSquare, Lock } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

interface HeroProps {
  onStartFreeTrial: () => void
  isCdl?: boolean
}

export function Hero({ onStartFreeTrial, isCdl = false }: HeroProps) {
  const router = useRouter()

  return (
    <section className="relative min-h-[85vh] md:min-h-[93vh] flex flex-col overflow-hidden">
      {/* Full-width green banner */}
      <div
        onClick={() => router.push(isCdl ? '/get-premium?plan=90&cdl=true' : '/real-estate-premium')}
        className="w-full bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-400 py-2.5 relative overflow-hidden cursor-pointer hover:from-emerald-500 hover:via-green-500 hover:to-emerald-500 transition-all duration-300"
      >
        {/* Shiny effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
        <div className="container mx-auto px-4">
          <p className="text-center text-black font-semibold text-sm md:text-base flex items-center justify-center gap-2">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M8 11V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="12" cy="16" r="1.5" fill="currentColor"/>
            </svg>
            See full question bank for your state
          </p>
        </div>
      </div>

      {/* Hero content */}
      <div className="relative flex-1 flex items-center justify-center">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
          <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-float will-change-transform"></div>
          <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl animate-float-delayed will-change-transform"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-200/25 to-pink-200/25 rounded-full blur-3xl animate-float will-change-transform"></div>
          <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-gradient-to-br from-cyan-200/25 to-blue-200/25 rounded-full blur-3xl animate-float-delayed will-change-transform"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 w-full pt-4 md:pt-8">
        {/* Desktop Layout */}
        <div className="hidden md:block text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#007aff]/5 backdrop-blur-sm border border-[#007aff]/20 rounded-full px-3 md:px-4 py-2 mb-6 md:mb-8 animate-fade-in">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="text-xs md:text-sm font-medium text-gray-700">Trusted by 100K+ Aspiring Agents</span>
          </div>

          <h1 className="hero-title">
            Pass Your Real Estate Licensing Exam.
            <br />
            <span className="text-[#007aff]">Start Your Career.</span>
          </h1>

          {/* Subtitle */}
          <div className="text-base md:text-lg lg:text-xl text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up delay-200 space-y-3">
            <p>
              Top online platform for U.S. real estate licensing exam prep, empowering agents with Full question bank, practice tests, and detailed explanations
            </p>
            <p className="text-base md:text-lg lg:text-xl text-gray-500 font-medium flex items-center justify-center gap-1.5 mx-auto">
              <span className="text-[#007aff] font-semibold">Pass Guarantee:</span> Pass your Real Estate test, or get your money back.
            </p>
          </div>

          {/* CTA Button - Desktop */}
          <div className="animate-slide-up delay-600">
            <Button
              onClick={onStartFreeTrial}
              size="lg"
              className="group bg-[#007aff] hover:bg-[#0056cc] text-white font-semibold px-4 md:px-12 lg:px-16 py-5 md:py-6 lg:py-8 text-base md:text-xl rounded-lg md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 w-full md:w-auto"
            >
              Start Free Practice
              <ArrowRight className="w-5 h-5 ml-2 md:ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 md:mt-10 flex flex-wrap justify-center items-center gap-4 md:gap-6 opacity-70 animate-slide-up delay-800">
            <div className="flex items-center gap-1.5 md:gap-2">
              <CheckCircle className="w-4 md:w-5 h-4 md:h-5 text-[#007aff] flex-shrink-0" />
              <span className="text-xs md:text-sm text-gray-600">State Specific</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2">
              <CheckCircle className="w-4 md:w-5 h-4 md:h-5 text-[#007aff] flex-shrink-0" />
              <span className="text-xs md:text-sm text-gray-600">Money-Back Guarantee</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2">
              <CheckCircle className="w-4 md:w-5 h-4 md:h-5 text-[#007aff] flex-shrink-0" />
              <span className="text-xs md:text-sm text-gray-600">Instant Access</span>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden pb-12">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-3 py-2 shadow-sm">
              <div className="flex items-center gap-0.5">
                <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
              </div>
              <span className="text-xs font-semibold text-gray-900">4.8/5</span>
              <span className="text-xs text-gray-500">• 100K+ students</span>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-extrabold text-left mb-6 leading-tight">
            Pass Your Real Estate Licensing Exam.
            <br />
            <span className="text-[#007aff]">Start Your Career.</span>
          </h2>

          {/* Description Text */}
          <div className="mb-6 text-left space-y-3">
            <p className="text-sm text-gray-700">
              Top online platform for U.S. real estate licensing exam prep, empowering agents with Full question bank, practice tests, and detailed explanations
            </p>
            <p className="text-sm text-gray-500 font-medium">
              <span className="text-[#007aff] font-semibold">Pass Guarantee:</span> Pass your Real Estate test, or get your money back.
            </p>
          </div>

          {/* Feature List */}
          <div className="space-y-1.5 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-white border-2 border-[rgb(0,162,255)] rounded flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-[rgb(0,162,255)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm text-gray-800 font-semibold">100% Pass Guarantee or your money back</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-white border-2 border-[rgb(0,162,255)] rounded flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-[rgb(0,162,255)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm text-gray-800">Actual Exam-like Questions</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-white border-2 border-[rgb(0,162,255)] rounded flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-[rgb(0,162,255)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm text-gray-800">Updated for 2026 Handbooks</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-white border-2 border-[rgb(0,162,255)] rounded flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-[rgb(0,162,255)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm text-gray-800">Unlimited Practice tests</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-white border-2 border-[rgb(0,162,255)] rounded flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-[rgb(0,162,255)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm text-gray-800">State-specific {isCdl ? 'CDL' : 'Real Estate'} Question Bank</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-white border-2 border-[rgb(0,162,255)] rounded flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-[rgb(0,162,255)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm text-gray-800">Progress & Weak area Tracking</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-white border-2 border-[rgb(0,162,255)] rounded flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-[rgb(0,162,255)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm text-gray-800">Car & CDL Question Banks</span>
            </div>
          </div>
        </div>
      </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
      `}</style>
    </section>
  )
}