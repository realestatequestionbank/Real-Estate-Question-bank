import os
from pypdf import PdfReader

# The correct filename
pdf_path = "public/pdf/Utah_DMV_Handbook_2026.pdf"

if not os.path.exists(pdf_path):
    print(f"Error: {pdf_path} not found.")
else:
    reader = PdfReader(pdf_path)
    total_pages = len(reader.pages)

    with open("ut_handbook_text.txt", "w", encoding="utf-8") as f_text:
        for i in range(total_pages):
            page = reader.pages[i]
            text = page.extract_text()
            f_text.write(f"\n\n{'='*40}\nPAGE {i+1}\n{'='*40}\n\n")
            if text:
                f_text.write(text)

    print(f"Extracted {total_pages} pages to ut_handbook_text.txt")
