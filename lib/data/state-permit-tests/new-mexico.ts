import type { Question, StatePermitTestConfig } from '@/components/state-permit-test/types'

export const newMexicoPermitTestConfig: StatePermitTestConfig = {
    stateName: 'New Mexico',
    stateCode: 'NM',
    departmentName: 'New Mexico MVD',
    departmentAbbr: 'MVD',
    realQuestionCount: 25,
    realPassCount: 18,
    passPercent: 72,
    retakePolicy: 'Can retake after 1 day if failed',
    mainPageUrl: '/new-mexico-mvd-permit-test',
    pageUrl: '/new-mexico-mvd-permit-test-25-questions',
    stateGuideUrl: '/state-guides/new-mexico',
    handbookUrl: '/handbooks/new-mexico',
    year: 2026,
}

export const newMexicoPermitTestQuestions: Question[] = [
    {
        id: 1,
        question: "At what age can a New Mexico teen apply for a real estate license?",
        options: ["14", "14 and a half", "15", "16"],
        correctAnswer: 2,
        explanation: "New Mexico allows teens to apply for a real estate license at age 15. A parent or guardian must sign the application, and the permit allows supervised driving practice under New Mexico's GDL program."
    },
    {
        id: 2,
        question: "What is the passing score for the New Mexico MVD knowledge test?",
        options: ["70% (18/25 correct)", "72% (18/25 correct)", "80% (20/25 correct)", "85% (21/25 correct)"],
        correctAnswer: 1,
        explanation: "New Mexico requires a passing score of 72% on the 25-question knowledge test, which means you must answer at least 18 out of 25 questions correctly. This is a lower passing threshold than most states, which typically require 80%."
    },
    {
        id: 3,
        question: "What is the legal BAC limit for a driver age 21 or older in New Mexico?",
        options: ["0.04%", "0.06%", "0.08%", "0.10%"],
        correctAnswer: 2,
        explanation: "New Mexico sets the per se DWI limit at 0.08% BAC for drivers 21 and older. Commercial drivers face a stricter 0.04% limit. Reaching 0.08% BAC is sufficient for a DWI charge regardless of apparent impairment. Note: New Mexico uses 'DWI' not 'DUI.'"
    },
    {
        id: 4,
        question: "New Mexico's zero tolerance law for drivers under 21 sets the illegal BAC at:",
        options: ["0.00% — any detectable amount", "0.02%", "0.04%", "0.08%"],
        correctAnswer: 1,
        explanation: "New Mexico's zero tolerance law sets the underage DWI threshold at 0.02% BAC for drivers under 21. Drivers under 21 found with a BAC of 0.02% or higher face automatic license revocation."
    },
    {
        id: 5,
        question: "You are driving in New Mexico and encounter a dust storm (haboob) that reduces visibility to near zero. What should you do?",
        options: ["Turn on high beams and slow to 15 mph", "Pull off the road completely, turn off lights, and wait for the storm to pass", "Continue at reduced speed — dust storms pass quickly", "Use your hazard lights and stop on the shoulder"],
        correctAnswer: 1,
        explanation: "In a severe dust storm, pull completely off the paved road, turn off your headlights (so other drivers do not follow them into a stopped vehicle), set the parking brake, and wait for the storm to pass. This is critical in New Mexico's desert regions where haboobs can reduce visibility to zero."
    },
    {
        id: 6,
        question: "What is the default speed limit on a New Mexico rural highway when no speed limit sign is posted?",
        options: ["55 mph", "60 mph", "65 mph", "70 mph"],
        correctAnswer: 0,
        explanation: "New Mexico's default speed limit on rural highways is 55 mph when no posted sign indicates otherwise. On divided four-lane highways, the default may be higher. Always check posted signs — New Mexico has some roads with limits up to 75 mph."
    },
    {
        id: 7,
        question: "In New Mexico, when must you yield to a pedestrian?",
        options: ["Only at marked crosswalks with signals", "At all crosswalks — marked and unmarked — and anytime a pedestrian is in your path", "Only when a pedestrian is on the same side of the road as you", "Only at intersections with traffic signals"],
        correctAnswer: 1,
        explanation: "New Mexico requires drivers to yield to pedestrians at all crosswalks, both marked and unmarked, and any time a pedestrian is in the roadway. An unmarked crosswalk exists at every intersection — even without painted lines — where two public streets meet."
    },
    {
        id: 8,
        question: "What does New Mexico's Move Over law require when passing a stopped emergency vehicle on a highway?",
        options: ["Move over only for police vehicles, not for tow trucks", "Move one lane away from any stopped emergency or highway maintenance vehicle — or slow if lane change is unsafe", "Stop completely behind the emergency vehicle", "Maintain your lane — emergency vehicles have protective barriers"],
        correctAnswer: 1,
        explanation: "New Mexico's Move Over law requires drivers to move one lane away from any stopped emergency, law enforcement, or highway maintenance vehicle with flashing lights. If moving is not safely possible, reduce speed to at least 20 mph below the posted speed limit."
    },
    {
        id: 9,
        question: "On a New Mexico two-lane highway, you see a broken yellow center line on your side of the road. This means:",
        options: ["Passing is always prohibited", "Passing is permitted when it is safe and the road ahead is clear", "You must slow to 45 mph before passing", "Passing is only permitted by the vehicle ahead, not you"],
        correctAnswer: 1,
        explanation: "A broken (dashed) yellow line on your side of the center allows passing when you have adequate sight distance, no oncoming traffic, and can complete the pass safely. A solid yellow line on your side prohibits passing — never cross a solid line on your side."
    },
    {
        id: 10,
        question: "What must all drivers do when approaching a school bus with flashing red lights on an undivided New Mexico road?",
        options: ["Stop only if driving behind the bus", "All traffic in both directions must stop at least 10 feet from the bus", "Slow to 15 mph and pass the bus carefully", "Stop only if children are visible near the bus"],
        correctAnswer: 1,
        explanation: "New Mexico requires all traffic on an undivided road in both directions to stop when a school bus activates its flashing red lights and stop arm. Stop at least 10 feet from the bus and wait until the lights stop flashing and the arm retracts before proceeding."
    },
    {
        id: 11,
        question: "What is the speed limit in a New Mexico school zone when children are present?",
        options: ["10 mph", "15 mph", "20 mph", "25 mph"],
        correctAnswer: 2,
        explanation: "New Mexico school zones have a 15–20 mph speed limit when children are present or when warning lights are flashing. Specific limits are posted at each school zone. Always watch for school zone signs, especially during arrival and dismissal times."
    },
    {
        id: 12,
        question: "Under New Mexico's implied consent law, refusing a chemical test after a DWI arrest results in:",
        options: ["No penalty — you have the right to refuse", "Automatic license revocation for at least 1 year for a first offense", "Only a fine with no license action", "License revocation only if convicted of DWI"],
        correctAnswer: 1,
        explanation: "New Mexico's implied consent law means driving on state roads implies your consent to chemical testing. A first-offense refusal results in an automatic license revocation of at least 1 year, plus the refusal can be used as evidence in court."
    },
    {
        id: 13,
        question: "You are driving on a New Mexico highway and notice the front end of your vehicle drifting slightly. This may indicate:",
        options: ["Your speed is too low — accelerate to correct the drift", "A flat or underinflated tire, alignment issue, or loose suspension component", "Normal driving on desert roads — wind causes all vehicles to drift", "An engine problem — turn off the ignition immediately"],
        correctAnswer: 1,
        explanation: "Drifting or pulling to one side while driving can indicate an underinflated or flat tire, alignment problems, or a loose suspension component. In New Mexico's desert heat, tire pressure changes rapidly. Pull over safely and inspect your tires before continuing."
    },
    {
        id: 14,
        question: "When are headlights required in New Mexico?",
        options: ["Only between midnight and 5 AM", "From 30 minutes after sunset to 30 minutes before sunrise and in weather that reduces visibility", "Only when driving on highways", "Only in rain or fog"],
        correctAnswer: 1,
        explanation: "New Mexico requires headlights from 30 minutes after sunset to 30 minutes before sunrise and whenever weather conditions reduce visibility. In New Mexico's desert, sudden rain and dust storms can significantly reduce visibility — turn your headlights on any time visibility is limited."
    },
    {
        id: 15,
        question: "What does a flashing yellow traffic signal at a New Mexico intersection mean?",
        options: ["Stop completely and wait for the light to turn green", "Yield to all traffic and then proceed", "Slow down, be alert, and proceed with caution", "Proceed without slowing — it is just a cautionary signal"],
        correctAnswer: 2,
        explanation: "A flashing yellow signal means caution — reduce speed, look carefully for crossing traffic, and proceed when it is safe. A full stop is not required (unlike a flashing red), but you must be prepared to yield if necessary."
    },
    {
        id: 16,
        question: "What is the minimum recommended following distance on New Mexico highways?",
        options: ["1 second", "2 seconds", "3 seconds", "4 seconds"],
        correctAnswer: 2,
        explanation: "New Mexico recommends a minimum 3-second following distance under normal conditions. On desert highways where blowing dust, flash floods, and wildlife can suddenly appear, consider increasing to 4 seconds or more for a safer buffer."
    },
    {
        id: 17,
        question: "New Mexico has many open range areas. If you hit livestock on an open range road, who is generally responsible?",
        options: ["The livestock owner is always responsible for animals on the road", "The driver may be responsible — in open range areas, animals have the right to be on the road", "The state highway department is responsible for all livestock incidents", "Neither party is legally responsible — it is treated as an act of nature"],
        correctAnswer: 1,
        explanation: "In New Mexico's open range areas, drivers must watch for livestock. In open range jurisdictions, ranchers are not required to fence in their animals — the animals have the right to be on the road. Drivers are expected to drive at a safe speed and watch for animals, especially at night."
    },
    {
        id: 18,
        question: "You are making a left turn at an intersection. An oncoming vehicle is approaching. When should you turn?",
        options: ["Turn immediately — your turn signal gives you the right of way", "Wait until there is a safe gap in oncoming traffic before turning", "Flash your lights to signal the oncoming driver to slow", "Turn if the oncoming vehicle is more than 5 car lengths away"],
        correctAnswer: 1,
        explanation: "A vehicle turning left must always yield to oncoming traffic. Wait for a safe gap — one large enough to complete the turn without forcing oncoming drivers to brake. Misjudging the speed of oncoming traffic is a leading cause of left-turn crashes."
    },
    {
        id: 19,
        question: "What shape and color identifies a regulatory sign in New Mexico?",
        options: ["Yellow diamond", "Orange pentagon", "White rectangle or special shapes (octagon for stop, triangle for yield)", "Green rectangle"],
        correctAnswer: 2,
        explanation: "Regulatory signs are white rectangles or special shapes like the red octagonal stop sign and triangular yield sign. These signs communicate laws you must obey — speed limits, no passing, do not enter, and similar requirements."
    },
    {
        id: 20,
        question: "Under New Mexico GDL rules, what restriction applies to drivers under 18 regarding nighttime driving?",
        options: [
            "No driving between midnight and 5:00 AM",
            "No driving between 11:00 PM and 5:00 AM",
            "No driving between 10:00 PM and 5:00 AM",
            "No driving between midnight and 6:00 AM"
        ],
        correctAnswer: 0,
        explanation: "Under New Mexico's GDL program, provisional license holders (under 18) are prohibited from driving between midnight and 5:00 AM, unless accompanied by a licensed driver age 21 or older, or driving for work, school, religious activities, or emergencies."
    },
    {
        id: 21,
        question: "In New Mexico, when is it legal to make a U-turn?",
        options: ["Anywhere as long as you signal first", "Where permitted by signs and where you have adequate sight distance in both directions", "Only at designated U-turn lanes", "U-turns are prohibited statewide in New Mexico"],
        correctAnswer: 1,
        explanation: "U-turns are legal in New Mexico where signs permit them and where you have clear visibility of at least 500 feet in both directions. U-turns are prohibited near the crest of a hill, on a curve, at railroad crossings, and where signs prohibit them."
    },
    {
        id: 22,
        question: "What does a steady red arrow on a traffic signal mean in New Mexico?",
        options: ["You may proceed in the direction of the arrow if the intersection is clear", "You must stop and may not proceed in the direction of the arrow until the signal changes", "Yield to pedestrians and then proceed in the direction of the arrow", "The arrow indicates the lane is closing in that direction"],
        correctAnswer: 1,
        explanation: "A steady red arrow means you must stop and may not move in the direction of the arrow. Unlike a round red light (where a right turn may be permitted after stopping), a red arrow prohibits movement in that direction regardless of other traffic conditions."
    },
    {
        id: 23,
        question: "Flash flooding is a serious hazard on New Mexico roads. What should you do if you encounter a flooded road?",
        options: ["Drive through at low speed if the water looks shallow", "Turn around — do not attempt to drive through flood water", "Increase speed to cross quickly before the water rises", "Park on the road's edge and wait for the water to recede"],
        correctAnswer: 1,
        explanation: "New Mexico's 'Turn Around, Don't Drown' principle is critically important — even 6 inches of water can cause a loss of vehicle control, and 12 inches can carry away a small car. Flash floods are common and appear quickly on New Mexico desert roads. Never attempt to cross a flooded road."
    },
    {
        id: 24,
        question: "At a railroad crossing with no gates, lights, or signs other than an 'RR' pavement marking, what must you do?",
        options: ["Proceed at normal speed — unmarked crossings are rarely active", "Slow to 15 mph, look and listen for approaching trains, and stop if one is coming", "Stop completely for 30 seconds before crossing", "Honk your horn and proceed carefully"],
        correctAnswer: 1,
        explanation: "At any railroad crossing in New Mexico — even with minimal markings — slow down, look both ways, and listen for trains. Trains cannot stop quickly. If a train is approaching, stop completely. Never race a train to a crossing."
    },
    {
        id: 25,
        question: "What is the purpose of a shared center turn lane on a New Mexico road?",
        options: ["For passing slow vehicles in either direction", "For vehicles from either direction to use while waiting to make a left turn", "For emergency vehicles and buses only", "For cyclists and pedestrians to cross safely"],
        correctAnswer: 1,
        explanation: "A shared center turn lane — marked with yellow lines and arrows pointing both ways — is used by vehicles from both directions to slow down and wait while making a left turn. Do not use it as a travel lane or for passing. Enter the lane only when close to your intended turn."
    },
]

