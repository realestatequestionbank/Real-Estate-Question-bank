const fs = require('fs');
const path = require('path');

// State configurations
const states = [
  { key: 'alabama', name: 'Alabama', code: 'AL', dept: 'dmv', exportName: 'alabamaStateData' },
  { key: 'alaska', name: 'Alaska', code: 'AK', dept: 'dmv', exportName: 'alaskaStateData' },
  { key: 'arizona', name: 'Arizona', code: 'AZ', dept: 'mvd', exportName: 'arizonaStateData' },
  { key: 'arkansas', name: 'Arkansas', code: 'AR', dept: 'dfa', exportName: 'arkansasStateData' },
  { key: 'colorado', name: 'Colorado', code: 'CO', dept: 'dmv', exportName: 'coloradoStateData' },
  { key: 'connecticut', name: 'Connecticut', code: 'CT', dept: 'dmv', exportName: 'connecticutStateData' },
  { key: 'delaware', name: 'Delaware', code: 'DE', dept: 'dmv', exportName: 'delawareStateData' },
  { key: 'hawaii', name: 'Hawaii', code: 'HI', dept: 'dmv', exportName: 'hawaiiStateData' },
  { key: 'idaho', name: 'Idaho', code: 'ID', dept: 'dmv', exportName: 'idahoStateData' },
  { key: 'illinois', name: 'Illinois', code: 'IL', dept: 'sos', exportName: 'illinoisStateData' },
  { key: 'indiana', name: 'Indiana', code: 'IN', dept: 'bmv', exportName: 'indianaStateData' },
  { key: 'iowa', name: 'Iowa', code: 'IA', dept: 'dot', exportName: 'iowaStateData' },
  { key: 'kansas', name: 'Kansas', code: 'KS', dept: 'dmv', exportName: 'kansasStateData' },
  { key: 'kentucky', name: 'Kentucky', code: 'KY', dept: 'dmv', exportName: 'kentuckyStateData' },
  { key: 'louisiana', name: 'Louisiana', code: 'LA', dept: 'omv', exportName: 'louisianaStateData' },
  { key: 'maine', name: 'Maine', code: 'ME', dept: 'bmv', exportName: 'maineStateData' },
  { key: 'maryland', name: 'Maryland', code: 'MD', dept: 'mva', exportName: 'marylandStateData' },
  { key: 'massachusetts', name: 'Massachusetts', code: 'MA', dept: 'rmv', exportName: 'massachusettsStateData' },
  { key: 'michigan', name: 'Michigan', code: 'MI', dept: 'sos', exportName: 'michiganStateData' },
  { key: 'minnesota', name: 'Minnesota', code: 'MN', dept: 'dvs', exportName: 'minnesotaStateData' },
  { key: 'mississippi', name: 'Mississippi', code: 'MS', dept: 'dps', exportName: 'mississippiStateData' },
  { key: 'missouri', name: 'Missouri', code: 'MO', dept: 'dor', exportName: 'missouriStateData' },
  { key: 'montana', name: 'Montana', code: 'MT', dept: 'mvd', exportName: 'montanaStateData' },
  { key: 'nebraska', name: 'Nebraska', code: 'NE', dept: 'dmv', exportName: 'nebraskaStateData' },
  { key: 'nevada', name: 'Nevada', code: 'NV', dept: 'dmv', exportName: 'nevadaStateData' },
  { key: 'new-hampshire', name: 'New Hampshire', code: 'NH', dept: 'dmv', exportName: 'newhampshireStateData' },
  { key: 'new-jersey', name: 'New Jersey', code: 'NJ', dept: 'mvc', exportName: 'newjerseyStateData' },
  { key: 'new-mexico', name: 'New Mexico', code: 'NM', dept: 'mvd', exportName: 'newmexicoStateData' },
  { key: 'north-dakota', name: 'North Dakota', code: 'ND', dept: 'dot', exportName: 'northdakotaStateData' },
  { key: 'ohio', name: 'Ohio', code: 'OH', dept: 'bmv', exportName: 'ohioStateData' },
  { key: 'oklahoma', name: 'Oklahoma', code: 'OK', dept: 'dps', exportName: 'oklahomaStateData' },
  { key: 'oregon', name: 'Oregon', code: 'OR', dept: 'dmv', exportName: 'oregonStateData' },
  { key: 'pennsylvania', name: 'Pennsylvania', code: 'PA', dept: 'penndot', exportName: 'pennsylvaniaStateData' },
  { key: 'rhode-island', name: 'Rhode Island', code: 'RI', dept: 'dmv', exportName: 'rhodeislandStateData' },
  { key: 'south-carolina', name: 'South Carolina', code: 'SC', dept: 'dmv', exportName: 'southcarolinaStateData' },
  { key: 'south-dakota', name: 'South Dakota', code: 'SD', dept: 'dps', exportName: 'southdakotaStateData' },
  { key: 'tennessee', name: 'Tennessee', code: 'TN', dept: 'dos', exportName: 'tennesseeStateData' },
  { key: 'utah', name: 'Utah', code: 'UT', dept: 'dmv', exportName: 'utahStateData' },
  { key: 'vermont', name: 'Vermont', code: 'VT', dept: 'dmv', exportName: 'vermontStateData' },
  { key: 'virginia', name: 'Virginia', code: 'VA', dept: 'dmv', exportName: 'virginiaStateData' },
  { key: 'west-virginia', name: 'West Virginia', code: 'WV', dept: 'dmv', exportName: 'westvirginiaStateData' },
  { key: 'wisconsin', name: 'Wisconsin', code: 'WI', dept: 'dot', exportName: 'wisconsinStateData' },
  { key: 'wyoming', name: 'Wyoming', code: 'WY', dept: 'dot', exportName: 'wyomingStateData' },
];

