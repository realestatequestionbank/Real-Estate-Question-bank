'use client'

import { useState, useEffect, useRef } from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { useAuth } from '@/contexts/auth-context'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    PieChart, Pie, Cell, LineChart, Line, Area, AreaChart, Legend
} from 'recharts'
import {
    ChevronRight, TrendingUp, TrendingDown, Car, Users, AlertTriangle,
    Smartphone, Clock, MapPin, DollarSign, Shield, Activity, BarChart3,
    PieChartIcon, Zap, Target, Award, Coffee
} from 'lucide-react'

// Animated counter hook
function useAnimatedCounter(end: number, duration: number = 2000, startOnView: boolean = true) {
    const [count, setCount] = useState(0)
    const [hasStarted, setHasStarted] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!startOnView) {
            setHasStarted(true)
        }
    }, [startOnView])

    useEffect(() => {
        if (startOnView && ref.current) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting && !hasStarted) {
                        setHasStarted(true)
                    }
                },
                { threshold: 0.1 }
            )
            observer.observe(ref.current)
            return () => observer.disconnect()
        }
    }, [startOnView, hasStarted])

    useEffect(() => {
        if (!hasStarted) return

        let startTime: number
        let animationFrame: number

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / duration, 1)
            const easeOut = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(easeOut * end))

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate)
            }
        }

        animationFrame = requestAnimationFrame(animate)
        return () => cancelAnimationFrame(animationFrame)
    }, [hasStarted, end, duration])

    return { count, ref }
}

// ============================================
// REAL DATA FROM NHTSA, IIHS, CDC (2024-2025)
// ============================================

// Average fines by violation type (national averages, 2024-2025)
// Sources: Visual Capitalist, state Real Estate data
const finesData = [
    { violation: 'Speeding', fine: 130, color: '#ef4444' },
    { violation: 'Red Light', fine: 490, color: '#f97316' },
    { violation: 'DUI (1st)', fine: 1000, color: '#dc2626' },
    { violation: 'No Seatbelt', fine: 25, color: '#eab308' },
    { violation: 'Phone Use', fine: 150, color: '#8b5cf6' },
    { violation: 'School Zone', fine: 500, color: '#06b6d4' },
]

// Fatal crash causes breakdown (NHTSA 2023-2024 data)
// Drunk driving: 30%, Speeding: 29%, Distracted: 8-14%
const accidentCausesData = [
    { name: 'Drunk Driving', value: 30, color: '#ef4444' },
    { name: 'Speeding', value: 29, color: '#f97316' },
    { name: 'Distracted Driving', value: 14, color: '#eab308' },
    { name: 'Weather/Road', value: 11, color: '#3b82f6' },
    { name: 'Reckless Driving', value: 9, color: '#22c55e' },
    { name: 'Other', value: 7, color: '#8b5cf6' },
]

// Traffic fatality trends (NHTSA official data)
// 2024: 39,345 estimated (NHTSA April 2025 report)
// 2025 H1: 17,140 (down 8.2% from H1 2024)
const yearlyTrendsData = [
    { year: '2019', fatalities: 36096 },
    { year: '2020', fatalities: 38824 },
    { year: '2021', fatalities: 42939 },
    { year: '2022', fatalities: 42795 },
    { year: '2023', fatalities: 40901 },
    { year: '2024', fatalities: 39345 },
]

// Fatal crash rates by age group (per 100 million travel miles)
// Source: NHTSA/IIHS 2023-2024 data
const ageGroupData = [
    { age: '16-19', rate: 4.8, color: '#ef4444' },
    { age: '20-24', rate: 3.3, color: '#f97316' },
    { age: '25-29', rate: 2.3, color: '#eab308' },
    { age: '30-59', rate: 1.4, color: '#22c55e' },
    { age: '60-69', rate: 1.3, color: '#3b82f6' },
    { age: '70-79', rate: 1.8, color: '#8b5cf6' },
    { age: '80+', rate: 5.4, color: '#ec4899' },
]

// State fatalities (IIHS 2023 data - most recent complete year)
const stateComparisonData = [
    { state: 'Texas', fatalities: 4283 },
    { state: 'California', fatalities: 4407 },
    { state: 'Florida', fatalities: 3522 },
    { state: 'Georgia', fatalities: 1797 },
    { state: 'North Carolina', fatalities: 1755 },
    { state: 'Ohio', fatalities: 1354 },
    { state: 'Pennsylvania', fatalities: 1269 },
    { state: 'Tennessee', fatalities: 1252 },
]

