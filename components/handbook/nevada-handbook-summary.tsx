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
    { id: 'section-9', label: '9. Crashes & Safety' },
    { id: 'section-10', label: '10. Sharing the Road' },
];

export function NevadaHandbookSummary() {
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
        { label: 'Nevada', href: '/nevada-real-estate-practice-test' },
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
                                href="/nevada-real-estate-practice-test"
                                className="inline-flex items-center gap-1 text-sm text-[#007aff] hover:text-[#0056cc] transition-colors mb-3"
                            >
                                <ChevronRight className="w-3.5 h-3.5 rotate-180" />
                                Back to Practice Tests
                            </Link>

                            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                Summary of Nevada (NV) Real Estate Handbook {currentYear}
                            </h1>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-3">
                                A comprehensive, exam-focused summary of the{' '}
                                <Link
                                    href="/handbooks/nevada"
                                    className="text-[#007aff] font-medium relative inline-block group"
                                >
                                    official {currentYear} Nevada Driver&apos;s Handbook
                                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#007aff] transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                                . We break down all 10 key topics — from getting your license and right-of-way rules to speed limits, DUI laws, and what to do in a crash. Each section highlights the key rules and numbers the Nevada Real Estate actually tests you on.
                            </p>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                Don&apos;t want to read the summary either?{' '}
                                <Link
                                    href="/nevada-real-estate-practice-test"
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
                                    src="/handbook-summary/nevada/nevada-handbook-image.png"
                                    alt="Nevada Real Estate Driver Handbook 2026"
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
                    <div className="space-y-10 md:space-y-12">

                        {/* ===== Section 1: Getting Licensed ===== */}
                        <SectionCard id="section-1" number={1} title="Getting Your Nevada Driver License">
                            <p>
                                Driving in Nevada is a <strong>privilege, not a right</strong>. All Nevada residents must hold a valid Nevada driver license.
                                New residents must obtain a Nevada license within <strong>30 days</strong> of establishing residency.
                            </p>
                            <SubHeading>Types of Nevada Licenses</SubHeading>
                            <BulletList items={[
                                <>
                                    <strong>Instruction Permit:</strong> Available at age <strong>15½</strong>. Must pass knowledge test (50 questions, <strong>80% to pass</strong>) and vision exam. Must be accompanied by a licensed driver age 21+ at all times.
                                </>,
                                <>
                                    <strong>Minor&apos;s Restricted License (Under 18):</strong> Must be at least <strong>16 years old</strong>, hold an instruction permit for at least <strong>6 months</strong>, and complete <strong>50 hours of supervised driving</strong> (including <strong>10 hours at night</strong>). Must also complete an approved real estate exam prep course.
                                </>,
                                <>
                                    <strong>Class C License:</strong> Standard license for non-commercial vehicles. Applicants 18+ who hold a valid out-of-state license may be exempt from the knowledge test.
                                </>,
                                <>
                                    <strong>Class M License:</strong> Required to operate a motorcycle. Must pass a motorcycle knowledge and skills test or complete an approved training course.
                                </>,
                            ]} />

                            <SubHeading>Graduated Driver License (GDL) Restrictions</SubHeading>
                            <WarningBox title="Restrictions for Drivers Under 18" icon={<AlertTriangle className="w-4 h-4" />}>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• First <strong>6 months</strong>: No passengers under 18 unless a licensed driver 21+ is in the front seat.</li>
                                    <li>• Cannot drive between <strong>10:00 p.m. and 5:00 a.m.</strong> (exceptions for work, school, or emergencies).</li>
                                    <li>• <strong>No cell phone use at all</strong> while driving — including hands-free.</li>
                                </ul>
                            </WarningBox>

                            <SubHeading>Required Documents</SubHeading>
                            <BulletList items={[
                                'Proof of identity (birth certificate, passport, etc.).',
                                'Social Security number.',
                                'Two proofs of Nevada residency (utility bills, bank statements, etc.).',
                                'Proof of legal presence in the United States.',
                            ]} />

                            <SubHeading>The Knowledge Test</SubHeading>
                            <BulletList items={[
                                <><strong>50 questions</strong> — must score <strong>80% or better</strong> (40 correct) to pass.</>,
                                'If you fail, you may retake the test. Fees may apply for each attempt.',
                                'The test covers traffic laws, road signs, safe driving practices, and Nevada-specific rules.',
                            ]} />
                        </SectionCard>

                        {/* ===== Section 2: Traffic Laws & Rules of the Road ===== */}
                        <SectionCard id="section-2" number={2} title="Traffic Laws & Rules of the Road">
                            <p>
                                Right-of-way is something <strong>given, not taken</strong>. Even if you legally have the right-of-way, yield if
                                the other driver does not. Your goal is always to prevent a crash.
                            </p>

                            <SubHeading>Right-of-Way Rules</SubHeading>
                            <div className="space-y-2">
                                {[
                                    { scenario: 'Uncontrolled Intersection', rule: 'Yield to the vehicle that arrived first. If two vehicles arrive at the same time, yield to the vehicle on your right.' },
                                    { scenario: 'Turning Left', rule: 'Always yield to all oncoming traffic and pedestrians before completing your turn.' },
                                    { scenario: 'Roundabout', rule: 'Yield to traffic already in the roundabout. Enter only when there is a safe gap.' },
                                    { scenario: 'T-Intersection', rule: 'Vehicles on the terminating (dead-end) road must stop and yield to traffic on the through road.' },
                                    { scenario: 'Private Roads & Driveways', rule: 'Stop before the sidewalk and yield to all pedestrians and approaching vehicles.' },
                                    { scenario: 'Pedestrians', rule: 'Always yield to pedestrians in marked or unmarked crosswalks.' },
                                ].map((item) => (
                                    <div key={item.scenario} className="p-3 bg-gray-50 rounded-xl">
                                        <span className="font-semibold text-gray-900 text-sm">{item.scenario}:</span>{' '}
                                        <span className="text-gray-700 text-sm">{item.rule}</span>
                                    </div>
                                ))}
                            </div>

                            <SubHeading>Nevada Speed Limits</SubHeading>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                                {[
                                    { limit: '15 mph', where: 'School zones (when children are present)' },
                                    { limit: '25 mph', where: 'Residential and business districts' },
                                    { limit: '25 mph', where: 'School zones (standard posted)' },
                                    { limit: '65 mph', where: 'Most highways' },
                                    { limit: '70–80 mph', where: 'Rural interstates (as posted)' },
                                ].map((item, i) => (
                                    <div key={i} className="p-2.5 bg-gray-50 rounded-lg text-sm">
                                        <span className="font-bold text-[#007aff]">{item.limit}</span>
                                        <span className="text-gray-600"> — {item.where}</span>
                                    </div>
                                ))}
                            </div>
                            <WarningBox title="School Zone Fines" icon={<AlertTriangle className="w-4 h-4" />}>
                                <p className="text-sm text-gray-700">Fines are <strong>doubled</strong> for speeding in school zones and work zones where workers are present.</p>
                            </WarningBox>

                            <SubHeading>Turning Rules</SubHeading>
                            <BulletList items={[
                                <>Signal at least <strong>100 feet</strong> before turning.</>,
                                'Right turn on red is permitted after a full stop, unless a sign prohibits it.',
                                'Left turn from a one-way street to a one-way street on red is permitted after a full stop, unless prohibited by a sign.',
                            ]} />

                            <SubHeading>U-Turn Rules</SubHeading>
                            <BulletList items={[
                                'U-turns are illegal in business districts except at intersections or where a physical divider provides an opening.',
                                <>U-turns are illegal on curves or near hill crests where visibility is less than <strong>500 feet</strong> in either direction.</>,
                                'Never make a U-turn near a fire station or on a highway where there is no median.',
                            ]} />

                            <SubHeading>Passing Rules</SubHeading>
                            <BulletList items={[
                                'Never pass when solid yellow lines are on your side of the road.',
                                <>Do not pass within <strong>100 feet of an intersection, railroad crossing, bridge, viaduct, or tunnel</strong>.</>,
                                'Do not pass on a hill or curve with limited visibility.',
                                'When being passed, maintain your speed — do not accelerate.',
                            ]} />
                        </SectionCard>

                        {/* ===== Section 3: Signs, Signals & Road Markings ===== */}
                        <SectionCard id="section-3" number={3} title="Traffic Signs, Signals & Road Markings">
                            <SubHeading>Traffic Signals</SubHeading>
                            <div className="space-y-2 mb-4">
                                {[
                                    { light: 'Solid Green', rule: 'Go — but yield to pedestrians and vehicles already in the intersection.' },
                                    { light: 'Solid Yellow', rule: 'Signal is about to change to red. Stop if you can do so safely; otherwise proceed with caution.' },
                                    { light: 'Solid Red', rule: 'Stop completely. Right turn on red is permitted after a full stop unless a sign prohibits it.' },
                                    { light: 'Flashing Red', rule: 'Treat as a STOP sign — stop completely, then proceed when clear.' },
                                    { light: 'Flashing Yellow', rule: 'Slow down and proceed with caution.' },
                                    { light: 'Green Arrow', rule: 'Protected turn — proceed in the direction of the arrow. Oncoming traffic is stopped.' },
                                    { light: 'Yellow Arrow', rule: 'Protected turn is about to end. Prepare to stop or yield to oncoming traffic.' },
                                ].map((item) => (
                                    <div key={item.light} className="p-2.5 bg-gray-50 rounded-lg">
                                        <span className="font-semibold text-gray-900 text-sm">{item.light}:</span>{' '}
                                        <span className="text-gray-700 text-sm">{item.rule}</span>
                                    </div>
                                ))}
                            </div>

                            <SubHeading>Traffic Signs by Shape & Color</SubHeading>
                            <BulletList items={[
                                <><strong>Octagon (Stop Sign):</strong> Come to a complete stop before the crosswalk or stop line. Proceed when safe.</>,
                                <><strong>Triangle (Yield Sign):</strong> Slow down; yield to traffic and pedestrians.</>,
                                <><strong>Diamond (Warning):</strong> Yellow background. Warns of hazards ahead — curves, hills, crossings, rough roads.</>,
                                <><strong>Rectangle (Regulatory):</strong> White with black/red text. Informs of traffic laws (speed limits, turn restrictions, one-way).</>,
                                <><strong>Pentagon (School Zone):</strong> Yellow-green. Slow down near schools; watch for children.</>,
                                <><strong>Pennant (No Passing Zone):</strong> Yellow. Posted on the left side of the road — do not pass.</>,
                                <><strong>Circle (Railroad Warning):</strong> Yellow, advance warning of a railroad crossing ahead.</>,
                                <><strong>Orange Signs:</strong> Construction/work zones. Fines are <strong>doubled</strong> when workers are present.</>,
                                <><strong>Blue Signs:</strong> Motorist services — gas, food, lodging, hospitals.</>,
                                <><strong>Brown Signs:</strong> Recreation and cultural interest areas — parks, historic sites.</>,
                            ]} />

                            <SubHeading>Pavement Markings</SubHeading>
                            <div className="space-y-2">
                                {[
                                    { name: 'Broken Yellow Lines', desc: 'Center of a two-way road. You may pass when safe.' },
                                    { name: 'Solid Yellow Line (Your Side)', desc: 'No passing from your lane.' },
                                    { name: 'Double Solid Yellow Lines', desc: 'No passing from either direction.' },
                                    { name: 'White Lane Lines', desc: 'Divide same-direction traffic. Broken = may change lanes; solid = stay in your lane.' },
                                    { name: 'Solid White Edge Line', desc: 'Marks the outer edge of the road. If it slopes inward, the road is narrowing ahead.' },
                                    { name: 'White Stop Bar', desc: 'Stop line at intersections — stop before this line.' },
                                ].map((item) => (
                                    <div key={item.name} className="p-3 bg-gray-50 rounded-xl">
                                        <span className="font-semibold text-gray-900 text-sm">{item.name}:</span>{' '}
                                        <span className="text-gray-700 text-sm">{item.desc}</span>
                                    </div>
                                ))}
                            </div>
                        </SectionCard>

                        {/* ===== Section 4: Safe & Defensive Driving ===== */}
                        <SectionCard id="section-4" number={4} title="Safe & Defensive Driving Practices">
                            <SubHeading>Following Distance</SubHeading>
                            <BulletList items={[
                                <>Maintain a minimum <strong>2-second following distance</strong> behind the vehicle ahead.</>,
                                <>Increase to <strong>4 seconds or more</strong> in bad weather, at night, on wet roads, or when following large vehicles.</>,
                                <>Use the <strong>12-second scanning rule</strong> — look ahead at least 12 seconds to identify potential hazards.</>,
                            ]} />

                            <SubHeading>Lane Usage</SubHeading>
                            <BulletList items={[
                                'On multi-lane roads, use the right lane for slower driving and the left lane for passing.',
                                'Always check mirrors and blind spots before changing lanes.',
                                'Do not weave in and out of traffic.',
                            ]} />

                            <SubHeading>Defensive Driving Tips</SubHeading>
                            <BulletList items={[
                                'Scan the road 10–15 seconds ahead. Check mirrors every 5–8 seconds.',
                                'Always check blind spots by turning your head and glancing over your shoulder before changing lanes.',
                                'Anticipate the actions of other drivers — do not assume they will obey signals or signs.',
                                'Keep an escape route — try to maintain space on at least one side of your vehicle.',
                            ]} />

                            <SubHeading>Cell Phone Use</SubHeading>
                            <WarningBox title="Hands-Free Only" icon={<AlertTriangle className="w-4 h-4" />}>
                                <p className="text-sm text-gray-700">Nevada law prohibits holding a cell phone while driving. <strong>Texting while driving is illegal.</strong> Drivers under 18 may not use a cell phone at all, even hands-free.</p>
                            </WarningBox>
                        </SectionCard>

                        {/* ===== Section 5: Driving in Special Conditions ===== */}
                        <SectionCard id="section-5" number={5} title="Driving in Special Conditions">
                            <SubHeading>Headlights</SubHeading>
                            <BulletList items={[
                                <>Use headlights from <strong>30 minutes after sunset to 30 minutes before sunrise</strong>, and any time visibility is less than <strong>1,000 feet</strong>.</>,
                                <>Dim high beams within <strong>500 feet</strong> of an oncoming vehicle and within <strong>300 feet</strong> when following another vehicle.</>,
                                'In fog, use low beams — high beams reflect back and reduce visibility.',
                            ]} />

                            <SubHeading>Adverse Weather</SubHeading>
                            <div className="space-y-3">
                                <ConditionItem emoji="🌧️" name="Rain">
                                    Reduce speed. Roads are most slippery during the <strong>first few minutes</strong> of rain when oil and water mix. If your tires begin to hydroplane, take your foot off the gas and steer straight.
                                </ConditionItem>
                                <ConditionItem emoji="❄️" name="Snow & Ice">
                                    Increase following distance. Reduce speed for conditions. Watch for <strong>black ice</strong>, especially on bridges and overpasses which freeze first. Carry chains when required.
                                </ConditionItem>
                                <ConditionItem emoji="🌫️" name="Fog">
                                    Use low-beam headlights. Never use high beams in fog. Reduce speed and increase following distance. Use the right edge line as a guide.
                                </ConditionItem>
                                <ConditionItem emoji="💨" name="High Winds">
                                    Nevada desert roads can experience strong crosswinds, especially for high-profile vehicles. Grip the wheel firmly and reduce speed. Be prepared when exiting tunnels or passing gaps between mountains.
                                </ConditionItem>
                            </div>

                            <SubHeading>Highway / Freeway Driving</SubHeading>
                            <BulletList items={[
                                'When entering a freeway, use the on-ramp to accelerate and match the speed of traffic before merging.',
                                'Stay in the right lane except to pass.',
                                'Signal at least 100 feet before lane changes or exits.',
                                'Never stop on a freeway except in an emergency — pull completely off the road onto the shoulder.',
                            ]} />

                            <SubHeading>Handling Emergencies</SubHeading>
                            <div className="space-y-3">
                                <ConditionItem emoji="💥" name="Flat Tire / Blowout">
                                    Do <strong>not</strong> hit the brakes suddenly. Take your foot off the gas, grip the wheel tightly, steer straight, and gently slow to a stop on the shoulder.
                                </ConditionItem>
                                <ConditionItem emoji="⚠️" name="Brake Failure">
                                    Pump the brakes rapidly. Shift to a lower gear. Apply the <strong>parking brake cautiously</strong>. Look for an escape route or something soft to help stop the vehicle.
                                </ConditionItem>
                                <ConditionItem emoji="🚗" name="Skid Recovery">
                                    Remove foot from the accelerator. Turn the steering wheel <strong>in the direction of the skid</strong>. Do not brake. Straighten wheels as the car recovers.
                                </ConditionItem>
                            </div>
                        </SectionCard>

                        {/* ===== Section 6: Alcohol & Drugs ===== */}
                        <SectionCard id="section-6" number={6} title="Alcohol, Drugs & Impaired Driving">
                            <p>
                                Alcohol and drugs impair judgment, vision, coordination, and reaction time. Nevada law applies to
                                both alcohol and drugs — including prescription and over-the-counter medications.
                            </p>

                            <WarningBox title="Legal BAC Limits" icon={<AlertTriangle className="w-4 h-4" />}>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• <strong>0.08% or higher</strong> — DUI for drivers 21+</li>
                                    <li>• <strong>0.02% or higher</strong> — DUI for drivers under 21</li>
                                    <li>• <strong>0.04% or higher</strong> — DUI for commercial motor vehicle (CDL) operators</li>
                                </ul>
                            </WarningBox>

                            <SubHeading>Implied Consent</SubHeading>
                            <BulletList items={[
                                'By driving in Nevada, you automatically consent to a chemical test (breath, blood, or urine) if a law enforcement officer suspects you are impaired.',
                                <>Refusing a chemical test results in an <strong>automatic 1-year license revocation</strong> for the first refusal.</>,
                            ]} />

                            <SubHeading>DUI Penalties (Adults 21+)</SubHeading>
                            <div className="space-y-2 mb-3">
                                {[
                                    { offense: '1st DUI', penalty: 'Fine $400–$1,000; jail 2 days–6 months; license revocation 90–185 days; DUI school required.' },
                                    { offense: '2nd DUI (within 7 years)', penalty: 'Fine $750–$1,000; jail 10 days–6 months; license revocation 1 year.' },
                                    { offense: '3rd DUI (within 7 years)', penalty: 'Category B felony — prison 1–6 years; fine $2,000–$5,000; license revocation 3 years.' },
                                    { offense: 'DUI Causing Death', penalty: 'Category A or B felony — prison 2–20 years; substantial fines.' },
                                ].map((item) => (
                                    <div key={item.offense} className="p-2.5 bg-gray-50 rounded-lg">
                                        <span className="font-semibold text-gray-900 text-sm">{item.offense}:</span>{' '}
                                        <span className="text-gray-700 text-sm">{item.penalty}</span>
                                    </div>
                                ))}
                            </div>

                            <SubHeading>Open Container Law</SubHeading>
                            <BulletList items={[
                                'It is illegal to possess an open container of alcohol in the passenger area of a motor vehicle.',
                                'An open container violation while DUI increases penalties.',
                            ]} />

                            <SubHeading>Effects of Alcohol on Driving</SubHeading>
                            <BulletList items={[
                                'The body eliminates approximately one standard drink per hour — but this varies widely.',
                                'Factors that influence BAC: body weight, amount of food in stomach, time between drinks, and medications.',
                                'Even small amounts of alcohol can impair judgment and reaction time before reaching 0.08%.',
                                'Nothing can speed up the elimination of alcohol — not coffee, cold showers, or exercise.',
                            ]} />
                        </SectionCard>

                        {/* ===== Section 7: Vehicle & Insurance ===== */}
                        <SectionCard id="section-7" number={7} title="Vehicle Ownership & Insurance">
                            <SubHeading>Minimum Insurance Requirements (25/50/20)</SubHeading>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-3">
                                {[
                                    { amount: '$25,000', desc: 'Injury or death of one person' },
                                    { amount: '$50,000', desc: 'Injury or death of two or more persons' },
                                    { amount: '$20,000', desc: 'Property damage' },
                                ].map((item) => (
                                    <div key={item.amount} className="text-center p-3 bg-gray-50 rounded-xl">
                                        <div className="text-lg font-bold text-[#007aff]">{item.amount}</div>
                                        <div className="text-xs text-gray-600">{item.desc}</div>
                                    </div>
                                ))}
                            </div>
                            <BulletList items={[
                                'You must carry proof of insurance at all times while driving.',
                                'Driving without insurance is a misdemeanor — fines, license suspension, and vehicle impoundment may result.',
                            ]} />

                            <SubHeading>Vehicle Registration</SubHeading>
                            <BulletList items={[
                                <>Vehicles must be registered in Nevada within <strong>30 days</strong> of establishing residency.</>,
                                'Emissions testing may be required in certain counties (Clark and Washoe).',
                            ]} />

                            <SubHeading>Required Vehicle Equipment</SubHeading>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {[
                                    'Working headlights and taillights',
                                    'Working brake lights and turn signals',
                                    'Windshield and wipers',
                                    'Horn audible at a distance',
                                    'Rearview mirror(s)',
                                    'Adequate tire tread depth',
                                    'Working brakes (foot and parking)',
                                    'Seat belts for all occupants',
                                ].map((item) => (
                                    <div key={item} className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg">
                                        <CheckCircle2 className="w-4 h-4 text-[#007aff] flex-shrink-0" />
                                        <span className="text-sm text-gray-700">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <SubHeading>Parking Rules</SubHeading>
                            <BulletList items={[
                                <>Do not park within <strong>15 feet of a fire hydrant</strong>.</>,
                                <>Do not park within <strong>20 feet of a crosswalk</strong> at an intersection.</>,
                                <>Do not park within <strong>30 feet</strong> of a stop sign, yield sign, or traffic signal.</>,
                                'Do not double-park, park on a sidewalk, or park on a bridge.',
                            ]} />

                            <SubHeading>Parking on Hills</SubHeading>
                            <BulletList items={[
                                <><strong>Headed downhill with a curb:</strong> Turn wheels into the curb (right).</>,
                                <><strong>Headed uphill with a curb:</strong> Turn wheels away from the curb (left); let the car roll back until the tire rests against the curb.</>,
                                <><strong>No curb (uphill or downhill):</strong> Turn wheels to the right so the car rolls off the road, away from traffic.</>,
                                'Always set the parking brake.',
                            ]} />

                            <WarningBox title="Disabled Parking" icon={<AlertTriangle className="w-4 h-4" />}>
                                <p className="text-sm text-gray-700">Parking illegally in a handicap space or in the striped handicap access aisle is illegal. These aisles must remain clear for wheelchair and mobility device access.</p>
                            </WarningBox>
                        </SectionCard>

                        {/* ===== Section 8: Special Situations ===== */}
                        <SectionCard id="section-8" number={8} title="Special Situations & Road Users">
                            <SubHeading>Railroad Crossings</SubHeading>
                            <BulletList items={[
                                <>Stop between <strong>15 and 50 feet</strong> from the nearest rail when a crossing gate is lowered, lights are flashing, or a train is approaching.</>,
                                'Never try to beat a train. The railroad crossbuck (X-shaped sign) marks every grade crossing.',
                                'Never stop on railroad tracks.',
                            ]} />

                            <SubHeading>School Buses</SubHeading>
                            <BulletList items={[
                                <>When a school bus displays <strong>flashing red lights</strong>, all traffic from both directions must stop and remain stopped until the lights stop flashing or the driver signals you to proceed.</>,
                                'Exception: You do not need to stop if you are traveling in the opposite direction on a road divided by a physical barrier or median.',
                            ]} />

                            <SubHeading>Emergency Vehicles</SubHeading>
                            <BulletList items={[
                                'Yield to all emergency vehicles using sirens or flashing lights.',
                                'Pull to the right and stop until the emergency vehicle passes.',
                                <>
                                    <strong>Move Over law:</strong> On highways with two or more lanes, move over one lane when approaching a stationary emergency, law enforcement, or service vehicle with flashing lights. If you cannot change lanes, slow down significantly.
                                </>,
                            ]} />

                            <SubHeading>Construction Zones</SubHeading>
                            <BulletList items={[
                                <>Fines for traffic violations in construction zones are <strong>doubled</strong> when workers are present.</>,
                                'Obey all posted speed limits and instructions from flaggers.',
                                'Merge early and do not speed through work zones.',
                            ]} />
                        </SectionCard>

                        {/* ===== Section 9: Crashes & Safety ===== */}
                        <SectionCard id="section-9" number={9} title="Motor Vehicle Crashes & Safety">
                            <SubHeading>What to Do After a Crash</SubHeading>
                            <BulletList items={[
                                <><strong>You must stop immediately</strong> — leaving the scene is a hit-and-run, which is a serious criminal offense.</>,
                                'Call 911 if there is any injury, death, or significant property damage.',
                                'Exchange: name, address, phone number, vehicle registration, driver license number, and insurance information with all involved drivers.',
                                <>If the crash involves injury, death, or property damage of <strong>$750 or more</strong>, you must report it to the Nevada Real Estate within <strong>10 days</strong>.</>,
                                'If you hit an unattended vehicle, stop and leave a visible note with your name, address, and a description of the crash.',
                            ]} />

                            <SubHeading>Hit-and-Run Penalties</SubHeading>
                            <BulletList items={[
                                'Leaving the scene of an accident involving injury or death is a felony in Nevada.',
                                'Even leaving after a property-damage crash can result in misdemeanor charges.',
                            ]} />

                            <SubHeading>Seat Belt Laws</SubHeading>
                            <BulletList items={[
                                <>All passengers age <strong>6 or older</strong> (or weighing <strong>60+ lbs</strong>) must wear a seat belt.</>,
                                <>Nevada has <strong>primary enforcement</strong> — police can stop you just for a seat belt violation.</>,
                                'The driver is responsible for ensuring all passengers are properly restrained.',
                            ]} />

                            <SubHeading>Child Safety Seats</SubHeading>
                            <BulletList items={[
                                <>Children under <strong>age 6 and under 60 lbs</strong> must be in an approved child restraint system.</>,
                                'Rear-facing seats are recommended for infants. Never place a rear-facing seat in front of an active air bag.',
                            ]} />

                            <SubHeading>Defensive Driving & Safety</SubHeading>
                            <BulletList items={[
                                'Scan the road 10–15 seconds ahead. Keep a minimum 2-second following distance.',
                                'Check all mirrors regularly and check blind spots before lane changes.',
                                'Anticipate the actions of other drivers — always have an escape plan.',
                            ]} />

                            <SubHeading>Carbon Monoxide</SubHeading>
                            <p>
                                Never run your vehicle engine inside a closed garage. Carbon monoxide is colorless and odorless.
                                Symptoms include tiredness, yawning, dizziness, nausea, and headache.
                            </p>
                        </SectionCard>

                        {/* ===== Section 10: Sharing the Road ===== */}
                        <SectionCard id="section-10" number={10} title="Sharing the Road">
                            <SubHeading>Large Trucks & Buses</SubHeading>
                            <BulletList items={[
                                <><strong>&quot;No Zones&quot;</strong> are the large blind spots around trucks and buses where the driver cannot see you — directly behind, in front, and along the sides.</>,
                                'Do not cut in front of trucks. Their stopping distance is much greater than a car.',
                                'Never pass on the right of a turning truck — they often swing wide to complete turns.',
                                'If you cannot see the truck driver in their side mirror, they cannot see you.',
                            ]} />

                            <SubHeading>Motorcycles</SubHeading>
                            <BulletList items={[
                                <>Give motorcyclists a <strong>full lane width</strong> — never share a lane.</>,
                                'Check mirrors and blind spots before lane changes. Motorcycles are harder to see.',
                                'The most common crash type is a car making a left turn in front of a motorcycle.',
                            ]} />

                            <SubHeading>Bicycles</SubHeading>
                            <BulletList items={[
                                'Bicycles have the same rights as motor vehicles on Nevada roads.',
                                'Give cyclists plenty of space when passing.',
                                'Do not cut across their path when turning right.',
                                'Check for cyclists before opening your car door.',
                            ]} />

                            <SubHeading>Pedestrians</SubHeading>
                            <BulletList items={[
                                'Yield to pedestrians in any marked or unmarked crosswalk.',
                                'Do not pass a vehicle that is stopped at a crosswalk — a pedestrian may be crossing.',
                                'Be especially cautious near schools, playgrounds, and residential areas.',
                            ]} />

                            <SubHeading>When Stopped by Law Enforcement</SubHeading>
                            <BulletList items={[
                                'Slow down, signal right, and pull safely to the right side of the road.',
                                'Turn off the engine, lower your window, and keep your hands visible.',
                                'Remain in the vehicle unless instructed to exit.',
                                'Provide your driver license, proof of insurance, and vehicle registration upon request.',
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
                            Ready to Pass Your Nevada real estate exam?
                        </h2>
                        <p className="text-white/80 text-base md:text-lg mb-8 max-w-2xl mx-auto">
                            Don&apos;t just read the summary — practice with realistic exam questions to make sure you pass on your first try.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button asChild size="lg" className="group bg-white text-[#007aff] hover:bg-blue-50 font-semibold px-6 py-3 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 text-sm md:text-base w-full sm:w-auto min-w-[240px] flex flex-row flex-nowrap items-center justify-center gap-2">
                                <Link href="/nevada-real-estate-practice-test">
                                    <span className="flex items-center gap-2">
                                        <span className="whitespace-nowrap">Take Free Practice Test</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
                                    </span>
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-xl transition-all duration-300 text-sm md:text-base w-full sm:w-auto min-w-[240px] flex flex-row flex-nowrap items-center justify-center gap-2">
                                <Link href="/handbooks/nevada">
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
