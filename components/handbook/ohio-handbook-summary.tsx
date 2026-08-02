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
    { id: 'section-1', label: '1. Get Your License' },
    { id: 'section-2', label: '2. Before You Drive' },
    { id: 'section-3', label: '3. Be Alert' },
    { id: 'section-4', label: '4. Rules of the Road' },
    { id: 'section-5', label: '5. Learning to Drive' },
    { id: 'section-6', label: '6. Laws & Penalties' },
    { id: 'section-7', label: '7. Special Situations' },
    { id: 'section-8', label: '8. Safe Driving Tips' },
    { id: 'section-9', label: '9. Sharing the Road' },
    { id: 'section-10', label: '10. Emergency Situations' },
    { id: 'section-11', label: '11. The Driving Test' },
    { id: 'section-12', label: '12. Purchase License' },
    { id: 'section-13', label: '13. What Else to Know' },
];

interface HandbookSummaryProps {
    stateKey: string;
    stateName: string;
}

export function OhioHandbookSummary() {
    const stateKey = "ohio";
    const stateName = "Ohio";
    const departmentName = "BMV";
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
        { label: stateName, href: `/${stateKey}-bmv-permit-test` },
        { label: 'BMV Handbook Summary', href: null },
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
                                href={`/ohio-real-estate-practice-test`}
                                className="inline-flex items-center gap-1 text-sm text-[#007aff] hover:text-[#0056cc] transition-colors mb-3"
                            >
                                <ChevronRight className="w-3.5 h-3.5 rotate-180" />
                                Back to Practice Tests
                            </Link>

                            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                Summary of Ohio (OH) BMV Handbook 2026
                            </h1>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-3">
                                A comprehensive, exam-focused summary of the{' '}
                                <Link
                                    href={`/handbooks/ohio`}
                                    className="text-[#007aff] font-medium relative inline-block group"
                                >
                                    official {currentYear} Ohio Driver Handbook
                                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#007aff] transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                                . We break down all 13 chapters — from getting your permit and license requirements to right-of-way rules, speed limits, DWI laws, and what to do in a collision. Each section highlights the key rules and numbers the Ohio BMV actually tests you on.
                            </p>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                Don&apos;t want to read the summary either?{' '}
                                <Link
                                    href={`/ohio-real-estate-practice-test`}
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
                                    src="/handbook-summary/ohio/ohio-handbook-image.png"
                                    alt="Ohio BMV Driver Handbook 2026"
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


                        {/* ===== Section 1: How to Get Your Driver License ===== */}
                        <SectionCard id="section-1" number={1} title="How to Get Your Driver License">
                            <p>
                                Driving in Ohio is a privilege that starts with getting your Temporary Instruction Permit Identification Card (TIPIC).
                                You must meet vision standards and pass a 40-question knowledge test.
                            </p>

                            <SubHeading>Getting Your TIPIC (Permit)</SubHeading>
                            <BulletList items={[
                                <>Must be at least <strong>15 years and six months</strong> old to take the knowledge test.</>,
                                <>You need a <strong>75% passing score</strong> (at least 30 correct answers) on the knowledge test.</>,
                                'If you pass, you have 60 days to purchase your TIPIC at a License Agency.',
                                'If you fail, you must wait one full day before retesting.',
                            ]} />

                            <WarningBox title="TIPIC Restrictions by Age" icon={<AlertTriangle className="w-4 h-4" />}>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• <strong>Under 16:</strong> Must have a parent, guardian, or driving instructor in the front passenger seat.</li>
                                    <li>• <strong>Age 16 to 17:</strong> May drive with any licensed driver 21+ in the front seat, except from <strong>midnight to 6 a.m.</strong> (when a parent/guardian is required).</li>
                                    <li>• <strong>Age 18 and older:</strong> Must drive with a licensed driver who is at least 21 years old.</li>
                                </ul>
                            </WarningBox>

                            <SubHeading>Driver Education Requirements</SubHeading>
                            <BulletList items={[
                                <><strong>Under age 21:</strong> Must complete 24 hours of classroom instruction and 8 hours of driving with an instructor.</>,
                                <>Must log <strong>50 hours</strong> of driving with an eligible adult, including at least <strong>10 hours at night</strong>.</>,
                                <>Drivers under 18 must hold their TIPIC for at least <strong>6 months</strong> before taking the driving test.</>,
                            ]} />
                        </SectionCard>

                        {/* ===== Section 2: Before You Drive ===== */}
                        <SectionCard id="section-2" number={2} title="Before You Drive">
                            <SubHeading>Vehicle Inspection & Equipment</SubHeading>
                            <p className="mb-3">Ensure your vehicle is safe and legal to drive before you hit the road:</p>
                            <BulletList items={[
                                <><strong>Tires:</strong> Must have a minimum of <strong>1/16-inch tread depth</strong>. Check pressure regularly. Studded tires are legal in Ohio from November 1 to April 15.</>,
                                <><strong>Lights:</strong> Headlights, taillights, brake lights, turn signals, and license plate lights must be in working order.</>,
                                <><strong>Window Tinting:</strong> Windshield must allow 70% light transmission. Front side windows must allow 50%.</>,
                            ]} />

                            <SubHeading>Seat Belts and Safety Restraints</SubHeading>
                            <BulletList items={[
                                'Ohio law requires the driver and front-seat passengers to wear safety belts at all times in most passenger vehicles.',
                                <><strong>Drivers under age 18:</strong> The number of occupants is limited to the number of installed safety belts, and <strong>everyone</strong> must wear a seat belt.</>,
                                'Wear the shoulder belt across your chest with minimal slack. Do not wear it under your arm or behind your back.',
                            ]} />

                            <SubHeading>Mirror and Seat Adjustment</SubHeading>
                            <p>
                                Keep at least <strong>10 inches</strong> between your chest and the steering wheel to allow safe airbag deployment.
                                Adjust all mirrors to provide maximum visibility and minimize blind spots.
                            </p>
                        </SectionCard>

                        {/* ===== Section 3: Be Alert ===== */}
                        <SectionCard id="section-3" number={3} title="Be Alert">
                            <SubHeading>Distracted Driving Laws</SubHeading>
                            <p className="mb-3">Ohio has strict laws regarding the use of electronic devices while driving:</p>
                            <BulletList items={[
                                <><strong>Drivers Age 18 and Older:</strong> It is illegal to hold or support a cell phone while driving. You may only use hands-free technology and activate features with a single touch or swipe.</>,
                                <><strong>Drivers Under Age 18:</strong> It is <strong>illegal to use any electronic device</strong>, even in hands-free mode or while stopped at a red light. Violation is a primary offense (60-day suspension and $150 fine for first offense).</>,
                            ]} />
                            <InfoBox className="mt-2">
                                Exceptions exist for reporting emergencies to law enforcement or utilizing a device for navigation (if properly mounted with one-swipe use).
                            </InfoBox>

                            <SubHeading>Impaired Driving</SubHeading>
                            <BulletList items={[
                                'It is illegal to operate a motor vehicle under the influence of alcohol or drugs.',
                                'This includes legally prescribed and over-the-counter medications that impair your ability to drive safely.',
                                'Alcohol blurs vision, slows reaction time, and reduces your ability to judge distance and speed.',
                            ]} />
                        </SectionCard>

                        {/* ===== Section 4: Rules of the Road ===== */}
                        <SectionCard id="section-4" number={4} title="Rules of the Road">
                            <SubHeading>Speed Limits in Ohio</SubHeading>
                            <p className="mb-3">You must never drive faster than a speed that allows you to stop safely within the assured clear distance ahead. Standard limits are:</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                                {[
                                    { limit: '15 mph', where: 'Alleys within a municipal corporation' },
                                    { limit: '20 mph', where: 'School Zones (during recess & arrival/departure times)' },
                                    { limit: '25 mph', where: 'Most streets within a municipal corporation' },
                                    { limit: '35 mph', where: 'State routes in municipal corporations (outside business dist.)' },
                                    { limit: '50 mph', where: 'State routes outside urban districts' },
                                    { limit: '55 mph', where: 'Freeways with paved shoulders inside municipal' },
                                    { limit: '70 mph', where: 'Rural freeways and the Ohio Turnpike' },
                                ].map((item) => (
                                    <div key={item.limit} className="p-2.5 bg-gray-50 rounded-lg text-sm border border-gray-100">
                                        <span className="font-bold text-[#007aff]">{item.limit}</span>
                                        <span className="text-gray-600"> — {item.where}</span>
                                    </div>
                                ))}
                            </div>

                            <SubHeading>Right-of-Way Principles</SubHeading>
                            <BulletList items={[
                                <><strong>Intersections:</strong> Yield to the driver who arrives before you. If you arrive at the same time at a 4-way stop, yield to the driver on your <strong>right</strong>.</>,
                                <><strong>Left Turns:</strong> You must <strong>yield to oncoming traffic</strong> when making a left turn.</>,
                                <><strong>Pedestrians:</strong> You must always yield to pedestrians entering or currently in a crosswalk.</>,
                                <><strong>Emergency Vehicles:</strong> Yield to police, fire, and ambulances displaying flashing lights and sounding a siren.</>,
                            ]} />

                            <SubHeading>Traffic Signals</SubHeading>
                            <BulletList items={[
                                <><strong>Solid Red:</strong> Stop behind the line or crosswalk. You may only turn right on red if safe and not prohibited by a sign.</>,
                                <><strong>Flashing Yellow:</strong> Slow down and proceed through the intersection with caution.</>,
                                <><strong>Flashing Red:</strong> Treat exactly like a stop sign. Come to a complete stop before proceeding.</>,
                                <><strong>Inoperable Light:</strong> Treat an intersection with broken traffic lights as a four-way stop sign.</>,
                            ]} />
                        </SectionCard>

                        {/* ===== Section 5: Learning to Drive ===== */}
                        <SectionCard id="section-5" number={5} title="Learning to Drive">
                            <SubHeading>Bringing the Vehicle to a Stop</SubHeading>
                            <BulletList items={[
                                <>Maintain a <strong>3-4 second following distance</strong> behind the vehicle ahead of you to ensure you have enough stopping distance.</>,
                                'Stopping distance depends on your reaction time, vehicle speed, brake condition, and pavement conditions.',
                                'Stop behind the stop line or crosswalk at any stop sign or red traffic signal before entering an intersection.',
                            ]} />

                            <SubHeading>Turning and Signaling</SubHeading>
                            <BulletList items={[
                                <>A turn signal must be activated at least <strong>100 feet before</strong> your intended turn.</>,
                                <><strong>Right Turn on Red:</strong> You may turn right on red after a complete stop unless a sign specifically prohibits it. Yield to crossing pedestrians and traffic.</>,
                                <><strong>Left Turn on Red:</strong> You may only turn left on red from the extreme left lane of a one-way street onto another one-way street, unless a sign prohibits it.</>,
                                'When turning multiple lanes, stay in your lane until the turn is completely finished.',
                            ]} />

                            <SubHeading>Passing and Lane Changes</SubHeading>
                            <BulletList items={[
                                <>Pass only when safe. A <strong>broken (dashed) yellow line</strong> means passing is allowed; a <strong>solid yellow line</strong> means passing is prohibited.</>,
                                <><strong>Two-Way Left Turn Lane:</strong> Marked with a broken yellow line on the inside and solid yellow on the outside. This center lane is for <strong>left turns only</strong>—it is not for traveling or passing.</>,
                            ]} />

                            <SubHeading>Roundabouts</SubHeading>
                            <p>Traffic travels counterclockwise. Vehicles entering the roundabout must yield the right-of-way to the circulating traffic already inside. Do not change lanes once you enter a roundabout.</p>
                        </SectionCard>

                        {/* ===== Section 6: State Laws and Penalties ===== */}
                        <SectionCard id="section-6" number={6} title="State Laws and Penalties">
                            <SubHeading>Alcohol and Drug Laws</SubHeading>
                            <p className="mb-2">Ohio law strictly prohibits Driving Under the Influence (OVI). Blood Alcohol Concentration (BAC) limits are:</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                                {[
                                    { limit: '0.08%', who: 'Drivers Age 21 and Older' },
                                    { limit: '0.02%', who: 'Drivers Under Age 21 (Zero Tolerance)' },
                                    { limit: '0.04%', who: 'Commercial Drivers (CDL)' },
                                ].map((item) => (
                                    <div key={item.limit} className="flex items-center gap-3 p-3 bg-red-50/50 rounded-xl border border-red-100">
                                        <div className="font-bold text-red-600 text-lg">{item.limit}</div>
                                        <div className="text-sm font-medium text-gray-800">{item.who}</div>
                                    </div>
                                ))}
                            </div>
                            <BulletList items={[
                                <><strong>Implied Consent:</strong> By driving in Ohio, you agree to submit to a chemical test (breath, blood, or urine) if arrested for OVI. Refusal leads to an immediate license suspension (at least 1 year).</>,
                                <>First OVI offense carries severe penalties, including a <strong>minimum 3 days in jail</strong> (or intervention program), fines, and a license suspension from 1 to 3 years.</>,
                            ]} />

                            <SubHeading>Financial Responsibility (Insurance)</SubHeading>
                            <BulletList items={[
                                'You must maintain auto liability insurance to drive in Ohio.',
                                'Minimum coverage: $25,000 for injury/death of one person, $50,000 for multiple people, and $25,000 for property damage.',
                                'Proof of insurance must be shown at traffic stops and accident scenes.',
                            ]} />

                            <SubHeading>Child Passenger Safety</SubHeading>
                            <BulletList items={[
                                <><strong>Under 4 years old AND under 40 lbs:</strong> Must be in a federally approved child safety seat.</>,
                                <><strong>Under 8 years old AND under 4'9":</strong> Must be in a booster seat when riding in a motor vehicle.</>,
                                <><strong>Age 8 to 15:</strong> Must use a standard safety belt.</>,
                            ]} />

                            <WarningBox title="Riding Outside the Vehicle" icon={<AlertTriangle className="w-4 h-4" />}>
                                It is <strong>illegal</strong> for anyone under age 16 to ride in the unenclosed or unroofed cargo area of a vehicle (like a pickup truck bed) if the vehicle is traveling faster than 25 mph.
                            </WarningBox>
                        </SectionCard>

                        {/* ===== Section 7: Special Driving Situations ===== */}
                        <SectionCard id="section-7" number={7} title="Special Driving Situations">
                            <SubHeading>Headlights and Night Driving</SubHeading>
                            <BulletList items={[
                                'Headlights must be turned on from sunset to sunrise.',
                                'Also required at any time visibility is less than 1,000 feet, or when using windshield wipers due to precipitation.',
                                <><strong>Dim your high beams</strong> before you meet oncoming traffic or when you are following another vehicle closely.</>,
                                'At night, keep your speed reasonable so you can stop safely within the distance illuminated by your headlights.',
                            ]} />

                            <SubHeading>Fog and Winter Driving</SubHeading>
                            <BulletList items={[
                                <><strong>Fog:</strong> Use <strong>low-beam</strong> headlights. High beams reflect off the fog and impair visibility. Slow down and increase distance.</>,
                                <><strong>Winter Ice & Snow:</strong> Bridges, overpasses, and shaded areas freeze first. Start your vehicle slowly, brake gently, and maintain a large space cushion.</>,
                            ]} />

                            <SubHeading>Work Zones</SubHeading>
                            <p>Give construction workers a "brake." Fines are doubled for speeding in a work zone. Watch out for orange diamond-shaped warning signs, barrels, and cones, and follow the instructions of any flaggers.</p>
                        </SectionCard>

                        {/* ===== Section 8: Safe Driving Tips ===== */}
                        <SectionCard id="section-8" number={8} title="Safe Driving Tips">
                            <SubHeading>Visual and Space Management</SubHeading>
                            <BulletList items={[
                                'Scan the road ahead instead of staring at the vehicle directly in front of you. This gives you advance warning of hazards.',
                                <>Look ahead at least <strong>10 to 15 seconds</strong> of travel time.</>,
                                'Leave a space cushion around all sides of your vehicle to allow room to maneuver in an emergency.',
                            ]} />

                            <SubHeading>Communicating with Others</SubHeading>
                            <BulletList items={[
                                'Always use your turn signals before changing direction or lane positioning.',
                                'Use your horn to establish eye contact with other drivers or pedestrians if you feel they do not see you.',
                                'Use your hazard (flashers) when your vehicle is disabled and pulled off the road.',
                            ]} />
                        </SectionCard>

                        {/* ===== Section 9: Sharing the Road ===== */}
                        <SectionCard id="section-9" number={9} title="Sharing the Road">
                            <SubHeading>Vulnerable Road Users</SubHeading>
                            <BulletList items={[
                                <><strong>Pedestrians:</strong> Always have the right-of-way in a crosswalk. If a pedestrian is at a corner, yield.</>,
                                <><strong>Bicyclists:</strong> Must obey the same traffic rules as cars. Provide a safe passing distance of at least <strong>3 feet</strong>.</>,
                            ]} />

                            <SubHeading>Sharing the Road with Commercial Trucks</SubHeading>
                            <BulletList items={[
                                <><strong>The "No-Zone":</strong> Trucks have large blind spots on the front, rear, and both sides. If you can't see the truck driver in their side mirror, they can't see you.</>,
                                <><strong>Turning:</strong> Large trucks make wide right turns. Do not pull up alongside a truck that has its right signal on.</>,
                                <><strong>Stopping Distance:</strong> Trucks take much longer to stop. Never unexpectedly pull in front of a truck and hit your brakes.</>,
                            ]} />

                            <SubHeading>Ohio's Move Over Law</SubHeading>
                            <InfoBox>
                                When approaching stationary emergency vehicles, tow trucks, or highway maintenance vehicles displaying flashing lights, Ohio law requires you to <strong>shift to an adjacent lane</strong> (if safe) or <strong>slow down significantly</strong> below the speed limit to proceed with caution.
                            </InfoBox>

                            <SubHeading>Slow-Moving Vehicles</SubHeading>
                            <p>Farm machinery and animal-drawn vehicles travel at 25 mph or less. They display an orange triangle sign with a red border. By law, you may pass these slow-moving vehicles even in a no-passing zone if there is enough visibility and it is safe.</p>
                        </SectionCard>

                        {/* ===== Section 10: Emergency Situations ===== */}
                        <SectionCard id="section-10" number={10} title="Emergency Situations">
                            <SubHeading>In the Event of a Crash</SubHeading>
                            <BulletList items={[
                                <><strong>Stop immediately:</strong> Leaving the scene of a crash is a serious offense (hit-and-run).</>,
                                'Warn approaching traffic by turning on hazard lights or setting up flares.',
                                'Notify police, especially if there are injuries, fatalities, or property damage exceeding $1,000.',
                                'Exchange names, addresses, phone numbers, and insurance information with all involved parties.',
                            ]} />

                            <SubHeading>Vehicle Malfunctions</SubHeading>
                            <div className="space-y-3">
                                <ConditionItem emoji="💥" name="Tire Blowout">
                                    Do not panic. Keep a firm grip on the steering wheel, take your foot off the gas to slow down gradually. <strong>Do not brake hard.</strong> Steer the vehicle off the roadway.
                                </ConditionItem>
                                <ConditionItem emoji="🛑" name="Brake Failure">
                                    Pump the brake pedal rapidly to build pressure. If that fails, use the parking brake gently while keeping the release button held. Shift into a lower gear to use engine braking.
                                </ConditionItem>
                            </div>
                        </SectionCard>

                        {/* ===== Section 11: Taking the Driving Test ===== */}
                        <SectionCard id="section-11" number={11} title="Taking the Driving Test">
                            <p>The Ohio driving test consists of two parts: Maneuverability and On-Road Skills. You must pass both.</p>

                            <SubHeading>1. Maneuverability (Cones Test)</SubHeading>
                            <BulletList items={[
                                'You will steer your vehicle through a set of cones to demonstrate vehicle control.',
                                'It involves driving forward and backing up through traffic markers.',
                                'Knocking over a marker or displacing one will result in lost points.',
                            ]} />

                            <SubHeading>2. On-Road Skills Test</SubHeading>
                            <BulletList items={[
                                'You must demonstrate safe driving in normal traffic situations.',
                                'You will be judged on starting, stopping, turning, lane positioning, backing, and responding correctly to traffic signs and signals.',
                                'If you commit a dangerous action or cause a crash during the test, it is an automatic failure.',
                            ]} />

                            <InfoBox className="mt-2 text-sm text-gray-700">
                                <strong>Tip:</strong> If you fail either part of the test, you must wait at least <strong>seven days</strong> to retake it. If you are 18 or older and fail, you must take an Abbreviated Adult Driver Training Course before retesting.
                            </InfoBox>
                        </SectionCard>

                        {/* ===== Section 12: Purchase Your Driver License ===== */}
                        <SectionCard id="section-12" number={12} title="Purchase Your Driver License">
                            <BulletList items={[
                                'Once you pass the maneuverability and on-road tests, you must purchase the actual license from a Deputy Registrar License Agency.',
                                "A standard real estate license expires on your birthday either four (4) or eight (8) years after issuance, depending on the option you choose.",
                                'Always notify the BMV of an address change within 10 days.',
                            ]} />
                        </SectionCard>

                        {/* ===== Section 13: What Else Should I Know? ===== */}
                        <SectionCard id="section-13" number={13} title="What Else Should I Know?">
                            <SubHeading>Organ Donation and Programs</SubHeading>
                            <BulletList items={[
                                <><strong>Organ Donor:</strong> You may enroll in the Ohio Donor Registry when you get your license. A heart symbol will be printed on the card.</>,
                                <><strong>Save Our Sight:</strong> You can donate $1 or more to help preserve children's vision in Ohio.</>,
                                <><strong>Next of Kin:</strong> Adding emergency contact information allows law enforcement to easily reach your relatives in an emergency.</>,
                            ]} />
                        </SectionCard>


                        {/* ===== Section 2: Getting an Instruction Permit (pp. 8-10) ===== */}
                        <SectionCard id="section-2" number={2} title="Before You Drive">
                            <SubHeading>Vehicle Inspection & Equipment</SubHeading>
                            <p className="mb-3">Ensure your vehicle is safe and legal to drive before you hit the road:</p>
                            <BulletList items={[
                                <><strong>Tires:</strong> Must have a minimum of <strong>1/16-inch tread depth</strong>. Check pressure regularly. Studded tires are legal in Ohio from November 1 to April 15.</>,
                                <><strong>Lights:</strong> Headlights, taillights, brake lights, turn signals, and license plate lights must be in working order.</>,
                                <><strong>Window Tinting:</strong> Windshield must allow 70% light transmission. Front side windows must allow 50%.</>,
                            ]} />

                            <SubHeading>Seat Belts and Safety Restraints</SubHeading>
                            <BulletList items={[
                                'Ohio law requires the driver and front-seat passengers to wear safety belts at all times in most passenger vehicles.',
                                <><strong>Drivers under age 18:</strong> The number of occupants is limited to the number of installed safety belts, and <strong>everyone</strong> must wear a seat belt.</>,
                                'Wear the shoulder belt across your chest with minimal slack. Do not wear it under your arm or behind your back.',
                            ]} />

                            <SubHeading>Mirror and Seat Adjustment</SubHeading>
                            <p>
                                Keep at least <strong>10 inches</strong> between your chest and the steering wheel to allow safe airbag deployment.
                                Adjust all mirrors to provide maximum visibility and minimize blind spots.
                            </p>
                        </SectionCard>

                        {/* ===== Section 3: The Testing Process (pp. 11-14) ===== */}
                        <SectionCard id="section-3" number={3} title="Be Alert">
                            <SubHeading>Distracted Driving Laws</SubHeading>
                            <p className="mb-3">Ohio has strict laws regarding the use of electronic devices while driving:</p>
                            <BulletList items={[
                                <><strong>Drivers Age 18 and Older:</strong> It is illegal to hold or support a cell phone while driving. You may only use hands-free technology and activate features with a single touch or swipe.</>,
                                <><strong>Drivers Under Age 18:</strong> It is <strong>illegal to use any electronic device</strong>, even in hands-free mode or while stopped at a red light. Violation is a primary offense (60-day suspension and $150 fine for first offense).</>,
                            ]} />
                            <InfoBox className="mt-2">
                                Exceptions exist for reporting emergencies to law enforcement or utilizing a device for navigation (if properly mounted with one-swipe use).
                            </InfoBox>

                            <SubHeading>Impaired Driving</SubHeading>
                            <BulletList items={[
                                'It is illegal to operate a motor vehicle under the influence of alcohol or drugs.',
                                'This includes legally prescribed and over-the-counter medications that impair your ability to drive safely.',
                                'Alcohol blurs vision, slows reaction time, and reduces your ability to judge distance and speed.',
                            ]} />
                        </SectionCard>

                        {/* ===== Section 4: Changing, Replacing, and Renewing (pp. 14) ===== */}
                        <SectionCard id="section-4" number={4} title="Rules of the Road">
                            <SubHeading>Speed Limits in Ohio</SubHeading>
                            <p className="mb-3">You must never drive faster than a speed that allows you to stop safely within the assured clear distance ahead. Standard limits are:</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                                {[
                                    { limit: '15 mph', where: 'Alleys within a municipal corporation' },
                                    { limit: '20 mph', where: 'School Zones (during recess & arrival/departure times)' },
                                    { limit: '25 mph', where: 'Most streets within a municipal corporation' },
                                    { limit: '35 mph', where: 'State routes in municipal corporations (outside business dist.)' },
                                    { limit: '50 mph', where: 'State routes outside urban districts' },
                                    { limit: '55 mph', where: 'Freeways with paved shoulders inside municipal' },
                                    { limit: '70 mph', where: 'Rural freeways and the Ohio Turnpike' },
                                ].map((item) => (
                                    <div key={item.limit} className="p-2.5 bg-gray-50 rounded-lg text-sm border border-gray-100">
                                        <span className="font-bold text-[#007aff]">{item.limit}</span>
                                        <span className="text-gray-600"> — {item.where}</span>
                                    </div>
                                ))}
                            </div>

                            <SubHeading>Right-of-Way Principles</SubHeading>
                            <BulletList items={[
                                <><strong>Intersections:</strong> Yield to the driver who arrives before you. If you arrive at the same time at a 4-way stop, yield to the driver on your <strong>right</strong>.</>,
                                <><strong>Left Turns:</strong> You must <strong>yield to oncoming traffic</strong> when making a left turn.</>,
                                <><strong>Pedestrians:</strong> You must always yield to pedestrians entering or currently in a crosswalk.</>,
                                <><strong>Emergency Vehicles:</strong> Yield to police, fire, and ambulances displaying flashing lights and sounding a siren.</>,
                            ]} />

                            <SubHeading>Traffic Signals</SubHeading>
                            <BulletList items={[
                                <><strong>Solid Red:</strong> Stop behind the line or crosswalk. You may only turn right on red if safe and not prohibited by a sign.</>,
                                <><strong>Flashing Yellow:</strong> Slow down and proceed through the intersection with caution.</>,
                                <><strong>Flashing Red:</strong> Treat exactly like a stop sign. Come to a complete stop before proceeding.</>,
                                <><strong>Inoperable Light:</strong> Treat an intersection with broken traffic lights as a four-way stop sign.</>,
                            ]} />
                        </SectionCard>

                        {/* ===== Section 5: An Introduction to Driving (pp. 15-18) ===== */}
                        <SectionCard id="section-5" number={5} title="Learning to Drive">
                            <SubHeading>Bringing the Vehicle to a Stop</SubHeading>
                            <BulletList items={[
                                <>Maintain a <strong>3-4 second following distance</strong> behind the vehicle ahead of you to ensure you have enough stopping distance.</>,
                                'Stopping distance depends on your reaction time, vehicle speed, brake condition, and pavement conditions.',
                                'Stop behind the stop line or crosswalk at any stop sign or red traffic signal before entering an intersection.',
                            ]} />

                            <SubHeading>Turning and Signaling</SubHeading>
                            <BulletList items={[
                                <>A turn signal must be activated at least <strong>100 feet before</strong> your intended turn.</>,
                                <><strong>Right Turn on Red:</strong> You may turn right on red after a complete stop unless a sign specifically prohibits it. Yield to crossing pedestrians and traffic.</>,
                                <><strong>Left Turn on Red:</strong> You may only turn left on red from the extreme left lane of a one-way street onto another one-way street, unless a sign prohibits it.</>,
                                'When turning multiple lanes, stay in your lane until the turn is completely finished.',
                            ]} />

                            <SubHeading>Passing and Lane Changes</SubHeading>
                            <BulletList items={[
                                <>Pass only when safe. A <strong>broken (dashed) yellow line</strong> means passing is allowed; a <strong>solid yellow line</strong> means passing is prohibited.</>,
                                <><strong>Two-Way Left Turn Lane:</strong> Marked with a broken yellow line on the inside and solid yellow on the outside. This center lane is for <strong>left turns only</strong>—it is not for traveling or passing.</>,
                            ]} />

                            <SubHeading>Roundabouts</SubHeading>
                            <p>Traffic travels counterclockwise. Vehicles entering the roundabout must yield the right-of-way to the circulating traffic already inside. Do not change lanes once you enter a roundabout.</p>
                        </SectionCard>

                        {/* ===== Section 6: Navigating the Roads (pp. 19-38) ===== */}
                        <SectionCard id="section-6" number={6} title="State Laws and Penalties">
                            <SubHeading>Alcohol and Drug Laws</SubHeading>
                            <p className="mb-2">Ohio law strictly prohibits Driving Under the Influence (OVI). Blood Alcohol Concentration (BAC) limits are:</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                                {[
                                    { limit: '0.08%', who: 'Drivers Age 21 and Older' },
                                    { limit: '0.02%', who: 'Drivers Under Age 21 (Zero Tolerance)' },
                                    { limit: '0.04%', who: 'Commercial Drivers (CDL)' },
                                ].map((item) => (
                                    <div key={item.limit} className="flex items-center gap-3 p-3 bg-red-50/50 rounded-xl border border-red-100">
                                        <div className="font-bold text-red-600 text-lg">{item.limit}</div>
                                        <div className="text-sm font-medium text-gray-800">{item.who}</div>
                                    </div>
                                ))}
                            </div>
                            <BulletList items={[
                                <><strong>Implied Consent:</strong> By driving in Ohio, you agree to submit to a chemical test (breath, blood, or urine) if arrested for OVI. Refusal leads to an immediate license suspension (at least 1 year).</>,
                                <>First OVI offense carries severe penalties, including a <strong>minimum 3 days in jail</strong> (or intervention program), fines, and a license suspension from 1 to 3 years.</>,
                            ]} />

                            <SubHeading>Financial Responsibility (Insurance)</SubHeading>
                            <BulletList items={[
                                'You must maintain auto liability insurance to drive in Ohio.',
                                'Minimum coverage: $25,000 for injury/death of one person, $50,000 for multiple people, and $25,000 for property damage.',
                                'Proof of insurance must be shown at traffic stops and accident scenes.',
                            ]} />

                            <SubHeading>Child Passenger Safety</SubHeading>
                            <BulletList items={[
                                <><strong>Under 4 years old AND under 40 lbs:</strong> Must be in a federally approved child safety seat.</>,
                                <><strong>Under 8 years old AND under 4'9":</strong> Must be in a booster seat when riding in a motor vehicle.</>,
                                <><strong>Age 8 to 15:</strong> Must use a standard safety belt.</>,
                            ]} />

                            <WarningBox title="Riding Outside the Vehicle" icon={<AlertTriangle className="w-4 h-4" />}>
                                It is <strong>illegal</strong> for anyone under age 16 to ride in the unenclosed or unroofed cargo area of a vehicle (like a pickup truck bed) if the vehicle is traveling faster than 25 mph.
                            </WarningBox>
                        </SectionCard>

                        {/* ===== Section 7: Laws and Rules of the Road (pp. 39-62) ===== */}
                        <SectionCard id="section-7" number={7} title="Special Driving Situations">
                            <SubHeading>Headlights and Night Driving</SubHeading>
                            <BulletList items={[
                                'Headlights must be turned on from sunset to sunrise.',
                                'Also required at any time visibility is less than 1,000 feet, or when using windshield wipers due to precipitation.',
                                <><strong>Dim your high beams</strong> before you meet oncoming traffic or when you are following another vehicle closely.</>,
                                'At night, keep your speed reasonable so you can stop safely within the distance illuminated by your headlights.',
                            ]} />

                            <SubHeading>Fog and Winter Driving</SubHeading>
                            <BulletList items={[
                                <><strong>Fog:</strong> Use <strong>low-beam</strong> headlights. High beams reflect off the fog and impair visibility. Slow down and increase distance.</>,
                                <><strong>Winter Ice & Snow:</strong> Bridges, overpasses, and shaded areas freeze first. Start your vehicle slowly, brake gently, and maintain a large space cushion.</>,
                            ]} />

                            <SubHeading>Work Zones</SubHeading>
                            <p>Give construction workers a "brake." Fines are doubled for speeding in a work zone. Watch out for orange diamond-shaped warning signs, barrels, and cones, and follow the instructions of any flaggers.</p>
                        </SectionCard>

                        {/* ===== Section 8: Safe Driving (pp. 63-77) ===== */}
                        <SectionCard id="section-8" number={8} title="Safe Driving Tips">
                            <SubHeading>Visual and Space Management</SubHeading>
                            <BulletList items={[
                                'Scan the road ahead instead of staring at the vehicle directly in front of you. This gives you advance warning of hazards.',
                                <>Look ahead at least <strong>10 to 15 seconds</strong> of travel time.</>,
                                'Leave a space cushion around all sides of your vehicle to allow room to maneuver in an emergency.',
                            ]} />

                            <SubHeading>Communicating with Others</SubHeading>
                            <BulletList items={[
                                'Always use your turn signals before changing direction or lane positioning.',
                                'Use your horn to establish eye contact with other drivers or pedestrians if you feel they do not see you.',
                                'Use your hazard (flashers) when your vehicle is disabled and pulled off the road.',
                            ]} />
                        </SectionCard>

                        {/* ===== Section 9: Alcohol and Drugs (pp. 78-81) ===== */}
                        <SectionCard id="section-9" number={9} title="Sharing the Road">
                            <SubHeading>Vulnerable Road Users</SubHeading>
                            <BulletList items={[
                                <><strong>Pedestrians:</strong> Always have the right-of-way in a crosswalk. If a pedestrian is at a corner, yield.</>,
                                <><strong>Bicyclists:</strong> Must obey the same traffic rules as cars. Provide a safe passing distance of at least <strong>3 feet</strong>.</>,
                            ]} />

                            <SubHeading>Sharing the Road with Commercial Trucks</SubHeading>
                            <BulletList items={[
                                <><strong>The "No-Zone":</strong> Trucks have large blind spots on the front, rear, and both sides. If you can't see the truck driver in their side mirror, they can't see you.</>,
                                <><strong>Turning:</strong> Large trucks make wide right turns. Do not pull up alongside a truck that has its right signal on.</>,
                                <><strong>Stopping Distance:</strong> Trucks take much longer to stop. Never unexpectedly pull in front of a truck and hit your brakes.</>,
                            ]} />

                            <SubHeading>Ohio's Move Over Law</SubHeading>
                            <InfoBox>
                                When approaching stationary emergency vehicles, tow trucks, or highway maintenance vehicles displaying flashing lights, Ohio law requires you to <strong>shift to an adjacent lane</strong> (if safe) or <strong>slow down significantly</strong> below the speed limit to proceed with caution.
                            </InfoBox>

                            <SubHeading>Slow-Moving Vehicles</SubHeading>
                            <p>Farm machinery and animal-drawn vehicles travel at 25 mph or less. They display an orange triangle sign with a red border. By law, you may pass these slow-moving vehicles even in a no-passing zone if there is enough visibility and it is safe.</p>
                        </SectionCard>

                        {/* ===== Section 10: Financial Responsibility, Insurance, and Collisions (pp. 82-84) ===== */}
                        <SectionCard id="section-10" number={10} title="Emergency Situations">
                            <SubHeading>In the Event of a Crash</SubHeading>
                            <BulletList items={[
                                <><strong>Stop immediately:</strong> Leaving the scene of a crash is a serious offense (hit-and-run).</>,
                                'Warn approaching traffic by turning on hazard lights or setting up flares.',
                                'Notify police, especially if there are injuries, fatalities, or property damage exceeding $1,000.',
                                'Exchange names, addresses, phone numbers, and insurance information with all involved parties.',
                            ]} />

                            <SubHeading>Vehicle Malfunctions</SubHeading>
                            <div className="space-y-3">
                                <ConditionItem emoji="💥" name="Tire Blowout">
                                    Do not panic. Keep a firm grip on the steering wheel, take your foot off the gas to slow down gradually. <strong>Do not brake hard.</strong> Steer the vehicle off the roadway.
                                </ConditionItem>
                                <ConditionItem emoji="🛑" name="Brake Failure">
                                    Pump the brake pedal rapidly to build pressure. If that fails, use the parking brake gently while keeping the release button held. Shift into a lower gear to use engine braking.
                                </ConditionItem>
                            </div>
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
                                <Link href={`/ohio-real-estate-practice-test`}>
                                    <span className="flex items-center gap-2">
                                        <span className="whitespace-nowrap">Take Free Practice Test</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
                                    </span>
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-xl transition-all duration-300 text-sm md:text-base w-full sm:w-auto min-w-[240px] flex flex-row flex-nowrap items-center justify-center gap-2">
                                <Link href={`/handbooks/ohio`}>
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
