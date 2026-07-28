export type Question = {
    id: number
    question: string
    options: string[]
    correctAnswer: number // 0-3 index
    explanation: string
}

export const CALIFORNIA_DISTRACTED_DRIVING_QUESTIONS: Question[] = [
    {
        id: 1,
        question: "Under California Vehicle Code 23123, what is the base fine for a FIRST offense of talking on a handheld cell phone while driving?",
        options: [
            "$10",
            "$20",
            "$50",
            "$100"
        ],
        correctAnswer: 1,
        explanation: "The base fine for a first violation of VC 23123 is $20. However, with California penalty assessments added by the court, the total cost typically exceeds $150 for a first offense."
    },
    {
        id: 2,
        question: "California Vehicle Code 23124 prohibits drivers under 18 from using which devices while driving?",
        options: [
            "Handheld cell phones only",
            "Cell phones in school zones only",
            "Any wireless communication device, including hands-free devices",
            "Text messaging only"
        ],
        correctAnswer: 2,
        explanation: "VC 23124 is stricter than the adult hands-free law. Drivers under 18 are completely prohibited from using any wireless communication device while driving—including hands-free Bluetooth and mounted devices."
    },
    {
        id: 3,
        question: "A California adult driver receives a SECOND ticket for texting while driving within 36 months. What is the base fine?",
        options: [
            "$20",
            "$50",
            "$100",
            "$250"
        ],
        correctAnswer: 1,
        explanation: "The base fine doubles to $50 for a second or subsequent violation. With penalty assessments, the actual cost can exceed $280."
    },
    {
        id: 4,
        question: "Under California's hands-free law (AB-1785), an adult driver may legally use a cell phone while driving only if:",
        options: [
            "They are stopped at a red light",
            "The phone is mounted and operated with a single touch or swipe",
            "They use the speaker at low volume while holding the phone",
            "The phone call is brief and the driver keeps both hands on the wheel"
        ],
        correctAnswer: 1,
        explanation: "AB-1785, effective January 1, 2017, requires that a phone be mounted (on the windshield or dashboard) and that only a single touch or swipe is used to activate or deactivate a feature. Holding the phone at any point is illegal."
    },
    {
        id: 5,
        question: "California Vehicle Code 27400 governs the use of headphones while driving. Which statement is correct?",
        options: [
            "Both ears are allowed if the volume is kept low",
            "Both ears are allowed for navigation audio only",
            "You may use a headphone or earbud in one ear only",
            "Wearing any headphones while driving is fully legal"
        ],
        correctAnswer: 2,
        explanation: "VC 27400 prohibits wearing a headset or earplugs in both ears while driving. You may legally use a hearing aid or a single-ear Bluetooth device, but never both ears, as you need to hear emergency vehicles and other traffic."
    },
    {
        id: 6,
        question: "You are driving at 55 mph and look down at your phone for 2 seconds. Approximately how far does your car travel while your eyes are off the road?",
        options: [
            "About 50 feet",
            "About 100 feet",
            "About 160 feet",
            "About 300 feet"
        ],
        correctAnswer: 2,
        explanation: "At 55 mph, a vehicle travels roughly 80 feet per second. A 2-second glance means traveling approximately 160 feet—about half the length of a football field—completely blind. This is why California considers texting while driving exceptionally dangerous."
    },
    {
        id: 7,
        question: "Which of the following scenarios is LEGAL under California's hands-free laws for an adult driver?",
        options: [
            "Reading a text message while stopped at a red light",
            "Using a mounted phone with a voice command to make a call",
            "Holding a phone briefly to check an incoming call",
            "Looking at Google Maps on a handheld phone in stop-and-go traffic"
        ],
        correctAnswer: 1,
        explanation: "Using a mounted phone with a voice command requires no manual interaction, which complies with California's single-touch rule. The phone must be secured in an approved mount. Holding a phone at any point—even at a red light—is illegal."
    },
    {
        id: 8,
        question: "California Vehicle Code 23123.5 specifically prohibits which action while driving?",
        options: [
            "Listening to music through Bluetooth speakers",
            "Making a call using a mounted hands-free device",
            "Reading, writing, or sending any text-based communication",
            "Using a navigation app on a properly mounted phone"
        ],
        correctAnswer: 2,
        explanation: "VC 23123.5 makes it illegal to write, read, or send a text message, email, or any text-based communication while driving—even while stopped at a red light. This law applies to all drivers regardless of age."
    },
    {
        id: 9,
        question: "Which of the following is considered a triple threat because it causes visual, manual, AND cognitive distraction simultaneously?",
        options: [
            "Talking to a passenger",
            "Adjusting the car radio",
            "Texting while driving",
            "Listening to loud music"
        ],
        correctAnswer: 2,
        explanation: "Texting creates all three types of distraction at once: it takes your eyes off the road (visual), your hands off the wheel (manual), and your focus away from driving (cognitive). This triple threat makes texting while driving 23 times more likely to cause a crash than undistracted driving."
    },
    {
        id: 10,
        question: "A California driver has three or more handheld phone violations within 36 months. What additional consequence applies starting January 1, 2021?",
        options: [
            "Mandatory 6-month license suspension",
            "A point added to the Real Estate driving record",
            "Required traffic school enrollment",
            "Vehicle impoundment"
        ],
        correctAnswer: 1,
        explanation: "As of January 1, 2021, a third or subsequent violation of California's hands-free law (VC 23123 or 23123.5) within 36 months adds one point to your Real Estate record. Accumulating points can lead to being labeled a negligent operator and can significantly increase insurance premiums."
    },
    {
        id: 11,
        question: "Which of the following is LEGAL for a California adult driver while operating a vehicle?",
        options: [
            "Holding a phone to your ear to talk",
            "Using a single-ear Bluetooth earpiece to talk hands-free",
            "Reading a text message while stopped at a stoplight",
            "Using a handheld GPS device not mounted to the vehicle"
        ],
        correctAnswer: 1,
        explanation: "A single-ear Bluetooth earpiece is legal for adult drivers in California. It is hands-free and uses only one ear, satisfying both the hands-free law (VC 23123) and the earphone law (VC 27400). All the other options violate California law."
    },
    {
        id: 12,
        question: "Under California law, where must a phone be mounted if an adult driver wants to use it while driving?",
        options: [
            "On the dashboard only, below the steering column",
            "In the center console facing upward",
            "On the windshield or dashboard in a mount that does not obstruct the driver's view",
            "On the passenger seat with the screen visible"
        ],
        correctAnswer: 2,
        explanation: "California law requires phones to be mounted on the lower corner of the windshield furthest from the driver, or in a 5-inch square in the lower corner of the passenger side, or on the dashboard, as long as it does not obstruct the driver's view of the road."
    },
    {
        id: 13,
        question: "In California, which type of distraction is caused by mentally focusing on a conversation rather than driving—even if your eyes are on the road?",
        options: [
            "Visual distraction",
            "Manual distraction",
            "Cognitive distraction",
            "Environmental distraction"
        ],
        correctAnswer: 2,
        explanation: "Cognitive distraction occurs when your mind is occupied by something other than driving—like a phone conversation. Research shows that hands-free calls are still cognitively distracting because the brain focuses on the conversation, reducing reaction time and awareness."
    },
    {
        id: 14,
        question: "In California, teen drivers (under 18) with a provisional license may use hands-free phone calls while driving:",
        options: [
            "Only on highways",
            "Only if a licensed adult is in the vehicle",
            "Never—hands-free is also prohibited for drivers under 18",
            "Anytime, as long as a mount is used"
        ],
        correctAnswer: 2,
        explanation: "Under VC 23124, drivers under 18 may not use ANY wireless communication device while driving, including hands-free devices. The only exception is to call 911 in a genuine emergency."
    },
    {
        id: 15,
        question: "Your phone rings while you're driving and you have no mount or hands-free device. What should you do according to California law?",
        options: [
            "Briefly answer to say you will call back",
            "Let it go to voicemail and answer after safely stopping",
            "Look at caller ID to decide if it is urgent",
            "Hold the phone to your ear while stopped at a red light"
        ],
        correctAnswer: 1,
        explanation: "California law prohibits holding or using a handheld phone at any time while behind the wheel—including at red lights. The only legal option without a mount or hands-free device is to let the call go to voicemail and respond only after you are safely stopped and parked."
    },
    {
        id: 16,
        question: "Eating, grooming, or adjusting a GPS while driving in California falls under which category?",
        options: [
            "Minor infractions with no penalty",
            "Forms of distracted driving that can support a reckless driving charge",
            "Legal activities as long as both hands return to the wheel",
            "Only illegal in school zones"
        ],
        correctAnswer: 1,
        explanation: "While California does not have one single 'distracted driving' statute covering eating or grooming, an officer can cite a driver for reckless driving (VC 23103) if these activities cause unsafe vehicle operation. If a distracted driver causes a collision, criminal charges can also apply."
    },
    {
        id: 17,
        question: "Which of the following BEST explains why hands-free phone calls are still considered dangerous by safety researchers, even though they are legal in California?",
        options: [
            "The phone emits radiation that affects concentration",
            "The driver's hand still grips the phone",
            "The conversation itself causes cognitive distraction, reducing situational awareness",
            "Hands-free devices produce louder sounds that mask traffic noise"
        ],
        correctAnswer: 2,
        explanation: "Studies by the National Safety Council show that hands-free conversations cause cognitive distraction—the brain focuses on the conversation and misses up to 50% of what's in the driver's visual field. This 'inattention blindness' persists even when eyes are on the road."
    },
    {
        id: 18,
        question: "Which scenario VIOLATES California's distracted driving laws?",
        options: [
            "Adjusting the volume using your car's built-in steering wheel controls",
            "Talking through your car's integrated Bluetooth system",
            "Holding your phone to view turn-by-turn navigation while driving",
            "Glancing at a dashboard-mounted GPS device"
        ],
        correctAnswer: 2,
        explanation: "Holding your phone to view navigation is illegal under VC 23123 (holding a handheld wireless telephone) regardless of what you are using it for. Navigation apps must be set up and mounted before you start driving."
    },
    {
        id: 19,
        question: "Approximately what percentage of all U.S. motor vehicle crashes involve driver distraction, according to the National Highway Traffic Safety Administration (NHTSA)?",
        options: [
            "5%",
            "15%",
            "25%",
            "50%"
        ],
        correctAnswer: 1,
        explanation: "NHTSA estimates distracted driving is a factor in about 15% of all injury crashes. In California, CHP data consistently shows thousands of distracted driving crashes each year, making it one of the top causes of collisions alongside impaired and speeding-related crashes."
    },
    {
        id: 20,
        question: "In California, if a driver causes a collision while illegally using a handheld phone, they could face:",
        options: [
            "Only the standard $20 base fine for phone use",
            "Reckless driving charges in addition to the phone violation",
            "An automatic 30-day license suspension",
            "A guaranteed jail sentence"
        ],
        correctAnswer: 1,
        explanation: "Using a handheld phone that results in a collision can elevate the charge from a simple infraction to reckless driving under VC 23103, which carries much steeper penalties including fines, license points, and potential criminal charges. Civil liability for damages is also a serious consequence."
    }
]

