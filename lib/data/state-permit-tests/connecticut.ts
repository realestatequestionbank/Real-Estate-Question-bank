import type { Question, StatePermitTestConfig } from '@/components/state-permit-test/types'

export const connecticutPermitTestConfig: StatePermitTestConfig = {
    stateName: 'Connecticut',
    stateCode: 'CT',
    departmentName: 'Connecticut Real Estate',
    departmentAbbr: 'Real Estate',
    realQuestionCount: 25,
    realPassCount: 20,
    passPercent: 80,
    retakePolicy: 'Can retake after 1 day if failed',
    mainPageUrl: '/connecticut-real-estate-permit-test',
    pageUrl: '/connecticut-real-estate-permit-test-25-questions',
    stateGuideUrl: '/state-guides/connecticut',
    handbookUrl: '/handbooks/connecticut',
    year: 2026,
}

export const connecticutPermitTestQuestions: Question[] = [
    {
        id: 1,
        question: "What is the minimum age to apply for a real estate license in Connecticut?",
        options: ["14", "15", "15 and a half", "16"],
        correctAnswer: 3,
        explanation: "Connecticut requires applicants to be at least 16 years old to apply for a real estate license — one of the older permit ages in the United States. Most states allow permits at 15 or 15½, making Connecticut's 16-year minimum a state-specific fact commonly tested on the CT Real Estate exam."
    },
    {
        id: 2,
        question: "What is the legal BAC limit for adult drivers (age 21+) in Connecticut?",
        options: ["0.04%", "0.06%", "0.08%", "0.10%"],
        correctAnswer: 2,
        explanation: "Connecticut's per se DUI limit is 0.08% BAC for adult drivers. Reaching 0.08% is itself sufficient for a DUI charge regardless of apparent impairment. Commercial drivers face a stricter 0.04% limit."
    },
    {
        id: 3,
        question: "Under Connecticut's GDL program, how many hours of supervised driving must a permit holder complete before upgrading to a restricted license?",
        options: ["20 hours", "30 hours", "40 hours", "50 hours"],
        correctAnswer: 2,
        explanation: "Connecticut law requires a minimum of 40 hours of supervised, behind-the-wheel driving practice before a 16- or 17-year-old permit holder can apply for a real estate license."
    },
    {
        id: 4,
        question: "Connecticut requires a real estate license holder to hold the permit for how long before applying for a restricted license?",
        options: ["3 months", "6 months", "9 months", "12 months"],
        correctAnswer: 1,
        explanation: "Connecticut requires permit holders to hold the real estate license for at least 6 months (180 days) before applying for a restricted operator's license at age 16½. This holding period ensures permit holders gain adequate supervised experience."
    },
    {
        id: 5,
        question: "Under Connecticut law, what curfew restriction applies to licensed 16- and 17-year-old drivers?",
        options: ["They cannot drive between 10:00 PM and 6:00 AM.", "They cannot drive between 11:00 PM and 5:00 AM.", "They cannot drive between Midnight and 5:00 AM.", "They cannot drive after 9:00 PM."],
        correctAnswer: 1,
        explanation: "In Connecticut, licensed drivers who are 16 or 17 years old are prohibited from driving between 11:00 PM and 5:00 AM, unless traveling for employment, school, religious activities, or medical necessity."
    },
    {
        id: 6,
        question: "What is the default speed limit on urban streets in Connecticut when no speed limit sign is posted?",
        options: ["20 mph", "25 mph", "30 mph", "35 mph"],
        correctAnswer: 2,
        explanation: "Connecticut's default speed limit in urban areas is 25 mph when no other limit is posted. In business and residential districts, the default is specifically set at 25 mph — drivers should not assume a higher speed is legal without a posted sign."
    },
    {
        id: 7,
        question: "You are driving on a Connecticut highway and see an emergency vehicle pulled over with flashing lights. What does the Move Over law require?",
        options: ["Honk and slow to 20 mph", "Move one lane away from the stopped vehicle if safe; if not, slow to a safe speed", "Stop completely until the vehicle leaves", "Only move over for police — not tow trucks or utility workers"],
        correctAnswer: 1,
        explanation: "Connecticut's Move Over law requires drivers to move one lane away from any stopped emergency, law enforcement, fire, or towing vehicle with flashing lights. If a lane change is not safe, slow to a reasonable and safe speed."
    },
    {
        id: 8,
        question: "In Connecticut, when must you stop for a pedestrian?",
        options: ["Only when the pedestrian is in a marked crosswalk", "Whenever a pedestrian is crossing or about to cross the roadway at a crosswalk — marked or unmarked", "Only when a pedestrian signal is present", "Only when the pedestrian is in your direct lane of travel"],
        correctAnswer: 1,
        explanation: "Connecticut law requires drivers to yield to and stop for pedestrians at all crosswalks — including unmarked intersections. Any intersection where two roads meet is legally a crosswalk even without painted lines. Failing to yield to a pedestrian at a crosswalk is a serious moving violation."
    },
    {
        id: 9,
        question: "What is the speed limit in a Connecticut school zone when children are present?",
        options: ["10 mph", "15 mph", "20 mph", "25 mph"],
        correctAnswer: 2,
        explanation: "Connecticut school zones have a 20 mph speed limit when children are present or zone warning lights are flashing. Always reduce speed well before entering the zone and remain alert for children near the road."
    },
    {
        id: 10,
        question: "What must you do when a school bus stops on a two-lane Connecticut road and displays flashing red lights?",
        options: ["Stop only if driving behind the bus", "Slow to 15 mph and pass carefully", "Stop in both directions at least 10 feet from the bus until lights stop flashing", "Yield only if children are visibly crossing"],
        correctAnswer: 2,
        explanation: "Connecticut law requires vehicles in both directions on an undivided road to stop at least 10 feet from a school bus with flashing red lights and an extended stop arm. You may not proceed until the lights stop flashing and the arm retracts."
    },
    {
        id: 11,
        question: "Under Connecticut law, what happens if a driver under 21 is found driving with any alcohol in their system?",
        options: ["They face only a civil fine on the first offense", "They are subject to DUI penalties under the zero tolerance law since the legal limit is 0.02% for under-21 drivers", "No penalty unless above 0.08%", "Only a license warning is issued for the first offense"],
        correctAnswer: 1,
        explanation: "Connecticut's zero tolerance law sets an illegal BAC limit of 0.02% for drivers under 21. Any BAC at or above 0.02% results in license suspension and DUI-related penalties. This effectively prohibits any alcohol use before driving for underage drivers."
    },
    {
        id: 12,
        question: "Can you turn right on a red light in Connecticut?",
        options: ["No, right turns on red are prohibited statewide", "Yes, after a complete stop and yielding, unless a sign prohibits it", "Yes, without stopping if no pedestrians are visible", "Only between 7 AM and 9 PM"],
        correctAnswer: 1,
        explanation: "Right turns on red are permitted in Connecticut after a complete stop and yielding to pedestrians and cross traffic. Always check for 'No Turn on Red' signs — they are common at many Connecticut intersections."
    },
    {
        id: 13,
        question: "On a two-lane Connecticut road, a solid yellow line is on your side of the center. You are approaching a slow-moving vehicle. May you pass?",
        options: ["Yes, if you can complete the pass quickly", "Yes, if the other vehicle is going more than 15 mph below the speed limit", "No, the solid yellow line on your side prohibits passing by crossing the center", "Yes, if you signal for at least 100 feet first"],
        correctAnswer: 2,
        explanation: "A solid yellow center line on your side of the road absolutely prohibits crossing to pass another vehicle. Wait for a section where a dashed yellow line is on your side before attempting to pass."
    },
    {
        id: 14,
        question: "What is the minimum following distance recommended in Connecticut for normal driving conditions?",
        options: ["1 second", "2 seconds", "3 seconds", "4 seconds"],
        correctAnswer: 2,
        explanation: "Connecticut recommends a minimum 3-second following distance under normal conditions. In rain, fog, or heavy traffic, increase to 4–6 seconds. The 3-second rule gives adequate time to react to a sudden stop in front of you."
    },
    {
        id: 15,
        question: "In Connecticut, when an emergency vehicle with sirens and lights approaches from any direction, you must:",
        options: ["Speed up to the next intersection and pull over", "Stop immediately in your current lane", "Pull to the right edge of the road and stop until the vehicle has passed", "Move to the left lane and slow down"],
        correctAnswer: 2,
        explanation: "Connecticut law requires drivers to immediately pull to the right side of the road and stop when an emergency vehicle with active lights and siren approaches from any direction. Remain stopped until the vehicle has completely passed."
    },
    {
        id: 16,
        question: "What does a flashing red light at a Connecticut intersection mean?",
        options: ["Slow down and proceed with caution", "Stop completely, yield to traffic, then proceed when safe", "The signal is broken — treat as an uncontrolled intersection", "Yield to cross traffic only"],
        correctAnswer: 1,
        explanation: "A flashing red light is treated as a stop sign in Connecticut. Come to a complete stop, look in all directions, yield to existing traffic and pedestrians, and proceed when the way is clear."
    },
    {
        id: 17,
        question: "What is the maximum speed limit on most Connecticut interstates in rural areas?",
        options: ["55 mph", "60 mph", "65 mph", "70 mph"],
        correctAnswer: 2,
        explanation: "Connecticut's maximum interstate speed limit is 65 mph. Urban sections and portions near Hartford and New Haven are frequently posted at lower limits. Always follow posted signs — Connecticut does not have 70 mph rural interstates like some western states."
    },
    {
        id: 18,
        question: "For a newly licensed 16- or 17-year-old driver in Connecticut, who is allowed in the vehicle as a passenger during the first six months?",
        options: ["Only immediate family members.", "Only a licensed driving instructor, parents/guardians, or one qualified trainer age 20+.", "Any passenger under the age of 21.", "Up to three non-family passengers."],
        correctAnswer: 1,
        explanation: "During the first six months of holding a license, a 16- or 17-year-old Connecticut driver may only carry a licensed driving instructor, parents or a legal guardian, or one person who is at least 20 years old and has held a license for 4+ consecutive years without suspension."
    },
    {
        id: 19,
        question: "Under Connecticut's implied consent law, refusing to take a chemical test after a DUI stop results in:",
        options: ["No penalty — refusal is a constitutional right", "A 6-month license suspension for a first refusal", "Only a fine with no license action", "A warning on your first offense"],
        correctAnswer: 1,
        explanation: "Connecticut's implied consent law means that driving on public roads constitutes consent to chemical testing. A first-offense refusal results in a 6-month license suspension separate from any DUI charges. Refusal can also be used as evidence in court."
    },
    {
        id: 20,
        question: "In Connecticut, what does a solid white line at a crosswalk or intersection indicate?",
        options: ["A no-parking zone", "A stop line — you must stop before the line at a stop sign or red light", "A bike lane boundary", "The edge of the travel lane"],
        correctAnswer: 1,
        explanation: "A solid white line across the road at an intersection is a stop line. You must stop with your front wheels behind this line when a stop sign or red light requires a stop. Rolling past the stop line and then stopping is a violation."
    },
    {
        id: 21,
        question: "Under Connecticut law, who must wear a seatbelt, and what is the fine for failing to do so?",
        options: ["Only front-seat occupants; the fine is $50.", "Only passengers under 18; the fine is $100.", "All drivers and passengers must wear seatbelts; the fine is $75 for each violator.", "Only the driver; the fine is $25."],
        correctAnswer: 2,
        explanation: "Connecticut law requires all drivers and passengers to wear a seatbelt. If either the driver or any passenger fails to do so, they can be cited individually and fined $75."
    },
    {
        id: 22,
        question: "You arrive at a 4-way stop at the same time as another vehicle on your right. Who has the right of way?",
        options: ["You have the right of way because you are on the left", "The vehicle on your right has the right of way", "Whoever is going straight has priority", "The larger vehicle has priority"],
        correctAnswer: 1,
        explanation: "When two vehicles arrive simultaneously at a 4-way stop, the vehicle on the right has the right of way. The yield-to-the-right rule is a universal standard in the United States. Always be cautious — another driver may not follow the rule correctly."
    },
    {
        id: 23,
        question: "Which of the following cell phone restrictions applies to 16- and 17-year-old drivers in Connecticut?",
        options: ["They may use hands-free cell phones only.", "They may use cell phones at any time.", "They may not use any cell phone or mobile electronic device, even if hands-free.", "They may only use cell phones for text messaging."],
        correctAnswer: 2,
        explanation: "In Connecticut, real estate license holders and 16- and 17-year-old licensed drivers are strictly prohibited from using any cell phone (including hands-free devices) or mobile electronic devices while driving, except in an emergency."
    },
    {
        id: 24,
        question: "A driver with a Connecticut real estate license is driving alone at 7 PM on a Tuesday. Is this legal?",
        options: ["Yes, permit holders may drive alone during daylight hours only", "No, permit holders must always drive with a licensed adult at least 20 years old in the front seat", "Yes, real estate license holders have no passenger restrictions", "No, permit holders may only drive on weekends"],
        correctAnswer: 1,
        explanation: "Connecticut real estate license holders must always be accompanied by a licensed adult at least 20 years old sitting in the front passenger seat. Driving alone on a real estate license is illegal regardless of the time of day."
    },
    {
        id: 25,
        question: "Under Connecticut law, when are you required to turn on your vehicle's headlights?",
        options: ["Only from 8:00 PM to 6:00 AM.", "From sunset to sunrise, when visibility is less than 500 feet, and whenever you use your windshield wipers.", "Only during heavy rain or snow storms.", "Only when driving on highways after dark."],
        correctAnswer: 1,
        explanation: "Connecticut law requires drivers to turn on headlights from sunset to sunrise, whenever visibility is reduced to less than 500 feet, and any time windshield wipers are in use due to rain, snow, or sleet."
    },
]

