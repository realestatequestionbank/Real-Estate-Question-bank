import type { Question, StatePermitTestConfig } from '@/components/state-permit-test/types'

export const newJerseyPermitTestConfig: StatePermitTestConfig = {
    stateName: 'New Jersey',
    stateCode: 'NJ',
    departmentName: 'New Jersey MVC',
    departmentAbbr: 'MVC',
    realQuestionCount: 50,
    realPassCount: 40,
    passPercent: 80,
    retakePolicy: 'Can retake after 1 day if failed',
    mainPageUrl: '/new-jersey-mvc-permit-test',
    pageUrl: '/new-jersey-mvc-permit-test-50-questions',
    stateGuideUrl: '/state-guides/new-jersey',
    handbookUrl: '/handbooks/new-jersey',
    year: 2026,
}

export const newJerseyPermitTestQuestions: Question[] = [
    {
        id: 1,
        question: "If your accelerator becomes stuck while driving, what should you do first?",
        options: [
            "Shift to neutral and apply steady pressure on the brake.",
            "Reach down and try to pull the pedal up.",
            "Shift into park immediately."
        ],
        correctAnswer: 0,
        explanation: "Keep control, shift to neutral, brake steadily, and then pull off the road safely before turning off the engine.",
    },
    {
        id: 2,
        question: "After a suspended license is restored, how long is the probationary driving period?",
        options: [
            "Two years.",
            "One year.",
            "Six months."
        ],
        correctAnswer: 1,
        explanation: "Drivers whose privileges were suspended and later restored are placed on probation for one year; violations during this time may result in further suspension.",
    },
    {
        id: 3,
        question: "When changing lanes you should:",
        options: [
            "Rely only on your mirrors.",
            "Begin signaling as you move into the lane.",
            "Signal at least 100 feet before changing lanes and check blind spots."
        ],
        correctAnswer: 2,
        explanation: "Signal before you change lanes (about 100 feet in residential areas), check mirrors and glance over your shoulder to check blind spots.",
    },
    {
        id: 4,
        question: "How should you scan the road to prepare for hazards ahead?",
        options: [
            "Continuously scan the entire roadway and adjacent areas.",
            "Fix your gaze straight ahead at all times.",
            "Keep your left foot lightly on the brake pedal."
        ],
        correctAnswer: 0,
        explanation: "Search well ahead, to the sides, and behind to identify potential problems before they occur. Constant scanning helps you react early.",
    },
    {
        id: 5,
        question: "What is the best way to avoid hydroplaning on wet roads?",
        options: [
            "Maintain properly inflated and treaded tires and reduce speed on wet surfaces.",
            "Use cruise control at all times.",
            "Speed up to get through puddles quickly.",
            "Drive in the center of the roadway only."
        ],
        correctAnswer: 0,
        explanation: "Proper tire maintenance and reducing speed in wet conditions help prevent hydroplaning and loss of control.",
    },
    {
        id: 6,
        question: "When backing your vehicle, what is the correct practice?",
        options: [
            "Turn your head and look out the rear window rather than relying solely on mirrors.",
            "Rely only on your mirrors.",
            "Open the driver's door to see if it is safe."
        ],
        correctAnswer: 0,
        explanation: "When reversing, look over your shoulder and check behind your vehicle; do not depend only on mirrors or sensors.",
    },
    {
        id: 7,
        question: "When making a right turn on a green light, you must do which of the following?",
        options: [
            "Yield to pedestrians and any vehicles with the right-of-way.",
            "Maintain your normal speed and proceed.",
            "Stop and search for nearby police cars first."
        ],
        correctAnswer: 0,
        explanation: "Unless a sign prohibits it, you may turn on green but must yield to pedestrians and any oncoming traffic that has the right-of-way.",
    },
    {
        id: 8,
        question: "When faced with an oncoming car on the left and a bicyclist on the right, what is the safest move?",
        options: [
            "Let the oncoming car pass first, then pass the bicyclist.",
            "Drive between them and split the difference.",
            "Pull onto the shoulder to pass both at once."
        ],
        correctAnswer: 0,
        explanation: "Deal with one hazard at a time: let the oncoming car pass, then safely pass the bicyclist when clear.",
    },
    {
        id: 9,
        question: "A regulatory sign showing a red circle with a slash through a black symbol means:",
        options: [
            "Drivers should come to a complete stop.",
            "The depicted action is forbidden.",
            "Some drivers should yield to others."
        ],
        correctAnswer: 1,
        explanation: "A red circle with a diagonal slash identifies actions that are prohibited, such as no U-turn or no left turn.",
    },
    {
        id: 10,
        question: "From which lane should you begin a left turn from multilane one-way streets or highways?",
        options: [
            "The far left lane.",
            "The right lane.",
            "The middle of the intersection."
        ],
        correctAnswer: 0,
        explanation: "When turning left from a multi-lane one-way street or highway, start from the left-most lane designated for left turns.",
    },
    {
        id: 11,
        question: "A solid yellow arrow in a turn signal indicates:",
        options: [
            "Drivers may turn in the arrow direction without caution.",
            "It has the same meaning as a circular yellow light.",
            "It is not used in traffic signals."
        ],
        correctAnswer: 1,
        explanation: "A solid yellow arrow warns drivers that the protected turn is ending and they should prepare to stop or yield to others.",
    },
    {
        id: 12,
        question: "When is it appropriate to signal?",
        options: [
            "When changing lanes, pulling into/out of parking, or entering traffic from an alley or parking space.",
            "Only when turning left.",
            "Only when turning right.",
            "Never—signaling is optional."
        ],
        correctAnswer: 0,
        explanation: "Always signal before you change lanes, enter traffic from a parking area, or make turns so other road users know your intentions.",
    },
    {
        id: 13,
        question: "On a long trip, what is a good practice to relieve driver fatigue?",
        options: [
            "Stop and rest every two hours for a short break.",
            "Drive with one eye open at a time.",
            "Do arm exercises while driving every hour."
        ],
        correctAnswer: 0,
        explanation: "To avoid fatigue, stop periodically—about every two hours—for a short break, nap, or rest.",
    },
    {
        id: 14,
        question: "What is the “No zone” in relation to large trucks and buses?",
        options: [
            "The large blind spots around a truck or bus where smaller vehicles disappear from view.",
            "A special speed limit area near heavy vehicles.",
            "A restricted lane for large vehicles only."
        ],
        correctAnswer: 0,
        explanation: "Trucks and buses have significant blind spots on each side, in front, and behind; avoid lingering in these “No zones.”",
    },
    {
        id: 15,
        question: "Anything that forces you to do which action could cause a crash?",
        options: [
            "Take your eyes off the road.",
            "Take your hands off the wheel.",
            "Take your attention away from driving."
        ],
        correctAnswer: 2,
        explanation: "Distractions that take your attention from driving, your eyes off the road, or hands off the wheel increase crash risk.",
    },
    {
        id: 16,
        question: "Which driving behavior is a telltale sign of a drunk driver?",
        options: [
            "Weaving between lanes.",
            "Driving somewhat more slowly than surrounding traffic only.",
            "Always driving in a perfectly straight line."
        ],
        correctAnswer: 0,
        explanation: "Signs of impairment include weaving, sudden speed changes, jerky driving, and unexpected stops or swerves.",
    },
    {
        id: 17,
        question: "What is the best method to handle a tailgater?",
        options: [
            "Change lanes or gradually slow to encourage them to pass.",
            "Slam on your brakes to warn them.",
            "Speed up to put distance between you and the tailgater."
        ],
        correctAnswer: 0,
        explanation: "If someone follows too closely, signal and change lanes when safe, or gradually slow to allow them to pass to reduce rear-end collision risk.",
    },
    {
        id: 18,
        question: "If you're not in the correct lane to make a turn at an intersection, what should you do?",
        options: [
            "Drive on to the next intersection and make the turn from the proper lane.",
            "Quickly cut across traffic to make the turn.",
            "Turn from your current lane after signaling."
        ],
        correctAnswer: 0,
        explanation: "Avoid last-minute lane changes or turns; proceed to the next intersection and turn from the correct lane.",
    },
    {
        id: 19,
        question: "Which factor most affects your ability to stop?",
        options: [
            "Road and weather conditions.",
            "The state of traffic lights.",
            "The time of day."
        ],
        correctAnswer: 0,
        explanation: "Stopping distance is greatly affected by road surface and weather; reduce speed when conditions are poor to maintain control.",
    },
    {
        id: 20,
        question: "On a snow-covered road, maintain a following distance of at least:",
        options: [
            "Three seconds.",
            "Six seconds.",
            "Nine seconds."
        ],
        correctAnswer: 1,
        explanation: "Increase your following distance in slippery conditions; on snow-covered roads a minimum of six seconds is recommended.",
    },
    {
        id: 21,
        question: "A round road sign typically indicates:",
        options: [
            "An upcoming railroad crossing.",
            "A no passing zone.",
            "A school zone."
        ],
        correctAnswer: 0,
        explanation: "Round traffic signs are used to warn drivers that they are approaching a railroad crossing.",
    },
    {
        id: 22,
        question: "If a driver's left arm and hand are extended downward, what is the hand signal indicating?",
        options: [
            "The driver intends to stop or slow down.",
            "The driver intends to turn left.",
            "The driver intends to turn right."
        ],
        correctAnswer: 0,
        explanation: "An arm extended downward from the left side signals that the driver plans to stop or slow down.",
    },
    {
        id: 23,
        question: "A flashing red traffic signal means the same as which of the following?",
        options: [
            "Yield sign.",
            "Stop sign.",
            "Solid green light.",
            "Pedestrian crosswalk signal."
        ],
        correctAnswer: 1,
        explanation: "A flashing red light is treated like a stop sign: stop completely, then proceed when it is safe.",
    },
    {
        id: 24,
        question: "If two vehicles reach an uncontrolled intersection at the same time, who has the right-of-way?",
        options: [
            "The driver on the right.",
            "The driver on the left.",
            "The driver that signals first."
        ],
        correctAnswer: 0,
        explanation: "When two vehicles arrive at an open intersection simultaneously, yield to the vehicle on your right; then proceed when safe.",
    },
    {
        id: 25,
        question: "What should you do when you see a school crossing sign?",
        options: [
            "Watch for children, slow down, and be ready to stop.",
            "Always stop even if there is no stop sign.",
            "Always sound your horn when children are present."
        ],
        correctAnswer: 0,
        explanation: "Be alert for children near school crossings and be prepared to stop; obey crossing guards and posted speeds.",
    },
    {
        id: 26,
        question: "A five-ounce glass of wine contains about the same alcohol as which drink?",
        options: [
            "A 12-ounce can or bottle of beer.",
            "One pint of whiskey.",
            "A gallon of wine."
        ],
        correctAnswer: 0,
        explanation: "A 5-ounce glass of wine (about 12% alcohol) has roughly the same alcohol content as a 12-ounce beer or 1.5 ounces of 86-proof liquor.",
    },
    {
        id: 27,
        question: "Which behavior can indicate an aggressive driver?",
        options: [
            "Failing to properly yield the right-of-way.",
            "Maintaining a three-second following distance.",
            "Never changing lanes."
        ],
        correctAnswer: 0,
        explanation: "Aggressive drivers may make erratic lane changes, follow too closely, or fail to yield; avoid confronting them and give them space.",
    },
    {
        id: 28,
        question: "Which of the following is a correct practice when passing another vehicle?",
        options: [
            "Signal at least 100 feet before changing lanes and ensure no oncoming traffic.",
            "When passing, wait until you can see both headlights of the passed car in your rearview before returning.",
            "Use only your mirrors; checking over your shoulder is unnecessary."
        ],
        correctAnswer: 0,
        explanation: "When passing, always signal in advance, check mirrors and blind spots, and only return to your lane when you can see the passed vehicle's front in your rearview.",
    },
    {
        id: 29,
        question: "If a school bus is stopped in front of a school to drop off passengers, you may pass it at no more than:",
        options: [
            "10 mph.",
            "15 mph.",
            "25 mph."
        ],
        correctAnswer: 0,
        explanation: "When a school bus is stopped at a school for loading or unloading, other vehicles may pass at no more than 10 mph and only if it is safe.",
    },
    {
        id: 30,
        question: "How is drinking and driving classified in terms of traffic safety?",
        options: [
            "A minor traffic safety problem.",
            "A serious traffic safety problem.",
            "Safe if you have only had a few drinks."
        ],
        correctAnswer: 1,
        explanation: "Driving while impaired by alcohol or drugs is a serious safety issue — it greatly increases the risk of crashes and injuries.",
    },
    {
        id: 31,
        question: "When approaching an intersection with a steady green light, what is the proper approach?",
        options: [
            "Proceed, but yield to vehicles or pedestrians already in the intersection and be prepared to stop.",
            "Always stop briefly before going.",
            "Treat it like a four-way stop."
        ],
        correctAnswer: 0,
        explanation: "You may continue through a steady green but must yield to any pedestrians or vehicles already in the intersection and be prepared to stop if the light changes.",
    },
    {
        id: 32,
        question: "What lighting is recommended when driving in rain?",
        options: [
            "Use low beam headlights.",
            "Use high beam headlights.",
            "Use parking lights."
        ],
        correctAnswer: 0,
        explanation: "In rainy conditions, low beam headlights increase your visibility to others; high beams can reduce visibility by reflecting off rain.",
    },
    {
        id: 33,
        question: "If you become stranded in a snowstorm, what should you do?",
        options: [
            "Get out of the car and walk for help.",
            "Lie down in the car and go to sleep.",
            "Stay inside the vehicle and wait for help."
        ],
        correctAnswer: 2,
        explanation: "If stranded in a snowstorm stay in your vehicle, conserve warmth, and wait for help. Leaving the vehicle can make you harder to find and more exposed to danger.",
    },
    {
        id: 34,
        question: "If another driver cuts you off, the best response is to:",
        options: [
            "Pull next to them and argue.",
            "Let it go and continue driving safely.",
            "Flash your lights aggressively."
        ],
        correctAnswer: 1,
        explanation: "Avoid road rage: stay calm, do not retaliate, and move safely out of the way when possible.",
    },
    {
        id: 35,
        question: "Compared to daytime driving, driving at night is typically:",
        options: [
            "More dangerous due to reduced visibility and other factors.",
            "Less dangerous.",
            "No different in risk level."
        ],
        correctAnswer: 0,
        explanation: "Night driving is more hazardous because visibility is reduced and glare and impaired drivers may be present.",
    },
    {
        id: 36,
        question: "What helps reduce the risk of hydroplaning?",
        options: [
            "Not speeding in wet conditions.",
            "Replacing tires only when punctured.",
            "Lowering tire pressure below the recommended level."
        ],
        correctAnswer: 0,
        explanation: "To lower hydroplaning risk, drive slower in rain, maintain proper tire pressure, and replace tires with worn tread.",
    },
    {
        id: 37,
        question: "When approaching a railroad crossing and you do not see or hear a train, you must stop if:",
        options: [
            "A crossing gate is lowered.",
            "A stop sign is posted.",
            "The crossing lights are flashing."
        ],
        correctAnswer: 2,
        explanation: "You must stop at a railroad crossing when flashing red lights are activated, a gate is lowered, a stop sign is posted, a flagger directs you, or a train is visible or too close to safely cross.",
    },
    {
        id: 38,
        question: "If you are waiting to make a left turn at a multilane intersection and cannot see because opposing traffic blocks your view, what should you do?",
        options: [
            "Wait until you can see all lanes you must cross before starting the turn.",
            "Accelerate quickly when the first lane is clear.",
            "Proceed if an oncoming driver waves you on."
        ],
        correctAnswer: 0,
        explanation: "Never begin a left turn until you can see that all lanes you must cross are clear and you can complete the turn safely.",
    },
    {
        id: 39,
        question: "Which statement about passing motorcycles is correct?",
        options: [
            "You must change lanes completely when passing a motorcycle.",
            "Motorcycles are entitled to the full width of a lane and you must ensure your vehicle is entirely in the left lane before passing.",
            "You may follow motorcycles closely.",
            "Motorcycles are always slower than cars so you can pass without checking."
        ],
        correctAnswer: 1,
        explanation: "Motorcycles occupy a full lane; be sure your vehicle is fully in the adjacent lane before passing and give ample space.",
    },
    {
        id: 40,
        question: "When making a turn, what should you normally do with your speed?",
        options: [
            "Reduce your speed so you can maintain control of the vehicle.",
            "Increase your speed to complete the turn quickly.",
            "Maintain the same speed as before the turn."
        ],
        correctAnswer: 0,
        explanation: "Slow to a safe speed for turning so you can stay in your lane and respond to hazards.",
    },
    {
        id: 41,
        question: "A single broken yellow line down the center of a two-lane road means:",
        options: [
            "Lanes move in the same direction and passing is not allowed.",
            "Lanes move in opposite directions and passing is allowed when safe.",
            "Lanes move in opposite directions and passing is never allowed."
        ],
        correctAnswer: 1,
        explanation: "A broken yellow centerline separates opposing traffic and means passing is permitted if it is safe to do so.",
    },
    {
        id: 42,
        question: "The effect alcohol has on reflexes and judgement depends on what?",
        options: [
            "How much alcohol is in the bloodstream, not the type of drink.",
            "Whether you drink beer instead of wine.",
            "Whether you are drinking hard cider rather than mixed drinks."
        ],
        correctAnswer: 0,
        explanation: "Any type of alcohol impairs reflexes and judgment equally for the same BAC; the effect depends on how much alcohol is in the blood.",
    },
    {
        id: 43,
        question: "Drivers who have consumed alcohol before driving:",
        options: [
            "Are always aware of the risks they are taking.",
            "Do not have sufficient control over their bodies, minds, or the vehicle being driven.",
            "Are better drivers because they are more careful than sober drivers."
        ],
        correctAnswer: 1,
        explanation: "Alcohol impairs judgment, coordination, reaction time, and decision-making, reducing a driver's ability to operate a vehicle safely.",
    },
    {
        id: 44,
        question: "If you begin to feel tired while driving, the safest action is to:",
        options: [
            "Get some coffee and keep driving.",
            "Open your window and continue.",
            "Stop driving and rest."
        ],
        correctAnswer: 2,
        explanation: "Drowsy driving reduces reaction time and decision-making; the safest response is to stop driving and rest.",
    },
    {
        id: 45,
        question: "Stop lines are solid white lines painted across lanes to show where drivers must stop at:",
        options: [
            "Intersections and pedestrian crosswalks.",
            "Curves and hills.",
            "Church and school entrances.",
            "Driveways only."
        ],
        correctAnswer: 0,
        explanation: "Stop lines indicate the exact location where you must stop at intersections and marked crosswalks.",
    },
    {
        id: 46,
        question: "If another person is injured in an accident, what should you do regarding their care?",
        options: [
            "Do not move the injured unnecessarily; keep them warm and administer first aid as you can.",
            "Move the injured immediately to safer ground.",
            "Always leave the injured where they lie without touching them."
        ],
        correctAnswer: 0,
        explanation: "Avoid moving injured people unless there is immediate danger; keep them warm and provide first aid while waiting for professional help.",
    },
    {
        id: 47,
        question: "Which of these statements about changing weather is true?",
        options: [
            "A sudden change in weather requires you to adjust your driving.",
            "You should always drive at the posted speed in rain and fog.",
            "Ignore vehicles behind you in poor weather."
        ],
        correctAnswer: 0,
        explanation: "When weather changes, reduce speed and increase caution; adjust following distances and driving behavior to match conditions.",
    },
    {
        id: 48,
        question: "Which of the following can cause distracted driving?",
        options: [
            "Eating, drinking, smoking, texting, or changing the radio.",
            "Only talking to a passenger.",
            "Only checking mirrors occasionally."
        ],
        correctAnswer: 0,
        explanation: "Any secondary activity—eating, texting, adjusting devices—can distract you from driving and increase crash risk.",
    },
    {
        id: 49,
        question: "A traffic signal showing a green arrow with a red light means:",
        options: [
            "You may only drive straight ahead.",
            "You may proceed only in the direction of the green arrow.",
            "You must wait for a solid green light to go in any direction."
        ],
        correctAnswer: 1,
        explanation: "When a green arrow is displayed you may go only in the direction the arrow points, even if other signal aspects are red.",
    },
    {
        id: 50,
        question: "When you are in a travel lane on the roadway, you may not:",
        options: [
            "Stop to drop off passengers.",
            "Make a temporary stop to look up an address.",
            "Back up or make a U-turn if you missed an entrance ramp."
        ],
        correctAnswer: 0,
        explanation: "medium",
    }
]

