import { Target, AlertTriangle, Info, CheckCircle, TreePine, MapPin } from 'lucide-react'

export const utahRevisionContent = {
  'Utah Traffic Laws & Legal Requirements': {
    icon: Target,
    sections: [
      {
        title: 'Speed Limits and Traffic Control',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Utah Speed Limits
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>School zones:</strong> 20 mph when children present or signs active
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Residential areas:</strong> 25 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Business districts:</strong> 25 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Other locations:</strong> 35 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Interstate highways:</strong> 70-80 mph depending on location
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Utah Right-of-Way Rules
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
                <strong>School buses:</strong> Stop when red lights flash on all roadways
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Roundabouts:</strong> Yield to traffic already in the roundabout
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
              Utah Insurance Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>No-fault insurance:</strong> Utah uses modified no-fault insurance system
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Minimum coverage:</strong> 25/65/15 ($25K bodily injury per person, $65K per accident, $15K property damage)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Personal injury protection:</strong> $3K minimum PIP coverage required
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Uninsured motorist coverage:</strong> Required at same limits as liability
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Utah Point System
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>License suspension:</strong> 200+ points within 3 years
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Point values:</strong> 35-80 points depending on violation severity
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Point reduction:</strong> 50 points removed annually for safe driving
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Traffic school:</strong> Can reduce points for certain violations
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Utah Vehicle Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>License plates:</strong> Rear plate required; front plate not required
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Seat belts:</strong> Required for all front seat occupants and passengers under 16
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Child restraints:</strong> Required for children under 8 years old
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Cell phone use:</strong> No handheld devices while driving; hands-free only
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Utah DUI Laws & Penalties': {
    icon: AlertTriangle,
    sections: [
      {
        title: 'Utah DUI Laws and Consequences',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              DUI Penalties and BAC Limits
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Adult BAC limit:</strong> 0.05% or higher (strictest in US)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Under 21 BAC limit:</strong> 0.00% (zero tolerance)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Commercial drivers:</strong> 0.04% or higher
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>First DUI penalties:</strong> License suspension 120 days, fines up to $1,910, possible jail time
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
                <strong>Refusal penalties:</strong> 18-month license denial for first refusal
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Administrative license suspension:</strong> Immediate suspension separate from criminal case
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Metabolite DUI:</strong> Utah also prohibits driving with any measurable amount of controlled substances
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Utah Parking & Road Signs': {
    icon: Info,
    sections: [
      {
        title: 'Utah Parking Rules',
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
                <strong>Crosswalks:</strong> No parking in or blocking crosswalks
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Mountain parking:</strong> Set parking brake and turn wheels appropriately on grades
              </li>
            </ul>
          </div>
        `
      },
      {
        title: 'Utah Traffic Signs',
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
                <strong>Steep grade signs:</strong> Warning signs for mountain driving
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Chain up areas:</strong> Required tire chains in winter conditions
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Wildlife crossing signs:</strong> Watch for deer, elk, and other animals
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Utah Safe Driving Practices': {
    icon: CheckCircle,
    sections: [
      {
        title: 'Utah Mountain and Winter Driving',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Mountain Driving Techniques
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Steep grades:</strong> Use lower gears when descending; don't ride the brakes
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Altitude effects:</strong> Reduced engine performance at high elevations
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Curves and switchbacks:</strong> Reduce speed before entering mountain curves
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Runaway truck ramps:</strong> Emergency escape routes on steep descents
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Winter and Weather Conditions
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Snow and ice:</strong> Traction tires or chains required on many mountain passes
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Sudden weather changes:</strong> Mountain weather can change rapidly
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Inversion conditions:</strong> Poor air quality and reduced visibility in valleys
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Desert driving:</strong> Extreme heat and dust storms in southern Utah
              </li>
            </ul>
          </div>
        `
      }
    ]
  }
}