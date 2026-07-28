import requests
from bs4 import BeautifulSoup
import re

url = "https://driving-tests.org/cdl-handbook/"
headers = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

try:
    response = requests.get(url, headers=headers, timeout=15)
    print("Status:", response.status_code)
    soup = BeautifulSoup(response.text, "html.parser")
    
    # Let's find all links on the page that point to state CDL handbooks
    links = []
    for a in soup.find_all("a", href=True):
        href = a["href"]
        if "/cdl-handbook" in href or "-cdl-" in href:
            links.append((a.get_text(strip=True), href))
            
    print(f"Found {len(links)} links. Sample:")
    for label, href in links[:20]:
        print(f" - {label}: {href}")
        
except Exception as e:
    print("Error:", e)
