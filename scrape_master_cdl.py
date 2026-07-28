#!/usr/bin/env python3
"""
Master CDL Question Bank Scraper & Partitioner
Scrapes CDL General Knowledge and Class A/B questions across 10 major states from:
1. dmv-written-test.com (knowledge-test-class-a and knowledge-test-class-b)
2. driving-tests.org (General Knowledge practice tests and simulators)

It then algortihmically partitions them into:
- Common CDL Bank (cdl_common_questions.csv): Federally standardized questions.
- State-Specific CDL Banks (state_specific/<state>_cdl_questions.csv): State-specific rules or phrasing.
"""
import os
import csv
import re
import time
import requests
from bs4 import BeautifulSoup
import builtins
import json

# Force all print statements to flush immediately
def print(*args, **kwargs):
    kwargs['flush'] = True
    builtins.print(*args, **kwargs)

DEFAULT_USER_AGENT = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
    "AppleWebKit/537.36 (KHTML, like Gecko) "
    "Chrome/120.0.0.0 Safari/537.36"
)

STATES = [
    "california",
    "texas",
    "florida",
    "new-york",
    "pennsylvania",
    "illinois",
    "ohio",
    "georgia",
    "north-carolina",
    "michigan"
]

STATE_ABBRS = {
    "california": "ca",
    "texas": "tx",
    "florida": "fl",
    "new-york": "ny",
    "pennsylvania": "pa",
    "illinois": "il",
    "ohio": "oh",
    "georgia": "ga",
    "north-carolina": "nc",
    "michigan": "mi"
}

STATE_KEYWORDS = [
    r'\bcalifornia\b', r'\btexas\b', r'\bflorida\b', r'\bnew\s+york\b', r'\bnew-york\b',
    r'\bpennsylvania\b', r'\billinois\b', r'\bohio\b', r'\bgeorgia\b', r'\bnorth\s+carolina\b',
    r'\bnorth-carolina\b', r'\bmichigan\b', r'\bca\b', r'\btx\b', r'\bfl\b', r'\bny\b',
    r'\bpa\b', r'\bil\b', r'\boh\b', r'\bga\b', r'\bnc\b', r'\bmi\b'
]
STATE_REGEX = re.compile('|'.join(STATE_KEYWORDS), re.IGNORECASE)

def clean_text(text):
    if not text:
        return ""
    text = text.replace('\xa0', ' ')
    return re.sub(r'\s+', ' ', text).strip()

def clean_question_text(text):
    text = clean_text(text)
    text = re.sub(r'^\d+\.\s*', '', text)
    return text

# --- DMV-WRITTEN-TEST.COM SCRAPER ---
def scrape_dmv_written_test(session, state):
    print(f"\n--- DMV-WRITTEN-TEST: {state.upper()} ---")
    test_types = ["knowledge-test-class-a", "knowledge-test-class-b"]
    questions = []
    seen_ids = set()
    
    for t_type in test_types:
        for test_num in range(1, 4): # Up to 3 tests per type
            for page_num in range(1, 6): # Up to 5 pages per test
                url = f"https://www.dmv-written-test.com/{state}/cdl/{t_type}-{test_num}.html?page={page_num}"
                try:
                    r = session.get(url, timeout=15)
                    if r.status_code == 404:
                        break
                    if r.status_code != 200:
                        continue
                        
                    soup = BeautifulSoup(r.text, "html.parser")
                    rows = soup.find_all(class_="question-row")
                    if not rows:
                        break
                        
                    new_added = 0
                    for row in rows:
                        qid = row.get("data-id") or row.get("data-number")
                        if qid in seen_ids:
                            continue
                        
                        # Parse question
                        q_div = row.find(class_="question")
                        q_text = ""
                        q_img = ""
                        if q_div:
                            h3 = q_div.find("h3")
                            if h3:
                                q_text = clean_question_text(h3.get_text())
                            img = q_div.find("img")
                            if img:
                                q_img = img.get("src", "")
                                
                        options = {}
                        pick = row.find(class_="answer-pick-holder")
                        if pick:
                            checks = pick.find_all(class_="form-check")
                            for check in checks:
                                radio = check.find("input", type="radio")
                                label = check.find("label")
                                if radio and label:
                                    val = radio.get("value")
                                    txt = clean_text(label.get_text())
                                    if val:
                                        options[val] = txt
                                        
                        correct = row.get("data-value")
                        
                        exp = ""
                        exp_row = row.find(class_="explanation-row")
                        if exp_row:
                            summary = exp_row.find("summary")
                            if summary:
                                exp = clean_text(summary.get_text())
                            else:
                                full_exp = exp_row.find(class_="full-explanation")
                                if full_exp:
                                    exp = clean_text(full_exp.get_text())
                                    
                        seen_ids.add(qid)
                        questions.append({
                            'id': qid,
                            'question': q_text,
                            'image': q_img,
                            'options': options,
                            'correct_answer': correct,
                            'explanation': exp,
                            'source': 'dmv-written-test'
                        })
                        new_added += 1
                        
                    print(f"Scraped {url} -> {len(rows)} questions ({new_added} new)")
                    if new_added == 0:
                        break
                        
                    time.sleep(1.0)
                except Exception as e:
                    print(f"Error scraping {url}: {e}")
                    time.sleep(2.0)
                    
    return questions

