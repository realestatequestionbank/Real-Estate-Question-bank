import { Target, AlertTriangle, Info, CheckCircle, Mountain, Building } from 'lucide-react'

export const pennsylvaniaRevisionContent = {
  'Pennsylvania Traffic Laws & Legal Requirements': {
    icon: Target,
    sections: [
      {
        title: 'Speed Limits and Traffic Control',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Pennsylvania Speed Limits
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>School zones:</strong> 15 mph when children present or signs flashing
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
                <strong>Interstate highways:</strong> 70 mph (65 mph in urban areas)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Pennsylvania Turnpike:</strong> 70 mph for cars, 65 mph for trucks
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Pennsylvania Right-of-Way Rules
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
              Pennsylvania Insurance Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Minimum liability coverage:</strong> 15/30/5 ($15K bodily injury per person, $30K per accident, $5K property damage)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>First-party benefits:</strong> $5,000 medical benefits coverage required
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Choice no-fault option:</strong> Can choose limited or full tort coverage
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>License suspension:</strong> Immediate suspension for driving without insurance
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Pennsylvania Point System
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>License suspension:</strong> 6 or more points may result in suspension
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Point values:</strong> Most violations = 2-4 points, serious offenses = 5 points
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Point reduction:</strong> 3 points removed for completing point reduction course
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Safe driving:</strong> Points removed if no violations for 12 consecutive months
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Pennsylvania Vehicle Requirements
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
                <strong>Annual inspection:</strong> Safety and emissions inspection required
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Pennsylvania DUI Laws & Penalties': {
    icon: AlertTriangle,
    sections: [
      {
        title: 'Pennsylvania DUI Laws and Consequences',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              DUI Penalties and BAC Tiers
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>General impairment:</strong> 0.08-0.099% BAC, ungraded misdemeanor
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>High BAC:</strong> 0.10-0.159% BAC, enhanced penalties
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Highest BAC:</strong> 0.16%+ BAC, most severe penalties
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Under 21 BAC limit:</strong> 0.02% or higher
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
                <strong>Test refusal:</strong> 12-month license suspension for first refusal
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Administrative action:</strong> Automatic suspension separate from court case
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Blood test preferred:</strong> Officer typically requests blood test for DUI
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Pennsylvania-Specific DUI Laws
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>ARD program:</strong> Accelerated Rehabilitative Disposition for first-time offenders
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Ignition interlock:</strong> Required for repeat offenders and high BAC cases
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>DUI court:</strong> Special courts for repeat offenders
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
  'Pennsylvania Parking & Traffic Violations': {
    icon: Info,
    sections: [
      {
        title: 'Parking Rules and Traffic Enforcement',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Pennsylvania Parking Distances
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
              Urban Pennsylvania Parking Rules
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Philadelphia PPA:</strong> Philadelphia Parking Authority enforces strictly
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Pittsburgh parking:</strong> Steep hills require proper wheel positioning
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Snow emergency routes:</strong> No parking during declared emergencies
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Sports venue parking:</strong> Special restrictions during Eagles, Phillies, Steelers, Penguins games
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Traffic Violations and Fines
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Speeding fines:</strong> $35+ for 5 mph over, increases with speed
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Cell phone use:</strong> $50+ fine for handheld device while driving
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Red light violations:</strong> Automated enforcement in Philadelphia
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Work zone violations:</strong> Doubled fines and enhanced penalties
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Pennsylvania Safe Driving Practices': {
    icon: CheckCircle,
    sections: [
      {
        title: 'Defensive Driving in Pennsylvania',
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
                <strong>Heavy traffic:</strong> Increase distance due to PA's dense urban corridors
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Mountain driving:</strong> Extra distance on steep grades and curves
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Weather conditions:</strong> Adjust distance for rain, snow, or fog
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Pennsylvania Highway Driving
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>PA Turnpike:</strong> Toll road across state, E-ZPass recommended
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>I-95 corridor:</strong> Heavy traffic through Philadelphia area
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>I-76/I-276:</strong> Schuylkill Expressway and Blue Route congestion
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Keep right law:</strong> Use right lanes except when passing
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Sharing the Road in Pennsylvania
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Amish buggies:</strong> Horse-drawn vehicles in Lancaster County and rural areas
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Bicyclists:</strong> Must give 4+ feet clearance when passing
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Pedestrians:</strong> High pedestrian traffic in urban areas
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Emergency vehicles:</strong> Move over law for stopped emergency vehicles
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Pennsylvania Mountain Driving': {
    icon: Mountain,
    sections: [
      {
        title: 'Appalachian Mountain Driving',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Mountain Pass Challenges
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Steep grades:</strong> Use lower gears going downhill to save brakes
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Truck runaway ramps:</strong> Emergency escape routes on steep downgrades
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Sharp curves:</strong> Reduce speed and maintain lane position
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Limited sight distance:</strong> Use headlights during the day
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Winter Mountain Driving
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Snow and ice:</strong> Mountain areas get more severe winter weather
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Black ice formation:</strong> Common on bridges and shaded mountain roads
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Tire chains:</strong> May be required during severe weather
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Emergency supplies:</strong> Carry blankets, water, and emergency kit
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Coal Region Driving
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Coal trucks:</strong> Heavy vehicles with longer stopping distances
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Mine subsidence areas:</strong> Road damage from underground mining
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Dust conditions:</strong> Coal dust can reduce visibility
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Industrial traffic:</strong> Heavy equipment accessing mining areas
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Pennsylvania Urban Driving': {
    icon: Building,
    sections: [
      {
        title: 'Major City Driving Challenges',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Philadelphia Metropolitan Area
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Schuylkill Expressway:</strong> I-76 known for heavy congestion and aggressive drivers
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>One-way streets:</strong> Complex downtown street grid system
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Bridge crossings:</strong> Ben Franklin, Betsy Ross, and Walt Whitman bridges
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Sports traffic:</strong> Eagles, Phillies, Sixers, Flyers games cause major congestion
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Pittsburgh Challenges
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Three rivers geography:</strong> Bridges and tunnels connecting neighborhoods
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Steep hills:</strong> Proper parking brake and wheel positioning essential
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Fort Pitt tunnels:</strong> Traffic bottlenecks entering/exiting downtown
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Parkway traffic:</strong> I-376 and I-279 congestion during rush hours
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Rural Pennsylvania Characteristics
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Amish communities:</strong> Horse-drawn buggies in Lancaster, Lebanon counties
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Farm equipment:</strong> Agricultural vehicles on rural roads
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Covered bridges:</strong> Historic bridges with weight and height restrictions
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Wildlife crossings:</strong> Deer common throughout rural Pennsylvania
              </li>
            </ul>
          </div>
        `
      }
    ]
  }
}