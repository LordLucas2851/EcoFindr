// Import the necessary Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// Your Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBq9shDTSKIE7lfO8ydnuThm_JxOHMBSfc",
    authDomain: "ecofindr-be091.firebaseapp.com",
    projectId: "ecofindr-be091",
    storageBucket: "ecofindr-be091.firebasestorage.app",
    messagingSenderId: "960864865608",
    appId: "1:960864865608:web:4994220d1cdf9c6d2b777d",
    measurementId: "G-577X5TWXTT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);
