import { Target, AlertTriangle, Info, CheckCircle, Snowflake, Mountain } from 'lucide-react'

export const arkansasRevisionContent = {
  'Arkansas Traffic Laws & Legal Requirements': {
    icon: Target,
    sections: [
      {
        title: 'Speed Limits and Traffic Control',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Arkansas Speed Limits
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>School zones:</strong> 25 mph when children present or signs are posted
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Residential areas:</strong> 30 mph (unless posted otherwise)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Business districts:</strong> 30 mph
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Rural highways:</strong> 55-65 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Interstate highways:</strong> 70-75 mph (some sections 80 mph)
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
              Arkansas Insurance Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Minimum liability coverage:</strong> $25,000 per person, $50,000 per accident for bodily injury
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Property damage coverage:</strong> $25,000 minimum
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Uninsured motorist coverage:</strong> Required at same limits as liability coverage
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
                <strong>License suspension:</strong> 14 or more points in 36 months
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Reckless driving:</strong> 8 points and possible license suspension
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
                <strong>Seat belts:</strong> Required for all occupants; driver responsible for passengers under 15
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Child restraints:</strong> Required for children under 6 or under 60 pounds
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Vehicle inspection:</strong> Annual safety inspection required
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
        title: 'Arkansas DWI Laws and Consequences',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              DWI Penalties and Facts
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>First DWI conviction:</strong> $150-$1,000 fine, up to 1 year jail, 6-month license suspension
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>BAC limit:</strong> 0.08% for adults, 0.02% for drivers under 21
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Aggravated DWI:</strong> 0.15% BAC or higher results in enhanced penalties
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Administrative License Action:</strong> Immediate suspension upon arrest
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
                <strong>Test refusal consequences:</strong> 6-month license suspension (first offense)
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
              Arkansas-Specific DWI Laws
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Ignition interlock device:</strong> Required for repeat offenders and some first offenses
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Habitual offender law:</strong> Three DWI convictions result in habitual offender status
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Drug impairment:</strong> DWI includes impairment by any controlled substance
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Open container law:</strong> No open alcoholic beverages in passenger area of vehicle
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
                <strong>Crosswalk:</strong> 25 feet from marked crosswalk
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Stop sign/traffic light:</strong> 30 feet minimum distance
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Driveway:</strong> Cannot block access
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Railroad crossing:</strong> 50 feet from nearest rail
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
              Arkansas Parking Regulations
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Little Rock downtown:</strong> Metered parking and time restrictions
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>University areas:</strong> Permit parking near U of A, ASU, UCA campuses
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Handicapped spaces:</strong> $100-$200 fine for illegal parking
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>State park areas:</strong> Special parking regulations at tourist destinations
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
                <strong>Emergency triangles:</strong> Place 100-200 feet behind vehicle if available
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Weather considerations:</strong> Be prepared for sudden weather changes
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Call for help:</strong> Dial 911 or *ASP (*277) for Arkansas State Police
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
                <strong>Exchange information:</strong> Names, insurance, license numbers, and photos
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
                <strong>Poor weather conditions:</strong> Increase to 4-6 seconds
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
                <strong>Passing bicyclists:</strong> Allow at least 3 feet clearance when passing
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
                <strong>Under 18 restrictions:</strong> No cell phone use while driving for minors
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Hands-free allowed:</strong> Adult drivers may use hands-free devices
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Emergency exceptions:</strong> May use phone to report emergencies
              </li>
            </ul>
          </div>
        `
      },
      {
        title: 'Arkansas-Specific Driving Challenges',
        content: `
          <h3>Rural and Mountain Driving</h3>
          <ul>
            <li><strong>Ozark Mountains:</strong> Winding roads with steep grades in northwest Arkansas</li>
            <li><strong>Ouachita Mountains:</strong> Scenic but challenging mountain roads in west-central Arkansas</li>
            <li><strong>Farm equipment:</strong> Agricultural vehicles common during planting and harvest seasons</li>
            <li><strong>Logging trucks:</strong> Heavy timber trucks in forested areas</li>
          </ul>
          
          <h3>River and Delta Driving</h3>
          <ul>
            <li><strong>Arkansas River crossings:</strong> Multiple bridges with potential for high winds</li>
            <li><strong>Mississippi River Delta:</strong> Flat terrain with potential for flooding</li>
            <li><strong>Rice field areas:</strong> Agricultural traffic and seasonal flooding</li>
            <li><strong>Casino areas:</strong> Heavy traffic near gaming establishments</li>
          </ul>
        `
      }
    ]
  },
  'Arkansas Weather & Seasonal Driving': {
    icon: Snowflake,
    sections: [
      {
        title: 'Severe Weather and Seasonal Conditions',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Tornado and Severe Weather
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Tornado Alley:</strong> Arkansas experiences frequent tornadoes March-June
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Severe thunderstorms:</strong> Heavy rain, hail, and strong winds common
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Flash flooding:</strong> Low-lying areas and creeks flood rapidly
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Weather awareness:</strong> Monitor weather radio and alerts while driving
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Winter Weather Conditions
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Ice storms:</strong> Freezing rain creates extremely dangerous driving conditions
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Snow in mountains:</strong> Northern Arkansas gets more snow than southern areas
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Limited snow removal:</strong> State has minimal snow/ice removal equipment
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Black ice:</strong> Bridge surfaces and overpasses freeze first
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Summer Weather Driving
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>High humidity:</strong> Hot, humid summers create fatigue and discomfort
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Afternoon thunderstorms:</strong> Frequent severe storms develop rapidly
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Heat exhaustion:</strong> Stay hydrated and maintain air conditioning
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Tire pressure:</strong> Check regularly as heat affects tire pressure
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
        title: 'Sharing Arkansas Roads',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Agricultural and Commercial Vehicles
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Farm equipment:</strong> Rice, soybean, and cotton equipment on rural roads
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Logging trucks:</strong> Heavy timber trucks in forested areas
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Poultry trucks:</strong> Large trucks serving chicken processing facilities
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Oversized loads:</strong> Industrial equipment serving manufacturing facilities
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              School Zones and Buses
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>School bus stopping:</strong> Must stop when red lights flash and stop arm extends
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>All directions stop:</strong> Traffic in both directions must stop on undivided roads
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>School zone speed:</strong> 25 mph when children present
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Enhanced penalties:</strong> Fines increased for violations in school zones
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Emergency Response and Move Over Law
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
                <strong>Emergency response:</strong> Pull right and stop for approaching emergency vehicles
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Wildlife and Environmental Hazards
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>White-tailed deer:</strong> Most active at dawn and dusk, especially during hunting season
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Wild hogs:</strong> Feral hogs may cross roads in rural areas
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Black bears:</strong> Occasionally seen crossing roads in mountainous areas
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Flooding areas:</strong> Never drive through flooded roads - "Turn Around, Don't Drown"
              </li>
            </ul>
          </div>
        `
      }
    ]
  }
}