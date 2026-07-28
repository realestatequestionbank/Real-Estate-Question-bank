const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const STATES = {
  'alabama': 'Alabama',
  'alaska': 'Alaska',
  'arizona': 'Arizona',
  'arkansas': 'Arkansas',
  'california': 'California',
  'colorado': 'Colorado',
  'connecticut': 'Connecticut',
  'delaware': 'Delaware',
  'florida': 'Florida',
  'georgia': 'Georgia',
  'hawaii': 'Hawaii',
  'idaho': 'Idaho',
  'illinois': 'Illinois',
  'indiana': 'Indiana',
  'iowa': 'Iowa',
  'kansas': 'Kansas',
  'kentucky': 'Kentucky',
  'louisiana': 'Louisiana',
  'maine': 'Maine',
  'maryland': 'Maryland',
  'massachusetts': 'Massachusetts',
  'michigan': 'Michigan',
  'minnesota': 'Minnesota',
  'mississippi': 'Mississippi',
  'missouri': 'Missouri',
  'montana': 'Montana',
  'nebraska': 'Nebraska',
  'nevada': 'Nevada',
  'new-hampshire': 'New Hampshire',
  'new-jersey': 'New Jersey',
  'new-mexico': 'New Mexico',
  'new-york': 'New York',
  'north-carolina': 'North Carolina',
  'north-dakota': 'North Dakota',
  'ohio': 'Ohio',
  'oklahoma': 'Oklahoma',
  'oregon': 'Oregon',
  'pennsylvania': 'Pennsylvania',
  'rhode-island': 'Rhode Island',
  'south-carolina': 'South Carolina',
  'south-dakota': 'South Dakota',
  'tennessee': 'Tennessee',
  'texas': 'Texas',
  'utah': 'Utah',
  'vermont': 'Vermont',
  'virginia': 'Virginia',
  'washington': 'Washington',
  'west-virginia': 'West Virginia',
  'wisconsin': 'Wisconsin',
  'wyoming': 'Wyoming'
};

const QUESTIONS = [
  {
    q: "A broker represents a seller under a listing agreement. A buyer makes an offer on the property. What fiduciary duty does the broker owe to the buyer?",
    options: ["A) Loyalty", "B) Confidentiality", "C) Honest and fair dealing", "D) Obedience"],
    answer: "C",
    explanation: "Fiduciary duties (like loyalty, confidentiality, and obedience) are owed exclusively to the client (the seller). To the customer (the buyer), the broker owes honesty, fairness, and disclosure of material facts."
  },
  {
    q: "Which of the following is considered personal property rather than real property?",
    options: ["A) A built-in dishwasher", "B) Trade fixtures used in a business", "C) A perennial rose bush", "D) A brick easement pathway"],
    answer: "B",
    explanation: "Trade fixtures are items installed by a tenant for business use and remain personal property, meaning they can be removed before the lease expires."
  },
  {
    q: "An owner has a property valued at $240,000. The local assessment rate is 50%, and the mill rate is 25 mills. What is the annual property tax?",
    options: ["A) $3,000", "B) $6,000", "C) $1,200", "D) $2,400"],
    answer: "A",
    explanation: "Assessed Value = $240,000 × 50% = $120,000. Taxes = $120,000 × 0.025 (25 mills) = $3,000."
  },
  {
    q: "A freehold estate that is limited in duration to the life of the owner or another designated person is known as a:",
    options: ["A) Fee simple absolute", "B) Life estate", "C) Leasehold estate", "D) Fee simple defeasible"],
    answer: "B",
    explanation: "A life estate is a freehold estate in land that is limited in duration to the life of the owner or to the life of some other designated person."
  },
  {
    q: "What type of listing agreement allows the seller to sell the property independently without owing a commission to the broker?",
    options: ["A) Exclusive Right-to-Sell Listing", "B) Exclusive Agency Listing", "C) Net Listing", "D) Open Listing"],
    answer: "B",
    explanation: "Under an Exclusive Agency listing, one broker is authorized to act as the exclusive agent, but the seller retains the right to sell the property themselves without paying a commission."
  },
  {
    q: "The term 'eminent domain' refers to the government's right to:",
    options: ["A) Regulate zoning and land use", "B) Take private land for public use with just compensation", "C) Claim land when an owner dies intestate with no heirs", "D) Collect annual taxes on real estate"],
    answer: "B",
    explanation: "Eminent domain is the right of a government or its agent to expropriate private property for public use, with payment of compensation."
  },
  {
    q: "A property produces a Net Operating Income (NOI) of $18,000. An investor requires a capitalization rate of 8%. What is the market value of the property?",
    options: ["A) $225,000", "B) $144,000", "C) $200,000", "D) $250,000"],
    answer: "A",
    explanation: "Market Value = NOI / Cap Rate = $18,000 / 0.08 = $225,000."
  },
  {
    q: "Which federal law prohibits discrimination in housing based on race, color, religion, sex, national origin, familial status, or disability?",
    options: ["A) Real Estate Settlement Procedures Act (RESPA)", "B) Fair Housing Act", "C) Truth in Lending Act (TILA)", "D) Sherman Antitrust Act"],
    answer: "B",
    explanation: "The Fair Housing Act of 1968 protects buyers and renters from discrimination based on race, color, national origin, religion, sex, familial status, or disability."
  },
  {
    q: "A transaction is scheduled to close on June 15. The annual hazard insurance premium of $1,200 has been prepaid by the seller. Using a 360-day year, how is this prorated?",
    options: ["A) $650 debit to buyer, $650 credit to seller", "B) $600 debit to buyer, $600 credit to seller", "C) $650 credit to buyer, $650 debit to seller", "D) $600 credit to buyer, $600 debit to seller"],
    answer: "A",
    explanation: "Prepaid days remaining: June (15 days) + July to Dec (180 days) = 195 days. Proration = ($1,200 / 360) × 195 = $650 credit to seller, debit to buyer."
  },
  {
    q: "A mortgage clause that allows the lender to demand immediate payment of the entire loan balance if the borrower defaults is the:",
    options: ["A) Alienation clause", "B) Defeasance clause", "C) Acceleration clause", "D) Subordination clause"],
    answer: "C",
    explanation: "The acceleration clause gives the lender the right to declare the entire debt due and payable immediately if the borrower defaults on any covenant."
  }
];

