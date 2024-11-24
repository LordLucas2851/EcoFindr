// Import Firebase dependencies
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBq9shDTSKIE7lfO8ydnuThm_JxOHMBSfc",
  authDomain: "ecofindr-be091.firebaseapp.com",
  projectId: "ecofindr-be091",
  storageBucket: "ecofindr-be091.firebasestorage.app",
  messagingSenderId: "960864865608",
  appId: "1:960864865608:web:4994220d1cdf9c6d2b777d",
  measurementId: "G-577X5TWXTT",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
