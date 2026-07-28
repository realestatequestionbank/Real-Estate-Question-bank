export interface CdlConcept {
  id: string
  title: string
  category: 'general' | 'air_brakes' | 'combination' | 'cargo' | 'rules' | 'endorsements'
  summary: string
  description: string
  realEstateTip: string
  sampleQuestion: {
    question: string
    options: string[]
    correctAnswer: number
    explanation: string
  }
  imagePath?: string
}

export const cdlConcepts: CdlConcept[] = [
  {
    id: "gvwr",
    title: "Gross Vehicle Weight Rating (GVWR)",
    category: "general",
    summary: "The maximum allowable total weight of a single vehicle when fully loaded.",
    description: "Gross Vehicle Weight Rating (GVWR) is specified by the manufacturer. It represents the maximum weight a single vehicle is engineered to carry safely, including the weight of the chassis, body, fuel, accessories, driver, and cargo. Operating a vehicle over its GVWR can lead to mechanical failures, suspension damage, and significantly increased stopping distances.",
    realEstateTip: "This is a key parameter used to determine if a vehicle requires a Commercial Driver's License (CDL) to operate (e.g., single vehicles with a GVWR of 26,001 lbs or more).",
    sampleQuestion: {
      question: "What does Gross Vehicle Weight Rating (GVWR) stand for?",
      options: [
        "The actual weight of the vehicle and its load.",
        "The maximum allowable weight of a single vehicle including its load as specified by the manufacturer.",
        "The weight of the empty vehicle plus 10,000 lbs."
      ],
      correctAnswer: 1,
      explanation: "GVWR is the rating set by the manufacturer representing the maximum safe loaded weight of a single vehicle."
    }
  },
  {
    id: "gcwr",
    title: "Gross Combination Weight Rating (GCWR)",
    category: "combination",
    summary: "The maximum allowable loaded weight of a combination vehicle (tractor plus trailer).",
    description: "Gross Combination Weight Rating (GCWR) is the maximum total weight allowed for a combination vehicle (truck-tractor plus semi-trailer) including all cargo, passengers, and fluids. Like GVWR, it is established by the manufacturer and must not be exceeded to prevent transmission, engine, and braking system failures.",
    realEstateTip: "Class A licenses are defined by a GCWR of 26,001 lbs or more, provided the vehicle being towed has a GVWR over 10,000 lbs.",
    sampleQuestion: {
      question: "Gross Combination Weight Rating (GCWR) is defined as:",
      options: [
        "The weight of the truck-tractor alone.",
        "The actual combined scale weight of the tractor and trailer.",
        "The manufacturer-specified maximum allowable weight for a combination vehicle including cargo."
      ],
      correctAnswer: 2,
      explanation: "GCWR is the maximum rating specified for a combination setup (power unit + towed units)."
    },
    imagePath: "/images/practice-tests/cdl_combination.webp"
  },
  {
    id: "air-brake-lag",
    title: "Air Brake Lag",
    category: "air_brakes",
    summary: "The delay (approx. 0.5 seconds) for air pressure to travel through lines to activate brakes.",
    description: "Unlike hydraulic brakes which apply almost instantly, air brakes require compressed air to flow through lines to the chambers. This creates a mechanical delay of about 0.5 seconds. At 55 mph, this delay adds approximately 32 to 40 feet of travel distance before the brakes actually begin to slow the vehicle.",
    realEstateTip: "Always factor in air brake lag when maintaining following distance. Add 1 second of distance at speeds above 40 mph to compensate.",
    sampleQuestion: {
      question: "How does air brake lag affect your stopping distance?",
      options: [
        "It decreases it because air is pressurized.",
        "It adds about 0.5 seconds to your stopping time, adding about 32-40 feet at 55 mph.",
        "It has no effect on total stopping distance."
      ],
      correctAnswer: 1,
      explanation: "Air brake lag represents the time required for compressed air to flow through the brake lines, adding distance before braking begins."
    },
    imagePath: "/images/practice-tests/cdl_air_brakes.webp"
  },
  {
    id: "spring-brakes",
    title: "Spring Brakes (Emergency Brakes)",
    category: "air_brakes",
    summary: "Mechanical springs that automatically apply the brakes if air pressure is lost.",
    description: "Commercial vehicles use heavy mechanical springs to hold the brakes in the 'applied' position. Compressed air is used to push against these springs to release the brakes. If air pressure drops below a safe level (typically 20 to 45 psi), the air holding the springs back escapes, and the springs automatically apply the emergency brakes.",
    realEstateTip: "Never push the brake pedal down when the spring brakes are applied (parking brake pulled). This 'compounding' force can damage mechanical linkages.",
    sampleQuestion: {
      question: "What causes the spring brakes to apply automatically?",
      options: [
        "Pressing the brake pedal too hard.",
        "A loss of air pressure below 20-45 psi in the emergency line.",
        "Turning the steering wheel past its limit."
      ],
      correctAnswer: 1,
      explanation: "If air pressure drops below a critical threshold (20-45 psi), spring brakes automatically engage because there is no air left to hold the springs back."
    }
  },
  {
    id: "coupling-kingpin",
    title: "The Kingpin and Locking Jaws",
    category: "combination",
    summary: "The main connection point locking the trailer to the tractor's fifth wheel.",
    description: "The trailer kingpin is a heavy steel pin under the front of the trailer. When coupling, the tractor backs under the trailer so the kingpin enters the throat of the fifth wheel. The locking jaws of the fifth wheel close and lock around the shank of the kingpin. A physical inspection must confirm the jaws are fully closed around the shank.",
    realEstateTip: "A 'high-ride' coupling occurs when the kingpin sits on top of the closed jaws instead of inside them. This will result in the trailer disconnecting.",
    sampleQuestion: {
      question: "After coupling, you must visually inspect the fifth wheel to confirm:",
      options: [
        "The fifth wheel is dry and free of grease.",
        "The locking jaws are closed around the shank of the kingpin.",
        "The landing gear is resting firmly on the ground."
      ],
      correctAnswer: 1,
      explanation: "Always check that the locking jaws are closed around the kingpin shank, and that the release lever is in the lock position."
    },
    imagePath: "/images/practice-tests/cdl_combination.webp"
  },
  {
    id: "glad-hands",
    title: "Glad Hands",
    category: "combination",
    summary: "Hose couplers connecting the tractor's air brake system to the trailer.",
    description: "Glad hands are coupling devices at the end of the air hoses connecting the tractor to the trailer. By convention, they are color-coded: Blue for the Service/Control line and Red for the Emergency/Supply line. They connect by pressing the rubber seals together and twisting a quarter turn to lock.",
    realEstateTip: "If you cross the lines (connect Blue to Red), you won't have control of the trailer brakes, or the trailer spring brakes will refuse to release.",
    sampleQuestion: {
      question: "What are glad hands used for?",
      options: [
        "Securing the cargo to the trailer bed.",
        "Connecting the air lines from the tractor to the trailer.",
        "Coupling the fifth wheel to the kingpin."
      ],
      correctAnswer: 1,
      explanation: "Glad hands connect the service (blue) and emergency (red) air hoses between the tractor and trailer."
    }
  },
  {
    id: "hours-of-service-14",
    title: "The 14-Hour Rule",
    category: "rules",
    summary: "The maximum daily window a commercial driver can drive and perform work.",
    description: "Once a driver comes on duty, they have a strict 14-hour window to complete their driving. Once the 14-hour clock expires, they cannot drive a commercial vehicle until they complete 10 consecutive hours off duty. Off-duty breaks or meals do NOT extend or pause this 14-hour window.",
    realEstateTip: "Keep this distinct from the 11-Hour Rule, which is the actual maximum driving time allowed within that 14-hour window.",
    sampleQuestion: {
      question: "Under the 14-hour rule, which of the following is true?",
      options: [
        "You can extend the 14-hour limit by taking a 2-hour lunch break.",
        "The 14-hour window is a consecutive block that cannot be paused by off-duty time.",
        "You can drive as many hours as you want within that window."
      ],
      correctAnswer: 1,
      explanation: "The 14-hour limit is a continuous clock that starts when you first go on duty, and cannot be extended by standard off-duty time."
    }
  },
  {
    id: "hazmat-placards",
    title: "Hazardous Materials Placards",
    category: "endorsements",
    summary: "Diamond-shaped warning signs placed on all four sides of a vehicle carrying hazardous cargo.",
    description: "Placards are 10.75-inch diamond-shaped signs placed on the front, rear, and sides of a vehicle carrying placardable quantities of hazardous materials. They identify the hazard class of the material (e.g., Explosives, Flammable Liquids, Corrosives) to warn the public and guide emergency responders in an accident.",
    realEstateTip: "It is the shipper's responsibility to provide the placards, but the driver's responsibility to ensure they are clean, visible, and placed correctly.",
    sampleQuestion: {
      question: "Where must hazardous materials placards be displayed on a vehicle?",
      options: [
        "Only on the rear of the trailer.",
        "On all four sides of the vehicle (front, back, left, right).",
        "On the driver's door and the front bumper."
      ],
      correctAnswer: 1,
      explanation: "DOT rules require placards to be clearly displayed on all four sides of a placarded commercial vehicle."
    },
    imagePath: "/images/practice-tests/cdl_hazmat.webp"
  },
  {
    id: "pre-trip-inspection",
    title: "Pre-Trip Inspection Checklist",
    category: "general",
    summary: "A safety check of all critical parts (steering, suspension, brakes, engine) before driving.",
    description: "Every commercial driver must perform a thorough walk-around inspection before operating a vehicle. The pre-trip covers engine fluids, belts, hoses, tires, wheels, steering links, suspension spring leaves, and all lights. The driver must check for leaks, damage, and secure mountings.",
    realEstateTip: "The Real Estate examiner will stand with you and require you to verbally describe every part you check, how you check it, and what defects you are looking for.",
    sampleQuestion: {
      question: "Which of the following must be inspected in the engine compartment during a pre-trip?",
      options: [
        "Windshield wiper blade condition.",
        "Fluid levels (engine oil, coolant, power steering) and belt condition.",
        "Tire tread depth and inflation pressure."
      ],
      correctAnswer: 1,
      explanation: "Engine compartment pre-trip inspection includes verifying fluids (oil, coolant, power steering) and looking for leaks or cracked belts."
    },
    imagePath: "/images/practice-tests/cdl_pre_trip.webp"
  },
  {
    id: "baffle-safety",
    title: "Tanker Baffles vs. Smooth Bores",
    category: "cargo",
    summary: "Bulkheads inside liquid tanks designed to control liquid surge.",
    description: "Tanks carrying bulk liquids can experience severe forward-and-backward movement of the cargo (surge) when stopping. Tanks with 'baffles' have bulkheads with holes that slow the liquid's flow. 'Smooth bore' tanks (like milk tankers, which must be smooth for sanitation) have no baffles, meaning liquid surge is extremely high and can push a stopping truck forward into intersections.",
    realEstateTip: "Baffles reduce forward-and-backward surge but do NOT prevent side-to-side surge, which is what causes rollovers on curves.",
    sampleQuestion: {
      question: "What is the primary danger of driving a smooth-bore tanker vehicle?",
      options: [
        "The cargo is heavier than other cargo.",
        "Liquid surge when braking can push the vehicle forward.",
        "The tank is more likely to develop leaks."
      ],
      correctAnswer: 1,
      explanation: "Smooth-bore tankers have no internal baffles, meaning liquid surge is extremely high and can push the truck forward during stops."
    },
    imagePath: "/images/practice-tests/cdl_tanker.webp"
  }
]
