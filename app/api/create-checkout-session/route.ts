import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { PRICING, getEffectivePricing, STATES } from '@/lib/constants';

export async function POST(request: NextRequest) {
  try {
    const stripeKey = process.env.STRIPE_SECRET_KEY;

    if (!stripeKey) {
      console.error('STRIPE_SECRET_KEY environment variable is not set');
      return NextResponse.json(
        { error: 'Stripe configuration error' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { userId, state, duration = 36500, product = 'real-estate_premium' } = body;

    // Validate required fields
    if (!userId && product !== 'cheat_sheet') {
      return NextResponse.json(
        { error: 'Missing required field: userId' },
        { status: 400 }
      );
    }

    // Get the origin from the request headers for dynamic URLs
    const origin = request.headers.get('origin') || 'http://localhost:3000';

    console.log('Creating Stripe checkout session with:', { userId, state, origin, duration, product });

    // Determine which price ID to use based on duration and product
    const getPriceId = (duration: number, product: string) => {
      if (product === 'cdl_premium') {
        return process.env.STRIPE_CDL_PRICE_ID || 'price_1TiPirAB2lLx6zTOAf2ljhdp'; // CDL 90-day $99 plan
      }

      const pricing = getEffectivePricing(); // Get dynamic pricing based on active sale

      if (duration === 7) {
        return pricing.PLANS.SEVEN_DAY.stripePriceId;
      } else if (duration === 30) {
        return pricing.PLANS.THIRTY_DAY.stripePriceId;
      } else if (duration === 36500 || duration === 90) {
        return pricing.PLANS.LIFETIME.stripePriceId;
      } else {
        return pricing.PLANS.THIRTY_DAY.stripePriceId; // Default to 30-day plan
      }
    };

    const priceId = product === 'cheat_sheet' ? '' : getPriceId(duration, product);

    // Initialize Stripe
    const stripe = new Stripe(stripeKey, {
      apiVersion: '2024-06-20',
    });

    const stateParam = typeof state === 'string' ? state.toLowerCase() : '';
    const isValidState = stateParam && (stateParam in STATES);

    // Create Stripe checkout session params
    const sessionParams: Stripe.Checkout.SessionCreateParams = {
      payment_method_types: ['card'],
      mode: 'payment',
      metadata: {
        userId: userId || 'anonymous',
        product: product,
        state: isValidState ? stateParam : 'general',
        duration: duration.toString()
      },
      customer_creation: 'always',
      invoice_creation: {
        enabled: true,
      },
    };

    if (product === 'cheat_sheet') {
      const stateName = isValidState ? (STATES as any)[stateParam].name : 'State';
      sessionParams.line_items = [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `${stateName} Real Estate Exam Cheat Sheet (100 Questions)`,
              description: 'Instant PDF study guide. 100 most-missed questions and answers.',
            },
            unit_amount: 999, // $9.99
          },
          quantity: 1,
        },
      ];
      sessionParams.success_url = `${origin}/success/cheat-sheet?session_id={CHECKOUT_SESSION_ID}&state=${stateParam}`;
      sessionParams.cancel_url = isValidState
        ? `${origin}/${stateParam}-real-estate-practice-test/cheat-sheet?canceled=true`
        : `${origin}/?canceled=true`;
    } else {
      sessionParams.line_items = [
        {
          price: priceId,
          quantity: 1,
        },
      ];
      sessionParams.success_url = `${origin}/success?session_id={CHECKOUT_SESSION_ID}${isValidState ? `&state=${stateParam}` : ''}`;
      sessionParams.cancel_url = isValidState
        ? `${origin}/state/${stateParam}/free?canceled=true`
        : `${origin}/?canceled=true`;
    }

    const session = await stripe.checkout.sessions.create(sessionParams);

    console.log('Stripe session created successfully:', session.id);

    return NextResponse.json({
      sessionId: session.id,
      url: session.url
    });

  } catch (error: any) {
    console.error('Stripe checkout session creation failed:', error.message, error);

    return NextResponse.json(
      { error: 'Failed to create checkout session', details: error.message },
      { status: 500 }
    );
  }
}