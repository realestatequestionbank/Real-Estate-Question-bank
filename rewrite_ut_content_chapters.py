import re

file_path = 'components/handbook/utah-handbook-summary.tsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the sections array (titles in sidebar) to match Utah handbook TOC strictly
sections_array = """    const sections = [
        { id: 'section-1', label: '1. Definitions' },
        { id: 'section-2', label: '2. Licensing Requirements' },
        { id: 'section-3', label: '3. Driver Education & Permits' },
        { id: 'section-4', label: '4. Driver License Types & ID' },
        { id: 'section-5', label: '5. Vision and Health' },
        { id: 'section-6', label: '6. Examinations' },
        { id: 'section-7', label: '7. Preparing Your Vehicle' },
        { id: 'section-8', label: '8. Basic Driving' },
        { id: 'section-9', label: '9. Rules of the Road' },
        { id: 'section-10', label: '10. Alcohol/Drugs & Driving' },
        { id: 'section-11', label: '11. Distractions & Driving Challenges' },
        { id: 'section-12', label: '12. Crashes & Insurance' },
        { id: 'section-13', label: '13. Suspensions & Your Record' },
        { id: 'section-14', label: '14. Sharing the Road' },
        { id: 'section-15', label: '15. Vehicle Equipment' },
        { id: 'section-16', label: '16. Towing' }
    ];"""

content = re.sub(r'const sections = \[.*?\];', sections_array, content, flags=re.DOTALL)


