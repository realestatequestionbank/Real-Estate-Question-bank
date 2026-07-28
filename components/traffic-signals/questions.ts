export interface Question {
    id: number
    question: string
    options: string[]
    correctAnswer: number
    explanation: string
}

export const TRAFFIC_SIGNALS_QUESTIONS: Question[] = [
    {
        id: 1,
        question: "A flashing red traffic signal means:",
        options: [
            "Slow down and proceed",
            "Stop completely then proceed when safe",
            "Yield only to pedestrians",
            "Continue without stopping"
        ],
        correctAnswer: 1,
        explanation: "A flashing red light is treated exactly like a stop sign: come to a complete stop, then proceed when safe."
    },
    {
        id: 2,
        question: "A solid yellow line on your side of the road means:",
        options: [
            "Passing allowed",
            "Passing allowed at night",
            "No passing",
            "Passing only trucks"
        ],
        correctAnswer: 2,
        explanation: "A solid yellow line on your side means passing is prohibited from your direction."
    },
    {
        id: 3,
        question: "A flashing yellow traffic signal means:",
        options: [
            "Stop completely",
            "Proceed with caution",
            "Yield to all traffic",
            "Pedestrians must stop"
        ],
        correctAnswer: 1,
        explanation: "A flashing yellow light warns drivers to slow down and proceed with caution, but does not require a complete stop."
    },
    {
        id: 4,
        question: "What does a double solid yellow line indicate?",
        options: [
            "Passing allowed both ways",
            "Passing allowed one way",
            "No passing either direction",
            "Passing during daylight only"
        ],
        correctAnswer: 2,
        explanation: "Double solid yellow lines prohibit passing in both directions. These mark areas where passing is particularly dangerous."
    },
    {
        id: 5,
        question: "A green arrow with a red light means:",
        options: [
            "Stop and wait",
            "Proceed in the arrow's direction only",
            "Yield to all traffic",
            "Arrow is optional"
        ],
        correctAnswer: 1,
        explanation: "A green arrow allows movement only in the direction the arrow points, even if the main light is red."
    },
    {
        id: 6,
        question: "Broken white lane lines indicate:",
        options: [
            "No lane changes allowed",
            "Lanes moving in opposite directions",
            "Lanes moving in the same direction",
            "Lane ends soon"
        ],
        correctAnswer: 2,
        explanation: "Broken white lines separate lanes of traffic moving in the same direction. Lane changes are permitted."
    },
    {
        id: 7,
        question: "A steady yellow traffic light means:",
        options: [
            "Speed up to clear the intersection",
            "Prepare to stop if safe",
            "Stop immediately",
            "Pedestrians may cross"
        ],
        correctAnswer: 1,
        explanation: "A steady yellow light warns that the signal is about to turn red. If you can stop safely, you should do so."
    },
    {
        id: 8,
        question: "What does a solid white line between lanes indicate?",
        options: [
            "Lane changes encouraged",
            "Lane changes discouraged but allowed",
            "Lane changes prohibited",
            "Lane ends"
        ],
        correctAnswer: 1,
        explanation: "A solid white line discourages lane changes but does not legally prohibit them. It marks areas where changing lanes is unwise."
    },
    {
        id: 9,
        question: "A red arrow means:",
        options: [
            "Stop, then turn allowed",
            "No turn permitted",
            "Yield then turn allowed",
            "Arrow only applies to trucks"
        ],
        correctAnswer: 1,
        explanation: "A red arrow means you must stop and cannot turn in that direction until the arrow changes to green."
    },
    {
        id: 10,
        question: "What does a center lane marked with solid yellow on the outside and broken yellow on the inside mean?",
        options: [
            "Passing lane",
            "Two-way left-turn lane",
            "HOV lane",
            "Emergency lane"
        ],
        correctAnswer: 1,
        explanation: "This marking indicates a two-way left-turn lane (also called a center turn lane). Vehicles from both directions can use it to prepare for left turns."
    }
]
