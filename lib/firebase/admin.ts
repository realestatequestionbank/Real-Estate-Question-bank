import { initializeApp, getApps, cert, type App } from 'firebase-admin/app'
import { getFirestore, type Firestore } from 'firebase-admin/firestore'

function getAdminApp(): App {
  const apps = getApps()

  if (apps.length > 0) {
    return apps[0]
  }

  // Initialize with environment variables
  const projectId = process.env.FIREBASE_PROJECT_ID
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL
  const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n')

  if (!projectId || !clientEmail || !privateKey) {
    throw new Error('Missing Firebase Admin credentials in environment variables')
  }

  return initializeApp({
    credential: cert({
      projectId,
      clientEmail,
      privateKey,
    }),
  })
}

// Lazy initialization to avoid issues during build
let adminDb: Firestore | null = null

export function getAdminDb(): Firestore {
  if (!adminDb) {
    const app = getAdminApp()
    adminDb = getFirestore(app)
  }
  return adminDb
}
