import type { Question, StatePermitTestConfig } from '@/components/state-permit-test/types'

export const alabamaPermitTestConfig: StatePermitTestConfig = {
    stateName: 'Alabama',
    stateCode: 'AL',
    departmentName: 'Alabama Law Enforcement Agency',
    departmentAbbr: 'ALEA',
    realQuestionCount: 30,
    realPassCount: 24,
    passPercent: 80,
    retakePolicy: 'Can retake after 1 day if failed',
    mainPageUrl: '/alabama-real-estate-permit-test',
    pageUrl: '/alabama-real-estate-permit-test-30-questions',
    stateGuideUrl: '/state-guides/alabama',
    handbookUrl: '/handbooks/alabama',
    year: 2026,
}

export const alabamaPermitTestQuestions: Question[] = [
    {
        id: 1,
        question: "What is the default speed limit in an urban area in Alabama when no speed limit sign is posted?",
        options: ["20 mph", "25 mph", "30 mph", "35 mph"],
        correctAnswer: 1,
        explanation: "Alabama sets the default urban speed limit at 25 mph when no sign is posted. This is lower than some neighboring states (e.g., Tennessee's 30 mph). Always look for posted signs, as specific roads within urban areas may have different limits."
    },
    {
        id: 2,
        question: "What is Alabama's speed limit on most rural two-lane roads when no sign is posted?",
        options: ["45 mph", "50 mph", "55 mph", "60 mph"],
        correctAnswer: 2,
        explanation: "The default rural road speed limit in Alabama is 55 mph. On interstate highways, the limit is higher — typically 70 mph for passenger vehicles. Always check posted signs, especially in areas transitioning from rural to suburban."
    },
    {
        id: 3,
        question: "Under Alabama's GDL program, at what age can a teenager apply for a real estate license?",
        options: ["14", "15", "16", "15 and a half"],
        correctAnswer: 1,
        explanation: "In Alabama, teens can apply for a real estate license at age 15. The GDL program requires a mandatory supervised driving period before being eligible for a restricted license at age 16."
    },
    {
        id: 4,
        question: "Alabama's GDL program requires permit holders to complete how many hours of supervised driving before upgrading to a restricted license?",
        options: ["30 hours (including 10 at night)", "40 hours (including 10 at night)", "50 hours (including 10 at night)"],
        correctAnswer: 2,
        explanation: "Alabama requires a minimum of 50 hours of supervised driving practice, of which at least 10 hours must be at night, before applying for a Stage II restricted license. Alternatively, the applicant may complete an approved real estate exam prep course."
    },
    {
        id: 5,
        question: "Under Alabama's Graduated Driver License (GDL) law, a restricted license holder (age 16, or age 17 with a license for less than 6 months) may not operate a vehicle between which hours?",
        options: ["11:00 p.m. and 5:00 a.m.", "12:00 midnight and 6:00 a.m.", "10:00 p.m. and 6:00 a.m."],
        correctAnswer: 1,
        explanation: "In Alabama, Graduated Driver License (GDL) stage II (restricted license) holders who are 16 years old, or 17 years old with a license held for less than 6 months, are prohibited from operating a vehicle between 12:00 midnight and 6:00 a.m., unless accompanied by a parent/guardian, a licensed driver age 21 or older with parental consent, or driving for work, school events, religious events, or medical emergencies."
    },
    {
        id: 6,
        question: "Under Alabama's GDL program, what passenger restriction applies to a restricted license holder (age 16, or age 17 with a license for less than 6 months)?",
        options: ["No passengers under the age of 21 are allowed.", "May not have more than 1 non-family passenger unless accompanied by a parent, guardian, or supervising driver age 21 or older.", "May have up to three non-family passengers."],
        correctAnswer: 1,
        explanation: "Alabama's GDL law restricts stage II (restricted license) holders to carrying no more than 1 non-family passenger, unless accompanied by a parent, legal guardian, or a supervising licensed driver who is at least 21 years of age."
    },
    {
        id: 7,
        question: "The legal BAC limit for a driver age 21 or older in Alabama is:",
        options: ["0.04%", "0.06%", "0.08%", "0.10%"],
        correctAnswer: 2,
        explanation: "Alabama, like all U.S. states, sets the per se DUI limit at 0.08% BAC for drivers 21 and older. A BAC at or above this level is sufficient to establish impairment under Alabama law, regardless of how the driver appears or behaves."
    },
    {
        id: 8,
        question: "Under Alabama's zero tolerance law, what BAC level is illegal for a driver under 21?",
        options: ["Any measurable amount — 0.00%", "0.02%", "0.04%", "0.08%"],
        correctAnswer: 1,
        explanation: "Alabama's zero tolerance law for drivers under 21 sets the illegal BAC threshold at 0.02%. A driver under 21 with a BAC of 0.02% or higher faces criminal DUI charges and license suspension. This is stricter than the 0.08% adult standard."
    },
    {
        id: 9,
        question: "Under Alabama's implied consent law, refusing a chemical test after a DUI stop will result in:",
        options: ["No penalty — refusal is a protected right", "A 90-day license suspension for a first offense", "The same fine as a minor traffic violation", "Immediate arrest on additional charges"],
        correctAnswer: 1,
        explanation: "Alabama's implied consent law means drivers have agreed to chemical testing by driving on state roads. A first-offense refusal results in a 90-day license suspension. Subsequent refusals carry longer suspensions. The refusal may also be presented as evidence in court."
    },
    {
        id: 10,
        question: "Alabama law requires all occupants of a vehicle to:",
        options: ["Wear a seatbelt only if the vehicle is traveling over 25 mph", "Wear a seatbelt — all occupants in all seating positions", "Wear a seatbelt only if they are under 18 or in the front seat", "Wear a seatbelt only on highways"],
        correctAnswer: 1,
        explanation: "Alabama requires all vehicle occupants — front and back seat — to wear a seatbelt. Alabama has primary enforcement for front-seat occupants, meaning an officer can stop a vehicle solely for a front-seat seatbelt violation."
    },
    {
        id: 11,
        question: "In Alabama, a driver operating a vehicle while using a handheld cell phone is:",
        options: ["Only prohibited for commercial drivers", "Prohibited for drivers of all ages and license types", "Only prohibited for drivers under 18", "Prohibited only in school zones and construction zones"],
        correctAnswer: 1,
        explanation: "Alabama prohibits all drivers from using a handheld mobile phone while driving. This applies to drivers of all ages — not just teens. Hands-free devices are permitted for adult drivers. Drivers under 18 face even stricter restrictions and may not use any mobile device while driving."
    },
    {
        id: 12,
        question: "What speed limit applies in Alabama school zones?",
        options: ["15 mph", "20 mph", "25 mph", "30 mph"],
        correctAnswer: 2,
        explanation: "Alabama school zones have a 25 mph speed limit when children are present or warning lights are flashing. Reduce speed well before the zone and watch for children crossing the road or waiting at crosswalks."
    },
    {
        id: 13,
        question: "When approaching a stationary emergency vehicle with flashing lights on an Alabama highway, what does the Move Over law require?",
        options: ["Stop completely until the vehicle moves", "Only slow down if the shoulder is narrow", "Move one lane away from the vehicle if safe, or slow to a safe speed if not possible", "Move over only for police or fire vehicles — not tow trucks"],
        correctAnswer: 2,
        explanation: "Alabama's Move Over law requires drivers to move one lane away from any stopped emergency, law enforcement, towing, or utility vehicle displaying flashing lights. If a lane change is not safe, reduce to a safe and appropriate speed. Violating this law is a moving violation."
    },
    {
        id: 14,
        question: "On a two-lane road, when a school bus activates its red flashing lights and stop arm, what must ALL approaching drivers do?",
        options: ["Stop only if traveling in the same direction as the bus", "Slow to 15 mph and proceed cautiously", "Stop at least 20 feet from the bus — in both directions — until lights stop flashing", "Yield to children but may pass slowly if no children are visible"],
        correctAnswer: 2,
        explanation: "On an undivided two-lane road in Alabama, vehicles traveling in BOTH directions must stop at least 20 feet from a school bus with flashing red lights. Wait until the arm retracts and lights stop flashing before proceeding. On a divided highway, only traffic following the bus must stop."
    },
    {
        id: 15,
        question: "What is the recommended following distance under normal driving conditions in Alabama?",
        options: ["1 second", "2 seconds", "3 seconds", "4 seconds"],
        correctAnswer: 1,
        explanation: "Alabama recommends using the 'two-second rule' as the minimum safe following distance under normal, ideal road and weather conditions."
    },
    {
        id: 16,
        question: "You arrive at a 4-way stop at the same time as a driver on your left. Who has the right of way?",
        options: ["The driver on your left, because they were there first", "You have the right of way — the driver to your left must yield to you", "Whoever signals first proceeds first", "The driver going straight always has priority"],
        correctAnswer: 1,
        explanation: "At a 4-way stop when two vehicles arrive simultaneously, the driver to the RIGHT has the right of way. Since the other driver is to your LEFT, you are to their right — meaning you have the right of way and should proceed first."
    },
    {
        id: 17,
        question: "Right turns on red lights in Alabama are:",
        options: ["Prohibited statewide", "Permitted after a complete stop, unless a sign prohibits it", "Permitted without stopping if no traffic is visible", "Permitted only between 6 AM and 8 PM"],
        correctAnswer: 1,
        explanation: "Right turns on red are permitted in Alabama after a complete stop and yielding to all pedestrians and cross traffic. If a 'No Turn on Red' sign is posted, the turn is prohibited. Always come to a full stop and look carefully before proceeding."
    },
    {
        id: 18,
        question: "A flashing yellow traffic light at an Alabama intersection means:",
        options: ["Stop completely before proceeding", "The signal is broken — treat as a 4-way stop", "Slow down and proceed with caution", "Yield to all cross traffic before entering"],
        correctAnswer: 2,
        explanation: "A flashing yellow signal means slow down and proceed with caution. Unlike a flashing red, a full stop is not required. Scan for crossing traffic and pedestrians before entering the intersection. Flashing signals are commonly used at intersections with lower traffic volume."
    },
    {
        id: 19,
        question: "On a two-lane road in Alabama, a solid yellow line on YOUR side of the center means:",
        options: ["You may pass if you signal for 200 feet first", "Passing is prohibited — you cannot cross the center line", "You are in a designated passing zone", "The road is about to merge — stay right"],
        correctAnswer: 1,
        explanation: "A solid yellow line on your side of the road prohibits crossing the center line to pass. This marking identifies areas with limited sight distance — such as hills, curves, and intersections. A dashed yellow line on your side indicates that passing is permitted when safe."
    },
    {
        id: 20,
        question: "What is the maximum speed limit on most Alabama interstate highways for passenger vehicles?",
        options: ["65 mph", "70 mph", "75 mph", "80 mph"],
        correctAnswer: 1,
        explanation: "Most Alabama interstates have a maximum speed limit of 70 mph for passenger vehicles. Some urban interstate sections through Birmingham or Huntsville may have posted limits of 60–65 mph. Always follow the posted sign, which may be lower in congested areas."
    },
    {
        id: 21,
        question: "You are approaching a pedestrian crosswalk and a pedestrian is waiting on the curb to cross. What are you required to do?",
        options: ["Slow down only if they are already in the street", "Stop and yield to the pedestrian before they step into the road", "Honk to warn the pedestrian and continue at normal speed", "Proceed if the pedestrian is not yet in your lane"],
        correctAnswer: 1,
        explanation: "Alabama law requires drivers to stop and yield to pedestrians at crosswalks — even before they step into the road. Pedestrian right-of-way is a frequently tested concept. Yielding to pedestrians is both a legal requirement and a critical safety practice."
    },
    {
        id: 22,
        question: "When an emergency vehicle with lights and siren approaches from behind, Alabama law requires you to:",
        options: ["Accelerate to stay ahead of it", "Stop immediately in your current lane", "Pull to the right edge of the road and stop until the vehicle has passed", "Move to the center lane if on a multi-lane road"],
        correctAnswer: 2,
        explanation: "Alabama law requires you to immediately pull to the right side of the road and stop when an emergency vehicle approaches with active lights and siren, regardless of its direction of travel. Wait until the vehicle has fully passed before reentering the lane."
    },
    {
        id: 23,
        question: "What does an orange diamond-shaped sign on Alabama roads indicate?",
        options: ["A permanent speed reduction ahead", "A work or construction zone requiring extra caution", "A recreational area exit ahead", "A school crossing zone"],
        correctAnswer: 1,
        explanation: "Orange diamond-shaped signs indicate work zones and construction areas. Speed limits in Alabama work zones are strictly enforced — fines are doubled in active work zones when workers are present. Slow down, stay alert, and watch for lane shifts and workers on or near the road."
    },
    {
        id: 24,
        question: "What is the recommended following distance when driving in poor weather or road conditions in Alabama?",
        options: ["2 seconds", "3 seconds", "4 or 5 seconds", "10 seconds"],
        correctAnswer: 2,
        explanation: "In poor weather or bad road conditions, the Alabama Driver Manual recommends increasing your following distance to a four or five second count."
    },
    {
        id: 25,
        question: "You want to change lanes on an Alabama highway. What steps are required before moving over?",
        options: ["Signal only — mirrors are optional at highway speeds", "Check mirrors, signal, and physically look over your shoulder to check the blind spot", "Just check the side mirror on the side you are moving toward", "Signal for 100 feet, then move — no mirror check needed"],
        correctAnswer: 1,
        explanation: "Safe lane changes require three steps: (1) check both mirrors for nearby traffic, (2) signal your intent for at least 100 feet before moving, and (3) physically turn your head to check the blind spot — the area mirrors cannot show. Many crashes happen when drivers rely on mirrors alone."
    },
    {
        id: 26,
        question: "Under Alabama law, when must headlights be used?",
        options: ["Only between midnight and 5 AM", "From sunset to sunrise and whenever visibility is less than 500 feet", "Only when it is raining or snowing", "Only on rural roads without streetlights"],
        correctAnswer: 1,
        explanation: "Alabama requires headlights from sunset to sunrise and any time weather or road conditions reduce visibility to less than 500 feet. This includes rain, fog, and dust. Many states also require headlights whenever wipers are in use — always check local rules."
    },
    {
        id: 27,
        question: "What does a pentagon (five-sided) shaped sign indicate in Alabama?",
        options: ["A state highway route marker", "A school zone or school crossing ahead", "A yield condition at a merge", "An agricultural or farm zone"],
        correctAnswer: 1,
        explanation: "A pentagon-shaped sign (pointing downward, like an arrowhead) is used exclusively for school zone and school crossing warnings in the United States. This distinctive shape makes school zone signs immediately recognizable even at a distance."
    },
    {
        id: 28,
        question: "You are driving on an undivided Alabama road and a funeral procession is passing from the opposite direction. What should you do?",
        options: ["Maintain normal speed — funeral processions have no special right of way", "Pull to the right and stop until the procession has passed", "Proceed normally but do not enter the procession", "Flash your headlights to signal respect"],
        correctAnswer: 1,
        explanation: "Alabama law requires drivers to yield to funeral processions — pull to the right and stop until the procession has completely passed. Funeral processions have right-of-way at intersections. Cutting into or through a procession is both illegal and disrespectful."
    },
    {
        id: 29,
        question: "At an uncontrolled intersection in Alabama where two vehicles arrive at the same time from different directions, who has the right of way?",
        options: ["The vehicle traveling on the larger road", "The vehicle that flashes headlights first", "The vehicle on the RIGHT has the right of way over the vehicle on the LEFT", "The vehicle going straight has priority over turning vehicles"],
        correctAnswer: 2,
        explanation: "At an uncontrolled intersection when two vehicles arrive simultaneously, the driver on the RIGHT has the right of way. The driver on the left must yield. This basic right-of-way rule applies at 4-way stops, intersections without signs, and anywhere two vehicles arrive at the same time."
    },
    {
        id: 30,
        question: "Unless otherwise posted, what is the statutory speed limit on unpaved roads in Alabama?",
        options: ["25 mph", "30 mph", "35 mph", "45 mph"],
        correctAnswer: 2,
        explanation: "Under Alabama statutory speed laws, the default speed limit on unpaved roads is 35 miles per hour, unless another limit is posted."
    },
]

