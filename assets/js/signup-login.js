// Import the necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDMj9JRGUagjR0cQefUljiUOxe_nh74-XA",
    authDomain: "ecofindr-4fffd.firebaseapp.com",
    projectId: "ecofindr-4fffd",
    storageBucket: "ecofindr-4fffd.firebasestorage.app",
    messagingSenderId: "64553820107",
    appId: "1:64553820107:web:d58342f35b5ccc92ef204e",
    measurementId: "G-TG958E6F56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Handle signup form submission
document.getElementById('signup').addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up successfully
            const user = userCredential.user;
            console.log('User signed up:', user);
            window.location.href = 'index.html';  // Redirect to home page
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert('Sign Up Error: ' + errorMessage);
        });
});

// Handle login form submission
document.getElementById('login').addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Logged in successfully
            const user = userCredential.user;
            console.log('User logged in:', user);
            window.location.href = 'index.html';  // Redirect to home page
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert('Login Error: ' + errorMessage);
        });
});
