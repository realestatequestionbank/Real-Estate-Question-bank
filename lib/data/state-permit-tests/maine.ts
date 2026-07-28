import type { Question, StatePermitTestConfig } from '@/components/state-permit-test/types'

export const mainePermitTestConfig: StatePermitTestConfig = {
    stateName: 'Maine',
    stateCode: 'ME',
    departmentName: 'Maine BMV',
    departmentAbbr: 'BMV',
    realQuestionCount: 30,
    realPassCount: 24,
    passPercent: 80,
    retakePolicy: 'Can retake after 1 day if failed',
    mainPageUrl: '/maine-bmv-permit-test',
    pageUrl: '/maine-bmv-permit-test-30-questions',
    stateGuideUrl: '/state-guides/maine',
    handbookUrl: '/handbooks/maine',
    year: 2026,
}

export const mainePermitTestQuestions: Question[] = [
    {
        id: 1,
        question: "Which agency handles driver licensing and permits in Maine?",
        options: ["Maine Real Estate", "Maine Bureau of Motor Vehicles (BMV)", "Maine DOT", "Maine Secretary of State"],
        correctAnswer: 1,
        explanation: "Maine's Bureau of Motor Vehicles (BMV), part of the Secretary of State's office, handles driver licensing, vehicle registration, and permits. If you need a permit or license in Maine, visit a BMV office."
    },
    {
        id: 2,
        question: "What is the minimum age to apply for a Maine real estate license?",
        options: ["14", "15", "16", "15 and a half"],
        correctAnswer: 1,
        explanation: "Maine allows teens to apply for a real estate license at age 15. The permit allows supervised driving practice as the first step in Maine's GDL program."
    },
    {
        id: 3,
        question: "Maine's real BMV knowledge test has exactly 30 questions. How many must you answer correctly to pass?",
        options: ["20 (67%)", "22 (73%)", "24 (80%)", "27 (90%)"],
        correctAnswer: 2,
        explanation: "Maine's BMV knowledge test has 30 questions and requires 24 correct answers — an 80% passing threshold. You can miss up to 6 questions. Missing 7 or more means you fail and must wait to retake the test."
    },
    {
        id: 4,
        question: "What is the legal BAC limit for a Maine driver age 21 or older?",
        options: ["0.04%", "0.06%", "0.08%", "0.10%"],
        correctAnswer: 2,
        explanation: "Maine sets the OUI (Operating Under the Influence) limit at 0.08% BAC for drivers 21 and older. Maine uses the term OUI rather than DUI. Commercial drivers face a stricter 0.04% limit."
    },
    {
        id: 5,
        question: "Maine uses the term 'OUI' for drunk driving. What does OUI stand for?",
        options: ["Operating Under Influence", "Offense Under Intoxication", "Operating Unlawfully Impaired", "Operating Under Intoxicants"],
        correctAnswer: 0,
        explanation: "Maine uses the term OUI — Operating Under the Influence — rather than DUI or DWI. The concept is the same: operating a motor vehicle while impaired by alcohol or drugs, or with a BAC of 0.08% or higher."
    },
    {
        id: 6,
        question: "What BAC level triggers Maine's zero tolerance law for drivers under 21?",
        options: ["0.00%", "0.02%", "0.04%", "0.08%"],
        correctAnswer: 1,
        explanation: "Maine sets the underage OUI threshold at 0.02% BAC for drivers under 21. This is effectively zero — any measurable alcohol is prohibited for underage drivers in Maine."
    },
    {
        id: 7,
        question: "Under Maine's GDL program, how many hours of supervised driving must a permit holder complete?",
        options: ["30 hours (no night requirement)", "70 hours (including 10 at night)", "30 hours (5 at night)", "No minimum hour requirement"],
        correctAnswer: 1,
        explanation: "Maine requires 70 hours of supervised driving practice — one of the highest requirements in the country — with at least 10 hours driven at night. The supervising driver must be a licensed adult age 20 or older. These hours must be logged and certified before advancing."
    },
    {
        id: 8,
        question: "What is the default speed limit on Maine urban streets when no sign is posted?",
        options: ["25 mph", "30 mph", "35 mph", "45 mph"],
        correctAnswer: 1,
        explanation: "Maine sets the default speed limit in urban and business areas at 30 mph when no sign is posted. On rural roads, the default is 45 mph — lower than many states. Always check for posted signs, and use these defaults when no sign is visible."
    },
    {
        id: 9,
        question: "What is notable about Maine's default rural road speed limit compared to most other states?",
        options: ["Maine has the highest rural default at 65 mph", "Maine's rural default is 45 mph — lower than the 55 mph used by most states", "Maine has no default — all roads must be posted", "Maine's rural default is 55 mph, the same as most states"],
        correctAnswer: 1,
        explanation: "Maine's default speed limit on rural roads is 45 mph — lower than the 55 mph default used by most other states. This reflects Maine's road conditions, wildlife hazards, and narrower rural roads. Always look for posted signs, but the default is 45 mph on unposted rural roads."
    },
    {
        id: 10,
        question: "You approach a school bus stopped on an undivided road with flashing red lights. What must you do?",
        options: ["Stop only if you are behind the bus", "Stop in both directions at least 25 feet from the bus", "Slow to 15 mph and pass carefully", "Stop only if children are visible outside"],
        correctAnswer: 1,
        explanation: "Maine law requires all vehicles in both directions on an undivided road to stop at least 25 feet from a school bus displaying flashing red lights. Wait until the stop arm retracts and the lights stop before proceeding. On a divided highway, only traffic behind the bus must stop."
    },
    {
        id: 11,
        question: "Maine's Move Over law requires you to do what when approaching a stationary emergency vehicle with flashing lights?",
        options: ["Slow to 20 mph", "Move one lane away if safe, or reduce speed if a lane change is not possible", "Stop completely behind the vehicle", "Only required for police — not tow trucks"],
        correctAnswer: 1,
        explanation: "Maine's Move Over law requires drivers to move one lane away from stationary emergency, law enforcement, utility, or tow vehicles with flashing lights. If a safe lane change is not possible, reduce speed significantly. The law applies to all such vehicles."
    },
    {
        id: 12,
        question: "When must Maine drivers use their headlights?",
        options: ["Only from sunset to sunrise", "From 30 minutes after sunset to 30 minutes before sunrise, and when visibility is under 500 feet", "Only in rain and fog", "Only between 10 PM and 5 AM"],
        correctAnswer: 1,
        explanation: "Maine requires headlights from one-half hour after sunset to one-half hour before sunrise, and anytime visibility is less than 500 feet due to weather. This includes rain, fog, snow, and other conditions reducing visibility — not just complete darkness."
    },
    {
        id: 13,
        question: "What is the minimum recommended following distance in Maine under normal conditions?",
        options: ["1 second", "2 seconds", "3 seconds", "4 seconds"],
        correctAnswer: 2,
        explanation: "Maine recommends a minimum 3-second following distance under normal conditions. In Maine's challenging weather — rain, snow, ice, and fog — increase following distance to 6 seconds or more. The 3-second rule provides the bare minimum reaction time to stop safely."
    },
    {
        id: 14,
        question: "A flashing red traffic signal requires you to:",
        options: ["Slow down and proceed with caution", "Yield to cross traffic and proceed", "Come to a complete stop, yield to all traffic, and proceed when safe", "Continue at the posted speed"],
        correctAnswer: 2,
        explanation: "A flashing red signal in Maine is treated like a stop sign. Make a complete stop, yield to all traffic and pedestrians, and proceed only when the way is clear. A flashing yellow means caution — slow down but a full stop is not required."
    },
    {
        id: 15,
        question: "On a two-lane road in Maine, when may you legally cross a solid yellow line on your side?",
        options: ["When the road ahead is visible for at least 500 feet", "You may never cross a solid yellow line on your side to pass", "When the vehicle ahead is going well below the speed limit", "When you signal at least 200 feet in advance"],
        correctAnswer: 1,
        explanation: "A solid yellow line on your side is an absolute prohibition on crossing the center line to pass. No exceptions. Only when the yellow line on your side is broken (dashed) may you pass when it is safe."
    },
    {
        id: 16,
        question: "Maine seatbelt law requires which vehicle occupants to wear a seatbelt?",
        options: ["Driver and front-seat passengers only", "All occupants in the vehicle", "Only those under 18", "Driver only"],
        correctAnswer: 1,
        explanation: "Maine requires all vehicle occupants — in all seating positions — to wear a seatbelt. Maine has primary enforcement. Children under 40 pounds or under age 2 must be in a rear-facing child safety seat; children under 8 or under 80 pounds must use a booster seat."
    },
    {
        id: 17,
        question: "When an emergency vehicle with lights and siren approaches from behind, you must:",
        options: ["Speed up to the next intersection and pull over", "Pull to the right edge of the road and stop", "Slow to 10 mph and stay in your lane", "Move to the center of the road"],
        correctAnswer: 1,
        explanation: "Maine law requires you to immediately pull to the right edge of the road and stop when an emergency vehicle with active lights and siren approaches. Remain stopped until the vehicle has passed. If you are in an intersection, clear it first, then pull to the right."
    },
    {
        id: 18,
        question: "Can you make a right turn on a red light in Maine?",
        options: ["No, right turns on red are prohibited statewide", "Yes, after a complete stop, yielding to traffic and pedestrians, unless a sign prohibits it", "Yes, without stopping if the turn is clear", "Only during daytime"],
        correctAnswer: 1,
        explanation: "Right turns on red are permitted in Maine after a complete stop, yielding to pedestrians and cross traffic, and only when no 'No Turn on Red' sign is posted. Always make a full stop — rolling through on red while turning right is illegal."
    },
    {
        id: 19,
        question: "You arrive at a 4-way stop at the same time as a vehicle to your right. Who has priority?",
        options: ["You do — you are both there at the same time", "The vehicle on your right has the right of way", "Whoever is going straight has priority", "The driver who arrived from the main road goes first"],
        correctAnswer: 1,
        explanation: "When two vehicles arrive simultaneously at a 4-way stop, yield to the vehicle on the right. This is the universal tie-breaking rule at all-way stops. If you arrived clearly before the other driver, you proceed first regardless of direction."
    },
    {
        id: 20,
        question: "Maine is known for severe winters. When driving on snow or ice in Maine, what should you do first?",
        options: ["Maintain the posted speed limit to keep up with traffic", "Significantly reduce speed and increase following distance", "Use hazard flashers and maintain speed", "Use high beams to see further ahead"],
        correctAnswer: 1,
        explanation: "In Maine's severe winter conditions — snow, ice, and sleet — significantly reduce your speed well below the posted limit and increase your following distance to 8–10 seconds or more. Stopping distances on ice can be 10 times longer than on dry pavement. Slow down and allow extra space."
    },
    {
        id: 21,
        question: "What is the maximum speed limit on Maine rural interstate highways?",
        options: ["55 mph", "60 mph", "65 mph", "70 mph"],
        correctAnswer: 2,
        explanation: "Maine's maximum speed limit on rural interstate highways is 65 mph for passenger vehicles. This is lower than many other states, reflecting Maine's road conditions and terrain. Some sections may have lower posted limits. Always check posted signs."
    },
    {
        id: 22,
        question: "In Maine, what does a flashing yellow arrow traffic signal indicate?",
        options: ["You must stop before turning in the arrow direction", "You may turn in the arrow direction but must yield to oncoming traffic and pedestrians", "You have a protected turn — oncoming traffic is stopped", "The signal is malfunctioning — proceed with caution"],
        correctAnswer: 1,
        explanation: "A flashing yellow arrow is a permissive turn signal. You may turn in the arrow direction but must yield to oncoming traffic and pedestrians. This differs from a solid green arrow (protected turn) where oncoming traffic is held by a red light."
    },
    {
        id: 23,
        question: "Maine law requires drivers to signal before turning or changing lanes at least how far in advance?",
        options: ["50 feet", "100 feet", "200 feet", "300 feet"],
        correctAnswer: 1,
        explanation: "Maine law requires drivers to signal at least 100 feet before turning or changing lanes. On higher-speed roads, signaling even earlier is advisable to give other drivers sufficient warning time to adjust."
    },
    {
        id: 24,
        question: "You are driving in heavy rain in Maine. Maine law requires headlights when:",
        options: ["Visibility drops below 200 feet only", "Windshield wipers are in use due to precipitation", "Only after sunset regardless of rain", "Only when driving on highways in the rain"],
        correctAnswer: 1,
        explanation: "Maine law requires headlights to be on whenever windshield wipers are in use due to precipitation. This 'wipers on, lights on' rule ensures your vehicle is visible to other drivers in wet conditions — even during daylight hours when you might otherwise not think to turn on lights."
    },
    {
        id: 25,
        question: "When driving in fog in Maine, which lights should you use?",
        options: ["High beams for maximum visibility", "Low beams or fog lights", "Hazard flashers only", "No lights — they reflect off fog"],
        correctAnswer: 1,
        explanation: "In Maine's frequent coastal and morning fog, use low beams or dedicated fog lights. High beams reflect off fog particles, creating glare. Fog lights have a lower, wider beam pattern that cuts under fog layers for improved visibility. Also reduce speed significantly."
    },
    {
        id: 26,
        question: "In Maine, what happens to your license if you refuse a chemical test after being lawfully stopped for OUI?",
        options: ["No penalty — refusal is a protected right", "275-day license suspension for a first offense refusal", "Minor fine only", "You lose your license only if convicted of OUI"],
        correctAnswer: 1,
        explanation: "Maine's implied consent law means refusing a chemical test after an OUI stop results in a 275-day license suspension for a first offense — separate from any OUI conviction. Refusal can also be used against you in court. It is rarely in a driver's best interest to refuse."
    },
    {
        id: 27,
        question: "What must you do when you see a yellow diamond-shaped sign near a railroad crossing?",
        options: ["Stop immediately at the tracks", "Slow down and be prepared to stop if a train is approaching", "Proceed at normal speed — it is just an advisory sign", "Turn around — trains have the absolute right of way"],
        correctAnswer: 1,
        explanation: "A yellow diamond-shaped railroad crossing warning sign advises you to slow down and be prepared to stop. The sign is typically placed 500 feet before the crossing to give you advance warning. Approach all railroad crossings with caution and be prepared to stop if signals activate."
    },
    {
        id: 28,
        question: "A pedestrian is crossing in a marked crosswalk. You must:",
        options: ["Proceed if you have the right of way", "Slow to 20 mph and pass carefully", "Stop and yield until the pedestrian has completely cleared the roadway", "Yield only if the pedestrian is directly in your path"],
        correctAnswer: 2,
        explanation: "Maine law requires drivers to stop and yield to pedestrians in a marked crosswalk. You must remain stopped until the pedestrian has completely cleared the roadway — not just your lane. Pedestrian right-of-way in a crosswalk is absolute."
    },
    {
        id: 29,
        question: "Maine requires permit holders to log 70 hours of supervised driving — what makes this notable?",
        options: ["70 hours is the national average", "70 hours is among the highest supervised driving requirements in the country", "Most states require more than 70 hours", "Maine recently reduced the requirement from 100 hours to 70"],
        correctAnswer: 1,
        explanation: "Maine's 70-hour supervised driving requirement is among the highest in the United States. Most states require 40–50 hours. Maine's higher requirement reflects the state's challenging driving conditions — severe winters, rural roads, and wildlife hazards — that demand extensive preparation before independent driving."
    },
    {
        id: 30,
        question: "What is the shape and color of a standard 'No Passing Zone' sign in Maine?",
        options: ["Diamond, yellow", "Rectangle, white", "Pennant (triangle), yellow — placed on the left side of the road", "Circle, yellow with an X"],
        correctAnswer: 2,
        explanation: "The No Passing Zone sign is a yellow pennant (triangle) shape, always placed on the left side of the road at the beginning of a no-passing zone. It is the only pennant-shaped sign in the U.S. road sign system — making it unique and instantly recognizable as a passing restriction."
    },
]

