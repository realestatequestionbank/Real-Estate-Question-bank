import type { Question, StatePermitTestConfig } from '@/components/state-permit-test/types'

export const rhodeIslandPermitTestConfig: StatePermitTestConfig = {
    stateName: 'Rhode Island',
    stateCode: 'RI',
    departmentName: 'Rhode Island Real Estate',
    departmentAbbr: 'Real Estate',
    realQuestionCount: 25,
    realPassCount: 20,
    passPercent: 80,
    retakePolicy: 'Can retake after 1 day if failed',
    mainPageUrl: '/rhode-island-real-estate-permit-test',
    pageUrl: '/rhode-island-real-estate-permit-test-25-questions',
    stateGuideUrl: '/state-guides/rhode-island',
    handbookUrl: '/handbooks/rhode-island',
    year: 2026,
}

export const rhodeIslandPermitTestQuestions: Question[] = [
    {
        id: 1,
        question: "At what minimum age can a Rhode Island teenager apply for a real estate license?",
        options: ["15", "15 and a half", "16", "17"],
        correctAnswer: 2,
        explanation: "Rhode Island requires applicants to be at least 16 years old to obtain a real estate license. After holding the permit and completing the required supervised practice hours, they can apply for a restricted license and eventually a full license."
    },
    {
        id: 2,
        question: "What is the legal BAC limit for drivers age 21 and older in Rhode Island?",
        options: ["0.04%", "0.06%", "0.08%", "0.10%"],
        correctAnswer: 2,
        explanation: "Rhode Island, like all US states, sets the per se DUI limit at 0.08% BAC for drivers 21 and older. Commercial drivers face a stricter 0.04% limit. Reaching 0.08% alone is sufficient grounds for a DUI charge regardless of apparent impairment."
    },
    {
        id: 3,
        question: "Rhode Island is the smallest state in the US. Despite its size, what is the default speed limit on most urban streets when no sign is posted?",
        options: ["20 mph", "25 mph", "30 mph", "35 mph"],
        correctAnswer: 1,
        explanation: "Rhode Island's default urban speed limit is 25 mph when no other limit is posted. This is a common default in many northeastern states. In school zones and residential areas, lower limits may apply. Always check posted signs."
    },
    {
        id: 4,
        question: "Under Rhode Island's GDL program, a junior operator (age 16–17) is prohibited from driving between what hours unless accompanied by a licensed adult?",
        options: ["10 PM and 5 AM", "11 PM and 5 AM", "11 PM and 6 AM", "Midnight and 6 AM"],
        correctAnswer: 1,
        explanation: "Rhode Island prohibits junior operators (under 18) from driving between 11 PM and 5 AM unless accompanied by a licensed driver age 21 or older who is seated in the front passenger seat. Exceptions exist for employment and school activities."
    },
    {
        id: 5,
        question: "A Rhode Island junior operator (under 18) with a restricted license may carry how many passengers under age 21 during the first 6 months of licensure?",
        options: ["No passengers under 21", "One passenger under 21", "Two passengers under 21", "No restriction on passenger age or number"],
        correctAnswer: 0,
        explanation: "During the first 6 months after obtaining a junior operator's license, Rhode Island prohibits carrying any passengers under age 21 (other than family members or when a parent/guardian is present). This graduated restriction reduces crash risk for new teen drivers."
    },
    {
        id: 6,
        question: "Rhode Island's zero tolerance law for drivers under 21 sets the illegal BAC at:",
        options: ["0.00% — any detectable amount", "0.02%", "0.04%", "0.05%"],
        correctAnswer: 1,
        explanation: "Rhode Island's zero tolerance law sets a BAC threshold of 0.02% for drivers under 21. Any reading at or above 0.02% results in DUI charges and license suspension for underage drivers. This threshold reflects that any drinking by minors is illegal."
    },
    {
        id: 7,
        question: "You are driving on a Rhode Island highway and see a solid white line on the right edge of the roadway. What does this line indicate?",
        options: ["The centerline dividing opposing lanes of traffic", "The right edge of the travel lane — do not cross unless entering/exiting the road", "A bicycle lane — do not cross under any circumstances", "The start of a parking zone"],
        correctAnswer: 1,
        explanation: "A solid white line on the right edge of the road marks the right boundary of the travel lane. Drivers should not cross this line except when exiting the road, entering a turn lane, or in an emergency. Edge lines help define the road boundary, especially at night or in poor weather."
    },
    {
        id: 8,
        question: "When approaching a pedestrian crosswalk in Rhode Island and a pedestrian has stepped into the crosswalk, you must:",
        options: ["Honk to alert the pedestrian and proceed if they are not directly in your path", "Slow to 15 mph and proceed with caution", "Stop and yield until the pedestrian has completely left the crosswalk", "Yield only if the pedestrian is in your lane"],
        correctAnswer: 2,
        explanation: "Rhode Island law requires drivers to stop and yield the entire roadway to a pedestrian who has entered a marked crosswalk. You may not proceed until the pedestrian has completely crossed and cleared the roadway. Pedestrian right-of-way in crosswalks is absolute under Rhode Island law."
    },
    {
        id: 9,
        question: "What does a flashing red traffic signal require you to do?",
        options: ["Slow down and proceed with caution", "Yield to cross traffic then proceed without stopping", "Stop completely, yield to traffic and pedestrians, then proceed when clear", "Treat it as a yield sign"],
        correctAnswer: 2,
        explanation: "A flashing red light functions exactly like a stop sign in Rhode Island. You must come to a complete stop, yield to cross traffic and pedestrians in all directions, and proceed only when it is safe. A flashing yellow means caution — reduce speed but a full stop is not required."
    },
    {
        id: 10,
        question: "Rhode Island's Move Over law requires you to do what when approaching a stopped emergency vehicle with activated lights?",
        options: ["Sound your horn and proceed at normal speed", "Reduce speed by 10 mph", "Move to a non-adjacent lane if safe, or slow to a safe speed if lane change is not possible", "Stop completely until the emergency vehicle moves"],
        correctAnswer: 2,
        explanation: "Rhode Island's Move Over law requires drivers to move one lane away from stopped emergency, police, or tow vehicles if it is safe to do so. If a lane change is not safely possible, slow to a safe speed below the posted limit. Violating the Move Over law can result in significant fines."
    },
    {
        id: 11,
        question: "You are at a red light and want to turn right. There is no 'No Turn on Red' sign. What must you do before turning?",
        options: ["Turn right without stopping if no traffic is visible", "Slow to 15 mph and turn right", "Come to a complete stop, yield to all traffic and pedestrians, then turn right", "Turn right only if a green arrow appears"],
        correctAnswer: 2,
        explanation: "Right turns on red are permitted in Rhode Island after a complete stop and yielding to all cross traffic and pedestrians. Always check for a 'No Turn on Red' sign — at intersections in Providence and other cities, these signs are common. Never turn on red without a full stop first."
    },
    {
        id: 12,
        question: "What is the minimum following distance recommended in Rhode Island under normal driving conditions?",
        options: ["1 second", "2 seconds", "3 seconds", "4 seconds"],
        correctAnswer: 2,
        explanation: "Rhode Island recommends a minimum 3-second following distance under normal driving conditions. In rain, fog, or on wet pavement, increase to at least 4–6 seconds. The 3-second rule: pick a fixed point — when the car ahead passes it, count to 3. If you reach that point before counting to 3, you are following too closely."
    },
    {
        id: 13,
        question: "A solid yellow center line on your side of the road means:",
        options: ["Passing is permitted when the road ahead is clear", "You may pass only when the opposing lane line is also solid", "Passing is prohibited — do not cross to pass", "Passing is permitted at speeds below 35 mph"],
        correctAnswer: 2,
        explanation: "A solid yellow line on your side of the center indicates that passing by crossing the center line is prohibited. Do not cross a solid yellow line to pass. A dashed yellow line on your side means passing is permitted when safe. Always check your side of the center line before passing."
    },
    {
        id: 14,
        question: "Rhode Island requires headlights to be used:",
        options: ["Only after midnight", "From sunset to sunrise and when visibility is reduced to 500 feet or less", "Only when using windshield wipers", "Only on unlit rural roads"],
        correctAnswer: 1,
        explanation: "Rhode Island requires headlights from sunset to sunrise and whenever visibility is 500 feet or less due to weather conditions. If you need to use your windshield wipers, you should also use your headlights. Daytime running lights alone do not satisfy this requirement."
    },
    {
        id: 15,
        question: "When you hear or see an emergency vehicle approaching with lights and siren, you must:",
        options: ["Pull to the left side and stop", "Stop immediately in your current lane", "Pull to the right edge and stop until the vehicle has fully passed", "Speed up to clear the road quickly"],
        correctAnswer: 2,
        explanation: "Rhode Island law requires drivers to immediately pull to the right edge of the road and stop when an authorized emergency vehicle with active lights and/or siren approaches from any direction. Stay stopped until the vehicle has passed. Never block an intersection when pulling over."
    },
    {
        id: 16,
        question: "You are at a four-way stop and two cars arrive simultaneously — you on the north side, another driver on the west side. Who has the right of way?",
        options: ["You have the right of way because you are facing south", "The driver coming from the west has the right of way because they are to your right", "Whoever signals first goes first", "The heavier vehicle has the right of way"],
        correctAnswer: 1,
        explanation: "At a four-way stop when two vehicles arrive simultaneously, the driver on the left yields to the driver on the right. If the other driver is to your right (coming from the west while you face south), they are on your right and have the right of way. Yield and let them proceed first."
    },
    {
        id: 17,
        question: "In Rhode Island, what shape and color is a regulatory sign (such as a speed limit sign)?",
        options: ["Diamond-shaped, yellow", "Circular, yellow", "Rectangular, white with black text", "Octagonal, red"],
        correctAnswer: 2,
        explanation: "Regulatory signs in Rhode Island (and nationwide) are typically rectangular with a white background and black text. They include speed limit signs, turn prohibition signs, and lane control signs. These signs give orders that must be followed, not merely advisories."
    },
    {
        id: 18,
        question: "Rhode Island's implied consent law means that by driving in the state, you have agreed to:",
        options: ["Submit to a vehicle inspection at any time", "Chemical testing (breath, blood, or urine) if suspected of DUI", "Random license checks by law enforcement", "Speed limit changes without prior notice"],
        correctAnswer: 1,
        explanation: "Rhode Island's implied consent law means all drivers have agreed to submit to chemical testing (breath, blood, or urine) if suspected of DUI. Refusing a test results in automatic license suspension — typically 3 months for a first offense — and the refusal can be used as evidence in court."
    },
    {
        id: 19,
        question: "What does a yellow diamond-shaped sign with a curved arrow indicate?",
        options: ["A regulatory sign requiring you to turn", "A warning sign alerting you to a curve ahead", "A school zone ahead", "A railroad crossing ahead"],
        correctAnswer: 1,
        explanation: "Yellow diamond-shaped signs are warning signs. A curved arrow warns of a curve ahead in the road. You should reduce speed before the curve and not brake sharply while in the curve. Warning signs are advisories — they indicate hazards ahead but do not require a specific action like a regulatory sign."
    },
    {
        id: 20,
        question: "In Rhode Island, when must a driver use turn signals?",
        options: ["Only when turning at signalized intersections", "At least 100 feet before turning or changing lanes", "Only when other vehicles are present", "Signals are optional on residential streets under 25 mph"],
        correctAnswer: 1,
        explanation: "Rhode Island requires drivers to signal their intent to turn or change lanes at least 100 feet in advance. On highways and at higher speeds, signaling earlier is strongly recommended. Signals must be used whether or not other vehicles appear to be present."
    },
    {
        id: 21,
        question: "What does a double solid yellow center line mean?",
        options: ["Passing is permitted for traffic in both directions", "Passing is prohibited in both directions", "The left lane is reserved for turning only", "Traffic may pass if the way is clearly visible"],
        correctAnswer: 1,
        explanation: "A double solid yellow line means passing is prohibited for traffic in both directions. Neither you nor oncoming traffic may cross the double solid yellow line to pass. These are typically found on roads with limited sight distance, heavy traffic, or near intersections."
    },
    {
        id: 22,
        question: "When parking uphill on a street with a curb in Rhode Island, you should turn your front wheels:",
        options: ["Toward the curb (right)", "Away from the curb (left)", "Straight — wheels should be parallel to the curb", "Toward the center of the road"],
        correctAnswer: 1,
        explanation: "When parking uphill with a curb, turn your front wheels away from the curb (to the left). If your brakes fail, the vehicle will roll forward into the curb, stopping it from rolling into traffic. When parking downhill, always turn wheels toward the curb. When there is no curb, turn wheels to the right (toward the road edge) regardless of whether you are facing uphill or downhill."
    },
    {
        id: 23,
        question: "Rhode Island requires children to be restrained in a child safety seat until they reach what age or weight threshold?",
        options: ["Age 4 or 40 lbs", "Age 7 or 57 lbs", "Age 8 or 80 lbs", "Age 6 or 60 lbs"],
        correctAnswer: 1,
        explanation: "Rhode Island requires children to use a properly installed child safety seat until they are at least 8 years old OR weigh at least 57 pounds. After that threshold, children must use a booster seat until the vehicle's seatbelt fits them properly (typically around age 12). Always follow the child safety seat manufacturer's guidelines."
    },
    {
        id: 24,
        question: "You are driving on a Rhode Island highway during heavy rain. Compared to dry conditions, how should you adjust your following distance?",
        options: ["Reduce your following distance to stay closer to the car ahead", "No change needed — maintain the same following distance", "Double or triple your following distance to at least 6 seconds", "Increase following distance only if driving over 50 mph"],
        correctAnswer: 2,
        explanation: "In rain, stopping distances increase significantly because wet pavement reduces tire traction. Rhode Island's handbook recommends doubling or tripling your following distance in rain to at least 4–6 seconds. In heavy rain, hydroplaning becomes a real risk above 35 mph — reduce speed and increase your following distance."
    },
    {
        id: 25,
        question: "You are approaching a school bus that has stopped on your side of the road with flashing red lights and a stop arm extended. You must:",
        options: ["Slow to 20 mph and pass with caution if no children are visible", "Stop at least 25 feet behind the bus and wait until lights stop flashing", "Stop only if there is no median dividing the roadway", "Sound your horn once and proceed slowly"],
        correctAnswer: 1,
        explanation: "Rhode Island law requires all vehicles to stop at least 25 feet behind a stopped school bus with activated red flashing lights on an undivided road. Wait until the lights stop flashing and the stop arm retracts before proceeding. On a divided highway with a median, only traffic behind the bus must stop."
    },
]

