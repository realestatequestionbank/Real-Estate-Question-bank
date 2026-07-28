import type { Question, StatePermitTestConfig } from '@/components/state-permit-test/types'

export const utahPermitTestConfig: StatePermitTestConfig = {
    stateName: 'Utah',
    stateCode: 'UT',
    departmentName: 'Utah Real Estate',
    departmentAbbr: 'Real Estate',
    realQuestionCount: 25,
    realPassCount: 20,
    passPercent: 80,
    retakePolicy: 'Can retake after 1 day if failed',
    mainPageUrl: '/utah-real-estate-permit-test',
    pageUrl: '/utah-real-estate-permit-test-25-questions',
    stateGuideUrl: '/state-guides/utah',
    handbookUrl: '/handbooks/utah',
    year: 2026,
}

export const utahPermitTestQuestions: Question[] = [
    {
        id: 1,
        question: "Utah has the lowest legal BAC limit for drivers in the United States. What is the legal BAC limit for adult drivers (age 21+) in Utah?",
        options: ["0.08%", "0.06%", "0.05%", "0.04%"],
        correctAnswer: 2,
        explanation: "Utah's legal BAC limit is 0.05% — the lowest of any US state and significantly lower than the 0.08% standard used in all other states. Utah lowered the limit from 0.08% to 0.05% in 2018, making it a leader in impaired driving prevention. This is a critical state-specific fact that is frequently tested on the Utah Real Estate exam."
    },
    {
        id: 2,
        question: "At what minimum age can a Utah teenager apply for a learner permit?",
        options: ["14", "15", "15 and a half", "16"],
        correctAnswer: 1,
        explanation: "Utah allows applicants to apply for a learner permit at age 15. The permit allows supervised driving practice with a licensed driver age 21 or older in the front passenger seat. After holding the permit for 6 months and completing required supervised hours, the teen can apply for a limited-term license."
    },
    {
        id: 3,
        question: "Why is Utah's 0.05% BAC limit significant compared to other states?",
        options: ["It was set by federal mandate in 2020", "Utah is the only US state with a 0.05% BAC limit — all other states use 0.08%", "Utah raised the limit to 0.05% from 0.02% in 2022", "Utah's 0.05% only applies to commercial drivers"],
        correctAnswer: 1,
        explanation: "Utah is the ONLY US state with a 0.05% BAC limit. Every other state uses 0.08% as the standard per se DUI limit. Utah lowered the limit from 0.08% to 0.05% in 2018 following state legislation. This lower threshold means a person can be legally impaired in Utah at BAC levels that would be legal in other states."
    },
    {
        id: 4,
        question: "Under Utah's GDL program, a teen with a learner permit (age 15–16) must complete how many hours of supervised driving before applying for a limited-term license?",
        options: ["30 hours total", "40 hours (including 10 at night)", "40 hours (including 10 at night, starting after the first 6 months)", "60 hours total"],
        correctAnswer: 1,
        explanation: "Utah requires learner permit holders to complete 40 hours of supervised driving practice, including at least 10 hours at night, before applying for a limited-term license. The permit must also be held for at least 6 months. These hours must be driven with a licensed adult (21+) in the front seat."
    },
    {
        id: 5,
        question: "What is the maximum speed limit on Utah rural interstate highways?",
        options: ["65 mph", "70 mph", "75 mph", "80 mph"],
        correctAnswer: 2,
        explanation: "Utah allows a maximum speed of 75 mph on rural interstate highways for passenger vehicles. Some sections may have lower posted limits near cities or construction zones. Utah's wide desert highways and open terrain make it one of several western states with higher rural interstate limits."
    },
    {
        id: 6,
        question: "Utah's zero tolerance law for drivers under 21 sets the illegal BAC at:",
        options: ["0.05% — same as the adult limit", "0.02%", "0.04%", "0.00% — any detectable amount"],
        correctAnswer: 3,
        explanation: "Utah has absolute zero tolerance for underage drinking and driving — any detectable amount of alcohol in a driver under 21 is illegal. Combined with Utah's already lower adult BAC limit of 0.05%, Utah has among the strictest DUI laws in the nation. Any BAC reading for a driver under 21 results in DUI charges."
    },
    {
        id: 7,
        question: "What is the default speed limit on Utah urban streets when no speed limit sign is posted?",
        options: ["20 mph", "25 mph", "30 mph", "35 mph"],
        correctAnswer: 1,
        explanation: "Utah's default urban speed limit is 25 mph when no other limit is posted. In school zones and residential areas, even lower limits may be posted. Always check posted signs — cities like Salt Lake City and Provo have many zones with reduced limits."
    },
    {
        id: 8,
        question: "Utah has many canyon roads and mountain passes. When driving downhill on a steep grade, what is the safest technique?",
        options: ["Apply brakes continuously and steadily throughout the descent", "Shift to a lower gear before descending to use engine braking, and apply brakes intermittently if needed", "Increase speed slightly to maintain momentum through curves", "Turn off the engine to coast down the hill"],
        correctAnswer: 1,
        explanation: "On Utah's steep canyon descents, use engine braking by downshifting before starting the descent. This reduces wear on your brakes and prevents brake fade — a condition where brakes overheat and lose effectiveness. Apply the brakes intermittently in short, firm applications rather than riding them continuously."
    },
    {
        id: 9,
        question: "In Utah, a limited-term license holder (teen age 16–17) has a nighttime driving restriction. When may they NOT drive without a licensed adult?",
        options: ["Between 10 PM and 6 AM", "Between 11 PM and 5 AM", "Between midnight and 5 AM", "Between midnight and 6 AM"],
        correctAnswer: 3,
        explanation: "Utah limited-term license holders under 17 may not drive between midnight and 6 AM without a licensed adult (21+) in the front seat. This curfew applies from the time the license is issued until the holder turns 17. Exceptions include driving to or from employment, school, or a medical emergency."
    },
    {
        id: 10,
        question: "When approaching a school bus with activated red flashing lights and a stop arm in Utah, you must:",
        options: ["Stop only if traveling in the same direction as the bus", "Stop at least 15 feet in all directions on undivided roads until lights stop flashing", "Slow to 10 mph and pass with caution if no children are crossing", "Stop only if children are visible outside the bus"],
        correctAnswer: 1,
        explanation: "Utah requires all vehicles on an undivided road to stop at least 15 feet from a school bus with activated red lights, in both directions. Wait until the red lights stop flashing and the stop arm retracts before proceeding. On divided highways with a median, only vehicles behind the bus must stop."
    },
    {
        id: 11,
        question: "Utah's Move Over law requires drivers approaching a stopped emergency or utility vehicle with flashing lights to:",
        options: ["Sound their horn as a warning and proceed", "Only slow down — lane changes are not required", "Move to a non-adjacent lane if safe, or reduce speed if a lane change is not possible", "Stop completely until the vehicle departs"],
        correctAnswer: 2,
        explanation: "Utah's Move Over law requires drivers to move to a lane not adjacent to the stopped vehicle if safely possible. If a lane change cannot be made safely, reduce speed to a safe level. Utah's law covers emergency, law enforcement, maintenance, and highway worker vehicles."
    },
    {
        id: 12,
        question: "What does a diamond-shaped orange sign mean when seen in a work zone?",
        options: ["A regular warning sign — same as a yellow diamond", "A construction or work zone warning — heightened attention required", "A detour sign — follow arrows to alternate route", "A speed limit change specific to trucks only"],
        correctAnswer: 1,
        explanation: "Orange diamond-shaped signs indicate construction or work zones and require heightened attention. In Utah, fines for traffic violations in work zones are doubled when workers are present. Slow down, watch for workers and equipment, and follow all posted work zone signs and flaggers' directions."
    },
    {
        id: 13,
        question: "Utah requires headlights from sunset to sunrise. When else are headlights required in Utah?",
        options: ["Only during officially declared weather emergencies", "Whenever windshield wipers are in use due to rain, snow, or fog", "Anytime outside city limits", "Only when visibility is reduced to less than 500 feet"],
        correctAnswer: 1,
        explanation: "Utah requires headlights from sunset to sunrise AND whenever weather conditions (rain, snow, fog) require the use of windshield wipers. This rule ensures vehicles are visible to others even when wiper use begins before it is fully dark. If you need your wipers, turn on your headlights."
    },
    {
        id: 14,
        question: "At a four-way stop in Utah, two cars arrive at exactly the same time — one from the north, one from the west. Which car has the right of way?",
        options: ["The car coming from the north (going south) has the right of way", "The car coming from the west (going east) has the right of way because it is on the right of the northbound car", "Both cars must wait for a third vehicle to break the tie", "The car on the wider road goes first"],
        correctAnswer: 1,
        explanation: "When two vehicles arrive simultaneously at a four-way stop, the driver on the left must yield to the driver on the right. The car coming from the west is to the right of the northbound car (from the northbound driver's perspective), so the westbound car has the right of way. The northbound driver yields."
    },
    {
        id: 15,
        question: "What is the correct hand position on the steering wheel recommended by Utah Real Estate?",
        options: ["10 o'clock and 2 o'clock", "9 o'clock and 3 o'clock (or 8 and 4)", "One hand only, at 12 o'clock", "Any position the driver is comfortable with"],
        correctAnswer: 1,
        explanation: "Utah Real Estate recommends the 9 and 3 (or 8 and 4) hand position on the steering wheel. This position provides optimal control and reduces risk of injury from an airbag deployment. The older 10 and 2 position is no longer recommended because it puts hands in the path of the deploying airbag."
    },
    {
        id: 16,
        question: "Utah has high-altitude roads where the air is thinner. How does high altitude affect driving?",
        options: ["High altitude improves fuel efficiency and braking performance", "High altitude can reduce engine power and increase stopping distances slightly", "High altitude has no effect on vehicle performance", "High altitude reduces tire pressure, requiring constant adjustment"],
        correctAnswer: 1,
        explanation: "Utah's high-altitude roads — some above 10,000 feet — can reduce engine power due to thinner air (less oxygen for combustion). Braking performance is minimally affected, but driver alertness and reaction time can be impaired by altitude sickness. Be especially cautious on mountain passes and canyon roads."
    },
    {
        id: 17,
        question: "What is the minimum following distance recommended in Utah under normal driving conditions?",
        options: ["1 second", "2 seconds", "3 seconds", "4 seconds"],
        correctAnswer: 2,
        explanation: "Utah recommends a minimum 3-second following distance under normal conditions. On Utah's mountain highways, the 3-second rule should be extended because stopping distances are affected by steep grades and elevation. In snow or ice — common in Utah winters — increase to at least 6–8 seconds."
    },
    {
        id: 18,
        question: "Utah is a semi-arid state with frequent dust storms in desert regions. What should you do if you encounter a sudden dust storm while driving?",
        options: ["Pull off the road completely, turn off all lights, and remain in the vehicle", "Pull completely off the road, set the parking brake, turn off lights, and keep your foot off the brake pedal", "Continue driving at reduced speed with hazard lights on", "Stop in your lane and turn on hazard lights immediately"],
        correctAnswer: 1,
        explanation: "In a sudden dust storm (common in Utah's desert areas), pull as far off the road as possible — ideally into a rest area or parking lot. Turn off all lights (including hazard flashers) and keep your foot off the brake pedal so following drivers cannot mistake your vehicle for a moving car. Remain in the vehicle with seatbelts on. Turning off lights prevents other drivers from following your lights into the stopped vehicle."
    },
    {
        id: 19,
        question: "In Utah, can you make a right turn on a red light?",
        options: ["No — right turns on red are prohibited statewide", "Yes, after a complete stop and yielding to all traffic and pedestrians, unless a sign prohibits it", "Yes, without stopping if no traffic is visible", "Only between 6 AM and 10 PM"],
        correctAnswer: 1,
        explanation: "Right turns on red are permitted in Utah after a complete stop and yielding to all cross traffic and pedestrians. Always check for a 'No Turn on Red' sign first. In Salt Lake City and other urban areas, 'No Turn on Red' signs are common at busier intersections. Always make a complete stop before turning."
    },
    {
        id: 20,
        question: "Utah uses implied consent laws. A driver suspected of DUI who refuses a chemical test will face:",
        options: ["No penalty — refusal is a protected right in Utah", "18-month license revocation and the refusal can be used as evidence", "A $50 fine only — no license suspension", "Only a warning for first-time refusals"],
        correctAnswer: 1,
        explanation: "Utah's implied consent law results in an 18-month driver license revocation for a first-offense refusal — longer than many states. The refusal can also be admitted as evidence in court. Given Utah's already strict 0.05% BAC limit, refusing a test rarely helps and typically results in harsher overall consequences."
    },
    {
        id: 21,
        question: "When should you NOT use cruise control while driving in Utah?",
        options: ["Only when driving in school zones", "On wet, icy, or snow-covered roads; in heavy traffic; on steep mountain grades", "Only when other passengers are in the vehicle", "Cruise control is safe on all roads as long as you remain alert"],
        correctAnswer: 1,
        explanation: "Cruise control should not be used in Utah (or anywhere) on wet, icy, or snow-covered roads because it cannot react to sudden changes in traction. On steep mountain grades, cruise control can cause excessive speed on downhills. In heavy traffic, cruise control reduces your ability to quickly respond to sudden stops. Always use cruise control only on open, dry highways."
    },
    {
        id: 22,
        question: "What is the blood alcohol concentration for commercial vehicle drivers in Utah?",
        options: ["0.05% — same as the passenger vehicle limit", "0.04%", "0.02%", "0.00% — zero tolerance"],
        correctAnswer: 1,
        explanation: "Commercial vehicle drivers in Utah are held to a 0.04% BAC limit — lower than Utah's already-strict 0.05% limit for passenger vehicle drivers. This 0.04% limit is federally mandated for CDL holders. Commercial drivers face even stricter standards due to the size and danger of the vehicles they operate."
    },
    {
        id: 23,
        question: "You are driving in Utah and see a sign that reads 'BEGIN REDUCED SPEED AHEAD.' What does this mean?",
        options: ["You must reduce speed immediately at the sign", "A lower speed limit zone begins ahead — reduce speed before reaching it", "This is an advisory sign only — no legal requirement", "The speed limit reduces for trucks only"],
        correctAnswer: 1,
        explanation: "A 'REDUCED SPEED AHEAD' sign warns you that a lower speed zone begins ahead. Begin reducing your speed as you approach the new limit sign — do not wait until you reach it. Gradually slow down so you are at the new posted speed when you enter the zone. This sign is commonly used near school zones and construction areas in Utah."
    },
    {
        id: 24,
        question: "Utah winter driving requires special preparation. Before driving in snow or icy conditions, you should:",
        options: ["Install snow tires only if driving in the mountains", "Clear all snow and ice from all windows, lights, and the vehicle roof before driving", "Only clear the windshield — side windows are not required to be cleared", "Snow tires are optional — all-season tires are always adequate in Utah"],
        correctAnswer: 1,
        explanation: "Utah requires (and safety demands) clearing ALL snow and ice from your vehicle before driving — including the roof, all windows, lights, and mirrors. Snow left on the roof can slide onto your windshield or fly off and hit other vehicles. Ensure all lights are visible and all windows provide unobstructed sightlines."
    },
    {
        id: 25,
        question: "At a four-way stop, you and another driver arrive at the same time and are facing each other (going in opposite directions). You both intend to go straight. Who goes first?",
        options: ["The driver on the wider road goes first", "Either driver may proceed — same-direction conflict, no yield needed if both go straight", "The driver facing north always has priority", "The driver with the larger vehicle has priority"],
        correctAnswer: 1,
        explanation: "When two vehicles at a four-way stop are facing each other and both going straight, there is no conflict — you are not crossing each other's path. Both may proceed at roughly the same time. The yield-to-the-right rule only matters when vehicles' paths would cross. If both go straight in opposite directions, no conflict exists."
    },
]

