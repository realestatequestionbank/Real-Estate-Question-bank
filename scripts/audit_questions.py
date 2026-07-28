#!/usr/bin/env python3
import os
import csv
import re
import sys

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
    'tank',
    'ambulance'
]

def clean_text(str_val):
    if not str_val:
        return ''
    return str_val.strip()

def audit_file(filepath, category_name):
    errors = []
    warnings = []
    question_map = {} # question_text_normalized -> list of lines/IDs
    total_questions = 0
    duplicate_questions = 0
    prefix_issues = 0
    invalid_correct_answers = 0
    empty_fields = 0
    translation_errors = 0
    
    if not os.path.exists(filepath):
        return {
            'exists': False,
            'errors': [f"File does not exist: {filepath}"],
            'warnings': [],
            'total_questions': 0
        }
        
    try:
        # 1. Quick check for unclosed quotes in raw text
        with open(filepath, 'r', encoding='utf-8') as f:
            raw = f.read()
            if raw.count('"') % 2 != 0:
                errors.append("Odd number of double quotes in the file. CSV parsing may fail or misalign fields.")
                
        # 2. Parse CSV
        with open(filepath, 'r', encoding='utf-8') as f:
            reader = csv.DictReader(f)
            headers = reader.fieldnames
            if not headers:
                errors.append("No headers found in CSV.")
                return {
                    'exists': True,
                    'errors': errors,
                    'warnings': [],
                    'total_questions': 0
                }
                
            expected_headers = ['id', 'question', 'image', 'option_a', 'option_b', 'option_c', 'option_d', 'correct_answer', 'explanation']
            missing = [h for h in expected_headers if h not in [x.lower().strip() for x in headers]]
            if missing:
                errors.append(f"Missing expected CSV headers: {missing}")
                
            for idx, row in enumerate(reader, start=2):
                total_questions += 1
                q_id = clean_text(row.get('id', ''))
                question = clean_text(row.get('question', ''))
                image = clean_text(row.get('image', ''))
                opt_a = clean_text(row.get('option_a', ''))
                opt_b = clean_text(row.get('option_b', ''))
                opt_c = clean_text(row.get('option_c', ''))
                opt_d = clean_text(row.get('option_d', ''))
                correct = clean_text(row.get('correct_answer', '')).upper()
                explanation = clean_text(row.get('explanation', ''))
                
                # Check for empty ID or question
                if not q_id:
                    errors.append(f"Line {idx}: Missing ID.")
                    empty_fields += 1
                if not question:
                    errors.append(f"Line {idx} (ID: {q_id}): Missing question text.")
                    empty_fields += 1
                    
                # Check for minimum options
                if not opt_a or not opt_b:
                    errors.append(f"Line {idx} (ID: {q_id}): Option A and Option B are required and cannot be empty.")
                    empty_fields += 1
                    
                # Check option prefixes (e.g. A. or a))
                for opt_name, opt_val in [('option_a', opt_a), ('option_b', opt_b), ('option_c', opt_c), ('option_d', opt_d)]:
                    if opt_val:
                        if re.match(r'^[a-dAD][\.\)]\s', opt_val):
                            errors.append(f"Line {idx} (ID: {q_id}): {opt_name} has redundant option prefix: '{opt_val[:15]}...'")
                            prefix_issues += 1
                            
                # Check option duplicates (e.g. Option A and Option B have identical text)
                opts = [opt_a, opt_b, opt_c, opt_d]
                filled_opts = [o.lower() for o in opts if o]
                if len(filled_opts) != len(set(filled_opts)):
                    errors.append(f"Line {idx} (ID: {q_id}): Duplicate options detected: {[o[:20] for o in opts if o]}")
                    
                # Check correct answer validity
                if not correct:
                    errors.append(f"Line {idx} (ID: {q_id}): Correct answer is empty.")
                    invalid_correct_answers += 1
                elif correct not in ['A', 'B', 'C', 'D']:
                    errors.append(f"Line {idx} (ID: {q_id}): Correct answer '{correct}' is invalid (must be A, B, C, or D).")
                    invalid_correct_answers += 1
                else:
                    opt_map = {'A': opt_a, 'B': opt_b, 'C': opt_c, 'D': opt_d}
                    if not opt_map[correct]:
                        errors.append(f"Line {idx} (ID: {q_id}): Correct answer points to '{correct}', but that option is empty.")
                        invalid_correct_answers += 1
                        
                # Check for duplicate questions (based on normalized question text and options)
                if question:
                    norm_q = re.sub(r'\s+', ' ', question.lower())
                    # Sort filled options to find duplicates that are just rearranged
                    norm_opts = "||".join(sorted(filled_opts))
                    dup_key = f"{norm_q}@@{norm_opts}"
                    
                    if dup_key in question_map:
                        prev_idx, prev_id = question_map[dup_key]
                        errors.append(f"Line {idx} (ID: {q_id}): Duplicate question and options as Line {prev_idx} (ID: {prev_id}).")
                        duplicate_questions += 1
                    else:
                        question_map[dup_key] = (idx, q_id)
                        
                # Check for translation corruption
                for field_name, field_val in [('question', question), ('option_a', opt_a), ('option_b', opt_b), ('option_c', opt_c), ('option_d', opt_d), ('explanation', explanation)]:
                    if "Error 500" in field_val or "Server Error" in field_val or "That’s an error" in field_val or "That's an error" in field_val:
                        errors.append(f"Line {idx} (ID: {q_id}): Translation error detected in '{field_name}' field.")
                        translation_errors += 1
                        
    except Exception as e:
        errors.append(f"Fatal parsing error: {e}")
        
    return {
        'exists': True,
        'errors': errors,
        'warnings': warnings,
        'total_questions': total_questions,
        'duplicate_questions': duplicate_questions,
        'prefix_issues': prefix_issues,
        'invalid_correct_answers': invalid_correct_answers,
        'empty_fields': empty_fields,
        'translation_errors': translation_errors
    }

