import Link from 'next/link'
import { ArrowRight, BookOpen } from 'lucide-react'
import { BLOG_POSTS, BlogPostMetadata } from '@/lib/blog/posts'

interface RelatedArticle {
  title: string
  description: string
  href: string
  category?: string
  readTime?: string
}

interface RelatedArticlesProps {
  articles?: RelatedArticle[]
  currentSlug?: string
  title?: string
}

// Function to generate dynamic related articles based on current post
function generateRelatedArticles(currentSlug?: string): RelatedArticle[] {
  if (!currentSlug) return []

  const currentPost = BLOG_POSTS.find(post => post.slug === currentSlug)
  if (!currentPost) return []

  // Get posts from same category first, then other categories
  const sameCategoryPosts = BLOG_POSTS.filter(post =>
    post.slug !== currentSlug && post.category === currentPost.category
  )

  const otherCategoryPosts = BLOG_POSTS.filter(post =>
    post.slug !== currentSlug && post.category !== currentPost.category
  )

  // Combine and take first 3
  const relatedPosts = [...sameCategoryPosts, ...otherCategoryPosts].slice(0, 3)

  // Convert to RelatedArticle format
  return relatedPosts.map(post => ({
    title: post.title,
    description: post.excerpt,
    href: `/blog/${post.slug}`,
    category: post.category,
    readTime: post.readTime
  }))
}

export function RelatedArticles({ articles, currentSlug, title = "Recommended Articles" }: RelatedArticlesProps) {
  // Use provided articles or generate dynamic ones
  const relatedArticles = articles || generateRelatedArticles(currentSlug)

  if (relatedArticles.length === 0) return null

  return (
    <section className="mt-8 pt-8 border-t border-gray-200">
      <div className="flex items-center gap-3 mb-8">
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedArticles.map((article, index) => (
          <Link
            key={index}
            href={article.href}
            className="group bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex flex-col h-full">
              {article.category && (
                <div className="inline-flex items-center bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-3 w-fit">
                  {article.category}
                </div>
              )}

              <h4 className="font-bold text-gray-900 text-lg mb-3 group-hover:text-[#007aff] transition-colors">
                {article.title}
              </h4>

              <p className="text-gray-600 text-sm mb-4 flex-grow">
                {article.description}
              </p>

              <div className="flex items-center justify-between">
                {article.readTime && (
                  <span className="text-xs text-gray-500">{article.readTime}</span>
                )}
                <div className="flex items-center text-[#007aff] text-sm font-semibold group-hover:gap-2 transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

// Predefined article sets for specific use cases (kept for backwards compatibility)
export const CALIFORNIA_RELATED_ARTICLES: RelatedArticle[] = [
  {
    title: "Can You Take the California Real Estate real estate exam Online? (2026 Update)",
    description: "Get the latest information about California Real Estate online real estate examing in 2026",
    href: "/blog/california-real-estate-permit-test-online-2026",
    category: "California Tips",
    readTime: "6 min read"
  },
  {
    title: "How Many Questions to Pass the California real estate exam?",
    description: "Learn exactly how many questions you need to answer correctly on the California real estate exam",
    href: "/blog/how-many-questions-pass-california-permit-test",
    category: "Test Preparation",
    readTime: "7 min read"
  },
  {
    title: "21 Essential California Permit Concepts",
    description: "Master the specific laws and rules unique to California driving tests",
    href: "/blog/california-real-estate-permit-test-concepts",
    category: "Study Guide",
    readTime: "12 min read"
  }
]

export const TEST_PREPARATION_ARTICLES: RelatedArticle[] = [
  {
    title: "How to Reduce Anxiety Before Your Road Test",
    description: "Discover proven strategies to overcome road test anxiety and boost your confidence",
    href: "/blog/how-to-reduce-anxiety-before-road-test",
    category: "Test Preparation",
    readTime: "6 min read"
  },
  {
    title: "7 Common Real Estate Test Mistakes and How to Avoid Them",
    description: "Avoid these frequent errors that cause students to fail nationwide",
    href: "/blog/common-real-estate-test-mistakes",
    category: "Test Preparation",
    readTime: "6 min read"
  },
  {
    title: "How to Pass Your Real Estate Test First Try",
    description: "Proven study strategies and test-taking tips from successful students",
    href: "/blog/pass-real-estate-permit-test-first-try",
    category: "Study Tips",
    readTime: "7 min read"
  }
]

export const TEXAS_RELATED_ARTICLES: RelatedArticle[] = [
  {
    title: "Texas Real Estate Test Guide 2025",
    description: "Complete guide to passing the Texas real estate exam with state-specific tips",
    href: "/blog/texas-real-estate-test-2025-guide",
    category: "Texas Tips",
    readTime: "10 min read"
  },
  {
    title: "Texas Real Estate Practice Test",
    description: "Practice with authentic Texas Real Estate questions and detailed explanations",
    href: "/state/texas/free",
    category: "Practice Test",
    readTime: "15 min test"
  },
  {
    title: "Common Real Estate Test Mistakes",
    description: "Avoid these frequent errors that cause students to fail nationwide",
    href: "/blog/common-real-estate-test-mistakes",
    category: "Study Tips",
    readTime: "6 min read"
  }
]

export const GENERAL_STUDY_ARTICLES: RelatedArticle[] = [
  {
    title: "How to Reduce Anxiety Before Your Road Test",
    description: "Discover proven strategies to overcome road test anxiety and boost your confidence",
    href: "/blog/how-to-reduce-anxiety-before-road-test",
    category: "Test Preparation",
    readTime: "6 min read"
  },
  {
    title: "7 Common Real Estate Test Mistakes and How to Avoid Them",
    description: "Avoid these frequent errors that cause students to fail nationwide",
    href: "/blog/common-real-estate-test-mistakes",
    category: "Test Preparation",
    readTime: "6 min read"
  },
  {
    title: "Complete Real Estate Glossary Guide",
    description: "Master all critical real estate terminology with vocabulary sheets and explanations",
    href: "/blog/real-estate-glossary-guide",
    category: "Real Estate Glossary",
    readTime: "15 min read"
  }
]

export const NEW_YORK_RELATED_ARTICLES: RelatedArticle[] = [
  {
    title: "New York Real Estate Test Guide",
    description: "Navigate New York licensing laws and state real estate exam requirements",
    href: "/blog/new-york-real-estate-permit-test",
    category: "New York Tips",
    readTime: "9 min read"
  },
  {
    title: "New York Real Estate Practice Test",
    description: "Test your knowledge with New York-specific real estate questions",
    href: "/state/new-york/free",
    category: "Practice Test",
    readTime: "15 min test"
  },
  {
    title: "Top 50 Most Missed Real Estate Questions",
    description: "Study the questions that trip up most test-takers nationwide",
    href: "/blog/top-questions-answered-wrong",
    category: "Study Guide",
    readTime: "11 min read"
  }
]