import { Target, AlertTriangle, Info, CheckCircle, TreePine, MapPin } from 'lucide-react'

export const californiaRevisionContent = {
  'California Traffic Laws & Legal Requirements': {
    icon: Target,
    sections: [
      {
        title: 'Speed Limits and Traffic Control',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              California Speed Limits
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>School zones:</strong> 25 mph when children present or signs flashing
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Residential/business areas:</strong> 25 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Undivided two-lane highways:</strong> 55 mph
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Freeways:</strong> 65 mph (70 mph on some rural interstates)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Prima facie speed limits:</strong> Legal maximum regardless of posted signs
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              California Right-of-Way Rules
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Four-way stops:</strong> First to stop goes first; if simultaneous, yield to right
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Pedestrians:</strong> Must yield in ALL crosswalks (marked and unmarked)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Emergency vehicles:</strong> Pull to right edge of road and stop
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>School buses:</strong> Stop when red lights flash and stop arm extends
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
              California Insurance Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Minimum liability coverage:</strong> 15/30/5 ($15K bodily injury per person, $30K per accident, $5K property damage)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>License suspension:</strong> Immediate suspension for driving without insurance
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>SR-22 requirement:</strong> May need to file proof of financial responsibility
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Uninsured motorist coverage:</strong> Must be offered by insurance companies
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              California Point System
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Negligent operator:</strong> 4 points in 12 months, 6 points in 24 months, or 8 points in 36 months
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Point values:</strong> Most violations = 1 point, serious violations = 2 points
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Traffic school:</strong> Can mask one point violation every 18 months
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>License suspension:</strong> Real Estate may suspend license for point accumulation
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              California Vehicle Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>License plates:</strong> Rear plate required, front plate required on most vehicles
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Seat belts:</strong> Required for all occupants; children under 8 must use car seats
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Smog check:</strong> Required every 2 years for most vehicles
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Hands-free law:</strong> No handheld cell phone use while driving
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'California DUI Laws & Penalties': {
    icon: AlertTriangle,
    sections: [
      {
        title: 'California DUI Laws and Consequences',
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
                <strong>Under 21 BAC limit:</strong> 0.01% or higher (zero tolerance)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Commercial drivers:</strong> 0.04% or higher
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>First DUI penalties:</strong> License suspension 4+ months, fines $1,800+, possible jail time
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Implied Consent and Administrative Penalties
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Implied consent:</strong> Driving privilege implies consent to chemical testing
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Test refusal:</strong> 1 year license suspension for first refusal
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Administrative per se:</strong> Automatic license suspension separate from court case
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Ignition interlock:</strong> Required for all DUI convictions in California
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              California-Specific DUI Laws
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Marijuana DUI:</strong> Can be charged for any amount of marijuana that impairs driving
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Prescription drugs:</strong> DUI applies to legal medications that impair driving
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Enhanced penalties:</strong> Higher BAC, injury, or child in car increases penalties
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>DUI checkpoints:</strong> Legal in California with proper notice and procedures
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'California Parking & Traffic Regulations': {
    icon: Info,
    sections: [
      {
        title: 'Parking Rules and Restrictions',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              California Parking Distances
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Fire hydrant:</strong> 15 feet minimum distance
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Crosswalk:</strong> 20 feet from crosswalk at controlled intersection
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Bus stop:</strong> 15 feet from bus stop sign
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Driveway:</strong> 3 feet from public or private driveway
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Disabled parking:</strong> Fines start at $250 for illegal use
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              California Hill Parking
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Uphill with curb:</strong> Turn wheels away from curb, set parking brake
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Downhill with curb:</strong> Turn wheels toward curb, set parking brake
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>No curb:</strong> Turn wheels toward edge of roadway
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>San Francisco hills:</strong> Especially important due to steep grades
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              California Traffic Violations
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Red light cameras:</strong> Legal in California, fines around $500
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>HOV lane violations:</strong> $481+ fine for improper use
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Cell phone tickets:</strong> $162+ for first offense handheld use
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Bike lane blocking:</strong> $238+ fine for stopping in bike lane
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'California Safe Driving Practices': {
    icon: CheckCircle,
    sections: [
      {
        title: 'Defensive Driving in California',
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
                <strong>Heavy traffic:</strong> Increase distance due to California's dense traffic
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Large vehicles:</strong> Stay back where you can see their mirrors
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Lane changes:</strong> Signal at least 100 feet before changing lanes on highways
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              California Highway Driving
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>HOV lanes:</strong> 2+ occupants required during posted hours, motorcycles allowed
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Lane splitting:</strong> Legal for motorcycles when done safely at low speeds
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Merge areas:</strong> Vehicles on freeway have right-of-way over merging traffic
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Express lanes:</strong> Some HOV lanes are now toll express lanes
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Sharing the Road in California
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Bicyclists:</strong> Must give 3+ feet clearance when passing
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Pedestrians:</strong> Must stop for pedestrians in crosswalks
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>School zones:</strong> 25 mph limit when children present
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Construction zones:</strong> Fines doubled in work zones
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'California Weather & Terrain Driving': {
    icon: TreePine,
    sections: [
      {
        title: 'California Driving Conditions',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Mountain and Hill Driving
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Steep grades:</strong> Use lower gears going downhill, avoid riding brakes
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Runaway truck ramps:</strong> Emergency escape routes on steep downgrades
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Chain requirements:</strong> Chains or snow tires required in Sierra Nevada
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Altitude effects:</strong> Reduced engine power and tire pressure changes
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Weather-Related Hazards
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Fog driving:</strong> Common in Central Valley - use low beams and slow down
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Santa Ana winds:</strong> High winds can affect vehicle control, especially large vehicles
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Flash floods:</strong> Desert washes can flood quickly during storms
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Wildfire smoke:</strong> Can reduce visibility, use headlights and AC recirculation
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Coastal and Desert Driving
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Marine layer:</strong> Coastal fog reduces visibility, especially mornings
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Beach parking:</strong> Sand can cause vehicles to get stuck
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Desert heat:</strong> Check coolant and carry extra water
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Remote areas:</strong> Cell phone coverage may be limited
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'California-Specific Driving Situations': {
    icon: MapPin,
    sections: [
      {
        title: 'Unique California Driving Challenges',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Major Metropolitan Areas
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Los Angeles:</strong> Complex freeway system, heavy traffic, aggressive drivers
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>San Francisco:</strong> Steep hills, cable cars, limited parking, fog
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>San Diego:</strong> Tourist traffic, beach access roads, Tijuana border crossing
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Bay Area:</strong> Multiple bridges, toll roads, tech worker commute traffic
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              California Road Features
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Carpool lanes:</strong> HOV lanes with specific hour restrictions
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Toll bridges:</strong> Bay Area bridges require FasTrak or cash
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Roundabouts:</strong> Becoming more common, yield to traffic in circle
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Bike lanes:</strong> Extensive bike lane network, especially in cities
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              California-Specific Laws
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Hands-free law:</strong> No handheld cell phone use, even at red lights
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Move over law:</strong> Change lanes for stopped emergency vehicles
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Slow traffic keep right:</strong> Must use right lanes except when passing
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Environmental regulations:</strong> Smog checks and emission requirements
              </li>
            </ul>
          </div>
        `
      }
    ]
  }
}