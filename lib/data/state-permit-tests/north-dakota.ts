import type { Question, StatePermitTestConfig } from '@/components/state-permit-test/types'

export const northDakotaPermitTestConfig: StatePermitTestConfig = {
    stateName: 'North Dakota',
    stateCode: 'ND',
    departmentName: 'North Dakota DOT',
    departmentAbbr: 'DOT',
    realQuestionCount: 25,
    realPassCount: 20,
    passPercent: 80,
    retakePolicy: 'Can retake after 1 day if failed',
    mainPageUrl: '/north-dakota-dot-permit-test',
    pageUrl: '/north-dakota-dot-permit-test-25-questions',
    stateGuideUrl: '/state-guides/north-dakota',
    handbookUrl: '/handbooks/north-dakota',
    year: 2026,
}

export const northDakotaPermitTestQuestions: Question[] = [
    {
        id: 1,
        question: "North Dakota has one of the lowest minimum permit ages in the country. At what age can a teen apply for a real estate license?",
        options: ["13", "14", "14 and a half", "15"],
        correctAnswer: 1,
        explanation: "North Dakota allows teens to apply for a real estate license at age 14 — one of the youngest permit ages in the country. This reflects North Dakota's rural character where driving skills are needed at a younger age for farm and ranch work."
    },
    {
        id: 2,
        question: "What is the legal BAC limit for a driver age 21 or older in North Dakota?",
        options: ["0.04%", "0.06%", "0.08%", "0.10%"],
        correctAnswer: 2,
        explanation: "North Dakota sets the per se DUI limit at 0.08% BAC for drivers 21 and older. Commercial vehicle drivers face a stricter 0.04% limit. Reaching 0.08% BAC is sufficient for a DUI charge regardless of whether the driver appears impaired."
    },
    {
        id: 3,
        question: "You are driving on a North Dakota rural highway and encounter a large grain truck moving slowly during harvest season. What should you do?",
        options: ["Pass immediately — farm vehicles must pull over for regular traffic", "Follow at a safe distance and pass only when there is a broken yellow line and clear sight distance", "Honk repeatedly to signal the truck to pull over", "Pass on the right shoulder — farm vehicles always yield to cars"],
        correctAnswer: 1,
        explanation: "North Dakota's rural highways see significant grain truck traffic during harvest season. Follow at a safe distance and pass on the left only when: the centerline has a broken yellow on your side, you have clear sight distance of at least 1,000 feet, and no oncoming traffic is approaching."
    },
    {
        id: 4,
        question: "North Dakota's zero tolerance law for drivers under 21 sets the illegal BAC at:",
        options: ["0.00% — any detectable amount", "0.02%", "0.04%", "0.08%"],
        correctAnswer: 1,
        explanation: "North Dakota's zero tolerance law sets an illegal BAC of 0.02% for drivers under 21. Any BAC at or above 0.02% results in automatic license suspension. Essentially, no alcohol is permitted for North Dakota drivers under 21."
    },
    {
        id: 5,
        question: "What is the default speed limit on most North Dakota rural highways when no speed limit sign is posted?",
        options: ["55 mph", "60 mph", "65 mph", "70 mph"],
        correctAnswer: 0,
        explanation: "North Dakota sets the default speed limit at 55 mph on unposted paved two-lane county and township highways (as well as gravel and dirt roads). Divided multi-lane highways are set at 70 mph, and rural interstates are set at 80 mph. Always watch for posted limits."
    },
    {
        id: 6,
        question: "You are driving on a North Dakota highway in winter and the road surface looks shiny and wet despite dry weather. This is likely:",
        options: ["A mirage caused by cold air", "Black ice — a nearly invisible layer of ice that forms on road surfaces", "Fresh road sealant that is still wet", "Morning frost that will evaporate quickly"],
        correctAnswer: 1,
        explanation: "Black ice is a serious hazard on North Dakota's long, flat roads. It forms when moisture freezes on the road surface, creating a thin transparent layer that looks wet. Black ice is extremely slippery — if you suspect black ice, ease off the accelerator, avoid sudden steering, and brake very gently."
    },
    {
        id: 7,
        question: "What must you do when a school bus stops on a North Dakota road with flashing red lights and an extended stop arm?",
        options: ["Stop only if you are directly behind the bus", "All traffic in both directions must stop at least 20 feet from the bus on undivided roads", "Slow to 10 mph and pass the bus if no children are visible", "Stop only on divided highways"],
        correctAnswer: 1,
        explanation: "North Dakota requires all traffic on undivided roads in both directions to stop at least 20 feet from a school bus with flashing red lights. Wait until the lights stop and the arm retracts before proceeding. On divided highways with a physical barrier, only traffic behind the bus must stop."
    },
    {
        id: 8,
        question: "What does North Dakota's Move Over law require when passing a stopped law enforcement or emergency vehicle?",
        options: ["Slow to 25 mph and stay in your lane", "Move one lane away from the stopped vehicle if safely possible — or reduce speed if a lane change is not possible", "Stop completely behind the vehicle until it moves", "Move over only for law enforcement, not for tow trucks"],
        correctAnswer: 1,
        explanation: "North Dakota's Move Over law requires drivers to move one lane away from stopped emergency, law enforcement, roadside assistance, or highway maintenance vehicles with flashing lights. If moving is not safely possible, slow to at least 20 mph below the posted speed limit."
    },
    {
        id: 9,
        question: "On a North Dakota two-lane highway, which of these situations would make passing another vehicle ILLEGAL?",
        options: ["The road ahead is straight with a broken yellow center line on your side", "There is a solid yellow line on your side of the center", "The vehicle ahead is driving 10 mph below the speed limit", "You have plenty of room to pass quickly"],
        correctAnswer: 1,
        explanation: "A solid yellow line on your side of the center line means passing is prohibited. You must not cross a solid yellow line to pass another vehicle regardless of its speed. Only pass when there is a broken yellow line on your side AND you have adequate sight distance."
    },
    {
        id: 10,
        question: "You are driving in a North Dakota blizzard with near-zero visibility. What should you do?",
        options: ["Turn on high beams to see further and maintain your speed", "Pull off the road completely and wait for the storm to pass", "Drive on the shoulder to avoid other vehicles", "Follow the vehicle ahead very closely so you can see their tail lights"],
        correctAnswer: 1,
        explanation: "In a North Dakota blizzard with near-zero visibility, pull off the road completely — ideally at a rest stop or parking lot. Turn on hazard lights, stay in your vehicle, and wait for conditions to improve. Following other vehicles in whiteout conditions can lead to pile-ups when the lead vehicle stops."
    },
    {
        id: 11,
        question: "What is the speed limit in a North Dakota school zone when warning lights are flashing?",
        options: ["10 mph", "15 mph", "20 mph", "25 mph"],
        correctAnswer: 2,
        explanation: "North Dakota school zones have a speed limit of 20 mph when the warning lights are flashing or when children are present. Always reduce your speed well in advance of school zones and watch for children near the road during school hours."
    },
    {
        id: 12,
        question: "Under North Dakota's implied consent law, refusing a chemical test after a DUI arrest results in:",
        options: ["No penalty — refusal is a protected right", "A 180-day license suspension for a first offense", "Only a small fine with no license consequences", "License suspension only if later convicted of DUI"],
        correctAnswer: 1,
        explanation: "North Dakota's implied consent law means driving on state roads implies your consent to chemical testing. A first-offense refusal results in a 180-day administrative license suspension plus the refusal can be used as evidence in your DUI case."
    },
    {
        id: 13,
        question: "In North Dakota, when must you use your headlights?",
        options: ["Only between midnight and 5 AM", "From 30 minutes after sunset to 30 minutes before sunrise and when visibility is under 500 feet", "Only in rain or snow", "Only when other vehicles have their lights on"],
        correctAnswer: 1,
        explanation: "North Dakota requires headlights from 30 minutes after sunset to 30 minutes before sunrise and whenever visibility is reduced to less than 500 feet due to weather. North Dakota's blizzards, freezing fog, and blowing snow make headlight use critical for visibility — use them whenever there is any doubt."
    },
    {
        id: 14,
        question: "You are approaching a railroad crossing on a North Dakota rural road. The warning lights are flashing. What must you do?",
        options: ["Slow to 15 mph and proceed if no train is visible", "Stop before the gate and wait until it fully rises and lights stop before crossing", "Proceed quickly to beat the train if it appears far away", "Honk and proceed if you can see the train is not close"],
        correctAnswer: 1,
        explanation: "When railroad crossing warning lights are flashing in North Dakota, stop before the gate or stop line. Wait until the gate rises completely and the lights stop flashing before crossing. Never race a train — trains move faster than they appear and cannot stop quickly."
    },
    {
        id: 15,
        question: "What is the minimum following distance recommended on North Dakota highways?",
        options: ["1 second", "2 seconds", "3 seconds", "4 seconds"],
        correctAnswer: 2,
        explanation: "North Dakota recommends a minimum 3-second following distance. On snow and ice — extremely common in North Dakota — increase to at least 8–10 seconds because stopping distances increase dramatically on slippery surfaces."
    },
    {
        id: 16,
        question: "You are driving in North Dakota and see an orange sign reading 'Flagger Ahead.' What does this mean?",
        options: ["A sporting event is nearby — expect pedestrian traffic", "A road worker is ahead directing traffic — prepare to stop and follow their signals", "A flag sale is occurring nearby", "Wind conditions are being monitored — reduce speed to 45 mph"],
        correctAnswer: 1,
        explanation: "An orange 'Flagger Ahead' sign in a North Dakota construction zone means a road worker is controlling traffic with a flag or sign. Prepare to stop. Follow the flagger's directions — they have the authority to control traffic and override traffic signals in construction zones."
    },
    {
        id: 17,
        question: "When driving on a North Dakota highway and approaching a hill crest or curve, passing is prohibited because:",
        options: ["Speed limits are lower near hills and curves", "You cannot see far enough ahead to safely complete a passing maneuver", "The road surface is always worse near curves", "Passing is prohibited only when the speed limit exceeds 55 mph"],
        correctAnswer: 1,
        explanation: "You must have adequate sight distance to pass safely — typically at least 1,000 feet on North Dakota highways. Near hill crests and curves, you cannot see far enough to know whether oncoming traffic is approaching. These are always marked as no-passing zones."
    },
    {
        id: 18,
        question: "What is required before making a lane change on a North Dakota highway?",
        options: ["Signal, then immediately move to the next lane", "Signal, check mirrors, check blind spot, and then change lanes when safe", "Honk your horn to warn other drivers", "Flash your headlights to signal your intention"],
        correctAnswer: 1,
        explanation: "A safe lane change requires: signal to announce your intention, check all mirrors for approaching traffic, physically check your blind spot by turning your head, and only then change lanes when it is clear. On North Dakota's high-speed highways, this sequence is critical."
    },
    {
        id: 19,
        question: "You are driving behind a wide load vehicle (e.g., farm equipment) on a North Dakota highway. What should you expect?",
        options: ["The vehicle will always pull over to let you pass", "The vehicle may take up more than one lane — follow at a safe distance and only pass when completely safe", "Wide load vehicles must always use designated truck routes", "You may pass wide loads anywhere — they must yield to all traffic"],
        correctAnswer: 1,
        explanation: "North Dakota's rural roads regularly see wide agricultural machinery that may span more than one lane. Follow at a greater distance than normal, never attempt to pass on a curve or hill, and only pass when you have a clear, straight road with adequate sight distance. Watch for escort vehicles with amber lights."
    },
    {
        id: 20,
        question: "In North Dakota, where may you NOT make a U-turn?",
        options: ["On a straight road with good visibility in both directions", "At an intersection where it is not prohibited by signs", "At the crest of a hill, on a curve, or where visibility is limited", "On a county road with no traffic"],
        correctAnswer: 2,
        explanation: "U-turns are prohibited in North Dakota where visibility is limited — at the crest of a hill, on a curve, or anywhere you cannot see at least 500 feet in both directions. They are also prohibited at railroad crossings and in front of fire stations."
    },
    {
        id: 21,
        question: "Under North Dakota GDL rules, minor drivers under 16 with a restricted Class D license are prohibited from driving during which nighttime hours?",
        options: [
            "Between the later of sunset or 9:00 p.m. and 5:00 a.m.",
            "Between 11:00 p.m. and 5:00 a.m.",
            "Between 10:00 p.m. and 6:00 a.m.",
            "Between midnight and 5:00 a.m."
        ],
        correctAnswer: 0,
        explanation: "In North Dakota, 15-year-old restricted license holders cannot drive unsupervised between the later of sunset or 9:00 p.m. and 5:00 a.m. Exceptions apply for driving to and from work, official school activities, or religious activities."
    },
    {
        id: 22,
        question: "What is the correct action when you see a yield sign in North Dakota?",
        options: ["Stop completely regardless of traffic conditions", "Slow down and give the right of way to all approaching traffic — stop if necessary", "Maintain your speed — cross traffic must yield to you", "Yield only to vehicles approaching from your right"],
        correctAnswer: 1,
        explanation: "A yield sign requires you to slow down and give the right of way to all approaching traffic. Stop if necessary. Only proceed when there is a safe gap. Yield signs are used at on-ramps, roundabouts, and intersections where one road crosses another without full stop control."
    },
    {
        id: 23,
        question: "When parking on a North Dakota street and leaving your vehicle, what must you do?",
        options: ["Leave the engine running if the weather is very cold", "Turn off the engine, set the parking brake, and take your keys", "Leave the vehicle in drive to prevent rolling", "No requirements — North Dakota has no parking regulations"],
        correctAnswer: 1,
        explanation: "North Dakota requires drivers to turn off the engine, set the parking brake, and take the keys when leaving a parked vehicle. Leaving a running unattended vehicle (called 'puffing') is not only against North Dakota law in some jurisdictions but also creates a theft risk and idling concerns."
    },
    {
        id: 24,
        question: "Under North Dakota GDL rules, whose vehicles is a 15-year-old with a restricted Class D license allowed to operate?",
        options: [
            "Only vehicles owned by their parent, guardian, grandparent, sibling, aunt, or uncle",
            "Only vehicles equipped with dual brakes",
            "Any passenger vehicle, regardless of ownership",
            "Only vehicles registered in North Dakota"
        ],
        correctAnswer: 0,
        explanation: "A 15-year-old driver with a restricted Class D license in North Dakota is legally restricted to driving vehicles owned by a parent, legal guardian, grandparent, sibling, aunt, or uncle. This restriction is removed when they turn 16 and transition to an unrestricted license."
    },
    {
        id: 25,
        question: "What does a flashing red traffic signal at a North Dakota intersection mean?",
        options: ["Proceed without stopping if no traffic is visible", "Slow down and yield to cross traffic", "Stop completely, yield to all traffic, then proceed when safe", "Stop and wait for the signal to turn green"],
        correctAnswer: 2,
        explanation: "A flashing red signal in North Dakota is treated exactly like a stop sign. Come to a complete stop, look in all directions, yield to approaching vehicles and pedestrians, and proceed only when it is safe to do so."
    },
]

