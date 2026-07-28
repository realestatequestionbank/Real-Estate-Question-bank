#!/usr/bin/env python3
"""
Script to generate modern, professional PDFs from free CSV files
with DMV Question Bank theme, logo, and premium design.
"""

import pandas as pd
import os
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, Image
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY
from reportlab.pdfgen import canvas
from reportlab.platypus.flowables import HRFlowable
import textwrap

class PDFGenerator:
    def __init__(self):
        self.styles = getSampleStyleSheet()
        self.page_width, self.page_height = letter
        self.setup_custom_styles()
    
    def setup_custom_styles(self):
        """Setup modern, professional paragraph styles for the PDF"""
        # Modern Title style
        self.styles.add(ParagraphStyle(
            name='CustomTitle',
            parent=self.styles['Title'],
            fontSize=24,
            spaceAfter=20,
            spaceBefore=10,
            alignment=TA_CENTER,
            textColor=colors.HexColor('#1e40af'),
            fontName='Helvetica-Bold'
        ))
        
        # Subtitle style
        self.styles.add(ParagraphStyle(
            name='CustomSubtitle',
            parent=self.styles['Normal'],
            fontSize=14,
            spaceAfter=30,
            alignment=TA_CENTER,
            textColor=colors.HexColor('#64748b'),
            fontName='Helvetica'
        ))
        
        # Modern Question style with better spacing
        self.styles.add(ParagraphStyle(
            name='Question',
            parent=self.styles['Normal'],
            fontSize=11,
            spaceAfter=8,
            spaceBefore=16,
            fontName='Helvetica-Bold',
            textColor=colors.HexColor('#0f172a'),
            leading=14
        ))
        
        # Modern Option style with better typography
        self.styles.add(ParagraphStyle(
            name='Option',
            parent=self.styles['Normal'],
            fontSize=10,
            spaceAfter=4,
            leftIndent=24,
            textColor=colors.HexColor('#475569'),
            fontName='Helvetica',
            leading=13
        ))
        
        # Enhanced correct answer style
        self.styles.add(ParagraphStyle(
            name='CorrectAnswer',
            parent=self.styles['Normal'],
            fontSize=10,
            spaceAfter=20,
            fontName='Helvetica-Bold',
            textColor=colors.HexColor('#16a34a'),
            leftIndent=12,
            spaceBefore=6
        ))
        
        # Header style for sections
        self.styles.add(ParagraphStyle(
            name='SectionHeader',
            parent=self.styles['Normal'],
            fontSize=16,
            spaceAfter=15,
            spaceBefore=25,
            fontName='Helvetica-Bold',
            textColor=colors.HexColor('#1e40af'),
            alignment=TA_CENTER
        ))

    def create_header_footer(self, canvas_obj, doc):
        """Add modern header with logo and footer to each page"""
        canvas_obj.saveState()
        
        # Header background with subtle gradient effect
        canvas_obj.setFillColor(colors.HexColor('#f8fafc'))
        canvas_obj.rect(0, self.page_height - 80, self.page_width, 80, fill=1, stroke=0)
        
        # Header border
        canvas_obj.setStrokeColor(colors.HexColor('#e2e8f0'))
        canvas_obj.setLineWidth(1)
        canvas_obj.line(0, self.page_height - 80, self.page_width, self.page_height - 80)
        
        # Logo (if it exists)
        logo_path = "public/images/logo-small.png"
        if os.path.exists(logo_path):
            try:
                canvas_obj.drawImage(logo_path, 50, self.page_height - 65, width=30, height=30, mask='auto')
                logo_offset = 90
            except:
                logo_offset = 50
        else:
            logo_offset = 50
        
        # Header text
        canvas_obj.setFont('Helvetica-Bold', 18)
        canvas_obj.setFillColor(colors.HexColor('#1e40af'))
        canvas_obj.drawString(logo_offset, self.page_height - 45, "DMV Question Bank")
        
        # Subtitle
        canvas_obj.setFont('Helvetica', 10)
        canvas_obj.setFillColor(colors.HexColor('#64748b'))
        canvas_obj.drawString(logo_offset, self.page_height - 62, "Free Practice Questions")
        
        # Modern footer with better styling
        canvas_obj.setFillColor(colors.HexColor('#f1f5f9'))
        canvas_obj.rect(0, 0, self.page_width, 50, fill=1, stroke=0)
        
        # Footer border
        canvas_obj.setStrokeColor(colors.HexColor('#e2e8f0'))
        canvas_obj.setLineWidth(1)
        canvas_obj.line(0, 50, self.page_width, 50)
        
        # Page number
        canvas_obj.setFont('Helvetica-Bold', 9)
        canvas_obj.setFillColor(colors.HexColor('#475569'))
        page_text = f"Page {canvas_obj.getPageNumber()}"
        page_width = canvas_obj.stringWidth(page_text, 'Helvetica-Bold', 9)
        canvas_obj.drawString((self.page_width - page_width) / 2, 30, page_text)
        
        # Footer text
        canvas_obj.setFont('Helvetica', 8)
        canvas_obj.setFillColor(colors.HexColor('#64748b'))
        footer_text = "Visit dmvquestionbank.com for comprehensive DMV test preparation"
        footer_width = canvas_obj.stringWidth(footer_text, 'Helvetica', 8)
        canvas_obj.drawString((self.page_width - footer_width) / 2, 15, footer_text)
        
        canvas_obj.restoreState()

    def parse_options(self, options_str):
        """Parse the options string into a list"""
        if pd.isna(options_str):
            return []
        
        # Split by comma and clean up
        options = [opt.strip() for opt in options_str.split(',')]
        return options

    def generate_pdf(self, csv_file_path, output_path, state_name):
        """Generate PDF from CSV file"""
        try:
            # Read CSV file
            df = pd.read_csv(csv_file_path)
            print(f"Processing {len(df)} questions for {state_name}")
            
            # Create PDF document with modern margins
            doc = SimpleDocTemplate(
                output_path,
                pagesize=letter,
                rightMargin=60,
                leftMargin=60,
                topMargin=100,
                bottomMargin=60
            )
            
            # Story list to hold all content
            story = []
            
            # Modern title with enhanced styling
            title = f"{state_name.title()} DMV Practice Test"
            story.append(Paragraph(title, self.styles['CustomTitle']))
            story.append(Spacer(1, 8))
            
            # Enhanced subtitle with question count
            subtitle = f"{len(df)} Free Practice Questions"
            story.append(Paragraph(subtitle, self.styles['CustomSubtitle']))
            
            # Add a decorative line separator
            story.append(HRFlowable(width="100%", thickness=2, lineCap='round', 
                                   color=colors.HexColor('#e2e8f0'), spaceBefore=10, spaceAfter=20))
            
            # Introduction text for better user experience
            intro_text = "Complete these practice questions to prepare for your DMV written exam. Each question includes the correct answer for immediate feedback."
            intro_style = ParagraphStyle(
                name='Intro',
                parent=self.styles['Normal'],
                fontSize=10,
                alignment=TA_CENTER,
                spaceAfter=25,
                textColor=colors.HexColor('#64748b'),
                fontName='Helvetica-Oblique'
            )
            story.append(Paragraph(intro_text, intro_style))
            
            # Process each question with modern formatting
            for idx, row in df.iterrows():
                question_num = idx + 1
                question = row['question']
                options = self.parse_options(row['options'])
                correct_answer = row['correct-answer']
                
                # Add section breaks every 10 questions for better readability
                if question_num > 1 and (question_num - 1) % 10 == 0:
                    story.append(Spacer(1, 15))
                    story.append(HRFlowable(width="50%", thickness=1, lineCap='round', 
                                           color=colors.HexColor('#cbd5e1'), spaceBefore=5, spaceAfter=15))
                
                # Enhanced question number and text with better formatting
                q_text = f"<b>{question_num}.</b> {question}"
                story.append(Paragraph(q_text, self.styles['Question']))
                
                # Enhanced options with better bullet points
                for i, option in enumerate(options):
                    if option.strip():
                        # Clean up option text and add better formatting
                        clean_option = option.strip()
                        if clean_option.startswith(('a:', 'b:', 'c:', 'd:')):
                            # Format with colored bullets
                            option_letter = clean_option[0].upper()
                            text = clean_option[2:].strip()
                            formatted_option = f"<font color='#1e40af'><b>{option_letter})</b></font> {text}"
                        else:
                            formatted_option = f"• {clean_option}"
                        story.append(Paragraph(formatted_option, self.styles['Option']))
                
                # Enhanced correct answer with icon-like styling
                answer_text = f"<font color='#16a34a'>✓ Correct Answer:</font> <b>{correct_answer.upper()}</b>"
                story.append(Paragraph(answer_text, self.styles['CorrectAnswer']))
                
                # Add appropriate spacing between questions
                story.append(Spacer(1, 12))
            
            # Build PDF with custom header/footer
            doc.build(story, onFirstPage=self.create_header_footer, onLaterPages=self.create_header_footer)
            
            print(f"PDF generated successfully: {output_path}")
            return True
            
        except Exception as e:
            print(f"Error generating PDF: {str(e)}")
            return False

def main():
    """Main function to generate PDF for Texas (or any specified state)"""
    generator = PDFGenerator()
    
    # Test with Texas
    state = "texas"
    csv_file = f"public/data/questions_{state}_free.csv"
    output_file = f"{state}_dmv_practice_questions.pdf"
    
    if not os.path.exists(csv_file):
        print(f"CSV file not found: {csv_file}")
        return
    
    print(f"Generating PDF for {state.title()}...")
    success = generator.generate_pdf(csv_file, output_file, state)
    
    if success:
        print(f"PDF successfully created: {output_file}")
    else:
        print("Failed to generate PDF")

if __name__ == "__main__":
    main()