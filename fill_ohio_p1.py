import re

file_path = 'components/handbook/ohio-handbook-summary.tsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

section1 = """<SectionCard id="section-1" number={1} title="How to Get Your Driver License">
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
                        </SectionCard>"""

section2 = """<SectionCard id="section-2" number={2} title="Before You Drive">
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
                        </SectionCard>"""

section3 = """<SectionCard id="section-3" number={3} title="Be Alert">
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
                        </SectionCard>"""

section4 = """<SectionCard id="section-4" number={4} title="Rules of the Road">
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
                        </SectionCard>"""

section5 = """<SectionCard id="section-5" number={5} title="Learning to Drive">
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
                        </SectionCard>"""

section6 = """<SectionCard id="section-6" number={6} title="State Laws and Penalties">
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
                        </SectionCard>"""

content = re.sub(r'<SectionCard id="section-1".*?</SectionCard>', section1, content, flags=re.DOTALL)
content = re.sub(r'<SectionCard id="section-2".*?</SectionCard>', section2, content, flags=re.DOTALL)
content = re.sub(r'<SectionCard id="section-3".*?</SectionCard>', section3, content, flags=re.DOTALL)
content = re.sub(r'<SectionCard id="section-4".*?</SectionCard>', section4, content, flags=re.DOTALL)
content = re.sub(r'<SectionCard id="section-5".*?</SectionCard>', section5, content, flags=re.DOTALL)
content = re.sub(r'<SectionCard id="section-6".*?</SectionCard>', section6, content, flags=re.DOTALL)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated sections 1-6 successfully.")
