import type { Question, StatePermitTestConfig } from '@/components/state-permit-test/types'

export const newHampshirePermitTestConfig: StatePermitTestConfig = {
    stateName: 'New Hampshire',
    stateCode: 'NH',
    departmentName: 'New Hampshire Real Estate',
    departmentAbbr: 'Real Estate',
    realQuestionCount: 40,
    realPassCount: 32,
    passPercent: 80,
    retakePolicy: 'Can retake after 1 day if failed',
    mainPageUrl: '/new-hampshire-real-estate-permit-test',
    pageUrl: '/new-hampshire-real-estate-permit-test-40-questions',
    stateGuideUrl: '/state-guides/new-hampshire',
    handbookUrl: '/handbooks/new-hampshire',
    year: 2026,
}

export const newHampshirePermitTestQuestions: Question[] = [
    {
        id: 1,
        question: "How often must motor vehicles registered in New Hampshire be inspected?",
        options: [
            "Once a year, during the registered owner's birth month.",
            "Once every two years.",
            "Annually by July 1st."
        ],
        correctAnswer: 0,
        explanation: "In New Hampshire, registered vehicles must be inspected once a year, and the inspection must be completed during the registered owner's birth month.",
    },
    {
        id: 2,
        question: "To be prepared for what lies ahead on the roadway, you should:",
        options: [
            "Continually scan the entire roadway and roadsides.",
            "Stare straight ahead at all times.",
            "Drive with your left foot lightly resting on the brake."
        ],
        correctAnswer: 0,
        explanation: "Search the road and sides continually to identify hazards early; do not simply stare at the center of the road.",
    },
    {
        id: 3,
        question: "You must yield the right-of-way to emergency vehicles when:",
        options: [
            "You see flashing red or blue lights or hear a siren.",
            "Only when other vehicles yield, c:Under no circumstances."
        ],
        correctAnswer: 0,
        explanation: "Yield the right-of-way immediately to any emergency vehicle using lights or sirens by pulling over to the curb and stopping.",
    },
    {
        id: 4,
        question: "The holder of a New Hampshire Youth Operator license under the age of 18 is not allowed to operate a motor vehicle between which hours?",
        options: [
            "12:00 a.m. (midnight) and 5:00 a.m.",
            "1:00 a.m. and 4:00 a.m.",
            "11:00 p.m. and 6:00 a.m."
          ],
        correctAnswer: 1,
        explanation: "Under New Hampshire law, a Youth Operator license holder under the age of 18 cannot operate a motor vehicle between the hours of 1:00 a.m. and 4:00 a.m.",
    },
    {
        id: 5,
        question: "New Hampshire law requires headlights to be turned on from 1/2 hour after sunset to 1/2 hour before sunrise, and whenever visibility is less than:",
        options: [
            "500 feet.",
            "1,000 feet.",
            "150 feet."
        ],
        correctAnswer: 1,
        explanation: "You must turn on your headlights from 1/2 hour after sunset to 1/2 hour before sunrise, or anytime weather or road conditions reduce visibility so you cannot see clearly for 1,000 feet.",
    },
    {
        id: 6,
        question: "When driving in fog you should use:",
        options: [
            "Low beam headlights.",
            "Parking lights.",
            "High beam headlights."
        ],
        correctAnswer: 0,
        explanation: "Use low beam headlights in fog, rain, or snow so you are better able to see and be seen.",
    },
    {
        id: 7,
        question: "When should you increase your following distance?",
        options: [
            "When behind a large vehicle that blocks your view or in bad weather.",
            "Only when exiting an expressway.",
            "Only when following a motorcycle."
        ],
        correctAnswer: 0,
        explanation: "Increase following distance in many situations: large vehicles that block vision, bad weather, heavy traffic, or if tailgated.",
    },
    {
        id: 8,
        question: "If you're stopped in line at a stop sign and there is no cross traffic after vehicles ahead have passed, what must you do?",
        options: [
            "Stop again at the stop sign or stop line before proceeding.",
            "Proceed without stopping because the way is clear.",
            "Slowly roll past the stop sign."
        ],
        correctAnswer: 0,
        explanation: "You must always come to a complete stop at the stop sign and yield before proceeding, even if vehicles ahead have moved.",
    },
    {
        id: 9,
        question: "Many crashes are caused by drivers who:",
        options: [
            "Travel too fast for the conditions.",
            "Constantly check their mirrors.",
            "Yield the right-of-way."
        ],
        correctAnswer: 0,
        explanation: "Driving too quickly for road or weather conditions is a common factor in crashes.",
    },
    {
        id: 10,
        question: "If an oncoming driver fails to dim high beams, where should you direct your gaze?",
        options: [
            "Toward the right side of the road.",
            "At the lights of the approaching vehicle.",
            "Toward the left side of the road."
        ],
        correctAnswer: 0,
        explanation: "Glance to the right side of the road to avoid being blinded while keeping enough sight to stay on course.",
    },
    {
        id: 11,
        question: "Which statement best defines defensive driving?",
        options: [
            "Defensive driving means identifying dangerous situations and taking action to avoid accidents.",
            "Defensive driving means defending yourself by getting ahead of bad drivers in traffic.",
            "Defensive driving means following the vehicle ahead of you at a close distance."
        ],
        correctAnswer: 0,
        explanation: "Defensive driving is recognizing hazards early and taking action to avoid collisions, reducing conflicts with aggressive or inattentive road users.",
    },
    {
        id: 12,
        question: "Who is required by law to wear a seat belt in a moving vehicle in New Hampshire?",
        options: [
            "Anyone under the age of 18.",
            "All occupants, including the driver, regardless of age.",
            "Only the driver and front seat passengers."
        ],
        correctAnswer: 0,
        explanation: "In New Hampshire, anyone under the age of 18 is required by law to wear a seat belt. New Hampshire is the only U.S. state that does not legally require adults (18 and older) to wear seat belts, though it is strongly recommended.",
    },
    {
        id: 13,
        question: "Which of the following has authority over the others and must be obeyed first?",
        options: [
            "A steady red light",
            "A police officer",
            "A stop sign"
        ],
        correctAnswer: 1,
        explanation: "Directions given by a police officer or other authorized traffic officer take precedence over traffic signals, signs, or pavement markings.",
    },
    {
        id: 14,
        question: "During the first 6 months after receiving a Youth Operator license, the driver under 18 cannot operate a vehicle with more than how many passengers under age 25 who are not family members?",
        options: [
            "No passengers under age 25.",
            "Only one passenger under age 25.",
            "Up to three passengers under age 25."
        ],
        correctAnswer: 1,
        explanation: "During the first 6 months after receiving a Youth Operator license, a driver under 18 cannot drive with more than one passenger under age 25 who is not an immediate family member, unless accompanied by a licensed adult age 25 or older.",
    },
    {
        id: 15,
        question: "Alcoholic beverages can affect you by:",
        options: [
            "Slowing your reaction time.",
            "Giving you increased, accurate confidence.",
            "Improving thinking ability."
        ],
        correctAnswer: 0,
        explanation: "Alcohol impairs reaction time, judgment, balance, and vision while giving false confidence.",
    },
    {
        id: 16,
        question: "A flashing red traffic signal requires you to:",
        options: [
            "Come to a complete stop, yield, and go only when safe.",
            "Slow down at the light.",
            "Merge to the right immediately."
        ],
        correctAnswer: 0,
        explanation: "A flashing red light means stop, yield to traffic and pedestrians, and proceed only when it is safe.",
    },
    {
        id: 17,
        question: "What do work zone (orange) signs indicate?",
        options: [
            "Less-than-ideal driving conditions and that construction or maintenance is present.",
            "That it is summer and roads are busier.",
            "You must immediately stop and back up."
        ],
        correctAnswer: 0,
        explanation: "Orange work zone signs warn drivers of road work; slow down and be extra cautious.",
    },
    {
        id: 18,
        question: "When approaching a railroad crossing that has no gates or flashing lights, you should:",
        options: [
            "Prepare to yield to any train that may be approaching.",
            "Cross the tracks immediately and as quickly as possible.",
            "Always stop before crossing no matter what."
        ],
        correctAnswer: 0,
        explanation: "If there are no active signals, be prepared to yield and only cross when there is room for your entire vehicle on the other side and you are sure no trains are coming.",
    },
    {
        id: 19,
        question: "On a divided multilane highway when you hear or see an emergency vehicle, what should you do?",
        options: [
            "Slow down, move to provide a clear path, and stop.",
            "Disregard the signal if other lanes are available.",
            "Stop as quickly as possible wherever you are."
        ],
        correctAnswer: 0,
        explanation: "When an emergency vehicle approaches, slow down and make a clear path by moving and stopping when safe; do not try to outdrive the vehicle.",
    },
    {
        id: 20,
        question: "What should you do when approaching a railroad crossing without signals?",
        options: [
            "Slow down and be prepared to stop.",
            "Always come to a complete stop.",
            "Assume there will always be signals."
        ],
        correctAnswer: 0,
        explanation: "At an un-signaled railroad crossing slow down, look and listen for trains, and be prepared to stop if a train is approaching.",
    },
    {
        id: 21,
        question: "In New Hampshire, what is the minimum age at which you may practice driving a non-commercial vehicle when accompanied by a licensed parent, guardian, or adult age 25 or older?",
        options: [
            "15 years of age.",
            "16 years of age.",
            "15 1/2 years of age."
        ],
        correctAnswer: 2,
        explanation: "New Hampshire does not issue a real estate license. A resident may practice driving once they reach 15 1/2 years of age, provided they carry proof of age and are supervised in the front seat by a licensed parent, guardian, or adult age 25 or older.",
    },
    {
        id: 22,
        question: "In foggy conditions you should:",
        options: [
            "Drive cautiously, reduce your speed, and use low-beam headlights.",
            "Use your high beams to see farther ahead.",
            "Use parking lights only."
        ],
        correctAnswer: 0,
        explanation: "Fog reduces visibility; use low beams (and fog lights if equipped), slow down, and increase following distance.",
    },
    {
        id: 23,
        question: "When approaching a stopped school bus on the opposite side of a divided highway, what must drivers do?",
        options: [
            "May continue driving if the highway is divided.",
            "Must stop until the bus begins moving.",
            "Must stop until the stop arm is lifted regardless of division."
        ],
        correctAnswer: 0,
        explanation: "If the highway is divided by a median or barrier, drivers on the opposite side may continue; otherwise all lanes must stop for a stopped school bus with its signals activated.",
    },
    {
        id: 24,
        question: "How does the type of alcoholic drink affect impairment?",
        options: [
            "The effect on reflexes and judgment depends on blood alcohol level, not drink type.",
            "Beer impairs less than wine.",
            "Wine impairs less than beer."
        ],
        correctAnswer: 0,
        explanation: "Impairment depends on the amount of alcohol in the bloodstream, not whether it comes from beer, wine, or spirits.",
    },
    {
        id: 25,
        question: "If you are driving so slowly that traffic is backing up behind you on a two-lane, two-way road, you should:",
        options: [
            "Pull off to the right side of the road and let traffic pass.",
            "Decrease your speed further.",
            "Refuse to let other cars pass your vehicle."
        ],
        correctAnswer: 0,
        explanation: "Driving significantly slower than the flow of traffic is hazardous. On a two-lane road you must pull off and let vehicles pass when it is safe to do so.",
    },
    {
        id: 26,
        question: "What does a single dashed white line between lanes of traffic mean?",
        options: [
            "Drivers may pass or change lanes when it is safe to do so.",
            "Traffic in the lanes moves in opposite directions.",
            "Drivers may not pass in this area."
        ],
        correctAnswer: 0,
        explanation: "Dashed white lines separate lanes going in the same direction and may be crossed to pass or change lanes when it is safe.",
    },
    {
        id: 27,
        question: "Alcohol consumption commonly causes:",
        options: [
            "Loss of concentration.",
            "Only poor coordination.",
            "Only slower judgment."
        ],
        correctAnswer: 0,
        explanation: "Even small amounts of alcohol impair vision, concentration, judgment, and coordination.",
    },
    {
        id: 28,
        question: "Unless otherwise posted, what is the speed limit in a posted school zone in New Hampshire?",
        options: [
            "20 miles per hour.",
            "10 miles per hour below the usual posted limit.",
            "15 miles per hour."
        ],
        correctAnswer: 1,
        explanation: "In New Hampshire, the speed limit in any posted school zone is exactly 10 miles per hour below the usual posted speed limit. This is active from 45 minutes before school opening until opening, and from closing until 45 minutes after closing.",
    },
    {
        id: 29,
        question: "When turning left onto a one-way street, you should complete the turn into:",
        options: [
            "The lane closest to your previous lane.",
            "The right lane of the one-way street.",
            "Either lane of the one-way street."
        ],
        correctAnswer: 0,
        explanation: "Turn from the lane nearest the direction you are traveling into the lane nearest the direction you want to go on the one-way street.",
    },
    {
        id: 30,
        question: "At a four-way stop, who has the right-of-way?",
        options: [
            "The vehicle that arrived first.",
            "The vehicle that arrived last.",
            "A vehicle may proceed without stopping."
        ],
        correctAnswer: 0,
        explanation: "At a four-way stop the driver who arrived first should proceed first. If two arrive simultaneously, the driver on the left yields to the driver on the right.",
    },
    {
        id: 31,
        question: "When backing a vehicle, you should:",
        options: [
            "Turn and look through the rear window while backing rather than relying only on mirrors.",
            "Rely only on your mirrors, c:Open your door to see if it is safe to proceed."
        ],
        correctAnswer: 0,
        explanation: "When reversing, turn and look over your shoulder through the rear window; do not depend solely on mirrors or sensors.",
    },
    {
        id: 32,
        question: "When passing another vehicle, what should you do first?",
        options: [
            "Check mirrors and blind spots, signal, then pass when safe.",
            "Honk at the vehicle three times to warn them.",
            "Re-enter your lane within 10 feet of the passed vehicle."
        ],
        correctAnswer: 0,
        explanation: "Check mirrors and blind spots, signal your intent, pass safely, then return to the lane when you can see the passed vehicle in your rearview mirror.",
    },
    {
        id: 33,
        question: "When parking downhill on a two-way street, how should you position your front wheels?",
        options: [
            "Turn the wheels to the right toward the curb.",
            "Keep the wheels straight ahead.",
            "Turn the wheels to the left away from the curb."
        ],
        correctAnswer: 0,
        explanation: "When parked downhill on a two-way street, turn front wheels toward the curb so the vehicle will roll into the curb rather than into traffic if it moves.",
    },
    {
        id: 34,
        question: "Under New Hampshire law, a moped is defined as a motor-driven cycle that cannot exceed what speed on level ground?",
        options: [
            "25 miles per hour.",
            "30 miles per hour.",
            "35 miles per hour."
        ],
        correctAnswer: 1,
        explanation: "In New Hampshire, a moped is defined as having an engine of 50 cc or less, 2 horsepower or less, and it must not require shifting gears. It cannot exceed a speed of 30 mph on level ground.",
    },
    {
        id: 35,
        question: "If you miss your exit on a freeway, what should you do?",
        options: [
            "Continue to the next exit and leave there.",
            "Pull onto the shoulder and back up to the exit.",
            "Make a U-turn across the median."
        ],
        correctAnswer: 0,
        explanation: "If you miss an exit, drive to the next one; do not stop, back up, or cross the median on the freeway.",
    },
    {
        id: 36,
        question: "If another vehicle is tailgating you, what should you do first if there is an open lane to your right?",
        options: [
            "If there is not an open lane to your right, wait until the way is clear ahead and reduce your speed slowly to encourage the tailgater to pass.",
            "Move over to the right, if there is an open lane to your right.",
            "Never slow down abruptly."
        ],
        correctAnswer: 1,
        explanation: "If someone is tailgating, move over to the right when it is safe to let them pass. If no lane is available, reduce speed gradually to encourage them to go around; avoid sudden braking.",
    },
    {
        id: 37,
        question: "Drivers who have been drinking before getting behind the wheel:",
        options: [
            "Do not have sufficient control over their bodies and minds or the vehicles being driven.",
            "Are always aware of the risks they are taking.",
            "Are better drivers because they are more careful than sober drivers."
        ],
        correctAnswer: 0,
        explanation: "Alcohol impairs judgment, vision, reaction time, and coordination; it is never safe to drive after drinking.",
    },
    {
        id: 38,
        question: "A leaking exhaust system can produce which dangerous effect?",
        options: [
            "Make you drowsy while driving and expose you to toxic fumes.",
            "Require more frequent oil changes.",
            "Reduce engine overheating only."
        ],
        correctAnswer: 0,
        explanation: "Leaky exhaust can let toxic gases into the vehicle, causing drowsiness, unconsciousness, or death in short order.",
    },
    {
        id: 39,
        question: "Which statement about driving on wet roadways is true?",
        options: [
            "The faster you drive, the less effective your tires are at clearing water.",
            "Water does not affect cars with good tires.",
            "Deep water is less dangerous than shallow water."
        ],
        correctAnswer: 0,
        explanation: "At higher speeds tires may lose contact with the road surface and the vehicle can hydroplane.",
    },
    {
        id: 40,
        question: "What does a single broken white line down the center of a multi-lane road indicate?",
        options: [
            "Lanes are moving in the same direction and drivers may change lanes when safe.",
            "Lanes are moving in opposite directions and passing is prohibited.",
            "Lanes are moving in the same direction and passing is never allowed."
        ],
        correctAnswer: 0,
        explanation: "Broken white lines separate lanes moving in the same direction; you may change lanes when safe to do so.",
    }
]

