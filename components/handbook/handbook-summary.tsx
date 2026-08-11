"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/auth-context';
import { STATES, StateKey } from '@/lib/constants';
import { STATE_DEPARTMENTS } from '@/lib/data/state-departments';
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
    Shield,
    Eye,
    ArrowRight,
    MapPin,
    Sparkles,
    Clock,
    Users,
    Scale,
    Bookmark
} from 'lucide-react';

const SECTIONS = [
    { id: 'section-1', label: "1. Principles & Law" },
    { id: 'section-2', label: '2. Property Ownership' },
    { id: 'section-3', label: '3. Agency & Fiduciary Duties' },
    { id: 'section-4', label: '4. Disclosures & Hazards' },
    { id: 'section-5', label: '5. Real Estate Contracts' },
    { id: 'section-6', label: '6. Transfer of Title' },
    { id: 'section-7', label: '7. Financing & Mortgages' },
    { id: 'section-8', label: '8. Property Valuation & Math' },
    { id: 'section-9', label: '9. Leasing & Management' },
    { id: 'section-10', label: '10. Fair Housing & Ethics' },
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
                    <div className="w-full">
                        {/* Text Content */}
                        <div className="w-full max-w-4xl text-left pt-2 md:pt-6">
                            <Link
                                href={`/${stateKey}-real-estate-practice-test`}
                                className="inline-flex items-center gap-1 text-sm text-[#007aff] hover:text-[#0056cc] transition-colors mb-3"
                            >
                                <ChevronRight className="w-3.5 h-3.5 rotate-180" />
                                Back to Practice Tests
                            </Link>

                            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                Summary of {stateName} ({STATES[stateKey as StateKey]?.code}) Real Estate Handbook {currentYear}
                            </h1>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-3">
                                A comprehensive, exam-focused summary of the{' '}
                                <a
                                    href={STATE_DEPARTMENTS[stateKey as keyof typeof STATE_DEPARTMENTS]?.url || STATE_DEPARTMENTS.default.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#007aff] font-medium relative inline-block group"
                                >
                                    official {currentYear} {stateName} Real Estate Handbook
                                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#007aff] transition-all duration-300 group-hover:w-full"></span>
                                </a>
                                . We break down all 10 core real estate topics — from property rights and agency relationships to contracts, financing, valuation, and fair housing laws. Each section highlights the key rules, regulations, and terminology the state license exam actually tests you on.
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

                        {/* ===== Section 1: Real Estate Principles & Law ===== */}
                        <SectionCard id="section-1" number={1} title="Real Estate Principles & Law">
                            <p>
                                Understanding property law and land descriptions is the foundation of real estate practice. Licensing examinations heavily test the distinction between real property and personal property.
                            </p>
                            <SubHeading>Real vs. Personal Property</SubHeading>
                            <BulletList items={[
                                <><strong>Real Property:</strong> Land, anything attached to it, rights that go with the land (appurtenances), and the Bundle of Rights (Possession, Control, Exclusion, Enjoyment, Disposition).</>,
                                <><strong>Personal Property (Chattel):</strong> Movable items not annexed to the land. Personal property is transferred via a Bill of Sale, whereas real property is transferred via a Deed.</>,
                                <><strong>Fixtures:</strong> Personal property that has become real property through attachment. Tested via the MARIA test: Method of attachment, Adaptability, Relationship of parties, Intent, Agreement.</>
                            ]} />
                            <SubHeading>Land Description Methods</SubHeading>
                            <BulletList items={[
                                <><strong>Metes and Bounds:</strong> Description using distance (metes) and direction/angles (bounds). Must start and end at a Point of Beginning (POB).</>,
                                <><strong>Government Survey System:</strong> Standardized grids using Principal Meridians (running North-South) and Base Lines (running East-West).</>,
                                <><strong>Lot and Block:</strong> Uses recorded subdivision maps to identify individual parcels by block and lot numbers.</>
                            ]} />
                        </SectionCard>

                        {/* ===== Section 2: Forms of Property Ownership ===== */}
                        <SectionCard id="section-2" number={2} title="Forms of Property Ownership">
                            <p>
                                Ownership can be held solely by one entity or concurrently by multiple individuals. Exam questions focus on co-ownership structures and the rights associated with each.
                            </p>
                            <SubHeading>Co-Ownership Structures</SubHeading>
                            <BulletList items={[
                                <><strong>Tenancy in Common:</strong> Co-ownership where owners can hold unequal shares. Contains no right of survivorship; interests pass to heirs upon death.</>,
                                <><strong>Joint Tenancy:</strong> Co-ownership requiring four unities (Time, Title, Interest, Possession). Includes the <strong>Right of Survivorship</strong> — interests pass to surviving owners, not heirs.</>,
                                <><strong>Tenancy by the Entirety:</strong> Joint tenancy reserved exclusively for married couples, providing automatic right of survivorship and protection from individual debts.</>
                            ]} />
                            <SubHeading>Government Powers (P.E.T.E.)</SubHeading>
                            <BulletList items={[
                                <><strong>Police Power:</strong> Authority to regulate land use (zoning, building codes).</>,
                                <><strong>Eminent Domain:</strong> Power to take private property for public use through condemnation, requiring just compensation.</>,
                                <><strong>Taxation:</strong> Authority to levy property taxes (ad valorem taxes) to fund government services.</>,
                                <><strong>Escheat:</strong> Reversion of property ownership to the state when an owner dies intestate with no heirs.</>
                            ]} />
                        </SectionCard>

                        {/* ===== Section 3: Agency & Fiduciary Duties ===== */}
                        <SectionCard id="section-3" number={3} title="Agency & Fiduciary Duties">
                            <p>
                                Agency is the legal relationship created when a broker represents a client. This section details the fiduciary obligations owed to clients.
                            </p>
                            <WarningBox title="Fiduciary Obligations (L.O.U.D.C.A.)" icon={<Shield className="w-5 h-5" />}>
                                <p className="text-sm text-amber-900 mt-1">
                                    Licensing exams heavily test the agent&apos;s duties:
                                    <br />
                                    • <strong>Loyalty:</strong> Put client interests above all others, including your own.
                                    <br />
                                    • <strong>Obedience:</strong> Follow all lawful instructions from the client.
                                    <br />
                                    • <strong>Utility/Disclosure:</strong> Disclose all material facts affecting the property or transaction.
                                    <br />
                                    • <strong>Confidentiality:</strong> Safeguard the client&apos;s personal and financial information.
                                    <br />
                                    • <strong>Accounting:</strong> Account for all funds (escrow/earnest money) placed in your care.
                                    <br />
                                    • <strong>Reasonable Care:</strong> Apply professional skill and diligence to the representation.
                                </p>
                            </WarningBox>
                            <SubHeading>Agency Relationships</SubHeading>
                            <BulletList items={[
                                <><strong>Single Agency:</strong> Representing only one party (buyer or seller) in a transaction.</>,
                                <><strong>Dual Agency:</strong> Representing both the buyer and seller in the same transaction. Requires written disclosure and consent from both parties.</>,
                                <><strong>Transaction Broker / Facilitator:</strong> A non-agent role providing administrative services without fiduciary representation to either side.</>
                            ]} />
                        </SectionCard>

                        {/* ===== Section 4: Disclosures & Hazards ===== */}
                        <SectionCard id="section-4" number={4} title="Property Disclosures & Consumer Protection">
                            <p>
                                Brokers must ensure full disclosure of material property defects and environmental hazards to protect buyers and prevent misrepresentation.
                            </p>
                            <SubHeading>Material Facts & Latent Defects</SubHeading>
                            <BulletList items={[
                                <><strong>Material Fact:</strong> Any information that would affect a reasonable person&apos;s decision to purchase or the price they would pay.</>,
                                <><strong>Latent Defects:</strong> Hidden structural defects not discoverable by a standard visual inspection. Sellers must disclose latent defects.</>,
                                <><strong>Stigmatized Properties:</strong> Properties associated with non-physical events (e.g., murder, haunting). State laws dictate whether disclosure is mandatory.</>
                            ]} />
                            <SubHeading>Federal Hazard Disclosures</SubHeading>
                            <InfoBox>
                                <p className="text-sm">
                                    <strong>Lead-Based Paint Hazard Reduction Act (1992):</strong> Applies to housing built before <strong>1978</strong>. Sellers/landlords must provide buyers/tenants with a lead disclosure pamphlet, disclose known lead paint, and allow a 10-day period for paint inspections.
                                </p>
                            </InfoBox>
                        </SectionCard>

                        {/* ===== Section 5: Real Estate Contracts ===== */}
                        <SectionCard id="section-5" number={5} title="Real Estate Contracts">
                            <p>
                                Contracts are legally binding agreements governing transactions. Exam questions focus on contract validity and broker employment agreements.
                            </p>
                            <SubHeading>Essential Elements of a Valid Contract</SubHeading>
                            <BulletList items={[
                                <><strong>Competent Parties:</strong> Legal age and mental capacity to enter an agreement.</>,
                                <><strong>Offer and Acceptance:</strong> Mutual assent (meeting of the minds).</>,
                                <><strong>Consideration:</strong> Something of value exchanged (money, promises).</>,
                                <><strong>Lawful Objective:</strong> The purpose of the contract must be legal.</>,
                                <><strong>Statute of Frauds:</strong> Law requiring real estate contracts to be in writing to be legally enforceable.</>
                            ]} />
                            <SubHeading>Listing Agreements</SubHeading>
                            <BulletList items={[
                                <><strong>Exclusive Right to Sell:</strong> The listing broker is paid a commission regardless of who procures the buyer (most protective listing type).</>,
                                <><strong>Exclusive Agency:</strong> The listing broker is paid *only* if a broker procures the buyer; the seller reserves the right to sell independently without commission.</>,
                                <><strong>Open Listing:</strong> Non-exclusive agreement where commission is paid only to the broker who acts as the procuring cause.</>
                            ]} />
                        </SectionCard>

                        {/* ===== Section 6: Transfer of Title ===== */}
                        <SectionCard id="section-6" number={6} title="Transfer of Title & Escrow">
                            <p>
                                Title transfer refers to the conveyance of property ownership. Title must be checked for encumbrances (liens, easements) prior to closing.
                            </p>
                            <SubHeading>Types of Deeds</SubHeading>
                            <BulletList items={[
                                <><strong>General Warranty Deed:</strong> Provides the highest level of buyer protection, including covenants of seisin, quiet enjoyment, and warranty forever.</>,
                                <><strong>Special Warranty Deed:</strong> Warranties are limited only to defects that occurred during the seller&apos;s ownership period.</>,
                                <><strong>Quitclaim Deed:</strong> Conveys whatever interest the grantor has, with no covenants or warranties. Often used to clear clouds on title.</>
                            ]} />
                            <SubHeading>Escrow & Recording</SubHeading>
                            <BulletList items={[
                                <><strong>Constructive Notice:</strong> Achieved by recording documents in public county records, alerting the public to ownership interests.</>,
                                <><strong>Real Estate Settlement Procedures Act (RESPA):</strong> Federal law requiring disclosures of closing costs and prohibiting kickbacks between settlement service providers.</>
                            ]} />
                        </SectionCard>

                        {/* ===== Section 7: Financing & Mortgages ===== */}
                        <SectionCard id="section-7" number={7} title="Financing & Mortgages">
                            <p>
                                Most real estate transactions rely on mortgage financing. This section reviews financing sources and federal lending protection acts.
                            </p>
                            <SubHeading>Mortgage Markets</SubHeading>
                            <BulletList items={[
                                <><strong>Primary Market:</strong> Markets where loans are originated directly to consumers (banks, credit unions, mortgage companies).</>,
                                <><strong>Secondary Market:</strong> Markets where existing mortgages are bought and sold to maintain liquidity (Fannie Mae, Freddie Mac, Ginnie Mae).</>
                            ]} />
                            <SubHeading>Lending Laws</SubHeading>
                            <BulletList items={[
                                <><strong>Truth in Lending Act (TILA / Reg Z):</strong> Requires lenders to disclose the true cost of credit, including the Annual Percentage Rate (APR).</>,
                                <><strong>Equal Credit Opportunity Act (ECOA):</strong> Prohibits lenders from discriminating based on race, color, religion, national origin, sex, marital status, age, or public assistance dependency.</>
                            ]} />
                        </SectionCard>

                        {/* ===== Section 8: Property Valuation & Math ===== */}
                        <SectionCard id="section-8" number={8} title="Property Valuation & Real Estate Math">
                            <p>
                                Appraisals determine market value for lending, sales, and investment. Real estate professionals must perform property valuation calculations.
                            </p>
                            <SubHeading>Three Approaches to Value</SubHeading>
                            <BulletList items={[
                                <><strong>Sales Comparison Approach:</strong> Compares target property to recently sold local comparable properties. Ideal for residential real estate.</>,
                                <><strong>Cost Approach:</strong> Estimates value based on land value plus cost to rebuild structures, minus depreciation. Ideal for unique buildings (schools, libraries).</>,
                                <><strong>Income Capitalization Approach:</strong> Determines value based on income generation (Net Operating Income / Cap Rate). Ideal for investment properties.</>
                            ]} />
                            <SubHeading>Key Mathematical Formulas</SubHeading>
                            <WarningBox title="Exam Math Cheatsheet" icon={<Scale className="w-5 h-5" />}>
                                <p className="text-sm text-amber-900 mt-1">
                                    Be prepared to compute these on test day:
                                    <br />
                                    • <strong>Commission:</strong> Sales Price × Commission Rate = Broker Commission
                                    <br />
                                    • <strong>Net Operating Income (NOI):</strong> Gross Income - Operating Expenses = NOI
                                    <br />
                                    • <strong>Capitalization Value:</strong> Net Operating Income (NOI) ÷ Cap Rate = Property Value
                                    <br />
                                    • <strong>Loan-to-Value (LTV) Ratio:</strong> Loan Amount ÷ Property Value = LTV Ratio
                                </p>
                            </WarningBox>
                        </SectionCard>

                        {/* ===== Section 9: Leasing & Management ===== */}
                        <SectionCard id="section-9" number={9} title="Property Management & Leasing">
                            <p>
                                Property managers act on behalf of landlords to preserve property value and handle leasing agreements.
                            </p>
                            <SubHeading>Leasehold Estates</SubHeading>
                            <BulletList items={[
                                <><strong>Estate for Years:</strong> A lease with a specific, defined start and end date. No notice is required to terminate.</>,
                                <><strong>Periodic Tenancy:</strong> A lease that automatically renews for successive periods (e.g., month-to-month) until proper termination notice is given.</>,
                                <><strong>Estate at Sufferance:</strong> Occurs when a tenant remains in possession after lease expiration without landlord consent (holdover tenant).</>
                            ]} />
                            <SubHeading>Trust Account Regulations</SubHeading>
                            <BulletList items={[
                                <><strong>Commingling:</strong> Mixing client funds (trust money) with personal or brokerage funds. <strong>Strictly prohibited</strong> by licensing commissions.</>,
                                <><strong>Conversion:</strong> Spending client trust funds for personal or business expenses (illegal conversion of escrow money).</>
                            ]} />
                        </SectionCard>

                        {/* ===== Section 10: Fair Housing & Ethics ===== */}
                        <SectionCard id="section-10" number={10} title="Fair Housing & Professional Ethics">
                            <p>
                                Fair housing laws promote equal opportunity and prohibit discriminatory real estate practices.
                            </p>
                            <SubHeading>Federal Fair Housing Act of 1968</SubHeading>
                            <BulletList items={[
                                <><strong>Protected Classes:</strong> Race, color, national origin, religion, sex, familial status, and disability. (Note: Sexual orientation and gender identity are protected under HUD regulations).</>,
                                <><strong>Steering:</strong> Directing buyers toward or away from specific neighborhoods based on protected classes.</>,
                                <><strong>Blockbusting:</strong> Encouraging owners to sell by claiming a protected class is moving into the neighborhood.</>,
                                <><strong>Redlining:</strong> Refusing to make loans or issue insurance policies in specific areas based on class demographics.</>
                            ]} />
                        </SectionCard>

                    </div>
                </div>
            </main>

            {/* Premium CTA */}
            {!isPremium && (
                <section className="bg-blue-600 py-16 text-white text-center">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <Sparkles className="w-12 h-12 mx-auto mb-6 text-yellow-300" />
                        <h2 className="text-3xl font-extrabold mb-4">Want the Full Cheat Sheets?</h2>
                        <p className="text-lg text-blue-100 mb-8">
                            Get instant access to state-specific cheat sheets, practice simulators, and former examiner-curated questions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                onClick={handleSignup}
                                size="lg"
                                className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-8 py-4 rounded-xl shadow-lg transition-transform hover:-translate-y-0.5"
                            >
                                Unlock All Study Materials
                            </Button>
                        </div>
                    </div>
                </section>
            )}

            <Footer />

            <AuthModal
                isOpen={authModalOpen}
                onClose={() => setAuthModalOpen(false)}
                mode={authMode}
                onSwitchMode={setAuthMode}
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
