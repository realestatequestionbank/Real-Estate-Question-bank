import { Target, AlertTriangle, Info, CheckCircle, Building, Car } from 'lucide-react'

export const newjerseyRevisionContent = {
  'New Jersey Traffic Laws & Legal Requirements': {
    icon: Target,
    sections: [
      {
        title: 'Speed Limits and Traffic Control',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              New Jersey Speed Limits
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>School zones:</strong> 25 mph when children present or signs flashing
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Residential areas:</strong> 25 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Business districts:</strong> 25 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Rural highways:</strong> 50 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Interstate highways:</strong> 65 mph (55 mph in congested areas)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>New Jersey Turnpike:</strong> 65 mph (cars), 55 mph (trucks)
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              New Jersey Right-of-Way Rules
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
                <strong>School buses:</strong> Stop when red lights flash on both sides of undivided road
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Jug handles:</strong> Use designated U-turn roadways for left turns
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
              New Jersey Insurance Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Minimum liability coverage:</strong> 15/30/5 ($15K bodily injury per person, $30K per accident, $5K property damage)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Personal injury protection (PIP):</strong> $15,000 minimum coverage required
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Uninsured motorist:</strong> $15K/$30K coverage required
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>No-fault state:</strong> PIP covers medical expenses regardless of fault
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              New Jersey Point System
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>License suspension:</strong> 6 points results in surcharge, 12+ points may cause suspension
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Point values:</strong> Most violations = 2-5 points, serious offenses = 8 points
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Point reduction:</strong> 3 points removed for completing defensive driving course
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Safe driving credit:</strong> 1 point removed for each year with no violations
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              New Jersey Vehicle Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>License plates:</strong> Front and rear plates required
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Seat belts:</strong> Required for all occupants, primary enforcement
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Child restraints:</strong> Required until age 8 or 4'9" tall
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Emissions testing:</strong> Required statewide for most vehicles
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'New Jersey DWI Laws & Penalties': {
    icon: AlertTriangle,
    sections: [
      {
        title: 'New Jersey DWI Laws and Consequences',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              DWI Penalties and BAC Limits
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Adult BAC limit:</strong> 0.08% or higher (NJ calls it DWI, not DUI)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Under 21 BAC limit:</strong> 0.01% or higher
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Commercial drivers:</strong> 0.04% or higher
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>First DWI penalties:</strong> $250-400 fine, 3-month license loss, possible 30 days jail
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
                <strong>Test refusal:</strong> 7 months to 1 year license loss for first refusal
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Breath test priority:</strong> Officer typically requests breath test
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Independent test:</strong> Right to additional test at own expense
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              New Jersey-Specific DWI Laws
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>No plea bargaining:</strong> DWI charges cannot be downgraded to reckless driving
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Ignition interlock:</strong> Required for certain repeat offenders
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Open container law:</strong> No open alcohol containers in vehicle passenger area
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Intoxication manslaughter:</strong> Severe penalties for deaths caused by drunk driving
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'New Jersey Parking & Traffic Violations': {
    icon: Info,
    sections: [
      {
        title: 'Parking Rules and Traffic Enforcement',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              New Jersey Parking Distances
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Fire hydrant:</strong> 10 feet minimum distance
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Crosswalk:</strong> 25 feet from crosswalk at intersection
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Stop sign:</strong> 50 feet from stop sign
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Driveway:</strong> 5 feet from public or private driveway
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Railroad crossing:</strong> 50 feet from nearest rail
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Urban New Jersey Parking Challenges
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Street cleaning:</strong> Alternate side parking in many municipalities
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Permit parking:</strong> Resident-only zones in urban areas
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Meter enforcement:</strong> Strictly enforced in cities and shore towns
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Beach parking:</strong> Seasonal restrictions and paid parking at shore
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Traffic Violations and Fines
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Speeding fines:</strong> $85+ for 1-14 mph over, increases significantly
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Cell phone use:</strong> $200-400 fine for handheld device while driving
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Aggressive driving:</strong> Road rage violations carry severe penalties
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Construction zone violations:</strong> Doubled fines and potential license suspension
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'New Jersey Safe Driving Practices': {
    icon: CheckCircle,
    sections: [
      {
        title: 'Defensive Driving in New Jersey',
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
                <strong>Heavy traffic:</strong> Increase distance due to NJ's dense traffic conditions
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Aggressive drivers:</strong> Common in NJ - maintain safe distance
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Weather conditions:</strong> Adjust distance for rain, snow, or coastal fog
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              New Jersey Highway Driving
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>NJ Turnpike:</strong> Major north-south route, heavy truck traffic
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Garden State Parkway:</strong> Passenger cars only, connects NYC to shore
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Jug handle turns:</strong> Use designated loops instead of left turns
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>No self-service gas:</strong> Full service only - stay in vehicle
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Sharing the Road in New Jersey
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Bicyclists:</strong> Must give 4+ feet clearance when passing
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Pedestrians:</strong> High pedestrian traffic in urban and shore areas
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Emergency vehicles:</strong> Move over law for stopped emergency vehicles
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Construction workers:</strong> Enhanced penalties in work zones
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'New Jersey Urban Driving': {
    icon: Building,
    sections: [
      {
        title: 'Dense Urban Traffic Conditions',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              NYC Metro Area Driving
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Holland/Lincoln Tunnels:</strong> Heavy traffic, no trucks in Lincoln Tunnel
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>George Washington Bridge:</strong> Upper and lower levels, frequent delays
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Rush hour traffic:</strong> Extreme congestion during peak commuting hours
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Aggressive driving:</strong> Fast-paced, assertive driving style required
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Philadelphia Metro Area
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Camden area:</strong> Cross-traffic from Pennsylvania
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Delaware River crossings:</strong> Ben Franklin and Betsy Ross bridges
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>I-295 corridor:</strong> Major bypass route around Philadelphia
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Sports venues:</strong> Eagles, Phillies games cause traffic surges
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Central and Shore Areas
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Summer shore traffic:</strong> Massive weekend congestion to beaches
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Coastal weather:</strong> Fog and sudden storms affect visibility
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Tourist drivers:</strong> Unfamiliar drivers during summer season
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Boardwalk areas:</strong> Heavy pedestrian traffic near beaches
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'New Jersey-Specific Road Features': {
    icon: Car,
    sections: [
      {
        title: 'Unique New Jersey Driving Situations',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Jug Handle Intersections
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>No left turns:</strong> Many major roads prohibit direct left turns
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Jug handle procedure:</strong> Continue straight, use loop to make U-turn
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Traffic flow:</strong> Designed to improve traffic flow on busy roads
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Signage importance:</strong> Follow signs carefully for proper lane usage
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Full Service Gas Stations
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>No self-service:</strong> Only attendants can pump gas (state law)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Stay in vehicle:</strong> Remain in car while attendant pumps gas
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Payment method:</strong> Can pay cash or card through attendant
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Tipping optional:</strong> Small tip for attendant is customary but not required
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Toll Roads and E-ZPass
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>E-ZPass mandatory:</strong> Required for many toll facilities
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Variable pricing:</strong> Peak hour pricing on some facilities
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Violation fees:</strong> Expensive penalties for toll violations
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Express lanes:</strong> E-ZPass only lanes for faster travel
              </li>
            </ul>
          </div>
        `
      }
    ]
  }
}