import type { Question, StatePermitTestConfig } from '@/components/state-permit-test/types'

export const newYorkPermitTestConfig: StatePermitTestConfig = {
    stateName: 'New York',
    stateCode: 'NY',
    departmentName: 'New York Real Estate',
    departmentAbbr: 'Real Estate',
    realQuestionCount: 20,
    realPassCount: 14,
    passPercent: 70,
    retakePolicy: 'Can retake after 1 day if failed',
    mainPageUrl: '/new-york-real-estate-permit-test',
    pageUrl: '/new-york-real-estate-permit-test-20-questions',
    stateGuideUrl: '/state-guides/new-york',
    handbookUrl: '/handbooks/new-york',
    year: 2026,
}

export const newYorkPermitTestQuestions: Question[] = [
    {
        id: 1,
        question: "At what age can a New York teen apply for a real estate license?",
        options: ["14", "15", "16", "17"],
        correctAnswer: 2,
        explanation: "New York allows teens to apply for a real estate license at age 16. The permit requires passing the written knowledge test and allows supervised driving practice before advancing to a junior license or full license."
    },
    {
        id: 2,
        question: "In New York City, when can you turn right on a red light?",
        options: ["At any time after stopping, just like the rest of New York State", "Only when a sign specifically permits a right turn on red", "Never — right turns on red are prohibited everywhere in New York City", "After 9 PM only"],
        correctAnswer: 1,
        explanation: "This is one of the most tested New York-specific rules: in New York City, right turns on red are PROHIBITED unless a sign specifically permits it. Elsewhere in New York State, right turns on red are permitted after a complete stop and yielding. If you are driving in NYC, assume no right on red unless a sign says otherwise."
    },
    {
        id: 3,
        question: "What is the legal BAC limit for a driver age 21 or older in New York?",
        options: ["0.04%", "0.06%", "0.08%", "0.10%"],
        correctAnswer: 2,
        explanation: "New York sets the per se DWI limit at 0.08% BAC for drivers 21 and older. Commercial drivers face a stricter 0.04% limit. New York also has a DWAI (Driving While Ability Impaired) charge for drivers with a BAC of 0.05% to 0.07%, which carries its own penalties."
    },
    {
        id: 4,
        question: "You are driving in Manhattan and see a dedicated bike lane on the right side of the road. You are making a right turn. What must you do?",
        options: ["Turn across the bike lane without slowing", "Merge into the bike lane before turning to check for cyclists", "Yield to cyclists in the bike lane before turning across it", "Bike lanes are for cyclists only — make the turn from your travel lane without entering the bike lane"],
        correctAnswer: 2,
        explanation: "When making a right turn across a dedicated bike lane in New York City, you must yield to cyclists who may be in or approaching the bike lane. New York City has an extensive protected bike lane network — always check for cyclists before turning across a bike lane."
    },
    {
        id: 5,
        question: "New York's zero tolerance law for drivers under 21 sets the illegal BAC at:",
        options: ["0.00% — any detectable amount", "0.02%", "0.04%", "0.05%"],
        correctAnswer: 1,
        explanation: "New York's zero tolerance law sets an illegal BAC of 0.02% for drivers under 21. A driver under 21 with a BAC of 0.02% to 0.07% faces a zero tolerance violation. A BAC of 0.08% or higher results in a DWI charge."
    },
    {
        id: 6,
        question: "You are stopped at a red light in Manhattan when a pedestrian is in the crosswalk in front of you. The light turns green. What should you do?",
        options: ["Proceed — you have a green light and the right of way", "Honk to alert the pedestrian and proceed slowly", "Wait for the pedestrian to clear the crosswalk before proceeding", "Proceed if the pedestrian is in the far lane"],
        correctAnswer: 2,
        explanation: "Even with a green light, you must wait for pedestrians to clear the crosswalk before proceeding. In New York City, pedestrian traffic is extremely heavy and pedestrians often finish crossing after the signal changes. Always yield to pedestrians in crosswalks regardless of your signal."
    },
    {
        id: 7,
        question: "What does New York's Move Over law require when passing a stopped emergency vehicle?",
        options: ["Slow to 25 mph and stay in your lane", "Move one lane away from the stopped vehicle if safely possible — or slow significantly if a lane change is not possible", "Stop completely behind the emergency vehicle", "Move over only for police vehicles, not for others"],
        correctAnswer: 1,
        explanation: "New York's Move Over law requires drivers to move one lane away from any stopped emergency, law enforcement, or hazard vehicle with flashing lights. If it is not safely possible to change lanes, reduce speed to a safe speed for the conditions."
    },
    {
        id: 8,
        question: "In New York, when approaching a pedestrian with a white cane or guide dog, you must:",
        options: ["Slow to 10 mph and proceed", "Stop and yield the right of way until the pedestrian has safely crossed", "Honk once to signal your presence, then proceed carefully", "Yield only if they step into your lane"],
        correctAnswer: 1,
        explanation: "New York law requires all drivers to stop and yield the right of way to pedestrians using a white cane or guide dog. These individuals are visually impaired and depend on drivers obeying this law to cross safely."
    },
    {
        id: 9,
        question: "What is the default speed limit on a New York City street when no speed limit sign is posted?",
        options: ["20 mph", "25 mph", "30 mph", "35 mph"],
        correctAnswer: 1,
        explanation: "New York City has a default speed limit of 25 mph on all streets where no other limit is posted. NYC reduced its default limit from 30 mph to 25 mph to reduce pedestrian fatalities. Outside NYC, New York State's default urban limit is 30 mph."
    },
    {
        id: 10,
        question: "What must you do when a school bus displays flashing red lights and a stop arm on a New York road?",
        options: ["Stop only if you are behind the bus", "All traffic in both directions must stop at least 20 feet from the bus on undivided roads", "Slow to 15 mph and pass the bus carefully", "Stop only if children are visible exiting the bus"],
        correctAnswer: 1,
        explanation: "New York requires all traffic on undivided roads in both directions to stop at least 20 feet from a school bus with flashing red lights. Wait until the lights stop and the arm retracts. On divided highways, only traffic behind the bus must stop."
    },
    {
        id: 11,
        question: "Under New York's implied consent law, refusing a chemical test after a DWI arrest will result in:",
        options: ["No penalty — refusal is a protected right", "A 1-year license revocation for a first offense and a civil fine", "Only a small fine", "License revocation only if convicted of DWI"],
        correctAnswer: 1,
        explanation: "New York's implied consent law means that by driving on state roads, you have agreed to chemical testing. A first-offense refusal results in a 1-year license revocation and a $500 civil penalty. The refusal can also be introduced as evidence in your DWI case."
    },
    {
        id: 12,
        question: "You are driving on a New York City street and see a double-parked delivery truck partially blocking your lane. What should you do?",
        options: ["Honk and wait for the truck to move", "Signal, check mirrors and blind spots, and carefully merge around the truck when safe", "Pass on the right by driving onto the sidewalk briefly", "Stop behind the truck and wait indefinitely"],
        correctAnswer: 1,
        explanation: "Double parking is common in New York City. When a vehicle is blocking your lane, check your mirrors, signal, verify no oncoming traffic or cyclists are in the way, and carefully pass when safe. Never drive on the sidewalk — it is illegal and extremely dangerous to pedestrians."
    },
    {
        id: 13,
        question: "On a New York highway, a solid white line separates travel lanes in the same direction. What does this mean?",
        options: ["Lane changes are prohibited", "Lane changes are discouraged — stay in your lane if safe", "The lane to your right is an exit lane", "You are approaching an intersection"],
        correctAnswer: 0,
        explanation: "A solid white line between lanes traveling in the same direction means lane changes are prohibited at that location. This is common near intersections, in construction zones, and near highway exits. A broken white line means lane changes are permitted."
    },
    {
        id: 14,
        question: "What is the minimum following distance recommended in New York under normal driving conditions?",
        options: ["1 second", "2 seconds", "3 seconds", "4 seconds"],
        correctAnswer: 2,
        explanation: "New York recommends a minimum 3-second following distance. In New York City traffic with frequent stops and aggressive driving, maintaining 3 seconds of space can be challenging — but it significantly reduces rear-end collision risk."
    },
    {
        id: 15,
        question: "You are driving at night in New York and an oncoming vehicle fails to dim its high beams. What should you do?",
        options: ["Flash your high beams repeatedly to signal the other driver", "Look toward the right edge of the road to avoid the glare and reduce your speed", "Turn on your own high beams to counteract the glare", "Speed up to pass the oncoming vehicle faster"],
        correctAnswer: 1,
        explanation: "When blinded by oncoming high beams, look toward the right edge of the road marking — this keeps you in your lane while avoiding direct glare. Reduce your speed because your visibility is compromised. Do not respond with your own high beams — this blinds the other driver and increases crash risk."
    },
    {
        id: 16,
        question: "When parallel parking on a New York City street, how close to the curb should your vehicle be?",
        options: ["Within 6 inches of the curb", "Within 12 inches of the curb", "Within 18 inches of the curb", "Within 24 inches of the curb"],
        correctAnswer: 1,
        explanation: "New York State requires parallel-parked vehicles to be within 12 inches of the curb. Parking further than 12 inches from the curb obstructs traffic and is a ticketable offense — especially in New York City where enforcement is active."
    },
    {
        id: 17,
        question: "Under New York's GDL program, what nighttime driving restriction applies to junior drivers (under 18)?",
        options: ["No nighttime restrictions", "No driving between midnight and 5 AM without a supervising adult", "No driving between 9 PM and 5 AM without a parent present", "No driving between 11 PM and 6 AM"],
        correctAnswer: 1,
        explanation: "New York junior license holders (under 18) outside of New York City may not drive between midnight and 5 AM without a parent, guardian, or 21+ licensed driver in the front seat. In New York City, junior drivers must be supervised at all times."
    },
    {
        id: 18,
        question: "What is the speed limit on New York State Thruway (I-87) in most rural sections?",
        options: ["55 mph", "60 mph", "65 mph", "70 mph"],
        correctAnswer: 2,
        explanation: "The New York State Thruway and most rural interstate highways in New York have a speed limit of 65 mph for passenger vehicles. Some sections near New York City and Albany have lower posted limits. Always check posted signs."
    },
    {
        id: 19,
        question: "You are about to make a left turn on a green light. An oncoming vehicle is approaching. What must you do?",
        options: ["Complete the turn quickly — you have a green light", "Yield to the oncoming vehicle — a green light does not give you the right of way to turn left across traffic", "Flash your lights to signal the oncoming vehicle to slow", "Turn if the oncoming vehicle is more than 4 car lengths away"],
        correctAnswer: 1,
        explanation: "A green light permits you to enter the intersection but does not give you the right to turn left in front of oncoming traffic. You must wait for a safe gap in oncoming traffic before completing a left turn. This is one of the most dangerous maneuvers in driving and a leading cause of crashes."
    },
    {
        id: 20,
        question: "What does a steady yellow traffic signal mean in New York?",
        options: ["Speed up to clear the intersection before the light turns red", "Prepare to go — the light is about to turn green", "The light is about to turn red — slow down and stop if it is safe to do so", "Yield to cross traffic and then proceed"],
        correctAnswer: 2,
        explanation: "A steady yellow signal in New York means the light is about to turn red. You must slow down and stop before the intersection if you can do so safely. Only proceed through a yellow if stopping would be unsafe — never accelerate to beat a yellow light."
    },
]

