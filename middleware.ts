import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Define protected routes that require premium access
  const premiumRoutes = [
    '/state/[^/]+/premium',
    '/state/[^/]+/practice/premium',
    '/state/[^/]+/mock-exam',
    '/dashboard'
  ]
  
  // Define routes that require authentication (any user)
  const authRoutes = [
    '/dashboard',
    '/profile'
  ]

  // Check if current path matches premium route pattern
  const isPremiumRoute = premiumRoutes.some(pattern => {
    const regex = new RegExp(`^${pattern.replace('[^/]+', '[^/]+')}$`)
    return regex.test(pathname)
  })

  // Check if current path matches auth route pattern  
  const isAuthRoute = authRoutes.some(pattern => {
    const regex = new RegExp(`^${pattern.replace('[^/]+', '[^/]+')}$`)
    return regex.test(pathname)
  })

  // For now, we'll handle client-side redirects in the components
  // since Next.js middleware doesn't have access to Firebase auth state
  // This middleware can be enhanced later with JWT tokens if needed

  // Allow all requests to continue (protection handled client-side)
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
  ],
}