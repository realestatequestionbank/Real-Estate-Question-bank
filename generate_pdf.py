#!/usr/bin/env python3
"""
DMV Question Bank PDF Generator
Generates printable PDF study guides from CSV question files
"""

import csv
import os
import sys
from datetime import datetime
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.lib.colors import HexColor
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, Table, TableStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.pdfgen import canvas

# Website colors
BLUE_PRIMARY = HexColor('#007aff')
GRAY_600 = HexColor('#4B5563')
GRAY_800 = HexColor('#1F2937')
GREEN_600 = HexColor('#059669')

class NumberedCanvas(canvas.Canvas):
    """Custom canvas for page numbers and headers"""
    
    def __init__(self, *args, **kwargs):
        self.state_name = kwargs.pop('state_name', '')
        canvas.Canvas.__init__(self, *args, **kwargs)
        
    def draw_header(self):
        """Draw header on each page"""
        self.setFont("Helvetica-Bold", 14)
        self.setFillColor(BLUE_PRIMARY)
        self.drawString(50, letter[1] - 50, f"DMV Question Bank - {self.state_name}")
        
        # Draw horizontal line
        self.setStrokeColor(BLUE_PRIMARY)
        self.setLineWidth(2)
        self.line(50, letter[1] - 60, letter[0] - 50, letter[1] - 60)
        
    def draw_footer(self):
        """Draw footer with page number"""
        self.setFont("Helvetica", 10)
        self.setFillColor(GRAY_600)
        page_num = f"Page {self._pageNumber}"
        self.drawRightString(letter[0] - 50, 30, page_num)
        self.drawString(50, 30, "© 2026 DMV Question Bank")
        
    def showPage(self):
        self.draw_header()
        self.draw_footer()
        canvas.Canvas.showPage(self)

def load_questions_from_csv(csv_path):
    """Load questions from CSV file"""
    questions = []
    try:
        with open(csv_path, 'r', encoding='utf-8') as file:
            reader = csv.DictReader(file)
            for row in reader:
                questions.append({
                    'question': row.get('question', '').strip(),
                    'options': row.get('options', '').strip(),
                    'correct_answer': row.get('correct-answer', '').strip(),
                    'explanation': row.get('note', '').strip(),
                    'section': row.get('section-name', 'General').strip()
                })
        print(f"Loaded {len(questions)} questions from {csv_path}")
        return questions
    except Exception as e:
        print(f"Error loading CSV: {e}")
        return []

