import { Target, AlertTriangle, Info, CheckCircle, Snowflake, Mountain } from 'lucide-react'

export const alaskaRevisionContent = {
  'Alaska Traffic Laws & Legal Requirements': {
    icon: Target,
    sections: [
      {
        title: 'Speed Limits and Traffic Control',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Alaska Speed Limits
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>School zones:</strong> 20 mph when children present or signs are flashing
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Most Alaska roadways:</strong> 55 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Residential areas:</strong> 25 mph (unless posted otherwise)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Business districts:</strong> 25 mph
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Right-of-Way Rules
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Four-way stops:</strong> First vehicle to arrive goes first; if arriving simultaneously, vehicle on right has right-of-way
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Uncontrolled intersections:</strong> Vehicle on the right always has right-of-way
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Left turns:</strong> Must yield to oncoming traffic and pedestrians in all situations
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Emergency vehicles:</strong> Pull to the right and stop completely until they pass
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Pedestrians:</strong> Always have right-of-way in crosswalks, marked or unmarked
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
              Alaska Insurance Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Minimum property damage coverage:</strong> $25,000
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>License suspension for no insurance:</strong> 90 days minimum
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Proof of insurance required after crash:</strong> Within 15 days if damage ≥ $501
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Unattended vehicle accidents:</strong> Must leave written notice with name, address, and circumstances
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Point System and Violations
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>License suspension:</strong> 12 or more points in 12 months (or 18 points in 24 months)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Reckless driving:</strong> Can result in license suspension or revocation
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Repeated violations:</strong> Multiple motor vehicle law violations lead to suspension
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Vehicle Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>License plates:</strong> Single plate on rear with current tabs and illumination
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Seat belts:</strong> Required for all occupants; driver responsible for passengers under 16
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Exhaust system:</strong> Must be leak-free to prevent carbon monoxide poisoning
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
        title: 'Alaska DUI Laws and Consequences',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              DUI Penalties and Facts
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>First DUI conviction minimum jail time:</strong> 3 days mandatory
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>License revocation:</strong> Minimum 90 days for DUI conviction
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Alaska alcohol statistics:</strong> Close to 45% of traffic fatalities involve alcohol
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Administrative penalties:</strong> Separate from criminal penalties
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Chemical Test Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Implied consent:</strong> By driving, you automatically consent to chemical testing
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Test refusal consequences:</strong> Automatic license revocation + 10 points added
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>No exceptions:</strong> Refusal has automatic penalties regardless of guilt
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Types of tests:</strong> Blood, breath, or urine as requested by officer
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Impairment Beyond Alcohol
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Illegal drugs:</strong> Any amount can result in DUI charges
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Prescription medications:</strong> Can impair driving even when legally prescribed
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Over-the-counter medicines:</strong> Cold remedies and other OTC drugs can cause impairment
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Combined substances:</strong> Alcohol + any other drug intensifies impairment effects
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
                <strong>Driveway:</strong> Cannot block access
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Bicycle lanes:</strong> Parking prohibited
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Hill Parking Procedures
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Uphill with curb:</strong> Turn wheels AWAY from curb (toward traffic)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Downhill with curb:</strong> Turn wheels TOWARD curb (away from traffic)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>No curb present:</strong> Turn wheels toward shoulder/edge of road
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Always:</strong> Set parking brake on any incline
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Parallel Parking Steps
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Step 1:</strong> Find space 6 feet longer than your vehicle
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Step 2:</strong> Pull alongside front car, mirrors aligned
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Step 3:</strong> Reverse with wheel turned right until 45° angle
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Step 4:</strong> Straighten wheel and continue backing
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Step 5:</strong> Turn wheel left to straighten in space
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
                <strong>Get off roadway:</strong> Move as far right as safely possible
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Hazard flashers:</strong> Turn on immediately to warn others
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Hood up:</strong> Raise hood to signal mechanical trouble
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Stay visible:</strong> Remain near vehicle but away from traffic
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Call for help:</strong> Use emergency services or roadside assistance
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Accident Scene Protocol
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>If not involved:</strong> Keep moving, don't stop to look
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>If emergency help present:</strong> Continue driving, stay focused
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Don't stop in traffic:</strong> Avoid blocking lanes unnecessarily
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Emergency lane use:</strong> Only for genuine emergencies
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
                <strong>Ideal conditions:</strong> 4-second rule minimum
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Poor weather conditions:</strong> Increase to 6+ seconds
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Behind large vehicles:</strong> Extra space needed for visibility
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Following motorcycles:</strong> Give full lane width and extra distance
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Passing Safety Procedures
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Signal distance:</strong> At least 100 feet before changing lanes
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Check blind spots:</strong> Look over shoulder before moving
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Return to lane:</strong> When you can see both headlights in rearview mirror
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Passing bicyclists:</strong> Allow at least 3 feet clearance and watch for sudden swerves
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Defensive Driving Principles
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Stay alert:</strong> Scan road constantly, check mirrors every 5-8 seconds
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Anticipate hazards:</strong> Watch for potential problems from other drivers
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Communicate intentions:</strong> Use signals, lights, and horn appropriately
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Never assume:</strong> Don't trust other drivers to follow traffic laws
              </li>
            </ul>
          </div>
        `
      },
      {
        title: 'Distracted and Aggressive Driving',
        content: `
          <h3>Avoiding Distractions</h3>
          <ul>
            <li><strong>Cell phone use:</strong> Increases crash risk significantly - avoid handheld and hands-free when possible</li>
            <li><strong>Smoking while driving:</strong> Takes hands off wheel and eyes off road</li>
            <li><strong>Highway hypnosis:</strong> Caused by staring straight ahead - actively scan the road</li>
            <li><strong>Fatigue management:</strong> Take breaks every 2 hours on long trips</li>
          </ul>
          
          <h3>Dealing with Aggressive Drivers</h3>
          <ul>
            <li><strong>If cut off:</strong> Stay calm and move out of their way</li>
            <li><strong>Don't retaliate:</strong> Avoid eye contact and confrontation</li>
            <li><strong>Give space:</strong> Let aggressive drivers pass safely</li>
            <li><strong>Report dangerous behavior:</strong> Call police if necessary</li>
          </ul>
        `
      },
      {
        title: 'Special Situations and Emergency Response',
        content: `
          <h3>Railroad Crossings</h3>
          <ul>
            <li><strong>Stop distance:</strong> At least 15 feet from nearest rail when signals activate</li>
            <li><strong>Approach procedure:</strong> Look, listen, slow down, and be prepared to stop</li>
            <li><strong>Never:</strong> Drive around lowered gates or race a train</li>
            <li><strong>Multiple tracks:</strong> Watch for second train after first one passes</li>
          </ul>
          
          <h3>Emergency Vehicle Response</h3>
          <ul>
            <li><strong>Pull right and stop:</strong> Move as far right as possible and stop completely</li>
            <li><strong>Don't block intersections:</strong> Pull past intersection before stopping</li>
            <li><strong>Resume driving:</strong> Only after emergency vehicle completely passes</li>
          </ul>
          
          <h3>Vehicle System Failures</h3>
          <ul>
            <li><strong>Brake failure:</strong> Pump brakes on non-ABS vehicles to prevent wheel lockup</li>
            <li><strong>Power steering failure:</strong> Grip wheel firmly, slow down gradually</li>
            <li><strong>Tire blowout:</strong> Hold steering wheel steady, gradual slowdown</li>
            <li><strong>Wheels off pavement:</strong> Slow down, don't brake hard, steer back carefully</li>
          </ul>
        `
      }
    ]
  },
  'Alaska Winter & Weather Driving': {
    icon: Snowflake,
    sections: [
      {
        title: 'Winter Driving Conditions',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Ice and Snow Driving
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Following distance:</strong> Increase to 8-10 seconds on snow/ice
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Braking technique:</strong> Pump brakes gently on non-ABS vehicles to prevent lockup
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Acceleration:</strong> Gradual acceleration to prevent wheel spin
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Steering:</strong> Smooth, gentle steering movements
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Speed reduction:</strong> Slow down significantly below posted limits
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Poor Weather Visibility
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Fog driving:</strong> Use low beam headlights, not high beams
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Rain conditions:</strong> First 30 minutes are most dangerous due to oil/dirt mix
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Windshield maintenance:</strong> Keep clean for maximum visibility
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Headlight use:</strong> Turn on headlights in any reduced visibility
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Vehicle Preparation
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Tire tread:</strong> Adequate tread essential for control and stopping
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Cruise control:</strong> Never use on slippery roads
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Emergency kit:</strong> Extra clothing, food, water for Alaska conditions
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Special Road Users & Situations': {
    icon: Mountain,
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
                <strong>Motorcycles:</strong> Harder to see and judge speed/distance
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Full lane rights:</strong> Motorcycles entitled to full lane width
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Bicycle passing:</strong> Allow minimum 3 feet clearance
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Watch for swerving:</strong> Cyclists may swerve to avoid road hazards
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Pedestrian Safety
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Always yield:</strong> Drivers must yield to pedestrians even if they're crossing illegally
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Crosswalk rules:</strong> Pedestrians have right-of-way in marked and unmarked crosswalks
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Don't enter crosswalk:</strong> If vehicles approaching too closely to stop safely
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>School zones:</strong> Extra caution around children
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Large Vehicles and Trucks
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Blind spots:</strong> Trucks have large blind spots on sides and rear
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Following trucks:</strong> Stay back to maintain visibility
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Passing trucks:</strong> Complete pass quickly and safely
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Turning radius:</strong> Give trucks extra room to turn
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Wildlife Awareness (Alaska-Specific)
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Moose encounters:</strong> Common in Alaska - slow down and give wide berth
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Dawn/dusk activity:</strong> Wildlife most active during these times
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Collision response:</strong> Don't swerve - brake firmly and aim straight
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Rural roads:</strong> Always scan for animal crossings
              </li>
            </ul>
          </div>
        `
      }
    ]
  }
}