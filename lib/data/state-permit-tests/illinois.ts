import type { Question, StatePermitTestConfig } from '@/components/state-permit-test/types'

export const illinoisPermitTestConfig: StatePermitTestConfig = {
    stateName: 'Illinois',
    stateCode: 'IL',
    departmentName: 'Illinois SOS',
    departmentAbbr: 'SOS',
    realQuestionCount: 35,
    realPassCount: 28,
    passPercent: 80,
    retakePolicy: 'Can retake after 1 day if failed',
    mainPageUrl: '/illinois-sos-permit-test',
    pageUrl: '/illinois-sos-permit-test-35-questions',
    stateGuideUrl: '/state-guides/illinois',
    handbookUrl: '/handbooks/illinois',
    year: 2026,
}

export const illinoisPermitTestQuestions: Question[] = [
    {
        id: 1,
        question: "When parking uphill where there is no curb, which way should you turn your front wheels?",
        options: [
            "Turn them toward the edge of the road (to the right)",
            "Turn them away from the edge of the road (to the left)",
            "Keep them straight"
        ],
        correctAnswer: 0,
        explanation: "When parking uphill without a curb, turn your front wheels toward the edge of the road. If your brakes fail, the vehicle will roll away from traffic and off the roadway instead of into the lane.",
    },
    {
        id: 2,
        question: "Is it required to signal when changing lanes?",
        options: [
            "False",
            "True"
        ],
        correctAnswer: 1,
        explanation: "You must signal whenever you change lanes so other drivers, motorcyclists, bicyclists, and pedestrians know your intentions and can adjust safely. Signaling is required even if you think no one is around.",
    },
    {
        id: 3,
        question: "Does ''yield'' also require you to stop if you cannot merge safely into traffic?",
        options: [
            "False",
            "True"
        ],
        correctAnswer: 1,
        explanation: "A yield sign means you must slow down and be prepared to stop. If you cannot safely merge into traffic, you must stop and wait until there is a safe gap before proceeding.",
    },
    {
        id: 4,
        question: "The statement 'Motorcyclists are entitled to the full width of a traffic lane and should be passed like other vehicles' is:",
        options: [
            "False",
            "True"
        ],
        correctAnswer: 1,
        explanation: "Motorcyclists are entitled to use a full traffic lane just like any other vehicle. When passing a motorcycle, move fully into the adjacent lane and give them the same space and clearance you would give a car.",
    },
    {
        id: 5,
        question: "You are being tailgated. What should you do regarding following distance?",
        options: [
            "Maintain the same distance as usual",
            "Increase the space ahead of your vehicle",
            "Decrease your following distance"
        ],
        correctAnswer: 1,
        explanation: "If you are being tailgated, increase your following distance from the vehicle ahead. This gives you more time to slow down gradually and reduces the chance of a rear-end collision if you must brake.",
    },
    {
        id: 6,
        question: "When passing another vehicle traveling in the same direction, you should:",
        options: [
            "Pass as safely and as quickly as possible",
            "Drive at the same speed as the vehicle you are passing",
            "Pass as slowly as possible"
        ],
        correctAnswer: 0,
        explanation: "When you pass, you should move into the passing lane, accelerate to safely and efficiently overtake the other vehicle, and then return to your lane as soon as it is safe. Do not linger in the blind spot or beside the other vehicle. Return only when you can see the front of the passed vehicle in your rearview mirror.",
    },
    {
        id: 7,
        question: "What is the best action if you become tired while driving?",
        options: [
            "Stop to rest or change drivers",
            "Drink coffee and continue",
            "Open a window and keep driving"
        ],
        correctAnswer: 0,
        explanation: "The safest option when tired is to stop and rest or have another licensed driver take over.",
    },
    {
        id: 8,
        question: "When weather or low visibility requires lights, which should you use?",
        options: [
            "Low beam headlights",
            "High beam headlights",
            "Parking lights"
        ],
        correctAnswer: 0,
        explanation: "In rain, fog, or snow, use low beam headlights. High beams can reflect off moisture in the air and create glare, making it harder to see. Parking lights alone are not sufficient for visibility or to meet legal requirements when visibility is reduced.",
    },
    {
        id: 9,
        question: "If your vehicle has a two-part (lap and shoulder) seat belt, how should you wear it?",
        options: [
            "Use only the shoulder belt",
            "Use both the lap and shoulder belts",
            "Use only the lap belt"
        ],
        correctAnswer: 1,
        explanation: "A combination lap and shoulder belt is designed to be worn together: the lap belt low and snug across the hips, and the shoulder belt across the chest and away from the neck. Using only one part greatly reduces protection and increases the risk of serious injury in a crash.",
    },
    {
        id: 10,
        question: "At a railroad crossing with no flashing lights or gates, what should you do?",
        options: [
            "Proceed at normal speed",
            "Slow down, look and listen for trains",
            "Speed up to clear the crossing quickly"
        ],
        correctAnswer: 1,
        explanation: "At a railroad crossing without flashing lights or gates, you must approach with caution: slow down, look carefully in both directions, and listen for trains. Cross only when you are sure no train is coming and there is enough space to clear the tracks without stopping.",
    },
    {
        id: 11,
        question: "How do stopping distances and collision severity change as a vehicle's speed increases?",
        options: [
            "Increase as a vehicle's speed increases.",
            "Are not affected by a vehicle's speed.",
            "Decrease as a vehicle's speed increases."
        ],
        correctAnswer: 0,
        explanation: "As speed increases, both stopping distance and crash severity increase. Your vehicle needs more distance to come to a complete stop, and the force of impact in a collision is much greater at higher speeds. This is why you should leave more following distance as your speed rises.",
    },
    {
        id: 12,
        question: "Under Illinois's Graduated Driver Licensing (GDL) program, what are the nighttime driving restriction hours for drivers under age 18?",
        options: [
            "10:00 p.m. to 6:00 a.m. Sunday through Thursday, and 11:00 p.m. to 6:00 a.m. Friday and Saturday",
            "11:00 p.m. to 5:00 a.m. every night",
            "12:00 midnight to 6:00 a.m. every night",
            "10:00 p.m. and 6:00 a.m. every night"
        ],
        correctAnswer: 0,
        explanation: "Illinois nighttime driving restrictions for drivers under 18 (in the Permit and Initial Licensing Phases) are Sunday through Thursday from 10:00 p.m. to 6:00 a.m., and Friday and Saturday from 11:00 p.m. to 6:00 a.m. Local curfews may differ.",
    },
    {
        id: 13,
        question: "For quick and controlled turns, where should your hands be on the steering wheel?",
        options: [
            "Next to each other on the top of the steering wheel.",
            "On opposite sides of the steering wheel.",
            "On the top and bottom of the steering wheel."
        ],
        correctAnswer: 1,
        explanation: "For quick, controlled turns, place your hands on opposite sides of the steering wheel, typically around the 9 and 3 o’clock positions. This gives you better leverage, balance, and control of the vehicle, especially at higher speeds or during sudden maneuvers.",
    },
    {
        id: 14,
        question: "When your traffic signal turns green while waiting at an intersection, should you still look before proceeding?",
        options: [
            "False",
            "True"
        ],
        correctAnswer: 1,
        explanation: "When the light turns green, you must still look left, right, and ahead before moving. A green light means you may go if the intersection is clear, but other drivers may run the red light or pedestrians may still be crossing. Checking first helps prevent collisions.",
    },
    {
        id: 15,
        question: "To reduce the chance of losing traction on wet roads, what should you do?",
        options: [
            "Make abrupt turns.",
            "Slow down.",
            "Apply the brakes firmly."
        ],
        correctAnswer: 1,
        explanation: "On wet roads, slow down to reduce the risk of losing traction or hydroplaning. Lower speed allows your tires to maintain better contact with the road. Avoid sudden steering, hard braking, or quick acceleration, as these can cause skids when the road is slippery.",
    },
    {
        id: 16,
        question: "A broken yellow line next to a solid yellow line means:",
        options: [
            "Passing is permitted from the lane next to the broken yellow line",
            "Passing is permitted from the lane next to the solid yellow line",
            "Passing is not permitted from either direction"
        ],
        correctAnswer: 0,
        explanation: "A broken yellow line next to a solid yellow line means passing is allowed only for traffic on the side with the broken line, and not allowed for traffic on the side with the solid line. This marking separates traffic moving in opposite directions and controls where it is safe and legal to pass.",
    },
    {
        id: 17,
        question: "If you are on a highway next to a single broken white line, are you allowed to cross it?",
        options: [
            "You cannot cross the line to pass",
            "You may cross to pass or change lanes",
            "You may only cross it from the left lane"
        ],
        correctAnswer: 1,
        explanation: "A single broken white line separates lanes of traffic moving in the same direction. You may cross it to change lanes or pass when it is safe and legal to do so, after checking mirrors, blind spots, and signaling.",
    },
    {
        id: 18,
        question: "What is the penalty for illegally passing a stopped school bus in Illinois?",
        options: [
            "Driving privilege suspension and a mandatory $300 fine",
            "A 60-day suspension of driving privileges",
            "A $30 fine and 14-day suspension"
        ],
        correctAnswer: 0,
        explanation: "In Illinois, illegally passing a stopped school bus with its red lights flashing and stop arm extended carries a mandatory minimum $300 fine and a suspension of driving privileges for the first offense. The law is strict to protect children who may be crossing the road around the bus.",
    },
    {
        id: 19,
        question: "If you are involved in or come upon a traffic crash, should you stop in a safe, well-lit public place that does not obstruct traffic if able?",
        options: [
            "True",
            "False"
        ],
        correctAnswer: 0,
        explanation: "If you are involved in or come upon a crash, you must stop, but you should do so in a safe, well-lit public place that does not block traffic if your vehicle can be moved. Then check for injuries, call 911, and exchange information. Stopping in a safe location helps prevent additional collisions.",
    },
    {
        id: 20,
        question: "Which best describes how defensive drivers think?",
        options: [
            "They expect no breaks and give none.",
            "They consider what other drivers might do and are prepared to react.",
            "They assume other drivers will do the right thing."
        ],
        correctAnswer: 1,
        explanation: "Defensive drivers constantly consider what other drivers, pedestrians, and cyclists might do and stay ready to react safely. They do not assume others will always follow the rules; instead, they anticipate mistakes and leave space and time to respond.",
    },
    {
        id: 21,
        question: "When a pedestrian using a guide dog or carrying a white cane is crossing, must you yield to them?",
        options: [
            "True",
            "False"
        ],
        correctAnswer: 0,
        explanation: "Blind or partially blind pedestrians using a guide dog or white cane have the right-of-way. You must always yield, stop if necessary, and allow them to cross safely. Never honk, rush, or try to go around them.",
    },
    {
        id: 22,
        question: "If a truck or bus is making a right turn and you also need to turn right, what should you do?",
        options: [
            "Squeeze between the large vehicle and the curb to turn",
            "Wait until the truck or bus has completed its turn before you turn",
            "Turn quickly before the truck or bus finishes its turn"
        ],
        correctAnswer: 1,
        explanation: "Large vehicles need extra space to complete turns; wait until they finish before you turn to avoid collisions.",
    },
    {
        id: 23,
        question: "If you must make an emergency stop on an interstate, what is the correct action?",
        options: [
            "Get out of your vehicle and flag down help",
            "Sound your horn at passing cars",
            "Pull off the road, turn on emergency flashers, and stay in your vehicle if possible"
        ],
        correctAnswer: 2,
        explanation: "On an interstate, only stop for emergencies. Pull completely off the roadway if possible, turn on your hazard flashers so others see you, and stay inside your vehicle with seat belt fastened if it is safe. Walking on the interstate or standing near traffic is very dangerous.",
    },
    {
        id: 24,
        question: "Which of the following is unlawful when passing?",
        options: [
            "Passing in any marked no-passing zone",
            "Passing another vehicle over a railroad crossing",
            "Both of the above"
        ],
        correctAnswer: 2,
        explanation: "Passing is illegal and unsafe in marked no‑passing zones and at or over railroad crossings. These areas have limited visibility or special hazards, so you must stay in your lane and wait until it is legal and safe to pass.",
    },
    {
        id: 25,
        question: "For the first 12 months of licensing (or until the driver turns 18), the number of passengers in an Illinois teen's vehicle is limited to:",
        options: [
            "Only one passenger under age 20 (unless the passenger is a sibling, stepsibling, child, or stepchild of the driver)",
            "Up to two passengers under age 20",
            "No passengers under age 20 at all",
            "Three passengers of any age"
        ],
        correctAnswer: 0,
        explanation: "In Illinois, during the first 12 months of licensing or until the driver turns 18, the number of passengers is limited to one person under age 20, unless the passenger is a sibling, stepsibling, child, or stepchild of the driver.",
    },
    {
        id: 26,
        question: "Must headlights be on from sunset to sunrise?",
        options: [
            "False",
            "True"
        ],
        correctAnswer: 1,
        explanation: "Headlights should be on from sunset to sunrise and any time visibility is poor, such as in rain, snow, or fog. This makes it easier for you to see and for other drivers to see you, reducing the risk of collisions.",
    },
    {
        id: 27,
        question: "When preparing to exit an interstate, when is the correct time to reduce speed?",
        options: [
            "As you approach the deceleration lane.",
            "Immediately upon entering the deceleration lane.",
            "About halfway through the deceleration lane."
        ],
        correctAnswer: 1,
        explanation: "On an interstate, stay at highway speed until you are actually in the deceleration lane. Once in the deceleration lane, reduce speed smoothly to the posted advisory speed for the exit ramp. Slowing too early can surprise drivers behind you and create a hazard in the through-traffic lane.",
    },
    {
        id: 28,
        question: "When entering traffic after parking at a curb, what should you do?",
        options: [
            "Drive more slowly than traffic for 200 feet",
            "Wait for a large enough gap to accelerate to traffic speed",
            "Wait for the first two vehicles to pass then merge"
        ],
        correctAnswer: 1,
        explanation: "Before leaving the curb, signal, check mirrors, and look over your shoulder for traffic. Enter only when there is a gap large enough for you to accelerate up to the speed of traffic without forcing other drivers to brake or swerve.",
    },
    {
        id: 29,
        question: "Does Illinois law require headlights to be on when windshield wipers are in use?",
        options: [
            "True",
            "False"
        ],
        correctAnswer: 0,
        explanation: "In Illinois, you must turn on your headlights whenever your windshield wipers are in use due to weather conditions. This improves visibility and helps other drivers see you in rain, snow, or other reduced-visibility situations.",
    },
    {
        id: 30,
        question: "Under low-visibility conditions caused by fog, what should you do?",
        options: [
            "Turn on your high beams",
            "Slow down and use low beam headlights",
            "Increase your speed to clear the area quickly"
        ],
        correctAnswer: 1,
        explanation: "In fog, slow down and use low beam headlights so the light does not reflect back and blind you. If visibility becomes extremely poor, pull off the road to a safe place, turn on your hazard lights, and wait until conditions improve.",
    },
    {
        id: 31,
        question: "Is it true that cellphone use while driving is permitted if the driver is over 19 and using hands-free?",
        options: [
            "False",
            "True"
        ],
        correctAnswer: 0,
        explanation: "In Illinois, drivers may not use a handheld phone while driving, regardless of age. Hands‑free use is only allowed for drivers 19 and older, but even then it is still restricted in certain situations (such as in school or construction zones). So it is not simply permitted if over 19 and using hands‑free\" as a blanket rule.\"",
    },
    {
        id: 32,
        question: "What should you do about following distance when driving at night?",
        options: [
            "Always use high beams",
            "Look directly at oncoming headlights",
            "Increase your following distance"
        ],
        correctAnswer: 2,
        explanation: "At night, visibility is reduced and it is harder to judge speed and distance. Increasing your following distance gives you more time to see hazards, react to brake lights ahead, and stop safely if something unexpected happens.",
    },
    {
        id: 33,
        question: "When turning left, to whom must you yield?",
        options: [
            "Oncoming vehicles traveling straight or turning right",
            "Passing cars",
            "No one"
        ],
        correctAnswer: 0,
        explanation: "When turning left, you must yield to oncoming traffic that is going straight or turning right, including motorcycles and bicycles. You may only complete your left turn when it is safe and there is a sufficient gap in oncoming traffic.",
    },
    {
        id: 34,
        question: "Can driving privileges be revoked for giving false information to the Secretary of State?",
        options: [
            "False",
            "True"
        ],
        correctAnswer: 1,
        explanation: "Providing false information on a driver’s license application is a serious offense. It can lead to criminal penalties and also to suspension or revocation of your driving privileges by the licensing authority.",
    },
    {
        id: 35,
        question: "How often should you check your rearview mirrors while driving?",
        options: [
            "Often to see how traffic is moving behind you",
            "Only when slowing down",
            "To see if a vehicle is in your blind spot"
        ],
        correctAnswer: 0,
        explanation: "You should check your mirrors often to stay aware of traffic behind and beside you. Frequent mirror checks help you spot fast‑approaching vehicles, prepare for lane changes, and react early to changing traffic conditions.",
    }
]

