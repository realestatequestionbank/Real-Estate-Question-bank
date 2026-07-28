import type { Question, StatePermitTestConfig } from '@/components/state-permit-test/types'

export const tennesseePermitTestConfig: StatePermitTestConfig = {
    stateName: 'Tennessee',
    stateCode: 'TN',
    departmentName: 'Tennessee DOS',
    departmentAbbr: 'DOS',
    realQuestionCount: 30,
    realPassCount: 24,
    passPercent: 80,
    retakePolicy: 'Can retake after 1 day if failed',
    mainPageUrl: '/tennessee-dos-permit-test',
    pageUrl: '/tennessee-real-estate-permit-test-30-questions',
    stateGuideUrl: '/state-guides/tennessee',
    handbookUrl: '/handbooks/tennessee',
    year: 2026,
}

export const tennesseePermitTestQuestions: Question[] = [
    {
        id: 1,
        question: "What is the default speed limit on most urban streets in Tennessee when no speed limit sign is posted?",
        options: ["25 mph", "30 mph", "35 mph", "40 mph"],
        correctAnswer: 1,
        explanation: "Tennessee sets the default speed limit in urban areas at 30 mph when no other limit is posted. This is commonly tested because students often confuse it with NC's 35 mph urban default or the common assumption of 25 mph."
    },
    {
        id: 2,
        question: "Under Tennessee's GDL program, at what age can a teenager apply for a real estate license?",
        options: ["14", "15", "16", "15 and a half"],
        correctAnswer: 1,
        explanation: "In Tennessee, teens can apply for a real estate license at age 15. The permit allows supervised driving practice before moving to a restricted license at age 16 after meeting the required supervised hours."
    },
    {
        id: 3,
        question: "You are driving on a rural Tennessee highway with no speed limit signs posted. What is the maximum legal speed?",
        options: ["45 mph", "50 mph", "55 mph", "65 mph"],
        correctAnswer: 2,
        explanation: "The default rural road speed limit in Tennessee is 55 mph when no other limit is posted. On interstate highways, the limit is higher — typically 70 mph — but rural two-lane roads default to 55 mph."
    },
    {
        id: 4,
        question: "Tennessee's zero tolerance law sets the illegal BAC for drivers under 21 at:",
        options: ["0.00% — any measurable amount", "0.02%", "0.04%", "0.08%"],
        correctAnswer: 1,
        explanation: "Tennessee sets the underage DUI threshold at 0.02% BAC — not zero. This differs from some states (like NC) that use absolute zero tolerance. A driver under 21 with a BAC of 0.02% or higher faces license revocation and criminal penalties."
    },
    {
        id: 5,
        question: "A teen with a Tennessee restricted license (age 16) wants to drive at 11:30 PM on a Friday. Is this permitted?",
        options: ["Yes, as long as a parent gave verbal permission", "Yes, restrictions only apply on school nights", "No, drivers under 17 cannot drive between 11 PM and 6 AM", "No, restricted drivers cannot drive after 10 PM under any circumstances"],
        correctAnswer: 2,
        explanation: "Tennessee prohibits drivers under 17 from driving between 11 PM and 6 AM unless accompanied by a licensed adult age 21 or older, or driving to/from work or a school event. The curfew is 11 PM — not 10 PM."
    },
    {
        id: 6,
        question: "Which statement about cell phone use for Tennessee drivers under 18 is correct?",
        options: ["Hands-free calls are permitted while driving", "Any cell phone use — including hands-free — is prohibited while driving", "Texting is prohibited, but talking on a handheld phone is allowed", "No restrictions apply unless driving on the highway"],
        correctAnswer: 1,
        explanation: "Tennessee prohibits drivers under 18 from using any mobile device while driving, including hands-free calls. Adult drivers (18+) are prohibited from using a handheld phone while driving. Teen drivers face the strictest restrictions."
    },
    {
        id: 7,
        question: "How many hours of supervised driving must a Tennessee GDL permit holder complete before upgrading to a restricted license?",
        options: ["30 hours total", "40 hours (including 5 at night)", "50 hours (including 10 at night)", "60 hours total"],
        correctAnswer: 2,
        explanation: "Tennessee requires 50 hours of supervised driving practice, of which at least 10 hours must be at night. This supervised experience builds the skills needed before a teen drives independently with a restricted license."
    },
    {
        id: 8,
        question: "You are driving on a Tennessee highway and see emergency vehicles pulled over with flashing lights. What does the Move Over law require?",
        options: ["Move over only for police vehicles", "Slow to 25 mph regardless of circumstances", "Move one lane away if safe, or slow to a safe speed if a lane change isn't possible", "Stop completely until the emergency vehicles leave"],
        correctAnswer: 2,
        explanation: "Tennessee's Move Over law requires drivers to move one lane away from any stopped emergency, law enforcement, towing, or utility vehicle with flashing lights. If a lane change is not safely possible, slow to a speed that is safe for the conditions."
    },
    {
        id: 9,
        question: "What is the legal BAC limit for a driver age 21 or older in Tennessee?",
        options: ["0.04%", "0.06%", "0.08%", "0.10%"],
        correctAnswer: 2,
        explanation: "Tennessee, like all U.S. states, sets the per se DUI limit at 0.08% BAC for drivers 21 and older. Commercial drivers face a stricter 0.04% limit. Reaching 0.08% alone is sufficient grounds for a DUI charge, regardless of apparent impairment."
    },
    {
        id: 10,
        question: "You are approaching a school zone in Tennessee during school hours and warning lights are flashing. What speed limit applies?",
        options: ["10 mph", "15 mph when children are present", "25 mph", "35 mph"],
        correctAnswer: 1,
        explanation: "Tennessee school zones have a 15 mph speed limit when children are present or warning lights are flashing. This is among the strictest school zone limits in the country. Always slow well in advance and watch for children near the roadway."
    },
    {
        id: 11,
        question: "Under Tennessee's implied consent law, a driver suspected of DUI who refuses a chemical test will:",
        options: ["Face no penalty — refusal is a protected right", "Have their license suspended for 1 year (first offense)", "Only be cited for a minor infraction", "Only lose their license if convicted of DUI"],
        correctAnswer: 1,
        explanation: "Tennessee's implied consent law means that by driving on state roads, you have agreed to chemical testing. A first-offense refusal results in a 1-year license revocation. The refusal can also be used as evidence in court. It is rarely in a driver's interest to refuse."
    },
    {
        id: 12,
        question: "What must you do when a school bus stops on a two-lane road and displays flashing red lights and a stop arm?",
        options: ["Stop only if you are behind the bus", "Slow to 25 mph and pass carefully", "Stop at least 20 feet from the bus in both directions until lights stop flashing", "Yield but may pass if no children are visible"],
        correctAnswer: 2,
        explanation: "On a two-lane undivided road, Tennessee law requires vehicles in both directions to stop at least 20 feet from a school bus with flashing red lights. Wait until the arm retracts and lights stop flashing before proceeding. On a divided highway with a median, only traffic behind the bus must stop."
    },
    {
        id: 13,
        question: "You are the first car to arrive at an intersection with a four-way stop. Two seconds later, a car arrives from your right. Who goes first?",
        options: ["You go first because you arrived first", "The car on your right goes first because it arrived after you and is to your right", "You must yield to the car on the right since it arrived within a few seconds of you", "Whoever is going straight has the right of way"],
        correctAnswer: 0,
        explanation: "When you arrive at a 4-way stop clearly before another driver, you have the right of way. The yield-to-the-right rule only applies when two vehicles arrive simultaneously. If you arrived first by any noticeable margin, proceed when safe."
    },
    {
        id: 14,
        question: "What is the minimum following distance recommended in Tennessee under normal driving conditions?",
        options: ["1 second", "2 seconds", "3 seconds", "4 seconds"],
        correctAnswer: 1,
        explanation: "Tennessee recommends a minimum 2-second following distance under normal conditions, with 3 seconds recommended for most drivers. In rain, fog, or on slick roads, increase to 4–6 seconds. The 2-second rule is the minimum; more space is always safer."
    },
    {
        id: 15,
        question: "When is it legal to pass another vehicle using the shoulder of the road in Tennessee?",
        options: ["When the other vehicle is moving slower than the speed limit", "At any time if you signal first", "When directed by a police officer", "It is never legal to pass on the shoulder"],
        correctAnswer: 3,
        explanation: "Passing on the shoulder is illegal in Tennessee. The shoulder is reserved for emergency stops and breakdowns — not for bypassing traffic. Attempting to pass on the shoulder puts other drivers and pedestrians at serious risk."
    },
    {
        id: 16,
        question: "A flashing red traffic signal at an intersection means:",
        options: ["Slow down and proceed with caution", "Stop completely, yield to traffic, then proceed when safe", "The signal is broken — treat as an uncontrolled intersection", "Yield only to pedestrians, then proceed"],
        correctAnswer: 1,
        explanation: "A flashing red light is treated exactly like a stop sign in Tennessee. Come to a complete stop, look in all directions, yield to existing traffic and pedestrians, and proceed when the way is clear. A flashing yellow means caution — slow down but a full stop is not required."
    },
    {
        id: 17,
        question: "You are driving on an interstate in Tennessee. What is the maximum speed limit in most areas?",
        options: ["55 mph", "65 mph", "70 mph", "75 mph"],
        correctAnswer: 2,
        explanation: "Tennessee's standard interstate speed limit is 70 mph for passenger vehicles. Some urban sections may have lower posted limits. Always check posted signs — the default interstate limit is 70 mph but segments through cities may be lower."
    },
    {
        id: 18,
        question: "Tennessee's seatbelt law requires which occupants to wear a seatbelt?",
        options: ["Only the driver", "Driver and all front-seat passengers", "All occupants of the vehicle", "Only occupants under age 18"],
        correctAnswer: 2,
        explanation: "Tennessee requires all vehicle occupants — front and back seat — to wear a seatbelt. Tennessee has primary enforcement, meaning officers can stop a vehicle solely for a seatbelt violation without needing another reason."
    },
    {
        id: 19,
        question: "On a two-lane road, you see a solid yellow line on your side of the center. What does this mean?",
        options: ["Passing is permitted when the road ahead is clear", "Passing is prohibited — do not cross the yellow line to pass", "Passing is permitted only if the other vehicle is stopped", "Passing is permitted at speeds above 45 mph"],
        correctAnswer: 1,
        explanation: "A solid yellow line on your side of the road prohibits passing. You must not cross the solid yellow line to overtake another vehicle. A broken yellow line on your side means passing is permitted when safe. Always check both sides of the center line."
    },
    {
        id: 20,
        question: "You are approaching a pedestrian crosswalk and a pedestrian has stepped off the curb and is crossing. What must you do?",
        options: ["Slow to 15 mph and proceed if the pedestrian is in a different lane", "Stop and remain stopped until the pedestrian has completely crossed the roadway", "Honk once to signal your presence and proceed carefully", "Yield only if the pedestrian is in your direct path"],
        correctAnswer: 1,
        explanation: "Tennessee law requires drivers to stop and yield the entire roadway to pedestrians in a marked crosswalk. You may not proceed until the pedestrian has completely crossed — even if they are in a different lane. Pedestrian right-of-way is absolute in a crosswalk."
    },
    {
        id: 21,
        question: "Can you turn right on a red light in Tennessee?",
        options: ["No, right turns on red are prohibited statewide", "Yes, after a complete stop and yielding, unless a sign prohibits it", "Yes, without stopping if no traffic is present", "Only between 6 AM and 10 PM"],
        correctAnswer: 1,
        explanation: "Right turns on red are permitted in Tennessee after a complete stop, yielding to pedestrians and cross traffic. Some intersections have 'No Turn on Red' signs — always check. Never proceed on red without first stopping and verifying the intersection is clear."
    },
    {
        id: 22,
        question: "What shape and color identifies a warning sign in Tennessee?",
        options: ["Octagon, red", "Rectangle, white", "Diamond, yellow", "Circle, yellow with an X"],
        correctAnswer: 2,
        explanation: "Warning signs in Tennessee (and nationwide) are yellow diamond-shaped signs that alert drivers to potential hazards ahead — curves, merging lanes, pedestrian crossings, and more. The diamond shape and yellow color together signal 'pay attention, something requires extra care ahead.'"
    },
    {
        id: 23,
        question: "When an emergency vehicle with lights and siren approaches from behind while you are driving, what should you do?",
        options: ["Speed up to reach the next intersection and pull over there", "Stop immediately in your current lane", "Pull to the right edge of the road and stop", "Move to the left lane and reduce speed by 10 mph"],
        correctAnswer: 2,
        explanation: "Tennessee law requires drivers to immediately pull to the right edge of the road and stop when an emergency vehicle with active lights and siren approaches from any direction. Remain stopped until the vehicle has fully passed. Never block an intersection when pulling over."
    },
    {
        id: 24,
        question: "You are driving in heavy fog on a Tennessee highway. Which lights should you use?",
        options: ["High beams, because they illuminate further ahead", "Low beams (or fog lights if equipped)", "Hazard flashers only", "No lights — they reflect off the fog"],
        correctAnswer: 1,
        explanation: "In fog, rain, or snow, use low beams rather than high beams. High beams reflect off fog and actually reduce visibility. If your vehicle has dedicated fog lights, they can improve visibility in low-lying fog. Hazard flashers alone are not a substitute for headlights while moving."
    },
    {
        id: 25,
        question: "You are stopped at a red light. The light turns green, but a large truck is still clearing the intersection. What should you do?",
        options: ["Honk to alert the truck driver and proceed", "Wait for the intersection to clear before entering, even though you have the green", "Flash your headlights and proceed — you have the right of way", "Change lanes to go around the truck"],
        correctAnswer: 1,
        explanation: "A green light gives you the right of way, but it does not guarantee the intersection is clear. Tennessee's defensive driving principle requires you to ensure the path is clear before entering — especially with large vehicles that take longer to clear. Proceed only when the intersection is fully clear."
    },
    {
        id: 26,
        question: "What is the speed limit on Tennessee interstates when passing through urban areas unless otherwise posted?",
        options: ["55 mph", "65 mph", "70 mph", "The same as the rest of the interstate"],
        correctAnswer: 1,
        explanation: "Urban interstate sections in Tennessee often have a posted limit of 65 mph, which is lower than the 70 mph limit on rural interstates. Always check posted signs — urban sections frequently have variable limits and active traffic management."
    },
    {
        id: 27,
        question: "A yellow (amber) flashing signal at an intersection means:",
        options: ["Stop and wait for a green signal", "Slow down, be alert, and proceed with caution", "Yield to all cross traffic completely", "The intersection is temporarily out of service"],
        correctAnswer: 1,
        explanation: "A flashing yellow signal is a caution indicator. Reduce your speed and proceed with alertness — but a full stop is not required (unlike a flashing red). Scan for crossing vehicles and pedestrians before entering the intersection."
    },
    {
        id: 28,
        question: "In Tennessee, what is the minimum age to hold a full (unrestricted) real estate license?",
        options: ["16", "16 and a half", "17", "18"],
        correctAnswer: 2,
        explanation: "Tennessee's GDL system requires drivers to hold a restricted license from age 16 and meet all requirements before obtaining an unrestricted license at age 17. The restricted phase ensures teens have adequate supervised and semi-supervised experience before driving without restrictions."
    },
    {
        id: 29,
        question: "You are driving on a two-lane road and want to pass the vehicle ahead. A solid yellow line is on your side of the center. You may:",
        options: ["Pass if you can complete the maneuver in under 5 seconds", "Pass only if the vehicle ahead is more than 10 mph below the speed limit", "Not pass — the solid yellow on your side prohibits passing", "Pass only if you signal for at least 100 feet first"],
        correctAnswer: 2,
        explanation: "A solid yellow line on your side of the road is an absolute prohibition on passing by crossing the center line. There are no exceptions based on speed differential or time. Wait for a dashed yellow line on your side before attempting to pass."
    },
    {
        id: 30,
        question: "What must a Tennessee GDL permit holder do before being eligible for a restricted license at age 16?",
        options: ["Hold the permit for at least 6 months and complete a driving course", "Hold the permit for 6 months and complete 50 hours supervised driving (10 at night)", "Simply reach age 16 — no additional requirements", "Complete a 30-hour driving course approved by the state"],
        correctAnswer: 1,
        explanation: "Tennessee requires permit holders to: (1) hold the real estate license for at least 180 days (roughly 6 months), (2) complete 50 hours of supervised driving practice with a licensed adult, and (3) of those 50 hours, at least 10 must be driven at night. Both conditions must be met before upgrading to a restricted license."
    },
]

