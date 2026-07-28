import type { Question, StatePermitTestConfig } from '@/components/state-permit-test/types'

export const southDakotaPermitTestConfig: StatePermitTestConfig = {
    stateName: 'South Dakota',
    stateCode: 'SD',
    departmentName: 'South Dakota DPS',
    departmentAbbr: 'DPS',
    realQuestionCount: 25,
    realPassCount: 20,
    passPercent: 80,
    retakePolicy: 'Can retake after 1 day if failed',
    mainPageUrl: '/south-dakota-dps-permit-test',
    pageUrl: '/south-dakota-dps-permit-test-25-questions',
    stateGuideUrl: '/state-guides/south-dakota',
    handbookUrl: '/handbooks/south-dakota',
    year: 2026,
}

export const southDakotaPermitTestQuestions: Question[] = [
    {
        id: 1,
        question: "South Dakota is one of only a few states where a teenager can apply for a real estate license at age 14. What type of permit is issued at age 14 in South Dakota?",
        options: ["A full real estate license with no restrictions", "A restricted minor's permit for driving to school only", "A minor's permit allowing supervised driving practice", "No permit is available at 14 — minimum age is 15"],
        correctAnswer: 2,
        explanation: "South Dakota allows teenagers to apply for a minor's permit at age 14, making it one of the youngest permit ages in the US. At 14, the permit holder may only drive with a licensed adult who is at least 18 years old in the front seat. This reflects South Dakota's rural character where teens often need to drive to assist with farm and family duties."
    },
    {
        id: 2,
        question: "What is the legal BAC limit for drivers age 21 and older in South Dakota?",
        options: ["0.04%", "0.06%", "0.08%", "0.10%"],
        correctAnswer: 2,
        explanation: "South Dakota sets the per se DUI limit at 0.08% BAC for drivers 21 and older. Commercial vehicle operators face a stricter 0.04% limit. A BAC of 0.08% alone is sufficient grounds for a DUI charge regardless of apparent impairment."
    },
    {
        id: 3,
        question: "You are driving on a rural South Dakota road during harvest season and encounter slow-moving farm equipment. What is the legal maximum speed for farm equipment on South Dakota roads?",
        options: ["15 mph", "25 mph", "35 mph", "45 mph"],
        correctAnswer: 1,
        explanation: "Farm equipment is common on South Dakota rural roads, especially during planting and harvest seasons. Such equipment is typically limited to 25 mph or less. When approaching slow-moving vehicles displaying an orange triangle (slow-moving vehicle emblem), reduce speed early and pass only when it is safe to do so with adequate sight distance."
    },
    {
        id: 4,
        question: "What does an orange triangular emblem on the back of a slow-moving vehicle mean?",
        options: ["The vehicle is a school bus — stop when lights flash", "The vehicle travels at 25 mph or less — approach with caution", "The vehicle is authorized to drive on the highway shoulder only", "Hazardous materials are being transported"],
        correctAnswer: 1,
        explanation: "The orange/red slow-moving vehicle (SMV) triangle emblem indicates the vehicle travels at 25 mph or less. This is especially important on South Dakota rural roads where farm tractors, combines, and other agricultural equipment commonly share the road with passenger vehicles. Approach these vehicles with reduced speed and patience."
    },
    {
        id: 5,
        question: "South Dakota's zero tolerance law for drivers under 21 sets the illegal BAC at:",
        options: ["0.00% — any measurable amount", "0.02%", "0.04%", "0.05%"],
        correctAnswer: 1,
        explanation: "South Dakota's zero tolerance law sets a BAC threshold of 0.02% for drivers under 21. Any BAC at or above 0.02% results in DUI charges for underage drivers. This is designed to deter any drinking before driving by persons under the legal drinking age."
    },
    {
        id: 6,
        question: "What is the maximum speed limit on South Dakota rural interstate highways?",
        options: ["65 mph", "70 mph", "75 mph", "80 mph"],
        correctAnswer: 2,
        explanation: "South Dakota allows a maximum speed of 75 mph on rural interstate highways for passenger vehicles. Trucks are subject to lower limits. South Dakota's wide-open spaces and straight highways make it one of the states with higher speed limits, but drivers must still adjust speed for conditions including weather, traffic, and road surface."
    },
    {
        id: 7,
        question: "Under South Dakota's GDL program, a minor's permit holder (age 14–15) must have a licensed adult present while driving. This adult must be:",
        options: ["Any person age 18 or older with a valid license", "A parent or legal guardian only", "A licensed driving instructor only", "A licensed driver age 18 or older seated in the front passenger area"],
        correctAnswer: 3,
        explanation: "When a minor's permit holder (age 14–15) is driving, a licensed driver who is at least 18 years old must be seated in the front seat alongside them. This supervisor must hold a valid real estate license. After turning 16 and passing the driving skills test, the minor can advance to a restricted minor's license."
    },
    {
        id: 8,
        question: "You are driving on a South Dakota gravel road — common across the state — and your vehicle begins to skid on loose gravel. What is the correct response?",
        options: ["Brake hard immediately to stop the skid", "Accelerate to regain traction", "Ease off the accelerator gently and steer in the direction you want to go", "Turn the steering wheel sharply in the opposite direction of the skid"],
        correctAnswer: 2,
        explanation: "On loose gravel — extremely common on South Dakota rural roads — skid recovery requires gently easing off the accelerator and steering smoothly in the direction you want to travel. Sudden braking or sharp steering inputs worsen skids on loose surfaces. Slow down before gravel sections, not during them."
    },
    {
        id: 9,
        question: "South Dakota has vast open range areas where livestock may be on or near the road. When you see a 'Open Range' or livestock warning sign, you should:",
        options: ["Continue at normal speed — livestock are not your legal concern", "Reduce speed and be prepared to stop for animals on the roadway", "Sound your horn to scare animals away from the road", "Stop completely and wait for animals to clear on their own"],
        correctAnswer: 1,
        explanation: "South Dakota's open range laws allow livestock to roam freely, meaning animals may be on or near the road at any time. When you see open range or livestock warning signs, reduce your speed and be prepared to stop. In South Dakota, the driver (not the rancher) is responsible for avoiding collisions with livestock on open range land."
    },
    {
        id: 10,
        question: "What is the default speed limit on South Dakota residential streets when no speed limit sign is posted?",
        options: ["15 mph", "25 mph", "30 mph", "35 mph"],
        correctAnswer: 1,
        explanation: "South Dakota's default speed limit in urban and residential areas is 25 mph when no other speed limit is posted. Always check posted signs — school zones and areas near parks typically have lower limits. In rural areas without posted signs, the default is 55 mph."
    },
    {
        id: 11,
        question: "When approaching a school bus with flashing red lights and a stop arm extended on a South Dakota road, traffic in both directions must stop at least:",
        options: ["10 feet from the bus", "20 feet from the bus", "30 feet from the bus", "50 feet from the bus"],
        correctAnswer: 1,
        explanation: "South Dakota law requires vehicles traveling in both directions on an undivided road to stop at least 20 feet from a school bus with activated red lights. Do not proceed until the lights stop flashing and the arm retracts. On a divided highway with a median, only traffic behind the bus must stop."
    },
    {
        id: 12,
        question: "You are approaching a railroad crossing with flashing lights and a lowered gate. What must you do?",
        options: ["Slow to 15 mph and look carefully before crossing", "Stop at least 15 feet before the gate and wait until the train has completely passed and gates have fully risen", "Wait for the flashing lights to stop, then proceed even if the gate is still partially down", "Proceed if you can see the train is more than a quarter mile away"],
        correctAnswer: 1,
        explanation: "When a railroad crossing has activated flashing lights and/or a lowered gate, you must stop at least 15 feet from the nearest rail and wait until the train has completely passed and the gate has fully risen before crossing. Never try to race a train or cross while the gate is descending or rising."
    },
    {
        id: 13,
        question: "South Dakota's Move Over law requires drivers approaching a stopped emergency or law enforcement vehicle with flashing lights to:",
        options: ["Slow to 15 mph regardless of the posted speed limit", "Move to the farthest available lane from the stopped vehicle, or slow significantly if lane change is not safe", "Stop completely until the emergency vehicle leaves", "Only yield if the vehicle is on the right side of the road"],
        correctAnswer: 1,
        explanation: "South Dakota's Move Over law requires drivers to move to the farthest available lane away from a stopped emergency, law enforcement, or maintenance vehicle with flashing lights. If a lane change is not safely possible, reduce speed significantly. Violating the Move Over law carries steep fines in South Dakota."
    },
    {
        id: 14,
        question: "A flashing red traffic light means:",
        options: ["Slow down and proceed with caution", "Yield to cross traffic but a full stop is not required", "Stop, yield to all traffic and pedestrians, then proceed when safe", "The signal is malfunctioning — treat as a four-way stop with all-way yield"],
        correctAnswer: 2,
        explanation: "A flashing red light is treated exactly like a stop sign in South Dakota. Come to a complete stop, yield to all cross traffic and pedestrians, and proceed only when the intersection is clear. A flashing yellow requires caution and reduced speed, but not a full stop."
    },
    {
        id: 15,
        question: "In South Dakota, when is it legal to pass on the right?",
        options: ["Never — passing on the right is always prohibited", "When the vehicle ahead is making or waiting to make a left turn", "Whenever the lane to the right is clear", "Passing on the right is always legal on two-lane roads"],
        correctAnswer: 1,
        explanation: "Passing on the right is permitted in South Dakota only when the vehicle being passed is making or about to make a left turn, and there is enough paved road to the right to safely pass without leaving the roadway. Passing on a shoulder or unpaved surface is prohibited."
    },
    {
        id: 16,
        question: "What is the recommended following distance under normal driving conditions in South Dakota?",
        options: ["1 second", "2 seconds", "3 seconds", "5 seconds"],
        correctAnswer: 2,
        explanation: "South Dakota recommends a minimum 3-second following distance under normal conditions. On rural highways at higher speeds — common in South Dakota — the 3-second rule should be extended, as reaction distances are greater at 75 mph than at 55 mph. In adverse weather, double your following distance."
    },
    {
        id: 17,
        question: "What should you do when you are driving in blizzard conditions — frequent in South Dakota winters — and visibility drops to near zero?",
        options: ["Use high beams for maximum visibility and continue at reduced speed", "Pull off the road completely, stay in your vehicle, and call for help if needed", "Slow to 15 mph and activate hazard flashers", "Follow closely behind a large truck to use it as a windshield"],
        correctAnswer: 1,
        explanation: "In near-zero-visibility blizzard conditions on South Dakota roads, the safest action is to pull completely off the road (into a rest area, parking lot, or a safe shoulder position), stay in your vehicle with hazard lights on, and wait for conditions to improve. South Dakota's plains are prone to sudden ground blizzards — never attempt to continue driving when you cannot see the road."
    },
    {
        id: 18,
        question: "South Dakota requires headlights to be on:",
        options: ["Only from midnight to 5 AM", "From sunset to sunrise and any time visibility is less than 1,000 feet", "Only during officially declared weather emergencies", "Whenever driving on rural roads, regardless of time"],
        correctAnswer: 1,
        explanation: "South Dakota requires headlights from sunset to sunrise and whenever weather or other conditions reduce visibility to less than 1,000 feet. This includes fog, rain, snow, and dust — all conditions that can occur suddenly on the South Dakota plains. If conditions require wipers, headlights should also be used."
    },
    {
        id: 19,
        question: "In South Dakota, what is the maximum speed limit on most two-lane rural highways?",
        options: ["55 mph", "60 mph", "65 mph", "70 mph"],
        correctAnswer: 2,
        explanation: "South Dakota's maximum speed limit on most rural two-lane highways is 65 mph. On rural interstates, the limit is 75 mph. Always check posted signs — some sections near towns, curves, or construction zones may have lower limits."
    },
    {
        id: 20,
        question: "You are turning left from a two-way street onto another two-way street in South Dakota. Where should your vehicle end up after completing the turn?",
        options: ["In the far right lane of the new street", "In the nearest lane on the right side of the center line", "In any available lane of the new street", "In the left lane of the new street"],
        correctAnswer: 1,
        explanation: "When turning left, you should always turn into the nearest lane on the right side of the center line — i.e., the closest lane going in the new direction. Do not swing wide into another lane. Complete the turn by entering the nearmost lane, then signal and change lanes if needed."
    },
    {
        id: 21,
        question: "When parking on a hill facing downhill with a curb in South Dakota, you should turn your front wheels:",
        options: ["Away from the curb (left)", "Toward the curb (right)", "Straight — parallel to the curb", "Toward the center of the road"],
        correctAnswer: 1,
        explanation: "When parking downhill with a curb, turn your front wheels toward the curb (right). If your brakes fail, the vehicle will roll forward and the tire will contact the curb, preventing the car from rolling into traffic. Remember: downhill = toward the curb; uphill = away from the curb (or toward the shoulder if no curb)."
    },
    {
        id: 22,
        question: "What does a solid white line between lanes on a highway indicate?",
        options: ["Passing is prohibited — lane changes are not permitted", "Discourage lane changes but do not prohibit them in most situations", "The start of a carpool or HOV lane", "A bicycle lane boundary"],
        correctAnswer: 1,
        explanation: "A solid white line between lanes discourages lane changes but generally does not prohibit them in the way a solid yellow center line prohibits passing. You may cross a solid white lane line when necessary, but do so with caution. Solid white lines near intersections or at on-ramps are stricter lane boundaries."
    },
    {
        id: 23,
        question: "Implied consent laws in South Dakota mean that any driver suspected of DUI who refuses a chemical test will:",
        options: ["Face no consequences — refusal is a protected right", "Automatically lose their license for a period and face additional penalties", "Only be fined but not lose their license", "Only face penalties if later convicted of DUI"],
        correctAnswer: 1,
        explanation: "South Dakota's implied consent law means that by driving on state roads, you have consented to chemical testing if suspected of DUI. Refusing results in automatic license revocation — 1 year for a first offense — and the refusal can be presented as evidence in court. Refusal rarely helps a driver and often makes the situation worse."
    },
    {
        id: 24,
        question: "South Dakota has many gravel and unpaved county roads. When transitioning from a paved road to gravel, you should:",
        options: ["Maintain your speed to keep momentum", "Accelerate slightly to improve traction", "Reduce speed before the transition and increase following distance", "Only reduce speed if the speed limit sign changes"],
        correctAnswer: 2,
        explanation: "Gravel roads have significantly less traction than paved roads, especially when wet or loose. Reduce your speed before transitioning to gravel, and increase your following distance. Stopping distances on gravel are much longer than on pavement, and steering control is reduced at higher speeds on loose surfaces."
    },
    {
        id: 25,
        question: "You are driving at night on a South Dakota rural highway and see an animal's eyes reflecting in your headlights ahead. What is the best response?",
        options: ["Flash your high beams rapidly to scare the animal away", "Brake hard and lean on the horn", "Reduce speed, cover the brake, and be prepared to stop — do not swerve sharply", "Swerve around the animal at full speed to avoid it"],
        correctAnswer: 2,
        explanation: "South Dakota's rural roads have significant wildlife — deer, pronghorn, and even livestock. When you see eyes reflecting in your headlights, reduce speed immediately and cover the brake (rest your foot over the brake pedal without pressing). Avoid sharp swerving, which can cause you to lose control or roll over. Slow, controlled braking is safer than a sudden swerve."
    },
]

