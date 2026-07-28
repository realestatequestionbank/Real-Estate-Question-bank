'use client'

import { useState, useMemo } from 'react'
import { AuthProvider, useAuth } from '@/contexts/auth-context'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { useRouter } from 'next/navigation'
import { Search, ChevronRight, HelpCircle, FileText, CheckCircle, ShieldAlert, Award } from 'lucide-react'
import Link from 'next/link'

interface StateRequirement {
    stateName: string;
    hours: number;
    minAge: number;
    examProvider: string;
    passingScore: string;
    licenseFee: string;
    ceHours: string;
    brokerRequired: boolean;
    reciprocity: string;
}

const STATE_REQUIREMENTS_DATA: { [key: string]: StateRequirement } = {
    'alabama': {
        stateName: 'Alabama',
        hours: 60,
        minAge: 19,
        examProvider: 'Pearson VUE',
        passingScore: '70%',
        licenseFee: '$150',
        ceHours: '15 hours every 2 years',
        brokerRequired: true,
        reciprocity: 'Offers reciprocal licenses to active licensees in other states who complete a 6-hour Alabama course.'
    },
    'alaska': {
        stateName: 'Alaska',
        hours: 40,
        minAge: 19,
        examProvider: 'Pearson VUE',
        passingScore: '70%',
        licenseFee: '$390',
        ceHours: '20 hours every 2 years',
        brokerRequired: true,
        reciprocity: 'Requires passing the state-specific exam portion for qualified out-of-state candidates.'
    },
    'arizona': {
        stateName: 'Arizona',
        hours: 90,
        minAge: 18,
        examProvider: 'Pearson VUE',
        passingScore: '75%',
        licenseFee: '$135',
        ceHours: '24 hours every 2 years',
        brokerRequired: true,
        reciprocity: 'Out-of-state agents can bypass some education but must pass the state-specific exam portion.'
    },
    'arkansas': {
        stateName: 'Arkansas',
        hours: 60,
        minAge: 18,
        examProvider: 'Pearson VUE',
        passingScore: '70%',
        licenseFee: '$130',
        ceHours: '7 hours annually',
        brokerRequired: true,
        reciprocity: 'Reciprocal agreements with multiple states including AL, CO, FL, GA, LA, MS, OH, OK, and WA.'
    },
    'california': {
        stateName: 'California',
        hours: 135,
        minAge: 18,
        examProvider: 'California DRE',
        passingScore: '70%',
        licenseFee: '$245',
        ceHours: '45 hours every 4 years',
        brokerRequired: true,
        reciprocity: 'Does not offer direct reciprocity. Out-of-state agents must complete California pre-licensing education and pass the exam.'
    },
    'colorado': {
        stateName: 'Colorado',
        hours: 168,
        minAge: 18,
        examProvider: 'PSI',
        passingScore: '75%',
        licenseFee: '$150',
        ceHours: '24 hours every 3 years',
        brokerRequired: true,
        reciprocity: 'Requires out-of-state agents to pass the state-specific exam portion.'
    },
    'connecticut': {
        stateName: 'Connecticut',
        hours: 60,
        minAge: 18,
        examProvider: 'PSI',
        passingScore: '70%',
        licenseFee: '$285',
        ceHours: '12 hours every 2 years',
        brokerRequired: true,
        reciprocity: 'Reciprocal agreements with several states, allowing some agents to waive the exam.'
    },
    'delaware': {
        stateName: 'Delaware',
        hours: 99,
        minAge: 18,
        examProvider: 'Pearson VUE',
        passingScore: '70%',
        licenseFee: '$131',
        ceHours: '21 hours every 2 years',
        brokerRequired: true,
        reciprocity: 'Requires passing the state-specific exam portion and submitting proof of sales volume.'
    },
    'florida': {
        stateName: 'Florida',
        hours: 63,
        minAge: 18,
        examProvider: 'Pearson VUE',
        passingScore: '75%',
        licenseFee: '$89',
        ceHours: '14 hours every 2 years (plus 45-hour post-licensing course)',
        brokerRequired: true,
        reciprocity: 'Reciprocal agreements with AL, AR, CT, GA, IL, KY, NE, MS, RI, and WV.'
    },
    'georgia': {
        stateName: 'Georgia',
        hours: 75,
        minAge: 18,
        examProvider: 'AMP / PSI',
        passingScore: '75%',
        licenseFee: '$170',
        ceHours: '36 hours every 4 years (plus 25-hour post-licensing course)',
        brokerRequired: true,
        reciprocity: 'Full reciprocity with most states if you hold an active license in good standing.'
    },
    'hawaii': {
        stateName: 'Hawaii',
        hours: 60,
        minAge: 18,
        examProvider: 'PSI',
        passingScore: '70%',
        licenseFee: '$310',
        ceHours: '20 hours every 2 years',
        brokerRequired: true,
        reciprocity: 'Does not offer direct reciprocity. Requires pre-licensing waiver review and passing the exam.'
    },
    'idaho': {
        stateName: 'Idaho',
        hours: 90,
        minAge: 18,
        examProvider: 'Pearson VUE',
        passingScore: '70%',
        licenseFee: '$160',
        ceHours: '18 hours every 2 years',
        brokerRequired: true,
        reciprocity: 'Out-of-state agents can apply for an exam waiver but must pass the state law portion.'
    },
    'illinois': {
        stateName: 'Illinois',
        hours: 75,
        minAge: 18,
        examProvider: 'AMP / PSI',
        passingScore: '75%',
        licenseFee: '$125',
        ceHours: '12 hours every 2 years (plus 45-hour post-licensing course)',
        brokerRequired: true,
        reciprocity: 'Reciprocal agreements with CO, FL, GA, IN, IA, KY, NE, WI.'
    },
    'indiana': {
        stateName: 'Indiana',
        hours: 90,
        minAge: 18,
        examProvider: 'PSI',
        passingScore: '75%',
        licenseFee: '$60',
        ceHours: '12 hours annually',
        brokerRequired: true,
        reciprocity: 'Reciprocal licenses granted on a case-by-case basis based on education similarities.'
    },
    'iowa': {
        stateName: 'Iowa',
        hours: 60,
        minAge: 18,
        examProvider: 'PSI',
        passingScore: '70%',
        licenseFee: '$125',
        ceHours: '36 hours every 3 years',
        brokerRequired: true,
        reciprocity: 'Reciprocal agreements with AR, CO, GA, LA, MA, MN, MS, NC, ND, OK, SD, TN.'
    },
    'kansas': {
        stateName: 'Kansas',
        hours: 60,
        minAge: 18,
        examProvider: 'Pearson VUE',
        passingScore: '70%',
        licenseFee: '$125',
        ceHours: '12 hours every 2 years',
        brokerRequired: true,
        reciprocity: 'Requires out-of-state agents to pass the 4-hour Kansas state-specific exam.'
    },
    'kentucky': {
        stateName: 'Kentucky',
        hours: 96,
        minAge: 18,
        examProvider: 'PSI',
        passingScore: '75%',
        licenseFee: '$120',
        ceHours: '6 hours annually',
        brokerRequired: true,
        reciprocity: 'Reciprocal agreements with FL, GA, IL, IN, MD, OH, TN, WV.'
    },
    'louisiana': {
        stateName: 'Louisiana',
        hours: 90,
        minAge: 18,
        examProvider: 'PSI',
        passingScore: '70%',
        licenseFee: '$120',
        ceHours: '12 hours annually',
        brokerRequired: true,
        reciprocity: 'Reciprocal agreements with AR, CO, GA, IA, MS, NM, OK, PA, TX.'
    },
    'maine': {
        stateName: 'Maine',
        hours: 55,
        minAge: 18,
        examProvider: 'Pearson VUE',
        passingScore: '75%',
        licenseFee: '$100',
        ceHours: '21 hours every 2 years',
        brokerRequired: true,
        reciprocity: 'Requires passing the Maine law portion of the exam.'
    },
    'maryland': {
        stateName: 'Maryland',
        hours: 60,
        minAge: 18,
        examProvider: 'PSI',
        passingScore: '70%',
        licenseFee: '$110',
        ceHours: '15 hours every 2 years',
        brokerRequired: true,
        reciprocity: 'Reciprocity agreements with PA and OK. Other states reviewed on an individual basis.'
    },
    'massachusetts': {
        stateName: 'Massachusetts',
        hours: 40,
        minAge: 18,
        examProvider: 'PSI',
        passingScore: '70%',
        licenseFee: '$150',
        ceHours: '12 hours every 2 years',
        brokerRequired: true,
        reciprocity: 'Reciprocity agreements with CT, CO, GA, IA, MS, NE, NM, NY, OK, PA, RI, WV.'
    },
    'michigan': {
        stateName: 'Michigan',
        hours: 40,
        minAge: 18,
        examProvider: 'PSI',
        passingScore: '70%',
        licenseFee: '$88',
        ceHours: '18 hours every 3 years',
        brokerRequired: true,
        reciprocity: 'Does not offer direct reciprocity. Out-of-state agents must apply for an education waiver and pass the exam.'
    },
    'minnesota': {
        stateName: 'Minnesota',
        hours: 90,
        minAge: 18,
        examProvider: 'Pearson VUE',
        passingScore: '75%',
        licenseFee: '$130',
        ceHours: '30 hours every 2 years',
        brokerRequired: true,
        reciprocity: 'Reciprocal agreements with CO, IA, NE, ND, SD, OK, WI.'
    },
    'mississippi': {
        stateName: 'Mississippi',
        hours: 60,
        minAge: 18,
        examProvider: 'PSI',
        passingScore: '75%',
        licenseFee: '$120',
        ceHours: '16 hours every 2 years',
        brokerRequired: true,
        reciprocity: 'Reciprocity agreements with AL, AR, FL, GA, LA, MS, UT.'
    },
    'missouri': {
        stateName: 'Missouri',
        hours: 72,
        minAge: 18,
        examProvider: 'PSI',
        passingScore: '75%',
        licenseFee: '$90',
        ceHours: '12 hours every 2 years',
        brokerRequired: true,
        reciprocity: 'Full reciprocity if you hold an active license in another state and pass the Missouri state law exam.'
    },
    'new-york': {
        stateName: 'New York',
        hours: 77,
        minAge: 18,
        examProvider: 'NY Department of State',
        passingScore: '70%',
        licenseFee: '$55',
        ceHours: '22.5 hours every 2 years',
        brokerRequired: true,
        reciprocity: 'Reciprocal agreements with AR, CO, CT, GA, MA, MS, OK, PA, WV.'
    },
    'texas': {
        stateName: 'Texas',
        hours: 180,
        minAge: 18,
        examProvider: 'Pearson VUE',
        passingScore: '70%',
        licenseFee: '$150',
        ceHours: '18 hours every 2 years (plus 90-hour SAE first cycle)',
        brokerRequired: true,
        reciprocity: 'No direct reciprocity. Out-of-state agents can request an education evaluation and pass the exam.'
    }
};

