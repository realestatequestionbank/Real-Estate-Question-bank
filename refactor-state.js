const fs = require('fs');
const file = '/Users/radhikabiyani/Projects/DMV_Question_Bank/web/components/state-permit-test/StatePermitTestContent.tsx';
let content = fs.readFileSync(file, 'utf8');

const importReplacement = `import { StatePremiumPricing } from '@/components/premium/state-premium-pricing'
import { PRICING } from '@/lib/constants'`;

if (!content.includes('StatePremiumPricing')) {
    content = content.replace("import { Crown, Star, Shield", importReplacement + "\nimport { Crown, Star, Shield");
}

// Add handleUpgradePremium if not present
const handleUpgrade = `
    const handleUpgradePremium = (duration: number) => {
        router.push('/get-premium?plan=' + duration)
    }
`;
if (!content.includes('handleUpgradePremium')) {
    content = content.replace('const scrollToTest = () => {', handleUpgrade + '\n    const scrollToTest = () => {');
}

// Add pricingPlans computation
const pricingCalc = `
    const calcDiscount = (original: number, discounted: number) => Math.round(((original - discounted) / original) * 100);
    const pricingPlans = {
      sevenDay: {
        duration: 7,
        title: '7-Day Plan',
        badge: \`\${calcDiscount(PRICING.PLANS.SEVEN_DAY.originalPrice, PRICING.PLANS.SEVEN_DAY.discountedPrice)}% OFF\`,
        originalPrice: \`$\${PRICING.PLANS.SEVEN_DAY.originalPrice}\`,
        discountedPrice: \`$\${PRICING.PLANS.SEVEN_DAY.discountedPrice}\`,
        stripePriceId: PRICING.PLANS.SEVEN_DAY.stripePriceId,
      },
      thirtyDay: {
        duration: 30,
        title: '30-Day Plan',
        badge: \`\${calcDiscount(PRICING.PLANS.THIRTY_DAY.originalPrice, PRICING.PLANS.THIRTY_DAY.discountedPrice)}% OFF\`,
        originalPrice: \`$\${PRICING.PLANS.THIRTY_DAY.originalPrice}\`,
        discountedPrice: \`$\${PRICING.PLANS.THIRTY_DAY.discountedPrice}\`,
        stripePriceId: PRICING.PLANS.THIRTY_DAY.stripePriceId,
        isPopular: true,
      },
      ninetyDay: {
        duration: 90,
        title: '90-Day Plan',
        badge: \`\${calcDiscount(PRICING.PLANS.NINETY_DAY.originalPrice, PRICING.PLANS.NINETY_DAY.discountedPrice)}% OFF\`,
        originalPrice: \`$\${PRICING.PLANS.NINETY_DAY.originalPrice}\`,
        discountedPrice: \`$\${PRICING.PLANS.NINETY_DAY.discountedPrice}\`,
        stripePriceId: PRICING.PLANS.NINETY_DAY.stripePriceId,
      },
    };
`;
if (!content.includes('calcDiscount')) {
    content = content.replace('const questionCountNote =', pricingCalc + '\n    const questionCountNote =');
}

// Replace the existing banner
const startBanner = '{/* Premium Banner Upsell */}';
const endBanner = '</section>';

const startIdx = content.indexOf(startBanner);
if (startIdx !== -1) {
    let searchIdx = startIdx + startBanner.length;
    // We expect two </section> tags if we include the !isPremium wrapper
    // Actually the block is:
    // {/* Premium Banner Upsell */}
    // {!isPremium && (
    //     <section ...> ... </section>
    // )}
    
    // So the end is `)}` after `</section>`
    const sectionEndIdx = content.indexOf(endBanner, searchIdx);
    const endBlockIdx = content.indexOf(')}', sectionEndIdx) + 2;

    const replacement = `
                {/* Premium Banner Upsell */}
                {!isPremium && (
                    <StatePremiumPricing
                        stateName={config.stateName}
                        formattedQuestionCount="500+"
                        pricingPlans={pricingPlans}
                        handleUpgradePremium={handleUpgradePremium}
                        // Omit video modal as per standard page
                    />
                )}
`;
    content = content.slice(0, startIdx) + replacement + content.slice(endBlockIdx);
}

fs.writeFileSync(file, content);
console.log("Refactored StatePermitTestContent successfully");
