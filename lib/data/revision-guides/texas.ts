import { Target, AlertTriangle, Info, CheckCircle, Sun, Car } from 'lucide-react'

export const texasRevisionContent = {
  'Texas Traffic Laws & Legal Requirements': {
    icon: Target,
    sections: [
      {
        title: 'Speed Limits and Traffic Control',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Texas Speed Limits
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>School zones:</strong> 20 mph when children present (may be 15 mph in some areas)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Residential/business areas:</strong> 30 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>County roads:</strong> 60 mph during the day, 55 mph at night
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Interstate highways:</strong> Up to 85 mph (highest in US)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Farm-to-market roads:</strong> 60 mph unless posted otherwise
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Right-of-Way Rules
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Four-way stops:</strong> First to arrive proceeds first; if simultaneous, yield to vehicle on right
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Uncontrolled intersections:</strong> Yield to traffic on the right
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Left turns:</strong> Must yield to oncoming traffic and pedestrians
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Emergency vehicles:</strong> Move over law - change lanes or reduce speed when passing stopped emergency vehicles
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Pedestrians:</strong> Have right-of-way in crosswalks; drivers must stop and remain stopped
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
              Texas Insurance Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Minimum liability coverage:</strong> 30/60/25 ($30K bodily injury per person, $60K per accident, $25K property damage)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>License suspension for no insurance:</strong> License and registration suspended until compliant
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Reinstatement fee:</strong> $175 to restore suspended license
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>TexasSure verification:</strong> State can electronically verify your insurance coverage
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Point System and Violations
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Point accumulation:</strong> 6 points in 3 years may result in license suspension
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Traffic violations:</strong> Most moving violations are 2-3 points each
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Defensive driving course:</strong> Can dismiss one ticket per year and avoid points
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Speeding fines:</strong> Vary by municipality, some cities have very high fines
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Vehicle Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>License plates:</strong> Front and rear plates required
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Seat belts:</strong> Required for all front seat occupants and passengers under 17
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Child safety seats:</strong> Required for children under 8 unless over 4'9" tall
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Vehicle inspection:</strong> Annual inspection required for most vehicles
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Texas DUI Laws & Penalties': {
    icon: AlertTriangle,
    sections: [
      {
        title: 'Texas DWI Laws and Consequences',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              DWI Penalties and Facts
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>First DWI offense:</strong> Up to $2,000 fine, 3-180 days in jail, license suspension up to 1 year
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>BAC limit:</strong> 0.08% for adults, 0.02% for under 21 (zero tolerance)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Enhanced penalties:</strong> Higher fines for BAC 0.15% or above
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Administrative license revocation:</strong> Automatic suspension separate from criminal case
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Implied Consent and Testing
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Implied consent law:</strong> License to drive implies consent to chemical testing
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Test refusal penalties:</strong> License suspension for 180 days (first refusal)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>No-refusal periods:</strong> Blood warrants may be obtained during holidays and special enforcement
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Test types:</strong> Breath, blood, or urine as determined by law enforcement
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Texas Specific DWI Laws
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Open container law:</strong> No open alcoholic beverages allowed in passenger area of vehicle
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Boating while intoxicated:</strong> Same penalties as DWI apply to boat operation
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>DWI with child passenger:</strong> Enhanced penalties if child under 15 is in vehicle
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Ignition interlock:</strong> May be required for license reinstatement
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Texas Parking & Traffic Violations': {
    icon: Info,
    sections: [
      {
        title: 'Parking Rules and Distances',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Legal Parking Distances
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
                <strong>Driveway:</strong> Cannot block public or private driveways
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Curb painting:</strong> Follow local color-coded curb restrictions
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Texas Highway Parking Rules
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Highway shoulder:</strong> Parking prohibited except for emergencies
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Hill parking:</strong> Turn wheels toward curb when facing downhill, away when facing uphill
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Parallel parking:</strong> Must be within 18 inches of curb
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Disabled parking:</strong> Fines up to $500 for illegal use of handicapped spaces
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Traffic Violations and Fines
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Speeding fines:</strong> Vary widely by city (some cities have $200+ fines for minimal speeding)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>School zone violations:</strong> Fines doubled when children are present
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Red light cameras:</strong> Used in many Texas cities with mailed citations
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Move over law violations:</strong> Fines up to $2,000 if emergency worker is injured
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Safe Driving in Texas': {
    icon: CheckCircle,
    sections: [
      {
        title: 'Defensive Driving and Space Management',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Following Distance Rules
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Standard conditions:</strong> 3-4 second rule minimum
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Highway driving:</strong> Increase to 4-6 seconds at high speeds
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Behind large trucks:</strong> Extra distance needed - if you can't see their mirrors, they can't see you
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Motorcycles:</strong> Give full lane and extra following distance
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Texas Highway Safety
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Lane changing:</strong> Signal 100 feet before changing lanes
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Left lane usage:</strong> Keep right except to pass; left lane is for passing
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Aggressive driving:</strong> Road rage is common in Texas cities - avoid confrontation
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Cell phone use:</strong> Texting while driving prohibited statewide
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Emergency Procedures
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Vehicle breakdown:</strong> Move to shoulder, turn on hazards, exit away from traffic
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Emergency vehicles:</strong> Move over or slow down when passing stopped emergency vehicles
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Accident reporting:</strong> Must report if damage exceeds $1,000 or injury occurs
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Hit and run:</strong> Must stop and provide information; leaving is a felony if injury involved
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Texas Heat & Weather Driving': {
    icon: Sun,
    sections: [
      {
        title: 'Extreme Heat Driving Conditions',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Summer Heat Precautions
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Tire pressure:</strong> Check frequently - heat causes tire pressure to increase
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Engine overheating:</strong> Monitor temperature gauge, carry extra coolant
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Air conditioning:</strong> Essential for safety - dehydration and heat stroke risks
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Tire blowouts:</strong> More common in extreme heat - inspect tires regularly
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Weather-Related Hazards
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Flash floods:</strong> Very dangerous in Texas - never drive through flooded roads
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Severe thunderstorms:</strong> Can develop quickly with high winds and hail
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Dust storms:</strong> Common in West Texas - pull over and wait
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Ice storms:</strong> Rare but extremely dangerous when they occur
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Vehicle Maintenance in Texas Climate
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Battery life:</strong> Extreme heat shortens battery life - test regularly
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Windshield wipers:</strong> Replace frequently due to UV damage
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Emergency supplies:</strong> Water, tools, and communication device essential
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Fuel management:</strong> Keep tank at least half full in remote areas
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Texas-Specific Road Situations': {
    icon: Car,
    sections: [
      {
        title: 'Unique Texas Driving Challenges',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Urban Driving Challenges
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Houston traffic:</strong> Aggressive drivers, complex highway system, frequent lane changes
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Dallas-Fort Worth:</strong> Heavy truck traffic, multiple airport approaches
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Austin growth:</strong> Rapid development, unfamiliar drivers, construction zones
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>San Antonio:</strong> Tourist traffic, older road layouts, military vehicle presence
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Rural Texas Driving
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Ranch vehicles:</strong> Watch for large pickup trucks, trailers, and farm equipment
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Oil field traffic:</strong> Heavy industrial vehicles in petroleum regions
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Wildlife crossings:</strong> Deer, wild hogs, and cattle on rural roads
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Border patrol checkpoints:</strong> Mandatory stops near Mexican border
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Special Texas Road Features
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Frontage roads:</strong> Service roads parallel to highways - understand merge patterns
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>HOV lanes:</strong> High-occupancy vehicle lanes in major cities during rush hours
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Toll roads:</strong> Electronic tolling common - TxTag or cash required
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>U-turn regulations:</strong> U-turns allowed at intersections unless posted otherwise
              </li>
            </ul>
          </div>
        `
      }
    ]
  }
}