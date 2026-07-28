import { Target, AlertTriangle, Info, CheckCircle, Mountain, Building } from 'lucide-react'

export const tennesseeRevisionContent = {
  'Tennessee Traffic Laws & Legal Requirements': {
    icon: Target,
    sections: [
      {
        title: 'Speed Limits and Traffic Control',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Tennessee Speed Limits
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>School zones:</strong> 15 mph when children present or signs posted
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Residential areas:</strong> 30 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Business districts:</strong> 30 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Rural highways:</strong> 55 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Interstate highways:</strong> 70 mph (some areas up to 80 mph)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Work zones:</strong> Posted reduced speeds, enhanced penalties
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Tennessee Right-of-Way Rules
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
              Tennessee Insurance Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Minimum liability coverage:</strong> 25/50/15 ($25K bodily injury per person, $50K per accident, $15K property damage)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>License suspension:</strong> Immediate suspension for driving without insurance
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>SR-22 filing:</strong> Required for serious violations and license reinstatement
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Financial responsibility law:</strong> Must show proof of insurance after any violation
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Tennessee Point System
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>License suspension:</strong> 12 points in 12 months triggers suspension
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Point values:</strong> Most violations = 1-6 points, serious offenses = 8 points
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Point reduction:</strong> 3 points removed for completing state-approved driving course
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Safe driving:</strong> 1 year without violations removes all points
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Tennessee Vehicle Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>License plates:</strong> Rear plate required; front plate not required
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Seat belts:</strong> Required for front seat occupants and passengers under 16
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Child restraints:</strong> Required until age 9 or 4'9" tall
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Emissions testing:</strong> Required in Davidson, Hamilton, Knox, Rutherford, Williamson counties
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Tennessee DUI Laws & Penalties': {
    icon: AlertTriangle,
    sections: [
      {
        title: 'Tennessee DUI Laws and Consequences',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              DUI Penalties and BAC Limits
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Adult BAC limit:</strong> 0.08% or higher
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Under 21 BAC limit:</strong> 0.02% or higher
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Commercial drivers:</strong> 0.04% or higher
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>First DUI penalties:</strong> 48 hours to 1 year jail, $350-1,500 fine, 1-year license revocation
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
                <strong>Administrative action:</strong> Automatic suspension separate from court case
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Breath test priority:</strong> Officer typically requests breath test first
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Tennessee-Specific DUI Laws
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Vehicular assault:</strong> Felony charge for DUI causing serious bodily injury
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Ignition interlock:</strong> Required for repeat offenders and some first-time offenders
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>24/7 sobriety program:</strong> Continuous alcohol monitoring for repeat offenders
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Open container law:</strong> No open alcohol containers in vehicle passenger area
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Tennessee Parking & Traffic Violations': {
    icon: Info,
    sections: [
      {
        title: 'Parking Rules and Traffic Enforcement',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Tennessee Parking Distances
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Fire hydrant:</strong> 15 feet minimum distance
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
                <strong>Railroad crossing:</strong> 50 feet from nearest rail
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Urban Tennessee Parking
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Nashville downtown:</strong> Meter enforcement and time restrictions
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Memphis Beale Street:</strong> Special event parking restrictions
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>University areas:</strong> Permit parking near UT, Vanderbilt, Memphis campuses
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Sports venues:</strong> Special restrictions during Titans, Predators, Grizzlies games
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Traffic Violations and Fines
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Speeding fines:</strong> $50+ for 1-15 mph over, increases with speed
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Cell phone use:</strong> $50+ fine for texting while driving
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
  'Tennessee Safe Driving Practices': {
    icon: CheckCircle,
    sections: [
      {
        title: 'Defensive Driving in Tennessee',
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
                <strong>Nashville traffic:</strong> Increase distance due to rapid growth and congestion
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Weather conditions:</strong> Adjust distance for rain, fog, or icy conditions
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Large vehicles:</strong> Extra space for trucks and farm equipment
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Tennessee Highway Driving
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>I-40 corridor:</strong> Major east-west route across entire state
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>I-75 through Knoxville:</strong> Heavy truck traffic, mountain terrain
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>I-65 through Nashville:</strong> Major congestion during rush hours
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Keep right law:</strong> Use right lanes except when passing
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Sharing the Road in Tennessee
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Farm equipment:</strong> Agricultural vehicles common in rural areas
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Bicyclists:</strong> Must give 3+ feet clearance when passing
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Pedestrians:</strong> Always yield right-of-way in crosswalks
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Emergency vehicles:</strong> Move over law strictly enforced
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Tennessee Mountain Driving': {
    icon: Mountain,
    sections: [
      {
        title: 'East Tennessee Mountain Challenges',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Appalachian Mountain Driving
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Steep grades:</strong> Use lower gears on mountain descents to avoid brake overheating
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Curves and visibility:</strong> Reduce speed on winding mountain roads
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Weather changes:</strong> Mountain weather can change rapidly with elevation
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Runaway truck ramps:</strong> Emergency escape routes for vehicles with brake failure
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Great Smoky Mountains Region
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Tourist traffic:</strong> Heavy congestion to Gatlinburg and Pigeon Forge
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Newfound Gap Road:</strong> US-441 through national park, elevation changes
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Wildlife encounters:</strong> Bears, deer, and other animals on mountain roads
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Fog conditions:</strong> "Smokies" known for frequent fog and low visibility
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Winter Mountain Driving
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Ice on bridges:</strong> Bridges and overpasses freeze before roadways
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Chain requirements:</strong> Carry tire chains during winter months
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Road closures:</strong> Mountain roads may close during severe winter weather
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Emergency supplies:</strong> Carry blankets, food, water, and flashlight
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Tennessee Regional Driving': {
    icon: Building,
    sections: [
      {
        title: 'Tennessee Geographic Features',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Middle Tennessee Features
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Nashville growth:</strong> Rapid population growth causing frequent construction
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Music industry traffic:</strong> Concert venues and events cause congestion
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Interstate interchange:</strong> Complex I-40/I-65/I-24 system through Nashville
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Cumberland River bridges:</strong> Multiple river crossings affect traffic flow
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              West Tennessee Characteristics
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Mississippi River crossings:</strong> I-40 and I-55 bridges to Arkansas
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Memphis traffic:</strong> Major freight hub with heavy truck traffic
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Agricultural areas:</strong> Farm equipment and crop transportation
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Flooding potential:</strong> River bottoms prone to seasonal flooding
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Tennessee Valley and Lakes
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>TVA lakes:</strong> Recreational traffic to numerous lakes and dams
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Boat trailers:</strong> Heavy recreational vehicle traffic on weekends
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Dam construction zones:</strong> Ongoing maintenance at hydroelectric facilities
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Seasonal tourism:</strong> Fall foliage brings increased visitor traffic
              </li>
            </ul>
          </div>
        `
      }
    ]
  }
}