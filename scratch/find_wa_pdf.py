#!/usr/bin/env python3
import requests

months = [
    f"{year}-{str(month).zfill(2)}"
    for year in range(2022, 2027)
    for month in range(1, 13)
]

filenames = [
    "driverguide-spanish.pdf",
    "driverguide-Spanish.pdf",
    "driverguide_spanish.pdf",
    "driverguide_Spanish.pdf",
    "driverguide.pdf",
    "driverguide-en.pdf"
]

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

print("Searching for active Washington DOL PDFs...")
for m in months:
    for f in filenames:
        url = f"https://www.dol.wa.gov/sites/default/files/{m}/{f}"
        try:
            r = requests.head(url, headers=HEADERS, timeout=5, allow_redirects=False)
            if r.status_code == 200:
                print(f"FOUND: {url} (HTTP 200)")
            elif r.status_code == 301 or r.status_code == 302:
                # print(f"Redirect ({r.status_code}): {url} -> {r.headers.get('Location')}")
                pass
        except Exception as e:
            pass

print("Done searching.")
