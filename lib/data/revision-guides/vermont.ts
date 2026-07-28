import { Target, AlertTriangle, Info, CheckCircle, TreePine, MapPin } from 'lucide-react'

export const vermontRevisionContent = {
  'Vermont Traffic Laws & Legal Requirements': {
    icon: Target,
    sections: [
      {
        title: 'Speed Limits and Traffic Control',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Vermont Speed Limits
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>School zones:</strong> 25 mph when children present or signs active
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Thickly settled areas:</strong> 25 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Other highways:</strong> 50 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Interstate highways:</strong> 65 mph (70 mph on some rural sections)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Construction zones:</strong> Reduced speed limits with increased fines
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Vermont Right-of-Way Rules
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
                <strong>Vulnerable road users:</strong> Special protection for cyclists and pedestrians
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
              Vermont Insurance Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Minimum liability coverage:</strong> 25/50/10 ($25K bodily injury per person, $50K per accident, $10K property damage)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Uninsured motorist coverage:</strong> $50K/$100K minimum required
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
              Vermont Point System
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>License suspension:</strong> 10 or more points within 2 years
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Point values:</strong> 2-5 points depending on violation severity
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Point reduction:</strong> 2 points removed annually for safe driving
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Driver education:</strong> Can reduce points in some cases
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Vermont Vehicle Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>License plates:</strong> Rear plate required; front plate required
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Seat belts:</strong> Required for all occupants regardless of seating position
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Child restraints:</strong> Required for children under 8 years old or under 57 inches tall
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Cell phone use:</strong> Hands-free only; no handheld devices while driving
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Vermont DUI Laws & Penalties': {
    icon: AlertTriangle,
    sections: [
      {
        title: 'Vermont DUI Laws and Consequences',
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
                <strong>First DUI penalties:</strong> License suspension 90 days, fines up to $750, possible jail time
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Ignition interlock:</strong> Required for repeat offenders and high BAC first offenders
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Implied Consent Law
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Chemical testing:</strong> Required when arrested for DUI
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Refusal penalties:</strong> 6-month license suspension for first refusal
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Administrative license suspension:</strong> Civil suspension separate from criminal case
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Restoration requirements:</strong> Must complete alcohol education program
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Vermont Parking & Road Signs': {
    icon: Info,
    sections: [
      {
        title: 'Vermont Parking Rules',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Legal Parking Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Fire hydrants:</strong> Must park at least 10 feet away
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Intersections:</strong> No parking within 25 feet of intersection
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Driveways:</strong> Cannot block private or public driveways
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Hills and grades:</strong> Turn wheels to curb and set parking brake
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Snow emergency routes:</strong> Special parking restrictions during winter storms
              </li>
            </ul>
          </div>
        `
      },
      {
        title: 'Vermont Traffic Signs',
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
                <strong>Covered bridge signs:</strong> Weight and height restrictions on historic bridges
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Moose crossing signs:</strong> Watch for large wildlife, especially at dawn/dusk
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Seasonal weight limit signs:</strong> Reduced weight limits during mud season
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Vermont Safe Driving Practices': {
    icon: CheckCircle,
    sections: [
      {
        title: 'Vermont Seasonal and Rural Driving',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Seasonal Driving Challenges
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Winter conditions:</strong> Snow, ice, and freezing temperatures common
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Mud season (spring):</strong> Unpaved roads become impassable; weight restrictions on many roads
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Fall foliage season:</strong> Heavy tourist traffic and distracted drivers
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Mountain driving:</strong> Steep grades and winding roads in Green Mountains
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Rural Road Safety
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Wildlife crossings:</strong> Watch for deer, moose, and black bears
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Farm equipment:</strong> Share the road with slow-moving agricultural vehicles
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Narrow roads:</strong> Many rural roads lack shoulders; drive carefully
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Covered bridges:</strong> One lane traffic; yield to oncoming traffic
              </li>
            </ul>
          </div>
        `
      }
    ]
  }
}