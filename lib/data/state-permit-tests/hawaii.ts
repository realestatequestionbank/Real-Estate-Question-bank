import type { Question, StatePermitTestConfig } from '@/components/state-permit-test/types'

export const hawaiiPermitTestConfig: StatePermitTestConfig = {
    stateName: 'Hawaii',
    stateCode: 'HI',
    departmentName: 'Hawaii Real Estate',
    departmentAbbr: 'Real Estate',
    realQuestionCount: 30,
    realPassCount: 24,
    passPercent: 80,
    retakePolicy: 'Can retake after 1 day if failed',
    mainPageUrl: '/hawaii-real-estate-permit-test',
    pageUrl: '/hawaii-real-estate-permit-test-30-questions',
    stateGuideUrl: '/state-guides/hawaii',
    handbookUrl: '/handbooks/hawaii',
    year: 2026,
}

export const hawaiiPermitTestQuestions: Question[] = [
    {
        id: 1,
        question: "What is the minimum age to apply for a real estate license in Hawaii?",
        options: ["14", "15", "15 and a half", "16"],
        correctAnswer: 2,
        explanation: "Hawaii allows teens to apply for a real estate license (Instruction Permit) at age 15½. This is a state-specific GDL milestone — applicants must hold the permit for at least 6 months before applying for a provisional license."
    },
    {
        id: 2,
        question: "Are studded tires legal in Hawaii?",
        options: ["Yes, in mountainous areas during winter months", "Yes, on all roads from October through April", "No, studded tires are prohibited in Hawaii", "Yes, but only on unpaved roads"],
        correctAnswer: 2,
        explanation: "Hawaii prohibits studded tires entirely. Unlike cold-weather states, Hawaii's warm climate means there is no need for studded tires, and they would simply damage roadway surfaces. This is a state-specific rule commonly tested on the HI Real Estate exam."
    },
    {
        id: 3,
        question: "What is the legal BAC limit for adult drivers (age 21+) in Hawaii?",
        options: ["0.04%", "0.06%", "0.08%", "0.10%"],
        correctAnswer: 2,
        explanation: "Hawaii's per se DUI limit is 0.08% BAC for adult drivers. Reaching 0.08% is sufficient for a DUI charge regardless of apparent impairment. Commercial drivers face a stricter 0.04% limit."
    },
    {
        id: 4,
        question: "Hawaii's zero tolerance law for drivers under 21 sets the illegal BAC at:",
        options: ["0.00%", "0.02%", "0.04%", "0.08%"],
        correctAnswer: 1,
        explanation: "Hawaii applies a 0.02% BAC zero tolerance threshold for drivers under 21. Any BAC at or above 0.02% results in license suspension and criminal penalties for underage drivers — effectively making any alcohol consumption illegal before driving."
    },
    {
        id: 5,
        question: "You are driving near a lava zone in Hawaii and encounter a road that has been partially covered by a recent lava flow. You should:",
        options: ["Drive slowly over the hardened lava surface", "Turn around immediately — lava-covered roads are impassable and dangerous", "Check the surface temperature and proceed if it looks cool", "Drive on the shoulder to avoid the lava flow area"],
        correctAnswer: 1,
        explanation: "Lava-covered roads in Hawaii can be completely impassable and may hide active lava beneath a hardened crust. The Hawaii County Civil Defense Authority issues road closure warnings for active lava zones — always heed closures and turn around. This is a Hawaii-specific road hazard."
    },
    {
        id: 6,
        question: "Which of the following is a unique road hazard in Hawaii that does not exist in most mainland U.S. states?",
        options: ["Dense fog on mountain roads", "Dust storms in dry valleys", "Active lava flows crossing roadways in volcanic zones", "Permafrost-caused road buckling"],
        correctAnswer: 2,
        explanation: "Hawaii's active volcanoes — particularly on the Big Island — can produce lava flows that cross roadways, creating road closures and unique hazards not found in any other U.S. state. Drivers on the Big Island must be aware of lava zone road hazards."
    },
    {
        id: 7,
        question: "Does Hawaii drive on the right side of the road like the mainland United States?",
        options: ["No, Hawaii drives on the left like Japan (due to historical ties)", "Yes, Hawaii drives on the right side of the road, like all U.S. states", "It depends on the island — Maui drives on the left", "Only on private roads — public roads use the left"],
        correctAnswer: 1,
        explanation: "Hawaii drives on the right side of the road, same as all other U.S. states. Despite Hawaii's Pacific location and Japanese cultural influences, traffic rules follow the same right-hand traffic standard as the continental United States."
    },
    {
        id: 8,
        question: "What is the default speed limit on most urban streets in Hawaii when no speed limit sign is posted?",
        options: ["20 mph", "25 mph", "30 mph", "35 mph"],
        correctAnswer: 1,
        explanation: "Hawaii's default speed limit in urban and residential areas where no limit is posted is 25 mph. Always check posted signs — many roads in Hawaii have posted limits that differ from the default, particularly near schools and neighborhoods."
    },
    {
        id: 9,
        question: "Under Hawaii's GDL program, what nighttime restriction applies to drivers under 18 with a provisional license?",
        options: ["No nighttime restriction applies", "No driving between 10 PM and 5 AM without a licensed adult", "No driving between 11 PM and 5 AM without a licensed adult", "No driving between midnight and 6 AM without a licensed adult"],
        correctAnswer: 1,
        explanation: "Hawaii GDL restricts drivers under 18 with a provisional license from driving between 11 PM and 5 AM without a licensed adult 21 or older in the front seat. Exceptions exist for employment and school activities with documentation."
    },
    {
        id: 10,
        question: "What must you do when a school bus stops on a two-lane Hawaii road and activates its flashing red lights?",
        options: ["Stop only if you are driving behind the bus", "Slow to 15 mph and pass carefully", "Stop in both directions at least 20 feet from the bus until lights stop flashing", "Stop only when children are crossing the road"],
        correctAnswer: 2,
        explanation: "Hawaii law requires vehicles in both directions on an undivided road to stop at least 20 feet from a school bus with flashing red lights and an extended stop arm. You may not proceed until the arm retracts and lights stop flashing."
    },
    {
        id: 11,
        question: "What is the speed limit on most Hawaii roads that are not otherwise posted on the island of Oahu?",
        options: ["35 mph", "45 mph", "55 mph", "65 mph"],
        correctAnswer: 2,
        explanation: "Most non-highway roads in Hawaii default to 55 mph where no limit is posted on rural stretches. Urban sections and residential areas are typically posted at 25–35 mph. Always check posted signs — Hawaii's varied terrain means speed limits vary widely."
    },
    {
        id: 12,
        question: "What is the maximum speed limit on Hawaii expressways (H-1, H-2, H-3)?",
        options: ["55 mph", "60 mph", "65 mph", "70 mph"],
        correctAnswer: 2,
        explanation: "Hawaii's interstate expressways (H-1, H-2, H-3) have a maximum posted speed limit of 65 mph in most areas. Urban sections near Honolulu are posted at 55 mph. Hawaii has no roads with speed limits above 60 mph in densely populated areas."
    },
    {
        id: 13,
        question: "On a two-lane Hawaii road, a solid yellow line is on your side of the center. You may:",
        options: ["Pass if you can complete the maneuver quickly", "Pass only if the other car is going 10+ mph below the limit", "Not pass — solid yellow on your side prohibits crossing to pass", "Pass only if you signal 200 feet in advance"],
        correctAnswer: 2,
        explanation: "A solid yellow line on your side of the road prohibits crossing to pass another vehicle. Only a dashed yellow line on your side means passing is permitted when safe. This applies in Hawaii and nationwide."
    },
    {
        id: 14,
        question: "You are driving in Hawaii near the Kilauea volcano area and smell sulfur dioxide (volcanic gas). What should you do?",
        options: ["Open windows to ventilate the car and continue driving", "Turn around and leave the area — volcanic gas (vog) can be harmful, especially for people with respiratory conditions", "Stop and wait for the gas to dissipate", "Accelerate through the area quickly"],
        correctAnswer: 1,
        explanation: "Volcanic smog (vog) — a mixture of sulfur dioxide and other volcanic gases — can be harmful, especially to people with asthma or heart conditions. Hawaii authorities recommend minimizing exposure, keeping windows closed, and leaving vog-affected areas when possible."
    },
    {
        id: 15,
        question: "In Hawaii, when must you turn on your headlights?",
        options: ["Only after dark", "From sunset to sunrise and whenever visibility is less than 500 feet", "Only in rain or fog", "Only on highways at night"],
        correctAnswer: 1,
        explanation: "Hawaii requires headlights from sunset to sunrise and whenever visibility drops below 500 feet due to rain, fog, or other conditions. Hawaii's sudden tropical downpours can dramatically reduce visibility — turning headlights on in rain is always recommended."
    },
    {
        id: 16,
        question: "What is the minimum following distance recommended in Hawaii for normal driving conditions?",
        options: ["1 second", "2 seconds", "3 seconds", "4 seconds"],
        correctAnswer: 2,
        explanation: "Hawaii recommends a minimum 3-second following distance under normal conditions. In Hawaii's frequent heavy rain, increase to 4–6 seconds. Wet roads reduce tire grip and significantly increase stopping distances."
    },
    {
        id: 17,
        question: "Can you turn right on a red light in Hawaii?",
        options: ["No, right turns on red are prohibited statewide", "Yes, after a complete stop and yielding, unless a sign prohibits it", "Yes, without stopping if no pedestrians are visible", "Only between 7 AM and 9 PM"],
        correctAnswer: 1,
        explanation: "Right turns on red are permitted in Hawaii after a complete stop and yielding to pedestrians and cross traffic. Always check for 'No Turn on Red' signs before turning — they are common at busy Hawaii intersections."
    },
    {
        id: 18,
        question: "Under Hawaii's implied consent law, refusing a chemical test after a DUI stop results in:",
        options: ["No penalty — refusal is a constitutional right", "A 1-year license revocation for the first refusal", "Only a fine — no license action", "A warning on the first offense"],
        correctAnswer: 1,
        explanation: "Hawaii's implied consent law means that driving on public roads constitutes consent to chemical testing. A first-offense refusal results in a 1-year license revocation separate from any DUI charge. Refusal can also be introduced as evidence in court."
    },
    {
        id: 19,
        question: "What does a flashing yellow light at a Hawaii intersection mean?",
        options: ["Stop completely and yield before proceeding", "Slow down and proceed with caution", "The signal is broken — treat as a 4-way stop", "The intersection is closed ahead"],
        correctAnswer: 1,
        explanation: "A flashing yellow light is a caution signal — slow down and proceed carefully. A full stop is not required (unlike a flashing red, which requires a complete stop like a stop sign)."
    },
    {
        id: 20,
        question: "When an emergency vehicle with active lights and siren approaches from behind in Hawaii, you must:",
        options: ["Speed up to the next intersection and pull off", "Stop immediately in your current lane", "Pull to the right side of the road and stop until the vehicle has passed", "Move to the left lane and reduce speed"],
        correctAnswer: 2,
        explanation: "Hawaii law requires drivers to pull to the right side of the road and stop when an emergency vehicle with active lights and siren approaches. Remain stopped until the vehicle has completely passed before resuming travel."
    },
    {
        id: 21,
        question: "What shape and color is a warning sign in Hawaii?",
        options: ["Red octagon", "Yellow diamond", "White rectangle", "Orange rectangle"],
        correctAnswer: 1,
        explanation: "Warning signs are yellow diamond-shaped signs that alert drivers to potential hazards ahead — curves, school zones, pedestrian crossings, and Hawaii-specific hazards like narrow bridges and tsunami evacuation routes. They require extra caution."
    },
    {
        id: 22,
        question: "You arrive at a four-way stop at the same time as a driver on your right. Who has the right of way?",
        options: ["You have the right of way — you arrived first", "The driver on your right has the right of way", "Whoever is going straight has priority", "The larger vehicle has priority"],
        correctAnswer: 1,
        explanation: "When two vehicles arrive simultaneously at a 4-way stop, the vehicle on the right has the right of way. This yield-to-the-right rule is universal across the United States, including Hawaii."
    },
    {
        id: 23,
        question: "In Hawaii, how many hours of supervised driving must a permit holder complete before applying for a provisional license?",
        options: ["20 hours including 5 at night", "30 hours including 5 at night", "40 hours including 10 at night", "50 hours including 10 at night"],
        correctAnswer: 3,
        explanation: "Hawaii requires a minimum of 50 hours of supervised driving practice, including at least 10 hours at night, before an instruction permit holder can apply for a provisional license."
    },
    {
        id: 24,
        question: "Under Hawaii law, which occupants must wear a seatbelt?",
        options: ["Only the driver", "Driver and front-seat passengers only", "All occupants in the vehicle", "Only passengers under age 18"],
        correctAnswer: 2,
        explanation: "Hawaii requires all vehicle occupants — front and rear — to wear a seatbelt. Hawaii has primary enforcement, meaning officers can stop a vehicle solely for a seatbelt violation."
    },
    {
        id: 25,
        question: "What is the speed limit in a Hawaii school zone when children are present?",
        options: ["10 mph", "15 mph", "20 mph", "25 mph"],
        correctAnswer: 2,
        explanation: "Hawaii school zones have a 20 mph speed limit when children are present or warning lights are active. Always slow down well before the zone begins and remain alert for children near the road."
    },
    {
        id: 26,
        question: "You are approaching a yield sign on a Hawaii road. What does this require?",
        options: ["Stop completely regardless of traffic", "Slow down and yield to traffic; stop only if necessary", "Maintain speed and merge smoothly", "Flash headlights to signal your intention"],
        correctAnswer: 1,
        explanation: "A yield sign requires you to slow down and give the right of way to traffic and pedestrians. Stop only if necessary to avoid a collision — a full stop is not required when the way is clear."
    },
    {
        id: 27,
        question: "Hawaii's Move Over law requires you to do what when passing a stopped emergency vehicle on a multi-lane road?",
        options: ["Slow to 10 mph and maintain your lane", "Move one lane away if safe; if not, slow to a safe speed", "Stop completely until the emergency vehicle leaves", "Move over only for police — not tow trucks"],
        correctAnswer: 1,
        explanation: "Hawaii's Move Over law requires drivers to move one lane away from any stopped emergency, law enforcement, or highway maintenance vehicle with flashing lights. If a lane change is not safe, slow to a speed appropriate for conditions."
    },
    {
        id: 28,
        question: "In Hawaii, what is the consequence of leaving the scene of an accident without stopping (hit-and-run)?",
        options: ["A minor fine for a first offense", "A serious criminal offense with license revocation, fines, and possible imprisonment", "Only a civil liability — not a criminal charge", "A warning on the first offense"],
        correctAnswer: 1,
        explanation: "Hit-and-run is a serious criminal offense in Hawaii. Drivers involved in any accident must stop immediately, exchange information, and render aid if needed. Leaving the scene results in criminal charges, license revocation, and potential imprisonment — particularly if injuries occurred."
    },
    {
        id: 29,
        question: "You are driving near a tsunami evacuation zone sign in Hawaii. What should you know?",
        options: ["The sign indicates a tourist viewing area", "The sign marks an area that must be evacuated immediately upon a tsunami warning — follow posted evacuation route signs", "The sign only applies during official hurricane season", "Tsunami signs are informational only — no action is required"],
        correctAnswer: 1,
        explanation: "Tsunami evacuation zones in Hawaii are clearly marked, and evacuation route signs indicate the proper exit direction. Upon a tsunami warning, drivers must immediately follow evacuation routes to higher ground. Hawaii is uniquely vulnerable to tsunamis as an island state in the Pacific."
    },
    {
        id: 30,
        question: "In Hawaii, it is illegal to use a handheld mobile device while driving. What is the correct alternative?",
        options: ["Put the phone on the seat within reach so you can glance at it quickly", "Use a mounted, hands-free device for calls or navigation", "Use the phone only at red lights when the car is stopped", "Only passengers may use phones — drivers must not touch them at all"],
        correctAnswer: 1,
        explanation: "Hawaii's distracted driving law prohibits handheld mobile device use while driving. Drivers must use a phone mount and hands-free calling. Even at a red light, using a handheld device is illegal in Hawaii — the prohibition applies any time the vehicle is on a public road."
    },
]

