import { Target, AlertTriangle, Info, CheckCircle, Building, Car } from 'lucide-react'

export const newyorkRevisionContent = {
  'New York Traffic Laws & Legal Requirements': {
    icon: Target,
    sections: [
      {
        title: 'Speed Limits and Traffic Control',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              New York Speed Limits
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>School zones:</strong> 20 mph when children present or signs posted
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
                <strong>Interstate highways:</strong> 65 mph (some areas up to 70 mph)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>NYC streets:</strong> 25 mph citywide unless posted otherwise
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              New York Right-of-Way Rules
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Four-way stops:</strong> First to stop proceeds first; simultaneous arrival yields to right
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Pedestrians:</strong> Have absolute right-of-way in crosswalks
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Emergency vehicles:</strong> Must pull over and stop for sirens/lights
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>School buses:</strong> Stop when red lights flash, both directions on undivided roads
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
              New York Insurance Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Minimum liability coverage:</strong> 25/50/10 plus $50K death benefit
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>No-fault insurance:</strong> Personal Injury Protection (PIP) required
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Uninsured motorist:</strong> $25K/$50K coverage required
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>FS-1 form:</strong> Proof of insurance must be carried at all times
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              New York Point System
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>License suspension:</strong> 11 points in 18 months triggers suspension
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Point reduction:</strong> 4 points removed for completing defensive driving course
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Serious violations:</strong> Reckless driving = 5 points, cell phone = 5 points
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Assessment fees:</strong> $300+ fees for 6+ points, plus $25 per point above 6
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              New York Vehicle Requirements
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
  'New York DWI Laws & Penalties': {
    icon: AlertTriangle,
    sections: [
      {
        title: 'New York DWI Laws and Consequences',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              DWI/DWAI Penalties and BAC Limits
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>DWI (0.08% BAC):</strong> Up to 1 year jail, $1,000 fine, 6-month license revocation
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>DWAI (0.05-0.07% BAC):</strong> Traffic infraction, $300-500 fine, 90-day suspension
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Aggravated DWI (0.18%+ BAC):</strong> Enhanced penalties, ignition interlock required
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Zero tolerance (under 21):</strong> 0.02-0.07% BAC results in license revocation
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Chemical Testing and Implied Consent
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Implied consent:</strong> License implies consent to chemical testing
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Test refusal:</strong> 1 year license revocation for first refusal
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Breath test preferred:</strong> Breath test is standard, blood/urine when unavailable
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Right to attorney:</strong> No right to attorney before deciding on test
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              New York-Specific DWI Laws
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Leandra's Law:</strong> Aggravated DWI if child under 16 in vehicle
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Ignition interlock:</strong> Required for all DWI convictions
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Conditional license:</strong> May be available during suspension period
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Persistent violator:</strong> Felony charge for multiple DWI convictions
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'New York Parking & Traffic Violations': {
    icon: Info,
    sections: [
      {
        title: 'Parking Rules and Traffic Enforcement',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              New York Parking Distances
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
                <strong>Bus stop:</strong> 30 feet from bus stop sign
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Driveway:</strong> 5 feet from public or private driveway
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              NYC Specific Parking Rules
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Alternate side parking:</strong> Street cleaning rules, must move car on designated days
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Muni meters:</strong> Electronic parking payment required in most areas
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>No standing zones:</strong> Cannot stop except to pick up/drop off passengers
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Double parking:</strong> Illegal and heavily enforced with high fines
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Traffic Violations and Fines
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Cell phone use:</strong> $50-200 fine plus 5 points on license
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Speeding fines:</strong> $45-600+ depending on speed and location
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Red light cameras:</strong> $50 fine, no points (owner liability)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>School zone violations:</strong> Enhanced fines when children present
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'New York Safe Driving Practices': {
    icon: CheckCircle,
    sections: [
      {
        title: 'Defensive Driving in New York',
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
                <strong>Heavy traffic:</strong> Increase distance in NYC and urban areas
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Highway speeds:</strong> 4+ seconds at highway speeds
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Large vehicles:</strong> Extra space for trucks and buses
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              New York Highway Driving
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Lane discipline:</strong> Keep right except when passing
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Aggressive drivers:</strong> Common in NYC area - avoid confrontation
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Construction zones:</strong> Frequent on major highways, reduce speed
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>E-ZPass lanes:</strong> Electronic toll collection system
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Vulnerable Road Users
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Pedestrians:</strong> High pedestrian traffic in NYC - constant vigilance required
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Bicyclists:</strong> Protected bike lanes in cities, must yield appropriately
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Motorcycles:</strong> Popular in urban areas, check blind spots carefully
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
  'New York Weather & Seasonal Driving': {
    icon: Building,
    sections: [
      {
        title: 'Winter and Weather Conditions',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Winter Driving Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Snow tires recommended:</strong> Not required by law but highly recommended
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Tire chains:</strong> May be required on certain highways during storms
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Following distance:</strong> Increase to 6+ seconds on snow/ice
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Speed reduction:</strong> Drive well below speed limits in winter conditions
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Regional Weather Challenges
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Lake effect snow:</strong> Heavy, sudden snowfall near Great Lakes
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Upstate vs. NYC:</strong> Upstate gets more snow, NYC more rain/sleet
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Mountain areas:</strong> Adirondacks and Catskills have severe winter weather
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Urban heat island:</strong> NYC stays warmer, affects precipitation type
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Seasonal Driving Adjustments
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Fall leaves:</strong> Wet leaves can be slippery as ice
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Spring potholes:</strong> Freeze-thaw cycle creates road damage
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Summer construction:</strong> Heavy construction season, expect delays
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Holiday traffic:</strong> Major congestion during holidays in/out of NYC
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'New York Urban & Highway Driving': {
    icon: Car,
    sections: [
      {
        title: 'NYC and Urban Driving Challenges',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Manhattan Driving Challenges
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Grid system:</strong> Numbered streets run east-west, avenues run north-south
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>One-way streets:</strong> Most streets are one-way, plan route carefully
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Yellow taxi priority:</strong> Taxis have right-of-way when picking up fares
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Congestion pricing:</strong> Tolls charged for entering Manhattan CBD
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Bridge and Tunnel Crossings
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>E-ZPass required:</strong> Most crossings require E-ZPass or pay high cash tolls
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Peak hour restrictions:</strong> Some bridges restrict truck traffic during rush
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Height restrictions:</strong> Many bridges and tunnels have height limits
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>HOV restrictions:</strong> Some bridges have carpool requirements during rush hour
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Upstate vs. Downstate Driving
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Rural highways:</strong> Upstate has wider, less congested roads
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Wildlife crossings:</strong> Deer common on upstate roads, especially at dusk
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Thruway system:</strong> I-90 NY Thruway is main east-west corridor
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Canadian border:</strong> Border crossing procedures at Thousand Islands, Peace Bridge
              </li>
            </ul>
          </div>
        `
      }
    ]
  }
}