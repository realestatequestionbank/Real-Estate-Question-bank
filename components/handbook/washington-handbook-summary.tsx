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
    { id: 'section-1', label: "1. Driver's License" },
    { id: 'section-2', label: '2. Getting Licensed' },
    { id: 'section-3', label: '3. Vehicle & Maintenance' },
    { id: 'section-4', label: '4. Right-of-Way' },
    { id: 'section-5', label: '5. Signs & Signals' },
    { id: 'section-6', label: '6. Navigating Roads' },
    { id: 'section-7', label: '7. Speed & Parking' },
    { id: 'section-8', label: '8. Safe Driving' },
    { id: 'section-9', label: '9. Alcohol & Drugs' },
    { id: 'section-10', label: '10. Crashes & Safety' },
];

export function WashingtonHandbookSummary() {
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
        { label: 'Washington', href: '/washington-real-estate-practice-test' },
        { label: 'DOL Handbook Summary', href: null },
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
                                href="/washington-real-estate-practice-test"
                                className="inline-flex items-center gap-1 text-sm text-[#007aff] hover:text-[#0056cc] transition-colors mb-3"
                            >
                                <ChevronRight className="w-3.5 h-3.5 rotate-180" />
                                Back to Practice Tests
                            </Link>

                            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                Summary of Washington (WA) DOL Handbook 2026
                            </h1>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-3">
                                A comprehensive, exam-focused summary of the{' '}
                                <Link
                                    href="/handbooks/washington"
                                    className="text-[#007aff] font-medium relative inline-block group"
                                >
                                    official {currentYear} Washington Driver Guide
                                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#007aff] transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                                . We break down all the essential chapters — from getting your license and right-of-way rules to speed limits, DUI/THC laws, and what to do in a crash. Each section highlights the key rules and numbers the Washington DOL actually tests you on.
                            </p>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                Don&apos;t want to read the summary either?{' '}
                                <Link
                                    href="/washington-real-estate-practice-test"
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
                                {/* We will use a generic or missing image placeholder for now, similar to Texas/California */}
                                <Image
                                    src="/handbook-summary/washington/washington-handbook-image.png"
                                    alt="Washington DOL Driver Guide 2026"
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

                        {/* ===== Section 1: Your Washington Driver's License ===== */}
                        <SectionCard id="section-1" number={1} title="Your Washington Driver's License">
                            <p>
                                Driving in Washington is a privilege. You must have a valid Washington driver license to drive legally on public roads.
                                All licenses, permits, and ID cards have an assigned Washington number (WDL Number).
                            </p>
                            <SubHeading>Types of Driver Licenses & Permits</SubHeading>
                            <BulletList items={[
                                <>
                                    <strong>Instruction Permit:</strong> Required before you can practice driving on public roads. You can apply as early as age 15 if enrolled in an approved driver training course, or age 15½ if not. It is valid for 1 year.
                                </>,
                                <>
                                    <strong>Intermediate Driver License (IDL):</strong> Issued to teens aged 16–17. You must have held a permit for at least 6 months and completed 50 hours of practice driving (10 hours at night).
                                </>,
                                <>
                                    <strong>Standard Driver License:</strong> The basic license (Class C) allows you to drive passenger vehicles. Valid for up to 6 years.
                                </>,
                                <>
                                    <strong>Enhanced Driver License (EDL):</strong> Meets federal REAL ID standards and allows you to travel domestically by air or cross U.S. borders by land/sea without a passport.
                                </>,
                            ]} />

                            <SubHeading>Intermediate Driver License (IDL) Restrictions</SubHeading>
                            <WarningBox title="Crucial Rules for Under 18" icon={<AlertTriangle className="w-4 h-4" />}>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• <strong>First 6 months:</strong> No passengers under age 20 except immediate family members.</li>
                                    <li>• <strong>After 6 months:</strong> No more than 3 passengers under age 20 except immediate family members.</li>
                                    <li>• <strong>Nighttime Driving:</strong> No driving between <strong>1 a.m. and 5 a.m.</strong> unless accompanied by a licensed driver who is at least 25 years old.</li>
                                    <li>• <strong>Cell Phones:</strong> NO use of wireless devices, even hands-free, except for reporting emergencies.</li>
                                </ul>
                            </WarningBox>

                            <SubHeading>New Residents</SubHeading>
                            <p>
                                If you move to Washington, you must obtain a WA driver license within <strong>30 days</strong> of establishing residency. You must also register your vehicle within 30 days.
                            </p>
                        </SectionCard>

                        {/* ===== Section 2: Getting Licensed ===== */}
                        <SectionCard id="section-2" number={2} title="Getting Licensed & Testing">
                            <p>
                                The Washington DOL requires all new applicants to pass a vision screening, a knowledge test, and a driving skills exam. Testing is typically conducted through approved driver training schools or testing locations.
                            </p>
                            <SubHeading>Knowledge Test (Written Exam)</SubHeading>
                            <BulletList items={[
                                'Consists of 40 multiple-choice questions based on the Washington Driver Guide.',
                                <>You must answer at least <strong>32 questions correctly (80%)</strong> to pass.</>,
                                'Your knowledge exam score is valid for 2 years.',
                                'Test covers traffic laws, signs, safe driving practices, and road rules.',
                            ]} />

                            <SubHeading>Driving Skills Exam</SubHeading>
                            <BulletList items={[
                                'You must provide a safe vehicle with valid registration and insurance.',
                                'Tested maneuvers include holding proper lane position, entering/leaving traffic, speed control, turning, backing up, and parking.',
                                'Before the test, the examiner will check your vehicle\'s safety equipment (brakes, lights, signals, windshield, tires).',
                            ]} />

                            <SubHeading>License Maintenance</SubHeading>
                            <BulletList items={[
                                <>If you move, you must notify the DOL of your new address within <strong>10 days</strong>.</>,
                                <>When applying for your license, you can choose to join the <strong>Organ Donor Registry</strong>.</>,
                                'You can renew your standard license online or in person. Renewing before it expires prevents late fees.',
                            ]} />
                        </SectionCard>

                        {/* ===== Section 3: Vehicle & Maintenance ===== */}
                        <SectionCard id="section-3" number={3} title="Vehicle Maintenance & Insurance">
                            <SubHeading>Required Vehicle Equipment</SubHeading>
                            <p>To drive legally on Washington roads, your vehicle must be safe. You must ensure the following are in good working order:</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 mb-4">
                                {[
                                    'Headlights and Taillights',
                                    'Brake lights and Turn Signals',
                                    'Windshield wipers and glass without cracks that block vision',
                                    'Braking system and Parking brake',
                                    'Working horn and Exhaust system',
                                    'Tires with at least 2/32" tread depth',
                                ].map((item) => (
                                    <div key={item} className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg">
                                        <CheckCircle2 className="w-4 h-4 text-[#007aff] flex-shrink-0" />
                                        <span className="text-sm text-gray-700">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <SubHeading>Insurance Requirements</SubHeading>
                            <BulletList items={[
                                'You must have liability insurance to drive in Washington state.',
                                'You are required to carry proof of insurance in your vehicle at all times and present it to law enforcement when requested.',
                                'Minimum limits: $25,000 for injuries/death to one person, $50,000 for two or more persons, and $10,000 for property damage.',
                            ]} />

                            <SubHeading>Occupant Protection</SubHeading>
                            <BulletList items={[
                                'Washington law requires that every passenger and the driver be securely fastened with a seat belt.',
                                <>Children under 13 years old <strong>must ride in the back seat</strong>.</>,
                                'Children must use a child safety seat until they are at least 4\'9" tall, regardless of age.',
                            ]} />
                        </SectionCard>

                        {/* ===== Section 4: Right-of-Way ===== */}
                        <SectionCard id="section-4" number={4} title="Right-of-Way Rules">
                            <p>
                                The law does not give anyone the right-of-way. It only says who must <strong>yield</strong> it. When in doubt, yield the right-of-way to avoid a collision.
                            </p>

                            <SubHeading>General Yielding Rules</SubHeading>
                            <div className="space-y-2">
                                {[
                                    { scenario: 'Uncontrolled Intersections', rule: 'Yield to the vehicle that arrives first. If arriving at the same time, yield to the vehicle on your right.' },
                                    { scenario: 'Turning Left', rule: 'Always yield to oncoming traffic and pedestrians.' },
                                    { scenario: 'Entering from a Driveway', rule: 'Stop before the sidewalk and yield to all pedestrians and approaching vehicles on the street.' },
                                    { scenario: 'Roundabouts', rule: 'Yield to traffic already in the circle. Enter to the right and drive counter-clockwise.' },
                                ].map((item) => (
                                    <div key={item.scenario} className="p-3 bg-gray-50 rounded-xl">
                                        <span className="font-semibold text-gray-900 text-sm">{item.scenario}:</span>{' '}
                                        <span className="text-gray-700 text-sm">{item.rule}</span>
                                    </div>
                                ))}
                            </div>

                            <SubHeading>Pedestrians and Bicyclists</SubHeading>
                            <BulletList items={[
                                'Pedestrians and bicyclists have the right-of-way at all intersections and crosswalks (marked or unmarked).',
                                'It is illegal to pass a vehicle that is stopped for a pedestrian or bicyclist.',
                                'Bicyclists have the same rights and responsibilities as people driving motor vehicles.',
                            ]} />

                            <SubHeading>School Buses</SubHeading>
                            <WarningBox title="Stopping for School Buses" icon={<AlertTriangle className="w-4 h-4" />}>
                                <p className="text-sm text-gray-700">You must stop for a school bus with its red lights flashing and stop sign extended <strong>WHETHER you are approaching it from the front or driving behind it</strong>. You must remain stopped until the lights stop flashing.</p>
                                <p className="text-sm text-gray-700 mt-2"><strong>Exception:</strong> You do not need to stop if you are traveling on the opposite side of a roadway that has <strong>three or more marked traffic lanes</strong>, or is separated by a median or physical barrier.</p>
                            </WarningBox>

                            <SubHeading>Emergency Vehicles & Move Over Law</SubHeading>
                            <BulletList items={[
                                'You must pull over to the right edge of the road and stop for any emergency vehicle with sirens or flashing lights.',
                                <><strong>Move Over Law:</strong> If you approach a stationary emergency vehicle, tow truck, or highway worker vehicle with flashing lights, you must move over at least one lane <strong>or</strong> slow down to <strong>10 mph below the posted speed limit</strong>.</>,
                            ]} />
                        </SectionCard>

                        {/* ===== Section 5: Signs & Signals ===== */}
                        <SectionCard id="section-5" number={5} title="Traffic Signals, Signs & Lines">
                            <SubHeading>Traffic Signals</SubHeading>
                            <div className="space-y-2 mb-4">
                                {[
                                    { light: 'Solid Red', rule: 'Complete stop. Right turn on red is permitted after stopping unless a sign says otherwise.' },
                                    { light: 'Red Arrow', rule: 'Stop. Do not turn in the direction the arrow is pointing.' },
                                    { light: 'Flashing Red', rule: 'Treat it exactly like a STOP sign. Stop, look, and yield.' },
                                    { light: 'Solid Yellow', rule: 'Caution. The light is about to turn red. Stop if you can do so safely.' },
                                    { light: 'Flashing Yellow', rule: 'Slow down and proceed with caution. Be ready to stop.' },
                                    { light: 'Flashing Yellow Arrow', rule: 'You may turn left, but it is unprotected. You must yield to oncoming traffic.' },
                                    { light: 'Solid Green Arrow', rule: 'Protected turn. Proceed in the direction of the arrow.' },
                                ].map((item) => (
                                    <div key={item.light} className="p-2.5 bg-gray-50 rounded-lg">
                                        <span className="font-semibold text-gray-900 text-sm">{item.light}:</span>{' '}
                                        <span className="text-gray-700 text-sm">{item.rule}</span>
                                    </div>
                                ))}
                            </div>

                            <SubHeading>Sign Shapes and Colors</SubHeading>
                            <BulletList items={[
                                <><strong>Octagon (Red):</strong> Always a Stop Sign.</>,
                                <><strong>Triangle (Red/White):</strong> Yield Sign.</>,
                                <><strong>Diamond (Yellow/Orange):</strong> Warning conditions ahead (curves, hills, crosswalks, construction).</>,
                                <><strong>Rectangle (White/Black):</strong> Regulatory signs (speed limits, do not pass, lane use).</>,
                                <><strong>Pentagon (Yellow-Green):</strong> School zone or crossing. Slow down and watch for children.</>,
                            ]} />

                            <SubHeading>Pavement Markings</SubHeading>
                            <BulletList items={[
                                <><strong>Solid Yellow Lines:</strong> Mark the left edge of one-way roads and separate traffic moving in opposite directions. Do not cross to pass.</>,
                                <><strong>Broken Yellow Lines:</strong> You may pass if the broken line is on your side.</>,
                                <><strong>Solid White Lines:</strong> Mark the right edge of the road or separate lanes of traffic moving in the same direction. Lane changes are discouraged over solid white lines.</>,
                                <><strong>HOV (Carpool) Lanes:</strong> Marked by a diamond shape. Reserved for vehicles with the required number of occupants, buses, or motorcycles.</>,
                            ]} />
                        </SectionCard>

                        {/* ===== Section 6: Navigating Roads ===== */}
                        <SectionCard id="section-6" number={6} title="Turning & Passing">
                            <SubHeading>Signaling</SubHeading>
                            <BulletList items={[
                                <>You must signal at least <strong>100 feet sebelum turning, changing lanes, or pulling to the side of the road</strong>.</>,
                                'Use left/right turn indicators, or use arm signals in bright sunlight or if your vehicle’s lights fail.',
                            ]} />

                            <SubHeading>Turning Rules</SubHeading>
                            <BulletList items={[
                                'Turn from the lane closest to the direction you want to go. For a right turn, use the far-right lane. For a left turn, use the far-left lane or center left-turn lane.',
                                'Turn into the lane closest to the one you came from. Do not swing wide.',
                                <><strong>Center Left-Turn Lanes:</strong> You cannot travel more than <strong>300 feet</strong> in a center left-turn lane. It is only for making left turns.</>,
                            ]} />

                            <SubHeading>Passing Rules</SubHeading>
                            <BulletList items={[
                                'Pass on the left. You may pass on the right if the vehicle you are passing is making a left turn (and there is a lane for you to do so).',
                                'Never pass on the shoulder.',
                                'When passing on a two-lane road, make sure you have enough space to complete the pass and return to your lane before an oncoming vehicle gets within 200 feet.',
                                'It is illegal to pass on hills, curves, or within intersections/railroad crossings where your view is obstructed.',
                            ]} />
                        </SectionCard>

                        {/* ===== Section 7: Speed & Parking ===== */}
                        <SectionCard id="section-7" number={7} title="Speed Limits & Parking">
                            <SubHeading>Washington Maximum Speed Limits</SubHeading>
                            <p className="mb-3 text-sm italic">Unless otherwise posted, the maximum speed limits in Washington are:</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                                {[
                                    { limit: '20 mph', where: 'School zones' },
                                    { limit: '25 mph', where: 'Streets of cities and towns' },
                                    { limit: '50 mph', where: 'County roads' },
                                    { limit: '60 mph', where: 'State highways' },
                                ].map((item) => (
                                    <div key={item.limit} className="p-2.5 bg-gray-50 rounded-lg text-sm">
                                        <span className="font-bold text-[#007aff]">{item.limit}</span>
                                        <span className="text-gray-600"> — {item.where}</span>
                                    </div>
                                ))}
                            </div>
                            <BulletList items={[
                                'The speed limit is the maximum legal speed under ideal conditions. You must lower your speed if roads are wet, icy, or traffic is heavy.',
                            ]} />

                            <SubHeading>Parking Rules</SubHeading>
                            <BulletList items={[
                                <>Do not park within <strong>15 feet</strong> of a fire hydrant.</>,
                                <>Do not park within <strong>20 feet</strong> of a pedestrian crosswalk.</>,
                                <>Do not park within <strong>30 feet</strong> of a traffic signal, stop sign, or yield sign.</>,
                                <>Do not park within <strong>50 feet</strong> of a railroad crossing.</>,
                                <>Your wheels must be within <strong>12 inches</strong> of the curb when parallel parking.</>,
                            ]} />

                            <SubHeading>Parking on Hills</SubHeading>
                            <BulletList items={[
                                <><strong>Uphill with a curb:</strong> Turn your steering wheel <strong>AWAY</strong> from the curb.</>,
                                <><strong>Downhill with a curb:</strong> Turn your steering wheel <strong>TOWARD</strong> the curb.</>,
                                <><strong>Uphill or Downhill with NO curb:</strong> Turn your steering wheel <strong>TOWARD</strong> the edge of the road.</>,
                                'Always set the emergency parking brake.',
                            ]} />
                        </SectionCard>

                        {/* ===== Section 8: Safe Driving ===== */}
                        <SectionCard id="section-8" number={8} title="Safe Driving Habits">
                            <SubHeading>Scanning and Space</SubHeading>
                            <BulletList items={[
                                <>Scan the road at least <strong>15 seconds ahead</strong> of your vehicle.</>,
                                'Check your mirrors every 5-8 seconds to see what is happening around you.',
                                <>Maintain a minimum following distance of <strong>4 seconds</strong> behind the vehicle in front of you. Increase this distance at high speeds or in bad weather.</>,
                                'Check your blind spots by looking over your shoulder before changing lanes.',
                            ]} />

                            <SubHeading>Distracted Driving Laws</SubHeading>
                            <WarningBox title="Cell Phone Law" icon={<AlertTriangle className="w-4 h-4" />}>
                                <p className="text-sm text-gray-700">In Washington, it is illegal for ANY driver to hold a wireless communication device to their ear, read, or send text messages while driving. This includes while stopped in traffic or at a stoplight. Drivers 18+ may use hands-free devices, but teen drivers with an IDL may not use any device unless reporting an emergency.</p>
                            </WarningBox>

                            <SubHeading>Adverse Conditions</SubHeading>
                            <div className="space-y-3">
                                <ConditionItem emoji="🌧️" name="Rain & Hydroplaning">
                                    Roads are most slippery when it first starts to rain because oil drops mix with water. Hydroplaning occurs when tires ride on a layer of water, losing contact with the road (starting at around 35 mph). If you hydroplane, ease off the gas, DO NOT hit the brakes, and keep the steering wheel straight.
                                </ConditionItem>
                                <ConditionItem emoji="🌫️" name="Fog">
                                    Use low-beam headlights. High beams will reflect back off the fog and blind you.
                                </ConditionItem>
                                <ConditionItem emoji="❄️" name="Winter Roads">
                                    Bridges and overpasses freeze first. Reduce speed on packed snow and ice.
                                </ConditionItem>
                            </div>
                        </SectionCard>

                        {/* ===== Section 9: Alcohol & Drugs ===== */}
                        <SectionCard id="section-9" number={9} title="Impaired Driving (Alcohol & Cannabis)">
                            <p>
                                Alcohol and cannabis (THC) deeply impair your judgment, reaction time, and vision. In Washington, Driving Under the Influence (DUI) laws cover <strong>both</strong> alcohol and drugs (including legal marijuana and prescription meds).
                            </p>

                            <SubHeading>Legal Limits (BAC & THC)</SubHeading>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                <div className="p-4 bg-red-50 rounded-xl border border-red-100">
                                    <h4 className="font-bold text-red-800 mb-2">Adults (21 & Over)</h4>
                                    <ul className="text-sm text-red-900 space-y-1">
                                        <li>• <strong>BAC: 0.08%</strong> or higher</li>
                                        <li>• <strong>THC: 5.00 ng/mL</strong> or higher</li>
                                    </ul>
                                </div>
                                <div className="p-4 bg-orange-50 rounded-xl border border-orange-100">
                                    <h4 className="font-bold text-orange-800 mb-2">Minors (Under 21)</h4>
                                    <ul className="text-sm text-orange-900 space-y-1">
                                        <li>• <strong>BAC: 0.02%</strong> or higher</li>
                                        <li>• <strong>THC: Anything above 0.00 ng/mL</strong></li>
                                    </ul>
                                </div>
                            </div>
                            <BulletList items={[
                                'Even if your levels are below the legal limit, you can still be arrested for a DUI if the officer determines your driving is impaired.',
                            ]} />

                            <SubHeading>Implied Consent Law</SubHeading>
                            <BulletList items={[
                                'When you drive in Washington, you have agreed to take a breath or blood test to determine the alcohol/drug content of your blood if arrested on suspicion of DUI.',
                                <>If you refuse the test, your license will be revoked for at least <strong>1 year</strong> (or until age 21 for minors). This goes into effect even if you are not convicted of a DUI.</>,
                            ]} />

                            <SubHeading>Open Container Law</SubHeading>
                            <BulletList items={[
                                'It is illegal to drink alcohol or consume cannabis while driving or riding as a passenger.',
                                'Any open container of alcohol or cannabis must be kept in the trunk. If the vehicle lacks a trunk, it must be kept in an area not normally occupied by passengers.',
                            ]} />
                        </SectionCard>

                        {/* ===== Section 10: Crashes & Safety ===== */}
                        <SectionCard id="section-10" number={10} title="Crashes & Emergencies">
                            <SubHeading>What to do in a Collision</SubHeading>
                            <BulletList items={[
                                <><strong>You must stop.</strong> Leaving the scene of a crash is a hit-and-run crime.</>,
                                'Move your vehicle off the roadway if no one is injured and your vehicle is drivable.',
                                'Call 911 if there are injuries, fatalities, or vehicles blocking traffic.',
                                'Exchange: Name, address, vehicle license number, and insurance information with all drivers involved.',
                                <>If the collision results in injury, death, or property damage of <strong>$1,000 or more</strong>, and police do not investigate the scene, you must file a Collision Report within <strong>4 days</strong>.</>,
                                'If you hit an unattended car, try to find the owner. If you can\'t, leave a securely attached note with your contact info.',
                            ]} />

                            <SubHeading>Vehicle Emergencies</SubHeading>
                            <BulletList items={[
                                <><strong>Brake Failure:</strong> Pump the brakes several times to rebuild pressure. If that fails, use the parking brake slowly. Shift into a lower gear.</>,
                                <><strong>Tire Blowout:</strong> Grip the steering wheel firmly and keep the vehicle going straight. Take your foot off the gas and slow down gradually. Do not brake hard.</>,
                                <><strong>Gas Pedal Sticks:</strong> Keep your eyes on the road and quickly shift to Neutral. Pull off the road when safe and turn off the engine.</>,
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
                            Ready to Pass Your Washington real estate exam?
                        </h2>
                        <p className="text-white/80 text-base md:text-lg mb-8 max-w-2xl mx-auto">
                            Don&apos;t just read the summary — practice with realistic exam questions to make sure you pass on your first try.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button asChild size="lg" className="group bg-white text-[#007aff] hover:bg-blue-50 font-semibold px-6 py-3 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 text-sm md:text-base w-full sm:w-auto min-w-[240px] flex flex-row flex-nowrap items-center justify-center gap-2">
                                <Link href="/washington-real-estate-practice-test">
                                    <span className="flex items-center gap-2">
                                        <span className="whitespace-nowrap">Take Free Practice Test</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
                                    </span>
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-xl transition-all duration-300 text-sm md:text-base w-full sm:w-auto min-w-[240px] flex flex-row flex-nowrap items-center justify-center gap-2">
                                <Link href="/handbooks/washington">
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
