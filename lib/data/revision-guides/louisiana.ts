import { Target, AlertTriangle, Info, CheckCircle, Sun, MapPin } from 'lucide-react'

export const louisianaRevisionContent = {
  'Louisiana Traffic Laws & Legal Requirements': {
    icon: Target,
    sections: [
      {
        title: 'Speed Limits and Traffic Control',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Louisiana Speed Limits
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>School zones:</strong> 20 mph when children present or signs are flashing
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Residential areas:</strong> 25 mph (unless posted otherwise)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Business districts:</strong> 25 mph
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Rural highways:</strong> 55 mph (unless posted otherwise)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Interstate highways:</strong> 70-80 mph (varies by section and vehicle type)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Trucks/buses:</strong> 55 mph on interstates, regardless of posted car speed limit
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Right-of-Way Rules
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Four-way stops:</strong> First vehicle to arrive goes first; if simultaneous arrival, vehicle on right has right-of-way
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Uncontrolled intersections:</strong> Vehicle on the right always has right-of-way
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Left turns:</strong> Must yield to oncoming traffic and pedestrians in crosswalks
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Emergency vehicles:</strong> Move to right and stop completely until they pass
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Pedestrians:</strong> Always have right-of-way in marked crosswalks
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>School buses:</strong> Stop when red lights flash, even on divided highways in Louisiana
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
              Louisiana Insurance Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Minimum liability coverage:</strong> $15,000 bodily injury per person, $30,000 per accident, $25,000 property damage
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Proof requirement:</strong> Must carry valid proof of insurance at all times
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>No insurance penalties:</strong> License suspension, fines, and SR-22 filing requirement
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Accident reporting:</strong> Must report accidents with injury or property damage over $1,000
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Point System and Violations
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>License suspension:</strong> 12 or more points in 12-month period
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Speeding violations:</strong> 2-8 points depending on speed over limit
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Reckless driving:</strong> 6 points plus potential license suspension
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Following too closely:</strong> 3 points
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Failure to yield:</strong> 4 points
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Point reduction:</strong> 3 points removed for each year of violation-free driving
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Vehicle Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>License plates:</strong> Single plate on rear with current registration sticker
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Seat belts:</strong> Required for all occupants; driver responsible for passengers under 13
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Child restraints:</strong> Required for children under 9 or under 4'9" tall
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Vehicle inspection:</strong> Annual safety inspection required
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Window tinting:</strong> Must allow 40% light transmission on front windows
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
        title: 'Louisiana DWI Laws and Consequences',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              DWI Penalties and Facts
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Legal limit:</strong> 0.08% BAC for drivers 21 and over, 0.02% for under 21
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>First DWI offense:</strong> 90-day license suspension, $300-$1,000 fine, possible jail time
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Second DWI within 10 years:</strong> 2-year license suspension, $750-$1,000 fine, mandatory jail time
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Administrative suspension:</strong> Immediate 90-day suspension for BAC 0.08% or higher
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Ignition interlock:</strong> Required for repeat offenders and high BAC cases
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Zero tolerance:</strong> Any detectable alcohol for drivers under 21 results in penalties
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Chemical Testing and Implied Consent
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Implied consent law:</strong> Operating a motor vehicle implies consent to chemical testing
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Test refusal penalty:</strong> 180-day license suspension on first refusal
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Second refusal:</strong> 2-year license suspension
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Test types:</strong> Blood, breath, or urine as requested by officer
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Refusal consequences:</strong> Separate from and in addition to any criminal penalties
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Drug and Prescription Impairment
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Illegal drugs:</strong> Any detectable amount can result in DWI charges
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Prescription medications:</strong> Legal use doesn't prevent DWI if impaired
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Over-the-counter drugs:</strong> Can cause impairment and result in DWI
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Combination effects:</strong> Alcohol + any drug significantly increases impairment
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Louisiana law:</strong> Impairment by any substance is illegal while driving
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
                <strong>Crosswalk:</strong> 20 feet from marked or unmarked crosswalk
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Stop sign/traffic signal:</strong> 30 feet minimum distance
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Driveway:</strong> Cannot block access to public or private driveways
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Curb painting:</strong> Red curb means no parking/stopping at any time
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Double parking:</strong> Prohibited on all Louisiana roadways
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
                <strong>No curb present:</strong> Turn wheels toward shoulder/edge of road
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Parking brake:</strong> Always engage on any grade or incline
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Transmission position:</strong> Park (automatic) or first gear (manual)
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Parallel Parking Guidelines
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Space size needed:</strong> At least 6 feet longer than your vehicle
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Initial alignment:</strong> Pull alongside front vehicle, mirrors aligned
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Backing technique:</strong> Turn wheel fully right, reverse at 45-degree angle
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Straightening:</strong> When rear bumper clears front car, straighten wheel
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Final position:</strong> Turn wheel left to center in space
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Curb distance:</strong> No more than 18 inches from curb
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
              Roadside Emergency Response
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Move off roadway:</strong> Get as far right as safely possible
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Hazard flashers:</strong> Turn on immediately to warn approaching traffic
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Hood signal:</strong> Raise hood to indicate mechanical trouble
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Stay visible:</strong> Remain near vehicle but away from traffic lanes
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Call for help:</strong> Use cell phone to contact police or roadside assistance
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Louisiana heat:</strong> Stay hydrated and seek shade when possible
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Accident Scene Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Stop obligation:</strong> Must stop if involved in any accident
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Information exchange:</strong> Provide name, address, license, registration, and insurance
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Police notification:</strong> Call 911 for accidents with injury or significant damage
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Move vehicles:</strong> Move to side of road if vehicles are driveable and no injuries
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Written report:</strong> File accident report within 30 days if damage exceeds $1,000
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
                <strong>Basic rule:</strong> 3-second minimum following distance in good conditions
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Poor weather:</strong> Increase to 4-6 seconds in rain or reduced visibility
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Heavy traffic:</strong> Maintain safe distance even when traffic is slow
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Large vehicles:</strong> Extra space needed behind trucks and buses
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Night driving:</strong> Increase distance due to reduced visibility
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Lane Changes and Passing Safety
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Signal timing:</strong> Signal at least 100 feet before changing lanes
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Check blind spots:</strong> Turn head to check over shoulder before moving
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Safe return:</strong> Can see both headlights of passed vehicle in mirror
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>No passing zones:</strong> Solid yellow line, curves, hills, intersections
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Passing on right:</strong> Only legal when left-turning vehicle blocks left lane
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Defensive Driving Techniques
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Constant awareness:</strong> Scan road constantly, check mirrors every 5-8 seconds
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Anticipate hazards:</strong> Watch for potential problems from other drivers
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Communicate intentions:</strong> Use signals, lights, and horn appropriately
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Never assume:</strong> Don't expect other drivers to follow traffic rules
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Maintain escape routes:</strong> Always have an out in case of emergencies
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
              Louisiana Distracted Driving Laws
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Texting ban:</strong> No text messaging while driving for all drivers
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Cell phone restrictions:</strong> Handheld phone use prohibited for drivers under 18
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>School zone restrictions:</strong> No handheld devices in school zones
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Emergency exception:</strong> Cell phone use allowed to report emergencies
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Penalties:</strong> Fines and potential license points for violations
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Managing Road Rage and Aggressive Drivers
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Stay calm:</strong> Don't take aggressive driving personally
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Avoid confrontation:</strong> No eye contact, gestures, or retaliation
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Give space:</strong> Let aggressive drivers pass safely
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Don't engage:</strong> Avoid blocking, honking, or racing
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Report dangerous behavior:</strong> Call *LSP (*577) to report aggressive drivers
              </li>
            </ul>
          </div>
        `
      },
      {
        title: 'Emergency Situations and System Failures',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Vehicle System Failures
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Brake failure:</strong> Pump brakes rapidly, use parking brake, downshift, look for safe stop
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Steering failure:</strong> Grip wheel firmly, ease off accelerator, brake gently
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Tire blowout:</strong> Hold steering steady, ease off gas, brake gradually when stable
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Engine failure:</strong> Move to right shoulder, turn on hazards, exit carefully
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Off-road recovery:</strong> Slow down, don't brake hard, steer gently back to road
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
                <strong>Intersection response:</strong> Don't stop in intersection - clear it first
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Highway procedure:</strong> Move to right shoulder when safe to do so
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
  'Louisiana Weather & Environmental Driving': {
    icon: Sun,
    sections: [
      {
        title: 'Heavy Rain and Hurricane Season Driving',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Rain and Wet Weather Driving
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Following distance:</strong> Double normal following distance on wet roads
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>First 30 minutes:</strong> Most dangerous time due to oil and debris mixing with water
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Hydroplaning prevention:</strong> Reduce speed, avoid sudden steering or braking
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Tire tread importance:</strong> Adequate tread essential for water displacement
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Headlight use:</strong> Turn on headlights whenever wipers are in use
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Flooded roads:</strong> Never drive through standing water - turn around, don't drown
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Hurricane and Severe Weather Preparations
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Evacuation planning:</strong> Know evacuation routes and follow official orders
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Emergency kit:</strong> Keep water, food, first aid, flashlight, radio in vehicle
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Fuel preparedness:</strong> Keep gas tank full during hurricane season
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Weather monitoring:</strong> Stay informed through radio, TV, or weather apps
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Avoid unnecessary travel:</strong> Stay off roads during severe weather warnings
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Fog and Low Visibility Conditions
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Light usage:</strong> Use low beam headlights, never high beams in fog
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Speed reduction:</strong> Slow down significantly for visibility conditions
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Reference points:</strong> Use road markings and right edge as guides
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Windshield maintenance:</strong> Keep windshield clean inside and outside
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Pull over option:</strong> If visibility is severely limited, pull over safely and wait
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Special Road Users & Louisiana-Specific Situations': {
    icon: MapPin,
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
                <strong>Motorcycle awareness:</strong> Harder to see and judge distance/speed
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Full lane rights:</strong> Motorcycles entitled to full use of traffic lane
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Three-foot rule:</strong> Give bicyclists minimum 3 feet clearance when passing
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Bicycle lane respect:</strong> Don't drive or park in designated bike lanes
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Door zone awareness:</strong> Check for cyclists before opening car doors
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Pedestrian Safety and Laws
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Crosswalk priority:</strong> Pedestrians have right-of-way in marked crosswalks
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>School zones:</strong> Extra caution around children - unpredictable behavior
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Intersection courtesy:</strong> Yield to pedestrians even if jaywalking
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Blind pedestrians:</strong> White cane or guide dog indicates visual impairment
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Crosswalk blocking:</strong> Don't stop vehicle in crosswalk area
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Commercial Vehicles and School Buses
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Truck blind spots:</strong> Large vehicles have extensive blind spots
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>No zone awareness:</strong> Avoid following too closely behind trucks
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Passing trucks:</strong> Pass quickly but safely, signal early and often
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>School bus law:</strong> Stop for red flashing lights, even on divided highways in Louisiana
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Loading/unloading:</strong> Remain stopped until children clear roadway and lights turn off
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Louisiana-Specific Driving Situations
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Bridge and overpass driving:</strong> Watch for strong crosswinds on Louisiana's many bridges
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Construction zones:</strong> Common due to road maintenance - reduce speed and merge safely
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Rural road awareness:</strong> Watch for farm equipment and slower-moving vehicles
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Tourist area caution:</strong> Expect unfamiliar drivers in New Orleans and tourist destinations
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Oil industry vehicles:</strong> Large trucks and equipment common on Louisiana roads
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Drawbridge procedures:</strong> Stop when signals activate - do not attempt to cross
              </li>
            </ul>
          </div>
        `
      }
    ]
  }
}