#!/usr/bin/env python3
"""
Driving-Tests.org Scraper for California Ambulance and Pre-Trip Inspection
Simulates the quiz session using persistent sessions to extract the question banks
with their respective correct answers and explanations.
"""

import csv
import re
import time
import requests
from bs4 import BeautifulSoup

DEFAULT_USER_AGENT = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
    "AppleWebKit/537.36 (KHTML, like Gecko) "
    "Chrome/120.0.0.0 Safari/537.36"
)

def scrape_test(session, test_id, referer):
    """
    Scrapes all questions, choices, correct answers, and explanations for a single test_id.
    """
    session.cookies.clear()
    print(f"Initializing test {test_id}...")
    # 1. Get first question & sid
    try:
        r = session.get(f'https://driving-tests.org/a.test.php?id={test_id}', timeout=15)
        if r.status_code != 200:
            print(f"Error initializing test {test_id}: HTTP {r.status_code}")
            return []
        data = r.json()
    except Exception as e:
        print(f"Exception during initialization of test {test_id}: {e}")
        return []
        
    sid = data.get('sid')
    if not sid:
        print(f"Could not get session ID for test {test_id}")
        return []
        
    total_qs = data.get('qs', 0)
    print(f"Test {test_id} has {total_qs} questions. Restarting session...")
    
    # 2. Restart session
    try:
        session.post(f'https://driving-tests.org/a.test.php?id={test_id}&a=restart', data={'s': sid}, timeout=15)
    except Exception as e:
        print(f"Error restarting session: {e}")
        return []
        
    # 3. Simulate answering all questions to traverse the pool
    q = data.get('question')
    temp_questions = {} # qid -> question data
    
    for qn in range(1, total_qs + 1):
        if not q:
            break
        qid = q.get('qid')
        text = q.get('text')
        choices = q.get('answers')
        category = q.get('category', '')
        subcategory = q.get('subcategory', '')
        
        # Post answer (always choose option 1, which is 1-based index '1')
        url_ans = f'https://driving-tests.org/a.test.php?id={test_id}&qn={qn}&qid={qid}&an=1'
        try:
            r_ans = session.post(url_ans, data={'s': sid}, timeout=15)
            res = r_ans.json()
        except Exception as e:
            print(f"Error posting answer for Q{qn}: {e}")
            break
            
        # Extract correct answer index
        # If the answer we selected (index 0) was incorrect, res has 'qA' as the correct index.
        # If it was correct, res['anResult'] == 1 and 'qA' is typically missing or we use uA (0).
        correct_idx = res.get('qA')
        if correct_idx is None:
            if res.get('anResult') == 1:
                correct_idx = 0
            else:
                # Default fallback
                correct_idx = 0
                
        temp_questions[qid] = {
            'id': qid,
            'question': text,
            'choices': choices,
            'correct_idx': correct_idx,
            'category': category,
            'subcategory': subcategory,
            'explanation': '' # Will fetch in review mode
        }
        
        q = res.get('question')
        time.sleep(1.0)
        
    # 4. Fetch explanations in review mode
    print(f"Fetching explanations in review mode for test {test_id}...")
    for qn in range(1, total_qs + 1):
        url_review = f'https://driving-tests.org/a.test.php?id={test_id}&a=show&qn={qn}'
        try:
            r_rev = session.post(url_review, data={'s': sid}, timeout=15)
            res_data = r_rev.json()
            q_data = res_data.get('question', {})
            qid = q_data.get('qid')
            if qid in temp_questions:
                temp_questions[qid]['explanation'] = q_data.get('explanation', '')
        except Exception as e:
            print(f"Error fetching review for Q{qn}: {e}")
            
        time.sleep(0.5)
        
    return list(temp_questions.values())

