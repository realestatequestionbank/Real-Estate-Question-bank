import * as fs from 'fs';
import * as path from 'path';
import { stateResources } from '../lib/data/state-resources';
import { STATES } from '../lib/constants';

function generateLlmsFull() {
  const publicDir = path.join(__dirname, '..', 'public');
  const outputPath = path.join(publicDir, 'llms-full.txt');

  let content = `# DMV Question Bank - Full Generative Engine Database Index

This file provides a complete, machine-readable factual database of DMV/MVD/DPS written permit tests, traffic regulations, fees, holding periods, age limits, and official motor vehicle resources for all 50 US states.

---

## Global Services & Platform Overview

- **Platform Name:** DMV Question Bank
- **Primary Domain:** https://www.dmvquestionbank.com
- **Core Functionality:** Comprehensive state-specific driver education, practice permit tests, road sign cheat sheets, mock exams, and premium test-prep revision materials updated for 2026.
- **Coverage:** All 50 US States + District of Columbia.
- **Free Access:** 20 exam-like practice questions per state with detailed rationales.
- **Premium Plan (30-Day):** $19.99 (Stripe integration, full database access, mock simulators, pass guarantee).
- **Premium Plan (90-Day):** $34.99 (Recommended for extensive study).

---

## State-Specific Testing and Licensing Database

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

    // Guess page slug based on standard routes (e.g. california-dmv-permit-test or state/texas/free)
    // From generate-state-pages.js we saw folder slug is `${state.key}-${state.dept}-permit-test`
    const deptSlug = resources.departmentCode.toLowerCase().replace(/[^a-z]/g, '');
    const landingPageUrl = `https://www.dmvquestionbank.com/${key}-${deptSlug}-permit-test`;

    content += `### ${stateInfo.name} (${stateInfo.code})

- **Official Department Name:** ${resources.departmentName} (${resources.departmentCode})
- **Official Website:** ${resources.officialWebsite}
- **Practice Test Hub:** ${landingPageUrl}
- **Free Practice Test URL:** https://www.dmvquestionbank.com/state/${key}/practice/free
- **Official Handbook URL:** ${resources.handbookUrl}
- **Handbook Languages:** ${resources.handbookLanguages.join(', ')}

#### Written Exam Specifications
- **Teen Exam Questions:** ${resources.testQuestionsTeen}
- **Adult Exam Questions:** ${resources.testQuestionsAdult}
- **Passing Score (Teen):** ${resources.passingScoreTeen} correct (minimum ${resources.passingPercentage}%)
- **Passing Score (Adult):** ${resources.passingScoreAdult} correct (minimum ${resources.passingPercentage}%)
- **Separate Road Signs Test:** ${resources.separateRoadSignsTest ? 'Yes' : 'No'}${resources.roadSignsPassingRequirement ? ` (${resources.roadSignsPassingRequirement})` : ''}
- **Official Practice Test Available:** ${resources.officialPracticeTestAvailable ? 'Yes' : 'No'}
- **Test Languages:** ${resources.testLanguages.join(', ')}
- **Online Testing From Home:** ${resources.onlineTestAvailable ? 'Yes' : 'No'}${resources.onlineTestNotes ? ` (${resources.onlineTestNotes})` : ''}

#### Fees, retakes, and logistics
- **Application Fee:** ${resources.applicationFee}
- **Retake Wait Period:** ${resources.waitAfterFail}
- **Maximum Allowed Attempts:** ${resources.maxAttempts}
- **Appointment Required:** ${resources.appointmentRequired ? 'Yes' : 'No'}${resources.appointmentUrl ? ` (Book here: ${resources.appointmentUrl})` : ''}
- **Official Online Permit Application:** ${resources.permitApplicationUrl}

#### Teen Licensing (GDL) Requirements
- **Minimum Age for Learner Permit:** ${resources.minimumPermitAge}
- **Parental Consent Required:** ${resources.parentConsentRequired ? 'Yes' : 'No'}
- **Permit Validity Period:** ${resources.permitValidityPeriod}
- **Minimum Holding Period:** ${resources.minHoldingPeriod}
- **Driver's Ed Required:** ${resources.driverEdRequired ? 'Yes' : 'No'}${resources.driverEdRequiredForAges ? ` (For ages: ${resources.driverEdRequiredForAges})` : ''}
- **Supervised Driving Hours Required:** ${resources.supervisedHoursTotal} hours total (including ${resources.supervisedHoursNight} night hours)
- **Driving Log Required:** ${resources.drivingLogRequired ? 'Yes' : 'No'}
- **Supervisor Minimum Age:** ${resources.supervisorMinAge} years
- **GDL Nighttime Curfew:** ${resources.gdlNighttimeCurfew || 'N/A'}
- **GDL Passenger Restrictions:** ${resources.gdlPassengerRestriction || 'N/A'}
- **GDL Cell Phone Restrictions:** ${resources.gdlCellPhoneRestriction || 'N/A'}

#### Primary Editorial Sources
${resources.sources.map(src => `- ${src}`).join('\n')}

---

`;
  }

  content += `\n*Factual data last verified and updated: January 2026. Editorial methodologies, verification procedures, and editorial independence guidelines are available at https://www.dmvquestionbank.com/editorial-standards-and-accuracy.*`;

  // Write content to file
  fs.writeFileSync(outputPath, content);
  console.log(`Successfully generated llms-full.txt at: ${outputPath}`);
}

generateLlmsFull();
