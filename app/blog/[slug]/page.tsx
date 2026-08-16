'use client'

import { useParams, useRouter } from 'next/navigation'
import { AuthProvider, useAuth } from '@/contexts/auth-context'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { BLOG_POSTS } from '@/lib/blog/posts'
import { Calendar, Clock, User, ArrowLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

function BlogPostContent() {
    const params = useParams()
    const router = useRouter()
    const { user, userData, isPremium, premiumStatus, signOut } = useAuth()

    const slug = params.slug as string
    const post = BLOG_POSTS.find((p: any) => p.slug === slug)

    if (!post) {
        return (
            <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
                <h1 className="text-4xl font-bold mb-4 text-gray-900">Post Not Found</h1>
                <Link href="/blog" className="text-[#007aff] font-bold hover:underline flex items-center gap-2">
                    <ArrowLeft className="w-5 h-5" /> Back to Blog
                </Link>
            </div>
        )
    }

    const handleLogin = () => router.push('/#login')
    const handleSignup = () => router.push('/#signup')
    const handleLogout = async () => await signOut()
    const handleDashboard = () => router.push('/dashboard')

    // Map slugs to real estate content
    const renderArticleContent = () => {
        switch (slug) {
            case 'how-to-get-real-estate-license-guide':
                return (
                    <div className="prose prose-blue max-w-none text-gray-800 space-y-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-b pb-2">Introduction</h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-700">
                            Obtaining a real estate license is a significant career milestone. It transitions you from a standard employee mindset to a business owner mindset. However, navigating the state regulatory boards, education requirements, background checks, exams, and brokerage affiliations can feel overwhelming. This guide maps out the step-by-step path to licensure, details pre-licensing education requirements across key states, and outlines post-licensing setup costs to help you launch a successful career.
                        </p>

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-b pb-2">Salesperson vs. Broker vs. Realtor</h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-700">
                            It is important to understand the hierarchy of licenses before you begin:
                        </p>
                        <ul className="list-disc pl-6 space-y-3 text-base md:text-lg text-gray-700">
                            <li><strong>Real Estate Salesperson (Agent):</strong> The entry-level license. You are authorized to assist clients in buying, selling, or leasing properties, but you must work under the direct supervision of a managing broker.</li>
                            <li><strong>Real Estate Broker:</strong> An advanced license type. Brokers have completed additional education and have active industry experience (usually 2–3 years). They can operate their own firm, hire salespeople, and manage client escrows directly.</li>
                            <li><strong>Realtor®:</strong> A licensed agent or broker who is a member of the National Association of Realtors (NAR) and has agreed to abide by their strict Code of Ethics.</li>
                        </ul>

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-b pb-2">Step 1: Meet Base Eligibility Criteria</h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-700">
                            States establish baseline standards to protect consumers in major transactions:
                        </p>
                        <ul className="list-disc pl-6 space-y-3 text-base md:text-lg text-gray-700">
                            <li><strong>Age Requirements:</strong> You must be at least 18 years old in most states. A few states (like Alaska, Alabama, and Nebraska) require candidates to be 19.</li>
                            <li><strong>Education background:</strong> You must hold a high school diploma or equivalent (GED).</li>
                            <li><strong>Residency:</strong> You must be a legal resident of the United States. You do not always have to reside in the state where you are applying, thanks to reciprocity rules.</li>
                        </ul>

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-b pb-2">Step 2: Pre-Licensing Education Hours by State</h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-700">
                            Every state commission determines the structure and hours of required coursework:
                        </p>
                        <div className="overflow-x-auto my-6">
                            <table className="min-w-full border-collapse border border-gray-200 text-sm md:text-base text-gray-700">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="border border-gray-300 p-3 text-left">State</th>
                                        <th className="border border-gray-300 p-3 text-left">Required Hours</th>
                                        <th className="border border-gray-300 p-3 text-left">Course Structure Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-gray-300 p-3 font-semibold">California</td>
                                        <td className="border border-gray-300 p-3">135 Hours</td>
                                        <td className="border border-gray-300 p-3">Principles (45 hrs), Practice (45 hrs), and one elective such as Finance or Legal Aspects (45 hrs).</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 p-3 font-semibold">Texas</td>
                                        <td className="border border-gray-300 p-3">180 Hours</td>
                                        <td className="border border-gray-300 p-3">6 courses of 30 hours each: Principles I, Principles II, Law of Agency, Law of Contracts, Finance, and Promulgated Forms.</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 p-3 font-semibold">Florida</td>
                                        <td className="border border-gray-300 p-3">63 Hours</td>
                                        <td className="border border-gray-300 p-3">Sales Associate Course covering real estate law, principles, practices, and calculations.</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 p-3 font-semibold">New York</td>
                                        <td className="border border-gray-300 p-3">77 Hours</td>
                                        <td className="border border-gray-300 p-3">Covers property rights, contracts, deeds, land-use, environmental regulations, and fair housing.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-b pb-2">Step 3: Background Clearances & Fingerprinting</h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-700">
                            Demonstrating good moral character is a primary requirement. All states mandate fingerprint submissions to run state and federal (FBI) criminal background checks. You must schedule digital fingerprinting through a state-approved vendor (e.g., Live Scan in California, IdentoGO in Texas). Failure to disclose past convictions on your application can result in immediate rejection, regardless of your exam score.
                        </p>

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-b pb-2">Step 4: The Licensing Examination Format</h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-700">
                            Once your education certificates are approved, you can register for the state exam through private testing providers like Pearson VUE or PSI. The exam consists of two parts:
                        </p>
                        <ul className="list-disc pl-6 space-y-3 text-base md:text-lg text-gray-700">
                            <li><strong>National Portion:</strong> Measures general real estate knowledge, property rights, agency laws, valuation math, and federal statutes (Fair Housing, RESPA).</li>
                            <li><strong>State-Specific Portion:</strong> Evaluates your comprehension of the state's local real estate law, license acts, and commission rules.</li>
                        </ul>

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-b pb-2">Step 5: State Reciprocity and Expansion</h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-700">
                            If you plan to practice in multiple states, it is crucial to research state licensing reciprocity. Reciprocity allows licensed agents in one state to obtain a license in another state with reduced education or exam requirements. Some states offer full reciprocity, allowing you to bypass coursework and simply take the state-specific portion of the exam, while other states offer no reciprocity at all, requiring you to start from scratch.
                        </p>

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-b pb-2">Step 6: Continuing Education and License Renewal</h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-700">
                            A real estate license is not permanent. Most states require agents to renew their license every 2 to 4 years. To qualify for renewal, you must complete a set number of Continuing Education (CE) hours (usually between 12 and 45 hours, depending on the state). These courses keep you updated on changes in property law, marketing regulations, and ethical guidelines.
                        </p>

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-b pb-2">Step 7: Realistic Startup Cost Breakdown</h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-700">
                            Becoming an agent involves upfront financial investments. Below is a realistic breakdown of first-year startup costs:
                        </p>
                        <div className="overflow-x-auto my-6">
                            <table className="min-w-full border-collapse border border-gray-200 text-sm md:text-base text-gray-700">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="border border-gray-300 p-3 text-left">Expense Item</th>
                                        <th className="border border-gray-300 p-3 text-left">Estimated Cost</th>
                                        <th className="border border-gray-300 p-3 text-left">Frequency</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-gray-300 p-3">Pre-Licensing School Tuition</td>
                                        <td className="border border-gray-300 p-3">$150 – $500</td>
                                        <td className="border border-gray-300 p-3">One-time</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 p-3">State Exam Registration Fee</td>
                                        <td className="border border-gray-300 p-3">$50 – $80</td>
                                        <td className="border border-gray-300 p-3">Per attempt</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 p-3">Fingerprints and Background Check</td>
                                        <td className="border border-gray-300 p-3">$40 – $75</td>
                                        <td className="border border-gray-300 p-3">One-time</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 p-3">License Application Fee</td>
                                        <td className="border border-gray-300 p-3">$100 – $250</td>
                                        <td className="border border-gray-300 p-3">Every 2–4 years</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 p-3">NAR/State Realtor Association Dues</td>
                                        <td className="border border-gray-300 p-3">$600 – $900</td>
                                        <td className="border border-gray-300 p-3">Annual</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 p-3">MLS Access Fees</td>
                                        <td className="border border-gray-300 p-3">$300 – $600</td>
                                        <td className="border border-gray-300 p-3">Annual / Quarterly</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 p-3">Errors & Omissions (E&O) Insurance</td>
                                        <td className="border border-gray-300 p-3">$350 – $800</td>
                                        <td className="border border-gray-300 p-3">Annual</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                )
            case 'pass-real-estate-exam-first-attempt-tips':
                return (
                    <div className="prose prose-blue max-w-none text-gray-800 space-y-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-b pb-2">The Reality of Exam Fail Rates</h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-700">
                            Real estate licensing exams are designed to protect consumers by filtering out candidates who lack basic legal, mathematical, and ethical comprehension. With failure rates regularly exceeding 50% for first-time test takers in major states, you cannot pass on common sense alone. This guide details key study methodologies to ensure you pass the test on your first try.
                        </p>

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-b pb-2">Tip 1: Master the Real Estate Vocabulary</h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-700">
                            The national and state exams are vocabulary-driven. If you do not know the definitions of key terms, you will struggle with situational questions. Use active recall to memorize these key concepts:
                        </p>
                        <ul className="list-disc pl-6 space-y-4 text-base md:text-lg text-gray-700">
                            <li>
                                <strong>Joint Tenancy vs. Tenancy in Common:</strong> Joint Tenancy features the *right of survivorship* (if one owner dies, their share automatically passes to the surviving owners, not their heirs) and requires the four unities: Time, Title, Interest, and Possession (PITT). Tenancy in Common allows unequal shares and allows shares to be willed to heirs.
                            </li>
                            <li>
                                <strong>Riparian vs. Littoral Rights:</strong> Riparian rights govern flowing water like rivers or streams. Littoral rights govern non-flowing water like lakes or oceans.
                            </li>
                            <li>
                                <strong>Deeds (General Warranty vs. Special Warranty vs. Quitclaim):</strong> A General Warranty Deed offers the highest level of buyer protection, covenants of seisin, and quiet enjoyment. A Special Warranty Deed covenants only against defects arising during the grantor's ownership. A Quitclaim Deed offers no warranties whatsoever, transferring only the interest the grantor holds.
                            </li>
                        </ul>

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-b pb-2">Tip 2: Understand Core Fiduciary Duties</h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-700">
                            Fiduciary duties represent the legal responsibilities an agent owes to a client. Remember the acronym <strong>COALD</strong>:
                        </p>
                        <ul className="list-disc pl-6 space-y-3 text-base md:text-lg text-gray-700">
                            <li><strong>Care:</strong> Exercising reasonable skill and diligence in helping clients.</li>
                            <li><strong>Obedience:</strong> Carrying out all lawful instructions of the principal.</li>
                            <li><strong>Accounting:</strong> Safeguarding all transaction escrows, deposits, and documents.</li>
                            <li><strong>Loyalty:</strong> Placing the client's interests above all others, including your own commission.</li>
                            <li><strong>Disclosure:</strong> Revealing all material facts about the property or transaction.</li>
                        </ul>

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-b pb-2">Tip 3: Structured 4-Week Study Schedule</h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-700">
                            Spaced repetition is the key to memorizing legal codes. Avoid cramming the week of the exam. Instead, allocate 45–60 minutes per day over 4 weeks using this model:
                        </p>
                        <ul className="list-disc pl-6 space-y-3 text-base md:text-lg text-gray-700">
                            <li><strong>Week 1:</strong> Focus entirely on vocabulary flashcards and national real property concepts.</li>
                            <li><strong>Week 2:</strong> Master agency laws, fiduciary responsibilities, and contract law.</li>
                            <li><strong>Week 3:</strong> Dedicate 30 minutes daily to math practice questions (Cap rates, taxes, commissions, measurements).</li>
                            <li><strong>Week 4:</strong> Take full-length, timed mock exams to build testing stamina.</li>
                        </ul>

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-b pb-2">Tip 4: Demystify Real Estate Mathematics</h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-700">
                            Do not write off the math section. It represents 10% to 15% of the total questions. Focus on the core equations:
                        </p>
                        <ul className="list-disc pl-6 space-y-3 text-base md:text-lg text-gray-700">
                            <li><strong>Net Operating Income (NOI):</strong> Gross Rental Income − Vacancy Losses − Operating Expenses (Note: mortgage payments/debt services are NOT operating expenses).</li>
                            <li><strong>Tax Assessment:</strong> Assessed Value × Mill Rate (expressed as mills divided by 1,000).</li>
                            <li><strong>Measurement Conversion:</strong> Square feet divided by 43,560 to find total acreage.</li>
                        </ul>

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-b pb-2">Tip 5: Standardize Test-Day Pacing</h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-700">
                            The testing software at PSI and Pearson VUE centers allows you to flag questions and return to them later. Pacing is critical:
                        </p>
                        <ol className="list-decimal pl-6 space-y-3 text-base md:text-lg text-gray-700">
                            <li><strong>First Pass:</strong> Answer only the questions you know instantly. If a question is long or requires calculation, flag it and move on.</li>
                            <li><strong>Second Pass:</strong> Return to the math and situational scenario questions. You will feel less pressure knowing you have already secured the simpler vocabulary marks.</li>
                            <li><strong>Elimination Strategy:</strong> Always eliminate the two obviously incorrect choices. If you must guess, choosing between the remaining two yields a 50% probability of success.</li>
                        </ol>

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-b pb-2">Tip 6: Error Log and Analysis</h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-700">
                            When taking mock exams, do not simply look at your final score. Review the explanation for every question you answered incorrectly. Write down the correct definition or formula in a notebook. This active writing process reinforces cognitive recall and patches the gaps in your knowledge.
                        </p>
                    </div>
                )
            case 'choose-sponsoring-broker-real-estate':
                return (
                    <div className="prose prose-blue max-w-none text-gray-800 space-y-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-b pb-2">The Legal Framework of Brokerage Sponsorship</h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-700">
                            Under state license laws, a newly licensed salesperson is an independent contractor who must work under the supervision of a managing broker. The managing broker holds your license, assumes legal liability for your marketing and transactions, and is the only entity legally allowed to receive commission checks from escrows. Understanding the differences in brokerage models, commission structures, and training programs is key to launching a successful career.
                        </p>

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-b pb-2">1. Traditional vs. Cloud Brokerage Models</h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-700">
                            There are three primary brokerage designs in the industry:
                        </p>
                        <ul className="list-disc pl-6 space-y-4 text-base md:text-lg text-gray-700">
                            <li>
                                <strong>Traditional Franchise Brokerages (e.g., Coldwell Banker, RE/MAX):</strong> They have physical office spaces, local brand recognition, and in-house administrative staff. They are ideal for new agents who benefit from face-to-face mentorship and structured classroom training.
                            </li>
                            <li>
                                <strong>Boutique Brokerages:</strong> Independent local firms. They offer highly personalized support from the principal broker and a collaborative team environment, but they may lack national marketing resources.
                            </li>
                            <li>
                                <strong>Cloud-Based Brokerages (e.g., eXp Realty, Real):</strong> They operate without physical offices. They offer lower monthly fees, higher commission splits, extensive online training programs, and stock options/revenue sharing. Best for self-starters.
                            </li>
                        </ul>

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-b pb-2">2. Commission Split Scenarios</h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-700">
                            To evaluate how splits and capping models affect your bottom line, consider the following scenario of an agent closing **$100,000 in gross commission income (GCI)**:
                        </p>
                        <div className="overflow-x-auto my-6">
                            <table className="min-w-full border-collapse border border-gray-200 text-sm md:text-base text-gray-700">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="border border-gray-300 p-3 text-left">Split Type</th>
                                        <th className="border border-gray-300 p-3 text-left">Broker Share</th>
                                        <th className="border border-gray-300 p-3 text-left">Agent Share</th>
                                        <th className="border border-gray-300 p-3 text-left">Typical Fees</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-gray-300 p-3 font-semibold">Fixed Split (60/40)</td>
                                        <td className="border border-gray-300 p-3">$40,000</td>
                                        <td className="border border-gray-300 p-3">$60,000</td>
                                        <td className="border border-gray-300 p-3">None</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 p-3 font-semibold">Capped Split (80/20 with $16k Cap)</td>
                                        <td className="border border-gray-300 p-3">$16,000 (Hits Cap)</td>
                                        <td className="border border-gray-300 p-3">$84,000</td>
                                        <td className="border border-gray-300 p-3">Monthly tech fees ($85)</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 p-3 font-semibold">100% Commission Model</td>
                                        <td className="border border-gray-300 p-3">None</td>
                                        <td className="border border-gray-300 p-3">$100,000</td>
                                        <td className="border border-gray-300 p-3">Monthly fee ($600) + Transaction fees ($250/deal)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-b pb-2">3. Hidden Brokerage Fees to Look Out For</h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-700">
                            When joining a brokerage, do not look at commission splits in isolation. Many firms charge additional operational fees that can quickly drain your profits:
                        </p>
                        <ul className="list-disc pl-6 space-y-3 text-base md:text-lg text-gray-700">
                            <li><strong>Desk Fees:</strong> A monthly charge for renting a physical desk or office space inside the building.</li>
                            <li><strong>Technology Fees:</strong> Charges for access to CRM tools, document signing portals (like DocuSign), and lead-generation software.</li>
                            <li><strong>Franchise Fees:</strong> A percentage (usually 5% to 8%) taken out of every commission check to support the national franchise headquarters.</li>
                            <li><strong>E&O Insurance Deductibles:</strong> Deducted from your commissions annually or per-transaction to protect against lawsuit liability.</li>
                        </ul>

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-b pb-2">4. Sponsoring Broker Interview Questions</h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-700">
                            Before choosing a broker, you should interview multiple managing brokers. Use this checklist of questions:
                        </p>
                        <ul className="list-disc pl-6 space-y-3 text-base md:text-lg text-gray-700">
                            <li>What is the commission split structure, and is there an annual cap?</li>
                            <li>What monthly fees will I be billed for (tech, office, marketing)?</li>
                            <li>Do you have a formal mentorship program for new licensees?</li>
                            <li>Are there in-house lead generation systems or sign-up lists for floor duties?</li>
                            <li>What are your guidelines for social media marketing and logo usage?</li>
                        </ul>
                    </div>
                )
            case 'is-real-estate-school-hard-expectations':
                return (
                    <div className="prose prose-blue max-w-none text-gray-800 space-y-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-b pb-2">Understanding the Real Estate School Challenge</h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-700">
                            Real estate school is often misunderstood. Some expect it to be a simple formality, while others fear the math and legal concepts. Real estate pre-licensing education is not academically equivalent to advanced college coursework. The difficulty lies in the volume of definitions, laws, and math formulas you must memorize in a short period.
                        </p>

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-b pb-2">The Hardest Exam Topics</h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-700">
                            National statistics show that the majority of student failures occur in these sections:
                        </p>
                        <ol className="list-decimal pl-6 space-y-3 text-base md:text-lg text-gray-700">
                            <li><strong>Property Ownership & Title Transfers:</strong> Distinguishing between different types of deeds, understanding voluntary vs. involuntary alienation, and memorizing co-ownership structures.</li>
                            <li><strong>Contracts:</strong> Navigating the elements of a valid contract (offer and acceptance, consideration, competent parties, legal purpose) and understanding breaches and defaults.</li>
                            <li><strong>Real Estate Finance:</strong> Understanding mortgage instruments (promissory notes, trust deeds), government loan programs (FHA, VA, conventional), and federal regulations (TRID, RESPA).</li>
                            <li><strong>Agency Law:</strong> Defining single agency, dual agency, and transactional brokerage, and understanding your fiduciary duties to clients.</li>
                            <li><strong>State-Specific Disclosures:</strong> Memorizing mandatory seller property disclosures, environmental issues (lead-based paint, radon), and licensing rules.</li>
                        </ol>

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-b pb-2">Online vs. In-Person Classrooms</h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-700">
                            Your learning format significantly impacts the course difficulty:
                        </p>
                        <ul className="list-disc pl-6 space-y-4 text-base md:text-lg text-gray-700">
                            <li>
                                <strong>Online Self-Paced Courses:</strong> High flexibility allows you to study anytime. However, online portals often have mandatory timers, quizzes, and no live instructor to clarify complex concepts. This format requires high self-discipline.
                            </li>
                            <li>
                                <strong>In-Person or Live-Stream Classes:</strong> Offers structured pacing, immediate answers to questions, and networking opportunities. The drawback is a fixed schedule that may conflict with full-time employment.
                            </li>
                        </ul>

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-b pb-2">Coping with Information Overload</h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-700">
                            To survive the pre-licensing classes, you need active study habits. Do not simply read the textbook chapters page by page. Use memory techniques like flashcard creation, summarizing complex legal concepts in your own words, and taking state practice tests early to reinforce what you are learning.
                        </p>

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-b pb-2">Navigating the Proctored Final Exam</h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-700">
                            Before you can take the state licensing exam, you must pass your real estate school's final exam. This test is proctored (either in-person or online with a camera and screen monitoring). It is closed-book, typically features 100 questions, and requires a passing score of 70% to 75%.
                        </p>
                    </div>
                )
            case 'how-much-do-real-estate-agents-make-commissions':
                return (
                    <div className="prose prose-blue max-w-none text-gray-800 space-y-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-b pb-2">The Self-Employment Income Model</h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-700">
                            Unlike traditional employment, real estate sales agents are independent contractors. You do not receive a base salary, hourly wage, or company-sponsored health insurance. You are paid entirely on commissions, which are processed only when a transaction successfully closes. Understanding the path of a commission check and setting aside tax reserves is key to building a sustainable business.
                        </p>

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-b pb-2">Tracing a Commission Check: A Mathematical Walkthrough</h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-700">
                            Suppose you represent the buyer in the purchase of a home sold for **$500,000**. The listing contract specifies a **6% total commission**, with a 50/50 split between the listing and buying brokerages:
                        </p>
                        <ol className="list-decimal pl-6 space-y-3 text-base md:text-lg text-gray-700">
                            <li><strong>Total Escrow Payout:</strong> $500,000 × 6% = <strong>$30,000</strong>.</li>
                            <li><strong>Co-Brokerage Split:</strong> The listing brokerage and buying brokerage split the commission. Each brokerage receives a check for <strong>$15,000</strong>.</li>
                            <li><strong>Brokerage-Agent Split:</strong> Your brokerage contract specifies an 80/20 split. The brokerage retains $3,000, and you receive a gross commission check of <strong>$12,000</strong>.</li>
                        </ol>

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-b pb-2">Gross Commission vs. Net Income</h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-700">
                            Out of your $12,050 check, you must pay all business operating expenses:
                        </p>
                        <ul className="list-disc pl-6 space-y-3 text-base md:text-lg text-gray-700">
                            <li><strong>Marketing (Signs, Photos, Ads):</strong> $500 – $1,000 per listing.</li>
                            <li><strong>Transaction Fees:</strong> $150 – $300 paid to your broker per transaction.</li>
                            <li><strong>MLS Fees:</strong> Monthly or quarterly access dues.</li>
                            <li><strong>Tax Reserves (Schedule C):</strong> As a self-employed individual, you must pay self-employment tax (15.3% for FICA) plus federal and state income taxes. You should set aside at least **30% to 35%** of every commission check in a separate bank account to cover quarterly estimated taxes.</li>
                        </ul>

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-b pb-2">Corporate Structures (LLCs and S-Corps)</h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-700">
                            As your real estate career grows, setting up an LLC or electing S-Corporation tax status can yield significant savings. By forming an LLC, you can request that your broker pay your commissions directly to your corporation, allowing you to pay yourself a reasonable salary and bypass self-employment FICA taxes on the remaining business distributions.
                        </p>

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-b pb-2">Commission Caps & Desk Models</h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-700">
                            Many modern brokerages use a cap system. You pay your broker their split (e.g., 20%) on your transactions until you reach a specific annual dollar amount (e.g., $16,000). Once you hit the cap, you keep 100% of your commissions for the rest of your anniversary year. This structure is highly beneficial for high-volume agents.
                        </p>
                    </div>
                )
            case 'real-estate-exam-math-formulas':
                return (
                    <div className="prose prose-blue max-w-none text-gray-800 space-y-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-b pb-2">Formula 1: Capitalization Rate (Cap Rate)</h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-700">
                            Cap rate measures the rate of return on an investment property based on its Net Operating Income (NOI).
                        </p>
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-150 font-mono text-base md:text-lg text-center my-4 text-gray-800">
                            Cap Rate = Net Operating Income (NOI) / Current Market Value
                        </div>
                        <p className="text-base md:text-lg leading-relaxed text-gray-700">
                            To find the NOI: Gross Rental Income − Vacancy Losses − Operating Expenses (Note: mortgage principal and interest are *never* operating expenses).
                        </p>
                        <p className="text-base md:text-lg leading-relaxed text-gray-700">
                            <strong>Calculation Example:</strong> An apartment building has a market value of $500,000 and generates $40,000 in Net Operating Income annually.  
                            <br /><em>Formula:</em> $40,000 / $500,000 = 0.08, or an **8% Cap Rate**.
                        </p>

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-b pb-2">Formula 2: Millage Rates & Property Taxes</h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-700">
                            Property taxes are calculated using assessed value (which is a percentage of market value) and millage rates. One mill equals $0.001 (or $1 of tax per $1,000 of assessed value).
                        </p>
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-150 font-mono text-base md:text-lg text-center my-4 text-gray-800">
                            Annual Property Tax = Assessed Value × (Mill Rate / 1,000)
                        </div>
                        <p className="text-base md:text-lg leading-relaxed text-gray-700">
                            <strong>Calculation Example:</strong> A property has a market value of $300,000. The assessment rate is 60% of market value, and the tax rate is 25 mills.  
                            <br /><em>Step 1 (Assessed Value):</em> $300,000 × 0.60 = $180,000.  
                            <br /><em>Step 2 (Tax):</em> $180,000 × (25 / 1,000) = $180,000 × 0.025 = **$4,500**.
                        </p>

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-b pb-2">Formula 3: Acreage and Square Footage</h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-700">
                            You must memorize the conversion constant: **1 Acre = 43,560 square feet**.
                        </p>
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-150 font-mono text-base md:text-lg text-center my-4 text-gray-800">
                            Acres = Total Area in Square Feet / 43,560
                        </div>
                        <p className="text-base md:text-lg leading-relaxed text-gray-700">
                            <strong>Calculation Example:</strong> A rectangular commercial parcel of land measures 300 feet wide by 435.6 feet long. How many acres is the parcel?  
                            <br /><em>Step 1 (Area):</em> 300 ft × 435.6 ft = 130,680 sq ft.  
                            <br /><em>Step 2 (Acreage):</em> 130,680 sq ft / 43,560 = **3.0 Acres**.
                        </p>

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-b pb-2">Formula 4: Loan-to-Value (LTV) Ratio</h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-700">
                            Lenders use LTV to measure loan risk. It compares the mortgage loan amount to the lower of the sale price or appraised value.
                        </p>
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-150 font-mono text-base md:text-lg text-center my-4 text-gray-800">
                            LTV Ratio = Loan Amount / Appraised Value (or Purchase Price)
                        </div>
                        <p className="text-base md:text-lg leading-relaxed text-gray-700">
                            <strong>Calculation Example:</strong> A buyer purchases a home appraised at $400,000. They pay an $80,000 down payment and finance $320,000.  
                            <br /><em>Calculation:</em> $320,000 / $400,000 = 0.80, or an **80% LTV**.
                        </p>

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-b pb-2">Formula 5: Gross Rent Multiplier (GRM)</h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-700">
                            GRM is a quick way to estimate the value of residential rental properties based on monthly gross rental income.
                        </p>
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-150 font-mono text-base md:text-lg text-center my-4 text-gray-800">
                            GRM = Purchase Price / Monthly Gross Rent
                        </div>
                        <p className="text-base md:text-lg leading-relaxed text-gray-700">
                            <strong>Calculation Example:</strong> A duplex sells for $360,000 and generates $3,000 per month in total gross rent.  
                            <br /><em>Formula:</em> $360,000 / $3,000 = **120 GRM**.
                        </p>
                    </div>
                )
            case 'california-dre-licensing-process':
                return (
                    <div className="prose prose-blue max-w-none text-gray-800 space-y-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-b pb-2">California Department of Real Estate (DRE)</h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-700">
                            The California Department of Real Estate (DRE) administers licensing to protect the public in real estate transactions. Understanding the state's educational requirements, application process, and exam domains is key to securing your license.
                        </p>

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-b pb-2">1. Educational Requirements</h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-700">
                            California law requires salesperson candidates to complete three college-level courses (45 hours each):
                        </p>
                        <ul className="list-disc pl-6 space-y-3 text-base md:text-lg text-gray-700">
                            <li><strong>Real Estate Principles (45 hours):</strong> Covers titles, deeds, property law, and valuation.</li>
                            <li><strong>Real Estate Practice (45 hours):</strong> Covers sales techniques, contracts, listing agreements, and business ethics.</li>
                            <li><strong>One Elective Course (45 hours):</strong> Commonly selected from Real Estate Finance, Legal Aspects of Real Estate, Real Estate Appraisal, or Property Management.</li>
                        </ul>

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-b pb-2">2. Combined Application Filing (Form RE 435)</h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-700">
                            To minimize processing delays, submit the Combined Salesperson Exam and License Application (Form RE 435) to apply for both the exam and the license at the same time. The application must include:
                        </p>
                        <ul className="list-disc pl-6 space-y-3 text-base md:text-lg text-gray-700">
                            <li>Official transcripts from an approved real estate school.</li>
                            <li>A completed Live Scan Service Request (Form RE 237) for fingerprint submission.</li>
                            <li>Exam and license fees ($60 for the exam, $245 for the license).</li>
                        </ul>

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-b pb-2">3. Fingerprint Clearance</h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-700">
                            Before the DRE will issue your license, you must clear a background check conducted by the California Department of Justice (DOJ) and the Federal Bureau of Investigation (FBI). You must bring the Live Scan Form to an authorized operator to scan and submit your fingerprints digitally.
                        </p>

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-b pb-2">4. California Salesperson Exam Outline</h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-700">
                            The California exam consists of **150 multiple-choice questions** with a **3 hour and 15 minute** time limit. You must score **70% or higher** (at least 105 correct answers) to pass. The questions are distributed across seven major subject areas:
                        </p>
                        <div className="overflow-x-auto my-6">
                            <table className="min-w-full border-collapse border border-gray-200 text-sm md:text-base text-gray-700">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="border border-gray-300 p-3 text-left">Exam Area</th>
                                        <th className="border border-gray-300 p-3 text-left">Percentage Weight</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-gray-300 p-3 font-semibold">Practice of Real Estate and Mandated Disclosures</td>
                                        <td className="border border-gray-300 p-3">25%</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 p-3 font-semibold">Laws of Agency and Fiduciary Duties</td>
                                        <td className="border border-gray-300 p-3">17%</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 p-3 font-semibold">Property Ownership, Land Use, and Transfer of Title</td>
                                        <td className="border border-gray-300 p-3">15%</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 p-3 font-semibold">Contracts and Agreements</td>
                                        <td className="border border-gray-300 p-3">12%</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 p-3 font-semibold">Real Estate Finance</td>
                                        <td className="border border-gray-300 p-3">9%</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 p-3 font-semibold">Valuation and Market Analysis</td>
                                        <td className="border border-gray-300 p-3">9%</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 p-3 font-semibold">Transfer of Property and Title Escrows</td>
                                        <td className="border border-gray-300 p-3">8%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                )
            case 'texas-trec-real-estate-exam-guide':
                return (
                    <div className="prose prose-blue max-w-none text-gray-800 space-y-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-b pb-2">Texas Real Estate Commission (TREC)</h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-700">
                            Texas has some of the most demanding real estate licensing requirements in the United States. Controlled by the Texas Real Estate Commission (TREC), candidates must navigate a rigorous 180-hour education framework and pass a challenging, two-part exam.
                        </p>

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-b pb-2">1. The 180-Hour Required Coursework</h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-700">
                            You must complete six 30-hour courses approved by TREC:
                        </p>
                        <ul className="list-disc pl-6 space-y-3 text-base md:text-lg text-gray-700">
                            <li><strong>Principles of Real Estate I & II (60 hours):</strong> Covering property rights, financing, contracts, and math.</li>
                            <li><strong>Law of Agency (30 hours):</strong> Details fiduciary duties, disclosures, and broker-agent relationships.</li>
                            <li><strong>Law of Contracts (30 hours):</strong> Studies the legal elements of contracts, contingencies, and breaches.</li>
                            <li><strong>Real Estate Finance (30 hours):</strong> Details lending processes, loan programs, and disclosures.</li>
                            <li><strong>Promulgated Contract Forms (30 hours):</strong> Focuses on TREC-promulgated standard contracts, addenda, and disclosures.</li>
                        </ul>

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-b pb-2">2. The Intermediary Brokerage Rules (Texas Specific)</h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-700">
                            Texas prohibits traditional dual agency (where a single agent represents both buyer and seller). Instead, Texas uses the **Intermediary** model. An intermediary broker must remain neutral. The broker can appoint one associate to represent the seller and another to represent the buyer, ensuring representation for both clients.
                        </p>

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-b pb-2">3. Salesperson Apprentice Education (SAE) Requirements</h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-700">
                            Passing the exam is not the final step for Texas agents. During your first two years of licensure, TREC requires you to complete an additional 98 hours of Salesperson Apprentice Education (SAE) coursework. This must be completed before you can renew your license for the first time.
                        </p>

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-b pb-2">4. The Pearson VUE Licensing Exam Outline</h2>
                        <p className="text-base md:text-lg leading-relaxed text-gray-700">
                            The Texas exam is administered by Pearson VUE. It consists of **125 multiple-choice questions** with a **4-hour time limit**. You must score **70% or higher** on both sections to pass:
                        </p>
                        <ul className="list-disc pl-6 space-y-4 text-base md:text-lg text-gray-700">
                            <li>
                                <strong>National Portion (85 Questions):</strong> Covers general real estate practice, valuation, contracts, finance, and federal laws. You must answer at least **56 questions correctly** in 2.5 hours.
                            </li>
                            <li>
                                <strong>State Portion (40 Questions):</strong> Covers Texas-specific licensing acts, commission rules, intermediary practices, and contract administration. You must answer at least **30 questions correctly** in 1.5 hours.
                            </li>
                        </ul>
                    </div>
                )
            default:
                return (
                    <div className="prose prose-blue max-w-none">
                        <p className="text-xl text-gray-700 leading-relaxed italic border-l-4 border-[#007aff] pl-6 py-2 bg-blue-50/50 rounded-r-2xl">
                            This blog content has been updated to our new real estate study curriculum. Please check back soon for further interactive guides!
                        </p>
                    </div>
                )
        }
    }

    return (
        <div className="min-h-screen bg-white font-sans">
            <Navigation
                user={user}
                userData={userData}
                isPremium={isPremium}
                premiumStatus={premiumStatus}
                onLogin={handleLogin}
                onSignup={handleSignup}
                onLogout={handleLogout}
                onDashboard={handleDashboard}
                showGetPremiumLink
            />

            <main className="container mx-auto px-4 py-12 lg:py-20 max-w-7xl">
                <div className="max-w-4xl mx-auto">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 text-sm font-medium text-gray-400 mb-12 overflow-x-auto whitespace-nowrap scrollbar-hide">
                        <Link href="/" className="hover:text-[#007aff] transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href="/blog" className="hover:text-[#007aff] transition-colors">Blog</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-gray-900 truncate">{post.title}</span>
                    </nav>

                    {/* Article Header */}
                    <header className="mb-16">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="px-4 py-1.5 bg-[#007aff] text-white rounded-full text-xs font-bold uppercase tracking-widest shadow-lg shadow-blue-100">
                                {post.category}
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-sans text-gray-900 mb-8 leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 font-bold bg-gray-50 p-6 rounded-3xl border border-gray-100">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-[#007aff]">
                                    <Calendar className="w-4 h-4" />
                                </div>
                                <span>{post.publishDate}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-[#007aff]">
                                    <Clock className="w-4 h-4" />
                                </div>
                                <span>{post.readTime}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-[#007aff]">
                                    <User className="w-4 h-4" />
                                </div>
                                <span>{post.author}</span>
                            </div>
                        </div>
                    </header>

                    {/* Article Image */}
                    {post.image && (
                        <div className="relative w-full aspect-video mb-16 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/50">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    )}

                    {/* Article Excerpt */}
                    <div className="bg-gradient-to-br from-[#007aff] to-indigo-700 text-white rounded-[2.5rem] p-8 md:p-12 mb-16 shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-white/20 transition-all duration-700" />
                        <p className="text-xl md:text-2xl font-medium leading-relaxed relative z-10">
                            {post.excerpt}
                        </p>
                    </div>

                    {/* Article Content */}
                    <article className="mb-24 font-sans text-gray-800">
                        {renderArticleContent()}
                    </article>

                    {/* Final CTA */}
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gray-900 rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden mb-24">
                            <div className="absolute inset-0 bg-[#007aff]/10" />
                            <div className="relative z-10 max-w-2xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">Looking to pass your Real Estate Licensing Exam on the first try?</h2>
                                <p className="text-gray-400 text-lg mb-10">
                                    Join thousands of successful agents who passed their licensing test on the first try with our premium question bank.
                                </p>
                                <Link
                                    href="/"
                                    className="inline-flex items-center justify-center px-10 py-5 bg-[#007aff] hover:bg-[#0056cc] text-white text-lg font-bold rounded-2xl transition-all shadow-xl shadow-[#007aff]/20 active:scale-95 translate-y-0 hover:-translate-y-1"
                                >
                                    Start Free Practice Test
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default function BlogPostPage() {
    return (
        <AuthProvider>
            <BlogPostContent />
        </AuthProvider>
    )
}
