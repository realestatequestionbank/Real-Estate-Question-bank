#!/usr/bin/env python3
"""
Script to generate professional PDF practice tests for all states
using their free CSV files from public/data directory.
Enhanced with Outfit fonts, premium side-by-side logo header, and compact layout.
"""

import pandas as pd
import os
import glob
import sys
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

# Map state keys to their exact PDF filenames matching Next.js free-pdf-page.tsx
STATE_PDF_FILES = {
    'alabama': 'Free-Alabama-DMV-Practice-Questions.pdf',
    'alaska': 'Free-Alaska-DMV-Practice-Questions.pdf',
    'arizona': 'Free-Arizona-MVD-Practice-Questions.pdf',
    'arkansas': 'Free-Arkansas-DFA-Practice-Questions.pdf',
    'california': 'Free-California-DMV-Practice-Questions.pdf',
    'colorado': 'Free-Colorado-DMV-Practice-Questions.pdf',
    'connecticut': 'Free-Connecticut-DMV-Practice-Questions.pdf',
    'delaware': 'Free-Delaware-DMV-Practice-Questions.pdf',
    'florida': 'Free-Florida-DHSMV-Practice-Questions.pdf',
    'georgia': 'Free-Georgia-DDS-Practice-Questions.pdf',
    'hawaii': 'Free-Hawaii-DMV-Practice-Questions.pdf',
    'idaho': 'Free-Idaho-DMV-Practice-Questions.pdf',
    'illinois': 'Free-Illinois-SOS-Practice-Questions.pdf',
    'indiana': 'Free-Indiana-BMV-Practice-Questions.pdf',
    'iowa': 'Free-Iowa-DOT-Practice-Questions.pdf',
    'kansas': 'Free-Kansas-DMV-Practice-Questions.pdf',
    'kentucky': 'Free-Kentucky-DMV-Practice-Questions.pdf',
    'louisiana': 'Free-Louisiana-OMV-Practice-Questions.pdf',
    'maine': 'Free-Maine-BMV-Practice-Questions.pdf',
    'maryland': 'Free-Maryland-MVA-Practice-Questions.pdf',
    'massachusetts': 'Free-Massachusetts-RMV-Practice-Questions.pdf',
    'michigan': 'Free-Michigan-SOS-Practice-Questions.pdf',
    'minnesota': 'Free-Minnesota-DVS-Practice-Questions.pdf',
    'mississippi': 'Free-Mississippi-DPS-Practice-Questions.pdf',
    'missouri': 'Free-Missouri-DOR-Practice-Questions.pdf',
    'montana': 'Free-Montana-MVD-Practice-Questions.pdf',
    'nebraska': 'Free-Nebraska-DMV-Practice-Questions.pdf',
    'nevada': 'Free-Nevada-DMV-Practice-Questions.pdf',
    'new-hampshire': 'Free-New-Hampshire-DMV-Practice-Questions.pdf',
    'new-jersey': 'Free-New-Jersey-MVC-Practice-Questions.pdf',
    'new-mexico': 'Free-New-Mexico-MVD-Practice-Questions.pdf',
    'new-york': 'Free-New-York-DMV-Practice-Questions.pdf',
    'north-carolina': 'Free-North-Carolina-DMV-Practice-Questions.pdf',
    'north-dakota': 'Free-North-Dakota-DOT-Practice-Questions.pdf',
    'ohio': 'Free-Ohio-BMV-Practice-Questions.pdf',
    'oklahoma': 'Free-Oklahoma-DPS-Practice-Questions.pdf',
    'oregon': 'Free-Oregon-DMV-Practice-Questions.pdf',
    'pennsylvania': 'Free-Pennsylvania-PennDOT-Practice-Questions.pdf',
    'rhode-island': 'Free-Rhode-Island-DMV-Practice-Questions.pdf',
    'south-carolina': 'Free-South-Carolina-DMV-Practice-Questions.pdf',
    'south-dakota': 'Free-South-Dakota-DPS-Practice-Questions.pdf',
    'tennessee': 'Free-Tennessee-DOS-Practice-Questions.pdf',
    'texas': 'Free-Texas-DPS-Practice-Questions.pdf',
    'utah': 'Free-Utah-DMV-Practice-Questions.pdf',
    'vermont': 'Free-Vermont-DMV-Practice-Questions.pdf',
    'virginia': 'Free-Virginia-DMV-Practice-Questions.pdf',
    'washington': 'Free-Washington-DOL-Practice-Questions.pdf',
    'west-virginia': 'Free-West-Virginia-DMV-Practice-Questions.pdf',
    'wisconsin': 'Free-Wisconsin-DOT-Practice-Questions.pdf',
    'wyoming': 'Free-Wyoming-DOT-Practice-Questions.pdf',
}