# --- DRIVING-TESTS.ORG SCRAPER ---
def discover_driving_tests_urls(session, state):
    landing_url = f"https://driving-tests.org/{state}/cdl/"
    try:
        r = session.get(landing_url, timeout=15)
        if r.status_code != 200:
            return []
        soup = BeautifulSoup(r.text, 'html.parser')
        
        urls = []
        for a in soup.find_all('a'):
            href = a.get('href', '')
            # Match general cdl practice tests and skip endorsements/signs
            if ('cdl' in href or 'practice-test' in href) and 'pre-trip' not in href:
                # Filter out other categories
                exclude = ['hazmat', 'bus', 'passenger', 'air-brakes', 'air-brake', 'combination', 'double', 'tank', 'motorcycle', 'sign', 'marathon', 'checklist']
                if not any(x in href for x in exclude):
                    if href.startswith('/'):
                        full = f"https://driving-tests.org{href}"
                    else:
                        full = href
                    if full not in urls:
                        urls.append(full)
        return urls
    except Exception as e:
        print(f"Error discovering driving-tests URLs for {state}: {e}")
        return []

def scrape_driving_tests_quiz(session, url, state):
    session.cookies.clear()
    session.headers.update({'Referer': url})
    
    # Load test page to find testId
    try:
        r = session.get(url, timeout=15)
        m = re.search(r'testId=(\d+)', r.text)
        if not m:
            return []
        test_id = int(m.group(1))
    except Exception as e:
        print(f"Error loading {url} to get testId: {e}")
        return []
        
    print(f"Scraping driving-tests Test ID {test_id} ({url.split('/')[-2]})...")
    
    # 1. Initialize
    try:
        r_init = session.get(f'https://driving-tests.org/a.test.php?id={test_id}', timeout=15)
        data = r_init.json()
    except Exception as e:
        print(f"Error initializing test {test_id}: {e}")
        return []
        
    sid = data.get('sid')
    if not sid:
        return []
    total_qs = data.get('qs', 0)
    
    # 2. Traverse (explanations are fetched dynamically during traversal)
    q = data.get('question')
    temp_questions = {}
    letter_mapping = {0: 'A', 1: 'B', 2: 'C', 3: 'D'}
    
    for qn in range(1, total_qs + 1):
        if not q:
            break
        qid = q.get('qid')
        text = q.get('text')
        choices = q.get('answers')
        
        # Post answer
        url_ans = f'https://driving-tests.org/a.test.php?id={test_id}&qn={qn}&qid={qid}&an=1'
        try:
            r_ans = session.post(url_ans, data={'s': sid}, timeout=15)
            res = r_ans.json()
        except Exception as e:
            print(f"Error answering Q{qn}: {e}")
            break
            
        correct_idx = res.get('qA')
        if correct_idx is None:
            correct_idx = 0 if res.get('anResult') == 1 else 0
            
        correct_letter = letter_mapping.get(correct_idx, 'A')
        options = {}
        for idx, choice in enumerate(choices):
            let = letter_mapping.get(idx)
            if let:
                options[let] = choice
                
        temp_questions[qid] = {
            'id': qid,
            'question': text,
            'image': '',
            'options': options,
            'correct_answer': correct_letter,
            'explanation': res.get('explanation', ''),
            'source': 'driving-tests'
        }
        
        q = res.get('question')
        time.sleep(0.5)
        
    return list(temp_questions.values())

def scrape_driving_tests(session, state):
    print(f"\n--- DRIVING-TESTS: {state.upper()} ---")
    urls = discover_driving_tests_urls(session, state)
    print(f"Discovered {len(urls)} tests for {state.upper()}")
    
    questions = []
    seen_texts = set()
    
    for url in urls:
        quiz_qs = scrape_driving_tests_quiz(session, url, state)
        new_added = 0
        for q in quiz_qs:
            norm_text = q['question'].lower().strip()
            if norm_text not in seen_texts:
                seen_texts.add(norm_text)
                questions.append(q)
                new_added += 1
        print(f"Added {new_added} unique questions from test.")
        time.sleep(2.0)
        
    return questions

