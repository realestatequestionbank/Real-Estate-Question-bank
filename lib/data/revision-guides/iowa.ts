import { Target, AlertTriangle, Info, CheckCircle, TreePine, MapPin } from 'lucide-react'

export const iowaRevisionContent = {
  'Iowa Traffic Laws & Legal Requirements': {
    icon: Target,
    sections: [
      {
        title: 'Speed Limits and Traffic Control',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Iowa Speed Limits
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>School zones:</strong> 20 mph when children present or signs active
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Business/residential areas:</strong> 25 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Municipal streets:</strong> 35 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Rural highways:</strong> 55 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Interstate highways:</strong> 70 mph (80 mph on rural sections)
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Iowa Right-of-Way Rules
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
                <strong>Agricultural equipment:</strong> Yield to slow-moving farm vehicles
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
              Iowa Insurance Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Minimum liability coverage:</strong> 20/40/15 ($20K bodily injury per person, $40K per accident, $15K property damage)
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
              Iowa Point System
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>License suspension:</strong> Accumulating multiple violations within specific periods
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Point values:</strong> Various point values depending on violation severity
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Driver improvement program:</strong> May reduce penalties in some cases
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Habitual offender law:</strong> Multiple violations can result in revocation
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Iowa Vehicle Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>License plates:</strong> Rear plate required; front plate required
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Seat belts:</strong> Required for all front seat occupants and all passengers under 18
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Child restraints:</strong> Required for children under 6 years old
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
  'Iowa DUI Laws & Penalties': {
    icon: AlertTriangle,
    sections: [
      {
        title: 'Iowa DUI Laws and Consequences',
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
                <strong>First OWI penalties:</strong> License revocation 180 days to 1 year, fines up to $1,250
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Ignition interlock:</strong> May be required for license reinstatement
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
                <strong>Refusal penalties:</strong> 1-year license revocation for first refusal
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Administrative license revocation:</strong> Immediate suspension pending trial
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Iowa Parking & Road Signs': {
    icon: Info,
    sections: [
      {
        title: 'Iowa Parking Rules',
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
                <strong>Intersections:</strong> No parking within 30 feet of stop signs or traffic lights
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Driveways:</strong> Cannot block private or public driveways
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Crosswalks:</strong> No parking in or blocking crosswalks
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Rural parking:</strong> Be aware of farm equipment and wide vehicles
              </li>
            </ul>
          </div>
        `
      },
      {
        title: 'Iowa Traffic Signs',
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
                <strong>Slow-moving vehicle signs:</strong> Orange triangles on farm equipment
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Construction zone signs:</strong> Reduced speed and increased fines
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Deer crossing signs:</strong> Watch for wildlife, especially at dawn/dusk
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Iowa Safe Driving Practices': {
    icon: CheckCircle,
    sections: [
      {
        title: 'Iowa Rural and Weather Driving',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Rural Road Safety
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Farm equipment:</strong> Be patient with slow-moving agricultural vehicles
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Gravel roads:</strong> Reduce speed on loose gravel surfaces
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Livestock crossings:</strong> Watch for cattle and farm animals
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Wide load vehicles:</strong> Give extra space to oversized loads
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Iowa Weather Driving
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Winter conditions:</strong> Black ice and snow drifts are common
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Spring flooding:</strong> Never drive through flooded roads
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Thunderstorms:</strong> Pull over safely during severe weather
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Wind conditions:</strong> High winds can affect vehicle control
              </li>
            </ul>
          </div>
        `
      }
    ]
  }
}