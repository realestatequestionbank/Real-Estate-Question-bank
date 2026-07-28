import { Target, AlertTriangle, Info, CheckCircle, Snowflake, Mountain } from 'lucide-react'

export const mississippiRevisionContent = {
  'Mississippi Traffic Laws & Legal Requirements': {
    icon: Target,
    sections: [
      {
        title: 'Speed Limits and Traffic Control',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Mississippi Speed Limits
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>School zones:</strong> 20 mph when children present or signs are posted
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
                <strong>Interstate highways:</strong> 70 mph (some sections 80 mph)
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
              Mississippi Insurance Requirements
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
                <strong>License suspension:</strong> 12 or more points in 24 months
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Reckless driving:</strong> 6 points and possible license suspension
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Speeding violations:</strong> 2-5 points depending on speed over limit
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
                <strong>Seat belts:</strong> Required for all occupants; driver responsible for passengers under 18
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Child restraints:</strong> Required for children under 8 or under 57 inches tall
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
        title: 'Mississippi DUI Laws and Consequences',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              DUI Penalties and Facts
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>First DUI conviction:</strong> $250-$1,000 fine, up to 48 hours jail, 30-day license suspension
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>BAC limit:</strong> 0.08% for adults, 0.02% for drivers under 21
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Enhanced DUI:</strong> 0.16% BAC or higher results in enhanced penalties
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Administrative License Suspension:</strong> Automatic suspension upon arrest
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
                <strong>Test refusal consequences:</strong> 90-day license suspension (first offense)
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
              Mississippi Parking Regulations
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Jackson downtown:</strong> Metered parking and time restrictions
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>University areas:</strong> Permit parking near Ole Miss, MSU, Southern Miss
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Handicapped spaces:</strong> $50-$200 fine for illegal parking
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Casino parking:</strong> Special regulations near gaming establishments
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
                <strong>Stay cool:</strong> Keep water and stay in shade during hot weather
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Call for help:</strong> Dial 911 or *MHP (*647) for Mississippi Highway Patrol
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
                <strong>Police report required:</strong> For accidents with injury, death, or $500+ damage
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
                <strong>Novice driver restrictions:</strong> No cell phone use for first 6 months
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
        title: 'Mississippi-Specific Driving Challenges',
        content: `
          <h3>Rural and Agricultural Roads</h3>
          <ul>
            <li><strong>Farm equipment:</strong> Slow-moving tractors and equipment common during planting/harvest seasons</li>
            <li><strong>Narrow rural roads:</strong> Many roads have limited shoulders and sharp curves</li>
            <li><strong>Logging trucks:</strong> Heavy timber trucks in forested areas</li>
            <li><strong>Cotton and soybean fields:</strong> Agricultural vehicles crossing roads frequently</li>
          </ul>
          
          <h3>River and Delta Driving</h3>
          <ul>
            <li><strong>Mississippi River bridges:</strong> High bridges with crosswinds near Vicksburg and Natchez</li>
            <li><strong>Delta flatlands:</strong> Long straight roads that can cause highway hypnosis</li>
            <li><strong>Flooding concerns:</strong> Low-lying areas prone to flooding during heavy rains</li>
            <li><strong>Casino traffic:</strong> Heavy traffic near riverboat casinos</li>
          </ul>
        `
      }
    ]
  },
  'Mississippi Weather & Seasonal Driving': {
    icon: Snowflake,
    sections: [
      {
        title: 'Hot Weather and Severe Weather Driving',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Hot Weather Driving
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Extreme heat:</strong> Summer temperatures often exceed 95°F with high humidity
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Tire pressure:</strong> Check regularly as heat increases tire pressure
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Engine cooling:</strong> Monitor temperature gauge and coolant levels
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Air conditioning:</strong> Essential for safety and comfort during summer months
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Severe Weather Conditions
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Thunderstorms:</strong> Frequent afternoon and evening storms with heavy rain
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Tornadoes:</strong> Mississippi is in Tornado Alley - seek shelter when warned
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Flash flooding:</strong> Heavy rains can cause rapid flooding in low areas
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Hurricane season:</strong> Coastal areas affected by hurricanes June-November
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Winter Weather Driving
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Ice storms:</strong> Occasional winter ice storms create dangerous conditions
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Freezing rain:</strong> Can make roads extremely slippery
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Limited snow equipment:</strong> State has minimal snow removal equipment
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Black ice:</strong> Bridge surfaces freeze first in cold weather
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
        title: 'Sharing Mississippi Roads',
        content: `
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
                <strong>School zone speed:</strong> 20 mph when children present
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Enhanced penalties:</strong> Fines doubled for violations in school zones
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Agricultural and Commercial Vehicles
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Farm equipment:</strong> Tractors and implements may use public roads
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Logging trucks:</strong> Heavy trucks common in forested areas
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Cotton module movers:</strong> Large agricultural equipment during harvest
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Oversized loads:</strong> Common on highways serving industrial facilities
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
                <strong>Deer crossings:</strong> White-tailed deer most active at dawn and dusk
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Wild hogs:</strong> Feral hogs may cross roads, especially in rural areas
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Alligator crossings:</strong> Rare but possible near wetland areas
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