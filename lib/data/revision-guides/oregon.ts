import { Target, AlertTriangle, Info, CheckCircle, CloudRain, TreePine } from 'lucide-react'

export const oregonRevisionContent = {
  'Oregon Traffic Laws & Legal Requirements': {
    icon: Target,
    sections: [
      {
        title: 'Speed Limits and Traffic Control',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Oregon Speed Limits
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
                <strong>Rural highways:</strong> 55 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Interstate highways:</strong> 65-70 mph (some rural areas up to 80 mph)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Truck speed limits:</strong> 55 mph on most highways, regardless of posted limit
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Oregon Right-of-Way Rules
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
              Oregon Insurance Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Minimum liability coverage:</strong> 25/50/20 ($25K bodily injury per person, $50K per accident, $20K property damage)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Personal injury protection (PIP):</strong> $15,000 minimum coverage required
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Uninsured motorist:</strong> $25K/$50K coverage required
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>License suspension:</strong> Immediate suspension for driving without insurance
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Oregon Violation System
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Suspension criteria:</strong> Based on pattern of violations rather than point system
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Serious violations:</strong> Reckless driving, excessive speed, DUI result in suspension
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Habitual offender:</strong> Multiple major violations can lead to long-term suspension
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Traffic school:</strong> Available to avoid some violations appearing on record
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Oregon Vehicle Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>License plates:</strong> Rear plate required; front plate not required
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Seat belts:</strong> Required for all occupants, primary enforcement
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Child restraints:</strong> Required until age 8 or 4'9" tall
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Emissions testing:</strong> Required in Portland metro area
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Oregon DUII Laws & Penalties': {
    icon: AlertTriangle,
    sections: [
      {
        title: 'Oregon DUII Laws and Consequences',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              DUII Penalties and BAC Limits
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Adult BAC limit:</strong> 0.08% or higher (Oregon calls it DUII)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Under 21 BAC limit:</strong> 0.02% or higher
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Commercial drivers:</strong> 0.04% or higher
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>First DUII penalties:</strong> Up to 1 year jail, $6,250 fine, 90-day license suspension
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
                <strong>Blood test priority:</strong> Officer may request blood test for DUII
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Oregon-Specific DUII Laws
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Marijuana DUII:</strong> Can be charged for any detectable amount that impairs driving
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Ignition interlock:</strong> Required for all DUII convictions
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Diversion programs:</strong> First-time offenders may qualify for diversion
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Open container law:</strong> No open alcohol containers in vehicle passenger area
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Oregon Parking & Traffic Violations': {
    icon: Info,
    sections: [
      {
        title: 'Parking Rules and Traffic Enforcement',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Oregon Parking Distances
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
                <strong>Bus stop:</strong> 20 feet from bus stop sign
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Portland Metro Parking Rules
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>SmartPark meters:</strong> Electronic payment systems in downtown Portland
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Permit parking:</strong> Resident-only zones in dense neighborhoods
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>TriMet zones:</strong> No parking near MAX light rail stops
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Bike lane parking:</strong> Illegal to park in designated bike lanes
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Traffic Violations and Fines
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Speeding fines:</strong> $115+ for 1-10 mph over, increases significantly
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Cell phone use:</strong> $135+ fine for handheld device while driving
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Red light violations:</strong> $260+ fine at intersections with cameras
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Seat belt violations:</strong> $115+ fine for not wearing seat belt
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Oregon Safe Driving Practices': {
    icon: CheckCircle,
    sections: [
      {
        title: 'Defensive Driving in Oregon',
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
                <strong>Wet conditions:</strong> Increase to 4-6 seconds (common in Oregon)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Mountain driving:</strong> Extra distance on steep grades and curves
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Fog conditions:</strong> Significantly increase distance when visibility is reduced
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Oregon Highway Driving
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>I-5 corridor:</strong> Main north-south route, heavy traffic through Portland
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>I-84 east:</strong> Mountain pass with steep grades and weather challenges
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Keep right law:</strong> Use right lanes except when passing
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Truck restrictions:</strong> Trucks limited to 55 mph, use right lanes
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Sharing the Road in Oregon
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Bicyclists:</strong> Must give 3+ feet clearance when passing, very bike-friendly state
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Pedestrians:</strong> Oregon has strong pedestrian protection laws
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>MAX light rail:</strong> Yield to TriMet trains and buses
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Emergency vehicles:</strong> Move over law for stopped emergency vehicles
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Oregon Weather Driving': {
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
                <strong>Frequent rain:</strong> Oregon has extended rainy seasons, adjust driving accordingly
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Hydroplaning risk:</strong> Reduce speed on wet roads, avoid sudden movements
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Headlight use:</strong> Required when wipers are in use
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>First rain danger:</strong> Roads most slippery during first rain after dry period
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Mountain Pass Winter Driving
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Traction tires:</strong> Required on mountain passes November 1 - March 31
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Chain requirements:</strong> Carry chains when traction tire signs are posted
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Government Camp area:</strong> US-26 mountain pass frequently requires chains
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Santiam Pass:</strong> US-20 can be treacherous in winter conditions
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Fog and Low Visibility
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Valley fog:</strong> Willamette Valley prone to dense fog in fall/winter
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Coastal fog:</strong> Marine layer creates visibility problems near coast
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Low beam headlights:</strong> Use low beams in fog, not high beams
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Speed reduction:</strong> Drive according to visibility distance
              </li>
            </ul>
          </div>
        `
      }
    ]
  },
  'Oregon Regional Driving': {
    icon: TreePine,
    sections: [
      {
        title: 'Oregon Geographic Challenges',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Portland Metro Area
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Bridge crossings:</strong> Multiple bridges over Willamette and Columbia rivers
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>MAX light rail:</strong> Share roads with TriMet trains, yield appropriately
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Bike infrastructure:</strong> Extensive bike lanes and bike-friendly traffic laws
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Rush hour traffic:</strong> I-5 and I-405 congested during peak hours
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Eastern Oregon Challenges
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Long distances:</strong> Significant gaps between towns and services
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>High desert conditions:</strong> Extreme temperature variations
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Wind conditions:</strong> High winds common in Columbia River Gorge
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Agricultural traffic:</strong> Farm equipment and livestock transport
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Coastal and Forest Areas
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Logging trucks:</strong> Heavy vehicles on forest roads
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Narrow coastal roads:</strong> US-101 has curves and limited passing zones
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Tourist traffic:</strong> Seasonal congestion to coast and mountains
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Wildlife crossings:</strong> Deer, elk, and other animals on rural roads
              </li>
            </ul>
          </div>
        `
      }
    ]
  }
}