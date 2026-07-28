import os
try:
    from pypdf import PdfReader
except ImportError:
    os.system('pip install pypdf')
    from pypdf import PdfReader

def extract_text(pdf_path, output_path):
    reader = PdfReader(pdf_path)
    with open(output_path, 'w', encoding='utf-8') as f:
        for i, page in enumerate(reader.pages):
            f.write(f"--- PAGE {i+1} ---\n")
            f.write(page.extract_text() + "\n\n")

if __name__ == "__main__":
    pdf_path = "/Users/pranav/Documents/DMV_Question_Bank/webv3/public/pdf/Virginia_DMV_Handbook_2026.pdf"
    output_path = "/Users/pranav/Documents/DMV_Question_Bank/webv3/va_handbook_text.txt"
    extract_text(pdf_path, output_path)
    print(f"Extracted text to {output_path}")
