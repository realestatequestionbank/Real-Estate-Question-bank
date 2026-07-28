import type { Question, StatePermitTestConfig } from '@/components/state-permit-test/types'

export const oklahomaPermitTestConfig: StatePermitTestConfig = {
    stateName: 'Oklahoma',
    stateCode: 'OK',
    departmentName: 'Oklahoma DPS',
    departmentAbbr: 'DPS',
    realQuestionCount: 50,
    realPassCount: 40,
    passPercent: 80,
    retakePolicy: 'Can retake after 1 day if failed',
    mainPageUrl: '/oklahoma-dps-permit-test',
    pageUrl: '/oklahoma-dps-permit-test-50-questions',
    stateGuideUrl: '',
    handbookUrl: '/handbooks/oklahoma',
    year: 2026,
}

export const oklahomaPermitTestQuestions: Question[] = [
    {
        id: 1,
        question: "Approaching a railroad crossing without active warning signals, a driver should:",
        options: [
            "Slow down, look both ways, and listen before crossing",
            "Proceed normally if no train is visible",
            "Rely only on the crossbuck sign and keep speed"
        ],
        correctAnswer: 0,
        explanation: "If a crossing has no warning devices, slow down, look both directions, and listen for trains before proceeding.",
    },
    {
        id: 2,
        question: "What does a posted speed limit sign represent?",
        options: [
            "The maximum legal speed under ideal road and weather conditions.",
            "A recommended speed you may ignore if traffic is light.",
            "The exact speed you must travel at all times to avoid a ticket.",
            "A minimum speed you must maintain."
        ],
        correctAnswer: 0,
        explanation: "Speed limits indicate the maximum legal speed under ideal conditions; drivers must slow down when conditions are less than ideal.",
    },
    {
        id: 3,
        question: "What is the most common color used for warning signs?",
        options: [
            "Yellow.",
            "Red.",
            "Green."
        ],
        correctAnswer: 0,
        explanation: "Most warning signs are yellow (diamond-shaped) with black symbols or lettering to warn of potential hazards.",
    },
    {
        id: 4,
        question: "If you are following a school bus or a tank truck carrying flammable liquids, you should be prepared to do what?",
        options: [
            "Pass them cautiously on the right",
            "Decrease your following distance",
            "Be prepared to stop at all railroad crossings"
        ],
        correctAnswer: 2,
        explanation: "School buses and tank trucks carrying flammable liquids must stop at all railroad crossings; be prepared to stop when following them.",
    },
    {
        id: 5,
        question: "From which lane must you make a left turn when leaving a one-way street?",
        options: [
            "The lane nearest the left curb.",
            "The lane nearest the center of the street.",
            "The lane nearest the right curb.",
            "Any lane as long as you signal."
        ],
        correctAnswer: 0,
        explanation: "On a one-way street, make a left turn from the lane closest to the left curb into the nearest lawful lane.",
    },
    {
        id: 6,
        question: "How should you change lanes?",
        options: [
            "Gradually and carefully after checking mirrors and blind spots",
            "Quickly and often to stay ahead of traffic",
            "Only when a car is in your blind spot"
        ],
        correctAnswer: 0,
        explanation: "Change lanes gradually and carefully; check mirrors, signals, and blind spots before moving over.",
    },
    {
        id: 7,
        question: "What does a double solid yellow centerline indicate about passing?",
        options: [
            "Passing is not allowed from either direction.",
            "Passing is allowed from both directions.",
            "Passing is allowed only from your direction of travel."
        ],
        correctAnswer: 0,
        explanation: "A double solid yellow line means traffic moves in opposite directions and passing is prohibited both ways.",
    },
    {
        id: 8,
        question: "What is likely to happen if you drive substantially slower than the flow of traffic?",
        options: [
            "You may interfere with traffic flow and could be cited.",
            "You will improve traffic flow.",
            "You will automatically be demonstrating defensive driving."
        ],
        correctAnswer: 0,
        explanation: "If you block the reasonable movement of traffic by driving too slowly, you can be cited. Match the flow when safe and legal.",
    },
    {
        id: 9,
        question: "Which headlights should you use when driving in fog, heavy rain, or snow?",
        options: [
            "Low beam headlights.",
            "High beam headlights.",
            "Only fog lights and no headlights.",
            "Parking lights only."
        ],
        correctAnswer: 0,
        explanation: "Low beams should be used in fog, rain, or snow because high beams create glare and reduce visibility.",
    },
    {
        id: 10,
        question: "Alcohol consumption affects driving by:",
        options: [
            "Slowing reflexes and reaction time",
            "Waking you up",
            "Improving concentration"
        ],
        correctAnswer: 0,
        explanation: "Alcohol is a depressant that slows brain activity, reflexes, and judgment needed for safe driving.",
    },
    {
        id: 11,
        question: "When may you pass another vehicle?",
        options: [
            "When the centerline next to your lane is broken and it is safe to do so.",
            "When you are on a hill or curve and cannot see ahead.",
            "When the centerline next to your lane is solid."
        ],
        correctAnswer: 0,
        explanation: "Passing is allowed when the broken centerline is adjacent to your lane and there is no oncoming traffic and it's safe.",
    },
    {
        id: 12,
        question: "How do sudden gusts of wind affect vehicles on highways?",
        options: [
            "They can cause problems for all vehicles, not just large ones.",
            "They only affect the movement of very large trucks.",
            "They only reduce visibility but do not affect vehicle stability.",
            "They pose no risk on modern highways."
        ],
        correctAnswer: 0,
        explanation: "Strong crosswinds can affect small and large vehicles, reducing stability and visibility; all drivers should adjust accordingly.",
    },
    {
        id: 13,
        question: "Are drivers required to yield to pedestrians even if the pedestrian is crossing against the light?",
        options: [
            "True",
            "False"
        ],
        correctAnswer: 0,
        explanation: "You must yield right-of-way to pedestrians even if they misjudge signals or cross against a light.",
    },
    {
        id: 14,
        question: "At what approximate speed can a car begin to hydroplane on standing water?",
        options: [
            "About 35 miles per hour.",
            "About 45 miles per hour.",
            "About 40 miles per hour.",
            "About 25 miles per hour."
        ],
        correctAnswer: 0,
        explanation: "Hydroplaning can begin at speeds near 35 mph because tires cannot channel water away effectively above that speed, causing loss of road contact.",
    },
    {
        id: 15,
        question: "When approaching an accident scene, what is the appropriate action if you are not involved?",
        options: [
            "Keep driving and maintain attention to the road; do not stop unless you are involved or emergency help hasn't arrived.",
            "Stop immediately to watch and take photos.",
            "Drive toward the scene to offer assistance without checking for hazards."
        ],
        correctAnswer: 0,
        explanation: "Do not stop at a crash scene unless involved or emergency services haven't arrived; keep moving while watching for people and hazards.",
    },
    {
        id: 16,
        question: "What is a good practice when driving near a large commercial vehicle?",
        options: [
            "Drive beside it for long stretches to stay out of its blind spot.",
            "Avoid lingering beside it — do not stay in its blind spots.",
            "Tailgate to reduce wind drag on your vehicle.",
            "Always pass on the right regardless of conditions."
        ],
        correctAnswer: 1,
        explanation: "Large commercial vehicles have large blind spots on each side; avoid riding beside them for long periods and pass quickly and safely.",
    },
    {
        id: 17,
        question: "What is the best general way to reduce the chance of hydroplaning in wet weather?",
        options: [
            "Slow down to speeds appropriate for wet conditions.",
            "Maintain the same speed you use on dry roads.",
            "Brake hard as soon as you feel the car slide.",
            "Drive in the center of the road at high speed."
        ],
        correctAnswer: 0,
        explanation: "Drive slower in wet conditions; lower speeds help tires channel water and maintain road contact.",
    },
    {
        id: 18,
        question: "How should you prepare when driving to an unfamiliar area?",
        options: [
            "Plan your route before you start driving.",
            "Depend mainly on road signs while driving.",
            "Drive with only a general sense of the destination."
        ],
        correctAnswer: 0,
        explanation: "Plan trips in advance and check maps or directions so you aren't driving with only a vague idea of the route.",
    },
    {
        id: 19,
        question: "If a truck or bus is making a right turn where you also need to turn right, what should you do?",
        options: [
            "Wait until the truck or bus completes its turn before you turn.",
            "Try to turn quickly before it completes its turn.",
            "Squeeze between the vehicle and the curb to get through."
        ],
        correctAnswer: 0,
        explanation: "Large vehicles need extra space to turn; do not try to squeeze between them and the curb or you may collide.",
    },
    {
        id: 20,
        question: "What should you do before making a turn?",
        options: [
            "Signal three to four seconds before turning.",
            "Turn the wheel immediately without signaling.",
            "Increase your speed to clear the turn quickly."
        ],
        correctAnswer: 0,
        explanation: "Activate your turn signal several seconds before the turn to inform others of your intentions.",
    },
    {
        id: 21,
        question: "If you discover a vehicle defect that affects safety, when should you repair it?",
        options: [
            "Correct the defect as soon as possible, before driving further.",
            "Wait until you can afford it.",
            "Drive more slowly to compensate for the defect."
        ],
        correctAnswer: 0,
        explanation: "Any safety-related defect should be repaired promptly to ensure safe vehicle operation.",
    },
    {
        id: 22,
        question: "When making a right turn, what should you avoid doing?",
        options: [
            "Turning too wide so you leave your lane.",
            "Signaling to other drivers.",
            "Slowing down before the turn."
        ],
        correctAnswer: 0,
        explanation: "Do not turn too wide on a right turn. Signal and slow down properly before turning.",
    },
    {
        id: 23,
        question: "Because motorcycles, scooters, and mopeds can be hard to see, drivers should:",
        options: [
            "Make regular visual checks and be especially alert.",
            "Share the same lane with them.",
            "Slow to a complete stop whenever they are nearby."
        ],
        correctAnswer: 0,
        explanation: "Motorcycles are small and can be hidden in blind spots; constantly check and be vigilant for them.",
    },
    {
        id: 24,
        question: "When backing up, how should you position yourself to see properly?",
        options: [
            "Look through the rear window by placing your right arm on the passenger seat and turning to look back.",
            "Rely only on mirrors.",
            "Press the gas lightly while backing to maintain momentum."
        ],
        correctAnswer: 0,
        explanation: "When reversing, turn and look through the rear window; do not depend solely on mirrors and back up slowly.",
    },
    {
        id: 25,
        question: "If you park facing uphill on a street with a curb, you should set the parking brake and:",
        options: [
            "Turn the front wheels toward the curb.",
            "Turn the front wheels away from the curb.",
            "Leave the wheels pointing straight ahead.",
            "Turn the wheels toward the centerline."
        ],
        correctAnswer: 1,
        explanation: "When parking uphill at a curb, turn wheels away from the curb so the vehicle will roll into the curb rather than into traffic if it moves.",
    },
    {
        id: 26,
        question: "You arrive at an intersection with a flashing red light. What should you do?",
        options: [
            "Slow down and cross if it feels clear.",
            "Come to a full stop, yield, and proceed when safe.",
            "Only stop if other cars are present.",
            "Treat it as a flashing yellow light."
        ],
        correctAnswer: 1,
        explanation: "A flashing red signal is equivalent to a stop sign: stop completely, yield to others, then go when safe.",
    },
    {
        id: 27,
        question: "If traffic ahead is blocking an intersection, what is the correct action?",
        options: [
            "Wait to enter the intersection until you can fully cross it",
            "Use your horn to urge traffic to move",
            "Drive closely behind the vehicle ahead in case the light changes"
        ],
        correctAnswer: 0,
        explanation: "Do not enter an intersection unless you can fully clear it; otherwise you may be cited for blocking it.",
    },
    {
        id: 28,
        question: "How is alcohol classified in terms of its effect on the body?",
        options: [
            "A depressant.",
            "A stimulant.",
            "An antihistamine."
        ],
        correctAnswer: 0,
        explanation: "Alcohol is a depressant that slows brain and body functions, impairing judgment and reflexes.",
    },
    {
        id: 29,
        question: "Fatigue while driving increases the risk of:",
        options: [
            "Falling asleep behind the wheel and crashing",
            "Missing an exit only",
            "Arriving earlier to appointments"
        ],
        correctAnswer: 0,
        explanation: "Fatigue impairs judgment and reaction time and can lead to falling asleep at the wheel and a crash.",
    },
    {
        id: 30,
        question: "Signs that require drivers to obey a rule (such as speed limits or parking restrictions) are called:",
        options: [
            "Regulatory signs.",
            "Warning signs.",
            "Information signs.",
            "Guide signs."
        ],
        correctAnswer: 0,
        explanation: "Regulatory signs tell drivers what they must or must not do; failure to comply is enforceable by penalty.",
    },
    {
        id: 31,
        question: "When changing lanes, what should you do to check for traffic in your blind spot?",
        options: [
            "Rely only on your mirrors.",
            "Look over your shoulder toward the lane you plan to enter.",
            "Trust the rearview mirror exclusively.",
            "Rely on the vehicle's blind-spot sensor only."
        ],
        correctAnswer: 1,
        explanation: "Glance over your shoulder in the direction you plan to move to check blind spots; mirrors alone do not show everything.",
    },
    {
        id: 32,
        question: "If you see heavy smoke covering the roadway ahead, what should you do?",
        options: [
            "Reduce speed, move as far right as possible, and stop off the roadway until it is safe.",
            "Turn on four-way flashers and drive through quickly.",
            "Turn on high beam headlights to see better.",
            "Continue at the same speed and stay in your lane."
        ],
        correctAnswer: 0,
        explanation: "If smoke obscures the road, slow down, pull to the right, and stop off the roadway until conditions improve; some smoke can be hazardous to breathe.",
    },
    {
        id: 33,
        question: "If you miss your interstate exit, you should:",
        options: [
            "Continue to the next exit and not attempt dangerous maneuvers to return",
            "Quickly cut across traffic to reach the exit",
            "Make a U-turn on the freeway"
        ],
        correctAnswer: 0,
        explanation: "Do not make last-minute turns or U-turns on an interstate; go to the next exit safely.",
    },
    {
        id: 34,
        question: "Before changing lanes on a multi-lane highway, what should you do?",
        options: [
            "Check mirrors and blind spots and signal; do not sound your horn or flash headlights.",
            "Sound your horn to warn other drivers.",
            "Turn on your headlights to signal intent."
        ],
        correctAnswer: 0,
        explanation: "Check rearview and side mirrors, look over your shoulder for blind spots, and signal before changing lanes.",
    },
    {
        id: 35,
        question: "When is it permitted to pass another vehicle on the right shoulder?",
        options: [
            "Never",
            "When the car ahead is driving too slowly",
            "When the car ahead is signaling a left turn"
        ],
        correctAnswer: 0,
        explanation: "You must not drive off the pavement or onto the shoulder to pass another vehicle; passing on the right is only allowed where it is legal and safe.",
    },
    {
        id: 36,
        question: "To reduce glare from an approaching vehicle's headlights, what should you do?",
        options: [
            "Look briefly toward the right side of the road and then resume scanning.",
            "Stare at the centerline to judge distance.",
            "Flash your high beams back at them."
        ],
        correctAnswer: 0,
        explanation: "Glance toward the right edge of the road to avoid being blinded, then resume scanning ahead to maintain lane position.",
    },
    {
        id: 37,
        question: "If you are facing a green traffic light but pedestrians are in the intersection, what must you do?",
        options: [
            "Yield the right-of-way to the pedestrians.",
            "Proceed because you have the green light.",
            "Honk and expect pedestrians to get out of the way.",
            "Speed up to clear the crosswalk before they finish crossing."
        ],
        correctAnswer: 0,
        explanation: "Even on a green signal you must yield to pedestrians already in the intersection or crosswalk.",
    },
    {
        id: 38,
        question: "When merging onto a freeway, you should be driving:",
        options: [
            "At or near the speed of the traffic already on the freeway",
            "Five to ten mph below freeway traffic speed",
            "Well below the posted speed to be cautious"
        ],
        correctAnswer: 0,
        explanation: "Enter the freeway at about the same speed as traffic so you can merge safely; always yield to traffic on the freeway.",
    },
    {
        id: 39,
        question: "A person using a white cane or guide dog is likely to be:",
        options: [
            "A blind or visually impaired person",
            "A participant in a traffic study",
            "A deaf person"
        ],
        correctAnswer: 0,
        explanation: "Pedestrians using a white cane or guide dog are blind or visually impaired and must be yielded to at all times.",
    },
    {
        id: 40,
        question: "When entering a roadway from a private road or driveway, what must you do?",
        options: [
            "Yield the right-of-way to pedestrians and vehicles already on the roadway.",
            "Blow your horn to warn approaching cars.",
            "Partially enter the roadway to alert other drivers."
        ],
        correctAnswer: 0,
        explanation: "You must yield to pedestrians and traffic on the roadway when entering from a private road or driveway.",
    },
    {
        id: 41,
        question: "How far ahead should you look while driving to anticipate problems?",
        options: [
            "One minute ahead.",
            "45 seconds ahead.",
            "15 to 20 seconds ahead.",
            "Five seconds ahead."
        ],
        correctAnswer: 2,
        explanation: "Look 15 to 20 seconds ahead (roughly one city block at moderate speed) to see hazards and plan maneuvers.",
    },
    {
        id: 42,
        question: "When meeting an oncoming vehicle at night, which headlight setting should you use?",
        options: [
            "Low beam headlights.",
            "High beam headlights.",
            "Turn off headlights and use parking lights."
        ],
        correctAnswer: 0,
        explanation: "Do not use high beams when approaching or following another vehicle; use low beams to avoid blinding other drivers.",
    },
    {
        id: 43,
        question: "Like alcohol and drugs, what effect can drowsiness have on driving?",
        options: [
            "It can impair judgment and slow reaction time.",
            "It improves alertness.",
            "It has no effect on driving judgment."
        ],
        correctAnswer: 0,
        explanation: "Lack of sleep reduces reaction time, awareness, and judgment, similar to impairment from drugs or alcohol.",
    },
    {
        id: 44,
        question: "Is it legal to drink alcoholic beverages in a vehicle on a public road?",
        options: [
            "No — consuming or possessing an open alcoholic beverage on a public road is prohibited.",
            "Yes, as long as you are not driving.",
            "Yes, if you sit in the back of a pickup truck."
        ],
        correctAnswer: 0,
        explanation: "It's illegal to consume or possess an open alcoholic beverage on public roads; open containers in driver/passenger areas are prohibited.",
    },
    {
        id: 45,
        question: "What should you do before driving if you are taking any medication?",
        options: [
            "Consult your doctor or pharmacist about how it may affect your driving.",
            "Have someone follow you home to monitor you.",
            "Keep the window open and drive more slowly without consulting anyone."
        ],
        correctAnswer: 0,
        explanation: "Legal medications can impair driving ability. Ask a healthcare professional about side effects and driving safety.",
    },
    {
        id: 46,
        question: "Under which condition may you legally pass another vehicle?",
        options: [
            "When the centerline next to your lane is a broken yellow line and it is safe to pass.",
            "While on a hill or in a curve where visibility is limited.",
            "By driving onto the highway shoulder to get around a slow car.",
            "When your lane is next to a solid yellow line regardless of visibility."
        ],
        correctAnswer: 0,
        explanation: "You may pass when the centerline next to your lane is a broken yellow line and it is safe to complete the pass. Do not pass on hills, curves, on the shoulder, or over solid yellow lines.",
    },
    {
        id: 47,
        question: "Who may park in parking spaces reserved for persons with disabilities?",
        options: [
            "Only vehicles displaying special license plates or disabled parking placards",
            "Any vehicle if the driver is visiting someone nearby",
            "Any vehicle if the space appears empty"
        ],
        correctAnswer: 0,
        explanation: "A space marked for persons with disabilities may be used only by vehicles displaying appropriate disabled license plates or placards.",
    },
    {
        id: 48,
        question: "Which of the following does stopping distance NOT depend on?",
        options: [
            "The time of day.",
            "Your reaction time.",
            "The condition of your vehicle's brakes.",
            "The condition of the roadway and tires."
        ],
        correctAnswer: 0,
        explanation: "Stopping distance depends on reaction time, vehicle and brake condition, tires, weight, speed, and road conditions — not on the time of day.",
    },
    {
        id: 49,
        question: "When driving at night, which of these actions should you take?",
        options: [
            "Always use high beams.",
            "Look directly at oncoming headlights.",
            "Increase your following distance.",
            "Drive at the posted speed no matter what."
        ],
        correctAnswer: 2,
        explanation: "Night driving reduces visibility; increase following distance and use high/low beams correctly to avoid blinding others.",
    },
    {
        id: 50,
        question: "When turning or changing lanes, when must you signal?",
        options: [
            "Always signal your intentions, even if no other traffic is visible.",
            "Only when visible traffic is present.",
            "Only during nighttime driving."
        ],
        correctAnswer: 0,
        explanation: "You must always signal before turning, changing lanes, or pulling from a curb to warn other road users.",
    }
]

