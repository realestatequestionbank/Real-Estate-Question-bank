import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { state, timestamp, userId } = body

    // Log to console for now (you can replace with database storage)
    console.log('Analytics - Pricing Modal Abandon:', {
      state,
      timestamp,
      userId,
      ip: request.ip || 'unknown'
    })

    // In production, you'd store this in your database:
    // await db.analytics.create({
    //   data: {
    //     event: 'pricing_modal_abandon',
    //     state,
    //     timestamp: new Date(timestamp),
    //     userId,
    //     ip: request.ip
    //   }
    // })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Analytics tracking error:', error)
    return NextResponse.json({ error: 'Failed to track analytics' }, { status: 500 })
  }
}