export const mainePermitTestFaq: { question: string; answer: string }[] = [
    {
        question: "How many questions are on the Maine BMV permit test?",
        answer: "The Maine Bureau of Motor Vehicles (BMV) knowledge test has exactly 30 multiple-choice questions. You need to answer at least 24 correctly (80%) to pass and receive your real estate license."
    },
    {
        question: "What score do you need to pass the Maine BMV permit test?",
        answer: "You need 24 out of 30 correct — a passing score of 80%. You can miss up to 6 questions. Missing 7 or more means you fail and must wait at least 1 day before retaking."
    },
    {
        question: "How many questions can you miss on the Maine BMV knowledge test?",
        answer: "You can miss up to 6 questions on the 30-question test. If you miss 7 or more, you fail and must wait 1 day before retaking the test."
    },
    {
        question: "Is there a time limit on the Maine BMV permit test?",
        answer: "Maine does not impose a strict time limit on the knowledge test. Take the time you need to read each question carefully — accuracy is more important than speed."
    },
    {
        question: "What happens if I fail the Maine permit test?",
        answer: "If you fail, you must wait 1 day before retaking. Review the Maine Driver's Manual focusing on areas where you missed questions. Practicing with sample questions until you score consistently above 85% is the best preparation."
    },
    {
        question: "Can I take the Maine permit test online?",
        answer: "As of 2026, the Maine BMV knowledge test must be taken in person at a Maine BMV office. Visit the Maine BMV website to find your nearest branch and check for appointment availability."
    },
    {
        question: "What is the minimum age to get a real estate license in Maine?",
        answer: "You must be at least 15 years old to apply for a Maine real estate license. Maine also requires 70 hours of supervised driving practice (including 10 at night) — one of the highest requirements in the country — before advancing to a restricted license."
    },
    {
        question: "What does Maine use instead of 'DUI' for impaired driving?",
        answer: "Maine uses OUI — Operating Under the Influence — rather than DUI or DWI. The legal BAC limit is 0.08% for drivers 21 and older. Drivers under 21 face a 0.02% zero tolerance limit."
    },
]