export const OHIO_DISTRACTED_DRIVING_QUESTIONS: Question[] = [
    {
        id: 1,
        question: "Under Ohio law (HB 49), what is the penalty for a FIRST offense of holding or supporting a cell phone while driving for adult drivers (21+)?",
        options: [
            "$50 fine only",
            "Up to $150 fine and 2 points on your driving record",
            "Automatic 30-day license suspension",
            "$500 fine and 4 points"
        ],
        correctAnswer: 1,
        explanation: "In Ohio, a first offense for distracted driving (holding or supporting a device) can result in a fine of up to $150 and 2 points on your driving record."
    },
    {
        id: 2,
        question: "For Ohio drivers under the age of 18, which statement is true regarding cell phone use while driving?",
        options: [
            "They may use a hands-free device only",
            "They may use a phone only when stopped at a red light",
            "It is completely illegal to use any wireless device, even hands-free",
            "They can use a phone for texting but not calling"
        ],
        correctAnswer: 2,
        explanation: "Ohio GDL laws strictly prohibit drivers under 18 from using any electronic wireless device while driving—including hands-free, Bluetooth, and text messaging."
    },
    {
        id: 3,
        question: "What is the penalty for an Ohio driver under 18 caught violating the distracted driving law for the FIRST time?",
        options: [
            "$50 fine and warning",
            "10 hours of community service",
            "60-day license suspension and a $150 fine",
            "Automatic permanent revocation of license"
        ],
        correctAnswer: 2,
        explanation: "A first distracted driving offense for an Ohio driver under 18 is a primary offense resulting in a $150 fine and a 60-day suspension of their real estate license."
    },
    {
        id: 4,
        question: "Which of the following is an exemption to Ohio's handheld cell phone ban while driving?",
        options: [
            "Checking a map while driving in stop-and-go traffic",
            "Holding the phone to talk on speakerphone",
            "Making an emergency call to law enforcement or medical services",
            "Quickly reading a text message at a stop sign"
        ],
        correctAnswer: 2,
        explanation: "Ohio law allows exceptions for drivers of any age in emergency situations, such as contacting police, fire, or medical services."
    },
    {
        id: 5,
        question: "Under Ohio law, a second distracted driving offense within a 2-year period can result in:",
        options: [
            "Up to $250 fine and 3 points on your driving record",
            "Up to $500 fine and 4 points",
            "90-day license suspension",
            "Jail time up to 10 days"
        ],
        correctAnswer: 0,
        explanation: "For a second distracted driving offense within 24 months, adults face a fine of up to $250 and 3 points on their license."
    },
    {
        id: 6,
        question: "In Ohio, what happens to the fines if you are caught committing a distracted driving violation in an active construction zone?",
        options: [
            "Fines remain the same",
            "Fines are tripled",
            "Fines are doubled",
            "Fines are waived for first-time offenders"
        ],
        correctAnswer: 2,
        explanation: "Like other moving violations, fines for distracted driving are doubled in active construction zones where workers are present."
    },
    {
        id: 7,
        question: "Ohio's headphone law (ORC 4511.84) states that wearing earplugs or headphones in both ears while driving is:",
        options: [
            "Legal if the volume is low",
            "Legal for navigation only",
            "Illegal for all drivers (with exceptions like hearing aids)",
            "Legal for drivers over 21 only"
        ],
        correctAnswer: 2,
        explanation: "It is illegal in Ohio to wear earplugs or headphones in both ears while operating a vehicle, as you must be able to hear horns, sirens, and other road noise."
    },
    {
        id: 8,
        question: "Approximately what distance does a vehicle travel at 55 mph in the 4.6 seconds it takes to read a typical text message?",
        options: [
            "The length of a car",
            "Half the length of a football field",
            "The entire length of a football field (approx. 360 feet)",
            "Around 100 feet"
        ],
        correctAnswer: 2,
        explanation: "At 55 mph, you travel about 80 feet per second. In 4.6 seconds, your vehicle travels roughly 360 feet—the length of a football field—completely blind."
    },
    {
        id: 9,
        question: "For adult drivers in Ohio, using a cell phone for navigation is legal ONLY if:",
        options: [
            "It is held in one hand near the steering wheel",
            "It is mounted on the dashboard or windshield and operated hands-free or with a single swipe",
            "It is placed on the passenger seat",
            "They are driving on a freeway"
        ],
        correctAnswer: 1,
        explanation: "To use a GPS or navigation app legally in Ohio, the device must be securely mounted and operated hands-free or with a single-swipe action."
    },
    {
        id: 10,
        question: "If an Ohio driver accumulates 12 points on their driving record within 2 years, their license is suspended for how long?",
        options: [
            "30 days",
            "90 days",
            "6 months",
            "1 year"
        ],
        correctAnswer: 2,
        explanation: "Ohio has a 12-point suspension rule. If you accumulate 12 points in 24 months, your license is suspended for 6 months."
    }
]
