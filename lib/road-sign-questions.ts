// Road Sign Practice Test Questions
// 10 questions: 8 image-based, 2 text-only

export interface RoadSignQuestion {
    id: string
    question: string
    options: string[]
    correctAnswer: number
    explanation: string
    category: string
    imageUrl?: string
}

export const ROAD_SIGN_QUESTIONS: RoadSignQuestion[] = [
    // Image-based questions (8)
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
            'Left lane ends ahead',
            'Traffic from the left will be merging into your lane',
            'Exit ramp on the left',
            'Two-way traffic ahead'
        ],
        correctAnswer: 1,
        explanation: 'This merge sign warns that traffic from another road will be joining from the left. Be prepared to adjust your speed and position to allow merging vehicles.',
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
    // Text-only questions (2)
    {
        id: 'roadsign-9',
        question: 'What shape are most regulatory signs (such as speed limit signs)?',
        options: [
            'Diamond',
            'Pentagon',
            'Rectangle or square',
            'Octagon'
        ],
        correctAnswer: 2,
        explanation: 'Most regulatory signs are rectangular or square in shape. These include speed limit signs, do not enter signs, and one-way signs. The rectangular shape helps drivers quickly identify them as regulatory signs.',
        category: 'Sign Shapes'
    },
    {
        id: 'roadsign-10',
        question: 'What color combination is used for warning signs in the United States?',
        options: [
            'Red on white',
            'Black on yellow',
            'Green on white',
            'Blue on white'
        ],
        correctAnswer: 1,
        explanation: 'Warning signs use black symbols or text on a yellow background. This high-contrast combination is designed to be highly visible and alert drivers to potential hazards ahead.',
        category: 'Sign Colors'
    }
]