// Accidents by time of day (percentage distribution)
// Peak: 3-6pm rush hour, highest fatality rate: midnight-3am
const timeOfDayData = [
    { time: '12am-3am', accidents: 13 },
    { time: '3am-6am', accidents: 8 },
    { time: '6am-9am', accidents: 14 },
    { time: '9am-12pm', accidents: 10 },
    { time: '12pm-3pm', accidents: 15 },
    { time: '3pm-6pm', accidents: 22 },
    { time: '6pm-9pm', accidents: 12 },
    { time: '9pm-12am', accidents: 7 },
]

// Stat Card Component
function StatCard({ icon: Icon, label, value, suffix = '', trend, trendLabel, color, delay = 0 }: {
    icon: React.ElementType
    label: string
    value: number
    suffix?: string
    trend?: 'up' | 'down'
    trendLabel?: string
    color: string
    delay?: number
}) {
    const { count, ref } = useAnimatedCounter(value)

    return (
        <div
            ref={ref}
            className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-500"
            style={{ animationDelay: `${delay}ms` }}
        >
            <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20 -mr-16 -mt-16 transition-all duration-500 group-hover:opacity-30`} style={{ backgroundColor: color }} />
            <div className="relative">
                <div className={`inline-flex p-3 rounded-xl mb-4`} style={{ backgroundColor: `${color}15` }}>
                    <Icon className="w-6 h-6" style={{ color }} />
                </div>
                <p className="text-sm font-medium text-gray-500 mb-1">{label}</p>
                <p className="text-3xl font-black text-gray-900">
                    {count.toLocaleString()}{suffix}
                </p>
                {trend && trendLabel && (
                    <div className={`flex items-center gap-1 mt-2 text-sm font-medium ${trend === 'down' ? 'text-green-600' : 'text-red-600'}`}>
                        {trend === 'down' ? <TrendingDown className="w-4 h-4" /> : <TrendingUp className="w-4 h-4" />}
                        {trendLabel}
                    </div>
                )}
            </div>
        </div>
    )
}

// Chart Card Component
function ChartCard({ title, subtitle, icon: Icon, children, className = '' }: {
    title: string
    subtitle?: string
    icon: React.ElementType
    children: React.ReactNode
    className?: string
}) {
    return (
        <div className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 ${className}`}>
            <div className="flex items-start justify-between mb-6">
                <div>
                    <h3 className="text-xl font-bold text-gray-900">{title}</h3>
                    {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
                </div>
                <div className="p-2 bg-gray-100 rounded-lg">
                    <Icon className="w-5 h-5 text-gray-600" />
                </div>
            </div>
            {children}
        </div>
    )
}

// Custom tooltip component
function CustomTooltip({ active, payload, label }: any) {
    if (active && payload && payload.length) {
        return (
            <div className="bg-gray-900 text-white px-4 py-2 rounded-lg shadow-xl text-sm">
                <p className="font-semibold">{label}</p>
                {payload.map((entry: any, index: number) => (
                    <p key={index} className="text-gray-300">
                        {entry.name}: {typeof entry.value === 'number' ? entry.value.toLocaleString() : entry.value}
                    </p>
                ))}
            </div>
        )
    }
    return null
}