class StatePDFGenerator:
    def __init__(self):
        self.styles = getSampleStyleSheet()
        self.page_width, self.page_height = letter
        
        # Professional color palette
        self.brand_blue = colors.Color(0/255, 122/255, 255/255)  # RGB(0,122,255)
        self.dark_blue = colors.Color(0/255, 100/255, 200/255)
        self.light_blue = colors.Color(240/255, 248/255, 255/255)
        self.success_green = colors.Color(22/255, 163/255, 74/255)  # Green-600
        self.text_primary = colors.Color(15/255, 23/255, 42/255)    # Slate-900
        self.text_secondary = colors.Color(71/255, 85/255, 105/255) # Slate-600
        self.border_color = colors.Color(226/255, 232/255, 240/255)
        self.background_white = colors.Color(255/255, 255/255, 255/255)
        
        # Register custom fonts (Outfit)
        self.font_title = 'Helvetica-Bold'
        self.font_bold = 'Helvetica-Bold'
        self.font_regular = 'Helvetica'
        
        self.setup_custom_fonts()
        self.setup_professional_styles()
        
    def setup_custom_fonts(self):
        """Register Google Font Outfit for brand alignment"""
        font_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), "public", "fonts")
        regular_path = os.path.join(font_dir, "Outfit-Regular.ttf")
        bold_path = os.path.join(font_dir, "Outfit-Bold.ttf")
        
        if os.path.exists(regular_path) and os.path.exists(bold_path):
            try:
                pdfmetrics.registerFont(TTFont('Outfit', regular_path))
                pdfmetrics.registerFont(TTFont('Outfit-Bold', bold_path))
                self.font_title = 'Outfit-Bold'
                self.font_bold = 'Outfit-Bold'
                self.font_regular = 'Outfit'
            except Exception as e:
                print(f"⚠️ Error registering Outfit fonts: {e}. Using Helvetica.")
        else:
            print(f"⚠️ Outfit font files not found in {font_dir}. Using Helvetica.")

    def setup_professional_styles(self):
        """Setup professional paragraph styles with compact spacing"""
        # Title of the section headers
        self.styles.add(ParagraphStyle(
            name='SectionHeader',
            parent=self.styles['Normal'],
            fontSize=16,
            spaceAfter=15,
            spaceBefore=15,
            alignment=TA_CENTER,
            textColor=self.brand_blue,
            fontName=self.font_title,
            leading=20
        ))
        
        # Modern compact question style
        self.styles.add(ParagraphStyle(
            name='QuestionText',
            parent=self.styles['Normal'],
            fontSize=10,
            spaceAfter=6,
            spaceBefore=12,
            fontName=self.font_bold,
            textColor=self.text_primary,
            leading=13,
            leftIndent=0,
            rightIndent=0
        ))
        
        # Professional compact option style
        self.styles.add(ParagraphStyle(
            name='OptionText',
            parent=self.styles['Normal'],
            fontSize=9,
            spaceAfter=3,
            leftIndent=0,
            textColor=self.text_secondary,
            fontName=self.font_regular,
            leading=11.5
        ))
        
        # Clean compact answer style
        self.styles.add(ParagraphStyle(
            name='AnswerText',
            parent=self.styles['Normal'],
            fontSize=9,
            spaceAfter=12,
            spaceBefore=4,
            fontName=self.font_bold,
            textColor=self.success_green,
            leftIndent=12,
            leading=11
        ))

    def create_professional_first_page_background(self, canvas_obj, doc):
        """Create professional first page background"""
        canvas_obj.saveState()
        
        # Clean white background
        canvas_obj.setFillColor(self.background_white)
        canvas_obj.rect(0, 0, self.page_width, self.page_height, fill=1, stroke=0)
        
        # Professional top accent bar in brand blue
        canvas_obj.setFillColor(self.brand_blue)
        canvas_obj.rect(0, self.page_height - 6, self.page_width, 6, fill=1, stroke=0)
        
        # Premium footer background area
        canvas_obj.setFillColor(colors.Color(248/255, 250/255, 252/255))
        canvas_obj.rect(0, 0, self.page_width, 60, fill=1, stroke=0)
        
        # Elegant border line above footer
        canvas_obj.setStrokeColor(self.border_color)
        canvas_obj.setLineWidth(1)
        canvas_obj.line(0, 60, self.page_width, 60)
        
        canvas_obj.restoreState()

    def create_professional_inner_page_background(self, canvas_obj, doc):
        """Create professional background for question pages"""
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
        canvas_obj.setFont(self.font_regular, 9)
        canvas_obj.setFillColor(self.text_secondary)
        page_text = f"Page {canvas_obj.getPageNumber()}"
        page_width = canvas_obj.stringWidth(page_text, self.font_regular, 9)
        canvas_obj.drawString((self.page_width - page_width) / 2, 20, page_text)
        
        # Website reference
        canvas_obj.setFont(self.font_bold, 8)
        canvas_obj.setFillColor(self.brand_blue)
        footer_text = "dmvquestionbank.com"
        footer_width = canvas_obj.stringWidth(footer_text, self.font_bold, 8)
        canvas_obj.drawString(self.page_width - footer_width - 30, 20, footer_text)
        
        canvas_obj.restoreState()

    def parse_options(self, options_str):
        """Parse the options string into a list"""
        if pd.isna(options_str):
            return []
        import re
        if re.search(r'[a-d]:', options_str):
            return [opt.strip() for opt in re.split(r',\s*(?=[a-d]:)', options_str)]
        return [opt.strip() for opt in options_str.split(',')]

    def create_professional_first_page(self, state_name, question_count, dept="DMV"):
        """Create professional brand-aligned first page with Outfit fonts and side-by-side header"""
        story = []
        
        # Top margin spacing
        story.append(Spacer(1, 40))
        
        # Logo and Brand text side-by-side layout matching the website header
        logo_path = "public/images/logo-small.png"
        
        logo_text_style = ParagraphStyle(
            name='HeaderBrandText',
            parent=self.styles['Normal'],
            fontName=self.font_title,
            fontSize=22,
            textColor=self.text_primary,
            leading=26
        )
        brand_p = Paragraph("DMV Question Bank", logo_text_style)
        
        if os.path.exists(logo_path):
            try:
                logo_img = Image(logo_path, width=32, height=32)
                # Create a Table to align them horizontally
                header_table = Table([[logo_img, brand_p]], colWidths=[40, 250])
                header_table.setStyle(TableStyle([
                    ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
                    ('LEFTPADDING', (0, 0), (-1, -1), 0),
                    ('RIGHTPADDING', (0, 0), (-1, -1), 0),
                    ('TOPPADDING', (0, 0), (-1, -1), 0),
                    ('BOTTOMPADDING', (0, 0), (-1, -1), 0),
                ]))
                header_table.hAlign = 'CENTER'
                story.append(header_table)
            except Exception as e:
                print(f"⚠️ Error drawing logo table: {e}")
                story.append(Paragraph("DMV Question Bank", logo_text_style))
        else:
            story.append(Paragraph("DMV Question Bank", logo_text_style))
            
        # Clean divider line matching website header border
        story.append(Spacer(1, 15))
        story.append(HRFlowable(
            width="100%",
            thickness=1,
            color=self.border_color,
            spaceBefore=0,
            spaceAfter=30
        ))
        
        # State title & subtitle
        state_title_style = ParagraphStyle(
            name='HeroStateTitle',
            parent=self.styles['Normal'],
            fontName=self.font_title,
            fontSize=28,
            textColor=self.brand_blue,
            alignment=TA_CENTER,
            leading=34,
            spaceAfter=10
        )
        
        state_subtitle_style = ParagraphStyle(
            name='HeroStateSubtitle',
            parent=self.styles['Normal'],
            fontName=self.font_regular,
            fontSize=14,
            textColor=self.text_secondary,
            alignment=TA_CENTER,
            leading=18,
            spaceAfter=30
        )
        
        state_title = f"{state_name.title()} {dept} Practice Test"
        state_subtitle = "Free Practice Questions with Answers"
        story.append(Paragraph(state_title, state_title_style))
        story.append(Paragraph(state_subtitle, state_subtitle_style))
        
        # Features highlights inside a premium light-blue card
        feature_text_style = ParagraphStyle(
            name='FeatureText',
            parent=self.styles['Normal'],
            fontName=self.font_regular,
            fontSize=11,
            textColor=self.text_primary,
            leading=14
        )
        feature_check_style = ParagraphStyle(
            name='FeatureCheck',
            parent=self.styles['Normal'],
            fontName=self.font_bold,
            fontSize=12,
            textColor=self.brand_blue,
            alignment=TA_CENTER,
            leading=14
        )
        
        features_data = [
            [Paragraph("✓", feature_check_style), 
             Paragraph(f"<b>{question_count}</b> carefully curated practice questions", feature_text_style)],
            [Paragraph("✓", feature_check_style), 
             Paragraph(f"Real {dept} exam format and difficulty", feature_text_style)],
            [Paragraph("✓", feature_check_style), 
             Paragraph("Updated for 2026 regulations", feature_text_style)],
            [Paragraph("✓", feature_check_style), 
             Paragraph("Print-ready professional design", feature_text_style)]
        ]
        
        features_table = Table(features_data, colWidths=[0.4*inch, 4.5*inch])
        features_table.setStyle(TableStyle([
            ('VALIGN', (0, 0), (-1, -1), 'TOP'),
            # Explicit column padding to avoid negative availWidth errors
            ('LEFTPADDING', (0, 0), (0, -1), 4),
            ('RIGHTPADDING', (0, 0), (0, -1), 4),
            ('LEFTPADDING', (1, 0), (1, -1), 8),
            ('RIGHTPADDING', (1, 0), (1, -1), 15),
            ('TOPPADDING', (0, 0), (-1, -1), 8),
            ('BOTTOMPADDING', (0, 0), (-1, -1), 8),
            ('BACKGROUND', (0, 0), (-1, -1), self.light_blue),
            ('BOX', (0, 0), (-1, -1), 0.5, self.border_color),
        ]))
        features_table.hAlign = 'CENTER'
        story.append(features_table)
        
        # Call To Action Button card
        cta_intro_style = ParagraphStyle(
            name='CtaIntro',
            parent=self.styles['Normal'],
            fontName=self.font_regular,
            fontSize=12,
            textColor=self.text_primary,
            alignment=TA_CENTER,
            spaceAfter=15,
            leading=15
        )
        button_text_style = ParagraphStyle(
            name='CtaButtonText',
            parent=self.styles['Normal'],
            fontName=self.font_bold,
            fontSize=13,
            textColor=colors.white,
            alignment=TA_CENTER,
            leading=15
        )
        
        story.append(Spacer(1, 35))
        story.append(Paragraph(f"Ready to pass your {dept} test? Practice with our interactive exam simulator:", cta_intro_style))
        
        button_content = Paragraph("Start Free Simulator at <b>dmvquestionbank.com</b>", button_text_style)
        button_table = Table([[button_content]], colWidths=[4.2*inch])
        button_table.setStyle(TableStyle([
            ('BACKGROUND', (0, 0), (-1, -1), self.brand_blue),
            ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
            ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
            ('TOPPADDING', (0, 0), (-1, -1), 10),
            ('BOTTOMPADDING', (0, 0), (-1, -1), 10),
            ('BOX', (0, 0), (-1, -1), 1, self.brand_blue),
        ]))
        button_table.hAlign = 'CENTER'
        story.append(button_table)
        
        # Premium features banner
        story.append(Spacer(1, 15))
        premium_text = "Premium Access: Full Question Bank • Real Mock Tests • Smart Dashboard"
        premium_style = ParagraphStyle(
            name='PremiumLabel',
            parent=self.styles['Normal'],
            fontName=self.font_regular,
            fontSize=10,
            textColor=self.text_secondary,
            alignment=TA_CENTER,
            leading=12
        )
        story.append(Paragraph(premium_text, premium_style))
        
        # Separator to start indicator
        story.append(HRFlowable(
            width="20%",
            thickness=1.5,
            color=self.brand_blue,
            spaceBefore=30,
            spaceAfter=20
        ))
        
        start_style = ParagraphStyle(
            name='StartLabel',
            parent=self.styles['Normal'],
            fontName=self.font_bold,
            fontSize=11,
            textColor=self.text_secondary,
            alignment=TA_CENTER,
            leading=14
        )
        story.append(Paragraph("Practice Questions Begin on Next Page", start_style))
        
        return story

    def generate_pdf(self, csv_file_path, output_path, state_name):
        """Generate professional PDF with modern margins and layouts"""
        try:
            # Read CSV file
            df = pd.read_csv(csv_file_path)
            print(f"  Processing {len(df)} questions for {state_name}")
            
            # Get the exact filename and extract department (e.g. DMV, DOT, PennDOT, etc.)
            pdf_filename = os.path.basename(output_path)
            clean_name = pdf_filename.replace("Free-", "").replace("-Practice-Questions.pdf", "")
            parts = clean_name.split("-")
            dept = parts[-1] if parts else "DMV"
            
            # Create PDF with professional compact margins (0.75 in / 54pt)
            doc = SimpleDocTemplate(
                output_path,
                pagesize=letter,
                rightMargin=54,
                leftMargin=54,
                topMargin=54,
                bottomMargin=54
            )
            
            story = []
            
            # Cover page
            story.extend(self.create_professional_first_page(state_name, len(df), dept))
            story.append(PageBreak())
            
            # Questions section with brand header
            questions_header = f"{state_name.title()} Practice Questions"
            story.append(Paragraph(questions_header, self.styles['SectionHeader']))
            
            # Process questions in KeepTogether blocks to prevent awkward page splits
            for idx, row in df.iterrows():
                question_num = idx + 1
                question = row['question']
                options = self.parse_options(row['options'])
                correct_answer = row['correct-answer']
                
                question_elements = []
                
                # Question text
                q_text = f"<b>{question_num}.</b> {question}"
                question_elements.append(Paragraph(q_text, self.styles['QuestionText']))
                
                # Options list
                for option in options:
                    if option.strip():
                        clean_option = option.strip()
                        if clean_option.startswith(('a:', 'b:', 'c:', 'd:')):
                            option_letter = clean_option[0].upper()
                            text = clean_option[2:].strip()
                            if option_letter.lower() == str(correct_answer).strip().lower():
                                formatted_option = f"<font color='#007aff'><b>✓</b></font> <b>{option_letter})</b> {text}"
                            else:
                                formatted_option = f"<font color='#ffffff'>✓</font> <b>{option_letter})</b> {text}"
                        else:
                            formatted_option = f"• {clean_option}"
                        question_elements.append(Paragraph(formatted_option, self.styles['OptionText']))
                
                # Add complete question block
                story.append(KeepTogether(question_elements))
            
            # Build using background templates
            def first_page_template(canvas_obj, doc):
                self.create_professional_first_page_background(canvas_obj, doc)
            
            def later_page_template(canvas_obj, doc):
                self.create_professional_inner_page_background(canvas_obj, doc)
            
            doc.build(story, onFirstPage=first_page_template, onLaterPages=later_page_template)
            return True
            
        except Exception as e:
            print(f"  ❌ Error generating PDF for {state_name}: {str(e)}")
            import traceback
            traceback.print_exc()
            return False

