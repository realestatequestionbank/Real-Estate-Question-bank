import type { Question, StatePermitTestConfig } from '@/components/state-permit-test/types'

export const kansasPermitTestConfig: StatePermitTestConfig = {
    stateName: 'Kansas',
    stateCode: 'KS',
    departmentName: 'Kansas Real Estate',
    departmentAbbr: 'Real Estate',
    realQuestionCount: 25,
    realPassCount: 20,
    passPercent: 80,
    retakePolicy: 'Can retake after 1 day if failed',
    mainPageUrl: '/kansas-real-estate-permit-test',
    pageUrl: '/kansas-real-estate-permit-test-25-questions',
    stateGuideUrl: '/state-guides/kansas',
    handbookUrl: '/handbooks/kansas',
    year: 2026,
}

export const kansasPermitTestQuestions: Question[] = [
    {
        id: 1,
        question: "At what minimum age can a Kansas resident apply for a real estate license?",
        options: ["13", "14", "15", "16"],
        correctAnswer: 1,
        explanation: "Kansas has the lowest minimum permit age in the United States — 14 years old. This is a highly tested Kansas-specific fact. Most other states require applicants to be 15 or 16. Kansas permits 14-year-olds to begin learning to drive under adult supervision."
    },
    {
        id: 2,
        question: "Kansas allows teenagers to apply for a restricted license at age 15 after holding a permit since age 14. What is this arrangement called?",
        options: ["Graduated Driver Licensing (GDL)", "Early Operator Program", "Provisional Teen License", "Junior Operator Permit"],
        correctAnswer: 0,
        explanation: "Kansas uses a Graduated Driver Licensing (GDL) system. A teen gets a real estate license at 14, a restricted license at 15 (after meeting supervised driving requirements), and a full unrestricted license at 16. The GDL system progressively reduces restrictions as experience builds."
    },
    {
        id: 3,
        question: "What is the default speed limit on most urban streets in Kansas when no speed limit sign is posted?",
        options: ["25 mph", "30 mph", "35 mph", "40 mph"],
        correctAnswer: 1,
        explanation: "Kansas sets the default urban speed limit at 30 mph when no other limit is posted. This is consistent with many neighboring Midwestern states. Always look for posted signs, as specific business or school areas may have different limits."
    },
    {
        id: 4,
        question: "What is the speed limit on most Kansas highways when no sign is posted?",
        options: ["55 mph", "60 mph", "65 mph", "70 mph"],
        correctAnswer: 2,
        explanation: "The default highway speed limit in Kansas is 65 mph when no sign is posted. Interstate highways typically have a higher posted limit of 75 mph. The 65 mph default applies to most two-lane and four-lane non-interstate highways."
    },
    {
        id: 5,
        question: "What is the maximum speed limit on most Kansas interstate highways?",
        options: ["65 mph", "70 mph", "75 mph", "80 mph"],
        correctAnswer: 2,
        explanation: "Kansas interstates have a maximum speed limit of 75 mph for passenger vehicles. This is higher than many states. Always check posted signs, and remember that urban interstate sections through cities like Wichita or Kansas City may have lower limits."
    },
    {
        id: 6,
        question: "What is the speed limit in Kansas school zones?",
        options: ["15 mph", "20 mph", "25 mph", "30 mph"],
        correctAnswer: 1,
        explanation: "Kansas school zones have a 20 mph speed limit when children are present or warning lights are active. This is lower than many states' 25 mph school zone limits. Reduce speed well in advance of school zones and watch carefully for children near the road."
    },
    {
        id: 7,
        question: "Under Kansas's zero tolerance law, what BAC level is illegal for a driver under 21?",
        options: ["Any measurable amount — 0.00%", "0.02%", "0.04%", "0.08%"],
        correctAnswer: 1,
        explanation: "Kansas sets the illegal BAC threshold for drivers under 21 at 0.02%. A driver under 21 with a BAC at or above 0.02% faces DUI charges and license suspension. The standard adult DUI limit is 0.08% for drivers 21 and older."
    },
    {
        id: 8,
        question: "What is the legal BAC limit for a driver age 21 or older in Kansas?",
        options: ["0.04%", "0.06%", "0.08%", "0.10%"],
        correctAnswer: 2,
        explanation: "Kansas sets the per se DUI limit at 0.08% BAC for drivers 21 and older. A BAC at or above 0.08% is sufficient to establish impairment under Kansas law. Commercial drivers face a stricter 0.04% limit."
    },
    {
        id: 9,
        question: "Under Kansas's GDL program, teens under 16 with a restricted license cannot drive during which hours?",
        options: ["8 PM to 5 AM", "9 PM to 5 AM", "10 PM to 6 AM", "Midnight to 5 AM"],
        correctAnswer: 1,
        explanation: "Kansas restricts drivers under 16 from driving between 9 PM and 5 AM. This curfew ensures new teenage drivers avoid nighttime driving — the highest-risk period — until they have more experience. Exceptions apply for work, school activities, and emergencies."
    },
    {
        id: 10,
        question: "Kansas's implied consent law means that by driving in Kansas, you have agreed to:",
        options: ["Allow your vehicle to be searched at any time", "Submit to a chemical test if suspected of DUI", "Always wear a seatbelt", "Pay all traffic fines without contest"],
        correctAnswer: 1,
        explanation: "Kansas's implied consent law means that operating a vehicle on Kansas roads constitutes automatic consent to chemical testing if a law enforcement officer has reasonable grounds to suspect DUI. Refusing a test results in license suspension and the refusal may be used as evidence in court."
    },
    {
        id: 11,
        question: "What must you do when a school bus ahead displays flashing red lights and an extended stop arm on a two-lane road?",
        options: ["Stop only if you are directly behind the bus", "Slow to 20 mph and proceed carefully", "Stop at least 20 feet from the bus — in both directions — until lights stop flashing", "Yield only if children are visible stepping off the bus"],
        correctAnswer: 2,
        explanation: "On a two-lane undivided road in Kansas, vehicles traveling in BOTH directions must stop at least 20 feet from a school bus with flashing red lights. Do not move until the arm retracts and lights stop flashing. On a divided highway with a physical median, only traffic behind the bus must stop."
    },
    {
        id: 12,
        question: "What does Kansas's Move Over law require when you approach a stopped emergency vehicle with flashing lights?",
        options: ["Move over only for police and fire vehicles", "Stop completely until the vehicle moves", "Move one lane away if safe, or slow to a reasonable speed if lane change is not possible", "Maintain speed but activate hazard flashers"],
        correctAnswer: 2,
        explanation: "Kansas's Move Over law requires drivers to move one lane away from any stopped emergency, law enforcement, towing, or utility vehicle with flashing lights. If moving over is not safely possible, reduce to a safe and appropriate speed for conditions."
    },
    {
        id: 13,
        question: "The recommended following distance under normal driving conditions in Kansas is:",
        options: ["1 second", "2 seconds", "3 seconds", "4 seconds"],
        correctAnswer: 2,
        explanation: "Kansas recommends the 3-second following distance as the minimum under normal conditions. Pick a fixed landmark — when the car ahead passes it, you should not reach it for at least 3 seconds. In poor weather or at highway speeds, increase to 4–6 seconds."
    },
    {
        id: 14,
        question: "You are at a 4-way stop and two vehicles arrive at exactly the same time — one directly across from you, and one to your right. Both of you are going straight. Who goes first?",
        options: ["You go first since you are going straight", "The vehicle to your right goes first", "The vehicle directly across goes first since it faces you", "Whoever accelerates first proceeds"],
        correctAnswer: 1,
        explanation: "When two vehicles arrive at a 4-way stop simultaneously, the driver to your RIGHT has the right of way. In this scenario, even though the vehicle directly across arrives at the same time, the vehicle to your right takes priority because of the yield-to-right rule."
    },
    {
        id: 15,
        question: "Turning right on a red light in Kansas is:",
        options: ["Prohibited statewide", "Permitted after a complete stop, unless a sign prohibits it", "Permitted without stopping if no traffic is visible", "Only allowed between 7 AM and 9 PM"],
        correctAnswer: 1,
        explanation: "Right turns on red are permitted in Kansas after a complete stop and yielding to all pedestrians and cross traffic. Some busy intersections display 'No Turn on Red' signs — always check. Never proceed without first coming to a full stop and verifying the path is clear."
    },
    {
        id: 16,
        question: "A flashing red traffic light in Kansas means:",
        options: ["Yield to cross traffic, then proceed when clear", "Slow and proceed with caution without stopping", "Stop completely, yield to traffic and pedestrians, then proceed when safe", "The signal is malfunctioning — use your own judgment"],
        correctAnswer: 2,
        explanation: "A flashing red light is treated exactly like a stop sign. Come to a complete stop, look in all directions, yield to existing traffic and pedestrians, and proceed when the way is clearly safe. A flashing yellow means caution — slow down but stopping is not required."
    },
    {
        id: 17,
        question: "On a Kansas two-lane road, which of the following indicates a no-passing zone?",
        options: ["A broken white line on the right edge of the road", "A broken yellow center line on your side", "A solid yellow line on your side of the center", "A double white line at the edge of the road"],
        correctAnswer: 2,
        explanation: "A solid yellow line on your side of the center line prohibits passing. You must not cross the center to overtake another vehicle. A broken yellow line on your side indicates that passing is permitted when safe and clear. Always check both sides of the center stripe."
    },
    {
        id: 18,
        question: "In Kansas, all vehicle occupants are required to:",
        options: ["Wear a seatbelt only if the vehicle is moving over 30 mph", "Wear a seatbelt — all occupants in all seating positions", "Wear a seatbelt only in the front seat", "Wear a seatbelt only on highways"],
        correctAnswer: 1,
        explanation: "Kansas requires all vehicle occupants — front and rear seats — to wear a properly adjusted seatbelt. Kansas has primary enforcement, meaning an officer can stop a vehicle solely for a seatbelt violation without needing another reason."
    },
    {
        id: 19,
        question: "When an emergency vehicle with active lights and siren approaches from behind in Kansas, you must:",
        options: ["Speed up and turn at the next intersection", "Stop immediately in your current lane", "Pull to the right edge of the roadway and stop until the vehicle passes", "Move to the left lane to give the emergency vehicle the right lane"],
        correctAnswer: 2,
        explanation: "Kansas law requires you to pull to the right edge of the roadway and stop when an emergency vehicle with active lights and siren approaches from any direction. Do not move until the vehicle has completely passed. Never block an intersection while pulling over."
    },
    {
        id: 20,
        question: "You are driving on a Kansas road and see a yellow diamond-shaped sign with a curved arrow. This indicates:",
        options: ["A mandatory turn is coming up", "A curve or winding road ahead — adjust speed", "You are approaching a yield sign", "A traffic signal is ahead"],
        correctAnswer: 1,
        explanation: "A yellow diamond-shaped sign with a curved arrow warns of a curve or winding road ahead. Reduce speed to safely navigate the curve. Warning signs like this are not regulatory (you are not required to turn) — but ignoring the warning is dangerous."
    },
    {
        id: 21,
        question: "You are approaching a pedestrian crosswalk and a pedestrian is waiting at the curb. Kansas law requires you to:",
        options: ["Slow to 15 mph and continue through the crosswalk", "Honk to signal your presence, then proceed", "Stop and yield the entire roadway until the pedestrian has completely crossed", "Stop only if the pedestrian is already in the crosswalk"],
        correctAnswer: 2,
        explanation: "Kansas law requires drivers to stop and yield to pedestrians at crosswalks — including those waiting at the curb who have not yet stepped into the road. You must yield the entire roadway, not just your lane. Failing to yield to pedestrians is a moving violation."
    },
    {
        id: 22,
        question: "What is the maximum speed limit on most Kansas interstates through major cities?",
        options: ["55 mph", "60 mph", "65 mph", "70 mph"],
        correctAnswer: 2,
        explanation: "Kansas interstates through major urban areas like Wichita and Kansas City typically have a posted limit of 65 mph — lower than the rural interstate limit of 75 mph. Always follow the posted sign. Urban sections are often congested and require extra vigilance."
    },
    {
        id: 23,
        question: "On a Kansas highway, you see a school bus ahead with AMBER (yellow) flashing lights. This means:",
        options: ["The bus is moving — maintain your speed", "The bus is about to stop — slow down and prepare to stop", "The bus has already stopped — come to a complete stop now", "Passing the bus on the left is permitted"],
        correctAnswer: 1,
        explanation: "Amber (yellow) flashing lights are the school bus's advance warning that it is preparing to stop. Slow down and be ready to stop completely. When lights switch to flashing red and the stop arm extends, you must stop. Amber lights give you the precious seconds needed to reduce speed safely."
    },
    {
        id: 24,
        question: "What is the speed limit in most Kansas residential neighborhoods when no sign is posted?",
        options: ["20 mph", "25 mph", "30 mph", "35 mph"],
        correctAnswer: 1,
        explanation: "The default speed limit in Kansas residential areas is 25 mph when no speed limit sign is posted. This lower speed limit in neighborhoods gives drivers more time to react to children playing, pets, cyclists, and pedestrians who may enter the roadway unexpectedly."
    },
    {
        id: 25,
        question: "In Kansas, a teen aged 15 driving alone with a restricted license must be off the road by what time at night?",
        options: ["8 PM", "9 PM", "10 PM", "Midnight"],
        correctAnswer: 1,
        explanation: "Kansas drivers under 16 with a restricted license must not drive between 9 PM and 5 AM. This nighttime curfew applies to 15-year-olds driving independently on a restricted license. Exceptions exist for work, school activities, and emergencies with a parent's permission."
    },
]

