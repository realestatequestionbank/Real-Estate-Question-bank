const fs = require('fs');
const path = require('path');

const STATES = {
  'alabama': { name: 'Alabama', code: 'AL' },
  'alaska': { name: 'Alaska', code: 'AK' },
  'arizona': { name: 'Arizona', code: 'AZ' },
  'arkansas': { name: 'Arkansas', code: 'AR' },
  'california': { name: 'California', code: 'CA' },
  'colorado': { name: 'Colorado', code: 'CO' },
  'connecticut': { name: 'Connecticut', code: 'CT' },
  'delaware': { name: 'Delaware', code: 'DE' },
  'florida': { name: 'Florida', code: 'FL' },
  'georgia': { name: 'Georgia', code: 'GA' },
  'hawaii': { name: 'Hawaii', code: 'HI' },
  'idaho': { name: 'Idaho', code: 'ID' },
  'illinois': { name: 'Illinois', code: 'IL' },
  'indiana': { name: 'Indiana', code: 'IN' },
  'iowa': { name: 'Iowa', code: 'IA' },
  'kansas': { name: 'Kansas', code: 'KS' },
  'kentucky': { name: 'Kentucky', code: 'KY' },
  'louisiana': { name: 'Louisiana', code: 'LA' },
  'maine': { name: 'Maine', code: 'ME' },
  'maryland': { name: 'Maryland', code: 'MD' },
  'massachusetts': { name: 'Massachusetts', code: 'MA' },
  'michigan': { name: 'Michigan', code: 'MI' },
  'minnesota': { name: 'Minnesota', code: 'MN' },
  'mississippi': { name: 'Mississippi', code: 'MS' },
  'missouri': { name: 'Missouri', code: 'MO' },
  'montana': { name: 'Montana', code: 'MT' },
  'nebraska': { name: 'Nebraska', code: 'NE' },
  'nevada': { name: 'Nevada', code: 'NV' },
  'new-hampshire': { name: 'New Hampshire', code: 'NH' },
  'new-jersey': { name: 'New Jersey', code: 'NJ' },
  'new-mexico': { name: 'New Mexico', code: 'NM' },
  'new-york': { name: 'New York', code: 'NY' },
  'north-carolina': { name: 'North Carolina', code: 'NC' },
  'north-dakota': { name: 'North Dakota', code: 'ND' },
  'ohio': { name: 'Ohio', code: 'OH' },
  'oklahoma': { name: 'Oklahoma', code: 'OK' },
  'oregon': { name: 'Oregon', code: 'OR' },
  'pennsylvania': { name: 'Pennsylvania', code: 'PA' },
  'rhode-island': { name: 'Rhode Island', code: 'RI' },
  'south-carolina': { name: 'South Carolina', code: 'SC' },
  'south-dakota': { name: 'South Dakota', code: 'SD' },
  'tennessee': { name: 'Tennessee', code: 'TN' },
  'texas': { name: 'Texas', code: 'TX' },
  'utah': { name: 'Utah', code: 'UT' },
  'vermont': { name: 'Vermont', code: 'VT' },
  'virginia': { name: 'Virginia', code: 'VA' },
  'washington': { name: 'Washington', code: 'WA' },
  'west-virginia': { name: 'West Virginia', code: 'WV' },
  'wisconsin': { name: 'Wisconsin', code: 'WI' },
  'wyoming': { name: 'Wyoming', code: 'WY' }
};

const outputDir = path.join(__dirname, '..', 'public', 'pdf');
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

function formatStateName(name) {
    return name
        .split(/\s+|-/)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join('_');
}

async function downloadFile(url, dest) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const buffer = await response.arrayBuffer();
    fs.writeFileSync(dest, Buffer.from(buffer));
}

async function main() {
    console.log(`Starting CDL Handbooks download for ${Object.keys(STATES).length} states...`);
    
    for (const [key, state] of Object.entries(STATES)) {
        const stateCodeLower = state.code.toLowerCase();
        const formattedName = formatStateName(state.name);
        const fileName = `${formattedName}_CDL_Handbook_2026.pdf`;
        const destPath = path.join(outputDir, fileName);
        
        // Skip California if it already exists and has non-zero size
        if (key === 'california' && fs.existsSync(destPath) && fs.statSync(destPath).size > 0) {
            console.log(`- California CDL Handbook already exists, skipping.`);
            continue;
        }

        const url = `https://files.driving-tests.org/premium/pdf/handbook/CDL/${stateCodeLower}.cdl.en.pdf`;
        console.log(`Downloading ${state.name} CDL Handbook...`);
        try {
            await downloadFile(url, destPath);
            console.log(`✅ Saved ${fileName} (${fs.statSync(destPath).size} bytes)`);
        } catch (err) {
            console.error(`❌ Failed to download ${state.name} CDL Handbook:`, err.message);
        }
        
        // Politeness delay
        await new Promise(resolve => setTimeout(resolve, 500));
    }
    console.log("All downloads complete!");
}

main();
