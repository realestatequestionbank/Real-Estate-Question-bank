export interface Question {
    id: number
    question: string
    options: string[]
    correctAnswer: number
    explanation: string
    category: string
}

export const SAFE_DRIVING_QUESTIONS: Question[] = [
    {
        id: 1,
        question: "When driving in foggy conditions, you should use:",
        options: [
            "High beam headlights",
            "Low beam headlights",
            "Parking lights only",
            "Hazard lights"
        ],
        correctAnswer: 1,
        explanation: "Always use low beam headlights in fog. High beams reflect off the moisture in the air, creating a glare that further reduces visibility.",
        category: "Bad Weather"
    },
    {
        id: 2,
        question: "What is the '3-second rule' used for?",
        options: [
            "Calculating fuel efficiency",
            "Waiting at a stop sign",
            "Establishing a safe following distance",
            "Checking your blind spots"
        ],
        correctAnswer: 2,
        explanation: "The 3-second rule helps you maintain a safe following distance. Pick a fixed object; when the car ahead passes it, count 3 seconds. If you pass it before you finish counting, you are following too closely.",
        category: "Defensive Driving"
    },
    {
        id: 3,
        question: "If your car begins to hydroplane (skid on water), you should:",
        options: [
            "Slam on the brakes immediately",
            "Turn the steering wheel sharply in the opposite direction",
            "Ease off the accelerator and steer straight",
            "Accelerate to gain traction"
        ],
        correctAnswer: 2,
        explanation: "If you hydroplane, do not brake or turn suddenly. Ease your foot off the gas to slow down gradually until your tires regain contact with the road.",
        category: "Emergencies"
    },
    {
        id: 4,
        question: "When are roads most slippery?",
        options: [
            "During a heavy downpour",
            "After it has rained for several hours",
            "During the first few minutes of rain",
            "When the road is completely dry"
        ],
        correctAnswer: 2,
        explanation: "Roads are most slippery during the first 10-15 minutes of rain because the water mixes with oil and dust on the pavement, creating a greasy surface.",
        category: "Bad Weather"
    },
    {
        id: 5,
        question: "What should you do if your tire blows out while driving?",
        options: [
            "Brake hard and steer to the shoulder",
            "Grip the steering wheel firmly and ease off the gas",
            "Increase speed to stabilize the car",
            "Turn quickly to exit the road"
        ],
        correctAnswer: 1,
        explanation: "In a blowout, grip the wheel firmly to maintain control. Do not brake hard. Let the car slow down gradually and steer to a safe place.",
        category: "Emergencies"
    },
    {
        id: 6,
        question: "To check your blind spot before changing lanes, you should:",
        options: [
            "Look into the rearview mirror only",
            "Look into the side mirrors only",
            "Turn your head and look over your shoulder",
            "Briefly honk your horn"
        ],
        correctAnswer: 2,
        explanation: "Mirrors have blind spots. You must physically turn your head to look over your shoulder in the direction you plan to move.",
        category: "Defensive Driving"
    },
    {
        id: 7,
        question: "When driving at night, you should dim your high beams when:",
        options: [
            "Approaching an intersection",
            "Driving on an open highway",
            "Within 500 feet of an oncoming vehicle",
            "Within 1000 feet of an oncoming vehicle"
        ],
        correctAnswer: 2,
        explanation: "You must dim your high beams when approaching an oncoming vehicle (typically within 500 feet) or following another vehicle (within 300 feet) to avoid blinding other drivers.",
        category: "Night Driving"
    },
    {
        id: 8,
        question: "Scanning the road ahead involves looking:",
        options: [
            "Only at the car directly in front of you",
            "10 to 15 seconds ahead of your vehicle",
            "At the hood of your car",
            "Only at road signs"
        ],
        correctAnswer: 1,
        explanation: "Defensive driving requires looking 10-15 seconds ahead (about one city block). This gives you time to spot hazards and react safely.",
        category: "Defensive Driving"
    },
    {
        id: 9,
        question: "If your brakes fail while driving, what is the first thing you should try?",
        options: [
            "Turn off the engine",
            "Drive into a ditch",
            "Pump the brake pedal rapidly",
            "Shift into neutral"
        ],
        correctAnswer: 2,
        explanation: "If brakes fail, pump the pedal rapidly to build up pressure. If that fails, use the parking brake slowly or shift to a lower gear.",
        category: "Emergencies"
    },
    {
        id: 10,
        question: "What is the main cause of rear-end collisions?",
        options: [
            "Brake failure",
            "Following too closely (tailgating)",
            "Poor road conditions",
            "Driving too slowly"
        ],
        correctAnswer: 1,
        explanation: "Following too closely (tailgating) is the #1 cause of rear-end collisions. Always maintain a safe following distance.",
        category: "Defensive Driving"
    }
]