export const connecticutPermitTestFaq: { question: string; answer: string }[] = [
    {
        question: "How many questions are on the Connecticut Real Estate Exam?",
        answer: "The Connecticut Real Estate knowledge test has 25 multiple-choice questions. You need to answer at least 20 correctly (80%) to pass."
    },
    {
        question: "What score do you need to pass the Connecticut permit test?",
        answer: "You need 20 out of 25 questions correct — a passing score of 80%. Missing 6 or more questions means you fail."
    },
    {
        question: "How many questions can you miss on the Connecticut Real Estate Exam?",
        answer: "You can miss up to 5 questions on the 25-question knowledge test. Missing 6 or more means you fail and must wait 1 day before retaking."
    },
    {
        question: "Is there a time limit on the Connecticut permit test?",
        answer: "No. The Connecticut Real Estate does not impose a time limit on the knowledge test. Take your time with each question."
    },
    {
        question: "What is the retake policy if I fail the Connecticut permit test?",
        answer: "If you fail, you must wait 1 day before retaking. Use that time to review the areas where you struggled. Scoring 90%+ consistently on practice tests before your appointment is the best preparation strategy."
    },
    {
        question: "Can I take the Connecticut permit test online?",
        answer: "No. As of 2026, all Connecticut Real Estate knowledge tests must be taken in person at a Connecticut Real Estate office."
    },
    {
        question: "What is the minimum age to get a real estate license in Connecticut?",
        answer: "Connecticut requires applicants to be at least 16 years old to apply for a real estate license — older than most states, which allow permits at 15 or 15½. After holding the permit for 6 months, they can apply for a restricted license at age 16½."
    },
    {
        question: "How many supervised driving hours does Connecticut require?",
        answer: "Connecticut requires 40 hours of supervised driving practice under the GDL program. While there is no statutory minimum for nighttime driving hours, the Real Estate recommends including at least 5 hours of driving at night."
    },
]
