import os

with open('components/handbook/new-york-handbook-summary.tsx', 'r') as f:
    lines = f.readlines()

# find the bounds of the actual content sections list
start_idx = 0
end_idx = 0
for i, line in enumerate(lines):
    if "{/* ===== Section 1:" in line:
        start_idx = i
    if "{/* CTA Section */}" in line:
        end_idx = i - 3 # before the closing div/main tags
        break

new_content = """
                        {/* ===== Chapter 1: Driver Licenses ===== */}
                        <SectionCard id="section-1" number={1} title="Driver Licenses">
                            <p>
                                A New York driver's license allows you to drive safely on public roads. Most people need a
                                noncommercial <strong>Class D</strong> driver's license to operate standard passenger vehicles. 
                                Driving in New York is a <strong>privilege, not a right</strong>.
                            </p>
                            <SubHeading>Applying for a Learner Permit</SubHeading>
                            <BulletList items={[
                                <>Must be at least <strong>16 years old</strong>.</>,
                                'Pass a written knowledge test and a vision test at the DMV.',
                                'Proof of identity (proving who you are, at least 6 points of ID).',
                            ]} />

                            <SubHeading>Getting a Driver License (After Getting Your Permit)</SubHeading>
                            <BulletList items={[
                                <>Must practice driving for at least <strong>50 hours</strong> with a licensed driver age 21+, including <strong>15 hours after sunset</strong>.</>,
                                'You must complete an approved 5-hour pre-licensing course or a high school/college driver education course.',
                                'Pass a road test (bring a safe vehicle with valid registration and inspection).',
                            ]} />

                            <SubHeading>Junior Operator Restrictions</SubHeading>
                            <WarningBox title="Class DJ (Under 18) Rules" icon={<AlertTriangle className="w-4 h-4" />}>
                                <p className="text-sm text-gray-700 mb-2">As a Junior permit or license holder, there are strict rules:</p>
                                <ul className="text-sm text-gray-700 space-y-1 ml-5 list-disc">
                                    <li>Cannot drive between <strong>9 p.m. and 5 a.m.</strong> (unless traveling to/from work or school).</li>
                                    <li>Cannot drive with more than one passenger under age 21 unless accompanied by your parent/guardian.</li>
                                    <li>If you text or use a hand-held phone while driving, your license will be suspended for 120 days.</li>
                                </ul>
                            </WarningBox>
                        </SectionCard>

                        {/* ===== Chapter 2: How to Keep Your License ===== */}
                        <SectionCard id="section-2" number={2} title="How to Keep Your License">
                            <SubHeading>Point System</SubHeading>
                            <BulletList items={[
                                <>Your license will be suspended if you accumulate: <strong>11 points within 18 months</strong>.</>,
                                'Speeding 1-10 mph over the limit = 3 points. Speeding 21-30 mph over = 6 points.',
                                'Texting or using a cell phone while driving = 5 points.',
                                'You can take a Point and Insurance Reduction Program (PIRP) course to reduce your point total by up to 4 points.',
                            ]} />

                            <SubHeading>Mandatory Suspensions & Revocations</SubHeading>
                            <BulletList items={[
                                'Driving without insurance.',
                                'Being involved in a crash without stopping (hit and run).',
                                'Failing to pay child support or failing to answer a traffic ticket.',
                                'Three speeding tickets (or misdemeanors) in 18 months results in a minimum 6-month revocation.',
                            ]} />
                        </SectionCard>

                        {/* ===== Chapter 3: Owning a Vehicle ===== */}
                        <SectionCard id="section-3" number={3} title="Owning a Vehicle">
                            <SubHeading>Registration and Inspection</SubHeading>
                            <BulletList items={[
                                'Your vehicle must be registered every 2 years and inspected every 12 months at an official inspection station.',
                                'If you move, you must notify the DMV of your new address within 10 days.',
                            ]} />

                            <SubHeading>Insurance Requirements</SubHeading>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-3">
                                {[
                                    { amount: '$25,000', desc: 'Injury for one person' },
                                    { amount: '$50,000', desc: 'Death for one person' },
                                    { amount: '$10,000', desc: 'Property damage' },
                                ].map((item) => (
                                    <div key={item.amount} className="text-center p-3 bg-gray-50 rounded-xl">
                                        <div className="text-lg font-bold text-[#007aff]">{item.amount}</div>
                                        <div className="text-xs text-gray-600">{item.desc}</div>
                                    </div>
                                ))}
                            </div>
                            <BulletList items={[
                                'You must have liability insurance issued by a company licensed by the NY State Department of Financial Services.',
                                'If your insurance lapses, your license plates and driver license will be suspended.',
                            ]} />
                        </SectionCard>

                        {/* ===== Chapter 4: Traffic Control ===== */}
                        <SectionCard id="section-4" number={4} title="Traffic Control">
                            <SubHeading>Traffic Signals</SubHeading>
                            <div className="space-y-2 mb-4">
                                {[
                                    { light: 'Steady Red', rule: 'STOP. You may turn right after stopping completely, unless a "NO TURN ON RED" sign is posted.' },
                                    { light: 'Flashing Red', rule: 'Treat exactly like a STOP sign. Stop, yield the right-of-way, and go when safe.' },
                                    { light: 'Red Arrow', rule: 'Do not go in the direction of the arrow. You must stop.' },
                                    { light: 'Yellow Arrow', rule: 'The protection of a green arrow is ending. Prepare to stop.' },
                                    { light: 'Flashing Yellow', rule: 'Drive with caution.' },
                                ].map((item) => (
                                    <div key={item.light} className="p-2.5 bg-gray-50 rounded-lg">
                                        <span className="font-semibold text-gray-900 text-sm">{item.light}:</span>{' '}
                                        <span className="text-gray-700 text-sm">{item.rule}</span>
                                    </div>
                                ))}
                            </div>

                            <SubHeading>Pavement Markings</SubHeading>
                            <BulletList items={[
                                <><strong>Solid Yellow Line:</strong> Cannot pass. You may cross it only to turn into a driveway or private road.</>,
                                <><strong>Double Solid Yellow:</strong> Cannot pass in either direction. Cannot cross except to turn left into or out of a driveway.</>,
                                <><strong>Broken White Line:</strong> You may change lanes if it is safe.</>,
                                <><strong>Solid White Line:</strong> Stay in your lane. Do not cross unless necessary to avoid a hazard or directed by police.</>,
                            ]} />
                        </SectionCard>

                        {/* ===== Chapter 5: Intersections & Turns ===== */}
                        <SectionCard id="section-5" number={5} title="Intersections and Turns">
                            <SubHeading>Right of Way</SubHeading>
                            <BulletList items={[
                                'If you arrive at an intersection without signals or signs, yield to the driver on your right.',
                                'A vehicle going straight ahead has the right-of-way over a vehicle turning left.',
                                'If you are entering a traffic circle or roundabout, yield to drivers already in the circle.',
                                'You must always yield to pedestrians in a crosswalk.',
                            ]} />

                            <SubHeading>Emergency Vehicles</SubHeading>
                            <InfoBox>
                                Yield the right-of-way to fire, ambulance, police and other authorized emergency vehicles 
                                displaying red or blue lights and sounding a siren. Pull over to the <strong>right edge</strong> of the road 
                                and stop until they pass. Do not stop in an intersection.
                            </InfoBox>

                            <SubHeading>Move Over Law</SubHeading>
                            <BulletList items={[
                                'When approaching an emergency vehicle, tow truck, or hazard vehicle parked on the shoulder with flashing lights, you must move over one lane.',
                                'If you cannot safely move over, you must slow down significantly.',
                            ]} />
                        </SectionCard>

                        {/* ===== Chapter 6: How to Pass ===== */}
                        <SectionCard id="section-6" number={6} title="How to Pass">
                            <BulletList items={[
                                'Usually, you pass other vehicles on the left.',
                                'You may pass on the right ONLY if the vehicle ahead is making a left turn, or you are on a one-way street/multi-lane road.',
                                'Never pass on the right if it means driving off the paved portion of the road or onto the shoulder.',
                                'When being passed, decrease your speed slightly and keep to the right.',
                            ]} />

                            <SubHeading>School Buses</SubHeading>
                            <BulletList items={[
                                <><strong>Flashing Red Lights:</strong> You must stop at least 20 feet away from a school bus with flashing red lights. This applies in both directions, even on divided highways.</>,
                                'The fine for passing a stopped school bus ranges from $250 to $400 for a first offense, plus 5 points on your license.',
                            ]} />
                        </SectionCard>

                        {/* ===== Chapter 7: Parallel Parking ===== */}
                        <SectionCard id="section-7" number={7} title="Parallel Parking">
                            <BulletList items={[
                                'Signal to let others know you intend to park. Pull up parallel to the car ahead of the space (about 2 feet away).',
                                'Check your blind spots and mirrors to ensure it is safe to back up.',
                                'Do not park within 15 feet of a fire hydrant.',
                                'Do not park within 20 feet of a crosswalk at an intersection.',
                            ]} />

                            <SubHeading>Parking on a Hill</SubHeading>
                            <BulletList items={[
                                <><strong>Facing downhill:</strong> Turn your wheels <strong>toward</strong> the curb.</>,
                                <><strong>Facing uphill (with curb):</strong> Turn your wheels <strong>away from</strong> the curb.</>,
                                <><strong>Facing uphill (no curb):</strong> Turn wheels <strong>toward</strong> the edge of the road.</>,
                            ]} />
                        </SectionCard>

                        {/* ===== Chapter 8: Defensive Driving ===== */}
                        <SectionCard id="section-8" number={8} title="Defensive Driving">
                            <SubHeading>Scanning & Following Distance</SubHeading>
                            <BulletList items={[
                                'Always look ahead, to the sides, and behind your vehicle. Check your mirrors every few seconds.',
                                <>Use the <strong>two-second rule</strong> to maintain a safe following distance. (Increase to 3 or 4 seconds in bad weather or when following large trucks/motorcycles).</>,
                                'Do not stare at a crash or a disabled vehicle ("rubbernecking").',
                            ]} />

                            <SubHeading>Speed Limits</SubHeading>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                                {[
                                    { limit: '55 mph', where: 'State maximum speed limit (unless posted otherwise)' },
                                    { limit: '65 mph', where: 'Some New York highways and interstates (if posted)' },
                                    { limit: '25 mph', where: 'New York City maximum limit (unless posted otherwise)' },
                                ].map((item) => (
                                    <div key={item.limit} className="p-2.5 bg-gray-50 rounded-lg text-sm">
                                        <span className="font-bold text-[#007aff]">{item.limit}</span>
                                        <span className="text-gray-600"> — {item.where}</span>
                                    </div>
                                ))}
                            </div>
                            <BulletList items={[
                                <><strong>Work Zones:</strong> Speed limits may be reduced to 25 MPH. Fines are <strong>doubled</strong> for speeding in work zones.</>,
                            ]} />
                        </SectionCard>

                        {/* ===== Chapter 9: Alcohol and Other Drugs ===== */}
                        <SectionCard id="section-9" number={9} title="Alcohol and Other Drugs">
                            <WarningBox title="BAC Limits" icon={<AlertTriangle className="w-4 h-4" />}>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• <strong>0.08%</strong> or higher — Evidence of Driving While Intoxicated (DWI)</li>
                                    <li>• <strong>0.05%</strong> to 0.07% — Evidence of Driving While Ability Impaired (DWAI)</li>
                                    <li>• <strong>0.02%</strong> or higher — Zero Tolerance Law for drivers under 21</li>
                                    <li>• <strong>0.04%</strong> or higher — for commercial vehicles (CDL)</li>
                                </ul>
                            </WarningBox>
                            <p>
                                The law does not differentiate between illegal drugs and legal prescription/over-the-counter
                                medications. If a substance impairs your ability to drive safely, you can be arrested for DWAI.
                            </p>

                            <SubHeading>Implied Consent</SubHeading>
                            <BulletList items={[
                                'By driving in New York, you consent to a chemical test (breath, blood, urine, or saliva) to determine BAC or drug content.',
                                <><strong>Refusal to test:</strong> Your license will be revoked for at least <strong>1 year</strong>, and you must pay a $500 civil penalty.</>,
                            ]} />

                            <SubHeading>Open Container Law</SubHeading>
                            <BulletList items={[
                                'It is a traffic infraction to consume alcohol or have an open container containing alcohol in a motor vehicle.',
                                'Containers must be unsealed and kept in the trunk.',
                            ]} />
                        </SectionCard>

                        {/* ===== Chapter 10: Special Driving Conditions ===== */}
                        <SectionCard id="section-10" number={10} title="Special Driving Conditions">
                            <div className="space-y-3">
                                <ConditionItem emoji="🌧️" name="Rain & Hydroplaning">
                                    Roads are most slippery just after rain begins. Hydroplaning occurs when your tires glide on a layer of water, losing contact with the road (can happen at speeds over 35 mph). To recover from a skid, steer in the direction you want the front wheels to go.
                                </ConditionItem>
                                <ConditionItem emoji="❄️" name="Winter Driving">
                                    Clear all ice and snow from your vehicle before driving. Keep your gas tank at least half full to prevent fuel line freeze-up. Gently pump standard brakes on slippery surfaces (do not pump ABS). 
                                </ConditionItem>
                                <ConditionItem emoji="🌫️" name="Fog">
                                    Drive slowly and use your <strong>low-beam headlights</strong>. High beams will reflect back off the fog and decrease visibility.
                                </ConditionItem>
                                <ConditionItem emoji="🦌" name="Deer & Wildlife">
                                    Most collisions occur at dawn and dusk. If a deer runs in front of you, apply the brakes firmly. Do NOT swerve, which can cause a worse collision with oncoming traffic or trees.
                                </ConditionItem>
                            </div>
                        </SectionCard>

                        {/* ===== Chapter 11: Sharing the Road ===== */}
                        <SectionCard id="section-11" number={11} title="Sharing the Road">
                            <SubHeading>Pedestrians and Bicyclists</SubHeading>
                            <BulletList items={[
                                'Pedestrians who are blind and guided by a dog or carrying a white cane always have the absolute right of way.',
                                'Bicyclists have the same rights and responsibilities as drivers. Give them at least 3 feet of clearance when passing.',
                            ]} />

                            <SubHeading>Motorcycles</SubHeading>
                            <BulletList items={[
                                'Check your blind spots twice—motorcycles are easily hidden.',
                                'Motorcycles have the right to a full traffic lane. Two motorcycles may ride side-by-side, but a car cannot share a lane with a motorcycle.',
                            ]} />

                            <SubHeading>Large Trucks and RVs (Blind Spots / No-Zones)</SubHeading>
                            <BulletList items={[
                                'Large vehicles take up to twice as long to stop. Never cut in front of them immediately after passing.',
                                'If you cannot see the truck driver in their side mirrors, they cannot see you.',
                                'Trucks make wide right turns. Do not move into the space between a turning truck and the curb.',
                            ]} />
                        </SectionCard>

                        {/* ===== Chapter 12: If You Are in a Traffic Crash ===== */}
                        <SectionCard id="section-12" number={12} title="If You Are in a Traffic Crash">
                            <BulletList items={[
                                'You must stop. Moving away from the scene of a crash is a criminal offense (hit-and-run).',
                                'If someone is injured or killed, you must notify the police immediately.',
                                'If it is just property damage, move your vehicle off the road if possible. Exchange name, address, driver license number, and insurance with the other drivers.',
                                <>You must file a crash report (MV-104) with the DMV within <strong>10 days</strong> if there is an injury, death, or more than $1,000 in property damage.</>,
                                'If you hit a parked vehicle or domestic animal (dog, cat, horse), you must find the owner or notify the police.',
                            ]} />
                        </SectionCard>
"""

lines = lines[:start_idx] + [new_content] + lines[end_idx:]

with open('components/handbook/new-york-handbook-summary.tsx', 'w') as f:
    f.writelines(lines)