export const tennesseePermitTestFaq: { question: string; answer: string }[] = [
    {
        question: "How many questions are on the Tennessee DOS permit test?",
        answer: "The Tennessee Department of Safety (DOS) permit test has 30 multiple-choice questions. You need to answer at least 24 correctly (80%) to pass."
    },
    {
        question: "What score do you need to pass the Tennessee permit test?",
        answer: "You need 24 out of 30 questions correct — a passing score of 80%. Missing 7 or more questions means you fail and must wait 1 day before retaking."
    },
    {
        question: "How many questions can you miss on the Tennessee DOS test?",
        answer: "You can miss up to 6 questions on the 30-question knowledge test. Missing 7 or more means you fail."
    },
    {
        question: "Is there a time limit on the Tennessee permit test?",
        answer: "No. The Tennessee DOS does not impose a time limit on the knowledge test. Take your time on each question, but do not overthink it."
    },
    {
        question: "What is the retake policy if I fail the Tennessee permit test?",
        answer: "If you fail, you must wait 1 day before retaking. Use that time to review the areas where you struggled. Consistently scoring 90%+ on practice tests before your appointment is the best way to pass on the first try."
    },
    {
        question: "Can I take the Tennessee permit test online?",
        answer: "No. As of 2026, all Tennessee DOS knowledge tests must be taken in person at a Tennessee Department of Safety and Homeland Security Driver Services Center."
    },
    {
        question: "What is Tennessee's GDL nighttime curfew for teen drivers?",
        answer: "Tennessee drivers under 17 with a restricted license may not drive between 11 PM and 6 AM unless accompanied by a licensed adult age 21 or older, or driving to/from a job or school-sponsored activity."
    },
    {
        question: "What is Tennessee's zero tolerance law for underage drivers?",
        answer: "Tennessee's zero tolerance law sets an illegal BAC threshold of 0.02% for drivers under 21 — any amount above that is illegal. This differs from NC's absolute zero tolerance. A BAC of 0.02%+ results in license revocation and criminal penalties for underage drivers."
    },
]
