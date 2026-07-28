import type { Question, StatePermitTestConfig } from '@/components/state-permit-test/types'

export const louisianaPermitTestConfig: StatePermitTestConfig = {
    stateName: 'Louisiana',
    stateCode: 'LA',
    departmentName: 'Louisiana OMV',
    departmentAbbr: 'OMV',
    realQuestionCount: 40,
    realPassCount: 32,
    passPercent: 80,
    retakePolicy: 'Can retake after 1 day if failed',
    mainPageUrl: '/louisiana-omv-permit-test',
    pageUrl: '/louisiana-omv-permit-test-40-questions',
    stateGuideUrl: '/state-guides/louisiana',
    handbookUrl: '/handbooks/louisiana',
    year: 2026,
}

export const louisianaPermitTestQuestions: Question[] = [
    {
        id: 1,
        question: "When may you drive around lowered railroad crossing gates?",
        options: [
            "Never — you must not go around a lowered gate.",
            "When the train has passed and gates are up.",
            "If the lights have stopped flashing but the gate is still down.",
            "If an approaching train seems far away."
        ],
        correctAnswer: 0,
        explanation: "Do not drive around or under a lowered gate; you must wait until lights and bells stop and the gate is fully raised.",
    },
    {
        id: 2,
        question: "When the center of the road has a solid yellow line next to a broken yellow line with the broken line next to your lane, when may you pass?",
        options: [
            "You may pass from your lane when traffic is clear.",
            "Only in an emergency.",
            "Only if you are on an expressway."
        ],
        correctAnswer: 0,
        explanation: "If the broken line is adjacent to your lane, you may cross it to pass when it is safe and no oncoming traffic is present.",
    },
    {
        id: 3,
        question: "You should not pass another vehicle under which conditions?",
        options: [
            "On a hill or curve.",
            "When a school bus's flashing red lights are on.",
            "When approaching an intersection.",
            "All of the above."
        ],
        correctAnswer: 3,
        explanation: "Never pass on hills or curves, at intersections, before or on railroad crossings or bridges, or when a stopped school bus has flashing red lights.",
    },
    {
        id: 4,
        question: "Does drinking coffee after drinking alcohol reduce blood alcohol concentration?",
        options: [
            "No — it has no effect on BAC.",
            "Yes — it decreases BAC.",
            "Yes — it cancels the alcohol's effects."
        ],
        correctAnswer: 0,
        explanation: "Coffee may make you feel more alert but it does not lower your blood alcohol concentration or sober you up.",
    },
    {
        id: 5,
        question: "When changing lanes, which of the following should you do?",
        options: [
            "Signal at least 100 feet before changing lanes (five seconds on a freeway), check mirrors, and glance over your shoulder.",
            "Rely only on mirrors without checking your blind spot.",
            "Begin signaling as you move into the next lane.",
            "Signal after you start the lane change."
        ],
        correctAnswer: 0,
        explanation: "Begin signaling in advance, check mirrors, and glance over your shoulder to clear blind spots before completing a lane change.",
    },
    {
        id: 6,
        question: "How can alcoholic beverages affect your driving ability?",
        options: [
            "They slow reaction time, impair thinking and give false confidence.",
            "They always make you more alert.",
            "They improve coordination in small amounts."
        ],
        correctAnswer: 0,
        explanation: "Alcohol is a depressant that slows reflexes, impairs judgment and coordination, and can create a false sense of confidence.",
    },
    {
        id: 7,
        question: "How must a driver behave when encountering pedestrians?",
        options: [
            "Yield the right-of-way to pedestrians and do everything possible to avoid striking them.",
            "Yield only if the pedestrian is in a marked crosswalk.",
            "Assume pedestrians should yield to vehicles.",
            "Proceed unless the pedestrian is in your lane."
        ],
        correctAnswer: 0,
        explanation: "Drivers must yield to pedestrians and take all reasonable actions to prevent collisions, even if the pedestrian is not lawfully crossing.",
    },
    {
        id: 8,
        question: "Drivers who have consumed alcohol before driving typically:",
        options: [
            "Are always aware of the risks they are taking.",
            "Do not have sufficient control over their bodies, minds, or the vehicle.",
            "Are better drivers because they are more careful."
        ],
        correctAnswer: 1,
        explanation: "Alcohol is a depressant that impairs coordination, judgment, and reaction time; it reduces a driver's ability to operate a vehicle safely.",
    },
    {
        id: 9,
        question: "When, if ever, may you legally drive above the posted speed limit?",
        options: [
            "Never; posted limits are the maximum under ideal conditions.",
            "When no police officer is present to enforce the limit.",
            "When surrounding traffic is driving above the limit."
        ],
        correctAnswer: 0,
        explanation: "Speed limits represent the maximum legal speed under ideal conditions; you should not exceed them. You may need to go slower when conditions require it.",
    },
    {
        id: 10,
        question: "Why does driving at night require increased caution?",
        options: [
            "Because visibility is reduced and headlights are required from half an hour after sunset until half an hour before sunrise.",
            "Because traffic moves much faster at night.",
            "Because there is always more traffic at night."
        ],
        correctAnswer: 0,
        explanation: "At night you cannot see as well; use headlights appropriately and drive so you can stop within the distance you can see ahead.",
    },
    {
        id: 11,
        question: "If an approaching train is close enough or traveling fast enough to be hazardous, what must you do?",
        options: [
            "Slow down and proceed with caution.",
            "Not cross the tracks until the train has completely passed.",
            "Cross the tracks at your own risk."
        ],
        correctAnswer: 1,
        explanation: "If a train is close enough to be a danger, do not attempt to cross the tracks. Wait until it has completely passed and all signals have cleared.",
    },
    {
        id: 12,
        question: "If turning left onto a one-way street, into which lane should you finish the turn?",
        options: [
            "The lane closest to the lane you came from.",
            "The rightmost lane.",
            "Either lane indiscriminately."
        ],
        correctAnswer: 0,
        explanation: "Turn into the lane nearest to the one you left—on a left turn to a one-way street, that will be the leftmost available lane.",
    },
    {
        id: 13,
        question: "If you see a driver's left arm and hand extended downward, what does that signal mean?",
        options: [
            "They intend to come to a stop.",
            "They plan to turn left.",
            "They plan to turn right.",
            "They plan to speed up."
        ],
        correctAnswer: 0,
        explanation: "A left arm extended downward indicates the driver intends to slow or stop; adjust your driving accordingly if following such a vehicle.",
    },
    {
        id: 14,
        question: "On traffic signals mounted horizontally, where is the red light located?",
        options: [
            "The rightmost position.",
            "The middle position.",
            "The leftmost position."
        ],
        correctAnswer: 2,
        explanation: "Horizontal signals place the red light on the left, yellow in the middle, and green on the right.",
    },
    {
        id: 15,
        question: "In which situations are you required to stop your vehicle?",
        options: [
            "Only at stop signs.",
            "Only at red lights.",
            "Only if a police officer orders you to stop.",
            "At stop signs, red lights, or when a traffic officer orders you to stop."
        ],
        correctAnswer: 3,
        explanation: "You must stop at intersections with stop signs or red lights and whenever a traffic officer instructs you to stop.",
    },
    {
        id: 16,
        question: "What happens to your field of vision as your vehicle speed increases?",
        options: [
            "It decreases, requiring extra alertness for hazards.",
            "It increases, letting you see more of the road.",
            "It remains unchanged regardless of speed."
        ],
        correctAnswer: 0,
        explanation: "As speed increases, your peripheral vision narrows and you must be more alert to potential hazards ahead and to the sides.",
    },
    {
        id: 17,
        question: "What color are signs that indicate public recreation or cultural sites?",
        options: [
            "Green.",
            "Brown.",
            "Orange."
        ],
        correctAnswer: 1,
        explanation: "Brown signs indicate areas of cultural or historical interest or public recreation, useful when traveling in unfamiliar areas.",
    },
    {
        id: 18,
        question: "If waiting to turn left and opposing traffic blocks your view of other lanes, you should:",
        options: [
            "Accelerate quickly when the first lane clears.",
            "Wait until you can see all lanes you must cross before turning.",
            "Rely on another driver to wave you across."
        ],
        correctAnswer: 1,
        explanation: "Do not begin the left turn until you can see that all lanes you will cross are clear and it is safe to complete the turn.",
    },
    {
        id: 19,
        question: "When driving on an interstate, what must you do before changing lanes?",
        options: [
            "Signal, check mirrors, and check blind spots.",
            "Always use cruise control while changing lanes.",
            "Stop on the shoulder to check traffic."
        ],
        correctAnswer: 0,
        explanation: "On interstates, signal and verify mirrors and blind spots before changing lanes; only stop on the shoulder for emergencies.",
    },
    {
        id: 20,
        question: "A solid yellow line on your side of the centerline means:",
        options: [
            "Do not pass from your lane.",
            "Pass with caution whenever you want.",
            "Slow down to below the speed limit."
        ],
        correctAnswer: 0,
        explanation: "A solid yellow line adjacent to your lane indicates passing is prohibited from your direction.",
    },
    {
        id: 21,
        question: "On slippery roads, how should you handle turns?",
        options: [
            "Take turns more slowly than usual.",
            "Change lanes quickly to avoid the curve.",
            "Accelerate quickly through curves."
        ],
        correctAnswer: 0,
        explanation: "Reduce speed before and during turns on slippery roads to maintain traction and control.",
    },
    {
        id: 22,
        question: "Which practice helps prevent \\highway hypnosis\\\" on long trips?\"",
        options: [
            "Begin the trip well-rested and take regular stops.",
            "Drive continuously without stopping to maintain focus.",
            "Keep the cruise control engaged at all times."
        ],
        correctAnswer: 0,
        explanation: "To avoid highway hypnosis, start well-rested, take regular breaks even if you don't feel tired, and keep your eyes scanning the road.",
    },
    {
        id: 23,
        question: "When an emergency vehicle is approaching with siren or flashing lights, what must a driver do immediately?",
        options: [
            "Pull to the right and stop.",
            "Pull to the right and slow down but not stop.",
            "Turn on four-way flashers and continue driving.",
            "Speed up to clear the lane."
        ],
        correctAnswer: 0,
        explanation: "You must immediately move to the right side of the road and stop for an approaching emergency vehicle using warning devices.",
    },
    {
        id: 24,
        question: "You must stop at a railroad crossing under which circumstances?",
        options: [
            "When directed to do so by a flagger or a stop sign.",
            "When flashing red signals and gates are operating.",
            "Only if you see a train approaching.",
            "Both a and b."
        ],
        correctAnswer: 3,
        explanation: "You must stop at a railroad crossing when directed by a flagger or stop sign and when flashing red signals or gates are activated.",
    },
    {
        id: 25,
        question: "What does a flashing red traffic signal require you to do?",
        options: [
            "Come to a complete stop and yield, like a stop sign.",
            "Proceed without stopping because the signal is broken.",
            "Slow down and proceed with caution without stopping."
        ],
        correctAnswer: 0,
        explanation: "A flashing red signal mandates a full stop and yielding to other traffic and pedestrians before proceeding when safe.",
    },
    {
        id: 26,
        question: "Under what condition may you continue carefully through an intersection when the signal turns yellow?",
        options: [
            "If you are already in the intersection when the light turns steady yellow.",
            "If there are pedestrians crossing.",
            "If an emergency vehicle is crossing your lane."
        ],
        correctAnswer: 0,
        explanation: "If you are already within the intersection when the light turns steady yellow, you should continue through carefully; do not enter on a yellow light if you can stop safely before the intersection.",
    },
    {
        id: 27,
        question: "Before making a left turn you must:",
        options: [
            "Yield to oncoming vehicles and pedestrians.",
            "Sound your horn to warn other drivers.",
            "Swing to the right side of your lane before turning."
        ],
        correctAnswer: 0,
        explanation: "When turning left you must yield the right-of-way to oncoming traffic and to pedestrians in the intersection.",
    },
    {
        id: 28,
        question: "What do double solid yellow lines down the middle of the road indicate?",
        options: [
            "Railroad crossing ahead.",
            "Pedestrian crossing ahead.",
            "Passing is not permitted in either direction."
        ],
        correctAnswer: 2,
        explanation: "Double solid yellow lines in the center of the roadway mean passing is prohibited for traffic in both directions except to turn.",
    },
    {
        id: 29,
        question: "If you hit an unattended parked vehicle and cannot find the owner, what must you do?",
        options: [
            "Leave a written notice with your name, address, and details of the accident.",
            "Drive away if no one is nearby.",
            "Wait until the police arrive and do nothing else."
        ],
        correctAnswer: 0,
        explanation: "If you cannot locate the owner after striking an unattended vehicle, leave a written notice with your contact information and the circumstances.",
    },
    {
        id: 30,
        question: "For drivers 21 and older, at what BAC is driving illegal in Louisiana?",
        options: [
            "0.08 percent.",
            "0.05 percent.",
            "0.02 percent."
        ],
        correctAnswer: 0,
        explanation: "Louisiana law makes it illegal for drivers 21+ to operate a vehicle with a blood alcohol concentration of 0.08% or higher.",
    },
    {
        id: 31,
        question: "When is it appropriate to use a three-point turn (turnabout)?",
        options: [
            "Only on a narrow street where a U-turn and going around the block are not possible.",
            "Anytime you want to change direction quickly.",
            "When driving in heavy, busy traffic."
        ],
        correctAnswer: 0,
        explanation: "Use a three-point turn only on a two-lane roadway when a U-turn is not possible and you cannot go around the block; it's the most difficult turnabout.",
    },
    {
        id: 32,
        question: "If a green arrow changes into a solid green light, what applies to drivers who want to turn?",
        options: [
            "You may still turn but must yield to oncoming traffic and pedestrians.",
            "You may no longer turn and must go straight.",
            "You retain automatic right-of-way to turn."
        ],
        correctAnswer: 0,
        explanation: "A green arrow gives protected turn movement. If it becomes a regular green, you may still turn but must yield to oncoming traffic and pedestrians.",
    },
    {
        id: 33,
        question: "Before making a turn, what action should you take?",
        options: [
            "Signal at least three to four seconds before turning.",
            "Immediately turn the wheel without signalling.",
            "Increase your speed then turn."
        ],
        correctAnswer: 0,
        explanation: "Activate your turn signal a few seconds before turning to notify other drivers and pedestrians of your intention.",
    },
    {
        id: 34,
        question: "What happens if you refuse a requested alcohol analysis test in Louisiana?",
        options: [
            "Your license will be suspended (first offense results in 365-day suspension).",
            "You face no consequences.",
            "Refusal is recommended to avoid conviction."
        ],
        correctAnswer: 0,
        explanation: "By law, driving in Louisiana implies consent to chemical testing. Refusing a test results in administrative license suspension (365 days for a first refusal).",
    },
    {
        id: 35,
        question: "If you find a defect that could affect safe vehicle operation, what should you do?",
        options: [
            "Drive only at reduced speeds until you can fix it.",
            "Have the defect repaired immediately before driving.",
            "Delay repairs until you can afford them.",
            "Use the vehicle for short local trips only."
        ],
        correctAnswer: 1,
        explanation: "Any defect that may affect safe operation should be fixed as soon as possible and before driving when practical.",
    },
    {
        id: 36,
        question: "What does a 'No standing' sign mean at a location?",
        options: [
            "You may never stop your vehicle there.",
            "You may park there if you remain in the vehicle.",
            "You may stop only temporarily to load or unload passengers."
        ],
        correctAnswer: 2,
        explanation: "A No Standing sign means you can stop briefly to pick up or discharge passengers, but you may not park.",
    },
    {
        id: 37,
        question: "If it begins to sleet or snow while you are driving, you should:",
        options: [
            "Increase the distance between your vehicle and the vehicles you are following.",
            "Keep your windshield and mirrors clear.",
            "Approach all vehicles with caution.",
            "All of the above."
        ],
        correctAnswer: 3,
        explanation: "In snowy or icy weather keep windows and mirrors clear, increase following distance, and approach other vehicles and hazards with caution.",
    },
    {
        id: 38,
        question: "A sign showing Reduced speed - 35 mph means:",
        options: [
            "The new 35 mph speed limit begins at that sign.",
            "The reduced speed zone begins at the next sign.",
            "You have ample time to slow before the reduced speed starts."
        ],
        correctAnswer: 0,
        explanation: "A Reduced speed sign indicates the new speed limit takes effect at the sign; reduce speed accordingly at that point.",
    },
    {
        id: 39,
        question: "When approaching railroad tracks, what actions should you take?",
        options: [
            "Look, listen, slow down, and be prepared to stop.",
            "Speed up to cross before any approaching train arrives.",
            "Try to drive around a lowered gate.",
            "Turn off your radio and keep moving normally."
        ],
        correctAnswer: 0,
        explanation: "Approach tracks with caution: look and listen for trains, slow down, and be ready to stop if necessary.",
    },
    {
        id: 40,
        question: "How should drivers depress the gas pedal?",
        options: [
            "Gradually and smoothly.",
            "By lightly tapping it.",
            "Abruptly to accelerate quickly.",
            "With the heel lifted off the floor at all times."
        ],
        correctAnswer: 0,
        explanation: "Accelerate gradually and smoothly with the top of your foot on the gas pedal and your heel on the floor to maintain control.",
    }
]

