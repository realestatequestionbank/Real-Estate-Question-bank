import type { Question, StatePermitTestConfig } from '@/components/state-permit-test/types'

export const nevadaPermitTestConfig: StatePermitTestConfig = {
    stateName: 'Nevada',
    stateCode: 'NV',
    departmentName: 'Nevada Real Estate',
    departmentAbbr: 'Real Estate',
    realQuestionCount: 25,
    realPassCount: 20,
    passPercent: 80,
    retakePolicy: 'Can retake after 1 day if failed',
    mainPageUrl: '/nevada-real-estate-permit-test',
    pageUrl: '/nevada-real-estate-permit-test-25-questions',
    stateGuideUrl: '/state-guides/nevada',
    handbookUrl: '/handbooks/nevada',
    year: 2026,
}

export const nevadaPermitTestQuestions: Question[] = [
    {
        id: 1,
        question: "At what age can a Nevada teen apply for a real estate license?",
        options: ["14 and a half", "15", "15 and a half", "16"],
        correctAnswer: 2,
        explanation: "Nevada allows teens to apply for a real estate license at age 15½ (15 years and 6 months). The real estate license requires a parent or guardian's consent and allows supervised driving practice under Nevada's GDL program."
    },
    {
        id: 2,
        question: "What is the legal BAC limit for a driver age 21 or older in Nevada?",
        options: ["0.04%", "0.06%", "0.08%", "0.10%"],
        correctAnswer: 2,
        explanation: "Nevada sets the per se DUI limit at 0.08% BAC for drivers 21 and older. Reaching 0.08% BAC alone is sufficient for a DUI conviction regardless of apparent impairment. Commercial drivers face a stricter 0.04% limit."
    },
    {
        id: 3,
        question: "Extreme desert heat in Nevada can cause which tire hazard that drivers should be aware of?",
        options: ["Tires become sticky and slow the vehicle", "Tires can over-inflate and potentially blow out due to heat expansion", "Tires deflate rapidly in hot weather", "Tires provide more traction in extreme heat"],
        correctAnswer: 1,
        explanation: "Nevada's desert heat causes the air inside tires to expand, which increases tire pressure. An already over-inflated tire can blow out suddenly in extreme heat. Check tire pressure when tires are cold, and follow the vehicle manufacturer's recommended PSI — not the maximum printed on the tire sidewall."
    },
    {
        id: 4,
        question: "You are driving in Las Vegas and see a pedestrian crossing in a marked crosswalk. What must you do?",
        options: ["Honk to alert the pedestrian and proceed carefully", "Slow to 15 mph and pass behind the pedestrian", "Stop and yield the right of way until the pedestrian has fully crossed your lane", "Yield only if the pedestrian is directly in your path"],
        correctAnswer: 2,
        explanation: "Nevada law requires drivers to stop and yield to pedestrians in marked crosswalks. Las Vegas has extremely heavy pedestrian traffic, especially near the Strip and casino areas. You must remain stopped until the pedestrian has fully cleared your lane."
    },
    {
        id: 5,
        question: "What is the default speed limit in a Nevada urban area when no speed limit sign is posted?",
        options: ["20 mph", "25 mph", "30 mph", "35 mph"],
        correctAnswer: 1,
        explanation: "Nevada's default speed limit in urban and residential areas is 25 mph when no other limit is posted. In school zones and near playgrounds, the limit is typically 15 mph when children are present."
    },
    {
        id: 6,
        question: "You are driving on a Nevada highway when a dust storm suddenly reduces visibility to near zero. What should you do?",
        options: ["Turn on your hazard lights and pull onto the shoulder to wait it out with feet on the brakes", "Speed up to exit the dust storm quickly", "Pull completely off the road, turn off your lights, and wait until the storm passes", "Continue at reduced speed using your high beams"],
        correctAnswer: 2,
        explanation: "In a severe Nevada dust storm (haboob), pull completely off the paved road surface, turn off your headlights (so other drivers don't follow them into a stopped vehicle), put the car in park, and keep your foot off the brake pedal. Wait until the storm passes before continuing."
    },
    {
        id: 7,
        question: "Nevada's zero tolerance law sets the illegal BAC for drivers under 21 at:",
        options: ["0.00% — any detectable amount", "0.02%", "0.04%", "0.08%"],
        correctAnswer: 1,
        explanation: "Nevada's zero tolerance law sets the underage DUI threshold at 0.02% BAC for drivers under 21. Any amount at or above 0.02% results in license suspension and other penalties. This is lower than the adult limit of 0.08%."
    },
    {
        id: 8,
        question: "You want to make a right turn at a red light in Nevada. What must you do?",
        options: ["Proceed without stopping if no traffic is visible", "Stop completely, yield to pedestrians and cross traffic, then turn if no sign prohibits it", "Right turns on red are prohibited statewide in Nevada", "Signal and proceed — right turns on red have the right of way"],
        correctAnswer: 1,
        explanation: "Right turns on red are permitted in Nevada after a complete stop and yielding to all pedestrians and cross traffic. Always check for 'No Turn on Red' signs, which are common near the Las Vegas Strip and at high-pedestrian intersections."
    },
    {
        id: 9,
        question: "What does Nevada's Move Over law require when passing a stopped emergency vehicle on a multi-lane highway?",
        options: ["Slow to 15 mph regardless of lane position", "Move one lane away from the stopped vehicle if safely possible, or slow to a safe speed", "Stop completely on the shoulder", "Move over only for law enforcement, not for tow trucks"],
        correctAnswer: 1,
        explanation: "Nevada's Move Over law requires drivers to move one lane away from any stopped emergency, law enforcement, or roadside assistance vehicle with active warning lights. If a lane change is not safely possible, slow to a reasonable speed below the posted limit."
    },
    {
        id: 10,
        question: "In Nevada, it is illegal to use a handheld cell phone while driving. What is the penalty for a first offense?",
        options: ["A verbal warning with no fine", "A fine but no points added to your license", "A fine and demerit points added to your driving record", "License suspension for 30 days"],
        correctAnswer: 2,
        explanation: "Nevada's distracted driving law prohibits handheld cell phone use while driving. A first offense results in a fine AND demerit points added to your driving record. Hands-free devices are permitted. Repeat offenses carry higher fines and more demerit points."
    },
    {
        id: 11,
        question: "You are driving on a Nevada highway and the road surface appears wet and shiny despite no recent rain. This may indicate:",
        options: ["The road was recently sealed and is still wet", "Black ice — a nearly invisible layer of ice on the road surface", "Fresh paint markings on the road", "An optical illusion — the road is dry"],
        correctAnswer: 1,
        explanation: "A wet, shiny road surface in cold weather with no recent rain can indicate black ice — a thin, nearly transparent layer of ice that is extremely dangerous. Black ice forms when temperatures drop and moisture freezes on the road. Slow down immediately and avoid sudden steering or braking inputs."
    },
    {
        id: 12,
        question: "When approaching a school bus stopped with flashing red lights on a Nevada highway, what must ALL traffic do on an undivided road?",
        options: ["Traffic behind the bus must stop; traffic in front may proceed", "All traffic in both directions must stop at least 15 feet from the bus", "Slow to 15 mph and pass carefully", "Stop only if children are visibly exiting"],
        correctAnswer: 1,
        explanation: "In Nevada, on an undivided road, all traffic in both directions must stop at least 15 feet from a school bus with flashing red lights and an extended stop arm. Wait until the lights stop and the arm retracts. On a divided highway with a physical median, only traffic behind the bus must stop."
    },
    {
        id: 13,
        question: "On a Nevada freeway with multiple lanes in each direction, which lane should you use for normal travel?",
        options: ["The far left (fast) lane at all times for maximum speed", "The right lanes for normal driving; left lanes for passing only", "The center lane regardless of speed", "Any lane — Nevada has no lane use rules"],
        correctAnswer: 1,
        explanation: "Nevada law requires slower vehicles to stay in the right lanes. The left lane on multi-lane freeways is designated for passing — not for sustained travel at the speed limit. Move right after completing a pass. This is especially important on Las Vegas freeways where traffic merges frequently."
    },
    {
        id: 14,
        question: "What is the minimum following distance recommended in Nevada under normal highway driving conditions?",
        options: ["1 second", "2 seconds", "3 seconds", "4 seconds"],
        correctAnswer: 2,
        explanation: "Nevada recommends a minimum 3-second following distance under normal conditions. On Nevada's desert highways, consider increasing to 4 seconds — the roads are long and straight, making it tempting to tailgate, but stopping distances at high speeds remain significant."
    },
    {
        id: 15,
        question: "You must use your headlights in Nevada:",
        options: ["Only between midnight and 5 AM", "From 30 minutes after sunset to 30 minutes before sunrise, and when visibility is reduced", "Only when driving outside of city limits", "Only when other drivers have their headlights on"],
        correctAnswer: 1,
        explanation: "Nevada requires headlights from 30 minutes after sunset to 30 minutes before sunrise and whenever weather or smoke reduces visibility. Using headlights also makes your vehicle more visible to others — turn them on whenever there is doubt."
    },
    {
        id: 16,
        question: "When parallel parking on a Nevada street, how far may your vehicle be from the curb?",
        options: ["6 inches", "12 inches", "18 inches", "24 inches"],
        correctAnswer: 2,
        explanation: "Nevada requires parallel-parked vehicles to be within 18 inches of the curb. Parking further out can obstruct traffic flow and create a hazard. Use your mirrors and take your time to position the vehicle properly."
    },
    {
        id: 17,
        question: "In Nevada, what is required before passing a vehicle on a two-lane highway?",
        options: ["Signal for at least 5 seconds before moving into the oncoming lane", "Ensure there is a broken yellow centerline on your side, adequate distance, and no oncoming traffic", "Honk to alert the driver ahead that you are passing", "Pass on the right shoulder if it is paved"],
        correctAnswer: 1,
        explanation: "Before passing on a two-lane Nevada highway, you must confirm: (1) there is a broken yellow center line on your side, (2) you have a clear view of at least 1/3 mile ahead, (3) no oncoming traffic is close, and (4) you have enough speed and distance to complete the pass safely."
    },
    {
        id: 18,
        question: "What does it mean when a traffic signal shows a steady yellow light?",
        options: ["Speed up to clear the intersection before the light turns red", "The light is about to turn green — prepare to go", "The light is about to turn red — slow down and stop if safe to do so", "Yield to cross traffic and then proceed"],
        correctAnswer: 2,
        explanation: "A steady yellow signal in Nevada means the light is about to turn red. You should slow down and stop before the intersection if it is safe to do so. Only proceed if you are so close to the intersection that stopping would be unsafe. Never speed up to 'beat' a yellow light."
    },
    {
        id: 19,
        question: "What must you do if your vehicle's brakes fail while driving in Nevada?",
        options: ["Turn off the ignition to slow the engine", "Pump the brakes rapidly to build pressure, downshift, use the parking brake gently, and look for an escape route", "Turn the wheel sharply to generate friction", "Immediately open your door to create wind resistance"],
        correctAnswer: 1,
        explanation: "If your brakes fail, rapidly pump the brake pedal to try to build hydraulic pressure, downshift to use engine braking, gently apply the parking brake, and steer toward an escape route such as an uphill slope or soft shoulder. Never turn off the ignition while moving as it can lock the steering wheel."
    },
    {
        id: 20,
        question: "A solid white line between lanes of traffic traveling in the same direction means:",
        options: ["Lane changes are prohibited", "Lane changes are discouraged but permitted if necessary", "The lane to your right is an exit lane", "The lane is closing ahead"],
        correctAnswer: 0,
        explanation: "A solid white line between lanes indicates that lane changes are prohibited at that point. This is commonly used near intersections, at highway entrances and exits, and in construction zones. A broken white line means lane changes are permitted when safe."
    },
    {
        id: 21,
        question: "When driving on a Nevada interstate and a vehicle is merging from an on-ramp, what should through traffic do?",
        options: ["Maintain speed — merging vehicles must yield", "Move to the left lane if possible to give the merging vehicle room", "Slow to 25 mph and let the merging vehicle enter", "Flash your headlights to warn the merging driver"],
        correctAnswer: 1,
        explanation: "When safe, Nevada drivers should move left to allow merging vehicles space to enter the freeway. While the merging driver is responsible for matching highway speed and finding a gap, courteous drivers facilitate smooth merging. If moving left is not possible, maintaining steady speed helps merging drivers predict your position."
    },
    {
        id: 22,
        question: "What is the speed limit on most Nevada interstates for passenger vehicles?",
        options: ["65 mph", "70 mph", "75 mph", "80 mph"],
        correctAnswer: 2,
        explanation: "Most Nevada interstate highways have a speed limit of 75 mph for passenger vehicles in rural areas. Some sections near Las Vegas and Reno have lower limits of 65 mph. Always check posted signs — exceeding the limit on Nevada's open desert highways is a common and costly mistake."
    },
    {
        id: 23,
        question: "You are approaching a four-way stop at the same time as three other drivers. Who has the right of way?",
        options: ["The largest vehicle always goes first", "The driver who arrived first goes first; ties are resolved by yielding to the right", "All drivers must wait for a signal from a police officer", "The driver going straight always has the right of way"],
        correctAnswer: 1,
        explanation: "At a four-way stop, the first vehicle to arrive goes first. When two or more vehicles arrive simultaneously, yield to the driver on your right. If all vehicles arrive at exactly the same time, the driver going straight has priority over those turning."
    },
    {
        id: 24,
        question: "In Nevada, can you use your horn whenever you feel like it?",
        options: ["Yes — horns are for any communication purpose", "No — horns should only be used to warn other drivers of a hazard or to avoid a collision", "Yes, as long as it is not between 10 PM and 7 AM", "Only when another driver is at fault"],
        correctAnswer: 1,
        explanation: "Nevada's vehicle code specifies that horns are for safety use only — to warn of a hazard or to prevent a collision. Using your horn for non-safety reasons (expressing frustration, greeting friends) is prohibited, though enforcement is rare."
    },
    {
        id: 25,
        question: "What is the primary danger of driving in heavy Las Vegas traffic after a light rain?",
        options: ["Sand washed onto the road from the desert reduces traction", "Light rain mixes with oil on the road surface, making it extremely slippery", "Sudden flooding always occurs after any rain in Las Vegas", "Visibility improves dramatically after rain"],
        correctAnswer: 1,
        explanation: "After a dry period, rain mixes with accumulated oil and grease on Nevada road surfaces, creating a very slippery film. This 'first rain' hazard is especially dangerous in urban areas like Las Vegas where vehicles deposit oil over time. Reduce speed and increase following distance during and after light rain."
    },
]