def main():
    state = 'california'
    if len(sys.argv) > 1:
        state = sys.argv[1]
        
    print(f"==================================================")
    print(f"AUDITING CDL QUESTION BANK FOR STATE: {state.upper()}")
    print(f"==================================================")
    
    any_errors = False
    
    for category in CATEGORIES:
        # Audit English file
        eng_filename = f"{state}_cdl_{category}_questions.csv"
        eng_path = os.path.join(DATA_DIR, eng_filename)
        
        print(f"\n--- Category: {category} (English) ---")
        eng_res = audit_file(eng_path, category)
        if not eng_res['exists']:
            print("  FILE MISSING")
            continue
            
        print(f"  Total Questions: {eng_res['total_questions']}")
        print(f"  Duplicates:      {eng_res['duplicate_questions']}")
        print(f"  Prefix Issues:   {eng_res['prefix_issues']}")
        print(f"  Bad Answers:     {eng_res['invalid_correct_answers']}")
        print(f"  Empty Fields:    {eng_res['empty_fields']}")
        print(f"  Translation Err: {eng_res['translation_errors']}")
        
        if eng_res['errors']:
            any_errors = True
            print("  Errors:")
            for err in eng_res['errors'][:10]:
                print(f"    - {err}")
            if len(eng_res['errors']) > 10:
                print(f"    - ... and {len(eng_res['errors']) - 10} more errors.")
                
        # Audit Punjabi file
        pa_filename = f"{state}_cdl_{category}_questions_pa.csv"
        pa_path = os.path.join(DATA_DIR, pa_filename)
        
        # Check if Punjabi file exists before auditing
        if os.path.exists(pa_path):
            print(f"\n--- Category: {category} (Punjabi) ---")
            pa_res = audit_file(pa_path, category)
            print(f"  Total Questions: {pa_res['total_questions']}")
            print(f"  Duplicates:      {pa_res['duplicate_questions']}")
            print(f"  Prefix Issues:   {pa_res['prefix_issues']}")
            print(f"  Bad Answers:     {pa_res['invalid_correct_answers']}")
            print(f"  Empty Fields:    {pa_res['empty_fields']}")
            print(f"  Translation Err: {pa_res['translation_errors']}")
            
            if pa_res['errors']:
                any_errors = True
                print("  Errors:")
                for err in pa_res['errors'][:10]:
                    print(f"    - {err}")
                if len(pa_res['errors']) > 10:
                    print(f"    - ... and {len(pa_res['errors']) - 10} more errors.")
                    
    print("\n==================================================")
    if any_errors:
        print("AUDIT RESULT: FAIL (Issues found in CSV files)")
        sys.exit(1)
    else:
        print("AUDIT RESULT: PASS (All checked files are clean!)")
        sys.exit(0)

if __name__ == '__main__':
    main()
