const fs = require('fs');
const file = '/Users/radhikabiyani/Projects/DMV_Question_Bank/web/app/california-dmv-permit-test/california-dmv-test-practice-static.tsx';
let content = fs.readFileSync(file, 'utf8');

const startIdx = content.indexOf('{/* 8. Premium Features & Pricing + Social Proof */}');
const endMarker = '</section>';
const endIdx = content.indexOf(endMarker, content.indexOf('onClick={() => setShowVideoModal(true)}')) + endMarker.length;

const replacement = `
        {/* 8. Premium Features & Pricing + Social Proof */}
        <StatePremiumPricing
          stateName={stateInfo.name}
          formattedQuestionCount={formattedQuestionCount}
          pricingPlans={pricingPlans}
          handleUpgradePremium={handleUpgradePremium}
          setShowVideoModal={setShowVideoModal}
        />
`;

content = content.slice(0, startIdx) + replacement + content.slice(endIdx);
content = content.replace("import { StateSelectorModal } from '@/components/state-selector-modal'", "import { StateSelectorModal } from '@/components/state-selector-modal'\nimport { StatePremiumPricing } from '@/components/premium/state-premium-pricing'");

// Remove the unused refs and state if we want, but let's just leave selectedDuration and the refs so we don't break handleAuthSuccess unnecessarily, or we can just replace 'selectedDuration' with '30' in handleAuthSuccess.
content = content.replace('await createCheckoutSession(result.user.uid, selectedDuration)', 'await createCheckoutSession(result.user.uid, 30)');

fs.writeFileSync(file, content);
console.log("Refactored CA page successfully");
