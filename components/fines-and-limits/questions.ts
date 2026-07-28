export type Question = {
    id: number
    question: string
    options: string[]
    correctAnswer: number // 0-3 index
    explanation: string
}

export const FINES_AND_LIMITS_QUESTIONS: Question[] = [
    {
        id: 1,
        question: "What is the maximum speed limit on most highways unless otherwise posted?",
        options: [
            "55 mph",
            "65 mph",
            "70 mph",
            "75 mph"
        ],
        correctAnswer: 1,
        explanation: "Most US highways have a maximum speed of around 65 mph unless posted lower."
    },
    {
        id: 2,
        question: "What is the typical speed limit in residential areas?",
        options: [
            "15 mph",
            "25 mph",
            "35 mph",
            "45 mph"
        ],
        correctAnswer: 1, // B
        explanation: "Residential areas generally have a speed limit around 25 mph unless signs indicate otherwise."
    },
    {
        id: 3,
        question: "What is the typical fine for not wearing a seatbelt?",
        options: [
            "$10",
            "$25",
            "$50",
            "$100"
        ],
        correctAnswer: 1, // B
        explanation: "Seatbelt fines typically start around $25, plus additional fees in some states."
    },
    {
        id: 4,
        question: "What is the speed limit in school zones during school hours?",
        options: [
            "15 mph",
            "20 mph",
            "25 mph",
            "35 mph"
        ],
        correctAnswer: 2, // C - 25 mph (User request + CSV seems to have Option B=20, C=25... wait check CSV)
        // CSV Q5: Options: 15, 20, 25, 35. Correct: B (20). Explanation: "...about 15-25...".
        // User said "for school, it's 25 mpg".
        // So I should set correct answer to 25 mph.
        // 25 is Option C.
        explanation: "Most school zones have a reduced speed limit of about 25 mph during school hours."
    },
    {
        id: 5,
        question: "Exceeding the speed limit by 1-15 mph on a highway may result in a fine of approximately?",
        options: [
            "$50",
            "$100",
            "$150",
            "$200"
        ],
        correctAnswer: 1, // B
        explanation: "Fines vary by state, but usually a small speeding violation carries a fine around $50–$100."
    },
    {
        id: 6,
        question: "If caught driving at extreme speeds, possible penalties may include:",
        options: [
            "License suspension",
            "Fine",
            "Jail",
            "All of the above"
        ],
        correctAnswer: 3, // D
        explanation: "Very high speeds can result in fines, license suspension, and possible jail time in most states."
    },
    {
        id: 7,
        question: "Failing to stop for a school bus with flashing red lights can result in:",
        options: [
            "$100 fine",
            "$250 fine",
            "$500 fine",
            "$1,000 fine"
        ],
        correctAnswer: 2, // C
        explanation: "Not stopping for a school bus may carry heavy fines and license penalties in most states."
    },
    {
        id: 8,
        question: "What is the usual fine for running a red light?",
        options: [
            "$50",
            "$100",
            "$250",
            "$500"
        ],
        correctAnswer: 3, // D (CSV says D: $500? wait CSV Q9: Correct D. Options: 50, 100, 250, 500. Yes.)
        explanation: "Running a red light usually results in a fine and points on the driver’s license."
    },
    {
        id: 9,
        question: "Driving under the influence (DUI) with a BAC of 0.08% or higher can result in:",
        options: [
            "License suspension",
            "Fine",
            "Jail",
            "All of the above"
        ],
        correctAnswer: 3, // D
        explanation: "DUI laws in most states include license suspension, fines, and possible jail time."
    },
    {
        id: 10,
        question: "First-time DUI with BAC 0.08–0.15% typically carries a fine of approximately?",
        options: [
            "$100",
            "$500",
            "$1,000",
            "$2,000"
        ],
        correctAnswer: 2, // C
        explanation: "Fines for first-time DUI usually range from several hundred to around $1,000, plus fees."
    },
    {
        id: 11,
        question: "What is the fine for using a cell phone while driving without hands-free?",
        options: [
            "$20",
            "$50",
            "$100",
            "$200"
        ],
        correctAnswer: 2, // C
        explanation: "Most states impose fines around $100 for handheld cell phone use while driving."
    },
    {
        id: 12,
        question: "Driving 1 mph over the speed limit in a work zone may result in:",
        options: [
            "No fine",
            "Standard fine",
            "Doubled fine",
            "Triple fine"
        ],
        correctAnswer: 2, // C
        explanation: "Fines are usually doubled in work zones when workers are present, even for minor violations."
    },
    {
        id: 13,
        question: "Exceeding the speed limit by 26-30 mph in a residential area typically results in a fine of about?",
        options: [
            "$35",
            "$100",
            "$200",
            "$300"
        ],
        correctAnswer: 3, // D
        explanation: "Fines increase with the amount of speeding, often reaching several hundred dollars."
    },
    {
        id: 14,
        question: "Failure to stop for a pedestrian in a crosswalk may result in:",
        options: [
            "$100 fine",
            "$250 fine",
            "License suspension",
            "All of the above"
        ],
        correctAnswer: 3, // D
        explanation: "Failing to yield to pedestrians can lead to fines, points, and sometimes license suspension."
    },
    {
        id: 15,
        question: "Driving without a valid license can result in:",
        options: [
            "$100 fine",
            "$200 fine",
            "License suspension",
            "All of the above"
        ],
        correctAnswer: 3, // D
        explanation: "Driving without a valid license usually carries fines, points, and potential suspension."
    },
    {
        id: 16,
        question: "If caught driving 20 mph over the speed limit in a school zone, the fine is typically:",
        options: [
            "$100",
            "$200",
            "$500",
            "$1,000"
        ],
        correctAnswer: 2, // C
        explanation: "Speeding in a school zone often carries significantly higher fines than standard speeding violations."
    },
    {
        id: 17,
        question: "A second DUI within 10 years may carry:",
        options: [
            "Increased fines",
            "Longer license suspension",
            "Possible jail",
            "All of the above"
        ],
        correctAnswer: 3, // D
        explanation: "Repeat DUI offenses result in stricter penalties in most states."
    },
    {
        id: 18,
        question: "Not yielding to an emergency vehicle with lights and sirens can result in:",
        options: [
            "$100 fine",
            "$200 fine",
            "$500 fine",
            "$1,000 fine"
        ],
        correctAnswer: 2, // C
        explanation: "Failing to yield to emergency vehicles may result in fines and points on the license."
    },
    {
        id: 19,
        question: "Driving 1-15 mph over the speed limit in a residential area typically results in a fine of approximately?",
        options: [
            "$50",
            "$100",
            "$150",
            "$200"
        ],
        correctAnswer: 1, // B
        explanation: "Fines vary by state but usually around $50–$100 for small violations."
    },
    {
        id: 20,
        question: "Parking in a disabled space without a placard results in:",
        options: [
            "$50",
            "$100",
            "$250",
            "$500"
        ],
        correctAnswer: 2, // C
        explanation: "Illegal parking in a handicapped space carries significant fines in most states."
    },
    {
        id: 21,
        question: "What is the maximum fine for littering?",
        options: [
            "$50",
            "$100",
            "$500",
            "$1,000"
        ],
        correctAnswer: 2, // C
        explanation: "Littering fines vary, but can go up to several hundred dollars plus possible community service."
    },
    {
        id: 22,
        question: "Exceeding the speed limit in a construction zone with workers present typically results in:",
        options: [
            "Standard fine",
            "Doubled fine",
            "Tripled fine",
            "No fine"
        ],
        correctAnswer: 1, // B
        explanation: "Fines are commonly doubled in construction zones with workers present."
    },
    {
        id: 23,
        question: "Failing to secure a load on your vehicle can result in:",
        options: [
            "$50 fine",
            "$100 fine",
            "$500 fine",
            "$1,000 fine"
        ],
        correctAnswer: 2, // C
        explanation: "Most states enforce fines up to several hundred dollars for unsecured loads."
    },
    {
        id: 24,
        question: "What is the fine for not stopping at a stop sign?",
        options: [
            "$25",
            "$50",
            "$100",
            "$200"
        ],
        correctAnswer: 2, // C
        explanation: "Fines for failing to stop at a stop sign typically start around $100 plus points on the license."
    },
    {
        id: 25,
        question: "Exceeding the posted speed limit by 15 mph on a highway without a work zone can result in:",
        options: [
            "$50",
            "$100",
            "$150",
            "$200"
        ],
        correctAnswer: 2, // C
        explanation: "Fines increase with the severity of the speeding violation, often around $100–$150 for 1–15 mph over the limit."
    }
]
