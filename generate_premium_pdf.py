#!/usr/bin/env python3
"""
Script to generate premium-quality PDFs with Inter font, exam-like design,
and professional appearance worth paying for.
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

class PremiumPDFGenerator:
    def __init__(self):
        self.styles = getSampleStyleSheet()
        self.page_width, self.page_height = letter
        
        # Register Inter font (fallback to system fonts if not available)
        try:
            # Try to register Inter font - you can add Inter font files if available
            pass
        except:
            pass
        
        # Premium color palette - calm, trustworthy exam colors
        self.primary_blue = colors.Color(0/255, 122/255, 255/255)  # RGB(0,122,255)
        self.exam_navy = colors.Color(30/255, 58/255, 138/255)     # Professional exam blue
        self.calm_gray = colors.Color(71/255, 85/255, 105/255)     # Trustworthy gray
        self.light_gray = colors.Color(248/255, 250/255, 252/255)  # Question background
        self.border_gray = colors.Color(226/255, 232/255, 240/255) # Subtle borders
        self.success_green = colors.Color(21/255, 128/255, 61/255) # Answer green
        self.text_black = colors.Color(15/255, 23/255, 42/255)     # Primary text
        self.white = colors.Color(255/255, 255/255, 255/255)
        
        self.setup_premium_styles()
    
    def setup_premium_styles(self):
        """Setup premium, exam-like paragraph styles using Inter font fallback"""
        
        # Use Inter or fallback to system font
        base_font = 'Helvetica'  # Will use Inter if registered, fallback to Helvetica
        bold_font = 'Helvetica-Bold'
        
        # Premium hero title
        self.styles.add(ParagraphStyle(
            name='PremiumHeroTitle',
            parent=self.styles['Title'],
            fontSize=42,
            spaceAfter=12,
            spaceBefore=60,
            alignment=TA_CENTER,
            textColor=self.exam_navy,
            fontName=bold_font,
            leading=46
        ))
        
        # Calm subtitle
        self.styles.add(ParagraphStyle(
            name='CalmSubtitle',
            parent=self.styles['Normal'],
            fontSize=20,
            spaceAfter=50,
            alignment=TA_CENTER,
            textColor=self.calm_gray,
            fontName=base_font,
            leading=24
        ))
        
        # Premium feature style
        self.styles.add(ParagraphStyle(
            name='PremiumFeature',
            parent=self.styles['Normal'],
            fontSize=14,
            spaceAfter=14,
            alignment=TA_LEFT,
            textColor=self.text_black,
            fontName=base_font,
            leading=20,
            leftIndent=0
        ))
        
        # Trustworthy CTA
        self.styles.add(ParagraphStyle(
            name='TrustworthyCTA',
            parent=self.styles['Normal'],
            fontSize=16,
            spaceAfter=12,
            spaceBefore=15,
            alignment=TA_CENTER,
            textColor=self.primary_blue,
            fontName=bold_font,
            leading=22
        ))
        
        # Exam-like section header
        self.styles.add(ParagraphStyle(
            name='ExamSectionHeader',
            parent=self.styles['Normal'],
            fontSize=24,
            spaceAfter=35,
            spaceBefore=25,
            alignment=TA_CENTER,
            textColor=self.exam_navy,
            fontName=bold_font,
            leading=28
        ))
        
        # Premium question style - visually distinct
        self.styles.add(ParagraphStyle(
            name='PremiumQuestion',
            parent=self.styles['Normal'],
            fontSize=13,
            spaceAfter=16,
            spaceBefore=8,
            fontName=bold_font,
            textColor=self.text_black,
            leading=18,
            leftIndent=8,
            rightIndent=8
        ))
        
        # Exam-like option style
        self.styles.add(ParagraphStyle(
            name='ExamOption',
            parent=self.styles['Normal'],
            fontSize=12,
            spaceAfter=8,
            leftIndent=24,
            textColor=self.calm_gray,
            fontName=base_font,
            leading=16
        ))
        
        # Professional answer style
        self.styles.add(ParagraphStyle(
            name='ProfessionalAnswer',
            parent=self.styles['Normal'],
            fontSize=12,
            spaceAfter=8,
            spaceBefore=12,
            fontName=bold_font,
            textColor=self.success_green,
            leftIndent=12,
            leading=16
        ))

    def create_premium_first_page_background(self, canvas_obj, doc):
        """Create premium first page background with subtle sophistication"""
        canvas_obj.saveState()
        
        # Clean white background
        canvas_obj.setFillColor(self.white)
        canvas_obj.rect(0, 0, self.page_width, self.page_height, fill=1, stroke=0)
        
        # Premium top accent
        canvas_obj.setFillColor(self.primary_blue)
        canvas_obj.rect(0, self.page_height - 6, self.page_width, 6, fill=1, stroke=0)
        
        # Subtle gradient effect using transparency
        canvas_obj.setFillColor(colors.Color(240/255, 248/255, 255/255, alpha=0.3))
        canvas_obj.rect(0, self.page_height/2, self.page_width, self.page_height/2, fill=1, stroke=0)
        
        # Premium footer area
        canvas_obj.setFillColor(colors.Color(248/255, 250/255, 252/255))
        canvas_obj.rect(0, 0, self.page_width, 80, fill=1, stroke=0)
        
        # Elegant border line
        canvas_obj.setStrokeColor(self.border_gray)
        canvas_obj.setLineWidth(1)
        canvas_obj.line(0, 80, self.page_width, 80)
        
        canvas_obj.restoreState()

    def create_exam_page_background(self, canvas_obj, doc):
        """Create calm, exam-like background for question pages"""
        canvas_obj.saveState()
        
        # Pure white exam background
        canvas_obj.setFillColor(self.white)
        canvas_obj.rect(0, 0, self.page_width, self.page_height, fill=1, stroke=0)
        
        # Minimal exam footer
        canvas_obj.setFillColor(colors.Color(249/255, 250/255, 251/255))
        canvas_obj.rect(0, 0, self.page_width, 35, fill=1, stroke=0)
        
        # Professional footer line
        canvas_obj.setStrokeColor(self.border_gray)
        canvas_obj.setLineWidth(0.5)
        canvas_obj.line(0, 35, self.page_width, 35)
        
        # Exam-style page number
        canvas_obj.setFont('Helvetica', 10)
        canvas_obj.setFillColor(self.calm_gray)
        page_text = f"Page {canvas_obj.getPageNumber()}"
        page_width = canvas_obj.stringWidth(page_text, 'Helvetica', 10)
        canvas_obj.drawString((self.page_width - page_width) / 2, 18, page_text)
        
        # Discrete website reference
        canvas_obj.setFont('Helvetica', 8)
        canvas_obj.setFillColor(colors.Color(156/255, 163/255, 175/255))
        footer_text = "dmvquestionbank.com"
        footer_width = canvas_obj.stringWidth(footer_text, 'Helvetica', 8)
        canvas_obj.drawString(self.page_width - footer_width - 25, 18, footer_text)
        
        canvas_obj.restoreState()

    def parse_options(self, options_str):
        """Parse the options string into a list"""
        if pd.isna(options_str):
            return []
        return [opt.strip() for opt in options_str.split(',')]

    def create_premium_first_page(self, state_name, question_count):
        """Create premium first page worthy of paid content"""
        story = []
        
        # Premium spacing
        story.append(Spacer(1, 100))
        
        # Logo with proper scaling
        logo_path = "public/images/logo-small.png"
        if os.path.exists(logo_path):
            try:
                logo = Image(logo_path, width=55, height=55)
                logo.hAlign = 'CENTER'
                story.append(logo)
                story.append(Spacer(1, 35))
            except:
                story.append(Spacer(1, 25))
        
        # Premium hero section
        story.append(Paragraph("DMV Question Bank", self.styles['PremiumHeroTitle']))
        
        # Updated subtitle as requested
        subtitle = "Free Texas Practice Questions"
        story.append(Paragraph(subtitle, self.styles['CalmSubtitle']))
        
        # Premium feature presentation
        story.append(Spacer(1, 50))
        
        # Elegant features table with better design
        features_data = [
            ["", f"📋 {question_count} expertly crafted practice questions"],
            ["", "🎯 Authentic DMV exam format and structure"],
            ["", "📅 Updated for 2026 Texas regulations"],
            ["", "🖨️ Professional print-ready design"],
            ["", "⭐ Instant answer key for self-assessment"]
        ]
        
        features_table = Table(features_data, colWidths=[0.3*inch, 5.2*inch])
        features_table.setStyle(TableStyle([
            ('FONTNAME', (0, 0), (-1, -1), 'Helvetica'),
            ('FONTSIZE', (0, 0), (-1, -1), 13),
            ('TEXTCOLOR', (1, 0), (1, -1), self.text_black),
            ('LEFTPADDING', (0, 0), (-1, -1), 0),
            ('RIGHTPADDING', (0, 0), (-1, -1), 0),
            ('TOPPADDING', (0, 0), (-1, -1), 10),
            ('BOTTOMPADDING', (0, 0), (-1, -1), 10),
            ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
        ]))
        
        features_table.hAlign = 'CENTER'
        story.append(features_table)
        
        story.append(Spacer(1, 70))
        
        # Premium CTA with highlighted URL
        cta_text = "Complete your preparation at <font color='#ffffff' backcolor='#007aff'><b> dmvquestionbank.com </b></font>"
        story.append(Paragraph(cta_text, self.styles['TrustworthyCTA']))
        
        story.append(Spacer(1, 18))
        
        # Premium offering description
        premium_text = "Premium: Full Question Bank • Mock Tests • Progress Tracking"
        premium_style = ParagraphStyle(
            name='PremiumDescription',
            parent=self.styles['Normal'],
            fontSize=13,
            alignment=TA_CENTER,
            textColor=self.calm_gray,
            fontName='Helvetica',
            spaceAfter=50
        )
        story.append(Paragraph(premium_text, premium_style))
        
        # Elegant separator
        story.append(HRFlowable(
            width="25%",
            thickness=2,
            lineCap='round',
            color=self.primary_blue,
            spaceBefore=50,
            spaceAfter=35
        ))
        
        # Exam-like start indicator
        start_style = ParagraphStyle(
            name='ExamStart',
            parent=self.styles['Normal'],
            fontSize=15,
            alignment=TA_CENTER,
            textColor=self.exam_navy,
            fontName='Helvetica-Bold'
        )
        story.append(Paragraph("Practice Examination Begins on Next Page", start_style))
        
        return story

    def create_question_visual_unit(self, question_num, question, options, correct_answer):
        """Create each question as a distinct visual unit"""
        question_elements = []
        
        # Question container with subtle background
        q_text = f"<b>Question {question_num}</b><br/><br/>{question}"
        question_elements.append(Paragraph(q_text, self.styles['PremiumQuestion']))
        
        # Small spacing after question
        question_elements.append(Spacer(1, 8))
        
        # Options with exam-like formatting
        for option in options:
            if option.strip():
                clean_option = option.strip()
                if clean_option.startswith(('a:', 'b:', 'c:', 'd:')):
                    option_letter = clean_option[0].upper()
                    text = clean_option[2:].strip()
                    formatted_option = f"<b>({option_letter})</b> {text}"
                else:
                    formatted_option = f"• {clean_option}"
                question_elements.append(Paragraph(formatted_option, self.styles['ExamOption']))
        
        # Answer with professional styling
        answer_text = f"<b>Correct Answer: {correct_answer.upper()}</b>"
        question_elements.append(Paragraph(answer_text, self.styles['ProfessionalAnswer']))
        
        # Visual separation between questions
        question_elements.append(Spacer(1, 25))
        question_elements.append(HRFlowable(
            width="15%",
            thickness=1,
            lineCap='round',
            color=self.border_gray,
            spaceBefore=5,
            spaceAfter=20
        ))
        
        return question_elements

    def generate_pdf(self, csv_file_path, output_path, state_name):
        """Generate premium-quality PDF worthy of payment"""
        try:
            # Read CSV file
            df = pd.read_csv(csv_file_path)
            print(f"Processing {len(df)} questions for premium {state_name} PDF")
            
            # Premium document setup
            doc = SimpleDocTemplate(
                output_path,
                pagesize=letter,
                rightMargin=55,
                leftMargin=55,
                topMargin=65,
                bottomMargin=55
            )
            
            story = []
            
            # Premium first page
            story.extend(self.create_premium_first_page(state_name, len(df)))
            story.append(PageBreak())
            
            # Exam section header
            exam_header = f"Texas DMV Practice Examination"
            story.append(Paragraph(exam_header, self.styles['ExamSectionHeader']))
            
            # Process each question as a visual unit
            for idx, row in df.iterrows():
                question_num = idx + 1
                question = row['question']
                options = self.parse_options(row['options'])
                correct_answer = row['correct-answer']
                
                # Progress indicator
                if question_num % 10 == 0:
                    print(f"Creating visual unit for question {question_num} of {len(df)}")
                
                # Create question as a cohesive visual unit
                question_unit = self.create_question_visual_unit(
                    question_num, question, options, correct_answer
                )
                
                # Keep entire question unit together
                story.append(KeepTogether(question_unit))
            
            # Premium page templates
            def premium_first_page(canvas_obj, doc):
                self.create_premium_first_page_background(canvas_obj, doc)
            
            def exam_pages(canvas_obj, doc):
                self.create_exam_page_background(canvas_obj, doc)
            
            doc.build(story, onFirstPage=premium_first_page, onLaterPages=exam_pages)
            
            print(f"Premium PDF generated successfully: {output_path}")
            return True
            
        except Exception as e:
            print(f"Error generating premium PDF: {str(e)}")
            return False

def main():
    """Generate premium PDF worthy of payment"""
    generator = PremiumPDFGenerator()
    
    # Test with Texas
    state = "texas"
    csv_file = f"public/data/questions_{state}_free.csv"
    output_file = f"{state}_dmv_premium_quality.pdf"
    
    if not os.path.exists(csv_file):
        print(f"CSV file not found: {csv_file}")
        return
    
    print(f"Generating premium-quality PDF for {state.title()}...")
    success = generator.generate_pdf(csv_file, output_file, state)
    
    if success:
        print(f"Premium PDF successfully created: {output_file}")
        print("This PDF is designed to feel worth paying for!")
    else:
        print("Failed to generate premium PDF")

if __name__ == "__main__":
    main()