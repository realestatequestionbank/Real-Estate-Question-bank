import type { Question, StatePermitTestConfig } from '@/components/state-permit-test/types'

export const wyomingPermitTestConfig: StatePermitTestConfig = {
    stateName: 'Wyoming',
    stateCode: 'WY',
    departmentName: 'Wyoming DOT',
    departmentAbbr: 'DOT',
    realQuestionCount: 25,
    realPassCount: 20,
    passPercent: 80,
    retakePolicy: 'Can retake after 1 day if failed',
    mainPageUrl: '/wyoming-dot-permit-test',
    pageUrl: '/wyoming-dot-permit-test-25-questions',
    stateGuideUrl: '/state-guides/wyoming',
    handbookUrl: '/handbooks/wyoming',
    year: 2026,
}

export const wyomingPermitTestQuestions: Question[] = [
    {
        id: 1,
        question: "At what minimum age can a Wyoming teenager apply for a real estate license?",
        options: ["14", "15", "15 and a half", "16"],
        correctAnswer: 1,
        explanation: "Wyoming allows teenagers to apply for a real estate license at age 15. The permit holder must have a licensed adult (age 21 or older) in the front seat at all times while driving. Wyoming is one of the most rural states in the US, and the 15-year permit age reflects teens' transportation needs in remote areas."
    },
    {
        id: 2,
        question: "What is the legal BAC limit for drivers age 21 and older in Wyoming?",
        options: ["0.04%", "0.06%", "0.08%", "0.10%"],
        correctAnswer: 2,
        explanation: "Wyoming sets the per se DUI limit at 0.08% BAC for drivers 21 and older. Commercial vehicle operators face a stricter 0.04% limit. A BAC of 0.08% alone is sufficient grounds for a DUI charge in Wyoming regardless of apparent impairment."
    },
    {
        id: 3,
        question: "Wyoming is an 'open range' state. What does open range law mean for drivers?",
        options: ["Drivers must yield to all livestock crossings regardless of signs", "On open range land, livestock may legally roam onto roads, and drivers are responsible for avoiding collisions", "Only designated highways have open range rules — city roads are excluded", "Open range means higher speed limits on ranching roads"],
        correctAnswer: 1,
        explanation: "Wyoming's open range laws allow livestock to legally roam freely, including onto public roads. In open range areas, the driver — NOT the rancher — is legally responsible for avoiding a collision with livestock. Watch for cattle, horses, sheep, and other animals on Wyoming roads, especially at night when animals are difficult to see. Open range warning signs indicate these areas."
    },
    {
        id: 4,
        question: "Wyoming's zero tolerance law for drivers under 21 sets the illegal BAC at:",
        options: ["0.00% — any detectable amount", "0.02%", "0.04%", "0.05%"],
        correctAnswer: 1,
        explanation: "Wyoming's zero tolerance law sets the illegal BAC at 0.02% for drivers under 21. Any reading at or above 0.02% results in DUI charges and license suspension for underage drivers. Wyoming strictly enforces these laws across the state's vast rural areas."
    },
    {
        id: 5,
        question: "What is the maximum speed limit on Wyoming rural interstate highways?",
        options: ["70 mph", "75 mph", "80 mph", "85 mph"],
        correctAnswer: 1,
        explanation: "Wyoming's maximum speed limit on rural interstate highways is 75 mph for passenger vehicles. Wyoming's wide-open plains and long straight interstates make it one of the states with higher speed limits. Always check posted signs and remember that weather, traffic, and road conditions may require driving well below the posted maximum."
    },
    {
        id: 6,
        question: "Wyoming is known for sudden, severe wind storms. When driving in high crosswinds on Wyoming's open plains, you should:",
        options: ["Increase speed to reduce the time exposed to wind conditions", "Maintain a firm grip on the steering wheel, reduce speed, and be alert for sudden gusts", "Drive close to large trucks for wind protection", "Crosswinds have no significant effect on passenger vehicles"],
        correctAnswer: 1,
        explanation: "Wyoming's open plains can produce sudden severe crosswinds that can push vehicles off the road or cause rollovers, especially for high-profile vehicles. In high wind conditions: maintain a firm grip on the steering wheel, reduce speed significantly, increase following distance, and be alert for sudden gusts. The Wyoming DOT posts wind advisories and sometimes closes highways for extreme wind conditions."
    },
    {
        id: 7,
        question: "Under Wyoming's GDL program, a real estate license holder (age 15) must hold the permit for at least how long before applying for a restricted license?",
        options: ["3 months", "6 months", "9 months", "12 months"],
        correctAnswer: 1,
        explanation: "Wyoming requires real estate license holders to hold the permit for at least 6 months before applying for a restricted license. During this time, they must complete supervised driving practice with a licensed adult (21+) in the front passenger seat. Wyoming does not have a specific minimum hour requirement for supervised driving, but practice is strongly recommended."
    },
    {
        id: 8,
        question: "A Wyoming teen with a restricted license (age 16–17) has a nighttime driving restriction. When may they NOT drive without a licensed adult?",
        options: ["Between 10 PM and 5 AM", "Between 11 PM and 5 AM", "Between midnight and 5 AM", "Between midnight and 6 AM"],
        correctAnswer: 1,
        explanation: "Wyoming restricted license holders under 18 may not drive between 11 PM and 5 AM unless accompanied by a licensed adult (21+). Exceptions include driving to or from employment or school activities. The 11 PM curfew is one of the earlier curfews among US states."
    },
    {
        id: 9,
        question: "You are driving on a Wyoming highway and see cattle on the road ahead. What is the correct action?",
        options: ["Honk repeatedly to scare the cattle off the road", "Speed up to drive around the cattle quickly", "Slow down significantly, come to a stop if needed, and wait for the cattle to move — never try to spook them", "Flash high beams to alert the cattle"],
        correctAnswer: 2,
        explanation: "When you encounter cattle or other livestock on Wyoming roads, slow down and stop if necessary. Do not honk aggressively or make sudden movements that could spook the animals — a startled cow can weigh 1,000+ lbs and cause serious damage if it charges or panics. Wait patiently for the cattle to clear. In Wyoming's open range areas, this is a common situation that requires patience and caution."
    },
    {
        id: 10,
        question: "What is the default speed limit on Wyoming urban streets when no speed limit sign is posted?",
        options: ["20 mph", "25 mph", "30 mph", "35 mph"],
        correctAnswer: 1,
        explanation: "Wyoming's default urban speed limit is 30 mph when no other limit is posted. Note this is slightly higher than many states which default to 25 mph in urban areas. Always check posted signs — school zones and residential areas may have lower limits."
    },
    {
        id: 11,
        question: "Wyoming requires vehicles to stop for a school bus with activated red lights. On an undivided road, traffic must stop at least how far from the bus?",
        options: ["10 feet", "15 feet", "20 feet", "25 feet"],
        correctAnswer: 2,
        explanation: "Wyoming requires all vehicles in both directions on an undivided road to stop at least 20 feet from a school bus with activated red lights. Wait until the lights stop flashing and the stop arm retracts before proceeding. On divided highways with a physical median, only traffic behind the bus stops."
    },
    {
        id: 12,
        question: "Wyoming's Move Over law requires drivers approaching a stopped law enforcement or emergency vehicle with flashing lights to:",
        options: ["Sound the horn and proceed at normal speed", "Reduce speed by 10 mph only", "Move to a non-adjacent lane if safe, or reduce speed significantly if lane change is not possible", "Stop completely until the stopped vehicle moves"],
        correctAnswer: 2,
        explanation: "Wyoming's Move Over law requires drivers to move to a lane not adjacent to the stopped vehicle if safely possible. If a safe lane change cannot be made, reduce speed significantly. Wyoming expanded the law to cover tow trucks and highway maintenance vehicles in addition to emergency and law enforcement vehicles."
    },
    {
        id: 13,
        question: "Wyoming has vast open spaces with long stretches between towns. What is the most dangerous thing to do when you become drowsy on a Wyoming highway?",
        options: ["Open the windows for fresh air — this is the safest solution", "Turn on the radio louder", "Continue driving and fight the drowsiness", "Pull safely off the road and take a short nap"],
        correctAnswer: 3,
        explanation: "On Wyoming's long, isolated highways, drowsy driving is extremely dangerous. The safest response to drowsiness is to pull off the road at a rest area or safe shoulder and take a short nap (15–20 minutes). Opening windows and loud music provide only temporary and unreliable relief. Drowsy driving impairs reaction time nearly as much as alcohol. Plan long Wyoming drives to include rest stops."
    },
    {
        id: 14,
        question: "Wyoming requires headlights to be on from sunset to sunrise. When else must headlights be on?",
        options: ["Only during officially declared weather emergencies", "When visibility is less than 1,000 feet due to weather conditions", "Only when driving on highways without street lighting", "Whenever driving in rural areas regardless of visibility"],
        correctAnswer: 1,
        explanation: "Wyoming requires headlights from sunset to sunrise and whenever visibility is reduced to less than 1,000 feet due to snow, fog, rain, or other conditions. Wyoming's weather can change suddenly — from clear blue sky to a ground blizzard in minutes. If conditions limit visibility, use headlights immediately."
    },
    {
        id: 15,
        question: "Wyoming's winter weather includes severe blizzards. If you are caught in a sudden blizzard on a Wyoming highway with near-zero visibility, what should you do?",
        options: ["Continue driving at reduced speed with hazard lights on", "Follow closely behind a truck to use its wake for protection", "Pull completely off the road, stay in the vehicle, turn on hazard lights, and wait for conditions to improve", "Drive back the direction you came from immediately"],
        correctAnswer: 2,
        explanation: "In a sudden Wyoming blizzard with near-zero visibility, pull completely off the road (into a rest area or away from traffic) if possible. Stay in your vehicle — it provides shelter and makes you visible to rescuers. Turn on hazard lights. Wyoming ground blizzards — where wind blows existing snow across roads — can develop instantly and reduce visibility to zero in seconds. Never attempt to continue driving when you cannot see the road."
    },
    {
        id: 16,
        question: "A flashing red traffic signal in Wyoming means:",
        options: ["Slow down and proceed with caution", "Yield to cross traffic without stopping", "Stop completely, yield to all traffic, then proceed when safe", "The signal is broken — no rules apply"],
        correctAnswer: 2,
        explanation: "A flashing red light is treated as a stop sign in Wyoming. Come to a complete stop, yield to all cross traffic and pedestrians, and proceed only when the way is clear. A flashing yellow means slow down and proceed with caution — a full stop is not required for flashing yellow."
    },
    {
        id: 17,
        question: "What is the recommended minimum following distance in Wyoming under normal conditions?",
        options: ["1 second", "2 seconds", "3 seconds", "4 seconds"],
        correctAnswer: 2,
        explanation: "Wyoming recommends a minimum 3-second following distance under normal conditions. On Wyoming's high-speed rural highways (75 mph posted), 3 seconds translates to a significantly longer physical distance. In snow, ice, or wind conditions — frequent on Wyoming's open plains — increase to 6–8 seconds or more."
    },
    {
        id: 18,
        question: "In Wyoming, a solid yellow center line on your side means:",
        options: ["Passing is permitted when the road ahead is clearly visible", "Passing is prohibited — do not cross to pass", "Passing is permitted at speeds below 55 mph", "Passing is permitted only on divided highways"],
        correctAnswer: 1,
        explanation: "A solid yellow line on your side prohibits passing by crossing the center line. Do not pass when you see a solid yellow line on your side. A dashed yellow line on your side means passing is permitted when safe. Always check your side of the center line before deciding whether passing is legal."
    },
    {
        id: 19,
        question: "Wyoming's vast distances mean drivers must plan for fuel stops. Which of the following is most important when starting a long drive on a Wyoming highway?",
        options: ["Set cruise control at the maximum speed limit to arrive quickly", "Ensure you have adequate fuel — gas stations can be 60+ miles apart on Wyoming highways", "Wyoming highways have no fuel planning concerns — stations are every 10 miles", "Only plan fuel stops if driving more than 100 miles"],
        correctAnswer: 1,
        explanation: "Wyoming's rural highways can have gas stations 60 miles or more apart. Running out of fuel on a remote Wyoming road can be dangerous, especially in extreme heat or cold. Always start with a full tank before entering remote Wyoming areas and keep the tank above 1/4 full. Many Wyoming roads have no cell service, making it critical to not run out of fuel."
    },
    {
        id: 20,
        question: "When may a driver legally make a right turn on a red light in Wyoming?",
        options: ["Never — right turns on red are prohibited statewide", "After a complete stop and yielding to all traffic and pedestrians, unless a sign prohibits it", "Without stopping if no vehicles are visible", "Only if a green arrow has appeared previously at that intersection"],
        correctAnswer: 1,
        explanation: "Right turns on red are permitted in Wyoming after a complete stop, yielding to all cross traffic and pedestrians. Check for a 'No Turn on Red' sign first. Make a full stop — not a rolling stop — before turning right on red. This rule applies at most Wyoming intersections."
    },
    {
        id: 21,
        question: "Wyoming requires all vehicle occupants to wear seatbelts. What is Wyoming's enforcement type?",
        options: ["Primary enforcement — police can stop you solely for a seatbelt violation", "Secondary enforcement — police need another reason to stop you first", "Advisory only — no fines are issued", "Required only for front-seat occupants under 18"],
        correctAnswer: 1,
        explanation: "Wyoming has secondary seatbelt enforcement for adults — law enforcement needs another reason (such as speeding or running a red light) to pull you over before issuing a seatbelt violation to adults. However, all children under 9 years old and under 4 feet 9 inches must be in a child restraint system, and violations for children can be enforced separately."
    },
    {
        id: 22,
        question: "Wyoming implicitly consents drivers to chemical testing. Refusing a chemical test when suspected of DUI results in:",
        options: ["No consequence — refusal is a protected right in Wyoming", "Automatic license suspension and the refusal can be used as evidence", "A $100 fine with no license suspension for first offense", "Consequences only if later convicted of DUI"],
        correctAnswer: 1,
        explanation: "Wyoming's implied consent law results in automatic license suspension for refusing a chemical test — 6 months for a first offense. The refusal can be used as evidence in court. Wyoming's large distances and limited public transportation make losing a real estate license especially impactful in this rural state."
    },
    {
        id: 23,
        question: "At a Wyoming four-way stop, you and another driver arrive simultaneously. You are heading north; the other driver is heading east. Who has the right of way?",
        options: ["You (northbound) — you are going straight and have priority", "The eastbound driver has the right of way because they are to your right", "You must yield to the eastbound driver because they are on your right", "Whoever is on the higher-priority road goes first"],
        correctAnswer: 2,
        explanation: "When two vehicles arrive simultaneously at a four-way stop, yield to the driver on your right. The eastbound driver is to YOUR RIGHT (from your northbound perspective). You (heading north) must yield to the eastbound driver. Let them proceed first, then continue when it is safe."
    },
    {
        id: 24,
        question: "You are driving on a Wyoming rural highway and see a large mule deer in the road ahead. What is the best response?",
        options: ["Swerve sharply to avoid the deer without braking", "Brake firmly while holding your lane as straight as possible — do not swerve sharply", "Flash your high beams and honk to scare the deer away and continue at speed", "Deer are small enough that hitting one at highway speed is not dangerous"],
        correctAnswer: 1,
        explanation: "Wyoming has a very high rate of deer and wildlife collisions. If a collision with a large animal like a mule deer or elk cannot be avoided, brake firmly while keeping your lane straight. Swerving sharply — especially at highway speeds — can cause you to roll the vehicle or cross into oncoming traffic, which is far more dangerous than hitting an animal. If time permits, brake early and try to stop before reaching the animal."
    },
    {
        id: 25,
        question: "Wyoming has vast distances and remote roads. When should a driver use hazard flashers while in a disabled vehicle?",
        options: ["Never — hazard flashers drain the battery and make conditions worse", "When the vehicle is stopped or disabled on or near a roadway to warn other drivers", "Only when stopped in a designated emergency pullout", "Only at night — hazard flashers are not needed during daylight"],
        correctAnswer: 1,
        explanation: "Hazard flashers (emergency flashers) should be used whenever a vehicle is stopped or disabled on or near the road to warn other drivers — both day and night. On Wyoming's high-speed rural highways, other drivers may be approaching at 75 mph with limited time to react. In addition to hazard flashers, place emergency triangles or flares behind the vehicle if available, and stay off the roadway while waiting for help."
    },
]

