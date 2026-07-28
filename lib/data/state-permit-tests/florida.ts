import type { Question, StatePermitTestConfig } from '@/components/state-permit-test/types'

export const floridaPermitTestConfig: StatePermitTestConfig = {
    stateName: 'Florida',
    stateCode: 'FL',
    departmentName: 'Florida DHSMV',
    departmentAbbr: 'DHSMV',
    realQuestionCount: 50,
    realPassCount: 40,
    passPercent: 80,
    retakePolicy: 'Can retake after 1 day if failed',
    mainPageUrl: '/florida-real-estate-permit-test',
    pageUrl: '/florida-real-estate-permit-test-50-questions',
    stateGuideUrl: '/state-guides/florida',
    handbookUrl: '/handbooks/florida',
    year: 2026,
}

export const floridaPermitTestQuestions: Question[] = [
    {
        id: 1,
        question: "In Florida, which agency administers real estate licenses?",
        options: ["The Department of Motor Vehicles (Real Estate)", "The Department of Highway Safety and Motor Vehicles (DHSMV)", "The Department of Transportation (FDOT)", "The Department of Public Safety (DPS)"],
        correctAnswer: 1,
        explanation: "Florida real estate licenses are administered by the Department of Highway Safety and Motor Vehicles (DHSMV) — not a 'Real Estate.' This state-specific name is commonly tested because most states use the Real Estate designation."
    },
    {
        id: 2,
        question: "The real Florida DHSMV knowledge test has how many questions, and what score is needed to pass?",
        options: ["30 questions; need 24 (80%)", "40 questions; need 32 (80%)", "46 questions; need 38 (83%)", "50 questions; need 40 (80%)"],
        correctAnswer: 3,
        explanation: "The actual Florida DHSMV permit test has 50 questions and requires 40 correct answers (80%) to pass. This practice set has 30 questions to help you prepare — if you score well here, you are building the knowledge needed for the full 50-question test."
    },
    {
        id: 3,
        question: "What is the minimum age to apply for a real estate license in Florida?",
        options: ["14", "15", "15 and a half", "16"],
        correctAnswer: 1,
        explanation: "Florida allows teens to apply for a real estate license at age 15. After holding the permit and completing supervised driving requirements, they can apply for a restricted Class E license at age 16."
    },
    {
        id: 4,
        question: "What is the legal BAC limit for adult drivers (age 21+) in Florida?",
        options: ["0.04%", "0.06%", "0.08%", "0.10%"],
        correctAnswer: 2,
        explanation: "Florida's per se DUI limit is 0.08% BAC for adult drivers. Florida also requires that all drivers pass a vision test before receiving a license — this is a state-specific requirement worth remembering."
    },
    {
        id: 5,
        question: "You are driving on a Florida highway during a heavy rainstorm and your vehicle begins to hydroplane. What should you do?",
        options: ["Brake hard to slow down quickly", "Steer sharply to redirect the tires", "Ease off the accelerator and hold the wheel steady until traction returns", "Accelerate to power through the water"],
        correctAnswer: 2,
        explanation: "When hydroplaning, ease off the gas and hold the steering wheel steady — do not brake hard or make sudden steering inputs. The tires will regain contact with the road once speed drops. Florida's heavy rain season makes hydroplaning awareness especially important."
    },
    {
        id: 6,
        question: "A hurricane warning has been issued for your area in Florida. You are driving on an evacuation route and roads are flooding. What should you do?",
        options: ["Drive through flooded roads — most puddles are shallow", "Turn around immediately and find an alternate route — never drive into flooded roads", "Drive slowly through standing water to avoid splashing other vehicles", "Speed through flooded sections to reduce tire contact time with water"],
        correctAnswer: 1,
        explanation: "Florida's 'Turn Around, Don't Drown' rule is critically important — even 6 inches of moving water can knock a person down, and 2 feet can carry away most vehicles. Flooded roads may hide washed-out pavement beneath the surface. Never attempt to drive through standing or moving floodwater."
    },
    {
        id: 7,
        question: "In Florida, what is required before a first-time driver can receive a license?",
        options: ["A written test only", "A written knowledge test and a vision test", "A written test, vision test, and a drug test", "A driving record check from another state only"],
        correctAnswer: 1,
        explanation: "Florida requires both a written knowledge test and a vision test before issuing a first-time real estate license. The vision test ensures drivers can meet minimum visual acuity standards for safe driving. This combination is a Florida-specific testing requirement."
    },
    {
        id: 8,
        question: "Under Florida's GDL program, a driver with a restricted Class E license (under 18) may not drive between what hours without a licensed adult?",
        options: ["10 PM and 6 AM", "11 PM and 6 AM", "Midnight and 6 AM", "9 PM and 5 AM"],
        correctAnswer: 1,
        explanation: "Florida GDL restricts drivers under 18 from driving between 11 PM and 6 AM unless accompanied by a licensed adult in the front seat. An exception applies for driving to/from work, which requires documentation from the employer."
    },
    {
        id: 9,
        question: "What is the speed limit in a Florida school zone when children are present or warning lights are flashing?",
        options: ["10 mph", "15 mph", "20 mph", "25 mph"],
        correctAnswer: 2,
        explanation: "Florida school zones have a 20 mph speed limit when children are present or zone warning lights are active. Fines in school zones are doubled in Florida. Always slow down well before entering the zone and remain alert for children crossing."
    },
    {
        id: 10,
        question: "What must you do when a school bus stops and activates its flashing red lights on a two-lane Florida road?",
        options: ["Stop only if you are behind the bus", "Slow to 20 mph and pass with caution", "Stop in both directions at least 20 feet from the bus until the lights stop flashing", "Stop only if children are visibly crossing the road"],
        correctAnswer: 2,
        explanation: "Florida law requires vehicles in both directions on an undivided road to stop at least 20 feet from a school bus displaying flashing red lights. You may not proceed until the arm retracts and lights stop flashing."
    },
    {
        id: 11,
        question: "What is the default speed limit on most urban streets in Florida when no sign is posted?",
        options: ["20 mph", "25 mph", "30 mph", "35 mph"],
        correctAnswer: 2,
        explanation: "Florida's default speed limit in urban and residential areas where no limit is posted is 30 mph. School zones and residential streets near schools may be posted at lower limits. Always check for posted signs."
    },
    {
        id: 12,
        question: "Florida's Move Over law requires you to do which of the following when passing a stopped emergency vehicle?",
        options: ["Slow to 20 mph and maintain your lane", "Move one lane away if safe; if not, slow to 20 mph below the posted limit (but no lower than 20 mph)", "Stop completely and wait for the vehicle to move", "Only move over for police — not tow trucks or utility vehicles"],
        correctAnswer: 1,
        explanation: "Florida's Move Over law requires drivers to move one lane away from any stopped emergency, law enforcement, tow, or utility vehicle with flashing lights. If a lane change is unsafe, slow to 20 mph below the posted speed limit (minimum 20 mph). Florida's specific 20 mph-below provision is a state-specific detail."
    },
    {
        id: 13,
        question: "On a two-lane Florida road, a solid yellow line is on your side of the center. You want to pass the vehicle ahead. You may:",
        options: ["Pass if you can complete the maneuver quickly", "Pass only if the vehicle is going 10 mph below the limit", "Not pass — the solid yellow on your side prohibits crossing the center", "Pass only if you signal for at least 100 feet first"],
        correctAnswer: 2,
        explanation: "A solid yellow line on your side of the center is an absolute prohibition on crossing to pass. Wait for a dashed yellow line on your side before attempting to pass."
    },
    {
        id: 14,
        question: "What is the legal BAC zero tolerance limit for Florida drivers under 21?",
        options: ["0.00%", "0.02%", "0.04%", "0.05%"],
        correctAnswer: 1,
        explanation: "Florida applies a 0.02% BAC zero tolerance threshold for drivers under 21. Any BAC at or above 0.02% results in an automatic license suspension of 6 months for a first offense — effectively making any alcohol consumption illegal before driving for underage drivers."
    },
    {
        id: 15,
        question: "In Florida, when must your vehicle's headlights be on?",
        options: ["Only after dark", "From sunset to sunrise and whenever visibility is less than 1000 feet (e.g., in rain)", "Only when it is raining heavily", "Only on highways at night"],
        correctAnswer: 1,
        explanation: "Florida requires headlights from sunset to sunrise and whenever visibility drops below 1,000 feet due to rain, fog, or other conditions. Florida law also requires headlights when wipers are in use — a frequently tested fact specific to Florida."
    },
    {
        id: 16,
        question: "Under Florida's implied consent law, refusing a chemical test after a DUI stop results in:",
        options: ["No penalty — refusal is a constitutional right", "A 1-year license suspension for the first refusal", "Only a small fine with no license action", "A warning on the first offense"],
        correctAnswer: 1,
        explanation: "Florida's implied consent law means that by driving on public roads, you have consented to chemical testing. A first-offense refusal results in a 1-year license suspension separate from any DUI conviction. Refusal can also be introduced as evidence of guilt in court."
    },
    {
        id: 17,
        question: "You are driving on a Florida highway and need to pass a slow-moving vehicle. When is it legal to pass on the right?",
        options: ["Never — passing on the right is always prohibited", "When the vehicle ahead is turning left and there is sufficient paved road on the right", "Whenever traffic is moving slowly in the left lane", "Only on one-way streets or expressways with multiple lanes"],
        correctAnswer: 3,
        explanation: "In Florida, passing on the right is legal on one-way streets and on expressways with multiple lanes of traffic traveling in the same direction, as long as it is done safely and on the paved roadway — never on a shoulder."
    },
    {
        id: 18,
        question: "What is the minimum following distance recommended in Florida for normal driving conditions?",
        options: ["1 second", "2 seconds", "3 seconds", "4 seconds"],
        correctAnswer: 2,
        explanation: "Florida recommends a minimum 3-second following distance under normal conditions. In heavy Florida rain — common during summer months — increase following distance to 6 or more seconds because wet roads significantly extend stopping distances."
    },
    {
        id: 19,
        question: "Can you turn right on a red light in Florida?",
        options: ["No, right turns on red are prohibited statewide", "Yes, after a complete stop and yielding, unless a sign prohibits it", "Yes, without stopping if no pedestrians are visible", "Only between 7 AM and 9 PM"],
        correctAnswer: 1,
        explanation: "Right turns on red are permitted in Florida after a complete stop and yielding to pedestrians and cross traffic. Always check for 'No Turn on Red' signs before proceeding."
    },
    {
        id: 20,
        question: "What does a yellow diamond-shaped warning sign indicate in Florida?",
        options: ["A regulatory rule you must follow", "A potential hazard ahead requiring extra caution", "A construction zone with mandatory reduced speed", "A guide sign showing distances to destinations"],
        correctAnswer: 1,
        explanation: "Yellow diamond-shaped warning signs alert drivers to potential hazards ahead — curves, school zones, pedestrian crossings, merge points, and more. They require extra attention and often a reduction in speed."
    },
    {
        id: 21,
        question: "In Florida, if your vehicle's tire suddenly blows out at highway speed, what should you do?",
        options: ["Brake hard to stop as quickly as possible", "Turn the steering wheel sharply to exit the highway immediately", "Grip the wheel firmly, ease off the accelerator, and steer straight while gradually slowing down", "Immediately pull onto the grass median"],
        correctAnswer: 2,
        explanation: "During a blowout, grip the steering wheel firmly, ease off the gas, and allow the vehicle to slow gradually while maintaining a straight course. Do not brake hard — sudden braking during a blowout can cause loss of control. Steer carefully to the shoulder once speed has decreased."
    },
    {
        id: 22,
        question: "What must you do when approaching a pedestrian crossing at an uncontrolled intersection in Florida?",
        options: ["Maintain speed — pedestrians must wait for a safe gap in traffic", "Slow down and yield to pedestrians who are crossing or about to cross", "Stop only if the pedestrian is in your lane", "Honk to alert the pedestrian and proceed"],
        correctAnswer: 1,
        explanation: "Florida law requires drivers to yield to pedestrians who are crossing at or about to cross at any crosswalk — marked or unmarked. Pedestrians have the right of way at all intersections, and drivers must be prepared to stop."
    },
    {
        id: 23,
        question: "Under Florida law, what is the rule about using a handheld cell phone while driving?",
        options: ["Handheld cell phone use is legal as long as you are not texting", "Using a handheld device while driving is prohibited for all drivers in school zones and active work zones", "All handheld cell phone use is prohibited for all drivers statewide", "Only drivers under 18 are prohibited from handheld use"],
        correctAnswer: 2,
        explanation: "As of 2022, Florida prohibits all drivers from using a handheld wireless device while driving statewide — not just in school zones. All drivers must use hands-free technology. This statewide ban is a relatively recent change to Florida law."
    },
    {
        id: 24,
        question: "What is the speed limit on most Florida interstates in rural areas?",
        options: ["65 mph", "70 mph", "75 mph", "80 mph"],
        correctAnswer: 1,
        explanation: "Most Florida rural interstates have a speed limit of 70 mph for passenger vehicles. Urban sections and portions near major cities may be posted lower. Always follow posted limits."
    },
    {
        id: 25,
        question: "In Florida, when approaching an intersection without traffic signals or signs, which vehicle has the right of way?",
        options: ["The vehicle on the right", "The vehicle that arrived first", "The vehicle on the left", "The vehicle going straight"],
        correctAnswer: 0,
        explanation: "At an uncontrolled intersection in Florida, the vehicle on the right has the right of way when two vehicles arrive simultaneously. This yield-to-the-right rule applies nationwide and is a commonly tested fact."
    },
    {
        id: 26,
        question: "You are driving in Florida and see a 'Road Flooded' sign ahead. What should you do?",
        options: ["Drive slowly through the flooded area", "Turn around and find an alternate route", "Drive through quickly to reduce tire contact time with water", "Wait for the water to recede before proceeding"],
        correctAnswer: 1,
        explanation: "Florida's frequent flooding makes 'Turn Around, Don't Drown' a critical safety rule. 'Road Flooded' signs indicate the road is impassable. Driving through flooded roads risks stalling your engine, losing control, or being swept off the road — even in a large vehicle."
    },
    {
        id: 27,
        question: "What does it mean when a traffic signal shows a solid green arrow pointing left?",
        options: ["Left turns may be made with caution — yield to oncoming traffic", "A protected left turn — no oncoming traffic is permitted; proceed", "Left turns are prohibited in this direction", "Proceed straight — left turns are illegal at this signal"],
        correctAnswer: 1,
        explanation: "A solid green arrow indicates a protected turn — oncoming traffic has a red light, so you may turn left without yielding to oncoming vehicles. This is different from a circular green light, where you must yield to oncoming traffic before turning left."
    },
    {
        id: 28,
        question: "In Florida, at what age may a GDL driver receive a full, unrestricted license?",
        options: ["16", "17", "18", "18 with no restrictions after 12 months"],
        correctAnswer: 2,
        explanation: "Florida GDL drivers receive a full unrestricted Class E license at age 18, after completing all GDL phases. Before age 18, licenses are restricted with nighttime and passenger limitations."
    },
    {
        id: 29,
        question: "You are at a railroad crossing in Florida with a stop sign. What must you do?",
        options: ["Slow to 15 mph and look both ways before crossing", "Stop, look and listen for trains from both directions, and proceed only when safe", "Only stop if you see or hear a train approaching", "Continue through at low speed if gates are up and no lights are flashing"],
        correctAnswer: 1,
        explanation: "At a railroad crossing with a stop sign, you must stop completely, look in both directions, and listen for approaching trains before crossing. Even if gates are up and lights are not flashing, a train could be approaching from either direction."
    },
    {
        id: 30,
        question: "Under Florida's seatbelt law, all of the following are required to wear seatbelts EXCEPT:",
        options: ["The driver", "Front-seat passengers", "Rear-seat passengers under age 18", "Rear-seat passengers age 18 and older"],
        correctAnswer: 3,
        explanation: "Florida's seatbelt law requires the driver, all front-seat passengers, and all rear-seat passengers under age 18 to wear seatbelts. Adult passengers (18+) in the rear seat are not covered by Florida's primary seatbelt enforcement law — though seatbelts are strongly recommended for all occupants."
    },
    {
        id: 31,
        question: "Under Florida's point system, how many points are added to your driving record for a speeding violation of 15 mph or less over the limit?",
        options: ["1 point", "2 points", "3 points", "4 points"],
        correctAnswer: 2,
        explanation: "In Florida, speeding 15 mph or less over the posted limit results in 3 points on your driving record. Speeding 16 mph or more over the limit adds 4 points. Accumulating 12 points within 12 months triggers a 30-day license suspension — Florida's point system is designed to progressively penalize repeat violators."
    },
    {
        id: 32,
        question: "What is an SR-22 in Florida, and when is one typically required?",
        options: ["A vehicle inspection certificate required annually", "A financial responsibility certificate filed by your insurer, typically required after a serious driving violation", "A DHSMV form required before taking the knowledge test", "An emissions test certificate required for vehicle registration"],
        correctAnswer: 1,
        explanation: "An SR-22 is a certificate of financial responsibility filed by your insurance company with the Florida DHSMV, verifying you carry the required minimum insurance. It is typically required after a DUI conviction, serious traffic violations, driving without insurance, or after a license suspension. Failure to maintain SR-22 coverage results in immediate license suspension."
    },
    {
        id: 33,
        question: "A pedestrian is crossing at a marked crosswalk at an intersection in Florida. You are approaching on a green light and turning right. You must:",
        options: ["Proceed — your green light gives you the right of way over pedestrians", "Yield to the pedestrian and wait until they have completely crossed your path", "Slow to 10 mph and pass behind the pedestrian", "Honk once to alert the pedestrian and proceed carefully"],
        correctAnswer: 1,
        explanation: "In Florida, drivers turning at an intersection must yield to pedestrians in the crosswalk, even when the vehicle has a green signal. Pedestrians always have the right of way in a crosswalk. Failing to yield to a pedestrian in a crosswalk is a moving violation and can result in serious criminal liability if an injury occurs."
    },
    {
        id: 34,
        question: "Florida's Move Over law applies to which vehicles displaying flashing lights on the shoulder?",
        options: ["Only law enforcement vehicles", "Only law enforcement and fire rescue vehicles", "Law enforcement, emergency, tow trucks, and utility/maintenance vehicles", "Only vehicles displaying blue or red flashing lights"],
        correctAnswer: 2,
        explanation: "Florida's Move Over law covers any stopped law enforcement, emergency, sanitation, utility, or tow truck displaying flashing lights on the roadside. Drivers must move one lane away if safe; otherwise reduce speed to 20 mph below the posted limit (minimum 20 mph). The law was expanded to include more vehicle types and is a frequently tested Florida-specific rule."
    },
    {
        id: 35,
        question: "Two vehicles arrive at the same time at an unmarked intersection in Florida with no signs or signals. Which vehicle has the right of way?",
        options: ["The vehicle traveling on the wider road", "The vehicle on the right", "The vehicle traveling faster", "The vehicle turning left"],
        correctAnswer: 1,
        explanation: "At an unmarked intersection in Florida where two vehicles arrive simultaneously, the driver on the left must yield to the driver on the right. This yield-to-the-right rule applies at all uncontrolled intersections. If one road is clearly wider than the other, the driver on the narrower road yields — but at equal intersections, right-of-way goes to the vehicle on the right."
    },
    {
        id: 36,
        question: "What is the speed limit in a Florida school zone when flashing warning lights are active or children are present?",
        options: ["15 mph", "20 mph", "25 mph", "30 mph"],
        correctAnswer: 1,
        explanation: "Florida's school zone speed limit is 20 mph when warning lights are flashing or children are present in or adjacent to the road. School zone fines are doubled in Florida. Drivers should begin slowing well before the zone and remain vigilant throughout the posted school zone area."
    },
    {
        id: 37,
        question: "Under Florida's GDL program, a teen with a restricted Class E license (under 18) is limited to how many non-family passengers under 20 during the first year?",
        options: ["No passengers under 20 at all", "One non-family passenger under 20", "Two non-family passengers under 20", "No limit on passengers if accompanied by a licensed adult"],
        correctAnswer: 1,
        explanation: "During the first 12 months of Florida's restricted Class E license, a driver under 18 may not have more than one passenger under 20 who is not an immediate family member. This restriction reduces distraction risk. After 12 months of restriction-free driving, or at age 18, a full license can be obtained."
    },
    {
        id: 38,
        question: "Under Florida's implied consent law, a driver who refuses a breathalyzer or blood test after a lawful DUI stop faces:",
        options: ["No penalty — refusal is a protected constitutional right", "1-year license suspension for a first refusal, and the refusal can be used as evidence against you", "Only a $250 fine with no license action", "A 30-day license suspension for a first refusal"],
        correctAnswer: 1,
        explanation: "Florida's implied consent statute means all drivers impliedly consent to testing when they use public roads. A first-offense refusal results in a 1-year administrative license suspension. A second refusal is a first-degree misdemeanor. The refusal itself is admissible as evidence of guilt in any criminal or civil proceeding."
    },
    {
        id: 39,
        question: "On a Florida highway, you see a solid white line separating your lane from a right-turn-only exit lane. What does crossing this solid white line indicate?",
        options: ["You are required to exit", "Crossing is discouraged — you should have merged earlier and should do so with care", "You may cross freely to exit at any time", "The lane is reserved for buses only"],
        correctAnswer: 1,
        explanation: "A solid white line indicates that lane changes are discouraged. In the context of a highway exit ramp, the solid white line means you should have merged into the exit lane earlier. If you must still cross, do so with extreme caution and only if traffic allows — abrupt exits across solid white lines are a leading cause of highway collisions."
    },
    {
        id: 40,
        question: "On a wet Florida road, stopping distances are approximately how much longer compared to a dry road at the same speed?",
        options: ["About 10–15% longer", "About 25% longer", "About twice as long (100% longer)", "About 50% longer"],
        correctAnswer: 2,
        explanation: "Florida's DHSMV handbook notes that wet road conditions can double your stopping distance compared to dry roads. This means a vehicle that stops in 100 feet on a dry road may need 200 feet on a wet road. Florida's frequent rain and flooding make this especially critical — always increase following distance and reduce speed in wet conditions."
    },
    {
        id: 41,
        question: "Florida law requires you to turn on your headlights when your windshield wipers are in use. What is the main reason for this rule?",
        options: ["To illuminate the road for the driver in rain conditions", "To make your vehicle visible to other drivers in reduced-visibility conditions", "To prevent the battery from draining in wet weather", "To meet federal vehicle lighting standards"],
        correctAnswer: 1,
        explanation: "Florida requires headlights when wipers are in use because rain, fog, and similar conditions reduce visibility for other drivers — not just for you. Headlights make your vehicle visible from the front, reducing the chance of a collision. This rule ('wipers on = headlights on') is a Florida-specific law and frequently tested fact."
    },
    {
        id: 42,
        question: "What is the legal BAC limit for commercial drivers (CDL holders) operating a commercial motor vehicle in Florida?",
        options: ["0.08%", "0.06%", "0.04%", "0.02%"],
        correctAnswer: 2,
        explanation: "Florida, in line with federal law, sets the BAC limit for commercial motor vehicle drivers at 0.04% — half the standard 0.08% adult limit. A CDL holder who tests at or above 0.04% while operating a commercial vehicle can be disqualified from holding a commercial license for one year on a first offense."
    },
    {
        id: 43,
        question: "What is the difference between 'careless driving' and 'reckless driving' in Florida?",
        options: ["They are the same offense with different names", "Careless driving is a civil infraction; reckless driving is a criminal offense showing willful disregard for safety", "Reckless driving only applies on highways; careless driving only on surface streets", "Careless driving results in points; reckless driving only results in a fine"],
        correctAnswer: 1,
        explanation: "In Florida, careless driving is a civil traffic infraction — driving without due care regardless of intent. Reckless driving is a criminal misdemeanor requiring proof of willful or wanton disregard for the safety of persons or property. A first reckless driving offense can result in up to 90 days in jail and a $500 fine, in addition to points on your record."
    },
    {
        id: 44,
        question: "When entering a Florida highway from an on-ramp, what should you do?",
        options: ["Stop at the end of the ramp and wait for a gap before merging", "Use the acceleration lane to match highway speed, then merge smoothly when a gap is available", "Merge immediately at the start of the on-ramp regardless of speed", "Flash your headlights to alert highway traffic before merging"],
        correctAnswer: 1,
        explanation: "Florida law requires drivers to yield to highway traffic when merging from an on-ramp. Use the full length of the acceleration lane to reach a speed matching highway traffic, signal your intent, and merge smoothly into a safe gap. Stopping at the end of a ramp is dangerous and should only occur if absolutely no gap is available."
    },
    {
        id: 45,
        question: "In Florida, if you accumulate 18 points on your driving record within 18 months, your license will be suspended for:",
        options: ["30 days", "3 months", "6 months", "1 year"],
        correctAnswer: 1,
        explanation: "Under Florida's point system, accumulating 18 points within 18 months results in a 3-month license suspension. The thresholds are: 12 points in 12 months = 30-day suspension; 18 points in 18 months = 3-month suspension; 24 points in 36 months = 1-year suspension."
    },
    {
        id: 46,
        question: "What does a flashing yellow arrow signal mean at a Florida intersection?",
        options: ["The left turn lane is closed", "You may turn left after yielding to oncoming traffic and pedestrians — it is a permissive left turn", "A protected left turn — proceed without yielding", "Left turns are prohibited"],
        correctAnswer: 1,
        explanation: "A flashing yellow arrow means you may turn left but must yield to oncoming traffic and pedestrians — this is called a permissive left turn. It replaced the standard circular green for left turns at many Florida intersections to improve traffic flow. It differs from a solid green arrow (protected left, no oncoming traffic) and a solid yellow arrow (left turn is ending, prepare to stop)."
    },
    {
        id: 47,
        question: "In Florida, when must you dim your high-beam headlights to low beams?",
        options: ["Within 500 feet of an oncoming vehicle, or within 300 feet when following another vehicle", "Only when another driver flashes their lights at you", "Whenever driving on a highway with streetlights", "Only when visibility exceeds 1,000 feet"],
        correctAnswer: 0,
        explanation: "Florida requires switching to low beams within 500 feet of an oncoming vehicle and within 300 feet when following another vehicle. High beams can blind oncoming or leading drivers. Always be proactive — dim your lights before another driver is forced to signal you."
    },
    {
        id: 48,
        question: "Which of the following Florida road markings indicates the edge of the roadway on the right side?",
        options: ["A solid yellow line", "A broken white line", "A solid white line", "A double solid yellow line"],
        correctAnswer: 2,
        explanation: "A solid white line on the right edge of the roadway is a fog line or edge line — it marks the boundary between the travel lane and the shoulder. In fog, rain, or darkness, this line helps drivers stay within the roadway. Crossing it means you are moving onto the shoulder or off the road."
    },
    {
        id: 49,
        question: "You are driving on a Florida highway and need to exit. At what point should you begin to slow down?",
        options: ["After entering the exit ramp", "While still in the travel lanes before the exit ramp begins", "On the exit ramp itself, using the ramp's full length to decelerate", "Only after the ramp ends at the bottom"],
        correctAnswer: 2,
        explanation: "You should decelerate on the exit ramp — not in the main travel lanes where slowing could cause rear-end collisions with highway-speed traffic behind you. Signal early, move into the exit lane before the solid white line, and then use the full length of the deceleration ramp to slow to the posted ramp speed."
    },
    {
        id: 50,
        question: "Under Florida law, what is the blood alcohol concentration (BAC) at which a driver can be convicted of DUI regardless of impairment evidence?",
        options: ["0.04%", "0.06%", "0.08%", "0.10%"],
        correctAnswer: 2,
        explanation: "Florida's per se DUI law means that a BAC of 0.08% or higher is sufficient for conviction without any additional evidence of impairment. A driver can also be convicted at a lower BAC if actual impairment is proven. Note that 0.15% or higher — or having a minor in the vehicle — triggers enhanced penalties including mandatory ignition interlock device installation."
    },
]

