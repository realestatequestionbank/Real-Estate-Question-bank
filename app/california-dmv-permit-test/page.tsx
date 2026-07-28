import { Metadata } from 'next'
import { californiaStateData } from '@/lib/states/california'
import { STATES, PRICING, getEffectivePricing } from '@/lib/constants'
import { AuthProvider } from '@/contexts/auth-context'
import CaliforniaRealEstateTestPractice from './california-real-estate-test-practice-static'
import { generateProductSchema } from '@/components/state-landing-page/generate-metadata'
import Script from 'next/script'

// Generate metadata for SEO
export const metadata: Metadata = {
  title: californiaStateData.seo.title,
  description: californiaStateData.seo.description,
  keywords: californiaStateData.seo.keywords,
  openGraph: {
    title: californiaStateData.seo.title,
    description: californiaStateData.seo.description,
    type: 'website',
    url: 'https://www.realestatequestionbank.com/california-real-estate-permit-test',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'California Real Estate Practice Test - Pass Your real estate exam First Try'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: californiaStateData.seo.title,
    description: californiaStateData.seo.description,
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/california-real-estate-permit-test',
  },
}

// Structured Data Schemas for SEO
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": californiaStateData.faq.map(item => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer
    }
  }))
}



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
      "name": "States",
      "item": "https://www.realestatequestionbank.com/#states"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "California Real Estate real estate exam",
      "item": "https://www.realestatequestionbank.com/california-real-estate-permit-test"
    }
  ]
}

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": californiaStateData.seo.title,
  "description": californiaStateData.seo.description,
  "url": "https://www.realestatequestionbank.com/california-real-estate-permit-test",
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
    "name": "California Real Estate real estate exam Preparation Course",
    "description": "Complete preparation course for the California Real Estate Exam with 503 practice questions, mock exams, and study guides.",
    "provider": {
      "@type": "Organization",
      "name": "Real Estate Question Bank"
    },
    "courseCode": "CA-Real Estate-2026",
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "online",
      "courseWorkload": "PT2W"
    }
  },
  "dateModified": californiaStateData.lastUpdated,
  "inLanguage": "en-US"
}

export default function CaliforniaRealEstateTestPracticePage() {
  const effectivePricing = getEffectivePricing()

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "California Real Estate real estate exam Practice - Premium Question Bank",
    "description": "Comprehensive California Real Estate Exam preparation with 503 practice questions, mock tests, and detailed explanations. Pass your CA Real Estate Exam on the first try.",
    "brand": {
      "@type": "Organization",
      "name": "Real Estate Question Bank"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "30-Day Premium Access",
        "price": effectivePricing.PLANS.SEVEN_DAY.discountedPrice,
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://www.realestatequestionbank.com/california-real-estate-permit-test",
        "priceValidUntil": "2026-12-31",
        "validFrom": "2026-01-01"
      },
      {
        "@type": "Offer",
        "name": "90-Day Premium Access",
        "price": effectivePricing.PLANS.THIRTY_DAY.discountedPrice,
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://www.realestatequestionbank.com/california-real-estate-permit-test",
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
          "name": "Maria S."
        },
        "datePublished": "2026-01-15",
        "reviewBody": "Passed my CA Real Estate Exam on the first try! The practice questions were almost identical to the real test. Highly recommend.",
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
          "name": "James T."
        },
        "datePublished": "2026-01-20",
        "reviewBody": "The explanations for each question really helped me understand the material. Got only 2 questions wrong!",
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
          "name": "Shreya S."
        },
        "datePublished": "2026-01-25",
        "reviewBody": "Excellent resource for CA Real Estate prep! Loved it.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "4.5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Carlo S."
        },
        "datePublished": "2026-01-07",
        "reviewBody": "Real Estate Exams are not common sense at all. This website helped me prepare for it. I recommend this for all first time drivers.",
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
          "name": "Ashley K."
        },
        "datePublished": "2026-02-10",
        "reviewBody": "Worth every penny. I failed once using free resources, then used this and passed easily. The mock tests are great.",
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
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
        <CaliforniaRealEstateTestPractice />
      </AuthProvider>
    </>
  )
}