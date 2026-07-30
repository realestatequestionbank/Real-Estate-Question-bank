import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDB2e9sTyAR3jPxxip7V5NBYOms3E2-H6M",
  authDomain: "real-estate-88eba.firebaseapp.com",
  projectId: "real-estate-88eba",
  storageBucket: "real-estate-88eba.firebasestorage.app",
  messagingSenderId: "59902684452",
  appId: "1:59902684452:web:55a0c3b64f529371af57b1",
  measurementId: "G-Q17RYL8REG"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const auth = getAuth(app);
export const db = getFirestore(app);
export { app };