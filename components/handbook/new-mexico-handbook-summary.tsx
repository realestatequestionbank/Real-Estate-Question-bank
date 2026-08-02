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
    { id: 'section-1', label: "1. Getting Licensed" },
    { id: 'section-2', label: '2. Traffic Laws' },
    { id: 'section-3', label: '3. Signs & Signals' },
    { id: 'section-4', label: '4. Safe Driving' },
    { id: 'section-5', label: '5. Special Conditions' },
    { id: 'section-6', label: '6. Alcohol & Drugs' },
    { id: 'section-7', label: '7. Vehicle & Insurance' },
    { id: 'section-8', label: '8. Special Situations' },
    { id: 'section-9', label: '9. Sharing the Road' },
    { id: 'section-10', label: '10. Crashes & Safety' },
];

export function NewMexicoHandbookSummary() {
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
        { label: 'New Mexico', href: '/new-mexico-real-estate-practice-test' },
        { label: 'MVD Handbook Summary', href: null },
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
                                href="/new-mexico-real-estate-practice-test"
                                className="inline-flex items-center gap-1 text-sm text-[#007aff] hover:text-[#0056cc] transition-colors mb-3"
                            >
                                <ChevronRight className="w-3.5 h-3.5 rotate-180" />
                                Back to Practice Tests
                            </Link>

                            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                Summary of New Mexico (NM) MVD Handbook {currentYear}
                            </h1>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-3">
                                A comprehensive, exam-focused summary of the{' '}
                                <Link
                                    href="/handbooks/new-mexico"
                                    className="text-[#007aff] font-medium relative inline-block group"
                                >
                                    official {currentYear} New Mexico Driver Manual
                                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#007aff] transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                                . We break down all 10 key topics — from getting your license and right-of-way rules to speed limits, DUI laws, and what to do in a crash. Each section highlights the key rules and numbers the New Mexico MVD actually tests you on.
                            </p>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                Don&apos;t want to read the summary either?{' '}
                                <Link
                                    href="/new-mexico-real-estate-practice-test"
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
                            <div className="drop-shadow-[4px_6px_18px_rgba(0,0,0,0.30)] hover:drop-shadow-[4px_8px_24px_rgba(0,0,0,0.35)] transition-all duration-300">
                                <Image
                                    src="/handbook-summary/new-mexico/new-mexico-handbook-image.png?v=2"
                                    alt="New Mexico MVD Driver Manual 2026"
                                    width={240}
                                    height={312}
                                    style={{ mixBlendMode: 'multiply', display: 'block' }}
                                    priority
                                />
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
                    <div className="space-y-10 md:space-y-12">

                        {/* ===== Chapter 1 ===== */}
                        <SectionCard id="section-1" number={1} title="The Driver License & GDL">
                            <p>
                                Driving in New Mexico is a privilege. If you are under the age of 18, you must participate in the Graduated Driver License (GDL) system until you meet the requirements for an unrestricted license.
                            </p>

                            <SubHeading>Instructional Permit</SubHeading>
                            <BulletList items={[
                                <>Must be at least <strong>15 years of age</strong> to obtain an instructional permit.</>,
                                <>You must pass the <strong>knowledge test and vision test</strong>.</>,
                                <>Must be enrolled in an approved real estate exam prep course that includes DWI education.</>,
                                <>When driving, a licensed driver <strong>21 years of age or older</strong> who has been licensed for at least 3 years must sit in the right front seat.</>,
                                <>You must hold the instructional permit for at least <strong>six months</strong>.</>,
                            ]} />

                            <WarningBox title="Provisional License Restrictions" icon={<AlertTriangle className="w-4 h-4" />}>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• Must complete <strong>50 hours</strong> of practice driving, including <strong>10 hours at night</strong>.</li>
                                    <li>• Minimum age is 15 years and 6 months.</li>
                                    <li>• <strong>Nighttime Driving Restriction:</strong> You may not drive between <strong>midnight and 5:00 a.m.</strong> unless accompanied by a licensed driver 21 or older, or for medical/work/school exceptions.</li>
                                    <li>• <strong>Passenger Restriction:</strong> You may not have more than one passenger under age 21 who is not immediate family, unless supervised by a licensed driver 21+.</li>
                                </ul>
                            </WarningBox>
                        </SectionCard>

                        {/* ===== Chapter 2 ===== */}
                        <SectionCard id="section-2" number={2} title="Traffic Rules & Right-of-Way">
                            <SubHeading>Right-of-Way Rules</SubHeading>
                            <p className="mb-2">The law says who must yield the right of way; it does not give anyone the right-of-way. You must always yield to pedestrians.</p>
                            <BulletList items={[
                                <><strong>Intersections without signs:</strong> Yield to vehicles coming from the <strong>right</strong>.</>,
                                <><strong>4-Way Stop:</strong> The vehicle arriving first goes first. If arriving at the same time, the vehicle on the <strong>right</strong> goes first.</>,
                                <><strong>Left Turns:</strong> You must yield to oncoming vehicles going straight ahead.</>,
                                <><strong>Emergency Vehicles:</strong> Pull over to the <strong>right edge</strong> of the road and stop for vehicles displaying red or blue flashing lights and sirens.</>,
                            ]} />

                            <SubHeading>School Buses</SubHeading>
                            <BulletList items={[
                                <>You must <strong>stop</strong> for a school bus with its red lights flashing, whether it is on your side, the opposite side, or at an intersection.</>,
                                <>You do not have to stop if the bus is on the opposite side of a roadway separated by a physical barrier or median.</>,
                            ]} />
                        </SectionCard>

                        {/* ===== Chapter 3 ===== */}
                        <SectionCard id="section-3" number={3} title="Speed Limits & Parking">
                            <SubHeading>New Mexico Maximum Speed Limits</SubHeading>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                                {[
                                    { limit: '15 mph', where: 'School Zones' },
                                    { limit: '30 mph', where: 'Business or residential areas (unless posted otherwise)' },
                                    { limit: '55 mph', where: 'Public highways (unless posted otherwise)' },
                                    { limit: '75 mph', where: 'Rural interstate highways (unless posted otherwise)' },
                                ].map((item) => (
                                    <div key={item.limit} className="p-2.5 bg-gray-50 rounded-lg text-sm border border-gray-100">
                                        <span className="font-bold text-[#007aff]">{item.limit}</span>
                                        <span className="text-gray-600"> — {item.where}</span>
                                    </div>
                                ))}
                            </div>

                            <SubHeading>No-Parking Zones</SubHeading>
                            <BulletList items={[
                                <>Within <strong>15 feet</strong> of a fire hydrant.</>,
                                <>Within <strong>25 feet</strong> of a crosswalk at an intersection.</>,
                                <>Within <strong>30 feet</strong> of a traffic signal, stop sign, or yield sign.</>,
                                <>Within <strong>50 feet</strong> of a railroad crossing.</>,
                                <>More than <strong>18 inches</strong> from the curb.</>,
                            ]} />

                            <InfoBox className="mt-2">
                                When parking on a hill, turn your wheels sharply towards the edge of the road or curb, so that if the vehicle rolls, it rolls away from traffic.
                            </InfoBox>
                        </SectionCard>

                        {/* ===== Chapter 4 ===== */}
                        <SectionCard id="section-4" number={4} title="Traffic Signs & Signals">
                            <SubHeading>Traffic Signal Colors</SubHeading>
                            <BulletList items={[
                                <><strong>Steady Red / Red Arrow:</strong> Stop. You may turn right on red after coming to a full stop if it is safe and no sign prohibits it.</>,
                                <><strong>Flashing Red:</strong> Treat exactly like a stop sign. Come to a full stop.</>,
                                <><strong>Flashing Yellow:</strong> Slow down and proceed with caution.</>,
                                <><strong>Yellow Arrow:</strong> Protection of the green arrow is ending. Prepare to stop.</>,
                            ]} />

                            <SubHeading>Pavement Markings</SubHeading>
                            <BulletList items={[
                                <><strong>Solid Yellow Line:</strong> Cannot pass. Passing is only permitted on a broken/dashed yellow line.</>,
                                <><strong>Double Solid Yellow:</strong> Neither side can pass.</>,
                                <><strong>Shared Center Lane (Solid & Dashed Yellow):</strong> Reserved for left turns or U-turns. Not to be used for passing.</>,
                            ]} />
                        </SectionCard>

                        {/* ===== Chapter 5 ===== */}
                        <SectionCard id="section-5" number={5} title="Safe Driving Practices">
                            <SubHeading>Scanning and Looking Ahead</SubHeading>
                            <p className="mb-2">Scanning helps you see problems ahead, vehicles, and people. Look ahead, to the sides, and behind.</p>
                            <BulletList items={[
                                <>Safer drivers look at least <strong>10 seconds ahead</strong> of their vehicle. In the city, 10 seconds is about one block.</>,
                                <>Check your mirrors when changing lanes, slowing down, or driving down a long steep hill.</>,
                            ]} />

                            <SubHeading>Blind Spots</SubHeading>
                            <BulletList items={[
                                <>Look over your shoulder in the direction you plan to move to check your blind spots.</>,
                                <>Never rely solely on your mirrors when changing lanes. You must turn your head.</>,
                            ]} />
                        </SectionCard>

                        {/* ===== Chapter 6 ===== */}
                        <SectionCard id="section-6" number={6} title="Sharing the Road">
                            <SubHeading>Bicycles and Pedestrians</SubHeading>
                            <BulletList items={[
                                <><strong>White Cane Law:</strong> You must take all necessary precautions to avoid injury to blind pedestrians carrying a white cane or using a guide dog.</>,
                                <>Bicycles are treated like vehicles. Leave plenty of room when passing.</>,
                            ]} />

                            <SubHeading>Large Trucks and RVs</SubHeading>
                            <BulletList items={[
                                <>Large trucks have large blind spots called <strong>No-Zones</strong> directly behind them, in front, and on the sides.</>,
                                <>If you cannot see the truck driver in their side mirrors, they cannot see you.</>,
                                <>Never cut in front of a truck immediately after passing; they take up to twice as long to stop.</>,
                            ]} />
                        </SectionCard>

                        {/* ===== Chapter 7 ===== */}
                        <SectionCard id="section-7" number={7} title="Alcohol and Drugs">
                            <SubHeading>DWI Laws and Limits</SubHeading>
                            <p className="mb-3">New Mexico has strict limits for Blood Alcohol Content (BAC). You can be arrested for DWI if your BAC is:</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                                {[
                                    { limit: '0.08%', who: 'Drivers Age 21 and Older' },
                                    { limit: '0.02%', who: 'Drivers Under Age 21' },
                                    { limit: '0.04%', who: 'Commercial Drivers (CDL)' },
                                ].map((item) => (
                                    <div key={item.limit} className="flex items-center gap-3 p-3 bg-red-50/50 rounded-xl border border-red-100">
                                        <div className="font-bold text-red-600 text-lg">{item.limit}</div>
                                        <div className="text-sm font-medium text-gray-800">{item.who}</div>
                                    </div>
                                ))}
                            </div>

                            <BulletList items={[
                                <>There is <strong>no safe amount of alcohol</strong>. Your body gets rid of about one alcoholic drink per hour. Coffee or showers do not sober you up faster.</>,
                                <>Prescription and over-the-counter drugs can affect your driving as much as alcohol. It is illegal to drive impaired by any drug.</>,
                                <><strong>Implied Consent:</strong> If arrested for DWI, you must take a blood or breath test. Refusal results in license revocation.</>,
                            ]} />
                        </SectionCard>

                        {/* ===== Chapter 8 ===== */}
                        <SectionCard id="section-8" number={8} title="Emergencies & Crashes">
                            <div className="space-y-3 mb-4">
                                <ConditionItem emoji="🛑" name="Brake Failure">
                                    Pump the brake pedal several times to build pressure. If that doesn't work, use your parking brake slowly. Shift to lower gears and look for a safe place to stop.
                                </ConditionItem>
                                <ConditionItem emoji="💥" name="Tire Blowout">
                                    Hold the steering wheel tightly and keep the vehicle going straight. Slow down gradually. Take your foot off the gas pedal and use the brakes lightly. Pull off the road.
                                </ConditionItem>
                                <ConditionItem emoji="🦌" name="Wildlife Encounters">
                                    If an animal runs out, apply the brakes. Do not swerve into oncoming traffic to avoid the animal.
                                </ConditionItem>
                                <ConditionItem emoji="❄️" name="Skids">
                                    Stay off the brakes. Steer in the direction you want the vehicle to go. As soon as the vehicle straightens out, turn the steering wheel back the other way safely.
                                </ConditionItem>
                            </div>

                            <SubHeading>If you are in a crash</SubHeading>
                            <BulletList items={[
                                <>You must stop. Moving away from the scene without identifying yourself is a hit-and-run.</>,
                                <>If someone is injured, report the accident and get help immediately.</>,
                            ]} />
                        </SectionCard>

                        {/* ===== Chapter 9 ===== */}
                        <SectionCard id="section-9" number={9} title="Safety Belts & Child Restraints">
                            <BulletList items={[
                                <>In New Mexico, it is illegal to drive without wearing safety belts. All passengers must be restrained.</>,
                                <>Children under <strong>12 years of age</strong> must wear appropriate safety restraints while the vehicle is moving.</>,
                                <>Children under 24 months or weighing less than 60 pounds must be secured in an approved safety device in the rear seat.</>,
                                <>Never secure a child in the front passenger side if the vehicle has an airbag.</>,
                            ]} />
                        </SectionCard>

                        {/* ===== Chapter 10 ===== */}
                        <SectionCard id="section-10" number={10} title="Motorcycles">
                            <BulletList items={[
                                <>Because motorcycles are smaller, they are harder to see. Check your blind spots carefully.</>,
                                <>Make sure you leave at least a minimum <strong>four-second</strong> following distance when tracing behind a motorcycle.</>,
                                <>Motorcycles have the right to a full traffic lane. Do not share a lane with a motorcycle.</>,
                            ]} />
                        </SectionCard>
                    </div>
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
                            Ready to Pass Your New Mexico real estate exam?
                        </h2>
                        <p className="text-white/80 text-base md:text-lg mb-8 max-w-2xl mx-auto">
                            Don&apos;t just read the summary — practice with realistic exam questions to make sure you pass on your first try.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button asChild size="lg" className="group bg-white text-[#007aff] hover:bg-blue-50 font-semibold px-6 py-3 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 text-sm md:text-base w-full sm:w-auto min-w-[240px] flex flex-row flex-nowrap items-center justify-center gap-2">
                                <Link href="/new-mexico-real-estate-practice-test">
                                    <span className="flex items-center gap-2">
                                        <span className="whitespace-nowrap">Take Free Practice Test</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
                                    </span>
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-xl transition-all duration-300 text-sm md:text-base w-full sm:w-auto min-w-[240px] flex flex-row flex-nowrap items-center justify-center gap-2">
                                <Link href="/handbooks/new-mexico">
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
