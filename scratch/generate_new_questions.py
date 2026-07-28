#!/usr/bin/env python3
"""
Generates new original CDL General Knowledge questions for under-covered topics
and appends them to the california_cdl_class_a_questions.csv file.
All questions are original, based on FMCSA federal CDL regulations and the CA CDL handbook.
"""

import csv
import os

NEW_QUESTIONS = [
    # ==========================================
    # WORK ZONES (target: 25 questions)
    # ==========================================
    {
        "id": "gk_wz_001",
        "question": "When approaching a highway work zone, you should:",
        "option_a": "Slow down and increase your following distance.",
        "option_b": "Maintain your speed to avoid disrupting traffic flow.",
        "option_c": "Move to the left lane only if workers are visible.",
        "option_d": "",
        "correct_answer": "A",
        "explanation": "Work zones require extra caution. You should slow down, increase your following distance, and be prepared to stop suddenly for workers, equipment, or changes in road conditions."
    },
    {
        "id": "gk_wz_002",
        "question": "In a highway work zone, the posted speed limit:",
        "option_a": "Is only a suggestion for passenger vehicles, not commercial trucks.",
        "option_b": "Applies to all vehicles including commercial trucks.",
        "option_c": "Can be exceeded by 10 mph if the work area is empty.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "Posted work zone speed limits apply to all vehicles, including large commercial trucks. Penalties for speeding in work zones are typically doubled in California."
    },
    {
        "id": "gk_wz_003",
        "question": "What does a flagger in a work zone use to direct traffic to stop?",
        "option_a": "A red flag or a sign with STOP on one side.",
        "option_b": "A yellow vest and hand signals only.",
        "option_c": "A bullhorn and traffic cones.",
        "option_d": "",
        "correct_answer": "A",
        "explanation": "Flaggers use a red flag or a paddle-type sign with STOP on one side and SLOW on the other to control traffic through work zones."
    },
    {
        "id": "gk_wz_004",
        "question": "When you see orange construction signs and cones narrowing your lane in a work zone, you should:",
        "option_a": "Accelerate quickly to get through the zone as fast as possible.",
        "option_b": "Reduce speed, merge early, and proceed carefully.",
        "option_c": "Use your horn repeatedly to warn workers.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "When lanes narrow due to construction cones and signs, reduce speed and merge early. Sudden lane changes in work zones are dangerous for workers and other drivers."
    },
    {
        "id": "gk_wz_005",
        "question": "Which of the following is true about work zone accidents involving large trucks?",
        "option_a": "They are rare because trucks are easy to see.",
        "option_b": "They account for a disproportionate share of work zone fatalities due to the truck's size and stopping distance.",
        "option_c": "Work zone laws do not apply to commercial vehicles.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "Large trucks contribute significantly to work zone fatalities because of their long stopping distances, blind spots, and wide turning radii. Extra caution is essential."
    },
    {
        "id": "gk_wz_006",
        "question": "How much extra following distance should you maintain behind the vehicle ahead when driving through a work zone?",
        "option_a": "No extra following distance is needed.",
        "option_b": "At least double your normal following distance.",
        "option_c": "At least one car length of extra space.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "In work zones, you should at least double your normal following distance. Unexpected stops are common due to flaggers, slow-moving equipment, and sudden lane shifts."
    },
    {
        "id": "gk_wz_007",
        "question": "What does a steady orange diamond-shaped sign indicate in a work zone?",
        "option_a": "A warning of a permanent hazard ahead.",
        "option_b": "A temporary traffic control condition related to construction or maintenance.",
        "option_c": "A school zone speed limit.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "Orange diamond-shaped signs are temporary traffic control signs used in work zones to warn drivers of construction, maintenance, or utility activities."
    },
    {
        "id": "gk_wz_008",
        "question": "When passing a work zone, you should keep a close eye on:",
        "option_a": "Only the lane markings.",
        "option_b": "Workers, equipment, and changing road conditions.",
        "option_c": "The vehicle ahead of you only.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "Work zones have multiple hazards: workers on foot, heavy equipment moving unpredictably, uneven pavement, and temporary lane markings. Watch all of these."
    },
    {
        "id": "gk_wz_009",
        "question": "A traffic control device in a work zone showing alternating flashing lights means:",
        "option_a": "Proceed at your normal speed.",
        "option_b": "Slow down and be prepared to stop.",
        "option_c": "The work zone is inactive and no workers are present.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "Alternating flashing lights (arrow boards or warning lights) in work zones indicate caution. Slow down and be prepared to stop for workers or equipment."
    },
    {
        "id": "gk_wz_010",
        "question": "In California, fines for moving violations in posted work zones are:",
        "option_a": "The same as violations in non-work zones.",
        "option_b": "Waived if no workers are present.",
        "option_c": "Doubled compared to violations outside work zones.",
        "option_d": "",
        "correct_answer": "C",
        "explanation": "California law doubles traffic fines for moving violations committed in posted work zones to protect highway workers and increase driver compliance."
    },
    {
        "id": "gk_wz_011",
        "question": "When should a commercial driver begin slowing down upon seeing a work zone warning sign?",
        "option_a": "Only when the actual work area is visible.",
        "option_b": "Immediately when the first warning sign is seen.",
        "option_c": "After passing the first orange cone.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "Begin reducing speed as soon as you see the first work zone warning sign. Large vehicles require much more distance to slow down safely compared to passenger cars."
    },
    {
        "id": "gk_wz_012",
        "question": "When a work zone has a 'Road Work Ahead' sign, which of the following is the correct response?",
        "option_a": "Continue at the same speed but be alert.",
        "option_b": "Begin reducing speed and prepare for changed road conditions.",
        "option_c": "Immediately stop your vehicle.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "'Road Work Ahead' is an advance warning sign. Begin slowing down smoothly and prepare for lane closures, flaggers, construction equipment, or reduced speed limits."
    },
    {
        "id": "gk_wz_013",
        "question": "If a flagger in a work zone signals you to slow down with a SLOW paddle, you should:",
        "option_a": "Proceed at your current speed.",
        "option_b": "Reduce speed and proceed cautiously as directed.",
        "option_c": "Stop your vehicle immediately.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "A SLOW paddle from a flagger means reduce your speed and proceed carefully. Follow all flagger instructions—they have the authority to direct traffic through work zones."
    },
    {
        "id": "gk_wz_014",
        "question": "What is the 'taper' in a work zone?",
        "option_a": "The section where the lane gradually narrows or merges.",
        "option_b": "The speed limit signs at the beginning of the work zone.",
        "option_c": "A type of warning cone used only at night.",
        "option_d": "",
        "correct_answer": "A",
        "explanation": "A 'taper' is the area where traffic lanes gradually narrow or merge into fewer lanes using a series of cones or barrels. Merging should happen before the taper, not at its end."
    },
    {
        "id": "gk_wz_015",
        "question": "At night in a work zone, you should:",
        "option_a": "Drive at the same speed as during daytime.",
        "option_b": "Reduce speed further and use your low-beam headlights.",
        "option_c": "Use your high-beam headlights to see workers better.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "Night work zones are especially dangerous. Reduce speed and use low-beam headlights (high beams can blind workers). Be extra cautious as worker visibility is greatly reduced."
    },
    {
        "id": "gk_wz_016",
        "question": "A 'lane closed ahead' sign in a work zone means:",
        "option_a": "You should immediately stop and wait.",
        "option_b": "Begin planning your lane change in advance.",
        "option_c": "The road is permanently closed.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "When you see 'Lane Closed Ahead,' begin moving to the open lane as early as possible. Do not wait until the last moment—last-minute merging is a major cause of work zone collisions."
    },
    {
        "id": "gk_wz_017",
        "question": "What type of sign typically marks the end of a work zone?",
        "option_a": "A green sign indicating normal speed may resume.",
        "option_b": "An 'End Road Work' or 'End Construction' sign.",
        "option_c": "A red STOP sign.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "An 'End Road Work' or 'End Construction' sign marks the termination of a work zone. Normal speed limits resume beyond this point."
    },
    {
        "id": "gk_wz_018",
        "question": "Which of the following is a common hazard specific to driving a large truck through a work zone?",
        "option_a": "The truck is too visible, which can be distracting.",
        "option_b": "Reduced lane widths may cause clearance problems for wide vehicles.",
        "option_c": "Large trucks are exempt from work zone speed limits.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "Work zones often narrow lanes significantly. Large commercial trucks can have difficulty maintaining safe clearances in narrow work zones, especially when meeting oncoming vehicles."
    },
    {
        "id": "gk_wz_019",
        "question": "If you must stop unexpectedly in a work zone and place warning devices, where should they go?",
        "option_a": "Only directly behind the vehicle.",
        "option_b": "At appropriate distances in the lane of travel to warn approaching drivers.",
        "option_c": "Work zone laws exempt stopped trucks from placing warning devices.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "If you stop in or near a work zone, place reflective triangles or flares at appropriate distances behind your vehicle to warn approaching traffic, following the same rules as any roadside stop."
    },
    {
        "id": "gk_wz_020",
        "question": "Rumble strips at the entrance of a work zone are designed to:",
        "option_a": "Indicate the lane is closed.",
        "option_b": "Alert distracted or drowsy drivers that they are approaching the work zone.",
        "option_c": "Slow vehicles by creating excessive vibration that damages tires.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "Rumble strips create noise and vibration to alert drivers—especially distracted or fatigued ones—that they are approaching a work zone or should slow down."
    },

    # ==========================================
    # COUPLING / UNCOUPLING TRAILERS (target: 30 questions)
    # ==========================================
    {
        "id": "gk_cu_001",
        "question": "Before coupling a trailer to a tractor, you should inspect the fifth wheel to ensure:",
        "option_a": "The kingpin is the correct size for the trailer.",
        "option_b": "It is properly lubricated and the locking jaws are open.",
        "option_c": "The trailer brakes are fully released.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "Before coupling, inspect the fifth wheel: it should be properly greased, the mounting should be secure, and the locking jaws must be open to accept the kingpin."
    },
    {
        "id": "gk_cu_002",
        "question": "After coupling, which of the following is a correct way to test if the trailer is securely coupled?",
        "option_a": "Pull forward slowly against the locked trailer brakes.",
        "option_b": "Look under the trailer to see if the kingpin is visible.",
        "option_c": "Check the air gauges are reading over 100 psi.",
        "option_d": "",
        "correct_answer": "A",
        "explanation": "After coupling, conduct a tug test: pull gently forward with the trailer brakes engaged. If the coupling holds, the trailer is properly secured to the tractor."
    },
    {
        "id": "gk_cu_003",
        "question": "The proper order when coupling a tractor to a semi-trailer begins with:",
        "option_a": "Connecting the air and electrical lines first.",
        "option_b": "Inspecting the area around the trailer and checking trailer height.",
        "option_c": "Raising the landing gear completely before any other step.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "The first steps in coupling are to inspect the area around the trailer, check trailer height, and inspect the fifth wheel. Proper setup before backing under the trailer prevents coupling failures."
    },
    {
        "id": "gk_cu_004",
        "question": "The trailer should be at the correct height before coupling so that:",
        "option_a": "The fifth wheel plate is higher than the trailer's kingpin.",
        "option_b": "The nose of the trailer will be raised slightly when the tractor backs under it.",
        "option_c": "The kingpin is level with the hood of the tractor.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "The trailer should be low enough that the tractor's fifth wheel will contact the underside of the trailer and raise it slightly as you back under. This confirms proper coupling height."
    },
    {
        "id": "gk_cu_005",
        "question": "When should you connect the air lines during coupling?",
        "option_a": "Before backing the tractor under the trailer.",
        "option_b": "After the tractor is positioned under the trailer and before final coupling.",
        "option_c": "After the fifth wheel locking jaws have closed around the kingpin.",
        "option_d": "",
        "correct_answer": "C",
        "explanation": "Air lines (service and emergency) are typically connected after the fifth wheel has locked around the kingpin, but before you raise the landing gear and pull away."
    },
    {
        "id": "gk_cu_006",
        "question": "After coupling, how do you confirm the trailer is locked onto the fifth wheel correctly?",
        "option_a": "The safety latch locks automatically with a click sound.",
        "option_b": "Check that the locking jaws are closed around the shank of the kingpin (not the head).",
        "option_c": "Verify that the kingpin is visible above the fifth wheel plate.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "After coupling, inspect the fifth wheel from the side to confirm the locking jaws are closed around the shank (not the head) of the kingpin. The locking handle must also be in the locked position."
    },
    {
        "id": "gk_cu_007",
        "question": "What is a 'glad hand' in the context of coupling a trailer?",
        "option_a": "A type of fifth wheel locking device.",
        "option_b": "The coupling device that connects air lines between the tractor and trailer.",
        "option_c": "The handle used to crank the trailer's landing gear.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "Glad hands are the coupling devices that connect the service and emergency air lines between the tractor and trailer. Service lines control the brakes; emergency lines supply trailer air tanks."
    },
    {
        "id": "gk_cu_008",
        "question": "What is the correct procedure for disconnecting (uncoupling) a tractor from a trailer?",
        "option_a": "Pull the fifth wheel release handle and drive forward.",
        "option_b": "Position the vehicle, apply trailer brakes, lower landing gear, disconnect lines, unlock fifth wheel, then pull clear.",
        "option_c": "Disconnect air lines first, then unlock the fifth wheel.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "Proper uncoupling sequence: (1) position and level vehicle, (2) apply trailer brakes, (3) lower landing gear, (4) disconnect air and electrical lines, (5) unlock the fifth wheel, (6) pull the tractor partially clear, (7) check trailer support, (8) pull fully clear."
    },
    {
        "id": "gk_cu_009",
        "question": "Why should you chock the trailer wheels before uncoupling?",
        "option_a": "To prevent the tractor from rolling backward.",
        "option_b": "To prevent the trailer from rolling away after the tractor is disconnected.",
        "option_c": "Chocking is optional if the trailer has spring brakes.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "Wheel chocks prevent the trailer from rolling after the tractor is removed. Unless you are certain the trailer has functioning spring brakes, always chock the wheels before uncoupling."
    },
    {
        "id": "gk_cu_010",
        "question": "The landing gear on a semi-trailer is used to:",
        "option_a": "Help control the trailer's air brakes.",
        "option_b": "Support the front of the trailer when it is not connected to a tractor.",
        "option_c": "Control the trailer's suspension.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "Landing gear (also called dolly legs) are the retractable support legs under the front of the trailer. They hold up the nose of the trailer when it is uncoupled from the tractor."
    },
    {
        "id": "gk_cu_011",
        "question": "Before uncoupling, why should you ease the pressure off the fifth wheel locking jaws?",
        "option_a": "To make it easier to pull the release handle.",
        "option_b": "To prevent the tractor frame from springing up and damaging the trailer when uncoupled.",
        "option_c": "To allow the air lines to disconnect safely.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "Before pulling the fifth wheel release, pull gently forward to ease pressure off the jaws. This prevents the tractor frame from springing up when pressure is released, which could damage the trailer or cause it to drop suddenly."
    },
    {
        "id": "gk_cu_012",
        "question": "When lowering the landing gear before uncoupling, how far should you lower it?",
        "option_a": "Just until it touches the ground.",
        "option_b": "Until it makes firm contact with the ground; a few extra turns for a loaded trailer.",
        "option_c": "Lower it completely to the full-down position regardless of load.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "Lower the landing gear until it makes firm contact with the ground. For a loaded trailer, add a few extra turns to put some weight on the landing gear before uncoupling."
    },
    {
        "id": "gk_cu_013",
        "question": "What is the purpose of the emergency (supply) air line in a tractor-trailer combination?",
        "option_a": "To supply air to operate the trailer's service brakes.",
        "option_b": "To supply the trailer air tanks and control the trailer's emergency brakes.",
        "option_c": "To provide backup air pressure for the tractor's primary brake circuit.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "The emergency (supply) line provides air to the trailer's air tanks and controls the trailer's emergency brakes. If this line loses pressure (breaks), the trailer's spring brakes automatically apply."
    },
    {
        "id": "gk_cu_014",
        "question": "After coupling, you check the connection by trying to pull the tractor forward with the trailer brakes applied. If the connection is good, the truck should:",
        "option_a": "Move forward easily because the fifth wheel is designed to slide.",
        "option_b": "Not move—the coupling should hold against the tractor's pull.",
        "option_c": "Move 1-2 feet before the coupling engages.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "The 'tug test' confirms a secure coupling. With trailer brakes applied, pull gently forward—the combination should not move. If the trailer separates, the coupling was not properly completed."
    },
    {
        "id": "gk_cu_015",
        "question": "What happens if the emergency air line is not connected when you try to move a trailer?",
        "option_a": "The tractor brakes will fail.",
        "option_b": "The trailer's spring brakes will remain applied, preventing movement.",
        "option_c": "The trailer's wheels will spin freely.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "Without the emergency air line connected and pressurized, the trailer's spring brakes remain in the applied position. You will not be able to move the trailer without connecting and charging the air lines."
    },
    {
        "id": "gk_cu_016",
        "question": "When inspecting a trailer's kingpin before coupling, a driver should check for:",
        "option_a": "That the kingpin is well-oiled and angled slightly downward.",
        "option_b": "Damage, bends, or improper size that would prevent secure coupling.",
        "option_c": "Whether the kingpin is made of stainless steel.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "Inspect the kingpin for damage, cracks, or bends. Also verify it is the correct size for your fifth wheel. A damaged or wrong-size kingpin can result in a dangerous coupling failure."
    },
    {
        "id": "gk_cu_017",
        "question": "The service air line on a tractor-trailer combination is typically identified by:",
        "option_a": "A blue color.",
        "option_b": "A red color.",
        "option_c": "It is not color coded—check your vehicle manual.",
        "option_d": "",
        "correct_answer": "A",
        "explanation": "By convention, the service air line glad hand is blue and connects to the service brake circuit. The emergency/supply line is red. Always connect them correctly to ensure proper brake function."
    },
    {
        "id": "gk_cu_018",
        "question": "What should you do if the trailer is too high when you back under it during coupling?",
        "option_a": "Back under it anyway—the fifth wheel will push it up.",
        "option_b": "Raise the landing gear to lower the trailer to the correct height.",
        "option_c": "Adjust the tractor's fifth wheel height instead.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "If the trailer is too high, crank down the landing gear to lower the trailer nose to the proper coupling height. Never force the coupling if heights don't match—this can damage the fifth wheel or fail to lock properly."
    },
    {
        "id": "gk_cu_019",
        "question": "After fully coupling a trailer and before driving away, you should:",
        "option_a": "Check the air lines and electrical connections are secure, and raise the landing gear completely.",
        "option_b": "Leave the landing gear slightly down for extra stability.",
        "option_c": "Only raise the landing gear after driving 100 feet to test the coupling.",
        "option_d": "",
        "correct_answer": "A",
        "explanation": "After coupling, secure air lines and electrical connections, then raise the landing gear completely off the ground before driving. Low-hanging landing gear can catch obstacles and cause serious damage."
    },
    {
        "id": "gk_cu_020",
        "question": "What is the danger of a 'high-ride' coupling, where the fifth wheel is too high and the trailer is coupled to the back of the tractor instead of the correct point?",
        "option_a": "It puts too much weight on the trailer's rear axle.",
        "option_b": "It can cause the trailer to disconnect while driving.",
        "option_c": "It improves stability in high crosswinds.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "A high-ride coupling (coupling behind the correct position) is extremely dangerous. The kingpin is not in the jaws but resting on the plate edge, and the trailer can disconnect without warning at any time."
    },
    {
        "id": "gk_cu_021",
        "question": "How should you connect the glad hands (air line couplers) when coupling a trailer?",
        "option_a": "Push and rotate a quarter turn until they click and lock together.",
        "option_b": "Slide them together and tape them to prevent disconnection.",
        "option_c": "Connect the red to red and blue to blue by color only—no turning needed.",
        "option_d": "",
        "correct_answer": "A",
        "explanation": "Glad hands are connected by pushing them together and rotating a quarter turn until they lock. This creates a secure, airtight connection. The service line (blue) connects to service, and emergency (red) to emergency."
    },
    {
        "id": "gk_cu_022",
        "question": "If you are coupling a trailer that has no spring brakes, what must you do before uncoupling?",
        "option_a": "Nothing special—spring brakes are not required.",
        "option_b": "Chock the wheels to prevent the trailer from rolling.",
        "option_c": "Apply the tractor parking brake to hold both vehicles.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "Without spring brakes, a trailer has no way to stop itself from rolling after uncoupling. You must always chock the wheels to prevent the trailer from rolling away, regardless of terrain."
    },
    {
        "id": "gk_cu_023",
        "question": "When pulling a pintle hook trailer (converter dolly), you should:",
        "option_a": "Use only one safety chain, as a single chain is sufficient.",
        "option_b": "Lock the pintle hook and cross the safety chains under the tongue.",
        "option_c": "Never use safety chains on a pintle hook coupling.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "With pintle hook couplings, the hook must be locked around the trailer's lunette eye. Safety chains must be crossed under the tongue in an 'X' pattern to catch the tongue if the coupling fails."
    },
    {
        "id": "gk_cu_024",
        "question": "If there is slack in the coupling after a tug test, what should you do?",
        "option_a": "Accept the slight slack—it is normal in a fifth wheel coupling.",
        "option_b": "Do not drive. Recouple and inspect the fifth wheel for damage.",
        "option_c": "Fill the gap with wooden shims.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "Any slack in the coupling indicates an improper connection. Do not drive the vehicle. Uncouple, inspect the fifth wheel and kingpin for damage or misalignment, and recouple properly."
    },
    {
        "id": "gk_cu_025",
        "question": "What is the first thing you should check when you get out to inspect the coupling after the tug test?",
        "option_a": "Whether the fifth wheel plate is greased.",
        "option_b": "That the locking jaws are closed and the release handle is in the locked position.",
        "option_c": "That the trailer tires are fully inflated.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "After the tug test, physically check under the trailer that the fifth wheel jaws are fully closed around the kingpin shank and that the release/safety latch is in the locked position."
    },

    # ==========================================
    # HAZARDOUS MATERIALS BASICS (target: 25 questions)
    # ==========================================
    {
        "id": "gk_hm_001",
        "question": "A commercial driver transporting hazardous materials must have which endorsement on their CDL?",
        "option_a": "An 'H' or 'X' endorsement.",
        "option_b": "A 'P' endorsement.",
        "option_c": "A 'T' endorsement.",
        "option_d": "",
        "correct_answer": "A",
        "explanation": "Drivers transporting hazardous materials in amounts requiring placards must have an 'H' (HazMat) endorsement on their CDL. An 'X' endorsement covers both HazMat and tanker."
    },
    {
        "id": "gk_hm_002",
        "question": "Which government agency sets the regulations for transporting hazardous materials by road?",
        "option_a": "The Environmental Protection Agency (EPA).",
        "option_b": "The Federal Motor Carrier Safety Administration (FMCSA) and the Department of Transportation (DOT).",
        "option_c": "The Occupational Safety and Health Administration (OSHA).",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "The DOT, through FMCSA and the Pipeline and Hazardous Materials Safety Administration (PHMSA), sets the regulations for transporting hazardous materials by highway."
    },
    {
        "id": "gk_hm_003",
        "question": "When is a hazardous materials placard required on a vehicle?",
        "option_a": "Only when transporting more than 1,000 gallons of liquid.",
        "option_b": "When transporting a material in amounts that meet or exceed the threshold requiring placarding.",
        "option_c": "Only for explosive materials, regardless of quantity.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "Placards are required when hazardous materials meet certain quantity thresholds set by DOT regulations. Some materials require placards in any quantity; others have specific weight or volume thresholds."
    },
    {
        "id": "gk_hm_004",
        "question": "The four-digit number on a hazardous materials placard is called:",
        "option_a": "The UN/NA identification number.",
        "option_b": "The emergency response code.",
        "option_c": "The hazard class rating.",
        "option_d": "",
        "correct_answer": "A",
        "explanation": "The four-digit number on a placard or orange panel is the UN (United Nations) or NA (North America) identification number used to identify the specific hazardous material being transported."
    },
    {
        "id": "gk_hm_005",
        "question": "What document must a driver have with them when transporting hazardous materials?",
        "option_a": "The vehicle's insurance certificate.",
        "option_b": "A completed shipping paper (hazardous materials manifest) describing the material.",
        "option_c": "A signed statement from the shipper that the material is safe.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "When transporting hazardous materials, the driver must have the shipping papers (bills of lading or hazmat manifest) in their possession. These describe the material, quantity, and emergency contact information."
    },
    {
        "id": "gk_hm_006",
        "question": "Where must hazardous materials shipping papers be kept while driving?",
        "option_a": "In the cargo area with the materials.",
        "option_b": "Within reach of the driver while they are driving, or in the driver's door pouch.",
        "option_c": "In the cab's glove compartment only.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "Shipping papers must be within the driver's reach while driving and on top of other papers when the driver is out of the vehicle. In an accident, emergency responders need them immediately."
    },
    {
        "id": "gk_hm_007",
        "question": "Where should hazardous materials shipping papers be placed when the driver is out of the vehicle?",
        "option_a": "On the driver's seat.",
        "option_b": "In a pouch on the driver's door, visible to emergency responders.",
        "option_c": "Under the seat out of sight for security.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "When a driver is away from the vehicle, shipping papers must be in the driver's door pouch or left on the driver's seat, clearly visible. Emergency responders must be able to find them quickly."
    },
    {
        "id": "gk_hm_008",
        "question": "When transporting hazardous materials, what must be kept away from the load?",
        "option_a": "Other motor carriers.",
        "option_b": "Open flames and smoking materials.",
        "option_c": "Vehicles with air brake systems.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "Open flames and smoking are prohibited near hazardous materials loads. Many hazardous materials are flammable, and ignition sources must be kept clear to prevent fire or explosion."
    },
    {
        "id": "gk_hm_009",
        "question": "What is the Emergency Response Guidebook (ERG) used for?",
        "option_a": "To identify the correct tire pressure for hazardous materials transport vehicles.",
        "option_b": "To provide first responders with guidance on protecting themselves and the public from hazardous materials incidents.",
        "option_c": "To log the driver's hazardous materials training hours.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "The DOT Emergency Response Guidebook (ERG) is used by first responders to quickly identify hazardous materials and determine initial protective actions in emergencies. Drivers should also carry it."
    },
    {
        "id": "gk_hm_010",
        "question": "Which color is used for hazardous materials placards indicating explosive materials?",
        "option_a": "Red.",
        "option_b": "Orange.",
        "option_c": "Yellow.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "Explosive placards (Class 1) are orange. Different hazard classes use different colors: red for flammable, white for poison gas, yellow for oxidizers, etc."
    },
    {
        "id": "gk_hm_011",
        "question": "If a hazardous materials incident occurs, the driver must:",
        "option_a": "Handle the spill personally to minimize risk to others.",
        "option_b": "Contact emergency response personnel and report the incident as required.",
        "option_c": "Continue driving to the nearest safe facility first.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "In a hazardous materials incident, the driver must contact emergency response personnel, warn others, and stay upwind of the material. Reporting incidents to the proper authorities is a legal requirement."
    },
    {
        "id": "gk_hm_012",
        "question": "Which of the following routes is generally prohibited for vehicles transporting certain hazardous materials?",
        "option_a": "Federal interstates.",
        "option_b": "Tunnels and certain restricted routes.",
        "option_c": "State highways with speed limits over 55 mph.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "Many tunnels prohibit or restrict certain hazardous materials, especially explosives and flammable materials. Drivers must check for route restrictions before transporting hazardous cargo."
    },
    {
        "id": "gk_hm_013",
        "question": "Who is responsible for properly packaging hazardous materials before shipping?",
        "option_a": "The driver of the commercial vehicle.",
        "option_b": "The shipper who offers the material for transportation.",
        "option_c": "The carrier who transports the material.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "The shipper is responsible for properly packaging, marking, and labeling hazardous materials before offering them for transportation. However, the driver must refuse a shipment that appears improperly prepared."
    },
    {
        "id": "gk_hm_014",
        "question": "If you discover a leak in a hazardous materials container while driving, what should you do?",
        "option_a": "Continue driving to your destination and report the leak on arrival.",
        "option_b": "Pull off the road safely, park away from people, secure the vehicle, and contact emergency services.",
        "option_c": "Try to plug the leak yourself before calling for help.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "A leaking hazardous materials container is a serious emergency. Get off the road safely, park away from people and buildings, secure the vehicle, stay upwind, and immediately contact emergency services."
    },
    {
        "id": "gk_hm_015",
        "question": "When a placarded vehicle is parked, it must be at least how far from any bridge, tunnel, or building?",
        "option_a": "100 feet.",
        "option_b": "300 feet.",
        "option_c": "500 feet.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "When a placarded vehicle is parked, it must be at least 300 feet away from bridges, tunnels, or buildings (unless there is no reasonable alternative) to minimize risk to infrastructure and occupants."
    },
    {
        "id": "gk_hm_016",
        "question": "Which type of hazardous materials has a flammable liquid placard?",
        "option_a": "Gasoline, diesel fuel, and ethanol.",
        "option_b": "Liquid nitrogen and compressed oxygen.",
        "option_c": "Chlorine and ammonia.",
        "option_d": "",
        "correct_answer": "A",
        "explanation": "Flammable liquids (Class 3) include gasoline, diesel, ethanol, and similar petroleum products. They require a red 'FLAMMABLE' placard when transported in threshold quantities."
    },
    {
        "id": "gk_hm_017",
        "question": "A driver who transports hazardous materials must be trained:",
        "option_a": "Only once when they first get their HazMat endorsement.",
        "option_b": "Every three years, or when job functions change.",
        "option_c": "Annually on the first day of each calendar year.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "HazMat training must occur before initial HazMat transportation and every three years thereafter. It must also occur when job functions change, the regulations change, or after a hazardous materials incident."
    },
    {
        "id": "gk_hm_018",
        "question": "The 'proper shipping name' for a hazardous material must appear on:",
        "option_a": "The placard on the outside of the vehicle.",
        "option_b": "The shipping papers.",
        "option_c": "The driver's CDL endorsement card.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "The proper shipping name (the official DOT name for the material) must appear on the shipping papers along with the hazard class, packing group, and UN/NA identification number."
    },
    {
        "id": "gk_hm_019",
        "question": "Which hazardous material class includes infectious substances and biological agents?",
        "option_a": "Class 6 (Toxic and Infectious Substances).",
        "option_b": "Class 8 (Corrosives).",
        "option_c": "Class 5 (Oxidizers).",
        "option_d": "",
        "correct_answer": "A",
        "explanation": "Class 6 covers toxic (poisonous) substances and infectious materials (Division 6.1 and 6.2). These require special handling, labeling, and often additional permits for transport."
    },
    {
        "id": "gk_hm_020",
        "question": "What is the minimum placard size required for hazardous materials placards on a vehicle?",
        "option_a": "6 inches by 6 inches.",
        "option_b": "10.75 inches (273 mm) on each side.",
        "option_c": "12 inches by 12 inches.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "DOT regulations require hazardous materials placards to be at least 10.75 inches (273 mm) on each side. They must be visible and placed on all four sides of the vehicle."
    },

    # ==========================================
    # STEERING / POWER STEERING (target: 15 questions)
    # ==========================================
    {
        "id": "gk_st_001",
        "question": "What should you do if you lose power steering while driving a large truck?",
        "option_a": "Accelerate to maintain momentum so the vehicle steers itself.",
        "option_b": "Reduce speed gradually, grip the wheel firmly, and maneuver to a safe stop.",
        "option_c": "Turn the wheel sharply to simulate power steering assistance.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "Without power steering, the wheel becomes very hard to turn, especially at low speeds. Reduce speed gradually, maintain a firm grip on the wheel, and steer to a safe location to stop and get help."
    },
    {
        "id": "gk_st_002",
        "question": "During a pre-trip inspection of the steering system, you should check the steering wheel for:",
        "option_a": "Whether it is leather-wrapped or not.",
        "option_b": "Excessive free play (play before resistance is felt).",
        "option_c": "Whether the horn button is centered in the wheel.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "Check the steering wheel for excessive free play. A small amount of play is normal, but excessive play can indicate worn steering components and should be corrected before driving."
    },
    {
        "id": "gk_st_003",
        "question": "How much steering wheel play (free play before resistance) is generally acceptable for a commercial vehicle?",
        "option_a": "Up to 2 inches for a vehicle with power steering.",
        "option_b": "Up to 10 inches of play for any vehicle.",
        "option_c": "None—there should be zero free play.",
        "option_d": "",
        "correct_answer": "A",
        "explanation": "For a vehicle with power steering, up to about 2 inches of free play at the rim of the steering wheel is generally acceptable. More than that may indicate a problem requiring inspection."
    },
    {
        "id": "gk_st_004",
        "question": "When inspecting the power steering fluid during pre-trip inspection:",
        "option_a": "Check the reservoir level—it should be at or near the full mark.",
        "option_b": "The fluid level does not need to be checked—it is sealed.",
        "option_c": "Power steering fluid should be checked only at scheduled maintenance intervals.",
        "option_d": "",
        "correct_answer": "A",
        "explanation": "Power steering fluid is part of the pre-trip engine compartment inspection. Check the reservoir level and condition. Low fluid can result in steering problems or complete power steering failure."
    },
    {
        "id": "gk_st_005",
        "question": "When steering a large truck through a tight right turn, you should:",
        "option_a": "Begin the turn early by steering right as soon as you see the corner.",
        "option_b": "Move to the left before turning right to allow the rear wheels to track properly.",
        "option_c": "Steer only from the innermost lane.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "A large truck's rear wheels cut the corner. When making a right turn, move slightly left (within your lane) to give the rear wheels room to track around the corner without jumping the curb."
    },
    {
        "id": "gk_st_006",
        "question": "What steering technique is recommended when driving through a skid?",
        "option_a": "Turn the wheel sharply in the direction you want to go.",
        "option_b": "Steer gently in the direction you want to go; avoid overcorrecting.",
        "option_c": "Hold the steering wheel straight and wait for the skid to stop.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "In a skid, steer gently in the direction you want to go. Overcorrecting or sharp steering inputs can make the skid worse or cause the vehicle to spin in the opposite direction."
    },
    {
        "id": "gk_st_007",
        "question": "Which of the following indicates a possible problem with the steering system during a pre-trip inspection?",
        "option_a": "The steering wheel turns smoothly with slight resistance.",
        "option_b": "A clunking or rattling sound when the steering wheel is turned.",
        "option_c": "The steering wheel returns to center automatically after a turn.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "Clunking or rattling sounds when turning the steering wheel may indicate worn tie rods, loose steering components, or damaged ball joints—all serious safety defects requiring immediate repair."
    },
    {
        "id": "gk_st_008",
        "question": "If your front wheels are overloaded, how does it affect steering?",
        "option_a": "It makes steering easier because more weight improves traction.",
        "option_b": "It makes steering harder and can cause handling problems.",
        "option_c": "Overloaded front axles have no effect on steering.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "Overloading front wheels increases the weight on the steering axle beyond its rating, making steering difficult and affecting handling. It also causes excessive tire wear and can exceed legal weight limits."
    },
    {
        "id": "gk_st_009",
        "question": "Too little weight on the front axle of a loaded truck can cause:",
        "option_a": "Better fuel economy and improved cornering.",
        "option_b": "Light steering that is difficult to control, especially at higher speeds.",
        "option_c": "Excessive tire wear on the front tires only.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "Too little weight on the steering axle causes light, wandering steering that is difficult to control. The front tires lose proper contact with the road surface, especially at highway speeds."
    },

    # ==========================================
    # MANAGING SPACE (target: 20 questions)
    # ==========================================
    {
        "id": "gk_ms_001",
        "question": "At 55 mph in a vehicle that is 60 feet long, how many seconds of following distance should you maintain?",
        "option_a": "6 seconds (one second per 10 feet of vehicle length plus one additional second).",
        "option_b": "4 seconds (two seconds for the first 40 feet, two more for the rest).",
        "option_c": "3 seconds, the same as for a passenger car.",
        "option_d": "",
        "correct_answer": "A",
        "explanation": "At speeds above 40 mph, allow one second for every 10 feet of vehicle length PLUS one additional second. For a 60-foot vehicle: 6 seconds + 1 = 7 seconds total. At 55 mph you need at least 7 seconds."
    },
    {
        "id": "gk_ms_002",
        "question": "Why is managing space to the sides of your truck important?",
        "option_a": "Because trucks have narrower mirrors and cannot see beside them.",
        "option_b": "Because trucks are wide and may drift into adjacent lanes on curves or in wind.",
        "option_c": "Side space management is not important for commercial trucks.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "Trucks are wide vehicles that can drift in crosswinds or when the road curves. Maintaining adequate space on the sides helps prevent side-swipe accidents."
    },
    {
        "id": "gk_ms_003",
        "question": "When driving near a large truck, passenger car drivers often cannot see the truck driver. Which of the following blind spots is the largest?",
        "option_a": "The area directly in front of the truck cab.",
        "option_b": "The area to the right rear of the trailer.",
        "option_c": "The area directly to the left of the driver's door.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "The largest blind spot for a tractor-trailer is the right rear quarter—running the length of the trailer on the right side. Vehicles that sit in this blind spot are invisible to the truck driver."
    },
    {
        "id": "gk_ms_004",
        "question": "What is the minimum clearance you should maintain between your trailer and overhead obstacles such as bridges or signs?",
        "option_a": "1 inch above the posted clearance height.",
        "option_b": "Enough that your vehicle's height is within the posted maximum clearance.",
        "option_c": "2 feet below the posted clearance height.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "Your vehicle must fit within the posted maximum clearance height of bridges and underpasses. Always know your vehicle's height. Ice or cargo shifts can change your vehicle's height."
    },
    {
        "id": "gk_ms_005",
        "question": "Before driving under a bridge or overpass, you should:",
        "option_a": "Check your vehicle's height against the posted clearance limit.",
        "option_b": "Only proceed if you can see the other side of the underpass.",
        "option_c": "Reduce speed but proceed regardless of the clearance limit.",
        "option_d": "",
        "correct_answer": "A",
        "explanation": "Always know your vehicle's loaded height and compare it to posted clearance limits. Even a small difference can be catastrophic. Ice or unusual cargo can increase your vehicle's height."
    },
    {
        "id": "gk_ms_006",
        "question": "If you are being cut off by another vehicle that merges into your lane, what is the best response?",
        "option_a": "Sound your horn and accelerate to reclaim your position.",
        "option_b": "Brake gradually and increase your following distance to regain safety space.",
        "option_c": "Move into an adjacent lane immediately to avoid the vehicle.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "When cut off, the safest response is to brake gradually and increase following distance. Sounding the horn or aggressive lane changes can escalate the situation and create new hazards."
    },
    {
        "id": "gk_ms_007",
        "question": "When you need to stop on the road in an emergency (not in a breakdown lane), what should you do about the space around your vehicle?",
        "option_a": "Leave your vehicle immediately and move away from traffic.",
        "option_b": "Set out warning devices (triangles/flares) within 10 minutes to warn approaching traffic.",
        "option_c": "Flash your hazard lights only—no other warning devices are needed.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "Federal regulations require placing warning devices within 10 minutes of stopping on the roadway. Triangles should be placed at specific distances behind your vehicle to warn approaching drivers."
    },
    {
        "id": "gk_ms_008",
        "question": "On a two-lane road, triangles should be placed at which locations after a breakdown?",
        "option_a": "10, 50, and 100 feet to the rear.",
        "option_b": "100, 200, and 300 feet to the rear.",
        "option_c": "10, 100, and 200 feet to the rear.",
        "option_d": "",
        "correct_answer": "A",
        "explanation": "On a two-lane road, place one triangle 10 feet to the rear (as a close-up warning), one 100 feet behind, and one 100 feet ahead of the vehicle, or place them at 10, 100, and 200 feet behind."
    },
    {
        "id": "gk_ms_009",
        "question": "When driving on a highway with a high speed limit, where should warning triangles be placed after a breakdown?",
        "option_a": "The same places as on a two-lane road.",
        "option_b": "At 100, 200, and 300 feet behind the vehicle on the traffic side.",
        "option_c": "Only behind the vehicle, up to 500 feet away.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "On a divided highway or one-way road with a speed limit over 55 mph, place triangles at 100, 200, and 300 feet to the rear to give faster-approaching traffic adequate warning."
    },
    {
        "id": "gk_ms_010",
        "question": "Which of the following best describes the stopping distance of a fully loaded tractor-trailer at 55 mph on dry pavement?",
        "option_a": "About the same as a passenger car—approximately 200 feet.",
        "option_b": "Significantly more than a passenger car—potentially over 400 feet.",
        "option_c": "Less than a car because of the air brake system.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "A fully loaded tractor-trailer at 55 mph requires up to 400+ feet to stop on dry pavement—far more than a passenger car. This is why following distance and speed management are critical for truck drivers."
    },
    {
        "id": "gk_ms_011",
        "question": "When a truck is empty, its stopping distance compared to when fully loaded is:",
        "option_a": "Shorter, because there is less weight to slow down.",
        "option_b": "About the same regardless of load.",
        "option_c": "Potentially longer, because empty trucks have reduced tire traction.",
        "option_d": "",
        "correct_answer": "C",
        "explanation": "An empty truck can actually take longer to stop than a loaded one. With less weight, there is less friction between tires and the road, which reduces braking effectiveness."
    },
    {
        "id": "gk_ms_012",
        "question": "If traffic ahead has slowed unexpectedly, which of the following actions creates the most additional stopping distance?",
        "option_a": "Checking mirrors before braking.",
        "option_b": "The brake lag time in an air brake system (up to half a second before brakes fully apply).",
        "option_c": "Downshifting before applying the service brakes.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "Air brake systems have a lag time of up to half a second between pressing the pedal and the brakes fully engaging. At 55 mph this adds about 40 feet to stopping distance—highlighting why following distance matters."
    },

    # ==========================================
    # HOURS OF SERVICE / LOG BOOKS (target: 20 questions)
    # ==========================================
    {
        "id": "gk_hs_001",
        "question": "Under FMCSA hours of service regulations, a property-carrying driver may drive a maximum of how many hours after coming on duty?",
        "option_a": "10 hours after 8 consecutive hours off duty.",
        "option_b": "11 hours after 10 consecutive hours off duty.",
        "option_c": "12 hours after 8 consecutive hours off duty.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "Property-carrying drivers may drive up to 11 hours after 10 consecutive hours off duty. This is the '11-Hour Rule' under FMCSA hours of service regulations."
    },
    {
        "id": "gk_hs_002",
        "question": "What is the maximum number of hours a property-carrying driver may be 'on duty' in a 14-hour period?",
        "option_a": "14 hours after coming on duty following 8 hours off.",
        "option_b": "12 hours within any 24-hour period.",
        "option_c": "A maximum 14-hour window from first coming on duty, after 10 hours off.",
        "option_d": "",
        "correct_answer": "C",
        "explanation": "The '14-Hour Rule' prohibits driving after 14 hours on duty (including non-driving time) following 10 consecutive hours off. Off-duty breaks do not extend the 14-hour window."
    },
    {
        "id": "gk_hs_003",
        "question": "What is a 'sleeper berth' exception in the hours of service regulations?",
        "option_a": "It allows drivers to drive an extra 2 hours if they take a nap in the sleeper berth.",
        "option_b": "It allows drivers to split their required off-duty time using the sleeper berth under specific rules.",
        "option_c": "It replaces the 10-hour off-duty requirement completely.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "The sleeper berth exception allows drivers to split their required off-duty rest in two periods (e.g., 8+2 hours) using the sleeper berth. Both periods must meet specific rules to be valid."
    },
    {
        "id": "gk_hs_004",
        "question": "Under the 60/70-hour rule, a driver using 7 consecutive days cannot drive after accumulating:",
        "option_a": "60 on-duty hours in any 7 consecutive days.",
        "option_b": "70 on-duty hours in any 7 consecutive days.",
        "option_c": "Both A and B depending on which rule the carrier uses.",
        "option_d": "",
        "correct_answer": "C",
        "explanation": "Carriers can operate under either a 60-hour/7-day or 70-hour/8-day rule. Under the 7-day rule, a driver cannot drive after reaching 60 on-duty hours. Under the 8-day rule, the limit is 70 hours."
    },
    {
        "id": "gk_hs_005",
        "question": "A driver who has accumulated the maximum on-duty hours under the 60/70-hour rule must take at least how many consecutive hours off before driving again?",
        "option_a": "10 consecutive hours off.",
        "option_b": "34 consecutive hours off (a 34-hour restart).",
        "option_c": "24 consecutive hours off.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "A driver can restart their 60/70-hour clock by taking at least 34 consecutive hours off duty. This 'restart provision' allows the weekly cycle to begin fresh."
    },
    {
        "id": "gk_hs_006",
        "question": "What does it mean when a driver's 'electronic logging device' (ELD) shows a 'violation' notification?",
        "option_a": "The ELD's battery is low.",
        "option_b": "The driver has exceeded or is about to exceed a regulated hours of service limit.",
        "option_c": "The vehicle requires an oil change.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "ELD violation notifications alert drivers when they have exceeded or are approaching a hours of service limit. Violations must be resolved, and a record of the violation is stored in the ELD."
    },
    {
        "id": "gk_hs_007",
        "question": "Who is primarily responsible for ensuring a commercial driver complies with hours of service regulations?",
        "option_a": "The shipper.",
        "option_b": "Both the driver and the motor carrier.",
        "option_c": "The federal DOT inspector.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "Both the driver and the motor carrier (company) are responsible for complying with hours of service regulations. Carriers cannot require or allow drivers to violate the rules."
    },
    {
        "id": "gk_hs_008",
        "question": "Under hours of service rules, 'on-duty time' includes all of the following EXCEPT:",
        "option_a": "All time at a carrier or shipper plant while waiting to be dispatched.",
        "option_b": "Time spent resting in a sleeper berth during a split-sleeper period.",
        "option_c": "Time performing inspection duties at the start and end of each trip.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "Time spent in a sleeper berth during a qualifying rest period does not count as on-duty time. All other waiting, loading, inspection, and driving time counts as on-duty time."
    },
    {
        "id": "gk_hs_009",
        "question": "The hours of service 30-minute rest break rule requires a property-carrying driver to take a break of at least 30 minutes after:",
        "option_a": "Driving for 8 consecutive hours without taking a break.",
        "option_b": "Being on duty for 10 hours total.",
        "option_c": "A break is only required when the driver feels tired.",
        "option_d": "",
        "correct_answer": "A",
        "explanation": "Current FMCSA rules require a 30-minute rest break if 8 consecutive hours have passed since the driver's last off-duty or sleeper berth period of at least 30 minutes. This break must be taken off duty."
    },
    {
        "id": "gk_hs_010",
        "question": "A short-haul exemption from keeping electronic logs is available to drivers who:",
        "option_a": "Drive only within 150 air-mile radius of their home terminal and return within 14 hours.",
        "option_b": "Work for a company with fewer than 10 trucks.",
        "option_c": "Drive fewer than 500 miles per week.",
        "option_d": "",
        "correct_answer": "A",
        "explanation": "Drivers who operate within a 150 air-mile radius of their home terminal and return within 14 hours each day are generally exempt from ELD requirements, though they still must comply with hours of service limits."
    },
    {
        "id": "gk_hs_011",
        "question": "When driving long distances, which of the following best helps prevent fatigue?",
        "option_a": "Drinking coffee or energy drinks every hour.",
        "option_b": "Taking regular scheduled rest breaks and getting adequate sleep between shifts.",
        "option_c": "Opening the window or turning up the radio to stay awake.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "The most effective fatigue management strategy is proper rest—both during a trip (regular breaks) and before a trip (adequate sleep). Coffee and other stimulants only provide temporary relief."
    },
    {
        "id": "gk_hs_012",
        "question": "Which of the following is a warning sign that you are too fatigued to drive safely?",
        "option_a": "Feeling slightly hungry.",
        "option_b": "Missing highway exits, drifting between lanes, or difficulty focusing.",
        "option_c": "A very slight increase in reaction time.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "Missing exits, lane drifting, and difficulty focusing are serious signs of fatigue that indicate the driver should stop immediately. Fatigue impairs driving ability as severely as alcohol."
    },

    # ==========================================
    # ACCIDENTS / REPORTING (target: 15 questions)
    # ==========================================
    {
        "id": "gk_ac_001",
        "question": "If you are involved in an accident with injuries, which of the following should you do first?",
        "option_a": "Call your dispatcher to report the accident.",
        "option_b": "Get your vehicle off the road if possible.",
        "option_c": "Call 911 or emergency services to get medical help for the injured.",
        "option_d": "",
        "correct_answer": "C",
        "explanation": "The first priority in any accident with injuries is to secure medical help. Call 911 immediately. Then protect the scene, notify your carrier, and gather required information."
    },
    {
        "id": "gk_ac_002",
        "question": "When involved in an accident, you must protect the scene by:",
        "option_a": "Moving all vehicles to the shoulder regardless of injuries.",
        "option_b": "Setting out warning devices (triangles, flares) and turning on hazard lights to warn approaching traffic.",
        "option_c": "Standing in the road to direct traffic around the accident.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "After an accident, protect the scene by activating hazard lights and placing warning devices. This prevents secondary accidents while emergency services respond."
    },
    {
        "id": "gk_ac_003",
        "question": "A motor carrier accident must be reported to the DOT if it involves:",
        "option_a": "Any property damage regardless of amount.",
        "option_b": "A fatality, injury requiring immediate medical attention away from the scene, or disabling damage to a vehicle.",
        "option_c": "Only accidents involving hazardous materials.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "DOT-reportable accidents involve: (1) a fatality, (2) bodily injury requiring immediate medical treatment away from the scene, or (3) disabling damage to one or more vehicles requiring towing. All three conditions are reportable."
    },
    {
        "id": "gk_ac_004",
        "question": "After an accident, the driver must collect which of the following information from the other driver?",
        "option_a": "Their Social Security number and bank account information.",
        "option_b": "Name, address, driver's license number, and vehicle registration information.",
        "option_c": "Only their phone number for insurance contact.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "After an accident, collect the other driver's name, address, driver's license number, vehicle registration, and insurance information. This is required for accident reports and insurance claims."
    },
    {
        "id": "gk_ac_005",
        "question": "When is it appropriate to move an injured person after an accident?",
        "option_a": "Immediately, to get them to safety.",
        "option_b": "Only if the person is in immediate danger such as from fire, flooding, or oncoming traffic.",
        "option_c": "Never—wait for medical professionals in all situations.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "You should generally not move an injured person to avoid worsening spinal or other injuries. The exception is if leaving them in place creates an immediate life-threatening danger (fire, traffic, etc.)."
    },
    {
        "id": "gk_ac_006",
        "question": "What is a driver's obligation if they are involved in a hit-and-run accident where they hit a parked vehicle?",
        "option_a": "Leave a note with their contact information and report to police as soon as possible.",
        "option_b": "Leave the scene quickly before anyone sees them.",
        "option_c": "Call their insurance company from the scene and wait.",
        "option_d": "",
        "correct_answer": "A",
        "explanation": "Leaving the scene of an accident, even involving a parked vehicle, is illegal. You must leave your contact information and report to the police. Failure to do so can result in criminal charges."
    },
    {
        "id": "gk_ac_007",
        "question": "In what situation may a driver legally leave the scene of an accident before police arrive?",
        "option_a": "Never—a driver must always remain until police arrive.",
        "option_b": "If they need to obtain medical care for themselves and return as soon as possible.",
        "option_c": "If no one was injured and property damage appears minor.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "A driver may leave the scene only if they require immediate medical attention and cannot remain. They must return as soon as able and complete their reporting obligations. In all other cases, remaining is required."
    },

    # ==========================================
    # SHIFTING / CLUTCH / TRANSMISSION (target: 20 questions)
    # ==========================================
    {
        "id": "gk_sc_001",
        "question": "What is the purpose of 'double clutching' when shifting gears in a manual transmission?",
        "option_a": "To allow the engine to cool between gear changes.",
        "option_b": "To synchronize the transmission gears and engine speed for a smooth shift.",
        "option_c": "To engage the brakes while shifting.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "Double clutching (engaging the clutch, going to neutral, releasing, then engaging again) matches engine and transmission speeds, allowing smooth gear engagement without grinding."
    },
    {
        "id": "gk_sc_002",
        "question": "When should you downshift while approaching a downgrade?",
        "option_a": "After you have started descending and feel the vehicle accelerating.",
        "option_b": "Before starting down the hill—shift into the appropriate low gear before the descent.",
        "option_c": "At the bottom of the hill to avoid losing speed.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "Always downshift before a steep descent, not during it. It is unsafe to shift gears while descending because you could miss the gear and end up in neutral, with no engine braking."
    },
    {
        "id": "gk_sc_003",
        "question": "What is 'engine braking' and when is it used?",
        "option_a": "Using the throttle to increase engine RPM when slowing down.",
        "option_b": "Using the resistance of the engine (by being in a low gear) to help slow the vehicle on downgrades.",
        "option_c": "Applying the engine's cooling fan as a drag device.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "Engine braking uses the drag of the engine to help slow the vehicle. By shifting to a lower gear on downgrades, the engine acts as a brake, reducing wear on the service brakes."
    },
    {
        "id": "gk_sc_004",
        "question": "What does 'riding the clutch' mean, and why is it harmful?",
        "option_a": "Pressing the clutch all the way in when braking, which damages the transmission.",
        "option_b": "Keeping your foot partially on the clutch pedal while driving, which causes excessive clutch wear.",
        "option_c": "Using the clutch instead of the brakes when slowing down.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "'Riding the clutch' means resting your foot on the clutch pedal while driving, which keeps the clutch partially disengaged. This causes rapid wear on the clutch plate and can lead to premature clutch failure."
    },
    {
        "id": "gk_sc_005",
        "question": "When is the best time to upshift to a higher gear?",
        "option_a": "When engine RPM reaches the top of the governed range.",
        "option_b": "When the engine reaches the RPM specified for shifting in your vehicle's manual—usually when you hear the engine working at peak torque.",
        "option_c": "Whenever traffic allows, regardless of engine speed.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "Upshift when the engine reaches the appropriate RPM for gear changes as specified in your vehicle's operating manual. Shifting at the right RPM saves fuel and reduces engine wear."
    },
    {
        "id": "gk_sc_006",
        "question": "If you miss a gear while shifting on a downgrade, what is the safest course of action?",
        "option_a": "Immediately try to find any lower gear.",
        "option_b": "Apply the brakes firmly and try to slow down enough to shift into a low gear safely.",
        "option_c": "Turn off the engine so the transmission locks up.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "If you miss a gear going downhill, use your brakes to slow the vehicle enough to safely engage a low gear. If brakes overheat, look for an escape ramp or other alternative."
    },
    {
        "id": "gk_sc_007",
        "question": "What does it mean if a manual transmission vehicle is 'out of gear' on a downgrade?",
        "option_a": "Engine braking is helping to slow the vehicle.",
        "option_b": "There is no engine braking—only the service brakes are slowing the vehicle.",
        "option_c": "The transmission is in the correct gear for the grade.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "Being 'out of gear' or coasting in neutral on a downgrade eliminates engine braking, placing all braking burden on the service brakes. This can cause brake overheating and brake fade—a dangerous situation."
    },
    {
        "id": "gk_sc_008",
        "question": "What is 'progressive shifting'?",
        "option_a": "Skipping multiple gears to reach highway speed faster.",
        "option_b": "Shifting up through the gears at lower RPM than maximum to improve fuel economy.",
        "option_c": "Shifting gears only when the vehicle is stopped.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "Progressive shifting means upshifting at lower RPM than the engine's maximum to improve fuel efficiency. It is a fuel-saving and engine-friendly technique used by professional drivers."
    },

    # ==========================================
    # ENGINE COMPARTMENT / FLUIDS (target: 15 questions)
    # ==========================================
    {
        "id": "gk_ec_001",
        "question": "During a pre-trip engine compartment inspection, which fluid levels should you check?",
        "option_a": "Engine oil only—other fluids are checked only at service intervals.",
        "option_b": "Engine oil, coolant, power steering fluid, windshield washer fluid, and brake fluid (if applicable).",
        "option_c": "Only coolant and windshield washer fluid.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "A thorough pre-trip inspection of the engine compartment includes checking all fluid levels: engine oil, coolant, power steering fluid, windshield washer fluid, and hydraulic brake fluid if applicable."
    },
    {
        "id": "gk_ec_002",
        "question": "What does a low coolant temperature gauge reading while the engine has been running for a while indicate?",
        "option_a": "Normal operation—cold temperature means the cooling system is working well.",
        "option_b": "A possible thermostat failure, which can cause the engine to run cold or overheat intermittently.",
        "option_c": "The engine needs more coolant added immediately.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "If the coolant temperature reads low after the engine has warmed up, the thermostat may be stuck open. A stuck thermostat allows too much coolant flow and prevents the engine from reaching operating temperature."
    },
    {
        "id": "gk_ec_003",
        "question": "During a pre-trip inspection, you notice the serpentine belt is cracked or frayed. What should you do?",
        "option_a": "Drive to your destination and get it fixed on return.",
        "option_b": "Do not drive—a damaged belt can break and disable the engine, alternator, and power steering.",
        "option_c": "Only replace the belt if it is fully broken.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "A cracked or frayed serpentine belt is a serious safety defect. If it breaks while driving, the engine can overheat, the alternator stops charging, and power steering can fail—all simultaneously."
    },
    {
        "id": "gk_ec_004",
        "question": "What does a 'low oil pressure' warning light indicate while driving?",
        "option_a": "Normal operation during cold starts only.",
        "option_b": "A serious engine problem—stop the vehicle as safely and quickly as possible.",
        "option_c": "The oil needs to be changed at the next opportunity.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "A low oil pressure warning while driving indicates a serious problem. Driving with insufficient oil pressure can destroy the engine within minutes. Stop safely as soon as possible and investigate."
    },
    {
        "id": "gk_ec_005",
        "question": "Why should you never mix different types or colors of engine coolant?",
        "option_a": "Different coolants can react chemically, creating deposits that clog the cooling system.",
        "option_b": "Different colors are only cosmetic—mixing them has no effect on performance.",
        "option_c": "Mixing coolants is acceptable as long as the level stays correct.",
        "option_d": "",
        "correct_answer": "A",
        "explanation": "Different coolant formulations can chemically react with each other, forming sludge or gel that can clog passages in the cooling system. Always use the type and color specified by the manufacturer."
    },
    {
        "id": "gk_ec_006",
        "question": "When checking belts during a pre-trip inspection, you are looking for:",
        "option_a": "Only whether the belt is on the pulleys.",
        "option_b": "Fraying, cracks, glazing (shiny surface), and proper tension.",
        "option_c": "Only the tension—the physical condition of the belt is not important.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "When checking belts, inspect for fraying, cracks, glazing (caused by slipping), and correct tension. Any of these defects can cause the belt to fail while driving."
    },

    # ==========================================
    # LIGHTS / ELECTRICAL (target: 15 questions)
    # ==========================================
    {
        "id": "gk_le_001",
        "question": "Under FMCSA regulations, what lights must be on when driving at night?",
        "option_a": "Only the headlights in low-beam mode.",
        "option_b": "Headlights, tail lights, clearance lights, and all required marker lights.",
        "option_c": "Only the headlights and brake lights—other lights are optional.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "At night, all required lights must be operational: headlights (high or low beam as appropriate), tail lights, clearance lights, identification lights, and side marker lights. Non-working lights are a serious safety defect."
    },
    {
        "id": "gk_le_002",
        "question": "What does it mean when the 'Check Engine' light comes on while driving?",
        "option_a": "Stop immediately—the engine is about to fail.",
        "option_b": "The engine management system has detected a fault; investigate at the next opportunity.",
        "option_c": "The light always comes on occasionally and can be ignored.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "A 'Check Engine' light indicates the engine control computer has detected a fault code. While it doesn't always mean immediate danger, you should investigate promptly. If accompanied by other symptoms, stop and investigate immediately."
    },
    {
        "id": "gk_le_003",
        "question": "Large commercial vehicles are required to have clearance lights at the top of the vehicle. What is the purpose of these lights?",
        "option_a": "To provide additional lighting at railroad crossings.",
        "option_b": "To indicate the overall height and width of the vehicle to other drivers.",
        "option_c": "To signal when the driver is about to back up.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "Clearance lights (amber at front, red at rear) indicate the outer edges and overall width of the vehicle. They help other drivers judge the size of the truck, especially at night."
    },
    {
        "id": "gk_le_004",
        "question": "Under federal regulations, how many amber marker lights must a trailer that is 80 inches or more wide have on its front?",
        "option_a": "One, centered on the front.",
        "option_b": "Two, one at each side.",
        "option_c": "Three, one at the center and one at each side.",
        "option_d": "",
        "correct_answer": "C",
        "explanation": "Trailers 80 inches or more in overall width must have three amber clearance lights on the front: one at the left edge, one at the right edge, and one as close to the center as possible."
    },
    {
        "id": "gk_le_005",
        "question": "If you find a broken or non-functioning clearance light during pre-trip inspection, you should:",
        "option_a": "Cover it with tape and continue driving—it is not a critical system.",
        "option_b": "Have it repaired before driving, as all required lights must be operational.",
        "option_c": "Drive only during daytime when clearance lights are not required.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "All required lights and reflectors must be operational before driving. A broken clearance light is a safety defect—other drivers may not be able to judge your vehicle's width, increasing accident risk."
    },

    # ==========================================
    # CDL REQUIREMENTS / VIOLATIONS (target: 15 questions)
    # ==========================================
    {
        "id": "gk_cdl_001",
        "question": "If you are convicted of a DUI or DWI while operating a personal (non-commercial) vehicle, what happens to your CDL?",
        "option_a": "Nothing—CDL rules only apply to violations in commercial vehicles.",
        "option_b": "You lose your CDL for at least one year, the same as if the violation occurred in a commercial vehicle.",
        "option_c": "Your CDL is suspended only while your personal license is suspended.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "A DUI/DWI conviction in any vehicle—commercial or personal—results in at least a one-year CDL disqualification. CDL holders are held to a higher standard even in their personal vehicles."
    },
    {
        "id": "gk_cdl_002",
        "question": "What blood alcohol concentration (BAC) is the legal limit for CDL holders driving a commercial vehicle?",
        "option_a": "0.08% (same as for non-commercial drivers).",
        "option_b": "0.04% (half the standard limit for non-commercial drivers).",
        "option_c": "0.02% (any detectable alcohol is over the limit).",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "The legal BAC limit for CDL holders operating a commercial vehicle is 0.04%—half the 0.08% limit for regular drivers. This reflects the higher responsibility of professional drivers."
    },
    {
        "id": "gk_cdl_003",
        "question": "What is the minimum CDL disqualification period for a second conviction of a serious traffic violation (such as excessive speeding) while driving a commercial vehicle?",
        "option_a": "30 days.",
        "option_b": "60 days.",
        "option_c": "90 days.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "A second conviction of a serious traffic violation within a 3-year period results in a minimum 60-day CDL disqualification. A third conviction results in a minimum 120-day disqualification."
    },
    {
        "id": "gk_cdl_004",
        "question": "What is a 'serious traffic violation' in the context of CDL regulations?",
        "option_a": "Any violation for which a police officer can write a ticket.",
        "option_b": "Violations such as excessive speeding (15+ mph over limit), reckless driving, improper lane change, following too closely, or traffic violations causing a fatality.",
        "option_c": "Only parking violations and equipment violations.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "Serious traffic violations include: speeding 15+ mph over the limit, reckless driving, improper lane change, following too closely, and any traffic violation in connection with an accident causing a fatality."
    },
    {
        "id": "gk_cdl_005",
        "question": "A CDL holder convicted of using their commercial vehicle in a felony involving a controlled substance will:",
        "option_a": "Have their CDL suspended for 90 days.",
        "option_b": "Permanently lose their CDL with no possibility of restoration.",
        "option_c": "Be disqualified for one year on a first offense.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "Using a commercial vehicle in commission of a felony involving a controlled substance results in lifetime CDL revocation with no possibility of reinstatement. This is one of the most severe CDL penalties."
    },
    {
        "id": "gk_cdl_006",
        "question": "If a CDL holder's license is suspended or revoked, when must they notify their employer?",
        "option_a": "Within one week.",
        "option_b": "Within 30 days.",
        "option_c": "Within two business days.",
        "option_d": "",
        "correct_answer": "C",
        "explanation": "CDL holders must notify their employer within two business days if their license is suspended, revoked, canceled, or if they are disqualified from driving. Failure to notify is itself a violation."
    },
    {
        "id": "gk_cdl_007",
        "question": "A CDL holder who commits a traffic violation in a non-commercial vehicle must report it to:",
        "option_a": "Only the DMV—employers do not need to know about non-commercial violations.",
        "option_b": "Their employer within 30 days of conviction.",
        "option_c": "Their employer within 2 business days of the conviction.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "CDL holders must notify their employer within 30 days of any traffic violation conviction, whether in a commercial or personal vehicle. This is separate from the 2-day requirement for license actions."
    },
    {
        "id": "gk_cdl_008",
        "question": "Which of the following vehicles requires a CDL to operate commercially?",
        "option_a": "A pickup truck towing a personal boat trailer.",
        "option_b": "A straight truck with a GVWR of 28,000 pounds used for business deliveries.",
        "option_c": "A personal RV weighing 30,000 pounds.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "A CDL is required for commercial vehicles with a GVWR of 26,001 pounds or more, vehicles transporting 16+ passengers for compensation, or vehicles transporting hazardous materials requiring placards."
    },

    # ==========================================
    # SUSPENSION / FRAME (target: 15 questions)
    # ==========================================
    {
        "id": "gk_sf_001",
        "question": "During a pre-trip inspection, a cracked or broken leaf spring should cause you to:",
        "option_a": "Continue driving carefully until you can get it repaired.",
        "option_b": "Take the vehicle out of service immediately—it is a serious safety defect.",
        "option_c": "Check whether the spring is the primary or secondary spring before deciding.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "Cracked, broken, or missing leaf springs are serious safety defects that put the vehicle out of service. They can cause loss of vehicle control and catastrophic handling failures."
    },
    {
        "id": "gk_sf_002",
        "question": "What is the purpose of shock absorbers (dampers) on a commercial vehicle?",
        "option_a": "To increase the vehicle's load-carrying capacity.",
        "option_b": "To control the oscillation of the suspension springs, improving ride stability and tire contact with the road.",
        "option_c": "To reduce air resistance when driving at highway speeds.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "Shock absorbers dampen the bouncing of the suspension springs. Without functioning shock absorbers, the vehicle bounces excessively, reducing tire contact with the road and making handling dangerous."
    },
    {
        "id": "gk_sf_003",
        "question": "A missing or broken torque rod in the suspension system is:",
        "option_a": "A minor defect—the vehicle can continue operating.",
        "option_b": "A serious defect requiring the vehicle be taken out of service.",
        "option_c": "Only a concern for front axle suspension.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "Torque rods control axle movement and alignment. A missing or broken torque rod is a critical suspension defect that can cause severe handling problems and must be repaired before the vehicle is driven."
    },
    {
        "id": "gk_sf_004",
        "question": "When inspecting the frame of a commercial vehicle during pre-trip, you are looking for:",
        "option_a": "Only visible rust and corrosion.",
        "option_b": "Cracks, bent sections, loose rivets, or broken welds.",
        "option_c": "Whether the frame is painted the correct color.",
        "option_d": "",
        "correct_answer": "B",
        "explanation": "Frame inspection during pre-trip should check for cracks, bends, loose rivets or bolts, and broken welds. Any of these defects can compromise the structural integrity of the vehicle."
    },
    {
        "id": "gk_sf_005",
        "question": "Air-ride suspension systems on commercial trailers:",
        "option_a": "Use compressed air bags instead of steel springs, providing a smoother ride and protecting sensitive cargo.",
        "option_b": "Are maintained at a constant pressure regardless of load.",
        "option_c": "Cannot be adjusted and are set at the factory.",
        "option_d": "",
        "correct_answer": "A",
        "explanation": "Air-ride (air suspension) systems use inflatable air bags instead of conventional springs. They automatically adjust to the load, providing a consistently smooth ride that protects fragile cargo from road shock."
    },
]

