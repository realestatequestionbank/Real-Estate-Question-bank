import './globals.css'
import Script from 'next/script'
import { AuthProvider } from '@/contexts/auth-context'

export const metadata = {
  metadataBase: new URL('https://www.realestatequestionbank.com'),
  title: 'Real Estate Question Bank | Pass Your Real Estate Exam Guaranteed',
  description: 'Pass your Real Estate licensing exam on the first try! Free practice tests with 2026 updated questions, instant scoring, and detailed explanations for all 50 states.',
  keywords: 'Real Estate Exam, real estate practice test, real estate license test, real estate exam prep, real estate school, study guide, national real estate exam',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  robots: 'index, follow',
  authors: [{ name: 'Real Estate Question Bank Team' }],
  creator: 'Real Estate Question Bank',
  publisher: 'Real Estate Question Bank',
  openGraph: {
    title: 'Real Estate Question Bank | Pass Your Real Estate Exam Guaranteed',
    description: 'The #1 Real Estate practice platform. Pass your real estate exam on the first try with our state-specific questions.',
    url: 'https://www.realestatequestionbank.com',
    siteName: 'Real Estate Question Bank',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/cover-image.png',
        width: 1200,
        height: 630,
        alt: 'Real Estate Question Bank - Pass Your Real Estate Test',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Real Estate Question Bank | Pass Your Real Estate Exam Guaranteed',
    description: 'Practice with real Real Estate questions and pass your test guaranteed.',
    images: ['/images/cover-image.png'],
    creator: '@real-estatequestionbank',
    site: '@real-estatequestionbank',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/favicon-512.png', type: 'image/png', sizes: '512x512' },
    ],
  },
  verification: {
    google: 'rACfOhOqlXHTrRkvheLiCdypYnEm80oZHdvQ15EL-II',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Q17RYL8REG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q17RYL8REG');
          `}
        </Script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Outfit:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <style dangerouslySetInnerHTML={{
          __html: `
            .logo-font {
              font-family: 'Outfit', sans-serif;
              letter-spacing: -0.03em;
            }
            .hero-title {
              font-size: 2rem;
              font-weight: 800;
              line-height: 1.3;
              color: black;
              margin-bottom: 1.5rem;
            }
            @media (min-width: 768px) {
              .hero-title { font-size: 2.5rem; margin-bottom: 2rem; line-height: 1.15; }
            }
            @media (min-width: 1024px) {
              .hero-title { font-size: 3rem; line-height: 1.2; }
            }
            @media (min-width: 1280px) {
              .hero-title { font-size: 3.5rem; line-height: 1.2; }
            }
          `
        }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Real Estate Question Bank",
              "url": "https://www.realestatequestionbank.com"
            })
          }}
        />
        {/* Define gtag inline so it's available before any component fires */}
        {process.env.NODE_ENV === 'production' && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-5M901FY2J7');
                gtag('config', 'AW-17004995156');
              `
            }}
          />
        )}
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        {/* Load gtag external script lazily */}
        {process.env.NODE_ENV === 'production' && (
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=AW-17004995156"
            strategy="lazyOnload"
          />
        )}

        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}