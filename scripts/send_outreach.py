#!/usr/bin/env python3
import csv
import os
import sys
import time
import smtplib
import argparse
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# State URL mapping matching web/lib/utils/state-routes.ts
STATE_URLS = {
    'california': '/california-dmv-permit-test',
    'north-carolina': '/north-carolina-dmv-permit-test',
    'washington': '/washington-dol-permit-test',
    'texas': '/texas-dps-permit-test',
    'new-york': '/new-york-dmv-permit-test',
    'florida': '/florida-dmv-permit-test',
    'georgia': '/georgia-dds-permit-test',
    'alabama': '/alabama-dmv-permit-test',
    'alaska': '/alaska-dmv-permit-test',
    'arizona': '/arizona-mvd-permit-test',
    'arkansas': '/arkansas-dfa-permit-test',
    'colorado': '/colorado-dmv-permit-test',
    'connecticut': '/connecticut-dmv-permit-test',
    'delaware': '/delaware-dmv-permit-test',
    'hawaii': '/hawaii-dmv-permit-test',
    'idaho': '/idaho-dmv-permit-test',
    'illinois': '/illinois-sos-permit-test',
    'indiana': '/indiana-bmv-permit-test',
    'iowa': '/iowa-dot-permit-test',
    'kansas': '/kansas-dmv-permit-test',
    'kentucky': '/kentucky-dmv-permit-test',
    'louisiana': '/louisiana-omv-permit-test',
    'maine': '/maine-bmv-permit-test',
    'maryland': '/maryland-mva-permit-test',
    'massachusetts': '/massachusetts-rmv-permit-test',
    'michigan': '/michigan-sos-permit-test',
    'minnesota': '/minnesota-dvs-permit-test',
    'mississippi': '/mississippi-dps-permit-test',
    'missouri': '/missouri-dor-permit-test',
    'montana': '/montana-mvd-permit-test',
    'nebraska': '/nebraska-dmv-permit-test',
    'nevada': '/nevada-dmv-permit-test',
    'new-hampshire': '/new-hampshire-dmv-permit-test',
    'new-jersey': '/new-jersey-mvc-permit-test',
    'new-mexico': '/new-mexico-mvd-permit-test',
    'north-dakota': '/north-dakota-dot-permit-test',
    'ohio': '/ohio-bmv-permit-test',
    'oklahoma': '/oklahoma-dps-permit-test',
    'oregon': '/oregon-dmv-permit-test',
    'pennsylvania': '/pennsylvania-penndot-permit-test',
    'rhode-island': '/rhode-island-dmv-permit-test',
    'south-carolina': '/south-carolina-dmv-permit-test',
    'south-dakota': '/south-dakota-dps-permit-test',
    'tennessee': '/tennessee-dos-permit-test',
    'utah': '/utah-dmv-permit-test',
    'vermont': '/vermont-dmv-permit-test',
    'virginia': '/virginia-dmv-permit-test',
    'west-virginia': '/west-virginia-dmv-permit-test',
    'wisconsin': '/wisconsin-dot-permit-test',
    'wyoming': '/wyoming-dot-permit-test',
}

def get_state_url(state_name):
    # Normalize state name to key (lowercase, space to hyphen)
    key = state_name.strip().lower().replace(' ', '-')
    path = STATE_URLS.get(key, f"/state/{key}/free")
    return f"https://www.dmvquestionbank.com{path}"