export const floridaPermitTestFaq: { question: string; answer: string }[] = [
    {
        question: "How many questions are on the real Florida DHSMV permit test?",
        answer: "The real Florida DHSMV knowledge test has 50 questions, and you must get at least 40 correct (80%) to pass. This practice set has 30 questions to help you prepare — score 90%+ here consistently before taking the full 50-question test."
    },
    {
        question: "What score do you need to pass the Florida permit test?",
        answer: "You need 40 out of 50 questions correct — a passing score of 80%. Missing 11 or more questions means you fail."
    },
    {
        question: "How many questions can you miss on the Florida DHSMV test?",
        answer: "You can miss up to 10 questions on the 50-question knowledge test. Missing 11 or more means you fail and must wait 1 day before retaking."
    },
    {
        question: "Is there a time limit on the Florida permit test?",
        answer: "No. The Florida DHSMV does not impose a time limit on the knowledge test. Take your time with each question."
    },
    {
        question: "What is the retake policy if I fail the Florida permit test?",
        answer: "If you fail, you must wait 1 day before retaking. You are also limited to 3 attempts per appointment cycle in Florida. Thorough preparation before your first attempt is especially important."
    },
    {
        question: "Can I take the Florida permit test online?",
        answer: "No. As of 2026, all Florida DHSMV knowledge tests must be taken in person at a Florida DHSMV driver license office."
    },
    {
        question: "What is the minimum age to get a real estate license in Florida?",
        answer: "Florida allows teens to apply for a real estate license at age 15. After holding it and completing supervised driving requirements (50 hours, 10 at night), they can apply for a restricted Class E license at age 16."
    },
    {
        question: "Does Florida require a vision test for a real estate license?",
        answer: "Yes. Florida requires both a written knowledge test and a vision test before issuing a first-time real estate license. The vision test verifies you meet the minimum visual acuity standards for safe driving. This is a state-specific requirement not found in every state."
    },
]
