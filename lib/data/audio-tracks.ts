import { StateKey } from '@/lib/constants'

export interface AudioTrack {
    id: string
    title: string
    url: string
    duration: string // formatted as mm:ss
    takeaways: string[]
}

export const STATE_AUDIO_TRACKS: Record<string, AudioTrack[]> = {
    california: [
        {
            id: 'ca-1',
            title: "Section 1: The California Driver's License",
            url: '/audio_handbooks/california/section_01_the_california_drivers_license.mp3',
            duration: '02:03',
            takeaways: [
                "Driving is a privilege, not a right. All California residents must possess a valid license to drive on public roads.",
                "Real ID requirements: Beginning May 2025, you must have a Real ID (marked with a gold bear and star) to board domestic flights or enter military bases.",
                "It is illegal to operate a vehicle without a license, and doing so can result in vehicle impoundment and fines."
            ]
        },
        {
            id: 'ca-2',
            title: "Section 2: Getting an Instruction Permit and Driver's License",
            url: '/audio_handbooks/california/section_02_getting_an_instruction_permit_and_drivers_license.mp3',
            duration: '04:53',
            takeaways: [
                "Minor permit requirements: Must be at least 15½ years old, complete real estate exam prep, and get parent signature.",
                "Behind-the-wheel practice: Minors must practice for at least 50 hours (10 at night) with a licensed adult age 25+.",
                "Provisional restrictions: For the first year, minors cannot drive between 11 PM and 5 AM, or transport passengers under 20 without an adult supervisor."
            ]
        },
        {
            id: 'ca-3',
            title: "Section 3: The Testing Process",
            url: '/audio_handbooks/california/section_03_the_testing_process.mp3',
            duration: '05:47',
            takeaways: [
                "Vision exam: Requires at least 20/40 vision in both eyes (with or without corrective lenses).",
                "Knowledge test: Contains questions on road rules and signs. Cheating results in automatic failure and suspension.",
                "Behind-the-wheel drive test: You must demonstrate control, check mirrors/blind spots, and safely execute basic driving maneuvers."
            ]
        },
        {
            id: 'ca-4',
            title: "Section 4: Changing, Replacing, and Renewing Your Driver's License",
            url: '/audio_handbooks/california/section_04_changing_replacing_and_renewing_your_drivers_license.mp3',
            duration: '02:01',
            takeaways: [
                "Address changes: You must notify the Real Estate of a change of address within 10 days of moving.",
                "Replacement: If your license is lost, stolen, or damaged, you must apply for a duplicate and pay a fee.",
                "Renewal: Licenses expire on your birthday. Real Estate sends a notice detailing whether you can renew online, by mail, or in person."
            ]
        },
        {
            id: 'ca-5',
            title: "Section 5: An Introduction to Driving",
            url: '/audio_handbooks/california/section_05_an_introduction_to_driving.mp3',
            duration: '05:32',
            takeaways: [
                "Hand position: Maintain hands at 9 and 3 o'clock (or 8 and 4) on the steering wheel.",
                "Steering methods: Use push-pull (hand-to-hand) for standard turns, and hand-over-hand for sharp turns or skid recovery.",
                "Headlight requirements: Must turn on headlights if wipers are running due to rain, fog, or snow."
            ]
        },
        {
            id: 'ca-6',
            title: "Section 6: Navigating the Roads",
            url: '/audio_handbooks/california/section_06_navigating_the_roads.mp3',
            duration: '31:04',
            takeaways: [
                "Solid vs. broken lines: Solid lines indicate no lane crossing; broken lines indicate passing is allowed when safe.",
                "Right-hand lane vs. left-hand lane: Left lane is for passing and turning left; right lane is for slower traffic, entering, and exiting.",
                "Passing: Always check mirrors and blind spots before changing lanes to pass another vehicle."
            ]
        },
        {
            id: 'ca-7',
            title: "Section 7: Laws and Rules of the Road",
            url: '/audio_handbooks/california/section_07_laws_and_rules_of_the_road.mp3',
            duration: '39:21',
            takeaways: [
                "Speed limits: The maximum speed limit on most state highways is 65 mph (or 70 mph where posted). In school zones and business districts, the default limit is 25 mph.",
                "Right of way at intersections: The vehicle arriving first has right of way. If two arrive at the same time, yield to the vehicle on your right.",
                "Roundabouts: Enter to the right in a counter-clockwise direction. Yield to traffic already inside the roundabout."
            ]
        },
        {
            id: 'ca-8',
            title: "Section 8: Safe Driving",
            url: '/audio_handbooks/california/section_08_safe_driving.mp3',
            duration: '27:01',
            takeaways: [
                "Scanning: Keep your eyes moving. Look 10-12 seconds ahead to spot hazards early.",
                "3-second rule: Maintain a following distance of at least 3 seconds behind the vehicle ahead.",
                "Tailgating: Avoid driving too close to the vehicle ahead. Increase distance in wet weather or darkness."
            ]
        },
        {
            id: 'ca-9',
            title: "Section 9: Alcohol and Drugs",
            url: '/audio_handbooks/california/section_09_alcohol_and_drugs.mp3',
            duration: '09:32',
            takeaways: [
                "DUI laws: It is illegal to drive with a BAC (Blood Alcohol Concentration) of 0.08% or higher if you are 21+, or 0.01% or higher if under 21.",
                "Implied consent: By driving in California, you agree to take a chemical test (breath, blood, or urine) if suspected of DUI. Refusal results in automatic license suspension.",
                "Open container: It is illegal to carry an open alcoholic container in the passenger area of a vehicle."
            ]
        },
        {
            id: 'ca-10',
            title: "Section 10: Financial Responsibility, Insurance, and Collisions",
            url: '/audio_handbooks/california/section_10_financial_responsibility_insurance_requirements_and_collision.mp3',
            duration: '04:52',
            takeaways: [
                "Minimum insurance liability limits: $15,000 for injury/death of one person, $30,000 for injury/death of multiple people, and $5,000 for property damage.",
                "Reporting collisions: You must report a collision to the Real Estate within 10 days if anyone was injured or killed, or if property damage exceeds $1,000.",
                "Hit and run: Leaving the scene of a collision is a serious crime that results in severe penalties."
            ]
        },
        {
            id: 'ca-11',
            title: "Section 11: Vehicle Registration Requirements",
            url: '/audio_handbooks/california/section_11_vehicle_registration_requirements.mp3',
            duration: '01:00',
            takeaways: [
                "Registration: Every vehicle driven on California roads must be registered with the Real Estate and display valid license plates and year/month stickers.",
                "Change of ownership: When buying or selling a vehicle, you must transfer ownership with the Real Estate within 10 days.",
                "Smog inspection: Most vehicles require a smog certificate verification every two years for registration renewal."
            ]
        },
        {
            id: 'ca-12',
            title: "Section 12: Driver Safety",
            url: '/audio_handbooks/california/section_12_driver_safety.mp3',
            duration: '10:33',
            takeaways: [
                "Seat belts: Everyone inside a moving vehicle must wear a properly adjusted seat belt. The driver can be cited if passengers under 16 are not buckled.",
                "Distracted driving: It is illegal to hold a cell phone or write/read texts while driving. Only hands-free voice operations are permitted.",
                "Child safety seats: Children under 8 or under 4'9\" tall must be secured in a federally-approved child restraint system in the back seat."
            ]
        },
        {
            id: 'ca-13',
            title: "Section 13: Seniors and Driving",
            url: '/audio_handbooks/california/section_13_seniors_and_driving.mp3',
            duration: '04:15',
            takeaways: [
                "Renewal requirements: Drivers age 70 and older must renew their license in person and take a vision test.",
                "Real Estate re-examinations: Real Estate may request senior re-evaluation if a physician or family member reports potential impairment.",
                "Accommodations: The Real Estate provides resources and adaptive driving equipment evaluations for senior drivers."
            ]
        },
        {
            id: 'ca-14',
            title: "Section 14: Glossary",
            url: '/audio_handbooks/california/section_14_glossary.mp3',
            duration: '02:48',
            takeaways: [
                "Basic speed law: You must never drive faster than is safe for current road and weather conditions, regardless of the posted limit.",
                "Right-of-way: Rules that determine which vehicle has legal priority to proceed first.",
                "Blind spots: Areas around a vehicle that cannot be seen by looking in the mirrors and require turning your head."
            ]
        }
    ],
    'new-york': [
        {
            id: 'ny-1',
            title: "Chapter 1: Driver's Licenses",
            url: '/audio_handbooks/new_york/chapter_01_driver_licenses.mp3',
            duration: '30:32',
            takeaways: [
                "Driving in New York is a privilege, not a right. Most noncommercial drivers require a Class D license.",
                "Real ID act: Starting May 2025, you must possess a Real ID or Enhanced license to board domestic flights.",
                "It is illegal to drive without a license and can result in severe fines or misdemeanor charges."
            ]
        },
        {
            id: 'ny-2',
            title: "Chapter 2: How to Keep Your License",
            url: '/audio_handbooks/new_york/chapter_02_how_to_keep_your_license.mp3',
            duration: '24:25',
            takeaways: [
                "Point system: NY Real Estate assigns points for moving violations. Accumulating 11 points within 18 months can lead to license suspension.",
                "Driver Responsibility Assessment (DRA): Assessed if you receive 6 or more points within 18 months, or are convicted of alcohol-related offenses.",
                "Mandatory suspensions: Convictions for street racing, driving without insurance, or chemical test refusal result in mandatory license revocation."
            ]
        },
        {
            id: 'ny-3',
            title: "Chapter 3: Owning a Vehicle",
            url: '/audio_handbooks/new_york/chapter_03_owning_a_vehicle.mp3',
            duration: '19:42',
            takeaways: [
                "Registration & Title: Every vehicle must be titled and registered with the Real Estate, showing proof of ownership and insurance.",
                "Safety Inspection: Vehicles must undergo a safety and emissions inspection once a year at an official station.",
                "Insurance: New York requires continuous liability coverage. If insurance lapses, you must surrender your plates to avoid fines."
            ]
        },
        {
            id: 'ny-4',
            title: "Chapter 4: Traffic Control",
            url: '/audio_handbooks/new_york/chapter_04_traffic_control.mp3',
            duration: '11:01',
            takeaways: [
                "Traffic signals: Red means stop, green means go (when clear), and yellow warns that the light is about to turn red.",
                "Sign shapes & colors: Octagon is always stop, triangle is yield, diamond is hazard warning, and rectangle is regulatory.",
                "Pavement markings: Solid lines mean no lane changes or passing; broken lines indicate passing is permitted when safe."
            ]
        },
        {
            id: 'ny-5',
            title: "Chapter 5: Intersections and Turns",
            url: '/audio_handbooks/new_york/chapter_05_intersections_and_turns.mp3',
            duration: '18:14',
            takeaways: [
                "Right of way: Yield to pedestrians in crosswalks and to oncoming traffic when turning left.",
                "Turn signals: You must signal your intent to turn or change lanes at least 100 feet in advance.",
                "Roundabouts: Vehicles inside the roundabout have the right of way. Yield and enter in a counter-clockwise direction."
            ]
        },
        {
            id: 'ny-6',
            title: "Chapter 6: How to Pass",
            url: '/audio_handbooks/new_york/chapter_06_how_to_pass.mp3',
            duration: '12:25',
            takeaways: [
                "Passing on the left: Check mirrors and blind spots, signal, and return to the right lane only when you can see the passed vehicle's front tires in your rearview mirror.",
                "Passing on the right: Only permitted on roads with two or more lanes going in the same direction, or when the vehicle ahead is turning left.",
                "No passing zones: Marked by solid yellow center lines, hills, curves, or when approaching within 100 feet of an intersection, bridge, or railroad crossing."
            ]
        },
        {
            id: 'ny-7',
            title: "Chapter 7: Parallel Parking",
            url: '/audio_handbooks/new_york/chapter_07_parallel_parking.mp3',
            duration: '09:18',
            takeaways: [
                "Parallel parking steps: Pull up parallel to the front vehicle (about 2 feet away), check traffic, reverse at a 45-degree angle, straighten wheel, and center the vehicle.",
                "Parking rules: Tires must be within 12 inches of the curb.",
                "Illegal parking: Never park within 15 feet of a fire hydrant, 20 feet of a crosswalk, or 30 feet of a stop sign."
            ]
        },
        {
            id: 'ny-8',
            title: "Chapter 8: Defensive Driving",
            url: '/audio_handbooks/new_york/chapter_08_defensive_driving.mp3',
            duration: '30:13',
            takeaways: [
                "Two-second rule: Maintain a minimum following distance of two seconds behind the vehicle directly in front of you.",
                "Scanning: Scan the road 10 to 12 seconds ahead to anticipate potential traffic hazards.",
                "Road rage: Avoid making eye contact or gesturing at aggressive drivers. Pull over or dial 911 if threatened."
            ]
        },
        {
            id: 'ny-9',
            title: "Chapter 9: Alcohol and Other Drugs",
            url: '/audio_handbooks/new_york/chapter_09_alcohol_and_other_drugs.mp3',
            duration: '17:42',
            takeaways: [
                "DWI & DWAI: Driving While Intoxicated (DWI) is a crime defined as driving with a BAC of 0.08% or higher. DWAI (Ability Impaired) is 0.05% to 0.07% BAC.",
                "Zero tolerance: Drivers under 21 face automatic suspension for a BAC of 0.02% or higher.",
                "Consent law: Operating a vehicle in NY implies consent to chemical tests. Refusal results in immediate license suspension and a $500 penalty."
            ]
        },
        {
            id: 'ny-10',
            title: "Chapter 10: Special Driving Conditions",
            url: '/audio_handbooks/new_york/chapter_10_special_driving_conditions.mp3',
            duration: '28:53',
            takeaways: [
                "Night driving: Reduce speed since visibility is limited. Headlights must be turned on from 30 minutes after sunset to 30 minutes before sunrise.",
                "Winter driving: Clear all snow/ice from windows and roof before driving. Avoid sudden braking or acceleration on slippery roads.",
                "Hydroplaning: If tires lose contact with the road in heavy rain, ease off the gas pedal; do not brake or turn suddenly."
            ]
        },
        {
            id: 'ny-11',
            title: "Chapter 11: Sharing the Road",
            url: '/audio_handbooks/new_york/chapter_11_sharing_the_road.mp3',
            duration: '27:33',
            takeaways: [
                "Pedestrians: Yield the right-of-way to pedestrians at all crosswalks, intersections, and when turning.",
                "Bicyclists: Cyclists have the right to share public roads. Pass with at least 3 feet of clearance.",
                "Large trucks: Avoid driving in a truck's blind spots (called the 'No-Zone') on the sides, rear, and front."
            ]
        },
        {
            id: 'ny-12',
            title: "Chapter 12: If You Are in a Traffic Crash",
            url: '/audio_handbooks/new_york/chapter_12_if_you_are_in_a_traffic_crash.mp3',
            duration: '06:33',
            takeaways: [
                "Immediate actions: Stop your vehicle immediately. Exchange name, address, insurance, and license info with the other driver.",
                "Reporting: If damage to any vehicle exceeds $1,000, you must file a report (MV-104) with the Real Estate within 10 days.",
                "Emergency vehicles: NY Move Over Law requires you to slow down and change lanes (when safe) when passing parked emergency or utility vehicles."
            ]
        },
        {
            id: 'ny-13',
            title: "Chapter 13: Advanced Driver Assistance Systems",
            url: '/audio_handbooks/new_york/chapter_13_advanced_driver_assistance_systems.mp3',
            duration: '03:12',
            takeaways: [
                "Driver assistance: Features like lane departure warning and adaptive cruise control are aids, but do not replace the driver's attention.",
                "Testing: Automated parallel parking and lane control features are not allowed during the road test.",
                "Responsibility: The driver remains legally responsible for controlling the vehicle at all times."
            ]
        }
    ],
    texas: [
        {
            id: 'tx-1',
            title: "Chapter 1: Your License to Drive",
            url: '/audio_handbooks/texas/chapter_01_your_license_to_drive.mp3',
            duration: '63:03',
            takeaways: [
                "All Texas residents must carry a valid driver license to operate any motor vehicle on public roads.",
                "Real ID compliance: Real ID compliant cards have a gold star in the upper right corner, necessary for domestic flights.",
                "New residents must apply for a Texas driver license within 90 days of moving to the state."
            ]
        },
        {
            id: 'tx-2',
            title: "Chapter 2: Vehicle Inspection and Registration",
            url: '/audio_handbooks/texas/chapter_02_vehicle_inspection_and_registration.mp3',
            duration: '11:34',
            takeaways: [
                "All vehicles registered in Texas must pass an annual safety inspection at an official inspection station.",
                "Registration renewal requires proof of liability insurance and must be done annually.",
                "It is illegal to operate a vehicle without a valid registration sticker displayed on the windshield."
            ]
        },
        {
            id: 'tx-3',
            title: "Chapter 3: Safety Responsibility",
            url: '/audio_handbooks/texas/chapter_03_safety_responsibility.mp3',
            duration: '05:37',
            takeaways: [
                "Texas law requires all drivers to prove financial responsibility (liability insurance) to cover crash costs.",
                "Minimum liability limits: $30,000 for injury of one person, $60,000 for injury of multiple people, and $25,000 for property damage (30/60/25).",
                "Driving without insurance can result in heavy fines, vehicle impoundment, and license suspension."
            ]
        },
        {
            id: 'tx-4',
            title: "Chapter 4: Right of Way",
            url: '/audio_handbooks/texas/chapter_04_right_of_way.mp3',
            duration: '13:12',
            takeaways: [
                "Intersections: Yield to vehicles already inside the intersection. At four-way stops, yield to the vehicle that arrived first, or to the right if arriving at the same time.",
                "Emergency vehicles: Yield right-of-way to emergency vehicles with flashing lights/sirens. Pull to the right curb and stop.",
                "Pedestrians: Pedestrians always have the right of way in crosswalks and intersections."
            ]
        },
        {
            id: 'tx-5',
            title: "Chapter 5: Signals, Signs, and Markers",
            url: '/audio_handbooks/texas/chapter_05_signals_signs_and_markers.mp3',
            duration: '28:27',
            takeaways: [
                "Red lights mean stop, yellow means clear intersection, and green means proceed when safe.",
                "Shapes: Octagons mean stop, equilateral triangles mean yield, and diamond shapes warn of road hazards.",
                "Pavement markings: Solid lines indicate lane crossing is prohibited, while broken lines allow passing."
            ]
        },
        {
            id: 'tx-6',
            title: "Chapter 6: Signaling, Passing, and Turning",
            url: '/audio_handbooks/texas/chapter_06_signaling_passing_and_turning.mp3',
            duration: '08:25',
            takeaways: [
                "Signals: You must signal at least 100 feet before turning or changing lanes.",
                "Passing: Pass on the left when safe. Only return to the lane when you can see the passed vehicle in your rearview mirror.",
                "Hand signals: Arm straight out for left turn, arm bent upwards for right turn, and arm downwards for stop/slow."
            ]
        },
        {
            id: 'tx-7',
            title: "Chapter 7: Parking, Stopping, or Standing",
            url: '/audio_handbooks/texas/chapter_07_parking_stopping_or_standing.mp3',
            duration: '07:01',
            takeaways: [
                "Parallel parking: Park within 18 inches of the curb. Curb parking on a two-way street must face in the direction of traffic.",
                "Hills: When parking uphill, turn wheels away from curb. Downhill, turn wheels toward curb.",
                "No parking zones: Never park within 15 feet of a fire hydrant, 20 feet of a crosswalk, or 30 feet of a traffic signal."
            ]
        },
        {
            id: 'tx-8',
            title: "Chapter 8: Speed and Speed Limits",
            url: '/audio_handbooks/texas/chapter_08_speed_and_speed_limits.mp3',
            duration: '07:27',
            takeaways: [
                "Default speed limits: 30 mph in urban/residential streets, and 70 mph on numbered state highways (unless otherwise posted).",
                "Texas basic speed law: Never drive faster than is safe for road and weather conditions.",
                "Fines double in construction zones when workers are present."
            ]
        },
        {
            id: 'tx-9',
            title: "Chapter 9: Some Special Driving Situations",
            url: '/audio_handbooks/texas/chapter_09_some_special_driving_situations.mp3',
            duration: '33:01',
            takeaways: [
                "Highway driving: Avoid fatigue by taking breaks every 2 hours or 100 miles. Do not tailgate.",
                "Night driving: Headlights must be turned on from 30 minutes after sunset to 30 minutes before sunrise.",
                "Move Over Law: Texas law requires you to vacate the lane adjacent to stopped emergency/tow vehicles or slow down to 20 mph below limit."
            ]
        },
        {
            id: 'tx-10',
            title: "Chapter 10: Alcohol and Drug Impact on Driving Ability",
            url: '/audio_handbooks/texas/chapter_10_alcohol_and_drug_impact_on_driving_ability.mp3',
            duration: '20:54',
            takeaways: [
                "DWI limits: It is illegal to drive with a BAC (Blood Alcohol Concentration) of 0.08% or higher.",
                "Underage DUI: Texas has zero tolerance. Any detectable amount of alcohol in minors is illegal and results in license suspension.",
                "Consent law: Operating a vehicle in Texas implies consent to breath/blood test. Refusal results in automatic 180-day license suspension."
            ]
        },
        {
            id: 'tx-11',
            title: "Chapter 11: Motor Vehicle Crashes",
            url: '/audio_handbooks/texas/chapter_11_motor_vehicle_crashes.mp3',
            duration: '08:55',
            takeaways: [
                "In case of a crash: Stop immediately. Call 911 if there are injuries. Exchange name, insurance, and license details.",
                "Move it: If the crash occurs on a main highway and there are no injuries, move vehicles off the road to avoid blocking traffic.",
                "Filing reports: If a crash is not investigated by police and results in injury, death, or $1,000+ damage, you must report it within 10 days."
            ]
        },
        {
            id: 'tx-12',
            title: "Chapter 12: Pedestrian Safety",
            url: '/audio_handbooks/texas/chapter_12_pedestrian_safety.mp3',
            duration: '03:34',
            takeaways: [
                "Pedestrians: Always yield to pedestrians in crosswalks and intersections.",
                "Blind pedestrians: Extra care must be taken. Stop at least 15 feet away if a pedestrian is carrying a white cane or using a guide dog.",
                "Passing: Never pass a vehicle stopped at a crosswalk, as they may be yielding to a pedestrian."
            ]
        },
        {
            id: 'tx-13',
            title: "Chapter 13: Bicycle Laws and Safety",
            url: '/audio_handbooks/texas/chapter_13_bicycle_laws_and_safety.mp3',
            duration: '05:11',
            takeaways: [
                "Bicycle status: Under Texas law, bicycles are vehicles and cyclists have the same rights and responsibilities as motorists.",
                "Safe passing: Texas requires drivers to maintain a safe distance (minimum 3 feet for cars, 6 feet for commercial vehicles) when passing a cyclist.",
                "Equipment: Riding at night requires a white light visible from 500 feet on front, and red reflector on rear."
            ]
        },
        {
            id: 'tx-14',
            title: "Chapter 14: Additional Safety Tips",
            url: '/audio_handbooks/texas/chapter_14_additional_safety_tips.mp3',
            duration: '21:21',
            takeaways: [
                "Seat belts: Texas law requires all occupants in a passenger vehicle to wear seat belts. The driver is responsible for children.",
                "Distracted driving: It is illegal to read, write, or send text messages while operating a vehicle. School zones prohibit all hand-held device use.",
                "Hot cars: Never leave children or pets unattended in a vehicle, as temperatures can quickly reach lethal levels."
            ]
        }
    ],
    florida: [
        {
            id: 'fl-1',
            title: "Section 1: Driver Licenses and ID Cards",
            url: '/audio_handbooks/florida/section_01_driver_licenses_and_id_cards.mp3',
            duration: '34:13',
            takeaways: [
                "Real ID compliance: Every Florida license must have a gold star to board domestic flights after May 2025.",
                "New residents must obtain a Florida driver license within 30 days of establishing residency.",
                "Driver licenses must be renewed every 8 years for drivers under 80, and every 6 years for drivers age 80+."
            ]
        },
        {
            id: 'fl-2',
            title: "Section 2: Driving Schools and Test Providers",
            url: '/audio_handbooks/florida/section_02_driving_schools_and_test_providers.mp3',
            duration: '12:10',
            takeaways: [
                "First-time drivers: Must complete the Traffic Law and Substance Abuse Education (TLSAE) course before taking permit exam.",
                "Testing: Class E knowledge and skills tests can be taken at Real Estate offices or approved third-party providers.",
                "Parent proctoring: Parents can monitor minors taking the online permit test, but must submit an online proctoring form."
            ]
        },
        {
            id: 'fl-3',
            title: "Section 3: Your Driving Privilege",
            url: '/audio_handbooks/florida/section_03_your_driving_privilege.mp3',
            duration: '25:59',
            takeaways: [
                "Point system: Florida assigns points for traffic violations. Accumulating 12 points in 12 months leads to a 30-day suspension.",
                "Suspensions: Your license can be suspended for failing to pay child support, school truancy, or failing to appear in court.",
                "DUI suspensions: First refusal to take a breath/blood test results in automatic 1-year suspension; second refusal is a misdemeanor."
            ]
        },
        {
            id: 'fl-4',
            title: "Section 4: Before You Drive - You the Driver",
            url: '/audio_handbooks/florida/section_04_before_you_drive_you_the_driver.mp3',
            duration: '09:04',
            takeaways: [
                "Seat belts: Florida law requires all front-seat occupants and passengers under 18 to wear seat belts. The driver is cited for underage violations.",
                "Child seats: Children under 5 must be in a crash-tested, federally approved safety seat. Under 3 requires a separate carrier or integrated seat.",
                "Seat belt exclusions: Medical exemptions require a signed physician statement."
            ]
        },
        {
            id: 'fl-5',
            title: "Section 5: Before You Drive - Your Vehicle",
            url: '/audio_handbooks/florida/section_05_before_you_drive_your_vehicle.mp3',
            duration: '16:40',
            takeaways: [
                "Equipment checks: Brakes, tires, horn, windshield wipers, and all lights must be in safe working order.",
                "Window tinting: Limits exist on side and rear window tint darkness. Windshield tinting is illegal below the AS-1 line.",
                "Bumper height: Maximum bumper heights are set by law depending on the gross vehicle weight rating."
            ]
        },
        {
            id: 'fl-6',
            title: "Section 6: Traffic Controls",
            url: '/audio_handbooks/florida/section_06_traffic_controls.mp3',
            duration: '27:15',
            takeaways: [
                "Red signal: Always come to a complete stop. Turning right on red is allowed after stopping if the intersection is clear (unless posted otherwise).",
                "Signs: Stop signs are octagonal, yield signs are triangular, and warning signs are diamond-shaped.",
                "Pavement lines: Solid white lines mark the edge of the road or separate lanes going same direction (do not cross)."
            ]
        },
        {
            id: 'fl-7',
            title: "Section 7: Driving Safety",
            url: '/audio_handbooks/florida/section_07_driving_safety.mp3',
            duration: '25:24',
            takeaways: [
                "Speed limits: Standard limits are 30 mph in business/residential areas, 20 mph in school zones, and 70 mph on interstate highways.",
                "Right-of-way: Yield to pedestrians, emergency vehicles, and vehicles already inside an intersection.",
                "Roundabouts: Enter in a clockwise circle. Yield to traffic already inside the roundabout before entering."
            ]
        },
        {
            id: 'fl-8',
            title: "Section 8: Special Driving Situations",
            url: '/audio_handbooks/florida/section_08_special_driving_situations.mp3',
            duration: '06:26',
            takeaways: [
                "Night driving: Turn on headlights from sunset to sunrise. Use low beams when within 500 feet of oncoming vehicles.",
                "Rain/Fog: Flashers must NOT be used while driving. Turn on low beams and wipers. Pull over if visibility is zero.",
                "Move Over Law: vacate the lane closest to stopped emergency, tow, or service vehicles, or slow down to 20 mph below limit."
            ]
        },
        {
            id: 'fl-9',
            title: "Section 9: Handling Emergencies",
            url: '/audio_handbooks/florida/section_09_handling_emergencies.mp3',
            duration: '16:12',
            takeaways: [
                "Brake failure: Pump the brakes rapidly to build pressure, shift to a lower gear, and apply the emergency parking brake slowly.",
                "Tire blowout: Hold steering wheel firmly, steer straight, and ease off the gas pedal. Do NOT slam on the brakes.",
                "Vehicle in water: Undo seat belt, open window or break side glass immediately, and exit the vehicle before it sinks."
            ]
        },
        {
            id: 'fl-10',
            title: "Section 10: Sharing the Road",
            url: '/audio_handbooks/florida/section_10_sharing_the_road.mp3',
            duration: '18:08',
            takeaways: [
                "Pedestrians: Yield the right of way to pedestrians walking in crosswalks and intersections.",
                "Bicycles: Pass with at least 3 feet of clearance. Cyclists have the same rights as motorists.",
                "Large trucks: Avoid driving in the blind spots ('No-Zones') at the front, sides, and rear of commercial trucks."
            ]
        },
        {
            id: 'fl-11',
            title: "Section 11: Study Guide for Knowledge Exam",
            url: '/audio_handbooks/florida/section_11_study_guide_for_knowledge_exam.mp3',
            duration: '09:01',
            takeaways: [
                "Key takeaways: Review rules on speed limits, DUI limits (0.08% BAC), right of way, and child restraint safety.",
                "Test structure: The Class E Knowledge Exam consists of 50 multiple-choice questions on road rules and signs.",
                "Passing score: You must answer at least 40 out of 50 questions correctly (80%) to pass."
            ]
        }
    ],
    virginia: [
        {
            id: 'va-1',
            title: "Section 1: Testing",
            url: '/audio_handbooks/virginia/section_01_testing.mp3',
            duration: '08:00',
            takeaways: [
                "Virginia license exams consist of a two-part knowledge test and a behind-the-wheel road skills test.",
                "Knowledge exam: Part 1 tests road signs (must get 100% correct). Part 2 tests general rules (must get 80% correct).",
                "Waiting period: If you fail the knowledge test, you must wait at least 15 days to retake it (if under 18)."
            ]
        },
        {
            id: 'va-2',
            title: "Section 2: Signals, Signs, and Pavement Markings",
            url: '/audio_handbooks/virginia/section_02_signals_signs_and_pavement_markings.mp3',
            duration: '31:08',
            takeaways: [
                "Traffic signals: Red means stop. Right turns on red are permitted after stopping if the way is clear (unless posted otherwise).",
                "Sign colors: Red means regulatory/prohibited, yellow warns of hazards, and blue indicates traveler services.",
                "Pavement markings: Solid white lines mark the outer right edge. Broken yellow lines separate opposite direction traffic (passing allowed)."
            ]
        },
        {
            id: 'va-3',
            title: "Section 3: Safe Driving",
            url: '/audio_handbooks/virginia/section_03_safe_driving.mp3',
            duration: '51:49',
            takeaways: [
                "Speed limits: 25 mph in school, business, and residential areas. 55 mph on secondary highways. 70 mph on interstates.",
                "Following distance: Maintain at least a 2, 3, or 4-second gap depending on your speed (under 35 mph, 35-45 mph, and 46+ mph).",
                "Yielding: Always yield to pedestrians in crosswalks, emergency vehicles with sirens, and traffic inside roundabouts."
            ]
        },
        {
            id: 'va-4',
            title: "Section 4: Seat Belts, Airbags, and Child Safety Seats",
            url: '/audio_handbooks/virginia/section_04_seat_belts_airbags_and_child_safety_seats.mp3',
            duration: '07:05',
            takeaways: [
                "Seat belt laws: All front seat occupants and all passengers under 18 must wear seat belts. The driver can be fined for underage violations.",
                "Child safety seats: Children under 8 must be secured in a child restraint or booster seat in the rear seat.",
                "Airbags: Sit at least 10 inches away from the steering wheel/dashboard to avoid injury from airbag deployment."
            ]
        },
        {
            id: 'va-5',
            title: "Section 5: Penalties",
            url: '/audio_handbooks/virginia/section_05_penalties.mp3',
            duration: '12:19',
            takeaways: [
                "DUI limits: It is illegal to drive with a BAC of 0.08% or higher (0.02% for drivers under 21).",
                "Administrative license suspension: If you refuse a chemical test or register a BAC of 0.08%+, your license is suspended on the spot for 7 days.",
                "Demerit points: Real Estate assigns points (3, 4, or 6) for moving violations. Accumulating too many points leads to suspension."
            ]
        },
        {
            id: 'va-6',
            title: "Section 6: License Types",
            url: '/audio_handbooks/virginia/section_06_license_types.mp3',
            duration: '04:58',
            takeaways: [
                "Class D: The standard real estate license for passenger vehicles. Valid for 8 years.",
                "Learner's permit: Allows you to drive accompanied by a licensed driver age 21+ (or age 18+ if immediate family).",
                "Commercial Driver License (CDL): Required to operate heavy trucks, school buses, and vehicles carrying hazardous materials."
            ]
        },
        {
            id: 'va-7',
            title: "Section 7: Other Important Information",
            url: '/audio_handbooks/virginia/section_07_other_important_information.mp3',
            duration: '06:30',
            takeaways: [
                "Address change: You must notify the Real Estate within 30 days of changing your address.",
                "Insurance: Virginia requires all registered vehicles to carry liability insurance, or pay a $500 uninsured motor vehicle fee.",
                "Organ donation: You can register to be an organ/tissue donor when applying for or renewing your license."
            ]
        },
        {
            id: 'va-8',
            title: "Section 8: Sample Knowledge Exam",
            url: '/audio_handbooks/virginia/section_08_sample_knowledge_exam.mp3',
            duration: '03:25',
            takeaways: [
                "Study tips: Focus on signs, speed limits, right-of-way rules, and DUI penalties.",
                "Format: The test is computerized and divided into two sections. Section 1 (signs) must be completed before starting Section 2.",
                "Review: Take online practice tests to familiarize yourself with the questions."
            ]
        }
    ],
    washington: [
        {
            id: 'wa-1',
            title: "Chapter 1: Licenses",
            url: '/audio_handbooks/washington/chapter_01_licenses.mp3',
            duration: '26:03',
            takeaways: [
                "Washington residents must carry a valid driver license to operate a motor vehicle on public roads.",
                "Real ID compliance: The Enhanced Driver License (EDL) is Real ID compliant and is marked with a gold star.",
                "New residents must obtain a Washington driver license within 30 days of establishing residency."
            ]
        },
        {
            id: 'wa-2',
            title: "Chapter 2: Vehicles",
            url: '/audio_handbooks/washington/chapter_02_vehicles.mp3',
            duration: '26:04',
            takeaways: [
                "Vehicle registration: Must register vehicles with the DOL and display valid license plates and month/year stickers.",
                "Insurance: Drivers must carry liability insurance ($25k bodily injury one person, $50k bodily injury multiple people, $10k property damage).",
                "Emission check: Certain counties require vehicles to pass an emissions check before registration renewal."
            ]
        },
        {
            id: 'wa-3',
            title: "Chapter 3: Drivers",
            url: '/audio_handbooks/washington/chapter_03_drivers.mp3',
            duration: '30:39',
            takeaways: [
                "Intermediate License (GDL): Drivers under 18 face restrictions for the first 6 months (no passengers under 20, no night driving 1 AM to 5 AM).",
                "Seat belts: Washington has a primary seat belt law. The driver will be fined if any passenger under 16 is not buckled.",
                "Distracted driving: It is illegal to use a hand-held device while driving, stopping at red lights, or in traffic."
            ]
        },
        {
            id: 'wa-4',
            title: "Chapter 4: Roads",
            url: '/audio_handbooks/washington/chapter_04_roads.mp3',
            duration: '57:11',
            takeaways: [
                "Speed limits: 20 mph in school zones, 25 mph on streets of cities and towns, and 60 mph on state highways.",
                "Right-of-way: Yield to pedestrians, emergency vehicles, and vehicles inside roundabouts.",
                "Roundabouts: Slow down, yield to traffic already in the circle, and merge to the right."
            ]
        },
        {
            id: 'wa-5',
            title: "Chapter 5: Risks",
            url: '/audio_handbooks/washington/chapter_05_risks.mp3',
            duration: '36:41',
            takeaways: [
                "DUI laws: Operating a vehicle with a BAC of 0.08% or higher (0.02% for drivers under 21) is a criminal offense.",
                "Consent law: Operating a vehicle in Washington implies consent to a breath test. Refusal results in automatic 1-year license revocation.",
                "Open container: It is illegal to carry an open alcoholic container inside a vehicle's passenger compartment."
            ]
        }
    ],
    'north-carolina': [
        {
            id: 'north-carolina-1',
            title: "Chapter 1: Your License",
            url: '/audio_handbooks/north_carolina/chapter_01_your_license.mp3',
            duration: '52:06',
            takeaways: [
                "Requirements for getting a license, learner permits, and the graduated licensing program for teens (ages 15-18).",
                "REAL ID details: starting May 2025, you must have a REAL ID to board domestic flights or enter federal facilities.",
                "Fees and license renewal details: address change notifications must be submitted to the Real Estate within 60 days."
            ]
        },
        {
            id: 'north-carolina-2',
            title: "Chapter 2: Alcohol and the Law",
            url: '/audio_handbooks/north_carolina/chapter_02_alcohol_and_the_law.mp3',
            duration: '08:45',
            takeaways: [
                "DWI (Driving While Impaired) laws and blood alcohol concentration (BAC) restrictions in North Carolina.",
                "Zero tolerance laws: drivers under 21 face strict penalties and automatic license suspension if any alcohol is detected.",
                "Chemical tests: refusing a breath or blood test results in an immediate 1-year license revocation."
            ]
        },
        {
            id: 'north-carolina-3',
            title: "Chapter 3: Your Driving Privilege",
            url: '/audio_handbooks/north_carolina/chapter_03_your_driving_privilege.mp3',
            duration: '13:01',
            takeaways: [
                "The North Carolina Real Estate points system: accumulating 12 points within 3 years can lead to license suspension.",
                "Insurance points: separate from Real Estate points, these determine your auto insurance rate increases.",
                "Suspensions for specific offenses, out-of-state convictions, and license restoration procedures."
            ]
        },
        {
            id: 'north-carolina-4',
            title: "Chapter 4: Your Driving",
            url: '/audio_handbooks/north_carolina/chapter_04_your_driving.mp3',
            duration: '98:48',
            takeaways: [
                "Safe driving practices: seat belt requirements, child safety seat guidelines, and airbag safety rules.",
                "Basic driving skills: speed limits, turning, lane changes, passing, backing, and parking rules.",
                "Defensive driving and handling hazardous conditions (rain, fog, hydroplaning, snow, and ice)."
            ]
        },
        {
            id: 'north-carolina-5',
            title: "Chapter 5: Signals Signs and Pavement Markings",
            url: '/audio_handbooks/north_carolina/chapter_05_signals_signs_and_pavement_markings.mp3',
            duration: '12:34',
            takeaways: [
                "Traffic signals: understanding solid, flashing, and directional lights (arrows).",
                "Traffic signs: regulatory (red/white/black), warning (yellow/orange), and guide/informational signs.",
                "Pavement markings: solid vs. broken lines, shared turn lanes, and pedestrian crosswalks."
            ]
        },
        {
            id: 'north-carolina-6',
            title: "Chapter 6: Sharing the Road",
            url: '/audio_handbooks/north_carolina/chapter_06_sharing_the_road.mp3',
            duration: '18:18',
            takeaways: [
                "Sharing the road with cyclists, pedestrians, large commercial trucks, and school buses.",
                "No-Zones: understanding the large blind spots around commercial vehicles where crashes are most likely to occur.",
                "Adopt-A-Highway program and rules for keeping North Carolina's roadways litter-free."
            ]
        },
        {
            id: 'north-carolina-7',
            title: "Chapter 7: How Real Estate Serves You",
            url: '/audio_handbooks/north_carolina/chapter_07_how_real-estate_serves_you.mp3',
            duration: '33:38',
            takeaways: [
                "Division of Motor Vehicles services: driving record requests and vehicle registration requirements.",
                "Tag & Tax Together: how vehicle property taxes and registration renewals are paid simultaneously in NC.",
                "Vehicle emission and safety inspection requirements, window tinting rules, and title transfers."
            ]
        }
    ],
    'georgia': [
        {
            id: 'georgia-1',
            title: "Section 1: General Licensing Information",
            url: '/audio_handbooks/georgia/section_01_general_licensing_information.mp3',
            duration: '18:27',
            takeaways: [
                "General licensing information, driver license classes (Class C, D, etc.), and residency requirements.",
                "DDS Customer Service Centers: documentation required to get a secure driver license or ID card.",
                "Understanding the difference between a license, a real estate license, and an identification card."
            ]
        },
        {
            id: 'georgia-2',
            title: "Section 2: Obtaining a License Permit or ID Card",
            url: '/audio_handbooks/georgia/section_02_obtaining_a_license_permit_or_id_card.mp3',
            duration: '21:28',
            takeaways: [
                "Steps to obtain a Georgia instruction permit, provisional license, or Class C driver license.",
                "Real ID requirements: providing proof of identity, social security number, and residency documents.",
                "First-time drivers: completing the Traffic Law and Substance Abuse Education (TLSAE) or equivalent courses."
            ]
        },
        {
            id: 'georgia-3',
            title: "Section 3: Testing Information",
            url: '/audio_handbooks/georgia/section_03_testing_information.mp3',
            duration: '10:36',
            takeaways: [
                "Georgia driver licensing testing process: vision screening, knowledge exam, and road skills test.",
                "Preparation tips for the behind-the-wheel exam and vehicle equipment safety check.",
                "Retesting policies and fees for knowledge and skills test attempts."
            ]
        },
        {
            id: 'georgia-4',
            title: "Section 4: Other Services and Information",
            url: '/audio_handbooks/georgia/section_04_other_services_and_information.mp3',
            duration: '15:15',
            takeaways: [
                "Other DDS services: online license renewal, address changes, driving history (MVR) requests, and voter registration.",
                "License replacement guidelines for lost, stolen, or damaged credentials.",
                "DDS Online Services benefits and discounts for electronic transactions."
            ]
        },
        {
            id: 'georgia-5',
            title: "Section 5: Traffic Laws",
            url: '/audio_handbooks/georgia/section_05_traffic_laws.mp3',
            duration: '48:57',
            takeaways: [
                "Georgia traffic laws: speed limits, right-of-way rules at intersections, and yielding guidelines.",
                "Move Over Law: vacate the adjacent lane or slow down when passing stopped emergency or utility vehicles.",
                "Passing school buses: strict laws and penalties for illegally passing a stopped school bus."
            ]
        },
        {
            id: 'georgia-6',
            title: "Section 6: Teen Driving Laws",
            url: '/audio_handbooks/georgia/section_06_teen_driving_laws.mp3',
            duration: '14:02',
            takeaways: [
                "Teen driving laws: the Graduated Driver Licensing (GDL) process and Class D restrictions.",
                "Joshua's Law requirements: real estate exam prep and supervised driving hour certifications for teens.",
                "Curfew restrictions and passenger limits for provisional license holders."
            ]
        },
        {
            id: 'georgia-7',
            title: "Section 7: Signs Signals and Markings",
            url: '/audio_handbooks/georgia/section_07_signs_signals_and_markings.mp3',
            duration: '24:32',
            takeaways: [
                "Understanding traffic signals, regulatory signs, warning signs, and guide signs.",
                "Pavement markings: double yellow lines, lane indicators, and crosswalk markers.",
                "Construction and work zone signs: speed limit reductions and yielding to construction equipment."
            ]
        },
        {
            id: 'georgia-8',
            title: "Section 8: Safety Guidelines",
            url: '/audio_handbooks/georgia/section_08_safety_guidelines.mp3',
            duration: '27:43',
            takeaways: [
                "Safe driving guidelines: seat belt laws, child passenger safety seats, and airbag precautions.",
                "Avoiding distracted driving: Georgia's Hands-Free law and prohibitions on texting while driving.",
                "Defensive driving techniques, maintaining following distances, and scanning the road ahead."
            ]
        },
        {
            id: 'georgia-9',
            title: "Section 9: Sharing the Road",
            url: '/audio_handbooks/georgia/section_09_sharing_the_road.mp3',
            duration: '18:31',
            takeaways: [
                "Sharing the road with pedestrians, bicyclists, motorcyclists, school buses, and large commercial trucks.",
                "Blind spots ('No-Zones') of semi-trucks: front, side, and rear blind spots.",
                "Right-of-way rules when sharing lanes or encountering slow-moving vehicles."
            ]
        },
        {
            id: 'georgia-10',
            title: "Section 10: Losing Your Driving Privileges",
            url: '/audio_handbooks/georgia/section_10_losing_your_driving_privileges.mp3',
            duration: '24:08',
            takeaways: [
                "Reasons for losing driving privileges: suspensions, revocations, and cancellations of your license.",
                "DUI laws: blood alcohol concentration (BAC) limits, implied consent laws, and administrative suspensions.",
                "Point system: accumulating 15 points within 24 months results in license suspension."
            ]
        },
        {
            id: 'georgia-11',
            title: "Section 11: Crashes",
            url: '/audio_handbooks/georgia/section_11_crashes.mp3',
            duration: '05:33',
            takeaways: [
                "What to do in the event of a traffic crash: stopping, rendering aid, and exchanging information.",
                "Reporting crashes to law enforcement and filing required documentation with the DDS.",
                "Financial responsibility and auto insurance requirements after a collision."
            ]
        }
    ],
    'michigan': [
        {
            id: 'michigan-1',
            title: "Chapter 1: Your Drivers License",
            url: '/audio_handbooks/michigan/chapter_01_your_drivers_license.mp3',
            duration: '40:21',
            takeaways: [
                "Michigan driver license classes, designators, and REAL ID requirements.",
                "Under 18 Graduated Driver Licensing (GDL) program levels (Level 1, 2, and 3) and restrictions.",
                "Residency requirements, identity documents, and physical standards required for licensing."
            ]
        },
        {
            id: 'michigan-2',
            title: "Chapter 2: Your Driving Record",
            url: '/audio_handbooks/michigan/chapter_02_your_driving_record.mp3',
            duration: '13:20',
            takeaways: [
                "Understanding your Michigan driving record, points system, and license points assignment.",
                "DUI/OWI laws: Operating While Intoxicated limits, chemical testing, and refusal penalties.",
                "Driver re-examinations: why they are scheduled and what to expect during the evaluation."
            ]
        },
        {
            id: 'michigan-3',
            title: "Chapter 3: Voter Registration and State IDs",
            url: '/audio_handbooks/michigan/chapter_03_voter_registration_and_state_ids.mp3',
            duration: '07:42',
            takeaways: [
                "Voter registration options at the Secretary of State (SOS) office.",
                "Applying for a State Identification Card, fee exemptions, and REAL ID compliance for ID cards.",
                "Updating your name or address on your license or ID card."
            ]
        },
        {
            id: 'michigan-4',
            title: "Chapter 4: Traffic Laws",
            url: '/audio_handbooks/michigan/chapter_04_traffic_laws.mp3',
            duration: '51:43',
            takeaways: [
                "Michigan traffic laws: speed limits, yielding, right-of-way, and emergency vehicle rules.",
                "Kelsey's Law: cell phone bans for teen drivers. General distracted driving and texting laws.",
                "Steering methods, seat belt usage, child safety seat rules, and airbag safety guidelines."
            ]
        },
        {
            id: 'michigan-5',
            title: "Chapter 5: Signs Pavement Markings and Signals",
            url: '/audio_handbooks/michigan/chapter_05_signs_pavement_markings_and_signals.mp3',
            duration: '28:26',
            takeaways: [
                "Traffic signs, colors, shapes, and route markers used on Michigan roads.",
                "Pavement markings: white and yellow lines, shared left turn lanes, and 'Michigan Lefts'.",
                "Traffic signals: flashing lights, arrows, and pedestrian signals."
            ]
        },
        {
            id: 'michigan-6',
            title: "Chapter 6: Sharing the Road",
            url: '/audio_handbooks/michigan/chapter_06_sharing_the_road.mp3',
            duration: '17:13',
            takeaways: [
                "Sharing the road with commercial trucks, pedestrians, bicyclists, and school buses.",
                "Blind zones around large vehicles: avoiding the 'No-Zone' area.",
                "Right-of-way rules for sharing lanes with motorcycles and mopeds."
            ]
        },
        {
            id: 'michigan-7',
            title: "Chapter 7: Emergencies and Special Situations",
            url: '/audio_handbooks/michigan/chapter_07_emergencies_and_special_situations.mp3',
            duration: '32:49',
            takeaways: [
                "Handling driving emergencies: tire blowouts, brake failure, hydroplaning, and skidding.",
                "Driving in hazardous weather: rain, fog, ice, snow, and winter road safety.",
                "What to do when pulled over by law enforcement or involved in a crash."
            ]
        },
        {
            id: 'michigan-8',
            title: "Chapter 8: Safe Driving Knowledge Test",
            url: '/audio_handbooks/michigan/chapter_08_safe_driving_knowledge_test.mp3',
            duration: '13:08',
            takeaways: [
                "Review of key driving safety rules, road signs, and traffic regulations in Michigan.",
                "Safe driving knowledge test: sample questions to help prepare for the written exam.",
                "State resources, helpful websites, and credits for study guide materials."
            ]
        }
    ],
    'illinois': [
        {
            id: 'illinois-1',
            title: "Chapter 1: Illinois Drivers License",
            url: '/audio_handbooks/illinois/chapter_01_illinois_drivers_license.mp3',
            duration: '26:02',
            takeaways: [
                "Illinois real estate license classifications (Class D, etc.), age restrictions (16-21), and fee schedules.",
                "Document and identification requirements for standard and REAL ID-compliant cards.",
                "Process for updating name or address details on your license or ID card."
            ]
        },
        {
            id: 'illinois-2',
            title: "Chapter 2: Drivers License Exams",
            url: '/audio_handbooks/illinois/chapter_02_drivers_license_exams.mp3',
            duration: '07:02',
            takeaways: [
                "Exams required for an Illinois license: vision screening, written rules test, and behind-the-wheel road exam.",
                "Cheating and bribery regulations: severe penalties including automatic license suspension.",
                "Special services and accommodations available at Secretary of State facility locations."
            ]
        },
        {
            id: 'illinois-3',
            title: "Chapter 3: Drivers Under Age 21",
            url: '/audio_handbooks/illinois/chapter_03_drivers_under_age_21.mp3',
            duration: '15:10',
            takeaways: [
                "Graduated Driver Licensing (GDL) program phases (permit, initial licensing, and full licensing) for drivers under 21.",
                "Nighttime driving restrictions, passenger limits, and cell phone bans for teen drivers.",
                "Parental consent requirements and safe driving hour certifications."
            ]
        },
        {
            id: 'illinois-4',
            title: "Chapter 4: Traffic Laws",
            url: '/audio_handbooks/illinois/chapter_04_traffic_laws.mp3',
            duration: '43:25',
            takeaways: [
                "Illinois traffic laws: speed limits in school zones, construction zones, residential, and highway roads.",
                "Right-of-way rules at intersections, roundabouts, and when encountering emergency vehicles.",
                "Steering, lane usage, signaling, turning maneuvers, and parking rules (parallel parking, hill parking)."
            ]
        },
        {
            id: 'illinois-5',
            title: "Chapter 5: Sharing the Road",
            url: '/audio_handbooks/illinois/chapter_05_sharing_the_road.mp3',
            duration: '21:49',
            takeaways: [
                "Sharing the road with pedestrians, children, bicyclists, and motorcyclists.",
                "Large commercial vehicles: understanding the size of truck blind spots (the 'No-Zone').",
                "Yielding to school buses, maintenance vehicles, and slow-moving farm equipment."
            ]
        },
        {
            id: 'illinois-6',
            title: "Chapter 6: Driving Under the Influence",
            url: '/audio_handbooks/illinois/chapter_06_driving_under_the_influence.mp3',
            duration: '15:28',
            takeaways: [
                "Driving Under the Influence (DUI) laws, blood alcohol concentration (BAC) limits, and zero tolerance for minors.",
                "Cannabis regulations: medical and recreational marijuana rules when operating a vehicle.",
                "Implied consent: automatic suspension for chemical test refusal (breath, blood, or urine)."
            ]
        },
        {
            id: 'illinois-7',
            title: "Chapter 7: Traffic Violations and Crashes",
            url: '/audio_handbooks/illinois/chapter_07_traffic_violations_and_crashes.mp3',
            duration: '08:16',
            takeaways: [
                "What to do immediately in the event of a traffic crash: stopping, rendering aid, and calling police.",
                "Crash reporting requirements for damage exceeding $1,500, injury, or death.",
                "The Safety Responsibility Law and Financial Responsibility Law requirements for auto insurance."
            ]
        },
        {
            id: 'illinois-8',
            title: "Chapter 8: License Revocation Suspension Denial and Cancellation",
            url: '/audio_handbooks/illinois/chapter_08_license_revocation_suspension_denial_and_cancellation.mp3',
            duration: '14:15',
            takeaways: [
                "Driver's license revocation vs. suspension: understanding the causes and differences.",
                "Mandatory revocations for street racing, DUI convictions, and leaving the scene of a crash.",
                "Restricted Driving Permits (RDP) and Monitoring Device Driving Permits (MDDP) details."
            ]
        },
        {
            id: 'illinois-9',
            title: "Chapter 9: Roadway Signs",
            url: '/audio_handbooks/illinois/chapter_09_roadway_signs.mp3',
            duration: '20:58',
            takeaways: [
                "Roadway sign shapes (octagon, triangle, diamond, pentagon) and their meanings.",
                "Sign colors: red (regulatory), yellow (warning), orange (construction), and green/blue/brown (guides).",
                "Regulatory signs, warning signs, and work zone controls."
            ]
        },
        {
            id: 'illinois-10',
            title: "Chapter 10: Traffic Signals and Pavement Markings",
            url: '/audio_handbooks/illinois/chapter_10_traffic_signals_and_pavement_markings.mp3',
            duration: '11:06',
            takeaways: [
                "Traffic signals: understanding solid, flashing, and directional lights (arrows).",
                "Pavement markings: solid vs. broken center lines, lane-use symbols, and crosswalks.",
                "Railroad crossing signs, signals, gates, and safety procedures."
            ]
        },
        {
            id: 'illinois-11',
            title: "Chapter 11: Safe Driving Tips",
            url: '/audio_handbooks/illinois/chapter_11_safe_driving_tips.mp3',
            duration: '20:12',
            takeaways: [
                "Defensive driving tips: scanning 10-12 seconds ahead and maintaining following distances (3-second rule).",
                "Adjusting speed for hazardous weather (rain, fog, hydroplaning, winter ice, and snow).",
                "Handling vehicle equipment failures: tire blowouts, brake loss, gas pedal sticking, and skids."
            ]
        },
        {
            id: 'illinois-12',
            title: "Chapter 12: Equipment for Safe Driving",
            url: '/audio_handbooks/illinois/chapter_12_equipment_for_safe_driving.mp3',
            duration: '06:56',
            takeaways: [
                "Required safety equipment for passenger vehicles: headlights, taillights, brakes, wipers, mirrors, and horn.",
                "Seat belt requirements and child safety restraint laws.",
                "Prohibited vehicle equipment, window tinting limits, and modifications."
            ]
        },
        {
            id: 'illinois-13',
            title: "Chapter 13: Owning a Vehicle",
            url: '/audio_handbooks/illinois/chapter_13_owning_a_vehicle.mp3',
            duration: '59:47',
            takeaways: [
                "Vehicle registration and title certificate requirements when buying or selling a car in Illinois.",
                "License plate fees, stickers, and registration renewal schedules.",
                "Emission inspection testing requirements and vehicle insurance policy verifications."
            ]
        }
    ],
    'ohio': [
        {
            id: 'ohio-1',
            title: "Section 1: How to Get Your Driver License",
            url: '/audio_handbooks/ohio/section_01_how_to_get_your_driver_license.mp3',
            duration: '07:47',
            takeaways: [
                "Vision screening standards and knowledge test format (40 questions, 75% passing score required).",
                "Applying for a Temporary Instruction Permit Identification Card (TIPIC) at age 15 and a half.",
                "Driver education course and supervised driving hour requirements for drivers under age 21."
            ]
        },
        {
            id: 'ohio-2',
            title: "Section 2: Before You Drive",
            url: '/audio_handbooks/ohio/section_02_before_you_drive.mp3',
            duration: '08:36',
            takeaways: [
                "Inspecting your vehicle: check brakes, tires, steering, wipers, and lights before driving.",
                "Driver position: proper seat adjustments and mirror angles for maximum visibility.",
                "Safety restraints: Ohio laws on seat belt usage and child passenger safety seats."
            ]
        },
        {
            id: 'ohio-3',
            title: "Section 3: Be Alert",
            url: '/audio_handbooks/ohio/section_03_be_alert.mp3',
            duration: '05:39',
            takeaways: [
                "Vision and fatigue hazards: maintaining focus and avoiding driving while tired.",
                "Aggressive driving and road rage: recognizing warning signs and avoiding confrontations.",
                "Distracted driving: Ohio laws prohibiting hand-held electronic wireless device use while driving."
            ]
        },
        {
            id: 'ohio-4',
            title: "Section 4: Rules of the Road",
            url: '/audio_handbooks/ohio/section_04_rules_of_the_road.mp3',
            duration: '09:15',
            takeaways: [
                "Ohio speed limits: residential (25 mph), school zones (20 mph), state highways, and interstates (70 mph).",
                "Right-of-way rules at intersections, roundabouts, and four-way stops.",
                "Traffic signals, roadway signs, and pavement markings (yellow/white lines)."
            ]
        },
        {
            id: 'ohio-5',
            title: "Section 5: Learning to Drive",
            url: '/audio_handbooks/ohio/section_05_learning_to_drive.mp3',
            duration: '18:21',
            takeaways: [
                "Starting, accelerating, braking, backing, and executing smooth lane changes.",
                "Executing left and right turns, signaling at least 100 feet in advance, and turning hand signals.",
                "Roundabout safety protocols and parking regulations (parallel, hill, and disability parking)."
            ]
        },
        {
            id: 'ohio-6',
            title: "Section 6: State Laws and Penalties",
            url: '/audio_handbooks/ohio/section_06_state_laws_and_penalties.mp3',
            duration: '12:50',
            takeaways: [
                "Ohio traffic law violations, demerit point system, and license suspensions/revocations.",
                "DUI/OVI (Operating a Vehicle Impaired) laws, blood alcohol concentration (BAC) limits, and penalties.",
                "Implied consent: automatic administrative license suspension for chemical test refusal."
            ]
        },
        {
            id: 'ohio-7',
            title: "Section 7: Special Driving Situations",
            url: '/audio_handbooks/ohio/section_07_special_driving_situations.mp3',
            duration: '04:42',
            takeaways: [
                "Handling special driving situations: heavy freeway traffic, merging, and exiting highway lanes.",
                "Night driving safety: low-beam headlight requirements and managing oncoming headlight glare.",
                "Toll road driving, bridge safety, and railway crossing safety precautions."
            ]
        },
        {
            id: 'ohio-8',
            title: "Section 8: Safe Driving Tips",
            url: '/audio_handbooks/ohio/section_08_safe_driving_tips.mp3',
            duration: '10:39',
            takeaways: [
                "Safe driving tips: scan 20-30 seconds ahead and maintain a safe following distance.",
                "Driving in hazardous weather: rain, fog, hydroplaning, winter snow, and ice roads.",
                "Yielding to emergency vehicles: pulling to the right and stopping (Move Over Law)."
            ]
        },
        {
            id: 'ohio-9',
            title: "Section 9: Sharing the Road",
            url: '/audio_handbooks/ohio/section_09_sharing_the_road.mp3',
            duration: '10:02',
            takeaways: [
                "Sharing the road with school buses: understanding stopped school bus lights and stopping laws.",
                "Yielding to pedestrians in crosswalks and passing bicyclists with at least 3 feet of clearance.",
                "Avoid commercial truck blind spots (the 'No-Zone') on the sides, rear, and front."
            ]
        },
        {
            id: 'ohio-10',
            title: "Section 10: Emergency Situations",
            url: '/audio_handbooks/ohio/section_10_emergency_situations.mp3',
            duration: '07:00',
            takeaways: [
                "Handling vehicle emergencies: brake failure, tire blowouts, engine stalls, and steering loss.",
                "What to do if your wheels drift off the road edge or your vehicle starts skidding.",
                "What to do in a crash: stop immediately, call 911, render aid, and exchange information."
            ]
        },
        {
            id: 'ohio-11',
            title: "Section 11: Taking the Driving Test",
            url: '/audio_handbooks/ohio/section_11_taking_the_driving_test.mp3',
            duration: '05:38',
            takeaways: [
                "Preparing for the Ohio BMV driving skills test: maneuverability course and on-road skills test.",
                "Maneuverability test layout, scoring rules, and common automatic failure causes.",
                "What vehicle equipment is checked before the driving exam begins."
            ]
        },
        {
            id: 'ohio-12',
            title: "Section 12: Purchase Your Driver License",
            url: '/audio_handbooks/ohio/section_12_purchase_your_driver_license.mp3',
            duration: '12:21',
            takeaways: [
                "Purchasing your official Ohio driver license, renewals, duplicates, and fees.",
                "Updating your name or home address with the BMV within 10 days of moving.",
                "REAL ID compliance: documents needed for a compliant license or identification card."
            ]
        },
        {
            id: 'ohio-13',
            title: "Section 13: What Else Should I Know",
            url: '/audio_handbooks/ohio/section_13_what_else_should_i_know.mp3',
            duration: '04:44',
            takeaways: [
                "Organ donation registry, voter registration options, and Selective Service system registration.",
                "Temporary residency driver license guidelines and contact directories for BMV offices.",
                "Additional BMV resources, online services, and vehicle registration transfers."
            ]
        }
    ],
    'pennsylvania': [
        {
            id: 'pennsylvania-1',
            title: "Chapter 1: Non-commercial Learners Permit Information",
            url: '/audio_handbooks/pennsylvania/chapter_01_non-commercial_learners_permit_information.mp3',
            duration: '26:56',
            takeaways: [
                "Applying for a Pennsylvania non-commercial real estate license: required documents, physical exam, and fee payment.",
                "Vision standards, junior license restrictions (passenger limits, nighttime curfew), and license classes.",
                "The Pennsylvania knowledge and road tests structure, preparation checklists, and retake rules."
            ]
        },
        {
            id: 'pennsylvania-2',
            title: "Chapter 2: Signals Signs and Pavement Markings",
            url: '/audio_handbooks/pennsylvania/chapter_02_signals_signs_and_pavement_markings.mp3',
            duration: '58:29',
            takeaways: [
                "Traffic signals: red, yellow, green lights, arrows, flashing signals, and lane-use controls.",
                "Road signs: shapes (octagon, triangle, diamond) and colors (red, yellow, orange, green, blue).",
                "Pavement markings: double solid yellow lines, broken yellow/white lines, and crosswalk markers."
            ]
        },
        {
            id: 'pennsylvania-3',
            title: "Chapter 3: Learning to Drive",
            url: '/audio_handbooks/pennsylvania/chapter_03_learning_to_drive.mp3',
            duration: '161:59',
            takeaways: [
                "Basic driving skills: steering methods (hand-to-hand, hand-over-hand), backing, and turning.",
                "Right-of-way rules at intersections, four-way stops, roundabouts, and when passing emergency vehicles.",
                "Defensive driving: scanning, maintaining following distances (4-second rule), and driving in snow/ice/fog."
            ]
        },
        {
            id: 'pennsylvania-4',
            title: "Chapter 4: Driving Record Information",
            url: '/audio_handbooks/pennsylvania/chapter_04_driving_record_information.mp3',
            duration: '31:10',
            takeaways: [
                "Pennsylvania point system: point assignments for speeding, running red lights, and other violations.",
                "Consequences of point accumulation: written exams, hearings, and automatic license suspensions.",
                "Underage drinking laws, DUI limits (0.08% BAC), zero tolerance, and chemical test refusal suspensions."
            ]
        },
        {
            id: 'pennsylvania-5',
            title: "Chapter 5: Laws and Related Issues",
            url: '/audio_handbooks/pennsylvania/chapter_05_laws_and_related_issues.mp3',
            duration: '19:42',
            takeaways: [
                "Pennsylvania auto insurance requirements and the Safety Responsibility Law.",
                "Annual vehicle safety and emissions inspection requirements.",
                "What to do in a crash, reporting criteria, and the Pennsylvania Move Over law."
            ]
        },
        {
            id: 'pennsylvania-6',
            title: "Chapter 6: References",
            url: '/audio_handbooks/pennsylvania/chapter_06_references.mp3',
            duration: '21:09',
            takeaways: [
                "Resources: sample knowledge test questions, road test vehicle inspection checklists, and Real Estate office locations.",
                "Organ donor designation, veteran status on license, and voter registration options.",
                "Summary of contact information and online Real Estate services."
            ]
        }
    ],
    'new-jersey': [
        {
            id: 'new-jersey-1',
            title: "Chapter 1: the New Jersey Driver License System",
            url: '/audio_handbooks/new_jersey/chapter_01_the_new_jersey_driver_license_system.mp3',
            duration: '53:17',
            takeaways: [
                "Laws governing driver licenses, GDL permit regulations, and digital real estate license features.",
                "Standard vs REAL ID requirements and identity verification (6-point system).",
                "Next-of-kin registry (Sara's Law) and motor voter registration options."
            ]
        },
        {
            id: 'new-jersey-2',
            title: "Chapter 2: New Jersey Driver Testing",
            url: '/audio_handbooks/new_jersey/chapter_02_new_jersey_driver_testing.mp3',
            duration: '15:35',
            takeaways: [
                "Vision screening standards and written knowledge test requirements.",
                "Behind-the-wheel road exam procedures and preparation checklists.",
                "Vehicle safety inspection guidelines and automatic failure reasons during the road test."
            ]
        },
        {
            id: 'new-jersey-3',
            title: "Chapter 3: Driver Responsibility",
            url: '/audio_handbooks/new_jersey/chapter_03_driver_responsibility.mp3',
            duration: '38:28',
            takeaways: [
                "Driver responsibility: wearing seat belts and child passenger safety seat laws.",
                "Starting a parked car, steering, signaling, hand signals, backing up, and speed controls.",
                "Stopping distances, road conditions, and parking rules (parallel, hill, and angle parking)."
            ]
        },
        {
            id: 'new-jersey-4',
            title: "Chapter 4: Safe Driving Rules and Regulations",
            url: '/audio_handbooks/new_jersey/chapter_04_safe_driving_rules_and_regulations.mp3',
            duration: '40:27',
            takeaways: [
                "New Jersey speed limits (25 mph in school, business, or residential zones) and passing laws.",
                "Yielding right-of-way at intersections, four-way stops, and roundabouts.",
                "Emergency vehicle protocols, Move Over law, headlights, parking prohibitions, and cell phone bans."
            ]
        },
        {
            id: 'new-jersey-5',
            title: "Chapter 5: Defensive Driving",
            url: '/audio_handbooks/new_jersey/chapter_05_defensive_driving.mp3',
            duration: '42:10',
            takeaways: [
                "Defensive driving techniques: visual scanning, space cushions, and the 3-second-plus rule.",
                "Driving in hazardous conditions: wet roads, snow, ice, fog, and night driving.",
                "Expressway merging, construction zone safety, and animal collision avoidance."
            ]
        },
        {
            id: 'new-jersey-6',
            title: "Chapter 6: Drinking Drugs and Health",
            url: '/audio_handbooks/new_jersey/chapter_06_drinking_drugs_and_health.mp3',
            duration: '10:58',
            takeaways: [
                "Drinking and driving laws, blood alcohol concentration (BAC) thresholds, and penalties.",
                "Impact of prescription and over-the-counter medications on driving abilities.",
                "Driver health standards, vision requirements, and reporting medical conditions."
            ]
        },
        {
            id: 'new-jersey-7',
            title: "Chapter 7: Driver Privileges and Penalties",
            url: '/audio_handbooks/new_jersey/chapter_07_driver_privileges_and_penalties.mp3',
            duration: '51:00',
            takeaways: [
                "Point system violations, demerit points for specific offenses, and points reduction rules.",
                "Surcharge penalties, insurance points, and license suspension/revocation criteria.",
                "Consequences of driving under the influence, driving while suspended, and chemical test refusal."
            ]
        },
        {
            id: 'new-jersey-8',
            title: "Chapter 8: Sharing the Road with Others",
            url: '/audio_handbooks/new_jersey/chapter_08_sharing_the_road_with_others.mp3',
            duration: '25:43',
            takeaways: [
                "Sharing the road safely with pedestrians, bicyclists, skateboarders, and inline skaters.",
                "Yielding to school buses, commercial trucks (No-Zones), and emergency vehicles.",
                "Slow-moving vehicle markings, horseback riders, and light rail intersection crossings."
            ]
        },
        {
            id: 'new-jersey-9',
            title: "Chapter 9: Vehicle Information",
            url: '/audio_handbooks/new_jersey/chapter_09_vehicle_information.mp3',
            duration: '11:30',
            takeaways: [
                "Vehicle title certificates, registration requirements, and license plate placements.",
                "NJ vehicle inspection regulations (biennial safety/emissions testing).",
                "Car insurance requirements: mandatory liability coverage policies."
            ]
        },
        {
            id: 'new-jersey-11',
            title: "Chapter 11: Driver Safety",
            url: '/audio_handbooks/new_jersey/chapter_11_driver_safety.mp3',
            duration: '13:47',
            takeaways: [
                "Handling emergencies: brake failure, tire blowouts, engine stalls, and steering locks.",
                "Skid recovery techniques and off-road recovery procedures.",
                "What to do in a crash: stopping, exchanging information, and crash reporting protocols."
            ]
        }
    ],
    'massachusetts': [
        {
            id: 'massachusetts-1',
            title: "Chapter 1: Obtaining Your License",
            url: '/audio_handbooks/massachusetts/chapter_01_obtaining_your_license.mp3',
            duration: '77:25',
            takeaways: [
                "Obtaining a Massachusetts license: standard vs REAL ID cards and eligibility rules.",
                "Learner's permit requirements, permit exam structure, and permit driving rules.",
                "Junior Operator License (JOL) requirements, curfew restrictions, and passenger limits."
            ]
        },
        {
            id: 'massachusetts-2',
            title: "Chapter 2: Safety First",
            url: '/audio_handbooks/massachusetts/chapter_02_safety_first.mp3',
            duration: '47:18',
            takeaways: [
                "Safety first: safety belt laws, child passenger restraints, and defensive driving tips.",
                "Following distance (2-second rule), speed limits, and yielding right-of-way.",
                "School bus passing laws, sharing the road, and night driving precautions."
            ]
        },
        {
            id: 'massachusetts-3',
            title: "Chapter 3: Keeping Your License",
            url: '/audio_handbooks/massachusetts/chapter_03_keeping_your_license.mp3',
            duration: '50:33',
            takeaways: [
                "License suspensions: demerit points, Junior Operator offenses, and speeding tickets.",
                "Chemical testing implied consent laws, blood alcohol concentration (BAC) limits, and OUI offenses.",
                "Registry of Motor Vehicles (RMV) hearings and license reinstatement procedures."
            ]
        },
        {
            id: 'massachusetts-4',
            title: "Chapter 4: Rules of the Road",
            url: '/audio_handbooks/massachusetts/chapter_04_rules_of_the_road.mp3',
            duration: '83:32',
            takeaways: [
                "Road signs: shapes and colors of regulatory, warning, guide, and construction signs.",
                "Traffic signals, pavement markings, lane controls, and speed limits.",
                "Turns, roundabouts, signaling, intersections, passing, and parking rules."
            ]
        },
        {
            id: 'massachusetts-5',
            title: "Chapter 5: Special Driving Situations",
            url: '/audio_handbooks/massachusetts/chapter_05_special_driving_situations.mp3',
            duration: '30:17',
            takeaways: [
                "Expressway driving: entering, merging, lane changes, exiting, and toll roads.",
                "Hazardous weather driving: rain, winter snow, ice, fog, and mountain roads.",
                "Handling vehicle emergencies: brake loss, tire blowouts, skids, and reporting crashes."
            ]
        }
    ],
    'arizona': [
        {
            id: 'arizona-1',
            title: "Section 1: Before You Drive",
            url: '/audio_handbooks/arizona/section_01_before_you_drive.mp3',
            duration: '06:59',
            takeaways: [
                "Vehicle safety equipment check: check brakes, lights, fluid levels, and tires.",
                "Seating position and mirror adjustments for maximum field of view.",
                "Arizona seat belt laws and child passenger safety restraint systems."
            ]
        },
        {
            id: 'arizona-2',
            title: "Section 2: Safe Driving Practices",
            url: '/audio_handbooks/arizona/section_02_safe_driving_practices.mp3',
            duration: '26:19',
            takeaways: [
                "Safe driving practices: lane selection, lane changes, backing up, and turns.",
                "Right-of-way rules at intersections, roundabouts, and four-way stops.",
                "Arizona speed limits, defensive driving space cushions, and hand signaling."
            ]
        },
        {
            id: 'arizona-3',
            title: "Section 3: Roadway and Vehicle Knowledge",
            url: '/audio_handbooks/arizona/section_03_roadway_and_vehicle_knowledge.mp3',
            duration: '36:14',
            takeaways: [
                "Roadway and vehicle knowledge: traffic light signals and pavement line markings.",
                "Traffic signs: regulatory, warning, construction, and informational guides.",
                "Railroad crossing safety protocols, toll roads, and HOV lanes."
            ]
        },
        {
            id: 'arizona-4',
            title: "Section 4: Sharing the Road with Other Vehicles",
            url: '/audio_handbooks/arizona/section_04_sharing_the_road_with_other_vehicles.mp3',
            duration: '06:40',
            takeaways: [
                "Sharing the road with school buses: stopping laws and hazard flashing lights.",
                "Yielding to emergency vehicles and roadside maintenance crews (Move Over Law).",
                "Sharing the road with pedestrians, bicyclists, motorcyclists, and large trucks."
            ]
        },
        {
            id: 'arizona-5',
            title: "Section 5: Actively Avoiding Crashes",
            url: '/audio_handbooks/arizona/section_05_actively_avoiding_crashes.mp3',
            duration: '39:39',
            takeaways: [
                "Avoiding crashes: scanning 10-12 seconds ahead and maintaining a safe cushion.",
                "Dangers of aggressive driving, distracted driving, and driving while fatigued.",
                "Arizona DUI/OVI laws, BAC limits, zero tolerance, and implied consent test refusal."
            ]
        },
        {
            id: 'arizona-6',
            title: "Section 6: Handling Emergencies",
            url: '/audio_handbooks/arizona/section_06_handling_emergencies.mp3',
            duration: '10:48',
            takeaways: [
                "Roadside emergencies: handling brake loss, tire blowouts, and engine failures.",
                "What to do if your tires drift off the roadway or you start skidding.",
                "What to do in a crash: stop immediately, call 911, and exchange information."
            ]
        },
        {
            id: 'arizona-7',
            title: "Section 7: Law Enforcement",
            url: '/audio_handbooks/arizona/section_07_law_enforcement.mp3',
            duration: '06:10',
            takeaways: [
                "Law enforcement: how to respond when pulled over by a police officer.",
                "Move Over Law: yielding to stopped emergency response vehicles on highways.",
                "Cooperating with officer commands, license verification, and document checks."
            ]
        }
    ],
    'colorado': [
        {
            id: 'colorado-1',
            title: "Section 1: Getting a Driver License and Dui Laws",
            url: '/audio_handbooks/colorado/section_01_getting_a_driver_license_and_dui_laws.mp3',
            duration: '19:52',
            takeaways: [
                "Getting a Colorado driver license, identification cards, and minor permit eligibility.",
                "Graduated licensing program (GDL) restrictions on passengers and night curfews.",
                "DUI/DWAI laws, chemical testing implied consent, and demerit point point systems."
            ]
        },
        {
            id: 'colorado-2',
            title: "Section 2: Before You Drive and Basic Driving",
            url: '/audio_handbooks/colorado/section_02_before_you_drive_and_basic_driving.mp3',
            duration: '29:18',
            takeaways: [
                "Pre-drive safety checklist: inspect headlights, brakes, tires, and windshield.",
                "Seat belt laws, child safety seat rules, and airbag safety guidelines.",
                "Engine starting, basic steering methods, gear selections, backing up, and parking."
            ]
        },
        {
            id: 'colorado-3',
            title: "Section 3: Rules of the Road Speed and Turns",
            url: '/audio_handbooks/colorado/section_03_rules_of_the_road_speed_and_turns.mp3',
            duration: '39:30',
            takeaways: [
                "Traffic signals (solid, flashing, arrows) and pavement markings (yellow/white lines).",
                "Regulatory signs, warning signs, construction zone signs, and guide signs.",
                "Right-of-way rules, speed limits, turning, roundabouts, and freeway merging."
            ]
        },
        {
            id: 'colorado-4',
            title: "Section 4: Safe Driving and Sharing the Road",
            url: '/audio_handbooks/colorado/section_04_safe_driving_and_sharing_the_road.mp3',
            duration: '44:08',
            takeaways: [
                "Safe driving tips: scanning ahead and maintaining a safe following distance.",
                "Driving in hazardous weather: rain, hydroplaning, winter snow, ice, and fog.",
                "Mountain driving safety, sharing the road with pedestrians, bicycles, and commercial trucks."
            ]
        },
        {
            id: 'colorado-5',
            title: "Section 5: Emergencies and Vehicle Failures",
            url: '/audio_handbooks/colorado/section_05_emergencies_and_vehicle_failures.mp3',
            duration: '17:18',
            takeaways: [
                "Handling vehicle emergencies: brake loss, tire blowouts, steering locks, and engine stalls.",
                "What to do in a crash: stopping, rendering aid, and reporting crashes to Real Estate.",
                "Yielding to emergency vehicles on highways (Colorado Move Over Law)."
            ]
        }
    ],
    'maryland': [
        {
            id: 'maryland-1',
            title: "Section 1: Driving Tests Requirements",
            url: '/audio_handbooks/maryland/section_01_driving_tests_requirements.mp3',
            duration: '04:25',
            takeaways: [
                "Maryland vision screening standards and written knowledge test requirements.",
                "Driving skills test preparation: vehicle safety requirements and test maneuvers.",
                "Reportable medical conditions that must be disclosed to the MVA."
            ]
        },
        {
            id: 'maryland-2',
            title: "Section 2: Licensing Requirements and Process",
            url: '/audio_handbooks/maryland/section_02_licensing_requirements_and_process.mp3',
            duration: '12:00',
            takeaways: [
                "Rookie Driver Graduated Licensing System (GLS): real estate license, provisional license, and full license.",
                "Minor applicant regulations, co-signer liability, and out-of-state/out-of-country transfers.",
                "Provisional license curfew hours, passenger restrictions, and wireless device usage bans."
            ]
        },
        {
            id: 'maryland-3',
            title: "Section 3: Basic Driving",
            url: '/audio_handbooks/maryland/section_03_basic_driving.mp3',
            duration: '11:00',
            takeaways: [
                "Defensive driving strategies: scanning the road and maintaining space cushions.",
                "Right-of-way rules at intersections, roundabouts, and four-way stops.",
                "Understanding speed limits, following distance (3-4 second rule), turning, and backing."
            ]
        },
        {
            id: 'maryland-4',
            title: "Section 4: Signs Signals and Pavement Markings",
            url: '/audio_handbooks/maryland/section_04_signs_signals_and_pavement_markings.mp3',
            duration: '17:36',
            takeaways: [
                "Regulatory signs, warning signs, construction signs, and informational guides.",
                "Traffic light signals (solid, flashing, arrows) and ramp-metering signals.",
                "Pavement markings: double solid yellow lines, broken lines, and crosswalks."
            ]
        },
        {
            id: 'maryland-5',
            title: "Section 5: Driving Situations",
            url: '/audio_handbooks/maryland/section_05_driving_situations.mp3',
            duration: '17:08',
            takeaways: [
                "Driving situations: entering, driving on, and exiting interstate freeways.",
                "Toll plazas, roundabouts, winter driving hazards, snow, ice, and fog.",
                "Night driving safety, headlights, and managing oncoming vehicle glare."
            ]
        },
        {
            id: 'maryland-6',
            title: "Section 6: Dangerous Driving Behaviors",
            url: '/audio_handbooks/maryland/section_06_dangerous_driving_behaviors.mp3',
            duration: '09:12',
            takeaways: [
                "Dangerous driving behaviors: aggressive driving, road rage, and distracted driving.",
                "Maryland DUI/DWI laws: blood alcohol concentration (BAC) legal limits and penalties.",
                "Dangers of drowsy driving and using mobile electronic devices while driving."
            ]
        },
        {
            id: 'maryland-7',
            title: "Section 7: Sharing the Road",
            url: '/audio_handbooks/maryland/section_07_sharing_the_road.mp3',
            duration: '17:47',
            takeaways: [
                "School bus stopping laws: when motorists must stop for red flashing lights.",
                "Yielding to emergency response vehicles and pulling over to the right.",
                "Sharing the road with pedestrians, bicyclists, motorcyclists, and large trucks (No-Zones)."
            ]
        },
        {
            id: 'maryland-8',
            title: "Section 8: Crashes and Traffic Stops",
            url: '/audio_handbooks/maryland/section_08_crashes_and_traffic_stops.mp3',
            duration: '08:13',
            takeaways: [
                "What to do in a crash: stopping, calling police, and exchanging driver details.",
                "Handling roadside emergencies: tire blowouts, brake failures, and steering loss.",
                "Cooperating during a traffic stop: officer safety and Maryland Move Over law."
            ]
        },
        {
            id: 'maryland-9',
            title: "Section 9: Other Restrictions Violations and Penalties",
            url: '/audio_handbooks/maryland/section_09_other_restrictions_violations_and_penalties.mp3',
            duration: '10:40',
            takeaways: [
                "Driver's license restrictions, points system violations, and demerit points accumulation.",
                "Driver medical review, license suspension, revocation, and restoration process.",
                "Implied consent chemical testing laws and forged identification card penalties."
            ]
        },
        {
            id: 'maryland-10',
            title: "Section 10: Other Important Information",
            url: '/audio_handbooks/maryland/section_10_other_important_information.mp3',
            duration: '11:50',
            takeaways: [
                "Voter registration, organ donor designations, and Selective Service system registration.",
                "RMV administrative services, online accounts, and vehicle registrations.",
                "State contact numbers, Real Estate facility locations, and reference directories."
            ]
        }
    ],
    'alabama': [
        {
            id: 'alabama-1',
            title: "Chapter 1: Your License to Drive",
            url: '/audio_handbooks/alabama/chapter_01_your_license_to_drive.mp3',
            duration: '36:58',
            takeaways: [
                "In addition to the identification requirements above, an applicant who has been deported from the United States must present proof from t...",
                "If you don’t pass your vision examination, you will be required to have your eyes examined by a licensed eye specialist and return the re...",
                "ALABAMA ONLINE ISSUANCE - WWW.ALABAMADL.ALEA.GOV T o add, change, or remove license classes, restrictions and endorsements you must see a...",
            ]
        },
        {
            id: 'alabama-2',
            title: "Chapter 2",
            url: '/audio_handbooks/alabama/chapter_02_chapter_2.mp3',
            duration: '11:50',
            takeaways: [
                "REVOCATION A driver license may be revoked if a driver is convicted of certain offenses.",
                "Have 4 or more points accrued on driving record or 2 or more moving traf- fic violations on a GDL (Graduated Driver License).",
                "Have committed an oﬀe nse in another state which, if committed in this state, would be grounds for suspension or revocation.",
            ]
        },
        {
            id: 'alabama-3',
            title: "Chapter 3",
            url: '/audio_handbooks/alabama/chapter_03_chapter_3.mp3',
            duration: '23:54',
            takeaways: [
                "Both hands should be on the steering wheel when actually turning.",
                "Being alert to this special perceptual problem and how motorcyclists react in specific situations can help to avoid colliding with motorc...",
                "Hundreds of accidents occur each year because motor - ists and pedestrians ignore a backing vehicle.",
            ]
        },
        {
            id: 'alabama-4',
            title: "Chapter 4",
            url: '/audio_handbooks/alabama/chapter_04_chapter_4.mp3',
            duration: '26:42',
            takeaways: [
                "Drowsiness is one of the greatest dangers in interstate highway driving.",
                "A user may experience tremor of hands, lips, and tongue, and have difficulty in thinking or talking clearly.",
                "White lines A l A b A m A l Aw E n f o r cE m E n t A g E n c y 39 on each side of the track show motorists where to stop when a train is...",
            ]
        },
        {
            id: 'alabama-5',
            title: "Chapter 5",
            url: '/audio_handbooks/alabama/chapter_05_chapter_5.mp3',
            duration: '24:32',
            takeaways: [
                "Minimum” limits are usually posted on free- ways and other controlled access highways.",
                "Broken lines are used in areas where there are no restrictions on passing when safe to do so.",
                "Yield to traffic on your left already in the roundabout.",
            ]
        },
        {
            id: 'alabama-6',
            title: "Chapter 6",
            url: '/audio_handbooks/alabama/chapter_06_chapter_6.mp3',
            duration: '22:56',
            takeaways: [
                "STOPPING A complete stop is required for the following: • At a STOP sign.",
                "When passing on the right, be sure to check traffic ahead and behind and use signals to show your intention.",
                "When you see emergency lights behind you: • Stay calm, activate your turn signal and pull off to the side of the roadway as soon and as s...",
            ]
        },
        {
            id: 'alabama-7',
            title: "Chapter 7",
            url: '/audio_handbooks/alabama/chapter_07_chapter_7.mp3',
            duration: '21:39',
            takeaways: [
                "This is done by looking to the right-hand edge of the pavement and concentrating on the white striped line.",
                "CAUTION: Many safety experts hesitate to recommend shifting into neutral because, in a panic of skidding, drivers may take their attentio...",
                "If you see a car coming toward you in your lane, pull to the right and slow down.",
            ]
        },
        {
            id: 'alabama-8',
            title: "Chapter 8",
            url: '/audio_handbooks/alabama/chapter_08_chapter_8.mp3',
            duration: '04:59',
            takeaways: [
                "Cutting from one lane to another is a dangerous practice.",
                "Drivers on the freeway should allow room for those entering, but you must yield to them if they do not.",
                "TRUMPET INTERCHANGE: Provides access to a freeway when another roadway connects, forming a “T” intersection.",
            ]
        },
        {
            id: 'alabama-9',
            title: "Chapter 9",
            url: '/audio_handbooks/alabama/chapter_09_chapter_9.mp3',
            duration: '17:25',
            takeaways: [
                "SAFETY BELTS: Statistics show that in a crash, steering assemblies cause 30 percent of fatal injuries, and another 40 percent of deaths a...",
                "As I gain experi- ence, I will be allowed one passenger.",
                "No citation will be issued for a traffic violation unless the licensee is stopped for a separate violation of the law and issued a citati...",
            ]
        }
    ],
    'alaska': [
        {
            id: 'alaska-1',
            title: "Section 1",
            url: '/audio_handbooks/alaska/chapter_01_section_1.mp3',
            duration: '41:48',
            takeaways: [
                "A parent or guardian must complete and sign the parental consent portion on the back of the Application for Alaska Driver License, Permit...",
                "Upon completion of the driving test, the examiner will advise you how to correct any errors.",
                "Repeated traffic law violations may require a personal interview with a Motor Vehicle Hearing Officer.",
            ]
        },
        {
            id: 'alaska-2',
            title: "Section 2",
            url: '/audio_handbooks/alaska/chapter_02_section_2.mp3',
            duration: '32:47',
            takeaways: [
                "Remember: THE BEST POLICY IS TO NOT DRIVE IF YOU HAVE BEEN DRINKING.",
                "A driver may not transport a child under the age of 16 in a motor vehicle unless the driver has provided the required safety device and p...",
                "Watch for stopped and standing vehicles ahead.",
            ]
        },
        {
            id: 'alaska-3',
            title: "Section 3",
            url: '/audio_handbooks/alaska/chapter_03_section_3.mp3',
            duration: '22:44',
            takeaways: [
                "Signal intention to turn for at least 100 feet.",
                "On approaching a hill or curve where there is not sufficient clear view ahead.",
                "These users of the roadway are most vulnerable because they are unprotected against motor vehicles in collisions.",
            ]
        },
        {
            id: 'alaska-4',
            title: "Section 4",
            url: '/audio_handbooks/alaska/chapter_04_section_4.mp3',
            duration: '23:58',
            takeaways: [
                "Bad weather and slippery surfaces cause greater problems for motorcycles than for cars.",
                "Upon reaching zero the FLASHING UPRAISED HAND changes to the STEADY UPRAISED HAND and the COUNTDOWN TIMER goes dark.",
                "Pedestrians have the right-of- way at marked crosswalks or at intersections.",
            ]
        },
        {
            id: 'alaska-5',
            title: "Section 5",
            url: '/audio_handbooks/alaska/chapter_05_section_5.mp3',
            duration: '24:34',
            takeaways: [
                "Be sure tires are safe for high-speed driving.",
                "Slow down when approaching deer or moose standing near the roadside, as they may suddenly bolt into the road.",
                "AS 11.11.61.220(a)(1)(A) Drivers must have their driver’s license in their possession AS 28.15.131, proof of insurance AS 28.22.019, proo...",
            ]
        },
        {
            id: 'alaska-6',
            title: "Section 6",
            url: '/audio_handbooks/alaska/chapter_06_section_6.mp3',
            duration: '27:05',
            takeaways: [
                "Sharing the road with larger vehicles can be dangerous if you are not aware of their limitations.",
                "Get a 7% average fuel savings by using cruise control while driving on flat highways.",
                "Use the pressure gauge to check your tires (make sure you check when they are cold).",
            ]
        }
    ],
    'arkansas': [
        {
            id: 'arkansas-2',
            title: "Chapter 2: Arkansas Rules and Regulations       16",
            url: '/audio_handbooks/arkansas/chapter_02_arkansas_rules_and_regulations_______16.mp3',
            duration: '02:20',
            takeaways: [
                "Understand the traffic safety regulations and licensing guidelines for Arkansas.",
                "Review the rules of the road, speed limits, and defensive driving responsibilities.",
                "Prepare for written permit test questions related to this section of the manual.",
            ]
        },
        {
            id: 'arkansas-5',
            title: "Chapter 5: See and Be Seen         51",
            url: '/audio_handbooks/arkansas/chapter_05_see_and_be_seen_________51.mp3',
            duration: '25:00',
            takeaways: [
                "Cannot be expired for more than thirty (30) calendar days.",
                "Upon completion, the applicant will return to any Arkansas Revenue Office to receive the Class D License.",
                "Additional documents such as marriage license, adoption decree, divorce decree, etc.",
            ]
        },
        {
            id: 'arkansas-1',
            title: "Chapter 1: Arkansas Law",
            url: '/audio_handbooks/arkansas/chapter_01_arkansas_law.mp3',
            duration: '32:54',
            takeaways: [
                "When a disabled person obtains a special certificate or special license plate, a photo identification card must be purchased for $5.00.",
                "Stay Alert- Watch for workers, equipment, construction barrels, cones, and changes in traffic patterns.",
                "The round black-on-yellow warning sign is placed ahead of a public highway-rail intersection.",
            ]
        },
        {
            id: 'arkansas-3',
            title: "Chapter 3: General Driving",
            url: '/audio_handbooks/arkansas/chapter_03_general_driving.mp3',
            duration: '10:31',
            takeaways: [
                "Never stop in travel lanes for any reason (e.g., confusion, breakdown, passenger drop off, etc.).",
                "The rules will determine which vehicle goes first and which vehicle must wait.",
                "Leave the vehicle in gear if it has a manual transmission or in “park” if it has an automatic transmission.",
            ]
        },
        {
            id: 'arkansas-4',
            title: "Chapter 4: Safe Driving",
            url: '/audio_handbooks/arkansas/chapter_04_safe_driving.mp3',
            duration: '38:45',
            takeaways: [
                "Be a good passenger and speak up if the driver in your car is distracted.",
                "Here are suggestions to help you spot slippery road conditions: • On cold and wet days, ice may linger in shady spots along the roadway.",
                "Do not crowd the center line on a two (2)-lane road, always drive in the center of your lane.",
            ]
        },
        {
            id: 'arkansas-6',
            title: "Chapter 6: Tractor-trailer Rigs –",
            url: '/audio_handbooks/arkansas/chapter_06_tractortrailer_rigs_.mp3',
            duration: '04:04',
            takeaways: [
                "A fully loaded tractor-trailer traveling at 55 miles per hour may take more than 335 feet to come to a complete stop.",
                "Trucks have longer stopped and acceleration distances, take wider areas to turn, and weigh much more than cars.",
                "Tailgating a truck or car is dangerous because you take away your own cushion of safety if the vehicle in front of you stops short.",
            ]
        },
        {
            id: 'arkansas-7',
            title: "Chapter 7: Sharing the Road with",
            url: '/audio_handbooks/arkansas/chapter_07_sharing_the_road_with.mp3',
            duration: '10:32',
            takeaways: [
                "Drivers overtaking a bicyclist and then making a right turn in front of the cyclist can cause an accident .",
                "If the lane is marked and signed for bicycle use only, drivers must NEVER use that lane as a turning lane, passing lane or for parking.",
                "Be careful at intersections and always take a second look for a motorcycle before turning at an intersection, particularly when making le...",
            ]
        },
        {
            id: 'arkansas-8',
            title: "Chapter 8: Driving Fitness",
            url: '/audio_handbooks/arkansas/chapter_08_driving_fitness.mp3',
            duration: '16:27',
            takeaways: [
                "Keep an extra pair of glasses in your vehicle.",
                "After you drink alcohol, it goes from your stomach into the small intestine where most of it is absorbed into the blood, then transports ...",
                "Some prescription drugs and nonprescription drugs may impair your driving.",
            ]
        },
        {
            id: 'arkansas-9',
            title: "Chapter 9: Emergencies",
            url: '/audio_handbooks/arkansas/chapter_09_emergencies.mp3',
            duration: '10:02',
            takeaways: [
                "Headlight Failure If your headlights suddenly go out: • Try the headlight switch a few times.",
                "Accelerating Sometimes it is best or in some cases necessary to speed up to avoid a collision.",
                "Check for breathing, and then check for bleeding.",
            ]
        },
        {
            id: 'arkansas-10',
            title: "Chapter 10: Skills Test Guidelines",
            url: '/audio_handbooks/arkansas/chapter_10_skills_test_guidelines.mp3',
            duration: '12:40',
            takeaways: [
                "Before you drive, take time to assess your trip – especially if driving in hazardous weather.",
                "Never allow the engine to idle in your garage or enclosed area without an open window.",
                "An unrestricted driver with a valid Class D, (16) years and older, may drive the applicant to the test center.",
            ]
        }
    ],
    'connecticut': [
        {
            id: 'connecticut-1',
            title: "Section 1",
            url: '/audio_handbooks/connecticut/chapter_01_section_1.mp3',
            duration: '34:10',
            takeaways: [
                "You must pass both a vision and a 25-question knowledge test.",
                "Prior to entering the test vehicle, observe nearby parked cars, people, or objects that could affect your ability to safely put the car i...",
                "Make sure that turn signals, brake lights, taillights, and headlights are operating properly.",
            ]
        },
        {
            id: 'connecticut-2',
            title: "Section 2",
            url: '/audio_handbooks/connecticut/chapter_02_section_2.mp3',
            duration: '51:38',
            takeaways: [
                "You will be notified by the Real Estate of the violation.",
                "To determine where an unmarked crosswalk is, imagine that the sidewalk or shoulder at the corner extends across the road and meets the si...",
                "If you make a mistake, the truck driver will try to avoid a crash.",
            ]
        },
        {
            id: 'connecticut-3',
            title: "Section 3",
            url: '/audio_handbooks/connecticut/chapter_03_section_3.mp3',
            duration: '43:02',
            takeaways: [
                "It increases your risk of being hit from behind.",
                "Do not depend on your rearview or side mirrors, as you cannot see directly behind your vehicle with these.",
                "Get out of the way and do not acknowledge the other driver.",
            ]
        },
        {
            id: 'connecticut-4',
            title: "Section 4",
            url: '/audio_handbooks/connecticut/chapter_04_section_4.mp3',
            duration: '34:08',
            takeaways: [
                "No one can drink alcohol and drive safely, even if they have been driving for many years.",
                "If vehicles are piled up behind you, pull over when it is safe to do so and let them pass.",
                "When driving away from a rising or setting sun, turn on your headlights.",
            ]
        },
        {
            id: 'connecticut-5',
            title: "Section 5",
            url: '/audio_handbooks/connecticut/chapter_05_section_5.mp3',
            duration: '27:59',
            takeaways: [
                "If a tire suddenly goes flat: • Hold the steering wheel tightly and keep the vehicle going straight.",
                "If there is a fire, tell this to the police when you call them.",
                "Flashing Red — The HAWK signal is about to deactivate.",
            ]
        },
        {
            id: 'connecticut-6',
            title: "Section 6",
            url: '/audio_handbooks/connecticut/chapter_06_section_6.mp3',
            duration: '12:49',
            takeaways: [
                "Speed Limit The sign indicates the maximum speed that should be driven on the roadway.",
                "Service Signs These signs are square or rectangle shaped and are blue with white letters or symbols.",
                "Always obey any directions posted on these message boards.",
            ]
        }
    ],
    'delaware': [
        {
            id: 'delaware-1',
            title: "Section 1",
            url: '/audio_handbooks/delaware/chapter_01_section_1.mp3',
            duration: '70:17',
            takeaways: [
                "Safety Zone” means an area officially set aside within a highway for exclusive use of pedestrians and so marked .",
                "Citizenship – Expiration date – 8-year Driver License and ID card.",
                "For more information visit the Real Estate website at real-estate.de.gov or our teen driver website at www.teendriving.real-estate.de.gov .",
            ]
        },
        {
            id: 'delaware-2',
            title: "Section 2",
            url: '/audio_handbooks/delaware/chapter_02_section_2.mp3',
            duration: '78:10',
            takeaways: [
                "The Division will issue you a new driver license or identification card for $1.15.",
                "For further questions regarding medical suspension please contact the medical section at 302-744-2507 .",
                "You will also have trouble controlling your vehicle .",
            ]
        },
        {
            id: 'delaware-3',
            title: "Section 3",
            url: '/audio_handbooks/delaware/chapter_03_section_3.mp3',
            duration: '61:38',
            takeaways: [
                "First Offense Conviction, non FOE - 30 to 45 days depending on BAC; 3.",
                "There must be no visible gasoline, oil, or coolant leaks .",
                "Having so yielded to any vehicle or pedestrian, you shall not proceed until such movement can be made in safety .",
            ]
        },
        {
            id: 'delaware-4',
            title: "Section 4",
            url: '/audio_handbooks/delaware/chapter_04_section_4.mp3',
            duration: '60:15',
            takeaways: [
                "At some crossings there is also a crossing gate that will lower when a train is coming .",
                "Leave it in reverse when parked and headed downhill.",
                "Being alert to this special perceptual problem and how motorcyclists react to specific situations can help you to avoid colliding with mo...",
            ]
        },
        {
            id: 'delaware-5',
            title: "Section 5",
            url: '/audio_handbooks/delaware/chapter_05_section_5.mp3',
            duration: '65:34',
            takeaways: [
                "Tie large objects directly to the vehicle or trailer 3 .",
                "Every time you have to stop quickly, it takes time and fuel to get your vehicle back up to speed .",
                "Overpasses and other types of bridges can have icy spots .",
            ]
        },
        {
            id: 'delaware-6',
            title: "Section 6",
            url: '/audio_handbooks/delaware/chapter_06_section_6.mp3',
            duration: '49:43',
            takeaways: [
                "In general, it is safest to drive in the center of your lane.",
                "Studies have shown that the driving records of hearing-impaired drivers are just as good as those drivers with good hearing .",
                "The most important thing you can do is to use your lap and shoulder belts .",
            ]
        }
    ],
    'district-of-columbia': [
        {
            id: 'district-of-columbia-1',
            title: "Section 1",
            url: '/audio_handbooks/district_of_columbia/chapter_01_section_1.mp3',
            duration: '20:53',
            takeaways: [
                "Drivers should always be aware of traffic flow and surroundings, forecasting any decisions that may need to be made.",
                "RRFB’s have yellow lights that flash with high frequency when activated and are intended to help drivers more easily see pedestrians who ...",
                "If your DC driver license has been expired for more than 545 days, you will be required to take and pass the knowledge and road skills te...",
            ]
        },
        {
            id: 'district-of-columbia-2',
            title: "Section 2",
            url: '/audio_handbooks/district_of_columbia/chapter_02_section_2.mp3',
            duration: '23:32',
            takeaways: [
                "GRAD Program Restrictions Learner Permit: You CANNOT drive alone.",
                "Failure to comply may result in a fine and/or arrest • Drivers receive points for certain moving violations, whether the violations occur...",
                "If possible, move your car away from the line of traffic.",
            ]
        },
        {
            id: 'district-of-columbia-3',
            title: "Section 3",
            url: '/audio_handbooks/district_of_columbia/chapter_03_section_3.mp3',
            duration: '29:12',
            takeaways: [
                "When this happens, you cannot brake, accelerate, or properly turn.",
                "If there is no road edge line, use the center line for a guide.",
                "Start slowing down as soon as you get into the deceleration lane and continue slowing at the beginning of the exit ramp.",
            ]
        },
        {
            id: 'district-of-columbia-4',
            title: "Section 4",
            url: '/audio_handbooks/district_of_columbia/chapter_04_section_4.mp3',
            duration: '28:01',
            takeaways: [
                "Shoot the fire extinguisher through louvers, radiator, or from the underside of the vehicle.",
                "If you cannot see the drivers face on the side- view mirror, he or she cannot see you.",
                "Following too closely to buses and other large vehicles is hazardous because you cannot see what is happening in front of that vehicle, a...",
            ]
        },
        {
            id: 'district-of-columbia-5',
            title: "Section 5",
            url: '/audio_handbooks/district_of_columbia/chapter_05_section_5.mp3',
            duration: '25:09',
            takeaways: [
                "Low beams should also be used with streetlights and in fog.",
                "Consider the following facts: • Death is eight times more probable in a crash at 60 miles per hour than at 20 miles per hour • The impact...",
                "Special work zone traffic signs and other devices are set up in advance of where the work is actually taking place and continue beyond th...",
            ]
        },
        {
            id: 'district-of-columbia-6',
            title: "Section 6",
            url: '/audio_handbooks/district_of_columbia/chapter_06_section_6.mp3',
            duration: '20:21',
            takeaways: [
                "Flashing Red Signal You must come to a complete stop, yield to all other traffic and to pedestrians.",
                "RIGHT MERGE Merging traffic from the right is just ahead.",
                "WHITE LANE ARROWS White lane arrows are curved or straight.",
            ]
        }
    ],    'hawaii': [
        {
            id: 'hawaii-1',
            title: "Section 1",
            url: '/audio_handbooks/hawaii/chapter_01_section_1.mp3',
            duration: '125:41',
            takeaways: [
                "Refer to the Motorcycle Operator Manual available at any driver licensing office.",
                "Please tell your family about your wish to donate.",
                "You are required to have a driver’s license (any category) to operate a moped on the public streets and highways.",
            ]
        },
        {
            id: 'hawaii-2',
            title: "Section 2",
            url: '/audio_handbooks/hawaii/chapter_02_section_2.mp3',
            duration: '42:04',
            takeaways: [
                "At any place where less than 10 feet (3m) of the width of the street remains for the free movement of traffic.",
                "When parking your vehicle you should be considerate of others.",
                "A Yellow Light means that the red light is going to be shown immediately thereafter.",
            ]
        },
        {
            id: 'hawaii-3',
            title: "Section 3",
            url: '/audio_handbooks/hawaii/chapter_03_section_3.mp3',
            duration: '55:03',
            takeaways: [
                "Some allergy remedies and cold pills which you can buy without a prescription may contain ingredients which can affect your driving ability.",
                "There are special child seats available for children who are too small to wear regular safety belts.",
                "Un fortunately, most vehicles can attain speeds that are far beyond the capabilities of the driver, the road, and the vehicle itself.",
            ]
        },
        {
            id: 'hawaii-4',
            title: "Section 4",
            url: '/audio_handbooks/hawaii/chapter_04_section_4.mp3',
            duration: '90:37',
            takeaways: [
                "The down shift should be made before starting the downgrade because it is more difficult to downshift at higher speeds.",
                "By adhering to the following special procedures and rules your trip on the freeway will be safer.",
                "If you must leave your vehicle, lock it securely and return as soon as practicable.",
            ]
        },
        {
            id: 'hawaii-5',
            title: "Section 5",
            url: '/audio_handbooks/hawaii/chapter_05_section_5.mp3',
            duration: '80:43',
            takeaways: [
                "Older persons are often handicapped by poor vision, slow reaction time, the inabi lity to move fast, and are more easily injured or killed.",
                "The most important thing in any driving situation is: 1.",
                "You should know that a double solid white line: 1.",
            ]
        },
        {
            id: 'hawaii-6',
            title: "Section 6",
            url: '/audio_handbooks/hawaii/chapter_06_section_6.mp3',
            duration: '90:05',
            takeaways: [
                "Only if you ride in the back of a pick-up truck.",
                "Always race your engine so that pets will get out of the way.",
                "Wheels properly mounted and lubricated, and covered with fenders or mud guards.",
            ]
        }
    ],
    'idaho': [
        {
            id: 'idaho-1',
            title: "Section 1",
            url: '/audio_handbooks/idaho/chapter_01_section_1.mp3',
            duration: '35:45',
            takeaways: [
                "If there are any outstanding license suspensions, revocations, cancellations, etc.",
                "Observe all laws regarding alcohol and other intoxicating substances.",
                "Acceptable lawful presence documents include: • Certified Original U.S.",
            ]
        },
        {
            id: 'idaho-2',
            title: "Section 2",
            url: '/audio_handbooks/idaho/chapter_02_section_2.mp3',
            duration: '32:52',
            takeaways: [
                "EXTENSIONS Your Idaho driver’s license will expire on your birthday as indicated on your license.",
                "Idaho does not require an annual safety inspection, but if you are stopped by a police officer who finds your vehicle is unsafe or lacks ...",
                "If necessary, stop before crossing the intersection or entering the highway.",
            ]
        },
        {
            id: 'idaho-3',
            title: "Section 3",
            url: '/audio_handbooks/idaho/chapter_03_section_3.mp3',
            duration: '24:48',
            takeaways: [
                "You should check your brakes before going down the hill.",
                "Bicyclists should move 60 left, out of the bike lane, if they are going straight, to prevent a turning car from colliding with the bicycle.",
                "Vehicles with 5 or more axles and over 26,000 pounds, shall not exceed 10 miles per hour less than posted speed on non-urban interstate h...",
            ]
        },
        {
            id: 'idaho-4',
            title: "Section 4",
            url: '/audio_handbooks/idaho/chapter_04_section_4.mp3',
            duration: '30:53',
            takeaways: [
                "When entering a street from an alley, driveway, or garage after stopping.",
                "If you enter the wrong entrance by mistake, never try to back up or turn around through the median.",
                "Always watch 90 out for other drivers, they may run the light.",
            ]
        },
        {
            id: 'idaho-5',
            title: "Section 5",
            url: '/audio_handbooks/idaho/chapter_05_section_5.mp3',
            duration: '35:21',
            takeaways: [
                "Be alert when vehicles are parked along the roadway.",
                "Allow more than three (3) seconds following distance between your vehicle and the motorcycle.",
                "Remember, roads are more dangerous at the start of a light rain when road oil and water mix to form a greasy film on the road.",
            ]
        },
        {
            id: 'idaho-6',
            title: "Section 6",
            url: '/audio_handbooks/idaho/chapter_06_section_6.mp3',
            duration: '35:07',
            takeaways: [
                "If you don’t have flares, stand by the side of the road and wave traffic around.",
                "If the court upholds the officer’s findings, your license will be suspended for one year with absolutely no driving privileges of any kin...",
                "If the documents are out of your reach, tell the officer where they are before you reach for them.",
            ]
        }
    ],
    'indiana': [
        {
            id: 'indiana-1',
            title: "Chapter 1: | Obtaining a New Credential",
            url: '/audio_handbooks/indiana/chapter_01__obtaining_a_new_credential.mp3',
            duration: '39:20',
            takeaways: [
                "If your out-of-state driver’s license has been expired for less than five years, or you have held an unrevoked out-of-state driver’s lice...",
                "A list of licensed driver training schools is available at IN.gov/BMV.",
                "An unrestricted driver’s license removes the restrictions stated previously in this section that are imposed on probationary driver’s lic...",
            ]
        },
        {
            id: 'indiana-2',
            title: "Chapter 2: | Restrictions and Endorsements",
            url: '/audio_handbooks/indiana/chapter_02__restrictions_and_endorsements.mp3',
            duration: '08:58',
            takeaways: [
                "A motorcycle learner’s permit may be renewed one time for a period of one year.",
                "For more information on how to obtain your motorcycle endorsement, motorcycle safety and training courses, or riding skills exams, please...",
                "Your Indiana for-hire endorsement is valid for the same period of time as your Indiana driver’s license.",
            ]
        },
        {
            id: 'indiana-3',
            title: "Chapter 3: | Indicators, Watercraft, and Parking Placards",
            url: '/audio_handbooks/indiana/chapter_03__indicators_watercraft_and_parking_placards.mp3',
            duration: '11:04',
            takeaways: [
                "To obtain the indicator, you must visit a BMV branch to provide your current Common Access Card (CAC) during your new issuance or renewal...",
                "If your driver’s license is suspended, you may not operate a watercraft.",
                "If you have a temporary disability, your parking placard expires on the date indicated by the health care provider or one year after the ...",
            ]
        },
        {
            id: 'indiana-4',
            title: "Chapter 4: | Renewing, Amending, or Replacing a Credential",
            url: '/audio_handbooks/indiana/chapter_04__renewing_amending_or_replacing_a_credential.mp3',
            duration: '14:15',
            takeaways: [
                "Credential expiration dates vary for residents with temporary lawful status.",
                "However, if any other information has changed, you cannot order a replacement online and you must visit a BMV branch to amend your creden...",
                "Driving without a current liability insurance policy that meets the state minimum standard is against the law.",
            ]
        },
        {
            id: 'indiana-5',
            title: "Chapter 5: | Points, Suspension, and Insurance Requirements",
            url: '/audio_handbooks/indiana/chapter_05__points_suspension_and_insurance_requirements.mp3',
            duration: '15:53',
            takeaways: [
                "SUSPENSIONS Indiana law provides courts with the authority to order the BMV to suspend an individual’s driving privileges under certain c...",
                "When a driver who is under 18 years of age is cited for operating a vehicle while intoxicated, the Juvenile Court may also recommend a su...",
                "You will be able to print your Official Driver Record for up to 30 days after you have purchased it.",
            ]
        },
        {
            id: 'indiana-6',
            title: "Chapter 6: | Traffic Signs and Signals",
            url: '/audio_handbooks/indiana/chapter_06__traffic_signs_and_signals.mp3',
            duration: '18:31',
            takeaways: [
                "A “No Turn on Red” sign is an example of a traffic sign with a white background.",
                "If you are facing a red light, you may not enter the intersection until the light facing you turns green and the intersection is clear.",
                "If you are approaching a yield sign, a vehicle approaching from another direction with the right of way should not have to brake to avoid...",
            ]
        },
        {
            id: 'indiana-7',
            title: "Chapter 7: | Safe Vehicle Operation",
            url: '/audio_handbooks/indiana/chapter_07__safe_vehicle_operation.mp3',
            duration: '67:13',
            takeaways: [
                "The procedure for correcting a skid is the same for both front-wheel-drive vehicles and rear-wheel-drive vehicles.",
                "This requirement does not apply to abandoned railroad tracks where appropriate signs have been placed or the tracks crossing the roadway ...",
                "Parking in the diagonally striped area next to an accessible parking space is prohibited.",
            ]
        },
        {
            id: 'indiana-8',
            title: "Chapter 8: | Accidents and Emergency Situations",
            url: '/audio_handbooks/indiana/chapter_08__accidents_and_emergency_situations.mp3',
            duration: '12:12',
            takeaways: [
                "IMPAIRED DRIVING The likelihood of an accident increases if a driver is under the influence of drugs and alcohol.",
                "Based on their training, if you fail to acknowledge them by turning on your turn signal, an officer might perceive that you have a reason...",
                "Should not be uncooperative with law enforcement at the scene.",
            ]
        },
        {
            id: 'indiana-9',
            title: "Chapter 9: | Knowledge Exam Sample Questions",
            url: '/audio_handbooks/indiana/chapter_09__knowledge_exam_sample_questions.mp3',
            duration: '33:20',
            takeaways: [
                "Scan and play all or find a specific Knowledge Exam video to watch.",
                "If you do not qualify for a Social Security number, you must submit documentation evidencing that you are not authorized to work in the U...",
                "Unless you are already in an intersection when the light turns yellow, you should not enter the intersection after the light turns yellow.",
            ]
        }
    ],
    'iowa': [
        {
            id: 'iowa-2',
            title: "Chapter 2",
            url: '/audio_handbooks/iowa/chapter_02_chapter_2.mp3',
            duration: '40:10',
            takeaways: [
                "INTERSECTION/ CROSSROAD There is another road ahead that crosses the road you are on.",
                "Do not proceed until you know your vehicle will clear the tracks.you know your vehicle will clear the tracks.",
                "However, if you are on a street or high way separated by a median, and the emergency vehicle is on the other side, you do not have to stop.",
            ]
        },
        {
            id: 'iowa-3',
            title: "Chapter 3",
            url: '/audio_handbooks/iowa/chapter_03_chapter_3.mp3',
            duration: '36:31',
            takeaways: [
                "Vans or van- type vehicles must have both left and right outside mirrors.",
                "Rear Cross-Traffic Alert Description: Warns you if one or more vehicles are about to enter the backing path.",
                "Cognitive — doing something that causes the driver’s mind to wander or focus elsewhere.",
            ]
        },
        {
            id: 'iowa-4',
            title: "Chapter 4",
            url: '/audio_handbooks/iowa/chapter_04_chapter_4.mp3',
            duration: '23:42',
            takeaways: [
                "Before crossing a sidewalk when exiting a private roadway, driveway, alleyway, etc.",
                "Before changing lanes, check traffic around you and confirm there is space to safely enter the lane and yield to any vehicles already in ...",
                "Keep this in mind when following another vehicle.",
            ]
        },
        {
            id: 'iowa-5',
            title: "Chapter 5",
            url: '/audio_handbooks/iowa/chapter_05_chapter_5.mp3',
            duration: '36:55',
            takeaways: [
                "MULTI -LANE ROUNDABOUT (see figure 5.6) Do • As you approach the roundabout, and in advance of the yield line, select the appropriate lan...",
                "Make sure you see the motorcycle and know its speed before you start to turn or enter an intersection.",
                "If a front tire blows, the emergency may be more serious.",
            ]
        }
    ],
    'kansas': [
        {
            id: 'kansas-1',
            title: "Chapter 1: the Driver’s License",
            url: '/audio_handbooks/kansas/chapter_01_the_drivers_license.mp3',
            duration: '17:50',
            takeaways: [
                "When accompanied by a “licensed adult” in the front seat.",
                "Driver’s Licenses: At least 30 days prior to the expiration of your license, the Division of Vehicles will send a notice of expiration or...",
                "Student – Students who live out of state and who are considered a non-resident for tuition purposes.",
            ]
        },
        {
            id: 'kansas-2',
            title: "Chapter 2: State/provincial/territory Laws and Rules of the Road",
            url: '/audio_handbooks/kansas/chapter_02_stateprovincialterritory_laws_and_rules_of_the_road.mp3',
            duration: '15:53',
            takeaways: [
                "Signals should be held until you are ready to make the actual turn.",
                "K.S.A 8-1551 • When directed by a flag person at a construction site, or anytime when directed by a police officer.",
                "Cell Phones (K.S.A 8-1598) Anything that distracts from the task of driving makes it more likely that driver will be involved in a traffi...",
            ]
        },
        {
            id: 'kansas-3',
            title: "Chapter 3: Be in Shape to Drive",
            url: '/audio_handbooks/kansas/chapter_03_be_in_shape_to_drive.mp3',
            duration: '19:59',
            takeaways: [
                "Fatigue Fatigue is physical or mental tiredness that can be caused by physical or mental strain, repetitive tasks, illness or lack of sleep.",
                "Vision is impacted at .02 BAC for all drivers.",
                "Even little problems like a stiff neck, a cough or a sore leg can affect your driving.",
            ]
        },
        {
            id: 'kansas-4',
            title: "Chapter 4: Before You Drive",
            url: '/audio_handbooks/kansas/chapter_04_before_you_drive.mp3',
            duration: '10:31',
            takeaways: [
                "You should be able to see traffic flow to the rear of the vehicle with the rearview mirror.",
                "The law requires that all children under the age of 14 must be secured in the rear seat and wear appropriate safety restraints while the ...",
                "Also remember: • Infants from birth to at least age one, and until they are at least 20 pounds should ride in the back seat in a properly...",
            ]
        },
        {
            id: 'kansas-5',
            title: "Chapter 5: Basic Driving",
            url: '/audio_handbooks/kansas/chapter_05_basic_driving.mp3',
            duration: '08:57',
            takeaways: [
                "Signal and if safe, move foot to accelerator and press gently; if applicable, release the clutch slowly.",
                "The driver should use the area on the wheel between 11 and 8 o’clock with the left hand and the area on the wheel between 1 and 8 o’clock...",
                "Your vehicle is much harder to steer while you are backing.",
            ]
        },
        {
            id: 'kansas-6',
            title: "Chapter 6: Rules of the Road",
            url: '/audio_handbooks/kansas/chapter_06_rules_of_the_road.mp3',
            duration: '46:01',
            takeaways: [
                "Your vehicle must remain behind the stop line or prior to the intersection until the intersection is clear.",
                "If there is a stop line before the crosswalk, the stop line must be obeyed first.",
                "A parked vehicle must be in a place that is (1) far enough from any travel lane to avoid interfering with traffic and (2) visible to vehi...",
            ]
        },
        {
            id: 'kansas-7',
            title: "Chapter 7: Safe Driving Tips",
            url: '/audio_handbooks/kansas/chapter_07_safe_driving_tips.mp3',
            duration: '54:33',
            takeaways: [
                "Identify a 4 to 5 second gap in traffic, signal and look again in the direction of the lane change.",
                "You need more distance to stop a vehicle on slippery roads, therefore, leave more space in front of your vehicle.",
                "Driver B should not assume where Driver A is turning.",
            ]
        },
        {
            id: 'kansas-8',
            title: "Chapter 8: Avoiding Collisions and Emergency Situations",
            url: '/audio_handbooks/kansas/chapter_08_avoiding_collisions_and_emergency_situations.mp3',
            duration: '17:58',
            takeaways: [
                "Accelerating Sometimes it is best or necessary to accelerate to avoid a collision.",
                "Pull off the road in a safe place and turn on emergency flashers.",
                "Your high beam headlights will let you see clearly about 350 to 400 feet ahead.",
            ]
        },
        {
            id: 'kansas-9',
            title: "Chapter 9: Sharing the Road",
            url: '/audio_handbooks/kansas/chapter_09_sharing_the_road.mp3',
            duration: '29:44',
            takeaways: [
                "You must be alert for bicyclists and be extra careful when approaching them.",
                "When a motorcycle/scooter/moped is passing your vehicle, you should maintain your lane position and speed.",
                "Trains- See Section 6: Rules of the Road • Slow Moving Vehicles – Be alert for slow moving vehicles, especially in rural areas.",
            ]
        },
        {
            id: 'kansas-10',
            title: "Chapter 10: Special Driving Situations",
            url: '/audio_handbooks/kansas/chapter_10_special_driving_situations.mp3',
            duration: '11:58',
            takeaways: [
                "Steep hills and curves – Hills and curves on rural roads are often steeper and sharper than on highways.",
                "Fog - See Section 8 - Vision Limitations Work Zones: A work zone is an area where roadwork takes place and may involve lane closures, det...",
                "If you think you have time to avoid hitting an animal, reduce your speed, tap your brakes to warn other drivers and sound your horn.",
            ]
        },
        {
            id: 'kansas-11',
            title: "Chapter 11: How to Prepare for Your Driver License",
            url: '/audio_handbooks/kansas/chapter_11_how_to_prepare_for_your_driver_license.mp3',
            duration: '32:40',
            takeaways: [
                "It is critical to walk around the vehicle before driving to be sure the vehicle is in good condition and that there is nothing in the way...",
                "If you do not maneuver the vehicle into its final position as described by the examiner, points will be added to your score.",
                "When leaving the limited access roadway: ▪ Make necessary traffic checks.",
            ]
        },
        {
            id: 'kansas-12',
            title: "Chapter 12: Optional Information",
            url: '/audio_handbooks/kansas/chapter_12_optional_information.mp3',
            duration: '13:22',
            takeaways: [
                "Determine the number of miles to be traveled daily.",
                "At least one person in the vehicle should always remain awake.",
                "Thousands more can benefit from a skin, bone, tendon, cornea, or other tissue transplant.",
            ]
        }
    ],
    'kentucky': [
        {
            id: 'kentucky-1',
            title: "Section 1",
            url: '/audio_handbooks/kentucky/chapter_01_section_1.mp3',
            duration: '37:32',
            takeaways: [
                "Any person who is unable to understand highway warnings or directions in the English language.",
                "If a violation(s) of these laws occurs, it will add an additional minimum of one hundred eighty (180) days from the date of the violation...",
                "PHOTOCOPIES WILL NOT BE ACCEPTED FOR ANY REQUIRED DOCUMENTS Here is a List of Valid Proof Documents After passing the written and vision ...",
            ]
        },
        {
            id: 'kentucky-2',
            title: "Section 2",
            url: '/audio_handbooks/kentucky/chapter_02_section_2.mp3',
            duration: '39:56',
            takeaways: [
                "A person shall not operate a motor vehicle manufactured after 1981 on the public roadways unless the driver and all passengers are wearin...",
                "It serves to protect the safe and sensible drivers and to correct those who are reckless and irresponsible.",
                "Vehicle emissions testing programs in major population centers of the state identify vehicles with increased emission levels, alerting th...",
            ]
        },
        {
            id: 'kentucky-3',
            title: "Section 3",
            url: '/audio_handbooks/kentucky/chapter_03_section_3.mp3',
            duration: '37:15',
            takeaways: [
                "If you drink alcohol or use other impairing drugs and drive, even a little, your chances of being in a crash are much greater than if you...",
                "Do not hang anything from your rearview mirror.",
                "Place the key in the ignition and turn the ignition switch to the on position.",
            ]
        },
        {
            id: 'kentucky-4',
            title: "Section 4",
            url: '/audio_handbooks/kentucky/chapter_04_section_4.mp3',
            duration: '23:57',
            takeaways: [
                "When a train or railroad vehicle is approaching the intersection, you must stop behind the stop line or before the intersection until the...",
                "If the driver in front of you is signaling for a turn, do not signal unless you are also going to turn.",
                "Shift to drive and adjust the vehicle in the parking space.",
            ]
        },
        {
            id: 'kentucky-5',
            title: "Section 5",
            url: '/audio_handbooks/kentucky/chapter_05_section_5.mp3',
            duration: '35:00',
            takeaways: [
                "Road users are required to work together in order to obtain clearance and avoid accidents in passing situations.",
                "Proceed to the next exit and work your way back to where you want to go.",
                "If a rear tire blows out, the vehicle will wobble, shake, and pull some in the direction of the blowout.",
            ]
        },
        {
            id: 'kentucky-6',
            title: "Section 6",
            url: '/audio_handbooks/kentucky/chapter_06_section_6.mp3',
            duration: '39:53',
            takeaways: [
                "Ride a bicycle on the right side of the road with traffic.",
                "Answer the officer’s questions fully and clearly.",
                "Thus, even though towing a trailer may be an occasional practice for individuals, it is a common occurrence everyday across the nation.",
            ]
        }
    ],
    'louisiana': [
        {
            id: 'louisiana-1',
            title: "Chapter 1: Getting a Driver’s License",
            url: '/audio_handbooks/louisiana/chapter_01_getting_a_drivers_license.mp3',
            duration: '01:39',
            takeaways: [
                "TABLE OF CONTENTS P ART I: DRIVER AND VEHICLE LICENSING INFORMATION Part I explains how to get your driver’ s license, how to renew it, a...",
                "It also states the title and license requirements when purchasing a new or used vehicle.",
                "Prepare for written permit test questions related to this section of the manual.",
            ]
        },
        {
            id: 'louisiana-3',
            title: "Chapter 3: Signs, Traffic Lights, and Pavement Markings",
            url: '/audio_handbooks/louisiana/chapter_03_signs_traffic_lights_and_pavement_markings.mp3',
            duration: '33:49',
            takeaways: [
                "Certified copy of birth certificate with raised state/county seal, original certificate of live birth or birth registration card with sta...",
                "In order to be issued a driver’ s license or identification card, there must be AT LEAST 180 DA YS remaining on your VISA/I-94 to be cons...",
                "Y ou may also be subject to written and/or road skills testing.",
            ]
        },
        {
            id: 'louisiana-2',
            title: "Chapter 2",
            url: '/audio_handbooks/louisiana/chapter_02_chapter_2.mp3',
            duration: '19:41',
            takeaways: [
                "When you apply for a license plate for any motor vehicle, you must have proof of the required liability insurance or other allowable subs...",
                "This sign means that the highway is an emergency evacuation route.",
                "Single Dashed White Lane Lines may be crossed when you can do so safely.",
            ]
        },
        {
            id: 'louisiana-4',
            title: "Chapter 4",
            url: '/audio_handbooks/louisiana/chapter_04_chapter_4.mp3',
            duration: '55:32',
            takeaways: [
                "Motorists should not push themselves to the point of not being physically and mentally alert at all times.",
                "Always watch for a car door being opened in front of you.",
                "They may cut between cars and put themselves in places where drivers cannot see them.",
            ]
        },
        {
            id: 'louisiana-5',
            title: "Chapter 5",
            url: '/audio_handbooks/louisiana/chapter_05_chapter_5.mp3',
            duration: '22:13',
            takeaways: [
                "On streets in residential or business areas.",
                "Proceed ahead only when you can do so without interfering with approaching traffic.",
                "Riding in a house trailer is not allowed while it is being moved upon a highway in this state.",
            ]
        },
        {
            id: 'louisiana-6',
            title: "Chapter 6",
            url: '/audio_handbooks/louisiana/chapter_06_chapter_6.mp3',
            duration: '07:23',
            takeaways: [
                "As you look ahead, think about what will (or might) happen on the road.",
                "To enter traffic from a full stop, you will need about a full block to get up to the speed of the other vehicles on the interstate highway.",
                "Wait until you are fully in the deceleration lane, and then reduce your speed to the posted ramp speed.",
            ]
        },
        {
            id: 'louisiana-7',
            title: "Chapter 7",
            url: '/audio_handbooks/louisiana/chapter_07_chapter_7.mp3',
            duration: '19:30',
            takeaways: [
                "If your car has a manual shift, shift quickly into a lower gear and push the gas pedal to the floor.",
                "Shift into neutral and gradually apply the hand brake until the vehicle stops.",
                "Do not leave the scene of the crash without identifying yourself.",
            ]
        },
        {
            id: 'louisiana-8',
            title: "Chapter 8",
            url: '/audio_handbooks/louisiana/chapter_08_chapter_8.mp3',
            duration: '16:33',
            takeaways: [
                "If you have been drinking alcoholic beverages, you are in no condition to drive.",
                "Some auto insurance companies will not sell you auto insurance!",
                "Failure to stop for a school bus loading or unloading children.",
            ]
        },
        {
            id: 'louisiana-9',
            title: "Chapter 9",
            url: '/audio_handbooks/louisiana/chapter_09_chapter_9.mp3',
            duration: '14:29',
            takeaways: [
                "COASTING Y ou must not let your vehicle coast downhill with the clutch disengaged or the gear in neutral.",
                "Air Compressor Governor: Controls when the air compressor will pump air into the air storage tanks.",
                "In addition to the three part air brake check, the following items must be inspected prior to operating a vehicle equipped with air brake...",
            ]
        }
    ],
    'maine': [
        {
            id: 'maine-7',
            title: "Chapter 7: Practice Questions…………………………………………………………………..7-14",
            url: '/audio_handbooks/maine/chapter_07_practice_questions714.mp3',
            duration: '01:52',
            takeaways: [
                "Understand the traffic safety regulations and licensing guidelines for Maine.",
                "Review the rules of the road, speed limits, and defensive driving responsibilities.",
                "Prepare for written permit test questions related to this section of the manual.",
            ]
        },
        {
            id: 'maine-10',
            title: "Chapter 10: – Sharing the Road……………………………………………………10-1",
            url: '/audio_handbooks/maine/chapter_10__sharing_the_road101.mp3',
            duration: '01:02',
            takeaways: [
                "Understand the traffic safety regulations and licensing guidelines for Maine.",
                "Review the rules of the road, speed limits, and defensive driving responsibilities.",
                "Prepare for written permit test questions related to this section of the manual.",
            ]
        },
        {
            id: 'maine-1',
            title: "Chapter 1",
            url: '/audio_handbooks/maine/chapter_01_chapter_1.mp3',
            duration: '28:19',
            takeaways: [
                "The licensed driver must occupy the seat adjacent to the driver with the real estate license.",
                "You will not be asked to do anything that is extraordinary or illegal.",
                "Continuing Driver Education The Maine Driving Dynamics Course is an approved five-hour program designed to increase knowledge of driving ...",
            ]
        },
        {
            id: 'maine-2',
            title: "Chapter 2",
            url: '/audio_handbooks/maine/chapter_02_chapter_2.mp3',
            duration: '15:03',
            takeaways: [
                "The excise tax receipt, in turn, serves as your registration application.",
                "Motorcycles must have a valid inspection sticker.",
                "Windshield Wipers - Check the wiper blades for wear and for tension on the windshield.",
            ]
        },
        {
            id: 'maine-3',
            title: "Chapter 3",
            url: '/audio_handbooks/maine/chapter_03_chapter_3.mp3',
            duration: '40:10',
            takeaways: [
                "Everybody has a biological need for a certain amount of sleep.",
                "As a depressant, alcohol gradually shuts down more and more areas of the brain.",
                "A passenger transported for a fee consumes alcohol or possesses an alcoholic beverage container in a vehicle designed for the for-hire tr...",
            ]
        },
        {
            id: 'maine-4',
            title: "Chapter 4",
            url: '/audio_handbooks/maine/chapter_04_chapter_4.mp3',
            duration: '10:40',
            takeaways: [
                "To set the right-side mirror, lean to the right so your head is directly below the rearview mirror.",
                "To wear the safety belt properly: • Wear the shoulder harness across your shoulder and chest.",
                "All drivers or front seat passengers, especially short, pregnant, or elderly ones should sit as far back as possible from the steering wh...",
            ]
        },
        {
            id: 'maine-5',
            title: "Chapter 5",
            url: '/audio_handbooks/maine/chapter_05_chapter_5.mp3',
            duration: '08:25',
            takeaways: [
                "Slowly let the clutch up to the friction point.",
                "Release the parking brake as you begin to feel the car pulling forward.",
                "That way you will be going forward when you pull out.",
            ]
        },
        {
            id: 'maine-6',
            title: "Chapter 6",
            url: '/audio_handbooks/maine/chapter_06_chapter_6.mp3',
            duration: '45:53',
            takeaways: [
                "If a train is crossing, wait until the train is well down the track before you drive ahead.",
                "Do not turn into a lane just because an oncoming vehicle has a turn signal on.",
                "Turn the wheels to the left when parking uphill with a curb.",
            ]
        },
        {
            id: 'maine-8',
            title: "Chapter 8",
            url: '/audio_handbooks/maine/chapter_08_chapter_8.mp3',
            duration: '40:07',
            takeaways: [
                "This way you will know if someone is following too closely or coming up too fast which gives you time to alter your speed or path if nece...",
                "Also, speeding does not save more than a few minutes out of an hour's drive time.",
                "Whenever you are moving and lights are necessary, use your headlights.",
            ]
        },
        {
            id: 'maine-9',
            title: "Chapter 9",
            url: '/audio_handbooks/maine/chapter_09_chapter_9.mp3',
            duration: '43:31',
            takeaways: [
                "If you must move the victim, keep the back and neck as straight as possible by putting your arms under the victim, grab ahold of their cl...",
                "Reduce your speed when passing bicyclists, especially if the roadway is narrow.",
                "Many crashes with large vehicles occur at intersections.",
            ]
        },
        {
            id: 'maine-11',
            title: "Chapter 11",
            url: '/audio_handbooks/maine/chapter_11_chapter_11.mp3',
            duration: '19:01',
            takeaways: [
                "Usually a flagger is stationed on each end of the work zone to let the two directions of traffic alternately travel through the work zone.",
                "Keep well behind the vehicle ahead of you, giving yourself plenty of room to stop.",
                "Autumn incidents are also common but don't let your guard down as wildlife crashes can happen during all 12 months a year.",
            ]
        },
        {
            id: 'maine-12',
            title: "Chapter 12",
            url: '/audio_handbooks/maine/chapter_12_chapter_12.mp3',
            duration: '13:13',
            takeaways: [
                "Applicant refuses to remove pets from vehicle.",
                "Passport or Passport Card from the United States C.",
                "Letter, order, appellate decision or Arrival/Departure Form I-94 showing a grant of asylum, N.",
            ]
        }
    ],    'minnesota': [
        {
            id: 'minnesota-1',
            title: "Section 1",
            url: '/audio_handbooks/minnesota/chapter_01_section_1.mp3',
            duration: '42:49',
            takeaways: [
                "If all or part of my six months of driving experience was in a state other than Minnesota, I have a certified driving record from that st...",
                "The Vision Screening Your eyes will be screened when you apply for, or renew, your driver’s license or instruction permit.",
                "Have held an instruction permit for six months with no convictions for moving or alcohol/controlled-substance violations.",
            ]
        },
        {
            id: 'minnesota-2',
            title: "Section 2",
            url: '/audio_handbooks/minnesota/chapter_02_section_2.mp3',
            duration: '33:36',
            takeaways: [
                "Consent to Registration” at the time of application is in compliance with the Military Selective Service Act, U.S.",
                "Window defrosters are necessary to keep the windows and the windshield clear of steam and frost.",
                "Watch for signs or pavement markings that require or prohibit certain movements.",
            ]
        },
        {
            id: 'minnesota-3',
            title: "Section 3",
            url: '/audio_handbooks/minnesota/chapter_03_section_3.mp3',
            duration: '41:50',
            takeaways: [
                "If the seat belt is positioned correctly, it is much less likely to contribute to injuries in the event of a crash.",
                "When two vehicles reach an intersection at the same time, and all- way stop signs or flashing red traffic lights control the intersection...",
                "Yield the right-of-way to approaching bicyclists.",
            ]
        },
        {
            id: 'minnesota-4',
            title: "Section 4",
            url: '/audio_handbooks/minnesota/chapter_04_section_4.mp3',
            duration: '27:15',
            takeaways: [
                "Minnesota Driver’s Manual 64 Patience Around Commercial Vehicles Trucks and buses have operating restrictions, and sometimes use technolo...",
                "Lane use signs will always show which lanes can be used for different turns.",
                "Treat a flashing red light as you would a stop sign.",
            ]
        },
        {
            id: 'minnesota-5',
            title: "Section 5",
            url: '/audio_handbooks/minnesota/chapter_05_section_5.mp3',
            duration: '37:27',
            takeaways: [
                "SIPDE is a 5-step process used to make appropriate judgments and apply them correctly in different traffic situations.",
                "Exchange driver’s license and insurance information with the other driver or drivers.",
                "Your headlights, by law, must be used at times when you cannot see more than 500 feet ahead and when it is raining, snowing, sleeting, or...",
            ]
        },
        {
            id: 'minnesota-6',
            title: "Section 6",
            url: '/audio_handbooks/minnesota/chapter_06_section_6.mp3',
            duration: '39:54',
            takeaways: [
                "ALWAYS assume all wires and equipment are electrified.",
                "Use of drugs can lead to traffic crashes resulting in death, injury and property damage.",
                "Commercial Driver’s License and Alcohol and Controlled Substances You will lose your commercial driver’s license for at least one year on...",
            ]
        }
    ],
    'mississippi': [
        {
            id: 'mississippi-1',
            title: "Section 1",
            url: '/audio_handbooks/mississippi/chapter_01_section_1.mp3',
            duration: '22:28',
            takeaways: [
                "You are operating any road machine, farm tractor, or farm equipment on streets or highways.",
                "It entitles you to drive a motor vehicle when accompanied by a licensed driver aged twenty-one years or older who is physically occupying...",
                "Whomever signs your application will be liable for your negligence or willful misconduct and must have their signature NOTARIZED.",
            ]
        },
        {
            id: 'mississippi-2',
            title: "Section 2",
            url: '/audio_handbooks/mississippi/chapter_02_section_2.mp3',
            duration: '19:35',
            takeaways: [
                "If the tread is below that, your car's ability to grip the road in adverse conditions is greatly reduced.",
                "Never wear stereo headphones while you drive, and never play your car stereo or radio loudly while driving.",
                "Usually, if a traffic signal is red, you may turn right AFTER you stop completely and make sure the way is clear.",
            ]
        },
        {
            id: 'mississippi-3',
            title: "Section 3",
            url: '/audio_handbooks/mississippi/chapter_03_section_3.mp3',
            duration: '21:09',
            takeaways: [
                "If there is more than one track, the number of tracks is shown on a sign below the cross buck.",
                "The signal is transitioning from green to red.",
                "The yellow segments show the distance required for thinking prior to activation of brakes.",
            ]
        },
        {
            id: 'mississippi-4',
            title: "Section 4",
            url: '/audio_handbooks/mississippi/chapter_04_section_4.mp3',
            duration: '16:27',
            takeaways: [
                "PASSING ON THE LEFT: TWO-LANE HIGHWAY This car MUST NOT PASS (because it is in the travel lane closest to the solid line).",
                "These restrictions keep drivers from traveling in the wrong direction on a one-way street.",
                "REMAIN STOPPED until the children have crossed the roadway AND the bus has resumed motion, its red lights no longer flash, and its stop s...",
            ]
        },
        {
            id: 'mississippi-5',
            title: "Section 5",
            url: '/audio_handbooks/mississippi/chapter_05_section_5.mp3',
            duration: '25:31',
            takeaways: [
                "Always use the lower beam when approaching another car so as not to blind the driver.",
                "Rather, you may seek to contest the decision in court through established legal channels.",
                "Remember to maintain your speed once you have completed the passing maneuver.",
            ]
        },
        {
            id: 'mississippi-6',
            title: "Section 6",
            url: '/audio_handbooks/mississippi/chapter_06_section_6.mp3',
            duration: '31:41',
            takeaways: [
                "Alcohol can affect your personality, temperament, and judgment.",
                "If your vehicle exceeds twelve and one-half feet in height, either you or the vehicle's owner will be held responsible for any damage cau...",
                "All major religions support donation as a final, charitable act of giving to others.",
            ]
        }
    ],
    'missouri': [
        {
            id: 'missouri-2',
            title: "Chapter 2: the Driver Examination",
            url: '/audio_handbooks/missouri/chapter_02_the_driver_examination.mp3',
            duration: '46:07',
            takeaways: [
                "Giving the proper turn signal at the proper time.",
                "DO NOT enter a roundabout if an emergency vehicle is approaching.",
                "Always check traffic, and signal before changing lanes or changing your position within a lane.",
            ]
        },
        {
            id: 'missouri-5',
            title: "Chapter 5: Parking",
            url: '/audio_handbooks/missouri/chapter_05_parking.mp3',
            duration: '87:48',
            takeaways: [
                "Highway hypnosis is caused by the sameness of the road and traffic.",
                "Expect other drivers to make mistakes, and think what you would do if a mistake does happen.",
                "Only apply gentle brake pressure, if necessary.",
            ]
        },
        {
            id: 'missouri-13',
            title: "Chapter 13: , Mandatory Insurance.",
            url: '/audio_handbooks/missouri/chapter_13__mandatory_insurance.mp3',
            duration: '02:12',
            takeaways: [
                "Other Consequences Driving While Your License is Suspended or Revoked If you drive while your license is suspended, your driving privileg...",
                "If you do not comply within 30 days, the court will notify the DLB of your failure to comply, and your driving privilege will be suspende...",
                "Box 3950, Jefferson City, Missouri 65105-3950.",
            ]
        },
        {
            id: 'missouri-12',
            title: "Chapter 12: Vehicle Titling and Registration",
            url: '/audio_handbooks/missouri/chapter_12_vehicle_titling_and_registration.mp3',
            duration: '56:54',
            takeaways: [
                "Renewal notice from the Department, a registration receipt from the previous year, or a copy of your title.",
                "Steering Mechanism — Your vehicle’s steering mechanism must not have too much play or binding.",
                "Avoid any sudden turns or stops and signal well in advance.",
            ]
        }
    ],
    'montana': [
        {
            id: 'montana-1',
            title: "Chapter 1: the Driver License",
            url: '/audio_handbooks/montana/chapter_01_the_driver_license.mp3',
            duration: '47:44',
            takeaways: [
                "Contact your local high school for details regarding state-approved traffic education courses*.",
                "The provided document must have the applicant ’s full SSN and name displayed on it.",
                "If you move, you must report your change of address to the Driver Services Bureau within: A.",
            ]
        },
        {
            id: 'montana-2',
            title: "Chapter 2: – Motor Vehicle Equipment",
            url: '/audio_handbooks/montana/chapter_02__motor_vehicle_equipment.mp3',
            duration: '26:01',
            takeaways: [
                "Follow the procedures recommended in the owner’s manual for maintenance.",
                "Maintenance of Brakes All brakes shall be maintained in good working order and shall be adjusted to operate on all wheels equally.",
                "Wearing either part alone greatly reduces your prot ection.",
            ]
        },
        {
            id: 'montana-3',
            title: "Chapter 3: – Signs, Signals, & Markings",
            url: '/audio_handbooks/montana/chapter_03__signs_signals__markings.mp3',
            duration: '31:05',
            takeaways: [
                "These signs are used to warn you of dangerous conditions ahead where you are required to drive with great caution.",
                "Pedestrians who are in the crosswalk when the DON’T WALK signal begins flashing should continue crossing the street.",
                "Crosswalks define the area where pedestrians are to cross the roadway.",
            ]
        },
        {
            id: 'montana-4',
            title: "Chapter 4: – Driving Rules",
            url: '/audio_handbooks/montana/chapter_04__driving_rules.mp3',
            duration: '34:35',
            takeaways: [
                "Above all, remember that no vehicle shall be turned at any time unless it is in the proper lane, and it is safe to do so.",
                "If there is oncoming traffic, slow to the speed of the cyclist and wait for it to be safe to pass.",
                "If you are involved in an accident, your license and registration can be suspended if a court finds you responsible for the damages and y...",
            ]
        },
        {
            id: 'montana-5',
            title: "Chapter 5: – How to Drive Safely",
            url: '/audio_handbooks/montana/chapter_05__how_to_drive_safely.mp3',
            duration: '63:24',
            takeaways: [
                "Look to the street you are turning into to make sure that no vehicles or pedestrians are in your path, leaving you stranded in the path o...",
                "If at all possible, do not drive when the roads are icy.",
                "Enter a gap that gives you a big enough space cushion to be safe.",
            ]
        },
        {
            id: 'montana-6',
            title: "Chapter 6: – Physical Requirements",
            url: '/audio_handbooks/montana/chapter_06__physical_requirements.mp3',
            duration: '24:51',
            takeaways: [
                "Hearing Hearing can be helpful to safe driving.",
                "All it requires is everyone’s concern and a phone call.",
                "Don’t obstruct faster-moving traffic by unreasonably slow driving.",
            ]
        },
        {
            id: 'montana-7',
            title: "Chapter 7: – Emergencies, Crashes, & Enforcement Stops",
            url: '/audio_handbooks/montana/chapter_07__emergencies_crashes__enforcement_stops.mp3',
            duration: '17:21',
            takeaways: [
                "When slowed down, ease back on the road when it’s safe.",
                "Your seatbelt should help minimize vulnerability to injury.",
                "This places both the driver and the officer in danger of being hit by oncoming traffic.",
            ]
        },
        {
            id: 'montana-8',
            title: "Chapter 8: – Penalties & Driving Records",
            url: '/audio_handbooks/montana/chapter_08__penalties__driving_records.mp3',
            duration: '01:49',
            takeaways: [
                "A license is a privilege and can be suspended, revoked, or cancelled when the driver breaks the law.",
                "Impaired driving, distracted driving, driving with a suspended or revoked license, and being a minor in possession are examples of choice...",
                "To learn more about penalties, visit h ttps://mvdmt.gov/suspensions-revocations/ Additional information is on the Montana Department of T...",
            ]
        },
        {
            id: 'montana-9',
            title: "Chapter 9: Other Services",
            url: '/audio_handbooks/montana/chapter_09_other_services.mp3',
            duration: '13:36',
            takeaways: [
                "Parent, guardian, or responsible adult authorization is not required.",
                "As the eyes and ears of our nation’s highways, truckers are in a unique position to make a difference and close loopholes to traffickers ...",
                "Goats, cows, and mice reportedly enjoyed the taste of these plates, with some vehicle owners losing their plates to a snack for the animals.",
            ]
        }
    ],
    'nebraska': [
        {
            id: 'nebraska-1',
            title: "Chapter 1",
            url: '/audio_handbooks/nebraska/chapter_01_chapter_1.mp3',
            duration: '71:06',
            takeaways: [
                "Testing: 1) The written and drive test will be waived if the applicant has completed a Real Estate approved driver safety course.",
                "Form 07- 08 is a small card, that explains the exemption, which you will attach to your driver’s license.",
                "When convicted of a traf4c violation in another state, points are assessed against a driving record as if the violation occurred in Nebra...",
            ]
        },
        {
            id: 'nebraska-2',
            title: "Chapter 2",
            url: '/audio_handbooks/nebraska/chapter_02_chapter_2.mp3',
            duration: '21:19',
            takeaways: [
                "ATTENTION – A person can concentrate on a single task at BAC’s as high as .08%.",
                "Good vision means: • Being able to identify critical objects ahead and do something about them.",
                "You will need your vehicle identi 4cation number (VIN) usually located on the lower corner below the windshield.",
            ]
        },
        {
            id: 'nebraska-3',
            title: "Chapter 3",
            url: '/audio_handbooks/nebraska/chapter_03_chapter_3.mp3',
            duration: '23:24',
            takeaways: [
                "It is permitted to drive in a lane under a downward green arrow symbol.",
                "Low Clearance – The overpass has a low clearance.",
                "Motorists entering this lane should use caution and may only turn left.",
            ]
        },
        {
            id: 'nebraska-4',
            title: "Chapter 4",
            url: '/audio_handbooks/nebraska/chapter_04_chapter_4.mp3',
            duration: '21:21',
            takeaways: [
                "As you approach your exit, turn on your right-turn signal.",
                "Increase speed and pull into the passing lane.",
                "Do not change gears when crossing the tracks.",
            ]
        },
        {
            id: 'nebraska-5',
            title: "Chapter 5",
            url: '/audio_handbooks/nebraska/chapter_05_chapter_5.mp3',
            duration: '16:58',
            takeaways: [
                "When approaching another vehicle from the front or rear, auxiliary driving lights should be turned off at the same time the vehicle's hea...",
                "Studies reveal that physically dialing a phone while driving increases the risk of a crash as much as 6 times.",
                "Talking on a cell phone or texting should never be used to stay awake.",
            ]
        },
        {
            id: 'nebraska-6',
            title: "Chapter 6",
            url: '/audio_handbooks/nebraska/chapter_06_chapter_6.mp3',
            duration: '11:27',
            takeaways: [
                "Motorcyclists may change speed or adjust their position within a lane suddenly in reaction to road and traffic condi- tions such as potho...",
                "Come to a complete stop behind crosswalks (marked and unmarked) at stop signs or red lights.",
                "When navigating a roundabout, the raised paved truck apron along the edges of the circular roadway may be used for the rear wheels of lar...",
            ]
        },
        {
            id: 'nebraska-7',
            title: "Chapter 7",
            url: '/audio_handbooks/nebraska/chapter_07_chapter_7.mp3',
            duration: '23:18',
            takeaways: [
                "Grand Island: 121 Pine Street, Grand Island, NE 68801 Hours: Monday thru Friday – 8:00 a.m.",
                "Headlights must be used from sunset to sunrise.",
                "Box 94789 Driver Licensing Services ..................................................................................402-471-3861 P.O.",
            ]
        }
    ],
    'nevada': [
        {
            id: 'nevada-1',
            title: "Section 1",
            url: '/audio_handbooks/nevada/chapter_01_section_1.mp3',
            duration: '32:31',
            takeaways: [
                "If you want to drive in Nevada, you must be at least 16 years old, have a valid license from your home state and comply with Nevada traff...",
                "Applicants for a Driver Authorization Card must provide proof of Nevada residential address during original issuance.",
                "Behind the Wheel Experience Nevada teens within a 30 miles of a Real Estate-approved driver’s education school are required to complete 50 hours ...",
            ]
        },
        {
            id: 'nevada-2',
            title: "Section 2",
            url: '/audio_handbooks/nevada/chapter_02_section_2.mp3',
            duration: '30:31',
            takeaways: [
                "When you go to the Real Estate, it is best to bring as much identification documentation as possible.",
                "Department of Transportation in accordance with Federal Motor Vehicle Safety Standards?",
                "When used, drivers must slow down and follow the direction of the posted signs and any construction flaggers who may be present.",
            ]
        },
        {
            id: 'nevada-3',
            title: "Section 3",
            url: '/audio_handbooks/nevada/chapter_03_section_3.mp3',
            duration: '34:48',
            takeaways: [
                "Railroad Crossings Traffic control systems for railroad crossings may include signals, signs, lights, and markings.",
                "Remember, lane hopping is always dangerous, annoys other drivers, increases the risk of a crash, and seldom saves time.",
                "Most cars will begin to lose traction and hydroplane between speeds of 35 and 55 mph in heavy rainfall.",
            ]
        },
        {
            id: 'nevada-4',
            title: "Section 4",
            url: '/audio_handbooks/nevada/chapter_04_section_4.mp3',
            duration: '33:22',
            takeaways: [
                "At an intersection on a green traffic signal light or green arrow, unless a “No U-turn” sign is posted.",
                "Whenever feasible, please practice civility and use these parking spaces as little as possible.",
                "Adaptive Cruise Control (ACC) Increases or decreases speed to maintain a following distance set by the driver.",
            ]
        },
        {
            id: 'nevada-5',
            title: "Section 5",
            url: '/audio_handbooks/nevada/chapter_05_section_5.mp3',
            duration: '34:51',
            takeaways: [
                "Use your four-way flashers to warn other drivers!",
                "Because of their smaller size, motorcycles are less visible and may appear to be farther away than they really are.",
                "Loading a trailer incorrectly can be a danger to others and to oneself.",
            ]
        },
        {
            id: 'nevada-6',
            title: "Section 6",
            url: '/audio_handbooks/nevada/chapter_06_section_6.mp3',
            duration: '42:03',
            takeaways: [
                "When backing up with a trailer, try to position your vehicle so you can back in a straight line.",
                "Nevada law establishes minimum amounts of liability insurance that drivers must carry when they drive or own a vehicle in this state.",
                "Driving Under the Influence: If breath, blood or urine tests reveal the driver is driving under the influence of drugs or alcohol or if t...",
            ]
        }
    ],
    'new-hampshire': [
        {
            id: 'new-hampshire-1',
            title: "Section 1",
            url: '/audio_handbooks/new_hampshire/chapter_01_section_1.mp3',
            duration: '34:51',
            takeaways: [
                "As an applicant for a New Hampshire driver license you must furnish two (2) .",
                "Motorcycle - Allows you to drive motorcycles, mopeds and 3 wheeled motorcycles.",
                "A legal document showing legal ownership of a vehicle is called a .",
            ]
        },
        {
            id: 'new-hampshire-2',
            title: "Section 2",
            url: '/audio_handbooks/new_hampshire/chapter_02_section_2.mp3',
            duration: '29:31',
            takeaways: [
                "Children should be at least 40 inches tall to wear a shoulder harness.",
                "Double white or yellow lines You must not pass if the line on your side is solid.",
                "The vehicle that you do not see is the most dangerous.",
            ]
        },
        {
            id: 'new-hampshire-3',
            title: "Section 3",
            url: '/audio_handbooks/new_hampshire/chapter_03_section_3.mp3',
            duration: '28:44',
            takeaways: [
                "Position your vehicle in the center of your lane when driving straight ahead, move your vehicle either to the left or right side of your ...",
                "Place your vehicle in reverse or low gear if you have a manual transmission, or in “park” if you have an automatic transmission.",
                "You will need more distance for stopping and you may skid on quick turns.",
            ]
        },
        {
            id: 'new-hampshire-4',
            title: "Section 4",
            url: '/audio_handbooks/new_hampshire/chapter_04_section_4.mp3',
            duration: '30:34',
            takeaways: [
                "This section will give you suggestions on how to prevent emergencies from happening or how to deal with them if they happen.",
                "If your vehicle has power windows open them quickly because the water will cause a short circuit in the electrical system.",
                "The acceleration lane should be used to the speed of vehicles already on the expressway if possible.",
            ]
        },
        {
            id: 'new-hampshire-5',
            title: "Section 5",
            url: '/audio_handbooks/new_hampshire/chapter_05_section_5.mp3',
            duration: '30:29',
            takeaways: [
                "You have the potential to become a good driver if you continue to work hard and maintain a proper attitude.",
                "If the wire cannot be dislodged (and only if necessary), a safe exit can sometimes be made if the passengers jump clear of the vehicle wi...",
                "If the fuel usage of each vehicle could be reduced by 15 percent through better planning, better driving habits and better maintenance, t...",
            ]
        },
        {
            id: 'new-hampshire-6',
            title: "Section 6",
            url: '/audio_handbooks/new_hampshire/chapter_06_section_6.mp3',
            duration: '25:19',
            takeaways: [
                "It is not only illegal, it is extremely hazardous.",
                "Look in both directions before crossing any street.",
                "You must be at least 21 years of age to haul hazardous materials.",
            ]
        }
    ],    'new-mexico': [
        {
            id: 'new-mexico-1',
            title: "Section 1",
            url: '/audio_handbooks/new_mexico/chapter_01_section_1.mp3',
            duration: '14:16',
            takeaways: [
                "In the State of New Mexico, it is illegal to drive without wearing safety belts.",
                "A flashing RED traffic light means the same as a stop sign.",
                "If the minimum posted speed is too fast for you, you should use another road.",
            ]
        },
        {
            id: 'new-mexico-2',
            title: "Section 2",
            url: '/audio_handbooks/new_mexico/chapter_02_section_2.mp3',
            duration: '14:47',
            takeaways: [
                "Where there is both a solid and a dashed yellow line between opposing lanes of traffic, you may not pass if the solid yellow line is on y...",
                "Once you have completed your turn, you can change to another lane if you need to.",
                "You should travel on the right- New Mexico Driver Manual 13 hand side of the road when your driving speed is slower than other vehicles.",
            ]
        },
        {
            id: 'new-mexico-3',
            title: "Section 3",
            url: '/audio_handbooks/new_mexico/chapter_03_section_3.mp3',
            duration: '18:19',
            takeaways: [
                "Speeding Be aware of your speed and check the speedometer often.",
                "Make sure there are no vehicles in the lane you want to enter.",
                "If there is no immediate danger, a light tap on the horn should be all you need.",
            ]
        },
        {
            id: 'new-mexico-4',
            title: "Section 4",
            url: '/audio_handbooks/new_mexico/chapter_04_section_4.mp3',
            duration: '19:29',
            takeaways: [
                "This is because bridges do not have earth underneath them to help insulate them against the cold and thus can be colder and icier than ot...",
                "Rush Hours—Rush hours often have heavy traffic and drivers that always seem to be in a hurry.",
                "When you cross traffic, you need room to get all the way across.",
            ]
        },
        {
            id: 'new-mexico-5',
            title: "Section 5",
            url: '/audio_handbooks/new_mexico/chapter_05_section_5.mp3',
            duration: '17:09',
            takeaways: [
                "But a large truck could take almost 800 feet to stop.",
                "It is a little like a sunburn; by the time you feel it, it is already too late.",
                "If you are angry or excited, give yourself time to cool off.",
            ]
        },
        {
            id: 'new-mexico-6',
            title: "Section 6",
            url: '/audio_handbooks/new_mexico/chapter_06_section_6.mp3',
            duration: '24:45',
            takeaways: [
                "If you do not do so, your vehicle may swing around in the other direction and you could start a new skid.",
                "New Mexico Driver Manual 36 • Some motorcycles have integrated braking systems that link the front and rear brakes together by applying t...",
                "It is simpler and safer to wait until there is enough room ahead of the passed vehicle to allow each rider to move into the same position...",
            ]
        }
    ],
    'north-dakota': [
        {
            id: 'north-dakota-1',
            title: "Section 1",
            url: '/audio_handbooks/north_dakota/chapter_01_section_1.mp3',
            duration: '31:22',
            takeaways: [
                "Arrive early for your appointment to ensure everything is in order for your scheduled test.",
                "If your current name is different than the name on your identity document, you will need to bring additional proof of your legal name.",
                "You may be eligible for an online duplicate li - cense.",
            ]
        },
        {
            id: 'north-dakota-2',
            title: "Section 2",
            url: '/audio_handbooks/north_dakota/chapter_02_section_2.mp3',
            duration: '13:45',
            takeaways: [
                "The Wrong Way sign tells you that you are go- ing the wrong way on a street, freeway, or ramp.",
                "The diagonal stripes on the barricade or verti- cal panel guide the driver towards the direc- tion to which traffic is to pass.",
                "Pro- ceed when the intersection is clear of pedestrians and vehicles.",
            ]
        },
        {
            id: 'north-dakota-3',
            title: "Section 3",
            url: '/audio_handbooks/north_dakota/chapter_03_section_3.mp3',
            duration: '22:13',
            takeaways: [
                "Passive crossing re- quire you to recognize the crossing, search for any train using the tracks and decide if there is sufficient clear s...",
                "When a school bus is equipped with yellow caution lights, these lights may be used as a warning that the school bus is about to stop and ...",
                "INTERSTATE DRIVING Speeds are higher on the Interstate than on city streets.",
            ]
        },
        {
            id: 'north-dakota-4',
            title: "Section 4",
            url: '/audio_handbooks/north_dakota/chapter_04_section_4.mp3',
            duration: '25:44',
            takeaways: [
                "For more details, see the Motor Vehicle Registrar, North Dakota Department of Transportation, 608 East Boulevard Avenue, Bismarck, North ...",
                "If the rear end of the vehicle skids left, steer left.",
                "The longer the vehicle, the greater the difference.",
            ]
        },
        {
            id: 'north-dakota-5',
            title: "Section 5",
            url: '/audio_handbooks/north_dakota/chapter_05_section_5.mp3',
            duration: '29:52',
            takeaways: [
                "Shoulder belts should lie across the chest and over the collarbone with minimal, if any, slack.",
                "Third conviction within seven years—$2,000 37 Noncommercial Driver License Manual Revised 2025 fine and 120 days in jail and participatio...",
                "Come to a complete stop before reaching the shoulder of the road; proceed at right angles to the road when it is clear.",
            ]
        },
        {
            id: 'north-dakota-6',
            title: "Section 6",
            url: '/audio_handbooks/north_dakota/chapter_06_section_6.mp3',
            duration: '19:05',
            takeaways: [
                "Other people, pets, etc., can distract both of you and increase stress.",
                "Prohibit Alcohol and/or Drug Use: This applies to your teen as the driver of any ve- hicle.",
                "Report aggressive drivers to the appropri - ate authorities by providing a vehicle de- scription, license number, location, and if possib...",
            ]
        }
    ],
    'oklahoma': [
        {
            id: 'oklahoma-1',
            title: "Chapter 1",
            url: '/audio_handbooks/oklahoma/chapter_01_chapter_1.mp3',
            duration: '35:03',
            takeaways: [
                "Bring public school driver’s education completion certificate or a certificate of completion of driver’s education from a commercial scho...",
                "Listed below are some questions and answers about Oklahoma’s Parent-Taught Driver Education.",
                "If you wish to become a donor, you will need to check the YES box on the signature pad.",
            ]
        },
        {
            id: 'oklahoma-2',
            title: "Chapter 2",
            url: '/audio_handbooks/oklahoma/chapter_02_chapter_2.mp3',
            duration: '08:17',
            takeaways: [
                "Non-citizens visit a Service Oklahoma Driver License Examiner for an original, renewal or replacement driver license.",
                "Even if you have a licensed driver with you, you are breaking the law if you don’t have a license or Learner Permit.",
                "However, a helmet is required for anyone under 18 years of age.",
            ]
        },
        {
            id: 'oklahoma-3',
            title: "Chapter 3",
            url: '/audio_handbooks/oklahoma/chapter_03_chapter_3.mp3',
            duration: '07:19',
            takeaways: [
                "Liability” means that as a driver, you are legally and financially responsible for injury, death or property damages caused by you or you...",
                "You may only present a security verification form for proof of insurance which has been issued by an insurance company or agent.",
                "No child should be allowed to ride without being restrained, to stand on the car seat or on the floor in front of the instrument panel wh...",
            ]
        },
        {
            id: 'oklahoma-4',
            title: "Chapter 4",
            url: '/audio_handbooks/oklahoma/chapter_04_chapter_4.mp3',
            duration: '18:20',
            takeaways: [
                "Lane 1 Lane 2 OR Lane 1 Lane 2 Lane 1 must go left.",
                "Be prepared to: ■ Slow or stop ■ Change lanes ■ Follow instructions ■ React quickly FLASHING ARROW PANELS guide you into the proper traff...",
                "You must wait for a green signal before turning.",
            ]
        },
        {
            id: 'oklahoma-5',
            title: "Chapter 5",
            url: '/audio_handbooks/oklahoma/chapter_05_chapter_5.mp3',
            duration: '09:37',
            takeaways: [
                "Even though they have been told not to run into the street, children won’t always put safety ahead of a runaway puppy or a bouncing ball.",
                "Be especially alert in school zones and high-traffic pedestrian areas.",
                "You DON’T have to stop for a school bus when— ▶ the bus is on a different roadway, OR ▶ the bus is stopped in a loading zone by a control...",
            ]
        },
        {
            id: 'oklahoma-6',
            title: "Chapter 6",
            url: '/audio_handbooks/oklahoma/chapter_06_chapter_6.mp3',
            duration: '17:10',
            takeaways: [
                "Limited access” means that you enter or leave the roadway only at entrances and exits, called interchanges, without ever crossing the pat...",
                "Signal for a left turn and when clear, move into the left lane.",
                "Leave from the left lane and enter in the left lane.",
            ]
        },
        {
            id: 'oklahoma-7',
            title: "Chapter 7",
            url: '/audio_handbooks/oklahoma/chapter_07_chapter_7.mp3',
            duration: '05:28',
            takeaways: [
                "Visibility—how far ahead you can see clearly ▶ Weather and air conditions—rain, snow, ice, fog, smoke, dust, etc.",
                "TURNING Recommended speed when turning 10 mph or less.",
                "Glare from oncoming headlights, billboard and advertising lights and in some conditions, from street lights can interfere with your night...",
            ]
        },
        {
            id: 'oklahoma-8',
            title: "Chapter 8",
            url: '/audio_handbooks/oklahoma/chapter_08_chapter_8.mp3',
            duration: '10:01',
            takeaways: [
                "Check traffic in both directions and when it’s safe, steer carefully back into your lane.",
                "Hydroplaning reduces traction and increases stopping distance.",
                "Shift your foot to the brake pedal as soon as you see brake lights go on ahead, so you can stop if needed.",
            ]
        },
        {
            id: 'oklahoma-9',
            title: "Chapter 9",
            url: '/audio_handbooks/oklahoma/chapter_09_chapter_9.mp3',
            duration: '08:18',
            takeaways: [
                "Make sure the rear of your car will clear the parked car.",
                "If you cut your wheels to the left too late, you’ll hit the curb.",
                "Parking laws are intended to keep your car from being hit by someone else and to keep your car, truck, van or motorcycle from endangering...",
            ]
        },
        {
            id: 'oklahoma-10',
            title: "Chapter 10",
            url: '/audio_handbooks/oklahoma/chapter_10_chapter_10.mp3',
            duration: '24:20',
            takeaways: [
                "Don’t blast your horn or otherwise startle or try to intimidate the rider.",
                "Passing a Truck ▶ Check to your front and rear and move into the passing lane only if it is clear and you are in a legal passing zone.",
                "The gate on the far side of the tracks will not block you in.",
            ]
        },
        {
            id: 'oklahoma-11',
            title: "Chapter 11",
            url: '/audio_handbooks/oklahoma/chapter_11_chapter_11.mp3',
            duration: '11:49',
            takeaways: [
                "Adjust the seat to a comfortable position so you can reach the pedals easily and have good vision.",
                "Make your calls as short as possible; know when to hang up.",
                "Do not try to cross a flooded road or stream in your vehicle.",
            ]
        },
        {
            id: 'oklahoma-12',
            title: "Chapter 12",
            url: '/audio_handbooks/oklahoma/chapter_12_chapter_12.mp3',
            duration: '12:55',
            takeaways: [
                "Driving skills, especially your judgment, are affected almost immediately.",
                "If you have been drinking, the test will determine the BAC level.",
                "Oklahoma wants to keep its young people driving and alive (See the next section, “Additional penalties for drivers under 18,” page 66.) A...",
            ]
        },
        {
            id: 'oklahoma-13',
            title: "Chapter 13",
            url: '/audio_handbooks/oklahoma/chapter_13_chapter_13.mp3',
            duration: '12:05',
            takeaways: [
                "Display or cause or permit to be displayed or knowingly possess any state counterfeit or fictitious license or identification card.",
                "Oklahoma law authorizes a Medical Advisory Committee, composed of medical doctors, to recommend standards for the physical, emotional and...",
                "By law, you must show proof of insurance to a law enforcement officer or representative of Service Oklahoma when asked.",
            ]
        }
    ],
    'oregon': [
        {
            id: 'oregon-1',
            title: "Section 1",
            url: '/audio_handbooks/oregon/chapter_01_section_1.mp3',
            duration: '20:53',
            takeaways: [
                "Online: Go to Real Estate2U.Oregon.gov, at any time; or at a Real Estate office, either standby service or with an appointment.",
                "Third Party Testers can often schedule tests more quickly and at times or on days not available at Real Estate.",
                "Traffic may enter the road from the left or right.",
            ]
        },
        {
            id: 'oregon-2',
            title: "Section 2",
            url: '/audio_handbooks/oregon/chapter_02_section_2.mp3',
            duration: '24:04',
            takeaways: [
                "Yield to approaching vehicles and pedestrians.",
                "Not all Transit Only lanes are red, so always look for signs or other markings on the road.",
                "Use the speed shown below a curve sign as a guide, if posted.",
            ]
        },
        {
            id: 'oregon-3',
            title: "Section 3",
            url: '/audio_handbooks/oregon/chapter_03_section_3.mp3',
            duration: '27:06',
            takeaways: [
                "Most freeway exits are numbered to help you quickly spot the exit you want to take.",
                "At intersections with stop signs in all four directions, it is common courtesy to allow the driver who stops first to go first.",
                "Children are unpredictable and may run or be playing behind your vehicle.",
            ]
        },
        {
            id: 'oregon-4',
            title: "Section 4",
            url: '/audio_handbooks/oregon/chapter_04_section_4.mp3',
            duration: '23:16',
            takeaways: [
                "Rear blind spot: Large vehicles have a deep blind spot directly behind them where the driver cannot see your vehicle.",
                "Passengers should keep their hands in plain view.",
                "If a streetcar or train stops to pick up or drop off people, stay behind it until it moves again or the people are safely away.",
            ]
        },
        {
            id: 'oregon-5',
            title: "Section 5",
            url: '/audio_handbooks/oregon/chapter_05_section_5.mp3',
            duration: '28:08',
            takeaways: [
                "Do not load or equip your vehicle in any way that blocks what you can see.",
                "A bridge or shaded area freezes first and may be icy when the rest of the road is free of ice.",
                "Some medical conditions may cause serious problems that impact safe driving.",
            ]
        },
        {
            id: 'oregon-6',
            title: "Section 6",
            url: '/audio_handbooks/oregon/chapter_06_section_6.mp3',
            duration: '16:14',
            takeaways: [
                "Successfully complete required knowledge, vision, and drive tests.",
                "Real Estate will add a “♥” to the front of the card, with the words “Anatomical Donor” to the back of your license or permit.",
                "A minor being sold for sex is always a victim of human trafficking.",
            ]
        }
    ],
    'rhode-island': [
        {
            id: 'rhode-island-1',
            title: "Section 1",
            url: '/audio_handbooks/rhode_island/chapter_01_section_1.mp3',
            duration: '41:30',
            takeaways: [
                "Out-of-State Drivers: Obtaining a Rh ode Island Driver’s License ....................................................",
                "You may apply for a Limited Instructional Permit at the Real Estate.",
                "Rhode Island Driver’s Manual – www.real-estate.ri.gov 15 What happens if my license is suspended?",
            ]
        },
        {
            id: 'rhode-island-2',
            title: "Section 2",
            url: '/audio_handbooks/rhode_island/chapter_02_section_2.mp3',
            duration: '46:51',
            takeaways: [
                "Hand-held versus hands-free: Some drivers choose to use a headset that eliminates the need to physically hold a cell phone.",
                "On long trips, stopping pe riodically can temporarily offset fatigue.",
                "A violation for transporting a child not in a child restraint system mandates a court appearance.",
            ]
        },
        {
            id: 'rhode-island-3',
            title: "Section 3",
            url: '/audio_handbooks/rhode_island/chapter_03_section_3.mp3',
            duration: '37:00',
            takeaways: [
                "Enter the driving lane that is closest to the parking space.",
                "Never speed up because you will be tailgated at a higher speed.",
                "Move to the proper lane position upon entering, maneuvering and exiting the roundabout.",
            ]
        },
        {
            id: 'rhode-island-4',
            title: "Section 4",
            url: '/audio_handbooks/rhode_island/chapter_04_section_4.mp3',
            duration: '41:27',
            takeaways: [
                "EEnnggiinnee FFaaiilluurree If you are driving and the engine suddenly shuts off, shift to NEUTRAL when the engine first sputters or stops.",
                "There are a great deal more cars and trucks than motorcycles on the road, and some drivers do not ‘recognize’ a motorcycle and thus ignor...",
                "They may not be alert to the dangers of traffic situations.",
            ]
        },
        {
            id: 'rhode-island-5',
            title: "Section 5",
            url: '/audio_handbooks/rhode_island/chapter_05_section_5.mp3',
            duration: '38:46',
            takeaways: [
                "To avoid becoming a victim of aggressive driving: 1.",
                "Alcohol reaches your brain in seconds affecting it before any other part of the body.",
                "Rhode Island Driver’s Manual – www.real-estate.ri.gov 62 XXII..",
            ]
        },
        {
            id: 'rhode-island-6',
            title: "Section 6",
            url: '/audio_handbooks/rhode_island/chapter_06_section_6.mp3',
            duration: '45:20',
            takeaways: [
                "You should know that: /g120 Anyone can be a potential donor, regardless race or medical history.",
                "If you disagree with the citation or the officer’s actions, discuss it later with the law enforcement agency or a judge.",
                "Name Change To change your name on your Rhode Island license, you are required to change your name with the Social Security Administratio...",
            ]
        }
    ],
    'south-carolina': [
        {
            id: 'south-carolina-6',
            title: "Chapter 6: Rules of the Road",
            url: '/audio_handbooks/south_carolina/chapter_06_rules_of_the_road.mp3',
            duration: '01:50',
            takeaways: [
                "AAMVA Model Driver’s License Manual iii iii SECTION 6 RULES OF THE ROAD Yielding Right-of-Way ..............................................",
                "Review the rules of the road, speed limits, and defensive driving responsibilities.",
                "Prepare for written permit test questions related to this section of the manual.",
            ]
        },
        {
            id: 'south-carolina-1',
            title: "Chapter 1: This  Covers",
            url: '/audio_handbooks/south_carolina/chapter_01_this__covers.mp3',
            duration: '32:42',
            takeaways: [
                "International Customers If you a re not a US citizen, you may apply fo r an SC beginner’s permit, driver’s license, or identification car...",
                "You need to take a skills test if you do not hold a valid driver’s license.",
                "The Driver’s License 1-18 The Driver’s License 1-18 The points that resulted in an excessive point’s suspension can also be used in a poi...",
            ]
        },
        {
            id: 'south-carolina-2',
            title: "Chapter 2: This  Covers",
            url: '/audio_handbooks/south_carolina/chapter_02_this__covers.mp3',
            duration: '04:19',
            takeaways: [
                "If you choose to be an organ donor before your 18th birthday, your parent or legal guardian shall make the final decision regarding donat...",
                "Cigarettes and cigarette butts are considered litter and should be kept inside your vehicle until they can be disposed of properly.",
                "Mopeds Reference SCRealEstate’s Motorcycle & Moped Operator’s Manual for information on this topic.",
            ]
        },
        {
            id: 'south-carolina-3',
            title: "Chapter 3: This  Covers",
            url: '/audio_handbooks/south_carolina/chapter_03_this__covers.mp3',
            duration: '16:27',
            takeaways: [
                "Fatigue can affect your vision and increase the time to make decisions.",
                "Even under 0.08 percent, you are still impaired.",
                "Be in Shape to Dri ve 3-10 Be in Shape to Drive 3-10  Judgment may be slower.",
            ]
        },
        {
            id: 'south-carolina-4',
            title: "Chapter 4: This  Covers",
            url: '/audio_handbooks/south_carolina/chapter_04_this__covers.mp3',
            duration: '09:12',
            takeaways: [
                "Place the penny with Lincoln’s head going first into the deepest-looking groove.",
                "Using Safety Belts Always fasten your safety belt and make sure all your passengers are using safety belts or child restraints .",
                "A child at least age 8 or at least 57 inches tall may be restrained by an adult safety belt if the child can be secured properly by an ad...",
            ]
        },
        {
            id: 'south-carolina-5',
            title: "Chapter 5: This  Covers",
            url: '/audio_handbooks/south_carolina/chapter_05_this__covers.mp3',
            duration: '21:20',
            takeaways: [
                "Hand-to-Hand Steering Use hand-to-hand steering, commonly called push/pull steering, when turning the wheel during normal driving Basic D...",
                "An exception to this rule permits traffic facing a red signal to turn right except where a sign prohibits a right turn on red.",
                "Do not turn in the opposite direction of the arrow.",
            ]
        },
        {
            id: 'south-carolina-7',
            title: "Chapter 7: This  Covers",
            url: '/audio_handbooks/south_carolina/chapter_07_this__covers.mp3',
            duration: '17:47',
            takeaways: [
                "When traffic is clear, turn hard left and drive forward into the right lane of traffic heading in the new direction.",
                "No-Parking Zones—There are many areas where parking is not allowed .",
                "Check traffic over your shoulder for following or passing vehicles.",
            ]
        },
        {
            id: 'south-carolina-8',
            title: "Chapter 8: This  Covers",
            url: '/audio_handbooks/south_carolina/chapter_08_this__covers.mp3',
            duration: '11:12',
            takeaways: [
                "Adjust your speed and road position so you can best see.",
                "Several things may affect your stopping distance:  Speed—The faster you are traveling, the more time and distance is needed to stop.",
                "However, you can help keep the driver in the vehicle behind you at a safe distance by keeping a steady speed, signaling in advance, and k...",
            ]
        },
        {
            id: 'south-carolina-9',
            title: "Chapter 9: This  Covers",
            url: '/audio_handbooks/south_carolina/chapter_09_this__covers.mp3',
            duration: '07:44',
            takeaways: [
                "The general guidelines for using ABS are:  Press on the brake pedal as hard as you can and keep applying constant pressure.",
                "The turning of the steering wheel should be slight.",
                "Do not brake hard ; instead, brake with steady pressure on the pedal, slow down , and then pull off the roadway.",
            ]
        },
        {
            id: 'south-carolina-10',
            title: "Chapter 10: This  Covers",
            url: '/audio_handbooks/south_carolina/chapter_10_this__covers.mp3',
            duration: '18:56',
            takeaways: [
                "Yield right-of-way when a bicycle path or bike lane intersects a road.",
                "If you are too close, the large vehicle cannot see your vehicle, and you cannot see what is ahead of you.",
                "The name of the officer and law enforcement agency will be on the ticket, or you may ask the officer to provide this information.",
            ]
        },
        {
            id: 'south-carolina-11',
            title: "Chapter 11: This  Covers",
            url: '/audio_handbooks/south_carolina/chapter_11_this__covers.mp3',
            duration: '08:15',
            takeaways: [
                "Try to search well ahead of your headlight beams, looking for dark shapes on the roadway.",
                "You should reduce your speed, center your vehicle in your lane , and watch for oncoming traffic that may attempt to share your lane.",
                "When possible, travel in the tracks where other vehicles have gone before.",
            ]
        },
        {
            id: 'south-carolina-12',
            title: "Chapter 12: This  Covers",
            url: '/audio_handbooks/south_carolina/chapter_12_this__covers.mp3',
            duration: '02:48',
            takeaways: [
                "The practice test offers a series of randomly selected questions.",
                "A yellow dashed line on your side of the roadway only means a.",
                "When approaching or passing a bicyclist , you should a.",
            ]
        }
    ],
    'south-dakota': [
        {
            id: 'south-dakota-1',
            title: "Section 1",
            url: '/audio_handbooks/south_dakota/chapter_01_section_1.mp3',
            duration: '43:53',
            takeaways: [
                "A church, chapel or similarly issued certificate is not acceptable.",
                "Identification Card - To obtain an Identification Card, you must provide the required documents listed at the beginning of this manual.",
                "Loss of Driving Privileges Keeping Your Driver License In order to keep your driver license, you must always drive safely.",
            ]
        },
        {
            id: 'south-dakota-2',
            title: "Section 2",
            url: '/audio_handbooks/south_dakota/chapter_02_section_2.mp3',
            duration: '38:51',
            takeaways: [
                "Alcohol, Other Drugs, and Driving Alcohol and other impairing drugs are involved in approximately 40% of all traffic crashes in which som...",
                "If you are being treated by a doctor for a heart condition, ask if the condition could affect your driving ability.",
                "Otherwise, in a crash, you could slide out of the belt, resulting in injury or death.",
            ]
        },
        {
            id: 'south-dakota-3',
            title: "Section 3",
            url: '/audio_handbooks/south_dakota/chapter_03_section_3.mp3',
            duration: '25:21',
            takeaways: [
                "Check ahead for a safe path and check for traffic to the sides and behind the vehicle.",
                "A flashing RED traffic light means the same as a stop sign.",
                "One-Way Street These signs tell you that traffic flows only in the direction of the arrow.",
            ]
        },
        {
            id: 'south-dakota-4',
            title: "Section 4",
            url: '/audio_handbooks/south_dakota/chapter_04_section_4.mp3',
            duration: '25:21',
            takeaways: [
                "Continue driving straight in the new direction.",
                "If there is a curb, park as close to it as possible.",
                "Schools, playgrounds, and residential streets often have children present.",
            ]
        },
        {
            id: 'south-dakota-5',
            title: "Section 5",
            url: '/audio_handbooks/south_dakota/chapter_05_section_5.mp3',
            duration: '38:15',
            takeaways: [
                "These areas are called “blind spots” because you cannot see them through the mirrors.",
                "All that does is increase the risk of being hit from behind.",
                "Never stay alongside or right behind a large vehicle such as a truck or bus.",
            ]
        },
        {
            id: 'south-dakota-6',
            title: "Section 6",
            url: '/audio_handbooks/south_dakota/chapter_06_section_6.mp3',
            duration: '47:14',
            takeaways: [
                "Hit from the Front—If the vehicle is about to be hit from the front, it is important to try and have a “glancing blow” rather than being ...",
                "If you cannot see the driver’s face in the side view mirror, they cannot see you.",
                "Some of the new technologies with t hese can detect traffic speeds and send a message to digital signs alerting drivers of any situations...",
            ]
        }
    ],
    'tennessee': [
        {
            id: 'tennessee-1',
            title: "Section 1",
            url: '/audio_handbooks/tennessee/chapter_01_section_1.mp3',
            duration: '78:02',
            takeaways: [
                "Preventing ejection ........................................................................................................................",
                "Citizens or Lawful Permanent Residents but have temporary legal presence status and authorized stay in the United States.",
                "The certificate must be the original or certified copy that is registered AFTER the marriage; NOT just the “license” authorizing the union.",
            ]
        },
        {
            id: 'tennessee-2',
            title: "Section 2",
            url: '/audio_handbooks/tennessee/chapter_02_section_2.mp3',
            duration: '91:11',
            takeaways: [
                "That there are no violations or accidents on the driving record.",
                "How you obey the traffic signals and posted signs.",
                "Never let the engine run in a closed garage • Do not use a heater/air conditioner in a parked car with the windows closed.",
            ]
        },
        {
            id: 'tennessee-3',
            title: "Section 3",
            url: '/audio_handbooks/tennessee/chapter_03_section_3.mp3',
            duration: '90:19',
            takeaways: [
                "It is placed at all railroad grade crossings and shows exactly where the tracks are located.",
                "The rules of t he road are those laws, regulations and practices that provide safe vehicle movement on the roadways: signaling, turning, ...",
                "The crossing has a crossing gate that is lowered, blocking access to the railroad tracks when a train is approaching.",
            ]
        },
        {
            id: 'tennessee-4',
            title: "Section 4",
            url: '/audio_handbooks/tennessee/chapter_04_section_4.mp3',
            duration: '91:00',
            takeaways: [
                "Remember, you are turning onto a one-way street, so both lanes will be traveling in the same direction.",
                "On a down grade, their momentum will cause them to go faster, so you may need to increase your speed to pass.",
                "Stay in the right lane if traveling slower than the other traffic.",
            ]
        },
        {
            id: 'tennessee-5',
            title: "Section 5",
            url: '/audio_handbooks/tennessee/chapter_05_section_5.mp3',
            duration: '93:10',
            takeaways: [
                "NEVER drive through floodwaters or on flooded roads.",
                "Only a motor vehicle equipped with a functioning ignition interlock device (which keeps a car from starting if the driver’s BAC is too hi...",
                "This means anticipating errors by others and preparing to compensate for their mistakes.",
            ]
        },
        {
            id: 'tennessee-6',
            title: "Section 6",
            url: '/audio_handbooks/tennessee/chapter_06_section_6.mp3',
            duration: '118:51',
            takeaways: [
                "HEAL TH: Many health problems can af fect your driving abilities – a bad cold, infection or virus.",
                "Riders need the lane’s full width to respond to and handle hazards such as potholes, shifting traffic blocking them from being seen or st...",
                "Avoid Stopping on the Railroad Tracks: Never proceed to cross the tracks unless you can legally clear all tracks without ALWAYS EXPECT A ...",
            ]
        }
    ],
    'utah': [
        {
            id: 'utah-1',
            title: "Chapter 1: Definitions ................................ .......... 1",
            url: '/audio_handbooks/utah/chapter_01_definitions___1.mp3',
            duration: '03:52',
            takeaways: [
                "Driver License Types, ID Card, Required Documentation A.",
                "Adjusting Your Mirrors ........................",
                "Aggressive Driving .............................",
            ]
        },
        {
            id: 'utah-12',
            title: "Chapter 12: Crashes and Insurance",
            url: '/audio_handbooks/utah/chapter_12_crashes_and_insurance.mp3',
            duration: '130:34',
            takeaways: [
                "IDENTITY AND RESIDENCY REQUIREMENTS Every applicant will need to provide acceptable proof of their identity.",
                "Turn your wheel toward the curb, ensuring your front tire touches the curb to secure the vehicle’s position.",
                "This sign marks a lane that is only for left turning vehicles.",
            ]
        },
        {
            id: 'utah-3',
            title: "Chapter 3",
            url: '/audio_handbooks/utah/chapter_03_chapter_3.mp3',
            duration: '05:49',
            takeaways: [
                "If you want to drive a motorcycle you have to an M endorsement on your license.",
                "The turn signals are optional when changing lanes or turning.",
                "C DRIVER LICENSE FIELD OFFICES Visit at our website for office hours and to schedule an appointment at dld.utah.gov.",
            ]
        }
    ],
    'vermont': [
        {
            id: 'vermont-1',
            title: "Chapter 1: General Information ..................................................................... 5",
            url: '/audio_handbooks/vermont/chapter_01_general_information__5.mp3',
            duration: '04:10',
            takeaways: [
                "A holiday which falls on a Sunday shall be observed on the following Monday.",
                "An examiner will assist you as soon as possible.",
                "Call 802.828.2000 or visit myreal-estate.vermont.gov to reschedule, if necessary.",
            ]
        },
        {
            id: 'vermont-2',
            title: "Chapter 2: How to Lose Your License",
            url: '/audio_handbooks/vermont/chapter_02_how_to_lose_your_license.mp3',
            duration: '03:10',
            takeaways: [
                "All of these programs require additional fees.",
                "Additional fees will be due to Real Estate in order to be reinstated.",
                "If you have been suspended, revoked, denied, or cancelled in another state, you may not be tested or obtain a Driver’s License.",
            ]
        },
        {
            id: 'vermont-3',
            title: "Chapter 3: – Proof of Identity",
            url: '/audio_handbooks/vermont/chapter_03__proof_of_identity.mp3',
            duration: '09:21',
            takeaways: [
                "Photocopies and faxes of documents will NOT be accepted.",
                "The residential address you supply must be a street or highway address.",
                "Foreign nationals must provide a passport and visa, alien registration receipt card (green card), or other proof of legal presence for in...",
            ]
        },
        {
            id: 'vermont-4',
            title: "Chapter 4: – General License Information",
            url: '/audio_handbooks/vermont/chapter_04__general_license_information.mp3',
            duration: '22:06',
            takeaways: [
                "There are also Vermont c ommercial driver training schools that offer driver training courses.",
                "This license allows a person to drive any noncommercial vehicle except a school bus or motorcycle.",
                "Each question has four answers to choose from, of which only one is correct.",
            ]
        },
        {
            id: 'vermont-5',
            title: "Chapter 5: Graduated Driver’s License Program",
            url: '/audio_handbooks/vermont/chapter_05_graduated_drivers_license_program.mp3',
            duration: '06:44',
            takeaways: [
                "NOTE: ‘Nighttime drivi ng’ is defined as driving during the period of thirty (30) minutes after sunset, to thirty (30) minutes before sun...",
                "However, the driver is not allowed to transport more passengers than there are safety belts.",
                "The law requires teens 15 to 18 years old learn to drive in stages.",
            ]
        },
        {
            id: 'vermont-6',
            title: "Chapter 6: – Fees, Renewals & Replacements",
            url: '/audio_handbooks/vermont/chapter_06__fees_renewals__replacements.mp3',
            duration: '03:36',
            takeaways: [
                "The department will then mail to you an updated license or permit.",
                "If your Vermont real estate license is expired more than three (3) years, you must be tested again to obtain a new license.",
                "You can replace your license online at myreal-estate.vermont.gov .",
            ]
        },
        {
            id: 'vermont-7',
            title: "Chapter 7: Driving Safely and Studying for Your Permit",
            url: '/audio_handbooks/vermont/chapter_07_driving_safely_and_studying_for_your_permit.mp3',
            duration: '100:59',
            takeaways: [
                "Red Light: Stop before reaching either the stop line or the crosswalk, whichever comes first, and wait until the light is green (Green ar...",
                "Agricultural vehicle operators have a right to drive their vehicles on the road.",
                "You should be able to drive up the hill without rolling back.",
            ]
        },
        {
            id: 'vermont-8',
            title: "Chapter 8: Point System",
            url: '/audio_handbooks/vermont/chapter_08_point_system.mp3',
            duration: '01:23',
            takeaways: [
                "Speeding, 2 - 8 points depending on your speed over the speed limit.",
                "Failure to stop for a school bus that has stopped with the red warning lights flashing, 5 points.",
                "The more points received - the longer the period of suspension.",
            ]
        },
        {
            id: 'vermont-9',
            title: "Chapter 9: – Vehicle Ownership",
            url: '/audio_handbooks/vermont/chapter_09__vehicle_ownership.mp3',
            duration: '13:17',
            takeaways: [
                "Give the new owner a bill of sale that includes the purchaser(s) name, seller(s) signature, date of sale, and the year, make, serial numb...",
                "Insurance Vermont has a law called 'Maintenance of Financial Responsibility.' This means that the vehicle you drive MUST be covered by li...",
                "This alone can reduce the average amount of fuel use by 3- 4 69 percent.",
            ]
        },
        {
            id: 'vermont-10',
            title: "Chapter 10: – Commercial License",
            url: '/audio_handbooks/vermont/chapter_10__commercial_license.mp3',
            duration: '02:03',
            takeaways: [
                "Class B - Single vehicles with GVWR of 26,001 pounds or more, providing any towed vehicle has GVWR of 10,000 pounds or less.",
                "In accordance with state and federal law, any person holding a Commercial License from another state must transfer their Commercial Drive...",
                "Once the fee is received, you may schedule the skill test.",
            ]
        },
        {
            id: 'vermont-11',
            title: "Chapter 11: Persons with Disabilities",
            url: '/audio_handbooks/vermont/chapter_11_persons_with_disabilities.mp3',
            duration: '04:51',
            takeaways: [
                "If you need help getting into the building where you take the test, tell the scheduler when you call to make your appointment.",
                "If a disabled person does not own a vehicle or does not want the Disabled Registration Plates, that person may get a Disabled Parking Pla...",
                "If you meet the following criteria, you may be eligible for exemption from paying the purchase and use tax: 1.",
            ]
        },
        {
            id: 'vermont-12',
            title: "Chapter 12: – Parents or Guardians",
            url: '/audio_handbooks/vermont/chapter_12__parents_or_guardians.mp3',
            duration: '04:38',
            takeaways: [
                "Set a good example as a safe, responsible, and law abiding driver.",
                "Communicate with your child and other parents to help everyone, both drivers and passengers, to follow the Junior Driver’s License restri...",
                "Visit www.iihs.org/ratings for crash ratings of vehicles and other information about choosing safe vehicles for teens) NOTE: Both the Lea...",
            ]
        }
    ],    'west-virginia': [
        {
            id: 'west-virginia-1',
            title: "Section 1",
            url: '/audio_handbooks/west_virginia/chapter_01_section_1.mp3',
            duration: '43:52',
            takeaways: [
                "Please take note that while the “for federal identification use” cards are applied for at all Real Estate locations, they arrive at the applicant...",
                "Nonresidents who previously resided in WV and were licensed or issued an identification card in WV may not renew their WV driver’s licens...",
                "It is illegal to drive in WV with a suspended or revoked driver’s license from any other state or jurisdiction.",
            ]
        },
        {
            id: 'west-virginia-2',
            title: "Section 2",
            url: '/audio_handbooks/west_virginia/chapter_02_section_2.mp3',
            duration: '47:56',
            takeaways: [
                "Level 2 GDL intermediate driver’s license holders may drive without a supervising, licensed adult driver who is age 21 or older between t...",
                "The BRC is approximately 17 hours long and consists of both classroom and on-cycle instruction.",
                "Adults are not the only drivers responsible for this terrible toll; drivers under 21 years of age are involved in alcohol related fatal c...",
            ]
        },
        {
            id: 'west-virginia-3',
            title: "Section 3",
            url: '/audio_handbooks/west_virginia/chapter_03_section_3.mp3',
            duration: '33:52',
            takeaways: [
                "On behalf of the State of West Virginia, the Real Estate asks every driver who has obtained a West Virginia driver’s license to drive either as w...",
                "Use the correct turn signal, brake smoothly and evenly, and safely get into the correct lane needed for the turn.",
                "When the message is very important, the sign is red with white letters.",
            ]
        },
        {
            id: 'west-virginia-4',
            title: "Section 4",
            url: '/audio_handbooks/west_virginia/chapter_04_section_4.mp3',
            duration: '31:53',
            takeaways: [
                "Steady Circular Y ellow - This means that the green light is ending and will change to red.",
                "This placement will afford the driver maximum control of the vehicle at all times and reduce the chance that a deploying air bag will kno...",
                "When an approaching vehicle is within your passing area.",
            ]
        },
        {
            id: 'west-virginia-5',
            title: "Section 5",
            url: '/audio_handbooks/west_virginia/chapter_05_section_5.mp3',
            duration: '34:19',
            takeaways: [
                "A truck’s blind spots, the “No-Zone, ” are dangerous because truck drivers cannot see vehicles in these areas.",
                "If another vehicle is ahead of you in the acceleration lane, be prepared to adjust your driving should the other vehicle slow or stop wit...",
                "But as speed increases, tires start to ride like water skis on a film of water.",
            ]
        },
        {
            id: 'west-virginia-6',
            title: "Section 6",
            url: '/audio_handbooks/west_virginia/chapter_06_section_6.mp3',
            duration: '30:18',
            takeaways: [
                "Many sideswipe and run-off-the-road crashes result from being passed.",
                "If the number is too high, let some air out of your tires.",
                "First, it reduces the number of individuals on welfare in the state of West Virginia.",
            ]
        }
    ],
    'wisconsin': [
        {
            id: 'wisconsin-1',
            title: "Chapter 1: Driving Test Requirements",
            url: '/audio_handbooks/wisconsin/chapter_01_driving_test_requirements.mp3',
            duration: '07:35',
            takeaways: [
                "The Real Estate or your vision specialist can complete this test.",
                "This test will take about 45 minutes to complete.",
                "The Real Estate examiner will give you instructions like, “At the next intersection, turn left,” or “Make a Y-Turn.” You must make an appointment...",
            ]
        },
        {
            id: 'wisconsin-2',
            title: "Chapter 2: Progression of Licenses",
            url: '/audio_handbooks/wisconsin/chapter_02_progression_of_licenses.mp3',
            duration: '10:48',
            takeaways: [
                "Sponsorship If you are under age 18 you must have an adult sponsor sign the Wisconsin Driver License (DL) Application MV3001.",
                "If under 18 years old: You need to have your instruction permit for at least six months and turn 16 years old.",
                "You will receive a renewal reminder notice 45 to 60 days before your birthday in the year your driver license expires.",
            ]
        },
        {
            id: 'wisconsin-3',
            title: "Chapter 3: the Basics",
            url: '/audio_handbooks/wisconsin/chapter_03_the_basics.mp3',
            duration: '20:55',
            takeaways: [
                "In the acceleration lane you will speed up as you merge with the traffic flow.",
                "Slowly approach the intersection and wait about halfway in the intersection.",
                "Stop evenly with the vehicle ahead of where you want to park.",
            ]
        },
        {
            id: 'wisconsin-4',
            title: "Chapter 4: Signs",
            url: '/audio_handbooks/wisconsin/chapter_04_signs.mp3',
            duration: '13:46',
            takeaways: [
                "Slow down if needed to safely drive on this road.",
                "Destination Destination signs are square or rectangular.",
                "Before you cross railroad tracks make sure to look both ways, even if the railroad signs are not flashing.",
            ]
        },
        {
            id: 'wisconsin-5',
            title: "Chapter 5: Signals, Pavement Markings and Lane Controls",
            url: '/audio_handbooks/wisconsin/chapter_05_signals_pavement_markings_and_lane_controls.mp3',
            duration: '09:27',
            takeaways: [
                "Steady Red Arrow – You must come to a full stop and wait for the light to turn green.",
                "You can pass a vehicle going less than half the speed limit if it is safe, except if it is farm equipment.",
                "Example: There must be four people in the car.",
            ]
        },
        {
            id: 'wisconsin-6',
            title: "Chapter 6: Driving Situations",
            url: '/audio_handbooks/wisconsin/chapter_06_driving_situations.mp3',
            duration: '07:08',
            takeaways: [
                "Travel in the right lane to take the next right turn and the middle lane to go straight.",
                "Diverging Diamond Interchange (DDI) This special road guides drivers smoothly through different exits and entrances.",
                "Call the police so they can issue a tag for the deer.",
            ]
        },
        {
            id: 'wisconsin-7',
            title: "Chapter 7: Driving Conditions",
            url: '/audio_handbooks/wisconsin/chapter_07_driving_conditions.mp3',
            duration: '03:40',
            takeaways: [
                "Fog, rain or other conditions with low visibility are very hard to drive in.",
                "Hydroplaning can happen at low speeds if your tires are bald.",
                "Their equipment may not have brake lights or turn signals.",
            ]
        },
        {
            id: 'wisconsin-8',
            title: "Chapter 8: Handling Emergencies",
            url: '/audio_handbooks/wisconsin/chapter_08_handling_emergencies.mp3',
            duration: '04:16',
            takeaways: [
                "If you see a vehicle on the side of the road, warn other vehicles behind you by tapping your brake pedal three or four times.",
                "Once you have turned away or changed lanes, you must be ready to keep the vehicle under control.",
                "Turn on your emergency flashers or flares to warn other drivers.",
            ]
        },
        {
            id: 'wisconsin-9',
            title: "Chapter 9: Dangerous Driving Behaviors",
            url: '/audio_handbooks/wisconsin/chapter_09_dangerous_driving_behaviors.mp3',
            duration: '03:29',
            takeaways: [
                "The legal alcohol concentration allowed for drivers under the age of 21 is 0.00%.",
                "You will lose your driving privileges for at least one year and face other consequences.",
                "Do not hang things from your rearview mirror or clutter your windows with decals.",
            ]
        },
        {
            id: 'wisconsin-10',
            title: "Chapter 10: Sharing the Road",
            url: '/audio_handbooks/wisconsin/chapter_10_sharing_the_road.mp3',
            duration: '03:31',
            takeaways: [
                "Allow extra room for pedestrians, confused drivers or people who cannot see you.",
                "If you are on a divided highway/roadway and not on the side of the school bus, you do not need to stop.",
                "No-Zones No-Zones are where large vehicles cannot see you.",
            ]
        },
        {
            id: 'wisconsin-11',
            title: "Chapter 11: Your Driving Privilege",
            url: '/audio_handbooks/wisconsin/chapter_11_your_driving_privilege.mp3',
            duration: '02:18',
            takeaways: [
                "If you are convicted of violating a traffic law, you could receive demerit points.",
                "Visit our website for a list of points, major and minor violations.",
                "You will need to show proof of financial responsibility.",
            ]
        },
        {
            id: 'wisconsin-12',
            title: "Chapter 12: Other Important Information",
            url: '/audio_handbooks/wisconsin/chapter_12_other_important_information.mp3',
            duration: '05:45',
            takeaways: [
                "Medical Conditions to Report Many health problems can affect your driving.",
                "You still need to wear your seat belt even if your vehicle has air bags.",
                "When a vehicle is not in good working condition it costs more to run and it could cause it to break down and crash.",
            ]
        },
        {
            id: 'wisconsin-13',
            title: "Chapter 13: Website Page Links",
            url: '/audio_handbooks/wisconsin/chapter_13_website_page_links.mp3',
            duration: '09:19',
            takeaways: [
                "Skills Test – First link https://wisconsindot.gov/pages/real-estate/license-drvs/how-to-apply/roadtestgeneral.aspx or wisconsinreal-estate.gov/roadtest P...",
                "Out of State Transfers – Second link https://wisconsindot.gov/Pages/real-estate/vehicles/title-plates/new-res-default.aspx or wisconsinreal-estate.gov/Ne...",
                "ID Card for Voting – Petition Process – First Link https://wisconsindot.gov/Documents/formdocs/mv3004.pdf Page 54: Section 12: C.",
            ]
        },
        {
            id: 'wisconsin-14',
            title: "Chapter 14: Practice Quiz",
            url: '/audio_handbooks/wisconsin/chapter_14_practice_quiz.mp3',
            duration: '03:30',
            takeaways: [
                "None of the above Question 2: If you are involved in a serious motor vehicle crash, what should you do?",
                "Until the lights stop flashing and there are no children around C.",
                "Slow down and let the car pass, then pass the bicycle B.",
            ]
        }
    ],
    'wyoming': [
        {
            id: 'wyoming-1',
            title: "Section 1",
            url: '/audio_handbooks/wyoming/chapter_01_section_1.mp3',
            duration: '25:24',
            takeaways: [
                "If contact lenses or glasses are used to pass the screening, they will be required while driving.",
                "A restricted license expires 30 days after the holder's 16th birthday.",
                "Temporary placards may be issued to persons who suffer an impairment for up to 6 months.",
            ]
        },
        {
            id: 'wyoming-2',
            title: "Section 2",
            url: '/audio_handbooks/wyoming/chapter_02_section_2.mp3',
            duration: '28:48',
            takeaways: [
                "Reinstatement requirements: • Completion of all suspension actions on record; and • Payment of reinstatement fee.",
                "Two-year ignition interlock requirement if convicted of a 3rd DWUI when alcohol is involved; however, ignition interlock requirement for ...",
                "Its effect is to put the brain to sleep when taken in sufficient amounts.",
            ]
        },
        {
            id: 'wyoming-3',
            title: "Section 3",
            url: '/audio_handbooks/wyoming/chapter_03_section_3.mp3',
            duration: '24:14',
            takeaways: [
                "Under the Implied Consent law, driv- ers are deemed to have given their consent to such tests whenever driving on a public street or high...",
                "It is imperative, therefore, that motorists drive according to road conditions.",
                "If you begin to skid On a slippery road, keep your speed down.",
            ]
        },
        {
            id: 'wyoming-4',
            title: "Section 4",
            url: '/audio_handbooks/wyoming/chapter_04_section_4.mp3',
            duration: '19:20',
            takeaways: [
                "Right Turn Left Turn Slow or Stop Turns Proper turning rules • Plan ahead.",
                "Parking on hills If you park facing uphill where there is a curb, you should set the parking brake and turn the wheels away from the curb.",
                "For instance, diamond-shaped signs are meant to warn drivers of such things as road hazards, while rectangular signs give regulatory info...",
            ]
        },
        {
            id: 'wyoming-5',
            title: "Section 5",
            url: '/audio_handbooks/wyoming/chapter_05_section_5.mp3',
            duration: '27:05',
            takeaways: [
                "If any part of Lincoln's head is covered by the tread, you're driving with the safe amount of tread.",
                "For example: if they identify a person entering a parked car 10 to 15 seconds ahead, they predict that the driver will pull out in front ...",
                "If you are within 300 feet from the rear of a vehicle you are ap- proaching, dim your lights to their lowest beam.",
            ]
        },
        {
            id: 'wyoming-6',
            title: "Section 6",
            url: '/audio_handbooks/wyoming/chapter_06_section_6.mp3',
            duration: '36:37',
            takeaways: [
                "Make sure you are aware of the type of braking system your vehicle has.",
                "Persons whose eyes do not adjust quickly after pass- ing glaring bright lights have a very serious problem.",
                "It includes the complete distance traveled while deciding to stop, then reacting, and finally after brakes are then applied.",
            ]
        }
    ],
}

