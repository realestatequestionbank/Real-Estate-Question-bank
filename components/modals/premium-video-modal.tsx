'use client'

import { useState, useRef, useEffect } from 'react'
import { X, Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface PremiumVideoModalProps {
  isOpen: boolean
  onClose: () => void
  onUpgrade?: () => void
  forceDesktopVideo?: boolean
}

export function PremiumVideoModal({ isOpen, onClose, onUpgrade, forceDesktopVideo = false }: PremiumVideoModalProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Check screen size and update video source
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768) // md breakpoint in Tailwind
    }

    // Check initial screen size
    checkScreenSize()

    // Add event listener for screen resize
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  // Get the appropriate video source based on screen size (or force desktop)
  const getVideoSource = () => {
    if (forceDesktopVideo) {
      return '/videos/Premium_Real Estate_Question_Bank_Desktop.mp4'
    }
    return isMobile
      ? '/videos/Premium_Real Estate_Question_Bank_iPhone.mp4'
      : '/videos/Premium_Real Estate_Question_Bank_Desktop.mp4'
  }

  useEffect(() => {
    if (isOpen && videoRef.current) {
      // Update video source and auto-play when modal opens or screen size changes
      const video = videoRef.current
      video.src = getVideoSource()
      video.load() // Reload the video with new source
      
      // Auto-play when loaded
      video.play().then(() => {
        setIsPlaying(true)
        setIsLoading(false)
      }).catch(() => {
        setIsLoading(false)
      })
    }
  }, [isOpen, isMobile])

  useEffect(() => {
    if (!isOpen) {
      // Reset video state when modal closes
      setIsPlaying(false)
      setCurrentTime(0)
      setIsLoading(true)
    }
  }, [isOpen])

  const togglePlayPause = () => {
    if (!videoRef.current) return

    if (isPlaying) {
      videoRef.current.pause()
      setIsPlaying(false)
    } else {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  const toggleMute = () => {
    if (!videoRef.current) return

    videoRef.current.muted = !videoRef.current.muted
    setIsMuted(videoRef.current.muted)
  }

  const handleTimeUpdate = () => {
    if (!videoRef.current) return
    setCurrentTime(videoRef.current.currentTime)
  }

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return
    setDuration(videoRef.current.duration)
    setIsLoading(false)
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return
    const newTime = parseFloat(e.target.value)
    videoRef.current.currentTime = newTime
    setCurrentTime(newTime)
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const handleFullscreen = () => {
    if (!videoRef.current) return
    
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen()
    }
  }

  if (!isOpen) return null

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm ${
      isMobile ? 'bg-white' : 'bg-black/80'
    }`}>
      <div className={`relative w-full overflow-hidden shadow-2xl ${
        isMobile 
          ? 'h-full mx-0 rounded-none bg-white' // Full screen with white bg on mobile
          : 'max-w-4xl mx-4 rounded-2xl bg-black' // Contained with black bg on desktop
      }`}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
            isMobile 
              ? 'top-4 right-4 bg-gray-100 hover:bg-gray-200 text-gray-700' 
              : 'top-4 right-4 bg-black/50 hover:bg-black/70 text-white'
          }`}
          style={isMobile ? { top: 'max(1rem, env(safe-area-inset-top))' } : {}}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Container */}
        <div className={`relative ${
          isMobile 
            ? 'h-[70vh] bg-white' // Take up 70% of viewport height with white bg on mobile
            : 'aspect-video bg-black' // Keep aspect ratio with black bg on desktop
        }`}>
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className={`w-16 h-16 border-4 rounded-full animate-spin ${
                isMobile
                  ? 'border-gray-200 border-t-[#007aff]' // Blue spinner on white for mobile
                  : 'border-white/30 border-t-white' // White spinner on black for desktop
              }`}></div>
            </div>
          )}
          
          <video
            ref={videoRef}
            className="w-full h-full object-contain"
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={() => setIsPlaying(false)}
            playsInline
          >
            Your browser does not support the video tag.
          </video>

          {/* Video Controls Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
            {/* Progress Bar */}
            <div className="mb-4">
              <input
                type="range"
                min="0"
                max={duration || 100}
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-1 bg-white/30 rounded-full appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, #007aff 0%, #007aff ${(currentTime / duration) * 100}%, rgba(255,255,255,0.3) ${(currentTime / duration) * 100}%, rgba(255,255,255,0.3) 100%)`
                }}
              />
            </div>

            {/* Control Buttons */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={togglePlayPause}
                  className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-200"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                </button>

                <button
                  onClick={toggleMute}
                  className="w-8 h-8 flex items-center justify-center text-white hover:text-white/80 transition-colors duration-200"
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>

                <div className="text-white text-sm">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </div>
              </div>

              {/* Hide fullscreen button on mobile since it doesn't work properly */}
              {!isMobile && (
                <button
                  onClick={handleFullscreen}
                  className="w-8 h-8 flex items-center justify-center text-white hover:text-white/80 transition-colors duration-200"
                >
                  <Maximize className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Content Below Video */}
        <div 
          className={`bg-white ${isMobile ? 'p-4' : 'p-6'}`}
          style={isMobile ? { paddingBottom: 'max(1rem, env(safe-area-inset-bottom))' } : {}}
        >
          <h3 className={`font-bold text-gray-900 mb-3 ${isMobile ? 'text-lg' : 'text-2xl'}`}>
            Premium Real Estate Question Bank Features
          </h3>
          {!isMobile && (
            <p className="text-gray-600 mb-6 leading-relaxed">
              See how our premium features help students master their Real Estate Exam with unlimited practice questions, 
              detailed explanations, mock tests, and progress tracking.
            </p>
          )}
          
          <div className={`flex gap-3 ${isMobile ? 'flex-col' : 'flex-col sm:flex-row'}`}>
            <Button
              onClick={onUpgrade}
              className={`bg-[#007aff] hover:bg-[#0056cc] text-white font-semibold rounded-xl transition-all duration-300 ${
                isMobile ? 'px-6 py-4 text-lg' : 'px-6 py-3'
              }`}
            >
              Upgrade to Premium
            </Button>
            <Button
              onClick={onClose}
              variant="outline"
              className={`border-gray-300 text-gray-700 hover:bg-gray-50 font-medium rounded-xl transition-all duration-300 ${
                isMobile ? 'px-6 py-3' : 'px-6 py-3'
              }`}
            >
              Maybe Later
            </Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #007aff;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .slider::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #007aff;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  )
}