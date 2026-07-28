import { Target, AlertTriangle, Info, CheckCircle, TreePine, Building } from 'lucide-react'

export const northcarolinaRevisionContent = {
  'North Carolina Traffic Laws & Legal Requirements': {
    icon: Target,
    sections: [
      {
        title: 'Speed Limits and Traffic Control',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              North Carolina Speed Limits
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>School zones:</strong> 25 mph when children present or signs posted
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Residential areas:</strong> 35 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Business districts:</strong> 35 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Rural highways:</strong> 55 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Interstate highways:</strong> 70 mph (some areas up to 75-80 mph)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Work zones:</strong> Posted reduced speeds, enhanced penalties for violations
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              North Carolina Right-of-Way Rules
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
              North Carolina Insurance Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Minimum liability coverage:</strong> 30/60/25 ($30K bodily injury per person, $60K per accident, $25K property damage)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Uninsured motorist:</strong> $30K/$60K coverage required
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>License plate surrender:</strong> Must surrender plates if insurance lapses
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Civil penalty:</strong> $50 fee for lapse in coverage plus restoration fee
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              North Carolina Point System
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>License suspension:</strong> 12 points in 3 years triggers suspension
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Point values:</strong> Most violations = 2-4 points, serious offenses = 5 points
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Point reduction:</strong> 3 points removed for completing driver improvement clinic
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Safe driving:</strong> Points reduced over time with no additional violations
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              North Carolina Vehicle Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>License plates:</strong> Rear plate required; front plate not required
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Seat belts:</strong> Required for all occupants, primary enforcement
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Child restraints:</strong> Required until age 8 and under 80 pounds
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Annual inspection:</strong> Safety inspection required; emissions in certain counties
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'North Carolina DWI Laws & Penalties': {
    icon: AlertTriangle,
    sections: [
      {
        title: 'North Carolina DWI Laws and Consequences',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              DWI Penalties and BAC Limits
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Adult BAC limit:</strong> 0.08% or higher (NC calls it DWI)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Under 21 BAC limit:</strong> 0.00% (zero tolerance - any detectable alcohol)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Commercial drivers:</strong> 0.04% or higher
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>First DWI penalties:</strong> 24 hours to 60 days jail, $200+ fine, 1-year license revocation
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
                <strong>Test refusal:</strong> 1 year license revocation for first refusal
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Administrative action:</strong> Automatic revocation separate from court case
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Breath test priority:</strong> Officer typically requests breath test
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              North Carolina-Specific DWI Laws
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Safe sentencing:</strong> Structured sentencing based on aggravating/mitigating factors
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Ignition interlock:</strong> Required for repeat offenders and high BAC cases
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Open container law:</strong> No open alcohol containers in vehicle passenger area
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Habitual DWI:</strong> Felony charge for 3+ DWI convictions in 7 years
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'North Carolina Parking & Traffic Violations': {
    icon: Info,
    sections: [
      {
        title: 'Parking Rules and Traffic Enforcement',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              North Carolina Parking Distances
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
              Urban North Carolina Parking
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Charlotte uptown:</strong> Meter enforcement and time-limited zones
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Raleigh downtown:</strong> Paid parking and permit zones near state government
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>University areas:</strong> Permit parking near UNC, NC State, Duke campuses
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Beach communities:</strong> Seasonal parking restrictions in coastal areas
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Traffic Violations and Fines
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Speeding fines:</strong> $25+ for 5-15 mph over, court costs additional
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Cell phone use:</strong> $25+ fine for texting while driving (plus court costs)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Move over law:</strong> Change lanes or slow down for emergency vehicles
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Seat belt violations:</strong> $25.50 fine plus court costs
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'North Carolina Safe Driving Practices': {
    icon: CheckCircle,
    sections: [
      {
        title: 'Defensive Driving in North Carolina',
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
                <strong>Heavy traffic:</strong> Increase distance in Charlotte, Raleigh-Durham metro areas
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
              North Carolina Highway Driving
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>I-95 corridor:</strong> Heavy north-south traffic, aggressive drivers
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>I-77 through Charlotte:</strong> Major congestion during rush hours
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>I-40 east-west:</strong> Connects major cities across state
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Keep right law:</strong> Use right lanes except when passing
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Sharing the Road in North Carolina
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
  'North Carolina Regional Driving': {
    icon: TreePine,
    sections: [
      {
        title: 'North Carolina Geographic Challenges',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Mountain Region Driving
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Blue Ridge Parkway:</strong> Scenic route with curves, elevation changes, 45 mph limit
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Steep grades:</strong> Use lower gears on mountain descents
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Weather changes:</strong> Mountain weather can change rapidly
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Tourist traffic:</strong> Heavy seasonal traffic to Asheville and mountain resorts
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Coastal Plain Challenges
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Hurricane evacuations:</strong> Know evacuation routes during hurricane season
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Beach traffic:</strong> Heavy summer congestion to Outer Banks and coast
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Ferry crossings:</strong> Vehicle ferries to Outer Banks islands
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Flooding areas:</strong> Low-lying areas prone to storm flooding
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Piedmont Region Features
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Urban growth:</strong> Rapid development in Charlotte and Triangle areas
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Construction zones:</strong> Frequent road construction due to growth
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>University traffic:</strong> Student traffic near UNC, Duke, NC State
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>NASCAR events:</strong> Heavy traffic during races at Charlotte Motor Speedway
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'North Carolina Weather & Seasonal Driving': {
    icon: Building,
    sections: [
      {
        title: 'Weather-Related Driving Challenges',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Hurricane and Storm Season
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Hurricane season:</strong> June 1 - November 30, peak August-October
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Evacuation procedures:</strong> Know designated evacuation routes
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Flooding risks:</strong> Never drive through flooded roads
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Severe thunderstorms:</strong> Can produce tornadoes and damaging winds
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Winter Weather Conditions
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Ice storms:</strong> Freezing rain creates dangerous driving conditions
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Snow preparation:</strong> State has limited snow removal equipment
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Mountain winter:</strong> Western NC gets more snow and ice
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Black ice:</strong> Forms on bridges and overpasses first
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Fog and Visibility Issues
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Morning fog:</strong> Common in valleys and near water bodies
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Coastal fog:</strong> Marine layer affects visibility near coast
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Headlight use:</strong> Required when visibility is reduced
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Speed reduction:</strong> Slow down significantly in fog conditions
              </li>
            </ul>
          </div>
        `
      }
    ]
  }
}