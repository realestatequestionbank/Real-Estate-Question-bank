import React from 'react'
import { Menu, X } from 'lucide-react'

export function ProductMockupMobile() {
  return (
    <div className="w-full flex justify-center py-4 select-none">
      {/* iPhone Outer Chassis */}
      <div className="relative w-[280px] bg-[#1a1a1a] rounded-[44px] p-3 shadow-2xl border-4 border-[#2d2d2d] flex-shrink-0">
        
        {/* Dynamic Island */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#000] rounded-full z-30 flex items-center justify-between px-3">
          {/* Small lens reflections */}
          <div className="w-2.5 h-2.5 bg-[#1a1a1a] rounded-full"></div>
          <div className="w-[3px] h-[3px] bg-[#0433ff] rounded-full opacity-40"></div>
        </div>

        {/* Side buttons (Volume, Power) */}
        <div className="absolute left-[-6px] top-24 w-1.5 h-10 bg-[#333] rounded-l-md"></div>
        <div className="absolute left-[-6px] top-36 w-1.5 h-12 bg-[#333] rounded-l-md"></div>
        <div className="absolute left-[-6px] top-50 w-1.5 h-12 bg-[#333] rounded-l-md"></div>
        <div className="absolute right-[-6px] top-32 w-1.5 h-16 bg-[#333] rounded-r-md"></div>

        {/* Screen Bezel / Container */}
        <div className="bg-[#f8fafc] rounded-[32px] overflow-hidden border-2 border-black aspect-[9/19.5] relative flex flex-col">
          
          {/* Status Bar Spacer */}
          <div className="h-9 shrink-0 flex items-center justify-between px-6 text-[10px] font-bold text-gray-800">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              {/* Signal strength, Battery */}
              <svg className="w-3.5 h-3 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
              </svg>
              <div className="w-4 h-2 border border-gray-800 rounded-sm p-[1px] flex items-center">
                <div className="w-full h-full bg-gray-800 rounded-2xs"></div>
              </div>
            </div>
          </div>

          {/* Header */}
          <header className="bg-white border-b border-gray-100 px-4 py-2.5 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-1.5">
              <div className="w-5.5 h-5.5 bg-[#007aff] rounded-md flex items-center justify-center shadow-xs">
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <span className="font-extrabold text-xs text-gray-900 tracking-tight">Real Estate Question Bank</span>
            </div>
            <Menu className="w-4 h-4 text-gray-800" />
          </header>

          {/* Content Area */}
          <div className="flex-1 p-3 flex flex-col justify-between overflow-y-auto">
            <div className="space-y-3">
              
              {/* Question Count Header */}
              <div className="bg-white rounded-lg border border-gray-100 p-2.5 flex items-center justify-between shadow-xs">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-gray-800 block">Question 19 of 27</span>
                  {/* Progress Line */}
                  <div className="w-24 h-1 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#007aff] rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
                <button className="bg-red-50 hover:bg-red-100 text-red-600 font-bold text-[9px] px-2.5 py-1 rounded-md border border-red-100 transition-colors">
                  Exit
                </button>
              </div>

              {/* Question Card */}
              <div className="bg-white rounded-xl border border-gray-100 p-3.5 shadow-sm space-y-3">
                <p className="text-[11px] font-extrabold text-gray-900 leading-normal">
                  A broker who represents both the buyer and the seller in the same transaction is known as a:
                </p>

                {/* Option choices list */}
                <div className="space-y-2">
                  <div className="border border-[#007aff] bg-blue-50/20 rounded-lg p-2 text-left text-[10px] font-bold text-gray-850 flex items-center justify-between">
                    <span>A. Dual agent</span>
                    <div className="w-3.5 h-3.5 rounded-full bg-[#007aff] flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    </div>
                  </div>

                  <div className="border border-gray-200 hover:border-gray-300 rounded-lg p-2 text-left text-[10px] font-semibold text-gray-600 transition-colors">
                    B. Single agent
                  </div>

                  <div className="border border-gray-200 hover:border-gray-300 rounded-lg p-2 text-left text-[10px] font-semibold text-gray-600 transition-colors">
                    C. Transaction coordinator
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Actions */}
            <div className="relative pt-4">
              {/* Floating Grid Icon Button */}
              <div className="absolute right-1 -top-9">
                <div className="w-8 h-8 rounded-full bg-[#007aff] text-white flex flex-col items-center justify-center shadow-md cursor-pointer hover:bg-blue-600 transition-colors">
                  <span className="text-[7px] font-extrabold uppercase leading-none">19/27</span>
                  <div className="grid grid-cols-2 gap-[1px] mt-[2px]">
                    <div className="w-[3px] h-[3px] bg-white rounded-3xs"></div>
                    <div className="w-[3px] h-[3px] bg-white rounded-3xs"></div>
                    <div className="w-[3px] h-[3px] bg-white rounded-3xs"></div>
                    <div className="w-[3px] h-[3px] bg-white rounded-3xs"></div>
                  </div>
                </div>
              </div>

              {/* Bottom Buttons */}
              <div className="flex gap-2 shrink-0">
                <button className="flex-1 bg-white hover:bg-gray-50 border border-gray-200 text-gray-600 font-bold text-[10px] py-2 px-3 rounded-lg text-center transition-all duration-200">
                  Previous
                </button>
                <button className="flex-1 bg-[#007aff] hover:bg-blue-600 text-white font-bold text-[10px] py-2 px-3 rounded-lg text-center shadow-xs transition-all duration-200">
                  Next
                </button>
              </div>
            </div>

          </div>

          {/* Bottom Bar Indicator */}
          <div className="h-5 shrink-0 flex items-center justify-center">
            <div className="w-24 h-[4px] bg-gray-400 rounded-full"></div>
          </div>

        </div>
      </div>
    </div>
  )
}
