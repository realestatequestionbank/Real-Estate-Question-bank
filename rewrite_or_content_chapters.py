import re

file_path = 'components/handbook/oregon-handbook-summary.tsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the sections array (titles in sidebar) to match Oregon handbook TOC strictly
sections_array = """    const sections = [
        { id: 'section-1', label: '1. Testing & Requirements' },
        { id: 'section-2', label: '2. Signs & Traffic Signals' },
        { id: 'section-3', label: '3. Lane Travel & Speed' },
        { id: 'section-4', label: '4. Turns & Intersections' },
        { id: 'section-5', label: '5. Sharing the Road' },
        { id: 'section-6', label: '6. Railroads, Light Rail & Street Cars' },
        { id: 'section-7', label: '7. Parking & Stopping' },
        { id: 'section-8', label: '8. Safe & Responsible Driving' },
        { id: 'section-9', label: '9. Other Important Information' }
    ];"""

content = re.sub(r'const sections = \[.*?\];', sections_array, content, flags=re.DOTALL)


# The 9 sections content based strictly on OR handbook TOC
new_sections_content = """                        {/* ===== Chapter 1 ===== */}
                        <SectionCard id="section-1" number={1} title="Testing & Requirements">
                            <p>
                                To operate a motor vehicle in Oregon, you must possess a valid driving privilege. DMV will test your vision, driving knowledge, and driving skill.
                            </p>
                            
                            <SubHeading>Knowledge Test Rules</SubHeading>
                            <BulletList items={[
                                <>The Class C knowledge test has <strong>35 multiple-choice questions</strong>.</>,
                                <>You must answer <strong>28 questions correctly</strong> (80%) to pass.</>,
                                <>You cannot use the manual, electronic devices, or any notes during the test.</>,
                            ]} />

                            <SubHeading>Drive Test Requirements</SubHeading>
                            <BulletList items={[
                                <>If you are under 18, you must have held an instruction permit for at least <strong>6 months</strong> before taking the drive test.</>,
                                <>Your test vehicle must have valid registration, proof of insurance, and be in safe operating condition (e.g., working turn signals, brake lights, horn, and adequate tires).</>,
                                <>Only you and the examiner are allowed in the vehicle during the test. No passengers or translators.</>,
                            ]} />
                        </SectionCard>

                        {/* ===== Chapter 2 ===== */}
                        <SectionCard id="section-2" number={2} title="Signs & Traffic Signals">
                            <SubHeading>Traffic Signal Colors</SubHeading>
                            <BulletList items={[
                                <><strong>Steady Red:</strong> Stop and remain stopped. You may turn right on red <strong>after coming to a complete stop</strong>, unless a sign prohibits it. You may also turn left on red if entering a one-way street in the direction of traffic.</>,
                                <><strong>Flashing Red:</strong> Treat this exactly like a stop sign.</>,
                                <><span className="text-yellow-600 font-bold">Steady Yellow:</span> Warns the signal is about to turn red. Stop before entering the intersection if you can do so safely.</>,
                                <><span className="text-yellow-600 font-bold">Flashing Yellow:</span> Slow down and proceed with caution.</>,
                                <><span className="text-green-600 font-bold">Flashing Yellow Arrow:</span> You may turn in the direction of the arrow, but you must <strong>first yield</strong> to pedestrians and oncoming traffic.</>,
                            ]} />

                            <SubHeading>Sign Colors & Shapes</SubHeading>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                                {[
                                    { color: 'Red & White Octagon', meaning: 'Stop completely' },
                                    { color: 'Red & White Triangle', meaning: 'Yield right of way' },
                                    { color: 'Yellow Diamond', meaning: 'Warning of upcoming hazards' },
                                    { color: 'White Rectangle', meaning: 'Regulatory (Speed limits, rules)' },
                                    { color: 'Green', meaning: 'Guide / Directional information' },
                                    { color: 'Blue', meaning: 'Motorist Services (Gas, Food, Hospital)' },
                                ].map((item) => (
                                    <div key={item.color} className="p-2.5 bg-gray-50 rounded-lg text-sm border border-gray-100 flex gap-2">
                                        <span className="font-bold text-gray-800 shrink-0">{item.color}:</span>
                                        <span className="text-gray-600">{item.meaning}</span>
                                    </div>
                                ))}
                            </div>
                        </SectionCard>

                        {/* ===== Chapter 3 ===== */}
                        <SectionCard id="section-3" number={3} title="Lane Travel & Speed">
                            <SubHeading>The Basic Rule Law</SubHeading>
                            <p className="mb-3 text-sm text-gray-700">The basic rule states you must drive at a speed that is <strong>reasonable and cautious</strong> for existing conditions. This applies on all roads at all times, even if the speed limit is higher.</p>

                            <SubHeading>Oregon Maximum Speed Limits</SubHeading>
                            <p className="mb-2 text-sm text-gray-700">Unless posted otherwise, these limits apply:</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                                {[
                                    { limit: '15 mph', where: 'Alleys and narrow residential areas' },
                                    { limit: '20 mph', where: 'School zones and business districts' },
                                    { limit: '25 mph', where: 'Residential districts and public parks' },
                                    { limit: '55 mph', where: 'All other roads and highways' },
                                ].map((item) => (
                                    <div key={item.limit} className="p-2.5 bg-gray-50 rounded-lg text-sm border border-gray-100">
                                        <span className="font-bold text-[#007aff]">{item.limit}</span>
                                        <span className="text-gray-600"> — {item.where}</span>
                                    </div>
                                ))}
                            </div>
                            
                            <SubHeading>Lane Markings</SubHeading>
                            <BulletList items={[
                                <><strong>Solid Yellow Line:</strong> Marks the left edge of one-way roads and separates traffic moving in opposite directions. You may not pass.</>,
                                <><strong>Broken Yellow Line:</strong> You may pass if it is safe to do so.</>,
                                <><strong>Solid White Line:</strong> Marks the right edge of the road, or separates lanes of traffic moving in the same direction. Lane changes are discouraged.</>,
                            ]} />
                        </SectionCard>

                        {/* ===== Chapter 4 ===== */}
                        <SectionCard id="section-4" number={4} title="Turns & Intersections">
                            <SubHeading>Signaling</SubHeading>
                            <BulletList items={[
                                <>You must signal at least <strong>100 feet</strong> before you turn or change lanes.</>,
                                <>If your vehicle's turn signals are broken, you must use hand signals.</>,
                            ]} />

                            <SubHeading>Right of Way at Intersections</SubHeading>
                            <BulletList items={[
                                <>At an intersection with no signs or signals, you must yield to vehicles already in the intersection.</>,
                                <>If you arrive at an intersection at the same time as another vehicle, the vehicle on the <strong>left must yield to the vehicle on the right</strong>.</>,
                                <>When making a left turn, you must yield to oncoming traffic going straight.</>,
                                <>At a four-way stop, the first vehicle to arrive has the right of way. If two arrive at the same time, the one on the right goes first.</>,
                            ]} />
                            
                            <InfoBox className="mt-2">
                                When entering a roundabout, you must yield to traffic already in the circle. Traffic inside a roundabout travels in a counter-clockwise direction.
                            </InfoBox>
                        </SectionCard>

                        {/* ===== Chapter 5 ===== */}
                        <SectionCard id="section-5" number={5} title="Sharing the Road">
                            <SubHeading>Pedestrians and School Zones</SubHeading>
                            <BulletList items={[
                                <>Every intersection is a crosswalk, whether it is marked or unmarked. You must stop for pedestrians in a crosswalk.</>,
                                <><strong>Blind Pedestrians:</strong> You must yield right of way to any blind pedestrian carrying a white cane or using a guide dog.</>,
                                <>You must stop for a school bus with flashing red lights. You do not need to stop if the bus is on the opposite side of a divided highway.</>,
                            ]} />

                            <SubHeading>Bicycles and Motorcycles</SubHeading>
                            <BulletList items={[
                                <>Bicycles are vehicles and must obey traffic laws. Yield to them just as you would to another motor vehicle.</>,
                                <>Do not drive in a bicycle lane. You may cross a bicycle lane only when it is safe to do so, such as when turning into a driveway.</>,
                                <>Leave plenty of room when following or passing a motorcycle. They can stop much faster than cars.</>,
                            ]} />

                            <WarningBox title="Large Vehicles (CMVs)" icon={<AlertTriangle className="w-4 h-4" />}>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• Large trucks have massive blind spots ("No-Zones") on all four sides. If you cannot see the driver's face in their side mirror, they cannot see you.</li>
                                    <li>• Trucks make very wide right turns. Never pass a truck on the right side if it is preparing to turn.</li>
                                </ul>
                            </WarningBox>
                        </SectionCard>

                        {/* ===== Chapter 6 ===== */}
                        <SectionCard id="section-6" number={6} title="Railroads, Light Rail & Street Cars">
                            <p className="mb-2">Trains cannot stop quickly. A freight train traveling at 55 mph can take a mile or more to stop.</p>
                            <BulletList items={[
                                <>When approaching a railroad crossing with flashing red lights, you must stop at least <strong>15 feet</strong> from the nearest rail.</>,
                                <>Never drive around lowered gates. It is illegal and deadly.</>,
                                <>Do not shift gears while crossing railroad tracks; your vehicle could stall.</>,
                                <>Light rail trains and streetcars share the road with vehicles. Treat their crossings the same as standard railroad crossings.</>,
                            ]} />
                        </SectionCard>

                        {/* ===== Chapter 7 ===== */}
                        <SectionCard id="section-7" number={7} title="Parking & Stopping">
                            <SubHeading>Parking on Hills</SubHeading>
                            <BulletList items={[
                                <><strong>Downhill against a curb:</strong> Turn your wheels toward the curb.</>,
                                <><strong>Uphill against a curb:</strong> Turn your wheels outward, away from the curb.</>,
                                <><strong>No curb (uphill or downhill):</strong> Turn your wheels toward the edge of the road so the vehicle will roll off the road, not into traffic.</>,
                            ]} />

                            <SubHeading>Illegal Parking Areas</SubHeading>
                            <BulletList items={[
                                <>Within <strong>10 feet</strong> of a fire hydrant.</>,
                                <>Within <strong>15 feet</strong> of the driveway entrance to a fire station.</>,
                                <>Within <strong>20 feet</strong> of a crosswalk at an intersection.</>,
                                <>Within <strong>50 feet</strong> of a traffic signal or sign (if parking would block its view).</>,
                                <>On a sidewalk, in an intersection, or on a crosswalk.</>,
                            ]} />
                        </SectionCard>

                        {/* ===== Chapter 8 ===== */}
                        <SectionCard id="section-8" number={8} title="Safe & Responsible Driving">
                            <SubHeading>Safety Belts and Mobile Devices</SubHeading>
                            <BulletList items={[
                                <>Oregon law requires all drivers and passengers to wear safety belts.</>,
                                <>It is <strong>illegal</strong> for any driver to use a mobile electronic device while driving, unless using a hands-free accessory (and even then, only for drivers 18 and older).</>,
                            ]} />

                            <SubHeading>Driving Impaired (DUII)</SubHeading>
                            <p className="mb-3">You can be arrested for Driving Under the Influence of Intoxicants (DUII) for alcohol, cannabis, or other drugs.</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                                {[
                                    { limit: '0.08%', who: 'Blood Alcohol Content (BAC) strictly illegal for adults 21+' },
                                    { limit: 'Zero Tolerance', who: 'Any amount of alcohol for drivers under age 21' },
                                ].map((item) => (
                                    <div key={item.limit} className="flex items-center gap-3 p-3 bg-red-50/50 rounded-xl border border-red-100">
                                        <div className="font-bold text-red-600 text-lg">{item.limit}</div>
                                        <div className="text-sm font-medium text-gray-800">{item.who}</div>
                                    </div>
                                ))}
                            </div>
                            <BulletList items={[
                                <><strong>Implied Consent Law:</strong> By driving in Oregon, you consent to a breath, blood, or urine test if arrested for DUII. Refusing the test results in a hefty fine and a longer license suspension.</>,
                                <>Oregon's Open Container law makes it illegal to have an open alcoholic beverage or marijuana container in the passenger compartment of your vehicle.</>,
                            ]} />
                        </SectionCard>

                        {/* ===== Chapter 9 ===== */}
                        <SectionCard id="section-9" number={9} title="Other Important Information">
                            <SubHeading>Emergency Vehicles and Traffic Collisions</SubHeading>
                            <BulletList items={[
                                <><strong>Move Over Law:</strong> When passing stopped emergency vehicles, tow trucks, or roadside assistance vehicles with flashing lights, you must safely move over to another lane or slow down significantly.</>,
                                <>If you are in a crash, you must stop immediately. If anyone is injured or if property damage exceeds $2,500, you must file an Accident and Insurance Report with DMV within <strong>72 hours</strong>.</>,
                            ]} />

                            <SubHeading>Mandatory Insurance</SubHeading>
                            <BulletList items={[
                                <>Oregon law requires every driver to insure their vehicle for bodily injury and property damage.</>,
                                <>You must carry proof of insurance in your vehicle and provide it to a police officer upon request or after a collision.</>,
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
    # Ensure all closing tags for the grid matches
    content = content[:start_idx] + new_sections_content + '\n                    </div>\n                </div>\n            </main>\n\n            ' + content[end_idx:]

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated Oregon content to exact 9 chapters.")
