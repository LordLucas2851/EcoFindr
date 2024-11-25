// Import Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

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
const auth = getAuth(app);

// Select the forms and input fields
const signupForm = document.getElementById("signup");
const loginForm = document.getElementById("login");

const signupEmail = document.getElementById("signup-email");
const signupPassword = document.getElementById("signup-password");

const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");

// Handle sign-up form submission
signupForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent page reload
    const email = signupEmail.value;
    const password = signupPassword.value;

    // Sign up the user
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Successfully signed up
            console.log("Sign Up Successful:", userCredential.user);
            window.location.href = "home.html"; // Redirect to the home page
        })
        .catch((error) => {
            // Handle Errors
            console.error("Sign Up Error:", error.message);
            alert(error.message);
        });
});

// Handle login form submission
loginForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent page reload
    const email = loginEmail.value;
    const password = loginPassword.value;

    // Sign in the user
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Successfully logged in
            console.log("Login Successful:", userCredential.user);
            window.location.href = "home.html"; // Redirect to the home page
        })
        .catch((error) => {
            // Handle Errors
            console.error("Login Error:", error.message);
            alert(error.message);
        });
});