export const nevadaPermitTestFaq: { question: string; answer: string }[] = [
    {
        question: "How many questions are on the Nevada Real Estate Exam?",
        answer: "The Nevada Real Estate Exam has exactly 25 multiple-choice questions. You need to answer at least 20 correctly (80%) to pass."
    },
    {
        question: "What score do you need to pass the Nevada permit test?",
        answer: "You need 20 out of 25 questions correct — a passing score of 80%. Missing 6 or more questions means you fail and must wait 1 day before retaking."
    },
    {
        question: "How many questions can you miss on the Nevada Real Estate Exam?",
        answer: "You can miss up to 5 questions on the 25-question knowledge test. Missing 6 or more means you fail."
    },
    {
        question: "Is there a time limit on the Nevada Real Estate Exam?",
        answer: "No. The Nevada Real Estate does not impose a time limit on the knowledge test. Take your time, especially on questions about specific Nevada laws."
    },
    {
        question: "What is the retake policy if I fail the Nevada permit test?",
        answer: "If you fail, you must wait 1 day before retaking. Use that time to review the areas where you struggled. Scoring 90%+ on practice tests consistently before your appointment is the best preparation."
    },
    {
        question: "Can I take the Nevada permit test online?",
        answer: "No. As of 2026, all Nevada Real Estate knowledge tests must be taken in person at a Nevada Department of Motor Vehicles office."
    },
    {
        question: "What is the minimum age to get a real estate license in Nevada?",
        answer: "Nevada allows teens to apply for a real estate license at age 15½ (15 years and 6 months). A parent or guardian must consent, and the permit allows supervised driving practice."
    },
    {
        question: "Why does Nevada's desert heat matter for drivers taking the permit test?",
        answer: "Nevada's extreme desert heat is a tested topic because heat causes tire pressure to increase, raising the risk of a tire blowout. Check tire pressure when tires are cold and follow the manufacturer's recommended PSI. The permit test may include questions about heat-related driving hazards specific to Nevada's climate."
    },
]
