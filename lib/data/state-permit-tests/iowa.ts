import type { Question, StatePermitTestConfig } from '@/components/state-permit-test/types'

export const iowaPermitTestConfig: StatePermitTestConfig = {
    stateName: 'Iowa',
    stateCode: 'IA',
    departmentName: 'Iowa DOT',
    departmentAbbr: 'DOT',
    realQuestionCount: 35,
    realPassCount: 28,
    passPercent: 80,
    retakePolicy: 'Can retake after 1 day if failed',
    mainPageUrl: '/iowa-dot-permit-test',
    pageUrl: '/iowa-dot-permit-test-35-questions',
    stateGuideUrl: '/state-guides/iowa',
    handbookUrl: '/handbooks/iowa',
    year: 2026,
}

export const iowaPermitTestQuestions: Question[] = [
    {
        id: 1,
        question: "When passing, when should you move back into the right lane?",
        options: [
            "When you can see both headlights of the passed vehicle in your rearview mirror.",
            "When you are one vehicle length ahead.",
            "After a fixed three-second wait.",
            "When the driver waves you back."
        ],
        correctAnswer: 0,
        explanation: "Return to your lane only after you can see the passed vehicle's headlights in your rearview mirror and are sure you have enough room.",
    },
    {
        id: 2,
        question: "When turning left at an intersection, you must:",
        options: [
            "Always yield to oncoming traffic and pedestrians.",
            "Expect oncoming traffic and pedestrians to yield to you.",
            "Never yield to anyone.",
            "Only yield to vehicles, not pedestrians."
        ],
        correctAnswer: 0,
        explanation: "Left-turning drivers must yield to oncoming traffic traveling straight and to pedestrians.",
    },
    {
        id: 3,
        question: "Before passing another vehicle, you should signal when?",
        options: [
            "After you begin to pass.",
            "Just before changing lanes so others see your intent.",
            "Only if a police officer is present.",
            "Only after you complete the pass."
        ],
        correctAnswer: 1,
        explanation: "Signal early enough before passing so other drivers understand your intentions in advance.",
    },
    {
        id: 4,
        question: "What is defensive driving?",
        options: [
            "Identifying dangerous driving situations and taking action to avoid accidents.",
            "Defending yourself against poor drivers by getting ahead of them in traffic.",
            "Following the vehicle ahead of you at a close distance."
        ],
        correctAnswer: 0,
        explanation: "Defensive driving means recognizing hazards and taking proactive steps to avoid accidents.",
    },
    {
        id: 5,
        question: "Should drivers avoid driving beside large vehicles for long periods?",
        options: [
            "True—drivers should be cautious and avoid lingering beside large vehicles.",
            "False—it's fine to travel side-by-side with large vehicles.",
            "Only true on highways",
            "Only true at night"
        ],
        correctAnswer: 0,
        explanation: "Large vehicles have extensive blind spots; avoid driving beside them for extended periods and either drop back or move ahead.",
    },
    {
        id: 6,
        question: "When preparing to exit an interstate, when is it appropriate to reduce your speed?",
        options: [
            "Immediately upon entering the deceleration lane.",
            "About halfway through the deceleration lane.",
            "Before reaching the deceleration lane."
        ],
        correctAnswer: 0,
        explanation: "Maintain highway speed until you reach the deceleration lane; then reduce speed to the posted advisory speed for the ramp.",
    },
    {
        id: 7,
        question: "When the weather is poor, what should drivers do to following distance?",
        options: [
            "Increase their following distance.",
            "Decrease their following distance.",
            "Increase their speed to reach destination more quickly."
        ],
        correctAnswer: 0,
        explanation: "In bad weather, increase following distance to allow for longer stopping times.",
    },
    {
        id: 8,
        question: "What practice best ensures safety when backing your vehicle?",
        options: [
            "Honk the horn before reversing.",
            "Walk behind the vehicle and check the area before getting in to back up.",
            "Rely only on your rearview mirrors.",
            "Back quickly to save time."
        ],
        correctAnswer: 1,
        explanation: "Before backing, walk to the rear of the vehicle to check for children or objects; backing requires extra caution.",
    },
    {
        id: 9,
        question: "What does a yellow left-turn arrow indicate?",
        options: [
            "Drivers should prepare to yield to oncoming traffic.",
            "The protected left turn is about to end.",
            "Both of the above."
        ],
        correctAnswer: 2,
        explanation: "A yellow left-turn arrow warns that the protected turn is ending and drivers must prepare to yield to oncoming traffic.",
    },
    {
        id: 10,
        question: "If you are very angry after an argument, what is the safest choice?",
        options: [
            "Take a few minutes to calm down before driving.",
            "Play loud music to distract yourself.",
            "Drive on the interstate to vent frustration."
        ],
        correctAnswer: 0,
        explanation: "Strong emotions reduce driving ability; pause to cool off before getting behind the wheel.",
    },
    {
        id: 11,
        question: "Which statement about large trucks is correct?",
        options: [
            "They take longer to stop than passenger vehicles.",
            "They are more maneuverable than passenger vehicles.",
            "They all have air brakes that allow them to stop quickly."
        ],
        correctAnswer: 0,
        explanation: "Large trucks require much longer stopping distances than passenger vehicles because of their size and weight.",
    },
    {
        id: 12,
        question: "Why must you use extra caution near a pedestrian carrying a white cane?",
        options: [
            "They may be blind or have limited vision and may not see traffic.",
            "They are likely to move quickly out of the way.",
            "They are signaling you to proceed.",
            "They are traffic officers."
        ],
        correctAnswer: 0,
        explanation: "Pedestrians with white canes or guide dogs are blind or visually impaired; yield the right-of-way and be prepared to stop.",
    },
    {
        id: 13,
        question: "Should motorists maintain a safe distance when driving near cyclists?",
        options: [
            "True",
            "False"
        ],
        correctAnswer: 0,
        explanation: "Drivers must give cyclists sufficient operating space and be especially careful when passing or turning near them.",
    },
    {
        id: 14,
        question: "When a pedestrian carrying a white cane or using a guide dog is crossing, what must drivers do?",
        options: [
            "Yield the right-of-way to the pedestrian.",
            "Wave them across the street.",
            "Proceed because pedestrians must yield.",
            "Shout to tell them where to cross."
        ],
        correctAnswer: 0,
        explanation: "Drivers must always yield to blind or partially blind pedestrians using a white cane or guide dog and proceed only when it is safe.",
    },
    {
        id: 15,
        question: "What is the effect of taking drugs along with alcohol?",
        options: [
            "It decreases the risk of causing a crash.",
            "It has no additional effect.",
            "It increases the risk of a crash by intensifying impairment.",
            "It counters alcohol impairment."
        ],
        correctAnswer: 2,
        explanation: "Combining alcohol with drugs (prescription, OTC, or illegal) increases impairment and crash risk.",
    },
    {
        id: 16,
        question: "To avoid becoming an aggressive driver, you should:",
        options: [
            "Relax, focus on driving, and avoid taking other drivers' actions personally.",
            "Drive above the posted speed limit to get ahead.",
            "Tailgate the vehicle in front to encourage faster driving.",
            "Constantly honk to express frustration."
        ],
        correctAnswer: 0,
        explanation: "Concentrate on driving, be realistic about travel time, obey speed limits, and be forgiving of other drivers to prevent aggression.",
    },
    {
        id: 17,
        question: "How do stopping distances and crash severity change with vehicle speed?",
        options: [
            "They decrease as speed increases.",
            "They remain unchanged by speed.",
            "They increase as vehicle speed increases.",
            "They only depend on vehicle size."
        ],
        correctAnswer: 2,
        explanation: "Higher speeds result in longer stopping distances and more severe crashes.",
    },
    {
        id: 18,
        question: "Which light indicates you should slow down and proceed with caution at an intersection?",
        options: [
            "A flashing yellow light",
            "A flashing red light",
            "A solid yellow light"
        ],
        correctAnswer: 0,
        explanation: "A flashing yellow light means slow down and proceed with caution; drivers should be prepared to stop if necessary.",
    },
    {
        id: 19,
        question: "If your power steering fails while driving, you should:",
        options: [
            "Work harder to steer, reduce speed, and drive to a safe area to stop.",
            "Turn off your ignition immediately.",
            "Honk and stop abruptly in the travel lane."
        ],
        correctAnswer: 0,
        explanation: "Power steering loss requires stronger steering effort; slow down and pull off the road safely to stop.",
    },
    {
        id: 20,
        question: "When being tailgated, what should you do?",
        options: [
            "Create extra space in front of your vehicle and avoid sudden braking.",
            "Increase speed to put distance between you and the tailgater.",
            "Brake suddenly to teach the tailgater a lesson."
        ],
        correctAnswer: 0,
        explanation: "If someone is following too closely, increase the space ahead of you by changing lanes or slowing gradually to avoid sudden stops.",
    },
    {
        id: 21,
        question: "What is the purpose of rumble strips?",
        options: [
            "They alert drivers to potential tire problems.",
            "They create vibrations and sound to warn inattentive drivers that they are leaving the travel lane.",
            "They test a vehicle's shock absorbers."
        ],
        correctAnswer: 1,
        explanation: "Rumble strips produce sound and vibration to alert drowsy or inattentive drivers that they are drifting out of their lane or approaching a hazard.",
    },
    {
        id: 22,
        question: "If you continually pass other cars on a two-lane road by driving faster than surrounding traffic, you will:",
        options: [
            "Get to your destination much faster and more safely.",
            "Increase your chances of a collision.",
            "Help prevent traffic congestion.",
            "Reduce your risk of a ticket."
        ],
        correctAnswer: 1,
        explanation: "Continuously passing on two-lane roads raises your collision risk each time you pass.",
    },
    {
        id: 23,
        question: "What should you remember when sharing the road with large trucks?",
        options: [
            "Trucks require longer stopping distances than smaller vehicles.",
            "They can stop faster than cars.",
            "They have a smaller turning radius.",
            "They have better visibility of nearby cars."
        ],
        correctAnswer: 0,
        explanation: "Because of their size and weight, trucks need more distance to stop and have larger blind spots; be patient and give them space.",
    },
    {
        id: 24,
        question: "If your accelerator sticks and the vehicle keeps accelerating, what should you do?",
        options: [
            "Turn on your four-way flashers.",
            "Blow your horn.",
            "Slam on your brakes."
        ],
        correctAnswer: 0,
        explanation: "If the accelerator sticks, turn off the ignition carefully (avoid locking the steering), apply brakes, and move off the road to a safe location. Use four-way flashers to warn others.",
    },
    {
        id: 25,
        question: "When dealing with pedestrians, a driver must:",
        options: [
            "Yield the right-of-way only when the pedestrian is in a crosswalk.",
            "Always yield the right-of-way to pedestrians, even if the pedestrian is wrong.",
            "Make sure the pedestrian expects the vehicle before proceeding.",
            "Honk to warn pedestrians to clear the road."
        ],
        correctAnswer: 1,
        explanation: "You must do everything possible to avoid striking a pedestrian and yield right-of-way to pedestrians, even if they are crossing improperly.",
    },
    {
        id: 26,
        question: "If you drive more slowly than the flow of traffic, what will most likely happen?",
        options: [
            "Interfere with traffic and receive a ticket.",
            "Improve traffic flow.",
            "Demonstrate defensive driving techniques."
        ],
        correctAnswer: 0,
        explanation: "Driving significantly slower than normal traffic can impede others and may lead to citations; match the flow unless unsafe.",
    },
    {
        id: 27,
        question: "If someone drives much slower than the speed limit and blocks traffic, what should they do?",
        options: [
            "Always has the right-of-way.",
            "Is a very safe driver.",
            "Pull off the road and let following vehicles pass."
        ],
        correctAnswer: 2,
        explanation: "If driving so slowly that traffic backs up on a two-lane, two-way road, you must pull off and let others pass when safe.",
    },
    {
        id: 28,
        question: "Which is not a factor in stopping distance?",
        options: [
            "Steering ability.",
            "Braking distance.",
            "Reaction distance.",
            "Perception time."
        ],
        correctAnswer: 0,
        explanation: "Stopping distance depends on perception time, reaction distance, and braking distance; steering ability is not a primary factor in the calculation.",
    },
    {
        id: 29,
        question: "When children are playing in an area you are driving through, you should expect them to:",
        options: [
            "Possibly run into the street without looking.",
            "Stop at the curb before crossing.",
            "Know when it is safe to cross."
        ],
        correctAnswer: 0,
        explanation: "Children may act unpredictably and run into the roadway; reduce speed and be prepared to stop.",
    },
    {
        id: 30,
        question: "What type of sign warns drivers about hazardous conditions ahead?",
        options: [
            "Warning signs (usually yellow with black markings).",
            "Regulatory signs (white with black markings).",
            "Information signs (green or blue).",
            "Guide signs (brown)."
        ],
        correctAnswer: 0,
        explanation: "Warning signs alert drivers to potentially hazardous conditions ahead; obey them to reduce accident risk.",
    },
    {
        id: 31,
        question: "When exiting a highway, when should you start to slow down?",
        options: [
            "Once you have moved into the exit lane.",
            "On the main road, just before the exit lane.",
            "Once you see a toll booth."
        ],
        correctAnswer: 0,
        explanation: "Get into the exit lane in advance but do not begin to slow down until after you have entered the exit lane.",
    },
    {
        id: 32,
        question: "Approaching a stopped emergency vehicle with flashing lights, what is required of you?",
        options: [
            "Move over a lane if possible, or slow to a safe speed below the posted limit if you cannot.",
            "Maintain your speed and pass closely.",
            "Stop in your lane directly next to the emergency vehicle.",
            "Turn around and find another route."
        ],
        correctAnswer: 0,
        explanation: "When approaching a stopped emergency or roadside assistance vehicle with flashing lights, change lanes away if possible; otherwise slow down and proceed with care.",
    },
    {
        id: 33,
        question: "If your vehicle starts to skid, which way should you steer?",
        options: [
            "Turn your steering wheel into the direction of the skid.",
            "Turn your steering wheel into traffic.",
            "Overcorrect."
        ],
        correctAnswer: 0,
        explanation: "If your vehicle skids, stay calm and steer in the direction of the skid until you regain control.",
    },
    {
        id: 34,
        question: "Why is night driving uniquely challenging?",
        options: [
            "Speed limits are higher at night.",
            "Fewer cars on the road make it riskier.",
            "Distance and speed are harder to judge in the dark.",
            "Traffic signals are less visible for pedestrians only."
        ],
        correctAnswer: 2,
        explanation: "Reduced visibility at night makes it difficult to judge distance and speed; you can see only as far as your headlights allow.",
    },
    {
        id: 35,
        question: "A double solid yellow centerline means:",
        options: [
            "No traffic from either direction may pass.",
            "Only the lane with a broken line may pass.",
            "Passing is allowed for traffic in both directions."
        ],
        correctAnswer: 0,
        explanation: "Double solid yellow lines separate opposing traffic and indicate passing is prohibited for vehicles in both directions.",
    }
]

