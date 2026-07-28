import type { Question, StatePermitTestConfig } from '@/components/state-permit-test/types'

export const arizonaPermitTestConfig: StatePermitTestConfig = {
    stateName: 'Arizona',
    stateCode: 'AZ',
    departmentName: 'Arizona MVD',
    departmentAbbr: 'MVD',
    realQuestionCount: 30,
    realPassCount: 24,
    passPercent: 80,
    retakePolicy: 'Can retake after 1 day if failed',
    mainPageUrl: '/arizona-mvd-permit-test',
    pageUrl: '/arizona-mvd-permit-test-30-questions',
    stateGuideUrl: '/state-guides/arizona',
    handbookUrl: '/handbooks/arizona',
    year: 2026,
}

export const arizonaPermitTestQuestions: Question[] = [
    {
        id: 1,
        question: "In Arizona, which agency administers real estate licenses?",
        options: ["The Department of Motor Vehicles (Real Estate)", "The Motor Vehicle Division (MVD)", "The Department of Transportation (ADOT)", "The Department of Public Safety (DPS)"],
        correctAnswer: 1,
        explanation: "Arizona real estate licenses are administered by the Motor Vehicle Division (MVD), not a 'Real Estate.' This state-specific distinction is commonly tested because most states use the Real Estate name."
    },
    {
        id: 2,
        question: "What is the minimum age to apply for a real estate license in Arizona?",
        options: ["14", "15", "15 and a half", "16"],
        correctAnswer: 2,
        explanation: "Arizona requires applicants to be at least 15½ years old before applying for a real estate license. This is an important GDL milestone — applicants must have held the permit for at least 6 months before applying for a provisional license."
    },
    {
        id: 3,
        question: "What is the default speed limit on most urban streets in Arizona when no speed limit sign is posted?",
        options: ["20 mph", "25 mph", "30 mph", "35 mph"],
        correctAnswer: 1,
        explanation: "Arizona sets the default speed limit in urban and residential areas at 25 mph when no other limit is posted. Always check posted signs — many streets have limits posted that differ from the default."
    },
    {
        id: 4,
        question: "You are driving on an Arizona highway during a haboob (massive dust storm). What should you do?",
        options: ["Pull over, turn off all lights, and stay in your vehicle", "Pull completely off the road, turn off all lights, take your foot off the brake, and stay in the vehicle", "Turn on your hazard lights and continue driving slowly", "Speed up to get through the storm as quickly as possible"],
        correctAnswer: 1,
        explanation: "Arizona's 'Pull Aside, Stay Alive' rule for haboobs requires drivers to pull completely off the road, turn off ALL lights (including hazard flashers and brake lights), take your foot off the brake, and wait out the storm. Leaving lights on causes other drivers to follow you — believing you are on the road — leading to fatal chain-reaction crashes."
    },
    {
        id: 5,
        question: "What is the legal BAC limit for drivers age 21 and older in Arizona?",
        options: ["0.04%", "0.06%", "0.08%", "0.10%"],
        correctAnswer: 2,
        explanation: "Arizona sets the per se DUI limit at 0.08% BAC for adult drivers. Arizona also has an 'Extreme DUI' designation for a BAC of 0.15% or higher, which carries significantly enhanced penalties."
    },
    {
        id: 6,
        question: "In Arizona, what must you do when you encounter a dust devil (small, spinning dust column) on the road?",
        options: ["Accelerate through it quickly", "Slow down and move away from it if possible — it can briefly reduce visibility", "Stop and wait for it to pass", "It poses no hazard — maintain speed"],
        correctAnswer: 1,
        explanation: "Dust devils can briefly reduce visibility and sometimes contain debris. Arizona drivers are advised to slow down and steer away when possible. While smaller than haboobs, they can still cause a sudden loss of visibility."
    },
    {
        id: 7,
        question: "Under Arizona's GDL program, what nighttime driving restriction applies to drivers under 18 with a provisional license?",
        options: ["No nighttime restriction applies", "No driving between 10 PM and 5 AM for the first 6 months of the provisional license", "No driving between midnight and 5 AM for the first 6 months", "No nighttime driving at all during the provisional phase"],
        correctAnswer: 1,
        explanation: "For the first 6 months after receiving an Arizona provisional license, drivers under 18 may not drive between 10 PM and 5 AM unless accompanied by a licensed driver age 21 or older, or driving to/from work or a school activity."
    },
    {
        id: 8,
        question: "What is the speed limit on most Arizona interstates in rural areas?",
        options: ["65 mph", "70 mph", "75 mph", "80 mph"],
        correctAnswer: 2,
        explanation: "Most rural Arizona interstates have a posted speed limit of 75 mph for passenger vehicles. Some segments allow 85 mph where posted. Always check posted signs — limits vary by location and vehicle type."
    },
    {
        id: 9,
        question: "You are approaching a roundabout in Arizona. What is the correct procedure?",
        options: ["Vehicles already in the roundabout must yield to entering vehicles", "Yield to vehicles already circulating in the roundabout, then enter when safe", "Traffic in the roundabout alternates turns with entering traffic", "Stop at the entry and wait for the roundabout to be fully clear"],
        correctAnswer: 1,
        explanation: "In a roundabout, traffic already circulating inside has the right of way. Entering vehicles must yield, check for gaps, and merge when safe. You do not need to wait for the entire circle to be clear — just for a safe gap in the flow."
    },
    {
        id: 10,
        question: "On a two-lane Arizona road, you see a solid yellow line on your side of the center. What does this mean?",
        options: ["Passing is permitted when the road ahead is clear", "Passing is prohibited — do not cross the line to pass", "Passing is permitted only at speeds above 45 mph", "The road becomes one-way ahead"],
        correctAnswer: 1,
        explanation: "A solid yellow line on your side prohibits crossing the center line to pass another vehicle. Only a dashed yellow line on your side signals that passing is permitted when safe. This rule applies throughout the United States."
    },
    {
        id: 11,
        question: "What should you do if your vehicle's tires hit a soft shoulder on an Arizona highway?",
        options: ["Brake hard to regain control", "Jerk the steering wheel back onto the pavement immediately", "Ease off the gas, grip the wheel firmly, and gradually steer back onto the pavement at low speed", "Accelerate to pop back onto the road"],
        correctAnswer: 2,
        explanation: "If your tires drop off the pavement onto a soft shoulder, ease off the gas and hold the wheel steady. Jerking back onto the pavement at highway speed can cause a rollover. Instead, gradually reduce speed and steer gently back onto the road once it is safe."
    },
    {
        id: 12,
        question: "What is the minimum following distance recommended for normal driving conditions in Arizona?",
        options: ["1 second", "2 seconds", "3 seconds", "4 seconds"],
        correctAnswer: 2,
        explanation: "Arizona recommends a minimum 3-second following distance under normal conditions. In heavy rain, blowing dust, or other reduced-visibility conditions common in Arizona, increase following distance significantly — poor visibility sharply reduces reaction time."
    },
    {
        id: 13,
        question: "Under Arizona law, a driver under 21 found driving with a BAC of 0.00%–0.08% will:",
        options: ["Face no charges if below 0.08%", "Face DUI charges under the 'any spirituous liquor' law since any alcohol is illegal for those under 21", "Receive a warning only on the first offense", "Face a minor infraction fine but no license action"],
        correctAnswer: 1,
        explanation: "Arizona law prohibits drivers under 21 from having any spirituous liquor in their system while driving — meaning any detectable alcohol is illegal for underage drivers regardless of the 0.08% adult standard. This is a state-specific zero tolerance rule."
    },
    {
        id: 14,
        question: "You are driving on an Arizona road and see a cattle crossing sign. What should you expect?",
        options: ["Cattle have the right of way on the road — you must stop for them", "Cattle may be present on or near the road — slow down and prepare to stop", "The sign only applies at night when cattle are hard to see", "Accelerate through the area quickly before cattle reach the road"],
        correctAnswer: 1,
        explanation: "Cattle crossing signs warn that livestock may be present on or near the road, particularly on rural Arizona highways near ranches. Slow down, prepare to stop, and never try to drive around cattle on the roadway — they are unpredictable and can cause severe crashes."
    },
    {
        id: 15,
        question: "In Arizona, when must you turn on your headlights?",
        options: ["Only after dark", "From sunset to sunrise and whenever visibility is less than 500 feet", "Only in rain or fog", "Only when driving on interstate highways at night"],
        correctAnswer: 1,
        explanation: "Arizona requires headlights from sunset to sunrise and any time visibility is reduced to less than 500 feet — such as in rain, dust, or fog. Turning headlights on early (before sunset) and keeping them on after sunrise in poor conditions is always the safer choice."
    },
    {
        id: 16,
        question: "Can you turn right on a red light in Arizona?",
        options: ["No, right turns on red are prohibited statewide", "Yes, after a complete stop and yielding, unless a sign prohibits it", "Yes, without stopping if no vehicles are in the intersection", "Only between 7 AM and 9 PM"],
        correctAnswer: 1,
        explanation: "Right turns on red are permitted in Arizona after a complete stop, yielding to pedestrians and cross traffic. Some intersections have 'No Turn on Red' signs — always check before turning."
    },
    {
        id: 17,
        question: "What must you do when an emergency vehicle with active lights and siren approaches from behind?",
        options: ["Speed up to the next intersection and turn off the road", "Stop immediately in your current lane", "Pull to the right edge of the road and stop until the vehicle has passed", "Move to the left lane and reduce speed by 10 mph"],
        correctAnswer: 2,
        explanation: "Arizona law requires drivers to immediately pull to the right side of the road and stop when an emergency vehicle with active lights and siren approaches. Remain stopped until the vehicle has fully passed before resuming travel."
    },
    {
        id: 18,
        question: "What does Arizona's Move Over law require when passing a stopped emergency vehicle on a multi-lane highway?",
        options: ["Slow to 15 mph and maintain your lane", "Move one lane away from the stopped vehicle if safe; if not, slow to a safe speed", "Stop completely and wait for the vehicle to leave", "Move over only for police vehicles, not tow trucks"],
        correctAnswer: 1,
        explanation: "Arizona's Move Over law requires drivers to vacate the lane adjacent to a stopped emergency, law enforcement, or highway maintenance vehicle with flashing lights. If a lane change is not safely possible, slow down to a speed that is safe for conditions."
    },
    {
        id: 19,
        question: "What shape and color identifies a warning sign in Arizona?",
        options: ["Red octagon", "White rectangle", "Yellow diamond", "Orange rectangle"],
        correctAnswer: 2,
        explanation: "Warning signs are yellow diamond-shaped signs that alert drivers to potential hazards ahead such as sharp curves, school zones, and pedestrian crossings. The yellow diamond shape is a universal standard used throughout the United States."
    },
    {
        id: 20,
        question: "You are making a left turn at an intersection. When do you have the right of way?",
        options: ["Always — the turning vehicle always has the right of way", "When oncoming traffic has stopped or there is a clear gap with no oncoming traffic", "When you have been waiting longer than 30 seconds", "Only when a left-turn arrow is displayed"],
        correctAnswer: 1,
        explanation: "Left-turning vehicles must yield to oncoming traffic and pedestrians in the crosswalk. You may proceed only when oncoming traffic has cleared or stopped, or when a protected left-turn arrow is displayed. Left turns without a protected signal require patience and caution."
    },
    {
        id: 21,
        question: "In Arizona, what is the default speed limit on open highway roads not posted as interstates?",
        options: ["55 mph", "60 mph", "65 mph", "70 mph"],
        correctAnswer: 2,
        explanation: "Arizona's default speed limit on undivided rural highways not posted otherwise is 65 mph for passenger vehicles. Always check posted signs — some stretches may be posted at lower limits due to curves, grades, or construction."
    },
    {
        id: 22,
        question: "When parallel parking on a street, your wheels must be within how many inches of the curb in Arizona?",
        options: ["6 inches", "12 inches", "18 inches", "24 inches"],
        correctAnswer: 2,
        explanation: "Arizona law requires parallel-parked vehicles to be within 18 inches of the right-hand curb or edge of the road. Parking too far from the curb obstructs traffic and is an infraction."
    },
    {
        id: 23,
        question: "You arrive at a 4-way stop at the same time as three other vehicles — one on your right, one across from you, and one on your left. Who goes first?",
        options: ["The vehicle going straight has priority", "The vehicle on your right goes first", "The vehicle on your left goes last", "All vehicles on your right and left yield to you since you arrived simultaneously"],
        correctAnswer: 1,
        explanation: "When multiple vehicles arrive simultaneously at a 4-way stop, the right-of-way goes to the vehicle on the right. If all four arrive at once, the same yield-to-the-right rule applies progressively until all vehicles have moved through safely."
    },
    {
        id: 24,
        question: "Under Arizona's implied consent law, refusing to take a chemical test after a DUI stop will result in:",
        options: ["No penalty — refusal is a legal right", "A 1-year license suspension for first refusal", "Only a fine, with no license action", "A warning on your driving record"],
        correctAnswer: 1,
        explanation: "Arizona's implied consent law means that driving on public roads constitutes consent to chemical testing. A first-offense refusal results in a 1-year license suspension, separate from any DUI charges. Refusal can also be presented as evidence of guilt in court."
    },
    {
        id: 25,
        question: "What must you do when approaching a school bus stopped with flashing red lights on a two-lane Arizona road?",
        options: ["Stop only if driving behind the bus", "Slow to 15 mph and proceed carefully", "Stop in both directions at least 20 feet from the bus and wait until lights stop flashing", "Stop only if children are visibly crossing the road"],
        correctAnswer: 2,
        explanation: "Arizona law requires vehicles in both directions on an undivided road to stop at least 20 feet from a school bus displaying flashing red lights. You may not proceed until the lights stop and the stop arm retracts."
    },
    {
        id: 26,
        question: "You want to pass a vehicle on a two-lane Arizona highway. Which of the following is a legal reason to pass on the right?",
        options: ["The left lane is occupied by a slower vehicle", "The vehicle ahead is turning left and the right side of the road is clear and wide enough", "There is no legal situation — passing on the right is always prohibited", "When the vehicle ahead is driving more than 10 mph below the speed limit"],
        correctAnswer: 1,
        explanation: "In Arizona, passing on the right is permitted only when the vehicle ahead is turning left and there is sufficient room on the right side of the road. You may not use the shoulder to pass on the right — only paved roadway space counts."
    },
    {
        id: 27,
        question: "A solid white line in the middle of the road separates two lanes of traffic moving in the same direction. You may:",
        options: ["Cross it freely to change lanes", "Cross it only in an emergency or when merging near an intersection", "Never cross it under any circumstances", "Cross it only if you signal first"],
        correctAnswer: 1,
        explanation: "A solid white line indicates that lane changes are discouraged in that area — typically near intersections, on-ramps, or other areas where weaving is dangerous. You should avoid crossing a solid white line except in an emergency."
    },
    {
        id: 28,
        question: "Under Arizona law, what is the penalty for a first-offense 'Extreme DUI' (BAC 0.15% or higher)?",
        options: ["Same as a standard DUI — no distinction is made at the state level", "Enhanced mandatory minimum jail time, higher fines, and mandatory ignition interlock device", "License suspension only — no jail time for the first offense", "Community service only"],
        correctAnswer: 1,
        explanation: "Arizona's Extreme DUI law carries mandatory minimum jail time of 30 days, higher fines, and a required ignition interlock device — more severe than a standard first DUI. Arizona is known for having some of the toughest DUI penalties in the nation."
    },
    {
        id: 29,
        question: "You are driving in Arizona and need to change lanes on a highway. What is the correct sequence?",
        options: ["Check mirrors, signal, check blind spot, move smoothly into the new lane", "Signal, accelerate, then move into the new lane", "Check mirrors and immediately move into the new lane if clear", "Move into the new lane, then signal so drivers know your intention"],
        correctAnswer: 0,
        explanation: "The correct lane-change sequence is: check mirrors, activate your turn signal, check your blind spot by looking over your shoulder, and then move smoothly into the new lane when it is clear. Signaling first warns other drivers of your intent before you move."
    },
    {
        id: 30,
        question: "In Arizona, how long before a turn must you signal?",
        options: ["50 feet", "100 feet", "200 feet", "300 feet"],
        correctAnswer: 1,
        explanation: "Arizona requires drivers to signal at least 100 feet before turning. On higher-speed roads or when traffic is heavy, signaling earlier gives other drivers more time to adjust. Failing to signal is a traffic violation and a common cause of crashes."
    },
]

