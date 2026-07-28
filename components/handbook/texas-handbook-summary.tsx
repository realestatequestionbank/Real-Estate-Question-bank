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
    { id: 'section-3', label: '3. Vehicle & Insurance' },
    { id: 'section-4', label: '4. Right-of-Way' },
    { id: 'section-5', label: '5. Signs & Signals' },
    { id: 'section-6', label: '6. Turning & Passing' },
    { id: 'section-7', label: '7. Speed & Parking' },
    { id: 'section-8', label: '8. Special Situations' },
    { id: 'section-9', label: '9. Alcohol & Drugs' },
    { id: 'section-10', label: '10. Crashes & Safety' },
];

export function TexasHandbookSummary() {
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
        { label: 'Texas', href: '/texas-dps-permit-test' },
        { label: 'DPS Handbook Summary', href: null },
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
                                href="/texas-dps-permit-test"
                                className="inline-flex items-center gap-1 text-sm text-[#007aff] hover:text-[#0056cc] transition-colors mb-3"
                            >
                                <ChevronRight className="w-3.5 h-3.5 rotate-180" />
                                Back to Practice Tests
                            </Link>

                            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                Summary of Texas (TX) DPS Handbook 2026
                            </h1>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-3">
                                A comprehensive, exam-focused summary of the{' '}
                                <Link
                                    href="/handbooks/texas"
                                    className="text-[#007aff] font-medium relative inline-block group"
                                >
                                    official {currentYear} Texas Driver Handbook
                                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#007aff] transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                                . We break down all 10 chapters — from getting your license and right-of-way rules to speed limits, DUI laws, and what to do in a crash. Each section highlights the key rules and numbers the Texas DPS actually tests you on.
                            </p>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                Don&apos;t want to read the summary either?{' '}
                                <Link
                                    href="/texas-dps-permit-test"
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
                                    src="/handbook-summary/texas/texas-handbook-image.png"
                                    alt="Texas DPS Driver Handbook 2026"
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

                        {/* ===== Section 1: Your Texas Driver's License ===== */}
                        <SectionCard id="section-1" number={1} title="Your Texas Driver's License">
                            <p>
                                Driving in Texas is a <strong>privilege, not a right</strong>. Texas residents must hold a valid Texas driver license.
                                New residents from out of state have <strong>90 days</strong> to exchange their valid out-of-state license for a Texas license.
                            </p>
                            <SubHeading>Types of Texas Driver Licenses</SubHeading>
                            <BulletList items={[
                                <>
                                    <strong>Learner License (Instruction Permit):</strong> For applicants aged 15–17. Requires completing the classroom portion of real estate exam prep, a vision exam, and knowledge exam. Expires on the minor&apos;s 18th birthday. Fee: $16. A licensed driver age 21+ must accompany you at all times.
                                </>,
                                <>
                                    <strong>Hardship License:</strong> May be issued to minors 15–17 with a proven need to drive due to economic hardship, illness, or vocational enrollment. Requires full real estate exam prep completion and parent/guardian application.
                                </>,
                                <>
                                    <strong>Provisional License:</strong> Issued to persons 16–17 after holding a learner license for at least <strong>6 months</strong>. Marked &quot;PROVISIONAL&quot;; expires on 18th birthday.
                                </>,
                                <>
                                    <strong>Class C License:</strong> Standard license for most drivers (non-commercial vehicles under 26,001 lbs). Valid for 8 years; costs $33 for applicants 18+. Applicants 18–24 must complete an approved real estate exam prep course.
                                </>,
                                <>
                                    <strong>Class M License:</strong> Required to operate a motorcycle. Must pass a state-approved motorcycle operator training course (16 hours). Minimum age: 16.
                                </>,
                            ]} />

                            <SubHeading>Graduated Driver License (GDL) Program</SubHeading>
                            <WarningBox title="Phase Two Restrictions (Under 18)" icon={<AlertTriangle className="w-4 h-4" />}>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• Cannot drive with <strong>more than one passenger under age 21</strong> who is not a family member.</li>
                                    <li>• Cannot drive between <strong>midnight and 5:00 a.m.</strong> (exceptions for work, school activities, or medical emergencies).</li>
                                    <li>• <strong>No wireless communication devices</strong> at all while driving — including hands-free — except during emergencies.</li>
                                </ul>
                            </WarningBox>

                            <SubHeading>License Renewal</SubHeading>
                            <BulletList items={[
                                <>Texas driver licenses must be renewed every <strong>8 years</strong>.</>,
                                <>You must appear in person at least once every <strong>16 years</strong> for a vision exam, photo, and fingerprint update.</>,
                                'Eligible drivers may renew online, by mail, or by phone at 1-866-DL-RENEW.',
                                'Drivers 79 and older, CDL holders, provisional/learner license holders, and non-U.S. citizens must renew in person.',
                            ]} />
                        </SectionCard>

                        {/* ===== Section 2: Getting Your License ===== */}
                        <SectionCard id="section-2" number={2} title="Getting Your Texas Driver License">
                            <p>
                                Applications must be made <strong>in person</strong> at any Texas DPS driver license office. All applicants younger than
                                25 must complete an approved real estate exam prep course. All applicants must complete the <strong>Impact Texas Drivers (ITD)</strong> course before taking the driving exam.
                            </p>
                            <SubHeading>Required Documents</SubHeading>
                            <BulletList items={[
                                'Full legal name, proof of Texas residency, date of birth, and place of birth.',
                                'Identification documents.',
                                'Social Security number (verified electronically).',
                                'Thumb or index fingerprints.',
                                'Answer medical status and history questions.',
                                'Surrender any valid out-of-state driver license.',
                                'U.S. citizenship status or proof of lawful presence.',
                            ]} />

                            <SubHeading>The Knowledge Exam</SubHeading>
                            <BulletList items={[
                                <>Must score <strong>70% or better</strong> to pass.</>,
                                'If you fail, your application is held for 90 days. After 90 days or 3 failed attempts, you must reapply and pay new fees.',
                                'Applicants 18+ who surrender a valid out-of-state license are exempt from the knowledge and driving exams.',
                                'Applicants younger than 25 who complete certain approved real estate exam prep courses may be exempt from the written exam at the DPS office.',
                            ]} />

                            <SubHeading>The Vision Examination</SubHeading>
                            <p>
                                Your vision is tested at the driver license office. If you wear corrective lenses, your license will carry a restriction.
                                Inconclusive results may require a referral to your doctor.
                            </p>

                            <SubHeading>Driving Exam</SubHeading>
                            <p>
                                All new driver license applicants must pass a driving exam at a DPS office or authorized testing facility.
                                After passing all exams, you&apos;ll receive a <strong>temporary license valid for 45 days</strong> while your permanent license is mailed to you.
                            </p>
                        </SectionCard>

                        {/* ===== Section 3: Vehicle Inspection & Insurance ===== */}
                        <SectionCard id="section-3" number={3} title="Vehicle Inspection & Financial Responsibility">
                            <SubHeading>Vehicle Inspection</SubHeading>
                            <p>
                                All motor vehicles operated in Texas must pass an annual safety inspection. Proof of financial responsibility (insurance) is required at the time of inspection.
                            </p>

                            <SubHeading>Minimum Insurance Requirements</SubHeading>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-3">
                                {[
                                    { amount: '$30,000', desc: 'Injury or death of one person' },
                                    { amount: '$60,000', desc: 'Injury or death of two or more persons' },
                                    { amount: '$25,000', desc: 'Property damage' },
                                ].map((item) => (
                                    <div key={item.amount} className="text-center p-3 bg-gray-50 rounded-xl">
                                        <div className="text-lg font-bold text-[#007aff]">{item.amount}</div>
                                        <div className="text-xs text-gray-600">{item.desc}</div>
                                    </div>
                                ))}
                            </div>
                            <BulletList items={[
                                'You must carry proof of financial responsibility (insurance) at all times while driving.',
                                'You must provide it to a law enforcement officer upon request or to another driver involved in a crash.',
                                <>
                                    <strong>1st conviction</strong> for driving without insurance: fine of $175–$350. <strong>2nd conviction</strong>: license suspension, fine of $350–$1,000, and vehicle impounded for 180 days.
                                </>,
                                'Your license may also be suspended if a crash judgment is unsatisfied within 60 days, or if you are involved in a crash while uninsured.',
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
                        </SectionCard>

                        {/* ===== Section 4: Right-of-Way ===== */}
                        <SectionCard id="section-4" number={4} title="Right-of-Way Rules">
                            <p>
                                Right-of-way is something <strong>given, not taken</strong>. Even if you legally have the right-of-way, yield if
                                the other driver does not. Failure to yield causing bodily injury results in fines of $500–$4,000.
                            </p>

                            <SubHeading>Intersection Rules</SubHeading>
                            <div className="space-y-2">
                                {[
                                    { scenario: 'Signs & Signals', rule: 'Obey all traffic controls. See Chapter 5 for signal meanings.' },
                                    { scenario: 'Uncontrolled Intersection', rule: 'Yield to any vehicle that has entered or is approaching on your right.' },
                                    { scenario: 'Single/Two-Lane Road onto Multi-Lane', rule: 'Yield to vehicles on the divided or 3+ lane road.' },
                                    { scenario: 'Unpaved Road onto Paved Road', rule: 'Yield to vehicles on the paved road.' },
                                    { scenario: 'Turning Left', rule: 'Always yield to all oncoming traffic and pedestrians before completing a left turn.' },
                                    { scenario: 'T-Intersection', rule: 'Vehicles on the dead-end street must stop and yield to vehicles on the through street.' },
                                    { scenario: 'Private Roads & Driveways', rule: 'Stop before the sidewalk and yield to all approaching vehicles and pedestrians.' },
                                    { scenario: 'Multi-Lane Road Merging', rule: 'A vehicle entering from the right must yield to a vehicle entering the same lane from the left.' },
                                ].map((item) => (
                                    <div key={item.scenario} className="p-3 bg-gray-50 rounded-xl">
                                        <span className="font-semibold text-gray-900 text-sm">{item.scenario}:</span>{' '}
                                        <span className="text-gray-700 text-sm">{item.rule}</span>
                                    </div>
                                ))}
                            </div>

                            <SubHeading>Railroad Crossings</SubHeading>
                            <BulletList items={[
                                <>Stop between <strong>15 and 50 feet</strong> from the nearest rail if a signal warns of an approaching train, a gate is lowered, a train is within ~1,500 feet, or a traffic-control device requires it.</>,
                                'Never try to beat a train. The railroad crossbuck sign is posted at every grade crossing.',
                            ]} />

                            <SubHeading>Emergency Vehicles</SubHeading>
                            <BulletList items={[
                                'Yield to all emergency vehicles using sirens or flashing lights.',
                                'Pull to the right and stop until the emergency vehicle passes.',
                                <>
                                    <strong>Move Over law:</strong> When approaching a stationary emergency, law enforcement, or TxDOT vehicle with flashing lights, move over one lane if safe — or slow down significantly.
                                </>,
                            ]} />

                            <SubHeading>School Buses</SubHeading>
                            <BulletList items={[
                                <>When a school bus displays <strong>flashing red lights</strong>, all traffic from both directions must stop and remain stopped until the lights stop flashing and the bus resumes motion or the driver signals you to proceed.</>,
                                'Exception: You do not need to stop if you are on a divided highway separated by a median and approaching from the opposite direction.',
                            ]} />

                            <SubHeading>Pedestrians</SubHeading>
                            <BulletList items={[
                                'Yield to pedestrians in any marked or unmarked crosswalk.',
                                'Do not pass a vehicle that is stopped at a crosswalk — a pedestrian may be crossing.',
                                'State law signs reading "YIELD TO PEDESTRIANS" are placed at crosswalks.',
                            ]} />
                        </SectionCard>

                        {/* ===== Section 5: Traffic Signals, Signs & Road Markings ===== */}
                        <SectionCard id="section-5" number={5} title="Traffic Signals, Signs & Road Markings">
                            <SubHeading>Traffic Signals</SubHeading>
                            <div className="space-y-2 mb-4">
                                {[
                                    { light: 'Solid Green', rule: 'Go — but yield to pedestrians, cyclists, and any remaining vehicles in the intersection.' },
                                    { light: 'Solid Yellow', rule: 'Signal is changing to red. Stop if you can do so safely; otherwise proceed with caution.' },
                                    { light: 'Solid Red', rule: 'Stop completely. Right turn on red is permitted after a full stop unless a sign prohibits it.' },
                                    { light: 'Flashing Red', rule: 'Treat as a STOP sign — stop, then proceed when clear.' },
                                    { light: 'Flashing Yellow', rule: 'Slow down and proceed with caution.' },
                                    { light: 'Green Arrow', rule: 'Protected movement — proceed in the direction of the arrow. Oncoming traffic is stopped.' },
                                    { light: 'Lane Use: Red X', rule: 'Do not drive in this lane.' },
                                    { light: 'Lane Use: Yellow X', rule: 'Prepare to vacate this lane safely.' },
                                    { light: 'Lane Use: Green Arrow Down', rule: 'You may drive in this lane.' },
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
                                <><strong>Diamond (Warning Signs):</strong> Yellow or orange. Warn of hazards ahead — curves, hills, crossings, rough roads.</>,
                                <><strong>Rectangle (Regulatory Signs):</strong> White with black text. Inform drivers of traffic laws (speed limits, turn restrictions, one-way, etc.).</>,
                                <><strong>Pentagon (School Zone):</strong> Yellow-green. Slow down near schools. Watch for children in crosswalks.</>,
                                <><strong>Railroad Crossbuck:</strong> X-shaped sign at every grade crossing. Slow down, look, listen, and be prepared to yield to trains.</>,
                                <><strong>Construction Signs:</strong> Orange background. Fines are <strong>doubled</strong> for violations in construction zones where workers are present.</>,
                            ]} />

                            <SubHeading>Pavement Markings</SubHeading>
                            <div className="space-y-2">
                                {[
                                    { name: 'Broken Yellow Lines', desc: 'Center of a two-way road. You may pass when safe.' },
                                    { name: 'Solid Yellow Line (Your Side)', desc: 'No passing from your lane.' },
                                    { name: 'Double Solid Yellow Lines', desc: 'No passing from either direction.' },
                                    { name: 'White Lane Lines', desc: 'Divide same-direction traffic. Broken = may change lanes; solid = do not change lanes.' },
                                    { name: 'White Stop Bar', desc: 'Stop line at intersections — stop before this line.' },
                                    { name: 'Yellow Diagonal Lines', desc: 'Do Not Enter area. Never drive on these.' },
                                ].map((item) => (
                                    <div key={item.name} className="p-3 bg-gray-50 rounded-xl">
                                        <span className="font-semibold text-gray-900 text-sm">{item.name}:</span>{' '}
                                        <span className="text-gray-700 text-sm">{item.desc}</span>
                                    </div>
                                ))}
                            </div>
                        </SectionCard>

                        {/* ===== Section 6: Signaling, Passing & Turning ===== */}
                        <SectionCard id="section-6" number={6} title="Signaling, Passing & Turning">
                            <SubHeading>When to Signal</SubHeading>
                            <BulletList items={[
                                'Always signal when changing lanes, making a turn, pulling away from or into a parking space, slowing down or stopping, entering or leaving a highway, or pulling to the side of the road.',
                                <>Signal continuously for at least <strong>100 feet before turning or stopping</strong>.</>,
                                'Turn your signal off after completing the maneuver — an unintended signal still communicates a turn to other drivers.',
                                'Hand signals are permitted: Left arm up = right turn; left arm horizontal = left turn; left arm down = stop.',
                            ]} />

                            <SubHeading>Passing Rules</SubHeading>
                            <BulletList items={[
                                <>Never pass: when pavement markings or signs prohibit it, within <strong>100 feet of an intersection or railroad crossing</strong>, on a hill or curve with limited vision, or within <strong>100 feet of a bridge, viaduct, or tunnel</strong>.</>,
                                'When passing on a two-lane road: signal left, ensure at least 200 feet of clear space before an oncoming car, pass on the left, wait until the passed car is visible in your rearview mirror, then signal right and return to your lane.',
                                <>Pass on the right only on a road with two or more lanes in each direction, on a one-way road, or on a paved shoulder when the vehicle ahead is <strong>stopped or making a left turn</strong>.</>,
                                'Do not linger in another driver\'s blind spot. When being passed, do not increase speed — stay in your lane.',
                            ]} />

                            <SubHeading>Making a Right Turn</SubHeading>
                            <BulletList items={[
                                'Move to the far right lane well before the turn.',
                                'Signal at least 100 feet before the corner.',
                                'Look both ways, keep close to the right edge of the road, and turn using both hands.',
                                'Complete the turn in the right lane.',
                            ]} />

                            <SubHeading>Making a Left Turn</SubHeading>
                            <BulletList items={[
                                'Move into the center or left-turn lane well before the turn.',
                                'Signal at least 100 feet before the corner.',
                                'Yield to all oncoming traffic and pedestrians before turning.',
                                'Enter the road to the right of the center line in the lane interfering least with other traffic.',
                            ]} />

                            <InfoBox>
                                <strong>Seven Steps for a Safe Turn:</strong> (1) Decide early, (2) Check mirrors and blind spots, (3) Move into the proper lane (within ½ block), (4) Signal 100 feet out, (5) Slow to a safe turning speed, (6) Stay in the proper lane throughout, (7) Finish in the proper lane.
                            </InfoBox>
                        </SectionCard>

                        {/* ===== Section 7: Speed & Parking ===== */}
                        <SectionCard id="section-7" number={7} title="Speed Limits & Parking Rules">
                            <SubHeading>Texas Speed Limits</SubHeading>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                                {[
                                    { limit: '75 mph', where: 'Most Texas interstates (unless posted higher or lower)' },
                                    { limit: '70 mph', where: 'Other highways and farm-to-market roads' },
                                    { limit: '60 mph', where: 'Trucks and vehicles pulling trailers on certain roads' },
                                    { limit: '30 mph', where: 'Urban districts (unless posted otherwise)' },
                                    { limit: '20 mph', where: 'Alley in a business or residential district' },
                                    { limit: '15 mph', where: 'Alley in a municipality (city limit)' },
                                ].map((item) => (
                                    <div key={item.limit} className="p-2.5 bg-gray-50 rounded-lg text-sm">
                                        <span className="font-bold text-[#007aff]">{item.limit}</span>
                                        <span className="text-gray-600"> — {item.where}</span>
                                    </div>
                                ))}
                            </div>
                            <BulletList items={[
                                'Drive at the posted speed limit or slower if conditions (weather, visibility, traffic) require it.',
                                <>Street racing is <strong>illegal</strong> and results in license suspension and criminal penalties.</>,
                                <>Move over or slow down significantly when approaching a stationary vehicle with flashing lights on the shoulder (law enforcement, emergency, or TxDOT vehicles).</>,
                            ]} />

                            <SubHeading>Where You Must NOT Park, Stop, or Stand</SubHeading>
                            <BulletList items={[
                                'On a sidewalk or crosswalk; within an intersection; on a railroad track.',
                                'On the road-side of any stopped or parked vehicle (double-parking).',
                                'On a bridge, elevated structure, or inside a highway tunnel.',
                                'At any place where an official sign prohibits stopping.',
                            ]} />

                            <SubHeading>Where You Must NOT Park or Stand</SubHeading>
                            <BulletList items={[
                                <>Within <strong>15 feet of a fire hydrant</strong>.</>,
                                <>Within <strong>20 feet of a crosswalk</strong> at an intersection.</>,
                                <>Within <strong>30 feet</strong> of a flashing signal, stop sign, yield sign, or traffic control signal.</>,
                                <>Within <strong>20 feet</strong> of a fire station driveway (and within <strong>75 feet</strong> on the opposite side).</>,
                                'In front of a public or private driveway.',
                                <>Within <strong>50 feet</strong> of a railroad crossing (no parking only).</>,
                            ]} />

                            <SubHeading>Parking on Hills</SubHeading>
                            <BulletList items={[
                                <><strong>Headed downhill with a curb:</strong> Turn wheels into the curb (right).</>,
                                <><strong>Headed uphill with a curb:</strong> Turn wheels away from the curb (left); let the car roll back until the tire rests against the curb.</>,
                                <><strong>No curb (uphill or downhill):</strong> Turn wheels to the right so the car rolls off the road, away from traffic.</>,
                                'Always set the parking brake and remove the key.',
                                <>Do not park more than <strong>18 inches from the curb</strong>.</>,
                            ]} />

                            <WarningBox title="Disabled Parking" icon={<AlertTriangle className="w-4 h-4" />}>
                                <p className="text-sm text-gray-700">Illegally parking in a disabled space is a misdemeanor — fine of <strong>$500–$750</strong> for a first offense, increasing up to <strong>$1,250</strong> for five or more offenses.</p>
                            </WarningBox>
                        </SectionCard>

                        {/* ===== Section 8: Special Driving Situations ===== */}
                        <SectionCard id="section-8" number={8} title="Special Driving Situations">
                            <SubHeading>Headlights</SubHeading>
                            <BulletList items={[
                                'Use headlights from 30 minutes after sunset to 30 minutes before sunrise, and any time visibility is less than 1,000 feet.',
                                'Dim high beams for oncoming traffic.',
                                'In fog, use low beams — high beams reflect back and reduce visibility.',
                            ]} />

                            <SubHeading>Highway Driving</SubHeading>
                            <BulletList items={[
                                'When entering a freeway, match the speed of traffic before merging.',
                                'Stay in the right lane except to pass.',
                                'Maintain safe following distance — use the 3-second rule (more in adverse conditions).',
                                'Signal at least 100 feet before lane changes or exits.',
                            ]} />

                            <SubHeading>Handling Emergencies</SubHeading>
                            <div className="space-y-3">
                                <ConditionItem emoji="💥" name="Flat Tire / Blowout">
                                    Do <strong>not</strong> hit the brakes suddenly. Take your foot off the gas, gently apply brakes, and steer straight to a stop.
                                </ConditionItem>
                                <ConditionItem emoji="🚗" name="Running Off the Pavement">
                                    Grip the wheel tightly, take your foot off the gas. Do not brake hard or swing back onto the pavement immediately. Slow down, check traffic, then carefully return to the road.
                                </ConditionItem>
                                <ConditionItem emoji="⚠️" name="Brake Failure">
                                    Do not panic. Shift to a lower gear and apply the <strong>parking brake cautiously</strong> to avoid locking the wheels and causing a skid.
                                </ConditionItem>
                                <ConditionItem emoji="🌧️" name="Skid Recovery">
                                    Remove foot from the accelerator. Turn the steering wheel <strong>in the direction of the skid</strong>. Do not brake. Straighten wheels as the car recovers.
                                </ConditionItem>
                                <ConditionItem emoji="❄️" name="Winter Driving">
                                    Increase following distance. Reduce speed for conditions (no &quot;safe&quot; speed on ice). Clear snow/ice before driving. Watch for ice on bridges first. Start slowly to feel traction.
                                </ConditionItem>
                                <ConditionItem emoji="🌊" name="Flooding">
                                    Never drive through flooded roads — you cannot judge depth. &quot;Turn Around, Don&apos;t Drown.&quot; Just 6 inches of water can stall a vehicle; 2 feet can carry it away.
                                </ConditionItem>
                            </div>

                            <SubHeading>Sharing the Road</SubHeading>
                            <BulletList items={[
                                <><strong>Large Trucks:</strong> Avoid their blind spots (front, rear, and sides). Do not cut in front. Their braking distance at highway speed can exceed 400 feet. Never pass on the right of a turning truck.</>,
                                <><strong>Motorcycles:</strong> Give motorcyclists a <strong>full lane width</strong> — never share a lane. Check mirrors and blind spots before lane changes. The most common crash is a car making a left turn in front of a motorcycle.</>,
                                <><strong>Bicycles:</strong> Bicycles have the same rights as motor vehicles. Do not cut across their path when turning right. Give them a full lane.</>,
                                <><strong>Distracted Driving:</strong> It is <strong>illegal to read, write, or send text messages</strong> while driving. Pull off the road safely if you must use your phone. A half-second of distraction can double crash risk.</>,
                            ]} />
                        </SectionCard>

                        {/* ===== Section 9: Alcohol & Drugs ===== */}
                        <SectionCard id="section-9" number={9} title="Alcohol & Drug Impact on Driving">
                            <p>
                                Alcohol and drugs impair judgment, vision, coordination, and reaction time. Texas law applies to
                                both alcohol and drugs — including prescription and over-the-counter medications.
                            </p>

                            <WarningBox title="Legal Limits (BAC)" icon={<AlertTriangle className="w-4 h-4" />}>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• <strong>0.08% or higher</strong> — Driving While Intoxicated (DWI) for drivers 21+</li>
                                    <li>• <strong>Any detectable amount</strong> — Zero Tolerance for drivers under 21 (Driving Under the Influence / DUI)</li>
                                    <li>• <strong>0.04% or higher</strong> — Commercial motor vehicle operators</li>
                                </ul>
                            </WarningBox>

                            <SubHeading>Penalties for DWI (Adults 21+)</SubHeading>
                            <div className="space-y-2 mb-3">
                                {[
                                    { offense: '1st DWI', penalty: 'Fine up to $2,000; jail 72 hrs–180 days; license suspended up to 1 year.' },
                                    { offense: '2nd DWI', penalty: 'Fine up to $4,000; jail 30 days–1 year; license suspended 180 days–2 years.' },
                                    { offense: '3rd DWI', penalty: 'Fine up to $10,000; prison 2–10 years; license suspended 180 days–2 years.' },
                                    { offense: 'DWI with Child Under 15', penalty: 'State jail felony; fine up to $10,000; jail 180 days–2 years.' },
                                    { offense: 'Intoxication Assault', penalty: '3rd degree felony; fine up to $10,000; prison 2–10 years.' },
                                    { offense: 'Intoxication Manslaughter', penalty: '2nd degree felony; fine up to $10,000; prison 2–20 years.' },
                                ].map((item) => (
                                    <div key={item.offense} className="p-2.5 bg-gray-50 rounded-lg">
                                        <span className="font-semibold text-gray-900 text-sm">{item.offense}:</span>{' '}
                                        <span className="text-gray-700 text-sm">{item.penalty}</span>
                                    </div>
                                ))}
                            </div>

                            <SubHeading>Penalties for DUI (Minors Under 21)</SubHeading>
                            <BulletList items={[
                                '1st DUI: Fine up to $500; community service 20–40 hours; alcohol awareness course required.',
                                '2nd DUI: Fine up to $500; community service 40–60 hours.',
                                '3rd DUI (17–21): Class B misdemeanor; fine $500–$2,000; jail up to 180 days; license suspended 1 year.',
                                'Minor with detectable alcohol (below 0.08): License suspended 60 days (1st), 120 days (2nd), 180 days (3rd).',
                                'Refusal to provide breath/blood specimen: License suspended 180 days (1st), 2 years (subsequent).',
                            ]} />

                            <SubHeading>Open Container Law</SubHeading>
                            <BulletList items={[
                                'It is illegal to possess an open container of alcohol in the passenger area of a motor vehicle on a public highway.',
                                'Possession of an open container while DWI increases the minimum jail sentence.',
                            ]} />
                        </SectionCard>

                        {/* ===== Section 10: Crashes & Safety ===== */}
                        <SectionCard id="section-10" number={10} title="Motor Vehicle Crashes & Safety">
                            <SubHeading>What to Do After a Crash</SubHeading>
                            <BulletList items={[
                                <><strong>You must stop immediately</strong> — leaving the scene is a hit-and-run, which is a serious criminal offense.</>,
                                'Call 911 immediately if there is an injury or fatality, vehicles cannot be moved, a driver left the scene, or a driver is intoxicated.',
                                'Exchange: name, address, phone number, vehicle registration number, driver license number, and insurance information with all involved drivers.',
                                <>If the crash caused damage of <strong>$1,000 or more</strong>, injury, or death and is not investigated by law enforcement, you must file a written report with TxDOT within <strong>10 days</strong>.</>,
                                'If you hit an unattended vehicle, stop and leave a visible note with your name, address, and a description of the crash.',
                            ]} />

                            <SubHeading>Penalties for Hit-and-Run</SubHeading>
                            <div className="space-y-2 mb-3">
                                {[
                                    { crime: 'Crash resulting in death', penalty: '2nd degree felony — fine up to $10,000; prison 2–20 years.' },
                                    { crime: 'Crash resulting in serious bodily injury', penalty: '3rd degree felony — fine up to $10,000; prison 2–10 years.' },
                                    { crime: 'Crash resulting in injury', penalty: 'Up to 5 years prison or 1 year county jail; fine up to $5,000.' },
                                    { crime: 'Property damage ($200+)', penalty: 'Class B misdemeanor — fine up to $2,000; up to 180 days jail.' },
                                ].map((item) => (
                                    <div key={item.crime} className="p-2.5 bg-gray-50 rounded-lg">
                                        <span className="font-semibold text-gray-900 text-sm">{item.crime}:</span>{' '}
                                        <span className="text-gray-700 text-sm">{item.penalty}</span>
                                    </div>
                                ))}
                            </div>

                            <SubHeading>Safety Belts & Child Passengers</SubHeading>
                            <BulletList items={[
                                'All vehicle occupants must wear seat belts. Failure to comply is a traffic violation.',
                                'The driver is responsible for ensuring all passengers under 17 are properly restrained.',
                                'Children must be secured in an age- and size-appropriate child safety seat.',
                                'Never place an infant in a rear-facing seat in front of an active air bag.',
                            ]} />

                            <SubHeading>Defensive Driving</SubHeading>
                            <BulletList items={[
                                'Scan the road 10–15 seconds ahead. Keep a minimum 3-second following distance (increase in bad conditions).',
                                'Check all mirrors regularly and check blind spots before lane changes.',
                                'Anticipate the actions of other drivers — do not assume they will obey signals or signs.',
                            ]} />

                            <SubHeading>Road Rage</SubHeading>
                            <BulletList items={[
                                'Do not engage with aggressive drivers. Avoid eye contact and do not gesture.',
                                'If threatened, drive to a public place (police station, fire station) and call 911.',
                                'Aggressive driving leading to road rage incidents is a criminal offense in Texas.',
                            ]} />

                            <SubHeading>Carbon Monoxide</SubHeading>
                            <p>
                                Never run your vehicle engine inside a closed garage. Carbon monoxide is colorless and odorless.
                                Symptoms of poisoning include tiredness, yawning, dizziness, nausea, and headache.
                            </p>

                            <SubHeading>When Stopped by Law Enforcement</SubHeading>
                            <BulletList items={[
                                'Acknowledge the officer, activate your right turn signal, and pull safely to the right.',
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
                            Ready to Pass Your Texas real estate exam?
                        </h2>
                        <p className="text-white/80 text-base md:text-lg mb-8 max-w-2xl mx-auto">
                            Don&apos;t just read the summary — practice with realistic exam questions to make sure you pass on your first try.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button asChild size="lg" className="group bg-white text-[#007aff] hover:bg-blue-50 font-semibold px-6 py-3 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 text-sm md:text-base w-full sm:w-auto min-w-[240px] flex flex-row flex-nowrap items-center justify-center gap-2">
                                <Link href="/texas-dps-permit-test">
                                    <span className="flex items-center gap-2">
                                        <span className="whitespace-nowrap">Take Free Practice Test</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
                                    </span>
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-xl transition-all duration-300 text-sm md:text-base w-full sm:w-auto min-w-[240px] flex flex-row flex-nowrap items-center justify-center gap-2">
                                <Link href="/handbooks/texas">
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