export function DrivingStatsPageContent() {
    const { user, userData, isPremium, signOut } = useAuth()
    const router = useRouter()
    const [activeIndex, setActiveIndex] = useState<number | null>(null)

    const handleLogin = () => router.push('/#login')
    const handleSignup = () => router.push('/#signup')
    const handleLogout = async () => await signOut()
    const handleDashboard = () => router.push('/dashboard')

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <Navigation
                user={user}
                userData={userData}
                isPremium={isPremium}
                onLogin={handleLogin}
                onSignup={handleSignup}
                onLogout={handleLogout}
                onDashboard={handleDashboard}
            />

            <main>
                {/* Breadcrumbs */}
                <div className="bg-white border-b border-gray-100">
                    <div className="container mx-auto px-4 py-3">
                        <nav className="flex items-center gap-2 text-sm text-gray-500">
                            <Link href="/" className="hover:text-[#007aff] transition-colors">Home</Link>
                            <ChevronRight className="w-4 h-4" />
                            <Link href="/blog" className="hover:text-[#007aff] transition-colors">Resources</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span className="text-gray-900 font-medium">Driving Statistics</span>
                        </nav>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="relative pt-16 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
                    <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5"></div>
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>

                    {/* Animated particles */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        {[...Array(20)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 3}s`,
                                    animationDuration: `${2 + Math.random() * 3}s`
                                }}
                            />
                        ))}
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6 md:mb-8 animate-fade-in">
                                <Activity className="w-4 h-4 text-cyan-400" />
                                <span className="text-sm font-medium text-blue-100">Live Data Dashboard</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 tracking-tight leading-tight">
                                US Driving
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                                    Statistics 2025
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto leading-relaxed px-4">
                                Real data from NHTSA, IIHS, and CDC. Interactive visualizations of traffic fatalities, violations, and driving trends.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Key Stats Grid */}
                <section className="py-12 md:py-16 -mt-12 relative z-20">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
                            <StatCard
                                icon={Car}
                                label="Licensed Drivers"
                                value={242}
                                suffix="M"
                                color="#3b82f6"
                                delay={0}
                            />
                            <StatCard
                                icon={AlertTriangle}
                                label="2024 Fatalities"
                                value={39345}
                                trend="down"
                                trendLabel="3.8% from 2023"
                                color="#ef4444"
                                delay={100}
                            />
                            <StatCard
                                icon={DollarSign}
                                label="Avg. Speeding Ticket"
                                value={130}
                                suffix=""
                                color="#22c55e"
                                delay={200}
                            />
                            <StatCard
                                icon={Smartphone}
                                label="Drunk Driving Deaths"
                                value={30}
                                suffix="%"
                                trend="down"
                                trendLabel="7.6% decline"
                                color="#8b5cf6"
                                delay={300}
                            />
                        </div>
                    </div>
                </section>

                {/* Charts Section */}
                <section className="py-12 md:py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto space-y-8">

                            {/* Row 1: Pie Chart + Bar Chart */}
                            <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
                                {/* Accident Causes Pie Chart */}
                                <ChartCard
                                    title="Accident Causes"
                                    subtitle="Percentage of fatal crashes by cause"
                                    icon={PieChartIcon}
                                >
                                    <div className="h-80">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <PieChart>
                                                <Pie
                                                    data={accidentCausesData}
                                                    cx="50%"
                                                    cy="50%"
                                                    innerRadius={60}
                                                    outerRadius={100}
                                                    paddingAngle={3}
                                                    dataKey="value"
                                                    onMouseEnter={(_, index) => setActiveIndex(index)}
                                                    onMouseLeave={() => setActiveIndex(null)}
                                                >
                                                    {accidentCausesData.map((entry, index) => (
                                                        <Cell
                                                            key={`cell-${index}`}
                                                            fill={entry.color}
                                                            stroke="white"
                                                            strokeWidth={2}
                                                            style={{
                                                                transform: activeIndex === index ? 'scale(1.05)' : 'scale(1)',
                                                                transformOrigin: 'center',
                                                                transition: 'transform 0.3s ease'
                                                            }}
                                                        />
                                                    ))}
                                                </Pie>
                                                <Tooltip content={<CustomTooltip />} />
                                            </PieChart>
                                        </ResponsiveContainer>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 mt-4">
                                        {accidentCausesData.map((item) => (
                                            <div key={item.name} className="flex items-center gap-2 text-sm">
                                                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                                                <span className="text-gray-600">{item.name}</span>
                                                <span className="font-bold text-gray-900 ml-auto">{item.value}%</span>
                                            </div>
                                        ))}
                                    </div>
                                </ChartCard>

                                {/* Traffic Fines Bar Chart */}
                                <ChartCard
                                    title="Average Traffic Fines"
                                    subtitle="Typical fine amounts by violation type"
                                    icon={DollarSign}
                                >
                                    <div className="h-80">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <BarChart data={finesData} layout="vertical" margin={{ left: 20 }}>
                                                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                                <XAxis type="number" tickFormatter={(v) => `$${v}`} />
                                                <YAxis type="category" dataKey="violation" width={80} tick={{ fontSize: 12 }} />
                                                <Tooltip content={<CustomTooltip />} formatter={(value) => `$${value}`} />
                                                <Bar
                                                    dataKey="fine"
                                                    radius={[0, 8, 8, 0]}
                                                    animationDuration={1500}
                                                >
                                                    {finesData.map((entry, index) => (
                                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                                    ))}
                                                </Bar>
                                            </BarChart>
                                        </ResponsiveContainer>
                                    </div>
                                </ChartCard>
                            </div>

                            {/* Row 2: Full Width Line Chart */}
                            <ChartCard
                                title="Traffic Fatality Trends"
                                subtitle="Annual traffic deaths in the United States (2019-2024)"
                                icon={TrendingDown}
                                className="lg:col-span-2"
                            >
                                <div className="h-80">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <AreaChart data={yearlyTrendsData}>
                                            <defs>
                                                <linearGradient id="colorFatalities" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                                                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                            <XAxis dataKey="year" />
                                            <YAxis tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`} />
                                            <Tooltip content={<CustomTooltip />} />
                                            <Area
                                                type="monotone"
                                                dataKey="fatalities"
                                                stroke="#ef4444"
                                                strokeWidth={3}
                                                fill="url(#colorFatalities)"
                                                animationDuration={2000}
                                            />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </div>
                                <div className="flex items-center justify-center gap-8 mt-4 pt-4 border-t border-gray-100">
                                    <div className="text-center">
                                        <p className="text-sm text-gray-500">Peak Year</p>
                                        <p className="text-xl font-bold text-red-600">2021</p>
                                        <p className="text-xs text-gray-400">42,939 deaths</p>
                                    </div>
                                    <div className="w-px h-12 bg-gray-200" />
                                    <div className="text-center">
                                        <p className="text-sm text-gray-500">2024 (NHTSA)</p>
                                        <p className="text-xl font-bold text-green-600">39,345</p>
                                        <p className="text-xs text-gray-400">-8.4% from peak</p>
                                    </div>
                                </div>
                            </ChartCard>

                            {/* Row 3: Age Group + Time of Day */}
                            <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
                                {/* Age Group Risk */}
                                <ChartCard
                                    title="Fatal Crash Rate by Age"
                                    subtitle="Fatal crashes per 100 million miles driven"
                                    icon={Users}
                                >
                                    <div className="h-72">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <BarChart data={ageGroupData}>
                                                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                                <XAxis dataKey="age" tick={{ fontSize: 11 }} />
                                                <YAxis />
                                                <Tooltip content={<CustomTooltip />} />
                                                <Bar dataKey="rate" radius={[8, 8, 0, 0]} animationDuration={1500}>
                                                    {ageGroupData.map((entry, index) => (
                                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                                    ))}
                                                </Bar>
                                            </BarChart>
                                        </ResponsiveContainer>
                                    </div>
                                    <div className="mt-4 p-4 bg-red-50 rounded-xl border border-red-100">
                                        <p className="text-sm text-red-800">
                                            <strong>Teens (16-19)</strong> and <strong>seniors (80+)</strong> have the highest fatal crash rates at 4.8 and 5.4 per 100M miles respectively.
                                        </p>
                                    </div>
                                </ChartCard>

                                {/* Time of Day */}
                                <ChartCard
                                    title="Accidents by Time of Day"
                                    subtitle="Percentage of crashes occurring in each time window"
                                    icon={Clock}
                                >
                                    <div className="h-72">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <AreaChart data={timeOfDayData}>
                                                <defs>
                                                    <linearGradient id="colorTime" x1="0" y1="0" x2="0" y2="1">
                                                        <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.4} />
                                                        <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                                                    </linearGradient>
                                                </defs>
                                                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                                <XAxis dataKey="time" tick={{ fontSize: 10 }} />
                                                <YAxis tickFormatter={(v) => `${v}%`} />
                                                <Tooltip content={<CustomTooltip />} formatter={(v) => `${v}%`} />
                                                <Area
                                                    type="monotone"
                                                    dataKey="accidents"
                                                    stroke="#8b5cf6"
                                                    strokeWidth={3}
                                                    fill="url(#colorTime)"
                                                    animationDuration={2000}
                                                />
                                            </AreaChart>
                                        </ResponsiveContainer>
                                    </div>
                                    <div className="mt-4 p-4 bg-purple-50 rounded-xl border border-purple-100">
                                        <p className="text-sm text-purple-800">
                                            <strong>Rush hour (3pm-6pm)</strong> sees the most accidents at 22% of daily crashes - coinciding with school dismissal and evening commutes.
                                        </p>
                                    </div>
                                </ChartCard>
                            </div>

                            {/* Row 4: State Comparison */}
                            <ChartCard
                                title="States with Most Traffic Fatalities"
                                subtitle="Annual traffic deaths by state (2023 data)"
                                icon={MapPin}
                            >
                                <div className="h-80">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart data={stateComparisonData} layout="vertical" margin={{ left: 20 }}>
                                            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                            <XAxis type="number" />
                                            <YAxis type="category" dataKey="state" width={100} tick={{ fontSize: 12 }} />
                                            <Tooltip content={<CustomTooltip />} />
                                            <Bar
                                                dataKey="fatalities"
                                                fill="#3b82f6"
                                                radius={[0, 8, 8, 0]}
                                                animationDuration={1500}
                                            />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                                <p className="text-xs text-gray-500 mt-4 text-center">
                                    Note: Higher populations generally correlate with more fatalities. Per-capita rates tell a different story.
                                </p>
                            </ChartCard>
                        </div>
                    </div>
                </section>

                {/* Fun Facts Section */}
                <section className="py-16 md:py-20 bg-gradient-to-br from-gray-900 to-slate-800 text-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 text-cyan-400 font-bold mb-3">
                                <Zap className="w-5 h-5" />
                                <span className="uppercase tracking-wider text-sm">Quick Facts</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black">Did You Know?</h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {[
                                { icon: Coffee, title: "2025 H1 Fatalities", stat: "17,140", desc: "down 8.2% from first half of 2024 - largest drop since 2008" },
                                { icon: Target, title: "Seatbelt Use", stat: "91.6%", desc: "of Americans now use seatbelts (up from 58% in 1994)" },
                                { icon: Award, title: "DUI Arrests", stat: "804,926", desc: "people arrested for DUI in 2024 (11% of all arrests)" },
                                { icon: Car, title: "Total Vehicles", stat: "299M", desc: "registered vehicles on US roads in 2025" },
                                { icon: Shield, title: "Fatality Rate", stat: "1.06", desc: "deaths per 100M miles in H1 2025 - lowest since 2014" },
                                { icon: TrendingDown, title: "14 Quarters", stat: "Decline", desc: "consecutive quarterly drops in traffic fatalities since Q2 2022" },
                            ].map((fact, index) => (
                                <div
                                    key={index}
                                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
                                >
                                    <fact.icon className="w-8 h-8 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                                    <p className="text-sm text-gray-400 font-medium mb-1">{fact.title}</p>
                                    <p className="text-3xl font-black text-white mb-2">{fact.stat}</p>
                                    <p className="text-sm text-gray-300">{fact.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Sources Section */}
                <section className="py-12 bg-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center space-y-3">
                            <p className="text-sm text-gray-600 font-medium">Data Sources</p>
                            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
                                <a href="https://www.nhtsa.gov/press-releases/nhtsa-estimates-39345-traffic-fatalities-2024" target="_blank" rel="noopener noreferrer" className="text-[#007aff] hover:underline">NHTSA 2024 Report</a>
                                <a href="https://www.nhtsa.gov/press-releases/nhtsa-reports-sharp-drop-traffic-fatalities-first-half-2025" target="_blank" rel="noopener noreferrer" className="text-[#007aff] hover:underline">NHTSA 2025 H1 Data</a>
                                <a href="https://www.iihs.org/topics/fatality-statistics" target="_blank" rel="noopener noreferrer" className="text-[#007aff] hover:underline">IIHS Fatality Facts</a>
                                <a href="https://www.nhtsa.gov/risky-driving/drunk-driving" target="_blank" rel="noopener noreferrer" className="text-[#007aff] hover:underline">NHTSA Drunk Driving</a>
                            </div>
                            <p className="text-xs text-gray-400 mt-4">
                                Last updated: January 2025. Statistics reflect most recent official government data.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 md:py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-4">
                                Be Part of the Solution
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                                Safe driving starts with proper education. Ace your real estate exam and become a responsible driver.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/#states"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-[#007aff] hover:bg-[#0056cc] text-white text-lg font-bold rounded-xl transition-all shadow-lg hover:shadow-blue-500/25"
                                >
                                    Start Practice Test
                                </Link>
                                <Link
                                    href="/fines-and-limits"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-gray-100 hover:bg-gray-200 text-gray-900 text-lg font-semibold rounded-xl transition-all"
                                >
                                    Learn Fines & Limits
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
