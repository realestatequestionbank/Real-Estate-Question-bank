import type { Question, StatePermitTestConfig } from '@/components/state-permit-test/types'

export const texasPermitTestConfig: StatePermitTestConfig = {
    stateName: 'Texas',
    stateCode: 'TX',
    departmentName: 'Texas DPS',
    departmentAbbr: 'DPS',
    realQuestionCount: 30,
    realPassCount: 21,
    passPercent: 70,
    retakePolicy: 'Can retake after 1 day if failed',
    mainPageUrl: '/texas-dps-permit-test',
    pageUrl: '/texas-dps-permit-test-30-questions',
    stateGuideUrl: '/state-guides/texas',
    handbookUrl: '/handbooks/texas',
    year: 2026,
}

export const texasPermitTestQuestions: Question[] = [
    {
        id: 1,
        question: "At what minimum age can a Texas teenager apply for a real estate license (Learner License)?",
        options: ["14", "15", "16", "17"],
        correctAnswer: 1,
        explanation: "Texas allows applicants to apply for a Learner License at age 15. The Learner License permits supervised driving practice with a licensed adult (age 21+) in the front seat. Texas has a lower permit age than many states, reflecting the state's large rural areas where teens often need transportation."
    },
    {
        id: 2,
        question: "The Texas DPS knowledge test requires you to answer 21 out of 30 questions correctly. What is this passing threshold as a percentage?",
        options: ["75%", "70%", "80%", "83%"],
        correctAnswer: 1,
        explanation: "Texas has one of the more lenient passing thresholds — only 70% (21 out of 30). This means you can miss up to 9 questions and still pass. While this lower threshold gives more margin for error, it's still important to study thoroughly because some states like Pennsylvania require 83%."
    },
    {
        id: 3,
        question: "What is the legal BAC limit for drivers age 21 and older in Texas?",
        options: ["0.04%", "0.06%", "0.08%", "0.10%"],
        correctAnswer: 2,
        explanation: "Texas sets the per se DWI (Driving While Intoxicated) limit at 0.08% BAC for drivers 21 and older. Note that Texas uses the term 'DWI' (Driving While Intoxicated), not 'DUI' (Driving Under the Influence), which is the terminology used in many other states. Reaching 0.08% alone is sufficient for a DWI charge."
    },
    {
        id: 4,
        question: "Texas uses the term 'DWI' rather than 'DUI.' What does DWI stand for and when does it apply?",
        options: ["Driving While Impaired — applies only to drug-related offenses", "Driving While Intoxicated — applies when BAC is 0.08% or higher, or when impaired by alcohol or drugs", "Driving With Impairment — applies only when involved in an accident", "Driving Without Insurance — a separate Texas offense"],
        correctAnswer: 1,
        explanation: "In Texas, the law uses DWI (Driving While Intoxicated) rather than DUI. DWI applies when a driver's BAC is 0.08% or higher OR when they are impaired by alcohol or drugs to the point that they lack normal use of their mental or physical faculties. This is an important distinction — Texas DWI law is broader than just exceeding a BAC threshold."
    },
    {
        id: 5,
        question: "Texas holds the record for the highest posted speed limit in the United States. What is that speed limit, and where is it found?",
        options: ["80 mph on most rural interstates", "85 mph on a toll road in rural Texas (TX-130 between Austin and San Antonio)", "90 mph on open desert highways in West Texas", "75 mph — same as most other western states"],
        correctAnswer: 1,
        explanation: "Texas State Highway 130 (SH-130) in rural Central Texas has a posted speed limit of 85 mph — the highest posted speed limit of any road in the United States. This section runs between Seguin and Austin. Despite this maximum, drivers must still reduce speed for traffic, weather, and road conditions."
    },
    {
        id: 6,
        question: "On Texas rural highways, different speed limits apply during the day and night. What are the daytime and nighttime speed limits for passenger vehicles on rural highways in Texas?",
        options: ["Day: 75 mph / Night: 65 mph", "Day: 70 mph / Night: 65 mph", "Day: 65 mph / Night: 55 mph", "Day: 80 mph / Night: 70 mph"],
        correctAnswer: 1,
        explanation: "Texas sets different speed limits for day and night on rural highways: 70 mph during the day and 65 mph at night. This split limit reflects reduced visibility and increased hazard at night. Trucks and vehicles towing trailers face lower limits: 60 mph during the day and 55 mph at night on rural highways."
    },
    {
        id: 7,
        question: "Texas's zero tolerance law for drivers under 21 sets the illegal BAC at:",
        options: ["0.00% — any detectable amount", "0.02%", "0.04%", "0.05%"],
        correctAnswer: 0,
        explanation: "Texas has a true zero tolerance law for drivers under 21 — any detectable amount of alcohol is illegal. A driver under 21 with any measurable BAC can be charged with a DUI (minor DUI, which is different from the standard DWI). This is stricter than many states that set the underage threshold at 0.02%."
    },
    {
        id: 8,
        question: "Under Texas's GDL program, a teen with a Learner License must be accompanied by a licensed driver who is at least how old?",
        options: ["18 years old", "21 years old", "25 years old", "Any licensed adult"],
        correctAnswer: 1,
        explanation: "Texas requires a licensed driver age 21 or older to be in the front seat alongside a Learner License holder. The supervising driver must be seated in the seat closest to the learner driver. The learner must complete at least 30 hours of supervised driving (including 10 hours at night) before applying for a provisional license."
    },
    {
        id: 9,
        question: "What is the maximum speed limit on Texas urban freeways unless otherwise posted?",
        options: ["55 mph", "60 mph", "65 mph", "70 mph"],
        correctAnswer: 2,
        explanation: "Texas urban freeways typically have a posted speed limit of 65 mph, which is lower than rural freeway limits of 70–75 mph. In some busy urban areas like Houston and Dallas, certain sections may have even lower limits. Always follow posted signs — Texas has some of the longest and most varied highway systems in the US."
    },
    {
        id: 10,
        question: "You are driving in Texas and see an emergency vehicle with lights and siren approaching. What must you do?",
        options: ["Pull to the left side and stop", "Slow to 25 mph and stay in your lane", "Pull to the right edge of the road and stop", "Speed up to the next turnout and exit"],
        correctAnswer: 2,
        explanation: "Texas law requires drivers to pull as far to the right as possible and stop when an authorized emergency vehicle with activated lights and/or siren approaches. Stay stopped until the emergency vehicle has passed. Never block an intersection when pulling over — Texas law enforcement strictly enforces emergency vehicle yielding."
    },
    {
        id: 11,
        question: "Texas's Move Over law requires drivers approaching a stopped emergency, police, or tow truck with flashing lights to:",
        options: ["Sound their horn and proceed at normal speed", "Slow to 20 mph regardless of the speed limit", "Move to a lane not adjacent to the stopped vehicle if possible, or reduce speed by 20 mph below the posted limit if a lane change is not safe", "Stop completely until the emergency worker signals you to proceed"],
        correctAnswer: 2,
        explanation: "Texas's Move Over law requires drivers to vacate the lane closest to a stopped emergency or service vehicle (move over one lane), or if that is not possible, slow to 20 mph below the posted speed limit. On roads posted at 25 mph or less, slow to 5 mph. Texas has strengthened this law significantly after crashes involving roadside workers."
    },
    {
        id: 12,
        question: "In Texas, what is the default speed limit on most urban streets when no speed limit sign is posted?",
        options: ["25 mph", "30 mph", "35 mph", "40 mph"],
        correctAnswer: 0,
        explanation: "Texas's default urban speed limit is 30 mph when no other limit is posted. Some cities may set lower limits — for example, many areas near schools default to 25 mph or lower. Always look for posted signs, especially in Texas's many fast-growing cities like Austin, San Antonio, and Dallas-Fort Worth."
    },
    {
        id: 13,
        question: "A school bus in Texas has stopped with red flashing lights and an extended stop arm. Traffic behind the bus and oncoming traffic must stop at least:",
        options: ["10 feet from the bus", "20 feet from the bus", "30 feet from the bus", "50 feet from the bus"],
        correctAnswer: 1,
        explanation: "Texas law requires drivers in both directions on an undivided road to stop at least 20 feet from a school bus with activated red lights. Do not proceed until the red lights stop flashing and the stop arm retracts. On a divided highway with a median, only traffic behind the bus must stop. Violations carry heavy fines in Texas."
    },
    {
        id: 14,
        question: "What is the recommended minimum following distance on Texas highways under normal conditions?",
        options: ["1 second", "2 seconds", "3 seconds", "4 seconds"],
        correctAnswer: 2,
        explanation: "Texas recommends a minimum 3-second following distance under normal conditions. Given Texas's high speed limits — up to 75 mph on many rural highways — 3 seconds translates to a significantly longer physical distance at higher speeds. In rain, fog, or on wet pavement, increase to at least 4–6 seconds."
    },
    {
        id: 15,
        question: "What does a flashing yellow arrow at a Texas intersection signal mean?",
        options: ["You may turn in the direction of the arrow after a full stop", "You must yield to oncoming traffic and pedestrians before turning", "You have a protected turn — oncoming traffic is stopped", "Turn on yellow arrows is prohibited in Texas"],
        correctAnswer: 1,
        explanation: "A flashing yellow arrow means you may turn in the indicated direction but must first yield to oncoming vehicles and pedestrians. It is a permissive turn phase — not protected. Texas uses flashing yellow arrows at many intersections as a safer alternative to circular green turns because they make the yield requirement explicit."
    },
    {
        id: 16,
        question: "Texas requires all vehicle occupants to wear seatbelts. What is Texas's seatbelt enforcement type?",
        options: ["Secondary enforcement for all occupants", "Primary enforcement — police can stop you solely for a seatbelt violation", "Advisory only for adults in the back seat", "Only enforced for occupants under 17"],
        correctAnswer: 1,
        explanation: "Texas has primary seatbelt enforcement — officers can pull you over solely for not wearing a seatbelt without needing any other reason. All occupants — front and back seats — must wear seatbelts. Texas has some of the higher seatbelt violation fines in the US, particularly for children not properly restrained."
    },
    {
        id: 17,
        question: "When turning left at a Texas intersection, a driver must yield to:",
        options: ["Only vehicles in the opposing left-turn lane", "Oncoming vehicles that are close enough to be a hazard, and pedestrians crossing the street", "Only heavy trucks and buses in the intersection", "Nothing — left turn has the right of way once a green light shows"],
        correctAnswer: 1,
        explanation: "When turning left on a circular green light in Texas, you must yield to all oncoming vehicles that are close enough to be a hazard, as well as to any pedestrians crossing the street you are turning into. A green light gives you permission to enter the intersection but does not give you the right of way over oncoming traffic or pedestrians."
    },
    {
        id: 18,
        question: "Texas has extremely hot summers. Which of the following best describes how extreme heat affects vehicle performance and driver safety?",
        options: ["Heat improves tire traction and braking performance", "Heat can cause tire blowouts, reduced tire pressure accuracy, and increased driver fatigue", "Vehicle air conditioning is not legally required to work in Texas", "Heat has no significant effect on driving safety"],
        correctAnswer: 1,
        explanation: "Texas's extreme summer heat can cause tire blowouts from overinflation as air expands, increase driver fatigue significantly, and create dangerous road conditions including heat shimmer that reduces visibility. Always check tire pressure in extreme heat (hot tires can over-read pressure), ensure your cooling system works, and stay hydrated on long drives."
    },
    {
        id: 19,
        question: "What is the correct action when a traffic signal is not working (dark/no power) in Texas?",
        options: ["The road with the higher speed limit has the right of way", "The intersection becomes a four-way stop — treat every direction as a stop sign", "The first driver to reach the intersection goes first", "Proceed at normal speed — a dark signal means no restriction"],
        correctAnswer: 1,
        explanation: "When a traffic signal is not working (completely dark), Texas law requires treating the intersection as a four-way stop. All drivers must stop, yield to traffic that arrived first, and proceed when it is safe. Do not assume right of way just because you are on a busier road."
    },
    {
        id: 20,
        question: "In Texas, you must use your headlights from:",
        options: ["Midnight to 5 AM only", "30 minutes after sunset to 30 minutes before sunrise, and when visibility is less than 1,000 feet", "Only during officially declared weather emergencies", "Whenever driving outside of city limits"],
        correctAnswer: 1,
        explanation: "Texas requires headlights from 30 minutes after sunset to 30 minutes before sunrise, and whenever visibility is reduced to 1,000 feet or less due to rain, fog, smoke, or other conditions. If your windshield wipers are in use due to rain, your headlights must also be on."
    },
    {
        id: 21,
        question: "You want to pass a vehicle on a two-lane Texas highway. Which of the following is required before beginning a pass?",
        options: ["Sound your horn twice to alert the driver ahead", "Ensure there is a dashed center line on your side and sufficient sight distance ahead", "The vehicle ahead must be going at least 10 mph below the speed limit", "You must signal for at least 200 feet before passing"],
        correctAnswer: 1,
        explanation: "Before passing on a two-lane highway in Texas, you need: a dashed center line on your side (indicating passing is permitted), clear sight distance to complete the pass safely, enough speed to complete the pass quickly, and no oncoming traffic within the safe passing distance. Signal before moving left to begin your pass."
    },
    {
        id: 22,
        question: "What is the blood alcohol concentration (BAC) limit for commercial vehicle drivers in Texas?",
        options: ["0.08%", "0.06%", "0.04%", "0.02%"],
        correctAnswer: 2,
        explanation: "Commercial vehicle drivers in Texas are held to a stricter BAC limit of 0.04% — half the standard 0.08% limit for passenger vehicle drivers. This stricter standard applies because commercial vehicles are larger and more dangerous, and CDL holders are professional drivers held to higher standards."
    },
    {
        id: 23,
        question: "In Texas, what is the penalty for a first-time DWI conviction?",
        options: ["Warning and mandatory alcohol education only", "Fine up to $2,000, up to 180 days in jail, and license suspension up to 1 year", "License suspension only — no jail time for first offense", "Only a fine — no jail or license suspension for first offense"],
        correctAnswer: 1,
        explanation: "A first DWI conviction in Texas can result in: a fine up to $2,000, 3 to 180 days in jail (or 72 hours to 180 days if an open container was present), real estate license suspension for 90 days to 1 year, and an annual surcharge of $1,000–$2,000 for 3 years to keep the license. These penalties are among the strictest in the region."
    },
    {
        id: 24,
        question: "Texas has vast open plains and sudden severe weather. When encountering flash flood conditions, the correct action is:",
        options: ["Drive slowly through flooded roads — a few inches of water is safe", "Turn around — never drive through flooded roads regardless of depth", "Speed through flooded sections to reduce time in water", "Follow the vehicle ahead through the water"],
        correctAnswer: 1,
        explanation: "'Turn Around, Don't Drown' is a key safety message in Texas. Flash floods are sudden and dangerous — just 6 inches of moving water can knock a person down, and 12 inches can carry a small vehicle. Never drive through flooded roads or water covering the road surface. The road may be washed out beneath the water."
    },
    {
        id: 25,
        question: "A Texas teenager with a provisional license (age 16–17) has a nighttime driving restriction. When may a provisional license holder NOT drive without a licensed supervising adult?",
        options: ["Between 10 PM and 5 AM", "Between 11 PM and 5 AM", "Between midnight and 5 AM", "Between midnight and 6 AM"],
        correctAnswer: 1,
        explanation: "Texas provisional license holders (age 16–17) may not drive between midnight and 5 AM without a licensed adult (21+) in the front seat. Note: This curfew is midnight to 5 AM — later than some states. Exceptions include driving to or from work, school, or church-sponsored activities."
    },
    {
        id: 26,
        question: "When can a driver legally make a U-turn in Texas?",
        options: ["Any time, as long as they signal first", "Only in designated U-turn zones or where no sign prohibits it, and when it can be done safely", "Only in residential areas under 35 mph", "Never — U-turns are prohibited statewide in Texas"],
        correctAnswer: 1,
        explanation: "U-turns in Texas are permitted where not prohibited by a sign and when they can be completed safely without interfering with other traffic. Many Texas intersections — especially on divided highways — have designated U-turn lanes or median openings. Where a 'No U-Turn' sign is posted, U-turns are strictly prohibited."
    },
    {
        id: 27,
        question: "What does a yellow diamond-shaped sign with the image of a deer mean?",
        options: ["A state park entrance ahead", "A wildlife crossing — deer and other animals may be on or near the road", "Hunting is permitted in this zone", "A livestock auction facility nearby"],
        correctAnswer: 1,
        explanation: "A yellow diamond warning sign with a deer silhouette alerts drivers to an area where deer and other wildlife frequently cross the road. These signs are common on Texas rural highways, especially near river bottoms and brushy areas. Deer are most active at dawn and dusk — reduce speed and watch both road edges when passing through these zones."
    },
    {
        id: 28,
        question: "In Texas, a solid yellow center line on your side of the road means:",
        options: ["Passing is permitted when the road ahead is clear", "You may pass only at speeds below 45 mph", "Passing is prohibited — do not cross the yellow line to pass", "Passing is permitted only on weekdays"],
        correctAnswer: 2,
        explanation: "A solid yellow line on your side of the center line prohibits passing. Do not cross the solid yellow line to overtake another vehicle. A dashed yellow line on your side means passing is allowed when safe. Always check the line on YOUR side before deciding whether to pass."
    },
    {
        id: 29,
        question: "Texas law requires that when driving at night you must dim your headlights from high beam to low beam when:",
        options: ["Approaching an oncoming vehicle within 500 feet OR following a vehicle within 300 feet", "Only when other drivers flash their lights at you", "Only in urban areas with street lighting", "Only when another driver has already dimmed their lights"],
        correctAnswer: 0,
        explanation: "Texas requires dimming high beams to low beams when within 500 feet of an oncoming vehicle or within 300 feet of a vehicle you are following. High beams blind oncoming and preceding drivers. Always use low beams in city driving where street lights provide sufficient illumination."
    },
    {
        id: 30,
        question: "What is the minimum number of questions you must answer correctly to pass the Texas DPS permit test, and what percentage does this represent?",
        options: ["18 out of 30 — 60%", "21 out of 30 — 70%", "24 out of 30 — 80%", "25 out of 30 — 83%"],
        correctAnswer: 1,
        explanation: "Texas requires 21 correct answers out of 30 questions — a passing threshold of 70%. This is one of the more lenient passing thresholds in the US. You can miss up to 9 questions and still pass. However, the questions test important safety knowledge, so understanding the material is essential for safe driving."
    },
]