// Fallback tracks for states without custom audio handbooks
export function getFallbackAudioTracks(stateKey: string, stateName: string, departmentName: string): AudioTrack[] {
    return [
        {
            id: `${stateKey}-fb-1`,
            title: "Chapter 1: Getting Your Permit & Licensing",
            url: '/audio_handbooks/fallback_intro.mp3', // Generic audio fallback
            duration: '03:45',
            takeaways: [
                `Driving is a privilege, not a right. You must apply for a permit before obtaining your official license.`,
                `Real ID requirements: Ensure your identity card meets federal flight standards (Real ID star).`,
                `Under age 18: Consent from parents, driver training courses, and provisional driving restrictions are standard requirements.`
            ]
        },
        {
            id: `${stateKey}-fb-2`,
            title: "Chapter 2: Traffic Signals, Signs & Road Markings",
            url: '/audio_handbooks/fallback_intro.mp3',
            duration: '05:12',
            takeaways: [
                `Traffic lights: Always stop at a red light. Proceed on green when safe. Yield at a yellow light.`,
                `Sign shapes: Octagons are always stop signs; triangles yield; diamonds warn of hazards; rectangles regulate.`,
                `Pavement lines: Solid center lines mean no passing; broken lines mean passing is permitted when safe.`
            ]
        },
        {
            id: `${stateKey}-fb-3`,
            title: "Chapter 3: Rules of the Road & Right of Way",
            url: '/audio_handbooks/fallback_intro.mp3',
            duration: '04:30',
            takeaways: [
                `Right-of-way at intersections: Yield to the vehicle that arrives first. If arriving simultaneously, yield to the right.`,
                `Roundabouts: Yield to vehicles already inside the circle before entering. Move counter-clockwise.`,
                `Turn signals: Activate your turn indicator at least 100 feet in advance of any turn or lane change.`
            ]
        },
        {
            id: `${stateKey}-fb-4`,
            title: "Chapter 4: Safe Driving & Road Sharing",
            url: '/audio_handbooks/fallback_intro.mp3',
            duration: '04:55',
            takeaways: [
                `Scan the road 10-12 seconds ahead to detect potential hazards early.`,
                `Maintain a following distance of at least 3-seconds behind the vehicle directly in front of you.`,
                `Sharing the road: Bicyclists have vehicle status; yield to pedestrians; avoid commercial truck blind spots (No-Zones).`
            ]
        },
        {
            id: `${stateKey}-fb-5`,
            title: "Chapter 5: Alcohol, Drugs & Driving Laws",
            url: '/audio_handbooks/fallback_intro.mp3',
            duration: '05:10',
            takeaways: [
                `DUI/DWI limits: It is illegal to drive with a BAC (Blood Alcohol Concentration) of 0.08% or higher.`,
                `Zero tolerance: Severe immediate suspensions apply to minors with any detectable amount of alcohol in their system.`,
                `Implied consent: Driving on state roads implies consent to chemical testing. Refusal leads to automatic license suspension.`
            ]
        }
    ]
}

