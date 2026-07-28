import { Target, AlertTriangle, Info, CheckCircle, Snowflake, Mountain } from 'lucide-react'

export const delawareRevisionContent = {
  'Delaware Traffic Laws & Legal Requirements': {
    icon: Target,
    sections: [
      {
        title: 'Speed Limits and Traffic Control',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Delaware Speed Limits
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
                <strong>State highways:</strong> 50-55 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Interstate highways:</strong> 65 mph (I-95 and I-495)
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
              Delaware Insurance Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Minimum liability coverage:</strong> $25,000 per person, $50,000 per accident for bodily injury
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Property damage coverage:</strong> $10,000 minimum
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Personal Injury Protection (PIP):</strong> $15,000 minimum coverage required
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
                <strong>License suspension:</strong> 12 or more points in 24 months (or 14 points total)
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
                <strong>License plates:</strong> Front and rear plates required with current tags
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Seat belts:</strong> Required for all occupants; driver responsible for passengers under 16
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Child restraints:</strong> Required for children under 8 or under 4'9" tall
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Annual inspection:</strong> Safety and emissions inspection required
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
        title: 'Delaware DUI Laws and Consequences',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              DUI Penalties and Facts
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>First DUI conviction:</strong> $500-$1,500 fine, 12-15 months license revocation
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>BAC limit:</strong> 0.08% for adults, 0.02% for drivers under 21
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>High BAC:</strong> 0.15% or higher results in enhanced penalties
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
                <strong>Test refusal consequences:</strong> 12-month license revocation (first offense)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Repeat refusal:</strong> 18-month license revocation for subsequent refusals
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Types of tests:</strong> Blood, breath, or urine as requested by officer
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Delaware-Specific DUI Laws
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Ignition interlock device:</strong> Required for high BAC and repeat offenders
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Alcohol Highway Safety School:</strong> Required education program for DUI offenders
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Assessment and treatment:</strong> Mandatory evaluation for substance abuse
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Open container law:</strong> No open alcoholic beverages in passenger area
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
                <strong>Fire hydrant:</strong> 10 feet minimum distance
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Crosswalk:</strong> 25 feet from marked crosswalk
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Stop sign/traffic light:</strong> 25 feet minimum distance
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Driveway:</strong> Cannot block access
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Bus stops:</strong> 25 feet from bus stop signs
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
              Delaware Parking Regulations
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Wilmington downtown:</strong> Metered parking and strict time limits
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Beach areas:</strong> Seasonal parking restrictions in Rehoboth Beach and Ocean City areas
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>University of Delaware:</strong> Permit parking near campus in Newark
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Handicapped spaces:</strong> $50-$230 fine for illegal parking
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
                <strong>Stay visible:</strong> Use emergency equipment and bright clothing
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Call for help:</strong> Dial 911 or *DSP (*377) for Delaware State Police
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
                <strong>Handheld device ban:</strong> No handheld cell phone use while driving
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Texting ban:</strong> No texting while driving for all drivers
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
        title: 'Delaware-Specific Driving Challenges',
        content: `
          <h3>Interstate Corridor Driving</h3>
          <ul>
            <li><strong>I-95 corridor:</strong> Heavy traffic between Philadelphia and Baltimore</li>
            <li><strong>Delaware Memorial Bridge:</strong> Twin suspension bridges with high winds</li>
            <li><strong>No sales tax shopping:</strong> Heavy traffic at Christiana Mall and outlets</li>
            <li><strong>Construction zones:</strong> Frequent work zones on I-95 and I-495</li>
          </ul>
          
          <h3>Coastal and Rural Considerations</h3>
          <ul>
            <li><strong>Beach traffic:</strong> Seasonal congestion to Delaware beaches</li>
            <li><strong>Agricultural areas:</strong> Farm equipment in rural Sussex County</li>
            <li><strong>Tourist season:</strong> Heavy summer traffic to shore destinations</li>
            <li><strong>Corporate centers:</strong> Rush hour traffic in Wilmington business district</li>
          </ul>
        `
      }
    ]
  },
  'Delaware Weather & Coastal Driving': {
    icon: Snowflake,
    sections: [
      {
        title: 'Coastal Weather and Seasonal Conditions',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Coastal Weather Patterns
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Nor'easter storms:</strong> Can bring heavy snow, ice, and high winds
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Coastal fog:</strong> Dense fog common near Delaware Bay and Atlantic coast
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Hurricane season:</strong> Tropical storms and hurricanes June-November
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Bridge winds:</strong> Delaware Memorial Bridge subject to high crosswinds
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Winter Driving Conditions
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Snow and ice:</strong> Moderate snowfall with occasional ice storms
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Bridge icing:</strong> Bridges and overpasses freeze before road surfaces
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Salt treatment:</strong> Roads are treated but conditions can change rapidly
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Following distance:</strong> Increase to 6+ seconds on snow and ice
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Summer Weather Considerations
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Thunderstorms:</strong> Frequent afternoon and evening storms
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Beach traffic delays:</strong> Heavy congestion during summer weekends
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Heat and humidity:</strong> Ensure air conditioning works properly
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Flash flooding:</strong> Low-lying areas prone to flooding
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
        title: 'Sharing Delaware Roads',
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
              Bicycle and Pedestrian Safety
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>3-foot passing law:</strong> Must allow minimum 3 feet when passing cyclists
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Bicycle lane respect:</strong> Do not drive or park in designated bike lanes
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Pedestrian right-of-way:</strong> Always yield to pedestrians in crosswalks
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Beach area awareness:</strong> Heavy pedestrian and bicycle traffic in coastal areas
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Commercial and Agricultural Vehicles
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>I-95 truck traffic:</strong> Heavy commercial traffic on major interstate corridor
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Farm equipment:</strong> Agricultural vehicles in southern Delaware (Sussex County)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Chemical industry:</strong> Large trucks serving DuPont and chemical facilities
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Poultry trucks:</strong> Large vehicles serving chicken processing plants
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
        `
      }
    ]
  }
}