export const northDakotaPermitTestFaq: { question: string; answer: string }[] = [
    {
        question: "How many questions are on the North Dakota DOT permit test?",
        answer: "The North Dakota Department of Transportation (DOT) permit test has exactly 25 multiple-choice questions. You need to answer at least 20 correctly (80%) to pass."
    },
    {
        question: "What score do you need to pass the North Dakota permit test?",
        answer: "You need 20 out of 25 questions correct — a passing score of 80%. Missing 6 or more questions means you fail and must wait 1 day before retaking."
    },
    {
        question: "How many questions can you miss on the North Dakota DOT test?",
        answer: "You can miss up to 5 questions on the 25-question knowledge test. Missing 6 or more means you fail."
    },
    {
        question: "Is there a time limit on the North Dakota permit test?",
        answer: "No. The North Dakota DOT does not impose a time limit on the knowledge test. Read each question carefully before answering."
    },
    {
        question: "What is the retake policy if I fail the North Dakota permit test?",
        answer: "If you fail, you must wait 1 day before retaking. Use that time to review the areas where you struggled."
    },
    {
        question: "Can I take the North Dakota permit test online?",
        answer: "No. As of 2026, all North Dakota DOT knowledge tests must be taken in person at a North Dakota Department of Transportation real estate license office."
    },
    {
        question: "What is the minimum age to get a real estate license in North Dakota?",
        answer: "North Dakota has one of the lowest permit ages in the country — teens can apply for a real estate license at age 14. This reflects North Dakota's rural character where young people often need to drive for farm and ranch activities."
    },
    {
        question: "What winter driving knowledge does North Dakota's permit test cover?",
        answer: "North Dakota's permit test covers winter driving hazards such as black ice, blizzard driving, and increased stopping distances on snow and ice. Key facts: use low beams in snow (high beams reflect off snow), increase following distance to 8–10 seconds on ice, and if you cannot see in a blizzard, pull off the road and wait."
    },
]
