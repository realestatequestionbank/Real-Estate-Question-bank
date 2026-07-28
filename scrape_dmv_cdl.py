#!/usr/bin/env python3
"""
DMV Written Test Scraper for California CDL (Class A)
This script scrapes questions, options, correct answers, and explanations
from dmv-written-test.com.

Usage:
    python3 scrape_dmv_cdl.py --tests 1 --pages 1 --output test_sample.json
    python3 scrape_dmv_cdl.py --tests 5 --pages 10 --output california_cdl_questions.json
"""

import argparse
import json
import os
import re
import time
import requests
from bs4 import BeautifulSoup

DEFAULT_USER_AGENT = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
    "AppleWebKit/537.36 (KHTML, like Gecko) "
    "Chrome/120.0.0.0 Safari/537.36"
)

def clean_text(text):
    if not text:
        return ""
    # Normalize whitespaces and clean unicode spaces
    text = text.replace('\xa0', ' ')
    return re.sub(r'\s+', ' ', text).strip()

def clean_question_text(text):
    text = clean_text(text)
    # Remove leading question numbers like "1. ", "12. ", "1.  "
    text = re.sub(r'^\d+\.\s*', '', text)
    return text

def parse_html_page(html):
    """
    Parses a single HTML page and extracts questions, choices, answers, and explanations.
    """
    soup = BeautifulSoup(html, "html.parser")
    question_rows = soup.find_all(class_="question-row")
    
    questions = []
    
    for row in question_rows:
        question_id = row.get("data-id") or row.get("data-number")
        correct_answer = row.get("data-value")
        
        # Extract question text and image
        question_div = row.find(class_="question")
        question_text = ""
        question_image = None
        if question_div:
            h3 = question_div.find("h3")
            if h3:
                question_text = clean_question_text(h3.get_text())
            
            # Check for any image in the question
            img = question_div.find("img")
            if img:
                question_image = img.get("src")
        
        # Extract options
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
        
        # Extract explanation
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

def scrape_dmv(test_type, max_tests, max_pages, delay, output_file):
    session = requests.Session()
    session.headers.update({
        "User-Agent": DEFAULT_USER_AGENT,
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
    })
    
    all_questions = []
    seen_ids = set()
    
    for test_num in range(1, max_tests + 1):
        print(f"\n=== Starting Test Set {test_num} ===")
        for page_num in range(1, max_pages + 1):
            url = f"https://www.dmv-written-test.com/california/cdl/{test_type}-{test_num}.html?page={page_num}"
            print(f"Scraping: {url} ...", end="", flush=True)
            
            try:
                response = session.get(url, timeout=15)
                if response.status_code == 404:
                    print(" Received 404. Stopping pages for this test set.")
                    break
                elif response.status_code != 200:
                    print(f" Error: Status code {response.status_code}. Skipping page.")
                    continue
                
                questions = parse_html_page(response.text)
                if not questions:
                    print(" No questions found on this page. Stopping pages for this test set.")
                    break
                
                # Check for duplicates to prevent infinite scraping of the same content
                new_questions_added = 0
                for q in questions:
                    q_id = q["id"]
                    if q_id not in seen_ids:
                        seen_ids.add(q_id)
                        all_questions.append(q)
                        new_questions_added += 1
                
                print(f" Found {len(questions)} questions ({new_questions_added} new).")
                
                if new_questions_added == 0:
                    print("All questions on this page were duplicates. Stopping pages for this test set.")
                    break
                
                # Politeness delay
                time.sleep(delay)
                
            except Exception as e:
                print(f" Exception occurred: {e}")
                time.sleep(delay * 2)
                
    # Save results
    if all_questions:
        print(f"\nSuccessfully scraped {len(all_questions)} unique questions.")
        if output_file.lower().endswith(".csv"):
            import csv
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
        else:
            with open(output_file, "w", encoding="utf-8") as f:
                json.dump(all_questions, f, indent=2, ensure_ascii=False)
        print(f"Saved to: {output_file}")
    else:
        print("\nNo questions were scraped.")

def main():
    parser = argparse.ArgumentParser(description="Scrape CDL DMV Written Test Questions")
    parser.add_argument(
        "--class",
        dest="license_class",
        type=str,
        default=None,
        choices=["class-a", "class-b"],
        help="Shorthand license class to scrape (class-a or class-b)"
    )
    parser.add_argument(
        "--type",
        dest="test_type",
        type=str,
        default="knowledge-test-class-a",
        help="Test type prefix (e.g. knowledge-test-class-a, air-brakes)"
    )
    parser.add_argument(
        "--tests", 
        type=int, 
        default=3, 
        help="Maximum number of test sets (m) to scrape"
    )
    parser.add_argument(
        "--pages", 
        type=int, 
        default=5, 
        help="Maximum number of pages (n) to scrape per test set"
    )
    parser.add_argument(
        "--delay", 
        type=float, 
        default=1.5, 
        help="Delay in seconds between requests to be polite to the server"
    )
    parser.add_argument(
        "--output", 
        type=str, 
        default=None, 
        help="Path to output CSV or JSON file (defaults to california_cdl_<type>_questions.csv)"
    )
    
    args = parser.parse_args()
    
    # Determine test type
    test_type = args.test_type
    if args.license_class:
        test_type = f"knowledge-test-{args.license_class}"
        
    # Generate default output name if not specified
    output_file = args.output
    if not output_file:
        output_file = f"california_cdl_{test_type.replace('-', '_')}_questions.csv"
        
    scrape_dmv(test_type, args.tests, args.pages, args.delay, output_file)

if __name__ == "__main__":
    main()
