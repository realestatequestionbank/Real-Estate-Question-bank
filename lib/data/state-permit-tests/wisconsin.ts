import type { Question, StatePermitTestConfig } from '@/components/state-permit-test/types'

export const wisconsinPermitTestConfig: StatePermitTestConfig = {
    stateName: 'Wisconsin',
    stateCode: 'WI',
    departmentName: 'Wisconsin DOT',
    departmentAbbr: 'DOT',
    realQuestionCount: 50,
    realPassCount: 40,
    passPercent: 80,
    retakePolicy: 'Can retake after 1 day if failed',
    mainPageUrl: '/wisconsin-dot-permit-test',
    pageUrl: '/wisconsin-dot-permit-test-50-questions',
    stateGuideUrl: '',
    handbookUrl: '/handbooks/wisconsin',
    year: 2026,
}

export const wisconsinPermitTestQuestions: Question[] = [
    {
        id: 1,
        question: "How can you reduce the risk of hydroplaning?",
        options: [
            "Drive more slowly.",
            "Drive more quickly.",
            "Drive through deeper water.",
            "Turn off traction control."
        ],
        correctAnswer: 0,
        explanation: "Hydroplaning is more likely at higher speeds on wet roads; slowing down helps tires channel water and maintain contact with the road.",
    },
    {
        id: 2,
        question: "How far ahead should you look while driving to maintain safe awareness?",
        options: [
            "About 10 to 15 seconds ahead.",
            "Only 100 to 150 yards ahead.",
            "One to two blocks only.",
            "Directly in front of the hood at all times."
        ],
        correctAnswer: 0,
        explanation: "Scanning 10–15 seconds down the road helps you anticipate hazards and avoid last-second maneuvers.",
    },
    {
        id: 3,
        question: "If your vehicle begins to skid, how should you steer?",
        options: [
            "Turn the wheel in the direction you want the vehicle to go.",
            "Turn the wheel to keep the front wheels straight.",
            "Turn the wheel opposite the direction of the skid."
        ],
        correctAnswer: 0,
        explanation: "If you skid, steer toward where you want the vehicle to go. When the car begins to straighten, correct steering to keep control.",
    },
    {
        id: 4,
        question: "If a tire suddenly blows out, what should you do with the steering and brakes?",
        options: [
            "Apply the brake and hold it.",
            "Hold the steering wheel tightly and use the brakes lightly.",
            "Pull over quickly."
        ],
        correctAnswer: 1,
        explanation: "Hold the steering wheel firmly to keep the vehicle straight, slow gradually by easing off the gas, and apply brakes lightly once the vehicle is under control.",
    },
    {
        id: 5,
        question: "Your vehicle's blind spot is the area:",
        options: [
            "You cannot see without turning your head.",
            "Directly behind your vehicle only.",
            "Visible in your rearview mirror.",
            "Inside the car behind the passenger seat."
        ],
        correctAnswer: 0,
        explanation: "Blind spots are areas not visible in mirrors; check them by turning your head to look over your shoulder before changing lanes.",
    },
    {
        id: 6,
        question: "If you stop along the road at night, what lighting should you use?",
        options: [
            "Keep your low-beam headlights on and turn on emergency flashers.",
            "Turn off all lights to conserve battery.",
            "Use parking lights only."
        ],
        correctAnswer: 0,
        explanation: "If you stop at night, turn on your emergency flashers and keep your low-beam headlights on so other road users can see your vehicle.",
    },
    {
        id: 7,
        question: "What helps you avoid needing to make emergency stops in traffic?",
        options: [
            "Drive only in the right lane.",
            "Look ahead and maintain a safe following distance.",
            "Honk to make others aware of you."
        ],
        correctAnswer: 1,
        explanation: "Maintaining a safe following distance and scanning ahead allows you to react and avoid sudden emergency stops.",
    },
    {
        id: 8,
        question: "Before changing from the right lane into the left on a multi-lane highway, what checks should you make?",
        options: [
            "Look over your left shoulder for traffic in your blind spot and check mirrors, then signal.",
            "Look only in your side mirror and then change lanes.",
            "Signal and look in your rearview mirror only."
        ],
        correctAnswer: 0,
        explanation: "Check mirrors and look over your left shoulder for vehicles in the blind spot; always signal before changing lanes.",
    },
    {
        id: 9,
        question: "Anything that requires you to which of the following could cause a crash?",
        options: [
            "Take your attention away from the task of driving.",
            "Take your hands off the wheel only briefly.",
            "Use your mirrors occasionally."
        ],
        correctAnswer: 0,
        explanation: "Any activity that diverts attention from driving, takes your eyes off the road, or your hands off the wheel is a dangerous distraction that can cause a crash.",
    },
    {
        id: 10,
        question: "After passing on the left, when is it safe to return to the right lane?",
        options: [
            "When you can see the front of the passed vehicle in your rearview mirror.",
            "After roughly three seconds.",
            "When you can no longer see the vehicle over your right shoulder."
        ],
        correctAnswer: 0,
        explanation: "You may return to the right lane when the passed vehicle's front is visible in your rearview mirror; always signal before changing lanes.",
    },
    {
        id: 11,
        question: "Which type of roadway area tends to freeze first in cold weather?",
        options: [
            "Areas shaded by trees or buildings.",
            "Flat open areas.",
            "Roads in direct sunlight."
        ],
        correctAnswer: 0,
        explanation: "Shaded sections freeze sooner and stay icy longer because they get less sun and dry more slowly than exposed areas.",
    },
    {
        id: 12,
        question: "Faced with an oncoming car on your left and a bicyclist on your right, what should you do?",
        options: [
            "Pull onto the shoulder.",
            "Split the difference.",
            "Let the car pass and then pass the bike."
        ],
        correctAnswer: 2,
        explanation: "When multiple hazards exist, handle one at a time: allow the oncoming vehicle to pass before safely passing the bicyclist.",
    },
    {
        id: 13,
        question: "If you want to turn left but oncoming traffic is heavy and the light is green, what is the appropriate action?",
        options: [
            "Use the next intersection.",
            "Wait at the crosswalk for traffic to clear.",
            "Wait in the center of the intersection for traffic to clear."
        ],
        correctAnswer: 2,
        explanation: "If the light is green and it is safe, you may enter the intersection to wait for a gap in oncoming traffic to complete your left turn; do not block the crosswalk.",
    },
    {
        id: 14,
        question: "When it starts to rain while you are driving, what should you do?",
        options: [
            "Slow down.",
            "Drive at the posted maximum speed.",
            "Drive faster than surrounding traffic to get through the rain quickly."
        ],
        correctAnswer: 0,
        explanation: "Reduce speed when rain begins, turn on headlights for visibility, and pull over if visibility becomes too poor to continue safely.",
    },
    {
        id: 15,
        question: "When turning left from a multilane, one-way street onto another one-way or multilane roadway, from which lane should you begin the turn?",
        options: [
            "The left lane.",
            "The middle of the intersection.",
            "The right lane."
        ],
        correctAnswer: 0,
        explanation: "When turning left from multilane or one-way streets, begin the turn from the leftmost lane designated for left turns.",
    },
    {
        id: 16,
        question: "Is it ever legal to block an intersection?",
        options: [
            "If you entered the intersection on the green light.",
            "During rush hour traffic.",
            "Under no circumstances."
        ],
        correctAnswer: 2,
        explanation: "You may not enter an intersection unless you can fully clear it; blocking an intersection is unlawful even if the light is green when you enter.",
    },
    {
        id: 17,
        question: "If your wheels go off the pavement, what should you do?",
        options: [
            "Ease off the accelerator, keep steering straight, slow down gradually, and return to the pavement when safe.",
            "Grip the wheel and sharply steer back onto the pavement.",
            "Brake hard immediately to bring the vehicle to a stop."
        ],
        correctAnswer: 0,
        explanation: "If your vehicle leaves the pavement, reduce speed gently by easing off the accelerator while staying straight; when safe, steer back onto the road. Do not make sudden, sharp turns to force the vehicle back onto the pavement.",
    },
    {
        id: 18,
        question: "What does a solid yellow line on your side of the centerline mean?",
        options: [
            "Slow down.",
            "Pass with caution.",
            "Do not pass."
        ],
        correctAnswer: 2,
        explanation: "A solid yellow line next to your lane means passing from your direction is prohibited; wait for a legal passing zone.",
    },
    {
        id: 19,
        question: "When entering the roadway from a driveway, what must you do?",
        options: [
            "Must stop and proceed only when there are no pedestrians or vehicles approaching.",
            "Must drive slowly so approaching vehicles can get out of your way.",
            "Must honk your horn to alert pedestrians and drivers."
        ],
        correctAnswer: 0,
        explanation: "Stop before entering the roadway from a driveway, yield to approaching vehicles and pedestrians, and proceed only when safe.",
    },
    {
        id: 20,
        question: "Why should you be cautious when passing a bicycle?",
        options: [
            "Oncoming traffic may not see you pull out to pass the bike.",
            "The bicycle always has the right-of-way.",
            "You are moving slower than the bicycle."
        ],
        correctAnswer: 0,
        explanation: "Bicyclists may swerve to avoid hazards and oncoming traffic may not see you moving into its lane; give bicycles extra room.",
    },
    {
        id: 21,
        question: "On long highway trips, what helps prevent drowsiness?",
        options: [
            "Stopping at regular intervals to rest.",
            "Turning up the radio.",
            "Slowing down."
        ],
        correctAnswer: 0,
        explanation: "Schedule regular stops to rest and stretch to reduce drowsiness while driving long distances.",
    },
    {
        id: 22,
        question: "How must a driver respond to a flashing red traffic signal?",
        options: [
            "Stop, yield to traffic and pedestrians, and proceed when safe.",
            "Slow down and proceed without stopping.",
            "Merge to the right and continue."
        ],
        correctAnswer: 0,
        explanation: "A flashing red light requires a full stop; yield to other road users and go only when it is safe.",
    },
    {
        id: 23,
        question: "If stopped at a railroad crossing with more than one track, when is it safe to proceed?",
        options: [
            "When you have a clear view of all tracks and there are no trains approaching.",
            "As soon as one train passes on one track.",
            "When the crossing lights stop flashing even if you cannot see down all tracks."
        ],
        correctAnswer: 0,
        explanation: "Wait until you can see clearly down all tracks before proceeding; another train may be approaching on a different track.",
    },
    {
        id: 24,
        question: "What does a single dashed yellow line between opposing lanes mean?",
        options: [
            "Drivers may pass if it is safe to do so.",
            "Both lanes travel in the same direction.",
            "Drivers may not pass."
        ],
        correctAnswer: 0,
        explanation: "A single dashed yellow centerline indicates passing is allowed for vehicles in both directions when it is safe.",
    },
    {
        id: 25,
        question: "How does alcohol affect driving skills and judgment?",
        options: [
            "It harms both driving skills and judgment.",
            "It helps driving skills but harms judgment.",
            "It has no effect on either."
        ],
        correctAnswer: 0,
        explanation: "Alcohol impairs reaction time, vision, coordination, and judgment, making driving dangerous at any level of consumption.",
    },
    {
        id: 26,
        question: "What is 'highway hypnosis' most likely caused by?",
        options: [
            "Staring at the roadway for long periods of time.",
            "Frequent rest stops.",
            "Too much sleep the night before your trip."
        ],
        correctAnswer: 0,
        explanation: "Highway hypnosis occurs when you stare ahead for long periods and stop actively scanning; take breaks and stay mentally alert to avoid zoning out.",
    },
    {
        id: 27,
        question: "Two solid white lines across a lane mark what?",
        options: [
            "The boundaries of a crosswalk where pedestrians should be given the right-of-way.",
            "That motor vehicles have priority over pedestrians.",
            "That no one has the right-of-way."
        ],
        correctAnswer: 0,
        explanation: "Two solid white lines across a lane typically mark a crosswalk; drivers must yield to pedestrians in crosswalks.",
    },
    {
        id: 28,
        question: "What is the effect of driving while distracted by activities such as phone use?",
        options: [
            "It usually causes the driver to react more slowly to hazards.",
            "It typically improves driver awareness.",
            "It causes drivers to drive faster intentionally."
        ],
        correctAnswer: 0,
        explanation: "Distracted driving slows reaction time and reduces the ability to perceive and respond to road hazards, increasing crash risk.",
    },
    {
        id: 29,
        question: "A vehicle is hydroplaning when what occurs?",
        options: [
            "Its tires lose contact with the road surface and the vehicle rides on water.",
            "The windshield wipers cannot keep the windshield clear.",
            "Spray from a large truck reduces visibility."
        ],
        correctAnswer: 0,
        explanation: "Hydroplaning happens when tires ride on a layer of water, causing loss of steering and braking control.",
    },
    {
        id: 30,
        question: "On slippery roads, how should you adjust your following distance?",
        options: [
            "Increase your following distance (stay farther back).",
            "Keep the same distance as normal.",
            "Follow closer to the car ahead."
        ],
        correctAnswer: 0,
        explanation: "Slippery surfaces require longer stopping distances; maintain extra space between you and the vehicle ahead.",
    },
    {
        id: 31,
        question: "If your view to the side at an intersection is blocked, what is the correct procedure?",
        options: [
            "Stop, then inch forward until you can see clearly in both directions.",
            "Slow down and look both ways without stopping.",
            "Maintain speed and look both ways."
        ],
        correctAnswer: 0,
        explanation: "When sight lines are obstructed, stop and inch forward until you have a clear view before entering the intersection.",
    },
    {
        id: 32,
        question: "Which factor commonly contributes to traffic crashes?",
        options: [
            "Exceeding the posted speed limit and driving too fast for conditions.",
            "Getting adequate rest and staying alert.",
            "Careful scanning of the environment."
        ],
        correctAnswer: 0,
        explanation: "Driving too fast for posted speeds or conditions is a frequent cause of crashes; maintain appropriate speed for conditions.",
    },
    {
        id: 33,
        question: "When driving on major highways, what should you remember?",
        options: [
            "Stay alert and ready to react to hazards.",
            "Keep your eyes fixed straight ahead to maintain concentration.",
            "Avoid checking mirrors to reduce distraction."
        ],
        correctAnswer: 0,
        explanation: "Highway driving requires alertness and scanning to avoid highway hypnosis and to respond to unexpected hazards.",
    },
    {
        id: 34,
        question: "If a driver's left arm and hand are extended downward, what does that signal mean?",
        options: [
            "Turn left.",
            "Stop.",
            "Turn right."
        ],
        correctAnswer: 1,
        explanation: "A downward left-arm signal indicates the driver intends to stop.",
    },
    {
        id: 35,
        question: "When should you begin to slow down for a highway exit?",
        options: [
            "After you have moved into the exit lane.",
            "On the main road just before the exit lane.",
            "Only when you see a toll booth."
        ],
        correctAnswer: 0,
        explanation: "Get into the exit lane well in advance and begin to slow down after you are fully in the exit lane, following any posted advisory speeds.",
    },
    {
        id: 36,
        question: "Which behavior describes a good defensive driver?",
        options: [
            "Drives slowly at all times.",
            "Looks out for the actions of other drivers.",
            "Travels at a constant speed."
        ],
        correctAnswer: 1,
        explanation: "A defensive driver anticipates other drivers' actions, scans the road for hazards, and plans safe reactions rather than relying solely on their own speed.",
    },
    {
        id: 37,
        question: "When must you yield to a pedestrian?",
        options: [
            "At all times when necessary to prevent hitting them, even if they ignore traffic laws.",
            "Only in a marked crosswalk.",
            "Only when traffic signals favor the pedestrian.",
            "Only when a police officer is present."
        ],
        correctAnswer: 0,
        explanation: "Always do everything possible to avoid striking a pedestrian, regardless of whether they are obeying traffic laws.",
    },
    {
        id: 38,
        question: "If you approach an intersection blocked by traffic, what should you do?",
        options: [
            "Stay out of the intersection until you can pass through completely.",
            "Get as close as possible to the vehicle ahead so you can go next.",
            "Enter the intersection and wait for traffic to clear.",
            "Honk to move traffic along."
        ],
        correctAnswer: 0,
        explanation: "Do not enter an intersection unless you can clear it without blocking cross traffic; wait until traffic ahead moves.",
    },
    {
        id: 39,
        question: "Which statement accurately describes alcohol's effect on driving?",
        options: [
            "Alcohol impairs judgment, which is essential for safe driving.",
            "If you can walk in a straight line after drinking, it is safe to drive.",
            "Being under the legal BAC limit guarantees unimpaired driving."
        ],
        correctAnswer: 0,
        explanation: "Alcohol reduces judgment, which is needed to perceive and react to road hazards. Even small amounts can affect driving ability.",
    },
    {
        id: 40,
        question: "If you miss your exit on an interstate expressway, what should you do?",
        options: [
            "Stop and make a U-turn.",
            "Get off at the next exit and come back to the exit you missed.",
            "Roll down your window and ask the driver next to you for help."
        ],
        correctAnswer: 1,
        explanation: "Do not back up or make a U-turn on the highway. Continue to the next exit and safely return to the missed exit.",
    },
    {
        id: 41,
        question: "If a transit vehicle is signaling to reenter the main roadway after a stop, you must:",
        options: [
            "Hon k to let them reenter.",
            "Move to the left lane immediately.",
            "Yield and allow it to merge safely."
        ],
        correctAnswer: 2,
        explanation: "Yield to transit vehicles re-entering traffic after a stop by changing lanes or slowing as necessary to let them merge safely.",
    },
    {
        id: 42,
        question: "What does it mean when lanes are separated by double solid yellow lines?",
        options: [
            "Passing is not permitted from either direction.",
            "Passing is allowed from either direction when safe.",
            "You may pass from the left only.",
            "You may cross the lines to make a U-turn anywhere."
        ],
        correctAnswer: 0,
        explanation: "Double solid yellow lines mark opposing traffic lanes; passing is prohibited for traffic in both directions.",
    },
    {
        id: 43,
        question: "When you see an approaching emergency vehicle using flashing lights, what must you do?",
        options: [
            "Maintain your speed and stay in your lane until the vehicle has passed.",
            "Move into the right lane and drive slowly until the vehicle has passed.",
            "Pull over to the curb or edge of the road and stop until the vehicle has passed."
        ],
        correctAnswer: 2,
        explanation: "Pull over to the right edge of the road, stop, and remain stopped until the emergency vehicle has passed; on one-way streets move to the nearest edge.",
    },
    {
        id: 44,
        question: "When stopped on an uphill slope, why should you allow a larger space cushion in front of you?",
        options: [
            "At an intersection.",
            "On an incline, to allow for a vehicle ahead that may roll back.",
            "At a stop sign."
        ],
        correctAnswer: 1,
        explanation: "Allow more space when stopped on an uphill grade because the vehicle ahead may roll backward when traffic starts moving.",
    },
    {
        id: 45,
        question: "What do two solid yellow lines in the center of the road mean?",
        options: [
            "Passing is not allowed for traffic in either direction.",
            "Passing is allowed for drivers in both directions.",
            "Passing is allowed only when going downhill."
        ],
        correctAnswer: 0,
        explanation: "Two solid yellow centerlines indicate opposite-direction traffic and prohibit passing from either side.",
    },
    {
        id: 46,
        question: "Unless otherwise posted, what is the maximum speed limit in a school zone where children or crossing guards are present?",
        options: [
            "10 mph",
            "15 mph",
            "20 mph"
        ],
        correctAnswer: 1,
        explanation: "Unless signs indicate otherwise, the maximum speed limit in a school zone with children or crossing guards present is 15 mph.",
    },
    {
        id: 47,
        question: "What is the only effective method to lower your blood alcohol concentration (BAC)?",
        options: [
            "Drink coffee.",
            "Exercise.",
            "Allow your body time to get rid of the alcohol."
        ],
        correctAnswer: 2,
        explanation: "Only time allows your body to metabolize alcohol; coffee, exercise, and other remedies do not reduce BAC.",
    },
    {
        id: 48,
        question: "When preparing to change lanes, what should you check?",
        options: [
            "Rearview mirror and side mirror, then glance quickly over your shoulder for blind spots.",
            "Only the side view mirror.",
            "Only the inside mirror.",
            "Nothing; trust other drivers to avoid you."
        ],
        correctAnswer: 0,
        explanation: "Check mirrors for approaching traffic, then look over your shoulder just before changing lanes to ensure it is clear.",
    },
    {
        id: 49,
        question: "While driving in fog or other low-visibility conditions, what should you do about headlights?",
        options: [
            "Slow down and use your low beam headlights.",
            "Turn on your high beams to see further.",
            "Increase speed to clear the area quickly."
        ],
        correctAnswer: 0,
        explanation: "Use low beams in fog; high beams will reflect off moisture and reduce visibility. If visibility is too poor, pull off the roadway.",
    },
    {
        id: 50,
        question: "When two vehicles enter an intersection from different highways at the same time, which vehicle must yield?",
        options: [
            "The vehicle on the left.",
            "Either one.",
            "The vehicle on the right."
        ],
        correctAnswer: 0,
        explanation: "When two vehicles arrive at the same time, the vehicle on the left must yield to the vehicle on the right.",
    }
]

