import type { Question, StatePermitTestConfig } from '@/components/state-permit-test/types'

export const ohioPermitTestConfig: StatePermitTestConfig = {
    stateName: 'Ohio',
    stateCode: 'OH',
    departmentName: 'Ohio BMV',
    departmentAbbr: 'BMV',
    realQuestionCount: 40,
    realPassCount: 30,
    passPercent: 75,
    retakePolicy: 'Can retake after 1 day if failed',
    mainPageUrl: '/ohio-bmv-permit-test',
    pageUrl: '/ohio-bmv-permit-test-40-questions',
    stateGuideUrl: '/state-guides/ohio',
    handbookUrl: '/handbooks/ohio',
    year: 2026,
}

export const ohioPermitTestQuestions: Question[] = [
    {
        id: 1,
        question: "How should you approach a railroad crossing that has only a crossbuck sign and no lights or gates?",
        options: [
            "Only cross when directed by a flagger",
            "Assume no train is coming and proceed at normal speed",
            "Approach with extreme caution and cross only when you are sure no train is coming"
        ],
        correctAnswer: 2,
        explanation: "Always approach such crossings cautiously, slow down, look and listen for trains in both directions, and cross only when you are sure no train is coming and it is safe to do so.",
    },
    {
        id: 2,
        question: "What should you do when approaching railroad tracks?",
        options: [
            "Look and listen",
            "Drive around a lowered gate",
            "Speed up to beat the train"
        ],
        correctAnswer: 0,
        explanation: "Always approach railroad crossings with caution: slow if needed, look both ways, listen for trains, and be prepared to stop for trains or for vehicles using the rails. Never drive around lowered gates or try to beat a train.",
    },
    {
        id: 3,
        question: "When driving near heavy trucks, what must other road users allow for?",
        options: [
            "The decreased stopping distance required by large vehicles",
            "The decreased noise of larger vehicles",
            "The increased stopping distance required by large vehicles"
        ],
        correctAnswer: 2,
        explanation: "Large vehicles such as heavy trucks require a much longer distance to stop than passenger cars. Other road users must allow for this increased stopping distance by not cutting in front of trucks and by leaving extra space.",
    },
    {
        id: 4,
        question: "What are the standard colors for most warning signs that alert you to hazards ahead?",
        options: [
            "Black letters on a white background",
            "Black letters or symbols on a yellow background",
            "White symbols on a blue background"
        ],
        correctAnswer: 1,
        explanation: "Most general warning signs are yellow with black symbols or lettering. Work zone warning signs are typically orange with black symbols or lettering.",
    },
    {
        id: 5,
        question: "What does a solid yellow arrow on a traffic signal mean?",
        options: [
            "You may turn in the arrow's direction without yielding",
            "The arrow is not used as a traffic signal",
            "Same as a circular yellow light — prepare to stop or clear the intersection"
        ],
        correctAnswer: 2,
        explanation: "A solid yellow arrow means the protected turn phase is ending. It functions like a circular yellow light for that movement: you should slow and prepare to stop if you can do so safely, or clear the intersection if you are already in it.",
    },
    {
        id: 6,
        question: "When interacting with pedestrians, what is a driver's obligation?",
        options: [
            "Yield only when the pedestrian is legally entitled to the right-of-way",
            "Yield the right-of-way to all pedestrians and do everything possible to avoid striking them",
            "Require pedestrians to always yield to vehicles"
        ],
        correctAnswer: 1,
        explanation: "Drivers must be alert to pedestrians and yield the right-of-way to them to prevent collisions, even if pedestrians are not crossing legally. You are required to do everything reasonably possible to avoid striking a pedestrian.",
    },
    {
        id: 7,
        question: "A solid yellow line on your side of the centerline means:",
        options: [
            "You may pass with caution",
            "You may not pass from your lane",
            "You must slow down immediately"
        ],
        correctAnswer: 1,
        explanation: "A solid yellow line on your side of the centerline means passing is prohibited from your lane. You must not cross it to pass another vehicle, except when turning left where it is otherwise legal and safe.",
    },
    {
        id: 8,
        question: "If you observe other drivers acting angrily, how should you respond?",
        options: [
            "React with hand gestures to de-escalate",
            "Distance yourself from the situation and avoid eye contact or provoking gestures",
            "Make eye contact to calm them down"
        ],
        correctAnswer: 1,
        explanation: "If you observe other drivers acting angrily, increase your distance, avoid eye contact, do not respond with gestures or aggressive behavior, and safely remove yourself from the situation when possible.",
    },
    {
        id: 9,
        question: "If the traffic light turns from green to a steady yellow as you approach, what should you do?",
        options: [
            "Stop before entering the intersection unless you are too close to stop safely",
            "Speed up to beat the light",
            "Ignore it because green just ended"
        ],
        correctAnswer: 0,
        explanation: "When the light changes from green to steady yellow as you approach, you must stop before entering the intersection if you can do so safely. If you are too close to stop safely when it turns yellow, continue through the intersection with caution.",
    },
    {
        id: 10,
        question: "What does a red-and-white triangular sign at an intersection require drivers to do?",
        options: [
            "Slow down and yield the right-of-way; be prepared to stop if necessary",
            "Always come to a full stop regardless of conditions",
            "Increase speed to clear the intersection quickly"
        ],
        correctAnswer: 0,
        explanation: "A red-and-white downward-pointing triangular sign is a YIELD sign. You must slow down, yield the right-of-way to traffic and pedestrians, and be prepared to stop if necessary.",
    },
    {
        id: 11,
        question: "If you are involved in a traffic accident, what is your immediate responsibility?",
        options: [
            "Stop immediately and provide assistance if needed",
            "Drive away if the accident seems minor",
            "Continue on and report it later"
        ],
        correctAnswer: 0,
        explanation: "Stop immediately, render aid as appropriate, call police or emergency services if needed, and exchange information as required by law.",
    },
    {
        id: 12,
        question: "From a two-way left-turn center lane, which maneuver is permitted?",
        options: [
            "Making left turns from either direction into or out of the lane",
            "Continuing straight through the intersection in that lane",
            "Passing slower traffic"
        ],
        correctAnswer: 0,
        explanation: "A two-way center turn lane is reserved for left turns from either direction (and in many areas for U-turns where legal), not for passing or through traffic.",
    },
    {
        id: 13,
        question: "What does a posted speed limit sign indicate?",
        options: [
            "The exact speed you must travel to avoid a ticket",
            "The maximum legal speed under ideal conditions",
            "A recommended safe speed under all conditions"
        ],
        correctAnswer: 1,
        explanation: "A speed limit sign indicates the maximum legal speed for the road under ideal conditions; you must drive slower when conditions are unsafe.",
    },
    {
        id: 14,
        question: "What is the most common cause of traffic crashes?",
        options: [
            "Bad weather",
            "New drivers",
            "Human error"
        ],
        correctAnswer: 2,
        explanation: "Most crashes occur due to human error — mistakes such as inattention, misjudgment, and poor decision making.",
    },
    {
        id: 15,
        question: "If someone is injured in an accident you are involved in, what should you do regarding the injured person?",
        options: [
            "Leave the injured where they are and do not provide any assistance",
            "Always move injured people away from the scene immediately",
            "Do not move the injured unless necessary; keep them warm and provide first aid if trained"
        ],
        correctAnswer: 2,
        explanation: "Do not move injured people unnecessarily; keep them warm and administer first aid if you are able and it's necessary, while waiting for skilled help.",
    },
    {
        id: 16,
        question: "What does a single dashed yellow centerline indicate?",
        options: [
            "Passing is never permitted",
            "Both lanes travel in the same direction",
            "Vehicles in either direction may pass when it is safe to do so"
        ],
        correctAnswer: 2,
        explanation: "A single dashed yellow line separates traffic moving in opposite directions and indicates that vehicles traveling in either direction may pass when it is safe and legal to do so.",
    },
    {
        id: 17,
        question: "What does the hand signal of a driver's left arm and hand extended upward indicate?",
        options: [
            "The driver intends to turn right",
            "The driver intends to stop",
            "The driver intends to turn left"
        ],
        correctAnswer: 0,
        explanation: "Standard hand signals in the U.S. are: left arm straight out = left turn; left arm bent upward at the elbow = right turn; left arm bent downward at the elbow = slow or stop. Therefore, a left arm and hand extended upward indicates the driver intends to turn right.",
    },
    {
        id: 18,
        question: "When you hear or see an emergency vehicle approaching, what should you do?",
        options: [
            "Stop immediately where you are and wait",
            "Slowly proceed and allow the vehicle to pass",
            "Drive as far to the right as is safe and stop"
        ],
        correctAnswer: 2,
        explanation: "When an emergency vehicle with flashing lights and/or siren approaches from either direction on an undivided roadway, you must yield the right-of-way by pulling as far to the right side of the road as is safe and stopping until it has passed, avoiding stopping in an intersection.",
    },
    {
        id: 19,
        question: "Before you turn the ignition on, what should you do about seat belts?",
        options: [
            "Only ensure child passengers are belted",
            "Only ensure adult passengers are belted",
            "Make sure you and all passengers are properly buckled"
        ],
        correctAnswer: 2,
        explanation: "Before starting the vehicle, you should buckle your own seat belt and ensure that all passengers, adults and children, are properly restrained according to applicable seat belt and child safety seat laws.",
    },
    {
        id: 20,
        question: "When driving in fog, which actions should you take?",
        options: [
            "Speed up to clear the fog quickly",
            "Use high beams to see farther ahead",
            "Use low-beam headlights"
        ],
        correctAnswer: 2,
        explanation: "In fog, you should use low-beam headlights because high beams reflect off the fog and reduce visibility. You should also slow down and drive with extra caution.",
    },
    {
        id: 21,
        question: "What type of highway signs must drivers obey because they indicate required actions?",
        options: [
            "Regulatory signs",
            "Warning signs",
            "Information signs"
        ],
        correctAnswer: 0,
        explanation: "Regulatory signs indicate laws or requirements (such as speed limits, no-turn signs, and stop signs) and must be obeyed by drivers.",
    },
    {
        id: 22,
        question: "From a center two-way left-turn lane, which maneuver is allowed?",
        options: [
            "Making left turns into or out of the lane",
            "Passing slower traffic",
            "Driving straight through the intersection"
        ],
        correctAnswer: 0,
        explanation: "Center two-way left-turn lanes are reserved for making left turns from either direction and, where specifically permitted, legal U-turns. They must not be used for passing or for driving straight through an intersection.",
    },
    {
        id: 23,
        question: "What should you remember when driving on wet pavement?",
        options: [
            "Pavement is especially slippery right after it begins to rain",
            "You should reduce following distance while braking",
            "Wet roads never affect stopping distance"
        ],
        correctAnswer: 0,
        explanation: "Road surfaces are often most slippery right after it begins to rain because oil and residue have not yet washed away. You should reduce speed and increase following distance on wet pavement.",
    },
    {
        id: 24,
        question: "At an intersection with a yield sign, what must you do?",
        options: [
            "Always come to a full stop even if the road is clear",
            "Only yield to traffic on your left",
            "Slow down and yield the right-of-way to vehicles and pedestrians in the intersection or roadway you are entering"
        ],
        correctAnswer: 2,
        explanation: "At a yield sign, you must slow down and yield the right-of-way to vehicles and pedestrians already in or approaching the intersection or roadway you are entering. Stop if necessary to avoid interfering with other road users.",
    },
    {
        id: 25,
        question: "What should you do when roads are slippery?",
        options: [
            "Drive faster to get through the slippery patch quicker",
            "Slow down and use extra caution",
            "Maintain the posted speed limit even if conditions are poor"
        ],
        correctAnswer: 1,
        explanation: "When roads are slippery due to rain, snow, or ice, you should slow down, use extra caution, and increase your following distance to maintain control.",
    },
    {
        id: 26,
        question: "How should you scan the road ahead to prepare for hazards?",
        options: [
            "Continually scan the road and roadsides for potential hazards",
            "Drive with your left foot resting lightly on the brake",
            "Stare straight ahead at all times"
        ],
        correctAnswer: 0,
        explanation: "Search and identify potential problems early by scanning the entire roadway and both shoulders frequently.",
    },
    {
        id: 27,
        question: "When must you yield to an emergency vehicle?",
        options: [
            "Under no circumstances",
            "Only when other vehicles yield first",
            "When you see flashing lights or hear a siren"
        ],
        correctAnswer: 2,
        explanation: "Yield the right-of-way to any emergency vehicle using a siren or flashing lights by pulling over and stopping as necessary.",
    },
    {
        id: 28,
        question: "When you see a railroad crossing warning sign, what should you do?",
        options: [
            "Be prepared to stop if a train is nearby",
            "Speed up to cross before a train arrives",
            "Look for a way around any lowered gates"
        ],
        correctAnswer: 0,
        explanation: "A railroad warning sign indicates a potential train crossing; always be prepared to stop and obey gates and signals.",
    },
    {
        id: 29,
        question: "When may you turn right on a red light?",
        options: [
            "After coming to a complete stop and if no sign prohibits the turn",
            "Before coming to a complete stop",
            "Only if pedestrians have not started to cross the intersecting crosswalk"
        ],
        correctAnswer: 0,
        explanation: "You may turn right on red only after you make a full stop and if signs do not prohibit the turn; always yield to pedestrians and other traffic.",
    },
    {
        id: 30,
        question: "The space required to cross traffic safely depends on which factors?",
        options: [
            "Road and weather conditions and oncoming traffic",
            "Only whether you used your turn signal",
            "Only whether there is a stop sign"
        ],
        correctAnswer: 0,
        explanation: "You need adequate space to cross, and that space depends on roadway conditions, weather, and the speed and distance of oncoming vehicles.",
    },
    {
        id: 31,
        question: "At an uncontrolled intersection where two vehicles arrive simultaneously, which vehicle has the right-of-way?",
        options: [
            "The vehicle approaching from the left",
            "The vehicle whose driver honks first",
            "The vehicle approaching from the right"
        ],
        correctAnswer: 2,
        explanation: "At intersections of similar roads without traffic control devices, you must yield to vehicles approaching from your right.",
    },
    {
        id: 32,
        question: "Which action can cause a license suspension related to impaired driving enforcement?",
        options: [
            "Not switching off high beams near another vehicle",
            "Driving 10 mph over the posted speed limit",
            "Refusing to submit to a requested chemical test"
        ],
        correctAnswer: 2,
        explanation: "Refusing to submit to a requested chemical test when you are lawfully arrested or detained for suspected impaired driving can result in an administrative license suspension under implied consent laws, in addition to any criminal penalties.",
    },
    {
        id: 33,
        question: "When is it illegal to drive below the posted speed limit?",
        options: [
            "Only when driving in rural areas",
            "When you are in a construction zone",
            "When driving so slowly that you disrupt the normal flow of traffic"
        ],
        correctAnswer: 2,
        explanation: "It is illegal to drive so slowly that you impede or block the normal and reasonable movement of traffic, except when reduced speed is necessary for safety or to comply with the law.",
    },
    {
        id: 34,
        question: "Which of these is a common cause of traffic accidents?",
        options: [
            "Newer vehicles",
            "Inattentive driving",
            "Driving only on unfamiliar roads"
        ],
        correctAnswer: 1,
        explanation: "Inattentive or distracted driving is one of the most common causes of traffic crashes. Other frequent contributing factors include speeding and following too closely.",
    },
    {
        id: 35,
        question: "Where is parking prohibited?",
        options: [
            "In a parking lot.",
            "On a crosswalk or in a marked bicycle lane.",
            "On a hill where parking is not prohibited by signs."
        ],
        correctAnswer: 1,
        explanation: "It is illegal to park on a crosswalk or in a marked bicycle lane because these areas must remain clear for pedestrians and cyclists. Parking is generally permitted on hills (if you turn your wheels correctly and set the brake) and in parking lots, unless signs prohibit it.",
    },
    {
        id: 36,
        question: "Before backing out of a driveway with children nearby, what should you do?",
        options: [
            "Get out and walk to the rear of the vehicle to be sure the way is clear",
            "Sound your horn to warn children and then back up",
            "Rely only on your mirrors to check behind you"
        ],
        correctAnswer: 0,
        explanation: "When children are present, exit the vehicle and visually confirm the area behind it before backing out.",
    },
    {
        id: 37,
        question: "Which statement about winter driving is NOT true?",
        options: [
            "Winter is the most difficult driving season",
            "Checking antifreeze and washer fluid is especially important in winter",
            "Using cruise control in winter weather is safe"
        ],
        correctAnswer: 2,
        explanation: "Do not use cruise control in snow, ice, or similar hazardous conditions; winter driving requires extra precautions and vehicle checks.",
    },
    {
        id: 38,
        question: "Why must you use extra caution near a pedestrian carrying a white cane?",
        options: [
            "They are a law enforcement officer",
            "They are likely blind and may not see or hear your vehicle",
            "They are deaf and cannot hear approaching cars"
        ],
        correctAnswer: 1,
        explanation: "A white cane or guide dog indicates a pedestrian is blind; you must slow down, yield, and be prepared to stop to prevent injury.",
    },
    {
        id: 39,
        question: "If your vehicle's right wheels drift off the pavement, what should you do?",
        options: [
            "Immediately brake hard and stop",
            "Take your foot off the accelerator",
            "Accelerate and quickly steer back onto the road"
        ],
        correctAnswer: 1,
        explanation: "Do not panic; reduce speed by easing off the accelerator, regain control, check traffic, then gradually steer back onto the pavement.",
    },
    {
        id: 40,
        question: "About how fast does the average body metabolize alcohol?",
        options: [
            "About two drinks per hour",
            "About three drinks per hour",
            "About one standard drink per hour"
        ],
        correctAnswer: 2,
        explanation: "On average, the body processes roughly one standard drink each hour; factors such as weight, sex, and food intake can change this rate.",
    }
]

