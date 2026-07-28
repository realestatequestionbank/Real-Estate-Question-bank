import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get('session_id');

    if (!sessionId) {
      return NextResponse.json({ error: 'Missing session_id parameter' }, { status: 400 });
    }

    const stripeKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeKey) {
      return NextResponse.json({ error: 'Stripe configuration error' }, { status: 500 });
    }

    const stripe = new Stripe(stripeKey, {
      apiVersion: '2024-06-20',
    });

    const session = await stripe.checkout.sessions.retrieve(sessionId);

    // Verify session state
    const isPaid = session.payment_status === 'paid';
    const product = session.metadata?.product;
    const state = session.metadata?.state;

    return NextResponse.json({
      paid: isPaid,
      product: product,
      state: state,
      email: session.customer_details?.email
    });

  } catch (error: any) {
    console.error('Error verifying Stripe session:', error);
    return NextResponse.json({ error: 'Failed to verify session', details: error.message }, { status: 500 });
  }
}