export const southDakotaPermitTestFaq: { question: string; answer: string }[] = [
    {
        question: "How many questions are on the South Dakota DPS permit test?",
        answer: "The South Dakota Department of Public Safety (DPS) knowledge test has 25 multiple-choice questions. You need to answer at least 20 correctly (80%) to pass."
    },
    {
        question: "What score do you need to pass the South Dakota permit test?",
        answer: "You need 20 out of 25 questions correct — a passing score of 80%. Missing 6 or more questions means you fail and must wait 1 day before retaking."
    },
    {
        question: "How many questions can you miss on the South Dakota DPS test?",
        answer: "You can miss up to 5 questions on the 25-question knowledge test. Missing 6 or more means you fail."
    },
    {
        question: "Is there a time limit on the South Dakota permit test?",
        answer: "No. The South Dakota DPS does not impose a strict time limit on the knowledge test. Take your time on each question."
    },
    {
        question: "What is the retake policy if I fail the South Dakota permit test?",
        answer: "If you fail, you must wait 1 day before retaking. Use that time to review areas where you struggled. Consistently scoring 90%+ on practice tests is the best preparation."
    },
    {
        question: "Can I take the South Dakota permit test online?",
        answer: "No. As of 2026, the South Dakota DPS knowledge test must be taken in person at a driver licensing station. You can find locations and information on the South Dakota DPS website."
    },
    {
        question: "What is the minimum age to get a real estate license in South Dakota?",
        answer: "South Dakota allows teenagers to apply for a minor's permit at age 14 — one of the youngest permit ages in the US. At age 14, driving is only permitted with a licensed adult (18+) in the front seat. At 16, after passing the skills test, a restricted minor's license is available. A full unrestricted license is available at age 18 (or 16 with a real estate exam prep course completion)."
    },
    {
        question: "What are South Dakota's open range laws and how do they affect drivers?",
        answer: "South Dakota has open range areas where livestock may legally roam freely onto public roads. In these areas, drivers — not ranchers — are legally responsible for avoiding collisions with livestock. When driving on rural South Dakota roads, especially those marked with livestock warning signs, reduce your speed and watch carefully for animals on or near the road, especially at dawn, dusk, and night."
    },
]
