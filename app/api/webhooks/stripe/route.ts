import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { headers } from 'next/headers';
import { grantPremiumAccess, grantCdlPremiumAccess, createPurchaseRecord } from '@/lib/firestore-service';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const headersList = headers();
    const signature = headersList.get('stripe-signature');

    if (!signature) {
      console.error('Missing Stripe signature');
      return NextResponse.json(
        { error: 'Missing signature' },
        { status: 400 }
      );
    }

    if (!webhookSecret) {
      console.error('Missing webhook secret');
      return NextResponse.json(
        { error: 'Configuration error' },
        { status: 500 }
      );
    }

    // Verify webhook signature
    let event;
    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err: any) {
      console.error('Webhook signature verification failed:', err?.message || err);
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 400 }
      );
    }

    // Handle the event
    switch (event.type) {
      case 'checkout.session.completed':
        await handleCheckoutCompleted(event.data.object);
        break;

      case 'payment_intent.succeeded':
        console.log('Payment succeeded:', event.data.object.id);
        break;

      case 'payment_intent.payment_failed':
        console.log('Payment failed:', event.data.object.id);
        break;

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });

  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    );
  }
}

async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  try {
    console.log('🔄 Processing checkout.session.completed:', session.id);
    console.log('📋 Session metadata:', session.metadata);

    // Extract user ID from metadata
    const userId = session.metadata?.userId;
    if (!userId) {
      console.error('❌ No userId found in session metadata:', session.id);
      console.log('Available metadata keys:', Object.keys(session.metadata || {}));
      return;
    }

    console.log('👤 Processing payment for userId:', userId);

    // Get full session details with line items
    const fullSession = await stripe.checkout.sessions.retrieve(session.id, {
      expand: ['line_items', 'customer']
    });

    // Extract payment details
    const customerId = typeof fullSession.customer === 'string'
      ? fullSession.customer
      : (fullSession.customer && 'id' in fullSession.customer ? fullSession.customer.id : '') ||
      (typeof session.customer === 'string' ? session.customer : '');
    const amount = fullSession.amount_total || 0;
    const currency = fullSession.currency || 'usd';
    const paymentStatus = fullSession.payment_status;

    console.log('💰 Payment details:', { customerId, amount, currency, paymentStatus });

    if (paymentStatus !== 'paid') {
      console.log(`⏳ Session not paid yet: ${session.id}, status: ${paymentStatus}`);
      return;
    }

    console.log('✅ Payment confirmed, granting premium access...');

    const product = session.metadata?.product || 'real-estate_premium';

    // Grant premium access based on product type
    let premiumResult;
    if (product === 'cdl_premium') {
      premiumResult = await grantCdlPremiumAccess(userId, {
        stripeCustomerId: customerId,
        sessionId: session.id,
        amountTotal: amount,
        currency: currency,
        paymentStatus: paymentStatus,
        state: session.metadata?.state || 'california',
        duration: session.metadata?.duration ? parseInt(session.metadata.duration) : undefined
      });
    } else {
      premiumResult = await grantPremiumAccess(userId, {
        stripeCustomerId: customerId,
        sessionId: session.id,
        amountTotal: amount,
        currency: currency,
        paymentStatus: paymentStatus,
        state: session.metadata?.state || 'general',
        duration: session.metadata?.duration ? parseInt(session.metadata.duration) : undefined
      });
    }

    console.log(`🎉 Premium access granted for product ${product}:`, premiumResult);

    // Create purchase record
    const purchaseId = await createPurchaseRecord({
      userId,
      stripeSessionId: session.id,
      stripeCustomerId: customerId,
      amount,
      currency,
      status: 'completed',
      productType: product === 'cdl_premium' ? 'cdl_premium_access' : 'premium_access'
    });

    console.log('📄 Purchase record created:', purchaseId);
    console.log(`🚀 Successfully processed payment for user: ${userId}`);

  } catch (error) {
    console.error('💥 Error processing checkout completion:', error);
    console.error('Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    });
    throw error; // Re-throw to trigger webhook retry
  }
}