export const texasPermitTestFaq: { question: string; answer: string }[] = [
    {
        question: "How many questions are on the Texas DPS permit test?",
        answer: "The Texas Department of Public Safety (DPS) knowledge test has 30 multiple-choice questions. You need to answer at least 21 correctly to pass."
    },
    {
        question: "What score do you need to pass the Texas permit test?",
        answer: "You need 21 out of 30 questions correct — a passing score of 70%. Texas has one of the more lenient passing thresholds in the US. You can miss up to 9 questions and still pass."
    },
    {
        question: "How many questions can you miss on the Texas DPS test?",
        answer: "You can miss up to 9 questions on the 30-question test. Missing 10 or more means you fail. Texas's 70% passing threshold gives more margin than states like Pennsylvania (83%) or Virginia (83%)."
    },
    {
        question: "Is there a time limit on the Texas permit test?",
        answer: "No. The Texas DPS does not impose a time limit on the knowledge test. Take your time on each question, but avoid overthinking answers you feel confident about."
    },
    {
        question: "What is the retake policy if I fail the Texas permit test?",
        answer: "If you fail, you must wait 1 day before retaking. Use that time to review the questions you missed. Most applicants who score consistently above 85% on practice tests pass the real test on the first try."
    },
    {
        question: "Can I take the Texas permit test online?",
        answer: "No. As of 2026, the Texas DPS knowledge test must be taken in person at a Texas DPS Driver License office. You should make an appointment online at the Texas DPS website to avoid long wait times."
    },
    {
        question: "What is the minimum age to get a real estate license in Texas?",
        answer: "You must be at least 15 years old to apply for a Texas Learner License. You'll need a licensed adult age 21 or older in the front passenger seat at all times while driving. After holding the permit and completing 30 hours of supervised driving (including 10 at night), you can apply for a provisional license at age 16."
    },
    {
        question: "What is the highest speed limit in Texas and the US?",
        answer: "Texas State Highway 130 (SH-130) between Seguin and Austin has a posted speed limit of 85 mph — the highest posted speed limit on any road in the United States. Most Texas rural interstates are posted at 70–75 mph. Note that Texas also has different daytime (70 mph) and nighttime (65 mph) speed limits on most rural highways."
    },
]
