import type { Question, StatePermitTestConfig } from '@/components/state-permit-test/types'

export const virginiaPermitTestConfig: StatePermitTestConfig = {
    stateName: 'Virginia',
    stateCode: 'VA',
    departmentName: 'Virginia Real Estate',
    departmentAbbr: 'Real Estate',
    realQuestionCount: 36,
    realPassCount: 30,
    passPercent: 83,
    retakePolicy: 'Can retake after 1 day if failed',
    mainPageUrl: '/virginia-real-estate-permit-test',
    pageUrl: '/virginia-real-estate-permit-test-36-questions',
    stateGuideUrl: '/state-guides/virginia',
    handbookUrl: '/handbooks/virginia',
    year: 2026,
}

export const virginiaPermitTestQuestions: Question[] = [
    {
        id: 1,
        question: "When an emergency vehicle approaches with lights or siren active, what must a driver do immediately?",
        options: [
            "Pull to the right and stop.",
            "Slow down and stay in lane.",
            "Pull to the right and turn on four-way flashers.",
            "Drive to the left shoulder and stop"
        ],
        correctAnswer: 0,
        explanation: "You must promptly pull to the right and stop to allow emergency vehicles to pass safely.",
    },
    {
        id: 2,
        question: "Which statement best describes drivers who have consumed alcohol and then drive?",
        options: [
            "They do not have sufficient control over their bodies, minds, or vehicles",
            "They are always aware of the risks, c:They become better drivers because they are more careful"
        ],
        correctAnswer: 0,
        explanation: "Alcohol is a depressant that reduces judgment, vision, coordination, and reaction time, impairing a driver’s ability to operate a vehicle safely.",
    },
    {
        id: 3,
        question: "When approaching railroad tracks, what should you do?",
        options: [
            "Look and listen, slow down, and be prepared to stop.",
            "Speed up to cross before a train appears.",
            "Drive around lowered gates if a car is stuck on the tracks.",
            "Keep radio volume high to hear signals better."
        ],
        correctAnswer: 0,
        explanation: "Always look, listen, and be ready to stop at tracks; do not go around gates or take risks.",
    },
    {
        id: 4,
        question: "How must a driver respond to a flashing red traffic signal?",
        options: [
            "Come to a complete stop, yield to traffic and pedestrians, then proceed when safe.",
            "Slow down and continue without stopping.",
            "Merge to the right."
        ],
        correctAnswer: 0,
        explanation: "A flashing red light means stop, yield to other traffic and pedestrians, and proceed only when it is safe.",
    },
    {
        id: 5,
        question: "If you socialize and drink alcohol, what is a safe option to ensure safe travel?",
        options: [
            "Ride home with a friend who has not been drinking.",
            "Drink coffee before driving.",
            "Take a cold shower before driving.",
            "Wait 10 minutes and then drive"
        ],
        correctAnswer: 0,
        explanation: "Arranging a sober ride home prevents impaired driving; coffee or a shower does not reduce blood alcohol content.",
    },
    {
        id: 6,
        question: "Does talking or texting on a cell phone significantly increase crash risk?",
        options: [
            "False",
            "True"
        ],
        correctAnswer: 1,
        explanation: "Using a handheld or hands-free phone for talking or texting distracts you and increases the likelihood of a crash; it reduces attention and reaction time.",
    },
    {
        id: 7,
        question: "When driving near heavy trucks, what must other drivers allow for?",
        options: [
            "The increased stopping distance required by large vehicles",
            "The decreased stopping distance of trucks",
            "The reduced noise levels from larger vehicles"
        ],
        correctAnswer: 0,
        explanation: "Large vehicles need more distance to stop; smaller vehicles should avoid lingering in truck blind spots and give them extra space.",
    },
    {
        id: 8,
        question: "Which behavior describes an inattentive driver?",
        options: [
            "Daydreaming or staring at objects off the roadway while driving.",
            "Checking mirrors frequently and scanning traffic.",
            "Watching only the car directly ahead.",
            "Using turn signals when changing lanes."
        ],
        correctAnswer: 0,
        explanation: "Inattentive drivers are distracted by non-driving activities and do not adequately scan the road.",
    },
    {
        id: 9,
        question: "When making an emergency roadside stop, is it unnecessary to set the parking brake?",
        options: [
            "False",
            "True"
        ],
        correctAnswer: 0,
        explanation: "When you make an emergency stop, set your parking brake and turn on your emergency flashers to alert other drivers.",
    },
    {
        id: 10,
        question: "Which traffic signal situation requires you to come to a complete stop, yield, then proceed when clear?",
        options: [
            "A flashing red light.",
            "A solid green light.",
            "A flashing yellow light.",
            "A steady yellow light"
        ],
        correctAnswer: 0,
        explanation: "A flashing red light functions like a stop sign: stop, yield to others, and proceed when safe.",
    },
    {
        id: 11,
        question: "If an oncoming vehicle fails to dim its high beams, where should you glance?",
        options: [
            "Toward the right edge of your lane.",
            "Directly at the source of the light.",
            "Toward the left side of the road.",
            "At the center line for reference."
        ],
        correctAnswer: 0,
        explanation: "Glance to the right side of the road to avoid temporary blindness from glare while maintaining roadway position.",
    },
    {
        id: 12,
        question: "What is the default speed limit in business, residential, and school districts unless otherwise posted?",
        options: [
            "25 mph",
            "15 mph",
            "30 mph"
        ],
        correctAnswer: 0,
        explanation: "Unless signs indicate otherwise, the speed limit for passenger vehicles and motorcycles in business, residential, or school areas is 25 mph.",
    },
    {
        id: 13,
        question: "Before turning left at an intersection, what is important to do?",
        options: [
            "Yield to oncoming vehicles and pedestrians",
            "Sound your horn to warn oncoming traffic",
            "Swing to the right side of your lane to make room"
        ],
        correctAnswer: 0,
        explanation: "Before making a left turn you must yield to oncoming traffic and pedestrians; do not turn unless the way is clear and it is legal to do so.",
    },
    {
        id: 14,
        question: "What type of signs are typically orange?",
        options: [
            "Work zone and construction signs.",
            "Regulatory signs like speed limits.",
            "School zone signs.",
            "Recreational area signs."
        ],
        correctAnswer: 0,
        explanation: "Orange signs warn of work zones or construction and alert drivers to changing conditions ahead.",
    },
    {
        id: 15,
        question: "What does a 'Reduced speed, 35 mph' sign mean?",
        options: [
            "The new 35 mph speed limit begins at this sign.",
            "The reduced speed begins at the next sign.",
            "You have plenty of time to slow down before the zone.",
            "The advisory speed begins after the sign"
        ],
        correctAnswer: 0,
        explanation: "A posted reduced speed sign indicates the new posted speed limit begins at that sign.",
    },
    {
        id: 16,
        question: "At a school crossing sign, what should drivers do?",
        options: [
            "Watch for children and be prepared to stop.",
            "Always stop even if no children are present.",
            "Always sound your horn when children are near.",
            "Drive at normal speed if no crossing guard is present"
        ],
        correctAnswer: 0,
        explanation: "Always yield to pedestrians and be alert for children who may enter the crosswalk or roadway unexpectedly.",
    },
    {
        id: 17,
        question: "Is signaling before turning, changing lanes, or pulling away from a curb required?",
        options: [
            "Yes — it is required by law and a good habit",
            "Only if other traffic is present",
            "Only during the maneuver itself, not beforehand"
        ],
        correctAnswer: 0,
        explanation: "You must signal your intentions in advance (Virginia requires signaling at least 100 feet before changing lanes or turning) so other road users can anticipate your actions.",
    },
    {
        id: 18,
        question: "What should you adjust first when you sit in a vehicle before driving?",
        options: [
            "Your seat.",
            "Your rearview mirror.",
            "Your seat belt."
        ],
        correctAnswer: 0,
        explanation: "Adjust your seat first so you can reach the controls and see the road, then set mirrors and fasten your seat belt.",
    },
    {
        id: 19,
        question: "Signs that warn drivers about hazardous conditions are called what?",
        options: [
            "Warning signs",
            "Regulatory signs",
            "Information signs"
        ],
        correctAnswer: 0,
        explanation: "Warning signs (usually yellow with black symbols) advise drivers of potentially hazardous conditions ahead and should be obeyed for safety.",
    },
    {
        id: 20,
        question: "Which statement about speed is correct?",
        options: [
            "Driving too slowly on some highways can be dangerous.",
            "Speeding is safe if you are skilled.",
            "Speed has no effect on crash severity.",
            "Speeding never results in fatalities"
        ],
        correctAnswer: 0,
        explanation: "Both driving too fast and driving much slower than traffic can be dangerous; speed increases crash severity and risk.",
    },
    {
        id: 21,
        question: "When should you look over your shoulder to check a blind spot?",
        options: [
            "When changing lanes",
            "When turning left or right",
            "When pulling toward or away from a curb",
            "All of the above"
        ],
        correctAnswer: 3,
        explanation: "Check blind spots any time you intend to change the vehicle's position—turning, changing lanes, or parking.",
    },
    {
        id: 22,
        question: "What is the safest way to pass a bicyclist?",
        options: [
            "Slow down and give the bicyclist as much lateral space as possible.",
            "Honk to warn them you're passing closely.",
            "Drive in the bike lane to get around them.",
            "Pass very quickly with no additional clearance."
        ],
        correctAnswer: 0,
        explanation: "Give bicyclists ample space when passing; do not crowd them and avoid passing too quickly.",
    },
    {
        id: 23,
        question: "If your vehicle's turn signals stop working, how should you indicate a turn?",
        options: [
            "Use hand signals",
            "Use your horn",
            "Flash your headlights",
            "Use your hazard lights"
        ],
        correctAnswer: 0,
        explanation: "If turn signals fail, use standard hand signals to indicate turns or lane changes.",
    },
    {
        id: 24,
        question: "What does a flashing yellow traffic signal mean?",
        options: [
            "Slow down and proceed with caution.",
            "Stop and wait for a green light.",
            "Speed up to clear the intersection.",
            "Traffic signal is malfunctioning and should be ignored."
        ],
        correctAnswer: 0,
        explanation: "A flashing yellow light warns drivers to slow and proceed carefully through the intersection.",
    },
    {
        id: 25,
        question: "When preparing to turn left, drivers should:",
        options: [
            "Signal, slow gradually, check rearview and watch for oncoming vehicles and pedestrians.",
            "Speed up and turn sharply.",
            "Turn from any lane available without signaling.",
            "Rely solely on the horn to warn others."
        ],
        correctAnswer: 0,
        explanation: "Signal in advance, reduce speed progressively, and yield to oncoming traffic and pedestrians before turning.",
    },
    {
        id: 26,
        question: "Which is NOT a main factor in determining how far it takes to stop your vehicle?",
        options: [
            "Steering ability.",
            "Perception and reaction distances.",
            "Braking distance.",
            "Vehicle speed and road conditions."
        ],
        correctAnswer: 0,
        explanation: "Stopping distance depends on perception time, reaction distance, and braking distance — steering skill is not a primary factor.",
    },
    {
        id: 27,
        question: "What helps a person overcome the influence of alcoholic drinks?",
        options: [
            "Only the passage of time",
            "Hot coffee",
            "Fresh air",
            "Tomato juice and lime"
        ],
        correctAnswer: 0,
        explanation: "Nothing speeds sobering except time—coffee, fresh air, and other remedies do not eliminate alcohol impairment.",
    },
    {
        id: 28,
        question: "What does a green arrow on a traffic signal mean?",
        options: [
            "Traffic in the indicated lane must turn in the direction shown and has a protected movement.",
            "It only applies on one-way streets.",
            "You may go only if a circular green is also lit.",
            "You must yield to pedestrians before turning"
        ],
        correctAnswer: 0,
        explanation: "A green arrow gives the same general authority as a circular green but requires traffic in the indicated lane to turn in the arrow's direction, usually with protected right-of-way.",
    },
    {
        id: 29,
        question: "What can occur if you drink alcohol while taking prescription or over-the-counter medicine?",
        options: [
            "The combination could multiply the effects of the alcohol or medicine",
            "The medicine reduces the effect of the alcohol",
            "The alcohol helps the medicine cure a cold"
        ],
        correctAnswer: 0,
        explanation: "Alcohol and many medications interact, often increasing impairment and the risk of dangerous side effects; combining them can multiply their effects.",
    },
    {
        id: 30,
        question: "How does distraction typically affect a driver's reaction to hazards?",
        options: [
            "Makes drivers react more slowly",
            "Makes drivers react more quickly",
            "Has no effect",
            "Improves lane-keeping"
        ],
        correctAnswer: 0,
        explanation: "Distracted drivers react more slowly and are more likely to miss hazards, increasing crash risk.",
    },
    {
        id: 31,
        question: "When is it legal to pass on the right of another vehicle?",
        options: [
            "If the vehicle ahead is waiting to turn left and there is a safe available lane to pass",
            "Even if it requires driving off the pavement",
            "On a narrow bridge",
            "Only when signposted"
        ],
        correctAnswer: 0,
        explanation: "You may pass on the right if the vehicle ahead is turning left and there is a safe, available lane; you may not leave the paved roadway to pass.",
    },
    {
        id: 32,
        question: "Do pedestrians always have the right-of-way in crosswalks and intersections?",
        options: [
            "Yes when they are crossing at intersections—TRUE",
            "No—FALSE",
            "Only in marked crosswalks",
            "Only when traffic lights say so"
        ],
        correctAnswer: 0,
        explanation: "Pedestrians have the right-of-way when crossing at intersections; crosswalks exist at intersections whether marked or not.",
    },
    {
        id: 33,
        question: "Which is true about vehicle tires on a wet roadway?",
        options: [
            "Higher speeds reduce tire effectiveness and can cause hydroplaning",
            "Cars with good tires are unaffected by water",
            "Deep water is safer than shallow water",
            "Worn tires improve grip on water"
        ],
        correctAnswer: 0,
        explanation: "As speed increases on wet roads, tires lose contact and may hydroplane. Slow down and avoid sudden maneuvers.",
    },
    {
        id: 34,
        question: "A red traffic signal light means you must:",
        options: [
            "Stop before entering the intersection",
            "Stop at the stop line",
            "Stop before entering any crosswalk"
        ],
        correctAnswer: 0,
        explanation: "A red signal requires stopping before entering the intersection, at any stop line, and before entering a crosswalk; do not proceed until the light turns green and it is safe.",
    },
    {
        id: 35,
        question: "What is the most common color used for warning signs?",
        options: [
            "Yellow.",
            "Green.",
            "Red."
        ],
        correctAnswer: 0,
        explanation: "Most warning signs are yellow with black markings and are diamond-shaped to alert drivers of unexpected conditions.",
    },
    {
        id: 36,
        question: "Before changing lanes on a multilane highway, what should you do?",
        options: [
            "Check your rearview and side mirrors and look over your shoulder to check the blind spot",
            "Turn on your headlights",
            "Sound your horn to warn other drivers"
        ],
        correctAnswer: 0,
        explanation: "Prior to changing lanes, check mirrors, signal, and glance over your shoulder to ensure your blind spot is clear before making the lane change.",
    }
]

