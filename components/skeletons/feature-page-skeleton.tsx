import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"

export function FeaturePageSkeleton() {
    return (
        <div className="container mx-auto px-4 py-8">
            {/* Header Skeleton */}
            <div className="mb-8">
                <Skeleton className="h-10 w-48 mb-6" /> {/* Back button */}

                <div className="rounded-lg p-6 bg-gray-100 h-32 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-2">
                        <Skeleton className="w-8 h-8 rounded" />
                        <Skeleton className="h-8 w-64" />
                    </div>
                    <Skeleton className="h-4 w-48 ml-11" />
                </div>
            </div>

            {/* Grid Content Skeleton */}
            <div className="grid lg:grid-cols-2 gap-8">
                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <Skeleton className="w-5 h-5" />
                            <Skeleton className="h-6 w-32" />
                        </div>
                        <div className="space-y-4">
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className="flex justify-between">
                                    <Skeleton className="h-4 w-24" />
                                    <Skeleton className="h-4 w-16" />
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <Skeleton className="w-5 h-5" />
                            <Skeleton className="h-6 w-32" />
                        </div>
                        <div className="space-y-3">
                            {[...Array(5)].map((_, i) => (
                                <Skeleton key={i} className="h-4 w-full" />
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="mt-8 flex justify-center">
                <Skeleton className="h-12 w-48 rounded-lg" />
            </div>
        </div>
    )
}
