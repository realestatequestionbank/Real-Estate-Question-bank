import type { Question, StatePermitTestConfig } from '@/components/state-permit-test/types'

export const montanaPermitTestConfig: StatePermitTestConfig = {
    stateName: 'Montana',
    stateCode: 'MT',
    departmentName: 'Montana MVD',
    departmentAbbr: 'MVD',
    realQuestionCount: 33,
    realPassCount: 27,
    passPercent: 82,
    retakePolicy: 'Can retake after 1 day if failed',
    mainPageUrl: '/montana-mvd-permit-test',
    pageUrl: '/montana-mvd-permit-test-33-questions',
    stateGuideUrl: '/state-guides/montana',
    handbookUrl: '/handbooks/montana',
    year: 2026,
}

export const montanaPermitTestQuestions: Question[] = [
    {
        id: 1,
        question: "Emergency vehicles using sirens, horns, and/or flashing lights:",
        options: [
            "Have the right-of-way and drivers must yield to them.",
            "May follow each other and you should proceed only when sure the way is clear.",
            "May use a loudspeaker to give instructions."
        ],
        correctAnswer: 0,
        explanation: "Yield the right-of-way to emergency vehicles using sirens or lights; obey instructions and ensure the path is clear before proceeding.",
    },
    {
        id: 2,
        question: "What shape/color represents the slow-moving vehicle emblem?",
        options: [
            "Reflective orange triangle (commonly shown on a yellow/orange background)",
            "Rectangular red sign",
            "Circular green sign",
            "Diamond-shaped yellow sign"
        ],
        correctAnswer: 0,
        explanation: "The slow-moving vehicle emblem is a reflective orange (sometimes bordered) triangle indicating a vehicle likely traveling 25 mph or less.",
    },
    {
        id: 3,
        question: "Which are ways alcoholic beverages can affect you?",
        options: [
            "They slow reaction time, impair thinking, and give a false sense of confidence.",
            "They always improve alertness.",
            "They only cause sleepiness but not coordination problems.",
            "They only affect people who are under 21."
        ],
        correctAnswer: 0,
        explanation: "Alcohol slows reaction time, impairs judgment and thinking, and can produce false confidence and poor coordination.",
    },
    {
        id: 4,
        question: "Which of the following about railroad crossings is true?",
        options: [
            "It is illegal to drive around lowered gates.",
            "All crossings have flashing signals and gates.",
            "You never need to stop if no train is visible."
        ],
        correctAnswer: 0,
        explanation: "Driving around lowered gates is unlawful. Not all crossings have gates or signals; always obey signs, flags, and warning devices.",
    },
    {
        id: 5,
        question: "If you are involved in an accident as a driver, you should:",
        options: [
            "Exchange information such as names, addresses, license and insurance details.",
            "Refuse to share any details.",
            "Leave immediately and call later.",
            "Only give your name without other details."
        ],
        correctAnswer: 0,
        explanation: "Exchange full information with other drivers, including names, addresses, license numbers, vehicle data, and insurance details.",
    },
    {
        id: 6,
        question: "Turn signal lights on vehicles manufactured after 1955 must be visible for at least how many feet?",
        options: [
            "250 feet",
            "300 feet",
            "500 feet"
        ],
        correctAnswer: 1,
        explanation: "Required front and rear turn signal lamps must be visible for at least 300 feet in normal daylight conditions.",
    },
    {
        id: 7,
        question: "When the centerline shows a solid yellow line next to a broken yellow line with the broken line next to your lane, when may you pass?",
        options: [
            "Only in an emergency.",
            "If you are on an expressway.",
            "If traffic is clear"
        ],
        correctAnswer: 2,
        explanation: "When the broken line is next to your lane, you may cross to pass if no oncoming traffic is present and it is safe to do so.",
    },
    {
        id: 8,
        question: "A single broken white line between lanes indicates what?",
        options: [
            "Lanes are moving in the same direction and drivers may change lanes when safe.",
            "Lanes are moving in opposite directions and drivers may pass when safe.",
            "Lanes are moving in the same direction and drivers are not permitted to pass"
        ],
        correctAnswer: 0,
        explanation: "Broken white lines separate lanes moving in the same direction and may be crossed when it is safe to change lanes.",
    },
    {
        id: 9,
        question: "What must you do when you encounter a flashing red traffic light at an intersection?",
        options: [
            "Come to a complete stop, then proceed when the way is clear.",
            "Slow down and proceed without stopping",
            "Wait until a green light appears",
            "Yield only to pedestrians"
        ],
        correctAnswer: 0,
        explanation: "A flashing red light is equivalent to a stop sign: stop fully, then go when safe.",
    },
    {
        id: 10,
        question: "When weather changes suddenly, what should you do?",
        options: [
            "Be particularly aware of vehicles coming up behind you in inclement weather.",
            "A sudden change in weather calls for a change in driving.",
            "You should slow down when driving in rain and fog."
        ],
        correctAnswer: 1,
        explanation: "If the weather changes suddenly, adjust your driving to match conditions — slow down in rain or fog and be aware of vehicles behind you that may not be slowing.",
    },
    {
        id: 11,
        question: "What does a solid red arrow on a traffic signal mean?",
        options: [
            "Stop and do not turn in the direction of the arrow until it changes.",
            "The arrow is decorative only and may be ignored",
            "Proceed with caution and yield to pedestrians",
            "You may turn after yielding to oncoming traffic"
        ],
        correctAnswer: 0,
        explanation: "A solid red arrow indicates traffic in that lane must stop and may not turn in the arrow's direction until it changes.",
    },
    {
        id: 12,
        question: "If a police officer stops your vehicle, you should:",
        options: [
            "Get your paperwork ready before the officer reaches your car.",
            "Stay in your vehicle with your hands on the steering wheel and wait for the officer to approach you.",
            "Unbuckle your seat belt and lower your window."
        ],
        correctAnswer: 1,
        explanation: "Remain in your vehicle with hands visible on the wheel and wait for the officer’s instructions; only retrieve documents when asked.",
    },
    {
        id: 13,
        question: "When parking uphill next to a curb, how should you position your front wheels?",
        options: [
            "Turn the front wheels away from the curb.",
            "Turn the front wheels toward the curb.",
            "Keep the front wheels straight and set the parking brake.",
            "Leave the wheels in neutral"
        ],
        correctAnswer: 0,
        explanation: "When parked facing uphill with a curb, turn wheels away from the curb so if brakes fail the vehicle rolls into the curb rather than into traffic.",
    },
    {
        id: 14,
        question: "At a railroad crossing with only a crossbuck and no gates or flashing lights, how should you proceed?",
        options: [
            "Approach with extreme caution and only cross when you are sure no train is coming.",
            "Turn down the radio to try to hear a train.",
            "Only proceed if a flagger clears you to go."
        ],
        correctAnswer: 0,
        explanation: "Always approach crossings cautiously and do not cross until you have determined no train is coming; obey any flagger if present.",
    },
    {
        id: 15,
        question: "A person walking with a white cane or guide dog is most likely:",
        options: [
            "Blind or visually impaired.",
            "Deaf.",
            "Part of a traffic study.",
            "Directing traffic."
        ],
        correctAnswer: 0,
        explanation: "Drivers must always yield the right-of-way to a pedestrian who is using a white cane or guide dog.",
    },
    {
        id: 16,
        question: "When turning left from a two-way street onto a one-way street, where should your vehicle end up?",
        options: [
            "In the left lane of the one-way street",
            "In the center of the roadway",
            "In the right lane of the one-way street",
            "Across two lanes"
        ],
        correctAnswer: 0,
        explanation: "When turning left onto a one-way street from a two-way street, complete the turn into the leftmost lane available on the one-way street.",
    },
    {
        id: 17,
        question: "Which is the most common cause of traffic crashes?",
        options: [
            "Bad weather",
            "Human error",
            "New drivers"
        ],
        correctAnswer: 1,
        explanation: "Most crashes are caused by human error — mistakes like failing to see other vehicles, misjudging distance, or making poor decisions.",
    },
    {
        id: 18,
        question: "You should always signal when:",
        options: [
            "Changing lanes.",
            "Pulling into or out of a parking space.",
            "Pulling into traffic from an alley or parking area.",
            "All of the above"
        ],
        correctAnswer: 3,
        explanation: "Use turn signals to indicate your intentions whenever changing lanes, entering traffic, or parking so other road users can respond.",
    },
    {
        id: 19,
        question: "A shared center lane on a two-way road is reserved for:",
        options: [
            "Making left turns.",
            "Passing slow-moving traffic.",
            "Through traffic."
        ],
        correctAnswer: 0,
        explanation: "Shared center lanes are for left turns (and U-turns where permitted), not for passing or through traffic.",
    },
    {
        id: 20,
        question: "If other drivers are acting angrily, what should you do?",
        options: [
            "React with hand gestures.",
            "Distance yourself from the situation and avoid eye contact.",
            "Make eye contact to defuse the situation."
        ],
        correctAnswer: 1,
        explanation: "Mentally and physically distance yourself: avoid eye contact or gestures, slow down or change lanes, and remove yourself safely from the situation.",
    },
    {
        id: 21,
        question: "To prevent hydroplaning, you should:",
        options: [
            "Reduce your speed when driving in the rain.",
            "Ensure that your tires are properly inflated.",
            "Ensure that your tires have good tread depth.",
            "All of the above"
        ],
        correctAnswer: 3,
        explanation: "Prevent hydroplaning by keeping tires in good condition and reducing speed in wet conditions; hydroplaning is most likely at higher speeds.",
    },
    {
        id: 22,
        question: "If an oncoming vehicle fails to dim high beams, you should look toward which part of the road?",
        options: [
            "The right side of the road.",
            "The center of the road.",
            "Either side equally.",
            "The left shoulder."
        ],
        correctAnswer: 0,
        explanation: "Glance toward the right edge of the roadway to avoid being blinded by high beams while maintaining your lane position.",
    },
    {
        id: 23,
        question: "If an aggressive driver cuts you off, what is the best response?",
        options: [
            "Flash your lights to let them know they're wrong.",
            "Call the police immediately.",
            "Stay calm and move out of the aggressive driver's way."
        ],
        correctAnswer: 2,
        explanation: "Avoid escalation by staying calm and getting out of the aggressive driver's path; do not engage or retaliate.",
    },
    {
        id: 24,
        question: "A yellow and black diamond-shaped sign serves to:",
        options: [
            "Warn you about conditions on or near the road.",
            "Help direct you to cities and towns ahead.",
            "Inform you about traffic laws and regulations."
        ],
        correctAnswer: 0,
        explanation: "Diamond-shaped yellow-and-black signs are warning signs that advise of conditions or hazards ahead on the roadway.",
    },
    {
        id: 25,
        question: "Which will help someone overcome the influence of alcohol?",
        options: [
            "Fresh air",
            "Hot coffee",
            "Tomato juice and lime",
            "Only the passage of time"
        ],
        correctAnswer: 3,
        explanation: "Only time allows the body to metabolize alcohol; coffee, fresh air, or other remedies do not reduce intoxication.",
    },
    {
        id: 26,
        question: "Which factors affect braking distance?",
        options: [
            "The speed your vehicle is traveling.",
            "The condition of your brakes and tires.",
            "The condition of the pavement.",
            "All of the above"
        ],
        correctAnswer: 3,
        explanation: "Braking distance is influenced by speed, vehicle maintenance (brakes and tires), and road surface conditions.",
    },
    {
        id: 27,
        question: "If you see an animal on the road, what is the correct action?",
        options: [
            "Pass the animal as closely as possible.",
            "No special action is required.",
            "Proceed cautiously and pass slowly to avoid startling it."
        ],
        correctAnswer: 2,
        explanation: "Slow down and pass animals carefully to avoid frightening them and causing unpredictable movement that could cause a crash.",
    },
    {
        id: 28,
        question: "A regulatory sign with a red circle and diagonal slash most commonly indicates:",
        options: [
            "That drivers should come to a complete stop.",
            "That an action is forbidden.",
            "That some drivers should yield to others."
        ],
        correctAnswer: 1,
        explanation: "A red circle with a slash over a black symbol indicates the action shown is prohibited by law.",
    },
    {
        id: 29,
        question: "If you are in the left lane and want to move into the right lane, you should:",
        options: [
            "Check your mirrors, signal, and look over your right shoulder for vehicles before changing lanes.",
            "Look over your left shoulder only.",
            "Signal and immediately move right without checking mirrors.",
            "Honk and move over quickly."
        ],
        correctAnswer: 0,
        explanation: "When changing lanes to the right, check mirrors, signal, and glance over your right shoulder to confirm the blind spot is clear.",
    },
    {
        id: 30,
        question: "When approaching an intersection with a steady green light, you should:",
        options: [
            "Continue driving, unless there are vehicles or pedestrians already in the intersection.",
            "Treat the intersection like a four-way stop.",
            "Stop if a police officer is nearby."
        ],
        correctAnswer: 0,
        explanation: "You may go on green but must yield to pedestrians and vehicles still in the intersection and be prepared to stop if conditions change.",
    },
    {
        id: 31,
        question: "When two vehicles enter an intersection from different highways at the same time, which vehicle must yield?",
        options: [
            "The vehicle on the left must yield to the vehicle on the right.",
            "Either one may proceed at will",
            "The vehicle on the right must yield",
            "The faster vehicle goes first"
        ],
        correctAnswer: 0,
        explanation: "When two vehicles arrive simultaneously, the driver on the left yields to the driver on the right.",
    },
    {
        id: 32,
        question: "Why must you be cautious when passing a bicycle?",
        options: [
            "The bicyclist may swerve unexpectedly or obstacles may force them into traffic.",
            "Bicycles always have the right-of-way in every situation.",
            "Oncoming traffic cannot see you if you pass a bicycle",
            "Bicyclists are required to hug the curb at all times"
        ],
        correctAnswer: 0,
        explanation: "Cyclists may need to swerve to avoid debris or hazards; give them space and pass carefully.",
    },
    {
        id: 33,
        question: "If borrowing an unfamiliar vehicle, what should you do before driving?",
        options: [
            "Disregard obvious defects to avoid embarrassment.",
            "Assume all vehicles work the same and just start driving.",
            "Familiarize yourself with the controls and check for defects before driving."
        ],
        correctAnswer: 2,
        explanation: "Before driving an unfamiliar car, locate and test signals, lights, wipers, brakes, gear selector, and horn; correct any defects first.",
    }
]