export const newHampshirePermitTestFaq: { question: string; answer: string }[] = [
    {
        question: "How many questions are on the New Hampshire Real Estate Exam?",
        answer: "The New Hampshire Real Estate Exam has 40 multiple-choice questions. You need to answer at least 32 correctly (80%) to pass. This practice test has 30 questions to help you prepare."
    },
    {
        question: "What score do you need to pass the New Hampshire permit test?",
        answer: "You need 32 out of 40 questions correct — a passing score of 80%. Missing 9 or more questions means you fail and must wait 1 day before retaking."
    },
    {
        question: "How many questions can you miss on the New Hampshire Real Estate Exam?",
        answer: "You can miss up to 8 questions on the 40-question knowledge test. Missing 9 or more means you fail."
    },
    {
        question: "Is there a time limit on the New Hampshire permit test?",
        answer: "No. The New Hampshire Real Estate does not impose a time limit on the knowledge test. Take your time and read each question carefully."
    },
    {
        question: "What is the retake policy if I fail the New Hampshire permit test?",
        answer: "If you fail, you must wait 1 day before retaking. Use that time to review the topics you missed. Scoring consistently above 90% on practice tests before your appointment gives you the best chance of passing on the first try."
    },
    {
        question: "Can I take the New Hampshire permit test online?",
        answer: "No. As of 2026, all New Hampshire Real Estate knowledge tests must be taken in person at a New Hampshire Division of Motor Vehicles office."
    },
    {
        question: "What is the minimum age to get a real estate license in New Hampshire?",
        answer: "New Hampshire allows teens to apply for a real estate license at age 15¾ (15 years and 9 months). A parent or guardian must provide consent, and the permit allows supervised driving practice."
    },
    {
        question: "Does New Hampshire require adults to wear seat belts?",
        answer: "No — New Hampshire is the only U.S. state that does not require adults (18 and over) to wear a seat belt by law. However, all passengers under 18 must be properly restrained. Despite no legal requirement, wearing a seat belt dramatically reduces injury and death in crashes — it is always the safest choice."
    },
]