def create_pdf_from_csv(csv_path, output_path, state_name):
    """Generate PDF from CSV file"""
    
    questions = load_questions_from_csv(csv_path)
    if not questions:
        return False
        
    # Create PDF document
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        topMargin=80,
        bottomMargin=60,
        leftMargin=50,
        rightMargin=50
    )
    
    # Custom canvas with state name
    doc.canvasmaker = lambda *args, **kwargs: NumberedCanvas(*args, state_name=state_name, **kwargs)
    
    # Styles
    styles = getSampleStyleSheet()
    
    title_style = ParagraphStyle(
        'CustomTitle',
        parent=styles['Title'],
        fontSize=24,
        spaceAfter=20,
        textColor=BLUE_PRIMARY,
        alignment=TA_CENTER,
        fontName='Helvetica-Bold'
    )
    
    subtitle_style = ParagraphStyle(
        'Subtitle',
        parent=styles['Heading2'],
        fontSize=16,
        spaceAfter=15,
        textColor=GRAY_800,
        alignment=TA_CENTER
    )
    
    section_style = ParagraphStyle(
        'Section',
        parent=styles['Heading3'],
        fontSize=14,
        spaceBefore=20,
        spaceAfter=10,
        textColor=BLUE_PRIMARY,
        fontName='Helvetica-Bold'
    )
    
    question_style = ParagraphStyle(
        'Question',
        parent=styles['Normal'],
        fontSize=11,
        spaceBefore=15,
        spaceAfter=8,
        fontName='Helvetica-Bold',
        textColor=GRAY_800
    )
    
    option_style = ParagraphStyle(
        'Option',
        parent=styles['Normal'],
        fontSize=10,
        spaceAfter=3,
        leftIndent=20
    )
    
    answer_style = ParagraphStyle(
        'Answer',
        parent=styles['Normal'],
        fontSize=10,
        spaceAfter=3,
        leftIndent=20,
        textColor=GREEN_600,
        fontName='Helvetica-Bold'
    )
    
    explanation_style = ParagraphStyle(
        'Explanation',
        parent=styles['Normal'],
        fontSize=9,
        spaceAfter=10,
        leftIndent=20,
        textColor=GRAY_600,
        fontStyle='italic'
    )
    
    # Build PDF content
    content = []
    
    # Title page
    content.append(Paragraph(f"{state_name} DMV Test", title_style))
    content.append(Paragraph("Practice Questions & Answers", subtitle_style))
    content.append(Spacer(1, 30))
    
    # Summary table
    total_questions = len(questions)
    sections = {}
    for q in questions:
        section = q['section']
        if section not in sections:
            sections[section] = 0
        sections[section] += 1
    
    summary_data = [['Section', 'Questions']]
    for section, count in sections.items():
        summary_data.append([section, str(count)])
    summary_data.append(['Total', str(total_questions)])
    
    summary_table = Table(summary_data, colWidths=[4*inch, 1.5*inch])
    summary_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), BLUE_PRIMARY),
        ('TEXTCOLOR', (0, 0), (-1, 0), '#FFFFFF'),
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, 0), 12),
        ('FONTNAME', (0, 1), (-1, -1), 'Helvetica'),
        ('FONTSIZE', (0, 1), (-1, -1), 10),
        ('GRID', (0, 0), (-1, -1), 1, GRAY_600),
        ('BACKGROUND', (0, -1), (-1, -1), HexColor('#F3F4F6')),
    ]))
    
    content.append(summary_table)
    content.append(Spacer(1, 20))
    
    # Instructions
    instructions = """
    <b>How to Use This Study Guide:</b><br/>
    • Read each question carefully<br/>
    • Try to answer before looking at the options<br/>
    • Review the explanation for each question<br/>
    • Focus extra attention on questions you get wrong<br/>
    • Take practice tests online at dmvquestionbank.com
    """
    content.append(Paragraph(instructions, styles['Normal']))
    content.append(PageBreak())
    
    # Group questions by section
    questions_by_section = {}
    for q in questions:
        section = q['section']
        if section not in questions_by_section:
            questions_by_section[section] = []
        questions_by_section[section].append(q)
    
    # Generate questions
    question_num = 1
    for section, section_questions in questions_by_section.items():
        content.append(Paragraph(f"Section: {section}", section_style))
        
        for q in section_questions:
            # Question
            content.append(Paragraph(f"Q{question_num}. {q['question']}", question_style))
            
            # Options
            if q['options']:
                options = q['options'].split('|') if '|' in q['options'] else [q['options']]
                for i, option in enumerate(options):
                    option = option.strip()
                    if option:
                        letter = chr(65 + i)  # A, B, C, D
                        if letter.lower() == q['correct_answer'].lower():
                            content.append(Paragraph(f"<b>{letter}. {option} ✓</b>", answer_style))
                        else:
                            content.append(Paragraph(f"{letter}. {option}", option_style))
            
            # Explanation
            if q['explanation'] and q['explanation'].lower() != 'no explanation':
                content.append(Paragraph(f"<i>Explanation: {q['explanation']}</i>", explanation_style))
            
            content.append(Spacer(1, 10))
            question_num += 1
    
    # Footer info
    content.append(PageBreak())
    content.append(Paragraph("About DMV Question Bank", section_style))
    footer_text = f"""
    This study guide was generated from DMV Question Bank, your premier online platform for driver education.
    
    • Access to 500+ questions per state
    • Real-time progress tracking
    • Mock exam simulations
    • Detailed explanations for every question
    • Pass guarantee
    
    Visit us at <b>dmvquestionbank.com</b> for the complete online experience.
    
    Generated on: {datetime.now().strftime('%B %d, %Y')}
    
    <i>This material is for educational purposes only and is not affiliated with any state government agency.</i>
    """
    content.append(Paragraph(footer_text, styles['Normal']))
    
    # Build PDF
    try:
        doc.build(content)
        print(f"✅ Successfully generated: {output_path}")
        return True
    except Exception as e:
        print(f"❌ Error generating PDF: {e}")
        return False

def main():
    """Main function"""
    if len(sys.argv) < 2:
        print("Usage: python generate_pdf.py <csv_file_path> [output_path] [state_name]")
        print("Example: python generate_pdf.py questions_texas_premium.csv texas_study_guide.pdf 'Texas'")
        sys.exit(1)
    
    csv_path = sys.argv[1]
    
    # Generate default output path if not provided
    if len(sys.argv) >= 3:
        output_path = sys.argv[2]
    else:
        base_name = os.path.basename(csv_path).replace('.csv', '')
        output_path = f"{base_name}_study_guide.pdf"
    
    # Extract state name if not provided
    if len(sys.argv) >= 4:
        state_name = sys.argv[3]
    else:
        # Try to extract from filename
        base_name = os.path.basename(csv_path)
        if 'questions_' in base_name:
            state_part = base_name.replace('questions_', '').replace('_premium.csv', '').replace('_free.csv', '').replace('.csv', '')
            state_name = state_part.replace('_', ' ').replace('-', ' ').title()
        else:
            state_name = "State"
    
    if not os.path.exists(csv_path):
        print(f"❌ Error: File {csv_path} not found")
        sys.exit(1)
    
    print(f"🔄 Generating PDF for {state_name}...")
    print(f"📄 Input: {csv_path}")
    print(f"📑 Output: {output_path}")
    
    success = create_pdf_from_csv(csv_path, output_path, state_name)
    
    if success:
        print(f"🎉 PDF generated successfully!")
        file_size = os.path.getsize(output_path) / 1024 / 1024  # MB
        print(f"📊 File size: {file_size:.1f} MB")
    else:
        print("❌ Failed to generate PDF")
        sys.exit(1)

if __name__ == "__main__":
    main()