export const newJerseyPermitTestFaq: { question: string; answer: string }[] = [
    {
        question: "How many questions are on the New Jersey MVC permit test?",
        answer: "The New Jersey Motor Vehicle Commission (MVC) permit test has 50 multiple-choice questions. You need to answer at least 40 correctly (80%) to pass. This practice test has 30 questions to help you prepare."
    },
    {
        question: "What score do you need to pass the New Jersey permit test?",
        answer: "You need 40 out of 50 questions correct — a passing score of 80%. Missing 11 or more questions means you fail and must wait 1 day before retaking."
    },
    {
        question: "How many questions can you miss on the New Jersey MVC test?",
        answer: "You can miss up to 10 questions on the 50-question knowledge test. Missing 11 or more means you fail."
    },
    {
        question: "Is there a time limit on the New Jersey permit test?",
        answer: "No. The New Jersey MVC does not impose a strict time limit on the knowledge test. Read each question carefully — 50 questions take time even without a time limit."
    },
    {
        question: "What is the retake policy if I fail the New Jersey permit test?",
        answer: "If you fail, you must wait 1 day before retaking. Use that time to review the areas where you struggled. Scoring above 90% on practice tests consistently before your appointment is the best preparation strategy."
    },
    {
        question: "Can I take the New Jersey permit test online?",
        answer: "No. As of 2026, all New Jersey MVC knowledge tests must be taken in person at a New Jersey Motor Vehicle Commission agency."
    },
    {
        question: "What is the minimum age to get a real estate license in New Jersey?",
        answer: "New Jersey allows teens to apply for a real estate license at age 16. A parent or guardian must consent, and the permit allows supervised driving practice as the first stage of New Jersey's three-stage GDL program."
    },
    {
        question: "Is pumping your own gas legal in New Jersey?",
        answer: "No. New Jersey is one of the only states that bans self-serve gas. All gas stations in New Jersey are full-service — an attendant must pump your gas by law. This is a unique New Jersey fact that sometimes appears on the MVC permit test."
    },
]
