import re

file_path = 'components/handbook/ohio-handbook-summary.tsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

section7 = """<SectionCard id="section-7" number={7} title="Special Driving Situations">
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
                        </SectionCard>"""

section8 = """<SectionCard id="section-8" number={8} title="Safe Driving Tips">
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
                        </SectionCard>"""

section9 = """<SectionCard id="section-9" number={9} title="Sharing the Road">
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
                        </SectionCard>"""

section10 = """<SectionCard id="section-10" number={10} title="Emergency Situations">
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
                        </SectionCard>"""

section11 = """<SectionCard id="section-11" number={11} title="Taking the Driving Test">
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
                        </SectionCard>"""

section12 = """<SectionCard id="section-12" number={12} title="Purchase Your Driver License">
                            <BulletList items={[
                                'Once you pass the maneuverability and on-road tests, you must purchase the actual license from a Deputy Registrar License Agency.',
                                'A standard driver\'s license expires on your birthday either four (4) or eight (8) years after issuance, depending on the option you choose.',
                                'Always notify the BMV of an address change within 10 days.',
                            ]} />
                        </SectionCard>"""

section13 = """<SectionCard id="section-13" number={13} title="What Else Should I Know?">
                            <SubHeading>Organ Donation and Programs</SubHeading>
                            <BulletList items={[
                                <><strong>Organ Donor:</strong> You may enroll in the Ohio Donor Registry when you get your license. A heart symbol will be printed on the card.</>,
                                <><strong>Save Our Sight:</strong> You can donate $1 or more to help preserve children's vision in Ohio.</>,
                                <><strong>Next of Kin:</strong> Adding emergency contact information allows law enforcement to easily reach your relatives in an emergency.</>,
                            ]} />
                        </SectionCard>"""

content = re.sub(r'<SectionCard id="section-7".*?</SectionCard>', section7, content, flags=re.DOTALL)
content = re.sub(r'<SectionCard id="section-8".*?</SectionCard>', section8, content, flags=re.DOTALL)
content = re.sub(r'<SectionCard id="section-9".*?</SectionCard>', section9, content, flags=re.DOTALL)
content = re.sub(r'<SectionCard id="section-10".*?</SectionCard>', section10, content, flags=re.DOTALL)
content = re.sub(r'<SectionCard id="section-11".*?</SectionCard>', section11, content, flags=re.DOTALL)
content = re.sub(r'<SectionCard id="section-12".*?</SectionCard>', section12, content, flags=re.DOTALL)
content = re.sub(r'<SectionCard id="section-13".*?</SectionCard>', section13, content, flags=re.DOTALL)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated sections 7-13 successfully.")
