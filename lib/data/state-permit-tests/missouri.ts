import type { Question, StatePermitTestConfig } from '@/components/state-permit-test/types'

export const missouriPermitTestConfig: StatePermitTestConfig = {
    stateName: 'Missouri',
    stateCode: 'MO',
    departmentName: 'Missouri DOR',
    departmentAbbr: 'DOR',
    realQuestionCount: 25,
    realPassCount: 20,
    passPercent: 80,
    retakePolicy: 'Can retake after 1 day if failed',
    mainPageUrl: '/missouri-dor-permit-test',
    pageUrl: '/missouri-dor-permit-test-25-questions',
    stateGuideUrl: '/state-guides/missouri',
    handbookUrl: '/handbooks/missouri',
    year: 2026,
}

export const missouriPermitTestQuestions: Question[] = [
    {
        id: 1,
        question: "Which agency handles driver licensing and permits in Missouri?",
        options: ["Missouri Real Estate", "Missouri Department of Revenue (DOR)", "Missouri DOT", "Missouri Secretary of State"],
        correctAnswer: 1,
        explanation: "Missouri's Department of Revenue (DOR) handles driver licensing, vehicle registration, and permits. Missouri does not have a traditional Real Estate — if you need a permit or license, visit a Missouri DOR license office."
    },
    {
        id: 2,
        question: "What is the minimum age to apply for a Missouri real estate license?",
        options: ["14", "15", "16", "15 and a half"],
        correctAnswer: 1,
        explanation: "Missouri allows teens to apply for a real estate license (Temporary Instruction Permit or TIPIC) at age 15. The permit allows supervised driving practice as the first step in Missouri's GDL program."
    },
    {
        id: 3,
        question: "Missouri's real DOR knowledge test has 25 questions. How many must you answer correctly to pass?",
        options: ["18 (72%)", "19 (76%)", "20 (80%)", "22 (88%)"],
        correctAnswer: 2,
        explanation: "Missouri's DOR knowledge test requires 20 correct answers out of 25 — an 80% passing threshold. You can miss up to 5 questions. Missing 6 or more means you fail and must wait before retaking."
    },
    {
        id: 4,
        question: "What is the legal BAC limit for a Missouri driver age 21 or older?",
        options: ["0.04%", "0.06%", "0.08%", "0.10%"],
        correctAnswer: 2,
        explanation: "Missouri sets the DWI (Driving While Intoxicated) limit at 0.08% BAC for drivers 21 and older. Missouri also has a separate EWID (Excessive BAC) charge for 0.15% or higher, carrying enhanced penalties. Commercial drivers face a stricter 0.04% limit."
    },
    {
        id: 5,
        question: "What BAC triggers Missouri's zero tolerance law for drivers under 21?",
        options: ["0.00%", "0.02%", "0.04%", "0.08%"],
        correctAnswer: 1,
        explanation: "Missouri sets the underage alcohol limit at 0.02% BAC for drivers under 21. This is effectively zero tolerance — any detectable amount above 0.02% is illegal for underage drivers in Missouri."
    },
    {
        id: 6,
        question: "Under Missouri's GDL program, how many hours of supervised driving must a permit holder complete?",
        options: ["20 hours (2 at night)", "30 hours (no night requirement)", "40 hours (10 at night)", "50 hours (no night requirement)"],
        correctAnswer: 2,
        explanation: "Missouri requires 40 hours of supervised driving practice, with at least 10 hours driven at night. The supervising driver must be a licensed driver age 21 or older seated in the front seat. These hours must be logged and certified before applying for an intermediate real estate license."
    },
    {
        id: 7,
        question: "What is the default speed limit on Missouri urban streets when no speed limit sign is posted?",
        options: ["25 mph", "30 mph", "35 mph", "45 mph"],
        correctAnswer: 0,
        explanation: "Missouri sets the default speed limit in any city, town, or village (urban districts) at 25 mph when no sign is posted. Rural highways are set at 60 mph unless posted otherwise."
    },
    {
        id: 8,
        question: "What is Missouri's default speed limit on rural highways when no sign is posted?",
        options: ["55 mph", "60 mph", "65 mph", "70 mph"],
        correctAnswer: 1,
        explanation: "Missouri's default speed limit on rural roads and highways is 60 mph — slightly higher than the 55 mph default used by many other states. This reflects Missouri's flatter terrain and wider rural roads in many areas. Always check for posted signs."
    },
    {
        id: 9,
        question: "Missouri's Move Over law requires what when approaching a stationary emergency vehicle with flashing lights on a highway?",
        options: ["Slow to 20 mph only", "Move one lane away if safe, or reduce speed if a lane change is not possible", "Stop completely behind the vehicle", "Only required for police — not tow trucks"],
        correctAnswer: 1,
        explanation: "Missouri's Move Over law requires drivers to move one lane away from stationary emergency, law enforcement, utility, or tow vehicles with flashing lights. If a safe lane change is not possible, significantly reduce speed. The law applies to all such vehicles."
    },
    {
        id: 10,
        question: "You approach a school bus stopped on an undivided road with flashing red lights. What must you do?",
        options: ["Stop only if you are behind the bus", "Stop in both directions at least 20 feet from the bus", "Slow to 15 mph and proceed carefully", "Stop only if children are visible"],
        correctAnswer: 1,
        explanation: "Missouri law requires all vehicles in both directions on an undivided road to stop at least 20 feet from a school bus with flashing red lights. Wait until the stop arm retracts and lights stop before proceeding. On a divided highway, only traffic behind the bus must stop."
    },
    {
        id: 11,
        question: "When must Missouri drivers turn on their headlights?",
        options: ["Only from sunset to sunrise", "From 30 minutes after sunset to 30 minutes before sunrise, and when visibility is under 500 feet", "Only in rain and fog", "Only after 9 PM"],
        correctAnswer: 1,
        explanation: "Missouri requires headlights from 30 minutes after sunset to 30 minutes before sunrise, and whenever weather or conditions reduce visibility to less than 500 feet. This includes rain, fog, snow, and other conditions reducing visibility."
    },
    {
        id: 12,
        question: "A flashing red traffic signal requires you to:",
        options: ["Slow down and proceed with caution", "Yield to cross traffic and proceed", "Come to a complete stop, yield to all traffic, and proceed when safe", "Continue at the posted speed"],
        correctAnswer: 2,
        explanation: "A flashing red signal is treated like a stop sign in Missouri. Make a complete stop, yield to all traffic and pedestrians, and proceed only when safe. A flashing yellow requires caution but not a complete stop."
    },
    {
        id: 13,
        question: "What is the minimum recommended following distance in Missouri under normal conditions?",
        options: ["1 second", "2 seconds", "3 seconds", "4 seconds"],
        correctAnswer: 2,
        explanation: "Missouri recommends a minimum 3-second following distance under normal conditions. In rain, fog, or on wet roads, increase to at least 6 seconds. The 3-second rule provides the minimum reaction time to stop safely if the vehicle ahead brakes suddenly."
    },
    {
        id: 14,
        question: "On a two-lane road in Missouri, when may you legally cross a solid yellow center line?",
        options: ["When the road ahead is visible for at least 500 feet", "You may never cross a solid yellow line on your side to pass", "When the vehicle ahead is going well below the speed limit", "When you signal for at least 200 feet first"],
        correctAnswer: 1,
        explanation: "A solid yellow line on your side prohibits crossing the center line to pass. No exceptions. Only when a broken (dashed) yellow line is on your side may you pass when safe."
    },
    {
        id: 15,
        question: "Missouri seatbelt law requires which vehicle occupants to wear a seatbelt?",
        options: ["Driver and front-seat passengers only", "All occupants in the front seat", "All occupants", "Only those under 18"],
        correctAnswer: 2,
        explanation: "Missouri requires all vehicle occupants — in all seating positions — to wear a seatbelt. Missouri has primary enforcement. Children must use appropriate child safety seats based on age and size. Violations carry fines."
    },
    {
        id: 16,
        question: "When an emergency vehicle with lights and siren approaches from behind, you must:",
        options: ["Speed up and exit the roadway", "Pull to the right edge and stop", "Slow to 10 mph in your lane", "Move to the center of the road"],
        correctAnswer: 1,
        explanation: "Missouri law requires you to immediately pull to the right edge of the road and stop when an emergency vehicle with active lights and siren approaches. Remain stopped until the vehicle has passed. If in an intersection, clear it first, then pull to the right."
    },
    {
        id: 17,
        question: "Can you make a right turn on a red light in Missouri?",
        options: ["No, right turns on red are prohibited statewide", "Yes, after a complete stop, yielding to traffic and pedestrians, unless a sign prohibits it", "Yes, without stopping if the turn is clear", "Only on one-way streets"],
        correctAnswer: 1,
        explanation: "Right turns on red are permitted in Missouri after a complete stop, yielding to all pedestrians and cross traffic, and unless a 'No Turn on Red' sign is posted. Always make a full stop — rolling through on red while turning right is illegal."
    },
    {
        id: 18,
        question: "You arrive at a 4-way stop at the same time as a vehicle to your right. Who goes first?",
        options: ["You do — you were both there simultaneously", "The vehicle on your right has the right of way", "Whoever is going straight has priority", "The vehicle turning right always goes first"],
        correctAnswer: 1,
        explanation: "When two vehicles arrive simultaneously at a 4-way stop, yield to the vehicle on the right. This is the universal tie-breaking rule at all-way stops. If you arrived clearly first, you proceed first regardless of direction."
    },
    {
        id: 19,
        question: "What is the maximum speed limit on Missouri rural interstate highways?",
        options: ["55 mph", "60 mph", "65 mph", "70 mph"],
        correctAnswer: 3,
        explanation: "Missouri's maximum speed limit on rural interstate highways is 70 mph for passenger vehicles. Urban sections may have lower posted limits. Always check posted signs — 70 mph is the ceiling, not a universal default."
    },
    {
        id: 20,
        question: "A pedestrian is crossing in a marked crosswalk. You must:",
        options: ["Proceed if you have a green light", "Slow to 15 mph and proceed carefully", "Stop and yield until the pedestrian has completely crossed the roadway", "Yield only if the pedestrian is in your direct lane"],
        correctAnswer: 2,
        explanation: "Missouri law requires stopping and yielding to pedestrians in marked crosswalks. You must remain stopped until the pedestrian has completely crossed — even with a green light. Pedestrian right-of-way in a crosswalk is absolute."
    },
    {
        id: 21,
        question: "What is the shape and color of a standard warning sign in Missouri?",
        options: ["Rectangle, white", "Octagon, red", "Diamond, yellow", "Triangle, orange"],
        correctAnswer: 2,
        explanation: "Warning signs are yellow diamond-shaped signs used nationwide. They alert drivers to potential hazards such as curves, merging lanes, school zones, and railroad crossings. The diamond shape and yellow color together indicate extra caution is needed."
    },
    {
        id: 22,
        question: "Missouri law requires drivers to signal before turning or changing lanes at least how far in advance?",
        options: ["50 feet", "100 feet", "200 feet", "300 feet"],
        correctAnswer: 1,
        explanation: "Missouri law requires signaling at least 100 feet before turning or changing lanes. On higher-speed roads, earlier signaling is advisable. Failing to signal or signaling too late is illegal and potentially dangerous."
    },
    {
        id: 23,
        question: "In Missouri, what is the consequence of refusing a chemical test after being lawfully stopped for DWI?",
        options: ["No penalty — refusal is a protected right", "Automatic 1-year license revocation for a first refusal", "Only a minor fine", "License loss only if convicted of DWI"],
        correctAnswer: 1,
        explanation: "Missouri's implied consent law means refusing a chemical test after a DWI stop results in a 1-year license revocation for a first offense. The refusal itself carries this penalty, separate from any DWI conviction. Refusal can also be used as evidence against you in court."
    },
    {
        id: 24,
        question: "When driving in fog in Missouri, which lights should you use?",
        options: ["High beams for maximum visibility", "Low beams or fog lights", "Hazard flashers only", "No lights — they reflect off fog"],
        correctAnswer: 1,
        explanation: "In fog, use low beams or dedicated fog lights. High beams reflect off fog particles and create blinding glare. Missouri's Mississippi River valley areas can experience frequent river fog — especially in the morning — making this rule particularly important in those regions."
    },
    {
        id: 25,
        question: "Missouri's DOR issues a Temporary Instruction Permit (TIPIC) for aspiring agents. What does TIPIC stand for and what is it used for?",
        options: ["Temporary Internal Permit for Individual Certification — used for commercial licenses", "Temporary Instruction Permit Identification Card — used as the real estate license for supervised driving practice", "Temporary Interstate Permission and Insurance Card — used for out-of-state driving", "Transportation Identity Permit for In-County driving — limited to local roads only"],
        correctAnswer: 1,
        explanation: "Missouri's Temporary Instruction Permit Identification Card (TIPIC) is the official real estate license issued to aspiring agents age 15 and older. It allows supervised driving practice and must be carried while driving. The TIPIC is the first step in Missouri's GDL program, before advancing to an intermediate real estate license."
    },
]

