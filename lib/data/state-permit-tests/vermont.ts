import type { Question, StatePermitTestConfig } from '@/components/state-permit-test/types'

export const vermontPermitTestConfig: StatePermitTestConfig = {
    stateName: 'Vermont',
    stateCode: 'VT',
    departmentName: 'Vermont Real Estate',
    departmentAbbr: 'Real Estate',
    realQuestionCount: 20,
    realPassCount: 16,
    passPercent: 80,
    retakePolicy: 'Can retake after 1 day if failed',
    mainPageUrl: '/vermont-real-estate-permit-test',
    pageUrl: '/vermont-real-estate-permit-test-20-questions',
    stateGuideUrl: '/state-guides/vermont',
    handbookUrl: '/handbooks/vermont',
    year: 2026,
}

export const vermontPermitTestQuestions: Question[] = [
    {
        id: 1,
        question: "At what minimum age can a Vermont teenager apply for a real estate license?",
        options: ["14", "15", "15 and a half", "16"],
        correctAnswer: 1,
        explanation: "Vermont allows applicants to apply for a real estate license at age 15. The permit holder may only drive with a licensed adult (age 18 or older) in the front seat at all times. Vermont is a small but rural state, and the 15-year permit age reflects the need for teens in rural areas to drive."
    },
    {
        id: 2,
        question: "What is the legal BAC limit for drivers age 21 and older in Vermont?",
        options: ["0.04%", "0.06%", "0.08%", "0.10%"],
        correctAnswer: 2,
        explanation: "Vermont sets the per se DUI limit at 0.08% BAC for drivers 21 and older. Commercial vehicle drivers face a stricter 0.04% limit. A BAC of 0.08% alone is sufficient for a DUI charge in Vermont regardless of apparent impairment level."
    },
    {
        id: 3,
        question: "Vermont's zero tolerance law for drivers under 21 sets the illegal BAC at:",
        options: ["0.00% — any detectable amount", "0.02%", "0.04%", "0.05%"],
        correctAnswer: 1,
        explanation: "Vermont's zero tolerance law sets an illegal BAC threshold of 0.02% for drivers under 21. Any reading at or above 0.02% results in DUI charges and license suspension for underage drivers. This threshold recognizes that any drinking by minors is illegal and dangerous."
    },
    {
        id: 4,
        question: "What is the maximum speed limit on Vermont's rural highways and interstates?",
        options: ["55 mph", "60 mph", "65 mph", "70 mph"],
        correctAnswer: 2,
        explanation: "Vermont's maximum speed limit on rural interstates and highways is 65 mph. Vermont has lower maximum speeds than many western states, reflecting its smaller, mountainous terrain and more densely populated corridor. Always check posted signs — construction zones and urban sections may have lower limits."
    },
    {
        id: 5,
        question: "Vermont is known for its harsh winters. When driving on snow or ice, you should:",
        options: ["Accelerate more quickly to get through icy patches fast", "Increase following distance to at least 6–8 seconds and reduce speed significantly", "Keep normal following distance but brake harder if needed", "Use high beams for better visibility in snow"],
        correctAnswer: 1,
        explanation: "Vermont's winters require major adjustments to driving. On snow or ice, increase your following distance to 6–8 seconds or more, since stopping distances can be 3–10 times longer on ice. Reduce speed well below the speed limit when roads are slippery. Use low beams in snow — high beams reflect off snowflakes and reduce visibility."
    },
    {
        id: 6,
        question: "Under Vermont's GDL program, a real estate license holder must hold the permit for at least how long before taking the skills test?",
        options: ["3 months", "6 months", "9 months", "12 months"],
        correctAnswer: 0,
        explanation: "Vermont requires real estate license holders to hold the permit for at least 3 months before taking the driving skills test. During this time, teens under 18 must complete at least 40 hours of supervised practice driving, including 10 hours at night. Vermont's 3-month minimum is shorter than some states that require 6 months."
    },
    {
        id: 7,
        question: "A Vermont teen with an operator's license (age 16–17) has a nighttime driving restriction. When may they NOT drive without a licensed supervising adult?",
        options: ["Between 9 PM and 5 AM", "Between 11 PM and 5 AM", "Between midnight and 5 AM", "Between midnight and 6 AM"],
        correctAnswer: 1,
        explanation: "Vermont new driver licensees under 18 may not drive between 11 PM and 5 AM without a licensed adult (18+) in the vehicle. Exceptions include driving to or from employment or a school-sponsored activity. The 11 PM–5 AM curfew applies until the driver turns 18."
    },
    {
        id: 8,
        question: "What is the default speed limit in Vermont on rural roads when no speed limit sign is posted?",
        options: ["45 mph", "50 mph", "55 mph", "60 mph"],
        correctAnswer: 2,
        explanation: "Vermont's default rural road speed limit is 55 mph when no other limit is posted. On Vermont's mountainous rural roads, even 55 mph may be too fast for conditions — always adjust speed for curves, hills, and weather. Many Vermont rural routes are winding two-lane roads where the safe speed is well below 55 mph."
    },
    {
        id: 9,
        question: "Vermont's Move Over law requires drivers approaching a stopped emergency vehicle with activated lights to:",
        options: ["Sound the horn and proceed at normal speed", "Slow to 20 mph regardless of conditions", "Move to the farthest available lane, or slow to a safe speed if lane change is not possible", "Stop completely until the emergency vehicle leaves"],
        correctAnswer: 2,
        explanation: "Vermont's Move Over law requires drivers to move to the lane farthest from a stopped emergency vehicle if possible. If a lane change cannot safely be made, reduce speed to a safe level. Vermont expanded the law to cover tow trucks, highway maintenance vehicles, and utility vehicles — not just police and ambulances."
    },
    {
        id: 10,
        question: "Vermont requires headlights to be on:",
        options: ["Only from midnight to 5 AM", "From sunset to sunrise and when visibility is less than 500 feet", "Only when driving on highways", "Whenever driving outside of Burlington"],
        correctAnswer: 1,
        explanation: "Vermont requires headlights from sunset to sunrise and whenever visibility is reduced to less than 500 feet due to fog, rain, snow, or other conditions. Vermont's frequent foggy mornings in valleys and evening mist make this rule particularly important. If conditions reduce visibility, turn on your headlights."
    },
    {
        id: 11,
        question: "You are approaching a Vermont intersection with a flashing yellow light. You should:",
        options: ["Stop completely before proceeding", "Treat it as a yield sign — slow and yield to cross traffic", "Slow down and proceed with caution", "Stop and wait for a green light"],
        correctAnswer: 2,
        explanation: "A flashing yellow (amber) signal means slow down and proceed with caution. A full stop is not required (unlike a flashing red, which requires a complete stop and yield). Reduce speed, check for cross traffic and pedestrians, and proceed carefully."
    },
    {
        id: 12,
        question: "When must you stop for a school bus in Vermont?",
        options: ["Only when traveling behind the bus in the same direction", "In both directions on undivided roads when red lights are flashing and the arm is extended", "Only when children are visible outside the bus", "Only on school days between 7 AM and 4 PM"],
        correctAnswer: 1,
        explanation: "Vermont requires traffic in both directions on undivided roads to stop for a school bus with activated red lights. Stop at least 25 feet from the bus and remain stopped until the lights stop flashing and the arm retracts. On divided highways with a median, only vehicles behind the bus must stop."
    },
    {
        id: 13,
        question: "What should you do when your vehicle begins to skid on Vermont's icy winter roads?",
        options: ["Brake hard immediately to stop the skid", "Accelerate to regain traction", "Ease off the brake/accelerator, steer smoothly in the direction you want to go, and avoid sudden inputs", "Turn the wheel sharply in the opposite direction of the skid"],
        correctAnswer: 2,
        explanation: "When skidding on ice, ease off all inputs — brake and accelerator — and steer smoothly in the direction you want the front of the car to go. Sudden inputs worsen skids. On front-wheel-drive vehicles, gentle acceleration can help restore traction. Practice in a safe, empty area before Vermont's winter driving season to understand how your vehicle responds."
    },
    {
        id: 14,
        question: "At a Vermont four-way stop, who has the right of way when two cars arrive simultaneously from perpendicular directions?",
        options: ["The car going straight always has priority", "The car on the left yields to the car on the right", "The heavier vehicle has priority", "The car that was there first goes first — if simultaneous, no rule applies"],
        correctAnswer: 1,
        explanation: "Vermont, like all US states, applies the yield-to-the-right rule at four-way stops when two vehicles arrive simultaneously. The driver on the left must yield to the driver on the right. If you are not sure who arrived first, err on the side of caution and yield."
    },
    {
        id: 15,
        question: "Vermont uses implied consent laws. Refusing a chemical test when suspected of DUI in Vermont results in:",
        options: ["No consequence — refusal is a constitutional right", "Automatic license suspension and the refusal can be used as evidence", "A small fine with no license suspension", "Consequences only if later convicted of DUI"],
        correctAnswer: 1,
        explanation: "Vermont's implied consent law means that by driving in the state, you agree to chemical testing if suspected of DUI. Refusing results in automatic license suspension — typically 6 months to 1 year — and the refusal can be admitted as evidence in court. Refusing rarely benefits the driver and often results in harsher penalties."
    },
    {
        id: 16,
        question: "Vermont requires all occupants of a vehicle to wear seatbelts. What is the seatbelt enforcement type in Vermont?",
        options: ["Primary enforcement — police can stop you solely for a seatbelt violation", "Secondary enforcement — police need another reason to pull you over", "Advisory only — no fines are issued", "Required only for front-seat occupants"],
        correctAnswer: 0,
        explanation: "Vermont has primary seatbelt enforcement — officers can pull you over solely for not wearing a seatbelt without needing any other traffic violation as justification. All occupants must be buckled. Vermont also has strict child restraint laws requiring appropriate car seats and boosters based on age, height, and weight."
    },
    {
        id: 17,
        question: "When turning left on a green light in Vermont, you must yield to:",
        options: ["Only vehicles in the opposing left-turn lane", "Oncoming vehicles that are close enough to be a hazard, and pedestrians crossing the street", "Nothing — green light gives you right of way", "Only pedestrians — not oncoming vehicles"],
        correctAnswer: 1,
        explanation: "A circular green light at an intersection permits left turns but does NOT give you right of way over oncoming traffic. You must yield to all oncoming vehicles that are close enough to be a hazard and to pedestrians crossing the street you are turning into. Wait for a gap in oncoming traffic before completing your left turn."
    },
    {
        id: 18,
        question: "Vermont's rural roads frequently have wildlife crossings. When a deer sign is posted, you should:",
        options: ["Continue at normal speed but be prepared to honk if an animal appears", "Reduce speed, especially at dawn and dusk, and scan both sides of the road", "Only slow down during deer hunting season", "Animals are the driver's responsibility — no specific action is required"],
        correctAnswer: 1,
        explanation: "Vermont has a high deer population and significant wildlife crossing activity, especially at dawn and dusk. When you see deer crossing signs, reduce speed and scan both sides of the road — deer often travel in groups, so if one crosses, others may follow. Never swerve sharply for a deer; controlled braking is safer than losing vehicle control."
    },
    {
        id: 19,
        question: "What is the minimum following distance recommended in Vermont under normal conditions?",
        options: ["1 second", "2 seconds", "3 seconds", "4 seconds"],
        correctAnswer: 2,
        explanation: "Vermont recommends a minimum 3-second following distance under normal conditions. In Vermont's winter conditions — snow, ice, or slush — this should increase to 6–10 seconds. Use the 3-second rule: pick a fixed landmark, and when the car ahead passes it, count to 3. If you pass the landmark before reaching 3, you are following too closely."
    },
    {
        id: 20,
        question: "You are driving uphill on a two-lane Vermont mountain road and meet an oncoming vehicle on a narrow section. Who has the right of way?",
        options: ["The vehicle going uphill has the right of way — downhill traffic yields", "The larger vehicle has the right of way", "The vehicle going downhill has the right of way — uphill traffic pulls over", "Whoever is closest to a pullout area must yield"],
        correctAnswer: 0,
        explanation: "On Vermont's narrow mountain roads, the general rule is that uphill traffic has the right of way over downhill traffic. It is harder for an uphill vehicle to back up, and downhill vehicles have more control reversing on a grade. The downhill vehicle should pull over to a safe location to allow the uphill vehicle to pass."
    },
]

