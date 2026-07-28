import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export function DashboardSkeleton() {
    return (
        <div className="container mx-auto px-4 py-8 lg:py-12">
            {/* Welcome Header Skeleton */}
            <div className="mb-8 lg:mb-12">
                <div className="rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-100 bg-gray-50">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                        <div className="mb-6 lg:mb-0 w-full lg:w-2/3">
                            <div className="flex items-center gap-3 mb-3">
                                <Skeleton className="w-12 h-12 rounded-2xl" />
                                <div className="space-y-2 w-full max-w-md">
                                    <Skeleton className="h-8 w-3/4" />
                                    <Skeleton className="h-4 w-1/2" />
                                </div>
                            </div>
                            <Skeleton className="h-6 w-1/3 mt-4" />
                        </div>

                        {/* Quick Action Skeleton */}
                        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto mt-4 lg:mt-0">
                            <Skeleton className="h-12 w-32 rounded-xl" />
                            <Skeleton className="h-12 w-32 rounded-xl" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Progress Overview Skeleton */}
            <div className="mb-12">
                <div className="flex items-center justify-between mb-6">
                    <Skeleton className="h-8 w-64" />
                    <Skeleton className="h-6 w-32 rounded-full" />
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="rounded-2xl p-6 border border-gray-100 bg-gray-50 h-[180px] flex flex-col items-center justify-center">
                            <Skeleton className="w-16 h-16 rounded-2xl mb-4" />
                            <Skeleton className="h-8 w-16 mb-2" />
                            <Skeleton className="h-4 w-24" />
                            <Skeleton className="h-3 w-20 mt-1" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Study Features Skeleton */}
            <div>
                <div className="mb-8">
                    <Skeleton className="h-8 w-48 mb-2" />
                    <Skeleton className="h-4 w-96" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="bg-white rounded-3xl p-8 border border-gray-100 h-[350px] flex flex-col items-center">
                            <Skeleton className="w-20 h-20 rounded-2xl mb-6" />
                            <Skeleton className="h-6 w-48 mb-3" />
                            <Skeleton className="h-4 w-full mb-2" />
                            <Skeleton className="h-4 w-3/4 mb-6" />
                            <Skeleton className="h-12 w-full rounded-xl mt-auto" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
