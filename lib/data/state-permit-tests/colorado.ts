import type { Question, StatePermitTestConfig } from '@/components/state-permit-test/types'

export const coloradoPermitTestConfig: StatePermitTestConfig = {
    stateName: 'Colorado',
    stateCode: 'CO',
    departmentName: 'Colorado Real Estate',
    departmentAbbr: 'Real Estate',
    realQuestionCount: 25,
    realPassCount: 20,
    passPercent: 80,
    retakePolicy: 'Can retake after 1 day if failed',
    mainPageUrl: '/colorado-real-estate-permit-test',
    pageUrl: '/colorado-real-estate-permit-test-25-questions',
    stateGuideUrl: '/state-guides/colorado',
    handbookUrl: '/handbooks/colorado',
    year: 2026,
}

export const coloradoPermitTestQuestions: Question[] = [
    {
        id: 1,
        question: "What is the minimum age to apply for a real estate license in Colorado?",
        options: ["14", "15", "15 and a half", "16"],
        correctAnswer: 1,
        explanation: "Colorado allows teens to apply for a real estate license at age 15. After holding the permit and completing supervised driving requirements, they can apply for a restricted license at age 16."
    },
    {
        id: 2,
        question: "What is the legal BAC limit for drivers age 21 and older in Colorado?",
        options: ["0.04%", "0.06%", "0.08%", "0.10%"],
        correctAnswer: 2,
        explanation: "Colorado's per se DUI limit is 0.08% BAC for adult drivers. Colorado also has a DWAI (Driving While Ability Impaired) charge at 0.05%–0.079% BAC, which carries lesser penalties but is still a criminal offense."
    },
    {
        id: 3,
        question: "You are driving on a steep Colorado mountain grade and have 5 or more vehicles backed up behind you. What are you required to do?",
        options: ["Speed up to match the flow of traffic", "Pull into the next available turnout to let traffic pass", "Activate your hazard lights and continue at your current speed", "There is no such requirement — you may proceed at any speed"],
        correctAnswer: 1,
        explanation: "Colorado law requires slow-moving vehicles to use turnouts when 5 or more vehicles have accumulated behind them on a two-lane mountain road. Turnouts are provided specifically for this purpose to reduce dangerous passing attempts on steep grades."
    },
    {
        id: 4,
        question: "When driving down a steep Colorado mountain grade, what is the recommended technique?",
        options: ["Ride the brakes continuously to maintain a safe speed", "Use a lower gear to let engine braking do most of the work, with light brake applications as needed", "Shift to neutral to conserve fuel and brake as needed", "Increase speed to reduce the time spent on the steep section"],
        correctAnswer: 1,
        explanation: "On steep downhill grades in Colorado, shift to a lower gear and use engine braking to control your speed. Continuous brake use (riding the brakes) overheats the brakes and can cause brake fade — a sudden loss of braking ability that is extremely dangerous on mountain roads."
    },
    {
        id: 5,
        question: "What does a runaway truck ramp on a Colorado mountain highway indicate?",
        options: ["A lane for trucks to bypass toll booths", "An emergency escape route for vehicles with brake failure on steep downgrades", "A service road for highway maintenance vehicles", "A designated truck weigh station"],
        correctAnswer: 1,
        explanation: "Runaway truck ramps — filled with deep gravel or sand — are emergency escape routes for vehicles whose brakes have failed on steep mountain downgrades. Passenger vehicles should never use them except in a true brake-failure emergency."
    },
    {
        id: 6,
        question: "Under Colorado's GDL program, how many hours of supervised driving must a permit holder complete before applying for a restricted license?",
        options: ["20 hours including 5 at night", "30 hours including 5 at night", "50 hours including 10 at night", "60 hours including 10 at night"],
        correctAnswer: 2,
        explanation: "Colorado requires 50 hours of supervised driving practice, including at least 10 hours at night, before a permit holder can apply for a restricted (minor) license. This supervised practice builds critical skills before independent driving."
    },
    {
        id: 7,
        question: "You are approaching a Colorado mountain pass and chains or traction tires are required. What does this mean?",
        options: ["Traction devices are recommended but optional", "All vehicles must have either chains or traction tires (4WD, AWD, or winter-rated tires) to proceed", "Only trucks over a certain weight must comply", "Chains are required only for vehicles with rear-wheel drive"],
        correctAnswer: 1,
        explanation: "When Colorado posts a traction law requirement at mountain passes, all vehicles must have adequate traction: either chains or tires rated as traction tires (all-season tires with the mountain/snowflake rating, AWD, or 4WD). Ignoring traction requirements can result in a fine and is dangerous."
    },
    {
        id: 8,
        question: "What is the default speed limit in Colorado urban areas when no speed limit sign is posted?",
        options: ["25 mph", "30 mph", "35 mph", "40 mph"],
        correctAnswer: 1,
        explanation: "Colorado's default urban speed limit is 30 mph where no other limit is posted. Residential neighborhood streets may have lower posted limits — always check for signs. The 30 mph default is a commonly tested fact."
    },
    {
        id: 9,
        question: "In Colorado, what is the BAC level that triggers an additional DWAI (Driving While Ability Impaired) charge — lower than the standard DUI threshold?",
        options: ["0.01%", "0.04%", "0.05%", "0.06%"],
        correctAnswer: 2,
        explanation: "Colorado uniquely has a DWAI charge that applies when a driver's BAC is between 0.05% and 0.079% — a level where ability may be impaired even though it is below the 0.08% DUI threshold. This is a Colorado-specific law not found in all states."
    },
    {
        id: 10,
        question: "On a two-lane Colorado highway, a solid yellow line is on your side of the center. What does this mean?",
        options: ["Passing is permitted when the road is clear", "Passing is prohibited — do not cross the line to pass", "The road ahead has a steep grade", "Passing is allowed only for vehicles in front of you that are going 10 mph below the limit"],
        correctAnswer: 1,
        explanation: "A solid yellow line on your side of the center line is an absolute prohibition on passing by crossing it. A dashed yellow line on your side indicates passing is permitted when safe. These markings apply throughout Colorado and the nation."
    },
    {
        id: 11,
        question: "You are driving on a Colorado mountain road during a snowstorm and your windshield begins to fog up. What is the most effective way to clear it?",
        options: ["Turn on the rear defroster only", "Use the air conditioner with the temperature set to warm air", "Open windows briefly to equalize humidity and use the defroster", "Turn on maximum heater heat directed at the windshield"],
        correctAnswer: 1,
        explanation: "Running the air conditioner with warm air directed at the windshield is the most effective way to clear fogging. The A/C dehumidifies the air, removing moisture that causes fogging. This technique works year-round and is especially important in Colorado's variable mountain weather."
    },
    {
        id: 12,
        question: "What is Colorado's Move Over law requirement when passing a stopped emergency vehicle with flashing lights?",
        options: ["Slow to 10 mph and proceed with caution", "Move one lane away if safe; if not, slow to a safe speed", "Stop completely until the emergency vehicle leaves", "Move over only if a law enforcement officer is present"],
        correctAnswer: 1,
        explanation: "Colorado's Move Over law requires drivers to vacate the lane adjacent to any stopped emergency, law enforcement, or highway maintenance vehicle with flashing lights. If a lane change is unsafe, slow to a speed safe for conditions."
    },
    {
        id: 13,
        question: "What is the minimum following distance recommended in Colorado for normal driving conditions?",
        options: ["1 second", "2 seconds", "3 seconds", "4 seconds"],
        correctAnswer: 2,
        explanation: "Colorado recommends a minimum 3-second following distance under normal conditions. On mountain roads, in snow, or in heavy traffic, increase following distance to 6 or more seconds — stopping distances on steep grades and slippery surfaces are much longer than normal."
    },
    {
        id: 14,
        question: "A pedestrian is crossing at a crosswalk in Colorado. You must:",
        options: ["Slow to 15 mph and proceed if the crosswalk is partially clear", "Stop and remain stopped until the pedestrian has fully crossed the roadway", "Yield only if the pedestrian is in your direct lane", "Honk to alert the pedestrian and proceed"],
        correctAnswer: 1,
        explanation: "Colorado law requires drivers to stop and yield the entire roadway to pedestrians in a crosswalk. You may not proceed until the pedestrian has fully crossed — including any remaining lanes. Pedestrian right-of-way is absolute in a crosswalk."
    },
    {
        id: 15,
        question: "When may you legally use the shoulder of a Colorado highway to pass a slower vehicle?",
        options: ["When the vehicle is traveling 10 mph below the speed limit", "When traffic is backed up and the shoulder is wide enough", "It is never legal to pass on the shoulder", "When directed by a law enforcement officer"],
        correctAnswer: 2,
        explanation: "Passing on the shoulder is illegal in Colorado and in most states. The shoulder is reserved for emergency stops and breakdowns only — not for bypassing slow traffic. Using the shoulder to pass is a traffic violation and extremely dangerous."
    },
    {
        id: 16,
        question: "Can you turn right on a red light in Colorado?",
        options: ["No, right turns on red are prohibited statewide", "Yes, after a complete stop and yielding, unless a sign prohibits it", "Yes, without stopping if no vehicles are visible", "Only on designated roads"],
        correctAnswer: 1,
        explanation: "Right turns on red are permitted in Colorado after a complete stop and yielding to pedestrians and cross traffic. Always check for 'No Turn on Red' signs before proceeding. Never turn without first making a complete stop."
    },
    {
        id: 17,
        question: "What is the speed limit on Colorado interstate highways in most rural areas?",
        options: ["65 mph", "70 mph", "75 mph", "80 mph"],
        correctAnswer: 2,
        explanation: "Most Colorado rural interstates have a speed limit of 75 mph for passenger vehicles. Some mountain and urban sections are posted lower. Always obey posted limits — speed limits drop significantly in mountain passes and urban areas."
    },
    {
        id: 18,
        question: "Under Colorado's implied consent law, refusing a chemical test after a DUI stop results in:",
        options: ["No penalty — refusal is a legal right", "Immediate license revocation for 1 year on first refusal", "Only a small fine", "A warning on your first offense"],
        correctAnswer: 1,
        explanation: "Colorado's implied consent law means that driving on public roads constitutes consent to chemical testing. A first-offense refusal results in a 1-year license revocation that is separate from any DUI charge. Refusal can also be used as evidence of guilt."
    },
    {
        id: 19,
        question: "What does a yellow diamond-shaped warning sign mean on a Colorado road?",
        options: ["A rule you must follow — like a speed limit", "A potential hazard or road condition ahead requiring extra caution", "A guide to distances and destinations", "A construction zone with mandatory reduced speed"],
        correctAnswer: 1,
        explanation: "Yellow diamond-shaped signs are warning signs that alert drivers to potential hazards such as sharp curves, steep grades, and wildlife crossings — all common on Colorado roads. They require extra attention and often a reduction in speed."
    },
    {
        id: 20,
        question: "At a four-way stop in Colorado, two cars arrive at exactly the same time from opposite directions. One is going straight and one is turning left. Who has the right of way?",
        options: ["The left-turning vehicle has the right of way", "The vehicle going straight has the right of way", "Both may proceed simultaneously since they are on opposite sides", "The vehicle that arrived from the north always goes first"],
        correctAnswer: 1,
        explanation: "When two vehicles face each other at a 4-way stop, the vehicle going straight has the right of way over a turning vehicle. The left-turning vehicle must wait for the straight-going vehicle to clear the intersection before turning."
    },
    {
        id: 21,
        question: "When driving in Colorado, at what speed should you enter a curve?",
        options: ["At the posted speed limit for the road", "Slow enough before the curve so you can maintain a steady speed through it", "Faster than the advisory speed on the curve warning sign", "At highway speed — curves are rated for maximum vehicle capability"],
        correctAnswer: 1,
        explanation: "Reduce speed before entering a curve so you can travel through it at a steady, controlled speed. Braking in a curve shifts vehicle weight and reduces traction. Advisory speed signs on curves indicate a safe speed for the average driver under good conditions — in rain or ice, go slower."
    },
    {
        id: 22,
        question: "What must you do when a school bus stops and activates its flashing red lights on a two-lane Colorado road?",
        options: ["Stop only if driving behind the bus", "Slow to 20 mph and pass with caution", "Stop in both directions at least 20 feet from the bus until lights stop flashing", "Yield to children crossing, then proceed"],
        correctAnswer: 2,
        explanation: "Colorado law requires vehicles traveling in both directions on an undivided road to stop at least 20 feet from a school bus displaying flashing red lights. You may not proceed until the arm retracts and lights stop flashing."
    },
    {
        id: 23,
        question: "In Colorado, what is the speed limit in a school zone when children are present?",
        options: ["15 mph", "20 mph", "25 mph", "30 mph"],
        correctAnswer: 1,
        explanation: "Colorado school zones have a 20 mph limit when children are present or warning lights are flashing. Always reduce speed well before the zone begins and remain alert for children near the roadway at all times."
    },
    {
        id: 24,
        question: "You are stopping on a Colorado freeway shoulder because of a mechanical problem. What should you do?",
        options: ["Stop as close to the traffic lanes as possible so other drivers can see you", "Pull as far off the road as possible, turn on hazard lights, and place warning triangles if available", "Stop anywhere and wait in the vehicle without activating hazard lights", "Walk to the nearest exit for help immediately"],
        correctAnswer: 1,
        explanation: "Pull as far off the travel lanes as possible, activate hazard flashers immediately, and set out warning triangles or flares if available. Stay inside the vehicle with your seatbelt buckled — waiting in the vehicle is safer than standing on the shoulder in most situations."
    },
    {
        id: 25,
        question: "Under Colorado's seatbelt law, which occupants must wear seatbelts?",
        options: ["Only the driver", "Driver and all front-seat passengers", "All occupants in the vehicle", "Only passengers under age 16"],
        correctAnswer: 2,
        explanation: "Colorado requires all vehicle occupants — front and rear seats — to wear a seatbelt. Colorado has primary enforcement for front seat occupants, meaning officers can stop a vehicle solely for a seatbelt violation. Rear seat adults may be issued a secondary enforcement citation."
    },
]