export const arizonaPermitTestFaq: { question: string; answer: string }[] = [
    {
        question: "How many questions are on the Arizona MVD permit test?",
        answer: "The Arizona Motor Vehicle Division (MVD) knowledge test has 30 multiple-choice questions. You need to answer at least 24 correctly (80%) to pass."
    },
    {
        question: "What score do you need to pass the Arizona permit test?",
        answer: "You need 24 out of 30 questions correct — a passing score of 80%. Missing 7 or more questions means you fail."
    },
    {
        question: "How many questions can you miss on the Arizona MVD test?",
        answer: "You can miss up to 6 questions on the 30-question knowledge test. Missing 7 or more means you fail and must wait 1 day before retaking."
    },
    {
        question: "Is there a time limit on the Arizona permit test?",
        answer: "No. The Arizona MVD does not impose a time limit on the knowledge test. Take your time with each question, but go with your first instinct rather than overthinking."
    },
    {
        question: "What is the retake policy if I fail the Arizona permit test?",
        answer: "If you fail, you must wait 1 day before retaking. Use that time to review questions you missed. Scoring 90%+ consistently on practice tests is the best preparation before your appointment."
    },
    {
        question: "Can I take the Arizona permit test online?",
        answer: "No. As of 2026, all Arizona MVD knowledge tests must be taken in person at an Arizona MVD office or Authorized Third Party (ATP) provider."
    },
    {
        question: "What is the minimum age to get a real estate license in Arizona?",
        answer: "Arizona requires applicants to be at least 15½ years old to apply for a real estate license. After holding it for at least 6 months, they can apply for a provisional license."
    },
    {
        question: "What is Arizona's 'Pull Aside, Stay Alive' rule for dust storms?",
        answer: "When a haboob (dust storm) strikes, Arizona drivers should immediately pull completely off the road, turn off ALL lights including hazard flashers and brake lights, take your foot off the brake, and wait. Leaving any lights on causes other drivers to follow your lights, thinking you are on the road — this has caused multiple fatal crashes in Arizona."
    },
]
