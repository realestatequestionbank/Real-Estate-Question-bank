import { Target, AlertTriangle, Info, CheckCircle, Mountain, MapPin } from 'lucide-react'

export const kentuckyRevisionContent = {
  'Kentucky Traffic Laws & Legal Requirements': {
    icon: Target,
    sections: [
      {
        title: 'Speed Limits and Traffic Control',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Kentucky Speed Limits
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>School zones:</strong> 25 mph when children present or signs flashing
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Residential areas:</strong> 35 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Business districts:</strong> 35 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Rural highways:</strong> 55 mph on two-lane roads
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Interstate highways:</strong> 70 mph (65 mph in urban areas)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Mountain parkways:</strong> 65 mph unless posted otherwise
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Kentucky Right-of-Way Rules
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
              Kentucky Insurance Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Minimum liability coverage:</strong> 25/50/25 ($25K bodily injury per person, $50K per accident, $25K property damage)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Personal injury protection (PIP):</strong> $10,000 minimum coverage required
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
              Kentucky Point System
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>License suspension:</strong> 12 or more points in 24 months triggers suspension
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Point values:</strong> Most violations = 3-6 points, serious offenses = 6-12 points
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Traffic school:</strong> Can remove points for certain violations
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Point reduction:</strong> Points removed after 2 years from conviction date
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Kentucky Vehicle Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>License plates:</strong> Rear plate required; front plate not required
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Seat belts:</strong> Required for all occupants, primary enforcement
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Child restraints:</strong> Required until age 8 or 4'9" tall
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Vehicle inspection:</strong> Required in Jefferson County (Louisville) and northern Kentucky
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Kentucky DUI Laws & Penalties': {
    icon: AlertTriangle,
    sections: [
      {
        title: 'Kentucky DUI Laws and Consequences',
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
                <strong>First DUI penalties:</strong> 30-120 days jail, $200-500 fine, 30-120 day license suspension
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
                <strong>Test refusal:</strong> 6-month license suspension for first refusal
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
              Kentucky-Specific DUI Laws
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Aggravated DUI:</strong> Enhanced penalties for BAC 0.15% or higher
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Ignition interlock:</strong> Required for repeat offenders and high BAC
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Open container law:</strong> No open alcohol containers in vehicle passenger area
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>DUI education:</strong> Required alcohol/drug education program
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Kentucky Parking & Traffic Violations': {
    icon: Info,
    sections: [
      {
        title: 'Parking Rules and Traffic Enforcement',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Kentucky Parking Distances
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
              Urban Kentucky Parking Rules
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Louisville downtown:</strong> Meter enforcement and time limits
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Lexington campus area:</strong> Permit parking near University of Kentucky
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Derby Festival parking:</strong> Special restrictions during Kentucky Derby
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Parallel parking hills:</strong> Turn wheels appropriately on sloped streets
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Traffic Violations and Fines
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Speeding fines:</strong> $30+ for 1-15 mph over, increases with speed
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Cell phone use:</strong> $25+ fine for texting while driving
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Move over law:</strong> Change lanes or slow down for emergency vehicles
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Seat belt violations:</strong> $25 fine plus court costs
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Kentucky Safe Driving Practices': {
    icon: CheckCircle,
    sections: [
      {
        title: 'Defensive Driving in Kentucky',
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
                <strong>Mountain driving:</strong> Increase distance on steep grades and curves
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Large vehicles:</strong> Extra space for trucks and farm equipment
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Weather conditions:</strong> Adjust distance for rain, snow, or fog
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Kentucky Highway Driving
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Keep right law:</strong> Use right lanes except when passing
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Mountain parkways:</strong> Watch for steep grades and sharp curves
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Coal truck traffic:</strong> Heavy industrial vehicles in eastern regions
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Interstate corridors:</strong> I-65, I-71, I-75 have heavy through traffic
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Sharing the Road in Kentucky
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Horse and buggies:</strong> Common in some rural areas, give wide berth
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Bicyclists:</strong> Must give 3+ feet clearance when passing
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Farm equipment:</strong> Slow-moving vehicles on rural roads
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Pedestrians:</strong> Always yield right-of-way in crosswalks
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Kentucky Mountain Driving': {
    icon: Mountain,
    sections: [
      {
        title: 'Appalachian Mountain Driving',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Eastern Kentucky Mountain Roads
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Steep grades:</strong> Use lower gears on long downgrades
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Sharp curves:</strong> Reduce speed and stay in your lane
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Limited sight distance:</strong> Use headlights during the day
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Narrow roads:</strong> Single lane with turnouts in some areas
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Coal Mining Region Hazards
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Coal trucks:</strong> Heavy, loaded trucks with longer stopping distances
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Mine access roads:</strong> Industrial traffic entering/exiting mines
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Dust and debris:</strong> Coal dust can reduce visibility
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Shift changes:</strong> Heavy traffic during mine shift changes
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Weather Considerations
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Fog in valleys:</strong> Dense fog common in morning hours
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Ice formation:</strong> Black ice forms first on bridges and shaded areas
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Flash flooding:</strong> Mountain runoff can flood low-lying roads quickly
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Rock slides:</strong> Possible during heavy rain or freeze-thaw cycles
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Kentucky Regional Driving': {
    icon: MapPin,
    sections: [
      {
        title: 'Kentucky Regional Characteristics',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Louisville Metro Area
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Ohio River bridges:</strong> I-64, I-65, and I-264 bridge crossings
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Watterson Expressway:</strong> I-264 loop around Louisville
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Kentucky Derby traffic:</strong> Massive congestion during Derby week
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Airport traffic:</strong> SDF approach roads and cargo traffic
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Lexington and Bluegrass Region
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>University of Kentucky:</strong> Heavy student traffic during school year
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Horse farms:</strong> Equestrian traffic and farm vehicles
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Keeneland racing:</strong> Special events cause traffic surges
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>New Circle Road:</strong> KY-4 loop around Lexington
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Western Kentucky and Rural Areas
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Agricultural traffic:</strong> Farm equipment during planting and harvest
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Lake recreation areas:</strong> Seasonal tourist traffic to lakes
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Wildlife crossings:</strong> Deer and other wildlife on rural highways
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Railroad crossings:</strong> Many at-grade crossings throughout state
              </li>
            </ul>
          </div>
        `
      }
    ]
  }
}