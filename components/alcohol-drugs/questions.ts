export interface Question {
    id: number
    question: string
    options: string[]
    correctAnswer: number
    explanation: string
}

export const ALCOHOL_DRUGS_QUESTIONS: Question[] = [
    {
        id: 1,
        question: "What is the legal BAC limit for drivers age 21 and over in most states?",
        options: [
            "0.02%",
            "0.05%",
            "0.08%",
            "0.10%"
        ],
        correctAnswer: 2,
        explanation: "Most states set the legal BAC limit at 0.08% for adult drivers age 21 and over."
    },
    {
        id: 2,
        question: "Drivers under 21 are subject to:",
        options: [
            "Standard BAC limits",
            "Higher BAC limits",
            "Zero-tolerance laws",
            "No alcohol laws"
        ],
        correctAnswer: 2,
        explanation: "Most states enforce zero-tolerance laws for drivers under 21, often with BAC limits of 0.01% or 0.02%."
    },
    {
        id: 3,
        question: "Prescription drugs can affect driving by:",
        options: [
            "Improving focus",
            "Causing drowsiness or slowed reaction",
            "Having no effect",
            "Only affecting aspiring agents"
        ],
        correctAnswer: 1,
        explanation: "Many prescription drugs can impair alertness, cause drowsiness, and slow reaction time, making driving dangerous."
    },
    {
        id: 4,
        question: "Driving under the influence of marijuana is:",
        options: [
            "Legal everywhere",
            "Legal if prescribed",
            "Illegal if it impairs driving",
            "Allowed at low doses"
        ],
        correctAnswer: 2,
        explanation: "Driving while impaired by any drug, including marijuana, is illegal regardless of prescription or legality status."
    },
    {
        id: 5,
        question: "Refusing a chemical test when suspected of DUI may result in:",
        options: [
            "No consequences",
            "A warning",
            "License suspension",
            "Reduced fine"
        ],
        correctAnswer: 2,
        explanation: "Most states impose automatic license suspension for refusing a chemical test under implied consent laws."
    },
    {
        id: 6,
        question: "Mixing alcohol with drugs is:",
        options: [
            "Safer than alcohol alone",
            "Less impairing",
            "More dangerous",
            "Only illegal for minors"
        ],
        correctAnswer: 2,
        explanation: "Combining alcohol with drugs (prescription or illegal) increases impairment exponentially and greatly increases crash risk."
    },
    {
        id: 7,
        question: "A driver can be arrested for DUI if BAC is below 0.08%:",
        options: [
            "Never",
            "Only at night",
            "If driving is impaired",
            "Only after an accident"
        ],
        correctAnswer: 2,
        explanation: "Drivers can be arrested for DUI if their driving is impaired regardless of BAC level, especially if drugs are involved."
    },
    {
        id: 8,
        question: "Which is a sign of impaired driving?",
        options: [
            "Steady speed",
            "Quick reactions",
            "Swerving or drifting lanes",
            "Proper signaling"
        ],
        correctAnswer: 2,
        explanation: "Swerving, drifting between lanes, and poor lane control are telltale signs of driver impairment."
    },
    {
        id: 9,
        question: "Over-the-counter medications can impair driving by:",
        options: [
            "Improving coordination",
            "Causing drowsiness or dizziness",
            "Increasing alertness",
            "Having no effect"
        ],
        correctAnswer: 1,
        explanation: "Many cold, allergy, and sleep medications can cause drowsiness, dizziness, and impaired coordination."
    },
    {
        id: 10,
        question: "DUI laws apply to:",
        options: [
            "Alcohol only",
            "Illegal drugs only",
            "Alcohol and drugs",
            "Commercial drivers only"
        ],
        correctAnswer: 2,
        explanation: "DUI laws apply to impairment from alcohol, illegal drugs, prescription medications, or any combination thereof."
    }
]
