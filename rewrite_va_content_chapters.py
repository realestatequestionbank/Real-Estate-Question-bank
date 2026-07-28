import re

file_path = 'components/handbook/virginia-handbook-summary.tsx'

# Load the template (we'll start by copying Utah as a base then modifying it)
with open('components/handbook/utah-handbook-summary.tsx', 'r', encoding='utf-8') as f:
    template_content = f.read()

# Update state names and constants
content = template_content.replace('Utah', 'Virginia').replace('UT', 'VA').replace('utah', 'virginia')

# Update the sections array to match VA handbook TOC (8 sections)
sections_array = """    const sections = [
        { id: 'section-1', label: '1. Testing' },
        { id: 'section-2', label: '2. Signals, Signs & Markings' },
        { id: 'section-3', label: '3. Safe Driving' },
        { id: 'section-4', label: '4. Seat Belts & Child Safety' },
        { id: 'section-5', label: '5. Penalties & Alcohol' },
        { id: 'section-6', label: '6. License Types' },
        { id: 'section-7', label: '7. Other Information' },
        { id: 'section-8', label: '8. Sample Exam' }
    ];"""

content = re.sub(r'const sections = \[.*?\];', sections_array, content, flags=re.DOTALL)

# Prepare the 8 sections content
new_sections_content = """                        {/* ===== Section 1: Testing ===== */}
                        <SectionCard id="section-1" number={1} title="Testing">
                            <SubHeading>Knowledge Exam</SubHeading>
                            <BulletList items={[
                                <><strong>Two-Part Exam:</strong> Part one is 10 traffic sign questions (must get 100%). Part two is general knowledge (must score 80%+).</>,
                                <><strong>Wait Period:</strong> If you fail and are under 18, you must wait <strong>15 days</strong> to retake. If 18+, you must wait until the next business day.</>,
                                <><strong>Three Failures:</strong> If you fail 3 times, you must complete the classroom component of driver education before testing again.</>
                            ]} />
                            <SubHeading>Vision & Road Skills</SubHeading>
                            <BulletList items={[
                                <><strong>Vision Standards:</strong> Unrestricted requires <strong>20/40</strong> or better. Restricted (daylight only) requires 20/70.</>,
                                <><strong>Road Skills:</strong> You must provides a vehicle with a valid safety inspection, registration, and working equipment.</>
                            ]} />
                        </SectionCard>

                        {/* ===== Section 2: Signals, Signs & Markings ===== */}
                        <SectionCard id="section-2" number={2} title="Signals, Signs and Pavement Markings">
                            <SubHeading>Traffic Signals</SubHeading>
                            <BulletList items={[
                                <><strong>Red Light:</strong> Complete stop. Right turn on red is allowed after stop unless "No Turn on Red" is posted.</>,
                                <><strong>Left Turn on Red:</strong> Allowed only from a one-way street onto another one-way street after stopping.</>,
                                <><strong>Red Arrow:</strong> Stop. You may <strong>not</strong> turn in the direction of the arrow (unlike some other states).</>
                            ]} />
                            <SubHeading>Sign Colors & Shapes</SubHeading>
                            <BulletList items={[
                                <><strong>Octagon:</strong> Exclusive to STOP signs.</>,
                                <><strong>Triangle:</strong> Exclusive to YIELD signs.</>,
                                <><strong>Diamond:</strong> Warning of special hazards or conditions.</>,
                                <><strong>Pentagon:</strong> School zones or school crossings.</>
                            ]} />
                        </SectionCard>

                        {/* ===== Section 3: Safe Driving ===== */}
                        <SectionCard id="section-3" number={3} title="Safe Driving">
                            <SubHeading>Speed Limits</SubHeading>
                            <BulletList items={[
                                <><strong>Interstates:</strong> Up to 70 mph where posted.</>,
                                <><strong>Public Highways:</strong> 55 mph unless otherwise posted.</>,
                                <><strong>School/Business/Residential:</strong> 25 mph unless otherwise posted.</>
                            ]} />
                            <SubHeading>Following Distance</SubHeading>
                            <BulletList items={[
                                <>Virginia recommends the <strong>2, 3, and 4-second rule</strong> to determine safe following distance based on speed and conditions.</>,
                                <>Increase distance for bad weather, heavy loads, or when following motorcycles/trucks.</>
                            ]} />
                            <WarningBox title="Right-of-Way" icon={<AlertTriangle className="w-4 h-4" />}>
                                <p className="text-sm">Yield to the driver on the right if you arrive at an intersection at the same time. Always yield to pedestrians and funeral processions.</p>
                            </WarningBox>
                        </SectionCard>

                        {/* ===== Section 4: Seat Belts & Child Safety ===== */}
                        <SectionCard id="section-4" number={4} title="Seat Belts, Airbags, and Child Safety Seats">
                            <BulletList items={[
                                <><strong>Seat Belts:</strong> Under Virginia law, the driver and all front-seat passengers must wear safety belts. Passengers under 18 must be belted regardless of where they sit.</>,
                                <><strong>Child Safety:</strong> Children under <strong>8 years old</strong> must be in an approved child set seat or booster seat.</>,
                                <><strong>Rear-Facing:</strong> Infants must ride in rear-facing seats until age 2 or until they reach the minimum weight limit for forward-facing.</>
                            ]} />
                        </SectionCard>

                        {/* ===== Section 5: Penalties & Alcohol ===== */}
                        <SectionCard id="section-5" number={5} title="Penalties">
                            <SubHeading>Alcohol and the Law</SubHeading>
                            <BulletList items={[
                                <><strong>DUI Threshold:</strong> 0.08% BAC for adults 21+. <strong>0.02%</strong> (Zero Tolerance) for those under 21.</>,
                                <><strong>Implied Consent:</strong> By driving in VA, you agree to take a breath/blood test if suspected of DUI. Refusal leads to immediate license suspension.</>,
                                <><strong>Administrative License Suspension (ALS):</strong> If you fail or refuse the test, your license is suspended immediately for at least 7 days.</>
                            ]} />
                        </SectionCard>

                        {/* ===== Section 6: License Types ===== */}
                        <SectionCard id="section-6" number={6} title="License Types">
                            <BulletList items={[
                                <><strong>Learner’s Permit:</strong> Must be at least 15 years and 6 months old.</>,
                                <><strong>Driver’s License:</strong> Available at age 16 and 3 months if you've held a permit for 9 months and completed driver ed.</>,
                                <><strong>Address Changes:</strong> You must notify the DMV within <strong>30 days</strong> of moving.</>
                            ]} />
                        </SectionCard>

                        {/* ===== Section 7: Other Information ===== */}
                        <SectionCard id="section-7" number={7} title="Other Important Information">
                            <BulletList items={[
                                <><strong>Insurance:</strong> You must have liability insurance or pay the $500 Uninsured Motorist Fee (note: this fee is being phased out/regulated, but still in the manual).</>,
                                <><strong>Safety Inspection:</strong> Vehicles must pass an annual safety inspection.</>,
                                <><strong>Title & Registration:</strong> Must be done within 30 days of moving to Virginia.</>
                            ]} />
                        </SectionCard>

                        {/* ===== Section 8: Sample Exam ===== */}
                        <SectionCard id="section-8" number={8} title="Sample Knowledge Exam">
                            <InfoBox>
                                <p className="text-sm">The actual test is computer-based. The first 10 questions are always signs—you must get 100% on signs before the computer lets you proceed to the general knowledge part.</p>
                            </InfoBox>
                        </SectionCard>"""

# Replace the content block. We look for the main content area in the template.
# In the template, it's usually inside <div className="space-y-10 md:space-y-12">
content = re.sub(
    r'<div className="space-y-10 md:space-y-12">.*?</div>\n\s*?</div>\n\s*?</main>',
    f'<div className="space-y-10 md:space-y-12">{new_sections_content}</div>\n                </div>\n            </main>',
    content,
    flags=re.DOTALL
)

# Fix export name
content = content.replace('export function UtahHandbookSummary', 'export function VirginiaHandbookSummary')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"Created/Updated {file_path}")
"""

content = re.sub(r'const sections = \[.*?\];', sections_array, content, flags=re.DOTALL)
"""

# Helper to fix the component name in the file
content = content.replace('UtahHandbookSummary', 'VirginiaHandbookSummary')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
