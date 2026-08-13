'use client'

import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib/firebase/config';
import {
  UserData,
  getUserData,
  signInWithEmail,
  signUpWithEmail,
  signInWithGoogle,
  signOut as firebaseSignOut,
  resetPassword,
  isPremiumActive,
  isPremiumExpired,
  getDaysUntilExpiration,
  getPremiumStatus
} from '@/lib/firebase/auth';
import { updatePremiumStatusIfExpired } from '@/lib/services/premium-status-service';

interface AuthContextType {
  user: User | null;
  userData: UserData | null;
  loading: boolean;
  isPremium: boolean;
  isPremiumExpired: boolean;
  premiumStatus: 'never_purchased' | 'active' | 'expired';
  daysUntilExpiration: number | null;

  signInWithEmail: (email: string, password: string) => Promise<{ user: User | null; userData: UserData | null; error: string | null }>;
  signUpWithEmail: (email: string, password: string, additionalData?: { displayName?: string; firstName?: string; lastName?: string; lastActiveState?: string }) => Promise<{ user: User | null; userData: UserData | null; error: string | null }>;
  signInWithGoogle: (initialState?: string) => Promise<{ user: User | null; userData: UserData | null; error: string | null }>;
  signOut: () => Promise<void>;
  refreshUserData: () => Promise<void>;
  resetPassword: (email: string) => Promise<{ error: string | null }>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  const isPremium = userData ? isPremiumActive(userData) : false;
  const premiumExpired = userData ? isPremiumExpired(userData) : false;
  const premiumStatus = userData ? getPremiumStatus(userData) : 'never_purchased';
  const daysUntilExpiration = userData ? getDaysUntilExpiration(userData) : null;

  const refreshUserData = async () => {
    if (user) {
      const data = await getUserData(user.uid);
      if (data) {
        // Check and update premium status if expired
        const updatedData = await updatePremiumStatusIfExpired(data);
        setUserData(updatedData);
      }
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);

      if (user) {
        const data = await getUserData(user.uid);
        if (data) {
          // Check and update premium status if expired
          const updatedData = await updatePremiumStatusIfExpired(data);
          setUserData(updatedData);
        }
      } else {
        setUserData(null);
      }

      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const handleSignInWithEmail = async (email: string, password: string) => {
    const result = await signInWithEmail(email, password);
    if (result.userData) {
      // Allow login for all users (including expired premium)
      // Premium checks will happen at the page level
      setUserData(result.userData);
    }
    return result;
  };

  const handleSignUpWithEmail = async (email: string, password: string, additionalData?: { displayName?: string; firstName?: string; lastName?: string; lastActiveState?: string }) => {
    const result = await signUpWithEmail(email, password, additionalData);
    if (result.userData) {
      setUserData(result.userData);
    }
    return result;
  };

  const handleSignInWithGoogle = async (initialState?: string) => {
    const result = await signInWithGoogle(initialState);
    if (result.userData) {
      // Allow login for all users (including expired premium)
      // Premium checks will happen at the page level
      setUserData(result.userData);
    }
    return result;
  };

  const handleSignOut = async () => {
    await firebaseSignOut();
    setUser(null);
    setUserData(null);
  };

  const handleResetPassword = async (email: string) => {
    return await resetPassword(email);
  };

  const value = {
    user,
    userData,
    loading,
    isPremium,
    isPremiumExpired: premiumExpired,
    premiumStatus,
    daysUntilExpiration,
    signInWithEmail: handleSignInWithEmail,
    signUpWithEmail: handleSignUpWithEmail,
    signInWithGoogle: handleSignInWithGoogle,
    signOut: handleSignOut,
    refreshUserData,
    resetPassword: handleResetPassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}