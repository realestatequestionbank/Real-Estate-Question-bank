'use client'

import { useState, useMemo, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search, Calendar, Clock, User, ChevronRight, Filter } from 'lucide-react'
import { BLOG_POSTS, BlogCategory } from '@/lib/blog/posts'

export function BlogListing() {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedCategory, setSelectedCategory] = useState<BlogCategory | 'All'>('All')
    const [visibleCount, setVisibleCount] = useState(6)

    // Reset visible count when filters change
    useEffect(() => {
        setVisibleCount(6)
    }, [searchQuery, selectedCategory])

    const categories: (BlogCategory | 'All')[] = ['All', 'State Guides', 'Test Preparation', 'Career Tips', 'Beginner Guides']

    const filteredPosts = useMemo(() => {
        return BLOG_POSTS.filter((post: any) => {
            const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
            const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
            return matchesSearch && matchesCategory
        })
    }, [searchQuery, selectedCategory])

    return (
        <div className="space-y-12">
            {/* Search and Filter Section */}
            <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-gray-100 mb-12">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="relative flex-1">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search for study guides, tips, and more..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-gray-900"
                        />
                    </div>
                    <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${selectedCategory === category
                                    ? 'bg-[#007aff] text-white shadow-lg shadow-blue-200'
                                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Posts Grid */}
            {filteredPosts.length > 0 ? (
                <>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPosts.slice(0, visibleCount).map((post: any) => (
                            <Link
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                className="group bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
                            >
                                {/* Image Section */}
                                <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                                    {post.image ? (
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            priority={filteredPosts.indexOf(post) < 3}
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-gray-300">
                                            <Search className="w-12 h-12" />
                                        </div>
                                    )}
                                </div>

                                <div className="px-6 pt-6 pb-5 flex flex-col flex-1">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="px-3 py-1 bg-blue-50 text-[#007aff] rounded-full text-xs font-bold uppercase tracking-wider">
                                            {post.category}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#007aff] transition-colors">
                                        {post.title}
                                    </h3>

                                    <p className="text-gray-600 mb-2 line-clamp-2 text-sm leading-relaxed">
                                        {post.excerpt}
                                    </p>

                                    <div className="mt-auto pt-3 border-t border-gray-50">
                                        <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 font-medium">
                                            <div className="flex items-center gap-1.5">
                                                <Calendar className="w-3.5 h-3.5" />
                                                <span>{post.publishDate}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <Clock className="w-3.5 h-3.5" />
                                                <span>{post.readTime}</span>
                                            </div>
                                        </div>

                                        <div className="mt-4 flex items-center text-[#007aff] font-bold text-sm">
                                            Read Article <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Load More Button */}
                    {visibleCount < filteredPosts.length && (
                        <div className="text-center mt-12">
                            <button
                                onClick={() => setVisibleCount(prev => prev + 6)}
                                className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-[#007aff] text-[#007aff] font-bold rounded-xl hover:bg-[#007aff] hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg"
                            >
                                Load More Articles
                            </button>
                        </div>
                    )}
                </>
            ) : (
                <div className="text-center py-24 bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-200">
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Search className="w-10 h-10 text-gray-300" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">No blogs found</h3>
                    <p className="text-gray-500">Try adjusting your search or filters to find what you're looking for.</p>
                    <button
                        onClick={() => { setSearchQuery(''); setSelectedCategory('All') }}
                        className="mt-6 text-[#007aff] font-bold hover:underline"
                    >
                        Clear all filters
                    </button>
                </div>
            )}
        </div>
    )
}
