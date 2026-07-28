#!/usr/bin/env python3
"""
Script to generate ultra-professional, modern PDFs with clean design
and superior layout for DMV Question Bank.
"""

import pandas as pd
import os
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, Image, Table, TableStyle, KeepTogether
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY
from reportlab.pdfgen import canvas
from reportlab.platypus.flowables import HRFlowable
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
import textwrap

class ProfessionalPDFGenerator:
    def __init__(self):
        self.styles = getSampleStyleSheet()
        self.page_width, self.page_height = letter
        
        # Use Inter-style fonts (Helvetica as Inter-like fallback)
        # Inter and Helvetica are very similar in appearance
        self.base_font = 'Helvetica'
        self.bold_font = 'Helvetica-Bold'
        
        # Professional color palette
        self.brand_blue = colors.Color(0/255, 122/255, 255/255)  # RGB(0,122,255)
        self.dark_blue = colors.Color(0/255, 100/255, 200/255)
        self.light_blue = colors.Color(240/255, 248/255, 255/255)
        self.success_green = colors.Color(34/255, 197/255, 94/255)
        self.text_primary = colors.Color(15/255, 23/255, 42/255)
        self.text_secondary = colors.Color(100/255, 116/255, 139/255)
        self.border_color = colors.Color(226/255, 232/255, 240/255)
        self.background_white = colors.Color(255/255, 255/255, 255/255)
        self.setup_professional_styles()
    
    def setup_professional_styles(self):
        """Setup ultra-professional paragraph styles"""
        
        # First page hero title
        self.styles.add(ParagraphStyle(
            name='HeroTitle',
            parent=self.styles['Title'],
            fontSize=36,
            spaceAfter=8,
            spaceBefore=40,
            alignment=TA_CENTER,
            textColor=self.brand_blue,
            fontName=self.bold_font,
            leading=40
        ))
        
        # First page subtitle
        self.styles.add(ParagraphStyle(
            name='HeroSubtitle',
            parent=self.styles['Normal'],
            fontSize=18,
            spaceAfter=40,
            alignment=TA_CENTER,
            textColor=self.text_secondary,
            fontName=self.base_font,
            leading=22
        ))
        
        # Feature item style
        self.styles.add(ParagraphStyle(
            name='FeatureItem',
            parent=self.styles['Normal'],
            fontSize=14,
            spaceAfter=12,
            alignment=TA_LEFT,
            textColor=self.text_primary,
            fontName=self.base_font,
            leading=18,
            leftIndent=20
        ))
        
        # CTA style
        self.styles.add(ParagraphStyle(
            name='CTA',
            parent=self.styles['Normal'],
            fontSize=16,
            spaceAfter=10,
            spaceBefore=10,
            alignment=TA_CENTER,
            textColor=self.brand_blue,
            fontName=self.bold_font,
            leading=20
        ))
        
        # Section header for question pages
        self.styles.add(ParagraphStyle(
            name='SectionHeader',
            parent=self.styles['Normal'],
            fontSize=22,
            spaceAfter=30,
            spaceBefore=20,
            alignment=TA_CENTER,
            textColor=self.brand_blue,
            fontName=self.bold_font,
            leading=26
        ))
        
        # Modern question style
        self.styles.add(ParagraphStyle(
            name='QuestionText',
            parent=self.styles['Normal'],
            fontSize=12,
            spaceAfter=12,
            spaceBefore=20,
            fontName=self.bold_font,
            textColor=self.text_primary,
            leading=16,
            leftIndent=0,
            rightIndent=0
        ))
        
        # Professional option style
        self.styles.add(ParagraphStyle(
            name='OptionText',
            parent=self.styles['Normal'],
            fontSize=11,
            spaceAfter=6,
            leftIndent=30,
            textColor=self.text_secondary,
            fontName=self.base_font,
            leading=15
        ))
        
        # Clean answer style
        self.styles.add(ParagraphStyle(
            name='AnswerText',
            parent=self.styles['Normal'],
            fontSize=11,
            spaceAfter=25,
            spaceBefore=8,
            fontName=self.bold_font,
            textColor=self.success_green,
            leftIndent=15,
            leading=14
        ))

    def create_professional_first_page_background(self, canvas_obj, doc):
        """Create clean, professional first page background"""
        canvas_obj.saveState()
        
        # Clean white background
        canvas_obj.setFillColor(self.background_white)
        canvas_obj.rect(0, 0, self.page_width, self.page_height, fill=1, stroke=0)
        
        # Subtle top accent bar
        canvas_obj.setFillColor(self.brand_blue)
        canvas_obj.rect(0, self.page_height - 8, self.page_width, 8, fill=1, stroke=0)
        
        # Clean bottom border
        canvas_obj.setFillColor(self.light_blue)
        canvas_obj.rect(0, 0, self.page_width, 60, fill=1, stroke=0)
        
        # Professional border line
        canvas_obj.setStrokeColor(self.border_color)
        canvas_obj.setLineWidth(1)
        canvas_obj.line(0, 60, self.page_width, 60)
        
        canvas_obj.restoreState()

    def create_professional_inner_page_background(self, canvas_obj, doc):
        """Create minimal, professional background for question pages"""
        canvas_obj.saveState()
        
        # Pure white background
        canvas_obj.setFillColor(self.background_white)
        canvas_obj.rect(0, 0, self.page_width, self.page_height, fill=1, stroke=0)
        
        # Minimal footer area
        canvas_obj.setFillColor(colors.Color(250/255, 250/255, 250/255))
        canvas_obj.rect(0, 0, self.page_width, 40, fill=1, stroke=0)
        
        # Subtle footer border
        canvas_obj.setStrokeColor(self.border_color)
        canvas_obj.setLineWidth(0.5)
        canvas_obj.line(0, 40, self.page_width, 40)
        
        # Professional page number
        canvas_obj.setFont('Helvetica', 10)
        canvas_obj.setFillColor(self.text_secondary)
        page_text = f"Page {canvas_obj.getPageNumber()}"
        page_width = canvas_obj.stringWidth(page_text, 'Helvetica', 10)
        canvas_obj.drawString((self.page_width - page_width) / 2, 20, page_text)
        
        # Website reference
        canvas_obj.setFont('Helvetica', 8)
        footer_text = "dmvquestionbank.com"
        footer_width = canvas_obj.stringWidth(footer_text, 'Helvetica', 8)
        canvas_obj.drawString(self.page_width - footer_width - 30, 20, footer_text)
        
        canvas_obj.restoreState()

    def parse_options(self, options_str):
        """Parse the options string into a list"""
        if pd.isna(options_str):
            return []
        return [opt.strip() for opt in options_str.split(',')]

    def create_professional_first_page(self, state_name, question_count):
        """Create ultra-professional first page"""
        story = []
        
        # Top spacing
        story.append(Spacer(1, 80))
        
        # Logo section
        logo_path = "public/images/logo-small.png"
        if os.path.exists(logo_path):
            try:
                logo = Image(logo_path, width=50, height=50)
                logo.hAlign = 'CENTER'
                story.append(logo)
                story.append(Spacer(1, 30))
            except:
                story.append(Spacer(1, 20))
        
        # Professional hero section
        story.append(Paragraph("DMV Question Bank", self.styles['HeroTitle']))
        
        subtitle = "Free Texas Practice Questions"
        story.append(Paragraph(subtitle, self.styles['HeroSubtitle']))
        
        # Professional features box
        story.append(Spacer(1, 40))
        
        # Create a clean features section
        features_data = [
            ["", f"✓ {question_count} carefully curated practice questions"],
            ["", "✓ Real DMV exam format and difficulty"],
            ["", "✓ Updated for 2026 regulations"],
            ["", "✓ Optimized for printing and study"]
        ]
        
        features_table = Table(features_data, colWidths=[0.5*inch, 5*inch])
        features_table.setStyle(TableStyle([
            ('FONTNAME', (0, 0), (-1, -1), 'Helvetica'),
            ('FONTSIZE', (0, 0), (-1, -1), 12),
            ('TEXTCOLOR', (1, 0), (1, -1), self.text_primary),
            ('LEFTPADDING', (0, 0), (-1, -1), 0),
            ('RIGHTPADDING', (0, 0), (-1, -1), 0),
            ('TOPPADDING', (0, 0), (-1, -1), 8),
            ('BOTTOMPADDING', (0, 0), (-1, -1), 8),
            ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
        ]))
        
        features_table.hAlign = 'CENTER'
        story.append(features_table)
        
        story.append(Spacer(1, 60))
        
        # Professional CTA with highlighted website
        cta_text = "Get the complete experience at <font color='#ffffff' backcolor='#007aff'><b> dmvquestionbank.com </b></font>"
        story.append(Paragraph(cta_text, self.styles['CTA']))
        
        story.append(Spacer(1, 15))
        
        premium_text = "Premium: Full Question Bank • Mock Tests • Progress Tracking"
        premium_style = ParagraphStyle(
            name='Premium',
            parent=self.styles['Normal'],
            fontSize=12,
            alignment=TA_CENTER,
            textColor=self.text_secondary,
            fontName=self.base_font,
            spaceAfter=40
        )
        story.append(Paragraph(premium_text, premium_style))
        
        # Professional separator
        story.append(HRFlowable(
            width="30%",
            thickness=2,
            lineCap='round',
            color=self.brand_blue,
            spaceBefore=40,
            spaceAfter=30
        ))
        
        # Start indicator
        start_style = ParagraphStyle(
            name='Start',
            parent=self.styles['Normal'],
            fontSize=14,
            alignment=TA_CENTER,
            textColor=self.text_secondary,
            fontName=self.bold_font
        )
        story.append(Paragraph("Practice Questions Begin on Next Page", start_style))
        
        return story

    def generate_pdf(self, csv_file_path, output_path, state_name):
        """Generate ultra-professional PDF"""
        try:
            # Read CSV file
            df = pd.read_csv(csv_file_path)
            print(f"Processing {len(df)} questions for {state_name}")
            
            # Create PDF with professional margins
            doc = SimpleDocTemplate(
                output_path,
                pagesize=letter,
                rightMargin=60,
                leftMargin=60,
                topMargin=70,
                bottomMargin=60
            )
            
            story = []
            
            # Professional first page
            story.extend(self.create_professional_first_page(state_name, len(df)))
            story.append(PageBreak())
            
            # Questions section with professional header
            questions_header = f"{state_name.title()} Practice Questions"
            story.append(Paragraph(questions_header, self.styles['SectionHeader']))
            
            # Process questions with professional layout - keeping complete questions together
            for idx, row in df.iterrows():
                question_num = idx + 1
                question = row['question']
                options = self.parse_options(row['options'])
                correct_answer = row['correct-answer']
                
                # Debug: Print progress for every 10 questions
                if question_num % 10 == 0:
                    print(f"Processing question {question_num} of {len(df)}")
                
                # Create question block that stays together
                question_elements = []
                
                # Professional question layout
                q_text = f"<b>Q{question_num}.</b> {question}"
                question_elements.append(Paragraph(q_text, self.styles['QuestionText']))
                
                # Clean option layout
                for option in options:
                    if option.strip():
                        clean_option = option.strip()
                        if clean_option.startswith(('a:', 'b:', 'c:', 'd:')):
                            option_letter = clean_option[0].upper()
                            text = clean_option[2:].strip()
                            formatted_option = f"<b>{option_letter})</b> {text}"
                        else:
                            formatted_option = f"• {clean_option}"
                        question_elements.append(Paragraph(formatted_option, self.styles['OptionText']))
                
                # Professional answer display
                answer_text = f"Answer: <b>{correct_answer.upper()}</b>"
                question_elements.append(Paragraph(answer_text, self.styles['AnswerText']))
                
                # Add the complete question as a KeepTogether block
                story.append(KeepTogether(question_elements))
            
            # Build with professional templates
            def first_page_template(canvas_obj, doc):
                self.create_professional_first_page_background(canvas_obj, doc)
            
            def later_page_template(canvas_obj, doc):
                self.create_professional_inner_page_background(canvas_obj, doc)
            
            doc.build(story, onFirstPage=first_page_template, onLaterPages=later_page_template)
            
            print(f"Professional PDF generated successfully: {output_path}")
            return True
            
        except Exception as e:
            print(f"Error generating PDF: {str(e)}")
            return False

def main():
    """Generate professional PDF"""
    generator = ProfessionalPDFGenerator()
    
    # Test with Texas
    state = "texas"
    csv_file = f"public/data/questions_{state}_free.csv"
    output_file = f"{state}_dmv_professional.pdf"
    
    if not os.path.exists(csv_file):
        print(f"CSV file not found: {csv_file}")
        return
    
    print(f"Generating professional PDF for {state.title()}...")
    success = generator.generate_pdf(csv_file, output_file, state)
    
    if success:
        print(f"Professional PDF successfully created: {output_file}")
    else:
        print("Failed to generate professional PDF")

if __name__ == "__main__":
    main()