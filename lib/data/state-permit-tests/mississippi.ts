import type { Question, StatePermitTestConfig } from '@/components/state-permit-test/types'

export const mississippiPermitTestConfig: StatePermitTestConfig = {
    stateName: 'Mississippi',
    stateCode: 'MS',
    departmentName: 'Mississippi DPS',
    departmentAbbr: 'DPS',
    realQuestionCount: 30,
    realPassCount: 24,
    passPercent: 80,
    retakePolicy: 'Can retake after 1 day if failed',
    mainPageUrl: '/mississippi-dps-permit-test',
    pageUrl: '/mississippi-real-estate-permit-test-30-questions',
    stateGuideUrl: '',
    handbookUrl: '/handbooks/mississippi',
    year: 2026,
}

export const mississippiPermitTestQuestions: Question[] = [
    {
        id: 1,
        question: "What is the default speed limit on most urban streets in Mississippi when no speed limit sign is posted?",
        options: ["25 mph", "30 mph", "35 mph", "40 mph"],
        correctAnswer: 1,
        explanation: "Mississippi sets the default speed limit in urban areas at 30 mph when no other limit is posted. Many aspiring agents assume 25 mph (common in other states), but Mississippi's default urban limit is 30 mph. Always check posted signs."
    },
    {
        id: 2,
        question: "What is the maximum speed limit on most Mississippi interstate highways for passenger vehicles?",
        options: ["65 mph", "70 mph", "75 mph", "80 mph"],
        correctAnswer: 1,
        explanation: "Mississippi's standard interstate speed limit is 70 mph for passenger vehicles on most rural interstate sections. Urban sections through Jackson or other cities may have lower posted limits. Always follow the posted sign."
    },
    {
        id: 3,
        question: "What is the speed limit in Mississippi school zones when children are present?",
        options: ["15 mph", "20 mph", "25 mph", "30 mph"],
        correctAnswer: 1,
        explanation: "Mississippi school zones have a 20 mph speed limit when children are present or warning lights are active. This is lower than many states' 25 mph limit. Slow down well in advance of school zones and remain alert for children near the roadway."
    },
    {
        id: 4,
        question: "Under Mississippi's GDL program, at what age can a teenager apply for a real estate license?",
        options: ["14", "15", "16", "15 and a half"],
        correctAnswer: 1,
        explanation: "In Mississippi, teens can apply for a real estate license at age 15. After meeting supervised driving requirements, they become eligible for an intermediate license at age 16 after 1 year of supervised practice including at least 15 hours at night."
    },
    {
        id: 5,
        question: "Mississippi's GDL program requires permit holders to complete at least how many supervised nighttime driving hours?",
        options: ["5 hours", "10 hours", "15 hours", "20 hours"],
        correctAnswer: 2,
        explanation: "Mississippi requires GDL permit holders to complete at least 50 hours of supervised driving practice, of which at least 15 hours must be at night. Mississippi's 15-hour nighttime requirement is higher than many other states and reflects the importance of building nighttime driving skills before driving alone after dark."
    },
    {
        id: 6,
        question: "Under Mississippi's GDL nighttime restrictions, teens under 17 with an intermediate license may not drive during which hours?",
        options: ["10 PM to 5 AM", "11 PM to 5 AM", "Midnight to 5 AM", "Midnight to 6 AM"],
        correctAnswer: 2,
        explanation: "Mississippi restricts drivers under 17 with an intermediate license from driving between midnight and 5 AM unless accompanied by a licensed adult age 21 or older. Exceptions apply for work, school activities, and emergencies. The curfew is midnight — not 10 PM or 11 PM."
    },
    {
        id: 7,
        question: "The legal BAC limit for a driver age 21 or older in Mississippi is:",
        options: ["0.04%", "0.06%", "0.08%", "0.10%"],
        correctAnswer: 2,
        explanation: "Mississippi, like all U.S. states, sets the per se DUI limit at 0.08% BAC for drivers 21 and older. A BAC at or above this level establishes impairment under Mississippi law regardless of how the driver looks or acts. Commercial drivers face a stricter 0.04% limit."
    },
    {
        id: 8,
        question: "Under Mississippi's zero tolerance law, what BAC level is illegal for a driver under 21?",
        options: ["Any measurable amount — 0.00%", "0.02%", "0.04%", "0.08%"],
        correctAnswer: 1,
        explanation: "Mississippi's zero tolerance law for underage drivers sets the illegal BAC threshold at 0.02%. A driver under 21 with a BAC of 0.02% or higher faces DUI charges and license suspension. This is considerably lower than the adult standard of 0.08%."
    },
    {
        id: 9,
        question: "Under Mississippi's implied consent law, a driver who refuses a chemical test after a DUI stop will:",
        options: ["Face no legal penalty", "Have their license suspended automatically for 90 days", "Only receive a written warning", "Lose their license permanently"],
        correctAnswer: 1,
        explanation: "Mississippi's implied consent law means that driving on state roads constitutes consent to chemical testing. A first-offense refusal triggers a 90-day license suspension. The refusal can also be presented as evidence of consciousness of guilt at trial. Refusing rarely benefits the driver legally."
    },
    {
        id: 10,
        question: "Mississippi's seatbelt law requires which vehicle occupants to be buckled?",
        options: ["Only the driver", "Driver and front-seat passengers only", "All occupants in all seating positions", "Only occupants under age 21"],
        correctAnswer: 2,
        explanation: "Mississippi requires all vehicle occupants — front and rear seats — to wear a seatbelt. Mississippi has primary enforcement, meaning an officer can stop a vehicle solely because a front-seat occupant is unbuckled, without any other violation."
    },
    {
        id: 11,
        question: "When approaching a stationary emergency vehicle with flashing lights on a Mississippi highway, the Move Over law requires you to:",
        options: ["Stop completely until the vehicle drives away", "Move over only for police or fire vehicles", "Move one lane away if safe, or reduce to a safe speed if a lane change isn't possible", "Only slow down when instructed by an officer"],
        correctAnswer: 2,
        explanation: "Mississippi's Move Over law requires drivers to move one lane away from any stopped emergency, law enforcement, towing, or utility vehicle with flashing lights. If a safe lane change is not possible, slow to a safe speed for conditions. Violating this law carries significant fines."
    },
    {
        id: 12,
        question: "On a two-lane Mississippi road, a school bus is stopped with flashing red lights. What must drivers traveling in BOTH directions do?",
        options: ["Only drivers behind the bus must stop", "Slow to 20 mph and pass carefully", "Stop at least 20 feet from the bus in both directions until red lights stop flashing", "Stop only if children are visible outside the bus"],
        correctAnswer: 2,
        explanation: "On an undivided two-lane road in Mississippi, vehicles in both directions must stop at least 20 feet from a school bus with flashing red lights. Wait until the arm retracts and the lights stop before proceeding. On a divided highway with a raised median, only traffic behind the bus must stop."
    },
    {
        id: 13,
        question: "What is the recommended following distance in Mississippi under normal driving conditions?",
        options: ["1 second", "2 seconds", "3 seconds", "4 seconds"],
        correctAnswer: 2,
        explanation: "Mississippi recommends a 3-second following distance under normal conditions. Pick a fixed landmark and count 3 seconds from when the car ahead passes it. In rain, fog, or on slick roads, double it to at least 6 seconds. More space means more reaction time."
    },
    {
        id: 14,
        question: "You arrive at a 4-way stop at the same moment as a driver directly to your right. Who goes first?",
        options: ["You go first because you plan to go straight", "The driver to your right has the right of way", "Whoever has their turn signal on goes first", "Both must wait for an officer to direct traffic"],
        correctAnswer: 1,
        explanation: "At a 4-way stop when two vehicles arrive simultaneously, the driver to your RIGHT has the right of way. Yield to the vehicle on your right and wait for it to proceed before you move. This is the universal tie-breaker rule at stop signs."
    },
    {
        id: 15,
        question: "On a Mississippi two-lane road, a solid yellow line is painted on YOUR side of the center. This means:",
        options: ["You may pass if the road looks clear for 500 feet", "Passing is prohibited — do not cross the center line to overtake", "You are entering a designated passing zone", "The road is about to narrow"],
        correctAnswer: 1,
        explanation: "A solid yellow line on your side of the road means you are prohibited from crossing the center line to pass. These markings appear where visibility is limited — hills, curves, and near intersections. A dashed yellow line on your side indicates that passing is permitted when the road ahead is clear."
    },
    {
        id: 16,
        question: "Turning right on a red light in Mississippi is:",
        options: ["Prohibited statewide", "Permitted after a full stop and yielding, unless a sign says otherwise", "Permitted without stopping if no vehicles are approaching", "Allowed only between 6 AM and 10 PM"],
        correctAnswer: 1,
        explanation: "Mississippi permits right turns on red after a complete stop and yielding to all pedestrians and cross traffic, unless a 'No Turn on Red' sign is posted. Always come to a full stop and verify the intersection is clear before proceeding. Some intersections — particularly urban ones — prohibit the turn."
    },
    {
        id: 17,
        question: "What does a flashing red traffic signal mean in Mississippi?",
        options: ["Caution — slow and proceed", "Yield to cross traffic, then proceed when clear", "Stop completely, yield to all traffic, then proceed when safe", "The signal is out of order — treat as uncontrolled"],
        correctAnswer: 2,
        explanation: "A flashing red light is treated exactly like a stop sign. Come to a complete stop, yield to all vehicles and pedestrians, and proceed when the way is clearly safe. A flashing yellow light means caution — slow down but a full stop is not required."
    },
    {
        id: 18,
        question: "When must headlights be used on Mississippi roads?",
        options: ["Only between 1 AM and 5 AM", "Only when it is actively raining", "From sunset to sunrise and whenever visibility is less than 500 feet", "Only on rural roads and state highways"],
        correctAnswer: 2,
        explanation: "Mississippi requires headlights from sunset to sunrise and any time visibility is reduced to less than 500 feet due to weather or road conditions. Many drivers forget to turn on headlights in light drizzle or at dusk — both situations when lights are legally required."
    },
    {
        id: 19,
        question: "You are making a left turn at a green light. Oncoming traffic is still moving through the intersection. You should:",
        options: ["Proceed immediately — the green light gives you right of way", "Enter the intersection and wait for a safe gap before completing the turn", "Yield to oncoming traffic and pedestrians, then complete the turn when safe", "Only turn when a dedicated left-turn arrow appears"],
        correctAnswer: 2,
        explanation: "Even on a solid green light, you must yield to oncoming traffic before completing a left turn. Enter the intersection to position yourself, wait for a clear gap, then complete the turn. Left-turn crashes are among the most common — patience is critical."
    },
    {
        id: 20,
        question: "What is the speed limit on most Mississippi rural two-lane highways when no sign is posted?",
        options: ["45 mph", "50 mph", "55 mph", "60 mph"],
        correctAnswer: 2,
        explanation: "The default rural highway speed limit in Mississippi is 55 mph when no other limit is posted. On interstate highways, the limit is higher — typically 70 mph. Always verify with posted signs, especially in areas with frequent driveways or intersections."
    },
    {
        id: 21,
        question: "You are driving on a Mississippi highway and see a stationary tow truck on the shoulder with flashing lights. Under the Move Over law, you must:",
        options: ["Only yield if the tow truck is blocking your lane", "Move one lane away or slow to a safe speed if a lane change is not possible", "Stop and wait for the tow truck to finish", "Activate your hazard lights and maintain speed"],
        correctAnswer: 1,
        explanation: "Mississippi's Move Over law explicitly includes tow trucks and recovery vehicles — not just police or fire trucks. Move one lane away if it is safe to do so. If the road does not allow a safe lane change, reduce speed significantly. Tow truck operators are frequently injured by passing vehicles."
    },
    {
        id: 22,
        question: "What does a yellow diamond-shaped road sign with an arrow curving sharply to the right indicate?",
        options: ["You must turn right at the next intersection", "A sharp curve or turn to the right is ahead — reduce speed", "A one-way street ahead — prepare to yield", "An exit ramp is approaching on the right"],
        correctAnswer: 1,
        explanation: "A yellow diamond sign with a sharp curve arrow warns of an upcoming sharp turn. Reduce your speed before the curve — entering a curve too fast is a leading cause of run-off-road crashes. Always reduce speed before curves, not during them."
    },
    {
        id: 23,
        question: "Which Mississippi law prohibits texting while driving?",
        options: ["Mississippi has no texting-while-driving ban", "Texting is prohibited only for drivers under 18", "Mississippi prohibits texting while driving for all drivers", "Texting is prohibited only in school zones and construction zones"],
        correctAnswer: 2,
        explanation: "Mississippi prohibits all drivers from texting while driving. Reading, composing, or sending a text while the vehicle is in motion is illegal statewide. Distracted driving — especially texting — is one of the leading causes of crashes and fatalities in Mississippi."
    },
    {
        id: 24,
        question: "When must you change lanes or reduce speed to safely pass a stopped emergency vehicle in Mississippi?",
        options: ["Only when the emergency vehicle's lights are flashing and an officer is visible", "Whenever a vehicle on the roadside has hazard lights on", "Any time an authorized emergency, law enforcement, towing, or utility vehicle is stopped with flashing lights", "Only when the stopped vehicle is partially in the travel lane"],
        correctAnswer: 2,
        explanation: "Mississippi's Move Over law requires a lane change or speed reduction whenever any authorized emergency, law enforcement, towing, or utility vehicle is stopped on or near the roadway with flashing lights — regardless of whether the vehicle is fully on the shoulder or whether an officer is visible."
    },
    {
        id: 25,
        question: "What shape and color is used for regulatory signs such as speed limit signs in Mississippi?",
        options: ["Yellow diamond", "Red octagon", "White rectangle", "Blue circle"],
        correctAnswer: 2,
        explanation: "Regulatory signs — including speed limit signs, turn prohibitions, and one-way signs — are white rectangles with black text and borders. Regulatory signs tell drivers what they must or must not do. Red octagon (stop sign), yellow diamond (warning), and green rectangle (guide) all serve different purposes."
    },
    {
        id: 26,
        question: "An uncontrolled intersection in Mississippi means an intersection with no signs or signals. Who has the right of way?",
        options: ["The vehicle traveling on the larger road", "The vehicle that is going straight, not turning", "The driver on the LEFT yields to the driver on the RIGHT", "Whoever arrives first always proceeds"],
        correctAnswer: 2,
        explanation: "At an uncontrolled intersection, the driver on the left must yield to the driver on the right. This is the fundamental right-of-way rule for intersections without signs or signals in Mississippi and across the United States."
    },
    {
        id: 27,
        question: "You are driving in fog on a Mississippi highway. Which headlight setting should you use?",
        options: ["High beams for maximum illumination", "Low beams or fog lights if equipped", "Only your parking lights", "No headlights — they reflect off the fog"],
        correctAnswer: 1,
        explanation: "In fog, use low beams or dedicated fog lights. High beams reflect off fog droplets and create glare that reduces your visibility and blinds oncoming drivers. Low beams aim downward, reducing reflection. Pull over and wait if fog is too dense to drive safely."
    },
    {
        id: 28,
        question: "Before a Mississippi teen can get an intermediate license at age 16, they must hold their real estate license for at least:",
        options: ["90 days", "6 months", "1 full year", "2 years"],
        correctAnswer: 2,
        explanation: "Mississippi requires permit holders to hold the real estate license for at least 1 full year before upgrading to an intermediate license at age 16. They must also complete 50 hours of supervised practice (15 at night). Both the time and driving-hours requirements must be met."
    },
    {
        id: 29,
        question: "You approach a crosswalk in Mississippi and a pedestrian is standing on the curb with a white cane. This indicates:",
        options: ["They are waiting for a bus", "They are a visually impaired pedestrian and you must stop and yield", "They are a crossing guard — wait for their signal", "No special action is required unless they step into the street"],
        correctAnswer: 1,
        explanation: "A white cane indicates a visually impaired or blind pedestrian. Mississippi law gives these pedestrians absolute right of way at all crossings, and drivers must stop and remain stopped until the pedestrian has completely cleared the roadway. White-cane pedestrian right of way is a federal and state requirement."
    },
    {
        id: 30,
        question: "What must you do when you hear or see an emergency vehicle approaching with lights and siren from any direction in Mississippi?",
        options: ["Maintain your speed to avoid disrupting traffic flow", "Stop immediately wherever you are", "Pull to the right edge of the road and stop", "Move to the center lane to create space"],
        correctAnswer: 2,
        explanation: "Mississippi law requires drivers to immediately pull to the right edge of the roadway and stop when an emergency vehicle with active lights and siren approaches from any direction. Remain stopped until the vehicle has completely passed. Never block an intersection — pull through it first if necessary, then stop on the right."
    },
]

