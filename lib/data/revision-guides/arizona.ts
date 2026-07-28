import { Target, AlertTriangle, Info, CheckCircle, Snowflake, Mountain } from 'lucide-react'

export const arizonaRevisionContent = {
  'Arizona Traffic Laws & Legal Requirements': {
    icon: Target,
    sections: [
      {
        title: 'Speed Limits and Traffic Control',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Arizona Speed Limits
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>School zones:</strong> 15 mph when children present or signs are posted
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Residential areas:</strong> 25 mph (unless posted otherwise)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Business districts:</strong> 25 mph
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Rural highways:</strong> 65 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Interstate highways:</strong> 75 mph (some rural sections 80 mph)
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
              Arizona Insurance Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Minimum liability coverage:</strong> $25,000 per person, $50,000 per accident for bodily injury
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Property damage coverage:</strong> $15,000 minimum
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Uninsured motorist coverage:</strong> Not required but recommended
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>License suspension:</strong> Immediate suspension for driving without insurance
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Point System and Violations
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>License suspension:</strong> 8 or more points in 12 months
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Aggressive driving:</strong> 8 points and possible license suspension
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Speeding violations:</strong> 3-8 points depending on speed over limit
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Following too closely:</strong> 4 points
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Vehicle Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>License plates:</strong> Single rear plate required with current registration
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Seat belts:</strong> Required for all occupants; driver responsible for passengers under 16
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Child restraints:</strong> Required for children under 8 or under 4'9" tall
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Emissions testing:</strong> Required in Phoenix and Tucson metro areas
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
        title: 'Arizona DUI Laws and Consequences',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              DUI Penalties and Facts
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>First DUI conviction:</strong> Minimum 10 days jail, $1,250+ fine, 90-day license suspension
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>BAC limits:</strong> 0.08% for adults, 0.00% for drivers under 21
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Extreme DUI:</strong> 0.15% BAC or higher results in enhanced penalties (30 days jail minimum)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Super Extreme DUI:</strong> 0.20% BAC or higher (45 days jail minimum)
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
                <strong>Test refusal consequences:</strong> 12-month license suspension (first offense)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Repeat refusal:</strong> 2-year license suspension for subsequent refusals
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Types of tests:</strong> Blood, breath, or urine as requested by officer
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Arizona-Specific DUI Laws
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Ignition interlock device:</strong> Required for all DUI convictions, even first offense
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Tent City jail:</strong> Some DUI sentences served in outdoor jail facilities
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Drug impairment:</strong> DUI includes impairment by any substance, including prescription drugs
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>No plea bargaining:</strong> Arizona law prohibits plea bargaining for DUI charges
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
                <strong>Curb painted red:</strong> No parking zones clearly marked
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
                <strong>Always:</strong> Set parking brake on any incline - critical in mountainous areas
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Arizona Parking Regulations
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Phoenix downtown:</strong> Metered parking and time restrictions
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Scottsdale/Tempe:</strong> Strict parking enforcement in downtown areas
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Desert parking:</strong> Park in shade when possible to protect vehicle
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Handicapped spaces:</strong> $150-$300 fine for illegal parking
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
              Desert Breakdown Response
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Get off roadway:</strong> Move as far right as safely possible
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Hazard flashers:</strong> Turn on immediately to warn others
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Stay hydrated:</strong> Keep water in vehicle - dehydration occurs rapidly in desert heat
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Seek shade:</strong> Stay in vehicle with A/C or find shade outside
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Call for help:</strong> Dial 911 or *DPS (*377) for Arizona Department of Public Safety
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Accident Scene Protocol
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Move to safety:</strong> Get vehicles out of traffic if possible and safe
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Check for injuries:</strong> Call 911 if anyone is hurt
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Heat considerations:</strong> Provide shade and water for injured persons
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Police report required:</strong> For accidents with injury, death, or $1,000+ damage
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
                <strong>Ideal conditions:</strong> 3-second rule minimum
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Dust storms:</strong> Increase to 6+ seconds during haboobs and dust storms
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Poor visibility:</strong> Increase distance when visibility is reduced
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Behind large vehicles:</strong> Extra space needed for visibility
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
                <strong>Passing bicyclists:</strong> Allow at least 3 feet clearance by Arizona law
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Cell Phone and Distraction Laws
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Texting ban:</strong> No texting while driving for all drivers
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Local ordinances:</strong> Some cities have stricter cell phone laws
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Hands-free recommended:</strong> Adult drivers may use hands-free devices
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Emergency exceptions:</strong> May use phone to report emergencies
              </li>
            </ul>
          </div>
        `
      },
      {
        title: 'Arizona-Specific Driving Challenges',
        content: `
          <h3>Desert Driving Considerations</h3>
          <ul>
            <li><strong>Dust storms (haboobs):</strong> Sudden zero-visibility conditions - pull off road and wait</li>
            <li><strong>Extreme heat:</strong> Check tire pressure and engine cooling regularly</li>
            <li><strong>Sun glare:</strong> Intense sun requires quality sunglasses and sun visors</li>
            <li><strong>Flash floods:</strong> Desert washes can flood rapidly - never drive through water</li>
          </ul>
          
          <h3>Urban Arizona Driving</h3>
          <ul>
            <li><strong>Grid system:</strong> Phoenix metro uses numbered streets running north-south</li>
            <li><strong>Rush hour heat:</strong> Traffic delays magnified by extreme temperatures</li>
            <li><strong>Snowbird season:</strong> Heavy winter visitor traffic October-April</li>
            <li><strong>Construction zones:</strong> Frequent road work due to rapid growth</li>
          </ul>
        `
      }
    ]
  },
  'Arizona Desert & Weather Driving': {
    icon: Snowflake,
    sections: [
      {
        title: 'Extreme Heat and Desert Conditions',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Extreme Heat Driving
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Summer temperatures:</strong> Often exceed 115°F (46°C) in Phoenix area
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Tire blowouts:</strong> Hot pavement increases risk - check tire condition regularly
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Engine overheating:</strong> Monitor temperature gauge and coolant levels
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Air conditioning:</strong> Essential for safety - have system serviced regularly
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Dust Storms and Visibility
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Haboobs:</strong> Massive dust storms can reduce visibility to zero
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Pull aside rule:</strong> "Pull Aside, Stay Alive" - get off roadway during dust storms
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Turn off lights:</strong> Don't leave lights on when parked - others may follow them
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Wait it out:</strong> Most dust storms pass within 15-30 minutes
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Monsoon Season Driving
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Monsoon season:</strong> July-September brings sudden severe thunderstorms
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Flash flooding:</strong> Desert washes and low-lying areas flood rapidly
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Stupid Motorist Law:</strong> Arizona charges rescue costs if you drive into flood waters
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Hydroplaning:</strong> First rain after dry period makes roads extra slippery
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
        title: 'Sharing Arizona Roads',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Mountain and Rural Driving
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Mountain grades:</strong> Steep climbs and descents in northern Arizona
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Elevation changes:</strong> Flagstaff area at 7,000 feet vs. Phoenix at 1,100 feet
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Runaway truck ramps:</strong> Use designated ramps if brakes fail on grades
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Tourist traffic:</strong> Heavy RV traffic to Grand Canyon and other attractions
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              School Zones and Vulnerable Users
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>School zone speed:</strong> 15 mph when children present
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>School bus stopping:</strong> Must stop when red lights flash and stop arm extends
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Bicycle safety:</strong> 3-foot passing law strictly enforced
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Vulnerable User Law:</strong> Enhanced penalties for injuring pedestrians or cyclists
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Wildlife and Desert Hazards
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Javelinas:</strong> Wild pigs common in suburban desert areas
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Desert bighorn sheep:</strong> Protected species on mountain highways
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Coyotes:</strong> Most active at dawn and dusk
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Elk and deer:</strong> Common in northern Arizona forests
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Emergency Response Laws
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Move Over Law:</strong> Change lanes away from stopped emergency vehicles
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Reduce speed:</strong> If unable to move over, slow down significantly
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Tow trucks included:</strong> Law applies to tow trucks and highway maintenance
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>DPS enforcement:</strong> Arizona Department of Public Safety strictly enforces Move Over Law
              </li>
            </ul>
          </div>
        `
      }
    ]
  }
}