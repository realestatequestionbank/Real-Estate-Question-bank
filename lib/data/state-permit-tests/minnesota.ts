import type { Question, StatePermitTestConfig } from '@/components/state-permit-test/types'

export const minnesotaPermitTestConfig: StatePermitTestConfig = {
    stateName: 'Minnesota',
    stateCode: 'MN',
    departmentName: 'Minnesota DVS',
    departmentAbbr: 'DVS',
    realQuestionCount: 40,
    realPassCount: 32,
    passPercent: 80,
    retakePolicy: 'Can retake after 1 day if failed',
    mainPageUrl: '/minnesota-dvs-permit-test',
    pageUrl: '/minnesota-dvs-permit-test-40-questions',
    stateGuideUrl: '/state-guides/minnesota',
    handbookUrl: '/handbooks/minnesota',
    year: 2026,
}

export const minnesotaPermitTestQuestions: Question[] = [
    {
        id: 1,
        question: "Which of the following is true about passing another vehicle?",
        options: [
            "You may pass another vehicle on a hill or in a curve.",
            "You may pass another vehicle by using the shoulder of the highway.",
            "You may pass only where it is legal and safe to do so."
        ],
        correctAnswer: 2,
        explanation: "Never pass on a hill or curve where you cannot see oncoming traffic; do not use the shoulder. Pass only where it is legal and safe.",
    },
    {
        id: 2,
        question: "When driving in fog, should you use high beam headlights?",
        options: [
            "True",
            "False"
        ],
        correctAnswer: 1,
        explanation: "Use low-beam headlights in fog; high beams reflect off the fog and reduce visibility.",
    },
    {
        id: 3,
        question: "When approaching a steady green traffic light, what should drivers do?",
        options: [
            "Proceed if the intersection is clear, yielding to pedestrians and vehicles in the intersection.",
            "Treat the intersection like a four-way stop.",
            "Stop if a police officer is nearby."
        ],
        correctAnswer: 0,
        explanation: "On a steady green, you may go if the way is clear, but must yield to pedestrians and any vehicles still in the intersection; be prepared to stop if the light changes.",
    },
    {
        id: 4,
        question: "Lack of sleep affects your driving ability in a way similar to which of the following?",
        options: [
            "The effect that amphetamines have.",
            "The effect that alcohol has.",
            "The effect that anger has.",
            "None of the above."
        ],
        correctAnswer: 1,
        explanation: "Fatigue impairs driving in a manner comparable to alcohol. For example, being awake 18 hours can impair driving similar to a BAC of about 0.05%, and 24 hours awake is similar to about 0.10%.",
    },
    {
        id: 5,
        question: "Using both lap and shoulder belts together increases survival in a crash. True or false?",
        options: [
            "True",
            "False"
        ],
        correctAnswer: 0,
        explanation: "Properly worn lap and shoulder belts together provide the most protection and reduce the risk of serious injury or death in crashes.",
    },
    {
        id: 6,
        question: "Is it legal to cross a double solid yellow centerline to pass?",
        options: [
            "If there is no oncoming traffic.",
            "Yes.",
            "No."
        ],
        correctAnswer: 2,
        explanation: "Two solid yellow lines mean neither lane may cross to pass; you may cross only to turn into a driveway or side road where permitted.",
    },
    {
        id: 7,
        question: "What is the single most effective thing you can do to reduce injury risk in a crash?",
        options: [
            "Stay in the right lane on multilane highways.",
            "Limit your driving to weekdays.",
            "Wear your seat belt."
        ],
        correctAnswer: 2,
        explanation: "Wearing a seat belt is the most effective way to reduce the risk of death or serious injury in a crash.",
    },
    {
        id: 8,
        question: "What characterizes a good defensive driver?",
        options: [
            "Looks out for actions of other drivers and anticipates problems.",
            "Drives slowly at all times.",
            "Travels at a constant speed regardless of conditions."
        ],
        correctAnswer: 0,
        explanation: "A good defensive driver stays alert to others' behaviors, anticipates hazards, and adapts speed and position to remain safe.",
    },
    {
        id: 9,
        question: "Is the posted maximum speed limit always the fastest you can legally drive under any conditions?",
        options: [
            "True",
            "False"
        ],
        correctAnswer: 1,
        explanation: "The posted maximum speed is for ideal conditions; you must reduce speed when conditions (weather, visibility, traffic) require it.",
    },
    {
        id: 10,
        question: "Taking drugs together with alcohol typically:",
        options: [
            "Lessens the effect of alcohol on your ability to drive.",
            "Is no more dangerous than consuming alcohol by itself.",
            "Increases the risk of causing a crash."
        ],
        correctAnswer: 2,
        explanation: "Combining drugs and alcohol can multiply impairment and increase the likelihood of a crash.",
    },
    {
        id: 11,
        question: "Which types of drugs can affect your driving ability?",
        options: [
            "Only illegal narcotics.",
            "Only prescription drugs.",
            "Both over-the-counter and prescription drugs, as well as illegal drugs.",
            "Only allergy medicines."
        ],
        correctAnswer: 2,
        explanation: "Many legal and illegal drugs, including prescription and over-the-counter medications, can impair driving and make it unsafe.",
    },
    {
        id: 12,
        question: "You cannot pass safely on a two-way, two-lane street unless you can:",
        options: [
            "Return to your lane before meeting oncoming traffic.",
            "Your vehicle is capable of the speed necessary to pass.",
            "Clearly see the road ahead so you can complete the pass safely."
        ],
        correctAnswer: 2,
        explanation: "You should only pass when you can clearly see the road ahead, can return to your lane before meeting oncoming traffic, and your vehicle can safely complete the pass.",
    },
    {
        id: 13,
        question: "Drivers may not pass from either side of which centerline type?",
        options: [
            "Double solid yellow",
            "Single broken yellow",
            "Combination solid and broken yellow"
        ],
        correctAnswer: 0,
        explanation: "A double solid yellow centerline prohibits passing by traffic from either direction.",
    },
    {
        id: 14,
        question: "Who is required to use seat belts in Minnesota?",
        options: [
            "Only the driver.",
            "All vehicle occupants as required by law.",
            "Only child passengers.",
            "Only passengers in the front seat."
        ],
        correctAnswer: 1,
        explanation: "Minnesota law requires seat belt use; vehicles must be equipped with seat belts and occupants must use them as required.",
    },
    {
        id: 15,
        question: "When you hear or see an emergency vehicle approaching on a divided multilane highway, what must you do?",
        options: [
            "Ignore the signal if other lanes are free.",
            "Stop immediately where you are.",
            "Slow, provide a clear path by moving if safe, and stop if necessary.",
            "Speed up to clear the lane."
        ],
        correctAnswer: 2,
        explanation: "If you see or hear an emergency vehicle, slow and move safely to allow a clear path and stop if necessary so the emergency vehicle can pass.",
    },
    {
        id: 16,
        question: "When passing a vehicle that has just parked on the side of the road, what should you assume?",
        options: [
            "The driver may open their door, so use extra caution.",
            "Speed up to pass quickly.",
            "Slam on your brakes as you approach."
        ],
        correctAnswer: 0,
        explanation: "Assume doors may open; pass slowly and give space when passing parked vehicles to avoid striking someone exiting.",
    },
    {
        id: 17,
        question: "When passing on a multilane highway, what must you ensure?",
        options: [
            "The passing lane is clear and it is safe to change lanes.",
            "You may only pass on the right.",
            "Watch for oncoming traffic in the opposite direction."
        ],
        correctAnswer: 0,
        explanation: "Before passing on a multilane highway, confirm the lane you will use is clear and signal before changing lanes.",
    },
    {
        id: 18,
        question: "What does a single dashed white line between lanes mean?",
        options: [
            "Drivers may not pass.",
            "Lanes move in opposite directions.",
            "Drivers may pass or change lanes when it is safe to do so."
        ],
        correctAnswer: 2,
        explanation: "Dashed white lines separate lanes moving in the same direction; you may cross them to pass or change lanes when safe.",
    },
    {
        id: 19,
        question: "How should drivers respond to a flashing yellow traffic signal?",
        options: [
            "Increase their speed to clear the intersection.",
            "Come to a complete stop regardless of traffic.",
            "Slow down and proceed with caution.",
            "Turn on hazard lights and proceed."
        ],
        correctAnswer: 2,
        explanation: "A flashing yellow light warns of a hazard—slow down and proceed with caution through the intersection.",
    },
    {
        id: 20,
        question: "Which of the following can impair your ability to drive and lead to a DUII arrest?",
        options: [
            "Beer, wine, and other liquor",
            "Controlled substances such as illegal drugs or prescription medicines",
            "Inhalants such as glue or paint",
            "All of the above."
        ],
        correctAnswer: 3,
        explanation: "Many substances — alcohol, illegal drugs, inhalants, and some legal medications — can impair driving ability and can result in arrest.",
    },
    {
        id: 21,
        question: "What should you do before making a turn?",
        options: [
            "Activate your turn signal several seconds before turning.",
            "Turn the wheel immediately without signaling.",
            "Increase your speed before turning.",
            "Sound your horn instead of signaling."
        ],
        correctAnswer: 0,
        explanation: "Always signal three to four seconds before turning to communicate your intentions to other road users.",
    },
    {
        id: 22,
        question: "Why should you be cautious when passing a bicycle?",
        options: [
            "The bicycle always has the right-of-way.",
            "You are moving faster than the bicycle.",
            "Oncoming traffic may not see you pull out to pass the bicycle."
        ],
        correctAnswer: 1,
        explanation: "Cyclists may need to swerve or avoid hazards; also oncoming traffic may not realize you are passing, so pass with extra caution and give plenty of space.",
    },
    {
        id: 23,
        question: "Which actions help lower the risk of hydroplaning?",
        options: [
            "Use tires with proper air pressure.",
            "Replace tires that have bad tread.",
            "Do not speed when the roads are wet."
        ],
        correctAnswer: 2,
        explanation: "To reduce hydroplaning risk: avoid excessive speed on wet roads, maintain proper tire pressure, and replace tires with worn tread.",
    },
    {
        id: 24,
        question: "What should you do when an emergency vehicle displaying flashing red or blue lights approaches?",
        options: [
            "Pull over to the side and come to a complete stop.",
            "Continue driving but try to stay out of its way.",
            "See if you can reach your destination before the emergency vehicle catches up to you.",
            "Speed up and get out of the way."
        ],
        correctAnswer: 0,
        explanation: "Yield the right-of-way: where possible, pull to the right edge of the road and stop; if in an intersection, clear it first then pull over.",
    },
    {
        id: 25,
        question: "Is it legal to exceed the posted speed limit when passing another vehicle?",
        options: [
            "True — briefly exceeding the speed limit is allowed.",
            "False — you must not exceed the posted limit even when passing.",
            "Only if the passing lane is clear.",
            "Only on a two-lane road."
        ],
        correctAnswer: 1,
        explanation: "It is illegal to exceed the posted speed limit under any circumstances, including when passing another vehicle.",
    },
    {
        id: 26,
        question: "How should you respond when other drivers around you are behaving angrily?",
        options: [
            "Avoid eye contact and distance yourself from the situation.",
            "React with hand gestures to show disapproval.",
            "Accelerate to get away quickly.",
            "Confront the driver if they make a mistake."
        ],
        correctAnswer: 0,
        explanation: "When others are angry you should distance yourself physically and mentally, avoid eye contact, and take actions to reduce risk.",
    },
    {
        id: 27,
        question: "If you hear a siren behind you while driving, what should you do?",
        options: [
            "Stop where you are.",
            "Pull over to the right and stop.",
            "Speed up to get out of the way."
        ],
        correctAnswer: 1,
        explanation: "When you hear a siren coming from behind, reduce speed and safely pull over to the right side of the road and stop to clear the way.",
    },
    {
        id: 28,
        question: "When an emergency vehicle is using sirens or flashing lights and approaches, the driver must immediately:",
        options: [
            "Pull to the right and slow down.",
            "Pull to the right and stop.",
            "Pull to the right and turn on their four-way flashers."
        ],
        correctAnswer: 1,
        explanation: "You must immediately pull to the right side of the road and stop to allow emergency vehicles to pass safely.",
    },
    {
        id: 29,
        question: "At a four-way stop when two drivers arrive simultaneously, who has the right-of-way?",
        options: [
            "The driver on the right.",
            "The driver on the left.",
            "Either driver may proceed without stopping."
        ],
        correctAnswer: 0,
        explanation: "When two drivers arrive together at a four-way stop, yield to the driver on your right and then proceed when safe.",
    },
    {
        id: 30,
        question: "Is it lawful to drive at night using only your parking lights?",
        options: [
            "True",
            "False"
        ],
        correctAnswer: 1,
        explanation: "Driving at night on parking lights alone is unlawful; use your headlights when visibility is reduced.",
    },
    {
        id: 31,
        question: "When driving on gravel or dirt roads, what should you do?",
        options: [
            "Slow down because stopping distances are longer and skids more likely.",
            "Increase your speed to avoid dust.",
            "Come to a complete stop at all times."
        ],
        correctAnswer: 0,
        explanation: "On unpaved roads reduce speed and drive cautiously because traction is reduced and stopping distances are greater.",
    },
    {
        id: 32,
        question: "What's a good general rule for passing slower traffic?",
        options: [
            "Try to get to the front of slow-moving traffic so you can see better.",
            "Drive with the flow of traffic and pass only as needed.",
            "Pass on the right whenever possible."
        ],
        correctAnswer: 1,
        explanation: "Passing increases collision risk; drive with the flow of traffic and only pass when it is necessary and safe to do so.",
    },
    {
        id: 33,
        question: "What best ensures your safety when preparing to back up your vehicle?",
        options: [
            "Check your rearview mirrors only.",
            "Open the door and look behind as you back up.",
            "Honk immediately before shifting into reverse.",
            "Walk to the rear of the vehicle and check behind it before getting in."
        ],
        correctAnswer: 3,
        explanation: "Backing requires extra caution. Before getting in to back up, walk behind the vehicle to check for children or small obstacles, and while backing turn your head to look through the rear window rather than relying only on mirrors.",
    },
    {
        id: 34,
        question: "On a two-lane road without bicycle lanes, how should you pass a bicyclist traveling in the same direction?",
        options: [
            "Wait until no oncoming traffic, then pass with sufficient space.",
            "Continue driving straight and expect the bicyclist to move.",
            "Do not pass until a signalized intersection."
        ],
        correctAnswer: 0,
        explanation: "Pass bicyclists as you would other vehicles, leaving at least 3 feet of clearance (more at higher speeds) and not passing too fast or close.",
    },
    {
        id: 35,
        question: "Is it beneficial to continually improve your driving and observation skills because driving always involves some risk?",
        options: [
            "No — improvement is unnecessary.",
            "Yes — continually improving driving and observation is wise.",
            "Only required for aspiring agents.",
            "Only necessary if you drive in bad weather."
        ],
        correctAnswer: 1,
        explanation: "Because driving always involves risk, drivers should continually work to improve their driving and observation skills for safety.",
    },
    {
        id: 36,
        question: "How does increasing your vehicle's speed affect your field of vision?",
        options: [
            "Decreases your field of vision.",
            "Increases your field of vision.",
            "Makes it easier to see cross traffic.",
            "Has no effect."
        ],
        correctAnswer: 0,
        explanation: "As speed increases your field of vision narrows, reducing your ability to detect hazards. Drive more cautiously at higher speeds.",
    },
    {
        id: 37,
        question: "If you miss your exit on a freeway, what should you do?",
        options: [
            "Continue to the next exit or safe place to turn around.",
            "Stop and back up on the shoulder.",
            "Make the turn quickly from your current lane."
        ],
        correctAnswer: 0,
        explanation: "If you miss an exit, keep going to the next exit; never back up or attempt an abrupt lane change on a freeway.",
    },
    {
        id: 38,
        question: "When may you cross a broken (dashed) white line?",
        options: [
            "Only during daylight hours.",
            "When it is safe to change lanes.",
            "At any time."
        ],
        correctAnswer: 1,
        explanation: "Broken white lines separate lanes moving in the same direction; you may cross them to change lanes or pass when it is safe to do so.",
    },
    {
        id: 39,
        question: "Drivers are required to yield to pedestrians in a marked crosswalk. Is the statement \\Drivers are not required to yield to pedestrians in a crosswalk\\\" true or false?\"",
        options: [
            "True — drivers need not stop.",
            "False — drivers must stop and yield.",
            "Only true at night.",
            "Only true on multilane roads."
        ],
        correctAnswer: 1,
        explanation: "Drivers must stop and yield to pedestrians in marked crosswalks and to pedestrians in unmarked crosswalks on the driver’s side when no traffic control signals are present.",
    },
    {
        id: 40,
        question: "If a traffic signal displays a red light and a green arrow pointing your way, may you turn in the arrow's direction?",
        options: [
            "True — after yielding to traffic and pedestrians in the intersection.",
            "False"
        ],
        correctAnswer: 0,
        explanation: "A green arrow allows you to proceed in the arrow's direction after yielding to any conflicting traffic or pedestrians in the intersection.",
    }
]

