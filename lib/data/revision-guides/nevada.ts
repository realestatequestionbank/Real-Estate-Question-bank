import { Target, AlertTriangle, Info, CheckCircle, Sun, MapPin } from 'lucide-react'

export const nevadaRevisionContent = {
  'Nevada Traffic Laws & Legal Requirements': {
    icon: Target,
    sections: [
      {
        title: 'Speed Limits and Traffic Control',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Nevada Speed Limits
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>School zones:</strong> 15 mph when children present or during school hours
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Residential areas:</strong> 25 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Business districts:</strong> 25 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Rural highways:</strong> 70 mph on divided highways
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Interstate highways:</strong> 80 mph (some areas up to 85 mph)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Construction zones:</strong> Posted reduced speeds, fines doubled
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Nevada Right-of-Way Rules
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Four-way stops:</strong> First to stop proceeds first; simultaneous arrival yields to right
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Pedestrians:</strong> Must yield in all crosswalks, marked or unmarked
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Emergency vehicles:</strong> Pull to right and stop completely
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>School buses:</strong> Stop when red lights flash, both directions on undivided roads
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Left turns:</strong> Must yield to oncoming traffic and pedestrians
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
              Nevada Insurance Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Minimum liability coverage:</strong> 25/50/20 ($25K bodily injury per person, $50K per accident, $20K property damage)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>License suspension:</strong> Immediate suspension for driving without insurance
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>SR-22 filing:</strong> Required for serious violations and license reinstatement
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Reinstatement fees:</strong> $50-75 plus proof of future financial responsibility
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Nevada Point System
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>License suspension:</strong> 12 points in 12 months triggers suspension
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Point values:</strong> Most violations = 3-5 points, serious offenses = 8 points
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Traffic school:</strong> Can remove 3 points once per year
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Point reduction:</strong> 1 point removed for each 3 months with no violations
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Nevada Vehicle Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>License plates:</strong> Rear plate required; front plate not required
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Seat belts:</strong> Required for all occupants, primary enforcement
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Child restraints:</strong> Required until age 6 or 60 pounds
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Emissions testing:</strong> Required in Clark County (Las Vegas) and Washoe County (Reno)
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Nevada DUI Laws & Penalties': {
    icon: AlertTriangle,
    sections: [
      {
        title: 'Nevada DUI Laws and Consequences',
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
                <strong>First DUI penalties:</strong> 2 days to 6 months jail, $400-1,000 fine, 90-day license revocation
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Implied Consent and Testing
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Implied consent law:</strong> Driving implies consent to chemical testing
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Test refusal:</strong> 1 year license revocation for first refusal
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Breath test preferred:</strong> Officer's choice of blood, breath, or urine
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Independent test:</strong> Right to additional test at own expense
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Nevada-Specific DUI Laws
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Marijuana DUI:</strong> 2 nanograms/ml or 5 nanograms/ml inactive metabolite limit
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Ignition interlock:</strong> Required for all DUI convictions
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Victim impact panels:</strong> Required education program for offenders
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Open container:</strong> No open alcohol containers in passenger area
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Nevada Parking & Traffic Violations': {
    icon: Info,
    sections: [
      {
        title: 'Parking Rules and Traffic Enforcement',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Nevada Parking Distances
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Fire hydrant:</strong> 15 feet minimum distance
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Crosswalk:</strong> 20 feet from crosswalk at intersection
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Stop sign:</strong> 30 feet from stop sign
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Bus stop:</strong> 30 feet from bus stop sign
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Driveway:</strong> Cannot block public or private driveways
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Las Vegas Strip Parking Rules
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Valet parking:</strong> Widely available at casinos and hotels
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Metered parking:</strong> Strictly enforced downtown and tourist areas
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Resort parking fees:</strong> Many hotels charge for self-parking
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>No stopping zones:</strong> Heavily enforced on Las Vegas Boulevard
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Traffic Violations and Fines
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Speeding fines:</strong> $205+ for 1-10 mph over limit
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Cell phone use:</strong> $50 first offense, $100 second, $250+ subsequent
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Red light violations:</strong> $305 fine plus traffic school option
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>HOV lane violations:</strong> $250+ fine for improper use
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Nevada Safe Driving Practices': {
    icon: CheckCircle,
    sections: [
      {
        title: 'Defensive Driving in Nevada',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Following Distance and Space Management
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>3-second rule:</strong> Minimum following distance in ideal conditions
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Highway speeds:</strong> Increase to 4+ seconds at high speeds
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Large vehicles:</strong> Extra space for trucks and RVs common in Nevada
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Motorcycles:</strong> Give full lane width and extra following distance
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Nevada Highway Driving
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Keep right law:</strong> Use right lanes except when passing
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Lane changes:</strong> Signal well in advance, check blind spots
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Desert driving:</strong> Long straight stretches can cause highway hypnosis
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Tourist traffic:</strong> Be patient with unfamiliar drivers near attractions
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Vulnerable Road Users
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Pedestrians:</strong> High pedestrian traffic on Las Vegas Strip
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Bicyclists:</strong> Must give 3+ feet clearance when passing
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Emergency vehicles:</strong> Move over law for stopped emergency vehicles
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>School zones:</strong> Extra caution during school hours
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Nevada Desert Driving': {
    icon: Sun,
    sections: [
      {
        title: 'Desert Driving Conditions',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Extreme Heat Precautions
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Tire pressure:</strong> Check frequently - heat causes expansion
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Engine overheating:</strong> Monitor temperature gauge constantly
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Air conditioning:</strong> Essential for safety in summer heat
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Fluid levels:</strong> Check coolant, oil, and brake fluid regularly
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Desert Weather Hazards
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Flash floods:</strong> Avoid driving through flooded washes and low areas
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Dust storms:</strong> Pull over completely and wait for visibility to improve
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>High winds:</strong> Common in open desert areas, affect vehicle control
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Temperature extremes:</strong> Can drop significantly at night
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Emergency Preparedness
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Water supply:</strong> Carry extra water for vehicle and passengers
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Emergency kit:</strong> Includes tools, first aid, and communication device
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Full tank:</strong> Keep fuel tank at least half full in remote areas
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Cell coverage:</strong> Limited in remote desert areas
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Nevada-Specific Driving Situations': {
    icon: MapPin,
    sections: [
      {
        title: 'Unique Nevada Driving Challenges',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Las Vegas Metropolitan Area
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Tourist drivers:</strong> Unfamiliar visitors may drive unpredictably
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Strip traffic:</strong> Heavy congestion, frequent lane changes
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Convention center traffic:</strong> Major events cause traffic surges
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Airport traffic:</strong> McCarran approach roads heavily congested
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Rural Nevada Driving
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Long distances:</strong> Plan for extended travel between cities
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Wildlife crossings:</strong> Deer, elk, and wild horses on highways
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Mining vehicles:</strong> Heavy trucks in mining regions
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Military activity:</strong> Restricted areas near military bases
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Mountain and Winter Driving
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Chain requirements:</strong> May be required on mountain passes
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Elevation changes:</strong> Affect vehicle performance and tire pressure
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Lake Tahoe area:</strong> Snow and ice conditions in winter
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>California border:</strong> Different requirements crossing state lines
              </li>
            </ul>
          </div>
        `
      }
    ]
  }
}