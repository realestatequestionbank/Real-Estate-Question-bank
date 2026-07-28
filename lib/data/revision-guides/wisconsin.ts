import { 
  FileText, 
  AlertTriangle, 
  Car, 
  Shield, 
  Snowflake,
  Users
} from 'lucide-react'

export const wisconsinRevisionGuide = {
  state: 'Wisconsin',
  title: 'Wisconsin Real Estate Test Revision Guide',
  description: 'Master the Wisconsin driving permit test with our comprehensive revision guide covering state-specific laws, regulations, and driving conditions.',
  sections: [
    {
      id: 'traffic-laws',
      title: 'Wisconsin Traffic Laws and Regulations',
      icon: FileText,
      content: `
        <div style="space-y: 24px;">
          <div>
            <h3 style="color: #1f2937; font-size: 18px; font-weight: 600; margin-bottom: 16px;">Speed Limits</h3>
            <div style="background-color: #f3f4f6; padding: 16px; border-radius: 8px; margin-bottom: 16px;">
              <ul style="margin: 0; padding-left: 20px;">
                <li><strong>Residential areas:</strong> 25 mph</li>
                <li><strong>Business districts:</strong> 25 mph</li>
                <li><strong>School zones:</strong> 15-25 mph (when children present)</li>
                <li><strong>Rural highways:</strong> 55 mph</li>
                <li><strong>Interstate highways:</strong> 70 mph (65 mph in Milwaukee area)</li>
                <li><strong>Construction zones:</strong> Posted reduced speed with doubled fines</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 style="color: #1f2937; font-size: 18px; font-weight: 600; margin-bottom: 16px;">Right-of-Way Rules</h3>
            <div style="background-color: #fef3c7; padding: 16px; border-radius: 8px; border-left: 4px solid #f59e0b;">
              <ul style="margin: 0; padding-left: 20px;">
                <li>At four-way stops, first to arrive has right-of-way</li>
                <li>At uncontrolled intersections, yield to traffic from the right</li>
                <li>When turning left, yield to oncoming traffic</li>
                <li>Yield to pedestrians in crosswalks</li>
                <li>Emergency vehicles always have right-of-way</li>
                <li>School buses loading/unloading children have priority</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 style="color: #1f2937; font-size: 18px; font-weight: 600; margin-bottom: 16px;">Following Distance</h3>
            <p style="color: #4b5563; line-height: 1.6; margin-bottom: 12px;">
              <strong>3-Second Rule:</strong> Maintain at least 3 seconds behind the vehicle ahead in normal conditions.
              Increase to 4+ seconds in adverse weather, especially during Wisconsin winters.
            </p>
          </div>

          <div>
            <h3 style="color: #1f2937; font-size: 18px; font-weight: 600; margin-bottom: 16px;">Cell Phone Laws</h3>
            <div style="background-color: #fee2e2; padding: 16px; border-radius: 8px; border-left: 4px solid #ef4444;">
              <ul style="margin: 0; padding-left: 20px;">
                <li>No texting while driving for all drivers</li>
                <li>Hands-free devices allowed for phone calls</li>
                <li>Novice drivers prohibited from any cell phone use</li>
                <li>Fines range from $20-$400 for violations</li>
              </ul>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'owi-laws',
      title: 'Wisconsin OWI and Alcohol Laws',
      icon: AlertTriangle,
      content: `
        <div style="space-y: 24px;">
          <div>
            <h3 style="color: #1f2937; font-size: 18px; font-weight: 600; margin-bottom: 16px;">Legal BAC Limits</h3>
            <div style="background-color: #fee2e2; padding: 16px; border-radius: 8px; margin-bottom: 16px;">
              <ul style="margin: 0; padding-left: 20px;">
                <li><strong>Adults 21+:</strong> 0.08% BAC or higher</li>
                <li><strong>Commercial drivers:</strong> 0.04% BAC or higher</li>
                <li><strong>Under 21:</strong> 0.02% BAC or higher (lower tolerance)</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 style="color: #1f2937; font-size: 18px; font-weight: 600; margin-bottom: 16px;">OWI Penalties (First Offense)</h3>
            <div style="background-color: #fef3c7; padding: 16px; border-radius: 8px;">
              <ul style="margin: 0; padding-left: 20px;">
                <li><strong>Fine:</strong> $150-$300</li>
                <li><strong>License revocation:</strong> 6-9 months</li>
                <li><strong>Ignition interlock:</strong> May be required</li>
                <li><strong>Assessment:</strong> Alcohol assessment required</li>
                <li><strong>SR-22 insurance:</strong> Required for license reinstatement</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 style="color: #1f2937; font-size: 18px; font-weight: 600; margin-bottom: 16px;">Implied Consent Law</h3>
            <p style="color: #4b5563; line-height: 1.6; margin-bottom: 12px;">
              Wisconsin drivers automatically consent to chemical testing when arrested for OWI. 
              Refusing the test results in automatic license revocation for one year, regardless of conviction.
            </p>
          </div>

          <div>
            <h3 style="color: #1f2937; font-size: 18px; font-weight: 600; margin-bottom: 16px;">Wisconsin-Specific Laws</h3>
            <div style="background-color: #fee2e2; padding: 16px; border-radius: 8px; border-left: 4px solid #ef4444;">
              <ul style="margin: 0; padding-left: 20px;">
                <li><strong>Absolute sobriety law:</strong> Zero tolerance for drivers under 21</li>
                <li><strong>Open container:</strong> Prohibited in passenger area of motor vehicles</li>
                <li><strong>Repeat offenses:</strong> Enhanced penalties with possible felony charges</li>
                <li><strong>Occupational license:</strong> Limited driving privileges available during revocation</li>
              </ul>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'parking-violations',
      title: 'Parking Laws and Traffic Violations',
      icon: Car,
      content: `
        <div style="space-y: 24px;">
          <div>
            <h3 style="color: #1f2937; font-size: 18px; font-weight: 600; margin-bottom: 16px;">Parking Restrictions</h3>
            <div style="background-color: #f3f4f6; padding: 16px; border-radius: 8px;">
              <ul style="margin: 0; padding-left: 20px;">
                <li>Within 15 feet of a fire hydrant</li>
                <li>Within 25 feet of a crosswalk at intersections</li>
                <li>Within 30 feet of traffic signals or stop signs</li>
                <li>Within 50 feet of a railroad crossing</li>
                <li>On sidewalks, crosswalks, or bike lanes</li>
                <li>Blocking wheelchair ramps or accessible parking</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 style="color: #1f2937; font-size: 18px; font-weight: 600; margin-bottom: 16px;">Wisconsin Point System</h3>
            <div style="background-color: #fef3c7; padding: 16px; border-radius: 8px; margin-bottom: 16px;">
              <ul style="margin: 0; padding-left: 20px;">
                <li><strong>Point accumulation:</strong> 12 points in 12 months = license suspension</li>
                <li><strong>Speeding violations:</strong> 3-6 points depending on speed</li>
                <li><strong>Reckless driving:</strong> 6 points</li>
                <li><strong>Following too closely:</strong> 4 points</li>
                <li><strong>Point reduction:</strong> Traffic safety school can reduce points</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 style="color: #1f2937; font-size: 18px; font-weight: 600; margin-bottom: 16px;">Common Violations</h3>
            <div style="background-color: #fee2e2; padding: 16px; border-radius: 8px;">
              <ul style="margin: 0; padding-left: 20px;">
                <li><strong>Speeding:</strong> $30-$300+ depending on mph over limit</li>
                <li><strong>Running red lights:</strong> $175 + 3 points</li>
                <li><strong>Illegal parking:</strong> $10-$200 depending on violation</li>
                <li><strong>No insurance:</strong> $500 fine + license suspension</li>
                <li><strong>Seat belt violation:</strong> $25 for driver, $25 for each passenger</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 style="color: #1f2937; font-size: 18px; font-weight: 600; margin-bottom: 16px;">Driver Education Options</h3>
            <p style="color: #4b5563; line-height: 1.6;">
              Wisconsin offers traffic safety school to reduce points and defensive driving courses 
              for insurance discounts. Some violations may be eligible for deferral programs.
            </p>
          </div>
        </div>
      `
    },
    {
      id: 'safe-driving',
      title: 'Safe Driving Practices',
      icon: Shield,
      content: `
        <div style="space-y: 24px;">
          <div>
            <h3 style="color: #1f2937; font-size: 18px; font-weight: 600; margin-bottom: 16px;">Seat Belt Laws</h3>
            <div style="background-color: #f3f4f6; padding: 16px; border-radius: 8px; margin-bottom: 16px;">
              <ul style="margin: 0; padding-left: 20px;">
                <li>All occupants must wear seat belts (primary enforcement law)</li>
                <li>Children under 8 years must be in appropriate car seats or booster seats</li>
                <li>Children under 4 must be in rear-facing car seats</li>
                <li>Exemptions for medical conditions with physician documentation</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 style="color: #1f2937; font-size: 18px; font-weight: 600; margin-bottom: 16px;">School Bus Laws</h3>
            <div style="background-color: #fef3c7; padding: 16px; border-radius: 8px; border-left: 4px solid #f59e0b;">
              <ul style="margin: 0; padding-left: 20px;">
                <li>Stop when bus displays flashing red lights and extended stop arm</li>
                <li>Stop on both directions unless divided by physical barrier</li>
                <li>Remain stopped until lights stop flashing and stop arm retracts</li>
                <li>Violations carry $30-$300 fines and possible license suspension</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 style="color: #1f2937; font-size: 18px; font-weight: 600; margin-bottom: 16px;">Motorcycle Awareness</h3>
            <div style="background-color: #eff6ff; padding: 16px; border-radius: 8px;">
              <ul style="margin: 0; padding-left: 20px;">
                <li>Check blind spots carefully before changing lanes</li>
                <li>Allow extra following distance behind motorcycles</li>
                <li>Be especially cautious during motorcycle season (spring-fall)</li>
                <li>Watch for lane splitting (legal in some situations)</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 style="color: #1f2937; font-size: 18px; font-weight: 600; margin-bottom: 16px;">Move Over Law</h3>
            <p style="color: #4b5563; line-height: 1.6; margin-bottom: 12px;">
              <strong>Wisconsin Move Over Law:</strong> When approaching stopped emergency vehicles, 
              tow trucks, or highway maintenance vehicles with flashing lights, move over one lane 
              if safe to do so, or slow down significantly if lane change is not possible.
            </p>
          </div>
        </div>
      `
    },
    {
      id: 'winter-driving',
      title: 'Wisconsin Winter Driving',
      icon: Snowflake,
      content: `
        <div style="space-y: 24px;">
          <div>
            <h3 style="color: #1f2937; font-size: 18px; font-weight: 600; margin-bottom: 16px;">Winter Weather Preparation</h3>
            <div style="background-color: #f0f9ff; padding: 16px; border-radius: 8px; margin-bottom: 16px;">
              <ul style="margin: 0; padding-left: 20px;">
                <li>Install snow tires or use all-season tires with good tread</li>
                <li>Carry emergency kit: blankets, food, water, flashlight, shovel</li>
                <li>Keep fuel tank at least half full to prevent fuel line freeze</li>
                <li>Clear all snow and ice from vehicle before driving</li>
                <li>Test battery, wipers, and heating system before winter</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 style="color: #1f2937; font-size: 18px; font-weight: 600; margin-bottom: 16px;">Ice and Snow Driving Techniques</h3>
            <div style="background-color: #fee2e2; padding: 16px; border-radius: 8px;">
              <ul style="margin: 0; padding-left: 20px;">
                <li><strong>Reduce speed:</strong> Drive 25% slower than normal conditions</li>
                <li><strong>Increase following distance:</strong> 8-10 seconds on icy roads</li>
                <li><strong>Gentle movements:</strong> Smooth acceleration, braking, and steering</li>
                <li><strong>Bridge awareness:</strong> Bridges freeze before road surfaces</li>
                <li><strong>Black ice:</strong> Most dangerous when temperatures near freezing</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 style="color: #1f2937; font-size: 18px; font-weight: 600; margin-bottom: 16px;">Dealing with Skids</h3>
            <div style="background-color: #fef3c7; padding: 16px; border-radius: 8px;">
              <ul style="margin: 0; padding-left: 20px;">
                <li><strong>Front-wheel skid:</strong> Ease off gas, steer in direction you want to go</li>
                <li><strong>Rear-wheel skid:</strong> Steer into the direction of the skid</li>
                <li><strong>Don't overcorrect:</strong> Make gradual steering adjustments</li>
                <li><strong>Avoid sudden braking:</strong> Can worsen skid conditions</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 style="color: #1f2937; font-size: 18px; font-weight: 600; margin-bottom: 16px;">Wisconsin Winter Laws</h3>
            <div style="background-color: #f3f4f6; padding: 16px; border-radius: 8px;">
              <p style="margin: 0; color: #374151;">
                <strong>Ice and Snow Removal:</strong> Wisconsin law requires drivers to remove 
                snow and ice from their vehicles before driving. Flying snow/ice that damages 
                other vehicles can result in liability for damages and traffic citations.
              </p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'wisconsin-specific',
      title: 'Wisconsin-Specific Driving Challenges',
      icon: Users,
      content: `
        <div style="space-y: 24px;">
          <div>
            <h3 style="color: #1f2937; font-size: 18px; font-weight: 600; margin-bottom: 16px;">Agricultural Traffic</h3>
            <div style="background-color: #f3f4f6; padding: 16px; border-radius: 8px; margin-bottom: 16px;">
              <ul style="margin: 0; padding-left: 20px;">
                <li><strong>Farm equipment:</strong> Slow-moving tractors and combines on rural roads</li>
                <li><strong>Dairy trucks:</strong> Large milk tankers, especially during morning/evening</li>
                <li><strong>Harvest season:</strong> Increased agricultural traffic August-October</li>
                <li><strong>Patience required:</strong> Farm vehicles may travel 15-25 mph</li>
                <li><strong>Safe passing:</strong> Wait for clear visibility and adequate space</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 style="color: #1f2937; font-size: 18px; font-weight: 600; margin-bottom: 16px;">Tourist and Seasonal Traffic</h3>
            <div style="background-color: #fef3c7; padding: 16px; border-radius: 8px;">
              <ul style="margin: 0; padding-left: 20px;">
                <li><strong>Wisconsin Dells area:</strong> Heavy tourist traffic during summer</li>
                <li><strong>Lake regions:</strong> Increased traffic to vacation destinations</li>
                <li><strong>Fall colors:</strong> Leaf-peeping tourists September-October</li>
                <li><strong>Ski areas:</strong> Winter sport traffic to northern regions</li>
                <li><strong>Out-of-state drivers:</strong> Unfamiliar with local roads and conditions</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 style="color: #1f2937; font-size: 18px; font-weight: 600; margin-bottom: 16px;">Wildlife Encounters</h3>
            <div style="background-color: #fee2e2; padding: 16px; border-radius: 8px;">
              <ul style="margin: 0; padding-left: 20px;">
                <li><strong>White-tailed deer:</strong> Most common wildlife hazard, especially at dawn/dusk</li>
                <li><strong>Peak collision times:</strong> October-December during mating season</li>
                <li><strong>Bear encounters:</strong> Possible in northern Wisconsin</li>
                <li><strong>Turkey and geese:</strong> May cross roads unexpectedly</li>
                <li><strong>If collision imminent:</strong> Don't swerve; brake firmly and stay in lane</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 style="color: #1f2937; font-size: 18px; font-weight: 600; margin-bottom: 16px;">Construction and Road Work</h3>
            <div style="background-color: #eff6ff; padding: 16px; border-radius: 8px;">
              <p style="margin: 0; color: #374151;">
                <strong>Orange Barrel Season:</strong> Wisconsin has extensive road construction 
                during warmer months. Expect delays, reduced speeds, and lane closures. 
                Follow flaggers and posted signs carefully. Fines are doubled in work zones.
              </p>
            </div>
          </div>
        </div>
      `
    }
  ]
}