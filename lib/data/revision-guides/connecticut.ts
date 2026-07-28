import { Target, AlertTriangle, Info, CheckCircle, Snowflake, Mountain } from 'lucide-react'

export const connecticutRevisionContent = {
  'Connecticut Traffic Laws & Legal Requirements': {
    icon: Target,
    sections: [
      {
        title: 'Speed Limits and Traffic Control',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Connecticut Speed Limits
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>School zones:</strong> 25 mph when children present or signs are posted
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Residential areas:</strong> 25 mph (unless posted otherwise)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Business districts:</strong> 25 mph
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>State highways:</strong> 55 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Interstate highways:</strong> 65 mph (some sections 70 mph)
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
            </ul>
          </div>
        `
      },
      {
        title: 'Insurance and Legal Responsibilities',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Connecticut Insurance Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Minimum liability coverage:</strong> $25,000 per person, $50,000 per accident for bodily injury
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Property damage coverage:</strong> $25,000 minimum
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Uninsured motorist coverage:</strong> $25,000 per person, $50,000 per accident
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>License suspension for no insurance:</strong> Immediate suspension until proof provided
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Point System and Violations
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>License suspension:</strong> 10 or more points in 24 months
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Reckless driving:</strong> 4 points and potential license suspension
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Speeding violations:</strong> 2-5 points depending on speed over limit
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Following too closely:</strong> 4 points
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Vehicle Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>License plates:</strong> Front and rear plates required with current registration
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Seat belts:</strong> Required for all occupants; driver responsible for passengers under 16
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Child restraints:</strong> Required for children under 8 or under 60 pounds
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Annual emissions testing:</strong> Required in certain counties
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
        title: 'Connecticut DUI Laws and Consequences',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              DUI Penalties and Facts
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>First DUI conviction:</strong> $500-$1,000 fine, up to 6 months jail, 45-day license suspension
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>BAC limit:</strong> 0.08% for adults, 0.02% for drivers under 21
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Ignition interlock device:</strong> Required for repeat offenders
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Administrative penalties:</strong> Separate from criminal penalties
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
                <strong>Test refusal consequences:</strong> Immediate 45-day license suspension (first offense)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Repeat refusal:</strong> 18-month license suspension for second refusal
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Types of tests:</strong> Blood, breath, or urine as requested by officer
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Impairment Beyond Alcohol
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Illegal drugs:</strong> Any amount can result in DUI charges
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Prescription medications:</strong> Can impair driving even when legally prescribed
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Over-the-counter medicines:</strong> Cold remedies and other OTC drugs can cause impairment
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Combined substances:</strong> Alcohol + any other drug intensifies impairment effects
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
                <strong>Fire hydrant:</strong> 10 feet minimum distance
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Crosswalk:</strong> 25 feet from marked crosswalk
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Stop sign/traffic light:</strong> 25 feet minimum distance
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Driveway:</strong> Cannot block access
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Bus stops:</strong> 30 feet from bus stop signs
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
              Connecticut Parking Time Limits
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Metered parking:</strong> Must move vehicle after maximum time expires
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Residential overnight parking:</strong> May be restricted in some municipalities
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Snow emergency routes:</strong> No parking when snow emergency declared
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Handicapped spaces:</strong> Minimum $150 fine for illegal parking
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
                <strong>Emergency triangles:</strong> Place 100-200 feet behind vehicle if available
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Stay visible:</strong> Remain near vehicle but away from traffic
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Call for help:</strong> Dial 911 for highway emergencies
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Accident Scene Protocol
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Move to safety:</strong> Get vehicles out of traffic if possible and safe
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Check for injuries:</strong> Call 911 if anyone is hurt
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Exchange information:</strong> Names, insurance, license numbers
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Document scene:</strong> Take photos and notes about what happened
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
                <strong>Ideal conditions:</strong> 3-second rule minimum
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Poor weather conditions:</strong> Increase to 4-6 seconds
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
                <strong>Passing bicyclists:</strong> Allow at least 3 feet clearance by Connecticut law
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Cell Phone and Distraction Laws
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Handheld devices:</strong> Prohibited while driving for all drivers
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Texting ban:</strong> No texting while driving for any age group
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Hands-free only:</strong> Drivers may use hands-free devices
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Emergency exceptions:</strong> May use phone to report emergencies
              </li>
            </ul>
          </div>
        `
      },
      {
        title: 'Connecticut-Specific Driving Challenges',
        content: `
          <h3>Urban Driving Considerations</h3>
          <ul>
            <li><strong>Dense traffic areas:</strong> Hartford, New Haven, Bridgeport require extra caution</li>
            <li><strong>Construction zones:</strong> I-95 and I-84 frequently have work zones with reduced speeds</li>
            <li><strong>Toll plazas:</strong> Reduce speed and be prepared to stop or merge</li>
            <li><strong>Rotaries/roundabouts:</strong> Yield to traffic already in the circle</li>
          </ul>
          
          <h3>Highway and Interstate Driving</h3>
          <ul>
            <li><strong>Merge lanes:</strong> Use full length of acceleration lane to match traffic speed</li>
            <li><strong>Left lane usage:</strong> Keep right except to pass on multi-lane highways</li>
            <li><strong>Exit preparation:</strong> Move to right lane well before your exit</li>
            <li><strong>HOV lanes:</strong> Some areas have carpool lanes during peak hours</li>
          </ul>
        `
      }
    ]
  },
  'Connecticut Winter & Weather Driving': {
    icon: Snowflake,
    sections: [
      {
        title: 'Winter Driving Conditions',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Ice and Snow Driving
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Following distance:</strong> Increase to 6-8 seconds on snow/ice
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Braking technique:</strong> Pump brakes gently on non-ABS vehicles to prevent lockup
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Acceleration:</strong> Gradual acceleration to prevent wheel spin
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Winter tire requirements:</strong> Recommended but not legally required
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Speed reduction:</strong> Drive well below posted limits in winter conditions
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Connecticut Weather Patterns
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Nor'easter storms:</strong> Can bring heavy snow and ice rapidly
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Coastal vs inland:</strong> Coastal areas may get rain while inland gets snow
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Black ice conditions:</strong> Common on bridges and overpasses in early morning
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Fog in valleys:</strong> Dense fog can form in river valleys
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Vehicle Preparation
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Emergency kit:</strong> Include shovel, salt/sand, blankets, flashlight
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Windshield washer fluid:</strong> Use winter-grade fluid rated below freezing
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Battery check:</strong> Cold weather reduces battery capacity
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Fuel level:</strong> Keep tank at least half full to prevent fuel line freezing
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Special Road Users & Situations': {
    icon: Mountain,
    sections: [
      {
        title: 'Sharing the Road Safely',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              School Zones and Buses
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>School bus stopping:</strong> Must stop when red lights flash and stop arm extends
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Divided highways:</strong> Only traffic traveling in same direction must stop
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>School zone speed:</strong> 25 mph when children present
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Crossing guards:</strong> Must obey their signals
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Bicycle and Pedestrian Laws
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>3-foot passing law:</strong> Must allow minimum 3 feet when passing cyclists
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Bike lane respect:</strong> Do not drive or park in designated bike lanes
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Pedestrian right-of-way:</strong> Always yield to pedestrians in crosswalks
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Turning right on red:</strong> Must yield to pedestrians even when allowed
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Large Vehicles and Trucks
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Blind spots:</strong> Trucks have large blind spots on sides and rear
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Following trucks:</strong> Stay back to maintain visibility and stopping distance
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Passing trucks:</strong> Complete pass quickly and safely
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Turning radius:</strong> Give trucks extra room to turn, especially right turns
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Emergency Vehicles and Move Over Law
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Move Over Law:</strong> Change lanes away from stopped emergency vehicles with flashing lights
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Reduce speed:</strong> If unable to move over, reduce speed significantly
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Tow trucks included:</strong> Move Over Law applies to tow trucks and highway maintenance
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Emergency response:</strong> Pull right and stop for approaching emergency vehicles
              </li>
            </ul>
          </div>
        `
      }
    ]
  }
}