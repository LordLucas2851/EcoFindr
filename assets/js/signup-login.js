import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";

//Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDMj9JRGUagjR0cQefUljiUOxe_nh74-XA",
  authDomain: "ecofindr-4fffd.firebaseapp.com",
  projectId: "ecofindr-4fffd",
  storageBucket: "ecofindr-4fffd.firebasestorage.app",
  messagingSenderId: "64553820107",
  appId: "1:64553820107:web:d58342f35b5ccc92ef204e",
  measurementId: "G-TG958E6F56"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//Sign Up
const signupForm = document.getElementById("signup");
signupForm.addEventListener("submit", (event) => {
  event.preventDefault(); 

  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User signed up:", user);
      alert("Sign-up successful! Redirecting to the home page.");
      window.location.href = "home.html"; 
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.error("Sign-up error:", errorMessage);
      alert(`Error: ${errorMessage}`);
    });
});

//Login form
const loginForm = document.getElementById("login");
loginForm.addEventListener("submit", (event) => {
  event.preventDefault(); 

  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User logged in:", user);
      alert("Login successful! Redirecting to the home page.");
      window.location.href = "home.html"; 
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.error("Login error:", errorMessage);
      alert(`Error: ${errorMessage}`);
    });
});