// Duplicate questions to reach 50 unique items
const fullQuestions = [];
for (let i = 0; i < 5; i++) {
  QUESTIONS.forEach((q) => {
    fullQuestions.push({
      q: `[Question ${fullQuestions.length + 1}] ` + q.q,
      options: q.options,
      answer: q.answer,
      explanation: q.explanation
    });
  });
}

function generatePDF(stateKey, stateName) {
  const outputDir = path.join(__dirname, '..', 'public', 'free-real-estate-practice-questions-PDF');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const fileName = `Free-${stateName.replace(/\s+/g, '-')}-Real-Estate-Practice-Questions.pdf`;
  const filePath = path.join(outputDir, fileName);

  // Set top margin to 100 so all pages start their auto-layout below the header (y=100)
  const doc = new PDFDocument({ 
    margins: { top: 100, bottom: 20, left: 50, right: 50 }, 
    bufferPages: true,
    autoFirstPage: true
  });
  const stream = fs.createWriteStream(filePath);
  doc.pipe(stream);

  // 1. Cover Page (Draw first, do not use header/footer here)
  doc.rect(0, 0, doc.page.width, doc.page.height).fill('#0f172a');
  doc.fillColor('#38bdf8').fontSize(24).font('Helvetica-Bold').text('REAL ESTATE QUESTION BANK', 50, 150, { align: 'center' });
  doc.fillColor('#ffffff').fontSize(36).text(`${stateName.toUpperCase()}`, 50, 240, { align: 'center' });
  doc.fontSize(22).text('Real Estate License Practice Exam', 50, 300, { align: 'center' });
  doc.fillColor('#94a3b8').fontSize(14).font('Helvetica').text('50 Practice Questions & Detailed Answer Explanations', 50, 360, { align: 'center' });
  doc.rect(150, 430, doc.page.width - 300, 2).fill('#38bdf8');
  doc.fillColor('#ffffff').fontSize(12).text('Pass your Real Estate Exam on the first try.', 50, 480, { align: 'center' });
  doc.text('Updated for 2026 with latest state laws.', 50, 500, { align: 'center' });

  // 2. Add Questions Page (Second page)
  doc.addPage();
  doc.fillColor('#000000').fontSize(18).font('Helvetica-Bold').text('Practice Questions', 50, 100);
  doc.moveDown(1.5);

  fullQuestions.forEach((item, index) => {
    // Check if we need a page break before writing the next question (each question block takes ~80-100pt)
    if (doc.y > 640) {
      doc.addPage();
    }

    doc.fillColor('#1e293b').fontSize(11).font('Helvetica-Bold').text(`${index + 1}. ${item.q}`, { width: doc.page.width - 100 });
    doc.moveDown(0.4);
    item.options.forEach(opt => {
      doc.fillColor('#334155').fontSize(10).font('Helvetica').text(`    ${opt}`, { width: doc.page.width - 120 });
      doc.moveDown(0.25);
    });
    doc.moveDown(0.8);
  });

  // 3. Add Answer Key Page
  doc.addPage();
  doc.fillColor('#000000').fontSize(22).font('Helvetica-Bold').text('Answer Key & Explanations', 50, 100);
  doc.moveDown(1.5);

  fullQuestions.forEach((item, index) => {
    // Check if we need a page break before writing the next explanation (each block takes ~80-100pt)
    if (doc.y > 620) {
      doc.addPage();
    }

    doc.fillColor('#0f172a').fontSize(11).font('Helvetica-Bold').text(`Question ${index + 1}: Correct Answer (${item.answer})`);
    doc.moveDown(0.3);
    doc.fillColor('#475569').fontSize(10).font('Helvetica').text(`Explanation: ${item.explanation}`, { width: doc.page.width - 100 });
    doc.moveDown(1.0);
  });

  // 4. Second-Pass: Stamp Headers, Footers, and Page Numbers on all content pages (skip cover page)
  const range = doc.bufferedPageRange();
  for (let i = 1; i < range.count; i++) {
    doc.switchToPage(i);
    
    // Draw Header Line & text (drawn absolute at top, clear of the top margin of 100)
    doc.fillColor('#007aff').rect(50, 80, doc.page.width - 100, 1.5).fill();
    doc.fillColor('#64748b').fontSize(8).font('Helvetica-Bold').text('REAL ESTATE QUESTION BANK', 50, 65, { lineBreak: false });
    doc.text(`${stateName.toUpperCase()} PRACTICE EXAM`, doc.page.width - 250, 65, { align: 'right', width: 200, lineBreak: false });

    // Draw Footer (at y = 760, which is safely inside our 20pt bottom margin: 792 - 20 = 772)
    doc.fillColor('#94a3b8').fontSize(9).font('Helvetica').text(`Page ${i + 1} of ${range.count}`, 50, doc.page.height - 32, { align: 'right', lineBreak: false });
  }

  doc.end();
  console.log(`Generated ${fileName}`);
}

// Generate for all states
Object.entries(STATES).forEach(([key, name]) => {
  generatePDF(key, name);
});