export const newMexicoPermitTestFaq: { question: string; answer: string }[] = [
    {
        question: "How many questions are on the New Mexico MVD permit test?",
        answer: "The New Mexico Motor Vehicle Division (MVD) permit test has exactly 25 multiple-choice questions. You need to answer at least 18 correctly (72%) to pass."
    },
    {
        question: "What score do you need to pass the New Mexico permit test?",
        answer: "You need 18 out of 25 questions correct — a passing score of 72%. This is a lower passing threshold than most states. Missing 8 or more questions means you fail and must wait 1 day before retaking."
    },
    {
        question: "How many questions can you miss on the New Mexico MVD test?",
        answer: "You can miss up to 7 questions on the 25-question knowledge test. Missing 8 or more means you fail."
    },
    {
        question: "Is there a time limit on the New Mexico permit test?",
        answer: "No. The New Mexico MVD does not impose a time limit on the knowledge test. Read each question carefully before answering."
    },
    {
        question: "What is the retake policy if I fail the New Mexico permit test?",
        answer: "If you fail, you must wait 1 day before retaking. Use that time to review the areas where you missed questions."
    },
    {
        question: "Can I take the New Mexico permit test online?",
        answer: "No. As of 2026, all New Mexico MVD knowledge tests must be taken in person at a New Mexico Motor Vehicle Division office."
    },
    {
        question: "What is the minimum age to get a real estate license in New Mexico?",
        answer: "New Mexico allows teens to apply for a real estate license at age 15. A parent or guardian must sign the application."
    },
    {
        question: "What is unique about driving in New Mexico that might be tested on the permit test?",
        answer: "New Mexico has several unique driving hazards: open range roads where livestock may be on the road, flash flooding on desert roads ('Turn Around, Don't Drown'), and dust storms (haboobs) that can reduce visibility to zero. The permit test may include questions about how to respond to these New Mexico-specific hazards."
    },
]
