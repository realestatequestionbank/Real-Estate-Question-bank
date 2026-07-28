'use client'

import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

interface PdfRendererProps {
    url: string
    numPages: number | null
    scale: number
    width: number
    onLoadSuccess: (data: { numPages: number }) => void
}

export default function PdfRenderer({
    url,
    numPages,
    scale,
    width,
    onLoadSuccess,
}: PdfRendererProps) {
    return (
        <Document
            file={url}
            onLoadSuccess={onLoadSuccess}
            loading={
                <div className="flex items-center justify-center h-[600px]">
                    <Loader2 className="w-10 h-10 animate-spin text-[#007aff]" />
                </div>
            }
            error={
                <div className="flex flex-col items-center justify-center p-10 text-center">
                    <p className="text-red-500 font-medium mb-2">Failed to load PDF</p>
                    <Button asChild variant="outline">
                        <a href={url} download>Download instead</a>
                    </Button>
                </div>
            }
            className="flex flex-col items-center gap-4 pb-4"
        >
            {numPages && Array.from({ length: numPages }, (_, i) => i + 1).map((page) => (
                <Page
                    key={page}
                    pageNumber={page}
                    width={width * scale}
                    className="bg-white shadow-lg"
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                />
            ))}
        </Document>
    )
}
