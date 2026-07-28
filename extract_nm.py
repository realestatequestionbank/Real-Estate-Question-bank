import os
from pypdf import PdfReader

pdf_path = "public/pdf/New_Mexico_MVD_Handbook_2026.pdf"

reader = PdfReader(pdf_path)
total_pages = len(reader.pages)

with open("nm_handbook_text.txt", "w", encoding="utf-8") as f_text:
    for i in range(total_pages):
        page = reader.pages[i]
        text = page.extract_text()
        f_text.write(f"\n\n{'='*40}\nPAGE {i+1}\n{'='*40}\n\n")
        if text:
            f_text.write(text)

print(f"Extracted {total_pages} pages to nm_handbook_text.txt")
