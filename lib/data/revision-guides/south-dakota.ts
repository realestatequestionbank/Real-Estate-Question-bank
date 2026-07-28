import { Target, AlertTriangle, Info, CheckCircle, Snowflake, Mountain } from 'lucide-react'

export const southdakotaRevisionContent = {
  'South Dakota Traffic Laws & Legal Requirements': {
    icon: Target,
    sections: [
      {
        title: 'Speed Limits and Traffic Control',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              South Dakota Speed Limits
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>School zones:</strong> 15 mph when children present or signs are active
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Residential areas:</strong> 25 mph in cities and towns
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Business districts:</strong> 25 mph unless otherwise posted
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Rural roads:</strong> 65 mph on state highways
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Interstate highways:</strong> 80 mph (cars), 75 mph (trucks and buses)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Special conditions:</strong> Reduce speed for weather, traffic, and road conditions
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Right-of-Way Rules
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Four-way stops:</strong> First to arrive goes first; if simultaneous, vehicle on right has priority
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Uncontrolled intersections:</strong> Vehicle approaching from the right has right-of-way
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Left turns:</strong> Must yield to oncoming traffic and pedestrians
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Emergency vehicles:</strong> Move to right and stop until they pass completely
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Pedestrians:</strong> Have right-of-way in marked and unmarked crosswalks
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
              South Dakota Insurance Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Liability coverage:</strong> $25,000 bodily injury per person, $50,000 per accident, $25,000 property damage
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Proof requirement:</strong> Must carry proof of insurance at all times
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>No insurance penalty:</strong> License suspension and fines
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>SR-22 filing:</strong> May be required for high-risk drivers
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Self-insurance option:</strong> Available with $75,000 deposit to state
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Point System and Violations
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>License suspension:</strong> 15 or more points in 12-month period
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Speeding violations:</strong> 2-8 points depending on speed over limit
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Reckless driving:</strong> 8 points plus possible license suspension
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Following too closely:</strong> 4 points
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Improper passing:</strong> 4 points
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Point reduction:</strong> 3 points removed for each 12 months without violations
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
                <strong>Seat belts:</strong> Required for all front seat occupants; driver responsible for passengers under 18
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Child safety seats:</strong> Required for children under 5 or under 40 pounds
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Vehicle inspection:</strong> No annual safety inspection required
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Emissions testing:</strong> Not required in South Dakota
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
        title: 'South Dakota DUI Laws and Consequences',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              DUI Penalties and BAC Limits
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Legal limit:</strong> 0.08% BAC for drivers 21 and over, 0.02% for under 21
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>First DUI offense:</strong> 30-day license revocation, $1,000-$2,000 fine, possible jail time
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Second DUI within 10 years:</strong> 1-year license revocation, $2,000-$4,000 fine, mandatory jail
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Administrative revocation:</strong> Immediate license suspension for BAC 0.08% or higher
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Ignition interlock:</strong> Required for repeat offenders and high BAC first offenders
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>24/7 program:</strong> Continuous sobriety monitoring for repeat offenders
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Chemical Testing and Implied Consent
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Implied consent law:</strong> Driving constitutes automatic consent to testing
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Test refusal penalty:</strong> 1-year license revocation for first refusal
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Subsequent refusals:</strong> 2-year revocation for second refusal
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Test types:</strong> Blood, breath, or urine as requested by officer
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Independent test:</strong> Right to additional test at own expense
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Drug Impairment and Prescription Medications
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Illegal substances:</strong> Any detectable amount can result in DUI charges
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Prescription drugs:</strong> Legal use doesn't prevent DUI if driving is impaired
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Over-the-counter medications:</strong> Can cause impairment and lead to charges
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Combined effects:</strong> Alcohol plus any drug creates enhanced impairment
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Medical marijuana:</strong> No exception for medical marijuana users - DUI laws apply
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
                <strong>Fire hydrant:</strong> 15 feet minimum distance in any direction
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Crosswalk:</strong> 20 feet from marked crosswalk at intersection
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Stop sign:</strong> 30 feet minimum distance from stop sign
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Traffic signal:</strong> 30 feet from traffic light
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Driveway entrance:</strong> Cannot block access to public or private driveways
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Double parking:</strong> Prohibited on all South Dakota roadways
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Hill Parking Procedures
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Uphill with curb:</strong> Turn front wheels AWAY from curb (left)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Downhill with curb:</strong> Turn front wheels TOWARD curb (right)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>No curb present:</strong> Turn wheels toward shoulder or edge of roadway
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Parking brake:</strong> Always set parking brake on any grade
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Transmission:</strong> Leave in park (automatic) or gear (manual)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Winter considerations:</strong> Extra precautions needed on icy hills
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Parallel Parking Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Space requirement:</strong> Space must be at least 6 feet longer than vehicle
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Initial positioning:</strong> Pull alongside front vehicle, mirrors aligned
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Backing procedure:</strong> Turn wheel fully right, reverse until 45-degree angle
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Straightening:</strong> When bumper clears front car, straighten wheel and continue backing
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Final adjustment:</strong> Turn wheel left to center in space
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Curb distance:</strong> No more than 18 inches from curb
              </li>
            </ul>
          </div>
        `
      },
      {
        title: 'Emergency Procedures and Accident Response',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Vehicle Breakdown Response
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Move off roadway:</strong> Get as far right as safely possible
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Hazard lights:</strong> Turn on immediately to warn other drivers
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Hood position:</strong> Raise hood to signal mechanical trouble
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Stay visible:</strong> Remain near vehicle but away from traffic
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Call for help:</strong> Use cell phone to contact emergency services
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Winter precautions:</strong> Stay warm and avoid carbon monoxide from exhaust
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Accident Scene Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Stop requirement:</strong> Must stop if involved in any accident
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Information exchange:</strong> Share name, address, license, registration, insurance
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Police notification:</strong> Call law enforcement for injury accidents or property damage over $2,000
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Move vehicles:</strong> Clear roadway if vehicles are driveable and no injuries
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Accident report:</strong> File written report within 30 days if required
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Hit and run:</strong> Leaving scene of accident is felony offense
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
                <strong>Poor weather:</strong> Increase to 6-8 seconds in snow, ice, or rain
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Large vehicles:</strong> Extra space needed when following trucks or buses
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>High speeds:</strong> Increase distance on interstate highways
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Night driving:</strong> Extra distance needed due to reduced visibility
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Rural roads:</strong> Watch for gravel and unpaved road conditions
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Passing and Lane Change Safety
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Signal timing:</strong> Signal at least 100 feet before lane change or turn
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Check blind spots:</strong> Turn head to check over shoulder before moving
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Safe return:</strong> Can see both headlights in rearview mirror before returning to lane
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Two-lane passing:</strong> Only pass when broken yellow line on your side
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>No passing zones:</strong> Hills, curves, intersections, solid yellow lines
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Rural highway awareness:</strong> Watch for farm equipment and slow-moving vehicles
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
                <strong>Anticipate hazards:</strong> Watch for potential problems from other drivers
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Communicate clearly:</strong> Use signals, lights, and horn appropriately
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Expect mistakes:</strong> Don't assume other drivers will follow rules
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Plan escape routes:</strong> Always have an out in dangerous situations
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Rural road caution:</strong> Watch for wildlife, farm equipment, and loose gravel
              </li>
            </ul>
          </div>
        `
      },
      {
        title: 'Distracted Driving and Road Rage Prevention',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              South Dakota Distracted Driving Laws
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Texting ban:</strong> Prohibited for all drivers while vehicle is in motion
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Minor restrictions:</strong> No cell phone use for drivers under 18
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Hands-free allowed:</strong> Voice-activated devices permitted for adults
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Emergency exception:</strong> Cell phone use allowed to report emergencies
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Penalties:</strong> Fines and potential points on driving record
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
                <strong>Avoid confrontation:</strong> No eye contact, gestures, or retaliation
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Give them space:</strong> Let aggressive drivers pass safely
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Don't block:</strong> Avoid preventing others from passing or changing lanes
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Report dangerous behavior:</strong> Call 911 for immediate threats to safety
              </li>
            </ul>
          </div>
        `
      },
      {
        title: 'Emergency Response and System Failures',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Vehicle System Failures
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Brake failure:</strong> Pump brakes rapidly, use parking brake gradually, downshift if manual
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Steering failure:</strong> Grip wheel firmly, ease off accelerator, brake gently when possible
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Tire blowout:</strong> Hold steering steady, ease off gas, brake gradually when stable
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Engine failure:</strong> Turn on hazards, move to shoulder, call for assistance
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Off-road recovery:</strong> Don't panic, slow gradually, steer gently back to roadway
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Emergency Vehicle Response
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Immediate action:</strong> Move to right edge of roadway and stop
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Intersection procedure:</strong> Clear intersection before stopping
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Highway response:</strong> Move to right shoulder when safe
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Stay stopped:</strong> Remain stopped until emergency vehicle passes completely
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Move over law:</strong> Change lanes away from stopped emergency vehicles when possible
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'South Dakota Weather & Rural Driving': {
    icon: Snowflake,
    sections: [
      {
        title: 'Winter Driving and Severe Weather',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Winter Weather Driving
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Following distance:</strong> Increase to 8-10 seconds on snow and ice
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Braking technique:</strong> Pump brakes gently to prevent wheel lockup on non-ABS vehicles
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Acceleration:</strong> Gradual acceleration to prevent wheel spin
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Steering adjustments:</strong> Smooth, gradual steering movements
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
              Blizzard and Severe Weather Conditions
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Blizzard preparation:</strong> Keep emergency kit with blankets, food, water, flashlight
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Whiteout conditions:</strong> Pull over and wait - don't try to drive blind
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Vehicle winterization:</strong> Snow tires or chains, antifreeze, ice scraper
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Fuel considerations:</strong> Keep tank at least half full to prevent line freezing
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Travel advisories:</strong> Heed weather warnings and road closure information
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Carbon monoxide danger:</strong> Never run engine in enclosed or snow-blocked areas
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Spring and Summer Weather Challenges
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Severe thunderstorms:</strong> High winds and hail common in spring/summer
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Tornado awareness:</strong> Know warning signs and safe stopping procedures
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Flash flooding:</strong> Don't drive through standing water on rural roads
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>High winds:</strong> Especially dangerous for high-profile vehicles
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Dust storms:</strong> Reduce speed and use low beam headlights
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Rural Roads & Special Vehicles': {
    icon: Mountain,
    sections: [
      {
        title: 'Sharing Rural Roads Safely',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Agricultural and Farm Equipment
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Farm vehicle awareness:</strong> Large, slow-moving agricultural equipment common on rural roads
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>SMV triangle:</strong> Orange slow-moving vehicle triangle indicates equipment traveling under 25 mph
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Passing farm equipment:</strong> Wait for safe opportunity, signal early, pass quickly
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Width awareness:</strong> Farm equipment may be wider than normal traffic lanes
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Harvest season caution:</strong> Increased farm vehicle activity during planting and harvest
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Muddy roads:</strong> Farm vehicles may leave mud or debris on roadway
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Wildlife and Animal Crossings
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Deer crossings:</strong> Most active at dawn and dusk, especially in fall
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Large game awareness:</strong> Elk, antelope, and other large animals in western South Dakota
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Livestock on roads:</strong> Cattle may graze near or cross roadways in ranch areas
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>If collision imminent:</strong> Don't swerve - brake firmly and aim straight
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Wildlife warning signs:</strong> Pay attention to deer crossing and animal warning signs
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Report collisions:</strong> Notify law enforcement of vehicle-animal accidents
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Motorcycles and Other Road Users
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Motorcycle awareness:</strong> Harder to see, judge speed and distance
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Sturgis Rally awareness:</strong> Heavy motorcycle traffic during rally season
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Full lane rights:</strong> Motorcycles entitled to full use of traffic lane
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>School buses:</strong> Stop when red lights flash on undivided roads
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Commercial vehicles:</strong> Large trucks need extra room for turns and stopping
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Recreational vehicles:</strong> ATVs and snowmobiles may cross roadways
              </li>
            </ul>
          </div>
        `
      }
    ]
  }
}