def main():
    parser = argparse.ArgumentParser(description="Automate email outreach to driving schools.")
    parser.add_argument("--send", action="store_true", help="Actually send emails (default is dry-run mode)")
    parser.add_argument("--limit", type=int, default=5, help="Limit number of emails to process (default: 5)")
    parser.add_argument("--offset", type=int, default=0, help="Offset to start processing from (default: 0)")
    parser.add_argument("--delay", type=int, default=10, help="Delay in seconds between emails to prevent spam detection (default: 10)")
    parser.add_argument("--csv", type=str, default="driving_schools.csv", help="Path to the driving schools CSV file")
    
    args = parser.parse_args()

    # Determine paths
    csv_path = args.csv
    if not os.path.exists(csv_path):
        # Try checking in parent folder
        alt_path = os.path.join(os.path.dirname(__file__), "..", csv_path)
        if os.path.exists(alt_path):
            csv_path = alt_path
        else:
            print(f"Error: CSV file '{csv_path}' not found.")
            sys.exit(1)

    # Load SMTP settings from env if sending
    smtp_server = os.environ.get("SMTP_SERVER", "smtp.gmail.com")
    smtp_port = int(os.environ.get("SMTP_PORT", "465"))
    smtp_user = os.environ.get("SMTP_USER")
    smtp_password = os.environ.get("SMTP_PASSWORD")
    sender_name = os.environ.get("SENDER_NAME", "DMV Question Bank Team")

    if args.send:
        if not smtp_user or not smtp_password:
            print("Error: SMTP_USER and SMTP_PASSWORD environment variables are required to send emails.")
            print("Please set them in your terminal: export SMTP_USER='...' and export SMTP_PASSWORD='...'")
            sys.exit(1)
        print(f"Sending mode activated. Connect to {smtp_server}:{smtp_port} as {smtp_user}...")
    else:
        print("--- DRY RUN MODE (No emails will be sent) ---")
        print("To actually send, run with the --send flag and set SMTP_USER and SMTP_PASSWORD env variables.")
        print(f"Loading driving schools from {csv_path}...\n")

    # Read CSV
    schools = []
    with open(csv_path, mode='r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            if row.get('email') and row.get('school_name'):
                schools.append(row)

    print(f"Found {len(schools)} driving schools in CSV.")
    to_process = schools[args.offset:args.offset + args.limit]
    print(f"Processing schools {args.offset + 1} to {args.offset + len(to_process)} (limit={args.limit}, offset={args.offset}).\n")

    # Initialize SMTP server if sending
    server = None
    if args.send:
        try:
            server = smtplib.SMTP_SSL(smtp_server, smtp_port)
            server.login(smtp_user, smtp_password)
            print("Logged in successfully to SMTP server.\n")
        except Exception as e:
            print(f"Failed to connect or log in to SMTP: {e}")
            sys.exit(1)

    sent_count = 0
    try:
        for idx, school in enumerate(to_process):
            school_name = school['school_name'].strip()
            state = school['state'].strip()
            recipient_email = school['email'].strip()
            
            state_url = get_state_url(state)
            pdf_url = "https://www.dmvquestionbank.com/top-us-road-signs.pdf"

            subject = f"Free study resource for {school_name} students?"
            
            body = (
                f"Hi the team at {school_name},\n\n"
                f"I was looking at your site and noticed you help students prepare for their DMV tests in {state}.\n\n"
                f"We recently compiled a clean, visual guide of all the road signs students need to memorize:\n"
                f"{pdf_url}\n\n"
                f"You are welcome to email this PDF to your students or print it out as a classroom handout.\n\n"
                f"We also hosted a clean, completely ad-free practice test for {state} here:\n"
                f"{state_url}\n\n"
                f"If you think these would be helpful for your students, would you consider listing them on your resources page?\n\n"
                f"Either way, thanks for your time and keep up the great work training safe drivers!\n\n"
                f"Best regards,\n\n"
                f"{sender_name}\n"
                f"https://www.dmvquestionbank.com"
            )

            print(f"[{idx+1}/{len(to_process)}] Preparing email for {school_name} ({recipient_email})")
            print(f"State: {state} | Page URL: {state_url}")
            
            if not args.send:
                print(f"Subject: {subject}")
                print("Body Preview:")
                print("-" * 50)
                print(body)
                print("-" * 50)
                print()
            else:
                # Send email
                msg = MIMEMultipart()
                msg['From'] = f"{sender_name} <{smtp_user}>"
                msg['To'] = recipient_email
                msg['Subject'] = subject
                msg.attach(MIMEText(body, 'plain'))

                try:
                    server.sendmail(smtp_user, recipient_email, msg.as_string())
                    print(f"Successfully sent to {recipient_email}")
                    sent_count += 1
                except Exception as e:
                    print(f"Error sending to {recipient_email}: {e}")

                # Rate limiting delay
                if idx < len(to_process) - 1:
                    print(f"Waiting {args.delay} seconds before next email...")
                    time.sleep(args.delay)

    finally:
        if server:
            server.quit()
            print("\nClosed SMTP connection.")

    if args.send:
        print(f"\nDone! Sent {sent_count} emails successfully out of {len(to_process)} attempted.")
    else:
        print("\nDry run completed. No emails were sent.")

if __name__ == "__main__":
    main()