export const coloradoPermitTestFaq: { question: string; answer: string }[] = [
    {
        question: "How many questions are on the Colorado Real Estate Exam?",
        answer: "The Colorado Real Estate knowledge test has 25 multiple-choice questions. You need to answer at least 20 correctly (80%) to pass."
    },
    {
        question: "What score do you need to pass the Colorado permit test?",
        answer: "You need 20 out of 25 questions correct — a passing score of 80%. Missing 6 or more questions means you fail."
    },
    {
        question: "How many questions can you miss on the Colorado Real Estate Exam?",
        answer: "You can miss up to 5 questions on the 25-question knowledge test. Missing 6 or more means you fail and must wait 1 day before retaking."
    },
    {
        question: "Is there a time limit on the Colorado permit test?",
        answer: "No. The Colorado Real Estate does not impose a time limit on the knowledge test. Take your time with each question."
    },
    {
        question: "What is the retake policy if I fail the Colorado permit test?",
        answer: "If you fail, you must wait 1 day before retaking. Use that time to review the areas where you struggled. Scoring 90%+ consistently on practice tests before your appointment is the best preparation strategy."
    },
    {
        question: "Can I take the Colorado permit test online?",
        answer: "No. As of 2026, all Colorado Real Estate knowledge tests must be taken in person at a Colorado Real Estate office."
    },
    {
        question: "What is the minimum age to get a real estate license in Colorado?",
        answer: "Colorado allows teens to apply for a real estate license at age 15. After completing 50 hours of supervised driving (10 at night) and other GDL requirements, they can apply for a restricted license at age 16."
    },
    {
        question: "What is Colorado's DWAI law and how does it differ from DUI?",
        answer: "Colorado uniquely has a DWAI (Driving While Ability Impaired) charge that applies when a driver's BAC is between 0.05% and 0.079%. This is below the 0.08% DUI threshold, but still a criminal offense with license and court penalties. Colorado is one of few states with this additional intermediate charge."
    },
]
