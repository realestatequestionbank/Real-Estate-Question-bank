export type Question = {
    id: number
    question: string
    options: string[]
    correctAnswer: number // 0-3 index
    explanation: string
}

export const OHIO_TEENS_QUESTIONS: Question[] = [
    {
        id: 1,
        question: "What is the minimum age to apply for a Temporary Instruction Permit Identification Card (TIPIC) in Ohio?",
        options: [
            "15 years",
            "15 years and 6 months",
            "16 years",
            "16 years and 6 months"
        ],
        correctAnswer: 1,
        explanation: "You must be at least 15 years and 6 months old to apply for your temporary permit (temps) in Ohio."
    },
    {
        id: 2,
        question: "If you are under 18, how many hours of supervised driving practice must you complete before taking your road test?",
        options: [
            "30 hours (including 5 night hours)",
            "40 hours (including 10 night hours)",
            "50 hours (including 10 night hours)",
            "60 hours (including 15 night hours)"
        ],
        correctAnswer: 2,
        explanation: "Ohio GDL laws require teens under 18 to log 50 hours of supervised driving, with at least 10 of those hours completed at night."
    },
    {
        id: 3,
        question: "A licensed 16-year-old driver in Ohio is restricted from driving during which curfew hours?",
        options: [
            "11 p.m. to 5 a.m.",
            "Midnight to 6 a.m.",
            "1 a.m. to 5 a.m.",
            "Midnight to 5 a.m."
        ],
        correctAnswer: 1,
        explanation: "For the first 12 months after receiving their probationary license (or until they turn 17), 16-year-old drivers cannot operate a vehicle between midnight and 6 a.m."
    },
    {
        id: 4,
        question: "A licensed 17-year-old driver in Ohio is restricted from driving during which curfew hours?",
        options: [
            "11 p.m. to 5 a.m.",
            "Midnight to 6 a.m.",
            "1 a.m. to 5 a.m.",
            "Midnight to 5 a.m."
        ],
        correctAnswer: 2,
        explanation: "Once a probationary driver in Ohio turns 17, their curfew restrictions change to between 1 a.m. and 5 a.m."
    },
    {
        id: 5,
        question: "Under the GDL, probationary drivers under 18 may carry how many passengers who are not family members?",
        options: [
            "None",
            "One passenger",
            "Two passengers",
            "Three passengers"
        ],
        correctAnswer: 1,
        explanation: "During the first 12 months of holding a license, drivers under 18 may only carry one passenger who is not an immediate family member, unless accompanied by a parent or guardian."
    },
    {
        id: 6,
        question: "If a probationary driver under 18 is driving, who must wear a seatbelt in the vehicle?",
        options: [
            "Only the driver and front-seat passengers",
            "Only passengers under 16",
            "All passengers in the vehicle, regardless of seating position",
            "Only the driver"
        ],
        correctAnswer: 2,
        explanation: "For any driver under 18 in Ohio, the law requires all occupants in the vehicle to wear a seatbelt, regardless of their age or where they are sitting."
    },
    {
        id: 7,
        question: "What real estate exam prep hours must a teen under 18 complete in Ohio?",
        options: [
            "20 classroom hours and 6 behind-the-wheel hours",
            "24 classroom hours and 8 behind-the-wheel hours",
            "30 classroom hours and 10 behind-the-wheel hours",
            "40 classroom hours and 12 behind-the-wheel hours"
        ],
        correctAnswer: 1,
        explanation: "Ohio requires teens under 18 to complete an approved real estate exam prep course consisting of 24 hours of classroom instruction and 8 hours of behind-the-wheel training."
    },
    {
        id: 8,
        question: "What is the legal blood alcohol concentration (BAC) limit for drivers under 21 in Ohio?",
        options: [
            "0.00%",
            "0.02%",
            "0.04%",
            "0.08%"
        ],
        correctAnswer: 1,
        explanation: "Ohio has a Zero Tolerance Policy for underage drinking and driving. The legal limit for drivers under 21 is a BAC of 0.02% or higher."
    },
    {
        id: 9,
        question: "If an Ohio driver under 18 gets a distracted driving ticket, what is the penalty for a FIRST offense?",
        options: [
            "$50 fine",
            "$150 fine and a 60-day license suspension",
            "Warning only",
            "License revoked permanently"
        ],
        correctAnswer: 1,
        explanation: "For drivers under 18, distracted driving (including cell phone use) is a primary offense. A first conviction results in a $150 fine and a 60-day license suspension."
    },
    {
        id: 10,
        question: "Who must accompany a temporary permit (TIPIC) holder under the age of 16 in the vehicle?",
        options: [
            "Any licensed driver age 18 or older",
            "Any licensed driver age 21 or older",
            "A licensed parent, guardian, or certified driving instructor in the front passenger seat",
            "An older sibling"
        ],
        correctAnswer: 2,
        explanation: "If you are under 16 and hold a temporary permit, you may only drive when accompanied by a licensed parent, guardian, or certified driving instructor who is in the front passenger seat."
    }
]
