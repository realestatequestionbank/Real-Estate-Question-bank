'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import {
    ChevronRight,
    Play,
    Pause,
    Volume2,
    VolumeX,
    RotateCcw,
    RotateCw,
    Headphones,
    BookOpen,
    Sparkles,
    BookOpenCheck,
    ChevronLeft,
    SkipBack,
    SkipForward
} from 'lucide-react'
import { useAuth } from '@/contexts/auth-context'
import { StateSelectorModal } from '@/components/state-selector-modal'
import { StateKey, STATES } from '@/lib/constants'
import { getDepartmentName } from '@/lib/data/state-departments'
import { AudioTrack } from '@/lib/data/audio-tracks'

interface AudioViewerProps {
    state: StateKey
    stateName: string
    departmentName: string
    tracks: AudioTrack[]
    isFallback?: boolean
}

export function AudioViewer({ state, stateName, departmentName, tracks, isFallback = false }: AudioViewerProps) {
    const [stateModalOpen, setStateModalOpen] = useState(false)
    const router = useRouter()
    const { user, userData, isPremium, premiumStatus, signOut, loading: authLoading } = useAuth()

    // Audio State
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const [playbackRate, setPlaybackRate] = useState(1.0)
    const [volume, setVolume] = useState(0.8)
    const [isMuted, setIsMuted] = useState(false)
    const currentTrack = tracks[currentTrackIndex] || null

    const audioRef = useRef<HTMLAudioElement | null>(null)
    const currentTrackIndexRef = useRef(currentTrackIndex)
    const isSeekingRef = useRef(false)
    const tracksRef = useRef(tracks)

    // Sync refs to avoid stale enclosures in event listeners
    useEffect(() => {
        currentTrackIndexRef.current = currentTrackIndex
    }, [currentTrackIndex])

    useEffect(() => {
        tracksRef.current = tracks
    }, [tracks])

    // Initialize HTML5 Audio ONCE on mount
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const audio = new Audio()
            audioRef.current = audio
            audio.volume = volume
            audio.playbackRate = playbackRate
            audio.muted = isMuted

            const onTimeUpdate = () => {
                if (audio && !isSeekingRef.current) {
                    setCurrentTime(audio.currentTime)
                }
            }

            const onLoadedMetadata = () => {
                if (audio) {
                    setDuration(audio.duration)
                    // Re-apply playbackRate here as browsers reset it when src changes
                    audio.playbackRate = playbackRate
                }
            }

            const onEnded = () => {
                const currentIdx = currentTrackIndexRef.current
                const currentTracks = tracksRef.current
                if (currentIdx < currentTracks.length - 1) {
                    setCurrentTrackIndex(prev => prev + 1)
                } else {
                    setIsPlaying(false)
                    setCurrentTime(0)
                }
            }

            audio.addEventListener('timeupdate', onTimeUpdate)
            audio.addEventListener('loadedmetadata', onLoadedMetadata)
            audio.addEventListener('ended', onEnded)

            return () => {
                audio.pause()
                audio.removeEventListener('timeupdate', onTimeUpdate)
                audio.removeEventListener('loadedmetadata', onLoadedMetadata)
                audio.removeEventListener('ended', onEnded)
            }
        }
    }, [])

    // Synchronize play state, source, volume, speed, and muted states when track changes
    useEffect(() => {
        if (audioRef.current && currentTrack) {
            const wasPlaying = isPlaying
            audioRef.current.src = currentTrack.url
            audioRef.current.load()
            audioRef.current.playbackRate = playbackRate
            audioRef.current.volume = isMuted ? 0 : volume
            audioRef.current.muted = isMuted

            if (wasPlaying) {
                audioRef.current.play()
                    .then(() => setIsPlaying(true))
                    .catch(() => setIsPlaying(false))
            } else {
                setIsPlaying(false)
                setCurrentTime(0)
            }
        }
    }, [currentTrackIndex])

    // Synchronize playback speed
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.playbackRate = playbackRate
        }
    }, [playbackRate])

    // Synchronize volume and mute states
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume
            audioRef.current.muted = isMuted
        }
    }, [volume, isMuted])

    // Handle Play/Pause
    const togglePlay = () => {
        if (!audioRef.current) return
        if (isPlaying) {
            audioRef.current.pause()
            setIsPlaying(false)
        } else {
            audioRef.current.play()
                .then(() => setIsPlaying(true))
                .catch((err) => console.log('Playback error:', err))
        }
    }

    // Skip Backwards / Forwards
    const skipTime = (amount: number) => {
        if (!audioRef.current) return
        audioRef.current.currentTime = Math.min(
            duration,
            Math.max(0, audioRef.current.currentTime + amount)
        )
    }

    // Speed Control
    const changeSpeed = (rate: number) => {
        setPlaybackRate(rate)
    }

    // Seek Timeline dragging states
    const handleSeekStart = () => {
        isSeekingRef.current = true
    }

    const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = parseFloat(e.target.value)
        setCurrentTime(val)
    }

    const handleSeekEnd = (e: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLInputElement> | React.TouchEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement
        const val = parseFloat(target.value)
        isSeekingRef.current = false
        setCurrentTime(val)
        if (audioRef.current) {
            audioRef.current.currentTime = val
        }
    }

    // Volume Control
    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = parseFloat(e.target.value)
        setVolume(val)
        setIsMuted(val === 0)
    }

    // Toggle Mute
    const toggleMute = () => {
        setIsMuted(!isMuted)
    }

    // Next / Previous Track Action
    const handleNextTrack = () => {
        if (currentTrackIndex < tracks.length - 1) {
            setCurrentTrackIndex(prev => prev + 1)
            setTimeout(() => {
                if (audioRef.current) {
                    audioRef.current.play()
                        .then(() => setIsPlaying(true))
                        .catch(() => setIsPlaying(false))
                }
            }, 100)
        }
    }

    const handlePrevTrack = () => {
        if (currentTrackIndex > 0) {
            setCurrentTrackIndex(prev => prev - 1)
            setTimeout(() => {
                if (audioRef.current) {
                    audioRef.current.play()
                        .then(() => setIsPlaying(true))
                        .catch(() => setIsPlaying(false))
                }
            }, 100)
        }
    }

    // Format time (seconds -> mm:ss)
    const formatTime = (timeInSecs: number) => {
        if (isNaN(timeInSecs)) return '0:00'
        const mins = Math.floor(timeInSecs / 60)
        const secs = Math.floor(timeInSecs % 60)
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`
    }

    const stateCode = STATES[state].code

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <div className="sticky top-0 z-50">
                <Navigation
                    user={user}
                    userData={userData}
                    isPremium={isPremium}
                    premiumStatus={premiumStatus}
                    onLogin={() => router.push('/get-premium')}
                    onSignup={() => router.push('/get-premium')}
                    onLogout={async () => {
                        await signOut()
                        router.push('/')
                    }}
                    onDashboard={() => router.push('/dashboard')}
                    onPurchaseRenewal={() => router.push('/get-premium')}
                    premiumButtonText="Get Premium"
                    premiumButtonAction={() => router.push('/real-estate-premium')}
                    isLoading={authLoading}
                    onSelectState={() => setStateModalOpen(true)}
                    hideLicenseSwitcher={true}
                />
            </div>

            {/* Breadcrumbs */}
            <div className="bg-white border-b border-gray-100 py-3">
                <div className="container mx-auto px-4">
                    <div className="flex items-center text-sm text-gray-600">
                        <Link href="/" className="hover:text-[#007aff] transition-colors">
                            Home
                        </Link>
                        <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
                        <Link href="/#states" className="hover:text-[#007aff] transition-colors">
                            States
                        </Link>
                        <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
                        <Link href={`/handbooks/${state}`} className="hover:text-[#007aff] transition-colors">
                            {stateName} Handbook
                        </Link>
                        <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
                        <span className="text-gray-900 font-medium">Audio Handbook</span>
                    </div>
                </div>
            </div>

            <main className="flex-grow container mx-auto px-4 py-8">
                {/* Header Section */}
                <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                        <Link
                            href={`/handbooks/${state}`}
                            className="inline-flex items-center gap-1 text-sm text-[#007aff] hover:text-[#0056cc] transition-colors mb-3"
                        >
                            <ChevronLeft className="w-4 h-4" />
                            Back to Read Handbook
                        </Link>
                        <div className="flex items-center gap-3">
                            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                                {stateName} Real Estate Audio Handbook 2026
                            </h1>
                            {isFallback && (
                                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-550/10 text-indigo-700">
                                    <Sparkles className="w-3 h-3 text-indigo-650" />
                                    AI Audio Beta
                                </span>
                            )}
                        </div>
                        <p className="text-gray-600 mt-2 max-w-none text-sm md:text-base">
                            Listen to the official 2026 {stateName} driver&apos;s manual. Perfect for studying on the go or while multi-tasking to pass your written real estate exam.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Column: Player & Study Takeaways */}
                    <div className="lg:col-span-8 space-y-6">
                        {/* Interactive Player Card */}
                        <div className="bg-gradient-to-br from-[#1c1c1e] to-[#2c2c2e] text-white rounded-2xl p-5 md:p-6 shadow-xl relative overflow-hidden">
                            {/* Glassmorphic Background Circles */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#007aff]/15 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>

                            <div className="relative flex flex-row items-center gap-4 sm:gap-5">
                                {/* Waveform Equalizer Display */}
                                <div className="w-16 h-16 sm:w-24 sm:h-24 bg-[#2c2c2e]/50 border border-gray-800 rounded-xl flex items-center justify-center relative shrink-0 overflow-hidden shadow-inner">
                                    <div className="absolute inset-0 flex items-center justify-center gap-0.5 sm:gap-1 px-2 sm:px-3">
                                        {/* Bouncing Audio Bars */}
                                        {Array.from({ length: 15 }).map((_, i) => (
                                            <div
                                                key={i}
                                                className={`w-0.5 sm:w-1 rounded-full bg-gradient-to-t from-[#007aff] to-indigo-400 transition-all duration-300`}
                                                style={{
                                                    height: isPlaying ? `${Math.floor(Math.random() * 80) + 20}%` : '8px',
                                                    animation: isPlaying ? `bounce 1.2s ease-in-out infinite alternate` : 'none',
                                                    animationDelay: `${i * 0.08}s`
                                                }}
                                            ></div>
                                        ))}
                                    </div>
                                    <Headphones className="w-4 h-4 sm:w-6 sm:h-6 text-gray-500/70 absolute" />
                                </div>

                                {/* Track Metadata */}
                                <div className="flex-grow text-left">
                                    <div className="text-[#007aff] font-bold text-[10px] sm:text-xs uppercase tracking-wider mb-0.5">
                                        Now Playing
                                    </div>
                                    <h2 className="text-[14px] sm:text-lg md:text-xl font-bold mb-0.5 leading-snug line-clamp-2">
                                        {currentTrack ? currentTrack.title : 'No Track Selected'}
                                    </h2>
                                    <p className="text-gray-400 text-[10px] sm:text-xs">
                                        {stateName} Driver&apos;s manual 2026
                                    </p>
                                </div>
                            </div>

                             {/* Timeline Slider */}
                             <div className="mt-4 sm:mt-6 space-y-2 relative z-10">
                                 <input
                                     type="range"
                                     min="0"
                                     max={duration || 100}
                                     value={currentTime}
                                     onMouseDown={handleSeekStart}
                                     onTouchStart={handleSeekStart}
                                     onChange={handleSeekChange}
                                     onMouseUp={handleSeekEnd}
                                     onTouchEnd={handleSeekEnd}
                                     className="w-full h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-[#007aff]"
                                     style={{
                                         background: `linear-gradient(to right, #007aff 0%, #007aff ${(currentTime / (duration || 100)) * 100}%, #1f2937 ${(currentTime / (duration || 100)) * 100}%, #1f2937 100%)`
                                     }}
                                 />
                                 <div className="flex justify-between text-xs text-gray-400 font-medium">
                                     <span>{formatTime(currentTime)}</span>
                                     <span>{formatTime(duration)}</span>
                                 </div>
                             </div>
 
                             {/* Player Controls */}
                             <div className="mt-5 flex flex-col items-center gap-5 sm:grid sm:grid-cols-3 sm:items-center relative z-10 w-full">
                                 {/* Left Column: Speed Controller (Desktop) */}
                                 <div className="hidden sm:flex justify-start">
                                     <div className="flex items-center gap-1 bg-[#2c2c2e]/60 border border-gray-800 rounded-full px-1.5 py-1">
                                         {[0.5, 0.75, 1.0, 1.25, 1.5].map((rate) => (
                                             <button
                                                 key={rate}
                                                 onClick={() => changeSpeed(rate)}
                                                 className={`px-2 py-0.5 rounded-full text-[10px] md:text-xs font-bold transition-all ${
                                                     playbackRate === rate
                                                         ? 'bg-[#007aff] text-white shadow-sm'
                                                         : 'text-gray-400 hover:text-white'
                                                 }`}
                                             >
                                                 {rate}x
                                             </button>
                                         ))}
                                     </div>
                                 </div>

                                 {/* Center Column: Main Playback Buttons */}
                                 <div className="flex items-center justify-center gap-1.5 sm:gap-3 md:gap-4 order-1 sm:order-none">
                                     <Button
                                         variant="ghost"
                                         size="icon"
                                         disabled={currentTrackIndex === 0}
                                         onClick={handlePrevTrack}
                                         className="h-8 w-8 sm:h-10 sm:w-10 text-gray-455 hover:text-white hover:bg-gray-800/50 rounded-full disabled:opacity-30 disabled:pointer-events-none"
                                     >
                                         <SkipBack className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                                     </Button>

                                     <Button
                                         variant="ghost"
                                         size="icon"
                                         onClick={() => skipTime(-10)}
                                         className="h-8 w-8 sm:h-10 sm:w-10 text-gray-455 hover:text-white hover:bg-gray-800/50 rounded-full"
                                     >
                                         <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5" />
                                     </Button>

                                     <Button
                                         onClick={togglePlay}
                                         className="h-12 w-12 sm:h-14 sm:w-14 bg-[#007aff] hover:bg-[#0056cc] text-white rounded-full flex items-center justify-center shadow-lg shadow-blue-500/20 transform active:scale-95 transition-all duration-100 animate-none shrink-0"
                                     >
                                         {isPlaying ? (
                                             <Pause className="w-5 h-5 sm:w-6 sm:h-6 fill-white text-white" />
                                         ) : (
                                             <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-white text-white translate-x-0.5" />
                                         )}
                                     </Button>

                                     <Button
                                         variant="ghost"
                                         size="icon"
                                         onClick={() => skipTime(10)}
                                         className="h-8 w-8 sm:h-10 sm:w-10 text-gray-455 hover:text-white hover:bg-gray-800/50 rounded-full"
                                     >
                                         <RotateCw className="w-4 h-4 sm:w-5 sm:h-5" />
                                     </Button>

                                     <Button
                                         variant="ghost"
                                         size="icon"
                                         disabled={currentTrackIndex === tracks.length - 1}
                                         onClick={handleNextTrack}
                                         className="h-8 w-8 sm:h-10 sm:w-10 text-gray-455 hover:text-white hover:bg-gray-800/50 rounded-full disabled:opacity-30 disabled:pointer-events-none"
                                     >
                                         <SkipForward className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                                     </Button>
                                 </div>

                                 {/* Right Column: Volume Slider (Desktop) */}
                                 <div className="hidden sm:flex justify-end">
                                     <div className="flex items-center gap-2">
                                         <button onClick={toggleMute} className="text-gray-400 hover:text-white transition-colors">
                                             {isMuted || volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                                         </button>
                                         <input
                                             type="range"
                                             min="0"
                                             max="1"
                                             step="0.05"
                                             value={isMuted ? 0 : volume}
                                             onChange={handleVolumeChange}
                                             className="w-20 sm:w-24 h-1 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-[#007aff]"
                                             style={{
                                                 background: `linear-gradient(to right, #007aff 0%, #007aff ${(isMuted ? 0 : volume) * 100}%, #1f2937 ${(isMuted ? 0 : volume) * 100}%, #1f2937 100%)`
                                             }}
                                         />
                                     </div>
                                 </div>

                                 {/* Bottom Row: Speed & Volume (Mobile Only) */}
                                 <div className="flex items-center justify-between w-full sm:hidden gap-4 order-2">
                                     {/* Speed Controller */}
                                     <div className="flex items-center gap-1 bg-[#2c2c2e]/60 border border-gray-800 rounded-full px-1 py-0.5 shrink-0">
                                         {[0.5, 0.75, 1.0, 1.25, 1.5].map((rate) => (
                                             <button
                                                 key={rate}
                                                 onClick={() => changeSpeed(rate)}
                                                 className={`px-2 py-0.5 rounded-full text-[10px] font-bold transition-all ${
                                                     playbackRate === rate
                                                         ? 'bg-[#007aff] text-white shadow-sm'
                                                         : 'text-gray-400 hover:text-white'
                                                 }`}
                                             >
                                                 {rate}x
                                             </button>
                                         ))}
                                     </div>

                                     {/* Volume Slider */}
                                     <div className="flex items-center gap-2 shrink-0">
                                         <button onClick={toggleMute} className="text-gray-400 hover:text-white transition-colors">
                                             {isMuted || volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                                         </button>
                                         <input
                                             type="range"
                                             min="0"
                                             max="1"
                                             step="0.05"
                                             value={isMuted ? 0 : volume}
                                             onChange={handleVolumeChange}
                                             className="w-20 h-1 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-[#007aff]"
                                             style={{
                                                 background: `linear-gradient(to right, #007aff 0%, #007aff ${(isMuted ? 0 : volume) * 100}%, #1f2937 ${(isMuted ? 0 : volume) * 100}%, #1f2937 100%)`
                                             }}
                                         />
                                     </div>
                                 </div>
                             </div>
                        </div>

                        {/* Study Key Takeaways Panel */}
                        {currentTrack && (
                            <div className="bg-white rounded-2xl p-5 md:p-6 border border-gray-200 shadow-sm">
                                <div className="flex items-center gap-2 mb-4">
                                    <BookOpenCheck className="w-5 h-5 text-[#007aff]" />
                                    <h3 className="text-[17px] font-extrabold text-gray-900">
                                        Key Takeaways: {currentTrack.title.split(':').pop()?.trim()}
                                    </h3>
                                </div>
                                <ul className="space-y-4">
                                    {currentTrack.takeaways.map((takeaway, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 text-[#007aff] font-bold text-xs flex items-center justify-center mt-0.5">
                                                {idx + 1}
                                            </span>
                                            <p className="text-gray-700 text-sm md:text-[15px] leading-relaxed">
                                                {takeaway}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Right Column: Track / Chapter List */}
                    <div className="lg:col-span-4">
                        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden sticky top-24">
                            <div className="p-5 border-b border-gray-150 bg-gray-50 flex items-center justify-between">
                                <h3 className="font-extrabold text-gray-900 text-[15px]">
                                    Handbook Chapters
                                </h3>
                                <span className="text-xs font-semibold text-gray-500">
                                    {tracks.length} Tracks
                                </span>
                            </div>
                            <div className="divide-y divide-gray-100 overflow-y-auto max-h-[500px] lg:max-h-[600px]">
                                {tracks.map((track, index) => {
                                    const isCurrent = index === currentTrackIndex
                                    return (
                                        <button
                                            key={track.id}
                                            onClick={() => {
                                                if (isCurrent) {
                                                    togglePlay()
                                                } else {
                                                    setCurrentTrackIndex(index)
                                                    setTimeout(() => {
                                                        if (audioRef.current) {
                                                            audioRef.current.play()
                                                                .then(() => setIsPlaying(true))
                                                                .catch((err) => console.log('Autoplay error:', err))
                                                        }
                                                    }, 100)
                                                }
                                            }}
                                             className={`w-full p-3 flex items-start gap-3 text-left transition-all ${
                                                 isCurrent
                                                     ? 'bg-blue-50/40 border-l-4 pl-2 hover:bg-blue-50'
                                                     : 'border-l-4 hover:bg-gray-50'
                                             }`}
                                             style={{
                                                 borderLeftColor: isCurrent ? '#007aff' : 'transparent'
                                             }}
                                         >
                                            <div className="mt-0.5 shrink-0">
                                                {isCurrent && isPlaying ? (
                                                    <div className="w-5 h-5 rounded-full bg-[#007aff]/10 flex items-center justify-center">
                                                        <Pause className="w-2.5 h-2.5 fill-[#007aff] text-[#007aff]" />
                                                    </div>
                                                ) : (
                                                    <div className="w-5 h-5 rounded-full bg-gray-100 group-hover:bg-[#007aff]/10 flex items-center justify-center">
                                                        <Play className="w-2 h-2 fill-gray-600 text-gray-600 translate-x-0.5" />
                                                    </div>
                                                )}
                                            </div>
                                             <div className="flex-grow">
                                                 <div className="flex items-start justify-between gap-3">
                                                     <span className={`text-sm font-semibold leading-snug ${
                                                         isCurrent ? 'text-[#007aff]' : 'text-gray-900'
                                                     }`}>
                                                         {track.title}
                                                     </span>
                                                     <div className="flex items-center gap-2 shrink-0 mt-0.5">
                                                         {isCurrent && isPlaying && (
                                                             <div className="flex items-end gap-0.5 h-3 shrink-0">
                                                                 <div className="w-0.5 bg-[#007aff] rounded-full animate-[bounce_0.8s_infinite_alternate]" style={{ height: '100%' }}></div>
                                                                 <div className="w-0.5 bg-[#007aff] rounded-full animate-[bounce_0.8s_infinite_alternate_0.2s]" style={{ height: '60%' }}></div>
                                                                 <div className="w-0.5 bg-[#007aff] rounded-full animate-[bounce_0.8s_infinite_alternate_0.4s]" style={{ height: '80%' }}></div>
                                                             </div>
                                                         )}
                                                         <span className="text-xs text-gray-500 font-medium whitespace-nowrap">
                                                             {track.duration}
                                                         </span>
                                                     </div>
                                                 </div>
                                             </div>
                                        </button>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />

            <style jsx global>{`
                @keyframes bounce {
                    from {
                        transform: scaleY(0.2);
                    }
                    to {
                        transform: scaleY(1);
                    }
                }
                input[type="range"]::-webkit-slider-thumb {
                    transition: transform 0.1s ease, box-shadow 0.1s ease;
                }
                input[type="range"]:hover::-webkit-slider-thumb {
                    transform: scale(1.2);
                    box-shadow: 0 0 10px rgba(0, 122, 255, 0.5);
                }
            `}</style>
        </div>
    )
}
