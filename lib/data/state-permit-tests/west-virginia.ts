import type { Question, StatePermitTestConfig } from '@/components/state-permit-test/types'

export const westVirginiaPermitTestConfig: StatePermitTestConfig = {
    stateName: 'West Virginia',
    stateCode: 'WV',
    departmentName: 'West Virginia Real Estate',
    departmentAbbr: 'Real Estate',
    realQuestionCount: 25,
    realPassCount: 19,
    passPercent: 76,
    retakePolicy: 'Can retake after 1 day if failed',
    mainPageUrl: '/west-virginia-real-estate-permit-test',
    pageUrl: '/west-virginia-real-estate-permit-test-25-questions',
    stateGuideUrl: '/state-guides/west-virginia',
    handbookUrl: '/handbooks/west-virginia',
    year: 2026,
}

export const westVirginiaPermitTestQuestions: Question[] = [
    {
        id: 1,
        question: "The West Virginia Real Estate knowledge test has 25 questions. How many must you answer correctly to pass, and what percentage does this represent?",
        options: ["20 out of 25 — 80%", "19 out of 25 — 76%", "18 out of 25 — 72%", "15 out of 25 — 60%"],
        correctAnswer: 1,
        explanation: "West Virginia requires 19 correct answers out of 25 — a passing threshold of 76%. This is lower than many states (most require 80%), meaning you can miss up to 6 questions and still pass. Missing 7 or more means you fail and must wait 1 day before retaking."
    },
    {
        id: 2,
        question: "At what minimum age can a West Virginia teenager apply for a real estate license?",
        options: ["14", "15", "15 and a half", "16"],
        correctAnswer: 1,
        explanation: "West Virginia allows applicants to apply for a real estate license at age 15. The permit holder must have a licensed adult (age 21+) in the front seat at all times while driving. West Virginia is a mountainous, rural state, and the 15-year permit age reflects teens' transportation needs in rural areas."
    },
    {
        id: 3,
        question: "What is the legal BAC limit for drivers age 21 and older in West Virginia?",
        options: ["0.04%", "0.06%", "0.08%", "0.10%"],
        correctAnswer: 2,
        explanation: "West Virginia sets the per se DUI limit at 0.08% BAC for drivers 21 and older. Commercial vehicle drivers face a stricter 0.04% limit. Reaching 0.08% alone is sufficient grounds for a DUI charge in West Virginia regardless of apparent impairment."
    },
    {
        id: 4,
        question: "West Virginia's zero tolerance law for drivers under 21 sets the illegal BAC at:",
        options: ["0.00% — any detectable amount", "0.02%", "0.04%", "0.05%"],
        correctAnswer: 1,
        explanation: "West Virginia's zero tolerance law sets the illegal BAC at 0.02% for drivers under 21. Any reading at or above 0.02% results in DUI charges and license suspension for underage drivers. West Virginia strictly enforces underage drinking laws, especially since alcohol-related crashes are a significant safety issue in the state."
    },
    {
        id: 5,
        question: "West Virginia is a mountainous state with many steep grades. When driving downhill on a steep West Virginia mountain road, what is the safest technique?",
        options: ["Brake continuously to control speed throughout the descent", "Use engine braking by downshifting before descending, and use brakes intermittently", "Increase speed slightly to maintain momentum", "Turn off the engine and coast down the hill to save fuel"],
        correctAnswer: 1,
        explanation: "West Virginia's steep mountain grades require engine braking. Shift to a lower gear before beginning the descent to use the engine as a brake. This prevents brake fade — the loss of braking effectiveness from overheated brakes. Apply brakes in short, firm applications rather than riding them continuously down the mountain."
    },
    {
        id: 6,
        question: "Under West Virginia's GDL program, a real estate license holder must hold the permit for at least how long before applying for a graduated real estate license?",
        options: ["3 months", "6 months", "9 months", "12 months"],
        correctAnswer: 1,
        explanation: "West Virginia requires real estate license holders to hold the permit for at least 6 months before applying for a graduated real estate license. During this time, they must complete at least 30 hours of supervised practice driving, including 10 hours at night, with a licensed adult (21+) in the front seat."
    },
    {
        id: 7,
        question: "What is the nighttime driving curfew for a West Virginia teen with a graduated real estate license (age 16–17)?",
        options: ["Between 10 PM and 5 AM", "Between 11 PM and 5 AM", "Between midnight and 5 AM", "Between midnight and 6 AM"],
        correctAnswer: 2,
        explanation: "West Virginia graduated license holders under 18 may not drive between midnight and 5 AM unless accompanied by a licensed adult (21+). The curfew is midnight to 5 AM — note this is later than some states that restrict driving from 11 PM. Exceptions include employment and school activities."
    },
    {
        id: 8,
        question: "What is the maximum speed limit on West Virginia rural interstates?",
        options: ["60 mph", "65 mph", "70 mph", "75 mph"],
        correctAnswer: 2,
        explanation: "West Virginia's maximum speed limit on rural interstates is 70 mph. Given the state's mountainous terrain, many sections have lower posted limits near curves and through the mountains. Always follow posted signs and adjust speed for mountain driving conditions — grades, curves, and reduced sight distances require speeds well below the posted limit."
    },
    {
        id: 9,
        question: "West Virginia has many coal haul roads and heavy truck routes. When following a large truck on a West Virginia mountain road, you should:",
        options: ["Follow closely to benefit from the truck's draft", "Maintain a greater following distance than normal — large trucks on grades require significant stopping distance", "Pass the truck as soon as possible on any mountain road", "Stay in the truck's blind spot on uphill grades"],
        correctAnswer: 1,
        explanation: "West Virginia's heavy truck traffic on mountain roads requires extra caution. Large trucks on steep grades need much more stopping distance than passenger cars. Increase your following distance when behind a truck on a mountain road — stay far enough back that you could see the truck's mirrors (if you can't see the mirrors, the driver can't see you) and have time to stop safely if the truck slows suddenly."
    },
    {
        id: 10,
        question: "What is the default speed limit on West Virginia urban streets when no speed limit sign is posted?",
        options: ["20 mph", "25 mph", "30 mph", "35 mph"],
        correctAnswer: 1,
        explanation: "West Virginia's default urban speed limit is 25 mph when no other limit is posted. In Charleston, Huntington, Morgantown, and other cities, many streets have explicit postings. School zones and hospital areas typically have even lower limits. Always check posted signs."
    },
    {
        id: 11,
        question: "West Virginia requires vehicles to stop for a school bus with activated red lights. On an undivided road, traffic must stop at least how far from the bus?",
        options: ["10 feet", "15 feet", "20 feet", "25 feet"],
        correctAnswer: 2,
        explanation: "West Virginia requires all vehicles in both directions on an undivided road to stop at least 20 feet from a school bus with activated red lights. Wait until the red lights stop flashing and the stop arm retracts before proceeding. On a divided highway with a physical median, only traffic behind the bus stops."
    },
    {
        id: 12,
        question: "West Virginia's Move Over law requires drivers approaching a stopped emergency or law enforcement vehicle with flashing lights to:",
        options: ["Sound the horn and proceed at normal speed", "Reduce speed by 10 mph only", "Move to a non-adjacent lane if safely possible, or reduce speed to a safe level if a lane change is not possible", "Stop completely until the vehicle moves"],
        correctAnswer: 2,
        explanation: "West Virginia's Move Over law requires drivers to move to a lane not adjacent to the stopped vehicle if it is safely possible. If a lane change cannot be safely made, reduce speed significantly. West Virginia expanded the law to include tow trucks, utility vehicles, and highway maintenance workers — not just police and emergency responders."
    },
    {
        id: 13,
        question: "In West Virginia, when must headlights be used?",
        options: ["Only from midnight to 5 AM", "From sunset to sunrise and when visibility is less than 500 feet due to weather", "Only when driving on highways without street lighting", "Whenever driving in a mountainous area"],
        correctAnswer: 1,
        explanation: "West Virginia requires headlights from sunset to sunrise and whenever weather conditions (rain, fog, snow) reduce visibility to less than 500 feet. West Virginia's mountain valleys can have heavy morning fog even on otherwise clear days — headlights significantly increase your visibility to other drivers. If your wipers are running, use your headlights."
    },
    {
        id: 14,
        question: "A flashing yellow traffic signal means:",
        options: ["Stop completely before proceeding", "The intersection is closed — find an alternate route", "Slow down and proceed with caution — a full stop is not required", "Yield to all cross traffic"],
        correctAnswer: 2,
        explanation: "A flashing yellow signal in West Virginia means slow down and proceed with caution. A complete stop is not required (unlike a flashing red, which requires a full stop and yield). Reduce speed, scan for hazards, and proceed carefully when the way is clear."
    },
    {
        id: 15,
        question: "You arrive at a four-way stop at the same time as a driver to your right. Who has the right of way?",
        options: ["You go first because you are the larger vehicle", "The driver to your right goes first", "Whoever signals first goes first", "No right of way — both must wait for a third car to arrive"],
        correctAnswer: 1,
        explanation: "When two vehicles arrive simultaneously at a four-way stop, the driver on the LEFT yields to the driver on the RIGHT. The driver to your right has the right of way. Wait for them to proceed before you enter the intersection. If you are unsure who arrived first, err on the side of caution and yield."
    },
    {
        id: 16,
        question: "West Virginia uses implied consent laws. Refusing a chemical test when suspected of DUI in West Virginia results in:",
        options: ["No consequence — refusal is a protected right", "Automatic license revocation and the refusal can be used as evidence", "A $50 fine with no license suspension", "Consequences only if later convicted of DUI"],
        correctAnswer: 1,
        explanation: "West Virginia's implied consent law results in automatic license revocation for refusing a chemical test — 1 year for a first offense. The refusal can also be introduced as evidence at trial. Refusing a chemical test rarely helps a driver in West Virginia — the refusal itself is treated as evidence of guilt by many juries."
    },
    {
        id: 17,
        question: "What is the minimum following distance recommended in West Virginia under normal conditions?",
        options: ["1 second", "2 seconds", "3 seconds", "4 seconds"],
        correctAnswer: 2,
        explanation: "West Virginia recommends a minimum 3-second following distance. On West Virginia's mountain roads, where sudden stops due to road conditions, wildlife, or slow trucks are common, 3 seconds may not be enough — increase to 4–5 seconds on steep grades. In winter conditions, increase to at least 6–8 seconds."
    },
    {
        id: 18,
        question: "When driving on West Virginia's winding mountain roads in fog, which type of lights should you use?",
        options: ["High beams — they illuminate further ahead", "Low beams or fog lights if equipped", "Hazard flashers only", "No lights — they reflect off the fog"],
        correctAnswer: 1,
        explanation: "In West Virginia's frequent mountain fog, use low beams (or fog lights if equipped). High beams reflect off fog and actually reduce visibility. Low beams point downward and illuminate the road surface without creating a blinding reflection. West Virginia's mountain valleys are particularly prone to dense fog, especially in the morning."
    },
    {
        id: 19,
        question: "A solid yellow center line on your side of the road in West Virginia means:",
        options: ["Passing is permitted when road is clear", "Passing is prohibited — do not cross to pass", "Passing is permitted only at speeds below 45 mph", "Passing is permitted if the other vehicle is going 15+ mph below the limit"],
        correctAnswer: 1,
        explanation: "A solid yellow line on your side of the center line prohibits passing. Do not cross the solid yellow line to overtake another vehicle. This is especially important on West Virginia's winding mountain roads where a solid yellow line indicates reduced sight distance ahead. Wait for a dashed yellow line on your side before passing."
    },
    {
        id: 20,
        question: "In West Virginia, right turns on red are:",
        options: ["Prohibited statewide", "Permitted after a complete stop and yielding, unless a sign prohibits it", "Permitted without stopping if no traffic is present", "Only permitted between 6 AM and 10 PM"],
        correctAnswer: 1,
        explanation: "Right turns on red are permitted in West Virginia after a complete stop, yielding to all cross traffic and pedestrians. Check for a 'No Turn on Red' sign first. In Charleston and Huntington, some intersections have this prohibition. Always make a full stop — a rolling stop is not sufficient."
    },
    {
        id: 21,
        question: "West Virginia requires all front-seat occupants to wear seatbelts. What is the enforcement type?",
        options: ["Primary enforcement — police can stop you solely for a seatbelt violation", "Secondary enforcement — police need another reason first", "Advisory only — no fines", "Primary for drivers only; secondary for passengers"],
        correctAnswer: 0,
        explanation: "West Virginia has primary seatbelt enforcement — law enforcement can stop a vehicle solely for observing a seatbelt violation. All front-seat occupants must wear seatbelts, and rear-seat passengers under 18 must also be properly restrained. West Virginia also requires child safety seats for young children."
    },
    {
        id: 22,
        question: "What does a pentagon-shaped (five-sided) yellow sign indicate?",
        options: ["A railroad crossing ahead", "A school zone or school crossing ahead", "A construction work zone ahead", "A curve in the road ahead"],
        correctAnswer: 1,
        explanation: "A pentagon-shaped (five-sided) sign with a yellow background indicates a school zone or school crossing ahead. This unique shape is used only for school-related signs and is used in West Virginia and all other US states. Reduce speed to the posted school zone limit when children are present or warning lights are flashing."
    },
    {
        id: 23,
        question: "When you see a slow-moving vehicle (SMV) emblem — an orange/red reflective triangle — on the back of a vehicle, what does it indicate?",
        options: ["The vehicle is authorized to travel on the shoulder only", "The vehicle is traveling at 25 mph or less", "The vehicle is a hazardous materials carrier", "The vehicle is a student driver vehicle"],
        correctAnswer: 1,
        explanation: "The orange/red slow-moving vehicle (SMV) triangle indicates the vehicle travels at 25 mph or less. Farm tractors, horse-drawn vehicles, and road equipment commonly display SMV emblems on West Virginia's rural roads. Approach these vehicles with reduced speed, patience, and extra following distance. Do not pass until it is absolutely safe."
    },
    {
        id: 24,
        question: "You are driving in West Virginia and see a deer crossing sign. What should you do?",
        options: ["Continue at normal speed but be prepared to honk if a deer appears", "Reduce speed, especially at dawn and dusk, and watch both sides of the road for movement", "Only slow down during deer hunting season (October–December)", "Deer crossing signs are advisory only — no action required"],
        correctAnswer: 1,
        explanation: "West Virginia has one of the highest rates of deer-vehicle collisions in the US. Deer crossing signs indicate areas of high deer activity. Reduce speed, especially at dawn and dusk when deer are most active, and scan both sides of the road. If one deer crosses, others often follow. If a collision with a deer is unavoidable, brake firmly and do not swerve — losing control of the vehicle is more dangerous than hitting the deer."
    },
    {
        id: 25,
        question: "When making a left turn from a two-lane road onto a two-lane road in West Virginia, where should your vehicle be positioned after completing the turn?",
        options: ["In the far right lane", "In the nearest lane to the right of the center line", "In any available lane", "In the left lane"],
        correctAnswer: 1,
        explanation: "When turning left, you must turn into the nearest available lane — the lane closest to the center line on the new street (right side). Do not swing wide into a far lane. Enter the nearest lane, then signal and change lanes if you need to be in a different lane. Wide left turns are dangerous and illegal."
    },
]

