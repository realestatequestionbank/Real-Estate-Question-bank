import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut as firebaseSignOut,
  sendPasswordResetEmail,
  updateProfile,
  User
} from 'firebase/auth';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from './config';
import { COLLECTIONS } from '@/lib/constants';

const googleProvider = new GoogleAuthProvider();

// Premium expiration utilities
export const PREMIUM_DURATION_DAYS = 90;

export function isPremiumExpired(userData: UserData): boolean {
  if (!userData.isPremium || !userData.premiumExpiresAt) {
    return !userData.isPremium; // If no expiration date, consider expired if not premium
  }

  const expirationDate = new Date(userData.premiumExpiresAt);
  const now = new Date();
  return now > expirationDate;
}

export function isPremiumActive(userData: UserData): boolean {
  return userData.isPremium && !isPremiumExpired(userData);
}

export function getDaysUntilExpiration(userData: UserData): number | null {
  if (!userData.isPremium || !userData.premiumExpiresAt) {
    return null;
  }

  const expirationDate = new Date(userData.premiumExpiresAt);
  const now = new Date();
  const diffTime = expirationDate.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays > 0 ? diffDays : 0;
}

export function getPremiumStatus(userData: UserData): 'never_purchased' | 'active' | 'expired' {
  if (!userData.isPremium && !userData.premiumPurchaseDate) {
    return 'never_purchased';
  }
  
  if (userData.isPremium && !isPremiumExpired(userData)) {
    return 'active';
  }
  
  return 'expired';
}

export function calculatePremiumExpiration(purchaseDate?: Date): string {
  const startDate = purchaseDate || new Date();
  const expirationDate = new Date(startDate);
  expirationDate.setDate(expirationDate.getDate() + PREMIUM_DURATION_DAYS);
  return expirationDate.toISOString();
}











export interface UserData {
  uid: string;
  email: string | null;
  displayName: string | null;
  firstName?: string;
  lastName?: string;
  isPremium: boolean;
  premiumStatus?: 'never_purchased' | 'active' | 'expired';
  premiumState?: string; // Which state they bought premium for
  stripeCustomerId: string | null;
  premiumPurchaseDate: any;
  premiumExpiresAt: any; // ISO date string or Timestamp when premium expires
  planDuration?: number; // Duration of the purchased plan (e.g., 14 or 90)
  lastActiveState?: string; // Last state the user was practicing in
  createdAt: any;
  lastLoginAt: any;
}

export async function getUserData(userId: string): Promise<UserData | null> {
  try {
    const userRef = doc(db, COLLECTIONS.USERS, userId);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      return userSnap.data() as UserData;
    }
    return null;
  } catch (error) {
    console.error('Error getting user data:', error);
    return null;
  }
}

export async function createUserDocument(user: User, additionalData?: { firstName?: string; lastName?: string; lastActiveState?: string }): Promise<UserData | null> {
  if (!user) return null;

  const userRef = doc(db, COLLECTIONS.USERS, user.uid);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    const { email, displayName } = user;
    const authProvider = user.providerData[0]?.providerId === 'google.com' ? 'google' : 'email';

    try {
      await setDoc(userRef, {
        uid: user.uid,
        email,
        displayName: displayName || email?.split('@')[0] || '',
        firstName: additionalData?.firstName || '',
        lastName: additionalData?.lastName || '',
        authProvider,
        isPremium: false,
        premiumStatus: 'never_purchased',
        stripeCustomerId: null,
        premiumPurchaseDate: null,
        premiumExpiresAt: null,
        lastActiveState: additionalData?.lastActiveState || null,
        createdAt: serverTimestamp(),
        lastLoginAt: serverTimestamp()
      });
    } catch (error) {
      console.error('Error creating user document:', error);
      throw error;
    }
  } else {
    // Update last login
    try {
      await setDoc(userRef, {
        lastLoginAt: serverTimestamp()
      }, { merge: true });
    } catch (error) {
      console.error('Error updating last login:', error);
    }
  }

  return getUserData(user.uid);
}

// Sign in with email and password
export async function signInWithEmail(email: string, password: string) {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    const userData = await createUserDocument(user);
    return { user, userData, error: null };
  } catch (error: any) {
    return { user: null, userData: null, error: error.message };
  }
}

// Sign up with email and password
export async function signUpWithEmail(email: string, password: string, additionalData?: { displayName?: string; firstName?: string; lastName?: string; lastActiveState?: string }) {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);

    // Update the user's display name if provided
    if (additionalData?.displayName && user) {
      await updateProfile(user, {
        displayName: additionalData.displayName
      });
    }

    const userData = await createUserDocument(user, additionalData);
    return { user, userData, error: null };
  } catch (error: any) {
    return { user: null, userData: null, error: error.message };
  }
}

// Sign in with Google
export async function signInWithGoogle(initialState?: string) {
  try {
    const { user } = await signInWithPopup(auth, googleProvider);
    const userData = await createUserDocument(user, { lastActiveState: initialState });
    return { user, userData, error: null };
  } catch (error: any) {
    return { user: null, userData: null, error: error.message };
  }
}

// Sign out
export async function signOut() {
  try {
    await firebaseSignOut(auth);
    return { error: null };
  } catch (error: any) {
    return { error: error.message };
  }
}

// Reset password
export async function resetPassword(email: string) {
  try {
    await sendPasswordResetEmail(auth, email);
    return { error: null };
  } catch (error: any) {
    return { error: error.message };
  }
}