export const louisianaPermitTestFaq: { question: string; answer: string }[] = [
    {
        question: "How many questions are on the Louisiana OMV permit test?",
        answer: "The Louisiana Office of Motor Vehicles (OMV) knowledge test has 40 multiple-choice questions. You need to answer at least 32 correctly (80%) to pass and receive your real estate license."
    },
    {
        question: "What score do you need to pass the Louisiana permit test?",
        answer: "You need 32 out of 40 correct — a passing score of 80%. You can miss up to 8 questions. Missing 9 or more means you fail and must wait at least 1 day before retaking."
    },
    {
        question: "How many questions can you miss on the Louisiana OMV knowledge test?",
        answer: "You can miss up to 8 questions on the 40-question test. If you miss 9 or more, you fail. You must wait 1 day before retaking the test."
    },
    {
        question: "Is there a time limit on the Louisiana OMV permit test?",
        answer: "Louisiana does not impose a strict time limit on the knowledge test. Read each question carefully and take your time — accuracy matters more than speed."
    },
    {
        question: "What happens if I fail the Louisiana permit test?",
        answer: "If you fail, you must wait 1 day before retaking. Review the Louisiana Driver's Guide focusing on the sections where you missed questions. Scoring consistently above 85% on practice tests before your appointment is ideal preparation."
    },
    {
        question: "Can I take the Louisiana permit test online?",
        answer: "As of 2026, the Louisiana OMV knowledge test must be taken in person at a Louisiana OMV office. Visit the Louisiana OMV website to find your nearest office and check for appointment requirements."
    },
    {
        question: "What is the minimum age to get a real estate license in Louisiana?",
        answer: "You must be at least 15 years old to apply for a Louisiana real estate license. Permit holders may drive only when supervised by a licensed driver age 18 or older seated in the front seat."
    },
    {
        question: "What does Louisiana use instead of 'DUI' for drunk driving charges?",
        answer: "Louisiana uses DWI — Driving While Intoxicated — rather than DUI. The legal BAC limit is 0.08% for drivers 21 and older. Drivers under 21 face a 0.02% zero tolerance limit. Louisiana takes DWI enforcement very seriously, with penalties including fines, license suspension, and possible jail time."
    },
]
