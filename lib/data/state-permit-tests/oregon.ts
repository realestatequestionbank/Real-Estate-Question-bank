import type { Question, StatePermitTestConfig } from '@/components/state-permit-test/types'

export const oregonPermitTestConfig: StatePermitTestConfig = {
    stateName: 'Oregon',
    stateCode: 'OR',
    departmentName: 'Oregon Real Estate',
    departmentAbbr: 'Real Estate',
    realQuestionCount: 35,
    realPassCount: 28,
    passPercent: 80,
    retakePolicy: 'Can retake after 1 day if failed',
    mainPageUrl: '/oregon-real-estate-permit-test',
    pageUrl: '/oregon-real-estate-permit-test-35-questions',
    stateGuideUrl: '/state-guides/oregon',
    handbookUrl: '/handbooks/oregon',
    year: 2026,
}

export const oregonPermitTestQuestions: Question[] = [
    {
        id: 1,
        question: "If an emergency vehicle is approaching with flashing lights and/or siren, what should you do?",
        options: [
            "Make every reasonable effort to give the emergency vehicle a clear path, such as pulling to the side and stopping.",
            "Speed up to get out of its way without pulling over.",
            "Stop in the travel lane and block passage.",
            "Continue as normal because they will find another route."
        ],
        correctAnswer: 0,
        explanation: "Yield to emergency vehicles by pulling to the side and stopping if necessary to provide a clear path for them to pass.",
    },
    {
        id: 2,
        question: "Many crashes are caused by which of the following?",
        options: [
            "Driving too fast for the conditions",
            "Drivers consistently checking their mirrors",
            "Drivers yielding the right-of-way"
        ],
        correctAnswer: 0,
        explanation: "Traveling at speeds too high for the conditions reduces reaction time and increases crash likelihood; always adjust speed to conditions.",
    },
    {
        id: 3,
        question: "When must you stop your vehicle?",
        options: [
            "At stop signs, red lights, or when ordered by a traffic officer.",
            "Only if another car is waiting at the intersection.",
            "Only during rush hour.",
            "If a pedestrian is nearby even without a crosswalk."
        ],
        correctAnswer: 0,
        explanation: "You are required to stop at intersections with stop signs, at red lights, and whenever a traffic officer directs you to stop.",
    },
    {
        id: 4,
        question: "When you see a 'Merging traffic' sign on a multilane road, what should you do?",
        options: [
            "Make room for entering vehicles by changing lanes when safe.",
            "Always stay at your current speed regardless of traffic.",
            "Honk to warn merging drivers.",
            "Stop immediately to let them in."
        ],
        correctAnswer: 0,
        explanation: "On multilane roads, move over when safe to allow entering traffic to merge smoothly and avoid creating a bottleneck.",
    },
    {
        id: 5,
        question: "How does alcohol affect driving performance?",
        options: [
            "It slows reflexes and reaction time.",
            "It improves focus and alertness.",
            "It wakes you up and sharpens judgment.",
            "It has no effect if you feel sober."
        ],
        correctAnswer: 0,
        explanation: "Alcohol is a depressant that slows brain activity and impairs the skills needed for safe driving.",
    },
    {
        id: 6,
        question: "How should you approach an uncontrolled intersection?",
        options: [
            "Yield to vehicles approaching from your right, slow down, cover the brake, and look in all directions",
            "Maintain speed and proceed",
            "Assume you have the right-of-way and go first"
        ],
        correctAnswer: 0,
        explanation: "At intersections with no signs or signals, yield to the vehicle on your right and be prepared to stop to avoid collisions.",
    },
    {
        id: 7,
        question: "What does a flashing yellow traffic light mean?",
        options: [
            "Proceed with caution.",
            "Merging traffic.",
            "Pedestrian crossing."
        ],
        correctAnswer: 0,
        explanation: "A flashing yellow light means you should slow down and proceed with caution.",
    },
    {
        id: 8,
        question: "How does increasing your speed affect your field of vision?",
        options: [
            "It decreases your field of vision making hazards harder to detect.",
            "It increases your field of vision.",
            "It makes it easier to see cross traffic.",
            "It does not affect vision at all."
        ],
        correctAnswer: 0,
        explanation: "As speed increases, your usable field of vision narrows, so you must be extra alert to hazards.",
    },
    {
        id: 9,
        question: "Which steps help you drive more safely at night?",
        options: [
            "Increase following distance, avoid driving tired, and keep headlights working.",
            "Use only your parking lights.",
            "Drive faster to reduce exposure time.",
            "Use high beams all the time."
        ],
        correctAnswer: 0,
        explanation: "Night driving reduces visibility; increase following distance, avoid driving when tired, and ensure headlights are functional.",
    },
    {
        id: 10,
        question: "Which traffic signal gives you the right-of-way to turn left without yielding to oncoming traffic?",
        options: [
            "A green arrow pointing left.",
            "A solid green light.",
            "A flashing yellow light.",
            "A steady red light."
        ],
        correctAnswer: 0,
        explanation: "A steady green arrow indicates you may proceed in the direction of the arrow with oncoming traffic stopped for the turning movement.",
    },
    {
        id: 11,
        question: "Who must yield when a driver is turning and a pedestrian is crossing where there is no traffic light?",
        options: [
            "Whoever started moving last.",
            "The driver must yield to the pedestrian.",
            "The pedestrian must yield to the turning vehicle.",
            "The driver only if the pedestrian is in a marked crosswalk."
        ],
        correctAnswer: 1,
        explanation: "Drivers must yield to pedestrians crossing at intersections without traffic signals; pedestrians have the right-of-way in these situations.",
    },
    {
        id: 12,
        question: "When passing on a multilane highway, what must you ensure before moving into the passing lane?",
        options: [
            "The passing lane is clear and you have signaled your intention.",
            "You can pass only on the right.",
            "There is no one in the opposite lane.",
            "Your passenger opens the door to signal intent."
        ],
        correctAnswer: 0,
        explanation: "Before passing, confirm the lane is clear and signal to notify other drivers of your lane change.",
    },
    {
        id: 13,
        question: "At an unmarked T intersection, who must yield?",
        options: [
            "Traffic on the road that ends at the T must yield to through traffic.",
            "All vehicles must stop and the first to stop has right-of-way.",
            "Drivers on the right always have the right-of-way.",
            "The larger vehicle always yields."
        ],
        correctAnswer: 0,
        explanation: "At an unmarked T, vehicles on the road that ends must yield to traffic on the through road.",
    },
    {
        id: 14,
        question: "A Reduced speed 35 mph sign means:",
        options: [
            "The new 35 mph speed limit begins at the sign.",
            "The reduced speed starts at the next sign only.",
            "You have ample time to slow down after the sign.",
            "The change is optional until enforced by a cop."
        ],
        correctAnswer: 0,
        explanation: "A posted reduced speed sign indicates that the new speed limit takes effect at the sign itself.",
    },
    {
        id: 15,
        question: "When turning or changing lanes, what must you always do?",
        options: [
            "Signal your intentions in advance, even if no traffic is visible.",
            "Signal only when other vehicles are present.",
            "Signal only in daylight.",
            "Signal only if traveling at high speed."
        ],
        correctAnswer: 0,
        explanation: "Signaling before lane changes or turns is required by law and is a good safety habit.",
    },
    {
        id: 16,
        question: "If an intersection is blocked by traffic ahead, what should you do?",
        options: [
            "Stay out of the intersection until you can fully clear it.",
            "Get as close as possible to the car ahead and wait.",
            "Enter slowly and inch through the blockage.",
            "Use the shoulder to get around the queued vehicles."
        ],
        correctAnswer: 0,
        explanation: "Do not enter an intersection unless you can fully clear it; blocking intersections impedes traffic flow and is unsafe.",
    },
    {
        id: 17,
        question: "Being awake for 18 hours impairs driving similarly to having what BAC?",
        options: [
            "About 0.05 percent, similar to moderate intoxication.",
            "0.00 percent — no impairment.",
            "0.20 percent — extreme impairment.",
            "No BAC equivalent exists."
        ],
        correctAnswer: 0,
        explanation: "Fatigue impairs driving akin to alcohol; being awake 18 hours roughly equals a BAC of 0.05% impairment.",
    },
    {
        id: 18,
        question: "When you meet a car with high, blinding headlights, what is the best action?",
        options: [
            "Look toward the right edge of the road until the other car passes.",
            "Flash your headlights to warn the other driver.",
            "Use your high beams until they dim theirs.",
            "Speed up to pass quickly."
        ],
        correctAnswer: 0,
        explanation: "If an oncoming vehicle has its high beams on, avert your eyes toward the right side of the road so you are not blinded.",
    },
    {
        id: 19,
        question: "When should you drive below the posted speed limit?",
        options: [
            "Whenever conditions such as wet roads, poor visibility, or anything else make driving unsafe.",
            "Only when you see a police car.",
            "Only when entering a busy highway."
        ],
        correctAnswer: 0,
        explanation: "You must reduce speed below the posted limit when conditions (weather, visibility, road surface) make the posted speed unsafe.",
    },
    {
        id: 20,
        question: "When the center line is a solid yellow next to a broken yellow on your side, when may you pass?",
        options: [
            "Only in emergencies.",
            "Only if you are on an expressway.",
            "You may pass if the broken line is next to your lane and traffic is clear."
        ],
        correctAnswer: 2,
        explanation: "If the broken yellow line is next to your lane, you may cross it to pass when there is no oncoming traffic and it is safe to do so.",
    },
    {
        id: 21,
        question: "What does a red-and-white triangular sign at an intersection indicate?",
        options: [
            "Yield—slow and give the right-of-way to traffic or pedestrians in the intersection",
            "Always come to a full stop",
            "Slow down only if an emergency vehicle is approaching"
        ],
        correctAnswer: 0,
        explanation: "A triangular red-and-white sign means yield: reduce speed and be prepared to stop to let others proceed first.",
    },
    {
        id: 22,
        question: "How can you avoid having to make emergency stops in traffic?",
        options: [
            "Honk your horn frequently so others notice you.",
            "Look ahead and maintain a safe following distance and scan for hazards.",
            "Drive in the right lane only.",
            "Follow the vehicle ahead very closely to anticipate stops."
        ],
        correctAnswer: 1,
        explanation: "Maintaining a safe following distance and scanning ahead allows you to react smoothly and avoid abrupt emergency stops.",
    },
    {
        id: 23,
        question: "If convicted of DUII for the first time, how long will your driving privileges be suspended?",
        options: [
            "One year.",
            "Six months.",
            "Three months.",
            "Indefinitely."
        ],
        correctAnswer: 0,
        explanation: "A first DUII conviction results in a one-year license suspension under Oregon law.",
    },
    {
        id: 24,
        question: "What is the correct way to reduce speed when using a freeway exit ramp?",
        options: [
            "Slow down once you have moved into the exit ramp",
            "Begin heavy braking on the main roadway before entering the exit lane",
            "Keep your speed constant while on the ramp"
        ],
        correctAnswer: 0,
        explanation: "Do not decelerate sharply on the freeway; move into the exit lane and then brake to slow to ramp speed.",
    },
    {
        id: 25,
        question: "When you approach an accident scene, how should you behave if you are not involved?",
        options: [
            "Do not stop unless you are involved or emergency help has not yet arrived; keep moving and watch for people near the road",
            "Always stop to view the scene",
            "Park nearby and take photos"
        ],
        correctAnswer: 0,
        explanation: "Do not block emergency responders or create additional hazards; only stop if you are directly involved or help is needed before responders arrive.",
    },
    {
        id: 26,
        question: "What does an End school zone sign indicate?",
        options: [
            "The reduced school zone speed limit is ending.",
            "The school zone speed limit is starting.",
            "Children are especially likely to appear here.",
            "You must always stop for pedestrians now."
        ],
        correctAnswer: 0,
        explanation: "An End school zone sign marks the conclusion of the reduced speed school zone and that the special limit no longer applies.",
    },
    {
        id: 27,
        question: "At a light rail intersection, what must you always do?",
        options: [
            "Look both ways before crossing tracks and obey all traffic signals.",
            "Share the road with pedestrians and bicyclists only.",
            "Ignore the crossing gates if no train is visible.",
            "Follow the vehicle directly in front of you across the tracks."
        ],
        correctAnswer: 0,
        explanation: "At streetcar or light rail crossings always look both ways before turning across tracks and obey all signs and traffic signals; never drive around lowered gates.",
    },
    {
        id: 28,
        question: "How should you check your blind spot before changing lanes?",
        options: [
            "Quickly glance over your shoulder toward the lane you want to enter",
            "Only look at the left side mirror",
            "Only check the rearview mirror"
        ],
        correctAnswer: 0,
        explanation: "After checking mirrors, glance over your shoulder to confirm no vehicle is in your blind spot before moving lanes.",
    },
    {
        id: 29,
        question: "As a pedestrian, what is the safe practice regarding entering a street or crosswalk?",
        options: [
            "Do not enter if vehicles are approaching and may not be able to stop.",
            "Always insist on right-of-way over vehicles in crosswalks.",
            "Enter anytime; drivers must always stop.",
            "Run across quickly regardless of traffic."
        ],
        correctAnswer: 0,
        explanation: "Pedestrians should not step into a roadway when approaching vehicles may not have time to stop, even if the crosswalk legally gives pedestrians the right-of-way.",
    },
    {
        id: 30,
        question: "When driving in traffic, what is the safest speed choice?",
        options: [
            "Drive with the flow of traffic within the posted limit",
            "Drive faster than the flow to get through quickly",
            "Drive slower than the flow at all times"
        ],
        correctAnswer: 0,
        explanation: "Crashes often happen when drivers go much faster or slower than surrounding traffic. Travel with the flow while obeying limits and adjusting for conditions.",
    },
    {
        id: 31,
        question: "Which is not a factor in stopping distance?",
        options: [
            "Steering ability.",
            "Braking distance.",
            "Reaction distance.",
            "Perception time."
        ],
        correctAnswer: 0,
        explanation: "Stopping distance depends on perception time, reaction distance, and braking distance; steering ability is not a direct component.",
    },
    {
        id: 32,
        question: "When entering interstate traffic from an entrance or acceleration ramp, who must yield?",
        options: [
            "The driver entering from the ramp should yield to traffic already on the interstate.",
            "The drivers on the interstate must always yield.",
            "You can force your way in if necessary.",
            "Yielding is optional if you are already at highway speed."
        ],
        correctAnswer: 0,
        explanation: "Vehicles entering from a ramp must yield to traffic on the interstate and merge only when safe to do so.",
    },
    {
        id: 33,
        question: "At dusk or on overcast days, you should:",
        options: [
            "Turn on your headlights (use low beams near other vehicles).",
            "Only use parking lights.",
            "Not turn on any lights until dark.",
            "Use your high beams at all times for better visibility."
        ],
        correctAnswer: 0,
        explanation: "At dusk or in overcast conditions, turn on headlights and use low beams when within 1,000 feet of an oncoming vehicle or 500 feet of a vehicle you are following.",
    },
    {
        id: 34,
        question: "What color are pavement markings that separate traffic moving in opposite directions?",
        options: [
            "Yellow.",
            "White.",
            "Yellow and white."
        ],
        correctAnswer: 0,
        explanation: "Yellow centerlines separate traffic moving in opposite directions; white lines separate lanes moving the same way.",
    },
    {
        id: 35,
        question: "A steady yellow traffic signal means which color will soon appear?",
        options: [
            "Steady red.",
            "Flashing red.",
            "Steady green.",
            "Flashing yellow."
        ],
        correctAnswer: 0,
        explanation: "A steady yellow warns that the signal is about to change to a steady red.",
    }
]

