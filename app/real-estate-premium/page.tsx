import { Metadata } from 'next'
import { AuthProvider } from '@/contexts/auth-context'
import { RealEstatePremiumPage } from '@/components/pages/real-estate-premium-page'
import Script from 'next/script'
import { PRICING, getEffectivePricing } from '@/lib/constants'

// Generate metadata for SEO
export const metadata: Metadata = {
  title: 'Pass your Real Estate Exam. First try. - Real Estate Premium | Real Estate Question Bank',
  description: 'Get premium access to comprehensive Real Estate practice questions, unlimited mock tests, detailed explanations, and a 100% pass guarantee. Join 25,000+ students who passed their Real Estate Exam with confidence.',
  keywords: [
    'Real Estate premium',
    'Real Estate practice test premium',
    'pass Real Estate Exam first try',
    'Real Estate question bank premium',
    'Real Estate Exam preparation',
    'premium Real Estate practice questions',
    'Real Estate mock tests',
    'pass guarantee Real Estate',
    'Real Estate study guide'
  ],
  openGraph: {
    title: 'Pass your Real Estate Exam. First try. - Real Estate Premium',
    description: 'Get premium access to comprehensive Real Estate practice questions, unlimited mock tests, and a 100% pass guarantee. Join 25,000+ students who passed their Real Estate Exam.',
    type: 'website',
    url: 'https://www.realestatequestionbank.com/real-estate-premium',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/product-image-desktop.webp',
        width: 1200,
        height: 630,
        alt: 'Real Estate Premium - Comprehensive Real Estate Test Preparation'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pass your Real Estate Exam. First try. - Real Estate Premium',
    description: 'Get premium access to comprehensive Real Estate practice questions, unlimited mock tests, and a 100% pass guarantee.',
    images: ['/images/product-image-desktop.webp'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/real-estate-premium',
  },
}

// Structured Data Schemas for SEO
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Real Estate Question Bank",
  "url": "https://www.realestatequestionbank.com",
  "logo": "https://www.realestatequestionbank.com/images/logo.png",
  "description": "Real Estate Question Bank helps students pass their Real Estate Exams on the first try with state-specific practice questions and comprehensive study guides.",
  "sameAs": [
    "https://twitter.com/real-estatequestionbank"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "email": "support@realestatequestionbank.com"
  }
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.realestatequestionbank.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Real Estate Premium",
      "item": "https://www.realestatequestionbank.com/real-estate-premium"
    }
  ]
}

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Pass your Real Estate Exam. First try. - Real Estate Premium",
  "description": "Get premium access to comprehensive Real Estate practice questions, unlimited mock tests, detailed explanations, and a 100% pass guarantee.",
  "url": "https://www.realestatequestionbank.com/real-estate-premium",
  "publisher": {
    "@type": "Organization",
    "name": "Real Estate Question Bank",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.realestatequestionbank.com/images/logo.png"
    }
  },
  "mainEntity": {
    "@type": "Course",
    "name": "Real Estate Premium Test Preparation Course",
    "description": "Complete preparation course for Real Estate Exams with 2000 practice questions, mock exams, and study guides.",
    "provider": {
      "@type": "Organization",
      "name": "Real Estate Question Bank"
    },
    "courseCode": "Real Estate-PREMIUM-2026",
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "online",
      "courseWorkload": "PT2W"
    }
  },
  "dateModified": "2026-01-22",
  "inLanguage": "en-US"
}

export default function RealEstatePremiumPageRoute() {
  const effectivePricing = getEffectivePricing()

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Real Estate Premium - Pass your Real Estate Exam. First try.",
    "image": [
      "https://www.realestatequestionbank.com/images/product-image-desktop.webp"
    ],
    "description": "Comprehensive Real Estate Exam preparation with 2000 practice questions, unlimited mock tests, detailed explanations, progress tracking, and 100% pass guarantee.",
    "brand": {
      "@type": "Brand",
      "name": "Real Estate Question Bank"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "30-Day Premium Access",
        "price": effectivePricing.PLANS.SEVEN_DAY.discountedPrice,
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://www.realestatequestionbank.com/real-estate-premium",
        "priceValidUntil": "2026-12-31",
        "validFrom": "2026-01-01"
      },
      {
        "@type": "Offer",
        "name": "90-Day Premium Access",
        "price": effectivePricing.PLANS.THIRTY_DAY.discountedPrice,
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://www.realestatequestionbank.com/real-estate-premium",
        "priceValidUntil": "2026-12-31",
        "validFrom": "2026-01-01"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "500",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sarah J."
        },
        "datePublished": "2025-10-15",
        "reviewBody": "I passed on my first try! The practice questions were so similar to the real exam. The explanations really helped me understand the reasoning behind each answer.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "John S."
        },
        "datePublished": "2025-11-28",
        "reviewBody": "The Real Estate Exam is NOT common sense!! You should go prepared. This question bank was exactly what I needed! I passed my Real Estate Exam after failing twice.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Emma D."
        },
        "datePublished": "2025-09-20",
        "reviewBody": "Amazing practice tests! I was so nervous but this helped me feel prepared. Passed on my first attempt thanks to these realistic questions.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      }
    ],
    "category": "Educational Course"
  }

  return (
    <>
      {/* Structured Data for SEO */}
      <Script
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <AuthProvider>
        <RealEstatePremiumPage />
      </AuthProvider>
    </>
  )
}