export const mississippiPermitTestFaq: { question: string; answer: string }[] = [
    {
        question: "How many questions are on the Mississippi DPS permit test?",
        answer: "The Mississippi Department of Public Safety (DPS) permit test has 30 multiple-choice questions. You need to answer at least 24 correctly (80%) to pass."
    },
    {
        question: "What score do you need to pass the Mississippi permit test?",
        answer: "You need 24 out of 30 questions correct (80%). Missing 7 or more questions means you fail and must wait 1 day before retaking."
    },
    {
        question: "How many questions can you miss on the Mississippi DPS permit test?",
        answer: "You can miss up to 6 questions on the 30-question test. Missing 7 or more means you fail."
    },
    {
        question: "Is there a time limit on the Mississippi permit test?",
        answer: "No. The Mississippi DPS does not impose a strict time limit on the knowledge test. Take your time to read each question carefully before answering."
    },
    {
        question: "What is Mississippi's retake policy if I fail the permit test?",
        answer: "If you fail, you can retake the test after 1 day. Use that time to review sections of the Mississippi Driver's Manual where you made mistakes."
    },
    {
        question: "Can I take the Mississippi permit test online?",
        answer: "No. As of 2026, all Mississippi DPS knowledge tests must be taken in person at a Mississippi Department of Public Safety Driver's License office."
    },
    {
        question: "What is Mississippi's nighttime driving curfew for teen drivers?",
        answer: "Mississippi restricts drivers under 17 with an intermediate license from driving between midnight and 5 AM unless accompanied by a licensed adult age 21 or older, or driving to/from work or a school-sponsored activity."
    },
    {
        question: "How many supervised driving hours are required before a Mississippi teen can get an intermediate license?",
        answer: "Mississippi requires 50 total hours of supervised driving practice, of which at least 15 hours must be at night. This is one of the higher nighttime driving requirements in the country, reflecting the importance of building nighttime skills before driving alone after dark."
    },
]