export const oregonPermitTestFaq: { question: string; answer: string }[] = [
    {
        question: "How many questions are on the Oregon Real Estate Exam?",
        answer: "The Oregon Real Estate Exam has 35 multiple-choice questions. You need to answer at least 28 correctly (80%) to pass. This practice test has 30 questions to help you prepare."
    },
    {
        question: "What score do you need to pass the Oregon permit test?",
        answer: "You need 28 out of 35 questions correct — a passing score of 80%. Missing 8 or more questions means you fail and must wait 1 day before retaking."
    },
    {
        question: "How many questions can you miss on the Oregon Real Estate Exam?",
        answer: "You can miss up to 7 questions on the 35-question knowledge test. Missing 8 or more means you fail."
    },
    {
        question: "Is there a time limit on the Oregon permit test?",
        answer: "No. The Oregon Real Estate does not impose a time limit on the knowledge test. Read each question carefully, especially those about Oregon's unique 'basic rule' speed law."
    },
    {
        question: "What is the retake policy if I fail the Oregon permit test?",
        answer: "If you fail, you must wait 1 day before retaking. Use that time to study Oregon's unique rules, especially the basic rule speed law and DUII terminology."
    },
    {
        question: "Can I take the Oregon permit test online?",
        answer: "No. As of 2026, all Oregon Real Estate knowledge tests must be taken in person at an Oregon Department of Motor Vehicles office."
    },
    {
        question: "What is the minimum age to get a real estate license in Oregon?",
        answer: "Oregon allows teens to apply for a real estate license at age 15. A parent or guardian must sign the application."
    },
    {
        question: "What is Oregon's basic rule speed law and why is it tested?",
        answer: "Oregon's basic rule requires drivers to drive at a speed that is reasonable and prudent for actual conditions — even if that means going below the posted speed limit. You can be cited for driving too fast for conditions regardless of whether you exceeded the posted limit. This makes Oregon different from many states where the posted limit is the sole legal speed standard. The basic rule is a key tested concept on Oregon's Real Estate exam."
    },
]
