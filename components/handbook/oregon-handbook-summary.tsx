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

export function OregonHandbookSummary() {
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
        { label: 'Oregon', href: '/oregon-real-estate-permit-test' },
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
                                href="/oregon-real-estate-permit-test"
                                className="inline-flex items-center gap-1 text-sm text-[#007aff] hover:text-[#0056cc] transition-colors mb-3"
                            >
                                <ChevronRight className="w-3.5 h-3.5 rotate-180" />
                                Back to Practice Tests
                            </Link>

                            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                Summary of Oregon (OR) Real Estate Handbook {currentYear}
                            </h1>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-3">
                                A comprehensive, exam-focused summary of the{' '}
                                <Link
                                    href="/handbooks/oregon"
                                    className="text-[#007aff] font-medium relative inline-block group"
                                >
                                    official {currentYear} Oregon Driver Manual
                                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#007aff] transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                                . We break down all 10 key topics — from getting your license and right-of-way rules to speed limits, DUI laws, and what to do in a crash. Each section highlights the key rules and numbers the Oregon Real Estate actually tests you on.
                            </p>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                Don&apos;t want to read the summary either?{' '}
                                <Link
                                    href="/oregon-real-estate-permit-test"
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
                                    src="/handbook-summary/oregon/oregon-handbook-image.png?v=2"
                                    alt="Oregon Real Estate Driver Manual 2026"
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
                        <SectionCard id="section-1" number={1} title="Testing & Requirements">
                            <p>
                                To operate a motor vehicle in Oregon, you must possess a valid driving privilege. Real Estate will test your vision, driving knowledge, and driving skill.
                            </p>
                            
                            <SubHeading>Knowledge Test Rules</SubHeading>
                            <BulletList items={[
                                <>The Class C knowledge test has <strong>35 multiple-choice questions</strong>.</>,
                                <>You must answer <strong>28 questions correctly</strong> (80%) to pass.</>,
                                <>You cannot use the manual, electronic devices, or any notes during the test.</>,
                            ]} />

                            <SubHeading>Drive Test Requirements</SubHeading>
                            <BulletList items={[
                                <>If you are under 18, you must have held an instruction permit for at least <strong>6 months</strong> before taking the drive test.</>,
                                <>Your test vehicle must have valid registration, proof of insurance, and be in safe operating condition (e.g., working turn signals, brake lights, horn, and adequate tires).</>,
                                <>Only you and the examiner are allowed in the vehicle during the test. No passengers or translators.</>,
                            ]} />
                        </SectionCard>

                        {/* ===== Chapter 2 ===== */}
                        <SectionCard id="section-2" number={2} title="Signs & Traffic Signals">
                            <SubHeading>Traffic Signal Colors</SubHeading>
                            <BulletList items={[
                                <><strong>Steady Red:</strong> Stop and remain stopped. You may turn right on red <strong>after coming to a complete stop</strong>, unless a sign prohibits it. You may also turn left on red if entering a one-way street in the direction of traffic.</>,
                                <><strong>Flashing Red:</strong> Treat this exactly like a stop sign.</>,
                                <><span className="text-yellow-600 font-bold">Steady Yellow:</span> Warns the signal is about to turn red. Stop before entering the intersection if you can do so safely.</>,
                                <><span className="text-yellow-600 font-bold">Flashing Yellow:</span> Slow down and proceed with caution.</>,
                                <><span className="text-green-600 font-bold">Flashing Yellow Arrow:</span> You may turn in the direction of the arrow, but you must <strong>first yield</strong> to pedestrians and oncoming traffic.</>,
                            ]} />

                            <SubHeading>Sign Colors & Shapes</SubHeading>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                                {[
                                    { color: 'Red & White Octagon', meaning: 'Stop completely' },
                                    { color: 'Red & White Triangle', meaning: 'Yield right of way' },
                                    { color: 'Yellow Diamond', meaning: 'Warning of upcoming hazards' },
                                    { color: 'White Rectangle', meaning: 'Regulatory (Speed limits, rules)' },
                                    { color: 'Green', meaning: 'Guide / Directional information' },
                                    { color: 'Blue', meaning: 'Motorist Services (Gas, Food, Hospital)' },
                                ].map((item) => (
                                    <div key={item.color} className="p-2.5 bg-gray-50 rounded-lg text-sm border border-gray-100 flex gap-2">
                                        <span className="font-bold text-gray-800 shrink-0">{item.color}:</span>
                                        <span className="text-gray-600">{item.meaning}</span>
                                    </div>
                                ))}
                            </div>
                        </SectionCard>

                        {/* ===== Chapter 3 ===== */}
                        <SectionCard id="section-3" number={3} title="Lane Travel & Speed">
                            <SubHeading>The Basic Rule Law</SubHeading>
                            <p className="mb-3 text-sm text-gray-700">The basic rule states you must drive at a speed that is <strong>reasonable and cautious</strong> for existing conditions. This applies on all roads at all times, even if the speed limit is higher.</p>

                            <SubHeading>Oregon Maximum Speed Limits</SubHeading>
                            <p className="mb-2 text-sm text-gray-700">Unless posted otherwise, these limits apply:</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                                {[
                                    { limit: '15 mph', where: 'Alleys and narrow residential areas' },
                                    { limit: '20 mph', where: 'School zones and business districts' },
                                    { limit: '25 mph', where: 'Residential districts and public parks' },
                                    { limit: '55 mph', where: 'All other roads and highways' },
                                ].map((item) => (
                                    <div key={item.limit} className="p-2.5 bg-gray-50 rounded-lg text-sm border border-gray-100">
                                        <span className="font-bold text-[#007aff]">{item.limit}</span>
                                        <span className="text-gray-600"> — {item.where}</span>
                                    </div>
                                ))}
                            </div>
                            
                            <SubHeading>Lane Markings</SubHeading>
                            <BulletList items={[
                                <><strong>Solid Yellow Line:</strong> Marks the left edge of one-way roads and separates traffic moving in opposite directions. You may not pass.</>,
                                <><strong>Broken Yellow Line:</strong> You may pass if it is safe to do so.</>,
                                <><strong>Solid White Line:</strong> Marks the right edge of the road, or separates lanes of traffic moving in the same direction. Lane changes are discouraged.</>,
                            ]} />
                        </SectionCard>

                        {/* ===== Chapter 4 ===== */}
                        <SectionCard id="section-4" number={4} title="Turns & Intersections">
                            <SubHeading>Signaling</SubHeading>
                            <BulletList items={[
                                <>You must signal at least <strong>100 feet</strong> before you turn or change lanes.</>,
                                <>If your vehicle's turn signals are broken, you must use hand signals.</>,
                            ]} />

                            <SubHeading>Right of Way at Intersections</SubHeading>
                            <BulletList items={[
                                <>At an intersection with no signs or signals, you must yield to vehicles already in the intersection.</>,
                                <>If you arrive at an intersection at the same time as another vehicle, the vehicle on the <strong>left must yield to the vehicle on the right</strong>.</>,
                                <>When making a left turn, you must yield to oncoming traffic going straight.</>,
                                <>At a four-way stop, the first vehicle to arrive has the right of way. If two arrive at the same time, the one on the right goes first.</>,
                            ]} />
                            
                            <InfoBox className="mt-2">
                                When entering a roundabout, you must yield to traffic already in the circle. Traffic inside a roundabout travels in a counter-clockwise direction.
                            </InfoBox>
                        </SectionCard>

                        {/* ===== Chapter 5 ===== */}
                        <SectionCard id="section-5" number={5} title="Sharing the Road">
                            <SubHeading>Pedestrians and School Zones</SubHeading>
                            <BulletList items={[
                                <>Every intersection is a crosswalk, whether it is marked or unmarked. You must stop for pedestrians in a crosswalk.</>,
                                <><strong>Blind Pedestrians:</strong> You must yield right of way to any blind pedestrian carrying a white cane or using a guide dog.</>,
                                <>You must stop for a school bus with flashing red lights. You do not need to stop if the bus is on the opposite side of a divided highway.</>,
                            ]} />

                            <SubHeading>Bicycles and Motorcycles</SubHeading>
                            <BulletList items={[
                                <>Bicycles are vehicles and must obey traffic laws. Yield to them just as you would to another motor vehicle.</>,
                                <>Do not drive in a bicycle lane. You may cross a bicycle lane only when it is safe to do so, such as when turning into a driveway.</>,
                                <>Leave plenty of room when following or passing a motorcycle. They can stop much faster than cars.</>,
                            ]} />

                            <WarningBox title="Large Vehicles (CMVs)" icon={<AlertTriangle className="w-4 h-4" />}>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• Large trucks have massive blind spots ("No-Zones") on all four sides. If you cannot see the driver's face in their side mirror, they cannot see you.</li>
                                    <li>• Trucks make very wide right turns. Never pass a truck on the right side if it is preparing to turn.</li>
                                </ul>
                            </WarningBox>
                        </SectionCard>

                        {/* ===== Chapter 6 ===== */}
                        <SectionCard id="section-6" number={6} title="Railroads, Light Rail & Street Cars">
                            <p className="mb-2">Trains cannot stop quickly. A freight train traveling at 55 mph can take a mile or more to stop.</p>
                            <BulletList items={[
                                <>When approaching a railroad crossing with flashing red lights, you must stop at least <strong>15 feet</strong> from the nearest rail.</>,
                                <>Never drive around lowered gates. It is illegal and deadly.</>,
                                <>Do not shift gears while crossing railroad tracks; your vehicle could stall.</>,
                                <>Light rail trains and streetcars share the road with vehicles. Treat their crossings the same as standard railroad crossings.</>,
                            ]} />
                        </SectionCard>

                        {/* ===== Chapter 7 ===== */}
                        <SectionCard id="section-7" number={7} title="Parking & Stopping">
                            <SubHeading>Parking on Hills</SubHeading>
                            <BulletList items={[
                                <><strong>Downhill against a curb:</strong> Turn your wheels toward the curb.</>,
                                <><strong>Uphill against a curb:</strong> Turn your wheels outward, away from the curb.</>,
                                <><strong>No curb (uphill or downhill):</strong> Turn your wheels toward the edge of the road so the vehicle will roll off the road, not into traffic.</>,
                            ]} />

                            <SubHeading>Illegal Parking Areas</SubHeading>
                            <BulletList items={[
                                <>Within <strong>10 feet</strong> of a fire hydrant.</>,
                                <>Within <strong>15 feet</strong> of the driveway entrance to a fire station.</>,
                                <>Within <strong>20 feet</strong> of a crosswalk at an intersection.</>,
                                <>Within <strong>50 feet</strong> of a traffic signal or sign (if parking would block its view).</>,
                                <>On a sidewalk, in an intersection, or on a crosswalk.</>,
                            ]} />
                        </SectionCard>

                        {/* ===== Chapter 8 ===== */}
                        <SectionCard id="section-8" number={8} title="Safe & Responsible Driving">
                            <SubHeading>Safety Belts and Mobile Devices</SubHeading>
                            <BulletList items={[
                                <>Oregon law requires all drivers and passengers to wear safety belts.</>,
                                <>It is <strong>illegal</strong> for any driver to use a mobile electronic device while driving, unless using a hands-free accessory (and even then, only for drivers 18 and older).</>,
                            ]} />

                            <SubHeading>Driving Impaired (DUII)</SubHeading>
                            <p className="mb-3">You can be arrested for Driving Under the Influence of Intoxicants (DUII) for alcohol, cannabis, or other drugs.</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                                {[
                                    { limit: '0.08%', who: 'Blood Alcohol Content (BAC) strictly illegal for adults 21+' },
                                    { limit: 'Zero Tolerance', who: 'Any amount of alcohol for drivers under age 21' },
                                ].map((item) => (
                                    <div key={item.limit} className="flex items-center gap-3 p-3 bg-red-50/50 rounded-xl border border-red-100">
                                        <div className="font-bold text-red-600 text-lg">{item.limit}</div>
                                        <div className="text-sm font-medium text-gray-800">{item.who}</div>
                                    </div>
                                ))}
                            </div>
                            <BulletList items={[
                                <><strong>Implied Consent Law:</strong> By driving in Oregon, you consent to a breath, blood, or urine test if arrested for DUII. Refusing the test results in a hefty fine and a longer license suspension.</>,
                                <>Oregon's Open Container law makes it illegal to have an open alcoholic beverage or marijuana container in the passenger compartment of your vehicle.</>,
                            ]} />
                        </SectionCard>

                        {/* ===== Chapter 9 ===== */}
                        <SectionCard id="section-9" number={9} title="Other Important Information">
                            <SubHeading>Emergency Vehicles and Traffic Collisions</SubHeading>
                            <BulletList items={[
                                <><strong>Move Over Law:</strong> When passing stopped emergency vehicles, tow trucks, or roadside assistance vehicles with flashing lights, you must safely move over to another lane or slow down significantly.</>,
                                <>If you are in a crash, you must stop immediately. If anyone is injured or if property damage exceeds $2,500, you must file an Accident and Insurance Report with Real Estate within <strong>72 hours</strong>.</>,
                            ]} />

                            <SubHeading>Mandatory Insurance</SubHeading>
                            <BulletList items={[
                                <>Oregon law requires every driver to insure their vehicle for bodily injury and property damage.</>,
                                <>You must carry proof of insurance in your vehicle and provide it to a police officer upon request or after a collision.</>,
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
                            Ready to Pass Your Oregon real estate exam?
                        </h2>
                        <p className="text-white/80 text-base md:text-lg mb-8 max-w-2xl mx-auto">
                            Don&apos;t just read the summary — practice with realistic exam questions to make sure you pass on your first try.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button asChild size="lg" className="group bg-white text-[#007aff] hover:bg-blue-50 font-semibold px-6 py-3 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 text-sm md:text-base w-full sm:w-auto min-w-[240px] flex flex-row flex-nowrap items-center justify-center gap-2">
                                <Link href="/oregon-real-estate-permit-test">
                                    <span className="flex items-center gap-2">
                                        <span className="whitespace-nowrap">Take Free Practice Test</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
                                    </span>
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-xl transition-all duration-300 text-sm md:text-base w-full sm:w-auto min-w-[240px] flex flex-row flex-nowrap items-center justify-center gap-2">
                                <Link href="/handbooks/oregon">
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
