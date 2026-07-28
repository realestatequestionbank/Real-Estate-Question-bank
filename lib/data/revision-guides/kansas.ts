import { Target, AlertTriangle, Info, CheckCircle, Wind, Wheat } from 'lucide-react'

export const kansasRevisionContent = {
  'Kansas Traffic Laws & Legal Requirements': {
    icon: Target,
    sections: [
      {
        title: 'Speed Limits and Traffic Control',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Kansas Speed Limits
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>School zones:</strong> 25 mph or as posted when children present
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Residential areas:</strong> 30 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Business districts:</strong> 30 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>County highways:</strong> 55 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Interstate highways:</strong> 75 mph (80 mph on Kansas Turnpike)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Construction zones:</strong> Posted reduced speeds, fines doubled
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Kansas Right-of-Way Rules
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
              Kansas Insurance Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Minimum liability coverage:</strong> 25/50/25 ($25K bodily injury per person, $50K per accident, $25K property damage)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Personal injury protection (PIP):</strong> $4,500 minimum coverage required
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Uninsured motorist:</strong> $25K/$50K coverage required
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>License suspension:</strong> Immediate suspension for driving without insurance
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Kansas Point System
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>License suspension:</strong> 12 points in 12 months or 18 points in 24 months
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Point values:</strong> Most violations = 3 points, serious offenses = 8 points
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Defensive driving:</strong> Can remove up to 4 points once every 3 years
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Point reduction:</strong> Points remain for 3 years from conviction date
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Kansas Vehicle Requirements
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
                <strong>Vehicle inspection:</strong> Required in certain counties for emissions
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Kansas DUI Laws & Penalties': {
    icon: AlertTriangle,
    sections: [
      {
        title: 'Kansas DUI Laws and Consequences',
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
                <strong>First DUI penalties:</strong> 48 hours to 6 months jail, $750-1,000 fine, 30-day license suspension
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
                <strong>Administrative action:</strong> Automatic suspension separate from criminal case
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Breath test priority:</strong> Officer typically requests breath test
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Kansas-Specific DUI Laws
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Ignition interlock:</strong> Required for all DUI convictions
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Diversion programs:</strong> First-time offenders may qualify for diversion
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Open container law:</strong> No open alcohol containers in vehicle passenger area
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Aggravated DUI:</strong> Enhanced penalties for high BAC or repeat offenses
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Kansas Parking & Traffic Violations': {
    icon: Info,
    sections: [
      {
        title: 'Parking Rules and Traffic Enforcement',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Kansas Parking Distances
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
              Rural Kansas Parking Considerations
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Farm equipment access:</strong> Don't block field entrances or farm roads
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Grain elevator areas:</strong> Allow space for large trucks and trailers
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Main street parking:</strong> Diagonal or parallel parking common in small towns
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Church and school events:</strong> Temporary parking restrictions may apply
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Traffic Violations and Fines
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Speeding fines:</strong> $45+ for 1-10 mph over, increases with speed
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Cell phone use:</strong> $60+ fine for texting while driving
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Move over law:</strong> Change lanes or slow down for emergency vehicles
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Seat belt violations:</strong> $30 fine plus court costs
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Kansas Safe Driving Practices': {
    icon: CheckCircle,
    sections: [
      {
        title: 'Defensive Driving in Kansas',
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
                <strong>High winds:</strong> Increase distance due to Kansas wind conditions
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Large vehicles:</strong> Extra space for farm equipment and trucks
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Weather conditions:</strong> Adjust distance for rain, snow, or ice
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Kansas Highway Driving
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Keep right law:</strong> Use right lanes except when passing
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Kansas Turnpike:</strong> 80 mph speed limit, toll road with K-TAG system
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Long straight roads:</strong> Combat highway hypnosis by scanning frequently
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Crosswind awareness:</strong> Maintain firm grip on steering wheel
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Sharing the Road in Kansas
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Farm equipment:</strong> Slow-moving tractors and combines on rural roads
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Bicyclists:</strong> Must give 3+ feet clearance when passing
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Pedestrians:</strong> Always yield right-of-way in crosswalks
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Emergency vehicles:</strong> Pull over and stop completely
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Kansas Weather & Wind Driving': {
    icon: Wind,
    sections: [
      {
        title: 'Kansas Weather Challenges',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              High Wind Driving
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Constant winds:</strong> Kansas experiences persistent high winds
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Vehicle control:</strong> Maintain firm grip, anticipate gusts
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>High-profile vehicles:</strong> RVs, trucks, and trailers especially affected
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Bridge crossings:</strong> Extra caution on elevated roadways
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Severe Weather Conditions
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Tornadoes:</strong> Kansas is in "Tornado Alley" - monitor weather alerts
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Severe thunderstorms:</strong> Can develop quickly with hail and high winds
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Flash floods:</strong> Low-lying areas can flood rapidly
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Ice storms:</strong> Winter ice storms can make roads impassable
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Winter Driving in Kansas
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Blowing snow:</strong> Reduces visibility on open highways
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Black ice:</strong> Forms on bridges and overpasses first
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Emergency kit:</strong> Include blankets, food, water, and tools
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Fuel management:</strong> Keep tank full in rural areas
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Kansas Rural & Agricultural Driving': {
    icon: Wheat,
    sections: [
      {
        title: 'Kansas Rural Driving Challenges',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Agricultural Vehicle Encounters
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Farm equipment:</strong> Tractors, combines, and implements on roadways
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Harvest season:</strong> Increased agricultural traffic during fall
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Slow-moving vehicles:</strong> Look for orange triangle safety signs
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Wide loads:</strong> Farm equipment may extend beyond normal lane width
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Rural Road Characteristics
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Section line roads:</strong> Grid system with 1-mile intervals
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Gravel roads:</strong> Reduced traction, loose gravel hazards
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Narrow bridges:</strong> Single-lane bridges on county roads
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Railroad crossings:</strong> Many at-grade crossings throughout state
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Small Town Driving
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Main street layout:</strong> Wide streets designed for farm equipment
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>School zones:</strong> Enhanced enforcement during school hours
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Grain elevator areas:</strong> Heavy truck traffic during harvest
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Community events:</strong> Temporary traffic pattern changes
              </li>
            </ul>
          </div>
        `
      }
    ]
  }
}