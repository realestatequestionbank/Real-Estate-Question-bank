import { Target, AlertTriangle, Info, CheckCircle, TreePine, MapPin } from 'lucide-react'

export const indianaRevisionContent = {
  'Indiana Traffic Laws & Legal Requirements': {
    icon: Target,
    sections: [
      {
        title: 'Speed Limits and Traffic Control',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Indiana Speed Limits
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>School zones:</strong> 25 mph when children present or signs active
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Urban areas:</strong> 30 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Suburban areas:</strong> 35 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Rural highways:</strong> 55 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Interstate highways:</strong> 70 mph (80 mph on rural interstate sections)
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Indiana Right-of-Way Rules
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
                <strong>School buses:</strong> Stop when red lights flash (both directions unless divided highway)
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
              Indiana Insurance Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Minimum liability coverage:</strong> 25/50/25 ($25K bodily injury per person, $50K per accident, $25K property damage)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Financial responsibility:</strong> Must maintain continuous insurance coverage
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>SR-22 requirement:</strong> Required for certain violations
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Proof of insurance:</strong> Must be carried in vehicle at all times
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Indiana Point System
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>License suspension:</strong> 20 or more points within 2 years
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Point values:</strong> 2-8 points depending on violation severity
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Point reduction:</strong> 3 points removed annually for safe driving
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Driver safety program:</strong> Can reduce points in some cases
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Indiana Vehicle Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>License plates:</strong> Rear plate required; front plate not required
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Seat belts:</strong> Required for all front seat occupants and all passengers under 16
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Child restraints:</strong> Required for children under 8 years old
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Cell phone use:</strong> No texting while driving; hands-free only for calls under 18
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Indiana DUI Laws & Penalties': {
    icon: AlertTriangle,
    sections: [
      {
        title: 'Indiana DUI Laws and Consequences',
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
                <strong>First OWI penalties:</strong> License suspension 180 days to 2 years, fines up to $5,000
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Ignition interlock:</strong> Required for BAC of 0.15% or higher
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Implied Consent Law
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Chemical testing:</strong> Required when arrested for OWI
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Refusal penalties:</strong> 1-year license suspension for first refusal
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Administrative license suspension:</strong> Immediate suspension separate from criminal case
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Indiana Parking & Road Signs': {
    icon: Info,
    sections: [
      {
        title: 'Indiana Parking Rules',
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
                <strong>Crosswalks:</strong> No parking in or blocking crosswalks
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Hills:</strong> Turn wheels appropriately when parking on inclines
              </li>
            </ul>
          </div>
        `
      },
      {
        title: 'Indiana Traffic Signs',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Important Traffic Signs
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Stop signs:</strong> Come to complete stop behind stop line or crosswalk
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Yield signs:</strong> Slow down and yield to other traffic
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Move Over Law signs:</strong> Change lanes for emergency vehicles
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Construction zone signs:</strong> Reduced speed and increased fines
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>No passing zones:</strong> Solid yellow lines indicate no passing
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Indiana Safe Driving Practices': {
    icon: CheckCircle,
    sections: [
      {
        title: 'Indiana Defensive Driving',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Weather-Related Driving
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Snow and ice:</strong> Reduce speed and increase following distance
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Rain conditions:</strong> Use headlights and watch for hydroplaning
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Fog:</strong> Use low beams and reduce speed significantly
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Construction zones:</strong> Slow down and stay alert for workers
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Highway Safety
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Interstate driving:</strong> Use left lane for passing only
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Merging:</strong> Match speed of highway traffic when entering
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Following distance:</strong> Minimum 3-second rule, more in poor weather
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Move Over Law:</strong> Change lanes or slow down for stopped emergency vehicles
              </li>
            </ul>
          </div>
        `
      }
    ]
  }
}