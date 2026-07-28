#!/usr/bin/env python3
"""
Multi-State Passenger Vehicles Scraper for DMV Written Test
Scrapes Passenger Vehicles CDL questions from multiple states to build a large deduplicated
passenger vehicles question bank (federally standardized).
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

STATES = [
    "california",
    "texas",
    "florida",
    "new-york",
    "ohio",
    "illinois",
    "pennsylvania",
    "georgia",
    "north-carolina",
    "michigan",
    "washington"
]

def clean_text(text):
    if not text:
        return ""
    text = text.replace('\xa0', ' ')
    return re.sub(r'\s+', ' ', text).strip()

def clean_question_text(text):
    text = clean_text(text)
    text = re.sub(r'^\d+\.\s*', '', text)
    return text

def parse_html_page(html):
    soup = BeautifulSoup(html, "html.parser")
    question_rows = soup.find_all(class_="question-row")
    
    questions = []
    for row in question_rows:
        question_id = row.get("data-id") or row.get("data-number")
        correct_answer = row.get("data-value")
        
        question_div = row.find(class_="question")
        question_text = ""
        question_image = None
        if question_div:
            h3 = question_div.find("h3")
            if h3:
                question_text = clean_question_text(h3.get_text())
            img = question_div.find("img")
            if img:
                question_image = img.get("src")
        
        options = {}
        pick_holder = row.find(class_="answer-pick-holder")
        if pick_holder:
            checks = pick_holder.find_all(class_="form-check")
            for check in checks:
                radio_input = check.find("input", type="radio")
                label = check.find("label")
                if radio_input and label:
                    opt_val = radio_input.get("value")
                    opt_text = clean_text(label.get_text())
                    if opt_val:
                        options[opt_val] = opt_text
        
        explanation = ""
        explanation_row = row.find(class_="explanation-row")
        if explanation_row:
            summary = explanation_row.find("summary")
            if summary:
                explanation = clean_text(summary.get_text())
            else:
                full_exp = explanation_row.find(class_="full-explanation")
                if full_exp:
                    explanation = clean_text(full_exp.get_text())
                    
        questions.append({
            "id": question_id,
            "question": question_text,
            "image": question_image,
            "options": options,
            "correct_answer": correct_answer,
            "explanation": explanation
        })
        
    return questions

def main():
    session = requests.Session()
    session.headers.update({
        "User-Agent": DEFAULT_USER_AGENT,
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
    })
    
    all_questions = []
    seen_ids = set()
    seen_questions = set() # Check text duplicates too
    
    output_file = "california_cdl_passenger_questions.csv"
    delay = 1.2
    
    print("Starting Multi-State Passenger Vehicles Consolidation...")
    
    for state in STATES:
        print(f"\n=== Scraping State: {state.upper()} ===")
        for test_num in range(1, 6): # Up to 5 tests per state
            for page_num in range(1, 6): # Up to 5 pages per test
                url = f"https://www.dmv-written-test.com/{state}/cdl/passenger-{test_num}.html?page={page_num}"
                print(f"Scraping: {url} ... ", end="", flush=True)
                
                try:
                    response = session.get(url, timeout=15)
                    if response.status_code == 404:
                        print("404 (Not Found). Skipping to next test.")
                        break
                    elif response.status_code != 200:
                        print(f"Error {response.status_code}. Skipping page.")
                        continue
                    
                    questions = parse_html_page(response.text)
                    if not questions:
                        print("No questions. Skipping to next test.")
                        break
                    
                    new_added = 0
                    for q in questions:
                        q_id = q["id"]
                        q_text_normalized = q["question"].lower().strip()
                        
                        # Check duplicate ID or duplicate question text
                        if q_id not in seen_ids and q_text_normalized not in seen_questions:
                            seen_ids.add(q_id)
                            seen_questions.add(q_text_normalized)
                            all_questions.append(q)
                            new_added += 1
                            
                    print(f"Found {len(questions)} questions ({new_added} new unique).")
                    
                    if new_added == 0 and len(questions) > 0:
                        print("All questions on this page were duplicates. Skipping rest of this test.")
                        break
                        
                    time.sleep(delay)
                except Exception as e:
                    print(f"Error: {e}")
                    time.sleep(delay * 2)
                    
    if all_questions:
        print(f"\nSuccessfully gathered {len(all_questions)} unique Passenger questions.")
        fieldnames = ["id", "question", "image", "option_a", "option_b", "option_c", "option_d", "correct_answer", "explanation"]
        with open(output_file, "w", newline="", encoding="utf-8") as f:
            writer = csv.DictWriter(f, fieldnames=fieldnames)
            writer.writeheader()
            for q in all_questions:
                opts = q.get("options", {})
                row = {
                    "id": q.get("id"),
                    "question": q.get("question"),
                    "image": q.get("image"),
                    "option_a": opts.get("A", ""),
                    "option_b": opts.get("B", ""),
                    "option_c": opts.get("C", ""),
                    "option_d": opts.get("D", ""),
                    "correct_answer": q.get("correct_answer"),
                    "explanation": q.get("explanation"),
                }
                writer.writerow(row)
        print(f"Consolidated CSV written to: {output_file}")
    else:
        print("No questions were scraped.")

if __name__ == "__main__":
    main()
