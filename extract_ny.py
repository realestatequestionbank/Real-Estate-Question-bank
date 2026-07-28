import os
from pypdf import PdfReader, PdfWriter

pdf_path = "public/pdf/New_York_DMV_Handbook_2026.pdf"
output_dir = "public/handbook-summary/new-york/new_york_dmv_handbook_pages"
os.makedirs(output_dir, exist_ok=True)

reader = PdfReader(pdf_path)
total_pages = len(reader.pages)

with open("ny_handbook_text.txt", "w", encoding="utf-8") as f_text:
    for i in range(total_pages):
        page = reader.pages[i]
        
        # Write PDF page
        writer = PdfWriter()
        writer.add_page(page)
        page_num_str = str(i + 1).zfill(3)
        page_pdf_path = os.path.join(output_dir, f"New_York_DMV_Handbook_2026_page_{page_num_str}.pdf")
        with open(page_pdf_path, "wb") as out_pdf:
            writer.write(out_pdf)
            
        # Extract Text
        text = page.extract_text()
        f_text.write(f"\n\n{'='*40}\nPAGE {i+1}\n{'='*40}\n\n")
        if text:
            f_text.write(text)

print(f"Extracted {total_pages} pages to {output_dir} and text to ny_handbook_text.txt")
