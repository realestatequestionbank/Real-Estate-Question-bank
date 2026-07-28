#!/usr/bin/env python3
import os
import csv
import re

# Directory paths
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.join(SCRIPT_DIR, '..', 'public', 'data')

CATEGORIES = [
    'class_a',
    'class_b',
    'air_brakes',
    'combination',
    'pre_trip',
    'hazmat',
    'passenger',
    'bus',
    'double',
    'tank'
]

STATES = ['texas', 'florida', 'new-york']

# State-specific configuration options
STATE_CONFIGS = {
    'texas': {
        'state_name': 'Texas',
        'replacements': [
            (r'\bCalifornia Commercial Driver Handbook\b', 'Texas Commercial Motor Vehicle Driver Handbook'),
            (r'\bCalifornia Commercial Driver\'s Handbook\b', 'Texas Commercial Motor Vehicle Driver Handbook'),
            (r'California Highway Patrol \(CHP\)', 'Texas Department of Public Safety (DPS)'),
            (r'\bCalifornia Highway Patrol\b', 'Texas Department of Public Safety (DPS)'),
            (r'\bCHP\b', 'DPS'),
            (r'\bCalifornia Environmental Protection Agency\b', 'Texas Commission on Environmental Quality (TCEQ)'),
            (r'\bCalifornia Energy Commission\b', 'Texas Railroad Commission'),
            (r'\bCalifornia\b', 'Texas'),
            (r'\bDMV\b', 'DPS'),
            (r'\bdmv\.ca\.gov\b', 'dps.texas.gov'),
        ],
        'adjust_height': False
    },
    'florida': {
        'state_name': 'Florida',
        'replacements': [
            (r'\bCalifornia Commercial Driver Handbook\b', 'Florida Commercial Driver License Manual'),
            (r'\bCalifornia Commercial Driver\'s Handbook\b', 'Florida Commercial Driver License Manual'),
            (r'California Highway Patrol \(CHP\)', 'Florida Highway Patrol (FHP)'),
            (r'\bCalifornia Highway Patrol\b', 'Florida Highway Patrol (FHP)'),
            (r'\bCHP\b', 'FHP'),
            (r'\bCalifornia Environmental Protection Agency\b', 'Florida Department of Environmental Protection (DEP)'),
            (r'\bCalifornia Energy Commission\b', 'Florida Public Service Commission'),
            (r'\bCalifornia\b', 'Florida'),
            (r'\bDMV\b', 'FLHSMV'),
            (r'\bdmv\.ca\.gov\b', 'flhsmv.gov'),
        ],
        'adjust_height': True,
        'height_text': '13 feet, 6 inches',
        'height_explanation': 'In Florida, the maximum height for a vehicle and/or load is 13 feet, 6 inches, as measured from the road surface. Double-deck buses may measure up to 14 feet, but the general maximum is 13 feet, 6 inches.'
    },
    'new-york': {
        'state_name': 'New York',
        'replacements': [
            (r'\bCalifornia Commercial Driver Handbook\b', 'New York State Commercial Driver\'s Manual'),
            (r'\bCalifornia Commercial Driver\'s Handbook\b', 'New York State Commercial Driver\'s Manual'),
            (r'California Highway Patrol \(CHP\)', 'New York State Police'),
            (r'\bCalifornia Highway Patrol\b', 'New York State Police'),
            (r'\bCHP\b', 'State Police'),
            (r'\bCalifornia Environmental Protection Agency\b', 'New York State Department of Environmental Conservation (DEC)'),
            (r'\bCalifornia Energy Commission\b', 'New York State Public Service Commission'),
            (r'\bCalifornia\b', 'New York'),
            (r'\bDMV\b', 'DMV'),  # New York also uses DMV
            (r'\bdmv\.ca\.gov\b', 'dmv.ny.gov'),
        ],
        'adjust_height': True,
        'height_text': '13 feet, 6 inches',
        'height_explanation': 'In New York, the maximum height for a vehicle and/or load is 13 feet, 6 inches, as measured from the road surface.'
    }
}

def clean_and_replace(text, config):
    if not text:
        return ''
    
    # Run all string replacements defined for the state
    for pattern, replacement in config['replacements']:
        text = re.sub(pattern, replacement, text)
        
    return text

def process_file(category, state_key):
    config = STATE_CONFIGS[state_key]
    
    src_filename = f"california_cdl_{category}_questions.csv"
    dest_filename = f"{state_key}_cdl_{category}_questions.csv"
    
    src_path = os.path.join(DATA_DIR, src_filename)
    dest_path = os.path.join(DATA_DIR, dest_filename)
    
    if not os.path.exists(src_path):
        print(f"Warning: Source file {src_path} does not exist. Skipping.")
        return
        
    print(f"Generating {dest_filename} from {src_filename}...")
    
    with open(src_path, 'r', encoding='utf-8') as f_in, open(dest_path, 'w', encoding='utf-8', newline='') as f_out:
        reader = csv.DictReader(f_in)
        fieldnames = reader.fieldnames
        writer = csv.DictWriter(f_out, fieldnames=fieldnames)
        writer.writeheader()
        
        for row in reader:
            # Check if this is the height limit question (ID 8498 or matches text)
            if config['adjust_height'] and (row['id'] == '8498' or 'maximum height of a load' in row['question'].lower()):
                row['option_c'] = config['height_text']
                row['explanation'] = config['height_explanation']
            
            # Apply translations to text fields
            row['question'] = clean_and_replace(row['question'], config)
            row['option_a'] = clean_and_replace(row['option_a'], config)
            row['option_b'] = clean_and_replace(row['option_b'], config)
            row['option_c'] = clean_and_replace(row['option_c'], config)
            row['option_d'] = clean_and_replace(row['option_d'], config)
            row['explanation'] = clean_and_replace(row['explanation'], config)
            
            writer.writerow(row)

def main():
    print("Starting CDL state-specific question generator...")
    for state in STATES:
        print(f"\n--- Processing state: {state.upper()} ---")
        for category in CATEGORIES:
            process_file(category, state)
    print("\nState-specific CDL questions successfully generated!")

if __name__ == '__main__':
    main()
