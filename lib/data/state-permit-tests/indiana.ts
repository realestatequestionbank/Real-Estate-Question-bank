import type { Question, StatePermitTestConfig } from '@/components/state-permit-test/types'

export const indianaPermitTestConfig: StatePermitTestConfig = {
    stateName: 'Indiana',
    stateCode: 'IN',
    departmentName: 'Indiana BMV',
    departmentAbbr: 'BMV',
    realQuestionCount: 34,
    realPassCount: 27,
    passPercent: 79,
    retakePolicy: 'Can retake after 1 day if failed',
    mainPageUrl: '/indiana-bmv-permit-test',
    pageUrl: '/indiana-bmv-permit-test-34-questions',
    stateGuideUrl: '/state-guides/indiana',
    handbookUrl: '/handbooks/indiana',
    year: 2026,
}

export const indianaPermitTestQuestions: Question[] = [
    {
        id: 1,
        question: "How is drinking alcohol and driving classified?",
        options: [
            "A minor traffic safety problem",
            "A serious traffic safety problem",
            "Safe if you have only had a few drinks"
        ],
        correctAnswer: 1,
        explanation: "Driving while impaired by alcohol or drugs is a serious safety issue and greatly increases crash risk.",
    },
    {
        id: 2,
        question: "When turning left you must yield the right-of-way to:",
        options: [
            "Other drivers already in the intersection",
            "Oncoming traffic and pedestrians",
            "Pedestrians only if they are in a crosswalk"
        ],
        correctAnswer: 1,
        explanation: "Left-turning drivers must yield to oncoming traffic and to pedestrians and bicyclists in the intersection.",
    },
    {
        id: 3,
        question: "The space you need to cross traffic safely depends on:",
        options: [
            "Road conditions, weather, and oncoming traffic",
            "Whether there is a stop sign present",
            "Whether you used your turn signal"
        ],
        correctAnswer: 0,
        explanation: "The gap needed to cross or turn depends on road surface, weather, and the speed and distance of oncoming traffic.",
    },
    {
        id: 4,
        question: "Which factors affect your vehicle's braking distance?",
        options: [
            "Vehicle speed, condition of brakes and tires, and pavement condition.",
            "Only the age of the vehicle.",
            "Only the number of passengers.",
            "Only the color of the vehicle."
        ],
        correctAnswer: 0,
        explanation: "Braking distance depends on how fast you are traveling, the state of your brakes and tires, and road surface conditions such as wetness or ice.",
    },
    {
        id: 5,
        question: "If you hit an unattended parked car and can't find the owner, what must you do?",
        options: [
            "Leave a written note with your name, address, and accident details",
            "Stay until the police arrive",
            "Assume you have done enough and leave"
        ],
        correctAnswer: 0,
        explanation: "If you strike an unattended vehicle, leave a written notice with your name, address, and the circumstances of the accident if the owner cannot be located.",
    },
    {
        id: 6,
        question: "Lanes of traffic moving in the same direction are separated by which color lines?",
        options: [
            "White lines.",
            "Yellow lines.",
            "Red lines.",
            "Green lines."
        ],
        correctAnswer: 0,
        explanation: "White lines (solid or broken) are used to separate lanes moving in the same direction; yellow lines separate opposing traffic.",
    },
    {
        id: 7,
        question: "When stopped for a traffic violation or equipment check, what must the driver produce?",
        options: [
            "Their driver license, proof of registration, and proof of insurance.",
            "Only proof of insurance.",
            "Only proof of registration.",
            "Only their license."
        ],
        correctAnswer: 0,
        explanation: "Drivers must present their license, vehicle registration, and proof of insurance when requested by law enforcement.",
    },
    {
        id: 8,
        question: "When may you cross a dashed white line?",
        options: [
            "When it is safe to change lanes",
            "Only during daylight hours",
            "At any time regardless of conditions"
        ],
        correctAnswer: 0,
        explanation: "Broken white lines separate lanes moving in the same direction and may be crossed to change lanes when safe.",
    },
    {
        id: 9,
        question: "When you reach an intersection with a flashing red light, what must you do?",
        options: [
            "Come to a full stop, yield the right-of-way, and go when it is safe.",
            "Stop only if other cars are approaching.",
            "Slow down and proceed without stopping.",
            "Drive through if the intersection seems clear."
        ],
        correctAnswer: 0,
        explanation: "A flashing red light requires a full stop and yielding the right-of-way, just like a stop sign.",
    },
    {
        id: 10,
        question: "When driving through an area where children are playing, you should expect them to:",
        options: [
            "Know when it is safe to cross",
            "Always stop at the curb before crossing",
            "Possibly run into the street without looking"
        ],
        correctAnswer: 2,
        explanation: "Children can act unpredictably; reduce speed and be prepared to stop at any time.",
    },
    {
        id: 11,
        question: "Two solid white lines painted across a traffic lane indicate the boundaries of:",
        options: [
            "A bicycle lane",
            "A pedestrian crosswalk",
            "A no-passing zone for vehicles only"
        ],
        correctAnswer: 1,
        explanation: "Two solid white lines can mark a crosswalk; drivers must yield to pedestrians in marked crosswalks.",
    },
    {
        id: 12,
        question: "Taking drugs along with alcohol generally:",
        options: [
            "Increases the risk of causing a crash",
            "Is no more dangerous than alcohol alone",
            "Lessens the effect of alcohol on driving ability"
        ],
        correctAnswer: 0,
        explanation: "Combining alcohol with other drugs (prescription, over-the-counter, or illegal) increases impairment and crash risk.",
    },
    {
        id: 13,
        question: "If you miss your exit on an interstate, what is the correct action?",
        options: [
            "Continue to the next exit and safely return to your destination.",
            "Stop and make a U-turn on the shoulder.",
            "Back up on the exit ramp.",
            "Signal and cross multiple lanes at once to get back."
        ],
        correctAnswer: 0,
        explanation: "Do not stop or back up on the highway; proceed to the next exit and safely turn around to return to the desired exit.",
    },
    {
        id: 14,
        question: "What lane entitlement do motorcycles have?",
        options: [
            "The same full lane width as other motor vehicles",
            "They must use the bicycle lane",
            "They are limited to half a lane"
        ],
        correctAnswer: 0,
        explanation: "Motorcycles are entitled to a full lane just like other vehicles and should be treated accordingly.",
    },
    {
        id: 15,
        question: "If you experience a tire blowout while driving, you should:",
        options: [
            "Immediately stomp on the brakes",
            "Do not immediately use your brakes; take your foot off the gas",
            "Keep accelerating to reach the shoulder quickly"
        ],
        correctAnswer: 1,
        explanation: "Take your foot off the gas, avoid sudden braking, gradually slow, then steer to a safe place to stop.",
    },
    {
        id: 16,
        question: "How can you avoid being in a truck or bus driver's blind spot?",
        options: [
            "Avoid driving alongside them and avoid tailgating; do not remain beside them for extended periods.",
            "Always pass on the right, even in tight spaces.",
            "Flash your lights to get their attention.",
            "Drive directly behind them very close."
        ],
        correctAnswer: 0,
        explanation: "Large vehicles have significant blind spots at the sides and rear; avoid lingering alongside and give them plenty of space when passing.",
    },
    {
        id: 17,
        question: "When approaching a railroad crossing that has no active signals or gates, you should:",
        options: [
            "Always come to a complete stop",
            "Slow down and be prepared to stop if you see or hear a train",
            "Assume all crossings have signals and proceed normally"
        ],
        correctAnswer: 1,
        explanation: "At unprotected crossings slow down, look and listen for trains, and be prepared to stop if one is approaching.",
    },
    {
        id: 18,
        question: "A double solid yellow centerline down a two-lane road means:",
        options: [
            "Traffic moves in opposite directions and passing is prohibited",
            "Traffic moves in opposite directions and passing is allowed when safe",
            "Lanes move in the same direction and passing is prohibited"
        ],
        correctAnswer: 0,
        explanation: "Double solid yellow lines separate opposite-direction traffic and prohibit passing from either direction.",
    },
    {
        id: 19,
        question: "How should you regard railroad crossings?",
        options: [
            "Dangerous — always look and listen for trains.",
            "Safe to cross without looking.",
            "A place safe to park."
        ],
        correctAnswer: 0,
        explanation: "Railroad crossings are hazardous; always look both ways, listen, and obey signals or flaggers before crossing.",
    },
    {
        id: 20,
        question: "What does an 'End school zone' sign indicate?",
        options: [
            "The end of the reduced speed school zone.",
            "The beginning of a reduced speed zone.",
            "The area with more children present."
        ],
        correctAnswer: 0,
        explanation: "The 'End school zone' sign marks the point where the special school zone speed limit and restrictions end.",
    },
    {
        id: 21,
        question: "Why must drivers be more cautious at night?",
        options: [
            "Traffic moves faster at night",
            "There is a larger volume of traffic at night",
            "Drivers cannot see as well in the dark"
        ],
        correctAnswer: 2,
        explanation: "Reduced visibility at night makes it harder to see hazards; headlights must be used from half hour after sunset to half hour before sunrise.",
    },
    {
        id: 22,
        question: "Traffic moving in opposite directions is separated by what color lines?",
        options: [
            "Yellow lines",
            "White lines",
            "Red lines"
        ],
        correctAnswer: 0,
        explanation: "Yellow centerlines separate traffic moving in opposite directions; white lines separate traffic moving the same direction.",
    },
    {
        id: 23,
        question: "When your visibility decreases, your first response should be to:",
        options: [
            "Turn on your headlights",
            "Reduce your speed",
            "Turn on your windshield wipers"
        ],
        correctAnswer: 1,
        explanation: "Reducing speed gives you more time to react when visibility is limited or road conditions are hazardous.",
    },
    {
        id: 24,
        question: "What does a regulatory sign with a red circle and slash mean?",
        options: [
            "The action shown is forbidden",
            "Drivers should come to a complete stop",
            "Some drivers must yield"
        ],
        correctAnswer: 0,
        explanation: "A red circle with a slash over a symbol indicates that the depicted action is prohibited.",
    },
    {
        id: 25,
        question: "Which headlights should you use when driving in fog?",
        options: [
            "Low beam headlights.",
            "High beam headlights.",
            "Parking lights only."
        ],
        correctAnswer: 0,
        explanation: "Use low beam headlights (and fog lights if equipped) in fog, rain, or snow; high beams reduce visibility by reflecting off moisture.",
    },
    {
        id: 26,
        question: "Which recommendation does NOT promote safe night driving?",
        options: [
            "Carry a flashlight in your vehicle",
            "Keep the windshield clean",
            "Be aware that tinted windows reduce nighttime visibility"
        ],
        correctAnswer: 0,
        explanation: "Carrying a flashlight is not one of the primary measures for safe night driving; the focus should be on clean windshield and avoiding dark-tint that reduces visibility.",
    },
    {
        id: 27,
        question: "When two vehicles arrive at an intersection simultaneously with no signs or signals, who has the right-of-way?",
        options: [
            "The vehicle approaching from the right",
            "The vehicle approaching from the left",
            "The vehicle whose driver honks first"
        ],
        correctAnswer: 0,
        explanation: "At intersections of similar roads without controls, yield to traffic coming from your right.",
    },
    {
        id: 28,
        question: "You should not pass another vehicle when:",
        options: [
            "On a hill or curve",
            "You are driving at the speed limit",
            "You are approaching an intersection with wide visibility"
        ],
        correctAnswer: 0,
        explanation: "Do not pass on hills, curves, at intersections, at railroad crossings, or when sight distance is limited.",
    },
    {
        id: 29,
        question: "If someone is injured in an accident you are involved in, what should you do?",
        options: [
            "Moved the injured away from the scene immediately.",
            "Always leave the injured where they are.",
            "Not move the injured unnecessarily. Keep the injured warm and administer first aid."
        ],
        correctAnswer: 2,
        explanation: "Avoid moving injured persons unless necessary; keep them warm, control severe bleeding, and wait for professional medical help.",
    },
    {
        id: 30,
        question: "What do regulatory signs tell drivers?",
        options: [
            "What drivers must or must not do",
            "That the area is especially dangerous",
            "They are warning signs (diamond-shaped, yellow/green)"
        ],
        correctAnswer: 0,
        explanation: "Regulatory signs instruct drivers about legal requirements (speed limits, turn restrictions, etc.) and are often rectangular with black on white markings.",
    },
    {
        id: 31,
        question: "What does the posted speed limit sign represent?",
        options: [
            "The maximum safe driving speed under ideal road and weather conditions.",
            "A recommended speed for heavy traffic only.",
            "The exact safe speed for all drivers."
        ],
        correctAnswer: 0,
        explanation: "The posted limit is the maximum legal speed under ideal conditions; adjust downward for adverse conditions.",
    },
    {
        id: 32,
        question: "Who must yield if a driver is turning and a pedestrian is crossing without a traffic light?",
        options: [
            "The driver must yield to the pedestrian",
            "The pedestrian must yield to the driver",
            "Whoever started moving last must yield"
        ],
        correctAnswer: 0,
        explanation: "Drivers must yield to pedestrians in intersections without traffic signals to prevent collisions.",
    },
    {
        id: 33,
        question: "When should you reduce speed due to road or environmental conditions?",
        options: [
            "On narrow or winding roads, at intersections or railroad crossings, and when roads are wet or slippery",
            "Only when you see a police car",
            "Only when entering a highway with traffic"
        ],
        correctAnswer: 0,
        explanation: "Slow down in areas or conditions that reduce safety: narrow/winding roads, intersections, crossings, and slippery surfaces.",
    },
    {
        id: 34,
        question: "When an emergency vehicle with flashing lights is nearby, you should:",
        options: [
            "Stop your vehicle immediately and prevent the emergency vehicle from passing",
            "Speed up to avoid the emergency vehicle",
            "Make every effort to give the emergency vehicle a clear path of travel (pull to side when safe)"
        ],
        correctAnswer: 2,
        explanation: "You must allow emergency vehicles using sirens or lights a clear path; pull over to the side and stop if it is safe to do so.",
    }
]