export const wisconsinPermitTestFaq: { question: string; answer: string }[] = [
    {
        question: "How many questions are on the Wisconsin DOT permit test?",
        answer: "The Wisconsin DOT knowledge test has 50 multiple-choice questions — one of the longest permit tests in the US. You need to answer at least 40 correctly (80%) to pass. This practice set uses 30 questions to give you comprehensive coverage of the same material."
    },
    {
        question: "What score do you need to pass the Wisconsin permit test?",
        answer: "You need 40 out of 50 questions correct on the real test — a passing score of 80%. Missing 11 or more questions means you fail and must wait 1 day before retaking."
    },
    {
        question: "How many questions can you miss on the Wisconsin DOT test?",
        answer: "You can miss up to 10 questions on the 50-question knowledge test. With 50 questions, Wisconsin's test is one of the longest in the US — take it seriously and study the full Wisconsin DOT Driver's Manual."
    },
    {
        question: "Is there a time limit on the Wisconsin permit test?",
        answer: "No. The Wisconsin DOT does not impose a time limit on the knowledge test. However, with 50 questions, budget sufficient time for your appointment. Take your time on each question."
    },
    {
        question: "What is the retake policy if I fail the Wisconsin permit test?",
        answer: "If you fail, you must wait 1 day before retaking. Use that time to review the areas where you struggled. Consistently scoring 90%+ on practice tests before your appointment is the best way to pass the full 50-question DOT exam on your first try."
    },
    {
        question: "Can I take the Wisconsin permit test online?",
        answer: "No. As of 2026, all Wisconsin DOT knowledge tests must be taken in person at a Wisconsin Real Estate Customer Service Center. You can find office locations and hours on the Wisconsin DOT website."
    },
    {
        question: "What is the minimum age to get a real estate license in Wisconsin?",
        answer: "You must be at least 15½ years old (15 years and 6 months) to apply for a Wisconsin real estate license — not 15 or 16, but exactly 15 and a half. After holding the permit and completing 30 hours of supervised driving, you can apply for a probationary license at age 16."
    },
    {
        question: "What term does Wisconsin use instead of DUI?",
        answer: "Wisconsin uses 'OWI' (Operating While Intoxicated) instead of 'DUI.' The OWI limit is 0.08% BAC for adults 21 and older. Wisconsin also uses zero tolerance for underage drivers — any detectable alcohol is illegal. Additionally, OWI covers controlled substances — Wisconsin has zero tolerance for any detectable controlled substance in the blood while operating a vehicle."
    },
]