def write_questions_to_csv(questions, output_path):
    fieldnames = ["id", "question", "image", "option_a", "option_b", "option_c", "option_d", "correct_answer", "explanation"]
    
    with open(output_path, "a", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        for i, q in enumerate(questions):
            row = {
                "id": q.get("id", f"new_{i+1000}"),
                "question": q["question"],
                "image": "",
                "option_a": q.get("option_a", ""),
                "option_b": q.get("option_b", ""),
                "option_c": q.get("option_c", ""),
                "option_d": q.get("option_d", ""),
                "correct_answer": q["correct_answer"],
                "explanation": q["explanation"]
            }
            writer.writerow(row)
    print(f"Appended {len(questions)} questions to {output_path}")

if __name__ == "__main__":
    output_1 = "/Users/radhikabiyani/Projects/DMV_Question_Bank/web/public/data/california_cdl_class_a_questions.csv"
    output_2 = "/Users/radhikabiyani/Projects/DMV_Question_Bank/web/california_cdl_class_a_questions.csv"
    
    write_questions_to_csv(NEW_QUESTIONS, output_1)
    write_questions_to_csv(NEW_QUESTIONS, output_2)
    
    print(f"\nTotal new questions generated: {len(NEW_QUESTIONS)}")
    
    # Verify total count
    with open(output_1, "r", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        total = sum(1 for _ in reader)
    print(f"Total questions now in file: {total}")
    
    # Group by topic prefix for summary
    from collections import Counter
    prefixes = Counter(q["id"].split("_")[1] for q in NEW_QUESTIONS)
    print("\nNew questions by topic:")
    topic_names = {
        "wz": "Work Zones",
        "cu": "Coupling/Uncoupling",
        "hm": "Hazardous Materials",
        "st": "Steering",
        "ms": "Managing Space",
        "hs": "Hours of Service",
        "ac": "Accidents/Reporting",
        "sc": "Shifting/Clutch",
        "ec": "Engine Compartment",
        "le": "Lights/Electrical",
        "cdl": "CDL Requirements",
        "sf": "Suspension/Frame",
    }
    for prefix, count in sorted(prefixes.items()):
        print(f"  {topic_names.get(prefix, prefix)}: {count}")