export const westVirginiaPermitTestFaq: { question: string; answer: string }[] = [
    {
        question: "How many questions are on the West Virginia Real Estate Exam?",
        answer: "The West Virginia Real Estate knowledge test has 25 multiple-choice questions. You need to answer at least 19 correctly to pass."
    },
    {
        question: "What score do you need to pass the West Virginia permit test?",
        answer: "You need 19 out of 25 questions correct — a passing score of 76%. This is a lower threshold than most states, which require 80%. You can miss up to 6 questions and still pass. Missing 7 or more means you fail."
    },
    {
        question: "How many questions can you miss on the West Virginia Real Estate Exam?",
        answer: "You can miss up to 6 questions on the 25-question knowledge test. West Virginia's 76% passing threshold is more lenient than the 80% required by most states."
    },
    {
        question: "Is there a time limit on the West Virginia permit test?",
        answer: "No. The West Virginia Real Estate does not impose a time limit on the knowledge test. Take your time on each question."
    },
    {
        question: "What is the retake policy if I fail the West Virginia permit test?",
        answer: "If you fail, you must wait 1 day before retaking. Use that time to review the areas where you struggled. Consistently scoring 85%+ on practice tests is a good indicator you are ready for the real exam."
    },
    {
        question: "Can I take the West Virginia permit test online?",
        answer: "No. As of 2026, all West Virginia Real Estate knowledge tests must be taken in person at a West Virginia Division of Motor Vehicles office. You can find office locations on the WV Real Estate website."
    },
    {
        question: "What is the minimum age to get a real estate license in West Virginia?",
        answer: "You must be at least 15 years old to apply for a West Virginia real estate license. After holding the permit for 6 months and completing 30 hours of supervised driving (including 10 at night), you can apply for a graduated real estate license at age 16. The graduated license has restrictions until age 18."
    },
    {
        question: "What are the nighttime driving restrictions for West Virginia teen drivers?",
        answer: "West Virginia graduated license holders under 18 may not drive between midnight and 5 AM without a licensed adult (21+) in the vehicle. This curfew is midnight to 5 AM — later than some neighboring states. Exceptions include driving to or from employment or a school activity. Additionally, during the first 6 months of the graduated license, no more than one non-family passenger under age 18 is allowed."
    },
]
