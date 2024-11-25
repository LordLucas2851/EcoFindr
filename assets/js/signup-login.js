// Import Firebase SDK functions
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// Your Firebase configuration
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
const auth = getAuth(app);

// Select form elements
const signupForm = document.getElementById("signup");
const loginForm = document.getElementById("login");

const signupEmail = document.getElementById("signup-email");
const signupPassword = document.getElementById("signup-password");

const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");

// Handle Sign-Up
signupForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission
    const email = signupEmail.value;
    const password = signupPassword.value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("Sign Up Successful:", userCredential.user);
            alert("Sign-up successful! Redirecting to the home page.");
            window.location.href = "home.html"; // Redirect to home page
        })
        .catch((error) => {
            console.error("Sign Up Error:", error.message);
            alert(`Sign Up Error: ${error.message}`);
        });
});

// Handle Login
loginForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission
    const email = loginEmail.value;
    const password = loginPassword.value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("Login Successful:", userCredential.user);
            alert("Login successful! Redirecting to the home page.");
            window.location.href = "home.html"; // Redirect to home page
        })
        .catch((error) => {
            console.error("Login Error:", error.message);
            alert(`Login Error: ${error.message}`);
        });
});
