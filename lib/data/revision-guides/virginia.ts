import { Target, AlertTriangle, Info, CheckCircle, Building, TreePine } from 'lucide-react'

export const virginiaRevisionContent = {
  'Virginia Traffic Laws & Legal Requirements': {
    icon: Target,
    sections: [
      {
        title: 'Speed Limits and Traffic Control',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Virginia Speed Limits
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>School zones:</strong> 25 mph when children present or signs posted
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Residential areas:</strong> 25 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Business districts:</strong> 25 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Rural highways:</strong> 55 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Interstate highways:</strong> 70 mph (some areas up to 80 mph)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Reckless driving:</strong> 20+ mph over limit or 80+ mph regardless of limit
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Virginia Right-of-Way Rules
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
              Virginia Insurance Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Minimum liability coverage:</strong> 30/60/20 ($30K bodily injury per person, $60K per accident, $20K property damage)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Uninsured motorist:</strong> $30K/$60K coverage required
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>License suspension:</strong> Immediate suspension for driving without insurance
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Proof of insurance:</strong> Must carry valid proof at all times
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Virginia Real Estate Point System
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>License suspension:</strong> 18 points in 12 months or 24 points in 24 months
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Point values:</strong> Most violations = 3-4 points, serious offenses = 6 points
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Point reduction:</strong> 5 points removed for completing driver improvement clinic
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Safe driving:</strong> 1 point removed for each year without violations
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Virginia Vehicle Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>License plates:</strong> Rear plate required; front plate not required
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Seat belts:</strong> Required for all occupants, primary enforcement
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Child restraints:</strong> Required until age 8
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Annual inspection:</strong> Safety inspection required; emissions in Northern Virginia area
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Virginia DUI Laws & Penalties': {
    icon: AlertTriangle,
    sections: [
      {
        title: 'Virginia DUI Laws and Consequences',
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
                <strong>First DUI penalties:</strong> Up to 1 year jail, $250-2,500 fine, 1-year license suspension
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
                <strong>Test refusal:</strong> 1 year license suspension for first refusal (civil penalty)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Administrative action:</strong> Automatic suspension separate from court case
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Blood test option:</strong> Officer may request blood test in certain circumstances
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Virginia-Specific DUI Laws
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>ASAP program:</strong> Alcohol Safety Action Program required for offenders
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Ignition interlock:</strong> Required for repeat offenders and some first-time offenders
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Restricted license:</strong> May be available during suspension for work/medical needs
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
  'Virginia Parking & Traffic Violations': {
    icon: Info,
    sections: [
      {
        title: 'Parking Rules and Traffic Enforcement',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Virginia Parking Distances
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Fire hydrant:</strong> 15 feet minimum distance
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Crosswalk:</strong> 15 feet from crosswalk at intersection
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Stop sign:</strong> 30 feet from stop sign or traffic signal
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
              Northern Virginia Parking Challenges
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Arlington/Alexandria:</strong> Strict meter enforcement and residential permit zones
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Metro parking:</strong> WMATA park-and-ride lots, permit requirements
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Federal buildings:</strong> Security restrictions near government facilities
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>University areas:</strong> Permit parking near UVA, VCU, Virginia Tech
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Traffic Violations and Fines
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Reckless driving:</strong> Criminal misdemeanor for 20+ mph over or 80+ mph
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Cell phone use:</strong> $125+ fine for handheld device while driving
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Move over law:</strong> Change lanes or slow down for emergency vehicles
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Photo enforcement:</strong> Red light cameras and speed cameras in certain areas
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Virginia Safe Driving Practices': {
    icon: CheckCircle,
    sections: [
      {
        title: 'Defensive Driving in Virginia',
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
                <strong>Northern VA traffic:</strong> Increase distance due to heavy congestion and aggressive driving
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Weather conditions:</strong> Adjust distance for rain, fog, or icy conditions
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Large vehicles:</strong> Extra space for trucks and government vehicles
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Virginia Highway Driving
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>I-95 corridor:</strong> Major north-south route, heavy traffic and aggressive drivers
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>I-495 Beltway:</strong> DC area beltway, notorious for congestion and lane changes
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>I-64 east-west:</strong> Connects Norfolk to Charlottesville and beyond
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>HOV/HOT lanes:</strong> High Occupancy Vehicle lanes with enforcement and tolls
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Sharing the Road in Virginia
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Farm equipment:</strong> Agricultural vehicles common in rural Shenandoah Valley
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Bicyclists:</strong> Must give 3+ feet clearance when passing
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Government vehicles:</strong> Federal, state, and military vehicles throughout state
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
  'Virginia Regional Driving': {
    icon: TreePine,
    sections: [
      {
        title: 'Virginia Geographic Challenges',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Blue Ridge Mountains and Shenandoah Valley
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Skyline Drive:</strong> Scenic 105-mile route with 35 mph limit, curves, and elevation changes
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Blue Ridge Parkway:</strong> Connects to North Carolina, similar driving challenges
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Mountain weather:</strong> Fog, ice, and snow more common at higher elevations
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Tourist traffic:</strong> Heavy seasonal congestion during fall foliage
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Coastal Virginia (Tidewater)
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Hampton Roads Bridge-Tunnel:</strong> Major bottleneck, weather-related closures
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Norfolk Naval Base:</strong> Heavy military traffic and security considerations
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Chesapeake Bay Bridge-Tunnel:</strong> 17.6-mile span, crosswind restrictions
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Beach traffic:</strong> Heavy summer congestion to Virginia Beach area
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Central and Southwest Virginia
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Richmond metro:</strong> State capital with government traffic and university areas
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Coal country:</strong> Heavy mining trucks in southwest Virginia mountains
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Appalachian terrain:</strong> Steep grades and winding roads in far southwest
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Rural areas:</strong> Agricultural traffic, especially tobacco and grain transport
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Virginia Urban & Federal Driving': {
    icon: Building,
    sections: [
      {
        title: 'Northern Virginia and Federal Area Challenges',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Washington DC Metropolitan Area
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>I-495 Beltway:</strong> Extreme congestion, aggressive drivers, frequent accidents
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Rush hour intensity:</strong> Some of nation's worst traffic during peak hours
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Federal workers:</strong> Synchronized commute patterns create severe bottlenecks
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Security zones:</strong> Restricted areas near Pentagon, CIA, other federal facilities
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              HOV/HOT Lane System
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>I-95 Express Lanes:</strong> Dynamic toll pricing, 2+ occupancy requirements
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>I-495 Express Lanes:</strong> Outer loop pay-to-use lanes
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Enforcement:</strong> Heavy fines for HOV violations and unpaid tolls
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>E-ZPass required:</strong> Electronic tolling mandatory for express lanes
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Special Events and Congestion
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Cherry Blossom Festival:</strong> Massive spring tourism influx to DC area
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Political events:</strong> Presidential motorcades, protests cause road closures
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Airport traffic:</strong> Dulles and Reagan National create additional congestion
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>University traffic:</strong> UVA, JMU, VCU, George Mason affect local traffic patterns
              </li>
            </ul>
          </div>
        `
      }
    ]
  }
}