import type { Question, StatePermitTestConfig } from '@/components/state-permit-test/types'

export const pennsylvaniaPermitTestConfig: StatePermitTestConfig = {
    stateName: 'Pennsylvania',
    stateCode: 'PA',
    departmentName: 'Pennsylvania PennDOT',
    departmentAbbr: 'PennDOT',
    realQuestionCount: 18,
    realPassCount: 15,
    passPercent: 83,
    retakePolicy: 'Can retake after 1 day if failed',
    mainPageUrl: '/pennsylvania-penndot-permit-test',
    pageUrl: '/pennsylvania-penndot-permit-test-18-questions',
    stateGuideUrl: '/state-guides/pennsylvania',
    handbookUrl: '/handbooks/pennsylvania',
    year: 2026,
}

export const pennsylvaniaPermitTestQuestions: Question[] = [
    {
        id: 1,
        question: "Pennsylvania's PennDOT permit knowledge test has only 18 questions — making it the shortest permit test of any state in the US. How many must you answer correctly to pass?",
        options: ["12 out of 18 (67%)", "14 out of 18 (78%)", "15 out of 18 (83%)", "16 out of 18 (89%)"],
        correctAnswer: 2,
        explanation: "Pennsylvania requires 15 correct answers out of 18 to pass the knowledge test — an 83% passing threshold. With only 18 questions, Pennsylvania has the fewest questions of any state permit test in the US, meaning every single question counts. Missing 4 or more means you fail."
    },
    {
        id: 2,
        question: "At what minimum age can a Pennsylvania teenager apply for a real estate license?",
        options: ["15", "15 and a half", "16", "17"],
        correctAnswer: 2,
        explanation: "Pennsylvania requires applicants to be at least 16 years old to obtain a real estate license. The permit allows supervised driving practice before progressing to a junior real estate license and eventually a full license."
    },
    {
        id: 3,
        question: "What is the legal BAC limit for drivers age 21 and older in Pennsylvania?",
        options: ["0.04%", "0.06%", "0.08%", "0.10%"],
        correctAnswer: 2,
        explanation: "Pennsylvania, like all US states, sets the per se DUI limit at 0.08% BAC for drivers 21 and older. Pennsylvania also has a tiered DUI system: 0.08–0.099% is 'general impairment,' 0.10–0.159% is 'high BAC,' and 0.16%+ is 'highest BAC,' each with increasingly severe penalties."
    },
    {
        id: 4,
        question: "You are driving in Philadelphia and approaching an intersection with a green arrow pointing left. What does this signal mean?",
        options: ["Yield to oncoming traffic before turning left", "You may turn left — oncoming traffic is stopped by a red signal", "The arrow applies only to buses and trucks", "Proceed with caution — oncoming traffic may still be moving"],
        correctAnswer: 1,
        explanation: "A green arrow — protected left-turn signal — means you may turn left because oncoming traffic is stopped. Philadelphia's busy intersections frequently use protected left-turn phases to manage the high volume of traffic. When the protected arrow ends and turns to a circular green, you must then yield to oncoming traffic."
    },
    {
        id: 5,
        question: "Under Pennsylvania's GDL program, a junior driver (age 16–17) with a real estate license must hold it for at least how long before taking the driving skills test?",
        options: ["3 months", "6 months", "9 months", "12 months"],
        correctAnswer: 1,
        explanation: "Pennsylvania requires real estate license holders to hold the permit for at least 6 months before they can take the behind-the-wheel skills test. During this time, they must complete at least 65 hours of supervised practice driving, including 10 hours at night."
    },
    {
        id: 6,
        question: "A Pennsylvania junior driver (age 16–17) has a junior real estate license. When is the nighttime driving curfew?",
        options: ["No driving between 10 PM and 5 AM", "No driving between 11 PM and 5 AM", "No driving between midnight and 5 AM", "No driving between midnight and 6 AM"],
        correctAnswer: 1,
        explanation: "Pennsylvania junior drivers (under 18) are prohibited from driving between 11 PM and 5 AM unless accompanied by a parent/guardian, traveling to or from work, or responding to an emergency. This curfew applies during the junior license phase."
    },
    {
        id: 7,
        question: "What is the default speed limit on most Pennsylvania urban streets when no speed limit sign is posted?",
        options: ["25 mph", "35 mph", "40 mph", "45 mph"],
        correctAnswer: 1,
        explanation: "Pennsylvania's default urban speed limit is 35 mph when no other limit is posted. This is higher than many other states — for example, California and New York default to 25 mph in urban areas. Always check posted signs, especially in Pittsburgh and Philadelphia where local ordinances may set lower limits."
    },
    {
        id: 8,
        question: "You are driving on a Pennsylvania rural road with no speed limit sign posted. What is the maximum legal speed?",
        options: ["45 mph", "50 mph", "55 mph", "65 mph"],
        correctAnswer: 2,
        explanation: "Pennsylvania's default speed limit on rural roads is 55 mph when no speed limit sign is posted. On limited-access highways (interstates), the maximum is typically 65 or 70 mph as posted. Always defer to posted signs over default limits."
    },
    {
        id: 9,
        question: "Pennsylvania's zero tolerance law for drivers under 21 sets the illegal BAC at:",
        options: ["0.00% — any detectable amount", "0.01%", "0.02%", "0.04%"],
        correctAnswer: 2,
        explanation: "Pennsylvania sets the underage DUI threshold at 0.02% BAC. A driver under 21 with a BAC of 0.02% or higher faces DUI charges under the zero tolerance law, including license suspension. This lower threshold reflects the strict stance on underage drinking and driving."
    },
    {
        id: 10,
        question: "Pennsylvania's Move Over law requires drivers to do what when approaching a stopped emergency or law enforcement vehicle with flashing lights?",
        options: ["Slow to 25 mph regardless of the speed limit", "Move one lane away from the stopped vehicle if safely possible, or slow to a safe speed", "Stop completely and wait until all vehicles have moved", "Sound your horn and proceed at normal speed"],
        correctAnswer: 1,
        explanation: "Pennsylvania's Move Over law requires drivers to move to a non-adjacent lane (move over) if safely possible, or slow to a safe speed if a lane change cannot be made safely. The law was expanded to cover not just emergency vehicles but also towing/recovery, PennDOT, and utility workers."
    },
    {
        id: 11,
        question: "When must a Pennsylvania driver use headlights?",
        options: ["Only from midnight to 5 AM", "From sunset to sunrise and whenever visibility is less than 1,000 feet", "Whenever it is raining, regardless of visibility", "Only in officially designated low-visibility zones"],
        correctAnswer: 1,
        explanation: "Pennsylvania requires headlights from sunset to sunrise and anytime visibility is reduced to less than 1,000 feet due to weather, fog, or other conditions. Remember: if your wipers are on, your headlights must also be on under Pennsylvania law."
    },
    {
        id: 12,
        question: "A school bus has stopped on your side of a two-lane road with red flashing lights and an extended stop arm. What must you do?",
        options: ["Stop only if children are visible outside the bus", "Slow to 25 mph and pass with caution", "Stop at least 10 feet behind the bus in both directions until lights stop", "Yield to the bus but proceed if no children are crossing"],
        correctAnswer: 2,
        explanation: "Pennsylvania law requires all vehicles traveling in both directions on a two-lane undivided road to stop at least 10 feet from a school bus with flashing red lights. Do not proceed until the red lights stop flashing and the stop arm retracts. On a divided highway with a physical median, only vehicles behind the bus must stop."
    },
    {
        id: 13,
        question: "You arrive at a four-way stop at the same time as a driver to your right. Who has the right of way?",
        options: ["You have the right of way because you are going straight", "The driver to your right has the right of way", "Whoever is traveling on the wider road goes first", "Toss a coin — there is no specific rule"],
        correctAnswer: 1,
        explanation: "When two vehicles arrive at a four-way stop simultaneously, Pennsylvania law requires the driver on the left to yield to the driver on the right. This 'yield to the right' rule resolves simultaneous arrivals. If you are the driver on the left, wait for the vehicle on your right to proceed first."
    },
    {
        id: 14,
        question: "In Pennsylvania, a flashing yellow traffic signal means:",
        options: ["Stop completely before proceeding", "The intersection is closed — find an alternate route", "Slow down and proceed with caution", "Yield to all crossing traffic completely"],
        correctAnswer: 2,
        explanation: "A flashing yellow (amber) signal in Pennsylvania means slow down and proceed with caution. A complete stop is not required, but you must be alert for hazards. Contrast with a flashing red, which requires a full stop and yield before proceeding."
    },
    {
        id: 15,
        question: "Pittsburgh is known for its many bridges and tunnels. When driving through a Pennsylvania tunnel, which of the following is required?",
        options: ["Turn on hazard flashers to warn other drivers", "Use low-beam headlights", "Reduce speed to 25 mph regardless of posted limit", "Stay in the right lane only"],
        correctAnswer: 1,
        explanation: "Pennsylvania law requires drivers to use low-beam headlights when driving through tunnels. This is especially important on Pittsburgh's many tunnels like the Fort Pitt Tunnel. Hazard flashers are not appropriate while driving — they are for stopped vehicles only."
    },
    {
        id: 16,
        question: "When you are driving in Pennsylvania and an emergency vehicle with flashing lights and siren approaches from behind, you must:",
        options: ["Pull over to the left shoulder and stop", "Speed up to the nearest exit and clear the road", "Pull to the right side of the road, stop, and remain stopped until it passes", "Slow to 20 mph and stay in your lane"],
        correctAnswer: 2,
        explanation: "Pennsylvania law requires drivers to immediately pull to the right edge of the roadway and stop when an authorized emergency vehicle with activated lights and siren approaches. Stay stopped until the emergency vehicle has fully passed. Never block an intersection when pulling over."
    },
    {
        id: 17,
        question: "Pennsylvania has one of the oldest and largest road networks in the US. What is the maximum speed limit on the Pennsylvania Turnpike (I-76) unless otherwise posted?",
        options: ["55 mph", "65 mph", "70 mph", "75 mph"],
        correctAnswer: 1,
        explanation: "The Pennsylvania Turnpike has a posted maximum speed limit of 65 mph on most sections. Some rural sections may allow 70 mph where posted. The Turnpike is one of the oldest toll roads in the US and has varying speed limits — always follow posted signs."
    },
    {
        id: 18,
        question: "Pennsylvania requires all front-seat occupants to wear seatbelts. What is Pennsylvania's seatbelt enforcement type?",
        options: ["Secondary enforcement — police need another reason to stop you", "Primary enforcement — police can stop you solely for a seatbelt violation", "Advisory only — no fine is issued", "Only enforced for drivers, not passengers"],
        correctAnswer: 0,
        explanation: "Pennsylvania has secondary seatbelt enforcement for adults in the front seat — officers must have another reason (such as speeding) to pull you over before issuing a seatbelt citation. However, for passengers under 18, seatbelt enforcement is primary. All occupants should buckle up regardless."
    },
]

