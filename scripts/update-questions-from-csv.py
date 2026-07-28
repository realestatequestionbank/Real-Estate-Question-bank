#!/usr/bin/env python3
"""
Replaces AI-generated questions in state data files with real questions from CSVs.
Also updates pageUrl in config and creates new page files where missing.
"""
import csv
import os
import re
import json
import shutil

BASE = '/Users/radhikabiyani/Projects/DMV_Question_Bank/web'
CSV_DIR = f'{BASE}/app/api/questions'
DATA_DIR = f'{BASE}/lib/data/state-permit-tests'
APP_DIR = f'{BASE}/app'

# States needing update: state → (realCount, newUrlSuffix)
# FL is excluded — no CSV available
STATES = {
    'california':    (46, 'california-dmv-permit-test-46-questions'),
    'georgia':       (40, 'georgia-dds-permit-test-40-questions'),
    'idaho':         (40, 'idaho-dmv-permit-test-40-questions'),
    'illinois':      (35, 'illinois-sos-permit-test-35-questions'),
    'indiana':       (34, 'indiana-bmv-permit-test-34-questions'),
    'iowa':          (35, 'iowa-dot-permit-test-35-questions'),
    'kentucky':      (40, 'kentucky-dmv-permit-test-40-questions'),
    'louisiana':     (40, 'louisiana-omv-permit-test-40-questions'),
    'michigan':      (40, 'michigan-sos-permit-test-40-questions'),
    'minnesota':     (40, 'minnesota-dvs-permit-test-40-questions'),
    'montana':       (33, 'montana-mvd-permit-test-33-questions'),
    'new-hampshire': (40, 'new-hampshire-dmv-permit-test-40-questions'),
    'new-jersey':    (50, 'new-jersey-mvc-permit-test-50-questions'),
    'ohio':          (40, 'ohio-bmv-permit-test-40-questions'),
    'oklahoma':      (50, 'oklahoma-dps-permit-test-50-questions'),
    'oregon':        (35, 'oregon-dmv-permit-test-35-questions'),
    'virginia':      (36, 'virginia-dmv-permit-test-36-questions'),
    'washington':    (40, 'washington-dol-permit-test-40-questions'),
    'wisconsin':     (50, 'wisconsin-dot-permit-test-50-questions'),
}


def parse_options(raw):
    """Parse options field into a list. Handles both 'a: opt' and 'a:opt' formats, with or without outer quotes."""
    s = raw.strip()
    # Strip outer quotes if present (double-quoted CSV fields get an extra quote layer)
    if s.startswith('"') and s.endswith('"'):
        s = s[1:-1]
    # Split on comma followed by a letter and colon (with or without space)
    parts = re.split(r',(?=[a-d]: |[a-d]:)', s)
    # Strip letter prefix: "a: " or "a:"
    options = []
    for p in parts:
        m = re.match(r'^[a-d]: ?(.+)$', p.strip(), re.DOTALL)
        if m:
            options.append(m.group(1).strip())
        else:
            options.append(p.strip())
    return options


def parse_answer(raw):
    """Convert answer like '"b"' or 'b' to 0-based index."""
    s = raw.strip().strip('"').strip()
    # Take only first character in case of multi-char values
    if not s:
        raise ValueError('empty answer')
    letter = s[0].lower()
    if letter not in 'abcd':
        raise ValueError(f'unexpected answer letter: {repr(s)}')
    return ord(letter) - ord('a')


def parse_note(raw):
    """Strip outer quotes from note field."""
    s = raw.strip()
    if s.startswith('"') and s.endswith('"'):
        s = s[1:-1]
    return s.strip()


