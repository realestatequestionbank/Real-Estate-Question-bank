import { Target, AlertTriangle, Info, CheckCircle, Snowflake, Mountain } from 'lucide-react'

export const coloradoRevisionContent = {
  'Colorado Traffic Laws & Legal Requirements': {
    icon: Target,
    sections: [
      {
        title: 'Speed Limits and Traffic Control',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Colorado Speed Limits
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>School zones:</strong> 20 mph when children present or signs are posted
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Residential areas:</strong> 25 mph (unless posted otherwise)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Business districts:</strong> 25 mph
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Rural highways:</strong> 65 mph unless posted otherwise
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Interstate highways:</strong> 75 mph (some sections 80 mph in rural areas)
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
              Colorado Insurance Requirements
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Minimum liability coverage:</strong> $25,000 per person, $50,000 per accident for bodily injury
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Property damage coverage:</strong> $15,000 minimum
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Uninsured motorist coverage:</strong> Not required but recommended
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>License suspension for no insurance:</strong> Indefinite suspension until proof provided
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Point System and Violations
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>License suspension:</strong> 12 or more points in 12 months (or 18 points in 24 months)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Careless driving:</strong> 4 points and possible license suspension
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Speeding violations:</strong> 1-12 points depending on speed over limit
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
                <strong>License plates:</strong> Single rear plate required with current registration
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Seat belts:</strong> Required for all front seat occupants; driver responsible for passengers under 16
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Child restraints:</strong> Required for children under 8 or under 4'9" tall
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Emissions testing:</strong> Required in certain Front Range counties
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
        title: 'Colorado DUI Laws and Consequences',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              DUI Penalties and Facts
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>First DUI conviction:</strong> $600-$1,000 fine, up to 1 year jail, 9-month license revocation
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>BAC limits:</strong> 0.08% for adults, 0.05% DWAI (Driving While Ability Impaired), 0.02% for drivers under 21
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Marijuana DUI:</strong> 5 ng/ml or higher blood THC creates presumption of impairment
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
                <strong>Express consent:</strong> By driving, you consent to chemical testing when arrested for DUI
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Test refusal consequences:</strong> Automatic 1-year license revocation (first offense)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Repeat refusal:</strong> 2-3 year license revocation for subsequent refusals
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Types of tests:</strong> Blood or breath as requested by officer
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #dc2626; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Colorado Cannabis Laws
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Legal but impaired driving prohibited:</strong> Cannabis use is legal but driving under influence is not
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Open container:</strong> No open cannabis containers in passenger area of vehicle
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>DUI marijuana penalties:</strong> Same as alcohol DUI penalties
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Combined impairment:</strong> Alcohol + marijuana creates enhanced penalties
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
                <strong>Crosswalk:</strong> 20 feet from marked crosswalk
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Stop sign/traffic light:</strong> 30 feet minimum distance
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Driveway:</strong> Cannot block access
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Bus stops:</strong> 20 feet from bus stop signs
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
                <strong>Always:</strong> Set parking brake on any incline - critical in Colorado mountains
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #059669; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Colorado Parking Regulations
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Denver parking meters:</strong> Enforce Monday-Saturday, some areas Sunday
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Mountain town parking:</strong> Many ski towns have strict overnight parking bans
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Snow routes:</strong> No parking when snow emergency declared
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Handicapped spaces:</strong> $150-$500 fine for illegal parking
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
              Mountain Breakdown Response
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Pull off safely:</strong> Use pullouts where available on mountain roads
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Hazard flashers:</strong> Turn on immediately, especially critical on winding roads
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Emergency triangles:</strong> Place 100-500 feet behind vehicle on mountain highways
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Stay warm:</strong> Remain in vehicle in cold weather with emergency supplies
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Call for help:</strong> Dial *CSP (*277) for Colorado State Patrol
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
                <strong>Check for injuries:</strong> Call 911 immediately if anyone is hurt
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Exchange information:</strong> Names, insurance, license numbers, and photos
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Police report required:</strong> For accidents with injury, death, or $1,000+ damage
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
                <strong>Mountain driving:</strong> Increase to 4-6 seconds for steep grades
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Poor weather conditions:</strong> Increase to 6-8 seconds
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Behind large vehicles:</strong> Extra space needed for visibility and braking
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
                <strong>Mountain passing:</strong> Use passing lanes, don't pass on curves or hills
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Bicyclist clearance:</strong> Allow at least 3 feet clearance when passing
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #7c3aed; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Cell Phone and Distraction Laws
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Text messaging ban:</strong> Prohibited for all drivers while driving
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Under 18 restrictions:</strong> No cell phone use (handheld or hands-free) while driving
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Hands-free recommended:</strong> Adult drivers may use hands-free devices
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Emergency exceptions:</strong> May use phone to report emergencies
              </li>
            </ul>
          </div>
        `
      },
      {
        title: 'Colorado-Specific Road Rules',
        content: `
          <h3>Move Over Law</h3>
          <ul>
            <li><strong>Emergency vehicles:</strong> Move over one lane when emergency vehicles are stopped with lights flashing</li>
            <li><strong>Tow trucks:</strong> Law also applies to tow trucks and maintenance vehicles</li>
            <li><strong>Slow down:</strong> If unable to move over, reduce speed significantly</li>
            <li><strong>Penalties:</strong> 4 points and fines up to $650 for violations</li>
          </ul>
          
          <h3>Chain Laws and Traction Requirements</h3>
          <ul>
            <li><strong>Traction Law:</strong> All vehicles must have adequate tires or carry chains from September 1 to May 31</li>
            <li><strong>Chain requirements:</strong> 4WD/AWD vehicles with 3/16" tread depth meet requirements</li>
            <li><strong>2WD vehicles:</strong> Must have mud/snow tires or carry chains</li>
            <li><strong>Commercial vehicles:</strong> Must carry chains regardless of drive type</li>
          </ul>
        `
      }
    ]
  },
  'Colorado Mountain & Weather Driving': {
    icon: Snowflake,
    sections: [
      {
        title: 'Mountain Driving Conditions',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              High Altitude Driving
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Engine performance:</strong> Vehicles lose power at high altitude - accelerate gradually
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Braking distances:</strong> Increase significantly on steep downhill grades
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Use lower gears:</strong> Engine braking helps control speed on descents
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Pullout areas:</strong> Use designated areas to let faster traffic pass
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Weather changes rapidly:</strong> Be prepared for sudden storms even in summer
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Winter Weather Driving
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Traction Law compliance:</strong> Adequate tires or chains required on mountain highways
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Following distance:</strong> Increase to 8-10 seconds in snow/ice conditions
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Gentle inputs:</strong> Smooth acceleration, braking, and steering on slippery surfaces
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Chain installation areas:</strong> Pull completely off highway when installing chains
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #0891b2; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Vehicle Preparation for Colorado
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Emergency kit:</strong> Include blankets, food, water, flashlight, chains, shovel
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Fuel considerations:</strong> Keep tank full - gas stations sparse in mountains
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Tire condition:</strong> Check tire pressure regularly (altitude affects pressure)
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Coolant system:</strong> Ensure adequate antifreeze for sub-zero temperatures
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
        title: 'Sharing Colorado Roads',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Bicycle Safety and Laws
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>3-foot passing law:</strong> Must allow minimum 3 feet when passing cyclists
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Bike lane respect:</strong> Do not drive or park in designated bike lanes
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Mountain biking areas:</strong> Watch for cyclists on mountain roads and trails
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Vulnerable Road User Law:</strong> Enhanced penalties for injuring cyclists or pedestrians
              </li>
            </ul>
          </div>
          
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
                <strong>School zone speed:</strong> 20 mph when children present
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Penalties:</strong> 6 points for passing stopped school bus
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Large Vehicles and Recreation
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>RVs and trailers:</strong> Common on mountain highways - allow extra following distance
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Truck climbing lanes:</strong> Stay right to allow trucks to use climbing lanes
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Runaway truck ramps:</strong> Never use unless you're a truck with brake failure
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Ski area traffic:</strong> Expect heavy traffic and delays during ski season
              </li>
            </ul>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #ea580c; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Wildlife and Environmental Hazards
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Wildlife crossings:</strong> Watch for deer, elk, and other animals, especially at dawn/dusk
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Rock fall areas:</strong> Common in mountain canyons - watch for falling rocks
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Flash flood zones:</strong> Never drive through flooded roads or washes
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>High wind warnings:</strong> Light vehicles and motorcycles at risk on exposed highways
              </li>
            </ul>
          </div>
        `
      }
    ]
  }
}