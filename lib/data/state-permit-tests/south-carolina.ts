import type { Question, StatePermitTestConfig } from '@/components/state-permit-test/types'

export const southCarolinaPermitTestConfig: StatePermitTestConfig = {
    stateName: 'South Carolina',
    stateCode: 'SC',
    departmentName: 'South Carolina Real Estate',
    departmentAbbr: 'SCRealEstate',
    realQuestionCount: 30,
    realPassCount: 24,
    passPercent: 80,
    retakePolicy: 'Can retake after 1 day if failed',
    mainPageUrl: '/south-carolina-real-estate-permit-test',
    pageUrl: '/south-carolina-real-estate-permit-test-30-questions',
    stateGuideUrl: '/state-guides/south-carolina',
    handbookUrl: '/handbooks/south-carolina',
    year: 2026,
}

export const southCarolinaPermitTestQuestions: Question[] = [
    {
        id: 1,
        question: "What is the default speed limit on most urban streets in South Carolina when no speed limit is posted?",
        options: ["25 mph", "30 mph", "35 mph", "40 mph"],
        correctAnswer: 1,
        explanation: "South Carolina sets the default speed limit in urban and business districts at 30 mph when no other limit is posted. Always look for posted signs since specific roads may have different limits."
    },
    {
        id: 2,
        question: "Under South Carolina's GDL program, at what age can a teenager apply for a beginner's permit?",
        options: ["14", "15", "16", "15 and a half"],
        correctAnswer: 1,
        explanation: "In South Carolina, teens can apply for a beginner's permit at age 15. They must hold the permit for at least 1 year (180 days minimum practice) and meet supervised driving requirements before obtaining a restricted license."
    },
    {
        id: 3,
        question: "What is the speed limit in most South Carolina school zones?",
        options: ["15 mph", "20 mph", "25 mph", "30 mph"],
        correctAnswer: 2,
        explanation: "South Carolina school zones have a speed limit of 25 mph when children are present or warning lights are active. Always reduce speed well before entering a school zone and watch for pedestrians near the road."
    },
    {
        id: 4,
        question: "In South Carolina, what term is used for the offense of driving while impaired by alcohol?",
        options: ["DWI (Driving While Intoxicated)", "DUI (Driving Under the Influence)", "OWI (Operating While Intoxicated)", "DUII (Driving Under the Influence of Intoxicants)"],
        correctAnswer: 1,
        explanation: "South Carolina uses the term DUI (Driving Under the Influence) — not DWI. This is state-specific terminology and is directly tested on the SCRealEstate knowledge exam. The legal BAC threshold is 0.08% for drivers 21 and older."
    },
    {
        id: 5,
        question: "What is the legal BAC limit for a driver age 21 or older in South Carolina?",
        options: ["0.04%", "0.06%", "0.08%", "0.10%"],
        correctAnswer: 2,
        explanation: "A BAC of 0.08% or higher is per se illegal for drivers 21 and older in South Carolina. Commercial drivers face a stricter 0.04% limit. At or above 0.08%, the BAC level alone establishes impairment regardless of how the driver appears."
    },
    {
        id: 6,
        question: "Under South Carolina's zero tolerance law, what BAC level is illegal for a driver under 21?",
        options: ["Any measurable amount — 0.00%", "0.02%", "0.04%", "0.08%"],
        correctAnswer: 1,
        explanation: "South Carolina's zero tolerance law sets the illegal threshold for drivers under 21 at 0.02% BAC. A driver under 21 with a BAC of 0.02% or higher faces DUI charges and license suspension, even if they do not appear visibly impaired."
    },
    {
        id: 7,
        question: "South Carolina's seatbelt law for front-seat occupants uses which enforcement type?",
        options: ["Secondary enforcement — officers must have another reason to stop the vehicle", "Primary enforcement — officers can stop a vehicle solely for a seatbelt violation", "Enforcement only for drivers, not passengers", "No enforcement — seatbelts are recommended but not required"],
        correctAnswer: 1,
        explanation: "South Carolina uses primary enforcement for front-seat occupants, meaning an officer can stop a vehicle solely for a front-seat seatbelt violation. Back-seat passengers are covered by secondary enforcement. All occupants are required to wear seatbelts."
    },
    {
        id: 8,
        question: "How long must a South Carolina teen hold a beginner's permit before applying for a restricted license?",
        options: ["6 months", "180 days (approximately 6 months)", "1 full year", "90 days"],
        correctAnswer: 1,
        explanation: "South Carolina requires teens under 18 to hold their beginner's permit for at least 180 days (approximately 6 months) before they can take the road test for a real estate license."
    },
    {
        id: 9,
        question: "Under South Carolina's Move Over law, what must you do when approaching a stopped vehicle with flashing lights on the side of the road?",
        options: ["Move over only for law enforcement vehicles", "Slow to 25 mph regardless of posted limit", "Move one lane away if safe, or slow to a safe speed if a lane change isn't possible", "Activate your hazard flashers and maintain speed"],
        correctAnswer: 2,
        explanation: "South Carolina's Move Over law requires drivers to move one lane away from any stopped emergency, law enforcement, towing, or highway utility vehicle with flashing lights. If moving over is not safely possible, slow to a safe and reasonable speed."
    },
    {
        id: 10,
        question: "What is the speed limit on most South Carolina rural two-lane roads when no sign is posted?",
        options: ["45 mph", "50 mph", "55 mph", "60 mph"],
        correctAnswer: 2,
        explanation: "The default speed limit on most South Carolina rural roads is 55 mph when no other limit is posted. Interstate highways have a higher default of 70 mph. Always check for posted signs, especially in areas with frequent intersections or pedestrian activity."
    },
    {
        id: 11,
        question: "Under South Carolina's implied consent law, a driver suspected of DUI who refuses a chemical test will face:",
        options: ["No penalty — the refusal cannot be used against them", "A 6-month license suspension for a first offense", "Only a fine, not a license suspension", "The same penalties as an actual DUI conviction"],
        correctAnswer: 1,
        explanation: "South Carolina's implied consent law means drivers have agreed to submit to chemical testing by driving on state roads. A first-offense refusal triggers a 6-month license suspension. The refusal can also be mentioned in court proceedings."
    },
    {
        id: 12,
        question: "Texting while driving in South Carolina is:",
        options: ["Legal unless you are under 18", "Legal for drivers over 21 only", "Prohibited for all drivers at all times", "Legal only when the vehicle is stopped at a traffic signal"],
        correctAnswer: 2,
        explanation: "South Carolina prohibits texting while driving for all drivers of any age. Reading, composing, or sending a text message while operating a vehicle is illegal statewide. Violating this law is a primary offense — officers can stop you for it directly."
    },
    {
        id: 13,
        question: "What must you do before turning right on a red light in South Carolina?",
        options: ["Slow to 10 mph, then proceed", "Signal, then proceed without stopping if no traffic is coming", "Come to a complete stop, yield to all traffic and pedestrians, then proceed if clear", "Wait for the light to turn green"],
        correctAnswer: 2,
        explanation: "Right turns on red are permitted in South Carolina after a complete stop and yielding to all pedestrians and cross traffic. A 'No Turn on Red' sign overrides this rule. Never make the turn until you have verified the intersection is fully clear."
    },
    {
        id: 14,
        question: "You are driving and a school bus ahead activates its flashing red lights and extends its stop arm. You are in the lane directly behind the bus. What must you do?",
        options: ["Pass carefully on the left if no children are visible", "Stop at least 20 feet behind the bus and wait", "Slow to 15 mph and proceed past the bus", "Stop only if children are actively exiting"],
        correctAnswer: 1,
        explanation: "When a school bus displays flashing red lights and its stop arm extends, drivers must stop at least 20 feet away and wait until the lights stop flashing and the arm retracts. On an undivided two-lane road, traffic in both directions must stop."
    },
    {
        id: 15,
        question: "What is the recommended following distance in South Carolina under normal driving conditions?",
        options: ["1 second", "2 seconds", "3 seconds", "4 seconds"],
        correctAnswer: 2,
        explanation: "South Carolina recommends the 3-second rule as the minimum following distance in normal conditions. Pick a fixed landmark — when the vehicle ahead passes it, you should reach it no sooner than 3 seconds. In rain or on slick roads, increase to 4–6 seconds."
    },
    {
        id: 16,
        question: "You arrive at a 4-way stop at exactly the same moment as a driver to your left. Who has the right of way?",
        options: ["You do, because the other driver is to your left", "The other driver, because you are to their right", "Whoever signals first has the right of way", "Neither — both must wait for a traffic officer"],
        correctAnswer: 0,
        explanation: "At a 4-way stop when two vehicles arrive simultaneously, the driver to the RIGHT has the right of way. If you are to the right of the other driver, you go first. Stated differently: you yield to traffic coming from your RIGHT."
    },
    {
        id: 17,
        question: "A flashing red light at an intersection in South Carolina means:",
        options: ["Yield to cross traffic, then proceed", "Slow and proceed with caution", "Stop completely, yield to all traffic, then proceed when safe", "The signal is malfunctioning — treat as a green light"],
        correctAnswer: 2,
        explanation: "A flashing red light is treated like a stop sign in South Carolina. Come to a complete stop, check for traffic and pedestrians in all directions, yield the right of way, and proceed when safe. This is different from a flashing yellow, which means caution without requiring a full stop."
    },
    {
        id: 18,
        question: "On a South Carolina highway, you see a solid yellow line on YOUR side of the center stripe. This means:",
        options: ["You may pass if the road ahead appears clear", "You are prohibited from crossing the center line to pass", "Passing is allowed for vehicles going faster than 55 mph", "You are in a passing zone — proceed when safe"],
        correctAnswer: 1,
        explanation: "A solid yellow line on your side of the road means you may not cross the center line to pass. The solid line indicates a no-passing zone due to limited visibility — a hill, curve, or other hazard. Wait for a dashed yellow line on your side before passing."
    },
    {
        id: 19,
        question: "You are driving on an interstate in South Carolina. What is the maximum speed limit for passenger vehicles in most rural sections?",
        options: ["65 mph", "70 mph", "75 mph", "80 mph"],
        correctAnswer: 1,
        explanation: "South Carolina's standard interstate speed limit for passenger vehicles is 70 mph in rural sections. Urban interstate sections through major cities like Columbia or Charleston may have lower posted limits. Always follow the posted sign."
    },
    {
        id: 20,
        question: "Which of the following actions is NOT allowed when passing another vehicle on a two-lane road in South Carolina?",
        options: ["Passing when there is a dashed yellow center line on your side", "Passing on a long, straight section with clear visibility ahead", "Passing when approaching the crest of a hill where oncoming traffic cannot be seen", "Passing a slow-moving farm vehicle with adequate sight distance"],
        correctAnswer: 2,
        explanation: "Passing near the crest of a hill is prohibited because you cannot see oncoming traffic. Passing is also prohibited on curves, near intersections, in school zones, and wherever solid yellow lines appear on your side. Visibility must be clear for the entire passing maneuver."
    },
    {
        id: 21,
        question: "An emergency vehicle with lights and siren approaches from the opposite direction on a divided highway. What must you do?",
        options: ["Pull to the right and stop as soon as safely possible", "Maintain speed — on a divided highway the rule does not apply to you", "Slow to 25 mph until the emergency vehicle passes", "Move to the left lane to create space"],
        correctAnswer: 0,
        explanation: "Even on a divided highway when an emergency vehicle approaches from the opposite direction, South Carolina law requires you to pull to the right and stop. The right-and-stop rule applies regardless of direction on undivided roads; on divided roads local customs may vary, but pulling right and stopping is always safest and required by law."
    },
    {
        id: 22,
        question: "What color and shape is a railroad advance warning sign?",
        options: ["White rectangle with a red R", "Yellow circle with a large X and 'RR'", "Red octagon with 'STOP'", "Orange diamond with a locomotive symbol"],
        correctAnswer: 1,
        explanation: "Railroad advance warning signs are round (circular), yellow, and display a large X with 'RR' — warning drivers that a railroad crossing is ahead. The circular shape is reserved specifically for railroad warning signs, making them distinctive from other warning signs (which are diamond-shaped)."
    },
    {
        id: 23,
        question: "In South Carolina, when must you turn on your vehicle's headlights?",
        options: ["Only between midnight and 5 AM", "Only when it is raining heavily", "From sunset to sunrise and whenever visibility is reduced to less than 500 feet", "Only on rural roads and highways"],
        correctAnswer: 2,
        explanation: "South Carolina requires headlights from sunset to sunrise and any time weather reduces visibility to less than 500 feet. Many states also require headlights whenever windshield wipers are in use — a rule that is tested because drivers often forget it applies in light drizzle as well."
    },
    {
        id: 24,
        question: "You are making a left turn at an intersection with a green light. Oncoming traffic is still moving. When can you turn?",
        options: ["Immediately — a green light gives you the right of way to turn", "Only after you enter the intersection and oncoming traffic clears", "After you yield to oncoming traffic and find a safe gap", "Only when a dedicated left-turn arrow appears"],
        correctAnswer: 2,
        explanation: "A solid green light allows you to turn left, but you must first yield to oncoming traffic and pedestrians in the crosswalk. Enter the intersection to position yourself, then wait for a safe gap before completing the turn. Failing to yield on a left turn is one of the most common crash causes."
    },
    {
        id: 25,
        question: "A yellow diamond-shaped sign with a pedestrian symbol means:",
        options: ["No pedestrians allowed on this road", "A school zone is ahead — reduce speed", "Pedestrian crossing ahead — be prepared to stop", "Parking area for pedestrians only"],
        correctAnswer: 2,
        explanation: "A yellow diamond sign with a pedestrian symbol warns drivers of a pedestrian crossing ahead. Reduce speed, scan for people crossing or preparing to cross, and be ready to stop. This type of crossing may or may not have a marked crosswalk."
    },
    {
        id: 26,
        question: "Under South Carolina law, which of the following is true about nighttime driving restrictions for teens with a restricted license?",
        options: ["No nighttime restrictions exist in South Carolina", "Drivers under 16 may not drive between midnight and 6 AM", "Drivers under 17 may not drive between midnight and 6 AM without a licensed adult", "Drivers under 18 may not drive at all between 10 PM and 5 AM"],
        correctAnswer: 2,
        explanation: "South Carolina restricts drivers under 17 with a restricted license from driving between midnight and 6 AM unless accompanied by a licensed adult age 21 or older, or driving to/from work or a school-sponsored activity. The curfew is midnight — not 10 PM or 11 PM."
    },
    {
        id: 27,
        question: "What does a green traffic signal arrow pointing left indicate?",
        options: ["You may turn left after yielding to oncoming traffic", "You may turn left without yielding — oncoming traffic is stopped", "Left turns are prohibited at this intersection", "Oncoming traffic has the green — yield before turning"],
        correctAnswer: 1,
        explanation: "A green arrow (protected left turn) means you may turn in the direction of the arrow without yielding — oncoming traffic has a red light. Protected turns are the safest type of left turn. When the arrow ends and a solid green appears, you must then yield to oncoming traffic."
    },
    {
        id: 28,
        question: "You are driving and your wheels drift off the paved road onto a soft shoulder. What is the safest way to return to the pavement?",
        options: ["Jerk the wheel sharply back onto the road immediately", "Apply the brakes hard and stop before returning", "Ease off the gas, steer gently, and gradually return to the lane when safe", "Continue on the shoulder until you reach a driveway"],
        correctAnswer: 2,
        explanation: "When wheels drift onto a soft shoulder, ease off the gas and steer gently — do not jerk the wheel. Sudden overcorrection causes rollovers, especially at highway speeds. Gradually return to the lane when speed has reduced and you have a clear, safe entry."
    },
    {
        id: 29,
        question: "When approaching an uncontrolled railroad crossing in South Carolina, you must:",
        options: ["Stop completely regardless of whether a train is visible", "Slow to 15 mph and check for trains", "Slow down, look and listen in both directions, and only cross when safe", "Maintain speed if no warning lights are active"],
        correctAnswer: 2,
        explanation: "At uncontrolled railroad crossings, South Carolina law requires you to slow down, look both ways, and listen for trains before crossing. You are not required to stop unless a train is coming or warning signals are active — but you must be certain the tracks are clear. Trains cannot stop quickly."
    },
    {
        id: 30,
        question: "South Carolina's Move Over law applies to which types of stopped vehicles with flashing lights?",
        options: ["Law enforcement vehicles only", "Law enforcement and fire/rescue vehicles only", "Emergency, law enforcement, towing, and highway utility vehicles", "Any vehicle using hazard flashers on the side of the road"],
        correctAnswer: 2,
        explanation: "South Carolina's Move Over law covers emergency vehicles, law enforcement, towing/recovery operations, and highway utility vehicles — any vehicle performing roadside operations with activated warning lights. The law is designed to protect both first responders and service workers operating on or near the roadway."
    },
]

