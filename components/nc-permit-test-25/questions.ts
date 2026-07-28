export type Question = {
    id: number
    question: string
    options: string[]
    correctAnswer: number // 0-3 index
    explanation: string
}

export const NC_25_QUESTIONS: Question[] = [
    {
        id: 1,
        question: "What is the default speed limit in a North Carolina urban district or business area when no speed is posted?",
        options: ["25 mph", "30 mph", "35 mph", "45 mph"],
        correctAnswer: 2,
        explanation: "North Carolina sets the default urban/business district speed limit at 35 mph — higher than most states. This is commonly tested because many students assume 25 mph (the standard in other states)."
    },
    {
        id: 2,
        question: "You arrive at a 4-way stop at the same time as a driver on your right. Who has the right of way?",
        options: ["You do, because you are going straight", "The driver on your right", "The driver who flashes their lights first", "Neither — both must wait for a signal"],
        correctAnswer: 1,
        explanation: "At a 4-way stop when two vehicles arrive simultaneously, the driver to your RIGHT has the right of way. This tie-breaker applies any time two cars reach a stop sign at the same moment. Yield, let them go, then proceed."
    },
    {
        id: 3,
        question: "You are waiting to turn left at an intersection on a green light. Oncoming traffic is moving through. When may you complete your turn?",
        options: ["Immediately after entering the intersection — you already have the green", "Only after oncoming traffic clears and you have a safe gap", "Any time there is less than one car length of gap in traffic", "Only when a dedicated left-turn arrow appears"],
        correctAnswer: 1,
        explanation: "A green light gives you permission to enter the intersection, but you must still yield to oncoming traffic before completing a left turn. Wait for a safe gap. Left-turn crashes are one of the most common types — patience here saves lives."
    },
    {
        id: 4,
        question: "In North Carolina, what is the speed limit in a school zone when warning lights are flashing?",
        options: ["15 mph", "20 mph", "25 mph", "35 mph"],
        correctAnswer: 2,
        explanation: "School zones in North Carolina have a 25 mph speed limit when the flashing warning lights are active or when children are near the roadway. This applies in both directions during school hours."
    },
    {
        id: 5,
        question: "You are approaching a marked pedestrian crosswalk with no traffic signal. A pedestrian is standing at the curb waiting to cross. What must you do?",
        options: ["Slow to 15 mph and proceed past them", "Honk to let them know you are passing", "Stop and yield the entire roadway until the pedestrian has safely crossed", "Stop only if the pedestrian has already stepped into the street"],
        correctAnswer: 2,
        explanation: "NC law requires drivers to stop and yield to pedestrians at marked crosswalks — even if they are still on the curb. You must yield the entire roadway, not just your lane, until the pedestrian has crossed safely. Failure to yield is a moving violation."
    },
    {
        id: 6,
        question: "What does a solid double yellow center line on a two-lane road mean?",
        options: ["Passing is permitted if the road ahead looks clear", "Passing is prohibited in both directions", "The left lane is reserved for turning vehicles only", "The road is about to become a divided highway"],
        correctAnswer: 1,
        explanation: "A solid double yellow center line means passing is prohibited for drivers in both directions. These lines mark areas with limited sight distance — hills, curves — where crossing into oncoming traffic to pass would be dangerous. Never cross a solid double yellow line to pass."
    },
    {
        id: 7,
        question: "An emergency vehicle with flashing lights and a siren is approaching from behind while you are driving. What should you do?",
        options: ["Speed up to create space ahead of the vehicle", "Stop immediately in your current lane", "Pull to the right side of the road and stop until the vehicle has passed", "Turn at the nearest intersection to clear the road"],
        correctAnswer: 2,
        explanation: "NC law requires you to pull to the right and stop when an emergency vehicle approaches from any direction with lights and siren. Wait until the vehicle has completely passed before merging back into traffic. Never block an intersection when pulling over."
    },
    {
        id: 8,
        question: "A Level 2 limited provisional license holder under 18 in North Carolina is prohibited from driving during which hours?",
        options: ["8 PM to 6 AM", "9 PM to 5 AM", "10 PM to 6 AM", "11 PM to 5 AM"],
        correctAnswer: 1,
        explanation: "NC Level 2 license holders under 18 cannot drive between 9 PM and 5 AM. Exceptions exist for driving to/from work, school activities, or emergencies — or when a supervising licensed adult is seated in the front."
    },
    {
        id: 9,
        question: "You are approaching a railroad crossing with no gates, lights, or warning signals. What should you do?",
        options: ["Maintain your speed — no train is coming if no signals are active", "Slow to 15 mph and proceed without stopping", "Slow down, look both ways, listen for a train, and only cross when safe", "Stop completely, regardless of whether a train is visible"],
        correctAnswer: 2,
        explanation: "At an uncontrolled railroad crossing, you must slow down, look in both directions, listen for trains, and proceed only when safe. Never race a train to a crossing — trains cannot stop quickly. If your view is blocked by vegetation or structures, stop before the tracks."
    },
    {
        id: 10,
        question: "What is the legal blood alcohol concentration (BAC) limit for a driver 21 or older in North Carolina?",
        options: ["0.02%", "0.04%", "0.08%", "0.10%"],
        correctAnswer: 2,
        explanation: "A BAC of 0.08% or higher is per se illegal for drivers 21 and older in NC. This means the BAC level alone is enough to establish impairment — how the driver looks or acts is irrelevant. Commercial drivers have a stricter limit of 0.04%."
    },
    {
        id: 11,
        question: "Under North Carolina's zero tolerance law, what BAC level is illegal for a driver under 21?",
        options: ["0.02%", "0.04%", "0.08%", "Any measurable amount"],
        correctAnswer: 3,
        explanation: "NC enforces strict zero tolerance for drivers under 21. Any measurable amount of alcohol results in a 30-day civil license revocation. This applies even if the driver does not appear impaired. There is no safe BAC level for underage drivers in NC."
    },
    {
        id: 12,
        question: "Under North Carolina law, when are you required to turn on your headlights?",
        options: ["Only between midnight and 6 AM", "Only when it is raining heavily", "Between sunset and sunrise, when visibility is less than 400 feet, or whenever windshield wipers are in use", "Only on highways and rural roads"],
        correctAnswer: 2,
        explanation: "NC requires headlights in three situations: (1) sunset to sunrise, (2) visibility under 400 feet due to weather or conditions, and (3) any time windshield wipers are in use — even for light drizzle. The wiper rule is frequently tested and catches many students off guard."
    },
    {
        id: 13,
        question: "What is the recommended minimum following distance in normal driving conditions in North Carolina?",
        options: ["1 second", "2 seconds", "3 seconds", "4 seconds"],
        correctAnswer: 2,
        explanation: "The 3-second rule is the NC standard. Pick a fixed object; when the car ahead passes it, count 3 seconds before you reach it. In rain, fog, or at highway speeds, increase to 4–6 seconds. More space means more time to react and stop."
    },
    {
        id: 14,
        question: "A school bus ahead of you has flashing YELLOW (amber) lights. What does this mean?",
        options: ["The bus has already stopped — you must stop now", "The bus is preparing to stop — slow down and be ready to stop", "You may carefully pass the bus on the left", "The bus is moving — continue at normal speed"],
        correctAnswer: 1,
        explanation: "Flashing yellow (amber) lights are the bus's warning signal that it is about to stop to load or unload students. You must slow down and prepare to stop. When the lights switch to flashing red and the stop arm extends, you are required to stop completely."
    },
    {
        id: 15,
        question: "Which of the following situations makes passing another vehicle NOT permitted in North Carolina?",
        options: ["On a straight road where you can see at least 500 feet ahead", "When approaching the crest of a hill where you cannot see oncoming traffic", "On a road marked with a broken yellow center line", "When the vehicle ahead is traveling well below the speed limit"],
        correctAnswer: 1,
        explanation: "You may not pass when approaching the crest of a hill because you cannot see whether oncoming traffic is present. Passing is also prohibited on curves, near intersections, at railroad crossings, in school zones, and wherever solid yellow lines are painted. A broken yellow line indicates passing is allowed when safe."
    },
    {
        id: 16,
        question: "Which statement about cell phone use for drivers under 18 in North Carolina is TRUE?",
        options: ["Hands-free calling is permitted at all times", "Only texting while the vehicle is moving is prohibited", "All cell phone use — including hands-free calls — is prohibited while driving", "Restrictions only apply during nighttime driving hours"],
        correctAnswer: 2,
        explanation: "NC has one of the strictest teen distracted driving laws: drivers under 18 cannot use any mobile device while driving, including hands-free. For adult drivers (18+), texting and reading messages is prohibited, but hands-free calls are permitted."
    },
    {
        id: 17,
        question: "Under North Carolina's Move Over law, what must you do when approaching a stationary vehicle with flashing lights on the roadside?",
        options: ["Move over only if it is a law enforcement vehicle", "Speed up to clear the area as quickly as possible", "Move over one lane away if safe, or slow to a safe speed if a lane change is not possible", "Honk once to warn the roadside worker and maintain speed"],
        correctAnswer: 2,
        explanation: "NC's Move Over law (G.S. 20-157) applies to any stopped emergency, law enforcement, towing, or utility vehicle with flashing lights. Move one lane over if you safely can — if not, slow to a safe and reasonable speed. Violating this law is a moving violation."
    },
    {
        id: 18,
        question: "On a two-lane road in North Carolina, when a school bus displays flashing red lights and an extended stop arm, what must ALL approaching drivers do — including those coming from the opposite direction?",
        options: ["Slow to 25 mph and pass cautiously", "Only drivers behind the bus must stop", "Stop at least 20 feet from the bus in both directions and wait until the red lights stop flashing", "Stop only if children are visible stepping off the bus"],
        correctAnswer: 2,
        explanation: "On a two-lane road, NC law requires vehicles traveling in BOTH directions to stop at least 20 feet from a school bus with flashing red lights. Wait until the lights stop and the stop arm retracts. On a divided highway, only traffic behind the bus must stop."
    },
    {
        id: 19,
        question: "Before changing lanes on a highway, what must you do?",
        options: ["Honk your horn to alert other drivers", "Signal, check your mirrors, and look over your shoulder to check your blind spot", "Signal for at least 50 feet, then move over", "Only check the side mirror on the side you are moving toward"],
        correctAnswer: 1,
        explanation: "Safe lane changes require three steps: signal your intent, check both mirrors for traffic, then turn your head to check the blind spot — the area your mirrors cannot capture. Many crashes happen when drivers rely on mirrors alone. Always physically check the blind spot before moving."
    },
    {
        id: 20,
        question: "You are driving in the right lane and a vehicle is trying to merge from an on-ramp. What is the safest action?",
        options: ["Hold your speed — merging vehicles are required to yield", "Move to the left lane if safe, or adjust your speed to allow a smooth merge", "Brake sharply to stop and let the vehicle merge", "Accelerate past the merge point before the vehicle can enter"],
        correctAnswer: 1,
        explanation: "While merging vehicles must legally yield, the safest practice is to assist by moving left or adjusting your speed. This prevents dangerous forced merges and is the defensive driving approach. Being legally right in a crash does not undo the damage."
    },
    {
        id: 21,
        question: "In North Carolina, turning right on a red light is:",
        options: ["Always prohibited statewide", "Permitted after a complete stop unless a sign prohibits it", "Permitted without stopping if no traffic is present", "Only allowed between 7 AM and 9 PM"],
        correctAnswer: 1,
        explanation: "Right turns on red are permitted in NC after a complete stop, yielding to pedestrians and cross traffic, and only when no 'No Turn on Red' sign is posted. Some busy intersections do prohibit it — always look for the sign."
    },
    {
        id: 22,
        question: "You arrive at an intersection with a flashing red traffic light. What must you do?",
        options: ["Slow down and proceed if the intersection looks clear", "Stop completely, yield to traffic and pedestrians, then proceed when safe", "Treat it like a yield sign — slow and merge if clear", "Wait until the light returns to normal operation"],
        correctAnswer: 1,
        explanation: "A flashing red light is treated exactly like a stop sign: come to a complete stop, look in all directions, yield to existing traffic and pedestrians, then proceed when safe. A flashing yellow is different — it means slow and proceed with caution without a full stop."
    },
    {
        id: 23,
        question: "What does a flashing yellow traffic signal mean?",
        options: ["Stop and wait for the green light", "The intersection is temporarily closed", "Slow down and proceed with caution", "All cross traffic has the right of way — yield completely"],
        correctAnswer: 2,
        explanation: "A flashing yellow is a caution signal — reduce your speed and stay alert, but a full stop is not required (unlike a flashing red). Scan for crossing traffic and pedestrians before entering the intersection."
    },
    {
        id: 24,
        question: "What does a yellow diamond-shaped sign indicate?",
        options: ["A traffic regulation you must obey", "A warning about a hazard or change in road conditions ahead", "Nearby services such as fuel, food, or lodging", "A construction zone requiring a reduced speed"],
        correctAnswer: 1,
        explanation: "Yellow diamond signs are warning signs that alert you to conditions ahead — curves, narrow bridges, merging traffic, pedestrian crossings, and more. They do not create legal obligations the way regulatory signs do, but ignoring them is dangerous. Regulatory signs are typically white rectangles or circles with red."
    },
    {
        id: 25,
        question: "North Carolina's implied consent law means that by driving on NC roads, you have:",
        options: ["Consented to your vehicle being searched at any time", "Agreed to always wear a seatbelt", "Agreed to submit to a chemical test (breath, blood, or urine) if an officer suspects DWI", "Agreed to stop at all highway weigh stations"],
        correctAnswer: 2,
        explanation: "Under NC's implied consent law (G.S. 20-16.2), driving on NC roads means you have automatically consented to chemical testing if an officer has reasonable grounds to suspect DWI. Refusing results in an immediate 30-day civil license revocation and the refusal may be used as evidence against you in court."
    }
]