export const indianaPermitTestFaq: { question: string; answer: string }[] = [
    {
        question: "How many questions are on the Indiana BMV permit test?",
        answer: "The Indiana Bureau of Motor Vehicles (BMV) knowledge test has 34 multiple-choice questions. You need to answer at least 27 correctly to pass — a passing threshold of approximately 79%."
    },
    {
        question: "What score do you need to pass the Indiana permit test?",
        answer: "You need 27 out of 34 correct — about 79%. This is slightly different from the standard 80% threshold in most states. You can miss up to 7 questions; missing 8 or more means you fail."
    },
    {
        question: "How many questions can you miss on the Indiana BMV test?",
        answer: "You can miss up to 7 questions on the 34-question test. Missing 8 or more means you fail and must wait at least 1 day before retaking the test."
    },
    {
        question: "Is there a time limit on the Indiana permit knowledge test?",
        answer: "Indiana does not impose a strict time limit on the knowledge test. Read each question carefully and take the time you need — accuracy matters more than speed."
    },
    {
        question: "What happens if I fail the Indiana BMV permit test?",
        answer: "If you fail, you must wait 1 day before retaking the test. Review the Indiana Driver's Manual, focusing on areas where you missed questions. Scoring consistently above 85% on practice tests before your appointment is the best preparation."
    },
    {
        question: "Can I take the Indiana permit test online?",
        answer: "As of 2026, the Indiana BMV knowledge test must be taken in person at a BMV branch location. Visit the BMV website to find a branch near you and check appointment availability."
    },
    {
        question: "What is the minimum age to get a real estate license in Indiana?",
        answer: "You must be at least 15 years old to apply for an Indiana real estate license. Under GDL rules, permit holders must be supervised in the front seat by a licensed parent, guardian, or spouse at least 21 years old, or any other licensed relative who is at least 25 years old."
    },
    {
        question: "What term does Indiana use instead of DUI?",
        answer: "Indiana uses OWI — Operating While Intoxicated — rather than DUI. The legal BAC limit is 0.08% for drivers 21 and older. Drivers under 21 face a 0.02% zero tolerance limit."
    },
]
