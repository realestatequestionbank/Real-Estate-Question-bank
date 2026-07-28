
import sys
import os
from pypdf import PdfReader

def extract_text(page_num):
    filename = f"California_DMV_Handbook_2025_page_{page_num:03d}.pdf"
    path = os.path.join("..", filename)
    if not os.path.exists(path):
        return f"Error: File {path} not found."
    
    try:
        reader = PdfReader(path)
        text = ""
        for page in reader.pages:
            text += page.extract_text() + "\n"
        return text
    except Exception as e:
        return f"Error reading {path}: {str(e)}"

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python extract_pages.py <start_page> <end_page>")
        sys.exit(1)
        
    start_page = int(sys.argv[1])
    end_page = int(sys.argv[2])
    
    for i in range(start_page, end_page + 1):
        print(f"--- PAGE {i} ---")
        print(extract_text(i))
        print("\n" + "="*20 + "\n")