export const pennsylvaniaPermitTestFaq: { question: string; answer: string }[] = [
    {
        question: "How many questions are on the Pennsylvania PennDOT permit test?",
        answer: "The Pennsylvania PennDOT knowledge test has only 18 multiple-choice questions — making it the shortest permit test of any state in the US. You need to answer at least 15 correctly (83%) to pass."
    },
    {
        question: "What score do you need to pass the Pennsylvania permit test?",
        answer: "You need 15 out of 18 questions correct — a passing score of 83%. Because there are only 18 questions, each one is critical. Missing 4 or more questions means you fail."
    },
    {
        question: "How many questions can you miss on the Pennsylvania PennDOT test?",
        answer: "You can miss up to 3 questions on the 18-question knowledge test. Missing 4 or more means you fail and must wait 1 day before retaking."
    },
    {
        question: "Is there a time limit on the Pennsylvania permit test?",
        answer: "No. PennDOT does not impose a strict time limit on the knowledge test. Take your time on each question, but do not second-guess answers you feel confident about."
    },
    {
        question: "What is the retake policy if I fail the Pennsylvania permit test?",
        answer: "If you fail, you must wait 1 day before retaking. Use that time to review the questions you missed. Consistently scoring 90%+ on practice tests is the best indicator you are ready to pass."
    },
    {
        question: "Can I take the Pennsylvania permit test online?",
        answer: "No. As of 2026, all PennDOT knowledge tests must be taken in person at a Pennsylvania Driver License Center. You can schedule an appointment on the PennDOT website."
    },
    {
        question: "What is the minimum age to get a real estate license in Pennsylvania?",
        answer: "You must be at least 16 years old to apply for a Pennsylvania real estate license. You'll need to pass the 18-question knowledge test and a vision screening. After holding the permit for 6 months and completing 65 hours of supervised driving (including 10 at night), you can apply for a junior real estate license."
    },
    {
        question: "Why does Pennsylvania's permit test only have 18 questions?",
        answer: "Pennsylvania's PennDOT chose a shorter test format than most states. With only 18 questions, Pennsylvania has the fewest permit test questions in the US. This makes each question more impactful — missing just 4 questions means you fail. The 83% passing threshold is also among the higher standards nationally."
    },
]
