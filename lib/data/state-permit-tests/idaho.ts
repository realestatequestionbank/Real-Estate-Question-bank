import type { Question, StatePermitTestConfig } from '@/components/state-permit-test/types'

export const idahoPermitTestConfig: StatePermitTestConfig = {
    stateName: 'Idaho',
    stateCode: 'ID',
    departmentName: 'Idaho Real Estate',
    departmentAbbr: 'Real Estate',
    realQuestionCount: 40,
    realPassCount: 34,
    passPercent: 85,
    retakePolicy: 'Can retake after 1 day if failed',
    mainPageUrl: '/idaho-real-estate-permit-test',
    pageUrl: '/idaho-real-estate-permit-test-40-questions',
    stateGuideUrl: '/state-guides/idaho',
    handbookUrl: '/handbooks/idaho',
    year: 2026,
}

export const idahoPermitTestQuestions: Question[] = [
    {
        id: 1,
        question: "What does an orange-colored road sign generally indicate?",
        options: [
            "Construction, maintenance, or emergency operations ahead.",
            "A school zone is ahead.",
            "A railroad crossing is ahead."
        ],
        correctAnswer: 0,
        explanation: "Orange signs warn of construction or maintenance activities; slow down and be prepared for changed traffic patterns.",
    },
    {
        id: 2,
        question: "A broken yellow line beside a solid yellow line means:",
        options: [
            "Passing is permitted from the lane next to the solid line.",
            "Passing is permitted from the lane next to the broken line.",
            "Passing on the left is permitted from either direction."
        ],
        correctAnswer: 1,
        explanation: "When a broken yellow line is next to a solid yellow, vehicles on the side of the broken line may pass when safe; vehicles next to the solid line may not.",
    },
    {
        id: 3,
        question: "You may cross a dashed white line:",
        options: [
            "Only during daylight hours.",
            "When it is safe to change lanes.",
            "At any time."
        ],
        correctAnswer: 1,
        explanation: "Broken white lines separate lanes moving in the same direction and may be crossed to change lanes when it is safe.",
    },
    {
        id: 4,
        question: "What does a posted speed limit represent?",
        options: [
            "The maximum legal speed under ideal conditions.",
            "The exact speed you must always drive to avoid a ticket.",
            "Only a suggested speed to follow."
        ],
        correctAnswer: 0,
        explanation: "A speed limit is the maximum legal speed for ideal conditions; you should drive slower when road, weather, or traffic conditions demand it.",
    },
    {
        id: 5,
        question: "What should you do before making a turn?",
        options: [
            "Signal your intent a few seconds before turning.",
            "Turn the wheel immediately without signaling.",
            "Increase your speed then turn."
        ],
        correctAnswer: 0,
        explanation: "Activate your turn signal about three to four seconds before turning to warn other road users.",
    },
    {
        id: 6,
        question: "Which signal indicates you should slow down and proceed with caution through an intersection?",
        options: [
            "A flashing yellow light.",
            "A flashing red light.",
            "A solid yellow light."
        ],
        correctAnswer: 0,
        explanation: "A flashing yellow light means slow down, proceed with caution, and be ready to stop if necessary.",
    },
    {
        id: 7,
        question: "When the driver behind you signals they want to pass, what should you do?",
        options: [
            "Slow down to allow space in front of your vehicle for a safe pass.",
            "Speed up to prevent them from passing.",
            "Maintain exactly the same speed."
        ],
        correctAnswer: 0,
        explanation: "Slow slightly to create a gap ahead of your vehicle so the overtaking driver can pass more quickly and safely.",
    },
    {
        id: 8,
        question: "What does a steady green traffic light at an intersection mean?",
        options: [
            "Must slow down and prepare to stop.",
            "May drive through the intersection if the road is clear.",
            "Must stop and check for oncoming traffic before proceeding."
        ],
        correctAnswer: 1,
        explanation: "A steady green light means you may proceed through the intersection if it is clear. You may also turn, but you must yield to pedestrians and other traffic as required.",
    },
    {
        id: 9,
        question: "How should you drive in fog to reduce risk?",
        options: [
            "Reduce speed, drive cautiously, and use low-beam headlights.",
            "Use high beams to see farther.",
            "Use hazard lights only."
        ],
        correctAnswer: 0,
        explanation: "In fog, slow down, be cautious, and use low beams because high beams reflect back and reduce visibility.",
    },
    {
        id: 10,
        question: "What best ensures safety when backing a vehicle?",
        options: [
            "Check behind the vehicle on foot before getting in.",
            "Check rearview mirrors only.",
            "Honk immediately before reversing."
        ],
        correctAnswer: 0,
        explanation: "Because it's hard to see from the driver's seat, walk to the rear of the vehicle first to check for children or objects before backing.",
    },
    {
        id: 11,
        question: "What have studies shown about wearing a seat belt properly?",
        options: [
            "It reduces the risk of serious injury in a crash.",
            "It increases the chance of fatality.",
            "It reduces damage to your vehicle."
        ],
        correctAnswer: 0,
        explanation: "Properly worn seat belts significantly reduce the chances of serious injury or death in crashes.",
    },
    {
        id: 12,
        question: "Which activities can cause distracted driving?",
        options: [
            "Eating, drinking, smoking, talking or texting, changing the radio.",
            "Only texting.",
            "Only adjusting the radio."
        ],
        correctAnswer: 0,
        explanation: "Many common tasks—eating, phone use, or adjusting audio—distract drivers and increase crash risk.",
    },
    {
        id: 13,
        question: "To help prevent fatigue on a long trip, what should you do?",
        options: [
            "Do arm exercises every hour.",
            "Drive with one eye open at a time.",
            "Stop and rest approximately every two hours."
        ],
        correctAnswer: 2,
        explanation: "To reduce fatigue, stop regularly—about every two hours—for a short break, rest, or stretch; if drowsy, stop driving immediately and rest.",
    },
    {
        id: 14,
        question: "Approximately how far might a fully loaded tractor-trailer traveling 55 mph take to stop?",
        options: [
            "Up to 400 feet.",
            "About 50 feet.",
            "About 125 feet."
        ],
        correctAnswer: 0,
        explanation: "Large, fully loaded tractor-trailers require much longer distances to stop than passenger cars—up to nearly 400 feet at 55 mph.",
    },
    {
        id: 15,
        question: "Regarding pedestrians, what is the driver's responsibility?",
        options: [
            "Do everything possible to avoid striking a pedestrian and yield the right-of-way.",
            "Only yield if the pedestrian is in a marked crosswalk.",
            "Assume pedestrians must yield to vehicles."
        ],
        correctAnswer: 0,
        explanation: "Drivers must be alert and yield to pedestrians to prevent collisions, even if the pedestrian is not lawfully crossing.",
    },
    {
        id: 16,
        question: "What factor significantly affects your ability to stop a vehicle?",
        options: [
            "Road conditions (wet, icy, gravel)",
            "Signal lights ahead",
            "Time of day only"
        ],
        correctAnswer: 0,
        explanation: "Stopping distance is heavily influenced by road surface and condition; reduce speed accordingly when roads are poor.",
    },
    {
        id: 17,
        question: "Is it legal to cross a double solid yellow centerline to pass another vehicle?",
        options: [
            "No.",
            "Yes.",
            "Only if there is no oncoming traffic."
        ],
        correctAnswer: 0,
        explanation: "Two solid yellow lines mean no passing or crossing for either direction except to turn into a driveway or similar approved location.",
    },
    {
        id: 18,
        question: "How should you respond when near a blind pedestrian using a white cane or guide dog?",
        options: [
            "Slow down, yield the right-of-way, and be prepared to stop.",
            "Take the right-of-way because vehicles have priority.",
            "Proceed normally without slowing down."
        ],
        correctAnswer: 0,
        explanation: "Slow, yield, and be ready to stop whenever you encounter a blind pedestrian using a cane or guide dog to ensure their safety.",
    },
    {
        id: 19,
        question: "What effect does alcohol have on reflexes and reaction time?",
        options: [
            "Puts you to sleep.",
            "Wakes you up.",
            "Slows reflexes and reaction time."
        ],
        correctAnswer: 2,
        explanation: "Alcohol is a depressant that slows brain activity, reducing reaction time and impairing judgment and coordination needed for safe driving.",
    },
    {
        id: 20,
        question: "If an aggressive driver cuts you off, what is the safest reaction?",
        options: [
            "Stay calm and move out of the aggressive driver's way.",
            "Flash your lights to let them know they are wrong.",
            "Speed up and try to retaliate."
        ],
        correctAnswer: 0,
        explanation: "Avoid escalating the situation. Remain calm, give the aggressive driver space, and if necessary report the incident to authorities when safe.",
    },
    {
        id: 21,
        question: "When approaching an emergency vehicle stopped on the right with lights flashing, you should:",
        options: [
            "Maintain your current speed and move quickly into a lane farther away from the emergency vehicle.",
            "Maintain your current speed and drive in the right lane.",
            "Reduce your speed and safely vacate the lane closest to the emergency vehicle."
        ],
        correctAnswer: 2,
        explanation: "Slow down and move over one lane away from stopped emergency vehicles when it is safe to do so; if you cannot safely change lanes, reduce speed and proceed with caution.",
    },
    {
        id: 22,
        question: "On a narrow road with an obstructed view approaching a curve, the best action is to:",
        options: [
            "Stop the car, get out, and walk around the curve to see what is there.",
            "Rapidly turn your headlights on and off several times.",
            "Sound your horn and stay close to the right edge of the road while proceeding carefully."
        ],
        correctAnswer: 2,
        explanation: "If visibility is blocked on a narrow mountain road, sound your horn to warn oncoming traffic and proceed slowly while staying close to the right edge.",
    },
    {
        id: 23,
        question: "Which statement regarding railroad crossings is correct?",
        options: [
            "Not all railroad crossings are equipped with flashing red signals and gates.",
            "You must stop at a railroad crossing when directed to do so by a flagger.",
            "It is against the law to go around lowered gates at a crossing."
        ],
        correctAnswer: 1,
        explanation: "You must obey flaggers, stop signs, and active warning devices; it is illegal to drive around lowered railroad crossing gates.",
    },
    {
        id: 24,
        question: "If your vehicle has Anti-Lock Braking System (ABS) and it starts to lose traction, what should you do?",
        options: [
            "Pump the brakes.",
            "Press and hold the brake pedal firmly.",
            "Press and hold the gas pedal."
        ],
        correctAnswer: 1,
        explanation: "If your vehicle has ABS, press and hold the brake pedal firmly; the system will pump the brakes automatically to help you maintain control.",
    },
    {
        id: 25,
        question: "What do round traffic signs typically warn drivers about?",
        options: [
            "Railroad crossings ahead.",
            "School zones.",
            "No passing zones."
        ],
        correctAnswer: 0,
        explanation: "Circular signs are used for railroad crossing warnings; approach them with caution.",
    },
    {
        id: 26,
        question: "On long trips, how can you prevent drowsiness?",
        options: [
            "Turn on your car radio.",
            "Slow down.",
            "Stop at regular intervals to rest and stretch."
        ],
        correctAnswer: 2,
        explanation: "Schedule regular stops to rest, stretch, and refresh; do not rely solely on caffeine or music to prevent drowsiness.",
    },
    {
        id: 27,
        question: "How early should you signal before passing another vehicle?",
        options: [
            "Signal early enough for other drivers to know your plans in advance.",
            "Signal only just before you change lanes.",
            "Signal after you begin the lane change."
        ],
        correctAnswer: 0,
        explanation: "You should signal early enough so other drivers understand your intentions before you start the passing maneuver.",
    },
    {
        id: 28,
        question: "If an approaching train is near enough or going fast enough to be a danger, what must you do?",
        options: [
            "Slow down and proceed with caution.",
            "Not cross the tracks until the train has completely passed.",
            "Cross the tracks at your own risk."
        ],
        correctAnswer: 1,
        explanation: "If a train is close enough to be a hazard, you must not cross the tracks until the train has fully passed and it is safe.",
    },
    {
        id: 29,
        question: "If you are being tailgated and there is an open lane to your right, what should you do?",
        options: [
            "Move over to the right lane if it is safe to do so.",
            "Slow down abruptly to discourage the tailgater.",
            "Increase your speed to put more distance between you."
        ],
        correctAnswer: 0,
        explanation: "If a lane is available to the right, move over to let the tailgater pass; if not, slow gradually when safe to do so.",
    },
    {
        id: 30,
        question: "When you approach a flashing yellow traffic signal, how should you respond?",
        options: [
            "Slow down and proceed with caution.",
            "Come to a complete stop.",
            "Speed up to clear the intersection quickly."
        ],
        correctAnswer: 0,
        explanation: "A flashing yellow light means caution — slow down and proceed carefully if it is safe to do so.",
    },
    {
        id: 31,
        question: "What color pavement markings separate lanes moving in opposite directions?",
        options: [
            "Yellow",
            "White",
            "Yellow and white"
        ],
        correctAnswer: 0,
        explanation: "Yellow pavement markings are used to separate traffic moving in opposite directions.",
    },
    {
        id: 32,
        question: "When passing a slower vehicle on a two-lane, two-way road, what must you be prepared to do?",
        options: [
            "Move into the lane used by oncoming traffic to pass only when it is safe and legal.",
            "Use the shoulder to pass the vehicle.",
            "Flash your lights at oncoming traffic to warn them."
        ],
        correctAnswer: 0,
        explanation: "Passing on a two-lane, two-way road often requires entering the oncoming lane; only pass when you can do so safely and legally.",
    },
    {
        id: 33,
        question: "If you are involved in an accident, what should you do first?",
        options: [
            "Stop immediately at the scene.",
            "Help the injured if it is safe to do so.",
            "Call the police if necessary."
        ],
        correctAnswer: 0,
        explanation: "Stop at the scene, render aid if you can safely do so, call emergency services and the police, and exchange information; do not leave.",
    },
    {
        id: 34,
        question: "What is the safest way to transport small children in a vehicle?",
        options: [
            "Use proper child restraint seats appropriate for the child's size and age.",
            "Have a strong adult hold the child in their arms.",
            "Allow the child to stand in the back seat."
        ],
        correctAnswer: 0,
        explanation: "Children must be secured in appropriate child safety seats or boosters; no adult can safely hold a child during a crash.",
    },
    {
        id: 35,
        question: "What maneuvers are allowed from a center left-turn lane marked for left turns?",
        options: [
            "You may make left turns from the lane.",
            "You may make U-turns.",
            "You may pass slow-moving traffic."
        ],
        correctAnswer: 0,
        explanation: "A center left-turn lane is reserved for left turns (and for completing U-turns where permitted); it is not for passing or through traffic.",
    },
    {
        id: 36,
        question: "If traffic signals are out due to a power outage, how should you proceed at an intersection?",
        options: [
            "Treat the intersection as a four-way stop and yield accordingly.",
            "Turn on your hazard lights and go through without stopping.",
            "Park and wait for power to be restored."
        ],
        correctAnswer: 0,
        explanation: "When signals are not functioning, drivers should yield in the same order as at a four-way stop and proceed cautiously.",
    },
    {
        id: 37,
        question: "Which item is NOT a factor in determining how far it takes to stop your vehicle?",
        options: [
            "Steering ability",
            "Braking distance",
            "Reaction distance"
        ],
        correctAnswer: 0,
        explanation: "Stopping distance is determined by perception time, reaction distance, and braking distance; steering ability is not a direct factor in stopping distance calculation.",
    },
    {
        id: 38,
        question: "What can happen to a bicyclist who does not obey traffic laws?",
        options: [
            "Is in the right because bicyclists don’t have to obey traffic laws.",
            "Can be ticketed.",
            "Will always receive a warning from law enforcement."
        ],
        correctAnswer: 1,
        explanation: "Bicyclists have the same responsibilities and duties as drivers; they can be cited for violations of traffic laws.",
    },
    {
        id: 39,
        question: "If you are stopped by a police officer, how should you behave?",
        options: [
            "Unbuckle your seat belt and lower your window.",
            "Get your paperwork ready before the officer reaches your car.",
            "Remain in your vehicle with hands visible on the steering wheel and wait for the officer to approach."
        ],
        correctAnswer: 2,
        explanation: "Stay in your vehicle unless instructed otherwise, keep your hands visible (on the wheel), and wait for the officer to request your documents.",
    },
    {
        id: 40,
        question: "Be alert to motorcycles because:",
        options: [
            "Motorcyclists are less skilled drivers than other motorists.",
            "They rarely use their headlights.",
            "They are more difficult to see than cars."
        ],
        correctAnswer: 2,
        explanation: "Motorcycles are smaller and harder to see; they can be hidden in blind spots and their speed/distance are harder to judge.",
    }
]

