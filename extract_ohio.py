import pypdf

def extract_text(pdf_path, text_path):
    with open(pdf_path, 'rb') as file:
        reader = pypdf.PdfReader(file)
        text = ''
        for page in reader.pages:
            text += page.extract_text() + '\n'
            
    with open(text_path, 'w', encoding='utf-8') as file:
        file.write(text)

extract_text('public/pdf/Ohio_BMV_Handbook_2026.pdf', 'ohio_handbook_text.txt')
print("Extracted to ohio_handbook_text.txt")
