import { initializeApp, getApps, cert, App } from 'firebase-admin/app';
import { getFirestore, Firestore } from 'firebase-admin/firestore';
import { COLLECTIONS } from './constants';

// Lazy initialization function
function initializeFirebase(): Firestore {
  if (getApps().length === 0) {
    if (!process.env.FIREBASE_PRIVATE_KEY) {
      console.error('Firebase admin initialization failed. Environment variables required: FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY');
      throw new Error('Firebase environment variables missing');
    }

    // Properly format the private key - handle multiple formats
    let privateKey = process.env.FIREBASE_PRIVATE_KEY!;

    // Remove any quotes around the key
    privateKey = privateKey.replace(/^["']|["']$/g, '');

    // Handle escaped newlines
    if (privateKey.includes('\\n')) {
      privateKey = privateKey.replace(/\\n/g, '\n');
    }

    // Ensure the key has proper formatting
    if (!privateKey.startsWith('-----BEGIN PRIVATE KEY-----')) {
      console.error('❌ Firebase private key does not start with proper header');
      console.log('Key preview (first 50 chars):', privateKey.substring(0, 50));
      throw new Error('Invalid Firebase private key format');
    }

    const adminConfig = {
      credential: cert({
        projectId: process.env.FIREBASE_PROJECT_ID!,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL!,
        privateKey: privateKey,
      }),
      projectId: process.env.FIREBASE_PROJECT_ID!,
    };

    initializeApp(adminConfig);
  }

  return getFirestore();
}

export type PaymentData = {
  sessionId: string;
  stripeCustomerId: string;
  amountTotal: number;
  currency: string;
  paymentStatus: string;
  duration?: number; // Add duration to payment data
};

interface PurchaseData {
  userId: string;
  stripeSessionId: string;
  stripeCustomerId: string;
  amount: number;
  currency: string;
  status: string;
  productType: string;
}

export async function grantPremiumAccess(userId: string, paymentData: PaymentData & { state?: string }): Promise<boolean> {
  try {
    console.log('🔄 Initializing Firebase for premium access grant...');
    const db = initializeFirebase();
    console.log('✅ Firebase initialized successfully');

    const userRef = db.collection(COLLECTIONS.USERS).doc(userId);
    console.log(`📝 Updating user document: ${userId} in collection: ${COLLECTIONS.USERS}`);

    const userDoc = await userRef.get();
    const existingData = userDoc.exists ? userDoc.data() : null;

    const state = paymentData.state || 'general';
    const duration = paymentData.duration || 90;
    console.log(`Granting premium access to user ${userId} for state ${state} with duration ${duration} days`);

    // Default duration is 90 days if not provided
    const daysToAdd = duration || 90;
    const purchaseDate = new Date();
    let expirationDate = new Date();

    if (existingData?.premiumExpiresAt) {
      const currentExpiry = new Date(existingData.premiumExpiresAt);
      if (currentExpiry > purchaseDate) {
        // user is still premium, add days to existing expiration
        expirationDate = new Date(currentExpiry.getTime() + (daysToAdd * 24 * 60 * 60 * 1000));
      } else {
        // user was premium but it expired, add days from now
        expirationDate = new Date(purchaseDate.getTime() + (daysToAdd * 24 * 60 * 60 * 1000));
      }
    } else {
      // brand new premium user, add days from now
      expirationDate = new Date(purchaseDate.getTime() + (daysToAdd * 24 * 60 * 60 * 1000));
    }

    const updateData = {
      isPremium: true,
      premiumStatus: 'active',
      premiumPurchaseDate: purchaseDate.toISOString(), // Keep track of latest purchase date
      premiumExpiresAt: expirationDate.toISOString(),
      planDuration: daysToAdd, // Store the duration of the purchased plan
      premiumState: 'all', // Grant access to all states
      stripeCustomerId: paymentData.stripeCustomerId,
      stripeSessionId: paymentData.sessionId,
      updatedAt: purchaseDate.toISOString()
    };

    console.log('📋 Update data:', updateData);

    // Update user with premium status
    await userRef.set(updateData, { merge: true });

    console.log(`✅ Premium access granted to user: ${userId} for state: ${state}`);

    // Verify the update worked by reading it back
    const updatedDoc = await userRef.get();
    if (updatedDoc.exists) {
      const userData = updatedDoc.data();
      console.log('🔍 Verification - User data after update:', {
        isPremium: userData?.isPremium,
        premiumState: userData?.premiumState,
        premiumPurchaseDate: userData?.premiumPurchaseDate,
        premiumExpiresAt: userData?.premiumExpiresAt,
        updatedAt: userData?.updatedAt
      });
    } else {
      console.error('❌ User document does not exist after update!');
    }

    return true;
  } catch (error) {
    console.error('💥 Error granting premium access:', error);
    console.error('Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      userId,
      paymentData
    });
    throw error;
  }
}

export async function grantCdlPremiumAccess(userId: string, paymentData: PaymentData & { state?: string }): Promise<boolean> {
  try {
    console.log('🔄 Initializing Firebase for CDL premium access grant...');
    const db = initializeFirebase();
    console.log('✅ Firebase initialized successfully');

    const userRef = db.collection(COLLECTIONS.USERS).doc(userId);
    console.log(`📝 Updating user document: ${userId} in collection: ${COLLECTIONS.USERS} for CDL`);

    const userDoc = await userRef.get();
    const existingData = userDoc.exists ? userDoc.data() : null;

    const state = paymentData.state || 'california';
    const duration = paymentData.duration || 90;
    console.log(`Granting CDL premium access to user ${userId} for state ${state} with duration ${duration} days`);

    const daysToAdd = duration || 90;
    const purchaseDate = new Date();
    let expirationDate = new Date();

    if (existingData?.cdlPremiumExpiresAt) {
      const currentExpiry = new Date(existingData.cdlPremiumExpiresAt);
      if (currentExpiry > purchaseDate) {
        expirationDate = new Date(currentExpiry.getTime() + (daysToAdd * 24 * 60 * 60 * 1000));
      } else {
        expirationDate = new Date(purchaseDate.getTime() + (daysToAdd * 24 * 60 * 60 * 1000));
      }
    } else {
      expirationDate = new Date(purchaseDate.getTime() + (daysToAdd * 24 * 60 * 60 * 1000));
    }

    const updateData = {
      isCdlPremium: true,
      cdlPremiumStatus: 'active',
      cdlPremiumPurchaseDate: purchaseDate.toISOString(),
      cdlPremiumExpiresAt: expirationDate.toISOString(),
      cdlPlanDuration: daysToAdd,
      cdlPremiumState: state,
      stripeCustomerId: paymentData.stripeCustomerId,
      stripeSessionId: paymentData.sessionId,
      updatedAt: purchaseDate.toISOString()
    };

    console.log('📋 CDL Update data:', updateData);

    await userRef.set(updateData, { merge: true });
    console.log(`✅ CDL Premium access granted to user: ${userId} for state: ${state}`);

    return true;
  } catch (error) {
    console.error('💥 Error granting CDL premium access:', error);
    throw error;
  }
}

export async function createPurchaseRecord(purchaseData: PurchaseData): Promise<string> {
  try {
    const db = initializeFirebase();
    const purchaseRef = db.collection(COLLECTIONS.PURCHASES).doc();

    await purchaseRef.set({
      ...purchaseData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });

    console.log(`Purchase record created: ${purchaseRef.id}`);
    return purchaseRef.id;
  } catch (error) {
    console.error('Error creating purchase record:', error);
    throw error;
  }
}

export async function checkPremiumStatus(userId: string): Promise<boolean> {
  try {
    const db = initializeFirebase();
    const userRef = db.collection(COLLECTIONS.USERS).doc(userId);
    const userDoc = await userRef.get();

    if (userDoc.exists) {
      const userData = userDoc.data();
      return userData?.isPremium || false;
    }

    return false;
  } catch (error) {
    console.error('Error checking premium status:', error);
    return false;
  }
}

export async function getUserPurchases(userId: string): Promise<any[]> {
  try {
    const db = initializeFirebase();
    const purchasesRef = db.collection(COLLECTIONS.PURCHASES).where('userId', '==', userId);
    const snapshot = await purchasesRef.get();

    const purchases: any[] = [];
    snapshot.forEach(doc => {
      purchases.push({ id: doc.id, ...doc.data() });
    });

    return purchases;
  } catch (error) {
    console.error('Error getting user purchases:', error);
    return [];
  }
}