import re

file_path = 'components/handbook/new-mexico-handbook-summary.tsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the sections array (titles in sidebar)
sections_array = """    const sections = [
        { id: 'section-1', label: '1. The Driver License & GDL' },
        { id: 'section-2', label: '2. Traffic Rules & Right-of-Way' },
        { id: 'section-3', label: '3. Speed Limits & Parking' },
        { id: 'section-4', label: '4. Traffic Signs & Signals' },
        { id: 'section-5', label: '5. Safe Driving Practices' },
        { id: 'section-6', label: '6. Sharing the Road' },
        { id: 'section-7', label: '7. Alcohol and Drugs' },
        { id: 'section-8', label: '8. Emergencies & Crashes' },
        { id: 'section-9', label: '9. Safety Belts & Child Restraints' },
        { id: 'section-10', label: '10. Motorcycles' },
    ];"""

content = re.sub(r'const sections = \[.*?\];', sections_array, content, flags=re.DOTALL)


# The 10 sections content
new_sections_content = """                        {/* ===== Chapter 1 ===== */}
                        <SectionCard id="section-1" number={1} title="The Driver License & GDL">
                            <p>
                                Driving in New Mexico is a privilege. If you are under the age of 18, you must participate in the Graduated Driver License (GDL) system until you meet the requirements for an unrestricted license.
                            </p>
                            
                            <SubHeading>Instructional Permit</SubHeading>
                            <BulletList items={[
                                <>Must be at least <strong>15 years of age</strong> to obtain an instructional permit.</>,
                                <>You must pass the <strong>knowledge test and vision test</strong>.</>,
                                <>Must be enrolled in an approved driver education course that includes DWI education.</>,
                                <>When driving, a licensed driver <strong>21 years of age or older</strong> who has been licensed for at least 3 years must sit in the right front seat.</>,
                                <>You must hold the instructional permit for at least <strong>six months</strong>.</>,
                            ]} />

                            <WarningBox title="Provisional License Restrictions" icon={<AlertTriangle className="w-4 h-4" />}>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• Must complete <strong>50 hours</strong> of practice driving, including <strong>10 hours at night</strong>.</li>
                                    <li>• Minimum age is 15 years and 6 months.</li>
                                    <li>• <strong>Nighttime Driving Restriction:</strong> You may not drive between <strong>midnight and 5:00 a.m.</strong> unless accompanied by a licensed driver 21 or older, or for medical/work/school exceptions.</li>
                                    <li>• <strong>Passenger Restriction:</strong> You may not have more than one passenger under age 21 who is not immediate family, unless supervised by a licensed driver 21+.</li>
                                </ul>
                            </WarningBox>
                        </SectionCard>

                        {/* ===== Chapter 2 ===== */}
                        <SectionCard id="section-2" number={2} title="Traffic Rules & Right-of-Way">
                            <SubHeading>Right-of-Way Rules</SubHeading>
                            <p className="mb-2">The law says who must yield the right of way; it does not give anyone the right-of-way. You must always yield to pedestrians.</p>
                            <BulletList items={[
                                <><strong>Intersections without signs:</strong> Yield to vehicles coming from the <strong>right</strong>.</>,
                                <><strong>4-Way Stop:</strong> The vehicle arriving first goes first. If arriving at the same time, the vehicle on the <strong>right</strong> goes first.</>,
                                <><strong>Left Turns:</strong> You must yield to oncoming vehicles going straight ahead.</>,
                                <><strong>Emergency Vehicles:</strong> Pull over to the <strong>right edge</strong> of the road and stop for vehicles displaying red or blue flashing lights and sirens.</>,
                            ]} />

                            <SubHeading>School Buses</SubHeading>
                            <BulletList items={[
                                <>You must <strong>stop</strong> for a school bus with its red lights flashing, whether it is on your side, the opposite side, or at an intersection.</>,
                                <>You do not have to stop if the bus is on the opposite side of a roadway separated by a physical barrier or median.</>,
                            ]} />
                        </SectionCard>

                        {/* ===== Chapter 3 ===== */}
                        <SectionCard id="section-3" number={3} title="Speed Limits & Parking">
                            <SubHeading>New Mexico Maximum Speed Limits</SubHeading>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                                {[
                                    { limit: '15 mph', where: 'School Zones' },
                                    { limit: '30 mph', where: 'Business or residential areas (unless posted otherwise)' },
                                    { limit: '55 mph', where: 'Public highways (unless posted otherwise)' },
                                    { limit: '75 mph', where: 'Rural interstate highways (unless posted otherwise)' },
                                ].map((item) => (
                                    <div key={item.limit} className="p-2.5 bg-gray-50 rounded-lg text-sm border border-gray-100">
                                        <span className="font-bold text-[#007aff]">{item.limit}</span>
                                        <span className="text-gray-600"> — {item.where}</span>
                                    </div>
                                ))}
                            </div>
                            
                            <SubHeading>No-Parking Zones</SubHeading>
                            <BulletList items={[
                                <>Within <strong>15 feet</strong> of a fire hydrant.</>,
                                <>Within <strong>25 feet</strong> of a crosswalk at an intersection.</>,
                                <>Within <strong>30 feet</strong> of a traffic signal, stop sign, or yield sign.</>,
                                <>Within <strong>50 feet</strong> of a railroad crossing.</>,
                                <>More than <strong>18 inches</strong> from the curb.</>,
                            ]} />

                            <InfoBox className="mt-2">
                                When parking on a hill, turn your wheels sharply towards the edge of the road or curb, so that if the vehicle rolls, it rolls away from traffic.
                            </InfoBox>
                        </SectionCard>

                        {/* ===== Chapter 4 ===== */}
                        <SectionCard id="section-4" number={4} title="Traffic Signs & Signals">
                            <SubHeading>Traffic Signal Colors</SubHeading>
                            <BulletList items={[
                                <><strong>Steady Red / Red Arrow:</strong> Stop. You may turn right on red after coming to a full stop if it is safe and no sign prohibits it.</>,
                                <><strong>Flashing Red:</strong> Treat exactly like a stop sign. Come to a full stop.</>,
                                <><strong>Flashing Yellow:</strong> Slow down and proceed with caution.</>,
                                <><strong>Yellow Arrow:</strong> Protection of the green arrow is ending. Prepare to stop.</>,
                            ]} />

                            <SubHeading>Pavement Markings</SubHeading>
                            <BulletList items={[
                                <><strong>Solid Yellow Line:</strong> Cannot pass. Passing is only permitted on a broken/dashed yellow line.</>,
                                <><strong>Double Solid Yellow:</strong> Neither side can pass.</>,
                                <><strong>Shared Center Lane (Solid & Dashed Yellow):</strong> Reserved for left turns or U-turns. Not to be used for passing.</>,
                            ]} />
                        </SectionCard>

                        {/* ===== Chapter 5 ===== */}
                        <SectionCard id="section-5" number={5} title="Safe Driving Practices">
                            <SubHeading>Scanning and Looking Ahead</SubHeading>
                            <p className="mb-2">Scanning helps you see problems ahead, vehicles, and people. Look ahead, to the sides, and behind.</p>
                            <BulletList items={[
                                <>Safer drivers look at least <strong>10 seconds ahead</strong> of their vehicle. In the city, 10 seconds is about one block.</>,
                                <>Check your mirrors when changing lanes, slowing down, or driving down a long steep hill.</>,
                            ]} />

                            <SubHeading>Blind Spots</SubHeading>
                            <BulletList items={[
                                <>Look over your shoulder in the direction you plan to move to check your blind spots.</>,
                                <>Never rely solely on your mirrors when changing lanes. You must turn your head.</>,
                            ]} />
                        </SectionCard>

                        {/* ===== Chapter 6 ===== */}
                        <SectionCard id="section-6" number={6} title="Sharing the Road">
                            <SubHeading>Bicycles and Pedestrians</SubHeading>
                            <BulletList items={[
                                <><strong>White Cane Law:</strong> You must take all necessary precautions to avoid injury to blind pedestrians carrying a white cane or using a guide dog.</>,
                                <>Bicycles are treated like vehicles. Leave plenty of room when passing.</>,
                            ]} />

                            <SubHeading>Large Trucks and RVs</SubHeading>
                            <BulletList items={[
                                <>Large trucks have large blind spots called <strong>No-Zones</strong> directly behind them, in front, and on the sides.</>,
                                <>If you cannot see the truck driver in their side mirrors, they cannot see you.</>,
                                <>Never cut in front of a truck immediately after passing; they take up to twice as long to stop.</>,
                            ]} />
                        </SectionCard>

                        {/* ===== Chapter 7 ===== */}
                        <SectionCard id="section-7" number={7} title="Alcohol and Drugs">
                            <SubHeading>DWI Laws and Limits</SubHeading>
                            <p className="mb-3">New Mexico has strict limits for Blood Alcohol Content (BAC). You can be arrested for DWI if your BAC is:</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                                {[
                                    { limit: '0.08%', who: 'Drivers Age 21 and Older' },
                                    { limit: '0.02%', who: 'Drivers Under Age 21' },
                                    { limit: '0.04%', who: 'Commercial Drivers (CDL)' },
                                ].map((item) => (
                                    <div key={item.limit} className="flex items-center gap-3 p-3 bg-red-50/50 rounded-xl border border-red-100">
                                        <div className="font-bold text-red-600 text-lg">{item.limit}</div>
                                        <div className="text-sm font-medium text-gray-800">{item.who}</div>
                                    </div>
                                ))}
                            </div>
                            
                            <BulletList items={[
                                <>There is <strong>no safe amount of alcohol</strong>. Your body gets rid of about one alcoholic drink per hour. Coffee or showers do not sober you up faster.</>,
                                <>Prescription and over-the-counter drugs can affect your driving as much as alcohol. It is illegal to drive impaired by any drug.</>,
                                <><strong>Implied Consent:</strong> If arrested for DWI, you must take a blood or breath test. Refusal results in license revocation.</>,
                            ]} />
                        </SectionCard>

                        {/* ===== Chapter 8 ===== */}
                        <SectionCard id="section-8" number={8} title="Emergencies & Crashes">
                            <div className="space-y-3 mb-4">
                                <ConditionItem emoji="🛑" name="Brake Failure">
                                    Pump the brake pedal several times to build pressure. If that doesn't work, use your parking brake slowly. Shift to lower gears and look for a safe place to stop.
                                </ConditionItem>
                                <ConditionItem emoji="💥" name="Tire Blowout">
                                    Hold the steering wheel tightly and keep the vehicle going straight. Slow down gradually. Take your foot off the gas pedal and use the brakes lightly. Pull off the road.
                                </ConditionItem>
                                <ConditionItem emoji="🦌" name="Wildlife Encounters">
                                    If an animal runs out, apply the brakes. Do not swerve into oncoming traffic to avoid the animal.
                                </ConditionItem>
                                <ConditionItem emoji="❄️" name="Skids">
                                    Stay off the brakes. Steer in the direction you want the vehicle to go. As soon as the vehicle straightens out, turn the steering wheel back the other way safely.
                                </ConditionItem>
                            </div>
                            
                            <SubHeading>If you are in a crash</SubHeading>
                            <BulletList items={[
                                <>You must stop. Moving away from the scene without identifying yourself is a hit-and-run.</>,
                                <>If someone is injured, report the accident and get help immediately.</>,
                            ]} />
                        </SectionCard>

                        {/* ===== Chapter 9 ===== */}
                        <SectionCard id="section-9" number={9} title="Safety Belts & Child Restraints">
                            <BulletList items={[
                                <>In New Mexico, it is illegal to drive without wearing safety belts. All passengers must be restrained.</>,
                                <>Children under <strong>12 years of age</strong> must wear appropriate safety restraints while the vehicle is moving.</>,
                                <>Children under 24 months or weighing less than 60 pounds must be secured in an approved safety device in the rear seat.</>,
                                <>Never secure a child in the front passenger side if the vehicle has an airbag.</>,
                            ]} />
                        </SectionCard>

                        {/* ===== Chapter 10 ===== */}
                        <SectionCard id="section-10" number={10} title="Motorcycles">
                            <BulletList items={[
                                <>Because motorcycles are smaller, they are harder to see. Check your blind spots carefully.</>,
                                <>Make sure you leave at least a minimum <strong>four-second</strong> following distance when tracing behind a motorcycle.</>,
                                <>Motorcycles have the right to a full traffic lane. Do not share a lane with a motorcycle.</>,
                            ]} />
                        </SectionCard>"""

# Find the start and end of the actual content sections list
start_idx = content.find('{/* ===== Section 1:')
if start_idx == -1:
    start_idx = content.find('{/* ===== Chapter 1:')

end_idx = content.find('{/* CTA Section */}')
if end_idx == -1:
    end_idx = content.find('</main>')

if start_idx != -1 and end_idx != -1:
    content = content[:start_idx] + new_sections_content + '\n' + content[end_idx:]

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated New Mexico content.")
