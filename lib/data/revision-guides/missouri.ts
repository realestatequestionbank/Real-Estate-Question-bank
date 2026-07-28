import { Target, AlertTriangle, Info, CheckCircle, TreePine, MapPin } from 'lucide-react'

export const missouriRevisionContent = {
  'Missouri Traffic Laws & Legal Requirements': {
    icon: Target,
    sections: [
      {
        title: 'Speed Limits and Traffic Control',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Missouri Speed Limits
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>School zones:</strong> 20 mph when children present or signs active
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Business/residential areas:</strong> 25 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Other locations:</strong> 35 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>State highways:</strong> 60 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Interstate highways:</strong> 70 mph (varies by location)
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Missouri Right-of-Way Rules
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Four-way stops:</strong> First to stop goes first; if simultaneous, yield to right
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Pedestrians:</strong> Must yield in crosswalks and at intersections
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Emergency vehicles:</strong> Pull to right side of road and stop
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>School buses:</strong> Stop when red lights flash on all undivided roadways
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Funeral processions:</strong> Yield right-of-way to entire procession
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
              Missouri Insurance Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Minimum liability coverage:</strong> 25/50/25 ($25K bodily injury per person, $50K per accident, $25K property damage)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Uninsured motorist coverage:</strong> 25/50/25 minimum required
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Financial responsibility law:</strong> Must maintain continuous insurance
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Proof of insurance:</strong> Must be carried in vehicle at all times
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Missouri Point System
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>License suspension:</strong> 8 or more points within 18 months
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Point values:</strong> 2-12 points depending on violation severity
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Point reduction:</strong> 3 points removed annually for safe driving
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Driver improvement program:</strong> Can reduce points in some cases
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Missouri Vehicle Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>License plates:</strong> Rear plate required; front plate required
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Seat belts:</strong> Required for all front seat occupants and passengers under 16
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Child restraints:</strong> Required for children under 8 years old or under 80 lbs
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Cell phone use:</strong> No texting while driving for all drivers under 21
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Missouri DUI Laws & Penalties': {
    icon: AlertTriangle,
    sections: [
      {
        title: 'Missouri DUI Laws and Consequences',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              DWI Penalties and BAC Limits
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
                <strong>First DWI penalties:</strong> License suspension 30 days, fines up to $1,000, possible jail time
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Ignition interlock:</strong> Required for repeat offenders and high BAC cases
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Implied Consent Law
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Chemical testing:</strong> Required when arrested for DWI
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Refusal penalties:</strong> 1-year license revocation for first refusal
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Administrative license revocation:</strong> Immediate suspension separate from criminal case
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Persistent offender law:</strong> Enhanced penalties for multiple DWI convictions
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Missouri Parking & Road Signs': {
    icon: Info,
    sections: [
      {
        title: 'Missouri Parking Rules',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Legal Parking Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Fire hydrants:</strong> Must park at least 15 feet away
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Intersections:</strong> No parking within 30 feet of intersection
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Driveways:</strong> Cannot block private or public driveways
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Hills:</strong> Turn wheels appropriately when parking on inclines
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Parallel parking:</strong> Must be within 12 inches of curb
              </li>
            </ul>
          </div>
        `
      },
      {
        title: 'Missouri Traffic Signs',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Important Traffic Signs
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Stop signs:</strong> Come to complete stop behind stop line
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Yield signs:</strong> Slow down and yield to other traffic
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Construction zone signs:</strong> Reduced speed and increased fines
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Farm equipment signs:</strong> Watch for slow-moving agricultural vehicles
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Deer crossing signs:</strong> High wildlife activity areas
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Missouri Safe Driving Practices': {
    icon: CheckCircle,
    sections: [
      {
        title: 'Missouri Weather and Rural Driving',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Varied Weather Conditions
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Severe thunderstorms:</strong> Sudden storms with high winds and hail
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Tornado activity:</strong> Spring and early summer severe weather
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Flash flooding:</strong> Heavy rains can cause rapid flooding
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Ice storms:</strong> Winter freezing rain creates hazardous conditions
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Rural and Agricultural Driving
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Farm equipment:</strong> Share the road with slow-moving agricultural machinery
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Livestock crossings:</strong> Watch for cattle and other farm animals
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Rural curves:</strong> Many winding roads with limited sight distance
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Ozark terrain:</strong> Hilly terrain with steep grades in southern Missouri
              </li>
            </ul>
          </div>
        `
      }
    ]
  }
}