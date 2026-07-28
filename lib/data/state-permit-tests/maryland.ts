import type { Question, StatePermitTestConfig } from '@/components/state-permit-test/types'

export const marylandPermitTestConfig: StatePermitTestConfig = {
    stateName: 'Maryland',
    stateCode: 'MD',
    departmentName: 'Maryland MVA',
    departmentAbbr: 'MVA',
    realQuestionCount: 25,
    realPassCount: 22,
    passPercent: 88,
    retakePolicy: 'Can retake after 1 day if failed',
    mainPageUrl: '/maryland-mva-permit-test',
    pageUrl: '/maryland-mva-permit-test-25-questions',
    stateGuideUrl: '/state-guides/maryland',
    handbookUrl: '/handbooks/maryland',
    year: 2026,
}

export const marylandPermitTestQuestions: Question[] = [
    {
        id: 1,
        question: "Which agency handles driver licensing and permits in Maryland?",
        options: ["Maryland Real Estate", "Maryland Motor Vehicle Administration (MVA)", "Maryland DOT", "Maryland Secretary of State"],
        correctAnswer: 1,
        explanation: "Maryland's Motor Vehicle Administration (MVA) handles driver licensing, vehicle registration, and permits. Maryland does not have a traditional Real Estate — the MVA is the equivalent agency in Maryland."
    },
    {
        id: 2,
        question: "Maryland's real MVA knowledge test has 25 questions. How many must you answer correctly to pass — and what makes this threshold unusual?",
        options: ["18 correct (72%) — lower than most states", "20 correct (80%) — same as most states", "22 correct (88%) — higher than most states", "25 correct (100%) — perfect score required"],
        correctAnswer: 2,
        explanation: "Maryland requires 22 out of 25 correct — an 88% passing threshold. This is significantly higher than the 80% standard used by most other states. Maryland's stricter standard means you can miss only 3 questions. This makes thorough preparation especially important."
    },
    {
        id: 3,
        question: "How many questions can you miss on Maryland's MVA knowledge test and still pass?",
        options: ["5 questions (80% threshold)", "4 questions (84% threshold)", "3 questions (88% threshold)", "2 questions (92% threshold)"],
        correctAnswer: 2,
        explanation: "You can miss only 3 questions on Maryland's 25-question test. At 88%, Maryland's passing threshold is one of the highest in the nation. If you miss 4 or more questions, you fail. Thorough study of the Maryland Driver's Manual is essential."
    },
    {
        id: 4,
        question: "What is the minimum age for a Maryland real estate license applicant?",
        options: ["15", "15 and three-quarters (15¾)", "16", "14"],
        correctAnswer: 1,
        explanation: "Maryland requires applicants to be at least 15 years and 9 months old (15¾) to apply for a real estate license. This is a precise age requirement — slightly higher than the typical 15-year minimum used by many other states."
    },
    {
        id: 5,
        question: "What is the legal BAC limit for a Maryland driver age 21 or older?",
        options: ["0.04%", "0.06%", "0.08%", "0.10%"],
        correctAnswer: 2,
        explanation: "Maryland sets the DUI limit at 0.08% BAC for drivers 21 and older. Maryland also has a separate DWI charge for BAC between 0.07% and 0.08%, which carries penalties but is distinct from DUI. Commercial drivers face a stricter 0.04% limit."
    },
    {
        id: 6,
        question: "What BAC triggers Maryland's zero tolerance law for drivers under 21?",
        options: ["0.00%", "0.02%", "0.04%", "0.08%"],
        correctAnswer: 1,
        explanation: "Maryland sets the underage alcohol limit at 0.02% BAC for drivers under 21. This is the standard zero tolerance threshold used by most states — effectively prohibiting any alcohol consumption before driving for those under 21."
    },
    {
        id: 7,
        question: "Under Maryland's GDL program, how many hours of supervised driving must a permit holder complete?",
        options: ["30 hours (10 at night)", "60 hours (10 at night)", "40 hours (10 at night)", "50 hours (10 at night)"],
        correctAnswer: 1,
        explanation: "Maryland requires 60 hours of supervised driving practice, with at least 10 hours driven at night. The supervising driver must be a licensed driver age 21 or older seated in the front seat. These hours must be certified before applying for a provisional license."
    },
    {
        id: 8,
        question: "What is the default speed limit on Maryland urban streets when no speed limit sign is posted?",
        options: ["25 mph", "30 mph", "35 mph", "45 mph"],
        correctAnswer: 1,
        explanation: "Maryland sets the default speed limit in urban and business areas at 30 mph when no sign is posted. On rural roads, the default is 55 mph. Always check for posted signs — but use these defaults when no sign is visible."
    },
    {
        id: 9,
        question: "Maryland's Move Over law requires what when approaching a stationary emergency vehicle with flashing lights on a highway?",
        options: ["Slow to 25 mph only", "Move one lane away if safe, or reduce speed to 20 mph below the posted limit if a lane change is not possible", "Stop completely behind the vehicle", "Only required for police — not tow trucks"],
        correctAnswer: 1,
        explanation: "Maryland's Move Over law requires moving one lane away from stationary emergency, law enforcement, utility, or tow vehicles with flashing lights. If a safe lane change is not possible, reduce speed to at least 20 mph below the posted speed limit (or 20 mph on roads posted under 40 mph)."
    },
    {
        id: 10,
        question: "You approach a school bus stopped on an undivided road with flashing red lights and stop arm extended. You must:",
        options: ["Stop only if you are directly behind the bus", "Stop in both directions at least 20 feet from the bus", "Slow to 15 mph and pass carefully", "Stop only if children are visible outside"],
        correctAnswer: 1,
        explanation: "Maryland law requires all vehicles in both directions on an undivided road to stop at least 20 feet from a school bus displaying flashing red lights. Wait until the stop arm retracts and lights stop before proceeding. On a divided highway with a median, only traffic behind the bus must stop."
    },
    {
        id: 11,
        question: "When must Maryland drivers turn on their headlights?",
        options: ["Only from sunset to sunrise", "From 30 minutes after sunset to 30 minutes before sunrise, and when visibility is under 1,000 feet", "Only in rain and fog", "Only at night between 10 PM and 5 AM"],
        correctAnswer: 1,
        explanation: "Maryland requires headlights from one-half hour after sunset to one-half hour before sunrise, and whenever weather reduces visibility to less than 1,000 feet. Maryland's threshold of 1,000 feet is more conservative than many other states, which use 500 feet."
    },
    {
        id: 12,
        question: "A flashing red traffic signal requires you to:",
        options: ["Slow down and proceed with caution", "Yield to cross traffic and proceed", "Come to a complete stop, yield, and proceed when safe", "Continue at the posted speed"],
        correctAnswer: 2,
        explanation: "A flashing red signal is treated like a stop sign in Maryland. Make a complete stop, yield to all traffic and pedestrians, and proceed when the way is clear. A flashing yellow means caution — reduce speed but a full stop is not required."
    },
    {
        id: 13,
        question: "What is the minimum recommended following distance in Maryland under normal conditions?",
        options: ["1 second", "2 seconds", "3 seconds", "4 seconds"],
        correctAnswer: 2,
        explanation: "Maryland recommends a minimum 3-second following distance under normal conditions. In rain, fog, or on wet roads, increase to at least 6 seconds. The 3-second rule: count 3 seconds from when the car ahead passes a fixed point to when you reach the same point."
    },
    {
        id: 14,
        question: "On a two-lane road in Maryland, when may you legally cross a solid yellow center line?",
        options: ["When the road ahead is visible for at least 500 feet", "You may never cross a solid yellow line on your side to pass", "When the vehicle ahead is going significantly below the limit", "When you signal for at least 200 feet in advance"],
        correctAnswer: 1,
        explanation: "A solid yellow line on your side is an absolute prohibition on passing. No exceptions. Only when a dashed (broken) yellow line is on your side may you pass when it is safe to do so."
    },
    {
        id: 15,
        question: "Maryland seatbelt law requires which occupants to wear a seatbelt?",
        options: ["Driver and front-seat passengers only", "All occupants", "Only those under 18", "Driver only"],
        correctAnswer: 1,
        explanation: "Maryland requires all vehicle occupants — in all seating positions — to wear a seatbelt. Maryland has primary enforcement. Children must use appropriate child safety seats based on age and size."
    },
    {
        id: 16,
        question: "When an emergency vehicle with lights and siren approaches from behind, you must:",
        options: ["Accelerate to clear the area", "Pull to the right edge and stop", "Slow to 10 mph in your current lane", "Move to the left lane and slow down"],
        correctAnswer: 1,
        explanation: "Maryland law requires you to immediately pull to the right edge of the road and stop when an emergency vehicle with active lights and siren approaches. Remain stopped until the vehicle passes. If in an intersection, clear it first, then pull over."
    },
    {
        id: 17,
        question: "Can you make a right turn on a red light in Maryland?",
        options: ["No, right turns on red are prohibited statewide", "Yes, after a complete stop, yielding to traffic and pedestrians, unless a sign prohibits it", "Yes, without stopping if the turn is clear", "Only on one-way streets"],
        correctAnswer: 1,
        explanation: "Right turns on red are permitted in Maryland after a complete stop, yielding to all pedestrians and cross traffic, and unless a 'No Turn on Red' sign is posted. Always make a full stop — rolling through on red while turning right is illegal."
    },
    {
        id: 18,
        question: "You arrive at a 4-way stop at exactly the same time as a vehicle to your left. Who goes first?",
        options: ["The vehicle on your left goes first", "You go first — yield to the right means the other driver yields to you", "The larger vehicle goes first", "Whoever got there first in the sequence goes first"],
        correctAnswer: 1,
        explanation: "At a 4-way stop when vehicles arrive simultaneously, the driver to the right has the right of way. The vehicle on your left must yield to you. This is the universal tie-breaking rule. If you arrived clearly before the other driver, you go first regardless of direction."
    },
    {
        id: 19,
        question: "What does a steady red arrow traffic signal mean?",
        options: ["You may turn in the arrow direction if no traffic is present", "You must stop and may not move in the arrow direction until the signal changes", "Slow down and turn carefully in the arrow direction", "The signal is broken — treat as a stop sign"],
        correctAnswer: 1,
        explanation: "A steady red arrow means you must stop and may not turn in the indicated direction until the signal changes to green. Unlike a green ball (which allows right turns on red after stopping), a red arrow prohibits movement in that direction."
    },
    {
        id: 20,
        question: "What is the maximum speed limit on Maryland rural interstate highways?",
        options: ["55 mph", "60 mph", "65 mph", "70 mph"],
        correctAnswer: 2,
        explanation: "Maryland's maximum speed limit on rural interstate highways is 65 mph for passenger vehicles. Some urban sections may have lower posted limits. Maryland's maximum of 65 mph is lower than the 70 mph limit used in many other states."
    },
    {
        id: 21,
        question: "A pedestrian is crossing in a marked crosswalk. You must:",
        options: ["Proceed if you have a green light", "Slow to 20 mph and proceed carefully", "Stop and yield until the pedestrian has completely cleared the roadway", "Yield only if the pedestrian is in your direct lane"],
        correctAnswer: 2,
        explanation: "Maryland law requires stopping and yielding to pedestrians in crosswalks. You must remain stopped until the pedestrian has completely crossed — even if you have a green light. Pedestrian right-of-way in a crosswalk is absolute in Maryland."
    },
    {
        id: 22,
        question: "Maryland's MVA passing threshold is 88% — how does this compare to most other states?",
        options: ["It is lower than the national average of 90%", "It is the same as most states — 80% is the standard", "It is higher than the 80% standard used by most states — making it harder to pass", "It is the lowest in the country"],
        correctAnswer: 2,
        explanation: "Maryland's 88% (22/25) passing threshold is significantly higher than the 80% standard used by most other states. This means you can only miss 3 questions — far less room for error than states where you can miss 7 or 8. Thorough preparation of the Maryland Driver's Manual is critical."
    },
    {
        id: 23,
        question: "Maryland law requires you to signal before a turn or lane change at least how far in advance?",
        options: ["50 feet", "100 feet", "200 feet", "300 feet"],
        correctAnswer: 1,
        explanation: "Maryland law requires drivers to signal at least 100 feet before turning or changing lanes. On higher-speed roads, signaling earlier is advisable. Failing to signal or signaling too late is illegal and dangerous."
    },
    {
        id: 24,
        question: "When driving in fog in Maryland, which lights should you use?",
        options: ["High beams for maximum range", "Low beams or fog lights", "Hazard flashers only", "No special requirement"],
        correctAnswer: 1,
        explanation: "In fog, use low beams or dedicated fog lights — never high beams. High beams reflect off fog particles and create glare. Maryland's coastal and low-lying areas can experience sudden and dense fog, so this rule is particularly important in those regions."
    },
    {
        id: 25,
        question: "You are at a railroad crossing with flashing lights and a lowered gate. What must you do?",
        options: ["Slow to 15 mph and proceed if you can see no train", "Stop and wait until the gate rises and lights stop flashing", "Stop, look, and proceed if you are certain no train is coming", "Only stop if a sign is present requiring it"],
        correctAnswer: 1,
        explanation: "When a railroad crossing has active warning signals (flashing lights) and/or a lowered gate, stop completely and wait until the gate fully rises and lights stop flashing. Never try to beat a train or drive around a gate — trains cannot stop quickly and are much faster than they appear."
    },
]

