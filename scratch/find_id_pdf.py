#!/usr/bin/env python3
import requests

years = range(2020, 2027)
months = [str(m).zfill(2) for m in range(1, 13)]

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

print("Searching for active Idaho DMV PDFs...")
for y in years:
    for m in months:
        url = f"https://itd.idaho.gov/wp-content/uploads/{y}/{m}/Drivers_Handbook_Spanish.pdf"
        try:
            r = requests.head(url, headers=HEADERS, timeout=5)
            if r.status_code == 200:
                print(f"FOUND SPANISH: {url}")
        except Exception:
            pass

        url_en = f"https://itd.idaho.gov/wp-content/uploads/{y}/{m}/Drivers_Handbook.pdf"
        try:
            r = requests.head(url_en, headers=HEADERS, timeout=5)
            if r.status_code == 200:
                print(f"FOUND ENGLISH: {url_en}")
        except Exception:
            pass

print("Done searching.")