export const vermontPermitTestFaq: { question: string; answer: string }[] = [
    {
        question: "How many questions are on the Vermont Real Estate Exam?",
        answer: "The Vermont Real Estate knowledge test has 20 multiple-choice questions. You need to answer at least 16 correctly (80%) to pass."
    },
    {
        question: "What score do you need to pass the Vermont permit test?",
        answer: "You need 16 out of 20 questions correct — a passing score of 80%. Missing 5 or more questions means you fail and must wait 1 day before retaking."
    },
    {
        question: "How many questions can you miss on the Vermont Real Estate Exam?",
        answer: "You can miss up to 4 questions on the 20-question knowledge test. Missing 5 or more means you fail."
    },
    {
        question: "Is there a time limit on the Vermont permit test?",
        answer: "No. The Vermont Real Estate does not impose a time limit on the knowledge test. Take your time on each question."
    },
    {
        question: "What is the retake policy if I fail the Vermont permit test?",
        answer: "If you fail, you must wait 1 day before retaking. Use that time to review the areas where you struggled. Consistently scoring 90%+ on practice tests before your appointment is the best way to pass on your first try."
    },
    {
        question: "Can I take the Vermont permit test online?",
        answer: "No. As of 2026, all Vermont Real Estate knowledge tests must be taken in person at a Vermont Real Estate office. The main Real Estate office is in Montpelier, with satellite offices across the state."
    },
    {
        question: "What is the minimum age to get a real estate license in Vermont?",
        answer: "You must be at least 15 years old to apply for a Vermont real estate license. After holding the permit for at least 3 months and completing 40 hours of supervised driving (including 10 hours at night), you can apply for a Vermont operator's license. Until age 18, you must hold a graduated license with nighttime and passenger restrictions."
    },
    {
        question: "What is Vermont's nighttime driving curfew for teen drivers?",
        answer: "Vermont new driver licensees under age 18 may not drive between 11 PM and 5 AM unless accompanied by a licensed adult (18+) in the vehicle. Exceptions include traveling to or from work or a school-sponsored activity. Vermont also restricts new teen drivers from carrying more than one passenger under age 18 (other than family) during the first year of licensure."
    },
]
