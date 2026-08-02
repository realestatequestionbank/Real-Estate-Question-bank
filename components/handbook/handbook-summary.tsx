"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/auth-context';
import { STATES, StateKey } from '@/lib/constants';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { AuthModal } from '@/components/auth/auth-modal';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Image from 'next/image';
import {
    ChevronRight,
    FileText,
    CheckCircle2,
    AlertTriangle,
    BookOpen,
    Car,
    Shield,
    Eye,
    Wine,
    ArrowRight,
    MapPin,
    Sparkles,
    Clock,
    Users,
    Gauge,
    Scale,
    Wrench
} from 'lucide-react';

const SECTIONS = [
    { id: 'section-1', label: "1. Driver\u2019s License" },
    { id: 'section-2', label: '2. Getting a Permit' },
    { id: 'section-3', label: '3. Testing Process' },
    { id: 'section-4', label: '4. License Changes' },
    { id: 'section-5', label: '5. Intro to Driving' },
    { id: 'section-6', label: '6. Navigating Roads' },
    { id: 'section-7', label: '7. Laws & Rules' },
    { id: 'section-8', label: '8. Safe Driving' },
    { id: 'section-9', label: '9. Alcohol & Drugs' },
    { id: 'section-10', label: '10. Insurance & Collisions' },
];

interface HandbookSummaryProps {
    stateKey: string;
    stateName: string;
}

