import { Target, AlertTriangle, Info, CheckCircle, Snowflake, Navigation } from 'lucide-react'

export const maineRevisionContent = {
  'Maine Traffic Laws & Legal Requirements': {
    icon: Target,
    sections: [
      {
        title: 'Speed Limits and Traffic Control',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Maine Speed Limits
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>School zones:</strong> 15 mph when children present or signs are flashing
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Residential areas:</strong> 25 mph (unless posted otherwise)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Business/urban districts:</strong> 25 mph
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Rural roads:</strong> 45 mph (unless posted otherwise)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Interstate highways:</strong> 70-75 mph (varies by section)
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Right-of-Way Rules
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Four-way stops:</strong> First vehicle to arrive goes first; if simultaneous, vehicle on right has right-of-way
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Uncontrolled intersections:</strong> Vehicle on the right always has right-of-way
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Left turns:</strong> Must yield to oncoming traffic and pedestrians
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Emergency vehicles:</strong> Move to right and stop completely until they pass
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Pedestrians:</strong> Always have right-of-way in crosswalks, marked or unmarked
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Roundabouts:</strong> Traffic in circle has right-of-way over entering traffic
              </li>
            </ul>
          </div>
        `
      },
      {
        title: 'Insurance and Legal Responsibilities',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Maine Insurance Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Minimum liability coverage:</strong> $50,000 bodily injury per person, $100,000 per accident, $25,000 property damage
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Medical payments coverage:</strong> $2,000 minimum required
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Uninsured motorist coverage:</strong> $50,000/$100,000 required
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Proof of insurance:</strong> Must carry valid proof at all times
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Point System and Violations
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>License suspension:</strong> 10 or more points in 2 years
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Speeding violations:</strong> 2-8 points depending on speed over limit
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Following too closely:</strong> 4 points
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Failure to yield right-of-way:</strong> 4 points
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Passing violations:</strong> 4 points
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Vehicle Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>License plates:</strong> Single plate on rear with current registration
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Seat belts:</strong> Required for all occupants; driver responsible for passengers under 18
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Child safety seats:</strong> Required for children under 8 or under 80 pounds
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Inspection:</strong> Annual safety inspection required
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Impaired Driving Laws & Penalties': {
    icon: AlertTriangle,
    sections: [
      {
        title: 'Maine OUI Laws and Consequences',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              OUI Penalties and Facts
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Legal limit:</strong> 0.08% BAC for drivers 21 and over, 0.00% for under 21
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>First OUI conviction:</strong> 150-day license suspension, $500 fine minimum
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Second OUI within 10 years:</strong> 3-year license suspension, $700 fine minimum
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Administrative suspension:</strong> Immediate 275-day suspension for test failure
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Ignition interlock:</strong> Required for repeat offenders and high BAC cases
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Chemical Testing Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Implied consent law:</strong> Driving constitutes consent to chemical testing
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Test refusal penalty:</strong> 275-day license suspension (separate from criminal penalties)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Types of tests:</strong> Blood, breath, or urine as requested by officer
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Right to additional test:</strong> May request independent test at own expense
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Drug Impairment
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Illegal drugs:</strong> Any detectable amount can result in OUI charges
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Prescription medications:</strong> Can impair driving even when legally prescribed
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Over-the-counter drugs:</strong> Some can cause drowsiness or impairment
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Combined effects:</strong> Alcohol + any drug creates enhanced impairment
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Parking, Stopping & Vehicle Operation': {
    icon: Info,
    sections: [
      {
        title: 'Parking Rules and Distances',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Legal Parking Distances
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Fire hydrant:</strong> 15 feet minimum distance
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Crosswalk:</strong> 20 feet from marked crosswalk
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Stop sign/traffic light:</strong> 30 feet minimum distance
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Bridge/tunnel:</strong> No parking on narrow bridges or in tunnels
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Driveway:</strong> Cannot block access to private driveways
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Double parking:</strong> Prohibited - cannot park beside another parked vehicle
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Hill Parking Procedures
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Uphill with curb:</strong> Turn wheels AWAY from curb (left)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Downhill with curb:</strong> Turn wheels TOWARD curb (right)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>No curb present:</strong> Turn wheels toward shoulder/edge of road
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Parking brake:</strong> Always set on any incline
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Transmission:</strong> Leave manual transmission in gear, automatic in park
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Parallel Parking Steps
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Space requirement:</strong> Find space 1.5 times your vehicle length
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Initial position:</strong> Pull alongside front car, mirrors aligned
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Begin backing:</strong> Turn wheel fully right and reverse
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Straighten wheel:</strong> When your car reaches 45-degree angle
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Final positioning:</strong> Turn wheel left to straighten in space
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Distance from curb:</strong> No more than 12 inches from curb
              </li>
            </ul>
          </div>
        `
      },
      {
        title: 'Vehicle Breakdown and Emergency Procedures',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Breakdown Response
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Move off roadway:</strong> Get as far right as safely possible
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Hazard lights:</strong> Turn on immediately to alert other drivers
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Hood position:</strong> Raise hood to signal mechanical trouble
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Personal safety:</strong> Stay visible but away from traffic flow
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Emergency assistance:</strong> Call 911 or roadside assistance
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Warning devices:</strong> Use flares or reflectors if available
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Accident Scene Protocol
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Stop obligation:</strong> Must stop if involved in accident with injury, death, or property damage over $1,000
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Information exchange:</strong> Provide name, address, registration, and insurance information
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Police notification:</strong> Required for accidents with injury or significant property damage
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Accident report:</strong> Must file written report within 48 hours if police don't investigate
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Safe Driving Practices & Defensive Driving': {
    icon: CheckCircle,
    sections: [
      {
        title: 'Following Distance and Space Management',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Following Distance Rules
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Basic rule:</strong> 3-second minimum following distance in ideal conditions
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Poor weather:</strong> Increase to 4-6 seconds in rain, fog, or reduced visibility
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Behind large vehicles:</strong> Extra space needed to see around them
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Night driving:</strong> Increase following distance due to reduced visibility
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Tailgaters behind you:</strong> Increase your following distance to create more space cushion
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Lane Changes and Passing
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Signal timing:</strong> Signal at least 100 feet before lane change
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Check blind spots:</strong> Turn head to check over shoulder before moving
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Safe return:</strong> Can see both headlights of passed vehicle in rearview mirror
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Passing bicyclists:</strong> Allow minimum 3 feet clearance
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>No passing zones:</strong> Yellow solid line on your side, hills, curves, intersections
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Defensive Driving Strategies
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Constant scanning:</strong> Check mirrors every 5-8 seconds, scan road ahead
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Anticipate problems:</strong> Watch for potential hazards from other drivers
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Communicate clearly:</strong> Use signals, lights, and horn appropriately
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Expect the unexpected:</strong> Don't assume other drivers will follow rules
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Maintain escape routes:</strong> Always have a way out of dangerous situations
              </li>
            </ul>
          </div>
        `
      },
      {
        title: 'Distracted and Aggressive Driving',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Maine Distracted Driving Laws
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Cell phone ban:</strong> No handheld cell phone use while driving
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Texting prohibition:</strong> Texting while driving is illegal
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Hands-free allowed:</strong> Bluetooth and voice commands permitted
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Emergency exception:</strong> Can use phone to report emergency
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Penalties:</strong> Fines and points on license for violations
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Managing Aggressive Drivers
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Stay calm:</strong> Don't take aggressive actions personally
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Avoid eye contact:</strong> Don't engage or escalate the situation
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Give them space:</strong> Let aggressive drivers pass safely
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Don't retaliate:</strong> Avoid gestures, horn honking, or blocking
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Report dangerous behavior:</strong> Call 911 if driver poses immediate threat
              </li>
            </ul>
          </div>
        `
      },
      {
        title: 'Special Situations and Emergency Response',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Railroad Crossings
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Stop distance:</strong> At least 15 feet from nearest rail when signals activate
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Approach procedure:</strong> Slow down, look both ways, listen for trains
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Never race trains:</strong> Train cannot stop quickly - always yield
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Multiple tracks:</strong> Check for second train after first passes
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Stalled on tracks:</strong> Get out immediately and run away from tracks at 45-degree angle
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Emergency Vehicle Response
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Immediate action:</strong> Move to right and stop completely
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Intersection strategy:</strong> Clear intersection before stopping
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Highway response:</strong> Move to right shoulder if possible
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Stay stopped:</strong> Remain stopped until emergency vehicle passes completely
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Vehicle System Failures
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Brake failure:</strong> Pump brakes rapidly, use parking brake gradually, downshift if manual
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Steering failure:</strong> Grip wheel firmly, ease off gas, brake gently
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Tire blowout:</strong> Hold steering steady, ease off gas, brake gradually when stable
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Off-road recovery:</strong> Slow down gradually, don't brake hard, steer back gently
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Maine Weather & Seasonal Driving': {
    icon: Snowflake,
    sections: [
      {
        title: 'Winter Driving in Maine',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Snow and Ice Driving
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Following distance:</strong> Increase to 8-10 seconds on snow/ice
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Braking technique:</strong> Gentle pressure to prevent wheel lockup (threshold braking)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Acceleration:</strong> Gradual acceleration to prevent wheel spin
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Steering inputs:</strong> Smooth, gentle movements to maintain control
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Speed reduction:</strong> Drive well below posted speed limits for conditions
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Black ice awareness:</strong> Most dangerous on bridges, overpasses, and shaded areas
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Poor Visibility Conditions
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Fog driving:</strong> Use low beam headlights, never high beams
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Heavy rain:</strong> First 30 minutes most dangerous due to oil/road debris
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Snow conditions:</strong> Use headlights and reduce speed significantly
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Dawn/dusk driving:</strong> Turn on headlights 30 minutes before sunset
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Windshield maintenance:</strong> Keep clean inside and out for maximum visibility
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Vehicle Winter Preparation
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Winter tires:</strong> Recommended for Maine winters, better traction than all-season
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Tire tread:</strong> Check regularly - adequate tread essential for control
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Cruise control:</strong> Never use on slippery or wet roads
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Emergency supplies:</strong> Blankets, food, water, flashlight, ice scraper
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Fuel level:</strong> Keep tank at least half full to prevent fuel line freezing
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Special Road Users & Wildlife Awareness': {
    icon: Navigation,
    sections: [
      {
        title: 'Sharing the Road Safely',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Motorcycles and Bicycles
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Motorcycle visibility:</strong> Harder to judge speed and distance
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Full lane rights:</strong> Motorcycles entitled to full lane width
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Three-foot rule:</strong> Give bicyclists minimum 3 feet clearance when passing
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Bicycle awareness:</strong> Watch for sudden swerving to avoid road hazards
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Door zone safety:</strong> Check for cyclists before opening car doors
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Pedestrian Safety and Laws
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Crosswalk law:</strong> Must stop for pedestrians in marked or unmarked crosswalks
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>School zones:</strong> Extra caution around children - they may act unpredictably
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Blind pedestrians:</strong> White cane or guide dog indicates visual impairment
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Don't block crosswalks:</strong> Stop before crosswalk line, not in crosswalk
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Sidewalk driving:</strong> Prohibited except when entering/exiting driveway
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Large Vehicles and Commercial Traffic
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Truck blind spots:</strong> Large blind spots on sides, rear, and front
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Following trucks:</strong> Stay back far enough to see truck's mirrors
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Passing safely:</strong> Pass trucks quickly but safely, signal early
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Turning radius:</strong> Large vehicles need extra room for turns
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>School buses:</strong> Stop when red lights flash, even on divided highways
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Wildlife Awareness (Maine-Specific)
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Moose crossings:</strong> Very common in Maine - large animals can cause fatal crashes
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Deer activity:</strong> Most active at dawn and dusk, especially in fall
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Warning signs:</strong> Watch for wildlife crossing signs, especially in rural areas
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>If collision imminent:</strong> Don't swerve - brake firmly and steer straight
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Reporting crashes:</strong> Report vehicle-wildlife collisions to police
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Seasonal awareness:</strong> Spring and fall have highest wildlife activity
              </li>
            </ul>
          </div>
        `
      }
    ]
  }
}