export const kansasPermitTestFaq: { question: string; answer: string }[] = [
    {
        question: "What is the minimum age to get a permit in Kansas?",
        answer: "Kansas allows teenagers to apply for a real estate license at age 14 — the earliest minimum permit age of any state in the United States. Most other states require applicants to be 15 or 16."
    },
    {
        question: "How many questions are on the Kansas Real Estate Exam?",
        answer: "The Kansas permit test has 25 multiple-choice questions. You need to answer at least 20 correctly (80%) to pass."
    },
    {
        question: "What score do you need to pass the Kansas permit test?",
        answer: "You need 20 out of 25 correct — an 80% passing score. Missing 6 or more questions means you fail and must wait 1 day before retaking."
    },
    {
        question: "How many questions can you miss on the Kansas Real Estate Exam?",
        answer: "You can miss up to 5 questions on the 25-question test. Missing 6 or more means you fail."
    },
    {
        question: "Is there a time limit on the Kansas permit test?",
        answer: "No. The Kansas Real Estate does not impose a strict time limit on the knowledge test. Take your time, but aim to answer questions based on your first instinct."
    },
    {
        question: "What is Kansas's retake policy if I fail the permit test?",
        answer: "If you fail, you can retake the test after 1 day. Use that time to review the Kansas Driver's Manual, especially traffic laws and GDL rules."
    },
    {
        question: "What are the nighttime driving restrictions for teen drivers in Kansas?",
        answer: "Kansas drivers under 16 may not drive between 9 PM and 5 AM. After turning 16 with a restricted license, curfew restrictions are lifted, but additional passenger restrictions may apply until a full license is obtained."
    },
    {
        question: "Can I take the Kansas permit test online?",
        answer: "No. As of 2026, all Kansas Real Estate knowledge tests must be taken in person at a Kansas Division of Vehicles office. Schedule your appointment through the Kansas Real Estate website."
    },
]