function LicensingRequirementsContent() {
    const { user, userData, isPremium, premiumStatus, signOut } = useAuth()
    const router = useRouter()
    const [selectedState, setSelectedState] = useState<string>('california')

    const handleLogin = () => router.push('/#login')
    const handleSignup = () => router.push('/#signup')
    const handleLogout = async () => await signOut()
    const handleDashboard = () => router.push('/dashboard')

    const stateObj = useMemo(() => {
        return STATE_REQUIREMENTS_DATA[selectedState] || STATE_REQUIREMENTS_DATA['california']
    }, [selectedState])

    return (
        <div className="min-h-screen bg-white font-sans text-gray-800">
            <Navigation
                user={user}
                userData={userData}
                isPremium={isPremium}
                premiumStatus={premiumStatus}
                onLogin={handleLogin}
                onSignup={handleSignup}
                onLogout={handleLogout}
                onDashboard={handleDashboard}
                showGetPremiumLink
            />

            <main className="container mx-auto px-4 py-16 lg:py-24 max-w-7xl">
                {/* Hero Header */}
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 leading-[0.9]">
                        Licensing <span className="text-[#007aff]">Requirements</span>
                    </h1>
                    <p className="text-xl text-gray-600 font-medium">
                        Select your state below to inspect the mandatory pre-licensing course hours, exam providers, passing thresholds, fees, and reciprocity rules.
                    </p>
                </div>

                {/* State Selection Dropdown Bar */}
                <div className="max-w-2xl mx-auto bg-gray-50 rounded-3xl p-6 border border-gray-150 shadow-md mb-16 flex flex-col md:flex-row items-center gap-4">
                    <label htmlFor="state-select" className="font-bold text-gray-900 text-lg whitespace-nowrap">Choose Your State:</label>
                    <select
                        id="state-select"
                        value={selectedState}
                        onChange={(e) => setSelectedState(e.target.value)}
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-base md:text-lg font-bold text-gray-900 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm"
                    >
                        {Object.entries(STATE_REQUIREMENTS_DATA).map(([key, item]) => (
                            <option key={key} value={key}>{item.stateName}</option>
                        ))}
                    </select>
                </div>

                {/* Main Requirements Detail Grid */}
                <div className="grid lg:grid-cols-3 gap-8 mb-20">
                    {/* Left Column: Key Stats Cards */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-gray-100 shadow-xl space-y-8">
                            <div className="flex items-center gap-3">
                                <span className="px-4 py-1.5 bg-[#007aff]/10 text-[#007aff] rounded-full text-xs font-black uppercase tracking-wider">
                                    State Profile
                                </span>
                                <h2 className="text-3xl font-bold text-gray-900">{stateObj.stateName} Requirements</h2>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-2">
                                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Required Pre-Licensing Hours</h4>
                                    <p className="text-3xl font-black text-gray-900">{stateObj.hours} Hours</p>
                                </div>
                                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-2">
                                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Exam Passing Score</h4>
                                    <p className="text-3xl font-black text-gray-900">{stateObj.passingScore}</p>
                                </div>
                                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-2">
                                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider">State License Application Fee</h4>
                                    <p className="text-3xl font-black text-gray-900">{stateObj.licenseFee}</p>
                                </div>
                                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-2">
                                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Minimum Age Limit</h4>
                                    <p className="text-3xl font-black text-gray-900">{stateObj.minAge} Years Old</p>
                                </div>
                            </div>

                            <div className="space-y-4 pt-4 border-t border-gray-100">
                                <div>
                                    <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-1">Testing Exam Provider:</h4>
                                    <p className="text-gray-700 font-medium text-base">{stateObj.examProvider}</p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-1">Continuing Education (CE):</h4>
                                    <p className="text-gray-700 font-medium text-base">{stateObj.ceHours}</p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-1">Sponsoring Brokerage Required:</h4>
                                    <p className="text-gray-700 font-medium text-base">{stateObj.brokerRequired ? "Yes, you must align with an active sponsoring broker to activate your license." : "No, broker sponsorship is optional for license issuance."}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Reciprocity & Premium Callout */}
                    <div className="space-y-8">
                        {/* Reciprocity Card */}
                        <div className="bg-[#007aff] text-white rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -mr-24 -mt-24 blur-2xl group-hover:bg-white/20 transition-all duration-700" />
                            <div className="relative z-10 space-y-4">
                                <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-bold uppercase tracking-wider">
                                    Reciprocity details
                                </span>
                                <h3 className="text-2xl font-bold leading-tight">Can I transfer my license to other states?</h3>
                                <p className="text-blue-100 text-sm md:text-base leading-relaxed">
                                    {stateObj.reciprocity}
                                </p>
                            </div>
                        </div>

                        {/* Premium Callout Card */}
                        <div className="bg-gray-950 text-white rounded-[2.5rem] p-8 shadow-xl space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-400 text-gray-950 rounded-full text-xs font-black uppercase tracking-wider">
                                <Award className="w-3.5 h-3.5" /> exam simulator
                            </div>
                            <h3 className="text-2xl font-bold leading-tight">Ready to Pass on Your First Attempt?</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Master the exact state-specific laws and concepts required for the {stateObj.stateName} {stateObj.examProvider} licensing exam.
                            </p>
                            <Link
                                href="/real-estate-premium"
                                className="w-full py-4 bg-[#007aff] hover:bg-[#0056cc] text-white text-center font-bold rounded-xl transition-all shadow-lg active:scale-95 block"
                            >
                                Start Practice Tests
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Step-by-Step Licensing Flowchart */}
                <div className="bg-gray-50 rounded-[3rem] p-10 md:p-16 border border-gray-100 mb-20">
                    <div className="text-center mb-12 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Your Roadmap to Licensure</h2>
                        <p className="text-gray-500 font-medium">Follow these standard phases to secure your real estate credentials.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-3xl p-8 border border-gray-150 relative space-y-4">
                            <div className="w-12 h-12 bg-blue-50 text-[#007aff] rounded-2xl flex items-center justify-center font-black text-xl">1</div>
                            <h3 className="text-lg font-bold text-gray-900">Pre-Licensing Coursework</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Register with a state-approved school and complete the mandatory hours of Principles, Practice, and Contract law.
                            </p>
                        </div>
                        <div className="bg-white rounded-3xl p-8 border border-gray-150 relative space-y-4">
                            <div className="w-12 h-12 bg-blue-50 text-[#007aff] rounded-2xl flex items-center justify-center font-black text-xl">2</div>
                            <h3 className="text-lg font-bold text-gray-900">Background Checks</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Schedule digital fingerprint submissions to run state and federal clearances, proving good moral character.
                            </p>
                        </div>
                        <div className="bg-white rounded-3xl p-8 border border-gray-150 relative space-y-4">
                            <div className="w-12 h-12 bg-blue-50 text-[#007aff] rounded-2xl flex items-center justify-center font-black text-xl">3</div>
                            <h3 className="text-lg font-bold text-gray-900">Pass Exam & Sponsor</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Schedule and pass the National & State portions of the Pearson VUE or PSI exam, then affiliate with a sponsoring broker.
                            </p>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="max-w-4xl mx-auto space-y-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        <div className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm space-y-2">
                            <h4 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                                <HelpCircle className="w-5 h-5 text-[#007aff] flex-shrink-0" />
                                Can I get a license if I have a criminal record?
                            </h4>
                            <p className="text-gray-600 text-sm leading-relaxed pl-7">
                                Most state commissions evaluate criminal records on a case-by-case basis. Felonies and financial misdemeanors (fraud, embezzlement) are heavily scrutinized. You should disclose all history honestly and may need to file a Fitness Determination form before enrolling in classes.
                            </p>
                        </div>
                        <div className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm space-y-2">
                            <h4 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                                <HelpCircle className="w-5 h-5 text-[#007aff] flex-shrink-0" />
                                How long does it take to obtain a license?
                            </h4>
                            <p className="text-gray-600 text-sm leading-relaxed pl-7">
                                For most self-motivated candidates, the timeline is 2 to 5 months. Online self-paced education courses can be finished in a few weeks, while scheduling fingerprints, state processing times, and exam scheduling take another 3 to 6 weeks.
                            </p>
                        </div>
                        <div className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm space-y-2">
                            <h4 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                                <HelpCircle className="w-5 h-5 text-[#007aff] flex-shrink-0" />
                                Can I complete my education online?
                            </h4>
                            <p className="text-gray-600 text-sm leading-relaxed pl-7">
                                Yes, almost all states allow and approve pre-licensing education to be completed online via self-paced slides or live webinars, provided the school is certified by the state's regulatory body.
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default function LicensingRequirementsPage() {
    return (
        <AuthProvider>
            <LicensingRequirementsContent />
        </AuthProvider>
    )
}
