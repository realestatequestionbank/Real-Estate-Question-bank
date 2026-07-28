const STATES = {
  'alabama': { name: 'Alabama' },
  'alaska': { name: 'Alaska' },
  'arizona': { name: 'Arizona' },
  'arkansas': { name: 'Arkansas' },
  'california': { name: 'California' },
  'kansas': { name: 'Kansas' },
  'new-york': { name: 'New York' },
  'virginia': { name: 'Virginia' },
  'west-virginia': { name: 'West Virginia' }
};

const testCases = [
  { path: "/california-class-a-cdl-permit-test", expectedSlug: "california", expectedName: "California" },
  { path: "/california-cdl-permit-test", expectedSlug: "california", expectedName: "California" },
  { path: "/california-class-a-cdl-permit-test/punjabi", expectedSlug: "california", expectedName: "California" },
  { path: "/cdl-permit-test/california", expectedSlug: "california", expectedName: "California" },
  { path: "/cdl-permit-test/california/class-a", expectedSlug: "california", expectedName: "California" },
  { path: "/state-guides/california-cdl", expectedSlug: "california", expectedName: "California" },
  { path: "/handbooks/cdl/california", expectedSlug: "california", expectedName: "California" },
  
  // Edge cases for substring matching (kansas vs arkansas)
  { path: "/arkansas-class-a-cdl-permit-test", expectedSlug: "arkansas", expectedName: "Arkansas" },
  { path: "/kansas-class-a-cdl-permit-test", expectedSlug: "kansas", expectedName: "Kansas" },
  
  // Edge cases for substring matching (virginia vs west-virginia)
  { path: "/west-virginia-class-a-cdl-permit-test", expectedSlug: "west-virginia", expectedName: "West Virginia" },
  { path: "/virginia-class-a-cdl-permit-test", expectedSlug: "virginia", expectedName: "Virginia" },
  
  // Non-matching path
  { path: "/free-dmv-permit-test-pdf", expectedSlug: null, expectedName: null }
];

let failed = false;

for (const tc of testCases) {
  const cdlStateKey = tc.path ? Object.keys(STATES).find(key => {
    const regex = new RegExp(`(^|\\/)${key}(\\/|-|$)`)
    return regex.test(tc.path)
  }) : null;

  const cdlStateSlug = cdlStateKey || null;
  const cdlStateName = cdlStateKey ? STATES[cdlStateKey].name : null;

  if (cdlStateSlug !== tc.expectedSlug || cdlStateName !== tc.expectedName) {
    console.error(`FAIL: Path "${tc.path}": got slug="${cdlStateSlug}" (expected "${tc.expectedSlug}"), name="${cdlStateName}" (expected "${tc.expectedName}")`);
    failed = true;
  } else {
    console.log(`PASS: Path "${tc.path}" -> slug="${cdlStateSlug}", name="${cdlStateName}"`);
  }
}

if (failed) {
  process.exit(1);
} else {
  console.log("All tests passed successfully!");
}
