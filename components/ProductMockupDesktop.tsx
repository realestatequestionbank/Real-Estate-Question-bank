import React from 'react'
import { Play, RotateCcw, CheckCircle, User, LogOut, FileText, ShieldCheck } from 'lucide-react'

export function ProductMockupDesktop() {
  return (
    <div className="w-full flex justify-center py-6 select-none">
      {/* MacBook Wrapper Container */}
      <div className="w-full max-w-[680px] px-4">
        {/* Screen/Lid */}
        <div className="relative bg-[#0d0d0d] rounded-t-[20px] p-[10px] shadow-2xl border-t border-x border-[#333]">
          {/* Camera notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-[10px] bg-[#0d0d0d] rounded-b-md z-30 flex items-center justify-center">
            <div className="w-[4px] h-[4px] bg-[#1a1a1a] rounded-full mr-1.5"></div>
            <div className="w-[2px] h-[2px] bg-[#0433ff] rounded-full opacity-60"></div>
          </div>

          {/* Screen Content Bezel Area */}
          <div className="bg-[#f8fafc] rounded-lg overflow-hidden border border-[#222] aspect-[16/10] relative flex flex-col">
            {/* Live Dashboard UI mock inside screen */}
            {/* Header */}
            <header className="bg-white border-b border-gray-100 px-4 py-2.5 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-[#007aff] rounded-md flex items-center justify-center shadow-sm">
                  {/* Small house icon white */}
                  <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <span className="font-extrabold text-xs md:text-sm text-gray-900 tracking-tight">Real Estate Question Bank</span>
              </div>
              
              <div className="flex items-center gap-1.5">
                <div className="flex items-center gap-1 px-2.5 py-1 bg-gray-50 border border-gray-200 rounded-md text-[10px] font-semibold text-gray-700">
                  <User className="w-3 h-3 text-gray-500" />
                  <span>Profile</span>
                </div>
                <div className="flex items-center gap-1 px-2.5 py-1 bg-gray-50 border border-[#e2e8f0] rounded-md text-[10px] font-semibold text-gray-700">
                  <LogOut className="w-3 h-3 text-gray-500" />
                  <span>Logout</span>
                </div>
              </div>
            </header>

            {/* Dashboard Content Container */}
            <div className="flex-1 p-3 md:p-4 overflow-y-auto bg-slate-50/50">
              <div className="grid grid-cols-2 gap-3.5 max-w-3xl mx-auto">
                
                {/* Chapter 1 Card */}
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-3.5 flex flex-col justify-between">
                  <div>
                    {/* Chapter Header */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center border border-blue-100">
                        <FileText className="w-4 h-4 text-[#007aff]" />
                      </div>
                      <div className="flex items-center gap-1 bg-blue-50/70 text-[#007aff] px-2 py-0.5 rounded-full text-[9px] font-bold">
                        <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>In Progress</span>
                      </div>
                    </div>
                    
                    <h3 className="font-extrabold text-[11px] md:text-xs text-gray-900 leading-snug mb-0.5">
                      1. Real Estate Principles & Law
                    </h3>
                    <p className="text-[9px] text-gray-500 font-medium mb-3">4 questions available</p>

                    {/* Progress Bar Area */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between text-[10px] font-bold text-gray-700 mb-1">
                        <span>Progress</span>
                        <span>1/4</span>
                      </div>
                      {/* Bar */}
                      <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden flex">
                        <div className="h-full bg-emerald-500 rounded-full" style={{ width: '25%' }}></div>
                      </div>
                      <div className="flex items-center justify-between text-[8px] text-gray-400 font-semibold mt-1">
                        <span>1 correct, 0 incorrect</span>
                        <span>25% attempted</span>
                      </div>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="space-y-1.5">
                    <button className="w-full bg-[#007aff] hover:bg-blue-600 text-white font-bold text-[10px] py-1.5 px-3 rounded-lg flex items-center justify-center gap-1.5 shadow-sm shadow-blue-500/10 transition-all duration-200">
                      <Play className="w-3 h-3 fill-white" />
                      <span>Continue Practice</span>
                    </button>
                    <button className="w-full bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 font-semibold text-[10px] py-1.5 px-3 rounded-lg flex items-center justify-center gap-1 transition-all duration-200">
                      <RotateCcw className="w-3 h-3 text-gray-400" />
                      <span>Reset Progress</span>
                    </button>
                  </div>
                </div>

                {/* Chapter 2 Card */}
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-3.5 flex flex-col justify-between">
                  <div>
                    {/* Chapter Header */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center border border-blue-100">
                        <ShieldCheck className="w-4 h-4 text-[#007aff]" />
                      </div>
                      <div className="flex items-center gap-1 bg-blue-50/70 text-[#007aff] px-2 py-0.5 rounded-full text-[9px] font-bold">
                        <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>In Progress</span>
                      </div>
                    </div>
                    
                    <h3 className="font-extrabold text-[11px] md:text-xs text-gray-900 leading-snug mb-0.5">
                      2. Agency Relationships & Disclosures
                    </h3>
                    <p className="text-[9px] text-gray-500 font-medium mb-3">54 questions available</p>

                    {/* Progress Bar Area */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between text-[10px] font-bold text-gray-700 mb-1">
                        <span>Progress</span>
                        <span>21/54</span>
                      </div>
                      {/* Multi-segmented Progress Bar */}
                      <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden flex">
                        <div className="h-full bg-[#ef4444]" style={{ width: '22.2%' }}></div>
                        <div className="h-full bg-emerald-500" style={{ width: '16.6%' }}></div>
                      </div>
                      <div className="flex items-center justify-between text-[8px] text-gray-400 font-semibold mt-1">
                        <span>9 correct, 12 incorrect</span>
                        <span>39% attempted</span>
                      </div>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="space-y-1.5">
                    <button className="w-full bg-[#007aff] hover:bg-blue-600 text-white font-bold text-[10px] py-1.5 px-3 rounded-lg flex items-center justify-center gap-1.5 shadow-sm shadow-blue-500/10 transition-all duration-200">
                      <Play className="w-3 h-3 fill-white" />
                      <span>Continue Practice</span>
                    </button>
                    <button className="w-full bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 font-semibold text-[10px] py-1.5 px-3 rounded-lg flex items-center justify-center gap-1 transition-all duration-200">
                      <RotateCcw className="w-3 h-3 text-gray-400" />
                      <span>Reset Progress</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* MacBook Base/Chassis */}
        <div className="relative w-[108%] -left-[4%] h-[12px] bg-[#e2e8f0] rounded-b-xl border-t border-white/60 shadow-lg flex items-center justify-center z-20">
          {/* Display notch opening */}
          <div className="absolute top-0 w-20 h-[5px] bg-[#94a3b8] rounded-b-[4px]"></div>
        </div>
      </div>
    </div>
  )
}