export const idahoPermitTestFaq: { question: string; answer: string }[] = [
    {
        question: "How many questions are on the Idaho Real Estate Exam?",
        answer: "The Idaho Real Estate knowledge test has 40 questions. You need to answer at least 34 correctly (85%) to pass — a higher passing threshold than most states' 80%."
    },
    {
        question: "What score do you need to pass the Idaho permit test?",
        answer: "You need 34 out of 40 questions correct — a passing score of 85%. This is higher than most states' 80% threshold, so strong preparation is especially important. Missing 7 or more questions means you fail."
    },
    {
        question: "How many questions can you miss on the Idaho Real Estate Exam?",
        answer: "You can miss up to 6 questions on the 40-question knowledge test. Missing 7 or more means you fail and must wait 1 day before retaking."
    },
    {
        question: "Is there a time limit on the Idaho permit test?",
        answer: "No. The Idaho Real Estate does not impose a time limit on the knowledge test. Take your time with each question."
    },
    {
        question: "What is the retake policy if I fail the Idaho permit test?",
        answer: "If you fail, you must wait 1 day before retaking. Because Idaho's 85% passing threshold is higher than most states, thorough preparation before your first attempt is especially important — scoring 95%+ consistently on practice tests is a good target."
    },
    {
        question: "Can I take the Idaho permit test online?",
        answer: "No. As of 2026, all Idaho Real Estate knowledge tests must be taken in person at an Idaho Real Estate real estate license office."
    },
    {
        question: "What is the minimum age to get a real estate license in Idaho?",
        answer: "Idaho allows teens to apply for a real estate license at age 14½ — one of the youngest permit ages in the United States. After holding the permit for at least 6 months and completing 50 hours of supervised driving (10 at night), they can apply for a restricted license at age 15."
    },
    {
        question: "Why is Idaho's passing score higher than most states?",
        answer: "Idaho requires 85% correct (34 out of 40 questions) to pass the knowledge test, compared to 80% in most other states. This higher threshold reflects Idaho's commitment to ensuring aspiring agents have thorough knowledge of traffic laws before driving on Idaho's rural highways and mountain roads. Prepare to score higher than you would need in most states."
    },
]
