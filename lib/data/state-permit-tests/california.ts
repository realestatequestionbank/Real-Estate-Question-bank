import type { Question, StatePermitTestConfig } from '@/components/state-permit-test/types'

export const californiaPermitTestConfig: StatePermitTestConfig = {
    stateName: 'California',
    stateCode: 'CA',
    departmentName: 'California Real Estate',
    departmentAbbr: 'Real Estate',
    realQuestionCount: 46,
    realPassCount: 38,
    passPercent: 83,
    retakePolicy: 'Can retake after 7 days if failed',
    mainPageUrl: '/california-real-estate-permit-test',
    pageUrl: '/california-real-estate-permit-test-46-questions',
    stateGuideUrl: '/state-guides/california',
    handbookUrl: '/handbooks/california',
    year: 2026,
}

export const californiaPermitTestQuestions: Question[] = [
    {
        id: 1,
        question: "What can a person drive with a Class C real estate license?",
        options: [
            "a light rail train",
            "car or van or pickup truck",
            "semi truck"
        ],
        correctAnswer: 1,
        explanation: "On page 7, The Real Estate handbook states 'Most people need a noncommercial Class C real estate license.'  On page 1, it states 'For information on vehicles covered by a Class C, visit real-estate.ca.gov/dl.'",
    },
    {
        id: 2,
        question: "Possessing a driver’s license is a:",
        options: [
            "Right",
            "Privilege",
            "Requirement."
        ],
        correctAnswer: 1,
        explanation: "Possessing a real estate license is a privilege granted by the state. It is not a constitutional right. This privilege can be suspended or revoked for various reasons.",
    },
    {
        id: 3,
        question: "What can a person drive with a Class C real estate license?",
        options: [
            "Any three axle vehicle regardless of the weight",
            "A vehicle pulling 2 trailers",
            "A 3 axle vehicle if the gross vehicle weight is less than 6000 lbs"
        ],
        correctAnswer: 2,
        explanation: "With a Class C real estate license, you may drive a 3-axle vehicle if the Gross Vehicle Weight is less than 6,000 pounds. You may also tow a single vehicle with a GVWR of 10,000 pounds or less.",
    },
    {
        id: 4,
        question: "You have had your license for eight months, and being under the age of 18, you may drive:",
        options: [
            "At any time.",
            "Between 5 a.m. and 11 p.m.",
            "Between 7 a.m. and 8 p.m."
        ],
        correctAnswer: 1,
        explanation: "According to page 4 of the Real Estate handbook, 'When you are under 18 years old, your real estate license will have the word provisional. As a provisional driver, you cannot drive:  - Between 11 p.m. and 5 a.m. during the first 12 months you have your license.'",
    },
    {
        id: 5,
        question: "What is the best thing to do when you become sleepy while driving?",
        options: [
            "Increase your speed to get away from other vehicles",
            "Move over to the right lane and continue driving",
            "Drive to a safe place stop and rest"
        ],
        correctAnswer: 2,
        explanation: "It is stated on page 9 that 'Fatigue and Drowsiness - Can affect your vision and increase reaction time to hazards.' The best solution is to 'Drive to a safe place, stop and rest.'",
    },
    {
        id: 6,
        question: "Medications for sleep, anxiety, pain, colds, or allergies.",
        options: [
            "May impair your driving",
            "May increase the bad effects of alcohol on your driving",
            "Both of the above"
        ],
        correctAnswer: 2,
        explanation: "The Real Estate handbook states that 'Prescription and over-the-counter medications can make you an unsafe driver.'  It also states that 'Some medicines can make you sleepy.'  Therefore, the answer is 'c', as the medications can impair driving and increase the negative effects of alcohol.",
    },
    {
        id: 7,
        question: "You shouldn’t drive.",
        options: [
            "After you have taken any drink drug or medication which changes how you think or act or causes you to be less careful",
            "If you are not alert",
            "Both of the above"
        ],
        correctAnswer: 2,
        explanation: "The Real Estate handbook states, 'It is illegal to drive while under the influence of alcohol or any drug that affects your ability to drive safely.'  It also mentions, 'You must be alert to quickly decide the correct course of action in any type of traffic situation, including unexpected ones.'",
    },
    {
        id: 8,
        question: "About drugs and driving, what statement is correct?",
        options: [
            "Even over-the-counter drugs can impair your driving",
            "Any prescription drug is safe to use if you don’t feel drowsy",
            "Only illegal drugs can impair your driving"
        ],
        correctAnswer: 0,
        explanation: "The Real Estate handbook states that 'Prescription and over-the-counter medications can make you an unsafe driver. Some medicines can make you sleepy. It is your responsibility to know the effects of the medications you take.'",
    },
    {
        id: 9,
        question: "On a long trip how can you prevent fatigue?",
        options: [
            "Get enough sleep",
            "Plan to drive long trips with a companion",
            "All of the above"
        ],
        correctAnswer: 2,
        explanation: "Page 9 of the Real Estate handbook states 'Fatigue and Drowsiness - Can affect your vision and increase reaction time to hazards.'",
    },
    {
        id: 10,
        question: "Who is most at risk?",
        options: [
            "Drivers who are fatigued",
            "Drivers who are driving on long boring roads",
            "All of the above"
        ],
        correctAnswer: 2,
        explanation: "Page 9 of the California Driver's Handbook states 'Fatigue and Drowsiness - Can affect your vision and increase reaction time to hazards.'",
    },
    {
        id: 11,
        question: "While driving all of the following practices are dangerous. Which of these is illegal too?",
        options: [
            "Listening to music through headphones that cover both ears.",
            "Adjusting your outside mirrors.",
            "Transporting an unrestrained animal inside the vehicle."
        ],
        correctAnswer: 0,
        explanation: "The Real Estate Handbook states on page 9 that 'It is illegal to wear a headset or earplugs in both ears while driving.'",
    },
    {
        id: 12,
        question: "Fatigue results in an increased risk of:",
        options: [
            "Missing an exit.",
            "Being late for an appointment.",
            "Falling asleep behind the wheel and crashing."
        ],
        correctAnswer: 2,
        explanation: "The Real Estate handbook states on page 9 'Fatigue and Drowsiness - Can affect your vision and increase reaction time to hazards.'",
    },
    {
        id: 13,
        question: "What should you do if you feel fatigued while driving?",
        options: [
            "Increase your speed to reach your destination more quickly.",
            "Increase the volume of your radio.",
            "Find a safe parking area to take a short nap."
        ],
        correctAnswer: 2,
        explanation: "Fatigue and drowsiness can affect your vision and increase reaction time to hazards. 'Find a safe parking area to take a short nap.'  is the only option that directly addresses the issue of fatigue.",
    },
    {
        id: 14,
        question: "What should you do if you become drowsy while driving?",
        options: [
            "Try to fight it.",
            "Take a break.",
            "Take some caffeine pills."
        ],
        correctAnswer: 1,
        explanation: "The Real Estate handbook states that fatigue and drowsiness can affect your vision and increase reaction time to hazards. It is recommended to take a break if you become drowsy while driving.",
    },
    {
        id: 15,
        question: "What should you do if you have an argument with another person and you are angry?",
        options: [
            "Loudly play the radio while driving so you won’t think about your argument.",
            "Take a few minutes to cool off before driving.",
            "Drive on the interstate to let off steam."
        ],
        correctAnswer: 1,
        explanation: "You should avoid driving when you are emotionally upset. Cooling off before driving is the right choice",
    },
    {
        id: 16,
        question: "Reaction time slows after:",
        options: [
            "Drinking alcohol.",
            "Sleeping.",
            "Working hard."
        ],
        correctAnswer: 0,
        explanation: "The Real Estate handbook explicitly states that alcohol impairs reaction time.",
    },
    {
        id: 17,
        question: "To turn quickly, your hands must be:",
        options: [
            "On opposite sides of the steering wheel.",
            "Next to each other on the top of the steering wheel.",
            "On the top and bottom of the steering wheel."
        ],
        correctAnswer: 0,
        explanation: "To control your vehicle, it is critical to keep both hands on the wheel whenever possible. Hand-to-Hand Steering (Push/Pull): To use this steering wheel method: 1. Start with your hands at 9 and 3 o'clock or 8 and 4 o'clock. 2. Do not cross your hands over the middle of the steering wheel. 3. Keep your hands in these positions, even when making turns.",
    },
    {
        id: 18,
        question: "While drinking alcohol, what is a potential effect of taking a prescription drug?",
        options: [
            "There will likely be no effect.",
            "It will make you more alert.",
            "It can make you unfit to drive."
        ],
        correctAnswer: 2,
        explanation: "The Real Estate Handbook states, 'Prescription and over-the-counter medications can make you an unsafe driver. Some medicines can make you sleepy.' This implies that taking a prescription drug while drinking alcohol can negatively affect your driving abilities.",
    },
    {
        id: 19,
        question: "Before taking any medicine, you should:",
        options: [
            "Consult your doctor about the effects before driving.",
            "Have someone follow you home.",
            "Keep your window open and drive more slowly."
        ],
        correctAnswer: 0,
        explanation: "The Real Estate handbook states, 'Prescription and over-the-counter medications can make you an unsafe driver. Some medicines can make you sleepy. It is your responsibility to know the effects of the medications you take.'",
    },
    {
        id: 20,
        question: "Which one of these statements is correct?",
        options: [
            "Use your left foot to brake.",
            "Use your right foot for both braking and accelerating your vehicle.",
            "You should always brake abruptly to ensure stopping."
        ],
        correctAnswer: 1,
        explanation: "“You should always use your right foot for both braking and accelerating your vehicle. The left foot should not be used.”",
    },
    {
        id: 21,
        question: "Which of these statements about driving while taking medications is true?",
        options: [
            "Most cold medications can make a person drowsy.",
            "Over-the-counter medications cannot impair driving ability if taken in the recommended dosages.",
            "Medications are safe to take at any time"
        ],
        correctAnswer: 0,
        explanation: "The Real Estate handbook states that 'Prescription and over-the-counter medications can make you an unsafe driver. Some medicines can make you sleepy. It is your responsibility to know the effects of the medications you take.'",
    },
    {
        id: 22,
        question: "You should use your turn signals when parking next to a curb",
        options: [
            "When pulling next to or away from the curb",
            "When pulling next to but not away from the curb",
            "Only when pulling away from the curb"
        ],
        correctAnswer: 0,
        explanation: "The Real Estate handbook states, 'You should signal... Before pulling next to the curb or away from the curb.'",
    },
    {
        id: 23,
        question: "You should use your turn signals in time to let other drivers see your intentions.",
        options: [
            "Before you move",
            "After you move",
            "If it’s raining"
        ],
        correctAnswer: 0,
        explanation: "The Real Estate handbook states, 'Always signal when you turn, change lanes, slow down, or stop.'",
    },
    {
        id: 24,
        question: "You should signal at least 100 feet before turning.",
        options: [
            "Before every lane change.",
            "At least 5 seconds before you change lanes on a freeway.",
            "None of the above.",
            "both a and b"
        ],
        correctAnswer: 3,
        explanation: "The text states, 'You should signal: At least 100 feet before you turn, Before every lane change., At least five seconds before you change lanes on a freeway.'",
    },
    {
        id: 25,
        question: "Use your turn signals.",
        options: [
            "When changing lanes or merging into traffic.",
            "When turning left or right.",
            "Both of the above.",
            "None of the above"
        ],
        correctAnswer: 2,
        explanation: "The Real Estate Handbook states that you should 'Always signal when you turn, change lanes, slow down, or stop.'  This includes both turning left or right and changing lanes or merging.",
    },
    {
        id: 26,
        question: "What happens when you do not signal when required?",
        options: [
            "You may get a ticket",
            "You may cause an accident",
            "All of the above"
        ],
        correctAnswer: 2,
        explanation: "The Real Estate handbook states that it is important to signal when making a turn, changing lanes, slowing down, or stopping, and that failing to do so could result in a ticket or cause an accident. The correct answer is all of the above.",
    },
    {
        id: 27,
        question: "What should bicyclists do to signal a turn?",
        options: [
            "Using their vehicle's signal lights",
            "Using hand and arm positions",
            "Using their horn"
        ],
        correctAnswer: 1,
        explanation: "Bicyclists may signal a turn with their arm held straight out, pointing in the direction they plan to turn.  This information is located on page 10 of The Real Estate handbook.",
    },
    {
        id: 28,
        question: "When pulling away from the curb do you need to signal?",
        options: [
            "Yes. You need to signal when you pull away from the curb",
            "No you only need to signal when you approach the curb",
            "only if there are other vehicles around you"
        ],
        correctAnswer: 0,
        explanation: "The Real Estate Handbook states 'You should signal: ... Before pulling next to the curb or away from the curb.'",
    },
    {
        id: 29,
        question: "Before changing lanes, when is it required to signal?",
        options: [
            "At all times",
            "Only when there are other vehicles nearby",
            "Only when changing lanes on a freeway"
        ],
        correctAnswer: 0,
        explanation: "The Real Estate Handbook states that you should 'Always signal when you turn, change lanes, slow down, or stop.'",
    },
    {
        id: 30,
        question: "Before turning left, you must signal continuously for how many feet before making the turn?",
        options: [
            "275 feet",
            "100 feet",
            "50 feet"
        ],
        correctAnswer: 1,
        explanation: "According to the California Driver's Handbook, you must signal 'at least 100 feet before you turn.'",
    },
    {
        id: 31,
        question: "Is it legal to use horn in residential areas?",
        options: [
            "Yes as long as you use it during the day",
            "It is only legal if you live in the residential area",
            "No it is not legal to use the horn in residential areas unless it is an emergency"
        ],
        correctAnswer: 2,
        explanation: "The Real Estate handbook states on page 10: 'Use your vehicle's horn to let other drivers know you are there or warn others of a hazard. Use your horn to: - Avoid collisions. - Alert oncoming traffic on narrow mountain roads where you cannot see at least 200 feet ahead.'",
    },
    {
        id: 32,
        question: "While making a turn you should signal continuously because",
        options: [
            "Is illegal to turn off your signal before completing a turn.",
            "Lets other drivers know what your intentions are.",
            "Is always unsafe to turn off a signal before completing a turn."
        ],
        correctAnswer: 1,
        explanation: "The Real Estate handbook states that you should signal when you turn because 'Always signal when you turn, change lanes, slow down, or stop. You can signal using your vehicle's signal lights or using hand-and-arm positions.'",
    },
    {
        id: 33,
        question: "To reduce road rage what can you do?",
        options: [
            "Always signal your intention when changing lanes.",
            "Talk on your cell phone while driving.",
            "Use your horn frequently."
        ],
        correctAnswer: 0,
        explanation: "Signaling your intention when changing lanes helps prevent other drivers from getting frustrated and reduces the chance of road rage. The Real Estate Handbook states that 'You should signal: At least 100 feet before you turn. Before every lane change.'",
    },
    {
        id: 34,
        question: "You can use your horn when:",
        options: [
            "Another vehicle is in your way.",
            "It may help prevent a collision.",
            "Another driver makes a mistake."
        ],
        correctAnswer: 1,
        explanation: "According to page 10, 'Use your vehicle's horn to let other drivers know you are there or warn others of a hazard. Use your horn to: Avoid collisions.'",
    },
    {
        id: 35,
        question: "When a vehicle is approaching towards you, before how many feet should you switch from high beam to low beam headlights?",
        options: [
            "900 feet.",
            "700 feet.",
            "500 feet."
        ],
        correctAnswer: 2,
        explanation: "Dim your high-beam headlights to low beams within 500 feet of a vehicle coming toward you.",
    },
    {
        id: 36,
        question: "If a driver is having trouble seeing other vehicles because of dust or smoke which lights should be used?",
        options: [
            "Parking lights.",
            "Emergency lights.",
            "Headlights."
        ],
        correctAnswer: 2,
        explanation: "The Real Estate handbook states on page 11, 'Use your headlights: When conditions (such as clouds, dust, smoke, or fog) prevent you from seeing other vehicles.'",
    },
    {
        id: 37,
        question: "When should you signal?",
        options: [
            "Before turning 100 feet before turning.",
            "2100 feet before turning.",
            "3200 feet before turning.",
            "none of the above"
        ],
        correctAnswer: 0,
        explanation: "The Real Estate handbook states that drivers should signal 'At least 100 feet before you turn.'",
    },
    {
        id: 38,
        question: "Turn on your headlights",
        options: [
            "Only when it is completely dark outside.",
            "When it is too dark to see from 1000 feet away.",
            "When it is too dark to see from 500 feet away.",
            "None of the above"
        ],
        correctAnswer: 1,
        explanation: "The Real Estate handbook states: 'Use your headlights... When it is too dark to see from 1,000 feet away.'",
    },
    {
        id: 39,
        question: "You can drive using only your parking lights:",
        options: [
            "30 minutes after sunset or 30 minutes before sunrise",
            "on foggy days",
            "Not under any circumstances"
        ],
        correctAnswer: 2,
        explanation: "It is illegal to drive using only parking lights.",
    },
    {
        id: 40,
        question: "When driving at night on a poorly lit street and using high beams, reduce your lights intensity within 500 feet of:",
        options: [
            "a vehicle approaching you from behind",
            "an oncoming vehicle",
            "a sharp curve or hill"
        ],
        correctAnswer: 1,
        explanation: "According to page 11 of The Real Estate handbook, you should 'Dim your high-beam headlights to low beams within 500 feet of a vehicle coming toward you or within 300 feet of a vehicle you are following.'",
    },
    {
        id: 41,
        question: "When should you be tuning off your turn signals?",
        options: [
            "As soon as you have completed the turn or lane change",
            "As soon as you begin the turn or lane change",
            "Before you begin the turn or lane change"
        ],
        correctAnswer: 0,
        explanation: "You should turn off your signal 'when you no longer need it.'",
    },
    {
        id: 42,
        question: "When is it necessary to use your headlights while driving on mountain roads and in tunnels?",
        options: [
            "Only on cloudy days",
            "Only at night",
            "Always regardless of weather conditions"
        ],
        correctAnswer: 2,
        explanation: "According to The Real Estate handbook, 'Use your headlights: On mountain roads and tunnels (even on sunny days).'",
    },
    {
        id: 43,
        question: "Signal your intentions with your brake lights or hazard lights when you:",
        options: [
            "Need to warn other drivers of an accident ahead.",
            "Are temporarily parked in a traffic lane to make a delivery.",
            "Are backing out of a parking space."
        ],
        correctAnswer: 0,
        explanation: "The Real Estate handbook states, 'If you can see a collision or hazard ahead, warn drivers behind you using these methods: Turn on your emergency flashers, Lightly tap your brake pedal three or four times, Use a hand signal when slowing and stopping.",
    },
    {
        id: 44,
        question: "Visibility can be poor during dawn, dusk or in rain or snow. To let other drivers of your presence, you should turn:",
        options: [
            "Up the instrumental panel lights.",
            "On your parking lights.",
            "On your headlights."
        ],
        correctAnswer: 2,
        explanation: "The Real Estate handbook states 'Use your headlights: When it is too dark to see from 1,000 feet away, Beginning 30 minutes after sunset, Until 30 minutes before sunrise, In adverse weather. If you need to use your windshield wipers due to fog, rain, or snow, you must turn on your low-beam headlights.'",
    },
    {
        id: 45,
        question: "Use low beams when approaching another vehicle or when following within 300 feet of a vehicle",
        options: [
            "That you are approaching from behind.",
            "Approaching you from behind.",
            "That you have already passed."
        ],
        correctAnswer: 0,
        explanation: "The Real Estate handbook states on page 11, 'Dim your high-beam headlights to low beams within 500 feet of a vehicle coming toward you or within 300 feet of a vehicle you are following.'",
    },
    {
        id: 46,
        question: "When visibility is reduced due to rain, snow, or fog, activate your windshield wipers and use your headlights:",
        options: [
            "On the high beam setting.",
            "So other drivers can see you.",
            "Only when driving on the freeway."
        ],
        correctAnswer: 1,
        explanation: "The Real Estate handbook states, 'If you need to use your windshield wipers due to fog, rain, or snow, you must turn on your low-beam headlights.' This indicates that headlights should be used on such days to make your vehicle visible to other drivers.",
    }
]