export const iowaPermitTestFaq: { question: string; answer: string }[] = [
    {
        question: "How many questions are on the Iowa DOT permit test?",
        answer: "The Iowa Department of Transportation (DOT) knowledge test has 35 multiple-choice questions. You need to answer at least 28 correctly (80%) to pass and receive your real estate license."
    },
    {
        question: "What score do you need to pass the Iowa permit test?",
        answer: "You need 28 out of 35 questions correct — a passing score of 80%. You can miss up to 7 questions. Missing 8 or more means you fail and must retake the test."
    },
    {
        question: "How many questions can you miss on the Iowa DOT knowledge test?",
        answer: "You can miss up to 7 questions on the 35-question Iowa DOT test. Missing 8 or more results in a failing score and you must wait at least 1 day before retaking."
    },
    {
        question: "Is there a time limit on the Iowa permit test?",
        answer: "Iowa does not impose a strict time limit on the knowledge test. Read carefully and take your time — accuracy is more important than speed."
    },
    {
        question: "What happens if I fail the Iowa DOT permit test?",
        answer: "If you fail, you must wait 1 day before retaking the test. Review the Iowa Driver's Manual focusing on the sections where you missed questions. Practicing until you consistently score above 85% is the best preparation."
    },
    {
        question: "Can I take the Iowa permit test online?",
        answer: "As of 2026, Iowa's knowledge test must be taken in person at a DOT-affiliated real estate license station or county treasurer's office. Check the Iowa DOT website for locations near you."
    },
    {
        question: "What is the minimum age to get a real estate license in Iowa?",
        answer: "Iowa allows teens as young as 14 to apply for a real estate license — one of the youngest permit ages in the country. Permit holders may drive only when supervised by a licensed driver age 21 or older seated in the front passenger seat."
    },
    {
        question: "What supervised driving hours are required in Iowa before advancing to a Restricted Minor's License?",
        answer: "Iowa requires 20 hours of supervised driving practice, with at least 2 hours driven at night. These hours must be logged and certified by a parent or guardian before you can advance to a Restricted Minor's License (RML)."
    },
]
