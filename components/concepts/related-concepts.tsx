import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { CONCEPTS } from './data'

interface RelatedConceptsProps {
    currentConceptId: string
}

export function RelatedConcepts({ currentConceptId }: RelatedConceptsProps) {
    // Filter out the current concept and take the top 3 remaining
    // Or shuffle/randomize if preferred, but taking next 3 is stable
    const relatedConcepts = CONCEPTS.filter(c => c.id !== currentConceptId).slice(0, 3)

    return (
        <section className="py-12 md:py-16 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-8">Learn other concepts</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {relatedConcepts.map((concept, index) => (
                            <Link
                                key={concept.id}
                                href={concept.href}
                                className="group block h-full"
                            >
                                <div className={`
                                    relative h-full bg-white rounded-xl border border-gray-100 overflow-hidden
                                    transition-all duration-300 ease-out
                                    hover:-translate-y-1 hover:border-gray-200
                                    shadow-sm hover:shadow-xl ${concept.hoverShadowColor}
                                `}>
                                    {/* Top Decoration */}
                                    <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${concept.gradient}`} />

                                    <div className="p-5 flex flex-col h-full">
                                        <div className="flex gap-4 mb-4">
                                            {/* Concept Image (Left) */}
                                            <div className="w-16 h-16 flex-shrink-0 rounded-lg bg-gray-50 border border-gray-100 overflow-hidden group-hover:shadow-sm transition-all">
                                                <img
                                                    src={concept.image}
                                                    alt={concept.title}
                                                    className="w-full h-full object-contain p-1 group-hover:scale-110 transition-transform duration-500"
                                                />
                                            </div>

                                            {/* Title & Description (Right) */}
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-bold text-gray-900 leading-tight transition-colors mb-1 group-hover:text-[#007aff]">
                                                    {concept.title}
                                                </h4>
                                                <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                                                    {concept.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Stats Row */}
                                        <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
                                            <div className="flex gap-3">
                                                <div className="text-xs font-medium text-gray-500 bg-gray-50 px-2 py-1 rounded-md">
                                                    {concept.stats[1].value} coverage
                                                </div>
                                            </div>

                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-gray-50 group-hover:${concept.iconBg} transition-colors`}>
                                                <ArrowRight className={`w-4 h-4 text-gray-400 group-hover:${concept.iconColor} transition-colors`} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
