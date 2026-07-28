import type { Question, StatePermitTestConfig } from '@/components/state-permit-test/types'

export const arkansasPermitTestConfig: StatePermitTestConfig = {
    stateName: 'Arkansas',
    stateCode: 'AR',
    departmentName: 'Arkansas DFA',
    departmentAbbr: 'DFA',
    realQuestionCount: 25,
    realPassCount: 20,
    passPercent: 80,
    retakePolicy: 'Can retake after 1 day if failed',
    mainPageUrl: '/arkansas-dfa-permit-test',
    pageUrl: '/arkansas-dfa-permit-test-25-questions',
    stateGuideUrl: '/state-guides/arkansas',
    handbookUrl: '/handbooks/arkansas',
    year: 2026,
}

export const arkansasPermitTestQuestions: Question[] = [
    {
        id: 1,
        question: "In Arkansas, which state agency administers real estate licenses — the Real Estate or the DFA?",
        options: ["The Department of Motor Vehicles (Real Estate)", "The Department of Finance and Administration (DFA)", "The Department of Transportation (DOT)", "The Department of Public Safety (DPS)"],
        correctAnswer: 1,
        explanation: "Arkansas does not have a Real Estate — real estate licenses are issued by the Department of Finance and Administration (DFA). This is an important state-specific fact that is commonly tested because most states use the 'Real Estate' name."
    },
    {
        id: 2,
        question: "What is the minimum age to apply for a real estate license in Arkansas?",
        options: ["13", "14", "15", "16"],
        correctAnswer: 1,
        explanation: "Arkansas allows teens to apply for a real estate license at age 14, making it one of the youngest permit ages in the nation. The permit requires supervised driving with a licensed adult before advancing to a restricted intermediate license."
    },
    {
        id: 3,
        question: "Arkansas's zero tolerance law for drivers under 21 sets the illegal BAC at:",
        options: ["0.00%", "0.02%", "0.04%", "0.08%"],
        correctAnswer: 1,
        explanation: "Arkansas sets the underage DUI threshold at 0.02% BAC. A driver under 21 with a BAC of 0.02% or higher faces license suspension and criminal penalties. This threshold is lower than the adult standard of 0.08%."
    },
    {
        id: 4,
        question: "What is the legal BAC limit for a driver age 21 or older in Arkansas?",
        options: ["0.04%", "0.06%", "0.08%", "0.10%"],
        correctAnswer: 2,
        explanation: "Arkansas, like all U.S. states, sets the per se DUI limit at 0.08% BAC for drivers 21 and older. Commercial drivers face a stricter 0.04% limit. A BAC of 0.08% or higher is grounds for a DUI charge regardless of visible impairment."
    },
    {
        id: 5,
        question: "You are driving on an Arkansas rural highway with no posted speed limit sign. What is the default maximum speed?",
        options: ["45 mph", "55 mph", "60 mph", "65 mph"],
        correctAnswer: 1,
        explanation: "The default speed limit on rural Arkansas highways without posted limits is 55 mph. On interstate highways the limit is higher — but rural two-lane roads default to 55 mph when no sign is present."
    },
    {
        id: 6,
        question: "Under Arkansas's Graduated Driver Licensing (GDL) program, how long must a real estate license holder maintain a clean driving record before they can apply for an intermediate license?",
        options: ["30 days", "3 months", "6 months", "1 year"],
        correctAnswer: 2,
        explanation: "Under Arkansas's GDL program, a teen holding a real estate license must maintain a completely clean driving record (no traffic violations or at-fault crashes) for at least 6 months before they are eligible to upgrade to a Stage 2 Intermediate License."
    },
    {
        id: 7,
        question: "You are at a 4-way stop and arrive at the same time as a driver on your right. Who has the right of way?",
        options: ["You have the right of way because you are on the left", "The driver on your right has the right of way", "The driver traveling straight has the right of way", "The driver traveling faster has the right of way"],
        correctAnswer: 1,
        explanation: "When two vehicles arrive at a 4-way stop simultaneously, the vehicle on the right has the right of way. This rule applies in Arkansas and across the United States — always yield to the driver on your right in a tie situation."
    },
    {
        id: 8,
        question: "What does a flashing red traffic signal mean in Arkansas?",
        options: ["Slow down and proceed with caution", "Stop completely, yield, then proceed when safe — same as a stop sign", "The intersection is temporarily closed", "Yield only to pedestrians"],
        correctAnswer: 1,
        explanation: "A flashing red signal must be treated as a stop sign in Arkansas. Come to a complete stop, yield to traffic and pedestrians, and proceed only when the way is clear. A flashing yellow signal means caution — slow down but a full stop is not required."
    },
    {
        id: 9,
        question: "Under Arkansas law, which passengers in a vehicle must wear a seatbelt?",
        options: ["Only the driver", "Driver and front-seat passengers only", "All occupants of the vehicle", "Only passengers under age 18"],
        correctAnswer: 2,
        explanation: "Arkansas requires all vehicle occupants — front and rear — to wear a seatbelt. The law is primary enforcement, meaning an officer can stop a vehicle solely for a seatbelt violation without needing any other reason."
    },
    {
        id: 10,
        question: "What is the speed limit in a school zone in Arkansas when warning lights are flashing and children are present?",
        options: ["10 mph", "15 mph", "20 mph", "25 mph"],
        correctAnswer: 3,
        explanation: "In Arkansas, the statutory school zone speed limit is 25 miles per hour when children are present or warning lights are flashing, unless a different limit is posted."
    },
    {
        id: 11,
        question: "Under Arkansas's GDL program, a driver with an intermediate license (age 16-17) is restricted to carrying how many unrelated minor passengers?",
        options: ["No minor passengers at all.", "Only one unrelated minor passenger.", "Up to three unrelated minor passengers.", "No passengers under 21 who are not family."],
        correctAnswer: 1,
        explanation: "Under Arkansas law, a driver with an intermediate license (ages 16 to 17) is restricted to carrying no more than one unrelated minor passenger (under age 18) unless accompanied by a licensed driver age 21 or older."
    },
    {
        id: 12,
        question: "You are driving on an Arkansas highway and see an emergency vehicle pulled over with flashing lights. What does the Move Over law require?",
        options: ["Honk to alert the workers and maintain speed", "Move over one lane if safe; if not, slow to a safe speed", "Stop completely and wait for the emergency vehicle to move", "Move over only for police vehicles — not tow trucks or utility vehicles"],
        correctAnswer: 1,
        explanation: "Arkansas's Move Over law requires drivers to move one lane away from any stopped emergency, law enforcement, or highway maintenance vehicle with flashing lights. If a lane change is not safely possible, slow to a speed safe for conditions."
    },
    {
        id: 13,
        question: "You are about to enter a highway on-ramp. What should you do to merge safely?",
        options: ["Stop at the end of the on-ramp and wait for a gap in traffic", "Match the speed of highway traffic and merge smoothly into an available gap", "Force your way in by gradually moving into the lane", "Signal and immediately enter the highway regardless of traffic speed"],
        correctAnswer: 1,
        explanation: "Merging onto a highway requires accelerating to match the flow of traffic in the target lane before merging. Stopping at the end of a ramp is dangerous because highway traffic does not expect a stationary vehicle; smooth speed-matching is the correct technique."
    },
    {
        id: 14,
        question: "On a two-lane road in Arkansas, when may you pass another vehicle using the left lane?",
        options: ["Anytime you think you can complete the pass quickly", "Only when a dashed yellow center line is on your side of the road", "Only on rural highways where the speed limit is 55 mph or higher", "Whenever the road ahead appears clear for at least 100 feet"],
        correctAnswer: 1,
        explanation: "Passing is permitted only when a dashed yellow center line is on your side of the road, indicating the road ahead is clear enough to pass. A solid yellow line on your side prohibits crossing the center line to pass."
    },
    {
        id: 15,
        question: "What is the default speed limit on urban streets in Arkansas when no speed limit sign is posted?",
        options: ["25 mph", "30 mph", "35 mph", "40 mph"],
        correctAnswer: 1,
        explanation: "Arkansas sets the default urban speed limit at 30 mph when no other limit is posted. This applies to city streets and business districts. Residential neighborhood streets may be posted lower — always check for posted signs."
    },
    {
        id: 16,
        question: "In Arkansas, what is the minimum distance you must signal before turning or changing lanes?",
        options: ["50 feet", "100 feet", "200 feet", "300 feet"],
        correctAnswer: 1,
        explanation: "Arkansas law requires drivers to signal at least 100 feet before turning or changing lanes. Signaling well in advance gives other drivers time to react and reduces the risk of rear-end or side-swipe collisions."
    },
    {
        id: 17,
        question: "You are driving in heavy rain on an Arkansas highway and your vehicle starts to hydroplane. What should you do?",
        options: ["Brake hard to regain tire contact with the road", "Accelerate to power through the water", "Ease off the gas and hold the steering wheel steady until tires regain traction", "Turn the steering wheel sharply to redirect the vehicle"],
        correctAnswer: 2,
        explanation: "When hydroplaning, ease off the accelerator and hold the wheel steady — do not brake hard or turn sharply, as these actions can cause loss of control. The tires will regain contact once speed decreases. Driving at a lower speed in heavy rain prevents most hydroplaning."
    },
    {
        id: 18,
        question: "Under Arkansas's GDL program, intermediate license holders (age 16-17) are prohibited from operating a vehicle between which hours?",
        options: ["10:00 PM and 5:00 AM", "11:00 PM and 4:00 AM", "Midnight and 6:00 AM", "Midnight and 5:00 AM"],
        correctAnswer: 1,
        explanation: "Under Arkansas GDL restrictions, drivers with an intermediate license (ages 16 to 17) cannot operate a vehicle between 11:00 PM and 4:00 AM, unless accompanied by a licensed driver age 21 or older, or traveling to/from work, school, or church activities."
    },
    {
        id: 19,
        question: "Under Arkansas implied consent law, a driver suspected of DUI who refuses a chemical test will:",
        options: ["Face no penalty — refusal is a constitutional right", "Have their license suspended for 6 months on first refusal", "Only be penalized if convicted of DUI", "Receive only a small fine"],
        correctAnswer: 1,
        explanation: "Arkansas's implied consent law means that by driving on public roads, you have consented to chemical testing. A first-offense refusal results in a 6-month license suspension that is separate from any DUI conviction. The refusal may also be used as evidence against you in court."
    },
    {
        id: 20,
        question: "You are driving in Arkansas and see a solid white line on the right edge of the road. What does it indicate?",
        options: ["The right edge of the travel lane — do not cross except to turn or park", "A bike lane you may use if no cyclists are present", "The boundary of a construction zone", "A no-parking zone"],
        correctAnswer: 0,
        explanation: "A solid white line marks the right edge of the travel lane. You should not cross it except when turning, parking, or in an emergency. Edge lines help drivers stay in their lane in poor visibility conditions."
    },
    {
        id: 21,
        question: "What must you do before backing out of a parking space in a crowded parking lot?",
        options: ["Honk twice and begin backing", "Check mirrors, turn to look behind you, back slowly while watching all directions", "Back quickly to minimize time in the travel lane", "Signal and rely entirely on mirrors"],
        correctAnswer: 1,
        explanation: "Before and while backing, Arkansas drivers should check all mirrors and physically turn to look through the rear window. Back slowly while continuously checking all directions — parking lots have pedestrians, shopping carts, and other vehicles that mirrors alone may not reveal."
    },
    {
        id: 22,
        question: "When approaching a railroad crossing with no active warning signals (such as lights or gates), what is a driver required to do?",
        options: ["Always come to a complete stop before crossing.", "Slow down, look, and listen, and stop only if a train is approaching.", "Proceed at normal speed without checking."],
        correctAnswer: 1,
        explanation: "At passive railroad crossings (which have crossbucks but no flashing lights or gates), you should slow down, look, and listen in both directions. You are only required to stop if a train is approaching or a signal is active."
    },
    {
        id: 23,
        question: "What is the recommended following distance under normal driving conditions in Arkansas?",
        options: ["One second", "Two seconds", "Three seconds", "Four seconds"],
        correctAnswer: 1,
        explanation: "The Arkansas Driver's Manual recommends using the \"two-second rule\" as a safe following distance behind the vehicle in front of you under normal driving conditions."
    },
    {
        id: 24,
        question: "You see a pedestrian using a white cane or guide dog at a crosswalk. What must you do in Arkansas?",
        options: ["Slow to 10 mph and pass carefully", "Yield the right of way completely and stop until the pedestrian has crossed", "Honk to alert the pedestrian you are there, then proceed", "Yield only if the pedestrian is in your direct lane"],
        correctAnswer: 1,
        explanation: "Arkansas law requires drivers to yield completely to any pedestrian using a white cane or guide dog — these individuals are visually impaired. Come to a full stop and do not proceed until the pedestrian has safely cleared the roadway."
    },
    {
        id: 25,
        question: "What is the penalty for a first-time DUI conviction in Arkansas for an adult driver?",
        options: ["A written warning with no license action", "License suspension, fines, and possible jail time", "A fine only — no license penalty on the first offense", "Community service only"],
        correctAnswer: 1,
        explanation: "A first DUI conviction in Arkansas results in license suspension of 6 months, fines up to $1,000, and possible jail time of 24 hours to 1 year. The penalties increase significantly for subsequent offenses or if a minor was in the vehicle."
    },
]

