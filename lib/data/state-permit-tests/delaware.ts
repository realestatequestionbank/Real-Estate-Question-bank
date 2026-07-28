import type { Question, StatePermitTestConfig } from '@/components/state-permit-test/types'

export const delawarePermitTestConfig: StatePermitTestConfig = {
    stateName: 'Delaware',
    stateCode: 'DE',
    departmentName: 'Delaware Real Estate',
    departmentAbbr: 'Real Estate',
    realQuestionCount: 30,
    realPassCount: 24,
    passPercent: 80,
    retakePolicy: 'Can retake after 1 day if failed',
    mainPageUrl: '/delaware-real-estate-permit-test',
    pageUrl: '/delaware-real-estate-permit-test-30-questions',
    stateGuideUrl: '/state-guides/delaware',
    handbookUrl: '/handbooks/delaware',
    year: 2026,
}

export const delawarePermitTestQuestions: Question[] = [
    {
        id: 1,
        question: "Delaware is known as the 'First State' partly because it was first to ratify the U.S. Constitution. Delaware also had one of the nation's first comprehensive seat belt laws. Which occupants must wear a seatbelt in Delaware today?",
        options: ["Only the driver", "Driver and front-seat passengers only", "All occupants in the vehicle", "Only passengers under age 18"],
        correctAnswer: 2,
        explanation: "Delaware requires all vehicle occupants — front and rear — to wear a seatbelt. Delaware has primary enforcement, meaning officers can stop a vehicle solely for a seatbelt violation. Delaware's early adoption of comprehensive seatbelt laws reflects its historical role as a legislative pioneer."
    },
    {
        id: 2,
        question: "What is the minimum age to apply for a real estate license in Delaware?",
        options: ["14", "15", "15 and a half", "16"],
        correctAnswer: 3,
        explanation: "Delaware requires applicants to be at least 16 years old to apply for a real estate license. This is older than many states that allow permits at 15 or 15½. After holding the permit for 6 months and meeting supervised driving requirements, they can apply for a Level 2 license."
    },
    {
        id: 3,
        question: "What is the legal BAC limit for adult drivers (age 21+) in Delaware?",
        options: ["0.04%", "0.06%", "0.08%", "0.10%"],
        correctAnswer: 2,
        explanation: "Delaware's per se DUI limit is 0.08% BAC for adult drivers. Commercial drivers face a 0.04% limit. A BAC of 0.08% or higher is sufficient for a DUI charge regardless of apparent impairment."
    },
    {
        id: 4,
        question: "Under Delaware's zero tolerance law, the illegal BAC for drivers under 21 is:",
        options: ["0.00%", "0.02%", "0.04%", "0.08%"],
        correctAnswer: 1,
        explanation: "Delaware sets the underage DUI threshold at 0.02% BAC. A driver under 21 with a BAC at or above 0.02% faces license revocation and criminal penalties. This effectively makes any alcohol consumption illegal before driving for underage drivers."
    },
    {
        id: 5,
        question: "Under Delaware's GDL program, how many hours of supervised driving must a Level 1 permit holder complete before applying for a Level 2 license?",
        options: ["20 hours including 5 at night", "30 hours including 10 at night", "40 hours including 10 at night", "50 hours including 10 at night"],
        correctAnswer: 3,
        explanation: "Delaware requires 50 hours of supervised driving practice, including at least 10 hours at night, before a Level 1 permit holder can apply for a Level 2 restricted license. This practice must be certified by a parent or legal guardian."
    },
    {
        id: 6,
        question: "What is the default speed limit on most urban streets in Delaware when no speed limit sign is posted?",
        options: ["20 mph", "25 mph", "30 mph", "35 mph"],
        correctAnswer: 1,
        explanation: "Delaware's default speed limit in urban areas is 25 mph where no limit is posted. Always check for posted signs — many streets have limits that differ from the default, and school zones have even lower limits when active."
    },
    {
        id: 7,
        question: "In Delaware, what does the GDL nighttime restriction require for Level 2 (restricted) license holders under 18?",
        options: ["No nighttime restriction applies", "No driving between 10 PM and 6 AM", "No driving between midnight and 5 AM", "No driving after 9 PM"],
        correctAnswer: 1,
        explanation: "Delaware Level 2 restricted license holders under 18 may not drive between 10 PM and 6 AM unless accompanied by a licensed adult 25 or older in the front seat, or driving to/from work or school with documentation."
    },
    {
        id: 8,
        question: "What must you do when a school bus stops on a two-lane Delaware road and activates its flashing red lights?",
        options: ["Stop only if driving behind the bus", "Slow to 15 mph and proceed", "Stop in both directions at least 20 feet from the bus until lights stop flashing", "Yield only when children are visible crossing"],
        correctAnswer: 2,
        explanation: "Delaware law requires vehicles in both directions on an undivided road to stop at least 20 feet from a school bus with flashing red lights and extended stop arm. You may not proceed until the lights stop flashing and the arm retracts."
    },
    {
        id: 9,
        question: "What is the speed limit in a Delaware school zone when children are present?",
        options: ["10 mph", "15 mph", "20 mph", "25 mph"],
        correctAnswer: 2,
        explanation: "Delaware school zones have a 20 mph speed limit when children are present or warning lights are active. Slow down well before entering the zone and remain alert for children on or near the roadway."
    },
    {
        id: 10,
        question: "You are driving on a Delaware highway and see an emergency vehicle stopped with flashing lights. What does the Move Over law require?",
        options: ["Slow to 25 mph and maintain your lane", "Move one lane away from the stopped vehicle if safe; if not, slow to a safe speed", "Stop completely until the vehicle moves", "Only move over for police — not tow trucks or utility vehicles"],
        correctAnswer: 1,
        explanation: "Delaware's Move Over law requires drivers to vacate the lane adjacent to any stopped emergency, law enforcement, towing, or highway maintenance vehicle with flashing lights. If a lane change is not safe, slow to a speed that is reasonable for conditions."
    },
    {
        id: 11,
        question: "What is the maximum speed limit on Delaware interstates?",
        options: ["55 mph", "60 mph", "65 mph", "70 mph"],
        correctAnswer: 2,
        explanation: "Delaware's maximum interstate speed limit is 65 mph. Delaware is a small, densely populated state where traffic is heavy near Wilmington and Dover. Urban sections of interstates are often posted at lower limits — always follow posted signs."
    },
    {
        id: 12,
        question: "In Delaware, what does a flashing yellow light mean at an intersection?",
        options: ["Stop completely and yield before proceeding", "Slow down and proceed with caution", "The signal is broken — treat it as a 4-way stop", "Do not enter the intersection under any circumstances"],
        correctAnswer: 1,
        explanation: "A flashing yellow light is a caution indicator in Delaware. Reduce speed and proceed carefully — a full stop is not required (unlike a flashing red, which requires a complete stop). Scan carefully for crossing vehicles and pedestrians."
    },
    {
        id: 13,
        question: "On a two-lane Delaware road, a solid yellow line is on your side of the center. You want to pass the vehicle ahead. You may:",
        options: ["Pass if you can do so in under 5 seconds", "Pass only if the other car is going more than 10 mph under the limit", "Not pass — the solid yellow on your side prohibits crossing the center line", "Pass only if you first signal for 100 feet"],
        correctAnswer: 2,
        explanation: "A solid yellow line on your side of the road is an absolute prohibition on crossing the center line to pass. Wait for a dashed yellow line on your side before attempting to pass."
    },
    {
        id: 14,
        question: "Under Delaware's implied consent law, refusing a chemical test after a DUI stop results in:",
        options: ["No penalty — refusal is a constitutional right", "A 1-year license revocation for first refusal", "Only a fine with no license action", "A warning only on the first offense"],
        correctAnswer: 1,
        explanation: "Delaware's implied consent law means driving on public roads constitutes consent to chemical testing. A first-offense refusal results in a 1-year license revocation separate from any DUI charge. Refusal can also be introduced as evidence against you in court."
    },
    {
        id: 15,
        question: "What is the minimum following distance recommended in Delaware for normal driving conditions?",
        options: ["1 second", "2 seconds", "3 seconds", "4 seconds"],
        correctAnswer: 2,
        explanation: "Delaware recommends a minimum 3-second following distance under normal conditions. In rain, fog, or heavy traffic — common near Delaware's urban corridors — increase to 4–6 seconds. More space equals more reaction time."
    },
    {
        id: 16,
        question: "Can you turn right on a red light in Delaware?",
        options: ["No, right turns on red are prohibited statewide", "Yes, after a complete stop and yielding, unless a sign prohibits it", "Yes, without stopping if no pedestrians are visible", "Only on non-school days between 7 AM and 9 PM"],
        correctAnswer: 1,
        explanation: "Right turns on red are permitted in Delaware after a complete stop and yielding to pedestrians and cross traffic. Always check for 'No Turn on Red' signs before turning."
    },
    {
        id: 17,
        question: "A driver in Delaware is approaching a yield sign. What is required?",
        options: ["Stop completely regardless of traffic", "Slow down and yield to traffic; stop only if necessary", "Maintain speed and merge when safe", "Flash headlights to signal your presence"],
        correctAnswer: 1,
        explanation: "A yield sign requires you to slow down and give the right of way to cross traffic or pedestrians. Stop if necessary to avoid a collision, but a full stop is not required when the way is clear."
    },
    {
        id: 18,
        question: "You are stopped at a Delaware intersection on a red light. The light turns green, but a large truck is still in the intersection. You should:",
        options: ["Honk to alert the truck and proceed — you have a green", "Wait for the intersection to clear completely before entering", "Flash your headlights and move forward", "Change lanes to go around the truck"],
        correctAnswer: 1,
        explanation: "A green light gives you the right of way but does not guarantee the intersection is clear. Delaware's defensive driving principle requires you to ensure the path is fully clear — especially for large vehicles that take longer to clear — before entering."
    },
    {
        id: 19,
        question: "What is the correct action when you see a pedestrian with a visual impairment (white cane or guide dog) at a crosswalk in Delaware?",
        options: ["Slow to 10 mph and pass carefully", "Stop completely and yield the roadway until the pedestrian has crossed safely", "Honk to alert the pedestrian you are there", "Yield only if the pedestrian is in your direct lane"],
        correctAnswer: 1,
        explanation: "Delaware law requires drivers to stop and yield completely to any pedestrian using a white cane or guide dog. These individuals are visually impaired and may not see your vehicle. Do not proceed until the pedestrian has completely and safely crossed."
    },
    {
        id: 20,
        question: "What does the shape and color of a warning sign in Delaware indicate?",
        options: ["Red octagon — stop required", "Yellow diamond — potential hazard ahead", "White rectangle — regulatory rule", "Orange rectangle — construction zone"],
        correctAnswer: 1,
        explanation: "Yellow diamond-shaped signs are warning signs in Delaware and across the United States. They alert drivers to potential hazards ahead — curves, school zones, pedestrian crossings, merges, and more — and require extra alertness and often a reduction in speed."
    },
    {
        id: 21,
        question: "In Delaware, when an emergency vehicle with active lights and siren approaches from behind, you must:",
        options: ["Accelerate to the next intersection and pull off", "Stop immediately in your current lane", "Pull to the right side of the road and stop until it passes", "Move to the left lane and reduce speed"],
        correctAnswer: 2,
        explanation: "Delaware law requires drivers to pull to the right side of the road and stop when an emergency vehicle with active lights and siren approaches from any direction. Remain stopped until the vehicle has fully passed before resuming travel."
    },
    {
        id: 22,
        question: "What is the speed limit on most Delaware rural roads and highways when no sign is posted?",
        options: ["45 mph", "50 mph", "55 mph", "60 mph"],
        correctAnswer: 2,
        explanation: "Delaware's default speed limit on rural roads and highways without a posted limit is 55 mph. Always check for signs — many rural routes have posted limits that may differ from the 55 mph default."
    },
    {
        id: 23,
        question: "You are driving in Delaware and see a flashing red traffic signal. What must you do?",
        options: ["Slow down and proceed with caution", "Come to a complete stop, yield to traffic, then proceed when safe — same as a stop sign", "Treat it as a green light since no cross traffic is using the intersection", "Stop only if another vehicle is approaching from the cross street"],
        correctAnswer: 1,
        explanation: "A flashing red signal must be treated as a stop sign in Delaware. Come to a complete stop, yield to traffic and pedestrians in all directions, and proceed when the way is clear."
    },
    {
        id: 24,
        question: "When parallel parking on a street in Delaware, your wheels must be within how many inches of the curb?",
        options: ["6 inches", "12 inches", "18 inches", "24 inches"],
        correctAnswer: 1,
        explanation: "Delaware law requires parallel-parked vehicles to be within 12 inches of the curb. Parking too far from the curb creates a hazard for passing vehicles and cyclists, and is a citable parking violation."
    },
    {
        id: 25,
        question: "In Delaware, how many feet before a turn must you begin signaling?",
        options: ["50 feet", "100 feet", "200 feet", "300 feet"],
        correctAnswer: 1,
        explanation: "Delaware requires drivers to signal at least 100 feet before turning or changing lanes. Signaling early gives surrounding drivers and pedestrians adequate time to respond. Failing to signal is a moving violation in Delaware."
    },
    {
        id: 26,
        question: "You see a person in a marked crosswalk in Delaware. What must you do?",
        options: ["Slow to 15 mph and proceed if the person is in a different lane", "Stop and remain stopped until the person has completely crossed the road", "Honk once and proceed if the way is clear", "Yield only if they have already begun crossing"],
        correctAnswer: 1,
        explanation: "Delaware law requires drivers to stop and yield the entire roadway to pedestrians in marked crosswalks. You may not proceed until the pedestrian has completely crossed — even if they are in a different lane. Pedestrian right-of-way is absolute in a marked crosswalk."
    },
    {
        id: 27,
        question: "In Delaware, what is the consequence of a first-offense DUI for an adult driver?",
        options: ["Warning letter and fine only", "License revocation, fines, possible jail time, and mandatory alcohol treatment", "Fine only — no license action on a first offense", "Community service only"],
        correctAnswer: 1,
        explanation: "A first DUI conviction in Delaware results in license revocation, fines, possible jail time, and mandatory participation in an alcohol treatment program. Delaware's DUI penalties are designed to deter repeat offenses."
    },
    {
        id: 28,
        question: "On a Delaware multi-lane road, you see a sign that reads 'Keep Right Except to Pass.' This means:",
        options: ["You must always stay in the right lane regardless of speed", "The left lane is reserved for passing only — use the right lane for normal travel", "Right lane is for trucks only", "The sign only applies to drivers below the speed limit"],
        correctAnswer: 1,
        explanation: "Delaware's 'Keep Right Except to Pass' rule requires drivers to use the right lane for normal travel on multi-lane roads and use the left lane only for passing. After passing, return to the right lane. This rule reduces tailgating and road rage on highways."
    },
    {
        id: 29,
        question: "You are approaching a railroad crossing in Delaware with flashing red lights and lowering gates. What must you do?",
        options: ["Stop before the gates fully lower and proceed before a train arrives", "Stop at least 15 feet from the nearest rail and wait until the gates fully rise", "Slow down to 10 mph and proceed quickly before the train arrives", "Stop only if you can actually see a train approaching"],
        correctAnswer: 1,
        explanation: "When railroad crossing lights flash and gates begin lowering, stop at least 15 feet from the nearest rail and wait until the gates fully rise before proceeding. Never try to beat a train — trains cannot stop quickly and impacts are almost always fatal."
    },
    {
        id: 30,
        question: "What is the legal definition of reckless driving in Delaware?",
        options: ["Any speed exceeding the posted limit by 10 mph or more", "Operating a vehicle with willful or wanton disregard for the safety of persons or property", "Any use of a cell phone while driving", "Driving through a school zone above 25 mph"],
        correctAnswer: 1,
        explanation: "Reckless driving in Delaware is defined as operating a vehicle with willful or wanton disregard for the safety of persons or property. It is a criminal offense — not just a traffic ticket — and can result in license suspension, fines, and possible imprisonment."
    },
]

