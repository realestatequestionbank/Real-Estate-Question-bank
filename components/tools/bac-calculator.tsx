'use client'

import React, { useState } from 'react'
import { Beer, Wine, AlertTriangle, Clock, Info, RotateCcw, ShieldAlert, CheckCircle2 } from 'lucide-react'

export function BACCalculator() {
    const [weight, setWeight] = useState<number | ''>('')
    const [gender, setGender] = useState<'male' | 'female'>('male')
    const [drinks, setDrinks] = useState<number>(1)
    const [hours, setHours] = useState<number>(1)
    const [minutes, setMinutes] = useState<number>(0)
    const [isUnder21, setIsUnder21] = useState(false)

    const [bac, setBac] = useState<number | null>(null)
    const [timeToSober, setTimeToSober] = useState<string | null>(null)

    const calculateBAC = () => {
        if (!weight || weight <= 0) return

        const r = gender === 'male' ? 0.68 : 0.55
        const totalAlcoholOz = drinks * 0.6
        const totalHours = hours + (minutes / 60)

        let estimatedBac = (totalAlcoholOz * 5.14) / (Number(weight) * r) - (0.015 * totalHours)

        if (estimatedBac < 0) estimatedBac = 0

        setBac(estimatedBac)

        if (estimatedBac > 0) {
            const hoursLeft = estimatedBac / 0.015
            const h = Math.floor(hoursLeft)
            const m = Math.round((hoursLeft - h) * 60)
            setTimeToSober(`${h}h ${m}m`)
        } else {
            setTimeToSober('0h 0m')
        }
    }

    const getBadEffects = (bacLevel: number) => {
        if (bacLevel < 0.02) return "Normal behavior, no noticeable impairment."
        if (bacLevel < 0.05) return "Relaxed feeling, slight body warmth, possible loss of shyness."
        if (bacLevel < 0.08) return "Impaired judgment, lowered alertness, release of inhibition, exaggerated behavior."
        if (bacLevel < 0.10) return "Poor muscle coordination (balance, speech, vision, reaction time), harder to detect danger, impaired memory."
        if (bacLevel < 0.15) return "Clear deterioration of reaction time and control, slurred speech, poor coordination, slowed thinking."
        return "Major loss of balance, vomiting likely, potential blackout or loss of consciousness."
    }

    const getRealEstateContext = (bacLevel: number) => {
        if (bacLevel < 0.02) return "Safe to drive regarding alcohol, but always focus on the road."
        if (bacLevel < 0.05) return "You may misjudge distances or react slightly slower to traffic changes."
        if (bacLevel < 0.08) return "You are likely to miss road signs, misjudge braking distances, and fail a Real Estate road test."
        if (bacLevel < 0.10) return "You would almost certainly fail a road test immediately. Risk of crash increases significantly."
        return "Extremely unsafe. Driving at this level is a serious criminal offense and life-threatening."
    }

    const resetForm = () => {
        setWeight('')
        setGender('male')
        setDrinks(1)
        setHours(1)
        setMinutes(0)
        setBac(null)
    }

    const isLegal = bac !== null && (isUnder21 ? bac < 0.01 : bac < 0.08)

    return (
        <div className="max-w-4xl mx-auto space-y-8">

            {/* Disclaimer Banner */}
            <div className="bg-amber-50 border border-amber-200 p-4 md:p-5 rounded-2xl">
                <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-amber-800">
                        <strong>Educational Estimate Only:</strong> This calculator provides rough estimates based on averages. Real-world BAC depends on metabolism, food intake, medication, and genetics. <strong>Never use this tool to determine if you are safe to drive.</strong>
                    </p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                {/* Input Section */}
                <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg border border-gray-100 p-6 md:p-8 space-y-6">
                    <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-4">
                        Enter Your Details
                    </h2>

                    <div className="space-y-5">
                        {/* Gender */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                            <div className="flex gap-4">
                                {['male', 'female'].map((g) => (
                                    <button
                                        key={g}
                                        onClick={() => setGender(g as 'male' | 'female')}
                                        className={`flex-1 py-3 px-4 rounded-xl border-2 capitalize transition-all font-medium ${gender === g
                                                ? 'bg-[#007aff] text-white border-[#007aff] shadow-lg'
                                                : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100 hover:border-gray-300'
                                            }`}
                                    >
                                        {g}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Weight */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Weight (lbs)
                            </label>
                            <input
                                type="number"
                                value={weight}
                                onChange={(e) => setWeight(e.target.value ? Number(e.target.value) : '')}
                                placeholder="e.g. 165"
                                className="w-full rounded-xl border-2 border-gray-200 focus:ring-[#007aff] focus:border-[#007aff] p-3 transition-all"
                            />
                        </div>

                        {/* Under 21 Toggle */}
                        <div className="flex items-center gap-3 py-2">
                            <input
                                type="checkbox"
                                id="under21"
                                checked={isUnder21}
                                onChange={(e) => setIsUnder21(e.target.checked)}
                                className="w-5 h-5 text-[#007aff] rounded focus:ring-[#007aff] border-gray-300"
                            />
                            <label htmlFor="under21" className="text-gray-700 font-medium cursor-pointer">
                                I am under 21 years old
                            </label>
                        </div>

                        <hr className="border-gray-100" />

                        {/* Number of Drinks */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Number of Drinks
                            </label>
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => setDrinks(Math.max(1, drinks - 1))}
                                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors font-bold"
                                >
                                    -
                                </button>
                                <span className="text-xl font-bold w-8 text-center text-gray-900">{drinks}</span>
                                <button
                                    onClick={() => setDrinks(drinks + 1)}
                                    className="w-10 h-10 rounded-full bg-[#007aff]/10 flex items-center justify-center text-[#007aff] hover:bg-[#007aff]/20 transition-colors font-bold"
                                >
                                    +
                                </button>
                            </div>
                            <p className="text-xs text-gray-500 mt-2">1 drink = 12oz beer, 5oz wine, or 1.5oz shot</p>
                        </div>

                        {/* Time Passed */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Time Since First Drink
                            </label>
                            <div className="flex items-center gap-4">
                                {/* Hours */}
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => setHours(Math.max(0, hours - 1))}
                                        className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors font-bold text-sm"
                                    >
                                        -
                                    </button>
                                    <div className="text-center">
                                        <span className="text-xl font-bold text-gray-900">{hours}</span>
                                        <span className="text-sm text-gray-500 ml-1">hr</span>
                                    </div>
                                    <button
                                        onClick={() => setHours(hours + 1)}
                                        className="w-9 h-9 rounded-full bg-[#007aff]/10 flex items-center justify-center text-[#007aff] hover:bg-[#007aff]/20 transition-colors font-bold text-sm"
                                    >
                                        +
                                    </button>
                                </div>

                                <span className="text-gray-400 font-medium">:</span>

                                {/* Minutes */}
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => {
                                            if (minutes === 0) {
                                                if (hours > 0) {
                                                    setHours(hours - 1)
                                                    setMinutes(45)
                                                }
                                            } else {
                                                setMinutes(minutes - 15)
                                            }
                                        }}
                                        className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors font-bold text-sm"
                                    >
                                        -
                                    </button>
                                    <div className="text-center">
                                        <span className="text-xl font-bold text-gray-900">{minutes.toString().padStart(2, '0')}</span>
                                        <span className="text-sm text-gray-500 ml-1">min</span>
                                    </div>
                                    <button
                                        onClick={() => {
                                            if (minutes >= 45) {
                                                setHours(hours + 1)
                                                setMinutes(0)
                                            } else {
                                                setMinutes(minutes + 15)
                                            }
                                        }}
                                        className="w-9 h-9 rounded-full bg-[#007aff]/10 flex items-center justify-center text-[#007aff] hover:bg-[#007aff]/20 transition-colors font-bold text-sm"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <p className="text-xs text-gray-500 mt-2">Adjust in 15-minute increments</p>
                        </div>

                        <button
                            onClick={calculateBAC}
                            className="w-full py-4 bg-[#007aff] hover:bg-[#0056cc] text-white rounded-xl font-bold shadow-lg transform transition-all active:scale-[0.98] mt-4"
                        >
                            Calculate Estimate
                        </button>

                        <button
                            onClick={resetForm}
                            className="w-full flex items-center justify-center gap-2 text-gray-500 hover:text-gray-700 text-sm transition-colors"
                        >
                            <RotateCcw className="w-4 h-4" /> Reset Calculator
                        </button>
                    </div>
                </div>

                {/* Results Section */}
                <div className="space-y-6">
                    {bac !== null ? (
                        <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg overflow-hidden border border-gray-100">
                            <div className={`p-6 text-center ${isLegal ? 'bg-emerald-50' : 'bg-red-50'}`}>
                                <p className="text-sm uppercase tracking-wide font-semibold text-gray-500 mb-1">
                                    Estimated BAC
                                </p>
                                <div className={`text-5xl md:text-6xl font-black mb-3 ${isLegal ? 'text-emerald-600' : 'text-red-600'}`}>
                                    {bac.toFixed(3)}%
                                </div>

                                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm ${isLegal
                                        ? 'bg-emerald-100 text-emerald-800'
                                        : 'bg-red-100 text-red-800'
                                    }`}>
                                    {isLegal ? <CheckCircle2 className="w-4 h-4" /> : <ShieldAlert className="w-4 h-4" />}
                                    {isLegal ? 'LIKELY LEGAL TO DRIVE' : 'ILLEGAL TO DRIVE'}
                                </div>

                                {isUnder21 && bac > 0.01 && (
                                    <p className="text-red-600 text-xs font-bold mt-3">
                                        * ZERO TOLERANCE: Any detectable alcohol is illegal for drivers under 21.
                                    </p>
                                )}
                            </div>

                            <div className="p-6 space-y-5">
                                {/* Sober Time */}
                                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                                    <div className="flex items-center gap-3">
                                        <Clock className="w-6 h-6 text-[#007aff]" />
                                        <div>
                                            <p className="text-xs text-gray-500 font-semibold uppercase">Time to Sober (0.00%)</p>
                                            <p className="text-gray-900 font-medium text-sm">Coffee & showers won't speed this up.</p>
                                        </div>
                                    </div>
                                    <div className="text-xl font-bold text-[#007aff]">
                                        {timeToSober}
                                    </div>
                                </div>

                                {/* Reality Check */}
                                <div>
                                    <h3 className="text-sm font-bold text-gray-900 uppercase mb-3 flex items-center gap-2">
                                        <Info className="w-4 h-4 text-[#007aff]" /> Reality Check
                                    </h3>
                                    <div className="p-4 bg-[#007aff]/5 border border-[#007aff]/20 rounded-xl text-gray-800 text-sm">
                                        {getBadEffects(bac)}
                                    </div>
                                </div>

                                {/* Real Estate Context */}
                                <div>
                                    <h3 className="text-sm font-bold text-gray-900 uppercase mb-3 flex items-center gap-2">
                                        <AlertTriangle className="w-4 h-4 text-amber-600" /> Driving Risks
                                    </h3>
                                    <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 text-sm">
                                        {getRealEstateContext(bac)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        // Empty State
                        <div className="h-full min-h-[400px] flex flex-col items-center justify-center p-8 text-center text-gray-400 border-2 border-dashed border-gray-200 rounded-2xl md:rounded-3xl bg-gray-50/50">
                            <Beer className="w-16 h-16 mb-4 opacity-30" />
                            <p className="text-lg font-medium text-gray-500">Enter your details to see your estimated BAC and impairment level.</p>
                            <p className="text-sm mt-2 max-w-xs mx-auto text-gray-400">Learn how alcohol affects your driving ability before you get behind the wheel.</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Myths & Facts */}
            <div className="grid md:grid-cols-3 gap-4 md:gap-6 pt-8 border-t border-gray-200">
                <MythCard
                    myth="Coffee helps you sober up."
                    fact="False. Only time lowers your BAC. Coffee might make you feel awake, but you are still impaired."
                />
                <MythCard
                    myth="I can drive if I feel okay."
                    fact="False. Impairment starts long before you 'feel' drunk. Your reaction time slows down at just 0.02% BAC."
                />
                <MythCard
                    myth="Eating absorbs alcohol."
                    fact="False. Food only slows absorption; it doesn't stop it. The alcohol still enters your bloodstream."
                />
            </div>

            <div className="text-center text-xs text-gray-400 max-w-2xl mx-auto pt-6">
                <p>This calculator relies on the Widmark Formula using average metabolic rates. It does not account for individual tolerance, recent food consumption in detail, or medication interactions. The results are rough estimates for educational safety purposes only.</p>
            </div>
        </div>
    )
}

function MythCard({ myth, fact }: { myth: string, fact: string }) {
    return (
        <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-2 mb-2">
                <p className="text-red-500 font-bold text-xs uppercase tracking-wider">Myth</p>
            </div>
            <p className="font-semibold text-gray-900 mb-3">"{myth}"</p>
            <div className="flex items-start gap-2 text-sm text-gray-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <p>{fact}</p>
            </div>
        </div>
    )
}
