// Import the Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMj9JRGUagjR0cQefUljiUOxe_nh74-XA",
  authDomain: "ecofindr-4fffd.firebaseapp.com",
  projectId: "ecofindr-4fffd",
  storageBucket: "ecofindr-4fffd.appspot.com",
  messagingSenderId: "64553820107",
  appId: "1:64553820107:web:d58342f35b5ccc92ef204e",
  measurementId: "G-TG958E6F56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Reference the forms
const signupForm = document.getElementById("signup");
const loginForm = document.getElementById("login");

// Signup functionality
signupForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the default form submission

  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // User signed up successfully
      alert("Sign-up successful! Redirecting to the home page.");
      window.location.href = "home.html"; // Redirect to home page
    })
    .catch((error) => {
      // Handle errors
      alert(`Error: ${error.message}`);
    });
});

// Login functionality
loginForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the default form submission

  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // User logged in successfully
      alert("Login successful! Redirecting to the home page.");
      window.location.href = "home.html"; // Redirect to home page
    })
    .catch((error) => {
      // Handle errors
      alert(`Error: ${error.message}`);
    });
});
