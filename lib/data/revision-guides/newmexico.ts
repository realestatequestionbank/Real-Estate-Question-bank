import { Target, AlertTriangle, Info, CheckCircle, Sun, Mountain } from 'lucide-react'

export const newmexicoRevisionContent = {
  'New Mexico Traffic Laws & Legal Requirements': {
    icon: Target,
    sections: [
      {
        title: 'Speed Limits and Traffic Control',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              New Mexico Speed Limits
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
                <strong>Interstate highways:</strong> 75 mph (some areas up to 80 mph)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Trucks:</strong> 65 mph on interstates, may be lower on other roads
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              New Mexico Right-of-Way Rules
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
              New Mexico Insurance Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Minimum liability coverage:</strong> 25/50/10 ($25K bodily injury per person, $50K per accident, $10K property damage)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>License suspension:</strong> Immediate suspension for driving without insurance
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>SR-22 filing:</strong> Required for serious violations and license reinstatement
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Proof of insurance:</strong> Must carry valid proof at all times
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              New Mexico Point System
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>License suspension:</strong> 12 points in 12 months triggers suspension
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Point values:</strong> Most violations = 2-4 points, serious offenses = 6-8 points
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Point reduction:</strong> 3 points removed for completing defensive driving course
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Safe driving:</strong> 1 point removed for each year without violations
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              New Mexico Vehicle Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>License plates:</strong> Rear plate required; front plate not required
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Seat belts:</strong> Required for all occupants, primary enforcement
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Child restraints:</strong> Required until age 7 or 60 pounds
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Vehicle inspection:</strong> Annual safety inspection required; emissions in Bernalillo County
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'New Mexico DWI Laws & Penalties': {
    icon: AlertTriangle,
    sections: [
      {
        title: 'New Mexico DWI Laws and Consequences',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              DWI Penalties and BAC Limits
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Adult BAC limit:</strong> 0.08% or higher (New Mexico calls it DWI)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Under 21 BAC limit:</strong> 0.02% or higher
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Commercial drivers:</strong> 0.04% or higher
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>First DWI penalties:</strong> Up to 90 days jail, $500+ fine, 6-month to 1-year license revocation
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
              New Mexico-Specific DWI Laws
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Aggravated DWI:</strong> Enhanced penalties for high BAC (0.16%+) or with child in vehicle
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Ignition interlock:</strong> Required for all DWI convictions, including first offense
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>DWI school:</strong> Alcohol screening and education required
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
  'New Mexico Parking & Traffic Violations': {
    icon: Info,
    sections: [
      {
        title: 'Parking Rules and Traffic Enforcement',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              New Mexico Parking Distances
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
                <strong>Driveway:</strong> 3 feet from public or private driveway
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Railroad crossing:</strong> 50 feet from nearest rail
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Urban New Mexico Parking
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Albuquerque downtown:</strong> Meter enforcement and time-limited zones
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Santa Fe Plaza area:</strong> Historic district with limited parking
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>University areas:</strong> Permit parking near UNM, NMSU campuses
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Tourist destinations:</strong> Special restrictions near attractions and ski areas
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Traffic Violations and Fines
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Speeding fines:</strong> $25+ for 1-15 mph over, increases significantly with speed
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
  'New Mexico Safe Driving Practices': {
    icon: CheckCircle,
    sections: [
      {
        title: 'Defensive Driving in New Mexico',
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
                <strong>High altitude effects:</strong> Vehicles may perform differently at elevation
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Weather conditions:</strong> Adjust distance for dust storms, rain, or snow
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Large vehicles:</strong> Extra space for trucks and RVs on mountain roads
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              New Mexico Highway Driving
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>I-25 corridor:</strong> Major north-south route through Albuquerque and Santa Fe
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>I-40 east-west:</strong> Crosses entire state, elevation changes through mountains
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>US-285:</strong> Major route to Carlsbad Caverns, oil field traffic
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Keep right law:</strong> Use right lanes except when passing
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Sharing the Road in New Mexico
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Ranch vehicles:</strong> Agricultural and livestock vehicles in rural areas
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
  'New Mexico Desert & Climate Driving': {
    icon: Sun,
    sections: [
      {
        title: 'High Desert Environment Challenges',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Desert Driving Conditions
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Extreme temperatures:</strong> Summer heat can exceed 100°F, affecting vehicle performance
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Tire pressure monitoring:</strong> Heat causes tire pressure to increase significantly
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Engine cooling:</strong> Monitor temperature gauge, especially in traffic or climbing
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Hydration essential:</strong> Carry extra water for emergencies
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Dust Storms and Wind
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Haboob dust storms:</strong> Wall of dust can reduce visibility to zero
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Pull aside and stop:</strong> Turn off lights, wait for storm to pass
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>High winds:</strong> Crosswinds common in open desert areas
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Blowing sand:</strong> Can sandblast windshields and damage paint
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              High Altitude Effects
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Reduced engine power:</strong> Less oxygen available for combustion at elevation
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Longer stopping distances:</strong> Thinner air affects braking performance
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>UV exposure:</strong> Higher elevation means more intense sunlight
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Weather changes:</strong> Temperature drops rapidly with elevation gain
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'New Mexico Regional Driving': {
    icon: Mountain,
    sections: [
      {
        title: 'New Mexico Geographic Challenges',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Rio Grande Valley Region
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Albuquerque metro:</strong> High elevation city with rapid growth and construction
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Sandia Mountains:</strong> Steep roads to ski areas and Sandia Crest
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Rio Grande bridges:</strong> Multiple river crossings throughout valley
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Balloon Fiesta:</strong> Massive traffic during October event
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Northern Mountains and Plateaus
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Ski area traffic:</strong> Heavy winter traffic to Taos, Santa Fe ski basins
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Native American lands:</strong> Respect tribal sovereignty and speed limits
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Elevation changes:</strong> Significant altitude variations affect driving
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Wildlife crossings:</strong> Elk, deer, and other animals on mountain roads
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Southeastern Oil Country
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Permian Basin activity:</strong> Heavy oil field truck traffic in southeast
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Carlsbad Caverns tourism:</strong> Tourist traffic to national park
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Potash mining:</strong> Large industrial vehicles in mining areas
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Remote areas:</strong> Long distances between services, carry emergency supplies
              </li>
            </ul>
          </div>
        `
      }
    ]
  }
}