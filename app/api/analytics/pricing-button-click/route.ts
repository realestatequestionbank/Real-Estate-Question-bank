import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { state, timestamp, userId, userAgent } = body

    // Log to console for now (you can replace with database storage)
    console.log('Analytics - Pricing Button Click:', {
      state,
      timestamp,
      userId,
      userAgent: userAgent?.substring(0, 100), // Truncate for readability
      ip: request.ip || 'unknown'
    })

    // In production, you'd store this in your database:
    // await db.analytics.create({
    //   data: {
    //     event: 'pricing_button_click',
    //     state,
    //     timestamp: new Date(timestamp),
    //     userId,
    //     userAgent,
    //     ip: request.ip
    //   }
    // })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Analytics tracking error:', error)
    return NextResponse.json({ error: 'Failed to track analytics' }, { status: 500 })
  }
}