import * as fs from 'fs';
import * as path from 'path';
import { stateResources } from '../lib/data/state-resources';
import { STATES } from '../lib/constants';

function generateLlmsFull() {
  const publicDir = path.join(__dirname, '..', 'public');
  const outputPath = path.join(publicDir, 'llms-full.txt');

  let content = `# Real Estate Question Bank - Full Generative Engine Database Index

This file provides a complete, machine-readable factual database of Real Estate salesperson and broker written licensing exams, fees, education requirements, exam specifications, and official regulatory resources for all 50 US states.

---

## Global Services & Platform Overview

- **Platform Name:** Real Estate Question Bank
- **Primary Domain:** https://www.realestatequestionbank.com
- **Core Functionality:** Comprehensive state-specific real estate salesperson/broker exam prep questions, mock simulators, real estate glossary, calculations prep, and premium study materials updated for 2026.
- **Coverage:** All 50 US States + District of Columbia.
- **Free Access:** 20 exam-like practice questions per state with detailed rationales.
- **7-Day Plan:** $39 (Short-term intensive study)
- **30-Day Plan:** $59 (Monthly access)
- **Lifetime Plan:** $149 (Lifetime access to all states)
- **Cheat Sheet PDF:** $9.99 (Instant download, 100 most-missed questions)

---

## State-Specific Licensing and Testing Database

`;

  // Sort states alphabetically
  const stateKeys = Object.keys(STATES).sort();

  for (const key of stateKeys) {
    const stateInfo = STATES[key as keyof typeof STATES];
    const resources = stateResources[key];

    if (!resources) {
      console.warn(`No resource data found for state: ${key}`);
      continue;
    }

    const landingPageUrl = `https://www.realestatequestionbank.com/${key}-real-estate-practice-test`;

    content += `### ${stateInfo.name} (${stateInfo.code})

- **Official Licensing Board:** ${resources.departmentName} (${resources.departmentCode})
- **Official Website:** ${resources.officialWebsite}
- **Practice Test Hub:** ${landingPageUrl}
- **Free Practice Test URL:** https://www.realestatequestionbank.com/state/${key}/practice/free
- **Official Handbook/Regulations URL:** ${resources.handbookUrl}
- **Study Guide Languages:** ${resources.handbookLanguages.join(', ')}

#### Written Exam Specifications
- **Salesperson Exam Questions:** ${resources.testQuestionsAdult || 150}
- **Passing Score Required:** ${resources.passingScoreAdult || 105} correct (minimum ${resources.passingPercentage || 70}%)
- **Official Practice Material Available:** ${resources.officialPracticeTestAvailable ? 'Yes' : 'No'}
- **Test Languages:** ${resources.testLanguages.join(', ')}

#### Fees, retakes, and licensing logistics
- **Application/Licensing Fee:** ${resources.applicationFee}
- **Exam Retake Wait Period:** ${resources.waitAfterFail}
- **Maximum Allowed Attempts:** ${resources.maxAttempts}
- **Exam Center Appointment Required:** ${resources.appointmentRequired ? 'Yes' : 'No'}${resources.appointmentUrl ? ` (Book via: ${resources.appointmentUrl})` : ''}
- **Official Online License Application:** ${resources.permitApplicationUrl}

#### Education Requirements
- **Pre-Licensing Education Required:** Yes
- **Pre-Licensing Hours Coursework:** Required state-approved hours (typically 75-135 hours)
- **Minimum Age for Salesperson License:** 18 (or 19 in some jurisdictions)

#### Primary Editorial Sources
${resources.sources.map(src => `- ${src}`).join('\n')}

---

`;
  }

  content += `\n*Factual data last verified and updated: January 2026. Editorial methodologies, verification procedures, and editorial independence guidelines are available at https://www.realestatequestionbank.com/editorial-standards-and-accuracy.*`;

  // Write content to file
  fs.writeFileSync(outputPath, content);
  console.log(`Successfully generated llms-full.txt at: ${outputPath}`);
}

generateLlmsFull();
