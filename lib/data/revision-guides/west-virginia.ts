import { Target, AlertTriangle, Info, CheckCircle, Car, Users } from 'lucide-react'

export const westVirginiaRevisionContent = {
  'West Virginia Traffic Laws & Legal Requirements': {
    icon: Target,
    sections: [
      {
        title: 'Speed Limits and Traffic Control',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              West Virginia Speed Limits
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>School zones:</strong> 15 mph during school hours or when children present
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Business districts:</strong> 20 mph (for non-passenger vehicles with pneumatic tires)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Residential areas:</strong> 25 mph (for non-passenger vehicles with pneumatic tires)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>County roads:</strong> 40 mph (for non-passenger vehicles with pneumatic tires)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Posted speed limits:</strong> Follow posted signs - may vary by location and road type
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Right-of-Way Rules
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Four-way stops:</strong> First vehicle to arrive goes first; if arriving simultaneously, vehicle on right has right-of-way
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Uncontrolled intersections:</strong> Vehicle on the right always has right-of-way
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Left turns:</strong> Must yield to oncoming traffic and pedestrians
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Emergency vehicles:</strong> Pull to the right and stop completely until they pass
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Pedestrians:</strong> Always have right-of-way in crosswalks
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>School zones:</strong> Extra caution required - violations carry enhanced penalties
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
              West Virginia Insurance Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Minimum liability coverage:</strong> Required by state law (specific amounts vary)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>SR-22 insurance:</strong> Required for 3 years after DUI conviction
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Financial responsibility:</strong> Must carry proof of insurance at all times
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Lapse in coverage:</strong> Insurance company must notify Real Estate immediately
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>License reinstatement:</strong> Proof of SR-22 required before license restoration
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Traffic Violations and Penalties
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Speed violations:</strong> All speeding violations are misdemeanors
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>School zone violations:</strong> Enhanced penalties including possible jail time
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Speeding 15+ mph in school zone:</strong> Up to 6 months jail when children present
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Work zone violations:</strong> Higher fines in construction areas
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Parking violations:</strong> Fines increase with repeat offenses ($100, $200, $500)
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Vehicle Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>License plates:</strong> Required registration and current tags
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Seat belts:</strong> Required for all occupants
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Child restraints:</strong> Proper car seat/booster seat systems required
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Vehicle inspection:</strong> Annual safety inspection may be required
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Impaired Driving Laws & Penalties': {
    icon: AlertTriangle,
    sections: [
      {
        title: 'West Virginia DUI Laws and Consequences',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              DUI Penalties and BAC Limits
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Adult drivers (21+):</strong> 0.08% BAC or higher is illegal
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Minor drivers (under 21):</strong> 0.02% BAC or higher is illegal
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Commercial drivers:</strong> 0.04% BAC or higher is illegal
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>First offense license revocation:</strong> 6 months (ignition interlock available after 45 days)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Treatment program:</strong> Must complete before license reinstatement
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Escalating Penalties for Repeat Offenses
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Second offense jail time:</strong> 6 months to 1 year
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Second offense fines:</strong> $1,000 to $3,000 plus court costs
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Second offense license revocation:</strong> Up to 10 years possible
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Second offense ignition interlock:</strong> Required for 2 years from reinstatement
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Third offense jail time:</strong> 1 to 3 years
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Third offense fines:</strong> $3,000 to $5,000 plus court costs
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Chemical Testing and Implied Consent
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Implied consent:</strong> By driving, you consent to chemical testing
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Test refusal consequences:</strong> Automatic license suspension
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>SR-22 requirement:</strong> Must maintain for 3 years after conviction
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Types of tests:</strong> Blood, breath, or urine as requested by officer
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Parking, Stopping & Vehicle Operation': {
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
                <strong>Crosswalk at intersection:</strong> 20 feet from crosswalk
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Traffic control devices:</strong> 30 feet from flashing beacons, stop signs, or traffic signals on approach side
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Fire station driveway:</strong> 20 feet from entrance
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Opposite fire station:</strong> 75 feet from entrance when properly posted
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Prohibited areas:</strong> Crosswalks, sidewalks, intersections, driveways, fire lanes
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Parking Violation Penalties
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>First offense:</strong> Fine not exceeding $100
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Second offense (within 1 year):</strong> Fine not exceeding $200
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Third or subsequent offense:</strong> Fine not exceeding $500
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>All violations:</strong> Classified as misdemeanors
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Hill Parking Procedures
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Uphill with curb:</strong> Turn wheels AWAY from curb (toward traffic)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Downhill with curb:</strong> Turn wheels TOWARD curb (away from traffic)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>No curb present:</strong> Turn wheels toward shoulder/edge of road
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Always:</strong> Set parking brake on any incline
              </li>
            </ul>
          </div>
        `
      },
      {
        title: 'Vehicle Breakdown and Emergency Procedures',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Breakdown Response
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Get off roadway:</strong> Move as far right as safely possible
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Hazard flashers:</strong> Turn on immediately to warn other drivers
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Hood up:</strong> Raise hood to signal mechanical trouble
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Stay visible and safe:</strong> Remain near vehicle but away from traffic
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Call for help:</strong> Use emergency services (911) or roadside assistance
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Emergency Vehicle Response
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Pull right and stop:</strong> Move as far right as possible and stop completely
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Don't block intersections:</strong> Pull past intersection before stopping if possible
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Resume driving:</strong> Only after emergency vehicle completely passes
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Multiple emergency vehicles:</strong> Wait for all vehicles to pass
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Safe Driving Practices & Defensive Driving': {
    icon: CheckCircle,
    sections: [
      {
        title: 'Following Distance and Space Management',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Following Distance Rules
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Three-second rule:</strong> Minimum safe following distance in good conditions
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Poor weather conditions:</strong> Increase to 4-6 seconds or more
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Mountain/hill driving:</strong> Extra following distance for steep grades
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Behind large vehicles:</strong> Extra space needed for visibility
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Following motorcycles:</strong> Give full lane width and extra distance
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Lane Changes and Signaling
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Signal early:</strong> Use turn signals well in advance of lane changes
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Check blind spots:</strong> Look over shoulder before changing lanes
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Hand signals:</strong> Know proper hand signals as backup communication
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Merge safely:</strong> Match traffic speed when entering highways
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Double-check mirrors:</strong> Use all mirrors to monitor traffic around you
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Defensive Driving Principles
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Stay alert:</strong> Constantly scan the road and check mirrors
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Anticipate hazards:</strong> Watch for potential problems from other drivers
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Avoid distractions:</strong> Focus on driving, minimize phone and other distractions
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Weather awareness:</strong> Adjust driving for poor weather conditions
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Emergency situations:</strong> Know how to handle brake failure, tire blowouts
              </li>
            </ul>
          </div>
        `
      },
      {
        title: 'Common Test Topics and Road Signs',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Frequently Tested Concepts
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Emergency vehicle right-of-way:</strong> Always pull right and stop completely
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>School zone speed limits:</strong> 15 mph when children present
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Pedestrian safety:</strong> Always yield to pedestrians in crosswalks
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Railroad crossings:</strong> Stop when signals are active, look and listen
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Seat belt usage:</strong> Required for all occupants
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Road Signs and Traffic Signals
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Stop signs:</strong> Complete stop required, not rolling stop
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Yield signs:</strong> Slow down and give right-of-way to others
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Warning signs:</strong> Yellow signs alert to road conditions ahead
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Construction signs:</strong> Orange signs require reduced speed and caution
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Lane markings:</strong> Understand solid and dashed line meanings
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Permit Requirements & Testing': {
    icon: Car,
    sections: [
      {
        title: 'Getting Your West Virginia Permit',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Age and Application Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Minimum age:</strong> 15 years old for instruction permit
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Birth certificate:</strong> Original or certified copy of US-issued birth certificate or valid US passport
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Social Security:</strong> Original Social Security card, W-2, or payroll stub
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>WV residency proof:</strong> School-issued Driver's Eligibility Certificate preferred
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Parental consent:</strong> Written consent from parent or legal guardian required
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Driver's Eligibility Certificate:</strong> Current certificate from school required
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Test Structure and Passing
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Total questions:</strong> 25 multiple-choice questions
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Passing score:</strong> 19 correct answers (76%) required to pass
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Test content:</strong> Traffic rules, regulations, signs, and markings
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Vision test:</strong> Must also pass vision screening
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>If you fail:</strong> Must wait 7 days and pay retest fee before retaking
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Test fee:</strong> $5.00 for permit test
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Graduated Driver License Program
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Phase 1:</strong> Instruction Permit (first phase of GDL program for under 18)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Minimum permit period:</strong> Must hold permit for at least 180 days
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Practice requirement:</strong> 50 hours behind-the-wheel practice (10 hours at night)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Age requirement:</strong> Must turn 16 before advancing to next phase
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Skills test:</strong> Must pass road test to advance to Intermediate License
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Special Road Users & Situations': {
    icon: Users,
    sections: [
      {
        title: 'Sharing the Road Safely',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Motorcycles and Bicycles
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Motorcycles:</strong> More difficult to see and judge speed/distance
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Full lane rights:</strong> Motorcycles entitled to full lane width
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Bicycle safety:</strong> Allow adequate clearance when passing cyclists
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Watch for swerving:</strong> Cyclists may swerve to avoid road hazards
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Door zone safety:</strong> Check for cyclists before opening car doors
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Pedestrian Safety
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Always yield:</strong> Drivers must yield to pedestrians in crosswalks
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>School zones:</strong> Extra caution around children - they're unpredictable
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Crosswalk rules:</strong> Both marked and unmarked crosswalks require yielding
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Intersection safety:</strong> Watch for pedestrians when turning
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Visibility issues:</strong> Be extra careful in poor weather or low light
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Large Vehicles and Trucks
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Blind spots:</strong> Large blind spots on both sides, front, and rear
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Following trucks:</strong> Stay back to maintain visibility and stopping distance
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Passing trucks:</strong> Pass quickly and safely, don't linger in blind spots
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Turning radius:</strong> Give trucks extra room to complete wide turns
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Mountain driving:</strong> Be aware of trucks on steep grades
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Weather and Mountain Driving
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Mountain conditions:</strong> Use lower gears on steep grades
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Poor weather:</strong> Reduce speed and increase following distance
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Fog and rain:</strong> Use headlights and reduce speed significantly
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Ice and snow:</strong> Extremely cautious driving required
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Construction zones:</strong> Reduced speeds and extra caution required
              </li>
            </ul>
          </div>
        `
      }
    ]
  }
}