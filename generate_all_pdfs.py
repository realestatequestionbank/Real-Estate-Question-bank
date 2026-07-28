#!/usr/bin/env python3
"""
Generate PDFs for all states
Batch script to create study guides for all 49 states
"""

import os
import glob
import subprocess
import sys
from pathlib import Path

# State name mapping for proper formatting
STATE_NAMES = {
    'alabama': 'Alabama',
    'alaska': 'Alaska',
    'arizona': 'Arizona',
    'arkansas': 'Arkansas',
    'california': 'California',
    'colorado': 'Colorado',
    'connecticut': 'Connecticut',
    'delaware': 'Delaware',
    'florida': 'Florida',
    'georgia': 'Georgia',
    'hawaii': 'Hawaii',
    'idaho': 'Idaho',
    'illinois': 'Illinois',
    'indiana': 'Indiana',
    'iowa': 'Iowa',
    'kansas': 'Kansas',
    'kentucky': 'Kentucky',
    'louisiana': 'Louisiana',
    'maine': 'Maine',
    'maryland': 'Maryland',
    'massachusetts': 'Massachusetts',
    'michigan': 'Michigan',
    'minnesota': 'Minnesota',
    'mississippi': 'Mississippi',
    'missouri': 'Missouri',
    'montana': 'Montana',
    'nebraska': 'Nebraska',
    'nevada': 'Nevada',
    'new-hampshire': 'New Hampshire',
    'new-jersey': 'New Jersey',
    'new-mexico': 'New Mexico',
    'new-york': 'New York',
    'north-carolina': 'North Carolina',
    'north-dakota': 'North Dakota',
    'ohio': 'Ohio',
    'oklahoma': 'Oklahoma',
    'oregon': 'Oregon',
    'pennsylvania': 'Pennsylvania',
    'rhode-island': 'Rhode Island',
    'south-carolina': 'South Carolina',
    'south-dakota': 'South Dakota',
    'tennessee': 'Tennessee',
    'texas': 'Texas',
    'utah': 'Utah',
    'vermont': 'Vermont',
    'virginia': 'Virginia',
    'washington': 'Washington',
    'west-virginia': 'West Virginia',
    'wisconsin': 'Wisconsin',
    'wyoming': 'Wyoming'
}

def extract_state_from_filename(filename):
    """Extract state name from CSV filename"""
    base = os.path.basename(filename)
    if not base.startswith('questions_'):
        return None
    
    # Remove prefix and suffix
    state_part = base.replace('questions_', '').replace('_premium.csv', '').replace('_free.csv', '').replace('.csv', '')
    
    return STATE_NAMES.get(state_part.lower(), state_part.replace('_', ' ').replace('-', ' ').title())

def main():
    """Generate PDFs for all states"""
    
    # Check if reportlab is installed
    try:
        import reportlab
    except ImportError:
        print("❌ Error: reportlab is required. Install with: pip install reportlab")
        sys.exit(1)
    
    # Find all CSV files
    data_dir = "public/data"
    if not os.path.exists(data_dir):
        print(f"❌ Error: Data directory {data_dir} not found")
        sys.exit(1)
    
    # Look for premium CSV files (they have more questions)
    csv_files = glob.glob(f"{data_dir}/questions_*_premium.csv")
    
    if not csv_files:
        print("❌ No premium CSV files found. Looking for any question CSV files...")
        csv_files = glob.glob(f"{data_dir}/questions_*.csv")
        if not csv_files:
            print("❌ No CSV files found in the data directory")
            sys.exit(1)
    
    print(f"🔍 Found {len(csv_files)} CSV files")
    
    # Create output directory
    output_dir = "pdf_output"
    os.makedirs(output_dir, exist_ok=True)
    
    success_count = 0
    failed_states = []
    
    for csv_file in sorted(csv_files):
        state_name = extract_state_from_filename(csv_file)
        if not state_name:
            print(f"⚠️  Skipping {csv_file} - could not extract state name")
            continue
        
        # Generate output filename
        state_slug = state_name.lower().replace(' ', '_').replace('-', '_')
        output_file = f"{output_dir}/{state_slug}_dmv_study_guide.pdf"
        
        print(f"\n🔄 Processing {state_name}...")
        
        try:
            # Run the PDF generator
            result = subprocess.run([
                sys.executable, "generate_pdf.py", 
                csv_file, output_file, state_name
            ], capture_output=True, text=True, timeout=300)  # 5 minute timeout
            
            if result.returncode == 0:
                print(f"✅ {state_name} - Success")
                success_count += 1
            else:
                print(f"❌ {state_name} - Failed")
                print(f"Error: {result.stderr}")
                failed_states.append(state_name)
                
        except subprocess.TimeoutExpired:
            print(f"❌ {state_name} - Timeout (took longer than 5 minutes)")
            failed_states.append(state_name)
        except Exception as e:
            print(f"❌ {state_name} - Error: {e}")
            failed_states.append(state_name)
    
    # Summary
    print(f"\n{'='*50}")
    print(f"📊 GENERATION SUMMARY")
    print(f"{'='*50}")
    print(f"✅ Successful: {success_count}")
    print(f"❌ Failed: {len(failed_states)}")
    print(f"📁 Output directory: {output_dir}")
    
    if failed_states:
        print(f"\n❌ Failed states:")
        for state in failed_states:
            print(f"   - {state}")
    
    if success_count > 0:
        print(f"\n🎉 Generated {success_count} PDF study guides!")
        
        # Calculate total size
        total_size = 0
        for pdf_file in glob.glob(f"{output_dir}/*.pdf"):
            total_size += os.path.getsize(pdf_file)
        
        total_size_mb = total_size / 1024 / 1024
        print(f"📊 Total size: {total_size_mb:.1f} MB")
        
        print(f"\n💡 Usage tips:")
        print(f"   - Upload PDFs to your website's download section")
        print(f"   - Compress PDFs if needed: https://smallpdf.com/compress-pdf")
        print(f"   - Consider offering as lead magnets for email signups")
    
    if len(failed_states) > 0:
        sys.exit(1)

if __name__ == "__main__":
    main()