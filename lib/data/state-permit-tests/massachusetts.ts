import type { Question, StatePermitTestConfig } from '@/components/state-permit-test/types'

export const massachusettsPermitTestConfig: StatePermitTestConfig = {
    stateName: 'Massachusetts',
    stateCode: 'MA',
    departmentName: 'Massachusetts RMV',
    departmentAbbr: 'RMV',
    realQuestionCount: 25,
    realPassCount: 18,
    passPercent: 72,
    retakePolicy: 'Can retake after 1 day if failed',
    mainPageUrl: '/massachusetts-rmv-permit-test',
    pageUrl: '/massachusetts-rmv-permit-test-25-questions',
    stateGuideUrl: '/state-guides/massachusetts',
    handbookUrl: '/handbooks/massachusetts',
    year: 2026,
}

export const massachusettsPermitTestQuestions: Question[] = [
    {
        id: 1,
        question: "Which agency handles driver licensing and permits in Massachusetts?",
        options: ["Massachusetts Real Estate", "Massachusetts Registry of Motor Vehicles (RMV)", "Massachusetts DOT", "Massachusetts Secretary of State"],
        correctAnswer: 1,
        explanation: "Massachusetts's Registry of Motor Vehicles (RMV) handles driver licensing, vehicle registration, and permits. Massachusetts does not have a traditional Real Estate — the RMV is the licensing authority in the state."
    },
    {
        id: 2,
        question: "Massachusetts's real RMV knowledge test has 25 questions. How many must you get right to pass — and what makes this threshold unusual?",
        options: ["22 correct (88%) — higher than most states", "20 correct (80%) — same as most states", "18 correct (72%) — lower than most states", "15 correct (60%) — much lower than most states"],
        correctAnswer: 2,
        explanation: "Massachusetts requires only 18 out of 25 correct — a 72% passing threshold. This is lower than the 80% standard used by most other states. You can miss up to 7 questions and still pass. While the bar is lower, don't treat this as a reason to under-prepare."
    },
    {
        id: 3,
        question: "How many questions can you miss on Massachusetts's RMV knowledge test and still pass?",
        options: ["3 questions (88% threshold)", "5 questions (80% threshold)", "7 questions (72% threshold)", "10 questions (60% threshold)"],
        correctAnswer: 2,
        explanation: "You can miss up to 7 questions on Massachusetts's 25-question test and still pass at 72%. This is more lenient than the typical 80% standard. However, fully understanding the rules of the road matters for your safety long after the test."
    },
    {
        id: 4,
        question: "What is the minimum age to apply for a Massachusetts real estate license?",
        options: ["15", "16", "15 and a half", "14"],
        correctAnswer: 1,
        explanation: "Massachusetts requires applicants to be at least 16 years old to apply for a real estate license. This is older than many other states, which allow permits at 15 or even 14. Massachusetts also requires completion of an approved real estate exam prep program before getting a junior operator's license."
    },
    {
        id: 5,
        question: "What is the legal BAC limit for a Massachusetts driver age 21 or older?",
        options: ["0.04%", "0.06%", "0.08%", "0.10%"],
        correctAnswer: 2,
        explanation: "Massachusetts sets the OUI (Operating Under the Influence) limit at 0.08% BAC for drivers 21 and older. Massachusetts uses the term OUI rather than DUI. Commercial drivers face a stricter 0.04% limit."
    },
    {
        id: 6,
        question: "Massachusetts uses the term 'OUI' for drunk driving. What does OUI stand for?",
        options: ["Operating Under Influence", "Operating Under Intoxication", "Offense Under Impairment", "Operating Unfit Impaired"],
        correctAnswer: 0,
        explanation: "Massachusetts uses OUI — Operating Under the Influence — rather than DUI or DWI. The concept is the same: operating a motor vehicle while impaired by alcohol or drugs, or with a BAC of 0.08% or higher for drivers 21 and older."
    },
    {
        id: 7,
        question: "What BAC triggers Massachusetts's zero tolerance law for drivers under 21?",
        options: ["0.00%", "0.02%", "0.04%", "0.08%"],
        correctAnswer: 1,
        explanation: "Massachusetts sets the underage OUI threshold at 0.02% BAC for drivers under 21 — effectively zero. Any measurable amount of alcohol above 0.02% is illegal for drivers under 21 in Massachusetts."
    },
    {
        id: 8,
        question: "Under Massachusetts's GDL program, how many hours of supervised driving must a permit holder log?",
        options: ["30 hours (no night requirement)", "40 hours (10 at night)", "40 hours (no specific night requirement)", "50 hours (10 at night)"],
        correctAnswer: 1,
        explanation: "Massachusetts requires 40 hours of supervised driving practice, with at least 10 hours driven at night. The supervising driver must be a licensed adult age 21 or older seated in the front seat. These hours must be certified before applying for a junior operator's license."
    },
    {
        id: 9,
        question: "What is the default speed limit on Massachusetts urban streets when no speed limit sign is posted?",
        options: ["25 mph", "30 mph", "35 mph", "45 mph"],
        correctAnswer: 1,
        explanation: "Massachusetts sets the default speed limit in thickly settled districts (urban areas) at 30 mph when no sign is posted. On rural roads, the default is 50 mph. Always check for posted signs — use defaults only when no sign is visible."
    },
    {
        id: 10,
        question: "What is Massachusetts's default speed limit on rural roads — and how does it differ from most states?",
        options: ["55 mph — same as most states", "50 mph — slightly lower than most states' 55 mph", "65 mph — higher than most states", "45 mph — significantly lower than most states"],
        correctAnswer: 1,
        explanation: "Massachusetts's default rural road speed limit is 50 mph — slightly lower than the 55 mph default used by most other states. Massachusetts's more dense and older road infrastructure contributed to this lower default limit. Always check for posted speed limit signs."
    },
    {
        id: 11,
        question: "Massachusetts's Move Over law requires what when approaching a stationary emergency vehicle with flashing lights?",
        options: ["Slow to 25 mph only", "Move one lane away if safe, or reduce speed if a lane change is not possible", "Stop completely behind the vehicle", "Only applies to police vehicles"],
        correctAnswer: 1,
        explanation: "Massachusetts's Move Over law requires drivers to move one lane away from stationary emergency, law enforcement, utility, or tow vehicles with flashing lights. If a safe lane change is not possible, significantly reduce speed. The law applies to all such vehicles."
    },
    {
        id: 12,
        question: "When must Massachusetts drivers use their headlights?",
        options: ["Only from sunset to sunrise", "From 30 minutes after sunset to 30 minutes before sunrise, and when visibility is under 500 feet", "Only in rain and fog", "Only after 9 PM"],
        correctAnswer: 1,
        explanation: "Massachusetts requires headlights from one-half hour after sunset to one-half hour before sunrise, and whenever weather reduces visibility to less than 500 feet. This includes rain, fog, and snow — not just complete darkness."
    },
    {
        id: 13,
        question: "You approach a school bus stopped on an undivided road with red flashing lights. What must you do?",
        options: ["Stop only if you are behind the bus", "Stop in both directions at least 100 feet from the bus", "Slow to 15 mph and proceed carefully", "Stop only if children are visible"],
        correctAnswer: 1,
        explanation: "Massachusetts law requires all vehicles in both directions on an undivided road to stop at least 100 feet from a school bus with flashing red lights. Wait until the stop arm retracts and lights stop before proceeding. On a divided highway, only traffic behind the bus must stop."
    },
    {
        id: 14,
        question: "What is the minimum recommended following distance in Massachusetts under normal conditions?",
        options: ["1 second", "2 seconds", "3 seconds", "4 seconds"],
        correctAnswer: 2,
        explanation: "Massachusetts recommends a minimum 3-second following distance under normal conditions. In rain, fog, or on wet roads, increase to at least 6 seconds. Given Massachusetts's heavy traffic and stop-and-go city driving, maintaining adequate following distance is especially important."
    },
    {
        id: 15,
        question: "A flashing red traffic signal requires you to:",
        options: ["Slow down and proceed with caution", "Yield to cross traffic and proceed", "Come to a complete stop, yield, and proceed when safe", "Continue at the posted speed"],
        correctAnswer: 2,
        explanation: "A flashing red signal is treated exactly like a stop sign in Massachusetts. Make a complete stop, yield to all traffic and pedestrians, and proceed only when safe. A flashing yellow means caution — slow down but a full stop is not required."
    },
    {
        id: 16,
        question: "On a two-lane road in Massachusetts, when may you cross a solid yellow center line to pass?",
        options: ["When the road ahead is visible for at least 500 feet", "You may never cross a solid yellow line on your side to pass", "When the vehicle ahead is traveling below the speed limit", "When you signal for at least 200 feet first"],
        correctAnswer: 1,
        explanation: "A solid yellow line on your side prohibits crossing the center line to pass. No exceptions. Only when a broken (dashed) yellow line is on your side may you pass when it is safe. Always verify the line type on your side before attempting to pass."
    },
    {
        id: 17,
        question: "Massachusetts seatbelt law requires which occupants to wear a seatbelt?",
        options: ["Driver and front-seat passengers only", "All occupants", "Only those under 16", "Driver only"],
        correctAnswer: 1,
        explanation: "Massachusetts requires all vehicle occupants — in all seating positions — to wear a seatbelt. Massachusetts has primary enforcement. Children must use appropriate child safety seats based on age and size."
    },
    {
        id: 18,
        question: "When an emergency vehicle with lights and siren approaches, you must:",
        options: ["Speed up and move out of the way quickly", "Pull to the right edge and stop", "Slow to 15 mph in your lane", "Move to the center lane"],
        correctAnswer: 1,
        explanation: "Massachusetts law requires you to immediately pull to the right edge of the road and stop when an emergency vehicle with active lights and siren approaches. Remain stopped until the vehicle passes. If in an intersection, clear it first, then pull over."
    },
    {
        id: 19,
        question: "Can you make a right turn on a red light in Massachusetts?",
        options: ["No, right turns on red are prohibited statewide", "Yes, after a complete stop, yielding to traffic and pedestrians, unless a sign prohibits it", "Yes, without stopping if the turn is clear", "Only on one-way streets"],
        correctAnswer: 1,
        explanation: "Right turns on red are permitted in Massachusetts after a complete stop, yielding to all pedestrians and cross traffic, and unless a 'No Turn on Red' sign is posted. Always make a full stop — rolling through on red is illegal even when turning right."
    },
    {
        id: 20,
        question: "You arrive at a 4-way stop at the same time as a vehicle to your right. Who goes first?",
        options: ["You go first", "The vehicle on your right goes first", "Whoever is going straight has priority", "The larger vehicle goes first"],
        correctAnswer: 1,
        explanation: "When two vehicles arrive simultaneously at a 4-way stop, the vehicle on the right has the right of way. You must yield to the driver on your right. This is the standard tie-breaking rule used at all-way stops."
    },
    {
        id: 21,
        question: "What is the maximum speed limit on Massachusetts rural interstate highways?",
        options: ["55 mph", "60 mph", "65 mph", "70 mph"],
        correctAnswer: 2,
        explanation: "Massachusetts's maximum speed limit on rural interstate highways is 65 mph for passenger vehicles. This is lower than many other states. Some urban sections may have lower posted limits. Always check posted signs."
    },
    {
        id: 22,
        question: "Massachusetts requires Junior Operator License (JOL) holders to follow GDL restrictions. What is the nighttime driving curfew for a JOL holder?",
        options: ["No curfew — JOL holders may drive at any time", "No driving between midnight and 5 AM (unless accompanied by a licensed adult)", "No driving between 1 AM and 5 AM (unless accompanied by a licensed adult)", "No driving after 11 PM"],
        correctAnswer: 1,
        explanation: "Massachusetts Junior Operator License (JOL) holders under 18 may not drive between midnight and 5 AM unless accompanied by a licensed adult 21 or older. During the first 6 months of the JOL, no passengers under 18 are allowed unless they are family members."
    },
    {
        id: 23,
        question: "A pedestrian is crossing in a marked crosswalk. You must:",
        options: ["Proceed if you have a green light", "Slow to 15 mph and proceed carefully", "Stop and yield until the pedestrian has completely crossed the roadway", "Yield only if the pedestrian is in your lane"],
        correctAnswer: 2,
        explanation: "Massachusetts law requires stopping and yielding to pedestrians in marked crosswalks. You must remain stopped until the pedestrian has completely cleared the roadway — even with a green light. Pedestrian right-of-way in a crosswalk is absolute."
    },
    {
        id: 24,
        question: "Massachusetts law requires drivers to signal before turning at least how far in advance?",
        options: ["50 feet", "100 feet", "150 feet", "200 feet"],
        correctAnswer: 1,
        explanation: "Massachusetts law requires drivers to signal at least 100 feet before turning or changing lanes. On higher-speed roads, earlier signaling is advisable. Failing to signal or signaling too late is illegal and potentially dangerous."
    },
    {
        id: 25,
        question: "What should you do if your vehicle's accelerator becomes stuck while driving?",
        options: ["Slam the brakes as hard as possible immediately", "Shift to neutral, apply steady brake pressure, and safely steer to the side of the road", "Turn off the ignition immediately", "Accelerate to blow out the engine"],
        correctAnswer: 1,
        explanation: "If your accelerator sticks, shift to neutral — this disengages the engine from the wheels — then apply steady brake pressure and steer safely to the side of the road. This sequence maintains steering control while reducing speed. Slamming brakes at high speed without shifting can cause skidding."
    },
]