export function HandbookSummary({ stateKey, stateName }: HandbookSummaryProps) {
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
        { label: stateName, href: `/${stateKey}-real-estate-practice-test` },
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
                                href={`/${stateKey}-real-estate-practice-test`}
                                className="inline-flex items-center gap-1 text-sm text-[#007aff] hover:text-[#0056cc] transition-colors mb-3"
                            >
                                <ChevronRight className="w-3.5 h-3.5 rotate-180" />
                                Back to Practice Tests
                            </Link>

                            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                Summary of {stateName} ({STATES[stateKey as StateKey]?.code}) Real Estate Handbook 2026
                            </h1>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-3">
                                A comprehensive, exam-focused summary of the{' '}
                                <Link
                                    href={`/handbooks/${stateKey}`}
                                    className="text-[#007aff] font-medium relative inline-block group"
                                >
                                    official {currentYear} {stateName} Driver Handbook
                                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#007aff] transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                                . We break down all 10 chapters — from getting your permit and license requirements to right-of-way rules, speed limits, DUI laws, and what to do in a collision. Each section highlights the key rules and numbers the {stateName} Real Estate actually tests you on.
                            </p>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                Don&apos;t want to read the summary either?{' '}
                                <Link
                                    href={`/${stateKey}-real-estate-practice-test`}
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
                                    src="/handbook-summary/california/california-handbook-image.png"
                                    alt={`${stateName} Real Estate Driver Handbook ${currentYear}`}
                                    width={200}
                                    height={260}
                                    className="rounded-lg border-2 border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.12),0_2px_8px_rgb(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.15),0_4px_12px_rgb(0,0,0,0.1)] transition-shadow duration-300"
                                    style={{
                                        transform: 'perspective(1000px) rotateY(-5deg)',
                                    }}
                                    priority
                                />
                                {/* Book spine shadow effect */}
                                <div className="absolute -left-1 top-2 bottom-2 w-1 bg-gradient-to-r from-gray-400/40 to-transparent rounded-l-sm" />
                            </div>
                        </div>
                    </div>
                </div>
            </section >

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

                        {/* ===== Section 1: The California Driver's License (pp. 7) ===== */}
                        <SectionCard id="section-1" number={1} title="The California Driver's License">
                            <p>
                                A California real estate license allows you to drive on public roads. Most people need a
                                noncommercial <strong>Class C</strong> real estate license to operate standard vehicles. Driving in
                                California is a <strong>privilege, not a right</strong>.
                            </p>
                            <SubHeading>Card Designations</SubHeading>
                            <BulletList items={[
                                <>
                                    <strong>REAL ID:</strong> Beginning May 2025, your license must be REAL ID compliant (marked with a
                                    bear-and-star) to board domestic flights, enter military bases, and access most federal facilities.
                                </>,
                                <>
                                    <strong>AB 60 Licenses:</strong> California offers real estate licenses for all residents regardless of
                                    immigration status.
                                </>,
                                <>
                                    <strong>Veteran Designation:</strong> Available for eligible veterans — see real-estate.ca.gov/veterans.
                                </>,
                                <>
                                    <strong>Organ Donor:</strong> You may opt in to the organ and tissue donor registry.
                                </>,
                            ]} />
                        </SectionCard>

                        {/* ===== Section 2: Getting an Instruction Permit (pp. 8-10) ===== */}
                        <SectionCard id="section-2" number={2} title="Getting an Instruction Permit and Driver's License">
                            <p>
                                If you do not have a license from California or another state, you must apply for an
                                instruction permit before taking the behind-the-wheel drive test.
                            </p>
                            <SubHeading>What You Need to Apply</SubHeading>
                            <BulletList items={[
                                'Proof of identity (proving who you are).',
                                'Two proofs of California residency.',
                                'Legal full name document (if name differs from identity document).',
                                'Social security number (exceptions may apply).',
                                'Non-refundable application fee.',
                            ]} />

                            <SubHeading>If You Are Under 18</SubHeading>
                            <BulletList items={[
                                <>Must be at least <strong>15½ years old</strong>.</>,
                                'Must complete a real estate exam prep program.',
                                'Parent or guardian must sign the application and accept financial responsibility.',
                                'Wait to use your permit until you start behind-the-wheel driver training with an instructor.',
                            ]} />

                            <SubHeading>Applying for a Driver's License (After Getting Your Permit)</SubHeading>
                            <BulletList items={[
                                <>Practice driving with a California-licensed driver who is at least 18 years old (25 for minors). This person must sit close enough to take control if needed.</>,
                                'Pass a behind-the-wheel drive test.',
                            ]} />

                            <SubHeading>Additional Requirements for Minors</SubHeading>
                            <BulletList items={[
                                <>Must be at least <strong>16 years old</strong>.</>,
                                <>Must hold the permit for at least <strong>6 months</strong> (or turn 18).</>,
                                'Must complete both real estate exam prep and driver training.',
                                <>Must practice driving for at least <strong>50 hours</strong> with a California-licensed driver age 25+, including <strong>10 hours at night</strong>.</>,
                            ]} />

                            <WarningBox title="Provisional Restrictions (First 12 Months)" icon={<AlertTriangle className="w-4 h-4" />}>
                                <p className="text-sm text-gray-700 mb-2">As a provisional driver, you cannot drive:</p>
                                <ul className="text-sm text-gray-700 space-y-1 ml-5 list-disc">
                                    <li>Between <strong>11 p.m. and 5 a.m.</strong></li>
                                    <li>With passengers under 20 years old, unless a licensed driver age 25+ rides with you.</li>
                                    <li>For pay or operate vehicles requiring a commercial license.</li>
                                </ul>
                                <p className="text-sm text-gray-600 mt-2 italic">
                                    Exceptions: medical need (carry physician's note), school activities, work, or driving an immediate family member (carry appropriate note).
                                </p>
                            </WarningBox>
                        </SectionCard>

                        {/* ===== Section 3: The Testing Process (pp. 11-14) ===== */}
                        <SectionCard id="section-3" number={3} title="The Testing Process">
                            <SubHeading>1. Vision Test</SubHeading>
                            <p>Real Estate Exams all applicants. If you wear corrective lenses, your license will have a restriction. If you fail the vision test, your eye doctor must complete a Report of Vision Examination (DL 62).</p>

                            <SubHeading>2. Knowledge Test</SubHeading>
                            <BulletList items={[
                                <>You get <strong>3 attempts</strong> to pass. If you fail all 3, you must reapply.</>,
                                'Minors must wait 7 days to retake a failed test.',
                                <><strong>No testing aids</strong> (no handbook, no cell phone) are allowed.</>,
                            ]} />

                            <SubHeading>3. Behind-the-Wheel Drive Test</SubHeading>
                            <p className="mb-3">
                                You must bring a safe vehicle with valid registration and insurance. The Real Estate examiner will verify safety equipment before the test:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {[
                                    'Driver window must open',
                                    'Windshield — full, clear, unblocked view',
                                    'At least 2 rearview mirrors (one on left side)',
                                    'Working brake lights & turn signals',
                                    'Tires — at least 1/32" tread depth',
                                    'Foot brake — 1" clearance from floorboard',
                                    'Horn — audible from 200 feet',
                                    'Parking brake, Seat belts',
                                ].map((item) => (
                                    <div key={item} className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg">
                                        <CheckCircle2 className="w-4 h-4 text-[#007aff] flex-shrink-0" />
                                        <span className="text-sm text-gray-700">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <InfoBox className="mt-4">
                                <strong>Important:</strong> Advanced driver assistance systems (automated parallel parking, lane departure, adaptive cruise) are <strong>not permitted</strong> during the test. Backup cameras and blind spot monitors may be used but are not a replacement for visual checks.
                            </InfoBox>
                        </SectionCard>

                        {/* ===== Section 4: Changing, Replacing, and Renewing (pp. 14) ===== */}
                        <SectionCard id="section-4" number={4} title="Changing, Replacing, and Renewing Your Driver's License">
                            <BulletList items={[
                                <>If you move, you must notify Real Estate of your new address <strong>within 10 days</strong>.</>,
                                'It is illegal to drive with an expired license.',
                                'If you are out-of-state and cannot renew, you may request a one-year extension before your license expires.',
                                'Limited-term licenses are not eligible for extension.',
                            ]} />
                        </SectionCard>

                        {/* ===== Section 5: An Introduction to Driving (pp. 15-18) ===== */}
                        <SectionCard id="section-5" number={5} title="An Introduction to Driving">
                            <SubHeading>Health and Driving</SubHeading>
                            <BulletList items={[
                                <><strong>Vision:</strong> You must notice hazards in different lighting, judge distances, and read road signs.</>,
                                <><strong>Hearing:</strong> You must hear horns, sirens, and screeching tires. It is <strong>illegal</strong> to wear headsets/earplugs in both ears.</>,
                                <><strong>Fatigue:</strong> Can affect vision and increase reaction time.</>,
                                <><strong>Medications:</strong> Prescription and OTC drugs can impair driving. Know their effects before driving.</>,
                            ]} />

                            <SubHeading>Steering Methods</SubHeading>
                            <BulletList items={[
                                <><strong>Hand-to-Hand (Push/Pull):</strong> Hands at 9 and 3 o'clock (or 8 and 4). Do not cross hands over the middle of the wheel.</>,
                                <><strong>Hand-Over-Hand:</strong> Use for low-speed turns, parking, and skid recovery. Hands at 8 and 4 o'clock.</>,
                                <><strong>One-Hand Steering:</strong> Only when backing up to see behind you (hand at 12 o'clock) or when operating vehicle controls.</>,
                            ]} />

                            <SubHeading>Signaling</SubHeading>
                            <BulletList items={[
                                <>Signal at least <strong>100 feet</strong> before a turn.</>,
                                <>Signal at least <strong>5 seconds</strong> before changing lanes on a freeway.</>,
                                'Signal before pulling next to or away from the curb.',
                                'Signal even when you do not see other vehicles.',
                            ]} />

                            <SubHeading>Using Your Headlights</SubHeading>
                            <BulletList items={[
                                'Required when it is too dark to see from 1,000 feet away.',
                                'From 30 minutes after sunset until 30 minutes before sunrise.',
                                'In adverse weather — if you use windshield wipers, you must use low-beam headlights.',
                                <>Dim high beams within <strong>500 feet</strong> of an oncoming vehicle or <strong>300 feet</strong> of a vehicle you are following.</>,
                                'On mountain roads and tunnels (even on sunny days).',
                                'It is illegal to drive using only parking lights.',
                            ]} />

                            <SubHeading>Using Your Horn</SubHeading>
                            <BulletList items={[
                                'Use to avoid collisions.',
                                'Alert oncoming traffic on narrow mountain roads where you cannot see at least 200 feet ahead.',
                            ]} />

                            <SubHeading>Emergency Flashers</SubHeading>
                            <BulletList items={[
                                'Turn on when you see a collision or hazard ahead.',
                                'If your vehicle breaks down, activate flashers and pull off the road. Do not stop just over a hill or around a curve.',
                            ]} />
                        </SectionCard>

                        {/* ===== Section 6: Navigating the Roads (pp. 19-38) ===== */}
                        <SectionCard id="section-6" number={6} title="Navigating the Roads">
                            <SubHeading>Lane Markings</SubHeading>
                            <div className="space-y-2">
                                {[
                                    { name: 'Single Solid Yellow Line', desc: 'Marks the center of a two-way road. Do not pass.' },
                                    { name: 'Double Solid Yellow Lines', desc: 'Do not pass or drive to the left unless turning left into a driveway, or entering a carpool lane with a designated entrance.' },
                                    { name: 'Broken Yellow Line', desc: 'You may pass if the broken line is next to your lane and it is safe.' },
                                    { name: 'Single Solid White Line', desc: 'Marks traffic lanes going in the same direction, including one-way streets.' },
                                    { name: 'Double Solid White Lines', desc: 'Lane barrier (e.g., carpool lane). Never change lanes over these.' },
                                    { name: 'Broken White Lines', desc: 'Separate same-direction traffic lanes. You may change lanes when safe.' },
                                ].map((line) => (
                                    <div key={line.name} className="p-3 bg-gray-50 rounded-xl">
                                        <span className="font-semibold text-gray-900 text-sm">{line.name}:</span>{' '}
                                        <span className="text-gray-700 text-sm">{line.desc}</span>
                                    </div>
                                ))}
                            </div>

                            <SubHeading>Choosing and Changing Lanes</SubHeading>
                            <BulletList items={[
                                'Use the left lane to pass or turn left. Use the right lane to enter or exit traffic.',
                                'Before changing lanes: signal, check mirrors, check blind spots by looking over your shoulder, and ensure enough space.',
                                'Stay in one lane as much as possible — do not weave in and out of traffic. Last-minute changes increase collision risk.',
                            ]} />

                            <SubHeading>Types of Lanes</SubHeading>
                            <BulletList items={[
                                <><strong>HOV (Carpool) Lane:</strong> Reserved for carpools, buses, motorcycles, or qualifying low-emission vehicles with decals. Do not cross double solid lines to enter/exit — use designated entrances.</>,
                                <><strong>Center Left Turn Lane:</strong> Used only to prepare for and make a left turn or U-turn. You may only drive in it for <strong>200 feet</strong>. It is not a passing lane.</>,
                                <><strong>Turnout Areas:</strong> On two-lane roads, merge into these to let vehicles behind you pass. You <strong>must</strong> use one when 5 or more vehicles are following you.</>,
                                <><strong>Bicycle Lanes:</strong> For bicyclists only. You may enter a bike lane only within 200 feet of a turn, when parking (where permitted), or when entering/leaving the road. Maintain at least <strong>3 feet</strong> of distance from cyclists.</>,
                            ]} />

                            <SubHeading>Right Turns</SubHeading>
                            <BulletList items={[
                                'Drive close to the right edge of the road. Enter a designated right turn lane at the opening.',
                                'Signal about 100 feet before the turn. Look over your right shoulder and reduce speed.',
                                'Stop behind the limit line, then look left-right-left and turn when safe.',
                                'Complete the turn in the right lane — do not swing wide.',
                                <><strong>Right Turn on Red:</strong> Allowed after a complete stop unless a "NO TURN ON RED" sign is posted.</>,
                                <><strong>Right Turn Against Red Arrow:</strong> You may <strong>not</strong> turn. Wait for the green.</>,
                            ]} />

                            <SubHeading>Left Turns</SubHeading>
                            <BulletList items={[
                                'Drive close to the center divider or into the left turn lane.',
                                'Signal 100 feet before the turn. Look over your left shoulder, reduce speed.',
                                'Stop behind the limit line. Keep wheels pointed straight until you begin turning (if hit from behind, you could be pushed into oncoming traffic).',
                                'Complete the turn in the left lane closest to the center divider.',
                                <><strong>Left Turn Against Red:</strong> Only from a one-way street onto a one-way street. Yield to pedestrians and vehicles with the green.</>,
                            ]} />

                            <SubHeading>U-Turns</SubHeading>
                            <p className="mb-2">You may make a U-turn across double yellow lines, in a residential district (if no vehicles within 200 feet), and at intersections on a green light (unless a NO U-TURN sign is posted).</p>
                            <p className="font-semibold text-sm mb-1">Never make a U-turn:</p>
                            <BulletList items={[
                                'Where a NO U-TURN sign is posted.',
                                'At or on a railroad crossing.',
                                'On a one-way street.',
                                'In front of a fire station.',
                                'In business districts (except at an intersection or divider opening).',
                                'When you cannot see clearly for 200 feet in each direction.',
                            ]} />

                            <SubHeading>Merging and Exiting</SubHeading>
                            <BulletList items={[
                                <><strong>Merging:</strong> Be at or near the speed of traffic. Use mirrors and turn signals. Check blind spots. Do not stop unless absolutely necessary. Maintain 3 seconds of following distance.</>,
                                <><strong>Exiting:</strong> Know your exit in advance. Signal 5 seconds (approx. 400 feet) before exiting. Do not cross solid lines.</>,
                            ]} />

                            <SubHeading>Passing</SubHeading>
                            <BulletList items={[
                                'Only pass when you can see clearly — hills or curves should be at least ⅓ mile ahead.',
                                <>Do <strong>not</strong> pass within 100 feet of an intersection, bridge, tunnel, or railroad crossing.</>,
                                'You may pass on the right only on open highways with two or more lanes in your direction, or on one-way streets.',
                                'If being passed, maintain your lane position and speed.',
                            ]} />

                            <SubHeading>Parking on a Hill</SubHeading>
                            <BulletList items={[
                                <><strong>Headed downhill:</strong> Turn front wheels <strong>into the curb</strong> (right).</>,
                                <><strong>Headed uphill:</strong> Turn front wheels <strong>away from the curb</strong> (left) and let the car roll back until the wheel touches the curb.</>,
                                <><strong>No curb (uphill or downhill):</strong> Turn wheels <strong>to the right</strong> so the car would roll off the road.</>,
                                'Always set the parking brake and leave the vehicle in park (or in gear for manual).',
                            ]} />

                            <SubHeading>Colored Curbs</SubHeading>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {[
                                    { color: 'White', rule: 'Pick up or drop off passengers only.', dot: 'bg-gray-100 border border-gray-300' },
                                    { color: 'Green', rule: 'Limited-time parking. Check signs or curb markings for time limit.', dot: 'bg-green-500' },
                                    { color: 'Yellow', rule: 'Loading & unloading only. Non-commercial drivers must stay with vehicle.', dot: 'bg-yellow-400' },
                                    { color: 'Red', rule: 'No stopping, standing, or parking.', dot: 'bg-red-500' },
                                    { color: 'Blue', rule: 'Disabled parking only (with placard or plates).', dot: 'bg-blue-500' },
                                ].map((item) => (
                                    <div key={item.color} className="flex items-start gap-2.5 text-sm p-2.5 bg-gray-50 rounded-lg">
                                        <div className={`w-3.5 h-3.5 ${item.dot} rounded-sm mt-0.5 flex-shrink-0`}></div>
                                        <div><strong>{item.color}:</strong> {item.rule}</div>
                                    </div>
                                ))}
                            </div>

                            <SubHeading>Law Enforcement Stops</SubHeading>
                            <BulletList items={[
                                'Acknowledge the officer by turning on your right turn signal. Pull over to the right shoulder.',
                                'Turn off your radio. Roll down your window. Keep hands in clear view.',
                                'Remain inside unless directed to exit.',
                                'A driver must produce a license, insurance, and registration when stopped.',
                                'In California, only federal law enforcement may ask about immigration status.',
                                'You generally have the right to record police interactions in public, as long as you do not interfere with officers.',
                            ]} />
                        </SectionCard>

                        {/* ===== Section 7: Laws and Rules of the Road (pp. 39-62) ===== */}
                        <SectionCard id="section-7" number={7} title="Laws and Rules of the Road">
                            <SubHeading>Traffic Signals</SubHeading>
                            <div className="space-y-2 mb-4">
                                {[
                                    { light: 'Solid Red', rule: 'STOP. You may turn right after stopping unless a "No Turn on Red" sign is posted.' },
                                    { light: 'Red Arrow', rule: 'STOP. Do not turn. Wait for a green signal.' },
                                    { light: 'Flashing Red', rule: 'Treat as a STOP sign. Stop, then go when safe.' },
                                    { light: 'Solid Yellow', rule: 'CAUTION. The light is about to turn red. Stop if you can do so safely.' },
                                    { light: 'Yellow Arrow', rule: 'Protected turning time is ending. If you cannot stop safely, cautiously complete your turn.' },
                                    { light: 'Flashing Yellow', rule: 'PROCEED WITH CAUTION. Slow down and be alert. You do not need to stop.' },
                                    { light: 'Solid Green', rule: 'GO. But still stop for any vehicle, bicyclist, or pedestrian in the intersection. Do not enter if you cannot clear before it turns red.' },
                                    { light: 'Green Arrow', rule: 'Protected turn. Oncoming traffic is stopped by a red light.' },
                                    { light: 'Traffic Light Not Working', rule: 'Treat as a 4-way stop. Stop and proceed cautiously.' },
                                ].map((item) => (
                                    <div key={item.light} className="p-2.5 bg-gray-50 rounded-lg">
                                        <span className="font-semibold text-gray-900 text-sm">{item.light}:</span>{' '}
                                        <span className="text-gray-700 text-sm">{item.rule}</span>
                                    </div>
                                ))}
                            </div>

                            <SubHeading>Signs</SubHeading>
                            <BulletList items={[
                                <><strong>STOP Sign:</strong> Full stop before the crosswalk or limit line. Check traffic in all directions before proceeding.</>,
                                <><strong>Red YIELD Sign:</strong> Slow down and be ready to stop for any vehicle, bicyclist, or pedestrian.</>,
                                <><strong>DO NOT ENTER / WRONG WAY:</strong> Do not enter. If you see road reflectors shining red at night, you are going the wrong way.</>,
                                <><strong>5-Sided Sign:</strong> School zone — drive slowly and stop for children in crosswalks.</>,
                                <><strong>Diamond-Shaped Sign:</strong> Warns of specific road conditions and dangers ahead.</>,
                                <><strong>Yellow/Black Circular or X-Shaped Sign:</strong> Railroad crossing — look, listen, slow down, and prepare to stop.</>,
                            ]} />

                            <SubHeading>Right-of-Way Rules</SubHeading>
                            <BulletList items={[
                                <><strong>No Signs:</strong> The vehicle that arrives first has right-of-way. If simultaneous, yield to the vehicle on your <strong>right</strong>.</>,
                                <><strong>T-Intersections:</strong> Vehicles on the through road have right-of-way.</>,
                                <><strong>Turning Left:</strong> Yield to all oncoming traffic and pedestrians.</>,
                                <><strong>Roundabouts:</strong> Yield to traffic already in the roundabout. Enter to the right (counter-clockwise). Signal when exiting.</>,
                                <><strong>Pedestrians always have the right-of-way</strong> in marked or unmarked crosswalks. Do not pass a vehicle stopped at a crosswalk.</>,
                            ]} />

                            <SubHeading>Pedestrians Who Are Blind</SubHeading>
                            <BulletList items={[
                                'Pedestrians with guide dogs or white canes have the right-of-way at all times.',
                                'Do not stop in the middle of a crosswalk (forces them into traffic).',
                                'Do not honk at a blind person.',
                                'When a blind person pulls in their cane and steps away, you may proceed.',
                            ]} />

                            <SubHeading>Sharing the Road with Large Vehicles</SubHeading>
                            <BulletList items={[
                                <><strong>Blind Spots (No Zone):</strong> If you cannot see the truck's side mirrors, the driver cannot see you.</>,
                                <><strong>Braking Distance:</strong> A large vehicle at 55 mph can take up to 400 feet to stop (vs. 300 ft for a car). Do not cut in front and slow down.</>,
                                <><strong>Turning:</strong> Rear wheels follow a shorter path than front wheels. A truck may swing wide — do not try to pass on the inside of a turning truck.</>,
                                'Always pass on the left side. Do not drive alongside longer than necessary.',
                            ]} />

                            <SubHeading>Motorcycles</SubHeading>
                            <BulletList items={[
                                'Check for motorcycles when changing lanes — they are harder to see.',
                                'Allow a 3-second following distance.',
                                'Give motorcycles a full lane width. Lane splitting (sharing a lane) is legal in California.',
                                'Check for motorcyclists before opening your door.',
                            ]} />

                            <SubHeading>Emergency Vehicles</SubHeading>
                            <InfoBox>
                                Yield to emergency vehicles using sirens/lights. Pull to the <strong>right edge</strong> of the road and stop until they pass.
                                If you are in an intersection, continue through and then pull over.
                                It is illegal to follow within <strong>300 feet</strong> of an emergency vehicle with sirens/lights on.
                                When approaching a stationary emergency vehicle with flashing lights, move over and slow down.
                            </InfoBox>

                            <SubHeading>School Buses</SubHeading>
                            <BulletList items={[
                                <><strong>Flashing yellow lights:</strong> The bus is preparing to stop — slow down and prepare to stop.</>,
                                <><strong>Flashing red lights:</strong> You <strong>must stop</strong> from both directions until children are safe and lights stop. Fine up to $1,000 and 1-year suspension for violations.</>,
                                'You do not need to stop if the bus is on the other side of a divided or multilane highway (2+ lanes each direction).',
                            ]} />

                            <SubHeading>Speed Limits</SubHeading>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                                {[
                                    { limit: '65 mph', where: 'Most California highways (unless posted otherwise)' },
                                    { limit: '55 mph', where: 'Two-lane undivided highways and vehicles towing trailers' },
                                    { limit: '25 mph', where: 'Business or residential districts; near schools (within 500 ft when children are present)' },
                                    { limit: '15 mph', where: 'Blind intersections, alleys, and near railroad crossings (if you cannot see tracks for 400 ft)' },
                                ].map((item) => (
                                    <div key={item.limit} className="p-2.5 bg-gray-50 rounded-lg text-sm">
                                        <span className="font-bold text-[#007aff]">{item.limit}</span>
                                        <span className="text-gray-600"> — {item.where}</span>
                                    </div>
                                ))}
                            </div>

                            <SubHeading>Work Zones & Fines</SubHeading>
                            <BulletList items={[
                                'Slow down, allow extra space, and watch for lane closures in construction zones.',
                                'Fines for violations in a work zone can be $1,000 or more.',
                                'Fines are doubled in Safety Enhanced-Double Fine Zones and in construction zones when workers are present.',
                            ]} />

                            <SubHeading>Points on Your Record</SubHeading>
                            <BulletList items={[
                                <>Your license may be suspended if you accumulate: <strong>4 points in 12 months, 6 in 24, or 8 in 36</strong>.</>,
                                'Traffic convictions stay on your record for 36 months or longer.',
                                'Courts may offer traffic violator school (once per 18 months) to keep a 1-point violation off your insurance.',
                            ]} />
                        </SectionCard>

                        {/* ===== Section 8: Safe Driving (pp. 63-77) ===== */}
                        <SectionCard id="section-8" number={8} title="Safe Driving">
                            <SubHeading>Scanning & Following Distance</SubHeading>
                            <BulletList items={[
                                <>Scan the road at least <strong>10 to 15 seconds</strong> ahead of your vehicle.</>,
                                <>Use the <strong>3-second rule</strong> for following distance. Increase to 4+ seconds in bad conditions.</>,
                                'If a tailgater is behind you, maintain speed and merge right when safe to let them pass.',
                            ]} />

                            <SubHeading>Blind Spots</SubHeading>
                            <BulletList items={[
                                'Blind spots are at the sides, slightly behind the driver.',
                                'Check by looking over your shoulder (turn head only, not the whole body or steering wheel).',
                                'Check blind spots before: changing lanes, turning, merging, backing up, leaving a parking space, opening your door.',
                            ]} />

                            <SubHeading>Driving in Adverse Conditions</SubHeading>
                            <div className="space-y-3">
                                <ConditionItem emoji="🌧️" name="Wet Roads & Hydroplaning">
                                    Reduce speed by 5-10 mph on wet roads. Hydroplaning occurs when tires lose contact with the road. If it happens, slow down gradually — <strong>do not brake suddenly</strong>.
                                </ConditionItem>
                                <ConditionItem emoji="❄️" name="Snow & Ice">
                                    Reduce speed by half on packed snow. On ice, drive no faster than 5 mph. Bridges and overpasses freeze first.
                                </ConditionItem>
                                <ConditionItem emoji="🌫️" name="Fog or Heavy Smoke">
                                    Use <strong>low-beam headlights</strong>. Never use high beams — they reflect back and cause glare. Increase following distance. If too thick, pull off the road and use emergency flashers.
                                </ConditionItem>
                                <ConditionItem emoji="☀️" name="Sun Glare">
                                    Wear polarized sunglasses. Keep windshield clean. Use your visor. Maintain extra following distance.
                                </ConditionItem>
                                <ConditionItem emoji="💨" name="High Winds">
                                    Reduce speed. Hold the wheel firmly. Do not use cruise control. Watch for debris.
                                </ConditionItem>
                            </div>

                            <SubHeading>Skid Recovery</SubHeading>
                            <BulletList items={[
                                <><strong>Slippery surface skid:</strong> Slowly remove foot from accelerator. Do NOT brake. Turn the steering wheel in the direction of the skid.</>,
                                <><strong>Locked wheel skid:</strong> With ABS — apply firm brake pressure. Without ABS — quickly pump the brakes.</>,
                            ]} />

                            <SubHeading>Seat Belts & Child Safety</SubHeading>
                            <BulletList items={[
                                'All vehicle occupants must wear seat belts. Wear the shoulder harness across your chest, not under your arm.',
                                <><strong>Under 2 years old</strong> (and under 40 lbs, under 3\'4"): Rear-facing child seat. May not ride in front with an airbag.</>,
                                <><strong>Under 8 years old</strong> (or under 4\'9"): Secured in a child restraint system in the rear seat.</>,
                                <><strong>8+ years old</strong> (or at least 4\'9"): May use a standard seat belt.</>,
                                'Sit at least 10 inches from the steering wheel (air bag distance).',
                            ]} />

                            <SubHeading>Emergencies</SubHeading>
                            <BulletList items={[
                                <><strong>Tire Blowout:</strong> Do not panic. Hold wheel firmly, maintain speed briefly, gradually release accelerator, steer straight, pull off when safe.</>,
                                <><strong>Wheels Drift Off Pavement:</strong> Grip wheel firmly, release accelerator, brake gently, check traffic, carefully steer back.</>,
                                <><strong>Disabled on Freeway:</strong> Pull to right shoulder. Exit from the right side. Dial 511 or find a call box. Stay inside with seatbelt on until help arrives.</>,
                            ]} />

                            <SubHeading>Distracted Driving & Cell Phones</SubHeading>
                            <BulletList items={[
                                'Driving while using a handheld cell phone is unsafe and illegal.',
                                'Adults may use a phone only in hands-free mode — mount it on the windshield, dashboard, or center console. Use single-swipe only.',
                                <><strong>Minors may NOT use a cell phone at all while driving</strong>, except for emergency calls.</>,
                                'Do not text, email, or read messages while driving.',
                            ]} />

                            <SubHeading>Carbon Monoxide</SubHeading>
                            <p>Never start your vehicle inside a closed garage. Symptoms of carbon monoxide poisoning include tiredness, yawning, dizziness, nausea, and headache.</p>
                        </SectionCard>

                        {/* ===== Section 9: Alcohol and Drugs (pp. 78-81) ===== */}
                        <SectionCard id="section-9" number={9} title="Alcohol and Drugs">
                            <WarningBox title="BAC Limits" icon={<AlertTriangle className="w-4 h-4" />}>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• <strong>0.08%</strong> or higher — illegal if you are 21+</li>
                                    <li>• <strong>0.01%</strong> or higher — illegal if you are under 21 (Zero Tolerance)</li>
                                    <li>• <strong>0.01%</strong> or higher — if on DUI probation</li>
                                    <li>• <strong>0.04%</strong> or higher — if driving a commercial vehicle or passenger for hire</li>
                                </ul>
                            </WarningBox>

                            <p>
                                California DUI laws apply to both alcohol <strong>and drugs</strong> — including prescription and over-the-counter
                                medications. The law does not differentiate between illegal drugs and legal medications. Even one drink
                                can impair your ability to drive safely.
                            </p>

                            <SubHeading>Implied Consent</SubHeading>
                            <BulletList items={[
                                'By driving in California, you consent to a breath, blood, or urine test if arrested for DUI.',
                                <><strong>Refusal to test</strong> results in a 1-year license suspension or revocation.</>,
                            ]} />

                            <SubHeading>Open Container Law</SubHeading>
                            <BulletList items={[
                                'Illegal to drink alcohol or smoke/eat cannabis while driving or riding as a passenger.',
                                'All alcohol/cannabis containers must be sealed and unopened. Open containers must be stored in the trunk.',
                                'Illegal to keep an open container of alcohol in your glove box.',
                            ]} />

                            <SubHeading>DUI Penalties</SubHeading>
                            <BulletList items={[
                                '1-year license suspension or revocation.',
                                'Must complete a DUI program and file an SR 22/SR 1P insurance certificate.',
                                'Up to 6 months in jail and fines.',
                                'Vehicle may be impounded.',
                                'All DUI convictions remain on your record for 10 years.',
                            ]} />

                            <SubHeading>Drivers Under 21</SubHeading>
                            <BulletList items={[
                                'May not carry alcohol in a vehicle unless a person 21+ is present and the container is sealed.',
                                'If alcohol is found in your vehicle, it may be impounded for 30 days + fine + 1-year license suspension.',
                                'A DUI conviction at 0.01% BAC or higher results in 1-year revocation.',
                            ]} />
                        </SectionCard>

                        {/* ===== Section 10: Financial Responsibility, Insurance, and Collisions (pp. 82-84) ===== */}
                        <SectionCard id="section-10" number={10} title="Financial Responsibility, Insurance & Collisions">
                            <SubHeading>Minimum Insurance Requirements</SubHeading>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-3">
                                {[
                                    { amount: '$30,000', desc: 'Single death or injury' },
                                    { amount: '$60,000', desc: 'Death or injury to more than one person' },
                                    { amount: '$15,000', desc: 'Property damage' },
                                ].map((item) => (
                                    <div key={item.amount} className="text-center p-3 bg-gray-50 rounded-xl">
                                        <div className="text-lg font-bold text-[#007aff]">{item.amount}</div>
                                        <div className="text-xs text-gray-600">{item.desc}</div>
                                    </div>
                                ))}
                            </div>
                            <BulletList items={[
                                'You must carry proof of insurance whenever you drive.',
                                <>Driving without insurance: your license may be suspended for <strong>up to 4 years</strong> if you are in a collision, regardless of fault.</>,
                                'Parents / guardians are financially responsible for drivers under 18.',
                            ]} />

                            <SubHeading>What to Do if You Are in a Collision</SubHeading>
                            <BulletList items={[
                                <><strong>You must stop.</strong> Failing to stop is a hit-and-run — a serious crime.</>,
                                'Call 911 if anyone is hurt.',
                                'Move vehicles out of traffic if no one is injured.',
                                'Exchange license, registration, insurance, and address with the other driver.',
                                <>Report to law enforcement within <strong>24 hours</strong> if anyone is injured or killed.</>,
                                <>Report to Real Estate within <strong>10 days</strong> (using SR 1 form) if the collision caused $1,000+ in damage, or anyone was injured or killed — regardless of who was at fault.</>,
                                'If you hit a parked car and cannot find the owner, leave a note and report to law enforcement.',
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
                            Ready to Pass Your real estate exam?
                        </h2>
                        <p className="text-white/80 text-base md:text-lg mb-8 max-w-2xl mx-auto">
                            Don't just read the summary — practice with realistic exam questions to make sure you pass on your first try.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button asChild size="lg" className="group bg-white text-[#007aff] hover:bg-blue-50 font-semibold px-6 py-3 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 text-sm md:text-base w-full sm:w-auto min-w-[240px] flex flex-row flex-nowrap items-center justify-center gap-2">
                                <Link href={`/${stateKey}-real-estate-practice-test`}>
                                    <span className="flex items-center gap-2">
                                        <span className="whitespace-nowrap">Take Free Practice Test</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
                                    </span>
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-xl transition-all duration-300 text-sm md:text-base w-full sm:w-auto min-w-[240px] flex flex-row flex-nowrap items-center justify-center gap-2">
                                <Link href={`/handbooks/${stateKey}`}>
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