export const ohioPermitTestFaq: { question: string; answer: string }[] = [
    {
        question: "How many questions are on the Ohio BMV permit test (temps test)?",
        answer: "The Ohio BMV knowledge test — commonly called the 'temps test' — has 40 multiple-choice questions. You need to answer at least 30 correctly (75%) to pass."
    },
    {
        question: "What score do you need to pass the Ohio BMV temps test?",
        answer: "You need 30 out of 40 questions correct — a passing score of 75%. This is a lower passing threshold than most states. Missing 11 or more questions means you fail and must wait 1 day before retaking."
    },
    {
        question: "How many questions can you miss on the Ohio BMV test?",
        answer: "You can miss up to 10 questions on the 40-question knowledge test. Missing 11 or more means you fail."
    },
    {
        question: "Is there a time limit on the Ohio BMV temps test?",
        answer: "No. The Ohio BMV does not impose a time limit on the knowledge test. Read each question carefully — the 40-question exam covers a wide range of topics."
    },
    {
        question: "What is the retake policy if I fail the Ohio BMV test?",
        answer: "If you fail, you must wait 1 day before retaking. Use that time to review the sections where you struggled. Scoring consistently above 90% on practice tests before your appointment gives you the best chance of passing on the first try."
    },
    {
        question: "Can I take the Ohio BMV permit test online?",
        answer: "No. As of 2026, all Ohio BMV knowledge tests must be taken in person at an Ohio Bureau of Motor Vehicles office."
    },
    {
        question: "What is the minimum age to take the Ohio temps test and get a real estate license?",
        answer: "Ohio teens can take the temps test and apply for a real estate license at age 15½ (15 years and 6 months). After passing, teens must hold the permit for at least 6 months, complete required classroom hours, and complete 8 hours of behind-the-wheel instruction before applying for a probationary license."
    },
    {
        question: "What does 'OVI' mean on the Ohio BMV test?",
        answer: "OVI stands for Operating a Vehicle while Impaired — Ohio's term for what other states call DUI or DWI. The Ohio BMV permit test uses 'OVI' throughout. The legal limit is 0.08% BAC for drivers 21 and older, and 0.02% for drivers under 21."
    },
]
