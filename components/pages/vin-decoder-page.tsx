'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '@/contexts/auth-context'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { AuthModal } from '@/components/auth/auth-modal'
import { ExpiredPremiumModal } from '@/components/auth/expired-premium-modal'
import { PurchaseRenewalDialog } from '@/components/purchase-renewal-dialog'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { STATES, type StateKey } from '@/lib/constants'
import {
    Search,
    Car,
    CheckCircle,
    AlertTriangle,
    Info,
    ArrowRight,
    Loader2,
    Settings,
    MapPin,
    Calendar,
    Fuel
} from 'lucide-react'
import { getStateDedicatedPageUrl } from '@/lib/utils/state-routes'

interface Recall {
    Manufacturer: string
    NHTSACampaignNumber: string
    ReportReceivedDate: string
    Component: string
    Summary: string
    Remedy: string
    Notes: string
}

interface VehicleData {
    Make: string
    Model: string
    ModelYear: string
    BodyClass: string
    EngineCylinders: string
    DisplacementL: string
    FuelTypePrimary: string
    Manufacturer: string
    PlantCountry: string
    PlantCity: string
    DriveType: string
    TransmissionStyle: string
    Doors: string
    VehicleType: string
    // Expanded Fields
    GrossVehicleWeightRating: string
    ElectrificationLevel: string
    EngineHP: string
    TopSpeedMPH: string
    BatteryInfo: string
    NCSABodyType: string
    WheelBaseShort: string
    Length: string
    Width: string
    Height: string
    ABS: string
    ESC: string
    TractionControl: string
    BlindSpotMon: string
    LaneKeepAssist: string
    BackUpCam: string
    ParkAssist: string
    TirePressure: string
    // New Safety Fields from API analysis
    AdaptiveCruiseControl: string
    ForwardCollisionWarning: string
    BlindSpotIntervention: string
    LaneDepartureWarning: string
    RearCrossTrafficAlert: string
    DaytimeRunningLight: string
    HeadlampLightSource: string
}

