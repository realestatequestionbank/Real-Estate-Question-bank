'use client'

import { STATES, type StateKey } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { X, MapPin } from "lucide-react"

interface StateSelectorModalProps {
  isOpen: boolean
  onClose: () => void
  onStateSelect: (state: StateKey) => void
}

export function StateSelectorModal({
  isOpen,
  onClose,
  onStateSelect
}: StateSelectorModalProps) {
  const handleStateClick = (stateKey: StateKey) => {
    onStateSelect(stateKey)
    onClose()
  }

  const stateKeys = Object.keys(STATES) as StateKey[]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-xl w-[95vw] max-h-[85vh] overflow-hidden p-0 bg-white !rounded-xl shadow-2xl !border-0 [&>button:last-child]:hidden">
        {/* Header */}
        <DialogHeader className="bg-[#007aff] text-white p-4 !rounded-t-xl relative overflow-hidden -m-px mt-0 mx-0">
          {/* Animated background elements */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-0 left-0 w-12 h-12 bg-emerald-300/20 rounded-full blur-lg"></div>

          <div className="flex items-center justify-between relative z-10 gap-3">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-7 h-7 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <DialogTitle className="text-sm sm:text-base font-semibold text-white leading-tight">
                Select your state
              </DialogTitle>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors shrink-0"
              aria-label="Close"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </div>
        </DialogHeader>

        {/* States List */}
        <div className="pt-4 px-4 pb-8 sm:pt-5 sm:px-5 sm:pb-10 overflow-y-auto max-h-[60vh] custom-scrollbar">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-1.5">
            {stateKeys.map((stateKey) => {
              const state = STATES[stateKey]

              return (
                <button
                  key={stateKey}
                  onClick={() => handleStateClick(stateKey)}
                  className="text-left py-1.5 px-2 rounded-md text-gray-800 hover:bg-[#007aff] hover:text-white transition-colors duration-200 text-sm font-medium"
                >
                  {state.name}
                </button>
              )
            })}
          </div>
        </div>

<style jsx>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: #f1f5f9;
            border-radius: 3px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #007aff;
            border-radius: 3px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #0056cc;
          }
          
          /* Hide scrollbar on mobile */
          @media (max-width: 640px) {
            .custom-scrollbar::-webkit-scrollbar {
              display: none;
            }
            .custom-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          }
        `}</style>
      </DialogContent>
    </Dialog>
  )
}