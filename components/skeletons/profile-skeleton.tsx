import { Skeleton } from "@/components/ui/skeleton"

export function ProfileSkeleton() {
    return (
        <div className="container mx-auto px-4 py-8 lg:py-12">
            {/* Profile Header Skeleton */}
            <div className="mb-8">
                <div className="border-b border-gray-200 pb-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Skeleton className="w-12 h-12 rounded-full" />
                            <div>
                                <Skeleton className="h-6 w-48 mb-2" />
                                <Skeleton className="h-4 w-32" />
                            </div>
                        </div>
                        <Skeleton className="h-8 w-24 rounded-lg" />
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto">
                <div className="grid lg:grid-cols-3 gap-8 mb-8">
                    {/* Account Information Skeleton */}
                    <div className="lg:col-span-2">
                        <div className="mb-8">
                            <Skeleton className="h-6 w-48 mb-6" />
                            <div className="bg-white border border-gray-200 rounded-lg">
                                <div className="divide-y divide-gray-200">
                                    {[...Array(4)].map((_, i) => (
                                        <div key={i} className="p-6">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <Skeleton className="h-4 w-32 mb-2" />
                                                    <Skeleton className="h-4 w-48" />
                                                </div>
                                                {i === 3 && <Skeleton className="h-6 w-20 rounded" />}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Premium Membership Skeleton */}
                        <div className="mb-8">
                            <Skeleton className="h-6 w-48 mb-6" />
                            <div className="bg-white border border-gray-200 rounded-lg">
                                <div className="divide-y divide-gray-200">
                                    <div className="p-6">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <Skeleton className="h-4 w-32 mb-2" />
                                                <Skeleton className="h-4 w-48" />
                                            </div>
                                            <Skeleton className="h-6 w-20 rounded" />
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <Skeleton className="h-4 w-32 mb-3" />
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                            {[...Array(6)].map((_, i) => (
                                                <Skeleton key={i} className="h-4 w-40" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Account Actions Skeleton */}
                    <div className="lg:col-span-1">
                        <Skeleton className="h-6 w-32 mb-6" />
                        <div className="bg-white border border-gray-200 rounded-lg">
                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <Skeleton className="w-5 h-5 rounded" />
                                    <Skeleton className="h-4 w-32" />
                                </div>
                                <Skeleton className="h-4 w-full mb-2" />
                                <Skeleton className="h-4 w-3/4 mb-4" />
                                <Skeleton className="h-10 w-full rounded" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
