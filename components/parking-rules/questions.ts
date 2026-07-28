export interface Question {
    id: number
    question: string
    options: string[]
    correctAnswer: number
    explanation: string
}

export const PARKING_RULES_QUESTIONS: Question[] = [
    {
        id: 1,
        question: "How close can you legally park to a fire hydrant?",
        options: [
            "5 feet",
            "10 feet",
            "15 feet",
            "20 feet"
        ],
        correctAnswer: 2,
        explanation: "Most states prohibit parking within 15 feet of a fire hydrant to ensure emergency vehicle access."
    },
    {
        id: 2,
        question: "A red curb typically means:",
        options: [
            "Loading zone",
            "Short-term parking",
            "No stopping or parking",
            "Disabled parking"
        ],
        correctAnswer: 2,
        explanation: "Red curbs indicate no stopping, standing, or parking at any time. This is strictly enforced."
    },
    {
        id: 3,
        question: "When parking uphill with a curb, your wheels should be turned:",
        options: [
            "Toward the curb",
            "Away from the curb",
            "Straight ahead",
            "Does not matter"
        ],
        correctAnswer: 1,
        explanation: "When parking uphill, turn your wheels away from the curb so the car rolls into the curb if it moves, preventing it from rolling into traffic."
    },
    {
        id: 4,
        question: "When parking downhill with a curb, your wheels should be turned:",
        options: [
            "Away from the curb",
            "Toward the curb",
            "Straight ahead",
            "Does not matter"
        ],
        correctAnswer: 1,
        explanation: "When parking downhill, turn your wheels toward the curb to prevent rolling into traffic if the brakes fail."
    },
    {
        id: 5,
        question: "A blue curb usually indicates:",
        options: [
            "No parking",
            "Passenger loading",
            "Disabled parking",
            "Commercial parking"
        ],
        correctAnswer: 2,
        explanation: "Blue curbs are reserved for disabled parking with a proper placard or license plate. Unauthorized parking can result in hefty fines."
    },
    {
        id: 6,
        question: "Parking is usually prohibited:",
        options: [
            "In front of driveways",
            "Next to sidewalks",
            "Near your home",
            "On residential streets"
        ],
        correctAnswer: 0,
        explanation: "Parking in front of driveways blocks access and is illegal, even if it's your own driveway."
    },
    {
        id: 7,
        question: "How far from an intersection can you typically park?",
        options: [
            "5 feet",
            "10 feet",
            "15 feet",
            "20 feet"
        ],
        correctAnswer: 2,
        explanation: "Most states require parking at least 15 feet from an intersection to ensure clear visibility for all drivers."
    },
    {
        id: 8,
        question: "A white curb generally means:",
        options: [
            "No parking",
            "Passenger loading only",
            "Commercial loading only",
            "Disabled parking"
        ],
        correctAnswer: 1,
        explanation: "White curbs are designated for temporary passenger loading or unloading only. Time limits typically apply."
    },
    {
        id: 9,
        question: "Parking on a sidewalk is:",
        options: [
            "Allowed briefly",
            "Allowed with hazard lights",
            "Illegal",
            "Allowed at night"
        ],
        correctAnswer: 2,
        explanation: "Parking on sidewalks is illegal in all states as it obstructs pedestrian traffic and violates ADA accessibility requirements."
    },
    {
        id: 10,
        question: "Parking in a disabled space without authorization may result in:",
        options: [
            "Warning only",
            "Small fine",
            "Large fine and penalties",
            "Towing only"
        ],
        correctAnswer: 2,
        explanation: "Unauthorized disabled parking carries significant fines (often $250-$500 or more) and may include towing and community service."
    }
]