def save_to_csv(questions, output_file):
    fieldnames = ["id", "question", "image", "option_a", "option_b", "option_c", "option_d", "correct_answer", "explanation"]
    letter_mapping = {0: 'A', 1: 'B', 2: 'C', 3: 'D'}
    
    with open(output_file, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        for q in questions:
            choices = q.get('choices', [])
            correct_idx = q.get('correct_idx', 0)
            correct_letter = letter_mapping.get(correct_idx, 'A')
            
            row = {
                "id": q.get("id"),
                "question": q.get("question"),
                "image": "", # driving-tests.org rarely uses images for these specific text questions
                "option_a": choices[0] if len(choices) > 0 else "",
                "option_b": choices[1] if len(choices) > 1 else "",
                "option_c": choices[2] if len(choices) > 2 else "",
                "option_d": choices[3] if len(choices) > 3 else "",
                "correct_answer": correct_letter,
                "explanation": q.get("explanation"),
            }
            writer.writerow(row)
    print(f"Saved {len(questions)} questions to {output_file}")

def main():
    session = requests.Session()
    session.headers.update({
        "User-Agent": DEFAULT_USER_AGENT,
        "Accept": "application/json, text/javascript, */*; q=0.01",
        "Accept-Language": "en-US,en;q=0.9",
        "X-Requested-With": "XMLHttpRequest"
    })
    
    # 1. Scrape California Ambulance (Test ID: 2649)
    print("=== SCRAPING CALIFORNIA AMBULANCE ===")
    referer_amb = 'https://driving-tests.org/california/dmv-ambulance-driver-test/'
    session.headers.update({'Referer': referer_amb})
    amb_questions = scrape_test(session, 2649, referer_amb)
    if amb_questions:
        save_to_csv(amb_questions, "web/california_cdl_ambulance_questions.csv")
    else:
        print("Failed to scrape Ambulance questions.")
        
    time.sleep(3.0)
    
    # 2. Scrape Pre-Trip Inspection (Dynamic Discovery)
    print("\n=== SCRAPING PRE-TRIP INSPECTION (DYNAMIC DISCOVERY) ===")
    pre_trip_states = ['california', 'texas', 'florida', 'new-york']
    all_pre_trip = []
    seen_texts = set()
    
    for state in pre_trip_states:
        print(f"\nDiscovering Pre-Trip tests for {state.upper()}...")
        landing_url = f"https://driving-tests.org/{state}/cdl/"
        try:
            landing_res = session.get(landing_url, timeout=15)
            soup = BeautifulSoup(landing_res.text, 'html.parser')
            
            # Find all pre-trip links
            pre_trip_urls = []
            for a in soup.find_all('a'):
                href = a.get('href', '')
                if 'pre-trip' in href and 'marathon' not in href and 'checklist' not in href:
                    if href.startswith('/'):
                        full_url = f"https://driving-tests.org{href}"
                    else:
                        full_url = href
                    if full_url not in pre_trip_urls:
                        pre_trip_urls.append(full_url)
            
            print(f"Found {len(pre_trip_urls)} pre-trip test links for {state.upper()}")
            
            for url in pre_trip_urls:
                print(f"\nLoading test page: {url}")
                page_res = session.get(url, timeout=15)
                m = re.search(r'testId=(\d+)', page_res.text)
                if not m:
                    print("Could not find testId on page.")
                    continue
                test_id = int(m.group(1))
                
                # Scrape
                session.headers.update({'Referer': url})
                state_questions = scrape_test(session, test_id, url)
                new_added = 0
                for q in state_questions:
                    q_text_norm = q['question'].lower().strip()
                    if q_text_norm not in seen_texts:
                        seen_texts.add(q_text_norm)
                        all_pre_trip.append(q)
                        new_added += 1
                print(f"Test ID {test_id} added {new_added} new unique questions.")
                time.sleep(2.0)
                
        except Exception as e:
            print(f"Error processing state {state}: {e}")
            
    if all_pre_trip:
        save_to_csv(all_pre_trip, "web/california_cdl_pre_trip_questions.csv")
    else:
        print("Failed to scrape Pre-Trip Inspection questions.")

if __name__ == '__main__':
    main()
