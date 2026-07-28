import { doc, setDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase/config'
import { COLLECTIONS } from '@/lib/constants'
import { UserData, isPremiumExpired } from '@/lib/firebase/auth'

export async function updatePremiumStatusIfExpired(userData: UserData): Promise<UserData> {
  if (!userData.isPremium || !userData.premiumExpiresAt) {
    return userData
  }

  const isExpired = isPremiumExpired(userData)
  
  // If premium has expired but status hasn't been updated
  if (isExpired && userData.premiumStatus !== 'expired') {
    try {
      const userRef = doc(db, COLLECTIONS.USERS, userData.uid)
      await setDoc(userRef, {
        premiumStatus: 'expired'
      }, { merge: true })

      // Return updated userData - keep isPremium true since they purchased premium
      return {
        ...userData,
        premiumStatus: 'expired' as const
      }
    } catch (error) {
      console.error('Error updating premium status:', error)
    }
  }

  return userData
}