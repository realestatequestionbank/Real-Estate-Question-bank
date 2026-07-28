import { Target, AlertTriangle, Info, CheckCircle, MapPin, Building } from 'lucide-react'

export const marylandRevisionContent = {
  'Maryland Traffic Laws & Legal Requirements': {
    icon: Target,
    sections: [
      {
        title: 'Speed Limits and Traffic Control',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Maryland Speed Limits
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>School zones:</strong> 15 mph when children present or signs flashing
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Residential areas:</strong> 25 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Business districts:</strong> 30 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Rural highways:</strong> 55 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Interstate highways:</strong> 65-70 mph (some areas up to 75 mph)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Work zones:</strong> Posted reduced speeds, enhanced penalties
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Maryland Right-of-Way Rules
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
                <strong>Roundabouts:</strong> Yield to traffic already in the circle
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
              Maryland Insurance Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Minimum liability coverage:</strong> 30/60/15 ($30K bodily injury per person, $60K per accident, $15K property damage)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Personal injury protection (PIP):</strong> $2,500 minimum coverage required
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Uninsured motorist:</strong> $30K/$60K coverage required
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>License suspension:</strong> Immediate suspension for driving without insurance
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Maryland Point System
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>License suspension:</strong> 8-11 points may result in suspension
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Point values:</strong> Most violations = 3-5 points, serious offenses = 8-12 points
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Point reduction:</strong> 3 points removed for completing driver improvement program
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Safe driving:</strong> 1 point removed for each year with no violations
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Maryland Vehicle Requirements
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
                <strong>Emissions testing:</strong> Required in Baltimore and Washington DC metro areas
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Maryland DWI/DUI Laws & Penalties': {
    icon: AlertTriangle,
    sections: [
      {
        title: 'Maryland DWI/DUI Laws and Consequences',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              DWI/DUI Penalties and BAC Limits
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>DUI (0.08% BAC):</strong> Up to 1 year jail, $1,000 fine, 6-month license suspension
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>DWI (0.07% BAC):</strong> Lesser charge, up to 2 months jail, $500 fine
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Under 21 BAC limit:</strong> 0.02% or higher
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Commercial drivers:</strong> 0.04% or higher
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
                <strong>Test refusal:</strong> 270 days license suspension for first refusal
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
              Maryland-Specific DUI Laws
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Noah's Law:</strong> Ignition interlock required for all DUI convictions
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Repeat offender penalties:</strong> Increasingly severe penalties for subsequent offenses
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Open container law:</strong> No open alcohol containers in vehicle passenger area
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Look-back period:</strong> 5 years for determining repeat offenses
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Maryland Parking & Traffic Violations': {
    icon: Info,
    sections: [
      {
        title: 'Parking Rules and Traffic Enforcement',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Maryland Parking Distances
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Fire hydrant:</strong> 15 feet minimum distance
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Crosswalk:</strong> 25 feet from crosswalk at intersection
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Stop sign:</strong> 30 feet from stop sign
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Driveway:</strong> 5 feet from public or private driveway
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Bus stop:</strong> 30 feet from bus stop sign
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Baltimore/DC Metro Parking Rules
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Meter enforcement:</strong> Strictly enforced in Baltimore and urban areas
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Resident parking permits:</strong> Required in many Baltimore neighborhoods
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Snow emergency routes:</strong> No parking during declared snow emergencies
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Street cleaning:</strong> Temporary restrictions during street cleaning
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Traffic Violations and Fines
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Speeding fines:</strong> $40+ for 1-9 mph over, increases significantly
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Cell phone use:</strong> $83+ fine for handheld device while driving
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Red light cameras:</strong> $75 fine, no points assessed
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Speed cameras:</strong> $40+ fine in school zones and work zones
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Maryland Safe Driving Practices': {
    icon: CheckCircle,
    sections: [
      {
        title: 'Defensive Driving in Maryland',
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
                <strong>Heavy traffic:</strong> Increase distance due to DC/Baltimore metro congestion
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Large vehicles:</strong> Extra space for trucks and buses
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Weather conditions:</strong> Adjust distance for rain, snow, or fog
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Maryland Highway Driving
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>I-95 corridor:</strong> Heavy traffic, aggressive drivers, frequent lane changes
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Beltway (I-495/I-695):</strong> Complex interchanges, plan route in advance
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>HOV lanes:</strong> 2+ occupants required during posted hours
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Express lanes:</strong> Toll lanes with variable pricing
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Sharing the Road in Maryland
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Bicyclists:</strong> Must give 3+ feet clearance when passing
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Pedestrians:</strong> High pedestrian traffic in urban areas
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Emergency vehicles:</strong> Move over law for stopped emergency vehicles
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>School zones:</strong> Speed cameras and enhanced enforcement
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Maryland Regional Driving': {
    icon: MapPin,
    sections: [
      {
        title: 'Maryland Geographic Challenges',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Chesapeake Bay Area
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Bay Bridge:</strong> I-95 bridge with height restrictions and wind advisories
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Tunnel crossings:</strong> Baltimore Harbor and Fort McHenry tunnels
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Maritime weather:</strong> Fog and sudden weather changes
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Tourist traffic:</strong> Heavy summer traffic to Ocean City and beaches
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Mountain Region Driving
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Western Maryland:</strong> Steep grades in Appalachian Mountains
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>I-70/I-68 corridor:</strong> Elevation changes and truck traffic
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Weather variations:</strong> Snow more common in western counties
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Runaway truck ramps:</strong> Emergency escape routes on steep grades
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Eastern Shore Characteristics
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Rural highways:</strong> Two-lane roads with farm equipment
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Waterfowl crossings:</strong> Wildlife migration areas
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Beach traffic:</strong> Seasonal congestion to resort areas
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Limited access points:</strong> Few bridges connecting to mainland
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Maryland Urban Driving': {
    icon: Building,
    sections: [
      {
        title: 'DC Metro and Baltimore Driving',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Washington DC Metro Area
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Rush hour traffic:</strong> Severe congestion during peak hours
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>HOV restrictions:</strong> I-95, I-395, and I-270 HOV lanes
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Federal workers:</strong> Predictable traffic patterns around government
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Diplomatic vehicles:</strong> Special license plates have diplomatic immunity
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Baltimore City Challenges
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>One-way streets:</strong> Complex downtown street pattern
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Row house neighborhoods:</strong> Narrow streets, parallel parking
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Port traffic:</strong> Heavy truck traffic near harbor
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Sports events:</strong> Camden Yards and M&T Bank Stadium traffic
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Traffic Enforcement Technology
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Speed cameras:</strong> Automated enforcement in school and work zones
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Red light cameras:</strong> Intersection enforcement with mailed citations
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Electronic toll collection:</strong> E-ZPass required for express lanes
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Variable message signs:</strong> Real-time traffic and weather updates
              </li>
            </ul>
          </div>
        `
      }
    ]
  }
}