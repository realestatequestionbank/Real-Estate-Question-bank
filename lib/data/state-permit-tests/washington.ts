import type { Question, StatePermitTestConfig } from '@/components/state-permit-test/types'

export const washingtonPermitTestConfig: StatePermitTestConfig = {
    stateName: 'Washington',
    stateCode: 'WA',
    departmentName: 'Washington DOL',
    departmentAbbr: 'DOL',
    realQuestionCount: 40,
    realPassCount: 32,
    passPercent: 80,
    retakePolicy: 'Can retake after 1 day if failed',
    mainPageUrl: '/washington-dol-permit-test',
    pageUrl: '/washington-dol-permit-test-40-questions',
    stateGuideUrl: '/state-guides/washington',
    handbookUrl: '/handbooks/washington',
    year: 2026,
}

export const washingtonPermitTestQuestions: Question[] = [
    {
        id: 1,
        question: "What happens if a bicyclist disobeys traffic laws?",
        options: [
            "They can be issued a ticket.",
            "They are exempt because traffic laws don’t apply to bicyclists.",
            "They will only get a warning from law enforcement."
        ],
        correctAnswer: 0,
        explanation: "Bicyclists generally must follow the same traffic laws as drivers, including obeying signals, signs, and right-of-way rules. If a bicyclist breaks these laws, they can receive a traffic ticket just like a motor vehicle driver.",
    },
    {
        id: 2,
        question: "What is a speed limit?",
        options: [
            "The suggested speed under ideal conditions.",
            "The legal maximum or minimum speed under ideal conditions.",
            "The legal maximum or minimum speed under dangerous conditions."
        ],
        correctAnswer: 1,
        explanation: "A speed limit is the maximum (and sometimes minimum) legal speed allowed on a road under ideal conditions. You must still slow down below the posted limit when conditions are less than ideal, such as in bad weather, heavy traffic, school zones, or work zones.",
    },
    {
        id: 3,
        question: "Who has the right-of-way at a four-way stop if two drivers arrive simultaneously?",
        options: [
            "The driver on the left.",
            "The driver on the right.",
            "Neither driver needs to stop."
        ],
        correctAnswer: 1,
        explanation: "At a four-way stop, all drivers must come to a complete stop. If two vehicles arrive at the same time, the driver on the right has the right-of-way and should proceed first. The driver on the left must yield. If arrival times are different, the vehicle that stopped first goes first, regardless of side.",
    },
    {
        id: 4,
        question: "What does a regulatory sign with a red circle and slash indicate?",
        options: [
            "Drivers must stop completely.",
            "An action is prohibited.",
            "Some drivers must yield."
        ],
        correctAnswer: 1,
        explanation: "A red circle with a diagonal slash over a symbol means that the action shown is not allowed. For example, a right-turn arrow with a red circle and slash means no right turn at that location.",
    },
    {
        id: 5,
        question: "At what age must a child ride in the back seat of a vehicle?",
        options: [
            "Under 13.",
            "Under 14.",
            "Under 16."
        ],
        correctAnswer: 0,
        explanation: "In Washington State, children under 13 years old must ride in the back seat when practical because it is safer in a crash, especially with airbags in the front. The law is under 13, not under 14, 15, or 16. Keeping younger passengers in the rear seat greatly reduces the risk of serious injury.",
    },
    {
        id: 6,
        question: "When may you cross a dashed white line?",
        options: [
            "At any time.",
            "Only during daylight hours.",
            "When safe to change lanes."
        ],
        correctAnswer: 2,
        explanation: "Dashed white lines separate lanes of traffic moving in the same direction. You may cross a dashed white line to change lanes or pass when it is safe and legal to do so, after checking mirrors and blind spots and signaling your intention.",
    },
    {
        id: 7,
        question: "What happens if a green arrow changes to a solid green light?",
        options: [
            "You may still turn but must yield to oncoming traffic.",
            "You must proceed straight and cannot turn.",
            "You retain the right-of-way to turn."
        ],
        correctAnswer: 0,
        explanation: "A green arrow gives you a protected turn with the right-of-way. When it changes to a solid green light, you may still turn in that direction, but it is no longer protected. You must yield to oncoming traffic, cyclists, and pedestrians before turning.",
    },
    {
        id: 8,
        question: "What must a driver do when dealing with pedestrians?",
        options: [
            "Make sure pedestrians see your vehicle.",
            "Always yield and do whatever is necessary to avoid hitting pedestrians, even if they are not following the rules.",
            "Yield only when pedestrians have the right-of-way."
        ],
        correctAnswer: 1,
        explanation: "Drivers must use extreme care around pedestrians. You must yield to pedestrians in crosswalks and always do whatever is necessary to avoid hitting a pedestrian, even if the pedestrian is crossing incorrectly or does not have the right-of-way.",
    },
    {
        id: 9,
        question: "What must you do when meeting an oncoming vehicle on a narrow road?",
        options: [
            "Pull completely off the road.",
            "Allow the oncoming vehicle half the road.",
            "Demand they pull over."
        ],
        correctAnswer: 1,
        explanation: "On a narrow road, you must share the roadway so that each vehicle has enough space to pass safely. Slow down if needed and keep as far to the right as is safe, allowing the oncoming vehicle at least half of the main-traveled portion of the road. Never force the other driver off the road or insist they yield all the space.",
    },
    {
        id: 10,
        question: "What does an arrow painted on the pavement mean?",
        options: [
            "Drivers in that lane must stop before following the arrow.",
            "Drivers in that lane may follow the arrow if they choose.",
            "Drivers in that lane must follow the arrow’s direction."
        ],
        correctAnswer: 2,
        explanation: "Arrows painted on the pavement show which direction traffic in that lane must go, such as straight, left turn, or right turn. When you are in a lane with a directional arrow, you are required to follow that direction unless a traffic sign or signal clearly allows something different.",
    },
    {
        id: 11,
        question: "What does a red and white triangular sign at an intersection indicate?",
        options: [
            "Always stop completely.",
            "Slow down if an emergency vehicle is approaching.",
            "Slow down and yield to traffic or pedestrians."
        ],
        correctAnswer: 2,
        explanation: "A red and white triangular sign is a yield sign. You must slow down, be ready to stop, and yield the right-of-way to traffic and pedestrians already in or approaching the intersection. Stop if needed to avoid interfering with other road users.",
    },
    {
        id: 12,
        question: "What do speed limit signs indicate?",
        options: [
            "Suggested speeds for the area.",
            "Maximum or minimum legal speed.",
            "Speed for heavy traffic."
        ],
        correctAnswer: 1,
        explanation: "Speed limit signs show the maximum or sometimes minimum legal speed under ideal conditions. You must slow down below the posted limit when road, traffic, or weather conditions make the posted speed unsafe.",
    },
    {
        id: 13,
        question: "Where should your car be positioned to make a right turn?",
        options: [
            "Near the center of the street.",
            "Close to the left side.",
            "Close to the right side."
        ],
        correctAnswer: 2,
        explanation: "To make a right turn safely, you should position your vehicle as close as practicable to the right-hand curb or edge of the roadway. This helps prevent you from swinging wide into another lane and keeps you predictable to other drivers, cyclists, and pedestrians.",
    },
    {
        id: 14,
        question: "What color are guide signs that provide directional and mileage information?",
        options: [
            "Red.",
            "Green.",
            "Yellow."
        ],
        correctAnswer: 1,
        explanation: "Guide or destination signs that show directions and distances are green with white lettering. They help you find routes, exits, and destinations, especially in unfamiliar areas.",
    },
    {
        id: 15,
        question: "What does a traffic light with a green arrow and red light mean?",
        options: [
            "Wait for a solid green light to proceed.",
            "Drive only in the direction of the green arrow.",
            "Drive straight ahead only."
        ],
        correctAnswer: 1,
        explanation: "A green arrow means you have a protected turn in the direction of the arrow, even if the main light is red. You may proceed only in the direction of the arrow and must still yield to pedestrians and any traffic already in the intersection.",
    },
    {
        id: 16,
        question: "At an intersection with a yield sign, you should:",
        options: [
            "Yield only to traffic on the left.",
            "Always stop before entering.",
            "Slow down and yield to traffic in the intersection."
        ],
        correctAnswer: 2,
        explanation: "A yield sign means you must slow down and be prepared to stop if necessary, yielding to traffic and pedestrians already in the intersection or on the road you are entering. You do not have to stop if the way is clear.",
    },
    {
        id: 17,
        question: "When may you cross double solid yellow lines?",
        options: [
            "To pass a slow-moving truck.",
            "To turn into a driveway.",
            "To pass another car."
        ],
        correctAnswer: 1,
        explanation: "Double solid yellow lines mean no passing in either direction. You may cross them only to make a left turn into or from a driveway, side road, or alley, to enter or exit a highway, or to make a permitted U‑turn. You may not cross them just to pass slower traffic.",
    },
    {
        id: 18,
        question: "What should you do at an intersection with a green light but pedestrians crossing against the red?",
        options: [
            "Honk your horn.",
            "Speed up to pass pedestrians.",
            "Stop to let pedestrians cross."
        ],
        correctAnswer: 2,
        explanation: "Stop and yield to pedestrians crossing, even if they’re in the wrong, to ensure their safety.",
    },
    {
        id: 19,
        question: "What is the correct order of traffic lights from top to bottom?",
        options: [
            "Green, Yellow, Red",
            "Red, Yellow, Green",
            "Yellow, Green, Red"
        ],
        correctAnswer: 1,
        explanation: "On vertically mounted traffic signals, the red light is always at the top, yellow in the middle, and green at the bottom. This standard order helps drivers quickly recognize the signal even from a distance or in poor visibility.",
    },
    {
        id: 20,
        question: "Where are stop lines located?",
        options: [
            "At intersections and crosswalks.",
            "Next to churches and schools.",
            "In curves and on hills."
        ],
        correctAnswer: 0,
        explanation: "Stop lines are solid white lines painted on the road at intersections and crosswalks. They show you where you must stop your vehicle so that you stay clear of cross traffic, pedestrians, and the crosswalk area.",
    },
    {
        id: 21,
        question: "What do downward-facing triangular signs indicate?",
        options: [
            "Construction zones.",
            "School zones.",
            "Yield to traffic or pedestrians."
        ],
        correctAnswer: 2,
        explanation: "A downward-facing triangle is the standard shape for a yield sign. It tells you to slow down, be ready to stop, and yield the right-of-way to traffic and pedestrians already in or close to the intersection. Proceed only when it is safe.",
    },
    {
        id: 22,
        question: "What do double solid yellow lines in the middle of a road mean?",
        options: [
            "Pedestrian crossing ahead.",
            "Passing is not permitted from either direction except for left turns into or out of a driveway or side road.",
            "Railroad crossing ahead."
        ],
        correctAnswer: 1,
        explanation: "Double solid yellow lines separate traffic moving in opposite directions and mean vehicles in both directions may not cross the lines to pass. The main exception is when you are turning left into or out of a driveway, side road, or alley. You must never use the opposing lane to pass another vehicle across double solid yellow lines.",
    },
    {
        id: 23,
        question: "Is it legal to cross a double solid yellow centerline to pass?",
        options: [
            "Yes",
            "No.",
            "You yes"
        ],
        correctAnswer: 1,
        explanation: "Double solid yellow centerlines mean traffic in both directions is prohibited from crossing to pass. You may only cross them when making a left turn into or out of a driveway, side road, or business entrance, or when directed by law enforcement or traffic control devices.",
    },
    {
        id: 24,
        question: "When must you stop for a school bus?",
        options: [
            "If parked with no one in it.",
            "When approaching without flashing lights.",
            "On a two-lane highway with red lights flashing."
        ],
        correctAnswer: 2,
        explanation: "On a two‑lane road, traffic in both directions must stop when a school bus has its red lights flashing and the stop arm extended. Remain stopped until the red lights stop flashing and the stop arm is withdrawn, watching for children who may be crossing the road.",
    },
    {
        id: 25,
        question: "When may you cross solid yellow lines?",
        options: [
            "To pass same-direction traffic.",
            "During daylight hours only.",
            "When making a turn."
        ],
        correctAnswer: 2,
        explanation: "A single solid yellow line generally marks the center of a two‑way road and warns that passing is discouraged or prohibited. You should not cross it to pass other vehicles. You may cross a solid yellow line only when making a left turn into or from a driveway, side road, or alley, or for a legal U‑turn where allowed and safe.",
    },
    {
        id: 26,
        question: "How should bicyclists ride on sidewalks or in crosswalks?",
        options: [
            "Take the right-of-way.",
            "Yield to pedestrians.",
            "Ride without signaling before passing."
        ],
        correctAnswer: 1,
        explanation: "When riding on sidewalks or in crosswalks where it is allowed, bicyclists must ride slowly and always yield to pedestrians. Treat pedestrians as having the right-of-way and give them plenty of space.",
    },
    {
        id: 27,
        question: "When are you required to stop your vehicle?",
        options: [
            "At a red light.",
            "When a traffic officer signals you to stop.",
            "At an intersection with a stop sign.",
            "All of the above."
        ],
        correctAnswer: 3,
        explanation: "You are required to stop at a steady or flashing red light, at stop signs, and whenever a traffic officer directs you to stop. Failing to stop in any of these situations is illegal and dangerous because cross‑traffic or pedestrians may be entering the intersection.",
    },
    {
        id: 28,
        question: "What does a flashing yellow traffic light mean?",
        options: [
            "Merging traffic.",
            "Proceed with caution.",
            "Pedestrian crossing."
        ],
        correctAnswer: 1,
        explanation: "A flashing yellow light means you must slow down and proceed through the intersection with caution. You do not have to stop, but you must be alert for other vehicles, pedestrians, or hazards.",
    },
    {
        id: 29,
        question: "Who has the right-of-way in a crosswalk marked by two solid white lines?",
        options: [
            "Motor vehicles.",
            "Pedestrians in the crosswalk.",
            "No one."
        ],
        correctAnswer: 1,
        explanation: "When pedestrians are in a marked crosswalk, they have the right-of-way. Drivers must yield and, if necessary, stop to allow pedestrians to cross safely before proceeding.",
    },
    {
        id: 30,
        question: "A red flashing traffic light is equivalent to:",
        options: [
            "A yield sign.",
            "A stop sign.",
            "A solid red light."
        ],
        correctAnswer: 1,
        explanation: "A flashing red light means you must come to a complete stop, just as you would at a stop sign. After stopping, proceed only when the intersection is clear and it is safe to go.",
    },
    {
        id: 31,
        question: "What are the colors of warning signs for upcoming hazards?",
        options: [
            "Black on white.",
            "Black on yellow.",
            "White on blue."
        ],
        correctAnswer: 1,
        explanation: "Most general warning signs that alert you to upcoming hazards are yellow with black symbols or lettering. These signs warn about curves, intersections, pedestrian crossings, and other conditions ahead. Work zone warning signs are usually orange with black symbols or lettering.",
    },
    {
        id: 32,
        question: "What are signs that require drivers to obey an instruction called?",
        options: [
            "Information signs.",
            "Regulatory signs.",
            "Warning signs."
        ],
        correctAnswer: 1,
        explanation: "Regulatory signs tell you what you must do or must not do, such as speed limits, stop signs, and no‑turn signs. Because they state legal requirements, failing to obey them can result in traffic tickets or other penalties.",
    },
    {
        id: 33,
        question: "You are on a two-way street, stopped at an intersection. Can you legally turn left on a red light into a one-way street?",
        options: [
            "Only if a left turn sign is posted.",
            "Yes, if traffic allows unless prohibited.",
            "No, You must wait for the green light.",
            "Only if there is a green arrow with the red light."
        ],
        correctAnswer: 1,
        explanation: "In many states, you may turn left on a red light from a one-way street onto another one-way street, after stopping and yielding, unless a sign prohibits it. However, turning left on red from a two-way street onto a one-way street is not universally allowed and is illegal in several states. Because this rule is not uniform across the U.S., you must follow the specific law in your state as described in your state driver handbook.",
    },
    {
        id: 34,
        question: "What should you do at an uncontrolled intersection?",
        options: [
            "Maintain speed and proceed without checking for other traffic.",
            "Slow, be prepared to stop, check all directions, and proceed only when safe.",
            "Yield to any vehicles already in the intersection and to vehicles on your right if you arrive at the same time."
        ],
        correctAnswer: 1,
        explanation: "At an uncontrolled intersection, you must slow down, be ready to stop, and look carefully in all directions before proceeding. You must yield to any vehicle already in the intersection and to vehicles approaching from the right if you arrive at the same time. Coming to a full stop is often the safest choice when visibility is limited or traffic is close.",
    },
    {
        id: 35,
        question: "What should you do to turn right at a steady red light?",
        options: [
            "Slow down and look for traffic before turning.",
            "Stop, signal, and turn when safe if not prohibited.",
            "Signal and wait for a green light."
        ],
        correctAnswer: 1,
        explanation: "At a steady red light, you must come to a complete stop before the crosswalk or limit line. If right turns on red are allowed at that intersection, signal, yield to pedestrians and other traffic, and then turn right when it is safe.",
    },
    {
        id: 36,
        question: "What does a steady green light at an intersection mean?",
        options: [
            "Stop and check for traffic before proceeding.",
            "Slow down and prepare to stop.",
            "Drive through if the road is clear."
        ],
        correctAnswer: 2,
        explanation: "A steady green light means you may go straight or turn, if not prohibited, but only if the intersection is clear. You must still yield to pedestrians in the crosswalk and to oncoming traffic when turning left. Green never means you can proceed without checking for other road users.",
    },
    {
        id: 37,
        question: "Where should you stop at an intersection with a stop sign but no stop line or crosswalk?",
        options: [
            "No stop is required.",
            "Slow down to check traffic.",
            "Stop where you can see approaching traffic."
        ],
        correctAnswer: 2,
        explanation: "At a stop sign with no stop line or crosswalk, you must stop before entering the intersection at the point nearest the intersecting roadway where you have a clear view of approaching traffic, without moving into the intersection.",
    },
    {
        id: 38,
        question: "When can you proceed through an intersection with a stop sign but no stop line or crosswalk?",
        options: [
            "After slowing to check traffic, without fully stopping.",
            "After coming to a complete stop where you can see traffic and verifying it’s safe.",
            "After stopping exactly 20 feet before the intersection."
        ],
        correctAnswer: 1,
        explanation: "At a stop sign with no stop line or crosswalk, you must come to a complete stop before entering the intersection, at the point where you can best see approaching traffic. After stopping and checking in all directions, proceed only when the way is clear and it is safe to enter the intersection.",
    },
    {
        id: 39,
        question: "When must you stop at a railroad crossing?",
        options: [
            "If a stop sign is posted.",
            "If a crossing gate is lowered.",
            "If crossing lights are flashing.",
            "All of the above."
        ],
        correctAnswer: 3,
        explanation: "You must stop at a railroad crossing any time a stop sign is posted, the crossing gate is lowered or starting to lower, the red warning lights are flashing, a flagger signals you to stop, or you can see or hear a train that is close enough to be a danger. Never drive around lowered gates or ignore flashing lights, even if you do not see a train.",
    },
    {
        id: 40,
        question: "What shape is a stop sign?",
        options: [
            "Circle.",
            "Square.",
            "Octagon."
        ],
        correctAnswer: 2,
        explanation: "A stop sign is an octagon. This unique eight-sided shape helps drivers recognize it quickly from a distance and even from the back, reminding them that all approaching traffic must come to a complete stop before proceeding when safe.",
    }
]

