import type { Question, StatePermitTestConfig } from '@/components/state-permit-test/types'

export const georgiaPermitTestConfig: StatePermitTestConfig = {
    stateName: 'Georgia',
    stateCode: 'GA',
    departmentName: 'Georgia DDS',
    departmentAbbr: 'DDS',
    realQuestionCount: 40,
    realPassCount: 30,
    passPercent: 75,
    retakePolicy: 'Can retake after 1 day if failed',
    mainPageUrl: '/georgia-dds-permit-test',
    pageUrl: '/georgia-dds-permit-test-40-questions',
    stateGuideUrl: '/state-guides/georgia',
    handbookUrl: '/handbooks/georgia',
    year: 2026,
}

export const georgiaPermitTestQuestions: Question[] = [
    {
        id: 1,
        question: "Before entering a curve you should:",
        options: [
            "Accelerate quickly.",
            "Activate your turn signal.",
            "Reduce your speed.",
            "Brake hard in the curve."
        ],
        correctAnswer: 2,
        explanation: "Reduce your speed before you enter a curve so you can steer smoothly and keep traction. Braking hard while already in the curve can cause your tires to lose grip and may lead to skidding or loss of control.",
    },
    {
        id: 2,
        question: "Broken yellow pavement markings are used to:",
        options: [
            "Separate lanes of traffic moving in opposite directions where passing is allowed.",
            "Mark the right edge of the roadway.",
            "Indicate no passing zones.",
            "Separate lanes of traffic moving in the same direction."
        ],
        correctAnswer: 0,
        explanation: "Broken yellow lines separate traffic moving in opposite directions and show that passing is allowed when it is safe and the way ahead is clear. Solid yellow lines, or solid with broken, are used to mark no-passing zones.",
    },
    {
        id: 3,
        question: "In dense fog you should slow down and use which lights?",
        options: [
            "Parking lights only.",
            "High beam headlights.",
            "Low beam headlights.",
            "Emergency flashers only."
        ],
        correctAnswer: 2,
        explanation: "In dense fog, slow down and use low beam headlights. Low beams aim light down toward the road and reduce glare. High beams reflect off the fog back into your eyes, making it harder to see.",
    },
    {
        id: 4,
        question: "When following a large truck, you should:",
        options: [
            "Stay farther behind than you would a passenger vehicle.",
            "Attempt to stay directly beside the truck.",
            "Keep no more than one car length behind.",
            "Follow more closely because the truck blocks your view."
        ],
        correctAnswer: 0,
        explanation: "When following a large truck, leave extra space. Trucks block your view of the road ahead and need more distance to stop. Staying farther back improves your visibility and gives you more time to react if the truck slows or stops.",
    },
    {
        id: 5,
        question: "If you face a green signal but pedestrians remain in the intersection, you must:",
        options: [
            "Proceed only if turning right.",
            "Wave the pedestrians on and continue.",
            "Proceed because you have the right-of-way.",
            "Yield to the pedestrians."
        ],
        correctAnswer: 3,
        explanation: "Even with a green light, you must yield to pedestrians who are already in the intersection or crosswalk. Do not move until they have safely cleared your path, including when you are turning on a steady green.",
    },
    {
        id: 6,
        question: "If an oncoming driver fails to dim their headlights, where should you look?",
        options: [
            "Look toward the center of the roadway.",
            "Toward the right side of the road.",
            "Look straight ahead."
        ],
        correctAnswer: 1,
        explanation: "When an oncoming driver does not dim their high beams, you should briefly glance toward the right edge of your lane or the right side of the road. This reduces glare, helps you avoid being blinded, and still lets you use the road edge and lane markings as a guide to stay in your lane.",
    },
    {
        id: 7,
        question: "What is the safest action if you find the roadway ahead flooded?",
        options: [
            "Drive only in the center of the roadway.",
            "Slam on the brakes.",
            "Do not drive through the flooded area; turn around and find another route."
        ],
        correctAnswer: 2,
        explanation: "If the road ahead is flooded, you should not drive through the water. Even a small depth can hide potholes, debris, or washed‑out pavement, and as little as a foot of moving water can sweep a vehicle away. The safest choice is to turn around and find another route.",
    },
    {
        id: 8,
        question: "Under Georgia's TADRA program, a Class D provisional license holder is prohibited from driving between which hours?",
        options: [
            "11:00 p.m. and 5:00 a.m.",
            "12:00 midnight and 5:00 a.m.",
            "12:00 midnight and 6:00 a.m.",
            "10:00 p.m. and 6:00 a.m."
        ],
        correctAnswer: 1,
        explanation: "Georgia Class D provisional license holders are strictly prohibited from driving between the hours of 12:00 midnight and 5:00 a.m. There are no exceptions for work or school activities.",
    },
    {
        id: 9,
        question: "Your vehicle can begin to hydroplane at speeds as low as approximately:",
        options: [
            "25 miles per hour.",
            "35 miles per hour.",
            "55 miles per hour.",
            "45 miles per hour."
        ],
        correctAnswer: 1,
        explanation: "Hydroplaning happens when your tires ride on top of water instead of gripping the road. This can begin around 35 mph on wet roads, especially with standing water or worn tires. Reducing speed in rain and driving with good tires helps maintain traction and control.",
    },
    {
        id: 10,
        question: "When you approach a flashing red traffic light, you must:",
        options: [
            "Only stop if other vehicles are present.",
            "Assume it will turn green soon and proceed.",
            "Treat the intersection as if controlled by a stop sign.",
            "Turn around and find another route."
        ],
        correctAnswer: 2,
        explanation: "A flashing red light means the same as a stop sign. You must come to a complete stop, check for traffic and pedestrians, and proceed only when it is safe and after yielding to anyone with the right‑of‑way.",
    },
    {
        id: 11,
        question: "What does a steady green traffic light at an intersection allow you to do?",
        options: [
            "You may continue through the intersection at a safe and reasonable speed, if it is clear to do so.",
            "Increase your speed.",
            "Adjust your mirrors."
        ],
        correctAnswer: 0,
        explanation: "A steady green light means you may go straight or turn, if it is permitted and safe, but you must first yield to pedestrians and any vehicles already in the intersection. Never enter the intersection unless you can clear it safely.",
    },
    {
        id: 12,
        question: "During the first six months after receiving a Class D provisional license in Georgia, who is allowed to ride in the vehicle as a passenger?",
        options: [
            "Only one friend under the age of 21.",
            "No passengers at all.",
            "Only immediate family members.",
            "Up to three non-family passengers."
        ],
        correctAnswer: 2,
        explanation: "During the first six months following the issuance of a Class D provisional license, only immediate family members (parents, step-parents, grandparents, siblings, step-siblings, children, or anyone living at the driver's residence) are allowed to ride in the vehicle.",
    },
    {
        id: 13,
        question: "If you must stop on the freeway shoulder because of an emergency, you should:",
        options: [
            "Leave the vehicle in the lane to block traffic.",
            "Get out and walk along the roadway to find help.",
            "Raise your vehicle's hood and turn on your hazard lights while stopped safely on the shoulder.",
            "Stand behind the car in traffic to warn others."
        ],
        correctAnswer: 2,
        explanation: "If you must stop on the freeway shoulder, pull as far off the roadway as possible, turn on your hazard lights, and raise the hood to show you are disabled. Stay inside the vehicle with your seat belt on if it is safe, and do not stand or walk close to moving traffic.",
    },
    {
        id: 14,
        question: "When passing another vehicle, how do you know it's safe to return to your lane?",
        options: [
            "When you cannot see the vehicle directly to your right.",
            "When you have just passed the other vehicle's front bumper.",
            "When you can see the front of the passed vehicle, including both headlights, in your rearview mirror."
        ],
        correctAnswer: 2,
        explanation: "After passing, do not move back into the lane until you can see the front of the vehicle you passed—both of its headlights—clearly in your rearview mirror. This ensures you have enough space and do not cut the other driver off.",
    },
    {
        id: 15,
        question: "When driving behind another vehicle at night you should use:",
        options: [
            "Your low beam headlights.",
            "High beams until you are within 10 feet of the vehicle ahead.",
            "Hazard lights.",
            "Fog lights only."
        ],
        correctAnswer: 0,
        explanation: "When following another vehicle at night, use low beam headlights so your lights do not shine directly into the driver’s mirrors and cause glare. High beams should only be used when they will not blind oncoming drivers or the driver ahead of you.",
    },
    {
        id: 16,
        question: "If you want to enter the freeway but cannot find a gap, you should:",
        options: [
            "Stop at the end of the ramp and wait for traffic to clear.",
            "Slow down on the ramp and wait for a gap.",
            "Force your way into traffic since you are already on the ramp.",
            "Reverse down the ramp to look for a gap."
        ],
        correctAnswer: 0,
        explanation: "On most freeways you should use the full length of the ramp to reach traffic speed and merge into a safe gap. If you reach the end of the ramp and still cannot find a gap, you must stop and wait until it is safe, then accelerate quickly to merge. You should never force your way into traffic or reverse on the ramp.",
    },
    {
        id: 17,
        question: "What does a solid yellow arrow on a traffic signal mean?",
        options: [
            "You should speed up so you can make the turn before the light changes.",
            "You should prepare to stop and yield the right-of-way to oncoming traffic.",
            "You may complete the turn if you are already in the intersection, but new turns will soon be prohibited."
        ],
        correctAnswer: 1,
        explanation: "A solid yellow arrow means your protected turning movement is ending. The signal will soon change to red. You should prepare to stop if you can do so safely and be ready to yield to oncoming traffic and pedestrians before turning.",
    },
    {
        id: 18,
        question: "Under the Hands-Free Georgia Act, which of the following is illegal while operating a vehicle on any public road?",
        options: [
            "Holding or supporting a cell phone with any part of your body.",
            "Using a phone that is mounted to the dashboard.",
            "Listening to navigation prompts through a wireless Bluetooth speaker.",
            "Answering a call using a single-touch steering wheel button."
        ],
        correctAnswer: 0,
        explanation: "The Hands-Free Georgia Act mandates that drivers are not allowed to hold or support a cell phone or stand-alone electronic device with any part of their body for any reason while operating a motor vehicle.",
    },
    {
        id: 19,
        question: "At an intersection controlled by a flashing yellow light you must:",
        options: [
            "Treat it as a flashing red light.",
            "Stop and wait for a green light.",
            "Slow down and cross the intersection carefully.",
            "Turn on your hazard lights and proceed."
        ],
        correctAnswer: 2,
        explanation: "A flashing yellow light means proceed with caution. Slow down, look carefully for cross traffic and pedestrians, and continue through the intersection only when it is safe. You are not required to stop unless needed for safety.",
    },
    {
        id: 20,
        question: "As a vehicle's speed increases, stopping distances and crash severity generally:",
        options: [
            "Decrease.",
            "Increase.",
            "Vary only with the driver's skill.",
            "Remain the same."
        ],
        correctAnswer: 1,
        explanation: "As speed increases, your vehicle needs more distance to stop because both reaction distance and braking distance grow. Crashes at higher speeds also involve more force, which increases the severity of injuries and damage.",
    },
    {
        id: 21,
        question: "After a minor collision at an intersection with no injuries, you should:",
        options: [
            "Leave your vehicle in the lane until police arrive.",
            "Immediately drive away from the scene.",
            "Move your vehicle out of the traffic lane if it is safe to do so.",
            "Stand in traffic to direct other vehicles."
        ],
        correctAnswer: 2,
        explanation: "After a minor collision with no injuries, if your vehicle is drivable and it is safe, you should move it out of the traffic lane to the shoulder or a nearby safe area. This helps prevent additional crashes and keeps traffic flowing. You must still stop, exchange information, and follow any reporting requirements.",
    },
    {
        id: 22,
        question: "What is the penalty for a first-time conviction under the Hands-Free Georgia Law?",
        options: [
            "A written warning only.",
            "A fine of up to $50.00 and 1 point on your driving record.",
            "A fine of $100.00 and 2 points on your driving record.",
            "License suspension for 30 days."
        ],
        correctAnswer: 1,
        explanation: "A first-time conviction under the Hands-Free Georgia Law results in a fine of up to $50.00 and 1 point added to the driver's record. Subsequent convictions carry higher fines and points.",
    },
    {
        id: 23,
        question: "If the intersection ahead is blocked by traffic while your light is green, what should you do?",
        options: [
            "Continue into the intersection and wait for traffic to clear.",
            "Do not enter the intersection until you can get completely across.",
            "Partially enter the intersection to establish your right-of-way."
        ],
        correctAnswer: 1,
        explanation: "You must not enter an intersection if traffic ahead is stopped and you cannot clear the intersection completely, even when your light is green. Wait behind the stop line until there is enough space for your vehicle to get all the way through so you do not block cross traffic.",
    },
    {
        id: 24,
        question: "If you have consumed several alcoholic drinks, the impairing effects will be reduced only by:",
        options: [
            "Exercising vigorously.",
            "Drinking coffee.",
            "Taking a cold shower.",
            "Waiting several hours."
        ],
        correctAnswer: 3,
        explanation: "Only time reduces the amount of alcohol in your body. Exercise, coffee, cold showers, or other tricks do not speed up how quickly your liver processes alcohol. If you have been drinking, you must wait long enough for your body to metabolize the alcohol before driving.",
    },
    {
        id: 25,
        question: "When driving on snowy or icy roads you should:",
        options: [
            "Use cruise control to maintain a steady speed.",
            "Brake abruptly to stop quickly.",
            "Drive exactly as you would on dry pavement.",
            "Make speed and directional changes more gradually and avoid using cruise control."
        ],
        correctAnswer: 3,
        explanation: "On snowy or icy roads, traction is greatly reduced, so you should make all speed and steering changes slowly and smoothly. Avoid cruise control so you can respond immediately to changes in road conditions. Gentle acceleration, braking, and turning help prevent skids and loss of control.",
    },
    {
        id: 26,
        question: "What does a yellow left-turn arrow indicate?",
        options: [
            "Drivers should prepare to yield to oncoming traffic.",
            "The protected left turn is about to end.",
            "Both of the above."
        ],
        correctAnswer: 2,
        explanation: "A yellow left-turn arrow means your protected left turn is ending. You should prepare to stop if it is safe, and if you proceed you must be ready to yield to oncoming traffic and pedestrians because the signal is about to change.",
    },
    {
        id: 27,
        question: "In Georgia, a driver is classified as a 'Super Speeder' and assessed a $200 state fee if convicted of driving at or above what speed?",
        options: [
            "75 mph on a two-lane road or 85 mph on any road.",
            "80 mph on a highway or 90 mph on any road.",
            "10 mph over the speed limit.",
            "65 mph in a construction zone."
        ],
        correctAnswer: 0,
        explanation: "Georgia's 'Super Speeder' law imposes a $200 state fee (in addition to local fines) on any driver convicted of speeding 75 mph or more on a two-lane road, or 85 mph or more on any road or highway in Georgia.",
    },
    {
        id: 28,
        question: "How should you drive on a dimly lit street at night?",
        options: [
            "Turn on your high beam headlights to better see the vehicles ahead of you.",
            "Keep the instrument panel lights bright to be more visible to other drivers.",
            "Drive slowly enough that you can stop within the area illuminated by your headlights."
        ],
        correctAnswer: 2,
        explanation: "On dimly lit streets at night, drive slowly enough that you can stop within the distance you can see with your headlights. This ensures you have enough time to react to hazards that appear in your lighted area.",
    },
    {
        id: 29,
        question: "A \"No passing zone\" sign informs drivers that:",
        options: [
            "It is not safe to pass in the indicated area.",
            "You must maintain a steady speed.",
            "Passing is permitted with caution.",
            "You should speed up slightly and pass quickly."
        ],
        correctAnswer: 0,
        explanation: "A No Passing Zone sign marks an area where it is unsafe and therefore prohibited to pass other vehicles. Stay in your lane and do not move into the oncoming lane to pass until you are beyond the zone.",
    },
    {
        id: 30,
        question: "While in a vehicle on a highway, it is:",
        options: [
            "Illegal to possess or consume open containers of alcohol.",
            "Legal to drink alcohol as a passenger.",
            "Allowed to have open containers if you are not driving.",
            "Permitted if sealed and unopened."
        ],
        correctAnswer: 0,
        explanation: "Open container laws generally make it illegal to possess or consume an open container of alcohol in a motor vehicle on a public road, whether you are the driver or a passenger. Any alcohol in the vehicle should be sealed and stored where it is not accessible.",
    },
    {
        id: 31,
        question: "Why should you avoid using high beams in fog or mist?",
        options: [
            "Vehicles behind you may follow too closely.",
            "Approaching vehicles might not see you.",
            "The light will reflect back into your eyes."
        ],
        correctAnswer: 2,
        explanation: "In fog or mist, high beams shine into the tiny water droplets and bounce the light back toward you. This glare makes it harder to see the road and other vehicles. Use low beams in fog so the light aims down at the road and improves visibility instead of reflecting into your eyes.",
    },
    {
        id: 32,
        question: "When is turning and stopping especially hazardous in rainy weather?",
        options: [
            "One half hour after it stops raining.",
            "After it has been raining all day.",
            "During the first half hour of rain."
        ],
        correctAnswer: 2,
        explanation: "During the first part of a rainstorm, oil and other residues on the road mix with the water and rise to the surface, making the pavement very slippery. Turning and stopping are especially hazardous in this first half hour, so you should slow down and increase following distance until the road has been washed clean.",
    },
    {
        id: 33,
        question: "Which of these is correct about railroad crossings?",
        options: [
            "You have the right-of-way at a railroad crossing and do not need to stop.",
            "You should put on your cruise control near a railroad crossing to maintain a constant speed.",
            "You must stop at a railroad crossing when directed to do so by a flagger or stop sign."
        ],
        correctAnswer: 2,
        explanation: "Trains always have the right-of-way at railroad crossings. You must stop when a flagger, stop sign, or warning signal tells you to, and you must never drive around lowered gates. Always look and listen for trains and be prepared to stop even if you do not immediately see one.",
    },
    {
        id: 34,
        question: "What should you do when the roadway is wet or icy?",
        options: [
            "Speed up.",
            "Drive at the posted speed.",
            "Reduce your speed."
        ],
        correctAnswer: 2,
        explanation: "On wet, snowy, or icy roads, your tires have less traction, so it takes longer to stop and is easier to skid. Reducing your speed gives you more time to react and helps you maintain control. Always slow down and drive smoothly in bad weather conditions.",
    },
    {
        id: 35,
        question: "When driving beside a single broken white line, what does it mean?",
        options: [
            "You may only cross the line to change lanes if you are in the left lane.",
            "You cannot cross the line to pass.",
            "You may cross the line to pass and change lanes."
        ],
        correctAnswer: 2,
        explanation: "A single broken (dashed) white line separates lanes of traffic moving in the same direction. You may cross this line to pass or change lanes when it is safe and legal to do so. Always check mirrors, signal, and check your blind spot before moving into another lane.",
    },
    {
        id: 36,
        question: "At a flashing red traffic signal you must:",
        options: [
            "Slow down and go through if no other vehicles are present.",
            "Come to a complete stop",
            "Yield only to traffic on your left.",
            "Treat it the same as a flashing yellow."
        ],
        correctAnswer: 1,
        explanation: "A flashing red light means you must come to a complete stop, just as you would at a stop sign. After stopping, look for other vehicles, bicycles, and pedestrians in all directions. Proceed only when the way is clear and it is safe to do so.",
    },
    {
        id: 37,
        question: "Unless otherwise posted, what is the maximum speed limit on an unpaved county road in Georgia?",
        options: [
            "25 miles per hour.",
            "30 miles per hour.",
            "35 miles per hour.",
            "45 miles per hour."
        ],
        correctAnswer: 2,
        explanation: "Under Georgia law, the statutory maximum speed limit on unpaved county roads is 35 miles per hour, unless a different limit is posted.",
    },
    {
        id: 38,
        question: "When are streets and highways most slippery?",
        options: [
            "Just after it starts to rain.",
            "When they are clean and dry.",
            "When it has been raining hard for several hours."
        ],
        correctAnswer: 0,
        explanation: "Streets are most slippery just after it starts to rain. Water mixes with oil, grease, and other residues on the road surface, creating a slick film. After it has rained steadily for a while, much of this residue is washed away and traction usually improves, though you must still drive carefully.",
    },
    {
        id: 39,
        question: "At dawn, dusk, or in rain and snow you should turn on:",
        options: [
            "Only your parking lights.",
            "Your headlights.",
            "Your high beam lights.",
            "Your interior instrument lights."
        ],
        correctAnswer: 1,
        explanation: "At dawn, dusk, and in rain or snow, visibility is reduced, so you should turn on your headlights so you can see and be seen. Use low‑beam headlights in these conditions; high beams can reflect off rain, fog, or snow and make it harder to see, and they can also blind other drivers.",
    },
    {
        id: 40,
        question: "If you see a pedestrian using a guide dog or white cane, you must:",
        options: [
            "Sound your horn and pass quickly.",
            "Proceed if they are not in a crosswalk.",
            "Ask them to move to the curb.",
            "Yield the right-of-way to that pedestrian."
        ],
        correctAnswer: 3,
        explanation: "A pedestrian using a guide dog or carrying a white cane is visually impaired and has the right‑of‑way. You must slow down or stop as needed and allow them to cross safely. Never honk, crowd, or try to hurry them; give them plenty of space and time.",
    }
]

