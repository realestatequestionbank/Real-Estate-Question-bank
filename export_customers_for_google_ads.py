"""
Export customer emails from Firestore for Google Ads Customer Match upload.
Produces a CSV with: Email, First name, Last name

Usage:
  python export_customers_for_google_ads.py
  python export_customers_for_google_ads.py --all          # include free users too
  python export_customers_for_google_ads.py --out my.csv   # custom output filename
"""

import csv
import os
import argparse
from datetime import datetime
from dotenv import load_dotenv
import firebase_admin
from firebase_admin import credentials, firestore

load_dotenv(dotenv_path='.env.local')


def init_firebase():
    project_id = os.environ['FIREBASE_PROJECT_ID']
    client_email = os.environ['FIREBASE_CLIENT_EMAIL']
    private_key = os.environ['FIREBASE_PRIVATE_KEY'].replace('\\n', '\n')

    cred = credentials.Certificate({
        'type': 'service_account',
        'project_id': project_id,
        'client_email': client_email,
        'private_key': private_key,
        'token_uri': 'https://oauth2.googleapis.com/token',
    })
    firebase_admin.initialize_app(cred)
    return firestore.client()


def export_customers(db, premium_only: bool, output_file: str):
    users_ref = db.collection('users')
    docs = users_ref.stream()

    rows = []
    skipped = 0

    for doc in docs:
        data = doc.to_dict()
        email = (data.get('email') or '').strip().lower()

        if not email:
            skipped += 1
            continue

        if premium_only and not data.get('isPremium'):
            skipped += 1
            continue

        first_name = (data.get('firstName') or '').strip()
        last_name = (data.get('lastName') or '').strip()

        # Fall back to splitting displayName if firstName/lastName are missing
        if not first_name and not last_name:
            display = (data.get('displayName') or '').strip()
            parts = display.split(' ', 1)
            first_name = parts[0] if parts else ''
            last_name = parts[1] if len(parts) > 1 else ''

        rows.append({
            'Email': email,
            'First name': first_name,
            'Last name': last_name,
        })

    with open(output_file, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=['Email', 'First name', 'Last name'])
        writer.writeheader()
        writer.writerows(rows)

    print(f"Exported {len(rows)} users to {output_file}  (skipped {skipped})")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--all', action='store_true', help='Include free (non-premium) users')
    parser.add_argument('--out', default='', help='Output CSV filename')
    args = parser.parse_args()

    premium_only = not args.all
    label = 'all' if args.all else 'premium'
    timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
    output_file = args.out or f'google_ads_customers_{label}_{timestamp}.csv'

    db = init_firebase()
    export_customers(db, premium_only=premium_only, output_file=output_file)


if __name__ == '__main__':
    main()
