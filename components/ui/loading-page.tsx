'use client'

import { Loader2 } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface LoadingPageProps {
    message?: string
    title?: string
}

export function LoadingPage({
    message = "Please wait while we prepare your study material.",
    title = "Loading..."
}: LoadingPageProps) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 flex items-center justify-center p-4">
            <Card className="w-full max-w-md border-2 border-blue-100 shadow-2xl animate-fade-in-up">
                <CardHeader className="text-center pb-2">
                    <div className="relative w-20 h-20 mx-auto mb-6">
                        <div className="absolute inset-0 bg-blue-100 rounded-full animate-ping opacity-25"></div>
                        <div className="relative bg-white rounded-full p-4 shadow-inner border border-blue-50">
                            <Loader2 className="w-12 h-12 animate-spin text-[#007aff]" />
                        </div>
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900">{title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                    <p className="text-gray-600 leading-relaxed">
                        {message}
                    </p>
                    <div className="mt-8 flex justify-center gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