export const georgiaPermitTestFaq: { question: string; answer: string }[] = [
    {
        question: "How many questions are on the Georgia DDS permit test?",
        answer: "The Georgia Department of Driver Services (DDS) knowledge test has 40 questions. You need to answer at least 30 correctly (75%) to pass."
    },
    {
        question: "What score do you need to pass the Georgia permit test?",
        answer: "You need 30 out of 40 questions correct — a passing score of 75%. Georgia's passing threshold is lower than most states' 80%, but you still need to know the material well. Missing 11 or more questions means you fail."
    },
    {
        question: "How many questions can you miss on the Georgia DDS test?",
        answer: "You can miss up to 10 questions on the 40-question knowledge test. Missing 11 or more means you fail and must wait 1 day before retaking."
    },
    {
        question: "Is there a time limit on the Georgia permit test?",
        answer: "No. The Georgia DDS does not impose a time limit on the knowledge test. Take your time with each question."
    },
    {
        question: "What is the retake policy if I fail the Georgia permit test?",
        answer: "If you fail, you must wait 1 day before retaking. Use that time to review the areas where you missed questions. Scoring 90%+ consistently on practice tests before your appointment gives you the best chance of passing."
    },
    {
        question: "Can I take the Georgia permit test online?",
        answer: "No. As of 2026, all Georgia DDS knowledge tests must be taken in person at a Georgia DDS Customer Service Center."
    },
    {
        question: "What is the minimum age to get a real estate license in Georgia?",
        answer: "Georgia allows teens to apply for a Class CP instructional permit at age 15. They must hold it for at least 12 months (a full year) and complete 40 hours of supervised driving before applying for a Class D restricted license."
    },
    {
        question: "What is Georgia's Hands-Free law for cell phones while driving?",
        answer: "Georgia's Hands-Free Georgia Act prohibits all drivers from holding or using a mobile device in any way while operating a vehicle. This includes talking, texting, and using apps. All phone use must be completely hands-free — violating this law is a moving violation with fines and points added to your license."
    },
]