export const massachusettsPermitTestFaq: { question: string; answer: string }[] = [
    {
        question: "How many questions are on the Massachusetts RMV permit test?",
        answer: "The Massachusetts Registry of Motor Vehicles (RMV) knowledge test has 25 multiple-choice questions. You need to answer at least 18 correctly to pass — a 72% passing threshold."
    },
    {
        question: "What score do you need to pass the Massachusetts permit test?",
        answer: "You need 18 out of 25 correct — a 72% passing score. This is lower than the 80% standard used by most other states. You can miss up to 7 questions and still pass."
    },
    {
        question: "How many questions can you miss on the Massachusetts RMV knowledge test?",
        answer: "You can miss up to 7 questions on Massachusetts's 25-question test. The 72% threshold is more lenient than most states, but understanding the rules of the road thoroughly is still important for your safety."
    },
    {
        question: "Is there a time limit on the Massachusetts permit test?",
        answer: "Massachusetts does not impose a strict time limit on the knowledge test. Take your time to read each question carefully — even though the passing threshold is 72%, accuracy and understanding are important for safe driving."
    },
    {
        question: "What happens if I fail the Massachusetts RMV permit test?",
        answer: "If you fail, you must wait 1 day before retaking. Review the Massachusetts Driver's Manual focusing on areas where you missed questions. Even with a 72% passing threshold, aim to score above 85% on practice tests to build confidence and solid knowledge."
    },
    {
        question: "Can I take the Massachusetts permit test online?",
        answer: "As of 2026, the Massachusetts RMV knowledge test must be taken in person at an RMV Service Center. Visit the Massachusetts RMV website to find a service center near you and check for appointment availability."
    },
    {
        question: "What is the minimum age to get a real estate license in Massachusetts?",
        answer: "You must be at least 16 years old to apply for a Massachusetts real estate license. Massachusetts also requires teens to complete an approved real estate exam prep program before receiving a junior operator's license."
    },
    {
        question: "Why is the Massachusetts RMV passing score lower than most states?",
        answer: "Massachusetts requires only 18 out of 25 correct — 72% — compared to 80% in most states. You can miss up to 7 questions. While this is the lowest threshold in the region, Massachusetts compensates with required real estate exam prep courses and strict GDL requirements for junior operators."
    },
]
