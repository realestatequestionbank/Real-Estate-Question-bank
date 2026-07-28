import { Target, AlertTriangle, Info, CheckCircle, TreePine, MapPin } from 'lucide-react'

export const hawaiiRevisionContent = {
  'Hawaii Traffic Laws & Legal Requirements': {
    icon: Target,
    sections: [
      {
        title: 'Speed Limits and Traffic Control',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Hawaii Speed Limits
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>School zones:</strong> 25 mph when children present or signs active
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Residential areas:</strong> 25 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Business districts:</strong> 25 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Rural highways:</strong> 45-55 mph depending on location
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Interstate highways:</strong> 60 mph (H-1, H-2, H-3 freeways)
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Hawaii Right-of-Way Rules
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Four-way stops:</strong> First to stop goes first; if simultaneous, yield to right
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Pedestrians:</strong> Must yield in all crosswalks; Hawaii has strict pedestrian laws
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Emergency vehicles:</strong> Pull to right side of road and stop
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>School buses:</strong> Stop when red lights flash on all roadways
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Bicyclists:</strong> Yield to cyclists; they have same road rights as vehicles
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
              Hawaii Insurance Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>No-fault insurance:</strong> Hawaii uses no-fault insurance system
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Minimum coverage:</strong> $20K bodily injury per person, $40K per accident, $10K property damage
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Personal injury protection:</strong> $10K minimum PIP coverage required
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Proof of insurance:</strong> Must be carried in vehicle at all times
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Hawaii Point System
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>License suspension:</strong> 12 or more points within 12 months
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Point values:</strong> 2-4 points depending on violation severity
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Point reduction:</strong> 3 points removed annually for safe driving
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Driver improvement program:</strong> May reduce points in some cases
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Hawaii Vehicle Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>License plates:</strong> Rear plate required; front plate not required
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Seat belts:</strong> Required for all occupants regardless of seating position
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Child restraints:</strong> Required for children under 4 years old
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
  'Hawaii DUI Laws & Penalties': {
    icon: AlertTriangle,
    sections: [
      {
        title: 'Hawaii DUI Laws and Consequences',
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
                <strong>First DUI penalties:</strong> License revocation 1 year, fines up to $1,000, possible jail time
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Ignition interlock:</strong> Required for all DUI convictions
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
                <strong>Refusal penalties:</strong> 1-year license revocation for first refusal
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Administrative license revocation:</strong> Immediate license suspension
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Hawaii Parking & Road Signs': {
    icon: Info,
    sections: [
      {
        title: 'Hawaii Parking Rules',
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
                <strong>Driveways:</strong> Cannot block private driveways
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Beach access:</strong> Special parking rules near beaches and ocean access
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Parallel parking:</strong> Must be within 12 inches of curb
              </li>
            </ul>
          </div>
        `
      },
      {
        title: 'Hawaii Traffic Signs',
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
                <strong>Tsunami evacuation route signs:</strong> Important for emergency situations
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Sacred/cultural site signs:</strong> Respect posted restrictions
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Bike lane signs:</strong> Yield to cyclists in designated lanes
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Hawaii Safe Driving Practices': {
    icon: CheckCircle,
    sections: [
      {
        title: 'Island Driving Techniques',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Weather and Road Conditions
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Rain conditions:</strong> Roads become very slippery when it first rains
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Vog (volcanic smog):</strong> Reduce speed and increase following distance
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Trade winds:</strong> Can affect vehicle handling, especially for motorcycles
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Mountain driving:</strong> Use lower gears on steep grades
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Aloha Spirit Driving
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Share the road:</strong> Be courteous to tourists and locals alike
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Shaka wave:</strong> Acknowledge courteous drivers with friendly gesture
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Patience:</strong> Traffic can be heavy; maintain calm attitude
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Wildlife awareness:</strong> Watch for endangered birds and marine animals
              </li>
            </ul>
          </div>
        `
      }
    ]
  }
}