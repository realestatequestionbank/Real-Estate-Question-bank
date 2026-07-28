import { Target, AlertTriangle, Info, CheckCircle, Mountain, TreePine } from 'lucide-react'

export const idahoRevisionContent = {
  'Idaho Traffic Laws & Legal Requirements': {
    icon: Target,
    sections: [
      {
        title: 'Speed Limits and Traffic Control',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Idaho Speed Limits
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>School zones:</strong> 20 mph when children present or signs flashing
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Residential areas:</strong> 25 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Business districts:</strong> 25 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Rural highways:</strong> 65 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Interstate highways:</strong> 80 mph (75 mph in urban areas)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Trucks on interstates:</strong> 70 mph maximum speed
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Idaho Right-of-Way Rules
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
                <strong>Idaho stop law:</strong> Cyclists may treat stop signs as yield signs
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
              Idaho Insurance Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Minimum liability coverage:</strong> 25/50/15 ($25K bodily injury per person, $50K per accident, $15K property damage)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>License suspension:</strong> Immediate suspension for driving without insurance
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>SR-22 filing:</strong> Required for serious violations and license reinstatement
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Proof of insurance:</strong> Must carry valid proof at all times
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Idaho Point System
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>License suspension:</strong> 12-17 points in 12 months may result in suspension
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Point values:</strong> Most violations = 3-4 points, serious offenses = 6-8 points
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Defensive driving:</strong> Can remove up to 3 points once every 12 months
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Point reduction:</strong> Points removed after 3 years from conviction date
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Idaho Vehicle Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>License plates:</strong> Rear plate required; front plate not required
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Seat belts:</strong> Required for all occupants, primary enforcement
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Child restraints:</strong> Required until age 7
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Vehicle inspection:</strong> No state-mandated safety inspection required
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Idaho DUI Laws & Penalties': {
    icon: AlertTriangle,
    sections: [
      {
        title: 'Idaho DUI Laws and Consequences',
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
                <strong>First DUI penalties:</strong> Up to 6 months jail, $1,000 fine, 90-day license suspension
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
                <strong>Test refusal:</strong> 1 year license suspension for first refusal
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Administrative action:</strong> Automatic suspension separate from court case
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Breath test priority:</strong> Officer typically requests breath test
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Idaho-Specific DUI Laws
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Excessive DUI:</strong> Enhanced penalties for BAC 0.20% or higher
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Ignition interlock:</strong> Required for repeat offenders and excessive DUI
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Open container law:</strong> No open alcohol containers in vehicle passenger area
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Drug DUI:</strong> Can be charged for any detectable amount of illegal drugs
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Idaho Parking & Traffic Violations': {
    icon: Info,
    sections: [
      {
        title: 'Parking Rules and Traffic Enforcement',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Idaho Parking Distances
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
                <strong>Driveway:</strong> 5 feet from public or private driveway
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Railroad crossing:</strong> 50 feet from nearest rail
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Mountain and Rural Parking Considerations
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Steep grade parking:</strong> Turn wheels and set parking brake on hills
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Snow zone parking:</strong> Don't block snow removal operations
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Trailhead parking:</strong> Designated areas only, don't block access
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Winter restrictions:</strong> Some mountain areas prohibit overnight parking
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Traffic Violations and Fines
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Speeding fines:</strong> $90+ for 1-15 mph over, increases with speed
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Cell phone use:</strong> $75+ fine for handheld device while driving
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Move over law:</strong> Change lanes or slow down for emergency vehicles
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Seat belt violations:</strong> $10 fine but primary enforcement
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Idaho Safe Driving Practices': {
    icon: CheckCircle,
    sections: [
      {
        title: 'Defensive Driving in Idaho',
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
                <strong>Mountain driving:</strong> Increase distance on steep grades and curves
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Winter conditions:</strong> Increase to 6+ seconds on snow and ice
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Large vehicles:</strong> Extra space for trucks and recreational vehicles
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Idaho Highway Driving
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>I-84 corridor:</strong> Major east-west route through southern Idaho
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>I-15 north-south:</strong> Connects Pocatello to Utah border
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Mountain passes:</strong> Steep grades, sharp curves, elevation changes
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Long distances:</strong> Plan for extended travel between cities
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Sharing the Road in Idaho
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Farm equipment:</strong> Agricultural vehicles common on rural roads
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Bicyclists:</strong> Must give 3+ feet clearance when passing
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>ATVs and snowmobiles:</strong> Recreational vehicles on designated routes
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Logging trucks:</strong> Heavy vehicles in forested areas
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Idaho Mountain Driving': {
    icon: Mountain,
    sections: [
      {
        title: 'Mountain and Winter Driving',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Mountain Pass Driving
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Steep grades:</strong> Use lower gears going downhill, avoid riding brakes
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Runaway truck ramps:</strong> Emergency escape routes on steep downgrades
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Elevation effects:</strong> Reduced engine power at high altitude
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Sharp curves:</strong> Reduce speed and stay in your lane
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Winter Driving Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Traction tires:</strong> Required on mountain passes during winter
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Chain requirements:</strong> Carry chains when conditions require
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Black ice:</strong> Common on bridges, overpasses, and shaded areas
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Weather monitoring:</strong> Check conditions before mountain travel
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Emergency Preparedness
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Emergency kit:</strong> Extra clothing, food, water, and blankets
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Cell coverage:</strong> Limited in remote mountain areas
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Fuel management:</strong> Keep tank full in remote areas
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Travel advisories:</strong> Check road conditions and weather alerts
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Idaho Rural & Wildlife Driving': {
    icon: TreePine,
    sections: [
      {
        title: 'Rural Idaho Driving Challenges',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Wildlife Encounters
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Deer crossings:</strong> Most active at dawn and dusk
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Elk encounters:</strong> Large animals that can cause severe damage
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Moose sightings:</strong> Unpredictable behavior, give wide berth
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Bear activity:</strong> Possible encounters, especially near food sources
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Agricultural and Industrial Traffic
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Potato harvest:</strong> Heavy truck traffic during harvest season
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Logging operations:</strong> Large trucks carrying timber loads
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Mining vehicles:</strong> Heavy equipment in mining regions
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Farm equipment:</strong> Slow-moving tractors and implements
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Remote Area Considerations
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Long distances:</strong> Significant gaps between services and towns
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Limited services:</strong> Gas stations and repair shops may be sparse
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Recreational areas:</strong> Increased traffic to skiing and camping areas
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Road maintenance:</strong> Some rural roads receive limited maintenance
              </li>
            </ul>
          </div>
        `
      }
    ]
  }
}