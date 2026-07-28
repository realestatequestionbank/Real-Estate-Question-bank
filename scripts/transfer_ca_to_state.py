#!/usr/bin/env python3
"""
Transfer generic driving questions from California premium to a target state.
Filters out CA-specific content and maps sections appropriately.
Usage: python3 transfer_ca_to_state.py <state-slug>
  e.g. python3 transfer_ca_to_state.py pennsylvania
"""

import csv
import re
import sys
from difflib import SequenceMatcher

BASE = "/Users/pranav/Documents/DMV_Question_Bank/webv3/public/data"
CA_CSV = f"{BASE}/questions_california_premium.csv"

# California-specific keywords/patterns to exclude (case-insensitive)
EXCLUDE_PATTERNS = [
    r'\bCalifornia\b',
    r'\bCHP\b',
    r'\bSR[ -]?1\b',
    r'\bClass C\b',
    r'\bClass C license\b',
    r'\bCalifornia Driver\'?s? Handbook\b',
    r'\bCalifornia Vehicle Code\b',
    r'\bCA DMV\b',
    r'\bCA driver\b',
    r'\bCalifornia Highway Patrol\b',
]

# Patterns to clean from notes
NOTE_CLEAN_PATTERNS = [
    (r'(?:According to |Per |Under |In )?(?:the )?California Driver\'?s? Handbook,?\s*', ''),
    (r'(?:The )?California Driver\'?s? Handbook states,?\s*["\']?', ''),
    (r'\s*(?:according to|per|as stated in) the California Driver\'?s? Handbook\.?', '.'),
    (r'In (?:many )?states,? including California,?\s*', 'In most states, '),
    (r', including California,?', ''),
    (r'California\'?s?\s+', ''),
]

# Section mapping: CA section -> (target section-num, target section-name)
SECTION_MAP = {
    2: (2, "Traffic Laws & Rules of the Road"),
    3: (3, "Signs, Signals & Road Markings"),
    4: (4, "Safe & Defensive Driving Practices"),
    5: (4, "Safe & Defensive Driving Practices"),
    6: (6, "Alcohol, Drugs & Impaired Driving"),
    7: (7, "Vehicle Ownership & Responsibilities"),
    8: (8, "Special Situations & Road Users"),
}

TRAFFIC_LAW_KEYWORDS = [
    r'speed limit', r'right.of.way', r'yield', r'parking', r'u-turn',
    r'passing', r'lane change', r'one.way', r'two.way', r'intersection',
    r'traffic law', r'traffic violation', r'fine', r'penalty', r'illegal',
    r'legal', r'permit', r'license', r'registration', r'violation',
    r'right turn', r'left turn', r'crosswalk', r'school zone',
    r'stop sign', r'traffic signal', r'red light', r'green light',
    r'solid line', r'broken line', r'double line', r'center line',
    r'carpool', r'HOV', r'freeway entrance', r'merging',
]

SPECIAL_CONDITIONS_KEYWORDS = [
    r'\bfog\b', r'\brain\b', r'\bsnow\b', r'\bice\b', r'\bslippery\b',
    r'\bnight\b', r'\bdark\b', r'\bglare\b', r'\bsun\b',
    r'\bflood', r'\bwater on', r'\bwet road', r'\bhydroplan',
    r'\bwind\b', r'\bstorm\b', r'\bvisibility\b',
    r'\bcurve\b', r'\bhill\b', r'\bmountain\b', r'\bdownhill\b', r'\buphill\b',
    r'\bwork zone\b', r'\bconstruction\b',
]

EXCLUDE_CONTENT = [
    "under 18",
    "under the age of 18",
    "provisional license",
    "provisional permit",
    "DMV handbook",
    "the handbook states",
    "the handbook says",
    "the handbook recommends",
    "$1,000",
    "$750",
    "$500",
    "financial responsibility",
    "SR-22",
    "vehicle registration fee",
    "smog check",
    "smog inspection",
    "emission inspection",
    "California",
    "signal for at least five seconds",
    "signal at least five seconds",
    "signal at least 5 seconds",
    "five seconds before you change lanes",
    "15 mph",
    "basic speed law",
    "notify the DMV within 5 days",
    "notify the DMV within",
    "notify DMV within",
    "willfully flees",
    "peace officer is signaling",
    "bicycle lane is illegal, except",
    "diamond-shaped yellow sign with the letters",
]