export const minnesotaPermitTestFaq: { question: string; answer: string }[] = [
    {
        question: "How many questions are on the Minnesota DVS permit test?",
        answer: "The Minnesota Driver and Vehicle Services (DVS) knowledge test has 40 multiple-choice questions. You need to answer at least 32 correctly (80%) to pass and receive your real estate license."
    },
    {
        question: "What score do you need to pass the Minnesota permit test?",
        answer: "You need 32 out of 40 correct — a passing score of 80%. You can miss up to 8 questions. Missing 9 or more means you fail and must wait at least 1 day before retaking."
    },
    {
        question: "How many questions can you miss on the Minnesota DVS knowledge test?",
        answer: "You can miss up to 8 questions on the 40-question test. If you miss 9 or more, you fail and must wait 1 day before retaking."
    },
    {
        question: "Is there a time limit on the Minnesota permit test?",
        answer: "Minnesota does not impose a strict time limit on the knowledge test. Read each question carefully and take the time you need — accuracy matters more than speed."
    },
    {
        question: "What happens if I fail the Minnesota DVS permit test?",
        answer: "If you fail, you must wait 1 day before retaking. Review the Minnesota Driver's Manual focusing on the sections where you missed questions. Scoring consistently above 85% on practice tests before your appointment is ideal preparation."
    },
    {
        question: "Can I take the Minnesota permit test online?",
        answer: "As of 2026, the Minnesota DVS knowledge test must be taken in person at a Driver's License Agent location. Visit the Minnesota DVS website to find an agent near you and check for appointment availability."
    },
    {
        question: "What is the minimum age to get a real estate license in Minnesota?",
        answer: "You must be at least 15 years old to apply for a Minnesota real estate license. Permit holders may drive only when accompanied by a licensed driver age 21 or older seated in the front seat."
    },
    {
        question: "What should Minnesota drivers know about farm equipment on rural roads?",
        answer: "In Minnesota's agricultural regions, slow-moving farm equipment is common on rural roads — especially during planting and harvest season. Vehicles displaying an orange reflective triangle (SMV emblem) travel at 25 mph or slower. Slow down, follow at a safe distance, and only pass when it is clearly safe to do so."
    },
]