export const rhodeIslandPermitTestFaq: { question: string; answer: string }[] = [
    {
        question: "How many questions are on the Rhode Island Real Estate Exam?",
        answer: "The Rhode Island Real Estate knowledge test has 25 multiple-choice questions. You need to answer at least 20 correctly (80%) to pass."
    },
    {
        question: "What score do you need to pass the Rhode Island permit test?",
        answer: "You need 20 out of 25 questions correct — a passing score of 80%. Missing 6 or more questions means you fail and must wait 1 day before retaking."
    },
    {
        question: "How many questions can you miss on the Rhode Island Real Estate Exam?",
        answer: "You can miss up to 5 questions on the 25-question knowledge test. Missing 6 or more means you fail."
    },
    {
        question: "Is there a time limit on the Rhode Island permit test?",
        answer: "No. The Rhode Island Real Estate does not impose a time limit on the knowledge test. Take your time on each question, but avoid overthinking answers you feel confident about."
    },
    {
        question: "What is the retake policy if I fail the Rhode Island permit test?",
        answer: "If you fail, you must wait 1 day before retaking. Use that time to review the areas where you struggled. Consistently scoring 90%+ on practice tests before your appointment is the best way to pass on your first try."
    },
    {
        question: "Can I take the Rhode Island permit test online?",
        answer: "No. As of 2026, all Rhode Island Real Estate knowledge tests must be taken in person at a Rhode Island Real Estate office. The main office is in Cranston, with satellite locations across the state."
    },
    {
        question: "What is the minimum age to get a real estate license in Rhode Island?",
        answer: "You must be at least 16 years old to apply for a Rhode Island real estate license. Rhode Island is the smallest state in the US, but follows standard GDL requirements including holding the permit for 6 months and completing supervised practice hours before upgrading to a junior operator's license."
    },
    {
        question: "What is Rhode Island's nighttime driving curfew for teen drivers?",
        answer: "Rhode Island junior operators (under 18) may not drive between 11 PM and 5 AM unless accompanied by a licensed driver age 21 or older seated in the front passenger seat. Exceptions include driving to or from work or a school activity. Additionally, during the first 6 months of licensure, no passengers under age 21 are allowed (except family members)."
    },
]
