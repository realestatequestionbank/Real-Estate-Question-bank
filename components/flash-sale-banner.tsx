'use client'

import { useState, useEffect } from 'react'
import { X, Clock } from 'lucide-react'
import { FLASH_SALE, isFlashSaleActive } from '@/lib/constants'
import { cn } from '@/lib/utils'

interface FlashSaleBannerProps {
  onClose?: () => void
  onClick?: () => void
  isCollapsed?: boolean
  sticky?: boolean
}

export function FlashSaleBanner({ onClose, onClick, isCollapsed = false, sticky = true }: FlashSaleBannerProps) {
  const [timeLeft, setTimeLeft] = useState('')
  const [isExpired, setIsExpired] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Use the shared helper to determine initial visibility
  const isActive = isFlashSaleActive()

  useEffect(() => {
    setMounted(true)
    // Double check expiration on mount
    if (!isActive) {
      setIsExpired(true)
    }
  }, [isActive])

  useEffect(() => {
    if (!FLASH_SALE.enabled || isExpired) return

    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const endTime = new Date(FLASH_SALE.endTime).getTime()
      const difference = endTime - now

      if (difference <= 0) {
        setIsExpired(true)
        setTimeLeft('00:00:00')
        return
      }

      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft(
        `${hours.toString().padStart(2, '0')}:${minutes
          .toString()
          .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
      )
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [isExpired])

  if (!mounted) return null

  // Combine internal expiration state with global helper
  if (!FLASH_SALE.enabled || isExpired || !isActive) {
    return null
  }

  const formatTime = (num: number) => num.toString().padStart(2, '0')

  return (
    <div
      className={`bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-center relative transition-all duration-300 group cursor-pointer shadow-sm ${sticky ? 'sticky top-0 z-50' : ''
        } ${isCollapsed ? 'py-1 md:py-4' : 'py-2 md:py-4'}`}
      onClick={onClick}
    >
      <div className="container mx-auto px-4 pr-12 flex items-center justify-center flex-wrap gap-2">
        {isCollapsed ? (
          // Collapsed view for mobile
          <span className="font-semibold text-xs leading-relaxed flex items-center gap-2 md:hidden">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-blue-900 px-1.5 py-0.5 rounded font-bold text-xs animate-pulse border border-yellow-300">
              upto 20% Off
            </span>
            <span className="flex items-center gap-1">
              <span className="bg-white/20 px-1.5 py-0.5 rounded">
                <span className="font-bold text-yellow-300">{timeLeft.split(':')[0] || '00'}</span>
                <span className="text-white/80 text-[10px] ml-0.5">h</span>
              </span>
              <span className="bg-white/20 px-1.5 py-0.5 rounded">
                <span className="font-bold text-yellow-300">{timeLeft.split(':')[1] || '00'}</span>
                <span className="text-white/80 text-[10px] ml-0.5">m</span>
              </span>
              <span className="bg-white/20 px-1.5 py-0.5 rounded">
                <span className="font-bold text-yellow-300">{timeLeft.split(':')[2] || '00'}</span>
                <span className="text-white/80 text-[10px] ml-0.5">s</span>
              </span>
            </span>
          </span>
        ) : null}
        {/* Full view - always shown on desktop, only when not collapsed on mobile */}
        <span className={`font-semibold text-sm md:text-base leading-relaxed items-center gap-1.5 md:gap-2 flex-wrap justify-center ${isCollapsed ? 'hidden md:flex' : 'flex'}`}>
          <span className="hidden sm:inline">Exclusive Offer:</span>
          <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-blue-900 px-2 py-1 md:px-2.5 md:py-1.5 rounded-lg md:rounded-xl font-bold shadow-lg animate-pulse border border-yellow-300 text-xs md:text-sm">
            upto 20% Off
          </span>
          <span className="hidden sm:inline">—</span>
          <span>Ends in</span>
          <span className="flex items-center gap-1 ml-1">
            <span className="bg-white/20 backdrop-blur-sm px-1.5 py-0.5 md:px-2 md:py-1 rounded-lg">
              <span className="font-bold text-yellow-300 text-base md:text-lg">{timeLeft.split(':')[0] || '00'}</span>
              <span className="text-white/80 text-[10px] md:text-xs ml-0.5 md:ml-1">HRS</span>
            </span>
            <span className="text-yellow-300">:</span>
            <span className="bg-white/20 backdrop-blur-sm px-1.5 py-0.5 md:px-2 md:py-1 rounded-lg">
              <span className="font-bold text-yellow-300 text-base md:text-lg">{timeLeft.split(':')[1] || '00'}</span>
              <span className="text-white/80 text-[10px] md:text-xs ml-0.5 md:ml-1">MIN</span>
            </span>
            <span className="text-yellow-300">:</span>
            <span className="bg-white/20 backdrop-blur-sm px-1.5 py-0.5 md:px-2 md:py-1 rounded-lg">
              <span className="font-bold text-yellow-300 text-base md:text-lg">{timeLeft.split(':')[2] || '00'}</span>
              <span className="text-white/80 text-[10px] md:text-xs ml-0.5 md:ml-1">SEC</span>
            </span>
          </span>
          <span className="ml-1">→</span>
        </span>
      </div>
      <button
        className={`absolute right-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white rounded-xl hover:bg-white/10 transition-all duration-200 ${isCollapsed ? 'p-1 md:p-1.5' : 'p-1.5'
          }`}
        onClick={(e) => {
          e.stopPropagation()
          if (onClose) onClose()
        }}
        aria-label="Dismiss banner"
      >
        <X className={isCollapsed ? 'w-3 h-3 md:w-4 md:h-4' : 'w-4 h-4'} />
      </button>
    </div>
  )
}
