import type { Question, StatePermitTestConfig } from '@/components/state-permit-test/types'

export const kentuckyPermitTestConfig: StatePermitTestConfig = {
    stateName: 'Kentucky',
    stateCode: 'KY',
    departmentName: 'Kentucky Real Estate',
    departmentAbbr: 'Real Estate',
    realQuestionCount: 40,
    realPassCount: 32,
    passPercent: 80,
    retakePolicy: 'Can retake after 1 day if failed',
    mainPageUrl: '/kentucky-real-estate-permit-test',
    pageUrl: '/kentucky-real-estate-permit-test-40-questions',
    stateGuideUrl: '/state-guides/kentucky',
    handbookUrl: '/handbooks/kentucky',
    year: 2026,
}

export const kentuckyPermitTestQuestions: Question[] = [
    {
        id: 1,
        question: "What term refers to the amount of alcohol present in a person's bloodstream?",
        options: [
            "Implied consent (IC).",
            "Blood alcohol concentration (BAC).",
            "Rate of alcohol consumption (RAC).",
            "Driving under influence level (DUI level)."
        ],
        correctAnswer: 1,
        explanation: "Blood alcohol concentration (BAC) measures the percentage of alcohol in the blood; higher BAC levels indicate greater impairment.",
    },
    {
        id: 2,
        question: "After stopping for a train at a railroad crossing and the train passes, you should:",
        options: [
            "Look for a second train and wait for signals to stop flashing.",
            "Immediately proceed once the visible train passes.",
            "Drive around crossing gates if they stay down briefly.",
            "Honk to signal your intent to cross."
        ],
        correctAnswer: 0,
        explanation: "There may be another train on adjacent tracks; wait until all gates are up and signals stop before proceeding.",
    },
    {
        id: 3,
        question: "Regulatory signs are typically what color background?",
        options: [
            "White.",
            "Green.",
            "Yellow.",
            "Blue."
        ],
        correctAnswer: 0,
        explanation: "Regulatory signs (speed, stop, yield, etc.) are usually white rectangles or squares with colored symbols or text.",
    },
    {
        id: 4,
        question: "Work zone barrels, cones, and signs are used to:",
        options: [
            "Keep drivers out of hazardous work areas.",
            "Inconvenience drivers intentionally.",
            "Make drivers angry about slow traffic."
        ],
        correctAnswer: 0,
        explanation: "These devices guide and protect drivers and workers by keeping traffic out of dangerous parts of the work zone.",
    },
    {
        id: 5,
        question: "A centerline with one solid yellow and one broken yellow line means:",
        options: [
            "You may pass from the side next to the broken line when it is safe.",
            "You are not allowed to pass in this area.",
            "You are only allowed to make right turns in this area."
        ],
        correctAnswer: 0,
        explanation: "When the broken line is adjacent to your lane, you may cross it to pass if it is safe; the solid line side may not pass.",
    },
    {
        id: 6,
        question: "Is it ever acceptable to drive off the paved road onto the shoulder to pass another vehicle?",
        options: [
            "No — you may not drive off the main traveled portion of the road to pass.",
            "Yes, if the vehicle ahead is turning left.",
            "Yes, if there are two or more lanes traveling in your direction."
        ],
        correctAnswer: 0,
        explanation: "Do not drive onto the shoulder to pass; passing must be done within the proper travel lanes when safe.",
    },
    {
        id: 7,
        question: "If you are already in an intersection when a green light changes to yellow, you should:",
        options: [
            "Continue moving and clear the intersection safely.",
            "Stop in the intersection, and c:Increase your speed to avoid collisions."
        ],
        correctAnswer: 0,
        explanation: "If you are within the intersection when the light turns yellow, proceed to clear it safely rather than stopping in it.",
    },
    {
        id: 8,
        question: "A broken yellow line between two lanes of traffic indicates:",
        options: [
            "Passing is permitted when it is safe.",
            "Both lanes of traffic are going in the same direction.",
            "Passing is not permitted."
        ],
        correctAnswer: 0,
        explanation: "Dashed yellow lines separate opposing lanes and mean that passing is allowed when it is safe to do so.",
    },
    {
        id: 9,
        question: "In fog, rain, or snow you should use:",
        options: [
            "Low beam headlights.",
            "High beam headlights.",
            "Fog lights only."
        ],
        correctAnswer: 0,
        explanation: "Low beam headlights reduce glare from reflected moisture and help you see better in precipitation and fog.",
    },
    {
        id: 10,
        question: "Why is driving at night generally more dangerous than driving in daylight?",
        options: [
            "Your reaction time is slower at night.",
            "You cannot see as far ahead at night.",
            "The road is always more slippery at night.",
            "Oncoming headlights eliminate glare."
        ],
        correctAnswer: 1,
        explanation: "Reduced visibility and glare from oncoming lights mean you cannot see as far at night; use headlights and be cautious.",
    },
    {
        id: 11,
        question: "Because motorcycles and similar small vehicles can be hard to spot, you should:",
        options: [
            "Make constant visual checks and be especially alert.",
            "Share a lane with a motorcycle.",
            "Slow down every time you see one."
        ],
        correctAnswer: 0,
        explanation: "Motorcycles can be hidden in blind spots; check mirrors frequently and look carefully before changing lanes or turning.",
    },
    {
        id: 12,
        question: "After you pass another vehicle, when is it safe to return to your lane?",
        options: [
            "When you can see the passed vehicle's headlights in your rearview mirror.",
            "After you have signaled for three seconds.",
            "When the other driver signals you to return."
        ],
        correctAnswer: 0,
        explanation: "Return to your lane only when you can see both headlights of the passed vehicle in your inside rearview mirror, indicating enough space.",
    },
    {
        id: 13,
        question: "An orange and red triangular emblem on the rear of a vehicle indicates:",
        options: [
            "The vehicle is a slow-moving vehicle.",
            "The vehicle will yield the right-of-way.",
            "Shoulder work is ahead."
        ],
        correctAnswer: 0,
        explanation: "Slow-moving vehicles such as farm equipment or maintenance vehicles display an orange-red triangle on the back to warn other drivers.",
    },
    {
        id: 14,
        question: "When driving in fog, which lighting is best to use?",
        options: [
            "Four-way flashers.",
            "Low beam headlights.",
            "High beam headlights.",
            "Parking lights only."
        ],
        correctAnswer: 1,
        explanation: "Use low-beam headlights in fog, rain, or snow; high beams can reflect off moisture and reduce visibility.",
    },
    {
        id: 15,
        question: "If you begin a turn but then decide not to, you should:",
        options: [
            "Complete the turn you started.",
            "Signal and rejoin traffic by backing up.",
            "Quickly steer back to the previous lane.",
            "Stop in the intersection and wait."
        ],
        correctAnswer: 0,
        explanation: "Once committed to a turn, follow through; abrupt corrections can cause collisions.",
    },
    {
        id: 16,
        question: "Which statement about driving while taking medications is true?",
        options: [
            "Many cold medications can make a person drowsy.",
            "Over-the-counter meds never impair driving if used as directed.",
            "Prescribed medications are always safe to drive on.",
            "Medications only affect drivers over 65."
        ],
        correctAnswer: 0,
        explanation: "Both prescription and OTC medications can impair driving; many cold/allergy meds cause drowsiness.",
    },
    {
        id: 17,
        question: "When changing lanes, you should never:",
        options: [
            "Attempt to change lanes in an intersection.",
            "Check blind spots by looking over your shoulder.",
            "Check for other drivers moving into the same lane.",
            "Signal your intended move."
        ],
        correctAnswer: 0,
        explanation: "Never change lanes within an intersection; always check mirrors and blind spots and signal before moving.",
    },
    {
        id: 18,
        question: "When vehicles are stopped behind a school bus with flashing red lights, they must remain stopped until:",
        options: [
            "The stop arm is retracted and the bus resumes motion.",
            "All students are off the bus.",
            "The stop arm is retracted."
        ],
        correctAnswer: 0,
        explanation: "Motorists must stop for a school bus with flashing red lights and its stop arm extended, and remain stopped until the lights are off, the arm is withdrawn, and the bus moves.",
    },
    {
        id: 19,
        question: "If you see a lane-control sign with an arrow and the word \"ONLY\" under it above your lane, you must:",
        options: [
            "Travel in the direction indicated by the arrow.",
            "Always make a lane change.",
            "Ignore it if traffic is light."
        ],
        correctAnswer: 0,
        explanation: "Lane-control signs require you to use the indicated lane movement (for example, left-only) as shown by the arrow and \"ONLY\".",
    },
    {
        id: 20,
        question: "A truck's \"No zones\" refer to areas where cars:",
        options: [
            "Disappear into blind spots or are so close they limit the truck driver's ability to stop or maneuver.",
            "Have several car lengths between their vehicle and the truck.",
            "Have sufficient space to travel behind the truck."
        ],
        correctAnswer: 0,
        explanation: "No zones are the large blind areas around trucks and buses where smaller vehicles may be hidden or too close, increasing crash risk.",
    },
    {
        id: 21,
        question: "Whenever you park on any hill, you should:",
        options: [
            "Set the parking brake and leave the vehicle in \"park\" (or in gear).",
            "Let the vehicle roll slightly and then set the parking brake.",
            "Always point your front wheels straight ahead regardless of curb presence."
        ],
        correctAnswer: 0,
        explanation: "On hills you should leave the car in park or in gear and engage the parking brake; also turn wheels appropriately depending on curb.",
    },
    {
        id: 22,
        question: "A steady red arrow on a traffic signal means:",
        options: [
            "Traffic may not move in the arrow's direction.",
            "You may turn in that direction after stopping.",
            "You may turn in that direction with caution.",
            "The direction has right-of-way."
        ],
        correctAnswer: 0,
        explanation: "A steady red arrow prohibits traffic from moving in that direction until a green signal appears.",
    },
    {
        id: 23,
        question: "If an oncoming vehicle fails to dim high beams at night, you should:",
        options: [
            "Look toward the right edge of your lane and watch the vehicle from the corner of your eye.",
            "Look straight ahead in your lane.",
            "Look toward the left edge of your lane.",
            "Flash your high beams back at them."
        ],
        correctAnswer: 0,
        explanation: "Avoid looking directly at incoming high beams; focus on the right edge and use peripheral vision to track the vehicle.",
    },
    {
        id: 24,
        question: "A green arrow signal requires you to:",
        options: [
            "Yield to any vehicle, bicycle, or pedestrian still in the intersection, then turn in the arrow's direction.",
            "Wait four seconds before proceeding.",
            "Yield only to pedestrians."
        ],
        correctAnswer: 0,
        explanation: "A green arrow indicates you may turn in the arrow's direction after yielding to any traffic or pedestrians in the intersection.",
    },
    {
        id: 25,
        question: "Which driving skills are affected by alcohol and/or drugs?",
        options: [
            "All of the above (alertness, concentration, reaction time, coordination).",
            "Alertness and concentration only.",
            "Reaction time and coordination only.",
            "None of the above."
        ],
        correctAnswer: 0,
        explanation: "Alcohol and drugs reduce alertness, concentration, slow reaction time, and impair coordination.",
    },
    {
        id: 26,
        question: "When visibility is very poor due to fog, you should slow down and:",
        options: [
            "Use low-beam headlights.",
            "Turn on your emergency flashers.",
            "Use high-beam headlights.",
            "Turn on only parking lights."
        ],
        correctAnswer: 0,
        explanation: "Use low beams (and fog lights if equipped) because high beams reflect off fog and reduce visibility.",
    },
    {
        id: 27,
        question: "If you feel drowsy while driving, you should:",
        options: [
            "Find a safe place to stop and take a short nap.",
            "Increase your speed to reach your destination sooner.",
            "Turn up the radio and drive on.",
            "Drink energy drinks and continue driving."
        ],
        correctAnswer: 0,
        explanation: "If you are too tired to drive safely, stop to rest or change drivers; naps are effective at restoring alertness.",
    },
    {
        id: 28,
        question: "When you see an emergency vehicle using flashing lights and/or siren, you must:",
        options: [
            "Pull over to the curb or edge of the road and stop until it passes.",
            "Maintain your speed and stay in your lane until it passes.",
            "Move into the right lane and drive slowly until it has passed."
        ],
        correctAnswer: 0,
        explanation: "When an emergency vehicle approaches, pull over to the right edge of the road and stop until it has passed, yielding right-of-way.",
    },
    {
        id: 29,
        question: "A steady green traffic light at an intersection indicates:",
        options: [
            "You may proceed through the intersection at a safe speed if the way is clear.",
            "Increase your speed.",
            "Adjust your mirrors."
        ],
        correctAnswer: 0,
        explanation: "A steady green means you may go when the intersection is clear, yielding to any traffic or pedestrians already in the intersection.",
    },
    {
        id: 30,
        question: "How do stopping distances and crash severity change as vehicle speed increases?",
        options: [
            "Stopping distances increase and crashes become more severe.",
            "Stopping distances decrease as speed increases.",
            "Speed has no effect on stopping distance or crash severity."
        ],
        correctAnswer: 0,
        explanation: "Higher speeds lengthen stopping distances and make collisions more severe, increasing risk of injury or death.",
    },
    {
        id: 31,
        question: "When an emergency vehicle is using siren and flashing lights, you must yield by:",
        options: [
            "Driving as close as possible to the right edge of the road and stopping.",
            "Changing into the right lane and driving slowly until it passes.",
            "Stopping in the middle of an intersection immediately."
        ],
        correctAnswer: 0,
        explanation: "Move toward the right edge of the roadway and stop, taking care not to block intersections, until the emergency vehicle has passed.",
    },
    {
        id: 32,
        question: "If your vehicle breaks down on a public road and you must stop, you should:",
        options: [
            "Pull off to the right side of the road, if possible, and turn on your hazard lights.",
            "Stop in your lane and hold down the horn to attract attention.",
            "Stop where you are and leave the vehicle running."
        ],
        correctAnswer: 0,
        explanation: "When possible, get off the traveled portion of the road and use emergency flashers to show you need assistance.",
    },
    {
        id: 33,
        question: "If you continually pass vehicles on a two-lane road because you drive faster than others, what is most likely to happen?",
        options: [
            "It will get you to your destination much more quickly and safely.",
            "Your chances of a collision will increase.",
            "You will help prevent traffic congestion.",
            "You will improve your fuel economy."
        ],
        correctAnswer: 1,
        explanation: "Frequent passing on two-lane roads raises your collision risk; avoid unnecessary passing when possible.",
    },
    {
        id: 34,
        question: "When driving on gravel or dirt roads you should:",
        options: [
            "Slow down because your tires have less traction than on pavement.",
            "Drive at the same speed as on pavement because traction is unchanged.",
            "Expect better visibility than on paved roads."
        ],
        correctAnswer: 0,
        explanation: "Loose surfaces reduce traction and lengthen stopping distance; reduce speed and drive cautiously on gravel or dirt roads.",
    },
    {
        id: 35,
        question: "A solid yellow line beside a broken yellow line indicates:",
        options: [
            "Vehicles next to the broken line may pass, while those next to the solid line may not.",
            "Vehicles in both directions may pass at any time.",
            "The side next to the solid line may pass."
        ],
        correctAnswer: 0,
        explanation: "When a broken line borders a solid yellow, passing is allowed only from the side with the broken line when it is safe.",
    },
    {
        id: 36,
        question: "Signs with orange backgrounds are used to warn drivers about:",
        options: [
            "Construction and maintenance conditions.",
            "General warnings.",
            "Regulatory requirements."
        ],
        correctAnswer: 0,
        explanation: "Orange signs specifically indicate construction or maintenance areas and alert drivers to changed conditions.",
    },
    {
        id: 37,
        question: "When merging onto the freeway, you should be driving:",
        options: [
            "At or near the speed of traffic on the freeway.",
            "Five to 10 mph slower than traffic.",
            "The posted speed limit regardless of traffic speed.",
            "Below 25 mph to safely merge."
        ],
        correctAnswer: 0,
        explanation: "Enter the freeway at or near the speed of traffic so you can merge smoothly.",
    },
    {
        id: 38,
        question: "If a tire suddenly blows out, what is the correct action?",
        options: [
            "Hold the steering wheel firmly, steer straight, slow down gradually, and use the brakes lightly.",
            "Apply the brake and hold it.",
            "Pull over quickly and brake hard."
        ],
        correctAnswer: 0,
        explanation: "If a blowout occurs, grip the wheel, keep the vehicle straight, ease off the gas, and slow gradually before pulling off the road in a safe place.",
    },
    {
        id: 39,
        question: "When should your wheels not be pointed straight ahead?",
        options: [
            "When parked on a hill or sloping driveway.",
            "When waiting to make a left turn at a traffic light.",
            "When parked on a level roadway with no curb."
        ],
        correctAnswer: 0,
        explanation: "When parked on a slope, turn wheels so the vehicle will not roll into traffic if the brakes fail; on level roads leave wheels straight.",
    },
    {
        id: 40,
        question: "If an oncoming driver fails to dim their headlights at night, you should:",
        options: [
            "Glance toward the right side of the road to avoid glare.",
            "Look toward the center of the roadway.",
            "Look straight ahead into the headlights."
        ],
        correctAnswer: 0,
        explanation: "Look briefly toward the right edge of the road to avoid being blinded while maintaining enough vision to stay on course.",
    }
]

