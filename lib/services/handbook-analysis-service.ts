export interface HandbookPage {
  pageNumber: number
  examTakeaways: string[]
  examTraps?: string[]
}

export interface HandbookAnalysisData {
  title: string
  pages: HandbookPage[]
  totalPages: number
}

export class HandbookAnalysisService {
  private static parseHandbookAnalysis(content: string): HandbookAnalysisData {
    const lines = content.split('\n')
    const pages: HandbookPage[] = []
    let currentPage: HandbookPage | null = null

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim()
      
      // Skip empty lines and headers
      if (!line || line.startsWith('=') || line.startsWith('ANALYSIS FORMAT:') || line.startsWith('Each page contains:')) {
        continue
      }

      // Check for page number (including those with additional info like "Page 50 (Light Rail/Motorcycles)")
      const pageMatch = line.match(/^Page (\d+)/)
      if (pageMatch) {
        const pageNumber = parseInt(pageMatch[1])
        
        // Save previous page if exists and it's different from current
        if (currentPage && currentPage.pageNumber !== pageNumber) {
          pages.push(currentPage)
        }
        
        // Start new page only if it's different from current
        if (!currentPage || currentPage.pageNumber !== pageNumber) {
          currentPage = {
            pageNumber: pageNumber,
            examTakeaways: [],
            examTraps: []
          }
        }
        continue
      }

      // Check for exam takeaways section
      if (line === 'Exam Takeaways:' && currentPage) {
        // Continue to next line to start collecting takeaways
        continue
      }

      // Check for exam traps section
      if (line === 'Exam Trap:' && currentPage) {
        // Continue to next line to start collecting traps
        continue
      }

      // Collect takeaways (bullet points)
      if (line.startsWith('•') && currentPage) {
        currentPage.examTakeaways.push(line.substring(1).trim())
        continue
      }

      // Collect exam traps (warning emoji lines)
      if (line.startsWith('⚠️') && currentPage) {
        if (!currentPage.examTraps) {
          currentPage.examTraps = []
        }
        currentPage.examTraps.push(line.substring(2).trim())
        continue
      }
    }

    // Don't forget the last page
    if (currentPage) {
      pages.push(currentPage)
    }

    return {
      title: 'California Real Estate Driver Handbook 2025 - Exam Analysis',
      pages: pages.sort((a, b) => a.pageNumber - b.pageNumber),
      totalPages: pages.length
    }
  }

  static async getCaliforniaHandbookAnalysis(): Promise<HandbookAnalysisData> {
    try {
      const response = await fetch('/handbook-analysis/california_real-estate_handbook_analysis_pages_7_79.txt')
      if (!response.ok) {
        throw new Error('Failed to fetch handbook analysis')
      }
      const content = await response.text()
      return this.parseHandbookAnalysis(content)
    } catch (error) {
      console.error('Error loading handbook analysis:', error)
      throw new Error('Failed to load handbook analysis')
    }
  }

  static getPagePdfUrl(pageNumber: number): string {
    const paddedPageNumber = pageNumber.toString().padStart(3, '0')
    return `/handbook-analysis/california_real-estate_handbook_pages/California_Real Estate_Handbook_2025_page_${paddedPageNumber}.pdf`
  }

  static getFreePagesRange(): { start: number; end: number } {
    return { start: 7, end: 21 } // 15 pages for free users
  }

  static isPremiumPage(pageNumber: number): boolean {
    const freeRange = this.getFreePagesRange()
    return pageNumber < freeRange.start || pageNumber > freeRange.end
  }
}