export const montanaPermitTestFaq: { question: string; answer: string }[] = [
    {
        question: "How many questions are on the Montana MVD permit test?",
        answer: "The Montana Motor Vehicle Division (MVD) permit test has 33 multiple-choice questions. You need to answer at least 27 correctly (82%) to pass."
    },
    {
        question: "What score do you need to pass the Montana MVD permit test?",
        answer: "You need 27 out of 33 questions correct — a passing score of 82%. Missing 7 or more questions means you fail and must wait 1 day before retaking."
    },
    {
        question: "How many questions can you miss on the Montana permit test?",
        answer: "You can miss up to 6 questions on the 33-question knowledge test. Missing 7 or more means you fail."
    },
    {
        question: "Is there a time limit on the Montana MVD permit test?",
        answer: "No. The Montana MVD does not impose a strict time limit on the knowledge test. Take your time on each question, but do not overthink your answers."
    },
    {
        question: "What is the retake policy if I fail the Montana permit test?",
        answer: "If you fail, you must wait 1 day before retaking. Use that time to review the areas where you struggled. Consistently scoring 90%+ on practice tests is the best way to pass on the first try."
    },
    {
        question: "Can I take the Montana permit test online?",
        answer: "No. As of 2026, all Montana MVD knowledge tests must be taken in person at a Montana Motor Vehicle Division office."
    },
    {
        question: "What is the minimum age to get a real estate license in Montana?",
        answer: "Montana allows teens to apply for a real estate license at age 14 years and 9 months (14¾). This is one of the younger permit ages in the country, reflecting Montana's rural driving needs."
    },
    {
        question: "What should Montana drivers know about Open Range roads?",
        answer: "In Open Range areas of Montana, livestock may legally be on public roads and drivers are responsible for avoiding collisions with animals. Slow down when you see 'Open Range' signs, especially at dawn, dusk, and night when animals are harder to spot."
    },
]