export const oklahomaPermitTestFaq: { question: string; answer: string }[] = [
    {
        question: "How many questions are on the Oklahoma DPS permit test?",
        answer: "The Oklahoma Department of Public Safety (DPS) permit test has 50 multiple-choice questions. You need to answer at least 40 correctly (80%) to pass. This practice test has 30 questions to help you prepare."
    },
    {
        question: "What score do you need to pass the Oklahoma permit test?",
        answer: "You need 40 out of 50 questions correct — a passing score of 80%. Missing 11 or more questions means you fail and must wait 1 day before retaking."
    },
    {
        question: "How many questions can you miss on the Oklahoma DPS test?",
        answer: "You can miss up to 10 questions on the 50-question knowledge test. Missing 11 or more means you fail."
    },
    {
        question: "Is there a time limit on the Oklahoma permit test?",
        answer: "No. The Oklahoma DPS does not impose a strict time limit on the knowledge test. Read each question carefully — 50 questions cover a wide range of topics including Oklahoma-specific severe weather driving rules."
    },
    {
        question: "What is the retake policy if I fail the Oklahoma permit test?",
        answer: "If you fail, you must wait 1 day before retaking. Use that time to review the areas where you struggled, especially Oklahoma-specific topics like tornado safety while driving."
    },
    {
        question: "Can I take the Oklahoma permit test online?",
        answer: "No. As of 2026, all Oklahoma DPS knowledge tests must be taken in person at an Oklahoma Department of Public Safety real estate license examination office."
    },
    {
        question: "What is the minimum age to get a real estate license in Oklahoma?",
        answer: "Oklahoma allows teens to apply for a real estate license at age 15½ (15 years and 6 months). A parent or guardian must consent, and the permit requires a licensed adult 21+ to be in the front passenger seat at all times."
    },
    {
        question: "Does Oklahoma's permit test include questions about tornado safety?",
        answer: "Yes. Oklahoma's severe weather driving rules are a tested topic on the DPS permit exam. Key facts: never shelter under an overpass during a tornado, turn around when roads are flooded, and use low beams in heavy rain. Oklahoma is in Tornado Alley and drivers must know how to respond to severe weather while driving."
    },
]
