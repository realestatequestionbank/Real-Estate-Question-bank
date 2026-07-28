import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"

export function StateFreeSkeleton() {
    return (
        <div className="min-h-screen bg-white">
            {/* Breadcrumbs Skeleton */}
            <div className="bg-gray-50 py-3">
                <div className="container mx-auto px-4">
                    <div className="flex items-center space-x-2">
                        <Skeleton className="h-4 w-12" />
                        <Skeleton className="h-4 w-4" />
                        <Skeleton className="h-4 w-16" />
                        <Skeleton className="h-4 w-4" />
                        <Skeleton className="h-4 w-24" />
                    </div>
                </div>
            </div>

            <main>
                {/* Hero Section Skeleton */}
                <section className="relative pt-20 pb-16 md:pt-32 md:pb-24">
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="flex justify-center mb-8">
                                <Skeleton className="h-10 w-64 rounded-full" />
                            </div>
                            <Skeleton className="h-16 w-3/4 mx-auto mb-6" />
                            <Skeleton className="h-6 w-2/3 mx-auto mb-10" />
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Skeleton className="h-14 w-64 rounded-xl" />
                                <Skeleton className="h-14 w-48 rounded-xl" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section Skeleton */}
                <section className="py-12 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className="text-center">
                                    <Skeleton className="h-10 w-20 mx-auto mb-2" />
                                    <Skeleton className="h-4 w-24 mx-auto" />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* OverView Skeleton */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-16">
                                <Skeleton className="h-12 w-2/3 mx-auto mb-6" />
                                <Skeleton className="h-20 w-full max-w-3xl mx-auto" />
                            </div>
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                                {[...Array(4)].map((_, i) => (
                                    <Skeleton key={i} className="h-32 w-full rounded-2xl" />
                                ))}
                            </div>
                            <div className="grid lg:grid-cols-2 gap-12">
                                <Skeleton className="h-80 w-full rounded-3xl" />
                                <Skeleton className="h-80 w-full rounded-3xl" />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