def get_state_name_from_file(filename):
    """Extract state name from CSV filename"""
    basename = os.path.basename(filename)
    state_name = basename.replace('questions_', '').replace('_free.csv', '')
    return state_name

def main():
    """Generate free practice test PDFs for requested state(s)"""
    # Initialize generator
    generator = StatePDFGenerator()
    
    # Check if a specific state is requested as argument (e.g. python generate_all_free_pdfs.py california)
    state_arg = sys.argv[1].lower().strip() if len(sys.argv) > 1 else None
    
    if state_arg:
        # Resolve state key
        state_key = state_arg.replace(' ', '-')
        csv_file = f"public/data/questions_{state_key}_free.csv"
        
        if not os.path.exists(csv_file):
            print(f"❌ Error: CSV file not found: {csv_file}")
            return
            
        csv_files = [csv_file]
        print(f"🚀 Starting PDF generation for single state: {state_key.title()}")
    else:
        # Find all free CSV files
        csv_pattern = "public/data/questions_*_free.csv"
        csv_files = glob.glob(csv_pattern)
        print(f"🚀 Starting batch generation of free practice test PDFs for all states...")
        
    print("=" * 70)
    
    # Define exact output directory matching Next.js serving directory
    output_dir = "public/free-permit-test-questions-PDF"
    os.makedirs(output_dir, exist_ok=True)
    
    print(f"📁 Target output directory: {output_dir}/")
    print(f"📄 Found {len(csv_files)} free CSV files to process.")
    print("")
    
    successful = 0
    failed = 0
    
    for csv_file in sorted(csv_files):
        state_key = get_state_name_from_file(csv_file)
        
        # Lookup exact file name from our mapping
        pdf_filename = STATE_PDF_FILES.get(state_key)
        if not pdf_filename:
            # Fallback naming structure
            clean_name = state_key.replace('-', ' ').title().replace(' ', '-')
            pdf_filename = f"Free-{clean_name}-DMV-Practice-Questions.pdf"
            
        output_file = os.path.join(output_dir, pdf_filename)
        
        print(f"📋 Generating: {state_key.replace('-', ' ').title()}")
        print(f"   ↳ Saving to: {output_file}")
        
        success = generator.generate_pdf(csv_file, output_file, state_key.replace('-', ' '))
        
        if success:
            file_size = os.path.getsize(output_file)
            print(f"   ✅ Success: {file_size / 1024:.1f} KB")
            successful += 1
        else:
            print(f"   ❌ Failed")
            failed += 1
        print("")
        
    print("=" * 70)
    print("🎉 PDF Generation Complete!")
    print(f"   ✅ Successful: {successful} PDFs")
    print(f"   ❌ Failed:     {failed} PDFs")

if __name__ == "__main__":
    main()