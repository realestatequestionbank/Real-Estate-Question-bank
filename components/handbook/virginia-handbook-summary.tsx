"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/auth-context';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { AuthModal } from '@/components/auth/auth-modal';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Image from 'next/image';
import {
    ChevronRight,
    CheckCircle2,
    AlertTriangle,
    ArrowRight,
    Sparkles,
} from 'lucide-react';

const SECTIONS = [
    { id: 'section-1', label: '1. Testing' },
    { id: 'section-2', label: '2. Signals, Signs & Markings' },
    { id: 'section-3', label: '3. Safe Driving' },
    { id: 'section-4', label: '4. Seat Belts & Child Safety' },
    { id: 'section-5', label: '5. Penalties & Alcohol' },
    { id: 'section-6', label: '6. License Types' },
    { id: 'section-7', label: '7. Other Information' },
    { id: 'section-8', label: '8. Sample Exam' }
];

export function VirginiaHandbookSummary() {
    const [authModalOpen, setAuthModalOpen] = useState(false);
    const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
    const [isPremiumLogin, setIsPremiumLogin] = useState(false);
    const router = useRouter();
    const { user, userData, isPremium, premiumStatus, signOut } = useAuth();

    const handleLogin = () => { setAuthMode('login'); setIsPremiumLogin(true); setAuthModalOpen(true); };
    const handleSignup = () => { router.push('/get-premium?plan=36500'); };
    const handleLogout = async () => { await signOut(); };
    const handleDashboard = () => { isPremium ? router.push('/dashboard') : router.push('/get-premium?plan=36500'); };
    const scrollToPremium = () => { router.push('/real-estate-premium'); };

    const currentYear = new Date().getFullYear();

    const breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: 'States', href: '/#states' },
        { label: 'Virginia', href: '/virginia-real-estate-practice-test' },
        { label: 'Real Estate Handbook Summary', href: null },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Navigation
                user={user}
                userData={userData}
                isPremium={isPremium}
                premiumStatus={premiumStatus}
                onLogin={handleLogin}
                onSignup={handleSignup}
                onLogout={handleLogout}
                onDashboard={handleDashboard}
                premiumButtonText="Get Premium"
                premiumButtonAction={scrollToPremium}
            />

            {/* Breadcrumbs */}
            <div className="bg-white border-b border-gray-100 py-3">
                <div className="container mx-auto px-4">
                    <div className="flex items-center text-sm text-gray-600">
                        {breadcrumbs.map((crumb, index) => (
                            <div key={index} className="flex items-center">
                                {crumb.href ? (
                                    <Link href={crumb.href} className="hover:text-[#007aff] transition-colors">
                                        {crumb.label}
                                    </Link>
                                ) : (
                                    <span className="text-gray-900 font-medium">{crumb.label}</span>
                                )}
                                {index < breadcrumbs.length - 1 && (
                                    <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative pt-8 pb-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-50/40 via-white to-gray-50"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row items-start gap-8 md:gap-6">
                        {/* Left: Text Content */}
                        <div className="w-full md:w-auto max-w-3xl text-left pt-2 md:pt-6">
                            <Link
                                href="/virginia-real-estate-practice-test"
                                className="inline-flex items-center gap-1 text-sm text-[#007aff] hover:text-[#0056cc] transition-colors mb-3"
                            >
                                <ChevronRight className="w-3.5 h-3.5 rotate-180" />
                                Back to Practice Tests
                            </Link>

                            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                Summary of the Virginia Driver Handbook {currentYear}
                            </h1>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-3">
                                A comprehensive, exam-focused summary of the{' '}
                                <Link
                                    href="/handbooks/virginia"
                                    className="text-[#007aff] font-medium relative inline-block group"
                                >
                                    official {currentYear} Virginia Driver&apos;s Handbook
                                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#007aff] transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                                . We break down all 8 key sections — from testing requirements and road signs to safe driving rules, seat belt laws, and penalties. Each section highlights the key facts and numbers the Virginia Real Estate actually tests you on.
                            </p>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                Don&apos;t want to read the summary either?{' '}
                                <Link
                                    href="/virginia-real-estate-practice-test"
                                    className="text-[#007aff] font-medium relative inline-block group"
                                >
                                    Jump straight to practice tests
                                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#007aff] transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                                {' '}and learn by doing.
                            </p>
                        </div>

                        {/* Right: Handbook Image */}
                        <div className="w-full flex justify-center md:w-auto md:ml-12 lg:ml-20 md:mr-auto mt-2 md:mt-4 pt-2">
                            <div className="relative">
                                <Image
                                    src="/handbook-summary/virginia/virginia-handbook-image.png?v=1"
                                    alt="Virginia Real Estate Driver's Manual 2026"
                                    width={200}
                                    height={260}
                                    className="rounded-lg border-2 border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.12),0_2px_8px_rgb(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.15),0_4px_12px_rgb(0,0,0,0.1)] transition-shadow duration-300"
                                    style={{
                                        transform: 'perspective(1000px) rotateY(-5deg)',
                                    }}
                                    priority
                                />
                                <div className="absolute -left-1 top-2 bottom-2 w-1 bg-gradient-to-r from-gray-400/40 to-transparent rounded-l-sm" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Navigation */}
            <section className="py-12 bg-gradient-to-b from-gray-50 to-white border-y border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="mb-8">
                        <h2 className="text-base font-semibold text-gray-900 mb-2">Quick Navigation</h2>
                        <p className="text-gray-600 text-sm">Jump to any section of the handbook summary</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                        {SECTIONS.map((sec) => (
                            <a
                                key={sec.id}
                                href={`#${sec.id}`}
                                className="group relative text-sm font-medium text-gray-700 hover:text-[#007aff] bg-white hover:bg-[#007aff]/5 px-4 py-2.5 rounded-xl border border-gray-200 hover:border-[#007aff] hover:shadow-md transition-all duration-300 text-left flex items-center justify-start min-h-[50px]"
                            >
                                <span className="relative z-10">{sec.label}</span>
                                <div className="absolute inset-0 bg-gradient-to-br from-[#007aff]/0 to-[#007aff]/0 group-hover:from-[#007aff]/5 group-hover:to-[#007aff]/10 rounded-xl transition-all duration-300"></div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <main className="py-10 md:py-14">
                <div className="container mx-auto px-4">
                    <div className="space-y-10 md:space-y-12">                        {/* ===== Section 1: Testing ===== */}
                        <SectionCard id="section-1" number={1} title="Testing">
                            <SubHeading>Knowledge Exam</SubHeading>
                            <BulletList items={[
                                <><strong>Two-Part Exam:</strong> Part one is 10 traffic sign questions (must get 100%). Part two is general knowledge (must score 80%+).</>,
                                <><strong>Wait Period:</strong> If you fail and are under 18, you must wait <strong>15 days</strong> to retake. If 18+, you must wait until the next business day.</>,
                                <><strong>Three Failures:</strong> If you fail 3 times, you must complete the classroom component of real estate exam prep before testing again.</>
                            ]} />
                            <SubHeading>Vision & Road Skills</SubHeading>
                            <BulletList items={[
                                <><strong>Vision Standards:</strong> Unrestricted requires <strong>20/40</strong> or better. Restricted (daylight only) requires 20/70.</>,
                                <><strong>Road Skills:</strong> You must provides a vehicle with a valid safety inspection, registration, and working equipment.</>
                            ]} />
                        </SectionCard>

                        {/* ===== Section 2: Signals, Signs & Markings ===== */}
                        <SectionCard id="section-2" number={2} title="Signals, Signs and Pavement Markings">
                            <SubHeading>Traffic Signals</SubHeading>
                            <BulletList items={[
                                <><strong>Red Light:</strong> Complete stop. Right turn on red is allowed after stop unless "No Turn on Red" is posted.</>,
                                <><strong>Left Turn on Red:</strong> Allowed only from a one-way street onto another one-way street after stopping.</>,
                                <><strong>Red Arrow:</strong> Stop. You may <strong>not</strong> turn in the direction of the arrow (unlike some other states).</>
                            ]} />
                            <SubHeading>Sign Colors & Shapes</SubHeading>
                            <BulletList items={[
                                <><strong>Octagon:</strong> Exclusive to STOP signs.</>,
                                <><strong>Triangle:</strong> Exclusive to YIELD signs.</>,
                                <><strong>Diamond:</strong> Warning of special hazards or conditions.</>,
                                <><strong>Pentagon:</strong> School zones or school crossings.</>
                            ]} />
                        </SectionCard>

                        {/* ===== Section 3: Safe Driving ===== */}
                        <SectionCard id="section-3" number={3} title="Safe Driving">
                            <SubHeading>Speed Limits</SubHeading>
                            <BulletList items={[
                                <><strong>Interstates:</strong> Up to 70 mph where posted.</>,
                                <><strong>Public Highways:</strong> 55 mph unless otherwise posted.</>,
                                <><strong>School/Business/Residential:</strong> 25 mph unless otherwise posted.</>
                            ]} />
                            <SubHeading>Following Distance</SubHeading>
                            <BulletList items={[
                                <>Virginia recommends the <strong>2, 3, and 4-second rule</strong> to determine safe following distance based on speed and conditions.</>,
                                <>Increase distance for bad weather, heavy loads, or when following motorcycles/trucks.</>
                            ]} />
                            <WarningBox title="Right-of-Way" icon={<AlertTriangle className="w-4 h-4" />}>
                                <p className="text-sm">Yield to the driver on the right if you arrive at an intersection at the same time. Always yield to pedestrians and funeral processions.</p>
                            </WarningBox>
                        </SectionCard>

                        {/* ===== Section 4: Seat Belts & Child Safety ===== */}
                        <SectionCard id="section-4" number={4} title="Seat Belts, Airbags, and Child Safety Seats">
                            <BulletList items={[
                                <><strong>Seat Belts:</strong> Under Virginia law, the driver and all front-seat passengers must wear safety belts. Passengers under 18 must be belted regardless of where they sit.</>,
                                <><strong>Child Safety:</strong> Children under <strong>8 years old</strong> must be in an approved child set seat or booster seat.</>,
                                <><strong>Rear-Facing:</strong> Infants must ride in rear-facing seats until age 2 or until they reach the minimum weight limit for forward-facing.</>
                            ]} />
                        </SectionCard>

                        {/* ===== Section 5: Penalties & Alcohol ===== */}
                        <SectionCard id="section-5" number={5} title="Penalties">
                            <SubHeading>Alcohol and the Law</SubHeading>
                            <BulletList items={[
                                <><strong>DUI Threshold:</strong> 0.08% BAC for adults 21+. <strong>0.02%</strong> (Zero Tolerance) for those under 21.</>,
                                <><strong>Implied Consent:</strong> By driving in VA, you agree to take a breath/blood test if suspected of DUI. Refusal leads to immediate license suspension.</>,
                                <><strong>Administrative License Suspension (ALS):</strong> If you fail or refuse the test, your license is suspended immediately for at least 7 days.</>
                            ]} />
                        </SectionCard>

                        {/* ===== Section 6: License Types ===== */}
                        <SectionCard id="section-6" number={6} title="License Types">
                            <BulletList items={[
                                <><strong>Learner’s Permit:</strong> Must be at least 15 years and 6 months old.</>,
                                <><strong>Driver’s License:</strong> Available at age 16 and 3 months if you've held a permit for 9 months and completed driver ed.</>,
                                <><strong>Address Changes:</strong> You must notify the Real Estate within <strong>30 days</strong> of moving.</>
                            ]} />
                        </SectionCard>

                        {/* ===== Section 7: Other Information ===== */}
                        <SectionCard id="section-7" number={7} title="Other Important Information">
                            <BulletList items={[
                                <><strong>Insurance:</strong> You must have liability insurance or pay the $500 Uninsured Motorist Fee (note: this fee is being phased out/regulated, but still in the manual).</>,
                                <><strong>Safety Inspection:</strong> Vehicles must pass an annual safety inspection.</>,
                                <><strong>Title & Registration:</strong> Must be done within 30 days of moving to Virginia.</>
                            ]} />
                        </SectionCard>

                        {/* ===== Section 8: Sample Exam ===== */}
                        <SectionCard id="section-8" number={8} title="Sample Knowledge Exam">
                            <InfoBox>
                                <p className="text-sm">The actual test is computer-based. The first 10 questions are always signs—you must get 100% on signs before the computer lets you proceed to the general knowledge part.</p>
                            </InfoBox>
                        </SectionCard></div>
                </div>
            </main>

            {/* CTA Section */}
            <section className="relative py-16 md:py-20 overflow-hidden">
                <div className="absolute inset-0 bg-[#007aff]"></div>
                <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-5 py-2 mb-6">
                            <Sparkles className="w-4 h-4 text-white" />
                            <span className="text-sm font-medium text-white">Test Your Knowledge</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                            Ready to Pass Your Virginia real estate exam?
                        </h2>
                        <p className="text-white/80 text-base md:text-lg mb-8 max-w-2xl mx-auto">
                            Don&apos;t just read the summary — practice with realistic exam questions to make sure you pass on your first try.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button asChild size="lg" className="group bg-white text-[#007aff] hover:bg-blue-50 font-semibold px-6 py-3 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 text-sm md:text-base w-full sm:w-auto min-w-[240px] flex flex-row flex-nowrap items-center justify-center gap-2">
                                <Link href="/virginia-real-estate-practice-test">
                                    <span className="flex items-center gap-2">
                                        <span className="whitespace-nowrap">Take Free Practice Test</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
                                    </span>
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-xl transition-all duration-300 text-sm md:text-base w-full sm:w-auto min-w-[240px] flex flex-row flex-nowrap items-center justify-center gap-2">
                                <Link href="/handbooks/virginia">
                                    <span className="whitespace-nowrap">View Full Handbook PDF</span>
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

            <AuthModal
                isOpen={authModalOpen}
                onClose={() => setAuthModalOpen(false)}
                mode={authMode}
                onSwitchMode={(mode: 'login' | 'signup') => {
                    setAuthMode(mode);
                    if (mode === 'signup') setIsPremiumLogin(false);
                }}
                isPremiumOnly={isPremiumLogin}
                onGetPremium={() => router.push('/get-premium?plan=36500')}
            />
        </div>
    );
}

// ───────────────── Reusable Sub-Components ─────────────────

function SectionCard({ id, number, title, children }: { id: string; number: number; title: string; children: React.ReactNode }) {
    return (
        <section id={id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <div className="bg-[#007aff] px-6 py-4 flex items-center gap-3">
                <span className="bg-white/20 text-white text-sm font-bold w-7 h-7 flex items-center justify-center rounded-lg flex-shrink-0">
                    {number}
                </span>
                <h2 className="text-lg md:text-xl font-bold text-white">{title}</h2>
            </div>
            <div className="p-6 md:p-8 space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
                {children}
            </div>
        </section>
    );
}

function SubHeading({ children }: { children: React.ReactNode }) {
    return (
        <h3 className="text-base font-bold text-gray-900 mt-5 mb-2">
            {children}
        </h3>
    );
}

function BulletList({ items }: { items: React.ReactNode[] }) {
    return (
        <ul className="space-y-2">
            {items.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-gray-700 text-sm md:text-base">
                    <ChevronRight className="w-4 h-4 text-[#007aff] mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    );
}

function WarningBox({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
    return (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="font-semibold text-amber-800 mb-2 flex items-center gap-2 text-sm">
                {icon}
                {title}
            </p>
            {children}
        </div>
    );
}

function InfoBox({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <div className={`bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800 leading-relaxed ${className || ''}`}>
            {children}
        </div>
    );
}

function ConditionItem({ emoji, name, children }: { emoji: string; name: string; children: React.ReactNode }) {
    return (
        <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
            <span className="text-lg mt-0.5 flex-shrink-0">{emoji}</span>
            <div className="text-sm text-gray-700">
                <span className="font-semibold text-gray-900">{name}:</span>{' '}
                {children}
            </div>
        </div>
    );
}
