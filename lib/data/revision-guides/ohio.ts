import { Target, AlertTriangle, Info, CheckCircle, CloudSnow, Building } from 'lucide-react'

export const ohioRevisionContent = {
  'Ohio Traffic Laws & Legal Requirements': {
    icon: Target,
    sections: [
      {
        title: 'Speed Limits and Traffic Control',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Ohio Speed Limits
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>School zones:</strong> 20 mph when children present or signs flashing
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Residential areas:</strong> 25 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Business districts:</strong> 25 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Rural highways:</strong> 55 mph on two-lane roads
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Interstate highways:</strong> 70 mph (some areas 65 mph in urban zones)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Construction zones:</strong> Posted reduced speeds, enhanced penalties
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Ohio Right-of-Way Rules
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Four-way stops:</strong> First to stop proceeds first; simultaneous arrival yields to right
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Pedestrians:</strong> Must yield in all crosswalks, marked or unmarked
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Emergency vehicles:</strong> Pull to right and stop completely
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>School buses:</strong> Stop when red lights flash on both sides of undivided road
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Funeral processions:</strong> Must yield right-of-way to entire procession
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
              Ohio Insurance Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Minimum liability coverage:</strong> 25/50/25 ($25K bodily injury per person, $50K per accident, $25K property damage)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>License suspension:</strong> Immediate suspension for driving without insurance
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Random verification:</strong> Ohio can randomly verify your insurance coverage
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>SR-22 filing:</strong> Required for serious violations and reinstatement
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Ohio Point System
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>License suspension:</strong> 12 points in 24 months triggers suspension
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Point values:</strong> Most violations = 2-4 points, serious offenses = 6 points
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Point reduction:</strong> 2 points removed for completing remedial driving course
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Clean record:</strong> Points removed after 2 years with no violations
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Ohio Vehicle Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>License plates:</strong> Front and rear plates required
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Seat belts:</strong> Required for all occupants, primary enforcement
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Child restraints:</strong> Required until age 8 or 4'9" tall
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Emissions testing:</strong> Required in certain counties (Cuyahoga, Lake, etc.)
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Ohio OVI Laws & Penalties': {
    icon: AlertTriangle,
    sections: [
      {
        title: 'Ohio OVI Laws and Consequences',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              OVI Penalties and BAC Limits
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Adult BAC limit:</strong> 0.08% or higher (Ohio calls it OVI, not DUI)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Under 21 BAC limit:</strong> 0.02% or higher
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Commercial drivers:</strong> 0.04% or higher
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>First OVI penalties:</strong> 3 days to 6 months jail, $375-1,075 fine, 1-year license suspension
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Implied Consent and Testing
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Implied consent law:</strong> Driving implies consent to chemical testing
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Test refusal:</strong> 1 year license suspension for first refusal
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Administrative suspension:</strong> Automatic suspension separate from court case
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Breath test priority:</strong> Officer typically requests breath test first
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Ohio-Specific OVI Laws
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>High BAC penalty:</strong> 0.17%+ BAC results in enhanced penalties
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Ignition interlock:</strong> Required for all OVI convictions
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Yellow license plates:</strong> Required for restricted driving privileges
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Party plates:</strong> Bright yellow plates identify OVI offenders
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Ohio Parking & Traffic Violations': {
    icon: Info,
    sections: [
      {
        title: 'Parking Rules and Traffic Enforcement',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Ohio Parking Distances
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Fire hydrant:</strong> 10 feet minimum distance
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Crosswalk:</strong> 20 feet from crosswalk at intersection
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Stop sign:</strong> 30 feet from stop sign
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Driveway:</strong> 5 feet from public or private driveway
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Bus stop:</strong> 10 feet from bus stop sign
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Ohio Hill Parking and Procedures
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Uphill parking:</strong> Turn wheels away from curb, set parking brake
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Downhill parking:</strong> Turn wheels toward curb, set parking brake
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Parallel parking:</strong> Must be within 12 inches of curb
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Snow emergency routes:</strong> No parking during declared snow emergencies
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Traffic Violations and Fines
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Speeding fines:</strong> Vary by jurisdiction, work zones have enhanced penalties
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Cell phone use:</strong> $150+ fine for texting while driving
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Move over law:</strong> Change lanes or slow down for emergency vehicles
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Seat belt violations:</strong> $30 fine plus court costs
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Ohio Safe Driving Practices': {
    icon: CheckCircle,
    sections: [
      {
        title: 'Defensive Driving in Ohio',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Following Distance and Space Management
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>3-second rule:</strong> Minimum following distance in ideal conditions
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Poor weather:</strong> Increase to 4-6 seconds in rain or snow
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Large vehicles:</strong> Extra space for trucks and farm equipment
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Motorcycles:</strong> Give full lane width and extra following distance
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Ohio Highway Driving
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Keep right law:</strong> Use right lanes except when passing
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Lane changes:</strong> Signal at least 100 feet before changing lanes
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Construction zones:</strong> Common during summer months, merge early
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Aggressive driving:</strong> Road rage laws carry severe penalties
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Sharing the Road in Ohio
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Bicyclists:</strong> Must give 3+ feet clearance when passing
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Pedestrians:</strong> Always yield right-of-way in crosswalks
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Farm equipment:</strong> Common on rural roads, pass safely when legal
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>School zones:</strong> Enhanced penalties for violations when children present
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Ohio Weather Driving': {
    icon: CloudSnow,
    sections: [
      {
        title: 'Winter and Weather Conditions',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Ohio Winter Driving
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Snow tire recommendation:</strong> Not required but highly recommended
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Following distance:</strong> Increase to 6+ seconds on snow/ice
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Black ice:</strong> Common on bridges and overpasses
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Snow removal:</strong> Clear all snow from vehicle before driving
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Seasonal Driving Challenges
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Lake effect snow:</strong> Heavy snow near Lake Erie
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Freeze-thaw cycles:</strong> Create potholes and road damage
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Fog conditions:</strong> Common in valleys and near rivers
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Spring flooding:</strong> Watch for flooded low-lying roads
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Vehicle Maintenance for Ohio Weather
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Battery testing:</strong> Cold weather reduces battery capacity
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Tire tread:</strong> Adequate tread essential for wet/snow traction
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Windshield washer fluid:</strong> Use winter formula to prevent freezing
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Emergency kit:</strong> Include blanket, water, and emergency supplies
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Ohio Urban & Rural Driving': {
    icon: Building,
    sections: [
      {
        title: 'Ohio Regional Driving Challenges',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Major Ohio Cities
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Columbus traffic:</strong> I-270 outerbelt congestion, downtown construction
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Cleveland challenges:</strong> Lake effect weather, industrial traffic
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Cincinnati hills:</strong> Steep grades, bridge crossings to Kentucky
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Toledo port area:</strong> Heavy truck traffic, railroad crossings
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Rural Ohio Driving
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Farm equipment:</strong> Slow-moving tractors and combines on rural roads
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Amish buggies:</strong> Horse-drawn vehicles in certain counties
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Wildlife crossings:</strong> Deer common, especially at dawn and dusk
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Covered bridges:</strong> Weight and height restrictions on historic bridges
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Ohio Interstate System
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Ohio Turnpike:</strong> Toll road across northern Ohio, E-ZPass accepted
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>I-75 corridor:</strong> Major north-south route, heavy truck traffic
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>I-70 east-west:</strong> Connects major cities, construction common
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Rest areas:</strong> Available every 30-40 miles on interstates
              </li>
            </ul>
          </div>
        `
      }
    ]
  }
}