import { Target, AlertTriangle, Info, CheckCircle, TreePine, MapPin } from 'lucide-react'

export const massachusettsRevisionContent = {
  'Massachusetts Traffic Laws & Legal Requirements': {
    icon: Target,
    sections: [
      {
        title: 'Speed Limits and Traffic Control',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Massachusetts Speed Limits
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>School zones:</strong> 20 mph when children present or signs active
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Thickly settled areas:</strong> 30 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Other ways:</strong> 40 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Non-limited access divided highways:</strong> 50 mph unless posted
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Limited access/interstate highways:</strong> 65 mph (varies by section)
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Massachusetts Right-of-Way Rules
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Four-way stops:</strong> First to stop goes first; if simultaneous, yield to right
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Pedestrians:</strong> Must yield in all crosswalks; pedestrians have strong protection
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Emergency vehicles:</strong> Pull to right side of road and stop
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>School buses:</strong> Stop when red lights flash on all undivided roads
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Rotaries (roundabouts):</strong> Yield to traffic already in the rotary
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
              Massachusetts Insurance Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Compulsory insurance:</strong> All vehicles must be insured
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Minimum coverage:</strong> $20K bodily injury per person, $40K per accident, $5K property damage
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Personal injury protection:</strong> $8K minimum PIP coverage required
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Uninsured motorist coverage:</strong> $20K/$40K minimum required
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Massachusetts SDIP System
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Safe Driver Insurance Plan:</strong> Point system affects insurance rates
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Surchargeable incidents:</strong> At-fault accidents and certain violations
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Appeal process:</strong> Can appeal surchargeable incidents
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Clean record:</strong> Six years without incidents for full credit
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Massachusetts Vehicle Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>License plates:</strong> Rear plate required; front plate required
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Seat belts:</strong> Required for all occupants regardless of age or seating position
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Child restraints:</strong> Required for children under 8 or under 57 inches tall
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Hands-free law:</strong> No handheld electronic devices while driving
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Massachusetts DUI Laws & Penalties': {
    icon: AlertTriangle,
    sections: [
      {
        title: 'Massachusetts DUI Laws and Consequences',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              OUI Penalties and BAC Limits
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
                <strong>First OUI penalties:</strong> License suspension 30 days to 1 year, fines up to $5,000
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Ignition interlock device:</strong> Required for certain OUI convictions
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Implied Consent Law
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Chemical testing:</strong> Required when arrested for OUI
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Refusal penalties:</strong> 180-day license suspension for first refusal
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Administrative suspension:</strong> Immediate suspension separate from criminal penalties
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Hardship license:</strong> May be available for work/education needs
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Massachusetts Parking & Road Signs': {
    icon: Info,
    sections: [
      {
        title: 'Massachusetts Parking Rules',
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
                <strong>Intersections:</strong> No parking within 20 feet of intersection
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Crosswalks:</strong> No parking within 20 feet of crosswalk
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Bus stops:</strong> No parking within 20 feet of bus stop sign
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Snow emergency routes:</strong> Special parking restrictions during snow emergencies
              </li>
            </ul>
          </div>
        `
      },
      {
        title: 'Massachusetts Traffic Signs',
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
                <strong>Rotary signs:</strong> Yield to traffic already in the rotary
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>HOV lane signs:</strong> High occupancy vehicle restrictions
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Move Over Law signs:</strong> Change lanes for emergency vehicles
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Massachusetts Safe Driving Practices': {
    icon: CheckCircle,
    sections: [
      {
        title: 'Massachusetts Urban and Highway Driving',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Urban Driving Skills
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Heavy traffic:</strong> Maintain safe following distance in congested areas
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Rotary navigation:</strong> Yield to traffic already in rotary, signal when exiting
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Pedestrian awareness:</strong> Extra caution in urban areas with heavy foot traffic
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Parallel parking:</strong> Essential skill for urban driving
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              New England Weather Driving
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Winter driving:</strong> Snow, ice, and salt on roads require extra caution
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Nor'easter conditions:</strong> Severe storms with high winds and precipitation
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Fog conditions:</strong> Common near coast, use low beams and reduce speed
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Fall foliage season:</strong> Increased tourist traffic on scenic routes
              </li>
            </ul>
          </div>
        `
      }
    ]
  }
}