import { Target, AlertTriangle, Info, CheckCircle, CloudRain, Mountain } from 'lucide-react'

export const washingtonRevisionContent = {
  'Washington Traffic Laws & Legal Requirements': {
    icon: Target,
    sections: [
      {
        title: 'Speed Limits and Traffic Control',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Washington Speed Limits
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>School zones:</strong> 20 mph when children present or signs flashing
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Residential areas:</strong> 25 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>City streets:</strong> 30 mph in business districts
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>County roads:</strong> 50 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Highways/interstates:</strong> 60-70 mph (some rural areas up to 75 mph)
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Washington Right-of-Way Rules
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Four-way stops:</strong> First to stop proceeds first; if simultaneous, yield to right
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Pedestrians:</strong> Must yield at all crosswalks and intersections
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Emergency vehicles:</strong> Pull to right and stop completely
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>School buses:</strong> Stop when red lights flash on both sides of road
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Roundabouts:</strong> Yield to traffic already in the circle
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
              Washington Insurance Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Minimum liability coverage:</strong> 25/50/10 ($25K bodily injury per person, $50K per accident, $10K property damage)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>No-fault insurance:</strong> Washington is a fault-based state
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Uninsured motorist coverage:</strong> Must be offered by insurance companies
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>SR-22 filing:</strong> Required for serious violations or suspended licenses
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Washington Violation System
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Serious violations:</strong> No formal point system, but DOL tracks violations
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Habitual traffic offender:</strong> License suspended for repeat major violations
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Negligent driving:</strong> 1st degree is criminal, 2nd degree is traffic infraction
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>License suspension:</strong> DOL may suspend for pattern of violations
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Washington Vehicle Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>License plates:</strong> Rear plate required; front plate not required
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Seat belts:</strong> Required for all occupants; primary enforcement
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Child restraints:</strong> Required until age 8 or 4'9" tall
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Emissions testing:</strong> Required in certain counties for older vehicles
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Washington DUI Laws & Penalties': {
    icon: AlertTriangle,
    sections: [
      {
        title: 'Washington DUI Laws and Consequences',
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
                <strong>First DUI penalties:</strong> 90-day license suspension, $1,195+ fine, possible jail time
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Implied Consent and Testing
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Implied consent:</strong> Driving implies consent to BAC testing
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Test refusal:</strong> 1 year license revocation for first refusal
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Breath test priority:</strong> Breath test is the preferred method
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Independent test:</strong> Right to additional independent test at own expense
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Washington-Specific DUI Laws
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Marijuana DUI:</strong> 5.0 nanograms/ml THC limit for adults
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Zero tolerance under 21:</strong> Any detectable THC for drivers under 21
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Ignition interlock:</strong> Required for all DUI convictions
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>24/7 sobriety program:</strong> May be required for repeat offenders
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Washington Parking & Moving Violations': {
    icon: Info,
    sections: [
      {
        title: 'Parking Rules and Traffic Violations',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Washington Parking Distances
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Fire hydrant:</strong> 15 feet minimum distance
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Crosswalk:</strong> 20 feet from crosswalk at intersection
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Bus stop:</strong> 30 feet from bus stop sign
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Stop sign:</strong> 30 feet from stop sign
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Driveway:</strong> 5 feet from public or private driveway
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Hill Parking and Special Situations
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Uphill parking:</strong> Turn wheels away from curb, set parking brake
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Downhill parking:</strong> Turn wheels toward curb, set parking brake
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Seattle hills:</strong> Especially important due to steep grades
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Ferry loading:</strong> Follow attendant directions, secure vehicle properly
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Moving Violations and Fines
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Speeding fines:</strong> Vary by jurisdiction, work zones have higher fines
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Cell phone use:</strong> $136+ fine for handheld device use
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>HOV lane violations:</strong> $186+ fine for improper use
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Failure to yield:</strong> $139+ fine for not yielding to pedestrians
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Washington Safe Driving Practices': {
    icon: CheckCircle,
    sections: [
      {
        title: 'Defensive Driving in Washington',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Following Distance and Space Management
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Basic rule:</strong> 3-second following distance in ideal conditions
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Wet conditions:</strong> Increase to 4-6 seconds (common in Washington)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Large vehicles:</strong> Extra space for trucks and buses
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Motorcycles:</strong> Give full lane width and extra following distance
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Washington Highway Driving
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>HOV lanes:</strong> 2+ occupants required during posted hours
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Keep right law:</strong> Use right lanes except when passing
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Lane changes:</strong> Signal well in advance, check blind spots
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Merge courtesy:</strong> Allow merging vehicles to enter safely
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Vulnerable Road Users
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Bicyclists:</strong> Must give 3+ feet clearance when passing
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Pedestrians:</strong> Always yield right-of-way in crosswalks
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>School zones:</strong> Reduced speeds when children present
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Emergency vehicles:</strong> Move over law - change lanes or slow down
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Washington Weather Driving': {
    icon: CloudRain,
    sections: [
      {
        title: 'Rain and Winter Driving Conditions',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Wet Weather Driving
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Rain is common:</strong> Washington gets frequent rain - adjust driving accordingly
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Reduced traction:</strong> Increase following distance to 4-6 seconds
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Hydroplaning risk:</strong> Slow down, avoid sudden movements
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Headlight use:</strong> Turn on headlights when wipers are needed
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Winter and Mountain Driving
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Traction tires:</strong> Required on mountain passes November 1 - March 31
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Chain requirements:</strong> Carry chains when traction tire signs are posted
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Black ice:</strong> Common on bridges, overpasses, and shaded areas
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Snow removal:</strong> Clear all snow from vehicle before driving
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Fog and Low Visibility
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Fog conditions:</strong> Common near water and in valleys
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Low beam headlights:</strong> Use low beams in fog, not high beams
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Slow down significantly:</strong> Drive according to visibility distance
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Use fog lights:</strong> If equipped, use front fog lights appropriately
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Washington-Specific Driving Situations': {
    icon: Mountain,
    sections: [
      {
        title: 'Unique Washington Driving Challenges',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Ferry and Bridge Driving
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Ferry loading:</strong> Follow attendant directions, turn off engine, set brake
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Ferry unloading:</strong> Wait for signal, start engine only when directed
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Bridge winds:</strong> High winds on Puget Sound bridges affect vehicle control
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Toll collection:</strong> Good to Go! passes or cash accepted
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Metropolitan Area Challenges
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Seattle traffic:</strong> Heavy congestion, steep hills, one-way streets
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Spokane conditions:</strong> Snow and ice more common than western Washington
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Tacoma area:</strong> Industrial traffic, port access roads
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Vancouver proximity:</strong> Canadian border crossing procedures
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Rural and Mountain Driving
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Logging trucks:</strong> Heavy, wide loads on rural roads - give extra space
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Wildlife crossings:</strong> Deer, elk, and bears on rural highways
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Mountain passes:</strong> I-90 Snoqualmie Pass, US 2 Stevens Pass chain requirements
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Remote areas:</strong> Limited cell coverage, carry emergency supplies
              </li>
            </ul>
          </div>
        `
      }
    ]
  }
}