export const arkansasPermitTestFaq: { question: string; answer: string }[] = [
    {
        question: "How many questions are on the Arkansas DFA permit test?",
        answer: "The Arkansas Department of Finance and Administration (DFA) knowledge test has 25 multiple-choice questions. You need to answer at least 20 correctly (80%) to pass."
    },
    {
        question: "What score do you need to pass the Arkansas permit test?",
        answer: "You need 20 out of 25 questions correct — a passing score of 80%. Missing 6 or more questions means you fail."
    },
    {
        question: "How many questions can you miss on the Arkansas DFA test?",
        answer: "You can miss up to 5 questions on the 25-question knowledge test. Missing 6 or more means you fail and must wait 1 day before retaking."
    },
    {
        question: "Is there a time limit on the Arkansas permit test?",
        answer: "No. The Arkansas DFA does not impose a time limit on the knowledge test. Take your time with each question, but avoid second-guessing yourself excessively."
    },
    {
        question: "What is the retake policy if I fail the Arkansas permit test?",
        answer: "If you fail, you must wait 1 day before retaking the test. Use that time to review the questions you missed. Consistently scoring 90%+ on practice tests before your appointment is the best strategy."
    },
    {
        question: "Can I take the Arkansas permit test online?",
        answer: "No. As of 2026, all Arkansas DFA knowledge tests must be taken in person at an Arkansas Revenue Office."
    },
    {
        question: "What is the minimum age to get a real estate license in Arkansas?",
        answer: "Arkansas allows teens to apply for a real estate license at age 14, one of the youngest permit ages in the United States. Permit holders must drive supervised by a licensed adult before advancing to a Stage 2 intermediate license."
    },
    {
        question: "What is Arkansas's zero tolerance law for underage drivers?",
        answer: "Arkansas's zero tolerance law makes it illegal for drivers under 21 to operate a vehicle with a BAC of 0.02% or higher. Even a small amount of alcohol can result in license suspension and criminal penalties for underage drivers."
    },
]
