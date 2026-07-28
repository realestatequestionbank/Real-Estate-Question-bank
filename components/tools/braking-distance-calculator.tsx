'use client'

import React, { useState, useMemo } from 'react'
import { Car, AlertTriangle, Info, RotateCcw, CheckCircle2, Gauge, Snowflake, Droplets, Sun } from 'lucide-react'

// Friction coefficients for different road conditions
const ROAD_CONDITIONS = {
    dry: { label: 'Dry Asphalt', mu: 0.70, icon: Sun, color: 'text-green-600', bgColor: 'bg-green-50', borderColor: 'border-green-200' },
    wet: { label: 'Wet Asphalt', mu: 0.40, icon: Droplets, color: 'text-blue-600', bgColor: 'bg-blue-50', borderColor: 'border-blue-200' },
    snow: { label: 'Packed Snow', mu: 0.20, icon: Snowflake, color: 'text-purple-600', bgColor: 'bg-purple-50', borderColor: 'border-purple-200' },
    ice: { label: 'Ice', mu: 0.10, icon: Snowflake, color: 'text-red-600', bgColor: 'bg-red-50', borderColor: 'border-red-200' },
} as const

type RoadCondition = keyof typeof ROAD_CONDITIONS

const TIRE_CONDITIONS = {
    good: { label: 'Good (New)', modifier: 1.0 },
    average: { label: 'Average (Used)', modifier: 0.85 },
    worn: { label: 'Worn (Bald)', modifier: 0.65 },
} as const

type TireCondition = keyof typeof TIRE_CONDITIONS

const REACTION_TIME = 1.5 // seconds (average human reaction time)
const G = 32.2 // ft/s^2

