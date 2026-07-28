import type { Question, StatePermitTestConfig } from '@/components/state-permit-test/types'

export const michiganPermitTestConfig: StatePermitTestConfig = {
    stateName: 'Michigan',
    stateCode: 'MI',
    departmentName: 'Michigan SOS',
    departmentAbbr: 'SOS',
    realQuestionCount: 40,
    realPassCount: 32,
    passPercent: 80,
    retakePolicy: 'Can retake after 1 day if failed',
    mainPageUrl: '/michigan-sos-permit-test',
    pageUrl: '/michigan-sos-permit-test-40-questions',
    stateGuideUrl: '/state-guides/michigan',
    handbookUrl: '/handbooks/michigan',
    year: 2026,
}

export const michiganPermitTestQuestions: Question[] = [
    {
        id: 1,
        question: "To reduce the effects of oncoming headlight glare at night, where should you direct your gaze?",
        options: [
            "Toward the right edge of the road ahead.",
            "Directly at the oncoming headlights.",
            "Over your shoulder."
        ],
        correctAnswer: 0,
        explanation: "If oncoming drivers do not dim lights, keep your eyes on the right edge of the road to avoid being blinded by glare.",
    },
    {
        id: 2,
        question: "Which is the best way to prevent alcohol-related crashes?",
        options: [
            "Call a taxi.",
            "Decide before you start drinking that you will not drive.",
            "Simply say, \"No thanks, I'm driving,\" if someone offers you a drink."
        ],
        correctAnswer: 1,
        explanation: "The only reliable way to avoid drinking and driving is to decide before you start drinking that you will not drive; alcohol impairs judgment and makes safe decisions harder after drinking.",
    },
    {
        id: 3,
        question: "What is the safest practice for children riding in a vehicle?",
        options: [
            "They may be held by a strong adult",
            "They may stand in the back of the vehicle",
            "They must be properly restrained in appropriate child seats or seat belts"
        ],
        correctAnswer: 2,
        explanation: "Children must be secured in appropriate child restraints or seat belts; never hold a child in your arms while the vehicle is moving.",
    },
    {
        id: 4,
        question: "What color pavement markings separate lanes traveling in opposite directions?",
        options: [
            "Yellow",
            "White",
            "Red",
            "Brown"
        ],
        correctAnswer: 0,
        explanation: "Yellow lines separate lanes of traffic moving in opposite directions; white lines separate same-direction lanes.",
    },
    {
        id: 5,
        question: "What is the minimum age to apply for a Graduated Driver Licensing (GDL) Level 1 Learner's License in Michigan?",
        options: [
            "14 years, 9 months",
            "15 years",
            "15 years, 6 months",
            "16 years"
        ],
        correctAnswer: 0,
        explanation: "In Michigan, a teen can apply for a GDL Level 1 Learner's License at a minimum age of 14 years and 9 months. This is one of the youngest licensing starter ages in the country.",
    },
    {
        id: 6,
        question: "When stopped in a travel lane on the roadway, what is allowed?",
        options: [
            "You may not stop in a travel lane for any reason.",
            "You may stop to drop off passengers.",
            "You may stop to look up an address briefly."
        ],
        correctAnswer: 0,
        explanation: "Do not stop in a travel lane; proceed to a safe area off the roadway to pull over. If you miss an exit, go to the next exit to turn around.",
    },
    {
        id: 7,
        question: "If an approaching train is near enough to be a danger, what must you do?",
        options: [
            "Not cross the tracks until the train has completely passed.",
            "Slow down and proceed with caution.",
            "Cross at your own risk if no signals are present."
        ],
        correctAnswer: 0,
        explanation: "If a train is approaching and could be dangerous, you must wait until it has passed before crossing the tracks.",
    },
    {
        id: 8,
        question: "When you encounter a flashing red traffic light at an intersection, what must you do?",
        options: [
            "Come to a complete stop, then proceed when the way is clear.",
            "Slow down and drive carefully through the intersection.",
            "Stop and wait for a flashing green light."
        ],
        correctAnswer: 0,
        explanation: "A flashing red light is treated like a stop sign: stop fully, look both ways, and go only when safe.",
    },
    {
        id: 9,
        question: "When entering the street from a driveway, what must you do?",
        options: [
            "Stop and proceed only when there are no pedestrians or vehicles approaching.",
            "Drive slowly and expect approaching vehicles to yield.",
            "Sound your horn to warn pedestrians and vehicles."
        ],
        correctAnswer: 0,
        explanation: "Always stop before entering the roadway from a driveway, yield to approaching vehicles and pedestrians, and cross the sidewalk area only when safe.",
    },
    {
        id: 10,
        question: "What should a driver do when encountering a steady yellow traffic light?",
        options: [
            "Slow to a stop unless already in the intersection.",
            "Accelerate to avoid a red light.",
            "Continue as they have the right-of-way."
        ],
        correctAnswer: 0,
        explanation: "A steady yellow light warns that a red light is about to appear; stop unless you are already within the intersection.",
    },
    {
        id: 11,
        question: "If two vehicles arrive at a four-way stop at the same time, who must yield?",
        options: [
            "The vehicle on the left must yield to the vehicle on the right",
            "The vehicle on the right must yield to the vehicle on the left",
            "Drivers should use hand motions to decide"
        ],
        correctAnswer: 0,
        explanation: "If two vehicles arrive simultaneously, the vehicle on the left must yield the right-of-way to the vehicle on the right.",
    },
    {
        id: 12,
        question: "Under Michigan GDL Level 2 rules, drivers under age 18 are prohibited from driving during which nighttime hours?",
        options: [
            "10:00 p.m. to 5:00 a.m.",
            "11:00 p.m. to 6:00 a.m.",
            "12:00 midnight to 5:00 a.m.",
            "9:00 p.m. to 5:00 a.m."
        ],
        correctAnswer: 0,
        explanation: "GDL Level 2 drivers are prohibited from driving between 10:00 p.m. and 5:00 a.m., unless driving to/from employment, going to/from an authorized activity, or accompanied by a parent, guardian, or licensed adult age 21 or older.",
    },
    {
        id: 13,
        question: "Does the type of alcoholic beverage (beer, wine, liquor) change how alcohol affects your reflexes and judgment?",
        options: [
            "No — impairment depends on how much alcohol is in your bloodstream",
            "Yes — beer impairs less than wine",
            "Yes — wine impairs less than beer",
            "Only mixed drinks cause strong effects"
        ],
        correctAnswer: 0,
        explanation: "All alcoholic beverages contain alcohol and will impair reflexes and judgment in proportion to the amount consumed.",
    },
    {
        id: 14,
        question: "When parallel parking, how close should your vehicle be to the curb?",
        options: [
            "Within 12 inches of the curb.",
            "Within 18 inches of the curb.",
            "Within 24 inches of the curb."
        ],
        correctAnswer: 0,
        explanation: "When parallel parked, position your wheels within 12 inches of the curb unless signs or markings indicate otherwise.",
    },
    {
        id: 15,
        question: "Under Michigan law, who must wear a seat belt?",
        options: [
            "The driver, any front-seat passenger, and any child under age 16",
            "Only the driver",
            "Only passengers in the back seat",
            "Only children under 8"
        ],
        correctAnswer: 0,
        explanation: "Michigan law requires the driver, front-seat passengers, and children under 16 to be properly restrained.",
    },
    {
        id: 16,
        question: "Which factor does not affect vehicle stopping distance?",
        options: [
            "The time of day.",
            "Your reaction time.",
            "The condition of your vehicle's brakes."
        ],
        correctAnswer: 0,
        explanation: "Stopping distance depends on reaction time, vehicle weight, brake condition, tires, roadway and weather; time of day does not directly affect stopping distance.",
    },
    {
        id: 17,
        question: "Under Michigan GDL Level 2 rules, how many passengers under age 21 are allowed in the vehicle without adult supervision?",
        options: [
            "Only one passenger under age 21 (unless they are immediate family members)",
            "Up to two passengers under age 21",
            "No passengers under age 21 at all",
            "Up to three passengers under age 21"
        ],
        correctAnswer: 0,
        explanation: "Under GDL Level 2 rules, teen drivers are limited to carrying no more than one passenger under age 21, unless the passengers are immediate family members, or the driver is accompanied by a parent/guardian, or is driving for employment or an authorized activity.",
    },
    {
        id: 18,
        question: "Signaling before turning, changing lanes, or leaving a curb is:",
        options: [
            "A good driving habit and required by law.",
            "Necessary only if other traffic is present.",
            "Necessary only during the maneuver itself."
        ],
        correctAnswer: 0,
        explanation: "You must signal in advance of lane changes or turns (at least 100 feet) to inform others of your intentions.",
    },
    {
        id: 19,
        question: "When is it appropriate to honk your horn?",
        options: [
            "To warn another road user — for example, if a child is about to run into the street.",
            "When traveling through an intersection.",
            "When passing a bicyclist."
        ],
        correctAnswer: 0,
        explanation: "Use your horn as a warning to others when they may not see you and a collision is possible, such as a child stepping into the street.",
    },
    {
        id: 20,
        question: "Under Michigan's Kelsey's Law, what cell phone restrictions apply to teens driving with a GDL Level 1 or Level 2 license?",
        options: [
            "They are prohibited from using a cell phone while driving for any reason, except for emergencies.",
            "They may use hands-free devices only.",
            "They are allowed to use phones for navigation only.",
            "There are no restrictions if they are over 16."
        ],
        correctAnswer: 0,
        explanation: "Kelsey's Law prohibits GDL Level 1 and Level 2 drivers from using a cell phone while driving, including for calls or texts (even hands-free). The only exception is to report an emergency.",
    },
    {
        id: 21,
        question: "How should you safely pass a bicycle?",
        options: [
            "Honk to alert the bicyclist",
            "Drive briefly in the bicycle lane to pass",
            "Slow down and give the bicyclist as much space as possible"
        ],
        correctAnswer: 2,
        explanation: "Slow and give bicyclists plenty of room when passing; do not crowd or create wind blast that could unbalance them.",
    },
    {
        id: 22,
        question: "Which statement about railroad crossings is true?",
        options: [
            "It is against the law to go around lowered gates.",
            "Not all crossings have flashing lights or gates.",
            "All of the above."
        ],
        correctAnswer: 2,
        explanation: "Do not drive around lowered gates; many crossings lack gates or lights—obey signs and any flaggers.",
    },
    {
        id: 23,
        question: "If you miss your exit on an interstate, what should you do?",
        options: [
            "Continue to the next exit and re-route.",
            "Quickly cut across traffic to reach the missed exit.",
            "Make a U-turn on the interstate."
        ],
        correctAnswer: 0,
        explanation: "If you pass your exit, keep driving to the next exit—do not make sudden or illegal maneuvers.",
    },
    {
        id: 24,
        question: "A driver entering public traffic from a driveway or private road should:",
        options: [
            "Yield to drivers already on the public road.",
            "Has the right-of-way.",
            "May force their way into traffic."
        ],
        correctAnswer: 0,
        explanation: "When entering from a private driveway or road, yield to traffic on the public road and merge safely.",
    },
    {
        id: 25,
        question: "At dusk or on overcast days, what lighting should you use?",
        options: [
            "Turn on your headlights (use low beams when near other vehicles)",
            "Use your parking lights only",
            "Use four-way flashers while driving"
        ],
        correctAnswer: 0,
        explanation: "Turn on your headlights at dusk or on overcast days and use low beams when within 1,000 feet of an approaching vehicle or within 500 feet of a vehicle you are following.",
    },
    {
        id: 26,
        question: "Which statement about winter driving is NOT true?",
        options: [
            "Checking antifreeze and windshield washer fluid is especially important in winter",
            "Winter is the most difficult driving season",
            "Using cruise control in winter weather is safe"
        ],
        correctAnswer: 2,
        explanation: "Do not use cruise control on snow, ice, or similar hazardous winter conditions. Winter driving demands extra caution; check fluids and consider snow tires to improve traction.",
    },
    {
        id: 27,
        question: "What does a single dashed yellow centerline mean?",
        options: [
            "Drivers in either direction may pass when it is safe.",
            "Both lanes travel in the same direction.",
            "Drivers may not pass from either direction."
        ],
        correctAnswer: 0,
        explanation: "A broken yellow centerline separates opposite-direction traffic and permits passing when safe.",
    },
    {
        id: 28,
        question: "What does a steady yellow arrow on a traffic signal indicate?",
        options: [
            "Slow and prepare to stop if safe",
            "You may immediately turn left after yielding",
            "Continue as if the light is green",
            "No turn allowed"
        ],
        correctAnswer: 0,
        explanation: "A steady yellow arrow warns that the signal is changing to red; you should stop if it is safe to do so.",
    },
    {
        id: 29,
        question: "If two vehicles reach an uncontrolled intersection at the same time, who yields?",
        options: [
            "The driver on the left yields to the driver on the right.",
            "The largest vehicle has the right-of-way.",
            "The car on the left has the right-of-way."
        ],
        correctAnswer: 0,
        explanation: "At uncontrolled intersections, the driver on the left must yield to the driver on the right and proceed when safe.",
    },
    {
        id: 30,
        question: "To apply for a GDL Level 2 Intermediate License in Michigan, how many hours of supervised practice driving must be logged?",
        options: [
            "50 hours, including at least 10 hours at night",
            "40 hours, including at least 5 hours at night",
            "60 hours, including at least 10 hours at night",
            "30 hours, with no nighttime requirement"
        ],
        correctAnswer: 0,
        explanation: "Before taking the driving skills test to graduate to a Level 2 Intermediate License, a teen must log at least 50 hours of supervised driving, including at least 10 hours at night.",
    },
    {
        id: 31,
        question: "If you stop along the road at night, which lights should you leave on?",
        options: [
            "Headlights (low beams) and emergency flashers",
            "All lights off",
            "Parking lights only",
            "High beams only"
        ],
        correctAnswer: 0,
        explanation: "If you stop at night, leave your low beam headlights on and use emergency flashers so others can see your vehicle.",
    },
    {
        id: 32,
        question: "If a tire blows out while you are driving, what should you do first?",
        options: [
            "Hold the steering wheel firmly, ease off the gas, and slow gradually.",
            "Brake hard immediately.",
            "Accelerate to stabilize the car."
        ],
        correctAnswer: 0,
        explanation: "Keep control, steer straight, let the vehicle slow gradually, then brake gently and pull off when safe.",
    },
    {
        id: 33,
        question: "What should drivers do in bad weather regarding following distance?",
        options: [
            "Increase their following distance.",
            "Increase their speed to get through quickly.",
            "Decrease their following distance."
        ],
        correctAnswer: 0,
        explanation: "In adverse weather, increase the space between your vehicle and the one ahead to give more time to react.",
    },
    {
        id: 34,
        question: "What does a single dashed white line separating lanes mean?",
        options: [
            "Drivers may change lanes or pass when it is safe.",
            "Lanes move in opposite directions.",
            "Drivers may not pass under any circumstances."
        ],
        correctAnswer: 0,
        explanation: "Dashed white lines separate lanes moving in the same direction and may be crossed to change lanes or pass if safe.",
    },
    {
        id: 35,
        question: "When parking downhill on a two-way street, how should you turn your wheels?",
        options: [
            "Turn them toward the curb (to the right).",
            "Turn them to the left.",
            "Keep them straight ahead."
        ],
        correctAnswer: 0,
        explanation: "Turn the wheels toward the curb when parked downhill so the vehicle will roll away from traffic if it moves.",
    },
    {
        id: 36,
        question: "Which headlights should you use when driving in fog?",
        options: [
            "Low beam headlights.",
            "High beam headlights.",
            "Parking lights."
        ],
        correctAnswer: 0,
        explanation: "Use low beams (and fog lights if equipped) in fog because high beams reflect off the fog and reduce visibility further.",
    },
    {
        id: 37,
        question: "When changing lanes, what should you do about signaling?",
        options: [
            "Signal before changing lanes and check blind spots by glancing over your shoulder.",
            "Rely only on your mirrors.",
            "Signal at least 500 feet in residential areas."
        ],
        correctAnswer: 0,
        explanation: "Signal in advance (about 100 feet in residential areas) and check mirrors and blind spots by looking over your shoulder before changing lanes.",
    },
    {
        id: 38,
        question: "Why should you avoid following other vehicles too closely?",
        options: [
            "You may not have time to stop if the vehicle ahead slows suddenly.",
            "You may not see the road between the cars.",
            "You may not see the vehicle's turn signals."
        ],
        correctAnswer: 0,
        explanation: "Maintaining a safe following distance gives you time to react and stop to avoid a rear-end collision.",
    },
    {
        id: 39,
        question: "If your accelerator sticks while driving, what action should you take?",
        options: [
            "Turn on your four-way flashers, apply brakes, and turn off the ignition to stop the engine when safe.",
            "Blow your horn to alert other drivers.",
            "Slam on your brakes immediately."
        ],
        correctAnswer: 0,
        explanation: "If the accelerator sticks, turn on hazard lights, apply brakes, shift to neutral, and turn off the ignition only when safe to avoid locking the steering.",
    },
    {
        id: 40,
        question: "Unless otherwise posted, what is the speed limit in platted subdivisions?",
        options: [
            "25 mph.",
            "35 mph.",
            "45 mph."
        ],
        correctAnswer: 0,
        explanation: "Platted residential subdivision speed limits are typically 25 mph unless posted otherwise.",
    }
]

