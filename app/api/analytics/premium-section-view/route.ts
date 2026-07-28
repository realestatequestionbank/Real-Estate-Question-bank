import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { state, timestamp, userAgent, referrer } = body

    // Log to console for now (you can replace with database storage)
    console.log('Analytics - Premium Section View:', {
      state,
      timestamp,
      userAgent: userAgent?.substring(0, 100), // Truncate for readability
      referrer,
      ip: request.ip || 'unknown'
    })

    // In production, you'd store this in your database:
    // await db.analytics.create({
    //   data: {
    //     event: 'premium_section_view',
    //     state,
    //     timestamp: new Date(timestamp),
    //     userAgent,
    //     referrer,
    //     ip: request.ip
    //   }
    // })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Analytics tracking error:', error)
    return NextResponse.json({ error: 'Failed to track analytics' }, { status: 500 })
  }
}