import { Target, AlertTriangle, Info, CheckCircle, TreePine, MapPin } from 'lucide-react'

export const minnesotaRevisionContent = {
  'Minnesota Traffic Laws & Legal Requirements': {
    icon: Target,
    sections: [
      {
        title: 'Speed Limits and Traffic Control',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Minnesota Speed Limits
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>School zones:</strong> 15-30 mph when children present or signs active
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Urban districts:</strong> 30 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Residential areas:</strong> 30 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Two-lane highways:</strong> 55 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Interstate highways:</strong> 70 mph (60 mph in urban areas)
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Minnesota Right-of-Way Rules
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Four-way stops:</strong> First to stop goes first; if simultaneous, yield to right
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Pedestrians:</strong> Must yield in crosswalks; pedestrian-friendly laws
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Emergency vehicles:</strong> Pull to right side of road and stop
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>School buses:</strong> Stop when red lights flash on all undivided roadways
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Bicyclists:</strong> Must give 3 feet clearance when passing cyclists
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
              Minnesota Insurance Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>No-fault insurance:</strong> Minnesota uses no-fault insurance system
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Minimum coverage:</strong> 30/60/10 ($30K bodily injury per person, $60K per accident, $10K property damage)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Personal injury protection:</strong> $30K minimum PIP coverage required
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Uninsured motorist coverage:</strong> $25K/$50K minimum required
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Minnesota Point System
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>License cancellation:</strong> Based on accumulation of violations within specific periods
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Violation points:</strong> Different point values for different violations
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Driver improvement clinic:</strong> May reduce points in some cases
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Habitual violator:</strong> Multiple violations can result in cancellation
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Minnesota Vehicle Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>License plates:</strong> Rear plate required; front plate not required
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Seat belts:</strong> Required for all occupants regardless of seating position
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Child restraints:</strong> Required for children under 8 years old or under 4'9" tall
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
  'Minnesota DUI Laws & Penalties': {
    icon: AlertTriangle,
    sections: [
      {
        title: 'Minnesota DUI Laws and Consequences',
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
                <strong>Under 21 BAC limit:</strong> 0.00% (zero tolerance)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Commercial drivers:</strong> 0.04% or higher
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>First DWI penalties:</strong> License revocation 30-90 days, fines up to $1,000, possible jail time
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
                <strong>Administrative license revocation:</strong> Immediate revocation separate from criminal case
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Plate impoundment:</strong> License plates may be impounded for DWI violations
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Minnesota Parking & Road Signs': {
    icon: Info,
    sections: [
      {
        title: 'Minnesota Parking Rules',
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
                <strong>Intersections:</strong> No parking within 30 feet of intersection
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Snow emergency routes:</strong> Special parking restrictions during snow emergencies
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Disability parking:</strong> Strict enforcement of accessible parking spaces
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Lake access areas:</strong> Special parking rules near public water access
              </li>
            </ul>
          </div>
        `
      },
      {
        title: 'Minnesota Traffic Signs',
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
                <strong>Deer crossing signs:</strong> High wildlife activity areas
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Ice road signs:</strong> Seasonal weight limits on frozen lakes
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Bike trail crossing signs:</strong> Yield to cyclists on recreational trails
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Minnesota Safe Driving Practices': {
    icon: CheckCircle,
    sections: [
      {
        title: 'Minnesota Winter and Lake Country Driving',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Severe Winter Driving
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Extreme cold:</strong> Sub-zero temperatures affect vehicle performance
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Snow and ice:</strong> Heavy snowfall and icy conditions common
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Whiteout conditions:</strong> Sudden blizzards with zero visibility
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Ice fishing roads:</strong> Temporary roads on frozen lakes have weight limits
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Lake Country Safety
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Recreational traffic:</strong> Heavy summer traffic to lake areas
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Boat trailers:</strong> Watch for vehicles towing watercraft
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Wildlife crossings:</strong> Deer, moose, and other animals near water
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Narrow lake roads:</strong> Limited passing opportunities on scenic routes
              </li>
            </ul>
          </div>
        `
      }
    ]
  }
}