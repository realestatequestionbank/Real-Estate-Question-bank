'use client'

import Script from 'next/script'

interface Review {
  author: string
  rating: number
  reviewBody: string
  datePublished: string
}

interface ReviewsSchemaProps {
  reviews?: Review[]
  overallRating?: number
  totalReviews?: number
}

export function ReviewsSchema({ 
  reviews = [], 
  overallRating = 4.8, 
  totalReviews = 2847 
}: ReviewsSchemaProps) {
  const defaultReviews: Review[] = [
    {
      author: "Sarah M.",
      rating: 5,
      reviewBody: "Passed my Real Estate Exam on the first try! The practice questions were exactly like the real test. Highly recommend this platform.",
      datePublished: "2024-12-15"
    },
    {
      author: "Mike R.",
      rating: 5,
      reviewBody: "Best Real Estate practice app I've used. The explanations are really helpful and the interface is clean and easy to use.",
      datePublished: "2024-12-10"
    },
    {
      author: "Jessica L.",
      rating: 5,
      reviewBody: "Amazing platform! I failed my first test but after using this for a week, I passed with flying colors. The mock tests are spot on.",
      datePublished: "2024-12-05"
    },
    {
      author: "David K.",
      rating: 4,
      reviewBody: "Very good practice questions. Some of the explanations could be more detailed but overall great value for money.",
      datePublished: "2024-11-28"
    },
    {
      author: "Amanda T.",
      rating: 5,
      reviewBody: "Excellent service! Customer support is responsive and the content is always up to date. Worth every penny.",
      datePublished: "2024-11-20"
    }
  ]

  const reviewsData = reviews.length > 0 ? reviews : defaultReviews

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service", 
    "name": "Real Estate Question Bank - Practice Test Platform",
    "description": "Comprehensive Real Estate practice test platform with real questions and detailed explanations",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Real Estate Question Bank"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": overallRating.toString(),
      "reviewCount": totalReviews.toString(),
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": reviewsData.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating.toString(),
        "bestRating": "5",
        "worstRating": "1"
      },
      "reviewBody": review.reviewBody,
      "datePublished": review.datePublished
    }))
  }

  return (
    <Script
      id="reviews-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  )
}