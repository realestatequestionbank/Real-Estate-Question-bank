import re

file_path = 'components/handbook/new-mexico-handbook-summary.tsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the sections array (titles in sidebar) to match NM handbook TOC strictly
sections_array = """    const sections = [
        { id: 'section-1', label: '1. The Driver License' },
        { id: 'section-2', label: '2. Rules of the Road' },
        { id: 'section-3', label: '3. Safe Driving Tips' },
        { id: 'section-4', label: '4. Communicating' },
        { id: 'section-5', label: '5. Sharing the Road' },
        { id: 'section-6', label: '6. Be in Shape to Drive' },
        { id: 'section-7', label: '7. Emergencies' },
        { id: 'section-8', label: '8. Motorcycles' }
    ];"""

content = re.sub(r'const sections = \[.*?\];', sections_array, content, flags=re.DOTALL)


# The 8 sections content based strictly on NM handbook TOC
new_sections_content = """                        {/* ===== Chapter 1 ===== */}
                        <SectionCard id="section-1" number={1} title="The Driver License">
                            <p>
                                Anyone operating a motor vehicle in New Mexico must have a driver license. If you are under 18, you must complete the Graduated Driver License (GDL) system.
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
                                    <li>• Minimum age is 15 years and 6 months. Must complete <strong>50 hours</strong> of practice driving (10 at night).</li>
                                    <li>• <strong>Nighttime Restriction:</strong> May not drive between <strong>midnight and 5:00 a.m.</strong> unless accompanied by a licensed driver 21+ or for medical/work/school exceptions.</li>
                                    <li>• <strong>Passenger Restriction:</strong> May not have more than one passenger under age 21 who is not immediate family, unless supervised by a licensed driver 21+.</li>
                                </ul>
                            </WarningBox>
                            
                            <SubHeading>Safety Belts and Child Restraints</SubHeading>
                            <BulletList items={[
                                <>In New Mexico, it is illegal to drive without wearing safety belts.</>,
                                <>Children under 12 must wear appropriate safety restraints. Children under 24 months or under 60 lbs must be in an approved safety device in the rear seat.</>,
                            ]} />
                        </SectionCard>

                        {/* ===== Chapter 2 ===== */}
                        <SectionCard id="section-2" number={2} title="Rules of the Road">
                            <SubHeading>Right-of-Way</SubHeading>
                            <p className="mb-2">The law states who must yield; it does not give anyone the right-of-way. You must always yield to pedestrians.</p>
                            <BulletList items={[
                                <><strong>Intersections without signs:</strong> Yield to vehicles coming from the <strong>right</strong>.</>,
                                <><strong>4-Way Stop:</strong> The vehicle arriving first goes first. If arriving at the same time, the vehicle on the <strong>right</strong> goes first.</>,
                                <><strong>Emergency Vehicles:</strong> Pull over to the <strong>right edge</strong> of the road and stop for vehicles displaying red/blue flashing lights and sirens.</>,
                                <><strong>School Buses:</strong> You must <strong>stop</strong> for a school bus with its red lights flashing, unless it is on the opposite side of a roadway separated by a physical median.</>,
                            ]} />

                            <SubHeading>Speed Limits</SubHeading>
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
                            
                            <SubHeading>Parking Restrictions</SubHeading>
                            <BulletList items={[
                                <>Do not park within <strong>15 feet</strong> of a fire hydrant.</>,
                                <>Do not park within <strong>25 feet</strong> of a crosswalk at an intersection.</>,
                                <>Do not park within <strong>30 feet</strong> of a traffic signal, stop sign, or yield sign.</>,
                                <>Do not park within <strong>50 feet</strong> of a railroad crossing.</>,
                            ]} />
                        </SectionCard>

                        {/* ===== Chapter 3 ===== */}
                        <SectionCard id="section-3" number={3} title="Safe Driving Tips">
                            <SubHeading>Basic Driving and Scanning</SubHeading>
                            <BulletList items={[
                                <>Safer drivers look at least <strong>10 seconds ahead</strong> of their vehicle. In the city, 10 seconds is about one block.</>,
                                <>Before you enter an intersection, look left and right for approaching vehicles and crossing pedestrians.</>,
                                <>Whenever you want to change lanes, check your blind spots by looking over your shoulder. Never rely solely on your mirrors.</>,
                            ]} />

                            <SubHeading>Stopping and Following Distance</SubHeading>
                            <BulletList items={[
                                <>Stopping suddenly is dangerous and can cause skids. Try to avoid panic stops by seeing events well in advance.</>,
                                <>When you slow down quickly or at points where following drivers would not expect you to (like private driveways), check behind your vehicle first.</>,
                            ]} />
                        </SectionCard>

                        {/* ===== Chapter 4 ===== */}
                        <SectionCard id="section-4" number={4} title="Communicating">
                            <SubHeading>Letting others know you are there</SubHeading>
                            <BulletList items={[
                                <>Use your headlights to help other drivers see you. Turn them on when it begins to get dark or when it is raining, snowing, or foggy.</>,
                                <>Use your horn to warn others, not to express anger.</>,
                                <>If you break down, turn on your emergency flashers (hazard lights). Place emergency flares 200 to 300 feet behind the vehicle if you have them.</>,
                            ]} />

                            <SubHeading>Letting others know what you are doing</SubHeading>
                            <BulletList items={[
                                <>Signal before you change direction (e.g., turning, changing lanes, pulling away from a curb).</>,
                                <>If your vehicle's turn signals do not work, use hand signals.</>,
                                <>Signal when slowing down or stopping suddenly by tapping your brake pedal 3 or 4 times quickly to flash your brake lights.</>,
                            ]} />
                        </SectionCard>

                        {/* ===== Chapter 5 ===== */}
                        <SectionCard id="section-5" number={5} title="Sharing the Road">
                            <SubHeading>Bicycles and Pedestrians</SubHeading>
                            <BulletList items={[
                                <><strong>White Cane Law:</strong> You must take all necessary precautions to avoid injury to blind pedestrians carrying a white cane or using a guide dog.</>,
                                <>Bicycles have the same rights and responsibilities as motor vehicles. Leave plenty of room when passing a bicycle.</>,
                            ]} />

                            <SubHeading>Large Trucks and RVs</SubHeading>
                            <BulletList items={[
                                <>Large trucks have large blind spots called <strong>No-Zones</strong> directly behind them, in front, and on the sides.</>,
                                <>If you cannot see the truck driver in their side mirrors, they cannot see you.</>,
                                <>Never cut in front of a truck immediately after passing; trucks take up to twice as long to stop.</>,
                                <>Do not tailgate a truck. If following too closely, you cannot see the road ahead.</>,
                            ]} />
                        </SectionCard>

                        {/* ===== Chapter 6 ===== */}
                        <SectionCard id="section-6" number={6} title="Be in Shape to Drive">
                            <SubHeading>Drinking and Driving (DWI)</SubHeading>
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
                                <><strong>Implied Consent:</strong> If you are arrested for DWI, you are required to take a chemical test (blood or breath). Refusal results in license revocation.</>,
                                <>Prescription and over-the-counter drugs can affect your driving as much as alcohol. It is illegal to drive impaired by any drug.</>,
                            ]} />
                        </SectionCard>

                        {/* ===== Chapter 7 ===== */}
                        <SectionCard id="section-7" number={7} title="Emergencies">
                            <div className="space-y-3 mb-4">
                                <ConditionItem emoji="🛑" name="Brake Failure">
                                    Pump the brake pedal several times to build pressure. If that doesn't work, use your parking brake slowly. Shift to lower gears and look for a safe place to stop.
                                </ConditionItem>
                                <ConditionItem emoji="💥" name="Tire Blowout">
                                    Hold the steering wheel tightly and keep the vehicle going straight. Slow down gradually. Take your foot off the gas pedal and use the brakes lightly. Pull off the road.
                                </ConditionItem>
                                <ConditionItem emoji="❄️" name="Skids">
                                    Stay off the brakes. Steer in the direction you want the vehicle to go. As soon as the vehicle straightens out, turn the steering wheel back the other way safely.
                                </ConditionItem>
                            </div>
                            
                            <SubHeading>If you are in a crash</SubHeading>
                            <BulletList items={[
                                <>You must stop. Moving away from the scene without identifying yourself is a hit-and-run.</>,
                                <>If someone is injured, report the accident and get help immediately.</>,
                                <>If the crash involves a parked vehicle, you must try to locate the owner. If you cannot, leave a note in a conspicuous place.</>,
                            ]} />
                        </SectionCard>

                        {/* ===== Chapter 8 ===== */}
                        <SectionCard id="section-8" number={8} title="Motorcycles">
                            <BulletList items={[
                                <>Because motorcycles are smaller, they are harder to see. Check your blind spots carefully.</>,
                                <>Make sure you leave an adequate following distance when traveling behind a motorcycle. They can stop much faster than cars.</>,
                                <>Motorcycles have the right to a full traffic lane. Two motorcycles may share a lane with each other, but a car cannot share a lane with a motorcycle.</>,
                                <>Be especially alert for motorcycles at intersections. Most motorcycle crashes occur when another driver turns left in front of an oncoming motorcycle.</>,
                            ]} />
                        </SectionCard>"""

# Find the start and end of the actual content sections list
start_idx = content.find('{/* ===== Chapter 1:')
end_idx = content.find('{/* CTA Section */}')

if start_idx != -1 and end_idx != -1:
    content = content[:start_idx] + new_sections_content + '\n                    </div>\n                </div>\n            </main>\n\n            ' + content[end_idx:]

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated New Mexico content to exact 8 chapters.")