export const kentuckyPermitTestFaq: { question: string; answer: string }[] = [
    {
        question: "How many questions are on the Kentucky Real Estate Exam?",
        answer: "The Kentucky Real Estate knowledge test has 40 multiple-choice questions. You need to answer at least 32 correctly (80%) to pass and receive your real estate license."
    },
    {
        question: "What score do you need to pass the Kentucky permit test?",
        answer: "You need 32 out of 40 correct — a passing score of 80%. You can miss up to 8 questions. Missing 9 or more means you fail and must wait at least 1 day before retaking."
    },
    {
        question: "How many questions can you miss on the Kentucky knowledge test?",
        answer: "You can miss up to 8 questions on the 40-question test. If you miss 9 or more, you fail. If you fail, you must wait 1 day before retaking the test."
    },
    {
        question: "Is there a time limit on the Kentucky permit test?",
        answer: "Kentucky does not impose a strict time limit on the knowledge test. Take the time you need on each question — reading carefully is more important than answering quickly."
    },
    {
        question: "What happens if I fail the Kentucky permit test?",
        answer: "If you fail, you must wait 1 day before retaking. Use that time to review the Kentucky Driver Manual, especially the sections covering traffic signs, speed limits, and GDL rules. Consistently scoring 85%+ on practice tests is the best indicator you are ready to pass."
    },
    {
        question: "Can I take the Kentucky permit test online?",
        answer: "As of 2026, the Kentucky Real Estate knowledge test must be taken in person at a Kentucky Circuit Court Clerk's office, which handles driver licensing in Kentucky. Check the Kentucky Real Estate website for your nearest location."
    },
    {
        question: "What is the minimum age to get a real estate license in Kentucky?",
        answer: "You must be at least 16 years old to apply for a Kentucky learner's (instruction) permit. Kentucky's minimum permit age is higher than many other states, which typically allow permits at age 15 or even 14."
    },
    {
        question: "How many supervised driving hours does Kentucky require before a teen can get a Graduated Operator's License?",
        answer: "Kentucky requires 60 hours of supervised driving practice, with at least 10 hours at night. This is one of the highest requirements in the country. The supervising driver must be a licensed driver age 21 or older."
    },
]