export const delawarePermitTestFaq: { question: string; answer: string }[] = [
    {
        question: "How many questions are on the Delaware Real Estate Exam?",
        answer: "The Delaware Real Estate knowledge test has 30 multiple-choice questions. You need to answer at least 24 correctly (80%) to pass."
    },
    {
        question: "What score do you need to pass the Delaware permit test?",
        answer: "You need 24 out of 30 questions correct — a passing score of 80%. Missing 7 or more questions means you fail."
    },
    {
        question: "How many questions can you miss on the Delaware Real Estate Exam?",
        answer: "You can miss up to 6 questions on the 30-question knowledge test. Missing 7 or more means you fail and must wait 1 day before retaking."
    },
    {
        question: "Is there a time limit on the Delaware permit test?",
        answer: "No. The Delaware Real Estate does not impose a time limit on the knowledge test. Take your time with each question."
    },
    {
        question: "What is the retake policy if I fail the Delaware permit test?",
        answer: "If you fail, you must wait 1 day before retaking. Use that time to review the areas where you missed questions. Scoring 90%+ consistently on practice tests before your appointment gives you the best chance of passing on the first try."
    },
    {
        question: "Can I take the Delaware permit test online?",
        answer: "No. As of 2026, all Delaware Real Estate knowledge tests must be taken in person at a Delaware Real Estate office."
    },
    {
        question: "What is the minimum age to get a real estate license in Delaware?",
        answer: "Delaware requires applicants to be at least 16 years old to apply for a real estate license. After holding it for 6 months and completing 50 hours of supervised driving (10 at night), they can apply for a Level 2 restricted license."
    },
    {
        question: "Why is Delaware called the 'First State' and how does it relate to driving laws?",
        answer: "Delaware was the first state to ratify the U.S. Constitution in 1787 and has historically been a legislative pioneer — including adopting one of the nation's first comprehensive seat belt laws. Today, Delaware requires all vehicle occupants (front and rear) to wear seatbelts under primary enforcement law."
    },
]
