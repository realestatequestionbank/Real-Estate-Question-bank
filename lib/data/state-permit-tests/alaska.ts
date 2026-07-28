import type { Question, StatePermitTestConfig } from '@/components/state-permit-test/types'

export const alaskaPermitTestConfig: StatePermitTestConfig = {
    stateName: 'Alaska',
    stateCode: 'AK',
    departmentName: 'Alaska Real Estate',
    departmentAbbr: 'Real Estate',
    realQuestionCount: 20,
    realPassCount: 16,
    passPercent: 80,
    retakePolicy: 'Can retake after 1 day if failed',
    mainPageUrl: '/alaska-real-estate-permit-test',
    pageUrl: '/alaska-real-estate-permit-test-20-questions',
    stateGuideUrl: '/state-guides/alaska',
    handbookUrl: '/handbooks/alaska',
    year: 2026,
}

export const alaskaPermitTestQuestions: Question[] = [
    {
        id: 1,
        question: "In Alaska, between which dates are studded tires legally permitted on public roads?",
        options: ["September 15 – April 30", "October 1 – April 15", "November 1 – March 31", "October 15 – May 1"],
        correctAnswer: 1,
        explanation: "Alaska law permits studded tires from October 1 through April 15. Using studded tires outside this window can result in a fine because studded tires damage dry pavement when not needed."
    },
    {
        id: 2,
        question: "What is the minimum age to apply for a real estate license in Alaska?",
        options: ["13", "14", "15", "15 and a half"],
        correctAnswer: 1,
        explanation: "Alaska allows teens to apply for a real estate license at age 14, one of the youngest permit ages in the country. The permit requires supervised driving with a licensed adult before advancing to a restricted license."
    },
    {
        id: 3,
        question: "What is the legal BAC limit for drivers age 21 and older in Alaska?",
        options: ["0.04%", "0.06%", "0.08%", "0.10%"],
        correctAnswer: 2,
        explanation: "Alaska, like all U.S. states, sets the per se DUI limit at 0.08% BAC for drivers 21 and older. Reaching 0.08% is itself grounds for a DUI charge, regardless of apparent impairment."
    },
    {
        id: 4,
        question: "Alaska's zero tolerance law for drivers under 21 sets the illegal BAC at:",
        options: ["0.00% — any detectable amount", "0.01%", "0.02%", "0.04%"],
        correctAnswer: 0,
        explanation: "Alaska applies a true zero tolerance standard for drivers under 21 — any measurable amount of alcohol in the system is illegal. An underage driver with any detectable BAC faces license revocation and criminal penalties."
    },
    {
        id: 5,
        question: "You are driving on an icy Alaska road and feel your rear wheels begin to slide. What should you do?",
        options: ["Brake firmly and steer straight", "Accelerate to regain traction", "Steer in the direction of the skid and ease off the gas", "Turn the wheel sharply in the opposite direction of the skid"],
        correctAnswer: 2,
        explanation: "When your vehicle begins to skid on ice, steer gently in the direction the rear is sliding and ease off the accelerator. This technique — called counter-steering — helps straighten the vehicle. Braking during a skid usually makes it worse."
    },
    {
        id: 6,
        question: "You are driving in Alaska during a whiteout blizzard with near-zero visibility. What is the safest action?",
        options: ["Use high beams and maintain speed to exit the storm quickly", "Pull off the road safely, turn on hazard lights, and wait for conditions to improve", "Follow the taillights of the vehicle ahead closely", "Drive on the shoulder to avoid the main travel lanes"],
        correctAnswer: 1,
        explanation: "In a whiteout, the safest option is to pull completely off the roadway, turn on your hazard flashers, and wait for conditions to improve. Following another vehicle in a whiteout is dangerous because a chain-reaction crash can occur if the lead vehicle stops."
    },
    {
        id: 7,
        question: "When driving on Alaska highways in winter, which of the following actions is most important before beginning your trip?",
        options: ["Carry at least half a tank of fuel", "Check the DOT Alaska 511 road conditions report", "Ensure you have an emergency kit with extra clothing, food, and a shovel", "All of the above"],
        correctAnswer: 3,
        explanation: "All three precautions are essential for Alaska winter driving. Remote highways can leave you stranded for hours; fuel, road condition awareness, and emergency supplies are each critical for safety."
    },
    {
        id: 8,
        question: "What is the speed limit on most residential streets in Alaska when no speed limit sign is posted?",
        options: ["20 mph", "25 mph", "30 mph", "35 mph"],
        correctAnswer: 1,
        explanation: "Alaska's default speed limit on residential and business district streets where no limit is posted is 25 mph. On rural highways without posted limits, the default is higher — always check posted signs to be sure."
    },
    {
        id: 9,
        question: "Which of the following is a state-specific rule about vehicle equipment that applies in Alaska but NOT in warm-weather states like Hawaii?",
        options: ["All tires must be the same brand", "Studded tires are permitted during designated winter months", "Chains are prohibited on paved roads", "Snow tires must be removed by April 1 regardless of conditions"],
        correctAnswer: 1,
        explanation: "Studded tires are allowed in Alaska from October 1 through April 15 to provide traction on snow and ice. This rule is Alaska-specific; many warm-weather states prohibit studded tires entirely because they damage dry pavement."
    },
    {
        id: 10,
        question: "A flashing yellow light at an intersection means:",
        options: ["Stop completely and yield before proceeding", "Slow down and proceed with caution", "The signal is broken — treat as a 4-way stop", "Do not enter the intersection"],
        correctAnswer: 1,
        explanation: "A flashing yellow light is a caution indicator. You must slow down and proceed carefully but are not required to come to a complete stop — unlike a flashing red, which requires a full stop."
    },
    {
        id: 11,
        question: "In Alaska, what must you do when a school bus stops and activates its flashing red lights on a two-lane road?",
        options: ["Stop only if you are driving behind the bus", "Slow to 15 mph and pass with caution", "Stop in both directions at least 20 feet from the bus until lights stop flashing", "Yield only to children crossing directly in front of the bus"],
        correctAnswer: 2,
        explanation: "Alaska law requires vehicles traveling in both directions on an undivided road to stop at least 20 feet from a school bus with flashing red lights. You may not proceed until the lights stop flashing and the stop arm retracts."
    },
    {
        id: 12,
        question: "You are approaching a yield sign. What does Alaska law require?",
        options: ["Stop completely regardless of traffic", "Slow down and yield to cross traffic; stop only if necessary", "Maintain speed and merge when safe", "Flash your headlights to signal your intention"],
        correctAnswer: 1,
        explanation: "A yield sign requires you to slow down and give the right of way to cross traffic or pedestrians. You must stop if necessary to avoid a conflict, but a full stop is not required when the way is clear."
    },
    {
        id: 13,
        question: "You are driving at night and see a moose on the road ahead. You should:",
        options: ["Honk continuously to scare the moose away and accelerate to pass quickly", "Flash your high beams and proceed carefully", "Slow down immediately and wait for the moose to move — do not attempt to pass around it", "Swerve sharply around the moose in the opposite lane"],
        correctAnswer: 2,
        explanation: "Moose collisions are extremely dangerous in Alaska and frequently fatal. Slow down immediately and wait patiently for the moose to move. Honking can startle moose into unpredictable behavior, and swerving risks a rollover or head-on collision."
    },
    {
        id: 14,
        question: "What is the required following distance in normal driving conditions under Alaska's safe driving guidelines?",
        options: ["1 second", "2 seconds", "3 seconds", "4 seconds"],
        correctAnswer: 2,
        explanation: "Alaska recommends a minimum 3-second following distance under normal conditions. On icy or slippery roads — common in Alaska — that gap should increase to 6–10 seconds or more to account for longer stopping distances."
    },
    {
        id: 15,
        question: "When is it legal to make a right turn at a red light in Alaska?",
        options: ["Never — right turns on red are prohibited statewide", "After a complete stop, yielding to pedestrians and cross traffic, unless a sign prohibits it", "At any time if no vehicles are visible", "Only between the hours of 6 AM and 10 PM"],
        correctAnswer: 1,
        explanation: "Right turns on red are permitted in Alaska after a complete stop and yielding to pedestrians and other traffic. Some intersections post 'No Turn on Red' signs — always check for those signs before turning."
    },
    {
        id: 16,
        question: "What shape and color is a regulatory sign in Alaska?",
        options: ["Yellow diamond", "White rectangle or white circle", "Orange rectangle", "Green rectangle"],
        correctAnswer: 1,
        explanation: "Regulatory signs — such as speed limits, stop signs, and no-passing zones — are typically white rectangles (or white circles, like railroad advance warning) and convey rules you must obey. Yellow diamonds are warning signs."
    },
    {
        id: 17,
        question: "You are driving uphill on a steep Alaska mountain road and your engine begins to overheat. What should you do?",
        options: ["Continue driving and open the windows to let the engine cool", "Turn on the heater to draw heat away from the engine and pull over when safe", "Rev the engine to maintain coolant circulation", "Immediately stop in the travel lane and call for help"],
        correctAnswer: 1,
        explanation: "Turning on the heater pulls heat from the engine coolant into the cabin, which can temporarily reduce engine temperature on steep grades. Pull over safely as soon as possible and let the engine cool before opening the hood — a hot radiator cap can cause serious burns."
    },
    {
        id: 18,
        question: "In Alaska, what does a solid yellow line on your side of the center line mean?",
        options: ["Passing is permitted when the road is clear", "Passing is prohibited — do not cross the line to pass", "The road ahead has a sharp curve", "Passing is allowed only at speeds over 45 mph"],
        correctAnswer: 1,
        explanation: "A solid yellow line on your side of the center line prohibits passing by crossing that line. Only a dashed yellow line on your side indicates passing is permitted when safe. These markings apply in Alaska and nationwide."
    },
    {
        id: 19,
        question: "When an emergency vehicle with sirens and flashing lights approaches from any direction, Alaska law requires you to:",
        options: ["Speed up to the next intersection and turn off the road", "Stop immediately in your current lane", "Pull to the right side of the road and stop until the vehicle has passed", "Move to the left lane and reduce speed"],
        correctAnswer: 2,
        explanation: "Alaska law requires you to pull to the right edge of the road and stop when an emergency vehicle with active lights and siren approaches. Remain stopped until the emergency vehicle has fully passed before resuming travel."
    },
    {
        id: 20,
        question: "You are approaching an intersection where a traffic light has gone dark (no lights showing). How should you treat it?",
        options: ["Treat it as a yield sign — slow down and yield", "Treat it as a 4-way stop — come to a full stop and take turns proceeding", "Treat it as a green light if the intersection looks clear", "Stop only if you see other vehicles approaching"],
        correctAnswer: 1,
        explanation: "A dark or non-functioning traffic signal must be treated as a 4-way stop in Alaska and nationwide. All drivers must come to a complete stop, then proceed in turn based on order of arrival and right-of-way rules."
    },
]