export const washingtonPermitTestFaq: { question: string; answer: string }[] = [
    {
        question: "How many questions are on the Washington DOL permit test?",
        answer: "The Washington Department of Licensing (DOL) knowledge test has 40 multiple-choice questions. You need to answer at least 32 correctly (80%) to pass. This practice set uses 30 questions to give you thorough coverage of the same material."
    },
    {
        question: "What score do you need to pass the Washington DOL permit test?",
        answer: "You need 32 out of 40 questions correct on the real test — a passing score of 80%. Missing 9 or more questions means you fail and must wait 1 day before retaking."
    },
    {
        question: "How many questions can you miss on the Washington DOL test?",
        answer: "You can miss up to 8 questions on the 40-question knowledge test. Missing 9 or more means you fail."
    },
    {
        question: "Is there a time limit on the Washington DOL permit test?",
        answer: "No. The Washington DOL does not impose a time limit on the knowledge test. Take your time on each question."
    },
    {
        question: "What is the retake policy if I fail the Washington permit test?",
        answer: "If you fail, you must wait 1 day before retaking. Use that time to review the areas where you struggled. Consistently scoring 90%+ on practice tests before your appointment is the best way to pass on your first try."
    },
    {
        question: "Can I take the Washington DOL permit test online?",
        answer: "No. As of 2026, the Washington DOL knowledge test must be taken in person at a DOL licensing office. You can make an appointment on the Washington DOL website. Note: Washington calls the permit an 'Instruction Permit,' not a 'Learner's Permit.'"
    },
    {
        question: "What is the minimum age to get an Instruction Permit in Washington State?",
        answer: "You must be at least 15 years old to apply for a Washington Instruction Permit (Washington's term for the real estate license). You'll need to pass the 40-question knowledge test and a vision screening. After holding the permit for 6 months and completing 50 hours of supervised driving (including 10 at night), you can apply for an intermediate license at age 16."
    },
    {
        question: "Why does Washington use 'Instruction Permit' instead of 'Learner's Permit'?",
        answer: "Washington State's Department of Licensing (DOL) — not Real Estate — uses 'Instruction Permit' as the official term for what most states call a real estate license. This terminology is specific to Washington and is tested on the DOL knowledge exam. Similarly, Washington's supervising driver requirement is age 25 (or 18 if a licensed driving instructor), which is older than many other states."
    },
]
