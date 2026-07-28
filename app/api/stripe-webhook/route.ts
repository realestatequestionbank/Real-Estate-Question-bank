import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { getAdminDb } from '@/lib/firebase/admin'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
})

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(request: NextRequest) {
  const body = await request.text()
  const signature = request.headers.get('stripe-signature')!

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, signature, endpointSecret)
  } catch (err: any) {
    console.error('❌ Webhook signature verification failed:', err.message)
    return NextResponse.json({ error: 'Webhook signature verification failed' }, { status: 400 })
  }

  console.log('🎉 Received Stripe event:', event.type)

  try {
    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object as Stripe.Checkout.Session
        console.log('💳 Payment successful for session:', session.id)

        // Extract user data from session metadata
        const userId = session.metadata?.userId
        const duration = parseInt(session.metadata?.duration || '36500')
        const state = session.metadata?.state || 'all'
        const product = session.metadata?.product || 'real-estate_premium'

        if (userId) {
          const db = getAdminDb()
          const userRef = db.collection('users').doc(userId)

          // Calculate expiration date
          const now = new Date()
          const expirationDate = new Date(now.getTime() + (duration * 24 * 60 * 60 * 1000))

          if (product === 'cdl_premium') {
            await userRef.set({
              isCdlPremium: true,
              cdlPremiumExpiresAt: expirationDate.toISOString(),
              cdlPlanDuration: duration,
              cdlPremiumStatus: 'active',
              cdlPremiumState: state,
              stripeCustomerId: session.customer,
              cdlPremiumPurchaseDate: now.toISOString(),
              stripeSessionId: session.id
            }, { merge: true })
          } else {
            await userRef.set({
              isPremium: true,
              premiumExpiresAt: expirationDate.toISOString(),
              planDuration: duration,
              premiumStatus: 'active',
              premiumState: state,
              stripeCustomerId: session.customer,
              premiumPurchaseDate: now.toISOString(),
              stripeSessionId: session.id
            }, { merge: true })
          }

          console.log(`✅ User premium status updated for product ${product}:`, {
            userId,
            duration,
            expiresAt: expirationDate.toISOString()
          })
        } else {
          console.error('❌ No userId found in session metadata')
        }
        break

      case 'invoice.payment_failed':
        const failedInvoice = event.data.object as Stripe.Invoice
        console.log('❌ Payment failed for customer:', failedInvoice.customer)
        break

      default:
        console.log('ℹ️ Unhandled event type:', event.type)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('❌ Error processing webhook:', error)
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    )
  }
}