export const utahPermitTestFaq: { question: string; answer: string }[] = [
    {
        question: "How many questions are on the Utah Real Estate Exam?",
        answer: "The Utah Real Estate knowledge test has 25 multiple-choice questions. You need to answer at least 20 correctly (80%) to pass."
    },
    {
        question: "What score do you need to pass the Utah permit test?",
        answer: "You need 20 out of 25 questions correct — a passing score of 80%. Missing 6 or more questions means you fail and must wait 1 day before retaking."
    },
    {
        question: "How many questions can you miss on the Utah Real Estate Exam?",
        answer: "You can miss up to 5 questions on the 25-question knowledge test. Missing 6 or more means you fail."
    },
    {
        question: "Is there a time limit on the Utah permit test?",
        answer: "No. The Utah Real Estate does not impose a time limit on the knowledge test. Take your time on each question."
    },
    {
        question: "What is the retake policy if I fail the Utah permit test?",
        answer: "If you fail, you must wait 1 day before retaking. Use that time to review the areas where you struggled. Consistently scoring 90%+ on practice tests before your appointment is the best way to pass on your first try."
    },
    {
        question: "Can I take the Utah permit test online?",
        answer: "No. As of 2026, all Utah Real Estate knowledge tests must be taken in person at a Utah Driver License Division office. You can make an appointment on the Utah Real Estate website."
    },
    {
        question: "What is the minimum age to get a real estate license in Utah?",
        answer: "You must be at least 15 years old to apply for a Utah learner permit. You'll need to pass the 25-question knowledge test and a vision screening. After holding the permit for 6 months and completing 40 hours of supervised driving (including 10 at night), you can apply for a limited-term license at age 16."
    },
    {
        question: "What is Utah's BAC limit and why is it unique?",
        answer: "Utah's legal BAC limit for adult drivers is 0.05% — the lowest of any US state. Every other state uses 0.08% as the standard. Utah lowered the limit from 0.08% to 0.05% in 2018. This means that in Utah, a person can be legally over the limit at BAC levels that would be legal everywhere else in the US. This is a heavily tested fact on the Utah Real Estate exam."
    },
]