export const michiganPermitTestFaq: { question: string; answer: string }[] = [
    {
        question: "How many questions are on the Michigan SOS permit test?",
        answer: "The Michigan Secretary of State (SOS) knowledge test has 40 multiple-choice questions. You need to answer at least 32 correctly (80%) to pass and receive your real estate license."
    },
    {
        question: "What score do you need to pass the Michigan permit test?",
        answer: "You need 32 out of 40 correct — a passing score of 80%. You can miss up to 8 questions. Missing 9 or more means you fail and must wait at least 1 day before retaking."
    },
    {
        question: "How many questions can you miss on the Michigan SOS knowledge test?",
        answer: "You can miss up to 8 questions on the 40-question test. If you miss 9 or more, you fail. You must wait 1 day before retaking the test."
    },
    {
        question: "Is there a time limit on the Michigan SOS permit test?",
        answer: "Michigan does not impose a strict time limit on the knowledge test. Take the time you need to read carefully — given 40 questions, read each one thoroughly before answering."
    },
    {
        question: "What happens if I fail the Michigan permit test?",
        answer: "If you fail, you must wait 1 day before retaking. Review the Michigan Driver's Manual focusing on areas where you missed questions. Scoring consistently above 85% on practice tests before your appointment is the best preparation."
    },
    {
        question: "Can I take the Michigan permit test online?",
        answer: "As of 2026, the Michigan SOS knowledge test must be taken in person at a Secretary of State branch office. Visit the Michigan SOS website to find your nearest branch and schedule an appointment."
    },
    {
        question: "What is the minimum age to get a real estate license in Michigan?",
        answer: "You must be at least 14 years and 9 months old (14¾) to apply for a Michigan real estate license — one of the youngest permit ages in the country. Permit holders may drive only when supervised by a licensed driver age 21 or older seated in the front seat."
    },
    {
        question: "What is Michigan's 'Super Drunk' law?",
        answer: "Michigan's 'Super Drunk' law (High BAC OWI) applies to drivers with a BAC of 0.17% or higher — double the legal limit. Penalties are much harsher than standard OWI: up to 180 days in jail, higher fines, longer license suspension, and mandatory ignition interlock. This Michigan-specific law is frequently tested on the knowledge exam."
    },
]