def is_ca_specific(row):
    text = f"{row['question']} {row['options']} {row.get('note', '')}"
    for pattern in EXCLUDE_PATTERNS:
        if re.search(pattern, text, re.IGNORECASE):
            return True
    text_lower = text.lower()
    for keyword in EXCLUDE_CONTENT:
        if keyword.lower() in text_lower:
            return True
    if row['section-num'] == '1':
        return True
    return False


def clean_note(note):
    cleaned = note
    for pattern, replacement in NOTE_CLEAN_PATTERNS:
        cleaned = re.sub(pattern, replacement, cleaned, flags=re.IGNORECASE)
    cleaned = re.sub(r'\s+', ' ', cleaned).strip()
    cleaned = re.sub(r'\.\.+', '.', cleaned)
    return cleaned


def similar(a, b, threshold=0.75):
    a_norm = re.sub(r'[^a-z0-9\s]', '', a.lower()).strip()
    b_norm = re.sub(r'[^a-z0-9\s]', '', b.lower()).strip()
    return SequenceMatcher(None, a_norm, b_norm).ratio() >= threshold


def map_section(row):
    ca_section = int(row['section-num'])
    if ca_section not in SECTION_MAP:
        return None, None
    target_section, target_name = SECTION_MAP[ca_section]

    if ca_section == 4:
        text_lower = f"{row['question']} {row['options']}".lower()
        if any(re.search(kw, text_lower) for kw in TRAFFIC_LAW_KEYWORDS):
            return 2, "Traffic Laws & Rules of the Road"
        return 4, "Safe & Defensive Driving Practices"

    if ca_section == 5:
        text_lower = f"{row['question']} {row['options']}".lower()
        if any(re.search(kw, text_lower) for kw in SPECIAL_CONDITIONS_KEYWORDS):
            return 5, "Driving in Special Conditions"
        return 4, "Safe & Defensive Driving Practices"

    return target_section, target_name


def read_csv(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        return list(csv.DictReader(f))


def write_csv(filepath, rows, fieldnames):
    with open(filepath, 'w', encoding='utf-8', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)


def main():
    if len(sys.argv) < 2:
        print("Usage: python3 transfer_ca_to_state.py <state-slug>")
        sys.exit(1)

    state = sys.argv[1]
    state_csv = f"{BASE}/questions_{state}_premium.csv"
    out_csv = f"{BASE}/questions_{state}_premium_new.csv"

    ca_questions = read_csv(CA_CSV)
    state_questions = read_csv(state_csv)

    print(f"California questions: {len(ca_questions)}")
    print(f"{state.replace('-', ' ').title()} questions: {len(state_questions)}")

    state_question_texts = [q['question'] for q in state_questions]

    transferred = []
    excluded_ca_specific = 0
    excluded_duplicate = 0
    excluded_no_mapping = 0

    for row in ca_questions:
        if is_ca_specific(row):
            excluded_ca_specific += 1
            continue

        is_dup = False
        for sq in state_question_texts:
            if similar(row['question'], sq):
                is_dup = True
                break
        if is_dup:
            excluded_duplicate += 1
            continue

        sec, name = map_section(row)
        if sec is None:
            excluded_no_mapping += 1
            continue

        transferred.append({
            'section-num': sec,
            'section-name': name,
            'question': row['question'],
            'options': row['options'],
            'correct-answer': row['correct-answer'],
            'note': clean_note(row.get('note', '')),
            'difficulty': row.get('difficulty', ''),
        })

    print(f"\nExcluded (CA-specific): {excluded_ca_specific}")
    print(f"Excluded (duplicate): {excluded_duplicate}")
    print(f"Excluded (no mapping): {excluded_no_mapping}")
    print(f"Transferred: {len(transferred)}")

    # Remove internal duplicates
    unique_transferred = []
    for q in transferred:
        if not any(similar(q['question'], e['question']) for e in unique_transferred):
            unique_transferred.append(q)

    if len(unique_transferred) < len(transferred):
        print(f"Removed {len(transferred) - len(unique_transferred)} internal duplicates")
        transferred = unique_transferred

    combined = list(state_questions) + transferred

    print(f"\nFinal combined total: {len(combined)}")

    section_counts = {}
    for q in combined:
        key = f"{q['section-num']} - {q['section-name']}"
        section_counts[key] = section_counts.get(key, 0) + 1

    print("\nSection distribution:")
    for key in sorted(section_counts.keys()):
        print(f"  {key}: {section_counts[key]}")

    fieldnames = ['section-num', 'section-name', 'question', 'options', 'correct-answer', 'note', 'difficulty']
    write_csv(out_csv, combined, fieldnames)
    print(f"\nWritten to: {out_csv}")


if __name__ == '__main__':
    main()
