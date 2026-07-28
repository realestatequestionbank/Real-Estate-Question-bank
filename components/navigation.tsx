'use client'

import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Car, Menu, X, User, Crown, LogOut, AlertCircle, Lock, MessageSquare, MapPin, ArrowLeft, Bus, ChevronDown, ChevronRight, Globe } from "lucide-react"
import { STATES, type StateKey } from "@/lib/constants"
import { STATE_DEDICATED_PAGES } from "@/lib/utils/state-routes"

import { type UserData, isCdlPremiumActive, isCdlPremiumExpired } from "@/lib/firebase/auth"

interface User {
  uid: string
  email?: string | null
  displayName?: string | null
}

interface NavigationProps {
  user?: User | null
  userData?: UserData | null
  isPremium?: boolean
  isPremiumExpired?: boolean
  premiumStatus?: 'never_purchased' | 'active' | 'expired'
  onLogin: () => void
  onSignup: () => void
  onLogout: () => void
  onDashboard: () => void
  onPurchaseRenewal?: () => void
  premiumButtonText?: string
  premiumButtonAction?: () => void
  currentPage?: 'dashboard' | 'profile' | 'feedback'
  isLoading?: boolean
  onSelectState?: () => void
  onBackToAllTests?: () => void
  hidePremiumLoginInMenu?: boolean
  mobileLeftContent?: React.ReactNode
  showGetPremiumLink?: boolean
  hideGetPremiumButton?: boolean
  premiumGetPremiumText?: string
  premiumGetPremiumLink?: string
  currentState?: StateKey
  currentLicenseType?: 'car' | 'cdl'
  hideLicenseSwitcher?: boolean
  hidePremiumButton?: boolean
  mobileMenuOpen?: boolean
  onMobileMenuOpenChange?: (open: boolean) => void
  mobileMenuTab?: 'main' | 'states' | 'premium' | 'license'
  onMobileMenuTabChange?: (tab: 'main' | 'states' | 'premium' | 'license') => void
  showSwitchToCdl?: boolean
  showSwitchToCar?: boolean
  onStateChange?: (stateKey: StateKey) => void
  onSwitchToCdl?: () => void
  onSwitchToCar?: () => void
  languageToggleUrl?: string
  languageToggleText?: string
  currentLanguage?: 'en' | 'pa'
  onLanguageChange?: (lang: 'en' | 'pa') => void
}

