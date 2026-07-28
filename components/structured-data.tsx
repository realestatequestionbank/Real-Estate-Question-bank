'use client'

import Script from 'next/script'
import { StateKey, STATES } from '@/lib/constants'

interface StructuredDataProps {
  type: 'homepage' | 'state-page' | 'practice-page'
  state?: StateKey
  data?: any
}

export function StructuredData({ type, state, data }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseOrganization = {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "Real Estate Question Bank",
      "description": "The #1 Real Estate practice platform helping students pass their real estate exam on the first try",
      "url": "https://www.realestatequestionbank.com",
      "logo": "https://www.realestatequestionbank.com/images/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "url": "https://www.realestatequestionbank.com/contact"
      },
      "sameAs": [
        "https://twitter.com/real-estatequestionbank",
        "https://facebook.com/real-estatequestionbank"
      ]
    }

    switch (type) {
      case 'homepage':
        return [
          baseOrganization,
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Real Estate Question Bank",
            "description": "Pass your Real Estate Exam with our comprehensive practice questions for all 50 states",
            "url": "https://www.realestatequestionbank.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.realestatequestionbank.com/state/{search_term_string}/free",
              "query-input": "required name=search_term_string"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Real Estate real estate exam Practice Course",
            "description": "Comprehensive Real Estate Exam preparation with state-specific questions",
            "provider": {
              "@type": "Organization",
              "name": "Real Estate Question Bank"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Real Estate Question Bank",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.realestatequestionbank.com/images/logo.png"
              }
            },
            "author": {
              "@type": "Person",
              "name": "Robert Miller",
              "jobTitle": "Lead Curriculum Specialist & Former Real Estate Examiner",
              "sameAs": "https://www.realestatequestionbank.com/editorial-standards-and-accuracy"
            },
            "educationalLevel": "Beginner",
            "courseMode": "online",
            "timeRequired": "P1W",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "availability": "InStock"
            }
          }
        ]

      case 'state-page':
        if (!state) return []
        
        const stateInfo = STATES[state]
        const faqSchema = data?.faq ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": data.faq.map((faq: any) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        } : null

        return [
          {
            "@context": "https://schema.org",
            "@type": "Course",
            "name": `${stateInfo.name} Real Estate real estate exam Practice`,
            "description": `Comprehensive ${stateInfo.name} Real Estate Exam preparation with official practice questions`,
            "provider": {
              "@type": "Organization",
              "name": "Real Estate Question Bank"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Real Estate Question Bank",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.realestatequestionbank.com/images/logo.png"
              }
            },
            "author": {
              "@type": "Person",
              "name": "Robert Miller",
              "jobTitle": "Lead Curriculum Specialist & Former Real Estate Examiner",
              "sameAs": "https://www.realestatequestionbank.com/editorial-standards-and-accuracy"
            },
            "educationalLevel": "Beginner",
            "courseMode": "online",
            "timeRequired": "P1W",
            "locationCreated": {
              "@type": "State",
              "name": stateInfo.name
            },
            "offers": [
              {
                "@type": "Offer",
                "name": "Free Practice",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "InStock"
              },
              {
                "@type": "Offer",
                "name": "Premium Access", 
                "price": "34.99",
                "priceCurrency": "USD",
                "availability": "InStock"
              }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": `${stateInfo.name} Real Estate real estate exam Practice`,
            "description": `Pass your ${stateInfo.name} Real Estate Exam first try with our comprehensive practice questions`,
            "url": `https://www.realestatequestionbank.com/state/${state}/free`,
            "breadcrumb": {
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
                  "name": `${stateInfo.name} Practice Test`,
                  "item": `https://www.realestatequestionbank.com/state/${state}/free`
                }
              ]
            }
          },
          ...(faqSchema ? [faqSchema] : [])
        ]

      case 'practice-page':
        if (!state) return []
        
        const practiceStateInfo = STATES[state]
        return [
          {
            "@context": "https://schema.org",
            "@type": "Quiz",
            "name": `${practiceStateInfo.name} Real Estate Practice Test`,
            "description": `Interactive ${practiceStateInfo.name} Real Estate Exam practice with immediate feedback`,
            "educationalLevel": "Beginner",
            "timeRequired": "PT30M",
            "interactivityType": "active",
            "learningResourceType": "assessment",
            "about": {
              "@type": "Thing",
              "name": `${practiceStateInfo.name} Real Estate Laws`
            }
          }
        ]

      default:
        return []
    }
  }

  const structuredData = getStructuredData()
  
  if (!structuredData || structuredData.length === 0) {
    return null
  }

  return (
    <>
      {structuredData.map((data, index) => (
        <Script
          key={index}
          id={`structured-data-${type}-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(data)
          }}
        />
      ))}
    </>
  )
}