export type Question = {
    id: number
    question: string
    options: string[]
    correctAnswer: number // 0-3 index
    explanation: string
}

export const RIGHT_OF_WAY_QUESTIONS: Question[] = [
    {
        id: 1,
        question: "At a 4-way stop, two vehicles arrive at the intersection at the same time. Who has the right-of-way?",
        options: [
            "The vehicle on the left",
            "The vehicle on the right",
            "The larger vehicle",
            "The vehicle going straight"
        ],
        correctAnswer: 1, // B
        explanation: "At a 4-way stop, if two vehicles arrive simultaneously, the vehicle on the right goes first."
    },
    {
        id: 2,
        question: "When entering a roundabout, who must yield?",
        options: [
            "Vehicles already in the roundabout",
            "Vehicles entering the roundabout",
            "Vehicles on the left",
            "No one"
        ],
        correctAnswer: 1, // B
        explanation: "Vehicles entering the roundabout must yield to traffic already circulating."
    },
    {
        id: 3,
        question: "You are turning left at an intersection. Who do you yield to?",
        options: [
            "Vehicles turning right",
            "Oncoming vehicles going straight",
            "Pedestrians only",
            "No one"
        ],
        correctAnswer: 1, // B
        explanation: "Left-turning vehicles must yield to oncoming traffic and pedestrians in the crosswalk."
    },
    {
        id: 4,
        question: "At an uncontrolled intersection, you should yield to:",
        options: [
            "Vehicles on your left",
            "Vehicles on your right",
            "Vehicles going straight",
            "Vehicles turning left"
        ],
        correctAnswer: 1, // B
        explanation: "At an uncontrolled intersection, yield to vehicles on your right."
    },
    {
        id: 5,
        question: "A pedestrian is crossing at a marked crosswalk. What should you do?",
        options: [
            "Honk and continue",
            "Stop and yield",
            "Slow down, pedestrian must wait",
            "Drive around"
        ],
        correctAnswer: 1, // B
        explanation: "Pedestrians in a marked crosswalk always have the right-of-way."
    },
    {
        id: 6,
        question: "When an emergency vehicle with lights and sirens approaches, you should:",
        options: [
            "Speed up",
            "Pull to the right and stop",
            "Continue driving slowly",
            "Turn into the nearest driveway"
        ],
        correctAnswer: 1, // B
        explanation: "Always yield to emergency vehicles by pulling to the side and stopping."
    },
    {
        id: 7,
        question: "A school bus is stopped with red lights flashing. You are on a divided highway. Must you stop?",
        options: [
            "Only if on the same side",
            "Only if on the opposite side",
            "Always",
            "Never"
        ],
        correctAnswer: 0, // A
        explanation: "On a divided highway, only traffic on the same side as the bus must stop."
    },
    {
        id: 8,
        question: "At a T-intersection, who has the right-of-way?",
        options: [
            "Vehicle on the terminating road",
            "Vehicle on the through road",
            "Vehicle turning left",
            "Vehicle turning right"
        ],
        correctAnswer: 1, // B
        explanation: "Vehicles on the through road have right-of-way; those entering from the terminating road must yield."
    },
    {
        id: 9,
        question: "You approach an intersection where a traffic signal is not working. You should:",
        options: [
            "Treat it as a yield",
            "Treat it as a 4-way stop",
            "Ignore other vehicles",
            "Go faster to clear the intersection"
        ],
        correctAnswer: 1, // B
        explanation: "Non-functioning signals are treated as 4-way stops; stop and proceed cautiously."
    },
    {
        id: 10,
        question: "When two vehicles enter a roundabout at the same time from opposite directions, and one wants to turn left, who goes first?",
        options: [
            "Vehicle turning left",
            "Vehicle turning right",
            "Vehicle going straight",
            "Vehicle that honks first"
        ],
        correctAnswer: 2, // C - Corrected based on logic, but CSV says C. CSV options: A:Vehicle turning left, B:Vehicle turning right, C:Vehicle going straight. CSV Correct: C.
        // Wait, let me check the CSV content again for Q11 (Id 10 here).
        // CSV Line 11: "When two vehicles enter a roundabout at the same time from opposite directions, and one wants to turn left, who goes first?,Vehicle turning left,Vehicle turning right,Vehicle going straight,Vehicle that honks first,C,Yield to vehicles already circulating; left-turning vehicle must yield to oncoming traffic."
        // Option C is "Vehicle going straight". This matches logic if the other is turning left.
        explanation: "Yield to vehicles already circulating; left-turning vehicle must yield to oncoming traffic."
    },
    {
        id: 11,
        question: "You are on a one-way street turning left onto another one-way street. Who has the right-of-way?",
        options: [
            "Vehicles going straight",
            "Pedestrians only",
            "You have right-of-way",
            "Vehicles behind you"
        ],
        correctAnswer: 0, // A
        explanation: "You must yield to all traffic and pedestrians on the street you’re entering."
    },
    {
        id: 12,
        question: "A vehicle is merging onto a freeway. Who has the right-of-way?",
        options: [
            "Vehicles on the freeway",
            "Vehicle merging",
            "Vehicle turning left onto the entrance",
            "Pedestrians"
        ],
        correctAnswer: 0, // A
        explanation: "Freeway traffic always has right-of-way; merging vehicles must adjust speed to enter safely."
    },
    {
        id: 13,
        question: "At a 4-way stop, three vehicles arrive at the same time. Two are side by side. Who goes first?",
        options: [
            "Vehicle on the left",
            "Vehicles going straight",
            "Vehicle on the right",
            "Vehicle turning left"
        ],
        correctAnswer: 1, // B
        explanation: "When two vehicles are side by side, the one going straight goes first. The third vehicle yields."
    },
    {
        id: 14,
        question: "When turning right at a red light, you must:",
        options: [
            "Stop first, yield to pedestrians and traffic",
            "Slow down and turn",
            "Turn immediately",
            "Honk before turning"
        ],
        correctAnswer: 0, // A
        explanation: "Right turns on red are allowed after a complete stop and yielding to pedestrians and traffic."
    },
    {
        id: 15,
        question: "At an uncontrolled railroad crossing with no signals, you should:",
        options: [
            "Stop only if a train is visible",
            "Slow down, look both ways, and yield",
            "Speed up to cross quickly",
            "Honk and continue"
        ],
        correctAnswer: 1, // B
        explanation: "You must yield to trains; slow down, look both ways, and proceed only if safe."
    },
    {
        id: 16,
        question: "You are at a flashing yellow traffic light. You should:",
        options: [
            "Stop completely",
            "Slow down and proceed with caution",
            "Speed up",
            "Yield to vehicles behind you"
        ],
        correctAnswer: 1, // B
        explanation: "A flashing yellow light means proceed with caution; yield if necessary."
    },
    {
        id: 17,
        question: "When multiple vehicles are at a 4-way stop, who goes last?",
        options: [
            "Vehicle on the right",
            "Vehicle on the left",
            "Vehicle going straight",
            "Vehicle turning right"
        ],
        correctAnswer: 1, // B
        explanation: "At 4-way stops, the vehicle on the left yields to the one on the right."
    },
    {
        id: 18,
        question: "At a T-intersection with a stop sign, who has the right-of-way?",
        options: [
            "Vehicles on the terminating road",
            "Vehicles on the through road",
            "Vehicles turning left",
            "Pedestrians only"
        ],
        correctAnswer: 1, // B
        explanation: "Vehicles on the through road always have the right-of-way."
    },
    {
        id: 19,
        question: "If two vehicles arrive at a multi-lane intersection at the same time, going straight, who goes first?",
        options: [
            "Vehicle in the left lane",
            "Vehicle in the right lane",
            "Vehicle turning right",
            "Vehicle turning left"
        ],
        correctAnswer: 1, // B
        explanation: "Vehicle in the right lane generally goes first when both are going straight."
    },
    {
        id: 20,
        question: "You see a yield sign. What should you do?",
        options: [
            "Stop completely",
            "Slow down, prepare to stop, yield to traffic",
            "Speed up to merge",
            "Ignore it"
        ],
        correctAnswer: 1, // B
        explanation: "A yield sign means slow down and give right-of-way to other vehicles or pedestrians."
    },
    {
        id: 21,
        question: "When an oncoming vehicle has their turn signal on to turn left, you must:",
        options: [
            "Speed up",
            "Yield if you are going straight",
            "Honk",
            "Turn immediately"
        ],
        correctAnswer: 1, // B
        explanation: "Oncoming left-turning vehicles yield to you if you are going straight, but always confirm with caution."
    },
    {
        id: 22,
        question: "When approaching a pedestrian with a white cane or guide dog, you should:",
        options: [
            "Honk to warn them",
            "Stop and yield",
            "Slow down and pass",
            "Wait until they are off the curb"
        ],
        correctAnswer: 1, // B
        explanation: "Visually impaired pedestrians always have right-of-way."
    },
    {
        id: 23,
        question: "When two vehicles arrive at an uncontrolled intersection, and one is turning left, who goes first?",
        options: [
            "Left-turning vehicle",
            "Vehicle going straight",
            "Vehicle on the left",
            "Vehicle on the right"
        ],
        correctAnswer: 1, // B
        explanation: "Vehicles going straight have right-of-way over left-turning vehicles."
    },
    {
        id: 24,
        question: "You are entering an intersection with a green arrow. You should:",
        options: [
            "Yield to pedestrians and vehicles already in the intersection",
            "Turn immediately",
            "Stop first",
            "Wait for a red light"
        ],
        correctAnswer: 0, // A
        explanation: "A green arrow allows turning, but still yield to pedestrians and vehicles already in the intersection."
    },
    {
        id: 25,
        question: "When approaching a stopped emergency vehicle on the roadside, you must:",
        options: [
            "Speed past carefully",
            "Slow down and move over",
            "Stop immediately",
            "Honk and continue"
        ],
        correctAnswer: 1, // B
        explanation: "Move over law: slow down and change lanes if safe, or stop if not possible."
    }
]