# --- PARTITIONING ALGORITHM ---
def normalize_and_partition(scraped_data):
    """
    scraped_data is a dict: state_name -> list of questions
    returns: (common_list, state_specific_dict)
    """
    print("\n=== RUNNING PARTITIONING ALGORITHM ===")
    
    common_bank = []
    state_specific_bank = {state: [] for state in scraped_data.keys()}
    
    # We will build a index of normalized question text -> dict of state -> question_data
    # Normalization strips whitespace, lowercases, and checks for state names.
    index = {}
    
    for state, q_list in scraped_data.items():
        for q in q_list:
            raw_text = q['question']
            text_norm = raw_text.lower().strip()
            
            # Key options map for matching correct answers
            correct_let = q['correct_answer']
            correct_text = q['options'].get(correct_let, '').lower().strip()
            
            if text_norm not in index:
                index[text_norm] = {}
            index[text_norm][state] = {
                'q': q,
                'correct_text': correct_text
            }
            
    print(f"Total semantic questions found across all scrapes: {len(index)}")
    
    for norm_text, state_map in index.items():
        states_found = list(state_map.keys())
        first_state = states_found[0]
        first_q = state_map[first_state]['q']
        first_correct = state_map[first_state]['correct_text']
        
        # Check if the question text contains any state names/abbreviations
        has_state_keyword = bool(STATE_REGEX.search(first_q['question']))
        
        # Check if correct answer matches across all states where the question was found
        answers_match = True
        for st in states_found[1:]:
            if state_map[st]['correct_text'] != first_correct:
                answers_match = False
                break
                
        # Partition rules:
        # If it has state keywords, or if the answers vary across states, it is STATE-SPECIFIC
        if has_state_keyword or not answers_match:
            # Add to state specific files for each state it appeared in
            for st in states_found:
                state_specific_bank[st].append(state_map[st]['q'])
        else:
            # It is a common question!
            # We save it in the common bank. We use the representative from the first state it was found in.
            common_bank.append(first_q)
            
    return common_bank, state_specific_bank

def save_csv(questions, file_path):
    fieldnames = ["id", "question", "image", "option_a", "option_b", "option_c", "option_d", "correct_answer", "explanation"]
    with open(file_path, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        for q in questions:
            opts = q.get("options", {})
            row = {
                "id": q.get("id"),
                "question": q.get("question"),
                "image": q.get("image", ""),
                "option_a": opts.get("A", ""),
                "option_b": opts.get("B", ""),
                "option_c": opts.get("C", ""),
                "option_d": opts.get("D", ""),
                "correct_answer": q.get("correct_answer"),
                "explanation": q.get("explanation"),
            }
            writer.writerow(row)
    print(f"Saved {len(questions)} questions to {file_path}")

def main():
    session = requests.Session()
    session.headers.update({
        "User-Agent": DEFAULT_USER_AGENT,
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
    })
    
    scraped_data = {}
    cache_path = "web/scraped_cdl_cache.json"
    
    # Load cache if it exists
    if os.path.exists(cache_path):
        try:
            with open(cache_path, "r", encoding="utf-8") as cache_f:
                scraped_data = json.load(cache_f)
            print(f"Loaded cached scrape data for states: {list(scraped_data.keys())}")
        except Exception as e:
            print(f"Error loading cache: {e}")
            
    # Scrape all top 10 states
    for state in STATES:
        if state in scraped_data:
            print(f"Skipping {state.upper()} (loaded from cache).")
            continue
            
        state_qs = []
        # 1. Scrape dmv-written-test
        dmv_qs = scrape_dmv_written_test(session, state)
        state_qs.extend(dmv_qs)
        
        # 2. Scrape driving-tests
        dt_qs = scrape_driving_tests(session, state)
        state_qs.extend(dt_qs)
        
        # Deduplicate within this state's pool
        unique_state_qs = []
        seen_texts = set()
        for q in state_qs:
            txt_norm = q['question'].lower().strip()
            if txt_norm not in seen_texts:
                seen_texts.add(txt_norm)
                unique_state_qs.append(q)
                
        scraped_data[state] = unique_state_qs
        print(f"Finished {state.upper()}: Scraped {len(unique_state_qs)} total unique questions.")
        
        # Save cache incrementally
        try:
            with open(cache_path, "w", encoding="utf-8") as cache_f:
                json.dump(scraped_data, cache_f, indent=2)
            print(f"Saved cache to {cache_path}")
        except Exception as e:
            print(f"Error saving cache: {e}")
            
        time.sleep(3.0)
        
    # Partition
    common_bank, state_specific_bank = normalize_and_partition(scraped_data)
    
    # Save outputs
    print("\n=== WRITING OUTPUTS ===")
    os.makedirs("web/state_specific", exist_ok=True)
    
    save_csv(common_bank, "web/cdl_common_questions.csv")
    for state in scraped_data.keys():
        save_csv(state_specific_bank[state], f"web/state_specific/{state}_cdl_questions.csv")
        
    print("\nMaster Scraping & Partitioning Completed Successfully!")

if __name__ == '__main__':
    main()