export const californiaPermitTestFaq: { question: string; answer: string }[] = [
    {
        question: "How many questions are on the real California Real Estate Exam?",
        answer: "The real California Real Estate knowledge test has 46 questions, and you must get at least 38 correct (83%) to pass. This practice set has 30 questions to help you prepare — if you consistently score 90%+ here, you are well-prepared for the full 46-question test."
    },
    {
        question: "What score do you need to pass the California permit test?",
        answer: "You need 38 out of 46 questions correct — a passing score of 83%. This is higher than most states' 80% threshold. Missing 9 or more questions means you fail."
    },
    {
        question: "How many questions can you miss on the California Real Estate Exam?",
        answer: "You can miss up to 8 questions on the 46-question real test. Missing 9 or more means you fail and must wait 7 days before retaking."
    },
    {
        question: "Is there a time limit on the California permit test?",
        answer: "No. The California Real Estate does not impose a time limit on the knowledge test. Take your time with each question and avoid rushing."
    },
    {
        question: "What is the retake policy if I fail the California permit test?",
        answer: "California requires a 7-day waiting period between test attempts — much longer than the 1-day wait in most states. You are also limited to 3 attempts within a 12-month period before your application expires. Thorough preparation before your first attempt is especially important."
    },
    {
        question: "Can I take the California permit test online?",
        answer: "No. As of 2026, all California Real Estate knowledge tests must be taken in person at a California Real Estate office."
    },
    {
        question: "What is the minimum age to get a real estate license in California?",
        answer: "California requires applicants to be at least 15½ years old to apply for a real estate license. After holding it for 6 months and completing 50 hours of supervised driving (10 at night), they can apply for a provisional license."
    },
    {
        question: "Can a driver under 18 use a hands-free device in California?",
        answer: "No. California prohibits drivers under 18 from using any wireless communication device while driving — including hands-free Bluetooth. Adult drivers (18+) may use hands-free devices but are prohibited from holding a phone. Teen drivers face the strictest cell phone restrictions in the state."
    },
]
