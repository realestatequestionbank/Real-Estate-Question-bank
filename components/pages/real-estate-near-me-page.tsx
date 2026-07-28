'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/auth-context'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { AuthModal } from '@/components/auth/auth-modal'
import { ExpiredPremiumModal } from '@/components/auth/expired-premium-modal'
import { PurchaseRenewalDialog } from '@/components/purchase-renewal-dialog'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  MapPin,
  Search,
  Navigation2,
  Phone,
  Clock,
  Star,
  ExternalLink,
  Loader2,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  Building2
} from 'lucide-react'

interface RealEstateLocation {
  id: string
  name: string
  address: string
  lat: number
  lng: number
  phone?: string
  hours?: string[]
  isOpen?: boolean
  rating?: number
  totalRatings?: number
  distance?: number
  businessStatus?: string
}

interface SearchLocation {
  lat: number
  lng: number
}

export function RealEstateNearMePageContent() {
  const [zipCode, setZipCode] = useState('')
  const [locations, setLocations] = useState<RealEstateLocation[]>([])
  const [searchLocation, setSearchLocation] = useState<SearchLocation | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingLocation, setIsLoadingLocation] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [hasSearched, setHasSearched] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null)
  const [expandedHours, setExpandedHours] = useState<string | null>(null)

  // Auth state
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login')
  const [showExpiredModal, setShowExpiredModal] = useState(false)
  const [showPurchaseModal, setShowPurchaseModal] = useState(false)
  const [purchaseLoading, setPurchaseLoading] = useState(false)
  const [isRedirecting, setIsRedirecting] = useState(false)

  const router = useRouter()
  const { user, userData, isPremium, isPremiumExpired, premiumStatus, signOut, loading } = useAuth()
  const mapRef = useRef<HTMLDivElement>(null)

  // Auth handlers
  const handleLogin = () => {
    setAuthMode('login')
    setAuthModalOpen(true)
  }

  const handleSignup = () => {
    setAuthMode('signup')
    setAuthModalOpen(true)
  }

  const handleDashboard = () => {
    if (isPremium) {
      router.push('/dashboard')
    } else if (user && userData && userData.isPremium && isPremiumExpired) {
      setShowExpiredModal(true)
    } else {
      setAuthMode('signup')
      setAuthModalOpen(true)
    }
  }

  const createCheckoutSession = async (userId: string, duration: number = 90) => {
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, state: 'california', duration }),
      })
      const data = await response.json()
      if (data.url) {
        window.location.href = data.url
      }
    } catch (error) {
      console.error('Error creating checkout session:', error)
      setIsRedirecting(false)
      setAuthModalOpen(false)
    }
  }

  const handleAuthSuccess = async (mode: 'login' | 'signup', result?: any) => {
    if (mode === 'signup' && result?.user) {
      setIsRedirecting(true)
      await createCheckoutSession(result.user.uid)
    } else {
      setAuthModalOpen(false)
      if (mode === 'login' && result?.userData?.isPremium && !isPremiumExpired) {
        router.push('/dashboard')
      }
    }
  }

  const handlePurchaseRenewal = () => {
    if (!user) {
      setAuthMode('signup')
      setAuthModalOpen(true)
      return
    }
    setShowPurchaseModal(true)
  }

  const handlePurchase = async (duration: number) => {
    if (!user) return
    setPurchaseLoading(true)
    try {
      await createCheckoutSession(user.uid, duration)
    } finally {
      setPurchaseLoading(false)
      setShowPurchaseModal(false)
    }
  }

  // Search handlers
  const searchByZipCode = async () => {
    if (!zipCode.trim()) {
      setError('Please enter a zip code')
      return
    }

    if (!/^\d{5}$/.test(zipCode.trim())) {
      setError('Please enter a valid 5-digit zip code')
      return
    }

    setIsLoading(true)
    setError(null)
    setHasSearched(true)

    try {
      const response = await fetch('/api/real-estate-locations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ zipCode: zipCode.trim() }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || 'Failed to search for Real Estate locations')
        setLocations([])
        return
      }

      setLocations(data.locations || [])
      setSearchLocation(data.searchLocation)
      if (data.locations?.length > 0) {
        setSelectedLocation(data.locations[0].id)
      }
    } catch (err) {
      setError('Failed to search. Please try again.')
      setLocations([])
    } finally {
      setIsLoading(false)
    }
  }

  const searchByCurrentLocation = async () => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser')
      return
    }

    setIsLoadingLocation(true)
    setError(null)
    setHasSearched(true)

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords
        setIsLoading(true)
        setIsLoadingLocation(false)

        try {
          const response = await fetch('/api/real-estate-locations', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ lat: latitude, lng: longitude }),
          })

          const data = await response.json()

          if (!response.ok) {
            setError(data.error || 'Failed to search for Real Estate locations')
            setLocations([])
            return
          }

          setLocations(data.locations || [])
          setSearchLocation(data.searchLocation)
          if (data.locations?.length > 0) {
            setSelectedLocation(data.locations[0].id)
          }
        } catch (err) {
          setError('Failed to search. Please try again.')
          setLocations([])
        } finally {
          setIsLoading(false)
        }
      },
      (err) => {
        setIsLoadingLocation(false)
        switch (err.code) {
          case err.PERMISSION_DENIED:
            setError('Location access denied. Please enable location permissions or search by zip code.')
            break
          case err.POSITION_UNAVAILABLE:
            setError('Location unavailable. Please try searching by zip code instead.')
            break
          case err.TIMEOUT:
            setError('Location request timed out. Please try again or search by zip code.')
            break
          default:
            setError('Unable to get your location. Please search by zip code instead.')
        }
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    )
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      searchByZipCode()
    }
  }

  const getDirectionsUrl = (location: RealEstateLocation) => {
    const address = encodeURIComponent(location.address)
    return `https://www.google.com/maps/dir/?api=1&destination=${address}`
  }

  const getGoogleMapsUrl = (location: RealEstateLocation) => {
    return `https://www.google.com/maps/place/?q=place_id:${location.id}`
  }

  // Generate static map URL
  const getMapUrl = useCallback(() => {
    const mapsKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY
    if (!mapsKey || !searchLocation) return null

    const markers = locations.slice(0, 10).map((loc, index) => {
      const label = String.fromCharCode(65 + index) // A, B, C, etc.
      return `markers=color:red%7Clabel:${label}%7C${loc.lat},${loc.lng}`
    }).join('&')

    const center = selectedLocation
      ? locations.find(l => l.id === selectedLocation)
      : locations[0]

    const centerLat = center?.lat || searchLocation.lat
    const centerLng = center?.lng || searchLocation.lng

    return `https://maps.googleapis.com/maps/api/staticmap?center=${centerLat},${centerLng}&zoom=11&size=600x400&scale=2&${markers}&key=${mapsKey}`
  }, [searchLocation, locations, selectedLocation])

  return (
    <div className="min-h-screen bg-white">
      <Navigation
        user={user}
        userData={userData}
        isPremium={isPremium}
        isPremiumExpired={isPremiumExpired}
        premiumStatus={premiumStatus}
        onLogin={handleLogin}
        onSignup={handleSignup}
        onLogout={async () => { await signOut(); router.push('/') }}
        onDashboard={handleDashboard}
        onPurchaseRenewal={handlePurchaseRenewal}
        isLoading={loading}
        showGetPremiumLink
      />

      <main>
        {/* Hero Section */}
        <div className="relative pt-20 pb-12 md:pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl animate-pulse delay-700"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#007aff]/5 backdrop-blur-sm border border-[#007aff]/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
                <MapPin className="w-4 h-4 text-[#007aff]" />
                <span className="text-sm font-medium text-gray-700">Real Estate Office Locator</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                Find a
                <span className="text-[#007aff]"> Real Estate Near You</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                Search by zip code or use your current location to find nearby Real Estate offices
                with hours, phone numbers, and directions.
              </p>

              {/* Search Form */}
              <Card className="bg-white/80 backdrop-blur-xl shadow-2xl border border-white/20 rounded-3xl overflow-hidden max-w-2xl mx-auto">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-row gap-2 md:gap-4">
                    <div className="flex-1 relative">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        type="text"
                        placeholder="Enter zip code (e.g., 90210)"
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value.replace(/\D/g, '').slice(0, 5))}
                        onKeyPress={handleKeyPress}
                        className="pl-12 pr-4 py-6 text-lg border-2 border-gray-100 rounded-xl focus:border-blue-500 focus:ring-blue-500/20 focus-visible:ring-0 focus-visible:ring-offset-0"
                        maxLength={5}
                      />
                    </div>
                    <Button
                      onClick={searchByZipCode}
                      disabled={isLoading || isLoadingLocation}
                      className="bg-[#007aff] hover:bg-[#0056cc] text-white px-4 md:px-8 py-6 text-lg rounded-xl shadow-lg shadow-blue-500/20 transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100 flex-shrink-0"
                    >
                      {isLoading ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        <>
                          <Search className="w-5 h-5 md:mr-2" />
                          <span className="hidden md:inline">Search</span>
                        </>
                      )}
                    </Button>
                  </div>

                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex-1 h-px bg-gray-200"></div>
                    <span className="text-sm text-gray-400 font-medium">or</span>
                    <div className="flex-1 h-px bg-gray-200"></div>
                  </div>

                  <Button
                    onClick={searchByCurrentLocation}
                    disabled={isLoading || isLoadingLocation}
                    variant="outline"
                    className="w-full mt-4 py-6 text-base font-medium text-gray-700 border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all"
                  >
                    {isLoadingLocation ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Getting location...
                      </>
                    ) : (
                      <>
                        <Navigation2 className="w-5 h-5 mr-2" />
                        Use My Current Location
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="container mx-auto px-4 mb-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-red-50 border border-red-200 rounded-2xl p-4 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-red-700">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Results Section */}
        {hasSearched && !isLoading && (
          <div className="container mx-auto px-4 pb-16">
            <div className="max-w-6xl mx-auto">
              {locations.length > 0 ? (
                <>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">
                      {locations.length} Real Estate Office{locations.length !== 1 ? 's' : ''} Found
                    </h2>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Map Section */}
                    <div className="order-2 lg:order-1">
                      <div
                        ref={mapRef}
                        className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg border border-gray-200 aspect-[4/3] lg:sticky lg:top-24"
                      >
                        {process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY && searchLocation ? (
                          <img
                            src={getMapUrl() || ''}
                            alt="Map showing Real Estate locations"
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-gray-500">
                            <div className="text-center">
                              <MapPin className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                              <p className="font-medium">Map Preview</p>
                              <p className="text-sm text-gray-400 mt-1">
                                {locations.length} location{locations.length !== 1 ? 's' : ''} found
                              </p>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Map Legend */}
                      {locations.length > 0 && (
                        <div className="mt-4 p-4 bg-gray-50 rounded-xl">
                          <p className="text-sm text-gray-600 font-medium mb-2">Map Markers:</p>
                          <div className="flex flex-wrap gap-3">
                            {locations.slice(0, 10).map((loc, index) => (
                              <button
                                key={loc.id}
                                onClick={() => setSelectedLocation(loc.id)}
                                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition-colors ${selectedLocation === loc.id
                                  ? 'bg-blue-100 text-blue-700 font-medium'
                                  : 'bg-white text-gray-600 hover:bg-gray-100'
                                  }`}
                              >
                                <span className="w-5 h-5 bg-red-500 text-white text-xs font-bold rounded flex items-center justify-center">
                                  {String.fromCharCode(65 + index)}
                                </span>
                                <span className="truncate max-w-[120px]">{loc.name.split(' ').slice(0, 2).join(' ')}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Results List */}
                    <div className="order-1 lg:order-2 space-y-4">
                      {locations.map((location, index) => (
                        <Card
                          key={location.id}
                          className={`bg-white rounded-2xl border-2 transition-all duration-200 cursor-pointer hover:shadow-lg ${selectedLocation === location.id
                            ? 'border-blue-500 shadow-lg shadow-blue-500/10'
                            : 'border-gray-100 hover:border-gray-200'
                            }`}
                          onClick={() => setSelectedLocation(location.id)}
                        >
                          <CardContent className="p-5">
                            <div className="flex gap-4">
                              {/* Marker Badge */}
                              <div className="flex-shrink-0">
                                <div className="w-10 h-10 bg-red-500 text-white font-bold rounded-xl flex items-center justify-center text-lg shadow-md">
                                  {String.fromCharCode(65 + index)}
                                </div>
                              </div>

                              {/* Content */}
                              <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between gap-3 mb-2">
                                  <h3 className="font-bold text-gray-900 text-lg leading-tight">
                                    {location.name}
                                  </h3>
                                  {location.distance !== undefined && (
                                    <span className="flex-shrink-0 px-2 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-lg">
                                      {location.distance} mi
                                    </span>
                                  )}
                                </div>

                                <p className="text-gray-600 text-sm mb-3">{location.address}</p>

                                {/* Rating */}
                                {location.rating && (
                                  <div className="flex items-center gap-2 mb-3">
                                    <div className="flex items-center gap-1">
                                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                      <span className="font-medium text-gray-900">{location.rating.toFixed(1)}</span>
                                    </div>
                                    {location.totalRatings && (
                                      <span className="text-gray-500 text-sm">
                                        ({location.totalRatings.toLocaleString()} reviews)
                                      </span>
                                    )}
                                    {location.isOpen !== undefined && (
                                      <span className={`ml-2 px-2 py-0.5 rounded-full text-xs font-medium ${location.isOpen
                                        ? 'bg-green-100 text-green-700'
                                        : 'bg-red-100 text-red-700'
                                        }`}>
                                        {location.isOpen ? 'Open Now' : 'Closed'}
                                      </span>
                                    )}
                                  </div>
                                )}

                                {/* Phone */}
                                {location.phone && (
                                  <a
                                    href={`tel:${location.phone}`}
                                    onClick={(e) => e.stopPropagation()}
                                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors mb-3"
                                  >
                                    <Phone className="w-4 h-4" />
                                    <span className="text-sm">{location.phone}</span>
                                  </a>
                                )}

                                {/* Hours */}
                                {location.hours && location.hours.length > 0 && (
                                  <div className="mb-3">
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation()
                                        setExpandedHours(expandedHours === location.id ? null : location.id)
                                      }}
                                      className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors text-sm"
                                    >
                                      <Clock className="w-4 h-4" />
                                      <span>Hours</span>
                                      {expandedHours === location.id ? (
                                        <ChevronUp className="w-4 h-4" />
                                      ) : (
                                        <ChevronDown className="w-4 h-4" />
                                      )}
                                    </button>
                                    {expandedHours === location.id && (
                                      <div className="mt-2 pl-6 space-y-1">
                                        {location.hours.map((hour, i) => (
                                          <p key={i} className="text-sm text-gray-600">{hour}</p>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                )}

                                {/* Actions */}
                                <div className="flex flex-wrap gap-2 mt-4">
                                  <a
                                    href={getDirectionsUrl(location)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-xl hover:bg-blue-700 transition-colors"
                                  >
                                    <Navigation2 className="w-4 h-4" />
                                    Get Directions
                                  </a>
                                  <a
                                    href={getGoogleMapsUrl(location)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-xl hover:bg-gray-200 transition-colors"
                                  >
                                    <ExternalLink className="w-4 h-4" />
                                    View on Google
                                  </a>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center py-16">
                  <Building2 className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">No Real Estate Offices Found</h3>
                  <p className="text-gray-600 max-w-md mx-auto">
                    We couldn't find any Real Estate offices near that location.
                    Try a different zip code or expand your search area.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tips Section */}
        <div className="container mx-auto px-4 pb-16 mt-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Tips for Your Real Estate Visit</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Book an Appointment</h3>
                    <p className="text-gray-600 text-sm">Many Real Estates allow online appointments to skip the wait.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Bring Required Documents</h3>
                    <p className="text-gray-600 text-sm">Check our documents checklist to avoid multiple trips.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Star className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Prepare for the Test</h3>
                    <p className="text-gray-600 text-sm">Practice with our state-specific Real Estate questions first.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Arrive Early</h3>
                    <p className="text-gray-600 text-sm">Plan to arrive 15-30 minutes before your appointment.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row sm:justify-center gap-4">
                <Button
                  onClick={() => router.push('/license-documents')}
                  variant="outline"
                  className="w-full sm:w-auto px-8 py-4 text-base rounded-xl border-2 transition-all hover:bg-gray-50"
                >
                  View Document Checklist
                </Button>
                <Button
                  onClick={() => router.push('/')}
                  className="bg-[#007aff] hover:bg-[#0056cc] text-white w-full sm:w-auto px-8 py-4 text-base rounded-xl shadow-lg shadow-blue-500/20 transition-all hover:scale-105 active:scale-95"
                >
                  Start Practice Test
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => {
          setAuthModalOpen(false)
          setIsRedirecting(false)
        }}
        mode={authMode}
        onSwitchMode={setAuthMode}
        onSuccess={handleAuthSuccess}
        isRedirecting={isRedirecting}
        closeOnSuccess={authMode !== 'signup' || !!user}
      />

      {/* Expired Premium Modal */}
      <ExpiredPremiumModal
        isOpen={showExpiredModal}
        onClose={() => setShowExpiredModal(false)}
        onRenew={async () => {
          if (!user) return
          await createCheckoutSession(user.uid)
        }}
      />

      {/* Purchase/Renewal Dialog */}
      <PurchaseRenewalDialog
        isOpen={showPurchaseModal}
        onClose={() => setShowPurchaseModal(false)}
        premiumStatus={premiumStatus}
        onPurchase={handlePurchase}
        isLoading={purchaseLoading}
      />
    </div>
  )
}