export const southCarolinaPermitTestFaq: { question: string; answer: string }[] = [
    {
        question: "How many questions are on the South Carolina SCRealEstate Exam?",
        answer: "The South Carolina permit test has 30 multiple-choice questions. You need to answer at least 24 correctly (80%) to pass."
    },
    {
        question: "What score do you need to pass the SC permit test?",
        answer: "You need 24 out of 30 questions correct (80%). Missing 7 or more questions means you fail and must wait 1 day before retaking."
    },
    {
        question: "How many questions can you miss on the SC Real Estate Exam?",
        answer: "You can miss up to 6 questions on the 30-question test. Missing 7 or more means you fail."
    },
    {
        question: "Is there a time limit on the South Carolina permit test?",
        answer: "No. The SCRealEstate does not impose a time limit on the knowledge test. Take your time, but trust your first instinct on most questions."
    },
    {
        question: "What is South Carolina's retake policy if I fail the permit test?",
        answer: "If you fail, you can retake the test after 1 day. Use that time to review sections where you struggled. Consistently scoring 90%+ on practice tests before your appointment greatly improves your chances."
    },
    {
        question: "Can I take the South Carolina permit test online?",
        answer: "No. As of 2026, all SCRealEstate knowledge tests must be taken in person at an SCRealEstate office. Schedule your appointment at screal-estateonline.com."
    },
    {
        question: "What is the nighttime driving curfew for teens with a restricted license in South Carolina?",
        answer: "South Carolina restricts drivers under 17 from driving between midnight and 6 AM without a licensed adult age 21 or older in the vehicle, unless driving to or from work or a school-sponsored activity."
    },
    {
        question: "Does South Carolina use the term DUI or DWI for drunk driving?",
        answer: "South Carolina uses DUI (Driving Under the Influence) — not DWI. This is tested on the SCRealEstate knowledge exam. The legal BAC limit is 0.08% for drivers 21 and older, and 0.02% for drivers under 21."
    },
]