export const wyomingPermitTestFaq: { question: string; answer: string }[] = [
    {
        question: "How many questions are on the Wyoming DOT permit test?",
        answer: "The Wyoming DOT knowledge test has 25 multiple-choice questions. You need to answer at least 20 correctly (80%) to pass."
    },
    {
        question: "What score do you need to pass the Wyoming permit test?",
        answer: "You need 20 out of 25 questions correct — a passing score of 80%. Missing 6 or more questions means you fail and must wait 1 day before retaking."
    },
    {
        question: "How many questions can you miss on the Wyoming DOT test?",
        answer: "You can miss up to 5 questions on the 25-question knowledge test. Missing 6 or more means you fail."
    },
    {
        question: "Is there a time limit on the Wyoming permit test?",
        answer: "No. The Wyoming DOT does not impose a time limit on the knowledge test. Take your time on each question."
    },
    {
        question: "What is the retake policy if I fail the Wyoming permit test?",
        answer: "If you fail, you must wait 1 day before retaking. Use that time to review the areas where you struggled. Consistently scoring 90%+ on practice tests is the best preparation for the real exam."
    },
    {
        question: "Can I take the Wyoming permit test online?",
        answer: "No. As of 2026, the Wyoming DOT knowledge test must be taken in person at a Wyoming Department of Transportation driver license office. You can find office locations on the Wyoming DOT website."
    },
    {
        question: "What is the minimum age to get a real estate license in Wyoming?",
        answer: "You must be at least 15 years old to apply for a Wyoming real estate license. After holding the permit for 6 months and completing supervised driving practice, you can apply for a restricted license at age 16. Restricted license holders under 18 may not drive between 11 PM and 5 AM without a licensed adult (21+)."
    },
    {
        question: "What are Wyoming's open range laws and why do they matter for drivers?",
        answer: "Wyoming's open range laws allow livestock to legally roam onto public roads. In open range areas, the driver — not the rancher — is legally responsible for avoiding collisions with livestock. This is the opposite of what many drivers expect. When driving on Wyoming rural roads, especially at dawn, dusk, and night, watch carefully for cattle, horses, sheep, and other animals. Open range signs indicate these zones. Livestock are most dangerous at night when they blend into dark backgrounds."
    },
]