export const missouriPermitTestFaq: { question: string; answer: string }[] = [
    {
        question: "How many questions are on the Missouri DOR permit test?",
        answer: "The Missouri Department of Revenue (DOR) knowledge test has 25 multiple-choice questions. You need to answer at least 20 correctly (80%) to pass and receive your real estate license (TIPIC)."
    },
    {
        question: "What score do you need to pass the Missouri permit test?",
        answer: "You need 20 out of 25 correct — a passing score of 80%. You can miss up to 5 questions. Missing 6 or more means you fail and must wait at least 1 day before retaking."
    },
    {
        question: "How many questions can you miss on the Missouri DOR knowledge test?",
        answer: "You can miss up to 5 questions on Missouri's 25-question test. If you miss 6 or more, you fail and must wait 1 day before retaking the test."
    },
    {
        question: "Is there a time limit on the Missouri permit test?",
        answer: "Missouri does not impose a strict time limit on the knowledge test. Take the time you need to read each question carefully — accuracy is more important than speed."
    },
    {
        question: "What happens if I fail the Missouri DOR permit test?",
        answer: "If you fail, you must wait 1 day before retaking. Review the Missouri Driver Guide focusing on the areas where you missed questions. Scoring consistently above 85% on practice tests is the best way to prepare for the real test."
    },
    {
        question: "Can I take the Missouri permit test online?",
        answer: "As of 2026, the Missouri DOR knowledge test must be taken in person at a Missouri DOR license office. Visit the Missouri DOR website to find a license office near you."
    },
    {
        question: "What is the minimum age to get a real estate license in Missouri?",
        answer: "You must be at least 15 years old to apply for a Missouri Temporary Instruction Permit (TIPIC). Missouri requires 40 hours of supervised driving (including 10 at night) before advancing to an intermediate real estate license."
    },
    {
        question: "What is Missouri's default speed limit on rural roads?",
        answer: "Missouri's default speed limit on rural roads and highways is 60 mph when no sign is posted — slightly higher than the 55 mph default used by many other states. In urban and business areas, the default is 30 mph. Always look for and obey posted speed limit signs."
    },
]