export const alabamaPermitTestFaq: { question: string; answer: string }[] = [
    {
        question: "How many questions are on the Alabama ALEA permit test?",
        answer: "The Alabama permit test administered by the Alabama Law Enforcement Agency (ALEA) has 30 multiple-choice questions. You need at least 24 correct (80%) to pass."
    },
    {
        question: "What score do you need to pass the Alabama permit test?",
        answer: "You need 24 out of 30 correct — a passing score of 80%. Missing 7 or more questions means you fail and must wait 1 day before retaking."
    },
    {
        question: "How many questions can you miss on the Alabama permit test?",
        answer: "You can miss up to 6 questions on the 30-question test. Missing 7 or more means you fail."
    },
    {
        question: "Is there a time limit on the Alabama permit test?",
        answer: "No. The ALEA does not impose a strict time limit on the knowledge test. Take your time, but don't dwell too long on any single question."
    },
    {
        question: "What is Alabama's retake policy if I fail the permit test?",
        answer: "If you fail, you can retake the test after 1 day. Use that time to review the ALEA Driver Manual, especially sections where you made mistakes."
    },
    {
        question: "Can I take the Alabama permit test online?",
        answer: "No. As of 2026, all Alabama ALEA knowledge tests must be taken in person at an ALEA Driver License examining office."
    },
    {
        question: "What is Alabama's nighttime driving curfew for teen drivers?",
        answer: "Alabama has two different curfews: drivers under 16 may not drive after 10 PM; drivers aged 16 to under 18 may not drive between 11 PM and 6 AM. Both curfews allow exceptions for employment, school activities, or when accompanied by a licensed adult age 21 or older."
    },
    {
        question: "What is Alabama's zero tolerance law for underage drivers?",
        answer: "Alabama's zero tolerance law sets the illegal BAC for drivers under 21 at 0.02%. Any driver under 21 with a BAC of 0.02% or higher faces DUI charges and license suspension. The standard adult DUI limit is 0.08%."
    },
]
