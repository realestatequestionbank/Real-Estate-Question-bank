import type { Question, StatePermitTestConfig } from '@/components/state-permit-test/types'

export const nebraskaPermitTestConfig: StatePermitTestConfig = {
    stateName: 'Nebraska',
    stateCode: 'NE',
    departmentName: 'Nebraska Real Estate',
    departmentAbbr: 'Real Estate',
    realQuestionCount: 25,
    realPassCount: 20,
    passPercent: 80,
    retakePolicy: 'Can retake after 1 day if failed',
    mainPageUrl: '/nebraska-real-estate-permit-test',
    pageUrl: '/nebraska-real-estate-permit-test-25-questions',
    stateGuideUrl: '/state-guides/nebraska',
    handbookUrl: '/handbooks/nebraska',
    year: 2026,
}

export const nebraskaPermitTestQuestions: Question[] = [
    {
        id: 1,
        question: "At what age can a Nebraska teen apply for a real estate license?",
        options: ["14", "14 and a half", "15", "16"],
        correctAnswer: 2,
        explanation: "Nebraska allows teens to apply for a real estate license at age 15. The real estate license requires a parent or guardian's signature and allows supervised driving practice before advancing through the GDL program."
    },
    {
        id: 2,
        question: "What is the legal BAC limit for a driver age 21 or older in Nebraska?",
        options: ["0.04%", "0.06%", "0.08%", "0.10%"],
        correctAnswer: 2,
        explanation: "Nebraska, like all U.S. states, sets the per se DUI limit at 0.08% BAC for drivers 21 and older. Commercial vehicle drivers face a stricter 0.04% limit. Reaching 0.08% BAC is sufficient for a DUI charge regardless of apparent impairment."
    },
    {
        id: 3,
        question: "Nebraska's zero tolerance law sets the illegal BAC for drivers under 21 at:",
        options: ["0.00% — any detectable amount", "0.02%", "0.04%", "0.08%"],
        correctAnswer: 0,
        explanation: "Nebraska has an absolute zero tolerance policy for underage drinking and driving. Drivers under 21 with any detectable alcohol in their system (0.00%+) face license revocation. This is stricter than states like Tennessee that use 0.02% as the underage threshold."
    },
    {
        id: 4,
        question: "What is the default speed limit on a Nebraska urban street when no speed limit sign is posted?",
        options: ["20 mph", "25 mph", "30 mph", "35 mph"],
        correctAnswer: 1,
        explanation: "Nebraska's default speed limit in urban or residential areas is 25 mph when no posted sign indicates otherwise. This is a commonly tested fact because many drivers assume urban limits are 30 mph."
    },
    {
        id: 5,
        question: "You are driving on a Nebraska highway behind a large combine harvester moving slowly. You want to pass. Which is correct?",
        options: ["Pass on the right using the shoulder — farm equipment must yield to cars", "Pass on the left when it is safe and legal to do so", "Honk continuously until the driver pulls over", "You may never pass farm equipment on a two-lane road"],
        correctAnswer: 1,
        explanation: "Nebraska's rural highways often have slow-moving farm equipment during planting and harvest seasons. Pass on the left when the centerline allows it and you have clear visibility ahead. Never pass on the right or shoulder — that is illegal and dangerous."
    },
    {
        id: 6,
        question: "What does a flashing red traffic signal mean?",
        options: ["Slow down and proceed with caution", "Stop, yield to all traffic, then proceed when safe", "The signal is broken — treat as an uncontrolled intersection", "Yield only to pedestrians"],
        correctAnswer: 1,
        explanation: "A flashing red signal in Nebraska is treated exactly like a stop sign. Come to a complete stop, look in all directions, yield to existing traffic and pedestrians, and proceed when it is safe."
    },
    {
        id: 7,
        question: "How must you signal before turning or changing lanes in Nebraska?",
        options: ["Signal only if other vehicles are nearby", "Signal at least 100 feet before the turn in urban areas and 300 feet on highways", "Signal only at intersections with traffic signals", "A signal is not required if the road is clear"],
        correctAnswer: 1,
        explanation: "Nebraska law requires drivers to signal at least 100 feet before turning or changing lanes in urban areas. On highways and rural roads, signal at least 300 feet in advance. Signaling alerts other drivers and pedestrians to your intentions."
    },
    {
        id: 8,
        question: "When must you stop for a school bus in Nebraska?",
        options: ["Only when driving behind the bus", "When the bus displays flashing red lights and a stop sign arm on any undivided road", "Only if children are visibly boarding or exiting", "Only on roads with a speed limit of 35 mph or lower"],
        correctAnswer: 1,
        explanation: "In Nebraska, all traffic on an undivided road must stop when a school bus activates its flashing red lights and extended stop arm. Stop at least 15 feet from the bus and wait until the lights stop and the arm retracts. On divided highways, only traffic behind the bus must stop."
    },
    {
        id: 9,
        question: "You are approaching a railroad crossing and the gates are down. What must you do?",
        options: ["Stop before the gate and proceed when you see a gap in train traffic", "You may go around the gate if the train is far away", "Stop before the gate and wait until the gate is fully raised before crossing", "Proceed slowly under the gate"],
        correctAnswer: 2,
        explanation: "Nebraska law prohibits going around or under lowered railroad gates. Stop before the gate and wait until it fully rises and the warning lights stop before crossing. Trains cannot stop quickly — a freight train at 55 mph takes more than a mile to stop."
    },
    {
        id: 10,
        question: "On a two-lane road in Nebraska, what does a solid yellow center line on your side of the road mean?",
        options: ["You may pass if you can complete the maneuver quickly", "Passing is prohibited on your side", "You must drive in the center of the road", "The lane is ending — merge right"],
        correctAnswer: 1,
        explanation: "A solid yellow line on your side of the center line prohibits passing. Only pass when you have a broken yellow line on your side, the road ahead is clear, and you have enough distance to complete the pass safely."
    },
    {
        id: 11,
        question: "What is Nebraska's Move Over law?",
        options: ["Slow to 5 mph when passing any vehicle on the shoulder", "Move one lane away from stopped emergency, law enforcement, or roadside vehicles — or slow down if a lane change is unsafe", "Only applies when passing police vehicles", "Only applies on interstates"],
        correctAnswer: 1,
        explanation: "Nebraska's Move Over law requires drivers to vacate the lane closest to any stopped emergency, law enforcement, maintenance, or towing vehicle with active warning lights. If a lane change is not safely possible, slow to a reasonable and prudent speed below the posted limit."
    },
    {
        id: 12,
        question: "You are stopped at a red light. A bicyclist is in the crosswalk to your right. Can you turn right on red?",
        options: ["Yes — bicyclists must yield to turning vehicles", "No — you must yield to the bicyclist before turning", "Yes, but only if you honk first", "No — right turns on red are illegal in Nebraska"],
        correctAnswer: 1,
        explanation: "Right turns on red are permitted in Nebraska after a complete stop and yielding to all pedestrians and cyclists. You must yield to the bicyclist already in the crosswalk before turning. Never turn on red in a way that endangers any pedestrian or cyclist."
    },
    {
        id: 13,
        question: "What is the speed limit in a Nebraska school zone when warning lights are flashing?",
        options: ["10 mph", "15 mph", "20 mph", "25 mph"],
        correctAnswer: 2,
        explanation: "Nebraska reduces the speed limit in school zones to 20 mph when the warning lights are flashing or when children are present. Watch for children near the roadway and be prepared to stop quickly during school hours."
    },
    {
        id: 14,
        question: "Under Nebraska's implied consent law, a driver who refuses a chemical test after a lawful DUI arrest will:",
        options: ["Face no penalty — refusal is a constitutional right", "Have their license revoked for at least 1 year for a first offense", "Receive only a minor fine", "Only lose their license if later convicted of DUI"],
        correctAnswer: 1,
        explanation: "Nebraska's implied consent law means that by driving on state roads, you have agreed to chemical testing. A first-offense refusal results in a 1-year license revocation. The refusal can also be introduced as evidence against you in court."
    },
    {
        id: 15,
        question: "When driving at night on a Nebraska highway, when should you switch from high beams to low beams?",
        options: ["When an oncoming vehicle is within 1,000 feet", "When an oncoming vehicle is within 500 feet, or when following a vehicle within 300 feet", "High beams must always be used on rural highways", "Only when driving through a town"],
        correctAnswer: 1,
        explanation: "Nebraska law requires you to dim your headlights to low beam when an oncoming vehicle is within 500 feet, or when you are following another vehicle within 300 feet. High beams blind oncoming drivers and the driver ahead of you."
    },
    {
        id: 16,
        question: "You are about to enter a highway on-ramp. What should you do?",
        options: ["Stop at the end of the on-ramp and wait for a gap in traffic", "Use the acceleration lane to match highway speed before merging", "Merge immediately regardless of your speed", "Flash your headlights to signal your intent to merge"],
        correctAnswer: 1,
        explanation: "Nebraska requires drivers to use the acceleration lane on highway on-ramps to increase speed and match highway traffic before merging. Entering too slowly forces highway drivers to brake and creates a dangerous situation."
    },
    {
        id: 17,
        question: "What must a driver do when approaching a visually impaired pedestrian using a white cane or guide dog at a crosswalk?",
        options: ["Slow to 10 mph and pass carefully", "Stop and yield the right of way until the pedestrian has safely crossed", "Honk to alert them and proceed carefully", "Yield only if they are already in your lane"],
        correctAnswer: 1,
        explanation: "Nebraska law requires all drivers to stop and yield the right of way to pedestrians using a white cane or guide dog. These individuals are visually impaired — do not proceed until they have safely crossed the roadway."
    },
    {
        id: 18,
        question: "What does a yellow diamond-shaped sign with wavy lines mean?",
        options: ["Winding road ahead", "Lane ends — merge", "Dip or bump ahead — reduce speed", "Railroad crossing ahead"],
        correctAnswer: 0,
        explanation: "A yellow diamond sign with a wavy or curved line warns of a winding road ahead. Reduce speed to maintain control through the curves. Nebraska's rural highways can have unexpected curves, especially in the Sandhills and river valley areas."
    },
    {
        id: 19,
        question: "How should you handle a tire blowout at highway speed in Nebraska?",
        options: ["Immediately slam on the brakes and pull over", "Grip the wheel firmly, ease off the accelerator, and steer to the right edge of the road gradually", "Turn the wheel sharply to maintain your lane", "Speed up slightly to maintain momentum until you reach a safe area"],
        correctAnswer: 1,
        explanation: "During a tire blowout, grip the steering wheel firmly with both hands to maintain control, gradually ease off the accelerator, and steer to the right shoulder. Avoid slamming the brakes — this can cause you to lose control entirely. Let the vehicle slow naturally before braking gently."
    },
    {
        id: 20,
        question: "What is the minimum following distance recommended in Nebraska under normal driving conditions?",
        options: ["1 second", "2 seconds", "3 seconds", "4 seconds"],
        correctAnswer: 2,
        explanation: "Nebraska recommends a minimum 3-second following distance under normal driving conditions. In rain, ice, or heavy fog — all common in Nebraska — increase to 5 or more seconds. Use a fixed road marker to measure: count 3 seconds after the vehicle ahead passes it."
    },
    {
        id: 21,
        question: "You are driving in a snowstorm in Nebraska. Which of these is correct?",
        options: ["Use high beams to see further in the snow", "Use low beams — high beams reflect off snow and reduce visibility", "Turn off all lights to prevent glare", "Use hazard lights as your primary illumination while moving"],
        correctAnswer: 1,
        explanation: "In snow, fog, or heavy rain, use low beams rather than high beams. High beams reflect off precipitation and reduce forward visibility. Low beams project light downward and forward more effectively in these conditions."
    },
    {
        id: 22,
        question: "When parking on a hill with a curb, which direction should you turn your front wheels if facing downhill?",
        options: ["Turn wheels toward the curb (right if facing downhill on a two-way street)", "Turn wheels away from the curb (left if facing downhill on a two-way street)", "Keep wheels straight", "Turn wheels whichever direction feels most natural"],
        correctAnswer: 0,
        explanation: "When parking facing downhill with a curb, turn your front wheels toward the curb (right on a standard two-way street). If the vehicle rolls, the curb will stop it. Facing uphill, turn wheels away from the curb so the curb catches the rear of the tire."
    },
    {
        id: 23,
        question: "What does an orange construction sign indicate?",
        options: ["A detour is required ahead", "Work zone ahead — fines are doubled for speeding violations in the work zone", "Road damage ahead — proceed at 5 mph", "New road markings — follow temporary lane markings"],
        correctAnswer: 1,
        explanation: "Orange signs in Nebraska indicate construction or work zones. Speed limits are reduced in these areas, and fines for speeding violations are doubled. Workers are present and conditions change frequently — slow down and follow all temporary traffic control devices."
    },
    {
        id: 24,
        question: "On a Nebraska highway, you notice the car ahead's brake lights come on suddenly. What should you do?",
        options: ["Immediately swerve to the left to avoid a collision", "Take your foot off the accelerator and cover the brake in case you need to stop", "Flash your hazard lights to warn following traffic only", "Check your mirrors before touching the brakes"],
        correctAnswer: 1,
        explanation: "When you see brake lights ahead, immediately lift off the accelerator and move your foot to the brake — this is called covering the brake. It reduces your reaction time if a full stop is needed. Also check your mirrors to assess if a following driver could rear-end you if you stop."
    },
    {
        id: 25,
        question: "What is the purpose of a shared center turn lane on a Nebraska urban road?",
        options: ["For overtaking slow vehicles in either direction", "For vehicles from either direction to wait while making a left turn", "For emergency vehicles only", "For cyclists and pedestrians to cross safely"],
        correctAnswer: 1,
        explanation: "A shared center turn lane — marked with yellow lines and arrows pointing in both directions — is used by vehicles from either direction to slow and wait before making a left turn. It reduces conflicts with through traffic. You may not use it for passing or as a travel lane."
    },
]