export function Navigation({
  user,
  userData,
  isPremium: propIsPremium = false,
  isPremiumExpired: propIsPremiumExpired = false,
  premiumStatus: propPremiumStatus = 'never_purchased',
  onLogin,
  onSignup,
  onLogout,
  onDashboard,
  onPurchaseRenewal,
  premiumButtonText = "Premium Login",
  premiumButtonAction,
  currentPage,
  isLoading = false,
  onSelectState,
  onBackToAllTests,
  hidePremiumLoginInMenu = false,
  mobileLeftContent,
  showGetPremiumLink = false,
  hideGetPremiumButton = false,
  premiumGetPremiumText = "Get Premium",
  premiumGetPremiumLink = "/real-estate-premium",
  currentState,
  currentLicenseType,
  hideLicenseSwitcher = true,
  hidePremiumButton = false,
  mobileMenuOpen,
  onMobileMenuOpenChange,
  mobileMenuTab,
  onMobileMenuTabChange,
  showSwitchToCdl = false,
  showSwitchToCar = false,
  onStateChange,
  onSwitchToCdl,
  onSwitchToCar,
  languageToggleUrl,
  languageToggleText,
  currentLanguage,
  onLanguageChange
}: NavigationProps) {
  const router = useRouter()

  // Consolidate premium status from props and userData (to support CDL premium)
  const isCdlActive = userData ? isCdlPremiumActive(userData) : false
  const isCdlExpired = userData ? isCdlPremiumExpired(userData) : false

  const isPremium = propIsPremium || isCdlActive
  const isPremiumExpired = isCdlExpired ? !isCdlActive : propIsPremiumExpired

  let premiumStatus = propPremiumStatus
  if (isCdlActive || (propIsPremium && propPremiumStatus === 'active')) {
    premiumStatus = 'active'
  } else if (isCdlExpired || (propIsPremium && propPremiumStatus === 'expired')) {
    premiumStatus = 'expired'
  }

  const hasCarActive = userData ? (userData.isPremium && (!userData.premiumExpiresAt || new Date() <= new Date(userData.premiumExpiresAt))) : false
  const hasCdlActive = isCdlActive
  const hasBothActive = hasCarActive && hasCdlActive
  const canSwitch = false

  const [localIsMobileMenuOpen, setLocalIsMobileMenuOpen] = useState(false)
  const isMobileMenuOpen = mobileMenuOpen !== undefined ? mobileMenuOpen : localIsMobileMenuOpen
  const setIsMobileMenuOpen = (open: boolean) => {
    setLocalIsMobileMenuOpen(open)
    if (onMobileMenuOpenChange) {
      onMobileMenuOpenChange(open)
    }
  }

  const [localActiveMobileTab, setLocalActiveMobileTab] = useState<'main' | 'states' | 'premium' | 'license'>('main')
  const activeMobileTab = mobileMenuTab !== undefined ? mobileMenuTab : localActiveMobileTab
  const setActiveMobileTab = (tab: 'main' | 'states' | 'premium' | 'license') => {
    setLocalActiveMobileTab(tab)
    if (onMobileMenuTabChange) {
      onMobileMenuTabChange(tab)
    }
  }
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false)

  const [isStateDropdownOpen, setIsStateDropdownOpen] = useState(false)
  const [isLicenseDropdownOpen, setIsLicenseDropdownOpen] = useState(false)
  const [isPremiumDropdownOpen, setIsPremiumDropdownOpen] = useState(false)
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false)
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)

  const stateDropdownRef = useRef<HTMLDivElement>(null)
  const licenseDropdownRef = useRef<HTMLDivElement>(null)
  const premiumDropdownRef = useRef<HTMLDivElement>(null)
  const userDropdownRef = useRef<HTMLDivElement>(null)
  const languageDropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (stateDropdownRef.current && !stateDropdownRef.current.contains(event.target as Node)) {
        setIsStateDropdownOpen(false)
      }
      if (licenseDropdownRef.current && !licenseDropdownRef.current.contains(event.target as Node)) {
        setIsLicenseDropdownOpen(false)
      }
      if (premiumDropdownRef.current && !premiumDropdownRef.current.contains(event.target as Node)) {
        setIsPremiumDropdownOpen(false)
      }
      if (userDropdownRef.current && !userDropdownRef.current.contains(event.target as Node)) {
        setIsUserDropdownOpen(false)
      }
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target as Node)) {
        setIsLanguageDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  const handleStateChange = (stateKey: StateKey) => {
    if (onStateChange) {
      onStateChange(stateKey)
      return
    }
    if (currentLicenseType === 'cdl') {
      router.push(`/${stateKey}-cdl-permit-test`)
    } else {
      const url = STATE_DEDICATED_PAGES[stateKey] || `/state/${stateKey}/free`
      router.push(url)
    }
  }

  const handleLicenseChange = (type: 'car' | 'cdl') => {
    if (type === 'cdl') {
      if (currentState) {
        router.push(`/${currentState}-cdl-permit-test`)
      } else {
        router.push('/cdl-premium')
      }
    } else {
      if (currentState) {
        const url = STATE_DEDICATED_PAGES[currentState] || `/state/${currentState}/free`
        router.push(url)
      } else {
        router.push('/')
      }
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    if (!isMobileMenuOpen) {
      setActiveMobileTab('main')
    }
  }

  const handleGetPremiumClick = () => {
    if (premiumButtonAction) {
      premiumButtonAction()
    } else if (premiumButtonText === "Get Premium") {
      router.push('/get-premium?plan=36500')
    } else {
      onLogin()
    }
  }

  const getUserDisplayName = () => {
    if (!user) return "User"

    // Prefer firstName + lastName if available from userData
    if (userData?.firstName && userData?.lastName) {
      return `${userData.firstName} ${userData.lastName}`
    }

    // Fall back to displayName or email from user
    return user.displayName || user.email?.split('@')[0] || "User"
  }

  const getUserInitials = () => {
    const name = getUserDisplayName()
    return name.charAt(0).toUpperCase()
  }

  const handleLogoutClick = () => {
    setShowLogoutConfirm(true)
  }

  const confirmLogout = () => {
    setShowLogoutConfirm(false)
    setIsMobileMenuOpen(false)
    onLogout()
  }

  const cancelLogout = () => {
    setShowLogoutConfirm(false)
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-14 md:h-16 items-center justify-between px-4">
        {/* Logo or custom mobile content */}
        {mobileLeftContent ? (
          <>
            <div className="md:hidden flex-1">{mobileLeftContent}</div>
            <Link href="/" className="hidden md:flex items-center space-x-2">
              <img src="/images/logo.svg" alt="Logo" className="h-8 w-8 object-contain" />
              <span className="text-lg md:text-xl font-semibold text-gray-900 logo-font">Real Estate Question Bank</span>
            </Link>
          </>
        ) : (
          <Link href="/" className="flex items-center space-x-2">
            <img src="/images/logo.svg" alt="Logo" className="h-8 w-8 object-contain" />
            <span className="text-lg md:text-xl font-semibold text-gray-900 logo-font">Real Estate Question Bank</span>
          </Link>
        )}

        {/* Middle Selectors */}
        {(currentState || (currentLicenseType && !showSwitchToCdl && !showSwitchToCar && !hideLicenseSwitcher)) && (
          <div className="hidden md:flex items-center space-x-3 md:space-x-4 z-50">
            {/* State Selector */}
            {currentState && (
              <div className="relative" ref={stateDropdownRef}>
                <button
                  onClick={() => {
                    setIsStateDropdownOpen(!isStateDropdownOpen)
                    setIsLicenseDropdownOpen(false)
                  }}
                  className="flex items-center gap-1 text-[#007aff] hover:text-[#0056cc] font-semibold text-[13px] md:text-sm transition-colors py-1 px-1.5 rounded-lg hover:bg-blue-50/50"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#007aff] fill-[#007aff]/10" />
                  <span>{STATES[currentState]?.name || 'California'}</span>
                  <ChevronDown className={`w-3.5 h-3.5 text-[#007aff] transition-transform duration-200 ${isStateDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {isStateDropdownOpen && (
                  <div className="absolute left-1/2 -translate-x-1/2 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 md:p-5 z-[60] w-[90vw] md:w-[500px] max-h-[70vh] md:max-h-[450px] overflow-y-auto custom-scrollbar grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-2 md:gap-x-6 gap-y-0.5 md:gap-y-1">
                    {Object.entries(STATES)
                      .sort((a, b) => a[1].name.localeCompare(b[1].name))
                      .map(([stateKey, state]) => {
                        const isSelected = stateKey === currentState
                        return (
                          <button
                            key={stateKey}
                            onClick={() => {
                              setIsStateDropdownOpen(false)
                              handleStateChange(stateKey as StateKey)
                            }}
                            className={`text-left py-1 px-2 rounded-md text-xs md:text-[13px] transition-colors duration-150 font-medium ${
                              isSelected
                                ? 'text-[#007aff] bg-blue-50/40 font-semibold'
                                : 'text-gray-700 hover:text-[#007aff] hover:bg-blue-50/25'
                            }`}
                          >
                            {state.name}
                          </button>
                        )
                      })}
                  </div>
                )}
              </div>
            )}

            {/* License Type Selector */}
            {currentLicenseType && !showSwitchToCdl && !showSwitchToCar && !hideLicenseSwitcher && (
              <div className="relative" ref={licenseDropdownRef}>
                <button
                  onClick={() => {
                    setIsLicenseDropdownOpen(!isLicenseDropdownOpen)
                    setIsStateDropdownOpen(false)
                  }}
                  className="flex items-center gap-1 text-[#007aff] hover:text-[#0056cc] font-semibold text-[13px] md:text-sm transition-colors py-1 px-1.5 rounded-lg hover:bg-blue-50/50"
                >
                  {currentLicenseType === 'cdl' ? (
                    <Bus className="w-3.5 h-3.5 text-[#007aff] fill-[#007aff]/10" />
                  ) : (
                    <Car className="w-3.5 h-3.5 text-[#007aff] fill-[#007aff]/10" />
                  )}
                  <span>{currentLicenseType === 'cdl' ? 'CDL' : 'Car'}</span>
                  <ChevronDown className={`w-3.5 h-3.5 text-[#007aff] transition-transform duration-200 ${isLicenseDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {isLicenseDropdownOpen && (
                  <div className="absolute left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 py-1.5 z-[60] w-60 md:w-64 overflow-hidden">
                    <button
                      onClick={() => {
                        setIsLicenseDropdownOpen(false)
                        handleLicenseChange('car')
                      }}
                      className={`w-full text-left py-2.5 px-4 flex items-center gap-2.5 transition-colors duration-150 ${
                        currentLicenseType === 'car'
                          ? 'bg-blue-50/30 text-[#007aff] font-semibold text-xs md:text-sm'
                          : 'text-gray-700 hover:bg-gray-50 text-xs md:text-sm'
                      }`}
                    >
                      <Car className={`w-4 h-4 ${currentLicenseType === 'car' ? 'text-[#007aff]' : 'text-gray-400'}`} />
                      <span className="font-medium">Car</span>
                    </button>
                    <div className="border-t border-gray-100 my-0.5"></div>
                    <button
                      onClick={() => {
                        setIsLicenseDropdownOpen(false)
                        handleLicenseChange('cdl')
                      }}
                      className={`w-full text-left py-2.5 px-4 flex items-center gap-2.5 transition-colors duration-150 ${
                        currentLicenseType === 'cdl'
                          ? 'bg-blue-50/30 text-[#007aff] font-semibold text-xs md:text-sm'
                          : 'text-gray-700 hover:bg-gray-50 text-xs md:text-sm'
                      }`}
                    >
                      <Bus className={`w-4 h-4 ${currentLicenseType === 'cdl' ? 'text-[#007aff]' : 'text-gray-400'}`} />
                      <span className="font-medium">CDL (Commercial Vehicles)</span>
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Language Selector */}
            {currentLanguage && (onLanguageChange || languageToggleUrl) && (
              <div className="relative" ref={languageDropdownRef}>
                <button
                  onClick={() => {
                    setIsLanguageDropdownOpen(!isLanguageDropdownOpen)
                    setIsStateDropdownOpen(false)
                    setIsLicenseDropdownOpen(false)
                  }}
                  className="flex items-center gap-1 text-[#007aff] hover:text-[#0056cc] font-semibold text-[13px] md:text-sm transition-colors py-1 px-1.5 rounded-lg hover:bg-blue-50/50"
                >
                  <Globe className="w-3.5 h-3.5 text-[#007aff]" />
                  <span>{currentLanguage === 'pa' ? 'ਪੰਜਾਬੀ' : 'English'}</span>
                  <ChevronDown className={`w-3.5 h-3.5 text-[#007aff] transition-transform duration-200 ${isLanguageDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {isLanguageDropdownOpen && (
                  <div className="absolute left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 py-1.5 z-[60] w-40 overflow-hidden">
                    <button
                      onClick={() => {
                        setIsLanguageDropdownOpen(false)
                        if (currentLanguage !== 'en') {
                          if (onLanguageChange) {
                            onLanguageChange('en')
                          } else if (languageToggleUrl) {
                            router.push(languageToggleUrl)
                          }
                        }
                      }}
                      className={`w-full text-left py-2 px-4 flex items-center gap-2 transition-colors duration-150 ${
                        currentLanguage === 'en'
                          ? 'bg-blue-50/30 text-[#007aff] font-semibold text-xs md:text-sm'
                          : 'text-gray-700 hover:bg-gray-50 text-xs md:text-sm'
                      }`}
                    >
                      <span className="font-medium">English</span>
                    </button>
                    <div className="border-t border-gray-100 my-0.5"></div>
                    <button
                      onClick={() => {
                        setIsLanguageDropdownOpen(false)
                        if (currentLanguage !== 'pa') {
                          if (onLanguageChange) {
                            onLanguageChange('pa')
                          } else if (languageToggleUrl) {
                            router.push(languageToggleUrl)
                          }
                        }
                      }}
                      className={`w-full text-left py-2 px-4 flex items-center gap-2 transition-colors duration-150 ${
                        currentLanguage === 'pa'
                          ? 'bg-blue-50/30 text-[#007aff] font-semibold text-xs md:text-sm'
                          : 'text-gray-700 hover:bg-gray-50 text-xs md:text-sm'
                      }`}
                    >
                      <span className="font-medium">ਪੰਜਾਬੀ</span>
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          {false && (
            <Button
              variant="ghost"
              size="sm"
              className="text-[#007aff] hover:text-[#0056cc] hover:bg-blue-50/50 font-bold flex items-center gap-1.5"
              onClick={() => {
                if (onSwitchToCdl) {
                  onSwitchToCdl()
                } else {
                  router.push('/cdl-premium')
                }
              }}
            >
              <Bus className="w-4 h-4 text-[#007aff] fill-[#007aff]/10" />
              Switch to CDL
            </Button>
          )}
          {false && (
            <Button
              variant="ghost"
              size="sm"
              className="text-[#007aff] hover:text-[#0056cc] hover:bg-blue-50/50 font-bold flex items-center gap-1.5"
              onClick={() => {
                if (onSwitchToCar) {
                  onSwitchToCar()
                } else {
                  router.push('/real-estate-premium')
                }
              }}
            >
              <Car className="w-4 h-4 text-[#007aff] fill-[#007aff]/10" />
              Switch to Car
            </Button>
          )}
          {user ? (
            <div className="flex items-center space-x-3">
              {showGetPremiumLink && premiumStatus !== 'active' && !hideGetPremiumButton && (
                <div className="relative">
                  <Button
                    onClick={() => router.push(premiumGetPremiumLink)}
                    className="bg-[#007aff] hover:bg-[#0056cc] text-white flex items-center gap-1"
                    size="sm"
                  >
                    <Crown className="w-4 h-4 mr-1.5" />
                    <span>{premiumGetPremiumText}</span>
                  </Button>
                </div>
              )}
              {user && userData && premiumStatus === 'never_purchased' && !showGetPremiumLink && !hideGetPremiumButton && (
                <Button
                  onClick={onPurchaseRenewal || onSignup}
                  className="bg-[#007aff] hover:bg-[#0056cc] text-white font-bold"
                  size="sm"
                >
                  <Crown className="w-4 h-4 mr-2" />
                  Complete Purchase
                </Button>
              )}
              {user && userData && premiumStatus === 'expired' && !showGetPremiumLink && !hideGetPremiumButton && (
                <Button
                  onClick={onPurchaseRenewal || onSignup}
                  className="bg-[#007aff] hover:bg-[#0056cc] text-white font-bold"
                  size="sm"
                >
                  <Crown className="w-4 h-4 mr-2" />
                  Upgrade Membership
                </Button>
              )}

              {/* User Dropdown Menu */}
              <div className="relative" ref={userDropdownRef}>
                <button
                  onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                  className="flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50/50 transition-all text-left focus:outline-none"
                >
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-semibold shrink-0 bg-[#007aff] shadow-sm">
                    {getUserInitials()}
                  </div>
                  <span className="hidden lg:inline-block text-sm font-semibold text-gray-750 max-w-[120px] truncate select-none">
                    {getUserDisplayName()}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-gray-405 transition-transform duration-200 ${isUserDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {isUserDropdownOpen && (
                  <div className="absolute right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-150 py-1.5 z-[60] w-64 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                    {/* Header */}
                    <div className="px-4 py-3 bg-gray-50/50 border-b border-gray-100 flex flex-col gap-0.5">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <span className="font-semibold text-gray-900 text-sm truncate max-w-[140px]">{getUserDisplayName()}</span>
                        {isPremium ? (
                          <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-yellow-50 text-yellow-750 border border-yellow-250 uppercase tracking-wide">
                            <Crown className="w-2.5 h-2.5 text-yellow-600 fill-yellow-600/10" />
                            Premium
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-gray-50 text-gray-650 border border-gray-200 uppercase tracking-wide">
                            Free
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] text-gray-450 truncate">{user.email}</span>
                    </div>

                    {/* Actions */}
                    <div className="py-1">
                      {premiumStatus === 'active' && (
                        <button
                          onClick={() => {
                            setIsUserDropdownOpen(false)
                            onDashboard()
                          }}
                          className={`w-full text-left py-2.5 px-4 flex items-center gap-2.5 text-sm transition-colors ${
                            currentPage === 'dashboard'
                              ? 'bg-blue-50/30 text-[#007aff] font-semibold'
                              : 'text-gray-700 hover:bg-gray-50 font-medium'
                          }`}
                        >
                          <Crown className={`w-4 h-4 ${currentPage === 'dashboard' ? 'text-[#007aff]' : 'text-yellow-500 fill-yellow-500/10'}`} />
                          <span>Dashboard</span>
                        </button>
                      )}

                      <Link
                        href="/profile"
                        onClick={() => setIsUserDropdownOpen(false)}
                        className={`w-full text-left py-2.5 px-4 flex items-center gap-2.5 text-sm transition-colors ${
                          currentPage === 'profile'
                            ? 'bg-blue-50/30 text-[#007aff] font-semibold'
                            : 'text-gray-700 hover:bg-gray-50 font-medium'
                        }`}
                      >
                        <User className={`w-4 h-4 ${currentPage === 'profile' ? 'text-[#007aff]' : 'text-gray-400'}`} />
                        <span>Profile</span>
                      </Link>

                      <Link
                        href="/feedback"
                        onClick={() => setIsUserDropdownOpen(false)}
                        className={`w-full text-left py-2.5 px-4 flex items-center gap-2.5 text-sm transition-colors ${
                          currentPage === 'feedback'
                            ? 'bg-blue-50/30 text-[#007aff] font-semibold'
                            : 'text-gray-700 hover:bg-gray-50 font-medium'
                        }`}
                      >
                        <MessageSquare className={`w-4 h-4 ${currentPage === 'feedback' ? 'text-[#007aff]' : 'text-gray-400'}`} />
                        <span>Share Feedback</span>
                      </Link>
                    </div>

                    {/* Logout */}
                    <div className="border-t border-gray-100 pt-1 mt-1">
                      <button
                        onClick={() => {
                          setIsUserDropdownOpen(false)
                          handleLogoutClick()
                        }}
                        className="w-full text-left py-2.5 px-4 flex items-center gap-2.5 text-sm text-red-650 hover:bg-red-50/30 transition-colors font-medium"
                      >
                        <LogOut className="w-4 h-4 text-red-550" />
                        <span>Logout</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <>
              {!isLoading && (
                <div className="flex items-center space-x-2">
                  {showGetPremiumLink && (
                    <>
                      <Button
                        onClick={onLogin}
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2"
                      >
                        <Lock className="w-4 h-4" />
                        Premium Login
                      </Button>
                      {!hideGetPremiumButton && !hidePremiumButton && (
                        <Button
                          onClick={() => router.push('/real-estate-premium')}
                          size="sm"
                          className="flex items-center gap-1.5 bg-[#007aff] hover:bg-[#0056cc] text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                        >
                          <Crown className="w-4 h-4" />
                          <span>{premiumGetPremiumText}</span>
                        </Button>
                      )}
                    </>
                  )}
                  {!showGetPremiumLink && premiumButtonAction && (
                    <Button
                      onClick={onLogin}
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2"
                    >
                      <Lock className="w-4 h-4" />
                      Premium Login
                    </Button>
                  )}
                  {!showGetPremiumLink && !hideGetPremiumButton && !hidePremiumButton && (
                    <Button
                      onClick={handleGetPremiumClick}
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2 border-[#007aff] text-[#007aff] hover:bg-[#007aff] hover:text-white"
                    >
                      {premiumButtonText === "Get Premium" ? (
                        <Crown className="w-4 h-4" />
                      ) : (
                        <Lock className="w-4 h-4" />
                      )}
                      {premiumButtonText}
                    </Button>
                  )}
                </div>
              )}
            </>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 rounded-md hover:bg-gray-100"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
    </header>

    {/* Mobile menu side pane */}
    <div
      className={`fixed top-14 right-0 bottom-0 w-full bg-white shadow-2xl md:hidden z-40 transform transition-transform duration-300 ease-in-out ${
        isMobileMenuOpen ? "translate-x-0 pointer-events-auto" : "translate-x-full pointer-events-none"
      } overflow-hidden pt-3`}
    >
      <div
        className={`flex w-[200%] h-full transition-transform duration-300 ease-in-out ${
          activeMobileTab === 'states'
            ? '-translate-x-1/2'
            : 'translate-x-0'
        }`}
      >
        {/* Panel 1: Main Menu */}
        <div className="w-1/2 h-full flex flex-col overflow-y-auto divide-y divide-gray-100 bg-white pt-5 pb-20">
          {languageToggleUrl && languageToggleText && (
            <Link
              href={languageToggleUrl}
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-between py-4 px-6 text-[#007aff] hover:bg-gray-50 active:bg-gray-100 transition-colors text-left font-semibold"
            >
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-[#007aff]" />
                <span className="text-[15px]">{languageToggleText}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-300" />
            </Link>
          )}
          {/* Back to All Tests Option */}
          {onBackToAllTests && (
            <button
              onClick={() => {
                onBackToAllTests()
                setIsMobileMenuOpen(false)
              }}
              className="w-full flex items-center justify-between py-4 px-6 text-gray-700 hover:bg-gray-50 active:bg-gray-100 transition-colors text-left"
            >
              <div className="flex items-center gap-3">
                <ArrowLeft className="w-5 h-5 text-gray-400" />
                <span className="font-medium text-[15px]">Back to All Tests</span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-300" />
            </button>
          )}

          {/* User Profile Info Header */}
          {user && (
            <div className="py-4 px-6 bg-gray-50/70 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-base font-semibold shrink-0 bg-[#007aff] shadow-sm">
                {getUserInitials()}
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-semibold text-gray-900 truncate">
                  {getUserDisplayName()}
                </span>
                <span className="text-xs text-gray-500 truncate mt-0.5">
                  {user.email || 'Free Account'}
                </span>
              </div>
              {isPremium && (
                <span className="ml-auto inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-yellow-50 text-yellow-700 border border-yellow-200">
                  <Crown className="w-3.5 h-3.5 text-yellow-600 fill-yellow-600/10" />
                  Premium
                </span>
              )}
            </div>
          )}

          {/* License Type Option (Below Profile and Above State Selector/Dashboard) */}
          {currentLicenseType && !hideLicenseSwitcher && (
            canSwitch ? (
              <button
                onClick={() => {
                  if (currentLicenseType === 'car') {
                    localStorage.setItem('dashboard_view_mode', 'cdl')
                    if (onSwitchToCdl) {
                      onSwitchToCdl()
                    } else {
                      router.push('/dashboard')
                    }
                  } else {
                    localStorage.setItem('dashboard_view_mode', 'regular')
                    if (onSwitchToCar) {
                      onSwitchToCar()
                    } else {
                      router.push('/dashboard')
                    }
                  }
                  setIsMobileMenuOpen(false)
                }}
                className="w-full flex items-center justify-between py-4 px-6 text-gray-700 hover:bg-gray-50 active:bg-gray-100 transition-colors text-left"
              >
                <div className="flex items-center gap-3">
                  {currentLicenseType === 'cdl' ? (
                    <Bus className="w-5 h-5 text-[#007aff]" />
                  ) : (
                    <Car className="w-5 h-5 text-[#007aff]" />
                  )}
                  <span className="font-medium text-[15px]">
                    License: {currentLicenseType === 'cdl' ? 'CDL' : 'Car'}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#007aff] font-semibold">
                  <span>Switch</span>
                  <ChevronRight className="w-4 h-4 text-[#007aff]" />
                </div>
              </button>
            ) : (
              <div className="w-full flex items-center justify-between py-4 px-6 text-gray-500 bg-white">
                <div className="flex items-center gap-3">
                  {currentLicenseType === 'cdl' ? (
                    <Bus className="w-5 h-5 text-gray-400" />
                  ) : (
                    <Car className="w-5 h-5 text-gray-400" />
                  )}
                  <span className="font-medium text-[15px]">
                    License: {currentLicenseType === 'cdl' ? 'CDL' : 'Car'}
                  </span>
                </div>
              </div>
            )
          )}

          {/* Select State Option */}
          {(onSelectState || currentState) && !(user && !currentState) && (
            <button
              onClick={() => setActiveMobileTab('states')}
              className="w-full flex items-center justify-between py-4 px-6 text-gray-700 hover:bg-gray-50 active:bg-gray-100 transition-colors text-left"
            >
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#007aff]" />
                <span className="font-medium text-[15px]">
                  {currentLicenseType === 'cdl' && currentState
                    ? 'Select State'
                    : currentState && STATES[currentState]
                    ? `State: ${STATES[currentState].name}`
                    : 'Select Your State'}
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-300" />
            </button>
          )}

          {/* Pass with Premium Option (Logged In or Logged Out) */}
          {showGetPremiumLink && premiumStatus !== 'active' && !hideGetPremiumButton && (
            <button
              onClick={() => {
                router.push('/real-estate-premium')
                setIsMobileMenuOpen(false)
              }}
              className="w-full flex items-center justify-between py-4 px-6 hover:bg-gray-50 active:bg-gray-100 transition-colors text-left"
            >
              <div className="flex items-center gap-3">
                <Crown className="w-5 h-5 text-yellow-500 fill-yellow-500/10" />
                <span className="font-medium text-[15px] text-gray-900">Pass with Premium</span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-300" />
            </button>
          )}

          {/* Direct purchase/renewal links if showGetPremiumLink is false but upgrade button is allowed */}
          {user && userData && premiumStatus === 'never_purchased' && !showGetPremiumLink && !hideGetPremiumButton && (
            <button
              onClick={() => {
                if (onPurchaseRenewal) onPurchaseRenewal()
                else onSignup()
                setIsMobileMenuOpen(false)
              }}
              className="w-full flex items-center justify-between py-4 px-6 bg-gradient-to-r from-green-50/20 to-emerald-50/10 hover:bg-gray-50 text-left"
            >
              <div className="flex items-center gap-3">
                <Crown className="w-5 h-5 text-green-600 fill-green-600/10" />
                <span className="font-semibold text-[15px] text-green-700">Complete Purchase</span>
              </div>
              <ChevronRight className="w-4 h-4 text-green-600" />
            </button>
          )}

          {/* Direct purchase/renewal links if showGetPremiumLink is false but upgrade button is allowed */}
          {user && userData && premiumStatus === 'expired' && !showGetPremiumLink && !hideGetPremiumButton && (
            <button
              onClick={() => {
                if (onPurchaseRenewal) onPurchaseRenewal()
                else onSignup()
                setIsMobileMenuOpen(false)
              }}
              className="w-full flex items-center justify-between py-4 px-6 bg-gradient-to-r from-orange-50/20 to-red-50/10 hover:bg-gray-50 text-left"
            >
              <div className="flex items-center gap-3">
                <Crown className="w-5 h-5 text-orange-600 fill-orange-600/10" />
                <span className="font-semibold text-[15px] text-orange-700">Upgrade Membership</span>
              </div>
              <ChevronRight className="w-4 h-4 text-orange-600" />
            </button>
          )}

          {/* General premium action button if showGetPremiumLink is false but we have a custom handler */}
          {!user && !showGetPremiumLink && !hideGetPremiumButton && !hidePremiumButton && (
            <button
              onClick={() => {
                handleGetPremiumClick()
                setIsMobileMenuOpen(false)
              }}
              className="w-full flex items-center justify-between py-4 px-6 hover:bg-gray-50 active:bg-gray-100 transition-colors text-left"
            >
              <div className="flex items-center gap-3">
                {premiumButtonText === "Get Premium" ? (
                  <Crown className="w-5 h-5 text-yellow-500 fill-yellow-500/10" />
                ) : (
                  <Lock className="w-5 h-5 text-gray-400" />
                )}
                <span className="font-semibold text-[15px] text-gray-900">{premiumButtonText}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-300" />
            </button>
          )}

          {/* Premium Login for logged-out users */}
          {!user && (showGetPremiumLink || (premiumButtonAction && !hidePremiumLoginInMenu)) && (
            <button
              onClick={() => {
                onLogin()
                setIsMobileMenuOpen(false)
              }}
              className="w-full flex items-center justify-between py-4 px-6 text-gray-700 hover:bg-gray-50 active:bg-gray-100 transition-colors text-left"
            >
              <div className="flex items-center gap-3">
                <Lock className="w-5 h-5 text-gray-400" />
                <span className="font-medium text-[15px]">Premium Login</span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-300" />
            </button>
          )}

          {/* Dashboard and Profile items for logged-in users */}
          {user && premiumStatus === 'active' && (
            <button
              onClick={() => {
                onDashboard()
                setIsMobileMenuOpen(false)
              }}
              className={`w-full flex items-center justify-between py-4 px-6 hover:bg-gray-50 active:bg-gray-100 transition-colors text-left ${
                currentPage === 'dashboard' ? "text-[#007aff] bg-blue-50/10 font-semibold" : "text-gray-700 font-medium"
              }`}
            >
              <div className="flex items-center gap-3">
                <Crown className={`w-5 h-5 ${currentPage === 'dashboard' ? 'text-[#007aff]' : 'text-yellow-500 fill-yellow-500/10'}`} />
                <span className="text-[15px]">Dashboard</span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-300" />
            </button>
          )}

          {user && (
            <Link
              href="/feedback"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`w-full flex items-center justify-between py-4 px-6 hover:bg-gray-50 active:bg-gray-100 transition-colors text-left ${
                currentPage === 'feedback' ? "text-[#007aff] bg-blue-50/10 font-semibold" : "text-gray-700 font-medium"
              }`}
            >
              <div className="flex items-center gap-3">
                <MessageSquare className={`w-5 h-5 ${currentPage === 'feedback' ? 'text-[#007aff]' : 'text-gray-400'}`} />
                <span className="text-[15px]">Share Feedback</span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-300" />
            </Link>
          )}

          {user && (
            <Link
              href="/profile"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`w-full flex items-center justify-between py-4 px-6 hover:bg-gray-50 active:bg-gray-100 transition-colors text-left ${
                currentPage === 'profile' ? "text-[#007aff] bg-blue-50/10 font-semibold" : "text-gray-700 font-medium"
              }`}
            >
              <div className="flex items-center gap-3">
                <User className={`w-5 h-5 ${currentPage === 'profile' ? 'text-[#007aff]' : 'text-gray-400'}`} />
                <span className="text-[15px]">Profile</span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-300" />
            </Link>
          )}

          {user && (
            <button
              onClick={() => {
                handleLogoutClick()
                setIsMobileMenuOpen(false)
              }}
              className="w-full flex items-center justify-between py-4 px-6 text-red-600 hover:bg-red-50/30 active:bg-red-50 transition-colors text-left font-medium"
            >
              <div className="flex items-center gap-3">
                <LogOut className="w-5 h-5 text-red-500" />
                <span className="text-[15px]">Logout</span>
              </div>
              <ChevronRight className="w-4 h-4 text-red-300" />
            </button>
          )}
        </div>

        {/* Panel 2: State Selector */}
        <div className="w-1/2 h-full flex flex-col overflow-hidden bg-white">
          {/* Panel Header with back button */}
          <button
            onClick={() => setActiveMobileTab('main')}
            className="flex items-center gap-3.5 py-4 px-6 bg-gray-50 border-b border-gray-100 text-left text-gray-800 font-semibold shrink-0"
          >
            <ArrowLeft className="w-5 h-5 text-[#007aff]" />
          </button>
          
          {/* States Scroll List */}
          <div className="flex-1 overflow-y-auto divide-y divide-gray-50 pb-20 custom-scrollbar">
            {Object.entries(STATES)
              .sort((a, b) => a[1].name.localeCompare(b[1].name))
              .map(([stateKey, state]) => {
                const isSelected = stateKey === currentState
                return (
                  <button
                    key={stateKey}
                    onClick={() => {
                      handleStateChange(stateKey as StateKey)
                      setIsMobileMenuOpen(false)
                      // Reset to main tab after navigation closes
                      setTimeout(() => setActiveMobileTab('main'), 300)
                    }}
                    className={`w-full flex items-center justify-between py-3.5 px-6 text-left transition-colors ${
                      isSelected
                        ? 'bg-blue-50/20 text-[#007aff]'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span className={`text-[15px] ${isSelected ? 'font-semibold' : 'font-medium'}`}>
                      {state.name}
                    </span>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-[#007aff]" />
                    )}
                  </button>
                )
              })}
          </div>
        </div>

      </div>
    </div>

      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <div
          className="fixed z-[60]"
          style={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem'
          }}
        >
          <Card className="w-full max-w-sm" style={{ margin: 'auto' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-blue-600" />
                Confirm Logout
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700 text-sm md:text-base">
                  Are you sure you want to logout? Any unsaved progress will be automatically saved.
                </p>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    onClick={cancelLogout}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={confirmLogout}
                    className="flex-1"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}