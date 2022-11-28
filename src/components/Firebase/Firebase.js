// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-qt8QvaKKG9-QV6qoDKiS3iYMfz5bbPg",
  authDomain: "on-the-code.firebaseapp.com",
  projectId: "on-the-code",
  storageBucket: "on-the-code.appspot.com",
  messagingSenderId: "853551739475",
  appId: "1:853551739475:web:ec3b469fe3cb99cb8c0ca6",
  measurementId: "G-K12G1ZKS8R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
