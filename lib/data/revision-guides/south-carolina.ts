import { Target, AlertTriangle, Info, CheckCircle, Car, Users } from 'lucide-react'

export const southCarolinaRevisionContent = {
  'South Carolina Traffic Laws & Legal Requirements': {
    icon: Target,
    sections: [
      {
        title: 'Speed Limits and Traffic Control',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              South Carolina Speed Limits
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>School zones:</strong> 25 mph when children present or signs are flashing
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Residential areas:</strong> 30 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Business districts:</strong> 30 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Highways:</strong> 55-70 mph depending on road designation
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Interstate highways:</strong> Up to 70 mph where posted
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
                <strong>Left turns:</strong> Must yield to oncoming traffic and pedestrians in all situations
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Emergency vehicles:</strong> Pull to the right and stop completely until they pass
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Pedestrians:</strong> Always have right-of-way in crosswalks, marked or unmarked
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Green signal turning:</strong> Must yield to pedestrians and other vehicles lawfully in intersection
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
              South Carolina Insurance Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Bodily injury per person:</strong> $25,000 minimum
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Bodily injury per accident:</strong> $50,000 minimum
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Property damage coverage:</strong> $25,000 minimum
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Driving without insurance:</strong> Fines, license suspension, vehicle impoundment possible
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>SR-22 requirement:</strong> Must maintain for 3 years after DUI conviction
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Point System and Violations
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>License suspension:</strong> 12 or more points accumulated
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>2-point violations:</strong> Minor traffic infractions
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>4-point violations:</strong> Speeding 10 mph over limit
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>6-point violations:</strong> Reckless driving and serious offenses
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Vehicle Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>License plates:</strong> Required on rear with current registration
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Seat belts:</strong> Required for all occupants; driver responsible for passengers under 18
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Vehicle inspection:</strong> Required annually in some counties
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
        title: 'South Carolina DUI Laws and Consequences',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              DUI Penalties and BAC Limits
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Legal BAC limit:</strong> 0.08% for drivers 21 and over
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>First offense license suspension:</strong> 6 months
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Second offense license suspension:</strong> 1 year (no provisional license)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Third offense:</strong> Felony charge with 2-year suspension
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>ADSAP requirement:</strong> Alcohol and Drug Safety Action Program completion required
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Chemical Test Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Implied consent:</strong> By driving, you automatically consent to chemical testing
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Test refusal consequences:</strong> Automatic license suspension
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Second offense ignition interlock:</strong> Required for 2 years after suspension
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Types of tests:</strong> Blood, breath, or urine as requested by officer
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Jail Time and Fines
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>First offense:</strong> Misdemeanor with potential jail time and fines
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Third offense jail time:</strong> 60 days minimum, up to 3 years maximum
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>BAC .08% - .10%:</strong> Standard penalties apply
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Higher BAC levels:</strong> Enhanced penalties and longer sentences
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
                <strong>Stop sign/traffic signal:</strong> 30 feet on approach side
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Fire station driveway:</strong> 20 feet from entrance
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Opposite fire station:</strong> 75 feet when properly posted
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Driveway:</strong> Cannot block private driveway access
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
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Parallel Parking Steps
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Step 1:</strong> Find space at least 6 feet longer than your vehicle
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Step 2:</strong> Pull alongside front car, mirrors aligned
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Step 3:</strong> Reverse with wheel turned right until 45° angle
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Step 4:</strong> Straighten wheel and continue backing
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Step 5:</strong> Turn wheel left to straighten in space
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
                <strong>Hazard flashers:</strong> Turn on immediately to warn others
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Hood up:</strong> Raise hood to signal mechanical trouble
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Stay visible:</strong> Remain near vehicle but away from traffic
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Call for help:</strong> Use emergency services (911) or roadside assistance
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Accident Scene Protocol
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>If not involved:</strong> Keep moving, don't stop to look (rubbernecking)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>If emergency help present:</strong> Continue driving, stay focused
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Don't block lanes:</strong> Avoid stopping in traffic unnecessarily
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Emergency lane use:</strong> Only for genuine emergencies
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
                <strong>Behind large vehicles:</strong> Extra space needed for visibility around trucks
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Following motorcycles:</strong> Give full lane width and extra distance
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Night driving:</strong> Increase following distance due to reduced visibility
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Passing Safety Procedures
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Signal distance:</strong> At least 100 feet before changing lanes
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Check blind spots:</strong> Look over shoulder before moving
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Return to lane:</strong> When you can see both headlights in rearview mirror
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Passing bicyclists:</strong> Allow at least 3 feet clearance
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Two-lane roads:</strong> Only pass when safe and legal, never on hills or curves
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Defensive Driving Principles
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Stay alert:</strong> Scan road constantly, check mirrors every 5-8 seconds
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Anticipate hazards:</strong> Watch for potential problems from other drivers
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Communicate intentions:</strong> Use signals, lights, and horn appropriately
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Never assume:</strong> Don't trust other drivers to follow traffic laws
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Maintain escape routes:</strong> Always have a plan if traffic situation changes
              </li>
            </ul>
          </div>
        `
      },
      {
        title: 'Common Test Failure Areas',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Most Common Permit Test Mistakes
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Yielding to pedestrians:</strong> Must yield even if pedestrian is jaywalking
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Yielding to bicyclists:</strong> Treat bicycles as vehicles with same rights
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Emergency vehicle right-of-way:</strong> Pull right and stop completely
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Safe following distance:</strong> 3-second minimum, more in poor conditions
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Intersection rules:</strong> Know who goes first at 4-way stops
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Road Sign Recognition
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Stop signs:</strong> Complete stop required, not rolling stop
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Yield signs:</strong> Slow down and give right-of-way to others
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Speed limit signs:</strong> Maximum safe speed under ideal conditions
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Warning signs:</strong> Yellow signs alert to road conditions ahead
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Construction signs:</strong> Orange signs require reduced speed and caution
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
        title: 'Getting Your South Carolina Permit',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Age and Application Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Minimum age:</strong> 15 years old for regular or motorcycle permit
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Required documents:</strong> ID, Social Security proof, residency proof
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Under 18:</strong> Must bring adult listed on Consent for Minor form (SCRealEstate Form 447-CM)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Permit fee:</strong> $2.50 for permit application
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Written test fee:</strong> $2.00 for taking the knowledge test
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Test Structure and Passing
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Total questions:</strong> 30 questions on the written knowledge test
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Passing score:</strong> 24 correct answers (80%) required to pass
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Test content:</strong> Road signs, traffic laws, safe driving practices
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>If you fail:</strong> Must wait 2 days before retaking the test
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Study material:</strong> Official South Carolina Driver's Manual
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Permit Restrictions (Class D Beginner's Permit)
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>6 a.m. to midnight:</strong> Must have licensed driver (21+, 1+ year experience) in front seat
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Midnight to 6 a.m.:</strong> Must have adult listed on Consent for Minor form in front seat
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Supervised driving:</strong> Always requires licensed adult supervision
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>No solo driving:</strong> Cannot drive alone under any circumstances
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
                <strong>Motorcycles:</strong> Harder to see and judge speed/distance
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Full lane rights:</strong> Motorcycles entitled to full lane width
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Bicycle passing:</strong> Allow minimum 3 feet clearance when passing
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Watch for swerving:</strong> Cyclists may swerve to avoid road hazards
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Door zone:</strong> Check for cyclists before opening car doors
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Pedestrian Safety
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Always yield:</strong> Drivers must yield to pedestrians even if they're crossing illegally
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Crosswalk rules:</strong> Pedestrians have right-of-way in marked and unmarked crosswalks
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>School zones:</strong> Extra caution around children - they're unpredictable
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Green signals:</strong> Pedestrians may proceed across roadway in crosswalks
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Turning right on red:</strong> Must yield to pedestrians in crosswalk
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
                <strong>Following trucks:</strong> Stay back to maintain visibility and escape route
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Passing trucks:</strong> Pass quickly and safely, avoid lingering in blind spots
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Wide turning radius:</strong> Give trucks extra room to complete turns
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Don't cut in front:</strong> Trucks need more distance to stop
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Construction and Work Zones
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Reduced speed:</strong> Always slow down in marked construction zones
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Lane changes:</strong> Merge early when lanes are closed ahead
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Worker safety:</strong> Increased fines and penalties for violations in work zones
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Follow flaggers:</strong> Obey construction workers directing traffic
              </li>
            </ul>
          </div>
        `
      }
    ]
  }
}