# The 16 sections content based strictly on UT handbook TOC
new_sections_content = """                        {/* ===== Chapter 1 ===== */}
                        <SectionCard id="section-1" number={1} title="Definitions">
                            <BulletList items={[
                                <><strong>Mobility Vehicle:</strong> A vehicle used by a person with a physical disability which meets specifications and can be operated on a public roadway.</>,
                                <><strong>Provisional License:</strong> A Utah license issued to any person under 21 years of age.</>,
                                <><strong>Street-Legal All-Terrain:</strong> An all-terrain type I or utility-type vehicle modified to operate on highways.</>,
                            ]} />
                        </SectionCard>

                        {/* ===== Chapter 2 ===== */}
                        <SectionCard id="section-2" number={2} title="Licensing Requirements">
                            <BulletList items={[
                                <>Every resident of Utah who drives a motor vehicle on the highways must have a valid Utah driver license, learner permit, or temporary driver license.</>,
                                <>You become a resident if you remain in the state for <strong>six months</strong> or more during any calendar year, or if you obtain a driver license/register a vehicle in Utah.</>,
                                <>By law, you may not possess more than one REAL ID-compliant certificate at a time.</>,
                            ]} />
                        </SectionCard>

                        {/* ===== Chapter 3 ===== */}
                        <SectionCard id="section-3" number={3} title="Driver Education & Permits">
                            <SubHeading>Learner Permit Rules</SubHeading>
                            <BulletList items={[
                                <>You must be at least <strong>15 years old</strong> to obtain an entry-level learner permit.</>,
                                <>A licensed parent, legal guardian, or approved driving instructor must sit next to you.</>,
                                <><strong>Age 16 and 17:</strong> You must hold the learner permit for at least <strong>six months</strong> before acting a provisional license.</>,
                                <><strong>Age 19+:</strong> Must hold the learner permit for at least 90 days (waived if a driver ed course is completed).</>,
                            ]} />

                            <WarningBox title="Youthful Driver Restrictions (Age 16)" icon={<AlertTriangle className="w-4 h-4" />}>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• <strong>Nighttime driving:</strong> No driving between <strong>midnight and 5:00 a.m.</strong> unless accompanied by a licensed driver 21+ or for specific exceptions (work, school, agriculture, emergency).</li>
                                    <li>• <strong>Passenger limits:</strong> For the first 6 months with your license, you can only drive <strong>immediate family members</strong>, unless accompanied by a licensed driver who is 21 or older in the front seat.</li>
                                </ul>
                            </WarningBox>
                        </SectionCard>

                        {/* ===== Chapter 4 ===== */}
                        <SectionCard id="section-4" number={4} title="Driver License Types & ID">
                            <BulletList items={[
                                <>A provisional Class D license is for anyone under 21 years of age.</>,
                                <>A regular Class D license is for anyone 21 and over.</>,
                                <>Address changes must be reported to the Driver License Division within <strong>10 days</strong>.</>,
                            ]} />
                        </SectionCard>

                        {/* ===== Chapter 5 ===== */}
                        <SectionCard id="section-5" number={5} title="Vision and Health">
                            <BulletList items={[
                                <>You must pass an eye test showing at least <strong>20/40 vision</strong> and peripheral fields of 90 degrees in each eye to get a license.</>,
                                <>If you require glasses or contacts to pass, a "B" restriction will be placed on your license.</>,
                            ]} />
                        </SectionCard>

                        {/* ===== Chapter 6 ===== */}
                        <SectionCard id="section-6" number={6} title="Examinations">
                            <BulletList items={[
                                <><strong>Written Knowledge Test:</strong> Open book tests have a maximum of 50 questions. You must score 80% or better to pass.</>,
                                <><strong>Driving Skills Test:</strong> Includes demonstrating vehicle safety, backing, steering, stopping, turns, handling intersections, and speed control. The tester will <strong>not</strong> ask you to do anything illegal.</>,
                            ]} />
                        </SectionCard>

                        {/* ===== Chapter 7 ===== */}
                        <SectionCard id="section-7" number={7} title="Preparing Your Vehicle">
                            <BulletList items={[
                                <><strong>Safety Belts:</strong> Utah law requires all occupants of a motor vehicle to wear a safety belt. The driver is responsible for enforcing this for passengers under 16.</>,
                                <><strong>Car Seats:</strong> Children must be properly restrained in an approved car seat until they are at least <strong>8 years old</strong> and 57 inches tall.</>,
                            ]} />
                        </SectionCard>

                        {/* ===== Chapter 8 ===== */}
                        <SectionCard id="section-8" number={8} title="Basic Driving">
                            <SubHeading>Signaling and Lane Changes</SubHeading>
                            <BulletList items={[
                                <>You must signal at least <strong>two seconds</strong> before turning, changing lanes, or pulling away from a curb.</>,
                                <>Check your "blind spots" (head checks) by looking over your shoulder before you make any lateral move.</>,
                            ]} />
                            <SubHeading>Parking on Hills</SubHeading>
                            <BulletList items={[
                                <><strong>Downhill:</strong> Turn your wheels toward the curb.</>,
                                <><strong>Uphill with curb:</strong> Turn wheels away from the curb.</>,
                                <><strong>Uphill without curb:</strong> Turn wheels toward the edge of the road.</>,
                            ]} />
                        </SectionCard>

                        {/* ===== Chapter 9 ===== */}
                        <SectionCard id="section-9" number={9} title="Rules of the Road">
                            <SubHeading>Utah Maximum Speed Limits</SubHeading>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                                {[
                                    { limit: '20 mph', where: 'School Zones' },
                                    { limit: '25 mph', where: 'Residential and business districts' },
                                    { limit: '65-80 mph', where: 'Freeways and rural interstates (as posted)' },
                                ].map((item) => (
                                    <div key={item.limit} className="p-2.5 bg-gray-50 rounded-lg text-sm border border-gray-100">
                                        <span className="font-bold text-[#007aff]">{item.limit}</span>
                                        <span className="text-gray-600"> — {item.where}</span>
                                    </div>
                                ))}
                            </div>
                            
                            <SubHeading>Right of Way & Stop Signs</SubHeading>
                            <BulletList items={[
                                <>At a 4-way stop, the driver who arrived first goes first. If arriving at the same time, the driver on the left yields to the driver on the right.</>,
                                <>You must always yield to pedestrians in marked and unmarked crosswalks.</>,
                                <>Pull to the <strong>right edge</strong> of the road and stop entirely when an emergency vehicle approaches with lights/sirens.</>,
                                <>You must stop for a school bus with flashing red lights until the lights stop flashing.</>,
                            ]} />
                        </SectionCard>

                        {/* ===== Chapter 10 ===== */}
                        <SectionCard id="section-10" number={10} title="Alcohol/Drugs & Driving">
                            <p className="mb-3">Utah has the strictest DUI limit in the country.</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                                {[
                                    { limit: '0.05%', who: 'Blood Alcohol Content (BAC) for adults 21+' },
                                    { limit: 'Not a drop', who: 'Zero tolerance for drivers under age 21' },
                                ].map((item) => (
                                    <div key={item.limit} className="flex items-center gap-3 p-3 bg-red-50/50 rounded-xl border border-red-100">
                                        <div className="font-bold text-red-600 text-lg">{item.limit}</div>
                                        <div className="text-sm font-medium text-gray-800">{item.who}</div>
                                    </div>
                                ))}
                            </div>
                            <BulletList items={[
                                <><strong>Implied Consent:</strong> By driving a vehicle in Utah, you have agreed to take a chemical test of your breath, blood, or urine to determine the alcohol/drug content if arrested.</>,
                                <>First-time DUI convictions can result in a 120-day suspension, fines, jail time, and the requirement of an ignition interlock device.</>,
                            ]} />
                        </SectionCard>

                        {/* ===== Chapter 11 ===== */}
                        <SectionCard id="section-11" number={11} title="Distractions & Challenges">
                            <BulletList items={[
                                <><strong>Wireless Communications:</strong> It is illegal to manually type or read a text message, email, or instant message while operating a moving motor vehicle in Utah.</>,
                                <><strong>Following Distance:</strong> You should keep at least a <strong>two-second</strong> following distance from the vehicle ahead in ideal conditions (increase in bad weather).</>,
                                <>If you encounter a flooded roadway or "phantom lake," do not attempt to drive through the water.</>,
                            ]} />
                        </SectionCard>

                        {/* ===== Chapter 12 ===== */}
                        <SectionCard id="section-12" number={12} title="Crashes & Insurance">
                            <BulletList items={[
                                <>If involved in a crash, you must immediately stop. If damage to property is total to <strong>$2,500 or more</strong>, or if there is injury or death, you must notify the police immediately.</>,
                                <>Utah requires all drivers to carry continuous motor vehicle liability insurance. Moving a vehicle without insurance is a Class B misdemeanor.</>,
                            ]} />
                        </SectionCard>
                        
                        {/* ===== Chapter 13 ===== */}
                        <SectionCard id="section-13" number={13} title="Suspensions & Your Record">
                            <BulletList items={[
                                <><strong>Point System:</strong> Drivers under 21 receive a warning if they accumulate 70 or more points within three years. Drivers 21+ receive a warning at 200 points.</>,
                                <>Driving points can be halved by driving one full year without a citation, or completely cleared after two years. Taking an approved Defensive Driving Course removes 50 points.</>,
                            ]} />
                        </SectionCard>

                        {/* ===== Chapter 14 ===== */}
                        <SectionCard id="section-14" number={14} title="Sharing the Road">
                            <BulletList items={[
                                <><strong>Large Trucks:</strong> Large trucks have massive blind spots ("No Zones"). If you cannot see the driver in their side mirrors, they cannot see you.</>,
                                <><strong>Motorcycles:</strong> Do not share a lane with a motorcycle. A motorcycle is entitled to the full width of a traffic lane.</>,
                                <>Utah allows "lane filtering" for motorcycles if the speed limit is 45 mph or less and vehicles are completely stopped.</>,
                            ]} />
                        </SectionCard>
                        
                        {/* ===== Chapter 15 ===== */}
                        <SectionCard id="section-15" number={15} title="Vehicle Equipment">
                            <BulletList items={[
                                <>Every vehicle must have two working headlights, taillights, a horn, and an exhaust system that prevents excessive noise.</>,
                                <>Window tint must transmit at least 43% of incident light for the front side windows.</>,
                            ]} />
                        </SectionCard>
                        
                        {/* ===== Chapter 16 ===== */}
                        <SectionCard id="section-16" number={16} title="Towing">
                            <BulletList items={[
                                <>Maximum speed when towing a trailer or another vehicle is lower than regular speed limits. Ensure you have the proper hitch and safety chains connecting the trailer to the towing vehicle.</>,
                            ]} />
                        </SectionCard>"""

# Find the start and end of the actual content sections list
start_idx = content.find('{/* ===== Chapter 1:')
end_idx = content.find('{/* CTA Section */}')

if start_idx != -1 and end_idx != -1:
    content = content[:start_idx] + new_sections_content + '\n                    </div>\n                </div>\n            </main>\n\n            ' + content[end_idx:]

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated Utah component to exact 16 chapters.")
