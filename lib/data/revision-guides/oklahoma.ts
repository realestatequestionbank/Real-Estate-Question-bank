import { Target, AlertTriangle, Info, CheckCircle, Wind, Car } from 'lucide-react'

export const oklahomaRevisionContent = {
  'Oklahoma Traffic Laws & Legal Requirements': {
    icon: Target,
    sections: [
      {
        title: 'Speed Limits and Traffic Control',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Oklahoma Speed Limits
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
                <strong>Rural highways:</strong> 65 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Interstate highways:</strong> 75-80 mph (some areas up to 80 mph)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Turnpikes:</strong> 75-80 mph on Oklahoma Turnpike system
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Oklahoma Right-of-Way Rules
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
              Oklahoma Insurance Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Minimum liability coverage:</strong> 25/50/25 ($25K bodily injury per person, $50K per accident, $25K property damage)
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
              Oklahoma Point System
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>License suspension:</strong> 10 points in 5 years triggers suspension
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Point values:</strong> Most violations = 1-4 points, serious offenses = 6 points
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Point reduction:</strong> 2 points removed for completing defensive driving course
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Safe driving:</strong> Points removed after 5 years from conviction date
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Oklahoma Vehicle Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>License plates:</strong> Rear plate required; front plate not required
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Seat belts:</strong> Required for front seat occupants and passengers under 13
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Child restraints:</strong> Required until age 8 or 4'9" tall
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>No state inspection:</strong> No mandatory safety or emissions inspection
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Oklahoma DUI Laws & Penalties': {
    icon: AlertTriangle,
    sections: [
      {
        title: 'Oklahoma DUI Laws and Consequences',
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
                <strong>First DUI penalties:</strong> 10 days to 1 year jail, $1,000+ fine, 6-month license suspension
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
              Oklahoma-Specific DUI Laws
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Aggravated DUI:</strong> Enhanced penalties for high BAC or with minor in vehicle
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Ignition interlock:</strong> Required for repeat offenders and some first-time offenders
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Open container law:</strong> No open alcohol containers in vehicle passenger area
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Drug DUI:</strong> Can be charged for any detectable amount of illegal drugs
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Oklahoma Parking & Traffic Violations': {
    icon: Info,
    sections: [
      {
        title: 'Parking Rules and Traffic Enforcement',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Oklahoma Parking Distances
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
              Urban Oklahoma Parking
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Oklahoma City downtown:</strong> Metered parking and time restrictions
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Tulsa parking:</strong> Meter enforcement in downtown and entertainment districts
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>University areas:</strong> Permit parking near OU and OSU campuses
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Sports venues:</strong> Special restrictions during Thunder, Sooners, Cowboys games
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Traffic Violations and Fines
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Speeding fines:</strong> $15+ for 1-10 mph over, increases with speed
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Cell phone use:</strong> $25+ fine for texting while driving
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Move over law:</strong> Change lanes or slow down for emergency vehicles
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Seat belt violations:</strong> $20 fine plus court costs
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Oklahoma Safe Driving Practices': {
    icon: CheckCircle,
    sections: [
      {
        title: 'Defensive Driving in Oklahoma',
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
                <strong>High winds:</strong> Increase distance due to Oklahoma's frequent high winds
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Weather conditions:</strong> Adjust distance for severe storms or tornadoes
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Large vehicles:</strong> Extra space for trucks and oil field equipment
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Oklahoma Highway Driving
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>I-35 corridor:</strong> Major north-south route, heavy truck traffic
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>I-40 east-west:</strong> Connects major cities across state
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Turner Turnpike:</strong> Toll road between Oklahoma City and Tulsa
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Keep right law:</strong> Use right lanes except when passing
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Sharing the Road in Oklahoma
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Farm equipment:</strong> Agricultural vehicles common in rural areas
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Oil field vehicles:</strong> Heavy industrial equipment in petroleum regions
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Bicyclists:</strong> Must give 3+ feet clearance when passing
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
  'Oklahoma Severe Weather Driving': {
    icon: Wind,
    sections: [
      {
        title: 'Tornado Alley Driving Challenges',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Severe Weather Awareness
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Tornado season:</strong> Peak activity March through June
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Supercell thunderstorms:</strong> Can produce tornadoes, large hail, and flash flooding
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Weather monitoring:</strong> Monitor weather alerts when traveling
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Tornado warnings:</strong> Seek immediate shelter, do not try to outrun tornado
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              High Wind Driving
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Constant winds:</strong> Oklahoma experiences frequent high winds
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Vehicle control:</strong> Maintain firm grip on steering wheel
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>High-profile vehicles:</strong> RVs, trucks, and trailers especially affected
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Dust storms:</strong> Can reduce visibility on open plains
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Flash Flooding and Hail
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Flash floods:</strong> Never drive through flooded roads
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Turn around, don't drown:</strong> As little as 6 inches can sweep vehicle away
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Large hail:</strong> Seek shelter under overpass or sturdy structure
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Vehicle damage:</strong> Hail can shatter windshields and dent vehicles
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Oklahoma Regional Driving': {
    icon: Car,
    sections: [
      {
        title: 'Oklahoma Regional Characteristics',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Oil and Gas Industry Traffic
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Drilling equipment:</strong> Oversized loads and heavy equipment transport
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Fracking operations:</strong> Increased truck traffic in oil field areas
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Water haulers:</strong> Large tanker trucks servicing oil operations
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Pipeline construction:</strong> Heavy equipment and construction zones
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Agricultural Areas
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Wheat harvest:</strong> Heavy farm equipment during harvest season
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Cattle operations:</strong> Livestock trucks and ranch vehicles
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Cotton farming:</strong> Specialized equipment in cotton regions
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Farm-to-market roads:</strong> Rural roads connecting farms to highways
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Urban Centers and Tourism
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Oklahoma City metro:</strong> Complex interchange system, rush hour congestion
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Tulsa area:</strong> Oil industry headquarters, business traffic
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Route 66 tourism:</strong> Historic route attracts tourist traffic
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Casino traffic:</strong> Tribal gaming venues throughout state
              </li>
            </ul>
          </div>
        `
      }
    ]
  }
}