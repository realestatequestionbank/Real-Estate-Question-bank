import re

file_path = 'components/handbook/ohio-handbook-summary.tsx'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

sections_array = """const SECTIONS = [
    { id: 'section-1', label: '1. Get Your License' },
    { id: 'section-2', label: '2. Before You Drive' },
    { id: 'section-3', label: '3. Be Alert' },
    { id: 'section-4', label: '4. Rules of the Road' },
    { id: 'section-5', label: '5. Learning to Drive' },
    { id: 'section-6', label: '6. Laws & Penalties' },
    { id: 'section-7', label: '7. Special Situations' },
    { id: 'section-8', label: '8. Safe Driving Tips' },
    { id: 'section-9', label: '9. Sharing the Road' },
    { id: 'section-10', label: '10. Emergency Situations' },
    { id: 'section-11', label: '11. The Driving Test' },
    { id: 'section-12', label: '12. Purchase License' },
    { id: 'section-13', label: '13. What Else to Know' },
];"""

content = re.sub(r'const SECTIONS = \[.*?\];', sections_array, content, flags=re.DOTALL)

section_cards = """
                        {/* ===== Section 1: How to Get Your Driver License ===== */}
                        <SectionCard id="section-1" number={1} title="How to Get Your Driver License">
                            <p>Content goes here.</p>
                        </SectionCard>

                        {/* ===== Section 2: Before You Drive ===== */}
                        <SectionCard id="section-2" number={2} title="Before You Drive">
                            <p>Content goes here.</p>
                        </SectionCard>

                        {/* ===== Section 3: Be Alert ===== */}
                        <SectionCard id="section-3" number={3} title="Be Alert">
                            <p>Content goes here.</p>
                        </SectionCard>

                        {/* ===== Section 4: Rules of the Road ===== */}
                        <SectionCard id="section-4" number={4} title="Rules of the Road">
                            <p>Content goes here.</p>
                        </SectionCard>

                        {/* ===== Section 5: Learning to Drive ===== */}
                        <SectionCard id="section-5" number={5} title="Learning to Drive">
                            <p>Content goes here.</p>
                        </SectionCard>

                        {/* ===== Section 6: State Laws and Penalties ===== */}
                        <SectionCard id="section-6" number={6} title="State Laws and Penalties">
                            <p>Content goes here.</p>
                        </SectionCard>

                        {/* ===== Section 7: Special Driving Situations ===== */}
                        <SectionCard id="section-7" number={7} title="Special Driving Situations">
                            <p>Content goes here.</p>
                        </SectionCard>

                        {/* ===== Section 8: Safe Driving Tips ===== */}
                        <SectionCard id="section-8" number={8} title="Safe Driving Tips">
                            <p>Content goes here.</p>
                        </SectionCard>

                        {/* ===== Section 9: Sharing the Road ===== */}
                        <SectionCard id="section-9" number={9} title="Sharing the Road">
                            <p>Content goes here.</p>
                        </SectionCard>

                        {/* ===== Section 10: Emergency Situations ===== */}
                        <SectionCard id="section-10" number={10} title="Emergency Situations">
                            <p>Content goes here.</p>
                        </SectionCard>

                        {/* ===== Section 11: Taking the Driving Test ===== */}
                        <SectionCard id="section-11" number={11} title="Taking the Driving Test">
                            <p>Content goes here.</p>
                        </SectionCard>

                        {/* ===== Section 12: Purchase Your Driver License ===== */}
                        <SectionCard id="section-12" number={12} title="Purchase Your Driver License">
                            <p>Content goes here.</p>
                        </SectionCard>

                        {/* ===== Section 13: What Else Should I Know? ===== */}
                        <SectionCard id="section-13" number={13} title="What Else Should I Know?">
                            <p>Content goes here.</p>
                        </SectionCard>
"""

# Replace all the SectionCards
content = re.sub(r'\{/\* ===== Section 1:.*?</SectionCard>', section_cards, content, flags=re.DOTALL)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated sections successfully.")