export const alaskaPermitTestFaq: { question: string; answer: string }[] = [
    {
        question: "How many questions are on the Alaska Real Estate Exam?",
        answer: "The Alaska Real Estate knowledge test has 20 multiple-choice questions. You need to answer at least 16 correctly (80%) to pass."
    },
    {
        question: "What score do you need to pass the Alaska permit test?",
        answer: "You need 16 out of 20 questions correct — a passing score of 80%. Missing 5 or more questions means you fail."
    },
    {
        question: "How many questions can you miss on the Alaska Real Estate Exam?",
        answer: "You can miss up to 4 questions on the 20-question knowledge test. Missing 5 or more means you fail and must wait 1 day before retaking."
    },
    {
        question: "Is there a time limit on the Alaska permit test?",
        answer: "No. The Alaska Real Estate does not impose a time limit on the knowledge test. Take your time with each question, but avoid overthinking your first instinct."
    },
    {
        question: "What is the retake policy if I fail the Alaska permit test?",
        answer: "If you fail, you must wait 1 day before retaking. Use that time to review the areas where you missed questions. Scoring 90%+ consistently on practice tests before your visit is the best preparation strategy."
    },
    {
        question: "Can I take the Alaska permit test online?",
        answer: "No. As of 2026, all Alaska Real Estate knowledge tests must be taken in person at an Alaska Division of Motor Vehicles office."
    },
    {
        question: "What is the minimum age to get a real estate license in Alaska?",
        answer: "Alaska allows teens to apply for a real estate license at age 14, one of the youngest permit ages in the United States. The permit requires supervised driving with a licensed adult before advancing to a restricted license."
    },
    {
        question: "Are studded tires allowed in Alaska?",
        answer: "Yes. Alaska permits studded tires from October 1 through April 15 to help drivers maintain traction on icy and snow-packed roads. Using studded tires outside this window is subject to a fine because they damage dry pavement."
    },
]
