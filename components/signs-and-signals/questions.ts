export interface Question {
    id: string | number
    question: string
    options: string[]
    correctAnswer: number
    explanation: string
    category?: string
    imageUrl?: string
}

export const SIGNS_AND_SIGNALS_QUESTIONS: Question[] = [
    // --- Road Signs (Images) ---
    {
        id: 'roadsign-1',
        question: 'What does this sign indicate?',
        options: [
            'Keep to the left of the obstacle or divider',
            'Left turn only ahead',
            'No left turn allowed',
            'U-turn permitted'
        ],
        correctAnswer: 0,
        explanation: 'This regulatory sign directs drivers to keep to the left side of an obstacle or road divider. You must pass on the left side of the object shown.',
        category: 'Regulatory Signs',
        imageUrl: '/road-sign-images/r4-8.png'
    },
    {
        id: 'roadsign-2',
        question: 'What does this sign mean?',
        options: [
            'Pedestrian crossing ahead',
            'No pedestrians allowed in this area',
            'School zone - watch for children',
            'Pedestrians have right of way'
        ],
        correctAnswer: 1,
        explanation: 'This sign prohibits pedestrians from entering the area. It is typically placed on highways, bridges, or other locations where walking is dangerous or not permitted.',
        category: 'Regulatory Signs',
        imageUrl: '/road-sign-images/r9-3a.png'
    },
    {
        id: 'roadsign-3',
        question: 'What warning does this sign provide?',
        options: [
            'Road ends ahead',
            'Slippery when wet',
            'Winding road with several curves ahead',
            'Sharp right turn ahead'
        ],
        correctAnswer: 2,
        explanation: 'This warning sign indicates a series of curves or a winding road ahead. Reduce your speed and be prepared for multiple direction changes.',
        category: 'Warning Signs',
        imageUrl: '/road-sign-images/w1-5.png'
    },
    {
        id: 'roadsign-4',
        question: 'What should you prepare to do when you see this sign?',
        options: [
            'Stop completely at the intersection',
            'Speed up to merge quickly',
            'Prepare to yield to other traffic ahead',
            'Make a U-turn'
        ],
        correctAnswer: 2,
        explanation: 'This sign warns that there is a yield sign ahead. Be prepared to slow down and yield the right-of-way to other vehicles at the upcoming intersection.',
        category: 'Warning Signs',
        imageUrl: '/road-sign-images/w3-2a.png'
    },
    {
        id: 'roadsign-5',
        question: 'What does this sign warn you about?',
        options: [
            'Railroad crossing ahead',
            'Traffic signal ahead - prepare to stop',
            'School zone ahead',
            'Construction zone ahead'
        ],
        correctAnswer: 1,
        explanation: 'This warning sign indicates there is a traffic signal ahead. Be prepared to stop if the light is red or yellow when you reach the intersection.',
        category: 'Warning Signs',
        imageUrl: '/road-sign-images/w3-3.png'
    },
    {
        id: 'roadsign-6',
        question: 'What does this sign indicate?',
        options: [
            'Right lane ends ahead',
            'Traffic from the right will be merging into your lane',
            'Exit ramp on the right',
            'Two-way traffic ahead'
        ],
        correctAnswer: 1,
        explanation: 'This merge sign warns that traffic from another road will be joining from the right. Be prepared to adjust your speed and position to allow merging vehicles.',
        category: 'Warning Signs',
        imageUrl: '/road-sign-images/w4-1.png'
    },
    {
        id: 'roadsign-7',
        question: 'What does this sign indicate about the road ahead?',
        options: [
            'Divided highway begins',
            'Two lanes merge into one',
            'Divided highway ends - two-way traffic ahead',
            'Highway exit ahead'
        ],
        correctAnswer: 2,
        explanation: 'This sign warns that the divided highway is ending. The physical barrier or median separating traffic will no longer exist, and you will encounter two-way traffic.',
        category: 'Warning Signs',
        imageUrl: '/road-sign-images/w6-2.png'
    },
    {
        id: 'roadsign-8',
        question: 'What hazard does this sign warn about?',
        options: [
            'Trucks entering from side road',
            'Truck parking area ahead',
            'Steep downgrade or hill ahead',
            'Weight limit for trucks'
        ],
        correctAnswer: 2,
        explanation: 'This warning sign indicates a steep hill or grade ahead. Trucks and vehicles with trailers should use lower gears. All drivers should be prepared for increased braking distance.',
        category: 'Warning Signs',
        imageUrl: '/road-sign-images/w7-1.png'
    },

    // --- Traffic Signals & Markings ---
    {
        id: 'signal-1',
        question: "A flashing red traffic signal means:",
        options: [
            "Slow down and proceed",
            "Stop completely then proceed when safe",
            "Yield only to pedestrians",
            "Continue without stopping"
        ],
        correctAnswer: 1,
        explanation: "A flashing red light is treated exactly like a stop sign: come to a complete stop, then proceed when safe.",
        category: "Traffic Signals"
    },
    {
        id: 'signal-2',
        question: "A solid yellow line on your side of the road means:",
        options: [
            "Passing allowed",
            "Passing allowed at night",
            "No passing",
            "Passing only trucks"
        ],
        correctAnswer: 2,
        explanation: "A solid yellow line on your side means passing is prohibited from your direction.",
        category: "Pavement Markings"
    },
    {
        id: 'signal-3',
        question: "A flashing yellow traffic signal means:",
        options: [
            "Stop completely",
            "Proceed with caution",
            "Yield to all traffic",
            "Pedestrians must stop"
        ],
        correctAnswer: 1,
        explanation: "A flashing yellow light warns drivers to slow down and proceed with caution, but does not require a complete stop.",
        category: "Traffic Signals"
    },
    {
        id: 'signal-4',
        question: "What does a double solid yellow line indicate?",
        options: [
            "Passing allowed both ways",
            "Passing allowed one way",
            "No passing either direction",
            "Passing during daylight only"
        ],
        correctAnswer: 2,
        explanation: "Double solid yellow lines prohibit passing in both directions. These mark areas where passing is particularly dangerous.",
        category: "Pavement Markings"
    },
    {
        id: 'signal-5',
        question: "A green arrow with a red light means:",
        options: [
            "Stop and wait",
            "Proceed in the arrow's direction only",
            "Yield to all traffic",
            "Arrow is optional"
        ],
        correctAnswer: 1,
        explanation: "A green arrow allows movement only in the direction the arrow points, even if the main light is red.",
        category: "Traffic Signals"
    },
    {
        id: 'signal-6',
        question: "Broken white lane lines indicate:",
        options: [
            "No lane changes allowed",
            "Lanes moving in opposite directions",
            "Lanes moving in the same direction",
            "Lane ends soon"
        ],
        correctAnswer: 2,
        explanation: "Broken white lines separate lanes of traffic moving in the same direction. Lane changes are permitted.",
        category: "Pavement Markings"
    },
    {
        id: 'signal-7',
        question: "A steady yellow traffic light means:",
        options: [
            "Speed up to clear the intersection",
            "Prepare to stop if safe",
            "Stop immediately",
            "Pedestrians may cross"
        ],
        correctAnswer: 1,
        explanation: "A steady yellow light warns that the signal is about to turn red. If you can stop safely, you should do so.",
        category: "Traffic Signals"
    },
    {
        id: 'signal-8',
        question: "What does a solid white line between lanes indicate?",
        options: [
            "Lane changes encouraged",
            "Lane changes discouraged but allowed",
            "Lane changes prohibited",
            "Lane ends"
        ],
        correctAnswer: 1,
        explanation: "A solid white line discourages lane changes but does not legally prohibit them. It marks areas where changing lanes is unwise.",
        category: "Pavement Markings"
    },
    {
        id: 'signal-9',
        question: "A red arrow means:",
        options: [
            "Stop, then turn allowed",
            "No turn permitted",
            "Yield then turn allowed",
            "Arrow only applies to trucks"
        ],
        correctAnswer: 1,
        explanation: "A red arrow means you must stop and cannot turn in that direction until the arrow changes to green.",
        category: "Traffic Signals"
    },
    {
        id: 'signal-10',
        question: "What does a center lane marked with solid yellow on the outside and broken yellow on the inside mean?",
        options: [
            "Passing lane",
            "Two-way left-turn lane",
            "HOV lane",
            "Emergency lane"
        ],
        correctAnswer: 1,
        explanation: "This marking indicates a two-way left-turn lane (also called a center turn lane). Vehicles from both directions can use it to prepare for left turns.",
        category: "Pavement Markings"
    },
    {
        id: 'signal-11',
        question: "What is the shape of a school zone warning sign?",
        options: [
            "Octagon",
            "Diamond",
            "Pentagon (5-sided)",
            "Triangle"
        ],
        correctAnswer: 2,
        explanation: "A school zone sign is the only sign that is shaped like a pentagon (shaped like a school house). It warns you to slow down and watch for children.",
        category: "Road Signs"
    },
    {
        id: 'signal-12',
        question: "What color are construction and maintenance signs?",
        options: [
            "Yellow",
            "Orange",
            "Red",
            "Green"
        ],
        correctAnswer: 1,
        explanation: "Construction and maintenance warning signs are orange with black letters. They warn of possible dangers in and near work areas.",
        category: "Road Signs"
    }
]