export function BrakingDistanceCalculator() {
    const [speed, setSpeed] = useState<number>(35)
    const [roadCondition, setRoadCondition] = useState<RoadCondition>('dry')
    const [tireCondition, setTireCondition] = useState<TireCondition>('good')
    const [hasCalculated, setHasCalculated] = useState(false)

    const calculate = () => {
        setHasCalculated(true)
    }

    const results = useMemo(() => {
        const speedFtPerSec = speed * 1.467 // mph to ft/s
        const mu = ROAD_CONDITIONS[roadCondition].mu * TIRE_CONDITIONS[tireCondition].modifier

        const reactionDistance = speedFtPerSec * REACTION_TIME
        const brakingDistance = (speedFtPerSec * speedFtPerSec) / (2 * G * mu)
        const totalDistance = reactionDistance + brakingDistance

        // Calculate for all conditions for comparison
        const allConditions = Object.entries(ROAD_CONDITIONS).map(([key, value]) => {
            const condMu = value.mu * TIRE_CONDITIONS[tireCondition].modifier
            const condBraking = (speedFtPerSec * speedFtPerSec) / (2 * G * condMu)
            return {
                key,
                label: value.label,
                total: reactionDistance + condBraking,
                color: value.color,
                bgColor: value.bgColor,
            }
        })

        return {
            reactionDistance,
            brakingDistance,
            totalDistance,
            allConditions,
        }
    }, [speed, roadCondition, tireCondition])

    const resetForm = () => {
        setSpeed(35)
        setRoadCondition('dry')
        setTireCondition('good')
        setHasCalculated(false)
    }

    const maxDistance = Math.max(...results.allConditions.map(c => c.total))

    const ConditionIcon = ROAD_CONDITIONS[roadCondition].icon

    return (
        <div className="max-w-4xl mx-auto space-y-8">

            {/* Info Banner */}
            <div className="bg-blue-50 border border-blue-200 p-4 md:p-5 rounded-2xl">
                <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-blue-800">
                        <strong>Educational Tool:</strong> This calculator estimates stopping distance based on physics formulas. Real-world results depend on vehicle weight, brake condition, driver alertness, and ABS systems.
                    </p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                {/* Input Section */}
                <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg border border-gray-100 p-6 md:p-8 space-y-6">
                    <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-4">
                        Enter Driving Conditions
                    </h2>

                    <div className="space-y-6">
                        {/* Speed Slider */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">
                                Speed: <span className="text-[#007aff] font-bold text-lg">{speed} mph</span>
                            </label>
                            <input
                                type="range"
                                min="10"
                                max="80"
                                step="5"
                                value={speed}
                                onChange={(e) => setSpeed(Number(e.target.value))}
                                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#007aff]"
                            />
                            <div className="flex justify-between text-xs text-gray-400 mt-1">
                                <span>10 mph</span>
                                <span>80 mph</span>
                            </div>
                        </div>

                        {/* Road Condition */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Road Condition</label>
                            <div className="grid grid-cols-2 gap-3">
                                {Object.entries(ROAD_CONDITIONS).map(([key, value]) => {
                                    const Icon = value.icon
                                    const isSelected = roadCondition === key
                                    return (
                                        <button
                                            key={key}
                                            onClick={() => setRoadCondition(key as RoadCondition)}
                                            className={`flex items-center gap-2 py-3 px-4 rounded-xl border-2 transition-all font-medium text-sm ${isSelected
                                                ? `${value.bgColor} ${value.color} ${value.borderColor} shadow-md`
                                                : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100 hover:border-gray-300'
                                                }`}
                                        >
                                            <Icon className="w-4 h-4" />
                                            {value.label}
                                        </button>
                                    )
                                })}
                            </div>
                        </div>

                        {/* Tire Condition */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Tire Condition</label>
                            <div className="flex gap-3">
                                {Object.entries(TIRE_CONDITIONS).map(([key, value]) => {
                                    const isSelected = tireCondition === key
                                    return (
                                        <button
                                            key={key}
                                            onClick={() => setTireCondition(key as TireCondition)}
                                            className={`flex-1 py-3 px-3 rounded-xl border-2 transition-all font-medium text-xs ${isSelected
                                                ? 'bg-[#007aff] text-white border-[#007aff] shadow-lg'
                                                : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100 hover:border-gray-300'
                                                }`}
                                        >
                                            {value.label}
                                        </button>
                                    )
                                })}
                            </div>
                        </div>

                        <button
                            onClick={calculate}
                            className="w-full py-4 bg-[#007aff] hover:bg-[#0056cc] text-white rounded-xl font-bold shadow-lg transform transition-all active:scale-[0.98] mt-4"
                        >
                            Calculate Stopping Distance
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
                    {hasCalculated ? (
                        <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg overflow-hidden border border-gray-100">
                            <div className={`p-6 text-center ${ROAD_CONDITIONS[roadCondition].bgColor}`}>
                                <p className="text-sm uppercase tracking-wide font-semibold text-gray-500 mb-1">
                                    Total Stopping Distance
                                </p>
                                <div className={`text-5xl md:text-6xl font-black mb-2 ${ROAD_CONDITIONS[roadCondition].color}`}>
                                    {Math.round(results.totalDistance)} ft
                                </div>
                                <p className="text-gray-600 text-sm">
                                    ({(results.totalDistance / 3).toFixed(1)} car lengths)
                                </p>
                            </div>

                            <div className="p-6 space-y-5">
                                {/* Breakdown */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 bg-gray-50 rounded-xl text-center">
                                        <p className="text-xs text-gray-500 font-semibold uppercase mb-1">Reaction Distance</p>
                                        <p className="text-2xl font-bold text-gray-900">{Math.round(results.reactionDistance)} ft</p>
                                        <p className="text-xs text-gray-400">({REACTION_TIME}s reaction time)</p>
                                    </div>
                                    <div className="p-4 bg-gray-50 rounded-xl text-center">
                                        <p className="text-xs text-gray-500 font-semibold uppercase mb-1">Braking Distance</p>
                                        <p className="text-2xl font-bold text-gray-900">{Math.round(results.brakingDistance)} ft</p>
                                        <p className="text-xs text-gray-400">(after brakes applied)</p>
                                    </div>
                                </div>

                                {/* Comparison Chart */}
                                <div>
                                    <h3 className="text-sm font-bold text-gray-900 uppercase mb-3 flex items-center gap-2">
                                        <Gauge className="w-4 h-4 text-[#007aff]" /> Condition Comparison
                                    </h3>
                                    <div className="space-y-3">
                                        {results.allConditions.map((cond) => (
                                            <div key={cond.key} className="space-y-1">
                                                <div className="flex justify-between text-sm">
                                                    <span className={`font-medium ${cond.key === roadCondition ? cond.color : 'text-gray-600'}`}>
                                                        {cond.label}
                                                    </span>
                                                    <span className="font-bold text-gray-900">{Math.round(cond.total)} ft</span>
                                                </div>
                                                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                                                    <div
                                                        className={`h-full rounded-full transition-all duration-500 ${cond.key === roadCondition ? 'bg-[#007aff]' : 'bg-gray-300'
                                                            }`}
                                                        style={{ width: `${(cond.total / maxDistance) * 100}%` }}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Warning */}
                                {roadCondition === 'ice' && (
                                    <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-800 text-sm flex items-start gap-2">
                                        <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                        <span><strong>Danger:</strong> On ice, stopping distance can be 7-10x longer than on dry roads. Reduce speed significantly or avoid driving if possible.</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    ) : (
                        // Empty State
                        <div className="h-full min-h-[400px] flex flex-col items-center justify-center p-8 text-center text-gray-400 border-2 border-dashed border-gray-200 rounded-2xl md:rounded-3xl bg-gray-50/50">
                            <Car className="w-16 h-16 mb-4 opacity-30" />
                            <p className="text-lg font-medium text-gray-500">Enter your speed and road conditions to see your stopping distance.</p>
                            <p className="text-sm mt-2 max-w-xs mx-auto text-gray-400">Learn how speed and traction affect your ability to stop safely.</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Myths & Facts */}
            <div className="grid md:grid-cols-3 gap-4 md:gap-6 pt-8 border-t border-gray-200">
                <MythCard
                    myth="ABS makes your car stop faster."
                    fact="Not always. ABS prevents wheel lock-up so you can steer while braking, but it may not reduce stopping distance on all surfaces."
                />
                <MythCard
                    myth="Tailgating is fine if traffic is moving."
                    fact="False. Stopping distance increases with the SQUARE of speed. At 60 mph, you need 4x the distance as 30 mph."
                />
                <MythCard
                    myth="All-season tires work in snow."
                    fact="Marginally. Winter tires can reduce braking distance by 30-40% compared to all-season tires in cold/snowy conditions."
                />
            </div>

            <div className="text-center text-xs text-gray-400 max-w-2xl mx-auto pt-6">
                <p>This calculator uses standard physics formulas and average friction coefficients. Actual stopping distance depends on vehicle weight, brake condition, tire tread depth, road surface, and driver reaction time.</p>
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
