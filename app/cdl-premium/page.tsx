import { Metadata } from 'next'
import { AuthProvider } from '@/contexts/auth-context'
import { CdlPremiumPage } from '@/components/pages/cdl-premium-page'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Pass your CDL test. First try. - CDL Premium | Real Estate Question Bank',
  description: 'Get premium access to comprehensive CDL practice questions, unlimited mock tests, detailed explanations, and a 100% pass guarantee. Join thousands of drivers who passed their CDL test with confidence.',
  keywords: [
    'CDL premium',
    'CDL practice test premium',
    'pass CDL test first try',
    'CDL question bank premium',
    'CDL test preparation',
    'premium CDL practice questions',
    'CDL mock tests',
    'pass guarantee CDL',
    'CDL study guide'
  ],
  openGraph: {
    title: 'Pass your CDL test. First try. - CDL Premium',
    description: 'Get premium access to comprehensive CDL practice questions, unlimited mock tests, and a 100% pass guarantee.',
    type: 'website',
    url: 'https://www.realestatequestionbank.com/cdl-premium',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    images: [
      {
        url: '/images/cdl-happy-driver.webp',
        width: 1200,
        height: 630,
        alt: 'CDL Premium - Comprehensive CDL Test Preparation'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pass your CDL test. First try. - CDL Premium',
    description: 'Get premium access to comprehensive CDL practice questions, unlimited mock tests, and a 100% pass guarantee.',
    images: ['/images/cdl-happy-driver.webp'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.realestatequestionbank.com/cdl-premium',
  },
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Real Estate Question Bank",
  "url": "https://www.realestatequestionbank.com",
  "logo": "https://www.realestatequestionbank.com/images/logo.png",
  "description": "Real Estate Question Bank helps students pass their commercial and non-commercial driver real estate exams with state-specific practice questions.",
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
      "name": "CDL Premium",
      "item": "https://www.realestatequestionbank.com/cdl-premium"
    }
  ]
}

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Pass your CDL test. First try. - CDL Premium",
  "description": "Get premium access to comprehensive CDL practice questions, unlimited mock tests, detailed explanations, and a 100% pass guarantee.",
  "url": "https://www.realestatequestionbank.com/cdl-premium",
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
    "name": "CDL Premium Test Preparation Course",
    "description": "Complete preparation course for commercial driver CDL written tests with 2,500+ practice questions, mock exams, and endorsement study guides.",
    "provider": {
      "@type": "Organization",
      "name": "Real Estate Question Bank"
    },
    "courseCode": "CDL-PREMIUM-2026",
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "online",
      "courseWorkload": "PT3W"
    }
  },
  "inLanguage": "en-US"
}

export default function CdlPremiumPageRoute() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "CDL Premium - Pass your CDL test. First try.",
    "image": [
      "https://www.realestatequestionbank.com/images/cdl-happy-driver.webp"
    ],
    "description": "Comprehensive CDL test preparation with 2,500+ practice questions, unlimited mock tests, all endorsements, and 100% pass guarantee.",
    "brand": {
      "@type": "Brand",
      "name": "Real Estate Question Bank"
    },
    "offers": {
      "@type": "Offer",
      "name": "90-Day All-Access Premium CDL Pass",
      "price": "99",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": "https://www.realestatequestionbank.com/cdl-premium",
      "priceValidUntil": "2026-12-31"
    },
    "category": "Educational Course"
  }

  return (
    <>
      <Script
        id="cdl-product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <Script
        id="cdl-organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="cdl-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="cdl-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <AuthProvider>
        <CdlPremiumPage />
      </AuthProvider>
    </>
  )
}
