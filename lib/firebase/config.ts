import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDycqu-9Df2_BwtloeDkrKJ5flFV8Ptgeg",
  authDomain: "real-estate-question-bank-new-93357.firebaseapp.com",
  projectId: "real-estate-question-bank-new-93357",
  storageBucket: "real-estate-question-bank-new-93357.firebasestorage.app",
  messagingSenderId: "267684413512",
  appId: "1:267684413512:web:062c38a0d9f5cb5c06587d",
  measurementId: "G-W9TS9PWXNY"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const auth = getAuth(app);
export const db = getFirestore(app);
export { app };