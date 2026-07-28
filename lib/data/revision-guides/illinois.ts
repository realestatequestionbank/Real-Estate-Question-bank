import { Target, AlertTriangle, Info, CheckCircle, Snowflake, Building } from 'lucide-react'

export const illinoisRevisionContent = {
  'Illinois Traffic Laws & Legal Requirements': {
    icon: Target,
    sections: [
      {
        title: 'Speed Limits and Traffic Control',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Illinois Speed Limits
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>School zones:</strong> 20 mph when children present or signs flashing
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
                <strong>Interstate highways:</strong> 70 mph (55 mph in Cook County)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Construction zones:</strong> Posted reduced speeds, enhanced penalties
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Illinois Right-of-Way Rules
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
              Illinois Insurance Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Minimum liability coverage:</strong> 25/50/20 ($25K bodily injury per person, $50K per accident, $20K property damage)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Uninsured motorist:</strong> $25K/$50K coverage required
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>License suspension:</strong> Immediate suspension for driving without insurance
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>SR-22 filing:</strong> Required for serious violations and license reinstatement
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Illinois Violation System
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Moving violations:</strong> Based on severity rather than point system
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>License suspension:</strong> Based on number and type of violations
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Traffic safety school:</strong> May prevent violations from affecting license
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Supervision option:</strong> Court supervision available for some violations
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Illinois Vehicle Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>License plates:</strong> Front and rear plates required
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Seat belts:</strong> Required for all occupants, primary enforcement
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Child restraints:</strong> Required until age 8
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Emissions testing:</strong> Required in Chicago metro area
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Illinois DUI Laws & Penalties': {
    icon: AlertTriangle,
    sections: [
      {
        title: 'Illinois DUI Laws and Consequences',
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
                <strong>Under 21 BAC limit:</strong> 0.00% (zero tolerance)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Commercial drivers:</strong> 0.04% or higher
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>First DUI penalties:</strong> Up to 1 year jail, $2,500 fine, 1-year license suspension
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
                <strong>Breath test priority:</strong> Officer typically requests breath test
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Illinois-Specific DUI Laws
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Aggravated DUI:</strong> Enhanced penalties for high BAC, accident, or child in vehicle
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>BAIID device:</strong> Breath Alcohol Ignition Interlock Device required for many offenders
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Open container law:</strong> No open alcohol containers in vehicle passenger area
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>DUI education:</strong> Required alcohol/drug evaluation and treatment
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Illinois Parking & Traffic Violations': {
    icon: Info,
    sections: [
      {
        title: 'Parking Rules and Traffic Enforcement',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Illinois Parking Distances
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
                <strong>Bus stop:</strong> 30 feet from CTA bus stop sign
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Chicago Parking Challenges
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Residential permit parking:</strong> Required in many Chicago neighborhoods
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Street cleaning:</strong> Temporary restrictions during street cleaning
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Snow route parking:</strong> No parking during snow emergencies
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Rush hour restrictions:</strong> No parking on major streets during peak hours
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Traffic Violations and Fines
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Speeding fines:</strong> $120+ for 1-20 mph over in Chicago, varies by jurisdiction
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Cell phone use:</strong> $75+ fine for handheld device while driving
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Red light cameras:</strong> $100 fine in Chicago for red light violations
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Speed cameras:</strong> Automated enforcement in Chicago parks and school zones
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Illinois Safe Driving Practices': {
    icon: CheckCircle,
    sections: [
      {
        title: 'Defensive Driving in Illinois',
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
                <strong>Chicago traffic:</strong> Increase distance due to aggressive driving and congestion
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Winter conditions:</strong> Increase to 6+ seconds on snow and ice
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Large vehicles:</strong> Extra space for trucks and farm equipment
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Illinois Highway Driving
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>I-94/Dan Ryan:</strong> Major north-south route through Chicago, heavy congestion
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>I-290/Eisenhower:</strong> East-west expressway, frequent construction
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>I-294 tollway:</strong> Tri-State Tollway bypass around Chicago
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Keep right law:</strong> Use right lanes except when passing
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Sharing the Road in Illinois
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Farm equipment:</strong> Agricultural vehicles common in central and southern Illinois
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Bicyclists:</strong> Must give 3+ feet clearance when passing
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>CTA buses/trains:</strong> Yield to Chicago Transit Authority vehicles
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Emergency vehicles:</strong> Scott's Law requires moving over for stopped emergency vehicles
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Illinois Winter Driving': {
    icon: Snowflake,
    sections: [
      {
        title: 'Winter Weather Driving',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Illinois Winter Conditions
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Lake effect snow:</strong> Heavy snow near Lake Michigan affects Chicago area
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Blizzard conditions:</strong> High winds and blowing snow reduce visibility
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Ice storms:</strong> Freezing rain creates dangerous driving conditions
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Temperature drops:</strong> Rapid temperature changes cause black ice
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Winter Driving Techniques
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Snow tires recommended:</strong> Better traction than all-season tires
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Gentle inputs:</strong> Gradual acceleration, braking, and steering
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Vehicle preparation:</strong> Clear all snow and ice from vehicle
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Emergency kit:</strong> Blankets, food, water, flashlight, shovel
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Chicago Winter Challenges
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Lake Shore Drive:</strong> Exposed to lake winds, frequent closures during storms
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Parking restrictions:</strong> Snow route parking bans during snow emergencies
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Dibs system:</strong> Unofficial practice of saving parking spaces after shoveling
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Public transit:</strong> CTA may experience delays during severe weather
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Illinois Urban Driving': {
    icon: Building,
    sections: [
      {
        title: 'Chicago and Urban Driving Challenges',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Chicago Loop and Downtown
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Grid system:</strong> Numbered streets with State and Madison as baselines
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>One-way streets:</strong> Many downtown streets are one-way only
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>L train bridges:</strong> Watch for low clearances under elevated tracks
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Rush hour restrictions:</strong> No parking/stopping during peak hours
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Illinois Tollway System
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>I-PASS electronic tolling:</strong> Required for many toll lanes
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Open road tolling:</strong> No toll booths, cameras read transponders
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Violation fees:</strong> Expensive penalties for unpaid tolls
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Tri-State Tollway:</strong> Major route around Chicago metro area
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Public Transportation Integration
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>CTA buses:</strong> Share roads with Chicago Transit Authority buses
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Metra crossings:</strong> Commuter rail crosses many roads
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Bus-only lanes:</strong> Restricted lanes during certain hours
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Transit priority:</strong> Traffic signals may favor public transit
              </li>
            </ul>
          </div>
        `
      }
    ]
  }
}