export const virginiaPermitTestFaq: { question: string; answer: string }[] = [
    {
        question: "How many questions are on the Virginia Real Estate Exam?",
        answer: "The Virginia Real Estate real knowledge test has 36 multiple-choice questions. You need to answer at least 30 correctly (83%) to pass. This practice set uses 30 questions to give you comprehensive coverage of the same material."
    },
    {
        question: "What score do you need to pass the Virginia permit test?",
        answer: "You need 30 out of 36 questions correct on the real test — a passing score of 83%. Missing 7 or more questions means you fail. Virginia's 83% passing threshold is one of the higher standards among US states."
    },
    {
        question: "How many questions can you miss on the Virginia Real Estate Exam?",
        answer: "You can miss up to 6 questions on the 36-question knowledge test. Missing 7 or more means you fail and must wait 1 day before retaking."
    },
    {
        question: "Is there a time limit on the Virginia permit test?",
        answer: "No. The Virginia Real Estate does not impose a time limit on the knowledge test. Take your time on each question, but avoid overthinking answers you feel confident about."
    },
    {
        question: "What is the retake policy if I fail the Virginia permit test?",
        answer: "If you fail, you must wait 1 day before retaking. Use that time to review the areas where you struggled. Most applicants who consistently score 90%+ on practice tests pass the real exam on their first attempt."
    },
    {
        question: "Can I take the Virginia permit test online?",
        answer: "No. As of 2026, all Virginia Real Estate knowledge tests must be taken in person at a Virginia Real Estate Customer Service Center. You can schedule an appointment on the Virginia Real Estate website to minimize wait times."
    },
    {
        question: "What is the minimum age to get a real estate license in Virginia?",
        answer: "Virginia requires applicants to be at least 15 years and 9 months old (15¾) to apply for a real estate license — a specific age requirement that is frequently tested. After holding the permit for at least 9 months and completing 45 hours of supervised driving (including 15 hours at night), you can apply for a provisional license."
    },
    {
        question: "What is Virginia's reckless driving law and why is it important?",
        answer: "Virginia's reckless driving law makes certain speeding a Class 1 misdemeanor criminal offense — not just a traffic ticket. Driving 80 mph or faster (regardless of the speed limit), OR driving 20 mph or more above the posted limit, is automatic reckless driving. This means it goes on your permanent criminal record and can result in up to 12 months in jail, a $2,500 fine, and a 6-month license suspension. This Virginia-specific law is heavily tested on the Real Estate exam."
    },
]