export const marylandPermitTestFaq: { question: string; answer: string }[] = [
    {
        question: "How many questions are on the Maryland MVA permit test?",
        answer: "The Maryland Motor Vehicle Administration (MVA) knowledge test has 25 multiple-choice questions. You need to answer at least 22 correctly to pass — an 88% passing threshold, which is higher than most states."
    },
    {
        question: "What score do you need to pass the Maryland permit test?",
        answer: "You need 22 out of 25 correct — a passing score of 88%. This is significantly higher than the 80% standard used by most other states. You can miss only 3 questions. Missing 4 or more means you fail."
    },
    {
        question: "How many questions can you miss on the Maryland MVA knowledge test?",
        answer: "You can miss only 3 questions on Maryland's 25-question test. The 88% threshold means far less room for error than the 80% standard in most states. Thorough preparation is especially important for the Maryland permit test."
    },
    {
        question: "Is there a time limit on the Maryland permit test?",
        answer: "Maryland does not impose a strict time limit on the knowledge test. Read each question carefully — given the high 88% passing threshold, taking time to read thoroughly is especially valuable."
    },
    {
        question: "What happens if I fail the Maryland MVA permit test?",
        answer: "If you fail, you must wait 1 day before retaking. Given Maryland's strict 88% passing threshold, thorough preparation is essential. Review the Maryland Driver's Manual carefully and aim to score consistently above 90% on practice tests before your appointment."
    },
    {
        question: "Can I take the Maryland permit test online?",
        answer: "As of 2026, Maryland's MVA knowledge test must be taken in person at an MVA office. Some MVA Express locations may also offer the test. Visit the Maryland MVA website to find a location and schedule an appointment."
    },
    {
        question: "What is the minimum age to get a Maryland real estate license?",
        answer: "You must be at least 15 years and 9 months old (15¾) to apply for a Maryland real estate license. This is slightly older than the standard 15-year minimum used by many other states."
    },
    {
        question: "Why is the Maryland MVA passing score higher than most states?",
        answer: "Maryland requires 22 out of 25 correct — 88% — compared to 80% in most states. You can only miss 3 questions. Maryland's higher threshold reflects the state's commitment to ensuring aspiring agents have thorough knowledge before getting behind the wheel."
    },
]
