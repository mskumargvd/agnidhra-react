// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // <-- IMPORT FIRESTORE

// Your web app's Firebase configuration
// IMPORTANT: Replace this with your own configuration from the Firebase console
const firebaseConfig = {
  apiKey: "AIzaSyACSDK7vfjEvWj7AyKJqLfcNaRmIIdr1_k",
  authDomain: "agnidhra-website-auth.firebaseapp.com",
  projectId: "agnidhra-website-auth",
  storageBucket: "agnidhra-website-auth.firebasestorage.app",
  messagingSenderId: "484039318334",
  appId: "1:484039318334:web:03a75c9183855ada36ea6f",
  measurementId: "G-YJ0DCJCSF9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app); // <-- INITIALIZE AND EXPORT FIRESTORE