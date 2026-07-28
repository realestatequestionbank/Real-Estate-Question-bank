import { Target, AlertTriangle, Info, CheckCircle, TreePine, MapPin } from 'lucide-react'

export const northDakotaRevisionContent = {
  'North Dakota Traffic Laws & Legal Requirements': {
    icon: Target,
    sections: [
      {
        title: 'Speed Limits and Traffic Control',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              North Dakota Speed Limits
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>School zones:</strong> 20 mph when children present or signs active
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Business/residential areas:</strong> 25 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Other areas:</strong> 55 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Gravel roads:</strong> 55 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Interstate highways:</strong> 75 mph (80 mph on some rural sections)
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              North Dakota Right-of-Way Rules
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
                <strong>Oil field traffic:</strong> Yield to large industrial vehicles in oil regions
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
              North Dakota Insurance Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>No-fault insurance:</strong> North Dakota uses no-fault insurance system
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Minimum coverage:</strong> 30/60/30 ($30K bodily injury per person, $60K per accident, $30K property damage)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Personal injury protection:</strong> $30K minimum PIP coverage required
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Uninsured motorist coverage:</strong> $30K/$60K minimum required
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              North Dakota Point System
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>License suspension:</strong> 12 or more points within 12 months
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Point values:</strong> 1-12 points depending on violation severity
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Point reduction:</strong> 3 points removed annually for safe driving
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Defensive driving course:</strong> Can reduce points in some cases
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              North Dakota Vehicle Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>License plates:</strong> Rear plate required; front plate not required
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Seat belts:</strong> Required for all front seat occupants and passengers under 18
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Child restraints:</strong> Required for children under 7 years old or under 57 inches tall
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Cell phone use:</strong> No texting while driving for all drivers
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'North Dakota DUI Laws & Penalties': {
    icon: AlertTriangle,
    sections: [
      {
        title: 'North Dakota DUI Laws and Consequences',
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
                <strong>First DUI penalties:</strong> License suspension 91 days, fines up to $1,500, possible jail time
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
                <strong>Refusal penalties:</strong> 180-day license suspension for first refusal
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Administrative license suspension:</strong> Immediate suspension separate from criminal case
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>24/7 Sobriety Program:</strong> Available as alternative to incarceration
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'North Dakota Parking & Road Signs': {
    icon: Info,
    sections: [
      {
        title: 'North Dakota Parking Rules',
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
                <strong>Rural parking:</strong> Pull completely off traveled portion of road
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Oil field areas:</strong> Respect posted parking restrictions in industrial areas
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Winter parking:</strong> Be aware of snow removal operations
              </li>
            </ul>
          </div>
        `
      },
      {
        title: 'North Dakota Traffic Signs',
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
                <strong>Oil field traffic signs:</strong> Heavy truck traffic and industrial vehicles
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Wildlife crossing signs:</strong> Watch for deer, elk, and pheasants
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>High wind advisory signs:</strong> Caution for crosswinds on open roads
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'North Dakota Safe Driving Practices': {
    icon: CheckCircle,
    sections: [
      {
        title: 'North Dakota Prairie and Oil Field Driving',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Oil Field and Industrial Traffic
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Heavy truck traffic:</strong> Large oil field vehicles and equipment
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Oversized loads:</strong> Wide and heavy industrial equipment transport
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>24-hour operations:</strong> Industrial traffic at all hours
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Rural road conditions:</strong> Increased wear on secondary roads
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Severe Prairie Weather
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Extreme cold:</strong> Harsh winter temperatures affect vehicle operation
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Blizzard conditions:</strong> Sudden whiteouts with zero visibility
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>High winds:</strong> Constant crosswinds across open prairie
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Dust storms:</strong> Reduced visibility during dry periods
              </li>
            </ul>
          </div>
        `
      }
    ]
  }
}