export const newYorkPermitTestFaq: { question: string; answer: string }[] = [
    {
        question: "How many questions are on the New York Real Estate Exam?",
        answer: "The New York Real Estate Exam has exactly 20 multiple-choice questions. You need to answer at least 14 correctly (70%) to pass."
    },
    {
        question: "What score do you need to pass the New York permit test?",
        answer: "You need 14 out of 20 questions correct — a passing score of 70%. This is one of the lower passing thresholds in the country. Missing 7 or more questions means you fail and must wait 1 day before retaking."
    },
    {
        question: "How many questions can you miss on the New York Real Estate Exam?",
        answer: "You can miss up to 6 questions on the 20-question knowledge test. Missing 7 or more means you fail."
    },
    {
        question: "Is there a time limit on the New York permit test?",
        answer: "No. The New York Real Estate does not impose a time limit on the knowledge test. Take your time, especially on NYC-specific questions about bike lanes and right-on-red rules."
    },
    {
        question: "What is the retake policy if I fail the New York permit test?",
        answer: "If you fail, you must wait 1 day before retaking. New York allows a limited number of retakes — use practice tests to prepare thoroughly before your appointment."
    },
    {
        question: "Can I take the New York permit test online?",
        answer: "No. As of 2026, all New York Real Estate knowledge tests must be taken in person at a New York Department of Motor Vehicles office."
    },
    {
        question: "What is the minimum age to get a real estate license in New York?",
        answer: "New York allows teens to apply for a real estate license at age 16. A parent or guardian must consent, and the permit allows supervised driving practice."
    },
    {
        question: "Is right turn on red allowed in New York City?",
        answer: "No — this is a key NYC-specific rule. Right turns on red are PROHIBITED in New York City unless a sign specifically permits it. Elsewhere in New York State, right on red is allowed after a complete stop and yielding. This rule is frequently tested on the New York Real Estate exam."
    },
]