def load_questions_from_csv(state, count):
    """Load first `count` questions from state's CSV."""
    csv_path = f'{CSV_DIR}/questions_{state}_premium.csv'
    questions = []
    with open(csv_path, newline='', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for i, row in enumerate(reader):
            if len(questions) >= count:
                break
            try:
                q_text = row['question'].strip()
                options = parse_options(row['options'])
                answer_idx = parse_answer(row['correct-answer'])
                explanation = parse_note(row['note']) if row.get('note', '').strip() else ''

                # Skip rows with fewer than 2 options or invalid answer index
                if len(options) < 2 or answer_idx < 0 or answer_idx >= len(options):
                    continue

                questions.append({
                    'id': len(questions) + 1,
                    'question': q_text,
                    'options': options,
                    'correctAnswer': answer_idx,
                    'explanation': explanation,
                })
            except Exception as e:
                print(f'  Skipping row {i+2} for {state}: {e}')
                continue

    return questions


def questions_to_ts(questions):
    """Convert list of question dicts to TypeScript array string."""
    lines = []
    for q in questions:
        opts = ',\n            '.join(json.dumps(o, ensure_ascii=False) for o in q['options'])
        lines.append(f'''    {{
        id: {q['id']},
        question: {json.dumps(q['question'], ensure_ascii=False)},
        options: [
            {opts}
        ],
        correctAnswer: {q['correctAnswer']},
        explanation: {json.dumps(q['explanation'], ensure_ascii=False)},
    }}''')
    return '[\n' + ',\n'.join(lines) + '\n]'


def update_data_file(state, count, new_url):
    """Replace questions array and update pageUrl in data file."""
    ts_path = f'{DATA_DIR}/{state}.ts'
    with open(ts_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Update pageUrl
    content = re.sub(
        r"(pageUrl:\s*')[^']*(')",
        lambda m: m.group(1) + '/' + new_url + m.group(2),
        content
    )

    # Find the questions array export
    q_export_pattern = re.compile(
        r'(export const \w+Questions: Question\[\] = )\[.*?\]',
        re.DOTALL
    )
    # Find FAQ export start to know where questions array ends
    faq_start = re.search(r'\nexport const \w+Faq:', content)

    if not faq_start:
        print(f'  WARNING: No FAQ found for {state}, skipping questions replacement')
        with open(ts_path, 'w', encoding='utf-8') as f:
            f.write(content)
        return

    # Split at FAQ start
    before_faq = content[:faq_start.start()]
    faq_and_after = content[faq_start.start():]

    # Find questions array start in before_faq
    q_export_match = re.search(r'export const \w+Questions: Question\[\] = \[', before_faq)
    if not q_export_match:
        print(f'  WARNING: No Questions array found for {state}')
        with open(ts_path, 'w', encoding='utf-8') as f:
            f.write(content)
        return

    header = before_faq[:q_export_match.start()]
    q_export_prefix = q_export_match.group(0)[:-1]  # everything up to the opening [

    # Load questions from CSV
    questions = load_questions_from_csv(state, count)
    print(f'  Loaded {len(questions)} questions from CSV for {state}')

    new_questions_ts = questions_to_ts(questions)
    new_content = header + q_export_prefix + new_questions_ts + '\n' + faq_and_after

    with open(ts_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f'  Updated data file: {ts_path}')


def create_page_file(state, new_url, count):
    """Create new page file at the correct URL if it doesn't exist."""
    new_dir = f'{APP_DIR}/{new_url}'
    new_page = f'{new_dir}/page.tsx'

    if os.path.exists(new_page):
        print(f'  Page already exists: {new_page}')
        return

    # Find any existing page for this state to use as template
    # Try the old 30-question page first
    ts_path = f'{DATA_DIR}/{state}.ts'
    with open(ts_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Get state info from data file
    state_name_match = re.search(r"stateName:\s*'([^']+)'", content)
    dept_name_match = re.search(r"departmentName:\s*'([^']+)'", content)
    dept_abbr_match = re.search(r"departmentAbbr:\s*'([^']+)'", content)
    pass_count_match = re.search(r"realPassCount:\s*(\d+)", content)
    pass_pct_match = re.search(r"passPercent:\s*(\d+)", content)
    main_url_match = re.search(r"mainPageUrl:\s*'([^']+)'", content)

    state_name = state_name_match.group(1) if state_name_match else state.title()
    dept_name = dept_name_match.group(1) if dept_name_match else f'{state_name} DMV'
    dept_abbr = dept_abbr_match.group(1) if dept_abbr_match else 'DMV'
    pass_count = pass_count_match.group(1) if pass_count_match else '?'
    pass_pct = pass_pct_match.group(1) if pass_pct_match else '80'
    main_url = main_url_match.group(1) if main_url_match else f'/{state}-permit-test'

    # Derive variable prefix from state name
    var_prefix = ''.join(w.capitalize() for w in re.sub(r'[^a-z]', ' ', state).split())

    # Sanitize for function name
    func_name = f'{var_prefix}PermitTest{count}QuestionsPage'
    # Fix common department name cases
    dept_display = dept_name.replace('Louisiana OMV', 'Louisiana OMV').replace('Georgia DDS', 'Georgia DDS')

    page_content = f'''import {{ Metadata }} from 'next'
import Script from 'next/script'
import {{ AuthProvider }} from '@/contexts/auth-context'
import {{ StatePermitTestContent }} from '@/components/state-permit-test/StatePermitTestContent'
import {{
    {state.replace('-', '')}PermitTestConfig as config,
    {state.replace('-', '')}PermitTestQuestions as questions,
    {state.replace('-', '')}PermitTestFaq as faqData,
}} from '@/lib/data/state-permit-tests/{state}'

export const metadata: Metadata = {{
    title: `FREE {state_name} {dept_abbr} Permit Practice Test 2026 — {count} Questions | DMV Question Bank`,
    description: `Take a free {count}-question {state_name} {dept_abbr} permit practice test. Need {pass_count}/{count} to pass ({pass_pct}%). Covers all topics from the official {state_name} driver handbook — updated for 2026.`,
    keywords: [
        '{state_name.lower()} {dept_abbr.lower()} permit test {count} questions',
        '{state_name.lower()} permit practice test {count} questions',
        '{state_name.lower()} {dept_abbr.lower()} permit test',
        '{state_name.lower()} permit practice test 2026',
        '{state_name.lower()} driver license practice test',
        '{state_name.lower()} permit test questions',
    ],
    openGraph: {{
        title: `FREE {state_name} {dept_abbr} Permit Practice Test 2026 — {count} Questions`,
        description: `Free {count}-question {state_name} {dept_abbr} permit practice test. Need {pass_count} correct to pass. Updated for 2026.`,
        type: 'website',
        url: `https://www.dmvquestionbank.com/${{config.pageUrl}}`,
        siteName: 'DMV Question Bank',
        images: [{{ url: '/images/cover-image.png', width: 1200, height: 630, alt: '{state_name} {dept_abbr} Permit Practice Test {count} Questions' }}],
    }},
    twitter: {{
        card: 'summary_large_image',
        title: `{state_name} {dept_abbr} Permit Practice Test 2026 — {count} Questions`,
        description: `Free {count}-question {state_name} {dept_abbr} permit practice test. Need {pass_count} correct to pass. Updated for 2026.`,
        images: ['/images/cover-image.png'],
    }},
    alternates: {{
        canonical: `https://www.dmvquestionbank.com/${{config.pageUrl}}`,
    }},
}}

const faqSchema = {{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({{
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {{ "@type": "Answer", "text": item.answer }},
    }})),
}}

const articleSchema = {{
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "{state_name} {dept_abbr} Permit Practice Test 2026 — {count} Questions, Answers & Explanations",
    "description": "Free {count}-question {state_name} permit practice test. Need {pass_count}/{count} ({pass_pct}%) to pass. Updated for 2026.",
    "author": {{ "@type": "Organization", "name": "DMV Question Bank" }},
    "publisher": {{ "@type": "Organization", "name": "DMV Question Bank", "logo": {{ "@type": "ImageObject", "url": "https://www.dmvquestionbank.com/images/logo.png" }} }},
    "datePublished": "2026-05-02",
    "dateModified": "2026-05-02",
}}

const breadcrumbSchema = {{
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        {{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dmvquestionbank.com" }},
        {{ "@type": "ListItem", "position": 2, "name": "States", "item": "https://www.dmvquestionbank.com/#states" }},
        {{ "@type": "ListItem", "position": 3, "name": "{state_name}", "item": `https://www.dmvquestionbank.com${{config.mainPageUrl}}` }},
        {{ "@type": "ListItem", "position": 4, "name": "{count}-Question Practice Test", "item": `https://www.dmvquestionbank.com${{config.pageUrl}}` }},
    ],
}}

export default function {func_name}() {{
    return (
        <>
            <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{{{ __html: JSON.stringify(faqSchema) }}}} />
            <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{{{ __html: JSON.stringify(articleSchema) }}}} />
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{{{ __html: JSON.stringify(breadcrumbSchema) }}}} />
            <AuthProvider>
                <StatePermitTestContent config={{config}} questions={{questions}} faqData={{faqData}} />
            </AuthProvider>
        </>
    )
}}
'''

    os.makedirs(new_dir, exist_ok=True)
    with open(new_page, 'w', encoding='utf-8') as f:
        f.write(page_content)
    print(f'  Created page: {new_page}')


def main():
    for state, (count, new_url) in sorted(STATES.items()):
        print(f'\nProcessing {state} ({count}Q → /{new_url})')
        update_data_file(state, count, new_url)
        create_page_file(state, new_url, count)
    print('\nDone!')


if __name__ == '__main__':
    main()