export const illinoisPermitTestFaq: { question: string; answer: string }[] = [
    {
        question: "How many questions are on the Illinois SOS permit test?",
        answer: "The Illinois Secretary of State (SOS) knowledge test has 35 multiple-choice questions. You need to answer at least 28 correctly (80%) to pass and receive your real estate license."
    },
    {
        question: "What score do you need to pass the Illinois permit test?",
        answer: "You must answer 28 out of 35 questions correctly — a passing score of 80%. You can miss no more than 7 questions. If you miss 8 or more, you fail and must retake the test."
    },
    {
        question: "How many questions can you miss on the Illinois SOS knowledge test?",
        answer: "You can miss up to 7 questions on the 35-question test. Missing 8 or more means you fail and must wait at least 1 day before retaking."
    },
    {
        question: "Is there a time limit on the Illinois permit knowledge test?",
        answer: "No. Illinois does not impose a strict time limit on the knowledge test. Take the time you need on each question, but read carefully — most questions reward understanding over speed."
    },
    {
        question: "What happens if I fail the Illinois permit test?",
        answer: "If you fail, you must wait 1 day before retaking. Use that time to study the Illinois Rules of the Road handbook and focus on the areas where you missed questions. Scoring 90%+ on practice tests consistently before your appointment gives you the best chance of passing first try."
    },
    {
        question: "Can I take the Illinois SOS permit test online?",
        answer: "As of 2026, the Illinois SOS knowledge test must be taken in person at a Secretary of State Driver Services facility. Check the SOS website for locations and appointment availability near you."
    },
    {
        question: "What is the minimum age to get a real estate license in Illinois?",
        answer: "You must be at least 15 years old to apply for an Illinois real estate license. With the permit, you may drive only when supervised by a licensed driver who is at least 21 years old."
    },
    {
        question: "What is Illinois's law on handheld cell phone use while driving?",
        answer: "Illinois prohibits all handheld cell phone use for all drivers — you must use hands-free technology. Drivers under 19 face even stricter rules: all mobile device use, including hands-free calls, is prohibited. Violating this law carries fines and can affect your driving record."
    },
]
