import { Target, AlertTriangle, Info, CheckCircle, TreePine, MapPin } from 'lucide-react'

export const montanaRevisionContent = {
  'Montana Traffic Laws & Legal Requirements': {
    icon: Target,
    sections: [
      {
        title: 'Speed Limits and Traffic Control',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Montana Speed Limits
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>School zones:</strong> 15-25 mph when children present or signs active
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Urban areas:</strong> 25 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Other roads:</strong> 35 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Two-lane highways:</strong> 70 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Interstate highways:</strong> 80 mph (day) / 65 mph (night) on some sections
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Montana Right-of-Way Rules
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
                <strong>Livestock:</strong> Yield to cattle and other livestock on open range roads
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
              Montana Insurance Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Minimum liability coverage:</strong> 25/50/20 ($25K bodily injury per person, $50K per accident, $20K property damage)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Financial responsibility law:</strong> Must maintain continuous insurance
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
              Montana Point System
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>License suspension:</strong> 30 or more points within 36 months
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Point values:</strong> 2-10 points depending on violation severity
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Point reduction:</strong> 5 points removed annually for safe driving
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Defensive driving course:</strong> Can reduce points in some cases
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Montana Vehicle Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>License plates:</strong> Rear plate required; front plate not required
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Seat belts:</strong> Required for all front seat occupants and passengers under 18
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Child restraints:</strong> Required for children under 6 years old or under 60 lbs
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
  'Montana DUI Laws & Penalties': {
    icon: AlertTriangle,
    sections: [
      {
        title: 'Montana DUI Laws and Consequences',
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
                <strong>First DUI penalties:</strong> License suspension 6 months, fines up to $1,000, possible jail time
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
                <strong>Refusal penalties:</strong> 6-month license suspension for first refusal
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Administrative license suspension:</strong> Immediate suspension separate from criminal case
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>24/7 Sobriety Program:</strong> May be required as alternative to incarceration
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Montana Parking & Road Signs': {
    icon: Info,
    sections: [
      {
        title: 'Montana Parking Rules',
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
                <strong>Mountain parking:</strong> Set parking brake and turn wheels on grades
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Cattle guards:</strong> Do not park near or block cattle guards
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Roadside parking:</strong> Pull completely off traveled portion of roadway
              </li>
            </ul>
          </div>
        `
      },
      {
        title: 'Montana Traffic Signs',
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
                <strong>Open range signs:</strong> Livestock may be on or near roadway
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Wildlife crossing signs:</strong> Watch for deer, elk, bears, and other animals
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Steep grade signs:</strong> Mountain passes with significant elevation changes
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Montana Safe Driving Practices': {
    icon: CheckCircle,
    sections: [
      {
        title: 'Montana Big Sky Driving',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Mountain and Rural Driving
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Long distances:</strong> Plan for extended travel between towns and services
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Mountain passes:</strong> Steep grades and winding roads at high elevation
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Open range:</strong> Livestock may wander onto roadways
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Wildlife crossings:</strong> Large animals like elk and deer common
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Extreme Weather Conditions
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Severe winter weather:</strong> Blizzards and extreme cold temperatures
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Wind conditions:</strong> High winds across open plains
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Sudden weather changes:</strong> Mountain weather can change rapidly
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Chain laws:</strong> Traction devices required on some mountain passes
              </li>
            </ul>
          </div>
        `
      }
    ]
  }
}