export function VinDecoderPage() {
    const [vin, setVin] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [vehicleData, setVehicleData] = useState<VehicleData | null>(null)
    const [recalls, setRecalls] = useState<Recall[]>([])
    const [recallsLoading, setRecallsLoading] = useState(false)

    // Auth & Premium states
    const { user, userData, isPremium, isPremiumExpired, premiumStatus, signOut } = useAuth()
    const [authModalOpen, setAuthModalOpen] = useState(false)
    const [authMode, setAuthMode] = useState<'login' | 'signup'>('login')
    const [isRedirecting, setIsRedirecting] = useState(false)
    const [showExpiredModal, setShowExpiredModal] = useState(false)
    const [showPurchaseModal, setShowPurchaseModal] = useState(false)
    const [purchaseLoading, setPurchaseLoading] = useState(false)

    const router = useRouter()

    const handleDecoder = async (e: React.FormEvent) => {
        e.preventDefault()
        if (vin.length !== 17) {
            setError('VIN must be exactly 17 characters long')
            return
        }

        setLoading(true)
        setRecallsLoading(true)
        setError('')
        setVehicleData(null)
        setRecalls([])

        try {
            // Parallel requests: Vehicle Data and Recalls
            const [vehicleRes, recallsRes] = await Promise.all([
                fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vin}?format=json`),
                fetch(`https://api.nhtsa.gov/recalls/recallsByVin?vin=${vin}&format=json`) // Using the user-preferred endpoint
            ])

            const vehicleData = await vehicleRes.json()
            const recallsData = await recallsRes.json()

            // Process Vehicle Data
            if (vehicleData.Results) {
                const mappedData: VehicleData = {
                    Make: '',
                    Model: '',
                    ModelYear: '',
                    BodyClass: '',
                    EngineCylinders: '',
                    DisplacementL: '',
                    FuelTypePrimary: '',
                    Manufacturer: '',
                    PlantCountry: '',
                    PlantCity: '',
                    DriveType: '',
                    TransmissionStyle: '',
                    Doors: '',
                    VehicleType: '',
                    GrossVehicleWeightRating: '',
                    ElectrificationLevel: '',
                    EngineHP: '',
                    TopSpeedMPH: '',
                    BatteryInfo: '',
                    NCSABodyType: '',
                    WheelBaseShort: '',
                    Length: '',
                    Width: '',
                    Height: '',
                    ABS: '',
                    ESC: '',
                    TractionControl: '',
                    BlindSpotMon: '',
                    LaneKeepAssist: '',
                    BackUpCam: '',
                    ParkAssist: '',
                    TirePressure: '',
                    AdaptiveCruiseControl: '',
                    ForwardCollisionWarning: '',
                    BlindSpotIntervention: '',
                    LaneDepartureWarning: '',
                    RearCrossTrafficAlert: '',
                    DaytimeRunningLight: '',
                    HeadlampLightSource: ''
                }

                vehicleData.Results.forEach((item: any) => {
                    const value = item.Value && item.Value !== 'null' ? item.Value : ''
                    switch (item.Variable) {
                        case 'Make': mappedData.Make = value; break;
                        case 'Model': mappedData.Model = value; break;
                        case 'Model Year': mappedData.ModelYear = value; break;
                        case 'Body Class': mappedData.BodyClass = value; break;
                        case 'Engine Number of Cylinders': mappedData.EngineCylinders = value; break;
                        case 'Displacement (L)': mappedData.DisplacementL = value; break;
                        case 'Fuel Type - Primary': mappedData.FuelTypePrimary = value; break;
                        case 'Manufacturer Name': mappedData.Manufacturer = value; break;
                        case 'Plant Country': mappedData.PlantCountry = value; break;
                        case 'Plant City': mappedData.PlantCity = value; break;
                        case 'Drive Type': mappedData.DriveType = value; break;
                        case 'Transmission Style': mappedData.TransmissionStyle = value; break;
                        case 'Doors': mappedData.Doors = value; break;
                        case 'Vehicle Type': mappedData.VehicleType = value; break;
                        // Extended Fields
                        case 'Gross Vehicle Weight Rating':
                        case 'Gross Vehicle Weight Rating From': // API often uses this for GVWR
                            if (!mappedData.GrossVehicleWeightRating) mappedData.GrossVehicleWeightRating = value;
                            break;
                        case 'Electrification Level': mappedData.ElectrificationLevel = value; break;
                        case 'Engine Brake (hp) From': mappedData.EngineHP = value; break;
                        case 'Top Speed (MPH)': mappedData.TopSpeedMPH = value; break;
                        case 'Battery Info':
                        case 'Other Engine Info': // Often contains "Electric Drive / Electric Motor"
                            if (!mappedData.BatteryInfo) mappedData.BatteryInfo = value;
                            break;
                        case 'NCSA Body Type': mappedData.NCSABodyType = value; break;
                        case 'Wheel Base (Short)': mappedData.WheelBaseShort = value; break;
                        case 'Vehicle Length': mappedData.Length = value; break;
                        case 'Vehicle Width': mappedData.Width = value; break;
                        case 'Vehicle Height': mappedData.Height = value; break;
                        case 'Anti-lock Braking System (ABS)': mappedData.ABS = value; break;
                        case 'Electronic Stability Control (ESC)': mappedData.ESC = value; break;
                        case 'Traction Control': mappedData.TractionControl = value; break;
                        case 'Blind Spot Monitoring (BSM)':
                        case 'Blind Spot Warning (BSW)': // Verified API name
                            mappedData.BlindSpotMon = value;
                            break;
                        case 'Lane Keeping Assistance (LKA)': mappedData.LaneKeepAssist = value; break;
                        case 'Backup Camera': mappedData.BackUpCam = value; break;
                        case 'Parking Assist': mappedData.ParkAssist = value; break;
                        case 'Tire Pressure Monitoring System (TPMS) Type': mappedData.TirePressure = value; break;
                        // New Safety Fields
                        case 'Adaptive Cruise Control (ACC)': mappedData.AdaptiveCruiseControl = value; break;
                        case 'Forward Collision Warning (FCW)': mappedData.ForwardCollisionWarning = value; break;
                        case 'Blind Spot Intervention (BSI)': mappedData.BlindSpotIntervention = value; break;
                        case 'Lane Departure Warning (LDW)': mappedData.LaneDepartureWarning = value; break;
                        case 'Rear Cross Traffic Alert': mappedData.RearCrossTrafficAlert = value; break;
                        case 'Daytime Running Light (DRL)': mappedData.DaytimeRunningLight = value; break;
                        case 'Headlamp Light Source': mappedData.HeadlampLightSource = value; break;
                    }
                })

                if (!mappedData.Make) {
                    setError('Could not decode this VIN. Please check if it is correct.')
                } else {
                    setVehicleData(mappedData)
                }
            } else {
                setError('Failed to fetch vehicle data.')
            }

            // Process Recalls Data
            // The API returns Count and Results array
            if (recallsData && recallsData.Results) {
                setRecalls(recallsData.Results)
            }

        } catch (err) {
            setError('An error occurred while connecting to the NHTSA database.')
            console.error(err)
        } finally {
            setLoading(false)
            setRecallsLoading(false)
        }
    }

    // Auth handlers
    const handleLogin = () => { setAuthMode('login'); setAuthModalOpen(true) }
    const handleSignup = () => { setAuthMode('signup'); setAuthModalOpen(true) }

    const handleAuthSuccess = async (mode: 'login' | 'signup', result?: any) => {
        if (mode === 'signup' && result?.user) {
            setIsRedirecting(true)
            await createCheckoutSession(result.user.uid)
        } else {
            setAuthModalOpen(false)
            if (mode === 'login' && result?.userData) {
                if (result.userData.isPremium && isPremiumExpired) {
                    setShowExpiredModal(true)
                } else if (result.userData.isPremium) {
                    router.push('/dashboard')
                }
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

    const createCheckoutSession = async (userId: string, duration: number = 90) => {
        try {
            const response = await fetch('/api/create-checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: userId,
                    state: 'california', // Default state or could be user's state
                    duration: duration,
                }),
            })

            const data = await response.json()

            if (data.error) {
                console.error('Checkout error:', data.error)
                alert('Failed to create checkout session')
                setIsRedirecting(false)
                setAuthModalOpen(false)
                return
            }

            if (data.url) {
                window.location.href = data.url
            }
        } catch (error) {
            console.error('Error creating checkout session:', error)
            alert('An error occurred. Please try again.')
            setIsRedirecting(false)
            setAuthModalOpen(false)
        }
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
                onDashboard={() => router.push('/dashboard')}
                onPurchaseRenewal={handlePurchaseRenewal}
                showGetPremiumLink
            />

            <main>
                {/* Hero Section */}
                <div className="relative pt-20 pb-24 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
                        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl animate-pulse delay-700"></div>
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center max-w-4xl mx-auto mb-16">
                            <div className="inline-flex items-center gap-2 bg-[#007aff]/5 backdrop-blur-sm border border-[#007aff]/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
                                <Car className="w-4 h-4 text-[#007aff]" />
                                <span className="text-sm font-medium text-gray-700">Free NHTSA Database Check</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                                Free VIN Check &
                                <br />
                                <span className="text-[#007aff]">Details Decoder</span>.
                            </h1>

                            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                                Decode your vehicle's history, specifications, and manufacturer details instantly.
                                Just enter your 17-character VIN below.
                            </p>
                        </div>

                        {/* Search Card */}
                        <div className="max-w-3xl mx-auto">
                            <Card className="bg-white/80 backdrop-blur-xl shadow-2xl border border-white/20 rounded-3xl overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent pointer-events-none"></div>
                                <CardContent className="p-8 md:p-10 relative z-10">
                                    <form onSubmit={handleDecoder} className="flex flex-col md:flex-row gap-4">
                                        <div className="flex-1 relative">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                <Search className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <Input
                                                type="text"
                                                placeholder="Enter 17-character VIN"
                                                value={vin}
                                                onChange={(e) => setVin(e.target.value.toUpperCase())}
                                                maxLength={17}
                                                className="pl-11 py-7 text-lg font-medium bg-gray-50 border-gray-200 focus:bg-white transition-all rounded-xl"
                                            />
                                            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-gray-400 bg-gray-100 px-2 py-1 rounded">
                                                {vin.length}/17
                                            </div>
                                        </div>
                                        <Button
                                            type="submit"
                                            disabled={loading || vin.length !== 17}
                                            className="py-7 px-8 text-lg font-bold bg-[#007aff] hover:bg-[#0056cc] rounded-xl shadow-lg shadow-blue-500/20 transition-all hover:scale-105"
                                        >
                                            {loading ? (
                                                <Loader2 className="w-6 h-6 animate-spin" />
                                            ) : (
                                                <>
                                                    Decode VIN
                                                    <ArrowRight className="w-5 h-5 ml-2" />
                                                </>
                                            )}
                                        </Button>
                                    </form>

                                    {error && (
                                        <div className="mt-4 p-4 bg-red-50 border border-red-100 rounded-xl flex items-start gap-3 text-red-700 animate-slide-up">
                                            <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                            <span>{error}</span>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>

                {/* Results Section */}
                {vehicleData && (
                    <div className="container mx-auto px-4 pb-24 animate-slide-up">
                        <div className="max-w-5xl mx-auto">
                            <div className="grid md:grid-cols-3 gap-8">

                                {/* Main Vehicle Card */}
                                <div className="md:col-span-3">
                                    <Card className="bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-2xl border-0 rounded-3xl overflow-hidden relative">
                                        <div className="absolute top-0 right-0 p-12 opacity-10">
                                            <Car className="w-64 h-64" />
                                        </div>
                                        <CardContent className="p-8 md:p-12 relative z-10">
                                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                                                <div>
                                                    <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 border-blue-500/50 mb-4 px-3 py-1 text-sm">
                                                        {vehicleData.ModelYear} MODEL
                                                    </Badge>
                                                    <h2 className="text-4xl md:text-5xl font-bold mb-2">
                                                        {vehicleData.Make} {vehicleData.Model}
                                                    </h2>
                                                    <p className="text-xl text-gray-400">{vehicleData.VehicleType} • {vehicleData.BodyClass}</p>
                                                </div>
                                                <div className="text-right hidden md:block">
                                                    <div className="text-sm text-gray-400 mb-1">VIN Number</div>
                                                    <div className="font-mono text-2xl font-bold tracking-wider text-blue-400">{vin}</div>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10">
                                                <div>
                                                    <div className="text-gray-400 text-sm mb-1">Make</div>
                                                    <div className="font-bold text-lg">{vehicleData.Make}</div>
                                                </div>
                                                <div>
                                                    <div className="text-gray-400 text-sm mb-1">Model</div>
                                                    <div className="font-bold text-lg">{vehicleData.Model}</div>
                                                </div>
                                                <div>
                                                    <div className="text-gray-400 text-sm mb-1">Year</div>
                                                    <div className="font-bold text-lg">{vehicleData.ModelYear}</div>
                                                </div>
                                                <div>
                                                    <div className="text-gray-400 text-sm mb-1">Drive Type</div>
                                                    <div className="font-bold text-lg">{vehicleData.DriveType || 'N/A'}</div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>

                                {/* Model Specifications */}
                                <div className="md:col-span-3 space-y-8">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-2 bg-gray-900 rounded-lg text-white">
                                            <Settings className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900">Model Specifications</h3>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-8">
                                        {/* Body & Chassis */}
                                        <Card className="bg-white border-gray-100 flex flex-col h-full shadow-sm">
                                            <CardHeader className="bg-gray-50/50 border-b border-gray-100 py-4">
                                                <CardTitle className="text-base font-bold text-gray-900 flex items-center gap-2">
                                                    Body & Chassis
                                                </CardTitle>
                                            </CardHeader>
                                            <div className="divide-y divide-gray-100 text-sm">
                                                {vehicleData.BodyClass && <div className="flex justify-between p-4 bg-white">
                                                    <span className="text-gray-500">Body Class</span>
                                                    <span className="font-medium text-gray-900 text-right">{vehicleData.BodyClass}</span>
                                                </div>}
                                                {vehicleData.Doors && <div className="flex justify-between p-4 bg-gray-50/30">
                                                    <span className="text-gray-500">Doors</span>
                                                    <span className="font-medium text-gray-900">{vehicleData.Doors}</span>
                                                </div>}
                                                {vehicleData.GrossVehicleWeightRating && <div className="flex justify-between p-4 bg-white">
                                                    <span className="text-gray-500">Gross Weight (GVWR)</span>
                                                    <span className="font-medium text-gray-900 text-right">{vehicleData.GrossVehicleWeightRating}</span>
                                                </div>}
                                                {vehicleData.WheelBaseShort && <div className="flex justify-between p-4 bg-gray-50/30">
                                                    <span className="text-gray-500">Wheelbase</span>
                                                    <span className="font-medium text-gray-900 text-right">{vehicleData.WheelBaseShort} in</span>
                                                </div>}
                                                {vehicleData.Length && <div className="flex justify-between p-4 bg-white">
                                                    <span className="text-gray-500">Length</span>
                                                    <span className="font-medium text-gray-900 text-right">{vehicleData.Length} in</span>
                                                </div>}
                                                {vehicleData.Width && <div className="flex justify-between p-4 bg-gray-50/30">
                                                    <span className="text-gray-500">Width</span>
                                                    <span className="font-medium text-gray-900 text-right">{vehicleData.Width} in</span>
                                                </div>}
                                                {vehicleData.Height && <div className="flex justify-between p-4 bg-white">
                                                    <span className="text-gray-500">Height</span>
                                                    <span className="font-medium text-gray-900 text-right">{vehicleData.Height} in</span>
                                                </div>}
                                                {vehicleData.NCSABodyType && <div className="flex justify-between p-4 bg-gray-50/30">
                                                    <span className="text-gray-500">NCSA Body Type</span>
                                                    <span className="font-medium text-gray-900 text-right">{vehicleData.NCSABodyType}</span>
                                                </div>}
                                            </div>
                                        </Card>

                                        {/* Engine & Powertrain */}
                                        <Card className="bg-white border-gray-100 flex flex-col h-full shadow-sm">
                                            <CardHeader className="bg-gray-50/50 border-b border-gray-100 py-4">
                                                <CardTitle className="text-base font-bold text-gray-900 flex items-center gap-2">
                                                    Powertrain
                                                </CardTitle>
                                            </CardHeader>
                                            <div className="divide-y divide-gray-100 text-sm">
                                                <div className="flex justify-between p-4 bg-white">
                                                    <span className="text-gray-500">Engine / Motor</span>
                                                    <span className="font-medium text-gray-900 text-right">{vehicleData.ElectrificationLevel || 'Internal Combustion'}</span>
                                                </div>
                                                {!vehicleData.ElectrificationLevel && vehicleData.EngineCylinders && (
                                                    <div className="flex justify-between p-4 bg-gray-50/30">
                                                        <span className="text-gray-500">Cylinders</span>
                                                        <span className="font-medium text-gray-900">{vehicleData.EngineCylinders}</span>
                                                    </div>
                                                )}
                                                {!vehicleData.ElectrificationLevel && vehicleData.DisplacementL && (
                                                    <div className="flex justify-between p-4 bg-white">
                                                        <span className="text-gray-500">Displacement</span>
                                                        <span className="font-medium text-gray-900">{vehicleData.DisplacementL}L</span>
                                                    </div>
                                                )}
                                                {vehicleData.EngineHP && (
                                                    <div className="flex justify-between p-4 bg-gray-50/30">
                                                        <span className="text-gray-500">Horsepower</span>
                                                        <span className="font-medium text-gray-900">{vehicleData.EngineHP} HP</span>
                                                    </div>
                                                )}
                                                {vehicleData.FuelTypePrimary && <div className="flex justify-between p-4 bg-white">
                                                    <span className="text-gray-500">Fuel Primary</span>
                                                    <span className="font-medium text-gray-900">{vehicleData.FuelTypePrimary}</span>
                                                </div>}
                                                {vehicleData.BatteryInfo && (
                                                    <div className="flex justify-between p-4 bg-gray-50/30">
                                                        <span className="text-gray-500">Battery Info</span>
                                                        <span className="font-medium text-gray-900 text-right max-w-[200px] truncate" title={vehicleData.BatteryInfo}>
                                                            {vehicleData.BatteryInfo}
                                                        </span>
                                                    </div>
                                                )}
                                                {vehicleData.DriveType && <div className="flex justify-between p-4 bg-white">
                                                    <span className="text-gray-500">Drive Type</span>
                                                    <span className="font-medium text-gray-900">{vehicleData.DriveType}</span>
                                                </div>}
                                                {vehicleData.TransmissionStyle && <div className="flex justify-between p-4 bg-gray-50/30">
                                                    <span className="text-gray-500">Transmission</span>
                                                    <span className="font-medium text-gray-900 text-right">{vehicleData.TransmissionStyle}</span>
                                                </div>}
                                            </div>
                                        </Card>

                                        {/* Safety & Driver Assist */}
                                        <Card className="bg-white border-gray-100 flex flex-col h-full shadow-sm">
                                            <CardHeader className="bg-gray-50/50 border-b border-gray-100 py-4">
                                                <CardTitle className="text-base font-bold text-gray-900 flex items-center gap-2">
                                                    Safety & Assist
                                                </CardTitle>
                                            </CardHeader>
                                            <div className="divide-y divide-gray-100 text-sm">
                                                {vehicleData.ABS && <div className="flex justify-between p-4 bg-white">
                                                    <span className="text-gray-500">ABS</span>
                                                    <span className="font-medium text-gray-900">{vehicleData.ABS}</span>
                                                </div>}
                                                {vehicleData.ESC && <div className="flex justify-between p-4 bg-gray-50/30">
                                                    <span className="text-gray-500">Stability Control</span>
                                                    <span className="font-medium text-gray-900">{vehicleData.ESC}</span>
                                                </div>}
                                                {vehicleData.TractionControl && <div className="flex justify-between p-4 bg-white">
                                                    <span className="text-gray-500">Traction Control</span>
                                                    <span className="font-medium text-gray-900">{vehicleData.TractionControl}</span>
                                                </div>}
                                                {vehicleData.BlindSpotMon && <div className="flex justify-between p-4 bg-gray-50/30">
                                                    <span className="text-gray-500">Blind Spot Monitor</span>
                                                    <span className="font-medium text-gray-900">{vehicleData.BlindSpotMon}</span>
                                                </div>}
                                                {vehicleData.BlindSpotIntervention && <div className="flex justify-between p-4 bg-white">
                                                    <span className="text-gray-500">Blind Spot Intervention</span>
                                                    <span className="font-medium text-gray-900">{vehicleData.BlindSpotIntervention}</span>
                                                </div>}
                                                {vehicleData.LaneKeepAssist && <div className="flex justify-between p-4 bg-gray-50/30">
                                                    <span className="text-gray-500">Lane Keep Assist</span>
                                                    <span className="font-medium text-gray-900">{vehicleData.LaneKeepAssist}</span>
                                                </div>}
                                                {vehicleData.LaneDepartureWarning && <div className="flex justify-between p-4 bg-white">
                                                    <span className="text-gray-500">Lane Departure Warning</span>
                                                    <span className="font-medium text-gray-900">{vehicleData.LaneDepartureWarning}</span>
                                                </div>}
                                                {vehicleData.ForwardCollisionWarning && <div className="flex justify-between p-4 bg-gray-50/30">
                                                    <span className="text-gray-500">Forward Collision Warn.</span>
                                                    <span className="font-medium text-gray-900">{vehicleData.ForwardCollisionWarning}</span>
                                                </div>}
                                                {vehicleData.AdaptiveCruiseControl && <div className="flex justify-between p-4 bg-white">
                                                    <span className="text-gray-500">Adaptive Cruise Control</span>
                                                    <span className="font-medium text-gray-900">{vehicleData.AdaptiveCruiseControl}</span>
                                                </div>}
                                                {vehicleData.BackUpCam && <div className="flex justify-between p-4 bg-gray-50/30">
                                                    <span className="text-gray-500">Backup Camera</span>
                                                    <span className="font-medium text-gray-900">{vehicleData.BackUpCam}</span>
                                                </div>}
                                                {vehicleData.RearCrossTrafficAlert && <div className="flex justify-between p-4 bg-white">
                                                    <span className="text-gray-500">Rear Cross Traffic Alert</span>
                                                    <span className="font-medium text-gray-900">{vehicleData.RearCrossTrafficAlert}</span>
                                                </div>}
                                                {vehicleData.ParkAssist && <div className="flex justify-between p-4 bg-gray-50/30">
                                                    <span className="text-gray-500">Parking Assist</span>
                                                    <span className="font-medium text-gray-900">{vehicleData.ParkAssist}</span>
                                                </div>}
                                            </div>
                                        </Card>

                                        {/* Manufacturing & Other */}
                                        <Card className="bg-white border-gray-100 flex flex-col h-full shadow-sm">
                                            <CardHeader className="bg-gray-50/50 border-b border-gray-100 py-4">
                                                <CardTitle className="text-base font-bold text-gray-900 flex items-center gap-2">
                                                    Manufacturing & Other
                                                </CardTitle>
                                            </CardHeader>
                                            <div className="divide-y divide-gray-100 text-sm">
                                                {vehicleData.Manufacturer && <div className="flex justify-between p-4 bg-white">
                                                    <span className="text-gray-500">Manufacturer</span>
                                                    <span className="font-medium text-gray-900 text-right max-w-[200px] truncate" title={vehicleData.Manufacturer}>{vehicleData.Manufacturer}</span>
                                                </div>}
                                                {vehicleData.PlantCountry && <div className="flex justify-between p-4 bg-gray-50/30">
                                                    <span className="text-gray-500">Plant Country</span>
                                                    <span className="font-medium text-gray-900">{vehicleData.PlantCountry}</span>
                                                </div>}
                                                {vehicleData.PlantCity && <div className="flex justify-between p-4 bg-white">
                                                    <span className="text-gray-500">Plant City</span>
                                                    <span className="font-medium text-gray-900">{vehicleData.PlantCity}</span>
                                                </div>}
                                                {vehicleData.TirePressure && <div className="flex justify-between p-4 bg-gray-50/30">
                                                    <span className="text-gray-500">TPMS</span>
                                                    <span className="font-medium text-gray-900">{vehicleData.TirePressure}</span>
                                                </div>}
                                                {vehicleData.TopSpeedMPH && <div className="flex justify-between p-4 bg-white">
                                                    <span className="text-gray-500">Top Speed</span>
                                                    <span className="font-medium text-gray-900">{vehicleData.TopSpeedMPH} MPH</span>
                                                </div>}
                                                {vehicleData.HeadlampLightSource && <div className="flex justify-between p-4 bg-gray-50/30">
                                                    <span className="text-gray-500">Headlights</span>
                                                    <span className="font-medium text-gray-900">{vehicleData.HeadlampLightSource}</span>
                                                </div>}
                                                {vehicleData.DaytimeRunningLight && <div className="flex justify-between p-4 bg-white">
                                                    <span className="text-gray-500">Daytime Running Lights</span>
                                                    <span className="font-medium text-gray-900">{vehicleData.DaytimeRunningLight}</span>
                                                </div>}
                                            </div>
                                        </Card>
                                    </div>
                                </div>

                                {/* Safety Recalls Card */}
                                <Card className="md:col-span-3 bg-white shadow-lg border-gray-100 rounded-2xl overflow-hidden">
                                    <CardHeader className="border-b border-gray-50">
                                        <CardTitle className="flex items-center gap-2 text-xl">
                                            <AlertTriangle className={`w-6 h-6 ${recalls.length > 0 ? 'text-red-600' : 'text-emerald-500'}`} />
                                            Safety Recalls
                                            {recallsLoading && <Loader2 className="w-4 h-4 animate-spin text-gray-400" />}
                                            {!recallsLoading && recalls.length > 0 && (
                                                <Badge variant="destructive" className="ml-auto">
                                                    {recalls.length} Found
                                                </Badge>
                                            )}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-0">
                                        {recallsLoading ? (
                                            <div className="p-8 text-center text-gray-500 flex flex-col items-center">
                                                <Loader2 className="w-8 h-8 animate-spin mb-2" />
                                                <p>Checking for recalls...</p>
                                            </div>
                                        ) : recalls.length > 0 ? (
                                            <div className="divide-y divide-gray-100">
                                                {recalls.map((recall, i) => (
                                                    <div key={i} className="p-6 hover:bg-red-50/10 transition-colors">
                                                        <div className="flex flex-col md:flex-row justify-between gap-4 mb-2">
                                                            <div>
                                                                <h4 className="font-bold text-red-700">{recall.Component}</h4>
                                                                <p className="text-sm text-gray-500 font-mono">{recall.NHTSACampaignNumber}</p>
                                                            </div>
                                                            <div className="text-sm text-gray-400 whitespace-nowrap">
                                                                {new Date(recall.ReportReceivedDate).toLocaleDateString()}
                                                            </div>
                                                        </div>
                                                        <p className="text-gray-700 text-sm mb-2">{recall.Summary}</p>
                                                        <div className="bg-gray-50 p-3 rounded-lg text-xs text-gray-600">
                                                            <strong className="text-gray-900">Remedy:</strong> {recall.Remedy}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <div className="p-8 text-center text-emerald-700 bg-emerald-50/50 flex flex-col items-center">
                                                <CheckCircle className="w-12 h-12 mb-3 text-emerald-500" />
                                                <h3 className="text-lg font-bold mb-1">No Open Recalls Found</h3>
                                                <p className="text-emerald-600/80 max-w-md">
                                                    Great news! According to NHTSA data, there are no open safety recalls for this vehicle's VIN.
                                                </p>
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>
                            </div>

                            <div className="mt-8 text-center bg-blue-50 rounded-2xl p-6 border border-blue-100">
                                <p className="text-blue-800 text-sm">
                                    <strong>Note:</strong> Data provided by NHTSA vPIC Database. Information is based on the vehicle's VIN and may not include aftermarket modifications.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Educational Content & State Promotion */}
                <div className="container mx-auto px-4 py-24 space-y-24">
                    {/* VIN Quick Guide */}
                    <div className="space-y-12 mb-24">
                        <div className="text-center max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">VIN (Vehicle Identification Number) — Quick Guide</h2>
                            <p className="text-lg text-gray-600">
                                A VIN is a <span className="font-bold text-gray-900">17-character alphanumeric code</span> that uniquely identifies a vehicle.
                                <br />
                                Format: <span className="font-mono bg-gray-100 px-2 py-1 rounded text-blue-600 font-bold">Positions 1–17</span>
                            </p>
                        </div>

                        {/* VIN Diagram Image */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white max-w-2xl mx-auto">
                            <img
                                src="/images/vin_decoder.png"
                                alt="VIN Decoder Diagram Breakdown"
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* 1-3 WMI */}
                            <Card className="bg-white shadow-lg border-gray-100">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3 text-xl">
                                        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold">1-3</div>
                                        WMI (World Manufacturer Identifier)
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-gray-600 font-medium">Identifies country + manufacturer</p>
                                    <div className="space-y-3">
                                        <div>
                                            <div className="text-sm font-bold text-gray-900 mb-1">1st character = Country/Region</div>
                                            <div className="grid grid-cols-2 gap-2 text-sm">
                                                <div className="bg-gray-50 px-2 py-1 rounded">1,4,5 → USA 🇺🇸</div>
                                                <div className="bg-gray-50 px-2 py-1 rounded">2 → Canada 🇨🇦</div>
                                                <div className="bg-gray-50 px-2 py-1 rounded">3 → Mexico 🇲🇽</div>
                                                <div className="bg-gray-50 px-2 py-1 rounded">J → Japan 🇯🇵</div>
                                                <div className="bg-gray-50 px-2 py-1 rounded">K → South Korea 🇰🇷</div>
                                                <div className="bg-gray-50 px-2 py-1 rounded">S → UK 🇬🇧</div>
                                                <div className="bg-gray-50 px-2 py-1 rounded">W → Germany 🇩🇪</div>
                                                <div className="bg-gray-50 px-2 py-1 rounded">Z → Italy 🇮🇹</div>
                                                <div className="bg-gray-50 px-2 py-1 rounded">Y → Sweden/Finland 🇸🇪</div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-gray-900">2nd character = Manufacturer</div>
                                            <div className="text-sm text-gray-500">e.g., T = Toyota, B = BMW, H = Honda</div>
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-gray-900">3rd character = Vehicle type or division</div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* 4-8 VDS */}
                            <div className="space-y-8">
                                <Card className="bg-white shadow-lg border-gray-100">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-3 text-xl">
                                            <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-sm font-bold">4-8</div>
                                            Vehicle Descriptor Section (VDS)
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-600 font-medium mb-3">Describes the vehicle</p>
                                        <ul className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-3">
                                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>Model</li>
                                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>Body type</li>
                                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>Engine</li>
                                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>Restraint system</li>
                                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>Transmission</li>
                                        </ul>
                                        <p className="text-xs text-gray-400 italic">(Meaning is manufacturer-specific)</p>
                                    </CardContent>
                                </Card>

                                <Card className="bg-white shadow-lg border-gray-100">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-3 text-xl">
                                            <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-sm font-bold">9</div>
                                            Check Digit
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-600 font-medium mb-2">Used for validation</p>
                                        <ul className="space-y-1 text-sm text-gray-600">
                                            <li>• Calculated mathematically to detect fake/mistyped VINs</li>
                                            <li>• Can be <span className="font-mono font-bold text-emerald-600">0–9</span> or <span className="font-mono font-bold text-emerald-600">X</span></li>
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>

                        {/* 10 Model Year */}
                        <Card className="bg-white shadow-lg border-gray-100 overflow-hidden">
                            <div className="bg-gray-900 p-6 text-white flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-lg font-bold">10</div>
                                <div>
                                    <h3 className="text-xl font-bold">Model Year</h3>
                                    <p className="text-gray-400 text-sm">Maps to the vehicle year (Letters I, O, Q are never used)</p>
                                </div>
                            </div>
                            <CardContent className="p-0">
                                <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y divide-gray-100 text-sm">
                                    {[
                                        ['A', '1980 / 2010'], ['L', '1990 / 2020'],
                                        ['B', '1981 / 2011'], ['M', '1991 / 2021'],
                                        ['C', '1982 / 2012'], ['N', '1992 / 2022'],
                                        ['D', '1983 / 2013'], ['P', '1993 / 2023'],
                                        ['E', '1984 / 2014'], ['R', '1994 / 2024'],
                                        ['F', '1985 / 2015'], ['S', '1995 / 2025'],
                                        ['G', '1986 / 2016'], ['T', '1996 / 2026'],
                                        ['H', '1987 / 2017'], ['V', '1997 / 2027'],
                                        ['J', '1988 / 2018'], ['W', '1998 / 2028'],
                                        ['K', '1989 / 2019'], ['X', '1999 / 2029'],
                                        ['Y', '2000 / 2030'], ['1', '2001'],
                                        ['2-9', '2002-2009'], ['', '']
                                    ].map(([code, year], i) => (
                                        <div key={i} className="p-3 flex justify-between items-center hover:bg-gray-50">
                                            <span className="font-mono font-bold text-blue-600">{code}</span>
                                            <span className="text-gray-600 font-medium">{year}</span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* 11 Assembly Plant */}
                            <Card className="bg-white shadow-lg border-gray-100">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3 text-xl">
                                        <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-sm font-bold">11</div>
                                        Assembly Plant
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-sm text-gray-600">
                                        <li>• Identifies the factory where the vehicle was built</li>
                                        <li>• <span className="italic">Manufacturer-specific</span></li>
                                    </ul>
                                </CardContent>
                            </Card>

                            {/* 12-17 Serial Number */}
                            <Card className="bg-white shadow-lg border-gray-100">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3 text-xl">
                                        <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center text-sm font-bold">12-17</div>
                                        Sequential Serial Number
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-sm text-gray-600">
                                        <li>• Unique production number</li>
                                        <li>• Increases as vehicles are built</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Summary */}
                        <div className="bg-gray-900 text-white rounded-2xl p-6 text-center shadow-xl">
                            <h4 className="text-sm uppercase tracking-widest text-gray-400 mb-2 font-bold">Summary</h4>
                            <p className="text-lg md:text-xl font-bold">
                                VIN = Country + Manufacturer + Vehicle details + Check digit + Year + Plant + Serial number
                            </p>
                        </div>
                    </div>

                    {/* State Promotion */}
                    {/* State Promotion */}
                    {/* State Promotion */}
                    {/* State Promotion */}
                    <div className="border-t border-gray-100 pb-24 pt-16">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-gray-900 text-center">State Real Estate Practice-Test Hubs</h2>

                            <div className="grid grid-cols-3 md:grid-cols-5 gap-y-3 gap-x-8 text-left">
                                {Object.entries(STATES)
                                    .sort((a, b) => a[1].name.localeCompare(b[1].name))
                                    .map(([key, state]) => (
                                        <Link
                                            key={key}
                                            href={getStateDedicatedPageUrl(key as StateKey)}
                                            className="text-[#007aff] text-base font-medium relative block w-fit after:block after:content-[''] after:absolute after:h-[2px] after:bg-[#007aff] after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-left"
                                        >
                                            {state.name}
                                        </Link>
                                    ))}
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
                onSwitchMode={(mode) => setAuthMode(mode)}
                onSuccess={handleAuthSuccess}
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
