import os

with open('components/handbook/handbook-summary.tsx', 'r') as f:
    content = f.read()

# Basic replacements
content = content.replace('Summary of {stateName} ({STATES[stateKey as StateKey]?.code}) DMV Handbook 2026', 'Summary of New York (NY) DMV Handbook 2026')
content = content.replace('official {currentYear} {stateName} Driver Handbook', 'official {currentYear} New York Driver Handbook')
content = content.replace('the {stateName} DMV actually tests you on', 'the New York DMV actually tests you on')
content = content.replace('src="/handbook-summary/california/california-handbook-image.png"', 'src="/handbook-summary/new-york/new-york-handbook-image.png"')
content = content.replace('alt={`${stateName} DMV Driver Handbook ${currentYear}`}', 'alt="New York DMV Driver Handbook 2026"')
content = content.replace('interface HandbookSummaryProps {\\n    stateKey: string;\\n    stateName: string;\\n}\\n', '')
content = content.replace('export function HandbookSummary({ stateKey, stateName }: HandbookSummaryProps) {', 'export function NewYorkHandbookSummary() {\\n    const stateKey = "new-york";\\n    const stateName = "New York";\\n    const departmentName = "DMV";')
content = content.replace('href={`/${stateKey}-dmv-permit-test`}', 'href={`/new-york-dmv-permit-test`}')
content = content.replace('href={`/handbooks/${stateKey}`}', 'href={`/handbooks/new-york`}')

with open('components/handbook/new-york-handbook-summary.tsx', 'w') as f:
    f.write(content)

print("Generated new-york-handbook-summary.tsx")