export const nebraskaPermitTestFaq: { question: string; answer: string }[] = [
    {
        question: "How many questions are on the Nebraska Real Estate Exam?",
        answer: "The Nebraska Real Estate Exam has exactly 25 multiple-choice questions. You need to answer at least 20 correctly (80%) to pass."
    },
    {
        question: "What score do you need to pass the Nebraska permit test?",
        answer: "You need 20 out of 25 questions correct — a passing score of 80%. Missing 6 or more questions means you fail and must wait 1 day before retaking."
    },
    {
        question: "How many questions can you miss on the Nebraska Real Estate Exam?",
        answer: "You can miss up to 5 questions on the 25-question knowledge test. Missing 6 or more means you fail."
    },
    {
        question: "Is there a time limit on the Nebraska permit test?",
        answer: "No. The Nebraska Real Estate does not impose a time limit on the knowledge test. Take your time, but read each question carefully before answering."
    },
    {
        question: "What is the retake policy if I fail the Nebraska permit test?",
        answer: "If you fail, you must wait 1 day before retaking. Use that time to review the areas where you missed questions. Scoring 90%+ consistently on practice tests before your appointment is the best preparation."
    },
    {
        question: "Can I take the Nebraska permit test online?",
        answer: "No. As of 2026, all Nebraska Real Estate knowledge tests must be taken in person at a Nebraska Department of Motor Vehicles office."
    },
    {
        question: "What is the minimum age to get a real estate license in Nebraska?",
        answer: "Nebraska allows teens to apply for a real estate license at age 15. A parent or guardian must sign the application, and the permit allows supervised driving practice."
    },
    {
        question: "What is Nebraska's zero tolerance law for underage drivers?",
        answer: "Nebraska has absolute zero tolerance for underage drinking and driving. Any detectable amount of alcohol in a driver under 21 is illegal. This is stricter than some other states — even 0.01% BAC results in license revocation for a driver under 21."
    },
]