export const hawaiiPermitTestFaq: { question: string; answer: string }[] = [
    {
        question: "How many questions are on the Hawaii Real Estate Exam?",
        answer: "The Hawaii Real Estate knowledge test has 30 multiple-choice questions. You need to answer at least 24 correctly (80%) to pass."
    },
    {
        question: "What score do you need to pass the Hawaii permit test?",
        answer: "You need 24 out of 30 questions correct — a passing score of 80%. Missing 7 or more questions means you fail."
    },
    {
        question: "How many questions can you miss on the Hawaii Real Estate Exam?",
        answer: "You can miss up to 6 questions on the 30-question knowledge test. Missing 7 or more means you fail and must wait 1 day before retaking."
    },
    {
        question: "Is there a time limit on the Hawaii permit test?",
        answer: "No. The Hawaii Real Estate does not impose a time limit on the knowledge test. Take your time with each question."
    },
    {
        question: "What is the retake policy if I fail the Hawaii permit test?",
        answer: "If you fail, you must wait 1 day before retaking. Use that time to review the areas where you missed questions. Scoring 90%+ consistently on practice tests is the best preparation before your appointment."
    },
    {
        question: "Can I take the Hawaii permit test online?",
        answer: "No. As of 2026, all Hawaii Real Estate knowledge tests must be taken in person at a Hawaii Real Estate office on your island."
    },
    {
        question: "What is the minimum age to get a real estate license in Hawaii?",
        answer: "Hawaii requires applicants to be at least 15½ years old to apply for a learner's instruction permit. After holding the permit for 6 months and completing supervised driving requirements, they can apply for a provisional license."
    },
    {
        question: "Are studded tires allowed in Hawaii?",
        answer: "No. Studded tires are completely prohibited in Hawaii. Hawaii's warm climate means there is no need for studded tires, and they would damage road surfaces. This is a state-specific rule — unlike Alaska, where studded tires are permitted during winter months."
    },
]