function toPascalCase(str) {
  return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
}

function generatePageContent(state) {
  const pascalName = toPascalCase(state.key);
  const folderSlug = `${state.key}-${state.dept}-permit-test`;

  return `import { Metadata } from 'next'
import { AuthProvider } from '@/contexts/auth-context'
import Script from 'next/script'
import { StateLandingPage } from '@/components/state-landing-page'
import { generateStatePageDataSync } from '@/components/state-landing-page/generate-state-data'
import {
  generateStateMetadata,
  generateFaqSchema,
  generateProductSchema,
  generateOrganizationSchema,
  generateBreadcrumbSchema,
  generateWebPageSchema,
} from '@/components/state-landing-page/generate-metadata'
import { ${state.exportName} } from '@/lib/states/${state.key}'

// State configuration
const STATE_KEY = '${state.key}' as const
const STATE_NAME = '${state.name}'
const STATE_CODE = '${state.code}'

// Generate page data using the helper
const pageData = generateStatePageDataSync(STATE_KEY, ${state.exportName})

// Generate metadata
export const metadata: Metadata = generateStateMetadata({
  stateKey: STATE_KEY,
  stateName: STATE_NAME,
  stateCode: STATE_CODE,
  seo: ${state.exportName}.seo,
  pricing: ${state.exportName}.pricing,
  faq: ${state.exportName}.faq,
  lastUpdated: ${state.exportName}.lastUpdated,
})

// Generate structured data schemas
const faqSchema = generateFaqSchema(${state.exportName}.faq)
const productSchema = generateProductSchema({
  stateKey: STATE_KEY,
  stateName: STATE_NAME,
  stateCode: STATE_CODE,
  seo: ${state.exportName}.seo,
  pricing: ${state.exportName}.pricing,
  faq: ${state.exportName}.faq,
  lastUpdated: ${state.exportName}.lastUpdated,
})
const organizationSchema = generateOrganizationSchema()
const breadcrumbSchema = generateBreadcrumbSchema({
  stateKey: STATE_KEY,
  stateName: STATE_NAME,
  stateCode: STATE_CODE,
  seo: ${state.exportName}.seo,
  pricing: ${state.exportName}.pricing,
  faq: ${state.exportName}.faq,
  lastUpdated: ${state.exportName}.lastUpdated,
})
const webPageSchema = generateWebPageSchema({
  stateKey: STATE_KEY,
  stateName: STATE_NAME,
  stateCode: STATE_CODE,
  seo: ${state.exportName}.seo,
  pricing: ${state.exportName}.pricing,
  faq: ${state.exportName}.faq,
  lastUpdated: ${state.exportName}.lastUpdated,
})

export default function ${pascalName}PermitTestPage() {
  return (
    <>
      {/* Structured Data for SEO */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <AuthProvider>
        <StateLandingPage pageData={pageData} />
      </AuthProvider>
    </>
  )
}
`;
}

// Generate all state pages
const appDir = path.join(__dirname, '..', 'app');

states.forEach(state => {
  const folderSlug = `${state.key}-${state.dept}-permit-test`;
  const folderPath = path.join(appDir, folderSlug);
  const filePath = path.join(folderPath, 'page.tsx');

  // Create folder if it doesn't exist
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  // Write page file
  const content = generatePageContent(state);
  fs.writeFileSync(filePath, content);

  console.log(`Created: ${folderSlug}/page.tsx`);
});

console.log(`\nCreated ${states.length} state pages.`);

// Output the routing config for other files
console.log('\n--- State routing config ---');
states.forEach(state => {
  const folderSlug = `${state.key}-${state.dept}-permit-test`;
  console.log(`'${state.key}': '/${folderSlug}',`);
});
