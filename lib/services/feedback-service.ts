import { doc, setDoc, collection, getDocs, query, orderBy, where } from 'firebase/firestore'
import { db } from '@/lib/firebase/config'
import { COLLECTIONS } from '@/lib/constants'

export interface FeedbackData {
  id: string
  userId: string
  userEmail?: string
  rating: number
  whatLiked: string[]
  improvements: string
  testStatus: 'upcoming' | 'passed' | 'failed' | 'not_scheduled'
  testDate?: string
  additionalComments: string
  wouldRecommend: boolean
  createdAt: string
  updatedAt: string
}

export async function saveFeedback(feedbackData: Omit<FeedbackData, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
  try {
    // Generate a unique ID for the feedback
    const feedbackId = `${feedbackData.userId}_${Date.now()}`
    const feedbackRef = doc(db, COLLECTIONS.FEEDBACK, feedbackId)
    
    const timestamp = new Date().toISOString()
    const fullFeedbackData: FeedbackData = {
      ...feedbackData,
      id: feedbackId,
      createdAt: timestamp,
      updatedAt: timestamp
    }

    await setDoc(feedbackRef, fullFeedbackData)
    
    console.log('✅ Feedback saved successfully:', {
      feedbackId,
      userId: feedbackData.userId,
      rating: feedbackData.rating,
      testStatus: feedbackData.testStatus
    })

    return feedbackId
  } catch (error) {
    console.error('❌ Failed to save feedback:', error)
    throw error
  }
}

export async function getAllFeedback(): Promise<FeedbackData[]> {
  try {
    const feedbackQuery = query(
      collection(db, COLLECTIONS.FEEDBACK),
      orderBy('createdAt', 'desc')
    )
    
    const snapshot = await getDocs(feedbackQuery)
    const feedbackList: FeedbackData[] = []
    
    snapshot.forEach((doc) => {
      feedbackList.push(doc.data() as FeedbackData)
    })
    
    console.log('📥 Retrieved feedback:', {
      count: feedbackList.length
    })
    
    return feedbackList
  } catch (error) {
    console.error('❌ Failed to retrieve feedback:', error)
    return []
  }
}

export async function getUserFeedback(userId: string): Promise<FeedbackData[]> {
  try {
    const feedbackQuery = query(
      collection(db, COLLECTIONS.FEEDBACK),
      where('userId', '==', userId),
      orderBy('createdAt', 'desc')
    )
    
    const snapshot = await getDocs(feedbackQuery)
    const userFeedback: FeedbackData[] = []
    
    snapshot.forEach((doc) => {
      userFeedback.push(doc.data() as FeedbackData)
    })
    
    console.log('📥 Retrieved user feedback:', {
      userId,
      count: userFeedback.length
    })
    
    return userFeedback
  } catch (error) {
    console.error('❌ Failed to retrieve user feedback:', error)
    return []
  }
}

export async function getFeedbackStats(): Promise<{
  totalFeedback: number
  averageRating: number
  ratingDistribution: Record<number, number>
  recommendationRate: number
  testStatusDistribution: Record<string, number>
}> {
  try {
    const feedbackList = await getAllFeedback()
    
    if (feedbackList.length === 0) {
      return {
        totalFeedback: 0,
        averageRating: 0,
        ratingDistribution: {},
        recommendationRate: 0,
        testStatusDistribution: {}
      }
    }
    
    // Calculate statistics
    const totalRating = feedbackList.reduce((sum, feedback) => sum + feedback.rating, 0)
    const averageRating = totalRating / feedbackList.length
    
    const ratingDistribution: Record<number, number> = {}
    const testStatusDistribution: Record<string, number> = {}
    let recommendCount = 0
    
    feedbackList.forEach(feedback => {
      // Rating distribution
      ratingDistribution[feedback.rating] = (ratingDistribution[feedback.rating] || 0) + 1
      
      // Test status distribution
      testStatusDistribution[feedback.testStatus] = (testStatusDistribution[feedback.testStatus] || 0) + 1
      
      // Recommendation count
      if (feedback.wouldRecommend) {
        recommendCount++
      }
    })
    
    const recommendationRate = (recommendCount / feedbackList.length) * 100
    
    console.log('📊 Feedback statistics calculated:', {
      totalFeedback: feedbackList.length,
      averageRating: averageRating.toFixed(1),
      recommendationRate: recommendationRate.toFixed(1)
    })
    
    return {
      totalFeedback: feedbackList.length,
      averageRating: parseFloat(averageRating.toFixed(1)),
      ratingDistribution,
      recommendationRate: parseFloat(recommendationRate.toFixed(1)),
      testStatusDistribution
    }
  } catch (error) {
    console.error('❌ Failed to calculate feedback stats:', error)
    return {
      totalFeedback: 0,
      averageRating: 0,
      ratingDistribution: {},
      recommendationRate: 0,
      testStatusDistribution: {}
    }
  }
}