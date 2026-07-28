import { Target, AlertTriangle, Info, CheckCircle, Sun, Car, BookOpen, Users } from 'lucide-react'

export const floridaRevisionContent = {
  'Florida Traffic Laws & Speed Limits': {
    icon: Target,
    sections: [
      {
        title: 'Speed Limits',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Florida Speed Limits — Know These Numbers
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>School zones:</strong> 15–20 mph when children are present or flashing signals active
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Residential areas:</strong> 30 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Business districts:</strong> 30 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Unpaved roads:</strong> 35 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>State highways (rural, 2-lane):</strong> 60 mph
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Divided highways (rural):</strong> 70 mph
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Interstate highways:</strong> 70 mph (up to 75 mph on some sections)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Construction zones:</strong> Reduced posted speeds — fines doubled
              </li>
            </ul>
          </div>

          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Right-of-Way Rules
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Four-way stops:</strong> First to stop proceeds first; if simultaneous, yield to the vehicle on the right
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>T-intersections:</strong> Vehicles on the terminating road yield to vehicles on the through road
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Roundabouts:</strong> Yield to vehicles already inside the roundabout — enter only when there is a safe gap
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Pedestrians:</strong> Must yield at all crosswalks — marked and unmarked
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Emergency vehicles:</strong> Pull to the right and stop completely until vehicle passes
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Entering a roadway:</strong> Yield to all traffic when pulling from a driveway, alley, or private road
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Drawbridges:</strong> Stop when signals indicate the bridge is opening
              </li>
            </ul>
          </div>

          <div style="margin-bottom: 0;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Florida Insurance & Vehicle Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Personal Injury Protection (PIP):</strong> $10,000 minimum — required for all registered vehicles
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Property Damage Liability:</strong> $10,000 minimum — required
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>No-fault state:</strong> PIP covers your own medical expenses regardless of who caused the crash
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Seat belts:</strong> Required for all front-seat occupants and all passengers under 18
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Child restraints:</strong> Required for all children under 6 years old
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>License plates:</strong> Rear plate required; front plate not required in Florida
              </li>
            </ul>
          </div>
        `
      },
      {
        title: 'Florida Point System',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Driver License Points
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>License suspended:</strong> 12 points in 12 months → 30-day suspension
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>License suspended:</strong> 18 points in 18 months → 3-month suspension
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>License suspended:</strong> 24 points in 36 months → 1-year suspension
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Most violations:</strong> 3 points (e.g., moving violation resulting in crash = 4 pts)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Serious violations:</strong> 6 points (e.g., leaving the scene of a crash with injury)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Traffic school:</strong> Can elect school once every 12 months to withhold points
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Point reduction:</strong> Points are calculated from the date of conviction
              </li>
            </ul>
          </div>
        `
      }
    ]
  },

  'Florida Move Over & School Bus Laws': {
    icon: AlertTriangle,
    sections: [
      {
        title: 'Move Over Law — Frequently Tested',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Florida Move Over Law
            </h3>
            <p style="margin-bottom: 1rem; color: #374151;">Florida's Move Over Law is one of the most tested topics on the permit exam. Know it thoroughly.</p>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>When to move over:</strong> When you see stopped emergency vehicles, law enforcement, utility vehicles, sanitation vehicles, or tow trucks with lights flashing
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>If you can change lanes safely:</strong> Move over one lane away from the stopped vehicle
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>If you cannot change lanes safely:</strong> Slow down below the posted speed limit — slow to a speed that is 20 mph less than posted, or 5 mph if the posted limit is 20 mph or less
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Applies on all roads:</strong> Highways and local roads
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Penalty:</strong> Moving violation — 3 points and fines
              </li>
            </ul>
          </div>

          <div style="margin-bottom: 0;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Vulnerable Road User Law
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Who is protected:</strong> Pedestrians, cyclists, motorcyclists, people in wheelchairs, skaters
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Required clearance:</strong> Leave at least 3 feet when passing a cyclist
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Crash with vulnerable user:</strong> Enhanced penalties apply
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Crosswalks:</strong> Must stop and yield to pedestrians — failure is a moving violation
              </li>
            </ul>
          </div>
        `
      },
      {
        title: 'School Bus Laws — Frequently Tested',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              When to Stop for a School Bus
            </h3>
            <p style="margin-bottom: 1rem; color: #374151;">This is a very common test topic — the divided vs. undivided highway distinction trips many students up.</p>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Undivided road (both directions):</strong> ALL vehicles in BOTH directions must stop when the bus displays red flashing lights and extended stop arm
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Divided highway (physical median):</strong> Only vehicles traveling in the SAME direction must stop — vehicles on the opposite side of a raised median do NOT stop
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Multi-lane highway (5+ lanes):</strong> Only vehicles traveling in the same direction must stop
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>When to proceed:</strong> Only when the bus resumes motion, the lights stop flashing, or the driver signals you to proceed
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Penalty for violation:</strong> Moving violation, fine up to $400, and 4 points on license
              </li>
            </ul>
          </div>

          <div style="margin-bottom: 0;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              School Zones
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Speed limit:</strong> 15–20 mph when children are present or flashing signals are on
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Fines doubled:</strong> All traffic violations in school zones carry double fines
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Applies:</strong> Only during school hours and when signals are active
              </li>
            </ul>
          </div>
        `
      }
    ]
  },

  'Florida DUI & Alcohol Laws': {
    icon: Info,
    sections: [
      {
        title: 'DUI Laws and BAC Limits',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              BAC Limits — Know These Numbers
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Adults (21+):</strong> 0.08% BAC = DUI
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Drivers under 21:</strong> 0.02% BAC = DUI (zero tolerance policy)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Commercial drivers:</strong> 0.04% BAC = DUI
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Enhanced DUI:</strong> BAC of 0.15%+ or minor in vehicle → significantly higher penalties
              </li>
            </ul>
          </div>

          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              First DUI Penalties
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Fine:</strong> $500–$1,000 ($1,000–$2,000 if BAC ≥ 0.15%)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Jail:</strong> Up to 6 months (up to 9 months if BAC ≥ 0.15%)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>License suspension:</strong> 180 days to 1 year
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Vehicle impoundment:</strong> 10 days for first conviction
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Community service:</strong> 50 hours minimum
              </li>
            </ul>
          </div>

          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Implied Consent Law
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>What it means:</strong> By driving in Florida, you automatically consent to chemical testing (breath, blood, or urine)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Refusing a test (1st refusal):</strong> 1-year license suspension
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Refusing a test (2nd refusal):</strong> 18-month suspension + misdemeanor charge
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Ignition interlock:</strong> Required for repeat offenders and BAC ≥ 0.15%
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Open container:</strong> No open alcohol containers allowed in the passenger compartment
              </li>
            </ul>
          </div>

          <div style="margin-bottom: 0;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Florida Texting & Distracted Driving Laws
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Texting while driving:</strong> Primary offense — police can pull you over just for texting
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Handheld phone in school/work zones:</strong> Prohibited — hands-free required in these zones
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Fine:</strong> $30 for first offense (no points), $60 for second offense (3 points)
              </li>
            </ul>
          </div>
        `
      }
    ]
  },

  'Florida Road Signs & Signals': {
    icon: BookOpen,
    sections: [
      {
        title: 'Road Sign Colors and Shapes',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Sign Colors — What Each Means
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Red:</strong> Stop, yield, or prohibition (do not enter, wrong way)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Yellow:</strong> Warning — slow down, hazard ahead (curves, intersections, pedestrians)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Orange:</strong> Construction and work zone warnings — slow down, workers present
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Green:</strong> Guide signs — directions, distances, highway exits
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Blue:</strong> Motorist services — gas, food, lodging, hospitals
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Brown:</strong> Recreation and cultural sites — parks, historic places
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>White:</strong> Regulatory signs — speed limits, lane rules, turn restrictions
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Black &amp; White:</strong> Speed limits and regulatory information
              </li>
            </ul>
          </div>

          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Sign Shapes — What Each Means
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Octagon (8 sides):</strong> STOP — only this shape means stop
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Triangle (inverted):</strong> YIELD — only this shape means yield
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Diamond:</strong> Warning — hazard ahead
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Rectangle (vertical):</strong> Regulatory — speed limits, turn rules
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Rectangle (horizontal):</strong> Guide/information signs
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Pentagon (5 sides, pointing up):</strong> School zone or school crossing
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Round:</strong> Railroad crossing advance warning
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>X-shape (crossbuck):</strong> Railroad crossing marker at the tracks
              </li>
            </ul>
          </div>
        `
      },
      {
        title: 'Traffic Signals & Pavement Markings',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Traffic Light Rules
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Solid red:</strong> Stop completely — remain stopped until light turns green
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Red + right turn:</strong> Stop first, then turn right if safe (unless sign prohibits it)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Flashing red:</strong> Treat as a STOP sign — stop, then proceed when safe
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Solid yellow:</strong> Prepare to stop — do not speed up to beat the light
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Flashing yellow:</strong> Slow down and proceed with caution
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Solid green:</strong> Proceed if intersection is clear — yield to pedestrians
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Green arrow:</strong> Protected turn — proceed in the direction of the arrow
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>No signal (power outage):</strong> Treat as a four-way stop
              </li>
            </ul>
          </div>

          <div style="margin-bottom: 0;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Pavement Markings
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Yellow center lines:</strong> Separate traffic moving in opposite directions
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Solid yellow (double):</strong> No passing in either direction
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Dashed yellow:</strong> Passing allowed when safe
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>White lines:</strong> Separate lanes traveling in the same direction
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Solid white line:</strong> Do not change lanes (edge of road or near intersection)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>White stop bar:</strong> Stop completely behind this line at signals and stop signs
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>White crosswalk lines:</strong> Pedestrian crossing — yield to pedestrians
              </li>
            </ul>
          </div>
        `
      }
    ]
  },

  'Florida Parking & Safe Driving': {
    icon: CheckCircle,
    sections: [
      {
        title: 'Parking Rules — Key Distances',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Florida Parking Distances — Memorize These
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Fire hydrant:</strong> 15 feet minimum
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Crosswalk (at intersection):</strong> 20 feet
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Stop sign or traffic signal:</strong> 30 feet
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Driveway (public or private):</strong> 5 feet
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Drawbridge:</strong> 50 feet from the draw
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Railroad crossing:</strong> 50 feet
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Fire station driveway:</strong> 20 feet (on same side); 75 feet on opposite side
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Handicapped parking:</strong> $250+ fine for illegal use
              </li>
            </ul>
          </div>

          <div style="margin-bottom: 0;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              When You Cannot Park
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>On a sidewalk</strong> — always prohibited
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>In front of a driveway</strong> — blocks access
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>On a bridge or in a tunnel</strong>
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>On railroad tracks</strong>
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Where a "No Parking" sign is posted</strong>
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>On the road side of a parked vehicle (double parking)</strong>
              </li>
            </ul>
          </div>
        `
      },
      {
        title: 'Safe Following Distance & Lane Changes',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Following Distance
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>3-second rule:</strong> Minimum safe following distance under normal conditions
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Rain or poor visibility:</strong> Double to at least 6 seconds
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Behind large trucks:</strong> Stay further back — their stopping distance is much longer
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>How to measure:</strong> When the vehicle ahead passes a fixed point, count 3 seconds before you reach it
              </li>
            </ul>
          </div>

          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Passing and Lane Changes
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Signal first:</strong> Always signal before changing lanes or passing
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Check mirrors + blind spots:</strong> Never rely on mirrors alone
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>No passing zones:</strong> Solid yellow lines, hills, curves, intersections, and within 100 feet of a bridge or tunnel
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>After passing:</strong> Return to your lane only when you can see the passed vehicle in your rearview mirror
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Keep right:</strong> Slower traffic must stay in the right lane; pass on the left
              </li>
            </ul>
          </div>

          <div style="margin-bottom: 0;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Stopping Distances
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>At 55 mph:</strong> ~300 feet total stopping distance (reaction + braking)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Wet roads:</strong> Stopping distance can double
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Hydroplaning:</strong> Occurs when water prevents tires from gripping road — ease off the gas, steer straight
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Brake failure:</strong> Downshift, pump brakes, use emergency brake gradually
              </li>
            </ul>
          </div>
        `
      }
    ]
  },

  'Florida Teen GDL & License Requirements': {
    icon: Users,
    sections: [
      {
        title: 'Graduated Driver License (GDL) Program',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Step 1 — Learner's License (Age 15+)
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Minimum age:</strong> 15 years old
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>TLSAE course required:</strong> Must complete the Traffic Law and Substance Abuse Education ("Drug and Alcohol") course before applying
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Written knowledge test:</strong> 50 questions — must score 40/50 (80%) to pass
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Vision test:</strong> Required at the DHSMV office
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Supervised driving:</strong> Must always be accompanied by a licensed driver age 21+ in the front seat
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Driving hours restriction:</strong> May not drive between 11 PM and 6 AM
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Must hold for:</strong> At least 12 months before applying for restricted license
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Required practice:</strong> 50 hours of supervised driving (10 hours must be at night)
              </li>
            </ul>
          </div>

          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Step 2 — Restricted License (Age 16–17)
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Minimum age:</strong> 16 years old
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Must pass:</strong> Road skills driving test
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>First 3 months:</strong> No passengers under 18 (except household family members)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>First year:</strong> No more than 1 passenger under 18 who is not a household family member
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Night driving restriction:</strong> No driving between 11 PM and 6 AM (unless accompanied by licensed adult 21+, or for work/school)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Cell phones:</strong> No texting or handheld phone use at any time
              </li>
            </ul>
          </div>

          <div style="margin-bottom: 0;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Step 3 — Full License (Age 18+)
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Minimum age:</strong> 18 years old — all restrictions lifted
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Adults 18+:</strong> No TLSAE or supervised driving required — can take knowledge test directly
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Test retake policy:</strong> Must wait 1 day after failing; after 3 failures, must file a new application
              </li>
            </ul>
          </div>
        `
      }
    ]
  },

  'Florida Weather & Road Hazards': {
    icon: Sun,
    sections: [
      {
        title: 'Florida Climate Challenges',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Thunderstorms and Heavy Rain
            </h3>
            <p style="margin-bottom: 1rem; color: #374151;">Florida has more thunderstorms than any other U.S. state — and more lightning deaths. Knowing how to drive in these conditions is tested.</p>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Sudden storms:</strong> Can develop in minutes, especially summer afternoons — reduce speed immediately
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Visibility near zero:</strong> Turn on headlights — required any time wipers are in use
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Hydroplaning:</strong> Most likely on wet roads at 35+ mph — ease off the accelerator, steer straight
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Flooding:</strong> Never drive through flooded roads — "Turn Around, Don't Drown" — 6 inches of water can sweep you off your feet; 2 feet can carry away most vehicles
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Headlights in rain:</strong> Florida law requires headlights when using windshield wipers
              </li>
            </ul>
          </div>

          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Heat and Vehicle Safety
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Never leave people or pets in a parked car</strong> — interior temps can reach 130°F+ within minutes
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Tire pressure:</strong> Heat causes tires to expand — check pressure regularly
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Vehicle overheating:</strong> Watch temperature gauge; pull over safely if overheating occurs
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Battery:</strong> Extreme heat reduces battery life — have it tested before summer
              </li>
            </ul>
          </div>

          <div style="margin-bottom: 0;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Hurricane Season (June 1 – November 30)
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Peak period:</strong> August through October
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Evacuation routes:</strong> Know your county's designated evacuation routes before storm season
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Contraflow traffic:</strong> During evacuations, both sides of interstate may run outbound — follow law enforcement direction
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Keep tank full:</strong> Fuel shortages occur quickly when storms approach
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Wildlife on roads:</strong> Flooding drives animals (including alligators) onto roads — be alert
              </li>
            </ul>
          </div>
        `
      }
    ]
  }
}
